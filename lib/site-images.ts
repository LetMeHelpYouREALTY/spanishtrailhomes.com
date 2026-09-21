import { getAbsoluteSiteImageUrl, getSiteImageUrl } from '@/lib/cloudflare-images'

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
    'Spanish Trail homes lining a private 27-hole golf fairway, bunkers, and lake in Las Vegas 89113',
  'h1-luxury-estate':
    'Mediterranean custom estate home in Spanish Trail, Las Vegas guard-gated golf community',
  'h1-clubhouse':
    'Two-story Mediterranean Spanish Trail Country Club clubhouse, porte-cochere, and putting green in Las Vegas 89113',
  'h1-waterfront':
    'Waterfront golf-course home patio and lake at Spanish Trail Las Vegas',
  'h1-villa-courtyard':
    'Lock-and-leave Spanish Trail villa courtyard with fountain, bougainvillea, and desert sky in Las Vegas 89113',
  'h1-pool':
    'Spanish Trail Country Club resort pool and spa deck in Las Vegas',
  'h1-contact-office':
    'Professional Spanish Trail real estate office at 5050 Spanish Trail Ln with a community map and golf-course view in Las Vegas 89113',
  'h1-office-exterior':
    'Spanish Trail clubhouse office exterior at 5050 Spanish Trail Ln, Las Vegas NV 89113, matching the Google Business Profile pin',
  'h2-kitchen-fairway':
    'Luxury kitchen overlooking a Spanish Trail golf fairway in Las Vegas',
  'h2-club-dining':
    'Spanish Trail Country Club dining terrace overlooking a desert golf lake in Las Vegas 89113',
  'h2-tennis':
    'Lighted tennis courts at Spanish Trail Country Club in Las Vegas 89113',
  'h2-fitness':
    'Spanish Trail Country Club desert fitness studio with golf-fairway and Spring Mountains views in Las Vegas 89113',
  'h2-membership-lounge':
    'Spanish Trail Country Club membership lounge overlooking Las Vegas fairways',
  'h2-architecture':
    'Mediterranean cream stucco architecture of a Spanish Trail Las Vegas luxury home',
  'h2-neighborhood-street':
    'Desert-landscaped street of clay-tile Mediterranean homes inside Spanish Trail, Las Vegas 89113',
  'h2-valley-skyline':
    'Las Vegas Strip skyline from Spanish Trail golf fairways and clay-tile homes in southwest 89113',
  'h2-events-lawn':
    'Spanish Trail Country Club desert event lawn, date palms, and Mediterranean clubhouse at twilight in Las Vegas 89113',
  'h2-awards-study':
    'Professional study overlooking desert golf and palms for Spanish Trail luxury real estate advisory in Las Vegas 89113',
  'h2-accessible-entrance':
    'Wheelchair-accessible ramp, ADA parking stall, and level entrance at Spanish Trail Country Club in Las Vegas 89113',
  'h2-directions-approach':
    'Palm-lined boulevard approaching the Spanish Trail guard gates from Tropicana and Rainbow in Las Vegas 89113',
  'h2-community-map':
    'Overview of Spanish Trail gated golf community streets and fairways in Las Vegas',
  'h2-schools-campus':
    'Desert campus architecture and athletic field near Spanish Trail Las Vegas 89113',
  'h2-guest-casita':
    'Guest casita courtyard at a Spanish Trail Las Vegas golf estate',
  'h2-reviews-terrace':
    'Spanish Trail Country Club terrace overlooking desert golf and palms in Las Vegas 89113',
  'h2-parks-greenbelt':
    'HOA greenbelt walking path with desert landscaping and golf turf inside Spanish Trail, Las Vegas 89113',
  'h2-shopping-plaza':
    'Twilight patio and Mediterranean retail buildings near Spanish Trail in southwest Las Vegas 89113',
  'h2-tennis-proshop':
    'Spanish Trail Country Club tennis pro shop with racquets and a view of lighted courts in Las Vegas',
  'h2-club-history':
    'Mediterranean Spanish Trail Country Club clubhouse colonnade and golf green at golden hour in Las Vegas 89113',
  'h2-golf-sunrise':
    'Sunrise nine at Spanish Trail Country Club with fairway homes at first light, Las Vegas 89113',
  'h2-golf-lakes':
    'Lakes nine water hazard, fountain, and golf-front homes at Spanish Trail Country Club, Las Vegas',
  'h2-golf-canyon':
    'Canyon nine desert-elevation green with ridge homes at Spanish Trail Country Club, Las Vegas 89113',
  'h2-clubhouse-arrival':
    'Spanish Trail Country Club clubhouse arrival court and valet drive in Las Vegas 89113',
  'h2-office-map':
    'Aerial view of Spanish Trail guard-gated golf community streets and fairways in Las Vegas 89113',
  'h3-motor-court':
    'Double motor court of a custom Spanish Trail Las Vegas estate',
  'h3-putting-green':
    'Private putting green behind a Spanish Trail Las Vegas golf home',
  'h3-spa-pool':
    'Resort spa pool at a Spanish Trail Las Vegas golf estate',
  'h3-golf-bunker':
    'Raked sand bunker and green in front of Spanish Trail Las Vegas golf-course homes',
  'h3-pickleball':
    'Pickleball courts at Spanish Trail Country Club in Las Vegas',
  'h3-strip-view-patio':
    'Twilight Mediterranean patio with Las Vegas Strip horizon from a Spanish Trail golf home',
  'h3-gatehouse':
    'Desert-landscaped secondary gatehouse inside Spanish Trail, Las Vegas guard-gated community',
  'h3-spa-bath':
    'Spa bath with a desert golf-course view in a Spanish Trail Las Vegas luxury home',
  'h3-cart-path':
    'Desert golf cart path past fairway homes at Spanish Trail Country Club in Las Vegas 89113',
  'h3-townhome-villa':
    'Spanish Trail Las Vegas townhome and villa exteriors with clay tile roofs',
  'h3-hoa-landscaping':
    'HOA-maintained fountain and landscaping in Spanish Trail Las Vegas',
  'h3-listing-home-a':
    'Two-story golf-course home for sale in Spanish Trail Las Vegas',
  'h3-listing-home-b':
    'Single-story courtyard villa for sale in Spanish Trail Las Vegas',
  'h3-listing-home-c':
    'Twilight custom clay-tile estate listing in Spanish Trail Las Vegas 89113',
  'h3-listing-home-d':
    'Golf villa great room opening to a Spanish Trail Las Vegas fairway with desert palms',
  'h3-listing-home-e':
    'Lakeside Mediterranean golf home terrace at sunset in Spanish Trail Las Vegas',
  'h3-listing-home-f':
    'Single-story desert golf-neighborhood home on a Spanish Trail Las Vegas street',
}

type MediaRule = {
  test: RegExp
  id: string
  level?: HeadingLevel
}

const RULES: MediaRule[] = [
  { test: /aeo-answer/, id: 'skip' },
  { test: /faq/, id: 'skip' },
  { test: /waterfront|lakes-course|lake/, id: 'h1-waterfront', level: 'h1' },
  { test: /pool|aquatic|spa/, id: 'h1-pool', level: 'h1' },
  { test: /tennis|pickleball|racquet/, id: 'h2-tennis' },
  { test: /fitness|gym|wellness/, id: 'h2-fitness' },
  { test: /golf-sunrise|sunrise/, id: 'h2-golf-sunrise' },
  { test: /golf-lakes|lakes-nine/, id: 'h2-golf-lakes' },
  { test: /golf-canyon|canyon/, id: 'h2-golf-canyon' },
  { test: /golf|fairway|tee|scorecard|course/, id: 'h1-golf-fairway', level: 'h1' },
  { test: /estate|custom|motor|strip-view/, id: 'h1-luxury-estate', level: 'h1' },
  { test: /clubhouse-arrival|valet|porte/, id: 'h2-clubhouse-arrival' },
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
  { test: /accessib|commitment|standards|testing|assistive|feedback|improvements/, id: 'h2-accessible-entrance' },
  { test: /wedding/, id: 'h2-events-lawn' },
  { test: /proshop/, id: 'h2-tennis-proshop' },
  { test: /shop|retail/, id: 'h2-shopping-plaza' },
  { test: /park|outdoor|things-to-do|greenbelt/, id: 'h2-parks-greenbelt' },
  { test: /history/, id: 'h2-club-history' },
  { test: /share-heading|qr-code|best-practices|resident-stories/, id: 'h2-reviews-terrace' },
  { test: /office-map|aerial|overview/, id: 'h2-office-map' },
  { test: /location-heading|choose-locations|comparison|proximity|commuter|local-essentials|address/, id: 'h2-community-map' },
  { test: /gbp|google-business|find-locations|find-our|site-index|business-info|get-started|connect-heading|visit-office/, id: 'h1-office-exterior', level: 'h1' },
  { test: /services-hero|services-practice|services-cta/, id: 'h1-contact-office', level: 'h1' },
  { test: /lifestyle-hero/, id: 'h2-club-dining' },
  { test: /expertise|approach|philosophy|story|facts|impact|advisory|insight|media-heading/, id: 'h2-awards-study' },
  { test: /membership-offerings|membership-narratives|young-executive/, id: 'h2-membership-lounge' },
  { test: /amenities|highlights|onsite|programs|offerings|facility|facilities|features/, id: 'h2-club-history' },
  { test: /benefits/, id: 'h2-reviews-terrace' },
  { test: /agreement|authorized|liability|governing|intellectual|changes|sharing|data-|communications|listings-disclosure/, id: 'h1-contact-office' },
  { test: /financing|fees|inquiry|investment|home-value|strategy|value-heading|timeline/, id: 'h2-kitchen-fairway' },
  { test: /buying-process|buying-experience|offer-closing|property-types|property-pathways|overview|details/, id: 'h1-luxury-estate', level: 'h1' },
  { test: /view-|view-heading|indoor-outdoor|entertaining|renovation|elements/, id: 'h3-strip-view-patio' },
  { test: /narratives|experience-heading/, id: 'h2-club-dining' },
  { test: /luxury-heading|luxury-cta/, id: 'h1-luxury-estate', level: 'h1' },
  { test: /architectural-heading/, id: 'h2-architecture' },
  { test: /featured-listings/, id: 'h3-listing-home-a' },
  { test: /direction/, id: 'h2-directions-approach' },
  { test: /map|amenity|autocomplete/, id: 'h2-office-map' },
  { test: /contact|office|about|privacy|terms|security|cookie/, id: 'h1-contact-office' },
  { test: /seller|pricing|valuation|prepar|market/, id: 'h2-kitchen-fairway' },
  { test: /buyer|tour|journey|concierge/, id: 'h1-luxury-estate', level: 'h1' },
  { test: /dining|grill|social/, id: 'h2-club-dining' },
  { test: /neighborhood|street|community/, id: 'h2-neighborhood-street' },
  { test: /guard|gate|security/, id: 'h1-guard-gate', level: 'h1' },
  { test: /cta/, id: 'h1-guard-gate', level: 'h1' },
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
  return /hero|^cta-|contact-heading|connect-heading|advisory-cta|get-started|find-locations-heading|amenity-map-heading|address-heading/i.test(
    headingId,
  )
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
    case 'h1-office-exterior':
      return 'h1-office-exterior'
    case 'h1-guard-gate':
      return 'h2-neighborhood-street'
    default:
      return DEFAULT_H2_IMAGE
  }
}

export function getAssetAlt(assetId: string): string {
  return ALTS[assetId] ?? 'Spanish Trail Las Vegas guard-gated golf community real estate'
}

export function sitePhotoOg(assetId: string) {
  return {
    url: getAbsoluteSiteImageUrl(assetId),
    alt: getAssetAlt(assetId),
  }
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
  const normalized = seed.trim().toLowerCase()
  const neighborhoodId = NEIGHBORHOOD_CARD_IMAGES[normalized]
  if (neighborhoodId) {
    return { id: neighborhoodId, alt: getAssetAlt(neighborhoodId), level: 'h3' }
  }

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

export const SITE_IMAGE_IDS = Object.keys(ALTS)

export function resolvePageHeroImageId(path: string): string {
  const media = resolveHeadingMedia(path.replace(/^\//, '') || 'hero')
  return media?.id ?? DEFAULT_H1_IMAGE
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

/** Real community photos for Open Graph, Twitter, and sitemap image entries. */
export const PAGE_OG_PHOTOS: Record<string, string> = {
  '/': 'h1-guard-gate',
  '/buyers': 'h1-luxury-estate',
  '/sellers': 'h2-kitchen-fairway',
  '/services': 'h1-contact-office',
  '/communities/spanish-trail': 'h1-guard-gate',
  '/spanish-trail-homes-for-sale-las-vegas': 'h3-listing-home-a',
  '/homes-for-sale-in-spanish-trail-las-vegas': 'h3-listing-home-b',
  '/club': 'h1-clubhouse',
  '/golf': 'h1-golf-fairway',
  '/events': 'h2-events-lawn',
  '/membership': 'h2-membership-lounge',
  '/guest-info': 'h2-guest-casita',
  '/relocation': 'h2-valley-skyline',
  '/neighborhoods': 'h2-neighborhood-street',
  '/spanish-trail-lifestyle': 'h2-club-dining',
  '/spanish-trail-schools': 'h2-schools-campus',
  '/spanish-trail-tennis': 'h2-tennis',
  '/spanish-trail-fitness': 'h2-fitness',
  '/spanish-trail-pools': 'h1-pool',
  '/spanish-trail-architecture': 'h2-architecture',
  '/spanish-trail-hoa-guide': 'h3-hoa-landscaping',
  '/spanish-trail-guard-gated-golf-homes': 'h1-guard-gate',
  '/spanish-trail-country-club-estate-listings': 'h1-luxury-estate',
  '/spanish-trail-custom-estate-homes-strip': 'h3-strip-view-patio',
  '/spanish-trail-waterfront-golf-homes': 'h1-waterfront',
  '/spanish-trail-townhomes-villas': 'h1-villa-courtyard',
  '/spanish-trail-southwest-las-vegas-luxury-homes': 'h2-valley-skyline',
  '/spanish-trail-luxury-golf-course-properties': 'h1-golf-fairway',
  '/spanish-trail-private-golf-course-homes': 'h1-golf-fairway',
  '/spanish-trail-gated-golf-realtor': 'h1-office-exterior',
  '/spanish-trail-market-report': 'h2-kitchen-fairway',
  '/spanish-trail-insights': 'h2-awards-study',
  '/las-vegas-luxury-neighborhoods': 'h2-neighborhood-street',
  '/about': 'h1-contact-office',
  '/media-kit': 'h2-awards-study',
  '/contact': 'h1-contact-office',
  '/find-our-locations': 'h1-office-exterior',
  '/directions': 'h2-directions-approach',
  '/amenity-map': 'h2-office-map',
  '/site-index': 'h1-office-exterior',
  '/google-business-profile': 'h1-office-exterior',
  '/reviews': 'h2-reviews-terrace',
  '/address-autocomplete': 'h2-office-map',
  '/awards': 'h2-awards-study',
  '/privacy': 'h1-contact-office',
  '/terms': 'h1-contact-office',
  '/accessibility': 'h2-accessible-entrance',
}

export function ogPhotoForPath(path: string): string {
  if (path.startsWith('/neighborhoods/') && path !== '/neighborhoods') {
    const slug = path.slice('/neighborhoods/'.length)
    return NEIGHBORHOOD_CARD_IMAGES[slug] ?? 'h2-neighborhood-street'
  }
  return PAGE_OG_PHOTOS[path] ?? DEFAULT_H1_IMAGE
}
