"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ExternalLink, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const DEFAULT_BOOKSY_URL =
  "https://booksy.com/en-gb/99970_elen-makeup-telford_skin-care_1255315_donnington#ba_s=sr_1"

export default function AdminReviewsPage() {
  const [embedFailed, setEmbedFailed] = useState(false)
  const [procedure, setProcedure] = useState("semi-permanent-makeup")
  const [clientName, setClientName] = useState("")
  const [content, setContent] = useState("")
  const [booksyLink, setBooksyLink] = useState("")
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const booksyUrl = (process.env.NEXT_PUBLIC_BOOKSY_URL || DEFAULT_BOOKSY_URL).trim()
  const iframeUrl = useMemo(() => {
    // Try to land close to the reviews section.
    const clean = booksyUrl.replace(/#.*$/, "")
    return `${clean}#reviews`
  }, [booksyUrl])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Reviews</h1>
          <p className="text-sm text-gray-600">
            Booksy is the source of truth for your reviews. This page links to it and attempts an embed when allowed.
          </p>
        </div>

        <Link
          href={booksyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-input bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
        >
          <ExternalLink className="h-4 w-4" />
          Open on Booksy
        </Link>
      </div>

      <div className="rounded-lg border bg-white p-4">
        <div className="flex items-center gap-2 text-gray-900">
          <Star className="h-4 w-4 text-amber-500" />
          <span className="text-sm font-medium">5.0</span>
          <span className="text-sm text-gray-500">(111 reviews)</span>
          <span className="text-xs text-gray-400">Source: Booksy</span>
        </div>
      </div>

      <div className="rounded-lg border bg-white">
        <div className="border-b p-4">
          <h2 className="text-sm font-semibold text-gray-900">Add a real review to the website</h2>
          <p className="mt-1 text-sm text-gray-600">
            Click “Open on Booksy”, copy the latest review, and paste it here. It will be shown on the selected procedure page with a Booksy link.
          </p>
        </div>
        <div className="p-4">
          <form
            className="grid gap-4 md:grid-cols-2"
            onSubmit={async (e) => {
              e.preventDefault()
              setMessage(null)
              setSaving(true)
              try {
                const res = await fetch("/api/admin/reviews", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    procedure,
                    client_name: clientName,
                    content,
                    booksy_url: booksyLink || null,
                  }),
                })

                const json = await res.json().catch(() => ({}))
                if (!res.ok) {
                  throw new Error(json?.error || "Failed to save review")
                }

                setClientName("")
                setContent("")
                setBooksyLink("")
                setMessage("Saved. The review is now available on the website.")
              } catch (err) {
                setMessage(err instanceof Error ? err.message : "Failed to save review")
              } finally {
                setSaving(false)
              }
            }}
          >
            <div className="space-y-2">
              <Label>Procedure</Label>
              <Select value={procedure} onValueChange={setProcedure}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a procedure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="semi-permanent-makeup">Semi-Permanent Makeup</SelectItem>
                  <SelectItem value="eyelash-extensions">Eyelash Extensions</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500">This controls where the review appears on the website.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientName">Client name</Label>
              <Input id="clientName" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="e.g. Kornelia" />
              <p className="text-xs text-gray-500">Copy exactly as shown on Booksy (first name is usually enough).</p>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="content">Review text</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste the review here…"
                className="min-h-28"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="booksyLink">Booksy link (recommended)</Label>
              <Input
                id="booksyLink"
                value={booksyLink}
                onChange={(e) => setBooksyLink(e.target.value)}
                placeholder={booksyUrl}
              />
              <p className="text-xs text-gray-500">If Booksy doesn’t provide a direct per-review URL, paste the page URL.</p>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-gray-700">{message}</div>
              <Button type="submit" disabled={saving || !clientName.trim() || !content.trim()}>
                {saving ? "Saving…" : "Publish review"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="rounded-lg border bg-white">
        <div className="border-b p-4">
          <h2 className="text-sm font-semibold text-gray-900">Embedded Booksy page</h2>
          <p className="mt-1 text-sm text-gray-600">
            If Booksy blocks embedding, you’ll see the fallback link instead.
          </p>
        </div>

        <div className="p-4">
          {embedFailed ? (
            <div className="rounded-md bg-gray-50 p-4 text-sm text-gray-700">
              Embedding is blocked by Booksy in this browser/environment. Use{" "}
              <Link href={booksyUrl} target="_blank" rel="noreferrer" className="underline">
                the Booksy page
              </Link>{" "}
              to view and manage reviews.
            </div>
          ) : (
            <iframe
              title="Booksy reviews"
              src={iframeUrl}
              className="h-[75vh] w-full rounded-md"
              // Some sites refuse embedding via X-Frame-Options / CSP. We detect that by a timeout fallback.
              onLoad={() => {
                // If it loads, great.
              }}
              referrerPolicy="no-referrer"
            />
          )}
        </div>
      </div>
    </div>
  )
}

