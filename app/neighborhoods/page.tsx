import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { HeroBackground } from '@/components/hero-background'
import {
  createOgImageUrl,
  createWebPageSchema,
  createBreadcrumbSchema,
  getCanonicalUrl,
} from '@/lib/structuredData'
import { NEIGHBORHOODS } from '@/lib/neighborhoods'
import { CardVisual } from '@/components/heading-media'
import { getSiteImageUrl } from '@/lib/cloudflare-images'
import { getAssetAlt } from '@/lib/site-images'


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
      createOgImageUrl({
        title: 'Spanish Trail Neighborhoods',
        subtitle: '11 distinct communities inside the gates',
        eyebrow: 'SpanishTrailHomes.com',
      }),
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
          __html: JSON.stringify([neighborhoodsWebPageSchema, neighborhoodsBreadcrumbSchema]),
        }}
      />

      <HeroBackground
        src={getSiteImageUrl('h2-neighborhood-street')}
        alt={getAssetAlt('h2-neighborhood-street')}
        title="Spanish Trail Homes | 11 Neighborhoods"
        subtitle="Match the enclave, then buy or sell with Dr. Jan Duffy"
      />

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
                  <Link href={`/neighborhoods/${n.slug}`}>Explore {n.name}</Link>
                </Button>
              </article>
            </li>
          ))}
        </ul>

        <section className="mt-14 border-t border-[#e8ddd0] pt-10">
          <h2 className="mb-4 text-2xl font-semibold text-[#2d2318]">Buy or sell in this neighborhood</h2>
          <p className="mb-6 text-[#5c4a3a]">
            Ready to see what’s for sale in your favorite neighborhood? Browse current Spanish Trail
            listings or reach out for a personalized market briefing.
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
    </SiteShell>
  )
}
