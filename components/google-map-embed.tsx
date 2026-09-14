import { GBP_FULL_ADDRESS, GBP_LEGAL_NAME, GBP_MAP_EMBED_URL } from '@/lib/gbp-business'
import { cn } from '@/lib/utils'

type GoogleMapEmbedProps = {
  title?: string
  className?: string
  heightClassName?: string
}

export function GoogleMapEmbed({
  title,
  className,
  heightClassName = 'h-[400px]',
}: GoogleMapEmbedProps) {
  return (
    <iframe
      title={title ?? `Google Map pin for ${GBP_LEGAL_NAME} at ${GBP_FULL_ADDRESS}`}
      src={GBP_MAP_EMBED_URL}
      className={cn('w-full border-0', heightClassName, className)}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}
