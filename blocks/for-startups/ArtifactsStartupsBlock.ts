import type { Block } from 'payload'

export const ArtifactsStartupsBlock: Block = {
  slug: 'artifactsStartups',
  labels: {
    singular: 'Artifacts Startups',
    plural: 'Artifacts Startups',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Результат',
    },
    {
      name: 'title',
      type: 'textarea',
      localized: true,
      required: true,
      defaultValue: 'Что получает founder в результате',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 6,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'FileText', value: 'fileText' },
            { label: 'GitBranch', value: 'gitBranch' },
            { label: 'Layout', value: 'layout' },
            { label: 'Play', value: 'play' },
            { label: 'Palette', value: 'palette' },
            { label: 'Package', value: 'package' },
          ],
        },
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'support',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
    },
  ],
}