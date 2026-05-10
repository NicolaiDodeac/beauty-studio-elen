import { Container } from "@/components/marketing/container"
import { Section } from "@/components/marketing/section"

export type HealedResultsEmphasisProps = {
  /** Homepage vs service page — slightly different lead line. */
  variant?: "home" | "powder"
}

export function HealedResultsEmphasis({ variant = "home" }: HealedResultsEmphasisProps) {
  const isHome = variant === "home"

  const lead = isHome
    ? "Refined beauty that stays believable in daylight — soft luxury, balanced colour, and results designed to feel like you, only elevated."
    : "Day-one colour softens as skin heals; your consultation covers how mapping and shading translate into natural-looking wear."

  const pillars = isHome
    ? ([
        {
          title: "Natural-looking results",
          body: "Enhancements that feel sophisticated and light-handed — never harsh, mask-like, or overfilled.",
        },
        {
          title: "Tailored to you",
          body: "Your features, lifestyle, and comfort guide every recommendation — nothing template-driven.",
        },
        {
          title: "Calm luxury experience",
          body: "A peaceful studio rhythm with space for questions — professional care from consultation through aftercare.",
        },
      ] as const)
    : ([
        {
          title: "Tailored brow mapping",
          body: "Symmetry and arch placement measured for your bone structure — nothing generic or rushed.",
        },
        {
          title: "Natural healed results",
          body: "Soft pixel work meant to settle gently — polished in real life, not only in photos.",
        },
        {
          title: "Consultation first",
          body: "Suitability, expectations, and a pace that feels safe — before pigment touches skin.",
        },
      ] as const)

  const heading = isHome ? "Natural beauty, never overdone" : "Natural healed results"

  const footerNote = isHome
    ? "Trusted across Telford & Shropshire for softly refined results you can live in every day."
    : "Soft luxury experience — clear aftercare, immaculate hygiene, space for every question."

  return (
    <Section tone="light" spacing="compact">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-stone-200/85 bg-gradient-to-b from-white to-luxury-champagne/50 px-6 py-8 shadow-sm sm:px-10 sm:py-10">
          <h2 className="text-center font-heading text-xl leading-snug text-luxury-charcoal sm:text-2xl sm:leading-snug">
            {heading}
          </h2>
          <p className="mt-4 text-center text-base leading-relaxed text-stone-600">{lead}</p>
          <ul className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {pillars.map((p) => (
              <li key={p.title}>
                <h3 className="font-heading text-base text-luxury-charcoal">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{p.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-xs leading-relaxed text-stone-500">{footerNote}</p>
        </div>
      </Container>
    </Section>
  )
}
