import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { HeroBackground } from '@/components/hero-background'
import { GbpFaqList } from '@/components/gbp-faq-list'
import {
  createWebPageSchema,
  createBreadcrumbSchema,
  createFaqPageSchema,
  getCanonicalUrl,
} from '@/lib/structuredData'
import { NEIGHBORHOODS } from '@/lib/neighborhoods'
import { CardVisual } from '@/components/heading-media'
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
    images: [
      sitePhotoOg('h2-neighborhood-street'),
    ],
  },
}

const neighborhoodsFaq = [
  {
    question: 'How many neighborhoods are inside Spanish Trail?',
    answer:
      'Spanish Trail has 11 enclaves: Estates, Estates West, Courtyards, Gardens, Links, Carmels, Springs, Plum Creek, Villas, Islands, and Innisbrook Estates. Dr. Jan Duffy matches square footage, commute, and HOA dues to the right village.',
  },
  {
    question: 'Where is Spanish Trail relative to Bishop Gorman High School?',
    answer:
      'Bishop Gorman High School is about 2.2 miles northeast of Spanish Trail via S. Rainbow Blvd. Faith Lutheran Middle & High School and Durango High School are also a short drive. The community ZIP is 89113.',
  },
  {
    question: 'How do I tour a Spanish Trail neighborhood?',
    answer:
      'Call (702) 766-3299 for guard-gate clearance. The office is 5050 Spanish Trail Ln, Las Vegas, NV 89113, Sunday–Saturday 9:00 AM–6:00 PM. Open an enclave page for live listings, then book a private showing.',
  },
  {
    question: 'Which enclaves are lock-and-leave versus larger lots?',
    answer:
      'Courtyards, Gardens, and Villas are often chosen for lock-and-leave square footage. Estates, Estates West, and Springs typically offer larger lots and dedicated office space. Dr. Duffy maps HOA dues and commute times before you tour.',
  },
]

export default function NeighborhoodsHubPage() {
  return (
    <SiteShell>
      <Script
        id="neighborhoods-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            neighborhoodsWebPageSchema,
            neighborhoodsBreadcrumbSchema,
            createFaqPageSchema(neighborhoodsFaq),
          ]),
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

        <GbpFaqList
          headingId="neighborhoods-faq-heading"
          title="Spanish Trail neighborhood FAQ"
          items={neighborhoodsFaq}
        />
      </div>
    </SiteShell>
  )
}
