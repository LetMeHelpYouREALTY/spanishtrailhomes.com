import type { Metadata } from 'next'

/** v0 chat surfaces — keep out of the index; next.config 301s these URLs to /contact. */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function ChatsLayout({ children }: { children: React.ReactNode }) {
  return children
}
