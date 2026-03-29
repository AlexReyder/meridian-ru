'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import {
  getHrefForPageKey,
  type Locale,
  type PageKey,
} from '@/lib/routes'

type HeaderNavItem = {
  label?: string | null
  pageKey?: PageKey | null
}

type HeaderData = {
  brandName?: string | null
  brandTagline?: string | null
  navigation?: HeaderNavItem[] | null
  proposalButtonLabel?: string | null
  mobileLanguageLabel?: string | null
  menuAriaLabel?: string | null
}

type Props = {
  data?: HeaderData | null
  locale: Locale
  pageKey?: PageKey
  dir?: 'ltr' | 'rtl'
}

export function SiteHeader({
  data,
  locale,
  pageKey,
  dir = 'ltr',
}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isRTL = dir === 'rtl'
  const brandHref = getHrefForPageKey('home', locale)
  const ctaHref = getHrefForPageKey('get-proposal', locale)

 const navItems = (data?.navigation ?? []).filter(
  (
    item,
  ): item is {
    label: string
    pageKey: PageKey
  } => Boolean(item?.label && item?.pageKey),
)

  const isActive = (targetPageKey: PageKey) => {
    if (!mounted || !pageKey) return false
    return pageKey === targetPageKey
  }

  return (
    <header
      dir={dir}
      className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={brandHref} className="flex items-center gap-3">
              <div className="flex flex-col gap-0.5">
                <div className="h-2 w-[3px] rounded-full bg-signature-cobalt" />
                <div className="h-1.5 w-[3px] rounded-full bg-signature-brass" />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-lg font-medium tracking-tight text-foreground">
                  {data?.brandName || 'Atelier Meridian'}
                </span>
                <span
                  className={`text-[10px] uppercase text-muted-foreground ${
                    isRTL ? 'tracking-[0.15em]' : 'tracking-[0.2em]'
                  }`}
                >
                  {data?.brandTagline || 'Product Architecture & Interface Studio'}
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const href = getHrefForPageKey(item.pageKey, locale)

              return (
                <Link
                  key={`${item.pageKey}-${item.label}`}
                  href={href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive(item.pageKey)
                      ? 'font-medium text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={ctaHref}
              className={`hidden h-8 items-center justify-center rounded-md px-5 text-xs font-medium uppercase tracking-wider transition-colors md:inline-flex ${
                isActive('get-proposal')
                  ? 'border border-accent/40 bg-accent/20 text-foreground'
                  : 'bg-foreground text-background hover:bg-foreground/90'
              }`}
            >
              {data?.proposalButtonLabel || 'Получить предложение'}
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-foreground lg:hidden"
              aria-label={data?.menuAriaLabel || 'Открыть меню'}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="space-y-4 px-6 py-6">
            {navItems.map((item) => {
              const href = getHrefForPageKey(item.pageKey, locale)

              return (
                <Link
                  key={`mobile-${item.pageKey}-${item.label}`}
                  href={href}
                  className={`block text-sm transition-colors ${
                    isActive(item.pageKey)
                      ? 'font-medium text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}

            <div className="border-t border-border pt-4">
              <Link
                href={ctaHref}
                className="flex h-10 w-full items-center justify-center rounded-md bg-foreground px-5 text-xs font-medium uppercase tracking-wider text-background transition-colors hover:bg-foreground/90"
                onClick={() => setIsMenuOpen(false)}
              >
                {data?.proposalButtonLabel || 'Получить предложение'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}