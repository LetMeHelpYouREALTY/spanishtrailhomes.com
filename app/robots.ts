import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all major search engines and AI crawlers
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/', '/projects/', '/chats/'],
      },
      // Explicitly allow AI answer engines (AEO optimization 2026)
      {
        userAgent: [
          'GPTBot',           // OpenAI ChatGPT
          'ChatGPT-User',     // ChatGPT user agent
          'CCBot',            // Common Crawl (used by AI training)
          'anthropic-ai',     // Anthropic Claude
          'Claude-Web',       // Claude web crawler
          'PerplexityBot',    // Perplexity AI
          'Applebot',         // Apple Intelligence
          'Googlebot',        // Google (including SGE/AI Overview)
          'Bingbot',          // Microsoft Bing (including Copilot)
        ],
        allow: ['/'],
        disallow: ['/api/', '/projects/', '/chats/'],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
  }
}
