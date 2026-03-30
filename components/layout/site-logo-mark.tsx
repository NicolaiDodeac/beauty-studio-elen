import Image from "next/image"
import { cn } from "@/lib/utils"
import { SITE_LOGO_CROP_ZOOM, SITE_LOGO_SRC } from "@/lib/site-logo"

type SiteLogoMarkProps = {
  /** Tailwind size classes for the visible square (e.g. `h-24 w-24 lg:h-44 lg:w-44`). */
  boxClassName: string
  sizes: string
  alt: string
  priority?: boolean
  className?: string
}

export function SiteLogoMark({ boxClassName, sizes, alt, priority, className }: SiteLogoMarkProps) {
  return (
    <span className={cn("relative inline-block shrink-0 overflow-hidden", boxClassName, className)}>
      <Image
        src={SITE_LOGO_SRC}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain"
        style={{ transform: `scale(${SITE_LOGO_CROP_ZOOM})` }}
      />
    </span>
  )
}
