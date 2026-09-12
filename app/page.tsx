import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Button } from '@/components/ui/button'
import { CalendlyLink } from '@/components/calendly-link'
import { TrackedSmsLink } from '@/components/tracked-sms-link'
import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { marketHighlights, neighborhoodSpotlights } from '@/lib/spanishTrailContent'
import { marketStats } from '@/lib/marketStats'
import { createBreadcrumbSchema, createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { HeroBackground } from '@/components/hero-background'
import { FeaturedListings } from '@/components/featured-listings'
import { PropertyLightboxProvider, PropertyLightboxTrigger } from '@/components/property-lightbox'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { TourCTAStrip } from '@/components/tour-cta-strip'
import { SectionBanner, CardVisual } from '@/components/heading-media'
import { getSiteImageUrl } from '@/lib/cloudflare-images'


const pageUrl = 'https://www.spanishtrailhomes.com/'
const homePageDescription =
  'Spanish Trail Country Club area homes for sale in Las Vegas, NV 89113—guard-gated private golf community. Search Spanish Trail or Spanish Trails; Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.'

const homeWebPageSchema = createWebPageSchema({
  name: 'Spanish Trail Country Club Homes for Sale | Las Vegas 89113 | Dr. Jan Duffy',
  description: homePageDescription,
  path: '/',
  type: 'CollectionPage',
  extra: {
    about: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      url: pageUrl,
      areaServed: 'Spanish Trail, Las Vegas, Nevada',
    },
  },
})

const homeBreadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
])

export const metadata: Metadata = {
  title: 'Spanish Trail Country Club Homes for Sale | Las Vegas 89113 | Dr. Jan Duffy',
  description: homePageDescription,
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
  openGraph: {
    url: pageUrl,
    title: 'Spanish Trail Guard-Gated Homes & Club Lifestyle | Dr. Jan Duffy',
    description: homePageDescription,
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Luxury Homes',
        subtitle: 'Market intelligence & club lifestyle by Dr. Jan Duffy',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Guard-Gated Homes & Club Lifestyle | Dr. Jan Duffy',
    description: homePageDescription,
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
  {
    label: 'Homes',
    value: '1,200+',
    description:
      'Diverse inventory across all 11 neighborhoods, from lock-and-leave villas to custom golf-course estates.',
  },
]


const homeFaq = [
  {
    question: 'Is it Spanish Trail or Spanish Trails—and where is it in Las Vegas?',
    answer:
      'The correct name is Spanish Trail (singular), a guard-gated master plan in southwest Las Vegas, Nevada, ZIP 89113. Many people type “Spanish Trails” in search; it is the same community. Spanish Trail Country Club operates the private 27-hole golf course inside the gates. If you are searching “Spanish Trail near me” from the Las Vegas Valley, the main entrance and club are off Tropicana and Rainbow—call Dr. Jan Duffy at (702) 766-3299 for directions and guard-gate showing access.',
  },
  {
    question: 'How competitive is the current market for Spanish Trail homes?',
    answer:
      'Inventory in Spanish Trail remains limited, with many properties selling within the first two weeks when they are priced correctly. Dr. Jan Duffy prepares buyers with lender introductions, appraisal strategies, and neighborhood intel so they can move decisively. Her Berkshire Hathaway HomeServices network also uncovers private offerings and upcoming listings that never hit public portals, giving clients a competitive advantage.',
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
      'Sellers working with Dr. Duffy benefit from multi-layered marketing: Berkshire Hathaway HomeServices global syndication, hyperlocal campaigns targeting 89113 and Summerlin move-up buyers, and private preview events for Dr. Duffy’s concierge clients. In addition, she deploys analytics-driven pricing models and property-specific landing pages to capture leads around the clock—essential for Spanish Trail homes where discerning buyers often preview online before booking a showing.',
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
      <PropertyLightboxProvider>
        <HeroSection />
        <AEOAnswerSection />
        <div className="bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }]} />
          </div>
        </div>
        <RealScoutSection
        id="bhhs-listings"
        title="Berkshire Hathaway Listings in Spanish Trail"
        description="Curated inventory between $500K and $600K inside the 89113 guard gates. For estate homes, secondary-gated enclaves, or off-market tours—schedule a showing with Dr. Jan Duffy."
        priceMin="500000"
        priceMax="600000"
      />
        <TourCTAStrip />
      <AdvancedSearchSection />
      <IntroSection />
      <StatsSection />
      <JourneySection />
      <NeighborhoodSpotlightsSection />
      <MarketPreviewSection />
      <TestimonialCarousel />
      <InsightsPreviewSection />
      <ExploreFurtherSection />
      <FAQSection />
      <CTASection />
      </PropertyLightboxProvider>
      <Script id="home-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeBreadcrumbSchema)}
      </Script>
      <Script id="home-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeWebPageSchema)}
      </Script>
      <Script id="home-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeFaqSchema)}
      </Script>
      <Script id="home-resource-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeResourceSchema)}
      </Script>
    </SiteShell>
  )
}

function AEOAnswerSection() {
  return (
    <section className="bg-gradient-to-b from-[#f8f5ef] to-white py-12 sm:py-16" aria-labelledby="aeo-answer">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-[#0f2b1e]/10 bg-white p-8 shadow-xl shadow-primary/5">
          <h2 id="aeo-answer" className="sr-only">What is Spanish Trail?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#1f2a24]">
              Spanish Trail is a 640-acre guard-gated golf community in southwest Las Vegas (ZIP 89113) featuring 1,200+ homes across 11 neighborhoods, a private 27-hole Robert Trent Jones Jr. championship golf course, and resort-style amenities. Properties range from lock-and-leave villas starting around $500K to custom golf course estates exceeding $2M. Dr. Jan Duffy specializes exclusively in Spanish Trail real estate with Berkshire Hathaway HomeServices Nevada Properties.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroSection() {
  return (
    <section
      className="relative isolate overflow-x-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground
        src={getSiteImageUrl('h1-guard-gate')}
        alt="Spanish Trail Country Club guard-gated luxury homes and golf course in Las Vegas 89113"
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/55 to-[#0f2b1e]/80"
        priority
        sizes="(max-width: 1024px) 100vw, 1280px"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-background to-transparent sm:h-36" />

      <div className="mx-auto flex min-h-0 max-w-6xl flex-col gap-6 px-4 pb-16 pt-14 sm:gap-8 sm:px-6 sm:pb-20 sm:pt-16 lg:gap-10 lg:pb-24 lg:pt-20">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          <h1
            id="hero-heading"
            className="font-heading text-3xl font-semibold leading-tight tracking-[0.06em] text-white [text-shadow:0_1px_3px_rgb(0_0_0/35%)] sm:text-4xl sm:tracking-[0.08em] lg:text-5xl xl:text-6xl"
          >
            Spanish Trail Country Club Homes for Sale in Las Vegas
          </h1>
          <p className="text-base font-medium leading-relaxed text-white/95 sm:text-lg sm:leading-relaxed [text-shadow:0_1px_2px_rgb(0_0_0/25%)]">
            Spanish Trail is a private guard-gated golf community in southwest Las Vegas (89113) centered on Spanish Trail Country Club. Whether you searched “Spanish Trail near me,” “Spanish Trails Las Vegas,” or country club homes, Dr. Jan Duffy helps you tour listings, read the market, and buy or sell with Berkshire Hathaway HomeServices— from first search to keys.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <PropertyLightboxTrigger
            openFrom="hero"
            variant="primary"
            className="min-h-11 rounded-full px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] shadow-md shadow-black/20 sm:min-h-12 sm:tracking-[0.4em]"
          />
          <Button
            asChild
            variant="outline"
            className="min-h-11 rounded-full border-2 border-white bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e] shadow-md shadow-black/15 hover:border-white hover:bg-[#eef2ef] hover:text-[#081810] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f2b1e] sm:min-h-12 sm:tracking-[0.4em]"
          >
            <Link href="#bhhs-listings">See What’s New</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="min-h-11 rounded-full border-2 border-white bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e] shadow-md shadow-black/15 hover:border-white hover:bg-[#eef2ef] hover:text-[#081810] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f2b1e] sm:min-h-12 sm:tracking-[0.4em]"
          >
            <Link href="/neighborhoods">Explore Neighborhoods</Link>
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
      <SectionBanner headingId="intro-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h2 id="intro-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Why Spanish Trail works for everyday life.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail spans Tropicana Avenue, Rainbow Boulevard, and Hacienda Avenue, just west of I-215. The 640-acre master plan pairs 24/7 security with shimmering lakes, tree-lined fairways, and resort amenities—all minutes from UnCommons, The Bend, and Spring Valley essentials.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            As one of Las Vegas's original private golf communities, Spanish Trail attracts primary residents and second-home owners seeking golf community homes for sale. Expect daily conveniences—Whole Foods, Trader Joe's, Downtown Summerlin—within a 10- to 15-minute radius, plus top-tier private schools moments away.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            For deeper dives, browse{' '}
            <Link href="/spanish-trail-country-club-estate-listings" className="text-[#0f2b1e] underline-offset-4 hover:underline">
              Spanish Trail Country Club estate listings in Las Vegas
            </Link>
            , work with a{' '}
            <Link href="/spanish-trail-gated-golf-realtor" className="text-[#0f2b1e] underline-offset-4 hover:underline">
              Spanish Trail gated golf community realtor
            </Link>
            , or preview how the club hosts{' '}
            <Link href="/events" className="text-[#0f2b1e] underline-offset-4 hover:underline">
              weddings and private events in Las Vegas
            </Link>
            .
          </p>
          <div className="pt-4">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#0f2b1e]/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e] hover:text-white"
            >
              <Link href="/communities/spanish-trail">Explore Spanish Trail Community</Link>
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">
              What Sets Us Apart
            </p>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-1 size-2 shrink-0 rounded-full bg-secondary" aria-hidden />
                <span><strong className="text-foreground">Concierge Service</strong> — Guard-gate coordination, private showings, and vetted vendor intros from discovery to closing.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 size-2 shrink-0 rounded-full bg-secondary" aria-hidden />
                <span><strong className="text-foreground">Local Expertise</strong> — Deep knowledge of all 11 Spanish Trail neighborhoods, pricing trends, and club lifestyle.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 size-2 shrink-0 rounded-full bg-secondary" aria-hidden />
                <span><strong className="text-foreground">Seamless Experience</strong> — Full-service buy and sell representation with Berkshire Hathaway HomeServices reach.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">
              Quick Facts
            </p>
            <dl className="mt-4 grid grid-cols-1 gap-4 text-sm text-muted-foreground">
              <div>
                <dt className="font-semibold text-foreground">Location</dt>
                <dd>Spanish Trail, 89113 · Tropicana Ave. & Rainbow Blvd.</dd>
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
                <dt className="font-semibold text-foreground">Business</dt>
                <dd>Veteran-Owned Business</dd>
              </div>
            </dl>
            <Button
              asChild
              variant="link"
              className="mt-2 justify-start px-0 text-xs uppercase tracking-[0.3em] text-primary"
            >
              <Link href="/guest-info#map">View Directions to Spanish Trail Country Club</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="border-y border-[#0b2016] bg-[#0f2b1e]" aria-label="Community highlights">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
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

const journeySteps = [
  { title: 'Connect', description: 'Share your must-haves, budget, and timeline. Dr. Duffy aligns you with the right neighborhoods and financing options.' },
  { title: 'Search & Tour', description: 'Browse live listings, private previews, and off-market opportunities. Guard-gate access and showings coordinated around your schedule.' },
  { title: 'Offer & Close', description: 'Data-backed offers, inspection coordination, and negotiation support so you secure the right Spanish Trail home at the right price.' },
  { title: 'Move In', description: 'From keys to concierge intros—club membership, vendors, and community connections so you feel at home from day one.' },
]

function JourneySection() {
  return (
    <section className="border-y border-[#0b2016] bg-[#0f2b1e] py-20 sm:py-24" aria-labelledby="journey-heading">
      <SectionBanner headingId="journey-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/75">Your Path to Spanish Trail</p>
          <h2 id="journey-heading" className="font-heading text-3xl text-[#f8f5ef] sm:text-4xl">
            Your Spanish Trail Journey
          </h2>
          <p className="text-base leading-relaxed text-[#f8f5ef]/85">
            From first conversation to closing, Dr. Jan Duffy guides you through every step with concierge-level service.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, i) => (
            <article
              key={step.title}
              className="rounded-3xl border border-[#1f4a35]/80 bg-[#16402d] p-6 shadow-lg shadow-black/20 text-center"
            >
              <CardVisual seed={String(step.title)} />
              <p className="text-xs uppercase tracking-[0.4em] text-[#f8f5ef]/75">Step {i + 1}</p>
              <h3 className="mt-3 font-heading text-xl text-[#f8f5ef]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#f8f5ef]/80">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function NeighborhoodSpotlightsSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="neighborhood-spotlights-heading">
      <SectionBanner headingId="neighborhood-spotlights-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
      <SectionBanner headingId="market-preview-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Market Snapshot</p>
            <h2 id="market-preview-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
              Current Spanish Trail Market: {marketStats.date_label}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Dr. Jan Duffy refreshes pricing, absorption, and buyer activity every week. Here are the metrics we&apos;re
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
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketHighlights.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-border/40 bg-white p-6 shadow-md shadow-primary/10"
            >
              <CardVisual seed={String(item.label)} />
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
  'Renovation, financing, and advisory guidance tailored to 89113',
]

function InsightsPreviewSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="insights-preview-heading">
      <SectionBanner headingId="insights-preview-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
    title: 'Buy Spanish Trail Homes',
    description: 'Complete buyer guide with concierge tours, financing strategy, and neighborhood insights.',
    href: '/buyers',
  },
  {
    title: 'Sell Your Spanish Trail Home',
    description: 'Expert seller services with market analysis, staging guidance, and premium positioning.',
    href: '/sellers',
  },
  {
    title: 'Live Listings & Market Hub (89113)',
    description: 'MLS-backed search, weekly absorption stats, alerts, and private tour logistics for Spanish Trail—Las Vegas guard-gated golf homes.',
    href: '/spanish-trail-homes-for-sale-las-vegas',
  },
  {
    title: 'Property Types & Neighborhood Guide',
    description: 'Villas, estates, fairway homes, pools, and enclave-by-enclave context before you shop—then jump to the listings hub to tour.',
    href: '/homes-for-sale-in-spanish-trail-las-vegas',
  },
  {
    title: 'Spanish Trail Community',
    description: 'Explore the guard-gated community, amenities, and lifestyle at Spanish Trail Country Club.',
    href: '/communities/spanish-trail',
  },
  {
    title: 'Townhomes & Villas',
    description: 'Discover lock-and-leave Spanish Trail townhomes and villas perfect for second-home owners.',
    href: '/spanish-trail-townhomes-villas',
  },
  {
    title: 'Southwest Las Vegas Luxury',
    description: 'Premium golf course homes for sale in southwest Las Vegas with guard-gated security and championship golf course access.',
    href: '/spanish-trail-southwest-las-vegas-luxury-homes',
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
  {
    title: 'About Dr. Jan Duffy',
    description: 'Learn about Dr. Duffy\'s expertise, credentials, and concierge approach to Spanish Trail real estate.',
    href: '/about',
  },
  {
    title: 'Awards & Recognition',
    description: 'View Dr. Jan Duffy\'s professional achievements and industry recognition.',
    href: '/awards',
  },
  {
    title: 'Membership Information',
    description: 'Explore Spanish Trail Country Club membership categories, benefits, and lifestyle opportunities.',
    href: '/membership',
  },
  {
    title: 'Guest Information',
    description: 'Planning a visit? Get directions, etiquette guidelines, and guest access information.',
    href: '/guest-info',
  },
]

function ExploreFurtherSection() {
  return (
    <section className="bg-[#f9f4eb] py-20 sm:py-24" aria-labelledby="explore-further-heading">
      <SectionBanner headingId="explore-further-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <SectionBanner headingId="faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Homes FAQ</p>
        <h2 id="faq-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Answers to the most frequent Spanish Trail real estate questions
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Buyers and sellers trust Dr. Jan Duffy to navigate the nuances of guard-gated transactions. These answers provide clarity on timing, pricing, and strategy so you can move forward with confidence. Book a tour to see inside, or text your question.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CalendlyLink className="inline-flex items-center justify-center rounded-full bg-[#0f2b1e] px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-[#0f2b1e]/90" ctaText="Book Tour to See Inside" ctaLocation="faq">
            Book Tour to See Inside
          </CalendlyLink>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0f2b1e]/60 px-6 py-2 text-sm font-medium text-[#0f2b1e] hover:bg-[#0f2b1e]/10"
          >
            <TrackedSmsLink intent="question" href="sms:+17027663299?body=I%20have%20a%20question%20about%20Spanish%20Trail%20homes" className="inline-flex items-center" aria-label="Text your question to 702-766-3299">
              Text Your Question: 702-766-3299
            </TrackedSmsLink>
          </Button>
        </div>

        <div className="mt-12 space-y-10">
          {homeFaq.map((item) => (
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

function CTASection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground relative isolate overflow-hidden" aria-labelledby="cta-heading">
      <SectionBanner headingId="cta-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 id="cta-heading" className="font-heading text-3xl leading-tight sm:text-4xl">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-base leading-relaxed text-primary-foreground">
          Book a tour to see inside, text your question, or request a valuation for your Spanish Trail residence. Dr. Jan Duffy is here from first search to closing.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CalendlyLink className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-[#0f2b1e] shadow-md hover:bg-[#f1eadd]" ctaText="Book Tour to See Inside" ctaLocation="footer">
            Book Tour to See Inside
          </CalendlyLink>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/70 bg-transparent px-6 py-2 text-sm font-medium text-[#f8f5ef] hover:bg-white/10"
          >
            <TrackedSmsLink intent="question" href="sms:+17027663299?body=I%20have%20a%20question%20about%20Spanish%20Trail%20homes" className="inline-flex items-center" aria-label="Text your question to 702-766-3299">
              Text Your Question: 702-766-3299
            </TrackedSmsLink>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/70 bg-transparent px-6 py-2 text-sm font-medium text-[#f8f5ef] hover:bg-white/10"
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
      <SectionBanner headingId="advanced-search-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4 text-center sm:mx-auto">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Tailored Search</p>
          <h2 id="advanced-search-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Customize your Spanish Trail home search in seconds
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Filter by price point, property style, and lifestyle amenities using our advanced RealScout experience. Save favorites, request tours, or alert Dr. Jan Duffy when the perfect Spanish Trail property appears.
          </p>
        </div>
        <FeaturedListings activeListings={marketStats.active_listings} />
        <div id="realscout-advanced-search" className="mt-12 flex justify-center">
          <div className="w-full max-w-lg rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
            <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
          </div>
        </div>
      </div>
    </section>
  )
}
