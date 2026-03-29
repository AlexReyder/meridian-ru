// import 'dotenv/config'

// import { getPayload } from 'payload'
// import config from '../payload.config'

// type Locale = 'ru' | 'en' | 'ar'

// type BlockData = Record<string, unknown> & {
//   blockType: string
//   id?: string
// }

// const STARTUPS_HERO_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'heroStartups',
//     eyebrow: 'Для стартапов',
//     title: 'Для стартапов, которым нужен ясный продукт до начала разработки',
//     description:
//       'Мы помогаем startup-командам собрать структуру сайта, web-продукта или mobile app, чтобы проект было проще показать инвесторам, объяснить команде и передать в разработку.',
//     note:
//       'Подходит для MVP, pitch, investor presentation, redesign и ранней product-упаковки.',
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
//   },
//   en: {
//     blockType: 'heroStartups',
//     eyebrow: 'For Startups',
//     title: 'For startups that need product clarity before development',
//     description:
//       'Atelier Meridian helps founders and startup teams turn rough product ideas, early workflows, and incomplete requirements into clear structure, premium interfaces, and clickable prototypes that are easier to present, validate, and build from.',
//     note:
//       'Suitable for MVP, investor presentation, early product definition, redesign, and startup launch preparation.',
//     tags: [
//       { label: 'Startup Websites' },
//       { label: 'MVP' },
//       { label: 'Mobile Apps' },
//       { label: 'SaaS Interfaces' },
//       { label: 'Investor-Ready Prototype' },
//       { label: 'Redesign' },
//       { label: 'Product Structure' },
//     ],
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'View Pricing',
//     secondaryPageKey: 'pricing',
//   },
//   ar: {
//     blockType: 'heroStartups',
//     eyebrow: 'للشركات الناشئة',
//     title: 'للشركات الناشئة التي تحتاج إلى وضوح المنتج قبل بدء التطوير',
//     description:
//       'يساعد Atelier Meridian المؤسسين وفرق الشركات الناشئة على تحويل الفكرة الأولية أو متطلبات المنتج غير المكتملة أو مسارات العمل المبكرة إلى هيكل واضح وواجهات متميزة ونموذج أولي قابل للعرض والمراجعة والبناء عليه.',
//     note:
//       'مناسب لـ MVP، والعروض على المستثمرين، وتعريف المنتج في مراحله المبكرة، وإعادة التصميم، والاستعداد للإطلاق.',
//     tags: [
//       { label: 'مواقع الشركات الناشئة' },
//       { label: 'MVP' },
//       { label: 'تطبيقات الجوال' },
//       { label: 'واجهات SaaS' },
//       { label: 'نموذج أولي للمستثمرين' },
//       { label: 'إعادة التصميم' },
//       { label: 'هيكلة المنتج' },
//     ],
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الأسعار',
//     secondaryPageKey: 'pricing',
//   },
// }

// const STARTUPS_VALUE_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'valueStartups',
//     eyebrow: 'Зачем приходят',
//     title: 'Зачем стартапы приходят в Atelier Meridian',
//     description:
//       'На раннем этапе проекту редко нужен просто "дизайн". Чаще всего не хватает ясности: что именно показать, какие сценарии важны, как собрать MVP, как упаковать продукт для инвестора, клиента или разработки. Именно здесь мы подключаемся.',
//     layoutVariant: 'iconCards',
//     items: [
//       {
//         icon: 'lightbulb',
//         title: 'Когда идея ещё не собрана в продукт',
//         description:
//           'Помогаем превратить rough concept в понятную структуру экранов, сценариев и приоритетов.',
//       },
//       {
//         icon: 'presentation',
//         title: 'Когда нужно показать продукт инвестору',
//         description:
//           'Собираем investor-ready prototype и визуальную подачу, которая делает продукт понятнее и убедительнее.',
//       },
//       {
//         icon: 'rocket',
//         title: 'Когда нужно запустить MVP быстрее',
//         description:
//           'Помогаем убрать лишнее, собрать основу интерфейсов и сфокусироваться на ключевых сценариях.',
//       },
//       {
//         icon: 'arrowRight',
//         title: 'Когда разработке нужен ясный следующий шаг',
//         description:
//           'Готовим материалы и интерфейсную логику так, чтобы команде было проще перейти к следующему этапу.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'valueStartups',
//     eyebrow: 'Why Startups Come',
//     title: 'Startups rarely need "just design"',
//     description:
//       'At an early stage, most teams do not simply need screens. They need clarity: what the product should include, which flows matter most, how to present it, and how to turn it into a credible next step for investors, internal teams, or development.',
//     layoutVariant: 'iconCards',
//     items: [
//       {
//         icon: 'lightbulb',
//         title: 'When the idea is not yet a product',
//         description:
//           'We help turn a rough concept into a clear structure of screens, scenarios, and priorities.',
//       },
//       {
//         icon: 'presentation',
//         title: 'When you need to show investors',
//         description:
//           'We build an investor-ready prototype and visual presentation that makes your product clearer and more convincing.',
//       },
//       {
//         icon: 'rocket',
//         title: 'When you need to launch MVP faster',
//         description:
//           'We help cut the excess, build the core interfaces, and focus on what matters most.',
//       },
//       {
//         icon: 'arrowRight',
//         title: 'When development needs a clear next step',
//         description:
//           'We prepare materials and interface logic so your team can move confidently into the next stage.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'valueStartups',
//     eyebrow: 'لماذا تأتي الشركات الناشئة',
//     title: 'الشركات الناشئة نادراً ما تحتاج إلى "تصميم فقط"',
//     description:
//       'في المراحل المبكرة، لا تحتاج أغلب الفرق إلى شاشات فقط، بل إلى وضوح: ما الذي يجب أن يتضمنه المنتج، وما المسارات الأهم، وكيف يمكن عرضه بشكل مقنع، وكيف يتحول إلى خطوة عملية للمستثمرين أو للفريق الداخلي أو للتطوير.',
//     layoutVariant: 'numberedCards',
//     items: [
//       {
//         number: '01',
//         title: 'وضوح المنتج أولاً',
//         description:
//           'نبدأ بتوضيح ما الذي يحتاجه المنتج فعلاً، وما المسارات الأهم، وما الذي يمكن تأجيله.',
//       },
//       {
//         number: '02',
//         title: 'ثم الواجهة',
//         description:
//           'نبني واجهات متميزة تعكس منطق المنتج وتساعد على العرض والإقناع.',
//       },
//       {
//         number: '03',
//         title: 'ثم خطوة تالية يمكن البناء عليها',
//         description:
//           'نسلم مواد جاهزة للعرض على المستثمرين أو التوافق الداخلي أو الانتقال إلى التطوير.',
//       },
//     ],
//   },
// }

// const STARTUPS_DELIVERABLES_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'deliverablesStartups',
//     eyebrow: 'Решения',
//     title: 'С чем мы помогаем startup-командам',
//     layoutVariant: 'detailedCards',
//     whenRelevantLabel: 'Когда актуально',
//     resultLabel: 'Результат',
//     items: [
//       {
//         title: 'Сайты и landing pages',
//         description:
//           'Помогаем собрать структуру и дизайн сайта для startup-проекта — от концепции до готового к разработке результата.',
//         whenRelevant: 'Когда нужно запустить сайт для нового продукта или компании',
//         result: 'Готовый дизайн сайта с понятной структурой и материалами для разработки',
//       },
//       {
//         title: 'Product websites',
//         description:
//           'Проектируем продуктовые сайты, которые объясняют ценность, показывают функции и конвертируют посетителей.',
//         whenRelevant: 'Когда продукт уже есть, но нужна сильная презентация',
//         result: 'Сайт, который помогает продавать продукт и привлекать пользователей',
//       },
//       {
//         title: 'Web products и SaaS-интерфейсы',
//         description:
//           'Собираем архитектуру web-продукта — user flows, экранную карту, prototype и дизайн интерфейсов.',
//         whenRelevant: 'Когда нужно выстроить логику web-продукта перед разработкой',
//         result: 'Структурированный продукт, готовый к MVP или полноценному build',
//       },
//       {
//         title: 'Mobile apps',
//         description:
//           'Помогаем собрать структуру приложения, ключевые user flows и визуальное направление для iOS или Android.',
//         whenRelevant: 'Когда нужен mobile app, но пока нет ясности в интерфейсах',
//         result: 'Prototype и дизайн, которые можно показать, проверить и передать в разработку',
//       },
//       {
//         title: 'Redesign существующего продукта',
//         description:
//           'Улучшаем UX/UI существующего сайта или приложения — с фокусом на usability и бизнес-метрики.',
//         whenRelevant: 'Когда ранняя версия продукта требует доработки',
//         result: 'Обновлённый дизайн с улучшенным UX и понятной логикой',
//       },
//     ],
//   },
//   en: {
//     blockType: 'deliverablesStartups',
//     eyebrow: 'Solutions',
//     title: 'What we help startup teams design',
//     layoutVariant: 'detailedCards',
//     whenRelevantLabel: 'When Relevant',
//     resultLabel: 'Result',
//     items: [
//       {
//         title: 'Startup Websites & Landing Pages',
//         description:
//           'We help structure and design websites for startup projects — from concept to development-ready deliverables.',
//         whenRelevant: 'When you need to launch a website for a new product or company',
//         result: 'A complete website design with clear structure and materials for development',
//       },
//       {
//         title: 'Product Websites',
//         description:
//           'We design product websites that explain value, showcase features, and convert visitors into users.',
//         whenRelevant: 'When you have a product but need a stronger presentation',
//         result: 'A website that helps sell the product and attract users',
//       },
//       {
//         title: 'Web Products & SaaS Interfaces',
//         description:
//           'We build the architecture of web products — user flows, screen maps, prototypes, and interface design.',
//         whenRelevant: 'When you need to structure a web product before development',
//         result: 'A structured product ready for MVP or full build',
//       },
//       {
//         title: 'Mobile Apps',
//         description:
//           'We help structure mobile applications, key user flows, and visual direction for iOS or Android.',
//         whenRelevant: 'When you need a mobile app but lack clarity on interfaces',
//         result: 'Prototype and design that can be shown, tested, and handed off to development',
//       },
//       {
//         title: 'MVP Product Structure',
//         description:
//           'We help define what your MVP actually needs — core scenarios, priorities, and the minimal viable interface.',
//         whenRelevant: 'When you need to focus before building',
//         result: 'A clear, prioritized MVP structure ready for implementation',
//       },
//       {
//         title: 'Redesign of Early Product',
//         description:
//           'We improve the UX/UI of an existing website or app — with focus on usability and business metrics.',
//         whenRelevant: 'When an early version of the product needs refinement',
//         result: 'An updated design with improved UX and clearer logic',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'deliverablesStartups',
//     eyebrow: 'الحلول',
//     title: 'في ماذا نساعد فرق الشركات الناشئة',
//     layoutVariant: 'simpleCards',
//     items: [
//       {
//         title: 'مواقع الشركات الناشئة وصفحات الهبوط',
//         description:
//           'نساعد في بناء موقع أو landing page يشرح الفكرة بوضوح ويعطي المشروع حضوراً أقوى في المراحل الأولى.',
//       },
//       {
//         title: 'هيكلة MVP',
//         description:
//           'نحدد ما الذي يجب أن يكون داخل المنتج في هذه المرحلة، وما الذي يمكن تأجيله، وكيف تبدو النسخة الأولى بشكل منطقي وواضح.',
//       },
//       {
//         title: 'تصميم تطبيقات الجوال',
//         description:
//           'نبني هيكل التطبيق ومسارات الاستخدام والشاشات الأساسية بطريقة تجعل المنتج أسهل في العرض والتطوير.',
//       },
//       {
//         title: 'واجهات SaaS والمنتجات الرقمية',
//         description:
//           'نحوّل الوظائف المعقدة إلى واجهات أوضح وأكثر نضجاً من ناحية المنتج والتقديم.',
//       },
//       {
//         title: 'نموذج أولي جاهز للعرض على المستثمرين',
//         description:
//           'نجهز prototype يساعد على شرح الفكرة وإقناع المستثمر أو الشريك أو الفريق الداخلي.',
//       },
//       {
//         title: 'إعادة تصميم النسخة المبكرة',
//         description:
//           'نساعد على إعادة تنظيم النسخ الأولى من المنتج عندما تصبح الفكرة أو الواجهة أو المسارات بحاجة إلى وضوح أكبر.',
//       },
//     ],
//   },
// }

// const STARTUPS_SITUATIONS_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'situationsStartups',
//     eyebrow: 'Когда актуально',
//     title: 'Когда эта страница особенно актуальна',
//     layoutVariant: 'detailedCards',
//     ctaLabel: 'Получить предложение',
//     ctaPageKey: 'get-proposal',
//     items: [
//       {
//         situation: 'Есть идея, но пока непонятно, как она должна выглядеть как продукт',
//         explanation:
//           'Превращаем rough concept в структуру экранов, сценариев и приоритетов. Помогаем увидеть продукт до того, как начнётся разработка.',
//       },
//       {
//         situation: 'Нужно быстро собрать MVP-интерфейс без лишнего хаоса',
//         explanation:
//           'Фокусируем на главном, убираем лишнее, собираем минимальный, но сильный набор экранов и сценариев.',
//       },
//       {
//         situation: 'Нужно показать продукт инвестору или партнёру',
//         explanation:
//           'Собираем investor-ready prototype и визуальную подачу, которая делает идею понятной и убедительной.',
//       },
//       {
//         situation: 'Есть разработка, но нет ясной продуктовой структуры',
//         explanation:
//           'Помогаем выстроить логику интерфейсов, сценарии и приоритеты — чтобы разработка двигалась увереннее.',
//       },
//       {
//         situation: 'Нужен redesign ранней версии сайта или приложения',
//         explanation:
//           'Улучшаем UX/UI существующего продукта с фокусом на usability, конверсии и визуальную подачу.',
//       },
//       {
//         situation: 'Нужно собрать сильный prototype до следующего раунда',
//         explanation:
//           'Готовим prototype и материалы для pitch — чтобы продукт выглядел убедительно для инвесторов.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'situationsStartups',
//     eyebrow: 'When Relevant',
//     title: 'When this is especially useful',
//     layoutVariant: 'detailedCards',
//     ctaLabel: 'Get Proposal',
//     ctaPageKey: 'get-proposal',
//     items: [
//       {
//         situation: 'You have an idea, but it is not yet structured as a product',
//         explanation:
//           'We turn rough concepts into a clear structure of screens, scenarios, and priorities — so you can see the product before development starts.',
//       },
//       {
//         situation: 'You need something credible to show investors',
//         explanation:
//           'We build an investor-ready prototype and visual presentation that makes your idea clear, convincing, and easier to pitch.',
//       },
//       {
//         situation: 'You need a clearer MVP before development starts',
//         explanation:
//           'We help you focus on what matters most, remove excess, and build a strong but minimal set of screens and flows.',
//       },
//       {
//         situation: 'You need to simplify early product chaos',
//         explanation:
//           'We help structure interface logic, scenarios, and priorities — so your development team can move forward with confidence.',
//       },
//       {
//         situation: 'You need a stronger startup website or landing page',
//         explanation:
//           'We help you build a site that explains your product clearly, converts visitors, and supports your fundraising or launch.',
//       },
//       {
//         situation: 'You need to redesign a first version before the next stage',
//         explanation:
//           'We improve the UX/UI of existing products with focus on usability, conversion, and visual presentation.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'situationsStartups',
//     eyebrow: 'متى يناسبك',
//     title: 'متى تكون هذه الصفحة مناسبة بشكل خاص',
//     layoutVariant: 'simpleCards',
//     ctaLabel: 'اطلب عرضاً',
//     ctaPageKey: 'get-proposal',
//     items: [
//       { situation: 'لديك فكرة لكن المنتج لم يتشكل بعد بشكل واضح' },
//       { situation: 'تحتاج إلى شيء مقنع لعرضه على مستثمر' },
//       { situation: 'تحتاج إلى MVP أوضح قبل بدء التطوير' },
//       { situation: 'تحتاج إلى تقليل الفوضى في النسخة المبكرة من المنتج' },
//       { situation: 'تحتاج إلى موقع أقوى أو landing page أوضح' },
//       { situation: 'تحتاج إلى إعادة تصميم قبل المرحلة التالية' },
//     ],
//   },
// }

//  const ARTIFACTS_STARTUPS_SEED: Record<Locale, any> = {
//   ru: {
//     blockType: 'artifactsStartups',
//     eyebrow: 'Результат',
//     title: 'Что получает founder в результате',
//     items: [
//       {
//         icon: 'fileText',
//         title: 'Структура проекта',
//         support: 'помогает собрать продукт по логике',
//       },
//       {
//         icon: 'gitBranch',
//         title: 'Пользовательские сценарии',
//         support: 'показывает ключевые сценарии и приоритеты',
//       },
//       {
//         icon: 'layout',
//         title: 'Экранная карта продукта',
//         support: 'превращает идею в понятную систему экранов',
//       },
//       {
//         icon: 'play',
//         title: 'Интерактивный прототип',
//         support: 'даёт сильный prototype для обсуждения и показа',
//       },
//       {
//         icon: 'palette',
//         title: 'Визуальное направление',
//         support: 'задаёт визуальный характер продукта',
//       },
//       {
//         icon: 'package',
//         title: 'Материалы для передачи в разработку',
//         support: 'помогает перейти к следующему этапу разработки',
//       },
//     ],
//   },

//   en: {
//     blockType: 'artifactsStartups',
//     eyebrow: 'Result',
//     title: 'What startup teams receive',
//     items: [
//       {
//         icon: 'fileText',
//         title: 'Project Structure',
//         support: 'clarifies what the product really needs',
//       },
//       {
//         icon: 'gitBranch',
//         title: 'User Flows',
//         support: 'makes key user journeys easier to align',
//       },
//       {
//         icon: 'layout',
//         title: 'Screen Matrix',
//         support: 'organizes screens into one coherent system',
//       },
//       {
//         icon: 'play',
//         title: 'Clickable Prototype',
//         support: 'creates something tangible to present or validate',
//       },
//       {
//         icon: 'palette',
//         title: 'Visual Direction',
//         support: 'sets the tone of the interface',
//       },
//       {
//         icon: 'package',
//         title: 'Materials for Development',
//         support: 'helps move cleanly into the next stage',
//       },
//     ],
//   },

//   ar: {
//     blockType: 'artifactsStartups',
//     eyebrow: 'النتيجة',
//     title: 'ما الذي تحصل عليه فرق الشركات الناشئة',
//     items: [
//       {
//         icon: 'fileText',
//         title: 'هيكل المشروع',
//         support: 'يوضح ما الذي يحتاجه المنتج فعلاً',
//       },
//       {
//         icon: 'gitBranch',
//         title: 'مسارات المستخدم',
//         support: 'يسهل الاتفاق على المسارات الرئيسية',
//       },
//       {
//         icon: 'layout',
//         title: 'مصفوفة الشاشات',
//         support: 'ينظم الشاشات في نظام واحد واضح',
//       },
//       {
//         icon: 'play',
//         title: 'نموذج أولي قابل للنقر',
//         support: 'يقدم شيئاً ملموساً للعرض أو المراجعة',
//       },
//       {
//         icon: 'palette',
//         title: 'الاتجاه البصري',
//         support: 'يحدد الطابع البصري للمنتج',
//       },
//       {
//         icon: 'package',
//         title: 'مواد التسليم للتطوير',
//         support: 'يدعم الانتقال المنظم إلى المرحلة التالية',
//       },
//     ],
//   },
// }

// const STARTUPS_PROCESS_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'processStartups',
//     sectionId: 'process',
//     eyebrow: 'Как мы работаем',
//     title: 'Процесс работы со стартапами',
//     description:
//       'Мы работаем быстро, без лишнего overhead и с фокусом на том, чтобы дать стартапу ясный следующий шаг.',
//     items: [
//       {
//         number: '01',
//         title: 'Scope',
//         description:
//           'Фиксируем, что именно проект должен решить, для кого он делается и что входит в первую версию.',
//         details: [{ label: 'Brief' }, { label: 'Goals' }, { label: 'Constraints' }],
//       },
//       {
//         number: '02',
//         title: 'Frame',
//         description:
//           'Собираем продуктовую рамку: сценарии, роли, модули и приоритеты, чтобы убрать хаос до этапа интерфейсов.',
//         details: [{ label: 'Core flows' }, { label: 'Roles' }, { label: 'Priorities' }],
//       },
//       {
//         number: '03',
//         title: 'Structure',
//         description:
//           'Формируем экранную карту и user flow так, чтобы стало ясно, как выглядит MVP и что показывать дальше.',
//         details: [{ label: 'Screen map' }, { label: 'User flow' }, { label: 'MVP logic' }],
//       },
//       {
//         number: '04',
//         title: 'Visualize',
//         description:
//           'Создаём prototype и visual direction, чтобы продукт можно было показать инвестору, команде или партнёру.',
//         details: [{ label: 'Prototype' }, { label: 'Visual direction' }, { label: 'Pitch-ready' }],
//       },
//       {
//         number: '05',
//         title: 'Deliver',
//         description:
//           'Передаём материалы, на основе которых можно идти в разработку, согласование или следующий раунд.',
//         details: [{ label: 'handoff' }, { label: 'docs' }, { label: 'next step' }],
//       },
//     ],
//   },
//   en: {
//     blockType: 'processStartups',
//     sectionId: 'process',
//     eyebrow: 'How We Work',
//     title: 'Process for startup teams',
//     description:
//       'We work fast, with minimal overhead, and with focus on giving the startup a clear next step.',
//     items: [
//       {
//         number: '01',
//         title: 'Scope',
//         description:
//           'We define what the project needs to solve, who it is for, and what belongs in the first version.',
//         details: [{ label: 'Brief' }, { label: 'Goals' }, { label: 'Constraints' }],
//       },
//       {
//         number: '02',
//         title: 'Frame',
//         description:
//           'We build the product frame: scenarios, roles, modules, and priorities — so the chaos is reduced before interfaces begin.',
//         details: [{ label: 'Core flows' }, { label: 'Roles' }, { label: 'Priorities' }],
//       },
//       {
//         number: '03',
//         title: 'Structure',
//         description:
//           'We map the screens and user flow so it becomes clear what the MVP looks like and what should be shown next.',
//         details: [{ label: 'Screen map' }, { label: 'User flow' }, { label: 'MVP logic' }],
//       },
//       {
//         number: '04',
//         title: 'Visualize',
//         description:
//           'We create a prototype and visual direction so the product can be shown to investors, the team, or partners.',
//         details: [{ label: 'Prototype' }, { label: 'Visual direction' }, { label: 'Pitch-ready' }],
//       },
//       {
//         number: '05',
//         title: 'Deliver',
//         description:
//           'We deliver materials that can move directly into development, internal alignment, or the next round.',
//         details: [{ label: 'handoff' }, { label: 'docs' }, { label: 'next step' }],
//       },
//     ],
//   },
//   ar: {
//     blockType: 'processStartups',
//     sectionId: 'process',
//     eyebrow: 'كيف نعمل',
//     title: 'طريقة العمل مع الشركات الناشئة',
//     description:
//       'نعمل بسرعة ومن دون أعباء تشغيلية زائدة، مع التركيز على منح الشركة الناشئة خطوة تالية واضحة.',
//     items: [
//       {
//         number: '٠١',
//         title: 'النطاق',
//         description:
//           'نحدد ما الذي يجب أن يحله المشروع، ولمن يُبنى، وما الذي يدخل في النسخة الأولى.',
//         details: [{ label: 'Brief' }, { label: 'Goals' }, { label: 'Constraints' }],
//       },
//       {
//         number: '٠٢',
//         title: 'الإطار',
//         description:
//           'نبني إطار المنتج: السيناريوهات، الأدوار، الوحدات، والأولويات — حتى نقلل الفوضى قبل مرحلة الواجهات.',
//         details: [{ label: 'Core flows' }, { label: 'Roles' }, { label: 'Priorities' }],
//       },
//       {
//         number: '٠٣',
//         title: 'الهيكلة',
//         description:
//           'نرسم خريطة الشاشات ومسار المستخدم حتى يصبح شكل MVP أوضح وما الذي يجب عرضه تالياً.',
//         details: [{ label: 'Screen map' }, { label: 'User flow' }, { label: 'MVP logic' }],
//       },
//       {
//         number: '٠٤',
//         title: 'التصوير البصري',
//         description:
//           'ننشئ نموذجاً أولياً واتجاهاً بصرياً بحيث يمكن عرض المنتج على المستثمر أو الفريق أو الشريك.',
//         details: [{ label: 'Prototype' }, { label: 'Visual direction' }, { label: 'Pitch-ready' }],
//       },
//       {
//         number: '٠٥',
//         title: 'التسليم',
//         description:
//           'نسلّم مواد يمكن أن تنتقل مباشرة إلى التطوير أو التوافق الداخلي أو الجولة التالية.',
//         details: [{ label: 'handoff' }, { label: 'docs' }, { label: 'next step' }],
//       },
//     ],
//   },
// }const PROCESS_STARTUPS_SEED: Record<Locale, any> = {
//   ru: {
//     blockType: 'processStartups',
//     eyebrow: 'Процесс',
//     title: 'Как это обычно происходит',
//     steps: [
//       {
//         number: '01',
//         title: 'Brief',
//         description: 'Собираем задачу, цели, ограничения и контекст проекта.',
//       },
//       {
//         number: '02',
//         title: 'Структура',
//         description: 'Определяем, какие сценарии и экраны действительно нужны на старте.',
//       },
//       {
//         number: '03',
//         title: 'Приоритеты',
//         description: 'Отделяем MVP от второстепенного. Фокусируем на главном.',
//       },
//       {
//         number: '04',
//         title: 'Интерфейсы',
//         description: 'Собираем prototype, сайт или mobile screens в сильную и понятную систему.',
//       },
//       {
//         number: '05',
//         title: 'Следующий этап',
//         description: 'Готовим рекомендации и материалы для передачи в разработку или следующего pitch.',
//       },
//     ],
//   },

//   en: {
//     blockType: 'processStartups',
//     eyebrow: 'Process',
//     title: 'How this usually works',
//     steps: [
//       {
//         number: '01',
//         title: 'Brief',
//         description: 'We start by understanding the idea, the context, and the current level of clarity.',
//       },
//       {
//         number: '02',
//         title: 'Product Structure',
//         description: 'We define the key roles, flows, priorities, and what the product actually needs at this stage.',
//       },
//       {
//         number: '03',
//         title: 'Priorities',
//         description: 'We separate core MVP logic from everything that can wait.',
//       },
//       {
//         number: '04',
//         title: 'Interface & Prototype',
//         description: 'We shape the screens, interaction logic, and clickable prototype.',
//       },
//       {
//         number: '05',
//         title: 'Next Step',
//         description: 'You receive materials that help you present, align, or move into development.',
//       },
//     ],
//   },

//   ar: {
//     blockType: 'processStartups',
//     eyebrow: 'العملية',
//     title: 'كيف تسير العملية عادة',
//     steps: [
//       {
//         number: '٠١',
//         title: 'الـ brief',
//         description: 'نبدأ بفهم الفكرة والسياق ودرجة الوضوح الحالية للمشروع.',
//       },
//       {
//         number: '٠٢',
//         title: 'هيكلة المنتج',
//         description: 'نحدد الأدوار الأساسية والمسارات والأولويات وما الذي يحتاجه المنتج فعلاً في هذه المرحلة.',
//       },
//       {
//         number: '٠٣',
//         title: 'تحديد الأولويات',
//         description: 'نفصل بين ما يجب أن يكون ضمن MVP الآن وما يمكن تأجيله لاحقاً.',
//       },
//       {
//         number: '٠٤',
//         title: 'الواجهة والنموذج الأولي',
//         description: 'نبني الشاشات الأساسية ومنطق الاستخدام والـ prototype القابل للنقر.',
//       },
//       {
//         number: '٠٥',
//         title: 'الخطوة التالية',
//         description: 'تحصلون على مواد تساعدكم في العرض أو التوافق الداخلي أو الانتقال إلى التطوير.',
//       },
//     ],
//   },
// }

// const STARTUPS_EFFICIENCY_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'efficiencyStartups',
//     eyebrow: 'Подход',
//     title: 'Почему это удобнее, чем длинный agency-процесс',
//     description:
//       'Стартапам редко нужен тяжёлый процесс с большим количеством созвонов, слоёв и растянутой delivery-моделью. Им нужна ясность, скорость, приоритеты и сильная подача.',
//     items: [
//       {
//         icon: 'zap',
//         title: 'Быстрее за счёт структуры',
//         description:
//           'Чёткая методология и фокус на главном — без растянутых discovery-фаз и лишних этапов.',
//       },
//       {
//         icon: 'refreshCw',
//         title: 'Меньше лишних итераций',
//         description:
//           'Правильно заданные вопросы в начале — меньше переделок в процессе.',
//       },
//       {
//         icon: 'users',
//         title: 'Senior-подход без лишнего overhead',
//         description:
//           'Работа напрямую с senior-специалистами — без лишних слоёв менеджмента и растянутой коммуникации.',
//       },
//       {
//         icon: 'target',
//         title: 'Удобно для pitch, MVP и следующего build-этапа',
//         description:
//           'Результат, который сразу можно показать, обсудить и передать в разработку.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'efficiencyStartups',
//     eyebrow: 'Approach',
//     title: 'Why startup teams choose Atelier Meridian',
//     description:
//       'Startups rarely need a heavy process with endless calls, layers of management, and extended delivery timelines. They need clarity, speed, priorities, and premium presentation.',
//     items: [
//       {
//         icon: 'zap',
//         title: 'Helps reduce early-stage ambiguity',
//         description:
//           'Clear methodology and focus on essentials — without extended discovery phases or unnecessary steps.',
//       },
//       {
//         icon: 'refreshCw',
//         title: 'Makes investor conversations easier',
//         description:
//           'Properly framed questions at the start — fewer revisions and clearer communication later.',
//       },
//       {
//         icon: 'users',
//         title: 'Creates a stronger base for product delivery',
//         description:
//           'Work directly with senior specialists — no extra management layers or drawn-out communication.',
//       },
//       {
//         icon: 'target',
//         title: 'Premium output without a heavy agency process',
//         description:
//           'Results that are ready to present, discuss, or hand off to development — without overhead.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'efficiencyStartups',
//     eyebrow: 'المنهجية',
//     title: 'لماذا تختار فرق الشركات الناشئة Atelier Meridian',
//     description:
//       'الشركات الناشئة نادراً ما تحتاج إلى عملية ثقيلة مع اجتماعات لا نهاية لها وطبقات إدارية وجداول تسليم ممتدة. إنها تحتاج إلى وضوح وسرعة وأولويات وعرض متميز.',
//     items: [
//       {
//         icon: 'zap',
//         title: 'يقلل الغموض في المراحل المبكرة',
//         description:
//           'منهجية واضحة وتركيز على الأساسيات — من دون مراحل استكشاف مطولة أو خطوات غير ضرورية.',
//       },
//       {
//         icon: 'refreshCw',
//         title: 'يسهل النقاش مع المستثمرين وأصحاب القرار',
//         description:
//           'أسئلة منظمة من البداية — تعديلات أقل وتواصل أوضح لاحقاً.',
//       },
//       {
//         icon: 'users',
//         title: 'يبني أساساً أقوى للتنفيذ لاحقاً',
//         description:
//           'عمل مباشر مع متخصصين ذوي خبرة — من دون طبقات إدارية أو تواصل مطول.',
//       },
//       {
//         icon: 'target',
//         title: 'يقدم مخرجات متميزة من دون نموذج وكالة ثقيل',
//         description:
//           'نتائج جاهزة للعرض أو النقاش أو التسليم للتطوير — من دون تكاليف إضافية.',
//       },
//     ],
//   },
// }

// const STARTUPS_CONCEPTS_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'conceptsStartups',
//     eyebrow: 'Концепты',
//     title: 'Как это может выглядеть',
//     conceptBadgeLabel: 'Концепт студии',
//     challengeLabel: 'Задача',
//     clarifiedLabel: 'Что прояснили',
//     preparedLabel: 'Что подготовили',
//     ctaLabel: 'Посмотреть концепты',
//     ctaPageKey: 'concepts',
//     items: [
//       {
//         title: 'Investor-Ready Fintech App',
//         challenge:
//           'Startup-команде нужно было показать продукт инвесторам, но интерфейсы были сырыми и неубедительными.',
//         clarified:
//           'Определили ключевые сценарии, приоритеты, визуальное направление и логику экранов.',
//         prepared:
//           'Интерактивный prototype, UI-дизайн ключевых экранов, материалы для pitch.',
//       },
//       {
//         title: 'Product Website for Early-Stage Startup',
//         challenge:
//           'Нужен был сильный продуктовый сайт для нового B2B-инструмента, но не хватало ясности в позиционировании.',
//         clarified:
//           'Выстроили структуру сайта, messaging, визуальное направление и конверсионную логику.',
//         prepared:
//           'Готовый дизайн сайта с понятной структурой и материалами для разработки.',
//       },
//       {
//         title: 'MVP Dashboard / Web Product Concept',
//         challenge:
//           'Founder хотел быстро собрать MVP dashboard-продукта, но не знал, с чего начать в интерфейсах.',
//         clarified:
//           'Определили core features, user flows, экранную карту и визуальный подход.',
//         prepared:
//           'Prototype и UI-дизайн MVP-версии, готовые к обсуждению и разработке.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'conceptsStartups',
//     eyebrow: 'Concepts',
//     title: 'What this can look like',
//     conceptBadgeLabel: 'Studio Concept',
//     challengeLabel: 'Challenge',
//     clarifiedLabel: 'What We Clarified',
//     preparedLabel: 'What We Prepared',
//     ctaLabel: 'View Studio Concepts',
//     ctaPageKey: 'concepts',
//     items: [
//       {
//         title: 'Investor-Ready Fintech App',
//         challenge:
//           'A startup team needed to present their product to investors, but interfaces were raw and unconvincing.',
//         clarified:
//           'We defined key scenarios, priorities, visual direction, and screen logic.',
//         prepared:
//           'Interactive prototype, UI design of key screens, materials for pitch.',
//       },
//       {
//         title: 'Product Website for Early-Stage Startup',
//         challenge:
//           'They needed a strong product website for a new B2B tool, but lacked clarity on positioning.',
//         clarified:
//           'We structured the site, messaging, visual direction, and conversion logic.',
//         prepared:
//           'A complete website design with clear structure and materials for development.',
//       },
//       {
//         title: 'MVP Dashboard / Web Product Concept',
//         challenge:
//           "A founder wanted to quickly build an MVP dashboard product but didn't know where to start with interfaces.",
//         clarified:
//           'We defined core features, user flows, screen map, and visual approach.',
//         prepared:
//           'Prototype and UI design of the MVP version, ready for discussion and development.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'conceptsStartups',
//     eyebrow: 'المفاهيم',
//     title: 'كيف يمكن أن يبدو ذلك عملياً',
//     conceptBadgeLabel: 'مفهوم من الاستوديو',
//     challengeLabel: 'التحدي',
//     clarifiedLabel: 'ما الذي وضّحناه',
//     preparedLabel: 'ما الذي جهّزناه',
//     ctaLabel: 'استعرض مفاهيم الاستوديو',
//     ctaPageKey: 'concepts',
//     items: [
//       {
//         title: 'Landing page جاهز للعرض على المستثمرين',
//         challenge:
//           'فريق ناشئ يحتاج إلى عرض منتجه على مستثمرين، لكن الواجهات كانت أولية وغير مقنعة.',
//         clarified:
//           'حددنا السيناريوهات الأساسية والأولويات والاتجاه البصري ومنطق الشاشات.',
//         prepared:
//           'نموذج أولي تفاعلي، تصميم UI للشاشات الأساسية، مواد للعرض.',
//       },
//       {
//         title: 'مفهوم لتطبيق جوال',
//         challenge:
//           'مؤسس يحتاج إلى تطبيق موبايل لكنه لم يكن واضحاً بشأن الواجهات والمسارات.',
//         clarified:
//           'بنينا هيكل التطبيق ومسارات المستخدم الأساسية والاتجاه البصري.',
//         prepared:
//           'نموذج أولي وتصميم جاهز للعرض والتسليم للتطوير.',
//       },
//       {
//         title: 'مفهوم لواجهة SaaS',
//         challenge:
//           'مؤسس يريد بناء MVP سريعاً لكنه لم يعرف من أين يبدأ بالواجهات.',
//         clarified:
//           'حددنا الوظائف الأساسية ومسارات المستخدم وخريطة الشاشات والنهج البصري.',
//         prepared:
//           'نموذج أولي وتصميم UI للنسخة الأولى، جاهز للنقاش والتطوير.',
//       },
//     ],
//   },
// }

// const STARTUPS_CTA_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'ctaStartups',
//     title: 'Нужен понятный MVP, prototype или investor-ready product?',
//     description:
//       'Опишите задачу — мы предложим подходящий формат работы, ориентир по срокам и следующий шаг для вашего startup-проекта.',
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Посмотреть цены',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'Подходит для startup websites, web products, mobile apps, MVP и investor-ready prototype',
//   },
//   en: {
//     blockType: 'ctaStartups',
//     title: 'Need a clearer MVP, prototype, or investor-ready product?',
//     description:
//       'Describe your startup project, and we will suggest the right format, timeline range, and next step.',
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'View Pricing',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'For startup websites, web products, mobile apps, MVP, and investor-ready prototypes',
//   },
//   ar: {
//     blockType: 'ctaStartups',
//     title: 'هل تحتاج إلى MVP أوضح أو prototype أو منتج جاهز للعرض على المستثمرين؟',
//     description:
//       'صف مشروعك الناشئ، وسنقترح عليك الصيغة الأنسب للعمل، والنطاق الزمني المتوقع، والخطوة التالية.',
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الأسعار',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'للمواقع الناشئة والمنتجات الرقمية وتطبيقات الجوال وMVP والنماذج الجاهزة للعرض على المستثمرين',
//   },
// }

// const STARTUPS_FAQ_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'faqStartups',
//     eyebrow: 'FAQ',
//     title: 'Частые вопросы для стартапов',
//     description:
//       'Коротко о том, как мы работаем со startup-командами, что можно принести на вход и что будет на выходе.',
//     items: [
//       {
//         question: 'Можно ли прийти только с идеей?',
//         answer:
//           'Да. Это один из самых частых сценариев. Мы помогаем превратить идею в понятную продуктовую структуру, user flows и prototype.',
//       },
//       {
//         question: 'Подходит ли это для MVP?',
//         answer:
//           'Да. Один из ключевых форматов нашей работы — помочь стартапу понять, что должно войти в MVP, как это должно выглядеть и что можно показать дальше.',
//       },
//       {
//         question: 'Можно ли использовать результат для investor pitch?',
//         answer:
//           'Да. Мы часто собираем investor-ready prototype и материалы, которые помогают объяснить продукт инвесторам, партнёрам или команде.',
//       },
//       {
//         question: 'Подходит ли это для mobile app и web product?',
//         answer:
//           'Да. Мы работаем и с startup websites, и с SaaS/web products, и с mobile apps.',
//       },
//       {
//         question: 'Что я получу на выходе?',
//         answer:
//           'В зависимости от задачи: product framing, структуру MVP, user flows, screen map, prototype, visual direction и материалы для следующего этапа.',
//       },
//       {
//         question: 'Можно ли прийти с ранней версией продукта на redesign?',
//         answer:
//           'Да. Если у вас уже есть первая версия сайта или приложения, мы можем помочь улучшить UX/UI и продуктовую логику.',
//       },
//       {
//         question: 'Нужны ли постоянные созвоны?',
//         answer:
//           'Нет. Мы работаем async-first. Основная коммуникация — в письменном виде, а созвоны подключаем только там, где это ускоряет процесс.',
//       },
//       {
//         question: 'Сколько времени обычно занимает такой проект?',
//         answer:
//           'Зависит от формата, но чаще всего startup-проекты занимают от 2 до 5 недель в зависимости от scope.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'faqStartups',
//     eyebrow: 'FAQ',
//     title: 'Frequently asked questions for startups',
//     description:
//       'A quick overview of how we work with startup teams, what you can bring in, and what you get out of it.',
//     items: [
//       {
//         question: 'Can I come with just an idea?',
//         answer:
//           'Yes. This is one of the most common scenarios. We help turn an idea into clear product structure, user flows, and a prototype.',
//       },
//       {
//         question: 'Is this suitable for MVP?',
//         answer:
//           'Yes. One of our core formats is helping startups define what should be inside the MVP, how it should look, and what can be shown next.',
//       },
//       {
//         question: 'Can the result be used for investor pitch?',
//         answer:
//           'Yes. We often create investor-ready prototypes and materials that help explain the product to investors, partners, or the internal team.',
//       },
//       {
//         question: 'Is this relevant for mobile apps and web products?',
//         answer:
//           'Yes. We work with startup websites, SaaS/web products, and mobile apps.',
//       },
//       {
//         question: 'What exactly will I receive?',
//         answer:
//           'Depending on the task: product framing, MVP structure, user flows, screen map, prototype, visual direction, and materials for the next stage.',
//       },
//       {
//         question: 'Can I come with an early version that needs redesign?',
//         answer:
//           'Yes. If you already have a first version of a site or app, we can help improve the UX/UI and product logic.',
//       },
//       {
//         question: 'Will this require constant calls?',
//         answer:
//           'No. We work async-first. Most communication is written, and calls are added only where they genuinely speed things up.',
//       },
//       {
//         question: 'How long does this usually take?',
//         answer:
//           'It depends on the format, but most startup projects usually take between 2 and 5 weeks depending on scope.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'faqStartups',
//     eyebrow: 'الأسئلة الشائعة',
//     title: 'أسئلة شائعة للشركات الناشئة',
//     description:
//       'نظرة سريعة على طريقة عملنا مع فرق الشركات الناشئة، وما الذي يمكنك أن تبدأ به، وما الذي ستحصل عليه في النهاية.',
//     items: [
//       {
//         question: 'هل يمكنني البدء بفكرة فقط؟',
//         answer:
//           'نعم. هذا من أكثر السيناريوهات شيوعاً. نساعد في تحويل الفكرة إلى هيكل منتج واضح، ومسارات استخدام، ونموذج أولي.',
//       },
//       {
//         question: 'هل هذا مناسب لـ MVP؟',
//         answer:
//           'نعم. أحد أهم أشكال عملنا هو مساعدة الشركات الناشئة على تحديد ما الذي يجب أن يدخل في MVP، وكيف يبدو، وما الذي يمكن عرضه تالياً.',
//       },
//       {
//         question: 'هل يمكن استخدام النتيجة في عرض للمستثمرين؟',
//         answer:
//           'نعم. كثيراً ما نجهز نماذج أولية جاهزة للعرض على المستثمرين ومواد تساعد على شرح المنتج للمستثمرين أو الشركاء أو الفريق الداخلي.',
//       },
//       {
//         question: 'هل هذا مناسب لتطبيقات الجوال والمنتجات الويب؟',
//         answer:
//           'نعم. نعمل مع مواقع الشركات الناشئة، ومنتجات SaaS/الويب، وتطبيقات الجوال.',
//       },
//       {
//         question: 'ما الذي سأحصل عليه فعلياً؟',
//         answer:
//           'بحسب نوع المهمة: product framing، وهيكل MVP، ومسارات المستخدم، وخريطة الشاشات، ونموذج أولي، واتجاه بصري، ومواد للمرحلة التالية.',
//       },
//       {
//         question: 'هل يمكنني القدوم بنسخة مبكرة تحتاج إلى redesign؟',
//         answer:
//           'نعم. إذا كانت لديك نسخة أولية من موقع أو تطبيق، يمكننا المساعدة في تحسين UX/UI ومنطق المنتج.',
//       },
//       {
//         question: 'هل يتطلب هذا الكثير من المكالمات؟',
//         answer:
//           'لا. نحن نعمل بمنهجية async-first. معظم التواصل يتم كتابياً، ولا نضيف المكالمات إلا عندما تسرّع العملية فعلاً.',
//       },
//       {
//         question: 'كم يستغرق هذا عادة؟',
//         answer:
//           'يعتمد ذلك على الصيغة، لكن معظم مشاريع الشركات الناشئة تستغرق عادة بين أسبوعين وخمسة أسابيع بحسب النطاق.',
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

// async function getStartupsPage(payload: Awaited<ReturnType<typeof getPayload>>) {
//   const result = await payload.find({
//     collection: 'pages',
//     where: {
//       pageKey: {
//         equals: 'for-startups',
//       },
//     },
//     limit: 1,
//     locale: 'ru',
//     fallbackLocale: 'none',
//     depth: 0,
//   })

//   return result.docs[0] ?? null
// }

// async function ensureStartupsPage(payload: Awaited<ReturnType<typeof getPayload>>) {
//   const existing = await getStartupsPage(payload)

//   if (existing) {
//     return existing
//   }

//   return payload.create({
//     collection: 'pages',
//     locale: 'ru',
//     depth: 0,
//     data: {
//       pageKey: 'for-startups',
//       internalName: 'for-startups',
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

//   const homePage = await ensureStartupsPage(payload)


//     await seedBlockForLocale(payload, homePage.id, 'ru', STARTUPS_HERO_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', STARTUPS_HERO_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', STARTUPS_HERO_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', STARTUPS_VALUE_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', STARTUPS_VALUE_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', STARTUPS_VALUE_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', STARTUPS_DELIVERABLES_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', STARTUPS_DELIVERABLES_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', STARTUPS_DELIVERABLES_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', STARTUPS_SITUATIONS_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', STARTUPS_SITUATIONS_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', STARTUPS_SITUATIONS_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', ARTIFACTS_STARTUPS_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', ARTIFACTS_STARTUPS_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', ARTIFACTS_STARTUPS_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', STARTUPS_PROCESS_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', STARTUPS_PROCESS_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', STARTUPS_PROCESS_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', STARTUPS_EFFICIENCY_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', STARTUPS_EFFICIENCY_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', STARTUPS_EFFICIENCY_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', STARTUPS_CONCEPTS_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', STARTUPS_CONCEPTS_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', STARTUPS_CONCEPTS_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', STARTUPS_CTA_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', STARTUPS_CTA_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', STARTUPS_CTA_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', STARTUPS_FAQ_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', STARTUPS_FAQ_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', STARTUPS_FAQ_SEED.ar)

//   console.log('✅ Solutions page seed completed')
//   process.exit(0)
// }

// main().catch((error) => {
//   console.error('❌ Solutions page seed failed')
//   console.error(error)
//   process.exit(1)
// })