import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import './globals.css'

const siteUrl = 'https://www.spanishtrailhomes.com'

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${siteUrl}/#organization`,
    name: 'Spanish Trail Homes | Dr. Janet Duffy',
    alternateName: 'Spanish Trail Homes',
    description: 'Premier real estate specialist for Spanish Trail Country Club and Las Vegas luxury properties. Expert in guard-gated communities, golf course estates, and private club living.',
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
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
        '@type': 'Neighborhood',
        name: 'Spanish Trail',
        containedInPlace: {
          '@type': 'City',
          name: 'Las Vegas',
        },
      },
      {
        '@type': 'Neighborhood',
        name: 'Summerlin',
        containedInPlace: {
          '@type': 'City',
          name: 'Las Vegas',
        },
      },
      {
        '@type': 'Neighborhood',
        name: 'Spring Valley',
        containedInPlace: {
          '@type': 'City',
          name: 'Las Vegas',
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
    sameAs: [
      'https://www.facebook.com/spanishtrailhomes',
      'https://www.instagram.com/spanishtrailhomes',
      'https://www.linkedin.com/company/spanishtrailhomes',
      'https://www.youtube.com/@spanishtrailhomes',
    ],
    knowsAbout: [
      'Luxury Real Estate',
      'Golf Course Properties',
      'Guard-Gated Communities',
      'Spanish Trail Country Club',
      'Las Vegas Luxury Homes',
      'Resort-Style Living',
    ],
    slogan: 'Your Guide to Spanish Trail Country Club Living',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      '@id': `${siteUrl}/#founder`,
      name: 'Dr. Janet Duffy',
    },
    employee: {
      '@type': 'Person',
      '@id': `${siteUrl}/#founder`,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#founder`,
    name: 'Dr. Janet Duffy',
    jobTitle: 'Real Estate Agent & Spanish Trail Specialist',
    description: 'Dr. Janet Duffy is a licensed real estate professional specializing in Spanish Trail Country Club properties and Las Vegas luxury homes. With deep knowledge of guard-gated communities and private club amenities, Dr. Duffy provides expert guidance for buyers and sellers.',
    image: `${siteUrl}/og-image.png`,
    url: siteUrl,
    email: 'janet.duffy@bhhsnv.com',
    telephone: '+1-702-364-5050',
    worksFor: {
      '@id': `${siteUrl}/#organization`,
    },
    affiliation: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    knowsAbout: [
      'Spanish Trail Real Estate',
      'Luxury Home Sales',
      'Golf Course Properties',
      'Country Club Memberships',
      'Las Vegas Market Analysis',
      'Investment Properties',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.linkedin.com/company/spanishtrailhomes',
    ],
    alumniOf: 'Doctorate Degree',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Spanish Trail Homes',
    url: siteUrl,
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
    about: {
      '@type': 'Thing',
      name: 'Spanish Trail Country Club Real Estate',
      description: 'Guard-gated luxury homes, golf course properties, and private club living in Las Vegas',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${siteUrl}/#breadcrumb`,
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f2b1e',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
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
        className="antialiased"
        style={{
          fontFamily: 'var(--font-lato, Lato, system-ui, sans-serif)',
        }}
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
