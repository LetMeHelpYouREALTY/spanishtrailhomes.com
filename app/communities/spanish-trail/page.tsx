import Link from 'next/link'
import Script from 'next/script'

import { Button } from '@/components/ui/button'
import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Metadata } from 'next'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { HeroBackground } from '@/components/hero-background'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner, CardVisual } from '@/components/heading-media'
import { getSiteImageUrl } from '@/lib/cloudflare-images'


const pageUrl = 'https://www.spanishtrailhomes.com/communities/spanish-trail'
const communityPageDescription =
  'Spanish Trail Country Club Las Vegas: guard-gated homes for sale, private 27-hole golf, 11 neighborhoods, and buyer resources with Dr. Jan Duffy.'

const communityWebPageSchema = createWebPageSchema({
  name: 'Spanish Trail Country Club Las Vegas | Community & Homes Guide',
  description: communityPageDescription,
  path: '/communities/spanish-trail',
  type: 'CollectionPage',
})

export const metadata: Metadata = {
  title: 'Spanish Trail Country Club Las Vegas | Homes for Sale & Community Guide',
  description: communityPageDescription,
  alternates: { canonical: getCanonicalUrl('/communities/spanish-trail') },
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
    title: 'Spanish Trail Country Club Las Vegas | Community & Homes',
    description:
      'Tour Spanish Trail Country Club real estate—guard-gated Las Vegas 89113—with Dr. Jan Duffy.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Community Guide',
        subtitle: 'Neighborhood insights & active listings',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Homes for Sale',
    description:
      'Explore Spanish Trail homes, amenities, and buyer guides curated by Dr. Jan Duffy.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Homes',
        subtitle: 'Guard-gated community insights & listings',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const communityNarratives = [
  {
    title: 'Spanish Trail Homes Market Intelligence',
    paragraphs: [
      'Spanish Trail homes sit within one of Las Vegas’s most carefully curated guard-gated enclaves, and their value trajectory reflects both scarcity and desirability. Listing activity typically peaks in late spring before tapering off during the hottest summer weeks, yet serious buyers continue to circulate year-round thanks to the proximity to Allegiant Stadium, Harry Reid International Airport, and the Strip. Dr. Jan Duffy leverages Berkshire Hathaway HomeServices analytics to identify micro trends: which enclaves are receiving multiple offers, where price adjustments signal negotiation room, and which homes are being marketed privately through network introductions.',
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
      'Renovation priorities in 2026 include energy-efficient windows, whole-home automation, and spa bathrooms with steam showers. Dr. Duffy advises on which upgrades matter most for resale versus lifestyle enjoyment. She also coordinates pre-purchase inspections that evaluate roof age, pool equipment, and golf course setbacks, ensuring her clients avoid unexpected costs and secure Spanish Trail homes that align with their long-term plans.'
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
    question: 'Is it called Spanish Trail or Spanish Trails Country Club?',
    answer:
      'The official community and club names use Spanish Trail (singular)—Spanish Trail Country Club operates the private golf course inside the guard gates in Las Vegas, NV 89113. “Spanish Trails” is a common search typo; maps and MLS copy use Spanish Trail. For homes for sale, tours, and HOA questions, contact Dr. Jan Duffy at (702) 766-3299.',
  },
  {
    question: 'What price ranges define Spanish Trail homes in 2026?',
    answer:
      'Spanish Trail single-family homes typically start in the mid-$700,000s for golf villas and extend beyond $5 million for custom estates with double fairway frontage. Renovated properties with modern interiors and outdoor entertainment spaces command the highest premiums. Dr. Jan Duffy provides price trend dashboards and walk-through analyses so you know exactly where each home falls within the current spectrum.',
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

const communityFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: communityFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const highlights = [
  'Guard-gated golf course community spanning 640 acres in the Spring Valley area of Las Vegas',
  'One of the earliest guard-gated golf communities in Las Vegas, established in the mid-1980s',
  '11 distinctive neighborhoods with 1,200+ homes—from townhomes to custom luxury estates',
  'Access to Spanish Trail Country Club with a 27-hole Robert Trent Jones Jr. championship course',
  '50,000 square-foot clubhouse with fitness, two aquatic centers, and 12 lighted tennis courts',
  'Adjacent to Summerlin and only 10–15 minutes from the Las Vegas Strip',
]

const amenities = [
  '27-hole championship golf course with 120+ bunkers and 15 lakes',
  'Full-service country club with dining, social programming, and event spaces',
  'Tennis complex, pickleball, and fitness center with classes and trainers',
  'Two resort-style pools, spas, and miles of walking trails',
  'Gated entry points with on-site security and concierge-style service',
]

const communityFacts = [
  { label: 'Location', value: 'Spring Valley area, adjacent to Summerlin, east of Spanish Hills' },
  { label: 'Size', value: '640+ acres spanning 11 distinctive neighborhoods with 1,200+ homes' },
  { label: 'Access', value: 'Guard-gated entries via West/East Tropicana and Hacienda gates' },
  { label: 'Golf', value: '27-hole Robert Trent Jones Jr. course with lakes, waterfalls, and 120 bunkers' },
  { label: 'Residences', value: 'Townhomes, villas, and custom estates built mid-1980s through 1990s' },
  { label: 'Proximity', value: '10–15 minutes to the Las Vegas Strip and Summerlin' },
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
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
        description="Browse the latest guard-gated inventory across the Estates, Villas, and golf villa enclaves. Use filters to zero in on square footage, lot size, or renovation level, then schedule a private showing with Dr. Jan Duffy."
        priceMin="0"
        propertyTypes=",SFR,CONDO"
      />
      <HighlightsSection />
      <DetailsSection />
      <NarrativesSection />
      <AmenitiesSection />
      <BenefitsSection />
      <RealEstateTypesSection />
      <SchoolsSection />
      <ParksAndRecreationSection />
      <ThingsToDoSection />
      <DiningAndShoppingSection />
      <HOASection />
      <CommunityFAQSection />
      <Script id="community-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(communityFaqSchema)}
      </Script>
      <ContactSection />
      <Script id="community-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(communityWebPageSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="community-hero-heading">
      <HeroBackground
        src={getSiteImageUrl('h2-neighborhood-street')}
        alt="Spanish Trail Country Club guard-gated community and golf course landscape, Las Vegas Nevada"
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/60 via-[#0f2b1e]/60 to-[#0f2b1e]/80"
        sizes="(max-width: 1024px) 100vw, 1280px"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background" />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 text-primary-foreground sm:py-32 lg:py-40">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-accent">
            Featured Community
          </p>
          <h1
            id="community-hero-heading"
            className="font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
          >
            Spanish Trail Country Club | Luxury Homes Las Vegas
          </h1>
          <p className="text-base leading-relaxed text-primary-foreground sm:text-lg">
            Spanish Trail Country Club anchors this private guard-gated golf community in southwest Las Vegas (89113)—minutes from the Strip and Spring Valley. People often search “Spanish Trails Las Vegas”; this is the same place. Shopping inventory? Use the{' '}
            <Link href="/spanish-trail-homes-for-sale-las-vegas" className="font-medium text-primary-foreground underline-offset-4 hover:underline">
              live Las Vegas 89113 listings hub
            </Link>{' '}
            for MLS snapshots and tours, or the{' '}
            <Link href="/homes-for-sale-in-spanish-trail-las-vegas" className="font-medium text-primary-foreground underline-offset-4 hover:underline">
              property-type and neighborhood buyer guide
            </Link>{' '}
            before you filter homes by enclave.
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
      <SectionBanner headingId="highlights-heading" />
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
      <SectionBanner headingId="details-heading" />
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
              backgroundImage: `url('${getSiteImageUrl('h2-golf-sunrise')}')`,
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
      <SectionBanner headingId="narratives-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Insights</p>
          <h2 id="narratives-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Deeper guidance for buying and selling Spanish Trail homes
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Dr. Jan Duffy combines concierge-level service with years of data-backed experience. These briefings help you understand what drives value inside the guard gates, how to craft winning offers, and which lifestyle perks elevate daily living.
          </p>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Related guides:{' '}
            <Link href="/spanish-trail-custom-estate-homes-strip" className="text-[#0f2b1e] underline-offset-4 hover:underline">
              custom estate homes near the Las Vegas Strip
            </Link>
            ,{' '}
            <Link href="/spanish-trail-country-club-estate-listings" className="text-[#0f2b1e] underline-offset-4 hover:underline">
              country club estate listings
            </Link>
            , and{' '}
            <Link href="/events" className="text-[#0f2b1e] underline-offset-4 hover:underline">
              club weddings and events
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {communityNarratives.map((topic) => (
            <article key={topic.title} className="space-y-6 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-8 shadow-lg shadow-primary/10">
              <CardVisual seed={String(topic.title)} />
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
      <SectionBanner headingId="amenities-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
      <SectionBanner headingId="benefits-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
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
      <SectionBanner headingId="community-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Homes FAQ</p>
          <h2 id="community-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Key questions about purchasing in Spanish Trail
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Buyers and sellers often share similar questions when navigating a guard-gated market. These insights from Dr. Jan Duffy provide immediate clarity and pave the way for confident negotiations.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {communityFaq.map((item) => (
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

function RealEstateTypesSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="real-estate-types-heading">
      <SectionBanner headingId="real-estate-types-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Property Types</p>
          <h2 id="real-estate-types-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
            Spanish Trail Real Estate & Home Styles
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Homes in Spanish Trail range from elegant villas to custom-built estates, offering options for every lifestyle. The community features a diverse mix of architectural styles with Mediterranean influences throughout.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Custom Estate Homes',
              description: 'Luxury custom estates in a variety of styles, most showing Mediterranean influence. Located behind secondary mechanical gates in exclusive enclaves. Premium homes priced at $2M and above, with some available in the high $900s.',
            },
            {
              title: 'Semi-Custom Homes',
              description: 'Elegant single-family homes in pale pink and cream stucco finishes. Built during the mid-1980s and 1990s with quality craftsmanship and timeless desert aesthetics.',
            },
            {
              title: 'Townhomes & Condos',
              description: 'Lock-and-leave townhomes clustered around lakes on the golf course, creating peaceful, parklike settings. Perfect for those seeking low-maintenance luxury living.',
            },
            {
              title: 'Golf Villas',
              description: 'Residences positioned along the championship fairways with panoramic golf course views. Ideal for avid golfers wanting instant access to world-class play.',
            },
            {
              title: 'Lakefront Properties',
              description: 'Homes overlooking Spanish Trail\'s serene lakes and water features. Residents enjoy watching ducks and geese that share the tranquil waterways.',
            },
            {
              title: 'Courtyard Homes',
              description: 'Single-story floor plans with enclosed private courtyards, offering intimate outdoor spaces perfect for morning coffee or evening entertaining.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border/50 bg-card/90 p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SchoolsSection() {
  return (
    <section className="border-y border-border/60 bg-card/80 py-20 sm:py-24" aria-labelledby="schools-heading">
      <SectionBanner headingId="schools-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Education</p>
            <h2 id="schools-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Spanish Trail Schools
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Students living in Spanish Trail are served by the Clark County School District, which provides students grades K-12 with a strong learning foundation backed by extracurricular and academic activities. Support services prepare students for higher education or entering the workforce.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              The district prides itself on preparing students for future endeavors, whether pursuing collegiate academics, technical training, or professional careers. Dr. Jan Duffy can provide additional school boundary information and private school options in the area.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">Assigned Schools</h3>
            <div className="space-y-4">
              {[
                { level: 'Elementary School', name: 'Frank Kim Elementary School', grades: 'K-5' },
                { level: 'Middle School', name: 'Grant Sawyer Middle School', grades: '6-8' },
                { level: 'High School', name: 'Spring Valley High School', grades: '9-12' },
              ].map((school) => (
                <div key={school.name} className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{school.level}</p>
                  <p className="mt-2 text-base text-foreground">{school.name}</p>
                  <p className="text-sm text-muted-foreground">Grades {school.grades}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ParksAndRecreationSection() {
  return (
    <section className="bg-background py-20 sm:py-24" aria-labelledby="parks-heading">
      <SectionBanner headingId="parks-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Parks & Recreation</p>
          <h2 id="parks-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
            Spanish Trail Parks
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Lovers of the great outdoors enjoy fine access to beautiful, spacious, and green parks in and near the Spanish Trail community. Las Vegas is known for its moderate to warm weather year-round, meaning there is always something to do outdoors—whether visiting a park with the children or walking your four-legged friend.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border/50 bg-card/90 p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">Nearby Park</p>
            <h3 className="mt-3 font-[var(--font-playfair)] text-2xl text-foreground">Old Spanish Trail Park</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              This neighborhood park features a covered playground, paved walking paths, and picnic areas. Old Spanish Trail Park offers a historical connection to the Las Vegas Valley when it was a major stop along the historic overland route connecting settlements in Spanish New Mexico and California.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-1 inline-block size-2 rounded-full bg-secondary" aria-hidden />
                <span>Covered playground for children</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block size-2 rounded-full bg-secondary" aria-hidden />
                <span>Paved walking and jogging paths</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block size-2 rounded-full bg-secondary" aria-hidden />
                <span>Shaded picnic areas</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block size-2 rounded-full bg-secondary" aria-hidden />
                <span>Historical markers and information</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border/50 bg-card/90 p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">Within the Community</p>
            <h3 className="mt-3 font-[var(--font-playfair)] text-2xl text-foreground">Spanish Trail Lakes & Grounds</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The community itself offers miles of walking paths winding through manicured landscapes, past serene lakes, and along the championship golf course. It isn't unusual to see residents feeding the ducks and geese that share the property—a peaceful, parklike setting just 15 minutes from the Strip.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-1 inline-block size-2 rounded-full bg-secondary" aria-hidden />
                <span>Miles of walking and biking paths</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block size-2 rounded-full bg-secondary" aria-hidden />
                <span>Scenic lakes with waterfowl</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block size-2 rounded-full bg-secondary" aria-hidden />
                <span>Mature tree-lined streets</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block size-2 rounded-full bg-secondary" aria-hidden />
                <span>Golf course vistas throughout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function ThingsToDoSection() {
  return (
    <section className="border-y border-border/60 bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="things-to-do-heading">
      <SectionBanner headingId="things-to-do-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Things to Do</p>
          <h2 id="things-to-do-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Spanish Trail Recreation & Activities
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Living in the Spanish Trail community affords you the best access to various outdoor recreational opportunities, as well as on-site dining at the Spanish Trail Country Club. With its convenient location near the best city amenities of Las Vegas, there is always something for everyone.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-[#d8cdbf] bg-white p-8 shadow-lg shadow-primary/10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">Outdoor Adventure</p>
          <h3 className="mt-3 font-[var(--font-playfair)] text-2xl text-[#1f2a24]">Red Rock Canyon National Conservation Area</h3>
          <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
            This outdoor recreational amenity is renowned for its hiking and rock climbing. Just a short drive from Spanish Trail, residents have access to immerse themselves in nature's serene beauty. Among the many trails, you'll find options for all experience levels:
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              'Moenkopi Loop',
              'Calico Hills',
              'Calico Tanks',
              'Turtlehead Peak',
              'Keystone Thrust',
              'White Rock—Willow Springs',
              'Grand Circle Loop',
              'White Rock Mountain Loop',
              'Willow Spring Loop',
              'La Madre Spring',
            ].map((trail) => (
              <div key={trail} className="flex items-center gap-2 text-sm text-[#372a20]/80">
                <span className="size-1.5 rounded-full bg-[#6f5237]" aria-hidden />
                {trail}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-[#372a20]/80">
            These hiking trails have different intensity levels for experienced hikers or beginners. Find historical landmarks that document the long history of Native Tribes in Nevada.
          </p>
        </div>
      </div>
    </section>
  )
}

function DiningAndShoppingSection() {
  return (
    <section className="bg-background py-20 sm:py-24" aria-labelledby="dining-shopping-heading">
      <SectionBanner headingId="dining-shopping-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Dining & Shopping</p>
          <h2 id="dining-shopping-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
            Spanish Trail Dining & Shopping
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border/50 bg-card/90 p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">On-Site Dining</p>
            <h3 className="mt-3 font-[var(--font-playfair)] text-2xl text-foreground">The Bar & Grill at Spanish Trail</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The Bar & Grill is the heart of the Spanish Trail Country Club. These luxurious yet relaxing spaces offer members dining service 7 days a week. Whether you want to grab a drink after a round on the course, or you are looking for a sophisticated meal with family and friends, there is always something new and delicious for every palate.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              <strong>Featured Menu Item:</strong> The Back-Nine Clubhouse — a triple-decker with turkey, ham, bacon, tomato, lettuce, and cheddar cheese on your choice of bread.
            </p>
          </div>

          <div className="rounded-3xl border border-border/50 bg-card/90 p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">Nearby Shopping</p>
            <h3 className="mt-3 font-[var(--font-playfair)] text-2xl text-foreground">Grand Canal Shoppes at The Venetian</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              If you're going to go shopping, why not shop in style? This upscale resort mall has a range of shops including designer fashion, toys, tech, music, and gifts. Just a short drive from Spanish Trail on the Las Vegas Strip.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              <strong>Don't Miss:</strong> The Wishing Tree—an enchanting, inspired olive tree accented by a canopy of gold leaves and vibrant glass birds.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HOASection() {
  return (
    <section className="border-y border-border/60 bg-card/80 py-20 sm:py-24" aria-labelledby="hoa-heading">
      <SectionBanner headingId="hoa-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Community Standards</p>
            <h2 id="hoa-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Spanish Trail HOA & Governance
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Spanish Trail HOA is tightly managed to maintain the highest community standards. New owners go through an orientation with the HOA where they receive gate clickers and access credentials. While this may seem thorough, many homeowners appreciate knowing that exceptional standards are upheld throughout the community.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Country Club and golf membership are separate from the monthly HOA fees. This allows homeowners flexibility in choosing their level of club engagement while still enjoying all the benefits of guard-gated community living.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">HOA Highlights</h3>
            <div className="space-y-4">
              {[
                { title: 'New Owner Orientation', description: 'Comprehensive onboarding including community rules, gate access setup, and neighborhood introduction.' },
                { title: '24/7 Guard-Gated Security', description: 'Staffed entry gates with visitor management and community patrol services.' },
                { title: 'Maintained Common Areas', description: 'Landscaping, street lighting, and common area upkeep included in assessments.' },
                { title: 'Architectural Standards', description: 'Design guidelines preserve property values and community aesthetics.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="bg-background py-20 sm:py-24" aria-labelledby="contact-heading">
      <SectionBanner headingId="contact-heading" />
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
