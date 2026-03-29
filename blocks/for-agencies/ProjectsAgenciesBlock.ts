import type { Block } from 'payload'

export const ProjectsAgenciesBlock: Block = {
  slug: 'projectsAgencies',
  labels: {
    singular: 'Projects Agencies',
    plural: 'Projects Agencies blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Типы проектов',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'С какими проектами подключаемся',
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
      type: 'row',
      fields: [
        {
          name: 'useCaseLabel',
          type: 'text',
          defaultValue: 'Типичный кейс',
        },
        {
          name: 'outputLabel',
          type: 'text',
          defaultValue: 'Output',
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
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'explanation',
          type: 'textarea',
          required: true,
        },
        {
          name: 'useCase',
          type: 'textarea',
          required: true,
        },
        {
          name: 'output',
          type: 'textarea',
        },
      ],
    },
  ],
}