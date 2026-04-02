// import 'dotenv/config'

// import { getPayload } from 'payload'
// import config from '../payload.config'

// type Locale = 'ru' | 'en' | 'ar'

// type BlockData = Record<string, unknown> & {
//   blockType: string
//   id?: string
// }

// const HERO_PRICING_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'heroPricing',
//     eyebrow: 'Форматы и стоимость',
//     title: 'Цены и форматы работы',
//     description:
//       'Эти форматы подходят для проектов разного типа — от дизайна сайта или редизайна корпоративного сайта до mobile app, клиентского портала или интерфейса сложной B2B-системы.',
//     descriptionSecondary:
//       'Работаем с сайтами, digital-системами, порталами, dashboards и мобильными приложениями. Сначала структура и объём — потом prototype и материалы для разработки.',
//     trustLabels: [
//       { label: 'Структурированная работа' },
//       { label: 'Готовность к разработке' },
//       { label: 'Партнёрский формат' },
//       { label: 'Прямое взаимодействие' },
//     ],
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Посмотреть метод',
//     secondaryPageKey: 'method',
//   },
//   en: {
//     blockType: 'heroPricing',
//     eyebrow: 'Formats & Pricing',
//     title: 'Pricing and engagement formats',
//     description:
//       'Atelier Meridian works in a small number of structured formats — from product framing and investor-ready preparation to build-ready prototypes and white-label support for partners.',
//     descriptionSecondary:
//       'Suitable for websites, redesign, digital systems, portals, dashboards, and mobile apps.',
//     trustLabels: [
//       { label: 'Structured delivery' },
//       { label: 'Build-ready output' },
//       { label: 'Partner-level support' },
//       { label: 'Direct collaboration' },
//     ],
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Solutions',
//     secondaryPageKey: 'solutions',
//   },
//   ar: {
//     blockType: 'heroPricing',
//     eyebrow: 'صيغ العمل والأسعار',
//     title: 'الأسعار وصيغ العمل',
//     description:
//       'يعمل Atelier Meridian من خلال عدد محدود من الصيغ الواضحة والمنظمة — من هيكلة المنتج في مراحله الأولى إلى النماذج الأولية الجاهزة للعرض أو للتطوير، وصولاً إلى دعم الشركاء بنظام مرن واحترافي.',
//     descriptionSecondary:
//       'مناسب للمواقع، وإعادة التصميم، والأنظمة الرقمية، والبوابات، ولوحات التحكم، وتطبيقات الجوال.',
//     trustLabels: [
//       { label: 'تسليم منظم' },
//       { label: 'مخرجات جاهزة للتطوير' },
//       { label: 'دعم على مستوى الشركاء' },
//       { label: 'تعاون مباشر' },
//     ],
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الحلول',
//     secondaryPageKey: 'solutions',
//   },
// }

// const POSITIONING_BLOCK_PRICING_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'positioningBlockPricing',
//     eyebrow: 'Понятный процесс работы',
//     title: 'Не прайс на дизайн, а понятные форматы продуктовой работы',
//     description:
//       'Atelier Meridian продаёт не набор экранов, а структурированный результат — от понимания продукта до готовности к передаче в разработку.',
//     descriptionSecondary:
//       'Каждый формат — это законченный этап с понятным результатом, а не почасовая работа с размытым объёмом.',
//     rightTitle: 'Работа напрямую с командой',
//     deliveryElements: [
//       {
//         title: 'Прояснение структуры продукта',
//         description: 'Роли, приоритеты и логика',
//       },
//       {
//         title: 'Пользовательские сценарии',
//         description: 'Ключевые flows и точки перехода',
//       },
//       {
//         title: 'Архитектура экранов',
//         description: 'Карта экранов и состояний',
//       },
//       {
//         title: 'Интерактивный прототип',
//         description: 'Кликабельный preview продукта',
//       },
//       {
//         title: 'Визуальное направление',
//         description: 'Стиль и компоненты',
//       },
//       {
//         title: 'Передача в разработку',
//         description: 'Готовность к следующему этапу',
//       },
//     ],
//   },
//   en: {
//     blockType: 'positioningBlockPricing',
//     eyebrow: 'Clear process',
//     title: 'Not just pricing, but clear formats of work',
//     description:
//       'Atelier Meridian does not sell isolated screens. We structure product logic, user flows, interface direction, and tangible outputs that make the next stage easier.',
//     descriptionSecondary:
//       'Whether that means investor presentation, client alignment, or development handoff — each format is a complete milestone with a clear result.',
//     rightTitle: 'Direct collaboration with the team',
//     pillars: [
//       {
//         label: 'Clear scope',
//         description: 'Defined boundaries',
//       },
//       {
//         label: 'Premium output',
//         description: 'Quality materials',
//       },
//       {
//         label: 'Defined next step',
//         description: 'What happens after',
//       },
//     ],
//     deliveryElements: [
//       {
//         title: 'Product structure clarification',
//         description: 'Scenarios, roles, and priorities',
//       },
//       {
//         title: 'User flows',
//         description: 'Key paths and transitions',
//       },
//       {
//         title: 'Screen architecture',
//         description: 'Screen map and states',
//       },
//       {
//         title: 'Interactive prototype',
//         description: 'Clickable product preview',
//       },
//       {
//         title: 'Visual direction',
//         description: 'Style and components',
//       },
//       {
//         title: 'Development handoff',
//         description: 'Ready for the next stage',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'positioningBlockPricing',
//     eyebrow: 'عملية واضحة',
//     title: 'ليست أسعاراً فقط، بل صيغ عمل واضحة',
//     description:
//       'لا يبيع Atelier Meridian شاشات منفصلة أو مخرجات سطحية. نحن نبني منطق المنتج، ومسارات المستخدم، والاتجاه البصري، والمخرجات التي تجعل المرحلة التالية أوضح — سواء كان الهدف عرضاً للمستثمرين أو توافقاً داخلياً أو انتقالاً منظماً إلى التطوير.',
//     rightTitle: 'تعاون مباشر مع الفريق',
//     pillars: [
//       {
//         label: 'نطاق عمل واضح',
//         description: 'حدود محددة',
//       },
//       {
//         label: 'مخرجات متميزة',
//         description: 'مواد عالية الجودة',
//       },
//       {
//         label: 'خطوة تالية محددة',
//         description: 'ما يحدث بعد ذلك',
//       },
//     ],
//     deliveryElements: [
//       {
//         title: 'توضيح هيكل المنتج',
//         description: 'السيناريوهات والأدوار والأولويات',
//       },
//       {
//         title: 'مسارات المستخدم',
//         description: 'المسارات الرئيسية ونقاط الانتقال',
//       },
//       {
//         title: 'هندسة الشاشات',
//         description: 'خريطة الشاشات والحالات',
//       },
//       {
//         title: 'نموذج تفاعلي',
//         description: 'معاينة المنتج القابلة للنقر',
//       },
//       {
//         title: 'الاتجاه البصري',
//         description: 'الأسلوب والمكونات',
//       },
//       {
//         title: 'تسليم للتطوير',
//         description: 'جاهز للمرحلة التالية',
//       },
//     ],
//   },
// }

// const PACKAGE_CARDS_PRICING_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'packageCardsPricing',
//     eyebrow: 'Форматы работы',
//     title: 'Три формата работы',
//     description:
//       'Выберите подходящий формат — или расскажите о проекте, и мы порекомендуем оптимальный.',
//     contextLine:
//       'Эти форматы подходят для проектов разного типа — от дизайна сайта или редизайна корпоративного сайта до client portal, B2B systems, SaaS interfaces и mobile apps.',
//     forWhomLabel: 'Для кого',
//     includesLabel: 'Что входит',
//     packages: [
//       {
//         packageKey: 'framing',
//         title: 'Product Framing Sprint',
//         subtitle: 'Структурирование продукта до начала дизайна и разработки',
//         price: '$5,400',
//         priceNote: 'от',
//         timeline: 'Ориентир: 1–2 недели',
//         forWhom:
//           'Для founders, startup-команд и B2B-проектов, которым нужно сначала собрать продуктовую логику, роли, сценарии и scope.',
//         includes: [
//           { label: 'Структурная рамка проекта' },
//           { label: 'Роли и права доступа' },
//           { label: 'Ключевые пользовательские сценарии' },
//           { label: 'Экранная карта продукта' },
//           { label: 'Приоритеты и логика модулей' },
//           { label: 'Рекомендации по следующему этапу' },
//         ],
//         primaryButtonLabel: 'Выбрать этот формат',
//         primaryPageKey: 'get-proposal',
//         secondaryLinkLabel: 'Подходит для старта продукта',
//         secondaryPageKey: 'for-startups',
//         featured: false,
//       },
//       {
//         packageKey: 'prototype',
//         title: 'Build-Ready Prototype',
//         subtitle: 'Прототип и ключевые интерфейсы для презентации или передачи в разработку',
//         price: '$6,900',
//         priceNote: 'от',
//         timeline: 'Ориентир: 2–4 недели',
//         forWhom:
//           'Для команд, которым нужен premium-прототип, понятная структура экранов и материалы, которые можно использовать для презентации или передачи в разработку.',
//         includes: [
//           { label: 'Продуктовая логика и user flows' },
//           { label: 'Набор ключевых интерфейсов' },
//           { label: 'Интерактивный прототип' },
//           { label: 'Визуальное направление' },
//           { label: 'Базовая система компонентов' },
//           { label: 'Сводка для передачи в разработку' },
//         ],
//         primaryButtonLabel: 'Получить предложение',
//         primaryPageKey: 'get-proposal',
//         secondaryLinkLabel: 'Посмотреть метод работы',
//         secondaryPageKey: 'method',
//         featured: true,
//       },
//       {
//         packageKey: 'partner',
//         title: 'White-Label Partner Desk',
//         subtitle: 'Партнёрский формат для агентств, integrators и delivery-команд',
//         price: '$6,500',
//         priceNote: 'от',
//         timeline: 'По scope проекта / возможен постоянный формат',
//         forWhom:
//           'Для партнёров, integrators и digital-команд, которым нужен внешний premium-партнёр по product architecture, UX и интерфейсам.',
//         includes: [
//           { label: 'White-label поддержка' },
//           { label: 'Упаковка концепций и presale-материалов' },
//           { label: 'Prototype и interface delivery' },
//           { label: 'Async-взаимодействие' },
//           { label: 'Структурные материалы для клиента' },
//           { label: 'Сводка для команды разработки' },
//         ],
//         primaryButtonLabel: 'Обсудить формат',
//         primaryPageKey: 'get-proposal',
//         secondaryLinkLabel: 'Подробнее для партнёров',
//         secondaryPageKey: 'for-partners',
//         featured: false,
//       },
//     ],
//   },

//   en: {
//     blockType: 'packageCardsPricing',
//     eyebrow: 'Engagement formats',
//     title: 'Three ways to work together',
//     description:
//       'Choose the format that fits your stage — or tell us about your project, and we will recommend the right one.',
//     contextLine:
//       'These formats are suitable for a range of digital projects — from corporate websites and website redesign to client portals, B2B systems, SaaS interfaces, and mobile apps.',
//     forWhomLabel: 'Who it is for',
//     includesLabel: 'What is included',
//     packages: [
//       {
//         packageKey: 'framing',
//         title: 'Product Framing Sprint',
//         subtitle: 'Structure the product before design and development begin',
//         price: '$5,400',
//         priceNote: 'from',
//         timeline: 'Typical timeline: 1–2 weeks',
//         forWhom:
//           'For founders, startup teams, and B2B projects that need clarity around product logic, roles, user flows, and scope before moving forward.',
//         includes: [
//           { label: 'Project structure' },
//           { label: 'Roles and permissions logic' },
//           { label: 'Key user flows' },
//           { label: 'Screen map / screen matrix' },
//           { label: 'Priorities and product scope logic' },
//           { label: 'Recommendations for the next stage' },
//         ],
//         primaryButtonLabel: 'Choose this format',
//         primaryPageKey: 'get-proposal',
//         secondaryLinkLabel: 'Ideal for product launch',
//         secondaryPageKey: 'for-startups',
//         featured: false,
//       },
//       {
//         packageKey: 'prototype',
//         title: 'Build-Ready Prototype',
//         subtitle: 'Prototype and key interfaces for presentation or development',
//         price: '$6,900',
//         priceNote: 'from',
//         timeline: 'Typical timeline: 2–4 weeks',
//         forWhom:
//           'For teams that need a premium prototype, a clear screen structure, and materials that can support product delivery or handoff to development.',
//         includes: [
//           { label: 'Product logic and user flows' },
//           { label: 'Key interface set' },
//           { label: 'Clickable prototype' },
//           { label: 'Visual direction' },
//           { label: 'Basic component system' },
//           { label: 'Materials for development' },
//         ],
//         primaryButtonLabel: 'Get Proposal',
//         primaryPageKey: 'get-proposal',
//         secondaryLinkLabel: 'See how we work',
//         secondaryPageKey: 'method',
//         featured: true,
//       },
//       {
//         packageKey: 'partner',
//         title: 'White-Label Partner Desk',
//         subtitle: 'Partner model for agencies, integrators, and delivery teams',
//         price: '$6,500',
//         priceNote: 'from',
//         timeline: 'Depends on project scope / ongoing format possible',
//         forWhom:
//           'For agencies, integrators, and delivery teams that need an external premium partner for product structure, UX, and interface work.',
//         includes: [
//           { label: 'White-label support' },
//           { label: 'Concept and presale packaging' },
//           { label: 'Prototype and interface delivery' },
//           { label: 'Async collaboration' },
//           { label: 'Structured outputs for the client' },
//           { label: 'Summary for the development team' },
//         ],
//         primaryButtonLabel: 'Discuss this format',
//         primaryPageKey: 'get-proposal',
//         secondaryLinkLabel: 'More for partners',
//         secondaryPageKey: 'for-partners',
//         featured: false,
//       },
//     ],
//   },

//   ar: {
//     blockType: 'packageCardsPricing',
//     eyebrow: 'صيغ العمل',
//     title: 'ثلاث طرق للعمل معاً',
//     description:
//       'اختر الصيغة التي تناسب مرحلتك — أو أخبرنا عن مشروعك وسنقترح عليك الصيغة المناسبة.',
//     contextLine:
//       'هذه الصيغ مناسبة لأنواع مختلفة من المشاريع الرقمية — من مواقع الشركات وإعادة تصميم المواقع إلى بوابات العملاء والأنظمة الرقمية وواجهات SaaS وتطبيقات الجوال.',
//     forWhomLabel: 'لمن تناسب',
//     includesLabel: 'ما تتضمنه',
//     packages: [
//       {
//         packageKey: 'framing',
//         title: 'Sprint لهيكلة المنتج',
//         subtitle: 'لبناء وضوح المنتج قبل بدء التصميم والتطوير',
//         price: '$5,400',
//         priceNote: 'يبدأ من',
//         timeline: 'المدة المعتادة: من أسبوع إلى أسبوعين',
//         forWhom:
//           'مناسب للمؤسسين وفرق الشركات الناشئة ومشاريع B2B التي تحتاج إلى وضوح أكبر حول منطق المنتج والأدوار ومسارات الاستخدام وحدود النطاق قبل الانتقال إلى المرحلة التالية.',
//         includes: [
//           { label: 'هيكل المشروع' },
//           { label: 'منطق الأدوار والصلاحيات' },
//           { label: 'مسارات الاستخدام الأساسية' },
//           { label: 'خريطة أو مصفوفة الشاشات' },
//           { label: 'أولويات المنتج وحدود النطاق' },
//           { label: 'توصيات للمرحلة التالية' },
//         ],
//         primaryButtonLabel: 'اختر هذه الصيغة',
//         primaryPageKey: 'get-proposal',
//         secondaryLinkLabel: 'مثالي لإطلاق المنتجات',
//         secondaryPageKey: 'for-startups',
//         featured: false,
//       },
//       {
//         packageKey: 'prototype',
//         title: 'نموذج أولي جاهز للتطوير',
//         subtitle: 'نموذج أولي وواجهات أساسية للعرض أو للتنفيذ',
//         price: '$6,900',
//         priceNote: 'يبدأ من',
//         timeline: 'المدة المعتادة: من أسبوعين إلى أربعة أسابيع',
//         forWhom:
//           'مناسب للفرق التي تحتاج إلى نموذج أولي متميز وهيكل واضح للشاشات ومخرجات يمكن الاعتماد عليها في العرض أو في الانتقال إلى التطوير.',
//         includes: [
//           { label: 'منطق المنتج ومسارات المستخدم' },
//           { label: 'مجموعة الواجهات الأساسية' },
//           { label: 'نموذج أولي قابل للنقر' },
//           { label: 'اتجاه بصري' },
//           { label: 'نظام مكونات أساسي' },
//           { label: 'مواد جاهزة للتطوير' },
//         ],
//         primaryButtonLabel: 'اطلب عرضاً',
//         primaryPageKey: 'get-proposal',
//         secondaryLinkLabel: 'شاهد طريقة عملنا',
//         secondaryPageKey: 'method',
//         featured: true,
//       },
//       {
//         packageKey: 'partner',
//         title: 'صيغة الشراكة للوكالات وفرق التنفيذ',
//         subtitle: 'نموذج عمل للشركاء والوكالات وشركات التنفيذ',
//         price: '$6,500',
//         priceNote: 'يبدأ من',
//         timeline: 'بحسب نطاق المشروع / مع إمكانية التعاون المستمر',
//         forWhom:
//           'مناسب للوكالات وشركاء التنفيذ والفرق التي تحتاج إلى شريك خارجي متميز في هيكلة المنتج والواجهات ودعم المشاريع الموجهة للعملاء.',
//         includes: [
//           { label: 'دعم بنظام white-label' },
//           { label: 'إعداد concept وعروض تمهيدية' },
//           { label: 'نماذج أولية ومخرجات واجهات' },
//           { label: 'تعاون مرن وعملي' },
//           { label: 'مخرجات منظمة للعميل أو لفريق التطوير' },
//         ],
//         primaryButtonLabel: 'ناقش هذه الصيغة',
//         primaryPageKey: 'get-proposal',
//         secondaryLinkLabel: 'المزيد للشركاء',
//         secondaryPageKey: 'for-partners',
//         featured: false,
//       },
//     ],
//   },
// }

// const CHOOSING_GUIDE_PRICING_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'choosingGuidePricing',
//     eyebrow: 'Рекомендации',
//     title: 'Как понять, какой формат подходит вам',
//     situationLabel: 'Ситуация',
//     solutionLabel: 'Решение',
//     recommendedLabel: 'Рекомендуем',
//     buttonLabel: 'Выбрать',
//     items: [
//       {
//         condition: 'Если у вас ещё нет чёткой структуры продукта',
//         problem:
//           'Идея есть, но непонятно, как разложить её на роли, экраны и сценарии использования',
//         solution:
//           'Product Framing Sprint поможет структурировать продукт до начала дизайна или разработки',
//         package: 'Product Framing Sprint',
//         packageKey: 'framing',
//         pageKey: 'get-proposal',
//       },
//       {
//         condition: 'Если нужно показать продукт или передать в разработку',
//         problem:
//           'Нужен прототип для инвесторов, презентации или интерфейсы, готовые к разработке',
//         solution:
//           'Build-Ready Prototype включает полный набор: сценарии, экраны, прототип, сводку для разработки',
//         package: 'Build-Ready Prototype',
//         packageKey: 'prototype',
//         pageKey: 'get-proposal',
//       },
//       {
//         condition: 'Если вы агентство или integrator',
//         problem:
//           'Нужен партнёр для продуктовой и UX-работы без найма штатной команды',
//         solution:
//           'White-Label Partner Desk — партнёрская модель с быстрой упаковкой и async-поддержкой',
//         package: 'White-Label Partner Desk',
//         packageKey: 'partner',
//         pageKey: 'get-proposal',
//       },
//     ],
//   },

//   en: {
//     blockType: 'choosingGuidePricing',
//     eyebrow: 'Recommendations',
//     title: 'How to choose the right format',
//     situationLabel: 'Situation',
//     solutionLabel: 'Solution',
//     recommendedLabel: 'Recommended',
//     buttonLabel: 'Choose',
//     items: [
//       {
//         condition: 'If the product is still unclear',
//         problem:
//           'You have an idea, but it is not yet clear how to break it down into roles, screens, and user scenarios',
//         solution:
//           'Product Framing Sprint helps structure the product before design or development begins',
//         package: 'Product Framing Sprint',
//         packageKey: 'framing',
//         pageKey: 'get-proposal',
//       },
//       {
//         condition: 'If you need something to present or hand over',
//         problem:
//           'You need a prototype for investors, a client presentation, or interfaces ready for development',
//         solution:
//           'Build-Ready Prototype includes the full set: scenarios, screens, prototype, and dev summary',
//         package: 'Build-Ready Prototype',
//         packageKey: 'prototype',
//         pageKey: 'get-proposal',
//       },
//       {
//         condition: 'If you are an agency or integrator',
//         problem:
//           'You need a partner for product and UX work without hiring an in-house team',
//         solution:
//           'White-Label Partner Desk — a partnership model with fast packaging and async support',
//         package: 'White-Label Partner Desk',
//         packageKey: 'partner',
//         pageKey: 'get-proposal',
//       },
//     ],
//   },

//   ar: {
//     blockType: 'choosingGuidePricing',
//     eyebrow: 'توصيات',
//     title: 'كيف تختار الصيغة الأنسب',
//     situationLabel: 'الحالة',
//     solutionLabel: 'الحل',
//     recommendedLabel: 'نوصي بـ',
//     buttonLabel: 'اختر',
//     items: [
//       {
//         condition: 'إذا كان المنتج ما زال غير واضح',
//         problem:
//           'لديك فكرة، لكن ليس واضحاً بعد كيف تقسمها إلى أدوار وشاشات وسيناريوهات استخدام',
//         solution:
//           'ابدأ بـ Sprint لهيكلة المنتج إذا كنت تحتاج إلى وضوح في المنطق والأدوار والمسارات قبل الانتقال إلى الواجهة أو التطوير',
//         package: 'Sprint لهيكلة المنتج',
//         packageKey: 'framing',
//         pageKey: 'get-proposal',
//       },
//       {
//         condition: 'إذا كنت تحتاج إلى شيء جاهز للعرض أو للتنفيذ',
//         problem:
//           'تحتاج إلى نموذج أولي للمستثمرين أو عرض للعميل أو واجهات جاهزة للتطوير',
//         solution:
//           'اختر النموذج الأولي الجاهز للتطوير إذا كنت تحتاج إلى prototype قوي وواجهات رئيسية ومخرجات قابلة للاستخدام في العرض أو التسليم',
//         package: 'نموذج أولي جاهز للتطوير',
//         packageKey: 'prototype',
//         pageKey: 'get-proposal',
//       },
//       {
//         condition: 'إذا كنت وكالة أو شريك تنفيذ',
//         problem:
//           'تحتاج إلى شريك في المنتج والـ UX من دون بناء فريق داخلي',
//         solution:
//           'اختر صيغة الشراكة إذا كنت تحتاج إلى طبقة خارجية متميزة لدعم presale أو مشاريع العملاء أو التنفيذ بنظام white-label',
//         package: 'صيغة الشراكة White-Label',
//         packageKey: 'partner',
//         pageKey: 'get-proposal',
//       },
//     ],
//   },
// }

// const DELIVERABLES_PREVIEW_PRICING_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'deliverablesPreviewPricing',
//     eyebrow: 'Состав работ',
//     title: 'Что входит в каждый формат работы',
//     description:
//       'Каждый артефакт — готовый к использованию материал, а не промежуточный набросок. Реальные документы для продуктовой работы и передачи в разработку.',
//     layoutVariant: 'visuals',
//     topLinkLabel: 'Посмотреть концепты',
//     topLinkPageKey: 'concepts',
//     items: [
//       {
//         name: 'Структура проекта',
//         subtitle: 'Фиксирует цели, ограничения и приоритеты',
//         visual: 'structure',
//       },
//       {
//         name: 'Пользовательские сценарии',
//         subtitle: 'Показывает ключевые сценарии и точки перехода',
//         visual: 'scenarios',
//       },
//       {
//         name: 'Экранная карта продукта',
//         subtitle: 'Собирает логику экранов в единую систему',
//         visual: 'screen-map',
//       },
//       {
//         name: 'Интерактивный прототип',
//         subtitle: 'Даёт visual preview будущего продукта',
//         visual: 'prototype',
//       },
//       {
//         name: 'Базовая система компонентов',
//         subtitle: 'Задаёт основу интерфейсной системы',
//         visual: 'design-system',
//       },
//       {
//         name: 'Материалы для передачи в разработку',
//         subtitle: 'Помогает команде перейти к разработке',
//         visual: 'dev-materials',
//       },
//     ],
//     footerNote: 'Это реальные, серьёзные материалы — не просто наборы слайдов.',
//     footerLinkLabel: 'Получить предложение',
//     footerLinkPageKey: 'get-proposal',
//   },
//   en: {
//     blockType: 'deliverablesPreviewPricing',
//     eyebrow: 'Deliverables',
//     title: 'What clients receive',
//     description:
//       'Every format includes tangible outputs — not just concepts, but materials that support the next stage of work.',
//     layoutVariant: 'simple',
//     items: [
//       {
//         name: 'Project Structure',
//         subtitle: 'Captures goals, constraints, and priorities',
//       },
//       {
//         name: 'User Flows',
//         subtitle: 'Shows critical user paths and transitions',
//       },
//       {
//         name: 'Screen Matrix',
//         subtitle: 'Organizes screen logic into one system',
//       },
//       {
//         name: 'Clickable Prototype',
//         subtitle: 'Makes the product tangible before development',
//       },
//       {
//         name: 'Basic Component System',
//         subtitle: 'Sets the foundation for interface consistency',
//       },
//       {
//         name: 'Materials for Development',
//         subtitle: 'Helps move cleanly into development',
//       },
//     ],
//     footerLinkLabel: 'See all solutions and formats',
//     footerLinkPageKey: 'solutions',
//   },
//   ar: {
//     blockType: 'deliverablesPreviewPricing',
//     eyebrow: 'المخرجات',
//     title: 'ما الذي يحصل عليه العميل',
//     description:
//       'كل صيغة تتضمن مخرجات ملموسة — ليست مجرد مفاهيم، بل مواد تدعم المرحلة التالية من العمل.',
//     layoutVariant: 'simple',
//     items: [
//       {
//         name: 'هيكل المشروع',
//         subtitle: 'يوضح الأهداف والقيود والأولويات',
//       },
//       {
//         name: 'مسارات المستخدم',
//         subtitle: 'يبين المسارات الرئيسية ونقاط الانتقال',
//       },
//       {
//         name: 'مصفوفة الشاشات',
//         subtitle: 'يجمع الشاشات في نظام منتج واحد',
//       },
//       {
//         name: 'نموذج أولي قابل للنقر',
//         subtitle: 'يجعل المنتج ملموساً قبل التطوير',
//       },
//       {
//         name: 'نظام مكونات أساسي',
//         subtitle: 'يدعم اتساق الواجهة',
//       },
//       {
//         name: 'مواد التسليم للتطوير',
//         subtitle: 'يسهل الانتقال المنظم إلى التطوير',
//       },
//     ],
//     footerLinkLabel: 'اطلع على جميع الحلول والصيغ',
//     footerLinkPageKey: 'solutions',
//   },
// }

// const PRICE_EXPLANATION_PRICING_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'priceExplanationPricing',
//     eyebrow: 'Почему так',
//     title: 'Почему это стоит столько',
//     description:
//       'Atelier Meridian стоит ниже крупных агентств не потому, что делает меньше, а потому что работает без лишних накладных расходов.',
//     descriptionSecondary:
//       'Premium-результат с более рациональной моделью работы. Быстрее за счёт структуры, а не компромисса по качеству.',
//     quote:
//       '«Мы не продаём часы. Мы продаём результат — структурированный продукт, готовый к следующему этапу.»',
//     points: [
//       {
//         title: 'Опытный специалист ведёт проект',
//         description: 'Работу ведёт senior, а не джуниор под присмотром',
//       },
//       {
//         title: 'Ускоренные внутренние процессы',
//         description: 'AI-assisted workflow без потери качества',
//       },
//       {
//         title: 'Структурированные форматы работы',
//         description: 'Понятные packages вместо размытого почасового биллинга',
//       },
//       {
//         title: 'Без лишних слоёв',
//         description: 'Прямая работа без account-менеджеров и промежуточных согласований',
//       },
//       {
//         title: 'Быстрая итерация',
//         description: 'Скорость за счёт структуры, а не компромисса по качеству',
//       },
//     ],
//   },
//   en: {
//     blockType: 'priceExplanationPricing',
//     eyebrow: 'Why it is priced this way',
//     title: 'Premium and efficient',
//     description:
//       'Atelier Meridian is more efficient than a traditional layered agency model because the work is senior-led, AI-accelerated internally, and structured into focused delivery formats.',
//     descriptionSecondary:
//       'This is not about being cheap. It is about delivering premium output with a more rational working model.',
//     quote:
//       '"We do not sell hours. We sell results — a structured product ready for the next stage."',
//     points: [
//       {
//         title: 'Senior-level product thinking',
//         description: 'Work is led by a senior, not a junior under supervision',
//       },
//       {
//         title: 'Fewer layers and less overhead',
//         description: 'Direct work without account managers or intermediate approvals',
//       },
//       {
//         title: 'AI-accelerated internal workflow',
//         description: 'Faster delivery without compromising quality',
//       },
//       {
//         title: 'Structured sprints',
//         description: 'Clear packages instead of vague hourly billing',
//       },
//       {
//         title: 'Premium output, efficient model',
//         description: 'Speed through structure, not through shortcuts',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'priceExplanationPricing',
//     eyebrow: 'لماذا تم تسعير العمل بهذه الطريقة',
//     title: 'متميز وفعّال',
//     description:
//       'يعمل Atelier Meridian بكفاءة أعلى من نموذج الوكالة التقليدية متعدد الطبقات، لأن العمل يقاد بخبرة senior، ويدار داخلياً بأسلوب أكثر مرونة، ويقدَّم ضمن صيغ مركزة وواضحة.',
//     descriptionSecondary:
//       'هذا ليس عن أن نكون رخيصين. بل عن تقديم مخرجات متميزة بنموذج عمل أكثر عقلانية.',
//     quote:
//       '"نحن لا نبيع ساعات. نبيع نتائج — منتج منظم جاهز للمرحلة التالية."',
//     points: [
//       {
//         title: 'تفكير منتجي على مستوى senior',
//         description: 'العمل يقوده خبير متمرس، وليس مبتدئاً تحت إشراف',
//       },
//       {
//         title: 'طبقات تشغيل أقل وفعالية أعلى',
//         description: 'عمل مباشر من دون مديري حسابات أو موافقات وسيطة',
//       },
//       {
//         title: 'عمل منظم على شكل sprints',
//         description: 'حزم واضحة بدلاً من فوترة ساعات غامضة',
//       },
//       {
//         title: 'مخرجات متميزة بنموذج تنفيذ أكثر كفاءة',
//         description: 'سرعة من خلال الهيكلة، وليس من خلال الاختصارات',
//       },
//     ],
//   },
// }

// const NO_CALL_CTA_PRICING_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'noCallCtaPricing',
//     eyebrow: 'Старт без звонков',
//     title: 'Получите рекомендацию по проекту без обязательного стартового звонка',
//     description:
//       'Оставьте brief — мы предложим подходящий формат, ориентир по срокам и стартовую стоимость.',
//     steps: [
//       {
//         icon: 'fileText',
//         step: '01',
//         title: 'Описываете задачу',
//         description: 'Заполняете brief или загружаете материалы',
//       },
//       {
//         icon: 'messageSquare',
//         step: '02',
//         title: 'Получаете рекомендацию',
//         description: 'Подходящий формат, сроки и стоимость',
//       },
//       {
//         icon: 'checkCircle',
//         step: '03',
//         title: 'Переходите к следующему шагу',
//         description: 'Согласование и старт работы',
//       },
//     ],
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Загрузить материалы',
//     secondaryPageKey: 'get-proposal',
//   },

//   en: {
//     blockType: 'noCallCtaPricing',
//     eyebrow: 'Start without calls',
//     title: 'Get a recommendation without a mandatory kickoff call',
//     description:
//       'Tell us what you are building, and we will recommend the right format, a timeline range, and a starting price.',
//     steps: [
//       {
//         icon: 'fileText',
//         step: '01',
//         title: 'Describe your project',
//         description: 'Fill in a brief or upload materials',
//       },
//       {
//         icon: 'messageSquare',
//         step: '02',
//         title: 'Get a recommendation',
//         description: 'Format, timeline range, and starting price',
//       },
//       {
//         icon: 'checkCircle',
//         step: '03',
//         title: 'Move to the next step',
//         description: 'Alignment and project start',
//       },
//     ],
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'View Solutions',
//     secondaryPageKey: 'solutions',
//   },

//   ar: {
//     blockType: 'noCallCtaPricing',
//     eyebrow: 'ابدأ من دون مكالمات',
//     title: 'احصل على توصية من دون الحاجة إلى مكالمة أولية إلزامية',
//     description:
//       'شاركنا بما تعمل عليه، وسنقترح عليك الصيغة الأنسب للعمل، والنطاق الزمني المتوقع، ونقطة بداية السعر، والخطوة التالية.',
//     steps: [
//       {
//         icon: 'fileText',
//         step: '٠١',
//         title: 'صِف مشروعك',
//         description: 'املأ brief أو ارفع المواد',
//       },
//       {
//         icon: 'messageSquare',
//         step: '٠٢',
//         title: 'احصل على توصية',
//         description: 'الصيغة والنطاق الزمني ونقطة بداية السعر',
//       },
//       {
//         icon: 'checkCircle',
//         step: '٠٣',
//         title: 'انتقل إلى الخطوة التالية',
//         description: 'التوافق وبدء المشروع',
//       },
//     ],
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الحلول',
//     secondaryPageKey: 'solutions',
//   },
// }

// const FAQ_PRICING_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'faqPricing',
//     eyebrow: 'Вопросы',
//     title: 'Частые вопросы о форматах и стоимости',
//     items: [
//       {
//         question: 'Что входит в стартовую стоимость?',
//         answer:
//           'Стартовая стоимость покрывает базовый объём работ для типового проекта в рамках каждого формата. Финальная цена зависит от сложности, количества ролей, экранов и специфических требований — и определяется после изучения brief.',
//       },
//       {
//         question: 'Смогу ли я сразу получить фиксированную цену?',
//         answer:
//           'После заявки вы получите диапазон стоимости в течение 24-48 часов. Если нужен точный fixed quote — проводим короткий scoping и даём детальное предложение.',
//       },
//       {
//         question: 'Можно ли начать без созвонов?',
//         answer:
//           'Да, мы работаем async-first. Вы можете прислать brief, получить рекомендацию и согласовать scope полностью письменно. Звонки — только по необходимости и с понятной повесткой.',
//       },
//       {
//         question: 'Какой формат подходит startup-команде?',
//         answer:
//           'Для ранних стадий рекомендуем Product Framing Sprint — это структурирование продукта до начала дизайна или разработки. Если уже нужен прототип для инвесторов или разработчиков — Build-Ready Prototype.',
//       },
//       {
//         question: 'Подходит ли это для B2B-систем и внутренних платформ?',
//         answer:
//           'Да, B2B-системы, порталы и внутренние инструменты — одна из наших специализаций. Мы структурируем сложную бизнес-логику, роли и права доступа, admin-панели и операционные интерфейсы.',
//       },
//       {
//         question: 'Работаете ли вы с white-label проектами?',
//         answer:
//           'Да, White-Label Partner Desk создан специально для агентств и integrators. Вы получаете premium-материалы под своим брендом для ваших клиентов.',
//       },
//       {
//         question: 'Подписываете ли вы NDA?',
//         answer:
//           'Да, это стандартная практика. Отправьте ваш NDA или используйте наш шаблон — подпишем до начала обсуждения деталей проекта.',
//       },
//       {
//         question: 'Что делать, если мне нужен нестандартный объём работ?',
//         answer:
//           'Опишите задачу в brief — мы предложим подходящий формат или создадим индивидуальный scope. Packages — это ориентиры, а не жёсткие рамки.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'faqPricing',
//     eyebrow: 'Questions',
//     title: 'Common questions about formats and pricing',
//     items: [
//       {
//         question: 'What is included in the starting price?',
//         answer:
//           'The starting price covers the base scope for a typical project within each format. The final price depends on complexity, number of roles, screens, and specific requirements — and is determined after we review your brief.',
//       },
//       {
//         question: 'Will I get a fixed price immediately?',
//         answer:
//           'After submitting your brief, you will receive a price range within 24–48 hours. If you need an exact fixed quote, we conduct a short scoping session and provide a detailed proposal.',
//       },
//       {
//         question: 'Can we start without calls?',
//         answer:
//           'Yes, we work async-first. You can submit a brief, receive a recommendation, and align on scope entirely in writing. Calls are optional and always have a clear agenda.',
//       },
//       {
//         question: 'Which format is right for a startup team?',
//         answer:
//           'For early-stage teams, we recommend the Product Framing Sprint — it structures the product before design or development. If you already need a prototype for investors or developers, go with Build-Ready Prototype.',
//       },
//       {
//         question: 'Is this suitable for B2B systems and internal platforms?',
//         answer:
//           'Yes, B2B systems, portals, and internal tools are one of our specializations. We structure complex business logic, roles and permissions, admin panels, and operational interfaces.',
//       },
//       {
//         question: 'Do you work white-label?',
//         answer:
//           'Yes, the White-Label Partner Desk is designed specifically for agencies and integrators. You receive premium materials under your own brand for your clients.',
//       },
//       {
//         question: 'Do you sign NDAs?',
//         answer:
//           'Yes, this is standard practice. Send us your NDA or use our template — we sign before discussing project details.',
//       },
//       {
//         question: 'What if my scope is still unclear?',
//         answer:
//           'Describe your project in the brief — we will recommend the right format or create a custom scope. The packages are starting points, not rigid constraints.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'faqPricing',
//     eyebrow: 'أسئلة شائعة',
//     title: 'أسئلة شائعة حول الصيغ والأسعار',
//     items: [
//       {
//         question: 'ماذا يشمل السعر الابتدائي؟',
//         answer:
//           'السعر الابتدائي يغطي النطاق الأساسي لمشروع نموذجي ضمن كل صيغة. السعر النهائي يعتمد على التعقيد وعدد الأدوار والشاشات والمتطلبات الخاصة — ويُحدد بعد مراجعة brief المشروع.',
//       },
//       {
//         question: 'هل سأحصل على سعر ثابت مباشرة؟',
//         answer:
//           'بعد إرسال brief المشروع، ستحصل على نطاق سعري خلال 24-48 ساعة. إذا كنت تحتاج إلى عرض سعر ثابت ومحدد، نجري جلسة قصيرة لتحديد النطاق ونقدم لك عرضاً تفصيلياً.',
//       },
//       {
//         question: 'هل يمكن البدء من دون مكالمة؟',
//         answer:
//           'نعم، نعمل بأسلوب async-first. يمكنك إرسال brief والحصول على توصية والتوافق على النطاق بالكامل كتابياً. المكالمات اختيارية ودائماً تكون بأجندة واضحة.',
//       },
//       {
//         question: 'أي صيغة تناسب فرق الشركات الناشئة؟',
//         answer:
//           'للفرق في مراحلها الأولى، ننصح بـ Sprint لهيكلة المنتج — فهو يبني هيكل المنتج قبل التصميم أو التطوير. إذا كنت تحتاج بالفعل إلى نموذج أولي للمستثمرين أو المطورين، اختر النموذج الأولي الجاهز للتطوير.',
//       },
//       {
//         question: 'هل هذا مناسب للأنظمة الرقمية ومنصات B2B؟',
//         answer:
//           'نعم، أنظمة B2B والبوابات والأدوات الداخلية هي من تخصصاتنا الأساسية. نحن نهيكل منطق العمل المعقد والأدوار والصلاحيات ولوحات الإدارة والواجهات التشغيلية.',
//       },
//       {
//         question: 'هل تعملون بنظام white-label؟',
//         answer:
//           'نعم، صيغة الشراكة White-Label مصممة خصيصاً للوكالات والـ integrators. تحصل على مواد متميزة تحت علامتك التجارية لعملائك.',
//       },
//       {
//         question: 'هل توقعون NDA؟',
//         answer:
//           'نعم، هذه ممارسة معتادة. أرسل لنا NDA الخاص بك أو استخدم قالبنا — نوقع قبل مناقشة تفاصيل المشروع.',
//       },
//       {
//         question: 'ماذا لو كان نطاق المشروع غير واضح بعد؟',
//         answer:
//           'صِف مشروعك في brief — سنقترح الصيغة المناسبة أو نبني نطاقاً مخصصاً. الحزم هي نقاط انطلاق، وليست قيوداً جامدة.',
//       },
//     ],
//   },
// }

// const FINAL_CTA_PRICING_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'finalCtaPricing',
//     eyebrow: 'Следующий шаг',
//     title: 'Закажите дизайн сайта, системы или приложения',
//     description:
//       'Опишите проект — сайт, портал, B2B-платформу или mobile app. Мы предложим формат, сроки и стоимость.',
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'На главную',
//     secondaryPageKey: 'home',
//     footerNote: 'Для сайтов · Digital-систем · Порталов · Mobile apps',
//   },
//   en: {
//     blockType: 'finalCtaPricing',
//     eyebrow: 'Next step',
//     title: 'Ready to discuss your project?',
//     description:
//       'Describe your project — a website, portal, B2B platform, or mobile app. We will recommend the format, timeline, and starting price.',
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Back to Home',
//     secondaryPageKey: 'home',
//     footerNote: 'For websites · Digital systems · Portals · Mobile apps',
//   },
//   ar: {
//     blockType: 'finalCtaPricing',
//     eyebrow: 'الخطوة التالية',
//     title: 'هل أنت جاهز لمناقشة مشروعك؟',
//     description:
//       'صِف مشروعك — موقع أو بوابة أو منصة B2B أو تطبيق جوال. سنقترح عليك الصيغة والجدول الزمني ونقطة بداية السعر.',
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'العودة للرئيسية',
//     secondaryPageKey: 'home',
//     footerNote: 'للمواقع · الأنظمة الرقمية · البوابات · تطبيقات الجوال',
//   },
// }

// function upsertBlock(layout: BlockData[], nextBlock: BlockData): BlockData[] {
//   const existingIndex = layout.findIndex((block) => block?.blockType === nextBlock.blockType)

//   if (existingIndex === -1) {
//     return [...layout, nextBlock]
//   }

//   const existingBlock = layout[existingIndex]
//   const mergedBlock = existingBlock?.id ? { ...nextBlock, id: existingBlock.id } : nextBlock

//   const nextLayout = [...layout]
//   nextLayout[existingIndex] = mergedBlock

//   return nextLayout
// }

// async function getPricingPage(payload: Awaited<ReturnType<typeof getPayload>>) {
//   const result = await payload.find({
//     collection: 'pages',
//     where: {
//       pageKey: {
//         equals: 'pricing',
//       },
//     },
//     limit: 1,
//     locale: 'ru',
//     fallbackLocale: 'none',
//     depth: 0,
//   })

//   return result.docs[0] ?? null
// }

// async function ensurePricingPage(payload: Awaited<ReturnType<typeof getPayload>>) {
//   const existing = await getPricingPage(payload)

//   if (existing) {
//     return existing
//   }

//   return payload.create({
//     collection: 'pages',
//     locale: 'ru',
//     depth: 0,
//     data: {
//       pageKey: 'pricing',
//       internalName: 'pricing',
//       layout: [],
//     },
//   })
// }

// async function seedBlockForLocale(
//   payload: Awaited<ReturnType<typeof getPayload>>,
//   pageId: string | number,
//   locale: Locale,
//   blockData: BlockData,
// ) {
//   const page = await payload.findByID({
//     collection: 'pages',
//     id: pageId,
//     locale,
//     fallbackLocale: 'none',
//     depth: 0,
//   })

//   const currentLayout = Array.isArray(page?.layout) ? (page.layout as BlockData[]) : []
//   const nextLayout = upsertBlock(currentLayout, blockData)

//   await payload.update({
//     collection: 'pages',
//     id: pageId,
//     locale,
//     depth: 0,
//     data: {
//       layout: nextLayout,
//     },
//   })
// }

// const PRICING_LAYOUT_SEED: Record<Locale, BlockData[]> = {
//   ru: [
//     HERO_PRICING_SEED.ru,
//     POSITIONING_BLOCK_PRICING_SEED.ru,
//     PACKAGE_CARDS_PRICING_SEED.ru,
//     CHOOSING_GUIDE_PRICING_SEED.ru,
//     DELIVERABLES_PREVIEW_PRICING_SEED.ru,
//     PRICE_EXPLANATION_PRICING_SEED.ru,
//     NO_CALL_CTA_PRICING_SEED.ru,
//     FAQ_PRICING_SEED.ru,
//     FINAL_CTA_PRICING_SEED.ru,
//   ],
//   en: [
//     HERO_PRICING_SEED.en,
//     POSITIONING_BLOCK_PRICING_SEED.en,
//     PACKAGE_CARDS_PRICING_SEED.en,
//     CHOOSING_GUIDE_PRICING_SEED.en,
//     DELIVERABLES_PREVIEW_PRICING_SEED.en,
//     PRICE_EXPLANATION_PRICING_SEED.en,
//     NO_CALL_CTA_PRICING_SEED.en,
//     FAQ_PRICING_SEED.en,
//     FINAL_CTA_PRICING_SEED.en,
//   ],
//   ar: [
//     HERO_PRICING_SEED.ar,
//     POSITIONING_BLOCK_PRICING_SEED.ar,
//     PACKAGE_CARDS_PRICING_SEED.ar,
//     CHOOSING_GUIDE_PRICING_SEED.ar,
//     DELIVERABLES_PREVIEW_PRICING_SEED.ar,
//     PRICE_EXPLANATION_PRICING_SEED.ar,
//     NO_CALL_CTA_PRICING_SEED.ar,
//     FAQ_PRICING_SEED.ar,
//     FINAL_CTA_PRICING_SEED.ar,
//   ],
// }

// async function seedPricingLayoutForLocale(
//   payload: Awaited<ReturnType<typeof getPayload>>,
//   pageId: string | number,
//   locale: Locale,
//   layout: BlockData[],
// ) {
//   await payload.update({
//     collection: 'pages',
//     id: pageId,
//     locale,
//     depth: 0,
//     data: {
//       layout,
//     },
//   })
// }

// async function main() {
//   const payload = await getPayload({ config })

//   const pricingPage = await ensurePricingPage(payload)

//   await seedPricingLayoutForLocale(payload, pricingPage.id, 'ru', PRICING_LAYOUT_SEED.ru)
//   await seedPricingLayoutForLocale(payload, pricingPage.id, 'en', PRICING_LAYOUT_SEED.en)
//   await seedPricingLayoutForLocale(payload, pricingPage.id, 'ar', PRICING_LAYOUT_SEED.ar)

//   console.log('✅ Pricing page seed completed')
//   process.exit(0)
// }

// main().catch((error) => {
//   console.dir(error, { depth: 10 })

// if (error && typeof error === 'object' && 'data' in error) {
//   console.dir((error as any).data?.errors, { depth: 10 })
// }
//   console.error('❌ Pricing page seed failed')
//   console.error(error)
//   process.exit(1)
// })