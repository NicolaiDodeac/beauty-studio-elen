import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-[#F8F5F2] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6 font-heading">
          Ready to Transform Your Look?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Book your appointment today and experience the difference with our premium beauty services.
        </p>
        <Button asChild size="lg" className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800 px-8 py-6 text-lg">
          <Link href="/booking">Book Your Appointment</Link>
        </Button>
      </div>
    </section>
  )
}
