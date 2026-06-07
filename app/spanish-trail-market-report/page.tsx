import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Breadcrumbs } from '@/components/breadcrumbs'
import { RealScoutSection } from '@/components/realscout-section'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { featuredListings, marketHighlights } from '@/lib/spanishTrailContent'
import { HeroSearchWidget } from '@/components/hero-search-widget'

const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-market-report'

const featuredListingsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: featuredListings.map((listing, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: listing.href,
    name: `${listing.address} | ${listing.price}`,
    item: {
      '@type': 'SingleFamilyResidence',
      name: listing.address,
      address: listing.address,
      numberOfRooms: listing.type,
      price: listing.price,
      url: listing.href,
    },
  })),
}

// Article schema for AEO (updated weekly for freshness signals)
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${pageUrl}#article`,
  headline: 'Spanish Trail Market Report - Weekly Pricing & Inventory Data',
  description: 'Real-time Spanish Trail real estate market analysis. Median home prices, days on market, inventory levels, and neighborhood trends updated weekly by Dr. Janet Duffy.',
  author: {
    '@type': 'Person',
    '@id': 'https://www.spanishtrailhomes.com#drjanetduffy',
    name: 'Dr. Janet Duffy',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.spanishtrailhomes.com#organization',
    name: 'Spanish Trail Homes by Dr. Janet Duffy',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.spanishtrailhomes.com/og-image.png',
    },
  },
  datePublished: '2024-01-01',
  dateModified: new Date().toISOString().split('T')[0], // Critical for AEO - 83% of AI citations from recent updates
  image: `${pageUrl}/og-image.png`,
  mainEntityOfPage: pageUrl,
  articleSection: 'Market Analysis',
  keywords: ['Spanish Trail market report', 'Las Vegas real estate trends', 'Spanish Trail home prices', '89117 market data'],
  inLanguage: 'en-US',
  about: [
    {
      '@type': 'Thing',
      name: 'Spanish Trail Real Estate Market',
    },
    {
      '@type': 'Place',
      name: 'Spanish Trail, Las Vegas, NV 89117',
    },
  ],
}

export const metadata: Metadata = {
  title: 'Spanish Trail Market Report 2026 | Weekly Pricing & Inventory Data',
  description:
    'Spanish Trail real estate market report updated weekly. Current home prices, days on market, inventory levels, and neighborhood trends. Expert analysis by Dr. Janet Duffy, Berkshire Hathaway HomeServices.',
  alternates: {
    canonical: '/spanish-trail-market-report',
  },
  openGraph: {
    url: pageUrl,
    title: 'Spanish Trail Market Report - Real-Time Pricing & Inventory',
    description:
      'Weekly Spanish Trail market analysis: median prices, absorption rates, inventory trends. Updated every Friday by Dr. Janet Duffy.',
    images: [`${pageUrl}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Market Report | Weekly Updates',
    description: 'Real-time Spanish Trail pricing, inventory, and market trends. Updated weekly by Dr. Janet Duffy.',
  },
}

export default function SpanishTrailMarketReportPage() {
  return (
    <SiteShell>
      <header className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="market-report-hero">
        <div className="mx-auto max-w-4xl space-y-5 px-6 text-center">
          <h1 id="market-report-hero" className="font-(--font-playfair) text-3xl leading-tight sm:text-4xl">
            Spanish Trail Market Report
          </h1>
          <p className="text-base leading-relaxed text-[#f8f5ef]/85">
            Monitor real-time pricing, active inventory, and demand signals across Spanish Trail&apos;s eleven guard-gated
            neighborhoods. Insights are refreshed weekly by Dr. Janet Duffy to support confident purchase and listing
            decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              className="rounded-full bg-white px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
            >
              <Link href="#spanish-trail-market-highlights">Jump to key stats</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
            >
              <Link href="#spanish-trail-featured-listings">See featured listings</Link>
            </Button>
          </div>
        </div>
        <HeroSearchWidget theme="dark" />
      </header>
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Spanish Trail Market Report' },
            ]}
          />
        </div>
      </div>
      <MarketHighlightsSection />
      <RealScoutSection
        id="spanish-trail-live-listings"
        eyebrow="Live Listings"
        title="Browse Spanish Trail homes in real time"
        description="Use RealScout filters to fine-tune price, home style, and guard-gated enclaves. Save favorites or request showings instantly."
        priceMin="500000"
        propertyTypes=",SFR,CONDO"
      />
      <FeaturedListingsSection />
      <ReportingCTASection />
      <Script id="featured-listings-structured-data" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(featuredListingsSchema)}
      </Script>
      <Script id="market-report-article-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(articleSchema)}
      </Script>
    </SiteShell>
  )
}

function MarketHighlightsSection() {
  return (
    <section
      id="spanish-trail-market-highlights"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="market-highlights-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Market Indicators</p>
            <h2 id="market-highlights-heading" className="font-(--font-playfair) text-3xl text-foreground sm:text-4xl">
              Key metrics driving Spanish Trail decisions
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Updated every Friday from Berkshire Hathaway HomeServices data, RealScout buyer activity, and private broker
              feedback gathered by Dr. Janet Duffy.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
          >
            <Link href="/contact">Request a custom report</Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
          {marketHighlights.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">{item.label}</p>
              <p className="mt-3 font-(--font-playfair) text-2xl text-[#1f2a24]">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.trend} change</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.context}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedListingsSection() {
  return (
    <section
      id="spanish-trail-featured-listings"
      className="bg-[#f8f2e7] py-20 sm:py-24"
      aria-labelledby="featured-listings-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Featured Inventory</p>
            <h2
              id="featured-listings-heading"
              className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl"
            >
              Spotlight Spanish Trail listings
            </h2>
            <p className="text-base leading-relaxed text-[#372a20]/85">
              Preview hand-selected properties currently available through Berkshire Hathaway HomeServices Nevada
              Properties. Reach out for private tours or off-market briefings.
            </p>
          </div>
          <Button
            asChild
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="https://searchforaffordablehomes.com/neighborhood/83/spanish-trails#featured-listings">
              Speak with Dr. Duffy
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredListings.map((listing) => (
            <article
              key={listing.address}
              className="flex h-full flex-col justify-between rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">{listing.mls}</p>
                <h3 className="font-(--font-playfair) text-2xl text-[#1f2a24]">
                  {listing.address}
                </h3>
                <p className="text-sm text-[#372a20]/80">{listing.type}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-[#0f2b1e]">{listing.price}</span>
                <Button
                  asChild
                  variant="link"
                  className="text-xs uppercase tracking-[0.3em] text-primary"
                >
                  <Link href={listing.href} target="_blank" rel="noopener noreferrer">
                    View Listing
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReportingCTASection() {
  return (
    <section className="bg-[#0f2b1e] py-20 text-[#f8f5ef]" aria-labelledby="reporting-cta-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2
          id="reporting-cta-heading"
          className="font-(--font-playfair) text-3xl leading-tight sm:text-4xl"
        >
          Need a custom valuation or pricing strategy?
        </h2>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Receive a personalized equity review, staged listing plan, or weekly buyer demand digest crafted by Dr. Janet
          Duffy. Share your goals and preferred timeline to get started.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href="/contact">Request market analysis</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/sellers">Explore seller services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

