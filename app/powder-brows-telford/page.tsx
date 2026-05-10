    import type { Metadata } from "next"
import Link from "next/link"

import { AboutElenPreview } from "@/components/marketing/about-elen-preview"
import { BooksyReviewsSummary } from "@/components/marketing/booksy-reviews-summary"
import { Container } from "@/components/marketing/container"
import GoogleReviews from "@/components/reviews/google-reviews"
import { FAQPreview } from "@/components/marketing/faq-preview"
import { FinalCTA } from "@/components/marketing/final-cta"
import { HealedResultsEmphasis } from "@/components/marketing/healed-results-emphasis"
import { PMUHero } from "@/components/marketing/pmu-hero"
import { ProcessSteps } from "@/components/marketing/process-steps"
import { ResultsPreviewGallery } from "@/components/marketing/results-preview-gallery"
import { Section } from "@/components/marketing/section"
import { SectionHeading } from "@/components/marketing/section-heading"
import { StickyMobileCTA } from "@/components/marketing/sticky-mobile-cta"
import { TrustStrip } from "@/components/marketing/trust-strip"
import { WhyChooseElen } from "@/components/marketing/why-choose-elen"
import { JsonLd } from "@/components/seo/json-ld"
import { Button } from "@/components/ui/button"
import { PMU_RESULTS_PREVIEW_ITEMS } from "@/lib/marketing/pmu-gallery"
import { getGoogleReviews } from "@/lib/google-reviews"
import { buildPageMetadata } from "@/lib/seo/metadata"
import { breadcrumbListSchema, faqPageSchema, serviceSchema } from "@/lib/seo/schema"

const POWDER_PAGE_DESCRIPTION =
  "Natural powder brows in Telford by ELEN Makeup. Soft, elegant semi permanent brows designed around your features. Book a free consultation today."

export const metadata: Metadata = buildPageMetadata({
  title: { absolute: "Powder Brows Telford | Natural Powder Brows | ELEN Makeup" },
  description: POWDER_PAGE_DESCRIPTION,
  path: "/powder-brows-telford",
})

const TRUST_ITEMS = [
  "Natural healed results",
  "Tailored brow mapping",
  "Soft powder finish",
  "Consultation first",
] as const

const WHY_POWDER_BROWS_CARDS = [
  {
    title: "Wake up with brows already there",
    description: "Soft definition from first coffee onward — less drawing, less second-guessing in the mirror.",
  },
  {
    title: "Time back on busy mornings",
    description: "Many clients simply enjoy one fewer step — work days, school runs, or slower weekends alike.",
  },
  {
    title: "Designed for how they heal",
    description: "Colour and density are planned for the settled stage — soft, natural-looking wear on real skin.",
  },
  {
    title: "Sparse or uneven brows",
    description: "Shading can balance gaps and asymmetry while still reading like brow hair and skin, not a block tint.",
  },
  {
    title: "Your face, your pace",
    description: "Fullness and arch follow your structure — never copied from another face or rushed through mapping.",
  },
] as const

const PROCESS_STEPS = [
  { title: "Free Consultation" },
  { title: "Brow Mapping & Design" },
  { title: "Powder Brow Treatment" },
  { title: "Healing & Touch-Up Advice" },
] as const

const POWDER_BROWS_FAQ = [
  {
    question: "Do powder brows hurt?",
    answer:
      "Most people feel pressure or light scratching rather than sharp pain. Numbing is used throughout, and you can pause or speak up at any time — there’s no prize for sitting still in silence.",
  },
  {
    question: "Will my brows look natural?",
    answer:
      "That’s what we plan for. Powder work uses soft pixel-style shading from barely-there to more defined — always aligned with your features and how you like to look in ordinary light.",
  },
  {
    question: "How long do powder brows last?",
    answer:
      "Many clients enjoy results for roughly 1–2 years before a colour refresh feels right, depending on skin, lifestyle, sun, and aftercare. Touch-ups can keep your brows looking fresh when you’re ready.",
  },
  {
    question: "What happens at the free consultation?",
    answer:
      "You’ll talk through the look you want, check suitability, review your natural brows, and outline a shape plan — with space to ask anything. There’s no pressure to book the procedure on the spot.",
  },
  {
    question: "How long does healing take?",
    answer:
      "Initial healing often follows a similar rhythm to other brow PMU: colour can look bolder at first, then soften as skin settles. You’ll leave with clear aftercare so you know what to expect day by day.",
  },
  {
    question: "Can powder brows cover old PMU?",
    answer:
      "Sometimes yes, sometimes a neutralisation or removal path is safer — it depends on what’s already there. Suitability and honest options are always discussed during your consultation.",
  },
  {
    question: "Do I need to pay a deposit?",
    answer:
      "The consultation itself doesn’t require a deposit. If you decide to book your treatment after we’ve met, a small deposit secures your appointment slot — we’ll explain that clearly when you’re ready.",
  },
] as const

const ABOUT_ELEN_POWDER = [
  "Elen focuses on natural powder brows in Telford — soft ombre-style shading that should feel elegant in daylight and close conversation, not only on camera.",
  "Expect careful mapping, unhurried appointments, and honest guidance: face shape, skin, and how you live all inform the plan.",
  "Whether you want a gentle gradient, fuller definition, or simply less daily pencil work — it starts with a relaxed consultation and no obligation to book the same day.",
] as const

export default async function PowderBrowsTelfordPage() {
  const googlePayload = await getGoogleReviews()

  return (
    <div className="pb-28 md:pb-0">
      <PMUHero
        eyebrow="Powder Brows Telford"
        headline="Natural Powder Brows Designed Around Your Face"
        subheadline="Soft semi-permanent brows mapped to your face — less morning maintenance, with healing and aftercare explained clearly from the start."
        primaryCta="Book Free Consultation"
        secondaryCta="View Results"
        secondaryHref="#gallery"
        trustLine="Free consultation first • Tailored brow mapping • Natural healed results"
        imageAlt="Powder brows Telford — soft natural semi permanent brows, ELEN Makeup"
      />

      <TrustStrip items={TRUST_ITEMS} />

      <HealedResultsEmphasis variant="powder" />

      <Section tone="light">
        <Container className="max-w-3xl space-y-6">
          <SectionHeading
            title="What are powder brows?"
            subtitle="A plain-language overview — especially if you’re comparing studios across Shropshire."
          />
          <div className="space-y-4 text-base leading-[1.65] text-stone-600 sm:max-w-prose sm:mx-auto lg:mx-0 lg:max-w-none">
            <p>
              Powder brows are semi-permanent makeup that builds a soft, shaded brow — often called{" "}
              <strong className="font-medium text-luxury-charcoal">ombre brows</strong> when colour transitions lightly
              through the brow. Modern work aims for refined definition rather than the flat, blocky brow tattoos of years ago.
            </p>
            <p>
              If you&apos;re researching <strong className="font-medium text-luxury-charcoal">powder brows in Telford</strong>{" "}
              or wider <strong className="font-medium text-luxury-charcoal">semi-permanent brows</strong>, think of this
              technique as balanced, wake-up-ready brows that still read as yours — not a stencil borrowed from someone else.
            </p>
            <p>
              For brow styles and related PMU in one place, see our{" "}
              <Link href="/semi-permanent-makeup" className="font-medium text-luxury-charcoal underline-offset-4 hover:underline">
                semi-permanent makeup
              </Link>{" "}
              overview — this page stays focused on powder brows when softness is the priority.
            </p>
          </div>
        </Container>
      </Section>

      <WhyChooseElen
        title="Why choose powder brows?"
        subtitle="Practical benefits women notice once healed — without compromising a natural look."
        cards={WHY_POWDER_BROWS_CARDS}
      />

      <ResultsPreviewGallery
        id="gallery"
        title="Soft, natural brow results"
        subtitle="Visual moodboard — real client photography will appear here as our studio gallery grows."
        items={PMU_RESULTS_PREVIEW_ITEMS}
        resultsHref="/semi-permanent-makeup"
        ctaLabel="More on semi-permanent makeup"
      />

      <Section tone="ivory">
        <Container className="max-w-3xl space-y-8">
          <SectionHeading
            title="Free consultation & brow mapping"
            subtitle="Your appointment to explore powder brows without commitment."
          />
          <ul className="space-y-3 text-base leading-relaxed text-stone-600">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" aria-hidden />
              <span>Discuss the look you want — from barely-there softness to a slightly fuller powder finish.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" aria-hidden />
              <span>Check suitability for your skin and any previous brow work.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" aria-hidden />
              <span>Assess your natural brow hair, symmetry, and balance with your features.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" aria-hidden />
              <span>Map a bespoke shape and talk through colour direction.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" aria-hidden />
              <span>Answer every question — including timing, healing, and what &quot;natural&quot; means for you.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" aria-hidden />
              <span>No pressure to book the procedure on the same day.</span>
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-stone-600">
            A small deposit is only needed if you decide to book your powder brow procedure after we&apos;ve met — take the
            time you need. Prefer to message first? Reach us via{" "}
            <Link href="/contact" className="font-medium text-luxury-charcoal underline-offset-4 hover:underline">
              contact
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant="ctaOutline" size="lg">
              <Link href="/services">Explore all services</Link>
            </Button>
            <Button asChild variant="ctaOutline" size="lg">
              <Link href="/about">About the studio</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <ProcessSteps
        eyebrow="Step by step"
        title="The powder brows process"
        subtitle="From first hello to healed, natural-looking colour."
        steps={PROCESS_STEPS}
        depositNote="After your consultation, you’re welcome to think it over. A small deposit only applies if you choose to book your treatment and secure a date."
      />

      <Section tone="light">
        <Container className="max-w-3xl space-y-6">
          <SectionHeading
            title="What to expect while healing"
            subtitle="Everyone heals slightly differently — here’s the gentle, honest overview most clients find reassuring."
          />
          <div className="space-y-4 text-base leading-relaxed text-stone-600">
            <p>
              After treatment your brows may look <strong className="font-medium text-luxury-charcoal">darker or bolder</strong>{" "}
              at first — that’s normal while the skin is settling.
            </p>
            <p>
              Over the following days and weeks, colour typically <strong className="font-medium text-luxury-charcoal">softens</strong>{" "}
              into the refined, natural-style finish you discussed during mapping.
            </p>
            <p>
              Your <strong className="font-medium text-luxury-charcoal">final result</strong> emerges once healing is complete;
              we’ll tell you what to expect at each stage so nothing feels like a surprise.
            </p>
            <p>
              Clear <strong className="font-medium text-luxury-charcoal">aftercare guidance</strong> is provided — simple steps
              to support even healing and beautiful long-term wear.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="champagne">
        <Container className="max-w-3xl space-y-8">
          <SectionHeading
            title="Is powder brow treatment right for you?"
            subtitle="Many Shropshire clients choose powder brows for effortless polish — here’s who often loves them."
          />
          <ul className="space-y-3 text-base leading-relaxed text-stone-700">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500" aria-hidden />
              <span>Busy professionals who want to look pulled-together with minimal daily effort</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500" aria-hidden />
              <span>Women who want natural definition rather than an obviously “made up” brow</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500" aria-hidden />
              <span>Sparse brows that need soft fullness without harsh edges</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500" aria-hidden />
              <span>Uneven brows you’d like to balance gently</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500" aria-hidden />
              <span>Anyone drawn to soft, low-maintenance beauty that still feels like them</span>
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-stone-600">
            Suitability is always checked during your consultation — including skin type, expectations, and any previous PMU.
          </p>
        </Container>
      </Section>

      <AboutElenPreview
        title="Why clients trust Elen"
        paragraphs={ABOUT_ELEN_POWDER}
        meetHref="/about"
        meetLabel="Read more about Elen"
        primaryCta="Book Free Consultation"
        imageAlt="Elen — powder brows and semi permanent makeup artist, Telford"
      />

      <Section tone="ivory" spacing="compact">
        <Container className="max-w-3xl">
          <h2 className="font-heading text-2xl tracking-tight text-luxury-charcoal">Further reading</h2>
          <p className="mt-3 text-base leading-relaxed text-stone-600">
            Short guides if you&apos;re still researching — written for women comparing powder brows across Shropshire.
          </p>
          <ul className="mt-6 space-y-3 text-base leading-relaxed text-stone-700">
            <li>
              <Link
                href="/blog/do-powder-brows-look-natural"
                className="font-medium text-luxury-charcoal underline-offset-4 hover:underline"
              >
                Do powder brows look natural?
              </Link>
              <span className="text-stone-500"> — finish, edges, daylight.</span>
            </li>
            <li>
              <Link
                href="/blog/powder-brow-healing-day-by-day"
                className="font-medium text-luxury-charcoal underline-offset-4 hover:underline"
              >
                Powder brow healing week by week
              </Link>
              <span className="text-stone-500"> — what often happens as colour settles.</span>
            </li>
            <li>
              <Link
                href="/blog/powder-brows-vs-microblading"
                className="font-medium text-luxury-charcoal underline-offset-4 hover:underline"
              >
                Powder brows vs microblading
              </Link>
              <span className="text-stone-500"> — honest differences on real skin.</span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-stone-500">
            <Link href="/blog" className="font-medium text-luxury-charcoal underline-offset-4 hover:underline">
              Browse all journal articles
            </Link>
          </p>
        </Container>
      </Section>

      <FAQPreview
        title="Powder brows questions"
        subtitle="Straight answers — your consultation is the best place for personalised detail."
        items={POWDER_BROWS_FAQ}
      />

      <Section tone="light">
        <Container className="max-w-3xl">
          <BooksyReviewsSummary variant="section" />
        </Container>
      </Section>

      {googlePayload?.reviews?.length ? (
        <Section tone="ivory">
          <Container className="max-w-5xl">
            <GoogleReviews payload={googlePayload} heading="Google reviews" />
          </Container>
        </Section>
      ) : null}

      <FinalCTA
        headline="Curious if powder brows suit you?"
        text="Book a free consultation — we’ll talk mapping, healing, and whether your skin and goals are a good match."
        ctaLabel="Book free consultation"
      />

      <StickyMobileCTA label="Book Consultation" />

      <JsonLd
        data={[
          serviceSchema({
            name: "Natural powder brows",
            description:
              "Powder brow semi-permanent makeup in Telford — soft shaded brows with tailored mapping and consultation-first booking.",
            path: "/powder-brows-telford",
            serviceType: "Powder brow semi-permanent makeup",
          }),
          faqPageSchema([...POWDER_BROWS_FAQ]),
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Powder Brows Telford", path: "/powder-brows-telford" },
          ]),
        ]}
      />
    </div>
  )
}
