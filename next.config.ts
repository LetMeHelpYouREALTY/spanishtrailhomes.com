import type { NextConfig } from 'next'
import path from 'node:path'

const nextConfig: NextConfig = {
  // Pin tracing to this package root when a parent directory has another lockfile (avoids wrong workspace root warning).
  outputFileTracingRoot: path.join(process.cwd()),
  async redirects() {
    return [
      { source: '/market-data', destination: '/spanish-trail-market-report', permanent: true },
      { source: '/homes', destination: '/spanish-trail-homes-for-sale-las-vegas', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
      {
        protocol: 'https',
        hostname: 'www.spanishtrailhomes.com',
        pathname: '/cdn-cgi/imagedelivery/**',
      },
      {
        protocol: 'https',
        hostname: 'd1buiexcd5gara.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'chart.googleapis.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year for better caching
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Increase cache headers for static assets
  async headers() {
    return [
      {
        source: '/:path*.{js,css,woff2,woff,ttf,otf}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.{jpg,jpeg,png,gif,webp,avif,svg,ico}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
