import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HeroSearchWidget } from '@/components/hero-search-widget'

const membershipNarratives = [
  {
    title: 'Membership Pathways and Onboarding',
    paragraphs: [
      'Spanish Trail Country Club offers a refined onboarding experience that aligns with the expectations of discerning members. Prospective applicants meet with membership directors to review category options, from full golf to young executive, corporate, or social. Background interviews focus on community engagement and shared values, ensuring the club’s welcoming culture remains intact. Dr. Janet Duffy prepares clients with application timelines, sponsor recommendations, and financial planning resources so the process feels effortless.',
      'Once accepted, new members are paired with ambassadors who coordinate clubhouse tours, golf shop introductions, and dinner reservations. They also receive curated invitations to upcoming events, making it easy to integrate into the social fabric. Dr. Duffy’s concierge follow-up covers everything from locker assignments to introducing family members to youth programs, ensuring the entire household feels at home.'
    ],
  },
  {
    title: 'Lifestyle Programming for Every Membership Tier',
    paragraphs: [
      'Full golf members enjoy unlimited tee times, a bustling tournament slate, and reciprocal privileges across a network of premier clubs. Social and lifestyle members love access to dining venues, wine tastings, and a calendar of fashion showcases, speaker series, and philanthropic initiatives. Young executive members benefit from progressive dues, mentorship mixers, and professional development workshops. Regardless of tier, wellness offerings—fitness classes, spa therapy, and nutrition coaching—deliver everyday luxury.',
      'Dr. Duffy helps clients evaluate which membership aligns with their schedule and budget. She provides sample itineraries, highlights popular gatherings, and outlines add-on programs such as locker service or personal training packages. Her proactive guidance ensures every member extracts maximum value from their investment.'
    ],
  },
  {
    title: 'Real Estate Synergy with Membership Goals',
    paragraphs: [
      'Many members choose to own Spanish Trail homes because proximity enhances every aspect of club life. Residents can cart to morning tee times, host after-hours events on their patios, or pause midday for spa appointments without navigating city traffic. Dr. Duffy pairs club prospects with listings that complement their routines—estates with casitas for multi-generational living, villas with minimal maintenance for frequent travelers, or homes near specific gates for convenient commutes.',
      'She also advises on lender programs designed for luxury buyers, including portfolio loans and cross-collateralization strategies that leverage existing assets. Her Berkshire Hathaway HomeServices partnerships provide access to insurance advisors, estate planners, and wealth managers who understand how membership integrates into broader financial goals.'
    ],
  },
  {
    title: 'Community Impact and Philanthropy',
    paragraphs: [
      'Spanish Trail members are deeply involved in the Las Vegas community, supporting charities through galas, golf tournaments, and volunteer events. The club’s foundations contribute to schools, military families, and local nonprofits. Membership therefore offers a platform to amplify personal philanthropy and network with changemakers. Dr. Duffy connects civic-minded clients with committees where they can immediately make a difference.',
      'Her team also coordinates with media partners and marketing experts who showcase charitable initiatives, ensuring fundraising events reach the audiences they deserve. This full-circle approach illustrates how membership extends beyond recreation to meaningful community leadership.'
    ],
  },
]

const membershipFaq = [
  {
    question: 'What documentation is required for membership applications?',
    answer:
      'Applications generally include completed forms, letters of introduction from current members, and financial statements. Background checks may also be conducted to maintain the club’s secure environment. Dr. Janet Duffy assists applicants in assembling materials, coordinating sponsor meetings, and tracking key deadlines so the process progresses smoothly.',
  },
  {
    question: 'Are memberships transferable when selling a Spanish Trail home?',
    answer:
      'Memberships are personal and not automatically transferable with a home sale. However, some sellers negotiate initiation fees or introductions as part of contract terms. Dr. Duffy outlines best practices and liaises with the membership office to craft agreements that benefit both parties.',
  },
  {
    question: 'How do dues differ between membership categories?',
    answer:
      'Full golf memberships carry the highest dues, reflecting extensive course access and tournament programming. Social and young executive memberships offer lower monthly investments while still providing access to dining, fitness, and social events. Dr. Duffy provides updated fee schedules, payment options, and examples of annual spending so clients can budget confidently.',
  },
  {
    question: 'Can corporate memberships include multiple designees?',
    answer:
      'Yes. Corporate memberships allow companies to name several designees who can host clients, attend events, and leverage meeting spaces. Dr. Duffy works with businesses to tailor packages that align with branding, client hospitality goals, and HR benefits.',
  },
  {
    question: 'What support exists for members relocating from out of state?',
    answer:
      'The club provides relocation assistance through concierge introductions to schools, service providers, and regional partners. Dr. Duffy arranges neighborhood tours, recommends interior designers and moving specialists, and supplies city guides highlighting healthcare, shopping, and entertainment options. Her concierge model ensures Spanish Trail membership feels like an immediate home base in Las Vegas.',
  },
]


const pageUrl = 'https://www.spanishtrailhomes.com/membership'

export const metadata: Metadata = {
  title: 'Membership | Spanish Trail Country Club',
  description:
    'Discover golf, social, and corporate membership options at Spanish Trail Country Club. Request information or schedule a tour.',
  alternates: { canonical: '/membership' },
  openGraph: {
    url: pageUrl,
    title: 'Spanish Trail Membership Options',
    description:
      'Evaluate membership categories, benefits, and concierge services at Spanish Trail Country Club with Dr. Janet Duffy.',
    images: [`${pageUrl}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Membership | Spanish Trail Country Club',
    description:
      'View Spanish Trail membership tiers, pricing insights, and concierge benefits curated by Dr. Janet Duffy.',
    images: [`${pageUrl}/og-image.png`],
  },
}

const membershipOptions = [
  {
    title: 'Full Golf Membership',
    copy: 'Unlimited access to all 27 holes, practice facilities, dining venues, social calendar, and wellness amenities.',
  },
  {
    title: 'Young Executive Membership',
    copy: 'Exclusive pricing and programming for members under 40, including mentorship programs and networking events.',
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
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Membership' }]} />
        </div>
      </div>
      <RealScoutSection
        id="membership-listings"
        eyebrow="Member-Favorite Homes"
        title="Residences that Complement Spanish Trail Membership"
        description="Evaluate active listings suited for primary residents and second-home members—featuring proximity to the clubhouse, wellness center, and tennis complex."
        priceMin="500000"
        propertyTypes=",SFR,CONDO"
      />
      <MembershipNarrativesSection />
      <OfferingsSection />
      <ValueHighlights />
      <YoungExecutiveSection />
      <InquirySection />
      <MembershipFAQSection />
    </SiteShell>
  )
}

function MembershipHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="membership-hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center membership-hero-background"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background" />
      <div className="mx-auto max-w-5xl px-6 py-28 text-primary-foreground sm:py-40">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Membership
        </p>
        <h1
          id="membership-hero-heading"
          className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          A private club community curated for golfers, families, and tastemakers.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/90 sm:text-lg">
          Unlock championship golf, vibrant social programming, and concierge-level
          service minutes from the Las Vegas Strip.
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
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Membership Offerings
          </p>
          <h2
            id="offerings-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Tailored access, shared excellence.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Select the experience that fits your lifestyle—each membership includes
            dedicated concierge support and invites to our signature events.
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
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Membership Journey</p>
          <h2 id="membership-narratives-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Navigate every stage of Spanish Trail membership with confidence
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Dr. Janet Duffy demystifies application steps, programming options, and real estate synergies. These narratives outline the strategies she shares with discerning clients relocating to Spanish Trail or upgrading their existing membership tier.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {membershipNarratives.map((topic) => (
            <article key={topic.title} className="space-y-6 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-8 shadow-lg shadow-primary/10">
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
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Why Spanish Trail
          </p>
          <h2
            id="value-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Legacy-level membership with modern advantages.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Enjoy reciprocal privileges across premier clubs, members-only travel,
            curated experiences in partnership with Las Vegas luxury brands, and
            personalized service that anticipates every need.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Concierge Team',
              copy: 'Dedicated ambassadors coordinate tee times, dining reservations, and event planning.',
            },
            {
              title: 'Member Travel',
              copy: 'Exclusive golf trips and wine-country experiences hosted by Spanish Trail professionals.',
            },
            {
              title: 'Wellness Access',
              copy: 'Fitness pavilion, spa partnerships, and holistic programming curated for members.',
            },
            {
              title: 'Community Impact',
              copy: 'Philanthropic initiatives and charitable tournaments led by our members.',
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
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Young Executive
          </p>
          <h2
            id="young-executive-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Designed for emerging leaders in Las Vegas.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Enjoy progressive dues, mentorship events with established members, and
            professional networking mixers that accelerate your growth on and off the
            course.
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>• Member referral incentives and flexible payment options</p>
            <p>• Monthly executive roundtables and speaker series</p>
            <p>• Couples leagues and young-family programming</p>
          </div>
        </div>

        <div
          className="h-full rounded-3xl border border-border/60 bg-cover bg-center shadow-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524600123475-9091d53c6c87?q=80&w=1600&auto=format&fit=crop')",
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
      <div className="mx-auto max-w-4xl space-y-6 px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Request Information
        </p>
        <h2
          id="inquiry-heading"
          className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
        >
          Connect with our membership concierge.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Submit the form below and we will contact you within one business day.
          Prefer to speak directly? Call{' '}
          <Link
            href="tel:17023645050"
            className="text-primary underline-offset-4 hover:underline"
          >
            702.364.5050
          </Link>{' '}
          or email{' '}
          <Link
            href="mailto:membership@spanishtrailhomes.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            membership@spanishtrailhomes.com
          </Link>
          .
        </p>

        <form className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-left shadow-lg sm:grid-cols-2 sm:p-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@email.com"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(702) 000-0000"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-2">
            <label htmlFor="interest" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Area of Interest
            </label>
            <select
              id="interest"
              name="interest"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option>Full Golf Membership</option>
              <option>Young Executive Membership</option>
              <option>Social & Lifestyle Membership</option>
              <option>Corporate Golf Membership</option>
            </select>
          </div>
          <div className="sm:col-span-2 flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Share preferred dates for a tour, interests, or referrals."
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="sm:col-span-2">
            <Button className="w-full rounded-full py-3 text-xs uppercase tracking-[0.4em]">
              Submit Inquiry
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

function MembershipFAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="membership-faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Membership FAQ</p>
          <h2 id="membership-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Frequently asked questions from future members</h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Use these insights to streamline your application, plan financial commitments, and integrate into the Spanish Trail community faster.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {membershipFaq.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
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

