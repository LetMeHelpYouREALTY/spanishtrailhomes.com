import Link from 'next/link'

import {
  GBP_ACCESSIBILITY_FEATURES,
  GBP_ADDRESS_LINE,
  GBP_CATEGORY,
  GBP_DIRECTIONS_URL,
  GBP_GOOGLE_REVIEW_URL,
  GBP_HOURS_LABEL,
  GBP_LEGAL_NAME,
  GBP_PHONE_DISPLAY,
  GBP_PHONE_E164,
  GBP_PROFILE_SHARE_URL,
  GBP_SERVICE_AREA_LABEL,
  GBP_SMS_HREF,
  GBP_VETERAN_OWNED,
} from '@/lib/gbp-business'
import { cn } from '@/lib/utils'

type GbpSectionSupportProps = {
  variant?: 'onDark' | 'onLight' | 'compact'
  className?: string
}

/**
 * Crawlable GBP + Google Maps NAP/CTAs on every section banner.
 * Call, SMS (GBP Chat), Maps directions, and the official g.page review URL.
 */
export function GbpSectionSupport({ variant = 'onLight', className }: GbpSectionSupportProps) {
  const onDark = variant === 'onDark'
  const compact = variant === 'compact'
  const linkClass = onDark
    ? 'underline underline-offset-2 decoration-white/40 hover:decoration-white'
    : 'underline underline-offset-2 decoration-[#0f2b1e]/30 hover:decoration-[#0f2b1e]'

  return (
    <nav
      aria-label={`${GBP_LEGAL_NAME} on Google Maps`}
      className={cn(
        compact ? 'mt-2 text-[0.7rem] leading-relaxed' : 'text-xs leading-relaxed sm:text-sm',
        onDark ? 'text-white/90' : 'text-[#372a20]/85',
        className
      )}
    >
      <p className={cn('font-medium', onDark ? 'text-white' : 'text-[#0f2b1e]')}>
        {GBP_LEGAL_NAME}
        {compact ? null : ` · ${GBP_CATEGORY}`}
      </p>
      {compact ? null : (
        <p>
          {GBP_ADDRESS_LINE} · {GBP_HOURS_LABEL} · Service area {GBP_SERVICE_AREA_LABEL}
        </p>
      )}
      <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
        <Link href={`tel:${GBP_PHONE_E164}`} className={linkClass}>
          Call {GBP_PHONE_DISPLAY}
        </Link>
        <Link href={GBP_SMS_HREF} className={linkClass}>
          Text
        </Link>
        <Link href={GBP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Directions
        </Link>
        <Link href={GBP_GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Google reviews
        </Link>
        <Link href={GBP_PROFILE_SHARE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Google profile
        </Link>
      </p>
      {compact ? null : (
        <p className="mt-1">
          {GBP_ACCESSIBILITY_FEATURES.join(' · ')}
          {GBP_VETERAN_OWNED ? ' · Veteran-owned' : null}
        </p>
      )}
    </nav>
  )
}
