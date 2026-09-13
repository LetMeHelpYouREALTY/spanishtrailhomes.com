#!/usr/bin/env node
/**
 * Upload git-backed images in public/images/spanish-trail to Cloudflare Images (primary storage).
 *
 * Requires:
 *   CLOUDFLARE_ACCOUNT_ID
 *   CLOUDFLARE_API_TOKEN  (Account → Cloudflare Images → Edit)
 *
 * Custom IDs match runtime: spanish-trail/<filename-without-ext>
 *
 * Usage: node scripts/upload-cloudflare-images.mjs
 */

import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const PREFIX = 'spanish-trail'
const SOURCE_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images', 'spanish-trail')

async function main() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID?.trim()
  const token = process.env.CLOUDFLARE_API_TOKEN?.trim()

  if (!accountId || !token) {
    console.error('Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN.')
    console.error('Git copies remain in public/images/spanish-trail as secondary storage.')
    process.exit(1)
  }

  const files = (await readdir(SOURCE_DIR)).filter((name) => name.endsWith('.png'))
  if (files.length === 0) {
    console.error(`No PNG files found in ${SOURCE_DIR}`)
    process.exit(1)
  }

  console.log(`Uploading ${files.length} images to Cloudflare Images as ${PREFIX}/* …`)

  let uploaded = 0
  let skipped = 0
  let failed = 0

  for (const file of files) {
    const assetId = file.replace(/\.png$/i, '')
    const imageId = `${PREFIX}/${assetId}`
    const body = new FormData()
    const bytes = await readFile(path.join(SOURCE_DIR, file))
    body.append('file', new Blob([bytes], { type: 'image/png' }), file)
    body.append('id', imageId)
    body.append('requireSignedURLs', 'false')
    body.append('metadata', JSON.stringify({ source: 'git', assetId }))

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body,
      },
    )

    const json = await response.json().catch(() => ({}))

    if (response.ok && json.success) {
      uploaded += 1
      console.log(`uploaded ${imageId}`)
      continue
    }

    const alreadyExists =
      response.status === 409 ||
      JSON.stringify(json).toLowerCase().includes('already exist') ||
      JSON.stringify(json).toLowerCase().includes('duplicate')

    if (alreadyExists) {
      skipped += 1
      console.log(`exists   ${imageId}`)
      continue
    }

    failed += 1
    console.error(`failed   ${imageId}`, response.status, json.errors ?? json)
  }

  console.log(`Done. uploaded=${uploaded} exists=${skipped} failed=${failed} planned=${files.length}`)
  if (failed > 0) process.exit(1)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
