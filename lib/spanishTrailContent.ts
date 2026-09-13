export const neighborhoodSpotlights = [
  {
    name: 'The Estates & Estates West',
    description:
      'Custom golf-course estates ranging from 5,000–15,000 sq. ft., many with double-gated motor courts, casitas, and panoramic fairway views along the Sunrise, Ridge, and Canyon courses.',
  },
  {
    name: 'The Courtyards & Gardens',
    description:
      'Lock-and-leave luxury with mature courtyards, private pools, and effortless access to the clubhouse, spa, and dining scenes on Tropicana and Rainbow.',
  },
  {
    name: 'The Links & Carmels',
    description:
      'Fairway villas with wraparound patios, elevated tee-box vistas, and quick cart access to the Robert Trent Jones Jr. course and practice facility.',
  },
  {
    name: 'Springs & Plum Creek',
    description:
      'Tree-lined streets with three- to five-bedroom floor plans, community greenbelts, and a short drive to Bishop Gorman High School (2.2 miles) and Faith Lutheran Middle & High School.',
  },
]

import { marketStats, formatMedianPrice } from './marketStats'

export const marketStatsExport = marketStats

export const marketHighlights = [
  {
    label: 'Total Listings',
    value: `${marketStats.active_listings} Active`,
    trend: '+',
    context: 'Across single-family, condo, and townhome offerings.',
  },
  {
    label: 'Median Price',
    value: formatMedianPrice(marketStats.median_price),
    trend: '-',
    context: 'Spanish Trail guard-gated community.',
  },
  {
    label: 'Price Per Sq Ft',
    value: `$${marketStats.price_per_sqft}`,
    trend: '-',
    context: 'Neighborhood-level data within the gates.',
  },
  {
    label: 'Average Days on Market',
    value: `${marketStats.avg_days_on_market} Days`,
    trend: '-',
    context: 'Balanced pace with luxury buyer activity.',
  },
]

export const featuredListings = [
  {
    address: '8330 Carmel Ridge Court',
    price: '$1,095,000',
    type: 'Single-Family • 3 Bed • 3 Bath • 2,500 Sq Ft',
    mls: 'MLS# 2733586',
    href: 'https://bhhsnv.com/single-family/glv/2733586/8330-carmel-ridge-court-las-vegas-nv-89113',
  },
  {
    address: '7283 Mission Hills Drive',
    price: '$630,000',
    type: 'Condo/Townhome • 2 Bed • 2 Bath • 2,065 Sq Ft',
    mls: 'MLS# 2732075',
    href: 'https://bhhsnv.com/condo-townhouse/glv/2732075/7283-mission-hills-drive-las-vegas-nv-89113',
  },
  {
    address: '22 Burning Tree Court',
    price: '$2,590,000',
    type: 'Estate Residence • 4 Bed • 5 Bath • 6,361 Sq Ft',
    mls: 'MLS# 2732026',
    href: 'https://bhhsnv.com/single-family/glv/2732026/22-burning-tree-court-las-vegas-nv-89113',
  },
]

/** 6 featured listings for preview above RealScout widget (update weekly). */
export const featuredListingsPreview = [
  {
    address: '8330 Carmel Ridge Court',
    price: '$1,095,000',
    beds: 3,
    baths: 3,
    mls: '2733586',
    href: 'https://bhhsnv.com/single-family/glv/2733586/8330-carmel-ridge-court-las-vegas-nv-89113',
    imageId: 'h3-listing-home-a',
  },
  {
    address: '7283 Mission Hills Drive',
    price: '$630,000',
    beds: 2,
    baths: 2,
    mls: '2732075',
    href: 'https://bhhsnv.com/condo-townhouse/glv/2732075/7283-mission-hills-drive-las-vegas-nv-89113',
    imageId: 'h3-listing-home-b',
  },
  {
    address: '22 Burning Tree Court',
    price: '$2,590,000',
    beds: 4,
    baths: 5,
    mls: '2732026',
    href: 'https://bhhsnv.com/single-family/glv/2732026/22-burning-tree-court-las-vegas-nv-89113',
    imageId: 'h3-listing-home-c',
  },
  {
    address: '5120 Cactus Garden Dr',
    price: '$725,000',
    beds: 4,
    baths: 3,
    mls: '2731000',
    href: 'https://bhhsnv.com/',
    imageId: 'h3-listing-home-d',
  },
  {
    address: '5080 Lakes Course Dr',
    price: '$589,000',
    beds: 3,
    baths: 2,
    mls: '2730999',
    href: 'https://bhhsnv.com/',
    imageId: 'h3-listing-home-e',
  },
  {
    address: '5150 Springs Way',
    price: '$699,000',
    beds: 3,
    baths: 2.5,
    mls: '2730998',
    href: 'https://bhhsnv.com/',
    imageId: 'h3-listing-home-f',
  },
]

export const localEssentials = [
  {
    title: 'Private & Charter Schools',
    items: [
      'Bishop Gorman High School – 2.2 miles northeast via S. Rainbow Blvd.',
      'Faith Lutheran Middle & High School – 12 minutes to Summerlin for college-prep curriculum.',
      'The Meadows School – 15 minutes for K-12 gifted and AP programs.',
    ],
  },
  {
    title: 'Dining & Social',
    items: [
      'Spanish Trail Country Club Grill & Patio – members-only dining overlooking the Lakes nine.',
      'The Sundry at UnCommons – chef-driven food hall and lounges, 8 minutes west.',
      'Locale Italian Kitchen & DW Bistro – beloved Rainbow Blvd. staples for brunch and dinner.',
    ],
  },
  {
    title: 'Wellness & Recreation',
    items: [
      'Spanish Trail Fitness & Aquatics – renovated gym, lap lanes, and trainer-led classes.',
      'Spanish Trail Swim & Racquet – twelve lighted tennis courts plus pickleball.',
      'Desert Breeze Park – off-leash dog runs, skate park, and indoor aquatic center nearby.',
    ],
  },
  {
    title: 'Commute & Access',
    items: [
      'I-215 Beltway – 6 minutes to access Summerlin Parkway or McCarran corridor.',
      'Allegiant Stadium & The Strip – 15 minutes east for entertainment and dining.',
      'Harry Reid International Airport – approximately 18 minutes via Tropicana Ave.',
    ],
  },
]

export const homeDeepDive = [
  {
    title: 'Spanish Trail housing update',
    paragraphs: [
      'Spanish Trail homes continue to command premium attention across the west side of the Las Vegas Valley, and 2025 has only intensified demand. Inventory remains intentionally limited, with many sellers opting for private network releases before a property ever reaches the MLS. That means buyers who rely only on public search portals can miss out on Spanish Trail real estate opportunities that align perfectly with their wish list. Working alongside Dr. Jan Duffy provides immediate access to those private channels, pricing intelligence pulled from Berkshire Hathaway HomeServices data, and an honest assessment of where each home sits within the neighborhood’s value spectrum.',
      'The average list-to-sale window for well-prepared Spanish Trail homes has tightened to under 30 days, and buyers often submit offers that include appraisal-gap coverage or flexible rent-backs to appeal to sellers who are simultaneously shopping within the guard gates. Whether you are analyzing the Estates, the Villas, or a golf villa in the Links, understanding micro market velocity is vital. Dr. Duffy maps each enclave’s historical absorption rates, identifies the weeks that attract out-of-state cash buyers, and guides timing strategies so you secure the right property without overpaying.',
    ],
  },
  {
    title: 'Life inside the Spanish Trail gates',
    paragraphs: [
      'Spanish Trail real estate is about more than square footage; it is about instant access to a curated lifestyle that can be felt the moment you drive through the mature tree-lined boulevards. Residents wake up to golf course sunrises, stroll over to the 50,000-square-foot clubhouse for a fitness session, then spend evenings at the Bar & Grill surrounded by neighbors who quickly become lifelong friends. Families leverage the gated streets for cycling, pop-up pickleball matches, and community events hosted on the club lawn. Every home—whether a lock-and-leave villa or a custom estate—sits within minutes of wellness programming, concierge support, and tennis professionals who know members by name.',
      'Because Dr. Duffy lives and works in the western Las Vegas market, she maintains a daily pulse on how residents actually use their amenities. She can recommend which Spanish Trail homes offer the quickest cart path access for golfers who play multiple times a week, which streets capture the best sunset views, and which enclaves provide enhanced security for seasonal homeowners. Her concierge introductions help buyers join social clubs or interest groups even before closing, ensuring the transition from visitor to resident feels effortless and deeply personal.',
    ],
  },
  {
    title: 'Design and renovation tips',
    paragraphs: [
      'Spanish Trail homes showcase a rare blend of timeless architecture and refreshed interiors. Many original estates were crafted by renowned architects who prioritized natural light, interior courtyards, and wide setbacks that frame the Robert Trent Jones Jr. fairways. Over the past decade, homeowners have invested heavily in modernizing kitchens, spa baths, and outdoor lounges, yet the community’s design guidelines maintain a cohesive, elevated aesthetic. Buyers interested in renovation opportunities benefit from Dr. Duffy’s vetted roster of contractors who understand the neighborhood’s review process and can deliver turnkey transformations without compromising historical character.',
      'For clients seeking a contemporary canvas, Dr. Duffy spotlights Spanish Trail real estate offerings that already feature tall pocket doors, climate-controlled wine walls, smart-home integration, and resort-style pools with Baja shelves. For those who prefer to curate their own finishes, she outlines cost ranges, available incentives from local lenders for energy upgrades, and resale strategies that maximize long-term equity. Her design consultations also highlight how to create multi-generational spaces—casitas, flex suites, and wellness studios—that align with today’s luxury buyer expectations.',
    ],
  },
  {
    title: 'Financing and advisory help',
    paragraphs: [
      'Spanish Trail real estate appeals to both primary homeowners and sophisticated investors who recognize the stability of guard-gated communities minutes from Allegiant Stadium, the Strip, and Summerlin. Rental demand for long-term executive leases remains strong, particularly for properties near the Tropicana gate that offer quick freeway access. Dr. Duffy collaborates with Berkshire Hathaway HomeServices mortgage partners to provide scenario planning, whether you need jumbo financing, portfolio loans, or cross-collateralization options that leverage existing assets. She also introduces trusted CPAs who structure 1031 exchanges or wealth advisors who evaluate Spanish Trail homes as part of a broader estate strategy.',
      'Clients appreciate that her counsel extends beyond closing. Quarterly market reviews outline appreciation trends, tax updates impacting Nevada homeowners, and capital improvement projects planned by the Country Club. When it is time to sell, Dr. Duffy’s listing blueprint—complete with professional staging, targeted digital marketing, and private preview events—ensures Spanish Trail homes are positioned to secure the strongest offers. The result: a full-circle advisory experience from acquisition through resale, aligned with the expectations of discerning Las Vegas clientele.',
    ],
  },
]

export const lifestyleHighlights = [
  {
    title: 'Clubhouse & Dining',
    copy: 'A 50,000 sq. ft. clubhouse with glass-lined dining rooms, terrace seating, and a Bar & Grill serving daily cuisine.',
  },
  {
    title: 'Wellness & Recreation',
    copy: 'Renovated fitness facility, two aquatic centers, and twelve lighted tennis courts anchor an active social calendar.',
  },
  {
    title: 'Premier Access',
    copy: 'Minutes to the Strip, Harry Reid International Airport, and neighboring enclaves like The Ridges and Spanish Hills.',
  },
]

export const nearbyCommunities = [
  'The Ridges',
  'Spanish Hills',
  'Red Rock Country Club',
  'The Summit Club',
  'Willow Creek',
  'Tournament Hills',
]

export const neighborhoodClusters = [
  'Carmels',
  'Courtyards',
  'Gardens',
  'Islands',
  'Links',
  'Plum Creek',
  'Springs',
  'Villas',
  'Innisbrook Estates',
  'Estates',
  'Estates West',
]

