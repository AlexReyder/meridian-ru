import type { Block } from 'payload'

export const WhyHomeBlock: Block = {
  slug: 'whyHome',
  labels: {
    singular: 'Why Home',
    plural: 'Why Home blocks',
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
      defaultValue: 'Почему Atelier Meridian',
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