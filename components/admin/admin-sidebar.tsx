"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, MessageSquare, FileText, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: Calendar },
  { name: "Bookings", href: "/admin/bookings", icon: Calendar },
  { name: "Reviews", href: "/admin/reviews", icon: MessageSquare },
  { name: "Blog Posts", href: "/admin/blog", icon: FileText },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle mouse enter/leave for desktop sidebar
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    if (!isCollapsed) return // Don't collapse if user has manually expanded

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setIsHovering(false)
  }

  // Handle click outside to close mobile sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && sidebarOpen) {
        setSidebarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [sidebarOpen])

  // Toggle collapsed state for desktop
  const toggleCollapsed = () => {
    const newCollapsedState = !isCollapsed
    setIsCollapsed(newCollapsedState)
    setIsHovering(!newCollapsedState) // Show content when expanding, hide when collapsing
  }

  return (
    <>
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="icon" onClick={() => setSidebarOpen(true)} className="bg-white">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open sidebar</span>
        </Button>
      </div>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-900/80" onClick={() => setSidebarOpen(false)} />

          <div className="fixed inset-y-0 left-0 w-64 bg-white" ref={sidebarRef}>
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Admin Panel</h2>
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close sidebar</span>
              </Button>
            </div>

            <nav className="flex flex-col p-4 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-pink-50 text-pink-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className={`mr-3 h-5 w-5 ${isActive ? "text-pink-600" : "text-gray-400"}`} />
                    {item.name}
                  </Link>
                )
              })}

              <div className="pt-4 mt-4 border-t">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
                  onClick={() => {
                    setSidebarOpen(false)
                    // In a real app, this would log the user out
                  }}
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Logout
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div
        className={`hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col lg:border-r lg:bg-white transition-all duration-300 ${
          isHovering || !isCollapsed ? "lg:w-64" : "lg:w-16"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col flex-1">
          <div className="flex items-center h-16 px-6 border-b justify-between">
            {(isHovering || !isCollapsed) && <h2 className="text-lg font-semibold">Admin Panel</h2>}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleCollapsed}
              className={`${isHovering || !isCollapsed ? "ml-auto" : "mx-auto"}`}
            >
              {isCollapsed ? "→" : "←"}
            </Button>
          </div>

          <nav className="flex flex-col flex-1 p-6 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? "bg-pink-50 text-pink-600" : "text-gray-700 hover:bg-gray-100"
                  } ${isCollapsed && !isHovering ? "justify-center" : ""}`}
                >
                  <item.icon
                    className={`${isHovering || !isCollapsed ? "mr-3" : ""} h-5 w-5 ${isActive ? "text-pink-600" : "text-gray-400"}`}
                  />
                  {(isHovering || !isCollapsed) && item.name}
                </Link>
              )
            })}
          </nav>

          <div className={`p-6 border-t ${isCollapsed && !isHovering ? "flex justify-center" : ""}`}>
            <Button
              variant="ghost"
              className={`${isCollapsed && !isHovering ? "w-10 h-10 p-0" : "w-full"} justify-start text-red-600 hover:bg-red-50 hover:text-red-700`}
              onClick={() => {
                // In a real app, this would log the user out
              }}
            >
              <LogOut className={`${isHovering || !isCollapsed ? "mr-3" : ""} h-5 w-5`} />
              {(isHovering || !isCollapsed) && "Logout"}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
