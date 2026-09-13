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


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-waterfront-golf-homes'

export const metadata: Metadata = {
  title: 'Waterfront Golf Course Homes Spanish Trail | Dr. Jan Duffy',
  description:
    'Discover Spanish Trail waterfront golf course homes with Dr. Jan Duffy. Lakeside patios, golf frontage, and concierge buying expertise.',
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-waterfront-golf-homes'),
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
    title: 'Waterfront Golf Homes in Spanish Trail',
    description:
      'Explore Spanish Trail’s lakeside golf homes—tranquil water views, private club amenities, and bespoke service from Dr. Jan Duffy.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Waterfront Homes',
        subtitle: 'Lakeside golf living & concierge tours',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Waterfront Golf Homes',
    description:
      'Premier waterfront golf properties in Spanish Trail curated by Dr. Jan Duffy. View listings, amenities, and buying strategies.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Waterfront Golf Homes',
        subtitle: 'Exclusive lakeside estates & buyer strategy',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const faqContent = [
  {
    question: 'How rare are waterfront golf homes in Spanish Trail?',
    answer:
      'Only a small percentage of Spanish Trail homes sit along the Lakes course with water features. These properties command premium pricing thanks to stunning sunset reflections, soothing sounds, and enhanced privacy. I track every lakeside listing and upcoming renovation so clients can move quickly when opportunities appear.',
  },
  {
    question: 'Do water views impact maintenance or HOA costs?',
    answer:
      'The HOA manages ponds, fountains, and landscaping around the lakes, so homeowners enjoy the scenery without additional maintenance. Some waterfront homes include irrigation considerations and regular window cleaning to maintain clarity. I review HOA budgets and inspection reports so you understand ongoing care requirements.',
  },
  {
    question: 'Can I add docks or expand patios on waterfront lots?',
    answer:
      'Yes, with Architectural Review Committee approval. I coordinate with designers familiar with water feature setbacks and structural requirements to ensure upgrades—patios, decks, fire features—compliment the view while staying compliant.',
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

export default function WaterfrontGolfHomesPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Buyers', href: '/buyers' },
              { label: 'Waterfront Golf Homes' },
            ]}
          />
        </div>
      </div>
      <HighlightsSection />
      <RealScoutSection
        id="waterfront-golf-homes"
        eyebrow="Waterfront Listings"
        title="Spanish Trail waterfront homes on the market"
        description="Filter for Lakes course properties with water views, upgraded patios, and direct golf access."
        priceMin="1300000"
        propertyTypes=",SFR"
      />
      <ViewExperienceSection />
      <DesignSection />
      <LifestyleSection />
      <InvestmentSection />
      <BuyerProcessSection />
      <FAQSection />
      <CTASection />
      <Script id="waterfront-golf-homes-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="waterfront-hero-heading">
      <SectionBanner headingId="waterfront-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="waterfront-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Waterfront Homes for Sale
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Glassy lakes, emerald fairways, and backdrops of The Strip at night—Spanish Trail’s Lakes course delivers a rare trifecta. I connect buyers with waterfront homes that blend serenity, golf prestige, and entertainer-ready patios, ensuring every sunset feels like a private show.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Request waterfront listings</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#waterfront-golf-homes">See homes</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function HighlightsSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="waterfront-highlights-heading">
      <SectionBanner headingId="waterfront-highlights-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="waterfront-highlights-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Why waterfront golf homes are Spanish Trail’s crown jewels
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Spanish Trail’s Lakes course integrates ponds, waterfalls, and streams into the golf experience. Waterfront homeowners enjoy cool breezes, glimmering reflections, and the soothing soundtrack of flowing water—without sacrificing security or access.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Sunset performances',
              detail:
                'Evenings deliver golden light dancing across water and manicured greens. Outdoor lounges transform into romantic or social sanctuaries with minimal effort.',
            },
            {
              title: 'Privacy buffer',
              detail:
                'Water naturally separates fairways from patios, reducing golf cart traffic and providing a calming visual buffer for everyday relaxation.',
            },
            {
              title: 'Resale desirability',
              detail:
                'Waterfront homes consistently outperform interior lots. Buyers prioritize them for aesthetics, scarcity, and the ambiance they create for entertaining.',
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

function ViewExperienceSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="view-experience-heading">
      <SectionBanner headingId="view-experience-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="view-experience-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Crafting the waterfront view experience</h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            The right upgrades turn a lakeside lot into a seamless extension of the course. I outline how owners are enhancing their views while preserving the natural beauty.</p>
          <div className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
            <p>
              • <strong>Glass railing systems:</strong> Maintain sightlines while providing a wind barrier. Ideal for patios that see regular entertaining.</p>
            <p>
              • <strong>Landscape layering:</strong> Low-profile plantings along shorelines preserve the view and soften edges. At night, uplighting accentuates trees and water features.</p>
            <p>
              • <strong>Fire and water:</strong> Fire bowls, linear fireplaces, and built-in seating create dramatic contrast with the reflective water surface.</p>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">
            My waterfront checklist</h3>
          <ul className="space-y-3">
            <li>• Evaluate sun angles and glare at different times of day</li>
            <li>• Confirm seawall or shoreline stabilization maintenance</li>
            <li>• Review insurance coverage for water adjacency</li>
            <li>• Plan lighting that enhances night ambiance without disturbing wildlife</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function DesignSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="waterfront-design-heading">
      <SectionBanner headingId="waterfront-design-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="waterfront-design-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Interior design ideas for waterfront golf homes</h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Waterfront properties feel timeless when interiors reflect the natural surroundings. I collaborate with designers who celebrate water, light, and texture.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'View-friendly interiors',
              points: [
                'Pocket doors and floor-to-ceiling glass that disappear',
                'Neutral palettes with rich textures to highlight outdoor color',
                'Low-profile furnishings to maintain sightlines',
                'Integrated motorized shades for temperature control',
              ],
            },
            {
              title: 'Spa-inspired bathrooms',
              points: [
                'Freestanding tubs with water vistas',
                'Stone accents echoing lakeside palettes',
                'Steam showers with aromatherapy and chromatherapy lighting',
                'Private outdoor showers or reflection gardens',
              ],
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
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
      </div>
    </section>
  )
}

function LifestyleSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="waterfront-lifestyle-heading">
      <SectionBanner headingId="waterfront-lifestyle-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="waterfront-lifestyle-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Waterfront living tailored to how you unwind</h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Owners describe Spanish Trail’s waterfront homes as year-round resorts. I help you craft spaces that make the most of it morning to night.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Morning rituals',
              detail:
                'Enjoy coffee on patios with gentle breezes and reflections of sunrise. Yoga decks and meditation corners thrive in these tranquil environments.',
            },
            {
              title: 'Midday relaxation',
              detail:
                'Retractable awnings, misting systems, and plunge pools keep waterfront areas comfortable year-round—even in the summer heat.',
            },
            {
              title: 'Evening gatherings',
              detail:
                'Waterfront dining with chef kitchens, string lighting, and surround sound extends into star-gazing sessions with city lights twinkling in the distance.',
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

function InvestmentSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="waterfront-investment-heading">
      <SectionBanner headingId="waterfront-investment-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="waterfront-investment-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Investment outlook for waterfront golf homes</h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Waterfront homes in private golf communities remain resilient investments. I provide metrics to ensure your purchase aligns with long-term goals.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Value retention',
              detail:
                'Average price per square foot is 12–18% higher than interior lots. Homes with recent renovations and smart-home systems lead the pack.',
            },
            {
              title: 'Rental potential',
              detail:
                'Long-term leases for physicians or executives relocating to Las Vegas remain strong, though short-term rentals are prohibited. Expect premium monthly rates.',
            },
            {
              title: 'Exit strategy',
              detail:
                'I craft seller plans that highlight water, golf, and design features. Buyers respond to storytelling that captures the waterfront ambiance.',
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

function BuyerProcessSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="waterfront-buyer-process-heading">
      <SectionBanner headingId="waterfront-buyer-process-heading" />
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="waterfront-buyer-process-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Waterfront golf buying process with concierge support</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: '1. Lifestyle discovery',
              detail:
                'We align on view preferences, renovation appetite, membership goals, and desired timeline. You receive a curated list of opportunities with video tours.',
            },
            {
              title: '2. Waterfront tours',
              detail:
                'I stage tours to highlight daytime and evening ambiance. We evaluate noise, privacy, and lighting to confirm the home feels magical at every hour.',
            },
            {
              title: '3. Offer to onboarding',
              detail:
                'I negotiate pricing, manage inspections, and coordinate design consultations. Club introductions and vendor walk-throughs happen before closing so move-in is seamless.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#1f4a35]/60 bg-[#143927] p-6 shadow-lg shadow-black/20 text-sm leading-relaxed">
              <CardVisual seed={String(item.title)} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f8f5ef]">{item.title}</h3>
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
    <section className="bg-white py-16 sm:py-20" aria-labelledby="waterfront-faq-heading">
      <SectionBanner headingId="waterfront-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="waterfront-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Spanish Trail waterfront golf FAQs</h2>
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
    <section className="bg-[#f8f2e7] py-16 sm:py-20 relative isolate overflow-hidden" aria-labelledby="waterfront-cta-heading">
      <SectionBanner headingId="waterfront-cta-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 id="waterfront-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Let’s unlock a Spanish Trail waterfront home</h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Contact <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link> or email <Link href="mailto:DrDuffySells@SpanishTrailHomes.com" className="underline-offset-4 hover:underline">DrDuffySells@SpanishTrailHomes.com</Link>. I’ll deliver a custom shortlist, arrange view-focused tours, and guide you through every step.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Connect with Dr. Jan Duffy</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="#waterfront-golf-homes">View listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
