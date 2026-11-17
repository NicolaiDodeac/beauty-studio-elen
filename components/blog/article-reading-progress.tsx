"use client"

import { useEffect, useState } from "react"

/** Thin top progress bar — prefers-reduced-motion respected via CSS transition toggle */
export function ArticleReadingProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const sh = el.scrollHeight - el.clientHeight
      setPct(sh > 0 ? Math.min(100, (el.scrollTop / sh) * 100) : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent"
      aria-hidden
    >
      <div
        className="h-full bg-stone-400/75 motion-safe:transition-[width] motion-safe:duration-150 motion-reduce:transition-none"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
