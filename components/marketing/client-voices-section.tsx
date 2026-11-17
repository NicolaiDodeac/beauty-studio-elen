import type { GoogleReviewsPayload } from "@/lib/google-reviews"
import type { ProcedureReview } from "@/lib/procedure-reviews"
import type { HomeTestimonialFallback } from "@/lib/marketing/home-testimonials"

import GoogleReviews from "@/components/reviews/google-reviews"
import { Container } from "@/components/marketing/container"
import { Section } from "@/components/marketing/section"
import { SectionHeading } from "@/components/marketing/section-heading"
import { TestimonialsPreview } from "@/components/marketing/testimonials-preview"

export type ClientVoicesSectionProps = {
  googlePayload: GoogleReviewsPayload | null
  procedureReviews: ProcedureReview[]
  fallbacks: readonly HomeTestimonialFallback[]
}

/**
 * Prefer verified Google reviews when the Places API returns them; otherwise studio testimonials / soft fallbacks.
 */
export function ClientVoicesSection({ googlePayload, procedureReviews, fallbacks }: ClientVoicesSectionProps) {
  if (googlePayload?.reviews?.length) {
    return (
      <Section tone="champagne">
        <Container className="space-y-10 md:space-y-12">
          <SectionHeading
            eyebrow="Client voices"
            title="Google reviews"
            subtitle="Verified feedback from clients on Google."
            align="center"
            className="mx-auto max-w-2xl"
          />
          <GoogleReviews
            payload={googlePayload}
            heading=""
            showTitleRow={false}
            showIntroLine={false}
            initialVisible={2}
            batchSize={2}
          />
        </Container>
      </Section>
    )
  }

  return <TestimonialsPreview reviews={procedureReviews} fallbacks={fallbacks} />
}
