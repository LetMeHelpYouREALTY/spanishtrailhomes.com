'use client'

import { useEffect } from 'react'

const SCRIPT_ID = 'realscout-widget'
const SCRIPT_SRC = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'

/** Loads the RealScout web-component runtime only on routes that render a RealScout widget. */
export function RealScoutWidgetScript() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = SCRIPT_SRC
    script.type = 'module'
    document.head.appendChild(script)
  }, [])

  return null
}
