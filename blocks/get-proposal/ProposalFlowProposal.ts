import type { Block, Field } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

const copyField = (
  name: string,
  defaults: Array<{ key: string; value: string }>,
): Field => ({
  name,
  type: 'array',
  required: true,
  minRows: 1,
  defaultValue: defaults,
  fields: [
    {
      name: 'key',
      type: 'text',
      required: true,
      localized: false,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'value',
      type: 'textarea',
      required: true,
    },
  ],
})

const textOptionFields: Field[] = [
  {
    name: 'value',
    type: 'text',
    required: true,
  },
  {
    name: 'label',
    type: 'text',
    required: true,
  },
]

const textOptionWithDescriptionFields: Field[] = [
  {
    name: 'value',
    type: 'text',
    required: true,
  },
  {
    name: 'label',
    type: 'text',
    required: true,
  },
  {
    name: 'description',
    type: 'text',
  },
]

export const ProposalFlowProposalBlock: Block = {
  slug: 'proposalFlowProposal',
  labels: {
    singular: 'Proposal Flow Proposal',
    plural: 'Proposal Flow Proposal blocks',
  },
  fields: [
    copyField('introCopy', [
      { key: 'briefCardTitle', value: 'Заполнить brief проекта' },
      {
        key: 'briefCardDescription',
        value:
          'Подходит, если вы хотите получить рекомендацию по формату работы, ориентир по срокам и стартовую стоимость.',
      },
      { key: 'briefButtonLabel', value: 'Перейти к brief' },
      { key: 'uploadCardTitle', value: 'Загрузить материалы проекта' },
      {
        key: 'uploadCardDescription',
        value:
          'Подходит, если у вас уже есть notes, PRD, старые screens, документы, ссылки или draft-описание проекта.',
      },
      { key: 'uploadButtonLabel', value: 'Загрузить материалы' },
      { key: 'processEyebrow', value: 'Что происходит дальше' },
      { key: 'processTitle', value: 'Как мы разбираем ваш проект' },
      {
        key: 'processDescription',
        value:
          'После отправки brief или материалов мы структурируем задачу, определяем ограничения, собираем ключевые сценарии и готовим понятный следующий шаг по проекту.',
      },
    ]),

    {
      name: 'introProcessSteps',
      type: 'array',
      required: true,
      minRows: 4,
      fields: [
        {
          name: 'icon',
          type: 'select',
          dbName: 'pfp_ip_icon',
          required: true,
          options: [
            { label: 'Target', value: 'target' },
            { label: 'Users', value: 'users' },
            { label: 'Layers', value: 'layers' },
            { label: 'Arrow Up Right', value: 'arrowUpRight' },
            { label: 'Arrow Up Left', value: 'arrowUpLeft' },
          ],
          defaultValue: 'target',
        },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },

    copyField('wizardCopy', [
      { key: 'backToOptionsLabel', value: 'Назад к выбору' },
      { key: 'previousStepLabel', value: 'Предыдущий шаг' },
      { key: 'backLabel', value: 'Назад' },
      { key: 'cancelLabel', value: 'Отмена' },
      { key: 'stepCounterPrefix', value: 'Шаг' },
      { key: 'stepCounterConnector', value: 'из' },

      { key: 'projectTypeTitle', value: 'Что вы планируете делать?' },
      {
        key: 'projectTypeDescription',
        value: 'Выберите тип проекта, который лучше всего описывает вашу задачу',
      },

      { key: 'goalTitle', value: 'Какая у проекта главная задача сейчас?' },
      { key: 'goalDescription', value: 'Это поможет нам предложить подходящий формат работы' },

      { key: 'teamTitle', value: 'Как лучше описать вашу команду?' },
      {
        key: 'teamDescription',
        value: 'Это поможет адаптировать формат работы под ваш контекст',
      },

      { key: 'companyNameLabel', value: 'Название компании' },
      { key: 'companyNamePlaceholder', value: 'Acme Inc.' },
      { key: 'websiteLabel', value: 'Website' },
      { key: 'websitePlaceholder', value: 'https://company.com' },
      { key: 'teamSizeLabel', value: 'Размер команды' },
      { key: 'teamSizePlaceholder', value: '5–20 человек' },

      { key: 'complexityTitle', value: 'Насколько сложный продукт или система?' },
      { key: 'complexityDescription', value: 'Эти параметры помогут оценить объём работы' },
      { key: 'rolesCountLabel', value: 'Количество ролей' },
      { key: 'rolesCountPlaceholder', value: '2–3 роли' },
      { key: 'screenCountLabel', value: 'Примерное число экранов / модулей' },
      { key: 'screenCountPlaceholder', value: '10–20 экранов' },

      { key: 'materialsTitle', value: 'Какие материалы уже есть?' },
      { key: 'materialsDescription', value: 'Это поможет понять, с чего начать работу' },
      { key: 'wizardUploadLabel', value: 'Дополнительные файлы' },
      { key: 'wizardUploadHint', value: 'PDF, PNG, JPG, DOCX, ZIP — до 50 MB на файл' },

      { key: 'timelineTitle', value: 'Какие ожидания по срокам и бюджету?' },
      { key: 'timelineDescription', value: 'Это поможет подобрать оптимальный формат работы' },
      { key: 'timelineLabel', value: 'Ожидаемые сроки' },
      { key: 'budgetLabel', value: 'Ориентир по бюджету' },
      { key: 'notesLabel', value: 'Краткий комментарий' },
      { key: 'notesPlaceholder', value: 'Если есть дополнительные детали, добавьте их здесь...' },

      { key: 'contactTitle', value: 'Куда отправить предложение?' },
      {
        key: 'contactDescription',
        value: 'Заполните контактные данные для получения рекомендации',
      },
      { key: 'nameLabel', value: 'Имя *' },
      { key: 'namePlaceholder', value: 'Александр' },
      { key: 'emailLabel', value: 'Рабочий email *' },
      { key: 'emailPlaceholder', value: 'alex@company.com' },
      { key: 'companyLabel', value: 'Компания' },
      { key: 'companyPlaceholder', value: 'Acme Inc.' },
      { key: 'roleLabel', value: 'Роль' },
      { key: 'rolePlaceholder', value: 'Product Manager' },
      { key: 'regionLabel', value: 'Страна / регион' },
      { key: 'regionPlaceholder', value: 'UAE' },
      { key: 'phoneLabel', value: 'Telegram / WhatsApp / телефон (необязательно)' },
      { key: 'phonePlaceholder', value: '+971 50 123 4567' },
      { key: 'commentLabel', value: 'Дополнительный комментарий' },
      { key: 'commentPlaceholder', value: 'Расскажите о проекте подробнее...' },
      { key: 'noCallLabel', value: 'Хочу получить no-call-first предложение' },
      { key: 'expertReviewLabel', value: 'Готов к expert review, если это потребуется' },
      { key: 'ndaLabel', value: 'Может понадобиться NDA до отправки чувствительных материалов' },

      { key: 'nextLabel', value: 'Далее' },
      { key: 'submitLabel', value: 'Отправить brief проекта' },

      { key: 'summaryTitle', value: 'Ваш brief' },
      { key: 'summaryProjectTypeLabel', value: 'Тип проекта' },
      { key: 'summaryGoalLabel', value: 'Цель' },
      { key: 'summaryTeamLabel', value: 'Команда' },
      { key: 'summaryTimelineLabel', value: 'Сроки' },
      { key: 'summaryResultsTitle', value: 'После отправки вы получите' },
      {
        key: 'summaryFooter',
        value:
          'Финальный объём зависит от сложности, числа ролей, модулей, языков и глубины проработки.',
      },
    ]),

    {
      name: 'wizardStepLabels',
      type: 'array',
      required: true,
      minRows: 7,
      fields: [{ name: 'value', type: 'text', required: true }],
    },
    {
      name: 'projectTypes',
      type: 'array',
      required: true,
      minRows: 1,
      fields: textOptionWithDescriptionFields,
    },
    {
      name: 'projectGoals',
      type: 'array',
      required: true,
      minRows: 1,
      fields: textOptionFields,
    },
    {
      name: 'teamTypes',
      type: 'array',
      required: true,
      minRows: 1,
      fields: textOptionFields,
    },
    {
      name: 'complexityFlags',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [{ name: 'value', type: 'text', required: true }],
    },
    {
      name: 'materialsOptions',
      type: 'array',
      required: true,
      minRows: 1,
      fields: textOptionFields,
    },
    {
      name: 'timelineOptions',
      type: 'array',
      required: true,
      minRows: 1,
      fields: textOptionFields,
    },
    {
      name: 'budgetOptions',
      type: 'array',
      required: true,
      minRows: 1,
      fields: textOptionFields,
    },
    {
      name: 'summaryResults',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [{ name: 'value', type: 'text', required: true }],
    },

    copyField('uploadCopy', [
      { key: 'title', value: 'Есть материалы по проекту?' },
      {
        key: 'description',
        value:
          'Загрузите brief, заметки, screenshots, PRD, ссылки или старые экраны — этого достаточно, чтобы мы подготовили рекомендацию по следующему шагу.',
      },
      { key: 'backLabel', value: 'Назад к выбору' },
      { key: 'filesLabel', value: 'Загрузить файлы' },
      { key: 'filesTitle', value: 'Перетащите файлы сюда или нажмите для выбора' },
      { key: 'filesHint', value: 'PDF, PNG, JPG, DOCX, ZIP — до 50 MB на файл' },
      { key: 'linksLabel', value: 'Добавить ссылки' },
      { key: 'linksPlaceholder', value: 'Figma, Google Docs, Notion, Miro...' },
      { key: 'descriptionLabel', value: 'Краткое описание проекта' },
      {
        key: 'descriptionPlaceholder',
        value:
          'Расскажите, что вы планируете делать, какая главная задача, и что ожидаете получить...',
      },
      { key: 'contactLabel', value: 'Контакт для связи' },
      { key: 'namePlaceholder', value: 'Имя' },
      { key: 'emailPlaceholder', value: 'Email' },
      { key: 'cancelLabel', value: 'Отмена' },
      { key: 'submitLabel', value: 'Отправить материалы' },
    ]),

    copyField('successCopy', [
      { key: 'title', value: 'Ваш brief получен' },
      { key: 'description', value: 'Мы готовим структурированное предложение по вашему проекту.' },
      { key: 'stepsTitle', value: 'Что будет дальше' },
      { key: 'homeLabel', value: 'Вернуться на главную' },
      { key: 'pricingLabel', value: 'Посмотреть форматы работы' },
      { key: 'uploadMoreLabel', value: 'Загрузить ещё материалы' },
      { key: 'supportNotePrefix', value: 'Есть вопросы? Напишите на' },
      { key: 'supportEmail', value: 'hello@atelier-meridian.com' },
    ]),

    {
      name: 'successHomePageKey',
      type: 'select',
      required: true,
      options: PAGE_KEY_OPTIONS,
      dbName: 'pfp_home_pk',
      defaultValue: 'home',
    },
    {
      name: 'successPricingPageKey',
      type: 'select',
      required: true,
      options: PAGE_KEY_OPTIONS,
      dbName: 'pfp_price_pk',
      defaultValue: 'pricing',
    },
    {
      name: 'successSteps',
      type: 'array',
      required: true,
      minRows: 4,
      fields: [
        { name: 'number', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'text', required: true },
      ],
    },
  ],
}