import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://spanishtrailhomes.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
