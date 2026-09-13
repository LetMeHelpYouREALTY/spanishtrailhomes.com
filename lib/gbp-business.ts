/**
 * Single source of truth for Google Business Profile–aligned fields used in JSON-LD and visible NAP.
 * Keep this file in lockstep with the GBP “About your business” editor.
 */
export const GBP_LEGAL_NAME = 'Spanish Trail | Homes By Dr. Jan Duffy' as const
export const GBP_CATEGORY = 'Real estate agent' as const
export const GBP_WEBSITE = 'https://www.spanishtrailhomes.com/' as const

export const GBP_PHONE_E164 = '+17027663299' as const
export const GBP_PHONE_DISPLAY = '(702) 766-3299' as const
export const GBP_SMS_HREF = 'sms:+17027663299' as const
export const GBP_EMAIL = 'DrDuffySells@SpanishTrailHomes.com' as const

export const GBP_STREET = '5050 Spanish Trail Ln' as const
export const GBP_LOCALITY = 'Las Vegas' as const
export const GBP_REGION = 'NV' as const
export const GBP_POSTAL = '89113' as const
export const GBP_COUNTRY = 'US' as const
export const GBP_ADDRESS_LINE = `${GBP_STREET}, ${GBP_LOCALITY}, ${GBP_REGION} ${GBP_POSTAL}` as const

/** Long-form GBP description (LocalBusiness JSON-LD and the GBP page). */
export const GBP_DESCRIPTION =
  "Dr. Jan Duffy is your local Spanish Trail real estate specialist. Located in Las Vegas, Nevada, Spanish Trail is a guard-gated golf community with 11 distinct neighborhoods and over 1,200 homes — and Dr. Duffy knows every corner of it.\n\nWhether you're buying or selling a luxury estate, golf course property, villa, or single-story home, Dr. Duffy provides precise market data, neighborhood-level pricing insights, and personalized guidance every step of the way.\n\nSpanish Trail is one of Southern Nevada's most sought-after communities, centered around a championship 27-hole golf course. If you're exploring the area for the first time or ready to make your next move, contact Dr. Duffy — the specialist who knows Spanish Trail inside and out."

/** Service area string as shown on GBP. */
export const GBP_SERVICE_AREA_LABEL = 'Las Vegas, NV 89113, USA' as const

export const GBP_MAIN_HOURS_OPENS = '09:00' as const
export const GBP_MAIN_HOURS_CLOSES = '18:00' as const
export const GBP_HOURS_LABEL = 'Sunday–Saturday 9:00 AM–6:00 PM' as const

/** Google Maps short link to the business (stable; JSON-LD hasMap + sameAs). */
export const GBP_MAPS_URL = 'https://maps.app.goo.gl/9QG1zTx5B7jG1wfP9' as const

/** Google Business Profile share link (Search / Maps profile). */
export const GBP_PROFILE_SHARE_URL = 'https://share.google/CAMWvHQXzxz9xZwvG' as const

/** Official Google review URL (g.page) — prompts signed-in users to leave a review. */
export const GBP_GOOGLE_REVIEW_URL = 'https://g.page/r/CY-d0lUDXoT_ECE/review' as const

export const GBP_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=5050+Spanish+Trail+Ln,+Las+Vegas,+NV+89113' as const

/** Embed pin for 5050 Spanish Trail Ln / Spanish Trail Country Club. */
export const GBP_MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1155408815076!2d-115.28609452341818!3d36.10914500736459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf27532cd0f3%3A0xba327d02c4e3709e!2sSpanish%20Trail%20Country%20Club!5e0!3m2!1sen!2sus!4v1731191452004!5m2!1sen!2sus' as const

export const GBP_SOCIAL_PROFILES = [
  'https://www.instagram.com/spanishtrailhomes',
  'https://www.linkedin.com/company/spanishtrailhomes',
  'https://www.facebook.com/spanishtrailhomes',
] as const

export const GBP_SAME_AS = [
  ...GBP_SOCIAL_PROFILES,
  'https://www.youtube.com/@spanishtrailhomes',
  GBP_MAPS_URL,
  GBP_PROFILE_SHARE_URL,
] as const

export const GBP_ACCESSIBILITY_FEATURES = [
  'Wheelchair accessible entrance',
  'Wheelchair accessible parking lot',
] as const

export const GBP_VETERAN_OWNED = true

/** Geo for PostalAddress / LocalBusiness (Spanish Trail Country Club area). */
export const GBP_GEO = {
  latitude: 36.109145,
  longitude: -115.282642,
} as const

export type GbpSpecialHour = {
  /** Calendar date on the GBP special-hours row (YYYY-MM-DD, America/Los_Angeles). */
  date: string
  label: string
  detail: 'Closed'
}

/** Special hours currently listed on the Google Business Profile. */
export const GBP_SPECIAL_HOURS: readonly GbpSpecialHour[] = [
  { date: '2026-07-03', label: 'Jul 3, 2026', detail: 'Closed' },
  { date: '2026-07-04', label: 'Jul 4, 2026', detail: 'Closed' },
]

function specialHourEndMs(date: string): number {
  return Date.parse(`${date}T07:00:00.000Z`) + 24 * 60 * 60 * 1000
}

export function getVisibleSpecialHours(now = Date.now()): GbpSpecialHour[] {
  return GBP_SPECIAL_HOURS.filter((hour) => now < specialHourEndMs(hour.date))
}

export function shouldShowPromotedSpecialHoursNotice(now = Date.now()): boolean {
  return getVisibleSpecialHours(now).length > 0
}

export function getSpecialOpeningHoursSpecification(now = Date.now()) {
  return getVisibleSpecialHours(now).map((hour) => ({
    '@type': 'OpeningHoursSpecification' as const,
    validFrom: hour.date,
    validThrough: hour.date,
    opens: '00:00',
    closes: '00:00',
  }))
}
