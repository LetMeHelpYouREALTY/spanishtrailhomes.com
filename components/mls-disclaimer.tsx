/**
 * IDX / MLS attribution shown next to live listing widgets.
 * Do not change components/idx/* — this is site chrome only.
 */
export function MlsDisclaimer({ className }: { className?: string }) {
  return (
    <p
      className={
        className ??
        'mt-4 text-xs leading-relaxed text-[#372a20]/70'
      }
    >
      Listing data is provided by the Greater Las Vegas Association of REALTORS® MLS (GLVAR)
      and is deemed reliable but not guaranteed. © {new Date().getFullYear()} GLVAR. All rights
      reserved. Information is for consumers’ personal, non-commercial use. Dr. Jan Duffy,
      Berkshire Hathaway HomeServices Nevada Properties, License S.0197614.LLC.
    </p>
  )
}
