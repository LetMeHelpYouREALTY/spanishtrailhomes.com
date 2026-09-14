import {
  GBP_BRAND_ATTRIBUTION,
  GBP_BRAND_NAME,
  GBP_LEGAL_NAME,
} from '@/lib/gbp-business'
import { cn } from '@/lib/utils'

type BrandLockupVariant = 'header' | 'hero' | 'section' | 'footer'
type BrandLockupTone = 'light' | 'dark'
type BrandLockupTag = 'h1' | 'h2' | 'p' | 'span'

type BrandLockupProps = {
  as?: BrandLockupTag
  id?: string
  variant?: BrandLockupVariant
  tone?: BrandLockupTone
  align?: 'left' | 'center'
  className?: string
}

/**
 * Visible brand lockup: searched name first, agent attribution underneath.
 * JSON-LD and legal copy still use GBP_LEGAL_NAME.
 */
export function BrandLockup({
  as = 'p',
  id,
  variant = 'section',
  tone = 'light',
  align = 'left',
  className,
}: BrandLockupProps) {
  const Title = as
  const onDark = tone === 'dark'
  const Wrapper = as === 'h1' || as === 'h2' ? 'div' : 'span'

  let titleClass: string
  let attributionClass: string
  switch (variant) {
    case 'header':
      titleClass =
        'font-[var(--font-playfair)] text-base font-semibold leading-snug tracking-[0.06em] sm:text-xl sm:tracking-[0.08em] lg:text-2xl'
      attributionClass =
        'mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] sm:text-xs sm:tracking-[0.32em]'
      break
    case 'hero':
      titleClass = 'font-[var(--font-playfair)] text-3xl tracking-tight sm:text-4xl md:text-5xl'
      attributionClass =
        'mt-3 text-xs font-semibold uppercase tracking-[0.35em] sm:text-sm sm:tracking-[0.4em]'
      break
    case 'section':
      titleClass = 'font-[var(--font-playfair)] text-base font-semibold tracking-[0.04em] sm:text-lg'
      attributionClass = 'mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em]'
      break
    case 'footer':
      titleClass = 'font-[var(--font-playfair)] text-base font-semibold tracking-[0.06em] sm:text-lg normal-case'
      attributionClass = 'mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#be9956]'
      break
    default: {
      const _exhaustive: never = variant
      return _exhaustive
    }
  }

  return (
    <Wrapper
      className={cn(align === 'center' ? 'text-center' : 'text-left', className)}
      aria-label={GBP_LEGAL_NAME}
    >
      <Title id={id} className={cn('block', titleClass, onDark ? 'text-white' : 'text-[#0f2b1e]')}>
        {GBP_BRAND_NAME}
      </Title>
      <span
        className={cn(
          'block',
          attributionClass,
          variant === 'footer' ? null : onDark ? 'text-white/80' : 'text-[#6f5237]'
        )}
      >
        {GBP_BRAND_ATTRIBUTION}
      </span>
    </Wrapper>
  )
}
