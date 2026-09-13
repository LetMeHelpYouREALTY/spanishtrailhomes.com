'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { getSiteImageUrl } from '@/lib/cloudflare-images'
import { cn } from '@/lib/utils'
import {
  trackPropertyLightboxOpen,
  trackPropertyLightboxBookTour,
  trackPropertyLightboxTextAlert,
} from '@/lib/analytics'

const CALENDLY_TOUR_URL = 'https://calendly.com/drduffy/spanish-trail-showing'
const SMS_LISTINGS = 'sms:+17027663299?body=Alert%20me%20about%20new%20Spanish%20Trail%20listings'
const SMS_SCHEDULE_TOUR = 'sms:+17027663299?body=I%27d%20like%20to%20schedule%20a%20Spanish%20Trail%20home%20tour'

const PLACEHOLDER_PROPERTIES = [
  { id: '1', address: '5050 Spanish Trail Ln', price: '$649,000', beds: 3, baths: 2.5, imageId: 'h3-listing-home-a' },
  { id: '2', address: '5120 Cactus Garden Dr', price: '$725,000', beds: 4, baths: 3, imageId: 'h3-listing-home-b' },
  { id: '3', address: '5080 Lakes Course Dr', price: '$589,000', beds: 3, baths: 2, imageId: 'h3-listing-home-e' },
  { id: '4', address: '5200 Estates West Blvd', price: '$849,000', beds: 4, baths: 3.5, imageId: 'h3-listing-home-c' },
  { id: '5', address: '5150 Springs Way', price: '$699,000', beds: 3, baths: 2.5, imageId: 'h3-listing-home-f' },
  { id: '6', address: '5100 Courtyards Ln', price: '$549,000', beds: 2, baths: 2, imageId: 'h3-listing-home-d' },
]

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
  children = 'See Available Homes 🏡',
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
      aria-label="See available Spanish Trail homes and book a tour"
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
  const propertiesViewed = PLACEHOLDER_PROPERTIES.length

  useEffect(() => {
    if (!open) return
    trackPropertyLightboxOpen(openFrom ?? 'hero')
  }, [open, openFrom])

  const openCalendly = useCallback(() => {
    trackPropertyLightboxBookTour(propertiesViewed)
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_TOUR_URL })
    } else {
      window.open(CALENDLY_TOUR_URL, '_blank', 'noopener,noreferrer')
    }
  }, [propertiesViewed])

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next)
        if (!next) setOpenFrom(null)
      }}
    >
      <DialogContent
        className="max-h-[90vh] max-w-[900px] overflow-y-auto rounded-2xl border-0 bg-white p-0 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        aria-describedby="property-lightbox-desc"
        onCloseAutoFocus={(e) => {
          e.preventDefault()
          lastTriggerRef.current?.focus()
        }}
      >
        <div className="p-6 sm:p-8">
          <DialogTitle
            id="property-lightbox-title"
            className="text-center font-heading text-2xl font-semibold text-[#0f2b1e] sm:text-3xl"
          >
            Tour These Spanish Trail Homes
          </DialogTitle>
          <p className="mt-2 text-center text-sm text-[#372a20]/80">
            30-minute private tour with Dr. Jan Duffy — no obligation.
          </p>
          <p id="property-lightbox-desc" className="sr-only">
            Browse featured Spanish Trail listings, then book a private tour or sign up for new listing alerts.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {PLACEHOLDER_PROPERTIES.map((p) => (
              <article
                key={p.id}
                className="overflow-hidden rounded-xl border border-[#d8cdbf] bg-[#fdf9f3] shadow-sm transition-transform duration-200 hover:scale-[1.05] focus-within:scale-[1.05]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e4dc]">
                  <Image
                    src={getSiteImageUrl(p.imageId)}
                    alt={`Spanish Trail Las Vegas home example at ${p.address} — ${p.price}, ${p.beds} bed ${p.baths} bath`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <p className="font-semibold text-[#0f2b1e]">{p.price}</p>
                  <p className="text-sm text-muted-foreground">
                    {p.beds} bed · {p.baths} bath
                  </p>
                  <p className="mt-1 truncate text-sm text-[#372a20]/85" title={p.address}>
                    {p.address}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-[#372a20]/80">
            Dr. Jan Duffy personally leads each tour. Pick your day and time below.
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
