import { Container } from "@/components/marketing/container"
import { Section } from "@/components/marketing/section"
import { SectionHeading } from "@/components/marketing/section-heading"

export type WhyCard = {
  title: string
  description: string
}

export type WhyChooseElenProps = {
  title?: string
  subtitle?: string
  cards: readonly WhyCard[]
}

export function WhyChooseElen({
  title = "Why women choose Elen",
  subtitle = "Thoughtful brow design and a studio experience that feels calm — never rushed.",
  cards,
}: WhyChooseElenProps) {
  return (
    <Section tone="light">
      <Container className="space-y-10 lg:space-y-12">
        <SectionHeading title={title} subtitle={subtitle} align="center" className="mx-auto max-w-2xl" />

        <ul className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {cards.map((card) => (
            <li
              key={card.title}
              className="rounded-xl border border-stone-200/80 bg-luxury-ivory px-6 py-8 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="font-heading text-xl text-luxury-charcoal">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">{card.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
