# Spanish Trail section images

**Agent portraits:** `duffy-circle-*.png` are unique Dr. Jan Duffy headshot variants
generated from `scripts/generate-agent-portraits.py` using
`scripts/assets/duffy-circle-source.jpg`. They are the supplied gold circle
(no caption bars, no extra rings, no zoom). Do not replace her face with AI.

**Primary storage (hosted Cloudflare Images):** custom IDs `spanish-trail/<asset-id>`
**Secondary storage:** these git-tracked PNG files (Vercel origin backup)

Cloudflare Images account (dashboard Developer Resources):

- Account ID: `2cc579c1ec9e426ed585e933ebf4753b`
- Account hash: `byE6BTe9lNqo21V57n4aPQ`
- Delivery: `https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/public`

Example after upload:

`https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/spanish-trail/h1-guard-gate/public`

Heading images (`h1-*`, `h2-*`, `h3-*`) match on-page H1/H2/H3 topics. Regenerated 2026-09-21:
`h3-golf-bunker` (desert bunker, not pines), `h3-pickleball` (Mediterranean courts, not pueblo),
`h3-motor-court` (desert paver court, not Miami cycads), `h2-events-lawn` (club lawn, not wedding ceremony),
`h3-townhome-villa` (desert golf villas). Earlier: gatehouse, cart-path, golf-lakes, golf-fairway, golf-canyon.

Runtime URLs are resolved in `lib/cloudflare-images.ts`:

1. If `NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH` is set to the account hash, browsers load
   `https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/spanish-trail/<asset-id>/public`
   (or `NEXT_PUBLIC_CLOUDFLARE_IMAGES_BASE` for a custom domain).
2. Otherwise the site serves this folder from Vercel/git.

Upload git copies into hosted Images (token required — Images Edit):

```bash
CLOUDFLARE_API_TOKEN=… pnpm images:upload
```

Then set `NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH=byE6BTe9lNqo21V57n4aPQ` on Vercel Production/Preview/Development and redeploy. Do not set the hash before the upload: hosted URLs return `err=9404` until the custom IDs exist.
