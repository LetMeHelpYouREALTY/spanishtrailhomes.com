import type { Metadata } from 'next'
import Link from 'next/link'
import { AgentPortrait } from '@/components/agent-portrait'
import { SiteShell } from '@/components/site-shell'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SectionBanner } from '@/components/heading-media'
import { GbpLocalActions } from '@/components/gbp-local-actions'
import { HyperlocalAmenityMap } from '@/components/hyperlocal-amenity-map'
import { RealScoutSection } from '@/components/realscout-section'
import { Button } from '@/components/ui/button'
import { amenityGuideSections, amenityPageFaqs, amenityTrustBlock } from '@/lib/amenity-page-content'
import {
  AMENITIES_PAGE_H1,
  AMENITIES_PAGE_PATH,
  CURATED_AMENITIES,
  SPANISH_TRAIL_COMMUNITY,
} from '@/lib/hyperlocal-amenities'
import {
  createAmenitiesItemListSchema,
  createBreadcrumbSchema,
  createCommunityGeoPlaceSchema,
  createFaqPageSchema,
  createRealEstateAgentAreaServedSchema,
  createWebPageSchema,
  getCanonicalUrl,
} from '@/lib/structuredData'
import { sitePhotoOg } from '@/lib/site-images'
import {
  GBP_EMAIL,
  GBP_FULL_ADDRESS,
  GBP_LEGAL_NAME,
  GBP_PHONE_DISPLAY,
  GBP_PHONE_E164,
} from '@/lib/gbp-business'

const pagePath = AMENITIES_PAGE_PATH
const pageUrl = `https://www.spanishtrailhomes.com${pagePath}`
const pageDescription = `Interactive map of restaurants, golf, grocery, parks, healthcare, schools, and shopping near Spanish Trail in Las Vegas 89113. Verified commute notes and buyer FAQ with Dr. Jan Duffy at ${GBP_PHONE_DISPLAY}.`

const webPageSchema = createWebPageSchema({
  name: 'Nearby Amenities in Spanish Trail, Las Vegas | Interactive Map',
  description: pageDescription,
  path: pagePath,
  extra: {
    about: { '@id': 'https://www.spanishtrailhomes.com/#localBusiness' },
  },
})

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Nearby Amenities', url: pagePath },
])

const itemListSchema = createAmenitiesItemListSchema({
  name: 'Featured places near Spanish Trail',
  path: pagePath,
  items: CURATED_AMENITIES.map((item) => ({
    name: item.name,
    address: item.schemaAddress,
    schemaType: item.schemaType,
  })),
})

const communityPlaceSchema = createCommunityGeoPlaceSchema({
  name: SPANISH_TRAIL_COMMUNITY.name,
  description:
    'Guard-gated master-planned community in southwest Las Vegas with Spanish Trail Country Club at the map center.',
  address: SPANISH_TRAIL_COMMUNITY.centerAddress,
  latitude: SPANISH_TRAIL_COMMUNITY.center.lat,
  longitude: SPANISH_TRAIL_COMMUNITY.center.lng,
  path: pagePath,
})

const agentAreaSchema = createRealEstateAgentAreaServedSchema(
  'Spanish Trail, Las Vegas, NV 89113',
)

const amenityPageJsonLd = [
  webPageSchema,
  breadcrumbSchema,
  createFaqPageSchema(amenityPageFaqs),
  itemListSchema,
  communityPlaceSchema,
  agentAreaSchema,
]

export const metadata: Metadata = {
  title: 'Nearby Amenities in Spanish Trail, Las Vegas | Map & Buyer Guide',
  description: pageDescription,
  alternates: { canonical: getCanonicalUrl(pagePath) },
  openGraph: {
    url: pageUrl,
    title: 'Nearby Amenities in Spanish Trail, Las Vegas',
    description: pageDescription,
    images: [sitePhotoOg('h2-office-map')],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nearby Amenities in Spanish Trail, Las Vegas',
    description: pageDescription,
  },
}

export default function AmenityMapPage() {
  return (
    <SiteShell showVisitOffice={false}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(amenityPageJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Nearby Amenities', href: pagePath },
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
          <p className="text-xs uppercase tracking-[0.5em] text-primary-foreground/80">
            Las Vegas {SPANISH_TRAIL_COMMUNITY.postalCode}
          </p>
          <h1 id="amenity-map-heading" className="mt-3 font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl">
            {AMENITIES_PAGE_H1}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            Map center: {SPANISH_TRAIL_COMMUNITY.centerLabel} ({SPANISH_TRAIL_COMMUNITY.centerAddress}). Coordinates{' '}
            {SPANISH_TRAIL_COMMUNITY.center.lat.toFixed(5)}, {SPANISH_TRAIL_COMMUNITY.center.lng.toFixed(5)} from the
            published Google Maps pin for the country club. Call{' '}
            <Link href={`tel:${GBP_PHONE_E164}`} className="underline underline-offset-4">
              {GBP_PHONE_DISPLAY}
            </Link>{' '}
            to tour homes beside these amenities.
          </p>
          <GbpLocalActions variant="dark" className="mt-8 justify-center" />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="interactive-map-heading">
        <SectionBanner headingId="interactive-map-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="interactive-map-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Interactive amenity map
          </h2>
          <p className="mt-3 max-w-3xl text-base text-[#372a20]/85">
            Filter golf, parks, healthcare, grocery, dining, shopping, pharmacies, schools, fitness, and parking within
            about five miles of Spanish Trail. Markers include names, addresses, and directions links. The green pin
            marks {SPANISH_TRAIL_COMMUNITY.name}.
          </p>
          <div className="mt-10">
            <HyperlocalAmenityMap defaultCategory="golf" showStaticList />
          </div>
        </div>
      </section>

      <RealScoutSection
        id="bhhs-listings"
        eyebrow="Live inventory"
        title="Homes beside these amenities"
        description="Filter Spanish Trail listings by golf exposure, villa vs estate, and gate."
      />

      <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="hyperlocal-guide-heading">
        <SectionBanner headingId="hyperlocal-guide-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="hyperlocal-guide-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Hyperlocal guide by category
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#372a20]/85">
            Server-rendered notes for buyers researching Spanish Trail—use alongside the map filters above.
          </p>
          <div className="mt-10 space-y-10">
            {amenityGuideSections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-sm sm:p-8"
              >
                <h3 className="font-[var(--font-playfair)] text-xl text-[#0f2b1e] sm:text-2xl">{section.title}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-4 text-sm leading-relaxed text-[#372a20]/85 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="amenity-faq-heading">
        <SectionBanner headingId="amenity-faq-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="amenity-faq-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Nearby amenities FAQ
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {amenityPageFaqs.map((item) => (
              <article key={item.question} className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6">
                <h3 className="text-lg font-semibold text-[#0f2b1e]">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#372a20]/85">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8cdbf] bg-[#fdf9f3] py-16 sm:py-20" aria-labelledby="amenity-trust-heading">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 md:flex-row md:text-left">
          <AgentPortrait placement="about" size="md" />
          <div className="space-y-4">
            <h2 id="amenity-trust-heading" className="font-[var(--font-playfair)] text-2xl text-[#0f2b1e] sm:text-3xl">
              {amenityTrustBlock.headline}
            </h2>
            <p className="text-base leading-relaxed text-[#372a20]/85">{amenityTrustBlock.body}</p>
            <p className="text-sm text-[#372a20]/75">
              {GBP_LEGAL_NAME} · {GBP_FULL_ADDRESS} ·{' '}
              <Link href={`mailto:${GBP_EMAIL}`} className="underline underline-offset-4">
                {GBP_EMAIL}
              </Link>
            </p>
            <GbpLocalActions className="justify-center md:justify-start" />
            <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
              <Link href="/contact">Book a private tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
