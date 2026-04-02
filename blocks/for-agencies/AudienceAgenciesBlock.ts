import type { Block } from 'payload'

export const AudienceAgenciesBlock: Block = {
  slug: 'audienceAgencies',
  labels: {
    singular: 'Audience Agencies',
    plural: 'Audience Agencies blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Целевая аудитория',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Кому подходит этот формат',
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
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}