import { NEIGHBORHOODS } from '@/lib/neighborhoods'

export type IndexableGroup =
  | 'buy-sell'
  | 'listings'
  | 'neighborhoods'
  | 'community'
  | 'agent'
  | 'legal'

export type IndexableRoute = {
  path: string
  /** Localized crawlable anchor text (location + service). */
  title: string
  group: IndexableGroup
  priority: number
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly'
  /** Only inventory/stats URLs should change lastmod on every deploy. */
  lastmodOnDeploy?: boolean
}

export const INDEXABLE_GROUP_LABELS: Record<IndexableGroup, string> = {
  'buy-sell': 'Buy and sell Spanish Trail homes',
  listings: 'Spanish Trail listings and property types',
  neighborhoods: 'Spanish Trail neighborhoods in Las Vegas 89113',
  community: 'Spanish Trail community and amenities',
  agent: 'Dr. Jan Duffy, office, and reviews',
  legal: 'Policies',
}

/**
 * Canonical URLs we want Google to crawl and index.
 * Omit Maps Platform leftover demos and v0 builder URLs.
 * @see https://developers.google.com/crawling/docs/crawl-budget
 */
export const INDEXABLE_ROUTES: IndexableRoute[] = [
  { path: '/', title: 'Spanish Trail homes for sale and realtor services', group: 'buy-sell', priority: 1, changeFrequency: 'weekly', lastmodOnDeploy: true },
  { path: '/buyers', title: 'Buy a Spanish Trail home in Las Vegas 89113', group: 'buy-sell', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/sellers', title: 'Sell your Spanish Trail home', group: 'buy-sell', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/services', title: 'Spanish Trail realtor services by Dr. Jan Duffy', group: 'buy-sell', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/relocation', title: 'Relocation into Spanish Trail, Las Vegas 89113', group: 'buy-sell', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/spanish-trail-market-report', title: 'Spanish Trail Las Vegas market report', group: 'buy-sell', priority: 0.9, changeFrequency: 'weekly', lastmodOnDeploy: true },
  { path: '/spanish-trail-insights', title: 'Spanish Trail real estate insights', group: 'buy-sell', priority: 0.7, changeFrequency: 'weekly' },

  { path: '/spanish-trail-homes-for-sale-las-vegas', title: 'Live Spanish Trail homes for sale in Las Vegas', group: 'listings', priority: 0.9, changeFrequency: 'daily', lastmodOnDeploy: true },
  { path: '/homes-for-sale-in-spanish-trail-las-vegas', title: 'Spanish Trail property types and 89113 buyer guide', group: 'listings', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/spanish-trail-country-club-estate-listings', title: 'Spanish Trail Country Club estate listings', group: 'listings', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/spanish-trail-townhomes-villas', title: 'Spanish Trail townhomes and villas for sale', group: 'listings', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/spanish-trail-luxury-golf-course-properties', title: 'Spanish Trail golf course homes for sale', group: 'listings', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/spanish-trail-waterfront-golf-homes', title: 'Spanish Trail waterfront golf homes', group: 'listings', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/spanish-trail-guard-gated-golf-homes', title: 'Guard-gated Spanish Trail golf homes', group: 'listings', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/spanish-trail-private-golf-course-homes', title: 'Private golf course homes in Spanish Trail', group: 'listings', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/spanish-trail-custom-estate-homes-strip', title: 'Spanish Trail custom estates near the Strip', group: 'listings', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/spanish-trail-southwest-las-vegas-luxury-homes', title: 'Southwest Las Vegas luxury homes in Spanish Trail', group: 'listings', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/spanish-trail-gated-golf-realtor', title: 'Gated golf community realtor for Spanish Trail', group: 'listings', priority: 0.7, changeFrequency: 'monthly' },

  { path: '/neighborhoods', title: 'All 11 Spanish Trail neighborhoods', group: 'neighborhoods', priority: 0.85, changeFrequency: 'monthly' },
  ...NEIGHBORHOODS.map((n) => ({
    path: `/neighborhoods/${n.slug}`,
    title: `Homes for sale in ${n.name}, Spanish Trail Las Vegas`,
    group: 'neighborhoods' as const,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  })),

  { path: '/communities/spanish-trail', title: 'Spanish Trail community guide, Las Vegas 89113', group: 'community', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/club', title: 'Spanish Trail Country Club amenities', group: 'community', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/golf', title: 'Spanish Trail private golf course', group: 'community', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/spanish-trail-lifestyle', title: 'Lifestyle in Spanish Trail, Las Vegas', group: 'community', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/spanish-trail-schools', title: 'Schools near Spanish Trail Las Vegas 89113', group: 'community', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/spanish-trail-hoa-guide', title: 'Spanish Trail HOA guide', group: 'community', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/spanish-trail-architecture', title: 'Spanish Trail home architecture', group: 'community', priority: 0.65, changeFrequency: 'monthly' },
  { path: '/spanish-trail-pools', title: 'Spanish Trail pools and aquatics', group: 'community', priority: 0.65, changeFrequency: 'monthly' },
  { path: '/spanish-trail-tennis', title: 'Tennis at Spanish Trail Country Club', group: 'community', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/spanish-trail-fitness', title: 'Fitness at Spanish Trail Country Club', group: 'community', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/membership', title: 'Spanish Trail Country Club membership', group: 'community', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/guest-info', title: 'Guest information for Spanish Trail Country Club', group: 'community', priority: 0.55, changeFrequency: 'monthly' },
  { path: '/events', title: 'Events at Spanish Trail Country Club', group: 'community', priority: 0.55, changeFrequency: 'weekly' },
  { path: '/las-vegas-luxury-neighborhoods', title: 'Las Vegas luxury neighborhoods compared with Spanish Trail', group: 'community', priority: 0.65, changeFrequency: 'monthly' },

  { path: '/about', title: 'Meet Dr. Jan Duffy, Spanish Trail realtor', group: 'agent', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/contact', title: 'Contact Dr. Jan Duffy at 5050 Spanish Trail Ln', group: 'agent', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/find-our-locations', title: 'Office at 5050 Spanish Trail Ln, Las Vegas 89113', group: 'agent', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/google-business-profile', title: 'Google Business Profile for Spanish Trail Homes', group: 'agent', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/reviews', title: 'Google reviews for Dr. Jan Duffy', group: 'agent', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/awards', title: 'Awards and recognition for Dr. Jan Duffy', group: 'agent', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/media-kit', title: 'Media kit for Dr. Jan Duffy, Spanish Trail realtor', group: 'agent', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/site-index', title: 'Spanish Trail Homes site index', group: 'agent', priority: 0.4, changeFrequency: 'monthly' },

  { path: '/privacy', title: 'Privacy policy', group: 'legal', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', title: 'Terms of use', group: 'legal', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/accessibility', title: 'Accessibility', group: 'legal', priority: 0.3, changeFrequency: 'yearly' },
]

export const INDEXABLE_GROUPS = [
  'buy-sell',
  'listings',
  'neighborhoods',
  'community',
  'agent',
  'legal',
] as const satisfies readonly IndexableGroup[]
