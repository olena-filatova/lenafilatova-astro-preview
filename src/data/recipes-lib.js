// Server-side helpers shared by the recipe hub + detail template.
// Label maps mirror the originals (recipe.html + recipes/index.html); the
// JSON-LD builder is ported from Website/recipes/build-recipe-pages.mjs so the
// structured data is identical to the current live pages (+ HowToStep name/url).
export const SITE = 'https://lenafilatova.co.uk';

// Category label — singular (detail page) and plural (hub chips/cards).
export const CAT_PAGE = {
  main: { en: 'Main course', ua: 'Основна страва' }, dessert: { en: 'Dessert', ua: 'Десерт' },
  baking: { en: 'Baking', ua: 'Випічка' }, snack: { en: 'Snack', ua: 'Перекус' },
  breakfast: { en: 'Breakfast', ua: 'Сніданок' }, bread: { en: 'Bread', ua: 'Хліб' },
  sauce: { en: 'Sauce', ua: 'Соус' }, drink: { en: 'Drink', ua: 'Напій' },
};
export const CAT_HUB = {
  main: { en: 'Mains', ua: 'Основні' }, dessert: { en: 'Desserts', ua: 'Десерти' },
  baking: { en: 'Baking', ua: 'Випічка' }, snack: { en: 'Snacks', ua: 'Перекуси' },
  breakfast: { en: 'Breakfast', ua: 'Сніданки' }, bread: { en: 'Bread', ua: 'Хліб' },
  sauce: { en: 'Sauces', ua: 'Соуси' }, drink: { en: 'Drinks', ua: 'Напої' },
};
export const DIET = {
  'sugar-free': { en: 'Sugar-free', ua: 'Без цукру' }, 'gluten-free': { en: 'Gluten-free', ua: 'Без глютену' },
  'low-carb': { en: 'Low carb', ua: 'Низьковуглеводне' }, vegetarian: { en: 'Vegetarian', ua: 'Вегетаріанське' },
  'dairy-free': { en: 'Dairy-free', ua: 'Без молочного' },
};

export const isHeader = (s) => /^—/.test(s);
export const clip = (s, n) => { s = String(s).replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s; };

// GI band → { label, color } for the meta row + card pill.
export function giBand(gi, lang) {
  if (typeof gi !== 'number') return null;
  const label = gi <= 55 ? (lang === 'ua' ? 'Низький' : 'Low')
    : gi <= 69 ? (lang === 'ua' ? 'Середній' : 'Medium')
    : (lang === 'ua' ? 'Високий' : 'High');
  const color = gi <= 55 ? 'var(--green)' : gi <= 69 ? 'var(--amber)' : 'var(--accent)';
  return { label, color };
}

export const GI_DISCLAIMER = {
  en: 'Nutrition and glycaemic index (GI) values are estimates, calculated from the ingredients. Please double-check meals before cooking if it matters for your diet.',
  ua: 'Значення поживності та глікемічного індексу (ГІ) приблизні — розраховані з інгредієнтів. Будь ласка, перевіряйте страви перед приготуванням, якщо це важливо для вашого раціону.',
};

// Every recipe carries one primary `img`; `imgs` (optional) drives the slider.
export const imagesOf = (R) => (Array.isArray(R.imgs) && R.imgs.length ? R.imgs : [R.img]);

/* ---------- JSON-LD Recipe (ported from build-recipe-pages.mjs) ---------- */
const CAT_EN = { main: 'Main course', dessert: 'Dessert', baking: 'Baking', snack: 'Snack', breakfast: 'Breakfast', bread: 'Bread', sauce: 'Sauce', drink: 'Drink' };
const DIET_EN = { 'sugar-free': 'Sugar-free', 'gluten-free': 'Gluten-free', 'low-carb': 'Low carb', vegetarian: 'Vegetarian', 'dairy-free': 'Dairy-free' };
const DIET_SCHEMA = { 'gluten-free': 'GlutenFreeDiet', vegetarian: 'VegetarianDiet' };

const parseDur = (t) => { if (!t) return null; const m = String(t).match(/(\d+)\s*(min|хв|hour|hours|hr|год)/i); if (!m) return null; const n = +m[1]; return /min|хв/i.test(m[2]) ? `PT${n}M` : `PT${n}H`; };
const toMinutes = (t) => { if (!t) return 0; const s = String(t); const h = s.match(/(\d+)\s*(hour|hours|hr|год)/i); const m = s.match(/(\d+)\s*(min|хв)/i); return (h ? +h[1] * 60 : 0) + (m ? +m[1] : 0); };
const isoDuration = (mins) => { if (!mins) return null; const h = Math.floor(mins / 60), m = mins % 60; return 'PT' + (h ? `${h}H` : '') + (m ? `${m}M` : ''); };
function parseNutrition(t) {
  const s = String(t || ''); const num = (re) => { const m = s.match(re); return m ? m[1] : null; };
  const n = { calories: num(/([\d.]+)\s*kcal/i), carbs: num(/carbs?\s*([\d.]+)\s*g/i), fat: num(/fat\s*([\d.]+)\s*g/i), protein: num(/protein\s*([\d.]+)\s*g/i) };
  if (!n.calories && !n.carbs) return null;
  const out = { '@type': 'NutritionInformation' };
  if (n.calories) out.calories = `${n.calories} calories`;
  if (n.carbs) out.carbohydrateContent = `${n.carbs} g`;
  if (n.fat) out.fatContent = `${n.fat} g`;
  if (n.protein) out.proteinContent = `${n.protein} g`;
  return out;
}
// Short step name for HowToStep: text before a leading ':' (≤60), else first sentence, clipped.
function stepName(text) {
  const s = String(text).replace(/\s+/g, ' ').trim();
  const colon = s.indexOf(':');
  if (colon > 0 && colon <= 60) return s.slice(0, colon).trim();
  const m = s.match(/^(.+?[.!?])(?=\s|$)/);
  return clip(m ? m[1] : s, 60);
}

export function buildJsonLd(R, lang = 'en') {
  const imgs = imagesOf(R);
  const path = lang === 'ua' ? `${SITE}/ua/recipes/${R.slug}/` : `${SITE}/recipes/${R.slug}/`;
  const ld = {
    '@context': 'https://schema.org/', '@type': 'Recipe',
    name: R.title[lang],
    image: imgs.map((f) => `${SITE}/recipes/images/${f}`),
    author: { '@type': 'Person', name: 'Lena Filatova' },
    description: clip(R.why[lang], 300),
    recipeCategory: CAT_EN[R.cat] || R.cat,
    keywords: ['low GI', CAT_EN[R.cat] || R.cat, ...(R.tags || []).map((t) => DIET_EN[t] || t)].join(', '),
    recipeYield: R.meta?.serves?.[lang],
    recipeIngredient: (R.ingredients[lang] || []).filter((s) => !isHeader(s)),
    recipeInstructions: (R.method[lang] || []).map((s, i) => ({
      '@type': 'HowToStep', name: stepName(s), text: s, url: `${path}#step-${i + 1}`,
    })),
  };
  const pt = parseDur(R.meta?.prep?.[lang]), ct = parseDur(R.meta?.cook?.[lang]);
  if (pt) ld.prepTime = pt;
  if (ct) ld.cookTime = ct;
  const total = isoDuration(toMinutes(R.meta?.prep?.[lang]) + toMinutes(R.meta?.cook?.[lang]));
  if (total) ld.totalTime = total;
  const nutrition = parseNutrition(R.nutrition?.[lang]);
  if (nutrition) ld.nutrition = nutrition;
  ld.suitableForDiet = ['https://schema.org/DiabeticDiet',
    ...(R.tags || []).map((t) => DIET_SCHEMA[t]).filter(Boolean).map((d) => `https://schema.org/${d}`)];
  return ld;
}
