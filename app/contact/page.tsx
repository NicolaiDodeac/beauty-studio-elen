import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import BusinessHours from "@/components/contact/business-hours"
import LocationMap from "@/components/contact/location-map"
import { Button } from "@/components/ui/button"
import { SITE_WHATSAPP_DEFAULT_MESSAGE, siteWhatsAppUrl } from "@/lib/site-contact"

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
          Have questions or ready to book?{" "}
          <span className="font-medium text-gray-800">Message us on WhatsApp</span> for the fastest reply, or use the
          form if you prefer email.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white shadow-md"
          >
            <Link
              href={siteWhatsAppUrl(SITE_WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open WhatsApp
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 font-heading mb-4">Send a message</h2>
          <p className="text-sm text-gray-600 mb-4">
            Not on WhatsApp? Leave a note here and we will get back to you by email.
          </p>
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
