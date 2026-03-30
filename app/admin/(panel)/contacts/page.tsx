import { getContactMessages } from "@/lib/contact-messages"
import { Mail } from "lucide-react"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Contact messages | Elen.MakeUp.Telford",
  description: "Inbound messages from the website contact form",
}

function formatWhen(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

export default async function AdminContactsPage() {
  const messages = await getContactMessages()
  const serviceConfigured = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() && process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Contact messages</h1>
          <p className="text-sm text-gray-600">
            Submissions from the public contact form. Only staff can view them; visitors cannot read this data
            from the browser.
          </p>
        </div>
      </div>

      {!serviceConfigured && (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Set <code className="rounded bg-amber-100 px-1 py-0.5">SUPABASE_SERVICE_ROLE_KEY</code> in the server
          environment so messages can load here.
        </div>
      )}

      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white py-16 text-center">
          <Mail className="mb-3 h-10 w-10 text-gray-400" />
          <p className="text-sm font-medium text-gray-900">No messages yet</p>
          <p className="mt-1 max-w-sm text-sm text-gray-600">
            When customers use the contact page, their messages will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-medium text-gray-700">Received</th>
                <th className="px-4 py-3 font-medium text-gray-700">From</th>
                <th className="px-4 py-3 font-medium text-gray-700">Subject</th>
                <th className="px-4 py-3 font-medium text-gray-700">Message</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {messages.map((row) => (
                <tr key={row.id} className="align-top hover:bg-gray-50/80">
                  <td className="whitespace-nowrap px-4 py-3 text-gray-600">{formatWhen(row.created_at)}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900">{row.name}</div>
                    <a href={`mailto:${encodeURIComponent(row.email)}`} className="text-pink-600 hover:underline">
                      {row.email}
                    </a>
                    {row.phone ? (
                      <div className="mt-0.5 text-gray-600">
                        <a href={`tel:${row.phone.replace(/\s/g, "")}`} className="hover:underline">
                          {row.phone}
                        </a>
                      </div>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-gray-800">{row.subject || "—"}</td>
                  <td className="max-w-md px-4 py-3 whitespace-pre-wrap text-gray-700">{row.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
