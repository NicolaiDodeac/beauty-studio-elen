/**
 * Blog card resolution — `image` on each card comes from SEO article `meta.image` or legacy `post.image`
 * (often placeholder until assets ship). Replacement briefs: article files + `docs/media-replacement-checklist.md`.
 */
import { seoArticlesBySlug, seoArticleSlugs } from "@/lib/blog/articles/registry"
import { legacyBlogPosts } from "@/lib/blog/legacy-posts"
import type { BlogPostCard, LegacyBlogPost, SeoArticleBundle } from "@/lib/blog/types"

/** Display labels are imperfect for legacy posts — stable ISO used only for sorting SEO guides */
function legacySortIso(post: LegacyBlogPost): string {
  const map: Record<string, string> = {
    "benefits-of-permanent-makeup": "2023-04-15",
    "care-for-eyelash-extensions": "2023-03-22",
    "skincare-routine-glowing-skin": "2023-02-10",
    "choosing-right-brow-shape": "2023-01-05",
    "classic-vs-volume-lashes": "2022-12-12",
    "preparing-for-permanent-makeup": "2022-11-18",
  }
  return map[post.slug] ?? "2020-01-01"
}

export function getLegacyPostBySlug(slug: string): LegacyBlogPost | undefined {
  return legacyBlogPosts.find((p) => p.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  const legacy = legacyBlogPosts.map((p) => p.slug)
  return [...new Set([...legacy, ...seoArticleSlugs])]
}

export function getAllBlogPostCards(): BlogPostCard[] {
  const legacyCards: BlogPostCard[] = legacyBlogPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    dateLabel: p.date,
    sortIso: legacySortIso(p),
    image: p.image,
    category: p.category,
    kind: "legacy",
  }))

  const seoCards: BlogPostCard[] = seoArticleSlugs.map((slug) => {
    const a = seoArticlesBySlug[slug]!
    return {
      slug: a.meta.slug,
      title: a.meta.title,
      excerpt: a.meta.excerpt,
      dateLabel: formatDisplayDate(a.meta.publishedIso),
      sortIso: a.meta.publishedIso,
      image: a.meta.image,
      category: a.meta.category,
      kind: "seo",
    }
  })

  return [...legacyCards, ...seoCards].sort((a, b) => (a.sortIso < b.sortIso ? 1 : -1))
}

function formatDisplayDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export type ResolvedPost =
  | { kind: "seo"; article: SeoArticleBundle }
  | { kind: "legacy"; post: LegacyBlogPost }

export function resolveBlogPost(slug: string): ResolvedPost | null {
  const seo = seoArticlesBySlug[slug]
  if (seo) return { kind: "seo", article: seo }
  const legacy = getLegacyPostBySlug(slug)
  if (legacy) return { kind: "legacy", post: legacy }
  return null
}

export function getRelatedCardsForSeoArticle(article: SeoArticleBundle, limit = 3): BlogPostCard[] {
  const all = getAllBlogPostCards()
  const bySlug = new Map(all.map((c) => [c.slug, c]))

  const picked: BlogPostCard[] = []
  for (const s of article.relatedSlugs) {
    const card = bySlug.get(s)
    if (card) picked.push(card)
    if (picked.length >= limit) break
  }

  if (picked.length >= limit) return picked.slice(0, limit)

  for (const c of all) {
    if (c.slug === article.meta.slug) continue
    if (picked.some((p) => p.slug === c.slug)) continue
    if (c.category === article.meta.category || c.kind === "seo") {
      picked.push(c)
    }
    if (picked.length >= limit) break
  }

  return picked.slice(0, limit)
}
