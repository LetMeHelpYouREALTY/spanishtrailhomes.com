import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CardVisual, SectionBanner } from '@/components/heading-media'
import { GbpLocalActions } from '@/components/gbp-local-actions'
import { GoogleMapEmbed } from '@/components/google-map-embed'
import { RealScoutSection } from '@/components/realscout-section'
import {
  createBreadcrumbSchema,
  createFaqPageSchema,
  createOgImageUrl,
  createWebPageSchema,
  getCanonicalUrl,
} from '@/lib/structuredData'
import { GBP_FULL_ADDRESS, GBP_LEGAL_NAME, GBP_PHONE_DISPLAY, GBP_PHONE_E164 } from '@/lib/gbp-business'

const pageUrl = 'https://www.spanishtrailhomes.com/amenity-map'
const pageDescription =
  'Map of what sits around Spanish Trail in Las Vegas 89113: Tropicana and Rainbow access, I-215, Bishop Gorman High School (2.2 miles), Durango High School, and the private 27-hole club inside the gates. Call Dr. Jan Duffy at (702) 766-3299.'

const faqContent = [
  {
    question: 'What is inside the Spanish Trail gates besides homes?',
    answer:
      'Spanish Trail Country Club operates a private 27-hole golf course (Sunrise, Lakes, and Canyon nines), clubhouse dining, tennis and pickleball courts, a fitness studio, and resort pools. Club membership is separate from the HOA deed. Dr. Jan Duffy explains both before you write an offer.',
  },
  {
    question: 'How far is Bishop Gorman High School from Spanish Trail?',
    answer:
      'Bishop Gorman High School is about 2.2 miles northeast via S. Rainbow Blvd. Faith Lutheran Middle & High School and Durango High School are also a short drive. Commute times vary with Tropicana and Rainbow traffic.',
  },
  {
    question: 'How close is Spanish Trail to I-215 and the airport?',
    answer:
      'The 215 beltway is a short drive via Rainbow or Durango. Harry Reid International Airport is typically 18–25 minutes depending on traffic. Call (702) 766-3299 for a showing timed around your flight.',
  },
  {
    question: 'Can I tour amenities without living in Spanish Trail yet?',
    answer:
      'The golf club is private. Dr. Duffy coordinates guest access with membership staff when you are under contract or previewing as a serious buyer. Start with a home tour appointment at (702) 766-3299.',
  },
]

const AMENITIES = [
  {
    title: '27-hole private golf',
    detail: 'Robert Trent Jones Jr. Sunrise, Lakes, and Canyon nines sit inside the 640-acre gates.',
  },
  {
    title: 'Clubhouse dining & events',
    detail: 'Member dining, wine events, and lawn gatherings at the Spanish Trail Country Club clubhouse.',
  },
  {
    title: 'Tennis, pickleball & fitness',
    detail: 'Lighted courts and a fitness studio with pool-terrace access for lock-and-leave owners.',
  },
  {
    title: 'Tropicana & Rainbow access',
    detail: 'Two community gates, I-215 nearby, and a 18–25 minute drive to Harry Reid Airport in typical traffic.',
  },
  {
    title: 'Bishop Gorman High School — 2.2 miles',
    detail: 'Northeast via S. Rainbow Blvd. Durango High School and Faith Lutheran are also a short drive.',
  },
  {
    title: 'Spring Valley & Summerlin',
    detail: 'Spanish Trail (89113) sits south of Summerlin and east of the Spring Mountains corridor, with 89117 a short drive north.',
  },
]

const webPageSchema = createWebPageSchema({
  name: 'Spanish Trail Las Vegas Amenity Map | Golf, Courts, Commute',
  description: pageDescription,
  path: '/amenity-map',
  extra: {
    about: { '@id': 'https://www.spanishtrailhomes.com/#localBusiness' },
  },
})

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Amenity Map', url: '/amenity-map' },
])

export const metadata: Metadata = {
  title: 'Spanish Trail Amenity Map | Las Vegas 89113 Golf, Courts, Commute',
  description: pageDescription,
  alternates: { canonical: getCanonicalUrl('/amenity-map') },
  openGraph: {
    url: pageUrl,
    title: 'Spanish Trail Amenity Map | Las Vegas 89113',
    description: pageDescription,
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Amenity Map',
        subtitle: 'Golf, club, Tropicana access · 89113',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Amenity Map | Las Vegas 89113',
    description: pageDescription,
  },
}

export default function AmenityMapPage() {
  return (
    <SiteShell>
      <Script id="amenity-map-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify([webPageSchema, breadcrumbSchema, createFaqPageSchema(faqContent)])}
      </Script>

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Amenity Map', href: '/amenity-map' },
            ]}
          />
        </div>
      </div>

      <section
        className="relative isolate overflow-hidden bg-[#0f2b1e] py-16 text-primary-foreground sm:py-24"
        aria-labelledby="amenity-map-heading"
      >
        <SectionBanner headingId="amenity-map-heading" level="h1" priority />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs uppercase tracking-[0.5em] text-primary-foreground/80">Las Vegas 89113</p>
          <h1 id="amenity-map-heading" className="mt-3 font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl">
            Spanish Trail amenity map for homebuyers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            {GBP_LEGAL_NAME} maps golf, courts, gates, and commute distances around {GBP_FULL_ADDRESS}. Call{' '}
            <Link href={`tel:${GBP_PHONE_E164}`} className="underline underline-offset-4">
              {GBP_PHONE_DISPLAY}
            </Link>{' '}
            to tour.
          </p>
          <GbpLocalActions variant="dark" className="mt-8 justify-center" />
        </div>
      </section>

      <RealScoutSection
        id="bhhs-listings"
        eyebrow="Live inventory"
        title="Homes beside these amenities"
        description="Filter Spanish Trail listings by golf exposure, villa vs estate, and gate."
      />

      <section className="bg-white py-16 sm:py-20" aria-labelledby="place-types-heading">
        <SectionBanner headingId="place-types-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="place-types-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            What buyers ask about around 89113
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((item) => (
              <li key={item.title} className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-sm">
                <CardVisual seed={item.title} />
                <h3 className="text-lg font-semibold text-[#0f2b1e]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#372a20]/85">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="embed-heading">
        <SectionBanner headingId="embed-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="embed-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Community pin on Google Maps
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#372a20]/85">
            The map marks Spanish Trail Country Club at 5050 Spanish Trail Ln. Use it to plan a showing—not as a
            substitute for a gate pass.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#d8cdbf] bg-white shadow-md">
            <GoogleMapEmbed heightClassName="h-[420px]" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="amenity-faq-heading">
        <SectionBanner headingId="amenity-faq-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="amenity-faq-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Amenity FAQ
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
