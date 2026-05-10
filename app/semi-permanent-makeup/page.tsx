import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ServiceHeroPlaceholder } from "@/components/marketing/branded-placeholder-media"
import { Container } from "@/components/marketing/container"
import { Section } from "@/components/marketing/section"
import { JsonLd } from "@/components/seo/json-ld"
import ServiceGallery from "@/components/services/service-gallery"
import ServicePricing from "@/components/services/service-pricing"
import ServiceFAQ from "@/components/services/service-faq"
import ServiceTestimonials from "@/components/services/service-testimonials"
import ProcedureReviews from "@/components/reviews/procedure-reviews"
import GoogleReviews from "@/components/reviews/google-reviews"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"
import { buildPageMetadata } from "@/lib/seo/metadata"
import { breadcrumbListSchema, serviceSchema } from "@/lib/seo/schema"
import { getGoogleReviews } from "@/lib/google-reviews"
import { getProcedureReviews } from "@/lib/procedure-reviews"
import { isPlaceholderMediaSrc } from "@/lib/marketing/placeholder-media"

const SEMI_PAGE_DESCRIPTION =
  "Natural luxury powder brows, ombre brows, and refined PMU in Telford — tailored mapping and soft healed results. Book a free consultation."

export const metadata: Metadata = buildPageMetadata({
  title: "Semi-Permanent Makeup Telford",
  description: SEMI_PAGE_DESCRIPTION,
  path: "/semi-permanent-makeup",
})

/*
 * MEDIA PLACEHOLDERS — `/semi-permanent-makeup`
 * Hero (`serviceData.image`): Natural PMU storytelling — healed brow / soft lip / subtle liner examples that match services offered (all consented). Avoid generic beauty stock.
 * Gallery (`serviceData.gallery` ×6): Consented healed-detail shots per modality you actively market (brow powder heal, lip blush heal, liner subtle); assign slot meanings in `docs/media-replacement-checklist.md`.
 */
// Semi-permanent makeup service data
const serviceData = {
  title: "Semi-Permanent Makeup",
  description:
    "Soft brows, subtle liner, and lip colour in Telford — tailored mapping and clear guidance from consultation through healing.",
  longDescription:
    "Semi-permanent makeup (micropigmentation) at ELEN Makeup Telford is about elegant, wearable colour — not harsh lines. We plan around how pigment settles on real skin: mapping, colour choice, and aftercare are discussed upfront. Suitability and expectations are always reviewed before treatment.",
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
    { name: "Ombre Brows", description: "Soft, powdered effect", price: 380 },
    { name: "Eyeliner", description: "Upper or lower lash line enhancement", price: 250 },
    { name: "Lips", description: "Full lip color or lip liner", price: 400 },
    { name: "Touch-up", description: "For existing clients within 6 months", price: 150 },
  ],
  faqs: [
    {
      question: "How long does semi-permanent makeup last?",
      answer:
        "Semi-permanent makeup typically lasts 1-3 years, depending on your skin type, lifestyle, and how well you follow aftercare instructions. Touch-ups are recommended every 12-18 months to maintain the color and shape.",
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
    {
      question: "How do I prepare for my appointment?",
      answer:
        "Avoid alcohol, caffeine, and blood thinners for 24-48 hours before your appointment. Do not use retinol products on the treatment area for at least 2 weeks prior. Come to your appointment with clean skin and no makeup on the area to be treated.",
    },
  ],
  testimonials: [],
}

export default async function SemiPermanentMakeupPage() {
  const procedureKey = "semi-permanent-makeup"
  const [reviews, googlePayload] = await Promise.all([
    getProcedureReviews(procedureKey),
    getGoogleReviews(),
  ])

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: serviceData.title,
            description: serviceData.description,
            path: "/semi-permanent-makeup",
            serviceType: "Semi-permanent makeup",
          }),
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Semi-Permanent Makeup", path: "/semi-permanent-makeup" },
          ]),
        ]}
      />
      <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          {serviceData.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">{serviceData.description}</p>
      </div>

      {isPlaceholderMediaSrc(serviceData.image) ? (
        <ServiceHeroPlaceholder className="mb-12" />
      ) : (
        <div className="relative mb-12 h-[400px] w-full overflow-hidden rounded-xl md:h-[500px]">
          <Image
            src={serviceData.image || "/placeholder.svg"}
            alt="Semi-permanent makeup and powder brows — ELEN Makeup Telford, Shropshire"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 font-heading">About {serviceData.title}</h2>
          <p className="text-lg text-gray-700 mb-4">{serviceData.longDescription}</p>
          <p className="text-lg text-gray-700 mb-8">
            For natural powder brows specifically, see our{" "}
            <Link
              href="/powder-brows-telford"
              className="font-medium text-stone-800 underline underline-offset-4 hover:text-stone-950"
            >
              powder brows in Telford
            </Link>{" "}
            overview.
          </p>

          <BooksyBookButton size="lg" className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
            Book Free Consultation
          </BooksyBookButton>
        </div>

        <div className="rounded-lg border border-stone-100 bg-[#F8F5F2] p-6">
          <h2 className="text-2xl font-bold mb-4 font-heading">Why ELEN Makeup Telford</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="mr-2 text-amber-800">✓</div>
              <span>Consultation-led planning — suitability and expectations discussed honestly</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 text-amber-800">✓</div>
              <span>Colour and mapping chosen for healed results on real skin</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 text-amber-800">✓</div>
              <span>Premium pigments and meticulous hygiene</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 text-amber-800">✓</div>
              <span>Calm, appointment-led studio rhythm — unhurried appointments</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 text-amber-800">✓</div>
              <span>Clear aftercare so you know what to expect as colour settles</span>
            </li>
          </ul>
        </div>
      </div>

      <ServiceGallery
        images={serviceData.gallery}
        title={serviceData.title}
        disclaimer="Visual placeholders while we prepare photography — not shown as client before-and-after results."
      />

      <ServicePricing pricing={serviceData.pricing} />

      <ServiceFAQ faqs={serviceData.faqs} />

      <Section tone="ivory" spacing="compact">
        <Container className="max-w-3xl">
          <h2 className="font-heading text-2xl tracking-tight text-luxury-charcoal">Further reading</h2>
          <p className="mt-3 text-base leading-relaxed text-stone-600">
            Straightforward explainers on semi-permanent makeup — helpful before your consultation in Telford.
          </p>
          <ul className="mt-6 space-y-3 text-base leading-relaxed text-stone-700">
            <li>
              <Link
                href="/blog/how-long-do-powder-brows-last"
                className="font-medium text-luxury-charcoal underline-offset-4 hover:underline"
              >
                How long do powder brows last?
              </Link>
              <span className="text-stone-500"> — what influences fade and refresh timing.</span>
            </li>
            <li>
              <Link
                href="/blog/powder-brows-vs-microblading"
                className="font-medium text-luxury-charcoal underline-offset-4 hover:underline"
              >
                Powder brows vs microblading
              </Link>
              <span className="text-stone-500"> — technique, healing, skin fit.</span>
            </li>
            <li>
              <Link
                href="/blog/best-pmu-for-mature-skin"
                className="font-medium text-luxury-charcoal underline-offset-4 hover:underline"
              >
                PMU and mature skin
              </Link>
              <span className="text-stone-500"> — gentle realism.</span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-stone-500">
            <Link href="/blog" className="font-medium text-luxury-charcoal underline-offset-4 hover:underline">
              All journal articles
            </Link>
          </p>
        </Container>
      </Section>

      <ServiceTestimonials testimonials={serviceData.testimonials} />

      <section className="my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProcedureReviews
            procedureName={serviceData.title}
            reviews={reviews}
            heading="Reviews shared by clients"
            variant="panel"
          />
          <GoogleReviews
            payload={googlePayload}
            heading="Client reviews from Google"
            introLineText="Feedback here reflects Google’s snapshot of our Business Profile — reviews may mention brows, lashes, or other treatments. For dedicated PMU conversations, Booksy is often where brow clients leave detailed notes."
          />
        </div>
      </section>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6 font-heading">Ready to plan your brows together?</h2>
        <BooksyBookButton size="lg" className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800 px-8">
          Book Free Consultation
        </BooksyBookButton>
      </div>
    </div>
    </>
  )
}
