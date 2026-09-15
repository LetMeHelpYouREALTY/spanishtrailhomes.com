import type { ReactNode } from 'react'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { UrgencyBanner } from '@/components/urgency-banner'
import { VisitOfficeStrip } from '@/components/visit-office-strip'

type SiteShellProps = {
  children: ReactNode
  /** Set false on pages that already render a full Google Map + Call/Directions block. */
  showVisitOffice?: boolean
}

export function SiteShell({ children, showVisitOffice = true }: SiteShellProps) {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col bg-background text-foreground">
      <SiteHeader />
      <UrgencyBanner />
      <main id="main-content" tabIndex={-1} className="flex min-w-0 flex-1 flex-col focus:outline-none w-full">
        {children}
      </main>
      {showVisitOffice ? <VisitOfficeStrip /> : null}
      <SiteFooter />
    </div>
  )
}

