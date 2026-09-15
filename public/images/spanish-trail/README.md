# Spanish Trail section images

**Agent portraits:** `duffy-circle-*.png` are unique Dr. Jan Duffy headshot variants
generated from `scripts/generate-agent-portraits.py` using
`scripts/assets/duffy-circle-source.jpg`. They are the supplied gold circle
(no caption bars, no extra rings, no zoom). Do not replace her face with AI.

**Primary storage:** Cloudflare Images (`spanish-trail/<asset-id>`).
**Secondary storage:** these git-tracked PNG files.

Heading images (`h1-*`, `h2-*`, `h3-*`) match on-page H1/H2/H3 topics. Regenerated 2026-09-15:
`h2-fitness` (desert club gym, not tropical), `h2-accessible-entrance` (ramp + accessible parking),
`h2-reviews-terrace` (Spanish Trail golf terrace, not a lake valley).
Earlier: `h2-awards-study`, `h3-listing-home-a`, `h2-clubhouse-arrival`, `h2-office-map`.

Runtime URLs are resolved in `lib/cloudflare-images.ts`:

1. If `NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH` is set, browsers load
   `https://imagedelivery.net/<hash>/spanish-trail/<asset-id>/public`
   (or `NEXT_PUBLIC_CLOUDFLARE_IMAGES_BASE` for a custom domain).
2. Otherwise the site serves this folder from Vercel/git.

Upload git copies to Cloudflare:

```bash
CLOUDFLARE_ACCOUNT_ID=… CLOUDFLARE_API_TOKEN=… pnpm images:upload
```
