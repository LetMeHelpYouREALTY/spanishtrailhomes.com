import { GBP_FULL_ADDRESS, GBP_GEO, GBP_LEGAL_NAME, GBP_STREET } from '@/lib/gbp-business'

/** Guard-gated Spanish Trail master plan — center at Spanish Trail Country Club / GBP office pin. */
export const SPANISH_TRAIL_COMMUNITY = {
  name: 'Spanish Trail',
  city: 'Las Vegas',
  region: 'NV',
  postalCode: '89113',
  center: {
    lat: GBP_GEO.latitude,
    lng: GBP_GEO.longitude,
  },
  /** Documented clubhouse address used for map center and community marker. */
  centerAddress: GBP_FULL_ADDRESS,
  centerLabel: 'Spanish Trail Country Club',
  mapZoom: 14,
  searchRadiusMeters: 8000,
} as const

export type AmenityCategoryId =
  | 'golf'
  | 'parks'
  | 'healthcare'
  | 'grocery'
  | 'fitness'
  | 'restaurants'
  | 'cafes'
  | 'shopping'
  | 'pharmacies'
  | 'schools'
  | 'parking'

export type AmenityCategory = {
  id: AmenityCategoryId
  label: string
  /** Google Places (New) primary types for searchNearby */
  placeTypes: string[]
  ariaLabel: string
}

/** Golf-forward guard-gated community — schools stay available but not first in the filter row. */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: 'golf',
    label: 'Golf',
    placeTypes: ['golf_course'],
    ariaLabel: 'Show golf courses near Spanish Trail',
  },
  {
    id: 'parks',
    label: 'Parks',
    placeTypes: ['park', 'national_park'],
    ariaLabel: 'Show parks near Spanish Trail',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    placeTypes: ['hospital', 'doctor', 'medical_clinic'],
    ariaLabel: 'Show hospitals and medical offices near Spanish Trail',
  },
  {
    id: 'grocery',
    label: 'Grocery',
    placeTypes: ['grocery_store', 'supermarket'],
    ariaLabel: 'Show grocery stores near Spanish Trail',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    placeTypes: ['gym', 'fitness_center'],
    ariaLabel: 'Show gyms and fitness centers near Spanish Trail',
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    placeTypes: ['restaurant'],
    ariaLabel: 'Show restaurants near Spanish Trail',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    placeTypes: ['cafe', 'coffee_shop'],
    ariaLabel: 'Show cafes near Spanish Trail',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    placeTypes: ['shopping_mall', 'department_store'],
    ariaLabel: 'Show shopping near Spanish Trail',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    placeTypes: ['pharmacy', 'drugstore'],
    ariaLabel: 'Show pharmacies near Spanish Trail',
  },
  {
    id: 'schools',
    label: 'Schools',
    placeTypes: ['school', 'secondary_school', 'primary_school'],
    ariaLabel: 'Show schools near Spanish Trail',
  },
  {
    id: 'parking',
    label: 'Parking',
    placeTypes: ['parking'],
    ariaLabel: 'Show parking near Spanish Trail',
  },
]

export type CuratedAmenity = {
  name: string
  address: string
  category: AmenityCategoryId | 'community' | 'commute'
  schemaType:
    | 'GolfCourse'
    | 'Park'
    | 'Hospital'
    | 'GroceryStore'
    | 'SportsActivityLocation'
    | 'Restaurant'
    | 'CafeOrCoffeeShop'
    | 'ShoppingCenter'
    | 'Pharmacy'
    | 'School'
    | 'Place'
  note?: string
}

/** Verified public addresses only — used for SSR copy, fallback lists, and ItemList JSON-LD. */
export const CURATED_AMENITIES: CuratedAmenity[] = [
  {
    name: 'Spanish Trail Country Club',
    address: `${GBP_STREET}, Las Vegas, NV 89113`,
    category: 'community',
    schemaType: 'GolfCourse',
    note: 'Private 27-hole club inside the Spanish Trail gates; membership is separate from HOA dues.',
  },
  {
    name: 'Whole Foods Market',
    address: '9420 W Sahara Ave, Las Vegas, NV 89117',
    category: 'grocery',
    schemaType: 'GroceryStore',
    note: 'About a 10–15 minute drive north via Rainbow Blvd or the 215 beltway in typical traffic.',
  },
  {
    name: "Trader Joe's",
    address: '8937 W Charleston Blvd, Las Vegas, NV 89117',
    category: 'grocery',
    schemaType: 'GroceryStore',
  },
  {
    name: 'Desert Breeze Park',
    address: '8275 Spring Mountain Rd, Las Vegas, NV 89147',
    category: 'parks',
    schemaType: 'Park',
  },
  {
    name: 'Spring Valley Hospital Medical Center',
    address: '5400 S Rainbow Blvd, Las Vegas, NV 89118',
    category: 'healthcare',
    schemaType: 'Hospital',
    note: 'Full-service hospital south of Spanish Trail along S. Rainbow Blvd.',
  },
  {
    name: 'Summerlin Hospital Medical Center',
    address: '657 Town Center Dr, Las Vegas, NV 89144',
    category: 'healthcare',
    schemaType: 'Hospital',
  },
  {
    name: 'Bishop Gorman High School',
    address: '5959 S Hualapai Way, Las Vegas, NV 89148',
    category: 'schools',
    schemaType: 'School',
    note: 'About 2.2 miles northeast of Spanish Trail via S. Rainbow Blvd per community marketing materials.',
  },
  {
    name: 'Faith Lutheran Middle & High School',
    address: '2015 S Hualapai Way, Las Vegas, NV 89117',
    category: 'schools',
    schemaType: 'School',
  },
  {
    name: 'Durango High School',
    address: '7100 W Dewey Dr, Las Vegas, NV 89113',
    category: 'schools',
    schemaType: 'School',
  },
  {
    name: 'Downtown Summerlin',
    address: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    note: 'Open-air dining and retail in Summerlin—roughly 10–15 minutes from Spanish Trail.',
  },
  {
    name: 'Harry Reid International Airport',
    address: '5757 Wayne Newton Blvd, Las Vegas, NV 89119',
    category: 'commute',
    schemaType: 'Place',
    note: 'Approximate drive often 18–25 minutes depending on Tropicana and I-215 traffic.',
  },
  {
    name: 'Las Vegas Strip (Las Vegas Blvd)',
    address: 'Las Vegas Blvd S, Las Vegas, NV',
    category: 'commute',
    schemaType: 'Place',
    note: 'Approximate drive to major Strip resorts is often 15–20 minutes via Tropicana Ave eastbound.',
  },
]

export const AMENITIES_PAGE_PATH = '/amenity-map' as const

export const AMENITIES_PAGE_H1 = `Nearby Amenities in ${SPANISH_TRAIL_COMMUNITY.name}, ${SPANISH_TRAIL_COMMUNITY.city}` as const

export function getKeylessMapEmbedUrl(): string {
  const { lat, lng } = SPANISH_TRAIL_COMMUNITY.center
  return `https://www.google.com/maps?q=${lat},${lng}&z=${SPANISH_TRAIL_COMMUNITY.mapZoom}&output=embed`
}

export function getDirectionsUrl(placeName: string, address: string): string {
  const query = encodeURIComponent(`${placeName}, ${address}`)
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`
}

export function curatedForCategory(category: AmenityCategoryId): CuratedAmenity[] {
  return CURATED_AMENITIES.filter((item) => item.category === category)
}

export function communityTrustLine(): string {
  return `${GBP_LEGAL_NAME} — hyperlocal Spanish Trail realtor at ${GBP_FULL_ADDRESS}.`
}
