import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { getMediaAlt, getMediaUrl } from '@/lib/media'
import { cn } from '@/lib/utils'

type TagItem = {
  label?: string | null
}

type HeroSolutionsBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  note?: string | null
  tags?: TagItem[] | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
  imageSource?: 'url' | 'upload' | null
  imageUrl?: string | null
  imageMedia?: any
  imageAlt?: string | null
  floatingLabel?: string | null
}

type Props = {
  block: HeroSolutionsBlockData
  locale: Locale
}

export function HeroSolutionsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

const media = block.imageMedia; 

// 1. Resolve URL
// Handle both cases: media as an object (populated) or just an ID (not populated)
const resolvedImageUrl = block.imageSource === 'upload' 
  ? (typeof media === 'object' ? media?.url : block.imageUrl) 
  : block.imageUrl;

// 2. Resolve Alt
const resolvedImageAlt = block.imageSource === 'upload'
  ? (typeof media === 'object' ? (block.imageAlt || media?.alt) : block.imageAlt)
  : block.imageAlt;
const finalUrl = resolvedImageUrl ?? '';
const finalAlt = resolvedImageAlt ?? '';

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="relative overflow-hidden pb-16 pt-28 lg:pb-24 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        <div
          className={cn(
            'flex flex-col gap-12 lg:items-center xl:gap-20',
            rtl ? 'lg:flex-row-reverse lg:gap-16' : 'lg:flex-row lg:gap-16',
          )}
        >
          <div className={cn('w-full flex-shrink-0 lg:w-[48%]', rtl && 'text-right')}>
            <div className={cn('mb-8 inline-flex items-center gap-3', rtl && 'flex-row-reverse')}>
              <div className={cn('flex items-center', rtl && 'flex-row-reverse')}>
                {rtl ? (
                  <>
                    <span className="h-[2px] w-2 rounded-full bg-signature-brass" />
                    <span className="mr-0.5 h-[2px] w-3 rounded-full bg-signature-cobalt" />
                  </>
                ) : (
                  <>
                    <span className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
                    <span className="ml-0.5 h-[2px] w-2 rounded-full bg-signature-brass" />
                  </>
                )}
              </div>

              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
            </div>

            <h1
              className={cn(
                'font-serif font-light tracking-tight text-foreground text-balance',
                rtl
                  ? 'text-3xl leading-[1.2] sm:text-4xl lg:text-[3rem] xl:text-[3.4rem]'
                  : 'text-4xl leading-[1.08] sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]',
              )}
            >
              {block.title}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              {block.description}
            </p>

            <p className="mt-4 text-sm text-muted-foreground/80">{block.note}</p>

            <div className={cn('mt-10 flex flex-col gap-4 sm:flex-row', rtl && 'sm:flex-row-reverse')}>
              <div className="group relative">
                <Link
                  href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
                  className={cn(
                    'inline-flex h-11 items-center justify-center rounded-md bg-foreground px-7 text-[11px] font-medium text-background transition-colors hover:bg-foreground/90',
                    rtl ? 'tracking-[0.12em]' : 'uppercase tracking-[0.15em]',
                  )}
                >
                  {rtl ? (
                    <>
                      <ArrowLeft className="ml-2 h-3.5 w-3.5" />
                      {block.primaryButtonLabel}
                    </>
                  ) : (
                    <>
                      {block.primaryButtonLabel}
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
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
                  'inline-flex h-11 items-center justify-center rounded-md border border-foreground/15 px-7 text-[11px] font-medium text-foreground transition-colors hover:bg-foreground/5',
                  rtl ? 'tracking-[0.12em]' : 'uppercase tracking-[0.15em]',
                )}
              >
                {block.secondaryButtonLabel}
              </Link>
            </div>

            <div className="mt-12 border-t border-border/50 pt-6">
              <div className={cn('flex flex-wrap gap-2', rtl && 'justify-end')}>
                {block.tags?.map((tag, index) =>
                  tag?.label ? (
                    <span
                      key={`${tag.label}-${index}`}
                      className={cn(
                        'inline-flex items-center rounded-sm border bg-background px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] transition-colors duration-200',
                        index === 0
                          ? 'border-signature-cobalt/30 text-foreground/70 hover:border-signature-cobalt/50'
                          : 'border-border/60 text-muted-foreground/80 hover:border-border hover:text-muted-foreground',
                      )}
                    >
                      {index === 0 ? (
                        <span
                          className={cn(
                            'h-2.5 w-[3px] rounded-full bg-gradient-to-b from-signature-cobalt to-signature-brass/70',
                            rtl ? 'ml-2' : 'mr-2',
                          )}
                        />
                      ) : null}
                      {tag.label}
                    </span>
                  ) : null,
                )}
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-[52%]">
            <div className="relative">
              <div className={cn('absolute -top-1 z-10 hidden lg:block', rtl ? '-right-1' : '-left-1')}>
                <div
                  className={cn(
                    'h-[2px] w-5',
                    rtl
                      ? 'rounded-l-full bg-gradient-to-l from-signature-cobalt/50 to-signature-cobalt/0'
                      : 'rounded-r-full bg-gradient-to-r from-signature-cobalt/50 to-signature-cobalt/0',
                  )}
                />
                <div
                  className={cn(
                    'absolute top-0 h-5 w-[2px] rounded-b-full bg-gradient-to-b from-signature-cobalt/50 to-signature-cobalt/0',
                    rtl ? 'right-0' : 'left-0',
                  )}
                />
                <div
                  className={cn(
                    'absolute top-[2px] h-[1.5px] w-2 rounded-full bg-signature-brass/40',
                    rtl ? 'right-5' : 'left-5',
                  )}
                />
              </div>

              <div className="relative overflow-hidden rounded-sm border border-border/40 shadow-[0_40px_80px_-20px_rgba(42,37,32,0.15),0_20px_40px_-12px_rgba(42,37,32,0.08)]">
                <img
                  src={finalUrl}
                  alt={finalAlt}
                  className="h-auto w-full"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/5 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-3 left-8 right-8 hidden items-center justify-center lg:flex">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
                <div className="mx-3 flex items-center gap-1">
                  <div className="h-1 w-1 rounded-full bg-signature-cobalt/40" />
                  <div className="h-0.5 w-0.5 rounded-full bg-signature-brass/50" />
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
              </div>
            </div>

            <div
              className={cn(
                'absolute -bottom-4 rounded-sm border border-border/60 bg-card/95 px-3 py-1.5 shadow-sm backdrop-blur-sm',
                rtl ? 'left-4 lg:left-8' : 'right-4 lg:right-8',
              )}
            >
              <span className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                {block.floatingLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}