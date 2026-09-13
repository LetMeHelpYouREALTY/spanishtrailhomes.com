'use client'

import { useCallback, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { featuredListingsPreview } from '@/lib/spanishTrailContent'
import { getSiteImageUrl } from '@/lib/cloudflare-images'
import { cn } from '@/lib/utils'
import {
  trackFeaturedListingView,
  trackFeaturedListingClick,
  trackRealscoutSignupFromPreview,
} from '@/lib/analytics'

/** Dr. Jan Duffy RealScout search – all featured listing clicks go here. */
const REALSCOUT_LISTINGS_URL = 'https://searchforaffordablehomes.com/neighborhood/83/spanish-trails'

function listingTypeFromHref(href: string): string {
  if (href.includes('single-family')) return 'estate'
  if (href.includes('condo-townhouse')) return 'villa'
  return 'listing'
}

type FeaturedListingsProps = {
  /** Active listing count from market stats; used for "View X more properties" copy. */
  activeListings?: number
}

export function FeaturedListings({ activeListings = 72 }: FeaturedListingsProps) {
  useEffect(() => {
    trackFeaturedListingView(featuredListingsPreview.length)
  }, [])

  const handleCardClick = useCallback((listing: (typeof featuredListingsPreview)[0]) => {
    trackFeaturedListingClick(listing.price, listingTypeFromHref(listing.href))
  }, [])

  const handleCtaClick = useCallback(() => {
    trackRealscoutSignupFromPreview('featured_grid')
  }, [])

  return (
    <div className="mt-12">
      <h3 className="font-heading text-2xl font-semibold text-[#1f2a24] sm:text-3xl">
        Featured Spanish Trail Listings
      </h3>
      <p className="mt-2 text-base text-[#372a20]/85">
        <Link
          href={REALSCOUT_LISTINGS_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCtaClick}
          className="text-[#0f2b1e] underline-offset-4 hover:underline"
        >
          View {activeListings} more properties with free search account
        </Link>
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {featuredListingsPreview.map((listing) => (
          <article
            key={listing.mls}
            className="group relative overflow-hidden rounded-xl border border-[#d8cdbf] bg-white shadow-md transition-shadow hover:shadow-xl"
          >
            <Link
              href={REALSCOUT_LISTINGS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCardClick(listing)}
              className="flex w-full flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2b1e] focus-visible:ring-offset-2"
              aria-label={`View Spanish Trail homes with Dr. Jan Duffy – ${listing.address} ${listing.price}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e4dc]">
                <Image
                  src={getSiteImageUrl(listing.imageId)}
                  alt={`Spanish Trail Las Vegas guard-gated home at ${listing.address} — ${listing.price}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="absolute left-0 top-0 p-3">
                  <span className="rounded-md bg-[#0f2b1e] px-2 py-1 text-sm font-semibold text-white shadow">
                    {listing.price}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-sm font-medium text-white drop-shadow-md">
                    {listing.beds} bed · {listing.baths} bath
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="rounded-md bg-[#0f2b1e] px-4 py-2 text-sm font-medium text-white shadow-lg">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="truncate text-sm font-medium text-[#1f2a24]" title={listing.address}>
                  {listing.address}
                </p>
                <p className="mt-0.5 text-xs text-[#372a20]/70">{listing.mls}</p>
              </div>
            </Link>
            {/* Schema.org RealEstateListing per card */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'RealEstateListing',
                  name: `Spanish Trail home at ${listing.address}`,
                  description: `${listing.beds} bed, ${listing.baths} bath Spanish Trail home at ${listing.address} for ${listing.price}`,
                  url: listing.href,
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: listing.address,
                    addressLocality: 'Las Vegas',
                    addressRegion: 'NV',
                    postalCode: '89113',
                    addressCountry: 'US',
                  },
                  offers: {
                    '@type': 'Offer',
                    price: Number(listing.price.replace(/[$,]/g, '')),
                    priceCurrency: 'USD',
                  },
                  numberOfRooms: listing.beds,
                }),
              }}
            />
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href={REALSCOUT_LISTINGS_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCtaClick}
          className={cn(
            'inline-flex w-full items-center justify-center rounded-full bg-[#0f2b1e] px-6 py-4 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#0f2b1e]/90 focus-visible:ring-2 focus-visible:ring-[#0f2b1e] focus-visible:ring-offset-2 sm:w-auto sm:min-w-[280px]',
          )}
          aria-label="Search all Spanish Trail homes with Dr. Jan Duffy RealScout"
        >
          Search All Spanish Trail Homes →
        </Link>
      </div>
    </div>
  )
}
