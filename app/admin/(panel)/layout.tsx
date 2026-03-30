import type React from "react"
import type { Metadata } from "next"
import AdminSidebar from "@/components/admin/admin-sidebar"

export const metadata: Metadata = {
  title: "Admin Dashboard | Glow Beauty Studio",
  description: "Manage bookings, reviews, and blog posts for Glow Beauty Studio.",
}

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 p-8 lg:pl-24">{children}</div>
    </div>
  )
}

