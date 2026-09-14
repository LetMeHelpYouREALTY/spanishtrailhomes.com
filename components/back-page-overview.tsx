import Link from 'next/link'

import {
  GBP_ADDRESS_LINE,
  GBP_HOURS_LABEL,
  GBP_LEGAL_NAME,
  GBP_MAPS_URL,
  GBP_PHONE_DISPLAY,
  GBP_PHONE_E164,
} from '@/lib/gbp-business'
import type { BackPageOverviewContent } from '@/lib/back-page-overviews'

type BackPageOverviewProps = BackPageOverviewContent & {
  headingId: string
}

/**
 * Extractable Location / Size / Pricing block for interior URLs.
 * Modeled on how Google answers gated-community queries (overview + key features + NAP).
 */
export function BackPageOverview({
  headingId,
  title,
  summary,
  facts,
  features,
  links = [],
}: BackPageOverviewProps) {
  return (
    <section
      className="border-y border-[#e8ddd0] bg-[#faf8f5] py-12 sm:py-16"
      aria-labelledby={headingId}
      data-back-page-overview=""
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id={headingId} className="font-heading text-3xl font-semibold tracking-tight text-[#1f2a24] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#372a20]">{summary}</p>

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-2xl border border-[#e8ddd0] bg-white p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6f5237]">{fact.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#2d2318]">{fact.value}</dd>
            </div>
          ))}
        </dl>

        {features.length > 0 ? (
          <>
            <h3 className="mt-10 font-heading text-2xl font-semibold text-[#1f2a24]">Key features</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="rounded-xl border border-[#e8ddd0] bg-white px-4 py-3 text-sm leading-relaxed text-[#372a20]">
                  {feature}
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {links.length > 0 ? (
          <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium" aria-label="Related Spanish Trail pages">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0f2b1e] underline underline-offset-4 hover:no-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}

        <p className="mt-8 text-sm leading-relaxed text-[#5c4a3a]">
          {GBP_LEGAL_NAME}. {GBP_ADDRESS_LINE}. {GBP_HOURS_LABEL}.{' '}
          <a href={`tel:${GBP_PHONE_E164}`} className="underline underline-offset-4 hover:no-underline">
            Call {GBP_PHONE_DISPLAY}
          </a>
          {' · '}
          <a href={GBP_MAPS_URL} className="underline underline-offset-4 hover:no-underline">
            Directions
          </a>
          .
        </p>
      </div>
    </section>
  )
}
