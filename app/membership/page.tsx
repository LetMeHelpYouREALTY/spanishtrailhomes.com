import type { Metadata } from 'next'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { CalendlyInline } from '@/components/calendly-inline'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { HeroBackground } from '@/components/hero-background'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner, CardVisual } from '@/components/heading-media'
import { getSiteImageUrl } from '@/lib/cloudflare-images'


const membershipNarratives = [
  {
    title: 'Understanding Membership When Buying',
    paragraphs: [
      'Spanish Trail Country Club offers several membership categories—from full golf to young executive, corporate, or social. As your real estate agent, Dr. Jan Duffy helps you understand how membership works before you purchase a home. She explains the different tiers, typical initiation fees, and monthly dues so you can factor these costs into your budget alongside your home purchase.',
      'When you buy a Spanish Trail home, membership is not automatic—you apply separately through the club. Dr. Duffy can introduce you to the membership director and explain the application timeline so you can coordinate club access with your closing date.'
    ],
  },
  {
    title: 'Membership Categories at a Glance',
    paragraphs: [
      'Full golf members enjoy unlimited tee times across all 27 holes, tournament access, and reciprocal privileges at partner clubs. Social and lifestyle members access dining, tennis, pools, fitness, and the full social calendar without golf privileges. Young executive memberships offer reduced initiation fees for members under 40. Corporate memberships allow businesses to designate multiple users for client entertainment.',
      'Dr. Duffy provides an overview of each category so home buyers can evaluate which tier fits their lifestyle. She recommends contacting the club directly for current pricing and availability, and can facilitate that introduction.'
    ],
  },
  {
    title: 'Membership Transfers When Selling',
    paragraphs: [
      'Club memberships at Spanish Trail are personal—they do not transfer automatically with a home sale. However, sellers sometimes negotiate to cover a portion of the buyer\'s initiation fee as part of the transaction. Dr. Duffy has experience structuring these arrangements and can advise both buyers and sellers on common practices.',
      'For sellers who are club members, Dr. Duffy explains your options: you may resign your membership, retain it if purchasing elsewhere in Spanish Trail, or explore the club\'s policies on membership holds. She coordinates with the club\'s membership office to ensure a smooth transition.'
    ],
  },
  {
    title: 'Why Membership Enhances Home Value',
    paragraphs: [
      'Proximity to world-class amenities is a key selling point for Spanish Trail homes. Residents can cart to morning tee times, walk to the tennis center, or enjoy poolside dining without leaving the community. Buyers who value an active country club lifestyle often pay a premium for homes near the clubhouse or with golf course views.',
      'Dr. Duffy helps buyers find homes that match their intended use of club amenities—whether that\'s daily golf access, tennis and fitness focus, or primarily social and dining benefits. For sellers, she highlights membership benefits in marketing materials to attract buyers seeking this lifestyle.'
    ],
  },
]

const membershipFaq = [
  {
    question: 'How do Las Vegas golf memberships work at Spanish Trail Country Club?',
    answer:
      'Spanish Trail offers full golf, young executive, corporate, social, and other categories—each with different access and fees set by the club. Membership is separate from buying a home; Dr. Jan Duffy explains how the pieces fit your budget and introduces you to the membership director for official pricing and applications.',
  },
  {
    question: 'How does membership work when buying a Spanish Trail home?',
    answer:
      'Club membership is separate from home ownership—buying a home does not automatically include membership. Dr. Jan Duffy explains the membership options and typical costs so you can budget accordingly. She can introduce you to the club\'s membership director to start your application process.',
  },
  {
    question: 'Are memberships transferable when selling a Spanish Trail home?',
    answer:
      'Memberships are personal and do not automatically transfer with a home sale. However, sellers sometimes negotiate to cover a portion of the buyer\'s initiation fee as part of the transaction. Dr. Duffy has experience structuring these arrangements for both buyers and sellers.',
  },
  {
    question: 'How do dues differ between membership categories?',
    answer:
      'Full golf memberships carry the highest dues, reflecting extensive course access and tournament programming. Social and young executive memberships offer lower monthly investments while still providing access to dining, fitness, and social events. Contact the club directly for current pricing—Dr. Duffy can facilitate that introduction.',
  },
  {
    question: 'Does Dr. Duffy represent the club or home buyers/sellers?',
    answer:
      'Dr. Duffy is a real estate agent representing home buyers and sellers in Spanish Trail—not the club itself. She provides information about membership to help clients understand the full cost of Spanish Trail living and can introduce you to the club\'s membership team for official applications and pricing.',
  },
  {
    question: 'What should I budget for beyond the home purchase?',
    answer:
      'Beyond the home price, Spanish Trail buyers should consider HOA fees (separate from club membership), club initiation fees if joining, and monthly club dues. Dr. Duffy provides estimates for these costs so you can make informed decisions, though she recommends verifying current rates directly with the HOA and club.',
  },
]

const membershipFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: membershipFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const pageUrl = 'https://www.spanishtrailhomes.com/membership'
const membershipPageDescription =
  'Las Vegas golf membership at Spanish Trail Country Club: categories, how membership relates to buying a home, and introductions to the club—Dr. Jan Duffy for real estate; the club for official dues and initiation.'

const membershipWebPageSchema = createWebPageSchema({
  name: 'Las Vegas Golf Membership & Spanish Trail Country Club | Home Buyer Guide',
  description: membershipPageDescription,
  path: '/membership',
  type: 'CollectionPage',
  extra: {
    about: {
      '@type': 'Organization',
      name: 'Spanish Trail Country Club',
    },
  },
})

export const metadata: Metadata = {
  title: 'Las Vegas Golf Membership | Spanish Trail Country Club | Home Buyers | Dr. Jan Duffy',
  description: membershipPageDescription,
  alternates: { canonical: getCanonicalUrl('/membership') },
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
    title: 'Spanish Trail Membership Guide for Home Buyers',
    description:
      'Understand membership options, costs, and transfers when buying or selling a Spanish Trail home. Real estate guidance from Dr. Jan Duffy.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Membership',
        subtitle: 'Guide for home buyers & sellers',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Membership Guide',
    description:
      'Learn how club membership works when buying or selling a Spanish Trail home.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Membership',
        subtitle: 'For home buyers & sellers',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const membershipOptions = [
  {
    title: 'Full Golf Membership',
    copy: 'Unlimited access to all 27 holes, practice facilities, dining venues, social calendar, and wellness amenities.',
  },
  {
    title: 'Young Executive Membership',
    copy: 'Reduced initiation fees for members under 40, including mentorship programs and networking events.',
  },
  {
    title: 'Corporate Golf Membership',
    copy: 'Flexible designees, hosted client events, and branded experiences tailored for business development.',
  },
  {
    title: 'Social & Lifestyle Membership',
    copy: 'Enjoy dining, tennis, pickleball, pools, and all clubhouse events without full golf privileges.',
  },
]

export default function MembershipPage() {
  return (
    <SiteShell>
      <MembershipHero />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Membership Guide' }]} />
        </div>
      </div>
      <RealScoutSection
        id="membership-listings"
        eyebrow="Homes for Sale"
        title="Spanish Trail Homes with Club Access"
        description="Browse homes for sale in Spanish Trail. Dr. Duffy helps you understand membership options and costs as part of your home buying process."
        priceMin="500000"
        propertyTypes=",SFR,CONDO"
      />
      <MembershipNarrativesSection />
      <OfferingsSection />
      <ValueHighlights />
      <YoungExecutiveSection />
      <InquirySection />
      <MembershipFAQSection />
      <Script id="membership-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(membershipFaqSchema)}
      </Script>
      <Script id="membership-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(membershipWebPageSchema)}
      </Script>
    </SiteShell>
  )
}

function MembershipHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="membership-hero-heading"
    >
      <HeroBackground
        src={getSiteImageUrl('h1-clubhouse')}
        alt="Spanish Trail Country Club membership information and amenities in Las Vegas 89113"
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/55 via-[#0f2b1e]/65 to-[#0f2b1e]/80"
        sizes="(max-width: 1024px) 100vw, 1280px"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background" />
      <div className="mx-auto max-w-5xl px-6 py-28 text-primary-foreground sm:py-40">
        <p className="text-xs uppercase tracking-[0.5em] text-accent">
          Membership Guide
        </p>
        <h1
          id="membership-hero-heading"
          className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          Understanding Spanish Trail Club Membership
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground sm:text-lg">
          Learn how country club membership works when buying or selling a home in Spanish Trail. Dr. Jan Duffy explains your options as a real estate agent—not a club representative.
        </p>
      </div>
      <HeroSearchWidget theme="dark" />
    </section>
  )
}

function OfferingsSection() {
  return (
    <section
      id="offerings"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="offerings-heading"
    >
      <SectionBanner headingId="offerings-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Membership Categories
          </p>
          <h2
            id="offerings-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Club membership options at Spanish Trail
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail offers several membership tiers. Understanding these options helps you budget for the full cost of Spanish Trail living. Contact the club directly for current pricing and availability.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {membershipOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-3xl border border-border/50 bg-card/90 p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                {option.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {option.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MembershipNarrativesSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="membership-narratives-heading">
      <SectionBanner headingId="membership-narratives-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Real Estate Guidance</p>
          <h2 id="membership-narratives-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            What home buyers and sellers need to know about membership
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            As your real estate agent, Dr. Jan Duffy helps you understand how club membership factors into buying or selling a Spanish Trail home. She provides guidance on membership—but for official applications and pricing, you work directly with the club.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {membershipNarratives.map((topic) => (
            <article key={topic.title} className="space-y-6 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-8 shadow-lg shadow-primary/10">
              <CardVisual seed={String(topic.title)} />
              <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">
                {topic.title}
              </h3>
              {topic.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-[#372a20]/85">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ValueHighlights() {
  return (
    <section
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="value-heading"
    >
      <SectionBanner headingId="value-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Why Spanish Trail
          </p>
          <h2
            id="value-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Club amenities that enhance home value
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail&apos;s world-class amenities attract buyers seeking an active country club lifestyle. Understanding these amenities helps sellers market their homes and helps buyers find the right fit.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: '27-Hole Golf Course',
              copy: 'Robert Trent Jones Jr. design with lakes, waterfalls, and 120 bunkers.',
            },
            {
              title: '12 Tennis Courts',
              copy: 'Lighted courts, pro shop, and professional instruction.',
            },
            {
              title: 'Two Aquatic Centers',
              copy: 'Resort-style pools, heated spas, and swim programs.',
            },
            {
              title: '50,000 SF Clubhouse',
              copy: 'Dining, fitness, social events, and member services.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border/50 bg-background/80 p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function YoungExecutiveSection() {
  return (
    <section
      id="young-executive"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="young-executive-heading"
    >
      <SectionBanner headingId="young-executive-heading" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Young Executive Program
          </p>
          <h2
            id="young-executive-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Reduced initiation for members under 40
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail offers a young executive membership with reduced initiation fees for members under 40. This makes country club living more accessible for younger buyers. Contact the club directly for current eligibility and pricing.
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>• Progressive dues structure as you advance in age</p>
            <p>• Full access to golf, tennis, pools, and dining</p>
            <p>• Networking events with established members</p>
          </div>
        </div>

        <div
          className="h-full rounded-3xl border border-border/60 bg-cover bg-center shadow-lg"
          style={{
            backgroundImage: `url('${getSiteImageUrl('h2-membership-lounge')}')`,
          }}
          role="img"
          aria-label="Members socializing at Spanish Trail Country Club"
        />
      </div>
    </section>
  )
}

function InquirySection() {
  return (
    <section
      id="inquiry"
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="inquiry-heading"
    >
      <SectionBanner headingId="inquiry-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Schedule a Consultation
        </p>
        <h2
          id="inquiry-heading"
          className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
        >
          Buying or Selling in Spanish Trail?
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Select a time below to speak with Dr. Jan Duffy about homes for sale in Spanish Trail, current market values, and how club membership transfers work when buying or selling.
        </p>

        <div className="mx-auto w-full max-w-3xl rounded-3xl border border-border/60 bg-background/80 p-4 shadow-lg sm:p-6">
          <CalendlyInline height={700} minWidth={320} className="w-full" />
        </div>
      </div>
    </section>
  )
}

function MembershipFAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="membership-faq-heading">
      <SectionBanner headingId="membership-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Frequently Asked Questions</p>
          <h2 id="membership-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Membership questions from home buyers and sellers</h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Common questions Dr. Duffy receives about how club membership works when buying or selling a Spanish Trail home.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {membershipFaq.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
              <CardVisual seed={String(item.question)} />
              <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-[#0f2b1e]">
                {item.question}
              </h3>
              <p className="text-base leading-relaxed text-[#372a20]/85">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
