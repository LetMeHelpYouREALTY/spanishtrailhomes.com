import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Breadcrumbs } from '@/components/breadcrumbs'
import { RealScoutSection } from '@/components/realscout-section'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { featuredListings, marketHighlights } from '@/lib/spanishTrailContent'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { createOgImageUrl, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner, CardVisual } from '@/components/heading-media'


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

const marketReportFaq = [
  {
    question: 'How often is the Spanish Trail Market Report updated?',
    answer:
      'The market report is refreshed every Friday with the latest pricing trends, absorption rates, and inventory data from Berkshire Hathaway HomeServices, RealScout buyer activity, and private broker feedback. Dr. Jan Duffy personally compiles this data to ensure accuracy and relevance for buyers and sellers making timely decisions.',
  },
  {
    question: 'What key metrics should I focus on when reviewing the market report?',
    answer:
      'Pay attention to median sale price, days on market, inventory levels, and price per square foot trends. These metrics help buyers understand competition levels and pricing expectations, while sellers can gauge market velocity and optimal listing timing. Dr. Duffy provides context for each metric during consultation sessions.',
  },
  {
    question: 'How does the Spanish Trail market compare to other Las Vegas luxury communities?',
    answer:
      'Spanish Trail typically shows stronger price stability and faster absorption rates compared to newer master-planned communities due to its established guard gates, mature landscaping, and triple-course golf amenities. The community\'s proximity to the Strip (15 minutes) and established club programming create consistent buyer demand. Dr. Duffy provides detailed comparisons during strategy sessions.',
  },
  {
    question: 'Can I get a custom market analysis for my specific Spanish Trail property?',
    answer:
      'Yes. Dr. Duffy offers personalized equity reviews and comparative market analyses (CMAs) tailored to your exact property, enclave, and timing goals. This includes recent comparable sales, current active listings, pending transactions, and off-market opportunities. Contact her at (702) 766-3299 to request a custom report.',
  },
  {
    question: 'What factors influence Spanish Trail pricing beyond the report numbers?',
    answer:
      'Beyond basic metrics, factors like golf course views, secondary gate access, recent renovations, lot size, and proximity to clubhouse significantly impact pricing. Premium properties may command 15-25% above median values. Dr. Duffy evaluates these qualitative factors during property tours and pricing consultations.',
  },
]

const marketReportFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: marketReportFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export const metadata: Metadata = {
  title: 'Spanish Trail Market Report | Dr. Jan Duffy',
  description:
    'Review current Spanish Trail housing stats, featured listings, and RealScout-powered search insights curated by Dr. Jan Duffy.',
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-market-report'),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    url: pageUrl,
    title: 'Spanish Trail Real Estate Market Report',
    description:
      'Track pricing trends, absorption rates, and featured Spanish Trail listings updated by Dr. Jan Duffy of Berkshire Hathaway HomeServices.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Market Report',
        subtitle: 'Weekly pricing & absorption insights',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Market Report | Dr. Jan Duffy',
    description:
      'Stay ahead of Spanish Trail real estate trends with updated stats, featured listings, and concierge advisory from Dr. Jan Duffy.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Market Intelligence',
        subtitle: 'Data-driven advisory by Dr. Jan Duffy',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function SpanishTrailMarketReportPage() {
  return (
    <SiteShell>
      <header className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="market-report-hero">
      <SectionBanner headingId="market-report-hero" />
        <div className="mx-auto max-w-4xl space-y-5 px-6 text-center">
          <h1 id="market-report-hero" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
            Spanish Trail Homes Market Report
          </h1>
          <p className="text-base leading-relaxed text-[#f8f5ef]/85">
            Monitor real-time pricing, active inventory, and demand signals across Spanish Trail&apos;s eleven guard-gated
            neighborhoods. Insights are refreshed weekly by Dr. Jan Duffy to support confident purchase and listing
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
      <RealScoutSection
        id="bhhs-listings"
        eyebrow="Live Listings"
        title="Browse Spanish Trail homes in real time"
        description="Use RealScout filters to fine-tune price, home style, and guard-gated enclaves. Save favorites or request showings instantly."
        priceMin="500000"
        propertyTypes=",SFR,CONDO"
      />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Buyers', href: '/buyers' },
              { label: 'Spanish Trail Market Report' },
            ]}
          />
        </div>
      </div>
      <MarketHighlightsSection />
      <FeaturedListingsSection />
      <MarketReportFAQSection />
      <ReportingCTASection />
      <Script id="market-report-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(marketReportFaqSchema)}
      </Script>
      <Script id="featured-listings-structured-data" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(featuredListingsSchema)}
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
      <SectionBanner headingId="market-highlights-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Market Indicators</p>
            <h2 id="market-highlights-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Key metrics driving Spanish Trail decisions
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Updated every Friday from Berkshire Hathaway HomeServices data, RealScout buyer activity, and private broker
              feedback gathered by Dr. Jan Duffy.
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
              <CardVisual seed={String(item.label)} />
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">{item.label}</p>
              <p className="mt-3 font-[var(--font-playfair)] text-2xl text-[#1f2a24]">{item.value}</p>
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
      <SectionBanner headingId="featured-listings-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Featured Inventory</p>
            <h2
              id="featured-listings-heading"
              className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl"
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
              <CardVisual seed={String(listing.address)} />
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">{listing.mls}</p>
                <h3 className="font-[var(--font-playfair)] text-2xl text-[#1f2a24]">
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

function MarketReportFAQSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="market-report-faq-heading">
      <SectionBanner headingId="market-report-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Market Report FAQ</p>
          <h2 id="market-report-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Frequently asked questions about Spanish Trail market data
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Understand how to interpret market trends, request custom analyses, and use this data to make confident real estate decisions.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {marketReportFaq.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
              <CardVisual seed={String(item.question)} />
              <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-[#0f2b1e]">
                {item.question}
              </h3>
              <p className="text-base leading-relaxed text-[#372a20]/85">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReportingCTASection() {
  return (
    <section className="bg-[#0f2b1e] py-20 text-[#f8f5ef] relative isolate overflow-hidden" aria-labelledby="reporting-cta-heading">
      <SectionBanner headingId="reporting-cta-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2
          id="reporting-cta-heading"
          className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl"
        >
          Need a custom valuation or pricing strategy?
        </h2>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Receive a personalized equity review, staged listing plan, or weekly buyer demand digest crafted by Dr. Jan Duffy
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

