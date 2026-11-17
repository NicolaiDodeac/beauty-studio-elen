import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { BooksyWidget } from "@/components/booking/booksy-widget"
import FloatingContactButtons from "@/components/ui-elements/floating-contact-buttons"
import { ThemeProvider } from "@/components/theme-provider"
import { buildRootMetadataPartial } from "@/lib/seo/metadata"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = buildRootMetadataPartial()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
        <BooksyWidget />
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main className="min-h-screen">{children}</main>
          <FloatingContactButtons />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
