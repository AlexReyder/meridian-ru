import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'

type HeroMethodBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  descriptionSecondary?: string | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
}

type Props = {
  block: HeroMethodBlockData
  locale: Locale
}

export function HeroMethodBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          rtl
            ? 'bg-gradient-to-bl from-background via-background to-secondary/30'
            : 'bg-gradient-to-br from-background via-background to-secondary/30'
        }`}
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
        <div className={rtl ? 'max-w-3xl mr-0 ml-auto text-right' : 'max-w-3xl'}>
          <div className={`inline-flex items-center gap-3 mb-8 ${rtl ? 'flex-row-reverse' : ''}`}>
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {block.eyebrow}
            </span>
          </div>

          <h1
            className={`font-serif font-light tracking-tight text-foreground text-balance ${
              rtl
                ? 'text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.15]'
                : 'text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.08]'
            }`}
          >
            {block.title}
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed">
            {block.description}
          </p>

          <p className="mt-4 text-base text-muted-foreground/80 leading-relaxed">
            {block.descriptionSecondary}
          </p>

          <div className={`mt-12 flex flex-col sm:flex-row gap-4 ${rtl ? 'justify-end' : ''}`}>
            <Link
              href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
              className="inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.15em] px-7 h-12 rounded-md font-medium transition-colors"
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
              className="inline-flex items-center justify-center border border-foreground/15 text-foreground hover:bg-foreground/5 text-[11px] uppercase tracking-[0.15em] px-7 h-12 rounded-md font-medium transition-colors"
            >
              {block.secondaryButtonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}