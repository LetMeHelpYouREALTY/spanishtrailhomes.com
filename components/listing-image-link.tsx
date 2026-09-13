'use client'

import { forwardRef, type MouseEventHandler, type ReactNode } from 'react'
import { trackRealscoutSharedSearchClick } from '@/lib/analytics'
import { REALSCOUT_SHARED_SEARCH_URL } from '@/lib/realscout'

type ListingImageLinkProps = {
  className?: string
  children: ReactNode
}

/**
 * Wraps a listing photo so a click opens the canonical Spanish Trail
 * RealScout shared search. Decorative photos stay decorative; the
 * surrounding link is the accessible name.
 */
export function ListingImageLink({ className, children }: ListingImageLinkProps) {
  const handleClick = () => {
    trackRealscoutSharedSearchClick('listing_photo')
  }

  return (
    <a
      href={REALSCOUT_SHARED_SEARCH_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Open Spanish Trail homes for sale on RealScout (opens in a new tab)"
      onClick={handleClick}
    >
      {children}
    </a>
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
