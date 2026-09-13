'use client'

import { AgentPortrait } from '@/components/agent-portrait'
import { PropertyLightboxTrigger } from '@/components/property-lightbox'

export function TourCTAStrip() {
  return (
    <section
      className="border-y border-[#d8cdbf] bg-[#fdf9f3] py-10 sm:py-12"
      aria-labelledby="tour-cta-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:gap-8">
          <AgentPortrait placement="tour" size="md" />
          <div>
            <h2 id="tour-cta-heading" className="font-heading text-xl font-semibold text-[#0f2b1e] sm:text-2xl">
              Ready to walk through these homes?
            </h2>
            <p className="mt-1 text-sm text-[#372a20]/80 sm:text-base">
              Book a private tour with Dr. Jan Duffy — 30 minutes, no obligation.
            </p>
          </div>
          <PropertyLightboxTrigger
            openFrom="listings"
            variant="primary"
            className="shrink-0 rounded-full bg-[#0f2b1e] px-8 py-3 text-xs uppercase tracking-[0.4em] text-white shadow-md hover:bg-[#0f2b1e]/90"
          >
            See Available Homes 🏡
          </PropertyLightboxTrigger>
        </div>
      </div>
    </section>
  )
}
