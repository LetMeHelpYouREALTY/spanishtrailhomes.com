import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'

const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-southwest-las-vegas-luxury-homes'

export const metadata: Metadata = {
  title: 'Spanish Trail Southwest Las Vegas Luxury Homes | Dr. Jan Duffy',
  description:
    'Explore Southwest Las Vegas luxury living within Spanish Trail. Guard-gated estates, villas, and curated neighborhood comparisons with Dr. Jan Duffy.',
  alternates: {
    canonical: '/spanish-trail-southwest-las-vegas-luxury-homes',
  },
  openGraph: {
    url: pageUrl,
    title: 'Southwest Las Vegas Luxury Homes in Spanish Trail',
    description:
      'Compare Spanish Trail to other Southwest Las Vegas luxury enclaves. Discover estates, amenities, and buyer strategy with Dr. Jan Duffy.',
    images: [`${pageUrl}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Southwest Las Vegas Luxury Homes',
    description:
      'Guard-gated Spanish Trail offers prime Southwest Las Vegas luxury real estate. See how it stacks up with nearby communities.',
    images: [`${pageUrl}/og-image.png`],
  },
}

const faqContent = [
  {
    question: 'Why choose Spanish Trail over other Southwest Las Vegas communities?',
    answer:
      'Spanish Trail offers mature landscaping, 27 holes of championship golf, and proven property values just 15 minutes from the Strip. Compared to newer master plans, you gain larger lots, towering trees, and a guard-gated pedigree that has anchored Southwest Las Vegas luxury for decades.',
  },
  {
    question: 'How does Spanish Trail compare to The Ridges or Southern Highlands?',
    answer:
      'Spanish Trail is closer to the Strip, Harry Reid International Airport, and the medical corridor while maintaining private-club amenities. The Ridges features contemporary architecture and Summerlin schools; Southern Highlands offers newer builds but longer commutes. I break down pricing, HOA fees, and lifestyle to help you choose the best fit.',
  },
  {
    question: 'What Southwest Las Vegas conveniences are nearby?',
    answer:
      'Residents enjoy quick access to the 215 Beltway, Spring Valley Hospital, Allegiant Stadium, and premier dining along Durango and Spring Mountain. Daily needs—from Whole Foods to boutique fitness—are within a 10-minute drive.',
  },
]


export default function SouthwestLasVegasLuxuryHomesPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Southwest Las Vegas Luxury Homes' },
            ]}
          />
        </div>
      </div>
      <OverviewSection />
      <RealScoutSection
        id="southwest-las-vegas-luxury-listings"
        eyebrow="Luxury Listings"
        title="Spanish Trail homes anchoring Southwest Las Vegas luxury"
        description="Discover estates, villas, and guard-gated properties that define the Southwest submarket."
        priceMin="900000"
        propertyTypes=",SFR"
      />
      <ComparisonSection />
      <LifestyleSection />
      <CommuterSection />
      <SchoolSection />
      <BuyerStrategySection />
      <FAQSection />
      <CTASection />
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="southwest-hero-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="southwest-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Southwest Las Vegas Luxury Homes
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Southwest Las Vegas balances Strip convenience with suburban calm, and Spanish Trail stands at the center of that promise. Guarded entrances, towering pines, and championship golf separate the community from newer developments nearby. I help buyers evaluate Spanish Trail alongside other elite neighborhoods so you choose the address that truly fits your goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Discuss Southwest options</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#southwest-las-vegas-luxury-listings">View Spanish Trail listings</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function OverviewSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="overview-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="overview-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Southwest Las Vegas luxury from inside the guard gates
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Southwest Las Vegas continues to attract professionals, entertainers, and relocating families seeking proximity to the Strip without sacrificing serenity. Spanish Trail delivers all of that with a mature guard-gated community, established golf club, and decades of proven value.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Prime location',
              detail:
                'Located near Tropicana Avenue and Rainbow Boulevard, Spanish Trail keeps you within 15 minutes of Allegiant Stadium, the Strip, and Harry Reid International Airport while remaining a true residential oasis.',
            },
            {
              title: 'Diverse home collection',
              detail:
                'Choose from custom estates with casitas, golf-view villas, or lock-and-leave townhomes. The architectural variety is unmatched within Southwest Las Vegas luxury corridors.',
            },
            {
              title: 'Legacy reputation',
              detail:
                'Since the 1980s, Spanish Trail has catered to celebrities, executives, and medical specialists. Property values have weathered market cycles thanks to lifestyle and security advantages.',
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

function ComparisonSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="comparison-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="comparison-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Comparing Spanish Trail to other Southwest Las Vegas enclaves
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Choosing a neighborhood is about more than home style. We analyze commute times, HOA structures, amenities, and long-term appreciation so you invest wisely.
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
            <p>
              • <strong>Spanish Trail vs. The Ridges:</strong> Spanish Trail offers faster Strip and airport access plus mature tree cover. The Ridges delivers newer architecture inside Summerlin. Both provide golf and guard gates, but Spanish Trail guarantees shorter commute times.
            </p>
            <p>
              • <strong>Spanish Trail vs. Southern Highlands:</strong> Southern Highlands features newer builds and custom lots further south; Spanish Trail provides immediate access to Spring Valley hospitals and world-class dining along the Flamingo and Durango corridors.
            </p>
            <p>
              • <strong>Spanish Trail vs. Rhodes Ranch:</strong> Rhodes Ranch is more family-focused with public golf access; Spanish Trail remains private, more exclusive, and commands higher resale due to limited inventory and club prestige.
            </p>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">
            Comparison checklist
          </h3>
          <ul className="space-y-3">
            <li>• Commute windows to key destinations</li>
            <li>• HOA dues, reserves, and assessments</li>
            <li>• Club membership requirements and perks</li>
            <li>• Architectural style and renovation potential</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function LifestyleSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="southwest-lifestyle-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="southwest-lifestyle-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Southwest Las Vegas lifestyle advantages
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Southwest Las Vegas blends outdoor recreation, dining, and cultural access. Spanish Trail homeowners experience the best of it with security and sophistication.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Dining & entertainment',
              detail:
                'Durango Station, UnCommons, and the Chinatown Dining District are minutes away, offering Michelin-starred restaurants, craft cocktail lounges, and late-night hotspots.',
            },
            {
              title: 'Outdoor escapes',
              detail:
                'Reach Red Rock Canyon trails in 20 minutes, tee off on Robert Trent Jones Jr. fairways at home, or explore Desert Breeze Park’s courts, splash pads, and dog runs.',
            },
            {
              title: 'Wellness & healthcare',
              detail:
                'Nearby Spring Valley Hospital, Siena campus, and concierge medical practices provide top-tier care; boutique fitness studios and spas line Rainbow and Flamingo corridors.',
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

function CommuterSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="commuter-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="commuter-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Commute times that keep your schedule agile
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Southwest Las Vegas residents value Spanish Trail for its ability to shrink drive times without compromising privacy. I map commute windows around your calendar so you understand real-world travel.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { label: 'Las Vegas Strip', value: '≈ 15 minutes' },
            { label: 'Harry Reid Intl. Airport', value: '≈ 18 minutes' },
            { label: 'Summerlin Downtown', value: '≈ 20 minutes' },
            { label: 'UNLV / Medical District', value: '≈ 17 minutes' },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.label}</h3>
              <p className="mt-3 font-[var(--font-playfair)] text-2xl text-[#0f2b1e]">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#372a20]/80">
          I also coordinate private transportation vendors familiar with guard gate procedures for executives and entertainers who require discreet arrivals.</p>
      </div>
    </section>
  )
}

function SchoolSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="school-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="school-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Education and enrichment nearby</h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Families appreciate Spanish Trail’s access to reputable schools and enrichment programs throughout Southwest Las Vegas.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Faith Lutheran & Bishop Gorman',
              detail:
                'Top-tier private schools within 10–15 minutes offering AP, arts, and athletics. Carpool lanes are easy to navigate from the guard gates.',
            },
            {
              title: 'Charter & magnet options',
              detail:
                'Doral Academy Red Rock, Las Vegas Academy, and Delta Academy provide STEAM and performing arts tracks aligned with future-ready pathways.',
            },
            {
              title: 'Enrichment network',
              detail:
                'Nearby tutoring labs, dance companies, and conservatories keep kids active. Club youth programs add golf, tennis, and leadership opportunities.',
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

function BuyerStrategySection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="southwest-strategy-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="southwest-strategy-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Strategy for Southwest Las Vegas luxury buyers
        </h2>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Inventory in Southwest Las Vegas moves quickly when homes balance security, design, and convenience. Here’s how I help you stand out.</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Intelligence first',
              detail:
                'Receive side-by-side comparisons of Spanish Trail, The Ridges, Southern Highlands, and Anthem Country Club to clarify value, dues, and appreciation trajectories.',
            },
            {
              title: 'Curated tours',
              detail:
                'Experience homes at peak lighting, meet club staff, and explore neighborhood amenities so you can feel how each option fits your routine.',
            },
            {
              title: 'Negotiation edge',
              detail:
                'I coordinate financing partners, craft persuasive offer letters, and leverage relationships with listing agents to secure deals even in competitive situations.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#1f4a35]/60 bg-[#143927] p-6 shadow-lg shadow-black/20 text-sm leading-relaxed">
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
    <section className="bg-white py-16 sm:py-20" aria-labelledby="southwest-faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="southwest-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Southwest Las Vegas luxury FAQs
        </h2>
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
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="southwest-cta-heading">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 id="southwest-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Explore Southwest Las Vegas luxury with Dr. Jan
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Contact <Link href="tel:17025001955" className="underline-offset-4 hover:underline">702-500-1955</Link> or email <Link href="mailto:jduffy@bhhsnv.com" className="underline-offset-4 hover:underline">jduffy@bhhsnv.com</Link> for a tailored comparison of Spanish Trail and neighboring luxury communities.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Schedule your consult</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="#southwest-las-vegas-luxury-listings">See listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
