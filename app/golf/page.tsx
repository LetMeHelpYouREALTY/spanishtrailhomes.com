import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { SiteShell } from '@/components/site-shell'
import { golfCourses } from '@/lib/content'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '27-Hole Robert Trent Jones Jr Golf Course - Spanish Trail Las Vegas',
  description:
    'Play championship golf at Spanish Trail Country Club Las Vegas. 27-hole Robert Trent Jones Jr. design featuring 120+ bunkers, 15 lakes, and three unique 9-hole courses: Sunrise, Lakes, and Canyon. Former PGA Las Vegas Invitational host (5x) and UNLV Women\'s Golf Team home course. Yardage up to 7,045, slope rating 139.',
  keywords: [
    'Robert Trent Jones Jr golf course',
    'Spanish Trail golf',
    'Las Vegas championship golf',
    '27-hole golf course Nevada',
    'PGA Las Vegas Invitational',
    'private golf club Las Vegas',
    'Spanish Trail scorecard',
  ],
  openGraph: {
    title: '27-Hole Championship Golf Course - Spanish Trail Las Vegas',
    description:
      'Championship golf by Robert Trent Jones Jr. Three 9-hole courses, 120+ bunkers, 15 lakes. Former PGA tournament host.',
    type: 'website',
    url: 'https://spanishtrailhomes.com/golf',
  },
}

const scorecard = [
  { combo: 'Sunrise • Lakes', par: '72', yardage: '6,873', rating: '73.1', slope: '137' },
  { combo: 'Lakes • Canyon', par: '72', yardage: '7,045', rating: '74.2', slope: '139' },
  { combo: 'Canyon • Sunrise', par: '72', yardage: '6,921', rating: '73.5', slope: '138' },
]

export default function GolfPage() {
  return (
    <SiteShell>
      <GolfHero />
      <CourseTour />
      <ExperienceDetails />
      <ScorecardSection />
      <GuestInformation />
    </SiteShell>
  )
}

function GolfHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="golf-hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,43,30,0.6), rgba(15,43,30,0.75)), url('https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background" />
      <div className="mx-auto max-w-5xl px-6 py-28 text-primary-foreground sm:py-40">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Golf at Spanish Trail
        </p>
        <h1
          id="golf-hero-heading"
          className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          27 championship holes. Three distinct personalities. Endless ways to
          play.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/90 sm:text-lg">
          Robert Trent Jones Jr. designed each nine to challenge strategy, ball
          striking, and creativity—paired with postcard views of Red Rock Canyon
          and the Las Vegas Strip.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button className="rounded-full px-7 py-3 text-xs uppercase tracking-[0.4em]" asChild>
            <Link href="/membership#offerings">Join the Golf Experience</Link>
          </Button>
          <Button variant="outline" asChild className="rounded-full px-7 py-3 text-xs uppercase tracking-[0.3em] text-primary">
            <Link href="/events#golf-outings">Host a Golf Outing</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function CourseTour() {
  return (
    <section
      id="course-tour"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="course-tour-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">
              Course Tour
            </p>
            <h2
              id="course-tour-heading"
              className="mt-3 font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Three nines, each with a signature rhythm.
            </h2>
          </div>
          <Button
            asChild
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="/guest-info#contact">Connect with the Golf Shop</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {golfCourses.map((course) => (
            <article
              key={course.name}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <div
                className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${course.image}')` }}
                aria-hidden
              />
              <div className="space-y-3 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-secondary">
                  {course.yardage}
                </p>
                <h3 className="font-[var(--font-playfair)] text-2xl text-foreground">
                  {course.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
                <Link
                  href="/membership#offerings"
                  className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-primary transition-colors hover:text-secondary"
                >
                  View Memberships
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceDetails() {
  return (
    <section
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Practice & Instruction
          </p>
          <h2
            id="experience-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Elevate every round with expert guidance.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Unlimited access to our double-sided practice range, short game
            complex, and putting greens ensures your game is tournament-ready.
            PGA-certified instructors lead swing analysis, junior development,
            and on-course strategy sessions tailored to your goals.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Golf Academy',
              copy: 'Private instruction, clinics, and custom club fittings powered by the latest technology.',
            },
            {
              title: 'Junior Development',
              copy: 'Year-round programs nurturing the next generation of champions with coaching and on-course play.',
            },
            {
              title: 'Competitive Play',
              copy: 'Member tournaments, ladies leagues, men’s nights, and mixed events keep the calendar full.',
            },
            {
              title: 'Caddie Program',
              copy: 'Dedicated professional caddies enhance the playing experience for outings and member events.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm"
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

function ScorecardSection() {
  return (
    <section
      id="scorecard"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="scorecard-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Scorecard
          </p>
          <h2
            id="scorecard-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Championship routing for every skill level.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Multiple tee options and course combinations allow members to tailor
            the challenge—from approachable morning rounds to tournament-ready
            events.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm">
          <table className="min-w-full divide-y divide-border/60 text-left text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold uppercase tracking-[0.3em]">
                  Course Combination
                </th>
                <th scope="col" className="px-6 py-4 font-semibold uppercase tracking-[0.3em]">
                  Par
                </th>
                <th scope="col" className="px-6 py-4 font-semibold uppercase tracking-[0.3em]">
                  Yardage
                </th>
                <th scope="col" className="px-6 py-4 font-semibold uppercase tracking-[0.3em]">
                  Rating
                </th>
                <th scope="col" className="px-6 py-4 font-semibold uppercase tracking-[0.3em]">
                  Slope
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 bg-background/80 text-foreground">
              {scorecard.map((row) => (
                <tr key={row.combo}>
                  <td className="px-6 py-4">{row.combo}</td>
                  <td className="px-6 py-4">{row.par}</td>
                  <td className="px-6 py-4">{row.yardage}</td>
                  <td className="px-6 py-4">{row.rating}</td>
                  <td className="px-6 py-4">{row.slope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function GuestInformation() {
  return (
    <section
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="guest-info-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Guest Information
          </p>
          <h2
            id="guest-info-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Planning a visit? Let us curate your round.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Guests must be accompanied by a member or receive authorization from
            our golf staff. Please review pace-of-play expectations, dress code,
            and arrival instructions prior to your visit.
          </p>
          <Button
            asChild
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="/guest-info">View Guest Guide</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Dress Code',
              copy: 'Collared shirts, tailored slacks or shorts, and soft spikes are required for all players.',
            },
            {
              title: 'Arrival',
              copy: 'Please arrive 30 minutes prior to your tee time to enjoy our practice facilities.',
            },
            {
              title: 'Carts & Caddies',
              copy: 'Golf carts and professional caddies are available by reservation through the golf shop.',
            },
            {
              title: 'Dining',
              copy: 'Before or after your round, visit the clubhouse grill for chef-crafted seasonal fare.',
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

