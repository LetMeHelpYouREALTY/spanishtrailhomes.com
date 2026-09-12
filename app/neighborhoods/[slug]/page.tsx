import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'

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
import { getNeighborhoodBySlug, getNeighborhoodSlugs } from '@/lib/neighborhoods'
import { SectionBanner } from '@/components/heading-media'
import { getSiteImageUrl } from '@/lib/cloudflare-images'
import { DEFAULT_H1_IMAGE, NEIGHBORHOOD_CARD_IMAGES, getAssetAlt } from '@/lib/site-images'


type NeighborhoodPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getNeighborhoodSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: NeighborhoodPageProps): Promise<Metadata> {
  const { slug } = await params
  const neighborhood = getNeighborhoodBySlug(slug)
  if (!neighborhood) return { title: 'Neighborhood Not Found' }

  const title = `${neighborhood.name} | Spanish Trail Neighborhood | Dr. Jan Duffy`
  const description = `${neighborhood.shortDescription} Browse homes for sale in ${neighborhood.name} and connect with Dr. Jan Duffy for market data and listings.`

  return {
    title,
    description,
    alternates: { canonical: getCanonicalUrl(`/neighborhoods/${slug}`) },
    openGraph: {
      url: `https://www.spanishtrailhomes.com/neighborhoods/${slug}`,
      title,
      description,
      images: [
        createOgImageUrl({
          title: neighborhood.name,
          subtitle: 'Spanish Trail Neighborhood',
          eyebrow: 'SpanishTrailHomes.com',
        }),
      ],
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  const { slug } = await params
  const neighborhood = getNeighborhoodBySlug(slug)
  if (!neighborhood) notFound()

  const path = `/neighborhoods/${slug}`
  const neighborhoodWebPageSchema = createWebPageSchema({
    name: `${neighborhood.name} | Spanish Trail Neighborhood`,
    description: neighborhood.shortDescription,
    path,
    type: 'WebPage',
    extra: {
      about: {
        '@type': 'Place',
        name: neighborhood.name,
        description: neighborhood.shortDescription,
        containedInPlace: {
          '@type': 'Place',
          name: 'Spanish Trail',
          address: { '@type': 'PostalAddress', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89113' },
        },
      },
    },
  })

  const neighborhoodBreadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Neighborhoods', url: '/neighborhoods' },
    { name: neighborhood.name, url: path },
  ])

  return (
    <SiteShell>
      <Script
        id={`neighborhood-${slug}-schema`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([neighborhoodWebPageSchema, neighborhoodBreadcrumbSchema]),
        }}
      />

      <HeroBackground
        src={getSiteImageUrl(NEIGHBORHOOD_CARD_IMAGES[slug] ?? DEFAULT_H1_IMAGE)}
        alt={getAssetAlt(NEIGHBORHOOD_CARD_IMAGES[slug] ?? DEFAULT_H1_IMAGE)}
        title={neighborhood.name}
        subtitle={neighborhood.shortDescription}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Neighborhoods', href: '/neighborhoods' },
          { label: neighborhood.name, href: path },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <div className="mb-8 flex flex-wrap gap-4 text-sm">
          <span className="rounded-full bg-[#e8ddd0] px-3 py-1 font-medium text-[#5c4a3a]">
            {neighborhood.priceRange}
          </span>
          {neighborhood.propertyTypes.map((t) => (
            <span key={t} className="rounded-full bg-[#f0ebe3] px-3 py-1 text-[#5c4a3a]">
              {t}
            </span>
          ))}
        </div>

        <section className="prose prose-[#372a20] max-w-none" aria-labelledby="about-neighborhood">
          <SectionBanner headingId="about-neighborhood" />
          <h2 id="about-neighborhood" className="font-playfair text-2xl font-semibold text-[#2d2318]">
            About {neighborhood.name}
          </h2>
          {neighborhood.bodyParagraphs.map((p, i) => (
            <p key={i} className="text-[#5c4a3a] leading-relaxed">
              {p}
            </p>
          ))}
        </section>

        <section className="mt-10" aria-labelledby="features">
          <SectionBanner headingId="features" />
          <h2 id="features" className="font-playfair text-xl font-semibold text-[#2d2318]">
            What {neighborhood.name} Offers
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-[#5c4a3a]">
            {neighborhood.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-2xl border border-[#e8ddd0] bg-[#faf8f5] p-6 sm:p-8 relative isolate overflow-hidden" aria-labelledby="cta">
          <SectionBanner headingId="cta" />
          <h2 id="cta" className="font-playfair text-xl font-semibold text-[#2d2318]">
            View Listings in {neighborhood.name}
          </h2>
          <p className="mt-2 text-[#5c4a3a]">
            See current homes for sale across Spanish Trail and filter by area. Dr. Jan Duffy can provide
            a tailored market briefing and private showings for {neighborhood.name} and surrounding enclaves.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/spanish-trail-homes-for-sale-las-vegas">Browse Spanish Trail Listings</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Dr. Jan Duffy</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/neighborhoods">All 11 Neighborhoods</Link>
            </Button>
          </div>
        </section>

        <p className="mt-10 text-center text-sm text-[#5c4a3a]/80">
          <Link href="/neighborhoods" className="underline underline-offset-4 hover:no-underline">
            All Neighborhoods
          </Link>
          {' · '}
          <Link href="/spanish-trail-homes-for-sale-las-vegas" className="underline underline-offset-4 hover:no-underline">
            Homes for Sale
          </Link>
          {' · '}
          <Link href="/contact" className="underline underline-offset-4 hover:no-underline">
            Contact
          </Link>
        </p>
      </div>
    </SiteShell>
  )
}
