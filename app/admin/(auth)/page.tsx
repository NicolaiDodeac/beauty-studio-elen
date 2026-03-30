import { redirect } from "next/navigation"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

import AdminMagicLinkLogin from "@/components/admin/admin-magic-link-login"

function parseAdminEmails(raw: string | undefined): string[] {
  return (raw || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = (await searchParams) || {}
  const errorCode = typeof sp.error === "string" ? sp.error : undefined
  const supabaseErrorCode = typeof sp.error_code === "string" ? sp.error_code : undefined
  const supabaseErrorDescription =
    typeof sp.error_description === "string" ? sp.error_description : undefined

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
  const adminEmails = parseAdminEmails(process.env.ADMIN_EMAILS)

  if (url && anonKey) {
    const cookieStore = await cookies()
    const supabase = createServerClient(url, anonKey, {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // ignored
          }
        },
      },
    })

    const {
      data: { user },
    } = await supabase.auth.getUser()

    const email = user?.email?.toLowerCase()
    if (email && adminEmails.includes(email)) {
      redirect("/admin/dashboard")
    }
  }

  return (
    <AdminMagicLinkLogin
      errorCode={errorCode}
      supabaseErrorCode={supabaseErrorCode}
      supabaseErrorDescription={supabaseErrorDescription}
    />
  )
}

