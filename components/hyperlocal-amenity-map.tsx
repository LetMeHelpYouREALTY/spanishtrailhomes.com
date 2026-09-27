'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'

import { cn } from '@/lib/utils'
import {
  AMENITY_CATEGORIES,
  SPANISH_TRAIL_COMMUNITY,
  curatedForCategory,
  getDirectionsUrl,
  getKeylessMapEmbedUrl,
  type AmenityCategoryId,
} from '@/lib/hyperlocal-amenities'
import { GBP_LEGAL_NAME } from '@/lib/gbp-business'

type HyperlocalAmenityMapProps = {
  className?: string
  /** Reserve map height to prevent CLS */
  mapHeightClassName?: string
  /** Initial category when the map loads */
  defaultCategory?: AmenityCategoryId
  /** Show static curated list beside/below map when API unavailable */
  showStaticList?: boolean
}

type PlacePin = {
  id: string
  name: string
  address: string
  lat: number
  lng: number
  rating?: number
  directionsUrl: string
  isCommunity?: boolean
}

type StaticListItem = {
  id: string
  name: string
  address: string
  note?: string
  directionsUrl: string
}

const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function placeDisplayName(displayName: unknown): string {
  if (typeof displayName === 'string') {
    return displayName
  }
  if (displayName && typeof displayName === 'object' && 'text' in displayName) {
    return String((displayName as { text: string }).text)
  }
  return 'Nearby place'
}

function buildInfoWindowContent(pin: PlacePin): string {
  const ratingLine =
    pin.rating != null && !Number.isNaN(pin.rating)
      ? `<p style="margin:4px 0 0;font-size:13px;">Google rating: ${pin.rating.toFixed(1)}</p>`
      : ''
  return `<div style="max-width:240px;font-family:system-ui,sans-serif;">
    <strong>${escapeHtml(pin.name)}</strong>
    ${ratingLine}
    <p style="margin:6px 0 0;font-size:13px;line-height:1.4;">${escapeHtml(pin.address)}</p>
    <p style="margin:8px 0 0;"><a href="${pin.directionsUrl}" target="_blank" rel="noopener noreferrer">Directions</a></p>
  </div>`
}

let mapsScriptPromise: Promise<void> | null = null

function loadMapsScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('SSR'))
  }
  if (window.google?.maps) {
    return Promise.resolve()
  }
  if (!MAPS_API_KEY) {
    return Promise.reject(new Error('Missing API key'))
  }
  if (mapsScriptPromise) {
    return mapsScriptPromise
  }
  mapsScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-spanish-trail-maps]')
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('Script failed')))
      return
    }
    const script = document.createElement('script')
    script.dataset.spanishTrailMaps = 'true'
    script.async = true
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(MAPS_API_KEY)}&libraries=places&v=weekly&loading=async`
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Script failed'))
    document.head.appendChild(script)
  })
  return mapsScriptPromise
}

function curatedPinsForCategory(category: AmenityCategoryId): PlacePin[] {
  return curatedForCategory(category).map((item, index) => ({
    id: `curated-${category}-${index}`,
    name: item.name,
    address: item.address,
    lat: SPANISH_TRAIL_COMMUNITY.center.lat,
    lng: SPANISH_TRAIL_COMMUNITY.center.lng,
    directionsUrl: getDirectionsUrl(item.name, item.address),
  }))
}

function communityCenterPin(): PlacePin {
  return {
    id: 'community-center',
    name: SPANISH_TRAIL_COMMUNITY.centerLabel,
    address: SPANISH_TRAIL_COMMUNITY.centerAddress,
    lat: SPANISH_TRAIL_COMMUNITY.center.lat,
    lng: SPANISH_TRAIL_COMMUNITY.center.lng,
    isCommunity: true,
    directionsUrl: getDirectionsUrl(
      SPANISH_TRAIL_COMMUNITY.centerLabel,
      SPANISH_TRAIL_COMMUNITY.centerAddress,
    ),
  }
}

export function HyperlocalAmenityMap({
  className,
  mapHeightClassName = 'min-h-[420px] h-[420px] sm:h-[480px]',
  defaultCategory = 'golf',
  showStaticList = true,
}: HyperlocalAmenityMapProps) {
  const listboxId = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const mapInitializedRef = useRef(false)

  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(defaultCategory)
  const [shouldLoadMap, setShouldLoadMap] = useState(false)
  const [useInteractiveMap, setUseInteractiveMap] = useState(Boolean(MAPS_API_KEY))
  const [loadError, setLoadError] = useState<string | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node || shouldLoadMap) {
      return
    }
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadMap(true)
          observerRef.current?.disconnect()
        }
      },
      { rootMargin: '120px' },
    )
    observerRef.current.observe(node)
    return () => observerRef.current?.disconnect()
  }, [shouldLoadMap])

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((marker) => marker.setMap(null))
    markersRef.current = []
    infoWindowRef.current?.close()
  }, [])

  const renderPins = useCallback(
    (pins: PlacePin[]) => {
      const map = mapInstanceRef.current
      if (!map || !window.google?.maps) {
        return
      }
      clearMarkers()
      if (!infoWindowRef.current) {
        infoWindowRef.current = new window.google.maps.InfoWindow()
      }
      const bounds = new window.google.maps.LatLngBounds()
      bounds.extend(SPANISH_TRAIL_COMMUNITY.center)

      pins.forEach((pin) => {
        const marker = new window.google.maps.Marker({
          map,
          position: { lat: pin.lat, lng: pin.lng },
          title: pin.name,
          icon: pin.isCommunity
            ? {
                url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
                scaledSize: new window.google.maps.Size(42, 42),
              }
            : undefined,
        })
        marker.addListener('click', () => {
          infoWindowRef.current?.setContent(buildInfoWindowContent(pin))
          infoWindowRef.current?.open(map, marker)
        })
        markersRef.current.push(marker)
        bounds.extend({ lat: pin.lat, lng: pin.lng })
      })

      if (pins.length > 1) {
        map.fitBounds(bounds, 48)
      } else {
        map.setCenter(SPANISH_TRAIL_COMMUNITY.center)
        map.setZoom(SPANISH_TRAIL_COMMUNITY.mapZoom)
      }
    },
    [clearMarkers],
  )

  const searchCategory = useCallback(
    async (category: AmenityCategoryId) => {
      if (!mapInstanceRef.current || !window.google?.maps) {
        return
      }
      const categoryDef = AMENITY_CATEGORIES.find((item) => item.id === category)
      if (!categoryDef) {
        return
      }

      setIsSearching(true)
      setLoadError(null)

      const fallbackPins = [...curatedPinsForCategory(category), communityCenterPin()]

      try {
        const placesLib = await window.google.maps.importLibrary('places')
        const { places } = await placesLib.Place.searchNearby({
          fields: ['displayName', 'location', 'formattedAddress', 'rating', 'googleMapsURI'],
          locationRestriction: {
            circle: {
              center: SPANISH_TRAIL_COMMUNITY.center,
              radius: SPANISH_TRAIL_COMMUNITY.searchRadiusMeters,
            },
          },
          includedPrimaryTypes: categoryDef.placeTypes,
          maxResultCount: 15,
        })

        const apiPins: PlacePin[] = []
        places.forEach((place, index) => {
          const location = place.location
          if (!location) {
            return
          }
          const name = placeDisplayName(place.displayName)
          const address = place.formattedAddress ?? SPANISH_TRAIL_COMMUNITY.centerAddress
          apiPins.push({
            id: `place-${category}-${index}`,
            name,
            address,
            lat: location.lat,
            lng: location.lng,
            rating: place.rating,
            directionsUrl: place.googleMapsURI ?? getDirectionsUrl(name, address),
          })
        })

        const pins = apiPins.length > 0 ? [communityCenterPin(), ...apiPins] : fallbackPins
        renderPins(pins)
      } catch {
        renderPins(fallbackPins)
        setLoadError('Live nearby results are unavailable; showing verified local highlights.')
      } finally {
        setIsSearching(false)
      }
    },
    [renderPins],
  )

  useEffect(() => {
    if (!shouldLoadMap || !useInteractiveMap || mapInitializedRef.current) {
      return
    }
    let cancelled = false

    loadMapsScript()
      .then(() => {
        if (cancelled || !mapRef.current || mapInstanceRef.current) {
          return
        }
        mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
          center: SPANISH_TRAIL_COMMUNITY.center,
          zoom: SPANISH_TRAIL_COMMUNITY.mapZoom,
          mapId: MAP_ID || undefined,
          zoomControl: true,
          streetViewControl: false,
          fullscreenControl: true,
        })
        mapInitializedRef.current = true
        return searchCategory(activeCategory)
      })
      .catch(() => {
        if (!cancelled) {
          setUseInteractiveMap(false)
        }
      })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- init once when map enters viewport
  }, [shouldLoadMap, useInteractiveMap])

  useEffect(() => {
    if (!shouldLoadMap || !useInteractiveMap || !mapInitializedRef.current) {
      return
    }
    void searchCategory(activeCategory)
  }, [activeCategory, searchCategory, shouldLoadMap, useInteractiveMap])

  const staticItems: StaticListItem[] = [
    {
      id: 'community-center-static',
      name: SPANISH_TRAIL_COMMUNITY.centerLabel,
      address: SPANISH_TRAIL_COMMUNITY.centerAddress,
      note: 'Community center pin for Spanish Trail homebuyers.',
      directionsUrl: communityCenterPin().directionsUrl,
    },
    ...curatedForCategory(activeCategory).map((item, index) => ({
      id: `static-${activeCategory}-${index}`,
      name: item.name,
      address: item.address,
      note: item.note,
      directionsUrl: getDirectionsUrl(item.name, item.address),
    })),
  ]

  return (
    <div ref={containerRef} className={cn('space-y-4', className)}>
      <div
        role="tablist"
        aria-label="Filter nearby amenities by category"
        className="flex flex-wrap gap-2"
      >
        {AMENITY_CATEGORIES.map((category) => {
          const selected = category.id === activeCategory
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`${listboxId}-${category.id}`}
              aria-selected={selected}
              aria-controls={`${listboxId}-panel`}
              aria-label={category.ariaLabel}
              className={cn(
                'min-h-11 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2b1e]',
                selected
                  ? 'border-[#0f2b1e] bg-[#0f2b1e] text-white'
                  : 'border-[#d8cdbf] bg-white text-[#372a20] hover:border-[#0f2b1e]/40',
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          )
        })}
      </div>

      {loadError ? (
        <p className="text-sm text-[#6f5237]" role="status">
          {loadError}
        </p>
      ) : null}
      {isSearching ? (
        <p className="sr-only" role="status">
          Loading nearby {activeCategory} places
        </p>
      ) : null}

      <div
        id={`${listboxId}-panel`}
        role="tabpanel"
        aria-labelledby={`${listboxId}-${activeCategory}`}
        className="overflow-hidden rounded-3xl border border-[#d8cdbf] bg-white shadow-md"
      >
        {useInteractiveMap ? (
          <div
            ref={mapRef}
            className={cn('w-full bg-[#e8efe9]', mapHeightClassName)}
            aria-label={`Interactive map of ${activeCategory} near ${SPANISH_TRAIL_COMMUNITY.name}`}
          />
        ) : (
          <iframe
            title={`Map centered on ${GBP_LEGAL_NAME} at ${SPANISH_TRAIL_COMMUNITY.centerAddress}`}
            src={getKeylessMapEmbedUrl()}
            className={cn('w-full border-0', mapHeightClassName)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        )}
      </div>

      {showStaticList ? (
        <ul className="grid gap-3 sm:grid-cols-2" aria-label="Verified nearby places for this category">
          {staticItems.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-[#d8cdbf] bg-[#fdf9f3] p-4 text-sm text-[#372a20]/90"
            >
              <p className="font-semibold text-[#0f2b1e]">{item.name}</p>
              <p className="mt-1">{item.address}</p>
              {item.note ? <p className="mt-2 text-xs text-[#6f5237]">{item.note}</p> : null}
              <a
                href={item.directionsUrl}
                className="mt-2 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#0f2b1e] underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      {!useInteractiveMap && !MAPS_API_KEY ? (
        <p className="text-xs text-[#6f5237]">
          Set <code className="rounded bg-[#f8f2e7] px-1">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> in Vercel to
          enable live Places search; this page still works with the embed and verified list above.
        </p>
      ) : null}
    </div>
  )
}
