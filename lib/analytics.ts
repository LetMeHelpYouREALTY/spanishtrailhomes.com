/**
 * GA4 event tracking for appointment-driving features.
 * Use trackEvent() in components; ensure gtag is loaded (layout loads G-X68WWN997N).
 */

export type GA4EventParams = Record<string, string | number | boolean | undefined>

export function trackEvent(eventName: string, params?: GA4EventParams): void {
  if (typeof window === 'undefined') return
  const gtag = (window as Window & { gtag?: (a: string, b: string, c?: GA4EventParams) => void }).gtag
  if (typeof gtag !== 'function') return
  const clean =
    params &&
    Object.fromEntries(
      Object.entries(params).filter(
        (entry): entry is [string, string | number | boolean] =>
          entry[1] !== undefined && entry[1] !== null && entry[1] !== ''
      )
    )
  gtag('event', eventName, clean ?? undefined)
}

/** Lightbox */
export function trackPropertyLightboxOpen(pageLocation: 'hero' | 'listings') {
  trackEvent('property_lightbox_open', { page_location: pageLocation })
}

export function trackPropertyLightboxBookTour(propertiesViewed: number) {
  trackEvent('property_lightbox_book_tour', { properties_viewed: propertiesViewed })
}

export function trackPropertyLightboxTextAlert(leadType: string) {
  trackEvent('property_lightbox_text_alert', { lead_type: leadType })
}

/** Calendly FAB */
export function trackCalendlyFabView(scrollDepth: number) {
  trackEvent('calendly_fab_view', { scroll_depth: scrollDepth })
}

export function trackCalendlyFabClick(pagePath: string) {
  trackEvent('calendly_fab_click', { page_path: pagePath })
}

export function trackCalendlyAppointmentScheduled(source: string) {
  trackEvent('calendly_appointment_scheduled', { source })
}

/** GA4 conversion goal: mark "appointment_booked" in Admin > Events > Mark as conversion */
export function trackAppointmentBooked(source: string) {
  trackEvent('appointment_booked', { source })
}

/** Urgency banner */
export function trackUrgencyBannerView(messageVariant: string) {
  trackEvent('urgency_banner_view', { message_variant: messageVariant })
}

export function trackUrgencyBannerClick(action: string) {
  trackEvent('urgency_banner_click', { action })
}

export function trackUrgencyBannerDismiss(timeOnPageSeconds: number) {
  trackEvent('urgency_banner_dismiss', { time_on_page: timeOnPageSeconds })
}

/** Featured listings */
export function trackFeaturedListingView(listingsShown: number) {
  trackEvent('featured_listing_view', { listings_shown: listingsShown })
}

export function trackFeaturedListingClick(propertyPrice: string, listingType: string) {
  trackEvent('featured_listing_click', { property_price: propertyPrice, listing_type: listingType })
}

export function trackRealscoutSignupFromPreview(conversionSource: string) {
  trackEvent('realscout_signup_from_preview', { conversion_source: conversionSource })
}

export function trackRealscoutSharedSearchClick(location: string) {
  trackEvent('realscout_shared_search_click', { location })
}

/** CTA / phone / SMS */
export function trackCtaClick(ctaText: string, ctaLocation: string) {
  trackEvent('cta_click', { cta_text: ctaText, cta_location: ctaLocation })
}

const PHONE_NUMBER = '7027663299'

export function trackPhoneClick(source: string) {
  trackEvent('phone_click', { phone_number: PHONE_NUMBER, source })
}

export function trackSmsClick(intent: string) {
  trackEvent('sms_click', { phone_number: PHONE_NUMBER, intent })
}

/** Testimonials */
export function trackTestimonialView(testimonialName: string) {
  trackEvent('testimonial_view', { testimonial_name: testimonialName })
}

export function trackTestimonialNavigate(direction: 'next' | 'previous' | 'dot') {
  trackEvent('testimonial_navigate', { direction })
}

export function trackReviewsLinkClick(destination: string) {
  trackEvent('reviews_link_click', { destination })
}
