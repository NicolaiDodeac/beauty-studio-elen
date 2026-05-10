import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sectionVariants = cva("relative", {
  variants: {
    tone: {
      light: "bg-background text-foreground",
      ivory: "bg-luxury-ivory text-luxury-charcoal",
      champagne: "bg-luxury-champagne text-luxury-charcoal",
      dark: "bg-luxury-charcoal text-luxury-cream",
    },
    spacing: {
      default: "py-14 sm:py-16 lg:py-24",
      compact: "py-10 sm:py-14 lg:py-20",
      tight: "py-8 sm:py-10 lg:py-12",
    },
  },
  defaultVariants: {
    tone: "light",
    spacing: "default",
  },
})

export type SectionProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants>

export function Section({ className, tone, spacing, ...props }: SectionProps) {
  return <section className={cn(sectionVariants({ tone, spacing }), className)} {...props} />
}
