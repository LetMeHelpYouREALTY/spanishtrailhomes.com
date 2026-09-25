import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SectionBanner } from '@/components/heading-media'
import { GbpLocalActions } from '@/components/gbp-local-actions'
import { GoogleMapEmbed } from '@/components/google-map-embed'
import {
  createBreadcrumbSchema,
  createFaqPageSchema,
  createWebPageSchema,
  getCanonicalUrl,
} from '@/lib/structuredData'
import { sitePhotoOg } from '@/lib/site-images'
import {
  GBP_EMAIL,
  GBP_FULL_ADDRESS,
  GBP_HOURS_DISPLAY,
  GBP_LEGAL_NAME,
  GBP_PHONE_DISPLAY,
  GBP_PHONE_E164,
  GBP_SERVICE_AREA_LABEL,
} from '@/lib/gbp-business'

const pageUrl = 'https://www.spanishtrailhomes.com/find-our-locations'
const pageDescription =
  'Visit Spanish Trail | Homes By Dr. Jan Duffy at 5050 Spanish Trail Ln, Las Vegas, NV 89113. Hours Sunday–Saturday 8:00 AM–8:00 PM. Call (702) 766-3299 for directions, gate access, and private tours.'

const faqContent = [
  {
    question: 'Is this a store or a real estate office?',
    answer:
      'Spanish Trail | Homes By Dr. Jan Duffy is a real estate practice, not a retail store. Consultations and tours start at 5050 Spanish Trail Ln, Las Vegas, NV 89113, by appointment. Call (702) 766-3299.',
  },
  {
    question: 'Is parking accessible?',
    answer:
      'Wheelchair accessible parking and a wheelchair accessible entrance are listed on the Google Business Profile. Call ahead so the gate and parking plan match your showing.',
  },
  {
    question: 'What ZIP codes does Dr. Duffy serve?',
    answer:
      'The office and community are in Las Vegas, NV 89113. Service coverage also includes Spanish Trail, Summerlin, Spring Valley, and Las Vegas 89117 for buyers comparing nearby luxury golf communities.',
  },
  {
    question: 'How do I book a showing at this location?',
    answer:
      'Call or text (702) 766-3299 or email DrDuffySells@SpanishTrailHomes.com. Dr. Duffy puts your name on the Tropicana or Hacienda gate list and meets you at the listed address.',
  },
]

const webPageSchema = createWebPageSchema({
  name: 'Office Location | 5050 Spanish Trail Ln, Las Vegas NV 89113',
  description: pageDescription,
  path: '/find-our-locations',
  extra: {
    about: { '@id': 'https://www.spanishtrailhomes.com/#localBusiness' },
  },
})

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Office Location', url: '/find-our-locations' },
])

export const metadata: Metadata = {
  title: 'Office Location | 5050 Spanish Trail Ln, Las Vegas 89113 | Dr. Jan Duffy',
  description: pageDescription,
  alternates: { canonical: getCanonicalUrl('/find-our-locations') },
  openGraph: {
    url: pageUrl,
    title: 'Visit Spanish Trail | Homes By Dr. Jan Duffy',
    description: pageDescription,
    images: [sitePhotoOg('h1-office-exterior')],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Location | Spanish Trail Homes | Las Vegas 89113',
    description: pageDescription,
  },
}

export default function FindOurLocationsPage() {
  return (
    <SiteShell showVisitOffice={false}>
      <Script id="find-our-locations-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify([webPageSchema, breadcrumbSchema, createFaqPageSchema(faqContent)])}
      </Script>

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Office Location', href: '/find-our-locations' },
        ]}
      />

      <section
        className="relative isolate overflow-hidden bg-[#0f2b1e] px-6 py-20 text-primary-foreground sm:py-28"
        aria-labelledby="find-locations-heading"
      >
        <SectionBanner headingId="find-locations-heading" level="h1" priority />
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary-foreground/80">Google Business Profile</p>
          <h1
            id="find-locations-heading"
            className="mt-4 font-[var(--font-playfair)] text-3xl tracking-tight sm:text-4xl md:text-5xl"
          >
            Visit {GBP_LEGAL_NAME}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-primary-foreground/90 sm:text-lg">
            {GBP_FULL_ADDRESS}. Hours {GBP_HOURS_DISPLAY}. Call{' '}
            <Link href={`tel:${GBP_PHONE_E164}`} className="underline underline-offset-4">
              {GBP_PHONE_DISPLAY}
            </Link>{' '}
            before you drive so the guard gate has your name.
          </p>
          <GbpLocalActions variant="dark" className="mt-10 justify-center" />
        </div>
      </section>

      <RealScoutSection id="bhhs-listings" />

      <section className="bg-white py-16 sm:py-20" aria-labelledby="choose-locations-heading">
        <SectionBanner headingId="choose-locations-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="choose-locations-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Showing office at Spanish Trail Country Club
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
            One location, one community specialty. Dr. Jan Duffy meets buyers and sellers here for pricing consults,
            listing strategy, and gated tours.
          </p>
          <div className="mt-8 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0f2b1e]">{GBP_LEGAL_NAME}</h3>
            <p className="mt-2 text-sm text-[#372a20]/85">{GBP_FULL_ADDRESS}</p>
            <p className="mt-1 text-sm">
              <Link href={`tel:${GBP_PHONE_E164}`} className="underline underline-offset-2">
                {GBP_PHONE_DISPLAY}
              </Link>
              {' · '}
              <Link href={`mailto:${GBP_EMAIL}`} className="underline underline-offset-2">
                {GBP_EMAIL}
              </Link>
            </p>
            <p className="mt-2 text-xs text-[#372a20]/75">
              {GBP_HOURS_DISPLAY} · Service area: {GBP_SERVICE_AREA_LABEL}, Summerlin, Spring Valley, Las Vegas 89117
            </p>
          </div>
        </div>
      </section>

      <section id="map" className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="map-heading">
        <SectionBanner headingId="map-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="map-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Map, hours, and Google actions
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              <address className="not-italic text-base leading-relaxed text-[#372a20]/85">
                <strong className="text-[#0f2b1e]">Address</strong>
                <br />
                5050 Spanish Trail Ln
                <br />
                Las Vegas, NV 89113
              </address>
              <GbpLocalActions />
              <p className="text-sm text-[#372a20]/80">
                Wheelchair accessible parking lot and wheelchair accessible entrance (matches Google Business Profile).
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#d8cdbf] bg-white shadow-lg">
              <GoogleMapEmbed />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="locations-faq-heading">
        <SectionBanner headingId="locations-faq-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="locations-faq-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Location FAQ
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqContent.map((item) => (
              <article key={item.question} className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6">
                <h3 className="text-lg font-semibold text-[#0f2b1e]">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#372a20]/85">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
