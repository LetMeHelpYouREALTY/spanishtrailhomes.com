'use client'

import { cn } from '@/lib/utils'
import { WidgetLoadingOverlay } from '@/components/widget-loading-overlay'
import { RealScoutSearchLink } from '@/components/listing-image-link'

type HeroSearchWidgetProps = {
  theme?: 'light' | 'dark'
  className?: string
}

export function HeroSearchWidget({ theme = 'dark', className }: HeroSearchWidgetProps) {
  const cardStyles =
    theme === 'dark'
      ? 'border-2 border-white/35 bg-white shadow-xl shadow-black/25 ring-1 ring-black/10'
      : 'border-[#d8cdbf] bg-[#fdf9f3] shadow-lg shadow-primary/10'

  const linkStyles =
    theme === 'dark' ? 'text-white/90' : 'text-[#0f2b1e]'

  return (
    <>
      <style jsx global>{`
        realscout-simple-search {
          --rs-ss-font-primary-color: #000000;
          --rs-ss-searchbar-border-color: #8b572a;
          --rs-ss-box-shadow: none;
          --rs-ss-widget-width: 100% !important;
        }
      `}</style>
      <div className="mx-auto mt-8 w-full max-w-xl">
        <div className={cn('relative min-h-[120px] w-full rounded-3xl border p-6', cardStyles, className)}>
          <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
          <WidgetLoadingOverlay selector="realscout-simple-search" message="Loading search…" timeout={4000} />
        </div>
        <p className={cn('mt-3 text-center text-sm', linkStyles)}>
          <RealScoutSearchLink
            location="hero-search"
            className="font-medium underline-offset-4 hover:underline"
          >
            Open the full Spanish Trail search
          </RealScoutSearchLink>
        </p>
      </div>
    </>
  )
}

