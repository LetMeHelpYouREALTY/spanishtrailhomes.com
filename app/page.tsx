import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Button } from '@/components/ui/button'
import { CalendlyLink } from '@/components/calendly-link'
import { TrackedSmsLink } from '@/components/tracked-sms-link'
import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { marketHighlights, neighborhoodSpotlights } from '@/lib/spanishTrailContent'
import { marketStats } from '@/lib/marketStats'
import { createBreadcrumbSchema, createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { HeroBackground } from '@/components/hero-background'
import { FeaturedListings } from '@/components/featured-listings'
import { PropertyLightboxProvider } from '@/components/property-lightbox'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { TourCTAStrip } from '@/components/tour-cta-strip'
import { SectionBanner, CardVisual } from '@/components/heading-media'
import { getSiteImageUrl } from '@/lib/cloudflare-images'
import { AgentPortrait } from '@/components/agent-portrait'


const pageUrl = 'https://www.spanishtrailhomes.com/'
const homePageDescription =
  'Buy and sell Spanish Trail homes in Las Vegas 89113. Dr. Jan Duffy’s realtor services cover this community only—buyer representation, seller representation, and private tours. Also searched as Spanish Trails.'

const homeWebPageSchema = createWebPageSchema({
  name: 'Buy and Sell Spanish Trail Homes | Realtor Services | Dr. Jan Duffy',
  description: homePageDescription,
  path: '/',
  type: 'CollectionPage',
  extra: {
    about: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      url: pageUrl,
      areaServed: 'Spanish Trail, Las Vegas, Nevada',
    },
  },
})

const homeBreadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
])

export const metadata: Metadata = {
  title: 'Buy and Sell Spanish Trail Homes | Realtor Services | Dr. Jan Duffy',
  description: homePageDescription,
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
  openGraph: {
    url: pageUrl,
    title: 'Buy and Sell Spanish Trail Homes | Dr. Jan Duffy',
    description: homePageDescription,
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Homes Realtor',
        subtitle: 'Buy, sell, and tour in 89113 only',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy and Sell Spanish Trail Homes | Dr. Jan Duffy',
    description: homePageDescription,
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Homes',
        subtitle: 'Realtor services inside the 89113 gates',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const overviewStats = [
  {
    label: 'Neighborhoods',
    value: '11',
    description:
      'Dr. Duffy matches buyers and sellers across every Spanish Trail enclave—villas, townhomes, and custom estates.',
  },
  {
    label: 'Homes Inside the Gates',
    value: '1,200+',
    description:
      'Hyper-local inventory knowledge from lock-and-leave residences to golf-course estates in ZIP 89113.',
  },
  {
    label: 'Community Focus',
    value: '89113',
    description:
      'Exclusive Spanish Trail practice—not a valley-wide generalist. One community, one realtor specialty.',
  },
  {
    label: 'License',
    value: 'S.0197614',
    description:
      'Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 766-3299 for a private consult.',
  },
]


const homeFaq = [
  {
    question: 'How is this different from other Spanish Trail or Spanish Trails listing pages?',
    answer:
      'Most of those pages sit on valley-wide agent sites that also sell Summerlin, Henderson, and Strip condos. This site is Dr. Jan Duffy’s exclusive Spanish Trail practice: buy, sell, and tour inside ZIP 89113 only. You get 11-neighborhood matching, guard-gate showings, and current comps—not a recycled golf-and-gates blurb. The correct community name is Spanish Trail; “Spanish Trails” is the same place.',
  },
  {
    question: 'Is it Spanish Trail or Spanish Trails—and where is it in Las Vegas?',
    answer:
      'The correct name is Spanish Trail (singular), a guard-gated master plan in southwest Las Vegas, Nevada, ZIP 89113. Many people type “Spanish Trails” in search; it is the same community. Spanish Trail Country Club operates the private 27-hole golf course inside the gates. If you are searching “Spanish Trail near me” from the Las Vegas Valley, the main entrance and club are off Tropicana and Rainbow—call Dr. Jan Duffy at (702) 766-3299 for directions and guard-gate showing access.',
  },
  {
    question: 'How competitive is the current market for Spanish Trail homes?',
    answer:
      'Inventory in Spanish Trail remains limited, with many properties selling within the first two weeks when they are priced correctly. Dr. Jan Duffy prepares buyers with lender introductions, appraisal strategies, and neighborhood intel so they can move decisively. Her Berkshire Hathaway HomeServices network also uncovers private offerings and upcoming listings that never hit public portals, giving clients a competitive advantage.',
  },
  {
    question: 'Why hire a realtor who only works Spanish Trail?',
    answer:
      'Spanish Trail (sometimes searched as Spanish Trails) has 11 neighborhoods, two Tropicana gates, an HOA Architectural Review Committee, and optional club membership that is separate from the deed. A valley-wide agent rarely tracks those details daily. Dr. Jan Duffy specializes exclusively in this 89113 community—comps, gate access, and listing strategy—so buyers and sellers get neighborhood-level counsel instead of generic Las Vegas advice.',
  },
  {
    question: 'Which Spanish Trail neighborhoods fit full-time residents versus seasonal owners?',
    answer:
      'Buyers who want larger lots and dedicated office space often look at the Estates, Estates West, and Springs. Bishop Gorman High School is about 2.2 miles northeast via S. Rainbow Blvd.; Faith Lutheran Middle & High School and Durango High School are also a short drive. Seasonal owners frequently choose the Courtyards, Gardens, and Villas for lock-and-leave convenience. Dr. Duffy maps commute times, HOA dues, and square footage to match the right enclave.',
  },
  {
    question: 'What should buyers budget for HOA dues and club memberships?',
    answer:
      'HOA assessments vary by enclave but generally range from the mid-$200s to the mid-$400s per month, covering guard-gate staffing, landscaping, and community maintenance. Club memberships are optional for homeowners and include multiple categories—full golf, young executive, social, and corporate. Dr. Duffy outlines the latest fee schedules, initiation options, and financing considerations so clients can plan holistically.',
  },
  {
    question: 'Are there renovation restrictions for Spanish Trail homes?',
    answer:
      'The Architectural Review Committee maintains community standards, but it also supports thoughtful modernization. Homeowners submit plans that detail exterior elevations, materials, and landscaping. Dr. Duffy partners with designers experienced in Spanish Trail guidelines to ensure approvals move quickly and projects enhance both property value and neighborhood aesthetics.',
  },
  {
    question: 'How can sellers maximize exposure for Spanish Trail listings?',
    answer:
      'Sellers working with Dr. Duffy benefit from multi-layered marketing: Berkshire Hathaway HomeServices global syndication, hyperlocal campaigns targeting 89113 and Summerlin move-up buyers, and private preview events for Dr. Duffy’s concierge clients. In addition, she deploys analytics-driven pricing models and property-specific landing pages to capture leads around the clock—essential for Spanish Trail homes where discerning buyers often preview online before booking a showing.',
  },
]

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const homeResourceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Spanish Trail Resource Guides',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Spanish Trail Buyer Roadmap',
      url: `${pageUrl}buyers`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Spanish Trail Seller Blueprint',
      url: `${pageUrl}sellers`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Spanish Trail Market Report',
      url: `${pageUrl}spanish-trail-market-report`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Spanish Trail Insights & Editorials',
      url: `${pageUrl}spanish-trail-insights`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Spanish Trail Realtor Services',
      url: `${pageUrl}services`,
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Las Vegas Luxury Neighborhood Comparisons',
      url: `${pageUrl}las-vegas-luxury-neighborhoods`,
    },
  ],
}

export default function HomePage() {
  return (
    <SiteShell>
      <PropertyLightboxProvider>
        <HeroSection />
        <RealScoutSection
          id="bhhs-listings"
          title="Spanish Trail homes Dr. Duffy can show this week"
          description="Live inventory inside the 89113 gates. Estate homes, villas, and off-market tours—schedule a showing with the community’s exclusive realtor."
          priceMin="500000"
        />
        <AEOAnswerSection />
        <div className="bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }]} />
          </div>
        </div>
        <RealtorServicesSection />
        <TourCTAStrip />
      <AdvancedSearchSection />
      <IntroSection />
      <StatsSection />
      <JourneySection />
      <NeighborhoodSpotlightsSection />
      <MarketPreviewSection />
      <TestimonialCarousel />
      <InsightsPreviewSection />
      <ExploreFurtherSection />
      <FAQSection />
      <CTASection />
      </PropertyLightboxProvider>
      <Script id="home-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeBreadcrumbSchema)}
      </Script>
      <Script id="home-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeWebPageSchema)}
      </Script>
      <Script id="home-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeFaqSchema)}
      </Script>
      <Script id="home-resource-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeResourceSchema)}
      </Script>
    </SiteShell>
  )
}

function AEOAnswerSection() {
  return (
    <section className="bg-gradient-to-b from-[#f8f5ef] to-white py-12 sm:py-16" aria-labelledby="aeo-answer">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-[#0f2b1e]/10 bg-white p-8 shadow-xl shadow-primary/5">
          <h2 id="aeo-answer" className="sr-only">Who buys and sells Spanish Trail homes?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#1f2a24]">
              Dr. Jan Duffy buys and sells Spanish Trail homes in Las Vegas ZIP 89113—also searched as Spanish Trails. Realtor services only for this community: buyer representation, seller representation, and private tours across 11 neighborhoods and 1,200+ homes. Berkshire Hathaway HomeServices Nevada Properties. Call (702) 766-3299.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroSection() {
  return (
    <section
      className="relative isolate overflow-x-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground
        src={getSiteImageUrl('h1-guard-gate')}
        alt="Spanish Trail Country Club guard-gated luxury homes and golf course in Las Vegas 89113"
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/55 to-[#0f2b1e]/80"
        priority
        sizes="(max-width: 1024px) 100vw, 1280px"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-background to-transparent sm:h-36" />

      <div className="mx-auto flex min-h-0 max-w-6xl flex-col gap-6 px-4 pb-16 pt-14 sm:gap-8 sm:px-6 sm:pb-20 sm:pt-16 lg:gap-10 lg:pb-24 lg:pt-20">
        <AgentPortrait id="duffy-circle-canonical" placement="homepage-hero" size="lg" priority className="self-start" />
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          <h1
            id="hero-heading"
            className="font-heading text-3xl font-semibold leading-tight tracking-[0.06em] text-white [text-shadow:0_1px_3px_rgb(0_0_0/35%)] sm:text-4xl sm:tracking-[0.08em] lg:text-5xl xl:text-6xl"
          >
            Buy and Sell Spanish Trail Homes
          </h1>
          <p className="text-base font-medium leading-relaxed text-white/95 sm:text-lg sm:leading-relaxed [text-shadow:0_1px_2px_rgb(0_0_0/25%)]">
            Realtor services for Spanish Trail homes only. Dr. Jan Duffy buys, sells, and tours addresses inside this 89113 community—also searched as Spanish Trails. Berkshire Hathaway HomeServices Nevada Properties.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Button
            asChild
            className="min-h-11 rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e] shadow-md shadow-black/20 hover:bg-[#eef2ef] sm:min-h-12 sm:tracking-[0.4em]"
          >
            <Link href="/buyers">Buy in Spanish Trail</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="min-h-11 rounded-full border-2 border-white bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e] shadow-md shadow-black/15 hover:border-white hover:bg-[#eef2ef] hover:text-[#081810] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f2b1e] sm:min-h-12 sm:tracking-[0.4em]"
          >
            <Link href="/sellers">Sell Your Home</Link>
          </Button>
          <CalendlyLink
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white bg-transparent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-md shadow-black/15 hover:bg-white/10 sm:min-h-12 sm:tracking-[0.4em]"
            ctaText="Book a private tour"
            ctaLocation="hero"
          >
            Book a Private Tour
          </CalendlyLink>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

const realtorServices = [
  {
    title: 'Buy in Spanish Trail',
    href: '/buyers',
    description:
      'Representation for buyers who want this community—not a valley-wide search. Gate access, enclave matching, and offer strategy.',
  },
  {
    title: 'Sell your Spanish Trail home',
    href: '/sellers',
    description:
      'Pricing, prep, and marketing aimed at 89113 luxury buyers. One listing specialist who already knows the 11 neighborhoods.',
  },
  {
    title: 'Private tours',
    href: '/contact',
    description:
      'Guard-gate clearance and appointment-only showings. Call (702) 766-3299 or book a time on the calendar.',
  },
  {
    title: 'Community counsel',
    href: '/neighborhoods',
    description:
      'Which village fits your square footage and commute. HOA, Architectural Review, and relocation into 89113.',
  },
]

function RealtorServicesSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="realtor-services-heading">
      <SectionBanner headingId="realtor-services-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Luxury realtor services</p>
          <h2 id="realtor-services-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Realtor services for Spanish Trail homes
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            This site is a realtor practice for one community. Amenities and golf live under Community. The work is buy, sell, and tour.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {realtorServices.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10"
            >
              <CardVisual seed={service.title} />
              <h3 className="mt-4 font-heading text-2xl text-[#1f2a24]">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#372a20]/85">{service.description}</p>
              <Button asChild variant="link" className="mt-2 justify-start px-0 text-xs uppercase tracking-[0.3em] text-primary">
                <Link href={service.href}>Learn more</Link>
              </Button>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/services">All realtor services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="bg-white py-20" aria-labelledby="intro-heading">
      <SectionBanner headingId="intro-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h2 id="intro-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            The realtor who only works Spanish Trail.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail sits at Tropicana Avenue and Rainbow Boulevard, west of I-215 in southwest Las Vegas (89113). It is a 640-acre guard-gated community with 11 neighborhoods and more than 1,200 homes. Dr. Jan Duffy practices here exclusively—buying, selling, and touring inside the gates rather than covering the entire valley.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Daily conveniences—Whole Foods, Trader Joe&apos;s, Downtown Summerlin—are a 10- to 15-minute drive. Bishop Gorman High School is 2.2 miles northeast via S. Rainbow Blvd.; Faith Lutheran Middle &amp; High School and Durango High School are a short drive as well. Golf, tennis, and the clubhouse are amenities of the community—not the reason this site exists.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Start with{' '}
            <Link href="/services" className="text-[#0f2b1e] underline-offset-4 hover:underline">
              Spanish Trail realtor services
            </Link>
            , browse{' '}
            <Link href="/spanish-trail-homes-for-sale-las-vegas" className="text-[#0f2b1e] underline-offset-4 hover:underline">
              Spanish Trail homes for sale
            </Link>
            , or review the{' '}
            <Link href="/neighborhoods" className="text-[#0f2b1e] underline-offset-4 hover:underline">
              11 Spanish Trail neighborhoods
            </Link>
            .
          </p>
          <div className="pt-4">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#0f2b1e]/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e] hover:text-white"
            >
              <Link href="/services">Realtor services</Link>
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">
              Realtor Focus
            </p>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-1 size-2 shrink-0 rounded-full bg-secondary" aria-hidden />
                <span><strong className="text-foreground">Buyer representation</strong> — Gate access, private tours, comps by enclave, and offer strategy for Spanish Trail only.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 size-2 shrink-0 rounded-full bg-secondary" aria-hidden />
                <span><strong className="text-foreground">Seller representation</strong> — Pricing, prep, and marketing aimed at 89113 and move-up luxury buyers.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 size-2 shrink-0 rounded-full bg-secondary" aria-hidden />
                <span><strong className="text-foreground">Community counsel</strong> — HOA, Architectural Review, and neighborhood matching across all 11 villages.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">
              Quick Facts
            </p>
            <dl className="mt-4 grid grid-cols-1 gap-4 text-sm text-muted-foreground">
              <div>
                <dt className="font-semibold text-foreground">Location</dt>
                <dd>Spanish Trail, 89113 · Tropicana Ave. & Rainbow Blvd.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Gate Access</dt>
                <dd>East & West Tropicana gates + Hacienda residents gate</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Lifestyle</dt>
                <dd>11 neighborhoods · 1,200+ homes · optional club membership</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Business</dt>
                <dd>Veteran-Owned Business</dd>
              </div>
            </dl>
            <Button
              asChild
              variant="link"
              className="mt-2 justify-start px-0 text-xs uppercase tracking-[0.3em] text-primary"
            >
              <Link href="/contact">Call Dr. Jan Duffy · (702) 766-3299</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="border-y border-[#0b2016] bg-[#0f2b1e]" aria-label="Community highlights">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-[#1f4a35]/80 bg-[#16402d] p-6 shadow-lg shadow-black/20"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#f8f5ef]/75">
              {item.label}
            </p>
            <p className="mt-4 font-heading text-3xl text-[#f8f5ef]">
              {item.value}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#f8f5ef]/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

const journeySteps = [
  { title: 'Consult', description: 'Share your budget, timeline, and which Spanish Trail neighborhoods you want. Dr. Duffy maps the 11 enclaves to your square footage and commute needs.' },
  { title: 'Tour', description: 'Guard-gate clearance, private showings, and off-market previews—coordinated so you see the right addresses, not a valley-wide inventory dump.' },
  { title: 'Negotiate', description: 'Enclave-level comps, HOA document review, and offer strategy so you buy or sell at a price that matches 89113 conditions.' },
  { title: 'Close', description: 'Inspection vendors, Architectural Review questions, and key handoff. After closing, neighborhood and club introductions if you want them.' },
]

function JourneySection() {
  return (
    <section className="border-y border-[#0b2016] bg-[#0f2b1e] py-20 sm:py-24" aria-labelledby="journey-heading">
      <SectionBanner headingId="journey-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/75">Realtor process</p>
          <h2 id="journey-heading" className="font-heading text-3xl text-[#f8f5ef] sm:text-4xl">
            How we buy, sell, and tour Spanish Trail homes
          </h2>
          <p className="text-base leading-relaxed text-[#f8f5ef]/85">
            Buy, sell, or tour—every engagement stays inside this community.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, i) => (
            <article
              key={step.title}
              className="rounded-3xl border border-[#1f4a35]/80 bg-[#16402d] p-6 shadow-lg shadow-black/20 text-center"
            >
              <CardVisual seed={String(step.title)} />
              <p className="text-xs uppercase tracking-[0.4em] text-[#f8f5ef]/75">Step {i + 1}</p>
              <h3 className="mt-3 font-heading text-xl text-[#f8f5ef]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#f8f5ef]/80">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function NeighborhoodSpotlightsSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="neighborhood-spotlights-heading">
      <SectionBanner headingId="neighborhood-spotlights-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail community</p>
          <h2 id="neighborhood-spotlights-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Match the right neighborhood before you tour
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Spanish Trail is not one product. Estates, villas, and fairway homes price and live differently. Dr. Duffy briefs you on the 11 enclaves, then books gate access for the addresses that fit.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {neighborhoodSpotlights.slice(0, 2).map((spotlight) => (
            <div
              key={spotlight.name}
              className="rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">
                {spotlight.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#372a20]/85">
                {spotlight.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
          >
            <Link href="/neighborhoods">See all 11 neighborhoods</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function MarketPreviewSection() {
  return (
    <section className="border-y border-border/40 bg-white" aria-labelledby="market-preview-heading">
      <SectionBanner headingId="market-preview-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Market Snapshot</p>
            <h2 id="market-preview-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
              Current Spanish Trail Market: {marketStats.date_label}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Dr. Jan Duffy refreshes pricing, absorption, and buyer activity every week. Here are the metrics we&apos;re
              watching most closely this month.
            </p>
          </div>
          <Button
            asChild
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="/spanish-trail-market-report">View full market report</Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketHighlights.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-border/40 bg-white p-6 shadow-md shadow-primary/10"
            >
              <CardVisual seed={String(item.label)} />
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">{item.label}</p>
                <p className="mt-3 font-heading text-2xl text-[#1f2a24]">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.trend} change</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.context}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const insightHighlights = [
  'Weekly Spanish Trail pricing, absorption, and listing intel',
  'Neighborhood matching across all 11 89113 enclaves',
  'HOA, Architectural Review, and renovation counsel for sellers',
]

function InsightsPreviewSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="insights-preview-heading">
      <SectionBanner headingId="insights-preview-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Strategy & Advisory</p>
          <h2 id="insights-preview-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Stay informed with Spanish Trail insights
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Go beyond listings with Dr. Duffy&apos;s long-form analysis—designed for buyers, sellers, and investors who want a
            clear playbook for the guard-gated market.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {insightHighlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 text-sm leading-relaxed text-[#372a20]/85 shadow-lg shadow-primary/10"
            >
              {highlight}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
          >
            <Link href="/spanish-trail-insights">Read the full insight hub</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const exploreCards = [
  {
    title: 'Realtor Services',
    description: 'Buy, sell, private tours, and community counsel—Dr. Jan Duffy’s Spanish Trail practice in one place.',
    href: '/services',
  },
  {
    title: 'Buy Spanish Trail Homes',
    description: 'Buyer representation: gate access, enclave matching, financing strategy, and offer support.',
    href: '/buyers',
  },
  {
    title: 'Sell Your Spanish Trail Home',
    description: 'Seller representation: valuation, prep, luxury marketing, and negotiation inside 89113.',
    href: '/sellers',
  },
  {
    title: 'Spanish Trail Listings',
    description: 'Live MLS search for guard-gated golf homes in Las Vegas ZIP 89113.',
    href: '/spanish-trail-homes-for-sale-las-vegas',
  },
  {
    title: '11 Neighborhoods',
    description: 'Estates, villas, fairway homes, and townhomes—compare enclaves before you tour.',
    href: '/neighborhoods',
  },
  {
    title: 'Spanish Trail Community Guide',
    description: 'HOA, gates, architecture, and how the master plan is laid out in southwest Las Vegas.',
    href: '/communities/spanish-trail',
  },
  {
    title: 'Spanish Trail Market Report',
    description: 'Weekly pricing shifts, absorption rates, and demand indicators for smart offers.',
    href: '/spanish-trail-market-report',
  },
  {
    title: 'Schools near Spanish Trail',
    description: 'Named campuses and distances: Bishop Gorman, Faith Lutheran, Durango, and CCSD schools.',
    href: '/spanish-trail-schools',
  },
  {
    title: 'Meet Dr. Jan Duffy',
    description: 'Exclusive Spanish Trail realtor, Berkshire Hathaway HomeServices Nevada Properties.',
    href: '/about',
  },
]

function ExploreFurtherSection() {
  return (
    <section className="bg-[#f9f4eb] py-20 sm:py-24" aria-labelledby="explore-further-heading">
      <SectionBanner headingId="explore-further-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Realtor & community resources</p>
          <h2 id="explore-further-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Spanish Trail homes and realtor services
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Start with how Dr. Duffy works, then go deeper on listings, neighborhoods, and 89113 market data.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exploreCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex h-full flex-col justify-between rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">
                  {card.title}
                </p>
                <p className="text-sm leading-relaxed text-[#372a20]/85">{card.description}</p>
              </div>
              <span className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#0f2b1e] group-hover:text-[#0b2016]">
                Discover &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="faq-heading">
      <SectionBanner headingId="faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail realtor FAQ</p>
        <h2 id="faq-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Why work with a Spanish Trail-only realtor?
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Dr. Jan Duffy answers the questions buyers and sellers ask before hiring representation in this community. Book a tour or text (702) 766-3299.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CalendlyLink className="inline-flex items-center justify-center rounded-full bg-[#0f2b1e] px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-[#0f2b1e]/90" ctaText="Book Tour to See Inside" ctaLocation="faq">
            Book Tour to See Inside
          </CalendlyLink>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0f2b1e]/60 px-6 py-2 text-sm font-medium text-[#0f2b1e] hover:bg-[#0f2b1e]/10"
          >
            <TrackedSmsLink intent="question" href="sms:+17027663299?body=I%20have%20a%20question%20about%20Spanish%20Trail%20homes" className="inline-flex items-center" aria-label="Text your question to 702-766-3299">
              Text Your Question: 702-766-3299
            </TrackedSmsLink>
          </Button>
        </div>

        <div className="mt-12 space-y-10">
          {homeFaq.map((item) => (
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

function CTASection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground relative isolate overflow-hidden" aria-labelledby="cta-heading">
      <SectionBanner headingId="cta-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 id="cta-heading" className="font-heading text-3xl leading-tight sm:text-4xl">
          Ready to buy or sell in Spanish Trail?
        </h2>
        <p className="text-base leading-relaxed text-primary-foreground">
          Book a private tour, request a valuation, or call Dr. Jan Duffy at (702) 766-3299. Exclusive realtor service for this 89113 community.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CalendlyLink className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-[#0f2b1e] shadow-md hover:bg-[#f1eadd]" ctaText="Book Tour to See Inside" ctaLocation="footer">
            Book Tour to See Inside
          </CalendlyLink>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/70 bg-transparent px-6 py-2 text-sm font-medium text-[#f8f5ef] hover:bg-white/10"
          >
            <TrackedSmsLink intent="question" href="sms:+17027663299?body=I%20have%20a%20question%20about%20Spanish%20Trail%20homes" className="inline-flex items-center" aria-label="Text your question to 702-766-3299">
              Text Your Question: 702-766-3299
            </TrackedSmsLink>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/70 bg-transparent px-6 py-2 text-sm font-medium text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/sellers">Get a Valuation</Link>
          </Button>
        </div>
    </div>
    </section>
  )
}

function AdvancedSearchSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="advanced-search-heading">
      <SectionBanner headingId="advanced-search-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4 text-center sm:mx-auto">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Tailored Search</p>
          <h2 id="advanced-search-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Search Spanish Trail homes for sale
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Filter by price point, property style, and lifestyle amenities using our advanced RealScout experience. Save favorites, request tours, or alert Dr. Jan Duffy when the perfect Spanish Trail property appears.
          </p>
        </div>
        <FeaturedListings activeListings={marketStats.active_listings} />
        <div id="realscout-advanced-search" className="mt-12 flex justify-center">
          <div className="w-full max-w-lg rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
            <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
          </div>
        </div>
      </div>
    </section>
  )
}
