import { CalendlyLink } from '@/components/calendly-link'
import { TrackedSmsLink } from '@/components/tracked-sms-link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export type FaqItemData = {
  question: string
  answer: string
}

type FaqListProps = {
  items: FaqItemData[]
  className?: string
  /** Open the first question so crawlers and visitors see an answer immediately. */
  openFirst?: boolean
}

export function FaqList({ items, className, openFirst = true }: FaqListProps) {
  return (
    <div
      className={cn(
        'mt-8 divide-y divide-[#d8cdbf] overflow-hidden rounded-3xl border border-[#d8cdbf] bg-white shadow-lg shadow-primary/10',
        className,
      )}
    >
      {items.map((item, index) => (
        <details key={item.question} className="group" open={openFirst && index === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 sm:px-6 [&::-webkit-details-marker]:hidden">
            <h3 className="font-heading text-base font-semibold leading-snug text-[#0f2b1e] sm:text-lg">
              {item.question}
            </h3>
            <span
              aria-hidden
              className="mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[#d8cdbf] text-lg leading-none text-[#0f2b1e] transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="px-5 pb-5 text-base leading-relaxed text-[#372a20]/85 sm:px-6">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

type FaqSectionProps = {
  headingId: string
  heading: string
  items: FaqItemData[]
  eyebrow?: string
  intro?: string
  showCtas?: boolean
  className?: string
  /** Cream FAQ band vs white. */
  tone?: 'cream' | 'white'
}

export function FaqSection({
  headingId,
  heading,
  items,
  eyebrow,
  intro,
  showCtas = false,
  className,
  tone = 'cream',
}: FaqSectionProps) {
  return (
    <section
      className={cn(tone === 'cream' ? 'bg-[#f8f2e7]' : 'bg-white', 'py-16 sm:py-20', className)}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">{eyebrow}</p>
          ) : null}
          <h2 id={headingId} className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            {heading}
          </h2>
          {intro ? <p className="text-base leading-relaxed text-[#372a20]/85">{intro}</p> : null}
        </div>

        {showCtas ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <CalendlyLink
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#0f2b1e] px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-[#0f2b1e]/90"
              ctaText="Book Tour to See Inside"
              ctaLocation="faq"
            >
              Book Tour to See Inside
            </CalendlyLink>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#0f2b1e]/60 px-6 py-2 text-sm font-medium text-[#0f2b1e] hover:bg-[#0f2b1e]/10"
            >
              <TrackedSmsLink
                intent="question"
                href="sms:+17027663299?body=I%20have%20a%20question%20about%20Spanish%20Trail%20homes"
                className="inline-flex items-center"
                aria-label="Text your question to 702-766-3299"
              >
                Text Your Question: 702-766-3299
              </TrackedSmsLink>
            </Button>
          </div>
        ) : null}

        <FaqList items={items} />
      </div>
    </section>
  )
}
