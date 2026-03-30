export const BOOKSY_WIDGET_SCRIPT_URL =
  "https://booksy.com/widget/code.js?id=99970&country=gb&lang=en" as const

export function openBooksyBookingWidget(): boolean {
  if (typeof document === "undefined") return false
  const btn = document.querySelector<HTMLElement>(".booksy-widget-button")
  if (!btn) return false
  btn.click()
  return true
}

export function waitAndOpenBooksyBookingWidget(maxMs = 10_000): void {
  if (typeof window === "undefined") return
  if (openBooksyBookingWidget()) return
  const start = Date.now()
  const id = window.setInterval(() => {
    if (openBooksyBookingWidget() || Date.now() - start > maxMs) {
      window.clearInterval(id)
    }
  }, 100)
}
