import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type CTAAgenciesBlockData = {
  title?: string | null
  description?: string | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
  footerNote?: string | null
}

type Props = {
  block: CTAAgenciesBlockData
  locale: Locale
}

export function CTAAgenciesBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <span className="h-[2px] w-4 bg-signature-cobalt rounded-full" />
            <span className="h-[2px] w-3 bg-signature-brass ml-1 rounded-full" />
          </div>
        </div>

        <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
          {block.title}
        </h2>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {block.description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <div className="relative group">
            <Link
              href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
              className={cn(
                'inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 text-[11px] px-8 h-12 rounded-md font-medium transition-colors',
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

            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-signature-cobalt to-signature-brass rounded-full transition-all duration-300 group-hover:w-1/2" />
          </div>

          <Link
            href={getHrefForPageKey(block.secondaryPageKey ?? 'pricing', locale)}
            className={cn(
              'inline-flex items-center justify-center border border-foreground/15 text-foreground hover:bg-foreground/5 text-[11px] px-8 h-12 rounded-md font-medium transition-colors',
              rtl ? 'tracking-[0.12em]' : 'uppercase tracking-[0.15em]',
            )}
          >
            {block.secondaryButtonLabel}
          </Link>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">{block.footerNote}</p>
      </div>
    </section>
  )
}