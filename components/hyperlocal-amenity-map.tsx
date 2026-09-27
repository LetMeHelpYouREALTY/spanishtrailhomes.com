'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'

import { searchCategoryPlaces } from '@/lib/amenity-places-search'
import { loadGoogleMaps, mapsAuthFailed } from '@/lib/google-maps-loader'
import { GBP_LEGAL_NAME } from '@/lib/gbp-business'
import {
  AMENITY_CATEGORIES,
  SPANISH_TRAIL_COMMUNITY,
  curatedForCategory,
  getDirectionsUrl,
  getKeylessMapEmbedUrl,
  type AmenityCategoryId,
} from '@/lib/hyperlocal-amenities'
import { cn } from '@/lib/utils'

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

function buildInfoWindowElement(pin: PlacePin): HTMLElement {
  const root = document.createElement('div')
  root.style.maxWidth = '240px'
  root.style.fontFamily = 'system-ui, sans-serif'

  const title = document.createElement('strong')
  title.textContent = pin.name
  root.appendChild(title)

  const address = document.createElement('p')
  address.style.margin = '6px 0 0'
  address.style.fontSize = '13px'
  address.style.lineHeight = '1.4'
  address.textContent = pin.address
  root.appendChild(address)

  const link = document.createElement('a')
  link.href = pin.directionsUrl
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  link.textContent = 'Directions'
  link.style.marginTop = '8px'
  link.style.display = 'inline-block'
  root.appendChild(link)

  return root
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
  const [useInteractiveMap, setUseInteractiveMap] = useState(
    Boolean(MAPS_API_KEY) && !mapsAuthFailed,
  )
  const [loadError, setLoadError] = useState<string | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((marker) => marker.setMap(null))
    markersRef.current = []
    infoWindowRef.current?.close()
  }, [])

  const switchToFallback = useCallback(() => {
    clearMarkers()
    mapInstanceRef.current = null
    mapInitializedRef.current = false
    infoWindowRef.current = null
    setUseInteractiveMap(false)
  }, [clearMarkers])

  useEffect(() => {
    const onAuthFailure = () => {
      switchToFallback()
    }
    window.addEventListener('gmaps:auth-failure', onAuthFailure)
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure)
  }, [switchToFallback])

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
          infoWindowRef.current?.setContent(buildInfoWindowElement(pin))
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
        const apiResults = await searchCategoryPlaces(
          SPANISH_TRAIL_COMMUNITY.center,
          category,
          categoryDef.placeTypes,
        )

        const apiPins: PlacePin[] = apiResults.map((place) => ({
          id: place.id,
          name: place.name,
          address: place.address,
          lat: place.lat,
          lng: place.lng,
          directionsUrl:
            place.directionsUrl || getDirectionsUrl(place.name, place.address),
        }))

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
    if (mapsAuthFailed || !MAPS_API_KEY) {
      setUseInteractiveMap(false)
      return
    }
    let cancelled = false

    loadGoogleMaps(MAPS_API_KEY)
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
          switchToFallback()
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
    </div>
  )
}
