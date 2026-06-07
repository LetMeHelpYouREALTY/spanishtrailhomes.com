import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/', '/projects/', '/chats/'],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/'],
        disallow: ['/api/', '/projects/', '/chats/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/'],
        disallow: ['/api/', '/projects/', '/chats/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: ['/'],
        disallow: ['/api/', '/projects/', '/chats/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/'],
        disallow: ['/api/', '/projects/', '/chats/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/'],
        disallow: ['/api/', '/projects/', '/chats/'],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
  }
}
