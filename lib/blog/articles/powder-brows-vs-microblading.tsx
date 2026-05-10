import Link from "next/link"

import { articleBodyLinkClass } from "@/lib/blog/article-classes"
import type { SeoArticleBundle } from "@/lib/blog/types"

export const articlePowderBrowsVsMicroblading: SeoArticleBundle = {
  meta: {
    slug: "powder-brows-vs-microblading",
    title: "Powder brows vs microblading: choosing what suits your skin",
    description:
      "Honest differences between powder brows and microblading — healing, finish, and who often suits which technique. ELEN Makeup Telford.",
    excerpt:
      "Hair strokes or soft shade? Here’s how these brow techniques differ on real skin, without the hype.",
    publishedIso: "2026-05-08T09:00:00.000Z",
    category: "Powder brows & PMU",
    author: "Elen",
    image: "/placeholder.svg?height=630&width=1200",
  },
  introBlocks: [
    {
      type: "p",
      children: (
        <>
          If you&apos;re researching{" "}
          <Link href="/powder-brows-telford" className={articleBodyLinkClass}>
            natural powder brows
          </Link>{" "}
          around Telford or Shropshire, you&apos;ll keep bumping into two names: microblading and powder brows. Both fall under semi-permanent makeup, but they behave differently during healing and in everyday light — and your skin type matters more than Pinterest trends.
        </>
      ),
    },
    {
      type: "p",
      children: (
        <>
          This isn&apos;t about declaring a winner. It&apos;s about matching technique to how your skin heals, how bold or soft you want to look once colour has settled, and what your artist can honestly recommend after a proper consultation — something we always prioritise before any PMU booking at{" "}
          <Link href="/contact" className={articleBodyLinkClass}>
            ELEN Makeup
          </Link>
          .
        </>
      ),
    },
  ],
  sections: [
    {
      id: "technique",
      title: "What each technique is doing",
      blocks: [
        {
          type: "p",
          children:
            "Microblading (often called nano brows when done with a machine) cuts fine channels into the upper skin and deposits pigment in hair-like strokes. Powder brows use a gentler pixel or shading approach that builds soft density — closer to a brushed-on powder or ombre effect rather than individual hairs drawn line by line.",
        },
        {
          type: "p",
          children:
            "Neither option should feel like “either/or” in skilled hands: some faces suit a hybrid. What matters is whether your skin holds crisp strokes over time or tends to blur them — which leads neatly into healing.",
        },
      ],
    },
    {
      id: "skin",
      title: "Oilier or thinner skin: why it changes the story",
      blocks: [
        {
          type: "p",
          children:
            "Oil-rich or thicker skin can soften crisp stroke edges faster; very thin or sun-damaged skin may keep pigment differently too. That doesn’t mean one technique is forbidden — it means mapping, depth, and colour need to be chosen conservatively, with your healed result in mind rather than how brows photograph five minutes after the appointment.",
        },
        {
          type: "p",
          children: (
            <>
              Powder-style work is often discussed as a forgiving route when someone wants a polished brow without relying on strokes staying razor-sharp. For a fuller picture of procedures available locally, see our{" "}
              <Link href="/semi-permanent-makeup" className={articleBodyLinkClass}>
                semi permanent makeup Telford
              </Link>{" "}
              overview — then bring your questions to consultation.
            </>
          ),
        },
      ],
    },
    {
      id: "consult",
      title: "Consultation first — especially in-clinic",
      blocks: [
        {
          type: "p",
          children:
            "Brows sit at the centre of your expression. The right plan balances bone structure, symmetry, lifestyle, and how much definition feels like “you”. If you’re nearby, a face-to-face conversation about suitability beats guessing from screenshots — we’ll walk through healing realistically and never rush you into a procedure date.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can I switch from microblading to powder brows later?",
      answer:
        "Sometimes yes — it depends on what’s already in the skin, how saturated the area is, and whether colour needs neutralising. Always disclose previous brow tattoo or PMU at consultation so options stay safe and honest.",
    },
    {
      question: "Which heals faster?",
      answer:
        "Timelines overlap more than marketing suggests: both go through darker phases, lightening, and softening. Your aftercare and skin response matter more than the label on the technique.",
    },
    {
      question: "Will powder brows look flat?",
      answer:
        "They shouldn’t when mapped well. Depth and shade gradation are tailored so healed brows read soft and dimensional — not like a solid block — unless you specifically request a bolder editorial density.",
    },
    {
      question: "Do you combine techniques?",
      answer:
        "Where appropriate, yes — some clients suit stroke detail at the fronts with soft shading through the body of the brow. That decision is always bespoke.",
    },
  ],
  relatedSlugs: [
    "how-long-do-powder-brows-last",
    "do-powder-brows-look-natural",
    "powder-brow-healing-day-by-day",
  ],
}
