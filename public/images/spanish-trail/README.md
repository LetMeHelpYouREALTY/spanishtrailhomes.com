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

Heading images (`h1-*`, `h2-*`, `h3-*`) match on-page H1/H2/H3 topics. Regenerated 2026-09-21 from headings:
`h1-golf-fairway` (H1: homes on a private 27-hole course), `h1-clubhouse` (two-story clubhouse, not a palace),
`h1-waterfront` (H1: waterfront golf homes), `h2-golf-canyon` / `h2-golf-lakes` / `h2-golf-sunrise` (Canyon, Lakes, Sunrise nines with homes),
`h2-valley-skyline` and `h3-strip-view-patio` (Las Vegas Strip, not a generic skyline),
`h2-community-map` (flat 89113 gated golf aerial), `h3-cart-path`, `h3-gatehouse`, `h3-golf-bunker`.
Also 2026-09-21: `h3-pickleball` (Mediterranean courts), `h3-motor-court` (desert paver court),
`h2-events-lawn` (club lawn, not a wedding ceremony), `h3-townhome-villa` (desert golf villas).
Replaced leftover `public/og-image.png` (was a v0 demo screenshot) from the homepage H1.
Earlier 2026-09-15: `h2-fitness`, `h2-accessible-entrance`, `h2-reviews-terrace`.

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
