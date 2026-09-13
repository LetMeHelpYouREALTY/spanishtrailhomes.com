import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CopyEmbedButton } from '@/components/copy-embed-button'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/directions'
const pageDescription =
  'Add directions to your website with Google Maps Platform. Show estimated travel time across driving, transit, walking, and cycling. Copy and paste the embed code—get started at no cost.'

const directionsWebPageSchema = createWebPageSchema({
  name: 'Add Directions to Your Website | Google Maps Platform',
  description: pageDescription,
  path: '/directions',
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
  title: 'Add Directions to Your Website | Google Maps Platform',
  description: pageDescription,
  alternates: { canonical: getCanonicalUrl('/directions') },
  openGraph: {
    url: pageUrl,
    title: 'Add Directions to Your Website',
    description:
      'Use Directions from Google Maps Platform to help customers plan their visit. Show estimated travel time across different transportation modes. Copy and paste the code. Get started at no cost.',
    images: [
      createOgImageUrl({
        title: 'Directions for Your Website',
        subtitle: 'Google Maps Platform • Travel time by mode',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add Directions to Your Website',
    description: 'Show travel time by driving, transit, walking, cycling. Copy-paste embed. Get started at no cost.',
  },
}

const TRANSPORT_MODES = [
  { name: 'Driving', description: 'Estimated drive time and route' },
  { name: 'Transit', description: 'Public transit options and duration' },
  { name: 'Walking', description: 'Walking directions and ETA' },
  { name: 'Cycling', description: 'Bike-friendly routes and time' },
]

/**
 * Google Maps Embed API – directions mode.
 * Replace YOUR_GOOGLE_MAPS_API_KEY with your key from Google Cloud Console (get started at no cost).
 * @see https://developers.google.com/maps/documentation/embed/embedding-map#directions_mode
 */
const DIRECTIONS_EMBED_BASE =
  'https://www.google.com/maps/embed/v1/directions?key=YOUR_GOOGLE_MAPS_API_KEY&origin=Las+Vegas+Strip,+NV&destination=Spanish+Trail+Country+Club,+Las+Vegas,+NV&mode=driving'

const EMBED_CODE = `<iframe
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  src="${DIRECTIONS_EMBED_BASE}"
  title="Directions to Spanish Trail Country Club"
></iframe>`

export default function DirectionsPage() {
  return (
    <SiteShell>
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

      <section className="border-b border-border/40 bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="directions-heading">
      <SectionBanner headingId="directions-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Google Maps Platform</p>
          <h1 id="directions-heading" className="mt-2 font-heading text-3xl text-[#1f2a24] sm:text-4xl lg:text-5xl">
            Add directions to your website
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#372a20]/90 sm:text-lg">
            Use Directions from Google Maps Platform to help customers plan their visit. Show estimated travel time
            across different transportation modes—driving, transit, walking, and cycling. Simply copy and paste the
            code to your website. Get started at no cost.
          </p>
        </div>
      </section>

      <section className="border-b border-border/40 bg-white py-16 sm:py-20" aria-labelledby="modes-heading">
      <SectionBanner headingId="modes-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="modes-heading" className="font-heading text-2xl text-[#1f2a24] sm:text-3xl">
            Transportation modes
          </h2>
          <p className="mt-3 text-base text-[#372a20]/85">
            Display estimated travel time and routes for the way your visitors get around.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2" role="list">
            {TRANSPORT_MODES.map(({ name, description }) => (
              <li key={name} className="rounded-2xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-sm">
                <p className="font-semibold text-[#0f2b1e]">{name}</p>
                <p className="mt-1 text-sm text-[#372a20]/85">{description}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[#372a20]/75">
            In the embed code, set <code className="rounded bg-[#0f2b1e]/10 px-1 py-0.5 text-sm">mode=driving</code>,{' '}
            <code className="rounded bg-[#0f2b1e]/10 px-1 py-0.5 text-sm">transit</code>,{' '}
            <code className="rounded bg-[#0f2b1e]/10 px-1 py-0.5 text-sm">walking</code>, or{' '}
            <code className="rounded bg-[#0f2b1e]/10 px-1 py-0.5 text-sm">bicycling</code> in the iframe URL.
          </p>
        </div>
      </section>

      <section className="border-b border-border/40 bg-[#f9f4eb] py-16 sm:py-20" aria-labelledby="embed-heading">
      <SectionBanner headingId="embed-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="embed-heading" className="font-heading text-2xl text-[#1f2a24] sm:text-3xl">
            Copy and paste the code to your website
          </h2>
          <p className="mt-3 text-base text-[#372a20]/85">
            Replace <code className="rounded bg-[#0f2b1e]/10 px-1 py-0.5 text-sm">YOUR_GOOGLE_MAPS_API_KEY</code> with
            your API key from Google Cloud Console. Enable the{' '}
            <a
              href="https://developers.google.com/maps/documentation/embed/get-api-key"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f2b1e] underline underline-offset-2 hover:no-underline"
            >
              Maps Embed API
            </a>{' '}
            and get a key at no cost (free monthly credit for new users).
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
          <p className="mt-6 text-sm text-[#372a20]/75">
            Change <code className="rounded bg-[#0f2b1e]/10 px-1 py-0.5 text-sm">origin</code> and{' '}
            <code className="rounded bg-[#0f2b1e]/10 px-1 py-0.5 text-sm">destination</code> in the URL to show
            directions between any two places (addresses or place names).
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
            Google Maps Platform offers a free tier so you can add directions and travel time to your site without
            upfront cost. Create an account, enable the Maps Embed API, and start embedding.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-[#0f2b1e] shadow-md hover:bg-[#f1eadd]"
            >
              <a
                href="https://developers.google.com/maps/documentation/embed/get-api-key"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get a Maps Embed API key (opens in new tab)"
              >
                Get your API key
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#f8f5ef]/50 bg-transparent px-6 py-2 text-[#f8f5ef] hover:bg-white/10"
            >
              <Link href="/contact">Contact us for custom directions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Script id="directions-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(directionsWebPageSchema)}
      </Script>
    </SiteShell>
  )
}
