import { NextResponse, type NextRequest } from "next/server"
import { createServerClient } from "@supabase/ssr"

function parseAdminEmails(raw: string | undefined): string[] {
  return (raw || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow the login page and auth callback without checks.
  if (pathname === "/admin" || pathname.startsWith("/auth/callback")) {
    return NextResponse.next()
  }

  // Protect everything under /admin/*
  if (!pathname.startsWith("/admin/")) {
    return NextResponse.next()
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
  const adminEmails = parseAdminEmails(process.env.ADMIN_EMAILS)

  if (!url || !anonKey || adminEmails.length === 0) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = "/admin"
    redirectUrl.searchParams.set("error", "admin_not_configured")
    return NextResponse.redirect(redirectUrl)
  }

  let response = NextResponse.next()

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options)
        })
      },
    },
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const email = user?.email?.toLowerCase()
  if (!email) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = "/admin"
    redirectUrl.searchParams.set("error", "login_required")
    return NextResponse.redirect(redirectUrl)
  }

  if (!adminEmails.includes(email)) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = "/admin"
    redirectUrl.searchParams.set("error", "not_authorized")
    return NextResponse.redirect(redirectUrl)
  }

  return response
}

export const config = {
  matcher: ["/admin/:path*"],
}

