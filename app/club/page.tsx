import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { SiteShell } from '@/components/site-shell'
import { amenities, testimonials } from '@/lib/content'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Spanish Trail Country Club Life - 27-Hole Golf, Dining & Amenities',
  description:
    'Experience luxury country club living at Spanish Trail Las Vegas. Explore our 50,000 sq ft clubhouse, Robert Trent Jones Jr. 27-hole championship golf course, dining, fitness center, tennis courts, and exclusive member events. Former PGA Las Vegas Invitational host and UNLV Golf Team home course.',
  keywords: [
    'Spanish Trail Country Club',
    'Las Vegas golf club',
    'Robert Trent Jones Jr golf',
    'luxury country club Las Vegas',
    'Spanish Trail amenities',
    'Las Vegas golf membership',
    'private golf club Nevada',
  ],
  openGraph: {
    title: 'Spanish Trail Country Club - Luxury Golf & Country Club Living',
    description:
      'Discover the Spanish Trail Country Club lifestyle: 27-hole championship golf, 50,000 sq ft clubhouse, fine dining, fitness, and member events in Las Vegas.',
    type: 'website',
    url: 'https://spanishtrailhomes.com/club',
  },
}

export default function ClubPage() {
  return (
    <SiteShell>
      <ClubHero />
      <ClubHistory />
      <AmenitiesHighlights />
      <LifestyleSection />
      <TestimonialsHighlight />
    </SiteShell>
  )
}

function ClubHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="club-hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,43,30,0.6), rgba(15,43,30,0.75)), url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background" />
      <div className="mx-auto max-w-5xl px-6 py-28 text-primary-foreground sm:py-40">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Club Life
        </p>
        <h1
          id="club-hero-heading"
          className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          Where Las Vegas&apos; most discerning members gather, celebrate, and
          unwind.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/90 sm:text-lg">
          A 50,000 square foot clubhouse, panoramic Strip sunsets, and a calendar
          of destination-worthy experiences—all within the privacy of Spanish
          Trail Country Club.
        </p>
      </div>
    </section>
  )
}

function ClubHistory() {
  return (
    <section
      id="history"
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="history-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6 text-muted-foreground">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Since 1984
          </p>
          <h2
            id="history-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            A Private Oasis designed by Robert Trent Jones Jr.
          </h2>
          <p className="text-base leading-relaxed">
            Spanish Trail was envisioned as a desert sanctuary that would pair
            legendary golf with an equally refined social experience. Over four
            decades, our member-owned club has grown into an icon of
            west-Las Vegas living, where lush landscaping and mature trees frame
            every gathering.
          </p>
          <p className="text-base leading-relaxed">
            The clubhouse’s glass-lined architecture captures mountain horizons,
            while interior spaces—from the grand ballroom to intimate lounges—are
            curated for everything from milestone celebrations to relaxed
            conversations after a round.
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="/membership#inquiry">Schedule a Club Tour</Link>
          </Button>
        </div>

        <div className="space-y-6" aria-labelledby="timeline-heading">
          <h3
            id="timeline-heading"
            className="text-xs uppercase tracking-[0.4em] text-secondary"
          >
            Milestones
          </h3>
          <div className="space-y-5 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              1984
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Spanish Trail Country Club opens with 27 championship holes and a
              grand clubhouse overlooking the Sunrise course.
            </p>
          </div>
          <div className="space-y-5 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              1996
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Extensive clubhouse enhancements introduce elevated dining rooms,
              wine cellar, and expanded wellness facilities.
            </p>
          </div>
          <div className="space-y-5 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Today
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Member-led committees curate signature events, travel excursions,
              and philanthropic initiatives reflective of our vibrant community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function AmenitiesHighlights() {
  return (
    <section
      id="amenities"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="amenities-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Amenities
          </p>
          <h2
            id="amenities-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Resort-level experiences crafted for daily enjoyment.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            From sunrise workouts to evening wine tastings, the clubhouse and
            grounds are designed to entertain, energize, and inspire.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {amenities.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card/90 p-6 shadow-sm"
            >
              <span
                className="size-2.5 rounded-full bg-secondary"
                aria-hidden
              />
              <p className="text-sm font-medium text-foreground">{amenity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LifestyleSection() {
  return (
    <section
      id="lifestyle"
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="lifestyle-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Lifestyle
          </p>
          <h2
            id="lifestyle-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            A calendar tailored for curated connection.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Member committees program wine-pairing dinners, chef&apos;s table
            evenings, fashion showcases, wellness workshops, and family-centric
            holiday festivities. Tennis socials and pickleball mixers light up the
            evenings, while the pool deck becomes an oasis for summer gatherings.
          </p>
          <Button
            asChild
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="/membership">Discover Membership Options</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Dining',
              copy: 'Signature restaurant with chef-driven menus highlighting seasonal ingredients.',
            },
            {
              title: 'Social Calendar',
              copy: 'Weekly themed events, members-only concerts, and curated excursions beyond the club.',
            },
            {
              title: 'Wellness',
              copy: 'Fitness pavilion with personal training, spa services, and group classes.',
            },
            {
              title: 'Family Programs',
              copy: 'Junior golf academies, swim instruction, and teen socials create lifelong memories.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border/50 bg-background/80 p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsHighlight() {
  return (
    <section
      className="bg-background py-20 sm:py-24"
      aria-labelledby="club-testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Member Stories
          </p>
          <h2
            id="club-testimonials-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Trusted by generations of Las Vegas families.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Hear from longtime members about the culture, warmth, and excellence
            that make Spanish Trail exceptional.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-card/90 p-6 shadow-sm"
            >
              <blockquote className="text-base leading-relaxed text-muted-foreground">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-primary">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

