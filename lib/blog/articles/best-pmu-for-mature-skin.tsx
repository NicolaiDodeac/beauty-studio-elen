import Link from "next/link"

import { articleBodyLinkClass } from "@/lib/blog/article-classes"
import type { SeoArticleBundle } from "@/lib/blog/types"

export const articleBestPmuForMatureSkin: SeoArticleBundle = {
  meta: {
    slug: "best-pmu-for-mature-skin",
    title: "PMU and mature skin: gentle realism",
    description:
      "Thoughtful semi-permanent makeup for changing skin — elasticity, texture, and colour choices without fear-based promises. ELEN Makeup Telford.",
    excerpt:
      "How artists adapt mapping and saturation when skin tells a longer story.",
    publishedIso: "2026-04-28T09:00:00.000Z",
    category: "Powder brows & PMU",
    author: "Elen",
    image: "/placeholder.svg?height=630&width=1200",
  },
  introBlocks: [
    {
      type: "p",
      children:
        "Skin after forty-five or fifty isn’t ‘bad’ skin — it’s skin that may crease differently, hold pigment with its own rhythm, and deserve brow shapes that lift the eyes without fighting fine lines. Semi-permanent makeup remains wonderfully relevant; it simply asks for restraint, precision, and honesty about medical history.",
    },
    {
      type: "p",
      children:
        "Clients across Shropshire seek brows that frame gently — definition without harsh rim lines. Powder-style approaches frequently enter the conversation because diffusion reads forgiving as tissue evolves.",
    },
  ],
  sections: [
    {
      id: "consider",
      title: "What your artist weighs",
      blocks: [
        {
          type: "ul",
          items: [
            <span key="el">Skin laxity along brow perimeter — mapping adjusts tail placement so healed tails don’t sit unnaturally low.</span>,
            <span key="med">Medications thinning skin or affecting clotting — disclosed upfront so timing and technique stay safe.</span>,
            <span key="prior">Prior tattoo or PMU — colour may need neutralising rather than stacking fresh pigment blindly.</span>,
          ],
        },
      ],
    },
    {
      id: "powder",
      title: "Why powder brows often suit mature clients",
      blocks: [
        {
          type: "p",
          children:
            "Soft pixel density can mimic makeup many women already wear — powder or pencil — without relying on razor-fine strokes that demand stable epidermal texture to stay crisp. Saturation stays conservative first sessions; it’s easier to deepen later than undo excessive darkness.",
        },
        {
          type: "p",
          children: (
            <>
              Explore service context on our{" "}
              <Link href="/semi-permanent-makeup" className={articleBodyLinkClass}>
                semi permanent makeup Telford
              </Link>{" "}
              page, then compare aesthetic goals with{" "}
              <Link href="/blog/do-powder-brows-look-natural" className={articleBodyLinkClass}>
                natural finish expectations
              </Link>{" "}
              before booking.",
            </>
          ),
        },
      ],
    },
    {
      id: "consult",
      title: "Consultation as dialogue",
      blocks: [
        {
          type: "p",
          children: (
            <>
              Bring photos — but expect gentle steering toward shapes that honour eyelid anatomy today and tomorrow. We&apos;ll discuss healing timelines openly (see{" "}
              <Link href="/blog/powder-brow-healing-day-by-day" className={articleBodyLinkClass}>
                day-by-day healing
              </Link>
              ) and never rush you from consult table to needle without consent and clarity. Reach through{" "}
              <Link href="/contact" className={articleBodyLinkClass}>
                contact
              </Link>{" "}
              or begin with{" "}
              <Link href="/powder-brows-telford" className={articleBodyLinkClass}>
                powder brows Telford
              </Link>{" "}
              detail first.
            </>
          ),
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Am I too old for PMU?",
      answer:
        "Age alone isn’t a barrier — health factors, skin conditions, and expectations are. A thorough consultation determines fit.",
    },
    {
      question: "Will PMU lift my eyelids?",
      answer:
        "Brows can frame eyes beautifully but cosmetic tattoo doesn’t replace surgical correction for hooded lids — we stay realistic about optical effects.",
    },
    {
      question: "Does menopause matter?",
      answer:
        "Hormonal shifts can influence skin behaviour; sharing your stage helps artists anticipate healing nuances.",
    },
  ],
  relatedSlugs: ["powder-brows-vs-microblading", "powder-brow-healing-day-by-day", "how-long-do-powder-brows-last"],
}
