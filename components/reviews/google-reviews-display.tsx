"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ExternalLink, Star } from "lucide-react"

import type { GoogleReview } from "@/lib/google-reviews"
import { cn } from "@/lib/utils"

function formatReviewDate(timeSeconds: number) {
  if (!Number.isFinite(timeSeconds)) return ""
  return new Date(timeSeconds * 1000).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export type GoogleReviewsDisplayProps = {
  reviews: GoogleReview[]
  placeUrl: string
  heading?: string
  showTitleRow?: boolean
  /** Explainer under title — off when parent section already sets context */
  showIntroLine?: boolean
  className?: string
  /** First paint batch — modest on mobile; scroll loads more */
  initialVisible?: number
  /** How many to reveal each time the sentinel enters view */
  batchSize?: number
}

export function GoogleReviewsDisplay({
  reviews,
  placeUrl,
  heading = "Google reviews",
  showTitleRow = true,
  showIntroLine = true,
  className,
  initialVisible = 3,
  batchSize = 3,
}: GoogleReviewsDisplayProps) {
  const total = reviews.length
  const safeInitial = Math.min(Math.max(1, initialVisible), total)
  const [visibleCount, setVisibleCount] = useState(safeInitial)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const loadMore = useCallback(() => {
    setVisibleCount((v) => Math.min(v + batchSize, total))
  }, [batchSize, total])

  /** Show everything when user prefers reduced motion (no scroll-reveal game) */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => {
      if (mq.matches) setVisibleCount(total)
    }
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [total])

  useEffect(() => {
    if (visibleCount >= total) return
    const node = sentinelRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          loadMore()
        }
      },
      { root: null, rootMargin: "240px 0px", threshold: 0 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visibleCount, total, loadMore])

  const visible = reviews.slice(0, visibleCount)
  const hasMore = visibleCount < total

  return (
    <div className={cn("min-w-0", className)}>
      {showTitleRow ? (
        <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-luxury-charcoal sm:text-2xl">{heading}</h2>
          <Link
            href={placeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-luxury-charcoal hover:decoration-stone-500 sm:self-auto"
          >
            <ExternalLink className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
            View all on Google
          </Link>
        </div>
      ) : (
        <div className="mb-5 flex justify-end sm:mb-6">
          <Link
            href={placeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-luxury-charcoal"
          >
            <ExternalLink className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
            View all on Google
          </Link>
        </div>
      )}

      {showIntroLine ? (
        <p className="mb-5 max-w-2xl text-xs leading-relaxed text-stone-500 sm:mb-6 sm:text-sm">
          Latest reviews first.{" "}
          <Link
            href={placeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-stone-600 underline underline-offset-2 hover:text-stone-800"
          >
            Google
          </Link>{" "}
          has the full list.
        </p>
      ) : null}

      <ul
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        aria-live="polite"
        aria-busy={hasMore}
      >
        {visible.map((review, idx) => (
          <li key={`${review.author_name}-${review.time}-${idx}`} className="min-w-0">
            <article
              className={cn(
                "flex h-full min-h-[11rem] flex-col rounded-2xl border border-stone-200/90 bg-[#F8F5F2]/90 p-5 shadow-sm ring-1 ring-stone-900/[0.04]",
                "sm:min-h-[12rem] sm:p-6",
                "transition-[box-shadow,transform] duration-300 hover:shadow-md hover:ring-stone-900/[0.06]",
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 gap-y-2 border-b border-stone-200/70 pb-3 sm:gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-stone-500 sm:text-xs">
                    {formatReviewDate(review.time)}
                  </p>
                  <p className="mt-1 truncate font-medium leading-snug text-luxury-charcoal sm:text-base">{review.author_name}</p>
                </div>
                <div
                  className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/80 px-2 py-1 text-amber-600 ring-1 ring-stone-200/80"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  <Star className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" aria-hidden />
                  <span className="text-xs font-semibold tabular-nums text-stone-800 sm:text-sm">{review.rating.toFixed(1)}</span>
                </div>
              </div>

              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-stone-700 sm:mt-4 sm:text-[0.9375rem] sm:leading-[1.65]">
                <span className="text-stone-400">&ldquo;</span>
                {review.text}
                <span className="text-stone-400">&rdquo;</span>
              </blockquote>

              <div className="mt-4 border-t border-stone-200/60 pt-3 sm:mt-auto sm:pt-4">
                <Link
                  href={review.author_url || placeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 underline-offset-4 hover:text-luxury-charcoal hover:underline sm:text-sm"
                >
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
                  Open on Google
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {hasMore ? (
        <div
          ref={sentinelRef}
          className="flex min-h-[4rem] items-center justify-center py-6"
          aria-hidden
        >
          <span className="text-xs text-stone-400 sm:text-sm">Scroll for more reviews…</span>
        </div>
      ) : total > safeInitial ? (
        <p className="mt-4 text-center text-xs text-stone-400 sm:text-sm">You&apos;ve seen all reviews loaded here.</p>
      ) : null}

      <p className="mt-8 border-t border-stone-200/80 pt-5 text-center text-[11px] leading-relaxed text-stone-500 sm:text-xs">
        Older reviews and the complete thread live on{" "}
        <Link href={placeUrl} target="_blank" rel="noreferrer" className="font-medium text-stone-600 underline underline-offset-2 hover:text-stone-800">
          Google
        </Link>
        — their API only returns a small batch here.
      </p>
    </div>
  )
}
