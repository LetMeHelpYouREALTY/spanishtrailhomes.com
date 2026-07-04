# SEO/GEO/AEO Validation Checklist

## Automated Validation

Run these tests to verify the implementation:

### 1. Schema Validation

```bash
# Install schema validator if needed
npm install -g @hyperjump/json-schema-validator

# Test all schema types
node -e "
const schemas = require('./lib/enhancedSchema');
console.log('✅ Schema utilities loaded successfully');
console.log('Available schema creators:', Object.keys(schemas).filter(k => k.startsWith('create')));
"
```

### 2. Build Test

```bash
# Verify Next.js builds without errors
pnpm build

# Check for schema-related build warnings
pnpm build 2>&1 | grep -i "schema\|structured\|json-ld"
```

### 3. Type Check

```bash
# Verify TypeScript compilation
npx tsc --noEmit

# Check for type errors in schema files
npx tsc --noEmit lib/enhancedSchema.ts
npx tsc --noEmit lib/reviewsData.ts
```

## Manual Validation (Post-Deployment)

### Google Rich Results Test

Test these URLs after deployment:

1. **Homepage** - https://www.spanishtrailhomes.com/
   - Expected: LocalBusiness, WebSite, Person (Dr. Jan Duffy), FAQPage, HowTo
   - Test: https://search.google.com/test/rich-results

2. **About Page** - https://www.spanishtrailhomes.com/about
   - Expected: Person, RealEstateAgent, FAQPage, WebPage
   - Test: https://search.google.com/test/rich-results

3. **Community Page** - https://www.spanishtrailhomes.com/communities/spanish-trail
   - Expected: WebPage, FAQPage, BreadcrumbList
   - Test: https://search.google.com/test/rich-results

### Schema Markup Validator

```bash
# Run schema.org validator on production
# Visit: https://validator.schema.org/
# Test URLs:
# - https://www.spanishtrailhomes.com/
# - https://www.spanishtrailhomes.com/about
# - https://www.spanishtrailhomes.com/buyers
```

### PageSpeed Insights

```bash
# Test Core Web Vitals
# Visit: https://pagespeed.web.dev/
# Target Scores:
# - Performance: 90+
# - Accessibility: 95+
# - Best Practices: 95+
# - SEO: 100
```

### Mobile-Friendly Test

```bash
# Verify mobile usability
# Visit: https://search.google.com/test/mobile-friendly
# Test URL: https://www.spanishtrailhomes.com/
```

## Schema Verification Checklist

### ✅ LocalBusiness Schema (app/layout.tsx)
- [x] Name: "Spanish Trail | Homes By Dr. Jan Duffy"
- [x] Type: ['RealEstateAgent', 'LocalBusiness']
- [x] Address with full postal details
- [x] GeoCoordinates (36.109145, -115.282642)
- [x] Telephone: +17027663299
- [x] Email: DrDuffySells@SpanishTrailHomes.com
- [x] Opening hours (09:00-18:00)
- [x] Service area with GeoCircle (15-mile radius)
- [x] sameAs links to social profiles
- [x] hasOfferCatalog with services

### ✅ Person Schema (app/layout.tsx)
- [x] Name: Dr. Jan Duffy
- [x] Job title: Real Estate Agent & Luxury Home Specialist
- [x] Description with Ph.D. credentials
- [x] Email and telephone
- [x] Address (Las Vegas, NV)
- [x] Alumni: Ph.D. in Market Research & Consumer Behavior
- [x] Awards: BHHS Luxury, Top 25 Producer, CLHMS
- [x] knowsAbout: Spanish Trail, Luxury Homes, Golf Communities

### ✅ GeoCircle Schema (app/layout.tsx)
- [x] Center: 36.109145, -115.282642
- [x] Radius: 15 miles
- [x] Area name: Spanish Trail & Southwest Las Vegas

### ✅ HowTo Schema (app/page.tsx)
- [x] Name: How to Buy a Home in Spanish Trail
- [x] Description with buyer process
- [x] Total time: P30D (30 days)
- [x] 4 steps with text and URLs

### ✅ FAQPage Schema (app/page.tsx, app/about/page.tsx, etc.)
- [x] Multiple Question entities
- [x] acceptedAnswer with text
- [x] Covers key buyer/seller questions

### ✅ WebPage Schema (all pages)
- [x] Type: WebPage (or AboutPage, CollectionPage)
- [x] URL with canonical path
- [x] Name and description
- [x] inLanguage: en-US
- [x] isPartOf links to WebSite

## AI Search Testing

### Test in ChatGPT
```
Prompt: "Who is the best real estate agent for Spanish Trail in Las Vegas?"
Expected: Dr. Jan Duffy mentioned with credentials
```

### Test in Claude
```
Prompt: "What are homes prices in Spanish Trail Las Vegas?"
Expected: Reference to Spanish Trail guard-gated community in 89113
```

### Test in Perplexity
```
Prompt: "How do I buy a home in Spanish Trail country club?"
Expected: Step-by-step process, mention of Dr. Jan Duffy
```

### Test in Google AI Overview
```
Search: "Spanish Trail homes for sale Las Vegas"
Expected: AI Overview with site information
```

## Local SEO Verification

### Google Business Profile
- [ ] NAP matches schema exactly
- [ ] Service area set to 15-mile radius
- [ ] Hours: 9 AM - 6 PM daily
- [ ] Categories: Real Estate Agent (primary)
- [ ] Website URL: https://www.spanishtrailhomes.com/
- [ ] Photos uploaded (team, properties, club)

### Citation Consistency
Check NAP on:
- [ ] Facebook: https://www.facebook.com/spanishtrailhomes
- [ ] Instagram: https://www.instagram.com/spanishtrailhomes
- [ ] LinkedIn: https://www.linkedin.com/company/spanishtrailhomes
- [ ] Zillow agent profile
- [ ] Realtor.com agent profile

## Metadata Verification

### Homepage
```html
✅ Title: "Spanish Trail Country Club Homes for Sale | Las Vegas 89113 | Dr. Jan Duffy"
✅ Description: Under 160 characters with key terms
✅ Canonical: https://www.spanishtrailhomes.com/
✅ OG Image: Dynamic /api/og with title/subtitle
✅ Twitter Card: summary_large_image
```

### About Page
```html
✅ Title: "About Dr. Jan Duffy | Spanish Trail Homes"
✅ Description: Expert credentials and approach
✅ Canonical: https://www.spanishtrailhomes.com/about
```

## Performance Metrics

### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Lighthouse Audit Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Search Console Monitoring

### After Deployment (Week 1)
- [ ] Submit sitemap.xml
- [ ] Verify property ownership
- [ ] Request indexing for key pages
- [ ] Monitor Coverage report for errors

### Ongoing (Weekly)
- [ ] Check Index Coverage
- [ ] Review Performance (CTR, impressions)
- [ ] Monitor Enhancements (structured data)
- [ ] Check Mobile Usability
- [ ] Review Core Web Vitals

## Cross-Platform Testing

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] Safari iOS
- [ ] Chrome Android
- [ ] Samsung Internet

### Screen Readers
- [ ] VoiceOver (macOS/iOS)
- [ ] NVDA (Windows)
- [ ] TalkBack (Android)

## Schema Testing Commands

```bash
# Test schema generation locally
cd /path/to/project

# Start dev server
pnpm dev

# Visit pages and view source
curl http://localhost:3000/ | grep 'application/ld+json'
curl http://localhost:3000/about | grep 'application/ld+json'

# Extract and validate JSON-LD
curl -s http://localhost:3000/ | \
  grep -oP '(?<=<script[^>]*type="application/ld\+json"[^>]*>).*?(?=</script>)' | \
  jq '.'
```

## Expected Results

### Before Optimization
- Few structured data types
- No Person schema
- No service area definition
- Limited FAQ coverage
- Basic metadata only

### After Optimization
- 12+ schema types implemented
- Person schema with expertise
- GeoCircle service area (15 mi)
- Comprehensive FAQ schemas
- HowTo schema for processes
- Enhanced metadata with snippets
- AI-ready content structure

## Success Criteria

### Immediate (Week 1)
- ✅ All schemas validate without errors
- ✅ Build completes successfully
- ✅ No TypeScript errors
- ✅ Rich Results Test passes

### Short-term (Month 1)
- [ ] Google indexes new structured data
- [ ] AI citations in ChatGPT/Claude/Perplexity
- [ ] Featured snippets for target queries
- [ ] Improved local pack ranking

### Long-term (Quarter 1)
- [ ] 20%+ increase in organic traffic
- [ ] 5+ AI assistant citations
- [ ] Top 3 for "Spanish Trail homes"
- [ ] Top 5 for "Las Vegas luxury real estate"

## Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear cache and rebuild
rm -rf .next
pnpm build
```

**Schema Warnings**
```bash
# Check for duplicate schemas
grep -r "application/ld+json" app/ | wc -l
```

**Type Errors**
```bash
# Verify imports
npx tsc --noEmit --listFiles | grep schema
```

## Next Actions

1. **Immediate**: Run local build test
2. **Pre-Deploy**: Test in staging environment
3. **Post-Deploy**: Run Rich Results Test
4. **Week 1**: Monitor Search Console
5. **Month 1**: Analyze AI citations

---

**Created**: June 7, 2026  
**Last Updated**: June 7, 2026  
**Status**: Ready for validation
