'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { isRTL, type Locale } from '@/lib/routes'

type FAQItem = {
  question?: string | null
  answer?: string | null
}

type FaqPricingBlockData = {
  eyebrow?: string | null
  title?: string | null
  items?: FAQItem[] | null
}

type Props = {
  block: FaqPricingBlockData
  locale: Locale
}

export function FaqPricingBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="border-t border-border/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">{block.eyebrow}</p>

          <h2 className="text-balance font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl xl:text-5xl">
            {block.title}
          </h2>
        </div>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {block.items?.map((item, index) =>
              item?.question && item?.answer ? (
                <AccordionItem
                  key={`${item.question}-${index}`}
                  value={`item-${index}`}
                  className="rounded-sm border border-border bg-card px-6 data-[state=open]:border-foreground/20"
                >
                  <AccordionTrigger
                    className={`py-5 font-serif text-lg text-foreground hover:no-underline ${
                      rtl ? 'text-right' : 'text-left'
                    }`}
                  >
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ) : null,
            )}
          </Accordion>
        </div>
      </div>
    </section>
  )
}