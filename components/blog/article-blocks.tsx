import type { SeoContentBlock } from "@/lib/blog/types"

import { cn } from "@/lib/utils"

export function ArticleBlocks({
  blocks,
  className,
}: {
  blocks: readonly SeoContentBlock[]
  className?: string
}) {
  return (
    <div className={cn("space-y-5", className)}>
      {blocks.map((block, i) => (
        <ArticleBlock key={i} block={block} />
      ))}
    </div>
  )
}

function ArticleBlock({ block }: { block: SeoContentBlock }) {
  if (block.type === "p") {
    return <p className="text-base leading-[1.75] text-stone-700">{block.children}</p>
  }
  return (
    <ul className="list-disc space-y-2.5 pl-5 text-base leading-[1.75] text-stone-700 marker:text-stone-400">
      {block.items.map((item, j) => (
        <li key={j}>{item}</li>
      ))}
    </ul>
  )
}
