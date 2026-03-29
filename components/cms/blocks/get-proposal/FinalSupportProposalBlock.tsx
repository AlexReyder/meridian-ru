'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Upload } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  getHrefForPageKey,
  isRTL,
  type Locale,
  type PageKey,
} from '@/lib/routes'
import { cn } from '@/lib/utils'

type FinalSupportProposalBlockData = {
  title?: string | null
  description?: string | null
  uploadButtonLabel?: string | null
  pricingButtonLabel?: string | null
  pricingPageKey?: PageKey | null
}

type Props = {
  block: FinalSupportProposalBlockData
  locale: Locale
}

export function FinalSupportProposalBlockComponent({
  block,
  locale,
}: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className={cn('text-center', rtl && 'text-center')}>
          <h2 className="mb-4 font-serif text-2xl font-light text-foreground sm:text-3xl">
            {block.title}
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            {block.description}
          </p>

          <div
            className={cn(
              'flex flex-col items-center justify-center gap-4 sm:flex-row',
              rtl && 'sm:flex-row-reverse',
            )}
          >
            <Button
              type="button"
              onClick={() => {
                const el = document.querySelector('[data-proposal-upload-trigger]') as HTMLButtonElement | null
              el?.click()
              }}
              className="h-11 bg-foreground px-6 text-[11px] uppercase tracking-[0.12em] text-background hover:bg-foreground/90"
            >
              {rtl ? (
                <>
                  <Upload className="ml-2 h-4 w-4" />
                  {block.uploadButtonLabel}
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  {block.uploadButtonLabel}
                </>
              )}
            </Button>

            <Button
              asChild
              variant="outline"
              className={cn(
                'h-11 border-foreground/20 px-6 text-[11px] uppercase tracking-[0.12em] text-foreground hover:bg-foreground/5',
                
              )}
            >
              <Link href={getHrefForPageKey(block.pricingPageKey ?? 'pricing', locale)}>
                {block.pricingButtonLabel}
                {rtl ? (
                  <ArrowLeft className="mr-2 h-3.5 w-3.5" />
                ) : (
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                )}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}