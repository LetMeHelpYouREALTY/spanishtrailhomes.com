'use client'

import Script from 'next/script'

/** Loads Calendly widget.js for popup links only—no floating badge (avoids duplicate CTAs with header + FAB). */
export function CalendlyWidgetScript() {
  return (
    <Script
      id="calendly-widget-js"
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="lazyOnload"
    />
  )
}
