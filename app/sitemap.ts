import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

// Route configuration with SEO priorities
const routes: Array<{
  path: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}> = [
  // Homepage - highest priority
  { path: '/', priority: 1.0, changeFrequency: 'daily' },

  // Primary listing pages - high priority, updated frequently
  { path: '/spanish-trail-homes-for-sale-las-vegas', priority: 0.95, changeFrequency: 'daily' },
  { path: '/spanish-trail-market-report', priority: 0.9, changeFrequency: 'weekly' },

  // Main service pages - high priority
  { path: '/buyers', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/sellers', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },

  // Community and amenity pages - medium-high priority
  { path: '/communities/spanish-trail', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/club', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/golf', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/membership', priority: 0.85, changeFrequency: 'monthly' },

  // Specific property type pages - medium-high priority
  { path: '/spanish-trail-guard-gated-golf-homes', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/spanish-trail-luxury-golf-course-properties', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/spanish-trail-custom-estate-homes-strip', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/spanish-trail-townhomes-villas', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/spanish-trail-country-club-estate-listings', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/spanish-trail-private-golf-course-homes', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/spanish-trail-waterfront-golf-homes', priority: 0.8, changeFrequency: 'weekly' },

  // SEO landing pages - medium priority
  { path: '/spanish-trail-gated-golf-realtor', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/spanish-trail-southwest-las-vegas-luxury-homes', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/las-vegas-luxury-neighborhoods', priority: 0.75, changeFrequency: 'weekly' },

  // Content and informational pages - medium priority
  { path: '/spanish-trail-insights', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/events', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/guest-info', priority: 0.7, changeFrequency: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
