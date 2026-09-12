import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { createOgImageUrl, getCanonicalUrl } from '@/lib/structuredData'
import { marketStats } from '@/lib/marketStats'
import { SectionBanner, CardVisual } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-luxury-golf-course-properties'

export const metadata: Metadata = {
  title: 'Las Vegas Golf Course Homes for Sale | Spanish Trail Luxury Fairway Estates | Dr. Jan Duffy',
  description:
    'Las Vegas golf course homes for sale at Spanish Trail Country Club: luxury fairway estates, view premiums, renovations, and market context with Dr. Jan Duffy in guard-gated 89113.',
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-luxury-golf-course-properties'),
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
    title: 'Luxury Golf Course Properties | Spanish Trail Las Vegas',
    description:
      'See Spanish Trail luxury golf course estates, renovation trends, and buyer strategies guided by Dr. Jan Duffy.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Golf Estate Collection',
        subtitle: 'Luxury fairway homes & market strategy',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Luxury Golf Course Properties',
    description:
      'Discover premier golf frontage homes, lakeside vistas, and custom estates with Dr. Jan Duffy in Spanish Trail.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Luxury Golf Homes',
        subtitle: 'Premier fairway estates by Dr. Jan Duffy',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const faqContent = [
  {
    question: 'Are Spanish Trail golf course homes considered private Las Vegas golf real estate?',
    answer:
      'Yes. These residences sit inside the guard gates around Spanish Trail Country Club’s private 27-hole course—not on a public daily-fee layout. Buyers comparing “Las Vegas golf course homes for sale” here get member-golf lifestyle, cart-path access rules, and club membership steps explained in plain language.',
  },
  {
    question: 'How do golf course views impact Spanish Trail pricing?',
    answer:
      'Fairway and water-feature views add between 8% and 14% to comparable interior properties, depending on orientation and renovation level. Sunrise-facing patios on the Lakes course command premium pricing, while Canyon course homes with unobstructed Red Rock views draw competitive offers even before hitting the open market. I evaluate each listing with historical comps so you understand the exact value of its vantage point.',
  },
  {
    question: 'What renovations matter most for luxury golf homes?',
    answer:
      'Top buyers prioritize infinity-edge pools, outdoor kitchens, accordion glass walls, spa-level primary suites, and wellness amenities like cold plunge rooms or golf simulator bays. Spanish Trail’s architectural review committee has specific guidelines—I coordinate with approved architects and contractors to budget upgrades prior to closing.',
  },
  {
    question: 'How competitive is the luxury segment right now?',
    answer:
      `As of ${marketStats.date_label}, luxury golf homes ($1.5M+) are averaging ${marketStats.avg_days_on_market} days on market with negotiations tightening around 3% below list price. Properties above $2.5M with full renovations and furnished packages often attract cash buyers. I monitor every showing note and agent preview so my clients move quickly without overpaying.`,
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

export default function LuxuryGolfCoursePropertiesPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-[#f8f2e7]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Buyers', href: '/buyers' },
              { label: 'Luxury Golf Course Properties' },
            ]}
          />
        </div>
      </div>
      <MarketSection />
      <RealScoutSection
        id="luxury-golf-properties"
        eyebrow="Golf Frontage Listings"
        title="Spanish Trail luxury golf homes curated for you"
        description="Review on-market and private-release homes along the Lakes, Canyon, and Sunrise courses."
        priceMin="1000000"
        propertyTypes=",SFR"
      />
      <ViewPremiumSection />
      <ArchitectureSection />
      <IndoorOutdoorSection />
      <BuyerJourneySection />
      <InvestmentSection />
      <FAQSection />
      <LuxuryCTASection />
      <Script id="luxury-golf-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="luxury-golf-hero-heading">
      <SectionBanner headingId="luxury-golf-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="luxury-golf-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Las Vegas Golf Course Homes for Sale | Spanish Trail Country Club
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          If you are searching Las Vegas golf course homes for sale in a private club setting, Spanish Trail’s Sunrise, Lakes, and Canyon nines frame luxury estates and villas behind the guard gates. Dr. Jan Duffy decodes view premiums, renovation budgets, and membership next steps so your offer matches the fairway lifestyle you want.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Plan a luxury course tour</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#luxury-golf-properties">See golf frontage homes</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function MarketSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="luxury-market-heading">
      <SectionBanner headingId="luxury-market-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="luxury-market-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Current luxury golf market intelligence ({marketStats.date_label})
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          I monitor every showing request, off-market whisper, and appraisal within Spanish Trail’s luxury tier. The snapshot below covers active listings above $1M, recently closed contracts, and inventory velocity by enclave so you know when to act decisively.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { label: 'Luxury inventory', value: '24 homes' },
            { label: 'Median luxury price', value: '$1.72M' },
            { label: 'Average DOM', value: '43 days' },
            { label: 'Highest 2025 sale', value: '$3.65M' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
              <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">{stat.label}</p>
              <p className="mt-3 font-[var(--font-playfair)] text-2xl text-[#0f2b1e]">{stat.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#372a20]/80">
          Data source: Greater Las Vegas MLS + Berkshire Hathaway HomeServices proprietary analytics. Request my weekly luxury digest for absorption rates, price adjustments, and architecturally significant homes before they hit public feeds.
        </p>
      </div>
    </section>
  )
}

function ViewPremiumSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="view-premium-heading">
      <SectionBanner headingId="view-premium-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="view-premium-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Decoding view premiums across Lakes, Canyon, and Sunrise
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Not all views are priced equally. I analyze slope lines, tee-box proximity, and sunset angles to ensure you know exactly what differentiates a $1.6M listing from a $2.4M trophy estate. Recent buyer case studies highlight how view desirability influenced negotiation leverage.
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
            <p>
              • <strong>Lakes course:</strong> Waterfalls and shimmering ponds entice evening entertainers. Homes with expanded patios and outdoor kitchens can command six-figure premiums when paired with interior upgrades.
            </p>
            <p>
              • <strong>Canyon course:</strong> Elevated fairways showcase Red Rock Canyon backdrops. Limited inventory means thoughtfully staged homes here often receive multiple offers, especially with pocket doors framing the views.
            </p>
            <p>
              • <strong>Sunrise course:</strong> East-facing orientations deliver gentle morning light and minimal cart traffic. Perfect for residents prioritizing wellness rituals, home offices, and peaceful mornings.
            </p>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">
            View selection checklist
          </h3>
          <ul className="space-y-3">
            <li>• Evaluate noise from tee boxes, greens, and maintenance routes.</li>
            <li>• Confirm cart-path setbacks and privacy landscaping guidelines.</li>
            <li>• Compare sunset vs. sunrise lighting for interior temperature control.</li>
            <li>• Review drone footage to understand roofline sightlines.</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function ArchitectureSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="architecture-heading">
      <SectionBanner headingId="architecture-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="architecture-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Architectural styles and design stories in Spanish Trail luxury
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Spanish Trail’s luxury scene blends Mediterranean-inspired estates, transitional renovations, and contemporary statements. Each style attracts certain buyers—knowing which resonates with you helps us target the right enclave and prepare for architectural review board requirements.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Mediterranean estates',
              detail:
                'Stucco facades, clay-tile roofs, and wrought-iron accents crafted primarily in the late 1980s and 90s. Many have been fully reimagined with modern interiors while retaining classic curb appeal.',
            },
            {
              title: 'Contemporary transformations',
              detail:
                'Clean lines, flat roofs, and glass walls introduced through extensive renovations or teardowns. These homes often include floating staircases, minimalist landscaping, and integrated lighting schemes.',
            },
            {
              title: 'Luxury villas & semi-custom builds',
              detail:
                'Lock-and-leave residences in the Villas, Links, and Courtyards deliver premium materials with manageable footprints—ideal for executives and seasonal homeowners seeking full-service living.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <CardVisual seed={String(item.title)} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#372a20]/80">
          I maintain a roster of designers and builders approved by the Spanish Trail Architectural Review Committee. Before you invest in renderings, we vet timelines, fees, and material sourcing to ensure your vision aligns with community guidelines and resale value.
        </p>
      </div>
    </section>
  )
}

function IndoorOutdoorSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="indoor-outdoor-heading">
      <SectionBanner headingId="indoor-outdoor-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="indoor-outdoor-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Indoor-outdoor living essentials for golf-front estates
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Beyond square footage, luxury buyers evaluate how seamlessly a home transitions from interior to exterior. Spanish Trail’s climate invites year-round entertaining, so we prioritize homes that turn patios into extensions of the living room.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'Signature features buyers expect',
              points: [
                'Pocket doors that disappear into walls for uninterrupted views',
                'Infinity-edge pools with sunken lounge seating and fire elements',
                'Outdoor culinary suites with commercial-grade appliances',
                'Integrated audio, lighting, and misting systems for year-round use',
              ],
            },
            {
              title: 'Wellness-focused enhancements',
              points: [
                'Private putting greens and short-game practice areas',
                'Hot/cold hydrotherapy zones with privacy walls',
                'Dedicated home gym pavilions and yoga decks overlooking fairways',
                'Retreat spaces for meditation, focus work, or art studios',
              ],
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <CardVisual seed={String(item.title)} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <ul className="space-y-2">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#372a20]/80">
          During due diligence, we review pool equipment ages, outdoor kitchen permits, and shade-structure engineering. I also introduce you to landscape architects who specialize in preserving Spanish Trail’s mature canopy while adding modern lighting and sculpture moments.
        </p>
      </div>
    </section>
  )
}

function BuyerJourneySection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="buyer-journey-heading">
      <SectionBanner headingId="buyer-journey-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="buyer-journey-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Concierge journey for luxury golf buyers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Every client receives a bespoke plan that aligns lifestyle priorities with the nuances of Spanish Trail’s luxury inventory. Here is how we tailor the experience from first conversation to closing celebration.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: '1. Strategy session',
              detail:
                'We define your non-negotiables—course preference, architectural style, proximity to clubhouse—and outline financing or cash positions. I compile a dossier of candidates with annotated video walk-throughs.',
            },
            {
              title: '2. Elevated tours',
              detail:
                'Expect private showings timed with ideal lighting, chef-prepared tastings in model kitchens, and meetings with membership leaders. I coordinate drone flyovers so you can see the property’s relationship to the course.',
            },
            {
              title: '3. Negotiation & onboarding',
              detail:
                'We leverage my relationships with Spanish Trail listing agents to secure favorable terms—closing credits, furniture packages, and membership initiation timing—while managing inspections, appraisals, and contractors.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <CardVisual seed={String(item.title)} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#372a20]/80">
          Post-closing, my team coordinates concierge services—club onboarding, smart-home programming, and introductions to trusted maintenance partners. Many clients opt into my quarterly estate check-ins to ensure their investment maintains show-ready condition year-round.
        </p>
      </div>
    </section>
  )
}

function InvestmentSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="investment-heading">
      <SectionBanner headingId="investment-heading" />
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="investment-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Long-term value and wealth strategy for golf estates
        </h2>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Spanish Trail remains one of Las Vegas’s most proven guard-gated investments thanks to consistent demand from executives, athletes, and medical professionals seeking privacy near the Strip. I collaborate with financial advisors to model appreciation trajectories, rental potential, and estate-planning considerations for your golf property.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'Wealth preservation priorities',
              detail:
                'Evaluate 5-year appreciation against comparable guard-gated communities like The Ridges and Anthem Country Club. Assess property-tax trends, HOA reserves, and clubhouse capital plans that influence resale value.',
            },
            {
              title: 'Legacy & lifestyle planning',
              detail:
                'Design multi-generational spaces—casitas, dual primary suites, home offices—that keep the estate relevant for decades. Leverage corporate or trust structures to facilitate ownership transitions.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#1f4a35]/60 bg-[#143927] p-6 shadow-lg shadow-black/20 text-sm leading-relaxed">
              <CardVisual seed={String(item.title)} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f8f5ef]">{item.title}</h3>
              <p className="text-[#f8f5ef]/80">{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-[#f8f5ef]/75">
          Ask for my Spanish Trail Wealth Briefing to review financing options, property management referrals, and portfolio diversification strategies built specifically for luxury golf homeowners.
        </p>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="luxury-golf-faq-heading">
      <SectionBanner headingId="luxury-golf-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="luxury-golf-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Spanish Trail luxury golf FAQs
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

function LuxuryCTASection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20 relative isolate overflow-hidden" aria-labelledby="luxury-cta-heading">
      <SectionBanner headingId="luxury-cta-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 id="luxury-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Let’s unlock your ideal Spanish Trail golf estate
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Call or text <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link> or email <Link href="mailto:DrDuffySells@SpanishTrailHomes.com" className="underline-offset-4 hover:underline">DrDuffySells@SpanishTrailHomes.com</Link> for a bespoke preview list, drone footage, and membership introductions crafted for your timeline.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Consult with Dr. Jan Duffy</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="#luxury-golf-properties">Browse listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
