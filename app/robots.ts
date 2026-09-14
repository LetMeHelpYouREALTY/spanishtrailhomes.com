import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

/**
 * Search Essentials: do not block Next.js static assets or image optimizer output.
 * Allow `/` covers most paths; these explicit allows clarify intent for crawlers that
 * pair Allow/Disallow narrowly. See Google Search technical requirements.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/og', '/_next/static/', '/_next/image/'],
        disallow: ['/api/', '/projects', '/chats', '/search'],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
  }
}
