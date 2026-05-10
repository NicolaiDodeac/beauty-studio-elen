/**
 * Central Booksy review summary for social proof (single source of truth for counts/copy).
 * Update here only when Booksy stats change.
 */
const DEFAULT_BOOKSY_PROFILE_URL =
  "https://booksy.com/en-gb/99970_elen-makeup-telford_skin-care_1255315_donnington#ba_s=sr_1"

export const BOOKSY_REVIEW_STATS = {
  ratingLabel: "★★★★★",
  /** Shown next to stars — Booksy profile linked separately */
  summaryLine: "100+ 5-star reviews on Booksy",
} as const

/** Clean profile URL (no hash) for links and schema */
export function getBooksyProfileUrl(): string {
  const env = process.env.NEXT_PUBLIC_BOOKSY_URL?.trim()
  const raw = env || DEFAULT_BOOKSY_PROFILE_URL
  return raw.replace(/#.*$/, "")
}
