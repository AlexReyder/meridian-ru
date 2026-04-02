'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type FaqItem = {
  question?: string | null
  answer?: string | null
}

type FaqHomeBlockData = {
  eyebrow?: string | null
  title?: string | null
  items?: FaqItem[] | null
}

type Props = {
  block: FaqHomeBlockData
  locale: Locale
}

export function FaqHomeBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-16 max-w-3xl', rtl && 'text-right')}>
          <div className={cn('mb-4 flex items-center gap-3', rtl && 'flex-row-reverse')}>
            <div className={cn('flex items-center', rtl && 'flex-row-reverse')}>
              {rtl ? (
                <>
                  <span className="h-[2px] w-2 rounded-full bg-signature-brass" />
                  <span className="mr-0.5 h-[2px] w-3 rounded-full bg-signature-cobalt" />
                </>
              ) : (
                <>
                  <span className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
                  <span className="ml-0.5 h-[2px] w-2 rounded-full bg-signature-brass" />
                </>
              )}
            </div>

            <span
              className={cn(
                'text-[10px] text-muted-foreground',
                rtl ? 'tracking-[0.15em]' : 'uppercase tracking-[0.2em]',
              )}
            >
              {block.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-light leading-tight text-foreground text-balance lg:text-4xl xl:text-5xl">
            {block.title}
          </h2>
        </div>

        <div className="max-w-3xl">
          <div className="space-y-4">
            {block.items?.map((faq, index) => {
              if (!faq?.question || !faq?.answer) return null
              const isOpen = openIndex === index

              return (
                <div
                  key={`${faq.question}-${index}`}
                  className="rounded-sm border border-border bg-card px-6 transition-colors data-[state=open]:border-foreground/20"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={cn(
                      'flex w-full items-center justify-between gap-4 py-5 text-left',
                      rtl && 'flex-row-reverse text-right',
                    )}
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg text-foreground">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-200',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      'grid transition-all duration-200 ease-out',
                      isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="leading-relaxed text-muted-foreground">{faq.answer}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}