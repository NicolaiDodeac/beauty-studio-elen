import { Container } from "@/components/marketing/container"
import { Section } from "@/components/marketing/section"

export type TrustStripProps = {
  items: readonly string[]
}

export function TrustStrip({ items }: TrustStripProps) {
  return (
    <Section tone="champagne" spacing="tight" aria-label="Trust highlights">
      <Container>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {items.map((label) => (
            <li
              key={label}
              className="flex items-center justify-center rounded-lg border border-stone-200/80 bg-luxury-ivory/70 px-4 py-3.5 text-center text-sm font-medium text-luxury-charcoal shadow-sm sm:text-base"
            >
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
