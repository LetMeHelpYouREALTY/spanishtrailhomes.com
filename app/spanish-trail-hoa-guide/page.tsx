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


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-hoa-guide'
const pageDescription =
  'Spanish Trail HOA Las Vegas: new-owner orientation, gate access, fees, architectural review, and how HOA differs from country club dues in guard-gated 89113—Dr. Jan Duffy for real estate questions.'

const webPageSchema = createWebPageSchema({
  name: 'Spanish Trail HOA Las Vegas | Fees, Gates & New Owner Information',
  description: pageDescription,
  path: '/spanish-trail-hoa-guide',
})

export const metadata: Metadata = {
  title: 'Spanish Trail HOA Las Vegas | Fees, Gates & Rules | New Owner Guide',
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-hoa-guide'),
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
    title: 'Spanish Trail HOA Guide | Community Standards',
    description:
      'Everything new owners need to know about Spanish Trail HOA, from orientation to architectural guidelines.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail HOA Guide',
        subtitle: 'New owner orientation & rules',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail HOA Guide',
    description:
      'HOA orientation, gate access, and community standards for Spanish Trail homeowners.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail HOA',
        subtitle: 'Community standards & guidelines',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const faqContent = [
  {
    question: 'What does the Spanish Trail HOA cover in Las Vegas?',
    answer:
      'The Spanish Trail homeowners association (HOA) oversees guard-gated security, common-area landscaping and maintenance, community standards, and architectural review for the residential master plan in Las Vegas, NV 89113. It is separate from Spanish Trail Country Club: HOA dues are not the same as golf or social membership. For official fee schedules and rules packets, request the latest HOA documents on your specific listing—Dr. Jan Duffy helps buyers and sellers obtain them during escrow.',
  },
  {
    question: 'What happens during the new owner orientation?',
    answer:
      'New owners meet with HOA staff to review community rules, receive gate clickers and access credentials, learn about architectural guidelines, and get answers to questions about living in Spanish Trail. The orientation ensures every resident starts with a clear understanding of community standards.',
  },
  {
    question: 'How do I get gate access after purchasing a home?',
    answer:
      'Gate clickers and access codes are provided during the new owner orientation with the HOA. You\'ll receive credentials for all entry points, along with instructions for registering guests and arranging vendor access.',
  },
  {
    question: 'Is Country Club membership included in HOA fees?',
    answer:
      'No, Country Club and golf membership are separate from HOA fees. HOA dues cover guard-gate security, common area maintenance, and community services. Club membership is optional and has its own initiation fees and monthly dues.',
  },
  {
    question: 'What do HOA fees cover at Spanish Trail?',
    answer:
      'HOA fees typically cover 24/7 guard-gated security, common area landscaping and maintenance, street lighting, community reserves, and administrative services. Some neighborhoods have additional sub-association fees that cover exterior maintenance for townhomes and villas.',
  },
  {
    question: 'Are there architectural review requirements?',
    answer:
      'Yes, all exterior modifications require approval from the Architectural Review Committee (ARC). This includes paint colors, landscaping changes, additions, and solar installations. Dr. Jan Duffy can help you understand the approval process before you purchase.',
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

export default function SpanishTrailHOAGuidePage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Community', href: '/communities/spanish-trail' },
              { label: 'HOA Guide' },
            ]}
          />
        </div>
      </div>
      <OrientationSection />
      <GateAccessSection />
      <FeesSection />
      <ArchitecturalSection />
      <RealScoutSection
        id="hoa-homes"
        eyebrow="Find Your Home"
        title="Spanish Trail homes with HOA transparency"
        description="Dr. Jan Duffy provides complete HOA documentation for every listing—fees, reserves, and rules—so you can buy with confidence."
        priceMin="600000"
        propertyTypes=",SFR,CONDO"
      />
      <FAQSection />
      <CTASection />
      <Script id="hoa-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="hoa-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="hoa-hero-heading">
      <SectionBanner headingId="hoa-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[#c6aa7a]">Community Standards</p>
        <h1 id="hoa-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail HOA Guide for Buyers and Sellers
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Searching “Spanish Trail HOA” usually means you want fees, gates, and rules for this guard-gated Las Vegas community—not the private country club dues next door. The HOA keeps standards high across 89113; here is how orientation, access, and architectural review work before you buy or sell with Dr. Jan Duffy.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Ask about HOA details</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#hoa-homes">Browse homes</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function OrientationSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="orientation-heading">
      <SectionBanner headingId="orientation-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">New Owner Orientation</p>
            <h2 id="orientation-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Welcome to Spanish Trail
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              New owners must go through an orientation with the HOA before receiving gate access. During this session, you&apos;ll learn about community rules, receive your gate clickers and access credentials, and get answers to any questions about living in Spanish Trail.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              The orientation ensures every resident understands the community&apos;s expectations and helps maintain the property values and quality of life that make Spanish Trail exceptional. Most new owners find the process straightforward and appreciate the thoroughness.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">Orientation Includes</h3>
            <div className="space-y-4">
              {[
                { title: 'Community Rules Review', description: 'Overview of CC&Rs, use restrictions, and neighbor expectations' },
                { title: 'Gate Access Setup', description: 'Receive clickers and credentials for all entry points' },
                { title: 'Guest Registration', description: 'Learn how to register visitors and arrange vendor access' },
                { title: 'Architectural Guidelines', description: 'Understand the approval process for exterior changes' },
                { title: 'Emergency Contacts', description: 'Security, management, and maintenance contact information' },
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

function GateAccessSection() {
  return (
    <section className="border-y border-border/60 bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="gate-heading">
      <SectionBanner headingId="gate-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Guard-Gated Security</p>
          <h2 id="gate-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            24/7 Staffed Entry Gates
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Spanish Trail features multiple guard-gated entry points staffed around the clock. Security personnel manage visitor access, monitor the community, and ensure only authorized individuals enter the property.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Gate Clickers',
              description: 'Residents receive electronic clickers for convenient entry at all gates. Lost clickers can be replaced through the HOA.',
            },
            {
              title: 'Guest Access',
              description: 'Register guests in advance or call the gate for real-time visitor authorization. Frequent visitors can be added to an approved list.',
            },
            {
              title: 'Vendor Entry',
              description: 'Contractors and service providers need authorization. You can pre-register vendors or provide real-time approval.',
            },
            {
              title: 'Secondary Gates',
              description: 'Estate enclaves have additional mechanical gates providing an extra layer of privacy and security.',
            },
            {
              title: 'Patrol Services',
              description: 'Security patrols throughout the community provide additional monitoring and response capabilities.',
            },
            {
              title: 'Emergency Access',
              description: 'Coordinated protocols with fire, police, and medical services ensure rapid emergency response.',
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

function FeesSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="fees-heading">
      <SectionBanner headingId="fees-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">HOA Fees</p>
            <h2 id="fees-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Understanding Your Monthly Dues
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              HOA fees at Spanish Trail vary by neighborhood and property type. The master association covers community-wide services, while sub-associations in townhome and villa enclaves may have additional fees for exterior maintenance.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              <strong>Important:</strong> Country Club and golf membership are not included in HOA fees. Club membership is a separate, optional expense with its own initiation fees and monthly dues.
            </p>
            <Button asChild variant="outline" className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]">
              <Link href="/contact">Request fee details</Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">What HOA Fees Cover</h3>
            <div className="space-y-3">
              {[
                '24/7 guard-gated security at all entry points',
                'Community patrol and monitoring services',
                'Common area landscaping and maintenance',
                'Street lighting throughout the community',
                'Community reserves for capital improvements',
                'Administrative services and management',
                'Insurance for common areas',
                'Legal and accounting services',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="size-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Dr. Jan Duffy provides complete HOA documentation—including budgets, reserve studies, and fee history—for every Spanish Trail listing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArchitecturalSection() {
  return (
    <section className="border-y border-border/60 bg-card/80 py-16 sm:py-20" aria-labelledby="architectural-heading">
      <SectionBanner headingId="architectural-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Architectural Review</p>
            <h2 id="architectural-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Maintaining Community Standards
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Architectural Review Committee (ARC) ensures modifications throughout Spanish Trail maintain the community&apos;s aesthetic standards and property values. All exterior changes require ARC approval before work begins.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              This includes paint colors, landscaping changes, additions, remodels, solar panels, and any visible modifications. The review process protects your investment by ensuring neighbors maintain compatible standards.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">Requires ARC Approval</h3>
            <div className="space-y-4">
              {[
                { item: 'Exterior paint colors', note: 'Must be from approved palette' },
                { item: 'Landscaping changes', note: 'Including hardscape and plants' },
                { item: 'Additions & remodels', note: 'Plans reviewed for compatibility' },
                { item: 'Solar installations', note: 'Location and appearance reviewed' },
                { item: 'Fencing & walls', note: 'Material and height restrictions' },
                { item: 'Outdoor structures', note: 'Casitas, pergolas, outdoor kitchens' },
              ].map((entry) => (
                <div key={entry.item} className="rounded-2xl border border-border/60 bg-background/80 p-4 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">{entry.item}</p>
                  <p className="text-sm text-muted-foreground">{entry.note}</p>
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
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="hoa-faq-heading">
      <SectionBanner headingId="hoa-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="hoa-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          HOA Frequently Asked Questions
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
    <section className="bg-white py-16 sm:py-20 relative isolate overflow-hidden" aria-labelledby="hoa-cta-heading">
      <SectionBanner headingId="hoa-cta-heading" />
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 id="hoa-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          HOA facts before you buy or sell a Spanish Trail home
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Dr. Jan Duffy provides comprehensive HOA documentation for every Spanish Trail listing—fees, reserves, rules, and assessment history. Call <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link> for transparent guidance.
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
