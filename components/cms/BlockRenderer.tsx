import type { Locale } from '@/lib/routes'

import { HeroBlockComponent } from '@/components/cms/blocks/home/HeroBlock'
import { ValueHomeBlockComponent } from './blocks/home/ValueHomeBlock'
import { VideoWalkthroughHomeBlockComponent } from './blocks/home/VideoWalkthroughHomeBlock'
import { DeliverablesHomeBlockComponent } from './blocks/home/DeliverablesHomeBlock'
import { WhyHomeBlockComponent } from './blocks/home/WhyHomeBlock'
import { AudienceHomeBlockComponent } from './blocks/home/AudienceHomeBlock'
import { ConceptsHomeBlockComponent } from './blocks/home/ConceptsHomeBlock'
import { MethodHomeBlockComponent } from './blocks/home/MethodHomeBlock'
import { ProposalHomeBlockComponent } from './blocks/home/ProposalHomeBlock'
import { SamplePreviewHomeBlockComponent } from './blocks/home/SamplePreviewHomeBlock'
import { TrustHomeBlockComponent } from './blocks/home/TrustHomeBlock'
import { FaqHomeBlockComponent } from './blocks/home/FaqHomeBlock'
import { PricingHomeBlockComponent } from './blocks/home/PricingHomeBlock'
import { FinalCtaHomeBlockComponent } from './blocks/home/FinalCtaHomeBlock'
import { HeroSolutionsBlockComponent } from './blocks/solutions/HeroSolutionsBlock'
import { PositioningIntroSolutionsBlockComponent } from './blocks/solutions/PositioningIntroSolutionsBlock'
import { GridSolutionsBlockComponent } from './blocks/solutions/GridSolutionsBlock'
import { DetailsSolutionsBlockComponent } from './blocks/solutions/DetailsSolutionsBlock'
import { ClientArtifactsSolutionsBlockComponent } from './blocks/solutions/ClientArtifactsSolutions'
import { AudienceSolutionsBlockComponent } from './blocks/solutions/AudienceSolutions'
import { WhySolutionsBlockComponent } from './blocks/solutions/WhySolutionsBlock'
import { ConnectedCtaSolutionsBlockComponent } from './blocks/solutions/ConnectedCtaSolutionsBlock'
import { FaqSolutionsBlockComponent } from './blocks/solutions/FaqSolutionsBlock'
import { HeroStartupsBlockComponent } from './blocks/for-startups/HeroStartupsBlock'
import { ValueStartupsBlockComponent } from './blocks/for-startups/ValueStartupsBlock'
import { DeliverablesStartupsBlockComponent } from './blocks/for-startups/DeliverablesStartupsBlock'
import { SituationsStartupsBlockComponent } from './blocks/for-startups/SituationsStartupsBlock'
import { ArtifactsStartupsBlockComponent } from './blocks/for-startups/ArtifactsStartupsBlock'
import { ProcessStartupsBlockComponent } from './blocks/for-startups/ProcessStartupsBlock'
import { EfficiencyStartupsBlockComponent } from './blocks/for-startups/EfficiencyStartupsBlock'
import { ConceptsStartupsBlockComponent } from './blocks/for-startups/ConceptsStartupsBlock'
import { CTAStartupsBlockComponent } from './blocks/for-startups/CTAStartupsBlock'
import { FAQStartupsBlockComponent } from './blocks/for-startups/FAQStartupsBlock'
import { HeroAgenciesBlockComponent } from './blocks/for-agencies/HeroAgenciesBlock'
import { PartnersClarificationAgenciesBlockComponent } from './blocks/for-agencies/PartnersClarificationAgenciesBlock'
import { AudienceAgenciesBlockComponent } from './blocks/for-agencies/AudienceAgenciesBlock'
import { ValueAgenciesBlockComponent } from './blocks/for-agencies/ValueAgenciesBlock'
import { ProjectsAgenciesBlockComponent } from './blocks/for-agencies/ProjectsAgenciesBlock'
import { ProcessAgenciesBlockComponent } from './blocks/for-agencies/ProcessAgenciesBlock'
import { ArtifactsAgenciesBlockComponent } from './blocks/for-agencies/ArtifactsAgenciesBlock'
import { WhyAgenciesBlockComponent } from './blocks/for-agencies/WhyAgenciesBlock'
import { ConceptsAgenciesBlockComponent } from './blocks/for-agencies/ConceptsAgenciesBlock'
import { CTAAgenciesBlockComponent } from './blocks/for-agencies/CTAAgenciesBlock'
import { FAQAgenciesBlockComponent } from './blocks/for-agencies/FAQAgenciesBlock'
import { HeroPricingBlockComponent } from './blocks/pricing/HeroPricingBlock'
import { PositioningBlockPricingBlockComponent } from './blocks/pricing/PositioningBlockPricingBlock'
import { PackageCardsPricingBlockComponent } from './blocks/pricing/PackageCardsPricingBlock'
import { ChoosingGuidePricingBlockComponent } from './blocks/pricing/ChoosingGuidePricingBlock'
import { DeliverablesPreviewPricingBlockComponent } from './blocks/pricing/DeliverablesPreviewPricingBlock'
import { PriceExplanationPricingBlockComponent } from './blocks/pricing/PriceExplanationPricingBlock'
import { NoCallCtaPricingBlockComponent } from './blocks/pricing/NoCallCtaPricingBlock'
import { FaqPricingBlockComponent } from './blocks/pricing/FaqPricingBlock'
import { FinalCtaPricingBlockComponent } from './blocks/pricing/FinalCtaPricingBlock'
import { HeroMethodBlockComponent } from './blocks/method/HeroMethodBlock'
import { StepsMethodBlockComponent } from './blocks/method/StepsMethodBlock'
import { DeliverablesMethodBlockComponent } from './blocks/method/DeliverablesMethodBlock'
import { CTAMethodBlockComponent } from './blocks/method/CTAMethodBlock'
import { HeroProposalBlockComponent } from './blocks/get-proposal/HeroProposalBlock'
import { TrustProposalBlockComponent } from './blocks/get-proposal/TrustProposalBlock'
import { FaqProposalBlockComponent } from './blocks/get-proposal/FaqProposalBlock'
import { ProposalFlowProposalBlockComponent } from './blocks/get-proposal/ProposalFlowProposalBlock'
import { HeroConceptsBlockComponent } from './blocks/concepts/HeroConceptsBlock'
import { IntroConceptsBlockComponent } from './blocks/concepts/IntroConceptsBlock'
import { type NavConceptItem, NavConceptsBlockComponent } from './blocks/concepts/NavConceptsBlock'
import { ConceptSectionConceptBlockComponent } from './blocks/concepts/ConceptSectionConceptBlock'
import { WhyConceptsBlockComponent } from './blocks/concepts/WhyConceptBlock'
import { CtaConceptsBlockComponent } from './blocks/concepts/CtaConceptBlock'
import { FinalSupportProposalBlockComponent } from './blocks/get-proposal/FinalSupportProposalBlock'

type Props = {
  blocks: Array<Record<string, unknown>>
  locale: Locale
}

export function BlockRenderer({ blocks, locale }: Props) {
  const conceptSections= blocks
  .filter((item) => item?.blockType === 'conceptSectionConcept')
  .map((item, index) => ({
    anchorId: item.anchorId || `concept-${index + 1}`,
    navLabel: item.navLabel || item.title || `Concept ${index + 1}`,
  })) as NavConceptItem
  return (
    <>
      {blocks.map((block, index) => {
        const key = `${String(block.blockType)}-${index}`

        switch (block.blockType) {
          case 'hero':
            return <HeroBlockComponent key={key} block={block} locale={locale} />
          case 'valueHome':
            return <ValueHomeBlockComponent key={key} block={block} locale={locale} />
          case 'videoWalkthroughHome':
            return <VideoWalkthroughHomeBlockComponent key={key} block={block} locale={locale} />
          case 'deliverablesHome':
            return <DeliverablesHomeBlockComponent key={key} block={block} locale={locale} />
          case 'whyHome':
            return <WhyHomeBlockComponent key={key} block={block} locale={locale} />
          case 'audienceHome':
            return <AudienceHomeBlockComponent key={key} block={block} locale={locale} />
          case 'conceptsHome':
            return <ConceptsHomeBlockComponent key={key} block={block} locale={locale} />
          case 'methodHome':
            return <MethodHomeBlockComponent key={key} block={block} locale={locale} />
          case 'proposalHome':
            return <ProposalHomeBlockComponent key={key} block={block} locale={locale} />
          case 'samplePreviewHome':
            return <SamplePreviewHomeBlockComponent key={key} block={block} locale={locale} />
          case 'trustHome':
            return <TrustHomeBlockComponent key={key} block={block} locale={locale} />
          case 'faqHome':
            return <FaqHomeBlockComponent key={key} block={block} locale={locale} />
          case 'pricingHome':
            return <PricingHomeBlockComponent key={key} block={block} locale={locale} />
          case 'finalCtaHome':
            return <FinalCtaHomeBlockComponent key={key} block={block} locale={locale} />
            // solutions
          case 'heroSolutions':
            return <HeroSolutionsBlockComponent key={key} block={block} locale={locale} />
          case 'positioningIntroSolutions':
            return <PositioningIntroSolutionsBlockComponent key={key} block={block} locale={locale} />
        case 'gridSolutions':
            return <GridSolutionsBlockComponent key={key} block={block} locale={locale} />
        case 'detailsSolution':
          return <DetailsSolutionsBlockComponent key={key} block={block} locale={locale} />
        case 'clientArtifactsSolutions':
          return <ClientArtifactsSolutionsBlockComponent key={key} block={block} locale={locale} />
        case 'audienceSolutions':
          return <AudienceSolutionsBlockComponent key={key} block={block} locale={locale} />
        case 'whySolutions':
          return <WhySolutionsBlockComponent key={key} block={block} locale={locale} />
        case 'connectedCtaSolutions':
          return <ConnectedCtaSolutionsBlockComponent key={key} block={block} locale={locale} />
        case 'faqSolutions':
          return <FaqSolutionsBlockComponent key={key} block={block} locale={locale} />
          //for-startups
        case 'heroStartups':
          return <HeroStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'valueStartups':
          return <ValueStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'deliverablesStartups':
          return <DeliverablesStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'situationsStartups':
          return <SituationsStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'artifactsStartups':
          return <ArtifactsStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'processStartups':
          return <ProcessStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'efficiencyStartups':
          return <EfficiencyStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'conceptsStartups':
          return <ConceptsStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'ctaStartups':
          return <CTAStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'faqStartups':
          return <FAQStartupsBlockComponent key={key} block={block} locale={locale} />
          //for-agencies
        case 'heroAgencies':
          return <HeroAgenciesBlockComponent key={key} block={block} locale={locale} />
        case 'partnersClarificationAgencies':
          return <PartnersClarificationAgenciesBlockComponent key={key} block={block} locale={locale} />
        case 'audienceAgencies':
          return <AudienceAgenciesBlockComponent key={key} block={block} locale={locale} />
        case 'valueAgencies':
          return <ValueAgenciesBlockComponent key={key} block={block} locale={locale} />
        case 'projectsAgencies':
          return <ProjectsAgenciesBlockComponent key={key} block={block} locale={locale} />
        case 'artifactsAgencies':
          return <ArtifactsAgenciesBlockComponent key={key} block={block} locale={locale} />
        case 'whyAgencies':
          return <WhyAgenciesBlockComponent key={key} block={block} locale={locale} />
        case 'processAgencies':
          return <ProcessAgenciesBlockComponent key={key} block={block} locale={locale} />
        case 'conceptsAgencies':
          return <ConceptsAgenciesBlockComponent key={key} block={block} locale={locale} />
        case 'ctaAgencies':
          return <CTAAgenciesBlockComponent key={key} block={block} locale={locale} />
        case 'faqAgencies':
          return <FAQAgenciesBlockComponent key={key} block={block} locale={locale} />
          //pricing
        case 'heroPricing':
          return <HeroPricingBlockComponent key={key} block={block} locale={locale} />
        case 'positioningBlockPricing':
          return <PositioningBlockPricingBlockComponent key={key} block={block} locale={locale} />
        case 'packageCardsPricing':
          return <PackageCardsPricingBlockComponent key={key} block={block} locale={locale} />
        case 'choosingGuidePricing':
          return <ChoosingGuidePricingBlockComponent key={key} block={block} locale={locale} />
        case 'deliverablesPreviewPricing':
          return <DeliverablesPreviewPricingBlockComponent key={key} block={block} locale={locale} />
        case 'priceExplanationPricing':
          return <PriceExplanationPricingBlockComponent key={key} block={block} locale={locale} />
        case 'noCallCtaPricing':
          //TSerror
          return <NoCallCtaPricingBlockComponent key={key} block={block} locale={locale} />
        case 'faqPricing':
          return <FaqPricingBlockComponent key={key} block={block} locale={locale} />
        case 'finalCtaPricing':
          return <FinalCtaPricingBlockComponent key={key} block={block} locale={locale} />
          //method
        case 'heroMethod':
          return <HeroMethodBlockComponent key={key} block={block} locale={locale} />
        case 'stepsMethod':
          return <StepsMethodBlockComponent key={key} block={block} locale={locale} />
        case 'deliverablesMethod':
          return <DeliverablesMethodBlockComponent key={key} block={block} locale={locale} />
        case 'ctaMethod':
          return <CTAMethodBlockComponent key={key} block={block} locale={locale} />
          //proposal
        case 'heroProposal':
          return <HeroProposalBlockComponent key={key} block={block} locale={locale} />
        case 'trustProposal':
          return <TrustProposalBlockComponent key={key} block={block} locale={locale} />
        case 'faqProposal':
          return <FaqProposalBlockComponent key={key} block={block} locale={locale} />
        case 'proposalFlowProposal':
          return <ProposalFlowProposalBlockComponent key={key} block={block} locale={locale} />
          //concepts
        case 'heroConcepts':
          return <HeroConceptsBlockComponent key={key} block={block} locale={locale} />
        case 'introConcepts':
          return <IntroConceptsBlockComponent key={key} block={block} locale={locale} />   
        case 'navConcepts':
          return (
            <NavConceptsBlockComponent
              key={key}
              block={block}
              locale={locale}
              // items={conceptSections}
            />
          )
        case 'conceptSectionConcept':
          return (
            <ConceptSectionConceptBlockComponent
              key={key}
              block={block}
              locale={locale}
              // index={index}
            />
          )       
      case 'whyConcepts':
        return <WhyConceptsBlockComponent key={key} block={block} locale={locale} />
      case 'ctaConcepts':
        return <CtaConceptsBlockComponent key={key} block={block} locale={locale} />     
      case 'finalSupportProposal':
        return (
          <FinalSupportProposalBlockComponent
            key={key}
            block={block}
            locale={locale}
          />
        )     
          default:
            return null
        }
      })}
    </>
  )
}
