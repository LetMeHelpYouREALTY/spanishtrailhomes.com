import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

const highPriorityPages = [
  { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
  { path: '/spanish-trail-homes-for-sale-las-vegas', priority: 0.95, changeFrequency: 'daily' as const },
  { path: '/communities/spanish-trail', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/spanish-trail-market-report', priority: 0.9, changeFrequency: 'daily' as const },
]

const servicePagesRoutes = [
  '/buyers',
  '/sellers',
  '/contact',
]

const clubPages = [
  '/club',
  '/golf',
  '/events',
  '/membership',
  '/guest-info',
]

const propertyPages = [
  '/spanish-trail-guard-gated-golf-homes',
  '/spanish-trail-luxury-golf-course-properties',
  '/spanish-trail-custom-estate-homes-strip',
  '/spanish-trail-townhomes-villas',
  '/spanish-trail-gated-golf-realtor',
  '/spanish-trail-southwest-las-vegas-luxury-homes',
  '/spanish-trail-private-golf-course-homes',
  '/spanish-trail-country-club-estate-listings',
  '/spanish-trail-waterfront-golf-homes',
]

const insightPages = [
  '/spanish-trail-insights',
  '/las-vegas-luxury-neighborhoods',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    ...highPriorityPages.map(({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...servicePagesRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    ...clubPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...propertyPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    })),
    ...insightPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
