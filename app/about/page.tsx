import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

import { Breadcrumbs } from '@/components/breadcrumbs'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'

const pageUrl = 'https://www.spanishtrailhomes.com/about'
const siteUrl = 'https://www.spanishtrailhomes.com'

// Person schema for Dr. Janet Duffy (optimized for GEO/AEO)
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}#person`,
  name: 'Dr. Janet Duffy',
  alternateName: ['Dr. Jan Duffy', 'Janet Duffy', 'Jan Duffy'],
  jobTitle: 'Luxury Real Estate Advisor',
  description: 'Dr. Janet Duffy is a luxury real estate specialist with Berkshire Hathaway HomeServices Nevada Properties who has dedicated over a decade to helping families, executives, and investors discover Spanish Trail Country Club living. She combines market intelligence, local connections, and personalized service to guide every client through seamless real estate transactions.',
  url: pageUrl,
  image: `${siteUrl}/og-image.png`,
  email: 'jduffy@bhhsnv.com',
  telephone: ['+1-702-500-1955', '+1-702-222-1964'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5050 Spanish Trail Ln.',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89117',
    addressCountry: 'US',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Berkshire Hathaway HomeServices Nevada Properties',
    url: 'https://www.bhhsnv.com',
  },
  memberOf: [
    {
      '@type': 'Organization',
      name: 'Las Vegas REALTORS Association',
    },
    {
      '@type': 'Organization',
      name: 'National Association of REALTORS',
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Luxury Property Specialist Certification',
    },
  ],
  knowsAbout: [
    'Spanish Trail Country Club Real Estate',
    'Luxury Home Sales Las Vegas',
    'Guard-Gated Golf Communities',
    'Country Club Lifestyle Marketing',
    'Executive Relocation Services',
    'Investment Property Analysis',
    'Spanish Trail Market Intelligence',
    'Negotiation Strategy',
    'Concierge Real Estate Services',
  ],
  areaServed: [
    {
      '@type': 'Place',
      name: 'Spanish Trail Country Club',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89117',
        addressCountry: 'US',
      },
    },
  ],
  sameAs: [
    'https://www.facebook.com/spanishtrailhomes',
    'https://www.instagram.com/spanishtrailhomes',
    'https://www.linkedin.com/company/spanishtrailhomes',
    'https://www.youtube.com/@spanishtrailhomes',
  ],
}

// ProfilePage schema
const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: '2024-11-10T00:00:00-08:00',
  dateModified: new Date().toISOString(),
  datePublished: '2024-11-10T00:00:00-08:00',
  mainEntity: {
    '@id': `${siteUrl}#person`,
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${siteUrl}/og-image.png`,
  },
  inLanguage: 'en-US',
}

// BreadcrumbList schema for navigation
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About Dr. Janet Duffy',
      item: pageUrl,
    },
  ],
}

// FAQ data optimized for AEO (Answer Engine Optimization)
const faqData = [
  {
    question: 'Who is Dr. Janet Duffy?',
    answer:
      'Dr. Janet Duffy is a luxury real estate advisor with Berkshire Hathaway HomeServices Nevada Properties who specializes exclusively in Spanish Trail Country Club properties. With over a decade of dedicated service, she helps families, executives, and investors buy, sell, and invest in guard-gated golf community homes through personalized market intelligence and concierge-level attention.',
  },
  {
    question: 'What areas does Dr. Janet Duffy serve?',
    answer:
      'Dr. Janet Duffy serves all eleven enclaves within Spanish Trail Country Club including The Estates, Estates West, The Islands, The Villas, The Links, The Springs, Plum Creek, The Courtyards, The Gardens, The Lakes, and Sunrise Course Estates. She also assists clients in surrounding Summerlin and Spring Valley luxury communities in Las Vegas, Nevada.',
  },
  {
    question: 'How long has Dr. Janet Duffy been in real estate?',
    answer:
      'Dr. Janet Duffy has been serving Spanish Trail Country Club clients for over a decade. Her hyperlocal focus on this single guard-gated community allows her to provide unmatched market intelligence, neighborhood expertise, and relationship networks that general market agents cannot match.',
  },
  {
    question: 'What services does Dr. Janet Duffy provide?',
    answer:
      'Dr. Janet Duffy provides comprehensive buyer representation, seller representation, market analysis, relocation services, and investment property guidance. Services include RealScout property alerts, guard gate coordination, club membership introductions, negotiation strategy, inspection management, and post-closing concierge support for Spanish Trail Country Club transactions.',
  },
  {
    question: 'How can I contact Dr. Janet Duffy?',
    answer:
      'Contact Dr. Janet Duffy by calling 702-500-1955, texting 702-222-1964, or emailing jduffy@bhhsnv.com. Her office is located at 5050 Spanish Trail Lane, Las Vegas, NV 89117. She responds to all inquiries within one business day and offers confidential consultations for buyers, sellers, and investors.',
  },
]

// FAQPage schema for voice search and featured snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export const metadata: Metadata = {
  title: 'Meet Dr. Janet Duffy | Spanish Trail Real Estate Specialist',
  description:
    'Dr. Janet (Jan) Duffy is a trusted Berkshire Hathaway HomeServices luxury real estate advisor specializing in Spanish Trail Country Club homes. With over a decade of dedicated service, she combines market intelligence, local expertise, and personalized attention to guide buyers, sellers, and investors.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    url: pageUrl,
    type: 'profile',
    title: 'About Dr. Janet Duffy - Spanish Trail Real Estate Expert',
    description:
      'Meet Dr. Janet Duffy, your dedicated Spanish Trail Country Club real estate specialist with Berkshire Hathaway HomeServices Nevada Properties.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Janet Duffy - Spanish Trail Luxury Real Estate Advisor',
    description:
      'Discover how Dr. Jan Duffy combines local expertise, market intelligence, and personalized service to guide Spanish Trail buyers and sellers.',
  },
}

export default function AboutPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'About Dr. Janet Duffy' },
            ]}
          />
        </div>
      </div>
      <BackgroundSection />
      <ExpertiseSection />
      <ApproachSection />
      <CommunityCommitmentSection />
      <ServicesOverviewSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />

      {/* Structured Data for SEO, GEO, and AEO optimization */}
      <Script id="person-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(personSchema)}
      </Script>
      <Script id="profile-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(profilePageSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="about-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="about-hero-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="about-hero-heading" className="font-(--font-playfair) text-3xl leading-tight sm:text-4xl">
          Meet Dr. Janet Duffy
        </h1>
        {/* GEO/AEO optimized: 40-60 word self-contained answer block */}
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Dr. Janet Duffy is a luxury real estate advisor with Berkshire Hathaway HomeServices Nevada Properties who has specialized in Spanish Trail Country Club for over a decade. She helps families, executives, and investors navigate guard-gated home purchases, estate sales, and investment opportunities through personalized market intelligence and concierge-level service.
        </p>
        {/* GEO/AEO optimized: second answer block with specific value proposition */}
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Whether buying your first guard-gated home, selling a Spanish Trail estate, or exploring Las Vegas golf community investments, Dr. Duffy provides expert guidance with transparency and dedication. Her hyperlocal expertise covers all eleven Spanish Trail enclaves, current market trends, and club membership integration for seamless real estate transactions.
        </p>
      </div>
    </section>
  )
}

function BackgroundSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="background-heading">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">My Story</p>
          <h2 id="background-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
            A foundation built on education, service, and community
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <p>
              My journey to real estate began with a commitment to service and excellence. After earning my doctorate and spending years in professional practice, I discovered a passion for helping people navigate one of life's most significant decisions: finding the perfect home.
            </p>
            <p>
              I chose to focus exclusively on Spanish Trail because I believe in the power of deep, local expertise. Rather than spreading myself across the entire Las Vegas market, I have invested countless hours studying every enclave, understanding market trends, building relationships with club management, and staying connected to the unique rhythm of this guard-gated community.
            </p>
            <p>
              This hyperlocal approach allows me to offer insights that general market agents simply cannot match. I know which streets offer the best sunrise views, which builders created the most desirable floor plans, and how HOA policies have evolved over the years. I track every sale, monitor inventory shifts, and maintain relationships with fellow residents who trust me to represent their interests with integrity and discretion.
            </p>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <p>
              My affiliation with Berkshire Hathaway HomeServices provides access to world-class marketing resources, global networks, and cutting-edge technology platforms like RealScout. Combined with my personal knowledge of Spanish Trail, this partnership ensures my clients receive both boutique attention and institutional strength.
            </p>
            <p>
              Beyond transactions, I am committed to supporting the broader Las Vegas community through volunteer work, charitable partnerships, and ongoing education. Real estate is not just about buying and selling—it's about building lasting relationships and contributing to the vitality of the neighborhoods we serve.
            </p>
            <p>
              When I'm not touring properties or analyzing market data, you can find me exploring Las Vegas' vibrant culinary scene, attending cultural events, or enjoying the very lifestyle I help my clients discover every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExpertiseSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="expertise-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="expertise-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
          Specialized expertise in Spanish Trail real estate
        </h2>
        <p className="text-base leading-relaxed text-[#372a20]/85">
          Spanish Trail demands specialized knowledge. From understanding HOA architectural guidelines to navigating club membership options, I bring the depth of experience required to position your transaction for success.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Market Intelligence',
              detail:
                'I track every listing, sale, and price adjustment across all eleven enclaves. My weekly market reports include absorption rates, buyer demand signals, and private sale data that rarely appears in public statistics.',
            },
            {
              title: 'Negotiation Strategy',
              detail:
                'Whether representing buyers in competitive offer situations or sellers navigating inspection requests, I craft data-backed strategies that protect your interests while fostering productive dialogue.',
            },
            {
              title: 'Concierge Coordination',
              detail:
                'From guard gate access and vendor scheduling to membership introductions and post-closing support, I manage every detail so you can focus on your transition with confidence and peace of mind.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ApproachSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="approach-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="approach-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
          My approach: Transparency, integrity, results
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">Client-first mindset</h3>
            <p>
              Every decision I make is guided by one question: What serves my client's best interest? I provide honest counsel even when it's not what you want to hear, and I walk away from transactions that don't align with your goals. Trust is earned through transparency, consistency, and a proven track record.
            </p>
            <p>
              I believe in proactive communication. You'll receive regular updates, market briefs, and strategy sessions tailored to your timeline and priorities. No question is too small, and no concern goes unaddressed.
            </p>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">Data-driven decisions</h3>
            <p>
              I rely on comprehensive market analysis, comparable sales research, and real-time demand metrics to inform pricing, timing, and negotiation strategies. Intuition matters, but data provides the foundation for confident decision-making.
            </p>
            <p>
              My partnership with RealScout and access to Berkshire Hathaway HomeServices' proprietary tools ensure you benefit from the most advanced technology platforms available in luxury real estate today.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CommunityCommitmentSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="community-commitment-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="community-commitment-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
          Committed to Spanish Trail and Las Vegas
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
            <p>
              Spanish Trail is more than my professional focus—it's a community I deeply respect and actively support. I attend club events, collaborate with HOA leadership, and maintain relationships with local service providers to ensure my clients receive seamless, high-quality experiences.
            </p>
            <p>
              I also believe in giving back to the broader Las Vegas community. Through partnerships with local charities, educational initiatives, and volunteer efforts, I strive to contribute to the vitality and well-being of the city we all call home.
            </p>
            <p>
              When you work with me, you're not just hiring a real estate agent—you're partnering with someone who is invested in the long-term success and character of this remarkable community.
            </p>
          </div>
          <aside className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-sm text-[#372a20]/80">
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">Professional Affiliations</h3>
            <ul className="space-y-3">
              <li>• Berkshire Hathaway HomeServices Nevada Properties</li>
              <li>• Las Vegas REALTORS® Association</li>
              <li>• National Association of REALTORS®</li>
              <li>• Luxury Property Specialist Certification</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

function ServicesOverviewSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="services-overview-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="services-overview-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
          Comprehensive services for buyers and sellers
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">For Buyers</h3>
            <ul className="space-y-2">
              <li>• Personalized property search and RealScout alerts</li>
              <li>• Guard gate coordination and private tour scheduling</li>
              <li>• Club membership guidance and introductions</li>
              <li>• Negotiation strategy and offer preparation</li>
              <li>• Inspection coordination and due diligence support</li>
              <li>• Relocation assistance and vendor introductions</li>
            </ul>
            <Button asChild className="w-full rounded-full bg-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-[#1f3a2e]">
              <Link href="/buyers">Explore Buyer Services</Link>
            </Button>
          </article>
          <article className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10 text-sm leading-relaxed text-[#372a20]/85">
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">For Sellers</h3>
            <ul className="space-y-2">
              <li>• Comprehensive home valuation and market analysis</li>
              <li>• Strategic pricing and timing recommendations</li>
              <li>• Professional photography, staging, and marketing</li>
              <li>• Global listing syndication via Berkshire Hathaway</li>
              <li>• Negotiation and contract management</li>
              <li>• Closing coordination and post-sale support</li>
            </ul>
            <Button asChild className="w-full rounded-full bg-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-[#1f3a2e]">
              <Link href="/sellers">Explore Seller Services</Link>
            </Button>
          </article>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="about-faq-heading">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">Frequently Asked Questions</p>
          <h2 id="about-faq-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
            Common questions about Dr. Janet Duffy
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {faqData.map((item) => (
            <article
              key={item.question}
              className="space-y-4 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f2b1e]">
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

function TestimonialsSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <h2 id="testimonials-heading" className="font-(--font-playfair) text-center text-3xl leading-tight sm:text-4xl">
          What clients say about working with Dr. Duffy
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              quote:
                "Dr. Duffy's knowledge of Spanish Trail is unmatched. She helped us find the perfect home for our family and made the entire process seamless. We couldn't be happier.",
              author: 'Michael & Sarah T.',
              detail: 'Homebuyers, The Estates',
            },
            {
              quote:
                'Jan sold our estate in record time and exceeded our asking price. Her marketing strategy and negotiation skills are top-tier. Highly recommend!',
              author: 'Robert K.',
              detail: 'Home Seller, Estates West',
            },
          ].map((item, index) => (
            <article
              key={index}
              className="space-y-4 rounded-3xl border border-[#1f4a35]/60 bg-[#143927] p-6 shadow-lg shadow-black/20 text-sm leading-relaxed"
            >
              <p className="italic text-[#f8f5ef]/90">"{item.quote}"</p>
              <div className="space-y-1">
                <p className="font-semibold text-[#f8f5ef]">{item.author}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#f8f5ef]/70">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="about-cta-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 id="about-cta-heading" className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">
          Let's start a conversation
        </h2>
        <p className="text-base leading-relaxed text-[#372a20]/85">
          Whether you're exploring Spanish Trail for the first time or ready to list your current home, I'm here to provide expert guidance tailored to your unique goals. Call 702-500-1955, text 702-222-1964, or email{' '}
          <Link href="mailto:jduffy@bhhsnv.com" className="font-medium text-[#0f2b1e] underline-offset-4 hover:underline">
            jduffy@bhhsnv.com
          </Link>{' '}
          to schedule a confidential consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#0f2b1e] px-8 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-[#1f3a2e]"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/5"
          >
            <Link href="/buyers">Browse Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
