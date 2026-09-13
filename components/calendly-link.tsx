'use client'

import { trackCtaClick } from '@/lib/analytics'
import { CALENDLY_URL } from '@/lib/calendly'

type CalendlyLinkProps = {
  children?: React.ReactNode
  className?: string
  /** For GA4 cta_click: button label (e.g. "Book a Tour") */
  ctaText?: string
  /** For GA4 cta_click: hero | faq | footer | header */
  ctaLocation?: string
}

export function CalendlyLink({
  children = 'Book a Tour',
  className = '',
  ctaText,
  ctaLocation,
}: CalendlyLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const text = ctaText ?? (typeof children === 'string' ? children : 'Book a Tour')
    const location = ctaLocation ?? 'unknown'
    trackCtaClick(text, location)
    try {
      sessionStorage.setItem('calendly_source', location)
    } catch {
      /* ignore */
    }
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <a
      href={CALENDLY_URL}
      onClick={handleClick}
      className={className}
      aria-label="Book a tour with Dr. Jan Duffy"
    >
      {children}
    </a>
  )
}
