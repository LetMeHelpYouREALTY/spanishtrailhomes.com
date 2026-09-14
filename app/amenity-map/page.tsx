import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FaqSection } from '@/components/faq-section'
import { SectionBanner } from '@/components/heading-media'
import { createOgImageUrl, createWebPageSchema, createFaqSchema, getCanonicalUrl } from '@/lib/structuredData'
import { GBP_FULL_ADDRESS, GBP_PHONE_DISPLAY, GBP_PHONE_E164, GBP_STREET } from '@/lib/gbp-business'

const pageUrl = 'https://www.spanishtrailhomes.com/amenity-map'
const pageTitle = 'What’s near Spanish Trail | Groceries, campuses, commute | Dr. Jan Duffy'
const pageDescription =
  'Map daily errands from Spanish Trail in Las Vegas 89113: Whole Foods, Trader Joe’s, Downtown Summerlin, Bishop Gorman (2.2 miles), and Harry Reid International Airport.'

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1155408815076!2d-115.28609452341818!3d36.10914500736459!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf27532cd0f3%3A0xba327d02c4e3709e!2sSpanish%20Trail%20Country%20Club!5e0!3m2!1sen!2sus!4v1731191452004!5m2!1sen!2sus'

const nearby = [
  { name: 'Whole Foods & Trader Joe’s', detail: 'About 10–15 minutes from the Tropicana gates.' },
  { name: 'Downtown Summerlin', detail: 'Shopping and dining a short drive north of 89113.' },
  { name: 'Bishop Gorman High School', detail: '2.2 miles northeast via S. Rainbow Blvd.' },
  { name: 'Faith Lutheran Middle & High School', detail: 'Short drive from the guard gates.' },
  { name: 'Durango High School', detail: 'CCSD campus a short drive from Spanish Trail.' },
  { name: 'Harry Reid International Airport', detail: 'About 18 minutes via Tropicana Avenue.' },
]

const faqs = [
  {
    question: 'How far is Spanish Trail from the airport?',
    answer:
      'Harry Reid International Airport is about 18 minutes via Tropicana Avenue, depending on traffic. Dr. Jan Duffy times gate access so arriving buyers are not waiting at the guardhouse.',
  },
  {
    question: 'What grocery stores are near Spanish Trail?',
    answer:
      'Whole Foods and Trader Joe’s are a 10- to 15-minute drive from the Tropicana gates. Downtown Summerlin adds additional retail without leaving the west valley.',
  },
  {
    question: 'Which named campuses are closest to Spanish Trail?',
    answer:
      'Bishop Gorman High School is 2.2 miles northeast via S. Rainbow Blvd. Faith Lutheran Middle & High School and Durango High School are also a short drive. Call (702) 766-3299 for commute times from a specific enclave.',
  },
]

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: getCanonicalUrl('/amenity-map') },
  openGraph: {
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    images: [
      createOgImageUrl({
        title: 'Near Spanish Trail',
        subtitle: 'Groceries, campuses, airport from 89113',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function AmenityMapPage() {
  return (
    <SiteShell>
      <Script id="amenity-map-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify([
          createWebPageSchema({
            name: pageTitle,
            description: pageDescription,
            path: '/amenity-map',
          }),
          createFaqSchema(faqs),
        ])}
      </Script>

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Near Spanish Trail' }]} />
        </div>
      </div>

      <section className="relative isolate overflow-hidden bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="amenity-map-heading">
        <SectionBanner headingId="amenity-map-heading" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#f8f5ef]/75">Southwest Las Vegas 89113</p>
          <h1 id="amenity-map-heading" className="mt-2 font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
            What’s near Spanish Trail homes
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Daily errands from {GBP_STREET}: groceries, named campuses, and airport timing. Dr. Jan Duffy maps commute
            minutes from the specific enclave you are touring. Call {GBP_PHONE_DISPLAY}.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16" aria-labelledby="nearby-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="nearby-heading" className="font-heading text-2xl text-[#1f2a24] sm:text-3xl">
            Distances from {GBP_FULL_ADDRESS}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {nearby.map((item) => (
              <li key={item.name} className="rounded-2xl border border-[#d8cdbf] bg-[#fdf9f3] p-6">
                <p className="font-heading text-lg text-[#0f2b1e]">{item.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#372a20]/85">{item.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#d8cdbf] shadow-md">
            <iframe
              title={`Map of Spanish Trail Country Club at ${GBP_FULL_ADDRESS}`}
              src={MAP_EMBED_URL}
              width="100%"
              height="380"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-8">
            <Button asChild className="rounded-full">
              <Link href={`tel:${GBP_PHONE_E164}`}>Call {GBP_PHONE_DISPLAY} for commute times</Link>
            </Button>
          </div>
        </div>
      </section>

      <FaqSection headingId="amenity-faq-heading" heading="Commute and daily-errand questions" items={faqs} />
    </SiteShell>
  )
}
