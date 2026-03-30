/** Digits only, country code included (no +), for https://wa.me/<this> */
export const SITE_WHATSAPP_NUMBER = "447879781581"

export const SITE_PHONE_DISPLAY = "+44 (0) 7879 781581"
export const SITE_PHONE_TEL = "+447879781581"

/** Default wa.me text for CTAs (contact page, footer, etc.). */
export const SITE_WHATSAPP_DEFAULT_MESSAGE =
  "Hi! I'd like to get in touch about an appointment."

export function siteWhatsAppUrl(prefilledMessage?: string) {
  const base = `https://wa.me/${SITE_WHATSAPP_NUMBER}`
  const q = prefilledMessage?.trim()
  if (!q) return base
  return `${base}?text=${encodeURIComponent(q)}`
}
