import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    id: "permanent-makeup",
    title: "Powder brows & PMU",
    description: "Soft, natural-looking powder brows and refined semi-permanent makeup in Telford.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "eyelash-extensions",
    title: "Eyelash extensions",
    description: "Mapped lash sets for an effortless, polished look — classic, hybrid, or volume.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "facial-treatments",
    title: "Facial treatments",
    description: "Calm, customised facials focused on glow, balance, and skin comfort.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function FeaturedServices() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Natural luxury PMU and lash artistry — consultation-led, tailored to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-16 aspect-h-9 relative h-48">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link
                href={`/services/${service.id}`}
                className="text-amber-900/90 hover:text-amber-950 font-medium flex items-center"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/services" className="text-amber-900/90 hover:text-amber-950 font-medium inline-flex items-center">
          View all services <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
