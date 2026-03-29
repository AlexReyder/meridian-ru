import type { CollectionConfig } from 'payload'

export const ProposalFiles: CollectionConfig = {
  slug: 'proposal-files',
   labels: {
    singular: 'Файл заявки',
    plural: 'Файлы заявок',
  },
  access: {
    read: () => false,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  upload: {
    staticDir: 'proposal-files',
    mimeTypes: [
      'image/*',
      'application/pdf',
      'application/zip',
      'application/x-zip-compressed',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'application/x-cfb',
    ],
  },
  admin: {
    defaultColumns: ['filename', 'mimeType', 'filesize', 'updatedAt'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
    {
      name: 'sourceType',
      type: 'select',
      required: true,
      defaultValue: 'proposal-upload',
      options: [
        { label: 'Proposal Upload', value: 'proposal-upload' },
      ],
    },
    {
      name: 'request',
      type: 'relationship',
      relationTo: 'proposal-requests',
      required: false,
    },
  ],
}