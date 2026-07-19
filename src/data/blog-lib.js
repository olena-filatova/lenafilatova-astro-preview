// Blog helpers: category filters, UI strings, inline-link rendering and
// per-post JSON-LD. Companion to blog.js (the content).

export const SITE = 'https://lenafilatova.co.uk';

// Filter chips on the blog index. `key` matches POSTS[].cats entries;
// a post may carry more than one key (e.g. perimenopause + diabetes).
export const CATS = [
  { key: 'diabetes', en: 'Diabetes', ua: 'Діабет' },
  { key: 'perimenopause', en: 'Perimenopause', ua: 'Перименопауза' },
  { key: 'nutrition', en: 'Nutrition', ua: 'Харчування' },
  { key: 'skin', en: 'Skin & beauty', ua: 'Краса та шкіра' },
  { key: 'weight', en: 'Weight loss', ua: 'Схуднення' },
];

export const UI = {
  en: {
    hubKicker: 'Journal',
    hubH1: 'Evidence-based notes on health after 40',
    hubLead: 'Research-backed articles on diabetes, perimenopause, nutrition and everything the two of them touch.',
    all: 'All',
    featured: 'Featured',
    latest: 'Latest',
    empty: 'No articles in this category yet — more are on the way.',
    byline: 'By Lena Filatova',
    readAlt: '🇺🇦 Читати українською',
    faqTitle: 'Frequently asked questions',
    refsNote: 'What the research says',
    comingSoonBadge: 'Coming soon',
    comingSoonNote: 'I’m still writing this one — the full guide will be here shortly. Thanks for your patience.',
    ctaTitle: 'Get the free guides',
    ctaBody: 'Science-backed notes on diabetes, perimenopause and life after 40 — plus free downloads.',
    ctaBtn: 'Subscribe',
    disclaimer: 'The information on this website is educational and is not medical advice. Please consult your doctor if you have any doubts or further questions.',
    backToBlog: '← All articles',
    relatedTitle: 'Keep reading',
  },
  ua: {
    hubKicker: 'Журнал',
    hubH1: 'Науково обґрунтовані нотатки про здоров’я після 40',
    hubLead: 'Статті, що спираються на дослідження: діабет, перименопауза, харчування — і все, що вони зачіпають.',
    all: 'Усі',
    featured: 'Обране',
    latest: 'Найновіше',
    empty: 'У цій категорії поки немає статей — скоро з’являться нові.',
    byline: 'Автор: Lena Filatova',
    readAlt: '🇬🇧 Read in English',
    faqTitle: 'Часті запитання',
    refsNote: 'Що кажуть дослідження',
    comingSoonBadge: 'Незабаром',
    comingSoonNote: 'Я ще працюю над цією статтею — повний гайд з’явиться тут найближчим часом. Дякую за терпіння.',
    ctaTitle: 'Отримайте безкоштовні гайди',
    ctaBody: 'Науково обґрунтовані нотатки про діабет, перименопаузу та життя після 40 — плюс безкоштовні файли.',
    ctaBtn: 'Підписатися',
    disclaimer: 'Інформація на цьому вебсайті має освітній характер і не є медичною порадою. Зверніться до лікаря в разі сумнівів або додаткових запитань.',
    backToBlog: '← Усі статті',
    relatedTitle: 'Читайте також',
  },
};

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Article paragraphs carry markdown-style [text](url) links. Internal hrefs
// (/blog/…, /ua/blog/…) get the deploy base prefixed; external ones open in
// a new tab with the same ↗ affordance as the live standalone pages.
export function renderInline(text, base = '/') {
  return escapeHtml(text).replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    if (href.startsWith('/')) {
      const local = base.replace(/\/$/, '') + href;
      return `<a href="${local}">${label}</a>`;
    }
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
  });
}

// Related posts for the bottom of an article: posts sharing a category come
// first (more shared categories win), newest first within a tier, topped up
// with other recent posts so there are always `limit` cards. The current post
// and the coming-soon stub are excluded.
export function relatedPosts(post, posts, limit = 3) {
  const cats = new Set(post.cats || []);
  return posts
    .filter((p) => p.slug !== post.slug && !p.comingSoon)
    .map((p) => ({ p, shared: (p.cats || []).filter((c) => cats.has(c)).length }))
    .sort((x, y) => y.shared - x.shared || y.p.date.localeCompare(x.p.date))
    .slice(0, limit)
    .map((x) => x.p);
}

export const langUrl = (lang, slug) =>
  `${SITE}${lang === 'ua' ? '/ua' : ''}/blog/${slug}/`;

// Mirrors the JSON-LD the prerendered standalone pages shipped:
// Article + BreadcrumbList (+ FAQPage when the post has an FAQ).
export function buildJsonLd(post, lang) {
  const a = post[lang];
  const url = langUrl(lang, post.slug);
  const graph = [
    {
      '@type': 'Article',
      headline: a.seoTitle || a.title,
      description: a.metaDesc || a.excerpt,
      articleSection: post.en.cat,
      inLanguage: lang === 'ua' ? 'uk' : 'en',
      image: SITE + post.image,
      mainEntityOfPage: url,
      datePublished: post.date,
      author: { '@type': 'Person', name: 'Lena Filatova' },
      publisher: { '@type': 'Organization', name: 'Lena Filatova', url: SITE },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: lang === 'ua' ? 'Головна' : 'Home', item: SITE + (lang === 'ua' ? '/ua/' : '/') },
        { '@type': 'ListItem', position: 2, name: lang === 'ua' ? 'Журнал' : 'Journal', item: `${SITE}${lang === 'ua' ? '/ua' : ''}/blog/` },
        { '@type': 'ListItem', position: 3, name: a.title, item: url },
      ],
    },
  ];
  if (a.faq && a.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: a.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
