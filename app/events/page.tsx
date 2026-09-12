import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { CalendlyInline } from '@/components/calendly-inline'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { HeroBackground } from '@/components/hero-background'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner, CardVisual } from '@/components/heading-media'
import { getSiteImageUrl } from '@/lib/cloudflare-images'


const eventsNarratives = [
  {
    title: 'Signature Celebrations at Spanish Trail',
    paragraphs: [
      'Spanish Trail Country Club approaches every celebration as a bespoke experience. Event stylists collaborate with clients to curate themes, floral artistry, lighting installations, and culinary journeys that rival five-star resorts. Whether it is an intimate anniversary dinner or a corporate gala welcoming hundreds, the planning team choreographs each touchpoint to reflect the host\'s story.',
      'Because the clubhouse sits within a private, guard-gated community, hosts appreciate the seamless guest arrival process: valet greets attendees, concierge guides them to reserved spaces, and the events team executes behind the scenes so the host can genuinely enjoy the night. Contact the club\'s events team directly to begin planning your celebration.'
    ],
  },
  {
    title: 'Weddings with Las Vegas Glamour',
    paragraphs: [
      'Spanish Trail weddings capture the best of Las Vegas: the drama of skyline views paired with the serenity of palm-lined lakes. Couples often exchange vows on the Lakes Course lawn before transitioning to cocktail hour on the terrace, where the Strip twinkles in the background. Indoors, the ballroom adapts to grand stages, choreographed first dances, and immersive decor that astonishes guests.',
      'Many couples who host weddings at Spanish Trail later inquire about purchasing homes in the community. Dr. Jan Duffy provides property tours tailored to newlyweds who envision owning Spanish Trail real estate, highlighting homes ideal for hosting family gatherings and entertaining.'
    ],
  },
  {
    title: 'Corporate and Charity Events',
    paragraphs: [
      'Businesses rely on Spanish Trail Country Club for product launches, executive retreats, and investor summits. Boardrooms feature advanced audiovisual technology, while outdoor spaces provide creative environments for breakouts or immersive brand activations. Charity organizers love the combination of tournament-ready golf, gala venues, and donor stewardship lounges.',
      'Contact the club\'s events team for information about corporate packages, venue availability, and catering options.'
    ],
  },
  {
    title: 'Homes for Entertaining',
    paragraphs: [
      'Hosting events at Spanish Trail often inspires guests to explore homeownership in the community. Dr. Duffy helps event hosts and guests find homes with entertaining spaces—motor courts for arrivals, grand living rooms for receptions, outdoor kitchens for casual gatherings, and guest casitas for extended-stay visitors.',
      'If you\'re considering purchasing a Spanish Trail home that supports your entertaining lifestyle, contact Dr. Jan Duffy at (702) 766-3299 to schedule a property tour.'
    ],
  },
]

const eventsFaq = [
  {
    question: 'How far in advance should I reserve Spanish Trail for a wedding?',
    answer:
      'Prime dates—particularly spring and fall weekends—book 12 to 18 months ahead. Contact the club\'s events team directly to check availability and secure your preferred date.',
  },
  {
    question: 'Can non-members host events at Spanish Trail Country Club?',
    answer:
      'Yes. Non-members can host events with sponsorship from a member or through direct booking with the club\'s catering department. Contact the events team for deposit requirements and available support services.',
  },
  {
    question: 'What spaces are available for corporate meetings?',
    answer:
      'Spanish Trail offers boardrooms, classroom-style suites, outdoor terraces, and the main ballroom. Each space includes high-speed connectivity, presentation technology, and culinary options tailored to corporate needs. Contact the club for floor plans and setup options.',
  },
  {
    question: 'Does the club accommodate cultural or fusion celebrations?',
    answer:
      'Absolutely. The culinary and planning teams excel at creating menus and experiences that honor cultural traditions. From South Asian baraats to Latin-inspired receptions, the club collaborates with families to incorporate rituals, decor, and entertainment that feel authentic.',
  },
  {
    question: 'How can I tour Spanish Trail homes after attending an event?',
    answer:
      'Many event guests become interested in Spanish Trail real estate after experiencing the community. Dr. Jan Duffy arranges property tours that highlight available homes, explains membership pathways, and provides professional guidance for anyone considering a purchase. Contact her at (702) 766-3299.',
  },
]

const eventsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: eventsFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const pageUrl = 'https://www.spanishtrailhomes.com/events'
const eventsPageDescription =
  'Host weddings, private celebrations, and golf outings at Spanish Trail Country Club with bespoke planning and panoramic Las Vegas views.'

const eventsWebPageSchema = createWebPageSchema({
  name: 'Weddings & Events | Spanish Trail Country Club, Las Vegas',
  description: eventsPageDescription,
  path: '/events',
  type: 'CollectionPage',
  extra: {
    about: {
      '@type': 'Place',
      name: 'Spanish Trail Country Club',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5050 Spanish Trail Ln',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89113',
        addressCountry: 'US',
      },
    },
  },
})

export const metadata: Metadata = {
  title: 'Weddings & Events | Spanish Trail Country Club, Las Vegas',
  description: eventsPageDescription,
  alternates: { canonical: getCanonicalUrl('/events') },
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
    title: 'Weddings & Events | Spanish Trail Country Club, Las Vegas',
    description:
      'Plan weddings, galas, and corporate gatherings at Spanish Trail Country Club in Las Vegas.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Events',
        subtitle: 'Weddings - Galas - Golf Outings',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weddings & Events | Spanish Trail Country Club, Las Vegas',
    description:
      'Discover bespoke planning for weddings, private celebrations, and golf outings at Spanish Trail Country Club.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Events',
        subtitle: 'Celebrate at Spanish Trail',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function EventsPage() {
  return (
    <SiteShell>
      <EventsHero />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Events' }]} />
        </div>
      </div>
      <RealScoutSection
        id="events-listings"
        eyebrow="Nearby Estates"
        title="Spanish Trail Homes Ready for Private Entertaining"
        description="Discover residences with indoor-outdoor venues, guest casitas, and catering-ready kitchens—ideal for hosting celebrations just steps from the clubhouse."
        priceMin="800000"
        propertyTypes=",SFR"
      />
      <EventsNarrativesSection />
      <WeddingsSection />
      <PrivateEventsSection />
      <GolfOutingsSection />
      <ContactSection />
      <EventsFAQSection />
      <Script id="events-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(eventsFaqSchema)}
      </Script>
      <Script id="events-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(eventsWebPageSchema)}
      </Script>
    </SiteShell>
  )
}

function EventsHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="events-hero-heading"
    >
      <HeroBackground
        src={getSiteImageUrl('h2-events-lawn')}
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/55 via-[#0f2b1e]/65 to-[#0f2b1e]/80"
        sizes="(max-width: 1024px) 100vw, 1280px"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background" />
      <div className="mx-auto max-w-5xl px-6 py-28 text-primary-foreground sm:py-40">
        <p className="text-xs uppercase tracking-[0.5em] text-accent">
          Weddings &amp; Events
        </p>
        <h1
          id="events-hero-heading"
          className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          Celebrate life&apos;s signature moments surrounded by Spanish Trail&apos;s
          private beauty in Las Vegas.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground sm:text-lg">
          From romantic ceremonies on the Lakes Course lawn to black-tie galas in
          our skyline-view ballroom, our planning team curates every detail. For venue contracts, catering, and member sponsorship questions, contact the club&apos;s events team directly; for Spanish Trail real estate after your event—tours, timing, and membership context—call Dr. Jan Duffy at{' '}
          <a href="tel:+17027663299" className="underline-offset-4 hover:underline">
            (702) 766-3299
          </a>
          .
        </p>
      </div>
      <HeroSearchWidget theme="dark" />
    </section>
  )
}

function WeddingsSection() {
  return (
    <section
      id="weddings"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="weddings-heading"
    >
      <SectionBanner headingId="weddings-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">
              Weddings
            </p>
            <h2
              id="weddings-heading"
              className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Sunrise vows, twilight receptions, everlasting memories.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Exchange vows beneath towering palms with the cascading Lakes Course
              waterfall as your backdrop. Transition to cocktail hour on the
              terrace before dining in a ballroom bathed in candlelight and Strip
              skyline views.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>• Dedicated wedding specialist and curated vendor partners</p>
              <p>• Ceremony capacity up to 200 guests, ballroom dining up to 250</p>
              <p>• Custom menus created by our executive culinary team</p>
            </div>
            <Button
              asChild
              className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
            >
              <Link href="#contact">Request Wedding Information</Link>
            </Button>
          </div>

          <div
            className="h-full rounded-3xl border border-border/60 bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: `url('${getSiteImageUrl('h2-events-lawn')}')`,
            }}
            role="img"
            aria-label="Outdoor wedding ceremony space at Spanish Trail Country Club"
          />
        </div>
      </div>
    </section>
  )
}

function PrivateEventsSection() {
  return (
    <section
      id="private-events"
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="private-events-heading"
    >
      <SectionBanner headingId="private-events-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Corporate Retreats',
              copy: 'Breakout spaces, AV-equipped boardrooms, and curated culinary experiences that impress clients and teams alike.',
            },
            {
              title: 'Milestone Celebrations',
              copy: 'Anniversaries, birthdays, and mitzvahs receive elevated service with custom decor and entertainment.',
            },
            {
              title: 'Holiday Galas',
              copy: 'Sparkling lights, themed menus, and live music transform the clubhouse into an unforgettable venue.',
            },
            {
              title: 'Social Clubs',
              copy: 'Fashion shows, charity luncheons, and tasting events are designed alongside our in-house creative team.',
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

        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Private Events
          </p>
          <h2
            id="private-events-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Flexible venues with refined service.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Our event professionals manage floorplans, timelines, curated menus,
            and production so you can focus on hosting. Choose from formal ballrooms,
            intimate wine cellar dinners, or poolside soirees.
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="#contact">Plan Your Celebration</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function GolfOutingsSection() {
  return (
    <section
      id="golf-outings"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="golf-outings-heading"
    >
      <SectionBanner headingId="golf-outings-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">
              Golf Outings
            </p>
            <h2
              id="golf-outings-heading"
              className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Tournament-caliber experiences for clients and causes.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Showcase your brand or mission with a private shotgun start, custom
              on-course activations, and awards receptions overlooking our manicured
              fairways.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>• Professional scoring, cart staging, and player concierge</p>
              <p>• Culinary stations on-course or in the clubhouse</p>
              <p>• Logo merchandise and gifting through our golf shop</p>
            </div>
            <Button
              asChild
              className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
            >
              <Link href="#contact">Reserve a Date</Link>
            </Button>
          </div>

          <div
            className="h-full rounded-3xl border border-border/60 bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: `url('${getSiteImageUrl('h2-club-dining')}')`,
            }}
            role="img"
            aria-label="Golf outing staging area at Spanish Trail Country Club"
          />
        </div>
      </div>
    </section>
  )
}

function EventsNarrativesSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="events-narratives-heading">
      <SectionBanner headingId="events-narratives-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Event Venues</p>
          <h2 id="events-narratives-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            How Spanish Trail brings every celebration to life
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Spanish Trail&apos;s events team delivers extraordinary experiences. Contact the club directly for planning support, and contact Dr. Jan Duffy if you&apos;re interested in purchasing a home in the community.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {eventsNarratives.map((topic) => (
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

function ContactSection() {
  return (
    <section
      id="contact"
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="contact-heading"
    >
      <SectionBanner headingId="contact-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Interested in Spanish Trail Real Estate?
        </p>
        <h2
          id="contact-heading"
          className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
        >
          Schedule a property tour with Dr. Jan Duffy
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Many event guests become interested in Spanish Trail homes after experiencing the community. Call{' '}
          <Link href="tel:+17027663299" className="text-primary underline-offset-4 hover:underline">
            (702) 766-3299
          </Link>{' '}
          or use the calendar below to schedule a home tour.
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>For event planning:</strong> Contact the club&apos;s events team directly.
        </p>

        <div className="mx-auto w-full max-w-3xl rounded-3xl border border-border/60 bg-background/80 p-4 shadow-lg sm:p-6">
          <CalendlyInline height={700} minWidth={320} className="w-full" />
        </div>
      </div>
    </section>
  )
}

function EventsFAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="events-faq-heading">
      <SectionBanner headingId="events-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Events FAQ</p>
          <h2 id="events-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Common questions about Spanish Trail events
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Contact the club directly for event planning inquiries. Contact Dr. Jan Duffy for real estate questions.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {eventsFaq.map((item) => (
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
