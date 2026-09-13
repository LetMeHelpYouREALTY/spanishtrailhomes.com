'use client'

import { useEffect, useRef, useState } from 'react'

import { CALENDLY_URL } from '@/lib/calendly'

type CalendlyInlineProps = {
  /** Minimum width in pixels (default 320) */
  minWidth?: number
  /** Height in pixels (default 700) */
  height?: number
  className?: string
}

export function CalendlyInline({
  minWidth = 320,
  height = 700,
  className = '',
}: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showPlaceholder, setShowPlaceholder] = useState(true)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const check = () => el.querySelector('iframe')
    if (check()) {
      setShowPlaceholder(false)
      return
    }
    const observer = new MutationObserver(() => {
      if (check()) {
        setShowPlaceholder(false)
        observer.disconnect()
      }
    })
    observer.observe(el, { childList: true, subtree: true })
    const timeout = setTimeout(() => setShowPlaceholder(false), 8000)
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="relative" ref={containerRef}>
      <div
        className={`calendly-inline-widget ${className}`}
        data-url={CALENDLY_URL}
        style={{ minWidth: `${minWidth}px`, height: `${height}px` }}
      />
      {showPlaceholder && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-[#f9f4eb]/95 text-sm text-[#6f5237]"
          aria-live="polite"
          aria-busy="true"
          style={{ minWidth: `${minWidth}px`, height: `${height}px` }}
        >
          Loading scheduler…
        </div>
      )}
    </div>
  )
}
