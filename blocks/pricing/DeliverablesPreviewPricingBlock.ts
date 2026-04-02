import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const DeliverablesPreviewPricingBlock: Block = {
  slug: 'deliverablesPreviewPricing',
  labels: {
    singular: 'Deliverables Preview Pricing',
    plural: 'Deliverables Preview Pricing blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Состав работ',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Что входит в каждый формат работы',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'layoutVariant',
      type: 'select',
      dbName: 'dpp_layout_v',
      required: true,
      defaultValue: 'visuals',
      options: [
        {
          label: 'Visuals',
          value: 'visuals',
        },
        {
          label: 'Simple',
          value: 'simple',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'topLinkLabel',
          type: 'text',
        },
        {
          name: 'topLinkPageKey',
          type: 'select',
          dbName: 'dpp_top_pk',
          options: PAGE_KEY_OPTIONS,
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
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
        },
        {
          name: 'visual',
          type: 'select',
          dbName: 'dpp_vis',
          options: [
            {
              label: 'Structure',
              value: 'structure',
            },
            {
              label: 'Scenarios',
              value: 'scenarios',
            },
            {
              label: 'Screen Map',
              value: 'screen-map',
            },
            {
              label: 'Prototype',
              value: 'prototype',
            },
            {
              label: 'Design System',
              value: 'design-system',
            },
            {
              label: 'Dev Materials',
              value: 'dev-materials',
            },
          ],
        },
      ],
    },
    {
      name: 'footerNote',
      type: 'text',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'footerLinkLabel',
          type: 'text',
        },
        {
          name: 'footerLinkPageKey',
          type: 'select',
          dbName: 'dpp_ftr_pk',
          options: PAGE_KEY_OPTIONS,
        },
      ],
    },
  ],
}