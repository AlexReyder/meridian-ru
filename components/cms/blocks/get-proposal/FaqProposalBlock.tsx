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

type FaqProposalBlockData = {
  title?: string | null
  items?: FAQItem[] | null
}

type Props = {
  block: FaqProposalBlockData
  locale: Locale
}

export function FaqProposalBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-2xl font-light text-foreground sm:text-3xl">
            {block.title}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {block.items?.map((faq, index) =>
            faq?.question && faq?.answer ? (
              <AccordionItem
                key={`${faq.question}-${index}`}
                value={`item-${index}`}
                className="rounded-sm border border-border bg-card px-6 data-[state=open]:border-foreground/20"
              >
                <AccordionTrigger
                  className={`py-5 text-sm font-medium text-foreground hover:no-underline ${
                    rtl ? 'text-right' : 'text-left'
                  }`}
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className={`pb-5 text-sm leading-relaxed text-muted-foreground ${
                    rtl ? 'text-right' : ''
                  }`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ) : null,
          )}
        </Accordion>
      </div>
    </section>
  )
}