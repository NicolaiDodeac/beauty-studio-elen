import Script from "next/script"
import { BOOKSY_WIDGET_SCRIPT_URL } from "@/lib/booksy"

/** Loads Booksy’s widget once; pair with `BooksyBookButton` for CTAs. */
export function BooksyWidget() {
  return <Script src={BOOKSY_WIDGET_SCRIPT_URL} strategy="afterInteractive" />
}
