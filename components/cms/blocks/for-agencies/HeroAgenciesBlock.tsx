import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type PartnerTag = {
  label?: string | null
}

type HeroAgenciesBlockData = {
  eyebrow?: string | null
  titlePrefix?: string | null
  titleAccent?: string | null
  titleSuffix?: string | null
  description?: string | null
  descriptionSecondary?: string | null
  partnerTags?: PartnerTag[] | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
}

type Props = {
  block: HeroAgenciesBlockData
  locale: Locale
}

export function HeroAgenciesBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div
        className={cn(
          'absolute inset-0 pointer-events-none',
          rtl
            ? 'bg-gradient-to-bl from-background via-background to-secondary/30'
            : 'bg-gradient-to-br from-background via-background to-secondary/30',
        )}
      />

      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('max-w-3xl', rtl && 'mr-0 ml-auto text-right')}>
          <div
            className={cn(
              'mb-8 inline-flex items-center gap-3',
              rtl && 'flex-row-reverse',
            )}
          >
            {rtl ? (
              <>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {block.eyebrow}
                </span>
                <div className="flex items-center">
                  <span className="h-[2px] w-2 rounded-full bg-signature-brass" />
                  <span className="mr-0.5 h-[2px] w-3 rounded-full bg-signature-cobalt" />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center">
                  <span className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
                  <span className="ml-0.5 h-[2px] w-2 rounded-full bg-signature-brass" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {block.eyebrow}
                </span>
              </>
            )}
          </div>

          <h1
            className={cn(
              'font-serif font-light tracking-tight text-foreground text-balance leading-[1.08]',
              rtl
                ? 'text-3xl sm:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-[1.15]'
                : 'text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]',
            )}
          >
            {block.titlePrefix}
            {block.titleAccent ? (
              <>
                {' '}
                <span className="font-medium">{block.titleAccent}</span>
              </>
            ) : null}
            {block.titleSuffix ? <> {block.titleSuffix}</> : null}
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground lg:text-xl">
            {block.description}
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground/80">
            {block.descriptionSecondary}
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {block.partnerTags?.map((tag, index) =>
              tag?.label ? (
                <span
                  key={`${tag.label}-${index}`}
                  className="inline-flex items-center rounded-sm border border-border/50 bg-secondary/60 px-3 py-1.5 text-[10px] uppercase tracking-wider text-foreground/70"
                >
                  {tag.label}
                </span>
              ) : null,
            )}
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
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
                  'absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-1/2',
                  rtl
                    ? 'bg-gradient-to-r from-signature-brass to-signature-cobalt'
                    : 'bg-gradient-to-r from-signature-cobalt to-signature-brass',
                )}
              />
            </div>

            <Link
              href={getHrefForPageKey(block.secondaryPageKey ?? 'pricing', locale)}
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