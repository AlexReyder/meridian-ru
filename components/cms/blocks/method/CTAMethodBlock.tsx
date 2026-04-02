import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'

type CTAMethodBlockData = {
  title?: string | null
  description?: string | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
  footerNote?: string | null
}

type Props = {
  block: CTAMethodBlockData
  locale: Locale
}

export function CTAMethodBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-balance font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl xl:text-5xl">
          {block.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {block.description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
            className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-[11px] font-medium uppercase tracking-[0.15em] text-background transition-colors hover:bg-foreground/90"
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
            href={getHrefForPageKey(block.secondaryPageKey ?? 'pricing', locale)}
            className="inline-flex h-12 items-center justify-center rounded-md border border-foreground/15 px-8 text-[11px] font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-foreground/5"
          >
            {block.secondaryButtonLabel}
          </Link>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">{block.footerNote}</p>
      </div>
    </section>
  )
}