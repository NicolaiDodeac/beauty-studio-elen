import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BOOKSY_REVIEW_STATS, getBooksyProfileUrl } from "@/lib/reviews/review-stats"
import { cn } from "@/lib/utils"

export type BooksyReviewQuote = {
  /** Quote text only — no fabricated names */
  text: string
}

export type BooksyReviewsSummaryProps = {
  variant: "compact" | "section"
  /** When true, renders `quotes` only if the array is non-empty */
  showQuotes?: boolean
  quotes?: readonly BooksyReviewQuote[]
  className?: string
}

export function BooksyReviewsSummary({
  variant,
  showQuotes = false,
  quotes = [],
  className,
}: BooksyReviewsSummaryProps) {
  const url = getBooksyProfileUrl()
  const { ratingLabel, summaryLine } = BOOKSY_REVIEW_STATS
  const safeQuotes = showQuotes && quotes.length > 0 ? quotes : []

  if (variant === "compact") {
    return (
      <div className={cn("text-sm leading-relaxed text-stone-600", className)}>
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="select-none text-base tracking-tight text-stone-700" aria-hidden>
            {ratingLabel}
          </span>
          <span className="text-stone-500">·</span>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-luxury-charcoal hover:decoration-stone-500"
          >
            {summaryLine}
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-stone-200/90 bg-luxury-champagne/80 px-6 py-8 shadow-sm ring-1 ring-stone-900/[0.04] sm:px-8 sm:py-10",
        className,
      )}
    >
      <h2 className="font-heading text-xl tracking-tight text-luxury-charcoal sm:text-2xl">Loved by clients on Booksy</h2>
      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-stone-600">
        <span className="select-none text-lg tracking-tight text-stone-800" aria-hidden>
          {ratingLabel}
        </span>
        <span className="text-stone-400">·</span>
        <span className="font-medium text-stone-700">{BOOKSY_REVIEW_STATS.summaryLine}</span>
      </p>

      {safeQuotes.length > 0 ? (
        <ul className="mt-8 space-y-5 border-t border-stone-200/80 pt-8">
          {safeQuotes.map((q, i) => (
            <li key={i}>
              <blockquote className="border-l-2 border-stone-300/90 pl-5 text-[0.9375rem] leading-relaxed text-stone-700">
                &ldquo;{q.text}&rdquo;
              </blockquote>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-600">
          Read verified client reviews on Booksy before booking — star ratings and full feedback live on our profile.
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Button asChild variant="ctaOutline" size="lg" className="border-stone-300 text-luxury-charcoal">
          <Link href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
            View all reviews on Booksy
            <ExternalLink className="h-4 w-4 opacity-70" aria-hidden />
          </Link>
        </Button>
      </div>
    </div>
  )
}
