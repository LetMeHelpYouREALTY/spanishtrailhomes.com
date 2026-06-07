import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import './globals.css'

const siteUrl = 'https://www.spanishtrailhomes.com'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
})

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Spanish Trail Homes',
    legalName: 'Spanish Trail Homes by Dr. Janet Duffy',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
    image: `${siteUrl}/og-image.png`,
    description: 'Premier real estate services specializing in Spanish Trail Country Club luxury homes, guard-gated communities, and golf course properties in Las Vegas, Nevada.',
    foundingDate: '2015',
    founder: {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5050 Spanish Trail Ln.',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89117',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-702-364-5050',
      contactType: 'customer service',
      email: 'info@spanishtrailhomes.com',
      areaServed: ['US', 'NV'],
      availableLanguage: ['English', 'Spanish'],
    },
    sameAs: [
      'https://www.facebook.com/spanishtrailhomes',
      'https://www.instagram.com/spanishtrailhomes',
      'https://www.linkedin.com/company/spanishtrailhomes',
      'https://www.youtube.com/@spanishtrailhomes',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
      url: 'https://www.bhhsnv.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: 'Dr. Janet Duffy',
    givenName: 'Janet',
    familyName: 'Duffy',
    honorificPrefix: 'Dr.',
    jobTitle: 'Real Estate Agent',
    description: 'Licensed real estate professional specializing in Spanish Trail Country Club luxury homes, golf course properties, and guard-gated communities in Las Vegas.',
    image: `${siteUrl}/og-image.png`,
    url: siteUrl,
    email: 'janet.duffy@bhhsnv.com',
    telephone: '+1-702-364-5050',
    knowsAbout: [
      'Spanish Trail Country Club',
      'Las Vegas Luxury Real Estate',
      'Golf Course Homes',
      'Guard-Gated Communities',
      'Spanish Trail Neighborhoods',
      'Country Club Memberships',
      'Luxury Home Marketing',
      'Real Estate Investment',
      'Summerlin Real Estate',
      'Las Vegas 89117 Homes',
    ],
    knowsLanguage: ['en-US', 'es'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89117',
      addressCountry: 'US',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    memberOf: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
    },
    sameAs: [
      'https://www.linkedin.com/in/drjanetduffy',
      'https://www.bhhsnv.com/agents/janet-duffy',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${siteUrl}/#realestate`,
    name: 'Spanish Trail Homes | Dr. Janet Duffy',
    alternateName: 'Spanish Trail Homes',
    image: `${siteUrl}/og-image.png`,
    url: siteUrl,
    telephone: '+1-702-364-5050',
    email: 'info@spanishtrailhomes.com',
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Wire Transfer',
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        '@id': 'https://www.wikidata.org/wiki/Q23768',
      },
      {
        '@type': 'Place',
        name: 'Spanish Trail, Las Vegas, NV 89117',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 36.109145,
          longitude: -115.282642,
        },
      },
      {
        '@type': 'Place',
        name: 'Summerlin, Las Vegas, NV',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 36.1699,
          longitude: -115.3267,
        },
      },
      {
        '@type': 'Place',
        name: 'Spring Valley, Las Vegas, NV',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 36.1080,
          longitude: -115.2458,
        },
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 36.109145,
        longitude: -115.282642,
      },
      geoRadius: '25000',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5050 Spanish Trail Ln.',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89117',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.109145,
      longitude: -115.282642,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Home Sales',
            description: 'Expert representation for buying and selling luxury homes in Spanish Trail Country Club and surrounding Las Vegas communities.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Golf Course Property Specialist',
            description: 'Specialized knowledge of golf course homes and country club properties in guard-gated communities.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buyer Representation',
            description: 'Comprehensive buyer services including property search, negotiation, and closing support.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Seller Marketing',
            description: 'Premium marketing services for Spanish Trail luxury home sellers including professional photography, virtual tours, and targeted advertising.',
          },
        },
      ],
    },
    knowsAbout: [
      'Spanish Trail Country Club',
      'Las Vegas Luxury Real Estate',
      'Golf Course Communities',
      'Guard-Gated Homes',
      '89117 Real Estate',
      'Country Club Memberships',
    ],
    employee: {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
    },
    sameAs: [
      'https://www.facebook.com/spanishtrailhomes',
      'https://www.instagram.com/spanishtrailhomes',
      'https://www.linkedin.com/company/spanishtrailhomes',
      'https://www.youtube.com/@spanishtrailhomes',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Spanish Trail Homes',
    url: siteUrl,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?query={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
    ],
  },
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Spanish Trail Homes For Sale Las Vegas 89117 | Dr. Janet Duffy Real Estate',
    template: '%s | Spanish Trail Homes',
  },
  description:
    'Find Spanish Trail Country Club homes for sale in Las Vegas 89117 with Dr. Janet Duffy, BHHS specialist in guard-gated golf course luxury properties. View estates, villas, townhomes, and private listings in 11 neighborhoods featuring 27-hole championship golf, clubhouse amenities, and 24/7 guard-gate security.',
  keywords: [
    'Spanish Trail homes for sale',
    'Spanish Trail Country Club Las Vegas',
    'Las Vegas 89117 homes',
    'guard gated golf communities Las Vegas',
    'golf course homes Las Vegas',
    'Spanish Trail real estate agent',
    'Dr. Janet Duffy realtor',
    'Berkshire Hathaway Las Vegas',
    'Spanish Trail luxury estates',
    'Spanish Trail neighborhoods',
    'Robert Trent Jones golf course homes',
    'Las Vegas country club homes',
    'Summerlin luxury real estate',
    'Spring Valley guard gated homes',
    'Spanish Trail villas townhomes',
  ],
  category: 'Real Estate',
  applicationName: 'Spanish Trail Homes',
  authors: [{ name: 'Dr. Janet Duffy', url: 'https://www.bhhsnv.com/agents/janet-duffy' }],
  creator: 'Dr. Janet Duffy',
  publisher: 'Spanish Trail Homes',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Spanish Trail Homes For Sale Las Vegas 89117 | Guard-Gated Golf Course Luxury',
    description:
      'Explore Spanish Trail Country Club homes for sale: guard-gated estates, golf villas, and luxury townhomes in Las Vegas 89117. Expert guidance from Dr. Janet Duffy, Berkshire Hathaway specialist in 27-hole championship golf course properties.',
    siteName: 'Spanish Trail Homes',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Spanish Trail Country Club Homes Las Vegas',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Homes Las Vegas 89117 | Golf Course Luxury Real Estate',
    description:
      'Find Spanish Trail Country Club homes: guard-gated golf estates, villas, townhomes. Expert representation by Dr. Janet Duffy, BHHS specialist.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@spanishtrailhomes',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#0f2b1e',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas',
    'geo.position': '36.109145;-115.282642',
    'ICBM': '36.109145, -115.282642',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X68WWN997N"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-X68WWN997N');`}
        </Script>
        <Script
          id="realscout-widget"
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="beforeInteractive"
        />
        <Script id="schema-structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(structuredData)}
        </Script>
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="theme"
        >
          <DeployBanner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
