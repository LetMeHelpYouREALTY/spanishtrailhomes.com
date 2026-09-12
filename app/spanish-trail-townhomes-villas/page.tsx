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


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-townhomes-villas'

export const metadata: Metadata = {
  title: 'Spanish Trail Townhomes & Villas for Sale | Dr. Jan Duffy',
  description:
    'Browse Spanish Trail townhomes and villas with Dr. Jan Duffy. Lock-and-leave luxury, HOA insights, curated amenities, and concierge buyer representation.',
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-townhomes-villas'),
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
    title: 'Spanish Trail Townhomes & Villas for Sale',
    description:
      'Explore guard-gated Spanish Trail villas, Links residences, and lock-and-leave townhomes with bespoke services from Dr. Jan Duffy.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Villas & Townhomes',
        subtitle: 'Lock-and-leave living with concierge support',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Villas & Townhomes | Dr. Jan Duffy',
    description:
      'Discover the Villas, Links, Courtyards, and Springs enclaves for turnkey Spanish Trail living minutes from the Strip.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Townhomes',
        subtitle: 'HOA insights & curated buyer services',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const faqContent = [
  {
    question: 'What are HOA dues for Spanish Trail villas and townhomes?',
    answer:
      'Monthly dues generally range from $485 to $720 depending on the enclave. The Villas cover exterior maintenance, roof reserves, master insurance, and landscape, while Links residences add golf-cart parking pads and private road upkeep. I provide an updated comparison sheet with reserve balance summaries before you tour.',
  },
  {
    question: 'Can I short-term rent a Spanish Trail townhome?',
    answer:
      'Short-term rentals under 31 days are prohibited inside Spanish Trail. Lease terms typically require 12-month minimums, and tenants must be approved by the association. Investors focused on long-term tenants or corporate leases often find strong demand thanks to proximity to Spring Valley hospitals and the Strip.',
  },
  {
    question: 'How fast do villas sell in today’s market?',
    answer:
      'Renovated villas priced between $835K and $1.1M averaged 19 days on market in the last quarter, with several attracting multiple offers when they included upgraded kitchens or golf views. Homes needing refreshes spend closer to 36 days but still secure strong pricing with strategic staging. I monitor every pending sale so you know where to negotiate.',
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

export default function SpanishTrailTownhomesVillasPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Buyers', href: '/buyers' },
              { label: 'Spanish Trail Townhomes & Villas' },
            ]}
          />
        </div>
      </div>
      <LifestyleSection />
      <RealScoutSection
        id="townhome-villa-listings"
        eyebrow="Current Listings"
        title="Spanish Trail villas and townhomes ready for you"
        description="Filter by price, square footage, and renovation level for lock-and-leave homes within the guard gates."
        priceMin="600000"
        propertyTypes=",CONDO,TOWNHOUSE"
      />
      <EnclaveComparisonSection />
      <HOASection />
      <DesignSection />
      <BuyerJourneySection />
      <ResidentStoriesSection />
      <FAQSection />
      <CTASection />
      <Script id="townhomes-villas-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="townhome-hero-heading">
      <SectionBanner headingId="townhome-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="townhome-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Townhomes & Villas for Sale
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Spanish Trail’s villas and townhomes deliver resort-level amenities, full-time security, and the convenience of lock-and-leave ownership minutes from the Las Vegas Strip. Whether you prefer a golf-view Links residence or a courtyard villa with a plunge pool, I curate options that match your lifestyle, HOA expectations, and desired maintenance profile.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Schedule a villa consult</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#townhome-villa-listings">Browse villas</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function LifestyleSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="townhome-lifestyle-heading">
      <SectionBanner headingId="townhome-lifestyle-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="townhome-lifestyle-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Lock-and-leave living in a 27-hole private club community
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Spanish Trail's townhomes tend to be clustered around lakes on the golf course, creating peaceful, parklike settings unlike anything else in Las Vegas. It isn't unusual to see residents feeding the ducks and geese that share the property—a serene atmosphere that's only 15 minutes from the Strip.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Villa and townhome residents benefit from the same 24/7 guard service, golf access, and wellness programming Spanish Trail is known for—without the upkeep of a larger estate. Many owners split time between Las Vegas, Southern California, and coastal escapes, trusting the HOA and security team to watch over their homes year-round.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Maintenance handled',
              detail:
                'HOAs manage exterior paint, roofing, landscaping, irrigation, and in some enclaves, pest control. Lock your door and catch a flight knowing the community keeps curb appeal pristine.',
            },
            {
              title: 'Club lifestyle on demand',
              detail:
                'Residents cart to sunrise tee times, mid-day fitness classes, and al fresco dinners overlooking the Lakes course. Concierge staff assists with spa bookings, wine tastings, and holiday events.',
            },
            {
              title: 'Privacy with connection',
              detail:
                'Tree-lined streets, pocket parks, and guarded cul-de-sacs provide serenity, while social committees host mixers, pickleball leagues, and wine society gatherings for neighbors to connect.',
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

function EnclaveComparisonSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="enclave-comparison-heading">
      <SectionBanner headingId="enclave-comparison-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="enclave-comparison-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Townhome and villa enclaves at a glance
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Each enclave inside Spanish Trail was designed with a different homeowner in mind. I help you decide which matches your priorities—be it golf proximity, water features, or ultra-low maintenance.
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
            <p>
              • <strong>The Villas:</strong> Two-story Mediterranean residences with vaulted ceilings, private patios, and optional plunge pools. Ideal for full-time residents wanting generous interiors without yard work.
            </p>
            <p>
              • <strong>The Links:</strong> Golf-front clusters flanking fairways with enlarged decks for entertaining, plus quick cart access to the clubhouse and practice facilities.
            </p>
            <p>
              • <strong>Cottages & Courtyards:</strong> Single-story footprints with enclosed courtyards, perfect for buyers seeking privacy, pets, or morning coffee in the fresh air.
            </p>
            <p>
              • <strong>Springs townhomes:</strong> Tree-shaded streets close to community pools and parks—popular among medical professionals wanting rapid hospital commutes.
            </p>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">
            Decision guide
          </h3>
          <ul className="space-y-3">
            <li>• Evaluate pet policies and courtyard sizes.</li>
            <li>• Confirm guest parking and garage storage needs.</li>
            <li>• Compare HOA reserves, assessments, and insurance coverage.</li>
            <li>• Consider walkability to clubhouse versus serenity within a cul-de-sac.</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function HOASection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="hoa-heading">
      <SectionBanner headingId="hoa-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="hoa-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Understanding HOA coverage and financial health
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          HOA transparency matters as much as floor plans. Before you submit an offer, I compile budgets, reserve studies, insurance policies, and meeting minutes so there are no surprises after you close.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Budget clarity',
              detail:
                'Detailed ledgers reveal how dues fund landscaping, roofing programs, gate enhancements, and clubhouse partnerships. I flag communities with strong reserves and minimal special assessment history.',
            },
            {
              title: 'Insurance + maintenance',
              detail:
                'Villa associations carry master insurance and exterior maintenance, lowering your personal policy. We review coverage boundaries so you know where HO-6 policies pick up.',
            },
            {
              title: 'Lifestyle perks',
              detail:
                'HOA dues often bundle spa access, seasonal pressure washing, or landscape refreshes. We identify cost-saving amenities that align with your lifestyle to maximize value.',
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

function DesignSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="design-heading">
      <SectionBanner headingId="design-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="design-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Interior upgrades buyers crave in 2026
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Villas and townhomes are evolving with contemporary finishes that rival custom estates—think chef kitchens, wellness suites, and tech-forward comforts.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'Sought-after features',
              points: [
                'Waterfall islands with hidden storage and professional appliances',
                'Primary suites with boutique closets, steam showers, and heated floors',
                'Wide-plank European oak flooring paired with acoustic treatments',
                'Smart-home systems controlling climate, lighting, and security remotely',
              ],
            },
            {
              title: 'Outdoor moments',
              points: [
                'Courtyard fireplaces and misting systems for al fresco dining',
                'Artificial turf putting greens for quick short-game sessions',
                'Custom spa installations with privacy foliage and ambient lighting',
                'Retractable shade structures to cool patios during summer afternoons',
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
          I introduce you to vetted contractors and designers who routinely work in the Villas and Links enclaves, ensuring HOA approvals move quickly and craftsmanship meets Berkshire Hathaway standards.
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
          Step-by-step concierge path to your Spanish Trail villa
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Villa purchases require a tailored approach: verifying HOA budgets, comparing renovation scope, and coordinating membership introductions. Here’s how we navigate the process together.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: '1. Strategy consult',
              detail:
                'We align on preferred enclaves, square footage, renovation appetite, and club interests. You receive a briefing packet with sales comps, HOA summaries, and upcoming listings.',
            },
            {
              title: '2. Immersive tours',
              detail:
                'I coordinate guard clearance, schedule morning and sunset showings, and incorporate vendor walk-throughs to evaluate upgrades before writing an offer.',
            },
            {
              title: '3. Offer mastery',
              detail:
                'We leverage lender introductions, appraisal-gap strategies, and flexible closing timelines. My relationships with listing agents help your offer rise to the top even in multiple-offer scenarios.',
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
          After closing, I coordinate club onboarding, utility setup, and property checks for seasonal owners. Many clients enroll in quarterly maintenance walk-throughs to keep the home, and their investment, in pristine condition.
        </p>
      </div>
    </section>
  )
}

function ResidentStoriesSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="resident-stories-heading">
      <SectionBanner headingId="resident-stories-heading" />
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <h2 id="resident-stories-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Villa buyers share their Spanish Trail experience
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[{
            quote:
              'Jan had HOA budgets ready before our first tour and introduced us to neighbors who summer in California like we do. We closed in 24 days and felt confident leaving for two months knowing security already knew our family.',
            author: 'M. & R. Thompson — The Villas homeowners',
          },
          {
            quote:
              'We wanted golf access without estate upkeep. Jan mapped every Links listing, negotiated new appliances, and coordinated a club fitting the same week we moved in. Her vendor team is incredible.',
            author: 'S. Patel — Links golf villa owner',
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
    <section className="bg-white py-16 sm:py-20" aria-labelledby="townhome-faq-heading">
      <SectionBanner headingId="townhome-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="townhome-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Spanish Trail villa buyer FAQs
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

function CTASection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20 relative isolate overflow-hidden" aria-labelledby="townhome-cta-heading">
      <SectionBanner headingId="townhome-cta-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 id="townhome-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Ready to tour Spanish Trail villas?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Call or text <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link>, or email <Link href="mailto:DrDuffySells@SpanishTrailHomes.com" className="underline-offset-4 hover:underline">DrDuffySells@SpanishTrailHomes.com</Link>. I’ll deliver a tailored shortlist, HOA briefings, and private tour itinerary built around your travel schedule.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Connect with Dr. Jan Duffy</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="#townhome-villa-listings">See listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
