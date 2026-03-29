// import 'dotenv/config'

// import { getPayload } from 'payload'
// import config from '../payload.config'

// type Locale = 'ru' | 'en' | 'ar'

// type BlockData = Record<string, unknown> & {
//   blockType: string
//   id?: string
// }

// const HOME_HERO_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'hero',
//     eyebrow: 'UX/UI Design Studio',
//     titleRows: [
//       {
//         segments: [{ text: 'Проектируем', tone: 'default' }],
//       },
//       {
//         segments: [
//           { text: 'сайты', tone: 'emphasis' },
//           { text: ', digital-системы', tone: 'default' },
//         ],
//       },
//       {
//         segments: [
//           { text: 'и ', tone: 'default' },
//           { text: 'mobile apps', tone: 'emphasis' },
//         ],
//       },
//       {
//         segments: [{ text: 'до начала разработки', tone: 'muted' }],
//       },
//     ],
//     title: 'Проектируем сайты, digital-системы и mobile apps до начала разработки',
//     description:
//       'Делаем дизайн сайтов, интерфейсов B2B-платформ и мобильных приложений с продуктовой логикой и понятной структурой.',
//     supportingNote: '',
//     tags: [
//       { label: 'Landing pages и сайты' },
//       { label: 'Web products' },
//       { label: 'Mobile apps' },
//       { label: 'MVP interfaces' },
//       { label: 'Investor-ready prototype' },
//       { label: 'Redesign' },
//     ],
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Посмотреть цены',
//     secondaryPageKey: 'pricing',
//     desktopBadgeLabel: 'Digital-система',
//     mobileBadgeLabel: 'Mobile app',
//   },

//   en: {
//     blockType: 'hero',
//     eyebrow: 'UX/UI Design Studio',
//     titleRows: [
//       {
//         segments: [
//           { text: 'We design ', tone: 'default' },
//           { text: 'websites', tone: 'emphasis' },
//           { text: ',', tone: 'default' },
//         ],
//       },
//       {
//         segments: [{ text: 'digital systems', tone: 'default' }],
//       },
//       {
//         segments: [
//           { text: 'and ', tone: 'default' },
//           { text: 'mobile apps', tone: 'emphasis' },
//         ],
//       },
//       {
//         segments: [{ text: 'before development begins', tone: 'muted' }],
//       },
//     ],
//     title: 'We design websites, digital systems and mobile apps before development begins',
//     description:
//       'Atelier Meridian helps founders, B2B teams, agencies, and integrators turn rough ideas, complex workflows, and product requirements into clear structure, premium interfaces, and a confident next step.',
//     supportingNote: '',
//     tags: [
//       { label: 'Websites' },
//       { label: 'Corporate Sites' },
//       { label: 'Digital Systems' },
//       { label: 'B2B Platforms' },
//       { label: 'Client Portals' },
//       { label: 'Dashboards' },
//       { label: 'Mobile Apps' },
//       { label: 'Redesign' },
//       { label: 'White-Label' },
//     ],
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'View Pricing',
//     secondaryPageKey: 'pricing',
//     desktopBadgeLabel: 'Digital System',
//     mobileBadgeLabel: 'Mobile App',
//   },

//   ar: {
//     blockType: 'hero',
//     eyebrow: 'استوديو لبنية المنتجات وتصميم الواجهات',
//     titleRows: [
//       {
//         segments: [{ text: 'نصمم المواقع والأنظمة الرقمية', tone: 'default' }],
//       },
//       {
//         segments: [{ text: 'وتطبيقات الجوال', tone: 'default' }],
//       },
//       {
//         segments: [{ text: 'قبل أن تبدأ مرحلة التطوير', tone: 'muted' }],
//       },
//     ],
//     title: 'نصمم المواقع والأنظمة الرقمية وتطبيقات الجوال قبل أن تبدأ مرحلة التطوير',
//     description:
//       'يساعد Atelier Meridian المؤسسين وفرق B2B والوكالات وشركاء التنفيذ على تحويل الفكرة الأولية أو المتطلبات المعقدة أو سير العمل غير الواضح إلى هيكل منتج واضح وواجهات متميزة وخطوة تالية يمكن البناء عليها بثقة.',
//     supportingNote:
//       'مناسب للمواقع، والأنظمة الرقمية، والبوابات، ولوحات التحكم، وتطبيقات الجوال، ومشاريع إعادة التصميم.',
//     tags: [
//       { label: 'المواقع' },
//       { label: 'مواقع الشركات' },
//       { label: 'الأنظمة الرقمية' },
//       { label: 'منصات B2B' },
//       { label: 'بوابات العملاء' },
//       { label: 'لوحات التحكم' },
//       { label: 'تطبيقات الجوال' },
//       { label: 'إعادة التصميم' },
//       { label: 'دعم الشركاء' },
//     ],
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الأسعار',
//     secondaryPageKey: 'pricing',
//     desktopBadgeLabel: 'نظام رقمي',
//     mobileBadgeLabel: 'تطبيق موبايل',
//   },
// }

// const HOME_VALUE_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'valueHome',
//     eyebrow:
//       'Работаем с сайтами, digital-системами, порталами, dashboards и мобильными приложениями.',
//     title:
//       'Для проектов, которые нужно не просто нарисовать, а объяснить, согласовать и запустить',
//     description: '',
//     items: [
//       {
//         variant: 'icon',
//         icon: 'trendingUp',
//         kicker: 'Raise',
//         title: 'Привлечь инвестиции',
//         description:
//           'Investor-ready prototype сайта, web-продукта или mobile app. Визуализация, которая говорит на языке инвестора.',
//       },
//       {
//         variant: 'icon',
//         icon: 'trophy',
//         kicker: 'Win',
//         title: 'Выиграть сделку',
//         description:
//           'Presale материалы для сложных B2B-сделок. Понятная архитектура системы или портала, которая убеждает enterprise-клиентов.',
//       },
//       {
//         variant: 'icon',
//         icon: 'code',
//         kicker: 'Build',
//         title: 'Передать в разработку',
//         description:
//           'Build-ready дизайн сайта, системы или приложения. Разработчики понимают, что делать, без лишних вопросов.',
//       },
//     ],
//   },

//   en: {
//     blockType: 'valueHome',
//     eyebrow: 'Websites, digital systems, portals, dashboards, and mobile apps',
//     title:
//       'For projects that need more than design — they need clarity, alignment, and a confident path forward',
//     description: '',
//     items: [
//       {
//         variant: 'icon',
//         icon: 'trendingUp',
//         kicker: '',
//         title: 'Raise',
//         description:
//           'Investor-ready prototype for your website, web product, or mobile app. A visual narrative that speaks the language of investors.',
//       },
//       {
//         variant: 'icon',
//         icon: 'trophy',
//         kicker: '',
//         title: 'Win',
//         description:
//           'Presale materials for complex B2B deals. Clear system architecture that convinces enterprise clients to move forward.',
//       },
//       {
//         variant: 'icon',
//         icon: 'code',
//         kicker: '',
//         title: 'Build',
//         description:
//           'Build-ready design for your website, platform, or app. Developers understand exactly what to do — no guesswork.',
//       },
//     ],
//   },

//   ar: {
//     blockType: 'valueHome',
//     eyebrow: 'المواقع، الأنظمة الرقمية، البوابات، لوحات التحكم، وتطبيقات الجوال',
//     title:
//       'للمشاريع التي لا تحتاج إلى تصميم فقط، بل إلى شرح أوضح واعتماد أسرع وانطلاقة أقوى',
//     description:
//       'لا نبدأ بالشاشات مباشرة. نبدأ بتوضيح الهدف، وحدود المشروع، والأدوار، ومسارات الاستخدام، ومنطق المنتج. بهذه الطريقة يصبح المشروع أسهل في العرض، وأسهل في التوافق الداخلي، وأسهل في الانتقال إلى التطوير.',
//     items: [
//       {
//         variant: 'step',
//         kicker: '',
//         title: 'الوضوح أولاً',
//         description: 'نبدأ بتوضيح الهدف، وحدود المشروع، والأدوار، ومسارات الاستخدام.',
//       },
//       {
//         variant: 'step',
//         kicker: '',
//         title: 'ثم الواجهة',
//         description: 'نبني واجهات متميزة تعكس منطق المنتج وتدعم أهداف المستخدم.',
//       },
//       {
//         variant: 'step',
//         kicker: '',
//         title: 'ثم الخطوة التالية',
//         description: 'نسلم مواد جاهزة للعرض أو التوافق الداخلي أو الانتقال إلى التطوير.',
//       },
//     ],
//   },
// }

// const HOME_VIDEO_WALKTHROUGH_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'videoWalkthroughHome',
//     eyebrow: 'Walkthrough',
//     title: 'От задачи до готового прототипа',
//     subheadline:
//       'Показываем на практике, как выглядит путь проекта: от brief и структуры до prototype и материалов для следующего этапа.',
//     metaBadges: [
//       { label: '3–5 минут' },
//       { label: 'Реальный процесс работы' },
//       { label: 'Понятно, что получает клиент' },
//     ],
//     videoLabel: 'Видео',
//     durationLabel: '4:32',
//     timeline: [
//       { number: '01', label: 'Задача', description: 'Разбор входящего brief' },
//       { number: '02', label: 'Структура', description: 'Архитектура продукта' },
//       { number: '03', label: 'Сценарии', description: 'Пользовательские пути' },
//       { number: '04', label: 'Прототип', description: 'Кликабельный интерфейс' },
//       { number: '05', label: 'Передача', description: 'Материалы для dev' },
//     ],
//     highlightsTitle: 'Что вы увидите в ролике',
//     highlights: [
//       { label: 'Как мы разбираем входящую задачу' },
//       { label: 'Как появляются структура и сценарии' },
//       { label: 'Какие материалы получает клиент' },
//       { label: 'Как выглядит кликабельный prototype' },
//       { label: 'Как результат используется для pitch или передачи в разработку' },
//     ],
//     ctaTitle: 'Хотите такой же уровень проработки для своего проекта?',
//     ctaSubtext:
//       'Подходит для сайтов, digital-систем, mobile apps, portals и client-facing продуктов.',
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Посмотреть цены',
//     secondaryPageKey: 'pricing',
//   },
//   en: {
//     blockType: 'videoWalkthroughHome',
//     eyebrow: 'Walkthrough',
//     title: 'From task to finished prototype',
//     subheadline:
//       'See how we work in practice: from brief and structure to prototype and dev handoff materials.',
//     metaBadges: [
//       { label: '3–5 minutes' },
//       { label: 'Real working process' },
//       { label: 'Clear deliverables' },
//     ],
//     videoLabel: 'Video',
//     durationLabel: '4:32',
//     timeline: [
//       { number: '01', label: 'Task', description: 'Brief analysis' },
//       { number: '02', label: 'Structure', description: 'Product architecture' },
//       { number: '03', label: 'Scenarios', description: 'User paths' },
//       { number: '04', label: 'Prototype', description: 'Clickable interface' },
//       { number: '05', label: 'Handoff', description: 'Dev materials' },
//     ],
//     highlightsTitle: 'What you will see in the video',
//     highlights: [
//       { label: 'How we analyze the incoming task' },
//       { label: 'How structure and scenarios emerge' },
//       { label: 'What materials the client receives' },
//       { label: 'What the clickable prototype looks like' },
//       { label: 'How the result is used for pitch or dev handoff' },
//     ],
//     ctaTitle: 'Want this level of depth for your project?',
//     ctaSubtext:
//       'Works for websites, digital systems, mobile apps, portals, and client-facing products.',
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'View Pricing',
//     secondaryPageKey: 'pricing',
//   },
//   ar: {
//     blockType: 'videoWalkthroughHome',
//     eyebrow: 'العرض التوضيحي',
//     title: 'من المهمة إلى نموذج أولي قابل للنقر',
//     subheadline:
//       'شاهد كيف نعمل عملياً: من الملخص والهيكلة إلى النموذج الأولي ومواد تسليم المطورين.',
//     metaBadges: [
//       { label: '٣-٥ دقائق' },
//       { label: 'عملية عمل حقيقية' },
//       { label: 'ناتج واضح للعميل' },
//     ],
//     videoLabel: 'فيديو',
//     durationLabel: '4:32',
//     timeline: [
//       { number: '٠١', label: 'المهمة', description: 'تحليل الملخص' },
//       { number: '٠٢', label: 'الهيكلة', description: 'هندسة المنتج' },
//       { number: '٠٣', label: 'السيناريوهات', description: 'مسارات المستخدم' },
//       { number: '٠٤', label: 'النموذج', description: 'واجهة قابلة للنقر' },
//       { number: '٠٥', label: 'التسليم', description: 'مواد التطوير' },
//     ],
//     highlightsTitle: 'ما ستشاهده في الفيديو',
//     highlights: [
//       { label: 'كيف نحلل المهمة الواردة' },
//       { label: 'كيف تنشأ الهيكلة والسيناريوهات' },
//       { label: 'ما المواد التي يحصل عليها العميل' },
//       { label: 'كيف يبدو النموذج القابل للنقر' },
//       { label: 'كيف تُستخدم النتيجة للعرض أو تسليم المطورين' },
//     ],
//     ctaTitle: 'هل تريد هذا المستوى من العمق لمشروعك؟',
//     ctaSubtext: 'يناسب المواقع والأنظمة الرقمية وتطبيقات الموبايل والبوابات.',
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الأسعار',
//     secondaryPageKey: 'pricing',
//   },
// }

// const HOME_DELIVERABLES_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'deliverablesHome',
//     eyebrow: 'Что входит в работу',
//     title: 'Что вы получаете на первом этапе',
//     items: [
//       {
//         icon: 'fileText',
//         title: 'Проектный каркас',
//         description: 'Цели, контекст, границы проекта — всё в одном документе',
//       },
//       {
//         icon: 'users',
//         title: 'Карта ролей и прав',
//         description: 'Кто что видит и зачем. Логика интерфейса до дизайна',
//       },
//       {
//         icon: 'gitBranch',
//         title: 'Ключевые пользовательские сценарии',
//         description: 'Основные пути использования продукта в деталях',
//       },
//       {
//         icon: 'layoutGrid',
//         title: 'Матрица экранов',
//         description: 'Полный состав экранов по ролям и состояниям',
//       },
//       {
//         icon: 'palette',
//         title: 'Визуальное направление',
//         description: 'Эстетика, стиль, референсы — согласованы до design-этапа',
//       },
//       {
//         icon: 'mousePointer',
//         title: 'Интерактивный прототип',
//         description: 'Premium прототип для презентаций и тестирования',
//       },
//       {
//         icon: 'layers',
//         title: 'Базовая система компонентов',
//         description: 'Базовые компоненты, готовые к масштабированию',
//       },
//       {
//         icon: 'fileCheck',
//         title: 'Сводка для передачи в разработку',
//         description: 'Всё, что нужно разработчику, чтобы начать без вопросов',
//       },
//     ],
//   },
//   en: {
//     blockType: 'deliverablesHome',
//     eyebrow: 'What You Receive',
//     title: 'What clients receive at the first stage',
//     items: [
//       {
//         icon: 'fileText',
//         title: 'Project Framework',
//         description: 'Goals, context, scope boundaries — all in one structured document',
//       },
//       {
//         icon: 'users',
//         title: 'Roles & Permissions Map',
//         description: 'Who sees what and why. Structure before screen design',
//       },
//       {
//         icon: 'gitBranch',
//         title: 'Core User Flows',
//         description: 'Key usage scenarios documented in detail',
//       },
//       {
//         icon: 'layoutGrid',
//         title: 'Screen Matrix',
//         description: 'All product screens organized by role and state',
//       },
//       {
//         icon: 'palette',
//         title: 'Visual Direction',
//         description: 'Aesthetics, style, references — aligned before the design phase',
//       },
//       {
//         icon: 'mousePointer',
//         title: 'Interactive Prototype',
//         description: 'Premium clickable prototype for presentations and testing',
//       },
//       {
//         icon: 'layers',
//         title: 'Component Foundation',
//         description: 'Base UI components ready to scale',
//       },
//       {
//         icon: 'fileCheck',
//         title: 'Developer Handoff Package',
//         description: 'Everything developers need to start — no questions asked',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'deliverablesHome',
//     eyebrow: 'ما تحصل عليه',
//     title: 'ما يحصل عليه العملاء في المرحلة الأولى',
//     items: [
//       {
//         icon: 'fileText',
//         title: 'هيكل المشروع',
//         description: 'يوضح الأهداف والقيود والأولويات',
//       },
//       {
//         icon: 'users',
//         title: 'مسارات المستخدم',
//         description: 'يبرز المسارات الأساسية ونقاط الانتقال',
//       },
//       {
//         icon: 'layoutGrid',
//         title: 'خريطة الشاشات',
//         description: 'يجمع منطق الشاشات في نظام واحد',
//       },
//       {
//         icon: 'mousePointer',
//         title: 'نموذج أولي قابل للنقر',
//         description: 'يجعل المنتج ملموساً قبل التطوير',
//       },
//       {
//         icon: 'layers',
//         title: 'نظام مكونات أساسي',
//         description: 'يضع أساساً متماسكاً للواجهة',
//       },
//       {
//         icon: 'fileCheck',
//         title: 'مواد التسليم للتطوير',
//         description: 'يسهل الانتقال إلى مرحلة التطوير',
//       },
//     ],
//   },
// }

// const HOME_WHY_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'whyHome',
//     eyebrow: 'Почему мы',
//     title: 'Почему Atelier Meridian',
//     description:
//       'Проектируем дизайн сайтов, digital-систем и мобильных приложений с продуктовым подходом.',
//     items: [
//       {
//         title: 'Экспертный подход senior-уровня',
//         description:
//           'Каждый проект ведёт опытный product-архитектор. Без junior-итераций, без пересогласований основ.',
//       },
//       {
//         title: 'AI-ускоренный workflow',
//         description:
//           'Используем AI для рутинных задач — больше времени на стратегические решения и качество.',
//       },
//       {
//         title: 'Структурированные спринты',
//         description:
//           'Понятный scope, фиксированные сроки, предсказуемый результат. Никаких сюрпризов.',
//       },
//       {
//         title: 'Без agency overhead',
//         description:
//           'Бутиковый формат без лишних слоёв менеджмента. Работаете напрямую с теми, кто делает.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'whyHome',
//     eyebrow: 'Why Us',
//     title: 'Why Atelier Meridian',
//     description:
//       'We design websites, digital systems, and mobile apps with a product-first approach.',
//     items: [
//       {
//         title: 'Senior-level expertise',
//         description:
//           'Every project is led by an experienced product architect. No junior iterations, no re-aligning fundamentals.',
//       },
//       {
//         title: 'AI-accelerated workflow',
//         description:
//           'We use AI for routine tasks — freeing more time for strategic decisions and quality refinement.',
//       },
//       {
//         title: 'Structured sprints',
//         description:
//           'Clear scope, fixed timelines, predictable outcomes. No surprises along the way.',
//       },
//       {
//         title: 'No agency overhead',
//         description:
//           'Boutique format without unnecessary management layers. You work directly with the people who do the work.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'whyHome',
//     eyebrow: 'لماذا نحن',
//     title: 'لماذا Atelier Meridian',
//     description:
//       'نصمم المواقع والأنظمة الرقمية وتطبيقات الموبايل بمنهجية تضع المنتج أولاً.',
//     items: [
//       {
//         title: 'خبرة على مستوى كبار المحترفين',
//         description:
//           'كل مشروع يقوده معماري منتجات ذو خبرة. لا تكرارات مبتدئة، ولا إعادة توجيه للأساسيات.',
//       },
//       {
//         title: 'سير عمل معزز بالذكاء الاصطناعي',
//         description:
//           'نستخدم الذكاء الاصطناعي للمهام الروتينية — مما يوفر المزيد من الوقت للقرارات الاستراتيجية وتحسين الجودة.',
//       },
//       {
//         title: 'سباقات منظمة',
//         description:
//           'نطاق واضح، جداول زمنية ثابتة، نتائج متوقعة. لا مفاجآت على طول الطريق.',
//       },
//       {
//         title: 'بدون أعباء الوكالات',
//         description:
//           'نموذج بوتيكي بدون طبقات إدارية غير ضرورية. تعمل مباشرة مع من ينفذون العمل.',
//       },
//     ],
//   },
// }

// const HOME_AUDIENCE_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'audienceHome',
//     sectionId: 'startups',
//     eyebrow: 'Для кого',
//     title: 'Кому мы помогаем',
//     problemLabel: 'Проблема',
//     solutionLabel: 'Что упрощаем',
//     resultLabel: 'Результат',
//     ctaLabel: 'Получить предложение',
//     ctaPageKey: 'get-proposal',
//     items: [
//       {
//         title: 'Founders и startup-команды',
//         problem: 'Нужен дизайн сайта, landing page или mobile app для презентации инвестору',
//         solution: 'Превращаем идею в структурированный прототип сайта или приложения',
//         result: 'Investor-ready визуализация и понятный scope для первой версии',
//       },
//       {
//         title: 'Агентства и integrators',
//         problem: 'Нужен дизайн сайта, портала или системы для клиента, но нет ресурсов',
//         solution: 'White-label дизайн сайтов, mobile apps, B2B-систем под вашим брендом',
//         result: 'Готовый deliverable для вашего клиента без расширения штата',
//       },
//       {
//         title: 'B2B-команды и enterprise',
//         problem: 'Нужен дизайн портала, dashboard или внутренней системы с ясной логикой',
//         solution: 'Проектируем интерфейсы B2B-платформ, порталов и корпоративных систем',
//         result: 'Документация и прототип для уверенного старта разработки',
//       },
//     ],
//   },
//   en: {
//     blockType: 'audienceHome',
//     sectionId: 'startups',
//     eyebrow: 'Who We Help',
//     title: 'Who we work with',
//     problemLabel: 'Challenge',
//     solutionLabel: 'What We Simplify',
//     resultLabel: 'Outcome',
//     ctaLabel: 'Get Proposal',
//     ctaPageKey: 'get-proposal',
//     items: [
//       {
//         title: 'Founders & Startup Teams',
//         problem: 'Need a website, landing page, or mobile app to present to investors',
//         solution: 'We turn your idea into a structured prototype ready for stakeholders',
//         result: 'Investor-ready visualization and a clear scope for your first version',
//       },
//       {
//         title: 'Agencies & Integrators',
//         problem: 'Need website, portal, or system design for a client but lack capacity',
//         solution: 'White-label design for websites, mobile apps, B2B systems under your brand',
//         result: 'Ready deliverable for your client without expanding your team',
//       },
//       {
//         title: 'B2B Teams & Enterprise',
//         problem: 'Need a portal, dashboard, or internal system with clear logic',
//         solution: 'We design interfaces for B2B platforms, portals, and corporate systems',
//         result: 'Documentation and prototype for a confident development start',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'audienceHome',
//     sectionId: 'startups',
//     eyebrow: 'من نساعد',
//     title: 'مع من نعمل',
//     problemLabel: 'التحدي',
//     solutionLabel: 'ما نبسطه',
//     resultLabel: 'النتيجة',
//     ctaLabel: 'طلب عرض',
//     ctaPageKey: 'get-proposal',
//     items: [
//       {
//         title: 'المؤسسون وفرق الشركات الناشئة',
//         problem: 'تحتاج موقعاً أو صفحة هبوط أو تطبيق موبايل لعرضه على المستثمرين',
//         solution: 'نحول فكرتك إلى نموذج أولي منظم جاهز لأصحاب المصلحة',
//         result: 'عرض مرئي جاهز للمستثمرين ونطاق واضح للنسخة الأولى',
//       },
//       {
//         title: 'الوكالات والشركاء',
//         problem: 'تحتاج تصميم موقع أو بوابة أو نظام لعميل لكن ليس لديك القدرة',
//         solution: 'تصميم White-label للمواقع وتطبيقات الموبايل وأنظمة B2B تحت علامتك التجارية',
//         result: 'تسليم جاهز لعميلك بدون توسيع فريقك',
//       },
//       {
//         title: 'فرق B2B والشركات الكبرى',
//         problem: 'تحتاج بوابة أو لوحة تحكم أو نظام داخلي بمنطق واضح',
//         solution: 'نصمم واجهات لمنصات B2B والبوابات والأنظمة المؤسسية',
//         result: 'توثيق ونموذج أولي لبداية تطوير واثقة',
//       },
//     ],
//   },
// }

// const HOME_CONCEPTS_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'conceptsHome',
//     eyebrow: 'Portfolio',
//     title: 'Концепты студии',
//     description:
//       'Демонстрационные проекты, показывающие наш подход к сайтам, digital-системам, web-продуктам, client portals и мобильным приложениям.',
//     challengeLabel: 'Задача',
//     structuredLabel: 'Что структурировали',
//     deliveredLabel: 'Что подготовили',
//     viewConceptsLabel: 'Посмотреть концепты',
//     conceptsPageKey: 'concepts',
//     previousAriaLabel: 'Previous concept',
//     nextAriaLabel: 'Next concept',
//     items: [
//       {
//         title: 'B2B-платформа и внутренняя система',
//         badge: 'ДИЗАЙН B2B-СИСТЕМ',
//         challenge:
//           'Собрать в единую digital-систему сложный операционный workflow с несколькими ролями, сценариями согласования и dashboard-логикой.',
//         structured:
//           'Роли и права доступа, ключевые пользовательские сценарии, экранную карту продукта, логику модулей и повседневные сценарии работы команды.',
//         delivered:
//           'Premium prototype, визуальную систему интерфейсов, структуру ключевых экранов и материалы для передачи в разработку.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2014_40_41-CePFENS9WLG2LnMAAvGPqCTSEXmfAA.png',
//       },
//       {
//         title: 'Дизайн мобильного приложения',
//         badge: 'ДИЗАЙН МОБИЛЬНЫХ ПРИЛОЖЕНИЙ',
//         challenge:
//           'Упаковать fintech-продукт в понятный mobile-first формат, который можно показать инвесторам и использовать как основу для следующего этапа product delivery.',
//         structured:
//           'Пользовательские сценарии, onboarding flow, логику финансовых экранов, приоритетные модули и структуру mobile app.',
//         delivered:
//           'Investor-ready prototype, визуальное направление, ключевые экраны приложения и материалы для следующего этапа разработки.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2014_36_16-zSBwb23xZfTkH98sfm4PeJisalCp4J.png',
//       },
//       {
//         title: 'Клиентский портал и dashboard',
//         badge: 'PORTAL & DASHBOARD DESIGN',
//         challenge:
//           'Превратить сложный сервисный процесс в понятный client portal с прозрачной навигацией, workflow-логикой и role-based структурой.',
//         structured:
//           'Архитектуру portal, пользовательские сценарии, статусы сервисных запросов, экранную матрицу и ключевые точки взаимодействия.',
//         delivered:
//           'Структуру интерфейсов, prototype ключевых экранов, UI-направление и пакет материалов для передачи в разработку.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2014_36_44-4Jg9PpfqhaWF1jqQJot1Qe8kayuahF.png',
//       },
//       {
//         title: 'Корпоративный сайт для B2B-компании',
//         badge: 'ДИЗАЙН САЙТОВ',
//         challenge:
//           'Создать корпоративный сайт, который выглядит premium, ясно объясняет сложный сервис и усиливает доверие к компании на этапе первого контакта.',
//         structured:
//           'Архитектуру сайта, иерархию смысловых блоков, логику ключевых страниц, сценарии навигации и подачу сложного B2B-предложения.',
//         delivered:
//           'Визуальную концепцию сайта, структуру основных страниц, UI-систему для web-интерфейса и материалы для передачи в разработку.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%81%D0%B0%D0%B8%CC%86%D1%82%20%D0%B4%D0%BB%D1%8F%20premium%20B2B-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8-SPKXmEMqMFrNE7j2kZJceAyP95E6Wr.png',
//       },
//       {
//         title: 'Investor-ready landing page для startup-продукта',
//         badge: 'STARTUP WEBSITE DESIGN',
//         challenge:
//           'Упаковать ранний продукт в landing page, который помогает быстро объяснить идею, ценность и сценарий продукта инвестору, партнёру или первым клиентам.',
//         structured:
//           'Логику первого экрана, narrative продукта, порядок смысловых блоков, ключевые proof points и визуальную подачу startup-концепции.',
//         delivered:
//           'Landing page concept, структуру сайта, визуальное направление и набор ключевых экранов для запуска или презентации.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Investor-ready%20landing%20page%20%D0%B4%D0%BB%D1%8F%20startup-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-AiYHAxUpvYA99vGPPXm86hKNtp0p4v.png',
//       },
//       {
//         title: 'SaaS-интерфейс для web-продукта',
//         badge: 'WEB PRODUCT DESIGN',
//         challenge:
//           'Собрать интерфейс web-продукта так, чтобы сложная функциональность выглядела понятно, современно и была готова к росту по модулям и ролям.',
//         structured:
//           'Ключевые пользовательские сценарии, экранную архитектуру, продуктовые модули, приоритетные workflows и иерархию основных разделов.',
//         delivered:
//           'Prototype web-продукта, структуру ключевых экранов, базовую систему компонентов и материалы для передачи в разработку.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaaS-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%CC%86%D1%81%20%D0%B4%D0%BB%D1%8F%20web-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-8Gn65RinntBPWpZHQNjQi1hZLKvCaJ.png',
//       },
//       {
//         title: 'Сервисная платформа / booking interface',
//         badge: 'SERVICE PLATFORM DESIGN',
//         challenge:
//           'Превратить сложный клиентский сервис в понятный digital-продукт с прозрачным поиском, выбором, booking flow и личным кабинетом.',
//         structured:
//           'Путь пользователя от выбора до бронирования, логику сервиса, ключевые точки принятия решения, статусы, экранную карту и сценарии повторного взаимодействия.',
//         delivered:
//           'Структуру платформы, prototype ключевых flows, UI-направление и материалы для следующего этапа продукта.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%3A%20booking%20interface-qA90VaWibxKuGT5KGLlC9qTlSMGM6O.png',
//       },
//     ],
//   },
//   en: {
//     blockType: 'conceptsHome',
//     eyebrow: 'Portfolio',
//     title: 'Studio Concepts',
//     description:
//       'Demonstration projects showcasing our approach to websites, digital systems, web products, client portals, and mobile apps.',
//     challengeLabel: 'Challenge',
//     structuredLabel: 'What We Structured',
//     deliveredLabel: 'What We Prepared',
//     viewConceptsLabel: 'View Concepts',
//     conceptsPageKey: 'concepts',
//     previousAriaLabel: 'Previous concept',
//     nextAriaLabel: 'Next concept',
//     items: [
//       {
//         title: 'B2B Platform & Internal System',
//         badge: 'B2B SYSTEM DESIGN',
//         challenge:
//           'Build a unified digital system from a complex operational workflow with multiple roles, approval scenarios, and dashboard logic.',
//         structured:
//           'Roles and permissions, key user scenarios, product screen map, module logic, and daily team workflows.',
//         delivered:
//           'Premium prototype, visual interface system, key screen structure, and dev handoff materials.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B2B-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%D0%B8%20%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-nfjB6TIcpHm2krsv9QxEOV6JqBP6jO.png',
//       },
//       {
//         title: 'Mobile App Design',
//         badge: 'MOBILE APP DESIGN',
//         challenge:
//           'Package a fintech product in a clear mobile-first format that can be shown to investors and used as a foundation for the next product delivery stage.',
//         structured:
//           'User scenarios, onboarding flow, financial screen logic, priority modules, and mobile app structure.',
//         delivered:
//           'Investor-ready prototype, visual direction, key app screens, and materials for the next development stage.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%94%D0%B8%D0%B7%D0%B0%D0%B8%CC%86%D0%BD%20%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-WPXYUHUvoGBadJ6HNUNIFKIWraf70B.png',
//       },
//       {
//         title: 'Client Portal & Dashboard',
//         badge: 'PORTAL & DASHBOARD DESIGN',
//         challenge:
//           'Transform a complex service process into a clear client portal with transparent navigation, workflow logic, and role-based structure.',
//         structured:
//           'Portal architecture, user scenarios, service request statuses, screen matrix, and key interaction points.',
//         delivered:
//           'Interface structure, key screen prototype, UI direction, and dev handoff package.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B8%CC%86%20%D0%BF%D0%BE%D1%80%D1%82%D0%B0%D0%BB%20%D0%B8%20dashboard-JlI8wKPt6UWq4rRVcyFQXwBsL2XAHb.png',
//       },
//       {
//         title: 'Corporate Website for B2B Company',
//         badge: 'WEBSITE DESIGN',
//         challenge:
//           'Create a corporate website that looks premium, clearly explains a complex service, and builds trust at first contact.',
//         structured:
//           'Site architecture, content block hierarchy, key page logic, navigation scenarios, and complex B2B offering presentation.',
//         delivered:
//           'Website visual concept, main page structure, UI system for web interface, and dev handoff materials.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%81%D0%B0%D0%B8%CC%86%D1%82%20%D0%B4%D0%BB%D1%8F%20premium%20B2B-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8-6RgbOJ9HFWZMTpHDeV3gRjnxMU9UZF.png',
//       },
//       {
//         title: 'Investor-Ready Startup Landing Page',
//         badge: 'STARTUP WEBSITE DESIGN',
//         challenge:
//           'Package an early-stage product into a landing page that quickly explains the idea, value, and product scenario to investors, partners, or first customers.',
//         structured:
//           'First screen logic, product narrative, content block order, key proof points, and startup concept visual presentation.',
//         delivered:
//           'Landing page concept, site structure, visual direction, and key screens for launch or presentation.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Investor-ready%20landing%20page%20%D0%B4%D0%BB%D1%8F%20startup-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-b85KxA9lUQySVtGgn38fMd2GX2STAN.png',
//       },
//       {
//         title: 'SaaS Interface for Web Product',
//         badge: 'WEB PRODUCT DESIGN',
//         challenge:
//           'Build a web product interface so that complex functionality looks clear, modern, and is ready to grow by modules and roles.',
//         structured:
//           'Key user scenarios, screen architecture, product modules, priority workflows, and main section hierarchy.',
//         delivered:
//           'Web product prototype, key screen structure, basic component system, and dev handoff materials.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaaS-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%CC%86%D1%81%20%D0%B4%D0%BB%D1%8F%20web-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-ypxGBLA8NjWgvW2cxBxjUL68xoXEGf.png',
//       },
//       {
//         title: 'Service Platform / Booking Interface',
//         badge: 'SERVICE PLATFORM DESIGN',
//         challenge:
//           'Transform a complex client service into a clear digital product with transparent search, selection, booking flow, and personal dashboard.',
//         structured:
//           'User journey from selection to booking, service logic, key decision points, statuses, screen map, and repeat interaction scenarios.',
//         delivered:
//           'Platform structure, key flow prototype, UI direction, and materials for the next product stage.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%3A%20booking%20interface-LmkTbFEVKsDBsJTHI6LSbVWUfH0eCy.png',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'conceptsHome',
//     eyebrow: 'مفاهيم الاستوديو',
//     title: 'مفاهيم الاستوديو',
//     description:
//       'مشاريع عرض توضح كيف نتعامل مع المواقع والأنظمة الرقمية والبوابات وتطبيقات الجوال من حيث الهيكل والمنطق البصري وجودة المخرجات.',
//     challengeLabel: 'التحدي',
//     structuredLabel: 'ما هيكلناه',
//     deliveredLabel: 'ما سلّمناه',
//     viewConceptsLabel: 'استعرض المفاهيم',
//     conceptsPageKey: 'concepts',
//     previousAriaLabel: 'النموذج السابق',
//     nextAriaLabel: 'النموذج التالي',
//     items: [
//       {
//         title: 'منصة B2B ونظام داخلي',
//         badge: 'تصميم أنظمة B2B',
//         challenge:
//           'بناء نظام رقمي موحد من سير عمل تشغيلي معقد بأدوار متعددة وسيناريوهات موافقة ومنطق لوحات تحكم.',
//         structured:
//           'الأدوار والصلاحيات، سيناريوهات المستخدم الرئيسية، خريطة شاشات المنتج، منطق الوحدات، وسير عمل الفريق اليومي.',
//         delivered:
//           'نموذج أولي احترافي، نظام واجهة بصري، هيكل الشاشات الرئيسية، ومواد تسليم المطورين.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B2B-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%D0%B8%20%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-nfjB6TIcpHm2krsv9QxEOV6JqBP6jO.png',
//       },
//       {
//         title: 'تصميم تطبيق موبايل',
//         badge: 'تصميم تطبيقات الموبايل',
//         challenge:
//           'تغليف منتج fintech في تنسيق mobile-first واضح يمكن عرضه على المستثمرين واستخدامه كأساس للمرحلة التالية.',
//         structured:
//           'سيناريوهات المستخدم، تدفق التسجيل، منطق الشاشات المالية، الوحدات ذات الأولوية، وهيكل التطبيق.',
//         delivered:
//           'نموذج أولي جاهز للمستثمرين، توجه بصري، شاشات التطبيق الرئيسية، ومواد للمرحلة التطويرية التالية.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%94%D0%B8%D0%B7%D0%B0%D0%B8%CC%86%D0%BD%20%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-WPXYUHUvoGBadJ6HNUNIFKIWraf70B.png',
//       },
//       {
//         title: 'بوابة العملاء ولوحة التحكم',
//         badge: 'تصميم البوابات ولوحات التحكم',
//         challenge:
//           'تحويل عملية خدمة معقدة إلى بوابة عملاء واضحة بتنقل شفاف ومنطق سير عمل وهيكل قائم على الأدوار.',
//         structured:
//           'هيكل البوابة، سيناريوهات المستخدم، حالات طلبات الخدمة، مصفوفة الشاشات، ونقاط التفاعل الرئيسية.',
//         delivered:
//           'هيكل الواجهة، نموذج الشاشات الرئيسية، توجه UI، وحزمة تسليم المطورين.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B8%CC%86%20%D0%BF%D0%BE%D1%80%D1%82%D0%B0%D0%BB%20%D0%B8%20dashboard-JlI8wKPt6UWq4rRVcyFQXwBsL2XAHb.png',
//       },
//       {
//         title: 'موقع شركة B2B',
//         badge: 'تصميم المواقع',
//         challenge:
//           'إنشاء موقع شركة يبدو احترافياً، ويشرح خدمة معقدة بوضوح، ويبني الثقة من أول تواصل.',
//         structured:
//           'هيكل الموقع، تسلسل كتل المحتوى، منطق الصفحات الرئيسية، سيناريوهات التنقل، وعرض خدمة B2B المعقدة.',
//         delivered:
//           'مفهوم الموقع البصري، هيكل الصفحة الرئيسية، نظام UI للواجهة الويب، ومواد تسليم المطورين.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%81%D0%B0%D0%B8%CC%86%D1%82%20%D0%B4%D0%BB%D1%8F%20premium%20B2B-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8-6RgbOJ9HFWZMTpHDeV3gRjnxMU9UZF.png',
//       },
//       {
//         title: 'صفحة هبوط جاهزة للمستثمرين',
//         badge: 'تصميم مواقع الشركات الناشئة',
//         challenge:
//           'تغليف منتج في مرحلة مبكرة في صفحة هبوط تشرح بسرعة الفكرة والقيمة وسيناريو المنتج للمستثمرين أو الشركاء أو العملاء الأوائل.',
//         structured:
//           'منطق الشاشة الأولى، سرد المنتج، ترتيب كتل المحتوى، نقاط الإثبات الرئيسية، والعرض البصري لمفهوم الشركة الناشئة.',
//         delivered:
//           'مفهوم صفحة الهبوط، هيكل الموقع، توجه بصري، والشاشات الرئيسية للإطلاق أو العرض.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Investor-ready%20landing%20page%20%D0%B4%D0%BB%D1%8F%20startup-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-b85KxA9lUQySVtGgn38fMd2GX2STAN.png',
//       },
//       {
//         title: 'واجهة SaaS لمنتج ويب',
//         badge: 'تصميم منتجات الويب',
//         challenge:
//           'بناء واجهة منتج ويب بحيث تبدو الوظائف المعقدة واضحة وعصرية وجاهزة للنمو بالوحدات والأدوار.',
//         structured:
//           'سيناريوهات المستخدم الرئيسية، هيكل الشاشات، وحدات المنتج، سير العمل ذات الأولوية، وتسلسل الأقسام الرئيسية.',
//         delivered:
//           'نموذج منتج الويب، هيكل الشاشات الرئيسية، نظام مكونات أساسي، ومواد تسليم المطورين.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaaS-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%81%D0%A8%D0%BA%D0%B8%D0%B5%D0%A1%20%D0%B4%D0%BB%D1%8F%20web-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-ypxGBLA8NjWgvW2cxBxjUL68xoXEGf.png',
//       },
//       {
//         title: 'منصة خدمات / واجهة حجز',
//         badge: 'تصميم منصات الخدمات',
//         challenge:
//           'تحويل خدمة عملاء معقدة إلى منتج رقمي واضح ببحث شفاف واختيار وتدفق حجز ولوحة تحكم شخصية.',
//         structured:
//           'رحلة المستخدم من الاختيار إلى الحجز، منطق الخدمة، نقاط القرار الرئيسية، الحالات، خريطة الشاشات، وسيناريوهات التفاعل المتكرر.',
//         delivered:
//           'هيكل المنصة، نموذج التدفق الرئيسي، توجه UI، ومواد للمرحلة التالية من المنتج.',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%3A%20booking%20interface-LmkTbFEVKsDBsJTHI6LSbVWUfH0eCy.png',
//       },
//     ],
//   },
// }

// const HOME_METHOD_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'methodHome',
//     sectionId: 'method',
//     eyebrow: 'Process',
//     title: 'Метод работы',
//     description: 'Async-first подход. Меньше лишних созвонов, понятный scope, быстрее согласование.',
//     items: [
//       {
//         number: '01',
//         title: 'Scope',
//         description:
//           'Фиксируем границы проекта, роли и ключевые сценарии. Scope становится понятным до старта работы.',
//         details: [{ label: 'Async brief' }, { label: 'Scope document' }, { label: 'Timeline estimate' }],
//       },
//       {
//         number: '02',
//         title: 'Frame',
//         description:
//           'Формулируем продуктовую логику. Структурный каркас, который станет основой для всех решений.',
//         details: [{ label: 'Goal alignment' }, { label: 'Constraints map' }, { label: 'Success criteria' }],
//       },
//       {
//         number: '03',
//         title: 'Architect',
//         description:
//           'Проектируем UX-архитектуру: роли, сценарии, экранную структуру. До первого пикселя дизайна.',
//         details: [{ label: 'Role map' }, { label: 'User scenarios' }, { label: 'Screen matrix' }],
//       },
//       {
//         number: '04',
//         title: 'Design',
//         description:
//           'Создаём premium-интерфейсы. Визуальное направление, UI-система, интерактивный prototype.',
//         details: [{ label: 'Визуальное направление' }, { label: 'UI-компоненты' }, { label: 'Прототип' }],
//       },
//       {
//         number: '05',
//         title: 'Deliver',
//         description:
//           'Передаём в разработку с понятной документацией — без лишних вопросов.',
//         details: [{ label: 'Design system' }, { label: 'Сводка для разработки' }, { label: 'Developer support' }],
//       },
//     ],
//   },
//   en: {
//     blockType: 'methodHome',
//     sectionId: 'method',
//     eyebrow: 'Process',
//     title: 'How We Work',
//     description: 'Async-first approach. Fewer unnecessary calls, clear scope, faster approvals.',
//     items: [
//       {
//         number: '01',
//         title: 'Scope',
//         description:
//           'We define project boundaries, roles, and key scenarios. Scope is fixed before work begins.',
//         details: [{ label: 'Async brief' }, { label: 'Scope document' }, { label: 'Timeline estimate' }],
//       },
//       {
//         number: '02',
//         title: 'Frame',
//         description:
//           'We formulate the product logic. A structural framework as the foundation for all decisions.',
//         details: [{ label: 'Goal alignment' }, { label: 'Constraints map' }, { label: 'Success criteria' }],
//       },
//       {
//         number: '03',
//         title: 'Architect',
//         description:
//           'We design the UX architecture: roles, flows, screen structure. Before the first pixel of design.',
//         details: [{ label: 'Role map' }, { label: 'User scenarios' }, { label: 'Screen matrix' }],
//       },
//       {
//         number: '04',
//         title: 'Design',
//         description:
//           'We create premium interfaces. Visual direction, UI system, interactive prototype.',
//         details: [{ label: 'Visual direction' }, { label: 'UI components' }, { label: 'Prototype' }],
//       },
//       {
//         number: '05',
//         title: 'Deliver',
//         description:
//           'We hand off to development with clear documentation — no extra questions needed.',
//         details: [{ label: 'Design system' }, { label: 'Dev summary' }, { label: 'Developer support' }],
//       },
//     ],
//   },
//   ar: {
//     blockType: 'methodHome',
//     sectionId: 'method',
//     eyebrow: 'المنهجية',
//     title: 'كيف نعمل',
//     description: 'منهجية غير متزامنة أولاً. مكالمات أقل، نطاق واضح، موافقات أسرع.',
//     items: [
//       {
//         number: '01',
//         title: 'النطاق',
//         description:
//           'نحدد حدود المشروع والأدوار والسيناريوهات الرئيسية. النطاق ثابت قبل بدء العمل.',
//         details: [{ label: 'ملخص غير متزامن' }, { label: 'وثيقة النطاق' }, { label: 'تقدير الجدول الزمني' }],
//       },
//       {
//         number: '02',
//         title: 'الإطار',
//         description:
//           'نصوغ منطق المنتج. إطار هيكلي كأساس لجميع القرارات.',
//         details: [{ label: 'توافق الأهداف' }, { label: 'خريطة القيود' }, { label: 'معايير النجاح' }],
//       },
//       {
//         number: '03',
//         title: 'الهندسة',
//         description:
//           'نصمم هندسة تجربة المستخدم: الأدوار، التدفقات، هيكل الشاشات. قبل أول بكسل من التصميم.',
//         details: [{ label: 'خريطة الأدوار' }, { label: 'سيناريوهات المستخدم' }, { label: 'مصفوفة الشاشات' }],
//       },
//       {
//         number: '04',
//         title: 'التصميم',
//         description:
//           'ننشئ واجهات احترافية. التوجه البصري، نظام UI، النموذج التفاعلي.',
//         details: [{ label: 'التوجه البصري' }, { label: 'مكونات UI' }, { label: 'النموذج الأولي' }],
//       },
//       {
//         number: '05',
//         title: 'التسليم',
//         description:
//           'نسلّم للتطوير بتوثيق واضح — لا حاجة لأسئلة إضافية.',
//         details: [{ label: 'نظام التصميم' }, { label: 'ملخص التطوير' }, { label: 'دعم المطورين' }],
//       },
//     ],
//   },
// }

// const HOME_PROPOSAL_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'proposalHome',
//     sectionId: 'proposal',
//     title: 'Закажите дизайн сайта, системы или приложения',
//     description:
//       'Расскажите о проекте — сайт, портал, B2B-система или mobile app. Мы предложим формат работы, сроки и стоимость без обязательного звонка.',
//     steps: [
//       {
//         icon: 'fileText',
//         title: 'Оставьте бриф',
//         description: 'Опишите сайт, систему или приложение',
//       },
//       {
//         icon: 'mail',
//         title: 'Получите рекомендацию',
//         description: 'Формат, сроки и ориентир по стоимости',
//       },
//       {
//         icon: 'checkCircle',
//         title: 'Подтвердите следующий шаг',
//         description: 'Или пришлите дополнительные материалы',
//       },
//     ],
//     ctaLabel: 'Получить предложение',
//     ctaPageKey: 'get-proposal',
//     footerNote: 'Для сайта, mobile app, портала или digital-системы',
//   },
//   en: {
//     blockType: 'proposalHome',
//     sectionId: 'proposal',
//     title: 'Order Website, System, or App Design',
//     description:
//       "Tell us about your project — website, portal, B2B system, or mobile app. We'll propose a work format, timeline, and pricing without a mandatory call.",
//     steps: [
//       {
//         icon: 'fileText',
//         title: 'Submit a Brief',
//         description: 'Describe your website, system, or app',
//       },
//       {
//         icon: 'mail',
//         title: 'Get a Recommendation',
//         description: 'Format, timeline, and price estimate',
//       },
//       {
//         icon: 'checkCircle',
//         title: 'Confirm Next Step',
//         description: 'Or send additional materials',
//       },
//     ],
//     ctaLabel: 'Get Proposal',
//     ctaPageKey: 'get-proposal',
//     footerNote: 'For websites, mobile apps, portals, or digital systems',
//   },
//   ar: {
//     blockType: 'proposalHome',
//     sectionId: 'proposal',
//     title: 'اطلب تصميم موقع أو نظام أو تطبيق',
//     description:
//       'أخبرنا عن مشروعك — موقع، بوابة، نظام B2B، أو تطبيق موبايل. سنقترح صيغة العمل والجدول الزمني والتسعير بدون مكالمة إلزامية.',
//     steps: [
//       {
//         icon: 'fileText',
//         title: 'أرسل ملخصاً',
//         description: 'صف موقعك أو نظامك أو تطبيقك',
//       },
//       {
//         icon: 'mail',
//         title: 'احصل على توصية',
//         description: 'الصيغة والجدول الزمني وتقدير السعر',
//       },
//       {
//         icon: 'checkCircle',
//         title: 'أكد الخطوة التالية',
//         description: 'أو أرسل مواد إضافية',
//       },
//     ],
//     ctaLabel: 'طلب عرض',
//     ctaPageKey: 'get-proposal',
//     footerNote: 'للمواقع وتطبيقات الموبايل والبوابات والأنظمة الرقمية',
//   },
// }

// const HOME_SAMPLE_PREVIEW_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'samplePreviewHome',
//     eyebrow: 'Материалы первого этапа',
//     title: 'Что вы получаете на первом этапе',
//     description:
//       'Структура, логика, прототип и документация — всё, что нужно для уверенного старта разработки.',
//     items: [
//       {
//         title: 'Структурная рамка',
//         subtitle: 'Цели, контекст, границы проекта',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%BC%D0%BA%D0%B0-ymV853nVDkOWvhLmmek2QmfUFbENUM.png',
//         alt: 'Strategic framing document showing goals, scope, criteria, priorities and restrictions',
//       },
//       {
//         title: 'Архитектура сценариев',
//         subtitle: 'Структура пользовательских flows',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B0%20%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B5%D0%B2%20-1nYqEzacq4GuL3RHRwA9Ss9VDASxnW.png',
//         alt: 'Flow architecture diagram showing entry points, choices, success and warning paths',
//       },
//       {
//         title: 'Экранная матрица',
//         subtitle: 'Матрица экранов по ролям',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BC%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0%20-ERkytJ7R8AhKODiumExXqNLPexWfT8.png',
//         alt: 'Screen matrix showing role-based screen structure across Core, Finance, Team Leads, and Users',
//       },
//       {
//         title: 'Интерактивный прототип',
//         subtitle: 'Кликабельный прототип ключевых flows',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%20-sl3pKDIW3vAOChr0PT1KdWnbmO8RND.png',
//         alt: 'Interactive prototype showing laptop and mobile app with polished UI',
//       },
//     ],
//     bottomNote:
//       'Все материалы передаются в Figma с полной документацией и готовы к обсуждению с командой разработки.',
//   },
//   en: {
//     blockType: 'samplePreviewHome',
//     eyebrow: 'First Phase Deliverables',
//     title: 'What You Get in the First Phase',
//     description:
//       'Structure, logic, prototype, and documentation — everything needed for a confident dev kickoff.',
//     items: [
//       {
//         title: 'Structural Framework',
//         subtitle: 'Goals, context, project boundaries',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0-izxISwxnsh153iue55fxis0BfXpJZy.png',
//         alt: 'Strategic framing document showing goals, scope, criteria, priorities and restrictions',
//       },
//       {
//         title: 'Scenario Architecture',
//         subtitle: 'User flow structure',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5%20%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8-6Cd1Gr0fJ9T1bQvpwusenVE1qH0EeF.png',
//         alt: 'User scenarios diagram showing entry points, choices, success and warning paths',
//       },
//       {
//         title: 'Screen Matrix',
//         subtitle: 'Role-based screen map',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0%20-CjniSYt05jhRhvZGAnVzEoa5nOSJcb.png',
//         alt: 'Screen matrix showing role-based screen structure across Core, Finance, Team Leads, and Users',
//       },
//       {
//         title: 'Interactive Prototype',
//         subtitle: 'Clickable prototype of key flows',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%20-f73wC5LUW8rwRcU9w00neMYkmRnmYY.png',
//         alt: 'Interactive prototype showing laptop and mobile app with polished UI',
//       },
//     ],
//     bottomNote:
//       'All materials are delivered in Figma with full documentation, ready to discuss with your dev team.',
//   },
//   ar: {
//     blockType: 'samplePreviewHome',
//     eyebrow: 'تسليمات المرحلة الأولى',
//     title: 'ما تحصل عليه في المرحلة الأولى',
//     description:
//       'الهيكلة، المنطق، النموذج الأولي، والتوثيق — كل ما تحتاجه لبداية تطوير واثقة.',
//     items: [
//       {
//         title: 'الإطار الهيكلي',
//         subtitle: 'الأهداف، السياق، حدود المشروع',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0-izxISwxnsh153iue55fxis0BfXpJZy.png',
//         alt: 'وثيقة الإطار الاستراتيجي توضح الأهداف والنطاق والمعايير والأولويات والقيود',
//       },
//       {
//         title: 'هندسة السيناريوهات',
//         subtitle: 'هيكل تدفق المستخدم',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5%20%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8-6Cd1Gr0fJ9T1bQvpwusenVE1qH0EeF.png',
//         alt: 'مخطط سيناريوهات المستخدم يوضح نقاط الدخول والاختيارات ومسارات النجاح والتحذير',
//       },
//       {
//         title: 'مصفوفة الشاشات',
//         subtitle: 'خريطة الشاشات حسب الدور',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0%20-CjniSYt05jhRhvZGAnVzEoa5nOSJcb.png',
//         alt: 'مصفوفة الشاشات توضح هيكل الشاشات حسب الأدوار عبر الأساسي والمالية وقادة الفرق والمستخدمين',
//       },
//       {
//         title: 'النموذج التفاعلي',
//         subtitle: 'نموذج قابل للنقر للتدفقات الرئيسية',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B8%D0%BD%D1%82%D0%B5%D8%B1%D0%A7%D0%83%D0%A8%D0%AA%D0%B8%D0%A2%D0%B2%D0%A8%D0%A8%D0%88%20%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%20-f73wC5LUW8rwRcU9w00neMYkmRnmYY.png',
//         alt: 'نموذج تفاعلي يعرض لابتوب وتطبيق موبايل بواجهة مصقولة',
//       },
//     ],
//     bottomNote:
//       'جميع المواد تُسلّم في Figma مع توثيق كامل، جاهزة للمناقشة مع فريق التطوير.',
//   },
// }

// const HOME_TRUST_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'trustHome',
//     items: [
//       { label: 'Дизайн сайтов, порталов и B2B-систем' },
//       { label: 'Мобильные приложения и dashboards' },
//       { label: 'Редизайн и UX/UI-улучшение' },
//       { label: 'От структуры до передачи в разработку' },
//     ],
//   },
//   en: {
//     blockType: 'trustHome',
//     items: [
//       { label: 'Website, portal, and B2B system design' },
//       { label: 'Mobile apps and dashboards' },
//       { label: 'Redesign and UX/UI improvement' },
//       { label: 'From structure to dev handoff' },
//     ],
//   },
//   ar: {
//     blockType: 'trustHome',
//     items: [
//       { label: 'تصميم المواقع والبوابات وأنظمة B2B' },
//       { label: 'تطبيقات الموبايل ولوحات التحكم' },
//       { label: 'إعادة التصميم وتحسين UX/UI' },
//       { label: 'من الهيكلة إلى تسليم المطورين' },
//     ],
//   },
// }

// const HOME_FAQ_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'faqHome',
//     eyebrow: 'FAQ',
//     title: 'Частые вопросы',
//     items: [
//       {
//         question: 'С какими проектами вы работаете?',
//         answer:
//           'Мы проектируем сайты, корпоративные порталы, B2B-платформы, клиентские системы, dashboards и мобильные приложения. Работаем как с новыми проектами, так и с редизайном существующих продуктов.',
//       },
//       {
//         question: 'Что я получу после отправки brief?',
//         answer:
//           'В течение 24-48 часов вы получите рекомендацию по формату работы, ориентир по срокам и стартовую стоимость — для сайта, системы или приложения любой сложности.',
//       },
//       {
//         question: 'Можно ли работать без звонков?',
//         answer:
//           'Да, мы работаем async-first. Большинство коммуникации происходит в письменном формате. Созвоны — по необходимости и с понятной agenda.',
//       },
//       {
//         question: 'Поддерживаете ли вы white-label формат?',
//         answer:
//           'Да. Для партнёров и integrators у нас есть White-Label Partner Desk. Вы получаете premium дизайн сайтов, систем и приложений под своим брендом.',
//       },
//       {
//         question: 'Можно ли прийти с существующим сайтом или системой для редизайна?',
//         answer:
//           'Конечно. Мы работаем как с идеями на этапе концепции, так и с редизайном существующих сайтов, порталов и digital-продуктов.',
//       },
//       {
//         question: 'Подписываете ли вы NDA?',
//         answer:
//           'Да, стандартная практика. Отправьте ваш NDA или используйте наш шаблон — подпишем до начала обсуждения деталей.',
//       },
//       {
//         question: 'Как быстро может стартовать проект?',
//         answer:
//           'Обычно через 3-5 рабочих дней после согласования scope и оплаты. При срочной необходимости — обсуждаем приоритетный старт.',
//       },
//       {
//         question: 'Вы помогаете только с дизайном или со структурой продукта тоже?',
//         answer:
//           'Мы начинаем со структуры. Product framing, UX-архитектура, роли и flows — это основа. Дизайн сайта, системы или приложения строится на этом фундаменте.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'faqHome',
//     eyebrow: 'FAQ',
//     title: 'Frequently Asked Questions',
//     items: [
//       {
//         question: 'What kind of projects do you work on?',
//         answer:
//           'We design websites, corporate portals, B2B platforms, client systems, dashboards, and mobile apps. We work with both new projects and redesigns of existing products.',
//       },
//       {
//         question: 'What will I get after submitting a brief?',
//         answer:
//           "Within 24-48 hours, you'll receive a recommendation on the work format, timeline estimate, and starting price — for a website, system, or app of any complexity.",
//       },
//       {
//         question: 'Can we work without video calls?',
//         answer:
//           'Yes, we work async-first. Most communication happens in writing. Calls are scheduled only when needed and with a clear agenda.',
//       },
//       {
//         question: 'Do you support white-label format?',
//         answer:
//           'Yes. For partners and integrators, we offer the White-Label Partner Desk. You get premium website, system, and app design under your own brand.',
//       },
//       {
//         question: 'Can I come with an existing website or system for redesign?',
//         answer:
//           'Absolutely. We work with both early-stage concepts and redesigns of existing websites, portals, and digital products.',
//       },
//       {
//         question: 'Do you sign NDAs?',
//         answer:
//           "Yes, it's standard practice. Send us your NDA or use our template — we'll sign before discussing details.",
//       },
//       {
//         question: 'How quickly can a project start?',
//         answer:
//           'Usually within 3-5 business days after scope approval and payment. For urgent needs, we can discuss priority start.',
//       },
//       {
//         question: 'Do you only help with design or with product structure too?',
//         answer:
//           'We start with structure. Product framing, UX architecture, roles, and flows — that’s the foundation. Website, system, or app design is built on this base.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'faqHome',
//     eyebrow: 'الأسئلة الشائعة',
//     title: 'الأسئلة الشائعة',
//     items: [
//       {
//         question: 'ما نوع المشاريع التي تعملون عليها؟',
//         answer:
//           'نصمم المواقع والبوابات المؤسسية ومنصات B2B وأنظمة العملاء ولوحات التحكم وتطبيقات الموبايل. نعمل مع المشاريع الجديدة وإعادة تصميم المنتجات الحالية.',
//       },
//       {
//         question: 'ماذا سأحصل عليه بعد إرسال الملخص؟',
//         answer:
//           'خلال 24-48 ساعة، ستحصل على توصية بصيغة العمل وتقدير الجدول الزمني والسعر المبدئي — لموقع أو نظام أو تطبيق بأي درجة من التعقيد.',
//       },
//       {
//         question: 'هل يمكننا العمل بدون مكالمات فيديو؟',
//         answer:
//           'نعم، نعمل بمنهجية غير متزامنة أولاً. معظم التواصل يتم كتابياً. المكالمات تُجدول فقط عند الحاجة ومع أجندة واضحة.',
//       },
//       {
//         question: 'هل تدعمون صيغة White-label؟',
//         answer:
//           'نعم. للشركاء والمتكاملين، نقدم مكتب شراكة White-Label. تحصل على تصميم مواقع وأنظمة وتطبيقات احترافي تحت علامتك التجارية.',
//       },
//       {
//         question: 'هل يمكنني القدوم بموقع أو نظام حالي لإعادة التصميم؟',
//         answer:
//           'بالتأكيد. نعمل مع المفاهيم في مراحلها المبكرة وإعادة تصميم المواقع والبوابات والمنتجات الرقمية الحالية.',
//       },
//       {
//         question: 'هل توقعون اتفاقيات عدم الإفصاح (NDA)؟',
//         answer:
//           'نعم، هذا إجراء معتاد. أرسل لنا اتفاقية عدم الإفصاح الخاصة بك أو استخدم نموذجنا — سنوقع قبل مناقشة التفاصيل.',
//       },
//       {
//         question: 'ما مدى سرعة بدء المشروع؟',
//         answer:
//           'عادة خلال 3-5 أيام عمل بعد الموافقة على النطاق والدفع. للاحتياجات العاجلة، يمكننا مناقشة البداية ذات الأولوية.',
//       },
//       {
//         question: 'هل تساعدون في التصميم فقط أم في هيكلة المنتج أيضاً؟',
//         answer:
//           'نبدأ بالهيكلة. إطار المنتج، هندسة تجربة المستخدم، الأدوار، والتدفقات — هذا هو الأساس. تصميم الموقع أو النظام أو التطبيق يُبنى على هذا الأساس.',
//       },
//     ],
//   },
// }

// const HOME_PRICING_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'pricingHome',
//     sectionId: 'formats',
//     eyebrow: 'Packages',
//     title: 'Форматы работы',
//     ctaLabel: 'Получить предложение',
//     ctaPageKey: 'get-proposal',
//     featuredBadge: 'Популярный выбор',
//     items: [
//       {
//         name: 'Product Framing Sprint',
//         price: 'от $5,400',
//         timeline: '2-3 недели',
//         description:
//           'Структурирование продукта с нуля. Product framing, роли, core flows, экранная матрица.',
//         featured: false,
//         includes: [
//           { label: 'Структурная рамка проекта' },
//           { label: 'Карта ролей и прав' },
//           { label: 'Core user flows' },
//           { label: 'Экранная матрица' },
//           { label: 'Рекомендации по визуальному направлению' },
//         ],
//       },
//       {
//         name: 'Build-Ready Prototype',
//         price: 'от $6,900',
//         timeline: '4-5 недель',
//         description:
//           'Полный цикл от идеи до прототипа. Всё для презентации инвестору или старта разработки.',
//         featured: true,
//         includes: [
//           { label: 'Всё из Framing Sprint' },
//           { label: 'Визуальное направление' },
//           { label: 'Интерактивный прототип' },
//           { label: 'Базовая система компонентов' },
//           { label: 'Материалы для передачи в разработку' },
//         ],
//       },
//       {
//         name: 'White-Label Partner Desk',
//         price: 'от $6,500',
//         timeline: 'Ongoing',
//         description:
//           'Для партнёров и integrators. Продуктовый дизайн под вашим брендом для ваших клиентов.',
//         featured: false,
//         includes: [
//           { label: 'Выделенный capacity' },
//           { label: 'White-label deliverables' },
//           { label: 'Прямая коммуникация' },
//           { label: 'Гибкий scope' },
//           { label: 'Приоритетное планирование' },
//         ],
//       },
//     ],
//   },
//   en: {
//     blockType: 'pricingHome',
//     sectionId: 'formats',
//     eyebrow: 'Packages',
//     title: 'Engagement Formats',
//     ctaLabel: 'Get Proposal',
//     ctaPageKey: 'get-proposal',
//     featuredBadge: 'Popular Choice',
//     items: [
//       {
//         name: 'Product Framing Sprint',
//         price: 'from $5,400',
//         timeline: '2-3 weeks',
//         description:
//           'Product structuring from scratch. Product framing, roles, core flows, screen matrix.',
//         featured: false,
//         includes: [
//           { label: 'Structural project framework' },
//           { label: 'Role and permissions map' },
//           { label: 'Core user flows' },
//           { label: 'Screen matrix' },
//           { label: 'Visual direction recommendations' },
//         ],
//       },
//       {
//         name: 'Build-Ready Prototype',
//         price: 'from $6,900',
//         timeline: '4-5 weeks',
//         description:
//           'Full cycle from idea to prototype. Everything for investor presentation or dev kickoff.',
//         featured: true,
//         includes: [
//           { label: 'Everything from Framing Sprint' },
//           { label: 'Visual direction' },
//           { label: 'Interactive prototype' },
//           { label: 'Basic component system' },
//           { label: 'Dev handoff materials' },
//         ],
//       },
//       {
//         name: 'White-Label Partner Desk',
//         price: 'from $6,500',
//         timeline: 'Ongoing',
//         description:
//           'For partners and integrators. Product design under your brand for your clients.',
//         featured: false,
//         includes: [
//           { label: 'Dedicated capacity' },
//           { label: 'White-label deliverables' },
//           { label: 'Direct communication' },
//           { label: 'Flexible scope' },
//           { label: 'Priority planning' },
//         ],
//       },
//     ],
//   },
//   ar: {
//     blockType: 'pricingHome',
//     sectionId: 'formats',
//     eyebrow: 'الباقات',
//     title: 'صيغ التعاون',
//     ctaLabel: 'طلب عرض',
//     ctaPageKey: 'get-proposal',
//     featuredBadge: 'الخيار الشائع',
//     items: [
//       {
//         name: 'سبرنت هيكلة المنتج',
//         price: 'من $5,400',
//         timeline: '2-3 أسابيع',
//         description:
//           'هيكلة المنتج من الصفر. إطار المنتج، الأدوار، التدفقات الأساسية، مصفوفة الشاشات.',
//         featured: false,
//         includes: [
//           { label: 'إطار المشروع الهيكلي' },
//           { label: 'خريطة الأدوار والصلاحيات' },
//           { label: 'تدفقات المستخدم الأساسية' },
//           { label: 'مصفوفة الشاشات' },
//           { label: 'توصيات التوجه البصري' },
//         ],
//       },
//       {
//         name: 'نموذج جاهز للتطوير',
//         price: 'من $6,900',
//         timeline: '4-5 أسابيع',
//         description:
//           'دورة كاملة من الفكرة إلى النموذج. كل شيء لعرض المستثمرين أو بدء التطوير.',
//         featured: true,
//         includes: [
//           { label: 'كل شيء من سبرنت الهيكلة' },
//           { label: 'التوجه البصري' },
//           { label: 'النموذج التفاعلي' },
//           { label: 'نظام المكونات الأساسي' },
//           { label: 'مواد تسليم المطورين' },
//         ],
//       },
//       {
//         name: 'مكتب شراكة White-Label',
//         price: 'من $6,500',
//         timeline: 'مستمر',
//         description:
//           'للشركاء والمتكاملين. تصميم المنتجات تحت علامتك التجارية لعملائك.',
//         featured: false,
//         includes: [
//           { label: 'قدرة مخصصة' },
//           { label: 'تسليمات White-label' },
//           { label: 'تواصل مباشر' },
//           { label: 'نطاق مرن' },
//           { label: 'تخطيط بأولوية' },
//         ],
//       },
//     ],
//   },
// }

// const HOME_FINAL_CTA_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'finalCtaHome',
//     title: 'Закажите дизайн сайта, digital-системы или мобильного приложения',
//     description:
//       'Опишите проект — сайт, портал, B2B-платформу или mobile app. Мы подготовим структурированное предложение с форматом работы, сроками и стоимостью.',
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Посмотреть цены',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'Для сайтов, корпоративных порталов, B2B-систем, dashboards и mobile apps',
//   },
//   en: {
//     blockType: 'finalCtaHome',
//     title: 'Order Website, Digital System, or Mobile App Design',
//     description:
//       "Describe your project — website, portal, B2B platform, or mobile app. We'll prepare a structured proposal with work format, timeline, and pricing.",
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'View Pricing',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'For websites, corporate portals, B2B systems, dashboards, and mobile apps',
//   },
//   ar: {
//     blockType: 'finalCtaHome',
//     title: 'هل تريد هذا المستوى من الوضوح والجودة لمشروعك؟',
//     description:
//       'شاركنا فكرتك أو متطلبات مشروعك، وسنقترح عليك الصيغة الأنسب للعمل، والنطاق الزمني المتوقع، والخطوة التالية.',
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الأسعار',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'للمواقع والبوابات المؤسسية وأنظمة B2B ولوحات التحكم وتطبيقات الموبايل',
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

// async function getHomePage(payload: Awaited<ReturnType<typeof getPayload>>) {
//   const result = await payload.find({
//     collection: 'pages',
//     where: {
//       pageKey: {
//         equals: 'home',
//       },
//     },
//     limit: 1,
//     locale: 'ru',
//     fallbackLocale: 'none',
//     depth: 0,
//   })

//   return result.docs[0] ?? null
// }

// async function ensureHomePage(payload: Awaited<ReturnType<typeof getPayload>>) {
//   const existing = await getHomePage(payload)

//   if (existing) {
//     return existing
//   }

//   return payload.create({
//     collection: 'pages',
//     locale: 'ru',
//     depth: 0,
//     data: {
//       pageKey: 'home',
//       internalName: 'Home',
//       layout: [],
//     },
//   })
// }

// async function seedHomeHeroForLocale(
//   payload: Awaited<ReturnType<typeof getPayload>>,
//   pageId: string | number,
//   locale: Locale,
// ) {
//   const page = await payload.findByID({
//     collection: 'pages',
//     id: pageId,
//     locale,
//     fallbackLocale: 'none',
//     depth: 0,
//   })

//   const currentLayout = Array.isArray(page?.layout) ? (page.layout as BlockData[]) : []
//   const nextLayout = upsertBlock(currentLayout, HOME_HERO_SEED[locale])

//   await payload.update({
//     collection: 'pages',
//     id: pageId,
//     locale,
//     depth: 0,
//     data: {
//       layout: nextLayout,
//     },
//   })

//   console.log(`✔ Seeded home hero for locale: ${locale}`)
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

//   const homePage = await ensureHomePage(payload)

//   await seedHomeHeroForLocale(payload, homePage.id, 'ru')
//   await seedHomeHeroForLocale(payload, homePage.id, 'en')
//   await seedHomeHeroForLocale(payload, homePage.id, 'ar')

//   await seedBlockForLocale(payload, homePage.id, 'ru', HOME_VALUE_SEED.ru)
//   await seedBlockForLocale(payload, homePage.id, 'en', HOME_VALUE_SEED.en)
//   await seedBlockForLocale(payload, homePage.id, 'ar', HOME_VALUE_SEED.ar)

//   await seedBlockForLocale(payload, homePage.id, 'ru', HOME_VIDEO_WALKTHROUGH_SEED.ru)
//   await seedBlockForLocale(payload, homePage.id, 'en', HOME_VIDEO_WALKTHROUGH_SEED.en)
//   await seedBlockForLocale(payload, homePage.id, 'ar', HOME_VIDEO_WALKTHROUGH_SEED.ar)

//   await seedBlockForLocale(payload, homePage.id, 'ru', HOME_DELIVERABLES_SEED.ru)
//   await seedBlockForLocale(payload, homePage.id, 'en', HOME_DELIVERABLES_SEED.en)
//   await seedBlockForLocale(payload, homePage.id, 'ar', HOME_DELIVERABLES_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', HOME_WHY_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', HOME_WHY_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', HOME_WHY_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', HOME_AUDIENCE_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', HOME_AUDIENCE_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', HOME_AUDIENCE_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', HOME_CONCEPTS_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', HOME_CONCEPTS_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', HOME_CONCEPTS_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', HOME_METHOD_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', HOME_METHOD_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', HOME_METHOD_SEED.ar)
  
//     await seedBlockForLocale(payload, homePage.id, 'ru', HOME_PROPOSAL_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', HOME_PROPOSAL_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', HOME_PROPOSAL_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', HOME_SAMPLE_PREVIEW_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', HOME_SAMPLE_PREVIEW_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', HOME_SAMPLE_PREVIEW_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', HOME_TRUST_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', HOME_TRUST_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', HOME_TRUST_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', HOME_FAQ_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', HOME_FAQ_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', HOME_FAQ_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', HOME_PRICING_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', HOME_PRICING_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', HOME_PRICING_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', HOME_FINAL_CTA_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', HOME_FINAL_CTA_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', HOME_FINAL_CTA_SEED.ar)
//   console.log('✅ Home hero seed completed')
//   process.exit(0)
// }

// main().catch((error) => {
//   console.error('❌ Home hero seed failed')
//   console.error(error)
//   process.exit(1)
// })