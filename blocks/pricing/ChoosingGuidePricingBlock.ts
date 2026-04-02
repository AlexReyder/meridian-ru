import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const ChoosingGuidePricingBlock: Block = {
  slug: 'choosingGuidePricing',
  labels: {
    singular: 'Choosing Guide Pricing',
    plural: 'Choosing Guide Pricing blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Рекомендации',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Как понять, какой формат подходит вам',
    },
    {
      name: 'situationLabel',
      type: 'text',
      required: true,
      defaultValue: 'Ситуация',
    },
    {
      name: 'solutionLabel',
      type: 'text',
      required: true,
      defaultValue: 'Решение',
    },
    {
      name: 'recommendedLabel',
      type: 'text',
      required: true,
      defaultValue: 'Рекомендуем',
    },
    {
      name: 'buttonLabel',
      type: 'text',
      required: true,
      defaultValue: 'Выбрать',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'condition',
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
          name: 'package',
          type: 'text',
          required: true,
        },
        {
          name: 'packageKey',
          type: 'select',
          dbName: 'cgp_pkg_key',
          required: true,
          options: [
            { label: 'Framing', value: 'framing' },
            { label: 'Prototype', value: 'prototype' },
            { label: 'Partner', value: 'partner' },
          ],
          defaultValue: 'framing',
        },
        {
          name: 'pageKey',
          type: 'select',
          dbName: 'cgp_page_key',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'get-proposal',
        },
      ],
    },
  ],
}