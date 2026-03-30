"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_WHATSAPP_DEFAULT_MESSAGE, siteWhatsAppUrl } from "@/lib/site-contact"
import { WhatsAppMark } from "@/components/ui-elements/whatsapp-mark"
import { cn } from "@/lib/utils"

const fabSecondary =
  "h-14 w-14 rounded-full shadow-lg [&_svg]:!h-8 [&_svg]:!w-8 shrink-0"

export default function FloatingContactButtons() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8">
      {isOpen && (
        <div className="flex flex-col gap-3 mb-5 animate-fade-in">
          <Button
            asChild
            className={cn(
              fabSecondary,
              "bg-[#25D366] hover:bg-[#20BA5A] text-white border-0"
            )}
            size="icon"
          >
            <Link href={siteWhatsAppUrl(SITE_WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer">
              <WhatsAppMark className="text-white" />
              <span className="sr-only">WhatsApp</span>
            </Link>
          </Button>
          <Button asChild className={cn(fabSecondary, "bg-pink-500 hover:bg-pink-600 text-white")} size="icon">
            <Link href="https://instagram.com/elenmakeuptelford" target="_blank" rel="noopener noreferrer">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
        </div>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={cn(
          "h-16 w-16 rounded-full shadow-lg [&_svg]:!h-8 [&_svg]:!w-8 shrink-0",
          isOpen ? "bg-gray-600 hover:bg-gray-700 text-white" : "bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800"
        )}
      >
        {isOpen ? <X /> : <MessageCircle />}
        <span className="sr-only">{isOpen ? "Close chat options" : "Open chat options"}</span>
      </Button>
    </div>
  )
}
