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
