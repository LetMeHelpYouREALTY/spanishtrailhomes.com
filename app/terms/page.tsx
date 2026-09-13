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


const pageUrl = 'https://www.spanishtrailhomes.com/terms'
const termsPageDescription =
  'Review the legal terms that govern access to and use of SpanishTrailHomes.com, including MLS data guidelines, disclaimers, and contact information.'

const termsSchema = {
  '@context': 'https://schema.org',
  '@type': 'TermsOfService',
  name: 'SpanishTrailHomes.com Terms of Use',
  url: pageUrl,
  publisher: {
    '@type': 'Organization',
    name: 'Berkshire Hathaway HomeServices Nevada Properties',
    brand: {
      '@type': 'Brand',
      name: 'SpanishTrailHomes.com',
    },
  },
  datePublished: '2025-11-10',
  dateModified: new Date().toISOString().split('T')[0],
  description:
    'Terms governing access to SpanishTrailHomes.com, including permissible use, MLS data guidelines, intellectual property, disclaimers, and dispute resolution.',
}

const termsWebPageSchema = createWebPageSchema({
  name: 'Terms of Use | SpanishTrailHomes.com',
  description: termsPageDescription,
  path: '/terms',
  type: 'TermsOfService',
})

export const metadata: Metadata = {
  title: 'Terms of Use | SpanishTrailHomes.com',
  description: termsPageDescription,
  alternates: {
    canonical: getCanonicalUrl('/terms'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: pageUrl,
    title: 'SpanishTrailHomes.com Terms of Use',
    description:
      'Understand the rules for using SpanishTrailHomes.com, including permitted activities, data accuracy, and MLS disclosure requirements.',
    images: [
      createOgImageUrl({
        title: 'Terms of Use',
        subtitle: 'Guidelines for SpanishTrailHomes.com',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary',
    title: 'SpanishTrailHomes.com Terms of Use',
    description:
      'Learn about authorized use, intellectual property, and disclaimers for SpanishTrailHomes.com, operated by Dr. Jan Duffy.',
    images: [
      createOgImageUrl({
        title: 'Terms of Use',
        subtitle: 'Policies & legal disclosures',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function TermsPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Terms of Use' },
            ]}
          />
        </div>
      </div>
      <AgreementSection />
      <AuthorizedUseSection />
      <ListingsDisclosureSection />
      <IntellectualPropertySection />
      <LiabilitySection />
      <GoverningLawSection />
      <ChangesSection />
      <ContactSection />
      <Script id="terms-of-use-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(termsSchema)}
      </Script>
      <Script id="terms-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(termsWebPageSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <header className="relative isolate overflow-hidden text-[#f8f5ef]" aria-labelledby="terms-hero-heading">
      <HeroBackground
        src={getSiteImageUrl('h1-contact-office')}
        alt="Spanish Trail Homes terms of use and legal information for Las Vegas real estate services"
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/55 to-[#0f2b1e]/85"
        sizes="(max-width: 1024px) 100vw, 1280px"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-[#0f2b1e]/80" />
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-24 text-center sm:py-28">
        <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/75">Terms of Use</p>
        <h1 id="terms-hero-heading" className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
          Understand the legal framework for SpanishTrailHomes.com
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          These terms outline how Dr. Jan Duffy, a REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, offers
          digital resources, MLS data, and advisory content for Spanish Trail clientele.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#f8f5ef] px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#f6ead7]"
          >
            <Link href="#terms-contact">Request clarification</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/privacy">Read privacy policy</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function AgreementSection() {
  return (
    <section id="agreement" className="bg-white py-20 sm:py-24" aria-labelledby="agreement-heading">
      <SectionBanner headingId="agreement-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Agreement Overview</p>
          <h2 id="agreement-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Binding agreement between visitors and Berkshire Hathaway HomeServices Nevada Properties
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            By accessing or using SpanishTrailHomes.com you acknowledge the authority of Berkshire Hathaway HomeServices Nevada
            Properties and Dr. Jan Duffy to provide real estate information, and you agree to comply with the terms set forth
            on this page.
          </p>
        </div>
        <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <li>
            The terms apply to all site visitors, clients, and prospects who access property search tools, valuation features, or
            downloadable resources.
          </li>
          <li>
            If you disagree with any portion of these terms, discontinue use immediately and contact Dr. Duffy for alternative
            communication channels.
          </li>
          <li>
            These terms operate alongside brokerage agreements you sign when engaging Spanish Trail representation services.
          </li>
        </ul>
      </div>
    </section>
  )
}

function AuthorizedUseSection() {
  return (
    <section id="authorized-use" className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="authorized-use-heading">
      <SectionBanner headingId="authorized-use-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Authorized Use</p>
            <h2 id="authorized-use-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
              Responsible use of digital tools and content
            </h2>
            <p className="text-base leading-relaxed text-[#372a20]/85">
              SpanishTrailHomes.com exists to educate buyers, sellers, and property owners about the Spanish Trail market. You
              agree not to misuse the site or perform actions that could compromise security, data integrity, or neighbor
              privacy.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
          >
            <Link href="/contact">Request a consultation</Link>
          </Button>
        </div>
        <ul className="mt-12 space-y-4 text-sm leading-relaxed text-[#372a20]/85">
          <li>Do not attempt automated scraping or use bots to harvest MLS data or client testimonials.</li>
          <li>Do not upload malicious code, attempt to breach security, or interfere with RealScout widgets and forms.</li>
          <li>
            Use property information for personal evaluation only; commercial reuse requires written consent from Berkshire
            Hathaway HomeServices Nevada Properties.
          </li>
        </ul>
      </div>
    </section>
  )
}

function ListingsDisclosureSection() {
  return (
    <section
      id="listings-disclosure"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="listings-disclosure-heading"
    >
      <SectionBanner headingId="listings-disclosure-heading" />
      <div className="mx-auto max-w-5xl px-6 space-y-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">MLS & Listing Disclosures</p>
          <h2 id="listings-disclosure-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Accuracy, availability, and IDX obligations
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Property data comes from the Las Vegas REALTORS® MLS and brokerage partners. SpanishTrailHomes.com follows IDX rules
            and presents information believed accurate but not guaranteed.
          </p>
        </div>
        <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <li>
            Listings may be withdrawn, sold, or updated without notice. Schedule a consultation to confirm current status before
            relying on any digital presentation.
          </li>
          <li>
            Square footage, lot size, club membership eligibility, and dues should be independently verified through inspection
            or direct communication with the HOA.
          </li>
          <li>
            You agree not to copy, redistribute, or resell MLS data without written authorization from the data owner.
          </li>
        </ul>
      </div>
    </section>
  )
}

function IntellectualPropertySection() {
  return (
    <section
      id="intellectual-property"
      className="bg-[#0f2b1e] py-20 text-[#f8f5ef] sm:py-24"
      aria-labelledby="intellectual-property-heading"
    >
      <SectionBanner headingId="intellectual-property-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/70">Intellectual Property</p>
          <h2 id="intellectual-property-heading" className="font-heading text-3xl text-white sm:text-4xl">
            Respecting trademarks, copy, and multimedia assets
          </h2>
          <p className="text-base leading-relaxed text-[#f8f5ef]/85">
            All text, photography, video, and branding elements are the property of Berkshire Hathaway HomeServices Nevada
            Properties, Dr. Jan Duffy, or licensed vendors.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur">
              <CardVisual seed="card-1" />
            <h3 className="font-heading text-xl text-white">Usage rights</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#f8f5ef]/80">
              You may view and download content for personal evaluation of Spanish Trail real estate. Any commercial reproduction
              or public display requires prior written consent.
            </p>
          </article>
          <article className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur">
              <CardVisual seed="card-2" />
            <h3 className="font-heading text-xl text-white">Third-party marks</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#f8f5ef]/80">
              Berkshire Hathaway HomeServices, MLS, and club trademarks remain under the control of their respective owners and
              are used with permission.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

function LiabilitySection() {
  return (
    <section id="liability" className="bg-white py-20 sm:py-24" aria-labelledby="liability-heading">
      <SectionBanner headingId="liability-heading" />
      <div className="mx-auto max-w-5xl px-6 space-y-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Disclaimers & Liability</p>
          <h2 id="liability-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Limitation of liability and general disclaimers
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            SpanishTrailHomes.com is provided on an “as is” basis. While best efforts are made to ensure accuracy, neither Dr.
            Dr. Jan Duffy nor Berkshire Hathaway HomeServices Nevada Properties warrant uninterrupted or error-free access.
          </p>
        </div>
        <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <li>
            Berkshire Hathaway HomeServices Nevada Properties is not liable for damages arising from reliance on content or from
            delays in MLS data feeds.
          </li>
          <li>
            External links to RealScout, club partners, or lenders are provided for convenience. Those third parties operate under
            their own privacy and security policies.
          </li>
          <li>
            Your exclusive remedy for dissatisfaction with the site is to discontinue use and contact Dr. Duffy directly for
            personalized guidance.
          </li>
        </ul>
      </div>
    </section>
  )
}

function GoverningLawSection() {
  return (
    <section id="governing-law" className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="governing-law-heading">
      <SectionBanner headingId="governing-law-heading" />
      <div className="mx-auto max-w-5xl px-6 space-y-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Governing Law & Disputes</p>
          <h2 id="governing-law-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Nevada jurisdiction and dispute resolution
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            These terms are governed by the laws of the State of Nevada without regard to conflicts of law principles. Disputes
            shall be resolved in Clark County, Nevada.
          </p>
        </div>
        <ul className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
          <li>Parties agree first to attempt informal resolution through direct communication with Dr. Duffy.</li>
          <li>
            If unresolved, mediation or arbitration may be pursued consistent with brokerage policy before litigation is
            considered.
          </li>
          <li>
            Prevailing parties in litigation may be entitled to recover reasonable attorneys’ fees and costs to the extent
            permitted by law.
          </li>
        </ul>
      </div>
    </section>
  )
}

function ChangesSection() {
  return (
    <section id="changes" className="bg-white py-20 sm:py-24" aria-labelledby="changes-heading">
      <SectionBanner headingId="changes-heading" />
      <div className="mx-auto max-w-5xl px-6 space-y-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Updates to These Terms</p>
          <h2 id="changes-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            How and when terms may change
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Berkshire Hathaway HomeServices Nevada Properties may revise these terms as Spanish Trail market dynamics, regulatory
            requirements, or digital tools evolve. Continued use after updates constitutes acceptance of the revised terms.
          </p>
        </div>
        <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <li>
            Updated terms will be posted on this page with a revised effective date. Significant changes may be shared via email
            to active clients.
          </li>
          <li>
            Your continued use of the site after the effective date means you accept the updated terms. If you disagree, stop
            using the site and contact Dr. Duffy to discuss alternatives.
          </li>
        </ul>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="terms-contact" className="bg-white py-20 sm:py-24" aria-labelledby="terms-contact-heading">
      <SectionBanner headingId="terms-contact-heading" />
      <div className="mx-auto max-w-4xl rounded-3xl border border-border/40 bg-[#0f2b1e] px-8 py-16 text-center text-[#f8f5ef] shadow-xl shadow-primary/20">
        <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/70">Questions About These Terms</p>
        <h2 id="terms-contact-heading" className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">
          Need clarification or a formal document?
        </h2>
        <p className="mt-6 text-base leading-relaxed text-[#f8f5ef]/85">
          Contact Dr. Jan Duffy or the Berkshire Hathaway HomeServices Nevada Properties compliance team to request written
          copies, confirm listing permissions, or ask about MLS data usage.
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
          Effective November 10, 2025. Replace prior versions of the SpanishTrailHomes.com Terms of Use.
        </p>
      </div>
    </section>
  )
}

