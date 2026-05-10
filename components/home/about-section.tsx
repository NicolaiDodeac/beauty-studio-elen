import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"

export default function AboutSection() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-xl overflow-hidden h-[500px]">
          <Image
            src="/images/about/Elen.png"
            alt="Elen at work — ELEN Makeup Telford"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6 font-heading">
            About ELEN Makeup Telford
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            A calm, appointment-led studio in Telford — specialising in soft powder brows and natural semi-permanent
            makeup for women who want elegant, low-maintenance polish.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Elen combines precise brow mapping with a gentle, luxury-feel experience — so you feel heard, comfortable,
            and confident in your healed results.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Whether you&apos;re new to PMU or refining previous work, every treatment plan starts with a consultation and
            honest, expert guidance.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline" className="border-stone-400 text-stone-800 hover:bg-stone-100">
              <Link href="/about">Meet Elen</Link>
            </Button>
            <BooksyBookButton className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
              Book Free Consultation
            </BooksyBookButton>
          </div>
        </div>
      </div>
    </section>
  )
}
