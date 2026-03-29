import type { Block } from 'payload'

export const ProcessAgenciesBlock: Block = {
  slug: 'processAgencies',
  labels: {
    singular: 'Process Agencies',
    plural: 'Process Agencies blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Process',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Как обычно устроена работа с партнёрами',
    },
    {
      name: 'layoutVariant',
      type: 'select',
      required: true,
      defaultValue: 'connected',
      options: [
        {
          label: 'Connected',
          value: 'connected',
        },
        {
          label: 'Compact',
          value: 'compact',
        },
      ],
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
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
      name: 'markers',
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