/**
 * Cloudflare Images hosted storage is primary; git (`public/images/spanish-trail`) is the origin backup.
 *
 * Dashboard (Developer Resources) — Sep 2026:
 *   Account ID:  2cc579c1ec9e426ed585e933ebf4753b
 *   Account hash: byE6BTe9lNqo21V57n4aPQ
 *   Delivery:    https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 *
 * Hosted docs:
 *   https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 * Custom IDs:
 *   https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 *
 * Image IDs on this site: spanish-trail/<asset-id>  (e.g. spanish-trail/h1-guard-gate)
 * Variant: public
 *
 * Do not point browsers at imagedelivery.net until `pnpm images:upload` succeeds.
 * Un-uploaded custom IDs return Cloudflare Images err=9404.
 */

export const SITE_IMAGE_DIR = '/images/spanish-trail' as const
export const CLOUDFLARE_IMAGE_ID_PREFIX = 'spanish-trail' as const
export const CLOUDFLARE_DEFAULT_VARIANT = 'public' as const

/** Public Images account hash from the Cloudflare dashboard. Safe in the client bundle. */
export const CLOUDFLARE_IMAGES_ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ' as const

/** Account ID for the Images API (upload script only — not a browser secret). */
export const CLOUDFLARE_IMAGES_ACCOUNT_ID = '2cc579c1ec9e426ed585e933ebf4753b' as const

export const CLOUDFLARE_IMAGES_DELIVERY_ORIGIN = `https://imagedelivery.net/${CLOUDFLARE_IMAGES_ACCOUNT_HASH}` as const

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, '')
}

/**
 * Hosted Images hash when CDN delivery is enabled.
 * Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH=git to force Vercel/git files.
 */
export function getCloudflareImagesHash(): string | undefined {
  const hash = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim()
  if (!hash || hash === 'git' || hash === 'off' || hash === '0') {
    return undefined
  }
  return hash
}

export function getCloudflareImageId(assetId: string): string {
  return `${CLOUDFLARE_IMAGE_ID_PREFIX}/${assetId}`
}

export function getGitImagePath(assetId: string): string {
  return `${SITE_IMAGE_DIR}/${assetId}.png`
}

/**
 * Primary URL (Cloudflare hosted Images) when a hash is configured; otherwise the git-backed static file.
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

/** Production origin used to import git PNGs into Images via URL (API token required). */
export function getProductionGitImageUrl(assetId: string): string {
  return `https://www.spanishtrailhomes.com${getGitImagePath(assetId)}`
}
