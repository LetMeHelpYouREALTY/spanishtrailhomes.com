import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname
  const searchParams = url.searchParams

  // Do not redirect apex → www here. Vercel’s production-domain redirect and/or
  // Cloudflare forwarding already canonicalize the host; an extra apex→www 301 in
  // middleware causes ERR_TOO_MANY_REDIRECTS when the edge and app disagree (e.g.
  // www→apex at Vercel plus apex→www here). Keep www as canonical in DNS/Page Rules
  // and set www.spanishtrailhomes.com as the Vercel production primary domain.

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

  // Ensure trailing slash consistency (remove trailing slashes except for root)
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }

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

