"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingContactButtons() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="flex flex-col gap-2 mb-4 animate-fade-in">
          <Button asChild className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg" size="icon">
            <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M9 13.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z" />
              </svg>
              <span className="sr-only">WhatsApp</span>
            </Link>
          </Button>
          <Button asChild className="rounded-full bg-pink-500 hover:bg-pink-600 shadow-lg" size="icon">
            <Link href="https://instagram.com/elenmakeuptelford" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
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
        className={`rounded-full shadow-lg ${
          isOpen ? "bg-gray-600 hover:bg-gray-700" : "bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800"
        }`}
        size="icon"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        <span className="sr-only">{isOpen ? "Close chat options" : "Open chat options"}</span>
      </Button>
    </div>
  )
}
