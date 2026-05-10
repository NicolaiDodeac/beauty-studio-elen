"use client"

import { BooksyBookButton } from "@/components/booking/booksy-book-button"

export type StickyMobileCTAProps = {
  label?: string
}

/** Bottom-fixed consultation CTA — mobile only; opens Booksy like other booking buttons. */
export function StickyMobileCTA({ label = "Book Consultation" }: StickyMobileCTAProps) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200/90 bg-luxury-ivory/95 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
      role="region"
      aria-label="Book consultation"
    >
      <BooksyBookButton variant="cta" size="lg" className="w-full">
        {label}
      </BooksyBookButton>
    </div>
  )
}
