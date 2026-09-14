import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FaqSection } from '@/components/faq-section'
import { SectionBanner } from '@/components/heading-media'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { createOgImageUrl, createWebPageSchema, createFaqSchema, getCanonicalUrl } from '@/lib/structuredData'
import { GBP_FULL_ADDRESS, GBP_PHONE_DISPLAY, GBP_PHONE_E164 } from '@/lib/gbp-business'

const pageUrl = 'https://www.spanishtrailhomes.com/address-autocomplete'
const pageTitle = 'Look up a Spanish Trail address | 89113 homes | Dr. Jan Duffy'
const pageDescription =
  'Search a Spanish Trail street or listing address in Las Vegas 89113. Dr. Jan Duffy confirms comps, HOA dues, and gate access. Call (702) 766-3299.'

const faqs = [
  {
    question: 'Can Dr. Duffy look up any Spanish Trail address?',
    answer:
      'Yes. Give her the street inside the gates and she will pull recent GLVAR sales, HOA documents, and showing rules. Office: 5050 Spanish Trail Ln, Las Vegas, NV 89113.',
  },
  {
    question: 'Is this an MLS search or a public records tool?',
    answer:
      'Use the search on this page for live inventory. For a sold-comp or seller CMA on a specific address, call (702) 766-3299 so the numbers are current—not guessed.',
  },
  {
    question: 'What if I only have a partial street name?',
    answer:
      'Spanish Trail has repeating street patterns across 11 neighborhoods. Dr. Duffy will confirm the enclave (Estates, Villas, Islands, and the rest) before quoting a price band.',
  },
]

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: getCanonicalUrl('/address-autocomplete') },
  openGraph: {
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    images: [
      createOgImageUrl({
        title: 'Look up a Spanish Trail address',
        subtitle: '89113 comps, tours, and gate access',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function AddressLookupPage() {
  return (
    <SiteShell>
      <Script id="address-lookup-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify([
          createWebPageSchema({
            name: pageTitle,
            description: pageDescription,
            path: '/address-autocomplete',
          }),
          createFaqSchema(faqs),
        ])}
      </Script>

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Address lookup' }]} />
        </div>
      </div>

      <section className="relative isolate overflow-hidden bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="address-heading">
        <SectionBanner headingId="address-heading" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#f8f5ef]/70">Spanish Trail 89113</p>
          <h1 id="address-heading" className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl">
            Look up a Spanish Trail address
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#f8f5ef]/85 sm:text-lg">
            Search live inventory, then text or call Dr. Jan Duffy with the street you care about. She confirms comps,
            HOA dues, and gate access for that enclave—not a valley-wide average. {GBP_FULL_ADDRESS}.
          </p>
          <div className="mt-8 max-w-xl">
            <HeroSearchWidget theme="dark" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-white text-[#0f2b1e] hover:bg-[#eef2ef]">
              <Link href={`tel:${GBP_PHONE_E164}`}>Call {GBP_PHONE_DISPLAY}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/70 bg-transparent text-white hover:bg-white/10">
              <Link href="/spanish-trail-homes-for-sale-las-vegas">All Spanish Trail listings</Link>
            </Button>
          </div>
        </div>
      </section>

      <FaqSection
        headingId="address-faq-heading"
        heading="Address and comps questions"
        items={faqs}
        tone="cream"
      />
    </SiteShell>
  )
}
