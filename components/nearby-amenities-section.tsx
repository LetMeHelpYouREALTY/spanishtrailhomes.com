import Link from 'next/link'

import { HyperlocalAmenityMap } from '@/components/hyperlocal-amenity-map'
import { SectionBanner } from '@/components/heading-media'
import { Button } from '@/components/ui/button'
import {
  AMENITIES_PAGE_PATH,
  SPANISH_TRAIL_COMMUNITY,
  type AmenityCategoryId,
} from '@/lib/hyperlocal-amenities'

type NearbyAmenitiesSectionProps = {
  headingId: string
  /** e.g. "Life Near Spanish Trail" */
  title?: string
  description?: string
  defaultCategory?: AmenityCategoryId
  /** Compact map on interior pages */
  compact?: boolean
  showStaticList?: boolean
}

export function NearbyAmenitiesSection({
  headingId,
  title = `Life Near ${SPANISH_TRAIL_COMMUNITY.name}`,
  description = `Explore golf, grocery, healthcare, schools, and commute anchors around ${SPANISH_TRAIL_COMMUNITY.name} in ${SPANISH_TRAIL_COMMUNITY.city} ${SPANISH_TRAIL_COMMUNITY.postalCode}. Filter the map, then open the full amenities guide for FAQs and buyer context.`,
  defaultCategory = 'golf',
  compact = false,
  showStaticList = false,
}: NearbyAmenitiesSectionProps) {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby={headingId}>
      <SectionBanner headingId={headingId} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">What&apos;s nearby</p>
        <h2 id={headingId} className="mt-3 font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#372a20]/85">{description}</p>
        <div className="mt-10">
          <HyperlocalAmenityMap
            defaultCategory={defaultCategory}
            showStaticList={showStaticList}
            mapHeightClassName={
              compact ? 'min-h-[320px] h-[320px] sm:h-[360px]' : 'min-h-[420px] h-[420px] sm:h-[480px]'
            }
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href={AMENITIES_PAGE_PATH}>Full nearby amenities guide</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0f2b1e]/50 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e]"
          >
            <Link href="/spanish-trail-lifestyle">Spanish Trail lifestyle</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
