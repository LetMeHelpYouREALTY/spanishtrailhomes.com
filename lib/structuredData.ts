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
 *    FAQPage JSON-LD may remain for on-page Q&A; Google retired FAQ rich results in Search
 *    (May–June 2026). Do not expect FAQ stars in SERPs.
 *
 * 2) Google Search Console (property must match www host): Sitemaps status, URL Inspection on / and /contact,
 *    Page indexing for errors, Enhancements for structured-data warnings.
 *
 * 3) Search Central docs updates: https://developers.google.com/search/docs/appearance/google-images#specify-preferred-image
 */
import { getAbsoluteSiteImageUrl } from '@/lib/cloudflare-images'
import { resolvePagePreferredImage } from '@/lib/site-images'

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

export const createImageObjectSchema = (pathOrAsset: { path: string } | { assetId: string; caption?: string }) => {
  const media =
    'path' in pathOrAsset
      ? resolvePagePreferredImage(pathOrAsset.path)
      : {
          id: pathOrAsset.assetId,
          alt: pathOrAsset.caption ?? resolvePagePreferredImage('/').alt,
        }
  const imageUrl = getAbsoluteSiteImageUrl(media.id)

  return {
    '@type': 'ImageObject' as const,
    ...('path' in pathOrAsset ? { '@id': `${buildAbsoluteUrl(pathOrAsset.path)}#primaryimage` } : {}),
    url: imageUrl,
    contentUrl: imageUrl,
    caption: media.alt,
    representativeOfPage: true,
  }
}

export const createWebPageSchema = ({ name, description, path, type = 'WebPage', extra = {} }: WebPageSchemaInput) => {
  const url = buildAbsoluteUrl(path)
  const {
    primaryImageOfPage: extraPrimaryImage,
    image: extraImage,
    about: extraAbout,
    ...restExtra
  } = extra
  const preferredImage = extraPrimaryImage ?? createImageObjectSchema({ path })

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
    about: extraAbout ?? { '@id': `${siteUrl}#localBusiness` },
    primaryImageOfPage: preferredImage,
    image: extraImage ?? (preferredImage as { url: string }).url,
    ...restExtra,
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

/** Person schema for Dr. Jan Duffy — entity identity for Search, not an AEO/GEO ranking lever. */
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
  image: [
    getAbsoluteSiteImageUrl('duffy-circle-canonical'),
    getAbsoluteSiteImageUrl('duffy-circle-about'),
    getAbsoluteSiteImageUrl('duffy-circle-contact-call'),
  ],
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

/** Brokerage Organization node referenced by Person.worksFor. */
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
 * Article schema for insight pages. Include a preferred image so Search/Discover
 * can select a thumbnail from markup as well as og:image.
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
  const image = createImageObjectSchema({ path })
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    url,
    image: image.url,
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
 * AggregateRating for a third-party entity only (for example the country club).
 * Do not attach star ratings to this site's own LocalBusiness / RealEstateAgent —
 * self-serving reviews are ineligible for review snippets.
 * @see https://developers.google.com/search/docs/appearance/structured-data/review-snippet
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

