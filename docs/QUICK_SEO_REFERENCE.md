# Quick SEO Reference - 2026 Best Practices

**Quick copy-paste templates for implementing SEO/GEO/AEO on new pages**

---

## 1. Page Metadata Template

```typescript
import type { Metadata } from 'next'
import { createOgImageUrl, createWebPageSchema, createArticleSchema } from '@/lib/structuredData'

const pageUrl = 'https://www.spanishtrailhomes.com/your-page'

export const metadata: Metadata = {
  title: 'Your Page Title | Spanish Trail Homes',
  description: 'Clear, concise description with primary keywords (150-160 characters)',
  keywords: [
    'Spanish Trail keyword 1',
    'Las Vegas keyword 2',
    'specific location keyword',
  ],
  alternates: {
    canonical: '/your-page',
  },
  openGraph: {
    url: pageUrl,
    title: 'Compelling OG Title',
    description: 'Social media optimized description',
    images: [
      createOgImageUrl({
        title: 'Main Title',
        subtitle: 'Supporting text',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Card Title',
    description: 'Twitter optimized description',
    images: [createOgImageUrl({ title: 'Title', subtitle: 'Subtitle' })],
  },
}
```

---

## 2. Schema Templates

### WebPage Schema (Basic Pages)

```typescript
import Script from 'next/script'
import { createWebPageSchema, createBreadcrumbSchema } from '@/lib/structuredData'

const pageSchema = createWebPageSchema({
  name: 'Page Title',
  description: 'Page description',
  path: '/your-page',
  type: 'WebPage', // or 'AboutPage', 'ContactPage', 'CollectionPage'
})

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Parent Page', url: '/parent' },
  { name: 'Current Page', url: '/your-page' },
])

// In your component JSX:
<Script id="page-schema" type="application/ld+json" strategy="afterInteractive">
  {JSON.stringify(pageSchema)}
</Script>
<Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
  {JSON.stringify(breadcrumbSchema)}
</Script>
```

### Article Schema (Blog/Insights Pages)

```typescript
import { createArticleSchema } from '@/lib/structuredData'

const articleSchema = createArticleSchema({
  headline: 'Article Headline',
  description: 'Article description/summary',
  path: '/your-article',
  datePublished: '2026-06-07T10:00:00-07:00', // ISO 8601 format
  dateModified: '2026-06-07T15:30:00-07:00',
  keywords: ['keyword 1', 'keyword 2', 'keyword 3'],
})

// In your component JSX:
<Script id="article-schema" type="application/ld+json" strategy="afterInteractive">
  {JSON.stringify(articleSchema)}
</Script>
```

### FAQ Schema

```typescript
import { createFAQSchema } from '@/lib/structuredData'

const faqs = [
  {
    question: 'What is the question?',
    answer: 'Direct, complete answer in 40-60 words. Include specific data points and actionable information. Be factual and verifiable.',
  },
  {
    question: 'Second question?',
    answer: 'Second answer with specific details.',
  },
]

const faqSchema = createFAQSchema(faqs)

// In your component JSX:
<Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
  {JSON.stringify(faqSchema)}
</Script>
```

---

## 3. Content Structure for AEO

### Question-Answer Format

```markdown
## What are Spanish Trail HOA fees?

**Answer:** Spanish Trail HOA assessments range from $250-$450 per month depending on the neighborhood. This covers 24/7 guard gate security, community maintenance, landscaping, and access to shared amenities. Estates and custom home neighborhoods typically have higher fees due to larger lots and enhanced services.

### Detailed Breakdown by Neighborhood

The Estates and Estates West neighborhoods average $400-$450 monthly due to secondary gating and larger common areas. Villas and Courtyards range $250-$350 monthly. All fees include:

- 24/7 guard gate staffing and security patrols
- Community landscape maintenance
- Common area lighting and utilities
- Master HOA governance and legal compliance

**Key Takeaway:** Budget $3,000-$5,400 annually for HOA fees when calculating total ownership costs for Spanish Trail homes.
```

**Why This Works:**
- ✅ Question as H2 heading
- ✅ Direct answer in first paragraph (40-60 words)
- ✅ Specific numbers and data points
- ✅ Hierarchical structure (H2 → H3)
- ✅ Bulleted list for clarity
- ✅ Actionable takeaway

---

## 4. Content Chunking Template

```markdown
## Main Topic (H2)

**Quick Summary:** [2-3 sentence overview with key takeaway]

### Subtopic 1 (H3)

[200-300 word focused section on this specific subtopic]

**Data Point:** [Specific statistic or fact]

### Subtopic 2 (H3)

[200-300 word focused section]

**Key Insight:** [Actionable takeaway]

**Related Resources:**
- [Link to related page 1](/link-1)
- [Link to related page 2](/link-2)
```

**Guidelines:**
- Keep each section 200-300 words
- Use clear, hierarchical headings
- Include specific data points
- Add related links for topic depth
- Use bold for emphasis on key facts

---

## 5. Local SEO Checklist

For each page mentioning locations:

- [ ] Include specific address or neighborhood name
- [ ] Mention "Las Vegas" and/or "Nevada"
- [ ] Reference zip code (89117) where relevant
- [ ] Include nearby landmarks or areas (Summerlin, Spring Valley)
- [ ] Add geographic context in first paragraph
- [ ] Use structured data for addresses (schema.org/PostalAddress)

**Example:**
> Spanish Trail Country Club sits at 5050 Spanish Trail Lane in Las Vegas, NV 89117, just west of I-215 between Rainbow Boulevard and Durango Drive. The guard-gated community spans 640 acres in southwest Las Vegas, minutes from Summerlin and Spring Valley.

---

## 6. E-E-A-T Enhancement

### Author Attribution

```typescript
// In Article schema:
author: {
  '@type': 'Person',
  name: 'Dr. Janet Duffy',
  url: 'https://www.spanishtrailhomes.com/about',
  jobTitle: 'REALTOR®',
  affiliation: {
    '@type': 'Organization',
    name: 'Berkshire Hathaway HomeServices Nevada Properties',
  },
}
```

### Content Credentials

Add to article pages:
```html
<div className="author-bio">
  <p className="text-sm text-muted-foreground">
    Written by <a href="/about">Dr. Janet Duffy</a>, Ph.D. in Organizational Leadership 
    and Certified Luxury Marketing Specialist. Dr. Duffy specializes in Spanish Trail 
    real estate with 500+ families advised since 2018.
  </p>
</div>
```

---

## 7. Image Optimization

```typescript
import Image from 'next/image'

<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text with keywords: Spanish Trail golf course homes aerial view"
  width={1200}
  height={630}
  priority={false} // true only for above-fold hero images
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

**Alt Text Formula:**
`[What it shows] + [relevant keyword] + [context]`

**Example:**
- ❌ "golf course"
- ✅ "Spanish Trail Country Club golf course with guard gate entrance and luxury estates"

---

## 8. Internal Linking Strategy

### Link to Authority Pages
```typescript
<Link href="/about">Dr. Janet Duffy</Link>
<Link href="/spanish-trail-market-report">latest market data</Link>
<Link href="/buyers">buyer's guide</Link>
```

### Breadcrumb Navigation
```typescript
import { Breadcrumbs } from '@/components/breadcrumbs'

<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Parent Page', href: '/parent' },
    { label: 'Current Page' }, // No href for current page
  ]}
/>
```

---

## 9. Performance Checklist

- [ ] Images optimized and lazy-loaded
- [ ] Next.js Image component used
- [ ] Scripts use `strategy="afterInteractive"` or `"lazyOnload"`
- [ ] Fonts use `display: 'swap'`
- [ ] Critical CSS inlined
- [ ] Third-party scripts deferred
- [ ] Dynamic imports for heavy components

---

## 10. Pre-Launch Validation

### Schema Validation
1. Test page at [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Validate at [Schema.org Validator](https://validator.schema.org/)
3. Check Search Console for errors

### SEO Validation
- [ ] Title tag 50-60 characters
- [ ] Meta description 150-160 characters
- [ ] H1 tag present and unique
- [ ] Canonical URL set
- [ ] Open Graph tags complete
- [ ] Twitter Card tags complete
- [ ] No broken internal links
- [ ] Mobile responsive
- [ ] Fast load time (<3 seconds)

### Accessibility
- [ ] Alt text on all images
- [ ] Proper heading hierarchy
- [ ] ARIA labels where needed
- [ ] Skip links for navigation
- [ ] Sufficient color contrast
- [ ] Keyboard navigation works

---

## Quick Commands

```bash
# Validate TypeScript
npm run lint

# Format code
npm run format

# Build and check for errors
npm run build

# Test locally
npm run dev
```

---

## Common Keywords Bank

**Primary Location:**
- Spanish Trail
- Spanish Trail homes
- Spanish Trail Country Club
- Las Vegas 89117
- Southwest Las Vegas

**Property Types:**
- luxury homes
- guard-gated estates
- golf course properties
- custom homes
- townhomes
- villas

**Features:**
- guard gated
- golf course
- country club
- luxury community
- private club

**Service:**
- Dr. Janet Duffy
- REALTOR®
- Berkshire Hathaway
- real estate agent
- luxury real estate specialist

---

## Resources

- **Schema Helpers:** `/lib/structuredData.ts`
- **SEO Config:** `/lib/seoConfig.ts`
- **Full Documentation:** `/docs/SEO_OPTIMIZATION_2026.md`
- **Site Content:** `/lib/spanishTrailContent.ts`

---

*Updated: June 7, 2026*  
*For questions: DrDuffySells@SpanishTrailHomes.com*
