import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Breadcrumbs } from '@/components/breadcrumbs'
import { RealScoutSection } from '@/components/realscout-section'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { homeDeepDive, neighborhoodSpotlights } from '@/lib/spanishTrailContent'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { createOgImageUrl, createWebPageSchema, structuredDataSiteUrl } from '@/lib/structuredData'

const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-insights'

const insightsWebPageSchema = createWebPageSchema({
  name: 'Spanish Trail Real Estate Insights | Dr. Janet Duffy',
  description: 'Deep-dive analysis of Spanish Trail homes, lifestyle, renovations, and financing tips curated by Dr. Janet Duffy for discerning buyers and sellers.',
  path: '/spanish-trail-insights',
  type: 'CollectionPage',
  extra: {
    author: {
      '@id': `${structuredDataSiteUrl}#drjanetduffy`,
    },
    publisher: {
      '@id': `${structuredDataSiteUrl}#business`,
    },
    about: [
      {
        '@type': 'Place',
        name: 'Spanish Trail',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          postalCode: '89117',
        },
      },
      {
        '@type': 'Thing',
        name: 'Luxury Real Estate',
      },
      {
        '@type': 'Thing',
        name: 'Golf Course Communities',
      },
    ],
  },
})

const advisoryHighlights = [
  'Concierge introductions to country club membership teams and lifestyle programming',
  'Scenario planning for jumbo, portfolio, and cross-collateral financing strategies',
  'Vendor recommendations for renovations that align with Spanish Trail architectural guidelines',
  'Quarterly valuation check-ins and exit strategies for homeowners and investors',
]

export const metadata: Metadata = {
  title: 'Spanish Trail Real Estate Insights | Dr. Janet Duffy',
  description:
    'Deep-dive analysis of Spanish Trail homes, lifestyle, renovations, and financing tips curated by Dr. Janet Duffy for discerning buyers and sellers.',
  authors: [{ name: 'Dr. Janet Duffy', url: structuredDataSiteUrl }],
  alternates: {
    canonical: '/spanish-trail-insights',
  },
  openGraph: {
    url: pageUrl,
    type: 'article',
    title: 'Spanish Trail Insights & Advisory',
    description:
      'Explore data-backed commentary on Spanish Trail real estate, amenities, and strategy from Dr. Janet Duffy of Berkshire Hathaway HomeServices.',
    siteName: 'Spanish Trail Homes',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Insights',
        subtitle: 'Market analysis & advisory guidance',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Real Estate Insights | Dr. Janet Duffy',
    description:
      'Get deep-dive analysis on Spanish Trail real estate trends, renovations, and club lifestyle from Dr. Janet Duffy.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Advisory',
        subtitle: 'Concierge insights for buyers & sellers',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function SpanishTrailInsightsPage() {
  return (
    <SiteShell>
      <header className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="insights-hero">
        <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
          <h1 id="insights-hero" className="font-(--font-playfair) text-3xl leading-tight sm:text-4xl">
            Spanish Trail Insights & Advisory
          </h1>
          <p className="text-base leading-relaxed text-[#f8f5ef]/85">
            Access the same research and concierge guidance Dr. Janet Duffy shares with Spanish Trail clients—covering
            market momentum, lifestyle trends, renovation priorities, and strategic financing moves.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              className="rounded-full bg-white px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
            >
              <Link href="#spanish-trail-insight-briefings">Read the briefings</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
            >
              <Link href="/contact">Book a strategy session</Link>
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
              { label: 'Spanish Trail Insights' },
            ]}
          />
        </div>
      </div>
      <InsightBriefingsSection />
      <NeighborhoodSpotlightSection />
      <AdvisoryServicesSection />
      <RealScoutSection
        id="spanish-trail-insight-search"
        eyebrow="Search in Sync"
        title="Pair insights with real-time listings"
        description="Set up alert-driven searches for Spanish Trail enclaves—Dr. Janet Duffy overlays these insights on every property you consider."
        priceMin="500000"
        propertyTypes=",SFR,CONDO"
      />
      <InsightsCTASection />
      <Script id="insights-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(insightsWebPageSchema)}
      </Script>
    </SiteShell>
  )
}

function InsightBriefingsSection() {
  return (
    <section
      id="spanish-trail-insight-briefings"
      className="bg-[#f8f2e7] py-20 sm:py-24"
      aria-labelledby="insight-briefings-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Deep Dive Briefings</p>
          <h2
            id="insight-briefings-heading"
            className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl"
          >
            Guides for buyers, sellers, and investors
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Each article below distills on-the-ground research, Berkshire Hathaway HomeServices analytics, and concierge
            observations from inside the gates.
          </p>
        </div>
        <div className="mt-12 space-y-12">
          {homeDeepDive.map((topic) => (
            <article
              key={topic.title}
              className="space-y-6 rounded-3xl border border-[#d8cdbf] bg-white p-8 shadow-lg shadow-primary/10"
            >
              <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">
                {topic.title}
              </h3>
              {topic.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-[#372a20]/85">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function NeighborhoodSpotlightSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="insight-neighborhoods-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Neighborhood Playbook</p>
            <h2
              id="insight-neighborhoods-heading"
              className="font-(--font-playfair) text-3xl text-foreground sm:text-4xl"
            >
              Compare every Spanish Trail enclave
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              From double-gated estates to lock-and-leave villas, use these notes to match lifestyle goals with the right
              section of the community before touring.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
          >
            <Link href="/buyers">Schedule a buyer consult</Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {neighborhoodSpotlights.map((spotlight) => (
            <div
              key={spotlight.name}
              className="rounded-3xl border border-border/40 bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">{spotlight.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#372a20]/85">
                {spotlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AdvisoryServicesSection() {
  return (
    <section className="bg-[#ebe0d3] py-20 sm:py-24" aria-labelledby="advisory-services-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Advisory Services</p>
          <h2
            id="advisory-services-heading"
            className="font-(--font-playfair) text-3xl text-foreground sm:text-4xl"
          >
            Concierge support from offer to ownership
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Dr. Duffy’s advisory approach centers on discretion, data, and personalization. Expect concierge coordination at
            every step.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {advisoryHighlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-3xl border border-[#d8cdbf] bg-white p-6 text-sm leading-relaxed text-[#372a20]/85 shadow-lg shadow-primary/10"
            >
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function InsightsCTASection() {
  return (
    <section className="bg-[#0f2b1e] py-20 text-[#f8f5ef]" aria-labelledby="insights-cta-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 id="insights-cta-heading" className="font-(--font-playfair) text-3xl leading-tight sm:text-4xl">
          Ready to apply these insights to your move?
        </h2>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Share your timing, budget, and desired lifestyle. Dr. Janet Duffy will translate these insights into a tailored
          action plan—whether you&apos;re buying, selling, or investing in Spanish Trail.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href="/contact">Start the conversation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/sellers">See seller blueprint</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

