import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Breadcrumbs } from '@/components/breadcrumbs'
import { RealScoutSection } from '@/components/realscout-section'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { homeDeepDive, neighborhoodSpotlights } from '@/lib/spanishTrailContent'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { createOgImageUrl, getCanonicalUrl, createArticleSchema, createBreadcrumbSchema } from '@/lib/structuredData'
import { SectionBanner, CardVisual } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-insights'

const advisoryHighlights = [
  'Concierge introductions to country club membership teams and lifestyle programming',
  'Scenario planning for jumbo, portfolio, and cross-collateral financing strategies',
  'Vendor recommendations for renovations that align with Spanish Trail architectural guidelines',
  'Quarterly valuation check-ins and exit strategies for homeowners and investors',
]

const insightsFaq = [
  {
    question: 'How often are Spanish Trail Insights updated?',
    answer:
      'Insights are refreshed weekly based on new listings, sales activity, club programming updates, and market shifts. Dr. Jan Duffy shares these observations through briefings that reflect on-the-ground research and real-time buyer behavior patterns. Subscribe to receive updates via email or follow along on the website.',
  },
  {
    question: 'What topics do the insights cover?',
    answer:
      'The insights dive into market momentum, lifestyle trends (golf, dining, social events), renovation priorities that increase value, strategic financing approaches, neighborhood comparisons, club membership considerations, and investment outlook. Each briefing distills complex market data into actionable guidance for buyers, sellers, and investors.',
  },
  {
    question: 'Can insights help me decide between different Spanish Trail enclaves?',
    answer:
      'Absolutely. The insights include detailed neighborhood spotlights comparing enclaves by lifestyle (full-time vs. seasonal), amenities (golf course proximity, secondary gates), price points, HOA fees, and buyer demographics. Dr. Duffy uses these insights during buyer consultations to match clients with the Spanish Trail section that best aligns with their goals.',
  },
  {
    question: 'How do insights differ from the market report?',
    answer:
      'The market report focuses on quantitative data (pricing, inventory, absorption rates). Insights provide qualitative analysis, strategic recommendations, lifestyle context, and forward-looking trends. Together, they offer a complete picture: the numbers tell you what\'s happening, while insights explain why and what it means for your specific situation.',
  },
  {
    question: 'Do insights include information about off-market opportunities?',
    answer:
      'While specific off-market listings aren\'t published publicly, insights frequently discuss market conditions that indicate upcoming private sales, seller motivations, and timing considerations. Dr. Duffy\'s concierge clients receive direct notifications about off-market opportunities that match their criteria.',
  },
]

const insightsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: insightsFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const insightsArticleSchema = createArticleSchema({
  headline: 'Spanish Trail Real Estate Insights & Market Analysis',
  description: 'Deep-dive analysis of Spanish Trail homes, lifestyle, renovations, and financing tips curated by Dr. Jan Duffy for discerning buyers and sellers.',
  path: '/spanish-trail-insights',
  datePublished: '2026-01-15',
  dateModified: '2026-06-07',
  articleSection: 'Real Estate Market Analysis',
})

const insightsBreadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Buyers', url: '/buyers' },
  { name: 'Spanish Trail Insights', url: '/spanish-trail-insights' },
])

export const metadata: Metadata = {
  title: 'Spanish Trail Real Estate Insights | Dr. Jan Duffy',
  description:
    'Deep-dive analysis of Spanish Trail homes, lifestyle, renovations, and financing tips curated by Dr. Jan Duffy for discerning buyers and sellers.',
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-insights'),
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
    title: 'Spanish Trail Insights & Advisory',
    description:
      'Explore data-backed commentary on Spanish Trail real estate, amenities, and strategy from Dr. Jan Duffy of Berkshire Hathaway HomeServices.',
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
    title: 'Spanish Trail Real Estate Insights | Dr. Jan Duffy',
    description:
      'Get deep-dive analysis on Spanish Trail real estate trends, renovations, and club lifestyle from Dr. Jan Duffy.',
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
      <header className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="insights-hero">
      <SectionBanner headingId="insights-hero" />
        <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
          <h1 id="insights-hero" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
            Spanish Trail Homes Insights for Buyers and Sellers
          </h1>
          <p className="text-base leading-relaxed text-[#f8f5ef]/85">
            Access the same research and concierge guidance Dr. Jan Duffy shares with Spanish Trail clients—covering
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
      <RealScoutSection
        id="bhhs-listings"
        eyebrow="Search in Sync"
        title="Pair insights with real-time listings"
        description="Set up alert-driven searches for Spanish Trail enclaves—Dr. Jan Duffy overlays these insights on every property you consider."
        priceMin="500000"
        propertyTypes=",SFR,CONDO"
      />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Buyers', href: '/buyers' },
              { label: 'Spanish Trail Insights' },
            ]}
          />
        </div>
      </div>
      <InsightBriefingsSection />
      <NeighborhoodSpotlightSection />
      <AdvisoryServicesSection />
      <InsightsFAQSection />
      <InsightsCTASection />
      <Script id="insights-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(insightsFaqSchema)}
      </Script>
      <Script id="insights-article-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(insightsArticleSchema)}
      </Script>
      <Script id="insights-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(insightsBreadcrumbSchema)}
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
      <SectionBanner headingId="insight-briefings-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Deep Dive Briefings</p>
          <h2
            id="insight-briefings-heading"
            className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl"
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
              <CardVisual seed={String(topic.title)} />
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
      <SectionBanner headingId="insight-neighborhoods-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Neighborhood Playbook</p>
            <h2
              id="insight-neighborhoods-heading"
              className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
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
      <SectionBanner headingId="advisory-services-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Advisory Services</p>
          <h2
            id="advisory-services-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
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

function InsightsFAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="insights-faq-heading">
      <SectionBanner headingId="insights-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Insights FAQ</p>
          <h2 id="insights-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Frequently asked questions about Spanish Trail insights
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Learn how to use insights effectively, understand market trends, and leverage strategic guidance for your Spanish Trail real estate decisions.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {insightsFaq.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
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

function InsightsCTASection() {
  return (
    <section className="bg-[#0f2b1e] py-20 text-[#f8f5ef] relative isolate overflow-hidden" aria-labelledby="insights-cta-heading">
      <SectionBanner headingId="insights-cta-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 id="insights-cta-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Ready to apply these insights to your move?
        </h2>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Share your timing, budget, and desired lifestyle. Dr. Jan Duffy will translate these insights into a tailored
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

