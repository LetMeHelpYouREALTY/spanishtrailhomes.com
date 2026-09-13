import type { MetadataRoute } from 'next'
import { getNeighborhoodSlugs } from '@/lib/neighborhoods'
import { getAgentPortraitAbsoluteUrl, resolveAgentPortrait } from '@/lib/agent-portraits'

const baseUrl = 'https://www.spanishtrailhomes.com'

// Define routes with their priorities and change frequencies
const routeConfig: Array<{
  path: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}> = [
  // Homepage - highest priority
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  
  // Primary navigation pages - high priority
  { path: '/buyers', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/sellers', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/communities/spanish-trail', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/spanish-trail-homes-for-sale-las-vegas', priority: 0.9, changeFrequency: 'daily' },
  { path: '/homes-for-sale-in-spanish-trail-las-vegas', priority: 0.9, changeFrequency: 'daily' },
  
  // Club and lifestyle pages - supporting community context
  { path: '/club', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/golf', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/events', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/membership', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/guest-info', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/relocation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/neighborhoods', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/spanish-trail-lifestyle', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/spanish-trail-schools', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/spanish-trail-tennis', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/spanish-trail-fitness', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/spanish-trail-pools', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/spanish-trail-architecture', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/spanish-trail-hoa-guide', priority: 0.8, changeFrequency: 'monthly' },
  
  // Spanish Trail listing pages - high priority (these are the ones not indexed)
  { path: '/spanish-trail-guard-gated-golf-homes', priority: 0.9, changeFrequency: 'daily' },
  { path: '/spanish-trail-country-club-estate-listings', priority: 0.9, changeFrequency: 'daily' },
  { path: '/spanish-trail-custom-estate-homes-strip', priority: 0.9, changeFrequency: 'daily' },
  { path: '/spanish-trail-waterfront-golf-homes', priority: 0.9, changeFrequency: 'daily' },
  { path: '/spanish-trail-townhomes-villas', priority: 0.9, changeFrequency: 'daily' },
  { path: '/spanish-trail-southwest-las-vegas-luxury-homes', priority: 0.9, changeFrequency: 'daily' },
  { path: '/spanish-trail-luxury-golf-course-properties', priority: 0.9, changeFrequency: 'daily' },
  { path: '/spanish-trail-private-golf-course-homes', priority: 0.9, changeFrequency: 'daily' },
  { path: '/spanish-trail-gated-golf-realtor', priority: 0.8, changeFrequency: 'weekly' },
  
  // Market and insights pages - high priority
  { path: '/spanish-trail-market-report', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/spanish-trail-insights', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/las-vegas-luxury-neighborhoods', priority: 0.8, changeFrequency: 'monthly' },
  
  // About and contact - medium-high priority
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/media-kit', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/find-our-locations', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/google-business-profile', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/reviews', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/address-autocomplete', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/amenity-map', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/directions', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/awards', priority: 0.7, changeFrequency: 'monthly' },
  
  // Legal pages - lower priority
  { path: '/privacy', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/accessibility', priority: 0.5, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  // Single build-time timestamp: Google treats inaccurate per-URL lastmod as low-signal;
  // one honest deploy time is preferable to synthetic staggered dates.
  const lastModified = new Date()

  const staticEntries = routeConfig.map(({ path, priority, changeFrequency }) => {
    const portrait = resolveAgentPortrait(path === '/' ? 'homepage-hero' : path)
    return {
      url: `${baseUrl}${path === '/' ? '' : path}`,
      lastModified,
      changeFrequency,
      priority,
      images: [getAgentPortraitAbsoluteUrl(portrait.id)],
    }
  })

  const neighborhoodEntries: MetadataRoute.Sitemap = getNeighborhoodSlugs().map((slug) => {
    const path = `/neighborhoods/${slug}`
    return {
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      images: [getAgentPortraitAbsoluteUrl('duffy-circle-neighborhoods')],
    }
  })

  return [...staticEntries, ...neighborhoodEntries]
}
