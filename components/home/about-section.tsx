import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-xl overflow-hidden h-[500px]">
          <Image src="/placeholder.svg?height=800&width=600" alt="Elen at work" fill className="object-cover" />
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6 font-heading">
            About Elen.MakeUp.Telford
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Founded with a passion for enhancing natural beauty, Elen.MakeUp.Telford has been dedicated to helping
            clients look and feel their best through premium beauty services and personalized care.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Elen is a certified professional who stays up-to-date with the latest techniques and trends to provide you
            with exceptional results in semi-permanent makeup and eyelash extensions.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We believe that beauty treatments should be a relaxing and enjoyable experience, which is why we've created
            a welcoming environment where you can unwind and be pampered.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              <Link href="/about">Learn More About Elen</Link>
            </Button>
            <Button asChild className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
              <Link href="/booking">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
