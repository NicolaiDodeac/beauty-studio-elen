/** True when `src` points at temporary placeholder assets (not client photography). */
export function isPlaceholderMediaSrc(src: string | undefined | null): boolean {
  if (!src) return true
  const s = src.toLowerCase()
  return (
    s.includes("placeholder.svg") ||
    s.includes("/placeholder.jpg") ||
    s === "/placeholder.svg" ||
    s.startsWith("/placeholder")
  )
}
