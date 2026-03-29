// import 'dotenv/config'

// import { getPayload } from 'payload'
// import config from '../payload.config'
// import type { PageKey } from '../lib/routes'

// type Locale = 'ru' | 'en' | 'ar'

// type BlockData = Record<string, unknown> & {
//   blockType: string
//   id?: string
// }

// type VariantKey =
//   | 'default'
//   | 'solutions'
//   | 'startups'
//   | 'partners'
//   | 'proposal'
//   | 'method'

// const LOCALES: Locale[] = ['ru', 'en', 'ar']

// const PAGE_INSERTION_CONFIG: Record<
//   PageKey,
//   {
//     variant: VariantKey
//     displayMode: 'full' | 'compact'
//     insertAfterBlockType?: string
//     insertAtIndex?: number
//   }
// > = {
//   home: {
//     variant: 'default',
//     displayMode: 'full',
//     insertAtIndex: 2, // 3 место
//   },
//   solutions: {
//     variant: 'solutions',
//     displayMode: 'full',
//     insertAtIndex: 2, // 3 место
//   },
//   'for-startups': {
//     variant: 'startups',
//     displayMode: 'full',
//     insertAtIndex: 2, // 3 место
//   },
//   'for-partners': {
//     variant: 'partners',
//     displayMode: 'full',
//     insertAtIndex: 3, // 4 место
//   },
//   method: {
//     variant: 'method',
//     displayMode: 'full',
//     insertAtIndex: 1, // 2 место
//   },
//   'get-proposal': {
//     variant: 'proposal',
//     displayMode: 'compact',
//     insertAfterBlockType: 'proposalFlowProposal',
//   },
// }

// const PAGE_KEYS = Object.keys(PAGE_INSERTION_CONFIG) as PageKey[]

// const CONTENT: Record<
//   VariantKey,
//   Record<
//     Locale,
//     Omit<
//       BlockData,
//       | 'blockType'
//       | 'displayMode'
//       | 'videoSource'
//       | 'videoUrl'
//       | 'videoFile'
//       | 'posterSource'
//       | 'posterUrl'
//       | 'posterMedia'
//       | 'posterAlt'
//     >
//   >
// > = {
//   default: {
//     ru: {
//       eyebrow: 'Walkthrough',
//       title: 'От задачи до готового prototype',
//       subheadline:
//         'Посмотрите, как Atelier Meridian превращает входящую задачу в ясную структуру, кликабельный prototype и материалы для следующего этапа.',
//       videoLabel: 'Видео',
//       durationLabel: '4:32',
//       highlightsTitle: 'Что вы увидите в видео',
//       ctaTitle: 'Нужен такой же уровень глубины для вашего проекта?',
//       ctaSubtext:
//         'Подходит для сайтов, digital-систем, mobile apps, portals и client-facing продуктов.',
//       primaryButtonLabel: 'Получить предложение',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'Посмотреть цены',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'Structure first' },
//         { label: 'Prototype-ready' },
//         { label: 'Dev handoff' },
//       ],
//       timeline: [
//         { number: '01', label: 'Brief', description: 'Как мы анализируем входящую задачу' },
//         { number: '02', label: 'Structure', description: 'Как рождаются структура и сценарии' },
//         { number: '03', label: 'Deliverables', description: 'Какие материалы получает клиент' },
//         { number: '04', label: 'Prototype', description: 'Как выглядит кликабельный prototype' },
//         { number: '05', label: 'Handoff', description: 'Как результат используется для dev handoff' },
//       ],
//       highlights: [
//         { label: 'Как мы анализируем входящую задачу' },
//         { label: 'Как рождаются структура и сценарии' },
//         { label: 'Какие материалы получает клиент' },
//         { label: 'Как выглядит кликабельный prototype' },
//         { label: 'Как результат используется для презентации или передачи в разработку' },
//       ],
//     },
//     en: {
//       eyebrow: 'Walkthrough',
//       title: 'From task to finished prototype',
//       subheadline:
//         'See how we work in practice: from brief and structure to prototype and dev handoff materials.',
//       videoLabel: 'Video',
//       durationLabel: '4:32',
//       highlightsTitle: 'What you will see in the video',
//       ctaTitle: 'Want this level of depth for your project?',
//       ctaSubtext:
//         'Works for websites, digital systems, mobile apps, portals, and client-facing products.',
//       primaryButtonLabel: 'Get Proposal',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'View Pricing',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'Structure first' },
//         { label: 'Prototype-ready' },
//         { label: 'Dev handoff' },
//       ],
//       timeline: [
//         { number: '01', label: 'Brief', description: 'How we analyze the incoming task' },
//         { number: '02', label: 'Structure', description: 'How structure and scenarios emerge' },
//         { number: '03', label: 'Deliverables', description: 'What materials the client receives' },
//         { number: '04', label: 'Prototype', description: 'What the clickable prototype looks like' },
//         { number: '05', label: 'Handoff', description: 'How the result is used for pitch or dev handoff' },
//       ],
//       highlights: [
//         { label: 'How we analyze the incoming task' },
//         { label: 'How structure and scenarios emerge' },
//         { label: 'What materials the client receives' },
//         { label: 'What the clickable prototype looks like' },
//         { label: 'How the result is used for pitch or dev handoff' },
//       ],
//     },
//     ar: {
//       eyebrow: 'العرض التوضيحي',
//       title: 'من المهمة إلى نموذج أولي قابل للنقر',
//       subheadline:
//         'شاهد كيف نعمل عملياً: من الملخص والهيكلة إلى النموذج الأولي ومواد تسليم المطورين.',
//       videoLabel: 'فيديو',
//       durationLabel: '4:32',
//       highlightsTitle: 'ما ستشاهده في الفيديو',
//       ctaTitle: 'هل تريد هذا المستوى من العمق لمشروعك؟',
//       ctaSubtext:
//         'يناسب المواقع والأنظمة الرقمية وتطبيقات الموبايل والبوابات.',
//       primaryButtonLabel: 'اطلب عرضاً',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'اطلع على الأسعار',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'الهيكلة أولاً' },
//         { label: 'نموذج أولي قابل للعرض' },
//         { label: 'جاهز للتسليم للتطوير' },
//       ],
//       timeline: [
//         { number: '01', label: 'الملخص', description: 'كيف نحلل المهمة الواردة' },
//         { number: '02', label: 'الهيكلة', description: 'كيف تنشأ الهيكلة والسيناريوهات' },
//         { number: '03', label: 'المخرجات', description: 'ما المواد التي يحصل عليها العميل' },
//         { number: '04', label: 'النموذج', description: 'كيف يبدو النموذج القابل للنقر' },
//         { number: '05', label: 'التسليم', description: 'كيف تُستخدم النتيجة للعرض أو تسليم المطورين' },
//       ],
//       highlights: [
//         { label: 'كيف نحلل المهمة الواردة' },
//         { label: 'كيف تنشأ الهيكلة والسيناريوهات' },
//         { label: 'ما المواد التي يحصل عليها العميل' },
//         { label: 'كيف يبدو النموذج القابل للنقر' },
//         { label: 'كيف تُستخدم النتيجة للعرض أو تسليم المطورين' },
//       ],
//     },
//   },

//   solutions: {
//     ru: {
//       eyebrow: 'Walkthrough',
//       title: 'Как мы собираем solution до старта разработки',
//       subheadline:
//         'Показываем, как complex task превращается в ясную структуру, prototype и материалы для следующего шага.',
//       videoLabel: 'Видео',
//       durationLabel: '4:18',
//       highlightsTitle: 'Что вы увидите в видео',
//       ctaTitle: 'Нужно собрать solution под ваш проект?',
//       ctaSubtext:
//         'Подходит для сайтов, client portals, dashboards, digital-систем и mobile apps.',
//       primaryButtonLabel: 'Получить предложение',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'Посмотреть цены',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'B2B systems' },
//         { label: 'Portals' },
//         { label: 'Dashboards' },
//       ],
//       timeline: [
//         { number: '01', label: 'Scope', description: 'Фиксируем тип решения и контекст' },
//         { number: '02', label: 'Logic', description: 'Собираем роли, сценарии и screen logic' },
//         { number: '03', label: 'Flows', description: 'Показываем ключевые user flows' },
//         { number: '04', label: 'Prototype', description: 'Собираем interfaces и prototype' },
//         { number: '05', label: 'Handoff', description: 'Готовим материалы для alignment или dev' },
//       ],
//       highlights: [
//         { label: 'Как solution превращается в понятную product structure' },
//         { label: 'Как мы показываем роли, модули и пользовательские сценарии' },
//         { label: 'Как prototype помогает согласовать решение до разработки' },
//         { label: 'Как выглядит следующий практический шаг после walkthrough' },
//       ],
//     },
//     en: {
//       eyebrow: 'Walkthrough',
//       title: 'How we shape a solution before development starts',
//       subheadline:
//         'See how a complex task turns into clear structure, prototype, and handoff-ready materials.',
//       videoLabel: 'Video',
//       durationLabel: '4:18',
//       highlightsTitle: 'What you will see in the video',
//       ctaTitle: 'Need to shape a solution for your project?',
//       ctaSubtext:
//         'Suitable for websites, client portals, dashboards, digital systems, and mobile apps.',
//       primaryButtonLabel: 'Get Proposal',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'View Pricing',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'B2B systems' },
//         { label: 'Portals' },
//         { label: 'Dashboards' },
//       ],
//       timeline: [
//         { number: '01', label: 'Scope', description: 'We define the solution type and context' },
//         { number: '02', label: 'Logic', description: 'We structure roles, scenarios, and screen logic' },
//         { number: '03', label: 'Flows', description: 'We shape the key user flows' },
//         { number: '04', label: 'Prototype', description: 'We assemble interfaces and a clickable prototype' },
//         { number: '05', label: 'Handoff', description: 'We prepare materials for alignment or dev' },
//       ],
//       highlights: [
//         { label: 'How a solution becomes a clear product structure' },
//         { label: 'How we define roles, modules, and user scenarios' },
//         { label: 'How the prototype helps align the project before development' },
//         { label: 'What the next practical step looks like after the walkthrough' },
//       ],
//     },
//     ar: {
//       eyebrow: 'العرض التوضيحي',
//       title: 'كيف نبني الحل قبل بدء التطوير',
//       subheadline:
//         'شاهد كيف تتحول المهمة المعقدة إلى هيكل واضح ونموذج أولي ومواد جاهزة للخطوة التالية.',
//       videoLabel: 'فيديو',
//       durationLabel: '4:18',
//       highlightsTitle: 'ما ستشاهده في الفيديو',
//       ctaTitle: 'هل تحتاج إلى بناء حل واضح لمشروعك؟',
//       ctaSubtext:
//         'مناسب للمواقع والبوابات ولوحات التحكم والأنظمة الرقمية وتطبيقات الجوال.',
//       primaryButtonLabel: 'اطلب عرضاً',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'اطلع على الأسعار',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'أنظمة B2B' },
//         { label: 'بوابات' },
//         { label: 'لوحات تحكم' },
//       ],
//       timeline: [
//         { number: '٠١', label: 'النطاق', description: 'نحدد نوع الحل وسياقه' },
//         { number: '٠٢', label: 'المنطق', description: 'نبني الأدوار والسيناريوهات ومنطق الشاشات' },
//         { number: '٠٣', label: 'المسارات', description: 'نوضح مسارات الاستخدام الأساسية' },
//         { number: '٠٤', label: 'النموذج', description: 'نجمع الواجهات والنموذج الأولي' },
//         { number: '٠٥', label: 'التسليم', description: 'نجهز المواد للاعتماد أو التطوير' },
//       ],
//       highlights: [
//         { label: 'كيف يتحول الحل إلى هيكل منتج واضح' },
//         { label: 'كيف نحدد الأدوار والوحدات وسيناريوهات الاستخدام' },
//         { label: 'كيف يساعد النموذج الأولي على اعتماد المشروع قبل التطوير' },
//         { label: 'ما الذي تبدو عليه الخطوة العملية التالية بعد الـ walkthrough' },
//       ],
//     },
//   },

//   startups: {
//     ru: {
//       eyebrow: 'Walkthrough',
//       title: 'Как стартап проходит первый этап с Atelier Meridian',
//       subheadline:
//         'Показываем, как идея превращается в ясную структуру, investor-ready prototype и понятную базу для следующего шага.',
//       videoLabel: 'Видео',
//       durationLabel: '4:05',
//       highlightsTitle: 'Что вы увидите в видео',
//       ctaTitle: 'Нужно собрать MVP, investor presentation или next step?',
//       ctaSubtext:
//         'Мы поможем структурировать идею и превратить её в понятную визуальную основу.',
//       primaryButtonLabel: 'Получить предложение',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'Посмотреть цены',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'MVP' },
//         { label: 'Investor-ready' },
//         { label: 'Mobile / Web' },
//       ],
//       timeline: [
//         { number: '01', label: 'Idea', description: 'Понимаем продукт, стадию и контекст' },
//         { number: '02', label: 'Framing', description: 'Собираем структуру и ценность продукта' },
//         { number: '03', label: 'Screens', description: 'Определяем ключевые сценарии и экраны' },
//         { number: '04', label: 'Prototype', description: 'Делаем решение наглядным для команды и инвесторов' },
//         { number: '05', label: 'Handoff', description: 'Готовим материалы для pitch или dev' },
//       ],
//       highlights: [
//         { label: 'Как быстро собрать product logic до полноценной разработки' },
//         { label: 'Как prototype помогает говорить с инвесторами и командой' },
//         { label: 'Как выйти к следующему этапу без лишней неопределённости' },
//       ],
//     },
//     en: {
//       eyebrow: 'Walkthrough',
//       title: 'How a startup moves through the first stage',
//       subheadline:
//         'We show how an early idea becomes clear structure, investor-ready prototype, and a practical base for the next step.',
//       videoLabel: 'Video',
//       durationLabel: '4:05',
//       highlightsTitle: 'What you will see in the video',
//       ctaTitle: 'Need to shape MVP, investor materials, or the next step?',
//       ctaSubtext:
//         'We help structure the idea and turn it into a credible visual base.',
//       primaryButtonLabel: 'Get Proposal',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'View Pricing',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'MVP' },
//         { label: 'Investor-ready' },
//         { label: 'Mobile / Web' },
//       ],
//       timeline: [
//         { number: '01', label: 'Idea', description: 'We understand the product, stage, and context' },
//         { number: '02', label: 'Framing', description: 'We shape structure and product value' },
//         { number: '03', label: 'Screens', description: 'We define key flows and screens' },
//         { number: '04', label: 'Prototype', description: 'We make the concept easier to show and discuss' },
//         { number: '05', label: 'Handoff', description: 'We prepare materials for pitch or development' },
//       ],
//       highlights: [
//         { label: 'How to shape product logic before full development starts' },
//         { label: 'How a prototype helps with investors and internal alignment' },
//         { label: 'How to move into the next stage with less uncertainty' },
//       ],
//     },
//     ar: {
//       eyebrow: 'العرض التوضيحي',
//       title: 'كيف تمر الشركة الناشئة بالمرحلة الأولى',
//       subheadline:
//         'نوضح كيف تتحول الفكرة المبكرة إلى هيكل واضح ونموذج أولي مناسب للمستثمرين وأساس عملي للخطوة التالية.',
//       videoLabel: 'فيديو',
//       durationLabel: '4:05',
//       highlightsTitle: 'ما ستشاهده في الفيديو',
//       ctaTitle: 'هل تحتاج إلى MVP أو مواد للمستثمرين أو خطوة تالية واضحة؟',
//       ctaSubtext:
//         'نساعدك على هيكلة الفكرة وتحويلها إلى أساس بصري مقنع.',
//       primaryButtonLabel: 'اطلب عرضاً',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'اطلع على الأسعار',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'MVP' },
//         { label: 'Investor-ready' },
//         { label: 'Mobile / Web' },
//       ],
//       timeline: [
//         { number: '٠١', label: 'الفكرة', description: 'نفهم المنتج والمرحلة والسياق' },
//         { number: '٠٢', label: 'الهيكلة', description: 'نبني الهيكل وقيمة المنتج' },
//         { number: '٠٣', label: 'الشاشات', description: 'نحدد المسارات والشاشات الأساسية' },
//         { number: '٠٤', label: 'النموذج', description: 'نجعل الفكرة أوضح للفريق والمستثمرين' },
//         { number: '٠٥', label: 'التسليم', description: 'نجهز المواد للعرض أو التطوير' },
//       ],
//       highlights: [
//         { label: 'كيف نبني منطق المنتج قبل بدء التطوير الكامل' },
//         { label: 'كيف يساعد النموذج الأولي في الحديث مع المستثمرين والفريق' },
//         { label: 'كيف ننتقل إلى المرحلة التالية بوضوح أكبر' },
//       ],
//     },
//   },

//   partners: {
//     ru: {
//       eyebrow: 'Walkthrough',
//       title: 'Как мы подключаемся как внешний premium-партнёр',
//       subheadline:
//         'Короткий walkthrough показывает, как партнёрская команда получает структуру, prototype и client-facing материалы без расширения штата.',
//       videoLabel: 'Видео',
//       durationLabel: '3:58',
//       highlightsTitle: 'Что вы увидите в видео',
//       ctaTitle: 'Нужен внешний premium product / interface layer?',
//       ctaSubtext:
//         'Подходит для white-label delivery, presale, redesign и сложных B2B-интерфейсов.',
//       primaryButtonLabel: 'Получить предложение',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'Посмотреть цены',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'White-label' },
//         { label: 'Presale' },
//         { label: 'Delivery support' },
//       ],
//       timeline: [
//         { number: '01', label: 'Brief', description: 'Получаем контекст проекта и ограничения' },
//         { number: '02', label: 'Scope', description: 'Фиксируем формат работы и ожидания' },
//         { number: '03', label: 'Structure', description: 'Собираем логику решения и интерфейсов' },
//         { number: '04', label: 'Prototype', description: 'Готовим client-facing или internal prototype' },
//         { number: '05', label: 'Delivery', description: 'Передаём материалы команде или клиенту' },
//       ],
//       highlights: [
//         { label: 'Как подключиться к проекту без лишнего операционного overhead' },
//         { label: 'Как собрать premium UI / product layer под client-facing work' },
//         { label: 'Как упростить presale, delivery и handoff' },
//       ],
//     },
//     en: {
//       eyebrow: 'Walkthrough',
//       title: 'How we join as an external premium partner',
//       subheadline:
//         'This walkthrough shows how partner teams get structure, prototype, and client-facing materials without expanding headcount.',
//       videoLabel: 'Video',
//       durationLabel: '3:58',
//       highlightsTitle: 'What you will see in the video',
//       ctaTitle: 'Need an external premium product / interface layer?',
//       ctaSubtext:
//         'Suitable for white-label delivery, presale, redesign, and complex B2B interface work.',
//       primaryButtonLabel: 'Get Proposal',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'View Pricing',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'White-label' },
//         { label: 'Presale' },
//         { label: 'Delivery support' },
//       ],
//       timeline: [
//         { number: '01', label: 'Brief', description: 'We receive project context and constraints' },
//         { number: '02', label: 'Scope', description: 'We align the format of work and expectations' },
//         { number: '03', label: 'Structure', description: 'We shape the logic of the solution and interfaces' },
//         { number: '04', label: 'Prototype', description: 'We prepare a client-facing or internal prototype' },
//         { number: '05', label: 'Delivery', description: 'We hand materials to the team or client' },
//       ],
//       highlights: [
//         { label: 'How to join a project without operational overhead' },
//         { label: 'How to add a premium UI / product layer to client-facing work' },
//         { label: 'How to simplify presale, delivery, and handoff' },
//       ],
//     },
//     ar: {
//       eyebrow: 'العرض التوضيحي',
//       title: 'كيف ننضم كشريك خارجي متميز',
//       subheadline:
//         'يوضح هذا الـ walkthrough كيف تحصل فرق الشركاء على هيكل ونموذج أولي ومواد موجهة للعميل من دون توسيع الفريق.',
//       videoLabel: 'فيديو',
//       durationLabel: '3:58',
//       highlightsTitle: 'ما ستشاهده في الفيديو',
//       ctaTitle: 'هل تحتاج إلى طبقة خارجية متميزة في المنتج أو الواجهة؟',
//       ctaSubtext:
//         'مناسب للعمل بنظام white-label وpresale وإعادة التصميم والواجهات المعقدة B2B.',
//       primaryButtonLabel: 'اطلب عرضاً',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'اطلع على الأسعار',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'White-label' },
//         { label: 'Presale' },
//         { label: 'Delivery support' },
//       ],
//       timeline: [
//         { number: '٠١', label: 'الـ brief', description: 'نستلم سياق المشروع وقيوده' },
//         { number: '٠٢', label: 'النطاق', description: 'نحدد صيغة العمل والتوقعات' },
//         { number: '٠٣', label: 'الهيكل', description: 'نبني منطق الحل والواجهات' },
//         { number: '٠٤', label: 'النموذج', description: 'نجهز نموذجاً أولياً للعميل أو للفريق' },
//         { number: '٠٥', label: 'التسليم', description: 'نسلم المواد للفريق أو للعميل' },
//       ],
//       highlights: [
//         { label: 'كيف ننضم إلى المشروع من دون عبء تشغيلي زائد' },
//         { label: 'كيف نضيف طبقة premium في المنتج والواجهة للأعمال الموجهة للعميل' },
//         { label: 'كيف نبسط presale والتنفيذ والتسليم' },
//       ],
//     },
//   },

//   proposal: {
//     ru: {
//       eyebrow: 'Walkthrough',
//       title: 'Как выглядит путь от заявки до понятного следующего шага',
//       subheadline:
//         'Компактный walkthrough показывает, как мы быстро переходим от входящей задачи к структуре, scope и следующему шагу.',
//       videoLabel: 'Видео',
//       durationLabel: '2:40',
//       highlightsTitle: 'Что внутри',
//       ctaTitle: 'Опишите задачу — мы подскажем следующий шаг',
//       ctaSubtext:
//         'Подходит для сайтов, продуктов, portals, dashboards, digital-систем и mobile apps.',
//       primaryButtonLabel: 'Заполнить форму',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'Посмотреть цены',
//       secondaryPageKey: 'pricing',
//       metaBadges: [{ label: 'Proposal' }],
//       timeline: [
//         { number: '01', label: 'Task', description: 'Понимаем контекст и тип проекта' },
//         { number: '02', label: 'Scope', description: 'Определяем формат и объём работы' },
//         { number: '03', label: 'Next step', description: 'Фиксируем, как двигаться дальше' },
//       ],
//       highlights: [
//         { label: 'Как мы читаем входящую задачу и определяем формат работы' },
//         { label: 'Как быстро понять, что именно нужно проекту на следующем шаге' },
//       ],
//     },
//     en: {
//       eyebrow: 'Walkthrough',
//       title: 'From incoming request to the next clear step',
//       subheadline:
//         'This compact walkthrough shows how we move from a raw request to structure, scope, and a practical next step.',
//       videoLabel: 'Video',
//       durationLabel: '2:40',
//       highlightsTitle: 'Inside the walkthrough',
//       ctaTitle: 'Describe the task and we will suggest the next step',
//       ctaSubtext:
//         'Suitable for websites, products, portals, dashboards, digital systems, and mobile apps.',
//       primaryButtonLabel: 'Fill the form',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'View Pricing',
//       secondaryPageKey: 'pricing',
//       metaBadges: [{ label: 'Proposal' }],
//       timeline: [
//         { number: '01', label: 'Task', description: 'We understand the context and project type' },
//         { number: '02', label: 'Scope', description: 'We define the format and scope of work' },
//         { number: '03', label: 'Next step', description: 'We make the path forward clear' },
//       ],
//       highlights: [
//         { label: 'How we read the incoming request and define the right format' },
//         { label: 'How to quickly understand what the project actually needs next' },
//       ],
//     },
//     ar: {
//       eyebrow: 'العرض التوضيحي',
//       title: 'من الطلب الوارد إلى الخطوة التالية الواضحة',
//       subheadline:
//         'يوضح هذا الـ walkthrough المدمج كيف ننتقل من الطلب الأولي إلى الهيكل والنطاق والخطوة التالية العملية.',
//       videoLabel: 'فيديو',
//       durationLabel: '2:40',
//       highlightsTitle: 'ما الذي ستجده داخل الـ walkthrough',
//       ctaTitle: 'صف المهمة وسنقترح الخطوة التالية',
//       ctaSubtext:
//         'مناسب للمواقع والمنتجات والبوابات ولوحات التحكم والأنظمة الرقمية وتطبيقات الجوال.',
//       primaryButtonLabel: 'املأ النموذج',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'اطلع على الأسعار',
//       secondaryPageKey: 'pricing',
//       metaBadges: [{ label: 'Proposal' }],
//       timeline: [
//         { number: '٠١', label: 'المهمة', description: 'نفهم السياق ونوع المشروع' },
//         { number: '٠٢', label: 'النطاق', description: 'نحدد الصيغة والنطاق' },
//         { number: '٠٣', label: 'الخطوة التالية', description: 'نوضح مسار العمل القادم' },
//       ],
//       highlights: [
//         { label: 'كيف نقرأ الطلب الوارد ونحدد صيغة العمل المناسبة' },
//         { label: 'كيف نفهم بسرعة ما الذي يحتاجه المشروع فعلاً بعد ذلك' },
//       ],
//     },
//   },

//   method: {
//     ru: {
//       eyebrow: 'Walkthrough',
//       title: 'Как устроен наш process на практике',
//       subheadline:
//         'Этот walkthrough показывает не абстрактную методологию, а то, как проект реально проходит через структуру, интерфейс и следующий шаг.',
//       videoLabel: 'Видео',
//       durationLabel: '4:12',
//       highlightsTitle: 'Что показывает walkthrough',
//       ctaTitle: 'Нужен такой process для вашего проекта?',
//       ctaSubtext:
//         'Опишите задачу — мы подскажем формат, сроки и следующий практический шаг.',
//       primaryButtonLabel: 'Получить предложение',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'Посмотреть цены',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'Process' },
//         { label: 'Structure first' },
//         { label: 'Clarity before code' },
//       ],
//       timeline: [
//         { number: '01', label: 'Input', description: 'Получаем контекст и вводные' },
//         { number: '02', label: 'Framing', description: 'Определяем scope и структуру' },
//         { number: '03', label: 'Flows', description: 'Собираем сценарии и экранную карту' },
//         { number: '04', label: 'UI', description: 'Формируем интерфейсы и prototype' },
//         { number: '05', label: 'Delivery', description: 'Подготавливаем next step' },
//       ],
//       highlights: [
//         { label: 'Как мы работаем от входящей задачи до структуры продукта' },
//         { label: 'Почему интерфейс строится на логике, а не наоборот' },
//         { label: 'Как подготовить проект к согласованию или разработке' },
//       ],
//     },
//     en: {
//       eyebrow: 'Walkthrough',
//       title: 'How our process works in practice',
//       subheadline:
//         'This walkthrough is not abstract methodology. It shows how a project actually moves through structure, interface, and the next step.',
//       videoLabel: 'Video',
//       durationLabel: '4:12',
//       highlightsTitle: 'What the walkthrough shows',
//       ctaTitle: 'Need the same process for your project?',
//       ctaSubtext:
//         'Describe the task and we will suggest the right format, timeline, and next practical step.',
//       primaryButtonLabel: 'Get Proposal',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'View Pricing',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'Process' },
//         { label: 'Structure first' },
//         { label: 'Clarity before code' },
//       ],
//       timeline: [
//         { number: '01', label: 'Input', description: 'We receive project context and inputs' },
//         { number: '02', label: 'Framing', description: 'We define scope and structure' },
//         { number: '03', label: 'Flows', description: 'We assemble scenarios and screen logic' },
//         { number: '04', label: 'UI', description: 'We shape interfaces and a prototype' },
//         { number: '05', label: 'Delivery', description: 'We prepare the next practical step' },
//       ],
//       highlights: [
//         { label: 'How we move from an incoming task to product structure' },
//         { label: 'Why the interface is built on logic, not the other way around' },
//         { label: 'How to prepare a project for alignment or development' },
//       ],
//     },
//     ar: {
//       eyebrow: 'العرض التوضيحي',
//       title: 'كيف تعمل عمليتنا على أرض الواقع',
//       subheadline:
//         'هذا الـ walkthrough لا يعرض منهجية نظرية، بل يوضح كيف يمر المشروع فعلياً عبر الهيكل والواجهة والخطوة التالية.',
//       videoLabel: 'فيديو',
//       durationLabel: '4:12',
//       highlightsTitle: 'ما الذي يوضحه الـ walkthrough',
//       ctaTitle: 'هل تحتاج إلى العملية نفسها لمشروعك؟',
//       ctaSubtext:
//         'صف المهمة وسنقترح الصيغة المناسبة والإطار الزمني والخطوة العملية التالية.',
//       primaryButtonLabel: 'اطلب عرضاً',
//       primaryPageKey: 'get-proposal',
//       secondaryButtonLabel: 'اطلع على الأسعار',
//       secondaryPageKey: 'pricing',
//       metaBadges: [
//         { label: 'Process' },
//         { label: 'Structure first' },
//         { label: 'Clarity before code' },
//       ],
//       timeline: [
//         { number: '٠١', label: 'المدخلات', description: 'نستلم السياق والمدخلات' },
//         { number: '٠٢', label: 'الهيكلة', description: 'نحدد النطاق والهيكل' },
//         { number: '٠٣', label: 'المسارات', description: 'نبني السيناريوهات ومنطق الشاشات' },
//         { number: '٠٤', label: 'الواجهة', description: 'نصوغ الواجهات والنموذج الأولي' },
//         { number: '٠٥', label: 'التسليم', description: 'نجهز الخطوة العملية التالية' },
//       ],
//       highlights: [
//         { label: 'كيف ننتقل من المهمة الواردة إلى هيكل المنتج' },
//         { label: 'لماذا تُبنى الواجهة على المنطق وليس العكس' },
//         { label: 'كيف نجهز المشروع للاعتماد أو التطوير' },
//       ],
//     },
//   },
// }

// function buildVideoBlock(pageKey: PageKey, locale: Locale): BlockData {
//   const config = PAGE_INSERTION_CONFIG[pageKey]
//   const content = CONTENT[config.variant][locale]

//   return {
//     blockType: 'videoWalkthroughHome',
//     displayMode: config.displayMode,
//     videoSource: 'url',
//     videoUrl: '',
//     posterSource: 'url',
//     posterUrl: '',
//     posterAlt: String(content.title ?? ''),
//     ...content,
//   }
// }

// function upsertVideoWalkthroughBlock(
//   layout: BlockData[],
//   pageKey: PageKey,
//   nextBlock: BlockData,
// ): BlockData[] {
//   const config = PAGE_INSERTION_CONFIG[pageKey]

//   const existingIndex = layout.findIndex(
//     (block) => block?.blockType === 'videoWalkthroughHome',
//   )

//   const blockWithExistingId =
//     existingIndex !== -1 && layout[existingIndex]?.id
//       ? { ...nextBlock, id: layout[existingIndex].id }
//       : nextBlock

//   const layoutWithoutExisting =
//     existingIndex !== -1
//       ? layout.filter((_, index) => index !== existingIndex)
//       : [...layout]

//   if (config.insertAfterBlockType) {
//     const anchorIndex = layoutWithoutExisting.findIndex(
//       (block) => block?.blockType === config.insertAfterBlockType,
//     )

//     if (anchorIndex !== -1) {
//       const nextLayout = [...layoutWithoutExisting]
//       nextLayout.splice(anchorIndex + 1, 0, blockWithExistingId)
//       return nextLayout
//     }

//     return [...layoutWithoutExisting, blockWithExistingId]
//   }

//   if (typeof config.insertAtIndex === 'number') {
//     const safeIndex = Math.max(0, Math.min(config.insertAtIndex, layoutWithoutExisting.length))
//     const nextLayout = [...layoutWithoutExisting]
//     nextLayout.splice(safeIndex, 0, blockWithExistingId)
//     return nextLayout
//   }

//   return [...layoutWithoutExisting, blockWithExistingId]
// }

// async function getPageByKey(
//   payload: Awaited<ReturnType<typeof getPayload>>,
//   pageKey: PageKey,
// ) {
//   const result = await payload.find({
//     collection: 'pages',
//     where: {
//       pageKey: {
//         equals: pageKey,
//       },
//     },
//     limit: 1,
//     locale: 'ru',
//     fallbackLocale: 'none',
//     depth: 0,
//   })

//   return result.docs[0] ?? null
// }

// async function seedPageLocale(
//   payload: Awaited<ReturnType<typeof getPayload>>,
//   pageId: string | number,
//   pageKey: PageKey,
//   locale: Locale,
// ) {
//   const page = await payload.findByID({
//     collection: 'pages',
//     id: pageId,
//     locale,
//     fallbackLocale: 'none',
//     depth: 0,
//   })

//   const currentLayout = Array.isArray(page?.layout)
//     ? (page.layout as BlockData[])
//     : []

//   const nextBlock = buildVideoBlock(pageKey, locale)
//   const nextLayout = upsertVideoWalkthroughBlock(currentLayout, pageKey, nextBlock)

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

//   for (const pageKey of PAGE_KEYS) {
//     const page = await getPageByKey(payload, pageKey)

//     if (!page) {
//       console.warn(`⚠️ Page not found: ${pageKey}`)
//       continue
//     }

//     for (const locale of LOCALES) {
//       await seedPageLocale(payload, page.id, pageKey, locale)
//       console.log(`✅ Seeded videoWalkthroughHome for ${pageKey} (${locale})`)
//     }
//   }

//   console.log('✅ Video Walkthrough Home seed completed')
//   process.exit(0)
// }

// main().catch((error) => {
//   console.error('❌ Video Walkthrough Home seed failed')
//   console.error(error)
//   process.exit(1)
// })

