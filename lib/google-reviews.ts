export type GoogleReview = {
  author_name: string
  author_url?: string
  rating: number
  text: string
  time: number
}

export type GoogleReviewsPayload = {
  placeName: string
  placeUrl: string
  reviews: GoogleReview[]
}

const GOOGLE_PLACES_DETAILS_ENDPOINT = "https://maps.googleapis.com/maps/api/place/details/json"

export async function getGoogleReviews(): Promise<GoogleReviewsPayload | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim()
  const placeId = process.env.GOOGLE_PLACE_ID?.trim()

  if (!apiKey || !placeId) return null

  const url = new URL(GOOGLE_PLACES_DETAILS_ENDPOINT)
  url.searchParams.set("place_id", placeId)
  url.searchParams.set("fields", "name,url,reviews")
  url.searchParams.set("reviews_sort", "newest")
  url.searchParams.set("key", apiKey)

  const res = await fetch(url.toString(), { next: { revalidate: 60 * 60 } })
  if (!res.ok) return null

  const data = (await res.json()) as any
  if (data?.status !== "OK") return null

  const result = data?.result
  const placeName = (result?.name || "Google").toString()
  const placeUrl = (result?.url || "").toString()
  const reviews = Array.isArray(result?.reviews) ? (result.reviews as GoogleReview[]) : []

  if (!placeUrl) return null

  return { placeName, placeUrl, reviews }
}

