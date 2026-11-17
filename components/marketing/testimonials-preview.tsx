import type { ProcedureReview } from "@/lib/procedure-reviews"
import type { HomeTestimonialFallback } from "@/lib/marketing/home-testimonials"

import { Container } from "@/components/marketing/container"
import { Section } from "@/components/marketing/section"
import { SectionHeading } from "@/components/marketing/section-heading"

export type TestimonialsPreviewProps = {
  reviews: ProcedureReview[]
  fallbacks: readonly HomeTestimonialFallback[]
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "•"
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function TestimonialsPreview({ reviews, fallbacks }: TestimonialsPreviewProps) {
  const useDb = reviews.length > 0
  const displayReviews = useDb ? reviews.slice(0, 3) : null
  const displayFallback = !useDb ? fallbacks.slice(0, 3) : null

  const cardClass =
    "flex flex-col rounded-xl border border-stone-200/90 bg-white p-7 shadow-sm ring-1 ring-stone-900/[0.03] sm:p-8"

  return (
    <Section tone="champagne">
      <Container className="space-y-10 md:space-y-12">
        <SectionHeading
          eyebrow="Client voices"
          title="Thoughtful feedback"
          subtitle="Quiet notes from women who’ve visited the studio — everyday brows that feel believable."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <ul className="grid gap-7 md:grid-cols-3 md:gap-8 lg:gap-10">
          {displayReviews
            ? displayReviews.map((review) => (
                <li key={review.id} className={cardClass}>
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-luxury-champagne font-heading text-sm text-luxury-charcoal"
                      aria-hidden
                    >
                      {initials(review.client_name)}
                    </span>
                    <div className="min-w-0">
                      <p className="font-medium leading-snug text-luxury-charcoal">{review.client_name}</p>
                      <p className="text-xs text-stone-500">
                        {new Date(review.created_at).toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-5 flex-1 border-l border-stone-200/95 pl-5 text-[0.9375rem] leading-relaxed text-stone-700">
                    <span className="sr-only">Review: </span>
                    {review.content}
                  </blockquote>
                </li>
              ))
            : null}

          {displayFallback
            ? displayFallback.map((t, i) => (
                <li key={`${t.attribution}-${i}`} className={cardClass}>
                  <blockquote className="flex-1 border-l border-stone-200/95 pl-5 text-[0.9375rem] leading-relaxed text-stone-700">
                    <span className="sr-only">Client note: </span>
                    {t.quote}
                  </blockquote>
                  <footer className="mt-6 border-t border-stone-100 pt-5 text-xs leading-relaxed text-stone-500">
                    <span className="font-medium text-stone-600">{t.attribution}</span>
                    {t.detail ? <span className="mt-1 block text-stone-500">{t.detail}</span> : null}
                  </footer>
                </li>
              ))
            : null}
        </ul>
      </Container>
    </Section>
  )
}
