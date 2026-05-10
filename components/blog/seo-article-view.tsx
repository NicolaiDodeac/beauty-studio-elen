import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { ArticleBlocks } from "@/components/blog/article-blocks"
import { ArticleReadingProgress } from "@/components/blog/article-reading-progress"
import RelatedPosts from "@/components/blog/related-posts"
import { BooksyBookButton } from "@/components/booking/booksy-book-button"
import { Container } from "@/components/marketing/container"
import { getRelatedCardsForSeoArticle } from "@/lib/blog/registry"
import type { SeoArticleBundle } from "@/lib/blog/types"
import { cn } from "@/lib/utils"

function formatHeroDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function SeoArticleView({ article }: { article: SeoArticleBundle }) {
  const { meta, introBlocks, sections, faqs } = article
  const tocEntries = sections.filter((s) => s.title)
  const showToc = tocEntries.length >= 3
  const related = getRelatedCardsForSeoArticle(article, 3)

  return (
    <>
      <ArticleReadingProgress />
      <article className="border-b border-stone-200/80 bg-luxury-ivory pb-16 pt-10 sm:pb-20 sm:pt-12">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex text-sm font-medium text-stone-600 underline-offset-4 transition-colors hover:text-luxury-charcoal hover:underline"
          >
            ← Journal
          </Link>

          <header className="mt-8 space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-500">{meta.category}</p>
            <h1 className="font-heading text-3xl leading-[1.15] tracking-tight text-luxury-charcoal sm:text-4xl sm:leading-[1.12]">
              {meta.title}
            </h1>
            <p className="text-sm text-stone-500">
              <time dateTime={meta.publishedIso}>{formatHeroDate(meta.publishedIso)}</time>
              <span className="mx-2 text-stone-300" aria-hidden>
                ·
              </span>
              <span>{meta.author}</span>
            </p>
          </header>

          <div className="relative mt-10 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-stone-200/90 bg-luxury-champagne shadow-sm sm:aspect-[2/1]">
            <Image
              src={meta.image}
              alt={`Illustration for: ${meta.title}`}
              fill
              className="object-cover opacity-95"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="mx-auto mt-12 max-w-2xl">
            <ArticleBlocks blocks={introBlocks} className="space-y-6" />

            {showToc ? (
              <nav
                aria-label="On this page"
                className="mt-12 rounded-xl border border-stone-200/90 bg-white/80 px-5 py-5 shadow-sm"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">On this page</p>
                <ol className="mt-4 space-y-2.5 text-sm">
                  {tocEntries.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-luxury-charcoal underline-offset-4 transition-colors hover:text-stone-700 hover:underline"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            <div className="mt-14 space-y-14">
              {sections.map((section, idx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={cn(
                    "scroll-mt-28",
                    idx > 0 && "border-t border-stone-200/70 pt-14",
                  )}
                >
                  {section.title ? (
                    <h2 className="font-heading text-2xl tracking-tight text-luxury-charcoal">{section.title}</h2>
                  ) : null}
                  <ArticleBlocks blocks={section.blocks} className={cn(section.title ? "mt-6" : "mt-0")} />
                </section>
              ))}
            </div>

            <div className="mt-16 border-t border-stone-200/80 pt-12">
              <h2 className="font-heading text-xl tracking-tight text-luxury-charcoal">Questions</h2>
              <div className="mt-6 divide-y divide-stone-200/90 rounded-xl border border-stone-200/90 bg-luxury-champagne/35 px-1">
                {faqs.map((item) => (
                  <details key={item.question} className="group px-4 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-medium text-luxury-charcoal transition-colors hover:text-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-luxury-ivory">
                      <span>{item.question}</span>
                      <ChevronDown
                        className="h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
                        aria-hidden
                      />
                    </summary>
                    <div className="pb-4 text-sm leading-relaxed text-stone-600">{item.answer}</div>
                  </details>
                ))}
              </div>
            </div>

            <aside className="mt-14 rounded-2xl border border-stone-200/85 bg-gradient-to-b from-white to-luxury-champagne/40 px-6 py-8 text-center shadow-sm sm:px-10">
              <p className="font-heading text-lg text-luxury-charcoal">Prefer a conversation?</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Local consultations for powder brows and semi-permanent makeup — Shropshire &amp; Telford.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BooksyBookButton size="lg" variant="cta" className="min-w-[12rem]">
                  Book consultation
                </BooksyBookButton>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-luxury-charcoal underline-offset-4 hover:underline"
                >
                  Contact studio
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </article>

      {related.length > 0 ? (
        <Container className="max-w-6xl pb-16 pt-4">
          <RelatedPosts posts={related} title="Related articles" />
        </Container>
      ) : null}
    </>
  )
}
