import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const DetailsSolutionsBlock: Block = {
  slug: 'detailsSolution',
  labels: {
    singular: 'Details Solution',
    plural: 'Details Solution blocks',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'whenRelevantLabel',
          type: 'text',
          required: true,
          defaultValue: 'Когда актуально',
        },
        {
          name: 'whatWeClarifyLabel',
          type: 'text',
          required: true,
          defaultValue: 'Что помогаем прояснить',
        },
        {
          name: 'whatClientReceivesLabel',
          type: 'text',
          required: true,
          defaultValue: 'Что получает клиент',
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 6,
      maxRows: 6,
      fields: [
        {
          name: 'anchorId',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'intro',
          type: 'textarea',
          required: true,
        },
        {
          name: 'whenRelevant',
          type: 'array',
          required: true,
          minRows: 3,
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'whatWeClarify',
          type: 'array',
          required: true,
          minRows: 3,
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'whatClientReceives',
          type: 'array',
          required: true,
          minRows: 3,
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'primaryButtonLabel',
              type: 'text',
              required: true,
              defaultValue: 'Получить предложение',
            },
            {
              name: 'primaryPageKey',
              type: 'select',
              required: true,
              options: PAGE_KEY_OPTIONS,
              defaultValue: 'get-proposal',
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'secondaryButtonLabel',
              type: 'text',
            },
            {
              name: 'secondaryPageKey',
              type: 'select',
              options: PAGE_KEY_OPTIONS,
            },
          ],
        },
      ],
    },
  ],
}