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
  // Enhanced RealEstateAgent + LocalBusiness schema with E-E-A-T signals (2026 AEO optimization)
  {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness', 'Organization'],
    '@id': `${siteUrl}/#organization`,
    name: 'Spanish Trail Homes | Dr. Janet Duffy',
    legalName: 'Berkshire Hathaway HomeServices Nevada Properties',
    image: `${siteUrl}/og-image.png`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.png`,
      width: 600,
      height: 60,
    },
    url: siteUrl,
    telephone: '+1-702-364-5050',
    email: 'info@spanishtrailhomes.com',
    priceRange: '$$$',

    // Geographic optimization (GEO 2026)
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        '@id': 'https://en.wikipedia.org/wiki/Las_Vegas',
      },
      {
        '@type': 'Neighborhood',
        name: 'Spanish Trail',
        containedInPlace: { '@type': 'City', name: 'Las Vegas', addressRegion: 'NV' },
      },
      {
        '@type': 'Neighborhood',
        name: 'Summerlin',
        containedInPlace: { '@type': 'City', name: 'Las Vegas', addressRegion: 'NV' },
      },
      {
        '@type': 'Neighborhood',
        name: 'Spring Valley',
        containedInPlace: { '@type': 'City', name: 'Las Vegas', addressRegion: 'NV' },
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

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
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

    // E-E-A-T signals for AEO (Experience, Expertise, Authoritativeness, Trustworthiness)
    founder: {
      '@type': 'Person',
      name: 'Dr. Janet Duffy',
      jobTitle: 'Real Estate Advisor',
      description: 'Luxury real estate specialist serving Spanish Trail and guard-gated Las Vegas communities',
      url: `${siteUrl}/about`,
    },

    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices',
      url: 'https://www.bhhsnv.com',
    },

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: 127,
    },

    sameAs: [
      'https://www.facebook.com/spanishtrailhomes',
      'https://www.instagram.com/spanishtrailhomes',
      'https://www.linkedin.com/company/spanishtrailhomes',
      'https://www.youtube.com/@spanishtrailhomes',
    ],

    // Additional business properties for local SEO
    slogan: 'Guard-gated luxury real estate in Las Vegas',
    description:
      'Spanish Trail Homes by Dr. Janet Duffy offers expert guidance for buyers and sellers in Las Vegas guard-gated communities, including Spanish Trail Country Club, with comprehensive market insights and concierge-level service.',
  },

  // WebSite with enhanced search capability
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Spanish Trail Homes',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?query={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
  },

  // BreadcrumbList for navigation (SEO 2026)
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
    default: 'Spanish Trail Country Club | Private Club in Las Vegas',
    template: '%s | Spanish Trail Homes',
  },
  description:
    'Spanish Trail Homes by Dr. Janet Duffy offers guard-gated real estate, membership insights, and private club amenities minutes from the Las Vegas Strip.',

  // Enhanced keywords for GEO + AEO (2026 local search optimization)
  keywords: [
    'Spanish Trail homes',
    'Las Vegas luxury real estate',
    'Spanish Trail Country Club',
    'guard gated communities Las Vegas',
    'golf course homes Las Vegas',
    'Dr. Janet Duffy real estate',
    'Las Vegas 89117 homes',
    'Spanish Trail real estate agent',
    'luxury homes near Las Vegas Strip',
    'Summerlin guard-gated homes',
    'Spring Valley golf communities',
    'Berkshire Hathaway Las Vegas',
    'private golf course homes Nevada',
  ],

  category: 'Real Estate',
  applicationName: 'Spanish Trail Homes',
  authors: [{ name: 'Dr. Janet Duffy', url: `${siteUrl}/about` }],
  creator: 'Dr. Janet Duffy',
  publisher: 'Berkshire Hathaway HomeServices Nevada Properties',

  alternates: {
    canonical: '/',
  },

  // Enhanced Open Graph for social sharing + AEO
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
        alt: 'Spanish Trail Homes - Guard-gated luxury real estate in Las Vegas',
      },
    ],
    locale: 'en_US',
    countryName: 'United States',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@spanishtrailhomes',
    creator: '@drjanetduffy',
    title: 'Spanish Trail Homes | Private Club in Las Vegas',
    description:
      'Find Spanish Trail Country Club homes, membership details, and private events support with Dr. Janet Duffy.',
    images: [`${siteUrl}/og-image.png`],
  },

  // Enhanced robots configuration for AI crawlers (AEO 2026)
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // Geographic metadata for local SEO (GEO 2026)
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas',
    'geo.position': '36.109145;-115.282642',
    'ICBM': '36.109145, -115.282642',
    'geo.locality': 'Spanish Trail',
    'geo.postalcode': '89117',
  },

  themeColor: '#0f2b1e',
  colorScheme: 'light',

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  // Performance metadata
  manifest: '/site.webmanifest',
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
