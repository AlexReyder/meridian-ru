import { BlockRenderer } from '@/components/cms/BlockRenderer'
import { SiteFooter } from '@/components/site/Footer'
import { SiteHeader } from '@/components/site/Header'
import type { Locale, PageKey } from '@/lib/routes'
import { Footer, Header } from '@/payload-types'

type Props = {
  locale: Locale
  pageKey?: PageKey
  page: {
    layout?: Array<Record<string, unknown>>
  }
  header: Header
  footer: Footer
}

export function PageRenderer({
  locale,
  pageKey,
  page,
  header,
  footer,
}: Props) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader data={header} locale={locale} pageKey={pageKey} />
      <BlockRenderer blocks={page.layout ?? []} locale={locale} />
      <SiteFooter data={footer} locale={locale} />
    </main>
  )
}