import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Button } from '@/components/ui/button'
import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { marketHighlights, neighborhoodSpotlights } from '@/lib/spanishTrailContent'
import { createBreadcrumbSchema, createOgImageUrl, createWebPageSchema } from '@/lib/structuredData'
import { HeroBackground } from '@/components/hero-background'

const pageUrl = 'https://www.spanishtrailhomes.com/'
const homePageDescription =
  'Explore Spanish Trail homes for sale, guard-gated amenities, and club lifestyle insights curated by Dr. Janet Duffy of Berkshire Hathaway HomeServices. Browse listings, market data, and neighborhood guides tailored to Las Vegas 89117.'

const homeWebPageSchema = createWebPageSchema({
  name: 'Spanish Trail Homes for Sale | Dr. Janet Duffy',
  description: homePageDescription,
  path: '/',
  type: 'CollectionPage',
  extra: {
    about: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Janet Duffy',
      url: pageUrl,
      areaServed: 'Spanish Trail, Las Vegas, Nevada',
    },
  },
})

const homeBreadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
])

export const metadata: Metadata = {
  title: 'Spanish Trail Homes for Sale | Dr. Janet Duffy',
  description: homePageDescription,
  authors: [{ name: 'Dr. Janet Duffy', url: 'https://www.spanishtrailhomes.com' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: pageUrl,
    type: 'website',
    title: 'Spanish Trail Luxury Homes & Market Intelligence',
    description:
      'Get guard-gated listings, market stats, and insider guidance for Spanish Trail Country Club from Dr. Janet Duffy, Las Vegas luxury real estate advisor.',
    siteName: 'Spanish Trail Homes',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Luxury Homes',
        subtitle: 'Market intelligence & club lifestyle by Dr. Janet Duffy',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Homes & Club Lifestyle by Dr. Janet Duffy',
    description:
      'Track Spanish Trail listings, membership insights, and neighborhood comparisons with Berkshire Hathaway HomeServices specialist Dr. Janet Duffy.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Homes',
        subtitle: 'Guard-gated listings & concierge strategy',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const overviewStats = [
  {
    label: 'Guard-Gated Acres',
    value: '640+',
    description:
      'Lush, all-grass fairways, mature landscaping, and tranquil water features spanning the master plan.',
  },
  {
    label: 'Private Golf Holes',
    value: '27',
    description:
      'Robert Trent Jones Jr. championship design with 120 bunkers, lakes, and streams woven into every layout.',
  },
  {
    label: 'Neighborhoods',
    value: '11',
    description:
      'Townhomes, villas, and custom estates—some with secondary gates for added privacy and exclusivity.',
  },
]


const homeFaq = [
  {
    question: 'How competitive is the current market for Spanish Trail homes?',
    answer:
      'Inventory in Spanish Trail remains limited, with many properties selling within the first two weeks when they are priced correctly. Dr. Janet Duffy prepares buyers with lender introductions, appraisal strategies, and neighborhood intel so they can move decisively. Her Berkshire Hathaway HomeServices network also uncovers private offerings and upcoming listings that never hit public portals, giving clients a competitive advantage.',
  },
  {
    question: 'Which Spanish Trail neighborhoods are best for full-time residents versus seasonal owners?',
    answer:
      'Full-time residents often gravitate toward the Estates, Estates West, and Springs enclaves because they offer larger lots, dedicated office space, and proximity to top-rated schools. Seasonal owners frequently choose the Courtyards, Gardens, and Villas for their lock-and-leave convenience and optional concierge services. Dr. Duffy maps commute times, HOA details, and lifestyle amenities to match each buyer with the right Spanish Trail enclave.',
  },
  {
    question: 'What should buyers budget for HOA dues and club memberships?',
    answer:
      'HOA assessments vary by enclave but generally range from the mid-$200s to the mid-$400s per month, covering guard-gate staffing, landscaping, and community maintenance. Club memberships are optional for homeowners and include multiple categories—full golf, young executive, social, and corporate. Dr. Duffy outlines the latest fee schedules, initiation options, and financing considerations so clients can plan holistically.',
  },
  {
    question: 'Are there renovation restrictions for Spanish Trail homes?',
    answer:
      'The Architectural Review Committee maintains community standards, but it also supports thoughtful modernization. Homeowners submit plans that detail exterior elevations, materials, and landscaping. Dr. Duffy partners with designers experienced in Spanish Trail guidelines to ensure approvals move quickly and projects enhance both property value and neighborhood aesthetics.',
  },
  {
    question: 'How can sellers maximize exposure for Spanish Trail listings?',
    answer:
      'Sellers working with Dr. Duffy benefit from multi-layered marketing: Berkshire Hathaway HomeServices global syndication, hyperlocal campaigns targeting 89117 and Summerlin move-up buyers, and private preview events for Dr. Duffy’s concierge clients. In addition, she deploys analytics-driven pricing models and property-specific landing pages to capture leads around the clock—essential for Spanish Trail homes where discerning buyers often preview online before booking a showing.',
  },
]

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const homeResourceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Spanish Trail Resource Guides',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Spanish Trail Buyer Roadmap',
      url: `${pageUrl}buyers`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Spanish Trail Seller Blueprint',
      url: `${pageUrl}sellers`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Spanish Trail Market Report',
      url: `${pageUrl}spanish-trail-market-report`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Spanish Trail Insights & Editorials',
      url: `${pageUrl}spanish-trail-insights`,
    },
    {
    '@type': 'ListItem',
      position: 5,
      name: 'Las Vegas Luxury Neighborhood Comparisons',
      url: `${pageUrl}las-vegas-luxury-neighborhoods`,
    },
  ],
}

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <RealScoutSection
        id="bhhs-listings"
        title="Berkshire Hathaway Listings in Spanish Trail"
        description="Curated inventory between $500K and $600K inside the 89117 guard gates. For estate homes, secondary-gated enclaves, or off-market introductions, connect with Dr. Janet Duffy."
        priceMin="500000"
        priceMax="600000"
      />
      <AdvancedSearchSection />
      <IntroSection />
      <StatsSection />
      <NeighborhoodSpotlightsSection />
      <MarketPreviewSection />
      <InsightsPreviewSection />
      <ExploreFurtherSection />
      <FAQSection />
      <CTASection />
      <Script id="home-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeBreadcrumbSchema)}
      </Script>
      <Script id="home-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeWebPageSchema)}
      </Script>
      <Script id="home-resource-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeResourceSchema)}
      </Script>
      <Script id="home-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeFaqSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground
        src="https://images.unsplash.com/photo-1474926143295-7f42d6764bed?q=80&auto=format&fit=crop&w=2000"
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/55 to-[#0f2b1e]/80"
        priority
        sizes="(max-width: 1024px) 100vw, 1280px"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background" />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 text-primary-foreground sm:py-32 lg:py-40">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Berkshire Hathaway HomeServices Presents
          </p>
          <h1 id="hero-heading" className="font-heading text-4xl font-semibold tracking-[0.08em] leading-tight sm:text-5xl lg:text-6xl">
            Spanish Trail Homes in Las Vegas 89117
          </h1>
          <p className="text-base leading-relaxed text-primary-foreground/95 sm:text-lg">
            Guard-gated living west of the Las Vegas Strip with direct access to Tropicana Avenue, Rainbow Boulevard, and Spring Valley conveniences. Track new Spanish Trail listings, real-time market shifts, and neighborhood insights curated by Dr. Janet Duffy.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            asChild
            className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.4em] shadow-md shadow-primary/25"
          >
            <Link href="#bhhs-listings">See What’s New</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0d3b2c]/60 bg-background/95 px-8 py-3 text-xs uppercase tracking-[0.4em] text-[#0d3b2c] shadow-md shadow-primary/10 hover:bg-[#0d3b2c]/10"
          >
            <Link href="/contact">Plan a Private Tour</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="bg-white py-20" aria-labelledby="intro-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h2 id="intro-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Why Spanish Trail works for everyday life.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail spans Tropicana Avenue, Rainbow Boulevard, and Hacienda Avenue, just west of I-215. The 640-acre master plan pairs 24/7 security with shimmering lakes, tree-lined fairways, and resort amenities—all minutes from UnCommons, The Bend, and Spring Valley essentials.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            As one of Las Vegas’s original private golf communities, Spanish Trail attracts primary residents and second-home owners alike. Expect daily conveniences—Whole Foods, Trader Joe’s, Downtown Summerlin—within a 10- to 15-minute radius, plus top-tier private schools moments away.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Quick Facts
          </p>
          <dl className="grid grid-cols-1 gap-4 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Location</dt>
              <dd>Spanish Trail, 89117 · Tropicana Ave. & Rainbow Blvd.</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Gate Access</dt>
              <dd>East & West Tropicana gates + Hacienda residents gate</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Lifestyle</dt>
              <dd>Golf, tennis, aquatics, and curated social programming</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Nearby</dt>
              <dd>UnCommons, The Bend, Allegiant Stadium, Downtown Summerlin</dd>
            </div>
          </dl>
          <Button
            asChild
            variant="link"
            className="justify-start px-0 text-xs uppercase tracking-[0.3em] text-primary"
          >
            <Link href="/guest-info#map">View Directions & Map</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="border-y border-[#0b2016] bg-[#0f2b1e]" aria-label="Community highlights">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-20 md:grid-cols-3">
        {overviewStats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-[#1f4a35]/80 bg-[#16402d] p-6 shadow-lg shadow-black/20"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#f8f5ef]/75">
              {item.label}
            </p>
            <p className="mt-4 font-heading text-3xl text-[#f8f5ef]">
              {item.value}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#f8f5ef]/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function NeighborhoodSpotlightsSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="neighborhood-spotlights-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Home Buyer Spotlight</p>
          <h2 id="neighborhood-spotlights-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Preview top enclaves before you tour
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Inside the Spanish Trail gates you&apos;ll discover distinct lifestyles—from double-gated estates to turnkey villas.
            Explore a snapshot below, then dive deeper into every enclave on the dedicated buyer guide.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {neighborhoodSpotlights.slice(0, 2).map((spotlight) => (
            <div
              key={spotlight.name}
              className="rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">
                {spotlight.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#372a20]/85">
                {spotlight.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
          >
            <Link href="/buyers">See the full buyer blueprint</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function MarketPreviewSection() {
  return (
    <section className="border-y border-border/40 bg-white" aria-labelledby="market-preview-heading">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Market Snapshot</p>
            <h2 id="market-preview-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
              Track Spanish Trail performance in real time
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Dr. Janet Duffy refreshes pricing, absorption, and buyer activity every week. Here are the metrics we&apos;re
              watching most closely this month.
            </p>
          </div>
          <Button
            asChild
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="/spanish-trail-market-report">View full market report</Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {marketHighlights.slice(0, 3).map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-border/40 bg-white p-6 shadow-md shadow-primary/10"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">{item.label}</p>
                <p className="mt-3 font-heading text-2xl text-[#1f2a24]">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.trend} change</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.context}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const insightHighlights = [
  'Quarterly Spanish Trail housing update and pricing intel',
  'Lifestyle briefings that showcase how residents use club amenities',
  'Renovation, financing, and advisory guidance tailored to 89117',
]

function InsightsPreviewSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="insights-preview-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Strategy & Advisory</p>
          <h2 id="insights-preview-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Stay informed with Spanish Trail insights
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Go beyond listings with Dr. Duffy&apos;s long-form analysis—designed for buyers, sellers, and investors who want a
            clear playbook for the guard-gated market.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {insightHighlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 text-sm leading-relaxed text-[#372a20]/85 shadow-lg shadow-primary/10"
            >
              {highlight}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
          >
            <Link href="/spanish-trail-insights">Read the full insight hub</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const exploreCards = [
  {
    title: 'Spanish Trail Market Report',
    description: 'Weekly pricing shifts, absorption rates, and buyer demand indicators to guide smart offers.',
    href: '/spanish-trail-market-report',
  },
  {
    title: 'Spanish Trail Insights',
    description: 'Long-form strategy briefs covering lifestyle trends, renovation ROI, and advisory tips.',
    href: '/spanish-trail-insights',
  },
  {
    title: 'Luxury Neighborhood Comparisons',
    description: 'Compare Spanish Trail with The Ridges, Summit Club, and other guard-gated Las Vegas enclaves.',
    href: '/las-vegas-luxury-neighborhoods',
  },
  {
    title: 'Club Lifestyle & Amenities',
    description: 'See dining, wellness, and event programming inside the 50,000 sq. ft. clubhouse.',
    href: '/club#lifestyle',
  },
]

function ExploreFurtherSection() {
  return (
    <section className="bg-[#f9f4eb] py-20 sm:py-24" aria-labelledby="explore-further-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Deeper resources</p>
          <h2 id="explore-further-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Explore the full Spanish Trail knowledge base
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Ready for details beyond the homepage? Jump into curated guides that expand on market performance, lifestyle
            planning, and neighborhood comparisons.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {exploreCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex h-full flex-col justify-between rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">
                  {card.title}
                </p>
                <p className="text-sm leading-relaxed text-[#372a20]/85">{card.description}</p>
              </div>
              <span className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#0f2b1e] group-hover:text-[#0b2016]">
                Discover &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Homes FAQ</p>
        <h2 id="faq-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Answers to the most frequent Spanish Trail real estate questions
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Buyers and sellers trust Dr. Janet Duffy to navigate the nuances of guard-gated transactions. These answers provide clarity on timing, pricing, and strategy so you can move forward with confidence. Need deeper insight? Book a private consultation for guidance tailored to your goals.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {homeFaq.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
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

function CTASection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 id="cta-heading" className="font-heading text-3xl leading-tight sm:text-4xl">
          Ready to explore Spanish Trail homes?
        </h2>
        <p className="text-base leading-relaxed text-primary-foreground/85">
          Schedule a private tour, explore current listings, or request a valuation for your Spanish Trail residence—our concierge team is ready to assist.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-7 py-3 text-xs uppercase tracking-[0.4em] text-[#0f2b1e] hover:bg-[#f1eadd]"
          >
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/70 bg-transparent px-7 py-3 text-xs uppercase tracking-[0.4em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/sellers">Get a Valuation</Link>
          </Button>
        </div>
    </div>
    </section>
  )
}

function AdvancedSearchSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="advanced-search-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4 text-center sm:mx-auto">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Tailored Search</p>
          <h2 id="advanced-search-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Customize your Spanish Trail home search in seconds
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Filter by price point, property style, and lifestyle amenities using our advanced RealScout experience. Save favorites, request tours, or alert Dr. Janet Duffy when the perfect Spanish Trail property appears.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-lg rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
            <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
          </div>
        </div>
      </div>
    </section>
  )
}
