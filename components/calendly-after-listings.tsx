'use client'

import { usePathname } from 'next/navigation'
import { CalendlyLink } from '@/components/calendly-link'

/** Booking strip placed directly after the RealScout listings section. */
export function CalendlyAfterListings() {
  const pathname = usePathname() || '/'
  return (
    <div className="mx-auto my-8 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-lg border border-border bg-muted/40 px-6 py-5 sm:flex-row">
      <p className="text-base text-foreground">
        See a Spanish Trail home you like? Pick a time with Dr. Jan Duffy.
      </p>
      <CalendlyLink
        ctaLocation={`after-listings:${pathname}`}
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
      >
        Schedule time with me
      </CalendlyLink>
    </div>
  )
}
