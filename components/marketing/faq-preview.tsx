import { ChevronDown } from "lucide-react"

import { Container } from "@/components/marketing/container"
import { Section } from "@/components/marketing/section"
import { SectionHeading } from "@/components/marketing/section-heading"

export type FaqItem = {
  question: string
  answer: string
}

export type FAQPreviewProps = {
  title?: string
  subtitle?: string
  items: readonly FaqItem[]
}

export function FAQPreview({
  title = "Questions, answered gently",
  subtitle = "Straightforward answers — book a consultation for personalised advice.",
  items,
}: FAQPreviewProps) {
  return (
    <Section tone="ivory">
      <Container className="space-y-8 lg:space-y-10">
        <SectionHeading title={title} subtitle={subtitle} align="center" className="mx-auto max-w-2xl" />

        <div className="mx-auto max-w-3xl divide-y divide-stone-200/90 rounded-xl border border-stone-200/90 bg-luxury-champagne/40 px-1 py-1">
          {items.map((item) => (
            <details
              key={item.question}
              className="group border-none px-4 py-1 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-4 text-left font-medium text-luxury-charcoal transition-colors hover:text-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-luxury-champagne/40">
                <span>{item.question}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <div className="pb-4 pl-0 text-sm leading-relaxed text-stone-600">{item.answer}</div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  )
}
