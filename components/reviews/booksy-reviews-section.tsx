"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ExternalLink, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const DEFAULT_BOOKSY_URL =
  "https://booksy.com/en-gb/99970_elen-makeup-telford_skin-care_1255315_donnington#ba_s=sr_1"

type Props = {
  procedureName: string
  heading?: string
  description?: string
}

export default function BooksyReviewsSection({
  procedureName,
  heading = "Booksy Reviews",
  description,
}: Props) {
  const [showEmbed, setShowEmbed] = useState(false)

  const booksyUrl = (process.env.NEXT_PUBLIC_BOOKSY_URL || DEFAULT_BOOKSY_URL).trim()
  const iframeUrl = useMemo(() => {
    const clean = booksyUrl.replace(/#.*$/, "")
    return `${clean}#reviews`
  }, [booksyUrl])

  return (
    <section className="my-16">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 font-heading">{heading}</h2>
          <p className="text-gray-700">
            {description ||
              `These are real reviews from Booksy (all services). Booksy does not provide an official per-procedure review feed, so we link to the full page for ${procedureName}.`}
          </p>
        </div>

        <Link
          href={booksyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-input bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
        >
          <ExternalLink className="h-4 w-4" />
          View all on Booksy
        </Link>
      </div>

      <div className="mt-6 rounded-lg border bg-white p-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-gray-900">
          <div className="inline-flex items-center gap-2">
            <Star className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium">5.0</span>
            <span className="text-sm text-gray-500">(111 reviews)</span>
          </div>
          <span className="text-xs text-gray-400">Source: Booksy</span>
        </div>
      </div>

      <div className="mt-6 rounded-lg border bg-white">
        <div className="border-b p-4">
          <h3 className="text-sm font-semibold text-gray-900">Live embed</h3>
          <p className="mt-1 text-sm text-gray-600">
            Booksy may block embedding for security reasons. If the embed does not load, use the Booksy link.
          </p>
        </div>

        <div className="p-4">
          {!showEmbed ? (
            <div className="rounded-md bg-gray-50 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-700">
                  Click to try loading the Booksy embed. If it appears blank or shows a broken icon, Booksy is blocking
                  embedding in this browser.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setShowEmbed(true)}>
                    Load embed
                  </Button>
                  <Link
                    href={booksyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-input bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open Booksy
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  If this embed doesn’t load, use{" "}
                  <Link href={booksyUrl} target="_blank" rel="noreferrer" className="underline">
                    Booksy
                  </Link>
                  .
                </p>
                <Button variant="outline" onClick={() => setShowEmbed(false)}>
                  Hide embed
                </Button>
              </div>
              <iframe
                title="Booksy reviews"
                src={iframeUrl}
                className="h-[70vh] w-full rounded-md"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

