import type { GoogleReview, GoogleReviewsPayload } from "@/lib/google-reviews"
import { getGoogleReviews } from "@/lib/google-reviews"

import { GoogleReviewsDisplay } from "@/components/reviews/google-reviews-display"
import { cn } from "@/lib/utils"

export type GoogleReviewsProps = {
  heading?: string
  payload?: GoogleReviewsPayload | null
  showTitleRow?: boolean
  /** Extra line under title — turn off when the parent section already explains context */
  showIntroLine?: boolean
  className?: string
  initialVisible?: number
  batchSize?: number
}

function sortNewestFirst(reviews: GoogleReview[]) {
  return [...reviews].sort((a, b) => (b.time ?? 0) - (a.time ?? 0))
}

export default async function GoogleReviews({
  heading = "Google reviews",
  payload: payloadProp,
  showTitleRow = true,
  showIntroLine = true,
  className,
  initialVisible,
  batchSize,
}: GoogleReviewsProps) {
  const payload = payloadProp !== undefined ? payloadProp : await getGoogleReviews()
  if (!payload?.reviews?.length) return null

  const sorted = sortNewestFirst(payload.reviews)

  return (
    <GoogleReviewsDisplay
      reviews={sorted}
      placeUrl={payload.placeUrl}
      heading={heading ?? "Google reviews"}
      showTitleRow={showTitleRow}
      showIntroLine={showIntroLine}
      className={cn(className)}
      initialVisible={initialVisible}
      batchSize={batchSize}
    />
  )
}
