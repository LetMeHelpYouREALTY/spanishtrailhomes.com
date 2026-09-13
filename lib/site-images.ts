import { getSiteImageUrl } from '@/lib/cloudflare-images'

export type HeadingLevel = 'h1' | 'h2' | 'h3'

export type SiteImageAsset = {
  id: string
  alt: string
  level: HeadingLevel
}

export const DEFAULT_H1_IMAGE = 'h1-guard-gate'
export const DEFAULT_H2_IMAGE = 'h2-neighborhood-street'
export const DEFAULT_H3_IMAGE = 'h3-listing-home-a'

const H3_CYCLE = [
  'h3-motor-court',
  'h3-putting-green',
  'h3-spa-pool',
  'h3-golf-bunker',
  'h3-pickleball',
  'h3-strip-view-patio',
  'h3-gatehouse',
  'h3-spa-bath',
  'h3-cart-path',
  'h3-townhome-villa',
  'h3-hoa-landscaping',
  'h3-listing-home-a',
  'h3-listing-home-b',
  'h3-listing-home-c',
  'h3-listing-home-d',
  'h3-listing-home-e',
  'h3-listing-home-f',
] as const

const ALTS: Record<string, string> = {
  'h1-guard-gate':
    'Spanish Trail Las Vegas guard-gated entrance and gatehouse in southwest 89113',
  'h1-golf-fairway':
    'Spanish Trail Country Club private golf fairway, bunkers, and lake in Las Vegas',
  'h1-luxury-estate':
    'Mediterranean custom estate home in Spanish Trail, Las Vegas guard-gated golf community',
  'h1-clubhouse':
    'Spanish Trail Country Club clubhouse exterior with golf greens in Las Vegas 89113',
  'h1-waterfront':
    'Waterfront golf-course home patio and lake at Spanish Trail Las Vegas',
  'h1-villa-courtyard':
    'Lock-and-leave Spanish Trail villa courtyard with fountain in Las Vegas',
  'h1-pool':
    'Spanish Trail Country Club resort pool and spa deck in Las Vegas',
  'h1-contact-office':
    'Spanish Trail real estate office interior at 5050 Spanish Trail Ln, Las Vegas',
  'h2-kitchen-fairway':
    'Luxury kitchen overlooking a Spanish Trail golf fairway in Las Vegas',
  'h2-club-dining':
    'Spanish Trail Country Club dining patio overlooking a golf lake in Las Vegas',
  'h2-tennis':
    'Lighted tennis courts at Spanish Trail Country Club in Las Vegas 89113',
  'h2-fitness':
    'Spanish Trail Country Club fitness studio with pool terrace views in Las Vegas',
  'h2-membership-lounge':
    'Spanish Trail Country Club membership lounge overlooking Las Vegas fairways',
  'h2-architecture':
    'Mediterranean cream stucco architecture of a Spanish Trail Las Vegas luxury home',
  'h2-neighborhood-street':
    'Tree-lined street inside Spanish Trail guard-gated neighborhoods, Las Vegas 89113',
  'h2-valley-skyline':
    'Southwest Las Vegas valley and Strip skyline from Spanish Trail golf fairways',
  'h2-events-lawn':
    'Spanish Trail Country Club event lawn and clubhouse at twilight in Las Vegas',
  'h2-awards-study':
    'Professional study for Spanish Trail luxury real estate advisory in Las Vegas',
  'h2-accessible-entrance':
    'Accessible entrance and parking at Spanish Trail Country Club, Las Vegas',
  'h2-community-map':
    'Overview of Spanish Trail gated golf community streets and fairways in Las Vegas',
  'h2-schools-campus':
    'Campus architecture near Spanish Trail Las Vegas 89113',
  'h2-guest-casita':
    'Guest casita courtyard at a Spanish Trail Las Vegas golf estate',
  'h2-reviews-terrace':
    'Spanish Trail Country Club terrace in Las Vegas used for client hospitality',
  'h2-golf-sunrise':
    'Sunrise nine golf holes at Spanish Trail Country Club, Las Vegas',
  'h2-golf-lakes':
    'Lakes nine water hazards at Spanish Trail Country Club, Las Vegas',
  'h2-golf-canyon':
    'Canyon nine desert elevation golf at Spanish Trail Country Club, Las Vegas',
  'h3-motor-court':
    'Double motor court of a custom Spanish Trail Las Vegas estate',
  'h3-putting-green':
    'Private putting green behind a Spanish Trail Las Vegas golf home',
  'h3-spa-pool':
    'Resort spa pool at a Spanish Trail Las Vegas golf estate',
  'h3-golf-bunker':
    'Sand bunker and green on the Spanish Trail Las Vegas private golf course',
  'h3-pickleball':
    'Pickleball courts at Spanish Trail Country Club in Las Vegas',
  'h3-strip-view-patio':
    'Twilight patio with Strip-horizon views from a Spanish Trail Las Vegas home',
  'h3-gatehouse':
    'Secondary gatehouse inside Spanish Trail, Las Vegas guard-gated community',
  'h3-spa-bath':
    'Spa bath with golf-course view in a Spanish Trail Las Vegas luxury home',
  'h3-cart-path':
    'Golf cart path through Spanish Trail Country Club in Las Vegas',
  'h3-townhome-villa':
    'Spanish Trail Las Vegas townhome and villa exteriors with clay tile roofs',
  'h3-hoa-landscaping':
    'HOA-maintained fountain and landscaping in Spanish Trail Las Vegas',
  'h3-listing-home-a':
    'Two-story golf-course home for sale in Spanish Trail Las Vegas',
  'h3-listing-home-b':
    'Single-story courtyard villa for sale in Spanish Trail Las Vegas',
  'h3-listing-home-c':
    'Twilight custom estate listing in Spanish Trail Las Vegas',
  'h3-listing-home-d':
    'Golf villa patio opening to a Spanish Trail Las Vegas fairway',
  'h3-listing-home-e':
    'Lakeside golf home terrace in Spanish Trail Las Vegas',
  'h3-listing-home-f':
    'Tree-lined Spanish Trail Las Vegas home with greenbelt frontage',
}

type MediaRule = {
  test: RegExp
  id: string
  level?: HeadingLevel
}

const RULES: MediaRule[] = [
  { test: /aeo-answer/, id: 'skip' },
  { test: /waterfront|lakes-course|lake/, id: 'h1-waterfront', level: 'h1' },
  { test: /pool|aquatic|spa/, id: 'h1-pool', level: 'h1' },
  { test: /tennis|pickleball|racquet/, id: 'h2-tennis' },
  { test: /fitness|gym|wellness/, id: 'h2-fitness' },
  { test: /golf-sunrise|sunrise/, id: 'h2-golf-sunrise' },
  { test: /golf-lakes|lakes-nine/, id: 'h2-golf-lakes' },
  { test: /golf-canyon|canyon/, id: 'h2-golf-canyon' },
  { test: /golf|fairway|tee|scorecard|course/, id: 'h1-golf-fairway', level: 'h1' },
  { test: /estate|custom|motor|strip-view/, id: 'h1-luxury-estate', level: 'h1' },
  { test: /clubhouse|club-hero|club-life|membership|lounge/, id: 'h1-clubhouse', level: 'h1' },
  { test: /villa|townhome|courtyard|lock-and-leave/, id: 'h1-villa-courtyard', level: 'h1' },
  { test: /architecture|design|style|hometype|enclave/, id: 'h2-architecture' },
  { test: /school|campus|district/, id: 'h2-schools-campus' },
  { test: /event|outing|calendar/, id: 'h2-events-lawn' },
  { test: /award|press|recognition|credential|media-kit|bio/, id: 'h2-awards-study' },
  { test: /review|testimonial/, id: 'h2-reviews-terrace' },
  { test: /reloc|skyline|southwest|valley/, id: 'h2-valley-skyline' },
  { test: /hoa|orientation|gate-access|landscap/, id: 'h3-hoa-landscaping' },
  { test: /guest|casita|etiquette|arrival/, id: 'h2-guest-casita' },
  { test: /accessib/, id: 'h2-accessible-entrance' },
  { test: /map|direction|location|amenity/, id: 'h2-community-map' },
  { test: /contact|office|about|privacy|terms|security|cookie/, id: 'h1-contact-office' },
  { test: /seller|pricing|valuation|prepar|market/, id: 'h2-kitchen-fairway' },
  { test: /buyer|tour|journey|concierge/, id: 'h1-luxury-estate', level: 'h1' },
  { test: /dining|grill|social/, id: 'h2-club-dining' },
  { test: /neighborhood|street|community/, id: 'h2-neighborhood-street' },
  { test: /guard|gate|security/, id: 'h1-guard-gate', level: 'h1' },
  { test: /hero/, id: 'h1-guard-gate', level: 'h1' },
]

function hashSeed(value: string): number {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0
  }
  return hash
}

function isHeroHeading(headingId: string): boolean {
  return /hero|^cta-|contact-heading|connect-heading|advisory-cta|get-started/i.test(headingId)
}

function inferLevel(headingId: string): HeadingLevel {
  if (isHeroHeading(headingId)) return 'h1'
  return 'h2'
}

function mapH1ToH2(id: string): string {
  switch (id) {
    case 'h1-golf-fairway':
      return 'h2-golf-sunrise'
    case 'h1-luxury-estate':
      return 'h2-architecture'
    case 'h1-clubhouse':
      return 'h2-membership-lounge'
    case 'h1-waterfront':
      return 'h2-golf-lakes'
    case 'h1-villa-courtyard':
      return 'h2-architecture'
    case 'h1-pool':
      return 'h1-pool'
    case 'h1-contact-office':
      return 'h1-contact-office'
    case 'h1-guard-gate':
      return 'h2-neighborhood-street'
    default:
      return DEFAULT_H2_IMAGE
  }
}

export function getAssetAlt(assetId: string): string {
  return ALTS[assetId] ?? 'Spanish Trail Las Vegas guard-gated golf community real estate'
}

export function resolveHeadingMedia(headingId: string): SiteImageAsset | null {
  const normalized = headingId.trim().toLowerCase()
  if (!normalized || normalized === 'aeo-answer') return null

  const level = inferLevel(normalized)
  const match = RULES.find((rule) => rule.test.test(normalized))
  const rawId = match?.id ?? (level === 'h1' ? DEFAULT_H1_IMAGE : DEFAULT_H2_IMAGE)
  if (rawId === 'skip') return null

  let id = rawId
  if (level === 'h2' && id.startsWith('h1-')) {
    id = mapH1ToH2(id)
  } else if (level === 'h1' && id.startsWith('h3-')) {
    id = DEFAULT_H1_IMAGE
  }

  return { id, alt: getAssetAlt(id), level }
}

export function resolveCardMedia(seed: string): SiteImageAsset {
  const index = hashSeed(seed) % H3_CYCLE.length
  const id = H3_CYCLE[index]
  return { id, alt: getAssetAlt(id), level: 'h3' }
}

export function resolveListingMedia(index: number): SiteImageAsset {
  const listings = [
    'h3-listing-home-a',
    'h3-listing-home-b',
    'h3-listing-home-c',
    'h3-listing-home-d',
    'h3-listing-home-e',
    'h3-listing-home-f',
  ] as const
  const id = listings[index % listings.length]
  return { id, alt: getAssetAlt(id), level: 'h3' }
}

export function mediaUrl(assetId: string): string {
  return getSiteImageUrl(assetId)
}

export const GOLF_COURSE_IMAGES = {
  'Sunrise Course': { id: 'h2-golf-sunrise', alt: getAssetAlt('h2-golf-sunrise') },
  'Lakes Course': { id: 'h2-golf-lakes', alt: getAssetAlt('h2-golf-lakes') },
  'Canyon Course': { id: 'h2-golf-canyon', alt: getAssetAlt('h2-golf-canyon') },
} as const

export const NEIGHBORHOOD_CARD_IMAGES: Record<string, string> = {
  estates: 'h1-luxury-estate',
  'estates-west': 'h3-motor-court',
  courtyards: 'h1-villa-courtyard',
  gardens: 'h3-hoa-landscaping',
  links: 'h3-cart-path',
  carmels: 'h3-listing-home-d',
  springs: 'h3-listing-home-f',
  'plum-creek': 'h2-neighborhood-street',
  villas: 'h3-townhome-villa',
  islands: 'h1-waterfront',
  'innisbrook-estates': 'h3-listing-home-c',
}
