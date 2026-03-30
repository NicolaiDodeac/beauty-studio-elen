import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createServerClient } from "@supabase/ssr"

function parseAdminEmails(raw: string | undefined): string[] {
  return (raw || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
}

export async function requireAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
  const adminEmails = parseAdminEmails(process.env.ADMIN_EMAILS)

  if (!url || !anonKey || adminEmails.length === 0) {
    redirect("/admin?error=admin_not_configured")
  }

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
          // Server Components can't set cookies directly; this is safe to ignore here.
        }
      },
    },
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const email = user?.email?.toLowerCase()
  if (!email) {
    redirect("/admin?error=login_required")
  }

  if (!adminEmails.includes(email)) {
    redirect("/admin?error=not_authorized")
  }

  return { user, email }
}

