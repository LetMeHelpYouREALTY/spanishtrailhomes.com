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

// Person Schema for Dr. Janet Duffy (Entity SEO & E-E-A-T)
export const createPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}#person`,
  name: 'Dr. Janet Duffy',
  honorificPrefix: 'Dr.',
  givenName: 'Janet',
  familyName: 'Duffy',
  jobTitle: 'Real Estate Agent',
  description: 'Dr. Janet Duffy is a luxury real estate specialist serving Spanish Trail and Las Vegas 89117. Ph.D. in Organizational Leadership with expertise in guard-gated golf communities.',
  url: siteUrl,
  email: 'DrDuffySells@SpanishTrailHomes.com',
  telephone: '+1-702-766-3299',
  image: createOgImageUrl({ title: 'Dr. Janet Duffy', subtitle: 'Spanish Trail Real Estate Specialist' }),
  worksFor: {
    '@type': 'RealEstateAgent',
    '@id': `${siteUrl}#organization`,
    name: 'Spanish Trail Homes | Dr. Janet Duffy',
  },
  knowsAbout: [
    'Luxury Real Estate',
    'Spanish Trail Country Club',
    'Guard-Gated Communities',
    'Golf Course Homes',
    'Las Vegas 89117',
    'Southwest Las Vegas Real Estate',
  ],
  areaServed: {
    '@type': 'City',
    name: 'Las Vegas',
    containedIn: {
      '@type': 'State',
      name: 'Nevada',
    },
  },
  sameAs: [
    'https://www.facebook.com/spanishtrailhomes',
    'https://www.instagram.com/spanishtrailhomes',
    'https://www.linkedin.com/company/spanish-trail-homes/?viewAsMember=true',
    'https://www.youtube.com/@spanishtrailhomes',
  ],
})

// Organization Schema for Knowledge Graph
export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${siteUrl}#organization`,
  name: 'Spanish Trail Homes | Dr. Janet Duffy',
  alternateName: 'Spanish Trail Homes',
  description: 'Luxury real estate services specializing in Spanish Trail Country Club and Las Vegas 89117 guard-gated communities.',
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/logo.png`,
  },
  image: createOgImageUrl({ title: 'Spanish Trail Homes', subtitle: 'Luxury Real Estate by Dr. Janet Duffy' }),
  telephone: '+1-702-766-3299',
  email: 'DrDuffySells@SpanishTrailHomes.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5050 Spanish Trail Ln.',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89117',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.109145,
    longitude: -115.282642,
  },
  parentOrganization: {
    '@type': 'RealEstateAgent',
    name: 'Berkshire Hathaway HomeServices Nevada Properties',
    url: 'https://www.bhhsnv.com',
  },
  sameAs: [
    'https://www.facebook.com/spanishtrailhomes',
    'https://www.instagram.com/spanishtrailhomes',
    'https://www.linkedin.com/company/spanish-trail-homes/?viewAsMember=true',
    'https://www.youtube.com/@spanishtrailhomes',
  ],
  knowsAbout: [
    'Spanish Trail Country Club',
    'Las Vegas Luxury Real Estate',
    'Guard-Gated Communities',
    '89117 Real Estate',
    'Golf Course Properties',
  ],
})

// Enhanced Place Schema for Spanish Trail (GEO Optimization)
export const createPlaceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Place',
  '@id': `${siteUrl}#place`,
  name: 'Spanish Trail Country Club',
  description: '640-acre guard-gated golf community in Las Vegas 89117 with 27 holes of championship golf, 11 distinct neighborhoods, and resort-style amenities.',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.109145,
    longitude: -115.282642,
    elevation: '2001 ft',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5050 Spanish Trail Ln.',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89117',
    addressCountry: 'US',
  },
  containedInPlace: {
    '@type': 'City',
    name: 'Las Vegas',
    containedIn: {
      '@type': 'AdministrativeArea',
      name: 'Clark County',
      containedIn: {
        '@type': 'State',
        name: 'Nevada',
      },
    },
  },
  hasMap: 'https://www.google.com/maps/place/Spanish+Trail+Country+Club',
})

// RealEstateListing Schema helper for property pages
type RealEstateListingInput = {
  name: string
  description: string
  price: string
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  propertyType: 'SingleFamilyResidence' | 'Apartment' | 'House' | 'Residence'
  beds?: number
  baths?: number
  sqft?: number
  lotSize?: string
  yearBuilt?: number
  images?: string[]
  url: string
}

export const createRealEstateListingSchema = (input: RealEstateListingInput) => ({
  '@context': 'https://schema.org',
  '@type': input.propertyType ? ['RealEstateListing', input.propertyType] : 'RealEstateListing',
  name: input.name,
  description: input.description,
  url: input.url,
  datePosted: new Date().toISOString().split('T')[0],
  ...(input.images && input.images.length > 0 && {
    image: input.images,
  }),
  address: {
    '@type': 'PostalAddress',
    streetAddress: input.address.street,
    addressLocality: input.address.city,
    addressRegion: input.address.state,
    postalCode: input.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.109145, // Should be property-specific
    longitude: -115.282642,
  },
  offers: {
    '@type': 'Offer',
    price: input.price.replace(/[^0-9]/g, ''),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'RealEstateAgent',
      '@id': `${siteUrl}#organization`,
      name: 'Spanish Trail Homes | Dr. Janet Duffy',
    },
  },
  ...(input.beds && { numberOfBedrooms: input.beds }),
  ...(input.baths && { numberOfBathroomsTotal: input.baths }),
  ...(input.sqft && { floorSize: { '@type': 'QuantitativeValue', value: input.sqft, unitCode: 'SQF' } }),
  ...(input.yearBuilt && { yearBuilt: input.yearBuilt }),
})

// Review/AggregateRating Schema helper (E-E-A-T signal)
type ReviewSchemaInput = {
  itemReviewed: string
  reviewCount: number
  ratingValue: number
  bestRating?: number
}

export const createAggregateRatingSchema = (input: ReviewSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}#organization`,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: input.ratingValue,
    reviewCount: input.reviewCount,
    bestRating: input.bestRating || 5,
    worstRating: 1,
  },
})

