import Link from "next/link"
import { ExternalLink, Star } from "lucide-react"

import { getGoogleReviews } from "@/lib/google-reviews"

function formatReviewDate(timeSeconds: number) {
  if (!Number.isFinite(timeSeconds)) return ""
  return new Date(timeSeconds * 1000).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export default async function GoogleReviews({ heading = "Google reviews" }: { heading?: string }) {
  const payload = await getGoogleReviews()
  if (!payload?.reviews?.length) return null

  return (
    <div>
      <div className="flex items-end justify-between gap-4 mb-4">
        <h2 className="text-xl font-bold font-heading">{heading}</h2>
        <Link
          href={payload.placeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 underline underline-offset-4 hover:text-amber-700"
        >
          <ExternalLink className="h-4 w-4" />
          View on Google
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {payload.reviews.map((review, idx) => (
          <div key={`${review.author_name}-${review.time}-${idx}`} className="bg-[#F8F5F2] p-6 rounded-lg flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-gray-900">
                  {formatReviewDate(review.time)}{" "}
                  <span className="text-gray-900">{review.author_name}</span>
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-amber-500 shrink-0" aria-label={`Rating ${review.rating} out of 5`}>
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium text-gray-900">{review.rating.toFixed(1)}</span>
              </div>
            </div>

            <p className="text-gray-700 italic">"{review.text}"</p>

            <div className="mt-auto">
              <Link
                href={review.author_url || payload.placeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 underline underline-offset-4 hover:text-amber-700"
              >
                <ExternalLink className="h-4 w-4" />
                Open on Google
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

