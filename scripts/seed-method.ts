// import 'dotenv/config'

// import { getPayload } from 'payload'
// import config from '../payload.config'

// type Locale = 'ru' | 'en' | 'ar'

// type BlockData = Record<string, unknown> & {
//   blockType: string
//   id?: string
// }

// const HERO_METHOD_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'heroMethod',
//     eyebrow: 'Как мы работаем',
//     title: 'Процесс работы над сайтом, системой или приложением',
//     description:
//       'Работаем с сайтами, digital-системами, порталами, dashboards и мобильными приложениями. Сначала структурируем продукт — потом проектируем интерфейс и готовим материалы для разработки.',
//     descriptionSecondary:
//       'Подходит для нового проекта, redesign существующего продукта, MVP-концепции или investor-ready prototype.',
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Посмотреть цены',
//     secondaryPageKey: 'pricing',
//   },
//   en: {
//     blockType: 'heroMethod',
//     eyebrow: 'How We Work',
//     title: 'How we turn a task into structure, interface, and a clear next step',
//     description:
//       'Atelier Meridian works through a focused sequence: understanding the task, clarifying structure, shaping user flows, designing key interfaces, and preparing materials that make the next stage easier.',
//     descriptionSecondary:
//       'Suitable for websites, digital systems, portals, dashboards, and mobile apps.',
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'View Pricing',
//     secondaryPageKey: 'pricing',
//   },
//   ar: {
//     blockType: 'heroMethod',
//     eyebrow: 'كيف نعمل',
//     title: 'كيف نحوّل المهمة إلى هيكل واضح وواجهة متميزة وخطوة تالية عملية',
//     description:
//       'يعمل Atelier Meridian من خلال تسلسل مركز وواضح: فهم المهمة، وتوضيح هيكل المنتج، وبناء مسارات الاستخدام، وتنظيم منطق الشاشات، ثم إعداد نموذج أولي ومخرجات تجعل المرحلة التالية أسهل وأكثر وضوحاً.',
//     descriptionSecondary:
//       'مناسب للمواقع، والأنظمة الرقمية، والبوابات، ولوحات التحكم، وتطبيقات الجوال.',
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الأسعار',
//     secondaryPageKey: 'pricing',
//   },
// }

// const STEPS_METHOD_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'stepsMethod',
//     eyebrow: 'Этапы работы',
//     title: 'Как устроен процесс — от первого контакта до передачи в разработку',
//     layoutVariant: 'detailed',
//     steps: [
//       {
//         number: '01',
//         title: 'Асинхронный brief',
//         subtitle: 'Понимаем задачу без долгих встреч',
//         description:
//           'Вы заполняете структурированный brief или присылаете материалы. Мы разбираем задачу, уточняем детали асинхронно и формируем понимание проекта.',
//         duration: '1–2 дня',
//       },
//       {
//         number: '02',
//         title: 'Структурирование продукта',
//         subtitle: 'Фиксируем архитектуру и границы',
//         description:
//           'Разбираем цели, роли, сценарии, приоритеты. Формируем экранную карту и логику продукта. Согласовываем scope до начала дизайна.',
//         duration: '3–5 дней',
//       },
//       {
//         number: '03',
//         title: 'Проектирование интерфейса',
//         subtitle: 'Создаём user flows и wireframes',
//         description:
//           'Прорабатываем навигацию, сценарии, состояния. Логика продукта становится видимой и обсуждаемой. Готовим основу для дизайна.',
//         duration: '5–7 дней',
//       },
//       {
//         number: '04',
//         title: 'Prototype и дизайн',
//         subtitle: 'Собираем premium-интерфейс',
//         description:
//           'Создаём интерактивный prototype и детальный дизайн. Готовый результат можно показать инвесторам, клиентам или команде разработки.',
//         duration: '7–14 дней',
//       },
//       {
//         number: '05',
//         title: 'Передача в разработку',
//         subtitle: 'Готовые материалы для dev-команды',
//         description:
//           'Готовим спецификации, assets, documentation. Отвечаем на вопросы разработчиков на старте. Поддерживаем до успешного запуска.',
//         duration: '2–3 дня',
//       },
//     ],
//   },

//   en: {
//     blockType: 'stepsMethod',
//     eyebrow: 'Process Steps',
//     title: 'What the process usually looks like',
//     layoutVariant: 'grid',
//     steps: [
//       {
//         number: '01',
//         title: 'Incoming Task',
//         description:
//           'We start with the project context: a brief, notes, rough requirements, existing screens, or a product idea that still needs to be shaped.',
//       },
//       {
//         number: '02',
//         title: 'Project Structure',
//         description:
//           'We define goals, constraints, scope boundaries, and what the product actually needs at this stage.',
//       },
//       {
//         number: '03',
//         title: 'User Flows',
//         description:
//           'We identify the critical paths, user roles, and the key scenarios that need to work clearly.',
//       },
//       {
//         number: '04',
//         title: 'Screen Logic',
//         description:
//           'We organize screens, modules, and interface relationships into a coherent product structure.',
//       },
//       {
//         number: '05',
//         title: 'Clickable Prototype',
//         description:
//           'We turn the product into something tangible: a clickable prototype that can be shown, discussed, and tested.',
//       },
//       {
//         number: '06',
//         title: 'Materials for Development',
//         description:
//           'We prepare the outputs that help the team move into development with less ambiguity and better alignment.',
//       },
//     ],
//   },

//   ar: {
//     blockType: 'stepsMethod',
//     eyebrow: 'خطوات العملية',
//     title: 'كيف تسير العملية عادة',
//     layoutVariant: 'grid',
//     steps: [
//       {
//         number: '٠١',
//         title: 'المهمة الواردة',
//         description:
//           'نبدأ من سياق المشروع: brief، أو ملاحظات، أو متطلبات أولية، أو شاشات موجودة، أو فكرة منتج ما زالت تحتاج إلى تشكيل أوضح.',
//       },
//       {
//         number: '٠٢',
//         title: 'هيكل المشروع',
//         description:
//           'نحدد الأهداف والقيود وحدود النطاق وما الذي يحتاجه المنتج فعلاً في هذه المرحلة.',
//       },
//       {
//         number: '٠٣',
//         title: 'مسارات المستخدم',
//         description:
//           'نحدد المسارات الأساسية، والأدوار الرئيسية، والسيناريوهات التي يجب أن تعمل بوضوح.',
//       },
//       {
//         number: '٠٤',
//         title: 'منطق الشاشات',
//         description:
//           'ننظم الشاشات والوحدات والعلاقات بينها ضمن بنية منتج واحدة ومتماسكة.',
//       },
//       {
//         number: '٠٥',
//         title: 'نموذج أولي قابل للنقر',
//         description:
//           'نحوّل المنتج إلى شيء ملموس يمكن عرضه ومناقشته ومراجعته واختباره بشكل أوضح.',
//       },
//       {
//         number: '٠٦',
//         title: 'مواد جاهزة للتطوير',
//         description:
//           'نجهز المخرجات التي تساعد الفريق على الانتقال إلى التطوير بغموض أقل وتوافق أكبر.',
//       },
//     ],
//   },
// }

// const DELIVERABLES_METHOD_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'deliverablesMethod',
//     eyebrow: 'Результаты',
//     title: 'Что вы получаете в результате работы',
//     description:
//       'Подходит для дизайна сайта, корпоративного портала, B2B-системы, dashboard или mobile app. Состав материалов зависит от формата работы и сложности проекта.',
//     items: [
//       {
//         title: 'Структура проекта',
//         description:
//           'Цели, роли, сценарии, приоритеты — зафиксированная архитектура продукта.',
//       },
//       {
//         title: 'Пользовательские сценарии',
//         description:
//           'User flows и логика взаимодействия — как пользователи решают свои задачи.',
//       },
//       {
//         title: 'Экранная карта',
//         description:
//           'Визуальная структура всех экранов и переходов — scope становится понятным.',
//       },
//       {
//         title: 'Интерактивный prototype',
//         description:
//           'Кликабельная демонстрация продукта — для презентации и тестирования.',
//       },
//       {
//         title: 'Детальный дизайн',
//         description:
//           'Premium-интерфейсы для всех ключевых экранов — готовые к разработке.',
//       },
//       {
//         title: 'Материалы для разработки',
//         description:
//           'Спецификации, assets, documentation — всё для передачи в команду разработки.',
//       },
//     ],
//   },

//   en: {
//     blockType: 'deliverablesMethod',
//     eyebrow: 'Outputs',
//     title: 'What clients receive along the way',
//     description:
//       'Suitable for websites, corporate portals, B2B systems, dashboards, and mobile apps. The exact deliverables depend on the engagement format and project complexity.',
//     items: [
//       {
//         title: 'Project Structure',
//         description: 'Clarifies goals, constraints, and priorities.',
//       },
//       {
//         title: 'User Flows',
//         description: 'Shows the critical paths and transitions.',
//       },
//       {
//         title: 'Screen Matrix',
//         description: 'Organizes screens into one product system.',
//       },
//       {
//         title: 'Clickable Prototype',
//         description: 'Turns the product into something tangible.',
//       },
//       {
//         title: 'Basic Component System',
//         description: 'Supports interface consistency.',
//       },
//       {
//         title: 'Materials for Development',
//         description: 'Helps move cleanly into development.',
//       },
//     ],
//   },

//   ar: {
//     blockType: 'deliverablesMethod',
//     eyebrow: 'المخرجات',
//     title: 'ما الذي يحصل عليه العميل خلال هذه العملية',
//     description:
//       'مناسب للمواقع، والبوابات المؤسسية، وأنظمة B2B، ولوحات التحكم، وتطبيقات الجوال. المخرجات الدقيقة تعتمد على صيغة العمل ومستوى تعقيد المشروع.',
//     items: [
//       {
//         title: 'هيكل المشروع',
//         description: 'يوضح الأهداف والقيود والأولويات.',
//       },
//       {
//         title: 'مسارات المستخدم',
//         description: 'يبرز المسارات الرئيسية ونقاط الانتقال.',
//       },
//       {
//         title: 'مصفوفة الشاشات',
//         description: 'ينظم الشاشات في نظام منتج واحد.',
//       },
//       {
//         title: 'نموذج أولي قابل للنقر',
//         description: 'يجعل المنتج ملموساً وقابلاً للعرض.',
//       },
//       {
//         title: 'نظام مكونات أساسي',
//         description: 'يدعم اتساق الواجهة.',
//       },
//       {
//         title: 'مواد التسليم للتطوير',
//         description: 'يسهل الانتقال المنظم إلى التطوير.',
//       },
//     ],
//   },
// }

// const CTA_METHOD_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'ctaMethod',
//     title: 'Готовы начать работу над проектом?',
//     description:
//       'Расскажите о вашей задаче — сайт, digital-система, портал или mobile app. Мы предложим формат работы, сроки и стоимость.',
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Посмотреть цены',
//     secondaryPageKey: 'pricing',
//     footerNote: 'Для сайта, mobile app, портала, dashboard или digital-системы.',
//   },

//   en: {
//     blockType: 'ctaMethod',
//     title: 'Want to see how this process would work for your project?',
//     description:
//       'Tell us what you are building, and we will recommend the right format, timeline range, and next step.',
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'View Pricing',
//     secondaryPageKey: 'pricing',
//     footerNote: 'Suitable for websites, systems, portals, dashboards, and mobile apps.',
//   },

//   ar: {
//     blockType: 'ctaMethod',
//     title: 'هل تريد أن تعرف كيف ستعمل هذه العملية مع مشروعك؟',
//     description:
//       'شاركنا بما تعمل عليه، وسنقترح عليك الصيغة الأنسب للعمل، والنطاق الزمني المتوقع، والخطوة التالية.',
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الأسعار',
//     secondaryPageKey: 'pricing',
//     footerNote: 'مناسب للمواقع، والأنظمة، والبوابات، ولوحات التحكم، وتطبيقات الجوال.',
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

// async function getMethodPage(payload: Awaited<ReturnType<typeof getPayload>>) {
//   const result = await payload.find({
//     collection: 'pages',
//     where: {
//       pageKey: {
//         equals: 'method',
//       },
//     },
//     limit: 1,
//     locale: 'ru',
//     fallbackLocale: 'none',
//     depth: 0,
//   })

//   return result.docs[0] ?? null
// }

// async function ensureMethodPage(payload: Awaited<ReturnType<typeof getPayload>>) {
//   const existing = await getMethodPage(payload)

//   if (existing) {
//     return existing
//   }

//   return payload.create({
//     collection: 'pages',
//     locale: 'ru',
//     depth: 0,
//     data: {
//       pageKey: 'method',
//       internalName: 'method',
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

//   const homePage = await ensureMethodPage(payload)


//     await seedBlockForLocale(payload, homePage.id, 'ru', HERO_METHOD_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', HERO_METHOD_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', HERO_METHOD_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', STEPS_METHOD_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', STEPS_METHOD_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', STEPS_METHOD_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', DELIVERABLES_METHOD_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', DELIVERABLES_METHOD_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', DELIVERABLES_METHOD_SEED.ar)

//     await seedBlockForLocale(payload, homePage.id, 'ru', CTA_METHOD_SEED.ru)
//     await seedBlockForLocale(payload, homePage.id, 'en', CTA_METHOD_SEED.en)
//     await seedBlockForLocale(payload, homePage.id, 'ar', CTA_METHOD_SEED.ar)


//   console.log('✅ Method page seed completed')
//   process.exit(0)
// }

// main().catch((error) => {
//   console.error('❌ Method page seed failed')
//   console.error(error)
//   process.exit(1)
// })