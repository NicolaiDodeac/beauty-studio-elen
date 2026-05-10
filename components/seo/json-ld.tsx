import type { JsonLdThing } from "@/lib/seo/schema"

type JsonLdProps = {
  data: JsonLdThing | readonly JsonLdThing[]
}

/** Server-safe JSON-LD script for structured data (Google rich results). */
export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data]
  return (
    <>
      {payload.map((obj, i) => (
        <script
          // eslint-disable-next-line react/no-danger -- JSON-LD requires raw JSON string
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </>
  )
}
