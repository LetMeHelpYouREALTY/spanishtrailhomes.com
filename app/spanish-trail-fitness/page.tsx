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


const pageUrl = 'https://www.spanishtrailhomes.com/spanish-trail-fitness'
const pageDescription =
  'Spanish Trail fitness facility features state-of-the-art equipment, personal training, group classes, and wellness programming within the 50,000 sq ft clubhouse in Las Vegas.'

const webPageSchema = createWebPageSchema({
  name: 'Spanish Trail Fitness Center | Gym & Wellness Programs',
  description: pageDescription,
  path: '/spanish-trail-fitness',
})

export const metadata: Metadata = {
  title: 'Spanish Trail Fitness Center | Gym & Wellness in Las Vegas',
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/spanish-trail-fitness'),
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
    title: 'Spanish Trail Fitness | Clubhouse Gym & Wellness',
    description:
      'State-of-the-art fitness facility with personal training and group classes at Spanish Trail Country Club.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Fitness',
        subtitle: 'Gym & wellness programs',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Fitness Center',
    description:
      'Modern fitness facility with personal training and classes within the Spanish Trail clubhouse.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Fitness',
        subtitle: 'State-of-the-art equipment & training',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const faqContent = [
  {
    question: 'What equipment is available at the Spanish Trail fitness center?',
    answer:
      'The fitness facility features state-of-the-art cardio equipment, strength training machines, free weights, stretching areas, and functional training zones. Equipment is regularly maintained and updated to meet member needs.',
  },
  {
    question: 'Are personal trainers available at Spanish Trail?',
    answer:
      'Yes, certified personal trainers are available for one-on-one sessions, partner training, and small group instruction. Trainers can design customized programs for fitness goals ranging from weight loss to athletic performance.',
  },
  {
    question: 'What group fitness classes are offered?',
    answer:
      'Spanish Trail offers a variety of group classes including yoga, Pilates, spin, strength training, and aqua fitness. Class schedules rotate seasonally, with options throughout the day to accommodate different schedules.',
  },
  {
    question: 'Is the fitness center included in HOA fees?',
    answer:
      'The fitness center is a Country Club amenity, separate from HOA fees. Club membership provides access to the fitness facility, pools, tennis courts, and other amenities. Dr. Jan Duffy can explain membership options and costs.',
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

export default function SpanishTrailFitnessPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Club', href: '/club' },
              { label: 'Fitness Center' },
            ]}
          />
        </div>
      </div>
      <FacilitySection />
      <ProgramsSection />
      <WellnessSection />
      <RealScoutSection
        id="fitness-homes"
        eyebrow="Active Living"
        title="Spanish Trail homes for fitness enthusiasts"
        description="Find homes with easy access to the fitness center, pools, tennis courts, and golf course for an active lifestyle."
        priceMin="600000"
        propertyTypes=",SFR,CONDO"
      />
      <FAQSection />
      <CTASection />
      <Script id="fitness-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="fitness-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20 relative isolate overflow-hidden" aria-labelledby="fitness-hero-heading">
      <SectionBanner headingId="fitness-hero-heading" />
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[#c6aa7a]">Fitness & Wellness</p>
        <h1 id="fitness-hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Fitness Center
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          The 50,000 square-foot Spanish Trail clubhouse includes a state-of-the-art fitness facility with modern equipment, personal trainers, and group classes. Whether you&apos;re starting your day with sunrise yoga or training for your next athletic goal, our fitness center supports your wellness journey.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/membership">Join the club</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/contact">Inquire about fitness</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function FacilitySection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="facility-heading">
      <SectionBanner headingId="facility-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">State-of-the-Art Facility</p>
            <h2 id="facility-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Modern Equipment & Training Space
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Spanish Trail fitness center features modern cardio and strength equipment in a well-designed space within the clubhouse. Large windows provide natural light and views of the community, creating an inspiring environment for your workout.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Members enjoy access throughout the day, with peak hours managed to ensure equipment availability. The facility includes locker rooms with premium amenities, making it easy to fit fitness into your daily routine.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">Equipment & Zones</h3>
            <div className="space-y-4">
              {[
                { area: 'Cardio Zone', description: 'Treadmills, ellipticals, bikes, and rowing machines with entertainment systems' },
                { area: 'Strength Training', description: 'Machine circuit, cable systems, and plate-loaded equipment' },
                { area: 'Free Weights', description: 'Dumbbells, barbells, benches, and squat racks' },
                { area: 'Functional Training', description: 'TRX, kettlebells, medicine balls, and open floor space' },
                { area: 'Stretching Area', description: 'Mats, foam rollers, and flexibility equipment' },
              ].map((item) => (
                <div key={item.area} className="rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">{item.area}</p>
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

function ProgramsSection() {
  return (
    <section className="border-y border-border/60 bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="programs-heading">
      <SectionBanner headingId="programs-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Fitness Programs</p>
          <h2 id="programs-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Personal Training & Group Classes
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Spanish Trail offers fitness programming for all levels—from beginners starting their wellness journey to athletes training for competition. Certified trainers design programs tailored to your goals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Personal Training',
              description: 'One-on-one sessions with certified trainers. Customized programs for weight loss, strength building, athletic performance, or rehabilitation.',
            },
            {
              title: 'Yoga & Pilates',
              description: 'Classes for all levels focusing on flexibility, core strength, balance, and mind-body connection. Mat and equipment options available.',
            },
            {
              title: 'Spin Classes',
              description: 'High-energy cycling sessions with music and instructor motivation. Great cardio workout in a group setting.',
            },
            {
              title: 'Strength Training',
              description: 'Group classes focused on resistance training, body sculpting, and functional fitness for everyday strength.',
            },
            {
              title: 'Aqua Fitness',
              description: 'Pool-based workouts offering low-impact cardio and resistance training. Perfect for joint health and summer fitness.',
            },
            {
              title: 'Senior Fitness',
              description: 'Programs designed for active adults focusing on balance, flexibility, strength, and cardiovascular health.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
              <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#372a20]/85">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WellnessSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="wellness-heading">
      <SectionBanner headingId="wellness-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Wellness Lifestyle</p>
            <h2 id="wellness-heading" className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl">
              Beyond the Gym
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Spanish Trail supports a complete wellness lifestyle. Combine fitness center workouts with tennis, golf, swimming, and the natural beauty of walking paths around scenic lakes. The clubhouse dining options make healthy eating convenient after your workout.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Many members create daily routines that incorporate multiple amenities—sunrise yoga, mid-morning tennis, lunch at The Bar & Grill, and evening walks along the golf course. Living at Spanish Trail makes an active lifestyle effortless.
            </p>
            <Button asChild variant="outline" className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]">
              <Link href="/spanish-trail-lifestyle">Explore lifestyle amenities</Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">Integrated Wellness</h3>
            <div className="space-y-3">
              {[
                'Fitness center with cardio and strength equipment',
                'Two aquatic centers for swimming and water fitness',
                '12 lighted tennis courts with pro instruction',
                '27 holes of championship golf',
                'Miles of walking paths around scenic lakes',
                'Healthy dining options at The Bar & Grill',
                'Social activities and wellness workshops',
                'Spa-quality locker room amenities',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="size-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="fitness-faq-heading">
      <SectionBanner headingId="fitness-faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="fitness-faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Fitness Center FAQs
        </h2>
        <div className="mt-10 space-y-6">
          {faqContent.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 text-base leading-relaxed text-[#372a20]/85">
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
    <section className="bg-white py-16 sm:py-20 relative isolate overflow-hidden" aria-labelledby="fitness-cta-heading">
      <SectionBanner headingId="fitness-cta-heading" />
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 id="fitness-cta-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Ready for an active lifestyle?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Find a Spanish Trail home that supports your wellness goals. Contact Dr. Jan Duffy at <Link href="tel:+17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link> to explore homes with easy access to fitness amenities.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em]">
            <Link href="/contact">Connect with Dr. Jan Duffy</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#0f2b1e]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10">
            <Link href="/club">Explore all club amenities</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
