import Image from 'next/image'

import { getSiteImageUrl } from '@/lib/cloudflare-images'
import { DEFAULT_H1_IMAGE, getAssetAlt } from '@/lib/site-images'
import { cn } from '@/lib/utils'

const DEFAULT_HERO_IMAGE = getSiteImageUrl(DEFAULT_H1_IMAGE)
const DEFAULT_HERO_ALT = getAssetAlt(DEFAULT_H1_IMAGE)

type HeroBackgroundProps = {
  src?: string
  alt?: string
  priority?: boolean
  sizes?: string
  className?: string
  overlayClassName?: string
  imageClassName?: string
  /** When set, renders hero with title/subtitle overlay (uses src or default image). */
  title?: string
  subtitle?: string
  description?: string
}

export function HeroBackground({
  src,
  alt = '',
  priority = false,
  sizes = '100vw',
  className,
  overlayClassName,
  imageClassName,
  title,
  subtitle,
  description,
}: HeroBackgroundProps) {
  const imageSrc = src ?? DEFAULT_HERO_IMAGE
  const isTextHero = title != null

  return (
    <div
      className={cn(
        'overflow-hidden',
        isTextHero ? 'relative min-h-[280px] sm:min-h-[320px]' : 'absolute inset-0 -z-10',
        className,
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={alt || (title ? `${title} — ${DEFAULT_HERO_ALT}` : DEFAULT_HERO_ALT)}
          fill
          priority={priority}
          quality={80}
          sizes={sizes}
          className={cn('object-cover', imageClassName)}
        />
        {overlayClassName ? <div className={cn('absolute inset-0', overlayClassName)} /> : null}
      </div>
      {isTextHero ? (
        <div
          className={cn(
            'absolute inset-0 flex flex-col items-center justify-center px-4 py-12 text-center',
            !overlayClassName && 'bg-gradient-to-b from-[#0f2b1e]/60 to-[#0f2b1e]/85',
          )}
        >
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
          {subtitle ? <p className="mt-2 text-lg text-white/90">{subtitle}</p> : null}
          {description ? (
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/85">{description}</p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

