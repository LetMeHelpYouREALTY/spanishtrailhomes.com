type JsonLdProps = {
  id: string
  data: unknown
}

/** Escape `<` in JSON-LD so inline scripts cannot break out of the tag. */
export function safeJsonLdStringify(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

/** Server- and client-safe JSON-LD (initial HTML, not next/script afterInteractive). */
export function JsonLd({ id, data }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(data) }}
    />
  )
}
