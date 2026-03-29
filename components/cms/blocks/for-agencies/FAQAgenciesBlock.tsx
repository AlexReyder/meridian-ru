'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type FAQItem = {
  question?: string | null
  answer?: string | null
}

type FAQAgenciesBlockData = {
  eyebrow?: string | null
  title?: string | null
  items?: FAQItem[] | null
}

type Props = {
  block: FAQAgenciesBlockData
  locale: Locale
}

export function FAQAgenciesBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('flex items-center gap-3 mb-6', rtl && 'flex-row-reverse')}>
          {rtl ? (
            <>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
              <div className="flex items-center">
                <span className="h-[2px] w-2 bg-signature-brass rounded-full" />
                <span className="h-[2px] w-3 bg-signature-cobalt mr-0.5 rounded-full" />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center">
                <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
                <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
            </>
          )}
        </div>

        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-12">
          {block.title}
        </h2>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {block.items?.map((item, index) =>
              item?.question && item?.answer ? (
                <AccordionItem
                  key={`${item.question}-${index}`}
                  value={`item-${index}`}
                  className="border border-border rounded-sm bg-card px-6 data-[state=open]:border-foreground/20"
                >
                  <AccordionTrigger
                    className={cn(
                      'font-serif text-base lg:text-lg text-foreground hover:no-underline py-5',
                      rtl ? 'text-right' : 'text-left',
                    )}
                  >
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent
                    className={cn(
                      'text-muted-foreground leading-relaxed pb-5',
                      rtl && 'text-right',
                    )}
                  >
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