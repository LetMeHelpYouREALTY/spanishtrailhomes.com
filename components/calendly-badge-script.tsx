'use client'

import Script from 'next/script'

import { CALENDLY_URL } from '@/lib/calendly'

export function CalendlyBadgeScript() {
  return (
    <Script
      id="calendly-widget"
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: CALENDLY_URL,
            text: 'Book a Tour',
            color: '#0069ff',
            textColor: '#ffffff',
            branding: true,
          })
        }
      }}
    />
  )
}
