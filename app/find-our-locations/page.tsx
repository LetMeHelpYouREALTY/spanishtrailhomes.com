import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { BrandLockup } from '@/components/brand-lockup'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SectionBanner } from '@/components/heading-media'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { RealScoutSection } from '@/components/realscout-section'
import {
  GBP_DIRECTIONS_URL,
  GBP_EMAIL,
  GBP_GEO,
  GBP_GOOGLE_REVIEW_URL,
  GBP_LEGAL_NAME,
  GBP_LOCALITY,
  GBP_MAP_EMBED_URL,
  GBP_PHONE_DISPLAY,
  GBP_PHONE_E164,
  GBP_POSTAL,
  GBP_PROFILE_SHARE_URL,
  GBP_REGION,
  GBP_SMS_HREF,
  GBP_STREET,
} from '@/lib/gbp-business'
import {
  createOgImageUrl,
  createWebPageSchema,
  getCanonicalUrl,
  structuredDataSiteUrl,
} from '@/lib/structuredData'

const path = '/find-our-locations'
const pageUrl = `${structuredDataSiteUrl}${path}`
const pageTitle = 'Spanish Trail Homes office | 5050 Spanish Trail Ln, Las Vegas 89113'
const pageDescription =
  'Visit Dr. Jan Duffy at 5050 Spanish Trail Ln, Las Vegas, NV 89113. Call (702) 766-3299 for directions, guard-gate showings, and Spanish Trail home tours. Hours Sunday–Saturday 9:00 AM–6:00 PM.'

const webPageSchema = createWebPageSchema({
  name: pageTitle,
  description: pageDescription,
  path,
  extra: {
    about: { '@id': `${structuredDataSiteUrl}#localBusiness` },
  },
})

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl(path),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Homes office',
        subtitle: '5050 Spanish Trail Ln, Las Vegas 89113',
        eyebrow: GBP_LEGAL_NAME,
      }),
    ],
  },
}

export default function FindOurLocationsPage() {
  return (
    <SiteShell>
      <Script id="find-our-locations-schema" type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </Script>

      <section className="relative isolate overflow-hidden bg-[#0f2b1e] px-6 py-20 text-primary-foreground sm:py-28" aria-labelledby="find-locations-heading">
        <SectionBanner headingId="find-locations-heading" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary-foreground/80">Office and map</p>
          <BrandLockup as="h1" id="find-locations-heading" variant="hero" tone="dark" align="center" className="mt-4" />
          <p className="mt-6 mx-auto max-w-2xl text-base leading-7 text-primary-foreground/90 sm:text-lg">
            {GBP_STREET}, {GBP_LOCALITY}, {GBP_REGION} {GBP_POSTAL}. Call{' '}
            <a href={`tel:${GBP_PHONE_E164}`} className="underline underline-offset-2">
              {GBP_PHONE_DISPLAY}
            </a>{' '}
            for Tropicana gate access and a private tour.
          </p>
        </div>
      </section>

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Office location' }]} />
        </div>
      </div>

      <RealScoutSection id="bhhs-listings" />

      <section className="bg-white py-16 sm:py-20" aria-labelledby="office-nap-heading">
        <SectionBanner headingId="office-nap-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="office-nap-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Address, hours, and directions
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
            Dr. Jan Duffy meets buyers and sellers at Spanish Trail Country Club. License S.0197614.LLC, Berkshire Hathaway
            HomeServices Nevada Properties. Service area: Las Vegas, NV 89113, USA.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6 text-base text-[#372a20]/85">
              <p>
                <strong className="text-[#0f2b1e]">Address</strong>
                <br />
                {GBP_STREET}
                <br />
                {GBP_LOCALITY}, {GBP_REGION} {GBP_POSTAL}
              </p>
              <p>
                <strong className="text-[#0f2b1e]">Phone</strong>{' '}
                <Link href={`tel:${GBP_PHONE_E164}`} className="underline underline-offset-2">
                  {GBP_PHONE_DISPLAY}
                </Link>
              </p>
              <p>
                <strong className="text-[#0f2b1e]">Email</strong>{' '}
                <Link href={`mailto:${GBP_EMAIL}`} className="underline underline-offset-2">
                  {GBP_EMAIL}
                </Link>
              </p>
              <p>
                <strong className="text-[#0f2b1e]">Hours</strong>
                <br />
                Sunday–Saturday 9:00 AM–6:00 PM
              </p>
              <p className="text-sm">
                Coordinates {GBP_GEO.latitude}, {GBP_GEO.longitude}. Main vehicle gates are on Tropicana; confirm showing
                access with Dr. Duffy before you arrive.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-[#1f4a35]">
                  <Link href={`tel:${GBP_PHONE_E164}`}>Call {GBP_PHONE_DISPLAY}</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e]">
                  <Link href={GBP_SMS_HREF}>Text {GBP_PHONE_DISPLAY}</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e]">
                  <Link href={GBP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                    Get directions
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e]">
                  <Link href={GBP_GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                    View Google reviews
                  </Link>
                </Button>
              </div>
              <p className="text-sm">
                <Link href={GBP_PROFILE_SHARE_URL} className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                  Open the Google Business Profile
                </Link>
                {' · '}
                <Link href="/contact" className="underline underline-offset-2">
                  Contact and tour form
                </Link>
                {' · '}
                <Link href="/site-index" className="underline underline-offset-2">
                  Site index
                </Link>
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] shadow-lg">
              <iframe
                title={`${GBP_LEGAL_NAME} at ${GBP_STREET}, ${GBP_LOCALITY}, ${GBP_REGION} ${GBP_POSTAL}`}
                src={GBP_MAP_EMBED_URL}
                className="h-[400px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
