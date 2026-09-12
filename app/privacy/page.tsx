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


const pageUrl = 'https://www.spanishtrailhomes.com/privacy'
const privacyPageDescription =
  'Review how Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties collect, use, and safeguard your information when you visit SpanishTrailHomes.com.'

const dataCategories = [
  {
    label: 'Contact and identification details',
    description:
      'Name, email, phone number, property interests, and timeline information provided through inquiry forms, RealScout registrations, and consultation requests.',
  },
  {
    label: 'Property preferences and transaction history',
    description:
      'Desired price range, home style, financing approach, upcoming move dates, and notes captured during strategy sessions or RealScout saved searches.',
  },
  {
    label: 'Technical usage data',
    description:
      'Device identifiers, browser type, referring URLs, and on-site interactions collected via analytics tools to improve performance and measure marketing effectiveness.',
  },
]

const dataUses = [
  {
    label: 'Deliver personalized property insights',
    description:
      'Dr. Jan Duffy prepares market briefs, guard-gate availability notices, and RealScout alerts tailored to Spanish Trail buyers and sellers.',
  },
  {
    label: 'Coordinate client services and referrals',
    description:
      'Information shared with Berkshire Hathaway HomeServices Nevada Properties staff, vetted escrow officers, or service partners only when required to advance your transaction.',
  },
  {
    label: 'Maintain regulatory compliance',
    description:
      'Records stored to satisfy Nevada real estate licensing requirements, brokerage policies, and fair housing documentation standards.',
  },
]

const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'PrivacyPolicy',
  name: 'SpanishTrailHomes.com Privacy Policy',
  url: pageUrl,
  publisher: {
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    areaServed: 'Spanish Trail, Las Vegas, Nevada',
  },
  datePublished: '2025-11-10',
  dateModified: new Date().toISOString().split('T')[0],
  description:
    'Privacy practices for SpanishTrailHomes.com detailing data collection, usage, sharing, cookies, marketing communications, and contact information.',
}

const privacyWebPageSchema = createWebPageSchema({
  name: 'Privacy Policy | SpanishTrailHomes.com',
  description: privacyPageDescription,
  path: '/privacy',
  type: 'PrivacyPolicy',
})

export const metadata: Metadata = {
  title: 'Privacy Policy | SpanishTrailHomes.com',
  description: privacyPageDescription,
  alternates: {
    canonical: getCanonicalUrl('/privacy'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: pageUrl,
    title: 'SpanishTrailHomes.com Privacy Policy',
    description:
      'Understand data practices, consent preferences, and contact options for privacy-related requests on SpanishTrailHomes.com.',
    images: [
      createOgImageUrl({
        title: 'Privacy Policy',
        subtitle: 'How SpanishTrailHomes.com safeguards your data',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary',
    title: 'SpanishTrailHomes.com Privacy Policy',
    description:
      'Learn how your personal information is protected when you work with Dr. Jan Duffy for Spanish Trail real estate.',
    images: [
      createOgImageUrl({
        title: 'Privacy Policy',
        subtitle: 'Data protection & client confidentiality',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function PrivacyPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Privacy Policy' },
            ]}
          />
        </div>
      </div>
      <DataCollectionSection />
      <DataUsageSection />
      <CookieSection />
      <InformationSharingSection />
      <OptOutSection />
      <SecuritySection />
      <ContactSection />
      <Script id="privacy-policy-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(privacySchema)}
      </Script>
      <Script id="privacy-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(privacyWebPageSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <header className="relative isolate overflow-hidden text-[#f8f5ef]" aria-labelledby="privacy-hero-heading">
      <HeroBackground
        src={getSiteImageUrl('h1-contact-office')}
        alt="Spanish Trail Homes privacy policy for Dr. Jan Duffy real estate services in Las Vegas"
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/55 to-[#0f2b1e]/85"
        sizes="(max-width: 1024px) 100vw, 1280px"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-[#0f2b1e]/80" />
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-24 text-center sm:py-28">
        <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/75">Privacy at SpanishTrailHomes.com</p>
        <h1 id="privacy-hero-heading" className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
          Transparency over how your information is protected
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties safeguard personal data to align with Nevada
          real estate statutes, fair housing regulations, and client confidentiality expectations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#f8f5ef] px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#f6ead7]"
          >
            <Link href="#privacy-contact">Submit a privacy request</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/accessibility">View accessibility statement</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function DataCollectionSection() {
  return (
    <section id="data-collection" className="bg-white py-20 sm:py-24" aria-labelledby="data-collection-heading">
      <SectionBanner headingId="data-collection-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Information Collected</p>
          <h2 id="data-collection-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Details you share when requesting Spanish Trail guidance
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Information is collected through consultation forms, property alerts, and event registrations. Submission is always
            optional, yet essential for precise market recommendations.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {dataCategories.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-border/40 bg-[#f8f2e7] p-6 shadow-lg shadow-primary/10"
            >
              <CardVisual seed={String(item.label)} />
              <h3 className="font-heading text-xl text-[#1f2a24]">{item.label}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#372a20]/85">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function DataUsageSection() {
  return (
    <section id="data-usage" className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="data-usage-heading">
      <SectionBanner headingId="data-usage-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">How Data Is Used</p>
            <h2 id="data-usage-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
              Support concierge-level real estate representation
            </h2>
            <p className="text-base leading-relaxed text-[#372a20]/85">
              Data helps tailor pricing strategies, schedule private tours, and coordinate club introductions so you reach your
              Spanish Trail goals efficiently.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
          >
            <Link href="/spanish-trail-insights">See Spanish Trail market insights and client advisory</Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {dataUses.map((item) => (
            <article key={item.label} className="rounded-3xl border border-[#cdbda5] bg-white p-6 shadow-lg shadow-primary/10">
              <CardVisual seed={String(item.label)} />
              <h3 className="font-heading text-xl text-[#1f2a24]">{item.label}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CookieSection() {
  return (
    <section id="cookies" className="bg-white py-20 sm:py-24" aria-labelledby="cookies-heading">
      <SectionBanner headingId="cookies-heading" />
      <div className="mx-auto max-w-5xl px-6 space-y-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Cookies & Analytics</p>
          <h2 id="cookies-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Controlling browser-based tracking technologies
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            SpanishTrailHomes.com uses first-party cookies and trusted analytics platforms to observe aggregate usage trends.
            Pixels from Berkshire Hathaway HomeServices campaigns or RealScout automations may be present to improve client
            experience.
          </p>
        </div>
        <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <li>
            <strong>Essential cookies:</strong> Preserve session continuity for saved searches, contact forms, and MLS agent
            dashboards.
          </li>
          <li>
            <strong>Performance cookies:</strong> Monitor page load times, device mix, and navigation patterns to optimize
            performance for mobile and desktop users.
          </li>
          <li>
            <strong>Advertising cookies:</strong> Coordinate remarketing campaigns so buyers and sellers receive relevant Spanish
            Trail updates. You can disable these through your browser preferences.
          </li>
        </ul>
      </div>
    </section>
  )
}

function InformationSharingSection() {
  return (
    <section id="information-sharing" className="bg-[#0f2b1e] py-20 text-[#f8f5ef] sm:py-24" aria-labelledby="sharing-heading">
      <SectionBanner headingId="sharing-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/70">Information Sharing</p>
          <h2 id="sharing-heading" className="font-heading text-3xl text-white sm:text-4xl">
            When data is shared—and when it is not
          </h2>
          <p className="text-base leading-relaxed text-[#f8f5ef]/85">
            Personal details are never sold. Sharing occurs only with vendors who uphold confidentiality agreements vital to
            luxury real estate transactions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur">
              <CardVisual seed="card-3" />
            <h3 className="font-heading text-xl text-white">Service partners bound by contract</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#f8f5ef]/80">
              Escrow officers, transaction coordinators, professional photographers, and marketing vendors supporting Spanish
              Trail listings receive limited access necessary to execute services.
            </p>
          </article>
          <article className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur">
              <CardVisual seed="card-4" />
            <h3 className="font-heading text-xl text-white">Legal or regulatory disclosures</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#f8f5ef]/80">
              Data may be disclosed when required by subpoenas, court orders, Nevada Real Estate Division audits, or to enforce
              the terms of an agreement with you.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

function OptOutSection() {
  return (
    <section id="communications" className="bg-white py-20 sm:py-24" aria-labelledby="communications-heading">
      <SectionBanner headingId="communications-heading" />
      <div className="mx-auto max-w-5xl px-6 space-y-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Your Choices</p>
          <h2 id="communications-heading" className="font-heading text-3xl text-foreground sm:text-4xl">
            Manage communication and data preferences
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            You control how and when we communicate. RealScout alerts include unsubscribe links, while brokerage newsletters
            and marketing campaigns respect all opt-out requests within two business days.
          </p>
        </div>
        <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <li>
            Reply to any email from Dr. Duffy with “unsubscribe” to stop marketing messages. Transactional communications will
            continue if required to close an active deal.
          </li>
          <li>
            Update RealScout saved search preferences through the “Manage Alerts” link in any notification email.
          </li>
          <li>
            Disable analytics or advertising cookies using your browser’s privacy controls or third-party opt-out tools.
          </li>
        </ul>
      </div>
    </section>
  )
}

function SecuritySection() {
  return (
    <section id="security" className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="security-heading">
      <SectionBanner headingId="security-heading" />
      <div className="mx-auto max-w-5xl px-6 space-y-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Safeguards</p>
          <h2 id="security-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Safeguarding information during and after your transaction
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Secure storage platforms, limited-access document sharing, and broker-managed retention schedules help protect your
            confidential information.
          </p>
        </div>
        <ul className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
          <li>
            Digital files are stored within encrypted brokerage systems with role-based permissions for transaction staff.
          </li>
          <li>Physical files are retained inside locked offices at Berkshire Hathaway HomeServices Nevada Properties.</li>
          <li>
            Records are maintained for at least five years to satisfy Nevada licensing requirements, after which they are
            securely destroyed.
          </li>
        </ul>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section
      id="privacy-contact"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="privacy-contact-heading"
    >
      <SectionBanner headingId="privacy-contact-heading" />
      <div className="mx-auto max-w-4xl rounded-3xl border border-border/40 bg-[#0f2b1e] px-8 py-16 text-center text-[#f8f5ef] shadow-xl shadow-primary/20">
        <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/70">Contact for Privacy Matters</p>
        <h2 id="privacy-contact-heading" className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">
          Questions about data practices or privacy rights?
        </h2>
        <p className="mt-6 text-base leading-relaxed text-[#f8f5ef]/85">
          Reach out to Dr. Jan Duffy or the Berkshire Hathaway HomeServices Nevada Properties compliance team for assistance
          with privacy requests, data corrections, or opt-out confirmations.
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
          Effective November 10, 2025. Updates will be posted here with revised effective dates.
        </p>
      </div>
    </section>
  )
}

