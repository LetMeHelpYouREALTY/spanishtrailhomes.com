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


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-custom-estate-homes-strip'

export const metadata: Metadata = {
  title: 'Spanish Trail Custom Estate Homes Near the Strip | Dr. Jan Duffy',
  description:
    'Discover custom estate homes near the Las Vegas Strip in Spanish Trail. Gated privacy, expansive lots, and personalized concierge buying with Dr. Jan Duffy.',
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-custom-estate-homes-strip'),
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
    title: 'Custom Estate Homes Near the Strip | Spanish Trail',
    description:
      'Tour Spanish Trail custom estates minutes from the Strip with Dr. Jan Duffy. Explore double-gated enclaves, luxury amenities, and curated buyer journeys.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Custom Estates',
        subtitle: 'Minutes from the Strip with guard-gated privacy',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Custom Estate Homes Near the Strip',
    description:
      'Secure private tours of double-gated Spanish Trail estates offering proximity to the Las Vegas Strip. Guided by Dr. Jan Duffy.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Custom Estates',
        subtitle: 'Luxury living near the Las Vegas Strip',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const faqContent = [
  {
    question: 'How close is Spanish Trail to the Las Vegas Strip?',
    answer:
      'From the guard gate on Tropicana Avenue, the Strip is an 11- to 13-minute drive depending on traffic. Estates near the western perimeter enjoy quiet tree-lined streets while maintaining quick access to Allegiant Stadium, T-Mobile Arena, and Harry Reid International Airport. I provide route comparisons at different times of day so you can gauge commute consistency.',
  },
  {
    question: 'What defines a custom estate inside Spanish Trail?',
    answer:
      'Custom estates typically exceed 4,000 square feet, sit on 1/3-acre or larger lots, and feature bespoke architecture—dual primary suites, casitas, showroom garages, wine cellars, and resort-level outdoor spaces. Many were originally built by celebrated Las Vegas architects and have since been reimagined with modern interiors.',
  },
  {
    question: 'How competitive is the market for Spanish Trail estates?',
    answer:
      'Inventory remains limited, with fewer than a dozen estates actively listed most weeks. Well-prepared homes priced between $2M and $3.5M are averaging 37 days on market, while renovated properties with Strip or golf views can secure full-price offers within two weeks. I stay in constant contact with estate owners and listing agents so you’re first to know about upcoming opportunities.',
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

export default function CustomEstateHomesStripPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Buyers', href: '/buyers' },
              { label: 'Custom Estate Homes Near the Strip' },
            ]}
          />
        </div>
      </div>
      <ProximitySection />
      <RealScoutSection
        id="custom-estate-listings"
        eyebrow="Estate Inventory"
        title="Spanish Trail custom estates available now"
        description="Hand-curated estate homes with double gates, casitas, and entertainment wings."
        priceMin="1500000"
        propertyTypes=",SFR"
      />
      <EstateProfilesSection />
      <DesignHighlightsSection />
      <EntertainingSection />
      <TourLogisticsSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />
      <Script id="custom-estate-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="custom-estate-hero-heading">
      <SectionBanner headingId="custom-estate-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="custom-estate-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Custom Estate Homes Near the Strip
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Spanish Trail is the rare guard-gated enclave where resort-scale estates sit minutes from the Strip yet feel worlds away. Double gates, mature landscaping, and 27 holes of golf create a private sanctuary for executives, entertainers, and medical professionals who require easy access to Las Vegas’s business and cultural corridors. I orchestrate every element of the estate search so you can focus on design, privacy, and possibility.
        </p>
        <p className="text-base leading-relaxed text-[#f8f5ef]/80">
          If you are weighing{' '}
          <Link href="/las-vegas-luxury-neighborhoods" className="underline-offset-4 hover:underline">
            other Las Vegas luxury neighborhoods
          </Link>
          , Spanish Trail often wins on commute: the Tropicana gate puts Allegiant Stadium, the resort corridor, and Harry Reid International within a short drive while the community still feels like a private golf retreat—not a billboard-lined arterial.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Book a private estate preview</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#custom-estate-listings">See estate listings</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function ProximitySection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="proximity-heading">
      <SectionBanner headingId="proximity-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="proximity-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Estate privacy with Strip convenience
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          For high-performing professionals, Spanish Trail strikes the perfect balance: escape the Strip’s energy within guarded walls while staying close enough for evening galas, client dinners, or quick airport departures. During discovery, I map commute scenarios from each estate enclave to ensure the location supports your lifestyle.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'To Allegiant Stadium',
              detail: 'Approx. 12 minutes. Ideal for sports entertainment, corporate suites, and event hosting. Private transportation teams know the guard procedures for seamless entry/exit.',
            },
            {
              title: 'To the Strip core',
              detail: 'Approx. 13 minutes via Tropicana or 215 Beltway. Estates West owners often schedule chauffeured departures that align with gate staff for efficient clearance.',
            },
            {
              title: 'To Harry Reid International',
              detail: 'Approximately 15 minutes door-to-door. Clients who travel frequently appreciate the ability to reach private terminals quickly while still returning to a tranquil residence.',
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
          I provide traffic heat maps, motor court design notes, and preferred security vendors who coordinate with the guard team for VIP arrivals. Everything about the location is engineered for efficiency without sacrificing luxury.
        </p>
      </div>
    </section>
  )
}

function EstateProfilesSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="estate-profiles-heading">
      <SectionBanner headingId="estate-profiles-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="estate-profiles-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Signature Spanish Trail estate profiles
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Spanish Trail’s estate enclaves each offer unique characteristics. Below are four archetypes we reference when evaluating which homes align with your vision.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[ 
            {
              title: 'Estates West showpieces',
              detail: '7,000–11,000 sq. ft. interiors with soaring foyers, dual staircases, and auto galleries. Many include smart-home systems, theater lounges, and chef-level catering kitchens.',
            },
            {
              title: 'Islands water estates',
              detail: 'Curved driveways and lush landscaping hide lakefront patios, negative-edge pools, and guest casitas. Perfect for owners who host extended family or corporate retreats.',
            },
            {
              title: 'Courtyards entertainers',
              detail: 'Indoor-outdoor living anchored by central courtyards, retractable glass walls, and floating fireplaces. Quieter streets ideal for privacy seekers.',
            },
            {
              title: 'Gardens transitional retreats',
              detail: 'Sophisticated renovations blending natural stone, warm woods, and simplified lines. Frequently include wellness suites, golf simulators, or art studios.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <CardVisual seed={String(item.title)} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#372a20]/80">
          I maintain private footage, floor plans, and renovation histories for each estate archetype. By the time we step inside, you already know ceiling heights, suite configurations, and potential customization paths.
        </p>
      </div>
    </section>
  )
}

function DesignHighlightsSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="design-highlights-heading">
      <SectionBanner headingId="design-highlights-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="design-highlights-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Design signatures defining Spanish Trail estates in 2026
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Luxury buyers expect more than square footage. My design brief breaks down the finishes, technology, and amenities that deliver the wow factor—both for daily life and future resale.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Hospitality-level kitchens',
              detail:
                'Double islands, catering pantries, speed ovens, and custom refrigeration walls. Perfect for chef-hosted dinners before heading to the Strip for a show.',
            },
            {
              title: 'Wellness suites',
              detail:
                'Infrared saunas, recovery lounges, cold plunges, and massage rooms. Executive buyers demand spaces to recharge between travel and high-profile engagements.',
            },
            {
              title: 'Smart security & ambiance',
              detail:
                'Biometric access, motorized drapery, programmable lighting, and acoustic design to support music, film nights, or privacy as needed.',
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
          I pair buyers with architects, designers, and lighting specialists who have successfully navigated Spanish Trail’s design approvals. Their familiarity keeps your renovation timeline tight and prevents costly revisions.
        </p>
      </div>
    </section>
  )
}

function EntertainingSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="entertaining-heading">
      <SectionBanner headingId="entertaining-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="entertaining-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Entertaining like a Strip headliner from your Spanish Trail estate
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Many owners host VIP dinners, charity galas, or executive retreats at home. We assess the property’s flow, service entrances, and parking logistics to ensure the estate supports memorable experiences.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'Event logistics readiness',
              points: [
                'Circular motor courts for valet services and luxury sprinter vans',
                'Outdoor lighting plans for evening ambiance and security',
                'Dual kitchens separating gourmet prep from guest-facing spaces',
                'Sound zoning to balance entertainment with neighborhood tranquility',
              ],
            },
            {
              title: 'Hospitality concierge partners',
              points: [
                'Preferred chefs and sommeliers familiar with Spanish Trail kitchen layouts',
                'Event planners who liaise with guard staff and HOA guidelines',
                'Luxury transportation teams cleared for guard-gated arrivals',
                'Production crews for live music, projection mapping, or art showcases',
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
          Whether you’re planning a post-show celebration or a corporate retreat, I coordinate with the HOA and security teams to streamline approvals, parking, and vendor access. Your estate becomes a stage perfectly aligned with the Strip lifestyle.
        </p>
      </div>
    </section>
  )
}

function TourLogisticsSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="tour-logistics-heading">
      <SectionBanner headingId="tour-logistics-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="tour-logistics-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          How we tour Spanish Trail estates with precision
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Estate tours blend logistics, confidentiality, and curated storytelling. My team choreographs each appointment to reveal the property at its most compelling moments.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: '1. Pre-tour intelligence',
              detail:
                'Receive digital dossiers outlining floor plans, systems ages, club proximity, and seller priorities. We review pricing strategy and negotiation tactics in advance.',
            },
            {
              title: '2. Day-of orchestration',
              detail:
                'We coordinate multiple estate tours with guard teams, ensure valet-friendly parking, and time arrivals with golden hour lighting for patios, pools, and Strip views.',
            },
            {
              title: '3. Post-tour analysis',
              detail:
                'Every property is evaluated with a SWOT report covering renovation scope, operating costs, and long-term value. You receive prioritized next steps within hours.',
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

function CaseStudiesSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="estate-case-studies-heading">
      <SectionBanner headingId="estate-case-studies-heading" />
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <h2 id="estate-case-studies-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Recent Spanish Trail estate success stories
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[{
            title: 'Mission Hills private sale',
            detail:
              'A 9,200 sq. ft. estate with Strip skyline views sold off-market at $3.1M after a curated twilight tour. We negotiated designer furniture and provided membership guidance to the buyer before closing.',
          },
          {
            title: 'Islands waterfront retreat',
            detail:
              'Secured for $2.45M after evaluating long-term renovation plans and aligning closing with the seller’s move to another state. Included over $200K in smart-home upgrades and a year of landscaping services.',
          }].map((item) => (
            <article key={item.title} className="space-y-4 rounded-3xl border border-[#1f4a35]/60 bg-[#143927] p-6 shadow-lg shadow-black/20 text-sm leading-relaxed">
              <CardVisual seed={String(item.title)} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c6aa7a]">{item.title}</h3>
              <p className="text-[#f8f5ef]/80">{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-[#f8f5ef]/75">
          Ask for my Spanish Trail Estate Playbook to see detailed timelines, negotiation tactics, and vendor collaborations behind each success story.
        </p>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="custom-estate-faq-heading">
      <SectionBanner headingId="custom-estate-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="custom-estate-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Spanish Trail custom estate FAQs
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
    <section className="bg-[#f8f2e7] py-16 sm:py-20 relative isolate overflow-hidden" aria-labelledby="custom-estate-cta-heading">
      <SectionBanner headingId="custom-estate-cta-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 id="custom-estate-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Your Strip-adjacent estate search starts here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Call or text <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link>, or email <Link href="mailto:DrDuffySells@SpanishTrailHomes.com" className="underline-offset-4 hover:underline">DrDuffySells@SpanishTrailHomes.com</Link>. I’ll assemble a private tour schedule, vendor introductions, and security brief tailored to your move date.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Connect with Dr. Jan Duffy</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="#custom-estate-listings">Browse estates</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
