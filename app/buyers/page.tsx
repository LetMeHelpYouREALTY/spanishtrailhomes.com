import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Breadcrumbs } from '@/components/breadcrumbs'
import { RealScoutSection } from '@/components/realscout-section'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'

const pageUrl = 'https://www.spanishtrailhomes.com/buyers'
const siteUrl = 'https://www.spanishtrailhomes.com'

const faqContent = [
  {
    question: 'How competitive is the Spanish Trail home market right now?',
    answer:
      'Spanish Trail listings averaged 24 days on market during October–November 2025, with golf-course homes receiving offers in as little as eight days. I monitor active, pending, and private listings daily so we can anticipate new releases, price adjustments, and seller motivations before they reach wider circulation.',
  },
  {
    question: 'Can I tour Spanish Trail if I am not yet a club member?',
    answer:
      'Yes. I coordinate everything—guard gate clearance, listing agent access, and post-tour follow-ups. If you want to explore club membership, I make introductions to the membership director so you can review categories, initiation fees, and reciprocity benefits without delaying real estate decisions.',
  },
  {
    question: 'What financing strategies help buyers win inside Spanish Trail?',
    answer:
      'Upfront underwriting, flexible earnest money deposits, and appraisal-gap coverage are your strongest tools in 2025. My preferred lending partners craft custom scenarios—jumbo, portfolio, bridge, or cross-collateral—so we can tailor each offer to seller priorities while protecting your cash flow.',
  },
  {
    question: 'Do you assist with inspections and vendor coordination?',
    answer:
      'Absolutely. We schedule licensed inspectors who understand Spanish Trail construction nuances, review HOA compliance, and coordinate specialists for pools, roofs, and EV charging. You also receive my vetted vendor list for post-closing enhancements—from landscape architects to smart-home integrators.',
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

// BreadcrumbList schema for SEO
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Buyer Services',
      item: pageUrl,
    },
  ],
}

// Service schema for buyer representation
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Real Estate Buyer Representation',
  provider: {
    '@id': `${siteUrl}#business`,
  },
  areaServed: {
    '@type': 'Place',
    name: 'Spanish Trail Country Club, Las Vegas, NV',
  },
  name: 'Spanish Trail Home Buyer Services',
  description: 'Comprehensive buyer representation for Spanish Trail Country Club homes including personalized property search, RealScout alerts, guard gate coordination, club membership guidance, negotiation strategy, and inspection management.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      price: '0',
      description: 'Buyer representation is commission-free for clients (paid by seller)',
    },
  },
}

export const metadata: Metadata = {
  title: 'Spanish Trail Home Buyer Guide | Dr. Jan Duffy',
  description:
    'Plan your Spanish Trail home purchase with Dr. Jan Duffy—concierge tours, real-time listings, negotiation strategy, and club lifestyle insights tailored to Las Vegas buyers.',
  alternates: {
    canonical: '/buyers',
  },
  openGraph: {
    url: pageUrl,
    title: 'Spanish Trail Buyer Services | Dr. Jan Duffy',
    description:
      'Explore Spanish Trail homes with personalized search, gated access coordination, and negotiation strategy from Dr. Jan Duffy, Berkshire Hathaway HomeServices.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Buyer Concierge by Dr. Jan Duffy',
    description:
      'Discover Spanish Trail guard-gated homes, villas, and estates with concierge tours, data-backed strategy, and club insights tailored to your lifestyle.',
  },
}

export default function BuyersPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Buyers' },
            ]}
          />
        </div>
      </div>
      <BuyerJourneySection />
      <RealScoutSection
        id="spanish-trail-active-listings"
        eyebrow="Live Listings"
        title="See Spanish Trail homes for sale right now"
        description="Filter by price, home style, and guard-gated enclave. Receive instant alerts when new Spanish Trail matches hit the market."
        priceMin="500000"
        propertyTypes=",SFR,CONDO"
      />
      <MarketIntelligenceSection />
      <PropertyPathwaysSection />
      <ConciergePreparationSection />
      <FinancingStrategySection />
      <TourExperienceSection />
      <OfferAndClosingSection />
      <FAQSection />
      <BuyerCTASection />
      <Script id="buyers-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="buyers-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="buyers-service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="buyers-hero-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="buyers-hero-heading" className="font-(--font-playfair) text-3xl leading-tight sm:text-4xl">
          Your Spanish Trail Buyer Roadmap Starts Here
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Spanish Trail balances lush fairways, 24-hour guard gates, and effortless Strip access—delivering a refined Las Vegas lifestyle for primary residents, second-home owners, and investors. I study each of the eleven enclaves daily, debrief fellow listing agents, and monitor RealScout demand signals so you can act decisively the moment the right home appears.
        </p>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Whether you are relocating, upgrading, or adding to a portfolio, our collaboration starts with clarity. We define must-haves, map budget to financing, and design a tour strategy that respects your calendar and privacy. My concierge team coordinates the details: guard gate access, club introductions, and vetted vendor support before and after closing.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href="#spanish-trail-active-listings">Explore Listings</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/contact">Plan a Consultation</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function BuyerJourneySection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="buyer-journey-heading">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">Spanish Trail Buyer Services</p>
          <h2 id="buyer-journey-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
            A concierge buying experience tailored to your lifestyle goals
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Dr. Jan Duffy aligns every Spanish Trail purchase—from villas and townhomes to Strip-view estates—with your plan for living, entertaining, and investing. You gain on-the-ground intelligence about seller motivations, membership options, and neighborhood micro-trends so you can move forward with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Lifestyle strategy session',
              detail:
                'Clarify how you want to live—golf-focused mornings, lock-and-leave convenience, or multigenerational flexibility. We align must-haves and nice-to-haves with real inventory.',
            },
            {
              title: 'Real-time search intelligence',
              detail:
                'Get instant alerts through RealScout, access private-network listings, and review weekly absorption updates so you recognize a winning opportunity as soon as it surfaces.',
            },
            {
              title: 'Negotiation roadmap',
              detail:
                'Offers are built around your risk tolerance, financing plan, and desired timeline. We brief you on likely seller responses, inspection considerations, and appraisal positioning before you sign.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function MarketIntelligenceSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="market-intel-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="market-intel-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
          Real-time market intelligence for savvy Spanish Trail buyers
        </h2>
        <p className="text-base leading-relaxed text-[#372a20]/85">
          Inventory across Spanish Trail remains limited—averaging fewer than 70 active listings at any given time. Estates along the Sunrise and Lakes courses are commanding 4–7% premiums when they showcase updated outdoor living, while renovated villas inside The Links continue to outperform list price thanks to lock-and-leave demand. I track every showing, price reduction, and pocket listing so you can act before broader headlines catch up.
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">What I&apos;m watching this quarter</h3>
            <ul className="space-y-3">
              <li>
                • Median sale price across all enclaves sits at $782,000, climbing 3.2% quarter-over-quarter as cash buyers return from Southern California and Arizona.
              </li>
              <li>
                • Homes with Strip panorama or golf trifecta views see 1.4 showings per day during launch week—timing your offer within the first 72 hours matters.
              </li>
              <li>
                • Membership interest in refreshed wellness amenities is attracting younger executives; we prepare you to discuss transferability and dues upfront.
              </li>
            </ul>
          </div>
          <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">Weekly buyer briefing</h3>
            <ul className="space-y-3">
              <li>• RealScout heat map of active buyer activity by enclave</li>
              <li>• Private showings and upcoming broker previews</li>
              <li>• HOA architectural updates and security gate enhancements</li>
              <li>• Off-market opportunities and seller motivation intel</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

function PropertyPathwaysSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="property-pathways-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="property-pathways-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
          Choose your Spanish Trail property pathway
        </h2>
        <p className="text-base leading-relaxed text-[#372a20]/85">
          Each enclave delivers a distinct experience. I match you with neighborhoods aligned to your daily rhythm, architecture preferences, and long-term plans—from investor-friendly villas to estate lots supporting multigenerational living.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'The Villas & The Links',
              summary:
                'Low-maintenance living steps from the clubhouse, ideal for frequent travelers and executives needing instant tee time access. HOA-managed exteriors keep ownership effortless.',
              highlight: 'Expect multiple offers on renovated floor plans between $700K and $1.1M—early tour scheduling is critical.',
            },
            {
              title: 'Estates, Estates West & Islands',
              summary:
                'Custom residences on expansive lots with Strip or triple-fairway views. Perfect for entertainers, car collectors, and multigenerational households seeking casitas.',
              highlight: 'Homes above $2M secure strong list-to-close ratios when outdoor living spaces and smart-home systems are turnkey.',
            },
            {
              title: 'Springs & Plum Creek',
              summary:
                'Tree-lined streets, close proximity to Bishop Gorman High School, and community parks make these enclaves favorites among families balancing work and schooling in Summerlin and Spring Valley.',
              highlight: 'Updated kitchens and flexible loft layouts remain the top priorities among relocating professionals.',
            },
            {
              title: 'Courtyards & Gardens',
              summary:
                'Tranquil courtyards and plunge pools create resort-style retreats for seasonal residents. Interiors often feature vaulted ceilings, natural light, and lock-and-leave security.',
              highlight: 'We often negotiate furnishings and artwork—be prepared with appraisal-backed insights during contract review.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.summary}</p>
              <p className="font-medium text-[#1f2a24]">{item.highlight}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ConciergePreparationSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="concierge-prep-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="concierge-prep-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
            Concierge-level preparation from discovery to keys
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Buying inside Spanish Trail requires precision coordination. My team handles pre-tour briefings, HOA research, and due diligence so you stay focused on evaluating lifestyle fit. Expect same-day responses, proactive updates, and a digital dashboard summarizing timelines, tasks, and vendor introductions.
          </p>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">Concierge checklist</h3>
          <ul className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
            <li className="flex gap-3">
              <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
              <span>Customized tour itineraries with guard gate scheduling, community maps, and club amenity highlights.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
              <span>Vendor access for inspections, structural specialists, pool experts, and insurance underwriting.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
              <span>Confidential handling of financial documents, corporate relocation requirements, and trust or LLC structures.</span>
            </li>
          </ul>
        </div>
        <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">Relocation essentials</h3>
          <p>
            Need executive relocation support? I collaborate with HR teams, legal advisors, and household staff to coordinate temporary housing, school tours, and membership previews—respecting confidentiality at every stage.
          </p>
          <p>
            Seasonal or international buyer? Expect FIRPTA guidance, cross-border financing intros, and trusted partners for wealth management and tax planning.
          </p>
        </aside>
      </div>
    </section>
  )
}

function FinancingStrategySection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="financing-strategy-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="financing-strategy-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
          Financing and negotiation strategies crafted for guard-gated success
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">Positioning your offer</h3>
            <p>
              We pre-approve with lenders experienced in Spanish Trail transactions, review HOA dues and club fees, and outline three offer scenarios: aggressive, balanced, and conservative. Expect appraisal-gap guidance, occupancy plans, and escalation clauses when inventory tightens.
            </p>
            <p>
              Cash or hybrid financing? I unpack the pros and cons relative to competition, tax goals, and liquidity preferences. Together we determine how to secure leverage without compromising flexibility.
            </p>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">Preferred partner network</h3>
            <p>
              My trusted lenders close complex files involving restricted stock, business income, or multiple properties. They deliver underwriting approvals before showings, allowing us to present certainty to sellers and shorten contingency periods where appropriate.
            </p>
            <p>
              We also collaborate with wealth advisors to optimize down payment strategies, maintain investment portfolios, and evaluate 1031 or DST opportunities when buyers leverage existing assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TourExperienceSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="tour-experience-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="tour-experience-heading" className="font-(--font-playfair) text-3xl leading-tight sm:text-4xl">
          Tour Spanish Trail like an insider
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: '1. Discovery call',
              detail:
                'We define your timeline, lifestyle must-haves, and budget parameters. Expect a curated list of active, pending, and private listings tailored to your goals within 24 hours.',
            },
            {
              title: '2. Concierge tour day',
              detail:
                'Guard gate access, route planning, and time-of-day scheduling are handled for you. We evaluate sun exposure, privacy, and club proximity together on-site.',
            },
            {
              title: '3. Post-tour strategy',
              detail:
                'Receive a recap packet with comps, seller insights, inspection considerations, and recommended next steps—ready for offer discussions or further due diligence.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="space-y-3 rounded-3xl border border-[#1f4a35]/60 bg-[#143927] p-6 shadow-lg shadow-black/20 text-sm leading-relaxed"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f8f5ef]">{item.title}</h3>
              <p className="text-[#f8f5ef]/80">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function OfferAndClosingSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="offer-closing-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="offer-closing-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
          Seamless offers, inspections, and closings
        </h2>
        <p className="text-base leading-relaxed text-[#372a20]/85">
          Precision wins negotiations. I present your offer with supporting data—absorptions, comps, and lifestyle narratives—so listing agents clearly understand why your terms stand out. Once under contract, we enter a structured timeline with milestone reminders, digital document access, and proactive communication.
        </p>
        <div className="grid grid-cols-1 gap-6 text-sm leading-relaxed text-[#372a20]/85 lg:grid-cols-3">
          {[
            {
              title: 'Due diligence mastery',
              detail:
                'Inspections, HOA documents, and club agreements are reviewed in tandem. Expect summaries of critical findings plus recommended resolutions before deadlines.',
            },
            {
              title: 'Risk mitigation',
              detail:
                'If appraisal or financing hurdles arise, I negotiate alternative pathways—price adjustments, seller credits, or timeline tweaks—without surprising your bottom line.',
            },
            {
              title: 'Closing concierge',
              detail:
                'Coordinate movers, designers, and service providers. Confirm utilities, smart-home transfers, and membership onboarding. I remain on-call after closing to ensure an effortless move-in.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="buyers-faq-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="buyers-faq-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
          Spanish Trail buyer FAQs
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {faqContent.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-base leading-relaxed text-[#372a20]/85">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f2b1e]">{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BuyerCTASection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="buyers-cta-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 id="buyers-cta-heading" className="font-(--font-playfair) text-3xl leading-tight sm:text-4xl">
          Ready to tour Spanish Trail?
        </h2>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Call 702-500-1955 or text 702-222-1964 for immediate assistance. Prefer email? Reach me at{' '}
          <Link href="mailto:jduffy@bhhsnv.com" className="underline-offset-4 hover:underline text-[#f8f5ef]">
            jduffy@bhhsnv.com
          </Link>
          . Share your desired move-in timeline, must-have features, and any confidentiality requests—I will deliver a personalized buyer plan within one business day.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href="/contact">Book Your Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#spanish-trail-active-listings">View Homes</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

