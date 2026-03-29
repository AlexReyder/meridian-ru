import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const ProposalHomeBlock: Block = {
  slug: 'proposalHome',
  labels: {
    singular: 'Proposal Home',
    plural: 'Proposal Home blocks',
  },
  fields: [
    {
      name: 'sectionId',
      type: 'text',
      defaultValue: 'proposal',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Закажите дизайн сайта, системы или приложения',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          defaultValue: 'fileText',
          options: [
            { label: 'File Text', value: 'fileText' },
            { label: 'Mail', value: 'mail' },
            { label: 'Check Circle', value: 'checkCircle' },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
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
      name: 'footerNote',
      type: 'text',
      required: true,
    },
  ],
}