import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Breadcrumbs } from '@/components/breadcrumbs'
import { CalendlyLink } from '@/components/calendly-link'
import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Button } from '@/components/ui/button'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner, CardVisual } from '@/components/heading-media'

const pageUrl = 'https://www.spanishtrailhomes.com/services'
const servicesPageDescription =
  'Luxury realtor services for Spanish Trail homes in Las Vegas, NV 89113. Dr. Jan Duffy buys, sells, and tours this guard-gated community exclusively—Berkshire Hathaway HomeServices Nevada Properties. Search Spanish Trail or Spanish Trails.'

const servicesWebPageSchema = createWebPageSchema({
  name: 'Spanish Trail Realtor Services | Dr. Jan Duffy',
  description: servicesPageDescription,
  path: '/services',
  extra: {
    about: {
      '@type': 'Service',
      serviceType: 'Spanish Trail Luxury Real Estate Representation',
      provider: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        areaServed: 'Spanish Trail, Las Vegas, Nevada',
      },
      areaServed: 'Spanish Trail, Las Vegas, Nevada',
    },
  },
})

const serviceOfferings = [
  {
    title: 'Buyer representation',
    href: '/buyers',
    detail:
      'Gate access, private tours, and enclave-level comps across all 11 Spanish Trail neighborhoods. Offers are built for 89113 conditions—not a valley-wide playbook.',
  },
  {
    title: 'Seller representation',
    href: '/sellers',
    detail:
      'Pricing, prep, and marketing aimed at buyers already shopping this community. One listing specialist who already knows the streets, HOA, and Architectural Review process.',
  },
  {
    title: 'Private tours & gate access',
    href: '/contact',
    detail:
      'Spanish Trail is guard-gated. Dr. Duffy coordinates Tropicana and Hacienda gate clearance, listing-agent access, and appointment-only showings. Call (702) 766-3299.',
  },
  {
    title: 'Neighborhood matching',
    href: '/neighborhoods',
    detail:
      'Estates, villas, fairway homes, and townhomes price and live differently. Match square footage, commute, and lot size before you tour.',
  },
  {
    title: 'Relocation into 89113',
    href: '/relocation',
    detail:
      'Out-of-state buyers get virtual tours, HOA document review, and a closing plan that accounts for Spanish Trail’s two-gate layout and optional club membership.',
  },
  {
    title: 'Market analysis',
    href: '/spanish-trail-market-report',
    detail:
      'Weekly absorption, median price, and listing counts for this community only. Sellers use it to price. Buyers use it to write offers that hold.',
  },
]

const faqContent = [
  {
    question: 'Does Dr. Jan Duffy work communities besides Spanish Trail?',
    answer:
      'This practice is exclusive to Spanish Trail (also searched as Spanish Trails) in Las Vegas ZIP 89113. Buyers comparing The Ridges or Summerlin still get honest neighborhood context, but representation, listings, and tours stay focused on this community.',
  },
  {
    question: 'What realtor services are included when I buy?',
    answer:
      'Search strategy, RealScout alerts, guard-gate showings, HOA and Architectural Review review, lender introductions, inspection vendor coordination, and negotiation through closing. Club membership is optional and separate from the deed—Dr. Duffy explains the categories; the club sets dues.',
  },
  {
    question: 'What realtor services are included when I sell?',
    answer:
      'A written pricing opinion, prep and staging counsel, photography, MLS and Berkshire Hathaway syndication, private previews for her buyer list, offer negotiation, and closing concierge. Marketing describes square footage, amenities, and named schools with distances—not lifestyle stereotypes.',
  },
  {
    question: 'How do I start a tour inside the gates?',
    answer:
      'Call or text (702) 766-3299, email DrDuffySells@SpanishTrailHomes.com, or book a time on the calendar. Provide the addresses you want to see. Dr. Duffy clears the gate and meets you at 5050 Spanish Trail Ln or at the listing.',
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

export const metadata: Metadata = {
  title: 'Spanish Trail Realtor Services | Buy, Sell & Tour | Dr. Jan Duffy',
  description: servicesPageDescription,
  alternates: {
    canonical: getCanonicalUrl('/services'),
  },
  openGraph: {
    url: pageUrl,
    title: 'Spanish Trail Realtor Services | Dr. Jan Duffy',
    description: servicesPageDescription,
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Realtor Services',
        subtitle: 'Buy, sell, and tour inside 89113',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Realtor Services | Dr. Jan Duffy',
    description: servicesPageDescription,
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Realtor Services',
        subtitle: 'Exclusive luxury representation',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function ServicesPage() {
  return (
    <SiteShell>
      <HeroSection />
      <RealScoutSection id="bhhs-listings" />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Realtor services' }]} />
        </div>
      </div>
      <OfferingsSection />
      <CommunityFocusSection />
      <FAQSection />
      <CTASection />
      <Script id="services-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(servicesWebPageSchema)}
      </Script>
      <Script id="services-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="services-hero-heading">
      <SectionBanner headingId="services-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/75">Luxury realtor · Spanish Trail 89113</p>
        <h1 id="services-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Realtor services for Spanish Trail homes
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Dr. Jan Duffy is the exclusive luxury realtor for Spanish Trail—the guard-gated Las Vegas community also searched as Spanish Trails. Buy, sell, and tour with Berkshire Hathaway HomeServices Nevada Properties. License S.0197614.LLC. Call (702) 766-3299.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/buyers">Buy</Link>
          </Button>
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/sellers">Sell</Link>
          </Button>
          <CalendlyLink className="inline-flex items-center justify-center rounded-full border border-[#f8f5ef]/60 bg-transparent px-8 py-3 text-xs font-medium uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10">
            Book a tour
          </CalendlyLink>
        </div>
      </div>
    </section>
  )
}

function OfferingsSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="offerings-heading">
      <SectionBanner headingId="offerings-heading" />
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">The practice</p>
          <h2 id="offerings-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            One community. Full realtor service.
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Golf, tennis, and the clubhouse are part of Spanish Trail. This page is about representation: how Dr. Duffy works with buyers and sellers inside the gates at 5050 Spanish Trail Ln, Las Vegas, NV 89113. Valley-wide luxury sites list this community next to Summerlin and Henderson. This practice does not.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceOfferings.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10"
            >
              <CardVisual seed={item.title} />
              <h3 className="mt-4 font-[var(--font-playfair)] text-xl text-[#1f2a24]">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#372a20]/85">{item.detail}</p>
              <Button asChild variant="link" className="mt-4 justify-start px-0 text-xs uppercase tracking-[0.3em] text-[#0f2b1e]">
                <Link href={item.href}>Continue</Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CommunityFocusSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="community-focus-heading">
      <SectionBanner headingId="community-focus-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h2 id="community-focus-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Realtor services for Spanish Trail homes only
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Spanish Trail has 11 neighborhoods and more than 1,200 homes. Tropicana east and west gates plus a Hacienda residents gate. Optional club membership does not transfer with the deed. Architectural Review governs exterior work. A generalist realtor learns those facts on your dime. Dr. Duffy already works them.
          </p>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Bishop Gorman High School is 2.2 miles northeast via S. Rainbow Blvd. Faith Lutheran Middle &amp; High School and Durango High School are a short drive. Whole Foods, Trader Joe&apos;s, and Downtown Summerlin sit 10–15 minutes out. Describe commute and square footage—then tour.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e]">
              <Link href="/neighborhoods">11 neighborhoods</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e]">
              <Link href="/spanish-trail-homes-for-sale-las-vegas">Current listings</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
          <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">NAP</p>
          <p className="mt-4 font-[var(--font-playfair)] text-2xl text-[#1f2a24]">Spanish Trail | Homes By Dr. Jan Duffy</p>
          <p className="mt-3 text-sm leading-relaxed text-[#372a20]/85">
            5050 Spanish Trail Ln
            <br />
            Las Vegas, NV 89113
          </p>
          <p className="mt-3 text-sm text-[#372a20]/85">
            <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">
              (702) 766-3299
            </Link>
            <br />
            DrDuffySells@SpanishTrailHomes.com
          </p>
          <p className="mt-3 text-sm text-[#372a20]/85">Sunday–Saturday 9:00 AM–6:00 PM</p>
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#6f5237]">Berkshire Hathaway HomeServices Nevada Properties</p>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="services-faq-heading">
      <SectionBanner headingId="services-faq-heading" />
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="services-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Realtor service questions
        </h2>
        <div className="mt-10 space-y-8">
          {faqContent.map((item) => (
            <article key={item.question} className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
              <CardVisual seed={item.question} />
              <h3 className="mt-4 text-lg font-semibold uppercase tracking-[0.2em] text-[#0f2b1e]">{item.question}</h3>
              <p className="mt-3 text-base leading-relaxed text-[#372a20]/85">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground relative isolate overflow-hidden" aria-labelledby="services-cta-heading">
      <SectionBanner headingId="services-cta-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 id="services-cta-heading" className="font-heading text-3xl leading-tight sm:text-4xl">
          Hire the realtor for Spanish Trail homes
        </h2>
        <p className="text-base leading-relaxed">
          Call (702) 766-3299 or book a private consult. Dr. Jan Duffy · 5050 Spanish Trail Ln, Las Vegas, NV 89113.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CalendlyLink className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-[#0f2b1e] shadow-md hover:bg-[#f1eadd]">
            Book a consult
          </CalendlyLink>
          <Button asChild variant="outline" className="rounded-full border-[#f8f5ef]/70 bg-transparent px-6 py-2 text-sm font-medium text-[#f8f5ef] hover:bg-white/10">
            <Link href="tel:+17027663299">(702) 766-3299</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
