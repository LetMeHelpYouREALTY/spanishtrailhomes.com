import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Script from 'next/script'

import { Button } from '@/components/ui/button'
import { SiteShell } from '@/components/site-shell'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'

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

const neighborhoodDetails = [
  {
    name: 'The Estates',
    priceRange: '$1.2M - $3.5M',
    description: 'Magnificent custom estates on oversized lots with golf course and mountain views',
    features: ['7,000-12,000 sq ft', 'Golf course frontage', 'Private pools & spas', 'Gated enclaves'],
  },
  {
    name: 'The Villas',
    priceRange: '$450K - $750K',
    description: 'Elegant attached residences with resort-style living and low maintenance',
    features: ['1,800-2,800 sq ft', 'Courtyards', 'Community pools', 'Lock-and-leave lifestyle'],
  },
  {
    name: 'The Links',
    priceRange: '$600K - $1.1M',
    description: 'Premium single-family homes directly on the championship golf course',
    features: ['2,500-4,500 sq ft', 'Fairway views', 'Private lots', 'Golf cart access'],
  },
  {
    name: 'Plum Creek',
    priceRange: '$500K - $900K',
    description: 'Secluded enclave with mature trees and water features throughout',
    features: ['2,200-3,800 sq ft', 'Tree-lined streets', 'Lake views', 'Family-friendly'],
  },
]

const lifestyleFeatures = [
  {
    category: 'Championship Golf',
    highlights: [
      '27-hole Robert Trent Jones Jr. design',
      'Host course for PGA Las Vegas Invitational',
      'UNLV Women\'s Golf Team home course',
      '120+ bunkers, 15 pristine lakes',
    ],
  },
  {
    category: 'Dining & Social',
    highlights: [
      '50,000 sq ft Mediterranean-style clubhouse',
      'Fine dining with Strip-caliber cuisine',
      'Casual Bar & Grill with terrace seating',
      'Private event spaces for 300+ guests',
    ],
  },
  {
    category: 'Wellness & Recreation',
    highlights: [
      'State-of-the-art fitness center',
      'Two resort-style aquatic centers',
      '12 lighted tennis courts',
      'Pickleball, yoga, and fitness classes',
    ],
  },
  {
    category: 'Location Excellence',
    highlights: [
      '10 minutes to Las Vegas Strip',
      '15 minutes to Harry Reid Airport',
      'Adjacent to premier shopping & dining',
      'Easy I-215 and Summerlin access',
    ],
  },
]

const marketHighlights = [
  { label: 'Total Listings', value: '74 Active', trend: '+', context: 'Across single-family, condo, and townhome offerings.' },
  { label: 'Average List Price', value: '$682K', trend: '-22.15%', context: 'Month-over-month change across current inventory.' },
  { label: 'Average Sold Price', value: '$651K', trend: '-23.92%', context: 'Latest 30-day closed sale average.' },
  { label: 'Average Days on Market', value: '60 Days', trend: '-', context: 'Balanced pace with luxury buyer activity.' },
]

const featuredListings = [
  {
    address: '8330 Carmel Ridge Court',
    price: '$1,095,000',
    type: 'Single-Family • 3 Bed • 3 Bath • 2,500 Sq Ft',
    mls: 'MLS# 2733586',
    href: 'https://bhhsnv.com/single-family/glv/2733586/8330-carmel-ridge-court-las-vegas-nv-89113',
  },
  {
    address: '7283 Mission Hills Drive',
    price: '$630,000',
    type: 'Condo/Townhome • 2 Bed • 2 Bath • 2,065 Sq Ft',
    mls: 'MLS# 2732075',
    href: 'https://bhhsnv.com/condo-townhouse/glv/2732075/7283-mission-hills-drive-las-vegas-nv-89113',
  },
  {
    address: '22 Burning Tree Court',
    price: '$2,590,000',
    type: 'Estate Residence • 4 Bed • 5 Bath • 6,361 Sq Ft',
    mls: 'MLS# 2732026',
    href: 'https://bhhsnv.com/single-family/glv/2732026/22-burning-tree-court-las-vegas-nv-89113',
  },
]

const neighborhoodClusters = [
  'Carmels',
  'Courtyards',
  'Gardens',
  'Islands',
  'Links',
  'Plum Creek',
  'Springs',
  'Villas',
  'Innisbrook Estates',
  'Estates',
  'Estates West',
]

const lifestyleHighlights = [
  {
    title: 'Clubhouse & Dining',
    copy: 'A 50,000 sq. ft. clubhouse with glass-lined dining rooms, terrace seating, and a Bar & Grill serving daily cuisine.',
  },
  {
    title: 'Wellness & Recreation',
    copy: 'Renovated fitness facility, two aquatic centers, and twelve lighted tennis courts anchor an active social calendar.',
  },
  {
    title: 'Premier Access',
    copy: 'Minutes to the Strip, Harry Reid International Airport, and neighboring enclaves like The Ridges and Spanish Hills.',
  },
]

const nearbyCommunities = [
  'The Ridges',
  'Spanish Hills',
  'Red Rock Country Club',
  'The Summit Club',
  'Willow Creek',
  'Tournament Hills',
]

export default function HomePage() {
  return (
    <SiteShell>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <HeroSection />
      <RealScoutListingsSection />
      <IntroSection />
      <LocationSection />
      <StatsSection />
      <NeighborhoodShowcaseSection />
      <MarketOverviewSection />
      <FeaturedInventorySection />
      <RealEstateSection />
      <LifestyleFeaturesSection />
      <FAQSection />
      <ListingsSection />
      <LifestyleSection />
      <NearbyCommunitiesSection />
      <CTASection />
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 43, 30, 0.5), rgba(15, 43, 30, 0.7)), url('https://images.unsplash.com/photo-1474926143295-7f42d6764bed?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background" />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-28 text-primary-foreground sm:py-36 lg:py-48">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.5em] text-secondary/90">
              Las Vegas' Premier Golf Course Community
            </p>
            <h1
              id="hero-heading"
              className="font-[var(--font-playfair)] text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Spanish Trail
              <span className="block text-4xl font-normal sm:text-5xl lg:text-6xl">
                Luxury Homes
              </span>
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/95 sm:text-xl">
            Guard-gated estates, championship golf, and resort-caliber amenities in Southwest Las Vegas. Minutes from the Strip, yet a world apart.
          </p>
          <div className="flex items-center gap-6 border-l-2 border-secondary/50 pl-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-secondary/80">Represented By</p>
              <p className="mt-1 font-[var(--font-playfair)] text-lg font-medium">Dr. Janet Duffy</p>
              <p className="text-sm text-primary-foreground/80">Berkshire Hathaway HomeServices</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 py-6 text-xs font-semibold uppercase tracking-[0.4em] shadow-xl transition-all hover:scale-105"
          >
            <Link href="#bhhs-listings">View Available Homes</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-primary-foreground/30 bg-background/10 px-10 py-6 text-xs font-semibold uppercase tracking-[0.4em] text-primary-foreground backdrop-blur-sm transition-all hover:scale-105 hover:bg-background/20"
          >
            <Link href="#neighborhoods">Explore Neighborhoods</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function RealScoutListingsSection() {
  return (
    <section
      id="bhhs-listings"
      className="bg-background py-16 sm:py-20"
      aria-labelledby="bhhs-listings-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Real-Time Inventory
          </p>
          <h2
            id="bhhs-listings-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Berkshire Hathaway Listings in Spanish Trail
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground">
            Powered by RealScout, these actively updated listings showcase single-family residences between $500K and $600K represented through Berkshire Hathaway HomeServices Nevada Properties. Adjust filters or connect with Dr. Janet Duffy for additional price points.
          </p>
        </div>
        <div className="mt-10 rounded-3xl border border-border/60 bg-card/90 p-4 shadow-sm">
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="NEWEST"
            listing-status="For Sale"
            property-types=",SFR"
            price-min="500000"
            price-max="600000"
          ></realscout-office-listings>
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="bg-background py-16 sm:py-20" aria-labelledby="intro-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h2
            id="intro-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Exclusive guard-gated golf living minutes from the Strip.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail spans the Spring Valley area of Las Vegas with quick access to Summerlin, I-215, and Harry Reid International Airport. Established as one of the city's earliest private golf course communities, it layers mature landscaping, shimmering lakes, and a resort-caliber clubhouse across 640 acres of all-grass fairways.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Residents enjoy the convenience of three guarded entries, proximity to upscale dining and entertainment, and the prestige of a club that has hosted the PGA Las Vegas Invitational five times while serving as home course for the UNLV Women's Golf Team.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Quick Facts
          </p>
          <dl className="grid grid-cols-1 gap-4 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Location</dt>
              <dd>Tropicana Ave. & Rainbow Blvd., Las Vegas NV 89113</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Access</dt>
              <dd>Two guard gates on Tropicana, one on Hacienda</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Airport</dt>
              <dd>Approx. 15 minutes to Harry Reid International</dd>
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

function LocationSection() {
  return (
    <section className="border-y border-border/60 bg-card/80 py-20 sm:py-24" aria-labelledby="location-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Prime Southwest Las Vegas Location
          </p>
          <h2
            id="location-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Ideally Positioned for the Las Vegas Lifestyle
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground">
            Spanish Trail occupies one of the most coveted locations in the Las Vegas Valley, offering the perfect balance of tranquil resort living and metropolitan convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <h3 className="mb-4 font-[var(--font-playfair)] text-xl text-foreground">
                Minutes From Everything
              </h3>
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-border/30 pb-3">
                  <dt className="font-medium text-foreground">Las Vegas Strip</dt>
                  <dd className="text-muted-foreground">10 minutes</dd>
                </div>
                <div className="flex justify-between border-b border-border/30 pb-3">
                  <dt className="font-medium text-foreground">Harry Reid International Airport</dt>
                  <dd className="text-muted-foreground">15 minutes</dd>
                </div>
                <div className="flex justify-between border-b border-border/30 pb-3">
                  <dt className="font-medium text-foreground">Downtown Summerlin</dt>
                  <dd className="text-muted-foreground">12 minutes</dd>
                </div>
                <div className="flex justify-between border-b border-border/30 pb-3">
                  <dt className="font-medium text-foreground">Red Rock Canyon</dt>
                  <dd className="text-muted-foreground">18 minutes</dd>
                </div>
                <div className="flex justify-between border-b border-border/30 pb-3">
                  <dt className="font-medium text-foreground">Town Square Las Vegas</dt>
                  <dd className="text-muted-foreground">8 minutes</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium text-foreground">I-215 Beltway Access</dt>
                  <dd className="text-muted-foreground">5 minutes</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <h3 className="mb-4 font-[var(--font-playfair)] text-xl text-foreground">
                Neighborhood Essentials
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>Premium grocery shopping at Whole Foods, Trader Joe's, and Smith's within 5 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>Award-winning restaurants along nearby Rainbow Blvd and in Summerlin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>Top-rated Clark County schools including Bonner Elementary and Durango High</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>Healthcare access via Spring Valley Hospital and Summerlin Hospital</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>Entertainment options from world-class casinos to boutique shopping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>Quick freeway access to all Las Vegas Valley destinations</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-6 text-center shadow-sm">
              <p className="mb-2 text-xs uppercase tracking-[0.4em] text-secondary">Address</p>
              <p className="font-[var(--font-playfair)] text-lg text-foreground">
                Spanish Trail Country Club
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Tropicana Ave & Rainbow Blvd
              </p>
              <p className="text-sm text-muted-foreground">Las Vegas, NV 89113</p>
              <Button
                asChild
                variant="link"
                className="mt-4 text-xs uppercase tracking-[0.3em] text-primary"
              >
                <Link href="/guest-info#map">Get Directions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="border-y border-border/60 bg-card/80" aria-label="Community highlights">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-16 md:grid-cols-3">
        {overviewStats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-border/50 bg-background/80 p-6 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">
              {item.label}
            </p>
            <p className="mt-3 font-[var(--font-playfair)] text-3xl text-foreground">
              {item.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function MarketOverviewSection() {
  return (
    <section className="border-y border-border/60 bg-card/80" aria-labelledby="market-overview-heading">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Market Insights</p>
            <h2
              id="market-overview-heading"
              className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Berkshire Hathaway HomeServices Snapshot
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Dr. Janet Duffy leverages real-time Berkshire Hathaway HomeServices data to position your listing or offer. Spanish Trail currently carries a balanced mix of residences—from golf villas to custom estates—inviting both primary homeowners and investors.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="https://www.bhhsnv.com/neighborhood/83/spanish-trails">View Full Market Report</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
          {marketHighlights.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">{item.label}</p>
              <p className="mt-3 font-[var(--font-playfair)] text-2xl text-foreground">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {item.trend} change
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.context}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedInventorySection() {
  return (
    <section className="bg-background py-20 sm:py-24" aria-labelledby="featured-inventory-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Featured Inventory</p>
            <h2
              id="featured-inventory-heading"
              className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Signature Listings Curated by Berkshire Hathaway
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Explore a sampling of Spanish Trail residences currently represented through Berkshire Hathaway HomeServices Nevada Properties. Schedule a private tour with Dr. Janet Duffy to access the full portfolio, including off-market opportunities.
            </p>
          </div>
          <Button
            asChild
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="https://www.bhhsnv.com/neighborhood/83/spanish-trails#featured-listings">
              Speak with Dr. Duffy
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredListings.map((listing) => (
            <article
              key={listing.address}
              className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-card/90 p-6 shadow-sm"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-secondary">{listing.mls}</p>
                <h3 className="font-[var(--font-playfair)] text-2xl text-foreground">
                  {listing.address}
                </h3>
                <p className="text-sm text-muted-foreground">{listing.type}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">{listing.price}</span>
                <Button
                  asChild
                  variant="link"
                  className="gap-1 text-xs uppercase tracking-[0.3em] text-primary"
                >
                  <Link href={listing.href} target="_blank" rel="noopener noreferrer">
                    View Listing
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function RealEstateSection() {
  return (
    <section className="bg-background py-20 sm:py-24" aria-labelledby="real-estate-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <h2
              id="real-estate-heading"
              className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Diverse real estate opportunities.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Spanish Trail offers more than 1,200 residences ranging from attached townhomes to custom estates, many positioned on the golf course or with Red Rock Canyon views. Select enclaves feature additional privacy gates within the community, ensuring a tailored experience for every homeowner.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Residences were primarily constructed from the mid-1980s through the 1990s, combining timeless architecture with mature landscapes that only decades of stewardship can produce.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
            </p>
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                Neighborhoods
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                {neighborhoodClusters.map((name) => (
                  <span key={name} className="inline-flex items-center rounded-full border border-border/50 px-3 py-1">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div
            className="h-full rounded-3xl border border-border/60 bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507400492013-162706c8c83c?q=80&w=1600&auto=format&fit=crop')",
            }}
            role="img"
            aria-label="Spanish Trail custom homes and golf course views"
          />
        </div>
      </div>
    </section>
  )
}

function ListingsSection() {
  return (
    <section className="border-y border-border/60 bg-card/80" aria-labelledby="listings-heading">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">
              Featured Listings
            </p>
            <h2
              id="listings-heading"
              className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Current luxury offerings in Spanish Trail.
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="/buyers">View All Inventory</Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredListings.map((listing) => (
            <article
              key={listing.address}
              className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                  Spanish Trail
                </p>
                <h3 className="font-[var(--font-playfair)] text-2xl text-foreground">
                  {listing.address}
                </h3>
                <p className="text-sm text-muted-foreground">{listing.type}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">
                  {listing.price}
                </span>
                <Button
                  asChild
                  variant="link"
                  className="gap-1 text-xs uppercase tracking-[0.3em] text-primary"
                >
                  <Link href="/buyers">
                    View Details
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function LifestyleSection() {
  return (
    <section className="bg-background py-20 sm:py-24" aria-labelledby="lifestyle-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Lifestyle & Amenities
          </p>
          <h2
            id="lifestyle-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Timeless luxury with a modern social pulse.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Beyond golf, members access concierge-level programming, destination-worthy culinary experiences, and wellness amenities refreshed to match the expectations of today’s luxury buyer.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {lifestyleHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border/50 bg-card/90 p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NearbyCommunitiesSection() {
  return (
    <section className="border-y border-border/60 bg-card/80" aria-labelledby="nearby-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Neighboring Luxury
          </p>
          <h2
            id="nearby-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Connected to Las Vegas’ elite communities.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail sits among a collection of acclaimed luxury enclaves across the Las Vegas Valley. Take advantage of close proximity to other guard-gated neighborhoods, boutique dining, and premier retail destinations in Summerlin and along the Strip.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            {nearbyCommunities.map((community) => (
              <span
                key={community}
                className="inline-flex items-center rounded-full border border-border/50 px-3 py-1"
              >
                {community}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Thinking of selling or buying?
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Our Las Vegas luxury team specializes in Spanish Trail, Red Rock Country Club, and the west valley’s most sought-after addresses. Whether you’re relocating or refining your portfolio, let us craft a tailored strategy.
          </p>
          <Button
            asChild
            className="mt-6 rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="/contact">Connect with the Team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function NeighborhoodShowcaseSection() {
  return (
    <section id="neighborhoods" className="bg-background py-20 sm:py-24" aria-labelledby="neighborhoods-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Discover Your Neighborhood
          </p>
          <h2
            id="neighborhoods-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Spanish Trail's Exclusive Enclaves
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground">
            Each neighborhood within Spanish Trail offers its own distinct character, from lock-and-leave villas to sprawling golf course estates. Explore the community that matches your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {neighborhoodDetails.map((neighborhood) => (
            <article
              key={neighborhood.name}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/90 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="p-8">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-[var(--font-playfair)] text-2xl text-foreground">
                      {neighborhood.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                      {neighborhood.priceRange}
                    </p>
                  </div>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {neighborhood.description}
                </p>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.4em] text-secondary">Key Features</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {neighborhood.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="size-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="/communities/spanish-trail">Explore All 11 Neighborhoods</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function LifestyleFeaturesSection() {
  return (
    <section className="border-y border-border/60 bg-card/80 py-20 sm:py-24" aria-labelledby="lifestyle-features-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            The Spanish Trail Lifestyle
          </p>
          <h2
            id="lifestyle-features-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Where Luxury Living Meets Championship Amenities
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground">
            Beyond the gate lies a world-class private club experience. From the legendary golf course to resort-caliber dining and wellness facilities, every day offers new opportunities for recreation and connection.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {lifestyleFeatures.map((feature) => (
            <article
              key={feature.category}
              className="rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm"
            >
              <h3 className="mb-6 font-[var(--font-playfair)] text-2xl text-foreground">
                {feature.category}
              </h3>
              <ul className="space-y-3">
                {feature.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 text-center shadow-sm">
            <p className="mb-4 font-[var(--font-playfair)] text-2xl text-foreground">
              Experience the Spanish Trail difference
            </p>
            <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Join one of Las Vegas' most prestigious golf communities. Schedule a private tour and discover why Spanish Trail homeowners consistently rate their lifestyle experience among the best in the valley.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
              >
                <Link href="/membership">Learn About Membership</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
              >
                <Link href="/golf">Explore the Golf Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: 'What is Spanish Trail?',
      answer:
        'Spanish Trail is a prestigious 640-acre guard-gated golf course community in Southwest Las Vegas featuring 11 distinct neighborhoods, a 27-hole Robert Trent Jones Jr. championship golf course, and resort-caliber amenities including a 50,000 sq ft clubhouse, fitness centers, tennis courts, and pools.',
    },
    {
      question: 'Where is Spanish Trail located in Las Vegas?',
      answer:
        'Spanish Trail is located in Southwest Las Vegas at Tropicana Avenue and Rainbow Boulevard (89113 zip code). It is approximately 10 minutes from the Las Vegas Strip, 15 minutes from Harry Reid International Airport, and 12 minutes from Downtown Summerlin.',
    },
    {
      question: 'What are the price ranges for homes in Spanish Trail?',
      answer:
        'Spanish Trail homes range from approximately $450,000 to $3.5 million. Villa residences start around $450K-$750K, golf course homes range $600K-$1.1M, and custom estates range from $1.2M to $3.5M depending on size, location, and amenities.',
    },
    {
      question: 'What neighborhoods are within Spanish Trail?',
      answer:
        'Spanish Trail contains 11 distinct neighborhoods including The Estates, The Villas, The Links, Plum Creek, Carmels, Courtyards, Gardens, Islands, Springs, Innisbrook Estates, and Estates West. Each offers unique home styles from lock-and-leave villas to sprawling custom estates.',
    },
    {
      question: 'Does Spanish Trail have HOA fees?',
      answer:
        'Yes, Spanish Trail has HOA fees that cover guard-gated security, common area maintenance, and access to community amenities. Country club membership fees are separate and optional for access to golf, dining, and full club amenities.',
    },
    {
      question: 'What amenities does Spanish Trail Country Club offer?',
      answer:
        'Spanish Trail Country Club features a 27-hole Robert Trent Jones Jr. golf course, 50,000 sq ft Mediterranean-style clubhouse with fine dining and casual Bar & Grill, state-of-the-art fitness center, two resort-style pools, 12 lighted tennis courts, pickleball courts, and year-round social programming.',
    },
  ]

  return (
    <section className="bg-background py-20 sm:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Frequently Asked Questions
          </p>
          <h2
            id="faq-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Your Spanish Trail Questions Answered
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            Get expert answers about Spanish Trail real estate, amenities, neighborhoods, and lifestyle from Dr. Janet Duffy.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="rounded-3xl border border-border/60 bg-card/90 p-6 shadow-sm"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3
                className="mb-3 font-[var(--font-playfair)] text-xl text-foreground"
                itemProp="name"
              >
                {faq.question}
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-base leading-relaxed text-muted-foreground" itemProp="text">
                  {faq.answer}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            Have more questions about Spanish Trail luxury homes?
          </p>
          <Button
            asChild
            className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="/contact">Contact Dr. Janet Duffy</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2
          id="cta-heading"
          className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl"
        >
          Ready to live where championship golf meets iconic Las Vegas luxury?
        </h2>
        <p className="text-base leading-relaxed text-primary-foreground/85">
          Schedule a private tour, explore current listings, or request a valuation for your Spanish Trail residence—our concierge team is ready to assist.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full px-7 py-3 text-xs uppercase tracking-[0.4em]"
          >
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary-foreground/40 bg-primary/10 px-7 py-3 text-xs uppercase tracking-[0.4em] text-primary-foreground hover:bg-primary/20"
          >
            <Link href="/sellers">Get a Valuation</Link>
          </Button>
        </div>
    </div>
    </section>
  )
}
