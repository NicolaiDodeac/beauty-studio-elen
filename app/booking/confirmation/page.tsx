"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// export const metadata = {
//   title: "Booking Confirmation | Elen.MakeUp.Telford",
//   description: "Your appointment has been confirmed. Thank you for booking with Elen.MakeUp.Telford.",
// }
export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  if (!searchParams) {
    return <p>Loading...</p>
  }

  const service = searchParams.get("service") || "Selected service"
  const date = searchParams.get("date")
    ? new Date(searchParams.get("date")!).toLocaleDateString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Selected date"
  const time = searchParams.time || "Selected time"
  const payment = searchParams.payment || "card"

  // Map payment method to display name
  const paymentMethodDisplay =
    {
      card: "Credit/Debit Card",
      "apple-pay": "Apple Pay",
      klarna: "Klarna",
      paypal: "PayPal",
    }[payment as string] || "Credit/Debit Card"

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <div className="mb-8 flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4 font-heading">
        Booking Confirmed!
      </h1>

      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Thank you for booking with Elen.MakeUp.Telford. We've sent a confirmation email with all the details of your
        appointment.
      </p>

      <div className="bg-[#F8F5F2] p-6 rounded-lg mb-8 max-w-md mx-auto">
        <h2 className="font-medium text-gray-900 mb-4 font-heading">Appointment Details</h2>
        <div className="text-left space-y-2">
          <p className="text-gray-600">
            <strong>Service:</strong> {service}
          </p>
          <p className="text-gray-600">
            <strong>Date:</strong> {date}
          </p>
          <p className="text-gray-600">
            <strong>Time:</strong> {time}
          </p>
          <p className="text-gray-600">
            <strong>Payment Method:</strong> {paymentMethodDisplay}
          </p>
          <p className="text-gray-600">
            <strong>Deposit Paid:</strong> £50.00
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-gray-600">Need to make changes to your appointment?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
