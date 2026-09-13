# Spanish Trail section images

**Agent portraits:** `agent-duffy-*.png` are unique Dr. Jan Duffy headshot variants
(crop, background, caption) generated from `scripts/generate-agent-portraits.py`.
Do not replace her face with AI. Re-run the script after updating the source photo.

**Primary storage:** Cloudflare Images (`spanish-trail/<asset-id>`).
**Secondary storage:** these git-tracked PNG files.

Runtime URLs are resolved in `lib/cloudflare-images.ts`:

1. If `NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH` is set, browsers load
   `https://imagedelivery.net/<hash>/spanish-trail/<asset-id>/public`
   (or `NEXT_PUBLIC_CLOUDFLARE_IMAGES_BASE` for a custom domain).
2. Otherwise the site serves this folder from Vercel/git.

Upload git copies to Cloudflare:

```bash
CLOUDFLARE_ACCOUNT_ID=… CLOUDFLARE_API_TOKEN=… pnpm images:upload
```
