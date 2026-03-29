// async function seedHeaderGlobal(payload: Awaited<ReturnType<typeof getPayload>>) {
//   await payload.updateGlobal({
//     slug: 'header',
//     locale: 'ru',
//     data: {
//       brandTitle: 'Atelier Meridian',
//       brandSubtitle: 'Product Architecture & Interface Studio',
//       navItems: [
//         { label: 'Решения', pageKey: 'solutions' },
//         { label: 'Для стартапов', pageKey: 'for-startups' },
//         { label: 'Для партнёров', pageKey: 'for-partners' },
//         { label: 'Цены', pageKey: 'pricing' },
//         { label: 'Как мы работаем', pageKey: 'method' },
//       ],
//       ctaLabel: 'Получить предложение',
//       ctaPageKey: 'get-proposal',
//       languageLabel: 'Язык',
//       comingSoonLabel: 'Скоро',
//     },
//   })

//   await payload.updateGlobal({
//     slug: 'header',
//     locale: 'en',
//     data: {
//       brandTitle: 'Atelier Meridian',
//       brandSubtitle: 'Product Architecture & Interface Studio',
//       navItems: [
//         { label: 'Solutions', pageKey: 'solutions' },
//         { label: 'For Startups', pageKey: 'for-startups' },
//         { label: 'For Partners', pageKey: 'for-partners' },
//         { label: 'Pricing', pageKey: 'pricing' },
//         { label: 'How We Work', pageKey: 'method' },
//       ],
//       ctaLabel: 'Get Proposal',
//       ctaPageKey: 'get-proposal',
//       languageLabel: 'Language',
//       comingSoonLabel: 'Soon',
//     },
//   })

//   await payload.updateGlobal({
//     slug: 'header',
//     locale: 'ar',
//     data: {
//       brandTitle: 'Atelier Meridian',
//       brandSubtitle: 'استوديو هندسة المنتجات والواجهات',
//       navItems: [
//         { label: 'الحلول', pageKey: 'solutions' },
//         { label: 'للشركات الناشئة', pageKey: 'for-startups' },
//         { label: 'للشركاء', pageKey: 'for-partners' },
//         { label: 'الأسعار', pageKey: 'pricing' },
//         { label: 'كيف نعمل', pageKey: 'method' },
//       ],
//       ctaLabel: 'اطلب عرضاً',
//       ctaPageKey: 'get-proposal',
//       languageLabel: 'اللغة',
//       comingSoonLabel: 'قريباً',
//     },
//   })
// }