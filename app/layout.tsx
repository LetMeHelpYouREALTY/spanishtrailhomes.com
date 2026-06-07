import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import {
  organizationSchema,
  websiteSchema,
  placeSchema,
} from '../lib/schema'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'Spanish Trail Luxury Homes Las Vegas | Dr. Janet Duffy Real Estate',
  description:
    'Discover luxury homes for sale in Spanish Trail, Las Vegas\' premier guard-gated golf community. Expert representation by Dr. Janet Duffy, Berkshire Hathaway HomeServices. 640 acres, 27-hole championship golf, custom estates $450K-$3.5M.',
  keywords: [
    'Spanish Trail homes for sale',
    'Spanish Trail real estate',
    'Spanish Trail Las Vegas',
    'luxury homes Spanish Trail',
    'Spanish Trail golf course homes',
    'guard gated Las Vegas',
    '89113 homes for sale',
    'Southwest Las Vegas real estate',
    'Spanish Trail estates',
    'Dr. Janet Duffy',
    'Berkshire Hathaway Las Vegas',
  ],
  authors: [{ name: 'Dr. Janet Duffy', url: 'https://www.bhhsnv.com' }],
  creator: 'Dr. Janet Duffy - Berkshire Hathaway HomeServices',
  publisher: 'Berkshire Hathaway HomeServices Nevada Properties',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spanishtrailhomes.com',
    siteName: 'Spanish Trail Luxury Homes',
    title:
      'Spanish Trail Luxury Homes for Sale | Las Vegas Golf Course Community',
    description:
      'Explore Spanish Trail luxury real estate in Southwest Las Vegas. Guard-gated golf course community with 11 neighborhoods, custom estates, villas, championship golf. Represented by Dr. Janet Duffy.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Spanish Trail Luxury Homes Las Vegas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Spanish Trail Luxury Homes for Sale | Las Vegas Golf Course Community',
    description:
      'Discover luxury homes in Spanish Trail Las Vegas. 640-acre guard-gated community with championship golf, custom estates $450K-$3.5M. Expert service by Dr. Janet Duffy.',
    images: ['/og-image.png'],
    creator: '@bhhsnv',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://spanishtrailhomes.com',
  },
  verification: {
    google: 'G-X68WWN997N',
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
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="place-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(placeSchema),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
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
