import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import {
  createBreadcrumbSchema,
  createOgImageUrl,
  createWebPageSchema,
  getCanonicalUrl,
  structuredDataSiteUrl,
} from '@/lib/structuredData'
import { GBP_GOOGLE_REVIEW_URL, GBP_PROFILE_SHARE_URL } from '@/lib/gbp-business'
import { SectionBanner } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/google-business-profile'
const pageDescription =
  'View Dr. Jan Duffy\'s verified Google Business Profile for Spanish Trail | Homes By Dr. Jan Duffy. See reviews, business hours, office location in Las Vegas (89113), and connect via Google Search and Maps.'

/** Primary “view profile” link (Google share URL). Maps URL kept for schema + Maps-focused CTAs. */
const gbpUrl = GBP_PROFILE_SHARE_URL
const reviewLink = GBP_GOOGLE_REVIEW_URL
const mapsDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=5050+Spanish+Trail+Ln,+Las+Vegas,+NV+89113'

/** WebPage + BreadcrumbList only: LocalBusiness/RealEstateAgent lives in root layout (#localBusiness). */
const webPageSchema = createWebPageSchema({
  name: 'Google Business Profile | Dr. Jan Duffy | Spanish Trail Homes',
  description: pageDescription,
  path: '/google-business-profile',
  type: 'WebPage',
  extra: {
    about: { '@id': `${structuredDataSiteUrl}#localBusiness` },
  },
})

const gbpBreadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Google Business Profile', url: '/google-business-profile' },
])

export const metadata: Metadata = {
  title: 'Google Business Profile | Dr. Jan Duffy | Spanish Trail Homes',
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/google-business-profile'),
  },
  openGraph: {
    url: pageUrl,
    title: 'Google Business Profile | Dr. Jan Duffy | Spanish Trail Homes',
    description:
      'View Dr. Jan Duffy\'s verified Google Business Profile. See reviews, hours, location, and connect via Google.',
    images: [
      createOgImageUrl({
        title: 'Google Business Profile',
        subtitle: 'Dr. Jan Duffy · Spanish Trail Homes',
        eyebrow: 'Verified on Google',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Business Profile | Dr. Jan Duffy',
    description: 'View our verified Google Business Profile. See reviews and connect directly.',
    images: [
      createOgImageUrl({
        title: 'Google Business Profile',
        subtitle: 'Spanish Trail Homes',
        eyebrow: 'Verified on Google',
      }),
    ],
  },
}

type ProfileFeature = {
  title: string
  description: string
  icon: string
}

const profileFeatures: ProfileFeature[] = [
  {
    title: 'Verified Business',
    description: 'Our Google Business Profile is verified by Google, ensuring you\'re connecting with the authentic Dr. Jan Duffy at Spanish Trail Homes.',
    icon: '✓',
  },
  {
    title: 'Real Client Reviews',
    description: 'Read honest feedback from real clients who have bought or sold homes with Dr. Jan Duffy in Spanish Trail.',
    icon: '⭐',
  },
  {
    title: 'Direct Contact',
    description: 'Call, get directions, or message directly through Google. One click connects you to expert real estate guidance.',
    icon: '📞',
  },
  {
    title: 'Current Information',
    description: 'Business hours, location, and contact details are always up-to-date on our Google Business Profile.',
    icon: '📍',
  },
]

export default function GoogleBusinessProfilePage() {
  return (
    <SiteShell>
      <Script id="gbp-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify([webPageSchema, gbpBreadcrumbSchema])}
      </Script>

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Google Business Profile', href: '/google-business-profile' },
        ]}
      />

      <HeroSection />
      <RealScoutSection id="bhhs-listings" />
      <BusinessInfoSection />
      <ProfileFeaturesSection features={profileFeatures} />
      <ReviewsHighlightSection />
      <ConnectSection />
      <FAQSection />
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0f2b1e] px-6 py-20 text-primary-foreground sm:py-28 isolate"
      aria-labelledby="gbp-hero-heading"
    >
      <SectionBanner headingId="gbp-hero-heading" />
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-6">
          <svg className="size-5 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span>Verified on Google</span>
        </div>
        <h1
          id="gbp-hero-heading"
          className="font-[var(--font-playfair)] text-3xl tracking-tight sm:text-4xl md:text-5xl"
        >
          Spanish Trail | Homes By Dr. Jan Duffy
        </h1>
        <p className="mt-4 text-lg font-medium text-primary-foreground/90">
          Real Estate Agent
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-primary-foreground/80 sm:text-lg">
          Your trusted local real estate expert for Spanish Trail, Las Vegas. Providing precise market updates and helping residents buy and sell homes with confidence.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href={gbpUrl} target="_blank" rel="noopener noreferrer">
              View on Google
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-white/10"
          >
            <Link href={reviewLink} target="_blank" rel="noopener noreferrer">
              Leave a Review
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function BusinessInfoSection() {
  return (
    <section
      className="bg-white py-20 sm:py-24"
      aria-labelledby="business-info-heading"
    >
      <SectionBanner headingId="business-info-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2
              id="business-info-heading"
              className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl"
            >
              Business Information
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#372a20]/85">
              Find us on Google Search and Maps. All information is verified and kept current.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-4">
                  Contact Information
                </h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-[#0f2b1e]">Business Name</dt>
                    <dd className="mt-1 text-[#372a20]/85">Spanish Trail | Homes By Dr. Jan Duffy</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#0f2b1e]">Category</dt>
                    <dd className="mt-1 text-[#372a20]/85">Real Estate Agent</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#0f2b1e]">Phone</dt>
                    <dd className="mt-1">
                      <Link href="tel:+17027663299" className="text-[#0f2b1e] underline underline-offset-2 hover:text-[#1f4a35]">
                        (702) 766-3299
                      </Link>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#0f2b1e]">Website</dt>
                    <dd className="mt-1">
                      <Link href="https://www.spanishtrailhomes.com" className="text-[#0f2b1e] underline underline-offset-2 hover:text-[#1f4a35]">
                        www.spanishtrailhomes.com
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-4">
                  Location
                </h3>
                <address className="not-italic text-sm text-[#372a20]/85">
                  <p className="font-semibold text-[#0f2b1e]">5050 Spanish Trail Ln</p>
                  <p>Las Vegas, NV 89113</p>
                  <p className="mt-2 text-xs text-[#372a20]/70">Service Area: Las Vegas, NV</p>
                </address>
                <div className="mt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-[#0f2b1e] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#0f2b1e] hover:bg-[#0f2b1e] hover:text-white"
                  >
                    <Link href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-4">
                  Business Hours
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-[#372a20]/85">Sunday – Saturday</dt>
                    <dd className="font-medium text-[#0f2b1e]">9:00 AM – 6:00 PM</dd>
                  </div>
                  <div className="pt-2 border-t border-[#d8cdbf]">
                    <dt className="font-semibold text-[#0f2b1e]">Special Hours</dt>
                    <dd className="mt-1 text-[#372a20]/85">Feb 16, 2026 (Washington&apos;s Birthday): 10:00 AM – 6:00 PM</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-4">
                About This Business
              </h3>
              <p className="text-sm leading-relaxed text-[#372a20]/85">
                Your trusted local real estate expert for Spanish Trail, Las Vegas. Dr. Jan Duffy provides precise market updates, helping residents buy and sell homes with confidence. We specialize in the Spanish Trail community, offering unparalleled insights and achieving swift, successful sales, like full-price offers in just four days! Get the latest market values and personalized service for your home.
              </p>
            </div>

            <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-4">
                Accessibility Features
              </h3>
              <ul className="space-y-2 text-sm text-[#372a20]/85">
                <li className="flex items-center gap-2">
                  <span className="text-[#0f2b1e]">✓</span>
                  Wheelchair accessible parking lot
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0f2b1e]">✓</span>
                  Wheelchair accessible entrance
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#d8cdbf] shadow-lg">
              <iframe
                title="Spanish Trail Homes Location - 5050 Spanish Trail Ln, Las Vegas, NV 89113"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1155408815076!2d-115.28609452341818!3d36.10914500736459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf27532cd0f3%3A0xba327d02c4e3709e!2sSpanish%20Trail%20Country%20Club!5e0!3m2!1sen!2sus!4v1731191452004!5m2!1sen!2sus"
                className="h-[300px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProfileFeaturesSection({ features }: { features: ProfileFeature[] }) {
  return (
    <section
      className="bg-[#f8f2e7] py-20 sm:py-24"
      aria-labelledby="features-heading"
    >
      <SectionBanner headingId="features-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="features-heading"
          className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl"
        >
          Why view our Google Business Profile?
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
          Our verified profile on Google Search and Maps provides trusted information and direct ways to connect.
        </p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-md"
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2b1e] text-xl text-white"
                aria-hidden
              >
                {feature.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#0f2b1e]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#372a20]/85">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ReviewsHighlightSection() {
  return (
    <section
      className="bg-white py-20 sm:py-24"
      aria-labelledby="reviews-highlight-heading"
    >
      <SectionBanner headingId="reviews-highlight-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">
              Client Testimonials
            </p>
            <h2
              id="reviews-highlight-heading"
              className="mt-2 font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl"
            >
              See what clients say on Google
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
              Real reviews from real clients who have worked with Dr. Jan Duffy. Our Google reviews reflect decades of dedicated service to the Spanish Trail community.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-full bg-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-[#1f4a35]"
              >
                <Link href={gbpUrl} target="_blank" rel="noopener noreferrer">
                  Read All Reviews
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e] hover:text-white"
              >
                <Link href={reviewLink} target="_blank" rel="noopener noreferrer">
                  Write a Review
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg">
              <div className="flex items-center gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="size-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-sm italic text-[#372a20]/85">
                &quot;Dr. Duffy&apos;s knowledge of Spanish Trail is unmatched. She helped us find our dream home and negotiated a great price. Highly recommend!&quot;
              </p>
              <p className="mt-2 text-xs text-[#6f5237]">— Verified Google Review</p>
            </div>
            <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg">
              <div className="flex items-center gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="size-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-sm italic text-[#372a20]/85">
                &quot;Professional, responsive, and truly cares about her clients. Dr. Duffy sold our home in just 4 days at full asking price!&quot;
              </p>
              <p className="mt-2 text-xs text-[#6f5237]">— Verified Google Review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ConnectSection() {
  return (
    <section
      className="bg-[#0f2b1e] py-20 sm:py-24 text-white"
      aria-labelledby="connect-heading"
    >
      <SectionBanner headingId="connect-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="connect-heading"
          className="font-[var(--font-playfair)] text-2xl sm:text-3xl"
        >
          Connect with us on Google
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
          Multiple ways to reach Dr. Jan Duffy directly through Google.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="tel:+17027663299"
            className="flex flex-col items-center rounded-2xl bg-white/10 p-6 text-center transition-colors hover:bg-white/20"
          >
            <span className="text-3xl mb-3">📞</span>
            <span className="text-lg font-semibold">Call</span>
            <span className="mt-1 text-sm text-white/70">(702) 766-3299</span>
          </Link>
          <Link
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-2xl bg-white/10 p-6 text-center transition-colors hover:bg-white/20"
          >
            <span className="text-3xl mb-3">🗺️</span>
            <span className="text-lg font-semibold">Directions</span>
            <span className="mt-1 text-sm text-white/70">Get directions on Maps</span>
          </Link>
          <Link
            href={gbpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-2xl bg-white/10 p-6 text-center transition-colors hover:bg-white/20"
          >
            <span className="text-3xl mb-3">🌐</span>
            <span className="text-lg font-semibold">View Profile</span>
            <span className="mt-1 text-sm text-white/70">See full Google listing</span>
          </Link>
          <Link
            href={reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-2xl bg-white/10 p-6 text-center transition-colors hover:bg-white/20"
          >
            <span className="text-3xl mb-3">⭐</span>
            <span className="text-lg font-semibold">Review</span>
            <span className="mt-1 text-sm text-white/70">Share your experience</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: 'Is this Google Business Profile verified?',
      answer: 'Yes, our Google Business Profile is verified by Google. This means the business information has been confirmed as accurate and the profile is managed by the authorized business owner.',
    },
    {
      question: 'How do I leave a review?',
      answer: 'Click the "Leave a Review" button on this page, or search for "Spanish Trail Homes Dr. Jan Duffy" on Google and click the reviews section. You\'ll need a Google account to post a review.',
    },
    {
      question: 'Can I contact Dr. Duffy through Google?',
      answer: 'Yes! You can call directly by clicking the phone number on our Google Business Profile, get directions via Google Maps, or visit our website. All contact methods are available on the profile.',
    },
    {
      question: 'What information is on the Google Business Profile?',
      answer: 'Our profile includes business hours, location with map, phone number, website link, client reviews, photos, and a description of our real estate services specializing in Spanish Trail.',
    },
  ]

  return (
    <section
      className="bg-white py-20 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <SectionBanner headingId="faq-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="faq-heading"
          className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl"
        >
          Frequently Asked Questions
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/5"
            >
              <h3 className="text-lg font-semibold text-[#0f2b1e]">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#372a20]/85">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            asChild
            className="rounded-full bg-[#0f2b1e] px-8 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-[#1f4a35]"
          >
            <Link href={gbpUrl} target="_blank" rel="noopener noreferrer">
              View Full Google Business Profile
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
