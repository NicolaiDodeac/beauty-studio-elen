"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"
import { BOOKSY_WIDGET_SCRIPT_URL } from "@/lib/booksy"
import { POWDER_BROWS_PATH } from "@/lib/marketing/powder-brows-consultation"

/** Loads Booksy’s widget once; pair with `BooksyBookButton` for CTAs. */
export function BooksyWidget() {
  if (usePathname() === POWDER_BROWS_PATH) return null

  return <Script src={BOOKSY_WIDGET_SCRIPT_URL} strategy="afterInteractive" />
}
