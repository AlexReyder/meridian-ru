import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type TagItem = {
  label?: string | null
}

type HeroStartupsBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  note?: string | null
  tags?: TagItem[] | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
}

type Props = {
  block: HeroStartupsBlockData
  locale: Locale
}

export function HeroStartupsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="relative overflow-hidden pb-16 pt-32 lg:pb-20 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('max-w-3xl', rtl && 'ml-auto text-right')}>
          <div className={cn('mb-8 inline-flex items-center gap-3', rtl && 'flex-row-reverse')}>
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {block.eyebrow}
            </span>
          </div>

          <h1
            className={cn(
              'font-serif font-light tracking-tight text-foreground text-balance',
              rtl
                ? 'text-3xl leading-[1.15] sm:text-4xl lg:text-[3rem] xl:text-[3.5rem]'
                : 'text-4xl leading-[1.08] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]',
            )}
          >
            {block.title}
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground lg:text-xl">
            {block.description}
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground/80">
            {block.note}
          </p>

          <div className={cn('mt-10 flex flex-col gap-4 sm:flex-row', rtl && 'sm:flex-row-reverse')}>
            <Link
              href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
              className={cn(
                'inline-flex items-center justify-center rounded-md bg-foreground px-7 h-12 text-[11px] font-medium text-background transition-colors hover:bg-foreground/90',
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
              href={getHrefForPageKey(block.secondaryPageKey ?? 'pricing', locale)}
              className={cn(
                'inline-flex items-center justify-center rounded-md border border-foreground/15 px-7 h-12 text-[11px] font-medium text-foreground transition-colors hover:bg-foreground/5',
                rtl ? 'tracking-[0.12em]' : 'uppercase tracking-[0.15em]',
              )}
            >
              {block.secondaryButtonLabel}
            </Link>
          </div>

          <div className="mt-12 border-t border-border/40 pt-8">
            <div className={cn('flex flex-wrap gap-2.5', rtl && 'justify-end')}>
              {block.tags?.map((tag, index) =>
                tag?.label ? (
                  <span
                    key={`${tag.label}-${index}`}
                    className="inline-flex items-center rounded-sm border border-border/50 bg-background px-3.5 py-2 text-[10px] uppercase tracking-[0.12em] text-muted-foreground/80 transition-colors duration-200 hover:border-border/80 hover:text-foreground/70"
                  >
                    {tag.label}
                  </span>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}