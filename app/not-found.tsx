import Link from 'next/link'
import { Home, Search, Phone } from 'lucide-react'
import { Metadata } from 'next'

import { HeadingPicture } from '@/components/heading-media'
import { getAssetAlt } from '@/lib/site-images'

export const metadata: Metadata = {
  title: 'Page Not Found | Spanish Trail Homes',
  description: 'The page you are looking for could not be found. Explore Spanish Trail homes, club amenities, and real estate services.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <HeadingPicture
            assetId="h1-guard-gate"
            alt={getAssetAlt('h1-guard-gate')}
            level="h1"
            className="mb-8 rounded-2xl"
            priority
          />
          <h1 className="font-heading text-6xl font-bold tracking-tight text-primary sm:text-7xl">
            404
          </h1>
          <h2 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Page Not Found
          </h2>
          <HeadingPicture
            assetId="h2-neighborhood-street"
            alt={getAssetAlt('h2-neighborhood-street')}
            level="h2"
            className="mx-auto mt-6 max-w-xl rounded-xl"
          />
          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
            The page you are looking for could not be found. It may have been moved, deleted, or the URL may be incorrect.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Home className="size-4" aria-hidden />
              Return Home
            </Link>
            <Link
              href="/spanish-trail-homes-for-sale-las-vegas"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Search className="size-4" aria-hidden />
              Browse Listings
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Phone className="size-4" aria-hidden />
              Contact Us
            </Link>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Popular Pages
            </h3>
            <HeadingPicture
              assetId="h3-listing-home-a"
              alt={getAssetAlt('h3-listing-home-a')}
              level="h3"
              className="mx-auto mt-4 max-w-sm rounded-xl"
            />
            <nav className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/buyers" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
                Buyers Guide
              </Link>
              <Link href="/sellers" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
                Sellers Guide
              </Link>
              <Link href="/club" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
                Club & Lifestyle
              </Link>
              <Link href="/golf" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
                Golf Course
              </Link>
              <Link href="/communities/spanish-trail" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
                Spanish Trail Community
              </Link>
              <Link href="/neighborhoods" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
                Neighborhoods
              </Link>
              <Link href="/relocation" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
                Relocation
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
                About Dr. Jan Duffy
              </Link>
            </nav>
          </div>
        </div>
      </main>
    </div>
  )
}

