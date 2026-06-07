import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { golfCourses } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HeroSearchWidget } from '@/components/hero-search-widget'

const golfNarratives = [
  {
    title: 'Course Conditions and Seasonal Strategy',
    paragraphs: [
      'Spanish Trail’s 27 holes reward players who understand how the desert seasons impact turf, wind, and shot selection. Overseed schedules typically wrap in early fall, delivering emerald-green fairways and receptive greens just in time for peak golf tourism. Winter mornings can be crisp, so members often schedule tee times mid-morning to catch warming sunlight while enjoying the dramatic contrast of snow-dusted Spring Mountains. Dr. Janet Duffy shares a monthly golf intelligence report outlining hole locations, slope speeds, and tournament calendars so buyers know exactly how the club plays across the year.',
      'During the summer, early tee times offer cooler temperatures and the best chance to experience the Sunrise nine’s signature water features without afternoon winds. Conditioning remains stellar thanks to expert agronomy teams, and Spanish Trail’s double-sided range stays open with misting fans and shaded hitting bays. Dr. Duffy connects new members to golf staff who manage private lockers, club storage, and caddie scheduling so their transition into club life is seamless.'
    ],
  },
  {
    title: 'Instruction, Technology, and Player Development',
    paragraphs: [
      'Spanish Trail Country Club invests continuously in player development. The Golf Learning Center features swing studios with Foresight GCQuad, BodiTrak pressure mats, and high-speed cameras for detailed analysis. PGA professionals design lesson series tailored to beginners, competitive amateurs, and juniors charting a path toward collegiate golf. Fitness trainers collaborate with instructors to build strength and flexibility programs that boost longevity on the course.',
      'Many of Dr. Duffy’s clients integrate these services into their weekly routine. She pairs newcomers with on-staff pros who match their learning style—whether they prefer analytical breakdowns, on-course coaching, or short-game immersion. Members also receive invites to fittings hosted by premium brands, ensuring equipment is dialed to their swing DNA and Spanish Trail’s unique course conditions.'
    ],
  },
  {
    title: 'Competitive Play and Social Traditions',
    paragraphs: [
      'Competition thrives at Spanish Trail. The Men’s Invitational draws players from across the West, while the Ladies Member-Guest showcases hospitality with themed décor, live music, and boutique gifting suites. Couples leagues, nine-and-dine events, and twilight shootouts fill the calendar, offering friendly formats for every skill level. Charity tournaments raise funds for local causes, combining golf with purpose and strengthening community bonds.',
      'Dr. Duffy helps clients map out the tournaments that align with their goals—whether they seek high-stakes competition or relaxed social play. She also highlights traditions like the annual Glow-Ball Classic and junior-parent scrambles that foster multigenerational memories. Knowing these rhythms allows buyers to evaluate how Spanish Trail’s golf culture complements their lifestyle before committing to membership.'
    ],
  },
  {
    title: 'Real Estate Synergy with the Golf Experience',
    paragraphs: [
      'Many Spanish Trail homes are designed with the golfer in mind: motor courts that accommodate cart parking, patios positioned for panoramic fairway views, and outdoor kitchens ideal for post-round gatherings. Some estates even feature putting greens and chipping complexes that mimic club conditions. Dr. Duffy curates home tours that showcase these amenities, explaining HOA guidelines for accessory structures, lighting, and landscaping that preserve sightlines and pace of play.',
      'For members who travel frequently, lock-and-leave villas near the Sunrise and Lakes practice facilities deliver ultimate convenience. Dr. Duffy evaluates each listing’s proximity to cart paths, starter huts, and halfway houses, ensuring her clients can maximize their time on the course. She also advises on noise considerations, premium pricing for double-fairway exposure, and property enhancements that resonate with fellow golf enthusiasts when it is time to resell.'
    ],
  },
]

const golfFaq = [
  {
    question: 'How do tee times work for members and their guests?',
    answer:
      'Members can book tee times up to seven days in advance using the Spanish Trail mobile app or by contacting the golf shop. Peak morning times typically fill first, especially on weekends and during major events. Dr. Janet Duffy shares best practices for coordinating guest play, including dress code guidelines, pace-of-play expectations, and gratuity norms for caddies and forecaddies.',
  },
  {
    question: 'Are there reciprocal privileges with other clubs?',
    answer:
      'Yes. Spanish Trail maintains relationships with select premier clubs across the United States, allowing members to request reciprocal tee times when traveling. Opportunities vary by season, so Dr. Duffy connects members with the golf staff to arrange advanced requests and provides insider tips on partner clubs that mirror Spanish Trail’s service standards.',
  },
  {
    question: 'What golf programs are available for juniors?',
    answer:
      'Junior golfers can enroll in seasonal academies, year-round development programs, and travel teams that compete across Nevada. Instruction emphasizes fundamentals, etiquette, and tournament preparation. Parents appreciate mentorship from PGA professionals and the supportive culture among junior members. Dr. Duffy supplies calendars, tuition details, and equipment recommendations tailored to each family’s goals.',
  },
  {
    question: 'Do Spanish Trail homes include golf memberships?',
    answer:
      'Golf memberships are independent of real estate purchases. However, some sellers choose to transfer or negotiate initiation fees within their contract. Dr. Duffy reviews each listing’s membership status, coordinates introductions to the membership office, and ensures buyers understand dues schedules before submitting offers.',
  },
  {
    question: 'What amenities support non-golfing family members?',
    answer:
      'Spanish Trail provides a full resort experience: fitness classes, spa services, tennis and pickleball courts, pools, and a vibrant social calendar. Non-golfers often accompany players to the clubhouse for brunch, wellness workshops, or live entertainment. Dr. Duffy helps families balance membership categories so every household member enjoys value, regardless of their time on the course.',
  },
]


const pageUrl = 'https://www.spanishtrailhomes.com/golf'

export const metadata: Metadata = {
  title: 'Golf Experience | Spanish Trail Country Club',
  description:
    'Tour the three 9-hole courses designed by Robert Trent Jones Jr., review the scorecard, and plan your next round at Spanish Trail Country Club.',
  alternates: { canonical: '/golf' },
  openGraph: {
    url: pageUrl,
    title: 'Spanish Trail Golf Experience',
    description:
      'Discover the Sunrise, Lakes, and Canyon nines, practice facilities, and golf programming with Dr. Janet Duffy.',
    images: [`${pageUrl}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golf at Spanish Trail Country Club',
    description:
      'Plan your next round at Spanish Trail’s 27 championship holes with insights from Dr. Janet Duffy.',
    images: [`${pageUrl}/og-image.png`],
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
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Golf' }]} />
        </div>
      </div>
      <RealScoutSection
        id="golf-course-listings"
        eyebrow="Golf Course Homes"
        title="Spanish Trail Residences with Fairway Views"
        description="Scroll current listings positioned along the Sunrise, Lakes, and Canyon nines. Adjust filters to target cart-path privacy, pool homes, or lock-and-leave villas."
        priceMin="700000"
        propertyTypes=",SFR"
      />
      <GolfNarrativesSection />
      <CourseTour />
      <ExperienceDetails />
      <ScorecardSection />
      <GuestInformation />
      <GolfFAQSection />
    </SiteShell>
  )
}

function GolfHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="golf-hero-heading"
    >
      <div className="absolute inset-0 -z-10 bg-cover bg-center golf-hero-background" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background" />
      <div className="mx-auto max-w-5xl px-6 py-28 text-primary-foreground sm:py-40">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Golf at Spanish Trail
        </p>
        <h1
          id="golf-hero-heading"
          className="mt-5 font-(--font-playfair) text-4xl leading-tight sm:text-5xl lg:text-6xl"
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
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">
              Course Tour
            </p>
            <h2
              id="course-tour-heading"
              className="mt-3 font-(--font-playfair) text-3xl text-foreground sm:text-4xl"
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
                className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 golf-course-card"
                style={{ backgroundImage: `url('${course.image}')` }}
                aria-hidden
              />
              <div className="space-y-3 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-secondary">
                  {course.yardage}
                </p>
                <h3 className="font-(--font-playfair) text-2xl text-foreground">
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
            className="font-(--font-playfair) text-3xl text-foreground sm:text-4xl"
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

function GolfNarrativesSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="golf-narratives-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Golf Insights</p>
          <h2 id="golf-narratives-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
            How Spanish Trail elevates every round, every season
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Dr. Janet Duffy partners with the golf team to deliver real-time updates on course conditions, instruction opportunities, and lifestyle offerings. These narratives help prospective members and homeowners appreciate the depth of Spanish Trail’s golf culture.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {golfNarratives.map((topic) => (
            <article key={topic.title} className="space-y-6 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-8 shadow-lg shadow-primary/10">
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
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Scorecard
          </p>
          <h2
            id="scorecard-heading"
            className="font-(--font-playfair) text-3xl text-foreground sm:text-4xl"
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
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Golf FAQ</p>
          <h2 id="golf-faq-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
            Essential answers for future Spanish Trail golfers
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Whether you are joining as a single player, a couple, or a family, these insights highlight the details that make Spanish Trail a premier golf destination in Las Vegas.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {golfFaq.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
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
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Guest Information
          </p>
          <h2
            id="guest-info-heading"
            className="font-(--font-playfair) text-3xl text-foreground sm:text-4xl"
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

