import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"
import { buildPageMetadata } from "@/lib/seo/metadata"
import { breadcrumbListSchema } from "@/lib/seo/schema"

const services = [
  {
    id: "permanent-makeup",
    href: "/powder-brows-telford",
    cta: "Explore Powder Brows",
    title: "Powder brows & semi-permanent makeup",
    description:
      "Soft, natural-looking powder brows and refined PMU — tailored mapping and healed results you can trust.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "eyelash-extensions",
    href: "/eyelash-extensions",
    cta: "Explore lash extensions",
    title: "Eyelash extensions",
    description:
      "Classic, hybrid, and volume sets mapped for your eyes — comfortable wear and a polished, effortless look.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "facial-treatments",
    href: "/services/facial-treatments",
    cta: "Learn more",
    title: "Facial treatments",
    description:
      "Calm, restorative facials using thoughtful techniques and premium skincare — personalised to your skin.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Natural luxury PMU, powder brows, and lash extensions at ELEN Makeup Telford — book a free consultation to plan your look.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6 font-heading">Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Elegant, natural results in Telford — led by Elen, with a calm studio experience from consultation to healed
          results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow border border-stone-100">
            <div className="aspect-w-16 aspect-h-9 relative h-48">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={`${service.title} at ELEN Makeup Telford`}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-heading">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              {service.id === "permanent-makeup" ? (
                <p className="pt-2 text-sm text-muted-foreground">
                  <Link href="/semi-permanent-makeup" className="font-medium text-stone-700 underline-offset-4 hover:underline">
                    Full semi-permanent makeup range
                  </Link>{" "}
                  — lip, liner, and broader PMU options.
                </p>
              ) : null}
            </CardHeader>
            <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
              <Button asChild className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800 w-full sm:w-auto">
                <Link href={service.href}>{service.cta}</Link>
              </Button>
              <BooksyBookButton
                variant="outline"
                className="w-full border-stone-400 text-stone-800 hover:bg-stone-100 sm:w-auto"
              >
                Book Free Consultation
              </BooksyBookButton>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-[#F8F5F2] p-8 rounded-xl text-center border border-stone-100">
        <h2 className="text-2xl font-bold mb-4 font-heading">Not sure where to start?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-700">
          Book a free consultation and we&apos;ll map the right brow shape, colour, and treatment plan for you — no
          pressure, just expert guidance.
        </p>
        <Button asChild size="lg" className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
    </>
  )
}
