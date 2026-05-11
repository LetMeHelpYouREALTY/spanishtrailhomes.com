import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const searchParams = url.searchParams

  // Apex → www is handled in vercel.json (host `has` redirect) so it does not fight Vercel/Cloudflare
  // domain settings or create redirect loops with a mismatched primary host.

  // Remove query parameters that create duplicate content
  // Common culprits: date, timestamp, utm_*, ref, source, etc.
  const paramsToRemove = [
    'date',
    'timestamp',
    'ref',
    'source',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'fbclid',
    'gclid',
  ]

  let hasRemovedParams = false
  paramsToRemove.forEach((param) => {
    if (searchParams.has(param)) {
      searchParams.delete(param)
      hasRemovedParams = true
    }
  })

  // If we removed parameters, redirect to clean URL
  if (hasRemovedParams) {
    url.search = searchParams.toString()
    return NextResponse.redirect(url, 301)
  }

  // Trailing-slash normalization is left to Next.js defaults to avoid redirect loops with the edge.

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt, sitemap.xml (SEO files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}

