/** Digits only, country code included (no +), for https://wa.me/<this> */
export const SITE_WHATSAPP_NUMBER = "447879781581"

export const SITE_PHONE_DISPLAY = "+44 (0) 7879 781581"
export const SITE_PHONE_TEL = "+447879781581"

/** Public enquiry email — visible on contact page and schema */
export const SITE_PUBLIC_EMAIL = "elen.makeup.telford@gmail.com" as const

/**
 * Trading / public-facing business name (matches footer & schema).
 * Keep aligned with `BUSINESS_DISPLAY_NAME` in lib/seo/site.ts.
 */
export const SITE_BUSINESS_DISPLAY_NAME = "ELEN Makeup Telford" as const

/** Structured postal address — must stay aligned with contact page & Google Business where applicable */
export const SITE_POSTAL_ADDRESS = {
  streetAddress: "House Of Beauty, Wellington Rd, Donnington",
  addressLocality: "Telford",
  postalCode: "TF2 8AH",
  addressRegion: "Shropshire",
  addressCountry: "United Kingdom",
  addressCountryCode: "GB" as const,
} as const

/** Lines as displayed on contact cards */
export const SITE_ADDRESS_LINES = [
  SITE_POSTAL_ADDRESS.streetAddress,
  `${SITE_POSTAL_ADDRESS.addressLocality}, ${SITE_POSTAL_ADDRESS.postalCode}`,
  SITE_POSTAL_ADDRESS.addressCountry,
] as const

/** Default wa.me text for CTAs (contact page, footer, etc.). */
export const SITE_WHATSAPP_DEFAULT_MESSAGE =
  "Hi! I'd like to get in touch about an appointment."

export function siteWhatsAppUrl(prefilledMessage?: string) {
  const base = `https://wa.me/${SITE_WHATSAPP_NUMBER}`
  const q = prefilledMessage?.trim()
  if (!q) return base
  return `${base}?text=${encodeURIComponent(q)}`
}

export function siteMailtoHref(subject?: string): string {
  const base = `mailto:${SITE_PUBLIC_EMAIL}`
  const q = subject?.trim()
  if (!q) return base
  return `${base}?subject=${encodeURIComponent(q)}`
}
