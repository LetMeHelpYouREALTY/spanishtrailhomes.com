import {
  GBP_ADDRESS_LINE,
  GBP_HOURS_LABEL,
  GBP_PHONE_DISPLAY,
} from '@/lib/gbp-business'
import { formatMedianPrice, marketStats } from '@/lib/marketStats'
import { neighborhoodPossessive, type Neighborhood } from '@/lib/neighborhoods'

export type BackPageFact = {
  label: string
  value: string
}

export type BackPageOverviewContent = {
  title: string
  summary: string
  facts: BackPageFact[]
  features: string[]
  links?: { href: string; label: string }[]
}

const COMMUNITY_LOCATION =
  'Spanish Trail, Las Vegas NV 89113. Guard-gated at Tropicana Avenue and Rainbow Boulevard. Office at 5050 Spanish Trail Ln.'

const COMMUNITY_SIZE =
  '640 acres, 11 neighborhoods, and 1,200+ homes around a private 27-hole Robert Trent Jones Jr. course.'

export const BACK_PAGE_SPEAKABLE = {
  '@type': 'SpeakableSpecification',
  cssSelector: ['[data-back-page-overview]'],
}

export function getNeighborhoodOverview(neighborhood: Neighborhood): BackPageOverviewContent {
  const owned = neighborhoodPossessive(neighborhood.name)

  return {
    title: `${neighborhood.name} overview`,
    summary: `${neighborhood.name} is one of 11 Spanish Trail neighborhoods in Las Vegas ZIP 89113. ${neighborhood.shortDescription} Typical inventory: ${neighborhood.priceRange}. Dr. Jan Duffy buys, sells, and tours ${owned} addresses. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      {
        label: 'Location',
        value: `${neighborhood.name} inside Spanish Trail, Las Vegas NV 89113. Guard-gated at Tropicana Avenue and Rainbow Boulevard.`,
      },
      {
        label: 'Size',
        value: `Part of Spanish Trail’s ${COMMUNITY_SIZE} This enclave’s housing mix: ${neighborhood.propertyTypes.join(', ')}.`,
      },
      {
        label: 'Pricing',
        value: `${neighborhood.name} listings typically sit in the ${neighborhood.priceRange} band. Ask Dr. Duffy for a CMA on a specific street—do not use a community median as a list price.`,
      },
    ],
    features: neighborhood.features,
    links: [
      { href: '/spanish-trail-homes-for-sale-las-vegas', label: 'Live Spanish Trail listings' },
      { href: '/neighborhoods', label: 'All 11 neighborhoods' },
      { href: '/contact', label: 'Book a gate-access tour' },
    ],
  }
}

export const TOPIC_OVERVIEWS: Record<string, BackPageOverviewContent> = {
  neighborhoods: {
    title: 'Spanish Trail neighborhoods overview',
    summary: `Spanish Trail has 11 named neighborhoods inside one guard-gated 89113 plan. Dr. Jan Duffy matches buyers and sellers to the Estates, Estates West, Courtyards, Gardens, Links, Carmels, Springs, Plum Creek, Villas, Islands, and Innisbrook Estates. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: COMMUNITY_LOCATION },
      { label: 'Size', value: COMMUNITY_SIZE },
      {
        label: 'Pricing',
        value: `Enclave bands run from mid $400s villas through $3M+ custom estates. Community median as of ${marketStats.date_label}: ${formatMedianPrice(marketStats.median_price)}.`,
      },
    ],
    features: [
      'Eleven named enclaves with different lot sizes and housing types',
      'Guard-gated Tropicana and Rainbow access; Hacienda residents gate',
      'Optional Spanish Trail Country Club membership is separate from the deed',
      'Bishop Gorman High School is 2.2 miles northeast via S. Rainbow Blvd.',
    ],
    links: [
      { href: '/spanish-trail-homes-for-sale-las-vegas', label: 'Live listings hub' },
      { href: '/communities/spanish-trail', label: 'Community guide' },
      { href: '/contact', label: 'Tour an enclave' },
    ],
  },
  community: {
    title: 'Spanish Trail community overview',
    summary: `Spanish Trail is a guard-gated golf community in southwest Las Vegas ZIP 89113—also searched as Spanish Trails. Dr. Jan Duffy buys and sells the 1,200+ homes here only. Berkshire Hathaway HomeServices Nevada Properties. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: COMMUNITY_LOCATION },
      { label: 'Size', value: COMMUNITY_SIZE },
      {
        label: 'Pricing',
        value: `As of ${marketStats.date_label}: median ${formatMedianPrice(marketStats.median_price)}, $${marketStats.price_per_sqft}/sq. ft., ${marketStats.active_listings} active listings.`,
      },
    ],
    features: [
      'Private 27-hole Robert Trent Jones Jr. course (Sunrise, Lakes, Canyon nines)',
      'Staffed guard gates; club membership optional and not in the deed',
      'Housing mix: villas, townhomes, fairway homes, and custom estates',
      `Office NAP: ${GBP_ADDRESS_LINE}`,
    ],
    links: [
      { href: '/neighborhoods', label: '11 neighborhoods' },
      { href: '/spanish-trail-homes-for-sale-las-vegas', label: 'Homes for sale' },
      { href: '/golf', label: 'Golf and fairway homes' },
    ],
  },
  listings: {
    title: 'Spanish Trail homes for sale overview',
    summary: `This hub is live MLS inventory inside Spanish Trail, Las Vegas 89113—not a valley-wide search. Dr. Jan Duffy confirms the street, square footage, and gate access before a showing. As of ${marketStats.date_label}: median ${formatMedianPrice(marketStats.median_price)}. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: COMMUNITY_LOCATION },
      { label: 'Size', value: `${COMMUNITY_SIZE} ${marketStats.active_listings} active listings in the ${marketStats.date_label} snapshot.` },
      {
        label: 'Pricing',
        value: `Median ${formatMedianPrice(marketStats.median_price)} and $${marketStats.price_per_sqft}/sq. ft. as of ${marketStats.date_label}. ${marketStats.avg_days_on_market} average days on market.`,
      },
    ],
    features: [
      'Office listings filtered to this 89113 community, then confirmed on the street',
      'Gate-access tours with Berkshire Hathaway HomeServices Nevada Properties',
      'Enclave matching across 11 neighborhoods before you write an offer',
      'Weekly absorption from the same market snapshot used on this page',
    ],
    links: [
      { href: '/neighborhoods', label: 'Shop by neighborhood' },
      { href: '/homes-for-sale-in-spanish-trail-las-vegas', label: 'Property-type guide' },
      { href: '/contact', label: 'Request a showing' },
    ],
  },
  townhomes: {
    title: 'Spanish Trail townhomes and villas overview',
    summary: `Villas and townhomes inside Spanish Trail, Las Vegas 89113, are lock-and-leave housing with the same guard gates as the estates. Typical band mid $400s–$900s in The Villas. Dr. Jan Duffy buys and sells these addresses. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: 'The Villas, Links, Courtyards, and related enclaves inside Spanish Trail, Las Vegas NV 89113.' },
      { label: 'Size', value: 'Attached and courtyard homes inside the 1,200+ home, 11-neighborhood plan. Not a separate master-planned village.' },
      { label: 'Pricing', value: 'The Villas typically mid $400s–$900s. Links and Courtyards often mid $600s–$1.2M. Confirm the street with a CMA.' },
    ],
    features: [
      'Lock-and-leave layouts; HOA handles much of the exterior work',
      'Same staffed gates and optional club access as estate streets',
      'Short-term rentals under 31 days are prohibited by the association',
      'Golf-adjacent villas cluster near lakes on the course',
    ],
    links: [
      { href: '/neighborhoods/villas', label: 'The Villas' },
      { href: '/neighborhoods/courtyards', label: 'The Courtyards' },
      { href: '/spanish-trail-hoa-guide', label: 'HOA guide' },
    ],
  },
  'guard-gated': {
    title: 'Guard-gated Spanish Trail overview',
    summary: `Spanish Trail is a staffed guard-gated golf community in Las Vegas ZIP 89113. Ownership does not require a club membership. Dr. Jan Duffy schedules gate clearance and showings. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: COMMUNITY_LOCATION },
      { label: 'Size', value: COMMUNITY_SIZE },
      {
        label: 'Pricing',
        value: `Community median ${formatMedianPrice(marketStats.median_price)} as of ${marketStats.date_label}. Enclave bands from villas through custom estates.`,
      },
    ],
    features: [
      'Main visitor gate off Tropicana; resident gates on Hacienda and Rainbow',
      'Club membership is optional and does not transfer with the deed',
      'Double-gated Estates and Estates West add a second controlled entry',
      'Dr. Duffy arranges gatehouse procedures before the first tour',
    ],
    links: [
      { href: '/neighborhoods/estates', label: 'The Estates' },
      { href: '/spanish-trail-homes-for-sale-las-vegas', label: 'Homes inside the gates' },
      { href: '/contact', label: 'Get on the gate list' },
    ],
  },
  'private-golf': {
    title: 'Private golf homes at Spanish Trail overview',
    summary: `Fairway and estate addresses sit on a private 27-hole Robert Trent Jones Jr. course inside Spanish Trail, Las Vegas 89113. This is not public tee-time golf. Dr. Jan Duffy represents buyers and sellers of those homes. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: 'Sunrise, Lakes, and Canyon nines inside Spanish Trail, Las Vegas NV 89113.' },
      { label: 'Size', value: '27 private holes. Homes around the course are part of the 1,200+ address, 11-neighborhood plan.' },
      { label: 'Pricing', value: 'Golf-frontage premiums vary by nine and setback. Typical Links band mid $600s–$1.4M; Estates upper $1M–$3M+.' },
    ],
    features: [
      'Robert Trent Jones Jr. Sunrise, Lakes, and Canyon nines',
      'Cart-path and fairway lots in The Links, Carmels, and Estates',
      'Club golf is membership-based; the deed does not include a membership',
      'Dr. Duffy confirms which listing actually sits on the course before you tour',
    ],
    links: [
      { href: '/golf', label: 'Course guide' },
      { href: '/neighborhoods/links', label: 'The Links' },
      { href: '/spanish-trail-luxury-golf-course-properties', label: 'Luxury golf properties' },
    ],
  },
  'luxury-golf': {
    title: 'Spanish Trail luxury golf properties overview',
    summary: `Luxury golf-course property at Spanish Trail means a deeded 89113 address with fairway, lake, or estate exposure—not a valley-wide golf search. Dr. Jan Duffy works this community only. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: COMMUNITY_LOCATION },
      { label: 'Size', value: COMMUNITY_SIZE },
      {
        label: 'Pricing',
        value: `Median ${formatMedianPrice(marketStats.median_price)} as of ${marketStats.date_label}. Golf-frontage estates often list above the community median.`,
      },
    ],
    features: [
      'Fairway, lake, and double-fairway exposures on a private 27-hole course',
      'Custom estates in The Estates, Estates West, and Innisbrook Estates',
      'Architectural Review for exterior work; HOA is separate from club dues',
      'Showings require guard-gate clearance arranged by the listing or buyer agent',
    ],
    links: [
      { href: '/neighborhoods/estates', label: 'The Estates' },
      { href: '/spanish-trail-country-club-estate-listings', label: 'Country club estates' },
      { href: '/contact', label: 'Tour golf-frontage homes' },
    ],
  },
  golf: {
    title: 'Spanish Trail golf overview',
    summary: `Golf at Spanish Trail is a private 27-hole Robert Trent Jones Jr. course inside the 89113 guard gates. Dr. Jan Duffy represents homes on and near the nines—not a public tee-sheet. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: `Sunrise, Lakes, and Canyon nines at ${GBP_ADDRESS_LINE}.` },
      { label: 'Size', value: '27 holes (three nines) serving the 1,200+ home Spanish Trail plan.' },
      { label: 'Pricing', value: 'Home prices follow the enclave, not a golf-only list. Ask for comps on the specific fairway or street.' },
    ],
    features: [
      'Robert Trent Jones Jr. design: Sunrise, Lakes, and Canyon',
      'Practice facility and golf shop on site',
      'Membership is through the club, separate from homeownership',
      'Fairway homes cluster in The Links, Carmels, Islands, and Estates',
    ],
    links: [
      { href: '/spanish-trail-private-golf-course-homes', label: 'Golf-course homes' },
      { href: '/membership', label: 'Club membership' },
      { href: '/neighborhoods/links', label: 'The Links' },
    ],
  },
  hoa: {
    title: 'Spanish Trail HOA overview',
    summary: `The Spanish Trail HOA governs the 89113 guard-gated streets, architectural review, and common areas. Club dues are a separate invoice. Dr. Jan Duffy walks buyers through both before an offer. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: COMMUNITY_LOCATION },
      { label: 'Size', value: 'One master association across 11 neighborhoods and 1,200+ homes. Some enclaves add a sub-association.' },
      { label: 'Pricing', value: 'HOA dues vary by enclave and unit type. Villa/townhome ranges are listed on the villas page; confirm the current invoice on the property you tour.' },
    ],
    features: [
      'Architectural Review Committee for exterior changes',
      'Staffed gates and common-area maintenance',
      'Club membership is optional and billed separately',
      'Short-term rentals under 31 days are not allowed',
    ],
    links: [
      { href: '/spanish-trail-townhomes-villas', label: 'Villas and townhomes' },
      { href: '/spanish-trail-homes-for-sale-las-vegas', label: 'Homes for sale' },
      { href: '/contact', label: 'Ask about a specific HOA' },
    ],
  },
  estates: {
    title: 'Spanish Trail country club estates overview',
    summary: `Custom estates inside Spanish Trail, Las Vegas 89113, sit in The Estates, Estates West, and Innisbrook Estates. Dr. Jan Duffy lists and buys these larger-lot addresses. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: 'The Estates, Estates West, and Innisbrook Estates inside Spanish Trail, Las Vegas NV 89113.' },
      { label: 'Size', value: 'Largest lots in the 640-acre plan. Typical custom builds 5,000–15,000+ sq. ft. in The Estates.' },
      { label: 'Pricing', value: 'The Estates typically upper $1M–$3M+. Estates West upper $900s–$2.5M. Innisbrook Estates upper $800s–$2M.' },
    ],
    features: [
      'Double-gated motor courts and casitas on many Estates lots',
      'Sunrise, Ridge, and Canyon course views',
      'HOA plus optional club membership',
      'Showings require gate clearance and often appointment-only access',
    ],
    links: [
      { href: '/neighborhoods/estates', label: 'The Estates' },
      { href: '/neighborhoods/estates-west', label: 'Estates West' },
      { href: '/spanish-trail-custom-estate-homes-strip', label: 'Custom estate strip homes' },
    ],
  },
  'custom-estates': {
    title: 'Spanish Trail custom estate homes overview',
    summary: `Custom estate streets inside Spanish Trail, Las Vegas 89113, include Strip-view and large-lot builds. Dr. Jan Duffy represents those sales. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: 'Custom estate pockets inside Spanish Trail, Las Vegas NV 89113, including Strip-view corridors where they exist.' },
      { label: 'Size', value: 'Custom square footage and lot size vary by street. The Estates are the largest-lot pocket in the 1,200+ home plan.' },
      { label: 'Pricing', value: 'Custom inventory typically tracks The Estates and Estates West bands (upper $900s–$3M+). Confirm the address with a CMA.' },
    ],
    features: [
      'One-off architecture under Spanish Trail Architectural Review',
      'Motor courts, casitas, and outdoor living common on larger lots',
      'Guard-gated access; some streets add a second gate',
      'Dr. Duffy verifies view corridors and setbacks before you tour',
    ],
    links: [
      { href: '/neighborhoods/estates', label: 'The Estates' },
      { href: '/spanish-trail-country-club-estate-listings', label: 'Country club estates' },
      { href: '/contact', label: 'Tour a custom estate' },
    ],
  },
  waterfront: {
    title: 'Spanish Trail waterfront golf homes overview',
    summary: `Water-oriented lots at Spanish Trail sit on golf-course lakes inside Las Vegas ZIP 89113, especially The Islands. Dr. Jan Duffy buys and sells those addresses. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: 'The Islands and lake-adjacent golf lots inside Spanish Trail, Las Vegas NV 89113.' },
      { label: 'Size', value: 'A pocket of the 1,200+ home, 11-neighborhood plan—not a separate lakefront master.' },
      { label: 'Pricing', value: 'The Islands typically mid $500s–$1.2M. Lake premiums depend on the specific lot; get comps before you offer.' },
    ],
    features: [
      'Golf-course lakes, not a reservoir shoreline',
      'Lock-and-leave appeal in The Islands',
      'Same guard gates and optional club as the rest of Spanish Trail',
      'Confirm water exposure on the listing, not from a map pin alone',
    ],
    links: [
      { href: '/neighborhoods/islands', label: 'The Islands' },
      { href: '/spanish-trail-private-golf-course-homes', label: 'Golf-course homes' },
      { href: '/contact', label: 'Tour a lake lot' },
    ],
  },
  'gated-realtor': {
    title: 'Spanish Trail gated golf realtor overview',
    summary: `Dr. Jan Duffy is the realtor who buys and sells Spanish Trail homes only—Las Vegas ZIP 89113, also searched as Spanish Trails. Berkshire Hathaway HomeServices Nevada Properties. License S.0197614.LLC. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: COMMUNITY_LOCATION },
      { label: 'Size', value: COMMUNITY_SIZE },
      {
        label: 'Pricing',
        value: `Works every enclave band, villas through custom estates. Community median ${formatMedianPrice(marketStats.median_price)} as of ${marketStats.date_label}.`,
      },
    ],
    features: [
      'Buyer and seller representation inside this community only',
      'Guard-gate clearance and appointment-only showings',
      'Neighborhood-level comps instead of a valley-wide average',
      `Office hours: ${GBP_HOURS_LABEL}`,
    ],
    links: [
      { href: '/services', label: 'Realtor services' },
      { href: '/about', label: 'About Dr. Jan Duffy' },
      { href: '/contact', label: 'Call or book a tour' },
    ],
  },
  'property-types': {
    title: 'Spanish Trail property types overview',
    summary: `Homes inside Spanish Trail, Las Vegas 89113, include villas, townhomes, fairway homes, and custom estates across 11 neighborhoods. This page is the property-type guide; live MLS sits on the listings hub. Dr. Jan Duffy matches the street to the housing mix. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: COMMUNITY_LOCATION },
      { label: 'Size', value: COMMUNITY_SIZE },
      {
        label: 'Pricing',
        value: `Enclave bands: villas mid $400s–$900s; Links and Courtyards mid $600s–$1.2M; Estates upper $1M–$3M+. Community median ${formatMedianPrice(marketStats.median_price)} as of ${marketStats.date_label}.`,
      },
    ],
    features: [
      'Villas and townhomes for lock-and-leave layouts',
      'Fairway and lake lots on the private 27-hole course',
      'Custom estates with the largest lots in the 640-acre plan',
      'Guard-gated Tropicana, Rainbow, and Hacienda entries',
    ],
    links: [
      { href: '/spanish-trail-homes-for-sale-las-vegas', label: 'Live MLS hub' },
      { href: '/spanish-trail-townhomes-villas', label: 'Townhomes and villas' },
      { href: '/neighborhoods', label: '11 neighborhoods' },
    ],
  },
  schools: {
    title: 'Spanish Trail schools overview',
    summary: `Spanish Trail, Las Vegas 89113, is served by named Clark County School District campuses. Bishop Gorman High School is 2.2 miles northeast via S. Rainbow Blvd. Dr. Jan Duffy verifies current assignments on the listing you tour. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: COMMUNITY_LOCATION },
      {
        label: 'Size',
        value: 'No campus sits inside the 640-acre gates. Assigned CCSD campuses serve the 11-neighborhood, 1,200+ home plan.',
      },
      {
        label: 'Pricing',
        value: `Do not use a campus name as a list-price proxy. Confirm the street with a CMA. Community median ${formatMedianPrice(marketStats.median_price)} as of ${marketStats.date_label}.`,
      },
    ],
    features: [
      'Frank Kim Elementary School (K–5) serves Spanish Trail addresses',
      'Grant Sawyer Middle School (grades 6–8)',
      'Spring Valley High School (grades 9–12)',
      'Bishop Gorman High School is 2.2 miles northeast via S. Rainbow Blvd.',
    ],
    links: [
      { href: '/neighborhoods/springs', label: 'Springs homes' },
      { href: '/spanish-trail-homes-for-sale-las-vegas', label: 'Homes for sale' },
      { href: '/contact', label: 'Ask about a listing’s assignment' },
    ],
  },
  southwest: {
    title: 'Southwest Las Vegas Spanish Trail overview',
    summary: `Spanish Trail is the guard-gated golf community in southwest Las Vegas ZIP 89113. Dr. Jan Duffy buys and sells the 1,200+ homes here only—not a valley-wide luxury search. Berkshire Hathaway HomeServices Nevada Properties. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: `${COMMUNITY_LOCATION} About 15 minutes to the Las Vegas Strip via Tropicana.` },
      { label: 'Size', value: COMMUNITY_SIZE },
      {
        label: 'Pricing',
        value: `As of ${marketStats.date_label}: median ${formatMedianPrice(marketStats.median_price)}, $${marketStats.price_per_sqft}/sq. ft., ${marketStats.active_listings} active listings.`,
      },
    ],
    features: [
      'Guard-gated 89113 address; not an open master-planned village',
      'Private 27-hole Robert Trent Jones Jr. course on site',
      '215 Beltway, Harry Reid International Airport, and the medical corridor nearby',
      'Eleven named neighborhoods instead of one generic southwest listing',
    ],
    links: [
      { href: '/communities/spanish-trail', label: 'Community guide' },
      { href: '/spanish-trail-homes-for-sale-las-vegas', label: 'Homes for sale' },
      { href: '/neighborhoods', label: 'Neighborhoods' },
    ],
  },
  market: {
    title: 'Spanish Trail market report overview',
    summary: `This report covers Spanish Trail, Las Vegas 89113 only. Frozen snapshot ${marketStats.date_label}: median ${formatMedianPrice(marketStats.median_price)}, $${marketStats.price_per_sqft}/sq. ft., ${marketStats.active_listings} active listings, ${marketStats.avg_days_on_market} average days on market. Dr. Jan Duffy. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: COMMUNITY_LOCATION },
      { label: 'Size', value: `${COMMUNITY_SIZE} ${marketStats.active_listings} active listings in the ${marketStats.date_label} snapshot.` },
      {
        label: 'Pricing',
        value: `Median ${formatMedianPrice(marketStats.median_price)} and $${marketStats.price_per_sqft}/sq. ft. as of ${marketStats.date_label}. ${marketStats.avg_days_on_market} average days on market.`,
      },
    ],
    features: [
      'Stats are this community, not a Las Vegas metro average',
      'Enclave bands still beat a community median for a list price',
      'Ask Dr. Duffy for a CMA on the specific street you will tour',
      `Office NAP: ${GBP_ADDRESS_LINE}`,
    ],
    links: [
      { href: '/spanish-trail-homes-for-sale-las-vegas', label: 'Live listings' },
      { href: '/sellers', label: 'Seller guide' },
      { href: '/contact', label: 'Request a CMA' },
    ],
  },
  buyers: {
    title: 'Spanish Trail buyer guide overview',
    summary: `Buyer representation is for Spanish Trail, Las Vegas 89113 only. Dr. Jan Duffy coordinates gate clearance, neighborhood matching, and offers on the 1,200+ homes here. Berkshire Hathaway HomeServices Nevada Properties. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: COMMUNITY_LOCATION },
      { label: 'Size', value: COMMUNITY_SIZE },
      {
        label: 'Pricing',
        value: `As of ${marketStats.date_label}: median ${formatMedianPrice(marketStats.median_price)}, ${marketStats.avg_days_on_market} average days on market. Golf-frontage premiums vary by nine.`,
      },
    ],
    features: [
      'Guard-gate clearance and appointment-only showings',
      'Matching across 11 named neighborhoods before you write',
      'Club membership is optional and not in the deed',
      'Remote and in-person tours for out-of-area buyers',
    ],
    links: [
      { href: '/spanish-trail-homes-for-sale-las-vegas', label: 'Homes for sale' },
      { href: '/relocation', label: 'Out-of-state buyers' },
      { href: '/contact', label: 'Start a search' },
    ],
  },
  sellers: {
    title: 'Spanish Trail seller guide overview',
    summary: `Seller representation is for Spanish Trail, Las Vegas 89113 only. Dr. Jan Duffy prices from enclave comps, not a valley average. As of ${marketStats.date_label}: median ${formatMedianPrice(marketStats.median_price)}. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: COMMUNITY_LOCATION },
      { label: 'Size', value: COMMUNITY_SIZE },
      {
        label: 'Pricing',
        value: `Community median ${formatMedianPrice(marketStats.median_price)} as of ${marketStats.date_label}. List price still comes from the street, square footage, and golf exposure—not this median.`,
      },
    ],
    features: [
      'Enclave CMAs for The Estates through The Villas',
      'Gate-access marketing for buyer agents and private showings',
      'HOA and Architectural Review notes before you list',
      'Berkshire Hathaway HomeServices Nevada Properties listing desk',
    ],
    links: [
      { href: '/spanish-trail-market-report', label: 'Market report' },
      { href: '/spanish-trail-homes-for-sale-las-vegas', label: 'Current inventory' },
      { href: '/contact', label: 'Request a CMA' },
    ],
  },
  relocation: {
    title: 'Spanish Trail relocation overview',
    summary: `Out-of-state buyers can purchase inside Spanish Trail, Las Vegas 89113, without living here first. Dr. Jan Duffy runs virtual tours, gate-access video, and remote closings. Berkshire Hathaway HomeServices Nevada Properties. Call ${GBP_PHONE_DISPLAY}.`,
    facts: [
      { label: 'Location', value: COMMUNITY_LOCATION },
      { label: 'Size', value: COMMUNITY_SIZE },
      {
        label: 'Pricing',
        value: `Confirm the street with a CMA. Community median ${formatMedianPrice(marketStats.median_price)} as of ${marketStats.date_label} is a snapshot, not an offer number.`,
      },
    ],
    features: [
      'Virtual and recorded gate-access tours of specific streets',
      'Eleven-neighborhood matching before you fly in',
      'Remote inspection, appraisal, and closing coordination',
      `Office hours: ${GBP_HOURS_LABEL}`,
    ],
    links: [
      { href: '/buyers', label: 'Buyer guide' },
      { href: '/neighborhoods', label: 'Neighborhoods' },
      { href: '/contact', label: 'Plan a remote tour' },
    ],
  },
}
