# Deployment Guide - 2026 Best Practices

This guide follows the latest Vercel and Next.js 15 deployment best practices for 2026.

## Recommended Approach: Git-Based Deployment

**The gold standard for Next.js deployment in 2026 is Git-based workflow** - this provides automatic deployments, complete audit trails, and zero manual intervention.

### Initial Setup (One-Time)

#### 1. Connect Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/new)
2. Click "Import Project"
3. Select your Git provider (GitHub, GitLab, or Bitbucket)
4. Choose this repository: `DrJanDuffy/spanishtrailhomes.com`
5. Configure project settings:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave default)
   - **Build Command:** `pnpm build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `pnpm install` (auto-detected)

#### 2. Configure Environment Variables

Set environment variables in the Vercel Dashboard:

1. Go to Project Settings → Environment Variables
2. Add required variables for each environment:

| Variable | Required | Production | Preview | Development |
|----------|----------|------------|---------|-------------|
| `V0_API_KEY` | Yes | ✓ | ✓ | ✓ |
| `KV_REST_API_URL` | No | ✓ | ✓ | - |
| `KV_REST_API_TOKEN` | No | ✓ | ✓ | - |

**Best Practice:** Set different values per environment to prevent testing against production APIs.

#### 3. Configure Domain

1. Go to Project Settings → Domains
2. Add your production domain: `spanishtrailhomes.com`
3. Follow DNS configuration instructions
4. Verify domain is set as primary

#### 4. Enable Deployment Protection (Critical for Security)

Preview deployments are publicly accessible via predictable URLs. Protect them:

1. Go to Project Settings → Deployment Protection
2. Enable "Vercel Authentication" or "Password Protection"
3. This prevents unauthorized access to preview deployments

## Deployment Workflow

### Automatic Deployments (Recommended)

Once Git integration is set up, deployments happen automatically:

- **Push to `main` branch** → Production deployment to spanishtrailhomes.com
- **Push to any other branch** → Preview deployment with unique URL
- **Open Pull Request** → Preview deployment linked in PR

**No manual commands needed!** Every push triggers deployment automatically.

### Manual CLI Deployment (For Testing Only)

CLI deployments should only be used for quick local tests, not production:

```bash
# Install Vercel CLI
npm i -g vercel

# Link to project (creates local .vercel/ directory - gitignored)
vercel link

# Deploy preview
vercel

# Deploy to production (use Git-based workflow instead!)
vercel --prod
```

**Important:** The `.vercel/` directory is gitignored per best practices. Each developer/environment must run `vercel link` locally.

## Local Development

### Pull Environment Variables

Use `vercel pull` instead of managing `.env` files:

```bash
# Pull environment variables for development
vercel pull --environment=development

# This creates .vercel/ directory locally with:
# - Project linking info
# - Environment variables
# - Project configuration
```

### Run Development Server

```bash
pnpm dev
```

The `vercel dev` command is available but `pnpm dev` is preferred for Next.js 15.

## CI/CD Integration

For advanced workflows (GitHub Actions, etc.):

```yaml
name: Vercel Production Deployment
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
      
      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
      
      - name: Build Project Artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
      
      - name: Deploy to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

**Best Practice for CI:** Use `--yes` flag for non-interactive mode and `vercel pull` for environment variables.

## Security Best Practices (2026)

### 1. Security Headers

This project includes comprehensive security headers in `vercel.json`:

- **Content-Security-Policy (CSP)** - Protection against XSS attacks
- **Strict-Transport-Security (HSTS)** - Force HTTPS with 2-year max-age
- **X-Frame-Options** - Prevent clickjacking
- **X-Content-Type-Options** - Prevent MIME-type sniffing
- **Referrer-Policy** - Control referrer information
- **Permissions-Policy** - Restrict browser features (camera, microphone, geolocation)

### 2. Environment Variable Scoping

- Production secrets should ONLY be available in Production environment
- Never commit `.env` files to version control
- Use Vercel Dashboard for secret management

### 3. Deployment Protection

- Enable for all preview deployments
- Prevents exposure of in-development features
- Required for compliance in most organizations

### 4. HTTPS & DDoS Protection

Vercel provides automatically:
- Automatic HTTPS with SSL/TLS certificates
- DDoS protection at infrastructure level
- Edge network optimization

## Monitoring & Analytics

### Enable Vercel Analytics

1. Go to Project Settings → Analytics
2. Enable **Web Analytics** for page views and user metrics
3. Enable **Speed Insights** for Core Web Vitals monitoring

### Monitor Deployments

- View deployment logs in Vercel Dashboard
- Set up Slack/Discord webhooks for deployment notifications
- Use Vercel CLI `vercel logs` for real-time log streaming

## Troubleshooting

### "Project not found" error

Run `vercel link` in your local directory to reconnect to the project.

### Environment variables not available

Use `vercel pull --environment=development` to sync environment variables locally.

### Preview deployment not protected

Enable Deployment Protection in Project Settings → Deployment Protection.

### Build failures

1. Check build logs in Vercel Dashboard
2. Verify `package.json` scripts are correct
3. Test build locally: `pnpm build`
4. Ensure all environment variables are set

### Domain not attached

1. Verify domain configuration in Project Settings → Domains
2. Check DNS records are properly configured
3. Ensure deployment is to `main` branch (production)

## Advanced: Edge Deployment & Canary Releases

For 2026, the gold standard is **Canary releases at the edge**:

1. Go to Project Settings → Advanced
2. Enable Traffic Splitting
3. Configure percentage-based rollouts
4. Route traffic by cookies, headers, or geolocation

This allows zero-downtime deployments with instant rollback capability.

## Best Practices Summary

✅ **DO:**
- Use Git-based workflow for all production deployments
- Set environment variables in Vercel Dashboard
- Enable Deployment Protection for previews
- Use `vercel pull` for local environment variables
- Keep `.vercel/` directory in `.gitignore`
- Monitor deployments via Vercel Dashboard
- Configure comprehensive security headers

❌ **DON'T:**
- Use CLI for production deployments (use Git instead)
- Commit `.env` or `.vercel/` to version control
- Deploy without environment variable scoping
- Skip Deployment Protection on previews
- Manually manage SSL certificates (Vercel handles this)

## Resources

- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs)
- [Vercel Project Linking](https://vercel.com/docs/cli/project-linking)
- [Security Best Practices](https://vercel.com/docs/conformance/rules/nextjs_missing_security_headers)
- [Deployment Protection](https://vercel.com/docs/deployments/preview-deployments#deployment-protection)

---

**Questions?** Contact the team or refer to [Vercel Support](https://vercel.com/support).
