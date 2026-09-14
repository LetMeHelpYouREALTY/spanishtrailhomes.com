'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GBP_GOOGLE_REVIEW_URL } from '@/lib/gbp-business'
import {
  trackTestimonialView,
  trackTestimonialNavigate,
  trackReviewsLinkClick,
} from '@/lib/analytics'

const ROTATE_MS = 7000

const TESTIMONIALS = [
  {
    id: '1',
    quote:
      "Dr. Duffy's knowledge of Spanish Trail is unmatched. She helped us find an off-market property before it ever listed.",
    name: 'Michael & Jennifer P., Gardens Villa Buyers',
    source: 'Zillow Review',
    sourceUrl: 'https://www.zillow.com/profile/DrJanDuffy',
    rating: 5,
    datePublished: '2024-11-15',
  },
  {
    id: '2',
    quote: "Sold in 9 days at $47K over asking. Jan's marketing and pricing strategy was perfect.",
    name: 'Robert K., Estates West Seller',
    source: 'Google Reviews',
    sourceUrl: GBP_GOOGLE_REVIEW_URL,
    rating: 5,
    datePublished: '2024-10-22',
  },
  {
    id: '3',
    quote:
      "As California transplants, Jan made our Spanish Trail home search stress-free with expert guidance.",
    name: 'David & Laura S., Courtyards Buyers',
    source: 'Past Client',
    sourceUrl: '/reviews',
    rating: 5,
    datePublished: '2024-09-08',
  },
  {
    id: '4',
    quote:
      "From first showing to closing, Jan was responsive and professional. Our Lakes Course home exceeded expectations.",
    name: 'Patricia L., Lakes Course Buyer',
    source: 'Google Reviews',
    sourceUrl: GBP_GOOGLE_REVIEW_URL,
    rating: 5,
    datePublished: '2024-08-12',
  },
  {
    id: '5',
    quote:
      "We interviewed three agents. Jan's Spanish Trail expertise and marketing plan won us over. Sold in 12 days.",
    name: 'James T., Estates Seller',
    source: 'Zillow Review',
    sourceUrl: 'https://www.zillow.com/profile/DrJanDuffy',
    rating: 5,
    datePublished: '2024-07-20',
  },
]

const SWIPE_THRESHOLD = 50

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, ROTATE_MS)
    return () => clearInterval(id)
  }, [isPaused])

  useEffect(() => {
    trackTestimonialView(TESTIMONIALS[activeIndex]?.name ?? '')
  }, [activeIndex])

  const handleDotClick = useCallback((index: number) => {
    trackTestimonialNavigate('dot')
    setActiveIndex(index)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX
    const startX = touchStartX.current
    touchStartX.current = null
    if (startX == null) return
    const diff = startX - endX
    if (Math.abs(diff) < SWIPE_THRESHOLD) return
    if (diff > 0) {
      trackTestimonialNavigate('next')
      setActiveIndex((i) => (i + 1) % TESTIMONIALS.length)
    } else {
      trackTestimonialNavigate('previous')
      setActiveIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    }
  }, [])

  const handleReviewsCtaClick = useCallback(() => {
    trackReviewsLinkClick('reviews_page')
  }, [])

  return (
    <section
      className="min-h-[120px] w-full bg-[#0f2b1e]/10 py-12 sm:py-16"
      aria-labelledby="testimonial-carousel-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="testimonial-carousel-heading" className="sr-only">
          Client testimonials about Dr. Jan Duffy and Spanish Trail real estate
        </h2>

        <div className="relative flex flex-col items-center">
          <div className="relative min-h-[220px] w-full max-w-3xl sm:min-h-[200px]">
            {TESTIMONIALS.map((t, index) => (
              <div
                key={t.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${index + 1} of ${TESTIMONIALS.length}`}
                className={cn(
                  'absolute inset-0 flex flex-col items-center justify-center px-4 text-center transition-opacity duration-500',
                  index === activeIndex ? 'z-10 opacity-100' : 'pointer-events-none opacity-0',
                )}
              >
                <div className="flex gap-0.5 justify-center text-[#be9956]" aria-hidden>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-5 fill-current sm:size-6" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-4 text-lg font-medium leading-relaxed text-[#1f2a24] sm:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-4 flex flex-col items-center gap-1">
                  <cite className="not-italic text-sm font-medium text-[#372a20]/90">
                    — {t.name}
                  </cite>
                  <a
                    href={t.sourceUrl}
                    target={t.sourceUrl.startsWith('http') ? '_blank' : undefined}
                    rel={t.sourceUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-xs text-[#6f5237] hover:underline"
                  >
                    {t.source}
                  </a>
                </footer>
              </div>
            ))}
          </div>

          <div
            className="mt-8 flex gap-2"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === activeIndex ? 'true' : 'false'}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => handleDotClick(index)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2b1e] focus-visible:ring-offset-2',
                  index === activeIndex ? 'bg-[#0f2b1e]' : 'bg-[#0f2b1e]/30 hover:bg-[#0f2b1e]/50',
                )}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/reviews"
              onClick={handleReviewsCtaClick}
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#0f2b1e] hover:underline"
            >
              Read client reviews
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
