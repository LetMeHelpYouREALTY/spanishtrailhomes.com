#!/usr/bin/env node
/**
 * Upload git-backed images in public/images/spanish-trail to Cloudflare Images (hosted storage).
 *
 * Docs (2026):
 *   POST https://api.cloudflare.com/client/v4/accounts/<ACCOUNT_ID>/images/v1
 *   Custom ID: https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 *   Serve:     https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/public
 *
 * Requires CLOUDFLARE_API_TOKEN with Account → Cloudflare Images → Edit.
 * Account ID defaults to the Spanish Trail Images account.
 *
 * Usage:
 *   CLOUDFLARE_API_TOKEN=… pnpm images:upload
 *   CLOUDFLARE_IMAGES_OVERWRITE=1 CLOUDFLARE_API_TOKEN=… pnpm images:upload
 */

import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const PREFIX = 'spanish-trail'
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID?.trim() || '2cc579c1ec9e426ed585e933ebf4753b'
const ACCOUNT_HASH = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim() || 'byE6BTe9lNqo21V57n4aPQ'
const ORIGIN = 'https://www.spanishtrailhomes.com'
const SOURCE_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images', 'spanish-trail')

function apiUrl(suffix = '') {
  return `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1${suffix}`
}

async function main() {
  const token = process.env.CLOUDFLARE_API_TOKEN?.trim()

  if (!token) {
    console.error('Missing CLOUDFLARE_API_TOKEN (Account → Cloudflare Images → Edit).')
    console.error('Git copies remain in public/images/spanish-trail as secondary storage.')
    console.error('Do not set NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH until this upload succeeds.')
    process.exit(1)
  }

  const files = (await readdir(SOURCE_DIR)).filter((name) => name.endsWith('.png'))
  if (files.length === 0) {
    console.error(`No PNG files found in ${SOURCE_DIR}`)
    process.exit(1)
  }

  const headers = { Authorization: `Bearer ${token}` }
  console.log(`Uploading ${files.length} images to Cloudflare Images as ${PREFIX}/* …`)
  console.log(`Account ${ACCOUNT_ID}  delivery https://imagedelivery.net/${ACCOUNT_HASH}/<id>/public`)

  let uploaded = 0
  let skipped = 0
  let failed = 0

  for (const file of files) {
    const assetId = file.replace(/\.png$/i, '')
    const imageId = `${PREFIX}/${assetId}`
    const originUrl = `${ORIGIN}/images/spanish-trail/${file}`

    const makeUrlBody = () => {
      const body = new FormData()
      body.append('url', originUrl)
      body.append('id', imageId)
      body.append('requireSignedURLs', 'false')
      body.append('metadata', JSON.stringify({ source: 'git', assetId, originUrl }))
      return body
    }

    const makeFileBody = async () => {
      const bytes = await readFile(path.join(SOURCE_DIR, file))
      const body = new FormData()
      body.append('file', new Blob([bytes], { type: 'image/png' }), file)
      body.append('id', imageId)
      body.append('requireSignedURLs', 'false')
      body.append('metadata', JSON.stringify({ source: 'git-file', assetId }))
      return body
    }

    const post = async (body) =>
      fetch(apiUrl(), {
        method: 'POST',
        headers,
        body,
      })

    let response = await post(makeUrlBody())
    let json = await response.json().catch(() => ({}))

    if (!response.ok || !json.success) {
      response = await post(await makeFileBody())
      json = await response.json().catch(() => ({}))
    }

    if (response.ok && json.success) {
      uploaded += 1
      console.log(`uploaded ${imageId}`)
      continue
    }

    const alreadyExists =
      response.status === 409 ||
      JSON.stringify(json).toLowerCase().includes('already exist') ||
      JSON.stringify(json).toLowerCase().includes('duplicate')

    if (alreadyExists && process.env.CLOUDFLARE_IMAGES_OVERWRITE === '1') {
      const del = await fetch(apiUrl(`/${encodeURIComponent(imageId)}`), {
        method: 'DELETE',
        headers,
      })
      if (del.ok) {
        const retry = await post(makeUrlBody())
        const retryJson = await retry.json().catch(() => ({}))
        if (retry.ok && retryJson.success) {
          uploaded += 1
          console.log(`replaced ${imageId}`)
          continue
        }
        const retryFile = await post(await makeFileBody())
        const retryFileJson = await retryFile.json().catch(() => ({}))
        if (retryFile.ok && retryFileJson.success) {
          uploaded += 1
          console.log(`replaced ${imageId} (file)`)
          continue
        }
      }
    }

    if (alreadyExists) {
      skipped += 1
      console.log(`exists   ${imageId}`)
      continue
    }

    failed += 1
    console.error(`failed   ${imageId}`, response.status, json.errors ?? json)
  }

  console.log(`Done. uploaded=${uploaded} exists=${skipped} failed=${failed} planned=${files.length}`)
  console.log(`Sample: https://imagedelivery.net/${ACCOUNT_HASH}/${PREFIX}/h1-guard-gate/public`)
  if (failed > 0) process.exit(1)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
