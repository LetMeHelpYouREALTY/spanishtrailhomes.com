import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/find-our-locations'
const pageDescription =
  'Find Spanish Trail Homes locations. Add a custom map of our store locations to your website. Get started at no cost—choose your locations and add the map to your site.'

type StoreLocation = {
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  email: string
  hours: string
  mapEmbedUrl: string
  directionsUrl: string
  gbpUrl: string
}

const storeLocations: StoreLocation[] = [
  {
    name: 'Spanish Trail Country Club',
    address: '5050 Spanish Trail Ln',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89113',
    phone: '(702) 766-3299',
    email: 'DrDuffySells@SpanishTrailHomes.com',
    hours: 'Sunday–Saturday 9:00 AM–6:00 PM',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1155408815076!2d-115.28609452341818!3d36.10914500736459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf27532cd0f3%3A0xba327d02c4e3709e!2sSpanish%20Trail%20Country%20Club!5e0!3m2!1sen!2sus!4v1731191452004!5m2!1sen!2sus',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=5050+Spanish+Trail+Ln,+Las+Vegas,+NV+89113',
    gbpUrl: 'https://maps.app.goo.gl/9QG1zTx5B7jG1wfP9',
  },
]

const webPageSchema = createWebPageSchema({
  name: 'Find Our Locations | Store Locator | Spanish Trail Homes',
  description: pageDescription,
  path: '/find-our-locations',
  type: 'WebPage',
  extra: {
    about: {
      '@type': 'LocalBusiness',
      name: 'Spanish Trail | Homes By Dr. Jan Duffy',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5050 Spanish Trail Ln',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89113',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.109145,
        longitude: -115.282642,
      },
      telephone: '+1-702-766-3299',
      url: pageUrl,
    },
  },
})

export const metadata: Metadata = {
  title: 'Find Our Locations | Store Locator | Spanish Trail Homes',
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/find-our-locations'),
  },
  openGraph: {
    url: pageUrl,
    title: 'Find Our Locations | Store Locator | Spanish Trail Homes',
    description:
      'Help customers find your stores. Add a custom map showing all your store locations to your website. Get started at no cost.',
    images: [
      createOgImageUrl({
        title: 'Find Our Locations',
        subtitle: 'Store locator & custom map for your site',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find Our Locations | Store Locator',
    description: 'Add a custom map of our locations to your website. Get started at no cost.',
    images: [
      createOgImageUrl({
        title: 'Find Our Locations',
        subtitle: 'Store locator · Spanish Trail Homes',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

type StepItem = { title: string; description: string }

const steps: StepItem[] = [
  {
    title: 'Get started at no cost',
    description:
      'No setup fees or subscriptions. Use our store locator and map on your website to help customers find Spanish Trail Homes and connect with Dr. Jan Duffy.',
  },
  {
    title: 'Choose your store locations',
    description:
      'We list our primary location at Spanish Trail Country Club. You can link to this page or embed the map so visitors see our address, hours, and contact options.',
  },
  {
    title: 'Add the map to your site',
    description:
      'Link to this Find Our Locations page from your site, or use the embedded map section below. Contact us for a custom embed code or to add more locations.',
  },
]

export default function FindOurLocationsPage() {
  const primaryLocation = storeLocations[0]
  const gbpUrl = primaryLocation.gbpUrl
  const mapsDirectionsUrl = primaryLocation.directionsUrl

  return (
    <SiteShell>
      <Script
        id="find-our-locations-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(webPageSchema)}
      </Script>

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Find Our Locations', href: '/find-our-locations' },
        ]}
      />

      <HeroSection />
      <GetStartedSection steps={steps} />
      <ChooseLocationsSection locations={storeLocations} />
      <MapAndActionsSection
        location={primaryLocation}
        gbpUrl={gbpUrl}
        mapsDirectionsUrl={mapsDirectionsUrl}
      />
      <AddMapSection />
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0f2b1e] px-6 py-20 text-primary-foreground sm:py-28"
      aria-labelledby="find-locations-heading"
    >
      <SectionBanner headingId="find-locations-heading" />
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-primary-foreground/80">
          Store locator
        </p>
        <h1
          id="find-locations-heading"
          className="mt-4 font-[var(--font-playfair)] text-3xl tracking-tight sm:text-4xl md:text-5xl"
        >
          Help customers find your stores
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-primary-foreground/90 sm:text-lg">
          Add a custom map showing all your store locations to your website.
        </p>
        <p className="mt-3 text-sm font-medium text-primary-foreground/90">
          Get started at no cost
        </p>
      </div>
    </section>
  )
}

function GetStartedSection({ steps }: { steps: StepItem[] }) {
  return (
    <section
      className="bg-white py-20 sm:py-24"
      aria-labelledby="get-started-heading"
    >
      <SectionBanner headingId="get-started-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="get-started-heading"
          className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl"
        >
          How it works
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
          Use our store locator and map to help visitors find Spanish Trail Homes. No cost to get started.
        </p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/5"
            >
              <span
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f2b1e] text-sm font-semibold text-white"
                aria-hidden
              >
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-[#0f2b1e]">
                {step.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#372a20]/85">
                {step.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ChooseLocationsSection({
  locations,
}: {
  locations: StoreLocation[]
}) {
  return (
    <section
      className="bg-[#f8f2e7] py-20 sm:py-24"
      aria-labelledby="choose-locations-heading"
    >
      <SectionBanner headingId="choose-locations-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">
          Our locations
        </p>
        <h2
          id="choose-locations-heading"
          className="mt-2 font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl"
        >
          Choose your store locations
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
          Spanish Trail Homes is represented by Dr. Jan Duffy at Spanish Trail Country Club. Visit us for luxury real estate consultations and private tours.
        </p>
        <ul className="mt-10 space-y-6">
          {locations.map((loc) => (
            <li
              key={loc.name}
              className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-md"
            >
              <h3 className="text-lg font-semibold text-[#0f2b1e]">{loc.name}</h3>
              <p className="mt-2 text-sm text-[#372a20]/85">
                {loc.address}, {loc.city}, {loc.state} {loc.zip}
              </p>
              <p className="mt-1 text-sm">
                <Link
                  href={`tel:${loc.phone.replace(/\D/g, '')}`}
                  className="text-[#0f2b1e] underline underline-offset-2 hover:text-[#1f4a35]"
                >
                  {loc.phone}
                </Link>
                {' · '}
                <Link
                  href={`mailto:${loc.email}`}
                  className="text-[#0f2b1e] underline underline-offset-2 hover:text-[#1f4a35]"
                >
                  {loc.email}
                </Link>
              </p>
              <p className="mt-2 text-xs text-[#372a20]/75">{loc.hours}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function MapAndActionsSection({
  location,
  gbpUrl,
  mapsDirectionsUrl,
}: {
  location: StoreLocation
  gbpUrl: string
  mapsDirectionsUrl: string
}) {
  return (
    <section
      id="map"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="map-heading"
    >
      <SectionBanner headingId="map-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="map-heading"
          className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl"
        >
          Visit Spanish Trail Homes
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
          Located at Spanish Trail Country Club in Las Vegas. Connect with Dr. Jan Duffy for luxury real estate consultations and private tours.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="space-y-2 text-base text-[#372a20]/85">
              <p>
                <strong className="text-[#0f2b1e]">Address:</strong>
                <br />
                {location.address}
                <br />
                {location.city}, {location.state} {location.zip}
              </p>
              <p>
                <strong className="text-[#0f2b1e]">Phone:</strong>{' '}
                <Link
                  href={`tel:${location.phone.replace(/\D/g, '')}`}
                  className="underline underline-offset-2 hover:text-[#0f2b1e]"
                >
                  {location.phone}
                </Link>
              </p>
              <p>
                <strong className="text-[#0f2b1e]">Email:</strong>{' '}
                <Link
                  href={`mailto:${location.email}`}
                  className="underline underline-offset-2 hover:text-[#0f2b1e]"
                >
                  {location.email}
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-[#1f4a35]"
              >
                <Link href={`tel:${location.phone.replace(/\D/g, '')}`}>
                  Call {location.phone}
                </Link>
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
                <Link href={gbpUrl} target="_blank" rel="noopener noreferrer">
                  View Google Reviews
                </Link>
              </Button>
            </div>
            <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 text-sm text-[#372a20]/85">
              <p className="mb-2 font-semibold uppercase tracking-[0.2em] text-[#0f2b1e]">
                Business hours
              </p>
              <p>{location.hours}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] shadow-lg">
            <iframe
              title={`${location.name} - ${location.address}, ${location.city}, ${location.state} ${location.zip}`}
              src={location.mapEmbedUrl}
              className="h-[400px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function AddMapSection() {
  return (
    <section
      className="bg-[#f8f2e7] py-20 sm:py-24"
      aria-labelledby="add-map-heading"
    >
      <SectionBanner headingId="add-map-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="add-map-heading"
          className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl"
        >
          Add the map to your site
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
          Link to this Find Our Locations page from your website so customers can see our address, get directions, and contact us. Need a custom embed or multiple locations? We can help.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            asChild
            className="rounded-full bg-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-[#1f4a35]"
          >
            <Link href="/contact">Contact us for embed options</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e] hover:text-white"
          >
            <Link href="/contact#map">View contact & map</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
