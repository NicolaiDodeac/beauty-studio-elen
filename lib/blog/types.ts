import type { ReactNode } from "react"

import type { FaqPair } from "@/lib/seo/schema"

export type SeoArticleMeta = {
  slug: string
  title: string
  /** Meta description + OG */
  description: string
  /** Card / preview line */
  excerpt: string
  /** ISO 8601 date */
  publishedIso: string
  modifiedIso?: string
  category: string
  author: string
  image: string
}

export type SeoContentBlock =
  | { type: "p"; children: ReactNode }
  | { type: "ul"; items: readonly ReactNode[] }

export type SeoArticleSection = {
  id: string
  title?: string
  blocks: readonly SeoContentBlock[]
}

export type SeoArticleBundle = {
  meta: SeoArticleMeta
  introBlocks: readonly SeoContentBlock[]
  sections: readonly SeoArticleSection[]
  faqs: readonly FaqPair[]
  /** Other `/blog/[slug]` posts for related cluster */
  relatedSlugs: readonly string[]
}

export type LegacyBlogComment = {
  id: number
  author: string
  content: string
  date: string
}

export type LegacyBlogPost = {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  slug: string
  category: string
  author: string
  comments: LegacyBlogComment[]
}

export type BlogPostCard = {
  slug: string
  title: string
  excerpt: string
  /** Display string for cards */
  dateLabel: string
  /** For sorting */
  sortIso: string
  image: string
  category: string
  kind: "legacy" | "seo"
}
