import { getAbsoluteSiteImageUrl, getSiteImageUrl } from '@/lib/cloudflare-images'

export type AgentPortraitId =
  | 'agent-duffy-canonical'
  | 'agent-duffy-header'
  | 'agent-duffy-footer'
  | 'agent-duffy-about'
  | 'agent-duffy-contact-call'
  | 'agent-duffy-buyers'
  | 'agent-duffy-sellers'
  | 'agent-duffy-listings'
  | 'agent-duffy-tour'
  | 'agent-duffy-golf'
  | 'agent-duffy-neighborhoods'
  | 'agent-duffy-relocation'
  | 'agent-duffy-reviews'
  | 'agent-duffy-awards'
  | 'agent-duffy-media'
  | 'agent-duffy-services'
  | 'agent-duffy-market'
  | 'agent-duffy-club'

export type AgentPortraitAsset = {
  id: AgentPortraitId
  alt: string
  caption: string
  width: number
  height: number
}

export const AGENT_PORTRAITS: Record<AgentPortraitId, AgentPortraitAsset> = {
  'agent-duffy-canonical': {
    id: 'agent-duffy-canonical',
    alt: 'Dr. Jan Duffy, Spanish Trail homes realtor in Las Vegas NV 89113, Berkshire Hathaway HomeServices',
    caption: 'Dr. Jan Duffy · Spanish Trail Homes realtor · Las Vegas 89113',
    width: 900,
    height: 900,
  },
  'agent-duffy-header': {
    id: 'agent-duffy-header',
    alt: 'Dr. Jan Duffy headshot — exclusive Spanish Trail Las Vegas realtor, site navigation',
    caption: 'Dr. Jan Duffy, exclusive Spanish Trail realtor',
    width: 640,
    height: 640,
  },
  'agent-duffy-footer': {
    id: 'agent-duffy-footer',
    alt: 'Dr. Jan Duffy at Spanish Trail Homes, 5050 Spanish Trail Ln Las Vegas NV 89113',
    caption: 'Dr. Jan Duffy · BHHS Nevada · 5050 Spanish Trail Ln',
    width: 800,
    height: 800,
  },
  'agent-duffy-about': {
    id: 'agent-duffy-about',
    alt: 'Meet Dr. Jan Duffy, exclusive luxury realtor for Spanish Trail homes in Las Vegas 89113, license S.0197614.LLC',
    caption: 'Meet Dr. Jan Duffy · Spanish Trail luxury realtor',
    width: 900,
    height: 1080,
  },
  'agent-duffy-contact-call': {
    id: 'agent-duffy-contact-call',
    alt: 'Call Dr. Jan Duffy at (702) 766-3299 to tour Spanish Trail homes in Las Vegas',
    caption: 'Call Dr. Jan Duffy · (702) 766-3299',
    width: 900,
    height: 900,
  },
  'agent-duffy-buyers': {
    id: 'agent-duffy-buyers',
    alt: 'Dr. Jan Duffy buyer representation for Spanish Trail homes in Las Vegas 89113',
    caption: 'Buyer representation · Spanish Trail homes',
    width: 880,
    height: 880,
  },
  'agent-duffy-sellers': {
    id: 'agent-duffy-sellers',
    alt: 'Dr. Jan Duffy seller representation — list a Spanish Trail home in Las Vegas 89113',
    caption: 'Seller representation · Spanish Trail listings',
    width: 880,
    height: 1000,
  },
  'agent-duffy-listings': {
    id: 'agent-duffy-listings',
    alt: 'Dr. Jan Duffy showing live Spanish Trail homes for sale inside the Las Vegas 89113 gates',
    caption: 'Showing Spanish Trail listings this week',
    width: 860,
    height: 860,
  },
  'agent-duffy-tour': {
    id: 'agent-duffy-tour',
    alt: 'Book a private Spanish Trail home tour with Dr. Jan Duffy in Las Vegas 89113',
    caption: 'Book a private tour with Dr. Jan Duffy',
    width: 840,
    height: 840,
  },
  'agent-duffy-golf': {
    id: 'agent-duffy-golf',
    alt: 'Dr. Jan Duffy, golf-course homes realtor for Spanish Trail Country Club in Las Vegas',
    caption: 'Golf-course homes realtor · Spanish Trail 89113',
    width: 900,
    height: 960,
  },
  'agent-duffy-neighborhoods': {
    id: 'agent-duffy-neighborhoods',
    alt: 'Dr. Jan Duffy matching buyers to 11 Spanish Trail neighborhoods in Las Vegas 89113',
    caption: '11-neighborhood matching · Spanish Trail',
    width: 860,
    height: 920,
  },
  'agent-duffy-relocation': {
    id: 'agent-duffy-relocation',
    alt: 'Dr. Jan Duffy helping out-of-state buyers purchase Spanish Trail homes in Las Vegas remotely',
    caption: 'Out-of-state Spanish Trail buyers',
    width: 880,
    height: 880,
  },
  'agent-duffy-reviews': {
    id: 'agent-duffy-reviews',
    alt: 'Leave a Google review for Dr. Jan Duffy, Spanish Trail Homes realtor in Las Vegas',
    caption: 'Google reviews · Dr. Jan Duffy',
    width: 820,
    height: 820,
  },
  'agent-duffy-awards': {
    id: 'agent-duffy-awards',
    alt: 'Award-winning Spanish Trail realtor Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties',
    caption: 'Award-winning Spanish Trail realtor',
    width: 900,
    height: 1040,
  },
  'agent-duffy-media': {
    id: 'agent-duffy-media',
    alt: 'Press headshot of Dr. Jan Duffy, Spanish Trail Homes realtor, Las Vegas Nevada',
    caption: 'Press headshot · Dr. Jan Duffy',
    width: 900,
    height: 900,
  },
  'agent-duffy-services': {
    id: 'agent-duffy-services',
    alt: 'Dr. Jan Duffy realtor services — buy, sell, and tour Spanish Trail homes only',
    caption: 'Realtor services for Spanish Trail homes',
    width: 860,
    height: 900,
  },
  'agent-duffy-market': {
    id: 'agent-duffy-market',
    alt: 'Dr. Jan Duffy Spanish Trail market advisor with live 89113 Las Vegas inventory and pricing',
    caption: 'Spanish Trail market advisor',
    width: 880,
    height: 940,
  },
  'agent-duffy-club': {
    id: 'agent-duffy-club',
    alt: 'Dr. Jan Duffy, realtor for homes beside Spanish Trail Country Club in Las Vegas 89113',
    caption: 'Club-community realtor · Spanish Trail',
    width: 900,
    height: 900,
  },
}

const PLACEMENT_RULES: Array<{ test: RegExp; id: AgentPortraitId }> = [
  { test: /header|nav|logo|brand/, id: 'agent-duffy-header' },
  { test: /footer|nap|hours/, id: 'agent-duffy-footer' },
  { test: /about|story|philosophy|credential|bio/, id: 'agent-duffy-about' },
  { test: /contact|call|phone|schedule/, id: 'agent-duffy-contact-call' },
  { test: /buyer|buying|offer|financing/, id: 'agent-duffy-buyers' },
  { test: /seller|selling|pricing|valuation|prepar/, id: 'agent-duffy-sellers' },
  { test: /listing|inventory|bhhs|realscout|homes-for-sale/, id: 'agent-duffy-listings' },
  { test: /tour|showing|lightbox|walk-through/, id: 'agent-duffy-tour' },
  { test: /golf|fairway|tee|course/, id: 'agent-duffy-golf' },
  { test: /neighborhood|enclave|village/, id: 'agent-duffy-neighborhoods' },
  { test: /reloc|out-of-state|remote/, id: 'agent-duffy-relocation' },
  { test: /review|testimonial|google-business/, id: 'agent-duffy-reviews' },
  { test: /award|press|recognition|advisory/, id: 'agent-duffy-awards' },
  { test: /media-kit|media-heading|headshot/, id: 'agent-duffy-media' },
  { test: /service|offerings/, id: 'agent-duffy-services' },
  { test: /market|insight|report|stats/, id: 'agent-duffy-market' },
  { test: /club|membership|event|guest|amenity|pool|tennis|fitness/, id: 'agent-duffy-club' },
]

const CYCLE: AgentPortraitId[] = [
  'agent-duffy-canonical',
  'agent-duffy-about',
  'agent-duffy-buyers',
  'agent-duffy-sellers',
  'agent-duffy-listings',
  'agent-duffy-golf',
  'agent-duffy-neighborhoods',
  'agent-duffy-services',
  'agent-duffy-market',
  'agent-duffy-club',
]

function hashSeed(value: string): number {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0
  }
  return hash
}

function humanizePlacement(placement: string): string {
  return placement
    .replace(/[-_]+/g, ' ')
    .replace(/heading$/i, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function resolveAgentPortrait(placement: string): AgentPortraitAsset {
  const normalized = placement.trim().toLowerCase()
  const match = PLACEMENT_RULES.find((rule) => rule.test.test(normalized))
  const id = match?.id ?? CYCLE[hashSeed(normalized) % CYCLE.length]
  const base = AGENT_PORTRAITS[id]
  const context = humanizePlacement(placement)
  const alt =
    context && !base.alt.toLowerCase().includes(context.toLowerCase())
      ? `${base.alt} (${context} section)`
      : base.alt
  return { ...base, alt }
}

export function getAgentPortraitSrc(id: AgentPortraitId): string {
  return getSiteImageUrl(id)
}

export function getAgentPortraitAbsoluteUrl(id: AgentPortraitId): string {
  return getAbsoluteSiteImageUrl(id)
}

export function createAgentImageObjectSchema(placement: string, pagePath = '/') {
  const portrait = resolveAgentPortrait(placement)
  const contentUrl = getAgentPortraitAbsoluteUrl(portrait.id)
  const pageUrl =
    !pagePath || pagePath === '/'
      ? 'https://www.spanishtrailhomes.com/'
      : `https://www.spanishtrailhomes.com${pagePath.startsWith('/') ? pagePath : `/${pagePath}`}`

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': `${contentUrl}#${portrait.id}`,
    contentUrl,
    url: contentUrl,
    caption: portrait.caption,
    name: portrait.alt,
    width: portrait.width,
    height: portrait.height,
    encodingFormat: 'image/png',
    creator: {
      '@type': 'Person',
      '@id': 'https://www.spanishtrailhomes.com/#person',
      name: 'Dr. Jan Duffy',
    },
    creditText: 'Dr. Jan Duffy · Spanish Trail | Homes By Dr. Jan Duffy',
    copyrightNotice: '© Spanish Trail | Homes By Dr. Jan Duffy',
    acquireLicensePage: 'https://www.spanishtrailhomes.com/media-kit',
    mainEntityOfPage: pageUrl,
  }
}

export const CANONICAL_AGENT_PORTRAIT_URL = getAgentPortraitAbsoluteUrl('agent-duffy-canonical')
