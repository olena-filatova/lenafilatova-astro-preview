// Shared UI strings + About-page content, EN + UA.
// This is the "data" half of the data+template split: pages render from here,
// so translating or editing copy never means touching layout code.

export const NAV = {
  en: { blog: 'Blog', resources: 'Resources', recipes: 'Recipes', about: 'About', contact: 'Contact', subscribe: 'Subscribe' },
  ua: { blog: 'Блог', resources: 'Ресурси', recipes: 'Рецепти', about: 'Про мене', contact: 'Контакти', subscribe: 'Підписатися' },
};

export const FOOTER = {
  en: {
    blurb: 'Evidence-based women’s health after 40 — nutrition, fitness and calm, practical guidance.',
    follow: 'Follow', explore: 'Explore', categories: 'Categories', legal: 'Legal', contact: 'Contact',
    cats: ['Perimenopause', 'Nutrition', 'Fitness 40+', 'Diabetes'],
    legalLinks: ['Privacy Policy', 'Cookie Policy', 'Terms & Conditions', 'Refund & Cancellation Policy', 'Accessibility'],
    company: '© 2026 Selfound Ltd. Registered in England and Wales · Company No. 16450921',
    disclaimer: 'The information on this site is for educational purposes only and is not medical advice. When in doubt, please consult your healthcare provider.',
  },
  ua: {
    blurb: 'Науково обґрунтоване жіноче здоров’я після 40 — харчування, фітнес і спокійні, практичні поради.',
    follow: 'Соцмережі', explore: 'Розділи', categories: 'Категорії', legal: 'Правова інформація', contact: 'Контакти',
    cats: ['Перименопауза', 'Харчування', 'Фітнес 40+', 'Діабет'],
    legalLinks: ['Політика конфіденційності', 'Політика cookie', 'Умови використання', 'Повернення та скасування', 'Доступність'],
    company: '© 2026 Selfound Ltd. Registered in England and Wales · Company No. 16450921',
    disclaimer: 'Інформація на цьому сайті має лише освітній характер і не є медичною порадою. За наявності сумнівів, будь ласка, зверніться до свого лікаря.',
  },
};

export const ABOUT = {
  en: {
    seoTitle: 'About Lena Filatova — writer & coach with type 1 diabetes',
    seoDesc: 'Meet Lena Filatova — evidence-based writer and coach on women’s health after 40, living with type 1 diabetes for over two decades.',
    ogImage: '/images/lena-filatova-womens-health-coach-over-40.jpg',
    kicker: 'About',
    h1: 'Hi, I’m Lena.',
    lead: 'I’ve lived with type 1 diabetes since 2003 — and spent those years learning what almost no one explains: how diabetes, insulin resistance and perimenopause collide for women over 40. My work is to make that clearer, and help you feel like yourself again.',
    stats: [
      { n: '23 years', l: 'living with type 1 diabetes' },
      { n: 'Founder', l: 'dia.school — online school of diabetes' },
      { n: 'Hundreds', l: 'supported via webinars & programmes' },
      { n: '2022', l: 'humanitarian mission for Ukraine' },
    ],
    story: [
      'I was diagnosed with type 1 diabetes in 2003. More than twenty years of managing it every single day taught me what actually works when a chronic condition is part of ordinary life — and how much steadier you feel once fear gives way to understanding.',
      'I’ve hosted webinars and led wellness programmes on living well with diabetes, and founded dia.school — an online school of diabetes — to bring that knowledge to more people. Between the school and my programmes I’ve supported hundreds in taking calm, confident control of their health.',
      'During the full-scale invasion of Ukraine in 2022, I joined a humanitarian mission supplying Ukrainians with vital diabetic supplies — coordinating resources and support for people who suddenly had none. Today I bring that same practical, no-panic approach to helping women over 40 feel strong through every change.',
    ],
    values: [
      { h: 'Evidence first', p: 'Guidance grounded in research, not trends or quick fixes.' },
      { h: 'Realistic', p: 'Plans built around your actual time, not an ideal week.' },
      { h: 'Sustainable', p: 'Habits you can keep long after a program ends.' },
    ],
    ctaTitle: 'Ready to start?',
    ctaText: 'Book a coaching call or explore the digital products whenever you’re ready.',
    ctaBtn: 'Work with me',
  },
  ua: {
    seoTitle: 'Про Лену Філатову — авторка та коуч із діабетом 1 типу',
    seoDesc: 'Знайомтесь із Леною Філатовою — авторка та коуч із науковим підходом до жіночого здоров’я після 40, живе з діабетом 1 типу понад два десятиліття.',
    ogImage: '/images/lena-filatova-womens-health-coach-over-40.jpg',
    kicker: 'Про мене',
    h1: 'Привіт, я Лена.',
    lead: 'Я живу з діабетом 1 типу з 2003 року — і всі ці роки допомагаю іншим жити з ним повноцінно. Усе, чого я навчаю, — з реального досвіду, а не з теорії.',
    stats: [
      { n: '23 роки', l: 'життя з діабетом 1 типу' },
      { n: 'Засновниця', l: 'dia.school — онлайн-школа діабету' },
      { n: 'Сотні', l: 'підтримані через вебінари та програми' },
      { n: '2022', l: 'гуманітарна місія для України' },
    ],
    story: [
      'Мені діагностували діабет 1 типу у 2003 році. Понад двадцять років щоденного контролю навчили мене, що справді працює, коли хронічний стан — частина звичайного життя, і наскільки спокійніше стає, коли страх поступається розумінню.',
      'Я проводила вебінари та вела велнес-програми про життя з діабетом і заснувала dia.school — онлайн-школу діабету, щоб донести ці знання ширше. Через школу та програми я підтримала сотні людей у спокійному та впевненому контролі свого здоров’я.',
      'Під час повномасштабного вторгнення в Україну у 2022 році я долучилася до гуманітарної місії з постачання українцям життєво важливих діабетичних засобів — координувала ресурси та підтримку для тих, хто раптово залишився без них. Сьогодні я застосовую цей самий практичний підхід без паніки, щоб допомагати жінкам після 40 бути сильними у кожній зміні.',
    ],
    values: [
      { h: 'Спершу докази', p: 'Поради, засновані на дослідженнях, а не на трендах.' },
      { h: 'Реалістично', p: 'Плани навколо вашого реального часу, а не ідеального тижня.' },
      { h: 'Стабільно', p: 'Звички, які лишаються з вами після завершення програми.' },
    ],
    ctaTitle: 'Готові почати?',
    ctaText: 'Забронюйте коучинговий дзвінок або перегляньте цифрові продукти, коли будете готові.',
    ctaBtn: 'Працювати зі мною',
  },
};

export const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/lena.filatova/' },
  { name: 'Facebook', href: 'https://www.facebook.com/lenafilatovablog' },
  { name: 'Threads', href: 'https://www.threads.com/@lena.filatova' },
];

// Google Calendar appointment scheduler — copied verbatim from the live site.
export const BOOKING_EMBED = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0nzMnvnKmd4nOx0E1T86EQuRdnoBbYmTEXc-FEtQo9fWvhk-cz4eM8PSSvA7K-BxUJb-F9TBEg?gv=true';

// Google Apps Script endpoint the contact form posts to (type=message → emails Lena;
// same script that handles all site signups → Mailchimp). Posted no-cors, form-urlencoded.
export const CONTACT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbw21p8PuG5jGQ7JXf7j-tX1-OZBeA1p6negAuzi7TmiyPkjEoshxLbtGc6avUVskGiK/exec';

// Resources hub. Cards currently link to the live tools (absolute URLs) so every card
// works from the preview; repoint `href`/`hrefUa` to internal paths as each tool migrates.
export const RESOURCES = {
  en: {
    seoTitle: 'Tools & guides — Lena Filatova',
    seoDesc: 'Practical, evidence-based resources to support women’s health after 40 — free to use, no strings.',
    kicker: 'Free resources', h1: 'Tools & guides',
    lead: 'Practical, evidence-based resources to support women’s health after 40 — free to use, no strings.',
  },
  ua: {
    seoTitle: 'Інструменти та гайди — Lena Filatova',
    seoDesc: 'Практичні, науково обґрунтовані ресурси для жіночого здоров’я після 40 — безкоштовно, без умов.',
    kicker: 'Безкоштовні ресурси', h1: 'Інструменти та гайди',
    lead: 'Практичні, науково обґрунтовані ресурси для жіночого здоров’я після 40 — безкоштовно, без умов.',
  },
  cards: [
    {
      band: '#eaf4ec', head: '#3f7d54',
      href: 'https://calculator.lenafilatova.co.uk', hrefUa: 'https://calculator.lenafilatova.co.uk',
      en: { band: 'Food & blood sugar', kicker: 'Interactive tool', title: 'Metabolic food calculator', desc: 'See how any food is likely to affect your blood sugar — glycaemic load, carbs and protein. Built for Type 1, insulin resistance and PMOS (previously PCOS).', cta: 'Open the calculator →' },
      ua: { band: 'Їжа та цукор у крові', kicker: 'Інтерактивний інструмент', title: 'Калькулятор впливу їжі на метаболізм', desc: 'Подивіться, як конкретна їжа впливає на рівень цукру — глікемічне навантаження, вуглеводи та білок. Для діабету 1 типу, інсулінорезистентності та ПМОС (раніше СПКЯ).', cta: 'Відкрити калькулятор →' },
    },
    {
      band: '#fbeee1', head: '#b0743a',
      href: 'https://calculator.lenafilatova.co.uk', hrefUa: 'https://calculator.lenafilatova.co.uk',
      en: { band: 'Exercise & blood sugar', kicker: 'Interactive tool', title: 'Exercise & blood sugar calculator', desc: 'See how cardio, strength and everyday movement are likely to affect your blood sugar. Built for Type 1, insulin resistance and PMOS (previously PCOS).', cta: 'Open the calculator →' },
      ua: { band: 'Активність та цукор у крові', kicker: 'Інтерактивний інструмент', title: 'Калькулятор впливу фізичних навантажень на цукор', desc: 'Подивіться, як кардіо, силові та щоденний рух впливають на рівень цукру. Для діабету 1 типу, інсулінорезистентності та ПМОС (раніше СПКЯ).', cta: 'Відкрити калькулятор →' },
    },
    {
      band: '#f5eaf1', head: '#a24b76',
      href: 'https://lenafilatova.co.uk/resources/aid-comparison', hrefUa: 'https://lenafilatova.co.uk/resources/aid-comparison?lang=ua',
      en: { band: 'Pumps & AID systems', kicker: 'Comparison', title: 'AID (Automated Insulin Delivery) system comparison (2026)', desc: 'Every major insulin pump and Automated Insulin Delivery system side by side — available now and in the pipeline. Filter by type, AID and status.', cta: 'Open the comparison →' },
      ua: { band: 'Помпи та системи AID', kicker: 'Порівняння', title: 'Порівняння систем AID (автоматична подача інсуліну) (2026)', desc: 'Усі основні інсулінові помпи та системи автоматичної подачі інсуліну поряд — доступні зараз і в розробці. Фільтри за типом, AID і статусом.', cta: 'Відкрити порівняння →' },
    },
    {
      band: '#e4f1f0', head: '#3a827a',
      href: 'https://lenafilatova.co.uk/cgm-comparison.html', hrefUa: 'https://lenafilatova.co.uk/cgm-comparison-ua.html',
      en: { band: 'CGM sensors', kicker: 'Comparison', title: 'CGM sensor comparison (2026)', desc: 'Every major continuous glucose monitor side by side — Abbott, Dexcom, Medtronic and more. Compare wear time, calibration, alerts and AID compatibility.', cta: 'Open the comparison →' },
      ua: { band: 'Сенсори CGM', kicker: 'Порівняння', title: 'Порівняння CGM-сенсорів (2026)', desc: 'Усі основні монітори глюкози безперервної дії поряд — Abbott, Dexcom, Medtronic та інші. Порівняйте час носіння, калібрування, сповіщення й сумісність з AID.', cta: 'Відкрити порівняння →' },
    },
    {
      band: '#fbf0f4', head: '#bb5480',
      href: 'https://lenafilatova.co.uk/blood-sugar-investigator.html', hrefUa: 'https://lenafilatova.co.uk/blood-sugar-investigator-ua.html',
      en: { band: 'Troubleshooter', kicker: 'Interactive', title: 'Blood Sugar Investigator', desc: 'A guided troubleshooter for an unexpected high or low. Answer simple questions and get the most likely cause, what to do, and a summary to share with your diabetes team.', cta: 'Start the investigation →' },
      ua: { band: 'Помічник', kicker: 'Інтерактивний', title: 'Дослідник цукру в крові', desc: 'Покроковий помічник для несподіваного підйому чи гіпо. Дайте відповіді на прості запитання й отримайте найімовірнішу причину, що робити, і підсумок для діабетичної команди.', cta: 'Почати дослідження →' },
    },
    {
      band: '#eaf0f6', head: '#4d61a0',
      href: 'https://lenafilatova.co.uk/carb-gi-table.html', hrefUa: 'https://lenafilatova.co.uk/carb-gi-table-ua.html',
      en: { band: 'Carbs & GI', kicker: 'Interactive table', title: 'Carbohydrate & glycaemic index table', desc: '200+ foods with carbs per 100g and glycaemic index — Ukrainian and British staples included. Filter, search and sort to see how each food is likely to affect blood sugar.', cta: 'Open the table →' },
      ua: { band: 'Вуглеводи та ГІ', kicker: 'Інтерактивна таблиця', title: 'Таблиця вуглеводів і глікемічного індексу', desc: 'Понад 200 продуктів із вуглеводами на 100 г і глікемічним індексом — з українськими та британськими стравами. Фільтруйте, шукайте й сортуйте, щоб побачити ймовірний вплив на цукор.', cta: 'Відкрити таблицю →' },
    },
  ],
};

export const CONTACT = {
  en: {
    seoTitle: 'Work with me — Lena Filatova',
    seoDesc: 'Tell me where you are and what you’d like to change. I’ll reply with how I can help and the best next step for you.',
    kicker: 'Coaching & contact',
    h1: 'Work with me',
    lead: 'Tell me where you are and what you’d like to change. I’ll reply with how I can help and the best next step for you.',
    disclaimer: 'Coaching is a wellness and educational service — not a medical service, diagnosis or treatment. Please consult your healthcare provider for medical advice.',
    stepsTitle: 'How coaching works',
    steps: [
      { h: 'Apply', p: 'Send a short message about your goals and where you’re starting.' },
      { h: 'Intro call', p: 'We map your situation, routine and what’s realistic for you.' },
      { h: 'Your plan', p: 'A personalised menu and movement routine built around your week.' },
      { h: 'Check-ins', p: 'Weekly support and adjustments so the plan keeps working.' },
    ],
    instagram: 'Or reach me on Instagram',
    emailLabel: 'Email:',
    tabCall: 'Book a free call',
    tabMsg: 'Send a message',
    callHeading: 'Free 20-minute intro call',
    fName: 'Name', fEmail: 'Email', fMsg: 'What would you like help with?', fSubmit: 'Send message',
    fSent: 'Thanks — your message has been sent. I’ll reply to you soon.',
  },
  ua: {
    seoTitle: 'Працюймо разом — Lena Filatova',
    seoDesc: 'Розкажіть, де ви зараз і що хочете змінити. Я відповім, чим можу допомогти та який найкращий наступний крок для вас.',
    kicker: 'Коучинг і контакти',
    h1: 'Працюймо разом',
    lead: 'Розкажіть, де ви зараз і що хочете змінити. Я відповім, чим можу допомогти та який найкращий наступний крок для вас.',
    disclaimer: 'Коучинг — це велнес- та освітня послуга, а не медична послуга, діагностика чи лікування. З питань здоров’я, будь ласка, звертайтеся до свого лікаря.',
    stepsTitle: 'Як працює коучинг',
    steps: [
      { h: 'Заявка', p: 'Надішліть коротке повідомлення про ваші цілі та відправну точку.' },
      { h: 'Вступний дзвінок', p: 'Разом визначаємо ситуацію, режим і що реально для вас.' },
      { h: 'Ваш план', p: 'Персональне меню та режим руху навколо вашого тижня.' },
      { h: 'Зустрічі', p: 'Щотижнева підтримка та коригування, щоб план працював.' },
    ],
    instagram: 'Або напишіть мені в Instagram',
    emailLabel: 'Email:',
    tabCall: 'Записатися на дзвінок',
    tabMsg: 'Написати',
    callHeading: 'Безкоштовний вступний дзвінок, 20 хв',
    fName: 'Ім’я', fEmail: 'Email', fMsg: 'З чим вам допомогти?', fSubmit: 'Надіслати повідомлення',
    fSent: 'Дякую — ваше повідомлення надіслано. Я скоро відповім.',
  },
};
