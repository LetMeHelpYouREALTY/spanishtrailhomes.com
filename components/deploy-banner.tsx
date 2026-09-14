'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { CalendlyLink } from '@/components/calendly-link'
import { trackPhoneClick } from '@/lib/analytics'
import { SITE_LISTINGS_HREF } from '@/lib/navigation'
import {
  GBP_HOURS_SHORT,
  GBP_PHONE_DISPLAY,
  GBP_PHONE_E164,
} from '@/lib/gbp-business'

/**
 * Slim GBP hours/phone bar. Replaces the old generic deploy banner that linked
 * off-site to searchforaffordablehomes.com.
 */
export default function DeployBanner() {
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('gbp-topbar-dismissed')
    if (dismissed === 'true') {
      setIsDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    sessionStorage.setItem('gbp-topbar-dismissed', 'true')
    setIsDismissed(true)
  }

  if (isDismissed) return null

  return (
    <div className="relative z-40 w-full border-b border-[#0f2b1e]/15 bg-[#0f2b1e] text-[#f8f5ef]">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
        <p className="min-w-0 text-center text-xs leading-relaxed sm:text-left sm:text-sm">
          Spanish Trail | Homes By Dr. Jan Duffy · {GBP_HOURS_SHORT}
        </p>
        <div className="flex shrink-0 flex-wrap items-center justify-center gap-2 sm:justify-end">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="h-8 px-3 text-xs text-[#f8f5ef] hover:bg-white/10 hover:text-white"
          >
            <Link
              href={`tel:${GBP_PHONE_E164}`}
              className="whitespace-nowrap"
              onClick={() => trackPhoneClick('gbp-topbar')}
            >
              Call {GBP_PHONE_DISPLAY}
            </Link>
          </Button>
          <Button
            variant="secondary"
            size="sm"
            asChild
            className="h-8 bg-white px-3 text-xs text-[#0f2b1e] hover:bg-[#eef2ef]"
          >
            <Link href={SITE_LISTINGS_HREF} className="whitespace-nowrap">
              Spanish Trail listings
            </Link>
          </Button>
          <CalendlyLink
            className="inline-flex h-8 items-center rounded-md border border-white/40 px-3 text-xs font-medium text-[#f8f5ef] hover:bg-white/10"
            ctaText="Book a Tour"
            ctaLocation="gbp-topbar"
          >
            Book a Tour
          </CalendlyLink>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="h-8 w-8 p-0 text-[#f8f5ef]/80 hover:bg-white/10 hover:text-white"
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Dismiss hours bar</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
