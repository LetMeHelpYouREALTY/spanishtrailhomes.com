import type { MetadataRoute } from 'next'
import { detailedNeighborhoods } from '@/lib/spanishTrailContent'

const baseUrl = 'https://www.spanishtrailhomes.com'

// Generate neighborhood routes dynamically
const neighborhoodRoutes = detailedNeighborhoods.map((n) => `/neighborhoods/${n.slug}`)

const routes = [
  '/',
  '/buyers',
  '/sellers',
  '/communities/spanish-trail',
  '/club',
  '/golf',
  '/events',
  '/membership',
  '/guest-info',
  '/about',
  '/contact',
  '/awards',
  '/privacy',
  '/terms',
  '/accessibility',
  '/spanish-trail-homes-for-sale-las-vegas',
  '/spanish-trail-guard-gated-golf-homes',
  '/spanish-trail-luxury-golf-course-properties',
  '/spanish-trail-custom-estate-homes-strip',
  '/spanish-trail-townhomes-villas',
  '/spanish-trail-gated-golf-realtor',
  '/spanish-trail-southwest-las-vegas-luxury-homes',
  '/spanish-trail-private-golf-course-homes',
  '/spanish-trail-country-club-estate-listings',
  '/spanish-trail-waterfront-golf-homes',
  '/spanish-trail-market-report',
  '/spanish-trail-insights',
  '/las-vegas-luxury-neighborhoods',
  '/neighborhoods',
  ...neighborhoodRoutes,
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((path) => {
    // Determine priority based on page type (AEO optimization)
    let priority = 0.8
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly'

    if (path === '/') {
      priority = 1.0
      changeFrequency = 'daily'
    } else if (path.startsWith('/neighborhoods')) {
      // High priority for neighborhood pages (hyper-local SEO)
      priority = 0.9
      changeFrequency = 'weekly'
    } else if (path.includes('market-report') || path.includes('insights')) {
      // Market data pages change frequently
      priority = 0.85
      changeFrequency = 'daily'
    } else if (path.includes('homes-for-sale') || path.includes('listings')) {
      // Listing pages are high priority
      priority = 0.9
      changeFrequency = 'daily'
    }

    return {
      url: `${baseUrl}${path === '/' ? '' : path}`,
      lastModified,
      changeFrequency,
      priority,
    }
  })
}
