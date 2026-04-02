import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const ConceptsAgenciesBlock: Block = {
  slug: 'conceptsAgencies',
  labels: {
    singular: 'Concepts Agencies',
    plural: 'Concepts Agencies blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Cases',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Как это выглядит в работе',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'layoutVariant',
      type: 'select',
      required: true,
      defaultValue: 'grid',
      options: [
        {
          label: 'Grid',
          value: 'grid',
        },
        {
          label: 'Carousel',
          value: 'carousel',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'challengeLabel',
          type: 'text',
          required: true,
          defaultValue: 'Challenge',
        },
        {
          name: 'clarifiedLabel',
          type: 'text',
          required: true,
          defaultValue: 'Clarified',
        },
        {
          name: 'preparedLabel',
          type: 'text',
          required: true,
          defaultValue: 'Prepared',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'viewAllLabel',
          type: 'text',
          required: true,
          defaultValue: 'Посмотреть концепты',
        },
        {
          name: 'viewAllPageKey',
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
      minRows: 1,
      fields: [
        {
          name: 'badge',
          type: 'text',
          required: true,
        },
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
        {
          type: 'row',
          fields: [
            {
              name: 'imageSource',
              label: 'Источник изображения',
              type: 'radio',
              defaultValue: 'url',
              options: [
                { label: 'URL', value: 'url' },
                { label: 'Загрузить файл', value: 'upload' },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'imageAlt',
              label: 'Alt изображения',
              type: 'text',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'imageUrl',
          label: 'URL изображения',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.imageSource === 'url',
          },
        },
        {
          name: 'imageMedia',
          label: 'Выберите файл',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.imageSource === 'upload',
          },
        },
      ],
    },
  ],
}