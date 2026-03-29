'use client'

import { useEffect, useState } from 'react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

export type NavConceptItem = {
  anchorId?: string | null
  shortLabel?: string | null
  number?: string | null
}

type NavConceptsBlockData = {
  label?: string | null
  items?: NavConceptItem[] | null
}

type Props = {
  block: NavConceptsBlockData
  locale: Locale
}

export function NavConceptsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const ids = (block.items ?? [])
      .map((item) => item?.anchorId)
      .filter(Boolean) as string[]

    if (!ids.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' },
    )

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [block.items])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  if (!block.items?.length) return null

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="sticky top-16 z-30 border-b border-border/50 bg-background/95 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className={cn('flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide', rtl && 'flex-row-reverse')}>
          <span
            className={cn(
              'flex-shrink-0 text-[10px] uppercase tracking-[0.15em] text-muted-foreground',
              rtl ? 'ml-2' : 'mr-2',
            )}
          >
            {block.label}
          </span>

          <div className={cn('flex items-center gap-1.5', rtl && 'flex-row-reverse')}>
            {block.items.map((item, index) =>
              item?.anchorId ? (
                <button
                  key={`${item.anchorId}-${index}`}
                  onClick={() => scrollToSection(item.anchorId!)}
                  className={cn(
                    'group flex flex-shrink-0 items-center gap-2 rounded-sm px-3 py-1.5 text-xs transition-all',
                    rtl && 'flex-row-reverse',
                    activeId === item.anchorId
                      ? 'bg-foreground text-background'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  <span
                    className={cn(
                      'font-medium',
                      activeId === item.anchorId ? 'text-background/70' : 'text-signature-cobalt',
                    )}
                  >
                    {item.number}
                  </span>

                  <span className="hidden max-w-[140px] truncate sm:inline">
                    {item.shortLabel}
                  </span>
                </button>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  )
}