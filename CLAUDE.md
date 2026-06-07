# Spanish Trail Homes - Claude AI Development Guide

## Project Overview

Spanish Trail Homes is a Next.js 15 real estate website specializing in luxury homes in the Spanish Trail guard-gated community in Las Vegas, Nevada. The site is built with modern SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization) best practices for 2026.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Runtime:** React 19 with TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI primitives
- **Fonts:** Playfair Display (headings), Lato (body)
- **API Integration:** v0-sdk, RealScout
- **Analytics:** Google Analytics 4

## SEO/GEO/AEO Strategy (2026 Best Practices)

### Search Engine Optimization (SEO)

#### Core Principles
- Server-side rendering (SSR) for all content pages
- Metadata API for dynamic meta tags and Open Graph
- Canonical URLs on all pages
- Structured data (JSON-LD) for rich results
- Strategic code splitting and prefetching
- Core Web Vitals optimization

#### Implementation
- `app/layout.tsx` - Root metadata and structured data
- `lib/structuredData.ts` - Schema.org utilities
- `lib/enhancedSchema.ts` - Advanced schema types (2026)
- `app/robots.ts` - Robots.txt configuration
- `app/sitemap.ts` - Dynamic XML sitemap

### Generative Engine Optimization (GEO)

GEO focuses on optimizing for AI assistants like ChatGPT, Claude, Perplexity, and Google AI Overviews.

#### Key Strategies
1. **Structured Data First**: Every page includes comprehensive JSON-LD markup
2. **Clear Entity Relationships**: Use `@id` and entity references throughout schema
3. **Service Area Definition**: GeoCircle schema defines geographic coverage
4. **Expert Signals**: Person schema for Dr. Jan Duffy with credentials and expertise
5. **Factual Content**: Lead with clear definitions and answers
6. **Source Attribution**: Internal linking to authoritative content

#### Implementation Checklist
- [x] LocalBusiness schema with complete NAP (Name, Address, Phone)
- [x] Person schema for subject matter expert (Dr. Jan Duffy)
- [x] GeoCircle for service area coverage
- [x] RealEstateAgent type classification
- [x] Service catalog with detailed offerings
- [x] FAQ schema on key pages
- [x] Article schema for insights and blog posts
- [x] Review and rating schema preparation

### Answer Engine Optimization (AEO)

AEO ensures content is easily extracted and cited by AI search engines and answer engines.

#### Content Structure Rules
1. **Lead with Answers**: Put the answer in the first paragraph
2. **Question Headings**: Use questions as H2/H3 headings where appropriate
3. **Definition Lists**: Use `<dl>`, `<dt>`, `<dd>` for structured information
4. **Tables for Comparisons**: Data tables are easily extracted by AI
5. **Clear Attribution**: Author bylines and publication dates
6. **Bullet Points**: Key information in scannable lists
7. **No Buried Information**: Important facts appear early

#### Schema for AEO
- **FAQPage**: For pages with multiple Q&A
- **QAPage**: For single question-answer pages
- **HowTo**: For step-by-step guides
- **Article**: For editorial content with author and dates
- **Person**: For expertise and E-E-A-T signals

### Local SEO & Google Business Profile

#### GBP Alignment
All business information syncs with Google Business Profile settings:
- Legal name: "Spanish Trail | Homes By Dr. Jan Duffy"
- Primary category: Real Estate Agent
- Service area: Spanish Trail & Southwest Las Vegas (15-mile radius)
- Hours: 9 AM - 6 PM daily

#### NAP Consistency
Business information is defined once in `lib/gbp-business.ts` and imported everywhere to ensure consistency across:
- Structured data
- Contact pages
- Footer
- About page

#### Local Schema
- PostalAddress with full details
- GeoCoordinates for exact location
- OpeningHoursSpecification for business hours
- areaServed with Place and GeoCircle definitions
- sameAs linking to social profiles and Google Maps

## Schema.org Implementation

### Core Schema Types Used

1. **Organization/LocalBusiness** (`app/layout.tsx`)
   - Type: `['RealEstateAgent', 'LocalBusiness']`
   - Includes: address, geo, hours, services, contact info

2. **Person** (`lib/enhancedSchema.ts`)
   - Dr. Jan Duffy expertise and credentials
   - Awards, education, specializations

3. **WebSite** (`app/layout.tsx`)
   - Site-level entity
   - Links to publisher (LocalBusiness)

4. **WebPage** (per page)
   - Page-level metadata
   - Links to parent WebSite via `isPartOf`

5. **BreadcrumbList** (navigation pages)
   - Helps search engines understand site hierarchy

6. **FAQPage** (pages with Q&A sections)
   - Structured question-answer pairs
   - Eligible for FAQ rich results

7. **Article** (blog/insights pages)
   - Author attribution
   - Publication and modification dates
   - Improves E-E-A-T signals

### Adding New Schema

When creating new content types, use utilities from `lib/enhancedSchema.ts`:

```typescript
import { createArticleSchema, createHowToSchema } from '@/lib/enhancedSchema'

// For blog posts
const articleSchema = createArticleSchema({
  headline: 'Title',
  description: 'Summary',
  path: '/path',
  datePublished: '2026-06-07',
  dateModified: '2026-06-07',
  images: ['https://example.com/image.jpg']
})

// For guides
const howToSchema = createHowToSchema({
  name: 'How to Buy a Home in Spanish Trail',
  description: 'Step-by-step guide',
  path: '/buyers',
  steps: [
    { name: 'Step 1', text: 'Description...' },
    { name: 'Step 2', text: 'Description...' }
  ]
})
```

## Content Guidelines for AI Optimization

### Writing for Answer Engines

1. **Start with a Clear Definition**
   ```
   Spanish Trail is a private guard-gated golf community in southwest 
   Las Vegas (89113) centered on Spanish Trail Country Club.
   ```

2. **Use Question Headings**
   ```
   ## What is Spanish Trail?
   ## How much do homes cost in Spanish Trail?
   ## Who is the best Spanish Trail realtor?
   ```

3. **Provide Direct Answers First**
   - Answer in the first 1-2 sentences
   - Then provide supporting details
   - Cite internal sources with links

4. **Include Specific Data**
   - Numbers, dates, prices
   - Ranges and comparisons
   - Statistics with context

5. **Avoid Marketing Fluff**
   - AI engines ignore vague claims
   - Stick to factual, verifiable information
   - Use concrete examples

### Metadata Best Practices

Every page should include:

```typescript
export const metadata: Metadata = {
  title: 'Specific, Keyword-Rich Title Under 60 Characters',
  description: 'Clear description 150-160 characters with primary keywords and value proposition.',
  alternates: {
    canonical: getCanonicalUrl('/page-path'),
  },
  openGraph: {
    url: pageUrl,
    title: 'OG title (can differ from meta title)',
    description: 'OG description',
    images: [createOgImageUrl({ title: '...', subtitle: '...' })],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter title',
    description: 'Twitter description',
    images: [createOgImageUrl({ title: '...', subtitle: '...' })],
  },
}
```

## Performance Optimization

### Image Best Practices
- Use Next.js Image component
- Provide width, height, and alt text
- Set priority for above-fold images
- Use sizes attribute for responsive images
- Lazy load below-fold images

### Font Loading
- Preload critical fonts in layout
- Use font-display: swap
- Subset fonts to reduce payload

### External Resources
- Preconnect to critical domains
- DNS prefetch for secondary domains
- Lazy load third-party scripts

## Testing & Validation

### Before Deployment

1. **Rich Results Test**
   - https://search.google.com/test/rich-results
   - Test homepage, key landing pages, and FAQ pages

2. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Aim for 90+ on mobile and desktop
   - Monitor Core Web Vitals

3. **Schema Markup Validator**
   - https://validator.schema.org/
   - Validate JSON-LD syntax

4. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly
   - Ensure responsive design works

### Post-Deployment

1. **Google Search Console**
   - Submit sitemap
   - Monitor indexing status
   - Check for structured data issues

2. **Analytics**
   - Monitor organic traffic
   - Track keyword rankings
   - Analyze user behavior

## Common Tasks

### Adding a New Page

1. Create page file in `app/`
2. Add metadata export with title, description, canonical
3. Add appropriate schema (WebPage, Article, FAQ, etc.)
4. Include breadcrumbs for navigation
5. Add to `app/sitemap.ts` if public-facing
6. Test with Rich Results Test

### Updating Business Information

1. Edit `lib/gbp-business.ts`
2. Information automatically propagates to all pages
3. Verify changes in Google Business Profile
4. Update schema in `app/layout.tsx` if needed

### Adding FAQ Schema

```typescript
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

// Add to page
<Script id="faq-schema" type="application/ld+json">
  {JSON.stringify(faqSchema)}
</Script>
```

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Format code
pnpm format
```

## Git Workflow

- Main branch: `main`
- Feature branches: `claude/feature-name-sessionId`
- Always commit with descriptive messages
- Push to remote after completing features

## Environment Variables

Required variables in `.env.local`:

```env
V0_API_KEY=your_v0_api_key
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code

# Optional for rate limiting
KV_REST_API_URL=your_upstash_url
KV_REST_API_TOKEN=your_upstash_token
```

## Resources

### Documentation
- [Next.js SEO Guide](https://nextjs.org/learn/seo)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Answer Engine Optimization Guide](https://www.frase.io/blog/what-is-answer-engine-optimization-the-complete-guide-to-getting-cited-by-ai)

### Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Search Console](https://search.google.com/search-console)

## Contact

Site managed by Dr. Jan Duffy
- Phone: (702) 766-3299
- Email: DrDuffySells@SpanishTrailHomes.com
- Brokerage: Berkshire Hathaway HomeServices Nevada Properties

---

Last updated: June 7, 2026
