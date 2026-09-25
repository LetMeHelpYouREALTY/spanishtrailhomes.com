/**
 * Single source of truth for Google Business Profile–aligned fields used in JSON-LD and visible NAP.
 * Update here first, then mirror any copy-only pages if needed.
 */
export const GBP_LEGAL_NAME = 'Spanish Trail | Homes By Dr. Jan Duffy' as const

export const GBP_PHONE_E164 = '+17027663299' as const
export const GBP_PHONE_DISPLAY = '(702) 766-3299' as const
export const GBP_EMAIL = 'DrDuffySells@SpanishTrailHomes.com' as const

export const GBP_STREET = '5050 Spanish Trail Ln' as const
export const GBP_LOCALITY = 'Las Vegas' as const
export const GBP_REGION = 'NV' as const
export const GBP_POSTAL = '89113' as const
export const GBP_COUNTRY = 'US' as const
export const GBP_FULL_ADDRESS = `${GBP_STREET}, ${GBP_LOCALITY}, ${GBP_REGION} ${GBP_POSTAL}` as const

export const GBP_HOURS_DISPLAY = 'Sunday–Saturday 8:00 AM–8:00 PM' as const
export const GBP_HOURS_SHORT = 'Sun–Sat 8:00 AM–8:00 PM' as const

export const GBP_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=5050+Spanish+Trail+Ln,+Las+Vegas,+NV+89113' as const

/** Long-form GBP description (also used in LocalBusiness JSON-LD). */
export const GBP_DESCRIPTION =
  'Dr. Jan Duffy specializes exclusively in Spanish Trail, a guard-gated golf community in Las Vegas, Nevada. With deep expertise across all 11 neighborhoods and over 1,200 homes, Dr. Duffy provides precise market data, neighborhood-level pricing insights, and personalized guidance for buyers and sellers. From luxury estates and golf course properties to villas and single-story living, Spanish Trail offers one of Southern Nevada\'s most sought-after lifestyles built around a championship 27-hole golf course. Whether you\'re exploring the community for the first time or preparing to sell, you get a local specialist who knows Spanish Trail inside and out.'

/** Primary service-area string shown in visible NAP (community ZIP). */
export const GBP_SERVICE_AREA_LABEL = 'Las Vegas, NV 89113, USA' as const

/** Additional GBP service areas (Summerlin / Spring Valley / 89117). */
export const GBP_SERVICE_AREAS = [
  { name: 'Spanish Trail, Las Vegas, NV 89113' },
  { name: 'Las Vegas, NV 89113, USA' },
  { name: 'Las Vegas, NV 89117, USA' },
  { name: 'Summerlin, Las Vegas, NV' },
  { name: 'Spring Valley, Las Vegas, NV' },
] as const

/** Standard Google Maps embed (no API key) pinned at Spanish Trail Country Club / GBP address. */
export const GBP_MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1155408815076!2d-115.28609452341818!3d36.10914500736459!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf27532cd0f3%3A0xba327d02c4e3709e!2sSpanish%20Trail%20Country%20Club!5e0!3m2!1sen!2sus!4v1731191452004!5m2!1sen!2sus' as const

export const GBP_MAIN_HOURS_OPENS = '08:00' as const
export const GBP_MAIN_HOURS_CLOSES = '20:00' as const

/** Google Maps short link to the business (stable; JSON-LD sameAs). */
export const GBP_MAPS_URL = 'https://maps.app.goo.gl/9QG1zTx5B7jG1wfP9' as const

/** Google Business Profile share link (Search / Maps profile). */
export const GBP_PROFILE_SHARE_URL = 'https://share.google/7im0WpfO517sKomcQ' as const

/** Official Google review URL (g.page) — prompts signed-in users to leave a review. */
export const GBP_GOOGLE_REVIEW_URL = 'https://g.page/r/Ca9gwAWH5oLcEBM/review' as const

export const GBP_SAME_AS = [
  'https://www.facebook.com/spanishtrailhomes',
  'https://www.instagram.com/spanishtrailhomes',
  'https://www.linkedin.com/company/spanishtrailhomes',
  'https://www.youtube.com/@spanishtrailhomes',
  GBP_MAPS_URL,
  GBP_PROFILE_SHARE_URL,
] as const

/** Geo for PostalAddress / LocalBusiness (Spanish Trail Country Club area). */
export const GBP_GEO = {
  latitude: 36.109145,
  longitude: -115.282642,
} as const

/**
 * After this instant (UTC), hide time-bound special-hours UI (e.g. Easter 2026) to avoid stale copy.
 * Bump when adding new dated closures.
 */
export const GBP_PROMOTED_SPECIAL_HOURS_UNTIL_MS = Date.parse('2026-04-06T07:00:00.000Z')

export function shouldShowPromotedSpecialHoursNotice(): boolean {
  return Date.now() < GBP_PROMOTED_SPECIAL_HOURS_UNTIL_MS
}

export const GBP_EASTER_2026_CLOSURE = {
  label: 'April 5, 2026 (Easter)',
  detail: 'Closed',
} as const
