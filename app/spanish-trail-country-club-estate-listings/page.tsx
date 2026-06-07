import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'

const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-country-club-estate-listings'

export const metadata: Metadata = {
  title: 'Spanish Trail Country Club Estate Listings | Dr. Jan Duffy',
  description:
    'Browse Spanish Trail Country Club estate listings with Dr. Jan Duffy. Double-gated privacy, golf course frontage, and concierge-level buying guidance.',
  alternates: {
    canonical: '/spanish-trail-country-club-estate-listings',
  },
  openGraph: {
    url: pageUrl,
    title: 'Spanish Trail Country Club Estate Listings',
    description:
      'Tour custom estates within Spanish Trail Country Club—golf frontage, casitas, and resort-scale amenities curated by Dr. Jan Duffy.',
    images: [`${pageUrl}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Country Club Estates',
    description:
      'Exclusive estate listings, tailored buying strategies, and club integration for Spanish Trail Country Club residents.',
    images: [`${pageUrl}/og-image.png`],
  },
}

const faqContent = [
  {
    question: 'What qualifies as an estate home in Spanish Trail?',
    answer:
      'Estate homes typically start at 4,500 square feet with custom architecture, casitas or guest wings, spa-level outdoor living, and premium golf or water views. Many sit in double-gated enclaves such as Estates West, the Islands, and the Springs, offering added security and privacy.',
  },
  {
    question: 'How competitive is the estate market right now?',
    answer:
      'As of Q4 2025, 12 estate homes are active with a median list price of $2.35M. Well-prepared properties with updated interiors average 37 days on market; off-market placements move even faster. I monitor private network releases to ensure clients act before listings go public.',
  },
  {
    question: 'Can you help with renovations or turnkey preparation?',
    answer:
      'Yes. I coordinate architects, designers, and contractors experienced with the Spanish Trail Architectural Review Committee. Whether you need to modernize a 1990s estate or stage a property for sale, my vetted team handles design plans, bids, and HOA approvals.',
  },
]


export default function CountryClubEstateListingsPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Spanish Trail Estate Listings' },
            ]}
          />
        </div>
      </div>
      <MarketSnapshotSection />
      <RealScoutSection
        id="country-club-estate-listings"
        eyebrow="Featured Estates"
        title="Spanish Trail estate listings updated daily"
        description="Explore current estate homes with golf frontage, casitas, and private outdoor living."
        priceMin="1800000"
        propertyTypes=",SFR"
      />
      <EnclaveSection />
      <ArchitectureSection />
      <AmenitiesSection />
      <SellerSection />
      <CaseStudySection />
      <FAQSection />
      <CTASection />
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="estate-hero-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="estate-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Country Club Estate Listings
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Spanish Trail’s estates rank among Southwest Las Vegas’s most coveted addresses—lush fairways, double-gated privacy, and grand entertaining spaces minutes from the Strip. I curate bespoke tours and negotiation playbooks so you secure an estate aligned with your lifestyle, from multi-generational living to executive entertaining.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Arrange an estate preview</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#country-club-estate-listings">Browse estates</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function MarketSnapshotSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="estate-market-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="estate-market-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Estate market snapshot (November 2025)
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          I track every estate showing, offer, and off-market whisper inside Spanish Trail. Here’s what the data shows this month.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { label: 'Active estates', value: '12' },
            { label: 'Median list price', value: '$2.35M' },
            { label: 'Highest active listing', value: '$4.2M' },
            { label: 'Average DOM', value: '37 days' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
              <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">{stat.label}</p>
              <p className="mt-3 font-[var(--font-playfair)] text-2xl text-[#0f2b1e]">{stat.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#372a20]/80">
          Request my weekly estate bulletin for deep dives into pending contracts, concessions, and private offerings across Spanish Trail Country Club.</p>
      </div>
    </section>
  )
}

function EnclaveSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="estate-enclave-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="estate-enclave-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Estate enclaves within Spanish Trail Country Club
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Every estate pocket in Spanish Trail has its own personality. I help you match the right enclave to your needs—whether you’re after golf frontage, water features, or showpiece architecture.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'Estates & Estates West',
              detail:
                'Double-gated, oversized lots, circle drives, and often 6,000+ sq. ft. interiors. Ideal for collectors, executives, and multi-generation households needing casitas and flexible garages.',
            },
            {
              title: 'The Islands',
              detail:
                'Waterfront paradises with sweeping lake views, negative-edge pools, and secluded patios. Highly sought after by entertainers and seasonal residents.',
            },
            {
              title: 'Springs & Gardens estates',
              detail:
                'Tree-lined streets and cul-de-sacs with renovated transitional designs. Close to club amenities but insulated from main traffic.',
            },
            {
              title: 'Courtyards showpieces',
              detail:
                'Indoor-outdoor living anchored by courtyards, sliding glass walls, and tranquil water features. Favored for privacy and architectural flair.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArchitectureSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="estate-architecture-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="estate-architecture-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Architecture and design opportunities
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Spanish Trail estates span Mediterranean classics, modern transformations, and bespoke contemporary statements. I provide renderings, renovation insights, and vendor introductions if you’re ready to personalize.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Mediterranean heritage',
              detail:
                'Grand foyers, sweeping staircases, and wrought-iron detailing. Many owners refresh interiors with neutral palettes while preserving timeless exteriors.',
            },
            {
              title: 'Modern reinventions',
              detail:
                'Glass, steel, and minimalist lines introduced through top-tier renovations. Smart-home infrastructure, floating staircases, and indoor-outdoor living walls stand out.',
            },
            {
              title: 'Wellness-forward estates',
              detail:
                'Cold plunge rooms, golf simulators, yoga studios, and spa bathrooms create resort-level sanctuaries within the guard gates.',
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

function AmenitiesSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="estate-amenities-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="estate-amenities-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Estate-level amenities homeowners expect</h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Today’s buyers demand more than large square footage—they want curated experiences at home. Here are the amenities that consistently drive top-dollar results.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'Entertainment priorities',
              points: [
                'Catering kitchens with separate prep zones',
                'Expansive great rooms suited for 50+ guest gatherings',
                'Outdoor pavilions with integrated AV and lighting',
                'Private screening rooms or performance spaces',
              ],
            },
            {
              title: 'Everyday luxury',
              points: [
                'Dual offices for remote schedules',
                'Spa-inspired primary suites with custom closets',
                'Garage galleries for exotic or classic car collections',
                'Resort pools with fire lounges and water features',
              ],
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <ul className="space-y-2">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SellerSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="estate-seller-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="estate-seller-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Selling an estate? Here’s how I position it for success.</h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Spanish Trail estates deserve a strategic marketing plan that respects privacy while reaching qualified buyers. My Berkshire Hathaway platform and local network make that possible.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Story-driven presentation',
              detail:
                'Cinematic videography, twilight photography, and copywriting that articulates lifestyle—golf, entertaining, wellness, and convenience—rather than just square footage.',
            },
            {
              title: 'Qualified outreach',
              detail:
                'Targeted campaigns to relocation partners, wealth managers, and vetted buyer databases. I coordinate confidential previews for high-profile prospects.',
            },
            {
              title: 'Negotiation finesse',
              detail:
                'Data-backed pricing, inspection management, and closing timelines tailored to your next chapter. Membership transfers and furniture negotiations handled with precision.',
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

function CaseStudySection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="estate-case-study-heading">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <h2 id="estate-case-study-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Estate client success snapshots</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[{
            title: 'Estates West hospitality retreat',
            detail:
              'Secured off-market at $2.9M after private twilight tours. Negotiated furniture package and two-year club credit while coordinating designer introductions for a fast refresh.',
          },
          {
            title: 'Islands waterfront sanctuary',
            detail:
              'Listed at $3.4M, sold in 18 days with multiple offers. Marketing focused on sunset entertaining, smart-home upgrades, and aerial storytelling.',
          }].map((item) => (
            <article key={item.title} className="space-y-4 rounded-3xl border border-[#1f4a35]/60 bg-[#143927] p-6 text-sm leading-relaxed">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c6aa7a]">{item.title}</h3>
              <p className="text-[#f8f5ef]/80">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="estate-faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="estate-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Spanish Trail estate FAQs</h2>
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

function CTASection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="estate-cta-heading">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 id="estate-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Discuss Spanish Trail estate opportunities</h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Call <Link href="tel:17025001955" className="underline-offset-4 hover:underline">702-500-1955</Link>, text 702-222-1964, or email <Link href="mailto:jduffy@bhhsnv.com" className="underline-offset-4 hover:underline">jduffy@bhhsnv.com</Link>. I’ll curate estate listings, share private releases, and coordinate a personalized tour itinerary.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Connect with Dr. Jan</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="#country-club-estate-listings">See estate listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
