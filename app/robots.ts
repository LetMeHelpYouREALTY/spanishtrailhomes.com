import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all major search engines
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/', '/projects/', '/chats/'],
      },
      // Explicitly allow AI/AEO crawlers (ChatGPT, Claude, Perplexity, Google AI)
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'anthropic-ai', 'PerplexityBot', 'Google-Extended'],
        allow: ['/'],
        disallow: ['/api/', '/projects/', '/chats/'],
      },
      // Allow common search engines explicitly
      {
        userAgent: ['Googlebot', 'Googlebot-Image', 'Bingbot', 'Slurp', 'DuckDuckBot'],
        allow: ['/'],
        disallow: ['/api/', '/projects/', '/chats/'],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
    host: baseUrl,
  }
}
