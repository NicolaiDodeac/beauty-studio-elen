import Link from "next/link"
import { ExternalLink } from "lucide-react"

import type { ProcedureReview } from "@/lib/procedure-reviews"

export default function ProcedureReviews({
  procedureName,
  reviews,
  heading,
  variant = "section",
}: {
  procedureName: string
  reviews: ProcedureReview[]
  heading?: string
  variant?: "section" | "panel"
}) {
  if (!reviews.length) return null

  const title = heading || `Real Reviews for ${procedureName}`

  const content = (
    <>
      <h2 className={variant === "panel" ? "text-xl font-bold mb-4 font-heading" : "text-2xl font-bold mb-6 font-heading"}>
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-[#F8F5F2] p-6 rounded-lg flex flex-col gap-4">
            <div>
              <p className="font-medium text-gray-900">{review.client_name}</p>
              <p className="text-xs text-gray-500">
                {new Date(review.created_at).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <p className="text-gray-700 italic">"{review.content}"</p>

            {review.booksy_url ? (
              <Link
                href={review.booksy_url}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gray-800 underline underline-offset-4 hover:text-amber-700"
              >
                <ExternalLink className="h-4 w-4" />
                View on Booksy
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </>
  )

  return (
    variant === "panel" ? (
      <div>{content}</div>
    ) : (
      <section className="my-16">{content}</section>
    )
  )
}

