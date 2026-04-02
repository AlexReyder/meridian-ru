import type { Block } from 'payload'

export const HeroProposalBlock: Block = {
  slug: 'heroProposal',
  labels: {
    singular: 'Hero Proposal',
    plural: 'Hero Proposal blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Получить предложение',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Закажите дизайн сайта, системы или мобильного приложения',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Расскажите, что вы планируете — сайт, корпоративный портал, B2B-систему, dashboard или mobile app. Мы предложим формат работы, сроки и стоимость без обязательного стартового звонка.',
    },
    {
      name: 'supportLine',
      type: 'text',
      defaultValue: '',
    },
    {
      name: 'reassuranceItems',
      type: 'array',
      required: true,
      minRows: 1,
      defaultValue: [
        { icon: 'clock', text: 'Brief на 7 минут' },
        { icon: 'fileText', text: 'Без обязательного звонка' },
        { icon: 'shield', text: 'NDA-friendly' },
        { icon: 'users', text: 'Сайты, системы, приложения' },
      ],
      fields: [
        {
          name: 'icon',
          type: 'select',
          dbName: 'hppr_icon',
          required: true,
          options: [
            { label: 'Clock', value: 'clock' },
            { label: 'FileText', value: 'fileText' },
            { label: 'Shield', value: 'shield' },
            { label: 'Users', value: 'users' },
          ],
          defaultValue: 'clock',
        },
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'brandParagraph',
      type: 'textarea',
      required: true,
      defaultValue:
        'Atelier Meridian помогает founders, B2B-командам, агентствам и integrators превращать идеи, сложные процессы и product requirements в понятную структуру, prototype и материалы для передачи в разработку.',
    },
  ],
}