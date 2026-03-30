"use client"

import { useMemo, useState } from "react"
import { Loader2, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabaseBrowser } from "@/lib/supabase-browser"

function errorMessage(code: string | null) {
  switch (code) {
    case "login_required":
      return "Please sign in to access the admin area."
    case "not_authorized":
      return "Your account is not authorized for admin access."
    case "auth_failed":
      return "Login link is invalid or expired. Please request a new magic link."
    case "admin_not_configured":
      return "Admin login is not configured. Check ADMIN_EMAILS and Supabase env vars."
    case "supabase_not_configured":
      return "Supabase is not configured. Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    default:
      return null
  }
}

export default function AdminMagicLinkLogin({
  errorCode,
  supabaseErrorCode,
  supabaseErrorDescription,
}: {
  errorCode?: string
  supabaseErrorCode?: string
  supabaseErrorDescription?: string
}) {
  const error = useMemo(() => errorMessage(errorCode ?? null), [errorCode])

  const [email, setEmail] = useState("")
  const [sending, setSending] = useState(false)
  const [sentTo, setSentTo] = useState<string | null>(null)
  const [localError, setLocalError] = useState<string | null>(null)

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-6">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          <CardDescription className="text-center">
            Enter your email to receive a secure magic link.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error ? (
            <div className="bg-amber-50 text-amber-800 p-3 rounded-md text-sm">{error}</div>
          ) : null}
          {supabaseErrorCode || supabaseErrorDescription ? (
            <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">
              {supabaseErrorDescription
                ? decodeURIComponent(supabaseErrorDescription)
                : `Authentication error: ${supabaseErrorCode}`}
            </div>
          ) : null}
          {localError ? (
            <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">{localError}</div>
          ) : null}
          {sentTo ? (
            <div className="bg-green-50 text-green-700 p-3 rounded-md text-sm">
              Magic link sent to <strong>{sentTo}</strong>. Open your inbox to continue.
            </div>
          ) : null}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-pink-600 hover:bg-pink-700"
            disabled={sending || !email.trim()}
            onClick={async () => {
              setLocalError(null)
              setSentTo(null)
              if (!supabaseBrowser) {
                setLocalError("Supabase is not configured in this environment.")
                return
              }
              setSending(true)
              try {
                const { error } = await supabaseBrowser.auth.signInWithOtp({
                  email: email.trim(),
                  options: {
                    emailRedirectTo: `${window.location.origin}/auth/callback`,
                  },
                })
                if (error) throw error
                setSentTo(email.trim())
              } catch (err) {
                setLocalError(err instanceof Error ? err.message : "Failed to send magic link.")
              } finally {
                setSending(false)
              }
            }}
          >
            {sending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                Send magic link
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

