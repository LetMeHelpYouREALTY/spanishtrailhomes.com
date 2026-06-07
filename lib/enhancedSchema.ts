/**
 * Enhanced Schema.org markup for 2026 SEO/GEO/AEO best practices
 * Implements Answer Engine Optimization, Real Estate specific schemas, and AI-friendly structured data
 */

import { structuredDataSiteUrl } from './structuredData'
import { GBP_GEO, GBP_LEGAL_NAME, GBP_PHONE_E164, GBP_EMAIL } from './gbp-business'

const siteUrl = structuredDataSiteUrl

/**
 * AggregateRating schema for business or listings
 * Critical for GEO and answer engines
 */
export const createAggregateRatingSchema = (params: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}) => ({
  '@type': 'AggregateRating',
  ratingValue: params.ratingValue,
  reviewCount: params.reviewCount,
  bestRating: params.bestRating || 5,
  worstRating: params.worstRating || 1,
})

/**
 * Review schema for individual customer reviews
 * Helps with E-E-A-T signals and answer engine citations
 */
export const createReviewSchema = (params: {
  author: string
  datePublished: string
  reviewBody: string
  ratingValue: number
  itemReviewed: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  author: {
    '@type': 'Person',
    name: params.author,
  },
  datePublished: params.datePublished,
  reviewBody: params.reviewBody,
  reviewRating: {
    '@type': 'Rating',
    ratingValue: params.ratingValue,
    bestRating: 5,
    worstRating: 1,
  },
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: params.itemReviewed,
  },
})

/**
 * RealEstateListing schema for property pages
 * Essential for real estate SEO in 2026
 */
export const createRealEstateListingSchema = (params: {
  name: string
  description: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
  }
  price: number
  priceCurrency?: string
  numberOfRooms?: number
  floorSize?: { value: number; unitCode: string }
  images?: string[]
  datePosted?: string
  availabilityStarts?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: params.name,
  description: params.description,
  url: siteUrl,
  address: {
    '@type': 'PostalAddress',
    ...params.address,
    addressCountry: 'US',
  },
  offers: {
    '@type': 'Offer',
    price: params.price,
    priceCurrency: params.priceCurrency || 'USD',
    availability: 'https://schema.org/InStock',
    ...(params.availabilityStarts && { availabilityStarts: params.availabilityStarts }),
  },
  ...(params.numberOfRooms && { numberOfRooms: params.numberOfRooms }),
  ...(params.floorSize && { floorSize: { '@type': 'QuantitativeValue', ...params.floorSize } }),
  ...(params.images && { image: params.images }),
  ...(params.datePosted && { datePosted: params.datePosted }),
})

/**
 * Article schema for blog posts and insight pages
 * Improves AEO by providing clear authorship and timestamps
 */
export const createArticleSchema = (params: {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  authorName?: string
  images?: string[]
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${siteUrl}${params.path}#article`,
  headline: params.headline,
  description: params.description,
  url: `${siteUrl}${params.path}`,
  datePublished: params.datePublished,
  dateModified: params.dateModified || params.datePublished,
  author: {
    '@type': 'Person',
    name: params.authorName || 'Dr. Jan Duffy',
    url: `${siteUrl}/about`,
    jobTitle: 'Real Estate Agent',
    email: GBP_EMAIL,
    telephone: GBP_PHONE_E164,
  },
  publisher: {
    '@id': `${siteUrl}#localBusiness`,
  },
  ...(params.images && { image: params.images }),
  inLanguage: 'en-US',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${siteUrl}${params.path}`,
  },
})

/**
 * HowTo schema for guides and processes
 * Excellent for AEO as it provides step-by-step answers
 */
export const createHowToSchema = (params: {
  name: string
  description: string
  path: string
  totalTime?: string
  steps: Array<{
    name: string
    text: string
    url?: string
  }>
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: params.name,
  description: params.description,
  url: `${siteUrl}${params.path}`,
  ...(params.totalTime && { totalTime: params.totalTime }),
  step: params.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
    ...(step.url && { url: step.url }),
  })),
})

/**
 * GeoCircle for service area
 * Improves local SEO by defining geographic service boundaries
 */
export const createGeoCircleSchema = (params: {
  centerLatitude: number
  centerLongitude: number
  radiusMiles: number
  areaName?: string
}) => ({
  '@type': 'GeoCircle',
  geoMidpoint: {
    '@type': 'GeoCoordinates',
    latitude: params.centerLatitude,
    longitude: params.centerLongitude,
  },
  geoRadius: `${params.radiusMiles} mi`,
  ...(params.areaName && { name: params.areaName }),
})

/**
 * Enhanced LocalBusiness schema with 2026 best practices
 * Includes service areas, reviews, and detailed business information
 */
export const createEnhancedLocalBusinessSchema = (params: {
  aggregateRating?: ReturnType<typeof createAggregateRatingSchema>
  reviews?: Array<ReturnType<typeof createReviewSchema>>
  serviceAreas?: Array<{ name: string; latitude?: number; longitude?: number }>
  priceRange?: string
  paymentAccepted?: string[]
  currenciesAccepted?: string[]
}) => {
  const baseId = `${siteUrl}#localBusiness`

  return {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': baseId,
    name: GBP_LEGAL_NAME,
    url: siteUrl,
    ...(params.aggregateRating && { aggregateRating: params.aggregateRating }),
    ...(params.reviews && { review: params.reviews }),
    ...(params.priceRange && { priceRange: params.priceRange }),
    ...(params.paymentAccepted && { paymentAccepted: params.paymentAccepted }),
    ...(params.currenciesAccepted && { currenciesAccepted: params.currenciesAccepted }),
    ...(params.serviceAreas && {
      areaServed: params.serviceAreas.map((area) => ({
        '@type': 'Place',
        name: area.name,
        ...(area.latitude && area.longitude && {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: area.latitude,
            longitude: area.longitude,
          },
        }),
      })),
    }),
  }
}

/**
 * Person schema for author/expert markup
 * Critical for E-E-A-T and answer engine trust signals
 */
export const createPersonSchema = (params: {
  name: string
  jobTitle: string
  description?: string
  url?: string
  email?: string
  telephone?: string
  sameAs?: string[]
  image?: string
  address?: {
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
  alumniOf?: string[]
  award?: string[]
  knowsAbout?: string[]
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: params.name,
  jobTitle: params.jobTitle,
  ...(params.description && { description: params.description }),
  ...(params.url && { url: params.url }),
  ...(params.email && { email: params.email }),
  ...(params.telephone && { telephone: params.telephone }),
  ...(params.sameAs && { sameAs: params.sameAs }),
  ...(params.image && { image: params.image }),
  ...(params.address && {
    address: {
      '@type': 'PostalAddress',
      ...params.address,
    },
  }),
  ...(params.alumniOf && { alumniOf: params.alumniOf }),
  ...(params.award && { award: params.award }),
  ...(params.knowsAbout && { knowsAbout: params.knowsAbout }),
})

/**
 * Service schema for specific real estate services
 * Helps answer engines understand service offerings
 */
export const createServiceSchema = (params: {
  name: string
  description: string
  provider: string
  areaServed?: string
  serviceType?: string
}) => ({
  '@type': 'Service',
  name: params.name,
  description: params.description,
  provider: {
    '@id': `${siteUrl}#localBusiness`,
  },
  ...(params.areaServed && { areaServed: params.areaServed }),
  ...(params.serviceType && { serviceType: params.serviceType }),
})

/**
 * Event schema for open houses, tours, and community events
 * Improves local visibility and calendar integration
 */
export const createEventSchema = (params: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: {
    name: string
    address: {
      streetAddress?: string
      addressLocality: string
      addressRegion: string
      postalCode: string
    }
  }
  organizer?: string
  eventStatus?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: params.name,
  description: params.description,
  startDate: params.startDate,
  ...(params.endDate && { endDate: params.endDate }),
  location: {
    '@type': 'Place',
    name: params.location.name,
    address: {
      '@type': 'PostalAddress',
      ...params.location.address,
      addressCountry: 'US',
    },
  },
  ...(params.organizer && {
    organizer: {
      '@type': 'Organization',
      name: params.organizer,
    },
  }),
  eventStatus: params.eventStatus || 'https://schema.org/EventScheduled',
})

/**
 * Table of Contents schema for long-form content
 * Helps answer engines extract specific sections
 */
export const createTableOfContentsSchema = (sections: Array<{ name: string; url: string }>) => ({
  '@type': 'ItemList',
  name: 'Table of Contents',
  itemListElement: sections.map((section, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: section.name,
    url: section.url,
  })),
})

/**
 * Q&A Page schema for individual question pages
 * Different from FAQPage, optimized for single Q&A format
 */
export const createQAPageSchema = (params: {
  question: string
  answer: string
  path: string
  datePublished?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'QAPage',
  mainEntity: {
    '@type': 'Question',
    name: params.question,
    text: params.question,
    answerCount: 1,
    ...(params.datePublished && { dateCreated: params.datePublished }),
    acceptedAnswer: {
      '@type': 'Answer',
      text: params.answer,
      ...(params.datePublished && { dateCreated: params.datePublished }),
      author: {
        '@type': 'Person',
        name: 'Dr. Jan Duffy',
      },
    },
  },
})
