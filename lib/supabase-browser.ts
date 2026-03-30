"use client"

import { createBrowserClient } from "@supabase/ssr"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()

// createBrowserClient keeps the PKCE verifier in cookies (not localStorage), so
// server-side `/auth/callback` can call exchangeCodeForSession successfully.
export const supabaseBrowser =
  url && anonKey ? createBrowserClient(url, anonKey) : null

