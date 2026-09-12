import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CopyEmbedButton } from '@/components/copy-embed-button'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/amenity-map'
const pageDescription =
  'Add an amenity map to your website with Google Maps Platform. Show nearby restaurants, parks, parking, and more. Copy and paste the embed code—get started at no cost.'

const amenityMapWebPageSchema = createWebPageSchema({
  name: 'Amenity Map for Your Website | Google Maps Platform',
  description: pageDescription,
  path: '/amenity-map',
  type: 'WebPage',
  extra: {
    about: {
      '@type': 'SoftwareApplication',
      name: 'Google Maps Platform',
      applicationCategory: 'DeveloperApplication',
    },
  },
})

export const metadata: Metadata = {
  title: 'Add an Amenity Map to Your Website | Google Maps Platform',
  description: pageDescription,
  alternates: { canonical: getCanonicalUrl('/amenity-map') },
  openGraph: {
    url: pageUrl,
    title: 'Add an Amenity Map to Your Website',
    description:
      'Use Google Maps Platform to show nearby amenities—restaurants, parks, parking, and more. Copy and paste the code to your website. Get started at no cost.',
    images: [
      createOgImageUrl({
        title: 'Amenity Map for Your Website',
        subtitle: 'Google Maps Platform • Nearby places',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add an Amenity Map to Your Website',
    description: 'Show nearby amenities with Google Maps. Copy-paste embed code. Get started at no cost.',
  },
}

const PLACE_TYPES = [
  'Restaurants',
  'Parks',
  'Parking',
  'Grocery stores',
  'Gas stations',
  'Pharmacies',
  'Gyms & fitness',
  'Schools',
  'Hospitals & clinics',
  'Banks & ATMs',
  'Shopping centers',
  'Coffee shops',
  'Hotels',
]

/** Standard Google Maps embed URL for Spanish Trail Country Club (no API key required for basic embed). */
const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1155408815076!2d-115.28609452341818!3d36.10914500736459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf27532cd0f3%3A0xba327d02c4e3709e!2sSpanish%20Trail%20Country%20Club!5e0!3m2!1sen!2sus!4v1731191452004!5m2!1sen!2sus'

const EMBED_CODE = `<iframe
  src="${MAP_EMBED_URL}"
  width="600"
  height="450"
  style="border:0;"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Map of Spanish Trail Country Club"
></iframe>`

export default function AmenityMapPage() {
  return (
    <SiteShell>
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

      <section className="border-b border-border/40 bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="amenity-map-heading">
      <SectionBanner headingId="amenity-map-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Google Maps Platform</p>
          <h1 id="amenity-map-heading" className="mt-2 font-heading text-3xl text-[#1f2a24] sm:text-4xl lg:text-5xl">
            Add an amenity map to your website
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#372a20]/90 sm:text-lg">
            Use Google Maps Platform to show nearby amenities on your website. Select from different types of
            places—restaurants, parks, parking, and more. Simply copy and paste the code to your website. Get started
            at no cost.
          </p>
        </div>
      </section>

      <section className="border-b border-border/40 bg-white py-16 sm:py-20" aria-labelledby="place-types-heading">
      <SectionBanner headingId="place-types-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="place-types-heading" className="font-heading text-2xl text-[#1f2a24] sm:text-3xl">
            Types of places you can show
          </h2>
          <p className="mt-3 text-base text-[#372a20]/85">
            Display one or more place types so visitors see what’s nearby—dining, recreation, services, and more.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3" role="list">
            {PLACE_TYPES.map((name) => (
              <li key={name} className="flex items-center gap-2 text-[#372a20]/90">
                <span className="size-1.5 rounded-full bg-[#0f2b1e]" aria-hidden />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border/40 bg-[#f9f4eb] py-16 sm:py-20" aria-labelledby="embed-heading">
      <SectionBanner headingId="embed-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="embed-heading" className="font-heading text-2xl text-[#1f2a24] sm:text-3xl">
            Copy and paste the code to your website
          </h2>
          <p className="mt-3 text-base text-[#372a20]/85">
            Use the embed below on any page. Replace the iframe <code className="rounded bg-[#0f2b1e]/10 px-1 py-0.5 text-sm">src</code> with your
            own map URL from Google Maps (Share → Embed a map) to show a different location or search.
          </p>
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-[#d8cdbf] bg-[#1f2a24] shadow-lg">
            <div className="flex items-center justify-between border-b border-[#372a20]/50 px-4 py-3 text-xs font-medium uppercase tracking-wider text-[#cbb8a6]">
              <span>HTML embed code</span>
              <CopyEmbedButton code={EMBED_CODE} />
            </div>
            <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-[#e5d7c8]">
              <code>{EMBED_CODE}</code>
            </pre>
          </div>
          <div className="mt-8 rounded-2xl border border-[#d8cdbf] bg-white p-2 shadow-md">
            <p className="mb-3 text-center text-sm font-medium text-[#372a20]/80">Preview</p>
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="350"
              className="rounded-xl border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Spanish Trail Country Club"
            />
          </div>
          <p className="mt-6 text-sm text-[#372a20]/75">
            For custom amenity layers (e.g. filter by place type or radius), use{' '}
            <a
              href="https://developers.google.com/maps/documentation/javascript/place-details"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f2b1e] underline underline-offset-2 hover:no-underline"
            >
              Google Maps Platform APIs
            </a>{' '}
            (Maps JavaScript API and Places API). New users get free monthly credit.
          </p>
        </div>
      </section>

      <section className="bg-[#0f2b1e] py-16 text-center text-primary-foreground sm:py-20 relative isolate overflow-hidden" aria-labelledby="cta-heading">
      <SectionBanner headingId="cta-heading" />
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 id="cta-heading" className="font-heading text-2xl sm:text-3xl">
            Get started at no cost
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#f8f5ef]/90">
            Google Maps Platform offers a free tier so you can add maps and nearby places to your site without upfront
            cost. Create an account, enable the APIs you need, and start embedding.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-[#0f2b1e] shadow-md hover:bg-[#f1eadd]"
            >
              <a
                href="https://developers.google.com/maps/get-started"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get started with Google Maps Platform (opens in new tab)"
              >
                Get started with Google Maps Platform
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#f8f5ef]/50 bg-transparent px-6 py-2 text-[#f8f5ef] hover:bg-white/10"
            >
              <Link href="/contact">Contact us for custom maps</Link>
            </Button>
          </div>
        </div>
      </section>

      <Script id="amenity-map-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(amenityMapWebPageSchema)}
      </Script>
    </SiteShell>
  )
}
