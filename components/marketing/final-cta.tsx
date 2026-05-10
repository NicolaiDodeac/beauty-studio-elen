import { Container } from "@/components/marketing/container"
import { Section } from "@/components/marketing/section"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"

export type FinalCTAProps = {
  headline: string
  text: string
  ctaLabel: string
}

export function FinalCTA({ headline, text, ctaLabel }: FinalCTAProps) {
  return (
    <Section tone="dark" spacing="compact">
      <Container className="text-center">
        <div className="mx-auto max-w-2xl space-y-6">
          <h2 className="font-heading text-3xl tracking-tight text-luxury-cream sm:text-4xl">{headline}</h2>
          <p className="text-base leading-relaxed text-luxury-cream/85 sm:text-lg">{text}</p>
          <BooksyBookButton size="lg" variant="ctaOutline" className="border-luxury-mist/50 bg-luxury-cream text-luxury-charcoal hover:bg-luxury-ivory">
            {ctaLabel}
          </BooksyBookButton>
        </div>
      </Container>
    </Section>
  )
}
