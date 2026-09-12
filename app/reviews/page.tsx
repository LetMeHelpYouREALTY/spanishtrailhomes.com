import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { GBP_GOOGLE_REVIEW_URL, GBP_MAPS_URL } from '@/lib/gbp-business'
import { SectionBanner } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/reviews'
const pageDescription =
  'Leave a review for Dr. Jan Duffy on Google. Reviews build trust and help our Business Profile stand out to customers on Search and Maps. Business Profiles with 5+ reviews get up to twice as many customers.'

const reviewLink = GBP_GOOGLE_REVIEW_URL
const gbpUrl = GBP_MAPS_URL

const webPageSchema = createWebPageSchema({
  name: 'Leave a Google Review | Spanish Trail Homes | Dr. Jan Duffy',
  description: pageDescription,
  path: '/reviews',
  type: 'WebPage',
  extra: {
    about: {
      '@type': 'LocalBusiness',
      name: 'Spanish Trail | Homes By Dr. Jan Duffy',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5050 Spanish Trail Ln',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89113',
        addressCountry: 'US',
      },
      telephone: '+1-702-766-3299',
      url: pageUrl,
    },
    potentialAction: {
      '@type': 'ReviewAction',
      target: reviewLink,
      name: 'Leave a Google Review',
    },
  },
})

export const metadata: Metadata = {
  title: 'Leave a Google Review | Spanish Trail Homes | Dr. Jan Duffy',
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/reviews'),
  },
  openGraph: {
    url: pageUrl,
    title: 'Leave a Google Review | Spanish Trail Homes',
    description:
      'Share your experience with Dr. Jan Duffy. Reviews help future clients find trusted real estate guidance in Spanish Trail.',
    images: [
      createOgImageUrl({
        title: 'Leave a Review',
        subtitle: 'Share your Spanish Trail experience',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leave a Google Review | Dr. Jan Duffy',
    description: 'Reviews build trust. Share your experience working with Dr. Jan Duffy.',
    images: [
      createOgImageUrl({
        title: 'Leave a Review',
        subtitle: 'Google Business Profile',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

type BenefitItem = {
  title: string
  description: string
  icon: string
}

const benefits: BenefitItem[] = [
  {
    title: 'Build trust with future clients',
    description:
      'Your honest review helps other home buyers and sellers understand what it\'s like to work with Dr. Jan Duffy.',
    icon: '🤝',
  },
  {
    title: 'Stand out on Search & Maps',
    description:
      'Reviews help our Business Profile rank higher on Google Search and Maps, making it easier for clients to find us.',
    icon: '📍',
  },
  {
    title: 'Up to 2x more customers',
    description:
      'Business Profiles with 5 or more reviews can get up to twice as many customers. Your review makes a difference.',
    icon: '📈',
  },
]

type BestPracticeItem = {
  title: string
  description: string
}

const bestPractices: BestPracticeItem[] = [
  {
    title: 'Be specific about your experience',
    description:
      'Mention what services you used, how Dr. Duffy helped you, and what made the experience positive. Specific details help future clients understand what to expect.',
  },
  {
    title: 'Share outcomes',
    description:
      'Did you find your dream home? Sell quickly at a great price? Get expert market guidance? Results matter to future clients.',
  },
  {
    title: 'Keep it honest and helpful',
    description:
      'Authentic reviews are most valuable. Share both what you loved and any constructive feedback.',
  },
  {
    title: 'Respond to follow-ups',
    description:
      'If you receive a response to your review, engaging back shows the community that communication matters in real estate.',
  },
]

export default function ReviewsPage() {
  return (
    <SiteShell>
      <Script
        id="reviews-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(webPageSchema)}
      </Script>

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Leave a Review', href: '/reviews' },
        ]}
      />

      <HeroSection />
      <ReviewLinkSection />
      <BenefitsSection benefits={benefits} />
      <QRCodeSection />
      <ShareSection />
      <BestPracticesSection bestPractices={bestPractices} />
      <NegativeReviewsSection />
      <CTASection />
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0f2b1e] px-6 py-20 text-primary-foreground sm:py-28 isolate"
      aria-labelledby="reviews-hero-heading"
    >
      <SectionBanner headingId="reviews-hero-heading" />
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-primary-foreground/80">
          Google Business Profile
        </p>
        <h1
          id="reviews-hero-heading"
          className="mt-4 font-[var(--font-playfair)] text-3xl tracking-tight sm:text-4xl md:text-5xl"
        >
          Give customers a link to review your business on Google
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-primary-foreground/90 sm:text-lg">
          Reviews build trust and help your Business Profile stand out to customers on Search and Maps.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-full bg-white/10 px-6 py-2 text-sm font-medium">
            5+ reviews = up to 2x more customers
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href={reviewLink} target="_blank" rel="noopener noreferrer">
              Leave a Review Now
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-white/10"
          >
            <Link href={gbpUrl} target="_blank" rel="noopener noreferrer">
              View Our Reviews
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ReviewLinkSection() {
  return (
    <section
      className="bg-white py-20 sm:py-24"
      aria-labelledby="review-link-heading"
    >
      <SectionBanner headingId="review-link-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="review-link-heading"
          className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl"
        >
          Your review link
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
          Click the link below to leave a review, or copy it to share with others.
        </p>
        <div className="mt-8 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg">
          <label
            htmlFor="review-link-input"
            className="block text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-3"
          >
            Review link
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              id="review-link-input"
              type="text"
              readOnly
              value={reviewLink}
              className="flex-1 rounded-lg border border-[#d8cdbf] bg-white px-4 py-3 text-sm font-mono outline-none focus:border-[#0f2b1e] focus:ring-2 focus:ring-[#0f2b1e]/20"
              aria-label="Review link URL"
            />
            <Button
              asChild
              className="rounded-full bg-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-[#1f4a35]"
            >
              <Link href={reviewLink} target="_blank" rel="noopener noreferrer">
                Open Review Form
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-[#372a20]/70">
            Select the link (e.g. triple-click) to copy, or click the button to open the review form.
          </p>
        </div>
      </div>
    </section>
  )
}

function BenefitsSection({ benefits }: { benefits: BenefitItem[] }) {
  return (
    <section
      className="bg-[#f8f2e7] py-20 sm:py-24"
      aria-labelledby="benefits-heading"
    >
      <SectionBanner headingId="benefits-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">
          Why reviews matter
        </p>
        <h2
          id="benefits-heading"
          className="mt-2 font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl"
        >
          Business Profiles with 5+ reviews get up to twice as many customers
        </h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="flex flex-col rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-md"
            >
              <span className="text-4xl mb-4" role="img" aria-hidden="true">
                {benefit.icon}
              </span>
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-[#0f2b1e]">
                {benefit.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#372a20]/85">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function QRCodeSection() {
  return (
    <section
      className="bg-white py-20 sm:py-24"
      aria-labelledby="qr-code-heading"
    >
      <SectionBanner headingId="qr-code-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2
              id="qr-code-heading"
              className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl"
            >
              Share your reviews QR code
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
              Download and share this QR code with customers. They can scan it to leave a review directly on Google.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#372a20]/85">
              <li className="flex items-start gap-3">
                <span className="text-[#0f2b1e] font-semibold">1.</span>
                Right-click the QR code and select &quot;Save Image As...&quot;
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0f2b1e] font-semibold">2.</span>
                Print it on business cards, flyers, or signage
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0f2b1e] font-semibold">3.</span>
                Share digitally via email or social media
              </li>
            </ul>
            <div className="mt-8">
              <Button
                asChild
                className="rounded-full bg-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-[#1f4a35]"
              >
                <Link href={reviewLink} target="_blank" rel="noopener noreferrer">
                  Leave a Review
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-8 shadow-lg">
              {/* QR Code placeholder - using a Google Charts API generated QR code */}
              <div className="bg-white p-4 rounded-2xl">
                <Image
                  src={`https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(reviewLink)}&chs=200x200&chld=H|0`}
                  alt="QR code to leave a Google review for Dr. Jan Duffy — Spanish Trail Homes, Las Vegas"
                  width={200}
                  height={200}
                  className="block"
                  unoptimized
                />
              </div>
              <p className="mt-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#0f2b1e]">
                Scan me!
              </p>
              <p className="mt-2 text-center text-xs text-[#372a20]/70">
                Scan to leave a Google review
              </p>
            </div>
            <p className="mt-4 text-xs text-[#372a20]/70 text-center">
              Right-click and select &quot;Save Image As...&quot; to download
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ShareSection() {
  const shareText = encodeURIComponent(
    'I had a great experience with Dr. Jan Duffy at Spanish Trail Homes! Leave a review here:'
  )
  const shareUrl = encodeURIComponent(reviewLink)

  const shareLinks = [
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${shareText}%20${shareUrl}`,
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      color: 'bg-[#25D366] hover:bg-[#20BD5A]',
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: 'bg-[#1877F2] hover:bg-[#166FE5]',
    },
    {
      name: 'Email',
      href: `mailto:?subject=${encodeURIComponent('Leave a review for Dr. Jan Duffy')}&body=${shareText}%20${shareUrl}`,
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      color: 'bg-[#6f5237] hover:bg-[#5a4229]',
    },
    {
      name: 'Copy Link',
      href: '#',
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      color: 'bg-[#0f2b1e] hover:bg-[#1f4a35]',
    },
  ]

  return (
    <section
      className="bg-[#f8f2e7] py-20 sm:py-24"
      aria-labelledby="share-heading"
    >
      <SectionBanner headingId="share-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="share-heading"
          className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl"
        >
          Share the review link
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
          Help spread the word by sharing our review link on your favorite platforms.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          {shareLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.name !== 'Copy Link' ? '_blank' : undefined}
              rel={link.name !== 'Copy Link' ? 'noopener noreferrer' : undefined}
              className={`inline-flex items-center gap-3 rounded-full ${link.color} px-6 py-3 text-sm font-medium text-white transition-colors`}
              aria-label={`Share on ${link.name}`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function BestPracticesSection({ bestPractices }: { bestPractices: BestPracticeItem[] }) {
  return (
    <section
      className="bg-white py-20 sm:py-24"
      aria-labelledby="best-practices-heading"
    >
      <SectionBanner headingId="best-practices-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="best-practices-heading"
          className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl"
        >
          Best practices for writing reviews
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
          Your review matters. Here are tips to make it helpful for future clients.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {bestPractices.map((practice, index) => (
            <div
              key={practice.title}
              className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <span
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2b1e] text-sm font-semibold text-white"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#0f2b1e]">
                    {practice.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#372a20]/85">
                    {practice.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NegativeReviewsSection() {
  return (
    <section
      className="bg-[#1a1a1a] py-20 sm:py-24 text-white"
      aria-labelledby="negative-reviews-heading"
    >
      <SectionBanner headingId="negative-reviews-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="negative-reviews-heading"
          className="font-[var(--font-playfair)] text-2xl sm:text-3xl"
        >
          What to do about negative reviews
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
          Negative reviews happen. Here&apos;s how we approach them professionally.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-6">
            <h3 className="text-lg font-semibold">We respond promptly</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Every review—positive or negative—deserves a thoughtful response. We acknowledge concerns and offer to make things right.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6">
            <h3 className="text-lg font-semibold">We learn and improve</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Constructive criticism helps us serve clients better. We take feedback seriously and continuously improve our services.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6">
            <h3 className="text-lg font-semibold">We stay professional</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Our responses are always respectful, solution-oriented, and focused on the client&apos;s experience—never defensive.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6">
            <h3 className="text-lg font-semibold">We invite offline resolution</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              For complex issues, we offer direct contact to resolve matters privately and ensure satisfaction.
            </p>
          </div>
        </div>
        <p className="mt-10 text-sm text-white/60">
          Learn more about{' '}
          <Link
            href="https://support.google.com/business/answer/3474122"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-white"
          >
            Google&apos;s guidelines for responding to reviews
          </Link>
        </p>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section
      className="bg-[#0f2b1e] py-20 sm:py-24 text-white relative isolate overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <SectionBanner headingId="cta-heading" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2
          id="cta-heading"
          className="font-[var(--font-playfair)] text-3xl sm:text-4xl"
        >
          Ready to share your experience?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/80">
          Your review helps future clients find trusted guidance for their Spanish Trail real estate journey. It only takes a few minutes.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href={reviewLink} target="_blank" rel="noopener noreferrer">
              Leave a Google Review
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-white/10"
          >
            <Link href="/contact">Contact Dr. Jan Duffy</Link>
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 text-left">
          <div className="rounded-2xl bg-white/10 p-6 text-center">
            <p className="font-[var(--font-playfair)] text-3xl">Decades</p>
            <p className="mt-1 text-sm text-white/70">Las Vegas real estate experience</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 text-center">
            <p className="font-[var(--font-playfair)] text-3xl">500+</p>
            <p className="mt-1 text-sm text-white/70">Spanish Trail families advised</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 text-center">
            <p className="font-[var(--font-playfair)] text-3xl">11</p>
            <p className="mt-1 text-sm text-white/70">Neighborhoods inside the gates</p>
          </div>
        </div>
      </div>
    </section>
  )
}
