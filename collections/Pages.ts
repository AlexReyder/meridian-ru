import type { CollectionConfig } from 'payload'

import { HeroBlock } from '../blocks/home/HeroBlock'
import {
  DEFAULT_LOCALE,
  LOCALES,
  PAGE_KEY_OPTIONS,
  buildHrefFromSlug,
  getHrefForPageKey,
  normalizeSlug,
  type Locale,
  type PageKey,
} from '../lib/routes'
import { getDocPaths, revalidatePaths } from '@/lib/revalidate'
import { ValueHomeBlock } from '@/blocks/home/ValueHomeBlock'
import { VideoWalkthroughHomeBlock } from '@/blocks/home/VideoWalkThroughHome'
import { DeliverablesHomeBlock } from '@/blocks/home/DeliverablesHomeBlock'
import { WhyHomeBlock } from '@/blocks/home/WhyHomeBlock'
import { AudienceHomeBlock } from '@/blocks/home/AudienceHomeBlock'
import { ConceptsHomeBlock } from '@/blocks/home/ConceptsHomeBlock'
import { MethodHomeBlock } from '@/blocks/home/MethodHomeBlock'
import { ProposalHomeBlock } from '@/blocks/home/ProposalHomeBlock'
import { SamplePreviewHomeBlock } from '@/blocks/home/SamplePreviewHomeBlock'
import { TrustHomeBlock } from '@/blocks/home/TrustHomeBlock'
import { FaqHomeBlock } from '@/blocks/home/FaqHomeBlock'
import { PricingHomeBlock } from '@/blocks/home/PricingHomeBlock'
import { FinalCtaHomeBlock } from '@/blocks/home/FinalCtaHomeBlock'
import { HeroSolutionsBlock } from '@/blocks/solutions/HeroSolutionsBlock'
import { PositioningIntroSolutionsBlock } from '@/blocks/solutions/PositioningIntroSolutionsBlock'
import { GridSolutionsBlock } from '@/blocks/solutions/GridSolutionsBlock'
import { DetailsSolutionsBlock } from '@/blocks/solutions/DetailsSolutionsBlock'
import { ClientArtifactsSolutionsBlock } from '@/blocks/solutions/ClientArtifactsSolutions'
import { AudienceSolutionsBlock } from '@/blocks/solutions/AudienceSolutions'
import { WhySolutionsBlock } from '@/blocks/solutions/WhySolutionsBlock'
import { ConnectedCtaSolutionsBlock } from '@/blocks/solutions/ConnectedCtaSolutionsBlock'
import { FaqSolutionsBlock } from '@/blocks/solutions/FaqSolutionsBlock'
import { HeroStartupsBlock } from '@/blocks/for-startups/HeroStartupsBlock'
import { ValueStartupsBlock } from '@/blocks/for-startups/ValueStartupsBlock'
import { DeliverablesStartupsBlock } from '@/blocks/for-startups/DeliverablesStartupsBlock'
import { SituationsStartupsBlock } from '@/blocks/for-startups/SituationsStartupsBlock'
import { ArtifactsStartupsBlock } from '@/blocks/for-startups/ArtifactsStartupsBlock'
import { ProcessStartupsBlock } from '@/blocks/for-startups/ProcessStartupsBlock'
import { EfficiencyStartupsBlock } from '@/blocks/for-startups/StartupsBlock'
import { ConceptsStartupsBlock } from '@/blocks/for-startups/ConceptsStartupsBlock'
import { CTAStartupsBlock } from '@/blocks/for-startups/CTAStartupsBlock'
import { FAQStartupsBlock } from '@/blocks/for-startups/FAQStartupsBlock'
import { HeroAgenciesBlock } from '@/blocks/for-agencies/HeroAgenciesBlock'
import { PartnersClarificationAgenciesBlock } from '@/blocks/for-agencies/PartnersClarificationAgenciesBlock'
import { AudienceAgenciesBlock } from '@/blocks/for-agencies/AudienceAgenciesBlock'
import { ValueAgenciesBlock } from '@/blocks/for-agencies/ValueAgenciesBlock'
import { ProjectsAgenciesBlock } from '@/blocks/for-agencies/ProjectsAgenciesBlock'
import { ProcessAgenciesBlock } from '@/blocks/for-agencies/ProcessAgenciesBlock'
import { ArtifactsAgenciesBlock } from '@/blocks/for-agencies/ArtifactsAgenciesBlock'
import { WhyAgenciesBlock } from '@/blocks/for-agencies/WhyAgenciesBlock'
import { ConceptsAgenciesBlock } from '@/blocks/for-agencies/ConceptsAgenciesBlock'
import { CTAAgenciesBlock } from '@/blocks/for-agencies/CTAAgenciesBlock'
import { FAQAgenciesBlock } from '@/blocks/for-agencies/FAQAgenciesBlock'
import { HeroPricingBlock } from '@/blocks/pricing/HeroPricingBlock'
import { PositioningBlockPricingBlock } from '@/blocks/pricing/PositioningBlockPricingBlock'
import { PackageCardsPricingBlock } from '@/blocks/pricing/PackageCardsPricingBlock'
import { ChoosingGuidePricingBlock } from '@/blocks/pricing/ChoosingGuidePricingBlock'
import { DeliverablesPreviewPricingBlock } from '@/blocks/pricing/DeliverablesPreviewPricingBlock'
import { PriceExplanationPricingBlock } from '@/blocks/pricing/PriceExplanationPricingBlock'
import { NoCallCtaPricingBlock } from '@/blocks/pricing/NoCallCtaPricingBlock'
import { FaqPricingBlock } from '@/blocks/pricing/FaqPricingBlock'
import { FinalCtaPricingBlock } from '@/blocks/pricing/FinalCtaPricingBlock'
import { HeroMethodBlock } from '@/blocks/method/HeroMethodBlock'
import { StepsMethodBlock } from '@/blocks/method/StepsMethodBlock'
import { DeliverablesMethodBlock } from '@/blocks/method/DeliverablesMethodBlock'
import { CTAMethodBlock } from '@/blocks/method/CTAMethodBlock'
import { HeroProposalBlock } from '@/blocks/get-proposal/HeroProposalBlock'
import { TrustProposalBlock } from '@/blocks/get-proposal/TrustProposalBlock'
import { FaqProposalBlock } from '@/blocks/get-proposal/FaqProposalBlock'
import { ProposalFlowProposalBlock } from '@/blocks/get-proposal/ProposalFlowProposal'
import { HeroConceptsBlock } from '@/blocks/concepts/HeroConceptsBlock'
import { IntroConceptsBlock } from '@/blocks/concepts/IntroConceptsBlock'
import { NavConceptsBlock } from '@/blocks/concepts/NavConceptsBlock'
import { ConceptSectionConceptBlock } from '@/blocks/concepts/ConceptSectionConceptBlock'
import { WhyConceptsBlock } from '@/blocks/concepts/WhyConceptsBlock'
import { CtaConceptsBlock } from '@/blocks/concepts/CtaConceptBlock'
import { FinalSupportProposalBlock } from '@/blocks/get-proposal/FinalSupportProposalBlock'

function normalizeLocale(locale?: string | null): Locale | null {
  return LOCALES.includes(locale as Locale) ? (locale as Locale) : null
}



export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Страница',
    plural: 'Страницы',
  },
 hooks: {
  afterChange: [
    async ({ doc, previousDoc, req }) => {
      const locale = normalizeLocale(req.locale)

      await revalidatePaths([
        ...getDocPaths(previousDoc as any),
        ...getDocPaths(doc as any),
      ])
    },
  ],
  afterDelete: [
    async ({ doc }) => {
      await revalidatePaths(getDocPaths(doc as any))
    },
  ],
},
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'internalName',
    defaultColumns: ['internalName', 'routeType', 'pageKey', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'routeType',
      label: 'Тип маршрута',
      type: 'radio',
      required: true,
      defaultValue: 'custom',
      options: [
        { label: 'Пользовательская страница', value: 'custom' },
        { label: 'Системная страница', value: 'system' },
      ],
      admin: {
        description: 'Для новых страниц из админки выбирайте “Пользовательская страница”.',
      },
    },
    {
      name: 'pageKey',
      label: 'Ключ страницы',
      type: 'select',
      unique: true,
      options: PAGE_KEY_OPTIONS,
      admin: {
        condition: (_, siblingData) =>
          (siblingData?.routeType ?? 'system') === 'system',
      },
      validate: (
        value: string | null | undefined,
        { siblingData }: { siblingData?: { routeType?: string | null } },
      ) => {
        if ((siblingData?.routeType ?? 'system') === 'system' && !value) {
          return 'pageKey is required for system pages'
        }

        return true
      },
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      localized: true,
      admin: {
        condition: (_, siblingData) => siblingData?.routeType === 'custom',
        description:
          'Без префикса локали. Например: test или services/fintech-ui',
      },
      hooks: {
        beforeValidate: [
          ({ value }) => {
            if (typeof value !== 'string') return value
            return normalizeSlug(value)
          },
        ],
      },
      validate: (
        value: string | null | undefined,
        { siblingData }: { siblingData?: { routeType?: string | null } },
      ) => {
        if (siblingData?.routeType !== 'custom') return true

        const slug = typeof value === 'string' ? normalizeSlug(value) : ''

        if (!slug) return 'slug is required for custom pages'
        if (slug === 'en' || slug === 'ar') {
          return 'slug must not equal locale prefix'
        }
        if (slug.includes('//')) {
          return 'slug must not contain empty segments'
        }

        return true
      },
    },
    {
      name: 'internalName',
      label: 'Внутреннее название',
      type: 'text',
      required: true,
      admin: {
        description: 'Человекочитаемое название страницы для редакторов.',
      },
    },
    {
      name: 'metaTitle',
      label: 'Meta title',
      type: 'text',
      localized: true,
    },
    {
      name: 'metaDescription',
      label: 'Meta description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'layout',
      label: 'Макет страницы',
      type: 'blocks',
      localized: true,
      required: true,
      blocks: [
        HeroBlock,
        ValueHomeBlock,
        VideoWalkthroughHomeBlock,
        DeliverablesHomeBlock,
        WhyHomeBlock,
        AudienceHomeBlock,
        ConceptsHomeBlock,
        MethodHomeBlock,
        PricingHomeBlock,
        ProposalHomeBlock,
        SamplePreviewHomeBlock,
        TrustHomeBlock,
        FaqHomeBlock,
        FinalCtaHomeBlock,
        HeroSolutionsBlock,
        PositioningIntroSolutionsBlock,
        GridSolutionsBlock,
        DetailsSolutionsBlock,
        ClientArtifactsSolutionsBlock,
        AudienceSolutionsBlock,
        WhySolutionsBlock,
        ConnectedCtaSolutionsBlock,
        FaqSolutionsBlock,
        HeroStartupsBlock,
        ValueStartupsBlock,
        DeliverablesStartupsBlock,
        SituationsStartupsBlock,
        ArtifactsStartupsBlock,
        ProcessStartupsBlock,
        EfficiencyStartupsBlock,
        ConceptsStartupsBlock,
        CTAStartupsBlock,
        FAQStartupsBlock,
        HeroAgenciesBlock,
        PartnersClarificationAgenciesBlock,
        AudienceAgenciesBlock,
        ValueAgenciesBlock,
        ProjectsAgenciesBlock,
        ProcessAgenciesBlock,
        ArtifactsAgenciesBlock,
        WhyAgenciesBlock,
        ConceptsAgenciesBlock,
        CTAAgenciesBlock,
        FAQAgenciesBlock,
        HeroPricingBlock,
        PositioningBlockPricingBlock,
        PackageCardsPricingBlock,
        ChoosingGuidePricingBlock,
        DeliverablesPreviewPricingBlock,
        PriceExplanationPricingBlock,
        NoCallCtaPricingBlock,
        FaqPricingBlock,
        FinalCtaPricingBlock,
        HeroMethodBlock,
        StepsMethodBlock,
        DeliverablesMethodBlock,
        CTAMethodBlock,
        HeroProposalBlock,
        TrustProposalBlock,
        FaqProposalBlock,
        ProposalFlowProposalBlock,
        FinalSupportProposalBlock,
        HeroConceptsBlock,
        IntroConceptsBlock,
        NavConceptsBlock,
        ConceptSectionConceptBlock,
        WhyConceptsBlock,
        CtaConceptsBlock,
      ],
    },
  ],
}