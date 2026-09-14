import type { MetadataRoute } from 'next'

import { getAbsoluteSiteImageUrl } from '@/lib/cloudflare-images'
import { INDEXABLE_ROUTES } from '@/lib/indexable-routes'
import { resolvePagePreferredImage } from '@/lib/site-images'

const baseUrl = 'https://www.spanishtrailhomes.com'

/**
 * XML sitemap lists only canonical URLs we want crawled.
 * lastmod is deploy-time only for inventory/stats URLs; Google ignores lastmod
 * that changes on every URL at every build.
 * @see https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const deployTime = new Date()

  return INDEXABLE_ROUTES.map((route) => {
    const image = resolvePagePreferredImage(route.path)
    return {
      url: route.path === '/' ? baseUrl : `${baseUrl}${route.path}`,
      ...(route.lastmodOnDeploy ? { lastModified: deployTime } : {}),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      images: [getAbsoluteSiteImageUrl(image.id)],
    }
  })
}
