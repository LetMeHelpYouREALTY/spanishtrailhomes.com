import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import { CalendlyWidgetScript } from '@/components/calendly-widget-script'
import { CalendlyEventListener } from '@/components/calendly-event-listener'
import { FloatingCalendlyButton } from '@/components/floating-calendly-button'
import './globals.css'
import { createOgImageUrl, structuredDataSiteUrl, getCanonicalUrl, createPersonSchema, createOrganizationSchema } from '@/lib/structuredData'
import {
  GBP_DESCRIPTION,
  GBP_EMAIL,
  GBP_GEO,
  GBP_LEGAL_NAME,
  GBP_MAIN_HOURS_CLOSES,
  GBP_MAIN_HOURS_OPENS,
  GBP_PHONE_E164,
  GBP_POSTAL,
  GBP_LOCALITY,
  GBP_REGION,
  GBP_SAME_AS,
  GBP_SERVICE_AREA_LABEL,
  GBP_STREET,
  GBP_COUNTRY,
} from '@/lib/gbp-business'

const siteUrl = structuredDataSiteUrl

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
  fallback: ['Georgia', 'serif'],
})

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

const localBusinessId = `${siteUrl}#localBusiness`

/** Default SERP/social summary for routes without page-level metadata (keep in sync across description + OG + Twitter). */
const rootDefaultDescription =
  'Spanish Trail guard-gated homes, Las Vegas NV 89113. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties—listings and local guidance.'

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': localBusinessId,
    name: GBP_LEGAL_NAME,
    description: GBP_DESCRIPTION,
    image: createOgImageUrl({
      title: 'Spanish Trail Homes & Country Club',
      subtitle: 'Guard-gated Las Vegas luxury real estate by Dr. Jan Duffy',
      eyebrow: 'SpanishTrailHomes.com',
    }),
    url: siteUrl,
    telephone: GBP_PHONE_E164,
    email: GBP_EMAIL,
    priceRange: '$$$',
    areaServed: [
      {
        '@type': 'Place',
        name: 'Spanish Trail, Las Vegas, NV 89113',
      },
      {
        '@type': 'Place',
        name: GBP_SERVICE_AREA_LABEL,
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: GBP_STREET,
      addressLocality: GBP_LOCALITY,
      addressRegion: GBP_REGION,
      postalCode: GBP_POSTAL,
      addressCountry: GBP_COUNTRY,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GBP_GEO.latitude,
      longitude: GBP_GEO.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: GBP_MAIN_HOURS_OPENS,
        closes: GBP_MAIN_HOURS_CLOSES,
      },
    ],
    accessibilityFeature: ['Wheelchair accessible parking lot', 'Wheelchair accessible entrance'],
    sameAs: [...GBP_SAME_AS],
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Veteran-Owned',
        value: 'Yes',
      },
    ],
    identifier: {
      '@type': 'PropertyValue',
      name: 'Nevada real estate license',
      value: 'S.0197614.LLC',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buying Agent Services',
            description:
              'Exclusive buyer representation across all 11 Spanish Trail neighborhoods with neighborhood matching, market data, and full transaction coordination.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: "Seller's Agent Services",
            description:
              'Neighborhood-level pricing, professional marketing, and complete transaction management for Spanish Trail home sellers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Market Analysis and Home Valuation',
            description:
              'Detailed market analysis rooted in neighborhood-specific data, inventory levels, and buyer demand trends within Spanish Trail.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Relocation and Out-of-State Buyer Support',
            description:
              'Virtual tours, neighborhood comparisons, and remote transaction coordination for buyers relocating to Spanish Trail from out of state.',
          },
        },
      ],
    },
    employee: { '@id': `${siteUrl}#person` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    // Align primary WebSite name with GBP / LocalBusiness for one clear entity; short brand as alternateName.
    name: GBP_LEGAL_NAME,
    alternateName: 'Spanish Trail Homes',
    url: siteUrl,
    inLanguage: 'en-US',
    publisher: { '@id': localBusinessId },
    // No SearchAction: Google requires a working on-site search URL; this site has no /search route.
  },
  createPersonSchema(),
  createOrganizationSchema(),
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: GBP_LEGAL_NAME,
    template: '%s | Spanish Trail Homes',
  },
  description: rootDefaultDescription,
  category: 'Real Estate',
  applicationName: GBP_LEGAL_NAME,
  authors: [{ name: 'Dr. Jan Duffy' }],
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: GBP_LEGAL_NAME,
    description: rootDefaultDescription,
    siteName: GBP_LEGAL_NAME,
    images: [createOgImageUrl({ title: 'Spanish Trail Homes & Club Lifestyle', subtitle: 'Guard-gated Las Vegas real estate by Dr. Jan Duffy' })],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: GBP_LEGAL_NAME,
    description: rootDefaultDescription,
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
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://www.realscout.com" />
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://d1buiexcd5gara.cloudfront.net" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X68WWN997N"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-X68WWN997N', {
  page_path: window.location.pathname,
  send_page_view: true
});`}
        </Script>
        <Script
          id="realscout-widget"
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        {/* LocalBusiness + WebSite JSON-LD — validate in Rich Results Test when editing structuredData above */}
        <Script id="schema-structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(structuredData)}
        </Script>
        <CalendlyWidgetScript />
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
          <CalendlyEventListener />
          <DeployBanner />
          {children}
          <FloatingCalendlyButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
