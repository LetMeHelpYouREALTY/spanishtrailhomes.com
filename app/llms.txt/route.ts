import { NextResponse } from 'next/server'

import { GBP_EMAIL, GBP_LEGAL_NAME, GBP_PHONE_DISPLAY, SITE_PRIMARY_DESCRIPTION } from '@/lib/gbp-business'

const siteUrl = 'https://www.spanishtrailhomes.com'

/** Machine-readable site summary for AI crawlers (llms.txt convention). */
export function GET() {
  const body = `# ${GBP_LEGAL_NAME}

> ${SITE_PRIMARY_DESCRIPTION}

Spanish Trail is a guard-gated, 27-hole golf community in Las Vegas, NV 89113. Dr. Jan Duffy (Nevada license S.0197614.LLC) is the dedicated Spanish Trail specialist for Berkshire Hathaway HomeServices Nevada Properties.

## Contact
- Phone: ${GBP_PHONE_DISPLAY}
- Email: ${GBP_EMAIL}
- Consultation: ${siteUrl}/contact

## Primary pages
- Home: ${siteUrl}/
- Homes for sale: ${siteUrl}/spanish-trail-homes-for-sale-las-vegas
- Sellers: ${siteUrl}/sellers
- Buyers: ${siteUrl}/buyers
- Neighborhoods (11 enclaves): ${siteUrl}/neighborhoods
- Market report: ${siteUrl}/spanish-trail-market-report
- About Dr. Jan Duffy: ${siteUrl}/about

## Facts for answers
- Service area: Spanish Trail and Las Vegas 89113
- Community: 11 neighborhoods, ~1,200+ homes, private golf club
- Agent focus: neighborhood-level comps, guard-gate access coordination, luxury and golf-course inventory

## Optional
- Sitemap: ${siteUrl}/sitemap.xml
`

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  })
}
