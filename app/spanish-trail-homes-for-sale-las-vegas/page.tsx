import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { createOgImageUrl, getCanonicalUrl } from '@/lib/structuredData'
import { marketStats, formatMedianPrice } from '@/lib/marketStats'
import { SectionBanner, CardVisual } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-homes-for-sale-las-vegas'

export const metadata: Metadata = {
  title: 'Spanish Trail Homes for Sale Las Vegas | Exclusive Realtor | Dr. Jan Duffy',
  description:
    'Spanish Trail homes for sale in Las Vegas 89113 with Dr. Jan Duffy—the exclusive luxury realtor for this community. Live MLS, private tours, and 11-neighborhood matching. Also searched as Spanish Trails.',
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-homes-for-sale-las-vegas'),
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
    title: 'Spanish Trail Homes for Sale — Las Vegas Listings & Tours',
    description:
      'Discover guard-gated Spanish Trail listings, market data, and private tour options with Dr. Jan Duffy—Las Vegas luxury golf community specialist.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Homes for Sale',
        subtitle: 'Active listings & concierge tours with Dr. Jan Duffy',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Homes for Sale — Las Vegas Listings & Tours',
    description:
      'Explore Spanish Trail guard-gated golf homes, villas, and estates with Dr. Jan Duffy. Live market data and private tours available.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Listings',
        subtitle: 'Live market data & private showings',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

/** Listing-hub FAQs: alerts, tours, and MLS workflow—distinct from the property-type guide at /homes-for-sale-in-spanish-trail-las-vegas */
const faqContent = [
  {
    question: 'I searched “Spanish Trails Las Vegas” or “Spanish Trail near me”—is this the right place?',
    answer:
      'Yes. Spanish Trail (singular) is the guard-gated master plan in southwest Las Vegas, Nevada, 89113, with Spanish Trail Country Club inside the gates. “Spanish Trails” is a common search variation for the same community. This page is the live listings and market hub; for lifestyle and neighborhood context, see the community guide linked above.',
  },
  {
    question: 'How do I get alerts for new Spanish Trail listings in Las Vegas 89113?',
    answer:
      'Start with the live RealScout widget on this page—save searches by price, neighborhood, and property type so you are notified when matching homes hit the MLS. I also share a weekly PDF with pendings, price changes, and off-market whispers from the broker network so you see inventory before weekend open-house traffic. Text or call (702) 766-3299 to opt into those updates.',
  },
  {
    question: 'Can I schedule same-day or evening showings behind the guard gates?',
    answer:
      'Yes. I coordinate guard-gate clearance, listing-agent access, and time-of-day visits so you can judge light, noise, and golf-course sightlines. Same-day and twilight tours are common when homes are vacant or tenant-occupied with notice—tell me your flight or work schedule and I will build a route across your preferred enclaves.',
  },
  {
    question: 'How do you combine MLS data with private Spanish Trail market intel?',
    answer:
      `I refresh stats every week (${marketStats.date_label} snapshot on this page) and cross-check them with showing feedback, appraisal trends, and lender commentary from deals closing inside the gates. That mix helps you calibrate offer strength on golf-view homes versus interior lots—without relying on generic Las Vegas averages.`,
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqContent.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function SpanishTrailHomesForSalePage() {
  return (
    <SiteShell>
      <HeroSection />
      <RealScoutSection
        id="bhhs-listings"
        eyebrow="Live Listings"
        title="See Spanish Trail homes on the market right now"
        description="Filter by price, neighborhood, or lifestyle must-haves—golf frontage, cul-de-sac privacy, renovated kitchens."
        priceMin="500000"
        propertyTypes=",SFR,CONDO"
      />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Buyers', href: '/buyers' },
              { label: 'Spanish Trail Homes for Sale' },
            ]}
          />
        </div>
      </div>
      <MarketOverviewSection />
      <BuyingExperienceSection />
      <NeighborhoodHighlightsSection />
      <HomeDesignSection />
      <FinancingSection />
      <TourProcessSection />
      <FAQSection />
      <ContactCTASection />
      <Script id="homes-for-sale-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="hero-heading">
      <SectionBanner headingId="hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Homes for Sale | Exclusive 89113 Realtor
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          This hub is for buyers who want{' '}
          <strong className="font-semibold text-[#f8f5ef]">live MLS inventory in zip 89113</strong> represented by a realtor who only works Spanish Trail—not a valley-wide listing page. Weekly absorption, listing alerts, and gate-access showings with Dr. Jan Duffy. As of {marketStats.date_label}: median value {formatMedianPrice(marketStats.median_price)}, {`$${marketStats.price_per_sqft}`}/sq. ft., and {marketStats.active_listings} active listings across all 11 neighborhoods.           For how she buys and sells here, start at{' '}
          <Link href="/services" className="font-medium text-[#f8f5ef] underline-offset-4 hover:underline">
            Spanish Trail realtor services
          </Link>
          . For property styles and enclave-by-enclave education (before you tour), use the{' '}
          <Link href="/homes-for-sale-in-spanish-trail-las-vegas" className="font-medium text-[#f8f5ef] underline-offset-4 hover:underline">
            property-type buyer guide
          </Link>{' '}
          or browse{' '}
          <Link href="/neighborhoods" className="font-medium text-[#f8f5ef] underline-offset-4 hover:underline">
            all Spanish Trail neighborhoods
          </Link>
          .
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Talk with Dr. Jan Duffy</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#homes-for-sale-listings">View Listings</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function MarketOverviewSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="market-overview-heading">
      <SectionBanner headingId="market-overview-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="market-overview-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Current Spanish Trail market snapshot ({marketStats.date_label})
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          I refresh these numbers every Friday. Beyond the MLS data you see below, I track private showings, price reductions, and club chatter so you know whether to negotiate or lean in with a strong first offer.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { label: 'Median price', value: formatMedianPrice(marketStats.median_price) },
            { label: 'Price / sq. ft.', value: `$${marketStats.price_per_sqft}` },
            { label: 'Active listings', value: String(marketStats.active_listings) },
            { label: 'Average DOM', value: `${marketStats.avg_days_on_market} days` },
          ].map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
              <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">{stat.label}</p>
              <p className="mt-3 font-[var(--font-playfair)] text-2xl text-[#0f2b1e]">{stat.value}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">This week’s notable activity</h3>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#372a20]/85">
          <li>• 7737 Spanish Lake Drive (2,871 sq. ft.) closed at $1,050,000 with only minor concessions—buyers valued the Lakes fairway and renovated pool deck.</li>
          <li>• 5021 Shoal Creek Circle, a 1,668 sq. ft. villa, listed at $599,000 and is already entertaining two offers with appraisal waivers.</li>
          <li>• Three estate-level homes scheduled twilight showings this week, signaling continued demand for sunset Strip views.</li>
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-[#372a20]/80">
          Source: Spanish Trail MLS + private broker network. Request my weekly PDF for the full list of pendings, off-market whispers, and seller motivations.
        </p>
      </div>
    </section>
  )
}

function BuyingExperienceSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="buying-experience-heading">
      <SectionBanner headingId="buying-experience-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="buying-experience-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            How we buy Spanish Trail homes with confidence
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Buying inside the gates is all about timing, preparation, and micro-market awareness. I track the Estates, Villas, Springs, Links, Courtyards, Islands, Gardens, and every other pocket daily. That means I can alert you to private-network releases, price adjustments, and seller motivations before the broader market even notices.
          </p>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">Three-part Spanish Trail buyer blueprint</h3>
          <p className="text-sm leading-relaxed text-[#372a20]/85">
            We work through an intentional process: first, outline your lifestyle goals (golf, wellness, lock-and-leave, multi-gen). Second, use real-time data to identify the top three homes or upcoming releases that fit. Third, craft an offer strategy tailored to the seller’s priorities—closing timeline, rent-backs, membership transfers, or confidentiality.
          </p>
          <ul className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
            <li className="flex gap-3">
              <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
              <span>
                Weekly contract watch: I log every pending sale, including concessions and appraisal results, so you know how aggressive to be when the right home hits.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
              <span>
                Concierge tours: From same-day walk-throughs to night-time lighting checks, we examine how each home lives from sunrise to evening.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
              <span>
                Offer strategy: When 8330 Carmel Ridge Court drew two cash offers last week, we knew that $30K above ask wasn’t enough—view premiums still matter in 2026.
              </span>
            </li>
          </ul>
        </div>
        <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">
            Buyer concierge includes
          </h3>
          <ul className="space-y-3">
            <li>• RealScout alerts tuned to guard gates, views, renovation level</li>
            <li>• Introductions to club membership team and security staff</li>
            <li>• Vendor list—inspectors, designers, spa/pool maintenance pros</li>
            <li>• Guidance on financing (jumbo, portfolio, cross-collateral)</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function NeighborhoodHighlightsSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="neighborhood-highlights-heading">
      <SectionBanner headingId="neighborhood-highlights-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="neighborhood-highlights-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Top Spanish Trail neighborhoods for today’s buyers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Every enclave carries its own vibe. Here’s what buyers love most this season:
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[ 
            {
              title: 'Estates & Estates West',
              detail: 'Double-gated privacy, 1/3-acre+ lots, dramatic golf frontage. Ideal for multi-generation households needing casitas and flexible garages.',
            },
            {
              title: 'The Villas & Links',
              detail: 'Lock-and-leave convenience within a cart ride of the clubhouse. HOA maintains exteriors, freeing you for travel or frequent rounds.',
            },
            {
              title: 'Springs & Plum Creek',
              detail: 'Tree-lined streets, quick walk to community pocket parks, and strong demand from families wanting Bishop Gorman and Faith Lutheran access.',
            },
            {
              title: 'Courtyards & Gardens',
              detail: 'Indoor-outdoor living with tranquil courtyards, plunge pools, and easy entertaining spaces. Great for seasonal owners seeking serenity.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
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

function HomeDesignSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="home-design-heading">
      <SectionBanner headingId="home-design-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="home-design-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Architecture, finishes, and renovation trends in 2026
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Buyers continue to prioritize modernized kitchens, spa bathrooms, and multi-gen suites, yet Spanish Trail’s charm lies in its timeless architecture—vaulted ceilings, courtyards, and tree-framed patios. Here’s what to watch for:
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2 rounded-3xl border border-[#d8cdbf] bg-white p-4 text-sm text-[#372a20]/85">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">Sought-after upgrades</h3>
              <ul className="space-y-2">
                <li>• Chef kitchens with waterfall islands and hidden pantries</li>
                <li>• Frameless glass wine walls and tasting lounges</li>
                <li>• Outdoor living rooms with motorized shades and fire features</li>
              </ul>
            </div>
            <div className="space-y-2 rounded-3xl border border-[#d8cdbf] bg-white p-4 text-sm text-[#372a20]/85">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">Renovation ROI notes</h3>
              <ul className="space-y-2">
                <li>• Pool refreshes and Baja shelves add 4–6% in perceived value</li>
                <li>• Smart-home packages (lighting, climate, security) are expected</li>
                <li>• Preserve mature landscaping—buyers pay for the established canopy</li>
              </ul>
            </div>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">
            Sellers: elevate first impressions
          </h3>
          <p>
            I partner with stagers, landscapers, and luxury photographers to ensure your home captures Spanish Trail’s lifestyle—sunrise golf views, evening dining, and private guest suites. Ask for my pre-market playbook.
          </p>
        </aside>
      </div>
    </section>
  )
}

function FinancingSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="financing-heading">
      <SectionBanner headingId="financing-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="financing-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Financing and negotiation strategies that win
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
              Structuring competitive offers
            </h3>
            <p>
              Cash remains king, but well-structured financed offers with 30% down, appraisal-gap coverage, and flexible possession terms are securing top listings. I outline best-case scenarios from recent negotiations so you know when to escalate and when to hold firm.
            </p>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
              Mortgage partners who understand Spanish Trail
            </h3>
            <p>
              I collaborate with jumbo lenders and wealth advisors who handle portfolio loans, cross-collateralization, and bridge financing. They understand HOA dues, club costs, and the nuances of closing behind guarded gates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TourProcessSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="tour-process-heading">
      <SectionBanner headingId="tour-process-heading" />
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="tour-process-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          How to tour Spanish Trail homes with me
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[ 
            {
              title: '1. Discovery call',
              detail: 'We clarify lifestyle goals, budget parameters, and club interests. I share this week’s data so you can gauge timing.',
            },
            {
              title: '2. Curated tour',
              detail: 'I arrange guard-gate clearance, coordinate with listing agents, and schedule time-of-day viewings to check sun exposure, traffic, and noise.',
            },
            {
              title: '3. Offer & close',
              detail: 'From inspections to membership transitions, I manage each step and keep you updated with real-time feedback from sellers and lenders.',
            },
          ].map((item) => (
            <div key={item.title} className="space-y-3 rounded-3xl border border-[#1f4a35]/60 bg-[#143927] p-6 shadow-lg shadow-black/20 text-sm leading-relaxed">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f8f5ef]">{item.title}</h3>
              <p className="text-[#f8f5ef]/80">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
      <SectionBanner headingId="faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Live listings, alerts & tour questions
        </h2>
        <div className="mt-10 space-y-6">
          {faqContent.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-base leading-relaxed text-[#372a20]/85">
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

function ContactCTASection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20 relative isolate overflow-hidden" aria-labelledby="contact-cta-heading">
      <SectionBanner headingId="contact-cta-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 id="contact-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Ready to explore Spanish Trail homes?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Call or text (702) 766-3299 for instant updates or to book a private tour. Prefer email? <Link href="mailto:DrDuffySells@SpanishTrailHomes.com" className="underline-offset-4 hover:underline">DrDuffySells@SpanishTrailHomes.com</Link>. New to floor plans and enclaves? Read the{' '}
          <Link href="/homes-for-sale-in-spanish-trail-las-vegas" className="font-medium text-[#0f2b1e] underline-offset-4 hover:underline">
            Spanish Trail property-type guide
          </Link>
          .
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Contact Dr. Jan Duffy</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="#homes-for-sale-listings">Browse Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
