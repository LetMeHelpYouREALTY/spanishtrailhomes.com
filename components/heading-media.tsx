import Image from 'next/image'

import { AgentPortrait } from '@/components/agent-portrait'
import { GbpSectionSupport } from '@/components/gbp-section-support'
import { ListingImageLink } from '@/components/listing-image-link'
import { cn } from '@/lib/utils'
import {
  HERO_PHOTO_IMAGE_CLASS,
  HERO_PHOTO_OVERLAY_CLASS,
} from '@/lib/photo-overlay'
import { getSiteImageUrl } from '@/lib/cloudflare-images'
import {
  resolveCardMedia,
  resolveHeadingMedia,
  type HeadingLevel,
} from '@/lib/site-images'

type SectionBannerProps = {
  headingId: string
  className?: string
  /** Force a heading level instead of inferring from the heading id. */
  level?: HeadingLevel
  priority?: boolean
}

export function SectionBanner({
  headingId,
  className,
  level,
  priority = false,
}: SectionBannerProps) {
  const media = resolveHeadingMedia(headingId)
  if (!media) return null

  const resolvedLevel = level ?? media.level
  const src = getSiteImageUrl(media.id)

  switch (resolvedLevel) {
    case 'h1':
      return (
        <>
          <div className={cn('absolute inset-0 -z-10', className)} aria-hidden={false}>
            <ListingImageLink className="absolute inset-0" label={`${media.alt} — open live Spanish Trail listings`}>
              <Image
                src={src}
                alt={media.alt}
                fill
                priority={priority}
                quality={80}
                sizes="100vw"
                className={HERO_PHOTO_IMAGE_CLASS}
              />
            </ListingImageLink>
            <div className={cn('pointer-events-none absolute inset-0', HERO_PHOTO_OVERLAY_CLASS)} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] px-4 pb-4 sm:px-6">
            <div className="pointer-events-auto mx-auto max-w-6xl rounded-xl bg-black/55 p-3">
              <GbpSectionSupport variant="onDark" />
            </div>
          </div>
        </>
      )
    case 'h2':
      return (
        <div className={cn('mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10', className)}>
          <div className="relative aspect-[16/7] overflow-hidden rounded-2xl sm:aspect-[21/8]">
            <ListingImageLink className="absolute inset-0" label={`${media.alt} — open live Spanish Trail listings`}>
              <Image
                src={src}
                alt={media.alt}
                fill
                quality={75}
                sizes="(max-width: 1024px) 100vw, 1152px"
                className={cn(HERO_PHOTO_IMAGE_CLASS, 'transition-transform duration-300 hover:scale-[1.03]')}
              />
            </ListingImageLink>
            <div className="pointer-events-none absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
              <AgentPortrait placement={headingId} size="sm" linkToSearch={false} />
            </div>
          </div>
          <GbpSectionSupport className="mt-3" />
        </div>
      )
    case 'h3':
      return (
        <CardVisual seed={headingId} className={className} />
      )
    default: {
      const _exhaustive: never = resolvedLevel
      return _exhaustive
    }
  }
}

type CardVisualProps = {
  seed: string
  className?: string
  alt?: string
}

export function CardVisual({ seed, className, alt }: CardVisualProps) {
  const media = resolveCardMedia(seed)
  const src = getSiteImageUrl(media.id)

  const imageAlt = alt ?? media.alt

  return (
    <ListingImageLink
      label={`${imageAlt} — open live Spanish Trail listings`}
      className={cn('relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-xl', className)}
    >
      <Image
        src={src}
        alt={imageAlt}
        fill
        quality={70}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={cn(HERO_PHOTO_IMAGE_CLASS, 'transition-transform duration-300 hover:scale-[1.03]')}
      />
    </ListingImageLink>
  )
}

type HeadingPictureProps = {
  assetId: string
  alt: string
  level: HeadingLevel
  className?: string
  priority?: boolean
}

export function HeadingPicture({
  assetId,
  alt,
  level,
  className,
  priority = false,
}: HeadingPictureProps) {
  const src = getSiteImageUrl(assetId)
  const aspect =
    level === 'h1' ? 'aspect-[16/9]' : level === 'h2' ? 'aspect-[16/7]' : 'aspect-[4/3]'

  return (
    <ListingImageLink
      label={`${alt} — open live Spanish Trail listings`}
      className={cn('relative w-full overflow-hidden', aspect, className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={level === 'h1' ? 80 : 75}
        sizes={level === 'h1' ? '100vw' : '(max-width: 1024px) 100vw, 800px'}
        className={cn(HERO_PHOTO_IMAGE_CLASS, 'transition-transform duration-300 hover:scale-[1.03]')}
      />
    </ListingImageLink>
  )
}
