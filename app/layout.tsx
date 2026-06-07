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
      width: '1200',
      height: '630',
    },
    image: `${siteUrl}/og-image.png`,
    description: 'Spanish Trail Homes by Dr. Janet Duffy offers guard-gated real estate, membership insights, and private club amenities minutes from the Las Vegas Strip.',
    telephone: '+1-702-364-5050',
    email: 'info@spanishtrailhomes.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5050 Spanish Trail Ln.',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89117',
      addressCountry: 'US',
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
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: 'Dr. Janet Duffy',
    givenName: 'Janet',
    familyName: 'Duffy',
    honorificPrefix: 'Dr.',
    jobTitle: 'Real Estate Specialist',
    description: 'Berkshire Hathaway HomeServices specialist with expertise in Spanish Trail luxury homes, guard-gated communities, and Las Vegas country club real estate.',
    url: siteUrl,
    email: 'janet.duffy@bhhsnv.com',
    telephone: '+1-702-364-5050',
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices',
    },
    knowsAbout: [
      'Spanish Trail Country Club',
      'Las Vegas luxury real estate',
      'Guard-gated communities',
      'Golf course homes',
      'Country club memberships',
      'Summerlin real estate',
      'Spring Valley properties',
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 36.109145,
        longitude: -115.282642,
      },
      geoRadius: '25',
    },
    sameAs: [
      'https://www.linkedin.com/in/drjanetduffy',
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
    description: 'Expert real estate services for Spanish Trail Country Club homes, offering guard-gated properties, market intelligence, and concierge-level guidance for buyers and sellers in Las Vegas 89117.',
    slogan: 'Your Guide to Spanish Trail Luxury Living',
    foundingDate: '2020',
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        '@id': 'https://en.wikipedia.org/wiki/Las_Vegas',
      },
      {
        '@type': 'PostalCodeArea',
        postalCode: '89117',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
      },
    ],
    serviceArea: [
      'Spanish Trail',
      'Summerlin',
      'Spring Valley',
      'The Ridges',
      'Southern Highlands',
    ],
    knowsAbout: [
      'Spanish Trail real estate',
      'Luxury home sales',
      'Country club memberships',
      'Golf course properties',
      'Guard-gated communities',
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
            name: 'Buyer Representation',
            description: 'Expert guidance for Spanish Trail home buyers with market intelligence and access to exclusive listings',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Seller Representation',
            description: 'Strategic marketing and pricing for Spanish Trail luxury home sellers',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Market Analysis',
            description: 'Comprehensive Spanish Trail market reports and property valuations',
          },
        },
      ],
    },
    sameAs: [
      'https://www.facebook.com/spanishtrailhomes',
      'https://www.instagram.com/spanishtrailhomes',
      'https://www.linkedin.com/company/spanishtrailhomes',
      'https://www.youtube.com/@spanishtrailhomes',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Spanish Trail Homes',
    url: siteUrl,
    description: 'Explore Spanish Trail homes for sale, guard-gated amenities, and club lifestyle insights curated by Dr. Janet Duffy of Berkshire Hathaway HomeServices.',
    publisher: {
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
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Spanish Trail Homes - Luxury guard-gated community in Las Vegas',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    countryName: 'United States',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Homes | Private Club in Las Vegas',
    description:
      'Find Spanish Trail Country Club homes, membership details, and private events support with Dr. Janet Duffy.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Spanish Trail Homes - Luxury guard-gated community in Las Vegas',
      },
    ],
    creator: '@spanishtrailhomes',
    site: '@spanishtrailhomes',
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
