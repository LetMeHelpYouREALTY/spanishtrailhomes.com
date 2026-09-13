'use client'

import { useState, useEffect } from 'react'
import { XIcon, ChevronDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RealScoutSearchLink } from '@/components/listing-image-link'

export default function DeployBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isExpanding, setIsExpanding] = useState(false)

  useEffect(() => {
    // Check if banner was previously minimized in this session
    const isMinimizedSession = sessionStorage.getItem('deploy-banner-minimized')
    if (isMinimizedSession === 'true') {
      setIsMinimized(true)
    }
    // Show banner after determining state
    setIsVisible(true)
  }, [])

  const handleToggle = () => {
    const newMinimized = !isMinimized

    if (!newMinimized) {
      // Expanding - animate down
      setIsMinimized(false)
      setIsExpanding(true)
      sessionStorage.setItem('deploy-banner-minimized', 'false')

      // After animation completes, clear expanding state
      setTimeout(() => {
        setIsExpanding(false)
      }, 300) // Match animation duration
    } else {
      // Minimizing - animate up first
      setIsAnimating(true)

      // After animation completes, actually minimize
      setTimeout(() => {
        setIsMinimized(true)
        setIsAnimating(false)
        sessionStorage.setItem('deploy-banner-minimized', 'true')
      }, 300) // Match animation duration
    }
  }

  if (!isVisible) return null

  return (
    <>
      {isMinimized ? (
        // Minimized state - floating toggle button
        <div className="fixed top-4 right-4 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={handleToggle}
            className="h-8 w-8 p-0 bg-background border-border shadow-lg hover:bg-muted"
          >
            <ChevronDownIcon className="h-4 w-4 rotate-180" />
            <span className="sr-only">Expand banner</span>
          </Button>
        </div>
      ) : (
        // Expanded state - full banner
        <div
          className={`relative z-40 w-full border-b border-border bg-background/95 text-foreground backdrop-blur-md ${
            isAnimating
              ? 'animate-slide-out-up'
              : isExpanding
                ? 'animate-slide-in-down'
                : ''
          }`}
        >
          <div className="px-4 py-3.5 sm:px-6 sm:py-4">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                  Discover curated Spanish Trail listings and concierge representation from
                  Dr. Jan Duffy of Berkshire Hathaway HomeServices.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-2 sm:gap-3">
                <Button variant="default" size="sm" asChild>
                  <RealScoutSearchLink location="deploy-banner" className="flex items-center gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 10h12M10 4l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="hidden sm:inline">View Listings</span>
                    <span className="sm:hidden">Listings</span>
                  </RealScoutSearchLink>
                </Button>

                <Button variant="outline" size="sm" asChild>
                  <a
                    href="/contact"
                    className="flex items-center gap-2"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75L12 12.75l9.75-6M2.25 6.75v10.5l9.75 6 9.75-6V6.75"
                      />
                    </svg>
                    <span className="hidden sm:inline">Schedule Consultation</span>
                    <span className="sm:hidden">Consult</span>
                  </a>
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleToggle}
                  className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  <ChevronDownIcon className="h-4 w-4" />
                  <span className="sr-only">Minimize banner</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
