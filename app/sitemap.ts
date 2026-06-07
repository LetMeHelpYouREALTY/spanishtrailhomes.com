import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

// SEO 2026: Granular priority and change frequency for better crawl efficiency
const routes: Array<{
  path: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}> = [
  // Primary pages - highest priority, updated frequently
  { path: '/', changeFrequency: 'daily', priority: 1.0 },
  { path: '/spanish-trail-homes-for-sale-las-vegas', changeFrequency: 'daily', priority: 0.95 },
  { path: '/spanish-trail-market-report', changeFrequency: 'weekly', priority: 0.9 },

  // Core buyer/seller pages - high priority
  { path: '/buyers', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/sellers', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },

  // Property listings pages - updated frequently for AEO
  { path: '/spanish-trail-guard-gated-golf-homes', changeFrequency: 'daily', priority: 0.85 },
  { path: '/spanish-trail-luxury-golf-course-properties', changeFrequency: 'daily', priority: 0.85 },
  { path: '/spanish-trail-custom-estate-homes-strip', changeFrequency: 'daily', priority: 0.85 },
  { path: '/spanish-trail-townhomes-villas', changeFrequency: 'daily', priority: 0.85 },
  { path: '/spanish-trail-waterfront-golf-homes', changeFrequency: 'daily', priority: 0.85 },
  { path: '/spanish-trail-private-golf-course-homes', changeFrequency: 'daily', priority: 0.85 },
  { path: '/spanish-trail-country-club-estate-listings', changeFrequency: 'daily', priority: 0.85 },

  // Geographic/local SEO pages
  { path: '/spanish-trail-southwest-las-vegas-luxury-homes', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/spanish-trail-gated-golf-realtor', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/las-vegas-luxury-neighborhoods', changeFrequency: 'weekly', priority: 0.85 },

  // Community & lifestyle pages
  { path: '/communities/spanish-trail', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/club', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/golf', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/events', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/membership', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/guest-info', changeFrequency: 'monthly', priority: 0.7 },

  // Content & insights - refreshed for AEO (83% of AI citations from pages updated within 12 months)
  { path: '/spanish-trail-insights', changeFrequency: 'weekly', priority: 0.85 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
