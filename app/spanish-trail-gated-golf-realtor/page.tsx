import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { createOgImageUrl, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner, CardVisual } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-gated-golf-realtor'

export const metadata: Metadata = {
  title: 'Gated Golf Community Spanish Trail Las Vegas Realtor | Dr. Jan Duffy',
  description:
    'Partner with Dr. Jan Duffy, Berkshire Hathaway luxury advisor and Spanish Trail gated golf community expert. Concierge buying, market intel, and club integration.',
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-gated-golf-realtor'),
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
    title: 'Spanish Trail Gated Golf Community Realtor',
    description:
      'Discover how Dr. Jan Duffy helps buyers and sellers leverage Spanish Trail’s guard gates, golf amenities, and luxury positioning.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Gated Golf Realtor',
        subtitle: 'Luxury representation by Dr. Jan Duffy',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Gated Golf Realtor | Dr. Jan Duffy',
    description:
      'Concierge representation for Spanish Trail gated golf homes—timing, negotiation, and membership access guided by Dr. Jan Duffy.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Luxury Realtor',
        subtitle: 'Guard-gated golf expertise & strategy',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const faqContent = [
  {
    question: 'Why work with a dedicated Spanish Trail realtor?',
    answer:
      'Spanish Trail’s 11 enclaves each carry unique HOA guidelines, guard protocols, and pricing trends. I live and breathe the data—tracking showings, concessions, and off-market whispers daily. That insight allows clients to move quickly on the right home, negotiate effectively, and connect with club leadership seamlessly.',
  },
  {
    question: 'Do you assist with membership introductions and vetting?',
    answer:
      'Yes. I coordinate introductions with the club’s membership director, provide initiation fee breakdowns, and outline each category—Full Golf, Young Executive, Lifestyle, Corporate. I also help clients evaluate dues in relation to homeownership costs so the full investment is clear.',
  },
  {
    question: 'How do you support relocation or out-of-state buyers?',
    answer:
      'Out-of-state clients receive virtual property tours, RealScout alerts tailored to guarded entrances, and concierge travel planning for exploratory visits. I manage inspections, contractor bids, and escrow communication remotely so you can purchase confidently even if you are not in Las Vegas full-time.',
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

export default function SpanishTrailGatedGolfRealtorPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-[#f8f2e7]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Buyers', href: '/buyers' },
              { label: 'Gated Golf Realtor' },
            ]}
          />
        </div>
      </div>
      <ValueSection />
      <RealScoutSection
        id="gated-golf-realtor-listings"
        eyebrow="Live Inventory"
        title="Spanish Trail homes I’m tracking for gated golf clients"
        description="Curated homes with guard-gated security, golf frontage, and upgraded amenities—updated in real time."
        priceMin="700000"
        propertyTypes=",SFR,CONDO"
      />
      <ExpertiseSection />
      <DataSection />
      <ConciergeSection />
      <SellerSection />
      <TestimonialsSection />
      <FAQSection />
      <ConnectSection />
      <Script id="gated-golf-realtor-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="gated-golf-hero-heading">
      <SectionBanner headingId="gated-golf-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="gated-golf-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Gated Golf Community Spanish Trail Las Vegas Realtor
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          As a Berkshire Hathaway luxury advisor and longtime Las Vegas resident, I guide clients through every nuance of Spanish Trail’s guard-gated lifestyle—from daily market movements to membership planning. My approach blends data, discretion, and concierge service so your transition into the community feels effortless and strategic.
        </p>
        <p className="text-base leading-relaxed text-[#f8f5ef]/80">
          This page is for buyers and sellers who want a{' '}
          <Link href="/spanish-trail-guard-gated-golf-homes" className="underline-offset-4 hover:underline">
            Spanish Trail guard-gated golf home
          </Link>{' '}
          strategy—not a valley-wide agent learning the community on your first offer. I track ARC timelines, secondary-gate protocols, and enclave-level comps so negotiations stay grounded in how Spanish Trail actually trades.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Book a consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#gated-golf-realtor-listings">Review listings</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function ValueSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="value-heading">
      <SectionBanner headingId="value-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="value-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          What sets my Spanish Trail representation apart
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Guard-gated golf communities require a different rhythm. I merge hyperlocal familiarity with Berkshire Hathaway resources to deliver clarity on pricing, security, lifestyle, and investment value in a single experience.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Daily market watch',
              detail:
                'I log every showing, price adjustment, and signed contract across the Estates, Villas, Links, Springs, and more. Clients receive actionable summaries, not generic comps.',
            },
            {
              title: 'Club & community access',
              detail:
                'Relationships with golf pros, membership directors, and HOA leaders ensure seamless introductions, faster approvals, and insights on upcoming improvements or capital plans.',
            },
            {
              title: 'Confidentiality & service',
              detail:
                'Executives, physicians, and entertainers trust me to coordinate private tours, NDAs, vendor entry, and move logistics while protecting their schedule and privacy.',
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

function ExpertiseSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="expertise-heading">
      <SectionBanner headingId="expertise-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="expertise-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Deep expertise across every Spanish Trail enclave
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            From double-gated Estates properties to lock-and-leave villas, I evaluate floor plans, HOA nuances, security protocols, and renovation opportunities so you can decide where your lifestyle fits best.
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
            <p>
              • <strong>Estates & Estates West:</strong> Large-lot privacy, casitas, and collector garages. Perfect for multi-gen households or executives hosting large events.
            </p>
            <p>
              • <strong>Villas & Links:</strong> Golf-adjacent villas with concierge-level HOA support. Ideal for seasonal owners who prioritize course access and low maintenance.
            </p>
            <p>
              • <strong>Springs, Gardens, Courtyards:</strong> Tree-lined streets near pocket parks, loved by locals wanting community spirit and fast access to Spring Valley amenities.
            </p>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">
            Questions I cover in every consult
          </h3>
          <ul className="space-y-3">
            <li>• What security protocols matter most to you?</li>
            <li>• How involved do you want to be in club life?</li>
            <li>• Is turnkey living or renovation potential a priority?</li>
            <li>• What commute, school, or travel requirements must the home support?</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function DataSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="data-heading">
      <SectionBanner headingId="data-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="data-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Real-time data, not outdated reports
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Market decisions are only as strong as the data backing them. I refresh Spanish Trail metrics every Friday and send custom dashboards to my clients.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { label: 'Median price', value: '$755,000' },
            { label: 'Luxury median (>$1.5M)', value: '$1.72M' },
            { label: 'Active inventory', value: '68 homes' },
            { label: 'Average DOM', value: '27 days' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
              <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">{stat.label}</p>
              <p className="mt-3 font-[var(--font-playfair)] text-2xl text-[#0f2b1e]">{stat.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#372a20]/80">
          Data Source: Greater Las Vegas MLS, Berkshire Hathaway analytics, and my contract log. Request my weekly gated golf market brief for deeper absorption rates and negotiation trends.
        </p>
      </div>
    </section>
  )
}

function ConciergeSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="concierge-heading">
      <SectionBanner headingId="concierge-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="concierge-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Concierge services tailored to gated golf buyers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          From the first call to post-closing club orientation, my team manages logistics so you can focus on lifestyle and investment outcomes.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Logistics',
              detail:
                'Private tour scheduling, guard gate coordination, and chauffeured transportation for buyers flying in for 24-hour decision windows.',
            },
            {
              title: 'Due diligence',
              detail:
                'Contractor walk-throughs, HOA document review, membership fee verification, and insurance recommendations tailored to Spanish Trail.',
            },
            {
              title: 'Lifestyle onboarding',
              detail:
                'Introductions to golf pros, racquet club directors, and social committees plus curated local dining and wellness recommendations.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
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

function SellerSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="seller-heading">
      <SectionBanner headingId="seller-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="seller-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Representing Spanish Trail sellers with precision
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          If you’re selling, you need a marketing plan that highlights guard-gated security, golf lifestyle, and renovation investments. I craft strategies that appeal to domestic and international buyers seeking Las Vegas luxury.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Story-driven marketing',
              detail:
                'Cinematic videography, twilight photography, and copywriting articulating membership benefits, commute times, and bespoke finishes.',
            },
            {
              title: 'Network amplification',
              detail:
                'Exclusive Berkshire Hathaway distribution, targeted digital campaigns, and direct outreach to my vetted buyer database and relocation partners.',
            },
            {
              title: 'Negotiation strategy',
              detail:
                'I leverage week-by-week data to defend pricing, structure rent-backs or membership transfers, and ensure confidentiality when needed.',
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

function TestimonialsSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="gated-golf-testimonials-heading">
      <SectionBanner headingId="gated-golf-testimonials-heading" />
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <h2 id="gated-golf-testimonials-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Clients on partnering with Dr. Jan
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[{
            quote:
              'Jan handled our move from Chicago with RealScout alerts, back-to-back tours, and a vetted contractor team ready to start immediately. We closed on a villa and joined the club two weeks later.',
            author: 'K. & D. Richards — Villa buyers',
          },
          {
            quote:
              'As a physician with limited time, I needed someone who knew Spanish Trail and could negotiate aggressively. Jan secured repairs, membership credits, and a flexible closing around my schedule.',
            author: 'Dr. L. Nguyen — Springs homeowner',
          }].map((item) => (
            <blockquote key={item.author} className="space-y-4 rounded-3xl border border-[#1f4a35]/60 bg-[#143927] p-6 text-sm leading-relaxed text-[#f8f5ef]/85">
              <p>“{item.quote}”</p>
              <cite className="block text-xs uppercase tracking-[0.35em] text-[#c6aa7a]">{item.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="gated-golf-faq-heading">
      <SectionBanner headingId="gated-golf-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="gated-golf-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Spanish Trail realtor FAQs
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

function ConnectSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="gated-golf-connect-heading">
      <SectionBanner headingId="gated-golf-connect-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 id="gated-golf-connect-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Let’s plan your Spanish Trail move
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Call or text <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link>, or email <Link href="mailto:DrDuffySells@SpanishTrailHomes.com" className="underline-offset-4 hover:underline">DrDuffySells@SpanishTrailHomes.com</Link>. I’ll customize your search, deliver vetted listings, and coordinate introductions behind the guard gates.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Connect with Dr. Jan Duffy</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="#gated-golf-realtor-listings">View homes</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
