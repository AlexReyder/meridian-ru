import type { Block } from 'payload'

export const FaqProposalBlock: Block = {
  slug: 'faqProposal',
  labels: {
    singular: 'FAQ Proposal',
    plural: 'FAQ Proposal blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Частые вопросы',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}