import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { HeroBackground } from '@/components/hero-background'
import { CalendlyLink } from '@/components/calendly-link'
import { SectionBanner } from '@/components/heading-media'
import {
  createOgImageUrl,
  createWebPageSchema,
  createBreadcrumbSchema,
  getCanonicalUrl,
} from '@/lib/structuredData'

const pageUrl = 'https://www.spanishtrailhomes.com/relocation'
const pageTitle = 'Relocation & Out-of-State Buyer Support | Spanish Trail Homes'
const pageDescription =
  'Moving to Las Vegas from out of state and considering Spanish Trail? Dr. Jan Duffy specializes in helping relocation buyers navigate this guard-gated golf community from a distance. Virtual tours, neighborhood comparisons, and full remote transaction coordination.'

const relocationWebPageSchema = createWebPageSchema({
  name: pageTitle,
  description: pageDescription,
  path: '/relocation',
  type: 'WebPage',
  extra: {
    about: {
      '@type': 'Service',
      name: 'Relocation and Out-of-State Buyer Support',
      provider: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        areaServed: 'Spanish Trail, Las Vegas, Nevada',
      },
    },
  },
})

const relocationBreadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Relocation', url: '/relocation' },
])

const relocationFaq = [
  {
    question: 'How do virtual property tours work for out-of-state buyers?',
    answer:
      'Dr. Duffy coordinates live video walkthroughs with listing agents, so you can explore Spanish Trail homes in real time from anywhere. She also provides pre-recorded tours, drone footage, and neighborhood drive-throughs so you can evaluate guard-gated living, golf course views, and community amenities before you travel.',
  },
  {
    question: 'Can I complete a Spanish Trail purchase remotely?',
    answer:
      'Yes. Dr. Duffy manages full remote transaction coordination—e-signatures, wire instructions, title coordination, and HOA document review. She works with your lender, attorney, and relocation team so you can close from out of state while she handles local logistics, gate access for inspections, and final walkthrough coordination.',
  },
  {
    question: 'What should I know about HOA and golf membership before buying?',
    answer:
      'Spanish Trail has 11 distinct neighborhoods, each with its own HOA fees and character. Club membership is optional for homeowners and includes full golf, young executive, social, and corporate categories. Dr. Duffy outlines initiation fees, monthly dues, and transferability so you can budget and plan before you arrive.',
  },
  {
    question: 'How do I compare Spanish Trail to other Las Vegas communities?',
    answer:
      'Dr. Duffy provides detailed neighborhood comparisons across Spanish Trail and other guard-gated Las Vegas communities. She shares pricing trends, lifestyle fit, and commute data so you can make an informed decision even from out of state. See our Las Vegas luxury neighborhoods guide for more.',
  },
]

const relocationFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: relocationFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/relocation'),
  },
  openGraph: {
    url: pageUrl,
    title: pageTitle,
    description:
      'Relocating to Las Vegas? Dr. Jan Duffy helps out-of-state buyers navigate Spanish Trail with virtual tours, neighborhood comparisons, and remote transaction coordination.',
    images: [
      createOgImageUrl({
        title: 'Relocation & Out-of-State Buyers',
        subtitle: 'Spanish Trail from anywhere',
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

export default function RelocationPage() {
  return (
    <SiteShell>
      <Script
        id="relocation-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([relocationWebPageSchema, relocationBreadcrumbSchema, relocationFaqSchema]),
        }}
      />

      <HeroBackground
        title="Relocation & Out-of-State Buyer Support"
        subtitle="Spanish Trail from anywhere"
        description="Moving to Las Vegas and considering Spanish Trail? Dr. Jan Duffy helps relocation buyers navigate this guard-gated golf community from a distance—virtual tours, neighborhood comparisons, and full remote transaction coordination."
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Relocation', href: '/relocation' },
          ]}
        />

        <section className="prose prose-[#372a20] mt-10 max-w-none" aria-labelledby="relocation-intro">
      <SectionBanner headingId="relocation-intro" />
          <h2 id="relocation-intro" className="font-playfair text-2xl font-semibold text-[#0f2b1e]">
            Why Spanish Trail for Relocating Buyers
          </h2>
          <p className="text-[#0f2b1e]/90 leading-relaxed">
            Moving to Las Vegas from out of state and considering Spanish Trail? Dr. Jan Duffy specializes in helping
            relocation buyers navigate this guard-gated golf community from a distance. Our relocation services include
            virtual property tours, detailed neighborhood comparisons across all 11 Spanish Trail areas, guidance on HOA
            rules and golf membership options, and full remote transaction coordination. We help you understand the
            lifestyle, pricing, and community dynamics before you arrive so you can make an informed decision with
            confidence.
          </p>
          <p className="text-[#0f2b1e]/90 leading-relaxed">
            Spanish Trail offers 24/7 guard-gated security, a championship 27-hole golf course, and over 1,200 homes
            across 11 neighborhoods—from lock-and-leave villas to custom estates. Whether you are relocating for work,
            retirement, or a second home, Dr. Duffy provides the local expertise and remote support you need to buy with
            confidence.
          </p>
        </section>

        <section className="mt-12 max-w-none" aria-labelledby="valley-comparison-heading">
      <SectionBanner headingId="valley-comparison-heading" />
          <h2 id="valley-comparison-heading" className="font-playfair text-2xl font-semibold text-[#0f2b1e]">
            Comparing Spanish Trail with other Las Vegas areas
          </h2>
          <p className="mt-4 text-[#0f2b1e]/90 leading-relaxed">
            Dr. Jan Duffy&apos;s practice is centered on <strong>Spanish Trail</strong> (Las Vegas, NV 89113)—the guard-gated
            golf community where she provides neighborhood-level pricing context and day-to-day transaction coordination.
            Many relocation and move-up buyers also tour or research{' '}
            <strong>Summerlin West</strong>, <strong>Skye Canyon</strong>, <strong>Centennial Hills</strong>,{' '}
            <strong>Henderson</strong>, <strong>North Las Vegas</strong>, and luxury enclaves such as{' '}
            <strong>The Ridges</strong>, <strong>Red Rock Country Club</strong>, and active-adult communities like{' '}
            <strong>Sun City Summerlin</strong>, <strong>Del Webb</strong>, and <strong>Heritage at Stonebridge</strong>.
            This site does <strong>not</strong> list separate offices in those areas; instead, you get honest comparison
            education, coordination through the Berkshire Hathaway HomeServices Nevada Properties network, and referrals
            when another specialist is the better fit.{' '}
            <Link href="/contact" className="text-[#0f2b1e] underline underline-offset-4 hover:no-underline">
              Contact the office
            </Link>{' '}
            to plan tours and next steps. For side-by-side luxury context, start with{' '}
            <Link
              href="/las-vegas-luxury-neighborhoods"
              className="text-[#0f2b1e] underline underline-offset-4 hover:no-underline"
            >
              Las Vegas luxury neighborhood comparisons
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-[#0f2b1e]/20 bg-[#f8f5ef] p-6 sm:p-8" aria-labelledby="relocation-cta">
      <SectionBanner headingId="relocation-cta" />
          <h2 id="relocation-cta" className="font-playfair text-xl font-semibold text-[#0f2b1e]">
            Start Your Relocation Conversation
          </h2>
          <p className="mt-2 text-[#0f2b1e]/90">
            Call or text <Link href="tel:+17027663299" className="text-[#0f2b1e] underline underline-offset-4 hover:no-underline">(702) 766-3299</Link> or
            email <Link href="mailto:DrDuffySells@SpanishTrailHomes.com" className="text-[#0f2b1e] underline underline-offset-4 hover:no-underline">DrDuffySells@SpanishTrailHomes.com</Link> to
            schedule a virtual consultation. We will tailor neighborhood comparisons, virtual tours, and a remote buying
            roadmap to your timeline.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <CalendlyLink
              className="inline-flex items-center justify-center rounded-full bg-[#0f2b1e] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f2b1e]/90"
              ctaText="Schedule Virtual Consultation"
              ctaLocation="relocation"
            >
              Schedule Virtual Consultation
            </CalendlyLink>
            <Button variant="outline" size="lg" asChild className="rounded-full">
              <Link href="/buyers">Buyer Guide</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="relocation-faq">
      <SectionBanner headingId="relocation-faq" />
          <h2 id="relocation-faq" className="font-playfair text-2xl font-semibold text-[#0f2b1e]">
            Relocation FAQ
          </h2>
          <ul className="mt-6 space-y-6">
            {relocationFaq.map((item) => (
              <li key={item.question} className="rounded-xl border border-[#d8cdbf] bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-[#0f2b1e]">{item.question}</h3>
                <p className="mt-2 text-[#0f2b1e]/90 leading-relaxed">{item.answer}</p>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-center text-sm text-[#0f2b1e]/70">
          <Link href="/buyers" className="underline underline-offset-4 hover:no-underline">Buyer Guide</Link>
          {' · '}
          <Link href="/las-vegas-luxury-neighborhoods" className="underline underline-offset-4 hover:no-underline">Compare Neighborhoods</Link>
          {' · '}
          <Link href="/contact" className="underline underline-offset-4 hover:no-underline">Contact</Link>
        </p>
      </div>
    </SiteShell>
  )
}
