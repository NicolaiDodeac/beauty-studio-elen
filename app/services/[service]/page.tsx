import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ServiceHeroPlaceholder } from "@/components/marketing/branded-placeholder-media"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"
import ServiceGallery from "@/components/services/service-gallery"
import ServicePricing from "@/components/services/service-pricing"
import ServiceFAQ from "@/components/services/service-faq"
import ServiceTestimonials from "@/components/services/service-testimonials"
import GoogleReviews from "@/components/reviews/google-reviews"
import { getGoogleReviews } from "@/lib/google-reviews"
import { isPlaceholderMediaSrc } from "@/lib/marketing/placeholder-media"

/*
 * MEDIA PLACEHOLDERS — `/services/[service]` — hero + 6 gallery tiles per key.
 * permanent-makeup: Real healed PMU mix (powder brows priority + lip/liner only if actively booked).
 * eyelash-extensions: Authentic extension macros / eye-safe crops (consented).
 * facial-treatments: Studio facial ambience / hands-on treatment still (consented) — remove route if service inactive.
 */
// This would typically come from a database or CMS
const services = {
  "permanent-makeup": {
    title: "Powder brows & semi-permanent makeup",
    description:
      "Soft powder brows, lip blush, and refined liner — tailored to your features for natural healed results in Telford.",
    longDescription:
      "Semi-permanent makeup (micropigmentation) lets you wake up with softly defined brows, balanced lips, or subtle liner — without a harsh or heavily tattooed look. At ELEN Makeup Telford we prioritise colour theory, brow mapping, and a calm appointment experience so your results feel elegant and wearable every day.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    pricing: [
      { name: "Eyebrows", description: "Microblading or powder brows", price: 350 },
      { name: "Eyeliner", description: "Upper or lower lash line enhancement", price: 250 },
      { name: "Lips", description: "Full lip color or lip liner", price: 400 },
      { name: "Touch-up", description: "For existing clients within 6 months", price: 150 },
    ],
    faqs: [
      {
        question: "How long does permanent makeup last?",
        answer:
          "Permanent makeup typically lasts 1-3 years, depending on your skin type, lifestyle, and how well you follow aftercare instructions. Touch-ups are recommended every 12-18 months to maintain the color and shape.",
      },
      {
        question: "Is the procedure painful?",
        answer:
          "We apply a topical anesthetic before and during the procedure to minimize discomfort. Most clients describe the sensation as mild discomfort rather than pain.",
      },
      {
        question: "What is the healing process like?",
        answer:
          "The initial healing takes about 7-10 days. During this time, the color will appear darker and then fade by up to 30%. Complete healing takes about 4-6 weeks.",
      },
      {
        question: "Are there any side effects?",
        answer:
          "Some clients experience minor swelling and redness immediately after the procedure, which typically subsides within 24-48 hours. We provide detailed aftercare instructions to minimize any potential side effects.",
      },
    ],
    testimonials: [],
  },
  "eyelash-extensions": {
    title: "Eyelash extensions",
    description:
      "Classic, hybrid, and volume lashes — mapped for your eye shape with comfortable wear and a polished, natural finish.",
    longDescription:
      "Eyelash extensions add length and fullness while respecting your natural lashes. Sets are customised for your eyes and lifestyle, with careful isolation, safe weights, and aftercare guidance — so your lashes look refined up close and feel comfortable day to day.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    pricing: [
      { name: "Classic Set", description: "1:1 lash application for a natural look", price: 120 },
      { name: "Volume Set", description: "Multiple extensions per natural lash for fullness", price: 180 },
      { name: "Hybrid Set", description: "Combination of classic and volume techniques", price: 150 },
      { name: "Fill", description: "Maintenance appointment (2-3 weeks after full set)", price: 75 },
    ],
    faqs: [
      {
        question: "How long do eyelash extensions last?",
        answer:
          "With proper care, eyelash extensions can last for the full growth cycle of your natural lashes, typically 6-8 weeks. However, we recommend fills every 2-3 weeks to maintain a full look as your natural lashes shed.",
      },
      {
        question: "Can I wear mascara with lash extensions?",
        answer:
          "We recommend avoiding mascara, especially oil-based formulas, as it can break down the adhesive and be difficult to remove without damaging the extensions. Your lash extensions will give you the look of mascara without the need for additional products.",
      },
      {
        question: "How do I care for my lash extensions?",
        answer:
          "Avoid oil-based products around the eyes, do not use an eyelash curler, avoid rubbing your eyes, and gently cleanse your lashes daily with a lash-safe cleanser. We provide detailed aftercare instructions after your appointment.",
      },
      {
        question: "Are eyelash extensions safe?",
        answer:
          "Yes, when applied by a trained professional, eyelash extensions are safe. We use high-quality, hypoallergenic adhesives and follow strict hygiene protocols to ensure your safety and comfort.",
      },
    ],
    testimonials: [],
  },
  "facial-treatments": {
    title: "Facial treatments",
    description:
      "Calm, restorative facials tailored to your skin — deep cleanse, massage, and hydration in a quiet treatment space.",
    longDescription:
      "Each facial begins with listening to your skin concerns, then a personalised cleanse, exfoliation where appropriate, treatment mask, and hydration. The goal is visible freshness and comfort — never overload — using thoughtful techniques and quality skincare.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    pricing: [
      { name: "Signature Facial", description: "Customized facial for all skin types", price: 95 },
      { name: "Anti-Aging Facial", description: "Targets fine lines and wrinkles", price: 125 },
      { name: "Acne Clearing Facial", description: "Deep cleansing for problematic skin", price: 110 },
      { name: "Express Facial", description: "30-minute refresher facial", price: 65 },
    ],
    faqs: [
      {
        question: "How often should I get a facial?",
        answer:
          "For optimal results, we recommend getting a facial every 4-6 weeks, which aligns with your skin's natural cell turnover cycle. However, this can vary based on your skin type and concerns.",
      },
      {
        question: "What should I do before my facial appointment?",
        answer:
          "Avoid sun exposure, exfoliation, and any harsh skin treatments for 48 hours before your appointment. Come with clean skin if possible, and be prepared to discuss your skincare routine and concerns.",
      },
      {
        question: "Will my skin be red after a facial?",
        answer:
          "Mild redness is normal and typically subsides within a few hours. More intensive treatments may cause redness that lasts up to 24 hours. We provide post-treatment care instructions to minimize any side effects.",
      },
      {
        question: "Can I wear makeup after a facial?",
        answer:
          "We recommend allowing your skin to breathe for at least 24 hours after a facial. If you must wear makeup, apply it lightly and use mineral-based products that won't clog your pores.",
      },
    ],
    testimonials: [],
  },
}

type ServiceParams = {
  params: {
    service: string
  }
}

export async function generateMetadata({ params }: ServiceParams): Promise<Metadata> {
  const service = services[params.service as keyof typeof services]

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: `${service.title} | ELEN Makeup Telford`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: ServiceParams) {
  const service = services[params.service as keyof typeof services]

  if (!service) {
    notFound()
  }

  const googlePayload = await getGoogleReviews()

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">{service.title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl">{service.description}</p>
      </div>

      {isPlaceholderMediaSrc(service.image) ? (
        <ServiceHeroPlaceholder className="mb-12" />
      ) : (
        <div className="relative mb-12 h-[400px] w-full overflow-hidden rounded-xl md:h-[500px]">
          <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" priority />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 font-heading">About {service.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{service.longDescription}</p>
          {params.service === "permanent-makeup" ? (
            <p className="mb-8 text-lg text-gray-700">
              Interested mainly in brows? Start with our{" "}
              <Link
                href="/powder-brows-telford"
                className="font-medium text-stone-800 underline underline-offset-4 hover:text-stone-950"
              >
                powder brows in Telford
              </Link>{" "}
              guide.
            </p>
          ) : null}

          <BooksyBookButton size="lg" className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
            Book Free Consultation
          </BooksyBookButton>
        </div>

        <div className="bg-[#F8F5F2] p-6 rounded-lg border border-stone-100">
          <h2 className="text-2xl font-bold mb-4 font-heading">Why ELEN Makeup Telford</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-amber-800 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Thoughtful brow mapping and natural colour theory</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-amber-800 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Premium pigments and meticulous hygiene standards</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-amber-800 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>A calm, appointment-led experience — never rushed</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-amber-800 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Trusted by clients across Telford &amp; Shropshire</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-amber-800 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Clear aftercare and realistic healed-result expectations</span>
            </li>
          </ul>
        </div>
      </div>

      <ServiceGallery
        images={service.gallery}
        title={service.title}
        disclaimer="Visual placeholders while we prepare photography — not shown as client before-and-after results."
      />

      <ServicePricing pricing={service.pricing} />

      <ServiceFAQ faqs={service.faqs} />

      {googlePayload?.reviews?.length ? (
        <section className="my-16 max-w-5xl">
          <GoogleReviews
            payload={googlePayload}
            heading="Client reviews from Google"
            introLineText="Google hosts the live thread for our Business Profile — treatments mentioned can include lashes, brows, or other services."
          />
        </section>
      ) : null}

      <ServiceTestimonials testimonials={service.testimonials} />

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6 font-heading">Ready for a softer, more polished everyday look?</h2>
        <BooksyBookButton size="lg" className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800 px-8">
          Book Free Consultation
        </BooksyBookButton>
      </div>
    </div>
  )
}
