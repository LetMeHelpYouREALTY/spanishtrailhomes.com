'use client'

import { Phone } from 'lucide-react'
import Link from 'next/link'

export function SiteTopBar() {
  return (
    <div className="flex items-center justify-between border-b border-border/60 bg-primary px-4 py-2 text-primary-foreground sm:px-6 safe-area-padding">
      <div className="flex min-w-0 flex-1 items-center gap-2 truncate text-[0.65rem] uppercase tracking-[0.3em] sm:text-xs sm:tracking-[0.4em]">
        <span className="truncate">Spanish Trail | Homes By Dr. Jan Duffy · 5050 Spanish Trail Ln, Las Vegas, NV 89113</span>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href="tel:+17027663299"
          className="touch-target inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] underline-offset-4 transition-colors hover:underline sm:min-h-0 sm:min-w-0 sm:tracking-[0.3em]"
          aria-label="Call (702) 766-3299"
        >
          <Phone className="size-4 sm:size-3.5" aria-hidden />
          <span className="sm:inline">(702) 766-3299</span>
        </Link>
      </div>
    </div>
  )
}

