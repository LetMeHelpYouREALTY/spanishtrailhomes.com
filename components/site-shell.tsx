import { headers } from 'next/headers'
import type { ReactNode } from 'react'

import { PageSearchSignals } from '@/components/page-search-signals'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

type SiteShellProps = {
  children: ReactNode
}

export async function SiteShell({ children }: SiteShellProps) {
  const headerList = await headers()
  const pathname = headerList.get('x-pathname') ?? '/'

  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col bg-background text-foreground">
      <SiteHeader />
      <PageSearchSignals pathname={pathname} />
      <main id="main-content" tabIndex={-1} className="flex min-w-0 flex-1 flex-col focus:outline-none w-full">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
