import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { createOgImageUrl } from '@/lib/structuredData'

const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-guard-gated-golf-homes'

export const metadata: Metadata = {
  title: 'Guard-Gated Golf Community Homes in Spanish Trail | Dr. Janet Duffy',
  description:
    'Tour guard-gated Spanish Trail golf homes with Dr. Janet Duffy. Explore 24/7 security, golf membership tiers, villa vs. estate enclaves, and curated buyer strategies.',
  alternates: {
    canonical: '/spanish-trail-guard-gated-golf-homes',
  },
  openGraph: {
    url: pageUrl,
    title: 'Guard-Gated Golf Community Homes in Spanish Trail',
    description:
      'Understand Spanish Trail guard gates, golf lifestyle, and vetted listings with Dr. Janet Duffy—Las Vegas luxury real estate advisor.',
    images: [
      createOgImageUrl({
        title: 'Guard-Gated Golf Homes',
        subtitle: 'Spanish Trail security & fairway living',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guard-Gated Golf Homes | Spanish Trail',
    description:
      "Security walkthroughs, golf privileges, and premium listings in Spanish Trail's guard-gated golf community. Work with Dr. Janet Duffy.",
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Guard-Gated Homes',
        subtitle: 'Security, golf, and concierge guidance',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const faqContent = [
  {
    question: 'How secure are Spanish Trail’s guard gates?',
    answer:
      'Spanish Trail operates multiple staffed entrances with overlapping patrols. The main gate off Tropicana manages visitor vetting, while resident-only gates on Hacienda and Rainbow expedite daily commutes. Patrol vehicles circulate 24/7, logging plate numbers and assisting with welfare checks, property inspections, and emergency coordination. For buyers, I arrange gatehouse tours so you can see procedures firsthand.',
  },
  {
    question: 'Do I need a club membership to own a guard-gated golf home?',
    answer:
      'Club membership is optional but highly complementary. Buyers focused on golf typically select Full Golf or Young Executive categories; those seeking social access often join the Lifestyle plan for fitness, dining, and tennis privileges. I outline initiation fees, monthly dues, and transfer options so you can decide the right mix of security and club access for your household.',
  },
  {
    question: 'Which enclaves inside the gates feel most private?',
    answer:
      'For maximum privacy, the double-gated Estates and Estates West feature secondary controlled access and larger setbacks. The Islands and Courtyards blend water features with limited-through streets. Villas and Links homes are within quick reach of the clubhouse yet still benefit from roving patrols and controlled visitor logs. During tours, we evaluate street flow, gate proximity, and sightlines to align with your comfort level.',
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

export default function GuardGatedGolfHomesPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Guard-Gated Golf Homes' },
            ]}
          />
        </div>
      </div>
      <SecuritySection />
      <RealScoutSection
        id="guard-gated-golf-listings"
        eyebrow="Latest Listings"
        title="Guard-gated golf homes ready for private tours"
        description="See current Spanish Trail villas, semi-custom homes, and estates with 24/7 manned gate access."
        priceMin="600000"
        propertyTypes=",SFR,CONDO"
      />
      <GateComparisonSection />
      <LifestyleSection />
      <BuyerStrategySection />
      <MembershipSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTASection />
      <Script id="guard-gated-golf-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="guard-gated-hero-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="guard-gated-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Guard-Gated Golf Community Homes in Spanish Trail
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Spanish Trail’s layered security—maned entrances, resident-only lanes, and continuous patrols—creates a sanctuary just seven miles west of the Strip. The 27-hole Robert Trent Jones Jr. course winds through twelve enclaves, each with its own balance of privacy, golf access, and club proximity. From the moment you arrive at the Tropicana gatehouse, concierge-level service sets the tone for life inside the guard gates.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Arrange a gate preview</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#guard-gated-golf-listings">Browse secure listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function SecuritySection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="security-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="security-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          What 24/7 Spanish Trail security looks like in practice
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Every entrance into Spanish Trail is controlled by uniformed security professionals trained in guest verification, emergency response, and resident etiquette. I invite clients to experience the gatehouse brief so you can see how check-ins, vendor lists, and community policies work long before making an offer.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Primary Tropicana gate',
              detail:
                'The signature arrival point with full-service concierge functions. Staff verifies drivers licenses, scans QR codes, and notifies homeowners before visitors proceed.',
            },
            {
              title: 'Resident-only entrances',
              detail:
                'Rainbow and Hacienda portals feature RFID transponders and gated resident lanes so owners bypass visitor queues while patrol teams monitor outbound traffic.',
            },
            {
              title: 'Roving patrol network',
              detail:
                'Mobile units document rounds, check perimeter walls, and conduct welfare visits on request. Night patrols coordinate lighting reports and vacation-watch services.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#372a20]/80">
          Buyers frequently ask about guard response times, guest policies, and package deliveries. I compile answers from the security director and provide updated manuals covering resident protocols, patrol coverage maps, and emergency contact procedures.
        </p>
      </div>
    </section>
  )
}

function GateComparisonSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="gate-comparison-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <h2 id="gate-comparison-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Choosing the right enclave for your guard-gated lifestyle
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Spanish Trail’s enclaves feel distinct, yet they all connect through the golf course, walking trails, and clubhouse programming. We evaluate three dimensions during tours: security layering, golf adjacency, and daily convenience. The matrix below highlights how popular neighborhoods compare.
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
            <p>
              • <strong>Estates & Estates West:</strong> Double-gated, oversized lots, and tailored patrol checks. Ideal for collectors who need garage space and homeowners hosting large events.
            </p>
            <p>
              • <strong>The Villas & Links:</strong> Direct cart access to the clubhouse plus HOA-managed exteriors—perfect for lock-and-leave second homes while still maintaining strong guard presence.
            </p>
            <p>
              • <strong>Springs, Gardens, and Courtyards:</strong> Serene cul-de-sacs, lush landscaping, and close proximity to playgrounds and fitness paths. These pockets attract families valuing community connection within the gates.
            </p>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">
            Decision checklist for buyers
          </h3>
          <ul className="space-y-3">
            <li>• How often do you host guests, vendors, or deliveries?</li>
            <li>• Do you prefer golf course frontage, water features, or city views?</li>
            <li>• Will you reside full-time or seasonally?</li>
            <li>• What proximity to the clubhouse, fitness center, or guard gates feels ideal?</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function LifestyleSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="lifestyle-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="lifestyle-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Guard-gated living meets championship golf and wellness
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Spanish Trail residents enjoy a seamless blend of security and resort-level amenities. After clearing the gates, you are minutes from tennis clinics, pilates studios, saltwater pools, and three nine-hole courses. The staff knows homeowners by name, coordinating everything from airport transfers to wine tastings.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Golf lifestyle',
              detail:
                'Three distinct nines—Canyon, Lakes, and Sunrise—accommodate competitive leagues and social play. Members store clubs onsite and schedule lessons with PGA professionals who specialize in course management in breezy desert conditions.',
            },
            {
              title: 'Wellness & racquet sports',
              detail:
                'The 50,000-square-foot clubhouse includes a cardio theater, strength studios, steam rooms, and saunas. Tennis and pickleball courts host clinics led by nationally ranked pros, ideal for active homeowners who value structured programming.',
            },
            {
              title: 'Dining & social calendar',
              detail:
                'From Chef’s Table dinners to bourbon tastings and holiday galas, the club’s culinary team treats members like resort guests. Private dining rooms support executive meetings while patios overlook tranquil water features.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#372a20]/80">
          Residents describe Spanish Trail as a “city within a city”—secure enough for celebrities seeking anonymity yet welcoming to families who appreciate community-driven programming. I ensure buyers meet membership directors, golf pros, and lifestyle managers during discovery visits so you can envision daily life beyond the gates.
        </p>
      </div>
    </section>
  )
}

function BuyerStrategySection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="strategy-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="strategy-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Buyer strategy: how we secure the right home behind the gates
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Guard-gated golf homes demand thoughtful preparation. Inventory remains limited, and the best options move fast when priced with updated finishes or prime views. Here’s how my concierge approach keeps you ahead of every release.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: '1. Intelligence briefing',
              detail:
                'We open with a data-rich meeting covering sale velocity by enclave, price-per-square-foot differentials, and security nuances. You receive a weekly dashboard summarizing new listings, pendings, and off-market whispers.',
            },
            {
              title: '2. Immersive tours',
              detail:
                'I coordinate guard clearance, stage back-to-back showings, and schedule separate visits for twilight and morning to evaluate privacy, traffic, and course activity. Vendor walk-throughs allow you to understand renovation scope before making decisions.',
            },
            {
              title: '3. Precision offers',
              detail:
                'With every submission, we highlight financial strength, appreciation for gate procedures, and readiness to align with membership requirements. Offers frequently include video introductions or club referrals to build rapport with sellers.',
            },
          ].map((item) => (
            <article key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#372a20]/80">
          The result: buyers secure Spanish Trail homes without overpaying for fear of missing out. My recent clients closed on a Lakes course villa by leveraging preferred lender approvals, a flexible rent-back, and a personal note describing their commitment to the community. Those touches matter in a tight guard-gated market.
        </p>
      </div>
    </section>
  )
}

function MembershipSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="membership-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="membership-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Aligning guard-gated living with Spanish Trail membership options
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Homeownership inside Spanish Trail does not require club membership, yet most buyers opt for at least Lifestyle access to integrate with neighbors. Understanding dues structure, cart fees, and capital plans is critical—we explore the numbers together before you submit an offer.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'Full Golf & Young Executive',
              points: [
                'Unlimited golf with advance tee-time access on all three nines',
                'Locker, bag storage, and member tournament invitations',
                'Reciprocal play at select Robert Trent Jones Jr. clubs across the West',
              ],
            },
            {
              title: 'Lifestyle & Corporate',
              points: [
                'Access to fitness center, racquet sports, pools, and dining venues',
                'Preferred pricing on private events and spa treatments',
                'Great for homeowners hosting clients or managing multi-state schedules',
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
        <p className="mt-8 text-sm leading-relaxed text-[#372a20]/80">
          I coordinate introductions with membership directors so you can review initiation waitlists, sponsorship requirements, and seasonal promotions. Families relocating from California appreciate the ability to join before moving, ensuring a seamless transition once the guard gate recognizes your credentials.
        </p>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <h2 id="testimonials-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Guard-gated buyers on working with Dr. Jan
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[{
            quote:
              '“Jan knew every guard captain by name and coordinated our after-hours tour so we could experience the community exactly how we’ll use it. She negotiated exterior upgrades and ensured staff had our profiles before closing.”',
            author: 'N. & L. Carter — Estates West buyers',
          },
          {
            quote:
              '“We needed a secure second home with quick airport access. Jan measured drive times from each gate, introduced us to the membership director, and made sure our privacy requests were honored. The process was turnkey.”',
            author: 'P. Ramirez — Links townhome owner',
          }].map((item) => (
            <blockquote key={item.author} className="space-y-4 rounded-3xl border border-[#1f4a35] bg-[#143927] p-6 text-sm leading-relaxed text-[#f8f5ef]/85">
              <p>“{item.quote.replace(/“|”/g, '')}”</p>
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
    <section className="bg-white py-16 sm:py-20" aria-labelledby="guard-gated-faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="guard-gated-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Guard-gated Spanish Trail FAQs
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

function ContactCTASection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="guard-gated-contact-heading">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 id="guard-gated-contact-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Ready to experience Spanish Trail security firsthand?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Reach Dr. Janet Duffy directly at <Link href="tel:17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link> for call or text support. Request a guard-gated tour itinerary, golf pairing, or membership briefing tailored to your moving timeline.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Connect with Dr. Janet</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="#guard-gated-golf-listings">See listings</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}
