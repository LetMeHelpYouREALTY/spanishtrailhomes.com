# Security Best Practices

This document outlines the security measures implemented in this Next.js 15 application following 2026 industry best practices.

## Security Headers

### Configured Headers (vercel.json)

All security headers are configured in `vercel.json` and automatically applied by Vercel:

#### 1. Content-Security-Policy (CSP)

**Purpose:** Browser-enforced protection against XSS attacks

```
default-src 'self';
script-src 'self' 'unsafe-eval' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
font-src 'self' data:;
connect-src 'self' https://api.v0.dev https://*.vercel.app;
frame-ancestors 'none';
base-uri 'self';
form-action 'self'
```

**Note:** Without CSP, if an attacker injects a script tag, nothing stops it from executing. This header is the first line of defense against XSS.

**Customization:** Update CSP in `vercel.json` when adding new external services or CDNs.

#### 2. Strict-Transport-Security (HSTS)

**Purpose:** Force HTTPS and prevent protocol downgrade attacks

```
max-age=63072000; includeSubDomains; preload
```

- **max-age:** 2 years (63072000 seconds)
- **includeSubDomains:** Apply to all subdomains
- **preload:** Eligible for browser HSTS preload list

#### 3. X-Frame-Options

**Purpose:** Prevent clickjacking attacks

```
DENY
```

Prevents the page from being embedded in iframes entirely.

#### 4. X-Content-Type-Options

**Purpose:** Prevent MIME-type sniffing

```
nosniff
```

Forces browsers to respect declared content types, preventing MIME-based attacks.

#### 5. Referrer-Policy

**Purpose:** Control referrer information leakage

```
strict-origin-when-cross-origin
```

Sends full referrer for same-origin, only origin for cross-origin HTTPS, nothing for HTTP.

#### 6. Permissions-Policy

**Purpose:** Restrict browser features

```
camera=(), microphone=(), geolocation=()
```

Disables camera, microphone, and geolocation access entirely since the app doesn't need these features.

#### 7. X-XSS-Protection

**Purpose:** Legacy XSS protection for older browsers

```
1; mode=block
```

Enables XSS filtering and blocks page rendering if attack detected (CSP is the modern replacement).

## Infrastructure Security

### Vercel Platform Features

Vercel provides the following security measures automatically:

- ✅ **Automatic HTTPS** - SSL/TLS certificates with auto-renewal
- ✅ **DDoS Protection** - Infrastructure-level attack mitigation
- ✅ **Edge Network** - Distributed denial of service resistance
- ✅ **Automatic Security Updates** - Platform security patches

## Environment Variable Security

### Environment Scoping

Environment variables are scoped to three environments:

| Environment | Use Case | Accessible By |
|-------------|----------|---------------|
| Production | Live site | Production deployments only |
| Preview | PR deployments | Preview deployments |
| Development | Local dev | Local machines via `vercel pull` |

**Critical:** Never share secrets across environments. Use different API keys/tokens for each.

### Secret Management Best Practices

✅ **DO:**
- Set all secrets in Vercel Dashboard → Environment Variables
- Use different values for Production/Preview/Development
- Rotate secrets regularly (at least quarterly)
- Use `vercel pull` to sync environment variables locally
- Audit environment variable access logs

❌ **DON'T:**
- Commit `.env`, `.env.local`, or `.env.production` to version control
- Share production secrets in Preview or Development
- Hardcode API keys in source code
- Log environment variables to console in production
- Share secrets via insecure channels (Slack, email)

## Deployment Protection

### Preview Deployment Security

**Risk:** Preview deployments use predictable URLs and are publicly accessible by default.

**Solution:** Enable Deployment Protection

1. Go to Project Settings → Deployment Protection
2. Choose protection method:
   - **Vercel Authentication** - Requires Vercel account login
   - **Password Protection** - Simple password (good for external stakeholders)
   - **Trusted IPs** - Whitelist specific IP ranges

**Recommended:** Use Vercel Authentication for internal teams, Password Protection for client previews.

### Production Deployment Security

- Only deploy from `main` branch
- Require code review before merge
- Use branch protection rules on GitHub
- Enable status checks (tests, linting) before merge

## API Security

### Rate Limiting

This application implements rate limiting via Upstash Redis:

- **Limit:** 3 AI generations per 12 hours per IP
- **Algorithm:** Sliding window
- **Scope:** All `/api/generate` and chat message endpoints

**Configuration:** Set `KV_REST_API_URL` and `KV_REST_API_TOKEN` environment variables.

### API Route Protection

All API routes follow these security practices:

1. **Input Validation** - Validate all request parameters
2. **Error Handling** - Never expose stack traces or internal errors
3. **CORS Configuration** - Restrict origins if needed
4. **Authentication** - Use API keys (V0_API_KEY) for external services
5. **Rate Limiting** - Prevent abuse via Upstash Redis

### SSRF Prevention

**Risk:** Server-Side Request Forgery in AI generation or file uploads

**Mitigation:**
- Validate and sanitize all URLs before making requests
- Use allowlist for external API endpoints
- Never directly pass user input to fetch/axios
- Implement request timeout limits

## Dependency Security

### Regular Updates

```bash
# Check for security vulnerabilities
pnpm audit

# Update dependencies
pnpm update

# Update to latest versions
pnpm upgrade-interactive --latest
```

**Schedule:** Review and update dependencies monthly, security patches immediately.

### Known Vulnerabilities (2026)

Recent Next.js security releases addressed:
- Denial of Service vulnerabilities
- Middleware and proxy bypass issues
- Server-side request forgery (SSRF)
- Cache poisoning attacks
- Cross-site scripting (XSS)

**Action:** Always use the latest Next.js 15.x version.

## Monitoring & Incident Response

### Security Monitoring

1. **Vercel Logs** - Monitor for unusual patterns
2. **Analytics** - Track abnormal traffic spikes
3. **Rate Limit Violations** - Alert on repeated violations
4. **Error Tracking** - Monitor 4xx/5xx responses

### Incident Response Plan

1. **Detection** - Identify security incident via monitoring
2. **Containment** - Disable affected deployments if needed
3. **Investigation** - Review logs, identify root cause
4. **Remediation** - Deploy fix, rotate compromised secrets
5. **Post-Mortem** - Document incident, update security measures

## Compliance Checklist

Use this checklist before each production deployment:

- [ ] All security headers configured in `vercel.json`
- [ ] Environment variables properly scoped
- [ ] Deployment Protection enabled for previews
- [ ] No secrets in source code or `.env` files committed
- [ ] Dependencies updated (no known vulnerabilities)
- [ ] Rate limiting configured and tested
- [ ] HTTPS enforced via HSTS
- [ ] CSP policy tested and working
- [ ] API routes validate all inputs
- [ ] Error messages don't leak sensitive info

## Security Contacts

**Report Security Issues:**
- Email: janet.duffy@bhhsnv.com
- Include: Description, reproduction steps, impact assessment

**Do NOT** disclose security vulnerabilities publicly until patched.

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/security)
- [Vercel Security Documentation](https://vercel.com/docs/security)
- [Content Security Policy Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [HSTS Preload List](https://hstspreload.org/)

---

**Last Updated:** 2026-06-07  
**Next Review:** 2026-09-07 (Quarterly)
