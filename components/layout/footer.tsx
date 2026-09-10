import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { SiteLogoMark } from "@/components/layout/site-logo-mark"
import { WhatsAppMark } from "@/components/ui-elements/whatsapp-mark"
import { SITE_LOGO_ALT, SITE_LOGO_FOOTER_PX } from "@/lib/site-logo"
import { SITE_WHATSAPP_DEFAULT_MESSAGE, siteWhatsAppUrl } from "@/lib/site-contact"
import { SITE_INSTAGRAM_URL } from "@/lib/site-social"
import { getBooksyProfileUrl } from "@/lib/reviews/review-stats"

const linkClass =
  "text-xs leading-5 text-gray-500 hover:text-amber-600 transition-colors inline-flex items-center gap-1"

const groupLabelClass =
  "text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400"

export default function Footer() {
  const booksyUrl = getBooksyProfileUrl()

  return (
    <footer className="border-t bg-[#F8F5F2]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-col items-center sm:flex-row sm:items-center md:justify-start">
              <SiteLogoMark
                boxClassName="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20"
                sizes={`(max-width: 640px) 56px, (max-width: 768px) 64px, ${SITE_LOGO_FOOTER_PX}px`}
                alt={`${SITE_LOGO_ALT} logo`}
                className="mr-0 sm:mr-4"
              />
              <p className="mt-4 max-w-xs text-center text-xs leading-5 text-gray-500 sm:mt-0 sm:text-left">
                &copy; {new Date().getFullYear()} ELEN Makeup Telford. All rights reserved.
              </p>
            </div>
            <Link
              href={siteWhatsAppUrl(SITE_WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-gray-400 transition-colors hover:text-[#25D366]"
              aria-label="WhatsApp"
            >
              <WhatsAppMark className="h-6 w-6" />
            </Link>
          </div>

          <nav
            aria-label="Footer"
            className="grid w-full max-w-xl grid-cols-2 gap-x-8 gap-y-10 sm:max-w-none sm:grid-cols-4 lg:max-w-3xl lg:gap-x-10"
          >
            <div>
              <p className={groupLabelClass}>Treatments</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/powder-brows-telford" className={linkClass}>
                    Powder Brows
                  </Link>
                </li>
                <li>
                  <Link href="/services" className={linkClass}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/semi-permanent-makeup" className={linkClass}>
                    Semi-Permanent Makeup
                  </Link>
                </li>
                <li>
                  <Link href="/eyelash-extensions" className={linkClass}>
                    Eyelash Extensions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className={groupLabelClass}>Learn</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/about" className={linkClass}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className={linkClass}>
                    Journal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className={groupLabelClass}>Contact</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/contact" className={linkClass}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href={SITE_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Instagram
                    <ExternalLink className="h-3 w-3 opacity-60" aria-hidden />
                  </Link>
                </li>
                <li>
                  <Link href={booksyUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Booksy
                    <ExternalLink className="h-3 w-3 opacity-60" aria-hidden />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className={groupLabelClass}>Legal</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/privacy-policy" className={linkClass}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className={linkClass}>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}
