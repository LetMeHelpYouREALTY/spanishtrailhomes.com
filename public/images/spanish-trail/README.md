# Spanish Trail section images

**Agent portraits:** `duffy-circle-*.png` are unique Dr. Jan Duffy headshot variants
generated from `scripts/generate-agent-portraits.py` using
`scripts/assets/duffy-circle-source.jpg`. They are the supplied gold circle
(no caption bars, no extra rings, no zoom). Do not replace her face with AI.

**Primary storage:** Cloudflare Images hosted assets
(`https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/spanish-trail/<asset-id>/public`).
**Secondary storage:** these git-tracked PNG files.

Heading images (`h1-*`, `h2-*`, `h3-*`) match on-page H1/H2/H3 topics.

Runtime URLs are resolved in `lib/cloudflare-images.ts`:

1. If `NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH` is set (use `byE6BTe9lNqo21V57n4aPQ`),
   browsers load `https://imagedelivery.net/<hash>/spanish-trail/<asset-id>/public`
   (or `NEXT_PUBLIC_CLOUDFLARE_IMAGES_BASE` for a custom domain).
2. Otherwise the site serves this folder from Vercel/git.

Do not set the hash on Vercel until `pnpm images:upload` has stored every PNG
under custom IDs `spanish-trail/<asset-id>`. Unuploaded IDs return Cloudflare
`err=9404` and break Open Graph, sitemap, and next/image.

Upload git copies to Cloudflare Images (needs Account → Cloudflare Images → Edit):

```bash
CLOUDFLARE_API_TOKEN=… pnpm images:upload
```

Replace existing custom IDs (required after regenerating a PNG with the same name):

```bash
CLOUDFLARE_API_TOKEN=… pnpm images:upload:overwrite
```

Import from the live git URLs instead of the local files:

```bash
CLOUDFLARE_API_TOKEN=… pnpm images:upload:from-url
```

Do **not** replace `duffy-circle-*.png` with generated lifestyle photos. Those portraits are the supplied gold-circle headshot.
