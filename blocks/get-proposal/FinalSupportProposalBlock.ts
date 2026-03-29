import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '@/lib/routes'

export const FinalSupportProposalBlock: Block = {
  slug: 'finalSupportProposal',
  labels: {
    singular: 'Final Support Proposal',
    plural: 'Final Support Proposal blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'textarea',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'uploadButtonLabel',
          type: 'text',
          required: true,
        },
        {
          name: 'pricingButtonLabel',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'pricingPageKey',
      type: 'select',
      required: true,
      options: PAGE_KEY_OPTIONS,
      defaultValue: 'pricing',
    },
  ],
}