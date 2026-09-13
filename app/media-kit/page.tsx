import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { HeroBackground } from '@/components/hero-background'
import { CalendlyLink } from '@/components/calendly-link'
import { SectionBanner } from '@/components/heading-media'
import { AgentPortrait } from '@/components/agent-portrait'
import {
  createOgImageUrl,
  createWebPageSchema,
  createBreadcrumbSchema,
  getCanonicalUrl,
} from '@/lib/structuredData'
import { getAgentPortraitAbsoluteUrl } from '@/lib/agent-portraits'

const pageUrl = 'https://www.spanishtrailhomes.com/media-kit'
const pageTitle = 'Spanish Trail Homes Media Kit - Dr. Jan Duffy'
const pageDescription =
  'Official media kit for Dr. Jan Duffy, luxury real estate specialist for Spanish Trail, Las Vegas. Bio, credentials, headshot, and contact for press and partnership inquiries. Schedule a consultation.'

const mediaKitWebPageSchema = createWebPageSchema({
  name: pageTitle,
  description: pageDescription,
  path: '/media-kit',
  type: 'WebPage',
})

const mediaKitBreadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Media Kit', url: '/media-kit' },
])

const agentSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Dr. Jan Duffy',
  url: pageUrl,
  image: getAgentPortraitAbsoluteUrl('agent-duffy-media'),
  jobTitle: 'REALTOR® | Berkshire Hathaway HomeServices Nevada Properties',
  email: 'DrDuffySells@SpanishTrailHomes.com',
  telephone: '+1-702-766-3299',
  description: pageDescription,
  areaServed: ['Spanish Trail, Las Vegas, Nevada', 'Southwest Las Vegas, Nevada'],
  worksFor: {
    '@type': 'Organization',
    name: 'Berkshire Hathaway HomeServices Nevada Properties',
  },
  sameAs: [
    'https://www.facebook.com/spanishtrailhomes',
    'https://www.instagram.com/spanishtrailhomes',
    'https://www.linkedin.com/company/spanishtrailhomes',
  ],
}

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/media-kit'),
  },
  openGraph: {
    url: pageUrl,
    title: pageTitle,
    description:
      'Media kit for Dr. Jan Duffy—Spanish Trail luxury real estate expert. Bio, credentials, and contact. Book a consultation for buying or selling in Las Vegas guard-gated golf community.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Homes Media Kit',
        subtitle: 'Dr. Jan Duffy · Luxury Real Estate',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

const quickFacts = [
  { label: 'License', value: 'S.0197614.LLC' },
  { label: 'Brokerage', value: 'Berkshire Hathaway HomeServices Nevada Properties' },
  { label: 'Focus', value: 'Spanish Trail & guard-gated Las Vegas luxury' },
  { label: 'Expertise', value: 'Buyer & seller representation, golf community homes' },
]

const credentials = [
  'Ph.D. in Market Research & Consumer Behavior',
  'Certified Luxury Marketing Specialist (CLHMS)',
  'Berkshire Hathaway HomeServices Luxury Golf Homes (top 2% network-wide)',
  'Las Vegas REALTORS® Top 25 Luxury Producer',
  'RealScout Spanish Trail Market Expert',
]

export default function MediaKitPage() {
  return (
    <SiteShell>
      <Script
        id="media-kit-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            mediaKitWebPageSchema,
            mediaKitBreadcrumbSchema,
            agentSchema,
          ]),
        }}
      />

      <HeroBackground
        title="Spanish Trail Homes Media Kit"
        subtitle="Dr. Jan Duffy · Spanish Trail homes realtor"
        description="Press kit for the realtor who buys and sells Spanish Trail homes only."
      />
      <div className="flex justify-center bg-[#f8f5ef] py-8">
        <AgentPortrait placement="media" size="xl" rounded="2xl" showCaption schema pagePath="/media-kit" />
      </div>
      <RealScoutSection id="bhhs-listings" />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Media Kit', href: '/media-kit' },
          ]}
        />

        {/* Primary CTA - appointment-focused for Facebook traffic */}
        <section className="mb-12 rounded-2xl border border-[#0f2b1e]/20 bg-[#f8f5ef] p-6 text-center shadow-sm sm:p-8">
          <h2 className="font-playfair text-2xl font-semibold text-[#0f2b1e] sm:text-3xl">
            Schedule a Consultation
          </h2>
          <p className="mt-2 text-balance text-[#0f2b1e]/80">
            Buying or selling in Spanish Trail? Book a private strategy session or home tour with Dr. Jan Duffy.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <CalendlyLink
              className="inline-flex items-center justify-center rounded-full bg-[#0f2b1e] px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-[#0f2b1e]/90"
              ctaText="Book Appointment"
              ctaLocation="media_kit"
            >
              Book Appointment
            </CalendlyLink>
            <Button variant="outline" size="lg" asChild className="rounded-full border-[#0f2b1e]/40">
              <Link href="tel:+17027663299">(702) 766-3299</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="mailto:DrDuffySells@SpanishTrailHomes.com">Email Dr. Duffy</Link>
            </Button>
          </div>
        </section>

        {/* Bio */}
        <section className="mb-12" aria-labelledby="bio-heading">
      <SectionBanner headingId="bio-heading" />
          <h2 id="bio-heading" className="font-playfair text-xl font-semibold text-[#0f2b1e] sm:text-2xl">
            Bio
          </h2>
          <p className="mt-3 text-[#0f2b1e]/90 leading-relaxed">
            Dr. Jan Duffy is a luxury real estate specialist representing buyers and sellers in Spanish Trail and
            guard-gated golf communities across Las Vegas. With a Ph.D. in Market Research & Consumer Behavior and
            deep roots in the 89113 corridor, she combines data-led preparation, concierge-level service, and
            community fluency to guide clients through high-stakes transactions. She has advised hundreds of
            Spanish Trail families and is recognized by Berkshire Hathaway HomeServices Luxury Golf Homes (top 2%
            network-wide), Las Vegas REALTORS® Top 25 Luxury Producer, and RealScout as Spanish Trail Market Expert.
          </p>
        </section>

        {/* Quick facts */}
        <section className="mb-12" aria-labelledby="facts-heading">
      <SectionBanner headingId="facts-heading" />
          <h2 id="facts-heading" className="font-playfair text-xl font-semibold text-[#0f2b1e] sm:text-2xl">
            Quick Facts
          </h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {quickFacts.map(({ label, value }) => (
              <li key={label} className="flex gap-2 border-b border-[#0f2b1e]/10 pb-2 last:border-0">
                <span className="font-medium text-[#0f2b1e]/80 shrink-0">{label}:</span>
                <span className="text-[#0f2b1e]/90">{value}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Credentials */}
        <section className="mb-12" aria-labelledby="credentials-heading">
      <SectionBanner headingId="credentials-heading" />
          <h2 id="credentials-heading" className="font-playfair text-xl font-semibold text-[#0f2b1e] sm:text-2xl">
            Credentials & Recognition
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-1 text-[#0f2b1e]/90">
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Media assets / headshot */}
        <section className="mb-12" aria-labelledby="media-heading">
      <SectionBanner headingId="media-heading" />
          <h2 id="media-heading" className="font-playfair text-xl font-semibold text-[#0f2b1e] sm:text-2xl">
            Media Assets
          </h2>
          <p className="mt-3 text-[#0f2b1e]/90 leading-relaxed">
            Headshots, logos, and approved brand assets are available for press and partnership use. Contact Dr. Jan
            Duffy at{' '}
            <Link
              href="mailto:DrDuffySells@SpanishTrailHomes.com"
              className="text-[#0f2b1e] underline underline-offset-4 hover:no-underline"
            >
              DrDuffySells@SpanishTrailHomes.com
            </Link>{' '}
            or call{' '}
            <Link href="tel:+17027663299" className="text-[#0f2b1e] underline underline-offset-4 hover:no-underline">
              (702) 766-3299
            </Link>{' '}
            to request high-resolution files and usage guidelines.
          </p>
        </section>

        {/* NAP & final CTA */}
        <section className="rounded-2xl border border-[#0f2b1e]/20 bg-[#f8f5ef] p-6 sm:p-8" aria-labelledby="contact-heading">
      <SectionBanner headingId="contact-heading" />
          <h2 id="contact-heading" className="font-playfair text-xl font-semibold text-[#0f2b1e] sm:text-2xl">
            Contact
          </h2>
          <p className="mt-2 text-[#0f2b1e]/90">
            <strong>Dr. Jan Duffy</strong>
            <br />
            REALTOR® · Berkshire Hathaway HomeServices Nevada Properties
            <br />
            License S.0197614.LLC
          </p>
          <p className="mt-3">
            <Link
              href="tel:+17027663299"
              className="text-[#0f2b1e] underline underline-offset-4 hover:no-underline"
            >
              (702) 766-3299
            </Link>
            {' · '}
            <Link
              href="mailto:DrDuffySells@SpanishTrailHomes.com"
              className="text-[#0f2b1e] underline underline-offset-4 hover:no-underline"
            >
              DrDuffySells@SpanishTrailHomes.com
            </Link>
          </p>
          <p className="mt-2 text-sm text-[#0f2b1e]/80">
            5050 Spanish Trail Ln, Las Vegas, NV 89113
          </p>
          <div className="mt-6">
            <CalendlyLink
              className="inline-flex items-center justify-center rounded-full bg-[#0f2b1e] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#0f2b1e]/90"
              ctaText="Book a Consultation"
              ctaLocation="media_kit_footer"
            >
              Book a Consultation
            </CalendlyLink>
          </div>
        </section>

        <p className="mt-8 text-center text-sm text-[#0f2b1e]/70">
          <Link href="/about" className="underline underline-offset-4 hover:no-underline">
            Full bio & approach
          </Link>
          {' · '}
          <Link href="/contact" className="underline underline-offset-4 hover:no-underline">
            Contact & schedule
          </Link>
        </p>
      </div>
    </SiteShell>
  )
}
