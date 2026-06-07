import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-homes-for-sale-las-vegas'

export const metadata: Metadata = {
  title: 'Spanish Trail Homes For Sale Las Vegas 89117 | October 2025 Listings',
  description:
    'Spanish Trail homes for sale in Las Vegas 89117: guard-gated golf course estates from $500K-$2M+. Browse 68 active listings across 11 neighborhoods with Dr. Janet Duffy, Berkshire Hathaway specialist. 27-hole championship course, clubhouse amenities, villas, townhomes, and custom estates. Real-time market data updated weekly.',
  keywords: [
    'Spanish Trail homes for sale',
    'Las Vegas 89117 real estate',
    'Spanish Trail Country Club listings',
    'guard gated golf homes Las Vegas',
    'Spanish Trail estates villas townhomes',
    'Dr. Janet Duffy BHHS',
    'Robert Trent Jones golf course homes',
    'Spanish Trail neighborhoods',
    'luxury golf communities Las Vegas',
  ],
  alternates: {
    canonical: '/spanish-trail-homes-for-sale-las-vegas',
  },
  openGraph: {
    url: pageUrl,
    title: 'Spanish Trail Homes For Sale Las Vegas 89117 | Guard-Gated Golf Course Luxury',
    description:
      'Browse 68 Spanish Trail homes for sale: guard-gated estates, golf villas, and townhomes in Las Vegas 89117. Expert representation by Dr. Janet Duffy, BHHS specialist. 27-hole championship course, median $755K, updated market data.',
    images: [`https://www.spanishtrailhomes.com/og-image.png`],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Homes For Sale Las Vegas 89117 | Oct 2025 Listings',
    description:
      'Explore Spanish Trail guard-gated golf homes for sale: estates, villas, townhomes. Dr. Janet Duffy, BHHS. Live market data, private tours.',
    images: [`https://www.spanishtrailhomes.com/og-image.png`],
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Spanish Trail, Las Vegas',
    'geo.position': '36.109145;-115.282642',
    'ICBM': '36.109145, -115.282642',
  },
}

const faqContent = [
  {
    question: 'How much do Spanish Trail homes cost right now?',
    answer:
      'As of October 2025, the median Spanish Trail home value is $755,000 with an average price-per-square-foot of $355. Villas and townhomes close between $835K and $1.1M, golf course homes typically secure $1.2M–$1.5M, and custom estates stretch beyond $2M. Ask me for a tailored report for your timeline—text 702-222-1964.',
  },
  {
    question: 'How quickly are Spanish Trail homes selling?',
    answer:
      'Well-prepped Spanish Trail listings are averaging 21–30 days on market, and golf-view homes can attract full-price offers within the first week. I track every closing inside the gates, so I can alert you as soon as a home in your price range or preferred enclave (Estates, Villas, Springs, Courtyards, etc.) appears.',
  },
  {
    question: 'Do I need club membership to buy in Spanish Trail?',
    answer:
      'Club membership is optional. Homeowners can choose from full golf, young executive, social, or corporate categories. I consult with buyers on membership perks, initiation fees, and how each plan matches your lifestyle—whether you play multiple rounds a week or prefer the fitness, tennis, and dining programs.',
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

const articleSchema = generateArticleSchema({
  headline: 'Spanish Trail Homes for Sale in Las Vegas 89117 | October 2025 Market Guide',
  description: 'Browse current Spanish Trail homes for sale in Las Vegas with expert guidance from Dr. Janet Duffy, BHHS specialist. Guard-gated golf community with 27-hole championship course, custom estates, villas, townhomes, and real-time market data for 11 neighborhoods in zip code 89117.',
  url: pageUrl,
  datePublished: '2025-10-01T08:00:00-07:00',
  dateModified: new Date().toISOString(),
  keywords: [
    'Spanish Trail homes for sale',
    'Las Vegas 89117 real estate',
    'guard gated golf communities',
    'Spanish Trail Country Club',
    'luxury golf course homes',
    'Spanish Trail neighborhoods',
    'Dr. Janet Duffy realtor',
  ],
})

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Spanish Trail Homes for Sale', url: '/spanish-trail-homes-for-sale-las-vegas' },
])

export default function SpanishTrailHomesForSalePage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Spanish Trail Homes for Sale' },
            ]}
          />
        </div>
      </div>
      <MarketOverviewSection />
      <RealScoutSection
        id="homes-for-sale-listings"
        eyebrow="Live Listings"
        title="See Spanish Trail homes on the market right now"
        description="Filter by price, neighborhood, or lifestyle must-haves—golf frontage, cul-de-sac privacy, renovated kitchens."
        priceMin="500000"
        propertyTypes=",SFR,CONDO"
      />
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
      <Script id="homes-for-sale-article-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(articleSchema)}
      </Script>
      <Script id="homes-for-sale-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Homes for Sale in Las Vegas
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          October 2025 keeps Spanish Trail in the spotlight: median value $755K, average $355 per square foot, and 68 active listings across the 11 guard-gated neighborhoods. Yesterday, 7283 Mission Hills Drive earned a full-price contract in four days thanks to refreshed interiors and a Lakes course patio—proof that well-positioned homes still demand top dollar.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Talk with Dr. Jan</Link>
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
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="market-overview-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Current Spanish Trail market snapshot (October 2025)
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          I refresh these numbers every Friday. Beyond the MLS data you see below, I track private showings, price reductions, and club chatter so you know whether to negotiate or lean in with a strong first offer.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { label: 'Median price', value: '$755,000' },
            { label: 'Average price / sq. ft.', value: '$355' },
            { label: 'Active listings', value: '68' },
            { label: 'Average DOM', value: '27 days' },
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
                Offer strategy: When 8330 Carmel Ridge Court drew two cash offers last week, we knew that $30K above ask wasn’t enough—view premiums still matter in 2025.
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
      <div className="mx-auto max-w-6xl px-6">
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
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="home-design-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Architecture, finishes, and renovation trends in 2025
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
      <div className="mx-auto max-w-6xl px-6">
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
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Spanish Trail buyer FAQs
        </h2>
        <div className="mt-10 space-y-6">
          {faqContent.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-base leading-relaxed text-[#372a20]/85">
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
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="contact-cta-heading">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 id="contact-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Ready to explore Spanish Trail homes?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Text 702-222-1964 for instant updates or call 702-500-1955 to book a private tour. Prefer email? <Link href="mailto:jduffy@bhhsnv.com" className="underline-offset-4 hover:underline">jduffy@bhhsnv.com</Link>.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Contact Dr. Jan</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="#homes-for-sale-listings">Browse Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
