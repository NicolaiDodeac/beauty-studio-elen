import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import { Container } from "@/components/marketing/container"
import { Section } from "@/components/marketing/section"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"
import { getAllBlogPostCards } from "@/lib/blog/registry"
import { buildPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Journal — powder brows, PMU & brow care",
  description:
    "Calm, practical reads on powder brows, semi-permanent makeup healing, and natural-looking brows — written for clients in Telford & Shropshire.",
  path: "/blog",
})

export default function BlogPage() {
  const posts = getAllBlogPostCards()

  return (
    <div className="pb-20 pt-12 sm:pb-24 sm:pt-16">
      <Container className="max-w-5xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-500">Journal</p>
          <h1 className="mt-4 font-heading text-4xl tracking-tight text-luxury-charcoal sm:text-5xl sm:leading-[1.08]">
            Powder brows &amp; PMU notes
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Educational articles — no countdown headlines, just what helps you decide calmly. Written at ELEN Makeup Telford for
            anyone researching natural powder brows and semi-permanent makeup locally.
          </p>
        </header>

        <ul className="mt-14 grid list-none gap-10 sm:grid-cols-2 lg:gap-12">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm ring-1 ring-stone-900/[0.03] transition-shadow hover:shadow-md">
                <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] bg-luxury-champagne">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover transition-opacity group-hover:opacity-[0.97]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </Link>
                <div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500">
                    <time dateTime={post.sortIso}>{post.dateLabel}</time>
                    <span className="text-stone-300" aria-hidden>
                      ·
                    </span>
                    <span className="font-medium uppercase tracking-wide text-stone-400">{post.category}</span>
                  </div>
                  <h2 className="mt-4 font-heading text-xl leading-snug text-luxury-charcoal">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="underline-offset-4 transition-colors hover:text-stone-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400/50 focus-visible:ring-offset-2"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 line-clamp-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex text-sm font-medium text-luxury-charcoal underline-offset-4 hover:underline"
                  >
                    Continue reading
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>

      <Section tone="champagne" spacing="compact" className="mt-20 border-t border-stone-200/80">
        <Container className="max-w-2xl text-center">
          <p className="font-heading text-xl text-luxury-charcoal">Questions belong in consultation</p>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            Prefer to talk things through face to face? Book a visit in Telford — we&apos;ll map suitability and healing for your
            skin.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BooksyBookButton size="lg" variant="cta" className="min-w-[14rem] px-8">
              Book consultation
            </BooksyBookButton>
            <Link
              href="/contact"
              className="text-sm font-medium text-luxury-charcoal underline-offset-4 decoration-stone-300 underline hover:decoration-luxury-charcoal"
            >
              Contact the studio
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  )
}
