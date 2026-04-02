// import 'dotenv/config'

// import config from '@payload-config'
// import { getPayload } from 'payload'

// type Locale = 'ru' | 'en' | 'ar'
// type BlockData = Record<string, any>

// const STARTUPS_PAGE_KEY = 'for-startups'

// const ARTIFACTS_STARTUPS_SEED: Record<Locale, BlockData> = {
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

// const PROCESS_STARTUPS_SEED: Record<Locale, BlockData> = {
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
//         description:
//           'Готовим рекомендации и материалы для передачи в разработку или следующего pitch.',
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
//         description:
//           'We start by understanding the idea, the context, and the current level of clarity.',
//       },
//       {
//         number: '02',
//         title: 'Product Structure',
//         description:
//           'We define the key roles, flows, priorities, and what the product actually needs at this stage.',
//       },
//       {
//         number: '03',
//         title: 'Priorities',
//         description: 'We separate core MVP logic from everything that can wait.',
//       },
//       {
//         number: '04',
//         title: 'Interface & Prototype',
//         description:
//           'We shape the screens, interaction logic, and clickable prototype.',
//       },
//       {
//         number: '05',
//         title: 'Next Step',
//         description:
//           'You receive materials that help you present, align, or move into development.',
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
//         description:
//           'نحدد الأدوار الأساسية والمسارات والأولويات وما الذي يحتاجه المنتج فعلاً في هذه المرحلة.',
//       },
//       {
//         number: '٠٣',
//         title: 'تحديد الأولويات',
//         description:
//           'نفصل بين ما يجب أن يكون ضمن MVP الآن وما يمكن تأجيله لاحقاً.',
//       },
//       {
//         number: '٠٤',
//         title: 'الواجهة والنموذج الأولي',
//         description:
//           'نبني الشاشات الأساسية ومنطق الاستخدام والـ prototype القابل للنقر.',
//       },
//       {
//         number: '٠٥',
//         title: 'الخطوة التالية',
//         description:
//           'تحصلون على مواد تساعدكم في العرض أو التوافق الداخلي أو الانتقال إلى التطوير.',
//       },
//     ],
//   },
// }

// const CTA_STARTUPS_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'ctaStartups',
//     title: 'Не уверены, с чего начать: с сайта, MVP или prototype?',
//     description:
//       'Опишите задачу — мы предложим подходящий формат работы, ориентир по срокам и следующий шаг.',
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Посмотреть цены',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'Подходит для startup-сайтов, web products, mobile apps и investor-ready materials.',
//   },
//   en: {
//     blockType: 'ctaStartups',
//     title: 'Not sure where to start — website, MVP, or prototype?',
//     description:
//       'Tell us what you are building, and we will recommend the right format, a timeline range, and the most practical next step.',
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'View Pricing',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'Suitable for startup websites, mobile apps, SaaS interfaces, MVP structure, and investor-ready presentation materials.',
//   },
//   ar: {
//     blockType: 'ctaStartups',
//     title: 'لست متأكداً من أين تبدأ — من الموقع أم الـ MVP أم النموذج الأولي؟',
//     description:
//       'شاركنا بما تعمل عليه، وسنقترح عليك الصيغة الأنسب للعمل، والنطاق الزمني المتوقع، والخطوة التالية الأكثر عملية.',
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الأسعار',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'مناسب لمواقع الشركات الناشئة، وتطبيقات الجوال، وواجهات SaaS، وهيكلة MVP، ومواد العرض للمستثمرين.',
//   },
// }

// const FAQ_STARTUPS_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'faqStartups',
//     eyebrow: 'FAQ',
//     title: 'Частые вопросы',
//     items: [
//       {
//         question: 'Можно ли прийти только с идеей?',
//         answer:
//           'Да. Мы часто работаем с проектами на стадии идеи или rough concept. Помогаем превратить её в понятную структуру продукта, сценарии и первые интерфейсы.',
//       },
//       {
//         question: 'Подходит ли это для MVP?',
//         answer:
//           'Да, это один из самых частых запросов. Помогаем сфокусировать MVP, определить приоритеты, убрать лишнее и собрать минимальный, но сильный набор интерфейсов.',
//       },
//       {
//         question: 'Можно ли сделать сначала сайт, а потом продукт?',
//         answer:
//           'Да. Многие стартапы начинают с сайта для валидации или fundraising, а позже возвращаются за продуктом. Мы готовы к обоим сценариям.',
//       },
//       {
//         question: 'Работаете ли вы с mobile apps?',
//         answer:
//           'Да. Помогаем с дизайном мобильных приложений для iOS и Android — от структуры и user flows до готового UI и материалов для разработки.',
//       },
//       {
//         question: 'Подходит ли это для investor presentation?',
//         answer:
//           'Да. Собираем investor-ready prototype и визуальные материалы, которые помогают показать продукт убедительно и понятно.',
//       },
//       {
//         question: 'Что делать, если у нас уже есть ранний дизайн?',
//         answer:
//           'Работаем с redesign существующих продуктов. Анализируем текущее состояние, определяем точки улучшения и предлагаем решение.',
//       },
//       {
//         question: 'Вы помогаете только с визуалом или со структурой тоже?',
//         answer:
//           'Мы работаем со структурой продукта: сценарии, логика экранов, приоритеты, user flows. Визуальный дизайн — важная, но не единственная часть работы.',
//       },
//       {
//         question: 'Как понять, какой формат работы нам нужен?',
//         answer:
//           'Опишите задачу через форму на сайте — мы предложим подходящий формат, ориентир по срокам и следующий шаг. Это бесплатно и ни к чему не обязывает.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'faqStartups',
//     eyebrow: 'FAQ',
//     title: 'Common Questions',
//     items: [
//       {
//         question: 'Can we come to you with just an idea?',
//         answer:
//           'Yes. We often work with projects at the idea or rough concept stage. We help turn it into a clear product structure, scenarios, and initial interfaces.',
//       },
//       {
//         question: 'Is this relevant for MVP?',
//         answer:
//           'Yes, this is one of the most common requests. We help focus the MVP, define priorities, cut the excess, and build a minimal but strong set of interfaces.',
//       },
//       {
//         question: 'Can you help with both structure and interface design?',
//         answer:
//           'Yes. We work on product structure: scenarios, screen logic, priorities, user flows. Visual design is an important but not the only part of our work.',
//       },
//       {
//         question: 'Can this be used for investor presentations?',
//         answer:
//           'Yes. We build investor-ready prototypes and visual materials that help present the product clearly and convincingly.',
//       },
//       {
//         question: 'Do you work on mobile apps too?',
//         answer:
//           'Yes. We help design mobile applications for iOS and Android — from structure and user flows to final UI and materials for development.',
//       },
//       {
//         question: 'Can you redesign an early version of the product?',
//         answer:
//           'Yes. We work on redesigns of existing products. We analyze the current state, identify improvement points, and propose a solution.',
//       },
//       {
//         question: 'What if we already have some materials?',
//         answer:
//           'We can work with what you have. If you already have research, wireframes, or early designs, we incorporate them into the process and build from there.',
//       },
//       {
//         question: 'How do we know which format fits our stage?',
//         answer:
//           'Describe your task through the form on the site — we will recommend the right format, a timeline estimate, and the next step. It is free and non-binding.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'faqStartups',
//     eyebrow: 'الأسئلة الشائعة',
//     title: 'أسئلة شائعة',
//     items: [
//       {
//         question: 'هل يمكن أن نأتي بفكرة فقط؟',
//         answer:
//           'نعم. كثيراً ما نعمل على مشاريع في مرحلة الفكرة أو المفهوم الأولي. نساعد في تحويلها إلى هيكل منتج واضح وسيناريوهات وواجهات أولية.',
//       },
//       {
//         question: 'هل هذا مناسب لـ MVP؟',
//         answer:
//           'نعم، هذا من أكثر الطلبات شيوعاً. نساعد في تركيز الـ MVP وتحديد الأولويات وإزالة الزائد وبناء مجموعة واجهات قوية لكن مصغرة.',
//       },
//       {
//         question: 'هل تساعدون في الهيكل والمنطق إلى جانب التصميم؟',
//         answer:
//           'نعم. نعمل على هيكل المنتج: السيناريوهات ومنطق الشاشات والأولويات ومسارات المستخدم. التصميم البصري جزء مهم لكنه ليس الجزء الوحيد من عملنا.',
//       },
//       {
//         question: 'هل يمكن استخدام ذلك في العروض على المستثمرين؟',
//         answer:
//           'نعم. نبني نماذج أولية ومواد بصرية جاهزة للمستثمرين تساعد على عرض المنتج بوضوح وإقناع.',
//       },
//       {
//         question: 'هل تعملون على تطبيقات الجوال أيضاً؟',
//         answer:
//           'نعم. نساعد في تصميم تطبيقات الجوال لـ iOS و Android — من الهيكلة ومسارات المستخدم إلى واجهة المستخدم النهائية ومواد التسليم للتطوير.',
//       },
//       {
//         question: 'هل يمكنكم إعادة تصميم نسخة مبكرة من المنتج؟',
//         answer:
//           'نعم. نعمل على إعادة تصميم المنتجات الموجودة. نحلل الوضع الحالي ونحدد نقاط التحسين ونقترح حلاً.',
//       },
//       {
//         question: 'ماذا لو كانت لدينا بعض المواد بالفعل؟',
//         answer:
//           'يمكننا العمل مع ما لديكم. إذا كان لديكم أبحاث أو wireframes أو تصاميم أولية، ندمجها في العملية ونبني عليها.',
//       },
//       {
//         question: 'كيف نعرف الصيغة الأنسب لمرحلتنا؟',
//         answer:
//           'صِفوا مهمتكم من خلال النموذج على الموقع — سنقترح الصيغة المناسبة وتقديراً للجدول الزمني والخطوة التالية. هذا مجاني وغير ملزم.',
//       },
//     ],
//   },
// }

// function upsertBlock(layout: BlockData[], block: BlockData): BlockData[] {
//   const existingIndex = layout.findIndex((item) => item?.blockType === block?.blockType)

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

// async function getStartupsPageId(
//   payload: Awaited<ReturnType<typeof getPayload>>,
// ): Promise<string | number> {
//   const result = await payload.find({
//     collection: 'pages',
//     where: {
//       pageKey: {
//         equals: STARTUPS_PAGE_KEY,
//       },
//     },
//     limit: 1,
//     depth: 0,
//   })

//   const page = result.docs[0]

//   if (!page) {
//     throw new Error(`Page "${STARTUPS_PAGE_KEY}" not found`)
//   }

//   return page.id
// }

// async function getPageLayoutForLocale(
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

// async function seedStartupsBlocks(
//   payload: Awaited<ReturnType<typeof getPayload>>,
//   pageId: string | number,
// ) {
//   const ruLayout = await getPageLayoutForLocale(payload, pageId, 'ru')

//   await payload.update({
//     collection: 'pages',
//     id: pageId,
//     locale: 'ru',
//     depth: 0,
//     data: {
//       layout: upsertBlock(
//         upsertBlock(ruLayout, CTA_STARTUPS_SEED.ru),
//         FAQ_STARTUPS_SEED.ru,
//       ),
//     },
//   })

//   const enLayout = await getPageLayoutForLocale(payload, pageId, 'en')

//   await payload.update({
//     collection: 'pages',
//     id: pageId,
//     locale: 'en',
//     depth: 0,
//     data: {
//       layout: upsertBlock(
//         upsertBlock(enLayout, CTA_STARTUPS_SEED.en),
//         FAQ_STARTUPS_SEED.en,
//       ),
//     },
//   })

//   const arLayout = await getPageLayoutForLocale(payload, pageId, 'ar')

//   await payload.update({
//     collection: 'pages',
//     id: pageId,
//     locale: 'ar',
//     depth: 0,
//     data: {
//       layout: upsertBlock(
//         upsertBlock(arLayout, CTA_STARTUPS_SEED.ar),
//         FAQ_STARTUPS_SEED.ar,
//       ),
//     },
//   })
// }
// async function run() {
//   const payload = await getPayload({ config })

//  const startupsPageId = await getStartupsPageId(payload)
// await seedStartupsBlocks(payload, startupsPageId)

//   console.log('ArtifactsStartups and ProcessStartups seeded successfully')
// }

// run()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error)
//     process.exit(1)
//   })

// Сейчас переходим на страницу и нам нужно исправить CtaConcepts и WhyConcepts. Они не совпадают с версткой, стилями и локализацией как на сайте.