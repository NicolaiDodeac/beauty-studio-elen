/**
 * Article route — hero imagery defined per article (`meta.image` / legacy `post.image`).
 * Replacement briefs: JSDoc on each article file + `docs/media-replacement-checklist.md`.
 */
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LegacyBlogPostView } from "@/components/blog/legacy-blog-post-view"
import { SeoArticleView } from "@/components/blog/seo-article-view"
import { JsonLd } from "@/components/seo/json-ld"
import { getAllBlogSlugs, resolveBlogPost } from "@/lib/blog/registry"
import { absoluteUrl } from "@/lib/seo/site"
import { buildPageMetadata } from "@/lib/seo/metadata"
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema } from "@/lib/seo/schema"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const resolved = resolveBlogPost(slug)
  if (!resolved) {
    return { title: "Not found", description: "This article could not be found." }
  }

  if (resolved.kind === "seo") {
    const { meta } = resolved.article
    return buildPageMetadata({
      title: meta.title,
      description: meta.description,
      path: `/blog/${meta.slug}`,
      ogImagePath: meta.image,
    })
  }

  const post = resolved.post
  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogImagePath: post.image.startsWith("/") ? post.image : undefined,
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const resolved = resolveBlogPost(slug)

  if (!resolved) {
    notFound()
  }

  if (resolved.kind === "seo") {
    const article = resolved.article
    const path = `/blog/${article.meta.slug}`
    const jsonLd = [
      blogPostingSchema({
        headline: article.meta.title,
        description: article.meta.description,
        path,
        datePublished: article.meta.publishedIso,
        dateModified: article.meta.modifiedIso ?? article.meta.publishedIso,
        imageUrls: [absoluteUrl(article.meta.image)],
        authorName: article.meta.author,
      }),
      faqPageSchema(article.faqs),
      breadcrumbListSchema([
        { name: "Home", path: "/" },
        { name: "Journal", path: "/blog" },
        { name: article.meta.title, path },
      ]),
    ]

    return (
      <>
        <SeoArticleView article={article} />
        <JsonLd data={jsonLd} />
      </>
    )
  }

  return <LegacyBlogPostView post={resolved.post} />
}
