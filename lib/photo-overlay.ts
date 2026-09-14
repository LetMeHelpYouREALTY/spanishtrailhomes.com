/**
 * Photo treatments for heroes and section banners.
 * Use a neutral bottom scrim — not a green wash — so fairways, water, and
 * architecture stay bright and Spanish Trail reads as a place people tour.
 */
export const HERO_PHOTO_OVERLAY_CLASS =
  'bg-[linear-gradient(to_top,rgba(0,0,0,0.42)_0%,transparent_52%),linear-gradient(to_right,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.1)_38%,transparent_68%)]'

export const HERO_PHOTO_IMAGE_CLASS =
  'object-cover brightness-[1.12] contrast-[1.06] saturate-[1.16]'

/** Photo-hero copy: no glyph glow. Contrast comes from the overlay, not text-shadow. */
export const HERO_PHOTO_TEXT_SHADOW_CLASS = 'hero-photo-copy'
