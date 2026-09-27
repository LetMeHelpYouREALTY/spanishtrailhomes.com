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
  searchRadiusMeters: 5000,
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
  /** Display address on the page and in directions links */
  address: string
  /** Official source used to verify name and street address */
  sourceUrl: string
  /** When set, street line published in ItemList JSON-LD; omit when not verified */
  schemaAddress?: string
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

/** Verified public addresses — SSR copy, fallback lists, and ItemList JSON-LD (schemaAddress only when verified). */
export const CURATED_AMENITIES: CuratedAmenity[] = [
  {
    name: 'Spanish Trail Country Club',
    address: `${GBP_STREET}, Las Vegas, NV 89113`,
    schemaAddress: `${GBP_STREET}, Las Vegas, NV 89113`,
    sourceUrl: 'https://www.spanishtrailcc.com/',
    category: 'community',
    schemaType: 'GolfCourse',
    note: 'Private 27-hole club inside the Spanish Trail gates; membership is separate from HOA dues.',
  },
  {
    name: 'TPC Las Vegas',
    address: '9851 Canyon Run Dr, Las Vegas, NV 89144',
    schemaAddress: '9851 Canyon Run Dr, Las Vegas, NV 89144',
    sourceUrl: 'https://tpc.com/lasvegas/',
    category: 'golf',
    schemaType: 'GolfCourse',
    note: 'Public resort course on the west side of the valley, a short drive from Spanish Trail.',
  },
  {
    name: 'Angel Park Golf Club',
    address: '100 S Rampart Blvd, Las Vegas, NV 89145',
    schemaAddress: '100 S Rampart Blvd, Las Vegas, NV 89145',
    sourceUrl: 'https://www.angelpark.com/',
    category: 'golf',
    schemaType: 'GolfCourse',
  },
  {
    name: "Bear's Best Las Vegas",
    address: '11111 W Flamingo Rd, Las Vegas, NV 89135',
    schemaAddress: '11111 W Flamingo Rd, Las Vegas, NV 89135',
    sourceUrl: 'https://www.bearsbestlv.com/',
    category: 'golf',
    schemaType: 'GolfCourse',
  },
  {
    name: 'Whole Foods Market (Summerlin)',
    address: '2475 S Town Center Dr, Las Vegas, NV 89135',
    schemaAddress: '2475 S Town Center Dr, Las Vegas, NV 89135',
    sourceUrl: 'https://www.wholefoodsmarket.com/stores/summerlin',
    category: 'grocery',
    schemaType: 'GroceryStore',
    note: 'Downtown Summerlin store; about a 10–15 minute drive from Spanish Trail in typical traffic.',
  },
  {
    name: "Smith's Food and Drug",
    address: '9851 W Charleston Blvd, Las Vegas, NV 89117',
    schemaAddress: '9851 W Charleston Blvd, Las Vegas, NV 89117',
    sourceUrl: 'https://www.smithsfoodanddrug.com/',
    category: 'grocery',
    schemaType: 'GroceryStore',
  },
  {
    name: "Trader Joe's",
    address: '8937 W Charleston Blvd, Las Vegas, NV 89117',
    schemaAddress: '8937 W Charleston Blvd, Las Vegas, NV 89117',
    sourceUrl: 'https://www.traderjoes.com/home/stores/098',
    category: 'grocery',
    schemaType: 'GroceryStore',
  },
  {
    name: 'Desert Breeze Park',
    address: '8275 Spring Mountain Rd, Las Vegas, NV 89147',
    schemaAddress: '8275 Spring Mountain Rd, Las Vegas, NV 89147',
    sourceUrl: 'https://www.clarkcountynv.gov/government/departments/parks___recreation/special-use-facility/desert_breeze_community_center.php',
    category: 'parks',
    schemaType: 'Park',
    note: 'Clark County park with fields, paths, and a community center south of Spanish Trail.',
  },
  {
    name: 'Spring Valley Hospital Medical Center',
    address: '5400 S Rainbow Blvd, Las Vegas, NV 89118',
    schemaAddress: '5400 S Rainbow Blvd, Las Vegas, NV 89118',
    sourceUrl: 'https://www.springvalleyhospital.com/',
    category: 'healthcare',
    schemaType: 'Hospital',
    note: 'Full-service hospital south of Spanish Trail along S. Rainbow Blvd.',
  },
  {
    name: 'Summerlin Hospital Medical Center',
    address: '657 Town Center Dr, Las Vegas, NV 89144',
    schemaAddress: '657 Town Center Dr, Las Vegas, NV 89144',
    sourceUrl: 'https://www.summerlinhospital.com/',
    category: 'healthcare',
    schemaType: 'Hospital',
  },
  {
    name: 'Bishop Gorman High School',
    address: '5959 S Hualapai Way, Las Vegas, NV 89148',
    schemaAddress: '5959 S Hualapai Way, Las Vegas, NV 89148',
    sourceUrl: 'https://www.bghs.org/',
    category: 'schools',
    schemaType: 'School',
    note: 'Private high school northeast of Spanish Trail via S. Rainbow Blvd.',
  },
  {
    name: 'Faith Lutheran Middle & High School',
    address: '2015 S Hualapai Way, Las Vegas, NV 89117',
    schemaAddress: '2015 S Hualapai Way, Las Vegas, NV 89117',
    sourceUrl: 'https://www.faithlutheranlv.org/',
    category: 'schools',
    schemaType: 'School',
  },
  {
    name: 'Durango High School',
    address: '7100 W Dewey Dr, Las Vegas, NV 89113',
    schemaAddress: '7100 W Dewey Dr, Las Vegas, NV 89113',
    sourceUrl: 'https://durango.durangohs.org/',
    category: 'schools',
    schemaType: 'School',
  },
  {
    name: 'Downtown Summerlin',
    address: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
    schemaAddress: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
    sourceUrl: 'https://summerlin.com/experience/downtown-summerlin/',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    note: 'Open-air dining and retail in Summerlin—roughly 10–15 minutes from Spanish Trail.',
  },
  {
    name: 'Harry Reid International Airport',
    address: '5757 Wayne Newton Blvd, Las Vegas, NV 89119',
    schemaAddress: '5757 Wayne Newton Blvd, Las Vegas, NV 89119',
    sourceUrl: 'https://www.harryreidairport.com/',
    category: 'commute',
    schemaType: 'Place',
    note: 'Approximate drive often 18–25 minutes depending on Tropicana and I-215 traffic.',
  },
  {
    name: 'Las Vegas Strip resort corridor',
    address: 'Las Vegas Blvd S (resort corridor), Las Vegas, NV',
    sourceUrl: 'https://www.lvcva.com/',
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
