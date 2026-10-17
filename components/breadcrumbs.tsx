import Link from 'next/link'
import { headers } from 'next/headers'

import { safeJsonLdStringify } from '@/components/json-ld'
import { createBreadcrumbSchema } from '@/lib/structuredData'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  className?: string
}

export async function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || '/'

  if (!items.length) return null

  const lastIndex = items.length - 1

  const schemaItems = items.map((item, index) => ({
    name: item.label,
    url: item.href
      ? item.href
      : index === lastIndex
        ? pathname
        : items[index + 1]?.href ?? pathname,
  }))

  const jsonLd = createBreadcrumbSchema(schemaItems)
  const schemaId = `breadcrumb-schema-${items.map((i) => i.label).join('-').toLowerCase()}`

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 text-xs uppercase tracking-[0.25em] text-[#6f5237] sm:px-6 sm:tracking-[0.35em]">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href && index !== lastIndex ? (
              <Link
                href={item.href}
                className="inline-flex min-h-[44px] items-center py-2 text-[#0f2b1e] transition-colors hover:text-secondary sm:min-h-0 sm:py-0"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#372a20]/80">{item.label}</span>
            )}
            {index !== lastIndex ? <span aria-hidden="true" className="select-none">/</span> : null}
          </li>
        ))}
      </ol>
      <script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(jsonLd) }}
      />
    </nav>
  )
}
