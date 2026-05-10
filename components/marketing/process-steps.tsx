import { Container } from "@/components/marketing/container"
import { Section } from "@/components/marketing/section"
import { SectionHeading } from "@/components/marketing/section-heading"

export type ProcessStep = {
  title: string
  description?: string
}

export type ProcessStepsProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  steps: readonly ProcessStep[]
  depositNote: string
  /** Optional anchor id for in-page links */
  sectionId?: string
}

export function ProcessSteps({
  eyebrow,
  title,
  subtitle,
  steps,
  depositNote,
  sectionId,
}: ProcessStepsProps) {
  return (
    <Section id={sectionId} tone="champagne">
      <Container className="space-y-10">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" className="mx-auto" />

        <ol className="mx-auto grid max-w-3xl gap-6">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-xl border border-stone-200/90 bg-luxury-ivory/80 px-5 py-5 shadow-sm transition-colors duration-200 hover:border-stone-300/90"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-luxury-champagne font-heading text-lg text-luxury-charcoal"
                aria-hidden
              >
                {index + 1}
              </span>
              <div className="space-y-1 pt-0.5">
                <p className="font-medium text-luxury-charcoal">{step.title}</p>
                {step.description ? <p className="text-sm leading-relaxed text-stone-600">{step.description}</p> : null}
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-stone-600">{depositNote}</p>
      </Container>
    </Section>
  )
}
