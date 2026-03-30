import { createClient } from "@supabase/supabase-js"

// Placeholders allow `next build` without a local .env; set real values in .env.local for runtime.
const configuredUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
const configuredAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()

export const supabaseConfigured = Boolean(configuredUrl && configuredAnonKey)

const supabaseUrl = configuredUrl || "https://placeholder.supabase.co"
const supabaseAnonKey = configuredAnonKey || "placeholder-anon-key"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
