import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import './globals.css'
import {
  createOgImageUrl,
  structuredDataSiteUrl,
  createPersonSchema,
  createOrganizationSchema,
  createPlaceSchema
} from '@/lib/structuredData'

const siteUrl = structuredDataSiteUrl

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
  // Enhanced LocalBusiness/RealEstateAgent schema with E-E-A-T signals
  {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${siteUrl}#business`,
    name: 'Spanish Trail Homes | Dr. Janet Duffy',
    alternateName: 'Spanish Trail Homes',
    description: 'Award-winning luxury real estate services specializing in Spanish Trail Country Club and Las Vegas 89117 guard-gated communities. Led by Dr. Janet Duffy, Ph.D., with expertise in golf course estates, custom homes, and private club living.',
    image: createOgImageUrl({
      title: 'Spanish Trail Homes & Country Club',
      subtitle: 'Guard-gated Las Vegas luxury real estate by Dr. Janet Duffy',
      eyebrow: 'SpanishTrailHomes.com',
    }),
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.png`,
      caption: 'Spanish Trail Homes by Dr. Janet Duffy',
    },
    url: siteUrl,
    telephone: '+1-702-766-3299',
    email: 'DrDuffySells@SpanishTrailHomes.com',
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Wire Transfer',
    // Enhanced area served with structured data for GEO
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        '@id': 'https://en.wikipedia.org/wiki/Las_Vegas',
      },
      {
        '@type': 'State',
        name: 'Nevada',
        '@id': 'https://en.wikipedia.org/wiki/Nevada',
      },
      {
        '@type': 'PostalCodeArea',
        postalCode: '89117',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
      },
      'Spanish Trail, Las Vegas, NV 89117',
      'Summerlin, Las Vegas, NV',
      'Spring Valley, Las Vegas, NV',
      'Southwest Las Vegas, NV',
      'Henderson, NV',
      'Paradise, NV',
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
      elevation: '2001',
    },
    hasMap: 'https://www.google.com/maps/place/Spanish+Trail+Country+Club',
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
    // Enhanced sameAs for Knowledge Graph (Entity SEO)
    sameAs: [
      'https://www.facebook.com/spanishtrailhomes',
      'https://www.instagram.com/spanishtrailhomes',
      'https://www.linkedin.com/company/spanish-trail-homes/?viewAsMember=true',
      'https://www.youtube.com/@spanishtrailhomes',
    ],
    // Add employee (Person entity) for E-E-A-T
    employee: {
      '@type': 'Person',
      '@id': `${siteUrl}#person`,
      name: 'Dr. Janet Duffy',
      jobTitle: 'Principal Broker & Real Estate Specialist',
    },
    // Parent organization for brand entity
    parentOrganization: {
      '@type': 'RealEstateAgent',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
      url: 'https://www.bhhsnv.com',
    },
    // Add knows about for topical authority (Entity SEO)
    knowsAbout: [
      'Spanish Trail Country Club',
      'Las Vegas Luxury Real Estate',
      'Guard-Gated Golf Communities',
      '89117 Real Estate',
      'Golf Course Estates',
      'Southwest Las Vegas Properties',
      'Estates West',
      'The Carmels',
      'The Courtyards',
      'The Gardens',
      'The Islands',
      'The Links',
      'Plum Creek',
      'The Springs',
      'The Villas',
      'Spanish Trail Townhomes',
      'The Plazas',
    ],
  },
  // Person schema for Dr. Janet Duffy (Entity SEO)
  createPersonSchema(),
  // Organization schema for Knowledge Graph
  createOrganizationSchema(),
  // Place schema for Spanish Trail (GEO optimization)
  createPlaceSchema(),
  // Website schema with enhanced search
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    name: 'Spanish Trail Homes',
    alternateName: 'SpanishTrailHomes.com',
    url: siteUrl,
    description: 'Comprehensive guide to Spanish Trail Country Club real estate, neighborhoods, and luxury living in Las Vegas 89117.',
    publisher: {
      '@type': 'RealEstateAgent',
      '@id': `${siteUrl}#organization`,
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
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Spanish Trail Country Club | Private Club in Las Vegas',
    template: '%s | Spanish Trail Homes',
  },
  description:
    'Spanish Trail Homes by Dr. Janet Duffy offers guard-gated real estate, membership insights, and private club amenities minutes from the Las Vegas Strip.',
  keywords: [
    'Spanish Trail homes',
    'Las Vegas luxury real estate',
    'Spanish Trail Country Club',
    'guard gated communities Las Vegas',
    'golf course homes Las Vegas',
    'Dr. Janet Duffy real estate',
    '89117 real estate',
    'Spanish Trail Estates',
    'Spanish Trail Carmels',
    'Spanish Trail Courtyards',
    'Spanish Trail Gardens',
    'Spanish Trail Links',
    'Spanish Trail Villas',
    'Spanish Trail Townhomes',
    'homes near Bishop Gorman',
    'southwest Las Vegas homes',
    'properties near the Strip',
    'luxury homes near Summerlin',
    'Spring Valley luxury real estate',
    'guard gated golf homes 89117',
    'Spanish Trail neighborhoods',
  ],
  category: 'Real Estate',
  applicationName: 'Spanish Trail Homes',
  authors: [{ name: 'Dr. Janet Duffy' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Spanish Trail Homes | Private Club Living in Las Vegas',
    description:
      'Explore Spanish Trail homes for sale, golf membership opportunities, and concierge-level amenities guided by Dr. Janet Duffy.',
    siteName: 'Spanish Trail Homes',
    images: [createOgImageUrl({ title: 'Spanish Trail Homes & Club Lifestyle', subtitle: 'Guard-gated Las Vegas real estate by Dr. Janet Duffy' })],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Homes | Private Club in Las Vegas',
    description:
      'Find Spanish Trail Country Club homes, membership details, and private events support with Dr. Janet Duffy.',
    images: [createOgImageUrl({ title: 'Spanish Trail Homes', subtitle: 'Luxury guard-gated homes and club expertise', eyebrow: 'SpanishTrailHomes.com' })],
  },
  robots: {
    index: true,
    follow: true,
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
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  themeColor: '#0f2b1e',
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
