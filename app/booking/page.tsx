import type { Metadata } from "next"
import BookingCalendar from "@/components/booking/booking-calendar"

export const metadata: Metadata = {
  title: "Book an Appointment | Elen.MakeUp.Telford",
  description:
    "Schedule your beauty service appointment with Elen.MakeUp.Telford. Choose your service, date, and time.",
}

export default function BookingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
          Book an Appointment
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Schedule your beauty service appointment. Select your preferred service, date, and time below.
        </p>
      </div>

      <BookingCalendar />
    </div>
  )
}
