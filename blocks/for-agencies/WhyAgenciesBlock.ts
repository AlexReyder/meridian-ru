import type { Block } from 'payload'

export const WhyAgenciesBlock: Block = {
  slug: 'whyAgencies',
  labels: {
    singular: 'Why Agencies',
    plural: 'Why Agencies blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Why',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Почему этот формат удобен партнёрам',
    },
    {
      name: 'layoutVariant',
      type: 'select',
      required: true,
      defaultValue: 'detailed',
      options: [
        {
          label: 'Detailed',
          value: 'detailed',
        },
        {
          label: 'Compact',
          value: 'compact',
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}