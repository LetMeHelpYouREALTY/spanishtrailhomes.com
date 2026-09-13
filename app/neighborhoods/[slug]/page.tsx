import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button, buttonVariants } from '@/components/ui/button'
import { CalendlyLink } from '@/components/calendly-link'
import { HeroBackground } from '@/components/hero-background'
import {
  createOgImageUrl,
  createWebPageSchema,
  createBreadcrumbSchema,
  getCanonicalUrl,
} from '@/lib/structuredData'
import {
  getNeighborhoodBySlug,
  getNeighborhoodFaqs,
  getNeighborhoodListingFilter,
  getNeighborhoodSlugs,
} from '@/lib/neighborhoods'
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

  const title = `Homes for Sale in ${neighborhood.name}, Spanish Trail 89113 | Dr. Jan Duffy`
  const description = `${neighborhood.shortDescription} Live listings in ${neighborhood.name}'s ${neighborhood.priceRange} band. Buy or sell with Dr. Jan Duffy. Call (702) 766-3299.`

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
          title: `Homes for sale in ${neighborhood.name}`,
          subtitle: 'Spanish Trail 89113 listing hub',
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
  const listing = getNeighborhoodListingFilter(neighborhood.slug)
  const faqs = getNeighborhoodFaqs(neighborhood)
  const h1 = `Homes for sale in ${neighborhood.name}, Spanish Trail 89113`

  const neighborhoodWebPageSchema = createWebPageSchema({
    name: h1,
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <SiteShell>
      <Script
        id={`neighborhood-${slug}-schema`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([neighborhoodWebPageSchema, neighborhoodBreadcrumbSchema, faqSchema]),
        }}
      />

      <HeroBackground
        src={getSiteImageUrl(NEIGHBORHOOD_CARD_IMAGES[slug] ?? DEFAULT_H1_IMAGE)}
        alt={getAssetAlt(NEIGHBORHOOD_CARD_IMAGES[slug] ?? DEFAULT_H1_IMAGE)}
        title={h1}
        subtitle={`Buy and sell ${neighborhood.name} homes with Dr. Jan Duffy · ${neighborhood.priceRange}`}
        description="Live GLVAR inventory in this enclave's typical price band. Confirm the street with Dr. Duffy before you tour."
      />
      <RealScoutSection
        id="bhhs-listings"
        eyebrow={`${neighborhood.name} inventory`}
        title={`${neighborhood.name} homes for sale`}
        description={
          <>
            Showing Spanish Trail homes in {neighborhood.name}&apos;s typical band ({neighborhood.priceRange}
            ). The widget filters by price and property type—Dr. Jan Duffy confirms the street, square footage, and
            gate access before a showing. Call{' '}
            <a href="tel:+17027663299" className="underline underline-offset-4 hover:no-underline">
              (702) 766-3299
            </a>
            .
          </>
        }
        priceMin={listing.priceMin}
        priceMax={listing.priceMax}
        propertyTypes={listing.propertyTypes}
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
            What {neighborhood.name} offers
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-[#5c4a3a]">
            {neighborhood.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
      </div>

      <RealScoutSection
        id={`${slug}-sold`}
        eyebrow="Recent sales"
        title={`Sold homes in the ${neighborhood.name} price band`}
        description={
          <>
            Live sold feed in {neighborhood.name}&apos;s {neighborhood.priceRange} range. Dr. Duffy will confirm street,
            square footage, close price, and date from GLVAR before you write an offer or set a list price—no guessed
            comps on this page.
          </>
        }
        listingStatus="Sold"
        priceMin={listing.priceMin}
        priceMax={listing.priceMax}
        propertyTypes={listing.propertyTypes}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <section className="mt-2" aria-labelledby={`${slug}-faq-heading`}>
          <SectionBanner headingId={`${slug}-faq-heading`} />
          <h2 id={`${slug}-faq-heading`} className="font-playfair text-2xl font-semibold text-[#2d2318]">
            {neighborhood.name} buyer and seller questions
          </h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((item) => (
              <div key={item.question}>
                <dt className="font-semibold text-[#2d2318]">{item.question}</dt>
                <dd className="mt-2 text-[#5c4a3a] leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          className="relative isolate mt-12 overflow-hidden rounded-2xl border border-[#e8ddd0] bg-[#faf8f5] p-6 sm:p-8"
          aria-labelledby="cta"
        >
          <SectionBanner headingId="cta" />
          <h2 id="cta" className="font-playfair text-xl font-semibold text-[#2d2318]">
            Tour {neighborhood.name} or price a home here
          </h2>
          <p className="mt-2 text-[#5c4a3a]">
            Dr. Jan Duffy buys and sells {neighborhood.name} addresses inside Spanish Trail, Las Vegas NV 89113.
            Berkshire Hathaway HomeServices Nevada Properties. 5050 Spanish Trail Ln. Call (702) 766-3299.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <CalendlyLink
              className={buttonVariants()}
              ctaText={`Tour ${neighborhood.name}`}
              ctaLocation={`${slug}-hub`}
            >
              Book a {neighborhood.name} tour
            </CalendlyLink>
            <Button asChild variant="outline">
              <a href="tel:+17027663299">Call (702) 766-3299</a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/sellers">Seller CMA for this enclave</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/neighborhoods">All 11 neighborhoods</Link>
            </Button>
          </div>
        </section>

        <p className="mt-10 text-center text-sm text-[#5c4a3a]/80">
          <Link href="/neighborhoods" className="underline underline-offset-4 hover:no-underline">
            All Neighborhoods
          </Link>
          {' · '}
          <Link href="/spanish-trail-homes-for-sale-las-vegas" className="underline underline-offset-4 hover:no-underline">
            All Spanish Trail Homes for Sale
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
