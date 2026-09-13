/**
 * Cloudflare Images is the primary CDN; git (`public/images/spanish-trail`) is the fallback origin.
 *
 * Delivery (Cloudflare Images docs):
 *   https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 * Custom domain on the same Cloudflare account:
 *   https://example.com/cdn-cgi/imagedelivery/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 *
 * Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH after uploading with `pnpm images:upload`.
 */

export const SITE_IMAGE_DIR = '/images/spanish-trail' as const
export const CLOUDFLARE_IMAGE_ID_PREFIX = 'spanish-trail' as const
export const CLOUDFLARE_DEFAULT_VARIANT = 'public' as const

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, '')
}

export function getCloudflareImagesHash(): string | undefined {
  const hash = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim()
  return hash ? hash : undefined
}

export function getCloudflareImageId(assetId: string): string {
  return `${CLOUDFLARE_IMAGE_ID_PREFIX}/${assetId}`
}

export function getGitImagePath(assetId: string): string {
  return `${SITE_IMAGE_DIR}/${assetId}.png`
}

/**
 * Primary URL (Cloudflare) when a hash is configured; otherwise the git-backed static file.
 */
export function getSiteImageUrl(
  assetId: string,
  variant: string = CLOUDFLARE_DEFAULT_VARIANT,
): string {
  const hash = getCloudflareImagesHash()
  if (!hash) {
    return getGitImagePath(assetId)
  }

  const customBase = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_BASE?.trim()
  const imageId = getCloudflareImageId(assetId)

  if (customBase) {
    return `${trimTrailingSlash(customBase)}/${imageId}/${variant}`
  }

  return `https://imagedelivery.net/${hash}/${imageId}/${variant}`
}

/**
 * Absolute URL for JSON-LD, sitemaps, and Open Graph.
 */
export function getAbsoluteSiteImageUrl(
  assetId: string,
  variant: string = CLOUDFLARE_DEFAULT_VARIANT,
): string {
  const src = getSiteImageUrl(assetId, variant)
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }
  return `https://www.spanishtrailhomes.com${src.startsWith('/') ? src : `/${src}`}`
}
