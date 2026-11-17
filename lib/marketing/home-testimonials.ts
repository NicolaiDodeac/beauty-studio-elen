/** Fallback copy when procedure_reviews are empty — understated, conversational. */
export type HomeTestimonialFallback = {
  quote: string
  attribution: string
  detail?: string
}

export const HOME_TESTIMONIAL_FALLBACKS: HomeTestimonialFallback[] = [
  {
    quote:
      "The shape sits quietly on my face — I still look like me on school mornings, just a bit more polished.",
    attribution: "Powder brows client",
    detail: "Telford",
  },
  {
    quote:
      "Elen took her time with mapping and explained healing without jargon. I knew what to expect each week.",
    attribution: "Semi-permanent makeup client",
    detail: "Shropshire",
  },
  {
    quote:
      "It’s subtle enough that friends say I look rested. Nobody asks if I’ve had work done.",
    attribution: "Brows client",
    detail: "Telford area",
  },
]
