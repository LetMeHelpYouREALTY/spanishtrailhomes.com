/**
 * Canonical list of 11 Spanish Trail neighborhoods for /neighborhoods hub and /neighborhoods/[slug].
 * Aligns with GBP and existing copy (neighborhoodClusters, neighborhoodSpotlights in spanishTrailContent).
 */

export type Neighborhood = {
  slug: string
  name: string
  shortDescription: string
  /** SEO-friendly body content; target ~300+ words per page. */
  bodyParagraphs: string[]
  /** Property types commonly found (e.g. "Single-family estates", "Golf villas"). */
  propertyTypes: string[]
  /** Price range description (e.g. "Mid $600s – $1.2M"). */
  priceRange: string
  /** Distinguishing features for bullets. */
  features: string[]
}

export const NEIGHBORHOOD_SLUGS = [
  'estates',
  'estates-west',
  'courtyards',
  'gardens',
  'links',
  'carmels',
  'springs',
  'plum-creek',
  'villas',
  'islands',
  'innisbrook-estates',
] as const

export type NeighborhoodSlug = (typeof NEIGHBORHOOD_SLUGS)[number]

const neighborhoodsData: Omit<Neighborhood, 'slug'>[] = [
  {
    name: 'The Estates',
    shortDescription:
      'Custom golf-course estates with double-gated motor courts, casitas, and panoramic fairway views along the Sunrise, Ridge, and Canyon courses.',
    propertyTypes: ['Custom single-family estates', 'Large lot homes', 'Golf frontage'],
    priceRange: 'Upper $1M – $3M+',
    features: [
      '5,000–15,000+ sq. ft. custom builds',
      'Double-gated motor courts and casitas',
      'Sunrise, Ridge, and Canyon course views',
      'Wide setbacks and mature landscaping',
    ],
    bodyParagraphs: [
      'The Estates at Spanish Trail represent the community’s most expansive custom homes, built for buyers who want maximum square footage, privacy, and direct access to the Robert Trent Jones Jr. golf courses. Many properties feature double-gated motor courts, guest casitas, and resort-style pools with Baja shelves. Lots are among the largest within the guard gates, with wide setbacks that frame fairway and mountain views.',
      'Dr. Jan Duffy works with both luxury buyers and sellers in the Estates, providing Berkshire Hathaway HomeServices market data, absorption rates, and off-market introductions. Whether you are downsizing from an even larger estate or stepping up from a villa, she can outline which streets hold value best and which homes are likely to come to market in the coming months.',
      'Living in the Estates means instant access to the 50,000-square-foot clubhouse, fitness and aquatics, tennis, and member dining—all within a short cart or drive. The neighborhood’s mature trees and winding streets create a secluded feel while keeping Summerlin, the Strip, and Harry Reid International Airport within easy reach.',
    ],
  },
  {
    name: 'Estates West',
    shortDescription:
      'West-side estates with similar scale and golf access as the Estates, often with updated interiors and strong resale appeal.',
    propertyTypes: ['Single-family estates', 'Golf course and fairway lots'],
    priceRange: 'Upper $900s – $2.5M',
    features: [
      'Golf course and fairway proximity',
      'Updated kitchens and resort-style pools',
      'Quiet cul-de-sacs and tree-lined streets',
      'Quick access to clubhouse and Tropicana gate',
    ],
    bodyParagraphs: [
      'Estates West sits on the western side of Spanish Trail with the same guard-gated security and country club lifestyle as the main Estates. Homes here often feature slightly more recent builds or full renovations, appealing to buyers who want estate-scale living without a heavy custom project. Golf frontage and fairway views are common, and many streets back to the Sunrise or Ridge courses.',
      'Dr. Jan Duffy helps buyers and sellers in Estates West understand how their home compares to recent sales in the enclave and across Spanish Trail. She provides listing preparation advice for sellers and negotiation guidance for buyers in this competitive segment.',
      'Residents enjoy the same clubhouse, tennis, fitness, and dining as the rest of Spanish Trail, with convenient access to the Tropicana gate for quick trips to the Strip, airport, or Summerlin. Families and empty-nesters alike value the balance of privacy and community that Estates West offers.',
    ],
  },
  {
    name: 'The Courtyards',
    shortDescription:
      'Lock-and-leave luxury with mature courtyards, private pools, and effortless access to the clubhouse, spa, and dining on Tropicana and Rainbow.',
    propertyTypes: ['Single-family homes', 'Courtyard and patio homes'],
    priceRange: 'Mid $600s – $1.2M',
    features: [
      'Interior courtyards and private outdoor spaces',
      'Lock-and-leave layouts for seasonal residents',
      'Walking distance to clubhouse and amenities',
      'Mature landscaping and low-maintenance design',
    ],
    bodyParagraphs: [
      'The Courtyards at Spanish Trail are designed for buyers who want lock-and-leave convenience without sacrificing style. Interior courtyards, private pools, and covered patios create outdoor living spaces that feel secluded even on smaller lots. Many homes have been updated with modern kitchens, spa baths, and smart-home features.',
      'This neighborhood appeals to seasonal residents, second-home buyers, and empty-nesters who want to travel without worrying about maintenance. Dr. Jan Duffy regularly works with out-of-state buyers relocating to Spanish Trail and can coordinate virtual tours, inspections, and closings for remote purchasers.',
      'Proximity to the clubhouse, fitness center, and Bar & Grill makes the Courtyards ideal for those who prefer to walk or cart to daily activities. The neighborhood’s location near Tropicana and Rainbow provides quick access to dining, shopping, and the I-215 beltway.',
    ],
  },
  {
    name: 'The Gardens',
    shortDescription:
      'Garden-focused homes with lush landscaping, community greenbelts, and a relaxed pace of life within the guard gates.',
    propertyTypes: ['Single-family homes', 'Garden and patio homes'],
    priceRange: 'Mid $500s – $1M',
    features: [
      'Garden-oriented lots and landscaping',
      'Community greenbelts and walking paths',
      'Family-friendly floor plans',
      'Close to schools and Desert Breeze Park',
    ],
    bodyParagraphs: [
      'The Gardens at Spanish Trail offer a more intimate scale than the Estates while still delivering guard-gated security and country club access. Mature trees, garden beds, and community greenbelts give the area a park-like feel. Many homes feature updated interiors and outdoor living spaces suited to Las Vegas’s climate.',
      'Buyers in the Gardens often prioritize walkability, neighborhood character, and value per square foot. Dr. Jan Duffy provides market briefings that include sold comparables in the Gardens and adjacent enclaves so clients can make informed offers in a competitive market.',
      'Families appreciate the proximity to Bishop Gorman High School, Faith Lutheran Academy, and Desert Breeze Park. The Spanish Trail clubhouse, tennis, and pools are still only minutes away, making the Gardens a strong choice for those who want community amenities without the largest lot size.',
    ],
  },
  {
    name: 'The Links',
    shortDescription:
      'Fairway villas with wraparound patios, elevated tee-box vistas, and quick cart access to the Robert Trent Jones Jr. course and practice facility.',
    propertyTypes: ['Golf villas', 'Fairway and tee-box view homes'],
    priceRange: 'Mid $600s – $1.4M',
    features: [
      'Direct fairway and golf course views',
      'Cart path and walking access to course',
      'Wraparound patios and outdoor living',
      'Practice facility and clubhouse nearby',
    ],
    bodyParagraphs: [
      'The Links at Spanish Trail are built for golfers who want to step out the door and onto the course. Fairway villas and tee-box view homes line the Robert Trent Jones Jr. layout, with wraparound patios and elevated vistas that capture sunrise and sunset over the fairways. Cart access to the clubhouse and practice facility is quick and easy.',
      'Dr. Jan Duffy understands the premium that golf frontage commands in Spanish Trail and helps both buyers and sellers position their homes accordingly. She can identify which Links properties are likely to receive multiple offers and which have room for negotiation based on days on market and comparable sales.',
      'Residents of the Links enjoy the same clubhouse dining, fitness, tennis, and social calendar as the rest of Spanish Trail. The neighborhood’s focus on golf does not mean sacrificing other amenities—everything from Pilates to wine society is still at your fingertips.',
    ],
  },
  {
    name: 'The Carmels',
    shortDescription:
      'Golf-oriented villas and homes along the Carmel Ridge and fairway corridors, with strong resale demand and scenic views.',
    propertyTypes: ['Golf villas', 'Single-family homes'],
    priceRange: 'Mid $600s – $1.3M',
    features: [
      'Carmel Ridge and fairway locations',
      'Scenic golf and mountain views',
      'Villa and single-family options',
      'Strong resale and rental demand',
    ],
    bodyParagraphs: [
      'The Carmels encompass the villas and single-family homes along Carmel Ridge Court and the surrounding fairway corridors. This pocket of Spanish Trail is known for consistent resale demand and attractive pricing for golf-oriented buyers. Many homes have been updated with contemporary finishes while retaining the neighborhood’s character.',
      'Dr. Jan Duffy frequently lists and sells homes in the Carmels and can provide detailed comparables, absorption rates, and advice on staging and pricing. Buyers relocating from out of state often choose the Carmels for its balance of golf access, lock-and-leave convenience, and value.',
      'Like the Links, the Carmels put residents minutes from the Robert Trent Jones Jr. course, practice facility, and clubhouse. Dining, fitness, and tennis are all within a short drive or cart ride, and the Tropicana gate offers easy access to the rest of the valley.',
    ],
  },
  {
    name: 'Springs',
    shortDescription:
      'Tree-lined streets with three- to five-bedroom floor plans, community greenbelts, and a short drive to Bishop Gorman High School (2.2 miles) and Faith Lutheran Middle & High School.',
    propertyTypes: ['Single-family homes', 'Three- to five-bedroom plans'],
    priceRange: 'Mid $500s – $1.1M',
    features: [
      'Tree-lined streets and greenbelts',
      'Three- to five-bedroom layouts',
      'Near Bishop Gorman and Faith Lutheran',
      'Community pools and tennis',
    ],
    bodyParagraphs: [
      'Springs is one of Spanish Trail’s most requested neighborhoods for larger daily-living floor plans, with tree-lined streets, community greenbelts, and homes designed for work-from-home and entertaining. Homes along Springs Way and nearby streets often feature three to five bedrooms, updated kitchens, and backyard pools.',
      'Bishop Gorman High School is about 2.2 miles northeast via S. Rainbow Blvd.; Faith Lutheran Middle & High School and The Meadows School are also a short drive. Desert Breeze Park—with dog runs, skate park, and aquatic center—is nearby. Dr. Jan Duffy helps buyers compare Springs to other Spanish Trail enclaves and to neighboring communities like Summerlin.',
      'Guard-gated staffing and the Spanish Trail clubhouse, tennis, and pools mean residents get both a quieter street grid and full amenity access. The Springs area appeals to buyers who want more bedrooms and a manageable lot without the scale of the largest Estates.',
    ],
  },
  {
    name: 'Plum Creek',
    shortDescription:
      'Quiet streets with a mix of single-family and villa-style homes, greenbelts, and easy access to schools and the clubhouse.',
    propertyTypes: ['Single-family homes', 'Villas'],
    priceRange: 'Mid $500s – $1M',
    features: [
      'Quiet, low-traffic streets',
      'Mix of single-family and villa styles',
      'Greenbelts and walking paths',
      'Schools and clubhouse nearby',
    ],
    bodyParagraphs: [
      'Plum Creek offers a blend of single-family homes and villa-style residences within Spanish Trail’s guard gates. Streets tend to be quiet and well-maintained, with greenbelts and walking paths. The neighborhood appeals to buyers who want a smaller footprint without leaving the 89113 master plan.',
      'Dr. Jan Duffy provides market updates and comparable sales for Plum Creek so buyers and sellers can make data-driven decisions. She also connects relocating buyers with virtual tours and closing coordination when they cannot visit in person.',
      'Residents enjoy the same Spanish Trail amenities—clubhouse, golf, tennis, fitness, dining—while benefiting from a slightly more affordable entry point than the Estates or Links. Plum Creek is a strong choice for first-time Spanish Trail buyers or those downsizing without leaving the community.',
    ],
  },
  {
    name: 'The Villas',
    shortDescription:
      'Villa and townhome-style living with lock-and-leave convenience, shared amenities, and a lower-maintenance lifestyle.',
    propertyTypes: ['Villas', 'Townhomes', 'Attached and courtyard homes'],
    priceRange: 'Mid $400s – $900s',
    features: [
      'Lock-and-leave and low-maintenance',
      'Villa and townhome options',
      'Shared green space and pools',
      'Clubhouse and golf access',
    ],
    bodyParagraphs: [
      'The Villas at Spanish Trail provide an entry point to guard-gated, country club living with less square footage and maintenance than the Estates. Villa and townhome-style homes often feature private courtyards or patios, updated interiors, and access to community pools and green space.',
      'This neighborhood is popular with seasonal residents, investors seeking rental income, and buyers who want to travel without worrying about landscaping or pool care. Dr. Jan Duffy helps villa buyers understand HOA fees, rental restrictions, and resale trends so they can choose the right unit and price point.',
      'Villa residents still enjoy full Spanish Trail clubhouse, golf, tennis, and dining privileges. The combination of lower maintenance and full amenities makes the Villas a practical choice for many buyers entering the community for the first time.',
    ],
  },
  {
    name: 'The Islands',
    shortDescription:
      'Distinctive island-style and water-oriented homes with a resort feel and strong appeal to lock-and-leave buyers.',
    propertyTypes: ['Single-family and villa homes', 'Water-oriented lots'],
    priceRange: 'Mid $500s – $1.2M',
    features: [
      'Island and water-oriented settings',
      'Resort-style landscaping',
      'Lock-and-leave appeal',
      'Clubhouse and golf access',
    ],
    bodyParagraphs: [
      'The Islands at Spanish Trail offer a distinctive setting with water-oriented and island-style lots that create a resort-like atmosphere. Homes here often feature lush landscaping, private pools, and outdoor living spaces designed for both privacy and entertaining.',
      'Dr. Jan Duffy works with buyers and sellers in the Islands to position properties for the luxury and second-home market. She provides comparables, staging recommendations, and marketing strategies that highlight the neighborhood’s unique character.',
      'Residents enjoy the same guard-gated security and Spanish Trail amenities as the rest of the community. The Islands are ideal for buyers who want a distinctive address within the gates and a lock-and-leave lifestyle with full club access.',
    ],
  },
  {
    name: 'Innisbrook Estates',
    shortDescription:
      'Estate-style homes in the Innisbrook pocket with custom builds, golf proximity, and strong resale value.',
    propertyTypes: ['Single-family estates', 'Custom and semi-custom homes'],
    priceRange: 'Upper $800s – $2M',
    features: [
      'Estate-style and custom builds',
      'Golf and fairway proximity',
      'Innisbrook street names and character',
      'Strong resale and buyer demand',
    ],
    bodyParagraphs: [
      'Innisbrook Estates is a distinct pocket within Spanish Trail with estate-style and custom homes that appeal to buyers seeking quality construction and golf proximity. Street names and layout reflect the Innisbrook identity while remaining fully part of the guard-gated Spanish Trail community.',
      'Dr. Jan Duffy provides market briefings for Innisbrook Estates that include sold comparables, days on market, and pricing trends. Sellers benefit from her listing preparation and marketing approach; buyers get clear guidance on value and negotiation in this competitive segment.',
      'Residents enjoy full Spanish Trail clubhouse, golf, tennis, fitness, and dining access. Innisbrook Estates is a strong choice for buyers who want an estate-scale home with a defined neighborhood character and proven resale demand.',
    ],
  },
]

export const NEIGHBORHOODS: Neighborhood[] = NEIGHBORHOOD_SLUGS.map((slug, index) => ({
  slug,
  ...neighborhoodsData[index],
}))

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return NEIGHBORHOODS.find((n) => n.slug === slug)
}

export function getNeighborhoodSlugs(): NeighborhoodSlug[] {
  return [...NEIGHBORHOOD_SLUGS]
}
