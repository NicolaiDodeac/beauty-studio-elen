import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#F8F5F2] border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="https://instagram.com" className="text-gray-400 hover:text-amber-600">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="https://facebook.com" className="text-gray-400 hover:text-amber-600">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start">
            <div className="h-10 w-auto relative mr-4">
              <Image
                src="/placeholder.svg?height=40&width=150"
                alt="Elen.MakeUp.Telford Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} Elen.MakeUp.Telford. All rights reserved.
            </p>
          </div>
          <div className="mt-4 flex justify-center md:justify-start space-x-6">
            <Link href="/privacy-policy" className="text-xs leading-5 text-gray-500 hover:text-amber-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs leading-5 text-gray-500 hover:text-amber-600">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-xs leading-5 text-gray-500 hover:text-amber-600">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
