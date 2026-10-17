const ELLIPSIS = '…'

/** Keep SERP titles within common display limits without mid-word cuts. */
export function limitTitle(title: string, maxLength = 60): string {
  const trimmed = title.trim()
  if (trimmed.length <= maxLength) {
    return trimmed
  }

  const slice = trimmed.slice(0, maxLength - 1)
  const lastSpace = slice.lastIndexOf(' ')
  const cut = lastSpace > 24 ? slice.slice(0, lastSpace) : slice
  return `${cut.replace(/\s+$/, '')}${ELLIPSIS}`
}

/** Meta descriptions: prefer a clean sentence boundary under maxLength. */
export function limitMetaDescription(description: string, maxLength = 160): string {
  const trimmed = description.replace(/\s+/g, ' ').trim()
  if (trimmed.length <= maxLength) {
    return trimmed
  }

  const slice = trimmed.slice(0, maxLength - 1)
  const sentenceEnd = Math.max(slice.lastIndexOf('. '), slice.lastIndexOf('? '), slice.lastIndexOf('! '))
  if (sentenceEnd >= 80) {
    return slice.slice(0, sentenceEnd + 1).trim()
  }

  const lastSpace = slice.lastIndexOf(' ')
  const cut = lastSpace > 60 ? slice.slice(0, lastSpace) : slice
  return `${cut.replace(/\s+$/, '')}${ELLIPSIS}`
}
