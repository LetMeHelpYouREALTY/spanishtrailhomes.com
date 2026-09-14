import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FaqSection } from '@/components/faq-section'
import { createOgImageUrl, createWebPageSchema, createFaqSchema, getCanonicalUrl } from '@/lib/structuredData'
import {
  GBP_DIRECTIONS_URL,
  GBP_FULL_ADDRESS,
  GBP_HOURS_DISPLAY,
  GBP_LEGAL_NAME,
  GBP_MAPS_URL,
  GBP_PHONE_DISPLAY,
  GBP_PHONE_E164,
  GBP_STREET,
} from '@/lib/gbp-business'

const pageUrl = 'https://www.spanishtrailhomes.com/directions'
const pageTitle = `Directions to Spanish Trail | ${GBP_STREET} | Dr. Jan Duffy`
const pageDescription = `Drive to ${GBP_FULL_ADDRESS}. Dr. Jan Duffy clears the Tropicana and Rainbow gates for private tours. Call ${GBP_PHONE_DISPLAY}. Hours ${GBP_HOURS_DISPLAY}.`

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1155408815076!2d-115.28609452341818!3d36.10914500736459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf27532cd0f3%3A0xba327d02c4e3709e!2sSpanish%20Trail%20Country%20Club!5e0!3m2!1sen!2sus!4v1731191452004!5m2!1sen!2sus'

const faqs = [
  {
    question: 'Where is Spanish Trail in Las Vegas?',
    answer: `Spanish Trail is a guard-gated golf community in southwest Las Vegas, ZIP 89113. The club and main office are at ${GBP_FULL_ADDRESS}, off Tropicana Avenue and Rainbow Boulevard.`,
  },
  {
    question: 'Can I drive through the gates without an appointment?',
    answer:
      'Guard gates require clearance. Call Dr. Jan Duffy at (702) 766-3299 before you arrive so she can notify the gate for a listing tour or office meeting.',
  },
  {
    question: 'Which gate should buyers use?',
    answer:
      'Most tours use the East or West Tropicana gates. Residents also have a Hacienda gate. Dr. Duffy confirms the gate with the listing and the guard staff before you leave.',
  },
]

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: getCanonicalUrl('/directions') },
  openGraph: {
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    images: [
      createOgImageUrl({
        title: 'Directions to Spanish Trail',
        subtitle: `${GBP_STREET} · Las Vegas 89113`,
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function DirectionsPage() {
  return (
    <SiteShell>
      <Script id="directions-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify([
          createWebPageSchema({
            name: pageTitle,
            description: pageDescription,
            path: '/directions',
          }),
          createFaqSchema(faqs),
        ])}
      </Script>

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Directions' }]} />
        </div>
      </div>

      <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="directions-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">Guard-gated 89113</p>
          <h1 id="directions-heading" className="mt-2 font-heading text-3xl text-[#1f2a24] sm:text-4xl lg:text-5xl">
            Directions to Spanish Trail Country Club
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#372a20]/90 sm:text-lg">
            {GBP_LEGAL_NAME} meets buyers and sellers at {GBP_FULL_ADDRESS}. Hours: {GBP_HOURS_DISPLAY}. Call{' '}
            <Link href={`tel:${GBP_PHONE_E164}`} className="underline-offset-4 hover:underline">
              {GBP_PHONE_DISPLAY}
            </Link>{' '}
            for gate clearance before you drive over.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full">
              <Link href={GBP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                Open Google Directions
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href={`tel:${GBP_PHONE_E164}`}>Call {GBP_PHONE_DISPLAY}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href={GBP_MAPS_URL} target="_blank" rel="noopener noreferrer">
                Google Business Profile
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16" aria-labelledby="map-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="map-heading" className="font-heading text-2xl text-[#1f2a24] sm:text-3xl">
            Map pin at {GBP_STREET}
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#d8cdbf] shadow-md">
            <iframe
              title={`Map to ${GBP_FULL_ADDRESS}`}
              src={MAP_EMBED_URL}
              width="100%"
              height="420"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-sm text-[#372a20]/80">
            From the Strip, take Tropicana Avenue west past Rainbow Boulevard. Harry Reid International Airport is about
            18 minutes via Tropicana. Downtown Summerlin is a 10- to 15-minute drive.
          </p>
        </div>
      </section>

      <FaqSection
        headingId="directions-faq-heading"
        heading="Gate access and arrival questions"
        items={faqs}
        tone="cream"
      />
    </SiteShell>
  )
}
