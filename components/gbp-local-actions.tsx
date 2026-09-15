import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  GBP_DIRECTIONS_URL,
  GBP_GOOGLE_REVIEW_URL,
  GBP_PHONE_DISPLAY,
  GBP_PHONE_E164,
  GBP_PROFILE_SHARE_URL,
} from '@/lib/gbp-business'
import { cn } from '@/lib/utils'

type GbpLocalActionsProps = {
  className?: string
  variant?: 'light' | 'dark'
}

export function GbpLocalActions({ className, variant = 'light' }: GbpLocalActionsProps) {
  const outline =
    variant === 'dark'
      ? 'rounded-full border-white/70 px-6 py-3 text-xs uppercase tracking-[0.25em] text-white hover:bg-white/10'
      : 'rounded-full border-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#0f2b1e] hover:bg-[#0f2b1e] hover:text-white'
  const solid =
    variant === 'dark'
      ? 'rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#0f2b1e] hover:bg-[#efe5d8]'
      : 'rounded-full bg-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.25em] text-white hover:bg-[#1f4a35]'

  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <Button asChild className={solid}>
        <Link href={`tel:${GBP_PHONE_E164}`}>Call {GBP_PHONE_DISPLAY}</Link>
      </Button>
      <Button asChild variant="outline" className={outline}>
        <Link href={GBP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
          Get Directions
        </Link>
      </Button>
      <Button asChild variant="outline" className={outline}>
        <Link href={GBP_GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
          View Google Reviews
        </Link>
      </Button>
      <Button asChild variant="outline" className={outline}>
        <Link href={GBP_PROFILE_SHARE_URL} target="_blank" rel="noopener noreferrer">
          View Google Profile
        </Link>
      </Button>
    </div>
  )
}
