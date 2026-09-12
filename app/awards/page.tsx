import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Breadcrumbs } from '@/components/breadcrumbs'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { HeroBackground } from '@/components/hero-background'
import { SectionBanner, CardVisual } from '@/components/heading-media'
import { getSiteImageUrl } from '@/lib/cloudflare-images'


const pageUrl = 'https://www.spanishtrailhomes.com/awards'
const awardsPageDescription =
  'See recent awards, professional memberships, and press highlights that validate Dr. Jan Duffy’s Spanish Trail real estate leadership.'

const recognitionTimeline = [
  {
    year: '2025',
    title: "Berkshire Hathaway HomeServices Luxury Golf Homes",
    description:
      'Top two percent of the network for closed volume, reflecting repeat and referral sellers who trusted Dr. Duffy with Spanish Trail listings.',
  },
  {
    year: '2024',
    title: 'Las Vegas REALTORS® Top 25 Luxury Producer',
    description:
      'Recognized for multi-million dollar transactions concentrated in guard-gated golf communities across 89113 and Summerlin South.',
  },
  {
    year: '2023',
    title: 'Spanish Trail Market Expert · Berkshire Hathaway HomeServices Top Agent in Las Vegas',
    description:
      'Recognized by RealScout as the Spanish Trail Market Expert and honored by Berkshire Hathaway HomeServices as a Top Agent in Las Vegas for luxury volume and client satisfaction.',
  },
  {
    year: '2022',
    title: 'Berkshire Hathaway HomeServices Leading Edge Society',
    description:
      'Honored for exceeding production benchmarks while maintaining five-star client service scores in post-closing surveys.',
  },
]

const memberships = [
  {
    label: 'Berkshire Hathaway HomeServices Nevada Properties Luxury Division',
    detail: 'Internal advisory council contributing guard-gated research and pricing intelligence for Las Vegas west valley estates.',
  },
  {
    label: 'Las Vegas REALTORS® (LVR) | MLS Member',
    detail:
      'Active listing specialist for Spanish Trail, Queensridge, and MacDonald Highlands. Provides broker-to-broker intelligence to relocating buyers.',
  },
  {
    label: 'Institute for Luxury Home Marketing | Member',
    detail:
      'Pursues CLHMS marketing standards to elevate property positioning, photography, and private showing protocols.',
  },
  {
    label: 'National Association of REALTORS®',
    detail:
      'Committed to NAR Code of Ethics, fair housing compliance, and fiduciary standards in every Spanish Trail representation.',
  },
]

const pressHighlights = [
  {
    outlet: 'Las Vegas Review-Journal',
    headline: 'Guard-Gated Specialists Share Tips for 2025 Sellers',
    summary:
      'Quoted on staging, contract negotiation, and aligning golf membership transfers with closing timelines for Spanish Trail residents.',
  },
  {
    outlet: 'Vegas PBS Real Estate Outlook',
    headline: 'Expert Panel: West Valley Luxury Trends',
    summary:
      'Discussed inventory velocity, lock-and-leave demand, and buyer migration from California coastal markets into Spanish Trail.',
  },
  {
    outlet: 'BHHS Nevada Market Pulse',
    headline: 'Spanish Trail Data Brief',
    summary:
      'Authored monthly internal brief analyzing absorption rates, club enrollment shifts, and RealScout demand signals.',
  },
]

const clientOutcomes = [
  {
    stat: '26 Spanish Trail transactions managed since 2020',
    context:
      'Includes single-family estates, townhomes, and private resale of premium golf frontage lots with club membership considerations.',
  },
  {
    stat: 'Average 99.6% list-to-contract for listings above $1.5M',
    context:
      'Pricing strategies leverage proprietary absorption modeling, cross-comp community analysis, and concierge-level presentation.',
  },
  {
    stat: 'Median 12 days from first tour to executed offer for inbound buyers',
    context:
      'Tour itineraries are pre-vetted, with guard gate access coordinated and financing structures aligned before property selection.',
  },
]

const awardsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Honors and Recognition',
  itemListElement: recognitionTimeline.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: `${item.year} ${item.title}`,
    description: item.description,
    url: `${pageUrl}#recognition-timeline`,
  })),
}

const professionalProfileSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Dr. Jan Duffy',
  url: pageUrl,
  areaServed: 'Spanish Trail, Las Vegas, Nevada',
  brand: {
    '@type': 'Brand',
    name: 'Berkshire Hathaway HomeServices Nevada Properties',
  },
  award: recognitionTimeline.map((item) => `${item.year} ${item.title}`),
  memberOf: memberships.map((item) => item.label),
  makesOffer: 'Residential real estate brokerage services, listing representation, and buyer advisory in Spanish Trail.',
  telephone: '+1-702-766-3299',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89113',
    addressCountry: 'US',
  },
  image: 'https://www.spanishtrailhomes.com/images/janet-duffy.jpg',
}

const awardsWebPageSchema = createWebPageSchema({
  name: 'Awards & Recognition | Dr. Jan Duffy',
  description: awardsPageDescription,
  path: '/awards',
  type: 'AboutPage',
  extra: {
    about: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      jobTitle: 'REALTOR®',
      worksFor: {
        '@type': 'Organization',
        name: 'Berkshire Hathaway HomeServices Nevada Properties',
      },
    },
  },
})

export const metadata: Metadata = {
  title: 'Awards & Recognition | Dr. Jan Duffy',
  description: awardsPageDescription,
  alternates: {
    canonical: getCanonicalUrl('/awards'),
  },
  openGraph: {
    url: pageUrl,
    title: 'Dr. Jan Duffy | Awards & Recognition',
    description:
      'Review Berkshire Hathaway honors, RealScout achievements, and professional memberships that support Spanish Trail clients.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Awards & Recognition',
        subtitle: 'Dr. Jan Duffy • Berkshire Hathaway HomeServices',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Jan Duffy | Awards & Recognition',
    description:
      'Spanish Trail-focused REALTOR® with Berkshire Hathaway honors, luxury marketing credentials, and media features.',
    images: [
      createOgImageUrl({
        title: 'Awards & Recognition',
        subtitle: 'Spanish Trail leadership by Dr. Jan Duffy',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function AwardsPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Awards & Recognition' },
            ]}
          />
        </div>
      </div>
      <RecognitionTimelineSection />
      <ProfessionalMembershipsSection />
      <PressHighlightsSection />
      <ClientImpactSection />
      <AdvisoryCTASection />
      <Script id="awards-recognition-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(awardsSchema)}
      </Script>
      <Script id="janet-duffy-profile-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(professionalProfileSchema)}
      </Script>
      <Script id="awards-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(awardsWebPageSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <header className="relative isolate overflow-hidden text-[#f8f5ef]" aria-labelledby="awards-hero-heading">
      <HeroBackground
        src={getSiteImageUrl('h2-awards-study')}
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/60 to-[#0f2b1e]/85"
        sizes="(max-width: 1024px) 100vw, 1280px"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-[#0f2b1e]/90" />
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24 text-center sm:py-28">
        <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/70">Credentials That Safeguard Your Sale</p>
        <h1 id="awards-hero-heading" className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
          Recognition earned in Spanish Trail’s guard-gated market
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85 sm:text-lg">
          Dr. Jan Duffy blends academic rigor, Berkshire Hathaway HomeServices resources, and hyper-local intelligence to
          guide Spanish Trail buyers and sellers. Explore credentials that protect your equity and negotiation outcome.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#f8f5ef] px-7 py-3 text-xs uppercase tracking-[0.35em] text-[#0f2b1e] hover:bg-[#f6ead7]"
          >
            <Link href="/contact">Plan a Strategy Call</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.35em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/spanish-trail-insights">See Market Advisory</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function RecognitionTimelineSection() {
  return (
    <section id="recognition-timeline" className="bg-white py-20 sm:py-24" aria-labelledby="recognition-heading">
      <SectionBanner headingId="recognition-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Award History</p>
          <h2 id="recognition-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Consistent performance at Berkshire Hathaway and RealScout
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail clients choose Dr. Duffy for her ability to blend institutional research with on-site diligence. Each
            recognition below reflects measurable outcomes—list-to-contract strength, buyer tour conversion, and referral-driven
            growth.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {recognitionTimeline.map((item) => (
            <article
              key={`${item.year}-${item.title}`}
              className="flex h-full flex-col justify-between rounded-3xl border border-border/40 bg-[#f8f2e7] p-6 shadow-lg shadow-primary/10"
            >
              <CardVisual seed={`${item.year}-${item.title}`} />
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-secondary/80">{item.year}</p>
                <h3 className="font-heading text-2xl text-[#1f2a24]">{item.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#372a20]/85">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProfessionalMembershipsSection() {
  return (
    <section
      id="professional-memberships"
      className="bg-[#0f2b1e] py-20 text-[#f8f5ef] sm:py-24"
      aria-labelledby="memberships-heading"
    >
      <SectionBanner headingId="memberships-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/70">Memberships & Designations</p>
          <h2 id="memberships-heading" className="font-heading text-3xl text-white sm:text-4xl">
            Trusted institutions backing Spanish Trail transactions
          </h2>
          <p className="text-base leading-relaxed text-[#f8f5ef]/85">
            Luxury advisory credentials ensure Spanish Trail clients receive white-glove experiences from listing preparation to
            post-closing concierge support.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {memberships.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur"
            >
              <CardVisual seed={String(item.label)} />
              <h3 className="font-heading text-xl text-white">{item.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#f8f5ef]/80">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PressHighlightsSection() {
  return (
    <section id="press-highlights" className="bg-white py-20 sm:py-24" aria-labelledby="press-heading">
      <SectionBanner headingId="press-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Press & Thought Leadership</p>
            <h2 id="press-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
              Media sources featuring Spanish Trail expertise
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              National outlets and regional broadcasts rely on Dr. Duffy for data-backed context on Las Vegas luxury trends, club
              membership shifts, and buyer behavior.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
          >
            <Link href="/spanish-trail-insights">Read advisory articles</Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pressHighlights.map((item) => (
            <article
              key={`${item.outlet}-${item.headline}`}
              className="flex h-full flex-col justify-between rounded-3xl border border-border/40 bg-[#f8f2e7] p-6 shadow-lg shadow-primary/10"
            >
              <CardVisual seed={`${item.outlet}-${item.headline}`} />
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-secondary/70">{item.outlet}</p>
                <h3 className="font-heading text-xl text-[#1f2a24]">{item.headline}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#372a20]/85">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClientImpactSection() {
  return (
    <section id="client-impact" className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="impact-heading">
      <SectionBanner headingId="impact-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Client Outcomes</p>
            <h2 id="impact-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
              Awards mirror measurable Spanish Trail results
            </h2>
            <p className="text-base leading-relaxed text-[#372a20]/85">
              Every accolade is anchored to client outcomes—contract timelines, negotiation strength, and concierge-level
              service that continues long after closing.
            </p>
          </div>
          <Button
            asChild
            className="rounded-full bg-[#0f2b1e] px-6 py-2 text-xs uppercase tracking-[0.3em] text-white hover:bg-[#123828]"
          >
            <Link href="/contact">Request Spanish Trail strategy</Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {clientOutcomes.map((item) => (
            <article
              key={item.stat}
              className="flex h-full flex-col justify-between rounded-3xl border border-[#cdbda5] bg-white p-6 shadow-lg shadow-primary/10"
            >
              <CardVisual seed={String(item.stat)} />
              <h3 className="font-heading text-2xl text-[#1f2a24]">{item.stat}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.context}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AdvisoryCTASection() {
  return (
    <section className="bg-white py-20 sm:py-24 relative isolate overflow-hidden" aria-labelledby="advisory-cta-heading">
      <SectionBanner headingId="advisory-cta-heading" />
      <div className="mx-auto max-w-4xl rounded-3xl border border-border/40 bg-[#0f2b1e] px-8 py-16 text-center text-[#f8f5ef] shadow-xl shadow-primary/20">
        <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/70">Work With Dr. Jan Duffy</p>
        <h2 id="advisory-cta-heading" className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">
          Align awards-level expertise with your Spanish Trail move
        </h2>
        <p className="mt-6 text-base leading-relaxed text-[#f8f5ef]/85">
          Whether you are evaluating a discreet listing or planning a relocation to the Las Vegas west valley, leverage a REALTOR®
          recognized for Spanish Trail mastery, negotiation acuity, and RealScout analytics.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#f8f5ef] px-7 py-3 text-xs uppercase tracking-[0.35em] text-[#0f2b1e] hover:bg-[#f6ead7]"
          >
            <Link href="/contact">Schedule a private consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.35em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/buyers">Plan your buyer roadmap</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

