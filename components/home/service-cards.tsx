import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServiceCards() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our range of premium beauty services designed to enhance your natural beauty.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Semi-Permanent Makeup Card */}
        <Card className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-[#F8F5F2]">
          <div className="aspect-w-16 aspect-h-9 relative h-64">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Semi-Permanent Makeup"
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-2xl font-heading">Semi-Permanent Makeup</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Enhance your natural features with long-lasting makeup solutions that save you time and boost your
              confidence. Our semi-permanent makeup services include eyebrows, eyeliner, and lips.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button asChild className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
              <Link href="/semi-permanent-makeup">Learn More</Link>
            </Button>
            <Link
              href="/semi-permanent-makeup"
              className="text-amber-600 hover:text-amber-800 font-medium flex items-center"
            >
              View Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>

        {/* Eyelash Extensions Card */}
        <Card className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-[#F8F5F2]">
          <div className="aspect-w-16 aspect-h-9 relative h-64">
            <Image src="/placeholder.svg?height=400&width=600" alt="Eyelash Extensions" fill className="object-cover" />
          </div>
          <CardHeader>
            <CardTitle className="text-2xl font-heading">Eyelash Extensions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Get fuller, longer lashes that enhance your eyes and simplify your routine. Our eyelash extension services
              include classic, volume, and hybrid sets tailored to your desired look.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button asChild className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
              <Link href="/eyelash-extensions">Learn More</Link>
            </Button>
            <Link
              href="/eyelash-extensions"
              className="text-amber-600 hover:text-amber-800 font-medium flex items-center"
            >
              View Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

const Button = ({ children, asChild, className }: any) => {
  return <div className={`px-4 py-2 rounded-md ${className}`}>{children}</div>
}
