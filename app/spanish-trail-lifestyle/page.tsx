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


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-lifestyle'
const pageDescription =
  'Discover the Spanish Trail lifestyle in Las Vegas. From Red Rock Canyon hiking to world-class shopping and dining, explore what makes this guard-gated community exceptional.'

const webPageSchema = createWebPageSchema({
  name: 'Spanish Trail Lifestyle | Living in Las Vegas',
  description: pageDescription,
  path: '/spanish-trail-lifestyle',
})

export const metadata: Metadata = {
  title: 'Spanish Trail Lifestyle | Things to Do, Dining & Shopping',
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-lifestyle'),
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
    title: 'Spanish Trail Lifestyle | Las Vegas Living',
    description:
      'Outdoor recreation, dining, shopping, and entertainment near Spanish Trail. Discover why families and professionals choose this premier community.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Lifestyle',
        subtitle: 'Living in Las Vegas',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Lifestyle Guide',
    description:
      'Things to do, dining, and shopping near Spanish Trail in Las Vegas.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Living',
        subtitle: 'Recreation, dining & shopping',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const redRockTrails = [
  'Moenkopi Loop',
  'Calico Hills',
  'Calico Tanks',
  'Turtlehead Peak',
  'Keystone Thrust',
  'White Rock—Willow Springs',
  'Grand Circle Loop',
  'White Rock Mountain Loop',
  'Willow Spring Loop',
  'La Madre Spring',
]

const faqContent = [
  {
    question: 'How far is Spanish Trail from the Las Vegas Strip?',
    answer:
      'Spanish Trail residents can reach the Las Vegas Strip in just 10-15 minutes. Head east on Tropicana Avenue or take I-215 for quick access to world-class entertainment, dining, and attractions.',
  },
  {
    question: 'What outdoor activities are available near Spanish Trail?',
    answer:
      'Red Rock Canyon National Conservation Area is a short drive away, offering hiking, rock climbing, and scenic drives. Within the community, residents enjoy 27 holes of golf, 12 tennis courts, two swimming pools, and miles of walking paths around scenic lakes.',
  },
  {
    question: 'Is Spanish Trail close to shopping centers?',
    answer:
      'Yes. Downtown Summerlin, Tivoli Village, and the Grand Canal Shoppes at The Venetian are all easily accessible. Everyday shopping at Whole Foods, Trader Joes, and major retailers is just minutes away along West Tropicana.',
  },
  {
    question: 'What dining options are available to residents?',
    answer:
      'Spanish Trail Country Club offers The Bar & Grill with 7-day-a-week dining for members. Outside the gates, residents have access to hundreds of restaurants along the Strip, in Summerlin, and throughout the Spring Valley area.',
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

export default function SpanishTrailLifestylePage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Community', href: '/communities/spanish-trail' },
              { label: 'Lifestyle' },
            ]}
          />
        </div>
      </div>
      <LocationSection />
      <OutdoorRecreationSection />
      <OnSiteAmenitiesSection />
      <DiningSection />
      <ShoppingSection />
      <RealScoutSection
        id="lifestyle-homes"
        eyebrow="Find Your Home"
        title="Spanish Trail homes for every lifestyle"
        description="Whether you seek golf course views, lock-and-leave convenience, or space for a growing family, browse current listings in this premier Las Vegas community."
        priceMin="600000"
        propertyTypes=",SFR,CONDO"
      />
      <FAQSection />
      <CTASection />
      <Script id="lifestyle-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="lifestyle-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="lifestyle-hero-heading">
      <SectionBanner headingId="lifestyle-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[#c6aa7a]">Living in Spanish Trail</p>
        <h1 id="lifestyle-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Lifestyle Guide
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Living in the Spanish Trail community affords you the best access to outdoor recreation, world-class dining, and premier shopping—all within a guard-gated desert oasis just 15 minutes from the Las Vegas Strip. Discover what makes this community exceptional.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Schedule a tour</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#lifestyle-homes">Browse homes</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="location-heading">
      <SectionBanner headingId="location-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Prime Location</p>
            <h2 id="location-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Serenity Minutes from Everything
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Spanish Trail is located in the Spring Valley area of Las Vegas, adjacent to Summerlin and positioned east of the Spanish Hills community. This distinguished guard-gated luxury community offers residents a convenient location with quick access to entertainment, dining, and shopping options throughout Las Vegas.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Outside the gates, residents can be on the Strip in only 10-15 minutes. Head west and Summerlin is a similar drive. This is an excellent location for those who want a resort setting that is only a short drive to all the excitement Las Vegas has to offer.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">Drive Times</h3>
            <div className="space-y-4">
              {[
                { destination: 'Las Vegas Strip', time: '10-15 minutes' },
                { destination: 'Downtown Summerlin', time: '10-12 minutes' },
                { destination: 'Red Rock Canyon', time: '15-20 minutes' },
                { destination: 'Harry Reid International Airport', time: '15-20 minutes' },
                { destination: 'Allegiant Stadium', time: '12-15 minutes' },
              ].map((item) => (
                <div key={item.destination} className="flex items-center justify-between rounded-2xl border border-border/60 bg-card/80 px-5 py-4 shadow-sm">
                  <p className="text-sm font-medium text-foreground">{item.destination}</p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OutdoorRecreationSection() {
  return (
    <section className="border-y border-border/60 bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="outdoor-heading">
      <SectionBanner headingId="outdoor-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Outdoor Recreation</p>
          <h2 id="outdoor-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Red Rock Canyon & Beyond
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Lovers of the great outdoors enjoy fine access to beautiful, spacious parks and world-class hiking just minutes from Spanish Trail. Las Vegas is known for its moderate to warm weather year-round, meaning there is always something to do outdoors.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-[#d8cdbf] bg-white p-8 shadow-lg shadow-primary/10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">Featured Destination</p>
          <h3 className="mt-3 font-[var(--font-playfair)] text-2xl text-[#1f2a24]">Red Rock Canyon National Conservation Area</h3>
          <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
            This outdoor recreational amenity is renowned for its hiking and rock climbing. Just a short drive from Spanish Trail, residents can immerse themselves in nature&apos;s serene beauty. The conservation area features trails for all skill levels, from easy walks to challenging summit hikes. Find historical landmarks that document the long history of Native Tribes in Nevada.
          </p>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f2b1e]">Popular Trails</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {redRockTrails.map((trail) => (
                <div key={trail} className="flex items-center gap-2 text-sm text-[#372a20]/80">
                  <span className="size-1.5 shrink-0 rounded-full bg-[#6f5237]" aria-hidden />
                  {trail}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-[#d8cdbf] bg-white p-8 shadow-lg shadow-primary/10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">Neighborhood Park</p>
          <h3 className="mt-3 font-[var(--font-playfair)] text-2xl text-[#1f2a24]">Old Spanish Trail Park</h3>
          <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
            This neighborhood park features a covered playground, paved walking paths, and picnic areas. Old Spanish Trail Park offers a historical connection to the Las Vegas Valley when it was a major stop along the historic overland route connecting settlements in Spanish New Mexico and California.
          </p>
        </div>
      </div>
    </section>
  )
}

function OnSiteAmenitiesSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="onsite-heading">
      <SectionBanner headingId="onsite-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">On-Site Amenities</p>
          <h2 id="onsite-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
            Spanish Trail Country Club
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Because the community is so large, you don&apos;t have to venture far for activities, fitness, or dining. The 50,000 square-foot clubhouse and surrounding facilities offer resort-level amenities for residents and members.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: '27-Hole Golf Course',
              description: 'The Robert Trent Jones Jr. course consists of three nine-hole courses, each offering distinct play for all skill levels. Lakes, waterfalls, streams, and 120 bunkers create a championship experience.',
            },
            {
              title: 'Tennis Center',
              description: 'One of the best tennis centers in Las Vegas with 12 lighted courts. A tennis shop with pros on hand offers lessons for all skill levels.',
            },
            {
              title: 'Two Aquatic Centers',
              description: 'Resort-style pools and spas for swimming, relaxation, and family fun. Swim lessons and aquatic programs available.',
            },
            {
              title: 'Fitness Facility',
              description: 'State-of-the-art equipment, personal trainers, and group fitness classes in a modern facility.',
            },
            {
              title: 'Lakes & Walking Paths',
              description: 'Miles of walking paths wind through the community, past scenic lakes where ducks and geese create a peaceful, parklike setting.',
            },
            {
              title: 'Social Clubs',
              description: 'Bridge club, wine society, and numerous social activities keep residents connected and engaged.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-border/50 bg-card/90 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          <strong>Note:</strong> Country Club and golf membership are not included in monthly HOA fees. The golf course was originally private but is now open for non-members to play as well as members.
        </p>
      </div>
    </section>
  )
}

function DiningSection() {
  return (
    <section className="border-y border-border/60 bg-card/80 py-16 sm:py-20" aria-labelledby="dining-heading">
      <SectionBanner headingId="dining-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Dining</p>
            <h2 id="dining-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              The Bar & Grill at Spanish Trail
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Bar & Grill is the heart of the Spanish Trail Country Club. These luxurious yet relaxing spaces offer members dining service 7 days a week. Whether you want to grab a drink after a round on the course, or you are looking for a sophisticated meal with family and friends, there is always something delicious for every palate.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              The clubhouse offers traditional food for owners who don&apos;t want to leave the property. Menu favorites include the Back-Nine Clubhouse—a triple-decker with turkey, ham, bacon, tomato, lettuce, and cheddar cheese on your choice of bread.
            </p>
            <Button asChild variant="outline" className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]">
              <Link href="/club">Explore club amenities</Link>
            </Button>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">Nearby Dining Options</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Outside the gates, residents have access to hundreds of restaurants throughout Las Vegas—from celebrity chef establishments on the Strip to neighborhood favorites in Spring Valley and Summerlin. Dr. Jan Duffy can recommend dining options based on your preferences and location within Spanish Trail.
            </p>
            <div className="space-y-3">
              {[
                'Las Vegas Strip world-class restaurants (10-15 min)',
                'Downtown Summerlin dining district (10-12 min)',
                'Spring Valley neighborhood restaurants (5-10 min)',
                'Tivoli Village shops and restaurants (12-15 min)',
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

function ShoppingSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="shopping-heading">
      <SectionBanner headingId="shopping-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Shopping</p>
          <h2 id="shopping-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
            World-Class Shopping Nearby
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Shopping is just around the corner from Spanish Trail. Whether you prefer upscale boutiques, major retailers, or everyday convenience, everything is within easy reach.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border/50 bg-card/90 p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">Featured Destination</p>
            <h3 className="mt-3 font-[var(--font-playfair)] text-2xl text-foreground">Grand Canal Shoppes at The Venetian</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              If you are going to go shopping, why not shop in style? This upscale resort mall features designer fashion, luxury brands, unique gifts, and exceptional dining—all beneath a painted sky along indoor canals.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              <strong>Don&apos;t miss:</strong> The Wishing Tree—an enchanting olive tree accented by a canopy of gold leaves and vibrant glass birds.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">More Shopping Options</h3>
            <div className="space-y-4">
              {[
                { name: 'Downtown Summerlin', description: 'Open-air shopping, dining, and entertainment district' },
                { name: 'Tivoli Village', description: 'European-inspired shops and restaurants' },
                { name: 'Fashion Show Mall', description: 'Major department stores and 250+ shops on the Strip' },
                { name: 'Local Conveniences', description: 'Whole Foods, Trader Joes, and major retailers nearby' },
              ].map((item) => (
                <div key={item.name} className="rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
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

function FAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="lifestyle-faq-heading">
      <SectionBanner headingId="lifestyle-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="lifestyle-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Spanish Trail Lifestyle FAQs
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
    <section className="bg-white py-16 sm:py-20 relative isolate overflow-hidden" aria-labelledby="lifestyle-cta-heading">
      <SectionBanner headingId="lifestyle-cta-heading" />
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 id="lifestyle-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Experience the Spanish Trail lifestyle
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Interested in living in the luxurious community of Spanish Trail? With stunning, spacious upscale real estate and direct access to top-rated schools and amenities, this community is perfect for families and professionals looking to settle in the Las Vegas Valley. Contact Dr. Jan Duffy at <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link> to explore the best of Spanish Trail today.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Connect with Dr. Jan Duffy</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="/communities/spanish-trail">Community overview</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
