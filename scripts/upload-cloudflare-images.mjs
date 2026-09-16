#!/usr/bin/env node
/**
 * Upload git-backed images in public/images/spanish-trail to Cloudflare Images (primary storage).
 *
 * Hosted Images custom IDs: spanish-trail/<filename-without-ext>
 * Delivery: https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/spanish-trail/<asset-id>/public
 *
 * Requires:
 *   CLOUDFLARE_API_TOKEN  (Account → Cloudflare Images → Edit)
 * Optional:
 *   CLOUDFLARE_ACCOUNT_ID (defaults to this site’s Images account)
 *
 * Usage:
 *   node scripts/upload-cloudflare-images.mjs
 *   node scripts/upload-cloudflare-images.mjs --overwrite
 *   node scripts/upload-cloudflare-images.mjs --from-url
 *
 * @see https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 * @see https://developers.cloudflare.com/images/storage/upload-images/upload-url/
 */

import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const PREFIX = 'spanish-trail'
const ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ'
const DEFAULT_ACCOUNT_ID = '2cc579c1ec9e426ed585e933ebf4753b'
const SOURCE_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'public',
  'images',
  'spanish-trail',
)
const ORIGIN = 'https://www.spanishtrailhomes.com'

function hasFlag(flag) {
  return process.argv.includes(flag)
}

function deliveryUrl(imageId) {
  return `https://imagedelivery.net/${ACCOUNT_HASH}/${imageId}/public`
}

async function main() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID?.trim() || DEFAULT_ACCOUNT_ID
  const token = process.env.CLOUDFLARE_API_TOKEN?.trim()
  const overwrite = process.env.CLOUDFLARE_IMAGES_OVERWRITE === '1' || hasFlag('--overwrite')
  const fromUrl = hasFlag('--from-url')

  if (!token) {
    console.error('Missing CLOUDFLARE_API_TOKEN (Account → Cloudflare Images → Edit).')
    console.error('Git copies remain in public/images/spanish-trail as secondary storage.')
    console.error(`Expected delivery: https://imagedelivery.net/${ACCOUNT_HASH}/spanish-trail/<id>/public`)
    process.exit(1)
  }

  const files = (await readdir(SOURCE_DIR)).filter((name) => name.endsWith('.png'))
  if (files.length === 0) {
    console.error(`No PNG files found in ${SOURCE_DIR}`)
    process.exit(1)
  }

  console.log(
    `Uploading ${files.length} images to Cloudflare Images as ${PREFIX}/* on account ${accountId}` +
      `${fromUrl ? ' (from production URLs)' : ''}…`,
  )

  let uploaded = 0
  let skipped = 0
  let failed = 0

  for (const file of files) {
    const assetId = file.replace(/\.png$/i, '')
    const imageId = `${PREFIX}/${assetId}`
    const makeBody = async () => {
      const body = new FormData()
      if (fromUrl) {
        body.append('url', `${ORIGIN}/images/spanish-trail/${file}`)
      } else {
        const bytes = await readFile(path.join(SOURCE_DIR, file))
        body.append('file', new Blob([bytes], { type: 'image/png' }), file)
      }
      body.append('id', imageId)
      body.append('requireSignedURLs', 'false')
      body.append('metadata', JSON.stringify({ source: fromUrl ? 'origin' : 'git', assetId }))
      return body
    }

    const post = async () =>
      fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: await makeBody(),
      })

    const response = await post()
    const json = await response.json().catch(() => ({}))

    if (response.ok && json.success) {
      uploaded += 1
      console.log(`uploaded ${imageId} → ${deliveryUrl(imageId)}`)
      continue
    }

    const alreadyExists =
      response.status === 409 ||
      JSON.stringify(json).toLowerCase().includes('already exist') ||
      JSON.stringify(json).toLowerCase().includes('duplicate')

    if (alreadyExists && overwrite) {
      const del = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1/${encodeURIComponent(imageId)}`,
        { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } },
      )
      if (del.ok) {
        const retry = await post()
        const retryJson = await retry.json().catch(() => ({}))
        if (retry.ok && retryJson.success) {
          uploaded += 1
          console.log(`replaced ${imageId} → ${deliveryUrl(imageId)}`)
          continue
        }
        failed += 1
        console.error(`failed   ${imageId} (replace)`, retry.status, retryJson.errors ?? retryJson)
        continue
      }
    }

    if (alreadyExists) {
      skipped += 1
      console.log(`exists   ${imageId} → ${deliveryUrl(imageId)}`)
      continue
    }

    failed += 1
    console.error(`failed   ${imageId}`, response.status, json.errors ?? json)
  }

  console.log(`Done. uploaded=${uploaded} exists=${skipped} failed=${failed} planned=${files.length}`)
  console.log(`Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH=${ACCOUNT_HASH} on Vercel after a successful upload.`)
  if (failed > 0) process.exit(1)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
