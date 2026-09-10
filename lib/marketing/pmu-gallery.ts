/**
 * Preview gallery tiles — `/` (subset) and `/powder-brows-telford` (full strip).
 * Real photography lives under `/public/images/powder-brows/`.
 * Journey sets (before → immediate → healed) expand below the preview on the powder page.
 */

export type MediaPriority = "critical" | "high" | "medium"

export type PmuResultStage = "before" | "mapping" | "immediate" | "healed" | "result" | "process"

export type PmuResultPreviewItem = {
  src: string
  alt: string
  /** Visitor-facing caption */
  caption?: string
  /** Stage label for journey sets */
  stage?: PmuResultStage
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

export type PmuResultJourneySet = {
  id: string
  title: string
  subtitle?: string
  items: readonly PmuResultPreviewItem[]
}

const LIVE_OVERLAY_NOTE =
  "Prefer a clean crop without promotional text overlays when available."

/** Tile strip — Homepage preview + Powder gallery preview */
export const PMU_RESULTS_PREVIEW_ITEMS: readonly PmuResultPreviewItem[] = [
  {
    src: "/images/powder-brows/result-01.png",
    alt: "Powder brows result — soft shaded permanent makeup for eyebrows",
    caption: "Permanent makeup for eyebrows — soft, defined everyday brows",
    stage: "result",
    replacementNeeded: `Live — /images/powder-brows/result-01.png. ${LIVE_OVERLAY_NOTE}`,
    idealShot: "Portrait crop; brows centred; soft daylight; heal-readable texture; no harsh flash.",
    priority: "critical",
    usage: "Homepage preview tile 1; /powder-brows-telford gallery tile 1.",
    consentRequired: true,
  },
  {
    src: "/images/powder-brows/result-02.png",
    alt: "Healed powder brows after permanent makeup — soft natural finish",
    caption: "Healed eyebrows after permanent makeup — soft, natural colour",
    stage: "healed",
    replacementNeeded: `Live — /images/powder-brows/result-02.png. ${LIVE_OVERLAY_NOTE}`,
    idealShot: "Close brow detail; healed soft powder finish; natural daylight; believable skin texture.",
    priority: "critical",
    usage: "Homepage preview tile 2; /powder-brows-telford gallery tile 2.",
    consentRequired: true,
  },
  {
    src: "/images/powder-brows/result-03.png",
    alt: "Brow consultation — artist assessing brows with a client in studio",
    caption: "Not sure which brow style suits you? Start with a consultation",
    stage: "process",
    replacementNeeded: `Live — /images/powder-brows/result-03.png. ${LIVE_OVERLAY_NOTE}`,
    idealShot: "Hands/tools/brow mapping visible; calm workspace; educational tone — not a glam portrait.",
    priority: "high",
    usage: "/powder-brows-telford gallery tile 3 only (not on homepage strip).",
    consentRequired: true,
  },
]

/** Homepage strip — first two tiles only */
export const PMU_HOME_GALLERY_PREVIEW_ITEMS = PMU_RESULTS_PREVIEW_ITEMS.slice(0, 2)

/**
 * Expandable before → immediately after → healed journeys.
 * Add new sets here; they appear when visitors open “Show more results”.
 */
export const PMU_RESULTS_JOURNEY_SETS: readonly PmuResultJourneySet[] = [
  {
    id: "journey-01",
    title: "Before, first session & healed",
    subtitle: "Same client — sparse brows through treatment to the settled soft powder finish.",
    items: [
      {
        src: "/images/powder-brows/journey-01-before.png",
        alt: "Eyebrows before permanent makeup — sparse natural brows",
        caption: "Before permanent makeup",
        stage: "before",
        replacementNeeded: `Live — /images/powder-brows/journey-01-before.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Front-facing before; natural sparse brows; even studio light.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 1 — before.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-01-immediate.png",
        alt: "Eyebrows immediately after first powder brow session",
        caption: "Immediately after 1st session",
        stage: "immediate",
        replacementNeeded: `Live — /images/powder-brows/journey-01-immediate.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Same framing as before; fresh powdered brows; honest post-treatment colour.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 1 — immediately after.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-01-healed.png",
        alt: "Healed eyebrows after permanent makeup — soft natural powder brows",
        caption: "Healed after permanent makeup",
        stage: "healed",
        replacementNeeded: `Live — /images/powder-brows/journey-01-healed.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Same client healed; soft natural colour; believable skin texture.",
        priority: "critical",
        usage: "/powder-brows-telford expandable journey 1 — healed.",
        consentRequired: true,
      },
    ],
  },
  {
    id: "journey-02",
    title: "Before, mapping, first session & healed",
    subtitle: "From natural brows through shape mapping and first session to the healed soft finish.",
    items: [
      {
        src: "/images/powder-brows/journey-02-before.png",
        alt: "Eyebrows before permanent makeup",
        caption: "Before permanent makeup",
        stage: "before",
        replacementNeeded: `Live — /images/powder-brows/journey-02-before.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Front-facing before; light natural brows; even studio light.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 2 — before.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-02-mapping.png",
        alt: "Brow mapping before powder brow treatment",
        caption: "Mapping",
        stage: "mapping",
        replacementNeeded: `Live — /images/powder-brows/journey-02-mapping.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Mapped brow shape with guide lines; calm educational tone.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 2 — mapping.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-02-immediate.png",
        alt: "Eyebrows immediately after first powder brow session",
        caption: "Immediately after 1st session",
        stage: "immediate",
        replacementNeeded: `Live — /images/powder-brows/journey-02-immediate.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Fresh powdered brows; honest post-treatment colour.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 2 — immediately after.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-02-healed.png",
        alt: "Healed eyebrows after permanent makeup",
        caption: "Healed after permanent makeup",
        stage: "healed",
        replacementNeeded: `Live — /images/powder-brows/journey-02-healed.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Healed soft powder finish; believable skin texture.",
        priority: "critical",
        usage: "/powder-brows-telford expandable journey 2 — healed.",
        consentRequired: true,
      },
    ],
  },
  {
    id: "journey-03",
    title: "Before, mapping, first session & healed",
    subtitle: "Same client — sparse brows through mapping and first session to healed results from multiple angles.",
    items: [
      {
        src: "/images/powder-brows/journey-03-before.png",
        alt: "Eyebrows before permanent makeup — sparse natural brows",
        caption: "Before permanent makeup",
        stage: "before",
        replacementNeeded: `Live — /images/powder-brows/journey-03-before.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Front-facing before; sparse light brows; even studio light.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 3 — before.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-03-mapping.png",
        alt: "Brow mapping before powder brow treatment",
        caption: "Mapping",
        stage: "mapping",
        replacementNeeded: `Live — /images/powder-brows/journey-03-mapping.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Mapped brow shape with guide lines; calm educational tone.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 3 — mapping.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-03-immediate.png",
        alt: "Eyebrows immediately after first powder brow session",
        caption: "Immediately after 1st session",
        stage: "immediate",
        replacementNeeded: `Live — /images/powder-brows/journey-03-immediate.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Fresh powdered brows; honest post-treatment colour.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 3 — immediately after.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-03-healed.png",
        alt: "Healed powder brows after permanent makeup — front view",
        caption: "Healed — front view",
        stage: "healed",
        replacementNeeded: `Live — /images/powder-brows/journey-03-healed.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Healed soft powder finish; front-facing; natural light.",
        priority: "critical",
        usage: "/powder-brows-telford expandable journey 3 — healed front.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-03-healed-detail.png",
        alt: "Healed powder brow close-up detail after permanent makeup",
        caption: "Healed — close-up",
        stage: "healed",
        replacementNeeded: `Live — /images/powder-brows/journey-03-healed-detail.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Macro brow detail; healed soft powder texture; believable skin.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 3 — healed detail.",
        consentRequired: true,
      },
    ],
  },
  {
    id: "journey-04",
    title: "Before, first session & healed",
    subtitle: "Light sparse brows through fresh powder work to a soft healed finish.",
    items: [
      {
        src: "/images/powder-brows/journey-04-before.png",
        alt: "Eyebrows before permanent makeup — thin sparse brows",
        caption: "Before permanent makeup",
        stage: "before",
        replacementNeeded: `Live — /images/powder-brows/journey-04-before.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Front-facing before; sparse brows; even studio light.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 4 — before.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-04-immediate.png",
        alt: "Fresh eyebrows immediately after first powder brow session",
        caption: "Immediately after 1st session",
        stage: "immediate",
        replacementNeeded: `Live — /images/powder-brows/journey-04-immediate.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Fresh powdered brows; honest post-treatment colour.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 4 — immediately after.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-04-healed.png",
        alt: "Healed eyebrows after permanent makeup",
        caption: "Healed after permanent makeup",
        stage: "healed",
        replacementNeeded: `Live — /images/powder-brows/journey-04-healed.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Healed soft powder finish; believable skin texture.",
        priority: "critical",
        usage: "/powder-brows-telford expandable journey 4 — healed.",
        consentRequired: true,
      },
    ],
  },
  {
    id: "journey-05",
    title: "Before, mapping & healed",
    subtitle: "Natural blonde brows through shape mapping to a soft settled powder finish.",
    items: [
      {
        src: "/images/powder-brows/journey-05-before.png",
        alt: "Eyebrows before permanent makeup — light sparse brows",
        caption: "Before permanent makeup",
        stage: "before",
        replacementNeeded: `Live — /images/powder-brows/journey-05-before.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Front-facing before; light sparse brows; even studio light.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 5 — before.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-05-mapping.png",
        alt: "Brow mapping before powder brow treatment",
        caption: "Mapping",
        stage: "mapping",
        replacementNeeded: `Live — /images/powder-brows/journey-05-mapping.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Mapped brow shape with guide lines; calm educational tone.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 5 — mapping.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-05-healed.png",
        alt: "Healed powder brows — soft natural finish",
        caption: "Healed powder brows",
        stage: "healed",
        replacementNeeded: `Live — /images/powder-brows/journey-05-healed.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Healed soft powder finish; front-facing; natural light.",
        priority: "critical",
        usage: "/powder-brows-telford expandable journey 5 — healed.",
        consentRequired: true,
      },
    ],
  },
  {
    id: "journey-06",
    title: "Mapping, first session & healed",
    subtitle: "Shape mapping and fresh powder work through to the healed everyday result.",
    items: [
      {
        src: "/images/powder-brows/journey-06-mapping.png",
        alt: "Brow mapping during powder brow treatment",
        caption: "Mapping",
        stage: "mapping",
        replacementNeeded: `Live — /images/powder-brows/journey-06-mapping.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Mapped brow shape with guide lines; treatment-bed perspective.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 6 — mapping.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-06-immediate.png",
        alt: "Powder brows result after treatment — soft defined finish",
        caption: "After treatment",
        stage: "immediate",
        replacementNeeded: `Live — /images/powder-brows/journey-06-immediate.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Defined soft powder brows; even studio light.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 6 — after treatment.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-06-healed.png",
        alt: "Healed powder brows — soft natural everyday finish",
        caption: "Healed powder brows",
        stage: "healed",
        replacementNeeded: `Live — /images/powder-brows/journey-06-healed.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Healed soft powder finish; front-facing smile; natural light.",
        priority: "critical",
        usage: "/powder-brows-telford expandable journey 6 — healed.",
        consentRequired: true,
      },
    ],
  },
  {
    id: "journey-07",
    title: "Before & healed",
    subtitle: "Sparse natural brows compared with the soft healed powder finish.",
    items: [
      {
        src: "/images/powder-brows/journey-07-before.png",
        alt: "Eyebrows before permanent makeup — sparse natural brows",
        caption: "Before permanent makeup",
        stage: "before",
        replacementNeeded: `Live — /images/powder-brows/journey-07-before.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Front-facing before; sparse brows; even studio light.",
        priority: "high",
        usage: "/powder-brows-telford expandable journey 7 — before.",
        consentRequired: true,
      },
      {
        src: "/images/powder-brows/journey-07-healed.png",
        alt: "Healed powder brows — soft natural everyday finish",
        caption: "Healed after permanent makeup",
        stage: "healed",
        replacementNeeded: `Live — /images/powder-brows/journey-07-healed.png. ${LIVE_OVERLAY_NOTE}`,
        idealShot: "Healed soft powder finish; front-facing; natural light.",
        priority: "critical",
        usage: "/powder-brows-telford expandable journey 7 — healed.",
        consentRequired: true,
      },
    ],
  },
]
