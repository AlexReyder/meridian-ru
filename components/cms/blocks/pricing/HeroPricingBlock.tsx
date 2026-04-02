import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type TrustLabel = {
  label?: string | null
}

type HeroPricingBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  descriptionSecondary?: string | null
  trustLabels?: TrustLabel[] | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
}

type Props = {
  block: HeroPricingBlockData
  locale: Locale
}

export function HeroPricingBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('max-w-3xl', rtl && 'mr-auto')}>
          <div className="inline-flex items-center gap-3 mb-8">
            {rtl ? (
              <div className="flex items-center">
                <span className="h-[2px] w-2 bg-signature-brass rounded-full" />
                <span className="h-[2px] w-3 bg-signature-cobalt mr-0.5 rounded-full" />
              </div>
            ) : (
              <div className="flex items-center">
                <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
                <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
              </div>
            )}

            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {block.eyebrow}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light leading-[1.08] tracking-tight text-foreground text-balance">
            {block.title}
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {block.description}
          </p>

          <p className="mt-4 text-base text-muted-foreground/80 leading-relaxed max-w-2xl">
            {block.descriptionSecondary}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {block.trustLabels?.map((item, index) =>
              item?.label ? (
                <span
                  key={`${item.label}-${index}`}
                  className="inline-flex items-center px-4 py-2 bg-secondary/60 border border-border/50 rounded-sm text-xs uppercase tracking-wider text-foreground/70"
                >
                  {item.label}
                </span>
              ) : null,
            )}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <Link
                href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
                className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-7 text-[11px] font-medium uppercase tracking-[0.15em] text-background transition-colors hover:bg-foreground/90"
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
                  'absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-1/2',
                     'bg-gradient-to-r from-signature-cobalt to-signature-brass',
                )}
              />
            </div>

            <Link
              href={getHrefForPageKey(
                block.secondaryPageKey ?? (locale === 'ru' ? 'method' : 'solutions'),
                locale,
              )}
              className="inline-flex h-12 items-center justify-center rounded-md border border-foreground/15 px-7 text-[11px] font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-foreground/5"
            >
              {block.secondaryButtonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}