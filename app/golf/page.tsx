import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { golfCourses } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { HeroBackground } from '@/components/hero-background'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner, CardVisual } from '@/components/heading-media'
import { getSiteImageUrl } from '@/lib/cloudflare-images'
import { getAssetAlt } from '@/lib/site-images'


const golfNarratives = [
  {
    title: 'Course Conditions and Seasonal Strategy',
    paragraphs: [
      'Spanish Trail\'s 27 holes reward players who understand how the desert seasons impact turf, wind, and shot selection. Overseed schedules typically wrap in early fall, delivering emerald-green fairways and receptive greens just in time for peak golf tourism. Winter mornings can be crisp, so members often schedule tee times mid-morning to catch warming sunlight while enjoying the dramatic contrast of snow-dusted Spring Mountains.',
      'During the summer, early tee times offer cooler temperatures and the best chance to experience the Sunrise nine\'s signature water features without afternoon winds. Conditioning remains stellar thanks to expert agronomy teams, and Spanish Trail\'s double-sided range stays open with misting fans and shaded hitting bays.'
    ],
  },
  {
    title: 'Instruction, Technology, and Player Development',
    paragraphs: [
      'Spanish Trail Country Club invests continuously in player development. The Golf Learning Center features swing studios with Foresight GCQuad, BodiTrak pressure mats, and high-speed cameras for detailed analysis. PGA professionals design lesson series tailored to beginners, competitive amateurs, and juniors charting a path toward collegiate golf. Fitness trainers collaborate with instructors to build strength and flexibility programs that boost longevity on the course.',
      'Members also receive invites to fittings hosted by premium brands, ensuring equipment is dialed to their swing DNA and Spanish Trail\'s unique course conditions. Contact the golf shop for program availability and pricing.'
    ],
  },
  {
    title: 'Competitive Play and Social Traditions',
    paragraphs: [
      'Competition thrives at Spanish Trail. The Men\'s Invitational draws players from across the West, while the Ladies Member-Guest showcases hospitality with themed decor, live music, and boutique gifting suites. Couples leagues, nine-and-dine events, and twilight shootouts fill the calendar, offering friendly formats for every skill level. Charity tournaments raise funds for local causes, combining golf with purpose and strengthening community bonds.',
      'Traditions like the annual Glow-Ball Classic and junior-parent scrambles foster multigenerational memories. Understanding these rhythms helps home buyers evaluate how Spanish Trail\'s golf culture complements their lifestyle.'
    ],
  },
  {
    title: 'Real Estate Synergy with the Golf Experience',
    paragraphs: [
      'Many Spanish Trail homes are designed with the golfer in mind: motor courts that accommodate cart parking, patios positioned for panoramic fairway views, and outdoor kitchens ideal for post-round gatherings. Some estates even feature putting greens and chipping complexes that mimic club conditions. Dr. Jan Duffy curates home tours that showcase these amenities, explaining HOA guidelines for accessory structures, lighting, and landscaping that preserve sightlines and pace of play.',
      'For members who travel frequently, lock-and-leave villas near the Sunrise and Lakes practice facilities deliver ultimate convenience. Dr. Duffy evaluates each listing\'s proximity to cart paths, starter huts, and halfway houses, ensuring her clients can maximize their time on the course. She also advises on noise considerations, premium pricing for double-fairway exposure, and property enhancements that resonate with fellow golf enthusiasts when it is time to resell.'
    ],
  },
]

const golfFaq = [
  {
    question: 'Is Spanish Trail a public or private golf course in Las Vegas?',
    answer:
      'Spanish Trail Country Club is a private, member-focused 27-hole facility inside the guard gates—not a daily-fee public course. Tee times, practice facilities, and most events are for members and their guests. If you are comparing Las Vegas public golf options, municipal and resort courses are available elsewhere; Dr. Jan Duffy focuses on real estate and introductions to the club’s golf shop for membership questions.',
  },
  {
    question: 'How close is Spanish Trail Country Club to the Las Vegas Strip?',
    answer:
      'Spanish Trail sits in southwest Las Vegas (89113), roughly a 15-minute drive to the central Strip depending on traffic—close enough for dining and entertainment, far enough for quiet fairways. Buyers who search “golf near the Strip” often tour Spanish Trail for private club golf without living on the corridor itself.',
  },
  {
    question: 'I searched “Spanish Trails golf”—is that the same as Spanish Trail?',
    answer:
      'Yes. The club and community are Spanish Trail (singular). “Spanish Trails golf” or “Spanish Trails golf Vegas” usually refers to the same private 27-hole Robert Trent Jones Jr. layout inside Spanish Trail Country Club.',
  },
  {
    question: 'Where can I browse Las Vegas golf course homes for sale at Spanish Trail?',
    answer:
      'Use the live listings section on this page or the dedicated golf home hubs linked from SpanishTrailHomes.com (luxury golf course properties and private golf course homes). Dr. Jan Duffy coordinates guard-gate showings and explains cart path access, view premiums, and membership next steps.',
  },
  {
    question: 'How do tee times work for members and their guests?',
    answer:
      'Members can book tee times up to seven days in advance using the Spanish Trail mobile app or by contacting the golf shop. Peak morning times typically fill first, especially on weekends and during major events. Contact the golf shop for guest policies, dress code guidelines, and pace-of-play expectations.',
  },
  {
    question: 'Are there reciprocal privileges with other clubs?',
    answer:
      'Yes. Spanish Trail maintains relationships with select premier clubs across the United States, allowing members to request reciprocal tee times when traveling. Opportunities vary by season, so contact the golf staff to arrange advanced requests.',
  },
  {
    question: 'What golf programs are available for juniors?',
    answer:
      'Junior golfers can enroll in seasonal academies, year-round development programs, and travel teams that compete across Nevada. Instruction emphasizes fundamentals, etiquette, and tournament preparation. Parents appreciate mentorship from PGA professionals and the supportive culture among junior members. Contact the golf shop for program details and enrollment.',
  },
  {
    question: 'Do Spanish Trail homes include golf memberships?',
    answer:
      'Golf memberships are independent of real estate purchases. However, some sellers negotiate initiation fees or membership introductions as part of the transaction. Dr. Jan Duffy reviews each listing\'s membership status and can introduce buyers to the membership director to understand dues and availability before submitting offers.',
  },
  {
    question: 'What amenities support non-golfing family members?',
    answer:
      'Spanish Trail provides a full resort experience: fitness classes, spa services, tennis and pickleball courts, pools, and a vibrant social calendar. Non-golfers often accompany players to the clubhouse for brunch, wellness workshops, or live entertainment. Contact the club for information about membership categories that fit your household.',
  },
]

const golfFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: golfFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const pageUrl = 'https://www.spanishtrailhomes.com/golf'
const golfPageDescription =
  'Spanish Trail Country Club private golf in Las Vegas: three 9-hole combinations (Sunrise, Lakes, Canyon) by Robert Trent Jones Jr., 120+ bunkers, and lakes and streams on all-grass terrain. Compare to public Las Vegas golf—then explore golf course homes for sale behind the guard gates with Dr. Jan Duffy.'

const golfWebPageSchema = createWebPageSchema({
  name: 'Spanish Trail Country Club Golf | Private Las Vegas 27-Hole Course',
  description: golfPageDescription,
  path: '/golf',
  extra: {
    about: {
      '@type': 'SportsActivityLocation',
      name: 'Spanish Trail Country Club Golf',
    },
  },
})

export const metadata: Metadata = {
  title: 'Spanish Trail Golf | Private Las Vegas Country Club | 27 Holes | Dr. Jan Duffy',
  description: golfPageDescription,
  alternates: { canonical: getCanonicalUrl('/golf') },
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
    title: 'Spanish Trail Golf Experience',
    description:
      'Discover the Sunrise, Lakes, and Canyon nines, practice facilities, and golf programming at Spanish Trail Country Club.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Golf',
        subtitle: '27-hole experience by Robert Trent Jones Jr.',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golf at Spanish Trail Country Club',
    description:
      'Explore Spanish Trail\'s 27 championship holes designed by Robert Trent Jones Jr.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Golf Club',
        subtitle: 'Sunrise - Lakes - Canyon nines',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const scorecard = [
  { combo: 'Sunrise - Lakes', par: '72', yardage: '6,873', rating: '73.1', slope: '137' },
  { combo: 'Lakes - Canyon', par: '72', yardage: '7,045', rating: '74.2', slope: '139' },
  { combo: 'Canyon - Sunrise', par: '72', yardage: '6,921', rating: '73.5', slope: '138' },
]

export default function GolfPage() {
  return (
    <SiteShell>
      <GolfHero />
      <RealScoutSection
        id="bhhs-listings"
        eyebrow="Golf Course Homes"
        title="Spanish Trail Residences with Fairway Views"
        description="Scroll current listings positioned along the Sunrise, Lakes, and Canyon nines. Adjust filters to target cart-path privacy, pool homes, or lock-and-leave villas."
        priceMin="700000"
        propertyTypes=",SFR"
      />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Golf' }]} />
        </div>
      </div>
      <GolfNarrativesSection />
      <CourseTour />
      <ExperienceDetails />
      <ScorecardSection />
      <GuestInformation />
      <GolfFAQSection />
      <Script id="golf-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(golfFaqSchema)}
      </Script>
      <Script id="golf-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(golfWebPageSchema)}
      </Script>
    </SiteShell>
  )
}

function GolfHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="golf-hero-heading"
    >
      <HeroBackground
        src={getSiteImageUrl('h1-golf-fairway')}
        alt="Spanish Trail Country Club private golf course fairways and greens, Las Vegas Nevada"
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/60 via-[#0f2b1e]/65 to-[#0f2b1e]/80"
        sizes="(max-width: 1024px) 100vw, 1280px"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background" />
      <div className="mx-auto max-w-5xl px-6 py-28 text-primary-foreground sm:py-40">
        <p className="text-xs uppercase tracking-[0.5em] text-accent">
          Golf at Spanish Trail
        </p>
        <h1
          id="golf-hero-heading"
          className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          Spanish Trail Homes on a Private 27-Hole Course
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground sm:text-lg">
          Golf is an amenity of Spanish Trail homes. Dr. Jan Duffy represents buyers and sellers of fairway and estate addresses here—not a valley-wide golf listing page. Robert Trent Jones Jr. designed the Sunrise, Lakes, and Canyon nines. Call (702) 766-3299 to tour.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button className="rounded-full px-7 py-3 text-xs uppercase tracking-[0.4em]" asChild>
            <Link href="/spanish-trail-homes-for-sale-las-vegas">View Spanish Trail homes</Link>
          </Button>
          <Button variant="outline" asChild className="rounded-full px-7 py-3 text-xs uppercase tracking-[0.3em] text-primary">
            <Link href="/contact">Book a home tour</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
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
      <SectionBanner headingId="course-tour-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getSiteImageUrl(course.imageId)}
                  alt={getAssetAlt(course.imageId)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
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
      <SectionBanner headingId="experience-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Practice &amp; Instruction
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
              copy: 'Member tournaments, ladies leagues, men\'s nights, and mixed events keep the calendar full.',
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

function GolfNarrativesSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="golf-narratives-heading">
      <SectionBanner headingId="golf-narratives-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Golf Insights</p>
          <h2 id="golf-narratives-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            How Spanish Trail elevates every round, every season
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            These narratives help prospective home buyers and members appreciate the depth of Spanish Trail&apos;s golf culture and how it enhances the value of living in the community.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {golfNarratives.map((topic) => (
            <article key={topic.title} className="space-y-6 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-8 shadow-lg shadow-primary/10">
              <CardVisual seed={String(topic.title)} />
              <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">
                {topic.title}
              </h3>
              {topic.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-[#372a20]/85">
                  {paragraph}
                </p>
              ))}
            </article>
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
      <SectionBanner headingId="scorecard-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

function GolfFAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="golf-faq-heading">
      <SectionBanner headingId="golf-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Golf FAQ</p>
          <h2 id="golf-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Common questions about Spanish Trail golf
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Information to help home buyers understand how golf membership works at Spanish Trail.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {golfFaq.map((item) => (
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

function GuestInformation() {
  return (
    <section
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="guest-info-heading"
    >
      <SectionBanner headingId="guest-info-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Guest Information
          </p>
          <h2
            id="guest-info-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Ready to buy or sell a Spanish Trail golf-course home?
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            The golf course was originally private but is now open for non-members to play as well as members. Guests can arrange tee times through the golf shop or be accompanied by a member. Please review pace-of-play expectations, dress code, and arrival instructions prior to your visit.
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
