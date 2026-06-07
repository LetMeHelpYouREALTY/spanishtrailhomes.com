import type { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { SiteShell } from '@/components/site-shell'

export const metadata: Metadata = {
  title: 'Spanish Trail Community Guide - Neighborhoods, Amenities & Lifestyle',
  description:
    'Discover Spanish Trail Las Vegas: 11 guard-gated neighborhoods, 27-hole golf course, 640 acres of luxury living near the Strip. Explore Estates, Villas, Carmels, Gardens, and more. Tree-lined streets, resort amenities, and exclusive country club access in Spring Valley, NV 89113.',
  keywords: [
    'Spanish Trail neighborhoods',
    'Spanish Trail community',
    'guard-gated Las Vegas',
    'Spring Valley communities',
    'Spanish Trail Estates',
    'Spanish Trail Villas',
    'Las Vegas gated communities',
  ],
  openGraph: {
    title: 'Spanish Trail Community - 11 Neighborhoods & Country Club Living',
    description:
      'Explore Spanish Trail: 11 guard-gated neighborhoods, championship golf, 640 acres of luxury near the Las Vegas Strip.',
    type: 'website',
    url: 'https://spanishtrailhomes.com/communities/spanish-trail',
  },
}

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
  { label: 'Location', value: 'Spanish Trail, Las Vegas, NV 89113' },
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
      <HighlightsSection />
      <DetailsSection />
      <AmenitiesSection />
      <BenefitsSection />
      <ContactSection />
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="community-hero-heading">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 43, 30, 0.6), rgba(15, 43, 30, 0.75)), url('https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background" />

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
