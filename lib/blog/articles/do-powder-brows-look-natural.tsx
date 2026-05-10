import Link from "next/link"

import { articleBodyLinkClass } from "@/lib/blog/article-classes"
import type { SeoArticleBundle } from "@/lib/blog/types"

export const articleDoPowderBrowsLookNatural: SeoArticleBundle = {
  meta: {
    slug: "do-powder-brows-look-natural",
    title: "Do powder brows look natural? Reading ‘natural’ in real light",
    description:
      "What natural powder brows actually mean after healing — density, edge softness, and mapping. PMU education from ELEN Makeup Telford.",
    excerpt:
      "Natural isn’t one shade fits all; it’s brows that belong on your face in daylight, close conversation, and bare skin.",
    publishedIso: "2026-05-04T09:00:00.000Z",
    category: "Powder brows & PMU",
    author: "Elen",
    /** MEDIA TODO — 1200×630: natural healed brow result in real daylight (believable skin texture; consent). */
    image: "/placeholder.svg?height=630&width=1200",
  },
  introBlocks: [
    {
      type: "p",
      children:
        "“Natural” is the word everyone wants — and it means slightly different things to each client. For some it’s barely-there tint; for others it’s a groomed arch that still reads like makeup, just effortless. Powder brows can deliver across that spectrum when colour, width, and saturation are chosen with your bone structure and comfort zone in mind.",
    },
    {
      type: "p",
      children:
        "The version that matters is the healed version: softer than day one, settled into your skin tone, balanced under warm and cool light. That’s what we design toward in studio consults across Telford and the wider Shropshire area.",
    },
  ],
  sections: [
    {
      id: "edges",
      title: "Soft edges vs harsh outlines",
      blocks: [
        {
          type: "p",
          children:
            "Natural powder brows rely on diffused edges and thoughtful tail weight — not a sharp stamped outline that fights your features. Pixel or ombré-style builds let artists feather density where you need support and keep fronts lighter when that suits your face.",
        },
      ],
    },
    {
      id: "colour",
      title: "Colour that whispers",
      blocks: [
        {
          type: "p",
          children:
            "Warmth, ash, and depth are adjusted for undertone and hair colour — not copied from a trend screenshot. The goal is coherence: brows that feel like they grew with your colouring, even when hairs are sparse.",
        },
        {
          type: "p",
          children: (
            <>
              If you&apos;re weighing techniques, our guide on{" "}
              <Link href="/blog/powder-brows-vs-microblading" className={articleBodyLinkClass}>
                powder brows vs microblading
              </Link>{" "}
              explains how strokes and shading read differently once healed — worth reading before you commit emotionally to either Instagram reel.
            </>
          ),
        },
      ],
    },
    {
      id: "cta",
      title: "When you’re ready",
      blocks: [
        {
          type: "p",
          children: (
            <>
              Bring reference images, but expect an honest conversation about what translates on{" "}
              <em>your</em> skin. Start from our{" "}
              <Link href="/powder-brows-telford" className={articleBodyLinkClass}>
                powder brows Telford
              </Link>{" "}
              page, then{" "}
              <Link href="/contact" className={articleBodyLinkClass}>
                reach out
              </Link>{" "}
              — we’d rather under-promise saturation and over-deliver calm, believable brows.",
            </>
          ),
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Will everyone know I’ve had them done?",
      answer:
        "Well-designed powder brows invite compliments like “you look well-rested” rather than “your brows are tattooed.” Openness is your choice — visually they shouldn’t announce themselves across a room.",
    },
    {
      question: "Can they look too light?",
      answer:
        "Yes — if you opt for extremely soft saturation for a hyper-natural finish, you may want a sooner refresh. That trade-off is discussed during mapping.",
    },
    {
      question: "Do photos on social media show healed results?",
      answer:
        "Often they show fresh work or ideal lighting. Always ask artists for healed examples at similar skin age and tone to yours when possible.",
    },
  ],
  relatedSlugs: ["powder-brows-vs-microblading", "how-long-do-powder-brows-last", "powder-brow-healing-day-by-day"],
}
