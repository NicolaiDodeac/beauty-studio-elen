import { createClient } from "@supabase/supabase-js"

export type ProcedureReview = {
  id: string
  procedure: string
  client_name: string
  content: string
  booksy_url: string | null
  created_at: string
}

function getSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()
  if (!url || !serviceRole) return null
  return createClient(url, serviceRole)
}

export async function getProcedureReviews(procedure: string): Promise<ProcedureReview[]> {
  const supabase = getSupabaseAdminClient()
  if (!supabase) return []

  const { data, error } = await supabase
    .from("procedure_reviews")
    .select("id, procedure, client_name, content, booksy_url, created_at")
    .eq("procedure", procedure)
    .order("created_at", { ascending: false })
    .limit(12)

  if (error) {
    if (!error.message.includes("Could not find the table")) {
      console.error("Failed to load procedure reviews:", error.message)
    }
    return []
  }

  return (data || []) as ProcedureReview[]
}

