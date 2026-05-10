import * as React from "react"

import { cn } from "@/lib/utils"

export type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  /** Dark section — switch eyebrow/subtitle contrast */
  inverse?: boolean
  className?: string
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  inverse = false,
  className,
  id,
}: SectionHeadingProps) {
  const isCenter = align === "center"
  return (
    <div
      id={id}
      className={cn(
        "max-w-3xl space-y-3 sm:space-y-3.5",
        isCenter && "mx-auto text-center",
        isCenter && subtitle && "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-medium uppercase tracking-[0.22em] sm:text-sm",
            inverse ? "text-luxury-mist" : "text-stone-500",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-heading text-3xl leading-[1.18] tracking-tight sm:text-4xl sm:leading-[1.15] lg:text-[2.5rem] lg:leading-[1.12]",
          inverse ? "text-luxury-cream" : "text-luxury-charcoal",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-prose text-base leading-relaxed sm:text-lg sm:leading-relaxed",
            inverse ? "text-luxury-cream/85" : "text-stone-600",
            isCenter && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
