import Image from "next/image"
import Link from "next/link"

import { BooksyReviewsSummary } from "@/components/marketing/booksy-reviews-summary"
import { Container } from "@/components/marketing/container"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"
import { Button } from "@/components/ui/button"

export type PMUHeroProps = {
  eyebrow: string
  headline: string
  subheadline: string
  primaryCta: string
  secondaryCta: string
  secondaryHref: string
  trustLine: string
  /** Hero image — swap for studio photography or short loop when assets are ready. */
  imageSrc?: string
  imageAlt?: string
  /** Subtle Booksy star summary below CTAs */
  showBooksyReviewProof?: boolean
}

export function PMUHero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  secondaryHref,
  trustLine,
  imageSrc = "/images/hero/image.png",
  imageAlt = "ELEN Makeup studio — soft luxury beauty in Telford",
  showBooksyReviewProof = false,
}: PMUHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-luxury-ivory pt-6 pb-12 sm:pt-8 sm:pb-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div className="max-w-xl lg:max-w-none">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500 sm:text-sm">{eyebrow}</p>
            <h1 className="mt-4 font-heading text-4xl tracking-tight text-luxury-charcoal sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">{subheadline}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <BooksyBookButton size="lg" variant="cta" className="px-8 sm:min-w-[14rem]">
                {primaryCta}
              </BooksyBookButton>
              <Button asChild variant="ctaOutline" size="lg" className="px-8 sm:min-w-[12rem]">
                <Link href={secondaryHref}>{secondaryCta}</Link>
              </Button>
            </div>

            {showBooksyReviewProof ? (
              <div className="mt-8 max-w-md border-l border-stone-200 pl-5">
                <BooksyReviewsSummary variant="compact" />
              </div>
            ) : null}

            <p className="mt-10 text-sm text-stone-500">{trustLine}</p>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            {/* TODO: Replace with real ELEN client result or Elen working/mapping brows. Avoid glamour stock-style images. */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200/90 shadow-lg shadow-stone-900/5">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover animate-fade-in motion-reduce:animate-none md:transition-transform md:duration-500 md:ease-out md:hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
