import { SITE_PHONE_TEL, SITE_PUBLIC_EMAIL } from "@/lib/site-contact"
import { SITE_INSTAGRAM_URL } from "@/lib/site-social"

/**
 * Production domain target — override with NEXT_PUBLIC_SITE_URL in deploy env when final.
 * TODO: Lock to live canonical domain after DNS/launch.
 */
export const SITE_DOMAIN_PLACEHOLDER = "https://www.elenmakeup.co.uk" as const

export const SITE_NAME = "ELEN Makeup" as const
export const SITE_NAME_FULL = "ELEN Makeup Telford" as const
export const BUSINESS_DISPLAY_NAME = "ELEN Makeup Telford" as const

/** Default share / OG image — TODO: add a 1200×630 branded asset in /public and update path. */
export const DEFAULT_OG_IMAGE_PATH = "/images/hero/image.png" as const

export const SITE_TAGLINE =
  "Natural luxury powder brows and semi-permanent makeup in Telford & Shropshire — consultation-first, soft healed results."

export const LOCAL_AREA = {
  city: "Telford",
  region: "Shropshire",
  country: "United Kingdom",
  countryCode: "GB" as const,
} as const

/** Public studio email — single source: lib/site-contact.ts */
export const SITE_EMAIL_PUBLIC = SITE_PUBLIC_EMAIL

/**
 * Resolves the canonical site origin. Uses NEXT_PUBLIC_SITE_URL when set (no trailing slash).
 */
export function getSiteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (env) return env.replace(/\/$/, "")
  return SITE_DOMAIN_PLACEHOLDER
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl()
  if (!path || path === "/") return base
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}

export function defaultOgImageUrl(): string {
  return absoluteUrl(DEFAULT_OG_IMAGE_PATH)
}

export const siteConfig = {
  name: SITE_NAME,
  nameFull: SITE_NAME_FULL,
  businessName: BUSINESS_DISPLAY_NAME,
  tagline: SITE_TAGLINE,
  domainPlaceholder: SITE_DOMAIN_PLACEHOLDER,
  instagramUrl: SITE_INSTAGRAM_URL,
  phone: SITE_PHONE_TEL,
  phoneDisplay: "+44 (0) 7879 781581",
  emailPublic: SITE_EMAIL_PUBLIC,
  local: LOCAL_AREA,
  ogImagePath: DEFAULT_OG_IMAGE_PATH,
} as const
