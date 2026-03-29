import type { Block } from 'payload'

export const FAQStartupsBlock: Block = {
  slug: 'faqStartups',
  labels: {
    singular: 'FAQ Startups',
    plural: 'FAQ Startups',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'FAQ',
    },
    {
      name: 'title',
      type: 'textarea',
      localized: true,
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
          localized: true,
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          localized: true,
          required: true,
        },
      ],
    },
  ],
}