import type { Block } from 'payload'

export const TrustProposalBlock: Block = {
  slug: 'trustProposal',
  labels: {
    singular: 'Trust Proposal',
    plural: 'Trust Proposal blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Структурный intake для сложных digital-проектов',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'select',
          dbName: 'tp_icon',
          required: true,
          options: [
            { label: 'Layers', value: 'layers' },
            { label: 'Users', value: 'users' },
            { label: 'Building2', value: 'building2' },
            { label: 'ArrowRightLeft', value: 'arrowRightLeft' },
          ],
          defaultValue: 'layers',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'supportPoints',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}