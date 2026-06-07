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
  // Organization schema - highest leverage for 2026 AI citations & Knowledge Graph
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: 'Spanish Trail Homes by Dr. Janet Duffy',
    alternateName: 'Spanish Trail Homes',
    url: siteUrl,
    logo: `${siteUrl}/og-image.png`,
    image: `${siteUrl}/og-image.png`,
    telephone: '+1-702-364-5050',
    email: 'janet.duffy@bhhsnv.com',
    description: 'Berkshire Hathaway HomeServices specialist for Spanish Trail luxury real estate, golf course homes, and guard-gated communities in Las Vegas 89117.',
    foundingDate: '2015',
    founder: {
      '@type': 'Person',
      '@id': `${siteUrl}#drjanetduffy`,
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
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        containsPlace: [
          { '@type': 'Neighborhood', name: 'Spanish Trail' },
          { '@type': 'Neighborhood', name: 'Summerlin' },
          { '@type': 'Neighborhood', name: 'Spring Valley' },
          { '@type': 'Neighborhood', name: 'The Ridges' },
          { '@type': 'Neighborhood', name: 'Red Rock Country Club' },
        ],
      },
    ],
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
  // Person schema for Dr. Janet Duffy - entity recognition for AEO
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}#drjanetduffy`,
    name: 'Dr. Janet Duffy',
    givenName: 'Janet',
    familyName: 'Duffy',
    honorificPrefix: 'Dr.',
    jobTitle: 'Real Estate Agent & Spanish Trail Specialist',
    email: 'janet.duffy@bhhsnv.com',
    telephone: '+1-702-364-5050',
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    worksFor: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89117',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Spanish Trail Real Estate',
      'Las Vegas Luxury Homes',
      'Golf Course Communities',
      'Guard-Gated Communities',
      'Summerlin Real Estate',
    ],
    sameAs: [
      'https://www.linkedin.com/in/drjanetduffy',
      'https://www.bhhsnv.com/agent/janet-duffy',
    ],
  },
  // LocalBusiness & RealEstateAgent - for local SEO
  {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${siteUrl}#localbusiness`,
    name: 'Spanish Trail Homes | Dr. Janet Duffy',
    image: `${siteUrl}/og-image.png`,
    url: siteUrl,
    telephone: '+1-702-364-5050',
    email: 'janet.duffy@bhhsnv.com',
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Wire Transfer',
    // Hyperlocal service areas - 2026 best practice (72% of queries are neighborhood-specific)
    areaServed: [
      { '@type': 'PostalCodeArea', postalCode: '89117', addressCountry: 'US' },
      { '@type': 'PostalCodeArea', postalCode: '89144', addressCountry: 'US' },
      { '@type': 'PostalCodeArea', postalCode: '89135', addressCountry: 'US' },
      { '@type': 'Neighborhood', name: 'Spanish Trail', addressRegion: 'NV', addressCountry: 'US' },
      { '@type': 'Neighborhood', name: 'Estates at Spanish Trail', addressRegion: 'NV', addressCountry: 'US' },
      { '@type': 'Neighborhood', name: 'Spanish Trail Courtyards', addressRegion: 'NV', addressCountry: 'US' },
      { '@type': 'Neighborhood', name: 'Spanish Trail Villas', addressRegion: 'NV', addressCountry: 'US' },
      { '@type': 'Neighborhood', name: 'Summerlin', addressRegion: 'NV', addressCountry: 'US' },
      { '@type': 'Neighborhood', name: 'Spring Valley', addressRegion: 'NV', addressCountry: 'US' },
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buyer Representation',
            description: 'Expert guidance for Spanish Trail home buyers',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Seller Representation',
            description: 'Strategic marketing for Spanish Trail home sellers',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Market Analysis',
            description: 'Real-time Spanish Trail market reports and valuations',
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
  },
  // WebSite with SearchAction
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    name: 'Spanish Trail Homes',
    url: siteUrl,
    publisher: {
      '@type': 'Organization',
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
    default: 'Spanish Trail Homes Las Vegas 89117 | Dr. Janet Duffy, Berkshire Hathaway',
    template: '%s | Spanish Trail Homes',
  },
  // AEO-optimized description: clear, concise, entity-rich for AI engines
  description:
    'Spanish Trail homes for sale in Las Vegas 89117. Guard-gated golf community with 27-hole Robert Trent Jones Jr. course. Expert guidance from Dr. Janet Duffy, Berkshire Hathaway HomeServices. Real-time market data, private tours, and neighborhood insights.',
  keywords: [
    'Spanish Trail homes for sale',
    'Las Vegas 89117 real estate',
    'Spanish Trail Country Club',
    'guard gated communities Las Vegas',
    'golf course homes Las Vegas',
    'Dr. Janet Duffy Berkshire Hathaway',
    'Summerlin luxury homes',
    'Spring Valley real estate',
    'Robert Trent Jones golf course',
  ],
  category: 'Real Estate',
  applicationName: 'Spanish Trail Homes',
  authors: [{ name: 'Dr. Janet Duffy', url: siteUrl }],
  creator: 'Dr. Janet Duffy',
  publisher: 'Berkshire Hathaway HomeServices Nevada Properties',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Spanish Trail Homes Las Vegas | Guard-Gated Golf Community 89117',
    description:
      'Explore Spanish Trail homes for sale with Dr. Janet Duffy. 27-hole championship golf, custom estates, villas, and luxury amenities in Las Vegas 89117. Berkshire Hathaway HomeServices specialist.',
    siteName: 'Spanish Trail Homes by Dr. Janet Duffy',
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
    title: 'Spanish Trail Homes Las Vegas 89117 | Dr. Janet Duffy',
    description:
      'Guard-gated Spanish Trail homes with 27-hole golf course. Real-time listings, market data, and private tours. Berkshire Hathaway HomeServices specialist.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@spanishtrailhomes',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f2b1e' },
    { media: '(prefers-color-scheme: dark)', color: '#0f2b1e' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas',
    'geo.position': '36.109145;-115.282642',
    ICBM: '36.109145, -115.282642',
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
