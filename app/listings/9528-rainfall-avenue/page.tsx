import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/site-shell'
import { GBP_PHONE_DISPLAY, GBP_PHONE_E164 } from '@/lib/gbp-business'
import {
  FEATURED_LISTING,
  FeaturedListingPageBody,
  featuredListingJsonLd,
} from '@/components/sections/FeaturedListing'

const l = FEATURED_LISTING
const title = `${l.address}, ${l.city} ${l.zip} | ${l.price} | Pool, No HOA, Owned Solar`
const description = `${l.beds} bed, ${l.baths} bath, ${l.sqft} sq ft two-story home in ${l.city} ${l.zip} with a private pool, no HOA dues, and owned solar. Listed at ${l.price}. MLS #${l.mlsNumber}.`

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: l.canonicalUrl },
  openGraph: { title, description, url: l.canonicalUrl, type: 'website' },
}

export default function FeaturedListingPage() {
  if (!l.active) notFound()
  const jsonLd = JSON.stringify(featuredListingJsonLd(l.canonicalUrl)).replace(
    /</g,
    '\\u003c',
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <SiteShell>
        <FeaturedListingPageBody
          phone={GBP_PHONE_DISPLAY}
          phoneHref={`tel:${GBP_PHONE_E164}`}
          siteHost={'spanishtrailhomes.com'}
        />
      </SiteShell>
    </>
  )
}
