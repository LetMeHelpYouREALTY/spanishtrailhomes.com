import Link from 'next/link'

import { GbpLocalActions } from '@/components/gbp-local-actions'
import { GoogleMapEmbed } from '@/components/google-map-embed'
import { SectionBanner } from '@/components/heading-media'
import {
  GBP_EMAIL,
  GBP_FULL_ADDRESS,
  GBP_HOURS_DISPLAY,
  GBP_LEGAL_NAME,
  GBP_PHONE_DISPLAY,
  GBP_PHONE_E164,
  GBP_SERVICE_AREA_LABEL,
} from '@/lib/gbp-business'

type VisitOfficeStripProps = {
  headingId?: string
}

/** Visible NAP, hours, Call/Directions/Reviews, and Maps pin — on every marketing page. */
export function VisitOfficeStrip({ headingId = 'visit-office-heading' }: VisitOfficeStripProps) {
  return (
    <section
      className="border-t border-[#d8cdbf] bg-[#f8f2e7] py-12 sm:py-16"
      aria-labelledby={headingId}
    >
      <SectionBanner headingId={headingId} />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">Google Business Profile</p>
          <h2 id={headingId} className="font-heading text-2xl text-[#1f2a24] sm:text-3xl">
            Visit the Spanish Trail office
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            {GBP_LEGAL_NAME}. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. License
            S.0197614.LLC.
          </p>
          <p className="text-sm leading-relaxed text-[#372a20]">
            {GBP_FULL_ADDRESS}
            <br />
            Hours: {GBP_HOURS_DISPLAY}
            <br />
            Service area: {GBP_SERVICE_AREA_LABEL} · Summerlin · Spring Valley · Las Vegas 89117
          </p>
          <p className="text-sm">
            <Link href={`tel:${GBP_PHONE_E164}`} className="font-semibold text-[#0f2b1e] underline-offset-4 hover:underline">
              {GBP_PHONE_DISPLAY}
            </Link>
            {' · '}
            <Link
              href={`mailto:${GBP_EMAIL}`}
              className="font-semibold text-[#0f2b1e] underline-offset-4 hover:underline"
            >
              {GBP_EMAIL}
            </Link>
          </p>
          <GbpLocalActions />
        </div>
        <div className="overflow-hidden rounded-3xl border border-[#d8cdbf] shadow-lg shadow-primary/10">
          <GoogleMapEmbed heightClassName="h-[280px] sm:h-[320px]" />
        </div>
      </div>
    </section>
  )
}
