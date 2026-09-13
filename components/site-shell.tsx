import type { ReactNode } from 'react'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

type SiteShellProps = {
  children: ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex min-w-0 flex-1 flex-col focus:outline-none w-full">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

