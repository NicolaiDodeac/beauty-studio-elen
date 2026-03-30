import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

type Payload = {
  procedure: string
  client_name: string
  content: string
  booksy_url?: string | null
}

export async function POST(req: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
  const adminEmails = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)

  if (!url || !anonKey || adminEmails.length === 0) {
    return NextResponse.json({ error: "Admin auth is not configured" }, { status: 503 })
  }

  const cookieStore = await cookies()
  const supabaseAuth = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          cookieStore.set(name, value, options)
        )
      },
    },
  })

  const {
    data: { user },
  } = await supabaseAuth.auth.getUser()

  const email = user?.email?.toLowerCase()
  if (!email) {
    return NextResponse.json({ error: "Login required" }, { status: 401 })
  }
  if (!adminEmails.includes(email)) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 })
  }

  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()
  if (!url || !serviceRole) {
    return NextResponse.json({ error: "Supabase is not configured" }, { status: 503 })
  }

  let body: Payload
  try {
    body = (await req.json()) as Payload
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const procedure = body.procedure?.trim()
  const client_name = body.client_name?.trim()
  const content = body.content?.trim()
  const booksy_url = body.booksy_url?.trim() || null

  if (!procedure || !client_name || !content) {
    return NextResponse.json(
      { error: "Missing procedure, client_name, or content" },
      { status: 400 }
    )
  }

  const supabase = createClient(url, serviceRole)

  const { data, error } = await supabase
    .from("procedure_reviews")
    .insert({
      procedure,
      client_name,
      content,
      booksy_url,
    })
    .select("id")
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ id: data?.id })
}

