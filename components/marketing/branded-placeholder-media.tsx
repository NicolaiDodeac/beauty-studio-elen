import { cn } from "@/lib/utils"

/**
 * Branded public placeholders (no stock photos of fake “results”).
 * Per-asset briefs: `docs/media-replacement-checklist.md` and JSDoc on `lib/blog/articles/*.tsx` / `lib/marketing/pmu-gallery.ts`.
 */

export function EditorialHeroPlaceholder({
  className,
  label = "Journal",
}: {
  className?: string
  /** Short category-style label */
  label?: string
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-stone-200/90 bg-gradient-to-br from-luxury-champagne via-luxury-ivory to-stone-100/90 shadow-sm",
        className,
      )}
      role="img"
      aria-label="Editorial placeholder — studio photography not yet added"
    >
      <div className="flex min-h-[12rem] flex-col items-center justify-center px-6 py-14 text-center sm:min-h-[14rem] sm:py-16">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-stone-400">{label}</p>
        <p className="mt-3 font-heading text-lg tracking-tight text-stone-600 sm:text-xl">Imagery updating soon</p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-500">
          A calm placeholder until each article has its own soft branded visual.
        </p>
      </div>
    </div>
  )
}

export function JournalCardVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full flex-col items-center justify-center border-b border-stone-200/80 bg-gradient-to-br from-luxury-champagne/95 via-luxury-ivory to-stone-50 px-6 text-center",
        className,
      )}
      role="img"
      aria-label="Journal card placeholder — photography forthcoming"
    >
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.26em] text-stone-400">ELEN Makeup</span>
      <span className="mt-2 font-heading text-sm text-stone-600 sm:text-base">Visual forthcoming</span>
    </div>
  )
}

export function GalleryMoodThumbPlaceholder({
  className,
  short = false,
  /** Development-only: exact replacement brief from `pmu-gallery` item */
  devMediaTodo,
}: {
  className?: string
  /** Homepage carousel — shorter caption */
  short?: boolean
  devMediaTodo?: string
}) {
  const showDevTodo = process.env.NODE_ENV === "development" && devMediaTodo

  return (
    <div
      className={cn(
        "flex aspect-[3/4] w-full flex-col items-center justify-center rounded-xl border border-stone-200/85 bg-gradient-to-b from-luxury-champagne/90 to-luxury-ivory px-3 py-6 text-center shadow-sm",
        className,
      )}
      role="img"
      aria-label="Illustrative mood tile — not a client photograph"
    >
      <span className="text-[0.55rem] font-medium uppercase tracking-[0.2em] text-stone-400">Studio</span>
      <span className="mt-2 font-heading text-xs leading-snug text-stone-600 sm:text-sm">
        {short ? "Preview" : "Visual mood"}
      </span>
      <span className="mt-2 text-[10px] leading-snug text-stone-500 sm:text-[11px]">
        Approved photography will replace this tile.
      </span>
      {showDevTodo ? (
        <span className="mt-2 max-w-[14rem] border-t border-amber-200/80 pt-2 font-mono text-[9px] leading-snug text-amber-900/90">
          MEDIA TODO: {devMediaTodo}
        </span>
      ) : null}
    </div>
  )
}

export function ServiceHeroPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-stone-200/90 bg-gradient-to-br from-luxury-champagne via-luxury-ivory to-stone-100/80",
        className,
      )}
      role="img"
      aria-label="Service photography — updating soon"
    >
      <div className="flex min-h-[280px] flex-col items-center justify-center px-6 py-14 text-center md:min-h-[360px] md:py-20">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-stone-400">ELEN Makeup · Telford</p>
        <p className="mt-3 font-heading text-xl text-stone-700">Treatment photography coming soon</p>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-stone-500">
          This panel is an intentional placeholder — not a client before-and-after.
        </p>
      </div>
    </div>
  )
}

export function ServiceGalleryTilePlaceholder({ index, title }: { index: number; title: string }) {
  return (
    <div
      className="relative flex aspect-square w-full flex-col items-center justify-center rounded-lg border border-dashed border-stone-300/90 bg-luxury-champagne/50 px-2 py-4 text-center"
      role="img"
      aria-label={`${title} — gallery slot ${index + 1}, photography pending`}
    >
      <span className="text-[10px] font-medium uppercase tracking-wide text-stone-400">Gallery</span>
      <span className="mt-1 text-[11px] leading-snug text-stone-500">Image {index + 1} · updating</span>
    </div>
  )
}
