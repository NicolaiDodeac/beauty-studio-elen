import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/marketing/container"
import { Section } from "@/components/marketing/section"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"
import { Button } from "@/components/ui/button"

export type AboutElenPreviewProps = {
  title?: string
  paragraphs: readonly string[]
  meetHref?: string
  meetLabel?: string
  primaryCta?: string
  imageSrc?: string
  imageAlt?: string
}

export function AboutElenPreview({
  title = "About Elen",
  paragraphs,
  meetHref = "/about",
  meetLabel = "Meet Elen",
  primaryCta = "Book Free Consultation",
  imageSrc = "/images/about/Elen.png",
  imageAlt = "Elen — founder and artist, ELEN Makeup Telford",
}: AboutElenPreviewProps) {
  return (
    <Section tone="ivory">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/*
            MEDIA TODO — imageSrc (/images/about/Elen.png):
            Replace or confirm with professional portrait of Elen — soft neutral outfit/background, warm approachable expression,
            clean studio or neutral backdrop, no heavy filters. Same asset supports homepage About preview + /about.
          */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-stone-200/90 shadow-lg lg:aspect-[3/4]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-heading text-3xl tracking-tight text-luxury-charcoal sm:text-4xl">{title}</h2>
            <div className="space-y-4 text-base leading-relaxed text-stone-600">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button asChild variant="ctaOutline" size="lg">
                <Link href={meetHref}>{meetLabel}</Link>
              </Button>
              <BooksyBookButton size="lg" variant="cta">
                {primaryCta}
              </BooksyBookButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
