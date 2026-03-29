import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const ConceptsStartupsBlock: Block = {
  slug: 'conceptsStartups',
  labels: {
    singular: 'Concepts Startups',
    plural: 'Concepts Startups blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Концепты',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Как это может выглядеть',
    },
    {
      name: 'conceptBadgeLabel',
      type: 'text',
      required: true,
      defaultValue: 'Концепт студии',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'challengeLabel',
          type: 'text',
          required: true,
          defaultValue: 'Задача',
        },
        {
          name: 'clarifiedLabel',
          type: 'text',
          required: true,
          defaultValue: 'Что прояснили',
        },
        {
          name: 'preparedLabel',
          type: 'text',
          required: true,
          defaultValue: 'Что подготовили',
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
          defaultValue: 'Посмотреть концепты',
        },
        {
          name: 'ctaPageKey',
          type: 'select',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'concepts',
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
          name: 'challenge',
          type: 'textarea',
          required: true,
        },
        {
          name: 'clarified',
          type: 'textarea',
          required: true,
        },
        {
          name: 'prepared',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}