'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { AgentPortrait } from '@/components/agent-portrait'
import { cn } from '@/lib/utils'
import {
  trackPropertyLightboxOpen,
  trackPropertyLightboxBookTour,
  trackPropertyLightboxTextAlert,
} from '@/lib/analytics'

const CALENDLY_TOUR_URL = 'https://calendly.com/drduffy/spanish-trail-showing'
const SMS_LISTINGS = 'sms:+17027663299?body=Alert%20me%20about%20new%20Spanish%20Trail%20listings'
const SMS_SCHEDULE_TOUR = 'sms:+17027663299?body=I%27d%20like%20to%20schedule%20a%20Spanish%20Trail%20home%20tour'
const LIVE_LISTINGS_HREF = '#bhhs-listings'

type PropertyLightboxContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  openFrom: 'hero' | 'listings' | null
  setOpenFrom: (from: 'hero' | 'listings' | null) => void
  setLastTriggerRef: (ref: HTMLButtonElement | null) => void
}

const PropertyLightboxContext = createContext<PropertyLightboxContextValue | null>(null)

function usePropertyLightbox() {
  const ctx = useContext(PropertyLightboxContext)
  if (!ctx) throw new Error('PropertyLightboxTrigger must be used inside PropertyLightboxProvider')
  return ctx
}

export function PropertyLightboxProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [openFrom, setOpenFrom] = useState<'hero' | 'listings' | null>(null)
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null)

  const setLastTriggerRef = useCallback((ref: HTMLButtonElement | null) => {
    lastTriggerRef.current = ref
  }, [])

  const value: PropertyLightboxContextValue = {
    open,
    setOpen,
    openFrom,
    setOpenFrom,
    setLastTriggerRef,
  }

  return (
    <PropertyLightboxContext.Provider value={value}>
      {children}
      <PropertyLightboxModal
        open={open}
        onOpenChange={setOpen}
        openFrom={openFrom}
        setOpenFrom={setOpenFrom}
        lastTriggerRef={lastTriggerRef}
      />
    </PropertyLightboxContext.Provider>
  )
}

type PropertyLightboxTriggerProps = {
  variant?: 'primary' | 'outline'
  openFrom: 'hero' | 'listings'
  children?: React.ReactNode
  className?: string
}

export function PropertyLightboxTrigger({
  variant = 'outline',
  openFrom,
  children = 'Book a Private Tour',
  className,
}: PropertyLightboxTriggerProps) {
  const { setOpen, setOpenFrom, setLastTriggerRef } = usePropertyLightbox()
  const triggerRef = useRef<HTMLButtonElement>(null)

  const handleClick = useCallback(() => {
    setLastTriggerRef(triggerRef.current)
    setOpenFrom(openFrom)
    setOpen(true)
  }, [openFrom, setOpen, setOpenFrom, setLastTriggerRef])

  return (
    <Button
      ref={triggerRef}
      type="button"
      variant={variant === 'primary' ? 'default' : 'outline'}
      className={cn(
        variant === 'primary'
          ? 'rounded-full px-8 py-3 text-xs uppercase tracking-[0.4em] shadow-md shadow-primary/25'
          : 'rounded-full border-[#0d3b2c]/60 bg-background/95 px-8 py-3 text-xs uppercase tracking-[0.4em] text-[#0d3b2c] shadow-md shadow-primary/10 hover:bg-[#0d3b2c]/10',
        className,
      )}
      onClick={handleClick}
      aria-haspopup="dialog"
      aria-label="Book a private Spanish Trail home tour with Dr. Jan Duffy"
    >
      {children}
    </Button>
  )
}

function PropertyLightboxModal({
  open,
  onOpenChange,
  openFrom,
  setOpenFrom,
  lastTriggerRef,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  openFrom: 'hero' | 'listings' | null
  setOpenFrom: (from: 'hero' | 'listings' | null) => void
  lastTriggerRef: React.RefObject<HTMLButtonElement | null>
}) {
  useEffect(() => {
    if (!open) return
    trackPropertyLightboxOpen(openFrom ?? 'hero')
  }, [open, openFrom])

  const openCalendly = useCallback(() => {
    trackPropertyLightboxBookTour(0)
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_TOUR_URL })
    } else {
      window.open(CALENDLY_TOUR_URL, '_blank', 'noopener,noreferrer')
    }
  }, [])

  const closeThenScrollToListings = useCallback(() => {
    onOpenChange(false)
    setOpenFrom(null)
    if (typeof window !== 'undefined') {
      window.location.hash = LIVE_LISTINGS_HREF.slice(1)
    }
  }, [onOpenChange, setOpenFrom])

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next)
        if (!next) setOpenFrom(null)
      }}
    >
      <DialogContent
        className="max-h-[90vh] max-w-[640px] overflow-y-auto rounded-2xl border-0 bg-white p-0 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        aria-describedby="property-lightbox-desc"
        onCloseAutoFocus={(e) => {
          e.preventDefault()
          lastTriggerRef.current?.focus()
        }}
      >
        <div className="p-6 sm:p-8">
          <div className="flex flex-col items-center text-center">
            <AgentPortrait placement="tour-lightbox" size="md" />
            <DialogTitle
              id="property-lightbox-title"
              className="mt-4 font-heading text-2xl font-semibold text-[#0f2b1e] sm:text-3xl"
            >
              Tour Spanish Trail homes with Dr. Jan Duffy
            </DialogTitle>
            <p className="mt-2 text-sm text-[#372a20]/80">
              30-minute private tour — no obligation. Call (702) 766-3299 or pick a time below.
            </p>
            <p id="property-lightbox-desc" className="sr-only">
              Book a private Spanish Trail home tour with Dr. Jan Duffy, text for listing alerts, or jump to live office
              inventory. This dialog does not show placeholder listing prices.
            </p>
          </div>

          <p className="mt-6 text-center text-sm text-[#372a20]/80">
            Live inventory is in the office listings feed on this page. Dr. Duffy confirms the Spanish Trail street
            before a showing.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Button
              type="button"
              className="min-h-[48px] rounded-full bg-[#0f2b1e] p-4 text-base font-medium text-white shadow-md hover:bg-[#0f2b1e]/90 focus-visible:ring-2 focus-visible:ring-[#0f2b1e] focus-visible:ring-offset-2"
              onClick={openCalendly}
              aria-label="Book your tour with Dr. Jan Duffy"
            >
              Book Your Tour
            </Button>
            <Button
              type="button"
              variant="outline"
              asChild
              className="min-h-[48px] rounded-full border-[#0f2b1e]/60 px-6 py-4 text-base text-[#0f2b1e] hover:bg-[#0f2b1e]/10"
            >
              <a
                href={SMS_SCHEDULE_TOUR}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Text to schedule a Spanish Trail tour"
                onClick={() => trackPropertyLightboxTextAlert('sms_tour')}
              >
                Text to Schedule a Tour
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              asChild
              className="min-h-[48px] rounded-full border-[#0f2b1e]/60 px-6 py-4 text-base text-[#0f2b1e] hover:bg-[#0f2b1e]/10"
            >
              <a
                href={SMS_LISTINGS}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Text to get alerts when new Spanish Trail homes list"
                onClick={() => trackPropertyLightboxTextAlert('sms_subscribe')}
              >
                Text When New Homes List
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="min-h-[48px] rounded-full border-[#0f2b1e]/60 px-6 py-4 text-base text-[#0f2b1e] hover:bg-[#0f2b1e]/10"
              onClick={closeThenScrollToListings}
            >
              View Live Listings
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

/** Legacy single-trigger wrapper: use PropertyLightboxProvider + PropertyLightboxTrigger instead. */
export function PropertyLightbox({ triggerClassName }: { triggerClassName?: string }) {
  return (
    <PropertyLightboxTrigger
      openFrom="hero"
      variant="outline"
      className={triggerClassName}
    />
  )
}
