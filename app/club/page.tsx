import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { amenities, testimonials } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { lifestyleHighlights } from '@/lib/spanishTrailContent'

const clubNarratives = [
  {
    title: 'Immersive Club Lifestyle for Members and Residents',
    paragraphs: [
      'Spanish Trail Country Club has evolved into a social sanctuary where every day carries a sense of occasion. Morning routines begin in the fitness pavilion with personal trainers, Pilates reformers, and spa-level locker rooms. By lunchtime, executives and creatives gather on the terrace for strategy sessions overlooking the Lakes nine. Evenings can mean wine-pairing dinners, cigar tastings on the veranda, or kids splashing in the pool while parents enjoy sunset cocktails. Dr. Janet Duffy introduces new members to these rhythms before they move in, ensuring their calendar is populated with meaningful experiences from day one.',
      'Because the club sits within a master-planned, guard-gated community, members benefit from a built-in support system. Concierge teams coordinate airport transportation, book tee times, and secure reservations at partner restaurants across Summerlin and the Strip. Residents credit Spanish Trail with creating a safe, connected environment where neighbors quickly become friends; Dr. Duffy understands this cultural fabric and guides buyers toward homes that align with their preferred pace and social circles.'
    ],
  },
  {
    title: 'Programming that Elevates Every Generation',
    paragraphs: [
      'Spanish Trail Country Club’s programming committee curates activations for all ages. Young families enjoy junior golf academies, swim instruction, and themed holiday festivals that embrace Las Vegas flair. Professionals tap into networking breakfasts, speaker panels featuring hospitality leaders, and elegant member trips to Napa and Pebble Beach. Retirees appreciate weekday tennis mixers, art workshops, and philanthropic initiatives that support local schools. Each program is designed to ensure members discover value beyond the fairways, reinforcing Spanish Trail’s position as the social heartbeat of west Las Vegas.',
      'Dr. Duffy maintains close relationships with committee chairs, so she can introduce incoming members to interest groups before they finalize a home purchase. This concierge matchmaking helps families find their community quickly and gives them insight into the club’s long-range vision—including facility enhancements, sustainability initiatives, and new dining concepts. Understanding this forward momentum helps buyers view Spanish Trail not only as a property investment but as an enduring lifestyle commitment.'
    ],
  },
  {
    title: 'Culinary and Wellness Innovations',
    paragraphs: [
      'The culinary team at Spanish Trail Country Club merges Las Vegas sophistication with approachable comfort. Seasonal menus highlight locally sourced ingredients, chef’s-table pop-ups explore global flavors, and wine stewards curate pairings from boutique vineyards. Members can grab a post-round espresso in the café, host clients in private dining rooms, or order bespoke catering for in-home celebrations. Wellness offerings mirror this attention to detail: spa therapists specialize in sports recovery, nutrition coaches create personalized plans, and the gym features cutting-edge technology for biometric tracking.',
      'Homebuyers often evaluate club amenities with the same scrutiny they apply to interior finishes. Dr. Duffy guides clients through tastings, introduces them to spa directors, and outlines membership tiers that unlock exclusive culinary events. She also coordinates off-site partnerships—think VIP seating at Allegiant Stadium or collaborations with luxury resorts—that extend the Spanish Trail experience throughout Las Vegas.'
    ],
  },
  {
    title: 'Events, Philanthropy, and Community Impact',
    paragraphs: [
      'Spanish Trail Country Club hosts a robust calendar of fundraisers and galas that benefit organizations such as Opportunity Village, local schools, and military families. Members volunteer time, donate auction items, and leverage professional networks to amplify each initiative. The club’s ballroom, with panoramic Strip views, transforms into a glittering backdrop for black-tie affairs, while the fairways accommodate charity golf tournaments that draw regional sponsors.',
      'Dr. Duffy encourages clients to view membership as a platform for influence. She pairs philanthropic-minded families with committees, arranges introductions to club leadership, and spotlights Spanish Trail homes that offer the entertaining spaces necessary for hosting pre-event gatherings. This blend of luxury and purpose defines Spanish Trail’s enduring appeal and demonstrates why the community attracts discerning buyers year after year.'
    ],
  },
]

const clubFaq = [
  {
    question: 'Do you need to own a home in Spanish Trail to join the club?',
    answer:
      'Homeownership is not required to become a member, though many residents choose to live within the gates for convenience. Prospective members can explore trial memberships or sponsor arrangements to experience the club before purchasing. Dr. Janet Duffy guides clients through membership interviews, explains current initiation structures, and pairs newcomers with ambassadors who reflect their interests.',
  },
  {
    question: 'How far in advance should weddings or galas be booked?',
    answer:
      'Prime dates—particularly fall weekends and New Year’s celebrations—often book 12 to 18 months in advance. Dr. Duffy collaborates with the club’s events team to secure preferred timelines and ensure clients have access to trusted photographers, florists, and planners. Her relationships often unlock creative solutions, such as weekday sunset ceremonies or multi-day golf-and-gala experiences.',
  },
  {
    question: 'What are the most popular golf programs for new members?',
    answer:
      'New members gravitate toward professional coaching packages, nine-and-dine evenings, and mixed-team tournaments that foster camaraderie. Junior academies and ladies’ leagues fill quickly each season. Dr. Duffy introduces golfers to head professionals so they can discuss equipment fittings, lesson availability, and cross-club reciprocal play before finalizing membership plans.',
  },
  {
    question: 'Can members reserve private workspace or meeting rooms?',
    answer:
      'Yes. The clubhouse features flexible meeting suites equipped with high-speed connectivity, presentation technology, and catering options. Members use these spaces for board meetings, podcast recordings, or remote-work sessions between rounds. Dr. Duffy shares availability calendars and booking protocols so clients can integrate the clubhouse into their professional routines.',
  },
  {
    question: 'How does the club support families with children?',
    answer:
      'Spanish Trail offers supervised kids’ clubs, seasonal camps, swim teams, and teen socials curated by youth programming specialists. Parents appreciate the safe environment, dedicated staff, and ability to enjoy adult-only events knowing their children are engaged nearby. Dr. Duffy provides schedules, tuition details, and insider tips—such as enrolling early for summer programs—to help families plan ahead.',
  },
]


const pageUrl = 'https://www.spanishtrailhomes.com/club'

const clubReviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: testimonials.map((testimonial, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: testimonial.name,
    item: {
      '@type': 'Review',
      reviewBody: testimonial.quote,
      author: {
        '@type': 'Person',
        name: testimonial.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
    },
  })),
}

const spanishTrailClubSchema = {
  '@context': 'https://schema.org',
  '@type': ['GolfCourse', 'SportsActivityLocation', 'Place'],
  '@id': 'https://www.spanishtrailhomes.com/club#place',
  name: 'Spanish Trail Country Club',
  description: 'Private 27-hole championship golf course designed by Robert Trent Jones Jr., featuring guard-gated luxury living, resort-style amenities, tennis, aquatics, fine dining, and curated social programming in Las Vegas.',
  image: `${pageUrl}/og-image.png`,
  url: pageUrl,
  telephone: '+1-702-364-5050',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5050 Spanish Trail Ln.',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89117',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.109145,
    longitude: -115.282642,
  },
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: '27-Hole Championship Golf Course',
      value: 'Robert Trent Jones Jr. design with 120 bunkers, lakes, and streams',
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Clubhouse',
      value: '50,000 square feet with dining, event spaces, and panoramic Strip views',
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Tennis Complex',
      value: 'Championship courts with professional instruction',
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Aquatics Center',
      value: 'Olympic-size pool, swim instruction, and family aquatics',
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Fitness & Spa',
      value: 'State-of-the-art gym, personal training, Pilates, and spa services',
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Fine Dining',
      value: 'Multiple restaurants with seasonal menus and wine pairings',
    },
  ],
  containedInPlace: {
    '@type': 'Residence',
    name: 'Spanish Trail Master-Planned Community',
    description: '640-acre guard-gated community with 11 neighborhoods',
  },
  tourBookingPage: 'https://www.spanishtrailhomes.com/contact',
  publicAccess: false,
  smokingAllowed: false,
}

export const metadata: Metadata = {
  title: 'Club Life | Spanish Trail Country Club',
  description:
    'Explore the Spanish Trail Country Club lifestyle—clubhouse amenities, dining, fitness, tennis, and social events in Las Vegas.',
  alternates: { canonical: '/club' },
  openGraph: {
    url: pageUrl,
    title: 'Club Life at Spanish Trail Country Club',
    description:
      'Discover clubhouse amenities, dining venues, and curated social experiences with Dr. Janet Duffy at Spanish Trail Country Club.',
    images: [`${pageUrl}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Club Life | Spanish Trail Country Club',
    description:
      'Uncover luxury amenities, dining, and events at Spanish Trail Country Club guided by Dr. Janet Duffy.',
    images: [`${pageUrl}/og-image.png`],
  },
}

export default function ClubPage() {
  return (
    <SiteShell>
      <ClubHero />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Club' }]} />
        </div>
      </div>
      <RealScoutSection
        id="club-listings"
        eyebrow="Featured Homes"
        title="Spanish Trail Residences Moments from the Clubhouse"
        description="Preview active listings within the guard-gated community—ideal for members seeking proximity to the clubhouse, sports complex, and event venues."
        priceMin="600000"
        propertyTypes=",SFR,CONDO"
      />
      <ClubNarrativesSection />
      <ClubHistory />
      <AmenitiesHighlights />
      <LifestyleSection />
      <ClubFAQSection />
      <TestimonialsHighlight />
      <Script id="club-testimonials-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(clubReviewsSchema)}
      </Script>
      <Script id="spanish-trail-club-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(spanishTrailClubSchema)}
      </Script>
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
      <HeroSearchWidget theme="dark" />
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

function ClubNarrativesSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="club-narratives-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Inside the Club</p>
          <h2 id="club-narratives-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Signature experiences that define Spanish Trail Country Club
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Spanish Trail Country Club blends legacy with innovation. These narratives—curated by Dr. Janet Duffy—showcase the programming, culinary direction, and social connections that make membership unparalleled in Las Vegas.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {clubNarratives.map((topic) => (
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
            className="font-(--font-playfair) text-3xl text-foreground sm:text-4xl"
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
          {lifestyleHighlights.map((item) => (
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

function ClubFAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="club-faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Club FAQ</p>
          <h2 id="club-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Your questions about Spanish Trail Country Club, answered
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            From membership requirements to event planning logistics, Dr. Janet Duffy provides clear guidance so you can navigate Spanish Trail’s offerings with ease.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {clubFaq.map((item) => (
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

