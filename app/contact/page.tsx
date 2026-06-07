import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HeroSearchWidget } from '@/components/hero-search-widget'

const pageUrl = 'https://www.spanishtrailhomes.com/contact'

export const metadata: Metadata = {
  title: 'Spanish Trail Las Vegas Real Estate Expert | Dr. Jan Duffy',
  description:
    'Spanish Trail luxury homes in Las Vegas. Dr. Jan Duffy—30+ years, 500+ families. Golf community, custom estates, gated security. $799K median. 702-222-1964',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    url: pageUrl,
    title: 'Spanish Trail Las Vegas Real Estate Expert | Dr. Jan Duffy',
    description:
      'Connect with Dr. Jan Duffy for Spanish Trail luxury homes, current market data, and private club lifestyle guidance.',
    images: [`${pageUrl}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Las Vegas Real Estate Expert | Dr. Jan Duffy',
    description:
      'Schedule a Spanish Trail strategy session with Dr. Jan Duffy—luxury guard-gated golf community specialist.',
    images: [`${pageUrl}/og-image.png`],
  },
}

const faqContent = [
  {
    question: "What's the average price in Spanish Trail right now?",
    answer:
      "Spanish Trail's median home value is $799,000 as of October 2025. Custom estates range $2M+, golf course homes $1.2M-$1.5M+, and villas $835K-$1.1M. I can pull current comparables for your specific situation—call/text 702-222-1964.",
  },
  {
    question: 'Is Spanish Trail a good investment?',
    answer:
      'The market remains strong and stable in 2025. Guard-gated security, championship golf course amenities, and proximity to the Strip (15 minutes) create consistent demand. I track weekly sales activity to ensure you get fair market value. Let\'s discuss your investment timeline.',
  },
  {
    question: 'What neighborhoods are in Spanish Trail?',
    answer:
      "Spanish Trail has 11 sub-neighborhoods including Villas at Spanish Trail, Patios at Spanish Trail, and Estate homes behind secondary gates. Each has distinct character, price points, and HOA fees ($180-$425/month). Which lifestyle appeals to you?",
  },
]


export default function ContactPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
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
      <RealScoutSection
        id="contact-advanced-search"
        eyebrow="Start Your Search"
        title="See Live Spanish Trail Inventory"
        description="Advanced filters help you pinpoint Spanish Trail homes by fairway views, secondary gates, and villa layouts."
      />
      <FAQSection />
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="contact-hero-heading">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 text-center">
        <h1 id="contact-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Las Vegas Real Estate Expert | Dr. Jan Duffy
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Spanish Trail's median value sits at $799K this month, and I'm tracking three contracts scheduled to close before month-end—including a villas listing at 6976 Emerald Springs Lane that secured a full-price offer after four days on market.
          <span className="block text-xs uppercase tracking-[0.3em] text-[#f8f5ef]/70">
            <Link href="https://searchforaffordablehomes.com/neighborhood/83/spanish-trails" className="underline-offset-4 hover:underline">
              Source: Spanish Trail Weekly Market Activity
            </Link>
          </span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="tel:17022221964">Call or Text 702-222-1964</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#contact-form">Request a Strategy Session</Link>
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
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="expertise-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          Spanish Trail Guard-Gated Golf Community Expert
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
              That real-time insight guides both sellers wanting a premium and buyers aiming to secure value without overextending. After 30 years representing 500+ Vegas families, I have walked every cul-de-sac inside the 640-acre guard gates and understand how HOA nuances, sightlines, and secondary gates impact pricing.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">Trust Signals</h3>
            <ul className="space-y-3">
              <li>
                License #S.0197614.LLC · Berkshire Hathaway HomeServices Nevada Properties
              </li>
              <li>30+ years advising Spanish Trail owners · $127M+ lifetime volume</li>
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
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="golf-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          Championship 27-Hole Golf Course Lifestyle
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
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="luxury-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          Luxury Estates, Villas & Golf Course Homes
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
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="market-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="market-heading" className="font-[var(--font-playfair)] text-2xl leading-tight sm:text-3xl">
          Current Spanish Trail Market: $799K Median (2025)
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { label: 'Median Value', value: '$799,000' },
            { label: 'Average Price / Sq. Ft.', value: '$441.15' },
            { label: 'Active Listings', value: '70' },
            { label: 'Days on Market', value: '60 (avg.)' },
          ].map((stat) => (
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
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="neighborhood-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          11 Neighborhoods, 1,200+ Homes—Which Fits You?
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Estate Homes behind secondary gates',
              detail:
                'Gated-within-gated privacy, grand motor courts, and entertainer yards. Seeing 3–4 showings per week right now—our busiest luxury cadence of 2025.',
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
    <section id="contact-form" className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="contact-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          Let\'s align your Spanish Trail move with this week\'s data
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
              Text 702-222-1964 for time-sensitive questions or call my direct line at 702-500-1955. Prefer email? Send details to <Link href="mailto:jduffy@bhhsnv.com" className="underline-offset-4 hover:underline">jduffy@bhhsnv.com</Link> and I\'ll reply within the business day.
            </p>
          </div>
          <form className="grid grid-cols-1 gap-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-left sm:grid-cols-2 sm:p-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="First & Last Name"
                className="rounded-lg border border-[#d8cdbf] bg-[#fdf9f3] px-3 py-2 text-sm outline-none focus:border-[#0f2b1e] focus:ring-2 focus:ring-[#0f2b1e]/20"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@email.com"
                className="rounded-lg border border-[#d8cdbf] bg-[#fdf9f3] px-3 py-2 text-sm outline-none focus:border-[#0f2b1e] focus:ring-2 focus:ring-[#0f2b1e]/20"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(702) 000-0000"
                className="rounded-lg border border-[#d8cdbf] bg-[#fdf9f3] px-3 py-2 text-sm outline-none focus:border-[#0f2b1e] focus:ring-2 focus:ring-[#0f2b1e]/20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="timeline" className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
                Timeline
              </label>
              <select
                id="timeline"
                className="rounded-lg border border-[#d8cdbf] bg-[#fdf9f3] px-3 py-2 text-sm outline-none focus:border-[#0f2b1e] focus:ring-2 focus:ring-[#0f2b1e]/20"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select timeline
                </option>
                <option>0-3 Months</option>
                <option>3-6 Months</option>
                <option>6-12 Months</option>
                <option>Research Phase</option>
              </select>
            </div>
            <div className="sm:col-span-2 flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
                Your Goals & Questions
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Share neighborhood preferences, home features, and timing."
                className="rounded-lg border border-[#d8cdbf] bg-[#fdf9f3] px-3 py-2 text-sm outline-none focus:border-[#0f2b1e] focus:ring-2 focus:ring-[#0f2b1e]/20"
              />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="w-full rounded-full py-3 text-xs uppercase tracking-[0.4em]">
                Send Message to Dr. Jan
              </Button>
            </div>
            <p className="sm:col-span-2 text-xs text-[#6f5237]/80">
              By submitting, you agree to receive updates from Dr. Jan Duffy. You can unsubscribe anytime.
            </p>
          </form>
        </div>

        <div className="mt-10 space-y-2 text-sm text-[#372a20]/80">
          <p>
            📞 Professional: <Link href="tel:17025001955" className="underline-offset-4 hover:underline">702-500-1955</Link>
          </p>
          <p>
            📱 Marketing/Urgent: <Link href="tel:17022221964" className="underline-offset-4 hover:underline">702-222-1964</Link>
          </p>
          <p>📧 Email: <Link href="mailto:jduffy@bhhsnv.com" className="underline-offset-4 hover:underline">jduffy@bhhsnv.com</Link></p>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="faq-heading" className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl">
          Spanish Trail Homes Questions Answered
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6">
          {faqContent.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-base leading-relaxed text-[#372a20]/85">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f2b1e]">{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
