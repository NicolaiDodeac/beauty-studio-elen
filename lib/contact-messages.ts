import { createClient } from "@supabase/supabase-js"

export type ContactMessage = {
  id: number
  name: string
  email: string
  phone: string | null
  subject: string | null
  message: string
  created_at: string
}

function getSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()
  if (!url || !serviceRole) return null
  return createClient(url, serviceRole)
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  const supabase = getSupabaseAdminClient()
  if (!supabase) return []

  const { data, error } = await supabase
    .from("contacts")
    .select("id, name, email, phone, subject, message, created_at")
    .order("created_at", { ascending: false })

  if (error) {
    if (!error.message.includes("Could not find the table")) {
      console.error("Failed to load contact messages:", error.message)
    }
    return []
  }

  return data ?? []
}
