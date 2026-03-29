import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type FinalCtaHomeBlockData = {
  title?: string | null
  description?: string | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
  footerNote?: string | null
}

type Props = {
  block: FinalCtaHomeBlockData
  locale: Locale
}

export function FinalCtaHomeBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex items-center justify-center gap-0.5">
            <div className="h-[1px] w-12 bg-border" />
            {rtl ? (
              <>
                <div className="h-[2px] w-2 rounded-full bg-signature-brass" />
                <div className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
              </>
            ) : (
              <>
                <div className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
                <div className="h-[2px] w-2 rounded-full bg-signature-brass" />
              </>
            )}
            <div className="h-[1px] w-12 bg-border" />
          </div>

          <h2 className="font-serif text-3xl font-light leading-tight text-foreground text-balance lg:text-4xl xl:text-5xl">
            {block.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {block.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <div className="group relative">
              <Link
                href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
                className={cn(
                  'inline-flex h-14 items-center justify-center rounded-sm bg-foreground px-10 text-sm text-background transition-colors hover:bg-foreground/90',
                  rtl ? 'tracking-[0.12em]' : 'uppercase tracking-wider',
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

              <div
                className={cn(
                  'absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-1/2',
                  rtl
                    ? 'bg-gradient-to-r from-signature-brass to-signature-cobalt'
                    : 'bg-gradient-to-r from-signature-cobalt to-signature-brass',
                )}
              />
            </div>

            <Link
              href={getHrefForPageKey(block.secondaryPageKey ?? 'pricing', locale)}
              className={cn(
                'inline-flex h-14 items-center justify-center rounded-sm border border-foreground/20 px-10 text-sm text-foreground transition-colors hover:bg-foreground/5',
                rtl ? 'tracking-[0.12em]' : 'uppercase tracking-wider',
              )}
            >
              {block.secondaryButtonLabel}
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">{block.footerNote}</p>
        </div>
      </div>
    </section>
  )
}