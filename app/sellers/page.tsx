import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import React, { createElement } from 'react'
import type { HTMLAttributes } from 'react'

import { Breadcrumbs } from '@/components/breadcrumbs'
import { CalendlyLink } from '@/components/calendly-link'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { marketStats, formatMedianPrice } from '@/lib/marketStats'
import { SectionBanner, CardVisual } from '@/components/heading-media'


type RealScoutHomeValueProps = HTMLAttributes<HTMLElement> & {
  'agent-encoded-id': string
}

const pageUrl = 'https://www.spanishtrailhomes.com/sellers'
const sellersPageDescription =
  'Seller representation for Spanish Trail homes in Las Vegas 89113. Dr. Jan Duffy prices, prepares, and markets listings inside this guard-gated community—Berkshire Hathaway HomeServices Nevada Properties.'

const sellersWebPageSchema = createWebPageSchema({
  name: 'Spanish Trail Home Seller Guide | Dr. Jan Duffy',
  description: sellersPageDescription,
  path: '/sellers',
  type: 'CollectionPage',
  extra: {
    about: {
      '@type': 'Service',
      serviceType: 'Spanish Trail Listing Representation',
      provider: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        areaServed: 'Spanish Trail, Las Vegas, Nevada',
      },
      areaServed: 'Spanish Trail, Las Vegas, Nevada',
    },
  },
})

const realScoutHomeValueStyles = `
  realscout-home-value {
    --rs-hvw-background-color: #ffffff;
    --rs-hvw-title-color: #000000;
    --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
    --rs-hvw-primary-button-text-color: #ffffff;
    --rs-hvw-primary-button-color: rgb(35, 93, 137);
    --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
    --rs-hvw-secondary-button-color: #ffffff;
    --rs-hvw-widget-width: auto;
  }
`

const faqs = [
  {
    question: 'How quickly are Spanish Trail homes attracting offers in 2026?',
    answer:
      `Well-presented Spanish Trail listings are averaging ${marketStats.avg_days_on_market} days on market as of ${marketStats.date_label}. Updated villas along the Lakes course and custom estates with Strip views continue to draw multiple offers within the first week when priced against current absorption. I monitor every guard-gated closing and real-time showing feedback so we can adjust positioning before days-on-market begins to climb.`,
  },
  {
    question: 'What renovations deliver the best seller ROI inside Spanish Trail?',
    answer:
      'Buyers continue to pay premiums for refreshed outdoor living, climate-smart mechanicals, and modernized kitchens. Pool resurfacing with Baja shelves, LED landscape lighting, and smart-home packages regularly add 4–7% in perceived value. I connect you with vetted contractors—licensed under Nevada requirements—who understand HOA architectural standards and can execute quickly without jeopardizing your launch timeline.',
  },
  {
    question: 'Do I need to join Spanish Trail Country Club to sell my home?',
    answer:
      'Club membership is optional for sellers, yet understanding membership categories helps you negotiate. Many buyers ask about transferring full golf or social memberships, so I coordinate with club advisors to clarify waitlists, initiation fees, and legacy options. Offering a seamless introduction can shorten contingencies and increase the likelihood of meeting or exceeding list price.',
  },
  {
    question: 'How do you protect my privacy during luxury marketing?',
    answer:
      'I balance exposure with discretion. We can debut on RealScout, the Las Vegas MLS, and private broker networks simultaneously while using appointment-only tours, non-disclosure agreements, and limited photo sets when needed. For high-profile clients, I also schedule twilight showings and staggered open-house windows to minimize traffic while meeting Fair Housing standards.',
  },
]

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

export const metadata: Metadata = {
  title: 'Sell Your Spanish Trail Home | Seller Representation | Dr. Jan Duffy',
  description: sellersPageDescription,
  alternates: {
    canonical: getCanonicalUrl('/sellers'),
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
    title: 'Spanish Trail Home Seller Guide',
    description:
      'Maximize your equity with Dr. Jan Duffy’s Spanish Trail seller strategy—precision pricing, concierge prep, luxury marketing, and RealScout-powered valuation tools.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Seller Blueprint',
        subtitle: 'Pricing strategy • Concierge prep • Premium marketing',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Seller Strategy by Dr. Jan Duffy',
    description:
      'Sell your Spanish Trail home with a proven valuation, preparation, and marketing roadmap. Schedule a private strategy session with Dr. Jan Duffy.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Seller Strategy',
        subtitle: 'Equity planning & negotiation by Dr. Jan Duffy',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function SellersPage() {
  return (
    <SiteShell>
      <style dangerouslySetInnerHTML={{ __html: realScoutHomeValueStyles }} />
      <main>
        <HeroSection />
        <div className="bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Sell' },
              ]}
            />
          </div>
        </div>
        <HomeValueWidgetSection />
        <MarketConfidenceSection />
        <PricingStrategySection />
        <PreparationBlueprintSection />
        <MarketingEngineSection />
        <TimelineAndNegotiationSection />
        <ClubAndLifestylePositioningSection />
        <FAQSection />
        <CallToActionSection />
        <Script id="sellers-webpage-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(sellersWebPageSchema)}
        </Script>
        <Script id="sellers-faq-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqSchema)}
        </Script>
      </main>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="sellers-hero-heading">
      <SectionBanner headingId="sellers-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="sellers-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Seller Representation for Spanish Trail Homes
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Spanish Trail buyers shop 11 neighborhoods and 1,200+ homes—villas, townhomes, and custom estates inside the 89113 guard gates. As of {marketStats.date_label}, median sale prices sit at {formatMedianPrice(marketStats.median_price)}. Review the latest{' '}
          <Link href="/spanish-trail-market-report" className="font-medium text-[#f8f5ef] underline-offset-4 hover:underline">
            Spanish Trail market report
          </Link>{' '}
          for absorption and pricing context. As your Berkshire Hathaway HomeServices colleague and long-time Spanish Trail specialist, I translate demand into proven strategy—balancing transparency, Fair Housing compliance, and concierge-level presentation so you can exit with confidence.
        </p>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Whether you are relocating, rightsizing, or unlocking equity to diversify your portfolio, we start with a data-backed value range, align your desired timeline, and craft a plan that honors the distinct story of your home. My team handles the details—from HOA coordination to twilight photography—so you stay focused on your next chapter while I deliver the market response your investment deserves.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href="#seller-valuation-widget">Check My Value</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/contact">Book Strategy Call</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function HomeValueWidgetSection() {
  return (
    <section id="seller-valuation-widget" className="bg-white py-16 sm:py-20" aria-labelledby="home-value-heading">
      <SectionBanner headingId="home-value-heading" />
      <div className="mx-auto max-w-3xl space-y-6 px-6 text-center">
        <h2 id="home-value-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Start with an interactive Spanish Trail home valuation
        </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            RealScout's valuation engine pulls live MLS comps, private sales, and buyer demand signals specific to <Link href="/communities/spanish-trail" className="text-[#0f2b1e] underline-offset-4 hover:underline">Spanish Trail's eleven guard-gated enclaves</Link>. Enter your address, confirm home details, and you'll receive a dynamic range updated as new listings appear or close. I immediately review your submission, overlay hyperlocal insights—<Link href="/club" className="text-[#0f2b1e] underline-offset-4 hover:underline">club membership status</Link>, renovation scope, <Link href="/spanish-trail-waterfront-golf-homes" className="text-[#0f2b1e] underline-offset-4 hover:underline">Strip or golf frontage</Link>—and share a custom equity roadmap within 24 hours.
          </p>
        <p className="text-base leading-relaxed text-[#372a20]/85">
          Prefer a white-glove conversation? Indicate your ideal move-out window and I’ll coordinate a confidential consultation that includes net proceeds estimates, pre-inspection guidance, and tailored vendor introductions. No automated tool replaces professional eyes-on-the-ground, so treat this widget as your launch pad and lean on me for the nuance that transforms curiosity into a signed contract.
        </p>
        <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
          <RealScoutHomeValue agent-encoded-id="QWdlbnQtMjI1MDUw" />
        </div>
      </div>
    </section>
  )
}

function MarketConfidenceSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="market-confidence-heading">
      <SectionBanner headingId="market-confidence-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="market-confidence-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Why Spanish Trail sellers hold the upper hand right now
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Limited new construction behind guard gates, a thriving medical and legal professional base, and elevated demand for dual primary homes are converging to keep Spanish Trail inventory tight. <Link href="/spanish-trail-townhomes-villas" className="text-[#0f2b1e] underline-offset-4 hover:underline">Villas and townhomes</Link> have fewer than sixty days of supply, while <Link href="/spanish-trail-custom-estate-homes-strip" className="text-[#0f2b1e] underline-offset-4 hover:underline">custom estates</Link> strip-view demand is fueled by corporate relocations and private wealth migration from California, Arizona, and Texas. Review our <Link href="/spanish-trail-market-report" className="text-[#0f2b1e] underline-offset-4 hover:underline">weekly absorption metrics</Link> and price-per-square-foot trends to gauge when to launch, when to drip pre-market teasers, and when to hold firm during negotiation.
          </p>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            My seller intelligence reports go beyond MLS snapshots. I debrief every listing agent after brokers’ opens, track membership inquiries, and monitor which lenders are approving jumbo loans with favorable terms. This boots-on-the-ground intel means you are never surprised by a buyer’s financing story—or by the inspection outcomes that might otherwise erode your net proceeds. Together we position your property as the inevitable choice for qualified buyers seeking lifestyle, privacy, and investment security.
          </p>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">Current equity drivers</h3>
          <ul className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
            <li className="flex gap-3">
              <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
              <span>Low turnover among original owners keeps supply constrained, elevating premiums for updated homes that require minimal renovation.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
              <span>International buyers view Spanish Trail as a secure lock-and-leave option with robust HOA management and mature landscaping.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
              <span>The club’s refreshed wellness center and dining program are drawing younger executives who prize amenitized living close to the Strip.</span>
            </li>
          </ul>
        </div>
        <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">Weekly market briefing includes</h3>
          <ul className="space-y-3">
            <li>• RealScout buyer heat map for each enclave</li>
            <li>• Title and mortgage clearance updates</li>
            <li>• HOA architectural committee turnaround times</li>
            <li>• Security gate visitor volume trends</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function PricingStrategySection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="pricing-strategy-heading">
      <SectionBanner headingId="pricing-strategy-heading" />
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="pricing-strategy-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Precision pricing anchored in data and narrative
        </h2>
        <p className="text-base leading-relaxed text-[#372a20]/85">
          We begin with an equity assessment using RealScout’s valuation tool, cross-referenced with private sales, rental histories, and unique lot attributes. Strip views, fairway frontage, cul-de-sac placement, and proximity to club amenities all influence value differently depending on buyer priorities that week. I build tiered pricing models—launch, strategic adjustment, and aspirational—to keep us agile without sending negative signals to the market. Your input on timing, desired proceeds, and relocation interplay directly with how we pace showings and offers.
        </p>
        <p className="text-base leading-relaxed text-[#372a20]/85">
          Narrative matters just as much as numbers. We showcase the story behind your property: the entertainer’s courtyard that hosted charity dinners, the smart-home upgrades that streamline travel schedules, or the casita that doubles as a wellness studio. This storytelling, backed by neighborhood analytics and buyer testimonials, allows us to defend value during appraisal reviews and buyer agent negotiations.
        </p>
        <div className="grid grid-cols-1 gap-6 text-sm leading-relaxed text-[#372a20]/85 md:grid-cols-3">
          {[
            {
              title: 'Comparable clarity',
              detail:
                'We dissect relevant closings from the past 180 days, weighting condition, square footage, and lot orientation. Every comp is documented in an appraiser-ready packet to protect your contract price.',
            },
            {
              title: 'Scenario planning',
              detail:
                'I present best, likely, and conservative net sheets so you can visualize how list price, credits, or repairs impact your proceeds. This keeps us nimble when buyers request concessions.',
            },
            {
              title: 'Transparency with buyers',
              detail:
                'Pre-list inspections, disclosure packets, and HOA documents are ready before launch. Buyers appreciate clarity, which accelerates decision timelines and reduces renegotiations.',
            },
          ].map((card) => (
            <article key={card.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
              <CardVisual seed={String(card.title)} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{card.title}</h3>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PreparationBlueprintSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="preparation-blueprint-heading">
      <SectionBanner headingId="preparation-blueprint-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="preparation-blueprint-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            A concierge preparation plan tailored to Spanish Trail standards
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            From pre-inspections to final touch-ups, I coordinate a vetted roster of local professionals who understand Spanish Trail&apos;s HOA guidelines and luxury buyer expectations. We prioritize high-impact refreshes: exterior power washing, desert-friendly landscaping enhancements, interior paint in warm neutral palettes, and staging that highlights indoor-outdoor flow. Each recommendation is weighed against cost, timeline, and projected ROI so you stay in control of your budget.
          </p>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Security and privacy remain paramount. Crew members sign confidentiality agreements, and we schedule work during windows that minimize disruption to your day-to-day routine. If you reside out of state, I provide regular photo and video updates, handle key exchanges with gatehouse staff, and ensure every vendor follows HOA check-in protocols.
          </p>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">Three-phase readiness</h3>
          <ol className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
            <li>
              <span className="font-semibold text-[#0f2b1e]">1. Discovery walk-through:</span> We note repairs, gather receipts for upgrades, and plan pre-list services, including water efficiency checks and HVAC tune-ups.
            </li>
            <li>
              <span className="font-semibold text-[#0f2b1e]">2. Visual polish:</span> Professional staging, 3D tours, and architectural photography capture the warmth of sunset views and the serenity of garden courtyards.
            </li>
            <li>
              <span className="font-semibold text-[#0f2b1e]">3. Launch logistics:</span> Smart locks, showing instructions, and gated access codes are coordinated with security teams to keep traffic seamless and secure.
            </li>
          </ol>
        </div>
        <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">Concierge services available</h3>
          <ul className="space-y-3">
            <li>• Licensed contractors for structural items</li>
            <li>• Certified pool and spa technicians</li>
            <li>• Luxury staging and floral styling</li>
            <li>• Estate sale and donation coordination</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function MarketingEngineSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="marketing-engine-heading">
      <SectionBanner headingId="marketing-engine-heading" />
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="marketing-engine-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          A marketing engine built for qualified Spanish Trail buyers
        </h2>
        <p className="text-base leading-relaxed text-[#372a20]/85">
          We combine high-touch storytelling with targeted digital reach. Your listing launches across Berkshire Hathaway HomeServices&apos; global network, RealScout demand engines, luxury syndication channels, and curated social media campaigns focused on affluent Las Vegas, Orange County, and Bay Area spheres. Drone footage, dusk photography, and editorial-style video tours communicate emotion, while interactive floor plans keep remote buyers engaged long enough to request a tour.
        </p>
        <p className="text-base leading-relaxed text-[#372a20]/85">
          Offline tactics matter too. I host invitation-only broker previews, coordinate with relocation directors, and deliver printed lookbooks to high-net-worth prospects staying at nearby resorts. Each touchpoint carries consistent branding that spotlights Spanish Trail lifestyle—golf mornings, wellness afternoons, and Strip skyline evenings—while respecting equal housing opportunity guidelines.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <CardVisual seed="card-2" />
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">Digital reach highlights</h3>
            <ul className="space-y-2">
              <li>• RealScout buyer matchmaking with instant follow-up campaigns</li>
              <li>• Featured placement on spanishtrailhomes.com and BHHS global portals</li>
              <li>• Paid social retargeting focused on luxury relocation keywords</li>
              <li>• Email spotlights to vetted investor and second-home databases</li>
            </ul>
          </article>
          <article className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <CardVisual seed="card-3" />
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">High-touch experiences</h3>
            <ul className="space-y-2">
              <li>• Sunset sip-and-see events featuring local culinary partners</li>
              <li>• Concierge tours for executives with security clearance coordination</li>
              <li>• Printed lifestyle narratives delivered to country club locker rooms</li>
              <li>• Post-tour recap kits with comps, disclosures, and membership details</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

function TimelineAndNegotiationSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="timeline-negotiation-heading">
      <SectionBanner headingId="timeline-negotiation-heading" />
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="timeline-negotiation-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          A transparent timeline and negotiation plan you can trust
        </h2>
        <p className="text-base leading-relaxed text-[#372a20]/85">
          Clear milestones keep stress low. We map every step—from valuation review and vendor scheduling to launch, offer response, inspection resolution, and closing at the title company. You receive weekly updates summarizing showings, feedback, and any shifts in buyer urgency. If you are selling remotely, I loop in legal or financial advisors to ensure signatures, wire transfers, and HOA compliance stay ahead of schedule.
        </p>
        <p className="text-base leading-relaxed text-[#372a20]/85">
          During negotiations, I articulate your priorities early, vet buyer financials, and craft counteroffers that balance price with certainty. Leasebacks, post-occupancy agreements, and membership transitions are prepared in advance so we never negotiate from a defensive position. Should we encounter appraisal gaps, I supply detailed adjustment grids and live market data to protect your contract price.
        </p>
        <div className="grid grid-cols-1 gap-6 text-sm leading-relaxed text-[#372a20]/85 lg:grid-cols-3">
          {[
            {
              title: 'Communication cadence',
              detail:
                'Expect Monday market digests, Thursday status videos, and instant updates whenever a showing request or offer arrives. Transparency builds confidence for everyone involved.',
            },
            {
              title: 'Risk management',
              detail:
                'Title and HOA documents are reviewed early, while home warranty options and repair credits are pre-negotiated so buyers feel supported without diluting your net proceeds.',
            },
            {
              title: 'Closing concierge',
              detail:
                'I coordinate movers, cleaners, and utility transfers, and I remain on-call post-closing to ensure key handoffs and membership transitions run smoothly.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
              <CardVisual seed={String(item.title)} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClubAndLifestylePositioningSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="club-lifestyle-heading">
      <SectionBanner headingId="club-lifestyle-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="club-lifestyle-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            How we market Spanish Trail homes
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Buyers are purchasing square footage, lot size, and a location inside a 640-acre guard-gated master plan with 27 holes of golf, tennis and pickleball courts, resort pools, and a 50,000 sq. ft. clubhouse. Marketing lists those amenities with distances: morning tee times two minutes away, a fitness center a cart ride from the driveway, walking paths to pocket parks. Named schools with distances—Bishop Gorman High School 2.2 miles via S. Rainbow Blvd., Faith Lutheran Middle &amp; High School a short drive—belong in the fact sheet, not as lifestyle labels.
          </p>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            For investors and second-home owners, I showcase rental history potential, short-term lease guidelines, and the stability of the homeowners association. International buyers receive translations, relocation insight, and introductions to trusted legal resources for FIRPTA compliance. Every narrative remains consistent with Fair Housing guidelines while celebrating the unique vibrancy of life inside Spanish Trail.
          </p>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">Lifestyle talking points</h3>
          <ul className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
            <li>Curated dining and wine events at the clubhouse, perfect for networking and community engagement.</li>
            <li>Secure, patrolled streets plus advanced gate technology for peace of mind during travel.</li>
            <li>Proximity to the planned Brightline West station and the bustling Summerlin medical district.</li>
          </ul>
        </div>
        <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">Investor spotlight</h3>
          <p>
            Cap rates in Spanish Trail remain competitive for luxury leasing, with executive tenants seeking 6–12 month furnished agreements. I supply rental comps, HOA leasing guidelines, and property management introductions so you can speak confidently to prospective investors.
          </p>
        </aside>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="seller-faq-heading">
      <SectionBanner headingId="seller-faq-heading" />
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="seller-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Spanish Trail seller FAQs
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {faqs.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-base leading-relaxed text-[#372a20]/85">
              <CardVisual seed={String(item.question)} />
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f2b1e]">{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToActionSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="seller-cta-heading">
      <SectionBanner headingId="seller-cta-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 id="seller-cta-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Ready to sell your Spanish Trail home?
        </h2>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Every successful sale begins with clarity and collaboration. Call or text (702) 766-3299 to schedule a confidential appointment. Prefer email? Send a note to{' '}
          <Link href="mailto:DrDuffySells@SpanishTrailHomes.com" className="underline-offset-4 hover:underline text-[#f8f5ef]">
            DrDuffySells@SpanishTrailHomes.com
          </Link>{' '}
          with your desired timeline and any confidentiality considerations. I am honored to guide Spanish Trail homeowners through seamless, profitable transitions—always with discretion, integrity, and a commitment to exceeding expectations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <CalendlyLink className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-xs font-medium uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            Book a Tour
          </CalendlyLink>
          <Button
            asChild
            className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href="/contact">Schedule Strategy Session</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#seller-valuation-widget">View Home Value</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function RealScoutHomeValue(props: RealScoutHomeValueProps) {
  return createElement('realscout-home-value' as any, props)
}


