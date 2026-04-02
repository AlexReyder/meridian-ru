import type { Block } from 'payload'

export const PartnersClarificationAgenciesBlock: Block = {
  slug: 'partnersClarificationAgencies',
  labels: {
    singular: 'Partners Clarification Agencies',
    plural: 'Partners Clarification Agencies blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Не просто подрядчик по дизайну, а внешний product / interface partner',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'pillars',
      type: 'array',
      required: true,
      minRows: 1,
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