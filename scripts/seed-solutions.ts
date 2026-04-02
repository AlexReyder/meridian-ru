// import 'dotenv/config'

// import { getPayload } from 'payload'
// import config from '../payload.config'

// type Locale = 'ru' | 'en' | 'ar'

// type BlockData = Record<string, unknown> & {
//   blockType: string
//   id?: string
// }

// const SOLUTIONS_HERO_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'heroSolutions',
//     eyebrow: 'UX/UI Design Solutions',
//     title: 'Решения для сайтов, digital-систем и мобильных приложений',
//     description:
//       'Atelier Meridian помогает founders, B2B-командам, агентствам и integrators превращать идею, сырой workflow или сложную цифровую задачу в понятную структуру, сильный интерфейс и материалы для следующего этапа — будь то сайт, digital-система, client portal или mobile app.',
//     note: 'Подходит для новых проектов, redesign, presale, investor presentation и передачи в разработку.',
//     tags: [
//       { label: 'Сайты' },
//       { label: 'Корпоративные сайты' },
//       { label: 'Digital-системы' },
//       { label: 'B2B-платформы' },
//       { label: 'Клиентские порталы' },
//       { label: 'Dashboards' },
//       { label: 'Мобильные приложения' },
//       { label: 'Redesign и UX/UI' },
//       { label: 'White-label' },
//     ],
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Посмотреть цены',
//     secondaryPageKey: 'pricing',
//     imageUrl:
//       'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2015_27_08-Hno8Y8Yi5GvsrPDqbYym9CLoCCxXWk.png',
//     imageAlt: 'Premium Digital Solutions - websites, digital systems, and mobile applications',
//     floatingLabel: 'Сайты · Системы · Приложения',
//   },
//   en: {
//     blockType: 'heroSolutions',
//     eyebrow: 'UX/UI Design Solutions',
//     title: 'Solutions for websites, digital systems, and mobile apps',
//     description:
//       'Atelier Meridian helps founders, B2B teams, agencies, and integrators turn complex requirements, raw workflows, and early product ideas into clear structure, premium interfaces, and materials ready for the next stage — whether it is a website, digital system, client portal, or mobile app.',
//     note: 'Suitable for new products, redesign, presale, investor presentations, and dev handoff.',
//     tags: [
//       { label: 'Websites' },
//       { label: 'Corporate Websites' },
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
//     imageUrl:
//       'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2015_27_08-Hno8Y8Yi5GvsrPDqbYym9CLoCCxXWk.png',
//     imageAlt: 'Premium Digital Solutions - websites, digital systems, and mobile applications',
//     floatingLabel: 'Websites · Systems · Apps',
//   },
//   ar: {
//     blockType: 'heroSolutions',
//     eyebrow: 'حلول تصميم UX/UI',
//     title: 'حلول للمواقع والأنظمة الرقمية وتطبيقات الجوال',
//     description:
//       'يساعد Atelier Meridian المؤسسين وفرق B2B والوكالات والشركاء التقنيين على تحويل الفكرة أو سير العمل الخام أو التحدي الرقمي المعقد إلى هيكل واضح وواجهة قوية ومواد جاهزة للمرحلة التالية — سواء كان المشروع موقعاً أو نظاماً رقمياً أو بوابة عميل أو تطبيق موبايل.',
//     note: 'مناسب للمشاريع الجديدة وإعادة التصميم ومرحلة presale وعروض المستثمرين وتسليم التطوير.',
//     tags: [
//       { label: 'المواقع' },
//       { label: 'مواقع الشركات' },
//       { label: 'الأنظمة الرقمية' },
//       { label: 'منصات B2B' },
//       { label: 'بوابات العملاء' },
//       { label: 'لوحات التحكم' },
//       { label: 'تطبيقات الجوال' },
//       { label: 'إعادة التصميم' },
//       { label: 'White-label' },
//     ],
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الأسعار',
//     secondaryPageKey: 'pricing',
//     imageUrl:
//       'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2015_27_08-Hno8Y8Yi5GvsrPDqbYym9CLoCCxXWk.png',
//     imageAlt: 'حلول رقمية متميزة - المواقع والأنظمة الرقمية وتطبيقات الجوال',
//     floatingLabel: 'المواقع · الأنظمة · التطبيقات',
//   },
// }

// const SOLUTIONS_POSITIONING_INTRO_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'positioningIntroSolutions',
//     title: 'Не просто дизайн, а решение под тип задачи',
//     description:
//       'Atelier Meridian работает не как студия «наборов экранов», а как boutique-партнёр по продуктовой структуре и интерфейсам. Мы помогаем собрать логику сайта, digital-системы или mobile app до начала разработки, чтобы проект было проще согласовать, показать и передать дальше.',
//     items: [
//       {
//         number: '01',
//         title: 'Сначала структура',
//         description: 'Прояснение логики продукта до визуального дизайна',
//       },
//       {
//         number: '02',
//         title: 'Потом интерфейс',
//         description: 'Экраны и прототип на основе понятной архитектуры',
//       },
//       {
//         number: '03',
//         title: 'Затем понятный следующий шаг',
//         description: 'Материалы для презентации, согласования или разработки',
//       },
//     ],
//   },
//   en: {
//     blockType: 'positioningIntroSolutions',
//     title: 'Not just design services, but the right solution for the task',
//     description:
//       'Atelier Meridian does not work like a studio that simply "produces screens." We help structure websites, digital systems, portals, and mobile apps before development begins — so the project is easier to explain, align, present, and move forward.',
//     items: [
//       {
//         number: '01',
//         title: 'Structure first',
//         description: 'Clarifying product logic before visual design begins',
//       },
//       {
//         number: '02',
//         title: 'Interface next',
//         description: 'Screens and prototype built on clear architecture',
//       },
//       {
//         number: '03',
//         title: 'Then a clear next step',
//         description: 'Materials ready for presentation, alignment, or development',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'positioningIntroSolutions',
//     title: 'ليست مجرد خدمات تصميم، بل الحل المناسب لطبيعة المشروع',
//     description:
//       'لا يعمل Atelier Meridian كاستوديو ينتج شاشات فقط. نحن نساعد على بناء منطق المنتج وهيكل الموقع أو النظام أو التطبيق قبل بدء التطوير، بحيث يصبح المشروع أسهل في الشرح والاعتماد والعرض والتنفيذ.',
//     items: [
//       {
//         number: '٠١',
//         title: 'الهيكل أولاً',
//         description: 'توضيح منطق المنتج قبل بدء التصميم البصري',
//       },
//       {
//         number: '٠٢',
//         title: 'ثم الواجهة',
//         description: 'الشاشات والنموذج الأولي يُبنيان على أساس معماري واضح',
//       },
//       {
//         number: '٠٣',
//         title: 'ثم خطوة تالية واضحة',
//         description: 'مواد جاهزة للعرض أو الاعتماد أو الانتقال إلى التطوير',
//       },
//     ],
//   },
// }

// const SOLUTIONS_GRID_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'gridSolutions',
//     eyebrow: 'Типы задач',
//     learnMoreLabel: 'Подробнее',
//     items: [
//       {
//         anchorId: 'website',
//         title: 'Дизайн сайтов и корпоративных сайтов',
//         subtitle:
//           'Для новых web-проектов, брендов и компаний, которым нужен сильный сайт с понятной структурой и premium подачей.',
//       },
//       {
//         anchorId: 'redesign',
//         title: 'Редизайн сайта и UX/UI-улучшение',
//         subtitle:
//           'Для случаев, когда сайт уже есть, но его нужно упростить, усилить визуально или перестроить по логике.',
//       },
//       {
//         anchorId: 'b2b',
//         title: 'Digital-системы и B2B-платформы',
//         subtitle:
//           'Для сложных интерфейсов, рабочих систем, dashboards и платформ, где важны роли, сценарии и структура.',
//       },
//       {
//         anchorId: 'portal',
//         title: 'Клиентские порталы и внутренние интерфейсы',
//         subtitle:
//           'Для кабинетов, service portals и operational tools, где нужно сделать продукт понятнее и удобнее.',
//       },
//       {
//         anchorId: 'mobile',
//         title: 'Мобильные приложения',
//         subtitle:
//           'Для mobile apps, где важны platform fit, сценарии и сильная interface-подача.',
//       },
//       {
//         anchorId: 'presale',
//         title: 'Presale, prototype и white-label поддержка',
//         subtitle:
//           'Для партнёров, integrators и команд, которым нужно быстро и убедительно упаковать решение для клиента или следующего этапа.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'gridSolutions',
//     eyebrow: 'Solution Types',
//     learnMoreLabel: 'Learn More',
//     items: [
//       {
//         anchorId: 'website',
//         title: 'Website & Corporate Website Design',
//         subtitle:
//           'For new websites, premium B2B company sites, and web experiences that need clear structure and stronger positioning.',
//       },
//       {
//         anchorId: 'redesign',
//         title: 'Website Redesign & UX/UI Improvement',
//         subtitle:
//           'For existing websites that need clearer structure, stronger presentation, and a better user experience.',
//       },
//       {
//         anchorId: 'b2b',
//         title: 'Digital Systems & B2B Platforms',
//         subtitle:
//           'For complex interfaces, internal systems, dashboards, and B2B environments where roles, workflows, and structure matter.',
//       },
//       {
//         anchorId: 'portal',
//         title: 'Client Portals & Internal Interfaces',
//         subtitle:
//           'For service portals, account areas, and internal products that need clearer navigation and better day-to-day usability.',
//       },
//       {
//         anchorId: 'mobile',
//         title: 'Mobile App Design',
//         subtitle:
//           'For mobile products that need stronger user flows, clearer structure, and premium interface execution.',
//       },
//       {
//         anchorId: 'presale',
//         title: 'Presale, Prototype & White-Label Support',
//         subtitle:
//           'For agencies, integrators, and partner teams that need a stronger product/interface layer for client-facing delivery.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'gridSolutions',
//     eyebrow: 'أنواع الحلول',
//     learnMoreLabel: 'اعرف المزيد',
//     items: [
//       {
//         anchorId: 'website',
//         title: 'تصميم المواقع ومواقع الشركات',
//         subtitle:
//           'للمواقع الجديدة والمواقع المؤسسية والتجارب الرقمية التي تحتاج إلى هيكل أوضح وحضور أكثر تميزاً.',
//       },
//       {
//         anchorId: 'redesign',
//         title: 'إعادة تصميم المواقع وتحسين تجربة الاستخدام',
//         subtitle:
//           'للمواقع الحالية التي تحتاج إلى هيكل أوضح وتقديم أقوى وتجربة استخدام أفضل.',
//       },
//       {
//         anchorId: 'b2b',
//         title: 'الأنظمة الرقمية ومنصات B2B',
//         subtitle:
//           'للواجهات المعقدة والأنظمة الداخلية ولوحات التحكم والبيئات التي تعتمد على الأدوار ومسارات العمل.',
//       },
//       {
//         anchorId: 'portal',
//         title: 'بوابات العملاء والواجهات الداخلية',
//         subtitle:
//           'لبوابات الخدمات وصفحات الحسابات والمنتجات الداخلية التي تحتاج إلى تنقل أوضح وسهولة أعلى في الاستخدام اليومي.',
//       },
//       {
//         anchorId: 'mobile',
//         title: 'تصميم تطبيقات الجوال',
//         subtitle:
//           'للمنتجات المحمولة التي تحتاج إلى مسارات استخدام أقوى وهيكل أوضح وتنفيذ بصري متميز.',
//       },
//       {
//         anchorId: 'presale',
//         title: 'دعم العروض التمهيدية والنماذج الأولية والعمل بنظام الشراكة',
//         subtitle:
//           'للوكالات وشركاء التنفيذ والفرق التي تحتاج إلى طبقة أقوى من هيكلة المنتج والواجهات في المشاريع الموجهة للعملاء.',
//       },
//     ],
//   },
// }

// const SOLUTIONS_DETAILS_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'detailsSolution',
//     whenRelevantLabel: 'Когда актуально',
//     whatWeClarifyLabel: 'Что помогаем прояснить',
//     whatClientReceivesLabel: 'Что получает клиент',
//     items: [
//       {
//         anchorId: 'website',
//         title: 'Дизайн сайтов и корпоративных сайтов',
//         intro:
//           'Для компаний, брендов и продуктов, которым нужен новый сайт или корпоративный сайт с сильной структурой и визуальной подачей.',
//         whenRelevant: [
//           { label: 'запускается новый сайт' },
//           { label: 'нужен корпоративный сайт' },
//           { label: 'нужна product / brand presentation' },
//           { label: 'сайт должен выглядеть сильнее и понятнее' },
//         ],
//         whatWeClarify: [
//           { label: 'структура сайта' },
//           { label: 'иерархия контента' },
//           { label: 'пользовательские сценарии' },
//           { label: 'ключевые страницы' },
//           { label: 'visual direction' },
//         ],
//         whatClientReceives: [
//           { label: 'структура сайта' },
//           { label: 'карта ключевых экранов' },
//           { label: 'prototype или визуальная концепция' },
//           { label: 'UI-направление' },
//           { label: 'материалы для следующего этапа' },
//         ],
//         primaryButtonLabel: 'Получить предложение',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'redesign',
//         title: 'Редизайн сайта и UX/UI-улучшение',
//         intro:
//           'Для проектов, где сайт уже существует, но не даёт нужной ясности, доверия или конверсии.',
//         whenRelevant: [
//           { label: 'нужен редизайн сайта' },
//           { label: 'UX устарел или перегружен' },
//           { label: 'структура слабая' },
//           { label: 'нужна более сильная подача' },
//         ],
//         whatWeClarify: [
//           { label: 'что мешает восприятию' },
//           { label: 'какие страницы и блоки перегружают путь' },
//           { label: 'как пересобрать структуру' },
//           { label: 'как усилить interface clarity' },
//         ],
//         whatClientReceives: [
//           { label: 'новая структура' },
//           { label: 'пересобранная логика страниц' },
//           { label: 'redesign-концепция' },
//           { label: 'ключевые обновлённые интерфейсы' },
//           { label: 'материалы для реализации' },
//         ],
//         primaryButtonLabel: 'Получить предложение',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'b2b',
//         title: 'Digital-системы и B2B-платформы',
//         intro:
//           'Для компаний, которым нужно превратить сложный workflow в понятную digital-систему.',
//         whenRelevant: [
//           { label: 'много ролей' },
//           { label: 'сложные процессы' },
//           { label: 'нужен dashboard / admin / B2B interface' },
//           { label: 'система должна быть рабочей, а не просто красивой' },
//         ],
//         whatWeClarify: [
//           { label: 'роли и права доступа' },
//           { label: 'пользовательские сценарии' },
//           { label: 'модульную структуру' },
//           { label: 'экранную логику' },
//           { label: 'приоритеты интерфейса' },
//         ],
//         whatClientReceives: [
//           { label: 'архитектуру системы' },
//           { label: 'карту ролей' },
//           { label: 'пользовательские сценарии' },
//           { label: 'экранную матрицу' },
//           { label: 'prototype ключевых экранов' },
//           { label: 'материалы для передачи в разработку' },
//         ],
//         primaryButtonLabel: 'Получить предложение',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'portal',
//         title: 'Клиентские порталы и внутренние интерфейсы',
//         intro:
//           'Для client portals, account areas и внутренних интерфейсов, где важны навигация, понятность и удобство ежедневной работы.',
//         whenRelevant: [
//           { label: 'сложный кабинет' },
//           { label: 'непонятная навигация' },
//           { label: 'слабая структура внутренних экранов' },
//           { label: 'сервис выглядит фрагментированно' },
//         ],
//         whatWeClarify: [
//           { label: 'путь пользователя' },
//           { label: 'структуру разделов' },
//           { label: 'точки принятия решений' },
//           { label: 'UI-логику работы с данными и действиями' },
//         ],
//         whatClientReceives: [
//           { label: 'карта сценариев' },
//           { label: 'новая структура портала' },
//           { label: 'ключевые интерфейсные решения' },
//           { label: 'prototype flow' },
//           { label: 'основа для redesign / delivery' },
//         ],
//         primaryButtonLabel: 'Получить предложение',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'mobile',
//         title: 'Мобильные приложения',
//         intro:
//           'Для mobile apps, где важны понятный user flow, platform fit и сильная визуальная подача.',
//         whenRelevant: [
//           { label: 'нужен дизайн нового приложения' },
//           { label: 'нужен redesign mobile app' },
//           { label: 'важно подготовить MVP или investor-ready concept' },
//           { label: 'нужен более сильный mobile UX/UI' },
//         ],
//         whatWeClarify: [
//           { label: 'mobile user flow' },
//           { label: 'структуру экранов' },
//           { label: 'приоритеты сценариев' },
//           { label: 'visual direction' },
//           { label: 'platform conventions' },
//         ],
//         whatClientReceives: [
//           { label: 'структуру приложения' },
//           { label: 'user flows' },
//           { label: 'ключевые mobile screens' },
//           { label: 'prototype' },
//           { label: 'материалы для следующего этапа' },
//         ],
//         primaryButtonLabel: 'Получить предложение',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'presale',
//         title: 'Presale, prototype и white-label поддержка',
//         intro:
//           'Для партнёров, integrators и product-команд, которым нужно быстро подготовить strong concept, prototype или client-facing presentation.',
//         whenRelevant: [
//           { label: 'нужен presale-пакет' },
//           { label: 'важно выиграть pitch' },
//           { label: 'нужен white-label партнёр' },
//           { label: 'не хватает внутренних UX/UI-ресурсов' },
//         ],
//         whatWeClarify: [
//           { label: 'как показать решение' },
//           { label: 'какие экраны критичны' },
//           { label: 'как упаковать продуктовую идею' },
//           { label: 'как передать решение клиенту или dev team' },
//         ],
//         whatClientReceives: [
//           { label: 'concept package' },
//           { label: 'prototype' },
//           { label: 'ключевые интерфейсы' },
//           { label: 'premium visual packaging' },
//           { label: 'материалы для обсуждения или передачи в разработку' },
//         ],
//         primaryButtonLabel: 'Для партнёров',
//         primaryPageKey: 'for-partners',
//         secondaryButtonLabel: 'Получить предложение',
//         secondaryPageKey: 'get-proposal',
//       },
//     ],
//   },
//   en: {
//     blockType: 'detailsSolution',
//     whenRelevantLabel: 'When Relevant',
//     whatWeClarifyLabel: 'What We Help Clarify',
//     whatClientReceivesLabel: 'What the Client Receives',
//     items: [
//       {
//         anchorId: 'website',
//         title: 'Website & Corporate Website Design',
//         intro:
//           'For companies, brands, and products that need a new website or corporate site with strong structure and premium visual presentation.',
//         whenRelevant: [
//           { label: 'launching a new website' },
//           { label: 'need a corporate website' },
//           { label: 'need product or brand presentation' },
//           { label: 'site should look stronger and clearer' },
//         ],
//         whatWeClarify: [
//           { label: 'site structure' },
//           { label: 'content hierarchy' },
//           { label: 'user scenarios' },
//           { label: 'key pages' },
//           { label: 'visual direction' },
//         ],
//         whatClientReceives: [
//           { label: 'site structure' },
//           { label: 'key screen map' },
//           { label: 'prototype or visual concept' },
//           { label: 'UI direction' },
//           { label: 'materials for next stage' },
//         ],
//         primaryButtonLabel: 'Get Proposal',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'redesign',
//         title: 'Website Redesign & UX/UI Improvement',
//         intro:
//           'For projects where the website already exists but does not deliver the needed clarity, trust, or conversion.',
//         whenRelevant: [
//           { label: 'need a website redesign' },
//           { label: 'UX is outdated or overloaded' },
//           { label: 'structure is weak' },
//           { label: 'need stronger presentation' },
//         ],
//         whatWeClarify: [
//           { label: 'what blocks user perception' },
//           { label: 'which pages and blocks overload the path' },
//           { label: 'how to restructure the site' },
//           { label: 'how to strengthen interface clarity' },
//         ],
//         whatClientReceives: [
//           { label: 'new structure' },
//           { label: 'reorganized page logic' },
//           { label: 'redesign concept' },
//           { label: 'key updated interfaces' },
//           { label: 'materials for implementation' },
//         ],
//         primaryButtonLabel: 'Get Proposal',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'b2b',
//         title: 'Digital Systems & B2B Platforms',
//         intro:
//           'For companies that need to turn a complex workflow into a clear digital system.',
//         whenRelevant: [
//           { label: 'multiple roles' },
//           { label: 'complex processes' },
//           { label: 'need dashboard / admin / B2B interface' },
//           { label: 'system must work, not just look good' },
//         ],
//         whatWeClarify: [
//           { label: 'roles and access rights' },
//           { label: 'user scenarios' },
//           { label: 'modular structure' },
//           { label: 'screen logic' },
//           { label: 'interface priorities' },
//         ],
//         whatClientReceives: [
//           { label: 'system architecture' },
//           { label: 'role map' },
//           { label: 'user scenarios' },
//           { label: 'screen matrix' },
//           { label: 'prototype of key screens' },
//           { label: 'materials for development handoff' },
//         ],
//         primaryButtonLabel: 'Get Proposal',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'portal',
//         title: 'Client Portals & Internal Interfaces',
//         intro:
//           'For client portals, account areas, and internal interfaces where navigation, clarity, and daily usability matter.',
//         whenRelevant: [
//           { label: 'complex account area' },
//           { label: 'unclear navigation' },
//           { label: 'weak internal screen structure' },
//           { label: 'service feels fragmented' },
//         ],
//         whatWeClarify: [
//           { label: 'user path' },
//           { label: 'section structure' },
//           { label: 'decision points' },
//           { label: 'UI logic for data and actions' },
//         ],
//         whatClientReceives: [
//           { label: 'scenario map' },
//           { label: 'new portal structure' },
//           { label: 'key interface decisions' },
//           { label: 'prototype flow' },
//           { label: 'foundation for redesign / delivery' },
//         ],
//         primaryButtonLabel: 'Get Proposal',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'mobile',
//         title: 'Mobile App Design',
//         intro:
//           'For mobile apps where clear user flow, platform fit, and strong visual presentation matter.',
//         whenRelevant: [
//           { label: 'need design for a new app' },
//           { label: 'need mobile app redesign' },
//           { label: 'need to prepare MVP or investor-ready concept' },
//           { label: 'need stronger mobile UX/UI' },
//         ],
//         whatWeClarify: [
//           { label: 'mobile user flow' },
//           { label: 'screen structure' },
//           { label: 'scenario priorities' },
//           { label: 'visual direction' },
//           { label: 'platform conventions' },
//         ],
//         whatClientReceives: [
//           { label: 'app structure' },
//           { label: 'user flows' },
//           { label: 'key mobile screens' },
//           { label: 'prototype' },
//           { label: 'materials for next stage' },
//         ],
//         primaryButtonLabel: 'Get Proposal',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'presale',
//         title: 'Presale, Prototype & White-Label Support',
//         intro:
//           'For partners, integrators, and product teams that need to quickly prepare a strong concept, prototype, or client-facing presentation.',
//         whenRelevant: [
//           { label: 'need a presale package' },
//           { label: 'need to win a pitch' },
//           { label: 'need a white-label partner' },
//           { label: 'lack internal UX/UI capacity' },
//         ],
//         whatWeClarify: [
//           { label: 'how to present the solution' },
//           { label: 'which screens are critical' },
//           { label: 'how to package the product idea' },
//           { label: 'how to hand off the solution to client or dev team' },
//         ],
//         whatClientReceives: [
//           { label: 'concept package' },
//           { label: 'prototype' },
//           { label: 'key interfaces' },
//           { label: 'premium visual packaging' },
//           { label: 'materials for discussion or dev handoff' },
//         ],
//         primaryButtonLabel: 'For Partners',
//         primaryPageKey: 'for-partners',
//         secondaryButtonLabel: 'Get Proposal',
//         secondaryPageKey: 'get-proposal',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'detailsSolution',
//     whenRelevantLabel: 'متى يكون هذا مناسباً',
//     whatWeClarifyLabel: 'ما الذي نساعد على توضيحه',
//     whatClientReceivesLabel: 'ما الذي يحصل عليه العميل',
//     items: [
//       {
//         anchorId: 'website',
//         title: 'تصميم المواقع ومواقع الشركات',
//         intro:
//           'حل مناسب للشركات والعلامات التجارية والمنتجات التي تحتاج إلى موقع جديد أو موقع مؤسسي بهيكل قوي وتقديم بصري متميز.',
//         whenRelevant: [
//           { label: 'عند إطلاق موقع جديد' },
//           { label: 'عند الحاجة إلى موقع مؤسسي' },
//           { label: 'عند الحاجة إلى عرض أوضح للخدمة أو المنتج' },
//           { label: 'عندما يجب أن يبدو الموقع أكثر قوة ووضوحاً' },
//         ],
//         whatWeClarify: [
//           { label: 'هيكل الموقع' },
//           { label: 'هرمية المحتوى' },
//           { label: 'مسارات المستخدم' },
//           { label: 'الصفحات الرئيسية' },
//           { label: 'الاتجاه البصري' },
//         ],
//         whatClientReceives: [
//           { label: 'هيكل الموقع' },
//           { label: 'خريطة الصفحات الرئيسية' },
//           { label: 'نموذج أولي أو تصور بصري' },
//           { label: 'اتجاه واجهات المستخدم' },
//           { label: 'مواد جاهزة للمرحلة التالية' },
//         ],
//         primaryButtonLabel: 'اطلب عرضاً',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'redesign',
//         title: 'إعادة تصميم المواقع وتحسين تجربة الاستخدام',
//         intro:
//           'حل للمشاريع التي تمتلك موقعاً بالفعل لكنه لا يقدم المستوى المطلوب من الوضوح أو الثقة أو الفاعلية.',
//         whenRelevant: [
//           { label: 'عند الحاجة إلى إعادة تصميم الموقع' },
//           { label: 'عندما تكون تجربة الاستخدام قديمة أو مربكة' },
//           { label: 'عندما يكون الهيكل ضعيفاً' },
//           { label: 'عند الحاجة إلى تقديم أقوى وأكثر وضوحاً' },
//         ],
//         whatWeClarify: [
//           { label: 'ما الذي يضعف الفهم والثقة' },
//           { label: 'أي الصفحات أو الأقسام تربك المسار' },
//           { label: 'كيف يعاد تنظيم الهيكل' },
//           { label: 'كيف تصبح الواجهة أوضح وأكثر إقناعاً' },
//         ],
//         whatClientReceives: [
//           { label: 'هيكل جديد' },
//           { label: 'منطق صفحات أكثر وضوحاً' },
//           { label: 'مفهوم لإعادة التصميم' },
//           { label: 'واجهات رئيسية محدثة' },
//           { label: 'مواد جاهزة للتنفيذ' },
//         ],
//         primaryButtonLabel: 'اطلب عرضاً',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'b2b',
//         title: 'الأنظمة الرقمية ومنصات B2B',
//         intro:
//           'حل للشركات التي تحتاج إلى تحويل مسار عمل معقد إلى نظام رقمي واضح ومتماسك.',
//         whenRelevant: [
//           { label: 'عند وجود أدوار متعددة' },
//           { label: 'عند وجود عمليات معقدة' },
//           { label: 'عند الحاجة إلى لوحة تحكم أو واجهة إدارية أو منصة B2B' },
//           { label: 'عندما يجب أن يكون النظام عملياً وليس جميلاً فقط' },
//         ],
//         whatWeClarify: [
//           { label: 'الأدوار والصلاحيات' },
//           { label: 'مسارات الاستخدام اليومية' },
//           { label: 'بنية الوحدات' },
//           { label: 'منطق الشاشات' },
//           { label: 'أولويات الواجهة' },
//         ],
//         whatClientReceives: [
//           { label: 'هيكل النظام' },
//           { label: 'خريطة الأدوار' },
//           { label: 'مسارات المستخدم' },
//           { label: 'مصفوفة الشاشات' },
//           { label: 'نموذج أولي للشاشات الأساسية' },
//           { label: 'مواد جاهزة للتطوير' },
//         ],
//         primaryButtonLabel: 'اطلب عرضاً',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'portal',
//         title: 'بوابات العملاء والواجهات الداخلية',
//         intro:
//           'حل للبوابات وصفحات الحسابات والواجهات الداخلية التي تحتاج إلى تنقل أوضح ومنطق استخدام أسهل في العمل اليومي.',
//         whenRelevant: [
//           { label: 'عند وجود بوابة معقدة' },
//           { label: 'عند ضعف أو ازدحام التنقل' },
//           { label: 'عند ضعف هيكل الشاشات الداخلية' },
//           { label: 'عندما تبدو الخدمة مجزأة وغير مترابطة' },
//         ],
//         whatWeClarify: [
//           { label: 'رحلة المستخدم' },
//           { label: 'هيكل الأقسام' },
//           { label: 'نقاط اتخاذ القرار' },
//           { label: 'منطق الواجهة في التعامل مع البيانات والإجراءات' },
//         ],
//         whatClientReceives: [
//           { label: 'خريطة المسارات' },
//           { label: 'هيكل جديد للبوابة' },
//           { label: 'حلول واجهية أساسية' },
//           { label: 'نموذج أولي للتدفقات الرئيسية' },
//           { label: 'أساس لإعادة التصميم أو التنفيذ' },
//         ],
//         primaryButtonLabel: 'اطلب عرضاً',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'mobile',
//         title: 'تصميم تطبيقات الجوال',
//         intro:
//           'حل لتطبيقات الجوال التي تحتاج إلى مسارات استخدام واضحة وملاءمة للمنصة وتقديم بصري قوي.',
//         whenRelevant: [
//           { label: 'عند الحاجة إلى تصميم تطبيق جديد' },
//           { label: 'عند الحاجة إلى إعادة تصميم تطبيق قائم' },
//           { label: 'عند الحاجة إلى MVP أو مفهوم جاهز للعرض على المستثمرين' },
//           { label: 'عند الحاجة إلى رفع جودة UX/UI للتطبيق' },
//         ],
//         whatWeClarify: [
//           { label: 'مسار استخدام التطبيق' },
//           { label: 'هيكل الشاشات' },
//           { label: 'أولويات السيناريوهات' },
//           { label: 'التوجه البصري' },
//           { label: 'معايير المنصة' },
//         ],
//         whatClientReceives: [
//           { label: 'هيكل التطبيق' },
//           { label: 'مسارات المستخدم' },
//           { label: 'الشاشات الأساسية' },
//           { label: 'نموذج أولي' },
//           { label: 'مواد للمرحلة التالية' },
//         ],
//         primaryButtonLabel: 'اطلب عرضاً',
//         primaryPageKey: 'get-proposal',
//       },
//       {
//         anchorId: 'presale',
//         title: 'دعم العروض التمهيدية والنماذج الأولية والعمل بنظام الشراكة',
//         intro:
//           'حل للشركاء وشركات التكامل والفرق التي تحتاج إلى تجهيز concept قوي أو prototype أو عرض واجهات موجه للعميل بسرعة.',
//         whenRelevant: [
//           { label: 'عند الحاجة إلى حزمة presale' },
//           { label: 'عند أهمية الفوز بالعرض' },
//           { label: 'عند الحاجة إلى شريك white-label' },
//           { label: 'عند نقص موارد UX/UI الداخلية' },
//         ],
//         whatWeClarify: [
//           { label: 'كيف يُعرض الحل' },
//           { label: 'ما الشاشات الأكثر أهمية' },
//           { label: 'كيف تُعبأ الفكرة المنتجية بصرياً' },
//           { label: 'كيف تنتقل المواد إلى العميل أو فريق التطوير' },
//         ],
//         whatClientReceives: [
//           { label: 'حزمة concept' },
//           { label: 'نموذج أولي' },
//           { label: 'واجهات أساسية' },
//           { label: 'تغليف بصري احترافي' },
//           { label: 'مواد للنقاش أو للتطوير' },
//         ],
//         primaryButtonLabel: 'للشركاء',
//         primaryPageKey: 'for-partners',
//         secondaryButtonLabel: 'اطلب عرضاً',
//         secondaryPageKey: 'get-proposal',
//       },
//     ],
//   },
// }

// const SOLUTIONS_CLIENT_ARTIFACTS_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'clientArtifactsSolutions',
//     eyebrow: 'Что входит в работу',
//     title: 'Что вы получаете на первом этапе',
//     description:
//       'Каждый проект включает набор структурных и визуальных материалов, которые помогают прояснить решение и перейти к следующему этапу.',
//     items: [
//       {
//         title: 'Структура проекта',
//         subtitle: 'Фиксирует цели, ограничения и приоритеты',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0-izxISwxnsh153iue55fxis0BfXpJZy.png',
//         alt: 'Структура проекта',
//       },
//       {
//         title: 'Пользовательские сценарии',
//         subtitle: 'Показывает критичные сценарии и точки перехода',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5%20%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8-6Cd1Gr0fJ9T1bQvpwusenVE1qH0EeF.png',
//         alt: 'Пользовательские сценарии',
//       },
//       {
//         title: 'Экранная карта продукта',
//         subtitle: 'Собирает логику экранов в единую систему',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0%20-CjniSYt05jhRhvZGAnVzEoa5nOSJcb.png',
//         alt: 'Экранная карта продукта',
//       },
//       {
//         title: 'Интерактивный прототип',
//         subtitle: 'Даёт visual preview будущего продукта',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%20-f73wC5LUW8rwRcU9w00neMYkmRnmYY.png',
//         alt: 'Интерактивный прототип',
//       },
//       {
//         title: 'Базовая система компонентов',
//         subtitle: 'Задаёт основу интерфейсной системы',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2%20-jGYBTni2xDRwj42dKtF24HSFdKvWWU.png',
//         alt: 'Базовая система компонентов',
//       },
//       {
//         title: 'Материалы для передачи в разработку',
//         subtitle: 'Помогает перейти к следующему этапу разработки',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B8%20%D0%B2%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83-9j8bJBhHm3WST7opiGXatymjBgtw86.png',
//         alt: 'Материалы для передачи в разработку',
//       },
//     ],
//     bottomNote:
//       'Все материалы передаются в Figma и готовы для обсуждения или передачи в разработку',
//   },
//   en: {
//     blockType: 'clientArtifactsSolutions',
//     eyebrow: 'Deliverables',
//     title: 'What clients receive',
//     description:
//       'Every project includes a set of structural and visual materials that help clarify the solution and move to the next stage.',
//     items: [
//       {
//         title: 'Project Structure',
//         subtitle: 'Captures goals, constraints, and priorities',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0-izxISwxnsh153iue55fxis0BfXpJZy.png',
//         alt: 'Project Structure',
//       },
//       {
//         title: 'User Flows',
//         subtitle: 'Maps critical scenarios and transition points',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5%20%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8-6Cd1Gr0fJ9T1bQvpwusenVE1qH0EeF.png',
//         alt: 'User Flows',
//       },
//       {
//         title: 'Screen Matrix',
//         subtitle: 'Organizes screen logic into a unified system',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0%20-CjniSYt05jhRhvZGAnVzEoa5nOSJcb.png',
//         alt: 'Screen Matrix',
//       },
//       {
//         title: 'Clickable Prototype',
//         subtitle: 'Provides a visual preview of the future product',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%20-f73wC5LUW8rwRcU9w00neMYkmRnmYY.png',
//         alt: 'Clickable Prototype',
//       },
//       {
//         title: 'Visual Direction',
//         subtitle: 'Establishes the foundation of the interface system',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2%20-jGYBTni2xDRwj42dKtF24HSFdKvWWU.png',
//         alt: 'Visual Direction',
//       },
//       {
//         title: 'Materials for Development',
//         subtitle: 'Enables smooth transition to the development stage',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B8%20%D0%B2%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83-9j8bJBhHm3WST7opiGXatymjBgtw86.png',
//         alt: 'Materials for Development',
//       },
//     ],
//     bottomNote:
//       'All materials are delivered in Figma and ready for discussion or development handoff',
//   },
//   ar: {
//     blockType: 'clientArtifactsSolutions',
//     eyebrow: 'المخرجات',
//     title: 'ما الذي يحصل عليه العميل في النتيجة',
//     description:
//       'يتضمن كل مشروع مجموعة من المواد الهيكلية والبصرية التي تساعد على توضيح الحل والانتقال إلى المرحلة التالية.',
//     items: [
//       {
//         title: 'هيكل المشروع',
//         subtitle: 'يوضح الأهداف والقيود والأولويات',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0-izxISwxnsh153iue55fxis0BfXpJZy.png',
//         alt: 'هيكل المشروع',
//       },
//       {
//         title: 'مسارات المستخدم',
//         subtitle: 'يبرز المسارات الرئيسية ونقاط الانتقال',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5%20%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8-6Cd1Gr0fJ9T1bQvpwusenVE1qH0EeF.png',
//         alt: 'مسارات المستخدم',
//       },
//       {
//         title: 'مصفوفة الشاشات',
//         subtitle: 'ينظم منطق الشاشات في نظام واحد',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0%20-CjniSYt05jhRhvZGAnVzEoa5nOSJcb.png',
//         alt: 'مصفوفة الشاشات',
//       },
//       {
//         title: 'نموذج أولي قابل للنقر',
//         subtitle: 'يجعل المنتج ملموساً قبل التطوير',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%20-f73wC5LUW8rwRcU9w00neMYkmRnmYY.png',
//         alt: 'نموذج أولي قابل للنقر',
//       },
//       {
//         title: 'الاتجاه البصري',
//         subtitle: 'يحدد الطابع البصري للواجهة',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B1%D0%B0%D0%B2%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2%20-jGYBTni2xDRwj42dKtF24HSFdKvWWU.png',
//         alt: 'الاتجاه البصري',
//       },
//       {
//         title: 'مواد التسليم للتطوير',
//         subtitle: 'يدعم الانتقال السلس إلى التطوير',
//         imageUrl:
//           'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B8%20%D0%B2%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83-9j8bJBhHm3WST7opiGXatymjBgtw86.png',
//         alt: 'مواد التسليم للتطوير',
//       },
//     ],
//     bottomNote:
//       'جميع المواد تُسلّم في Figma وتكون جاهزة للمناقشة أو التسليم للتطوير',
//   },
// }

// const SOLUTIONS_AUDIENCE_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'audienceSolutions',
//     eyebrow: 'Целевая аудитория',
//     title: 'Кому подходит этот подход',
//     challengeLabel: 'Типичная задача',
//     resultLabel: 'Что становится проще',
//     items: [
//       {
//         title: 'Founders и startup-команды',
//         challenge:
//           'Идея есть, но продукт ещё не собран в понятную систему. Нужно показать инвестору, согласовать с командой, дать разработке понятную основу.',
//         result:
//           'Структурированный продукт, prototype и материалы для следующего этапа — без долгих discovery-процессов.',
//         ctaLabel: 'Для стартапов',
//         ctaPageKey: 'for-startups',
//       },
//       {
//         title: 'B2B-команды и внутренние digital-направления',
//         challenge:
//           'Сложный бизнес-процесс нужно превратить в digital-систему. Много ролей, сценариев, модулей — и нет ясной структуры.',
//         result:
//           'Архитектура продукта, карта ролей, экранная матрица и prototype — готово к передаче в разработку.',
//         ctaLabel: 'Получить предложение',
//         ctaPageKey: 'get-proposal',
//       },
//       {
//         title: 'Агентства и integrators',
//         challenge:
//           'Нужен внешний premium-партнёр для presale, сложных B2B-интерфейсов или white-label поддержки — без лишнего overhead.',
//         result:
//           'Structured deliverables, async-коллаборация, понятная передача в разработку — под вашим брендом или совместно.',
//         ctaLabel: 'Для партнёров',
//         ctaPageKey: 'for-partners',
//       },
//       {
//         title: 'Команды, которым нужна понятная передача в разработку',
//         challenge:
//           'Есть дизайн или prototype, но его сложно передать в разработку. Не хватает структуры, логики, понятных материалов.',
//         result:
//           'Структурированная interface delivery с экранной логикой, компонентами и материалами для dev-команды.',
//         ctaLabel: 'Получить предложение',
//         ctaPageKey: 'get-proposal',
//       },
//     ],
//   },
//   en: {
//     blockType: 'audienceSolutions',
//     eyebrow: 'Target Audience',
//     title: 'Who this is for',
//     challengeLabel: 'Typical challenge',
//     resultLabel: 'What becomes easier',
//     items: [
//       {
//         title: 'Founders and startup teams',
//         challenge:
//           'The idea exists, but the product is not yet assembled into a clear system. Need to present to investors, align with the team, give development a solid foundation.',
//         result:
//           'Structured product, prototype, and materials for the next stage — without lengthy discovery processes.',
//         ctaLabel: 'For Startups',
//         ctaPageKey: 'for-startups',
//       },
//       {
//         title: 'B2B teams and internal digital functions',
//         challenge:
//           'A complex business process needs to become a digital system. Many roles, scenarios, modules — and no clear structure.',
//         result:
//           'Product architecture, role map, screen matrix, and prototype — ready for development handoff.',
//         ctaLabel: 'Get Proposal',
//         ctaPageKey: 'get-proposal',
//       },
//       {
//         title: 'Agencies and integrators',
//         challenge:
//           'Need an external premium partner for presale, complex B2B interfaces, or white-label support — without unnecessary overhead.',
//         result:
//           'Structured deliverables, async collaboration, clear development handoff — under your brand or jointly.',
//         ctaLabel: 'For Partners',
//         ctaPageKey: 'for-partners',
//       },
//       {
//         title: 'Teams that need a clearer path into development',
//         challenge:
//           'Have design or prototype, but it is hard to hand off to development. Lacking structure, logic, clear materials.',
//         result:
//           'Structured interface delivery with screen logic, components, and materials for the dev team.',
//         ctaLabel: 'Get Proposal',
//         ctaPageKey: 'get-proposal',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'audienceSolutions',
//     eyebrow: 'الجمهور المستهدف',
//     title: 'لمن تناسب هذه الحلول',
//     challengeLabel: 'التحدي النموذجي',
//     resultLabel: 'ما يصبح أسهل',
//     items: [
//       {
//         title: 'المؤسسون وفرق الشركات الناشئة',
//         challenge:
//           'الفكرة موجودة، لكن المنتج لم يُجمع بعد في نظام واضح. يحتاجون إلى عرضه على المستثمرين، أو التوافق مع الفريق، أو إعطاء التطوير أساساً قوياً.',
//         result:
//           'منتج مهيكل، ونموذج أولي، ومواد للمرحلة التالية — من دون عمليات اكتشاف طويلة.',
//         ctaLabel: 'للشركات الناشئة',
//         ctaPageKey: 'for-startups',
//       },
//       {
//         title: 'فرق B2B والوظائف الرقمية الداخلية',
//         challenge:
//           'عملية تجارية معقدة تحتاج إلى أن تصبح نظاماً رقمياً. أدوار متعددة، وسيناريوهات، ووحدات — وبدون هيكل واضح.',
//         result:
//           'هندسة المنتج، وخريطة الأدوار، ومصفوفة الشاشات، ونموذج أولي — جاهزة للتسليم إلى التطوير.',
//         ctaLabel: 'اطلب عرضاً',
//         ctaPageKey: 'get-proposal',
//       },
//       {
//         title: 'الوكالات وشركاء التنفيذ',
//         challenge:
//           'يحتاجون إلى شريك خارجي متميز لعروض ما قبل البيع، أو واجهات B2B المعقدة، أو دعم white-label — من دون أعباء تشغيلية زائدة.',
//         result:
//           'مخرجات مهيكلة، وتعاون غير متزامن، وتسليم واضح للتطوير — تحت علامتك التجارية أو بالشراكة.',
//         ctaLabel: 'للشركاء',
//         ctaPageKey: 'for-partners',
//       },
//       {
//         title: 'الفرق التي تحتاج إلى وضوح أكبر قبل التطوير',
//         challenge:
//           'لديهم تصميم أو نموذج أولي، لكن يصعب تسليمه للتطوير. ينقصهم الهيكل والمنطق والمواد الواضحة.',
//         result:
//           'تسليم واجهات مهيكل مع منطق الشاشات والمكونات ومواد لفريق التطوير.',
//         ctaLabel: 'اطلب عرضاً',
//         ctaPageKey: 'get-proposal',
//       },
//     ],
//   },
// }

// const SOLUTIONS_WHY_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'whySolutions',
//     eyebrow: 'Почему мы',
//     title: 'Почему выбирают Atelier Meridian',
//     items: [
//       {
//         title: 'Ясность до начала разработки',
//         description:
//           'Помогаем структурировать продукт так, чтобы его было легко согласовать, показать и передать в разработку.',
//       },
//       {
//         title: 'Экспертный подход senior-уровня',
//         description:
//           'Работаем напрямую с командой, без junior-прослойки. Каждый проект ведёт senior product designer.',
//       },
//       {
//         title: 'Структурированные спринты',
//         description:
//           'Понятный формат работы: фиксированный scope, ясные сроки, предсказуемый результат.',
//       },
//       {
//         title: 'Премиальная подача без лишнего overhead',
//         description:
//           'Качество бутиковой студии без лишних процессов, встреч и накладных расходов.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'whySolutions',
//     eyebrow: 'Why Us',
//     title: 'Why clients choose Atelier Meridian',
//     items: [
//       {
//         title: 'Clarity before development',
//         description:
//           'We help structure the product so it is easy to align, present, and hand off to development.',
//       },
//       {
//         title: 'Senior-level product thinking',
//         description:
//           'Work directly with the team, no junior layer. Every project is led by a senior product designer.',
//       },
//       {
//         title: 'Structured sprints',
//         description:
//           'Clear working format: fixed scope, clear timelines, predictable outcome.',
//       },
//       {
//         title: 'Premium output without unnecessary overhead',
//         description:
//           'Boutique studio quality without excessive processes, meetings, and overhead.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'whySolutions',
//     eyebrow: 'لماذا نحن',
//     title: 'لماذا يختار العملاء Atelier Meridian',
//     items: [
//       {
//         title: 'وضوح قبل بدء التطوير',
//         description:
//           'نساعد على هيكلة المنتج بحيث يسهل التوافق عليه وعرضه وتسليمه للتطوير.',
//       },
//       {
//         title: 'تفكير منتجي على مستوى senior',
//         description:
//           'تعمل مباشرة مع الفريق، من دون طبقة مبتدئين. كل مشروع يُقاد بواسطة مصمم منتج senior.',
//       },
//       {
//         title: 'عمل منظم على شكل sprints',
//         description:
//           'صيغة عمل واضحة: نطاق محدد، جدول زمني واضح، نتيجة متوقعة.',
//       },
//       {
//         title: 'مخرجات متميزة من دون طبقات تشغيلية زائدة',
//         description:
//           'جودة استوديو بوتيكي من دون عمليات مفرطة أو اجتماعات أو أعباء تشغيلية.',
//       },
//     ],
//   },
// }

// const SOLUTIONS_CONNECTED_CTA_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'connectedCtaSolutions',
//     title: 'Не уверены, какое решение подходит именно вам?',
//     description:
//       'Опишите задачу — мы предложим подходящий формат работы, ориентир по срокам и следующий шаг.',
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Посмотреть цены',
//     secondaryPageKey: 'pricing',
//   },
//   en: {
//     blockType: 'connectedCtaSolutions',
//     title: 'Not sure which solution fits your project?',
//     description:
//       'Tell us what you are building, and we will recommend the right format, timeline range, and next step.',
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'View Pricing',
//     secondaryPageKey: 'pricing',
//   },
//   ar: {
//     blockType: 'connectedCtaSolutions',
//     title: 'لست متأكداً أي حل يناسب مشروعك؟',
//     description:
//       'شاركنا بما تعمل عليه، وسنقترح عليك الصيغة الأنسب للعمل، والنطاق الزمني المتوقع، والخطوة التالية.',
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الأسعار',
//     secondaryPageKey: 'pricing',
//   },
// }

// const SOLUTIONS_FAQ_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'faqSolutions',
//     eyebrow: 'Вопросы',
//     title: 'Частые вопросы',
//     description: 'Ответы на основные вопросы о нашем подходе и форматах работы.',
//     items: [
//       {
//         question: 'С чего лучше начать: с brief или с материалов?',
//         answer:
//           'Если у вас есть готовые материалы (PRD, презентация, наброски) — можете приложить их сразу. Если проект ещё не оформлен — заполните короткий brief, и мы поможем структурировать задачу на основе ваших ответов.',
//       },
//       {
//         question: 'Подходит ли это для сайта, digital-системы и mobile app?',
//         answer:
//           'Да, это основные типы задач, с которыми мы работаем. Сайты, корпоративные порталы, B2B-платформы, dashboards и мобильные приложения — всё это входит в наш фокус.',
//       },
//       {
//         question: 'Можно ли прийти только с идеей?',
//         answer:
//           'Да. Большинство наших клиентов приходят именно на этой стадии — когда есть идея или бизнес-задача, но нет понятной структуры. Мы помогаем прояснить scope, роли и сценарии ещё до того, как начнётся визуальная работа.',
//       },
//       {
//         question: 'Подходит ли это для redesign?',
//         answer:
//           'Да. Редизайн — одна из частых задач. Мы помогаем пересобрать структуру, улучшить UX и обновить визуальную подачу существующего сайта, системы или приложения.',
//       },
//       {
//         question: 'Работаете ли вы white-label?',
//         answer:
//           'Да. Мы работаем с агентствами и integrators как внешний product/UX/UI-партнёр. Можем выступать под вашим брендом или совместно — без лишнего overhead и с понятным форматом delivery.',
//       },
//       {
//         question: 'Вы помогаете только с визуалом или со структурой тоже?',
//         answer:
//           'Мы начинаем со структуры. Прежде чем рисовать экраны, мы помогаем прояснить роли, сценарии, приоритеты и логику продукта. Интерфейс строится на этой основе — и поэтому работает.',
//       },
//       {
//         question: 'Подписываете ли вы NDA?',
//         answer:
//           'Да. Мы готовы подписать NDA до начала работы. Конфиденциальность — стандартная часть нашего процесса.',
//       },
//       {
//         question: 'Как понять, какое решение подходит моему проекту?',
//         answer:
//           'Опишите задачу в brief — мы предложим подходящий формат, ориентир по срокам и стоимости. Если не уверены — просто напишите, что есть, и мы поможем определиться.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'faqSolutions',
//     eyebrow: 'FAQ',
//     title: 'Frequently asked questions',
//     description: 'Answers to common questions about our approach and work formats.',
//     items: [
//       {
//         question: 'Where should I start: with a brief or with existing materials?',
//         answer:
//           'If you have ready materials (PRD, presentation, sketches) — feel free to attach them right away. If the project is not yet formalized — fill out a short brief, and we will help structure the task based on your answers.',
//       },
//       {
//         question: 'Is this relevant for websites, digital systems, and mobile apps?',
//         answer:
//           'Yes, these are the main types of projects we work with. Websites, corporate portals, B2B platforms, dashboards, and mobile apps — all fall within our focus.',
//       },
//       {
//         question: 'Can you help if the project is still just an idea?',
//         answer:
//           'Yes. Most of our clients come at exactly this stage — when there is an idea or business task, but no clear structure. We help clarify scope, roles, and scenarios before visual work begins.',
//       },
//       {
//         question: 'Is this suitable for redesign projects?',
//         answer:
//           'Yes. Redesign is one of the most common tasks. We help restructure, improve UX, and update the visual presentation of an existing website, system, or app.',
//       },
//       {
//         question: 'Do you work white-label?',
//         answer:
//           'Yes. We work with agencies and integrators as an external product/UX/UI partner. We can operate under your brand or jointly — without unnecessary overhead and with a clear delivery format.',
//       },
//       {
//         question: 'Do you help with structure as well as interface design?',
//         answer:
//           'We start with structure. Before drawing screens, we help clarify roles, scenarios, priorities, and product logic. The interface is built on this foundation — which is why it works.',
//       },
//       {
//         question: 'Do you sign NDAs?',
//         answer:
//           'Yes. We are ready to sign an NDA before work begins. Confidentiality is a standard part of our process.',
//       },
//       {
//         question: 'How do I know which format is right for my project?',
//         answer:
//           'Describe your task in the brief — we will suggest the right format, timeline, and cost estimate. If you are unsure — just write what you have, and we will help you decide.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'faqSolutions',
//     eyebrow: 'الأسئلة الشائعة',
//     title: 'أسئلة متكررة',
//     description: 'إجابات على الأسئلة الشائعة حول منهجيتنا وصيغ العمل.',
//     items: [
//       {
//         question: 'من أين أبدأ: من brief أم من المواد الحالية؟',
//         answer:
//           'إذا كانت لديك مواد جاهزة (PRD، عرض تقديمي، رسومات أولية) — يمكنك إرفاقها مباشرة. إذا لم يكن المشروع مُصاغاً بعد — املأ brief قصير، وسنساعد في هيكلة المهمة بناءً على إجاباتك.',
//       },
//       {
//         question: 'هل هذه الصفحة مناسبة للمواقع والأنظمة الرقمية وتطبيقات الجوال؟',
//         answer:
//           'نعم، هذه هي الأنواع الرئيسية للمشاريع التي نعمل عليها. المواقع، والبوابات المؤسسية، ومنصات B2B، ولوحات التحكم، وتطبيقات الجوال — جميعها ضمن نطاق تركيزنا.',
//       },
//       {
//         question: 'هل يمكن البدء إذا كانت الفكرة ما زالت غير مكتملة؟',
//         answer:
//           'نعم. معظم عملائنا يأتون في هذه المرحلة بالضبط — عندما تكون هناك فكرة أو مهمة تجارية، لكن بدون هيكل واضح. نساعد في توضيح النطاق والأدوار والسيناريوهات قبل بدء العمل البصري.',
//       },
//       {
//         question: 'هل هذا مناسب لمشاريع إعادة التصميم؟',
//         answer:
//           'نعم. إعادة التصميم هي من أكثر المهام شيوعاً. نساعد في إعادة الهيكلة، وتحسين UX، وتحديث العرض البصري لموقع أو نظام أو تطبيق قائم.',
//       },
//       {
//         question: 'هل تعملون بنظام white-label؟',
//         answer:
//           'نعم. نعمل مع الوكالات وشركاء التنفيذ كشريك خارجي للمنتج/UX/UI. يمكننا العمل تحت علامتك التجارية أو بالشراكة — من دون أعباء تشغيلية زائدة وبصيغة تسليم واضحة.',
//       },
//       {
//         question: 'هل تساعدون في الهيكل والمنطق إلى جانب التصميم؟',
//         answer:
//           'نبدأ من الهيكل. قبل رسم الشاشات، نساعد في توضيح الأدوار والسيناريوهات والأولويات ومنطق المنتج. الواجهة تُبنى على هذا الأساس — ولهذا تعمل بشكل صحيح.',
//       },
//       {
//         question: 'هل توقعون NDA؟',
//         answer:
//           'نعم. نحن مستعدون لتوقيع NDA قبل بدء العمل. السرية جزء أساسي من طريقة عملنا.',
//       },
//       {
//         question: 'كيف أعرف الصيغة الأنسب لمشروعي؟',
//         answer:
//           'صف مهمتك في brief — وسنقترح الصيغة المناسبة والجدول الزمني وتقدير التكلفة. إذا لم تكن متأكداً — اكتب ما لديك فقط، وسنساعدك في اتخاذ القرار.',
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

// async function getSolutionsPage(payload: Awaited<ReturnType<typeof getPayload>>) {
//   const result = await payload.find({
//     collection: 'pages',
//     where: {
//       pageKey: {
//         equals: 'solutions',
//       },
//     },
//     limit: 1,
//     locale: 'ru',
//     fallbackLocale: 'none',
//     depth: 0,
//   })

//   return result.docs[0] ?? null
// }

// async function ensureSolutionsPage(payload: Awaited<ReturnType<typeof getPayload>>) {
//   const existing = await getSolutionsPage(payload)

//   if (existing) {
//     return existing
//   }

//   return payload.create({
//     collection: 'pages',
//     locale: 'ru',
//     depth: 0,
//     data: {
//       pageKey: 'solutions',
//       internalName: 'solutions',
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

//   const homePage = await ensureSolutionsPage(payload)

//     await seedBlockForLocale(payload, homePage.id, 'ru', SOLUTIONS_HERO_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', SOLUTIONS_HERO_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', SOLUTIONS_HERO_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', SOLUTIONS_POSITIONING_INTRO_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', SOLUTIONS_POSITIONING_INTRO_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', SOLUTIONS_POSITIONING_INTRO_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', SOLUTIONS_GRID_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', SOLUTIONS_GRID_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', SOLUTIONS_GRID_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', SOLUTIONS_DETAILS_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', SOLUTIONS_DETAILS_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', SOLUTIONS_DETAILS_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', SOLUTIONS_CLIENT_ARTIFACTS_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', SOLUTIONS_CLIENT_ARTIFACTS_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', SOLUTIONS_CLIENT_ARTIFACTS_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', SOLUTIONS_AUDIENCE_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', SOLUTIONS_AUDIENCE_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', SOLUTIONS_AUDIENCE_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', SOLUTIONS_WHY_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', SOLUTIONS_WHY_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', SOLUTIONS_WHY_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', SOLUTIONS_CONNECTED_CTA_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', SOLUTIONS_CONNECTED_CTA_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', SOLUTIONS_CONNECTED_CTA_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', SOLUTIONS_FAQ_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', SOLUTIONS_FAQ_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', SOLUTIONS_FAQ_SEED.ar)

//   console.log('✅ Solutions page seed completed')
//   process.exit(0)
// }

// main().catch((error) => {
//   console.error('❌ Solutions page seed failed')
//   console.error(error)
//   process.exit(1)
// })