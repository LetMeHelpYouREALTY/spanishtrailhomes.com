import Link from 'next/link'
import Script from 'next/script'

import { Button } from '@/components/ui/button'
import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Metadata } from 'next'
import { HeroSearchWidget } from '@/components/hero-search-widget'

const pageUrl = 'https://www.spanishtrailhomes.com/communities/spanish-trail'

export const metadata: Metadata = {
  title: 'Spanish Trail Homes for Sale | Community Guide',
  description:
    'Browse Spanish Trail homes for sale, guard-gated amenities, neighborhood insights, and buyer resources with Dr. Janet Duffy.',
  alternates: { canonical: '/communities/spanish-trail' },
  openGraph: {
    url: pageUrl,
    title: 'Spanish Trail Homes & Community Overview',
    description:
      'Tour Spanish Trail real estate, amenities, and lifestyle advantages with Dr. Janet Duffy.',
    images: [`${pageUrl}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Homes for Sale',
    description:
      'Explore Spanish Trail homes, amenities, and buyer guides curated by Dr. Janet Duffy.',
    images: [`${pageUrl}/og-image.png`],
  },
}

const communityNarratives = [
  {
    title: 'Spanish Trail Homes Market Intelligence',
    paragraphs: [
      'Spanish Trail homes sit within one of Las Vegas’s most carefully curated guard-gated enclaves, and their value trajectory reflects both scarcity and desirability. Listing activity typically peaks in late spring before tapering off during the hottest summer weeks, yet serious buyers continue to circulate year-round thanks to the proximity to Allegiant Stadium, Harry Reid International Airport, and the Strip. Dr. Janet Duffy leverages Berkshire Hathaway HomeServices analytics to identify micro trends: which enclaves are receiving multiple offers, where price adjustments signal negotiation room, and which homes are being marketed privately through network introductions.',
      'Because the community’s 11 neighborhoods were developed across several decades, pricing varies significantly depending on architectural style, lot size, and renovation level. Dr. Duffy prepares comprehensive market briefings that include sold comparables, golf frontage premiums, and upcoming infrastructure improvements. Her clients approach every Spanish Trail real estate opportunity armed with data-driven confidence, which often results in winning offers that still protect long-term equity.'
    ],
  },
  {
    title: 'Living Inside the Guard Gates',
    paragraphs: [
      'Residents often describe Spanish Trail as a desert oasis where towering pines, water features, and manicured fairways create a true escape from the Strip’s energy just minutes away. The neighborhood’s design prioritizes privacy: winding streets slow traffic, cul-de-sacs encourage community gatherings, and community patrols keep the gates attentive around the clock. Homeowners can walk or cart to the clubhouse for Pilates at sunrise, a client lunch on the patio, or sunset cocktails on the terrace overlooking the Lakes course.',
      'Club membership is optional yet highly encouraged for homeowners who want immersive access to wellness programming, tennis leagues, youth camps, and themed social events. Dr. Duffy introduces new residents to the committees that match their passions—wine society, charitable outreach, or tournament golf—so the community feels personal from day one. Her concierge approach ensures every Spanish Trail address becomes a launchpad for meaningful experiences.'
    ],
  },
  {
    title: 'Architecture, Design Trends, and Renovation Insights',
    paragraphs: [
      'Spanish Trail real estate showcases architectural variety: Tuscan-inspired estates with stone accents, contemporary villas with sleek rooflines, and courtyard homes that wrap around sparkling pools. Many properties feature mature landscaping rarely found in newer Las Vegas communities. Buyers interested in customization benefit from Dr. Duffy’s vetted roster of architects, designers, and craftsmen who understand the Architectural Review Committee’s guidelines and can fast-track approvals for outdoor kitchens, casitas, or wellness suites.',
      'Renovation priorities in 2025 include energy-efficient windows, whole-home automation, and spa bathrooms with steam showers. Dr. Duffy advises on which upgrades matter most for resale versus lifestyle enjoyment. She also coordinates pre-purchase inspections that evaluate roof age, pool equipment, and golf course setbacks, ensuring her clients avoid unexpected costs and secure Spanish Trail homes that align with their long-term plans.'
    ],
  },
  {
    title: 'Buyer Blueprint and Strategic Negotiation',
    paragraphs: [
      'Successful Spanish Trail buyers move quickly yet thoughtfully. Dr. Duffy begins with a discovery consultation that covers lifestyle goals, commute patterns, and preferred architecture. She then builds a curated tour highlighting homes across the Estates, Villas, and golf villa enclaves so clients can experience how each pocket feels at different times of day. Her preparation includes HOA insight, monthly carrying cost estimates, and lender introductions for competitive financing.',
      'When it is time to submit an offer, Dr. Duffy crafts terms that reflect the seller’s priorities—rent backs, furnishings, or membership transfers. She also negotiates repairs with an eye toward long-term investment value. Because Dr. Duffy’s reputation in the community is synonymous with professionalism and accountability, listing agents trust her buyers and often choose their offers even when competing bids are financially similar.'
    ],
  },
]

const communityFaq = [
  {
    question: 'What price ranges define Spanish Trail homes in 2025?',
    answer:
      'Spanish Trail single-family homes typically start in the mid-$700,000s for golf villas and extend beyond $5 million for custom estates with double fairway frontage. Renovated properties with modern interiors and outdoor entertainment spaces command the highest premiums. Dr. Janet Duffy provides price trend dashboards and walk-through analyses so you know exactly where each home falls within the current spectrum.',
  },
  {
    question: 'How do HOA assessments vary across the 11 neighborhoods?',
    answer:
      'Monthly assessments generally cover guard-gate staffing, common area landscaping, and community reserves. Villas and townhomes often include exterior maintenance, while custom estate enclaves focus on security and streetscapes. Dr. Duffy breaks down the fees for each enclave, highlights special assessment history, and reviews reserve studies to ensure buyers make fully informed decisions.',
  },
  {
    question: 'Can Spanish Trail homeowners join the Country Club after purchasing?',
    answer:
      'Yes. Club membership is separate from homeownership, and buyers can choose from full golf, young executive, social, or corporate categories. Initiation fees and monthly dues are updated annually. Dr. Duffy works closely with the membership office to provide the latest rate sheets, transfer policies, and promotional incentives so clients can align their purchase with the lifestyle experience they envision.',
  },
  {
    question: 'What should sellers expect when preparing to list a Spanish Trail home?',
    answer:
      'Sellers benefit from strategic pre-market preparation: professional staging, landscaping touch-ups, and drone photography that captures golf course vistas. Dr. Duffy orchestrates private previews for Berkshire Hathaway HomeServices agents and coordinates marketing across luxury portals to reach affluent buyers nationwide. Her pricing advice considers time-on-market trends and buyer feedback to position each home for multiple offers.',
  },
  {
    question: 'Are investors active in Spanish Trail?',
    answer:
      'Investment interest remains steady thanks to the neighborhood’s stability, proximity to major employment centers, and strong executive rental demand. Long-term leases must comply with HOA regulations, typically requiring minimum rental periods. Dr. Duffy outlines cash-flow projections, rental comps, and property management resources for clients exploring Spanish Trail homes as part of a diversified portfolio.',
  },
]


const highlights = [
  'Guard-gated golf course community in Southwest Las Vegas with 24/7 security',
  'Access to Spanish Trail Country Club featuring a 27-hole Robert Trent Jones Jr. course',
  'Elite amenities including tennis courts, fitness center, pools, spas, and clubhouse dining',
  'Tree-lined streets, mature landscaping, and a mix of avenues and secluded cul-de-sacs',
  'Minutes from Spring Valley, the Strip, and essential conveniences',
]

const amenities = [
  '27-hole championship golf course with 120+ bunkers and 15 lakes',
  'Full-service country club with dining, social programming, and event spaces',
  'Tennis complex, pickleball, and fitness center with classes and trainers',
  'Two resort-style pools, spas, and miles of walking trails',
  'Gated entry points with on-site security and concierge-style service',
]

const communityFacts = [
  { label: 'Location', value: 'Spanish Trail, Las Vegas, NV 89117' },
  { label: 'Access', value: 'Entries via West/East Tropicana and Hacienda gates' },
  { label: 'Golf', value: '27-hole Robert Trent Jones Jr. design, private club' },
  { label: 'Residences', value: 'Townhomes, villas, and custom estates across 11 neighborhoods' },
  { label: 'Lifestyle', value: 'Country club events, social clubs, wellness programming' },
]

const benefits = [
  {
    title: 'Legendary Golf Views',
    copy: 'Homes overlook immaculately maintained fairways, mature trees, and water features that create a serene daily backdrop.',
  },
  {
    title: 'Quiet, Private Streets',
    copy: 'The golf course topography buffers traffic noise, delivering a peaceful atmosphere minutes from city energy.',
  },
  {
    title: 'Elevated Privacy',
    copy: '24/7 staffed gates and secondary enclaves within the community provide an added layer of exclusivity for residents.',
  },
  {
    title: 'Resort-Level Recreation',
    copy: 'Beyond golf, enjoy tennis, swimming, fitness, and social events designed for families and professionals alike.',
  },
]

export default function SpanishTrailCommunityPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Community' },
            ]}
          />
        </div>
      </div>
      <RealScoutSection
        id="community-listings"
        eyebrow="Available Homes"
        title="Spanish Trail Homes on the Market Now"
        description="Browse the latest guard-gated inventory across the Estates, Villas, and golf villa enclaves. Use filters to zero in on square footage, lot size, or renovation level, then schedule a private showing with Dr. Janet Duffy."
        priceMin="0"
        propertyTypes=",SFR,CONDO"
      />
      <HighlightsSection />
      <DetailsSection />
      <NarrativesSection />
      <AmenitiesSection />
      <BenefitsSection />
      <CommunityFAQSection />
      <ContactSection />
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="community-hero-heading">
      <div className="absolute inset-0 -z-10 bg-cover bg-center community-hero-background" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background" />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 text-primary-foreground sm:py-32 lg:py-40">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Featured Community
          </p>
          <h1
            id="community-hero-heading"
            className="font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
          >
            Spanish Trail Luxury Homes for Sale
          </h1>
          <p className="text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            Discover a guard-gated golf enclave in Southwest Las Vegas that pairs timeless architecture with resort-level amenities, all moments from Spring Valley and the Strip.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            asChild
            className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.4em]"
          >
            <Link href="/buyers">Explore Available Homes</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/40 bg-background/90 px-8 py-3 text-xs uppercase tracking-[0.4em] text-primary hover:bg-background/60"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function HighlightsSection() {
  return (
    <section className="bg-background py-20 sm:py-24" aria-labelledby="highlights-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h2
            id="highlights-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Spanish Trail Highlights
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail blends manicured fairways, winding water features, and mature landscaping across 640 acres. Within the guarded gates, avenues and private cul-de-sacs showcase custom estates, villas, and townhomes designed for privacy and outdoor entertaining.
          </p>
          <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 inline-block size-2 rounded-full bg-secondary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Community Snapshot
          </p>
          <dl className="grid grid-cols-1 gap-4 text-sm text-muted-foreground">
            {communityFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-semibold text-foreground">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function DetailsSection() {
  return (
    <section className="border-y border-border/60 bg-card/80" aria-labelledby="details-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <h2
            id="details-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Spanish Trail Real Estate Overview
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Homes inside Spanish Trail range from elegant townhomes and villas to expansive custom estates. Many properties line the golf course or water features, while interior lots showcase lush gardens and courtyards that prioritize indoor-outdoor living.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            The community is divided into distinctive neighborhoods—each with its own character. Long, tree-lined avenues provide quick connectivity to Tropicana Avenue and I-215, while cul-de-sacs and secondary gates offer an added sense of seclusion and security.
          </p>
          <Button
            asChild
            variant="link"
            className="justify-start px-0 text-xs uppercase tracking-[0.3em] text-primary"
          >
            <Link href="/buyers">View Current Listings</Link>
          </Button>
        </div>
        <div
          className="h-full rounded-3xl border border-border/60 bg-cover bg-center shadow-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501856777433-9fbb13f0b2c6?q=80&w=1800&auto=format&fit=crop')",
          }}
          role="img"
          aria-label="Spanish Trail residences with golf course views"
        />
      </div>
    </section>
  )
}

function NarrativesSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="narratives-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Insights</p>
          <h2 id="narratives-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Deeper guidance for buying and selling Spanish Trail homes
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Dr. Janet Duffy combines concierge-level service with years of data-backed experience. These briefings help you understand what drives value inside the guard gates, how to craft winning offers, and which lifestyle perks elevate daily living.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {communityNarratives.map((topic) => (
            <article key={topic.title} className="space-y-6 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-8 shadow-lg shadow-primary/10">
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

function AmenitiesSection() {
  return (
    <section className="bg-background py-20 sm:py-24" aria-labelledby="amenities-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Country Club Amenities
          </p>
          <h2
            id="amenities-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Resort-Level Experiences for Everyday Living
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Residents receive privileged access to the Spanish Trail Country Club in addition to gated neighborhood amenities. Whether you are unwinding after a round, hosting guests, or diving into a wellness routine, the property delivers every luxury at your doorstep.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {amenities.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card/90 p-6 shadow-sm"
            >
              <span className="size-2.5 rounded-full bg-secondary" aria-hidden />
              <p className="text-sm font-medium text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section className="border-y border-border/60 bg-card/80" aria-labelledby="benefits-heading">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Why Residents Love Spanish Trail
          </p>
          <h2
            id="benefits-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Golf Course Community Advantages
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail offers all the advantages of golf course living—scenic vistas, quiet streets, and instant access to recreation—while keeping you moments from city conveniences.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl border border-border/50 bg-background/80 p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                {benefit.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {benefit.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CommunityFAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="community-faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Homes FAQ</p>
          <h2 id="community-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Key questions about purchasing in Spanish Trail
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Buyers and sellers often share similar questions when navigating a guard-gated market. These insights from Dr. Janet Duffy provide immediate clarity and pave the way for confident negotiations.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {communityFaq.map((item) => (
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

function ContactSection() {
  return (
    <section className="bg-background py-20 sm:py-24" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2
            id="contact-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Ready to tour Spanish Trail?
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Our team will tailor a property search across Spanish Trail’s guard-gated neighborhoods, from golf course estates to lock-and-leave villas. Share your goals and we will craft a strategy aligned with your lifestyle and timeline.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="rounded-full px-7 py-3 text-xs uppercase tracking-[0.4em]"
            >
              <Link href="/contact">Connect with an Advisor</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-primary/40 bg-background px-7 py-3 text-xs uppercase tracking-[0.4em] text-primary hover:bg-background/60"
            >
              <Link href="/buyers">View All Listings</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card/90 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Community Resources
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li>
              <Link href="/guest-info" className="underline-offset-4 hover:underline">
                Guest Information & Directions
              </Link>
            </li>
            <li>
              <Link href="/golf" className="underline-offset-4 hover:underline">
                Explore the Spanish Trail Golf Experience
              </Link>
            </li>
            <li>
              <Link href="/events" className="underline-offset-4 hover:underline">
                Weddings & Private Events at the Club
              </Link>
            </li>
            <li>
              <Link href="/membership" className="underline-offset-4 hover:underline">
                Membership & Concierge Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
