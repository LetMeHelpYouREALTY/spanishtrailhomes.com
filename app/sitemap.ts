import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

// Optimized for SEO, GEO, and AEO with content-specific priorities and change frequencies
const routes = [
  // Homepage - highest priority, daily updates for listings
  { path: '/', priority: 1.0, changeFrequency: 'daily' as const },

  // Market intelligence & insights - high priority, weekly updates for AEO
  { path: '/spanish-trail-market-report', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/spanish-trail-insights', priority: 0.9, changeFrequency: 'weekly' as const },

  // Key landing pages - high priority, weekly updates
  { path: '/buyers', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/sellers', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/communities/spanish-trail', priority: 0.9, changeFrequency: 'weekly' as const },

  // Neighborhood comparison pages - high priority for local SEO
  { path: '/las-vegas-luxury-neighborhoods', priority: 0.85, changeFrequency: 'weekly' as const },

  // SEO landing pages - moderate-high priority
  { path: '/spanish-trail-homes-for-sale-las-vegas', priority: 0.85, changeFrequency: 'weekly' as const },
  { path: '/spanish-trail-guard-gated-golf-homes', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/spanish-trail-luxury-golf-course-properties', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/spanish-trail-custom-estate-homes-strip', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/spanish-trail-townhomes-villas', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/spanish-trail-gated-golf-realtor', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/spanish-trail-southwest-las-vegas-luxury-homes', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/spanish-trail-private-golf-course-homes', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/spanish-trail-country-club-estate-listings', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/spanish-trail-waterfront-golf-homes', priority: 0.8, changeFrequency: 'weekly' as const },

  // Club & amenity pages - moderate priority
  { path: '/club', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/golf', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/events', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/membership', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/guest-info', priority: 0.7, changeFrequency: 'monthly' as const },

  // About & contact - important for E-E-A-T signals
  { path: '/about', priority: 0.75, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.75, changeFrequency: 'monthly' as const },
  { path: '/awards', priority: 0.7, changeFrequency: 'monthly' as const },

  // Legal pages - lower priority, infrequent changes
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/accessibility', priority: 0.3, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
