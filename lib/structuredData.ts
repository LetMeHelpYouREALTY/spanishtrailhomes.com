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
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      name: 'Spanish Trail Homes',
      url: siteUrl,
    },
    ...extra,
  }
}

export const structuredDataSiteUrl = siteUrl

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

// Enhanced schema helpers for 2026 AEO/GEO best practices
type ArticleSchemaInput = {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  author?: {
    name: string
    url?: string
  }
  keywords?: string[]
}

export const createArticleSchema = ({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  author = { name: 'Dr. Janet Duffy', url: `${siteUrl}/about` },
  keywords = [],
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
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url || `${siteUrl}/about`,
      jobTitle: 'REALTOR®',
      affiliation: {
        '@type': 'Organization',
        name: 'Berkshire Hathaway HomeServices Nevada Properties',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Spanish Trail Homes',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    inLanguage: 'en-US',
    keywords: keywords.join(', '),
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
    },
  }
}

type FAQSchemaInput = {
  question: string
  answer: string
}

export const createFAQSchema = (faqs: FAQSchemaInput[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

type RealEstateListingInput = {
  name: string
  description: string
  price: number
  priceCurrency?: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry?: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  numberOfRooms?: number
  floorSize?: {
    value: number
    unitCode: string
  }
}

export const createRealEstateListingSchema = ({
  name,
  description,
  price,
  priceCurrency = 'USD',
  address,
  geo,
  numberOfRooms,
  floorSize,
}: RealEstateListingInput) => ({
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name,
  description,
  offers: {
    '@type': 'Offer',
    price,
    priceCurrency,
    availability: 'https://schema.org/InStock',
  },
  address: {
    '@type': 'PostalAddress',
    ...address,
    addressCountry: address.addressCountry || 'US',
  },
  ...(geo && {
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
  }),
  ...(numberOfRooms && { numberOfRooms }),
  ...(floorSize && {
    floorSize: {
      '@type': 'QuantitativeValue',
      value: floorSize.value,
      unitCode: floorSize.unitCode,
    },
  }),
})

