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


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-pools'
const pageDescription =
  'Spanish Trail has two aquatic centers with resort-style pools, spas, and lap swim. Review hours and guest policies with Dr. Jan Duffy when you tour 89113 listings.'

const webPageSchema = createWebPageSchema({
  name: 'Spanish Trail Pools & Aquatic Centers | Resort-Style Swimming',
  description: pageDescription,
  path: '/spanish-trail-pools',
})

export const metadata: Metadata = {
  title: 'Spanish Trail Pools & Aquatic Centers | Resort Swimming in Las Vegas',
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-pools'),
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
    title: 'Spanish Trail Pools | Two Aquatic Centers',
    description:
      'Resort-style pools, spas, and aquatic programs at Spanish Trail Country Club in Las Vegas.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Pools',
        subtitle: 'Two aquatic centers',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Aquatic Centers',
    description:
      'Resort-style swimming and aquatic fitness at Spanish Trail Country Club.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Pools',
        subtitle: 'Resort-style swimming',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const faqContent = [
  {
    question: 'How many pools does Spanish Trail have?',
    answer:
      'Spanish Trail features two aquatic centers with multiple pools designed for different activities—lap swimming, recreation, and relaxation. Both facilities include heated spas and comfortable lounging areas.',
  },
  {
    question: 'Are swim lessons available at Spanish Trail?',
    answer:
      'Yes, the aquatic centers offer swim lessons for children and adults at all skill levels. Programs range from beginner classes for young children to stroke improvement for competitive swimmers. Lessons are taught by certified instructors.',
  },
  {
    question: 'Is there aqua fitness at Spanish Trail?',
    answer:
      'Aqua fitness classes are offered regularly, providing low-impact cardio and strength training in the pool. These classes are popular with members seeking joint-friendly exercise options, especially during hot Las Vegas summers.',
  },
  {
    question: 'Can guests use the Spanish Trail pools?',
    answer:
      'Members can bring guests to the aquatic centers following club guest policies. Guest fees may apply, and advance registration is recommended during peak summer season.',
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

export default function SpanishTrailPoolsPage() {
  return (
    <SiteShell>
      <HeroSection />
      <RealScoutSection
        id="bhhs-listings"
        eyebrow="Pool Living"
        title="Spanish Trail homes for pool lovers"
        description="Find homes near the aquatic centers or with private pools for year-round swimming in the Las Vegas sun."
        priceMin="600000"
        propertyTypes=",SFR,CONDO"
      />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Club', href: '/club' },
              { label: 'Pools & Aquatic Centers' },
            ]}
          />
        </div>
      </div>
      <AquaticCentersSection />
      <FeaturesSection />
      <ProgramsSection />
      <FAQSection />
      <CTASection />
      <Script id="pools-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="pools-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="pools-hero-heading">
      <SectionBanner headingId="pools-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[#c6aa7a]">Aquatic Living</p>
        <h1 id="pools-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Homes with Pools
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Two aquatic centers serve Spanish Trail homes. Dr. Jan Duffy tours listings with pool access. Call (702) 766-3299 to buy or sell.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/buyers">Buy a Spanish Trail home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/sellers">Sell a Spanish Trail home</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function AquaticCentersSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="aquatic-heading">
      <SectionBanner headingId="aquatic-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Two Aquatic Centers</p>
            <h2 id="aquatic-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Resort-Style Swimming Year-Round
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Spanish Trail&apos;s two aquatic centers provide distinct experiences for members. Whether you prefer active lap swimming or leisurely relaxation, the facilities accommodate different moods and activities throughout the day.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Las Vegas sunshine makes outdoor swimming enjoyable most of the year, and heated spas extend the season into cooler months. The poolside settings—with comfortable loungers, shade structures, and attentive service—create true resort experiences within your community.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">Aquatic Facilities</h3>
            <div className="space-y-4">
              {[
                { feature: 'Two Pool Locations', description: 'Separate aquatic centers offer variety and reduce crowding' },
                { feature: 'Lap Swimming', description: 'Dedicated lanes for fitness swimming and training' },
                { feature: 'Recreation Areas', description: 'Family-friendly spaces for leisure swimming and play' },
                { feature: 'Heated Spas', description: 'Hot tubs for relaxation and recovery after workouts' },
                { feature: 'Lounging Areas', description: 'Comfortable seating with shade options and poolside service' },
              ].map((item) => (
                <div key={item.feature} className="rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">{item.feature}</p>
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

function FeaturesSection() {
  return (
    <section className="border-y border-border/60 bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="features-heading">
      <SectionBanner headingId="features-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Pool Amenities</p>
          <h2 id="features-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Everything for Pool-Side Enjoyment
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Spanish Trail aquatic centers are designed for comfort and convenience. From poolside dining to premium amenities, every detail enhances your experience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Poolside Service',
              description: 'Food and beverage service available at the pool. Enjoy refreshments without leaving your lounge chair.',
            },
            {
              title: 'Shade Structures',
              description: 'Covered areas provide relief from the desert sun. Cabanas and umbrellas keep you comfortable.',
            },
            {
              title: 'Restrooms & Showers',
              description: 'Clean, convenient facilities adjacent to the pools with changing areas and storage.',
            },
            {
              title: 'Towel Service',
              description: 'Fresh towels provided for your convenience. No need to carry pool gear from home.',
            },
            {
              title: 'Safety Staff',
              description: 'Trained lifeguards monitor the pools during operating hours for member safety.',
            },
            {
              title: 'Family-Friendly',
              description: 'Welcoming environment for families with children. Designated shallow areas for young swimmers.',
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

function ProgramsSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="programs-heading">
      <SectionBanner headingId="programs-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Aquatic Programs</p>
            <h2 id="programs-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Swim Lessons & Aqua Fitness
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Spanish Trail offers aquatic programming for all ages and abilities. From infant swim classes to senior aqua fitness, our certified instructors help members build water skills and maintain fitness in the pool.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Aqua fitness classes are particularly popular during hot Las Vegas summers, providing effective workouts with the cooling benefit of water. Low-impact aquatic exercise is gentle on joints while delivering cardiovascular and strength benefits.
            </p>
            <Button asChild variant="outline" className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]">
              <Link href="/spanish-trail-fitness">View all fitness programs</Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">Programs Offered</h3>
            <div className="space-y-3">
              {[
                'Infant and toddler swim introduction',
                'Children\'s swim lessons (all levels)',
                'Adult learn-to-swim programs',
                'Stroke improvement clinics',
                'Aqua aerobics and fitness classes',
                'Senior aquatic exercise programs',
                'Lap swim hours for fitness swimmers',
                'Private swim instruction available',
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
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="pools-faq-heading">
      <SectionBanner headingId="pools-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="pools-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Aquatic Center FAQs
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
    <section className="bg-white py-16 sm:py-20 relative isolate overflow-hidden" aria-labelledby="pools-cta-heading">
      <SectionBanner headingId="pools-cta-heading" />
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 id="pools-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Tour Spanish Trail homes with pool access
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Enjoy resort-style swimming steps from your door. Contact Dr. Jan Duffy at <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link> to find homes with easy access to the aquatic centers—or with private pools of their own.
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
