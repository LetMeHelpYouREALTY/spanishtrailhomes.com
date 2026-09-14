import Image from 'next/image'

import { ListingImageLink } from '@/components/listing-image-link'
import { getSiteImageUrl } from '@/lib/cloudflare-images'
import {
  HERO_PHOTO_IMAGE_CLASS,
  HERO_PHOTO_OVERLAY_CLASS,
  HERO_PHOTO_TEXT_SHADOW_CLASS,
} from '@/lib/photo-overlay'
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
  /** Optional extra overlay classes. The shared light scrim is always applied. */
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
  const imageAlt = alt || (title ? `${title} — ${DEFAULT_HERO_ALT}` : DEFAULT_HERO_ALT)

  return (
    <div
      className={cn(
        'overflow-hidden',
        isTextHero ? 'relative min-h-[280px] sm:min-h-[320px]' : 'absolute inset-0 -z-10',
        className,
      )}
    >
      <ListingImageLink className="absolute inset-0" label={`${imageAlt} — open live Spanish Trail listings`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          quality={80}
          sizes={sizes}
          className={cn(HERO_PHOTO_IMAGE_CLASS, imageClassName)}
        />
      </ListingImageLink>
      <div className={cn('pointer-events-none absolute inset-0', HERO_PHOTO_OVERLAY_CLASS, overlayClassName)} />
      {isTextHero ? (
        <div className={cn('pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-4 py-12 text-center', HERO_PHOTO_TEXT_SHADOW_CLASS)}>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-2 text-lg font-medium text-white">{subtitle}</p>
          ) : null}
          {description ? (
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-white">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
