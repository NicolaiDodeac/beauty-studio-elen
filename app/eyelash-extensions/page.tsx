import Image from "next/image"
import type { Metadata } from "next"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"
import ServiceGallery from "@/components/services/service-gallery"
import ServicePricing from "@/components/services/service-pricing"
import ServiceFAQ from "@/components/services/service-faq"
import ServiceTestimonials from "@/components/services/service-testimonials"

export const metadata: Metadata = {
  title: "Eyelash Extensions | Elen.MakeUp.Telford",
  description:
    "UV lash extensions in Telford. Fuller, lighter-feeling lashes with a faster cure and a comfortable finish. Book a consultation, patch test, or full set.",
  keywords:
    "UV lash extensions, LED lash extensions, eyelash extensions, classic lashes, volume lashes, hybrid lashes, lash lift, Telford",
}

// Eyelash extensions service data
const serviceData = {
  title: "Eyelash Extensions in Telford",
  description:
    "Wake up with polished lashes every day - custom-mapped for your eye shape, lifestyle, and the look you love.",
  longDescription:
    "If you want the “mascara look” without mascara, eyelash extensions are the most effortless upgrade. I create classic, hybrid, and volume sets that look flattering up close (not heavy), feel comfortable, and suit your natural lashes.\n\nI’m based in Telford and work from a beautiful, luxury-feel space with separate treatment rooms and a super-comfy lash bed—because you’ll be lying down throughout the appointment, and comfort matters.\n\nMy signature option is UV/LED lash extensions: the adhesive is cured with a very safe and controlled UV/LED light, which means a faster set and a more consistent finish compared to traditional air-drying glues that depend on humidity. Many clients also find the experience more comfortable because there’s less time with wet adhesive. No dangerous fumes, no strong smell, no need to wait for it to dry, and also last longer. \n\nNot sure what to book? Start with a consultation or patch test and we’ll choose the safest, most flattering set for you.",
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
        "Lash extensions shed with your natural lash cycle, so the look gradually softens over time. Most clients book infills every 2–3 weeks to keep them looking full and even.",
    },
    {
      question: "Can I wear mascara with lash extensions?",
      answer:
        "It’s best to skip mascara (especially waterproof/oil-based formulas). Extensions are designed to give you that mascara effect already, and mascara can make cleansing harder and shorten retention.",
    },
    {
      question: "How do I care for my lash extensions?",
      answer:
        "Cleanse daily with a lash-safe cleanser, avoid oil-based products around the eyes, and don’t rub or pick at lashes. I’ll show you the easiest routine to keep them fluffy and long-lasting.",
    },
    {
      question: "What are UV/LED lash extensions?",
      answer:
        "UV/LED lash extensions use a professional lash adhesive that’s cured instantly with a controlled UV/LED light. Because the cure is controlled by the technician (instead of relying on room humidity), placement can be more precise and the finish more consistent.",
    },
    {
      question: "Are UV/LED lashes better for sensitive eyes?",
      answer:
        "Everyone is different, but many clients report a more comfortable experience because the adhesive cures quickly and there’s less time with wet glue. If you have sensitive eyes or a history of reactions, I recommend booking a patch test first.",
    },
    {
      question: "Do you offer a patch test?",
      answer:
        "Yes. If you’re new to extensions, have sensitive eyes, or you’ve reacted to lash products before, a patch test is a smart first step. Book your patch test/consultation and I’ll advise the best option for you.",
    },
    {
      question: "Are eyelash extensions safe?",
      answer:
        "When applied correctly by a trained technician, lash extensions are a safe beauty treatment. I work hygienically, isolate each natural lash carefully, and choose styling and weights that suit your natural lashes—so your set looks beautiful and feels comfortable.",
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

          <BooksyBookButton size="lg" className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
            Book a Consultation / Patch Test
          </BooksyBookButton>
        </div>

        <div className="bg-[#F8F5F2] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 font-heading">Why Choose Elen</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="text-amber-600 mr-2">✓</div>
              <span>UV/LED lash extensions available (signature method)</span>
            </li>
            <li className="flex items-start">
              <div className="text-amber-600 mr-2">✓</div>
              <span>Customized mapping for your eye shape and desired style</span>
            </li>
            <li className="flex items-start">
              <div className="text-amber-600 mr-2">✓</div>
              <span>Lightweight sets that look polished up close</span>
            </li>
            <li className="flex items-start">
              <div className="text-amber-600 mr-2">✓</div>
              <span>Luxury-feel space with private rooms and a super-comfy lash bed</span>
            </li>
            <li className="flex items-start">
              <div className="text-amber-600 mr-2">✓</div>
              <span>Aftercare guidance so your lashes stay beautiful longer</span>
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
        <BooksyBookButton size="lg" className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800 px-8">
          Book Your Lash Set
        </BooksyBookButton>
      </div>
    </div>
  )
}
