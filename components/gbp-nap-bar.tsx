'use client'

import Link from 'next/link'

import { trackPhoneClick } from '@/lib/analytics'
import { TrackedSmsLink } from '@/components/tracked-sms-link'
import {
  GBP_DIRECTIONS_URL,
  GBP_EMAIL,
  GBP_FULL_ADDRESS,
  GBP_GOOGLE_REVIEW_URL,
  GBP_HOURS_SHORT,
  GBP_LEGAL_NAME,
  GBP_MAPS_URL,
  GBP_PHONE_DISPLAY,
  GBP_PHONE_E164,
  GBP_PROFILE_SHARE_URL,
  GBP_SERVICE_AREA_LABEL,
} from '@/lib/gbp-business'

export function GbpNapBar() {
  return (
    <section
      aria-label="Business name, address, and phone"
      className="border-t border-[#d8cdbf] bg-[#f8f5ef] text-[#1f2a24]"
    >
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-6 sm:px-6">
        <p className="font-heading text-lg font-semibold tracking-wide text-[#0f2b1e] sm:text-xl">
          {GBP_LEGAL_NAME}
        </p>
        <p className="text-sm leading-relaxed text-[#372a20]/90">
          Real estate agent · {GBP_FULL_ADDRESS} · Hours: {GBP_HOURS_SHORT} · Service area {GBP_SERVICE_AREA_LABEL}
        </p>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-[#0f2b1e]">
          <Link
            href={`tel:${GBP_PHONE_E164}`}
            className="min-h-11 inline-flex items-center underline-offset-4 hover:underline"
            onClick={() => trackPhoneClick('nap-bar')}
          >
            Call {GBP_PHONE_DISPLAY}
          </Link>
          <span aria-hidden>·</span>
          <TrackedSmsLink
            intent="question"
            href={`sms:${GBP_PHONE_E164}?body=I%20have%20a%20question%20about%20Spanish%20Trail%20homes`}
            className="min-h-11 inline-flex items-center underline-offset-4 hover:underline"
            aria-label={`Text ${GBP_PHONE_DISPLAY}`}
          >
            Text
          </TrackedSmsLink>
          <span aria-hidden>·</span>
          <Link
            href={GBP_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 inline-flex items-center underline-offset-4 hover:underline"
          >
            Directions
          </Link>
          <span aria-hidden>·</span>
          <Link
            href={GBP_GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 inline-flex items-center underline-offset-4 hover:underline"
          >
            Google reviews
          </Link>
          <span aria-hidden>·</span>
          <Link
            href={GBP_PROFILE_SHARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 inline-flex items-center underline-offset-4 hover:underline"
          >
            Google profile
          </Link>
          <span aria-hidden>·</span>
          <Link href={`mailto:${GBP_EMAIL}`} className="min-h-11 inline-flex items-center underline-offset-4 hover:underline">
            {GBP_EMAIL}
          </Link>
        </p>
        <p className="text-xs leading-relaxed text-[#6f5237]">
          Wheelchair accessible entrance · Wheelchair accessible parking lot · Veteran-owned
        </p>
        <p className="sr-only">
          Map: {GBP_MAPS_URL}
        </p>
      </div>
    </section>
  )
}
