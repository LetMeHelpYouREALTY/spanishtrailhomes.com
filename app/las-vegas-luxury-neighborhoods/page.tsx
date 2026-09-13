import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Breadcrumbs } from '@/components/breadcrumbs'
import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Button } from '@/components/ui/button'
import { nearbyCommunities } from '@/lib/spanishTrailContent'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { createOgImageUrl, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner, CardVisual } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/las-vegas-luxury-neighborhoods'

const comparisonHighlights = [
  {
    name: 'The Ridges',
    insight:
      'Ultra-modern architecture, Bear’s Best golf, and Summerlin adjacency. Ideal for buyers seeking new construction and elevated HOA programming.',
  },
  {
    name: 'Red Rock Country Club',
    insight:
      'Two Arnold Palmer courses, family-focused amenities, and immediate Downtown Summerlin access. Strong alternative for golf-centric households.',
  },
  {
    name: 'The Summit Club',
    insight:
      'Discovery Land Company development with private aviation, bespoke wellness, and concierge services. Highest price point among west valley enclaves.',
  },
  {
    name: 'Spanish Hills',
    insight:
      'Custom-view estates perched above the valley. Complimentary pairing with Spanish Trail for cross-shopping larger lots and Strip panoramas.',
  },
  {
    name: 'Summerlin golf & country-club corridor',
    insight:
      'If you are searching “golf courses in Summerlin” or a “Summerlin country club,” you are usually looking at master-planned Summerlin west of Spanish Trail—Bear’s Best at The Ridges, TPC Summerlin, and clubs near Downtown Summerlin. Spanish Trail is not inside the Summerlin master plan; it sits in southwest Las Vegas (Spring Valley, 89113) with its own private 27-hole Spanish Trail Country Club. Dr. Duffy lines up same-day tours so geography, dues, and commute match what you expect.',
  },
  {
    name: 'Spanish Oaks, Spanish Wells & similar enclaves',
    insight:
      'Spanish Oaks, Spanish Wells, and other valley neighborhoods are separate communities with their own HOAs and amenities—compare them with Spanish Trail for tennis, views, or lot size, but verify club access and fees for each. When you want guard-gated Spanish Trail listings specifically, pivot to the dedicated homes-for-sale hub after your comparison tour.',
  },
]

const relocationChecklist = [
  'Commute times to Allegiant Stadium, the Strip, and major employment hubs',
  'Membership categories, initiation fees, and waitlist details for each club',
  'School zoning, private education proximity, and daily lifestyle conveniences',
  'Renovation guidelines, architectural review timelines, and preferred vendor lists',
]

const luxuryNeighborhoodsFaq = [
  {
    question: 'Is Spanish Trail in Summerlin?',
    answer:
      'No. Spanish Trail is a guard-gated master plan in southwest Las Vegas (Spring Valley area, ZIP 89113) west of I-215. Summerlin is a separate master-planned area to the northwest. Many buyers tour both because commutes and club cultures differ—Dr. Duffy maps the distinction before you write an offer.',
  },
  {
    question: 'What is the difference between Spanish Trail and Spanish Hills in Las Vegas?',
    answer:
      'Spanish Trail is a large guard-gated golf community with Spanish Trail Country Club’s 27-hole private course. Spanish Hills is a distinct luxury enclave often chosen for view lots and custom architecture—buyers sometimes cross-shop the two for panorama versus fairway lifestyle. “Spanish Hills wedding” and event searches may point to venue marketing; for real estate, confirm address, HOA, and club access on each listing.',
  },
  {
    question: 'How do Summerlin golf courses compare to Spanish Trail Country Club?',
    answer:
      'Summerlin-area golf includes high-profile semi-private and private options tied to neighborhoods like The Ridges and tournaments at TPC Summerlin. Spanish Trail offers a single member-focused 27-hole Robert Trent Jones Jr. layout inside its own gates. Neither is “better” universally—it depends on whether you want Summerlin master-plan services versus Spanish Trail’s mature landscaping and triple-nine routing. Dr. Duffy helps you tour both corridors and links to current Spanish Trail homes when you are ready to focus there.',
  },
  {
    question: 'How does Spanish Trail compare to The Ridges in terms of price and lifestyle?',
    answer:
      'Spanish Trail typically offers better value per square foot with established landscaping and mature amenities, while The Ridges features newer construction and ultra-modern architecture at a premium. Spanish Trail\'s triple-course golf and guard-gated security appeal to buyers seeking established community character, while The Ridges attracts those prioritizing new-build technology and elevated HOA programming. Dr. Duffy provides detailed comparisons during neighborhood tours.',
  },
  {
    question: 'What makes Spanish Trail stand out among Las Vegas luxury communities?',
    answer:
      'Spanish Trail combines mature tree-lined streets, 27-hole championship golf, 24-hour guard gates, and proximity to the Strip (15 minutes) in a way few other communities match. Its established club programming, architectural diversity (from custom estates to lock-and-leave villas), and strong resale value make it appealing to both full-time residents and seasonal owners. The community\'s reputation for discretion and quality has remained consistent for decades.',
  },
  {
    question: 'Should I consider multiple luxury communities before deciding?',
    answer:
      'Absolutely. Dr. Duffy coordinates comparison tours across Spanish Trail, The Ridges, Red Rock Country Club, The Summit Club, and Spanish Hills—all on the same day when possible. This allows you to experience differences in architecture, club culture, HOA management, and lifestyle firsthand. Each community has distinct strengths, and understanding these nuances helps ensure you choose the best fit for your goals.',
  },
  {
    question: 'How do club memberships differ between Spanish Trail and other luxury communities?',
    answer:
      'Spanish Trail offers several membership categories (for example Full Golf, Young Executive, Lifestyle, and Corporate—confirm current names and availability with the club). Red Rock Country Club has two Arnold Palmer courses with family-focused programming. The Ridges ties to Bear’s Best. The Summit Club is a separate ultra-luxury private experience. Dr. Duffy arranges meetings with membership directors wherever you tour so you can review categories, initiation and dues, waitlists, and reciprocity from official materials—not comparisons based on rumor.',
  },
  {
    question: 'What factors should I prioritize when comparing luxury neighborhoods?',
    answer:
      'Consider: 1) Lifestyle match (golf-centric, family-focused, lock-and-leave), 2) Commute times to work, entertainment, and services, 3) Resale value and market stability, 4) Club membership costs and availability, 5) Architectural style and renovation flexibility, 6) HOA fees and services provided, 7) Community maturity and established amenities. Dr. Duffy helps clients evaluate these factors systematically during consultation sessions.',
  },
]

const luxuryNeighborhoodsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: luxuryNeighborhoodsFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export const metadata: Metadata = {
  title: 'Las Vegas Luxury Neighborhoods | Spanish Trail vs Summerlin Golf & Spanish Hills | Dr. Jan Duffy',
  description:
    'Compare Spanish Trail with Summerlin golf communities, Spanish Hills, The Ridges, Red Rock Country Club, and The Summit Club—accurate geography and club context with Dr. Jan Duffy.',
  alternates: {
    canonical: getCanonicalUrl('/las-vegas-luxury-neighborhoods'),
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
    title: 'Compare Las Vegas Luxury Neighborhoods',
    description:
      'Evaluate Spanish Trail alongside The Ridges, Red Rock Country Club, and more. Guidance by Dr. Jan Duffy, Berkshire Hathaway HomeServices.',
    images: [
      createOgImageUrl({
        title: 'Las Vegas Luxury Comparisons',
        subtitle: 'Spanish Trail vs. top west valley communities',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Luxury Neighborhood Comparisons | Dr. Jan Duffy',
    description:
      'See how Spanish Trail stacks up against The Ridges, Red Rock CC, Spanish Hills, and The Summit Club.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail vs. Las Vegas Luxury',
        subtitle: 'Concierge comparisons for discerning buyers',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function LuxuryNeighborhoodComparisonsPage() {
  return (
    <SiteShell>
      <header className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="neighborhoods-hero">
      <SectionBanner headingId="neighborhoods-hero" />
        <div className="mx-auto max-w-4xl space-y-5 px-6 text-center">
          <h1 id="neighborhoods-hero" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
            Spanish Trail Homes vs Other Las Vegas Neighborhoods
          </h1>
          <p className="text-base leading-relaxed text-[#f8f5ef]/85">
            Evaluate Spanish Trail—southwest Las Vegas, not inside Summerlin—next to Summerlin country-club communities, Spanish Hills, The Ridges, and Red Rock Country Club. Dr. Jan Duffy clarifies geography, golf access, and HOA differences, then connects you to{' '}
            <Link href="/spanish-trail-homes-for-sale-las-vegas" className="font-medium text-[#f8f5ef] underline-offset-4 hover:underline">
              Spanish Trail homes for sale
            </Link>{' '}
            when you are ready to focus inside the 89113 gates.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              className="rounded-full bg-white px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
            >
              <Link href="#las-vegas-luxury-comparison-grid">View comparison grid</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
            >
              <Link href="/contact">Schedule a consult</Link>
            </Button>
          </div>
        </div>
        <HeroSearchWidget theme="dark" />
      </header>
      <RealScoutSection id="bhhs-listings" />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Buyers', href: '/buyers' },
              { label: 'Las Vegas Luxury Neighborhoods' },
            ]}
          />
        </div>
      </div>
      <ComparisonGridSection />
      <RelocationChecklistSection />
      <SpanishTrailPositioningSection />
      <LuxuryNeighborhoodsFAQSection />
      <LuxuryCTASection />
      <Script id="luxury-neighborhoods-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(luxuryNeighborhoodsFaqSchema)}
      </Script>
    </SiteShell>
  )
}

function ComparisonGridSection() {
  return (
    <section
      id="las-vegas-luxury-comparison-grid"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="comparison-grid-heading"
    >
      <SectionBanner headingId="comparison-grid-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">West Valley Highlights</p>
          <h2
            id="comparison-grid-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            How top Las Vegas enclaves stack up
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Start with the essentials—architecture, amenities, and buyer demand—when comparing Spanish Trail with
            neighboring guard-gated communities.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {comparisonHighlights.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-border/40 bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">{item.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#372a20]/85">{item.insight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RelocationChecklistSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="relocation-checklist-heading">
      <SectionBanner headingId="relocation-checklist-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Relocation Checklist</p>
            <h2
              id="relocation-checklist-heading"
              className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl"
            >
              What we evaluate for every client
            </h2>
            <p className="text-base leading-relaxed text-[#372a20]/85">
              Use this framework when narrowing down the Las Vegas luxury community that aligns with your lifestyle and
              investment goals. Dr. Duffy covers each item during strategy sessions.
            </p>
          </div>
          <div className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
            <ul className="space-y-3 text-sm leading-relaxed text-[#372a20]/85">
              {relocationChecklist.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function SpanishTrailPositioningSection() {
  return (
    <section className="border-y border-border/40 bg-white" aria-labelledby="spanish-trail-positioning-heading">
      <SectionBanner headingId="spanish-trail-positioning-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Why Spanish Trail</p>
          <h2
            id="spanish-trail-positioning-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Positioning Spanish Trail among its peers
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail continues to resonate with buyers who want lush landscaping, triple-course golf, and 24-hour
            guard gates minutes from the Strip. Mature trees, established amenities, and refreshed club programming provide
            a timeless alternative to newer master plans.
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
        <div className="rounded-3xl border border-border/40 bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
          <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">Next steps</p>
          <p className="mt-3 text-sm leading-relaxed text-[#372a20]/85">
            Dr. Duffy can align West Valley showings across Spanish Trail, The Ridges, Red Rock Country Club, and Summerlin-area clubs on the same day—complete with membership briefings and gate coordination.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
            >
              <Link href="/contact">Plan a comparison tour</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
            >
              <Link href="/spanish-trail-homes-for-sale-las-vegas">Spanish Trail listings hub</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function LuxuryNeighborhoodsFAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="luxury-neighborhoods-faq-heading">
      <SectionBanner headingId="luxury-neighborhoods-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Luxury Neighborhood Comparison FAQ</p>
          <h2 id="luxury-neighborhoods-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Frequently asked questions about comparing Las Vegas luxury communities
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Understand how Spanish Trail compares to other premier Las Vegas neighborhoods and make informed decisions about your luxury community choice.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {luxuryNeighborhoodsFaq.map((item) => (
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

function LuxuryCTASection() {
  return (
    <section className="bg-[#0f2b1e] py-20 text-[#f8f5ef] relative isolate overflow-hidden" aria-labelledby="luxury-cta-heading">
      <SectionBanner headingId="luxury-cta-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 id="luxury-cta-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Let's match you with the right community
        </h2>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Share your desired move timeline, household needs, and amenity wish list. We'll craft an itinerary covering
          Spanish Trail and the Las Vegas neighborhoods that suit you best.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href="/contact">Start your comparison</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/buyers">Explore Spanish Trail buyers guide</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

