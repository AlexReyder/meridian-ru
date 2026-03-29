'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type FaqItem = {
  question?: string | null
  answer?: string | null
}

type FaqSolutionsBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: FaqItem[] | null
}

type Props = {
  block: FaqSolutionsBlockData
  locale: Locale
}

export function FaqSolutionsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="border-t border-border/40 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className={cn('lg:col-span-4', rtl && 'text-right')}>
            <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse')}>
              <span className="h-px w-8 bg-accent" />
              <span
                className={cn(
                  'text-[11px] text-muted-foreground',
                  rtl ? 'tracking-[0.18em]' : 'uppercase tracking-[0.2em]',
                )}
              >
                {block.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-light leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              {block.title}
            </h2>

            <p className="mt-4 text-base text-muted-foreground">
              {block.description}
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {block.items?.map((item, index) =>
                item?.question && item?.answer ? (
                  <AccordionItem
                    key={`${item.question}-${index}`}
                    value={`item-${index}`}
                    className="border-b border-border/40"
                  >
                    <AccordionTrigger
                      className={cn(
                        'py-5 text-base font-medium text-foreground hover:no-underline',
                        rtl ? 'text-right' : 'text-left',
                      )}
                    >
                      {item.question}
                    </AccordionTrigger>

                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ) : null,
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}