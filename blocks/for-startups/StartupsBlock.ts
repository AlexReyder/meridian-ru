import type { Block } from 'payload'

export const EfficiencyStartupsBlock: Block = {
  slug: 'efficiencyStartups',
  labels: {
    singular: 'Efficiency Startups',
    plural: 'Efficiency Startups blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Подход',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Почему это удобнее, чем длинный agency-процесс',
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
          name: 'icon',
          type: 'select',
          required: true,
          defaultValue: 'zap',
          options: [
            { label: 'Zap', value: 'zap' },
            { label: 'RefreshCw', value: 'refreshCw' },
            { label: 'Users', value: 'users' },
            { label: 'Target', value: 'target' },
          ],
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
  ],
}