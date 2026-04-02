import type { Block } from 'payload'

export const WhyConceptsBlock: Block = {
  slug: 'whyConcepts',
  labels: {
    singular: 'Why Concepts',
    plural: 'Why Concepts',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Зачем это важно',
    },
    {
      name: 'title',
      type: 'textarea',
      localized: true,
      required: true,
      defaultValue: 'Зачем мы показываем студийные концепты',
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
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
          options: [
            { label: 'Search', value: 'search' },
            { label: 'Layers', value: 'layers' },
            { label: 'Monitor', value: 'monitor' },
            { label: 'FileText', value: 'fileText' },
          ],
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