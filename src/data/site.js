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

// Homepage. Featured recipe + blog cards are slug-based (both sections live in
// this repo now); HomeBody builds the language-scoped href and base-prefixes
// the local image. Newsletter posts to the same Apps Script as all signups
// (source=newsletter → Mailchimp double opt-in).
export const HOME = {
  en: {
    seoTitle: 'Lena Filatova — Evidence-based women’s health after 40',
    seoDesc: 'Clear, evidence-based information for women 40+ living with diabetes, insulin resistance and perimenopause.',
    heroKicker: 'Women’s health after 40',
    heroH1: 'Feel strong through every change.',
    heroLead: 'Clear, evidence-based information for women 40+ living with diabetes or insulin resistance, and perimenopause — the overlap almost no one explains. My mission is to help you restore your energy and confidence, and to offer practical solutions for a full life.',
    heroCta1: 'Get evidence-based guidance', heroCta2: 'Read the blog',
    heroNote: 'Living with type 1 diabetes since 2003 · Founder of the online School of Diabetes and the Gymbile fitness app',
    helpTitle: 'What I help with',
    helpSub: 'Where hormones, blood sugar and midlife meet — explained clearly, in one place.',
    help: [
      { h: 'Perimenopause', p: 'Understand your hormones and ease the transition with less guesswork.' },
      { h: 'Nutrition', p: 'Simple, sustainable eating built around your real life — not a diet.' },
      { h: 'Fitness 40+', p: 'Train smart for strength, energy and long-term health.' },
      { h: 'Diabetes', p: 'Live well with diabetes through food and daily movement — grounded in lived experience.' },
    ],
    recipesTitle: 'Reader-favourite recipes',
    recipesSub: 'The most-loved low-GI recipes from my kitchen — no sugar, no white flour.',
    recipesAll: 'All recipes', carbs: 'carbs', recipeCta: 'View recipe →',
    blogTitle: 'From the blog', blogAll: 'All articles', blogCta: 'Read article →', readMin: 'min read',
    nlTitle: 'Join the newsletter',
    nlSub: 'Occasional, science-backed notes on diabetes, perimenopause and women’s health after 40 — the overlap almost no one explains. No noise, no fads, unsubscribe anytime.',
    nlConsent: 'I agree to receive emails and accept the Privacy Policy. I can unsubscribe at any time.',
    nlEmail: 'Your email', nlBtn: 'Subscribe',
    nlSent: 'Almost there — check your inbox to confirm your subscription.',
  },
  ua: {
    seoTitle: 'Lena Filatova — Науково обґрунтоване жіноче здоров’я після 40',
    seoDesc: 'Зрозуміла, науково обґрунтована інформація для жінок 40+ із діабетом, інсулінорезистентністю та перименопаузою.',
    heroKicker: 'Жіноче здоров’я після 40',
    heroH1: 'Почувайтесь сильною на кожному етапі життя',
    heroLead: 'Зрозуміла, науково обґрунтована інформація для жінок 40+, які живуть із діабетом або інсулінорезистентністю та перименопаузою — перетин, який майже ніхто не пояснює. Моя місія — допомогти вам повернути енергію та впевненість і дати практичні рішення для повноцінного життя.',
    heroCta1: 'Отримати науково обґрунтовані поради', heroCta2: 'Читати блог',
    heroNote: 'Живу з діабетом 1 типу з 2003 · Засновниця Школи Діабету онлайн та фітнес-додатку Gymbile',
    helpTitle: 'Чим я допомагаю',
    helpSub: 'Де гормони, цукор у крові та середній вік перетинаються — зрозуміло, в одному місці.',
    help: [
      { h: 'Перименопауза', p: 'Зрозумійте свої гормони та полегшіть перехідний період.' },
      { h: 'Харчування', p: 'Просте та збалансоване харчування для реального життя — не дієта.' },
      { h: 'Фітнес 40+', p: 'Тренуйтеся розумно заради сили, енергії та здоров’я.' },
      { h: 'Діабет', p: 'Живіть повноцінно з діабетом — через їжу та щоденний рух, із особистого досвіду.' },
    ],
    recipesTitle: 'Улюблені рецепти читачів',
    recipesSub: 'Найпопулярніші рецепти з низьким ГІ з моєї кухні — без цукру та білого борошна.',
    recipesAll: 'Усі рецепти', carbs: 'г вугл.', recipeCta: 'Дивитися рецепт →',
    blogTitle: 'З блогу', blogAll: 'Усі статті', blogCta: 'Читати →', readMin: 'хв читання',
    nlTitle: 'Підпишіться на розсилку',
    nlSub: 'Час від часу — науково обґрунтовані нотатки про діабет, перименопаузу та жіноче здоров’я після 40. Без спаму й модних дієт, відписатися можна будь-коли.',
    nlConsent: 'Погоджуюся отримувати листи та приймаю Політику конфіденційності. Відписатися можна будь-коли.',
    nlEmail: 'Ваш email', nlBtn: 'Підписатися',
    nlSent: 'Майже готово — перевірте пошту, щоб підтвердити підписку.',
  },
  helpColors: ['#f7eaf1', '#eeeaf6', '#e9f1ec', '#e9eef5'],
  helpNums: ['#a24b76', '#5a5e9c', '#3f7d54', '#4d61a0'],
  recipes: [
    { cat: { en: 'Main', ua: 'Основне' }, title: { en: 'Zucchini Spaghetti with Salmon', ua: 'Спагеті з кабачка з лососем' }, gi: 15, carbs: 6, slug: 'zucchini-spaghetti-salmon', img: '/recipes/images/93-zucchini-spaghetti-salmon.jpg' },
    { cat: { en: 'Snack', ua: 'Перекус' }, title: { en: 'Almond & Pecan Cookies', ua: 'Мигдалево-пеканове печиво' }, gi: 10, carbs: 10, slug: 'almond-pecan-cookies', img: '/recipes/images/05-almond-pecan-cookies.jpeg' },
    { cat: { en: 'Sauce', ua: 'Соус' }, title: { en: 'Avocado Mayonnaise', ua: 'Майонез з авокадо' }, gi: 20, carbs: 3, slug: 'avocado-mayonnaise', img: '/recipes/images/11-avocado-mayonnaise.jpg' },
    { cat: { en: 'Dessert', ua: 'Десерт' }, title: { en: 'Sugar-free Birthday Cake', ua: 'Святковий торт без цукру' }, gi: 38, carbs: 22, slug: 'birthday-cake-sugar-free', img: '/recipes/images/19-birthday-cake-sugar-free.jpg' },
  ],
  posts: [
    { cat: { en: 'Nutrition', ua: 'Харчування' }, title: { en: 'What to replace sugar with: the evidence on sweeteners', ua: 'Чим замінити цукор: що каже наука про підсолоджувачі' }, excerpt: { en: 'Stevia, monk fruit, allulose, erythritol, xylitol, sucralose, aspartame, honey and agave — what current research actually shows about sweeteners for blood sugar and health.', ua: 'Стевія, монк-фрут, алюлоза, еритрит, ксиліт, сукралоза, аспартам, мед і агава — що насправді показують сучасні дослідження про підсолоджувачі для рівня цукру та здоров’я.' }, date: { en: '9 July 2026', ua: '9 липня 2026' }, min: 7, slug: 'natural-sweeteners', img: '/images/natural-sweeteners-stevia-monk-fruit-allulose.jpg' },
    { cat: { en: 'Nutrition', ua: 'Харчування' }, title: { en: 'Protein for women over 40: how much do you actually need?', ua: 'Білок для жінок після 40: скільки насправді потрібно?' }, excerpt: { en: 'Why the official 0.8g/kg guideline falls short after 40 — and the protein targets that actually protect muscle, energy and blood sugar.', ua: 'Чому офіційна норма 0,8 г/кг замала після 40 — і які орієнтири білка справді захищають м’язи, енергію та цукор у крові.' }, date: { en: '4 July 2026', ua: '4 липня 2026' }, min: 8, slug: 'protein-for-women-over-40', img: '/images/protein-for-women-over-40.jpg' },
    { cat: { en: 'Diabetes', ua: 'Діабет' }, title: { en: 'What new research says about type 2 diabetes', ua: 'Що каже нове дослідження про діабет 2 типу' }, excerpt: { en: 'Recent findings on remission, meal order, time-restricted eating and sleep — and what’s actually worth trying.', ua: 'Нові дані про ремісію, порядок їжі, обмежене в часі харчування та сон — і що справді варто спробувати.' }, date: { en: '26 June 2026', ua: '26 червня 2026' }, min: 8, slug: 'type-2-diabetes-research', img: '/images/type-2-diabetes-research-meal-order.jpg' },
  ],
};

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
      href: '/aid-comparison.html', hrefUa: '/aid-comparison-ua.html',
      en: { band: 'Pumps & AID systems', kicker: 'Comparison', title: 'AID (Automated Insulin Delivery) system comparison (2026)', desc: 'Every major insulin pump and Automated Insulin Delivery system side by side — available now and in the pipeline. Filter by type, AID and status.', cta: 'Open the comparison →' },
      ua: { band: 'Помпи та системи AID', kicker: 'Порівняння', title: 'Порівняння систем AID (автоматична подача інсуліну) (2026)', desc: 'Усі основні інсулінові помпи та системи автоматичної подачі інсуліну поряд — доступні зараз і в розробці. Фільтри за типом, AID і статусом.', cta: 'Відкрити порівняння →' },
    },
    {
      band: '#e4f1f0', head: '#3a827a',
      href: '/cgm-comparison.html', hrefUa: '/cgm-comparison-ua.html',
      en: { band: 'CGM sensors', kicker: 'Comparison', title: 'CGM sensor comparison (2026)', desc: 'Every major continuous glucose monitor side by side — Abbott, Dexcom, Medtronic and more. Compare wear time, calibration, alerts and AID compatibility.', cta: 'Open the comparison →' },
      ua: { band: 'Сенсори CGM', kicker: 'Порівняння', title: 'Порівняння CGM-сенсорів (2026)', desc: 'Усі основні монітори глюкози безперервної дії поряд — Abbott, Dexcom, Medtronic та інші. Порівняйте час носіння, калібрування, сповіщення й сумісність з AID.', cta: 'Відкрити порівняння →' },
    },
    {
      band: '#fbf0f4', head: '#bb5480',
      href: '/blood-sugar-investigator.html', hrefUa: '/blood-sugar-investigator-ua.html',
      en: { band: 'Troubleshooter', kicker: 'Interactive', title: 'Blood Sugar Investigator', desc: 'A guided troubleshooter for an unexpected high or low. Answer simple questions and get the most likely cause, what to do, and a summary to share with your diabetes team.', cta: 'Start the investigation →' },
      ua: { band: 'Помічник', kicker: 'Інтерактивний', title: 'Дослідник цукру в крові', desc: 'Покроковий помічник для несподіваного підйому чи гіпо. Дайте відповіді на прості запитання й отримайте найімовірнішу причину, що робити, і підсумок для діабетичної команди.', cta: 'Почати дослідження →' },
    },
    {
      band: '#eaf0f6', head: '#4d61a0',
      href: '/carb-gi-table.html', hrefUa: '/carb-gi-table-ua.html',
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

// ── Legal pages ──────────────────────────────────────────────
// Five documents (Privacy, Cookies, Terms, Refund, Accessibility),
// EN + UA. Each doc: { seoTitle, seoDesc, h1, updated, intro, sections }.
// A section's `body` is an array of blocks: a string = <p> (inline HTML
// allowed), an { ul: [...] } = bullet list. LegalBody renders it and
// base-prefixes any href="/…". Slugs are shared across languages.
export const LEGAL_SLUGS = {
  privacy: 'privacy',
  cookies: 'cookies',
  terms: 'terms',
  refunds: 'refunds',
  accessibility: 'accessibility',
};

const COMPANY_LINE = 'Selfound Ltd, registered in England and Wales, Company No. 16450921';
const COMPANY_LINE_UA = 'Selfound Ltd, зареєстрована в Англії та Уельсі, реєстраційний номер 16450921';

export const LEGAL = {
  privacy: {
    en: {
      seoTitle: 'Privacy Policy — Lena Filatova',
      seoDesc: 'How Selfound Ltd collects, uses and protects your personal data on lenafilatova.co.uk, under UK GDPR and the Data Protection Act 2018.',
      kicker: 'Legal',
      h1: 'Privacy Policy',
      updated: 'Last updated 10 July 2026',
      intro: 'This policy explains how <strong>Selfound Ltd</strong> (“we”, “us”, “our”) collects and uses your personal data when you visit <strong>lenafilatova.co.uk</strong>, subscribe to our newsletter, or get in touch. We are the data controller under the UK GDPR and the Data Protection Act 2018.',
      sections: [
        { h: 'Who we are', body: [
          `${COMPANY_LINE}. You can reach us about anything in this policy at <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>.`,
        ]},
        { h: 'What data we collect', body: [
          'We only collect what we need:',
          { ul: [
            '<strong>Newsletter details</strong> — your name (if given) and email address when you subscribe.',
            '<strong>Messages</strong> — your name, email and the content of any message you send us through the contact form or by email.',
            '<strong>Booking details</strong> — your name, email and anything you choose to share when you book an introductory or coaching call.',
            '<strong>Usage data</strong> — if (and only if) you accept analytics cookies: approximate location, device and browser type, and the pages you view. See our <a href="/cookies/">Cookie Policy</a>.',
          ]},
        ]},
        { h: 'How and why we use it', body: [
          'We rely on these legal bases:',
          { ul: [
            '<strong>Consent</strong> — to send you the newsletter and to run website analytics. You can withdraw consent at any time.',
            '<strong>Legitimate interests</strong> — to respond to your enquiries and keep the site secure and working.',
            '<strong>Performance of a contract</strong> — to deliver any paid coaching or digital products you purchase.',
            '<strong>Legal obligation</strong> — to keep records we are required by law to keep.',
          ]},
        ]},
        { h: 'Who we share it with', body: [
          'We never sell your data. We use a small number of trusted providers who process it on our behalf:',
          { ul: [
            '<strong>Mailchimp</strong> (Intuit Inc., USA) — to manage the newsletter.',
            '<strong>Google</strong> (Google Ireland Ltd / Google LLC) — for our email, contact-form handling (Google Apps Script), call bookings (Google Calendar) and website analytics (Google Analytics).',
            '<strong>GitHub</strong> (GitHub, Inc., a Microsoft company) — to host the website.',
          ]},
          'We may also disclose data if required to do so by law.',
        ]},
        { h: 'International transfers', body: [
          'Some of these providers are based outside the UK (for example, in the USA). Where your data is transferred internationally, we rely on appropriate safeguards — such as UK adequacy regulations or the International Data Transfer Agreement / Standard Contractual Clauses — to keep it protected.',
        ]},
        { h: 'How long we keep it', body: [
          { ul: [
            'Newsletter data — until you unsubscribe.',
            'Enquiry emails — for a reasonable period after we have dealt with your query.',
            'Customer and booking records — for as long as needed to provide the service and to meet legal and accounting obligations (usually up to 6 years).',
          ]},
        ]},
        { h: 'Your rights', body: [
          'Under UK data protection law you have the right to:',
          { ul: [
            'access the personal data we hold about you;',
            'have inaccurate data corrected;',
            'have your data erased;',
            'restrict or object to how we use it;',
            'receive your data in a portable format;',
            'withdraw consent at any time.',
          ]},
          'To exercise any of these, email <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>. If you are unhappy with how we handle your data, you can complain to the Information Commissioner’s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a>.',
        ]},
        { h: 'Children', body: [
          'This website is not directed at children under 16, and we do not knowingly collect their personal data.',
        ]},
        { h: 'Changes to this policy', body: [
          'We may update this policy from time to time. The date at the top shows when it was last revised.',
        ]},
      ],
    },
    ua: {
      seoTitle: 'Політика конфіденційності — Лена Філатова',
      seoDesc: 'Як Selfound Ltd збирає, використовує та захищає ваші персональні дані на lenafilatova.co.uk згідно з UK GDPR та Data Protection Act 2018.',
      kicker: 'Правова інформація',
      h1: 'Політика конфіденційності',
      updated: 'Оновлено 10 липня 2026',
      intro: 'Ця політика пояснює, як <strong>Selfound Ltd</strong> («ми», «нас», «наш») збирає та використовує ваші персональні дані, коли ви відвідуєте <strong>lenafilatova.co.uk</strong>, підписуєтесь на розсилку або звертаєтесь до нас. Ми є контролером даних згідно з UK GDPR та Data Protection Act 2018.',
      sections: [
        { h: 'Хто ми', body: [
          `${COMPANY_LINE_UA}. З будь-яких питань щодо цієї політики пишіть на <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>.`,
        ]},
        { h: 'Які дані ми збираємо', body: [
          'Ми збираємо лише те, що потрібно:',
          { ul: [
            '<strong>Дані для розсилки</strong> — ваше ім’я (якщо вказано) та email, коли ви підписуєтесь.',
            '<strong>Повідомлення</strong> — ваше ім’я, email і зміст будь-якого повідомлення через форму контакту або електронною поштою.',
            '<strong>Дані бронювання</strong> — ваше ім’я, email і те, чим ви вирішите поділитися, коли записуєтесь на вступний чи коучинговий дзвінок.',
            '<strong>Дані про використання</strong> — якщо (і тільки якщо) ви приймаєте аналітичні файли cookie: приблизне місцезнаходження, тип пристрою й браузера та переглянуті сторінки. Див. нашу <a href="/ua/cookies/">Політику cookie</a>.',
          ]},
        ]},
        { h: 'Як і навіщо ми їх використовуємо', body: [
          'Ми спираємось на такі правові підстави:',
          { ul: [
            '<strong>Згода</strong> — щоб надсилати розсилку та вести аналітику сайту. Ви можете відкликати згоду будь-коли.',
            '<strong>Законні інтереси</strong> — щоб відповідати на ваші запити й підтримувати роботу та безпеку сайту.',
            '<strong>Виконання договору</strong> — щоб надати придбаний вами коучинг або цифрові продукти.',
            '<strong>Юридичний обов’язок</strong> — щоб зберігати записи, яких вимагає закон.',
          ]},
        ]},
        { h: 'З ким ми ділимося', body: [
          'Ми ніколи не продаємо ваші дані. Ми користуємось кількома надійними постачальниками, які обробляють дані від нашого імені:',
          { ul: [
            '<strong>Mailchimp</strong> (Intuit Inc., США) — для керування розсилкою.',
            '<strong>Google</strong> (Google Ireland Ltd / Google LLC) — для нашої пошти, обробки форми контакту (Google Apps Script), бронювання дзвінків (Google Calendar) та аналітики сайту (Google Analytics).',
            '<strong>GitHub</strong> (GitHub, Inc., компанія Microsoft) — для хостингу сайту.',
          ]},
          'Ми також можемо розкрити дані, якщо цього вимагає закон.',
        ]},
        { h: 'Міжнародна передача даних', body: [
          'Деякі з цих постачальників розташовані за межами Великої Британії (наприклад, у США). Коли ваші дані передаються за кордон, ми застосовуємо належні гарантії — такі як рішення про адекватність або International Data Transfer Agreement / Standard Contractual Clauses — щоб зберегти їх захищеними.',
        ]},
        { h: 'Скільки ми зберігаємо дані', body: [
          { ul: [
            'Дані розсилки — доки ви не відпишетесь.',
            'Листи-запити — розумний період після того, як ми опрацювали ваше звернення.',
            'Записи клієнтів і бронювань — стільки, скільки потрібно для надання послуги та виконання юридичних і бухгалтерських зобов’язань (зазвичай до 6 років).',
          ]},
        ]},
        { h: 'Ваші права', body: [
          'Згідно із законодавством Великої Британії про захист даних ви маєте право:',
          { ul: [
            'отримати доступ до персональних даних, які ми зберігаємо;',
            'виправити неточні дані;',
            'видалити ваші дані;',
            'обмежити використання або заперечити проти нього;',
            'отримати дані у придатному для перенесення форматі;',
            'відкликати згоду будь-коли.',
          ]},
          'Щоб скористатися будь-яким із цих прав, напишіть на <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>. Якщо вас не влаштовує, як ми поводимося з вашими даними, ви можете подати скаргу до Information Commissioner’s Office (ICO) на <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a>.',
        ]},
        { h: 'Діти', body: [
          'Цей сайт не призначений для дітей віком до 16 років, і ми свідомо не збираємо їхні персональні дані.',
        ]},
        { h: 'Зміни до цієї політики', body: [
          'Ми можемо час від часу оновлювати цю політику. Дата вгорі показує, коли її востаннє переглядали.',
        ]},
      ],
    },
  },

  cookies: {
    en: {
      seoTitle: 'Cookie Policy — Lena Filatova',
      seoDesc: 'How lenafilatova.co.uk uses cookies. We keep it minimal: an essential consent cookie and optional analytics only after you agree.',
      kicker: 'Legal',
      h1: 'Cookie Policy',
      updated: 'Last updated 10 July 2026',
      intro: 'This policy explains how <strong>lenafilatova.co.uk</strong> uses cookies and similar technologies. It should be read alongside our <a href="/privacy/">Privacy Policy</a>.',
      sections: [
        { h: 'What cookies are', body: [
          'Cookies are small text files placed on your device when you visit a website. They let a site remember your actions and preferences, and help owners understand how their site is used.',
        ]},
        { h: 'How we use cookies', body: [
          'We deliberately keep this to a minimum:',
          { ul: [
            '<strong>Essential</strong> — one cookie that remembers your cookie-consent choice, so we don’t ask on every page.',
            '<strong>Analytics (optional)</strong> — Google Analytics (GA4) helps us understand how the site is used. These are set <em>only</em> after you accept them.',
          ]},
          'We do <strong>not</strong> use advertising or cross-site tracking cookies.',
        ]},
        { h: 'Managing your consent', body: [
          'When you first visit, a banner lets you accept or decline analytics cookies. You can change your mind at any time by clearing cookies for this site in your browser, which will bring the banner back. Declining analytics does not affect your use of the site.',
        ]},
        { h: 'Third-party cookies', body: [
          'Our contact page includes a Google Calendar booking widget. If you interact with it to book a call, Google may set its own cookies. These are governed by Google’s own privacy and cookie policies.',
        ]},
        { h: 'Controlling cookies in your browser', body: [
          'All major browsers let you block or delete cookies through their settings. Doing so may affect how some websites work. Guidance for each browser is available on its help pages.',
        ]},
        { h: 'Changes and contact', body: [
          `We may update this policy from time to time. Questions? Email <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>. ${COMPANY_LINE}.`,
        ]},
      ],
    },
    ua: {
      seoTitle: 'Політика cookie — Лена Філатова',
      seoDesc: 'Як lenafilatova.co.uk використовує файли cookie. Мінімум: необхідний cookie згоди та опційна аналітика лише після вашої згоди.',
      kicker: 'Правова інформація',
      h1: 'Політика cookie',
      updated: 'Оновлено 10 липня 2026',
      intro: 'Ця політика пояснює, як <strong>lenafilatova.co.uk</strong> використовує файли cookie та подібні технології. Її слід читати разом із нашою <a href="/ua/privacy/">Політикою конфіденційності</a>.',
      sections: [
        { h: 'Що таке cookie', body: [
          'Cookie — це невеликі текстові файли, які зберігаються на вашому пристрої під час відвідування сайту. Вони дозволяють сайту запам’ятовувати ваші дії та налаштування й допомагають власникам розуміти, як використовується сайт.',
        ]},
        { h: 'Як ми використовуємо cookie', body: [
          'Ми свідомо зводимо це до мінімуму:',
          { ul: [
            '<strong>Необхідні</strong> — один cookie, який запам’ятовує ваш вибір щодо згоди, щоб ми не запитували на кожній сторінці.',
            '<strong>Аналітичні (опційні)</strong> — Google Analytics (GA4) допомагає зрозуміти, як використовується сайт. Вони встановлюються <em>лише</em> після вашої згоди.',
          ]},
          'Ми <strong>не</strong> використовуємо рекламні файли cookie чи міжсайтове відстеження.',
        ]},
        { h: 'Керування згодою', body: [
          'Під час першого візиту банер дозволяє прийняти або відхилити аналітичні cookie. Ви можете змінити рішення будь-коли, очистивши cookie цього сайту у своєму браузері — тоді банер з’явиться знову. Відмова від аналітики не впливає на користування сайтом.',
        ]},
        { h: 'Сторонні cookie', body: [
          'Сторінка контактів містить віджет бронювання Google Calendar. Якщо ви взаємодієте з ним, щоб записатися на дзвінок, Google може встановити власні cookie. Вони регулюються власними політиками Google щодо конфіденційності та cookie.',
        ]},
        { h: 'Керування cookie в браузері', body: [
          'Усі основні браузери дозволяють блокувати або видаляти cookie через налаштування. Це може вплинути на роботу деяких сайтів. Інструкції для кожного браузера доступні на його сторінках довідки.',
        ]},
        { h: 'Зміни та контакти', body: [
          `Ми можемо час від часу оновлювати цю політику. Питання? Пишіть на <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>. ${COMPANY_LINE_UA}.`,
        ]},
      ],
    },
  },

  terms: {
    en: {
      seoTitle: 'Terms & Conditions — Lena Filatova',
      seoDesc: 'The terms governing your use of lenafilatova.co.uk, including an important health and medical disclaimer.',
      kicker: 'Legal',
      h1: 'Terms & Conditions',
      updated: 'Last updated 10 July 2026',
      intro: 'These terms govern your use of <strong>lenafilatova.co.uk</strong>. By using the site you agree to them. Please read the health disclaimer below carefully.',
      sections: [
        { h: 'About us', body: [
          `The site is operated by ${COMPANY_LINE}. Contact: <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>.`,
        ]},
        { h: 'Using the website', body: [
          'You may use this site for your own personal, non-commercial use. Please don’t misuse it, attempt to disrupt it, or use it in any unlawful way.',
        ]},
        { h: 'Health disclaimer — please read', body: [
          'The content on this site — including articles, recipes, nutrition information and tools — is provided for <strong>general education and information only. It is not medical advice</strong> and is not a substitute for professional care.',
          'Using this site does not create a doctor–patient or clinician relationship. Always seek the advice of your GP or a qualified healthcare professional before making changes to your diet, exercise, medication or insulin, or if you have any concerns about a medical condition — this is especially important if you live with diabetes.',
          'Never disregard professional medical advice or delay seeking it because of something you have read here. <strong>In a medical emergency call 999</strong> (or your local emergency number); for urgent non-emergency advice in the UK call 111.',
        ]},
        { h: 'Recipes and nutrition information', body: [
          'Glycaemic index, carbohydrate and other nutritional figures are estimates and can vary with ingredients, brands and preparation. Individual responses differ. Please check ingredient labels for allergens and suitability for your own needs.',
        ]},
        { h: 'Intellectual property', body: [
          'All content on this site is owned by us or our licensors and is protected by copyright. You may view and download it for your own personal use, but you may not reproduce, republish or distribute it without our permission.',
        ]},
        { h: 'Paid services and products', body: [
          'Where we offer paid coaching or digital products, additional terms and our <a href="/refunds/">Refund & Cancellation Policy</a> apply. Full details are given at the point of purchase.',
        ]},
        { h: 'Links to other sites', body: [
          'This site may link to third-party websites. We provide those links for convenience and are not responsible for their content or practices.',
        ]},
        { h: 'Availability and changes', body: [
          'The site is provided on an “as is” basis. We may change, suspend or withdraw all or part of it at any time without notice.',
        ]},
        { h: 'Our liability', body: [
          'To the fullest extent permitted by law, we are not liable for any loss arising from your reliance on the educational content of this site. Nothing in these terms excludes or limits our liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be excluded.',
        ]},
        { h: 'Governing law', body: [
          'These terms are governed by the laws of England and Wales, and any disputes are subject to the courts of England and Wales.',
        ]},
      ],
    },
    ua: {
      seoTitle: 'Умови використання — Лена Філатова',
      seoDesc: 'Умови користування сайтом lenafilatova.co.uk, включно з важливою заявою про здоров’я та медичну інформацію.',
      kicker: 'Правова інформація',
      h1: 'Умови використання',
      updated: 'Оновлено 10 липня 2026',
      intro: 'Ці умови регулюють користування сайтом <strong>lenafilatova.co.uk</strong>. Користуючись сайтом, ви погоджуєтесь із ними. Будь ласка, уважно прочитайте заяву про здоров’я нижче.',
      sections: [
        { h: 'Про нас', body: [
          `Сайтом керує ${COMPANY_LINE_UA}. Контакт: <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>.`,
        ]},
        { h: 'Користування сайтом', body: [
          'Ви можете користуватися цим сайтом для власних особистих, некомерційних цілей. Будь ласка, не зловживайте ним, не намагайтеся порушити його роботу та не використовуйте незаконним чином.',
        ]},
        { h: 'Заява про здоров’я — прочитайте', body: [
          'Контент на цьому сайті — зокрема статті, рецепти, інформація про харчування та інструменти — надається <strong>лише для загальної освіти та інформації. Це не медична порада</strong> і не замінює професійну допомогу.',
          'Користування сайтом не створює відносин «лікар–пацієнт». Завжди звертайтеся до свого сімейного лікаря або кваліфікованого медичного фахівця, перш ніж змінювати харчування, фізичну активність, ліки чи інсулін, або якщо у вас є будь-які занепокоєння щодо стану здоров’я — це особливо важливо, якщо ви живете з діабетом.',
          'Ніколи не нехтуйте професійною медичною порадою та не відкладайте звернення по неї через щось прочитане тут. <strong>У разі невідкладного стану телефонуйте 999</strong> (або місцевий номер екстреної допомоги); для термінових неекстрених порад у Великій Британії телефонуйте 111.',
        ]},
        { h: 'Рецепти та інформація про харчування', body: [
          'Глікемічний індекс, вміст вуглеводів та інші показники харчування є приблизними й можуть змінюватися залежно від інгредієнтів, брендів і способу приготування. Індивідуальні реакції відрізняються. Будь ласка, перевіряйте етикетки на наявність алергенів і придатність для ваших потреб.',
        ]},
        { h: 'Інтелектуальна власність', body: [
          'Весь контент на цьому сайті належить нам або нашим ліцензіарам і захищений авторським правом. Ви можете переглядати й завантажувати його для власного особистого використання, але не можете відтворювати, повторно публікувати чи поширювати без нашого дозволу.',
        ]},
        { h: 'Платні послуги та продукти', body: [
          'Коли ми пропонуємо платний коучинг або цифрові продукти, застосовуються додаткові умови та наша <a href="/ua/refunds/">Політика повернення та скасування</a>. Повні деталі надаються на етапі покупки.',
        ]},
        { h: 'Посилання на інші сайти', body: [
          'Цей сайт може містити посилання на сторонні вебсайти. Ми надаємо їх для зручності й не відповідаємо за їхній вміст чи практики.',
        ]},
        { h: 'Доступність і зміни', body: [
          'Сайт надається на умовах «як є». Ми можемо змінювати, призупиняти або припиняти роботу всього сайту чи його частини будь-коли без попередження.',
        ]},
        { h: 'Наша відповідальність', body: [
          'У межах, дозволених законом, ми не несемо відповідальності за будь-які збитки, що виникли внаслідок вашої опори на освітній контент цього сайту. Ніщо в цих умовах не виключає й не обмежує нашу відповідальність за смерть чи травми, спричинені недбалістю, за шахрайство або за будь-що інше, що не може бути законно виключене.',
        ]},
        { h: 'Застосовне право', body: [
          'Ці умови регулюються законодавством Англії та Уельсу, а будь-які спори підлягають розгляду в судах Англії та Уельсу.',
        ]},
      ],
    },
  },

  refunds: {
    en: {
      seoTitle: 'Refund & Cancellation Policy — Lena Filatova',
      seoDesc: 'Our refund and cancellation terms for coaching sessions and digital products, in line with UK consumer law.',
      kicker: 'Legal',
      h1: 'Refund & Cancellation Policy',
      updated: 'Last updated 10 July 2026',
      intro: 'This policy applies to paid coaching sessions and digital products purchased from Selfound Ltd. <em>These offerings are in preparation; this policy will apply once they are available.</em> It sits alongside your rights under UK consumer law.',
      sections: [
        { h: 'Your statutory rights', body: [
          'Nothing in this policy affects your legal rights under the Consumer Contracts Regulations 2013 and the Consumer Rights Act 2015. For most purchases you have a 14-day cooling-off period, subject to the exceptions for digital content below.',
        ]},
        { h: 'Digital products and downloads', body: [
          'You have 14 days to cancel a digital product for a full refund — <strong>unless</strong> you have asked for immediate access and acknowledged that you lose this right once the download or streaming begins. We request that consent at checkout. If a product is faulty or not as described, you are entitled to a refund or replacement.',
        ]},
        { h: 'Coaching sessions', body: [
          { ul: [
            'Cancel or reschedule at least <strong>48 hours</strong> before your session for a full refund or a free reschedule.',
            'Within 48 hours, sessions are non-refundable, but we will try to offer one reschedule at our discretion.',
            'Missed sessions (no-shows) are non-refundable.',
          ]},
        ]},
        { h: 'Programmes and multi-session packages', body: [
          'For multi-session packages, the specific cancellation terms are set out at the point of purchase. Where a refund applies after a programme has started, it is normally calculated pro-rata for sessions not yet taken.',
        ]},
        { h: 'How to request a refund', body: [
          'Email <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a> with your order details within the relevant period. We aim to respond within 5 business days, and approved refunds are made to your original payment method within 14 days.',
        ]},
        { h: 'Exceptions', body: [
          'Digital content that you have already accessed or downloaded after waiving your cancellation right is non-refundable, except where it is faulty or not as described.',
        ]},
        { h: 'Contact', body: [
          `${COMPANY_LINE}. Questions about this policy? Email <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>.`,
        ]},
      ],
    },
    ua: {
      seoTitle: 'Політика повернення та скасування — Лена Філатова',
      seoDesc: 'Умови повернення коштів і скасування для коучингових сесій та цифрових продуктів відповідно до споживчого законодавства Великої Британії.',
      kicker: 'Правова інформація',
      h1: 'Повернення та скасування',
      updated: 'Оновлено 10 липня 2026',
      intro: 'Ця політика застосовується до платних коучингових сесій і цифрових продуктів, придбаних у Selfound Ltd. <em>Ці пропозиції готуються; політика набуде чинності, щойно вони стануть доступними.</em> Вона доповнює ваші права за споживчим законодавством Великої Британії.',
      sections: [
        { h: 'Ваші законні права', body: [
          'Ніщо в цій політиці не впливає на ваші законні права згідно з Consumer Contracts Regulations 2013 та Consumer Rights Act 2015. Для більшості покупок ви маєте 14-денний період на роздуми з урахуванням винятків для цифрового контенту нижче.',
        ]},
        { h: 'Цифрові продукти та завантаження', body: [
          'Ви маєте 14 днів, щоб скасувати цифровий продукт і отримати повне повернення — <strong>крім випадків</strong>, коли ви попросили негайний доступ і підтвердили, що втрачаєте це право, щойно почнеться завантаження або відтворення. Ми запитуємо цю згоду під час оформлення. Якщо продукт має дефект або не відповідає опису, ви маєте право на повернення коштів чи заміну.',
        ]},
        { h: 'Коучингові сесії', body: [
          { ul: [
            'Скасуйте або перенесіть сесію щонайменше за <strong>48 годин</strong> — і отримаєте повне повернення або безкоштовне перенесення.',
            'Протягом 48 годин до сесії кошти не повертаються, але ми намагатимемось запропонувати одне перенесення на власний розсуд.',
            'Пропущені сесії (неявка) не підлягають поверненню.',
          ]},
        ]},
        { h: 'Програми та пакети з кількох сесій', body: [
          'Для пакетів із кількох сесій конкретні умови скасування визначаються на етапі покупки. Якщо повернення застосовується після початку програми, воно зазвичай розраховується пропорційно до ще не проведених сесій.',
        ]},
        { h: 'Як подати запит на повернення', body: [
          'Напишіть на <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>, вказавши деталі замовлення, у відповідний період. Ми прагнемо відповісти протягом 5 робочих днів, а схвалені повернення здійснюються на ваш початковий спосіб оплати протягом 14 днів.',
        ]},
        { h: 'Винятки', body: [
          'Цифровий контент, до якого ви вже отримали доступ або який завантажили після відмови від права на скасування, не підлягає поверненню, окрім випадків дефекту чи невідповідності опису.',
        ]},
        { h: 'Контакти', body: [
          `${COMPANY_LINE_UA}. Питання щодо цієї політики? Пишіть на <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>.`,
        ]},
      ],
    },
  },

  accessibility: {
    en: {
      seoTitle: 'Accessibility Statement — Lena Filatova',
      seoDesc: 'Our commitment to making lenafilatova.co.uk usable for as many people as possible, aiming for WCAG 2.1 AA.',
      kicker: 'Legal',
      h1: 'Accessibility Statement',
      updated: 'Last updated 10 July 2026',
      intro: 'We want <strong>lenafilatova.co.uk</strong> to be usable and welcoming for as many people as possible, whatever their abilities or technology.',
      sections: [
        { h: 'Our commitment', body: [
          'We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA, and we treat accessibility as an ongoing part of how we build the site.',
        ]},
        { h: 'What we do', body: [
          { ul: [
            'Use clear, semantic HTML with a logical heading structure.',
            'Aim for sufficient colour contrast and readable font sizes.',
            'Keep the site navigable by keyboard.',
            'Make the layout responsive so it works on phones, tablets and desktops.',
            'Provide descriptive alternative text for meaningful images.',
          ]},
        ]},
        { h: 'Known limitations', body: [
          'Some third-party embeds — such as the Google Calendar booking widget — and some older content may not fully meet our standards. We are working to improve these over time.',
        ]},
        { h: 'Feedback and help', body: [
          'If you have trouble accessing any part of this site, or need information in a different format, email <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a> and we will help. We aim to respond within 5 business days.',
        ]},
        { h: 'Alternative formats', body: [
          'We are happy to provide the content of this site in another format on request wherever we reasonably can.',
        ]},
      ],
    },
    ua: {
      seoTitle: 'Заява про доступність — Лена Філатова',
      seoDesc: 'Наше прагнення зробити lenafilatova.co.uk зручним для якомога більшої кількості людей із орієнтиром на WCAG 2.1 AA.',
      kicker: 'Правова інформація',
      h1: 'Заява про доступність',
      updated: 'Оновлено 10 липня 2026',
      intro: 'Ми хочемо, щоб <strong>lenafilatova.co.uk</strong> був зручним і привітним для якомога більшої кількості людей, незалежно від їхніх можливостей чи технологій.',
      sections: [
        { h: 'Наше зобов’язання', body: [
          'Ми прагнемо відповідати Web Content Accessibility Guidelines (WCAG) 2.1 рівня AA і вважаємо доступність постійною частиною того, як створюємо сайт.',
        ]},
        { h: 'Що ми робимо', body: [
          { ul: [
            'Використовуємо зрозумілий, семантичний HTML із логічною структурою заголовків.',
            'Прагнемо достатнього контрасту кольорів і читабельного розміру шрифтів.',
            'Забезпечуємо навігацію сайтом за допомогою клавіатури.',
            'Робимо макет адаптивним, щоб він працював на телефонах, планшетах і комп’ютерах.',
            'Надаємо описовий альтернативний текст для змістовних зображень.',
          ]},
        ]},
        { h: 'Відомі обмеження', body: [
          'Деякі сторонні вставки — наприклад, віджет бронювання Google Calendar — і частина старішого контенту можуть не повністю відповідати нашим стандартам. Ми працюємо над їх покращенням.',
        ]},
        { h: 'Відгуки та допомога', body: [
          'Якщо у вас виникають труднощі з доступом до будь-якої частини сайту або потрібна інформація в іншому форматі, напишіть на <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>, і ми допоможемо. Ми прагнемо відповісти протягом 5 робочих днів.',
        ]},
        { h: 'Альтернативні формати', body: [
          'Ми з радістю надамо контент цього сайту в іншому форматі на запит, коли це можливо.',
        ]},
      ],
    },
  },
};
