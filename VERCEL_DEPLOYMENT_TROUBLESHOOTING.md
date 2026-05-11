# Vercel Deployment Troubleshooting

## Site down: ERR_TOO_MANY_REDIRECTS (often 308 to the same URL)

If the browser reports **“redirected you too many times”** and tools such as `curl -I` show **HTTP 308** (or 301) with a **`Location` header identical to the URL you requested** (for example `https://www.spanishtrailhomes.com/about` → `Location: https://www.spanishtrailhomes.com/about`), the usual cause is **Cloudflare SSL/TLS set to “Flexible”** in front of Vercel.

Under Flexible mode, Cloudflare terminates HTTPS for visitors but can reach your Vercel deployment over **HTTP**. Vercel then responds with a **308 redirect to the HTTPS URL**. The client is already on HTTPS, so the browser follows the same URL again and the loop repeats.

### Fix (pick one primary approach)

1. **Preferred with Cloudflare proxy (orange cloud):** In Cloudflare, open **SSL/TLS** and set encryption mode to **Full** or **Full (strict)**—not Flexible. Then follow Vercel’s [Cloudflare integration](https://vercel.com/docs/integrations/cloudflare) so certificates and records stay valid.
2. **Alternative:** Use **DNS only** (gray cloud) for the hostname so traffic goes straight to Vercel and Cloudflare does not proxy the origin connection (avoids this class of SSL mismatch entirely).

Official reference: [How do I resolve “err_too_many_redirects” when using a Cloudflare proxy with Vercel?](https://vercel.com/guides/resolve-err-too-many-redirects-when-using-cloudflare-proxy-with-vercel)

This is an **infrastructure / DNS dashboard** fix; changing application code alone will not resolve Flexible-vs-Vercel redirect loops.

---

## Issue
Git push did not trigger a Vercel deployment.

## Current Status
- ✅ Commit created locally: `3d99bbd` - "Add internal links across pages for improved SEO and navigation"
- ⚠️ Commit not yet pushed to GitHub remote
- ⚠️ Local branch is ahead of origin/main by 1 commit

## Troubleshooting Steps

### Option 1: Complete the Git Push (Recommended)

**Using GitHub Desktop or Git GUI:**
1. Open GitHub Desktop or your preferred Git GUI tool
2. You should see the unpushed commit
3. Click "Push origin" to push to GitHub
4. Vercel should automatically detect the push and deploy

**Using Command Line:**
```bash
# If you need to authenticate:
git push origin main

# Or if you have SSH set up:
git remote set-url origin git@github.com:DrJanDuffy/spanishtrailhomes.com.git
git push origin main
```

### Option 2: Trigger Vercel Deployment Manually

**Via Vercel Dashboard:**
1. Go to https://vercel.com/dashboard
2. Find your project (spanishtrailhomes.com)
3. Click "Deployments" tab
4. Click "Redeploy" on the latest deployment
5. Or click "Create Deployment" and select the branch/commit

**Via Vercel CLI:**
```bash
# Install Vercel CLI if not installed
npm i -g vercel

# Deploy manually
vercel --prod
```

### Option 3: Verify Vercel Integration

1. Go to Vercel Dashboard → Your Project → Settings → Git
2. Verify that GitHub repository is connected
3. Check that the correct branch (main) is set for Production
4. Verify webhooks are configured correctly

### Option 4: Check GitHub Webhooks

1. Go to GitHub repository → Settings → Webhooks
2. Verify Vercel webhook is present and active
3. Check recent deliveries for any failed webhook calls
4. If missing, reconnect the repository in Vercel

## Files Changed in This Commit

**31 files changed:**
- Breadcrumb enhancements (14 files)
- FAQ enhancements (5 files)
- Internal linking improvements (3 files)
- Documentation files (9 new markdown files)
- Layout and metadata updates

## Next Steps

1. **Complete the git push** to trigger automatic deployment
2. **Monitor Vercel dashboard** for deployment status
3. **Check deployment logs** if deployment fails
4. **Verify build succeeds** with all the new changes

## Alternative: Deploy via Vercel Dashboard

If git push continues to have issues:

1. **Manual Deployment:**
   - Go to Vercel Dashboard
   - Select your project
   - Click "Deployments" → "Create Deployment"
   - Connect to GitHub and select branch/commit

2. **Redeploy Latest:**
   - Find the last successful deployment
   - Click "Redeploy"
   - This will rebuild with the latest GitHub state

## Expected Deployment Time

- **Automatic deployment:** Usually starts within 1-2 minutes after push
- **Build time:** Typically 2-5 minutes depending on project size
- **Total:** 3-7 minutes from push to live site

## Verification After Deployment

1. Check Vercel dashboard for deployment status
2. Verify build logs for any errors
3. Test the live site at your Vercel URL
4. Confirm all changes are live


