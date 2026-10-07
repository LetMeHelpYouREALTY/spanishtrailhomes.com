import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import { CalendlyWidgetScript } from '@/components/calendly-widget-script'
import { CalendlyEventListener } from '@/components/calendly-event-listener'
import { FloatingCalendlyButton } from '@/components/floating-calendly-button'
import './globals.css'
import { structuredDataSiteUrl, getCanonicalUrl, createPersonSchema, createOrganizationSchema } from '@/lib/structuredData'
import { getAbsoluteSiteImageUrl } from '@/lib/cloudflare-images'
import { getAssetAlt, sitePhotoOg } from '@/lib/site-images'
import {
  GBP_AREA_SERVED,
  GBP_DESCRIPTION,
  GBP_EMAIL,
  GBP_GEO,
  GBP_GEO_POSITION,
  GBP_ICBM,
  GBP_KNOWS_ABOUT,
  GBP_LEGAL_NAME,
  GBP_MAIN_HOURS_CLOSES,
  GBP_MAIN_HOURS_OPENS,
  GBP_PHONE_E164,
  GBP_POSTAL,
  GBP_PRICE_RANGE,
  GBP_LOCALITY,
  GBP_REGION,
  GBP_SAME_AS,
  GBP_MAPS_URL,
  GBP_SPECIALIST_NAME,
  GBP_STREET,
  GBP_COUNTRY,
  SITE_PRIMARY_DESCRIPTION,
  SITE_PRIMARY_TITLE,
  SITE_SOCIAL_TITLE,
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
const rootDefaultDescription = SITE_PRIMARY_DESCRIPTION

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': localBusinessId,
    name: GBP_LEGAL_NAME,
    alternateName: ['Spanish Trail Homes', GBP_SPECIALIST_NAME],
    description: GBP_DESCRIPTION,
    image: [
      getAbsoluteSiteImageUrl('duffy-circle-canonical'),
      getAbsoluteSiteImageUrl('h1-office-exterior'),
      getAbsoluteSiteImageUrl('h1-guard-gate'),
      getAbsoluteSiteImageUrl('h1-golf-fairway'),
      getAbsoluteSiteImageUrl('h1-luxury-estate'),
      getAbsoluteSiteImageUrl('h2-accessible-entrance'),
      getAbsoluteSiteImageUrl('h1-contact-office'),
      getAbsoluteSiteImageUrl('h2-directions-approach'),
    ],
    photo: [
      {
        '@type': 'ImageObject',
        contentUrl: getAbsoluteSiteImageUrl('h1-office-exterior'),
        name: getAssetAlt('h1-office-exterior'),
      },
      {
        '@type': 'ImageObject',
        contentUrl: getAbsoluteSiteImageUrl('h1-guard-gate'),
        name: getAssetAlt('h1-guard-gate'),
      },
      {
        '@type': 'ImageObject',
        contentUrl: getAbsoluteSiteImageUrl('h2-accessible-entrance'),
        name: getAssetAlt('h2-accessible-entrance'),
      },
    ],
    hasMap: GBP_MAPS_URL,
    url: siteUrl,
    telephone: GBP_PHONE_E164,
    email: GBP_EMAIL,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer service',
      telephone: GBP_PHONE_E164,
      email: GBP_EMAIL,
    },
    priceRange: GBP_PRICE_RANGE,
    knowsAbout: [...GBP_KNOWS_ABOUT],
    areaServed: GBP_AREA_SERVED,
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
    parentOrganization: { '@id': `${siteUrl}#organization` },
    memberOf: { '@id': `${siteUrl}#organization` },
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
    default: SITE_PRIMARY_TITLE,
    template: '%s | Spanish Trail Homes',
  },
  description: rootDefaultDescription,
  other: {
    'geo.region': 'US-NV',
    'geo.placename': GBP_LOCALITY,
    'geo.position': GBP_GEO_POSITION,
    ICBM: GBP_ICBM,
  },
  category: 'Real Estate',
  applicationName: GBP_LEGAL_NAME,
  authors: [{ name: 'Dr. Jan Duffy' }],
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
  openGraph: {
    // og:type is business.business in <head>. Next.js only emits its built-in types, and a second og:type would duplicate this one.
    url: siteUrl,
    title: SITE_SOCIAL_TITLE,
    description: rootDefaultDescription,
    siteName: GBP_LEGAL_NAME,
    images: [sitePhotoOg('h1-guard-gate')],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_SOCIAL_TITLE,
    description: rootDefaultDescription,
    images: [sitePhotoOg('h1-guard-gate')],
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
        <link rel="preconnect" href="https://imagedelivery.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://d1buiexcd5gara.cloudfront.net" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        {/* Open Graph contact fields require property=, which metadata.other does not emit. */}
        <meta property="og:type" content="business.business" />
        <meta property="og:business:contact_data:street_address" content={GBP_STREET} />
        <meta property="og:business:contact_data:locality" content={GBP_LOCALITY} />
        <meta property="og:business:contact_data:region" content={GBP_REGION} />
        <meta property="og:business:contact_data:postal_code" content={GBP_POSTAL} />
        <meta property="og:business:contact_data:country_name" content="USA" />
        
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
