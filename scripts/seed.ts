// import 'dotenv/config'

// import config from '@payload-config'
// import { getPayload } from 'payload'

// type Locale = 'ru' | 'en' | 'ar'
// type BlockData = Record<string, any>

// const GET_PROPOSAL_PAGE_KEY = 'get-proposal'

// const PROPOSAL_FLOW_PROPOSAL_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'proposalFlowProposal',

//     introCopy: [
//       { key: 'briefCardTitle', value: 'Заполнить brief' },
//       {
//         key: 'briefCardDescription',
//         value:
//           'Если хотите быстро получить ориентир по формату, срокам и следующему шагу — заполните короткий wizard. Он помогает нам понять контекст проекта и дать более точный ответ.',
//       },
//       { key: 'briefButtonLabel', value: 'Начать brief' },

//       { key: 'uploadCardTitle', value: 'Прикрепить материалы' },
//       {
//         key: 'uploadCardDescription',
//         value:
//           'Если у вас уже есть презентация, doc, структура, заметки, wireframes или links — просто отправьте материалы. Мы посмотрим их и вернёмся с предложением.',
//       },
//       { key: 'uploadButtonLabel', value: 'Загрузить материалы' },

//       { key: 'processEyebrow', value: 'Как это работает' },
//       { key: 'processTitle', value: 'Как мы обрабатываем заявку' },
//       {
//         key: 'processDescription',
//         value:
//           'Независимо от того, проходите ли вы wizard или просто отправляете материалы, дальше процесс одинаковый: мы быстро смотрим задачу, структурируем входные данные и возвращаем следующий шаг.',
//       },
//     ],

//     introProcessSteps: [
//       {
//         icon: 'target',
//         title: 'Смотрим задачу',
//         description:
//           'Понимаем, что именно вы хотите запустить: сайт, продукт, MVP, mobile app или investor-ready concept.',
//       },
//       {
//         icon: 'users',
//         title: 'Собираем контекст',
//         description:
//           'Учитываем команду, stage проекта, текущие материалы и ограничения по срокам.',
//       },
//       {
//         icon: 'layers',
//         title: 'Определяем scope',
//         description:
//           'Формулируем, какой формат работы действительно подходит под задачу и текущую стадию.',
//       },
//       {
//         icon: 'arrowUpRight',
//         title: 'Возвращаем предложение',
//         description:
//           'Присылаем ответ с recommended format, ориентиром по срокам и next step.',
//       },
//     ],

//     wizardCopy: [
//       { key: 'stepCounterPrefix', value: 'Шаг' },
//       { key: 'stepCounterConnector', value: 'из' },

//       { key: 'projectTypeTitle', value: 'Какой тип проекта у вас сейчас?' },
//       {
//         key: 'projectTypeDescription',
//         value:
//           'Выберите то, что ближе всего к задаче. Это помогает нам быстрее предложить правильный формат работы.',
//       },

//       { key: 'goalTitle', value: 'Что для вас сейчас главное?' },
//       {
//         key: 'goalDescription',
//         value:
//           'Некоторые проекты приходят за структурой, другие — за prototype, visual direction или investor-ready materials.',
//       },

//       { key: 'teamTitle', value: 'Расскажите немного о команде и проекте' },
//       {
//         key: 'teamDescription',
//         value:
//           'Нам важно понять stage продукта, размер команды и есть ли уже что-то в работе.',
//       },

//       { key: 'companyNameLabel', value: 'Название проекта / компании' },
//       { key: 'companyNamePlaceholder', value: 'Например, Meridian Health' },
//       { key: 'websiteLabel', value: 'Сайт / ссылка на продукт' },
//       { key: 'websitePlaceholder', value: 'https://...' },
//       { key: 'teamSizeLabel', value: 'Размер команды' },
//       { key: 'teamSizePlaceholder', value: 'Например, 4–7 человек' },

//       { key: 'complexityTitle', value: 'Насколько сложный у вас продукт?' },
//       {
//         key: 'complexityDescription',
//         value:
//           'Это помогает понять будущий объём интерфейсов, сценариев и глубину product architecture.',
//       },

//       { key: 'rolesCountLabel', value: 'Сколько пользовательских ролей?' },
//       { key: 'rolesCountPlaceholder', value: 'Например, 2–3 роли' },
//       { key: 'screenCountLabel', value: 'Примерный объём экранов' },
//       { key: 'screenCountPlaceholder', value: 'Например, 15–25 screens' },

//       { key: 'materialsTitle', value: 'Какие материалы уже есть?' },
//       {
//         key: 'materialsDescription',
//         value:
//           'Можно отметить всё, что уже есть. Это сокращает этап погружения и помогает быстрее стартовать.',
//       },
//       { key: 'wizardUploadLabel', value: 'Прикрепить файлы сразу' },
//       {
//         key: 'wizardUploadHint',
//         value:
//           'PDF, DOCX, ZIP, JPG, PNG — если что-то уже есть, можно приложить это прямо здесь.',
//       },

//       { key: 'timelineTitle', value: 'Сроки и бюджет' },
//       {
//         key: 'timelineDescription',
//         value:
//           'Нам не нужен точный бюджет до рубля. Достаточно диапазона и ощущения срочности.',
//       },
//       { key: 'timelineLabel', value: 'Когда вы хотите начать?' },
//       { key: 'budgetLabel', value: 'Какой диапазон бюджета вы рассматриваете?' },
//       { key: 'notesLabel', value: 'Что ещё важно знать о проекте?' },
//       {
//         key: 'notesPlaceholder',
//         value:
//           'Например: есть дедлайн под инвестора, нужен redesign без полного relaunch, хотим стартовать с concept stage и т.д.',
//       },

//       { key: 'contactTitle', value: 'Куда вернуть ответ?' },
//       {
//         key: 'contactDescription',
//         value:
//           'Оставьте контактные данные — мы вернёмся с предложением, форматом и следующим шагом.',
//       },

//       { key: 'nameLabel', value: 'Имя' },
//       { key: 'namePlaceholder', value: 'Ваше имя' },
//       { key: 'emailLabel', value: 'Email' },
//       { key: 'emailPlaceholder', value: 'name@company.com' },
//       { key: 'companyLabel', value: 'Компания' },
//       { key: 'companyPlaceholder', value: 'Название компании' },
//       { key: 'roleLabel', value: 'Роль' },
//       { key: 'rolePlaceholder', value: 'Founder / Product / Partner' },
//       { key: 'regionLabel', value: 'Страна / регион' },
//       { key: 'regionPlaceholder', value: 'Например, UAE, Germany, Estonia' },
//       { key: 'phoneLabel', value: 'Телефон / Telegram / WhatsApp' },
//       { key: 'phonePlaceholder', value: '+49..., @telegram, whatsapp number' },
//       { key: 'commentLabel', value: 'Комментарий' },
//       {
//         key: 'commentPlaceholder',
//         value:
//           'Если есть что добавить до созвона или письма — напишите это здесь.',
//       },

//       {
//         key: 'noCallLabel',
//         value:
//           'Не хочу начинать с обязательного созвона — сначала удобнее получить ответ письменно',
//       },
//       {
//         key: 'expertReviewLabel',
//         value: 'Нужен взгляд на задачу и format recommendation ещё до оценки',
//       },
//       {
//         key: 'ndaLabel',
//         value: 'Нам может понадобиться NDA перед более детальным обсуждением',
//       },

//       { key: 'summaryResultsTitle', value: 'Что вы получите после отправки' },
//       {
//         key: 'summaryFooter',
//         value:
//           'Мы не отправляем generic sales response. Обычно вы получаете более содержательный ответ по формату, scope и следующему шагу.',
//       },

//       { key: 'cancelLabel', value: 'Отмена' },
//       { key: 'backLabel', value: 'Назад' },
//       { key: 'nextLabel', value: 'Далее' },
//       { key: 'submitLabel', value: 'Отправить' },
//     ],

//     wizardStepLabels: [
//       { value: 'Тип проекта' },
//       { value: 'Цель' },
//       { value: 'Команда' },
//       { value: 'Сложность' },
//       { value: 'Материалы' },
//       { value: 'Сроки' },
//       { value: 'Контакты' },
//     ],

//     projectTypes: [
//       {
//         value: 'startup-website',
//         label: 'Startup Website',
//         description: 'Сайт для запуска, positioning, fundraising или первого трафика',
//       },
//       {
//         value: 'web-product',
//         label: 'Web Product',
//         description: 'SaaS, client portal, dashboard, platform или internal tool',
//       },
//       {
//         value: 'mobile-app',
//         label: 'Mobile App',
//         description: 'iOS / Android продукт, mobile-first MVP или redesign',
//       },
//       {
//         value: 'mvp-concept',
//         label: 'MVP / Concept',
//         description: 'Нужно собрать продуктовую структуру, сценарии и prototype',
//       },
//       {
//         value: 'redesign',
//         label: 'Redesign',
//         description: 'Есть текущий продукт, который нужно пересобрать или усилить',
//       },
//       {
//         value: 'other',
//         label: 'Другое',
//         description: 'Если задача не укладывается в одну из типовых категорий',
//       },
//     ],

//     projectGoals: [
//       { value: 'clarify-structure', label: 'Прояснить product structure' },
//       { value: 'prepare-prototype', label: 'Собрать strong prototype' },
//       { value: 'design-ui', label: 'Сделать premium interface design' },
//       { value: 'prepare-investor', label: 'Подготовить investor-ready materials' },
//       { value: 'redesign-existing', label: 'Переделать текущий продукт / сайт' },
//       { value: 'define-format', label: 'Понять, с чего вообще лучше начать' },
//     ],

//     teamTypes: [
//       { value: 'solo-founder', label: 'Solo founder' },
//       { value: 'small-team', label: 'Небольшая product team' },
//       { value: 'agency-partner', label: 'Agency / partner side' },
//       { value: 'company-team', label: 'Сформированная компания / in-house team' },
//     ],

//     complexityFlags: [
//       { value: 'Несколько пользовательских ролей' },
//       { value: 'Нужен dashboard / portal / cabinet' },
//       { value: 'Есть booking / payments / transaction flow' },
//       { value: 'Сложный onboarding или многосоставной workflow' },
//       { value: 'Нужны mobile + web сценарии' },
//       { value: 'Есть admin / internal side' },
//     ],

//     materialsOptions: [
//       { value: 'brief', label: 'Brief / notes' },
//       { value: 'pitchdeck', label: 'Pitch deck / presentation' },
//       { value: 'wireframes', label: 'Wireframes' },
//       { value: 'existing-design', label: 'Existing design' },
//       { value: 'product-link', label: 'Current product / link' },
//       { value: 'research', label: 'Research / insights' },
//       { value: 'brand', label: 'Brand / visual materials' },
//       { value: 'docs', label: 'Docs / specifications' },
//     ],

//     timelineOptions: [
//       { value: 'asap', label: 'ASAP / срочно' },
//       { value: '1-2-weeks', label: 'В ближайшие 1–2 недели' },
//       { value: 'this-month', label: 'В этом месяце' },
//       { value: 'next-month', label: 'В следующем месяце' },
//       { value: 'exploring', label: 'Пока изучаем варианты' },
//     ],

//     budgetOptions: [
//       { value: 'under-3k', label: 'До €3k' },
//       { value: '3k-7k', label: '€3k–7k' },
//       { value: '7k-15k', label: '€7k–15k' },
//       { value: '15k-plus', label: '€15k+' },
//       { value: 'not-sure', label: 'Пока не уверены' },
//     ],

//     summaryResults: [
//       { value: 'Ответ по recommended format' },
//       { value: 'Ориентир по срокам и scope' },
//       { value: 'Понимание следующего шага' },
//       { value: 'Возможность стартовать без обязательного созвона' },
//     ],

//     uploadCopy: [
//       { key: 'backLabel', value: 'Назад' },
//       { key: 'title', value: 'Загрузите материалы по проекту' },
//       {
//         key: 'description',
//         value:
//           'Если у вас уже есть brief, презентация, структура, wireframes, ссылки или другие материалы — отправьте их. Мы посмотрим всё в контексте и вернёмся с ответом.',
//       },

//       { key: 'filesLabel', value: 'Файлы' },
//       { key: 'filesTitle', value: 'Перетащите файлы сюда или выберите их вручную' },
//       {
//         key: 'filesHint',
//         value:
//           'PDF, DOCX, ZIP, JPG, PNG, WEBP — всё, что помогает понять продукт.',
//       },

//       { key: 'linksLabel', value: 'Ссылки' },
//       { key: 'linksPlaceholder', value: 'https://figma.com / notion / loom / product link' },

//       { key: 'descriptionLabel', value: 'Коротко опишите задачу' },
//       {
//         key: 'descriptionPlaceholder',
//         value:
//           'Что это за проект, на какой он стадии и с чем вы хотите прийти к следующему шагу.',
//       },

//       { key: 'contactLabel', value: 'Контактные данные' },
//       { key: 'namePlaceholder', value: 'Ваше имя' },
//       { key: 'emailPlaceholder', value: 'name@company.com' },

//       { key: 'cancelLabel', value: 'Отмена' },
//       { key: 'submitLabel', value: 'Отправить материалы' },
//     ],

//     successCopy: [
//       { key: 'title', value: 'Спасибо — заявка отправлена' },
//       {
//         key: 'description',
//         value:
//           'Мы получили ваши данные и материалы. Обычно возвращаемся с первым содержательным ответом после быстрого review контекста.',
//       },
//       { key: 'stepsTitle', value: 'Что будет дальше' },

//       { key: 'homeLabel', value: 'На главную' },
//       { key: 'pricingLabel', value: 'Посмотреть pricing' },
//       { key: 'uploadMoreLabel', value: 'Добавить ещё материалы' },

//       { key: 'supportNotePrefix', value: 'Если нужно срочно что-то добавить — напишите на' },
//       { key: 'supportEmail', value: 'hello@atelier-meridian.com' },
//     ],

//     successHomePageKey: 'home',
//     successPricingPageKey: 'pricing',

//     successSteps: [
//       {
//         number: '01',
//         title: 'Быстрый review',
//         description: 'Мы смотрим задачу, stage проекта и все входные материалы.',
//       },
//       {
//         number: '02',
//         title: 'Определяем format',
//         description: 'Формулируем, какой формат работы действительно подходит под задачу.',
//       },
//       {
//         number: '03',
//         title: 'Возвращаемся с ответом',
//         description: 'Отправляем письмо с recommended scope, timeline direction и next step.',
//       },
//       {
//         number: '04',
//         title: 'При необходимости — созвон',
//         description: 'Если нужно, подключаем короткий call уже с более понятным контекстом.',
//       },
//     ],
//   },

//   en: {
//     blockType: 'proposalFlowProposal',

//     introCopy: [
//       { key: 'briefCardTitle', value: 'Fill in the brief' },
//       {
//         key: 'briefCardDescription',
//         value:
//           'If you want a fast direction on format, timeline, and next step, complete the short wizard. It helps us understand the project context and respond more precisely.',
//       },
//       { key: 'briefButtonLabel', value: 'Start brief' },

//       { key: 'uploadCardTitle', value: 'Upload materials' },
//       {
//         key: 'uploadCardDescription',
//         value:
//           'If you already have a presentation, docs, structure, notes, wireframes, or links, just send the materials. We will review them and come back with a proposal.',
//       },
//       { key: 'uploadButtonLabel', value: 'Upload materials' },

//       { key: 'processEyebrow', value: 'How it works' },
//       { key: 'processTitle', value: 'How we process the request' },
//       {
//         key: 'processDescription',
//         value:
//           'Whether you go through the wizard or simply upload materials, the process is the same: we quickly review the task, structure the input, and return the next practical step.',
//       },
//     ],

//     introProcessSteps: [
//       {
//         icon: 'target',
//         title: 'We review the task',
//         description:
//           'We understand what exactly you want to launch: website, product, MVP, mobile app, or investor-ready concept.',
//       },
//       {
//         icon: 'users',
//         title: 'We collect context',
//         description:
//           'We consider the team, project stage, existing materials, and timing constraints.',
//       },
//       {
//         icon: 'layers',
//         title: 'We define the scope',
//         description:
//           'We determine which format actually fits the task and the current stage.',
//       },
//       {
//         icon: 'arrowUpRight',
//         title: 'We return a proposal',
//         description:
//           'We send a response with the recommended format, timeline direction, and next practical step.',
//       },
//     ],

//     wizardCopy: [
//       { key: 'stepCounterPrefix', value: 'Step' },
//       { key: 'stepCounterConnector', value: 'of' },

//       { key: 'projectTypeTitle', value: 'What type of project is this?' },
//       {
//         key: 'projectTypeDescription',
//         value:
//           'Choose the option that is closest to your situation. This helps us recommend the right format faster.',
//       },

//       { key: 'goalTitle', value: 'What matters most right now?' },
//       {
//         key: 'goalDescription',
//         value:
//           'Some teams come for structure, others for a prototype, visual direction, or investor-ready materials.',
//       },

//       { key: 'teamTitle', value: 'Tell us a bit about the team and project' },
//       {
//         key: 'teamDescription',
//         value:
//           'It helps to understand the product stage, the team size, and whether anything already exists.',
//       },

//       { key: 'companyNameLabel', value: 'Project / company name' },
//       { key: 'companyNamePlaceholder', value: 'For example, Meridian Health' },
//       { key: 'websiteLabel', value: 'Website / product link' },
//       { key: 'websitePlaceholder', value: 'https://...' },
//       { key: 'teamSizeLabel', value: 'Team size' },
//       { key: 'teamSizePlaceholder', value: 'For example, 4–7 people' },

//       { key: 'complexityTitle', value: 'How complex is the product?' },
//       {
//         key: 'complexityDescription',
//         value:
//           'This helps us estimate interface depth, flow complexity, and product architecture needs.',
//       },

//       { key: 'rolesCountLabel', value: 'How many user roles?' },
//       { key: 'rolesCountPlaceholder', value: 'For example, 2–3 roles' },
//       { key: 'screenCountLabel', value: 'Approximate number of screens' },
//       { key: 'screenCountPlaceholder', value: 'For example, 15–25 screens' },

//       { key: 'materialsTitle', value: 'What materials do you already have?' },
//       {
//         key: 'materialsDescription',
//         value:
//           'Select everything you already have. This reduces onboarding time and helps us move faster.',
//       },
//       { key: 'wizardUploadLabel', value: 'Attach files right away' },
//       {
//         key: 'wizardUploadHint',
//         value:
//           'PDF, DOCX, ZIP, JPG, PNG — if something already exists, you can attach it here.',
//       },

//       { key: 'timelineTitle', value: 'Timeline and budget' },
//       {
//         key: 'timelineDescription',
//         value:
//           'We do not need an exact budget down to the last euro. A rough range and urgency are enough.',
//       },
//       { key: 'timelineLabel', value: 'When would you like to start?' },
//       { key: 'budgetLabel', value: 'What budget range are you considering?' },
//       { key: 'notesLabel', value: 'Anything else we should know?' },
//       {
//         key: 'notesPlaceholder',
//         value:
//           'For example: investor deadline, redesign without full relaunch, want to start with a concept stage, etc.',
//       },

//       { key: 'contactTitle', value: 'Where should we send the response?' },
//       {
//         key: 'contactDescription',
//         value:
//           'Leave your contact details and we will return with a proposal, format direction, and next step.',
//       },

//       { key: 'nameLabel', value: 'Name' },
//       { key: 'namePlaceholder', value: 'Your name' },
//       { key: 'emailLabel', value: 'Email' },
//       { key: 'emailPlaceholder', value: 'name@company.com' },
//       { key: 'companyLabel', value: 'Company' },
//       { key: 'companyPlaceholder', value: 'Company name' },
//       { key: 'roleLabel', value: 'Role' },
//       { key: 'rolePlaceholder', value: 'Founder / Product / Partner' },
//       { key: 'regionLabel', value: 'Country / region' },
//       { key: 'regionPlaceholder', value: 'For example, UAE, Germany, Estonia' },
//       { key: 'phoneLabel', value: 'Phone / Telegram / WhatsApp' },
//       { key: 'phonePlaceholder', value: '+49..., @telegram, whatsapp number' },
//       { key: 'commentLabel', value: 'Comment' },
//       {
//         key: 'commentPlaceholder',
//         value:
//           'If there is anything important before a call or written reply, add it here.',
//       },

//       {
//         key: 'noCallLabel',
//         value: 'I do not want to start with a mandatory call — a written response is better first',
//       },
//       {
//         key: 'expertReviewLabel',
//         value: 'We need a quick expert review and format recommendation before estimation',
//       },
//       {
//         key: 'ndaLabel',
//         value: 'We may need an NDA before discussing the project in more detail',
//       },

//       { key: 'summaryResultsTitle', value: 'What you get after submission' },
//       {
//         key: 'summaryFooter',
//         value:
//           'We do not send generic sales replies. Usually you receive a more useful response on format, scope, and next step.',
//       },

//       { key: 'cancelLabel', value: 'Cancel' },
//       { key: 'backLabel', value: 'Back' },
//       { key: 'nextLabel', value: 'Next' },
//       { key: 'submitLabel', value: 'Submit' },
//     ],

//     wizardStepLabels: [
//       { value: 'Project type' },
//       { value: 'Goal' },
//       { value: 'Team' },
//       { value: 'Complexity' },
//       { value: 'Materials' },
//       { value: 'Timeline' },
//       { value: 'Contacts' },
//     ],

//     projectTypes: [
//       {
//         value: 'startup-website',
//         label: 'Startup Website',
//         description: 'Website for launch, positioning, fundraising, or initial traffic',
//       },
//       {
//         value: 'web-product',
//         label: 'Web Product',
//         description: 'SaaS, client portal, dashboard, platform, or internal tool',
//       },
//       {
//         value: 'mobile-app',
//         label: 'Mobile App',
//         description: 'iOS / Android product, mobile-first MVP, or redesign',
//       },
//       {
//         value: 'mvp-concept',
//         label: 'MVP / Concept',
//         description: 'Need to shape product structure, flows, and a strong prototype',
//       },
//       {
//         value: 'redesign',
//         label: 'Redesign',
//         description: 'There is an existing product or website that needs to be reworked',
//       },
//       {
//         value: 'other',
//         label: 'Other',
//         description: 'If the task does not fit a typical category',
//       },
//     ],

//     projectGoals: [
//       { value: 'clarify-structure', label: 'Clarify product structure' },
//       { value: 'prepare-prototype', label: 'Build a strong prototype' },
//       { value: 'design-ui', label: 'Create premium interface design' },
//       { value: 'prepare-investor', label: 'Prepare investor-ready materials' },
//       { value: 'redesign-existing', label: 'Redesign an existing product / site' },
//       { value: 'define-format', label: 'Understand where to start' },
//     ],

//     teamTypes: [
//       { value: 'solo-founder', label: 'Solo founder' },
//       { value: 'small-team', label: 'Small product team' },
//       { value: 'agency-partner', label: 'Agency / partner side' },
//       { value: 'company-team', label: 'Established company / in-house team' },
//     ],

//     complexityFlags: [
//       { value: 'Multiple user roles' },
//       { value: 'Need a dashboard / portal / cabinet' },
//       { value: 'Booking / payments / transaction flow' },
//       { value: 'Complex onboarding or multi-step workflow' },
//       { value: 'Need both mobile and web scenarios' },
//       { value: 'Admin / internal side exists' },
//     ],

//     materialsOptions: [
//       { value: 'brief', label: 'Brief / notes' },
//       { value: 'pitchdeck', label: 'Pitch deck / presentation' },
//       { value: 'wireframes', label: 'Wireframes' },
//       { value: 'existing-design', label: 'Existing design' },
//       { value: 'product-link', label: 'Current product / link' },
//       { value: 'research', label: 'Research / insights' },
//       { value: 'brand', label: 'Brand / visual materials' },
//       { value: 'docs', label: 'Docs / specifications' },
//     ],

//     timelineOptions: [
//       { value: 'asap', label: 'ASAP / urgent' },
//       { value: '1-2-weeks', label: 'Within 1–2 weeks' },
//       { value: 'this-month', label: 'This month' },
//       { value: 'next-month', label: 'Next month' },
//       { value: 'exploring', label: 'Still exploring' },
//     ],

//     budgetOptions: [
//       { value: 'under-3k', label: 'Under €3k' },
//       { value: '3k-7k', label: '€3k–7k' },
//       { value: '7k-15k', label: '€7k–15k' },
//       { value: '15k-plus', label: '€15k+' },
//       { value: 'not-sure', label: 'Not sure yet' },
//     ],

//     summaryResults: [
//       { value: 'A response with recommended format' },
//       { value: 'A direction on timeline and scope' },
//       { value: 'A clear next step' },
//       { value: 'An option to start without a mandatory call' },
//     ],

//     uploadCopy: [
//       { key: 'backLabel', value: 'Back' },
//       { key: 'title', value: 'Upload project materials' },
//       {
//         key: 'description',
//         value:
//           'If you already have a brief, presentation, structure, wireframes, links, or any other materials, send them over. We will review everything in context and respond with the next step.',
//       },

//       { key: 'filesLabel', value: 'Files' },
//       { key: 'filesTitle', value: 'Drop files here or select them manually' },
//       {
//         key: 'filesHint',
//         value:
//           'PDF, DOCX, ZIP, JPG, PNG, WEBP — anything that helps explain the product.',
//       },

//       { key: 'linksLabel', value: 'Links' },
//       { key: 'linksPlaceholder', value: 'https://figma.com / notion / loom / product link' },

//       { key: 'descriptionLabel', value: 'Briefly describe the task' },
//       {
//         key: 'descriptionPlaceholder',
//         value:
//           'What kind of project is this, what stage is it at, and what do you want to achieve next?',
//       },

//       { key: 'contactLabel', value: 'Contact details' },
//       { key: 'namePlaceholder', value: 'Your name' },
//       { key: 'emailPlaceholder', value: 'name@company.com' },

//       { key: 'cancelLabel', value: 'Cancel' },
//       { key: 'submitLabel', value: 'Send materials' },
//     ],

//     successCopy: [
//       { key: 'title', value: 'Thank you — your request has been sent' },
//       {
//         key: 'description',
//         value:
//           'We have received your details and materials. We usually come back after a quick review of the context.',
//       },
//       { key: 'stepsTitle', value: 'What happens next' },

//       { key: 'homeLabel', value: 'Back to home' },
//       { key: 'pricingLabel', value: 'View pricing' },
//       { key: 'uploadMoreLabel', value: 'Upload more materials' },

//       { key: 'supportNotePrefix', value: 'If you need to add something urgently, write to' },
//       { key: 'supportEmail', value: 'hello@atelier-meridian.com' },
//     ],

//     successHomePageKey: 'home',
//     successPricingPageKey: 'pricing',

//     successSteps: [
//       {
//         number: '01',
//         title: 'Quick review',
//         description: 'We review the task, project stage, and all incoming materials.',
//       },
//       {
//         number: '02',
//         title: 'Format definition',
//         description: 'We define which working format actually fits the task.',
//       },
//       {
//         number: '03',
//         title: 'Written response',
//         description: 'We send a response with scope direction, timeline guidance, and the next step.',
//       },
//       {
//         number: '04',
//         title: 'Call if needed',
//         description: 'If necessary, we then connect a short call with much clearer context.',
//       },
//     ],
//   },

//   ar: {
//     blockType: 'proposalFlowProposal',

//     introCopy: [
//       { key: 'briefCardTitle', value: 'املأ الـ brief' },
//       {
//         key: 'briefCardDescription',
//         value:
//           'إذا كنت تريد اتجاهاً سريعاً حول صيغة العمل والمدة والخطوة التالية، فاملأ الـ wizard القصير. هذا يساعدنا على فهم سياق المشروع والرد بشكل أدق.',
//       },
//       { key: 'briefButtonLabel', value: 'ابدأ الـ brief' },

//       { key: 'uploadCardTitle', value: 'ارفع المواد' },
//       {
//         key: 'uploadCardDescription',
//         value:
//           'إذا كان لديك عرض تقديمي أو docs أو هيكل أو ملاحظات أو wireframes أو روابط، فقط أرسل المواد. سنراجعها ونعود إليك باقتراح مناسب.',
//       },
//       { key: 'uploadButtonLabel', value: 'رفع المواد' },

//       { key: 'processEyebrow', value: 'كيف يعمل هذا' },
//       { key: 'processTitle', value: 'كيف نعالج الطلب' },
//       {
//         key: 'processDescription',
//         value:
//           'سواء مررت عبر الـ wizard أو أرسلت المواد مباشرة، فالعملية واحدة: نراجع المهمة بسرعة، ونرتب المدخلات، ثم نعود بالخطوة العملية التالية.',
//       },
//     ],

//     introProcessSteps: [
//       {
//         icon: 'target',
//         title: 'نراجع المهمة',
//         description:
//           'نفهم ما الذي تريد إطلاقه بالضبط: موقع، منتج، MVP، تطبيق جوال، أو concept جاهز للمستثمرين.',
//       },
//       {
//         icon: 'users',
//         title: 'نجمع السياق',
//         description:
//           'نأخذ في الاعتبار الفريق، ومرحلة المشروع، والمواد الحالية، والقيود الزمنية.',
//       },
//       {
//         icon: 'layers',
//         title: 'نحدد النطاق',
//         description:
//           'نحدد صيغة العمل الأنسب للمهمة والمرحلة الحالية للمشروع.',
//       },
//       {
//         icon: 'arrowUpLeft',
//         title: 'نعيد المقترح',
//         description:
//           'نرسل رداً يتضمن الصيغة المقترحة واتجاه الجدول الزمني والخطوة العملية التالية.',
//       },
//     ],

//     wizardCopy: [
//       { key: 'stepCounterPrefix', value: 'الخطوة' },
//       { key: 'stepCounterConnector', value: 'من' },

//       { key: 'projectTypeTitle', value: 'ما نوع المشروع الحالي؟' },
//       {
//         key: 'projectTypeDescription',
//         value:
//           'اختر الخيار الأقرب لحالتك. هذا يساعدنا على اقتراح الصيغة المناسبة بشكل أسرع.',
//       },

//       { key: 'goalTitle', value: 'ما هو الأهم بالنسبة لكم الآن؟' },
//       {
//         key: 'goalDescription',
//         value:
//           'بعض الفرق تأتي من أجل الهيكلة، وأخرى من أجل prototype أو visual direction أو materials جاهزة للمستثمرين.',
//       },

//       { key: 'teamTitle', value: 'أخبرنا قليلاً عن الفريق والمشروع' },
//       {
//         key: 'teamDescription',
//         value:
//           'من المهم فهم مرحلة المنتج، وحجم الفريق، وما إذا كان هناك شيء موجود بالفعل.',
//       },

//       { key: 'companyNameLabel', value: 'اسم المشروع / الشركة' },
//       { key: 'companyNamePlaceholder', value: 'مثلاً: Meridian Health' },
//       { key: 'websiteLabel', value: 'الموقع / رابط المنتج' },
//       { key: 'websitePlaceholder', value: 'https://...' },
//       { key: 'teamSizeLabel', value: 'حجم الفريق' },
//       { key: 'teamSizePlaceholder', value: 'مثلاً: 4–7 أشخاص' },

//       { key: 'complexityTitle', value: 'ما مدى تعقيد المنتج؟' },
//       {
//         key: 'complexityDescription',
//         value:
//           'هذا يساعدنا على تقدير عمق الواجهات وتعقيد المسارات واحتياجات product architecture.',
//       },

//       { key: 'rolesCountLabel', value: 'كم عدد أدوار المستخدمين؟' },
//       { key: 'rolesCountPlaceholder', value: 'مثلاً: 2–3 أدوار' },
//       { key: 'screenCountLabel', value: 'العدد التقريبي للشاشات' },
//       { key: 'screenCountPlaceholder', value: 'مثلاً: 15–25 شاشة' },

//       { key: 'materialsTitle', value: 'ما المواد المتوفرة بالفعل؟' },
//       {
//         key: 'materialsDescription',
//         value:
//           'اختر كل ما لديكم بالفعل. هذا يقلل وقت الانطلاق ويساعدنا على التحرك بسرعة أكبر.',
//       },
//       { key: 'wizardUploadLabel', value: 'إرفاق الملفات مباشرة' },
//       {
//         key: 'wizardUploadHint',
//         value:
//           'PDF وDOCX وZIP وJPG وPNG — إذا كان لديكم شيء جاهز، يمكن إرفاقه هنا.',
//       },

//       { key: 'timelineTitle', value: 'الجدول الزمني والميزانية' },
//       {
//         key: 'timelineDescription',
//         value:
//           'لا نحتاج إلى ميزانية دقيقة جداً. يكفي نطاق تقريبي وفهم مستوى الاستعجال.',
//       },
//       { key: 'timelineLabel', value: 'متى تودون البدء؟' },
//       { key: 'budgetLabel', value: 'ما نطاق الميزانية الذي تفكرون فيه؟' },
//       { key: 'notesLabel', value: 'هل هناك شيء آخر يجب أن نعرفه؟' },
//       {
//         key: 'notesPlaceholder',
//         value:
//           'مثلاً: هناك موعد مع مستثمر، أو نحتاج redesign من دون relaunch كامل، أو نريد البدء بمرحلة concept.',
//       },

//       { key: 'contactTitle', value: 'إلى أين نرسل الرد؟' },
//       {
//         key: 'contactDescription',
//         value:
//           'اترك بيانات التواصل، وسنعود إليك بالمقترح وصيغة العمل والخطوة التالية.',
//       },

//       { key: 'nameLabel', value: 'الاسم' },
//       { key: 'namePlaceholder', value: 'اسمك' },
//       { key: 'emailLabel', value: 'البريد الإلكتروني' },
//       { key: 'emailPlaceholder', value: 'name@company.com' },
//       { key: 'companyLabel', value: 'الشركة' },
//       { key: 'companyPlaceholder', value: 'اسم الشركة' },
//       { key: 'roleLabel', value: 'الدور' },
//       { key: 'rolePlaceholder', value: 'Founder / Product / Partner' },
//       { key: 'regionLabel', value: 'الدولة / المنطقة' },
//       { key: 'regionPlaceholder', value: 'مثلاً: UAE, Germany, Estonia' },
//       { key: 'phoneLabel', value: 'الهاتف / Telegram / WhatsApp' },
//       { key: 'phonePlaceholder', value: '+49..., @telegram, whatsapp number' },
//       { key: 'commentLabel', value: 'تعليق' },
//       {
//         key: 'commentPlaceholder',
//         value:
//           'إذا كان هناك أي شيء مهم قبل المكالمة أو الرد المكتوب، أضفه هنا.',
//       },

//       {
//         key: 'noCallLabel',
//         value: 'لا أريد أن أبدأ بمكالمة إلزامية — الرد المكتوب أفضل أولاً',
//       },
//       {
//         key: 'expertReviewLabel',
//         value: 'نحتاج إلى نظرة خبيرة سريعة وتوصية بالصيغة قبل التقدير',
//       },
//       {
//         key: 'ndaLabel',
//         value: 'قد نحتاج إلى NDA قبل مناقشة المشروع بتفصيل أكبر',
//       },

//       { key: 'summaryResultsTitle', value: 'ماذا تحصل بعد الإرسال' },
//       {
//         key: 'summaryFooter',
//         value:
//           'نحن لا نرسل generic sales response. عادةً تحصل على رد أكثر فائدة بخصوص الصيغة والنطاق والخطوة التالية.',
//       },

//       { key: 'cancelLabel', value: 'إلغاء' },
//       { key: 'backLabel', value: 'رجوع' },
//       { key: 'nextLabel', value: 'التالي' },
//       { key: 'submitLabel', value: 'إرسال' },
//     ],

//     wizardStepLabels: [
//       { value: 'نوع المشروع' },
//       { value: 'الهدف' },
//       { value: 'الفريق' },
//       { value: 'التعقيد' },
//       { value: 'المواد' },
//       { value: 'الوقت' },
//       { value: 'التواصل' },
//     ],

//     projectTypes: [
//       {
//         value: 'startup-website',
//         label: 'Startup Website',
//         description: 'موقع للإطلاق أو التموضع أو جمع التمويل أو الزيارات الأولى',
//       },
//       {
//         value: 'web-product',
//         label: 'Web Product',
//         description: 'SaaS أو client portal أو dashboard أو platform أو internal tool',
//       },
//       {
//         value: 'mobile-app',
//         label: 'Mobile App',
//         description: 'منتج iOS / Android أو MVP mobile-first أو redesign',
//       },
//       {
//         value: 'mvp-concept',
//         label: 'MVP / Concept',
//         description: 'تحتاجون إلى تشكيل هيكل المنتج والمسارات وprototype قوي',
//       },
//       {
//         value: 'redesign',
//         label: 'Redesign',
//         description: 'هناك منتج أو موقع قائم يحتاج إلى إعادة بناء',
//       },
//       {
//         value: 'other',
//         label: 'أخرى',
//         description: 'إذا كانت المهمة لا تنطبق على فئة نمطية واضحة',
//       },
//     ],

//     projectGoals: [
//       { value: 'clarify-structure', label: 'توضيح هيكل المنتج' },
//       { value: 'prepare-prototype', label: 'بناء prototype قوي' },
//       { value: 'design-ui', label: 'تصميم واجهة premium' },
//       { value: 'prepare-investor', label: 'إعداد materials للمستثمرين' },
//       { value: 'redesign-existing', label: 'إعادة تصميم منتج / موقع قائم' },
//       { value: 'define-format', label: 'فهم من أين يجب أن نبدأ' },
//     ],

//     teamTypes: [
//       { value: 'solo-founder', label: 'Solo founder' },
//       { value: 'small-team', label: 'فريق منتج صغير' },
//       { value: 'agency-partner', label: 'Agency / partner side' },
//       { value: 'company-team', label: 'شركة قائمة / فريق داخلي' },
//     ],

//     complexityFlags: [
//       { value: 'أدوار مستخدمين متعددة' },
//       { value: 'الحاجة إلى dashboard / portal / cabinet' },
//       { value: 'وجود booking / payments / transaction flow' },
//       { value: 'Onboarding معقد أو workflow متعدد الخطوات' },
//       { value: 'الحاجة إلى mobile + web معاً' },
//       { value: 'وجود جانب admin / internal' },
//     ],

//     materialsOptions: [
//       { value: 'brief', label: 'Brief / notes' },
//       { value: 'pitchdeck', label: 'Pitch deck / presentation' },
//       { value: 'wireframes', label: 'Wireframes' },
//       { value: 'existing-design', label: 'تصميم موجود' },
//       { value: 'product-link', label: 'المنتج الحالي / رابط' },
//       { value: 'research', label: 'Research / insights' },
//       { value: 'brand', label: 'Brand / visual materials' },
//       { value: 'docs', label: 'Docs / specifications' },
//     ],

//     timelineOptions: [
//       { value: 'asap', label: 'بأسرع وقت / عاجل' },
//       { value: '1-2-weeks', label: 'خلال 1–2 أسبوع' },
//       { value: 'this-month', label: 'خلال هذا الشهر' },
//       { value: 'next-month', label: 'الشهر القادم' },
//       { value: 'exploring', label: 'ما زلنا نستكشف الخيارات' },
//     ],

//     budgetOptions: [
//       { value: 'under-3k', label: 'أقل من €3k' },
//       { value: '3k-7k', label: '€3k–7k' },
//       { value: '7k-15k', label: '€7k–15k' },
//       { value: '15k-plus', label: '€15k+' },
//       { value: 'not-sure', label: 'لسنا متأكدين بعد' },
//     ],

//     summaryResults: [
//       { value: 'رد يتضمن الصيغة المقترحة' },
//       { value: 'اتجاه مبدئي للمدة والنطاق' },
//       { value: 'خطوة تالية واضحة' },
//       { value: 'إمكانية البدء من دون مكالمة إلزامية' },
//     ],

//     uploadCopy: [
//       { key: 'backLabel', value: 'رجوع' },
//       { key: 'title', value: 'ارفع مواد المشروع' },
//       {
//         key: 'description',
//         value:
//           'إذا كان لديكم brief أو عرض تقديمي أو هيكل أو wireframes أو روابط أو أي مواد أخرى، أرسلوها. سنراجع كل شيء ضمن السياق ونعود إليكم بالخطوة التالية.',
//       },

//       { key: 'filesLabel', value: 'الملفات' },
//       { key: 'filesTitle', value: 'اسحب الملفات هنا أو اخترها يدوياً' },
//       {
//         key: 'filesHint',
//         value:
//           'PDF وDOCX وZIP وJPG وPNG وWEBP — أي شيء يساعد على شرح المنتج.',
//       },

//       { key: 'linksLabel', value: 'الروابط' },
//       { key: 'linksPlaceholder', value: 'https://figma.com / notion / loom / product link' },

//       { key: 'descriptionLabel', value: 'صف المهمة باختصار' },
//       {
//         key: 'descriptionPlaceholder',
//         value:
//           'ما نوع المشروع، وفي أي مرحلة هو الآن، وما الذي تريدون الوصول إليه في الخطوة التالية؟',
//       },

//       { key: 'contactLabel', value: 'بيانات التواصل' },
//       { key: 'namePlaceholder', value: 'اسمك' },
//       { key: 'emailPlaceholder', value: 'name@company.com' },

//       { key: 'cancelLabel', value: 'إلغاء' },
//       { key: 'submitLabel', value: 'إرسال المواد' },
//     ],

//     successCopy: [
//       { key: 'title', value: 'شكراً — تم إرسال الطلب' },
//       {
//         key: 'description',
//         value:
//           'لقد استلمنا البيانات والمواد. عادةً نعود بعد مراجعة سريعة للسياق.',
//       },
//       { key: 'stepsTitle', value: 'ماذا يحدث بعد ذلك' },

//       { key: 'homeLabel', value: 'إلى الصفحة الرئيسية' },
//       { key: 'pricingLabel', value: 'الاطلاع على الأسعار' },
//       { key: 'uploadMoreLabel', value: 'إضافة مواد أخرى' },

//       { key: 'supportNotePrefix', value: 'إذا كنت بحاجة لإضافة شيء بشكل عاجل، اكتب إلى' },
//       { key: 'supportEmail', value: 'hello@atelier-meridian.com' },
//     ],

//     successHomePageKey: 'home',
//     successPricingPageKey: 'pricing',

//     successSteps: [
//       {
//         number: '٠١',
//         title: 'مراجعة سريعة',
//         description: 'نراجع المهمة ومرحلة المشروع وكل المواد المرسلة.',
//       },
//       {
//         number: '٠٢',
//         title: 'تحديد الصيغة',
//         description: 'نحدد صيغة العمل التي تناسب المهمة فعلاً.',
//       },
//       {
//         number: '٠٣',
//         title: 'رد مكتوب',
//         description: 'نرسل رداً يتضمن اتجاه النطاق والمدة والخطوة التالية.',
//       },
//       {
//         number: '٠٤',
//         title: 'مكالمة عند الحاجة',
//         description: 'إذا لزم الأمر، نضيف مكالمة قصيرة بعد أن يصبح السياق أوضح.',
//       },
//     ],
//   },
// }

// const TRUST_PROPOSAL_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'trustProposal',
//     title: 'Структурный intake для сложных digital-проектов',
//     description: 'Формат работы, который подходит для серьёзных продуктовых задач',
//     items: [
//       {
//         icon: 'layers',
//         title: 'Подходит для сложных workflow',
//         description: 'Структурируем многоуровневые процессы, role-based системы и enterprise-задачи',
//       },
//       {
//         icon: 'users',
//         title: 'Удобно для startup, B2B и enterprise',
//         description: 'Работаем с founders, product teams, агентствами и integrators',
//       },
//       {
//         icon: 'building2',
//         title: 'Поддерживает white-label модель',
//         description: 'Готовим материалы под бренд клиента для агентств и партнёров',
//       },
//       {
//         icon: 'arrowRightLeft',
//         title: 'Упрощает передачу в разработку',
//         description: 'Формируем build-ready материалы и документацию для разработки',
//       },
//     ],
//   },

//   en: {
//     blockType: 'trustProposal',
//     title: 'A structured start for complex digital work',
//     description: 'A format designed for teams that want clarity without unnecessary sales friction',
//     items: [
//       {
//         icon: 'layers',
//         title: 'Built for complex workflows',
//         description: 'We structure multi-layered processes, role-based systems, and enterprise-level tasks',
//       },
//       {
//         icon: 'users',
//         title: 'Works for startups, B2B, and enterprise',
//         description: 'We collaborate with founders, product teams, agencies, and integrators',
//       },
//       {
//         icon: 'building2',
//         title: 'Supports white-label model',
//         description: "We prepare materials under your client's brand for agencies and partners",
//       },
//       {
//         icon: 'arrowRightLeft',
//         title: 'Simplifies dev handoff',
//         description: 'We create build-ready materials and documentation for development teams',
//       },
//     ],
//   },

//   ar: {
//     blockType: 'trustProposal',
//     title: 'بداية منظمة للمشاريع الرقمية المعقدة',
//     description: 'صُممت هذه الصفحة للفرق التي تحتاج إلى وضوح من دون احتكاك بيعي غير ضروري',
//     items: [
//       {
//         icon: 'layers',
//         title: 'مصمم للعمليات المعقدة',
//         description: 'نهيكل العمليات متعددة الطبقات والأنظمة القائمة على الأدوار والمهام على مستوى المؤسسات',
//       },
//       {
//         icon: 'users',
//         title: 'يعمل للشركات الناشئة وB2B والمؤسسات',
//         description: 'نتعاون مع المؤسسين وفرق المنتجات والوكالات وشركاء التكامل',
//       },
//       {
//         icon: 'building2',
//         title: 'يدعم نموذج White-label',
//         description: 'نعد المواد تحت علامتك التجارية للوكالات والشركاء',
//       },
//       {
//         icon: 'arrowRightLeft',
//         title: 'يسهل تسليم التطوير',
//         description: 'ننشىء مواد ووثائق جاهزة للتطوير لفرق البرمجة',
//       },
//     ],
//     supportPoints: [
//       { label: 'لا حاجة إلى مكالمة إلزامية في البداية' },
//       { label: 'مناسب للمواقع والأنظمة وتطبيقات الجوال' },
//       { label: 'توصية واضحة بعد المراجعة' },
//     ],
//   },
// }

// const FAQ_PROPOSAL_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'faqProposal',
//     title: 'Частые вопросы',
//     items: [
//       {
//         question: 'Что я получу после отправки brief?',
//         answer: 'Вы получите структурированное предложение с рекомендацией по формату работы, ориентиром по срокам и стартовой стоимостью. Если потребуется уточнение — мы свяжемся с вами напрямую.',
//       },
//       {
//         question: 'Можно ли работать без звонков?',
//         answer: 'Да. Мы поддерживаем no-call-first формат. Большинство вопросов решается через brief, email и asynchronous коммуникацию. Звонок нужен только для сложных случаев, и только по согласованию.',
//       },
//       {
//         question: 'Поддерживаете ли вы white-label формат?',
//         answer: 'Да. Мы работаем с агентствами, integrators и консультантами, которые готовят материалы для своих клиентов. Все артефакты могут быть под ваш бренд.',
//       },
//       {
//         question: 'Можно ли прийти с rough notes или старой системой?',
//         answer: 'Да. Вы можете загрузить любые материалы — заметки, screenshots, старые экраны, PRD или просто описание. Мы поможем структурировать проект с того места, где вы находитесь.',
//       },
//       {
//         question: 'Работаете ли вы с multilingual-продуктами и Arabic / RTL?',
//         answer: 'Да. У нас есть опыт работы с многоязычными продуктами, включая арабский язык и RTL-интерфейсы. Это учитывается в оценке сложности.',
//       },
//       {
//         question: 'Подписываете ли вы NDA?',
//         answer: 'Да. Если вам нужно защитить чувствительную информацию до отправки материалов — укажите это в форме, и мы подготовим NDA.',
//       },
//       {
//         question: 'Получу ли я сразу фиксированную цену?',
//         answer: 'Вы получите стартовую стоимость и ориентир. Финальная цена зависит от глубины проработки, числа ролей, модулей и дополнительных требований. Мы не начинаем работу без согласованного scope.',
//       },
//       {
//         question: 'Что делать, если я не уверен, какой формат мне нужен?',
//         answer: 'Заполните brief или загрузите материалы — мы предложим подходящий формат на основе ваших задач, сроков и бюджета.',
//       },
//     ],
//   },

//   en: {
//     blockType: 'faqProposal',
//     title: 'Frequently Asked Questions',
//     items: [
//       {
//         question: 'Do I need to book a call first?',
//         answer: 'No. We support a no-call-first format. You can start by submitting a brief or uploading materials. Most questions are resolved through email and asynchronous communication. A call is only needed for complex cases, and only by mutual agreement.',
//       },
//       {
//         question: 'Can I start with rough notes or links?',
//         answer: 'Absolutely. You can upload any materials you have — notes, screenshots, existing screens, PRD, or just a description. We will help structure your project from wherever you are.',
//       },
//       {
//         question: 'What if the scope is still unclear?',
//         answer: 'That is perfectly fine. Fill in the brief or upload what you have — we will help clarify the scope and recommend an appropriate format of work based on your goals and constraints.',
//       },
//       {
//         question: 'Is this suitable for redesign projects?',
//         answer: 'Yes. We work with website redesigns, digital product redesigns, and UX/UI improvements. You can share existing screens, user feedback, or analytics, and we will structure the improvement plan.',
//       },
//       {
//         question: 'Can agencies and integrators use this page too?',
//         answer: 'Yes. We work with agencies, integrators, and consultants who prepare materials for their own clients. All deliverables can be white-labeled under your brand.',
//       },
//       {
//         question: 'What happens after I submit?',
//         answer: 'We review your brief or materials, identify the right format of work, estimate a timeline range and starting price direction, and propose the most practical next step.',
//       },
//       {
//         question: 'Do you sign NDAs?',
//         answer: 'Yes. If you need to protect sensitive information before sharing materials, indicate this in the form and we will prepare an NDA for your review.',
//       },
//       {
//         question: 'How quickly do you respond?',
//         answer: 'Most submissions receive a response within 1–2 business days. Complex requests may take slightly longer as we prepare a thoughtful recommendation.',
//       },
//     ],
//   },

//   ar: {
//     blockType: 'faqProposal',
//     title: 'الأسئلة الشائعة',
//     items: [
//       {
//         question: 'هل أحتاج إلى حجز مكالمة أولاً؟',
//         answer: 'لا. ندعم صيغة بدون مكالمة أولية. يمكنك البدء بإرسال brief أو رفع مواد. معظم الأسئلة تُحل عبر البريد الإلكتروني والتواصل غير المتزامن. المكالمة تُطلب فقط للحالات المعقدة وبالاتفاق المتبادل.',
//       },
//       {
//         question: 'هل يمكنني البدء من خلال ملاحظات أولية أو روابط فقط؟',
//         answer: 'بالتأكيد. يمكنك رفع أي مواد متوفرة لديك — ملاحظات، لقطات شاشة، شاشات قائمة، PRD، أو مجرد وصف. سنساعدك على هيكلة مشروعك من أي نقطة بداية.',
//       },
//       {
//         question: 'ماذا لو كان نطاق المشروع غير واضح بعد؟',
//         answer: 'هذا طبيعي تماماً. املأ الـ brief أو ارفع ما لديك — سنساعدك على توضيح النطاق والتوصية بصيغة عمل مناسبة بناءً على أهدافك وقيودك.',
//       },
//       {
//         question: 'هل هذه الصفحة مناسبة لمشاريع إعادة التصميم؟',
//         answer: 'نعم. نعمل على إعادة تصميم المواقع والمنتجات الرقمية وتحسينات UX/UI. يمكنك مشاركة الشاشات الحالية أو ملاحظات المستخدمين أو التحليلات، وسنقوم بهيكلة خطة التحسين.',
//       },
//       {
//         question: 'هل يمكن للوكالات وشركاء التنفيذ استخدام هذه الصفحة أيضاً؟',
//         answer: 'نعم. نعمل مع الوكالات وشركات التكامل والمستشارين الذين يحضّرون مواد لعملائهم. جميع المخرجات يمكن تقديمها تحت علامتك التجارية (White-label).',
//       },
//       {
//         question: 'ماذا يحدث بعد أن أرسل الطلب؟',
//         answer: 'نراجع الـ brief أو المواد، نحدد صيغة العمل المناسبة، نقدر نطاقاً زمنياً واتجاهاً أولياً للسعر، ونقترح الخطوة التالية الأكثر عملية.',
//       },
//       {
//         question: 'هل توقّعون NDA؟',
//         answer: 'نعم. إذا كنت بحاجة إلى حماية معلومات حساسة قبل مشاركة المواد، أشر إلى ذلك في النموذج وسنعد NDA لمراجعتك.',
//       },
//       {
//         question: 'كم تستغرقون عادة للرد؟',
//         answer: 'معظم الطلبات تتلقى رداً خلال 1-2 يوم عمل. الطلبات المعقدة قد تستغرق وقتاً أطول قليلاً لأننا نعد توصية مدروسة.',
//       },
//     ],
//   },
// }

// const FINAL_SUPPORT_PROPOSAL_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'finalSupportProposal',
//     title: 'Не хотите заполнять всё вручную?',
//     description:
//       'Пришлите материалы проекта — мы всё равно сможем подготовить структурированное предложение.',
//     uploadButtonLabel: 'Загрузить материалы',
//     pricingButtonLabel: 'Посмотреть форматы работы',
//     pricingPageKey: 'pricing',
//   },
//   en: {
//     blockType: 'finalSupportProposal',
//     title: "Don't want to fill everything manually?",
//     description:
//       "Send over your project materials — we'll still be able to prepare a structured proposal.",
//     uploadButtonLabel: 'Upload Materials',
//     pricingButtonLabel: 'View Work Formats',
//     pricingPageKey: 'pricing',
//   },
//   ar: {
//     blockType: 'finalSupportProposal',
//     title: 'لا تريد تعبئة كل شيء يدوياً؟',
//     description:
//       'أرسل مواد المشروع وسنظل قادرين على إعداد عرض منظم ومناسب لك.',
//     uploadButtonLabel: 'ارفع المواد',
//     pricingButtonLabel: 'اطلع على صيغ العمل',
//     pricingPageKey: 'pricing',
//   },
// }

// function upsertBlock(layout: BlockData[], block: BlockData): BlockData[] {
//   const existingIndex = layout.findIndex(
//     (item) => item?.blockType === block?.blockType,
//   )

//   if (existingIndex === -1) {
//     return [...layout, block]
//   }

//   const nextLayout = [...layout]
//   nextLayout[existingIndex] = {
//     ...nextLayout[existingIndex],
//     ...block,
//   }

//   return nextLayout
// }

// async function getPageId(payload: Awaited<ReturnType<typeof getPayload>>) {
//   const result = await payload.find({
//     collection: 'pages',
//     where: {
//       pageKey: {
//         equals: GET_PROPOSAL_PAGE_KEY,
//       },
//     },
//     limit: 1,
//     depth: 0,
//   })

//   const page = result.docs[0]

//   if (!page) {
//     throw new Error(`Page "${GET_PROPOSAL_PAGE_KEY}" not found`)
//   }

//   return page.id
// }

// async function getLayout(
//   payload: Awaited<ReturnType<typeof getPayload>>,
//   pageId: string | number,
//   locale: Locale,
// ): Promise<BlockData[]> {
//   const page = await payload.findByID({
//     collection: 'pages',
//     id: pageId,
//     locale,
//     fallbackLocale: 'none',
//     depth: 0,
//   })

//   return Array.isArray(page?.layout) ? (page.layout as BlockData[]) : []
// }

// async function seedProposalFlowProposalForLocale(
//   payload: Awaited<ReturnType<typeof getPayload>>,
//   pageId: string | number,
//   locale: Locale,
// ) {
//   const layout = await getLayout(payload, pageId, locale)

//   await payload.update({
//     collection: 'pages',
//     id: pageId,
//     locale,
//     depth: 0,
//     data: {
//       layout: upsertBlock(layout, FINAL_SUPPORT_PROPOSAL_SEED[locale]),
//     },
//   })
// }

// async function run() {
//   const payload = await getPayload({ config })
//   const pageId = await getPageId(payload)

//   await seedProposalFlowProposalForLocale(payload, pageId, 'ru')
//   await seedProposalFlowProposalForLocale(payload, pageId, 'en')
//   await seedProposalFlowProposalForLocale(payload, pageId, 'ar')

//   console.log('ProposalFlowProposal seeded successfully')
// }

// run()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error)
//     process.exit(1)
//   })