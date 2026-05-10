import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/marketing/container"
import { Section } from "@/components/marketing/section"
import { SectionHeading } from "@/components/marketing/section-heading"
import { Button } from "@/components/ui/button"
import type { PmuResultPreviewItem } from "@/lib/marketing/pmu-gallery"

export type ResultsPreviewGalleryProps = {
  title: string
  subtitle: string
  items: readonly PmuResultPreviewItem[]
  resultsHref: string
  ctaLabel?: string
  /** Anchor id for in-page links (e.g. hero secondary CTA → #gallery). */
  id?: string
}

export function ResultsPreviewGallery({
  title,
  subtitle,
  items,
  resultsHref,
  ctaLabel = "View Results",
  id,
}: ResultsPreviewGalleryProps) {
  return (
    <Section id={id} tone="ivory">
      <Container className="space-y-10 lg:space-y-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading title={title} subtitle={subtitle} className="lg:max-w-xl" />
          <Button asChild variant="ctaOutline" size="lg" className="shrink-0 self-start lg:self-auto">
            <Link href={resultsHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <div className="-mx-5 md:mx-0">
          <div
            role="region"
            aria-label="Treatment result examples"
            className="flex gap-4 overflow-x-auto px-5 pb-1 pt-0.5 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 md:pt-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className="w-[min(82vw,18rem)] shrink-0 snap-center md:w-auto"
              >
                <figure className="space-y-2.5 md:space-y-2">
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-stone-200/90 bg-luxury-champagne shadow-md shadow-stone-900/[0.06] md:shadow-sm md:transition md:duration-300 md:hover:border-stone-300/95 md:hover:shadow-lg md:hover:shadow-stone-900/10">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover md:transition md:duration-500 md:ease-out md:group-hover:scale-[1.02]"
                      sizes="(max-width: 767px) 82vw, (max-width: 1023px) 50vw, 25vw"
                    />
                  </div>
                  {item.caption ? (
                    <figcaption className="px-0.5 text-center text-[11px] leading-snug text-stone-500 sm:text-xs">
                      {item.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
