import { siteWhatsAppUrl } from "@/lib/site-contact"

export const POWDER_BROWS_PATH = "/powder-brows-telford"

const CAMPAIGN_PARAMS = ["source", "src", "campaign", "utm_campaign", "utm_source"]
const FALLBACK_SOURCE = "PB-WEB"
const CONSULTATION_MESSAGE =
  "Hi! I’m interested in Powder Brows. Could you send me your next available times for a free consultation, please?"

export function powderBrowsConsultationUrl(params?: Pick<URLSearchParams, "get">) {
  let source = FALLBACK_SOURCE
  for (const param of CAMPAIGN_PARAMS) {
    const code = params?.get(param)?.trim().replace(/^\[(.*)\]$/, "$1")
    if (code && /^[A-Za-z0-9][A-Za-z0-9_.-]{0,63}$/.test(code)) {
      source = code
      break
    }
  }

  return siteWhatsAppUrl(`${CONSULTATION_MESSAGE} [${source}]`)
}
