import {
  REALSCOUT_SHARED_SEARCH_LABEL,
  REALSCOUT_SHARED_SEARCH_URL,
} from '@/lib/realscout'
import { cn } from '@/lib/utils'

type ListingImageLinkProps = {
  children: React.ReactNode
  className?: string
  label?: string
}

/** Wraps a photo so a click opens the shared RealScout Spanish Trail search. */
export function ListingImageLink({
  children,
  className,
  label = REALSCOUT_SHARED_SEARCH_LABEL,
}: ListingImageLinkProps) {
  return (
    <a
      href={REALSCOUT_SHARED_SEARCH_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#be9956] focus-visible:ring-offset-2',
        className,
      )}
      aria-label={label}
    >
      {children}
    </a>
  )
}

type ListingPhotoPanelProps = {
  src: string
  label: string
  className?: string
}

/** Clickable CSS-background photo used as a section-side image. */
export function ListingPhotoPanel({ src, label, className }: ListingPhotoPanelProps) {
  return (
    <ListingImageLink label={label} className={cn('h-full min-h-[16rem]', className)}>
      <div
        className="h-full min-h-[16rem] rounded-3xl border border-border/60 bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url('${src}')` }}
        aria-hidden
      />
    </ListingImageLink>
  )
}
