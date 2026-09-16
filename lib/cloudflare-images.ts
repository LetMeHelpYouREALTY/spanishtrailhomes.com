/**
 * Cloudflare Images is the primary CDN; git (`public/images/spanish-trail`) is the fallback origin.
 *
 * Hosted-images delivery (Cloudflare Images docs):
 *   https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 * Custom domain on the same Cloudflare account:
 *   https://example.com/cdn-cgi/imagedelivery/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 *
 * This site’s Images account hash is public (Developer Resources in the dashboard).
 * Runtime still uses git until NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH is set on Vercel
 * *after* `pnpm images:upload` has stored custom IDs `spanish-trail/<asset-id>`.
 *
 * @see https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 * @see https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 */

export const SITE_IMAGE_DIR = '/images/spanish-trail' as const
export const CLOUDFLARE_IMAGE_ID_PREFIX = 'spanish-trail' as const
export const CLOUDFLARE_DEFAULT_VARIANT = 'public' as const

/** Cloudflare Images account hash (imagedelivery.net). Not a secret. */
export const CLOUDFLARE_IMAGES_ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ' as const

/** Cloudflare account used by `pnpm images:upload`. Not a delivery secret. */
export const CLOUDFLARE_IMAGES_ACCOUNT_ID = '2cc579c1ec9e426ed585e933ebf4753b' as const

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, '')
}

export function getCloudflareImagesHash(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim()
  if (!raw || raw === '0' || raw === 'false') return undefined
  return raw
}

export function getCloudflareImageId(assetId: string): string {
  return `${CLOUDFLARE_IMAGE_ID_PREFIX}/${assetId}`
}

export function getGitImagePath(assetId: string): string {
  return `${SITE_IMAGE_DIR}/${assetId}.png`
}

export function getCloudflareImageDeliveryUrl(
  assetId: string,
  variant: string = CLOUDFLARE_DEFAULT_VARIANT,
  hash: string = CLOUDFLARE_IMAGES_ACCOUNT_HASH,
): string {
  const customBase = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_BASE?.trim()
  const imageId = getCloudflareImageId(assetId)

  if (customBase) {
    return `${trimTrailingSlash(customBase)}/${imageId}/${variant}`
  }

  return `https://imagedelivery.net/${hash}/${imageId}/${variant}`
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

  return getCloudflareImageDeliveryUrl(assetId, variant, hash)
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
