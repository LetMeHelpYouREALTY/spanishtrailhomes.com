import { createImageObjectSchema, getCanonicalUrl } from '@/lib/structuredData'

type PageSearchSignalsProps = {
  pathname: string
}

/**
 * Preferred image JSON-LD in the original HTML of every SiteShell page.
 * Google Search uses schema.org ImageObject together with og:image for
 * thumbnails in Search and Discover.
 */
export function PageSearchSignals({ pathname }: PageSearchSignalsProps) {
  const path = pathname || '/'
  const pageUrl = getCanonicalUrl(path)
  const data = {
    '@context': 'https://schema.org',
    ...createImageObjectSchema({ path }),
  }

  return (
    <script
      id={`page-primary-image-${pageUrl.replace(/[^a-z0-9]+/gi, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
