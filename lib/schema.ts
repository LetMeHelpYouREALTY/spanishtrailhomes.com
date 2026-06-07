/**
 * Schema.org structured data utilities for SEO, AEO, and GEO optimization
 * Based on 2026 best practices for AI search engines and Google Knowledge Graph
 */

const siteUrl = 'https://www.spanishtrailhomes.com'

export interface ArticleSchemaProps {
  headline: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
  author?: string
  image?: string
  keywords?: string[]
}

export interface HowToSchemaProps {
  name: string
  description: string
  totalTime?: string
  steps: Array<{
    name: string
    text: string
    url?: string
  }>
}

export interface PlaceSchemaProps {
  name: string
  description: string
  address: string
  latitude: number
  longitude: number
  imageUrl?: string
}

/**
 * Generate Article schema for content pages
 * Optimized for AI Overviews and answer engines
 */
export function generateArticleSchema({
  headline,
  description,
  url,
  datePublished = new Date().toISOString(),
  dateModified = new Date().toISOString(),
  author = 'Dr. Janet Duffy',
  image = `${siteUrl}/og-image.png`,
  keywords = [],
}: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author,
      url: `${siteUrl}/#person`,
      jobTitle: 'Real Estate Agent',
      worksFor: {
        '@type': 'Organization',
        name: 'Berkshire Hathaway HomeServices Nevada Properties',
      },
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Spanish Trail Homes',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/og-image.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: keywords.join(', '),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  }
}

/**
 * Generate HowTo schema for process/guide content
 * Highly favored by answer engines in 2026
 */
export function generateHowToSchema({
  name,
  description,
  totalTime,
  steps,
}: HowToSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url,
    })),
  }
}

/**
 * Generate Place schema for specific neighborhoods
 * Critical for local SEO and geographic answer engines
 */
export function generateNeighborhoodSchema({
  name,
  description,
  address,
  latitude,
  longitude,
  imageUrl,
}: PlaceSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name,
    description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89117',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    image: imageUrl,
    containedInPlace: {
      '@type': 'City',
      name: 'Las Vegas',
      '@id': 'https://www.wikidata.org/wiki/Q23768',
    },
  }
}

/**
 * Generate BreadcrumbList schema for navigation
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${siteUrl}${item.url}` : undefined,
    })),
  }
}

/**
 * Spanish Trail neighborhood data for geo-targeting
 */
export const spanishTrailNeighborhoods = [
  {
    name: 'Spanish Trail Estates',
    description: 'Custom golf-course estates ranging from 5,000-15,000 sq ft with double-gated motor courts and panoramic fairway views',
    address: 'Spanish Trail Estates, Las Vegas, NV',
    latitude: 36.1095,
    longitude: -115.2830,
  },
  {
    name: 'Spanish Trail Courtyards',
    description: 'Lock-and-leave luxury with mature courtyards, private pools, and effortless clubhouse access',
    address: 'Spanish Trail Courtyards, Las Vegas, NV',
    latitude: 36.1088,
    longitude: -115.2815,
  },
  {
    name: 'Spanish Trail Villas',
    description: 'Fairway villas with wraparound patios, elevated tee-box vistas, and direct golf course access',
    address: 'Spanish Trail Villas, Las Vegas, NV',
    latitude: 36.1102,
    longitude: -115.2845,
  },
  {
    name: 'Spanish Trail Springs',
    description: 'Tree-lined streets with family-friendly floor plans and proximity to Bishop Gorman High School',
    address: 'Spanish Trail Springs, Las Vegas, NV',
    latitude: 36.1080,
    longitude: -115.2800,
  },
]

/**
 * Generate comprehensive ItemList schema for property listings
 */
export function generatePropertyListSchema(
  properties: Array<{
    name: string
    url: string
    price?: string
    image?: string
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: properties.map((property, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SingleFamilyResidence',
        name: property.name,
        url: property.url,
        offers: property.price
          ? {
              '@type': 'Offer',
              price: property.price.replace(/[^0-9]/g, ''),
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            }
          : undefined,
        image: property.image,
      },
    })),
  }
}

/**
 * Video schema for property tours and walkthroughs
 */
export function generateVideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  duration,
}: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  contentUrl: string
  duration?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    duration,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Spanish Trail Homes',
    },
  }
}
