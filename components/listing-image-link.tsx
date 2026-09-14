'use client'

import Image from 'next/image'
import { forwardRef, type MouseEventHandler, type ReactNode } from 'react'
import { trackRealscoutSharedSearchClick } from '@/lib/analytics'
import { REALSCOUT_SHARED_SEARCH_URL } from '@/lib/realscout'
import { cn } from '@/lib/utils'

type ListingImageLinkProps = {
  className?: string
  children: ReactNode
  label?: string
}

/**
 * Wraps a listing photo so a click opens the canonical Spanish Trail
 * RealScout shared search. Decorative photos stay decorative; the
 * surrounding link is the accessible name.
 */
export function ListingImageLink({
  className,
  children,
  label = 'Open Spanish Trail homes for sale on RealScout (opens in a new tab)',
}: ListingImageLinkProps) {
  const handleClick = () => {
    trackRealscoutSharedSearchClick('listing_photo')
  }

  return (
    <a
      href={REALSCOUT_SHARED_SEARCH_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

type ListingPhotoPanelProps = {
  src: string
  label: string
  className?: string
}

/** Clickable section-side photo. Uses an img src so Google can extract the image. */
export function ListingPhotoPanel({ src, label, className }: ListingPhotoPanelProps) {
  return (
    <ListingImageLink label={`${label} — open live Spanish Trail listings`} className={cn('relative block h-full min-h-[16rem]', className)}>
      <Image
        src={src}
        alt={label}
        fill
        quality={75}
        sizes="(max-width: 1024px) 100vw, 480px"
        className="rounded-3xl border border-border/60 object-cover shadow-lg"
      />
    </ListingImageLink>
  )
}

type RealScoutSearchLinkProps = {
  children: ReactNode
  className?: string
  location: string
  label?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

/**
 * Text or button link to the canonical RealScout shared search.
 * Forwards the underlying <a> so `Button asChild` still works.
 */
export const RealScoutSearchLink = forwardRef<HTMLAnchorElement, RealScoutSearchLinkProps>(
  function RealScoutSearchLink({ children, className, location, label, onClick }, ref) {
    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
      trackRealscoutSharedSearchClick(location)
      onClick?.(event)
    }

    return (
      <a
        ref={ref}
        href={REALSCOUT_SHARED_SEARCH_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={label}
        onClick={handleClick}
      >
        {children}
      </a>
    )
  }
)

RealScoutSearchLink.displayName = 'RealScoutSearchLink'
