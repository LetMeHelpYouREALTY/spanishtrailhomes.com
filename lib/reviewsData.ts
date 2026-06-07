/**
 * Client reviews and testimonials
 * Implementation of AggregateRating and Review schema based on Nate's Newsletter
 * cross-platform authority recommendations for GEO/AEO optimization
 */

import { createReviewSchema, createAggregateRatingSchema } from './enhancedSchema'

/**
 * Sample review structure - Replace with actual client testimonials
 *
 * To add reviews:
 * 1. Collect client permission and testimonial
 * 2. Add to SPANISH_TRAIL_REVIEWS array
 * 3. Update AGGREGATE_RATING with new totals
 * 4. Import and use in layout.tsx or reviews page
 */

export interface ClientReview {
  author: string
  date: string // ISO 8601 format: YYYY-MM-DD
  rating: number // 1-5
  title?: string
  body: string
  propertyType?: string // e.g., "Estate", "Villa", "Townhome"
  neighborhood?: string // e.g., "The Estates", "The Gardens"
  verified?: boolean
}

/**
 * Client testimonials for Dr. Jan Duffy / Spanish Trail Homes
 *
 * PLACEHOLDER DATA - Replace with actual verified client reviews
 */
export const SPANISH_TRAIL_REVIEWS: ClientReview[] = [
  // Example format - remove and replace with actual reviews
  // {
  //   author: 'John & Jane Smith',
  //   date: '2026-05-15',
  //   rating: 5,
  //   title: 'Exceptional Service and Market Knowledge',
  //   body: 'Dr. Jan Duffy\'s expertise in Spanish Trail was invaluable. She knew every neighborhood inside and out, helped us find the perfect estate in The Estates, and guided us through a smooth closing. Her data-driven approach and concierge service made all the difference.',
  //   propertyType: 'Estate',
  //   neighborhood: 'The Estates',
  //   verified: true,
  // },
]

/**
 * Aggregate rating calculation
 * Update these values when adding new reviews
 *
 * PLACEHOLDER - Update with actual review statistics
 */
export const AGGREGATE_RATING = {
  ratingValue: 5.0, // Average rating
  reviewCount: 0, // Total number of reviews - UPDATE THIS
  bestRating: 5,
  worstRating: 5, // Update when you have varied ratings
}

/**
 * Generate schema.org Review objects from client testimonials
 */
export const generateReviewSchemas = () => {
  return SPANISH_TRAIL_REVIEWS.map((review) =>
    createReviewSchema({
      author: review.author,
      datePublished: review.date,
      reviewBody: review.body,
      ratingValue: review.rating,
      itemReviewed: 'Spanish Trail | Homes By Dr. Jan Duffy',
    }),
  )
}

/**
 * Generate schema.org AggregateRating object
 */
export const generateAggregateRatingSchema = () => {
  if (AGGREGATE_RATING.reviewCount === 0) {
    return null // Don't show aggregate rating if no reviews
  }

  return createAggregateRatingSchema({
    ratingValue: AGGREGATE_RATING.ratingValue,
    reviewCount: AGGREGATE_RATING.reviewCount,
    bestRating: AGGREGATE_RATING.bestRating,
    worstRating: AGGREGATE_RATING.worstRating,
  })
}

/**
 * Featured testimonial for homepage or about page
 * Rotates through available reviews or returns null if none available
 */
export const getFeaturedTestimonial = (): ClientReview | null => {
  if (SPANISH_TRAIL_REVIEWS.length === 0) return null

  // Return most recent review
  const sorted = [...SPANISH_TRAIL_REVIEWS].sort((a, b) => b.date.localeCompare(a.date))
  return sorted[0]
}

/**
 * Get reviews by rating (for filtering)
 */
export const getReviewsByRating = (rating: number): ClientReview[] => {
  return SPANISH_TRAIL_REVIEWS.filter((review) => review.rating === rating)
}

/**
 * Get reviews by property type
 */
export const getReviewsByPropertyType = (propertyType: string): ClientReview[] => {
  return SPANISH_TRAIL_REVIEWS.filter((review) => review.propertyType === propertyType)
}

/**
 * Get reviews by neighborhood
 */
export const getReviewsByNeighborhood = (neighborhood: string): ClientReview[] => {
  return SPANISH_TRAIL_REVIEWS.filter((review) => review.neighborhood === neighborhood)
}

/**
 * Cross-platform review sources
 * Based on Nate's Newsletter recommendation: "Reddit, Quora, Facebook Groups, LinkedIn
 * and other UGC sites are among the most heavily cited websites in AI search"
 */
export const REVIEW_PLATFORMS = {
  google: {
    name: 'Google',
    url: 'https://g.page/r/Ca9gwAWH5oLcEBM/review',
    icon: 'google',
    cta: 'Leave a Google Review',
  },
  facebook: {
    name: 'Facebook',
    url: 'https://www.facebook.com/spanishtrailhomes/reviews',
    icon: 'facebook',
    cta: 'Review on Facebook',
  },
  zillow: {
    name: 'Zillow',
    url: '#', // Add Zillow agent profile URL
    icon: 'zillow',
    cta: 'Review on Zillow',
  },
  realtor: {
    name: 'Realtor.com',
    url: '#', // Add Realtor.com agent profile URL
    icon: 'realtor',
    cta: 'Review on Realtor.com',
  },
} as const

/**
 * Instructions for collecting reviews
 *
 * ## Best Practices for Review Collection
 *
 * 1. **Timing**: Request review within 7 days of closing
 * 2. **Permission**: Always get written permission to publish
 * 3. **Authenticity**: Use exact client words, minimal editing
 * 4. **Verification**: Mark verified purchases/sales
 * 5. **Diversity**: Collect reviews across property types and neighborhoods
 * 6. **Platforms**: Encourage reviews on Google, Facebook, Zillow, Realtor.com
 * 7. **Schema**: Add to this file, schemas auto-generate
 *
 * ## Adding a New Review
 *
 * ```typescript
 * {
 *   author: 'Client Name',
 *   date: 'YYYY-MM-DD',
 *   rating: 5,
 *   title: 'Short headline',
 *   body: 'Full testimonial text...',
 *   propertyType: 'Estate', // or 'Villa', 'Townhome'
 *   neighborhood: 'The Estates', // Spanish Trail neighborhood
 *   verified: true,
 * }
 * ```
 *
 * ## Updating Aggregate Rating
 *
 * After adding reviews, update AGGREGATE_RATING:
 * - Calculate new ratingValue (sum of all ratings / reviewCount)
 * - Increment reviewCount
 * - Update worstRating if needed
 *
 * ## Schema Integration
 *
 * Once reviews are added, import into app/layout.tsx:
 *
 * ```typescript
 * import { generateReviewSchemas, generateAggregateRatingSchema } from '@/lib/reviewsData'
 *
 * const reviews = generateReviewSchemas()
 * const aggregateRating = generateAggregateRatingSchema()
 *
 * // Add to LocalBusiness schema:
 * {
 *   '@type': 'LocalBusiness',
 *   ...(aggregateRating && { aggregateRating }),
 *   ...(reviews.length > 0 && { review: reviews }),
 * }
 * ```
 */
