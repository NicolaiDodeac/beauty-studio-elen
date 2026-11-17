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

function isMissingTableMessage(message: string): boolean {
  return message.includes("Could not find the table")
}

function isTransientOrLocalFailure(message: string): boolean {
  return /fetch failed|network|econnrefused|ENOTFOUND|certificate/i.test(message)
}

export async function getProcedureReviews(procedure: string): Promise<ProcedureReview[]> {
  const supabase = getSupabaseAdminClient()
  if (!supabase) return []

  try {
    const { data, error } = await supabase
      .from("procedure_reviews")
      .select("id, procedure, client_name, content, booksy_url, created_at")
      .eq("procedure", procedure)
      .order("created_at", { ascending: false })
      .limit(12)

    if (error) {
      if (isMissingTableMessage(error.message)) {
        return []
      }
      // Avoid console.error — Next dev treats it like an app error. Reviews are optional (fallbacks exist).
      if (process.env.NODE_ENV === "development" && !isTransientOrLocalFailure(error.message)) {
        console.warn("[procedure-reviews]", error.message)
      }
      return []
    }

    return (data || []) as ProcedureReview[]
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e)
    // Thrown e.g. when Supabase URL is unreachable or TLS fails — degrade silently to homepage fallbacks.
    if (process.env.NODE_ENV === "development") {
      console.warn("[procedure-reviews] Skipping DB:", message)
    }
    return []
  }
}

