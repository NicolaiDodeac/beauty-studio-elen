import type { Metadata } from "next"

import { AboutElenPreview } from "@/components/marketing/about-elen-preview"
import { BooksyReviewsSummary } from "@/components/marketing/booksy-reviews-summary"
import { Container } from "@/components/marketing/container"
import { FAQPreview } from "@/components/marketing/faq-preview"
import { FinalCTA } from "@/components/marketing/final-cta"
import { HealedResultsEmphasis } from "@/components/marketing/healed-results-emphasis"
import { PMUHero } from "@/components/marketing/pmu-hero"
import { ResultsPreviewGallery } from "@/components/marketing/results-preview-gallery"
import { Section } from "@/components/marketing/section"
import { StickyMobileCTA } from "@/components/marketing/sticky-mobile-cta"
import { TrustStrip } from "@/components/marketing/trust-strip"
import { WhyChooseElen } from "@/components/marketing/why-choose-elen"
import { JsonLd } from "@/components/seo/json-ld"
import { HOME_FAQ } from "@/lib/marketing/home-faq"
import { PMU_RESULTS_PREVIEW_ITEMS } from "@/lib/marketing/pmu-gallery"
import { buildPageMetadata } from "@/lib/seo/metadata"
import { beautySalonLocalBusinessSchema, faqPageSchema } from "@/lib/seo/schema"

const HOME_DESCRIPTION =
  "Soft luxury beauty and natural powder brows in Telford by ELEN Makeup. Book a free consultation for refined, elegant results designed around you."

export const metadata: Metadata = buildPageMetadata({
  title: { absolute: "ELEN Makeup Telford | Natural Beauty & Powder Brows" },
  description: HOME_DESCRIPTION,
  path: "/",
})

const TRUST_ITEMS = [
  "Natural-Looking Results",
  "Tailored Consultation",
  "Calm Luxury Experience",
  "100+ Booksy Reviews",
] as const

const WHY_CARDS = [
  {
    title: "Natural, Soft Results",
    description:
      "Beauty enhancements designed to feel refined, balanced, and never overdone.",
  },
  {
    title: "Personal Consultation",
    description:
      "Every appointment starts with understanding your features, lifestyle, and desired look.",
  },
  {
    title: "Calm Premium Experience",
    description:
      "A relaxed, professional space where you can feel comfortable and cared for.",
  },
  {
    title: "Trusted Local Artist",
    description:
      "Loved by clients across Telford & Shropshire for detail, warmth, and natural results.",
  },
] as const

const ABOUT_COPY = [
  "ELEN Makeup is a calm, appointment-led studio in Telford — built around soft luxury beauty and natural confidence.",
  "Everything starts with listening: how you live, what makes you feel good in your skin, and the ease you want from your routine.",
  "Expect thoughtful attention and honest guidance — whether you’re exploring brows, refining your look, or booking your first visit.",
] as const

export default function Home() {
  return (
    <div className="pb-28 md:pb-0">
      <PMUHero
        eyebrow="Soft Luxury Beauty in Telford"
        headline="Effortless Beauty That Still Feels Like You"
        subheadline="Natural, refined beauty treatments designed to help you feel polished, confident, and softly enhanced every day."
        primaryCta="Book Free Consultation"
        secondaryCta="Explore Powder Brows"
        secondaryHref="/powder-brows-telford"
        trustLine="Trusted by women across Telford & Shropshire for natural, elegant results."
        showBooksyReviewProof
      />

      <TrustStrip items={TRUST_ITEMS} />

      <HealedResultsEmphasis variant="home" />

      <ResultsPreviewGallery
        title="A Soft Preview of Natural Results"
        subtitle="Explore real client transformations and see how subtle enhancements can make everyday beauty feel effortless."
        items={PMU_RESULTS_PREVIEW_ITEMS}
        resultsHref="/powder-brows-telford#gallery"
        ctaLabel="Explore Powder Brows"
      />

      <WhyChooseElen
        title="Why clients choose Elen"
        subtitle="A founder-led studio experience rooted in trust, warmth, and softly refined beauty."
        cards={WHY_CARDS}
      />

      <AboutElenPreview paragraphs={ABOUT_COPY} />

      <Section tone="champagne">
        <Container>
          <BooksyReviewsSummary variant="section" />
        </Container>
      </Section>

      <FAQPreview items={HOME_FAQ} />

      <FinalCTA
        headline="Take the first step toward effortless confidence"
        text="Book a free, relaxed consultation — we’ll talk through your goals and help you understand what might suit you. No pressure."
        ctaLabel="Book free consultation"
      />

      <StickyMobileCTA label="Book Consultation" />

      <JsonLd
        data={[beautySalonLocalBusinessSchema(), faqPageSchema([...HOME_FAQ])]}
      />
    </div>
  )
}
