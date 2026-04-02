import type { Block } from 'payload'

export const DeliverablesMethodBlock: Block = {
  slug: 'deliverablesMethod',
  labels: {
    singular: 'Deliverables Method',
    plural: 'Deliverables Method blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Результаты',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Что вы получаете в результате работы',
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
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}