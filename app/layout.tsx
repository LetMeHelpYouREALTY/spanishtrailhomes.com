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
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${siteUrl}#business`,
    name: 'Spanish Trail Homes | Dr. Janet Duffy',
    alternateName: 'Spanish Trail Country Club Real Estate',
    description: 'Luxury real estate services specializing in Spanish Trail Country Club guard-gated properties, golf course homes, and private club lifestyle in Las Vegas, Nevada.',
    image: `${siteUrl}/og-image.png`,
    logo: `${siteUrl}/og-image.png`,
    url: siteUrl,
    telephone: '+1-702-364-5050',
    email: 'info@spanishtrailhomes.com',
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Wire Transfer',
    knowsAbout: [
      'Spanish Trail Country Club Real Estate',
      'Guard-Gated Communities Las Vegas',
      'Luxury Golf Course Homes',
      'Las Vegas Luxury Real Estate',
      'Country Club Membership',
      'Spanish Trail Estates',
      'Spanish Trail Villas',
      'Las Vegas Investment Properties',
      'Executive Relocation Services',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        '@id': 'https://www.wikidata.org/wiki/Q23768',
      },
      {
        '@type': 'Place',
        name: 'Spanish Trail Country Club',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          postalCode: '89117',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'Place',
        name: 'The Estates at Spanish Trail',
      },
      {
        '@type': 'Place',
        name: 'Estates West at Spanish Trail',
      },
      {
        '@type': 'Place',
        name: 'The Islands at Spanish Trail',
      },
      {
        '@type': 'Place',
        name: 'The Villas at Spanish Trail',
      },
      {
        '@type': 'Place',
        name: 'The Links at Spanish Trail',
      },
      {
        '@type': 'Place',
        name: 'The Springs at Spanish Trail',
      },
      {
        '@type': 'Place',
        name: 'Plum Creek at Spanish Trail',
      },
      {
        '@type': 'Place',
        name: 'The Courtyards at Spanish Trail',
      },
      {
        '@type': 'Place',
        name: 'The Gardens at Spanish Trail',
      },
      {
        '@type': 'Place',
        name: 'The Lakes at Spanish Trail',
      },
      {
        '@type': 'Place',
        name: 'Sunrise Course Estates',
      },
      {
        '@type': 'Place',
        name: 'Summerlin',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'Place',
        name: 'Spring Valley',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          addressCountry: 'US',
        },
      },
    ],
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
    hasMap: 'https://www.google.com/maps/place/Spanish+Trail+Country+Club/@36.109145,-115.282642',
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
    founder: {
      '@type': 'Person',
      '@id': `${siteUrl}#person`,
      name: 'Dr. Janet Duffy',
      alternateName: 'Dr. Jan Duffy',
      jobTitle: 'Luxury Real Estate Advisor',
      description: 'Dr. Janet Duffy is a luxury real estate specialist with Berkshire Hathaway HomeServices Nevada Properties, focusing exclusively on Spanish Trail Country Club properties in Las Vegas.',
      email: 'jduffy@bhhsnv.com',
      telephone: '+1-702-500-1955',
      url: `${siteUrl}/about`,
      image: `${siteUrl}/og-image.png`,
      worksFor: {
        '@type': 'Organization',
        name: 'Berkshire Hathaway HomeServices Nevada Properties',
        url: 'https://www.bhhsnv.com',
      },
      knowsAbout: [
        'Spanish Trail Real Estate',
        'Luxury Home Sales',
        'Golf Course Properties',
        'Guard-Gated Communities',
        'Country Club Lifestyle',
        'Las Vegas Real Estate Market',
        'Executive Relocation',
        'Investment Properties',
      ],
      affiliation: [
        {
          '@type': 'Organization',
          name: 'Berkshire Hathaway HomeServices',
        },
        {
          '@type': 'Organization',
          name: 'Las Vegas REALTORS',
        },
        {
          '@type': 'Organization',
          name: 'National Association of REALTORS',
        },
      ],
    },
    employee: {
      '@id': `${siteUrl}#person`,
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Buyer Representation',
          description: 'Comprehensive buyer services including property search, negotiation, and transaction management for Spanish Trail homes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Seller Representation',
          description: 'Full-service listing representation including pricing strategy, marketing, staging, and negotiation for Spanish Trail properties.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Market Analysis',
          description: 'Detailed comparative market analysis and valuation services for Spanish Trail Country Club homes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Relocation Services',
          description: 'Executive relocation assistance and concierge services for clients moving to Spanish Trail and Las Vegas.',
        },
      },
    ],
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
    '@id': `${siteUrl}#website`,
    name: 'Spanish Trail Homes',
    url: siteUrl,
    description: 'Comprehensive resource for Spanish Trail Country Club real estate, including active listings, market data, neighborhood guides, and club membership information.',
    publisher: {
      '@id': `${siteUrl}#business`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?query={search_term_string}`,
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
    images: [`${siteUrl}/og-image.png`],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Homes | Private Club in Las Vegas',
    description:
      'Find Spanish Trail Country Club homes, membership details, and private events support with Dr. Janet Duffy.',
    images: [`${siteUrl}/og-image.png`],
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
  themeColor: '#0f2b1e',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
