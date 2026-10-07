/**
 * Post-deploy manual validation (not automated in CI):
 *
 * 1) Google Rich Results Test — https://search.google.com/test/rich-results — test live URLs:
 *    - https://www.spanishtrailhomes.com/ (LocalBusiness + WebSite from root layout)
 *    - https://www.spanishtrailhomes.com/contact (WebPage + FAQPage)
 *    - https://www.spanishtrailhomes.com/relocation (FAQPage)
 *    - https://www.spanishtrailhomes.com/spanish-trail-homes-for-sale-las-vegas
 *    - https://www.spanishtrailhomes.com/homes-for-sale-in-spanish-trail-las-vegas
 *    - https://www.spanishtrailhomes.com/google-business-profile (WebPage + BreadcrumbList; entity refs #localBusiness)
 *    - one https://www.spanishtrailhomes.com/neighborhoods/* URL
 *
 *    VideoObject: when a page embeds a player, add JSON-LD via createVideoObjectSchema() in this module; see
 *    https://developers.google.com/search/docs/appearance/structured-data/video — do not emit VideoObject without an embed.
 *
 * 2) Google Search Console (property must match www host): Sitemaps status, URL Inspection on / and /contact,
 *    Page indexing for errors, Enhancements for structured-data warnings.
 *
 * 3) Monthly Search Central changelog: https://support.google.com/webmasters/answer/6211428
 */
import { getAbsoluteSiteImageUrl } from '@/lib/cloudflare-images'
import {
  GBP_COUNTRY,
  GBP_EMAIL,
  GBP_GEO,
  GBP_KNOWS_ABOUT,
  GBP_LOCALITY,
  GBP_PHONE_E164,
  GBP_POSTAL,
  GBP_REGION,
  GBP_STREET,
} from '@/lib/gbp-business'

const siteUrl = 'https://www.spanishtrailhomes.com'

/** Canonical entity IDs. No slash before the hash — `…com/#id` is a different node. */
export const localBusinessId = `${siteUrl}#localBusiness`
export const personId = `${siteUrl}#person`
export const organizationId = `${siteUrl}#organization`
export const websiteId = `${siteUrl}#website`
export const countryClubId = `${siteUrl}#spanish-trail-country-club`

/** Root-layout RealEstateAgent / LocalBusiness. Reference this instead of repeating the agent. */
export const localBusinessReference = { '@id': localBusinessId } as const

/** Root-layout Person for Dr. Jan Duffy. */
export const personReference = { '@id': personId } as const

/** Root-layout Berkshire Hathaway HomeServices Nevada Properties organization. */
export const organizationReference = { '@id': organizationId } as const

/** Root-layout WebSite. */
export const websiteReference = { '@id': websiteId } as const

/**
 * Spanish Trail Country Club. Separate from the brokerage even though they share the street address.
 * Do not copy the agent phone, email, or a guessed club website onto this node.
 */
export const countryClubReference = { '@id': countryClubId } as const

type BreadcrumbItem = {
  name: string
  url: string
}

type WebPageSchemaInput = {
  name: string
  description: string
  path: string
  type?: string
  extra?: Record<string, unknown>
}

const buildAbsoluteUrl = (path: string) => {
  if (!path || path === '/') {
    return siteUrl
  }

  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: buildAbsoluteUrl(item.url),
  })),
})

export type FaqSchemaItem = {
  question: string
  answer: string
}

export const createFaqSchema = (items: FaqSchemaItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})

export const createWebPageSchema = ({ name, description, path, type = 'WebPage', extra = {} }: WebPageSchemaInput) => {
  const url = buildAbsoluteUrl(path)

  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'en-US',
    // Reference root layout WebSite (#website); avoid duplicating WebSite properties per page.
    isPartOf: websiteReference,
    ...extra,
  }
}

export const structuredDataSiteUrl = siteUrl

export type VideoObjectSchemaInput = {
  name: string
  description: string
  thumbnailUrl: string
  /** ISO 8601 date the video was published (e.g. 2026-01-15) */
  uploadDate: string
  /** App Router path for the page that embeds the player (e.g. /about) */
  path: string
  contentUrl?: string
  embedUrl?: string
}

/**
 * VideoObject JSON-LD — use only when the same page embeds the video (e.g. YouTube iframe).
 * @see https://developers.google.com/search/docs/appearance/structured-data/video
 */
export const createVideoObjectSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  path,
  contentUrl,
  embedUrl,
}: VideoObjectSchemaInput) => {
  const pageUrl = buildAbsoluteUrl(path)
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${pageUrl}#video`,
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(contentUrl ? { contentUrl } : {}),
    ...(embedUrl ? { embedUrl } : {}),
    publisher: localBusinessReference,
  }
}

/**
 * Generate an absolute canonical URL for a given path
 * Ensures the URL is clean (no query parameters) and absolute
 */
export const getCanonicalUrl = (path: string): string => {
  if (!path || path === '/') {
    return siteUrl
  }
  // Remove any query parameters and ensure path starts with /
  const cleanPath = path.split('?')[0].split('#')[0]
  return `${siteUrl}${cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`}`
}

type OgImageOptions = {
  title: string
  subtitle?: string
  eyebrow?: string
}

export const createOgImageUrl = ({ title, subtitle, eyebrow }: OgImageOptions) => {
  const params = new URLSearchParams()
  params.set('title', title)

  if (subtitle) {
    params.set('subtitle', subtitle)
  }

  if (eyebrow) {
    params.set('eyebrow', eyebrow)
  }

  return `${siteUrl}/api/og?${params.toString()}`
}

/**
 * Person schema for Dr. Jan Duffy - 2026 AEO/GEO optimization
 * Enhances entity recognition and citation by AI search engines
 */
export const createPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': personId,
  name: 'Dr. Jan Duffy',
  honorificPrefix: 'Dr.',
  givenName: 'Jan',
  familyName: 'Duffy',
  email: GBP_EMAIL,
  telephone: GBP_PHONE_E164,
  url: siteUrl,
  image: [
    getAbsoluteSiteImageUrl('duffy-circle-canonical'),
    getAbsoluteSiteImageUrl('duffy-circle-about'),
    getAbsoluteSiteImageUrl('duffy-circle-contact-call'),
  ],
  jobTitle: 'Real Estate Agent',
  worksFor: {
    '@type': 'Organization',
    '@id': organizationId,
    name: 'Berkshire Hathaway HomeServices Nevada Properties',
    url: 'https://www.bhhsnv.com',
  },
  knowsAbout: [...GBP_KNOWS_ABOUT],
  areaServed: {
    '@type': 'Place',
    name: 'Spanish Trail, Las Vegas, NV 89113',
  },
  sameAs: [
    'https://www.linkedin.com/company/spanishtrailhomes',
    'https://www.facebook.com/spanishtrailhomes',
    'https://www.instagram.com/spanishtrailhomes',
  ],
})

/**
 * Organization schema for Berkshire Hathaway HomeServices - 2026 GEO
 */
export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: 'Berkshire Hathaway HomeServices Nevada Properties',
  url: 'https://www.bhhsnv.com',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Berkshire Hathaway HomeServices',
  },
})

/**
 * Country club node shared by golf, membership, club, guest, events, and neighborhood pages.
 * Same street and map pin as the office. No telephone, email, or official website — those are unknown here.
 */
export const createCountryClubSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['SportsActivityLocation', 'Organization'],
  '@id': countryClubId,
  name: 'Spanish Trail Country Club',
  address: {
    '@type': 'PostalAddress',
    streetAddress: GBP_STREET,
    addressLocality: GBP_LOCALITY,
    addressRegion: GBP_REGION,
    postalCode: GBP_POSTAL,
    addressCountry: GBP_COUNTRY,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: GBP_GEO.latitude,
    longitude: GBP_GEO.longitude,
  },
})

type ArticleSchemaInput = {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  articleSection?: string
}

/**
 * Article schema for insight/blog pages - Critical for AEO 2026
 * AI answer engines prioritize content with proper Article markup
 */
export const createArticleSchema = ({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  articleSection = 'Real Estate',
}: ArticleSchemaInput) => {
  const url = buildAbsoluteUrl(path)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: personReference,
    publisher: localBusinessReference,
    inLanguage: 'en-US',
    articleSection,
    isPartOf: websiteReference,
  }
}

type AggregateRatingSchemaInput = {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}

/**
 * AggregateRating schema - 2026 SEO best practice
 * Increases CTR by 20-30% when displayed in search results
 */
export const createAggregateRatingSchema = ({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}: AggregateRatingSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  ratingValue,
  reviewCount,
  bestRating,
  worstRating,
  itemReviewed: localBusinessReference,
})

type FaqItem = {
  question: string
  answer: string
}

/** FAQPage JSON-LD. Visible Q&A on the same page must match these strings. */
export const createFaqPageSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})

type SiteImageObjectInput = {
  assetId: string
  name: string
  caption?: string
  path?: string
}

/** ImageObject for heading/section photos used in sitemap, OG, and page JSON-LD. */
export const createSiteImageObjectSchema = ({
  assetId,
  name,
  caption,
  path = '/',
}: SiteImageObjectInput) => {
  const contentUrl = getAbsoluteSiteImageUrl(assetId)
  const pageUrl = buildAbsoluteUrl(path)
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': `${contentUrl}#${assetId}`,
    contentUrl,
    url: contentUrl,
    name,
    caption: caption ?? name,
    encodingFormat: 'image/png',
    creditText: 'Spanish Trail | Homes By Dr. Jan Duffy',
    copyrightNotice: '© Spanish Trail | Homes By Dr. Jan Duffy',
    mainEntityOfPage: pageUrl,
  }
}

