'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'

import { NAV_ITEMS } from '@/lib/navigation'
import { trackPhoneClick } from '@/lib/analytics'
import { Button } from '@/components/ui/button'
import { CalendlyLink } from '@/components/calendly-link'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeFlyout, setActiveFlyout] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleFlyout = (label: string) => {
    setActiveFlyout((prev) => (prev === label ? null : label))
  }

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/60 bg-white/95 shadow-sm shadow-black/5 backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 px-4 py-3.5 sm:px-6 sm:py-4 lg:grid-cols-[minmax(0,1.05fr)_auto_minmax(0,1.05fr)] lg:gap-x-6">
        <Link
          href="/"
          aria-label="Spanish Trail | Homes By Dr. Jan Duffy home"
          className="group min-w-0 justify-self-start"
        >
          <div className="text-left">
            <p className="text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground group-hover:text-secondary sm:text-[0.65rem] sm:tracking-[0.45em]">
              Berkshire Hathaway HomeServices
            </p>
            <p className="font-[var(--font-playfair)] text-base font-semibold leading-snug tracking-[0.06em] text-[#0f2b1e] sm:text-xl sm:tracking-[0.08em] lg:text-2xl">
              Spanish Trail | Homes By Dr. Jan Duffy
            </p>
          </div>
        </Link>

          <nav className="col-start-2 row-start-1 hidden items-center justify-center gap-4 self-center lg:col-start-2 lg:flex xl:gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              const hasChildren = !!item.children?.length

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && setActiveFlyout(item.label)}
                  onMouseLeave={() => hasChildren && setActiveFlyout(null)}
                >
                  <div className="flex items-center gap-0.5">
                    <Link
                      href={item.href}
                      className={`text-sm font-semibold uppercase tracking-[0.32em] transition-colors hover:text-secondary hover:underline ${isActive ? 'text-secondary' : 'text-[#1f2a24]'}`}
                    >
                      {item.label}
                    </Link>
                    {hasChildren ? (
                      <button
                        type="button"
                        className="flex items-center rounded p-0.5 text-[#1f2a24] hover:text-secondary"
                        onClick={() => toggleFlyout(item.label)}
                        aria-haspopup="true"
                        aria-expanded={activeFlyout === item.label}
                        aria-label={`${item.label} submenu`}
                      >
                        <ChevronDown className="size-3" aria-hidden />
                      </button>
                    ) : null}
                  </div>

                  {hasChildren && activeFlyout === item.label ? (
                    <div
                      className="absolute left-1/2 z-50 mt-4 w-64 -translate-x-1/2 rounded-2xl border border-[#d8cdbf]/60 bg-white py-4 shadow-xl shadow-primary/10"
                      onMouseEnter={() => setActiveFlyout(item.label)}
                      onMouseLeave={() => setActiveFlyout(null)}
                    >
                      {/* Group items by their group property */}
                      {(() => {
                        const groups = (item.children ?? []).reduce((acc, child) => {
                          const groupName = child.group || 'Links'
                          if (!acc[groupName]) acc[groupName] = []
                          acc[groupName].push(child)
                          return acc
                        }, {} as Record<string, typeof item.children>)
                        
                        return Object.entries(groups).map(([groupName, children], groupIndex) => (
                          <div key={groupName} className={groupIndex > 0 ? 'mt-3 border-t border-border/40 pt-3' : ''}>
                            <p className="px-4 pb-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                              {groupName}
                            </p>
                            <div className="flex flex-col">
                              {(children ?? []).map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="px-4 py-1.5 text-sm text-[#1f2a24] hover:bg-[#f5f3ef] hover:text-secondary"
                                  onClick={() => setActiveFlyout(null)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))
                      })()}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </nav>

          <div className="hidden shrink-0 items-center justify-end gap-3 justify-self-end lg:col-start-3 lg:flex">
            <Link
              href="tel:+17027663299"
              className="inline-flex items-center gap-2 rounded-full border border-[#0f2b1e]/40 px-6 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10"
              aria-label="Call 702-766-3299"
              onClick={() => trackPhoneClick('header')}
            >
              <Phone className="size-4" aria-hidden />
              (702) 766-3299
            </Link>
            <CalendlyLink className="rounded-full bg-[#0f2b1e] px-6 py-2 text-xs font-medium uppercase tracking-[0.32em] text-white hover:bg-[#0c2118]" ctaText="Book a Tour" ctaLocation="header">
              Book a Tour
            </CalendlyLink>
          </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="touch-target col-start-2 row-start-1 inline-flex shrink-0 items-center justify-center justify-self-end rounded-full border border-border/60 p-2 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border/60 bg-background/98 px-4 py-6 sm:px-6 sm:py-8 lg:hidden safe-area-padding">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const hasChildren = !!item.children?.length

              return (
                <div key={item.label} className="border-b border-border/40 last:border-0">
                  <div className="flex min-h-[44px] items-center justify-between gap-3 py-2">
                    <Link
                      href={item.href}
                      className="touch-target flex min-h-[44px] flex-1 items-center text-sm font-semibold uppercase tracking-[0.2em] text-[#0f2b1e] hover:underline sm:tracking-[0.32em]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {hasChildren ? (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} links`}
                        className="touch-target flex shrink-0 items-center justify-center rounded-full border border-border/60 p-2"
                        onClick={() => toggleFlyout(item.label)}
                      >
                        <ChevronDown className={`size-5 transition-transform ${activeFlyout === item.label ? 'rotate-180' : ''}`} aria-hidden />
                      </button>
                    ) : null}
                  </div>
                  {hasChildren && activeFlyout === item.label ? (
                    <div className="space-y-0 pb-3 pl-2">
                      {(() => {
                        const groups = (item.children ?? []).reduce((acc, child) => {
                          const groupName = child.group || 'Links'
                          if (!acc[groupName]) acc[groupName] = []
                          acc[groupName].push(child)
                          return acc
                        }, {} as Record<string, typeof item.children>)
                        
                        return Object.entries(groups).map(([groupName, children], groupIndex) => (
                          <div key={groupName} className={groupIndex > 0 ? 'mt-2 border-t border-border/30 pt-2' : ''}>
                            <p className="py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                              {groupName}
                            </p>
                            {(children ?? []).map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="touch-target flex min-h-[44px] items-center py-2 text-sm uppercase tracking-[0.2em] text-[#4d5c55] hover:text-secondary hover:underline"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ))
                      })()}
                    </div>
                  ) : null}
                </div>
              )
            })}

            <div className="mt-6 flex flex-col gap-3 pt-4">
              <CalendlyLink className="touch-target flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#0f2b1e] px-6 py-3 text-sm font-medium uppercase tracking-[0.32em] text-white hover:bg-[#0c2118] sm:min-h-[44px] sm:w-auto" ctaText="Book a Tour" ctaLocation="header">
                Book a Tour
              </CalendlyLink>
              <Link
                href="tel:+17027663299"
                className="touch-target flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#0f2b1e]/40 px-6 py-3 text-sm font-medium uppercase tracking-[0.28em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10 sm:min-h-[44px] sm:w-auto"
                aria-label="Call 702-766-3299"
                onClick={() => trackPhoneClick('header')}
              >
                <Phone className="size-4" aria-hidden />
                (702) 766-3299
              </Link>
              <Button asChild variant="link" className="touch-target min-h-[44px] justify-start px-0 text-sm uppercase tracking-[0.32em]">
                <Link href="https://searchforaffordablehomes.com/neighborhood/83/spanish-trails" target="_blank" rel="noopener noreferrer">
                  View Listings →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

