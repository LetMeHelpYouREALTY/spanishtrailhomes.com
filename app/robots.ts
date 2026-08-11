import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

// Optimized for SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization)
// Explicitly allow all major AI crawlers for appearing in AI-generated answers
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Google crawlers
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // OpenAI crawlers
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Anthropic crawlers
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'claudebot',
        allow: '/',
      },
      // Other AI crawlers
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      {
        userAgent: 'Diffbot',
        allow: '/',
      },
      // Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // Default rule for all other bots
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/'],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
  }
}
