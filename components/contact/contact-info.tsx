import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_WHATSAPP_DEFAULT_MESSAGE,
  siteWhatsAppUrl,
} from "@/lib/site-contact"

export default function ContactInfo() {
  return (
    <Card className="border-0 shadow-md">
      <CardHeader className="bg-[#F8F5F2] border-b">
        <CardTitle className="text-xl font-heading">Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Address</h3>
              <p className="text-gray-600">House Of Beauty, Wellington Rd, Donnington</p>
              <p className="text-gray-600">Telford, TF2 8AH</p>
              <p className="text-gray-600">United Kingdom</p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-gray-600">
                <Link href={`tel:${SITE_PHONE_TEL.replace(/\s/g, "")}`} className="hover:text-amber-600">
                  {SITE_PHONE_DISPLAY}
                </Link>
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <MessageCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">WhatsApp</h3>
              <p className="text-gray-600">
                <Link
                  href={siteWhatsAppUrl(SITE_WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-green-700 hover:text-green-800 hover:underline"
                >
                  Chat on WhatsApp
                </Link>
              </p>
              <p className="text-sm text-gray-500 mt-1">Quickest way to reach us for bookings and questions.</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-600">
                <Link href="mailto:Lena.3art@gmail.com" className="hover:text-amber-600">
                Lena.3art@gmail.com
                </Link>
              </p>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-medium mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F8F5F2] hover:bg-[#E0D4C8] p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5 text-gray-700" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F8F5F2] hover:bg-[#E0D4C8] p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5 text-gray-700" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
