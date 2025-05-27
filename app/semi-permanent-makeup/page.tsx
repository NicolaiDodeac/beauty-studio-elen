import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import ServiceGallery from "@/components/services/service-gallery"
import ServicePricing from "@/components/services/service-pricing"
import ServiceFAQ from "@/components/services/service-faq"
import ServiceTestimonials from "@/components/services/service-testimonials"

export const metadata: Metadata = {
  title: "Semi-Permanent Makeup | Elen.MakeUp.Telford",
  description: "Professional semi-permanent makeup services including eyebrows, eyeliner, and lips in Telford.",
  keywords: "semi-permanent makeup, microblading, powder brows, ombre brows, eyeliner, lip blush, Telford",
}

// Semi-permanent makeup service data
const serviceData = {
  title: "Semi-Permanent Makeup",
  description:
    "Enhance your natural features with long-lasting makeup solutions that save you time and boost your confidence.",
  longDescription:
    "Semi-permanent makeup, also known as micropigmentation, is a cosmetic technique which employs tattoos as a means of producing designs that resemble makeup, such as eyelining and other permanent enhancing colors to the skin of the face, lips, and eyelids. It is also used to produce artificial eyebrows, particularly in people who have lost them as a consequence of old age, disease, such as alopecia, or chemotherapy.",
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
    {
      id: 3,
      content:
        "Elen is a true artist! She took the time to understand exactly what I wanted for my brows and created the perfect shape and color for my face. I couldn't be happier with the results.",
      author: "Amanda R.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ],
}

export default function SemiPermanentMakeupPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6 font-heading">
          {serviceData.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">{serviceData.description}</p>
      </div>

      <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12">
        <Image
          src={serviceData.image || "/placeholder.svg"}
          alt={serviceData.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 font-heading">About {serviceData.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{serviceData.longDescription}</p>

          <Button asChild size="lg" className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
            <Link href="/booking">Book This Service</Link>
          </Button>
        </div>

        <div className="bg-[#F8F5F2] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 font-heading">Why Choose Elen</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="text-amber-600 mr-2">✓</div>
              <span>Certified professional with years of experience</span>
            </li>
            <li className="flex items-start">
              <div className="text-amber-600 mr-2">✓</div>
              <span>Premium pigments and state-of-the-art equipment</span>
            </li>
            <li className="flex items-start">
              <div className="text-amber-600 mr-2">✓</div>
              <span>Personalized approach to meet your unique needs</span>
            </li>
            <li className="flex items-start">
              <div className="text-amber-600 mr-2">✓</div>
              <span>Relaxing and hygienic environment</span>
            </li>
            <li className="flex items-start">
              <div className="text-amber-600 mr-2">✓</div>
              <span>Satisfaction guaranteed</span>
            </li>
          </ul>
        </div>
      </div>

      <ServiceGallery images={serviceData.gallery} title={serviceData.title} />

      <ServicePricing pricing={serviceData.pricing} />

      <ServiceFAQ faqs={serviceData.faqs} />

      <ServiceTestimonials testimonials={serviceData.testimonials} />

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6 font-heading">Ready to Experience {serviceData.title}?</h2>
        <Button asChild size="lg" className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800 px-8">
          <Link href="/booking">Book Your Appointment</Link>
        </Button>
      </div>
    </div>
  )
}
