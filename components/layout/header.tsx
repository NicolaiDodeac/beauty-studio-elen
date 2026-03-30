"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"
import { SiteLogoMark } from "@/components/layout/site-logo-mark"
import { SITE_LOGO_ALT, SITE_LOGO_HEADER_PX } from "@/lib/site-logo"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Semi-Permanent Makeup", href: "/semi-permanent-makeup" },
  { name: "Eyelash Extensions", href: "/eyelash-extensions" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">{SITE_LOGO_ALT}</span>
            <SiteLogoMark
              boxClassName="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
              sizes={`(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, ${SITE_LOGO_HEADER_PX}px`}
              alt=""
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <BooksyBookButton className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
            Book Appointment
          </BooksyBookButton>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 flex">
            <div className="w-full">
              <div className="flex items-center justify-between p-6">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                  <span className="sr-only">{SITE_LOGO_ALT}</span>
                  <SiteLogoMark
                    boxClassName="h-20 w-20 sm:h-24 sm:w-24"
                    sizes="(max-width: 640px) 80px, 96px"
                    alt=""
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6 px-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-md px-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-4">
                    <BooksyBookButton
                      className="w-full bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Book Appointment
                    </BooksyBookButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
