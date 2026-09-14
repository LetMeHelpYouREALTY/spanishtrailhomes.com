'use client'

import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Calendar } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { trackCalendlyFabView, trackCalendlyFabClick } from '@/lib/analytics'

const CALENDLY_URL = 'https://calendly.com/drduffy/spanish-trail-showing'
const SCROLL_SHOW_PX = 300
const BOTTOM_HIDE_PX = 200
/** Set to 'true' via Calendly success redirect or postMessage to hide FAB after booking */
const LOCALSTORAGE_APPOINTMENT_KEY = 'calendly_appointment_scheduled'

function getScrollPercentage(): number {
  if (typeof window === 'undefined') return 0
  const { scrollY, innerHeight } = window
  const scrollHeight = document.documentElement.scrollHeight - innerHeight
  if (scrollHeight <= 0) return 0
  return Math.round((scrollY / scrollHeight) * 100)
}

export function FloatingCalendlyButton() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [hideDueToAppointment, setHideDueToAppointment] = useState(false)
  const fabViewSent = useRef(false)

  const updateVisibility = useCallback(() => {
    if (typeof window === 'undefined') return
    const scrollY = window.scrollY
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight
    const nearBottom = maxScroll - scrollY < BOTTOM_HIDE_PX
    const pastThreshold = scrollY > SCROLL_SHOW_PX
    setVisible(pastThreshold && !nearBottom)
  }, [])

  useEffect(() => {
    setMounted(true)
    try {
      if (typeof window !== 'undefined' && localStorage.getItem(LOCALSTORAGE_APPOINTMENT_KEY) === 'true') {
        setHideDueToAppointment(true)
      }
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [mounted, updateVisibility])

  useEffect(() => {
    if (visible && !fabViewSent.current) {
      fabViewSent.current = true
      trackCalendlyFabView(getScrollPercentage())
    }
  }, [visible])

  const handleClick = useCallback(() => {
    trackCalendlyFabClick(
      typeof pathname === 'string' ? pathname : (typeof window !== 'undefined' ? window.location.pathname : '/')
    )
    try {
      sessionStorage.setItem('calendly_source', 'fab_button')
    } catch {
      /* ignore */
    }
    setModalOpen(true)
  }, [pathname])

  const hideOnContact = pathname === '/contact'
  /** Homepage: header + hero CTAs already include Book a Tour; skip FAB to avoid stacking with listing widgets. */
  const hideOnHome = pathname === '/'
  const hideOnUtility = [
    '/privacy',
    '/terms',
    '/accessibility',
    '/media-kit',
    '/site-index',
    '/directions',
    '/find-our-locations',
    '/reviews',
    '/awards',
  ].includes(pathname)
  const showFAB = mounted && !hideOnContact && !hideOnHome && !hideOnUtility && !hideDueToAppointment

  if (!showFAB) return null

  return (
    <>
      <div
        className={cn(
          'fixed bottom-24 left-1/2 z-[40] -translate-x-1/2 sm:bottom-8 sm:left-auto sm:right-6 sm:translate-x-0',
          'transition-opacity duration-300',
        )}
        style={{
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        <button
          type="button"
          onClick={handleClick}
          className={cn(
            'flex h-[52px] w-[140px] items-center justify-center gap-2 rounded-full bg-[#0f2b1e] text-white shadow-lg sm:h-14 sm:w-[160px]',
            'animate-fab-pulse',
          )}
          aria-label="Schedule property showing"
        >
          <Calendar className="size-4 shrink-0 sm:size-5" aria-hidden />
          <span className="text-sm font-medium">Book a Tour</span>
        </button>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent
          className="h-[90vh] w-[90vw] max-w-none border-0 bg-white p-0 shadow-xl"
          showCloseButton={true}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <div className="flex h-full w-full overflow-hidden rounded-lg">
            <iframe
              title="Schedule a Spanish Trail showing with Dr. Jan Duffy"
              src={`${CALENDLY_URL}?embed_domain=${typeof window !== 'undefined' ? window.location.hostname : 'spanishtrailhomes.com'}`}
              className="h-full w-full min-h-[500px] border-0"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
