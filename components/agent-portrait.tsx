import Image from 'next/image'
import Script from 'next/script'

import { cn } from '@/lib/utils'
import {
  AGENT_PORTRAITS,
  createAgentImageObjectSchema,
  getAgentPortraitSrc,
  resolveAgentPortrait,
  type AgentPortraitId,
} from '@/lib/agent-portraits'

type PortraitSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const SIZE_CLASS: Record<PortraitSize, string> = {
  xs: 'size-10',
  sm: 'size-16 sm:size-[4.5rem]',
  md: 'size-28 sm:size-32',
  lg: 'size-40 sm:size-52',
  xl: 'size-56 sm:size-72',
}

const SIZE_ATTR: Record<PortraitSize, number> = {
  xs: 40,
  sm: 72,
  md: 128,
  lg: 208,
  xl: 288,
}

type AgentPortraitProps = {
  placement: string
  size?: PortraitSize
  priority?: boolean
  className?: string
  imageClassName?: string
  showCaption?: boolean
  rounded?: 'full' | '2xl' | 'none'
  schema?: boolean
  pagePath?: string
  id?: AgentPortraitId
}

export function AgentPortrait({
  placement,
  size = 'md',
  priority = false,
  className,
  imageClassName,
  showCaption = false,
  rounded = 'full',
  schema = false,
  pagePath = '/',
  id,
}: AgentPortraitProps) {
  const portrait = id ? AGENT_PORTRAITS[id] : resolveAgentPortrait(placement)
  const src = getAgentPortraitSrc(portrait.id)
  const px = SIZE_ATTR[size]
  const radius =
    rounded === 'full' ? 'rounded-full' : rounded === '2xl' ? 'rounded-2xl' : 'rounded-none'

  return (
    <figure className={cn('shrink-0', className)}>
      <div
        className={cn(
          'relative shrink-0 overflow-hidden bg-transparent',
          SIZE_CLASS[size],
          radius,
        )}
      >
        <Image
          src={src}
          alt={portrait.alt}
          fill
          priority={priority}
          sizes={`${px}px`}
          className={cn('object-contain object-center', imageClassName)}
        />
      </div>
      {showCaption ? (
        <figcaption className="mt-3 max-w-[16rem] text-center text-xs leading-relaxed text-[#5c4a3a]">
          {portrait.caption}
        </figcaption>
      ) : null}
      {schema ? (
        <Script
          id={`agent-portrait-schema-${portrait.id}-${placement}`}
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(createAgentImageObjectSchema(id ?? placement, pagePath))}
        </Script>
      ) : null}
    </figure>
  )
}
