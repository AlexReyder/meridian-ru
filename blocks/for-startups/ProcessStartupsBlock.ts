import type { Block } from 'payload'

export const ProcessStartupsBlock: Block = {
  slug: 'processStartups',
  labels: {
    singular: 'Process Startups',
    plural: 'Process Startups',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Процесс',
    },
    {
      name: 'title',
      type: 'textarea',
      localized: true,
      required: true,
      defaultValue: 'Как это обычно происходит',
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      minRows: 5,
      maxRows: 5,
      fields: [
        {
          name: 'number',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          required: true,
        },
      ],
    },
  ],
}