import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import ServiceGallery from "@/components/services/service-gallery"
import ServicePricing from "@/components/services/service-pricing"
import ServiceFAQ from "@/components/services/service-faq"
import ServiceTestimonials from "@/components/services/service-testimonials"

export const metadata: Metadata = {
  title: "Eyelash Extensions | Elen.MakeUp.Telford",
  description: "Professional eyelash extension services including classic, volume, and hybrid sets in Telford.",
  keywords: "eyelash extensions, classic lashes, volume lashes, hybrid lashes, lash lift, Telford",
}

// Eyelash extensions service data
const serviceData = {
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
    { name: "Lash Lift & Tint", description: "Curl and color your natural lashes", price: 85 },
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
    {
      question: "How long does the application process take?",
      answer:
        "A full set of classic lashes typically takes 1.5-2 hours, while volume and hybrid sets can take 2-3 hours. Fills usually take about 1 hour, depending on how many extensions need to be replaced.",
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
      content: "Elen was so gentle and precise. My lashes look amazing and feel completely natural. Highly recommend!",
      author: "Sophia L.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      content:
        "The hybrid set was perfect for me - not too dramatic but still gave me the fullness I wanted. Elen really listened to what I was looking for.",
      author: "Rebecca T.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ],
}

export default function EyelashExtensionsPage() {
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
              <span>Certified lash technician with years of experience</span>
            </li>
            <li className="flex items-start">
              <div className="text-amber-600 mr-2">✓</div>
              <span>Premium lashes and hypoallergenic adhesives</span>
            </li>
            <li className="flex items-start">
              <div className="text-amber-600 mr-2">✓</div>
              <span>Customized lash design for your eye shape</span>
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
