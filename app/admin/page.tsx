import { redirect } from "next/navigation"
import AdminLogin from "@/components/admin/admin-login"

// This is a mock function to check if the user is authenticated
// In a real app, this would use a proper auth system
const isAuthenticated = () => {
  // Mock implementation - always returns false for demo purposes
  return true
}

export default function AdminPage() {
  // If authenticated, redirect to the dashboard
  if (isAuthenticated()) {
    redirect("/admin/dashboard")
  }

  // Otherwise, show the login form
  return <AdminLogin />
}
