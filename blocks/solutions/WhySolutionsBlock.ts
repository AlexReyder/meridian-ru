import type { Block } from 'payload'

export const WhySolutionsBlock: Block = {
  slug: 'whySolutions',
  labels: {
    singular: 'Why Solutions',
    plural: 'Why Solutions blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Почему мы',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Почему выбирают Atelier Meridian',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 4,
      maxRows: 4,
      fields: [
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
  ],
}