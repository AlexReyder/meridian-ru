import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const AudienceHomeBlock: Block = {
  slug: 'audienceHome',
  labels: {
    singular: 'Audience Home',
    plural: 'Audience Home blocks',
  },
  fields: [
    {
      name: 'sectionId',
      type: 'text',
      defaultValue: 'startups',
    },
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Для кого',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Кому мы помогаем',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'problemLabel',
          type: 'text',
          required: true,
          defaultValue: 'Проблема',
        },
        {
          name: 'solutionLabel',
          type: 'text',
          required: true,
          defaultValue: 'Что упрощаем',
        },
        {
          name: 'resultLabel',
          type: 'text',
          required: true,
          defaultValue: 'Результат',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'ctaLabel',
          type: 'text',
          required: true,
          defaultValue: 'Получить предложение',
        },
        {
          name: 'ctaPageKey',
          type: 'select',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'get-proposal',
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'problem',
          type: 'textarea',
          required: true,
        },
        {
          name: 'solution',
          type: 'textarea',
          required: true,
        },
        {
          name: 'result',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}