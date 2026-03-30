/** Site logo in `public/images/logo/` (square asset). */
export const SITE_LOGO_SRC = "/images/logo/logo.png" as const
export const SITE_LOGO_ALT = "Elen.MakeUp.Telford" as const

/**
 * Zoom past the bounding box to clip empty padding in the PNG (center crop).
 * ~2.2–2.5 typical when the mark sits in the middle ~40–50% of the file.
 */
export const SITE_LOGO_CROP_ZOOM = 2.3 as const

/** Largest header logo box (px), for `sizes`. */
export const SITE_LOGO_HEADER_PX = 112 as const
export const SITE_LOGO_FOOTER_PX = 80 as const
