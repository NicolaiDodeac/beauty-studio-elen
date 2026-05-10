import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MessageSquare, User } from "lucide-react"

import BlogCommentForm from "@/components/blog/blog-comment-form"
import RelatedPosts from "@/components/blog/related-posts"
import { Container } from "@/components/marketing/container"
import { legacyBlogPosts } from "@/lib/blog/legacy-posts"
import type { BlogPostCard, LegacyBlogPost } from "@/lib/blog/types"

function legacyToCards(exclude: LegacyBlogPost): BlogPostCard[] {
  return legacyBlogPosts
    .filter((p) => p.id !== exclude.id && p.category === exclude.category)
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      dateLabel: p.date,
      sortIso: "2020-01-01",
      image: p.image,
      category: p.category,
      kind: "legacy" as const,
    }))
}

export function LegacyBlogPostView({ post }: { post: LegacyBlogPost }) {
  const related = legacyToCards(post)

  return (
    <article className="border-b border-stone-200/80 bg-luxury-ivory pb-16 pt-10">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 underline-offset-4 transition-colors hover:text-luxury-charcoal hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Journal
        </Link>

        <header className="mt-8 space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-500">{post.category}</p>
          <h1 className="font-heading text-3xl leading-[1.15] tracking-tight text-luxury-charcoal sm:text-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-500">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 shrink-0" aria-hidden />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0" aria-hidden />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <MessageSquare className="h-4 w-4 shrink-0" aria-hidden />
              {post.comments.length} comments
            </span>
          </div>
        </header>

        <div className="relative mt-10 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-stone-200/90 bg-luxury-champagne shadow-sm sm:aspect-[2/1]">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={`Cover image for article: ${post.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <div
          className="prose prose-stone mx-auto mt-12 max-w-2xl prose-headings:font-heading prose-headings:text-luxury-charcoal prose-p:leading-[1.75] prose-li:leading-relaxed prose-a:text-luxury-charcoal prose-a:underline-offset-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <p className="mx-auto mt-10 max-w-2xl border-t border-stone-200/80 pt-8 text-sm text-stone-500">
          Category: {post.category}
        </p>

        {post.comments.length > 0 ? (
          <section className="mx-auto mt-12 max-w-2xl">
            <h2 className="font-heading text-xl text-luxury-charcoal">Comments ({post.comments.length})</h2>
            <ul className="mt-6 space-y-4">
              {post.comments.map((comment) => (
                <li key={comment.id} className="rounded-xl border border-stone-200/90 bg-white px-5 py-4 shadow-sm">
                  <div className="flex flex-wrap justify-between gap-2">
                    <span className="font-medium text-luxury-charcoal">{comment.author}</span>
                    <time className="text-xs text-stone-500">{comment.date}</time>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-stone-700">{comment.content}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="mx-auto mt-12 max-w-2xl">
          <BlogCommentForm />
        </div>
      </Container>

      {related.length > 0 ? (
        <Container className="max-w-6xl pb-8 pt-6">
          <RelatedPosts posts={related} title="Related articles" />
        </Container>
      ) : null}
    </article>
  )
}
