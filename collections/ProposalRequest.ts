import type { CollectionConfig } from 'payload'

export const ProposalRequests: CollectionConfig = {
  slug: 'proposal-requests',
   labels: {
    singular: 'Заявка',
    plural: 'Заявки',
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  admin: {
    defaultColumns: ['mode', 'locale', 'name', 'email', 'createdAt'],
  },
  fields: [
    {
      name: 'mode',
      type: 'select',
      required: true,
      options: [
        { label: 'Wizard', value: 'wizard' },
        { label: 'Upload', value: 'upload' },
      ],
    },
    {
      name: 'locale',
      type: 'select',
      required: true,
      options: [
        { label: 'RU', value: 'ru' },
        { label: 'EN', value: 'en' },
        { label: 'AR', value: 'ar' },
      ],
    },
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'role',
      type: 'text',
    },
    {
      name: 'region',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'payload',
      type: 'json',
      required: true,
    },
    {
      name: 'links',
      type: 'array',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'files',
      type: 'relationship',
      relationTo: 'proposal-files',
      hasMany: true,
    },
  ],
}