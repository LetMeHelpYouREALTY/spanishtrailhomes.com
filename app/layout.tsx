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
    '@type': 'RealEstateAgent',
    '@id': `${siteUrl}/#real-estate-agent`,
    name: 'Spanish Trail Homes | Dr. Janet Duffy',
    description: 'Dr. Janet Duffy specializes in Spanish Trail Country Club luxury real estate, offering expert guidance on guard-gated communities, golf course homes, and private club living in Las Vegas, Nevada.',
    image: `${siteUrl}/og-image.png`,
    url: siteUrl,
    telephone: '+1-702-364-5050',
    email: 'info@spanishtrailhomes.com',
    priceRange: '$$$',
    founder: {
      '@type': 'Person',
      '@id': `${siteUrl}/#dr-janet-duffy`,
      name: 'Dr. Janet Duffy',
      jobTitle: 'Real Estate Agent & Spanish Trail Specialist',
      email: 'janet.duffy@bhhsnv.com',
      telephone: '+1-702-364-5050',
      image: `${siteUrl}/og-image.png`,
      alumniOf: 'Berkshire Hathaway HomeServices Nevada Properties',
      knowsAbout: [
        'Spanish Trail Country Club Real Estate',
        'Las Vegas Luxury Homes',
        'Guard-Gated Communities',
        'Golf Course Properties',
        'Summerlin Real Estate',
        'Spring Valley Homes',
        '89117 ZIP Code Properties',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5050 Spanish Trail Ln.',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89117',
        addressCountry: 'US',
      },
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        '@id': 'https://en.wikipedia.org/wiki/Las_Vegas',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Spanish Trail',
        addressRegion: 'NV',
        postalCode: '89117',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Summerlin',
        addressRegion: 'NV',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Spring Valley',
        addressRegion: 'NV',
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
    sameAs: [
      'https://www.facebook.com/spanishtrailhomes',
      'https://www.instagram.com/spanishtrailhomes',
      'https://www.linkedin.com/company/spanishtrailhomes',
      'https://www.youtube.com/@spanishtrailhomes',
    ],
    knowsAbout: [
      'Luxury Real Estate',
      'Golf Course Homes',
      'Guard-Gated Communities',
      'Spanish Trail Country Club',
      'Las Vegas Real Estate Market',
      'Private Club Memberships',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Spanish Trail Homes',
    url: siteUrl,
    description: 'Spanish Trail Homes offers comprehensive real estate services for Spanish Trail Country Club, featuring guard-gated luxury homes, golf course properties, and private club living in Las Vegas, NV.',
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?query={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@id': `${siteUrl}/#real-estate-agent`,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Spanish Trail Homes',
    url: siteUrl,
    logo: `${siteUrl}/og-image.png`,
    description: 'Spanish Trail Homes by Dr. Janet Duffy provides expert real estate services for Spanish Trail Country Club and surrounding Las Vegas luxury communities.',
    email: 'info@spanishtrailhomes.com',
    telephone: '+1-702-364-5050',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5050 Spanish Trail Ln.',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89117',
      addressCountry: 'US',
    },
    founder: {
      '@id': `${siteUrl}/#dr-janet-duffy`,
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
    default: 'Spanish Trail Homes Las Vegas | Guard-Gated Golf Community 89117 | Dr. Janet Duffy',
    template: '%s | Spanish Trail Homes',
  },
  description:
    'Expert Spanish Trail real estate agent Dr. Janet Duffy specializes in guard-gated luxury homes, golf course properties, and private club living in Las Vegas 89117. Explore Spanish Trail Country Club homes for sale, membership options, and 27-hole championship golf course community.',
  keywords: [
    'Spanish Trail homes for sale',
    'Spanish Trail real estate agent',
    'Las Vegas guard-gated communities',
    'Spanish Trail Country Club homes',
    '89117 luxury homes',
    'Las Vegas golf course homes',
    'Dr. Janet Duffy realtor',
    'Spanish Trail neighborhoods',
    'guard gated Las Vegas',
    'Summerlin luxury real estate',
    'Spring Valley homes',
    'private golf club Las Vegas',
    'Spanish Trail estates',
    'Las Vegas gated community homes',
    'Spanish Trail townhomes',
    'Spanish Trail villas',
    'luxury homes near Las Vegas Strip',
    'Berkshire Hathaway Las Vegas',
  ],
  category: 'Real Estate',
  applicationName: 'Spanish Trail Homes',
  authors: [{ name: 'Dr. Janet Duffy', url: 'https://www.spanishtrailhomes.com' }],
  creator: 'Dr. Janet Duffy',
  publisher: 'Spanish Trail Homes',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Spanish Trail Homes Las Vegas | Guard-Gated Golf Community | Dr. Janet Duffy',
    description:
      'Discover Spanish Trail Country Club luxury homes for sale in Las Vegas 89117. Guard-gated community with 27-hole championship golf, 640+ acres, and 11 unique neighborhoods. Expert guidance from Dr. Janet Duffy, Berkshire Hathaway real estate specialist.',
    siteName: 'Spanish Trail Homes',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Spanish Trail Homes - Guard-Gated Golf Community Las Vegas',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@spanishtrailhomes',
    creator: '@spanishtrailhomes',
    title: 'Spanish Trail Homes Las Vegas | Guard-Gated Golf Community',
    description:
      'Explore Spanish Trail Country Club homes for sale in Las Vegas 89117. 27-hole championship golf, guard-gated luxury, 11 neighborhoods. Expert agent Dr. Janet Duffy.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        alt: 'Spanish Trail Homes - Luxury Guard-Gated Community',
      },
    ],
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
