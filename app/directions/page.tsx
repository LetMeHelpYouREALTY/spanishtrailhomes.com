import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CardVisual, SectionBanner } from '@/components/heading-media'
import { GbpLocalActions } from '@/components/gbp-local-actions'
import { GoogleMapEmbed } from '@/components/google-map-embed'
import {
  createBreadcrumbSchema,
  createFaqPageSchema,
  createWebPageSchema,
  getCanonicalUrl,
} from '@/lib/structuredData'
import { sitePhotoOg } from '@/lib/site-images'
import { getAbsoluteSiteImageUrl } from '@/lib/cloudflare-images'
import {
  GBP_DIRECTIONS_URL,
  GBP_EMAIL,
  GBP_FULL_ADDRESS,
  GBP_HOURS_DISPLAY,
  GBP_LEGAL_NAME,
  GBP_PHONE_DISPLAY,
  GBP_PHONE_E164,
} from '@/lib/gbp-business'

const pageUrl = 'https://www.spanishtrailhomes.com/directions'
const pageDescription =
  'Directions to Spanish Trail | Homes By Dr. Jan Duffy at 5050 Spanish Trail Ln, Las Vegas, NV 89113. Call (702) 766-3299 for guard-gate showing access from Tropicana, Rainbow, Harry Reid Airport, or the Strip.'

const faqContent = [
  {
    question: 'Where is the Spanish Trail Homes office in Las Vegas?',
    answer:
      'Spanish Trail | Homes By Dr. Jan Duffy is at 5050 Spanish Trail Ln, Las Vegas, NV 89113, inside Spanish Trail Country Club. Hours are Sunday–Saturday 9:00 AM–6:00 PM. Call (702) 766-3299 before you drive so Dr. Duffy can arrange gate access.',
  },
  {
    question: 'How do I get to Spanish Trail from Harry Reid International Airport?',
    answer:
      'From LAS, take I-215 west toward Rainbow / Tropicana. Exit toward S. Rainbow Blvd, then west on Tropicana Avenue to the Spanish Trail gates. Drive time is typically 18–25 minutes depending on traffic. Call (702) 766-3299 for a live ETA and a showing appointment.',
  },
  {
    question: 'Can I enter the guard gates without an appointment?',
    answer:
      'Spanish Trail is a private guard-gated community. Visitors need a resident or listing-agent pass. Dr. Jan Duffy schedules private tours and notifies the Tropicana or Hacienda gate so you are on the list. Do not arrive unannounced.',
  },
  {
    question: 'Which gate should buyers use?',
    answer:
      'Most showings use the Tropicana Avenue gate. Some enclaves are closer to the Hacienda Avenue gate. Dr. Duffy confirms the gate, street, and parking before each tour so you are not turned around at the booth.',
  },
]

const webPageSchema = createWebPageSchema({
  name: 'Directions to Spanish Trail Homes | 5050 Spanish Trail Ln, Las Vegas 89113',
  description: pageDescription,
  path: '/directions',
  extra: {
    about: { '@id': 'https://www.spanishtrailhomes.com/#localBusiness' },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: getAbsoluteSiteImageUrl('h2-office-map'),
    },
  },
})

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Directions', url: '/directions' },
])

export const metadata: Metadata = {
  title: 'Directions to Spanish Trail Homes | Las Vegas 89113 | Dr. Jan Duffy',
  description: pageDescription,
  alternates: { canonical: getCanonicalUrl('/directions') },
  openGraph: {
    url: pageUrl,
    title: 'Directions to Spanish Trail | Homes By Dr. Jan Duffy',
    description: pageDescription,
    images: [sitePhotoOg('h2-directions-approach')],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Directions to Spanish Trail Homes | Las Vegas 89113',
    description: pageDescription,
  },
}

const ROUTES = [
  {
    title: 'From Tropicana & Rainbow',
    detail:
      'The main community entrance is west of S. Rainbow Blvd on Tropicana Avenue. This is the usual gate for first-time buyers and most listing tours.',
  },
  {
    title: 'From Harry Reid Airport (LAS)',
    detail:
      'I-215 west toward Rainbow, then Tropicana west to the Spanish Trail gates. Plan 18–25 minutes plus gate check-in.',
  },
  {
    title: 'From the Las Vegas Strip',
    detail:
      'Tropicana Avenue west past I-15 and Rainbow. Evening traffic can add 10 minutes. Book the tour first so the gate has your name.',
  },
  {
    title: 'From Summerlin / 89117',
    detail:
      'Take the 215 south or Rainbow south into Spring Valley, then west on Tropicana. Spanish Trail sits in ZIP 89113, about 10–15 minutes from many Summerlin addresses.',
  },
]

export default function DirectionsPage() {
  return (
    <SiteShell showVisitOffice={false}>
      <Script id="directions-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify([webPageSchema, breadcrumbSchema, createFaqPageSchema(faqContent)])}
      </Script>

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Directions', href: '/directions' },
            ]}
          />
        </div>
      </div>

      <section
        className="relative isolate overflow-hidden bg-[#0f2b1e] py-16 text-primary-foreground sm:py-24"
        aria-labelledby="directions-heading"
      >
        <SectionBanner headingId="directions-heading" level="h1" priority />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs uppercase tracking-[0.5em] text-primary-foreground/80">Google Maps</p>
          <h1 id="directions-heading" className="mt-3 font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl">
            Directions to Spanish Trail | Homes By Dr. Jan Duffy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            {GBP_LEGAL_NAME} · {GBP_FULL_ADDRESS}. Call{' '}
            <Link href={`tel:${GBP_PHONE_E164}`} className="underline underline-offset-4">
              {GBP_PHONE_DISPLAY}
            </Link>{' '}
            for a private tour and gate pass.
          </p>
          <GbpLocalActions variant="dark" className="mt-8 justify-center" />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="map-heading">
        <SectionBanner headingId="map-heading" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 id="map-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
              Pin on Google Maps
            </h2>
            <address className="mt-4 not-italic text-base leading-relaxed text-[#372a20]/85">
              <strong className="text-[#0f2b1e]">{GBP_LEGAL_NAME}</strong>
              <br />
              {GBP_FULL_ADDRESS}
              <br />
              Hours: {GBP_HOURS_DISPLAY}
              <br />
              <Link href={`tel:${GBP_PHONE_E164}`} className="underline underline-offset-4">
                {GBP_PHONE_DISPLAY}
              </Link>
              {' · '}
              <Link href={`mailto:${GBP_EMAIL}`} className="underline underline-offset-4">
                {GBP_EMAIL}
              </Link>
            </address>
            <Button asChild className="mt-6 rounded-full bg-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.25em] text-white hover:bg-[#1f4a35]">
              <Link href={GBP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                Open turn-by-turn directions
              </Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#d8cdbf] shadow-lg">
            <GoogleMapEmbed heightClassName="h-[380px]" />
          </div>
        </div>
      </section>

      <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="routes-heading">
        <SectionBanner headingId="routes-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="routes-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Drive times buyers actually use
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {ROUTES.map((route) => (
              <li key={route.title} className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-sm">
                <CardVisual seed={route.title} />
                <h3 className="text-lg font-semibold text-[#0f2b1e]">{route.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#372a20]/85">{route.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="directions-faq-heading">
        <SectionBanner headingId="directions-faq-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="directions-faq-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Gate access and showing FAQ
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
