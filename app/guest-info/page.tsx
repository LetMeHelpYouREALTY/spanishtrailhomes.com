import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { HeroBackground } from '@/components/hero-background'
import { localEssentials } from '@/lib/spanishTrailContent'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner, CardVisual } from '@/components/heading-media'
import { getSiteImageUrl } from '@/lib/cloudflare-images'


const guestNarratives = [
  {
    title: 'Preparing for Arrival at Spanish Trail',
    paragraphs: [
      'Guests begin their Spanish Trail experience at the gated entry, where security teams confirm host details and provide directions to the clubhouse. Plan to arrive 20 minutes prior to your reservation to allow for valet service and a brief orientation. Dr. Jan Duffy recommends sharing your license plate information in advance and highlighting any accessibility needs so the concierge team can prepare assistance. This thoughtful approach ensures every arrival feels relaxed and tailored to your visit.',
      'If you are considering Spanish Trail homes while visiting, Dr. Duffy can coordinate property previews that align with your itinerary. Many guests schedule tours between brunch and afternoon tee times, giving them an authentic feel for daily life within the community.'
    ],
  },
  {
    title: 'Clubhouse Etiquette and Comfort',
    paragraphs: [
      'Spanish Trail maintains a refined yet welcoming atmosphere. Collared shirts and tailored attire are requested in most dining venues, while denim is acceptable when free of distressing. Mobile devices should remain on silent indoors, and voice calls are best taken in designated lounges or on the terrace. Locker room hosts provide day lockers, shoe care, and complimentary amenities, allowing guests to freshen up before or after activities.',
      'Dr. Duffy encourages guests to introduce themselves to staff—bartenders, valets, and concierges pride themselves on attentive service. Mention dietary preferences and beverage favorites so the culinary team can personalize your experience, whether you are enjoying a casual lunch or a multi-course tasting.'
    ],
  },
  {
    title: 'Exploring Spanish Trail Amenities',
    paragraphs: [
      'Beyond golf, visitors can schedule time at the fitness pavilion, tennis complex, or resort-style pools. The pro shop offers merchandise from top designers, and spa providers deliver revitalizing treatments ranging from deep-tissue massage to post-round recovery sessions. Families appreciate children’s programming and the game lounge, which keeps younger guests entertained while adults socialize nearby.',
      'For extended stays, Dr. Duffy curates off-property excursions that complement the Spanish Trail experience—think reserved seating at Allegiant Stadium events, culinary tours of Chinatown, or sunset hikes at Red Rock Canyon. She also recommends Spanish Trail homes that feature guest casitas or lock-off suites ideal for hosting friends and relatives.'
    ],
  },
  {
    title: 'Transitioning from Guest to Resident',
    paragraphs: [
      'Many visitors fall in love with Spanish Trail homes during their stay. Dr. Duffy streamlines the transition by offering real estate consultations, outlining membership pathways, and coordinating financing introductions. She highlights listings that mirror the spaces guests enjoyed most—golf villas near the clubhouse, estate homes with grand entertaining rooms, or villas tucked inside secondary gates for lock-and-leave convenience.',
      'Her concierge team also connects newcomers with trusted service providers—interior designers, education consultants, and relocation specialists—so the move feels effortless. By the time guests receive their keys, they already feel like part of the Spanish Trail community.'
    ],
  },
]

const guestFaq = [
  {
    question: 'What identification should I bring to the gatehouse?',
    answer:
      'A government-issued ID is required for every guest. Provide your host’s name and event details to gate staff, who will grant access and guide you toward valet. Sharing your arrival time with the concierge ensures a streamlined check-in.',
  },
  {
    question: 'Is there a dress code for dining and clubhouse areas?',
    answer:
      'Smart casual attire is recommended throughout the clubhouse. Collared shirts, blouses, and tailored pants or skirts keep the atmosphere refined. Denim without distressing is acceptable in casual dining spaces. Athletic wear is welcomed in the fitness pavilion and pool deck.',
  },
  {
    question: 'Can guests access the golf course without a member present?',
    answer:
      'A member must accompany or sponsor all golf play. Dr. Duffy can arrange introductions to members or the golf shop if you are exploring Spanish Trail membership. She also provides guidance on fees, rental clubs, and caddie availability.',
  },
  {
    question: 'Where should rideshares pick up and drop off?',
    answer:
      'Rideshares should check in at the gatehouse, then proceed to the clubhouse valet circle for drop-off and pick-up. If you are staying at a Spanish Trail home, confirm the exact address and gate instructions with your host.',
  },
  {
    question: 'How do I schedule a property tour during my visit?',
    answer:
      'Reach out to Dr. Jan Duffy at (702) 766-3299 or via the concierge team. She will tailor a tour around your schedule, highlighting Spanish Trail homes that match your lifestyle. Expect curated packets with market data, neighborhood insights, and membership information to support your decision-making.',
  },
]

const guestFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: guestFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const pageUrl = 'https://www.spanishtrailhomes.com/guest-info'
const guestInfoPageDescription =
  'Plan your visit to Spanish Trail Country Club. Review directions, etiquette, locker access, and concierge contact details.'

const guestInfoWebPageSchema = createWebPageSchema({
  name: 'Guest Information | Spanish Trail Country Club',
  description: guestInfoPageDescription,
  path: '/guest-info',
  extra: {
    about: {
      '@type': 'Place',
      name: 'Spanish Trail Country Club',
    },
  },
})

export const metadata: Metadata = {
  title: 'Guest Information | Spanish Trail Country Club',
  description: guestInfoPageDescription,
  alternates: { canonical: getCanonicalUrl('/guest-info') },
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
    title: 'Guest Guide | Spanish Trail Country Club',
    description:
      'Access directions, arrival tips, and concierge support for your visit to Spanish Trail Country Club.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Guest Guide',
        subtitle: 'Arrival tips, concierge contacts, club etiquette',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guest Information | Spanish Trail Country Club',
    description:
      'Review arrival instructions, etiquette, and concierge contacts before visiting Spanish Trail Country Club.',
    images: [
      createOgImageUrl({
        title: 'Plan Your Spanish Trail Visit',
        subtitle: 'Concierge support & guest essentials',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function GuestInfoPage() {
  return (
    <SiteShell>
      <GuestHero />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guest Information' }]} />
        </div>
      </div>
      <RealScoutSection
        id="guest-info-listings"
        eyebrow="Plan Your Stay"
        title="Spanish Trail Homes Available for Your Next Visit"
        description="Browse current inventory to extend your connection with the community—perfect for guests exploring membership or long-term stays."
        priceMin="500000"
        propertyTypes=",SFR,CONDO"
      />
      <GuestNarrativesSection />
      <DirectionsSection />
      <EtiquetteSection />
      <ArrivalSection />
      <LocalEssentialsSection />
      <ContactSection />
      <GuestFAQSection />
      <Script id="guest-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(guestFaqSchema)}
      </Script>
      <Script id="guest-info-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(guestInfoWebPageSchema)}
      </Script>
    </SiteShell>
  )
}

function GuestHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="guest-hero-heading"
    >
      <HeroBackground
        src={getSiteImageUrl('h2-guest-casita')}
        alt="Spanish Trail Country Club guest information and directions in Las Vegas 89113"
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/55 via-[#0f2b1e]/65 to-[#0f2b1e]/80"
        sizes="(max-width: 1024px) 100vw, 1280px"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background" />
      <div className="mx-auto max-w-5xl px-6 py-28 text-primary-foreground sm:py-40">
        <p className="text-xs uppercase tracking-[0.5em] text-accent">
          Guest Guide
        </p>
        <h1
          id="guest-hero-heading"
          className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          Tour Spanish Trail Homes | Gate Access and Directions
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground sm:text-lg">
          Dr. Jan Duffy clears the guard gate for private home tours. Call (702) 766-3299. 5050 Spanish Trail Ln, Las Vegas, NV 89113.
        </p>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function DirectionsSection() {
  return (
    <section
      id="map"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="directions-heading"
    >
      <SectionBanner headingId="directions-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Directions
          </p>
          <h2
            id="directions-heading"
          className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Find your way to our private entrance.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail Country Club is located just six miles west of the Las
            Vegas Strip within the gated Spanish Trail community. Please check in
            at the security gate and inform the attendant of your host or event.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>5050 Spanish Trail Ln, Las Vegas, NV 89113</p>
            <p>Gate access available via Tropicana Ave. or Hacienda Ave.</p>
            <p>Allow extra travel time during peak weekend hours.</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-lg">
          <iframe
            title="Spanish Trail Country Club Map - 5050 Spanish Trail Ln, Las Vegas, NV 89113"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1155408815076!2d-115.28609452341818!3d36.10914500736459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf27532cd0f3%3A0xba327d02c4e3709e!2sSpanish%20Trail%20Country%20Club!5e0!3m2!1sen!2sus!4v1731191452004!5m2!1sen!2sus"
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

function GuestNarrativesSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="guest-narratives-heading">
      <SectionBanner headingId="guest-narratives-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Visitor Experience</p>
        <h2 id="guest-narratives-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Make the most of your time inside Spanish Trail Country Club
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            These briefings from Dr. Jan Duffy help guests navigate arrival protocols, clubhouse etiquette, and amenity access. Use them to design an itinerary that feels effortless and luxurious.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {guestNarratives.map((topic) => (
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

function EtiquetteSection() {
  return (
    <section
      id="etiquette"
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="etiquette-heading"
    >
      <SectionBanner headingId="etiquette-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Club Etiquette
          </p>
          <h2
            id="etiquette-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            A few notes to ensure every visit is exceptional.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail maintains a refined yet relaxed atmosphere. We kindly ask
            guests to observe the guidelines below throughout the clubhouse and
            golf facilities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Dress Code',
              copy: 'Collared shirts and tailored pants or golf shorts for men. Comparable attire for women. Denim is permitted in clubhouse casual areas when neat and without distressing.',
            },
            {
              title: 'Mobile Devices',
              copy: 'Please silence devices indoors. Discreet usage is permitted; voice calls should be taken in designated lounges or outdoors.',
            },
            {
              title: 'Pace of Play',
              copy: 'Maintain a four-hour round. Allow faster groups to play through and repair ball marks and divots.',
            },
            {
              title: 'Tipping',
              copy: 'Gratuities for valet, locker room, and service staff are appreciated and may be charged to your host member when approved.',
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

function ArrivalSection() {
  return (
    <section
      className="bg-background py-20 sm:py-24"
      aria-labelledby="arrival-heading"
    >
      <SectionBanner headingId="arrival-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Arrival & Amenities
          </p>
          <h2
            id="arrival-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Valet, locker rooms, and on-site services.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Complimentary valet parking is available at the clubhouse entrance. Our
            locker attendants will provide day lockers, shoe care, and fresh towels.
            Spa services and retail offerings are available upon request.
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>• Check-in with reception 20 minutes prior to your reservation.</p>
            <p>• Golf guests receive bag tags and cart staging assistance.</p>
            <p>• Dining reservations are recommended for dinner service.</p>
          </div>
        </div>

        <div
          className="h-full rounded-3xl border border-border/60 bg-cover bg-center shadow-lg guest-arrival-background"
          role="img"
          aria-label="Clubhouse interior at Spanish Trail Country Club"
        />
      </div>
    </section>
  )
}

function LocalEssentialsSection() {
  return (
    <section
      id="local-essentials"
      className="bg-[#f8f2e7] py-20 sm:py-24"
      aria-labelledby="local-essentials-heading"
    >
      <SectionBanner headingId="local-essentials-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Beyond the gates</p>
          <h2
            id="local-essentials-heading"
            className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl"
          >
            Everyday essentials within minutes
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Here’s where our members dine, study, and recharge between tee times. Use this shortlist to plan your visit or to
            imagine life as a future Spanish Trail homeowner.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {localEssentials.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">{section.title}</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#372a20]/85">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="guest-contact-heading"
    >
      <SectionBanner headingId="guest-contact-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Concierge
        </p>
        <h2
          id="guest-contact-heading"
          className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
        >
          We are here to assist with every detail.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          For questions about visiting Spanish Trail, scheduling a tour, or coordinating with the club, contact Dr. Jan Duffy at{' '}
          <Link href="tel:+17027663299" className="text-primary underline-offset-4 hover:underline">
            (702) 766-3299
          </Link>{' '}
          or{' '}
          <Link
            href="mailto:DrDuffySells@SpanishTrailHomes.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            DrDuffySells@SpanishTrailHomes.com
          </Link>
          .
        </p>

        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-left shadow-lg sm:grid-cols-2 sm:p-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="host" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Host Member
            </label>
            <input
              id="host"
              name="host"
              type="text"
              placeholder="Member Name"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="visitDate" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Visit Date
            </label>
            <input
              id="visitDate"
              name="visitDate"
              type="date"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-2">
            <label htmlFor="requests" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Special Requests
            </label>
            <textarea
              id="requests"
              name="requests"
              rows={4}
              placeholder="Share dietary preferences, accessibility needs, or celebration details."
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="sm:col-span-2">
            <Button className="w-full rounded-full py-3 text-xs uppercase tracking-[0.4em]">
              Notify Concierge
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function GuestFAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="guest-faq-heading">
      <SectionBanner headingId="guest-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Guest FAQ</p>
        <h2 id="guest-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Plan every detail of your Spanish Trail visit</h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            From gatehouse etiquette to property tours, these answers keep you prepared and confident during your time inside the community.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {guestFaq.map((item) => (
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

