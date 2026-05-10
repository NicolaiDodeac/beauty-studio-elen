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
              <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-stone-600">
                Natural luxury PMU in Telford
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading">
                Soft brows &amp; polished details
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Powder brows and semi-permanent makeup designed to look soft and elegant — so you feel effortlessly put
                together, every day.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <BooksyBookButton className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800 px-8 py-6">
                  Book Free Consultation
                </BooksyBookButton>
                <Link
                  href="/semi-permanent-makeup"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  View Results <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div className="relative aspect-[4/3] w-full rounded-xl shadow-xl overflow-hidden">
            <Image
              src="/images/hero/image.png"
              alt="Natural powder brows and PMU — ELEN Makeup Telford"
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
