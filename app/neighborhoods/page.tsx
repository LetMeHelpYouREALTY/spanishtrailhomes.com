import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { HeroBackground } from '@/components/hero-background'
import {
  createWebPageSchema,
  createBreadcrumbSchema,
  createFaqSchema,
  getCanonicalUrl,
} from '@/lib/structuredData'
import { NEIGHBORHOODS } from '@/lib/neighborhoods'
import { CardVisual } from '@/components/heading-media'
import { FaqSection } from '@/components/faq-section'
import { getSiteImageUrl } from '@/lib/cloudflare-images'
import { getAssetAlt, sitePhotoOg } from '@/lib/site-images'


const pageUrl = 'https://www.spanishtrailhomes.com/neighborhoods'
const pageTitle = 'Spanish Trail Homes | All 11 Neighborhoods | Dr. Jan Duffy'
const pageDescription =
  'Explore all 11 Spanish Trail neighborhoods—Estates, Estates West, Courtyards, Gardens, Links, Carmels, Springs, Plum Creek, Villas, Islands, and Innisbrook Estates. Deep expertise across every enclave with Dr. Jan Duffy.'

const neighborhoodsWebPageSchema = createWebPageSchema({
  name: pageTitle,
  description: pageDescription,
  path: '/neighborhoods',
  type: 'CollectionPage',
  extra: {
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: NEIGHBORHOODS.length,
      itemListElement: NEIGHBORHOODS.map((n, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: n.name,
        url: `https://www.spanishtrailhomes.com/neighborhoods/${n.slug}`,
      })),
    },
  },
})

const neighborhoodsBreadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Neighborhoods', url: '/neighborhoods' },
])

const neighborhoodsFaq = [
  {
    question: 'How many neighborhoods are inside Spanish Trail?',
    answer:
      'Eleven: The Estates, Estates West, The Courtyards, The Gardens, The Links, The Carmels, The Springs, Plum Creek, The Villas, The Islands, and Innisbrook Estates. All sit inside the guard gates in Las Vegas ZIP 89113.',
  },
  {
    question: 'Which Spanish Trail neighborhood should I tour first?',
    answer:
      'Start with square footage, lock-and-leave needs, and golf frontage—not a valley-wide map. Dr. Jan Duffy matches those constraints to the 11 enclaves, then clears the gate. Call (702) 766-3299.',
  },
  {
    question: 'Can I see live listings by neighborhood?',
    answer:
      'Yes. Each enclave page is a listing hub with the typical price band for that village. Open an enclave, or search all Spanish Trail homes for sale with Dr. Duffy.',
  },
]

const neighborhoodsFaqSchema = createFaqSchema(neighborhoodsFaq)

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/neighborhoods'),
  },
  openGraph: {
    url: pageUrl,
    title: pageTitle,
    description:
      'All 11 Spanish Trail neighborhoods: Estates, Courtyards, Links, Springs, Villas, and more. Neighborhood guides and current listings with Dr. Jan Duffy.',
    images: [
      sitePhotoOg('h2-neighborhood-street'),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

export default function NeighborhoodsHubPage() {
  return (
    <SiteShell>
      <Script
        id="neighborhoods-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([neighborhoodsWebPageSchema, neighborhoodsBreadcrumbSchema, neighborhoodsFaqSchema]),
        }}
      />

      <HeroBackground
        src={getSiteImageUrl('h2-neighborhood-street')}
        alt={getAssetAlt('h2-neighborhood-street')}
        title="Spanish Trail Homes | 11 Neighborhoods"
        subtitle="Match the enclave, then buy or sell with Dr. Jan Duffy"
      />
      <RealScoutSection id="bhhs-listings" />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Neighborhoods', href: '/neighborhoods' },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <p className="mb-10 text-lg text-[#5c4a3a]">
          Spanish Trail is made up of 11 distinct neighborhoods, each with its own character, price
          range, and housing stock. Whether you want a custom estate on the golf course, a lock-and-leave
          villa, or a three- to five-bedroom street near Bishop Gorman High School (2.2 miles), Dr. Jan Duffy
          can match the enclave to the address.
        </p>

        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {NEIGHBORHOODS.map((n) => (
            <li key={n.slug}>
              <article className="flex h-full flex-col rounded-lg border border-[#e8ddd0] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <CardVisual seed={n.slug} />
                <h2 className="mb-2 text-xl font-semibold text-[#2d2318]">
                  <Link href={`/neighborhoods/${n.slug}`} className="hover:underline">
                    {n.name}
                  </Link>
                </h2>
                <p className="mb-4 flex-1 text-sm text-[#5c4a3a]">{n.shortDescription}</p>
                <p className="mb-4 text-xs font-medium uppercase tracking-wide text-[#6f5237]">
                  {n.priceRange}
                </p>
                <Button asChild variant="outline" size="sm" className="w-fit">
                  <Link href={`/neighborhoods/${n.slug}`}>Homes for sale in {n.name}</Link>
                </Button>
              </article>
            </li>
          ))}
        </ul>

        <section className="mt-14 border-t border-[#e8ddd0] pt-10">
          <h2 className="mb-4 text-2xl font-semibold text-[#2d2318]">Homes for sale in each enclave</h2>
          <p className="mb-6 text-[#5c4a3a]">
            Open an enclave to see live listings in that neighborhood&apos;s typical price band, plus sold comps
            Dr. Jan Duffy will verify before you tour or list.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/spanish-trail-homes-for-sale-las-vegas">View All Listings</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Dr. Jan Duffy</Link>
            </Button>
          </div>
        </section>
      </div>
      <FaqSection
        headingId="neighborhoods-faq-heading"
        eyebrow="Spanish Trail neighborhoods"
        heading="How to choose among the 11 enclaves"
        intro="Match square footage, golf frontage, and lock-and-leave needs before you tour. Dr. Jan Duffy clears the gate for the villages that fit."
        items={neighborhoodsFaq}
      />
    </SiteShell>
  )
}
