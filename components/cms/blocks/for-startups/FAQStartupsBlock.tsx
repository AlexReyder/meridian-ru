'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type FAQItem = {
  question?: string | null
  answer?: string | null
}

type FAQStartupsBlockData = {
  eyebrow?: string | null
  title?: string | null
  items?: FAQItem[] | null
}

type Props = {
  block: FAQStartupsBlockData
  locale: Locale
}

export function FAQStartupsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!block.items?.length) return null

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse justify-end')}>
          {rtl ? (
            <>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
              <span className="h-px w-8 bg-accent" />
            </>
          ) : (
            <>
              <span className="h-px w-8 bg-accent" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
            </>
          )}
        </div>

        <h2
          className={cn(
            'mb-12 font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl',
            rtl && 'text-right',
          )}
        >
          {block.title}
        </h2>

        <div className="space-y-4">
          {block.items.map((item, index) => (
            <div
              key={`${item.question}-${index}`}
              className="overflow-hidden rounded-sm border border-border/60 bg-card"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  'flex w-full items-center justify-between p-5 transition-colors hover:bg-secondary/30 lg:p-6',
                  rtl ? 'text-right' : 'text-left',
                )}
              >
                {rtl ? (
                  <>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200',
                        openIndex === index && 'rotate-180',
                      )}
                    />
                    <span className="pr-4 font-serif text-base font-light text-foreground lg:text-lg">
                      {item.question}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="pr-4 font-serif text-base font-light text-foreground lg:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200',
                        openIndex === index && 'rotate-180',
                      )}
                    />
                  </>
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 lg:px-6 lg:pb-6">
                  <p className={cn('text-sm leading-relaxed text-muted-foreground', rtl && 'text-right')}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}