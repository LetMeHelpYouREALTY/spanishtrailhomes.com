import { getAbsoluteSiteImageUrl, getSiteImageUrl } from '@/lib/cloudflare-images'

export type AgentPortraitId =
  | 'duffy-circle-canonical'
  | 'duffy-circle-header'
  | 'duffy-circle-footer'
  | 'duffy-circle-about'
  | 'duffy-circle-contact-call'
  | 'duffy-circle-buyers'
  | 'duffy-circle-sellers'
  | 'duffy-circle-listings'
  | 'duffy-circle-tour'
  | 'duffy-circle-golf'
  | 'duffy-circle-neighborhoods'
  | 'duffy-circle-relocation'
  | 'duffy-circle-reviews'
  | 'duffy-circle-awards'
  | 'duffy-circle-media'
  | 'duffy-circle-services'
  | 'duffy-circle-market'
  | 'duffy-circle-club'

export type AgentPortraitAsset = {
  id: AgentPortraitId
  alt: string
  caption: string
  width: number
  height: number
}

export const AGENT_PORTRAITS: Record<AgentPortraitId, AgentPortraitAsset> = {
  'duffy-circle-canonical': {
    id: 'duffy-circle-canonical',
    alt: 'Dr. Jan Duffy, Spanish Trail homes realtor in Las Vegas NV 89113, Berkshire Hathaway HomeServices',
    caption: 'Dr. Jan Duffy · Spanish Trail Homes realtor · Las Vegas 89113',
    width: 900,
    height: 900,
  },
  'duffy-circle-header': {
    id: 'duffy-circle-header',
    alt: 'Dr. Jan Duffy headshot — exclusive Spanish Trail Las Vegas realtor, site navigation',
    caption: 'Dr. Jan Duffy, exclusive Spanish Trail realtor',
    width: 900,
    height: 900,
  },
  'duffy-circle-footer': {
    id: 'duffy-circle-footer',
    alt: 'Dr. Jan Duffy at Spanish Trail Homes, 5050 Spanish Trail Ln Las Vegas NV 89113',
    caption: 'Dr. Jan Duffy · BHHS Nevada · 5050 Spanish Trail Ln',
    width: 900,
    height: 900,
  },
  'duffy-circle-about': {
    id: 'duffy-circle-about',
    alt: 'Meet Dr. Jan Duffy, exclusive luxury realtor for Spanish Trail homes in Las Vegas 89113, license S.0197614.LLC',
    caption: 'Meet Dr. Jan Duffy · Spanish Trail luxury realtor',
    width: 900,
    height: 900,
  },
  'duffy-circle-contact-call': {
    id: 'duffy-circle-contact-call',
    alt: 'Call Dr. Jan Duffy at (702) 766-3299 to tour Spanish Trail homes in Las Vegas',
    caption: 'Call Dr. Jan Duffy · (702) 766-3299',
    width: 900,
    height: 900,
  },
  'duffy-circle-buyers': {
    id: 'duffy-circle-buyers',
    alt: 'Dr. Jan Duffy buyer representation for Spanish Trail homes in Las Vegas 89113',
    caption: 'Buyer representation · Spanish Trail homes',
    width: 900,
    height: 900,
  },
  'duffy-circle-sellers': {
    id: 'duffy-circle-sellers',
    alt: 'Dr. Jan Duffy seller representation — list a Spanish Trail home in Las Vegas 89113',
    caption: 'Seller representation · Spanish Trail listings',
    width: 900,
    height: 900,
  },
  'duffy-circle-listings': {
    id: 'duffy-circle-listings',
    alt: 'Dr. Jan Duffy showing live Spanish Trail homes for sale inside the Las Vegas 89113 gates',
    caption: 'Showing Spanish Trail listings this week',
    width: 900,
    height: 900,
  },
  'duffy-circle-tour': {
    id: 'duffy-circle-tour',
    alt: 'Book a private Spanish Trail home tour with Dr. Jan Duffy in Las Vegas 89113',
    caption: 'Book a private tour with Dr. Jan Duffy',
    width: 900,
    height: 900,
  },
  'duffy-circle-golf': {
    id: 'duffy-circle-golf',
    alt: 'Dr. Jan Duffy, golf-course homes realtor for Spanish Trail Country Club in Las Vegas',
    caption: 'Golf-course homes realtor · Spanish Trail 89113',
    width: 900,
    height: 900,
  },
  'duffy-circle-neighborhoods': {
    id: 'duffy-circle-neighborhoods',
    alt: 'Dr. Jan Duffy matching buyers to 11 Spanish Trail neighborhoods in Las Vegas 89113',
    caption: '11-neighborhood matching · Spanish Trail',
    width: 900,
    height: 900,
  },
  'duffy-circle-relocation': {
    id: 'duffy-circle-relocation',
    alt: 'Dr. Jan Duffy helping out-of-state buyers purchase Spanish Trail homes in Las Vegas remotely',
    caption: 'Out-of-state Spanish Trail buyers',
    width: 900,
    height: 900,
  },
  'duffy-circle-reviews': {
    id: 'duffy-circle-reviews',
    alt: 'Leave a Google review for Dr. Jan Duffy, Spanish Trail Homes realtor in Las Vegas',
    caption: 'Google reviews · Dr. Jan Duffy',
    width: 900,
    height: 900,
  },
  'duffy-circle-awards': {
    id: 'duffy-circle-awards',
    alt: 'Award-winning Spanish Trail realtor Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties',
    caption: 'Award-winning Spanish Trail realtor',
    width: 900,
    height: 900,
  },
  'duffy-circle-media': {
    id: 'duffy-circle-media',
    alt: 'Press headshot of Dr. Jan Duffy, Spanish Trail Homes realtor, Las Vegas Nevada',
    caption: 'Press headshot · Dr. Jan Duffy',
    width: 900,
    height: 900,
  },
  'duffy-circle-services': {
    id: 'duffy-circle-services',
    alt: 'Dr. Jan Duffy realtor services — buy, sell, and tour Spanish Trail homes only',
    caption: 'Realtor services for Spanish Trail homes',
    width: 900,
    height: 900,
  },
  'duffy-circle-market': {
    id: 'duffy-circle-market',
    alt: 'Dr. Jan Duffy Spanish Trail market advisor with live 89113 Las Vegas inventory and pricing',
    caption: 'Spanish Trail market advisor',
    width: 900,
    height: 900,
  },
  'duffy-circle-club': {
    id: 'duffy-circle-club',
    alt: 'Dr. Jan Duffy, realtor for homes beside Spanish Trail Country Club in Las Vegas 89113',
    caption: 'Club-community realtor · Spanish Trail',
    width: 900,
    height: 900,
  },
}

const PLACEMENT_RULES: Array<{ test: RegExp; id: AgentPortraitId }> = [
  { test: /header|nav|logo|brand/, id: 'duffy-circle-header' },
  { test: /footer|nap|hours/, id: 'duffy-circle-footer' },
  { test: /about|story|philosophy|credential|bio/, id: 'duffy-circle-about' },
  { test: /contact|call|phone|schedule/, id: 'duffy-circle-contact-call' },
  { test: /buyer|buying|offer|financing/, id: 'duffy-circle-buyers' },
  { test: /seller|selling|pricing|valuation|prepar/, id: 'duffy-circle-sellers' },
  { test: /listing|inventory|bhhs|realscout|homes-for-sale/, id: 'duffy-circle-listings' },
  { test: /tour|showing|lightbox|walk-through/, id: 'duffy-circle-tour' },
  { test: /golf|fairway|tee|course/, id: 'duffy-circle-golf' },
  { test: /neighborhood|enclave|village/, id: 'duffy-circle-neighborhoods' },
  { test: /reloc|out-of-state|remote/, id: 'duffy-circle-relocation' },
  { test: /review|testimonial|google-business/, id: 'duffy-circle-reviews' },
  { test: /award|press|recognition|advisory/, id: 'duffy-circle-awards' },
  { test: /media-kit|media-heading|headshot/, id: 'duffy-circle-media' },
  { test: /service|offerings/, id: 'duffy-circle-services' },
  { test: /market|insight|report|stats/, id: 'duffy-circle-market' },
  { test: /club|membership|event|guest|amenity|pool|tennis|fitness/, id: 'duffy-circle-club' },
]

const CYCLE: AgentPortraitId[] = [
  'duffy-circle-canonical',
  'duffy-circle-about',
  'duffy-circle-buyers',
  'duffy-circle-sellers',
  'duffy-circle-listings',
  'duffy-circle-golf',
  'duffy-circle-neighborhoods',
  'duffy-circle-services',
  'duffy-circle-market',
  'duffy-circle-club',
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

export const CANONICAL_AGENT_PORTRAIT_URL = getAgentPortraitAbsoluteUrl('duffy-circle-canonical')
