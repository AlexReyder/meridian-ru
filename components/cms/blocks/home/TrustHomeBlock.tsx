import { CheckCircle } from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type TrustItem = {
  label?: string | null
}

type TrustHomeBlockData = {
  items?: TrustItem[] | null
}

type Props = {
  block: TrustHomeBlockData
  locale: Locale
}

export function TrustHomeBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative py-16">
          <div className="absolute top-0 left-0 right-0 flex items-center">
            <div className="h-[1px] flex-1 bg-border" />
            {rtl ? (
              <>
                <div className="h-[2px] w-2 rounded-full bg-signature-brass" />
                <div className="mx-1 h-[2px] w-3 rounded-full bg-signature-cobalt" />
              </>
            ) : (
              <>
                <div className="mx-1 h-[2px] w-3 rounded-full bg-signature-cobalt" />
                <div className="h-[2px] w-2 rounded-full bg-signature-brass" />
              </>
            )}
            <div className="h-[1px] flex-1 bg-border" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-center">
            <div className="h-[1px] flex-1 bg-border" />
            {rtl ? (
              <>
                <div className="h-[2px] w-2 rounded-full bg-signature-brass" />
                <div className="mx-1 h-[2px] w-3 rounded-full bg-signature-cobalt" />
              </>
            ) : (
              <>
                <div className="mx-1 h-[2px] w-3 rounded-full bg-signature-cobalt" />
                <div className="h-[2px] w-2 rounded-full bg-signature-brass" />
              </>
            )}
            <div className="h-[1px] flex-1 bg-border" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {block.items?.map((item, index) =>
              item?.label ? (
                <div
                  key={`${item.label}-${index}`}
                  className={cn('flex items-start gap-4', rtl && 'flex-row-reverse text-right')}
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-signature-cobalt" />
                  <p className="leading-relaxed text-foreground">{item.label}</p>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  )
}