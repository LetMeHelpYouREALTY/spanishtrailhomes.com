import type { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const width = 1200
const height = 630

const backgroundGradient = 'linear-gradient(135deg, #0f2b1e 0%, #153f2c 40%, #1f2a24 100%)'

function decodeParam(searchParams: URLSearchParams, key: string, fallback = '') {
  const value = searchParams.get(key)
  if (!value) return fallback

  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const title = decodeParam(searchParams, 'title', 'Spanish Trail Homes')
  const subtitle = decodeParam(
    searchParams,
    'subtitle',
    'Guard-gated Las Vegas real estate by Dr. Jan Duffy'
  )
  const eyebrow = decodeParam(searchParams, 'eyebrow', 'SpanishTrailHomes.com')

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px',
          justifyContent: 'space-between',
          color: '#f8f5ef',
          background: backgroundGradient,
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 10, textTransform: 'uppercase', opacity: 0.7 }}>
          {eyebrow}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
          <div style={{ fontSize: 32, opacity: 0.9, maxWidth: 900 }}>{subtitle}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, opacity: 0.8 }}>
          <div>Dr. Jan Duffy</div>
          <div>Spanish Trail | Homes By Dr. Jan Duffy</div>
        </div>
      </div>
    ),
    {
      width,
      height,
    }
  )
}

