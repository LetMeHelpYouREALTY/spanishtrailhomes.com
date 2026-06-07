import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'

const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-private-golf-course-homes'

export const metadata: Metadata = {
  title: 'Private Golf Course Homes Spanish Trail | Dr. Jan Duffy',
  description:
    'Secure private golf course homes in Spanish Trail with Dr. Jan Duffy. Explore memberships, course-front estates, and concierge buyer services.',
  alternates: {
    canonical: '/spanish-trail-private-golf-course-homes',
  },
  openGraph: {
    url: pageUrl,
    title: 'Private Golf Course Homes in Spanish Trail',
    description:
      'Robert Trent Jones Jr. golf, private club perks, and curated course-front homes in Spanish Trail. Guided by Dr. Jan Duffy.',
    images: [`${pageUrl}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Private Golf Homes | Dr. Jan Duffy',
    description:
      'Tour Spanish Trail’s private golf course residences, memberships, and lifestyle advantages with Dr. Jan Duffy.',
    images: [`${pageUrl}/og-image.png`],
  },
}

const faqContent = [
  {
    question: 'What makes Spanish Trail golf truly private?',
    answer:
      'Spanish Trail is a member-owned club featuring a Robert Trent Jones Jr. 27-hole course. Tee times are reserved for members and their guests, and the practice facilities, tournaments, and lessons are exclusive to the club. Homeownership unlocks direct cart paths, member socials, and curated golf services that public courses cannot match.',
  },
  {
    question: 'How much does golf membership cost?',
    answer:
      'Full Golf memberships currently require a one-time initiation (mid five figures) with monthly dues in the $1,200 range, while Young Executive and Lifestyle memberships have reduced rates tailored to age or interests. Fees are subject to change—I confirm current pricing and payment plans before you write an offer.',
  },
  {
    question: 'Do all homes have direct cart access?',
    answer:
      'Most course-front homes in the Estates, Links, and Villas have dedicated cart storage or garage space. Some interior lots require a short drive to the clubhouse. During tours, I highlight cart path access, storage solutions, and HOA rules governing golf carts so everything is smooth on day one.',
  },
]


export default function PrivateGolfCourseHomesPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-[#f8f2e7]">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Private Golf Course Homes' },
            ]}
          />
        </div>
      </div>
      <CourseOverviewSection />
      <RealScoutSection
        id="private-golf-course-homes"
        eyebrow="Golf Course Listings"
        title="Spanish Trail private golf homes available now"
        description="Review active and private-release homes with direct golf access, stunning views, and club proximity."
        priceMin="1200000"
        propertyTypes=",SFR"
      />
      <MembershipSection />
      <ViewSection />
      <LifestyleSection />
      <RenovationSection />
      <BuyerProcessSection />
      <FAQSection />
      <CTASection />
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="private-golf-hero-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="private-golf-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Private Golf Course Homes Spanish Trail
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Spanish Trail’s 27-hole Robert Trent Jones Jr. course delivers private fairways, sculpted water features, and a golf culture cherished by members for nearly four decades. I partner with buyers to secure course-front estates, villas, and custom homes that align with their play frequency, membership goals, and investment strategy.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Plan your golf home tour</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#private-golf-course-homes">Browse course homes</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function CourseOverviewSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="course-overview-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="course-overview-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          The anatomy of Spanish Trail’s 27-hole private golf experience
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Spanish Trail comprises three nine-hole rotations—Sunrise, Lakes, and Canyon—each offering unique challenges and scenic backdrops. Living along the course means more than a view: it’s a lifestyle anchored by warm service, expert maintenance, and a vibrant golf calendar.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Sunrise nine',
              detail:
                'Gentle morning light across rolling fairways. favored by homeowners wanting peaceful dawn tee times and minimal cart traffic near patios.',
            },
            {
              title: 'Lakes nine',
              detail:
                'Signature water features, dramatic bunkering, and twilight silhouettes that set the stage for entertaining. Homes here command premium pricing.',
            },
            {
              title: 'Canyon nine',
              detail:
                'Elevated tee boxes and views toward Red Rock Canyon. Competitive golfers enjoy challenging play and strategic shot-making.',
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

function MembershipSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="membership-overview-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="membership-overview-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Membership categories tailored to your golf lifestyle
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Whether you play multiple times a week or prefer social access, Spanish Trail’s membership options align with your schedule. I connect you with membership ambassadors and current members so you understand the culture before committing.</p>
          <div className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
            <p>
              • <strong>Full Golf:</strong> Unlimited tee times, tournament eligibility, locker and bag storage, and reciprocal privileges at select Robert Trent Jones Jr. clubs.</p>
            <p>
              • <strong>Young Executive:</strong> Designed for members under 40 with reduced initiation fees. Access to the same golf benefits with a community of professionals balancing work and play.</p>
            <p>
              • <strong>Lifestyle:</strong> Social, racquet, pool, and fitness access for homeowners who may golf occasionally but want to plug into the club’s social calendar.</p>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">
            Membership concierge includes</h3>
          <ul className="space-y-3">
            <li>• Initiation fee updates and payment structure guidance</li>
            <li>• Introductory rounds and golf shop fittings</li>
            <li>• Family program overview (junior golf, camps, clinics)</li>
            <li>• Event calendar briefings so you plan seasons effectively</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function ViewSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="view-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="view-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Maximizing views and privacy on the course</h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Course-front homes need the right balance of view, distance from tee boxes, and landscaping. I evaluate each property for sun orientation, golfer sightlines, and HOA-approved screening options to keep your patio restful.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Prime vantage points',
              detail:
                'Corner lots overlooking water and green complexes deliver wow factor. We assess resale demand to justify premiums and ensure appraisal support.',
            },
            {
              title: 'Privacy strategies',
              detail:
                'Tiered landscaping, modern railings, and retractable shades maintain privacy without blocking the view. I connect you with designers experienced in course setbacks.',
            },
            {
              title: 'Sound & lighting',
              detail:
                'Custom audio and lighting design keep evening gatherings intimate while respecting club quiet hours and HOA guidelines.',
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

function LifestyleSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="golf-lifestyle-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="golf-lifestyle-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Living the Spanish Trail golf lifestyle</h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Ownership goes beyond tee times. Residents weave golf into wellness, social events, and daily routines. I help you experience the rhythm before you close.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Golf academy',
              detail:
                'Professional instructors offer swing analysis, short-game clinics, and junior programs. Members can book TrackMan sessions and personalized fittings.',
            },
            {
              title: 'Racquet & wellness',
              detail:
                'Tennis and pickleball complexes, renovated fitness center, and group classes support cross-training for golfers. Spa services help with recovery days.',
            },
            {
              title: 'Social calendar',
              detail:
                'Member tournaments, bourbon dinners, and couples’ events keep the club buzzing. Holiday galas and charity tournaments bring the community together.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function RenovationSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="renovation-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="renovation-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Renovating course-front homes with HOA confidence</h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Many buyers elevate interiors or outdoor living after closing. I guide you through Architectural Review Committee processes and introduce trusted vendors.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'Interior priorities',
              points: [
                'Open-concept kitchens aligned with golf course views',
                'Primary suites with spa bathrooms and retreat lounges',
                'Dedicated golf simulator or wellness rooms',
                'Wine walls and bar lounges for 19th-hole entertaining',
              ],
            },
            {
              title: 'Outdoor enhancements',
              points: [
                'Infinity-edge pools and sunken fire lounges',
                'Putting greens and chipping complexes',
                'Outdoor kitchens with pizza ovens and teppanyaki grills',
                'Retractable shades, heaters, and misting for year-round comfort',
              ],
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
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

function BuyerProcessSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="buyer-process-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="buyer-process-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Step-by-step path to owning a Spanish Trail golf home
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: '1. Vision & data session',
              detail:
                'We define preferred nine, view desires, renovation plans, and membership tier. You receive a comprehensive dossier with comps, club dues, and upcoming listings.',
            },
            {
              title: '2. Immersive tours',
              detail:
                'Experience homes during prime lighting, meet golf staff, and evaluate cart storage. Vendor walk-throughs clarify upgrades before offers.',
            },
            {
              title: '3. Closing & onboarding',
              detail:
                'I negotiate favorable terms, manage inspections, and coordinate membership applications so you start enjoying the course immediately after closing.',
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
    <section className="bg-white py-16 sm:py-20" aria-labelledby="private-golf-faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="private-golf-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Spanish Trail private golf FAQs
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
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="private-golf-cta-heading">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 id="private-golf-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Ready to live on Spanish Trail’s private fairways?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Call <Link href="tel:17025001955" className="underline-offset-4 hover:underline">702-500-1955</Link>, text 702-222-1964, or email <Link href="mailto:jduffy@bhhsnv.com" className="underline-offset-4 hover:underline">jduffy@bhhsnv.com</Link>. I’ll curate course-front opportunities, membership insights, and a closing roadmap tailored to your handicap and lifestyle.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Connect with Dr. Jan</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="#private-golf-course-homes">Explore listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
