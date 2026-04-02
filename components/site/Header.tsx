'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { getMediaAlt, getMediaUrl } from '@/lib/media'
import {
  getHrefForPageKey,
  type Locale,
  type PageKey,
} from '@/lib/routes'

type HeaderNavItem = {
  label?: string | null
  pageKey?: PageKey | null
}

type HeaderLogo = {
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
  thumbnailURL?: string | null
  sizes?: {
    medium?: { url?: string | null } | null
    large?: { url?: string | null } | null
  } | null
}

type HeaderData = {
  logo?: HeaderLogo | number | null
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

  const brandHref = getHrefForPageKey('home', locale)
  const ctaHref = getHrefForPageKey('get-proposal', locale)

  const navItems = (data?.navigation ?? []).filter(
    (item): item is { label: string; pageKey: PageKey } =>
      Boolean(item?.label && item?.pageKey),
  )

  const isActive = (targetPageKey: PageKey) => {
    if (!mounted || !pageKey) return false
    return pageKey === targetPageKey
  }

  const logoUrl = getMediaUrl(data?.logo)
  const logoAlt = getMediaAlt(data?.logo, data?.brandName || 'Atelier Meridian')

  const logoWidth =
    data?.logo &&
    typeof data.logo === 'object' &&
    'width' in data.logo &&
    typeof data.logo.width === 'number'
      ? data.logo.width
      : 458

  const logoHeight =
    data?.logo &&
    typeof data.logo === 'object' &&
    'height' in data.logo &&
    typeof data.logo.height === 'number'
      ? data.logo.height
      : 82

  return (
    <header
      dir={dir}
      className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
          <Link
  href={brandHref}
  className="flex min-w-0 shrink-0 items-center max-w-[180px] sm:max-w-[220px] lg:max-w-[280px]"
>
  {logoUrl ? (
    <Image
      src={logoUrl}
      alt={logoAlt}
      width={logoWidth}
      height={logoHeight}
      priority
      className="block h-auto max-h-[40px] w-auto max-w-full object-contain sm:max-h-[48px] lg:max-h-[56px]"
    />
  ) : (
    <div className="flex min-w-0 flex-col">
      <span className="text-[20px] leading-none tracking-[-0.02em] text-foreground">
        {data?.brandName || 'Atelier Meridian'}
      </span>
      <span className="mt-2 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
        {data?.brandTagline || 'Product Architecture & Interface Studio'}
      </span>
    </div>
  )}
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