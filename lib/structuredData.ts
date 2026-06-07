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

// Person schema for Dr. Janet Duffy - critical for AEO and authorship
export const drJanetDuffyPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}#drjanetduffy`,
  name: 'Dr. Janet Duffy',
  givenName: 'Janet',
  familyName: 'Duffy',
  honorificPrefix: 'Dr.',
  email: 'DrDuffySells@SpanishTrailHomes.com',
  telephone: '+1-702-766-3299',
  url: siteUrl,
  image: createOgImageUrl({
    title: 'Dr. Janet Duffy',
    subtitle: 'Spanish Trail Luxury Real Estate Specialist',
    eyebrow: 'Berkshire Hathaway HomeServices',
  }),
  jobTitle: 'Luxury Real Estate Advisor',
  worksFor: {
    '@type': 'Organization',
    name: 'Berkshire Hathaway HomeServices',
    url: 'https://www.bhhsnv.com',
  },
  knowsAbout: [
    'Spanish Trail Real Estate',
    'Las Vegas Luxury Homes',
    'Golf Course Communities',
    'Guard-Gated Communities',
    'Real Estate Investment',
    'Spanish Trail Country Club',
  ],
  areaServed: {
    '@type': 'Place',
    name: 'Spanish Trail, Las Vegas, Nevada',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89117',
      addressCountry: 'US',
    },
  },
  sameAs: [
    'https://www.linkedin.com/company/spanish-trail-homes/',
    'https://www.facebook.com/spanishtrailhomes',
    'https://www.instagram.com/spanishtrailhomes',
    'https://www.youtube.com/@spanishtrailhomes',
  ],
}

