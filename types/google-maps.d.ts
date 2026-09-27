/** Minimal typings for Maps JavaScript API + Places (New) used by the amenity map. */
declare namespace google.maps {
  class LatLng {
    constructor(lat: number, lng: number)
  }

  class LatLngBounds {
    extend(point: LatLng | { lat: number; lng: number }): void
  }

  class Map {
    constructor(el: HTMLElement, opts?: MapOptions)
    fitBounds(bounds: LatLngBounds, padding?: number): void
    setCenter(center: LatLngLiteral): void
    setZoom(zoom: number): void
  }

  class Marker {
    constructor(opts?: MarkerOptions)
    setMap(map: Map | null): void
    addListener(event: string, handler: () => void): void
  }

  class InfoWindow {
    constructor(opts?: InfoWindowOptions)
    setContent(content: string): void
    open(map: Map, anchor?: Marker): void
    close(): void
  }

  class Size {
    constructor(width: number, height: number)
  }

  class Point {
    constructor(x: number, y: number)
  }

  interface MapOptions {
    center?: LatLngLiteral
    zoom?: number
    mapId?: string
    disableDefaultUI?: boolean
    zoomControl?: boolean
    streetViewControl?: boolean
    fullscreenControl?: boolean
  }

  interface MarkerOptions {
    map?: Map
    position?: LatLngLiteral
    title?: string
    icon?: string | MarkerIcon
  }

  interface MarkerIcon {
    url: string
    scaledSize?: Size
    anchor?: Point
  }

  interface InfoWindowOptions {
    content?: string
  }

  interface LatLngLiteral {
    lat: number
    lng: number
  }

  namespace places {
    class Place {
      static searchNearby(request: SearchNearbyRequest): Promise<SearchNearbyResponse>
      displayName?: string
      formattedAddress?: string
      location?: LatLngLiteral
      rating?: number
      googleMapsURI?: string
    }

    interface SearchNearbyRequest {
      fields: string[]
      locationRestriction: {
        circle: {
          center: LatLngLiteral
          radius: number
        }
      }
      includedPrimaryTypes?: string[]
      maxResultCount?: number
    }

    interface SearchNearbyResponse {
      places: Place[]
    }
  }

  function importLibrary(name: 'places'): Promise<{ Place: typeof places.Place }>
}

interface Window {
  google?: typeof google
}
