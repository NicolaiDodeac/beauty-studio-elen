"use client"

import { ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { GalleryMoodThumbPlaceholder } from "@/components/marketing/branded-placeholder-media"
import { Container } from "@/components/marketing/container"
import { Section } from "@/components/marketing/section"
import { SectionHeading } from "@/components/marketing/section-heading"
import { Button } from "@/components/ui/button"
import type { PmuResultJourneySet, PmuResultPreviewItem } from "@/lib/marketing/pmu-gallery"
import { isPlaceholderMediaSrc } from "@/lib/marketing/placeholder-media"
import { cn } from "@/lib/utils"

export type ResultsPreviewGalleryProps = {
  title: string
  subtitle: string
  /** Optional calm disclaimer under the subtitle (e.g. illustrative placeholders). */
  note?: string
  items: readonly PmuResultPreviewItem[]
  /** Optional before → after → healed journeys, revealed via progressive disclosure. */
  journeySets?: readonly PmuResultJourneySet[]
  resultsHref: string
  ctaLabel?: string
  /** Anchor id for in-page links (e.g. hero secondary CTA → #gallery). */
  id?: string
  /** Homepage-style shorter mood tiles */
  compactPlaceholders?: boolean
  expandLabel?: string
  collapseLabel?: string
}

function GalleryTile({
  item,
  compactPlaceholders,
}: {
  item: PmuResultPreviewItem
  compactPlaceholders: boolean
}) {
  return (
    <figure className="space-y-2.5 md:space-y-2">
      {isPlaceholderMediaSrc(item.src) ? (
        <GalleryMoodThumbPlaceholder short={compactPlaceholders} devMediaTodo={item.replacementNeeded} />
      ) : (
        <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-stone-200/90 bg-luxury-champagne shadow-md shadow-stone-900/[0.06] md:shadow-sm md:transition md:duration-300 md:hover:border-stone-300/95 md:hover:shadow-lg md:hover:shadow-stone-900/10">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover md:transition md:duration-500 md:ease-out md:group-hover:scale-[1.02]"
            sizes="(max-width: 767px) 88vw, (max-width: 1023px) 50vw, 25vw"
          />
        </div>
      )}
      {item.caption ? (
        <figcaption className="px-0.5 text-center text-[11px] leading-snug text-stone-500 sm:text-xs">
          {item.caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

function GalleryStrip({
  items,
  compactPlaceholders,
  ariaLabel,
  columns = 4,
}: {
  items: readonly PmuResultPreviewItem[]
  compactPlaceholders: boolean
  ariaLabel: string
  columns?: 2 | 3 | 4
}) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [showSwipeHint, setShowSwipeHint] = useState(items.length > 1)

  useEffect(() => {
    if (items.length <= 1) return
    const node = scrollerRef.current
    if (!node) return

    const hide = () => setShowSwipeHint(false)
    node.addEventListener("scroll", hide, { passive: true, once: true })
    node.addEventListener("pointerdown", hide, { passive: true, once: true })
    const timer = window.setTimeout(hide, 5200)

    return () => {
      node.removeEventListener("scroll", hide)
      node.removeEventListener("pointerdown", hide)
      window.clearTimeout(timer)
    }
  }, [items.length])

  const gridCols =
    columns === 2
      ? "md:grid-cols-2 lg:grid-cols-2"
      : columns === 3
        ? "md:grid-cols-3 lg:grid-cols-3"
        : items.length >= 4
          ? "md:grid-cols-2 lg:grid-cols-4"
          : "md:grid-cols-2 lg:grid-cols-3"

  return (
    <div className="relative -mx-5 md:mx-0">
      <div
        ref={scrollerRef}
        role="region"
        aria-label={ariaLabel}
        className={cn(
          "flex gap-3 overflow-x-auto px-5 pb-1 pt-0.5 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory",
          "md:grid md:gap-5 md:overflow-visible md:px-0 md:pb-0 md:pt-0",
          "[&::-webkit-scrollbar]:hidden",
          gridCols
        )}
      >
        {items.map((item, index) => (
          <div
            key={`${item.src}-${index}`}
            className="w-[min(88vw,22rem)] shrink-0 snap-center md:w-auto"
          >
            <GalleryTile item={item} compactPlaceholders={compactPlaceholders} />
          </div>
        ))}
      </div>

      {items.length > 1 ? (
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 flex w-16 items-center justify-end bg-gradient-to-l from-luxury-ivory via-luxury-ivory/70 to-transparent pr-3 transition-opacity duration-500 md:hidden",
            showSwipeHint ? "opacity-100" : "opacity-0"
          )}
          aria-hidden
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/55 bg-white/30 shadow-sm backdrop-blur-[3px] animate-swipe-hint">
            <ChevronRight className="h-5 w-5 text-luxury-charcoal/75" strokeWidth={1.75} />
          </div>
        </div>
      ) : null}
    </div>
  )
}

function JourneyBlock({
  journey,
  compactPlaceholders,
}: {
  journey: PmuResultJourneySet
  compactPlaceholders: boolean
}) {
  return (
    <div className="space-y-5">
      <div className="mx-auto max-w-xl text-center">
        <h3 className="font-heading text-lg tracking-tight text-luxury-charcoal sm:text-xl">
          {journey.title}
        </h3>
        {journey.subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-stone-500">{journey.subtitle}</p>
        ) : null}
      </div>
      <GalleryStrip
        items={journey.items}
        compactPlaceholders={compactPlaceholders}
        ariaLabel={journey.title}
        columns={journey.items.length >= 4 ? 4 : journey.items.length === 2 ? 2 : 3}
      />
    </div>
  )
}

export function ResultsPreviewGallery({
  title,
  subtitle,
  note,
  items,
  journeySets,
  resultsHref,
  ctaLabel = "View Results",
  id,
  compactPlaceholders = false,
  expandLabel = "Show more healing journeys",
  collapseLabel = "Show fewer journeys",
}: ResultsPreviewGalleryProps) {
  const featuredJourney = journeySets?.[0]
  const moreJourneys = journeySets?.slice(1) ?? []
  const hasMoreJourneys = moreJourneys.length > 0
  const previewColumns = items.length >= 4 ? 4 : 3

  return (
    <Section id={id} tone="ivory">
      <Container className="space-y-10 lg:space-y-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="lg:max-w-xl">
            <SectionHeading title={title} subtitle={subtitle} />
            {note ? (
              <p className="mt-4 text-sm leading-relaxed text-stone-500">{note}</p>
            ) : null}
          </div>
          <Button asChild variant="ctaOutline" size="lg" className="shrink-0 self-start lg:self-auto">
            <Link href={resultsHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <GalleryStrip
          items={items}
          compactPlaceholders={compactPlaceholders}
          ariaLabel="Gallery preview"
          columns={previewColumns}
        />

        {featuredJourney ? (
          <div className="space-y-5 border-t border-stone-200/80 pt-8">
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-stone-500">
              A full healing journey — before, mapping where shown, first session, then healed.
            </p>
            <JourneyBlock journey={featuredJourney} compactPlaceholders={compactPlaceholders} />
          </div>
        ) : null}

        {hasMoreJourneys ? (
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-luxury-charcoal transition-colors hover:text-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-luxury-ivory [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">{expandLabel}</span>
              <span className="hidden group-open:inline">{collapseLabel}</span>
              <ChevronDown
                className="h-4 w-4 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
                aria-hidden
              />
            </summary>

            <div className="mt-8 space-y-12">
              {moreJourneys.map((journey) => (
                <JourneyBlock
                  key={journey.id}
                  journey={journey}
                  compactPlaceholders={compactPlaceholders}
                />
              ))}
            </div>
          </details>
        ) : null}
      </Container>
    </Section>
  )
}
