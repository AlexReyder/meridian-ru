import type { Block } from 'payload'

export const ValueAgenciesBlock: Block = {
  slug: 'valueAgencies',
  labels: {
    singular: 'Value Agencies',
    plural: 'Value Agencies blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Value',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Где мы усиливаем партнёрские проекты',
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
          name: 'icon',
          type: 'select',
          defaultValue: 'presentation',
          options: [
            {
              label: 'Presentation',
              value: 'presentation',
            },
            {
              label: 'Palette',
              value: 'palette',
            },
            {
              label: 'Layout',
              value: 'layout',
            },
            {
              label: 'Send',
              value: 'send',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'problem',
          type: 'textarea',
        },
        {
          name: 'whenRelevant',
          type: 'textarea',
        },
        {
          name: 'whyHelpful',
          type: 'textarea',
        },
        {
          name: 'text',
          type: 'textarea',
        },
      ],
    },
  ],
}