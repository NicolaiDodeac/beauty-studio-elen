import Link from "next/link"

import { articleBodyLinkClass } from "@/lib/blog/article-classes"
import type { SeoArticleBundle } from "@/lib/blog/types"

export const articleHowLongPowderBrowsLast: SeoArticleBundle = {
  meta: {
    slug: "how-long-do-powder-brows-last",
    title: "How long do powder brows last? A grounded timeline",
    description:
      "What affects powder brow longevity — skin, sun, lifestyle — without promising unrealistic years. Semi-permanent makeup Telford guidance from ELEN Makeup.",
    excerpt:
      "Why ‘one number’ never fits everyone, and what actually refreshes colour when you’re ready.",
    publishedIso: "2026-05-06T09:00:00.000Z",
    category: "Powder brows & PMU",
    author: "Elen",
    image: "/placeholder.svg?height=630&width=1200",
  },
  introBlocks: [
    {
      type: "p",
      children:
        "Clients often ask for a single figure — “two years?” — as if powder brows came with a printed expiry date. Semi-permanent pigment lives in skin that breathes, tans, exfoliates, and sees daylight. Timelines shift because your skin and habits shift.",
    },
    {
      type: "p",
      children: (
        <>
          What follows is the practical range many artists discuss with clients, plus what tends to shorten or extend wear. For tailored advice tied to your skin,{" "}
          <Link href="/contact" className={articleBodyLinkClass}>
            book a consultation
          </Link>{" "}
          rather than relying on generic charts alone.
        </>
      ),
    },
  ],
  sections: [
    {
      id: "range",
      title: "The honest band most people work within",
      blocks: [
        {
          type: "p",
          children:
            "Many women enjoy a pleasing colour density for roughly twelve to twenty-four months before a refresh feels visually right — sometimes sooner if they prefer a very soft veil of colour, sometimes later if they embrace a whisper-light fade. That isn’t a guarantee; it’s context artists use when planning touch-ups.",
        },
        {
          type: "ul",
          items: [
            <span key="sun">Sun exposure and tanning can fade pigment faster — SPF on healed brows matters.</span>,
            <span key="skin">Oilier skin can metabolise pigment differently from drier skin.</span>,
            <span key="act">Active exfoliants, peels, or strong retinoids near the brow zone affect retention — disclose everything at consultation.</span>,
          ],
        },
      ],
    },
    {
      id: "refresh",
      title: "Colour refresh vs starting over",
      blocks: [
        {
          type: "p",
          children:
            "When brows soften evenly, a colour boost appointment is usually straightforward. If colour has shifted unevenly or previous work from elsewhere sits in the skin, your artist may recommend correction paths before layering new pigment — honesty protects your face long-term.",
        },
        {
          type: "p",
          children: (
            <>
              Exploring{" "}
              <Link href="/powder-brows-telford" className={articleBodyLinkClass}>
                powder brows in Telford
              </Link>{" "}
              starts with mapping expectations: how often you’re comfortable maintaining PMU is part of choosing saturation level during your first sessions.
            </>
          ),
        },
      ],
    },
    {
      id: "cluster",
      title: "Read next",
      blocks: [
        {
          type: "p",
          children: (
            <>
              Pair this with{" "}
              <Link href="/blog/powder-brow-healing-day-by-day" className={articleBodyLinkClass}>
                healing day by day
              </Link>{" "}
              so you know what “looks right” at week two versus month two — and browse{" "}
              <Link href="/semi-permanent-makeup" className={articleBodyLinkClass}>
                semi permanent makeup
              </Link>{" "}
              services when you’re ready to compare options.
            </>
          ),
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why did my friend’s brows last longer than mine?",
      answer:
        "Different skin, different colour choice, different lifestyles — even two sisters rarely heal identically. Social media timelines are anecdotes, not benchmarks.",
    },
    {
      question: "Can I make them last forever?",
      answer:
        "PMU is designed to fade. That’s part of what keeps it adaptable as your face and taste evolve. Fighting fade with repeated heavy saturation isn’t the route we recommend.",
    },
    {
      question: "When should I book a touch-up?",
      answer:
        "When you notice uneven softening, ash shift, or simply miss the depth you liked — your artist can advise whether it’s time or whether waiting avoids muddy overlap.",
    },
  ],
  relatedSlugs: ["powder-brows-vs-microblading", "powder-brow-healing-day-by-day", "best-pmu-for-mature-skin"],
}
