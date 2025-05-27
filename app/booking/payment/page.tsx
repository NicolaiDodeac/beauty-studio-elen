import PaymentForm from "@/components/booking/payment-form"

export const metadata = {
  title: "Payment | Glow Beauty Studio",
  description: "Complete your booking by paying a deposit for your beauty service appointment.",
}

export default function PaymentPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Complete Your Booking</h1>
        <p className="mt-4 text-lg text-gray-600">Please pay a deposit to secure your appointment.</p>
      </div>

      <PaymentForm />
    </div>
  )
}
