import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CardVisual, SectionBanner } from '@/components/heading-media'
import { GbpLocalActions } from '@/components/gbp-local-actions'
import { GoogleMapEmbed } from '@/components/google-map-embed'
import { RealScoutSection } from '@/components/realscout-section'
import {
  createBreadcrumbSchema,
  createFaqPageSchema,
  createOgImageUrl,
  createWebPageSchema,
  getCanonicalUrl,
} from '@/lib/structuredData'
import { GBP_FULL_ADDRESS, GBP_LEGAL_NAME, GBP_PHONE_DISPLAY, GBP_PHONE_E164 } from '@/lib/gbp-business'

const pageUrl = 'https://www.spanishtrailhomes.com/address-autocomplete'
const pageDescription =
  'Look up a Spanish Trail Las Vegas 89113 address with Dr. Jan Duffy. Confirm whether a street sits inside the guard gates, which of the 11 neighborhoods it belongs to, and how to tour. Call (702) 766-3299.'

const faqContent = [
  {
    question: 'How do I know if an address is inside Spanish Trail?',
    answer:
      'Spanish Trail streets sit behind the Tropicana and Hacienda gates in ZIP 89113. If a portal listing says “Spanish Trails,” it is the same community. Send the street to Dr. Jan Duffy at (702) 766-3299 to confirm the enclave, HOA, and showing access.',
  },
  {
    question: 'Can I type an address and see live listings?',
    answer:
      'Use the Spanish Trail homes search on this site to filter by street, price, and golf exposure. For a specific address, call (702) 766-3299. Dr. Duffy checks MLS status, gate, and neighborhood comps the same day.',
  },
  {
    question: 'Why do some maps show Spanish Trail Country Club instead of my house?',
    answer:
      'Google often pins the clubhouse at 5050 Spanish Trail Ln for the whole master plan. Individual homes still need a listing-agent pass at the guard gate. The map on this page is the verified Google Business Profile pin.',
  },
  {
    question: 'I have a street from a portal. What next?',
    answer:
      'Email the address to DrDuffySells@SpanishTrailHomes.com or text (702) 766-3299. You will get neighborhood, square footage context, and a tour window—not a generic valley-wide auto-reply.',
  },
]

const STEPS = [
  {
    title: 'Send the street',
    detail: 'Portal screenshot, MLS number, or a Spanish Trail Ln / Carmel Ridge / Burning Tree address.',
  },
  {
    title: 'Match the enclave',
    detail: 'Dr. Duffy maps it to one of 11 neighborhoods, HOA dues, and golf vs lock-and-leave layout.',
  },
  {
    title: 'Get on the gate list',
    detail: 'Tropicana or Hacienda gate, parking, and a timed showing. No unannounced drive-ups.',
  },
]

const webPageSchema = createWebPageSchema({
  name: 'Find a Spanish Trail Address | Las Vegas 89113 Homes',
  description: pageDescription,
  path: '/address-autocomplete',
  extra: {
    about: { '@id': 'https://www.spanishtrailhomes.com/#localBusiness' },
  },
})

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Find an Address', url: '/address-autocomplete' },
])

export const metadata: Metadata = {
  title: 'Find a Spanish Trail Address | Las Vegas 89113 | Dr. Jan Duffy',
  description: pageDescription,
  alternates: { canonical: getCanonicalUrl('/address-autocomplete') },
  openGraph: {
    url: pageUrl,
    title: 'Find a Spanish Trail Las Vegas Address',
    description: pageDescription,
    images: [
      createOgImageUrl({
        title: 'Find a Spanish Trail Address',
        subtitle: 'Confirm 89113 streets, gates, and tours',
        eyebrow: '(702) 766-3299',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find a Spanish Trail Address | Las Vegas 89113',
    description: pageDescription,
  },
}

export default function AddressAutocompletePage() {
  return (
    <SiteShell>
      <Script id="address-autocomplete-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify([webPageSchema, breadcrumbSchema, createFaqPageSchema(faqContent)])}
      </Script>

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Find an Address', href: '/address-autocomplete' },
            ]}
          />
        </div>
      </div>

      <section
        className="relative isolate overflow-hidden bg-[#0f2b1e] py-16 text-primary-foreground sm:py-24"
        aria-labelledby="autocomplete-hero-heading"
      >
        <SectionBanner headingId="autocomplete-hero-heading" level="h1" priority />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs uppercase tracking-[0.5em] text-primary-foreground/80">Las Vegas 89113</p>
          <h1 id="autocomplete-hero-heading" className="mt-3 font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl">
            Find a Spanish Trail home by address
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            {GBP_LEGAL_NAME} confirms whether a street is inside the gates, which neighborhood it sits in, and how to
            tour. Office pin: {GBP_FULL_ADDRESS}. Call{' '}
            <Link href={`tel:${GBP_PHONE_E164}`} className="underline underline-offset-4">
              {GBP_PHONE_DISPLAY}
            </Link>
            .
          </p>
          <GbpLocalActions variant="dark" className="mt-8 justify-center" />
        </div>
      </section>

      <RealScoutSection
        id="bhhs-listings"
        eyebrow="Search live MLS"
        title="Filter Spanish Trail listings by street and price"
        description="Start from inventory, then text Dr. Duffy the address you want opened at the gate."
      />

      <section className="bg-white py-16 sm:py-20" aria-labelledby="how-it-works-heading">
        <SectionBanner headingId="how-it-works-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="how-it-works-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            From portal street to a gated showing
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6">
                <CardVisual seed={step.title} />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237]">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-[#0f2b1e]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#372a20]/85">{step.detail}</p>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="mt-8 rounded-full bg-[#0f2b1e] px-8 py-3 text-xs uppercase tracking-[0.25em] text-white hover:bg-[#1f4a35]"
          >
            <Link href="/spanish-trail-homes-for-sale-las-vegas">Browse Spanish Trail homes for sale</Link>
          </Button>
        </div>
      </section>

      <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="demo-heading">
        <SectionBanner headingId="demo-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="demo-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Verified Google pin for 5050 Spanish Trail Ln
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#372a20]/85">
            Use this map to orient to the clubhouse. Individual homes still require a showing appointment.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#d8cdbf] bg-white shadow-md">
            <GoogleMapEmbed heightClassName="h-[420px]" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="address-faq-heading">
        <SectionBanner headingId="address-faq-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="address-faq-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
            Address FAQ
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqContent.map((item) => (
              <article key={item.question} className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6">
                <h3 className="text-lg font-semibold text-[#0f2b1e]">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#372a20]/85">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
