import Link from "next/link"

import { articleBodyLinkClass } from "@/lib/blog/article-classes"
import type { SeoArticleBundle } from "@/lib/blog/types"

export const articlePowderBrowHealingDayByDay: SeoArticleBundle = {
  meta: {
    slug: "powder-brow-healing-day-by-day",
    title: "Powder brow healing: what to expect week by week",
    description:
      "A calm walk-through of powder brow healing phases — colour shifts, flaking, and when your true tone settles. PMU education from ELEN Makeup Telford.",
    excerpt:
      "Fewer surprises, clearer aftercare — how brows evolve after appointment day.",
    publishedIso: "2026-05-02T09:00:00.000Z",
    category: "Powder brows & PMU",
    author: "Elen",
    image: "/placeholder.svg?height=630&width=1200",
  },
  introBlocks: [
    {
      type: "p",
      children:
        "Healing emotions ride alongside healing skin: excitement, occasional doubt when colour looks bold or uneven mid-process, then relief when brows soften into something wearable. No article replaces bespoke aftercare instructions from your artist — consider this a psychological roadmap so ordinary fluctuations feel less alarming.",
    },
    {
      type: "p",
      children: (
        <>
          Individual timelines vary with lymph response, skin turnover, and aftercare discipline. If anything feels outside what you were told — persistent redness, signs of infection — contact your practitioner or pharmacist promptly; this guide isn&apos;t medical advice.
        </>
      ),
    },
  ],
  sections: [
    {
      id: "days-1-4",
      title: "First days: bolder than bedtime",
      blocks: [
        {
          type: "p",
          children:
            "Immediately after, pigment often reads darker and warmer than your target healed shade; mild swelling can make arches look heavier. Light lymph or tenderness can appear — follow your clean-touch and balm rhythm exactly as directed rather than improvising ‘extra’ cream.",
        },
      ],
    },
    {
      id: "days-5-10",
      title: "Mid-phase: flake, don’t pick",
      blocks: [
        {
          type: "p",
          children:
            "Many clients notice light flaking or micro-scabbing — picking pulls pigment unevenly. Brows may seem patchy or ‘too light’ as healed skin clouds colour temporarily. This awkward stage convinces some people they’ve ‘lost’ pigment entirely; patience matters.",
        },
      ],
    },
    {
      id: "weeks-2-6",
      title: "Colour breathing room",
      blocks: [
        {
          type: "p",
          children:
            "Over the following weeks, clarity improves as skin completes early turnover. True softness emerges gradually — not overnight on a predictable calendar day. Some asymmetry during healing is normal until swelling fully resolves.",
        },
        {
          type: "p",
          children: (
            <>
              Wondering how long the tone stays pleasing once settled? Read{" "}
              <Link href="/blog/how-long-do-powder-brows-last" className={articleBodyLinkClass}>
                how long powder brows last
              </Link>
              , and compare technique fit in{" "}
              <Link href="/blog/powder-brows-vs-microblading" className={articleBodyLinkClass}>
                powder brows vs microblading
              </Link>
              .
            </>
          ),
        },
      ],
    },
    {
      id: "touch",
      title: "Touch-ups and communication",
      blocks: [
        {
          type: "p",
          children: (
            <>
              Scheduled refinement appointments fine-tune gaps — they&apos;re normal parts of professional PMU planning, not signs something ‘went wrong’. Questions mid-healing? Message your artist rather than scrubbing or layering makeup against advice. New to our studio? Start via{" "}
              <Link href="/semi-permanent-makeup" className={articleBodyLinkClass}>
                semi permanent makeup
              </Link>{" "}
              and{" "}
              <Link href="/powder-brows-telford" className={articleBodyLinkClass}>
                powder brows
              </Link>{" "}
              pages, then{" "}
              <Link href="/contact" className={articleBodyLinkClass}>
                contact us
              </Link>
              .
            </>
          ),
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is drastic lightening normal?",
      answer:
        "A temporary ‘ghosting’ phase frustrates many clients — pigment can appear faint before it clarifies. Sudden complete disappearance in isolated patches warrants a photo update to your artist.",
    },
    {
      question: "When can I exercise?",
      answer:
        "Follow your provided windows for sweat, steam, and pools — usually short restrictions early on to protect forming epithelial tissue.",
    },
    {
      question: "Can I speed healing?",
      answer:
        "Skin heals on its biology — resting, hydration, and avoiding picking help more than miracle creams.",
    },
    {
      question: "Why does my friend heal differently?",
      answer:
        "Age, medications, skin condition, even hormonal flux influence timelines — comparison rarely comforts and isn’t predictive.",
    },
  ],
  relatedSlugs: ["how-long-do-powder-brows-last", "do-powder-brows-look-natural", "best-pmu-for-mature-skin"],
}
