import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner, CardVisual } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-schools'
const pageDescription =
  'Schools serving Spanish Trail homes in Las Vegas 89113: Frank Kim Elementary, Grant Sawyer Middle, Spring Valley High School, plus Bishop Gorman High School 2.2 miles via S. Rainbow Blvd.'

const webPageSchema = createWebPageSchema({
  name: 'Spanish Trail Schools | Las Vegas School Guide',
  description: pageDescription,
  path: '/spanish-trail-schools',
})

export const metadata: Metadata = {
  title: 'Spanish Trail Schools | Las Vegas School Distances | Dr. Jan Duffy',
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-schools'),
  },
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
    title: 'Schools Serving Spanish Trail Homes',
    description:
      'Named CCSD campuses and nearby private schools with distances for Spanish Trail buyers.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Schools',
        subtitle: 'Named schools and distances',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Schools Guide',
    description:
      'Schools serving Spanish Trail homes in Las Vegas. Named campuses and distances for 89113 buyers.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Schools',
        subtitle: 'Clark County School District',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const schools = [
  {
    level: 'Elementary School',
    name: 'Frank Kim Elementary School',
    grades: 'K-5',
    description:
      'Frank Kim Elementary serves the youngest students in the Spanish Trail area, providing a strong foundation in core academics along with enrichment programs in arts, music, and physical education. The school emphasizes character development and community involvement.',
    highlights: [
      'Strong reading and math programs',
      'After-school enrichment activities',
      'Parent involvement opportunities',
      'Safe, nurturing environment',
    ],
  },
  {
    level: 'Middle School',
    name: 'Grant Sawyer Middle School',
    grades: '6-8',
    description:
      'Grant Sawyer Middle School bridges the gap between elementary and high school, offering rigorous academics alongside electives in technology, performing arts, and athletics. Students develop critical thinking skills and prepare for high school success.',
    highlights: [
      'Advanced academic tracks available',
      'Competitive sports programs',
      'Technology and STEM focus',
      'Counseling and college prep support',
    ],
  },
  {
    level: 'High School',
    name: 'Spring Valley High School',
    grades: '9-12',
    description:
      'Spring Valley High School offers comprehensive college preparatory curriculum, Advanced Placement courses, and career technical education pathways. The school has strong athletics and extracurricular programs that prepare students for higher education and career success.',
    highlights: [
      'AP and honors course offerings',
      'Career and technical education',
      'Competitive athletics programs',
      'College counseling and SAT/ACT prep',
    ],
  },
]

const faqContent = [
  {
    question: 'What school district serves Spanish Trail?',
    answer:
      'Spanish Trail is served by the Clark County School District (CCSD), the fifth-largest school district in the United States. CCSD provides comprehensive K-12 education with a focus on academic excellence and preparing students for college and careers.',
  },
  {
    question: 'Are there private school options near Spanish Trail?',
    answer:
      'Yes, several private schools are within a short drive of Spanish Trail, including The Meadows School, Faith Lutheran, and Bishop Gorman High School. Dr. Jan Duffy can provide information on private school options and their proximity to specific Spanish Trail neighborhoods.',
  },
  {
    question: 'How do school boundaries affect home purchases?',
    answer:
      'School boundaries can change, so it is important to verify current assignments before purchasing. Dr. Jan Duffy confirms school zoning for every Spanish Trail listing and can help you find homes within your preferred school boundaries.',
  },
  {
    question: 'What extracurricular activities are available?',
    answer:
      'Schools serving Spanish Trail offer athletics, performing arts, academic clubs, and community service programs. Spanish Trail Country Club also runs youth golf, tennis, and swim programs; club membership is optional and separate from the deed.',
  },
]

const faqSchema = {
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

export default function SpanishTrailSchoolsPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Community', href: '/communities/spanish-trail' },
              { label: 'Schools' },
            ]}
          />
        </div>
      </div>
      <DistrictOverview />
      <SchoolsSection />
      <RealScoutSection
        id="school-listings"
        eyebrow="Family Homes"
        title="Spanish Trail homes near named schools"
        description="Browse listings by bedrooms, square footage, and neighborhood. Bishop Gorman High School is 2.2 miles; CCSD campuses serve the 89113 master plan."
        priceMin="700000"
        propertyTypes=",SFR"
      />
      <FAQSection />
      <CTASection />
      <Script id="schools-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schools-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="schools-hero-heading">
      <SectionBanner headingId="schools-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[#c6aa7a]">Education</p>
        <h1 id="schools-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Schools Near Spanish Trail Homes
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Students living in Spanish Trail are served by the Clark County School District, which provides K-12 education with strong academic foundations and extensive extracurricular activities. Discover the schools that serve this premier Las Vegas community.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Ask about school distances</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#school-listings">Browse listings</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function DistrictOverview() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="district-heading">
      <SectionBanner headingId="district-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Clark County School District</p>
            <h2 id="district-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Schools serving Spanish Trail homes
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Clark County School District prides itself on providing students grades K-12 with a strong learning foundation backed by extracurricular and academic activities. Support services are offered for future endeavors in higher education or entering the workforce.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Residents of Spanish Trail are zoned to established CCSD campuses and can also drive to magnet programs, career technical academies, and nearby private schools. Bishop Gorman High School is 2.2 miles northeast via S. Rainbow Blvd.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">What buyers ask about schools</h3>
            <div className="space-y-4">
              {[
                { title: 'Guard-gated access', description: '24/7 staffed gates on Tropicana and a Hacienda residents gate.' },
                { title: 'On-site recreation', description: 'Golf, tennis, swimming, and parks inside the 640-acre master plan.' },
                { title: 'Commute times', description: '10–15 minutes to the Strip, Summerlin, and major employment centers.' },
                { title: 'Named campuses', description: 'Frank Kim Elementary, Grant Sawyer Middle, Spring Valley High School, plus Bishop Gorman 2.2 miles.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SchoolsSection() {
  return (
    <section className="border-y border-border/60 bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="schools-list-heading">
      <SectionBanner headingId="schools-list-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Assigned Schools</p>
          <h2 id="schools-list-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Schools Serving Spanish Trail
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Below are the public schools that serve the Spanish Trail community. School boundaries can change, so Dr. Jan Duffy verifies current assignments for every home search.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {schools.map((school) => (
            <article key={school.name} className="rounded-3xl border border-[#d8cdbf] bg-white p-8 shadow-lg shadow-primary/10">
              <CardVisual seed={String(school.name)} />
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                <div className="flex-1 space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6f5237]">{school.level}</p>
                  <h3 className="font-[var(--font-playfair)] text-2xl text-[#1f2a24]">{school.name}</h3>
                  <p className="text-sm text-[#6f5237]">Grades {school.grades}</p>
                  <p className="text-base leading-relaxed text-[#372a20]/85">{school.description}</p>
                </div>
                <div className="lg:w-72">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f2b1e]">Highlights</p>
                  <ul className="mt-3 space-y-2 text-sm text-[#372a20]/80">
                    {school.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#6f5237]" aria-hidden />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="schools-faq-heading">
      <SectionBanner headingId="schools-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="schools-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          School FAQs for Spanish Trail Buyers
        </h2>
        <div className="mt-10 space-y-6">
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

function CTASection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20 relative isolate overflow-hidden" aria-labelledby="schools-cta-heading">
      <SectionBanner headingId="schools-cta-heading" />
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 id="schools-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Find a Spanish Trail home near the campus you want
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Dr. Jan Duffy matches 89113 listings to commute and campus location. Call <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link> to start your search.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Connect with Dr. Jan Duffy</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="/communities/spanish-trail">Explore the community</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
