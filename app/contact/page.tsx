import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { CalendlyInline } from '@/components/calendly-inline'
import { CalendlyLink } from '@/components/calendly-link'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import {
  GBP_EASTER_2026_CLOSURE,
  GBP_SERVICE_AREA_LABEL,
  shouldShowPromotedSpecialHoursNotice,
} from '@/lib/gbp-business'
import { marketStats, formatMedianPrice } from '@/lib/marketStats'
import { SectionBanner, CardVisual } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/contact'
const contactPageDescription =
  `Spanish Trail luxury homes in Las Vegas. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties—Spanish Trail specialist. Guard-gated golf community, custom estates & villas. Median ${formatMedianPrice(marketStats.median_price)} (${marketStats.date_label}). Call/text (702) 766-3299.`

const contactWebPageSchema = createWebPageSchema({
  name: 'Contact Dr. Jan Duffy | Spanish Trail Homes Realtor',
  description: contactPageDescription,
  path: '/contact',
  type: 'ContactPage',
  extra: {
    potentialAction: [
      {
        '@type': 'ContactAction',
        target: `${pageUrl}#schedule`,
        name: 'Request Spanish Trail Consultation',
      },
      {
        '@type': 'CommunicateAction',
        target: 'tel:+17027663299',
        name: 'Call (702) 766-3299',
      },
    ],
  },
})

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Spanish Trail Homes Realtor',
  description: contactPageDescription,
  alternates: {
    canonical: getCanonicalUrl('/contact'),
  },
  openGraph: {
    url: pageUrl,
    title: 'Contact Dr. Jan Duffy | Spanish Trail Homes Realtor',
    description:
      'Connect with Dr. Jan Duffy for Spanish Trail luxury homes, current market data, and private club lifestyle guidance.',
    images: [
      createOgImageUrl({
        title: 'Connect with Dr. Jan Duffy',
        subtitle: 'Spanish Trail strategy sessions & private tours',
        eyebrow: 'Contact • SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Dr. Jan Duffy | Spanish Trail Homes Realtor',
    description:
      'Schedule a Spanish Trail strategy session with Dr. Jan Duffy—luxury guard-gated golf community specialist.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Consultation',
        subtitle: 'Call (702) 766-3299 or plan a private tour',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

/** Contact-only FAQs (pricing, investment, and neighborhood lists live on listing/guide hubs to avoid duplicate FAQPage signals). */
const faqContent = [
  {
    question: 'How quickly can I schedule a consultation or private tour?',
    answer:
      'Dr. Duffy maintains a 24-hour response cadence. Consultations and tours are typically available within 48 hours; same-day showings may be possible when homes are accessible. Call or text (702) 766-3299 or email DrDuffySells@SpanishTrailHomes.com with your timeline.',
  },
  {
    question: 'What should I prepare for my first consultation?',
    answer:
      'Bring your timeline, budget parameters, lifestyle priorities (golf, privacy, proximity to clubhouse), and any specific enclaves or home styles you are considering. Dr. Duffy will prepare market context and next steps tailored to your goals.',
  },
  {
    question: 'Where is the office, and how do parking and accessibility work?',
    answer:
      'Office: 5050 Spanish Trail Ln, Las Vegas, NV 89113 (Spanish Trail area, zip 89113). Wheelchair accessible entrance and parking are available—consistent with Google Business Profile. Use the map on this page or call (702) 766-3299 for directions.',
  },
  {
    question: 'How do I reach Dr. Jan Duffy by phone, text, or email?',
    answer:
      'Phone or text (702) 766-3299; email DrDuffySells@SpanishTrailHomes.com. You can also book a tour or strategy session from the buttons above. For Google reviews and verified client feedback, use the link in the footer or on our Reviews page.',
  },
  {
    question: 'Where can I read median prices, property types, and Spanish Trail neighborhood detail?',
    answer:
      'For live MLS search, listing alerts, and weekly stats, start at https://www.spanishtrailhomes.com/spanish-trail-homes-for-sale-las-vegas. For property types, amenities, and the Las Vegas 89113 buyer guide, see https://www.spanishtrailhomes.com/homes-for-sale-in-spanish-trail-las-vegas. All eleven enclaves are summarized at https://www.spanishtrailhomes.com/neighborhoods.',
  },
  {
    question: 'Does Dr. Duffy work with buyers and sellers outside of Spanish Trail?',
    answer:
      'Spanish Trail is the specialty and focus. For other Las Vegas Valley needs, Dr. Duffy coordinates through the Berkshire Hathaway HomeServices Nevada Properties network and referral relationships—ideal for relocation clients comparing multiple luxury communities.',
  },
]

const contactFaqSchema = {
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

export default function ContactPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Contact Dr. Jan Duffy' },
            ]}
          />
        </div>
      </div>
      <ExpertiseSection />
      <GolfLifestyleSection />
      <LuxuryInventorySection />
      <MarketSnapshotSection />
      <NeighborhoodFitSection />
      <ContactCTASection />
      <GBPIntegrationSection />
      <RealScoutSection
        id="contact-advanced-search"
        eyebrow="Start Your Search"
        title="See Live Spanish Trail Inventory"
        description="Advanced filters help you pinpoint Spanish Trail homes by fairway views, secondary gates, and villa layouts."
      />
      <FAQSection />
      <Script id="contact-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(contactWebPageSchema)}
      </Script>
      <Script id="contact-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(contactFaqSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="contact-hero-heading">
      <SectionBanner headingId="contact-hero-heading" />
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 text-center">
        <h1 id="contact-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Homes Realtor | Dr. Jan Duffy
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Call (702) 766-3299 to buy or sell a Spanish Trail home. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Median {formatMedianPrice(marketStats.median_price)} as of {marketStats.date_label}.
          <span className="block text-xs uppercase tracking-[0.3em] text-[#f8f5ef]/70">
            <Link href="https://searchforaffordablehomes.com/neighborhood/83/spanish-trails" className="underline-offset-4 hover:underline">
              Source: Spanish Trail Weekly Market Activity
            </Link>
          </span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="tel:+17027663299">Call or Text (702) 766-3299</Link>
          </Button>
          <CalendlyLink className="inline-flex items-center justify-center rounded-full border border-[#f8f5ef]/60 bg-white px-8 py-3 text-xs font-medium uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            Book a Tour
          </CalendlyLink>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#schedule">Request a Strategy Session</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function ExpertiseSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="expertise-heading">
      <SectionBanner headingId="expertise-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="expertise-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          Spanish Trail homes realtor
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
              Weekly data, lived-in perspective
            </h3>
            <p>
              I monitor every Spanish Trail closing the moment it records. Yesterday, 8330 Carmel Ridge Court—a 2,500 sq. ft. single-family home—closed at $1,095,000, roughly 8% above the community\'s median thanks to upgraded fairway views and a reimagined chef\'s kitchen.[source](https://searchforaffordablehomes.com/neighborhood/83/spanish-trails)
            </p>
            <p>
              That real-time insight guides both sellers wanting a premium and buyers aiming to secure value without overextending. After decades focused on Spanish Trail—advising 500+ families across purchases, sales, and long-range planning—I have walked every cul-de-sac inside the 640-acre guard gates and understand how HOA nuances, sightlines, and secondary gates impact pricing.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">Trust Signals</h3>
            <ul className="space-y-3">
              <li>
                License #S.0197614.LLC · Berkshire Hathaway HomeServices Nevada Properties
              </li>
              <li>Decades advising Spanish Trail buyers and sellers · Weekly market tracking inside the gates</li>
              <li>Weekly Spanish Trail market tracking & private-network listing alerts</li>
              <li>
                Google Business Profile reviews: <Link href="https://maps.app.goo.gl/9QG1zTx5B7jG1wfP9" className="underline-offset-4 hover:underline">See verified client feedback</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function GolfLifestyleSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="golf-heading">
      <SectionBanner headingId="golf-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="golf-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          What Spanish Trail homes include
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
              Sunrise, Lakes, Canyon: three distinct personalities
            </h3>
            <p>
              The Spanish Trail Country Club anchors the community with Robert Trent Jones Jr.\'s 27-hole layout. The Lakes nine delivers cascading water features, Sunrise showcases mature pines and gentle slopes, while Canyon introduces elevation changes that thrill low-handicap players. Demand for golf-view homes remains intense—this week\'s 22 Burning Tree Court tour generated four qualified showings, all citing the championship course as their non-negotiable.[source](https://searchforaffordablehomes.com/neighborhood/83/spanish-trails)
            </p>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
              Amenities beyond the tee sheet
            </h3>
            <p>
              Wellness suites, pickleball, and resort pools make Spanish Trail just as compelling for non-golfers. I coordinate membership introductions so buyers can preview club culture before closing, and I share programming calendars—wine dinners, junior camps, executive mixers—to help households plug into the rhythm that fits their lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function LuxuryInventorySection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="luxury-heading">
      <SectionBanner headingId="luxury-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="luxury-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          Spanish Trail homes: estates, villas, and fairway addresses
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
              Tailored inventory strategy
            </h3>
            <p>
              Custom estates currently command $2M+ when they deliver double fairway exposure, private casitas, and refreshed interiors. Villas and townhomes see strong $835K–$1.1M activity, particularly those near the Hacienda gate with easy I-215 access. I curate separate tracks for shoppers seeking prestige primary homes versus discretionary lock-and-leave retreats.
            </p>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
              Transparent budgets & HOA insights
            </h3>
            <p>
              HOA dues range $180–$425/month depending on sub-neighborhood. We\'ll map those costs alongside taxes, club memberships, and renovation budgets so your decision balances aspiration with smart financial planning. My seller consultations include staging, digital strategy, and private-network previews to protect premium pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function MarketSnapshotSection() {
  const stats = [
    { label: 'Median Value', value: formatMedianPrice(marketStats.median_price) },
    { label: 'Price / Sq. Ft.', value: `$${marketStats.price_per_sqft}` },
    { label: 'Active Listings', value: String(marketStats.active_listings) },
    { label: 'Days on Market', value: `${marketStats.avg_days_on_market} (avg.)` },
  ]
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="market-heading">
      <SectionBanner headingId="market-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="market-heading" className="font-[var(--font-playfair)] text-2xl leading-tight sm:text-3xl">
          Current Spanish Trail Market: {formatMedianPrice(marketStats.median_price)} Median ({marketStats.date_label})
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-[#1f4a35]/60 bg-[#143927] p-6 shadow-lg shadow-black/15">
              <p className="text-xs uppercase tracking-[0.35em] text-[#d9cfc2]">{stat.label}</p>
              <p className="mt-3 font-[var(--font-playfair)] text-2xl">{stat.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#f8f5ef]/80">
          I refresh these numbers every Friday after analyzing MLS data, private network activity, and club feedback. Whether you need a seller net sheet or a buyer ladder for timing, I\'ll arm you with this week\'s reality—not last quarter\'s headlines.
        </p>
      </div>
    </section>
  )
}

function NeighborhoodFitSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="neighborhood-heading">
      <SectionBanner headingId="neighborhood-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="neighborhood-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          11 Neighborhoods, 1,200+ Homes—Which Fits You?
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Estate Homes behind secondary gates',
              detail:
                'Gated-within-gated privacy, grand motor courts, and entertainer yards. Seeing 3–4 showings per week right now—our busiest luxury cadence of 2026.',
            },
            {
              title: 'Villas at Spanish Trail',
              detail:
                'Lock-and-leave convenience near the clubhouse with HOA coverage of exterior maintenance. Ideal for frequent travelers wanting quick tee-time access.',
            },
            {
              title: 'Patios & Springs enclaves',
              detail:
                'Tree-lined streets, versatile floor plans, and proximity to Bishop Gorman High School. Popular with families seeking balance between serenity and city convenience.',
            },
          ].map((item) => (
            <div key={item.title} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCTASection() {
  return (
    <section id="schedule" className="bg-[#f8f2e7] py-12 sm:py-20" aria-labelledby="contact-heading">
      <SectionBanner headingId="contact-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="contact-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          Let&apos;s align your Spanish Trail move with this week&apos;s data
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
              How I work with buyers & sellers
            </h3>
            <p>
              Buyers receive curated previews, weekly absorption reports, and private-network alerts before listings surface publicly. Sellers get a pricing road map, concierge prep plan, and real-time feedback from every showing.
            </p>
            <p>
              Call or text (702) 766-3299 for time-sensitive questions. Prefer email? Send details to <Link href="mailto:DrDuffySells@SpanishTrailHomes.com" className="underline-offset-4 hover:underline">DrDuffySells@SpanishTrailHomes.com</Link> and I&apos;ll reply within the business day.
            </p>
            <div className="space-y-2 text-sm text-[#372a20]/80">
              <p>
                📞 Direct: <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link>
              </p>
              <p>📧 Email: <Link href="mailto:DrDuffySells@SpanishTrailHomes.com" className="underline-offset-4 hover:underline">DrDuffySells@SpanishTrailHomes.com</Link></p>
            </div>
          </div>
          <div className="min-w-0 rounded-2xl border border-[#d8cdbf] bg-white p-4 shadow-lg shadow-primary/10 sm:rounded-3xl sm:p-6">
            <CalendlyInline height={700} minWidth={320} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

function GBPIntegrationSection() {
  const gbpUrl = 'https://maps.app.goo.gl/9QG1zTx5B7jG1wfP9'
  const mapsDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=5050+Spanish+Trail+Ln,+Las+Vegas,+NV+89113'
  
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="gbp-heading">
      <SectionBanner headingId="gbp-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="gbp-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          Visit Spanish Trail | Homes By Dr. Jan Duffy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Located at Spanish Trail Country Club in Las Vegas. Connect with Dr. Jan Duffy for luxury real estate consultations and private tours.
        </p>
        
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">Contact Information</h3>
              <div className="space-y-3 text-base leading-relaxed text-[#372a20]/85">
                <p>
                  <strong className="font-semibold text-[#0f2b1e]">Address:</strong><br />
                  5050 Spanish Trail Ln<br />
                  Las Vegas, NV 89113
                </p>
                <p>
                  <strong className="font-semibold text-[#0f2b1e]">Phone:</strong>{' '}
                  <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">
                    (702) 766-3299
                  </Link>
                </p>
                <p>
                  <strong className="font-semibold text-[#0f2b1e]">Email:</strong>{' '}
                  <Link href="mailto:DrDuffySells@SpanishTrailHomes.com" className="underline-offset-4 hover:underline">
                    DrDuffySells@SpanishTrailHomes.com
                  </Link>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-[#1f4a35]"
              >
                <Link href="tel:+17027663299">
                  Call (702) 766-3299
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e] hover:text-white"
              >
                <Link href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e] hover:text-white"
              >
                <Link href={gbpUrl} target="_blank" rel="noopener noreferrer">
                  View Google Reviews
                </Link>
              </Button>
            </div>
            
            <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 text-sm text-[#372a20]/85">
              <p className="mb-2 font-semibold uppercase tracking-[0.3em] text-[#0f2b1e]">Business hours</p>
              <p className="mb-3 text-[#372a20]/90">
                <span className="font-semibold text-[#0f2b1e]">Service area:</span> {GBP_SERVICE_AREA_LABEL}
              </p>
              <dl className="space-y-1">
                <div className="flex flex-wrap justify-between gap-2">
                  <dt>Sunday – Saturday</dt>
                  <dd>9:00 AM – 6:00 PM</dd>
                </div>
                {shouldShowPromotedSpecialHoursNotice() ? (
                  <div className="mt-2 border-t border-[#d8cdbf] pt-2">
                    <dt className="font-semibold text-[#0f2b1e]">Special hours (Google Business Profile)</dt>
                    <dd>
                      {GBP_EASTER_2026_CLOSURE.label}: {GBP_EASTER_2026_CLOSURE.detail}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] shadow-lg">
            <iframe
              title="Spanish Trail Homes Location - 5050 Spanish Trail Ln, Las Vegas, NV 89113"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1155408815076!2d-115.28609452341818!3d36.10914500736459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf27532cd0f3%3A0xba327d02c4e3709e!2sSpanish%20Trail%20Country%20Club!5e0!3m2!1sen!2sus!4v1731191452004!5m2!1sen!2sus"
              className="h-[400px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
      <SectionBanner headingId="faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="faq-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          Spanish Trail Homes Questions Answered
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6">
          {faqContent.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-base leading-relaxed text-[#372a20]/85">
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
