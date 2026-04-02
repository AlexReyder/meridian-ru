import { Clock, FileText, Shield, Users, type LucideIcon } from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'

type ReassuranceItem = {
  icon?: 'clock' | 'fileText' | 'shield' | 'users' | null
  text?: string | null
}

type HeroProposalBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  supportLine?: string | null
  reassuranceItems?: ReassuranceItem[] | null
  brandParagraph?: string | null
}

type Props = {
  block: HeroProposalBlockData
  locale: Locale
}

const ICONS: Record<string, LucideIcon> = {
  clock: Clock,
  fileText: FileText,
  shield: Shield,
  users: Users,
}

export function HeroProposalBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="mb-8 inline-flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {block.eyebrow}
          </span>
          <span className="h-px w-8 bg-accent" />
        </div>

        <h1
          className={`font-serif font-light tracking-tight text-foreground text-balance ${
              'text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1]'
          }`}
        >
          {block.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance lg:text-xl">
          {block.description}
        </p>

        {block.supportLine ? (
          <p className="mt-4 text-sm text-muted-foreground/80">{block.supportLine}</p>
        ) : null}

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {block.reassuranceItems?.map((item, index) => {
            if (!item?.text) return null
            const Icon = item.icon && ICONS[item.icon] ? ICONS[item.icon] : Clock

            return (
              <div key={`${item.text}-${index}`} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-12 max-w-2xl border-t border-border/60 pt-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {block.brandParagraph}
          </p>
        </div>
      </div>
    </section>
  )
}