import Link from "next/link"
import Image from "next/image"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading">
                Enhance Your Natural Beauty
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Experience premium beauty services tailored to enhance your unique features. From semi-permanent makeup
                to eyelash extensions, our expert technicians help you look and feel your best.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <BooksyBookButton className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800 px-8 py-6">
                  Book Appointment
                </BooksyBookButton>
                <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                  About Elen <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div className="relative aspect-[4/3] w-full rounded-xl shadow-xl overflow-hidden">
            <Image
              src="/images/hero/image.png"
              alt="Elen beauty studio — eyelash extensions and semi-permanent makeup"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
