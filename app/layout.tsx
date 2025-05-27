import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContactButtons from "@/components/ui-elements/floating-contact-buttons"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Elen.MakeUp.Telford | Professional Beauty Services",
  description:
    "Premium beauty services including semi-permanent makeup, eyelash extensions, and more. Book your appointment today.",
  keywords: "beauty studio, semi-permanent makeup, eyelash extensions, beauty services, Telford",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
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
