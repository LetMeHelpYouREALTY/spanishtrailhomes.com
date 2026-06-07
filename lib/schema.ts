export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': 'https://spanishtrailhomes.com/#organization',
  name: 'Dr. Janet Duffy - Berkshire Hathaway HomeServices',
  legalName: 'Berkshire Hathaway HomeServices Nevada Properties',
  url: 'https://spanishtrailhomes.com',
  logo: 'https://spanishtrailhomes.com/logo.png',
  image: 'https://spanishtrailhomes.com/og-image.png',
  description:
    'Premier luxury real estate specialist for Spanish Trail homes in Las Vegas. Expert representation by Dr. Janet Duffy with Berkshire Hathaway HomeServices.',
  email: 'janet.duffy@bhhsnv.com',
  telephone: '+1-702-555-0100',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Spanish Trail Country Club Area',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89113',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.0726,
    longitude: -115.2557,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Las Vegas',
      '@id': 'https://www.wikidata.org/wiki/Q23768',
    },
    {
      '@type': 'PostalCodeArea',
      postalCode: '89113',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
    },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 36.0726,
      longitude: -115.2557,
    },
    geoRadius: '10',
  },
  knowsAbout: [
    'Spanish Trail Real Estate',
    'Luxury Homes Las Vegas',
    'Golf Course Properties',
    'Guard-Gated Communities',
    'Southwest Las Vegas Real Estate',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Spanish Trail Luxury Homes',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Spanish Trail Estate Homes',
          description:
            'Luxury estate homes in Spanish Trail ranging from $1.2M to $3.5M',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Spanish Trail Villas',
          description:
            'Elegant villa residences in Spanish Trail ranging from $450K to $750K',
        },
      },
    ],
  },
  sameAs: [
    'https://www.bhhsnv.com',
    'https://www.linkedin.com/in/drjanetduffy',
  ],
}

export const placeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  '@id': 'https://spanishtrailhomes.com/#spanish-trail',
  name: 'Spanish Trail Country Club',
  description:
    '640-acre guard-gated golf course community in Southwest Las Vegas featuring 27-hole Robert Trent Jones Jr. championship course, luxury homes, and resort-caliber amenities.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tropicana Ave & Rainbow Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89113',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.0726,
    longitude: -115.2557,
  },
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: '27-Hole Championship Golf Course',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Guard-Gated Security',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Country Club Amenities',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Resort-Style Pools',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Tennis Courts',
      value: 12,
    },
  ],
  containsPlace: [
    {
      '@type': 'Residence',
      name: 'The Estates',
      description:
        'Magnificent custom estates on oversized lots with golf course and mountain views',
    },
    {
      '@type': 'Residence',
      name: 'The Villas',
      description:
        'Elegant attached residences with resort-style living and low maintenance',
    },
    {
      '@type': 'Residence',
      name: 'The Links',
      description:
        'Premium single-family homes directly on the championship golf course',
    },
    {
      '@type': 'Residence',
      name: 'Plum Creek',
      description:
        'Secluded enclave with mature trees and water features throughout',
    },
  ],
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Spanish Trail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spanish Trail is a prestigious 640-acre guard-gated golf course community in Southwest Las Vegas featuring 11 distinct neighborhoods, a 27-hole Robert Trent Jones Jr. championship golf course, and resort-caliber amenities including a 50,000 sq ft clubhouse, fitness centers, tennis courts, and pools.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Spanish Trail located in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spanish Trail is located in Southwest Las Vegas at Tropicana Avenue and Rainbow Boulevard (89113 zip code). It is approximately 10 minutes from the Las Vegas Strip, 15 minutes from Harry Reid International Airport, and 12 minutes from Downtown Summerlin.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the price ranges for homes in Spanish Trail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spanish Trail homes range from approximately $450,000 to $3.5 million. Villa residences start around $450K-$750K, golf course homes range $600K-$1.1M, and custom estates range from $1.2M to $3.5M depending on size, location, and amenities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What neighborhoods are within Spanish Trail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spanish Trail contains 11 distinct neighborhoods including The Estates, The Villas, The Links, Plum Creek, Carmels, Courtyards, Gardens, Islands, Springs, Innisbrook Estates, and Estates West. Each offers unique home styles from lock-and-leave villas to sprawling custom estates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Spanish Trail have HOA fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Spanish Trail has HOA fees that cover guard-gated security, common area maintenance, and access to community amenities. Country club membership fees are separate and optional for access to golf, dining, and full club amenities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What amenities does Spanish Trail Country Club offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spanish Trail Country Club features a 27-hole Robert Trent Jones Jr. golf course, 50,000 sq ft Mediterranean-style clubhouse with fine dining and casual Bar & Grill, state-of-the-art fitness center, two resort-style pools, 12 lighted tennis courts, pickleball courts, and year-round social programming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Spanish Trail a good investment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spanish Trail is considered a strong real estate investment due to its prime Southwest Las Vegas location, limited inventory of luxury homes, established community with mature landscaping, proximity to the Strip and airport, and consistently strong demand for guard-gated golf course properties in the Las Vegas market.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the best real estate agent for Spanish Trail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Janet Duffy with Berkshire Hathaway HomeServices Nevada Properties specializes in Spanish Trail luxury real estate, offering hyperlocal expertise, comprehensive market knowledge, and white-glove service for buyers and sellers in all 11 Spanish Trail neighborhoods.',
      },
    },
  ],
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://spanishtrailhomes.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Spanish Trail Luxury Homes',
      item: 'https://spanishtrailhomes.com',
    },
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://spanishtrailhomes.com/#website',
  url: 'https://spanishtrailhomes.com',
  name: 'Spanish Trail Luxury Homes - Dr. Janet Duffy',
  description:
    'Discover luxury homes for sale in Spanish Trail Las Vegas. Expert real estate representation by Dr. Janet Duffy with Berkshire Hathaway HomeServices.',
  inLanguage: 'en-US',
  publisher: {
    '@id': 'https://spanishtrailhomes.com/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        'https://www.bhhsnv.com/search?q={search_term_string}+Spanish+Trail',
    },
    'query-input': 'required name=search_term_string',
  },
}
