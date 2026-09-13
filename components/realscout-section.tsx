import { ReactNode } from 'react'

import { WidgetLoadingOverlay } from '@/components/widget-loading-overlay'

interface RealScoutSectionProps {
  id?: string
  eyebrow?: string
  title?: string
  description?: ReactNode
  priceMin?: string
  priceMax?: string
  propertyTypes?: string
  className?: string
}

export function RealScoutSection({
  id,
  eyebrow = 'Real-Time Inventory',
  title = 'Spanish Trail Listings Updated Daily',
  description = (
    <>
      Explore active Spanish Trail homes curated through Berkshire Hathaway HomeServices. Filter by price range, property style, and connect with Dr. Jan Duffy for private tours or off-market opportunities.
    </>
  ),
  priceMin = '0',
  priceMax,
  propertyTypes = ',SFR',
  className,
}: RealScoutSectionProps) {
  const sectionId = id ?? 'spanish-trail-listings'
  const headingId = `${sectionId}-heading`

  return (
    <section
      id={sectionId}
      className={`bg-[#f9f4eb] py-12 sm:py-16 ${className ?? ''}`}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#372a20]/85">
            {description}
          </p>
        </div>
        <div className="relative mt-8 min-h-[280px] rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-xl shadow-primary/10">
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="NEWEST"
            listing-status="For Sale"
            property-types={propertyTypes}
            price-min={priceMin}
            price-max={priceMax}
          />
          <WidgetLoadingOverlay selector="realscout-office-listings" message="Loading listings…" />
        </div>
      </div>
    </section>
  )
}
