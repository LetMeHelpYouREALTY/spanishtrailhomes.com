import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HeroSearchWidget } from '@/components/hero-search-widget'

const eventsNarratives = [
  {
    title: 'Designing Signature Celebrations',
    paragraphs: [
      'Spanish Trail Country Club approaches every celebration as a bespoke experience. Event stylists collaborate with clients to curate themes, floral artistry, lighting installations, and culinary journeys that rival five-star resorts. Whether it is an intimate anniversary dinner or a corporate gala welcoming hundreds, the planning team choreographs each touchpoint to reflect the host’s story. Dr. Janet Duffy connects clients with in-demand vendors—photographers, entertainment specialists, and experiential designers—whose work complements the club’s elevated aesthetic.',
      'Because the clubhouse sits within a private, guard-gated community, hosts appreciate the seamless guest arrival process: valet greets attendees, concierge guides them to reserved spaces, and the events team executes behind the scenes so the host can genuinely enjoy the night. Dr. Duffy provides checklists, timeline templates, and budgeting tools that help clients navigate decisions confidently, from custom stationery to late-night lounge activations.'
    ],
  },
  {
    title: 'Weddings with Las Vegas Glamour and Garden Romance',
    paragraphs: [
      'Spanish Trail weddings capture the best of Las Vegas: the drama of skyline views paired with the serenity of palm-lined lakes. Couples often exchange vows on the Lakes Course lawn before transitioning to cocktail hour on the terrace, where the Strip twinkles in the background. Indoors, the ballroom adapts to grand stages, choreographed first dances, and immersive décor that astonishes guests. Dr. Duffy ensures couples understand ceremony logistics, from coordinating with gatehouse security for vendor access to arranging guest shuttles from hospitality partners along the Strip.',
      'Her advisory support extends to weekend itineraries. She connects couples with trusted officiants, beauty teams, and rehearsal dinner venues, while also highlighting Spanish Trail homes ideal for hosting family gatherings. Because many couples inquire about future residency after experiencing the community, Dr. Duffy provides tours tailored to newlyweds who envision owning Spanish Trail real estate.'
    ],
  },
  {
    title: 'Corporate and Charity Events with Strategic Impact',
    paragraphs: [
      'Businesses rely on Spanish Trail Country Club for product launches, executive retreats, and investor summits. Boardrooms feature advanced audiovisual technology, while outdoor spaces provide creative environments for breakouts or immersive brand activations. Charity organizers love the combination of tournament-ready golf, gala venues, and donor stewardship lounges. Dr. Duffy offers insights into sponsorship packages, silent auction strategies, and storytelling moments that help organizations exceed fundraising targets.',
      'She also leverages Berkshire Hathaway HomeServices relationships to introduce corporate clients to local influencers, media partners, and service providers. From branded gifting suites to curated culinary pairings, Dr. Duffy ensures events stay aligned with brand values and leave a lasting impression on attendees.'
    ],
  },
  {
    title: 'Extended-Stay and Hospitality Coordination',
    paragraphs: [
      'Hosting out-of-town guests? Spanish Trail’s concierge team partners with luxury resorts, transportation services, and entertainment venues to craft memorable itineraries beyond the gates. Clients can reserve tee times, spa appointments, or VIP tickets to headline shows and sporting events. Dr. Duffy layers in personal touches such as welcome baskets placed inside Spanish Trail homes, curated restaurant reservations, and private tours of the community for guests exploring a move to Las Vegas.',
      'She also coordinates with the club’s culinary leadership to design farewell brunches, day-after poolside gatherings, and chef-led tastings that extend the celebration. These elevated touches resonate with hosts who expect flawless execution from start to finish.'
    ],
  },
]

const eventsFaq = [
  {
    question: 'How far in advance should I reserve Spanish Trail for a wedding?',
    answer:
      'Prime dates—particularly spring and fall weekends—book 12 to 18 months ahead. Dr. Janet Duffy collaborates with the club’s event managers to identify openings, secure holds, and design planning timelines that keep couples on track. She also recommends preferred vendors that align with the club’s service standards.',
  },
  {
    question: 'Can non-members host events at Spanish Trail Country Club?',
    answer:
      'Yes. Non-members can host events with sponsorship from a member or through direct booking with the club’s catering department. Dr. Duffy facilitates introductions, explains deposit requirements, and ensures hosts understand support services—from valet to audiovisual technicians—available throughout the planning process.',
  },
  {
    question: 'What spaces are available for corporate meetings?',
    answer:
      'Spanish Trail offers boardrooms, classroom-style suites, outdoor terraces, and the main ballroom. Each space includes high-speed connectivity, presentation technology, and culinary options tailored to corporate needs. Dr. Duffy walks clients through floor plans and recommends setups that encourage collaboration and brand storytelling.',
  },
  {
    question: 'Does the club accommodate cultural or fusion celebrations?',
    answer:
      'Absolutely. The culinary and planning teams excel at creating menus and experiences that honor cultural traditions. From South Asian baraats to Latin-inspired receptions, the club collaborates with families to incorporate rituals, décor, and entertainment that feel authentic. Dr. Duffy shares examples and coordinates tastings to fine-tune every detail.',
  },
  {
    question: 'How can I showcase Spanish Trail homes to guests during an event?',
    answer:
      'Many hosts schedule private property tours or open-house style gatherings for interested guests. Dr. Duffy arranges bespoke itineraries that highlight available Spanish Trail homes, explains membership pathways, and provides professional guidance for anyone considering a purchase. It is an effortless way to extend hospitality and share the community with loved ones.',
  },
]


const pageUrl = 'https://www.spanishtrailhomes.com/events'

export const metadata: Metadata = {
  title: 'Weddings & Events | Spanish Trail Country Club',
  description:
    'Host weddings, private celebrations, and golf outings at Spanish Trail Country Club with bespoke planning and panoramic Las Vegas views.',
  alternates: { canonical: '/events' },
  openGraph: {
    url: pageUrl,
    title: 'Events at Spanish Trail Country Club',
    description:
      'Plan weddings, galas, and corporate gatherings with Spanish Trail’s concierge team and Dr. Janet Duffy.',
    images: [`${pageUrl}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weddings & Events | Spanish Trail Country Club',
    description:
      'Discover bespoke planning for weddings, private celebrations, and golf outings at Spanish Trail Country Club.',
    images: [`${pageUrl}/og-image.png`],
  },
}

export default function EventsPage() {
  return (
    <SiteShell>
      <EventsHero />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
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
    </SiteShell>
  )
}

function EventsHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="events-hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center events-hero-background"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background" />
      <div className="mx-auto max-w-5xl px-6 py-28 text-primary-foreground sm:py-40">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Weddings & Events
        </p>
        <h1
          id="events-hero-heading"
          className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          Celebrate life&apos;s signature moments surrounded by Spanish Trail&apos;s
          private beauty.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/90 sm:text-lg">
          From romantic ceremonies on the Lakes Course lawn to black-tie galas in
          our skyline-view ballroom, our planning team curates every detail.
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
      <div className="mx-auto max-w-6xl px-6">
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
              <Link href="#contact">Request Wedding Consultation</Link>
            </Button>
          </div>

          <div
            className="h-full rounded-3xl border border-border/60 bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1496439786094-e6970dd64573?q=80&w=1600&auto=format&fit=crop')",
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
            intimate wine cellar dinners, or poolside soirées.
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
      <div className="mx-auto max-w-6xl px-6">
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
              backgroundImage:
                "url('https://images.unsplash.com/photo-1493906401288-9628bd10ba1b?q=80&w=1600&auto=format&fit=crop')",
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
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Event Strategy</p>
          <h2 id="events-narratives-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            How Spanish Trail brings every celebration to life
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Dr. Janet Duffy partners with Spanish Trail’s events team to deliver extraordinary experiences. These narratives outline the planning insights, hospitality touches, and extended-stay conveniences available to hosts.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {eventsNarratives.map((topic) => (
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

function ContactSection() {
  return (
    <section
      id="contact"
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-4xl space-y-6 px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Begin Planning
        </p>
        <h2
          id="contact-heading"
          className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
        >
          Share your vision with our events team.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Call{' '}
          <Link
            href="tel:17023645050"
            className="text-primary underline-offset-4 hover:underline"
          >
            702.364.5050
          </Link>{' '}
          or email{' '}
          <Link
            href="mailto:events@spanishtrailhomes.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            events@spanishtrailhomes.com
          </Link>
          . Prefer online inquiries? Complete the form and our planners will respond
          within one business day.
        </p>

        <form className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-left shadow-lg sm:grid-cols-2 sm:p-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="First & Last Name"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@email.com"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(702) 000-0000"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="eventType" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Event Type
            </label>
            <select
              id="eventType"
              name="eventType"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option>Wedding</option>
              <option>Private Celebration</option>
              <option>Corporate Event</option>
              <option>Golf Outing</option>
              <option>Other</option>
            </select>
          </div>
          <div className="sm:col-span-2 flex flex-col gap-2">
            <label htmlFor="details" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Event Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              placeholder="Share preferred dates, guest count, and special requests."
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="sm:col-span-2">
            <Button className="w-full rounded-full py-3 text-xs uppercase tracking-[0.4em]">
              Submit Request
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

function EventsFAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="events-faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Events FAQ</p>
          <h2 id="events-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Planning answers for Spanish Trail celebrations
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Use these responses to build your planning timeline and align expectations with the club’s capabilities. Dr. Janet Duffy remains available for personalized strategy sessions tailored to your event goals.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {eventsFaq.map((item) => (
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

