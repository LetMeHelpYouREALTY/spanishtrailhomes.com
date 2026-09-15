import { SectionBanner } from '@/components/heading-media'

export type GbpFaqItem = {
  question: string
  answer: string
}

type GbpFaqListProps = {
  headingId: string
  title: string
  items: GbpFaqItem[]
  intro?: string
}

/** Visible FAQ block that must match FAQPage JSON-LD on the same page. */
export function GbpFaqList({ headingId, title, items, intro }: GbpFaqListProps) {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby={headingId}>
      <SectionBanner headingId={headingId} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id={headingId} className="font-heading text-2xl text-[#1f2a24] sm:text-3xl">
          {title}
        </h2>
        {intro ? <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#372a20]/85">{intro}</p> : null}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.question} className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6">
              <h3 className="text-lg font-semibold text-[#0f2b1e]">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#372a20]/85">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
