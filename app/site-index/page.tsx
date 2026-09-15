import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { sitePhotoOg } from '@/lib/site-images'
import { GBP_FULL_ADDRESS, GBP_PHONE_DISPLAY } from '@/lib/gbp-business'
import { NEIGHBORHOODS } from '@/lib/neighborhoods'
import { SectionBanner } from '@/components/heading-media'

const pageUrl = 'https://www.spanishtrailhomes.com/site-index'
const pageTitle = 'Site Index | Spanish Trail Homes | Dr. Jan Duffy'
const pageDescription = `A–Z index of Spanish Trail realtor pages: buy, sell, listings, 11 neighborhoods, club, and contact. ${GBP_FULL_ADDRESS}. ${GBP_PHONE_DISPLAY}.`

const groups: Array<{ heading: string; links: Array<{ href: string; label: string }> }> = [
  {
    heading: 'Buy, sell & listings',
    links: [
      { href: '/', label: 'Home — buy and sell Spanish Trail homes' },
      { href: '/buyers', label: 'Buy Spanish Trail homes' },
      { href: '/sellers', label: 'Sell your Spanish Trail home' },
      { href: '/services', label: 'All realtor services' },
      { href: '/spanish-trail-homes-for-sale-las-vegas', label: 'Spanish Trail homes for sale' },
      { href: '/homes-for-sale-in-spanish-trail-las-vegas', label: 'Property-type guide' },
      { href: '/relocation', label: 'Relocation & out-of-state buyers' },
    ],
  },
  {
    heading: 'Neighborhoods',
    links: [
      { href: '/neighborhoods', label: 'All 11 Spanish Trail neighborhoods' },
      ...NEIGHBORHOODS.map((n) => ({
        href: `/neighborhoods/${n.slug}`,
        label: `Homes for sale in ${n.name}`,
      })),
    ],
  },
  {
    heading: 'Community & lifestyle',
    links: [
      { href: '/communities/spanish-trail', label: 'Spanish Trail community guide' },
      { href: '/club', label: 'Spanish Trail Country Club' },
      { href: '/golf', label: 'Golf course' },
      { href: '/membership', label: 'Club membership' },
      { href: '/spanish-trail-hoa-guide', label: 'HOA guide' },
      { href: '/spanish-trail-schools', label: 'Schools near Spanish Trail' },
      { href: '/guest-info', label: 'Guest info & gate access' },
      { href: '/amenity-map', label: 'What’s near Spanish Trail' },
    ],
  },
  {
    heading: 'Market & contact',
    links: [
      { href: '/spanish-trail-market-report', label: 'Spanish Trail market report' },
      { href: '/spanish-trail-insights', label: 'Insights hub' },
      { href: '/about', label: 'Meet Dr. Jan Duffy' },
      { href: '/contact', label: 'Contact' },
      { href: '/reviews', label: 'Google reviews' },
      { href: '/google-business-profile', label: 'Google Business Profile' },
      { href: '/find-our-locations', label: 'Office location' },
      { href: '/directions', label: 'Directions to 5050 Spanish Trail Ln' },
      { href: '/media-kit', label: 'Media kit' },
    ],
  },
  {
    heading: 'Policies',
    links: [
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/terms', label: 'Terms of use' },
      { href: '/accessibility', label: 'Accessibility' },
    ],
  },
]

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: getCanonicalUrl('/site-index') },
  openGraph: {
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    images: [
      sitePhotoOg('h1-office-exterior'),
    ],
  },
}

export default function SiteIndexPage() {
  return (
    <SiteShell>
      <Script id="site-index-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(
          createWebPageSchema({
            name: pageTitle,
            description: pageDescription,
            path: '/site-index',
          }),
        )}
      </Script>

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Site Index' }]} />
        </div>
      </div>

      <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="site-index-heading">
        <SectionBanner headingId="site-index-heading" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">Spanish Trail Homes</p>
          <h1 id="site-index-heading" className="mt-2 font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Site index
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#372a20]/85">
            Every public page for Dr. Jan Duffy’s Spanish Trail practice. {GBP_FULL_ADDRESS}. {GBP_PHONE_DISPLAY}.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6">
        {groups.map((group) => (
          <section key={group.heading} aria-labelledby={`${group.heading}-heading`}>
            <h2 id={`${group.heading}-heading`} className="font-heading text-2xl text-[#1f2a24]">
              {group.heading}
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#0f2b1e] underline-offset-4 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </SiteShell>
  )
}
