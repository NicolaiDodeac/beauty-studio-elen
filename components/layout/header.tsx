"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

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
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Elen.MakeUp.Telford</span>
            <div className="h-12 w-auto relative">
              <Image
                src="/placeholder.svg?height=48&width=180"
                alt="Elen.MakeUp.Telford Logo"
                width={180}
                height={48}
                className="object-contain"
              />
            </div>
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
          <Button asChild className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
            <Link href="/booking">Book Appointment</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 flex">
            <div className="w-full">
              <div className="flex items-center justify-between p-6">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Elen.MakeUp.Telford</span>
                  <div className="h-12 w-auto relative">
                    <Image
                      src="/placeholder.svg?height=48&width=180"
                      alt="Elen.MakeUp.Telford Logo"
                      width={180}
                      height={48}
                      className="object-contain"
                    />
                  </div>
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
                    <Button asChild className="w-full bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
                      <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                        Book Appointment
                      </Link>
                    </Button>
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
