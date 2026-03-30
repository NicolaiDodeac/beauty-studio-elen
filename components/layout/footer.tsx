import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import { SiteLogoMark } from "@/components/layout/site-logo-mark"
import { WhatsAppMark } from "@/components/ui-elements/whatsapp-mark"
import { SITE_LOGO_ALT, SITE_LOGO_FOOTER_PX } from "@/lib/site-logo"
import { SITE_WHATSAPP_DEFAULT_MESSAGE, siteWhatsAppUrl } from "@/lib/site-contact"

export default function Footer() {
  return (
    <footer className="bg-[#F8F5F2] border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href={siteWhatsAppUrl(SITE_WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#25D366]"
          >
            <span className="sr-only">WhatsApp</span>
            <WhatsAppMark className="h-6 w-6" />
          </Link>
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
            <SiteLogoMark
              boxClassName="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20"
              sizes={`(max-width: 640px) 56px, (max-width: 768px) 64px, ${SITE_LOGO_FOOTER_PX}px`}
              alt={`${SITE_LOGO_ALT} logo`}
              className="mr-4"
            />
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
