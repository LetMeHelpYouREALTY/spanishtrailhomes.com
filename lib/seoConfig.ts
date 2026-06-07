/**
 * SEO Configuration for Spanish Trail Homes
 * Optimized for 2026 best practices: SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization)
 */

export const seoConfig = {
  siteName: 'Spanish Trail Homes',
  siteUrl: 'https://www.spanishtrailhomes.com',
  siteDescription:
    'Spanish Trail luxury real estate, market intelligence, and country club lifestyle insights by Dr. Janet Duffy of Berkshire Hathaway HomeServices.',

  // Geographic targeting for local SEO
  geo: {
    region: 'US-NV',
    placename: 'Las Vegas, Spanish Trail',
    position: '36.109145;-115.282642',
    latitude: 36.109145,
    longitude: -115.282642,
  },

  // Business information
  business: {
    name: 'Spanish Trail Homes | Dr. Janet Duffy',
    legalName: 'Dr. Janet Duffy, REALTOR®',
    phone: '+1-702-766-3299',
    email: 'DrDuffySells@SpanishTrailHomes.com',
    address: {
      streetAddress: '5050 Spanish Trail Ln.',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89117',
      addressCountry: 'US',
    },
  },

  // Agent information for E-E-A-T (Experience, Expertise, Authoritativeness, Trust)
  agent: {
    name: 'Dr. Janet Duffy',
    honorificPrefix: 'Dr.',
    jobTitle: 'REALTOR® & Spanish Trail Market Expert',
    email: 'DrDuffySells@SpanishTrailHomes.com',
    phone: '+1-702-766-3299',
    credentials: [
      'Ph.D. in Organizational Leadership',
      'Certified Luxury Marketing Specialist (CLHMS)',
      "Berkshire Hathaway HomeServices Chairman's Circle Gold",
      'Las Vegas REALTORS® Top 25 Luxury Producer',
      'RealScout Spanish Trail Market Expert',
    ],
    expertise: [
      'Spanish Trail Real Estate',
      'Las Vegas Luxury Homes',
      'Guard-Gated Communities',
      'Golf Course Properties',
      'Real Estate Market Analysis',
      'Luxury Home Marketing',
    ],
  },

  // Primary keywords for the site (optimized for 2026 search trends)
  keywords: [
    // Primary location-based keywords
    'Spanish Trail homes',
    'Spanish Trail homes for sale',
    'Spanish Trail real estate',
    'Las Vegas 89117 homes',

    // Secondary location keywords
    'Las Vegas luxury real estate',
    'Spanish Trail Country Club',
    'guard gated communities Las Vegas',
    'golf course homes Las Vegas',

    // Agent/service keywords
    'Dr. Janet Duffy real estate',
    'Spanish Trail real estate agent',
    'Berkshire Hathaway Las Vegas',

    // Property type keywords
    'Spanish Trail luxury estates',
    'Spanish Trail townhomes',
    'Spanish Trail villas',
    'Spanish Trail custom homes',

    // Lifestyle keywords
    'Las Vegas country club homes',
    'Spanish Trail neighborhoods',
    'Las Vegas golf course real estate',
    'guard gated golf communities Nevada',
  ],

  // Social media profiles
  socialProfiles: [
    'https://www.facebook.com/spanishtrailhomes',
    'https://www.instagram.com/spanishtrailhomes',
    'https://www.linkedin.com/company/spanish-trail-homes/?viewAsMember=true',
    'https://www.youtube.com/@spanishtrailhomes',
    'https://maps.app.goo.gl/9QG1zTx5B7jG1wfP9',
  ],

  // Service areas for local SEO
  serviceAreas: [
    'Spanish Trail, Las Vegas, NV',
    'Summerlin, Las Vegas, NV',
    'Spring Valley, Las Vegas, NV',
    'Southwest Las Vegas, NV',
  ],

  // Default Open Graph configuration
  defaultOpenGraph: {
    type: 'website' as const,
    locale: 'en_US',
    siteName: 'Spanish Trail Homes',
  },

  // Default Twitter configuration
  defaultTwitter: {
    card: 'summary_large_image' as const,
    site: '@spanishtrailhomes',
  },

  // Content optimization guidelines for AEO/GEO
  contentGuidelines: {
    // Optimal chunk size for AI model parsing (200-300 words per section)
    chunkSize: { min: 200, max: 300 },
    // Use clear H2/H3 structure for topic segmentation
    headingStructure: 'hierarchical',
    // Include direct question-answer pairs for AEO
    useQAFormat: true,
    // Add data points as standalone citations
    includeDataPoints: true,
  },
}

// Helper function to generate geo meta tags
export const getGeoMetaTags = () => ({
  'geo.region': seoConfig.geo.region,
  'geo.placename': seoConfig.geo.placename,
  'geo.position': seoConfig.geo.position,
  ICBM: `${seoConfig.geo.latitude}, ${seoConfig.geo.longitude}`,
})

// Helper function to generate author information for E-E-A-T
export const getAuthorInfo = () => ({
  name: seoConfig.agent.name,
  jobTitle: seoConfig.agent.jobTitle,
  credentials: seoConfig.agent.credentials,
  expertise: seoConfig.agent.expertise,
})
