import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner } from '@/components/heading-media'
import { AgentPortrait } from '@/components/agent-portrait'
import {
  GBP_COUNTRY,
  GBP_DESCRIPTION,
  GBP_EMAIL,
  GBP_GEO,
  GBP_GOOGLE_REVIEW_URL,
  GBP_LEGAL_NAME,
  GBP_LOCALITY,
  GBP_MAPS_URL,
  GBP_PHONE_DISPLAY,
  GBP_PHONE_E164,
  GBP_POSTAL,
  GBP_REGION,
  GBP_STREET,
} from '@/lib/gbp-business'

const pageUrl = 'https://www.spanishtrailhomes.com/find-our-locations'
const pageDescription =
  'Visit Spanish Trail | Homes By Dr. Jan Duffy at 5050 Spanish Trail Ln, Las Vegas, NV 89113. Call (702) 766-3299, get directions, or view Google reviews. Sunday–Saturday 9:00 AM–6:00 PM.'

const mapsDirectionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=5050+Spanish+Trail+Ln,+Las+Vegas,+NV+89113'
const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1155408815076!2d-115.28609452341818!3d36.10914500736459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf27532cd0f3%3A0xba327d02c4e3709e!2sSpanish%20Trail%20Country%20Club!5e0!3m2!1sen!2sus!4v1731191452004!5m2!1sen!2sus'

const webPageSchema = createWebPageSchema({
  name: 'Office, Map & Directions | Spanish Trail Homes | Dr. Jan Duffy',
  description: pageDescription,
  path: '/find-our-locations',
  type: 'WebPage',
  extra: {
    about: {
      '@type': 'RealEstateAgent',
      name: GBP_LEGAL_NAME,
      description: GBP_DESCRIPTION,
      address: {
        '@type': 'PostalAddress',
        streetAddress: GBP_STREET,
        addressLocality: GBP_LOCALITY,
        addressRegion: GBP_REGION,
        postalCode: GBP_POSTAL,
        addressCountry: GBP_COUNTRY,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: GBP_GEO.latitude,
        longitude: GBP_GEO.longitude,
      },
      telephone: GBP_PHONE_E164,
      url: pageUrl,
      hasMap: GBP_MAPS_URL,
    },
  },
})

export const metadata: Metadata = {
  title: 'Office, Map & Directions | Spanish Trail Homes | Dr. Jan Duffy',
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/find-our-locations'),
  },
  openGraph: {
    url: pageUrl,
    title: 'Office, Map & Directions | Spanish Trail Homes',
    description: pageDescription,
    images: [
      createOgImageUrl({
        title: 'Visit Spanish Trail Homes',
        subtitle: '5050 Spanish Trail Ln · Las Vegas NV 89113',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office, Map & Directions | Dr. Jan Duffy',
    description: pageDescription,
    images: [
      createOgImageUrl({
        title: 'Visit Spanish Trail Homes',
        subtitle: `${GBP_STREET}, ${GBP_LOCALITY} ${GBP_POSTAL}`,
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function FindOurLocationsPage() {
  return (
    <SiteShell>
      <Script id="find-our-locations-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageSchema)}
      </Script>

      <header
        className="relative overflow-hidden bg-[#0f2b1e] px-6 py-20 text-primary-foreground sm:py-28"
        aria-labelledby="find-locations-heading"
      >
        <SectionBanner headingId="find-locations-heading" />
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <AgentPortrait placement="office-map" size="md" className="mb-6" />
          <p className="text-xs uppercase tracking-[0.5em] text-primary-foreground/80">Office & directions</p>
          <h1
            id="find-locations-heading"
            className="mt-4 font-[var(--font-playfair)] text-3xl tracking-tight sm:text-4xl md:text-5xl"
          >
            Visit Spanish Trail | Homes By Dr. Jan Duffy
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/90 sm:text-lg">
            {GBP_STREET}, {GBP_LOCALITY}, {GBP_REGION} {GBP_POSTAL}. Call {GBP_PHONE_DISPLAY} for gate access and private
            tours. Sunday–Saturday 9:00 AM–6:00 PM.
          </p>
        </div>
      </header>

      <RealScoutSection
        id="bhhs-listings"
        title="Spanish Trail homes Dr. Duffy can show this week"
        description="Live office inventory in Las Vegas 89113. Confirm the Spanish Trail street with Dr. Duffy before a tour."
        priceMin="500000"
      />

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Office & directions' },
            ]}
          />
        </div>
      </div>

      <section id="map" className="bg-white py-20 sm:py-24" aria-labelledby="map-heading">
        <SectionBanner headingId="map-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="map-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Office, map, and hours
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
            Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy meets buyers and sellers at Spanish Trail
            Country Club. Call before you arrive so the guard gate has your name.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              <div className="space-y-2 text-base text-[#372a20]/85">
                <p>
                  <strong className="text-[#0f2b1e]">Business:</strong>
                  <br />
                  {GBP_LEGAL_NAME}
                </p>
                <p>
                  <strong className="text-[#0f2b1e]">Address:</strong>
                  <br />
                  {GBP_STREET}
                  <br />
                  {GBP_LOCALITY}, {GBP_REGION} {GBP_POSTAL}
                </p>
                <p>
                  <strong className="text-[#0f2b1e]">Phone:</strong>{' '}
                  <Link href={`tel:${GBP_PHONE_E164}`} className="underline underline-offset-2 hover:text-[#0f2b1e]">
                    {GBP_PHONE_DISPLAY}
                  </Link>
                </p>
                <p>
                  <strong className="text-[#0f2b1e]">Email:</strong>{' '}
                  <Link href={`mailto:${GBP_EMAIL}`} className="underline underline-offset-2 hover:text-[#0f2b1e]">
                    {GBP_EMAIL}
                  </Link>
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-[#1f4a35]"
                >
                  <Link href={`tel:${GBP_PHONE_E164}`}>Call {GBP_PHONE_DISPLAY}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e] hover:text-white"
                >
                  <Link href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e] hover:text-white"
                >
                  <Link href={GBP_GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                    View Google Reviews
                  </Link>
                </Button>
              </div>
              <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 text-sm text-[#372a20]/85">
                <p className="mb-2 font-semibold uppercase tracking-[0.2em] text-[#0f2b1e]">Business hours</p>
                <p>Sunday–Saturday 9:00 AM–6:00 PM</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] shadow-lg">
              <iframe
                title={`${GBP_LEGAL_NAME} — ${GBP_STREET}, ${GBP_LOCALITY}, ${GBP_REGION} ${GBP_POSTAL}`}
                src={mapEmbedUrl}
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
