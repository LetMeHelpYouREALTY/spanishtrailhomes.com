import type { AmenityCategoryId } from '@/lib/hyperlocal-amenities'

export type NearbyPlaceResult = {
  id: string
  name: string
  address: string
  lat: number
  lng: number
  directionsUrl: string
}

const cache = new Map<string, Promise<google.maps.places.Place[]>>()

function placeDisplayName(displayName: unknown): string {
  if (typeof displayName === 'string') {
    return displayName
  }
  if (displayName && typeof displayName === 'object' && 'text' in displayName) {
    return String((displayName as { text: string }).text)
  }
  return 'Nearby place'
}

export function searchCategoryPlaces(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId,
  types: string[],
): Promise<NearbyPlaceResult[]> {
  let p = cache.get(categoryId)
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary
      const { places } = await Place.searchNearby({
        fields: ['displayName', 'location', 'formattedAddress', 'googleMapsURI'],
        locationRestriction: {
          center,
          radius: 5000,
        },
        includedPrimaryTypes: types,
        maxResultCount: 10,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- string enum per Places API (New)
        rankPreference: 'POPULARITY' as any,
      })
      return places
    })()
    p.catch(() => cache.delete(categoryId))
    cache.set(categoryId, p)
  }

  return p.then((places) => {
    const results: NearbyPlaceResult[] = []
    places.forEach((place, index) => {
      const location = place.location
      if (!location) {
        return
      }
      const { lat, lng } = location.toJSON()
      const name = placeDisplayName(place.displayName)
      const address = place.formattedAddress ?? ''
      results.push({
        id: `place-${categoryId}-${index}`,
        name,
        address,
        lat,
        lng,
        directionsUrl: place.googleMapsURI ?? '',
      })
    })
    return results
  })
}
