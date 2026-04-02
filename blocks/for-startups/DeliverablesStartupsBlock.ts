import type { Block } from 'payload'

export const DeliverablesStartupsBlock: Block = {
  slug: 'deliverablesStartups',
  labels: {
    singular: 'Deliverables Startups',
    plural: 'Deliverables Startups blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Решения',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'С чем мы помогаем startup-командам',
    },
    {
      name: 'layoutVariant',
      type: 'select',
      required: true,
      defaultValue: 'detailedCards',
      options: [
        { label: 'Detailed Cards', value: 'detailedCards' },
        { label: 'Simple Cards', value: 'simpleCards' },
      ],
    },
    {
      name: 'whenRelevantLabel',
      type: 'text',
      defaultValue: 'Когда актуально',
      admin: {
        condition: (_, siblingData) => siblingData?.layoutVariant !== 'simpleCards',
      },
    },
    {
      name: 'resultLabel',
      type: 'text',
      defaultValue: 'Результат',
      admin: {
        condition: (_, siblingData) => siblingData?.layoutVariant !== 'simpleCards',
      },
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 5,
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
        {
          name: 'whenRelevant',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.layoutVariant !== 'simpleCards',
          },
        },
        {
          name: 'result',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.layoutVariant !== 'simpleCards',
          },
        },
      ],
    },
  ],
}