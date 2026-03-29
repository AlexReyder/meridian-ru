import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type CTAConceptsBlockData = {
  title?: string | null
  description?: string | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
  footerNote?: string | null
}

type Props = {
  block: CTAConceptsBlockData
  locale: Locale
}

export function CtaConceptsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="border-t border-border/50 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="mb-8 flex items-center justify-center gap-1">
          {rtl ? (
            <>
              <div className="h-[2px] w-1 rounded-full bg-foreground/20" />
              <div className="h-[2px] w-1.5 rounded-full bg-signature-brass" />
              <div className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
            </>
          ) : (
            <>
              <div className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
              <div className="h-[2px] w-1.5 rounded-full bg-signature-brass" />
              <div className="h-[2px] w-1 rounded-full bg-foreground/20" />
            </>
          )}
        </div>

        <h2 className="text-balance font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl xl:text-5xl">
          {block.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
          {block.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
            className={cn(
              'group inline-flex items-center gap-2 rounded-sm bg-foreground px-8 py-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90',
              rtl && 'flex-row-reverse',
            )}
          >
            <Clock className="h-4 w-4" />

            <span>{block.primaryButtonLabel}</span>

            {rtl ? (
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            ) : (
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </Link>

          <Link
            href={getHrefForPageKey(block.secondaryPageKey ?? 'pricing', locale)}
            className="inline-flex items-center gap-2 rounded-sm border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
          >
            {block.secondaryButtonLabel}
          </Link>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          {block.footerNote}
        </p>
      </div>
    </section>
  )
}