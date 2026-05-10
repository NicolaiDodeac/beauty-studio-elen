import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Elen",
  description:
    "Meet Elen — natural luxury PMU and powder brows in Telford. Founder-led care, soft editorial results, and a calm studio experience.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">About ELEN Makeup</h1>
        <p className="mx-auto max-w-3xl text-xl text-gray-600">
          Soft luxury powder brows and refined PMU — founder-led, meticulous, and focused on natural healed results.
        </p>
      </div>

      {/* Hero Section */}
      <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/images/about/Elen.png"
            alt="Elen, founder of ELEN Makeup Telford"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="mb-6 font-heading text-3xl font-bold">Meet Elen</h2>
          <p className="mb-4 text-lg text-gray-700">
            With many years in the beauty industry, Elen focuses on semi-permanent makeup and lash artistry from a calm,
            appointment-led studio in Telford — prioritising mapping, colour that suits real skin, and clear aftercare.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Training has included advanced brow and lash techniques with respected educators; she continues short courses
            and refreshers to stay current with safe pigment practice and evolving styles.
          </p>
          <p className="mb-6 text-lg text-gray-700">
            Whether you are new to PMU or refining older work, the aim is the same: brows and enhancements that still feel
            like you — polished in daylight, comfortable up close.
          </p>

          <div className="flex flex-wrap gap-4">
            <BooksyBookButton className="bg-[#E0D4C8] text-gray-800 hover:bg-[#D0C4B8]">Book Free Consultation</BooksyBookButton>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <h2 className="mb-6 text-center font-heading text-3xl font-bold">Our story</h2>
        <div className="rounded-xl bg-[#F8F5F2] p-8">
          <p className="mb-4 text-lg text-gray-700">
            ELEN Makeup Telford exists to help women feel effortlessly polished through natural-looking powder brows,
            thoughtful PMU, and lash services — without a loud or high-maintenance routine.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Much of our growth has been through referrals: clients who wanted honest suitability conversations,
            healed-looking results, and a professional, relaxed environment.
          </p>
          <p className="text-lg text-gray-700">
            If you are researching{" "}
            <Link href="/powder-brows-telford" className="font-medium text-stone-900 underline underline-offset-4 hover:text-stone-950">
              powder brows in Telford
            </Link>
            , you can read more there — or book a consultation and we can talk through what suits your skin and lifestyle.
          </p>
        </div>
      </div>

      {/* Training & standards — factual, non-template */}
      <div className="mb-16">
        <h2 className="mb-6 text-center font-heading text-3xl font-bold">Training and professional standards</h2>
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-gray-700">
          <p>
            PMU and lash work demand steady hygiene, colour theory, and respect for how tissue heals. Elen keeps insurance
            and training documentation available for professional contexts when required.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-amber-700" aria-hidden />
              <span>Ongoing education in brow techniques, pigment safety, and lash application — not a one-off course.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-amber-700" aria-hidden />
              <span>Consultation-first booking: suitability and expectations before treatment.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-amber-700" aria-hidden />
              <span>Clean working practices and disposable tools where appropriate — ask if you would like detail on the day.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="mb-6 text-center font-heading text-3xl font-bold">Our values</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[
            {
              title: "Honesty",
              description:
                "Straightforward guidance on what suits your skin, lifestyle, and existing work — including when a treatment is not the best fit.",
            },
            {
              title: "Craft",
              description:
                "Measured mapping and steady technique so results read refined in ordinary light, not only on camera.",
            },
            {
              title: "Comfort",
              description:
                "Unhurried appointments, space to ask questions, and aftercare you can follow without guesswork.",
            },
            {
              title: "Continuity",
              description:
                "Staying current with safe practice and styles that serve real clients, not trends that age poorly.",
            },
          ].map((value, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="mr-3 mt-0.5 h-6 w-6 shrink-0 text-amber-600" aria-hidden />
              <div>
                <h3 className="font-medium text-lg">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Studio experience — text only, no placeholder imagery */}
      <div className="mb-16">
        <h2 className="mb-6 text-center font-heading text-3xl font-bold">The studio experience</h2>
        <div className="mx-auto max-w-3xl rounded-xl border border-stone-100 bg-white p-8 shadow-sm">
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Appointments run from House Of Beauty on Wellington Road in Donnington — a professional treatment space with
            privacy for PMU and lash services. You will have time to settle, ask questions, and leave with written
            aftercare.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Prefer to see the space before you book? Message via{" "}
            <Link href="/contact" className="font-medium text-stone-900 underline underline-offset-4 hover:text-stone-950">
              contact
            </Link>{" "}
            or WhatsApp and we can advise what to expect on your first visit.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl bg-[#F8F5F2] p-8 text-center">
        <h2 className="mb-4 font-heading text-2xl font-bold">Ready to explore your options?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-700">
          Book a free consultation to discuss powder brows, PMU, or lashes — at your pace, with no pressure to decide on
          the spot.
        </p>
        <BooksyBookButton size="lg" className="bg-[#E0D4C8] px-8 text-gray-800 hover:bg-[#D0C4B8]">
          Book Free Consultation
        </BooksyBookButton>
      </div>
    </div>
  )
}
