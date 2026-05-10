import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { JournalCardVisual } from "@/components/marketing/branded-placeholder-media"
import type { BlogPostCard } from "@/lib/blog/types"
import { isPlaceholderMediaSrc } from "@/lib/marketing/placeholder-media"

type RelatedPostsProps = {
  posts: BlogPostCard[]
  title?: string
}

export default function RelatedPosts({ posts, title = "Related articles" }: RelatedPostsProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl tracking-tight text-luxury-charcoal">{title}</h2>
      <ul className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-7">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="flex flex-col overflow-hidden rounded-xl border border-stone-200/90 bg-white shadow-sm ring-1 ring-stone-900/[0.03] transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-luxury-champagne">
              {isPlaceholderMediaSrc(post.image) ? (
                <JournalCardVisual className="h-full min-h-[10rem]" />
              ) : (
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}
            </div>
            <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
              <p className="text-xs text-stone-500">{post.dateLabel}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-400">{post.category}</p>
              <h3 className="mt-3 font-heading text-lg leading-snug text-luxury-charcoal line-clamp-2">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 line-clamp-3">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-luxury-charcoal underline-offset-4 transition-colors hover:underline"
              >
                Read
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
