/**
 * Preview gallery tiles — `/` (subset) and `/powder-brows-telford` (full strip).
 * Not replacing placeholder assets in code until real photography exists.
 */

export type MediaPriority = "critical" | "high" | "medium"

export type PmuResultPreviewItem = {
  src: string
  alt: string
  /** Visitor-facing caption while placeholders show */
  caption?: string
  /** Exact brief for the photo that must replace this slot */
  replacementNeeded: string
  /** Composition / lighting / crop guidance */
  idealShot: string
  priority: MediaPriority
  /** Where this tile appears */
  usage: string
  /** Client consent required before publication */
  consentRequired: boolean
}

/** Tile 1 — Homepage preview + Powder gallery position 1 */
export const PMU_RESULTS_PREVIEW_ITEMS: readonly PmuResultPreviewItem[] = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Illustrative mood tile — not a client photograph",
    caption: "Placeholder — awaiting approved studio photography.",
    replacementNeeded:
      "Healed powder brow result, front-facing, natural daylight, soft healed finish.",
    idealShot:
      "Portrait crop; brows centred; soft daylight (window or overcast); heal-readable texture; no harsh flash.",
    priority: "critical",
    usage: "Homepage preview tile 1; /powder-brows-telford gallery tile 1.",
    consentRequired: true,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Illustrative mood tile — not a client photograph",
    caption: "Placeholder — awaiting approved studio photography.",
    replacementNeeded:
      "Brunette natural powder brows — finished result or tasteful before/after pair; clean neutral background.",
    idealShot:
      "Even lighting; hair tied back if needed so brow line reads clearly; background ivory/stone seamless or studio wall.",
    priority: "critical",
    usage: "Homepage preview tile 2; /powder-brows-telford gallery tile 2.",
    consentRequired: true,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Illustrative mood tile — not a client photograph",
    caption: "Placeholder — awaiting approved studio photography.",
    replacementNeeded:
      "Brow mapping / process photo — Elen working or brow shape mapped before treatment (consented).",
    idealShot:
      "Hands/tools/brow mapping visible; calm workspace; educational tone — not a glam portrait.",
    priority: "high",
    usage: "/powder-brows-telford gallery tile 3 only (not on homepage strip).",
    consentRequired: true,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Illustrative mood tile — not a client photograph",
    caption: "Placeholder — awaiting approved studio photography.",
    replacementNeeded:
      "Mature skin or sparse-brows transformation — natural soft result; believable skin texture; not over-edited.",
    idealShot:
      "Respectful crop on mature client if used; healed appearance; avoid heavy beauty filter.",
    priority: "high",
    usage: "/powder-brows-telford gallery tile 4 only (not on homepage strip).",
    consentRequired: true,
  },
]

/** Homepage strip — first two tiles only (matches items 1–2 above) */
export const PMU_HOME_GALLERY_PREVIEW_ITEMS = PMU_RESULTS_PREVIEW_ITEMS.slice(0, 2)
