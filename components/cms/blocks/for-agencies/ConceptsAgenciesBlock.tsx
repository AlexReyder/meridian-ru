'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ConceptItem = {
  badge?: string | null
  title?: string | null
  challenge?: string | null
  clarified?: string | null
  prepared?: string | null
  imageSource?: 'url' | 'upload' | null
  imageUrl?: string | null
  imageMedia?: any
  imageAlt?: string | null
}

type ConceptsAgenciesBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  layoutVariant?: 'grid' | 'carousel' | null
  challengeLabel?: string | null
  clarifiedLabel?: string | null
  preparedLabel?: string | null
  viewAllLabel?: string | null
  viewAllPageKey?: PageKey | null
  items?: ConceptItem[] | null
}

type Props = {
  block: ConceptsAgenciesBlockData
  locale: Locale
}

function resolveConceptImage(item: ConceptItem) {
  const media = item.imageMedia

  const resolvedImageUrl =
    item.imageSource === 'upload'
      ? (typeof media === 'object' ? media?.url : item.imageUrl)
      : item.imageUrl

  const resolvedImageAlt =
    item.imageSource === 'upload'
      ? (typeof media === 'object'
          ? item.imageAlt || media?.alt || item.title
          : item.imageAlt || item.title)
      : item.imageAlt || item.title

  return {
    finalUrl: resolvedImageUrl ?? '',
    finalAlt: resolvedImageAlt ?? item.title ?? '',
  }
}

function ConceptsGridCard({
  item,
  index,
  rtl,
  challengeLabel,
  clarifiedLabel,
  preparedLabel,
}: {
  item: ConceptItem
  index: number
  rtl: boolean
  challengeLabel?: string | null
  clarifiedLabel?: string | null
  preparedLabel?: string | null
}) {
  if (!item.title || !item.challenge || !item.clarified || !item.prepared) return null

  const { finalUrl, finalAlt } = resolveConceptImage(item)

  return (
    <div className="relative bg-card rounded-sm border border-border overflow-hidden hover:border-foreground/20 transition-colors">
      {index === 0 && (
        <div className={cn('absolute top-0 z-10', rtl ? 'right-0' : 'left-0')}>
          <div
            className={cn(
              'absolute top-0 w-4 h-[2px] bg-signature-cobalt',
              rtl ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full',
            )}
          />
          <div
            className={cn(
              'absolute top-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full',
              rtl ? 'right-0' : 'left-0',
            )}
          />
          <div
            className={cn(
              'absolute top-[2px] w-2 h-[1.5px] bg-signature-brass/70 rounded-full',
              rtl ? 'right-4' : 'left-4',
            )}
          />
        </div>
      )}

      <div className="aspect-[16/10] bg-secondary/50 border-b border-border/50 flex items-center justify-center overflow-hidden">
        {finalUrl ? (
          <img
            src={finalUrl}
            alt={finalAlt}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-xs text-muted-foreground/50 uppercase tracking-wider">
            Preview
          </span>
        )}
      </div>

      <div className="p-6">
        <span className="text-[10px] uppercase tracking-[0.15em] text-signature-cobalt border border-signature-cobalt/25 px-2 py-1 rounded-sm">
          {item.badge}
        </span>

        <h3 className="font-serif text-lg font-light text-foreground mt-4 mb-4">
          {item.title}
        </h3>

        <div className="space-y-3 text-sm">
          <div>
            <span className="text-[9px] uppercase tracking-wider text-muted-foreground/70">
              {challengeLabel}
            </span>
            <p className="mt-1 text-muted-foreground leading-relaxed">{item.challenge}</p>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-wider text-muted-foreground/70">
              {clarifiedLabel}
            </span>
            <p className="mt-1 text-foreground/70 leading-relaxed">{item.clarified}</p>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-wider text-muted-foreground/70">
              {preparedLabel}
            </span>
            <p className="mt-1 text-foreground/70 leading-relaxed">{item.prepared}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ConceptsCarouselCard({
  item,
  href,
  linkLabel,
}: {
  item: ConceptItem
  href: string
  linkLabel?: string | null
}) {
  if (!item.title || !item.challenge || !item.clarified || !item.prepared) return null

  const { finalUrl, finalAlt } = resolveConceptImage(item)

  return (
    <div className="group relative bg-card border border-border rounded-sm overflow-hidden hover:border-foreground/20 transition-all duration-300 flex-shrink-0 w-[calc(100vw-48px)] sm:w-[380px] lg:w-[400px] h-[680px] sm:h-[700px] lg:h-[720px] flex flex-col">
      <div className="absolute top-0 right-0 z-10">
        <div className="absolute top-0 right-0 w-4 h-[2px] bg-signature-cobalt rounded-l-full" />
        <div className="absolute top-0 right-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full" />
        <div className="absolute top-[2px] right-4 w-2 h-[1.5px] bg-signature-brass/70 rounded-full" />
      </div>

      <div className="relative h-[200px] sm:h-[220px] lg:h-[240px] flex-shrink-0 bg-[#1a1816] overflow-hidden">
        {finalUrl ? (
          <img
            src={finalUrl}
            alt={finalAlt}
            className="h-full w-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-xs text-muted-foreground/50 uppercase tracking-wider">
            Preview
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816]/20 to-transparent" />
      </div>

      <div className="p-6 lg:p-8 flex flex-col flex-grow">
        <span className="text-[10px] uppercase tracking-[0.1em] text-signature-cobalt border border-signature-cobalt/25 px-2 py-1 rounded-sm self-start">
          {item.badge}
        </span>

        <h3 className="font-serif text-xl lg:text-2xl font-light text-foreground mt-4 mb-5 line-clamp-2 min-h-[56px] lg:min-h-[64px]">
          {item.title}
        </h3>

        <div className="space-y-4 flex-grow">
          <div>
            <div className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5">
              التحدي
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
              {item.challenge}
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5">
              ما هيكلناه
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
              {item.clarified}
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5">
              ما سلّمناه
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
              {item.prepared}
            </p>
          </div>
        </div>

        <div className="mt-auto pt-5 border-t border-border/60">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-signature-cobalt transition-colors group/link"
          >
            <ArrowUpLeft className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-x-0.5 group-hover/link:-translate-y-0.5" />
            {linkLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}

export function ConceptsAgenciesBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const isCarousel = block.layoutVariant === 'carousel'
  const href = getHrefForPageKey(block.viewAllPageKey ?? 'concepts', locale)

  const sliderRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const items = block.items ?? []
  const totalSlides = items.length

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!sliderRef.current || totalSlides === 0) return

      const newIndex = ((index % totalSlides) + totalSlides) % totalSlides
      const target = sliderRef.current.children[newIndex] as HTMLElement | undefined

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest',
        })
      }

      setCurrentIndex(newIndex)
    },
    [totalSlides],
  )

  const nextSlide = useCallback(() => {
    scrollToIndex(currentIndex + 1)
  }, [currentIndex, scrollToIndex])

  const prevSlide = useCallback(() => {
    scrollToIndex(currentIndex - 1)
  }, [currentIndex, scrollToIndex])

  useEffect(() => {
    if (!isCarousel || totalSlides === 0) return

    if (isPaused) {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
      autoplayRef.current = null
      return
    }

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % totalSlides
        const target = sliderRef.current?.children[next] as HTMLElement | undefined

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest',
          })
        }

        return next
      })
    }, 5000)

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [isCarousel, isPaused, totalSlides])

  if (isCarousel) {
    return (
      <section dir="rtl" className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  <span className="h-[2px] w-2 bg-signature-brass rounded-full" />
                  <span className="h-[2px] w-3 bg-signature-cobalt mr-0.5 rounded-full" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {block.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
                {block.title}
              </h2>

              {block.description ? (
                <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
                  {block.description}
                </p>
              ) : null}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                aria-label="النموذج التالي"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                aria-label="النموذج السابق"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-6 lg:px-[calc((100vw-1280px)/2+32px)]"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {items.map((item, index) => (
              <div key={`${item.title}-${index}`} className="snap-start">
                <ConceptsCarouselCard item={item} href={href} linkLabel={block.viewAllLabel} />
              </div>
            ))}
          </div>

          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none z-10" />
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none z-10" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
          <div className="flex items-center justify-between">
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="النموذج التالي"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="النموذج السابق"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 mr-auto lg:mr-0">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-6 h-1.5 bg-signature-cobalt'
                      : 'w-1.5 h-1.5 bg-border hover:bg-foreground/30'
                  }`}
                  aria-label={`الانتقال إلى النموذج ${index + 1}`}
                />
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
              <span>{String(totalSlides).padStart(2, '0')}</span>
              <span>/</span>
              <span className="text-foreground font-medium">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('flex items-center gap-3 mb-6', rtl && 'flex-row-reverse')}>
          {rtl ? (
            <>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
              <div className="flex items-center">
                <span className="h-[2px] w-2 bg-signature-brass rounded-full" />
                <span className="h-[2px] w-3 bg-signature-cobalt mr-0.5 rounded-full" />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center">
                <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
                <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
            </>
          )}
        </div>

        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-14">
          {block.title}
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <ConceptsGridCard
              key={`${item.title}-${index}`}
              item={item}
              index={index}
              rtl={rtl}
              challengeLabel={block.challengeLabel}
              clarifiedLabel={block.clarifiedLabel}
              preparedLabel={block.preparedLabel}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={href}
            className="inline-flex items-center text-sm text-foreground hover:text-signature-cobalt transition-colors group"
          >
            {block.viewAllLabel}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}