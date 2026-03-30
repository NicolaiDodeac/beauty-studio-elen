import type React from "react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Route groups under `/admin` provide their own layouts:
  // - `(auth)` for the login page (no sidebar)
  // - `(panel)` for the protected admin UI (with sidebar)
  return <>{children}</>
}
