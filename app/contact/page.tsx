import type { Metadata } from "next"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import BusinessHours from "@/components/contact/business-hours"
import LocationMap from "@/components/contact/location-map"

export const metadata: Metadata = {
  title: "Contact Us | Elen.MakeUp.Telford",
  description:
    "Get in touch with Elen.MakeUp.Telford for appointments, inquiries, or questions about our beauty services.",
  keywords: "contact, beauty studio, Elen.MakeUp.Telford, appointment, inquiry",
}

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6 font-heading">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions or ready to book an appointment? Get in touch with us using the form below or through our
          contact information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <ContactInfo />
          <BusinessHours />
        </div>
      </div>

      <LocationMap />
    </div>
  )
}
