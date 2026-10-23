/** Calendly events by page intent (scheduling_url values from the Calendly API). */
export const CALENDLY_EVENTS = {
  tour: 'https://calendly.com/drjanduffy/showing',
  seller: 'https://calendly.com/drjanduffy/listing-consultation',
  buyer: 'https://calendly.com/drjanduffy/buyer-consultation-30-min',
} as const

const SELLER_PATHS = ['/sellers', '/spanish-trail-market-report']
const BUYER_PATHS = ['/buyers', '/relocation']

const matches = (pathname: string, paths: string[]) =>
  paths.some((p) => pathname === p || pathname.startsWith(`${p}/`))

export function calendlyEventForPath(pathname: string): string {
  if (matches(pathname, SELLER_PATHS)) return CALENDLY_EVENTS.seller
  if (matches(pathname, BUYER_PATHS)) return CALENDLY_EVENTS.buyer
  return CALENDLY_EVENTS.tour
}

/**
 * Calendly URL for the page's intent, tagged with UTM. utm_source is the bare
 * domain so the Calendly → FUB Worker can map the booking to this site.
 */
export function calendlyUrlFor(pathname: string, medium: string, eventUrl?: string): string {
  const url = new URL(eventUrl ?? calendlyEventForPath(pathname))
  url.searchParams.set('hide_gdpr_banner', '1')
  url.searchParams.set('utm_source', 'spanishtrailhomes.com')
  url.searchParams.set('utm_medium', medium)
  url.searchParams.set('utm_campaign', pathname === '/' ? 'home' : pathname.slice(1))
  return url.toString()
}
