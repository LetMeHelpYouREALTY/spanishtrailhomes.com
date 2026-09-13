import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Breadcrumbs } from '@/components/breadcrumbs'
import { SectionBanner } from '@/components/heading-media'
import { SiteShell } from '@/components/site-shell'
import {
  INDEXABLE_GROUP_LABELS,
  INDEXABLE_GROUPS,
  INDEXABLE_ROUTES,
} from '@/lib/indexable-routes'
import {
  createBreadcrumbSchema,
  createOgImageUrl,
  createWebPageSchema,
  getCanonicalUrl,
} from '@/lib/structuredData'

const path = '/site-index'
const pageTitle = 'Spanish Trail Homes site index | Crawlable pages in Las Vegas 89113'
const pageDescription =
  'Browse every Spanish Trail Homes page Google can crawl: listings, 11 neighborhoods, realtor services, and the office at 5050 Spanish Trail Ln, Las Vegas NV 89113.'

const webPageSchema = createWebPageSchema({
  name: pageTitle,
  description: pageDescription,
  path,
  extra: {
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: INDEXABLE_ROUTES.length,
      itemListElement: INDEXABLE_ROUTES.map((route, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: route.title,
        url: `https://www.spanishtrailhomes.com${route.path === '/' ? '' : route.path}`,
      })),
    },
  },
})

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Site index', url: path },
])

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl(path),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: `https://www.spanishtrailhomes.com${path}`,
    title: pageTitle,
    description: pageDescription,
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Homes site index',
        subtitle: 'Listings, neighborhoods, and office pages',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function SiteIndexPage() {
  return (
    <SiteShell>
      <Script id="site-index-schema" type="application/ld+json">
        {JSON.stringify([webPageSchema, breadcrumbSchema])}
      </Script>
      <section className="relative isolate overflow-hidden bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="site-index-heading">
        <SectionBanner headingId="site-index-heading" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.5em] text-[#be9956]">Crawlable site index</p>
          <h1 id="site-index-heading" className="mt-3 font-[var(--font-playfair)] text-3xl sm:text-4xl">
            Every Spanish Trail Homes page
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#efe5d8]">
            Use these links to open listings, neighborhood guides, and Dr. Jan Duffy&apos;s office page at 5050 Spanish
            Trail Ln, Las Vegas, NV 89113. Call{' '}
            <a href="tel:+17027663299" className="underline underline-offset-2">
              (702) 766-3299
            </a>
            .
          </p>
        </div>
      </section>
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Site index' }]} />
        </div>
      </div>
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 sm:py-16">
        {INDEXABLE_GROUPS.map((group) => {
          const routes = INDEXABLE_ROUTES.filter((route) => route.group === group)
          return (
            <section key={group} aria-labelledby={`index-${group}`}>
              <h2 id={`index-${group}`} className="font-[var(--font-playfair)] text-2xl text-[#1f2a24]">
                {INDEXABLE_GROUP_LABELS[group]}
              </h2>
              <ul className="mt-4 columns-1 gap-x-10 sm:columns-2">
                {routes.map((route) => (
                  <li key={route.path} className="break-inside-avoid py-1.5">
                    <Link
                      href={route.path}
                      className="text-[#0f2b1e] underline-offset-4 hover:underline"
                    >
                      {route.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </SiteShell>
  )
}
