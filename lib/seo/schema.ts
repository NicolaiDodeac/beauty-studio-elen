import { getBooksyProfileUrl } from "@/lib/reviews/review-stats"
import { SITE_POSTAL_ADDRESS, SITE_PUBLIC_EMAIL } from "@/lib/site-contact"
import { BUSINESS_DISPLAY_NAME, LOCAL_AREA, absoluteUrl, getSiteUrl, siteConfig } from "@/lib/seo/site"

/** Minimal JSON-LD typing — schema.org allows many shapes; keep loose for generators. */
export type JsonLdThing = Record<string, unknown>

const CONTEXT = "https://schema.org" as const

export function beautySalonLocalBusinessSchema(): JsonLdThing {
  const url = getSiteUrl()
  const booksyUrl = getBooksyProfileUrl()
  return {
    "@context": CONTEXT,
    "@type": ["BeautySalon", "HealthAndBeautyBusiness"],
    "@id": `${url}/#business`,
    name: BUSINESS_DISPLAY_NAME,
    description:
      "Appointment-led beauty studio in Telford specialising in natural powder brows and semi-permanent makeup. Consultation-first booking for soft, elegant healed results.",
    url,
    image: absoluteUrl("/images/about/Elen.png"),
    telephone: siteConfig.phone,
    email: SITE_PUBLIC_EMAIL,
    sameAs: [siteConfig.instagramUrl, booksyUrl],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_POSTAL_ADDRESS.streetAddress,
      addressLocality: SITE_POSTAL_ADDRESS.addressLocality,
      postalCode: SITE_POSTAL_ADDRESS.postalCode,
      addressRegion: SITE_POSTAL_ADDRESS.addressRegion,
      addressCountry: SITE_POSTAL_ADDRESS.addressCountryCode,
    },
    areaServed: [
      { "@type": "City", name: LOCAL_AREA.city },
      { "@type": "AdministrativeArea", name: LOCAL_AREA.region },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Powder brow semi-permanent makeup",
          description: "Soft powder brow PMU tailored with brow mapping — natural healed finish.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Semi-permanent makeup consultation",
          description: "Free consultation to discuss suitability, shape, and treatment options.",
        },
      },
    ],
  }
}

export type FaqPair = { question: string; answer: string }

export function faqPageSchema(items: ReadonlyArray<FaqPair>): JsonLdThing {
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export type ServiceSchemaInput = {
  name: string
  description: string
  path: string
  serviceType?: string
}

export function serviceSchema(input: ServiceSchemaInput): JsonLdThing {
  const pageUrl = absoluteUrl(input.path)
  const businessId = `${getSiteUrl()}/#business`

  return {
    "@context": CONTEXT,
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? input.name,
    url: pageUrl,
    provider: { "@id": businessId },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${LOCAL_AREA.city}, ${LOCAL_AREA.region}`,
    },
  }
}

export type BreadcrumbItem = { name: string; path: string }

export function breadcrumbListSchema(items: readonly BreadcrumbItem[]): JsonLdThing {
  const base = getSiteUrl()
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  }
}

export type BlogPostingSchemaInput = {
  headline: string
  description: string
  /** Path only, e.g. `/blog/my-post` */
  path: string
  datePublished: string
  dateModified?: string
  /** Absolute or site-root path — absolute preferred */
  imageUrls?: readonly string[]
  authorName?: string
}

/** BlogPosting JSON-LD for editorial guides (paired with visible FAQ schema separately when needed). */
export function blogPostingSchema(input: BlogPostingSchemaInput): JsonLdThing {
  const pageUrl = absoluteUrl(input.path)
  const siteUrl = getSiteUrl()
  const logoUrl = absoluteUrl("/images/logo/logo.png")

  return {
    "@context": CONTEXT,
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Person",
      name: input.authorName ?? "Elen",
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_DISPLAY_NAME,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    image: input.imageUrls?.length ? input.imageUrls.map((u) => (u.startsWith("http") ? u : absoluteUrl(u))) : undefined,
  }
}
