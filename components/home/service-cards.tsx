import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"

export default function ServiceCards() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
          Natural luxury PMU in Telford
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Soft powder brows and elegant semi-permanent makeup — designed to enhance your features without looking harsh or
          overdone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-[#F8F5F2]">
          <div className="aspect-w-16 aspect-h-9 relative h-64">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Natural powder brows and semi-permanent makeup at ELEN Makeup Telford"
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-2xl font-heading">Powder brows &amp; semi-permanent makeup</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Soft, healed-looking brows tailored to your face — plus lip and liner options when you want subtle,
              long-lasting polish without a heavy makeup look.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <BooksyBookButton className="w-full bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800 sm:w-auto">
              Book Free Consultation
            </BooksyBookButton>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <Button asChild variant="outline" className="border-stone-400 text-stone-800 hover:bg-stone-100">
                <Link href="/powder-brows-telford">Explore Powder Brows</Link>
              </Button>
              <Link
                href="/powder-brows-telford#gallery"
                className="inline-flex items-center justify-center text-sm font-semibold text-amber-900/90 hover:text-amber-950"
              >
                Powder Brows in Telford <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </div>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-[#F8F5F2]">
          <div className="aspect-w-16 aspect-h-9 relative h-64">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Eyelash extensions at ELEN Makeup Telford"
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-2xl font-heading">Eyelash extensions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Lightweight, beautifully mapped lashes for an effortless, polished look — classic, hybrid, or volume, shaped
              for your eyes and lifestyle.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <BooksyBookButton className="w-full bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800 sm:w-auto">
              Book Free Consultation
            </BooksyBookButton>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <Button asChild variant="outline" className="border-stone-400 text-stone-800 hover:bg-stone-100">
                <Link href="/eyelash-extensions">Explore lash extensions</Link>
              </Button>
              <Link
                href="/eyelash-extensions"
                className="inline-flex items-center justify-center text-sm font-semibold text-amber-900/90 hover:text-amber-950"
              >
                View Results <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
