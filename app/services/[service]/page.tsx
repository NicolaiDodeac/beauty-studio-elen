import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"
import ServiceGallery from "@/components/services/service-gallery"
import ServicePricing from "@/components/services/service-pricing"
import ServiceFAQ from "@/components/services/service-faq"
import ServiceTestimonials from "@/components/services/service-testimonials"

// This would typically come from a database or CMS
const services = {
  "permanent-makeup": {
    title: "Permanent Makeup",
    description:
      "Enhance your natural features with long-lasting makeup solutions that save you time and boost your confidence.",
    longDescription:
      "Permanent makeup, also known as micropigmentation, is a cosmetic technique which employs tattoos as a means of producing designs that resemble makeup, such as eyelining and other permanent enhancing colors to the skin of the face, lips, and eyelids. It is also used to produce artificial eyebrows, particularly in people who have lost them as a consequence of old age, disease, such as alopecia, or chemotherapy.",
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
    testimonials: [
      {
        id: 1,
        content:
          "I've been self-conscious about my sparse eyebrows for years. The microblading procedure has completely transformed my face and my confidence!",
        author: "Jessica T.",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      {
        id: 2,
        content:
          "The permanent eyeliner has been a game-changer for my morning routine. I wake up looking put-together, even without any other makeup.",
        author: "Michelle K.",
        avatar: "/placeholder.svg?height=60&width=60",
      },
    ],
  },
  "eyelash-extensions": {
    title: "Eyelash Extensions",
    description: "Get fuller, longer lashes that enhance your eyes and simplify your routine.",
    longDescription:
      "Eyelash extensions are a cosmetic application used to enhance the length, curl, fullness, and thickness of natural eyelashes. The extensions may be made from several materials including mink, silk, synthetic, human or horsehair. The main method of applying the extensions is by using a cyanoacrylate adhesive to apply the extension(s) to the natural lash 1–2 mm from the base of the natural eyelash.",
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
    testimonials: [
      {
        id: 1,
        content:
          "I've been getting lash extensions for over a year now, and I can't imagine going back to my natural lashes. They save me so much time in the morning!",
        author: "Amanda R.",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      {
        id: 2,
        content:
          "The lash technician was so gentle and precise. My lashes look amazing and feel completely natural. Highly recommend!",
        author: "Sophia L.",
        avatar: "/placeholder.svg?height=60&width=60",
      },
    ],
  },
  "facial-treatments": {
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our customized facial treatments.",
    longDescription:
      "Our facial treatments are designed to address specific skin concerns while providing a relaxing, spa-like experience. Each facial begins with a thorough skin analysis, followed by deep cleansing, exfoliation, extractions (if needed), massage, mask, and hydration. We use premium skincare products tailored to your skin type and concerns.",
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
    testimonials: [
      {
        id: 1,
        content:
          "The anti-aging facial was incredible! My skin looks visibly firmer and more radiant. The esthetician was knowledgeable and recommended products perfect for my skin concerns.",
        author: "Patricia M.",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      {
        id: 2,
        content:
          "I've struggled with acne for years, and after just three acne clearing facials, my skin has improved dramatically. The staff is professional and the atmosphere is so relaxing.",
        author: "David W.",
        avatar: "/placeholder.svg?height=60&width=60",
      },
    ],
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
    title: `${service.title} | Glow Beauty Studio`,
    description: service.description,
  }
}

export default function ServicePage({ params }: ServiceParams) {
  const service = services[params.service as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">{service.title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl">{service.description}</p>
      </div>

      <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12">
        <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" priority />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">About {service.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{service.longDescription}</p>

          <BooksyBookButton size="lg" className="bg-pink-600 hover:bg-pink-700">
            Book This Service
          </BooksyBookButton>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-pink-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Certified professionals with years of experience</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-pink-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Premium products and state-of-the-art equipment</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-pink-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Personalized approach to meet your unique needs</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-pink-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Relaxing and hygienic environment</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-pink-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Satisfaction guaranteed</span>
            </li>
          </ul>
        </div>
      </div>

      <ServiceGallery images={service.gallery} title={service.title} />

      <ServicePricing pricing={service.pricing} />

      <ServiceFAQ faqs={service.faqs} />

      <ServiceTestimonials testimonials={service.testimonials} />

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Experience {service.title}?</h2>
        <BooksyBookButton size="lg" className="bg-pink-600 hover:bg-pink-700 px-8">
          Book Your Appointment
        </BooksyBookButton>
      </div>
    </div>
  )
}
