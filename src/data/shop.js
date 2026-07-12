// Shop page — "coming soon" version. Lena isn't selling yet (the live SPA's
// cart/checkout was a non-functional mock, and shop is hidden from the nav),
// so this page presents the three planned offerings without prices, cart or
// review counts. Product names/descriptions carried over from the SPA.
// When real sales start, rebuild this with actual payment links.
export const SHOP = {
  en: {
    seoTitle: 'Digital products — coming soon',
    seoDesc: 'Guides, meal plans and 1:1 coaching designed for women over 40 — evidence-based support for nutrition, perimenopause and blood sugar.',
    kicker: 'Shop',
    h1: 'Digital products',
    lead: 'Guides, meal plans and 1:1 coaching designed for women over 40 — evidence-based support for nutrition, perimenopause and blood sugar.',
    soon: 'Coming soon',
    note: 'I’m putting the finishing touches on these. Leave your email on the contact page and I’ll let you know the moment they’re ready.',
    notify: 'Get notified',
    coachCta: 'Enquire about coaching',
    items: [
      {
        tag: 'Program', title: 'Glow Up After 40',
        body: 'A guided program to lift your energy, improve your skin and gently release weight — through food, movement and better daily habits that fit a full life.',
        format: 'PDF + printable trackers',
        inside: ['4-week structured plan', 'Daily energy & skin protocol', 'Simple meal framework', 'Home movement routine (no gym)', 'Progress tracker'],
      },
      {
        tag: 'Templates & recipes', title: 'Meals with Minimum Effort',
        body: 'Ready-made menu templates and batch-prep recipes built around one idea: cook once, freeze, and eat well all week with almost no daily effort.',
        format: 'PDF + editable templates',
        inside: ['30+ batch-prep recipes', 'Weekly menu templates', 'Freezer-friendly labels', 'Shopping lists', 'Prep-day schedule'],
      },
      {
        tag: '1:1 Coaching', title: 'Personal Coaching', available: true,
        body: 'One-on-one guidance to rebuild your menu and fit healthy eating and movement into a busy life — with accountability and adjustments as you go.',
        format: '4 or 8 weeks, online',
        inside: ['1:1 intro call', 'Personalised menu plan', 'Weekly check-ins', 'Direct chat support', 'Ongoing adjustments'],
      },
    ],
  },
  ua: {
    seoTitle: 'Цифрові продукти — незабаром',
    seoDesc: 'Гайди, плани харчування та персональний коучинг для жінок після 40 — науково обґрунтована підтримка у харчуванні, перименопаузі та контролі цукру.',
    kicker: 'Магазин',
    h1: 'Цифрові продукти',
    lead: 'Гайди, плани харчування та індивідуальний коучинг для жінок після 40 — науково обґрунтована підтримка у харчуванні, перименопаузі та контролі цукру.',
    soon: 'Незабаром',
    note: 'Я завершую роботу над цими продуктами. Залиште свою пошту на сторінці контактів — і я повідомлю, щойно вони будуть готові.',
    notify: 'Повідомити мене',
    coachCta: 'Дізнатися про коучинг',
    items: [
      {
        tag: 'Програма', title: 'Glow Up після 40',
        body: "Покрокова програма, щоб підняти енергію, покращити стан шкіри та м'яко знизити вагу — через харчування, рух і кращі щоденні звички, які вписуються у повне життя.",
        format: 'PDF + друковані трекери',
        inside: ['4-тижневий структурований план', 'Щоденний протокол енергії та шкіри', 'Проста система харчування', 'Тренування вдома (без спортзалу)', 'Трекер прогресу'],
      },
      {
        tag: 'Шаблони + рецепти', title: 'Меню без зайвих зусиль',
        body: 'Готові шаблони меню та рецепти заготовок навколо однієї ідеї: приготувати раз, заморозити — і харчуватися корисно цілий тиждень майже без щоденних зусиль.',
        format: 'PDF + редаговані шаблони',
        inside: ['30+ рецептів заготовок', 'Щотижневі шаблони меню', 'Наліпки для морозилки', 'Списки покупок', 'Розклад дня заготовок'],
      },
      {
        tag: 'Коучинг', title: 'Персональний коучинг', available: true,
        body: 'Індивідуальне ведення, щоб переробити ваше меню та впорядкувати здорове харчування й рух у зайнятому житті — з підтримкою та коригуванням по ходу.',
        format: '4 або 8 тижнів, онлайн',
        inside: ['Вступний дзвінок 1:1', 'Персональний план меню', 'Щотижневі зустрічі', 'Підтримка у чаті', 'Постійні коригування'],
      },
    ],
  },
  imgs: [
    '/images/glow-up-after-40-nutrition-program.jpg',
    '/images/effortless-meal-plans-women-over-40.jpg',
    '/images/personal-nutrition-coaching-perimenopause.jpg',
  ],
};
