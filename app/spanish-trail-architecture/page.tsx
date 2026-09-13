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


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-architecture'
const pageDescription =
  'Explore Spanish Trail home architecture styles—Mediterranean influences, desert-inspired designs, and custom estate features. From pink and cream stucco villas to gated luxury estates in Las Vegas.'

const webPageSchema = createWebPageSchema({
  name: 'Spanish Trail Architecture & Home Styles | Las Vegas Luxury',
  description: pageDescription,
  path: '/spanish-trail-architecture',
})

export const metadata: Metadata = {
  title: 'Spanish Trail Architecture & Home Styles | Mediterranean Luxury',
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-architecture'),
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
    title: 'Spanish Trail Architecture | Mediterranean & Desert Luxury',
    description:
      'Custom estates, Mediterranean villas, and semi-custom homes in Spanish Trail Las Vegas. Explore the architectural diversity.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Architecture',
        subtitle: 'Mediterranean & desert luxury styles',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Home Architecture',
    description:
      'From Mediterranean estates to desert-modern designs, explore Spanish Trail architectural styles.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Architecture',
        subtitle: 'Luxury home styles in Las Vegas',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const faqContent = [
  {
    question: 'What architectural styles are found in Spanish Trail?',
    answer:
      'Spanish Trail features predominantly Mediterranean-influenced architecture, along with Tuscan, Spanish Colonial, and contemporary desert designs. The custom estates vary in style, while semi-custom homes tend toward cohesive pale pink and cream stucco finishes that complement the desert landscape.',
  },
  {
    question: 'What colors are Spanish Trail homes?',
    answer:
      'The smaller, semi-custom homes feature elegant pale pink and cream stucco finishes. Custom estate homes offer more variety but maintain desert-appropriate palettes. All exterior colors must be approved by the Architectural Review Committee to ensure community-wide harmony.',
  },
  {
    question: 'Are there gated estate enclaves within Spanish Trail?',
    answer:
      'Yes, the custom estate homes are located behind secondary mechanical gates, providing an additional layer of privacy and exclusivity beyond the community\'s main guard-gated entry. These enclaves offer the most prestigious addresses in Spanish Trail.',
  },
  {
    question: 'Can I renovate or modify my Spanish Trail home exterior?',
    answer:
      'All exterior modifications require approval from the Architectural Review Committee (ARC). This ensures renovations maintain Spanish Trail\'s aesthetic standards. Dr. Jan Duffy can explain the approval process and connect you with architects who understand the guidelines.',
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

export default function SpanishTrailArchitecturePage() {
  return (
    <SiteShell>
      <HeroSection />
      <RealScoutSection
        id="bhhs-listings"
        eyebrow="Browse by Style"
        title="Spanish Trail homes across architectural styles"
        description="From Mediterranean villas to contemporary estates, explore homes that match your aesthetic preferences."
        priceMin="600000"
        propertyTypes=",SFR,CONDO"
      />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Community', href: '/communities/spanish-trail' },
              { label: 'Architecture' },
            ]}
          />
        </div>
      </div>
      <StylesOverviewSection />
      <HomeTypesSection />
      <EstateEnclavesSection />
      <DesignElementsSection />
      <FAQSection />
      <CTASection />
      <Script id="architecture-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="architecture-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="architecture-hero-heading">
      <SectionBanner headingId="architecture-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[#c6aa7a]">Home Design</p>
        <h1 id="architecture-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Architecture | Home Styles for Buyers and Sellers
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Homes in Spanish Trail range from elegant villas to custom-built estates, showcasing architectural diversity within a cohesive desert aesthetic. The custom homes vary in style but most show Mediterranean influence, while semi-custom homes feature harmonious pale pink and cream stucco finishes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Find your style</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#architecture-homes">Browse homes</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function StylesOverviewSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="styles-heading">
      <SectionBanner headingId="styles-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Architectural Heritage</p>
            <h2 id="styles-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Mediterranean Influence Meets Desert Living
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Spanish Trail homes were built primarily in the mid-1980s and 1990s, establishing architectural traditions that continue to define the community. The Mediterranean influence is evident throughout—clay tile roofs, arched doorways, wrought iron details, and stucco exteriors in warm desert tones.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              This cohesive aesthetic creates visual harmony across the community&apos;s 11 neighborhoods while allowing for individual expression in custom estate homes. The mature landscaping—unusual for Las Vegas—adds character that newer communities cannot replicate.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">Dominant Styles</h3>
            <div className="space-y-4">
              {[
                { style: 'Mediterranean', description: 'Stucco exteriors, clay tile roofs, arched entries, courtyards' },
                { style: 'Tuscan', description: 'Stone accents, earth tones, rustic elegance, vineyard influence' },
                { style: 'Spanish Colonial', description: 'Red tile roofs, white stucco, ornate ironwork, inner courtyards' },
                { style: 'Desert Contemporary', description: 'Clean lines, indoor-outdoor flow, natural materials, modern updates' },
              ].map((item) => (
                <div key={item.style} className="rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">{item.style}</p>
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

function HomeTypesSection() {
  return (
    <section className="border-y border-border/60 bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="hometypes-heading">
      <SectionBanner headingId="hometypes-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Property Types</p>
          <h2 id="hometypes-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            From Villas to Custom Estates
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Spanish Trail offers architectural variety to match different lifestyles and preferences. Whether you seek low-maintenance villa living or a custom estate with every amenity, the community accommodates diverse needs within its cohesive design framework.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Custom Estate Homes',
              description: 'Luxury custom estates in a variety of styles, most showing Mediterranean influence. Located behind secondary mechanical gates for maximum privacy. Priced at $2M and above, with select properties in the high $900s.',
            },
            {
              title: 'Semi-Custom Homes',
              description: 'Elegant single-family homes in pale pink and cream stucco finishes. Built with quality craftsmanship during the mid-1980s and 1990s. These homes offer timeless desert aesthetics with room for personalization.',
            },
            {
              title: 'Townhomes & Condos',
              description: 'Lock-and-leave townhomes clustered around lakes on the golf course, creating peaceful, parklike settings. Mediterranean styling with shared exterior maintenance for carefree ownership.',
            },
            {
              title: 'Golf Villas',
              description: 'Residences positioned along the championship fairways with panoramic course views. Designed for avid golfers wanting cart-accessible, resort-style living.',
            },
            {
              title: 'Courtyard Homes',
              description: 'Single-story floor plans with enclosed private courtyards, offering intimate outdoor spaces surrounded by Mediterranean walls and mature landscaping.',
            },
            {
              title: 'Lakefront Properties',
              description: 'Homes overlooking Spanish Trail\'s serene lakes and water features. Residents enjoy watching ducks and geese that share the tranquil waterways.',
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

function EstateEnclavesSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="enclaves-heading">
      <SectionBanner headingId="enclaves-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Exclusive Enclaves</p>
            <h2 id="enclaves-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Estate Homes Behind Secondary Gates
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The custom estate homes at Spanish Trail are located behind secondary mechanical gates, providing an additional layer of privacy and exclusivity beyond the community&apos;s main guard-gated entry. These prestigious enclaves represent the pinnacle of Spanish Trail living.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Estate homeowners enjoy the same community amenities—golf, tennis, fitness, dining—while benefiting from enhanced seclusion. The secondary gates limit traffic and create intimate neighborhoods within the larger community.
            </p>
            <Button asChild variant="outline" className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]">
              <Link href="/spanish-trail-country-club-estate-listings">View estate listings</Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">Estate Features</h3>
            <div className="space-y-3">
              {[
                'Secondary mechanical gates for enhanced privacy',
                'Larger lot sizes with mature landscaping',
                'Custom architectural designs unique to each home',
                'Premium golf course and mountain views',
                'Motor courts and multi-car garages',
                'Resort-style pools, spas, and outdoor living',
                'Guest casitas and separate staff quarters',
                'Home theaters, wine cellars, and wellness suites',
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

function DesignElementsSection() {
  return (
    <section className="border-y border-border/60 bg-card/80 py-16 sm:py-20" aria-labelledby="elements-heading">
      <SectionBanner headingId="elements-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Design Elements</p>
          <h2 id="elements-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
            Signature Architectural Details
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail homes share common design elements that create visual cohesion while allowing individual expression. These signature details define the community&apos;s character and contribute to lasting property values.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              element: 'Stucco Exteriors',
              details: 'Pale pink and cream tones complement the desert landscape. Smooth and textured finishes add visual interest.',
            },
            {
              element: 'Clay Tile Roofs',
              details: 'Barrel and flat tile roofing in terracotta and earth tones. Durable and distinctly Mediterranean.',
            },
            {
              element: 'Arched Entries',
              details: 'Graceful arched doorways and windows create elegant transitions between spaces.',
            },
            {
              element: 'Wrought Iron',
              details: 'Decorative ironwork on gates, railings, and light fixtures adds Spanish Colonial charm.',
            },
            {
              element: 'Courtyards',
              details: 'Interior courtyards with fountains, mature trees, and outdoor living spaces extend the home.',
            },
            {
              element: 'Mature Landscaping',
              details: 'Established trees, flowering plants, and water-wise gardens rarely found in newer communities.',
            },
            {
              element: 'Stone Accents',
              details: 'Natural stone on facades, entryways, and hardscaping adds texture and visual weight.',
            },
            {
              element: 'Outdoor Living',
              details: 'Covered patios, outdoor kitchens, pools, and casitas extend living space into the desert air.',
            },
          ].map((item) => (
            <div key={item.element} className="rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground">{item.element}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="architecture-faq-heading">
      <SectionBanner headingId="architecture-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="architecture-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Architecture FAQs
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
    <section className="bg-white py-16 sm:py-20 relative isolate overflow-hidden" aria-labelledby="architecture-cta-heading">
      <SectionBanner headingId="architecture-cta-heading" />
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 id="architecture-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Find a home that matches your style
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Dr. Jan Duffy understands the architectural nuances of every Spanish Trail neighborhood. Call <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link> to find homes that match your aesthetic preferences and lifestyle needs.
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
