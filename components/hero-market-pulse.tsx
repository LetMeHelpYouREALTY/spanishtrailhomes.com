'use client'

import { useEffect, useState } from 'react'
import { RealScoutSearchLink } from '@/components/listing-image-link'
import { trackUrgencyBannerView } from '@/lib/analytics'
import { cn } from '@/lib/utils'

const FALLBACK = {
  touringThisWeek: 23,
  activeListings: 74,
}

type HeroMarketPulseProps = {
  className?: string
}

/**
 * In-hero market proof. Replaces the sitewide yellow urgency bar so the first
 * screen is identity + listing, not stacked promo chrome (NN/g banner blindness).
 */
export function HeroMarketPulse({ className }: HeroMarketPulseProps) {
  const [stats, setStats] = useState(FALLBACK)

  useEffect(() => {
    let cancelled = false
    fetch('/api/urgency-stats')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && typeof data.touringThisWeek === 'number') {
          setStats({
            touringThisWeek: data.touringThisWeek ?? FALLBACK.touringThisWeek,
            activeListings: data.activeListings ?? FALLBACK.activeListings,
          })
        }
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    trackUrgencyBannerView('hero_market_pulse')
  }, [])

  return (
    <p className={cn('text-sm leading-relaxed text-white/90', className)}>
      {stats.touringThisWeek} buyers toured Spanish Trail this week
      {' · '}
      {stats.activeListings} homes on the market
      {' · '}
      <RealScoutSearchLink
        location="hero-market-pulse"
        className="font-medium underline underline-offset-4 hover:text-white"
      >
        See live listings
      </RealScoutSearchLink>
    </p>
  )
}
