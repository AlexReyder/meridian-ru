import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type FinalCtaPricingBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
  footerNote?: string | null
}

type Props = {
  block: FinalCtaPricingBlockData
  locale: Locale
}

export function FinalCtaPricingBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {block.eyebrow}
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>

          <h2 className="text-balance font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl xl:text-5xl">
            {block.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {block.description}
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
              className={cn(
                'inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-[11px] font-medium text-background transition-colors hover:bg-foreground/90',
                rtl ? 'tracking-[0.12em]' : 'uppercase tracking-[0.15em]',
              )}
            >
              {rtl ? (
                <>
                  <ArrowLeft className="ml-2 h-4 w-4" />
                  {block.primaryButtonLabel}
                </>
              ) : (
                <>
                  {block.primaryButtonLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Link>

            <Link
              href={getHrefForPageKey(block.secondaryPageKey ?? 'home', locale)}
              className={cn(
                'inline-flex h-12 items-center justify-center rounded-md border border-foreground/15 px-8 text-[11px] font-medium text-foreground transition-colors hover:bg-foreground/5',
                rtl ? 'tracking-[0.12em]' : 'uppercase tracking-[0.15em]',
              )}
            >
              {block.secondaryButtonLabel}
            </Link>
          </div>

          <p className="mt-12 text-xs uppercase tracking-wider text-muted-foreground/60">
            {block.footerNote}
          </p>
        </div>
      </div>
    </section>
  )
}