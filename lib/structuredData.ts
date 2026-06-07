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
const siteUrl = 'https://www.spanishtrailhomes.com'

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
    isPartOf: { '@id': `${siteUrl}#website` },
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
    publisher: { '@id': `${siteUrl}#localBusiness` },
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
  '@id': `${siteUrl}#person`,
  name: 'Dr. Jan Duffy',
  honorificPrefix: 'Dr.',
  givenName: 'Jan',
  familyName: 'Duffy',
  email: 'DrDuffySells@SpanishTrailHomes.com',
  telephone: '+17027663299',
  url: siteUrl,
  jobTitle: 'Real Estate Agent',
  worksFor: {
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: 'Berkshire Hathaway HomeServices Nevada Properties',
    url: 'https://www.bhhsnv.com',
  },
  knowsAbout: [
    'Spanish Trail Real Estate',
    'Luxury Homes Las Vegas',
    'Guard-Gated Communities',
    'Golf Course Properties',
    'Las Vegas Real Estate Market',
    'Spanish Trail Country Club',
  ],
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
  '@id': `${siteUrl}#organization`,
  name: 'Berkshire Hathaway HomeServices Nevada Properties',
  url: 'https://www.bhhsnv.com',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Berkshire Hathaway HomeServices',
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
    author: { '@id': `${siteUrl}#person` },
    publisher: { '@id': `${siteUrl}#localBusiness` },
    inLanguage: 'en-US',
    articleSection,
    isPartOf: { '@id': `${siteUrl}#website` },
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
  itemReviewed: { '@id': `${siteUrl}#localBusiness` },
})

