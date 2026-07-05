import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import './globals.css'
import { createOgImageUrl, structuredDataSiteUrl } from '@/lib/structuredData'

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
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}#drjanetduffy`,
    name: 'Dr. Janet Duffy',
    givenName: 'Janet',
    familyName: 'Duffy',
    honorificPrefix: 'Dr.',
    email: 'DrDuffySells@SpanishTrailHomes.com',
    telephone: '+1-702-766-3299',
    url: `${siteUrl}/about`,
    jobTitle: 'REALTOR® & Spanish Trail Market Expert',
    description: 'Ph.D. in Organizational Leadership specializing in Spanish Trail luxury real estate, guard-gated communities, and concierge real estate advisory in Las Vegas.',
    image: createOgImageUrl({
      title: 'Dr. Janet Duffy',
      subtitle: 'Spanish Trail REALTOR® • Berkshire Hathaway',
      eyebrow: 'SpanishTrailHomes.com',
    }),
    worksFor: {
      '@type': 'Organization',
      '@id': `${siteUrl}#bhhsnv`,
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
      url: 'https://www.bhhsnv.com',
    },
    knowsAbout: [
      'Spanish Trail Real Estate',
      'Las Vegas Luxury Homes',
      'Guard-Gated Communities',
      'Golf Course Properties',
      'Real Estate Market Analysis',
      'Luxury Home Marketing',
    ],
    award: [
      "2025 Berkshire Hathaway HomeServices Chairman's Circle Gold",
      '2024 Las Vegas REALTORS® Top 25 Luxury Producer',
      '2023 RealScout Spanish Trail Market Expert',
      'Institute for Luxury Home Marketing - Certified Luxury Marketing Specialist',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        educationalLevel: 'Doctoral',
        name: 'Ph.D. in Organizational Leadership',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Certified Luxury Marketing Specialist (CLHMS)',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Institute for Luxury Home Marketing',
        },
      },
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Las Vegas REALTORS®',
      },
      {
        '@type': 'Organization',
        name: 'National Association of REALTORS®',
      },
      {
        '@type': 'Organization',
        name: 'Institute for Luxury Home Marketing',
      },
    ],
    sameAs: [
      'https://www.facebook.com/spanishtrailhomes',
      'https://www.instagram.com/spanishtrailhomes',
      'https://www.linkedin.com/company/spanish-trail-homes/?viewAsMember=true',
      'https://www.youtube.com/@spanishtrailhomes',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#bhhsnv`,
    name: 'Berkshire Hathaway HomeServices Nevada Properties',
    url: 'https://www.bhhsnv.com',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo-bhhs.png`,
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices',
      url: 'https://www.berkshirehathawayhs.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${siteUrl}#business`,
    name: 'Spanish Trail Homes | Dr. Janet Duffy',
    alternateName: 'Spanish Trail Homes',
    image: createOgImageUrl({
      title: 'Spanish Trail Homes & Country Club',
      subtitle: 'Guard-gated Las Vegas luxury real estate by Dr. Janet Duffy',
      eyebrow: 'SpanishTrailHomes.com',
    }),
    url: siteUrl,
    telephone: '+1-702-766-3299',
    email: 'DrDuffySells@SpanishTrailHomes.com',
    priceRange: '$$$',
    description: 'Spanish Trail luxury real estate specialist offering expert guidance on guard-gated homes, golf course properties, and country club living in Las Vegas 89117.',
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        containedInPlace: {
          '@type': 'State',
          name: 'Nevada',
        },
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
      'https://www.linkedin.com/company/spanish-trail-homes/?viewAsMember=true',
      'https://www.youtube.com/@spanishtrailhomes',
      'https://maps.app.goo.gl/9QG1zTx5B7jG1wfP9',
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
            description: 'Expert guidance for purchasing Spanish Trail luxury homes',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Seller Representation',
            description: 'Concierge marketing and sales strategy for Spanish Trail properties',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Market Analysis',
            description: 'Real-time Spanish Trail market reports and pricing intelligence',
          },
        },
      ],
    },
    employee: {
      '@id': `${siteUrl}#drjanetduffy`,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    name: 'Spanish Trail Homes',
    url: siteUrl,
    description: 'Spanish Trail luxury real estate, market intelligence, and country club lifestyle insights by Dr. Janet Duffy of Berkshire Hathaway HomeServices.',
    inLanguage: 'en-US',
    publisher: {
      '@id': `${siteUrl}#drjanetduffy`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?query={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
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
    'Spanish Trail homes for sale',
    'Las Vegas luxury real estate',
    'Spanish Trail Country Club',
    'guard gated communities Las Vegas',
    'golf course homes Las Vegas',
    'Dr. Janet Duffy real estate',
    'Las Vegas 89117 homes',
    'Spanish Trail real estate agent',
    'luxury homes Summerlin',
    'guard gated golf communities Nevada',
    'Spanish Trail property listings',
    'Berkshire Hathaway Las Vegas',
    'Spanish Trail luxury estates',
    'Las Vegas country club homes',
    'Spanish Trail neighborhoods',
    'Las Vegas golf course real estate',
  ],
  category: 'Real Estate',
  applicationName: 'Spanish Trail Homes',
  authors: [{ name: 'Dr. Janet Duffy', url: `${siteUrl}/about` }],
  creator: 'Dr. Janet Duffy',
  publisher: 'Spanish Trail Homes',
  alternates: {
    canonical: '/',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas, Spanish Trail',
    'geo.position': '36.109145;-115.282642',
    ICBM: '36.109145, -115.282642',
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
gtag('config', 'G-X68WWN997N', {
  page_path: window.location.pathname,
  send_page_view: true
});`}
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
