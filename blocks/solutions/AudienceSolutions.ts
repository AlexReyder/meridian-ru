import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const AudienceSolutionsBlock: Block = {
  slug: 'audienceSolutions',
  labels: {
    singular: 'Audience Solutions',
    plural: 'Audience Solutions blocks',
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
      defaultValue: 'Кому подходит этот подход',
    },
    {
      name: 'challengeLabel',
      type: 'text',
      required: true,
      defaultValue: 'Типичная задача',
    },
    {
      name: 'resultLabel',
      type: 'text',
      required: true,
      defaultValue: 'Что становится проще',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'challenge',
          type: 'textarea',
          required: true,
        },
        {
          name: 'result',
          type: 'textarea',
          required: true,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'ctaLabel',
              type: 'text',
              required: true,
            },
            {
              name: 'ctaPageKey',
              type: 'select',
              required: true,
              options: PAGE_KEY_OPTIONS,
            },
          ],
        },
      ],
    },
  ],
}