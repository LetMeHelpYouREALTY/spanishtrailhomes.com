import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

type PageConfig = {
  url: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

const pages: PageConfig[] = [
  { url: '/', priority: 1.0, changeFrequency: 'daily' },
  { url: '/buyers', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/sellers', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/communities/spanish-trail', priority: 0.95, changeFrequency: 'weekly' },
  { url: '/club', priority: 0.85, changeFrequency: 'monthly' },
  { url: '/golf', priority: 0.85, changeFrequency: 'monthly' },
  { url: '/events', priority: 0.7, changeFrequency: 'weekly' },
  { url: '/membership', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/guest-info', priority: 0.6, changeFrequency: 'monthly' },
  { url: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/spanish-trail-homes-for-sale-las-vegas', priority: 0.95, changeFrequency: 'daily' },
  { url: '/spanish-trail-guard-gated-golf-homes', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/spanish-trail-luxury-golf-course-properties', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/spanish-trail-custom-estate-homes-strip', priority: 0.85, changeFrequency: 'weekly' },
  { url: '/spanish-trail-townhomes-villas', priority: 0.85, changeFrequency: 'weekly' },
  { url: '/spanish-trail-gated-golf-realtor', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/spanish-trail-southwest-las-vegas-luxury-homes', priority: 0.85, changeFrequency: 'weekly' },
  { url: '/spanish-trail-private-golf-course-homes', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/spanish-trail-country-club-estate-listings', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/spanish-trail-waterfront-golf-homes', priority: 0.85, changeFrequency: 'weekly' },
  { url: '/spanish-trail-market-report', priority: 0.95, changeFrequency: 'daily' },
  { url: '/spanish-trail-insights', priority: 0.85, changeFrequency: 'weekly' },
  { url: '/las-vegas-luxury-neighborhoods', priority: 0.8, changeFrequency: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
