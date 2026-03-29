import type { Block } from 'payload'

export const FaqHomeBlock: Block = {
  slug: 'faqHome',
  labels: {
    singular: 'FAQ Home',
    plural: 'FAQ Home blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'FAQ',
    },
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