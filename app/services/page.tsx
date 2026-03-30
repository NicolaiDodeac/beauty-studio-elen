// Create a new services index page that lists all available services
import Link from "next/link"
import Image from "next/image"
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"

// This would typically come from a database or CMS
const services = [
  {
    id: "permanent-makeup",
    title: "Permanent Makeup",
    description: "Enhance your natural features with long-lasting makeup solutions.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "eyelash-extensions",
    title: "Eyelash Extensions",
    description: "Get fuller, longer lashes that enhance your eyes and simplify your routine.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "facial-treatments",
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our customized facial treatments.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export const metadata = {
  title: "Our Services | Glow Beauty Studio",
  description: "Explore our range of premium beauty services designed to enhance your natural beauty.",
}

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our range of premium beauty services designed to enhance your natural beauty.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-16 aspect-h-9 relative h-48">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Button asChild className="bg-pink-600 hover:bg-pink-700">
                <Link href={`/services/${service.id}`}>Learn More</Link>
              </Button>
              <BooksyBookButton variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                Book Now
              </BooksyBookButton>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-pink-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Can't Decide Which Service Is Right For You?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Schedule a consultation with one of our beauty experts who will help you choose the perfect treatment for your
          needs.
        </p>
        <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
