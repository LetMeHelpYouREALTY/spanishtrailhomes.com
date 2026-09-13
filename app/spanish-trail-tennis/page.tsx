import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner, CardVisual } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-tennis'
const pageDescription =
  'Las Vegas tennis lessons and league play at Spanish Trail Tennis Center—12 lighted courts, USPTA pros, and a pro shop inside Spanish Trail Country Club (membership applies for most programming).'

const webPageSchema = createWebPageSchema({
  name: 'Las Vegas Tennis Lessons & Spanish Trail Tennis Center | 12 Courts',
  description: pageDescription,
  path: '/spanish-trail-tennis',
})

export const metadata: Metadata = {
  title: 'Las Vegas Tennis Lessons | Spanish Trail Tennis Center | 12 Courts',
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-tennis'),
  },
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
    title: 'Spanish Trail Tennis Center | Premier Las Vegas Tennis',
    description:
      '12 lighted tennis courts, professional instruction, and active leagues at Spanish Trail Country Club.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Tennis',
        subtitle: '12 lighted courts & pro instruction',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Tennis Center',
    description:
      'One of the best tennis centers in Las Vegas with 12 lighted courts and professional instruction.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Tennis',
        subtitle: 'Premier Las Vegas tennis facility',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const faqContent = [
  {
    question: 'Can I take Las Vegas tennis lessons at Spanish Trail?',
    answer:
      'Yes—Spanish Trail Tennis Center employs USPTA-certified professionals who offer private lessons, semi-privates, clinics, and junior programs. Access is for members and their guests per club policies, not a public drop-in municipal court. Contact the tennis shop for schedules, pricing, and membership categories that include tennis. Dr. Jan Duffy focuses on real estate; she can introduce you to the club for lesson bookings.',
  },
  {
    question: 'How many tennis courts are at Spanish Trail?',
    answer:
      'Spanish Trail Country Club features 12 lighted tennis courts, making it one of the largest tennis facilities in Las Vegas. The courts are well-maintained and available for member play, lessons, and organized events.',
  },
  {
    question: 'Are tennis lessons available at Spanish Trail?',
    answer:
      'Yes, the tennis center has USPTA-certified professionals on staff offering private lessons, semi-private instruction, group clinics, and junior development programs. The pro shop can help match you with an instructor suited to your skill level and goals.',
  },
  {
    question: 'Is there a tennis pro shop at Spanish Trail?',
    answer:
      'The tennis center includes a fully stocked pro shop with racquets, apparel, accessories, and stringing services. Staff can help with equipment recommendations and same-day stringing for members.',
  },
  {
    question: 'What tennis leagues and events are available?',
    answer:
      'Spanish Trail hosts men\'s, women\'s, and mixed doubles leagues along with seasonal tournaments, social mixers, and round-robin events. The tennis committee organizes regular programming to keep players engaged year-round.',
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

export default function SpanishTrailTennisPage() {
  return (
    <SiteShell>
      <HeroSection />
      <RealScoutSection
        id="bhhs-listings"
        eyebrow="Tennis Living"
        title="Spanish Trail homes for tennis enthusiasts"
        description="Browse homes with easy access to the tennis center. Filter by proximity, price, and home style to find your perfect match."
        priceMin="600000"
        propertyTypes=",SFR,CONDO"
      />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Club', href: '/club' },
              { label: 'Tennis Center' },
            ]}
          />
        </div>
      </div>
      <FacilitiesSection />
      <ProgramsSection />
      <ProShopSection />
      <FAQSection />
      <CTASection />
      <Script id="tennis-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="tennis-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="tennis-hero-heading">
      <SectionBanner headingId="tennis-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[#c6aa7a]">Tennis at Spanish Trail</p>
        <h1 id="tennis-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Homes with Tennis Access
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Spanish Trail Tennis Center—inside Spanish Trail Country Club—offers 12 lighted courts, a full pro shop, and USPTA-certified pros for lessons, clinics, and leagues (membership and guest policies apply). If you are comparing Las Vegas tennis facilities, start here for guard-gated programming; Dr. Jan Duffy helps with homes, the club handles court bookings.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/membership">Join the club</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/contact">Inquire about tennis</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function FacilitiesSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="facilities-heading">
      <SectionBanner headingId="facilities-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">World-Class Facilities</p>
            <h2 id="facilities-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              12 Lighted Tennis Courts
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Spanish Trail tennis complex features 12 professionally maintained courts with state-of-the-art lighting for evening play. The facility is designed for both recreational enjoyment and competitive training, with court surfaces kept in excellent condition year-round.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Members enjoy convenient court reservations through the tennis center, with peak times managed to ensure availability. The lighted courts extend playing hours into the cooler evening temperatures—perfect for Las Vegas summers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">Facility Features</h3>
            <div className="space-y-4">
              {[
                { title: '12 Courts', description: 'Championship-quality hard courts with professional maintenance' },
                { title: 'Full Lighting', description: 'Play into the evening with court lighting on all 12 courts' },
                { title: 'Shaded Seating', description: 'Covered areas for spectators and players between matches' },
                { title: 'Water Stations', description: 'Hydration stations throughout the tennis complex' },
                { title: 'Restrooms & Lockers', description: 'Convenient facilities adjacent to the courts' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProgramsSection() {
  return (
    <section className="border-y border-border/60 bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="programs-heading">
      <SectionBanner headingId="programs-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Tennis Programs</p>
          <h2 id="programs-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Instruction & Leagues for All Levels
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Spanish Trail has USPTA-certified tennis professionals on hand for lessons, clinics, and player development. From beginners learning fundamentals to competitive players refining their game, our staff tailors instruction to your goals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Private Lessons',
              description: 'One-on-one instruction with certified pros. Focus on technique, strategy, and match play tailored to your skill level.',
            },
            {
              title: 'Group Clinics',
              description: 'Small-group sessions focusing on specific skills—serves, volleys, footwork, and doubles strategy.',
            },
            {
              title: 'Junior Programs',
              description: 'Youth development for ages 5-18. Progressive curriculum builds skills while fostering love of the game.',
            },
            {
              title: 'League Play',
              description: 'Men\'s, women\'s, and mixed doubles leagues with regular matches and seasonal standings.',
            },
            {
              title: 'Social Mixers',
              description: 'Round-robin events and social tennis nights for meeting other players in a relaxed atmosphere.',
            },
            {
              title: 'Tournaments',
              description: 'Member tournaments throughout the year, from friendly club championships to competitive brackets.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
              <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#372a20]/85">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProShopSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="proshop-heading">
      <SectionBanner headingId="proshop-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Pro Shop</p>
            <h2 id="proshop-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Full-Service Tennis Pro Shop
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Spanish Trail tennis pro shop is stocked with everything players need—from racquets and strings to apparel and accessories. The knowledgeable staff can help with equipment selection, demo racquets, and same-day stringing services.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Whether you need a quick grip replacement before a match or want to try the latest racquet technology, the pro shop staff provides personalized recommendations based on your playing style.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">Pro Shop Services</h3>
            <div className="space-y-3">
              {[
                'Racquet stringing (same-day available)',
                'Demo racquet program',
                'Grip replacements and overgrips',
                'Tennis apparel and footwear',
                'Balls, bags, and accessories',
                'Equipment recommendations from pros',
                'Court reservations and scheduling',
                'Lesson and clinic booking',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="size-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="tennis-faq-heading">
      <SectionBanner headingId="tennis-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="tennis-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Tennis Center FAQs
        </h2>
        <div className="mt-10 space-y-6">
          {faqContent.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-base leading-relaxed text-[#372a20]/85">
              <CardVisual seed={String(item.question)} />
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
    <section className="bg-white py-16 sm:py-20 relative isolate overflow-hidden" aria-labelledby="tennis-cta-heading">
      <SectionBanner headingId="tennis-cta-heading" />
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 id="tennis-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Tour Spanish Trail homes with tennis access
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Join a community where world-class tennis is just steps from your door. Contact Dr. Jan Duffy at <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link> to find homes near the tennis center or inquire about membership options.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Connect with Dr. Jan Duffy</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="/club">Explore all club amenities</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
