import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
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
  metadataBase: new URL('https://spanishtrailhomes.com'),
  title: {
    default: 'Spanish Trail Homes Las Vegas | Luxury Real Estate by Dr. Janet Duffy',
    template: '%s | Spanish Trail Homes Las Vegas',
  },
  description:
    'Explore luxury Spanish Trail homes for sale in Las Vegas with Dr. Janet Duffy, Berkshire Hathaway HomeServices. Guard-gated estates, golf villas, and country club living near the Las Vegas Strip. View current listings, market data, and schedule private tours of this exclusive 640-acre community featuring a 27-hole Robert Trent Jones Jr. championship golf course.',
  keywords: [
    'Spanish Trail homes for sale',
    'Spanish Trail real estate',
    'Las Vegas luxury homes',
    'guard-gated Las Vegas homes',
    'Spanish Trail golf course homes',
    'Dr. Janet Duffy realtor',
    'Berkshire Hathaway Las Vegas',
    'Spanish Trail Country Club',
    'Las Vegas golf communities',
    'Spring Valley Las Vegas homes',
  ],
  authors: [{ name: 'Dr. Janet Duffy', url: 'https://spanishtrailhomes.com' }],
  creator: 'Dr. Janet Duffy - Berkshire Hathaway HomeServices Nevada Properties',
  publisher: 'Berkshire Hathaway HomeServices Nevada Properties',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spanishtrailhomes.com',
    title: 'Spanish Trail Homes Las Vegas | Luxury Real Estate by Dr. Janet Duffy',
    description:
      'Explore luxury Spanish Trail homes for sale with Dr. Janet Duffy. Guard-gated estates, golf villas, and country club living near the Las Vegas Strip.',
    siteName: 'Spanish Trail Homes Las Vegas',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Spanish Trail Luxury Homes - Las Vegas Golf Course Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Homes Las Vegas | Luxury Real Estate',
    description:
      'Explore luxury Spanish Trail homes with Dr. Janet Duffy. Guard-gated golf course community near the Las Vegas Strip.',
    images: ['/og-image.png'],
    creator: '@BHHSNevada',
  },
  alternates: {
    canonical: 'https://spanishtrailhomes.com',
  },
  verification: {
    google: 'your-google-verification-code',
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
