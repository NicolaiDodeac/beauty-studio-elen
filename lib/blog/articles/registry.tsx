import type { SeoArticleBundle } from "@/lib/blog/types"

import { articleBestPmuForMatureSkin } from "@/lib/blog/articles/best-pmu-for-mature-skin"
import { articleDoPowderBrowsLookNatural } from "@/lib/blog/articles/do-powder-brows-look-natural"
import { articleHowLongPowderBrowsLast } from "@/lib/blog/articles/how-long-do-powder-brows-last"
import { articlePowderBrowsVsMicroblading } from "@/lib/blog/articles/powder-brows-vs-microblading"
import { articlePowderBrowHealingDayByDay } from "@/lib/blog/articles/powder-brow-healing-day-by-day"

const SEO_ARTICLE_LIST = [
  articlePowderBrowsVsMicroblading,
  articleHowLongPowderBrowsLast,
  articleDoPowderBrowsLookNatural,
  articlePowderBrowHealingDayByDay,
  articleBestPmuForMatureSkin,
] as const satisfies readonly SeoArticleBundle[]

export const seoArticlesBySlug: Readonly<Record<string, SeoArticleBundle>> = Object.fromEntries(
  SEO_ARTICLE_LIST.map((a) => [a.meta.slug, a]),
)

export const seoArticleSlugs = SEO_ARTICLE_LIST.map((a) => a.meta.slug)

export function getSeoArticle(slug: string): SeoArticleBundle | undefined {
  return seoArticlesBySlug[slug]
}
