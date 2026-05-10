import type { Metadata } from "next"

import {
  BUSINESS_DISPLAY_NAME,
  SITE_NAME,
  SITE_NAME_FULL,
  SITE_TAGLINE,
  defaultOgImageUrl,
  getSiteUrl,
} from "@/lib/seo/site"

export type PageMetaInput = {
  /** Page title — when not absolute, root `title.template` is applied in layout. */
  title: string | { absolute: string }
  description: string
  /** Path only, e.g. `/powder-brows-telford` */
  path: string
  /** Set when the page has a strong hero image; otherwise default OG is used. */
  ogImagePath?: string
  noIndex?: boolean
}

function titleString(input: PageMetaInput["title"]): string {
  return typeof input === "string" ? input : input.absolute
}

/**
 * Per-route metadata: canonical, Open Graph, Twitter, optional robots.
 */
export function buildPageMetadata(input: PageMetaInput): Metadata {
  const base = getSiteUrl()
  const canonicalPath = input.path.startsWith("/") ? input.path : `/${input.path}`
  const canonicalUrl = `${base}${canonicalPath === "//" ? "/" : canonicalPath}`
  const titleStr = titleString(input.title)
  const ogImage = input.ogImagePath ? `${base}${input.ogImagePath}` : defaultOgImageUrl()

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: canonicalUrl },
    robots: input.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: canonicalUrl,
      siteName: BUSINESS_DISPLAY_NAME,
      title: titleStr,
      description: input.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${BUSINESS_DISPLAY_NAME} — natural powder brows & PMU, Telford`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleStr,
      description: input.description,
      images: [ogImage],
    },
  }
}

/** Root layout defaults — merged with `metadata` export in app/layout.tsx */
export function buildRootMetadataPartial(): Metadata {
  const url = getSiteUrl()
  const og = defaultOgImageUrl()

  return {
    metadataBase: new URL(url),
    title: {
      default: `${SITE_NAME_FULL} | Natural luxury powder brows & PMU`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_TAGLINE,
    applicationName: SITE_NAME,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: BUSINESS_DISPLAY_NAME,
      title: `${SITE_NAME_FULL} | Powder brows & semi-permanent makeup`,
      description: SITE_TAGLINE,
      images: [{ url: og, width: 1200, height: 630, alt: `${BUSINESS_DISPLAY_NAME}, Telford & Shropshire` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME_FULL} | Powder brows & PMU`,
      description: SITE_TAGLINE,
      images: [og],
    },
    formatDetection: { telephone: true, email: false, address: true },
    authors: [{ name: BUSINESS_DISPLAY_NAME, url }],
    creator: BUSINESS_DISPLAY_NAME,
    icons: {
      icon: [{ url: "/images/logo/logo.png", type: "image/png" }],
      apple: [{ url: "/images/logo/logo.png", sizes: "180x180" }],
    },
    category: "beauty",
  }
}
