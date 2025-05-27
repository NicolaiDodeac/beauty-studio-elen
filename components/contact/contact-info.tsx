import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

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
                <Link href="tel:+447879781581" className="hover:text-amber-600">
                  +44 (0) 7879 781581
                </Link>
              </p>
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
