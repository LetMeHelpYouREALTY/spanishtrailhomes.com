import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

// SEO-optimized sitemap with granular priorities & change frequencies (2026 best practices)
type RouteConfig = {
  path: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

const routes: RouteConfig[] = [
  // Core landing pages - highest priority, frequent updates
  { path: '/', changeFrequency: 'daily', priority: 1.0 },
  { path: '/spanish-trail-homes-for-sale-las-vegas', changeFrequency: 'daily', priority: 0.9 },
  { path: '/spanish-trail-market-report', changeFrequency: 'weekly', priority: 0.9 },

  // Key conversion pages
  { path: '/buyers', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/sellers', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/spanish-trail-insights', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/communities/spanish-trail', changeFrequency: 'weekly', priority: 0.8 },

  // Lifestyle & amenities pages
  { path: '/club', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/golf', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/membership', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/events', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/las-vegas-luxury-neighborhoods', changeFrequency: 'weekly', priority: 0.7 },

  // Supporting pages
  { path: '/guest-info', changeFrequency: 'monthly', priority: 0.6 },

  // Long-tail SEO pages - neighborhood & property type specific
  { path: '/spanish-trail-guard-gated-golf-homes', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/spanish-trail-luxury-golf-course-properties', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/spanish-trail-custom-estate-homes-strip', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/spanish-trail-townhomes-villas', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/spanish-trail-gated-golf-realtor', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/spanish-trail-southwest-las-vegas-luxury-homes', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/spanish-trail-private-golf-course-homes', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/spanish-trail-country-club-estate-listings', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/spanish-trail-waterfront-golf-homes', changeFrequency: 'weekly', priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route.path === '/' ? '' : route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
