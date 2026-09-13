import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Breadcrumbs } from '@/components/breadcrumbs'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { HeroBackground } from '@/components/hero-background'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner, CardVisual } from '@/components/heading-media'
import { getSiteImageUrl } from '@/lib/cloudflare-images'


const pageUrl = 'https://www.spanishtrailhomes.com/accessibility'
const accessibilityPageDescription =
  'Learn how SpanishTrailHomes.com supports visitors of all abilities, follows WCAG recommendations, and provides channels to request assistance or report barriers.'

const accessibilitySchema = {
  '@context': 'https://schema.org',
  '@type': 'AccessibilitySupport',
  name: 'SpanishTrailHomes.com Accessibility Statement',
  url: pageUrl,
  provider: {
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    areaServed: 'Spanish Trail, Las Vegas, Nevada',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
  },
  accessibilityControl: ['keyboard', 'voiceControl', 'textToSpeech', 'highContrast', 'captions'],
  accessibilityFeature: ['altText', 'structuralNavigation', 'responsiveUI', 'aria'],
  accessibilityHazard: 'noFlashingHazard',
  datePublished: '2025-11-10',
  dateModified: new Date().toISOString().split('T')[0],
  description:
    'Accessibility commitment for SpanishTrailHomes.com detailing WCAG conformance goals, assistive technology support, testing process, and feedback channels.',
}

const accessibilityWebPageSchema = createWebPageSchema({
  name: 'Accessibility Statement | SpanishTrailHomes.com',
  description: accessibilityPageDescription,
  path: '/accessibility',
  extra: {
    accessibilitySummary:
      'SpanishTrailHomes.com follows WCAG 2.2 AA practices, supports keyboard navigation, screen readers, and offers multiple contact channels for accessibility requests.',
  },
})

export const metadata: Metadata = {
  title: 'Accessibility Statement | SpanishTrailHomes.com',
  description: accessibilityPageDescription,
  alternates: {
    canonical: getCanonicalUrl('/accessibility'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: pageUrl,
    title: 'SpanishTrailHomes.com Accessibility Statement',
    description:
      'See the inclusive design practices, assistive technology support, and contact information for accessibility requests on SpanishTrailHomes.com.',
    images: [
      createOgImageUrl({
        title: 'Accessibility Commitment',
        subtitle: 'Inclusive access to SpanishTrailHomes.com',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary',
    title: 'SpanishTrailHomes.com Accessibility Statement',
    description:
      'Discover how SpanishTrailHomes.com meets WCAG guidance and how to request accommodations or report usability issues.',
    images: [
      createOgImageUrl({
        title: 'Accessibility Support',
        subtitle: 'WCAG-aligned experience & request channels',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function AccessibilityPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Accessibility Statement' },
            ]}
          />
        </div>
      </div>
      <CommitmentSection />
      <StandardsSection />
      <TestingSection />
      <AssistiveTechnologySection />
      <FeedbackSection />
      <OngoingImprovementsSection />
      <ContactSection />
      <Script id="accessibility-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(accessibilitySchema)}
      </Script>
      <Script id="accessibility-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(accessibilityWebPageSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <header className="relative isolate overflow-hidden text-[#f8f5ef]" aria-labelledby="accessibility-hero-heading">
      <HeroBackground
        src={getSiteImageUrl('h2-accessible-entrance')}
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/55 to-[#0f2b1e]/85"
        sizes="(max-width: 1024px) 100vw, 1280px"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-[#0f2b1e]/80" />
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-24 text-center sm:py-28">
        <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/75">Accessibility at SpanishTrailHomes.com</p>
        <h1 id="accessibility-hero-heading" className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
          Inclusive access to Spanish Trail real estate information
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          We are committed to delivering an accessible experience for every visitor. This statement outlines our standards,
          testing methods, and support channels in collaboration with Berkshire Hathaway HomeServices Nevada Properties.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#f8f5ef] px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#f6ead7]"
          >
            <Link href="#accessibility-feedback">Request assistance</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/privacy">Review privacy practices</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function CommitmentSection() {
  return (
    <section id="accessibility-commitment" className="bg-white py-20 sm:py-24" aria-labelledby="commitment-heading">
      <SectionBanner headingId="commitment-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Commitment</p>
          <h2 id="commitment-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Accessibility is integral to Spanish Trail client service
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Dr. Jan Duffy works alongside Berkshire Hathaway HomeServices Nevada Properties to ensure digital assets meet the
            same level of concierge attention provided during property tours, listing preparations, and relocation support.
          </p>
        </div>
        <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <li>Accessibility improvements are incorporated into every website release cycle.</li>
          <li>We review design choices for color contrast, typography legibility, and keyboard navigation.</li>
          <li>
            Client feedback on accessibility is escalated directly to leadership for prompt review and remediation planning.
          </li>
        </ul>
      </div>
    </section>
  )
}

function StandardsSection() {
  return (
    <section id="accessibility-standards" className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="standards-heading">
      <SectionBanner headingId="standards-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Standards & Guidelines</p>
            <h2 id="standards-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
              Following WCAG and ADA recommendations
            </h2>
            <p className="text-base leading-relaxed text-[#372a20]/85">
              The site aims to conform to WCAG 2.2 AA guidelines. We continuously monitor updates from the W3C and Department of
              Justice to align with real estate-specific regulations.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
          >
            <Link href="/spanish-trail-insights">Read compliance updates</Link>
          </Button>
        </div>
        <ul className="mt-12 space-y-4 text-sm leading-relaxed text-[#372a20]/85">
          <li>Navigation landmarks and ARIA labels support screen reader users.</li>
          <li>Every image is reviewed for meaningful alternative text or marked decorative when appropriate.</li>
          <li>Videos include captions or written transcripts when produced internally.</li>
        </ul>
      </div>
    </section>
  )
}

function TestingSection() {
  return (
    <section id="accessibility-testing" className="bg-white py-20 sm:py-24" aria-labelledby="testing-heading">
      <SectionBanner headingId="testing-heading" />
      <div className="mx-auto max-w-5xl px-6 space-y-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Testing Process</p>
          <h2 id="testing-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Automated scans and human review
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            SpanishTrailHomes.com uses automated tools such as Axe and Lighthouse, paired with manual testing on desktop and
            mobile devices, to detect potential barriers.
          </p>
        </div>
        <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <li>Quarterly accessibility audits document findings and track remediation progress.</li>
          <li>Assistive technology testing includes NVDA, VoiceOver, and TalkBack when evaluating key flows.</li>
          <li>Significant updates trigger regression testing to ensure no new barriers are introduced.</li>
        </ul>
      </div>
    </section>
  )
}

function AssistiveTechnologySection() {
  return (
    <section
      id="assistive-technology"
      className="bg-[#0f2b1e] py-20 text-[#f8f5ef] sm:py-24"
      aria-labelledby="assistive-technology-heading"
    >
      <SectionBanner headingId="assistive-technology-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/70">Assistive Technology Support</p>
          <h2 id="assistive-technology-heading" className="font-heading text-3xl text-white sm:text-4xl">
            Compatibility across devices and tools
          </h2>
          <p className="text-base leading-relaxed text-[#f8f5ef]/85">
            The site is engineered for compatibility with a wide range of assistive tools so Spanish Trail real estate insights
            remain accessible to everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur">
              <CardVisual seed="card-1" />
            <h3 className="font-heading text-xl text-white">Supported tools</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#f8f5ef]/80">
              Screen readers (NVDA, JAWS, VoiceOver), screen magnifiers, voice input software, and keyboard-only navigation are
              supported throughout primary workflows.
            </p>
          </article>
          <article className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur">
              <CardVisual seed="card-2" />
            <h3 className="font-heading text-xl text-white">Responsive design</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#f8f5ef]/80">
              Layouts adapt for small screens, large monitors, and assistive interfaces, ensuring consistent access to listings,
              market insights, and contact forms.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

function FeedbackSection() {
  return (
    <section
      id="accessibility-feedback"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="feedback-heading"
    >
      <SectionBanner headingId="feedback-heading" />
      <div className="mx-auto max-w-5xl px-6 space-y-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Feedback & Support</p>
          <h2 id="feedback-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Tell us how we can improve your experience
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            If you encounter an accessibility barrier, please reach out immediately. We respond within two business days and
            collaborate on a resolution pathway that meets your preferred communication method.
          </p>
        </div>
        <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <li>
            Provide details about the page, assistive technology, and barrier encountered to help us reproduce the issue
            accurately.
          </li>
          <li>
            Alternate accessible formats (large print, plain text email summaries, PDF) are available upon request for Spanish
            Trail reports and property briefs.
          </li>
          <li>
            Urgent showing or contract needs can be addressed via phone to ensure accessibility concerns never delay your real
            estate transaction.
          </li>
        </ul>
      </div>
    </section>
  )
}

function OngoingImprovementsSection() {
  return (
    <section id="accessibility-improvements" className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="improvements-heading">
      <SectionBanner headingId="improvements-heading" />
      <div className="mx-auto max-w-5xl px-6 space-y-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Continuous Improvement</p>
          <h2 id="improvements-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Monitoring, training, and future enhancements
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Accessibility is a journey. Our roadmap includes staff training, vendor coordination, and ongoing audits to keep pace
            with evolving standards and technologies.
          </p>
        </div>
        <ul className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
          <li>Quarterly training keeps marketing and technology teams current on accessibility best practices.</li>
          <li>We evaluate new vendors for WCAG compliance before integrating their tools or content.</li>
          <li>Future updates include additional language support and optional text-size controls for long-form guides.</li>
        </ul>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="accessibility-contact" className="bg-white py-20 sm:py-24" aria-labelledby="accessibility-contact-heading">
      <SectionBanner headingId="accessibility-contact-heading" />
      <div className="mx-auto max-w-4xl rounded-3xl border border-border/40 bg-[#0f2b1e] px-8 py-16 text-center text-[#f8f5ef] shadow-xl shadow-primary/20">
        <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/70">Direct Assistance</p>
        <h2 id="accessibility-contact-heading" className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">
          Need immediate accessibility support?
        </h2>
        <p className="mt-6 text-base leading-relaxed text-[#f8f5ef]/85">
          Contact Dr. Jan Duffy or Berkshire Hathaway HomeServices Nevada Properties to request accommodations, schedule a
          personalized consultation, or receive property information in an alternate format.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm uppercase tracking-[0.3em] text-[#f8f5ef]">
          <Link
            href="mailto:DrDuffySells@SpanishTrailHomes.com"
            className="rounded-full border border-[#f8f5ef]/50 px-6 py-3 hover:bg-white/10"
          >
            Email DrDuffySells@SpanishTrailHomes.com
          </Link>
          <Link href="tel:+17027663299" className="rounded-full border border-[#f8f5ef]/50 px-6 py-3 hover:bg-white/10">
            Call (702) 766-3299
          </Link>
          <Link href="/contact" className="rounded-full border border-[#f8f5ef]/50 px-6 py-3 hover:bg-white/10">
            Submit contact form
          </Link>
        </div>
        <p className="mt-6 text-xs text-[#f8f5ef]/70">
          Effective November 10, 2025. We welcome feedback to help enhance accessibility across every Spanish Trail touchpoint.
        </p>
      </div>
    </section>
  )
}

