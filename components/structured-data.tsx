export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://spanishtrailhomes.com/#organization',
    name: 'Dr. Janet Duffy - Berkshire Hathaway HomeServices',
    description:
      'Luxury real estate specialist serving Spanish Trail and Las Vegas premium communities. Expert in guard-gated estates, golf course properties, and country club living.',
    url: 'https://spanishtrailhomes.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://spanishtrailhomes.com/logo.png',
      width: 600,
      height: 60,
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://spanishtrailhomes.com/og-image.png',
      width: 1200,
      height: 630,
    },
    telephone: '+1-702-XXX-XXXX',
    email: 'janet.duffy@bhhsnv.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Spanish Trail',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89113',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.0726,
      longitude: -115.2518,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        '@id': 'https://www.wikidata.org/wiki/Q23768',
      },
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 36.0726,
          longitude: -115.2518,
        },
        geoRadius: '25000',
      },
    ],
    priceRange: '$500,000 - $5,000,000+',
    knowsAbout: [
      'Luxury Real Estate',
      'Golf Course Communities',
      'Guard-Gated Communities',
      'Spanish Trail Real Estate',
      'Las Vegas Luxury Homes',
      'Country Club Living',
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
      url: 'https://www.bhhsnv.com',
    },
    sameAs: [
      'https://www.bhhsnv.com',
      'https://www.linkedin.com/company/berkshire-hathaway-homeservices',
      'https://www.facebook.com/BHHSNevada',
      'https://twitter.com/BHHSNevada',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function PlaceStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': 'https://spanishtrailhomes.com/#place',
    name: 'Spanish Trail Country Club',
    description:
      'Exclusive guard-gated golf and country club community spanning 640 acres in Las Vegas. Features a 27-hole Robert Trent Jones Jr. championship golf course, luxury homes, and resort-caliber amenities.',
    url: 'https://spanishtrailhomes.com',
    image: [
      'https://spanishtrailhomes.com/og-image.png',
      'https://images.unsplash.com/photo-1474926143295-7f42d6764bed?q=80&w=2400',
    ],
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
      longitude: -115.2518,
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: '27-hole Championship Golf Course',
        value: 'Robert Trent Jones Jr. Design',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: '640+ Acres',
        value: 'Guard-gated community',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: '50,000 sq ft Clubhouse',
        value: 'Dining and social facilities',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Tennis Courts',
        value: '12 lighted courts',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Aquatic Centers',
        value: 'Two swimming facilities',
      },
    ],
    isAccessibleForFree: false,
    publicAccess: false,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function FAQStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://spanishtrailhomes.com/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of homes are available in Spanish Trail?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spanish Trail offers diverse real estate including luxury estates, golf course villas, townhomes, and condominiums. The community features 11 distinct neighborhoods with properties ranging from $500,000 to over $5 million. Options include single-family homes on the golf course, guard-gated estates, and attached townhomes, all within the 640-acre master-planned community.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Spanish Trail located in Las Vegas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spanish Trail is located at Tropicana Avenue and Rainbow Boulevard in the Spring Valley area of Las Vegas, NV 89113. The community is approximately 15 minutes from Harry Reid International Airport and minutes from the Las Vegas Strip, offering convenient access to entertainment, dining, and shopping while maintaining a private, resort-style atmosphere.',
        },
      },
      {
        '@type': 'Question',
        name: 'What amenities does Spanish Trail Country Club offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spanish Trail Country Club features a 27-hole Robert Trent Jones Jr. championship golf course that has hosted the PGA Las Vegas Invitational five times. The 50,000 square foot clubhouse includes glass-lined dining rooms, terrace seating, and a Bar & Grill. Additional amenities include a renovated fitness facility, two aquatic centers, twelve lighted tennis courts, mature landscaping with lakes and streams, and an active social calendar of member events.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many homes are for sale in Spanish Trail?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spanish Trail typically has 70-80 active listings across single-family homes, condos, and townhomes. Current inventory through Berkshire Hathaway HomeServices includes properties ranging from $500,000 to $600,000 for select offerings, with luxury estates priced up to $5 million+. Contact Dr. Janet Duffy for the most current listings and off-market opportunities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Spanish Trail a guard-gated community?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Spanish Trail is a guard-gated community with three guarded entry points: two gates on Tropicana Avenue and one on Hacienda Avenue. Some neighborhoods within Spanish Trail feature additional secondary gates for enhanced privacy and exclusivity. This multi-layered security approach provides residents with peace of mind while maintaining the prestigious, private nature of the community.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the average home price in Spanish Trail Las Vegas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The average list price for homes in Spanish Trail is approximately $682,000, with properties ranging from townhomes around $500,000 to luxury estates exceeding $5 million. Recent market data shows an average sold price of $651,000 with an average of 60 days on market. Prices vary significantly based on property type, location within the community, golf course views, and upgrades.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function WebSiteStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://spanishtrailhomes.com/#website',
    url: 'https://spanishtrailhomes.com',
    name: 'Spanish Trail Homes Las Vegas',
    description:
      'Luxury real estate in Spanish Trail, Las Vegas. Explore guard-gated estates, golf course homes, and country club living.',
    publisher: {
      '@id': 'https://spanishtrailhomes.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://spanishtrailhomes.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
