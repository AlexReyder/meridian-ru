// import 'dotenv/config'

// import { getPayload } from 'payload'
// import config from '../payload.config'

// type Locale = 'ru' | 'en' | 'ar'

// type BlockData = Record<string, unknown> & {
//   blockType: string
//   id?: string
// }

// const HERO_AGENCIES_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'heroAgencies',
//     eyebrow: 'Для партнёров',
//     titlePrefix: 'Для партнёров, которым нужен внешний',
//     titleAccent: 'premium-партнёр',
//     titleSuffix: 'по интерфейсам и продуктовой структуре',
//     description:
//       'Подключаемся как внешний premium-партнёр для агентств, integrators и delivery-команд, когда проекту нужны ясная продуктовая структура, сильный интерфейс и понятная передача в разработку — будь то сайт, client portal, dashboard, digital-система или mobile app.',
//     descriptionSecondary:
//       'Подходит для white-label delivery, presale, redesign, сложных B2B-интерфейсов и client-facing product work.',
//     partnerTags: [
//       { label: 'White-label' },
//       { label: 'Presale support' },
//       { label: 'Сайты' },
//       { label: 'Digital-системы' },
//       { label: 'Dashboards' },
//       { label: 'Portals' },
//       { label: 'Mobile apps' },
//       { label: 'Передача в разработку' },
//     ],
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Посмотреть цены',
//     secondaryPageKey: 'pricing',
//   },
//   en: {
//     blockType: 'heroAgencies',
//     eyebrow: 'For Partners',
//     titlePrefix: 'For partners who need an external',
//     titleAccent: 'premium product and interface layer',
//     titleSuffix: '',
//     description:
//       'Atelier Meridian works as an external premium partner for agencies, integrators, and delivery teams when projects need stronger product structure, clearer user flows, better interface quality, or a more credible prototype for client delivery, presale, or development handoff.',
//     descriptionSecondary:
//       'Suitable for white-label delivery, presale support, redesign, portals, dashboards, websites, and mobile apps.',
//     partnerTags: [
//       { label: 'White-Label' },
//       { label: 'Presale Support' },
//       { label: 'Websites' },
//       { label: 'Digital Systems' },
//       { label: 'Dashboards' },
//       { label: 'Portals' },
//       { label: 'Mobile Apps' },
//       { label: 'Dev Handoff Materials' },
//     ],
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'View Pricing',
//     secondaryPageKey: 'pricing',
//   },
//   ar: {
//     blockType: 'heroAgencies',
//     eyebrow: 'للشركاء',
//     titlePrefix: 'للشركاء الذين يحتاجون إلى طبقة خارجية متميزة في',
//     titleAccent: 'هيكلة المنتج وتصميم الواجهات',
//     titleSuffix: '',
//     description:
//       'يعمل Atelier Meridian كشريك خارجي متميز عندما تحتاج الفرق إلى هيكل أوضح للمنتج، أو مسارات استخدام أقوى، أو جودة أعلى في الواجهات، أو نموذج أولي أكثر إقناعاً لمشاريع العملاء أو للعروض التمهيدية أو للانتقال إلى التطوير.',
//     descriptionSecondary:
//       'مناسب للعمل بنظام white-label، ودعم presale، وإعادة التصميم، والبوابات، ولوحات التحكم، والمواقع، وتطبيقات الجوال.',
//     partnerTags: [
//       { label: 'White-label' },
//       { label: 'دعم presale' },
//       { label: 'المواقع' },
//       { label: 'الأنظمة الرقمية' },
//       { label: 'البوابات' },
//       { label: 'لوحات التحكم' },
//       { label: 'تطبيقات الجوال' },
//       { label: 'مواد التسليم للتطوير' },
//     ],
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الأسعار',
//     secondaryPageKey: 'pricing',
//   },
// }

// const PARTNERS_CLARIFICATION_AGENCIES_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'partnersClarificationAgencies',
//     title: 'Не просто подрядчик по дизайну, а внешний product / interface partner',
//     description:
//       'Atelier Meridian подключается туда, где партнёрской команде не хватает времени, внутренней UX/UI-ёмкости или сильной продуктовой упаковки. Мы помогаем прояснить структуру, собрать интерфейсы и подготовить решение к презентации, client delivery или следующему этапу разработки.',
//     pillars: [
//       { label: 'Белая маркировка возможна' },
//       { label: 'Удобно для presale и delivery' },
//       { label: 'Премиальная подача без расширения штата' },
//     ],
//   },
//   en: {
//     blockType: 'partnersClarificationAgencies',
//     title: 'Not just a design vendor, but an external product and interface partner',
//     description:
//       'Atelier Meridian joins partner teams where there is not enough internal product/UI capacity, where the client-facing presentation needs to be stronger, or where a clearer structure is needed before development begins. We help shape the logic, interfaces, and deliverables that make the next step easier.',
//     pillars: [
//       { label: 'White-label friendly' },
//       { label: 'Useful for presale and delivery' },
//       { label: 'Premium output without growing internal headcount' },
//     ],
//   },
//   ar: {
//     blockType: 'partnersClarificationAgencies',
//     title: 'لسنا مجرد مزود تصميم، بل شريك خارجي في المنتج والواجهة',
//     description:
//       'ينضم Atelier Meridian إلى فرق الشركاء عندما لا تكون هناك سعة داخلية كافية على مستوى المنتج أو UX/UI، أو عندما يحتاج العرض الموجه للعميل إلى قوة أكبر، أو عندما يحتاج المشروع إلى هيكل أوضح قبل بدء التطوير. نحن نساعد في بناء المنطق والواجهات والمخرجات التي تجعل الخطوة التالية أسهل وأكثر وضوحاً.',
//     pillars: [
//       { label: 'مناسب للعمل بنظام white-label' },
//       { label: 'مفيد لـ presale والتنفيذ' },
//       { label: 'مخرجات متميزة من دون توسيع الفريق الداخلي' },
//     ],
//   },
// }

// const AUDIENCE_AGENCIES_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'audienceAgencies',
//     eyebrow: 'Целевая аудитория',
//     title: 'Кому подходит этот формат',
//     items: [
//       {
//         title: 'Web-студии и digital-агентства',
//         text: 'Когда нужен внешний сильный UX/UI / product-слой для клиентского сайта, redesign или digital-продукта.',
//       },
//       {
//         title: 'System integrators',
//         text: 'Когда проект сложный, ролей много, а интерфейсную логику и подачу нужно собрать аккуратно и быстро.',
//       },
//       {
//         title: 'Outsourcing и dev shops',
//         text: 'Когда разработка есть, а дизайн, structure и product clarity выгоднее закрыть внешней premium-командой.',
//       },
//       {
//         title: 'Delivery-команды',
//         text: 'Когда нужно усилить client-facing delivery, presale или прототипирование без расширения постоянного штата.',
//       },
//       {
//         title: 'Consulting и partner teams',
//         text: 'Когда нужно упаковать решение, service portal, dashboard или интерфейс цифровой системы в понятную форму.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'audienceAgencies',
//     eyebrow: 'Audience',
//     title: 'Who this works for',
//     items: [
//       {
//         title: 'Digital Agencies',
//         text: 'When you need an external premium UX/UI/product layer for a client website, redesign, or digital product without expanding internal headcount.',
//       },
//       {
//         title: 'System Integrators',
//         text: 'When the project is complex, involves multiple roles and workflows, and interface logic needs to be assembled quickly and reliably before development.',
//       },
//       {
//         title: 'Software Houses & Outsourcing Teams',
//         text: 'When development capacity is strong but design, structure, and product clarity are more efficiently handled by an external premium partner.',
//       },
//       {
//         title: 'Delivery Teams',
//         text: 'When you need to strengthen client-facing delivery, presale materials, or prototype quality without growing permanent staff.',
//       },
//       {
//         title: 'Consulting & Partner Teams',
//         text: 'When you need to package a solution, service portal, dashboard, or digital system interface into a clear, presentable form for stakeholders.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'audienceAgencies',
//     eyebrow: 'الجمهور',
//     title: 'لمن تناسب هذه الصيغة',
//     items: [
//       {
//         title: 'الوكالات الرقمية',
//         text: 'عندما تحتاج الوكالة إلى طبقة خارجية أقوى في UX/UI أو هيكلة المنتج لدعم مشاريع العملاء أو إعادة التصميم أو المنتجات الرقمية.',
//       },
//       {
//         title: 'شركاء التنفيذ والـ integrators',
//         text: 'عندما يكون المشروع معقداً ويضم أدواراً متعددة، وتحتاج الواجهة ومنطق النظام إلى صياغة أوضح وأكثر احترافية.',
//       },
//       {
//         title: 'شركات البرمجيات وفرق الـ outsourcing',
//         text: 'عندما تكون قدرات التطوير موجودة، لكن هيكلة المنتج وتصميم الواجهات من الأفضل تغطيتهما من خلال شريك خارجي متميز.',
//       },
//       {
//         title: 'فرق التنفيذ delivery teams',
//         text: 'عندما يكون المشروع موجهاً للعميل ويحتاج إلى دعم أقوى في العرض أو الـ prototype أو بنية الواجهة، من دون توسيع الفريق الداخلي.',
//       },
//       {
//         title: 'الفرق الاستشارية وشركاء المشاريع',
//         text: 'عندما تحتاج الجهة إلى توضيح الحل وصياغته في شكل منتج أو portal أو dashboard أو واجهة نظام رقمي واضحة ومقنعة.',
//       },
//     ],
//   },
// }

// const VALUE_AGENCIES_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'valueAgencies',
//     eyebrow: 'Value',
//     title: 'Где мы усиливаем партнёрские проекты',
//     layoutVariant: 'detailed',
//     items: [
//       {
//         icon: 'presentation',
//         title: 'Presale и pitch support',
//         problem:
//           'Нужно быстро упаковать концепцию или подготовить client-facing материалы для тендера.',
//         whenRelevant: 'Pitch, тендер, presale-этап, client presentation.',
//         whyHelpful:
//           'Получаете premium concept package, который усиливает вашу позицию и ускоряет согласование.',
//       },
//       {
//         icon: 'palette',
//         title: 'White-label интерфейсная работа',
//         problem:
//           'Нужен внешний UX/UI-партнёр, который работает под вашим брендом или в тени.',
//         whenRelevant: 'Агентская модель, субподряд, white-label delivery.',
//         whyHelpful: 'Ваш клиент видит только ваш бренд. Мы — невидимый premium-слой.',
//       },
//       {
//         icon: 'layout',
//         title: 'Product structure before development',
//         problem:
//           'Перед стартом разработки нужно собрать логику продукта, роли, сценарии, экранную карту.',
//         whenRelevant: 'Перед kickoff, перед передачей dev-команде, после discovery.',
//         whyHelpful:
//           'Разработка стартует на понятном фундаменте — без хаоса и переделок.',
//       },
//       {
//         icon: 'send',
//         title: 'Передача в разработку без хаоса',
//         problem:
//           'Дизайн готов, но dev-команда не понимает логику, сценарии или взаимосвязи экранов.',
//         whenRelevant: 'Перед стартом разработки, после завершения UI.',
//         whyHelpful:
//           'Структурированные материалы для dev-команды — понятно, что делать и почему.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'valueAgencies',
//     eyebrow: 'Value',
//     title: 'Where we strengthen partner work',
//     layoutVariant: 'detailed',
//     items: [
//       {
//         icon: 'presentation',
//         title: 'Presale & pitch support',
//         problem:
//           'You need to quickly package a concept or prepare client-facing materials for a tender or pitch.',
//         whenRelevant: 'Pitch, tender, presale stage, client presentation.',
//         whyHelpful:
//           'You receive a premium concept package that strengthens your position and accelerates client approval.',
//       },
//       {
//         icon: 'palette',
//         title: 'White-label interface delivery',
//         problem:
//           'You need an external UX/UI partner who works under your brand or stays invisible to your client.',
//         whenRelevant: 'Agency model, subcontracting, white-label delivery.',
//         whyHelpful:
//           'Your client sees only your brand. We are the invisible premium layer behind the scenes.',
//       },
//       {
//         icon: 'layout',
//         title: 'Product structure before development',
//         problem:
//           'Before development starts, you need to assemble the product logic, roles, scenarios, and screen map.',
//         whenRelevant: 'Before kickoff, before handoff to dev team, after discovery.',
//         whyHelpful:
//           'Development starts on a solid foundation — without chaos and rework.',
//       },
//       {
//         icon: 'send',
//         title: 'Clear materials for development',
//         problem:
//           "Design is ready, but the dev team doesn't understand the logic, scenarios, or screen relationships.",
//         whenRelevant: 'Before development start, after UI completion.',
//         whyHelpful:
//           'Structured materials for the dev team — clear on what to build and why.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'valueAgencies',
//     eyebrow: 'القيمة',
//     title: 'أين نضيف قيمة حقيقية لمشاريع الشركاء',
//     layoutVariant: 'compact',
//     items: [
//       {
//         title: 'دعم presale والعروض التمهيدية',
//         text: 'نساعد على بناء concept أو prototype أو عرض واجهات يجعل الحل أكثر وضوحاً وإقناعاً أمام العميل.',
//       },
//       {
//         title: 'تنفيذ الواجهات بنظام white-label',
//         text: 'نوفر طبقة خارجية متميزة في المنتج والواجهة من دون التأثير على علاقة الشريك مع العميل النهائي.',
//       },
//       {
//         title: 'هيكلة المنتج قبل التطوير',
//         text: 'نرتب الأدوار والمسارات ومنطق الشاشات قبل التنفيذ، بما يجعل العمل أكثر وضوحاً وأقل عشوائية.',
//       },
//       {
//         title: 'مواد واضحة للتطوير',
//         text: 'نجهز مخرجات تساعد الفريق الداخلي أو فريق التطوير على الانتقال إلى المرحلة التالية بثقة أكبر وغموض أقل.',
//       },
//     ],
//   },
// }

// const PROJECTS_AGENCIES_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'projectsAgencies',
//     eyebrow: 'Типы проектов',
//     title: 'С какими проектами подключаемся',
//     layoutVariant: 'detailed',
//     useCaseLabel: 'Типичный кейс',
//     outputLabel: 'Output',
//     items: [
//       {
//         title: 'Сайты и корпоративные сайты',
//         explanation:
//           'От лендингов до сложных корпоративных сайтов с multiple user journeys.',
//         useCase:
//           'Клиенту нужен сильный сайт, а у вас нет внутренней UX/UI-команды или она занята.',
//         output:
//           'Структура, визуальное направление, prototype, build-ready интерфейсы.',
//       },
//       {
//         title: 'Редизайн сайта и UX/UI-улучшение',
//         explanation: 'Переработка существующего сайта — от логики до визуала.',
//         useCase:
//           'Сайт клиента устарел, но нужно сохранить continuity и улучшить UX.',
//         output: 'UX-анализ, обновлённая структура, новый визуал, prototype.',
//       },
//       {
//         title: 'Digital-системы и B2B-платформы',
//         explanation: 'Сложные интерфейсы с ролями, сценариями, модулями.',
//         useCase: 'Проект integrator-уровня, где важно собрать логику до разработки.',
//         output: 'Ролевая модель, экранная карта, ключевые интерфейсы, материалы для dev.',
//       },
//       {
//         title: 'Клиентские порталы и dashboards',
//         explanation: 'Service portals, кабинеты, operational dashboards.',
//         useCase:
//           'Нужно сделать сложный инструмент понятным для конечного пользователя.',
//         output: 'Структура, user flows, ключевые экраны, prototype.',
//       },
//       {
//         title: 'Mobile apps',
//         explanation: 'iOS/Android приложения с фокусом на UX и platform fit.',
//         useCase:
//           'Мобильное приложение для клиента, нужен premium interface layer.',
//         output: 'Flows, UI kit, prototype, build-ready экраны.',
//       },
//       {
//         title: 'Прототипы для presale и client presentation',
//         explanation: 'Быстрая упаковка концепции в убедительный prototype.',
//         useCase:
//           'Тендер, pitch, presale — нужно показать решение до старта разработки.',
//         output: 'Concept package, интерактивный prototype, presentation materials.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'projectsAgencies',
//     eyebrow: 'Project Types',
//     title: 'What kinds of projects we support',
//     layoutVariant: 'detailed',
//     useCaseLabel: 'Typical case',
//     outputLabel: 'Output',
//     items: [
//       {
//         title: 'Websites & Corporate Websites',
//         explanation:
//           'From landing pages to complex corporate websites with multiple user journeys.',
//         useCase:
//           "Your client needs a strong website, but you don't have an internal UX/UI team or they're occupied.",
//         output: 'Structure, visual direction, prototype, build-ready interfaces.',
//       },
//       {
//         title: 'Website Redesign & UX/UI Improvement',
//         explanation: 'Reworking an existing website — from logic to visuals.',
//         useCase:
//           "The client's website is outdated, but continuity must be preserved while improving UX.",
//         output: 'UX analysis, updated structure, new visuals, prototype.',
//       },
//       {
//         title: 'Digital Systems & B2B Platforms',
//         explanation: 'Complex interfaces with roles, scenarios, and modules.',
//         useCase:
//           'An integrator-level project where product logic must be assembled before development.',
//         output: 'Role model, screen map, key interfaces, materials for dev.',
//       },
//       {
//         title: 'Client Portals & Dashboards',
//         explanation: 'Service portals, user cabinets, operational dashboards.',
//         useCase: 'A complex tool needs to become understandable for end users.',
//         output: 'Structure, user flows, key screens, prototype.',
//       },
//       {
//         title: 'Mobile Apps',
//         explanation:
//           'iOS/Android applications with a focus on UX and platform fit.',
//         useCase:
//           'A mobile app for a client requires a premium interface layer.',
//         output: 'Flows, UI kit, prototype, build-ready screens.',
//       },
//       {
//         title: 'Presale & Prototype Packaging',
//         explanation:
//           'Quick packaging of a concept into a compelling prototype.',
//         useCase:
//           'Tender, pitch, presale — you need to show the solution before development starts.',
//         output: 'Concept package, interactive prototype, presentation materials.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'projectsAgencies',
//     eyebrow: 'المشاريع',
//     title: 'ما أنواع المشاريع التي ندعمها',
//     layoutVariant: 'compact',
//     useCaseLabel: '',
//     outputLabel: '',
//     items: [
//       {
//         title: 'المواقع ومواقع الشركات',
//         explanation:
//           'مواقع corporate، ومواقع الشركات التقنية، والخدمات الاستشارية، والمنتجات B2B.',
//         useCase:
//           'عندما يحتاج عميل الشريك إلى موقع حديث يعكس قيمة العرض.',
//       },
//       {
//         title: 'إعادة تصميم المواقع وتحسين UX/UI',
//         explanation:
//           'تحديث المواقع القديمة أو إعادة هيكلة الأنظمة الرقمية الموجودة.',
//         useCase:
//           'عندما يحتاج المنتج الحالي إلى تحديث شامل أو تحسين تجربة المستخدم.',
//       },
//       {
//         title: 'الأنظمة الرقمية ومنصات B2B',
//         explanation:
//           'الأدوات الداخلية، وأنظمة CRM/ERP، ولوحات التحكم المخصصة.',
//         useCase:
//           'عندما يكون منطق النظام معقداً ويحتاج إلى ترتيب الأدوار والمسارات.',
//       },
//       {
//         title: 'بوابات العملاء ولوحات التحكم',
//         explanation:
//           'البوابات التي يتفاعل معها المستخدمون النهائيون، وأنظمة إدارة البيانات.',
//         useCase:
//           'عندما يحتاج النظام إلى واجهات واضحة لأدوار مختلفة.',
//       },
//       {
//         title: 'تطبيقات الجوال',
//         explanation:
//           'تطبيقات iOS وAndroid للمنتجات الرقمية والخدمات.',
//         useCase:
//           'عندما يحتاج التطبيق إلى هيكل واضح وواجهات متميزة قبل التطوير.',
//       },
//       {
//         title: 'دعم presale والنماذج الأولية',
//         explanation:
//           'concepts وprototypes وعروض تقديمية للعملاء المحتملين.',
//         useCase:
//           'عندما يحتاج الشريك إلى تقديم حل بصري مقنع قبل التعاقد.',
//       },
//     ],
//   },
// }

// const PROCESS_AGENCIES_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'processAgencies',
//     eyebrow: 'Process',
//     title: 'Как обычно устроена работа с партнёрами',
//     layoutVariant: 'connected',
//     steps: [
//       {
//         number: '01',
//         title: 'Контекст проекта',
//         description:
//           'Вы делитесь brief, client notes или rough описанием. Мы понимаем задачу, ограничения и ваш формат работы.',
//       },
//       {
//         number: '02',
//         title: 'Scope и ограничения',
//         description:
//           'Согласовываем, что входит в работу, сроки и формат взаимодействия — white-label, async, под ваш бренд.',
//       },
//       {
//         number: '03',
//         title: 'Структура решения',
//         description:
//           'Собираем продуктовую логику: роли, сценарии, экранную карту. Готовим основу для интерфейсов.',
//       },
//       {
//         number: '04',
//         title: 'Интерфейсы и prototype',
//         description:
//           'Проектируем ключевые экраны, собираем prototype. Визуальное направление согласовываем с вами.',
//       },
//       {
//         number: '05',
//         title: 'Передача в разработку или клиенту',
//         description:
//           'Формируем материалы для dev-команды или client presentation. Всё готово для следующего этапа.',
//       },
//     ],
//     markers: [
//       { label: 'можно подключаться точечно' },
//       { label: 'можно работать white-label' },
//       { label: 'можно подключаться под конкретный scope' },
//       { label: 'можно усиливать внутреннюю delivery-команду' },
//     ],
//   },
//   en: {
//     blockType: 'processAgencies',
//     eyebrow: 'Process',
//     title: 'How partner collaboration usually works',
//     layoutVariant: 'connected',
//     steps: [
//       {
//         number: '01',
//         title: 'Project Context',
//         description:
//           'You share a brief, client notes, or rough description. We understand the task, constraints, and your working format.',
//       },
//       {
//         number: '02',
//         title: 'Scope & Constraints',
//         description:
//           "We agree on what's included, timelines, and interaction format — white-label, async, under your brand.",
//       },
//       {
//         number: '03',
//         title: 'Structure',
//         description:
//           'We assemble product logic: roles, scenarios, screen map. We prepare the foundation for interfaces.',
//       },
//       {
//         number: '04',
//         title: 'Interface & Prototype',
//         description:
//           'We design key screens and assemble a prototype. Visual direction is aligned with you.',
//       },
//       {
//         number: '05',
//         title: 'Delivery to Client or Development',
//         description:
//           'We prepare materials for the dev team or client presentation. Everything is ready for the next stage.',
//       },
//     ],
//     markers: [
//       { label: 'white-label possible' },
//       { label: 'async-friendly' },
//       { label: 'scoped engagement' },
//       { label: 'partner-ready delivery' },
//     ],
//   },
//   ar: {
//     blockType: 'processAgencies',
//     eyebrow: 'العملية',
//     title: 'كيف تسير الشراكة عادة',
//     layoutVariant: 'compact',
//     steps: [
//       {
//         number: '01',
//         title: 'سياق المشروع',
//         description:
//           'نبدأ بفهم المهمة والعميل والسياق الحالي وما الذي يحتاجه المشروع فعلاً.',
//       },
//       {
//         number: '02',
//         title: 'النطاق والقيود',
//         description:
//           'نحدد نطاق العمل والقيود والتوقعات وحدود المسؤوليات بشكل واضح.',
//       },
//       {
//         number: '03',
//         title: 'الهيكل والمنطق',
//         description:
//           'نبني هيكل المنتج ومسارات الاستخدام ومنطق الشاشات قبل الدخول في التنفيذ التفصيلي.',
//       },
//       {
//         number: '04',
//         title: 'الواجهة والنموذج الأولي',
//         description:
//           'نجهز الواجهات الأساسية والـ prototype والمخرجات التي يمكن عرضها أو اعتمادها.',
//       },
//       {
//         number: '05',
//         title: 'التسليم للعميل أو للتطوير',
//         description:
//           'تحصلون على مخرجات منظمة يمكن استخدامها مع العميل أو نقلها إلى فريق التطوير بثقة أكبر.',
//       },
//     ],
//     markers: [
//       { label: 'white-label ممكن' },
//       { label: 'مناسب للتعاون غير المتزامن' },
//       { label: 'يمكن تحديد النطاق بدقة' },
//       { label: 'مناسب لمشاريع منفصلة أو تعاون مستمر' },
//     ],
//   },
// }

// const ARTIFACTS_AGENCIES_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'artifactsAgencies',
//     eyebrow: 'Deliverables',
//     title: 'Что получает партнёрская команда',
//     items: [
//       {
//         icon: 'fileText',
//         title: 'Структура проекта',
//         support: 'Помогает согласовать scope с клиентом',
//       },
//       {
//         icon: 'gitBranch',
//         title: 'Пользовательские сценарии',
//         support: 'Показывает логику решения без лишнего шума',
//       },
//       {
//         icon: 'map',
//         title: 'Экранная карта продукта',
//         support: 'Делает работу команды понятнее',
//       },
//       {
//         icon: 'smartphone',
//         title: 'Интерактивный прототип',
//         support: 'Усиливает client-facing presentation',
//       },
//       {
//         icon: 'palette',
//         title: 'Визуальное направление',
//         support: 'Помогает перейти к следующему этапу',
//       },
//       {
//         icon: 'send',
//         title: 'Материалы для передачи в разработку',
//         support: 'Упрощает передачу в разработку',
//       },
//     ],
//   },
//   en: {
//     blockType: 'artifactsAgencies',
//     eyebrow: 'Deliverables',
//     title: 'What partner teams receive',
//     items: [
//       {
//         icon: 'fileText',
//         title: 'Project Structure',
//         support: 'Helps align scope with the client',
//       },
//       {
//         icon: 'gitBranch',
//         title: 'User Flows',
//         support: 'Makes the solution easier to explain',
//       },
//       {
//         icon: 'map',
//         title: 'Screen Matrix',
//         support: 'Gives the team a cleaner working base',
//       },
//       {
//         icon: 'smartphone',
//         title: 'Clickable Prototype',
//         support: 'Strengthens client-facing presentation',
//       },
//       {
//         icon: 'palette',
//         title: 'Visual Direction',
//         support: 'Helps move into the next stage',
//       },
//       {
//         icon: 'send',
//         title: 'Materials for Development',
//         support: 'Simplifies the transition to development',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'artifactsAgencies',
//     eyebrow: 'المخرجات',
//     title: 'ما الذي تحصل عليه فرق الشركاء',
//     items: [
//       {
//         icon: 'fileText',
//         title: 'هيكل المشروع',
//         support: 'يساعد في ضبط النطاق مع العميل',
//       },
//       {
//         icon: 'gitBranch',
//         title: 'مسارات المستخدم',
//         support: 'يجعل الحل أسهل في الشرح',
//       },
//       {
//         icon: 'layoutGrid',
//         title: 'مصفوفة الشاشات',
//         support: 'يمنح الفريق أساساً أوضح للعمل',
//       },
//       {
//         icon: 'mousePointer',
//         title: 'نموذج أولي قابل للنقر',
//         support: 'يقوي العرض الموجه للعميل',
//       },
//       {
//         icon: 'palette',
//         title: 'الاتجاه البصري',
//         support: 'يدعم الانتقال إلى المرحلة التالية',
//       },
//       {
//         icon: 'fileCheck',
//         title: 'مواد التسليم للتطوير',
//         support: 'يسهل التسليم للتطوير',
//       },
//     ],
//   },
// }

// const WHY_AGENCIES_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'whyAgencies',
//     eyebrow: 'Why',
//     title: 'Почему этот формат удобен партнёрам',
//     layoutVariant: 'detailed',
//     items: [
//       {
//         title: 'Не нужно расширять штат',
//         description:
//           'Подключаете внешнюю premium-команду под конкретный проект или scope — без hiring overhead и постоянных затрат.',
//       },
//       {
//         title: 'Удобно закрывать presale и сложные интерфейсы',
//         description:
//           'Мы помогаем выиграть pitch, подготовить client-facing материалы и собрать интерфейсы для сложных B2B-систем.',
//       },
//       {
//         title: 'Senior-подход без лишнего overhead',
//         description:
//           'Работаем структурированно, async-friendly, с понятными deliverables. Без лишних созвонов и management слоёв.',
//       },
//       {
//         title: 'Премиальная подача для client-facing work',
//         description:
//           'Качество boutique-уровня для проектов, где важна сильная визуальная и продуктовая подача.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'whyAgencies',
//     eyebrow: 'Why',
//     title: 'Why this model works for partners',
//     layoutVariant: 'detailed',
//     items: [
//       {
//         title: 'No need to expand internal headcount',
//         description:
//           'Bring in an external premium team for a specific project or scope — without hiring overhead and permanent costs.',
//       },
//       {
//         title: 'Strong support for presale and complex interfaces',
//         description:
//           'We help win pitches, prepare client-facing materials, and assemble interfaces for complex B2B systems.',
//       },
//       {
//         title: 'Senior-level product thinking without unnecessary overhead',
//         description:
//           'We work in a structured, async-friendly way with clear deliverables. No excessive calls or management layers.',
//       },
//       {
//         title: 'Premium output for client-facing work',
//         description:
//           'Boutique-level quality for projects where strong visual and product presentation matters.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'whyAgencies',
//     eyebrow: 'لماذا',
//     title: 'لماذا تنجح هذه الصيغة مع الشركاء',
//     layoutVariant: 'compact',
//     items: [
//       {
//         title: 'لا حاجة إلى توسيع الفريق الداخلي',
//       },
//       {
//         title: 'مناسبة لـ presale والواجهات المعقدة',
//       },
//       {
//         title: 'تفكير منتجي على مستوى senior من دون overhead غير ضروري',
//       },
//       {
//         title: 'مخرجات متميزة للمشاريع الموجهة للعملاء',
//       },
//     ],
//   },
// }

// const CONCEPTS_AGENCIES_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'conceptsAgencies',
//     eyebrow: 'Cases',
//     title: 'Как это выглядит в работе',
//     layoutVariant: 'grid',
//     challengeLabel: 'Challenge',
//     clarifiedLabel: 'Clarified',
//     preparedLabel: 'Prepared',
//     viewAllLabel: 'Посмотреть концепты',
//     viewAllPageKey: 'concepts',
//     items: [
//       {
//         badge: 'Концепт студии',
//         title: 'B2B Operations Platform',
//         challenge:
//           'Партнёру нужно было показать клиенту, как будет выглядеть операционная система до старта разработки.',
//         clarified:
//           'Роли, сценарии, модульная архитектура, ключевые экраны.',
//         prepared:
//           'Prototype, визуальное направление, материалы для client presentation.',
//       },
//       {
//         badge: 'Концепт студии',
//         title: 'Enterprise Service Portal',
//         challenge:
//           'Integrator-команда выигрывала тендер и нуждалась в premium упаковке концепции сервисного портала.',
//         clarified:
//           'User journeys, ролевая модель, информационная архитектура.',
//         prepared:
//           'Presale package, интерактивный prototype, presentation deck support.',
//       },
//       {
//         badge: 'Концепт студии',
//         title: 'Client-Facing Dashboard Concept',
//         challenge:
//           'Dev shop нужен был premium UI layer для аналитического dashboard под крупного B2B-клиента.',
//         clarified:
//           'Data visualization logic, widget structure, user scenarios.',
//         prepared:
//           'UI kit, prototype, build-ready экраны, материалы для dev.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'conceptsAgencies',
//     eyebrow: 'Cases',
//     title: 'What this can look like',
//     layoutVariant: 'grid',
//     challengeLabel: 'Challenge',
//     clarifiedLabel: 'Clarified',
//     preparedLabel: 'Prepared',
//     viewAllLabel: 'View concepts',
//     viewAllPageKey: 'concepts',
//     items: [
//       {
//         badge: 'Studio Concept',
//         title: 'B2B Operations Platform',
//         challenge:
//           'The partner team needed to show the client how an operational system would look before development started.',
//         clarified:
//           'Roles, scenarios, modular architecture, key screens.',
//         prepared:
//           'Prototype, visual direction, client presentation materials.',
//       },
//       {
//         badge: 'Studio Concept',
//         title: 'Enterprise Service Portal',
//         challenge:
//           'An integrator team was winning a tender and needed premium packaging for a service portal concept.',
//         clarified:
//           'User journeys, role model, information architecture.',
//         prepared:
//           'Presale package, interactive prototype, presentation deck support.',
//       },
//       {
//         badge: 'Studio Concept',
//         title: 'Client-Facing Dashboard Concept',
//         challenge:
//           'A dev shop needed a premium UI layer for an analytics dashboard for a large B2B client.',
//         clarified:
//           'Data visualization logic, widget structure, user scenarios.',
//         prepared:
//           'UI kit, prototype, build-ready screens, materials for dev.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'conceptsAgencies',
//     eyebrow: 'مفاهيم الاستوديو',
//     title: 'مفاهيم الاستوديو',
//     description:
//       'مشاريع عرض توضح كيف نتعامل مع المواقع والأنظمة الرقمية والبوابات وتطبيقات الجوال من حيث الهيكل والمنطق البصري وجودة المخرجات.',
//     layoutVariant: 'carousel',
//     challengeLabel: 'التحدي',
//     clarifiedLabel: 'ما هيكلناه',
//     preparedLabel: 'ما سلّمناه',
//     viewAllLabel: 'استعرض المفاهيم',
//     viewAllPageKey: 'concepts',
//     items: [
//       {
//         badge: 'تصميم أنظمة B2B',
//         title: 'منصة B2B ونظام داخلي',
//         challenge:
//           'بناء نظام رقمي موحد من سير عمل تشغيلي معقد بأدوار متعددة وسيناريوهات موافقة ومنطق لوحات تحكم.',
//         clarified:
//           'الأدوار والصلاحيات، سيناريوهات المستخدم الرئيسية، خريطة شاشات المنتج، منطق الوحدات، وسير عمل الفريق اليومي.',
//         prepared:
//           'نموذج أولي احترافي، نظام واجهة بصري، هيكل الشاشات الرئيسية، ومواد تسليم المطورين.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B2B-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%D0%B8%20%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-nfjB6TIcpHm2krsv9QxEOV6JqBP6jO.png',
//         imageAlt: 'منصة B2B ونظام داخلي',
//       },
//       {
//         badge: 'تصميم تطبيقات الموبايل',
//         title: 'تصميم تطبيق موبايل',
//         challenge:
//           'تغليف منتج fintech في تنسيق mobile-first واضح يمكن عرضه على المستثمرين واستخدامه كأساس للمرحلة التالية.',
//         clarified:
//           'سيناريوهات المستخدم، تدفق التسجيل، منطق الشاشات المالية، الوحدات ذات الأولوية، وهيكل التطبيق.',
//         prepared:
//           'نموذج أولي جاهز للمستثمرين، توجه بصري، شاشات التطبيق الرئيسية، ومواد للمرحلة التطويرية التالية.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%94%D0%B8%D0%B7%D0%B0%D0%B8%CC%86%D0%BD%20%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-WPXYUHUvoGBadJ6HNUNIFKIWraf70B.png',
//         imageAlt: 'تصميم تطبيق موبايل',
//       },
//       {
//         badge: 'تصميم البوابات ولوحات التحكم',
//         title: 'بوابة العملاء ولوحة التحكم',
//         challenge:
//           'تحويل عملية خدمة معقدة إلى بوابة عملاء واضحة بتنقل شفاف ومنطق سير عمل وهيكل قائم على الأدوار.',
//         clarified:
//           'هيكل البوابة، سيناريوهات المستخدم، حالات طلبات الخدمة، مصفوفة الشاشات، ونقاط التفاعل الرئيسية.',
//         prepared:
//           'هيكل الواجهة، نموذج الشاشات الرئيسية، توجه UI، وحزمة تسليم المطورين.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B8%CC%86%20%D0%BF%D0%BE%D1%80%D1%82%D0%B0%D0%BB%20%D0%B8%20dashboard-JlI8wKPt6UWq4rRVcyFQXwBsL2XAHb.png',
//         imageAlt: 'بوابة العملاء ولوحة التحكم',
//       },
//       {
//         badge: 'تصميم المواقع',
//         title: 'موقع شركة B2B',
//         challenge:
//           'إنشاء موقع شركة يبدو احترافياً، ويشرح خدمة معقدة بوضوح، ويبني الثقة من أول تواصل.',
//         clarified:
//           'هيكل الموقع، تسلسل كتل المحتوى، منطق الصفحات الرئيسية، سيناريوهات التنقل، وعرض خدمة B2B المعقدة.',
//         prepared:
//           'مفهوم الموقع البصري، هيكل الصفحة الرئيسية، نظام UI للواجهة الويب، ومواد تسليم المطورين.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%81%D0%B0%D0%B8%CC%86%D1%82%20%D0%B4%D0%BB%D1%8F%20premium%20B2B-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8-6RgbOJ9HFWZMTpHDeV3gRjnxMU9UZF.png',
//         imageAlt: 'موقع شركة B2B',
//       },
//       {
//         badge: 'تصميم مواقع الشركات الناشئة',
//         title: 'صفحة هبوط جاهزة للمستثمرين',
//         challenge:
//           'تغليف منتج في مرحلة مبكرة في صفحة هبوط تشرح بسرعة الفكرة والقيمة وسيناريو المنتج للمستثمرين أو الشركاء أو العملاء الأوائل.',
//         clarified:
//           'منطق الشاشة الأولى، سرد المنتج، ترتيب كتل المحتوى، نقاط الإثبات الرئيسية، والعرض البصري لمفهوم الشركة الناشئة.',
//         prepared:
//           'مفهوم صفحة الهبوط، هيكل الموقع، توجه بصري، والشاشات الرئيسية للإطلاق أو العرض.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Investor-ready%20landing%20page%20%D0%B4%D0%BB%D1%8F%20startup-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-b85KxA9lUQySVtGgn38fMd2GX2STAN.png',
//         imageAlt: 'صفحة هبوط جاهزة للمستثمرين',
//       },
//       {
//         badge: 'تصميم منتجات الويب',
//         title: 'واجهة SaaS لمنتج ويب',
//         challenge:
//           'بناء واجهة منتج ويب بحيث تبدو الوظائف المعقدة واضحة وعصرية وجاهزة للنمو بالوحدات والأدوار.',
//         clarified:
//           'سيناريوهات المستخدم الرئيسية، هيكل الشاشات، وحدات المنتج، سير العمل ذات الأولوية، وتسلسل الأقسام الرئيسية.',
//         prepared:
//           'نموذج منتج الويب، هيكل الشاشات الرئيسية، نظام مكونات أساسي، ومواد تسليم المطورين.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaaS-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%CC%86%D1%81%20%D0%B4%D0%BB%D1%8F%20web-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-ypxGBLA8NjWgvW2cxBxjUL68xoXEGf.png',
//         imageAlt: 'واجهة SaaS لمنتج ويب',
//       },
//       {
//         badge: 'تصميم منصات الخدمات',
//         title: 'منصة خدمات / واجهة حجز',
//         challenge:
//           'تحويل خدمة عملاء معقدة إلى منتج رقمي واضح ببحث شفاف واختيار وتدفق حجز ولوحة تحكم شخصية.',
//         clarified:
//           'رحلة المستخدم من الاختيار إلى الحجز، منطق الخدمة، نقاط القرار الرئيسية، الحالات، خريطة الشاشات، وسيناريوهات التفاعل المتكرر.',
//         prepared:
//           'هيكل المنصة، نموذج التدفق الرئيسي، توجه UI، ومواد للمرحلة التالية من المنتج.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%3A%20booking%20interface-LmkTbFEVKsDBsJTHI6LSbVWUfH0eCy.png',
//         imageAlt: 'منصة خدمات / واجهة حجز',
//       },
//     ],
//   },
// }

// const CTA_AGENCIES_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'ctaAgencies',
//     title: 'Нужен внешний product / UX / interface layer под проект?',
//     description:
//       'Опишите задачу — мы предложим подходящий формат подключения, ориентир по срокам и следующий шаг.',
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Посмотреть цены',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'Подходит для white-label, presale, сайтов, digital-систем, portals, dashboards и mobile apps.',
//   },
//   en: {
//     blockType: 'ctaAgencies',
//     title: 'Need an external product / UX / interface layer for a project?',
//     description:
//       'Tell us what the project looks like, and we will suggest the right engagement format, timeline range, and next step.',
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'View Pricing',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'Suitable for white-label delivery, presale, websites, portals, dashboards, digital systems, and mobile apps.',
//   },
//   ar: {
//     blockType: 'ctaAgencies',
//     title: 'هل تحتاج إلى طبقة خارجية في المنتج أو UX أو الواجهة لمشروعك؟',
//     description:
//       'شاركنا بطبيعة المشروع، وسنقترح عليك صيغة التعاون الأنسب، والنطاق الزمني المتوقع، والخطوة التالية.',
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الأسعار',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'مناسب للعمل بنظام white-label، وpresale، والمواقع، والبوابات، ولوحات التحكم، والأنظمة الرقمية، وتطبيقات الجوال.',
//   },
// }

// const FAQ_AGENCIES_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'faqAgencies',
//     eyebrow: 'FAQ',
//     title: 'Частые вопросы',
//     items: [
//       {
//         question: 'Подходит ли это только для агентств?',
//         answer:
//           'Нет. Этот формат подходит для агентств, system integrators, outsourcing-команд, dev shops, delivery-команд и любых партнёров, которым нужен внешний premium UX/UI/product layer.',
//       },
//       {
//         question: 'Можно ли подключаться white-label?',
//         answer:
//           'Да. Мы работаем под вашим брендом или в тени. Ваш клиент видит только вас. NDA, конфиденциальность и белая маркировка — стандартная практика.',
//       },
//       {
//         question: 'Работаете ли вы с integrators и outsourcing-командами?',
//         answer:
//           'Да. Мы часто подключаемся к integrator-проектам, где нужно быстро собрать логику сложной системы и подготовить интерфейсы до или параллельно с разработкой.',
//       },
//       {
//         question: 'Можно ли прийти только с client brief или rough notes?',
//         answer:
//           'Конечно. Мы работаем с любым уровнем готовности — от сырых заметок до детального ТЗ. Структурирование входных данных — часть нашей работы.',
//       },
//       {
//         question: 'Подходит ли это для сайтов, portals и mobile apps?',
//         answer:
//           'Да. Мы работаем с сайтами, редизайном, client portals, dashboards, B2B-системами и mobile apps. Формат подходит для любых digital-продуктов.',
//       },
//       {
//         question: 'Можно ли подключиться только на presale?',
//         answer:
//           'Да. Presale support — один из наших ключевых форматов. Помогаем упаковать концепцию, подготовить prototype и presentation materials для тендера или pitch.',
//       },
//       {
//         question: 'Вы помогаете только с визуалом или со структурой тоже?',
//         answer:
//           'Мы всегда начинаем со структуры. Product framing, роли, сценарии, экранная карта — это основа. Визуал строится на этом фундаменте.',
//       },
//       {
//         question: 'Как быстро можно стартовать?',
//         answer:
//           'Обычно через 3-5 рабочих дней после согласования scope. При срочной необходимости обсуждаем приоритетный старт.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'faqAgencies',
//     eyebrow: 'FAQ',
//     title: 'Frequently asked questions',
//     items: [
//       {
//         question: 'Is this only for agencies?',
//         answer:
//           'No. This model works for agencies, system integrators, outsourcing teams, dev shops, delivery teams, and any partner that needs an external premium UX/UI/product layer.',
//       },
//       {
//         question: 'Can you work white-label?',
//         answer:
//           'Yes. We work under your brand or stay invisible to your client. NDA, confidentiality, and white-label delivery are standard practice.',
//       },
//       {
//         question: 'Do you work with integrators and software houses?',
//         answer:
//           'Yes. We often join integrator projects where the logic of a complex system needs to be quickly assembled and interfaces prepared before or in parallel with development.',
//       },
//       {
//         question: 'Can we come with just a client brief or rough notes?',
//         answer:
//           'Of course. We work with any level of readiness — from rough notes to detailed specs. Structuring the input is part of our work.',
//       },
//       {
//         question: 'Is this suitable for websites, portals, and mobile apps?',
//         answer:
//           'Yes. We work with websites, redesign, client portals, dashboards, B2B systems, and mobile apps. The model works for any digital product.',
//       },
//       {
//         question: 'Can you support only the presale stage?',
//         answer:
//           'Yes. Presale support is one of our key formats. We help package a concept, prepare a prototype, and create presentation materials for a tender or pitch.',
//       },
//       {
//         question: 'Do you help with structure as well as interface design?',
//         answer:
//           'We always start with structure. Product framing, roles, scenarios, screen map — this is the foundation. The visual layer is built on top of it.',
//       },
//       {
//         question: 'How quickly can you start?',
//         answer:
//           'Usually within 3-5 business days after scope agreement. For urgent needs, we discuss priority start options.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'faqAgencies',
//     eyebrow: 'الأسئلة الشائعة',
//     title: 'أسئلة متكررة',
//     items: [
//       {
//         question: 'هل هذه الصفحة مخصصة للوكالات فقط؟',
//         answer:
//           'لا، هذه الصيغة مناسبة للوكالات وشركاء التنفيذ والـ integrators وشركات البرمجيات وفرق الـ outsourcing وفرق delivery وأي جهة تحتاج إلى طبقة خارجية في المنتج أو الواجهة.',
//       },
//       {
//         question: 'هل يمكنكم العمل بنظام white-label؟',
//         answer:
//           'نعم، نعمل بشكل كامل بنظام white-label عند الحاجة. نسلم المخرجات من دون ذكر اسمنا، ويبقى التواصل مع العميل النهائي بالكامل من خلال الشريك.',
//       },
//       {
//         question: 'هل تعملون مع integrators وشركات البرمجيات؟',
//         answer:
//           'نعم، نتعامل بانتظام مع شركات البرمجيات والـ integrators وفرق الـ outsourcing التي لديها قدرات تطوير قوية ولكنها تحتاج إلى دعم في هيكلة المنتج أو تصميم الواجهات.',
//       },
//       {
//         question: 'هل يمكننا البدء من brief للعميل أو ملاحظات أولية فقط؟',
//         answer:
//           'نعم، يمكننا البدء من مواد أولية أو brief للعميل أو ملاحظات اجتماع. نقوم بتنظيم المعلومات وتحويلها إلى هيكل واضح.',
//       },
//       {
//         question: 'هل هذا مناسب للمواقع والبوابات وتطبيقات الجوال؟',
//         answer:
//           'نعم، نعمل على المواقع والبوابات ولوحات التحكم والأنظمة الرقمية وتطبيقات الجوال. الصيغة تنطبق على أي منتج رقمي يحتاج إلى هيكل وواجهات.',
//       },
//       {
//         question: 'هل يمكنكم دعم مرحلة presale فقط؟',
//         answer:
//           'نعم، يمكننا تقديم concept أو prototype أو عرض واجهات لدعم مرحلة presale من دون الالتزام بتنفيذ المشروع بالكامل.',
//       },
//       {
//         question: 'هل تساعدون في الهيكل والمنطق إلى جانب تصميم الواجهات؟',
//         answer:
//           'نعم، نبدأ عادةً بالهيكل والمنطق قبل الانتقال إلى الواجهات. هذا يجعل التصميم أكثر وضوحاً والنتيجة أكثر قابلية للتنفيذ.',
//       },
//       {
//         question: 'كم تحتاجون عادة للبدء؟',
//         answer:
//           'يمكننا البدء خلال 1-2 أسبوع من تأكيد النطاق. المدة تعتمد على حجم المشروع وتعقيده.',
//       },
//     ],
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

// async function getAgenciesPage(payload: Awaited<ReturnType<typeof getPayload>>) {
//   const result = await payload.find({
//     collection: 'pages',
//     where: {
//       pageKey: {
//         equals: 'for-partners',
//       },
//     },
//     limit: 1,
//     locale: 'ru',
//     fallbackLocale: 'none',
//     depth: 0,
//   })

//   return result.docs[0] ?? null
// }

// async function ensureAgenciesPage(payload: Awaited<ReturnType<typeof getPayload>>) {
//   const existing = await getAgenciesPage(payload)

//   if (existing) {
//     return existing
//   }

//   return payload.create({
//     collection: 'pages',
//     locale: 'ru',
//     depth: 0,
//     data: {
//       pageKey: 'for-partners',
//       internalName: 'for-partners',
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

// async function main() {
//   const payload = await getPayload({ config })

//   const homePage = await ensureAgenciesPage(payload)

//     await seedBlockForLocale(payload, homePage.id, 'ru', HERO_AGENCIES_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', HERO_AGENCIES_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', HERO_AGENCIES_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', PARTNERS_CLARIFICATION_AGENCIES_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', PARTNERS_CLARIFICATION_AGENCIES_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', PARTNERS_CLARIFICATION_AGENCIES_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', AUDIENCE_AGENCIES_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', AUDIENCE_AGENCIES_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', AUDIENCE_AGENCIES_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', VALUE_AGENCIES_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', VALUE_AGENCIES_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', VALUE_AGENCIES_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', PROJECTS_AGENCIES_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', PROJECTS_AGENCIES_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', PROJECTS_AGENCIES_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', PROCESS_AGENCIES_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', PROCESS_AGENCIES_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', PROCESS_AGENCIES_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', ARTIFACTS_AGENCIES_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', ARTIFACTS_AGENCIES_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', ARTIFACTS_AGENCIES_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', WHY_AGENCIES_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', WHY_AGENCIES_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', WHY_AGENCIES_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', CONCEPTS_AGENCIES_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', CONCEPTS_AGENCIES_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', CONCEPTS_AGENCIES_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', CTA_AGENCIES_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', CTA_AGENCIES_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', CTA_AGENCIES_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', FAQ_AGENCIES_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', FAQ_AGENCIES_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', FAQ_AGENCIES_SEED.ar)



//   console.log('✅ Solutions page seed completed')
//   process.exit(0)
// }

// main().catch((error) => {
//   console.error('❌ Solutions page seed failed')
//   console.error(error)
//   process.exit(1)
// })