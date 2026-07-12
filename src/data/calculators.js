// The three embedded calculators (separate app: repo olena-filatova/helsico,
// served at calculator.lenafilatova.co.uk). Each loads a widget script that
// mounts into its data-attribute div in a Shadow DOM. Strings carried over
// verbatim from the Divhunt SPA's resourcesPage copy.
export const CALC_ORIGIN = 'https://calculator.lenafilatova.co.uk';

export const CALCULATORS = [
  {
    slug: 'food-calculator',
    script: `${CALC_ORIGIN}/widget.js`,
    mountAttr: 'data-metabolic-calculator',
    openUrl: CALC_ORIGIN,
    en: {
      seoTitle: 'Metabolic food calculator — blood sugar impact',
      seoDesc: "A free food calculator that estimates how meals affect your blood sugar and metabolism — practical guidance for women's health after 40.",
      title: 'Metabolic food calculator',
      sub: 'See how any food is likely to affect your blood sugar — glycaemic load, carbs, protein and more. Built for Type 1 diabetes, insulin resistance and PMOS (previously PCOS). Search a food and calculate; no sign-up needed.',
      openNew: 'Not loading? Open the calculator in a new tab',
      disclaimer: 'This calculator is for general information only — it is not a medical tool and does not give medical advice. Please consult your doctor or diabetes care team with any questions about your health.',
    },
    ua: {
      seoTitle: 'Калькулятор впливу їжі на метаболізм',
      seoDesc: 'Безкоштовний калькулятор, що оцінює, як їжа впливає на цукор у крові та метаболізм — практичні поради для жіночого здоров’я після 40.',
      title: 'Калькулятор впливу їжі на метаболізм',
      sub: 'Дізнайтеся, як конкретна їжа впливає на рівень цукру в крові — глікемічне навантаження, вуглеводи, білок тощо. Створено для діабету 1 типу, інсулінорезистентності та ПМОС (раніше СПКЯ). Знайдіть продукт і порахуйте; реєстрація не потрібна.',
      openNew: 'Не завантажується? Відкрийте калькулятор у новій вкладці',
      disclaimer: "Цей калькулятор надано лише для загальної інформації — це не медичний інструмент і він не надає медичних порад. З будь-якими питаннями щодо здоров'я звертайтеся до свого лікаря або команди з догляду за діабетом.",
    },
  },
  {
    slug: 'exercise-calculator',
    script: `${CALC_ORIGIN}/exercise-widget.js`,
    mountAttr: 'data-exercise-calculator',
    openUrl: CALC_ORIGIN,
    en: {
      seoTitle: 'Exercise & blood sugar calculator',
      seoDesc: "A free calculator that estimates how different types of exercise are likely to affect your blood sugar — practical guidance for women's health after 40.",
      title: 'Exercise & blood sugar calculator',
      sub: 'See how different types of movement are likely to affect your blood sugar — cardio, strength, walking and more. Built for Type 1 diabetes, insulin resistance and PMOS (previously PCOS). No sign-up needed.',
      openNew: 'Not loading? Open the calculator in a new tab',
      disclaimer: 'This calculator is for general information only — it is not a medical tool and does not give medical advice. Please consult your doctor or diabetes care team with any questions about your health.',
    },
    ua: {
      seoTitle: 'Калькулятор впливу фізичних навантажень на цукор',
      seoDesc: 'Безкоштовний калькулятор, що оцінює, як різні види руху впливають на рівень цукру в крові — практичні поради для жіночого здоров’я після 40.',
      title: 'Калькулятор впливу фізичних навантажень на цукор',
      sub: 'Дізнайтеся, як різні види руху впливають на рівень цукру в крові — кардіо, силові, ходьба тощо. Створено для діабету 1 типу, інсулінорезистентності та ПМОС (раніше СПКЯ). Реєстрація не потрібна.',
      openNew: 'Не завантажується? Відкрийте калькулятор у новій вкладці',
      disclaimer: "Цей калькулятор надано лише для загальної інформації — це не медичний інструмент і він не надає медичних порад. З будь-якими питаннями щодо здоров'я звертайтеся до свого лікаря або команди з догляду за діабетом.",
    },
  },
  {
    slug: 'insulin-pump-doses',
    script: `${CALC_ORIGIN}/pump-widget.js`,
    mountAttr: 'data-pump-calculator',
    openUrl: `${CALC_ORIGIN}/pump-calculator`,
    en: {
      seoTitle: 'Insulin pump starting-dose calculator',
      seoDesc: 'Estimate starting insulin pump settings — basal rate, carb ratio and correction factor — when switching from pens or starting a pump. Free, no sign-up.',
      title: 'Insulin pump starting-dose calculator',
      sub: 'Estimate starting pump settings — basal rate, carb ratio and correction factor — when switching from pens or starting a pump for the first time. Adjusts for age and activity level. Built for Type 1 diabetes. No sign-up needed.',
      openNew: 'Not loading? Open the calculator in a new tab',
      disclaimer: 'These are approximate starting estimates only — not medical advice. Never start or change insulin pump settings without your doctor or diabetes care team.',
    },
    ua: {
      seoTitle: 'Калькулятор стартових доз інсулінової помпи',
      seoDesc: 'Оцініть стартові налаштування помпи — базальну швидкість, вуглеводний коефіцієнт і фактор корекції — під час переходу зі шприц-ручок. Безкоштовно.',
      title: 'Калькулятор стартових доз інсулінової помпи',
      sub: 'Оцініть стартові налаштування помпи — базальну швидкість, вуглеводний коефіцієнт і фактор корекції — під час переходу зі шприц-ручок або на початку використання помпи. Враховує вік та рівень активності. Створено для діабету 1 типу. Реєстрація не потрібна.',
      openNew: 'Не завантажується? Відкрийте калькулятор у новій вкладці',
      disclaimer: 'Це лише приблизні стартові оцінки, а не медична порада. Ніколи не починайте та не змінюйте налаштування інсулінової помпи без консультації з лікарем або командою з догляду за діабетом.',
    },
  },
];

export const CALC_UI = {
  en: { back: 'All resources' },
  ua: { back: 'Усі ресурси' },
};
