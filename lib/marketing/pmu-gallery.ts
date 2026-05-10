/**
 * Homepage / landing results preview.
 *
 * Media audit (Phase 6): All entries currently share the same placeholder asset —
 * replace with studio-approved before/afters; hero (`PMUHero`) and About blocks use
 * separate real paths under `/images/`. Highest priority for trust: this gallery,
 * then hero, then About portrait.
 */
export type PmuResultPreviewItem = {
  src: string
  alt: string
  /** Short optional label — keep understated; omit once real photography is labelled. */
  caption?: string
}

export const PMU_RESULTS_PREVIEW_ITEMS: readonly PmuResultPreviewItem[] = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Powder brow style example — soft healed appearance (placeholder image)",
    caption: "Studio gallery is being updated with real client results.",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Semi-permanent brow shading example — natural finish (placeholder image)",
    caption: "Studio gallery is being updated with real client results.",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Tailored brow mapping result example (placeholder image)",
    caption: "Studio gallery is being updated with real client results.",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Healed powder brow tone example — illustrative (placeholder image)",
    caption: "Studio gallery is being updated with real client results.",
  },
]
