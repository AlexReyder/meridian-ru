import type { Block } from 'payload'

export const ArtifactsAgenciesBlock: Block = {
  slug: 'artifactsAgencies',
  labels: {
    singular: 'Artifacts Agencies',
    plural: 'Artifacts Agencies blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Deliverables',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Что получает партнёрская команда',
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
          required: true,
          defaultValue: 'fileText',
          options: [
            {
              label: 'FileText',
              value: 'fileText',
            },
            {
              label: 'GitBranch',
              value: 'gitBranch',
            },
            {
              label: 'Map',
              value: 'map',
            },
            {
              label: 'LayoutGrid',
              value: 'layoutGrid',
            },
            {
              label: 'Smartphone',
              value: 'smartphone',
            },
            {
              label: 'MousePointer',
              value: 'mousePointer',
            },
            {
              label: 'Palette',
              value: 'palette',
            },
            {
              label: 'Send',
              value: 'send',
            },
            {
              label: 'FileCheck',
              value: 'fileCheck',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'support',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}