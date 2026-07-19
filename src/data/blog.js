// Blog posts — the full article content for every post, EN + UA.
// Extracted from the live Divhunt SPA (CONTENT.en.articles / CONTENT.ua.articles
// in the old repo's index.html), which was the single source of truth for both
// the SPA blog and the prerendered standalone pages.
//
// Shape: { slug, date, image, cats: [filter keys], comingSoon?, en: {...}, ua: {...} }
// Article body is a list of typed blocks:
//   p (inline [text](url) links) · h · quote · img/graph (src, alt, cap) ·
//   table (head, rows) · refs (claim, detail, cite, url) · links (name, url, desc) ·
//   bio (name, img, alt, text)
// Category filter keys/labels live in blog-lib.js (CATS).

export const POSTS = [
  {
    "slug": "menstrual-blood-research-medicine",
    "date": "2026-07-19",
    "image": "/images/menstrual-blood-research-medicine.png",
    "cats": [
      "perimenopause",
      "diabetes"
    ],
    "en": {
      "cat": "Women's Health & Research",
      "title": "What menstrual blood is teaching modern medicine",
      "seoTitle": "Menstrual Blood in Research & Medicine: Tests, Stem Cells & Autoimmune Clues",
      "metaDesc": "A verified guide to how menstrual blood is used in real medicine: an FDA-cleared diabetes test, stem-cell research, and non-invasive clues to endometriosis and autoimmune disease.",
      "excerpt": "A sample medicine spent centuries discarding is now an FDA-cleared diabetes test, a renewable source of stem cells, and a rare non-invasive window onto the immune system — including autoimmune disease.",
      "meta": "19 July 2026 · 9 min read",
      "lead": "For most of history, menstrual blood was treated as waste — something to absorb, hide and throw away. In the last few years, researchers have started treating it as the opposite: one of the richest, most accessible samples the female body offers. Here's what it's already doing in medicine, and the autoimmune clues scientists are only beginning to read.",
      "blocks": [
        {
          "t": "p",
          "text": "I'll be honest about why this caught my attention. I've lived with type 1 diabetes for 23 years, so I've given more blood samples than I can count — fingertips, veins, the lot. The idea that some of that testing could one day happen from a sample I already produce every month, with no needle at all, is genuinely exciting to me. But hope and hype sit close together in women's health, so I've tried to separate what is actually approved and published from what is still a promise."
        },
        {
          "t": "p",
          "text": "It helps to know that menstrual blood is not simply blood. Collected in the first day or so of a period, it carries shed cells from the endometrium — the lining of the uterus — along with immune cells, stem cells and, by one count, more than 350 proteins not found in ordinary circulating blood. That mix is exactly why it is useful in three very different ways: as a non-invasive diagnostic sample, as a renewable source of stem cells, and as a window onto the immune system."
        },
        {
          "t": "h",
          "text": "A diabetes test that reads a pad, not a needle"
        },
        {
          "t": "p",
          "text": "The clearest real-world example arrived in January 2024, when a company called Qvin received FDA clearance for the Q-Pad — the first test authorised to measure HbA1c from menstrual blood. It looks like an ordinary pad, but it holds a small collection strip; you wear it, remove the strip and post it to a lab, which reads your average blood sugar over the previous three months. No finger-prick, no blood draw."
        },
        {
          "t": "p",
          "text": "For anyone living with diabetes, HbA1c is the number that shapes every appointment, and I've watched mine be taken by needle for two decades. In Qvin's validation work, the pad-collected results tracked venous blood closely — correlation coefficients as high as 0.96 and a mean bias under 1%. The clearance is narrow for now (A1c only), but the company is researching the same approach for anaemia, thyroid health, fertility, endometriosis and perimenopause — conditions where women are often under-tested precisely because testing is inconvenient."
        },
        {
          "t": "h",
          "text": "A renewable source of stem cells"
        },
        {
          "t": "p",
          "text": "The second use is more experimental but, to me, more astonishing. In 2007, scientists showed that the endometrial cells shed in menstrual blood include mesenchymal stem cells — now usually called menstrual blood-derived stem cells, or MenSCs. Unlike bone-marrow stem cells, which need a painful, invasive extraction, these can be collected non-invasively, month after month, from something the body discards anyway. They multiply quickly in the lab and provoke relatively little immune reaction."
        },
        {
          "t": "p",
          "text": "In animal and early laboratory studies, MenSCs have been tested against a long list of conditions — liver disease, heart damage, stroke, wounds that won't heal — and, close to my own heart, type 1 diabetes. In one 2022 study, transplanting these cells into diabetic mice improved their symptoms and protected their organs, performing on par with the umbilical-cord stem cells researchers already use. It is important to be clear: this is mouse work, not an approved treatment, and the road from a promising rodent study to a therapy for people is long and littered with failures. But the source itself — accessible, renewable, ethically uncomplicated — is what keeps this field moving."
        },
        {
          "t": "h",
          "text": "The autoimmune connection — what the research actually shows"
        },
        {
          "t": "p",
          "text": "You asked specifically about autoimmune disease, and it is a good instinct, because this is where menstrual blood gets most interesting. Start with a stark fact: [roughly 80% of people with autoimmune conditions are women](https://www.scientificamerican.com/article/why-nearly-80-percent-of-autoimmune-sufferers-are-female/), who carry up to four times the risk men do. The reasons are still being untangled — sex hormones, and increasingly the X chromosome itself — but the upshot is that autoimmunity is, disproportionately, a women's health problem. And menstrual blood is a sample only women produce, packed with the very immune cells involved."
        },
        {
          "t": "p",
          "text": "Two threads are worth watching. The first is that MenSCs don't just regenerate tissue — they calm the immune system, dampening overactive T cells and B cells. In a mouse model of multiple sclerosis (experimental autoimmune encephalomyelitis), menstrual blood-derived cells eased the disease specifically by inhibiting T-cell activation. That same immune-modulating property is why mesenchymal stem cells more broadly are being trialled in lupus, rheumatoid arthritis and type 1 diabetes — all conditions where the immune system attacks the body's own tissue."
        },
        {
          "t": "p",
          "text": "The second thread is diagnostic, and it runs through endometriosis — a disease that affects roughly one in ten women, takes seven to ten years to diagnose, and shares many features with autoimmune conditions, including the broad T- and B-cell activation doctors use to define autoimmunity. At the Feinstein Institutes in New York, the long-running ROSE study (Research OutSmarts Endometriosis), led by Christine Metz and the autoimmunity geneticist Peter Gregersen, is analysing menstrual effluent cell by cell, using single-cell RNA sequencing, to build a non-invasive test that could replace diagnostic surgery. Related work now uses the immune profile of the endometrium to [assess women with systemic autoimmune diseases such as lupus before they try to conceive](https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2023.1334231/full)."
        },
        {
          "t": "p",
          "text": "None of this means menstrual blood is a magic key to autoimmune disease. But it gives researchers something they have rarely had: repeated, low-cost, non-invasive access to immune cells from the exact population most affected."
        },
        {
          "t": "h",
          "text": "The honest caveats"
        },
        {
          "t": "p",
          "text": "Because this is women's health, and because I've been burned by overselling before, here is the sober version. Only one menstrual-blood test is FDA-cleared, and only for HbA1c; the endometriosis tests are still in research, not on pharmacy shelves. The stem-cell therapies are overwhelmingly preclinical — cells in dishes and studies in mice, not proven treatments you can ask for. Be wary of any clinic already selling menstrual stem cell cures; the science isn't there yet. What is real is the direction of travel, and it is genuinely promising."
        },
        {
          "t": "h",
          "text": "Why a discarded sample matters so much"
        },
        {
          "t": "p",
          "text": "The thread running through this whole journal is that women's health after 40 — and women's health generally — has been under-studied for a long time. Part of the reason is practical: research needs samples, and samples usually mean needles, clinics and cost. Menstrual blood quietly removes that barrier. A sample most of us have spent our lives throwing away turns out to be a monthly, needle-free readout of metabolism, hormones and immunity. If even a fraction of this research delivers, the humble period could become one of the most useful diagnostic tools we have — and, for once, one built entirely around the female body."
        },
        {
          "t": "links",
          "title": "Where to follow this research",
          "items": [
            {
              "name": "Qvin — the Q-Pad",
              "url": "https://qvin.com/",
              "desc": "The company behind the Q-Pad, the first FDA-cleared test to measure HbA1c from menstrual blood, with more biomarkers in development."
            },
            {
              "name": "ROSE study — Feinstein Institutes",
              "url": "https://feinstein.northwell.edu/institutes-researchers/institute-molecular-medicine/robert-s-boas-center-for-genomics-and-human-genetics/rose-research-outsmarts-endometriosis",
              "desc": "A decade-long study using menstrual effluent and single-cell sequencing to build a non-invasive test for endometriosis and understand its biology."
            },
            {
              "name": "Endometriosis Foundation of America",
              "url": "https://www.endofound.org/",
              "desc": "Plain-language research updates on endometriosis, including the menstrual-blood diagnostic work, plus patient support resources."
            }
          ]
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "p",
          "text": "This is a fast-moving field, so here is where the evidence stands today — what is approved, what is published, and what is still confined to the lab."
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "A menstrual pad can now measure blood sugar — the first FDA-cleared test of its kind.",
              "detail": "In January 2024, Qvin received FDA clearance for the Q-Pad, which measures HbA1c from self-collected menstrual blood with no needle. In validation studies its results tracked standard venous blood closely, with correlation coefficients up to 0.96 and a mean bias under 1%.",
              "cite": "Qvin · PR Newswire, January 2024",
              "url": "https://www.prnewswire.com/news-releases/qvin-introduces-q-pad-transforming-womens-health-with-fda-cleared-lab-testing-using-menstrual-blood-302027835.html"
            },
            {
              "claim": "Menstrual blood contains stem cells that can be collected without a needle.",
              "detail": "First described in 2007, menstrual blood-derived stem cells (MenSCs) are mesenchymal stem cells from the shed uterine lining. They are abundant, easy to grow, low in immunogenicity and collected non-invasively — practical advantages over bone-marrow sources.",
              "cite": "Stem Cell Research & Therapy · review of MenSCs in regenerative medicine",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6318883/"
            },
            {
              "claim": "In diabetic mice, menstrual blood stem cells improved symptoms and protected organs.",
              "detail": "A 2022 study transplanted MenSCs into mice with streptozotocin-induced type 1 diabetes; the cells improved the disease and protected major organs, performing comparably to umbilical-cord stem cells. This is preclinical (animal) work, not an approved therapy.",
              "cite": "World Journal of Stem Cells, 2022;14(1):104–116",
              "url": "https://pubmed.ncbi.nlm.nih.gov/35126831/"
            },
            {
              "claim": "The same cells eased a multiple-sclerosis-like disease by calming T cells.",
              "detail": "In a mouse model of MS (experimental autoimmune encephalomyelitis), menstrual blood-derived cells reduced disease severity specifically by inhibiting T-cell activation — the immunomodulatory property also being explored in lupus, rheumatoid arthritis and type 1 diabetes.",
              "cite": "Stem Cell Research & Therapy, 2022",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8995916/"
            },
            {
              "claim": "Menstrual blood is being used to build a non-invasive endometriosis test.",
              "detail": "The ROSE study at the Feinstein Institutes analyses menstrual effluent with single-cell RNA sequencing to distinguish endometriosis from healthy tissue, aiming to replace diagnostic surgery and shorten the typical seven-to-ten-year delay. Endometriosis shares several features with autoimmune disease.",
              "cite": "Feinstein Institutes for Medical Research · ROSE study",
              "url": "https://feinstein.northwell.edu/institutes-researchers/institute-molecular-medicine/robert-s-boas-center-for-genomics-and-human-genetics/rose-research-outsmarts-endometriosis"
            }
          ]
        },
        {
          "t": "p",
          "text": "I'll keep an eye on this as the trials and tests mature. For now, the take-home is simple: the next time you're told there is not enough research on women's bodies, know that some scientists have found their answer in the one sample medicine spent centuries ignoring."
        }
      ],
      "faq": [
        {
          "q": "Can menstrual blood really be used for medical tests?",
          "a": "Yes — one test is already FDA-cleared. Qvin's Q-Pad, cleared in 2024, measures HbA1c (average blood sugar) from blood collected on a modified pad, with no needle. Researchers are studying the same non-invasive approach for anaemia, thyroid health, fertility, endometriosis and perimenopause, though those uses are not approved yet."
        },
        {
          "q": "What are menstrual blood stem cells (MenSCs)?",
          "a": "They are mesenchymal stem cells found in the endometrial tissue shed during a period, first identified in 2007. They can be collected non-invasively and grown easily in the lab, which makes them an attractive research tool. So far they have mostly been tested in animals — for liver, heart, wound and type 1 diabetes models — not in approved human therapies."
        },
        {
          "q": "Is there a link between menstrual blood research and autoimmune disease?",
          "a": "There are two. First, menstrual blood-derived stem cells calm overactive immune cells and have eased a multiple-sclerosis-like disease in mice by inhibiting T cells — the same property being explored for lupus, rheumatoid arthritis and type 1 diabetes. Second, menstrual blood is being used to study and diagnose endometriosis, which shares many features with autoimmune disease. Since about 80% of autoimmune patients are women, a female-specific, non-invasive sample is especially valuable."
        },
        {
          "q": "Can menstrual blood diagnose endometriosis?",
          "a": "Not yet in routine practice, but it is close. The ROSE study at the Feinstein Institutes is analysing menstrual effluent with single-cell sequencing to build a non-invasive test that could replace diagnostic surgery — potentially cutting the current seven-to-ten-year diagnostic delay. It is still in research."
        },
        {
          "q": "Are menstrual stem cell treatments available now?",
          "a": "No. Despite promising animal studies, no MenSC therapy is approved, and the only cleared menstrual-blood test measures HbA1c. Be cautious of any clinic advertising menstrual stem cell cures — the evidence is not there yet. Always discuss options with a qualified doctor."
        }
      ]
    },
    "ua": {
      "cat": "Жіноче здоров'я та дослідження",
      "title": "Чого менструальна кров вчить сучасну медицину",
      "seoTitle": "Менструальна кров у дослідженнях і медицині: тести, стовбурові клітини, автоімунні хвороби",
      "metaDesc": "Перевірений путівник тим, як менструальну кров використовують у реальній медицині: схвалений FDA тест на діабет, дослідження стовбурових клітин і неінвазивні підказки щодо ендометріозу та автоімунних хвороб.",
      "excerpt": "Зразок, який медицина століттями викидала, тепер є схваленим FDA тестом на діабет, відновлюваним джерелом стовбурових клітин і рідкісним неінвазивним вікном до імунної системи — зокрема автоімунних хвороб.",
      "meta": "19 липня 2026 · 9 хв читання",
      "lead": "Упродовж майже всієї історії менструальну кров вважали відходами — чимось, що треба увібрати, сховати й викинути. За останні кілька років дослідники почали ставитися до неї навпаки: як до одного з найбагатших і найдоступніших зразків, які дає жіноче тіло. Ось що вона вже робить у медицині — і які автоімунні підказки науковці лише починають розгадувати.",
      "blocks": [
        {
          "t": "p",
          "text": "Скажу чесно, чому це привернуло мою увагу. Я живу з діабетом 1 типу вже 23 роки, тож здала більше зразків крові, ніж можу порахувати — з пальця, з вени, яких тільки не було. Думка про те, що частина цих аналізів колись могла б робитися зі зразка, який моє тіло й так виділяє щомісяця, узагалі без голки, мене справді захоплює. Але у сфері жіночого здоров'я надія й ажіотаж стоять поруч, тож я намагалася відокремити те, що справді схвалене й опубліковане, від того, що поки лишається обіцянкою."
        },
        {
          "t": "p",
          "text": "Варто знати, що менструальна кров — це не просто кров. Зібрана в перший день менструації чи близько того, вона несе злущені клітини ендометрія — вистилки матки — разом з імунними клітинами, стовбуровими клітинами і, за одним підрахунком, понад 350 білками, яких немає у звичайній циркулюючій крові. Саме ця суміш і робить її корисною у трьох дуже різних напрямах: як неінвазивний діагностичний зразок, як відновлюване джерело стовбурових клітин і як вікно до імунної системи."
        },
        {
          "t": "h",
          "text": "Тест на діабет, що зчитує прокладку, а не голку"
        },
        {
          "t": "p",
          "text": "Найяскравіший приклад із реального життя з'явився в січні 2024 року, коли компанія Qvin отримала схвалення FDA для Q-Pad — першого тесту, дозволеного для вимірювання HbA1c із менструальної крові. Він має вигляд звичайної прокладки, але містить невелику смужку для збору; ви носите її, виймаєте смужку й надсилаєте до лабораторії, яка визначає ваш середній цукор за попередні три місяці. Без проколу пальця, без забору крові з вени."
        },
        {
          "t": "p",
          "text": "Для будь-кого, хто живе з діабетом, HbA1c — це показник, довкола якого будується кожен прийом, і я двадцять років спостерігала, як його беруть голкою. У валідаційних дослідженнях Qvin результати, зібрані прокладкою, тісно збігалися з венозною кров'ю — коефіцієнти кореляції сягали 0,96, а середнє відхилення було менше 1%. Наразі дозвіл вузький (лише A1c), але компанія досліджує той самий підхід для анемії, здоров'я щитоподібної залози, фертильності, ендометріозу та перименопаузи — станів, за яких жінок часто недообстежують саме тому, що аналізи незручні."
        },
        {
          "t": "h",
          "text": "Відновлюване джерело стовбурових клітин"
        },
        {
          "t": "p",
          "text": "Друге застосування експериментальніше, але, як на мене, ще дивовижніше. У 2007 році науковці показали, що клітини ендометрія, які злущуються в менструальну кров, містять мезенхімальні стовбурові клітини — тепер їх зазвичай називають стовбуровими клітинами з менструальної крові, або MenSC. На відміну від стовбурових клітин кісткового мозку, які потребують болісного інвазивного забору, ці можна збирати неінвазивно, місяць за місяцем, із того, що тіло й так відкидає. Вони швидко розмножуються в лабораторії й викликають відносно слабку імунну реакцію."
        },
        {
          "t": "p",
          "text": "У дослідженнях на тваринах і ранніх лабораторних роботах MenSC вивчали при цілій низці станів — хворобах печінки, ушкодженні серця, інсульті, ранах, що не гояться, — і, що особливо близьке мені, діабеті 1 типу. В одному дослідженні 2022 року пересадка цих клітин мишам із діабетом покращила їхні симптоми й захистила органи, спрацювавши нарівні з клітинами пуповини, які дослідники вже використовують. Тут треба бути відвертою: це робота на мишах, а не схвалене лікування, і шлях від перспективного дослідження на гризунах до терапії для людей довгий і всіяний невдачами. Але саме джерело — доступне, відновлюване, без етичних ускладнень — і рухає цю галузь уперед."
        },
        {
          "t": "h",
          "text": "Автоімунний зв'язок — що насправді показують дослідження"
        },
        {
          "t": "p",
          "text": "Ви запитали саме про автоімунні хвороби — і не дарма, бо саме тут менструальна кров стає найцікавішою. Почнімо з разючого факту: [приблизно 80% людей з автоімунними станами — жінки](https://www.scientificamerican.com/article/why-nearly-80-percent-of-autoimmune-sufferers-are-female/), які мають до чотирьох разів вищий ризик, ніж чоловіки. Причини ще розплутують — статеві гормони, а дедалі частіше й сама Х-хромосома, — але висновок такий: автоімунні хвороби вражають переважно жінок. А менструальна кров — це зразок, який утворюють лише жінки, наповнений саме тими імунними клітинами, які беруть у цьому участь."
        },
        {
          "t": "p",
          "text": "Варто стежити за двома напрямами. Перший: MenSC не лише відновлюють тканини — вони заспокоюють імунну систему, гальмуючи надмірно активні T- і B-клітини. У мишачій моделі розсіяного склерозу (експериментальний автоімунний енцефаломієліт) клітини з менструальної крові полегшили хворобу саме через пригнічення активації T-клітин. Ця сама здатність модулювати імунітет і є причиною, чому мезенхімальні стовбурові клітини загалом випробовують при вовчаку, ревматоїдному артриті та діабеті 1 типу — усіх станах, за яких імунна система атакує власні тканини організму."
        },
        {
          "t": "p",
          "text": "Другий напрям — діагностичний, і він проходить через ендометріоз — хворобу, яка вражає приблизно одну з десяти жінок, діагностується по сім–десять років і має багато спільного з автоімунними станами, зокрема ту широку активацію T- і B-клітин, якою лікарі визначають автоімунність. У Feinstein Institutes у Нью-Йорку багаторічне дослідження ROSE (Research OutSmarts Endometriosis) під керівництвом Крістін Метц і генетика автоімунності Пітера Ґреґерсена аналізує менструальні виділення клітину за клітиною, за допомогою одноклітинного секвенування РНК, щоб створити неінвазивний тест, який міг би замінити діагностичну операцію. Суміжні дослідження тепер використовують імунний профіль ендометрія, щоб [оцінювати жінок із системними автоімунними хворобами, як-от вовчак, перш ніж вони спробують завагітніти](https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2023.1334231/full)."
        },
        {
          "t": "p",
          "text": "Ніщо з цього не означає, що менструальна кров — чарівний ключ до автоімунних хвороб. Але вона дає дослідникам те, чого вони рідко мали: повторюваний, дешевий, неінвазивний доступ до імунних клітин саме тієї популяції, яка страждає найбільше."
        },
        {
          "t": "h",
          "text": "Чесні застереження"
        },
        {
          "t": "p",
          "text": "Оскільки це жіноче здоров'я і оскільки мене вже колись обпікали надмірні обіцянки, ось тверезий погляд. Схвалений FDA лише один тест на основі менструальної крові, і лише для HbA1c; тести на ендометріоз досі в дослідженнях, а не на аптечних полицях. Терапії стовбуровими клітинами переважно доклінічні — клітини в чашках і дослідження на мишах, а не доведений метод лікування, який можна отримати. Остерігайтеся будь-якої клініки, що вже продає «лікування менструальними стовбуровими клітинами»; науки для цього поки немає. Що справді реальне — це напрям руху, і він по-справжньому багатообіцяючий."
        },
        {
          "t": "h",
          "text": "Чому викинутий зразок так багато важить"
        },
        {
          "t": "p",
          "text": "Наскрізна ідея всього цього журналу — у тому, що жіноче здоров'я після 40 — та й жіноче здоров'я взагалі — довго було недостатньо вивченим. Почасти причина суто практична: дослідженням потрібні зразки, а зразки зазвичай означають голки, клініки й витрати. Менструальна кров тихо усуває цей бар'єр. Зразок, який більшість із нас усе життя викидала, виявляється щомісячним джерелом даних про обмін речовин, гормони та імунітет — без жодної голки. Якщо здійсниться бодай частина цих досліджень, звичайна менструація може стати одним із найкорисніших діагностичних інструментів, які ми маємо, — і, нарешті, побудованим цілком навколо жіночого тіла."
        },
        {
          "t": "links",
          "title": "Де стежити за цими дослідженнями",
          "items": [
            {
              "name": "Qvin — Q-Pad",
              "url": "https://qvin.com/",
              "desc": "Компанія, що створила Q-Pad — перший схвалений FDA тест для вимірювання HbA1c із менструальної крові, з іншими біомаркерами в розробці."
            },
            {
              "name": "Дослідження ROSE — Feinstein Institutes",
              "url": "https://feinstein.northwell.edu/institutes-researchers/institute-molecular-medicine/robert-s-boas-center-for-genomics-and-human-genetics/rose-research-outsmarts-endometriosis",
              "desc": "Десятирічне дослідження, що використовує менструальні виділення й одноклітинне секвенування, щоб створити неінвазивний тест на ендометріоз і зрозуміти його біологію."
            },
            {
              "name": "Endometriosis Foundation of America",
              "url": "https://www.endofound.org/",
              "desc": "Зрозумілі оновлення досліджень щодо ендометріозу, зокрема діагностичної роботи з менструальною кров'ю, а також ресурси підтримки пацієнток."
            }
          ]
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "p",
          "text": "Це галузь, що швидко рухається, тож ось де стоять докази сьогодні — що схвалене, що опубліковане, а що поки лишається в лабораторії."
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Менструальна прокладка тепер може вимірювати цукор у крові — перший схвалений FDA тест такого роду.",
              "detail": "У січні 2024 року Qvin отримала схвалення FDA для Q-Pad, який вимірює HbA1c із самостійно зібраної менструальної крові без голки. У валідаційних дослідженнях його результати тісно збігалися зі звичайною венозною кров'ю — коефіцієнти кореляції до 0,96 і середнє відхилення менше 1%.",
              "cite": "Qvin · PR Newswire, січень 2024",
              "url": "https://www.prnewswire.com/news-releases/qvin-introduces-q-pad-transforming-womens-health-with-fda-cleared-lab-testing-using-menstrual-blood-302027835.html"
            },
            {
              "claim": "Менструальна кров містить стовбурові клітини, які можна зібрати без голки.",
              "detail": "Уперше описані у 2007 році, стовбурові клітини з менструальної крові (MenSC) — це мезенхімальні стовбурові клітини зі злущеної вистилки матки. Вони численні, легко ростуть, мають низьку імуногенність і збираються неінвазивно — практичні переваги над джерелами з кісткового мозку.",
              "cite": "Stem Cell Research & Therapy · огляд MenSC у регенеративній медицині",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6318883/"
            },
            {
              "claim": "У мишей із діабетом стовбурові клітини з менструальної крові покращили симптоми й захистили органи.",
              "detail": "У дослідженні 2022 року MenSC пересадили мишам зі стрептозотоцин-індукованим діабетом 1 типу; клітини покращили перебіг хвороби й захистили основні органи, спрацювавши порівнянно з клітинами пуповини. Це доклінічна (на тваринах) робота, а не схвалена терапія.",
              "cite": "World Journal of Stem Cells, 2022;14(1):104–116",
              "url": "https://pubmed.ncbi.nlm.nih.gov/35126831/"
            },
            {
              "claim": "Ті самі клітини полегшили хворобу, подібну до розсіяного склерозу, заспокоївши T-клітини.",
              "detail": "У мишачій моделі РС (експериментальний автоімунний енцефаломієліт) клітини з менструальної крові зменшили тяжкість хвороби саме через пригнічення активації T-клітин — ту саму імуномодулювальну властивість, яку досліджують при вовчаку, ревматоїдному артриті та діабеті 1 типу.",
              "cite": "Stem Cell Research & Therapy, 2022",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8995916/"
            },
            {
              "claim": "Менструальну кров використовують, щоб створити неінвазивний тест на ендометріоз.",
              "detail": "Дослідження ROSE у Feinstein Institutes аналізує менструальні виділення за допомогою одноклітинного секвенування РНК, щоб відрізнити ендометріоз від здорової тканини, прагнучи замінити діагностичну операцію й скоротити типову затримку в сім–десять років. Ендометріоз має кілька спільних рис з автоімунними хворобами.",
              "cite": "Feinstein Institutes for Medical Research · дослідження ROSE",
              "url": "https://feinstein.northwell.edu/institutes-researchers/institute-molecular-medicine/robert-s-boas-center-for-genomics-and-human-genetics/rose-research-outsmarts-endometriosis"
            }
          ]
        },
        {
          "t": "p",
          "text": "Я стежитиму за цим, поки дослідження й тести дозрівають. Наразі висновок простий: наступного разу, коли вам скажуть, що досліджень про жіноче тіло замало, знайте, що деякі науковці знайшли свою відповідь в одному зразку, який медицина століттями ігнорувала."
        }
      ],
      "faq": [
        {
          "q": "Чи справді менструальну кров можна використовувати для медичних аналізів?",
          "a": "Так — один тест уже схвалений FDA. Q-Pad від Qvin, схвалений у 2024 році, вимірює HbA1c (середній цукор у крові) із крові, зібраної на модифіковану прокладку, без голки. Дослідники вивчають той самий неінвазивний підхід для анемії, здоров'я щитоподібної залози, фертильності, ендометріозу та перименопаузи, хоча ці застосування ще не схвалені."
        },
        {
          "q": "Що таке стовбурові клітини з менструальної крові (MenSC)?",
          "a": "Це мезенхімальні стовбурові клітини, що містяться в тканині ендометрія, яка злущується під час менструації, вперше виявлені у 2007 році. Їх можна збирати неінвазивно й легко вирощувати в лабораторії, що робить їх привабливим інструментом для досліджень. Досі їх переважно перевіряли на тваринах — у моделях печінки, серця, ран і діабету 1 типу, — а не у схвалених терапіях для людей."
        },
        {
          "q": "Чи є зв'язок між дослідженнями менструальної крові та автоімунними хворобами?",
          "a": "Так, навіть два. По-перше, стовбурові клітини з менструальної крові заспокоюють надмірно активні імунні клітини й полегшили хворобу, подібну до розсіяного склерозу, у мишей, пригнічуючи T-клітини — ту саму властивість досліджують при вовчаку, ревматоїдному артриті та діабеті 1 типу. По-друге, менструальну кров використовують, щоб вивчати й діагностувати ендометріоз, який має багато спільного з автоімунними хворобами. Оскільки близько 80% пацієнтів з автоімунними станами — жінки, специфічний для жінок неінвазивний зразок особливо цінний."
        },
        {
          "q": "Чи можна діагностувати ендометріоз за менструальною кров'ю?",
          "a": "Поки що не в рутинній практиці, але це близько. Дослідження ROSE у Feinstein Institutes аналізує менструальні виділення за допомогою одноклітинного секвенування, щоб створити неінвазивний тест, який міг би замінити діагностичну операцію — потенційно скоротивши нинішню затримку діагнозу в сім–десять років. Це досі на стадії досліджень."
        },
        {
          "q": "Чи доступне лікування стовбуровими клітинами з менструальної крові вже зараз?",
          "a": "Ні. Попри перспективні дослідження на тваринах, жодна терапія MenSC не схвалена, а єдиний дозволений тест на основі менструальної крові вимірює HbA1c. Будьте обережні з будь-якою клінікою, що рекламує «лікування менструальними стовбуровими клітинами» — доказів для цього поки немає. Завжди обговорюйте варіанти з кваліфікованим лікарем."
        }
      ]
    }
  },
  {
    "slug": "type-1-diabetes-cure-trials",
    "date": "2026-07-19",
    "image": "/images/type-1-diabetes-cure-trials.jpg",
    "cats": [
      "diabetes"
    ],
    "en": {
      "cat": "Diabetes",
      "title": "Type 1 diabetes cure research: the trials worth following in 2026",
      "seoTitle": "Type 1 Diabetes Cure Trials to Follow in 2026",
      "metaDesc": "A plain-English, verified guide to the most promising type 1 diabetes cure and disease-modifying trials in 2026 — what they are, who can join, and how to follow them.",
      "excerpt": "For the first time, people in trials are living without insulin for years. Here's an honest, verified map of the type 1 cure research worth following — and how to follow or join it.",
      "meta": "19 July 2026 · 11 min read",
      "lead": "A cure for type 1 diabetes has been “five years away” for as long as many of us have lived with it. But something has genuinely shifted. For the first time, people in trials are living without insulin — not for a week, but for years. Here is an honest map of the research actually worth following, and how to follow or even join it yourself.",
      "blocks": [
        {
          "t": "p",
          "text": "I want to be careful with the word “cure,” because hope is precious and it has been sold cheaply before. So let me be clear about what this article is. It is not a promise. Most experimental treatments never reach the clinic, and timelines slip. But the research has reached a point that genuinely deserves your attention — and, if you choose, your participation."
        },
        {
          "t": "p",
          "text": "To make sense of it, it helps to know that type 1 diabetes is really two problems at once. First, the immune system mistakenly destroys the beta cells in the pancreas that make insulin. Second, once those cells are gone, the body can no longer control blood sugar on its own. A true cure has to answer both — and the trials below split neatly into the strategies that tackle each side."
        },
        {
          "t": "p",
          "text": "There are three broad approaches. Replace the lost cells (with transplanted or lab-grown insulin-making cells). Calm or retrain the immune attack (so it stops destroying beta cells). Or protect the cells someone still has, especially right after diagnosis. Some of the most exciting work combines them."
        },
        {
          "t": "h",
          "text": "The trials, side by side"
        },
        {
          "t": "p",
          "text": "Below is a filterable tracker of the most notable programmes. Tap any card to open the full detail — what it is, who can take part (including age), results so far, the honest pros and cons, and a link to the official study on ClinicalTrials.gov. Filter by country, whether it's recruiting, whether it's free to join, interventional or observational, approach or phase — and open the glossary if a term is new. It also includes free screening studies (like TrialNet and the UK's ELSA) that are often the first step to taking part. Every fact here was checked against the trial registry and sponsor reports in July 2026."
        },
        {
          "t": "embed",
          "src": "/t1d-cure-trials.html",
          "title": "Type 1 diabetes cure trials tracker",
          "minHeight": 680,
          "cap": "Filterable tracker of type 1 diabetes cure and disease-modifying trials. Educational only — details change often, so always confirm on the study's official page and with your diabetes team."
        },
        {
          "t": "h",
          "text": "Replacing the cells: the closest thing to a functional cure"
        },
        {
          "t": "p",
          "text": "The furthest-advanced programme is Vertex's zimislecel (VX-880), now in a Phase 3 study called FORWARD. It infuses lab-grown, insulin-making islet cells into the liver's blood supply. The early results are the kind we have waited decades for: of the first 12 patients followed for a year, the company reports that 10 came off insulin completely, and all reached healthy blood-sugar targets and stopped having severe hypos. It builds on the same principle as the [donor islet cell transplants that have quietly restored insulin independence](/blog/islet-transplant-insulin-independence/) in a small number of people."
        },
        {
          "t": "p",
          "text": "There is one large catch, and it applies to almost every cell-replacement approach: recipients must take immune-suppressing drugs for life so the body doesn't reject or re-attack the new cells. Those drugs carry real risks, which is why, for now, these trials are limited to people whose diabetes is hardest to manage — usually severe, unpredictable hypoglycaemia."
        },
        {
          "t": "p",
          "text": "That is exactly why two other efforts matter so much. A University of Chicago study pairs an islet transplant with a gentler antibody called tegoprubart instead of the usual harsh anti-rejection drugs — and reports that all 12 recipients so far are insulin-independent. And in Sweden, Sana Biotechnology's team gene-edited donor islet cells to “hide” from the immune system and placed them in one patient with no anti-rejection drugs at all; the cells survived and made insulin for over a year. That single patient, published in a top medical journal, is a proof of principle that could eventually remove the immunosuppression problem entirely."
        },
        {
          "t": "p",
          "text": "One more milestone is worth knowing: in China, doctors reprogrammed a woman's own fat cells into stem cells, turned them into islets, and transplanted them — no donor needed. She became insulin-independent and stayed that way at one year. It was a single case (and she was already on immune-suppressing drugs from an earlier transplant), but using a person's own cells is a genuine step toward sidestepping both the donor shortage and rejection."
        },
        {
          "t": "h",
          "text": "Calming the immune attack"
        },
        {
          "t": "p",
          "text": "The other half of the field tries to stop the immune system attacking beta cells in the first place. This is where the only approved disease-modifying treatment lives: teplizumab (TZIELD). In people at high risk — found through antibody screening, often relatives of someone with type 1 — a two-week course delays the onset of full diabetes by about two years on average. As of April 2026 it is approved in the US from age 1. It does not cure or prevent, but it is the first drug ever shown to change the course of type 1, and it is available now."
        },
        {
          "t": "p",
          "text": "Several others are following. Sanofi's frexalimab and, notably, an existing arthritis tablet called baricitinib both aim to protect the insulin a newly-diagnosed person still has. Baricitinib is especially interesting because it is a cheap, daily pill rather than an infusion, and its Phase 2 results were strong enough to publish in the New England Journal of Medicine; a Phase 3 is now recruiting. Sweden's Diamyd takes a precision route — a lymph-node “vaccine” that only works in people with a particular gene type. And in Poland, PolTREG is testing whether a child's own calming immune cells can prevent type 1 before it ever starts."
        },
        {
          "t": "h",
          "text": "The honest part: what has recently failed"
        },
        {
          "t": "p",
          "text": "Trust matters more than hype, so here is the other side. In 2025, Vertex's VX-264 — an encapsulated cell therapy designed to avoid immunosuppression — was discontinued after it didn't produce enough insulin. The immunotherapy IMCY-0098 was stopped for lack of effect. And the definitive adult trial of verapamil, a blood-pressure drug once hoped to preserve beta cells, came back negative (an earlier study in children had shown a modest signal, so the idea isn't fully dead — but the big adult trial did not work)."
        },
        {
          "t": "p",
          "text": "Two long-running approaches remain genuinely contested. The repeat BCG vaccine work and “Stem Cell Educator” therapy both have loyal followings and years of small studies, but their claims have not been independently reproduced, and mainstream diabetes researchers urge real caution. I have included both in the tracker with clear warnings, because you deserve to see them and to see why experts are sceptical — not to have them quietly left out."
        },
        {
          "t": "h",
          "text": "How to actually follow — or join — a trial"
        },
        {
          "t": "p",
          "text": "If a programme interests you, here is how to go further. Every entry in the tracker links to its official page on [ClinicalTrials.gov](https://clinicaltrials.gov/), the public registry — search the NCT number to see live recruiting status, the exact eligibility criteria, and the contact details for each site. “Recruiting” means they are actively enrolling; “active, not recruiting” means the group is full."
        },
        {
          "t": "p",
          "text": "A few practical notes. Many prevention and early-intervention trials (including the path to teplizumab) start with autoantibody screening, which relatives of people with type 1 can often get free through research programmes like TrialNet and, in Europe, ELSA. Trials have strict criteria — age, how long you've had diabetes, how much of your own insulin is left — so don't be discouraged if one doesn't fit; another may. And never stop or change your current treatment for a trial without your diabetes team; bring the study's page to your appointment and decide together."
        },
        {
          "t": "p",
          "text": "For the bigger picture on where diabetes science is heading — including how the field is starting to treat these as several different diseases rather than one — you might also find my note on [what new research says about type 2 diabetes](/blog/type-2-diabetes-research/) useful."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Lab-grown islet cells (zimislecel) freed most early patients from insulin.",
              "detail": "In Vertex's Phase 1/2 data presented in June 2025, all 12 patients followed for at least a year reached target HbA1c and time-in-range and eliminated severe hypoglycaemia, with 10 of 12 fully insulin-independent. This is company-reported data from an ongoing trial, not yet an approved therapy.",
              "cite": "ClinicalTrials.gov · FORWARD study (NCT04786262)",
              "url": "https://clinicaltrials.gov/study/NCT04786262"
            },
            {
              "claim": "Teplizumab is the first and only approved treatment that changes the course of type 1 diabetes.",
              "detail": "In at-risk (stage 2) people it delays clinical onset by roughly two years; the PROTECT trial also showed it preserves insulin production in the newly diagnosed. US approval was expanded to age 1 and older in April 2026.",
              "cite": "ClinicalTrials.gov · PROTECT (NCT03875729)",
              "url": "https://clinicaltrials.gov/study/NCT03875729"
            },
            {
              "claim": "A daily arthritis tablet, baricitinib, preserved insulin production after diagnosis.",
              "detail": "The BANDIT Phase 2 trial, published in the New England Journal of Medicine in December 2023, found that people taking baricitinib kept significantly more of their own insulin at 48 weeks, with lower insulin needs and better time-in-range. A Phase 3 is now recruiting.",
              "cite": "ClinicalTrials.gov · BANDIT (NCT04774224)",
              "url": "https://clinicaltrials.gov/study/NCT04774224"
            },
            {
              "claim": "Gene-edited islet cells survived in a patient with no immunosuppression.",
              "detail": "A first-in-human report from Sweden using Sana's hypoimmune technology found that donor islet cells edited to evade the immune system survived and produced insulin for over a year in one patient without any anti-rejection drugs — a proof of concept, not yet insulin independence.",
              "cite": "Sana Biotechnology · reported in the New England Journal of Medicine",
              "url": "https://ir.sana.com/news-releases"
            },
            {
              "claim": "A person's own reprogrammed cells reversed their type 1 diabetes for a year.",
              "detail": "In a single published case from Tianjin, China, a woman's own cells were reprogrammed into insulin-making islets and transplanted; she became insulin-independent from day 75 and remained so at one year.",
              "cite": "Cell · Case report, September 2024",
              "url": "https://www.cell.com/cell/fulltext/S0092-8674(24)01022-5"
            }
          ]
        },
        {
          "t": "links",
          "title": "Where to look for trials and screening",
          "items": [
            {
              "name": "ClinicalTrials.gov",
              "url": "https://clinicaltrials.gov/",
              "desc": "The public registry of clinical trials worldwide. Search a study's NCT number (in the tracker above) to see live recruiting status, full eligibility and site contacts."
            },
            {
              "name": "Breakthrough T1D — clinical trials",
              "url": "https://www.breakthfound.org/",
              "desc": "The major type 1 research charity (formerly JDRF). Explains current trials in plain language and helps people find studies they may be eligible for."
            },
            {
              "name": "TrialNet — free autoantibody screening",
              "url": "https://www.trialnet.org/",
              "desc": "Relatives of people with type 1 can get free screening to find early-stage type 1 — the entry point for many prevention trials, including teplizumab."
            },
            {
              "name": "Diabetes UK — research",
              "url": "https://www.diabetes.org.uk/research",
              "desc": "UK-focused, evidence-based updates on diabetes research, plus a helpline on 0345 123 2399."
            }
          ]
        },
        {
          "t": "p",
          "text": "I will keep this tracker updated as trials read out and new ones open. After more than two decades of “five years away,” I am not going to promise you a date. But for the first time, I can point to real people, in real trials, living without insulin — and tell you exactly where to look."
        }
      ],
      "faq": [
        {
          "q": "Is there a cure for type 1 diabetes yet?",
          "a": "Not an approved, widely-available cure. But for the first time, people in trials have lived without insulin for years after receiving lab-grown or transplanted insulin-making cells, and one approved drug (teplizumab) can delay the disease in at-risk people. These are real, verified milestones — but most are still experimental, limited to small numbers, and often require lifelong anti-rejection drugs."
        },
        {
          "q": "Which trial is closest to becoming available?",
          "a": "Vertex's zimislecel (VX-880) is the furthest along — it is in Phase 3, with early patients coming off insulin. Vertex has said it aims to begin regulatory submissions in 2026, but nothing has been filed yet, so a realistic best case is around 2027 or later if the bigger trial succeeds. Teplizumab, which delays rather than cures, is already approved and available in the US."
        },
        {
          "q": "Can I join a type 1 diabetes trial?",
          "a": "Possibly. Each trial has strict criteria — age, how long you've had diabetes, how much of your own insulin remains, and where you live. Use the tracker above to find studies that fit, click through to ClinicalTrials.gov for live recruiting status and contacts, and discuss any trial with your diabetes team before doing anything. Relatives of people with type 1 can also get free autoantibody screening through TrialNet or ELSA, which opens the door to prevention trials."
        },
        {
          "q": "Do cell-replacement cures require lifelong anti-rejection drugs?",
          "a": "For now, most do — including the furthest-advanced programme, because the body would otherwise reject or re-attack the new cells. That's why these trials are currently limited to people with the hardest-to-manage diabetes. The most exciting newer work (gene-edited “hidden” cells and a person's own reprogrammed cells) is specifically trying to remove that requirement, but it is still very early."
        },
        {
          "q": "What about teplizumab — how do I get it?",
          "a": "Teplizumab (TZIELD) is approved in the US for stage 2 type 1 — people who have the autoantibodies and early blood-sugar changes but not yet full diabetes, from age 1. It is usually reached through autoantibody screening (often offered free to relatives of someone with type 1) and given as a roughly two-week course of infusions. Speak to an endocrinologist about screening and eligibility."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "Дослідження щодо лікування діабету 1 типу: які дослідження варто стежити у 2026 році",
      "seoTitle": "Лікування діабету 1 типу: дослідження 2026",
      "metaDesc": "Зрозумілий, перевірений путівник найперспективнішими дослідженнями щодо лікування діабету 1 типу у 2026 році — що це, хто може взяти участь і як за ними стежити.",
      "excerpt": "Уперше люди в дослідженнях живуть без інсуліну роками. Ось чесна, перевірена карта досліджень щодо лікування діабету 1 типу — і як за ними стежити чи долучитися.",
      "meta": "19 липня 2026 · 11 хв читання",
      "lead": "Ліки від діабету 1 типу були «за п’ять років від нас» стільки, скільки багато хто з нас із ним живе. Але щось справді змінилося. Уперше люди в дослідженнях живуть без інсуліну — не тиждень, а роками. Ось чесна карта досліджень, за якими справді варто стежити, і як за ними стежити чи навіть долучитися.",
      "blocks": [
        {
          "t": "p",
          "text": "Я хочу бути обережною зі словом «ліки», бо надія — цінна, а її вже не раз продавали дешево. Тож скажу чітко, що це за стаття. Це не обіцянка. Більшість експериментальних методів так і не доходять до клініки, а терміни зсуваються. Але дослідження дійшли точки, яка справді заслуговує вашої уваги — і, якщо захочете, вашої участі."
        },
        {
          "t": "p",
          "text": "Щоб у цьому зорієнтуватися, варто знати, що діабет 1 типу — це насправді дві проблеми водночас. По-перше, імунна система помилково руйнує бета-клітини підшлункової залози, які виробляють інсулін. По-друге, коли цих клітин більше немає, тіло вже не може саме керувати цукром. Справжнє лікування має відповісти на обидві частини — і дослідження нижче акуратно поділяються на стратегії, що працюють із кожною з них."
        },
        {
          "t": "p",
          "text": "Є три широкі підходи. Замінити втрачені клітини (пересадженими або вирощеними в лабораторії клітинами, що виробляють інсулін). Заспокоїти або перенавчити імунну атаку (щоб вона перестала руйнувати бета-клітини). Або захистити ті клітини, які в людини ще є, особливо одразу після діагнозу. Найцікавіші роботи поєднують ці підходи."
        },
        {
          "t": "h",
          "text": "Дослідження поруч"
        },
        {
          "t": "p",
          "text": "Нижче — трекер із фільтрами найпомітніших програм. Натисніть на будь-яку картку, щоб відкрити повні деталі — що це, хто може взяти участь (зокрема вік), результати наразі, чесні плюси й мінуси та посилання на офіційне дослідження на ClinicalTrials.gov. Фільтруйте за країною, статусом набору, безкоштовністю, типом (інтервенційне чи спостережне), підходом або фазою — і відкрийте глосарій, якщо якийсь термін новий. Трекер також містить безкоштовні скринінгові дослідження (як-от TrialNet і британське ELSA), які часто є першим кроком до участі. Кожен факт тут перевірений за реєстром досліджень і звітами спонсорів у липні 2026 року."
        },
        {
          "t": "embed",
          "src": "/t1d-cure-trials-ua.html",
          "title": "Трекер досліджень щодо лікування діабету 1 типу",
          "minHeight": 680,
          "cap": "Трекер із фільтрами досліджень щодо лікування та зміни перебігу діабету 1 типу. Лише для інформації — деталі часто змінюються, тож завжди перевіряйте на офіційній сторінці дослідження та зі своєю діабетичною командою."
        },
        {
          "t": "h",
          "text": "Заміна клітин: найближче до функціонального зцілення"
        },
        {
          "t": "p",
          "text": "Найбільш просунута програма — це зиміслецел (VX-880) від Vertex, зараз у дослідженні Фази 3 під назвою FORWARD. Воно вводить у кровотік печінки вирощені в лабораторії острівцеві клітини, що виробляють інсулін. Ранні результати — саме такі, на які ми чекали десятиліттями: із перших 12 пацієнтів, за якими спостерігали рік, компанія повідомляє, що 10 повністю відмовилися від інсуліну, а всі досягли здорових показників цукру й перестали мати тяжкі гіпоглікемії. Це спирається на той самий принцип, що й [трансплантація донорських острівцевих клітин, яка тихо повернула інсулінонезалежність](/blog/islet-transplant-insulin-independence/) кільком людям."
        },
        {
          "t": "p",
          "text": "Є одне велике «але», і воно стосується майже кожного підходу із заміною клітин: реципієнти мають довічно приймати препарати, що пригнічують імунітет, аби тіло не відторгло й не атакувало нові клітини. Ці препарати мають реальні ризики, тому наразі ці дослідження обмежені людьми, чий діабет найважче контролювати — зазвичай через тяжкі, непередбачувані гіпоглікемії."
        },
        {
          "t": "p",
          "text": "Саме тому так важливі два інші напрями. Дослідження Університету Чикаго поєднує трансплантацію острівців із м’якшим антитілом під назвою теґопрубарт замість звичних жорстких препаратів проти відторгнення — і повідомляє, що всі 12 реципієнтів наразі інсулінонезалежні. А у Швеції команда Sana Biotechnology генетично відредагувала донорські острівцеві клітини, щоб вони «ховалися» від імунної системи, і вмістила їх одному пацієнту без жодних препаратів проти відторгнення; клітини вижили й виробляли інсулін понад рік. Цей один пацієнт, описаний у провідному медичному журналі, — це доказ принципу, який згодом міг би взагалі зняти проблему пригнічення імунітету."
        },
        {
          "t": "p",
          "text": "Ще одна віха варта уваги: у Китаї лікарі перепрограмували власні жирові клітини жінки на стовбурові, перетворили їх на острівці й трансплантували — без донора. Вона стала інсулінонезалежною й лишалася такою на першому році. Це був одиничний випадок (і вона вже приймала препарати проти відторгнення після попередньої трансплантації), але використання власних клітин людини — це справжній крок до того, щоб обійти й дефіцит донорів, і відторгнення."
        },
        {
          "t": "h",
          "text": "Як заспокоїти імунну атаку"
        },
        {
          "t": "p",
          "text": "Інша половина галузі намагається взагалі зупинити атаку імунної системи на бета-клітини. Саме тут — єдина схвалена терапія, що змінює перебіг хвороби: теплізумаб (TZIELD). У людей із високим ризиком — яких виявляють через скринінг на антитіла, часто родичів людини з діабетом 1 типу — двотижневий курс відкладає початок повного діабету в середньому приблизно на два роки. З квітня 2026 року він схвалений у США від 1 року. Він не виліковує й не запобігає, але це перший препарат, який доведено змінює перебіг діабету 1 типу, і він доступний уже зараз."
        },
        {
          "t": "p",
          "text": "За ним йдуть інші. Фрексалімаб від Sanofi і, що показово, уже наявна таблетка від артриту під назвою барицитиніб — обидва мають на меті захистити той інсулін, який людина з нещодавнім діагнозом ще має. Барицитиніб особливо цікавий, бо це дешева щоденна таблетка, а не інфузія, і його результати Фази 2 виявилися достатньо вагомими, щоб опублікувати їх у New England Journal of Medicine; зараз триває набір на Фазу 3. Шведська Diamyd обрала точковий шлях — «вакцину» у лімфовузол, яка працює лише в людей із певним типом гена. А в Польщі PolTREG перевіряє, чи можуть власні заспокійливі імунні клітини дитини запобігти діабету 1 типу ще до його початку."
        },
        {
          "t": "h",
          "text": "Чесна частина: що нещодавно зазнало невдачі"
        },
        {
          "t": "p",
          "text": "Довіра важливіша за галас, тож ось інша сторона. У 2025 році VX-264 від Vertex — інкапсульовану клітинну терапію, розроблену, щоб уникнути пригнічення імунітету — припинили після того, як вона не дала достатньо інсуліну. Імунотерапію IMCY-0098 зупинили через відсутність ефекту. А вирішальне доросле дослідження верапамілу, препарату від тиску, на який колись покладали надію щодо збереження бета-клітин, дало негативний результат (раніше дослідження в дітей показало скромний сигнал, тож ідея не зовсім мертва — але велике доросле дослідження не спрацювало)."
        },
        {
          "t": "p",
          "text": "Два тривалі підходи залишаються справді суперечливими. Робота з повторною вакциною БЦЖ і терапія «Stem Cell Educator» мають відданих прихильників і роки невеликих досліджень, але їхні твердження не відтворені незалежно, і провідні дослідники діабету закликають до справжньої обережності. Я включила обидва в трекер із чіткими попередженнями, бо ви заслуговуєте їх бачити й розуміти, чому експерти скептичні, — а не щоб їх тихо оминули."
        },
        {
          "t": "h",
          "text": "Як справді стежити — або долучитися до дослідження"
        },
        {
          "t": "p",
          "text": "Якщо якась програма вас зацікавила, ось як рухатися далі. Кожен пункт у трекері посилається на його офіційну сторінку на [ClinicalTrials.gov](https://clinicaltrials.gov/), публічному реєстрі — шукайте номер NCT, щоб побачити актуальний статус набору, точні критерії участі та контакти кожного центру. «Набір триває» означає, що вони активно набирають учасників; «активне, без набору» — що група вже заповнена."
        },
        {
          "t": "p",
          "text": "Кілька практичних нотаток. Багато профілактичних досліджень і досліджень раннього втручання (зокрема шлях до теплізумабу) починаються зі скринінгу на автоантитіла, який родичі людей із діабетом 1 типу часто можуть пройти безкоштовно через дослідницькі програми на кшталт TrialNet, а в Європі — ELSA. У досліджень суворі критерії — вік, скільки часу ви маєте діабет, скільки власного інсуліну залишилося — тож не варто знеохочуватися, якщо одне не підходить; може підійти інше. І ніколи не припиняйте й не змінюйте нинішнє лікування заради дослідження без своєї діабетичної команди; принесіть сторінку дослідження на прийом і вирішуйте разом."
        },
        {
          "t": "p",
          "text": "Щоб побачити ширшу картину того, куди рухається наука про діабет, вам може бути корисною й моя нотатка про те, [що каже нове дослідження про діабет 2 типу](/blog/type-2-diabetes-research/)."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Вирощені в лабораторії острівцеві клітини (зиміслецел) звільнили більшість перших пацієнтів від інсуліну.",
              "detail": "За даними Vertex Фази 1/2, представленими у червні 2025 року, усі 12 пацієнтів, за якими спостерігали щонайменше рік, досягли цільових HbA1c і часу в діапазоні та позбулися тяжких гіпоглікемій, а 10 із 12 повністю інсулінонезалежні. Це дані компанії з дослідження, що триває, а не схвалена терапія.",
              "cite": "ClinicalTrials.gov · FORWARD (NCT04786262)",
              "url": "https://clinicaltrials.gov/study/NCT04786262"
            },
            {
              "claim": "Теплізумаб — перша й єдина схвалена терапія, що змінює перебіг діабету 1 типу.",
              "detail": "У людей із ризиком (стадія 2) він відкладає клінічний початок приблизно на два роки; дослідження PROTECT також показало, що він зберігає вироблення інсуліну в людей із нещодавнім діагнозом. У квітні 2026 року схвалення у США розширили до віку від 1 року.",
              "cite": "ClinicalTrials.gov · PROTECT (NCT03875729)",
              "url": "https://clinicaltrials.gov/study/NCT03875729"
            },
            {
              "claim": "Щоденна таблетка від артриту, барицитиніб, зберегла вироблення інсуліну після діагнозу.",
              "detail": "Дослідження BANDIT Фази 2, опубліковане в New England Journal of Medicine у грудні 2023 року, виявило, що люди на барицитинібі зберегли значно більше власного інсуліну на 48-му тижні. Зараз триває набір на Фазу 3.",
              "cite": "ClinicalTrials.gov · BANDIT (NCT04774224)",
              "url": "https://clinicaltrials.gov/study/NCT04774224"
            },
            {
              "claim": "Генетично відредаговані острівцеві клітини вижили в пацієнта без пригнічення імунітету.",
              "detail": "Звіт уперше на людині зі Швеції із технологією Sana виявив, що донорські острівцеві клітини, відредаговані, щоб уникати імунної системи, вижили й виробляли інсулін понад рік в одного пацієнта без жодних препаратів проти відторгнення — це доказ принципу, а не ще інсулінонезалежність.",
              "cite": "Sana Biotechnology · за даними New England Journal of Medicine",
              "url": "https://ir.sana.com/news-releases"
            },
            {
              "claim": "Власні перепрограмовані клітини людини повернули діабет 1 типу на рік.",
              "detail": "У опублікованому окремому випадку з Тяньцзіня (Китай) власні клітини жінки перепрограмували на острівці, що виробляють інсулін, і трансплантували; вона стала інсулінонезалежною з 75-го дня й лишалася такою на першому році.",
              "cite": "Cell · Опис випадку, вересень 2024",
              "url": "https://www.cell.com/cell/fulltext/S0092-8674(24)01022-5"
            }
          ]
        },
        {
          "t": "links",
          "title": "Де шукати дослідження та скринінг",
          "items": [
            {
              "name": "ClinicalTrials.gov",
              "url": "https://clinicaltrials.gov/",
              "desc": "Публічний реєстр клінічних досліджень у світі. Шукайте номер NCT дослідження (із трекера вище), щоб побачити актуальний статус набору, повні критерії та контакти центрів."
            },
            {
              "name": "Breakthrough T1D — клінічні дослідження",
              "url": "https://www.breakthfound.org/",
              "desc": "Провідна благодійна організація з досліджень діабету 1 типу (колишня JDRF). Пояснює поточні дослідження зрозумілою мовою."
            },
            {
              "name": "TrialNet — безкоштовний скринінг на антитіла",
              "url": "https://www.trialnet.org/",
              "desc": "Родичі людей із діабетом 1 типу можуть пройти безкоштовний скринінг, щоб виявити ранню стадію діабету 1 типу — вхід до багатьох профілактичних досліджень."
            },
            {
              "name": "Diabetes UK — дослідження",
              "url": "https://www.diabetes.org.uk/research",
              "desc": "Науково обґрунтовані оновлення про дослідження діабету (Велика Британія)."
            }
          ]
        },
        {
          "t": "p",
          "text": "Я оновлюватиму цей трекер, коли дослідження даватимуть результати й відкриватимуться нові. Після понад двох десятиліть «за п’ять років від нас» я не обіцятиму вам дати. Але вперше я можу вказати на реальних людей у реальних дослідженнях, які живуть без інсуліну, — і точно сказати, де шукати."
        }
      ],
      "faq": [
        {
          "q": "Чи є вже ліки від діабету 1 типу?",
          "a": "Схвалених, широко доступних ліків немає. Але вперше люди в дослідженнях живуть без інсуліну роками після введення вирощених або пересаджених клітин, а один схвалений препарат (теплізумаб) може відкласти хворобу в людей із ризиком. Це реальні, перевірені віхи — але більшість ще експериментальні, обмежені малими числами й часто потребують довічних препаратів проти відторгнення."
        },
        {
          "q": "Яке дослідження найближче до того, щоб стати доступним?",
          "a": "Зиміслецел (VX-880) від Vertex — найбільш просунутий: він у Фазі 3, і перші пацієнти відмовляються від інсуліну. Vertex каже, що планує почати подання регуляторам у 2026 році, але поки нічого не подано, тож реалістичний найкращий варіант — приблизно 2027 рік або пізніше, якщо більше дослідження буде успішним. Теплізумаб, який відкладає, а не виліковує, уже схвалений і доступний у США."
        },
        {
          "q": "Чи можу я долучитися до дослідження діабету 1 типу?",
          "a": "Можливо. У кожного дослідження суворі критерії — вік, скільки часу ви маєте діабет, скільки власного інсуліну залишилося й де ви живете. Скористайтеся трекером вище, щоб знайти підходящі дослідження, перейдіть на ClinicalTrials.gov по актуальний статус і контакти, і обговоріть будь-яке дослідження зі своєю діабетичною командою, перш ніж щось робити."
        },
        {
          "q": "Чи потребують лікування із заміною клітин довічних препаратів проти відторгнення?",
          "a": "Наразі більшість — так, зокрема найпросунутіша програма, бо інакше тіло відторгло б або знову атакувало нові клітини. Саме тому ці дослідження наразі обмежені людьми з найважче керованим діабетом. Найцікавіші новіші роботи (генетично «приховані» клітини та власні перепрограмовані клітини) саме намагаються зняти цю вимогу, але це ще дуже рання стадія."
        },
        {
          "q": "А теплізумаб — як його отримати?",
          "a": "Теплізумаб (TZIELD) схвалений у США для 2-ї стадії діабету 1 типу — людей, які мають автоантитіла й ранні зміни цукру, але ще не повний діабет, від 1 року. До нього зазвичай доходять через скринінг на антитіла (часто безкоштовного для родичів людини з діабетом 1 типу) і вводять як приблизно двотижневий курс інфузій. Поговоріть із ендокринологом про скринінг і відповідність критеріям."
        }
      ]
    }
  },
  {
    "slug": "hrt-prescriptions-doubling",
    "date": "2026-07-10",
    "image": "/images/hrt-prescriptions-doubling.jpg",
    "cats": [
      "perimenopause"
    ],
    "en": {
      "cat": "Perimenopause",
      "title": "HRT prescriptions have more than doubled since 2018 — and patches are now running short",
      "seoTitle": "HRT Prescriptions Have Doubled — Patches Now Running Short",
      "metaDesc": "Estrogen HRT prescribing has doubled since 2018 — 1 in 20 women aged 45–54 now prescribed. Why patches are running short and what it means for perimenopause.",
      "excerpt": "New US data show estrogen HRT prescribing has doubled since 2018, with 1 in 20 women aged 45–54 now on it — driven partly by the FDA dropping its strongest warnings.",
      "meta": "10 July 2026 · 3 min read",
      "lead": "Hormone therapy is having a moment — and the numbers are striking. A new analysis of US prescribing data finds estrogen-based HRT has gone from niche to mainstream in just a few years.",
      "blocks": [
        {
          "t": "p",
          "text": "Researchers at Truveta looked at electronic health records and found that estrogen-based HRT prescribing more than doubled between January 2018 and February 2026 — rising from 11.5 to 23.5 prescriptions per 1,000 women. Among women aged 45–54, the group deepest in perimenopause, roughly 1 in 20 now has an active estrogen prescription, a 184% jump."
        },
        {
          "t": "p",
          "text": "Part of the shift is regulatory. In November 2025 the FDA removed the long-standing \"black box\" warning — its strongest caution — from many menopausal hormone products, after an expert panel concluded the label overstated the risks for the women who benefit most. Prescribing has climbed steeply since."
        },
        {
          "t": "p",
          "text": "The type of HRT is changing too. Skin patches more than tripled over the period and vaginal estrogen creams rose more than fourfold, while older oral tablets fell by about 17%. That mirrors what the evidence favours: estrogen absorbed through the skin carries a lower clot risk than tablets."
        },
        {
          "t": "p",
          "text": "The catch is supply. Demand has risen so fast that several estrogen patch products are now in shortage. If you're on a patch and struggling to fill it, don't simply stop — talk to your prescriber about an equivalent dose, a different brand or a gel, which delivers estrogen the same way through the skin."
        },
        {
          "t": "p",
          "text": "One honest note: this analysis is preliminary and not yet peer-reviewed, and it describes prescribing trends, not whether HRT is right for any individual. Whether to start it depends on your symptoms, your timing relative to menopause and your personal risk — a conversation worth having properly, not a decision to make from a headline."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Estrogen HRT prescribing more than doubled since 2018.",
              "detail": "An analysis of US electronic health records by Truveta Research found estrogen-based HRT prescribing rose from 11.5 to 23.5 per 1,000 women between January 2018 and February 2026 — a roughly 105% increase overall, and a 184% increase among women aged 45–54, of whom about 1 in 20 now hold an active prescription. Patch use more than tripled and vaginal cream use more than quadrupled, while oral HRT fell about 17%. The findings are described as preliminary and not peer-reviewed.",
              "cite": "Truveta Research · Preliminary analysis, 2026",
              "url": "https://www.truveta.com/blog/research/estrogen-based-hormone-replacement-therapy/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Why has HRT become so much more popular?",
          "a": "Two things converged: a wave of better public information about perimenopause, and a regulatory shift. In November 2025 the FDA removed its strongest \"black box\" warning from many menopausal hormone products, concluding it overstated the risk for most women. Prescribing has risen sharply since, especially skin patches and vaginal estrogen."
        },
        {
          "q": "There's an estrogen patch shortage — what should I do?",
          "a": "Don't stop abruptly. Contact your prescriber or pharmacist about an equivalent-dose alternative — a different patch brand, or an estrogen gel or spray, which deliver hormone through the skin in the same way patches do. Switching form is usually straightforward when guided by your clinician."
        }
      ,
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Why skin changes so fast at menopause — and what hormone therapy can and can't do",
              "url": "/blog/menopause-skin-oestrogen/",
              "desc": "Oestrogen affects far more than hot flushes — the full picture on HRT and skin changes."
            },
            {
              "name": "Do collagen products actually improve your skin?",
              "url": "/blog/collagen-and-skin/",
              "desc": "Declining oestrogen accelerates collagen loss. What the evidence says about supplementing."
            },
            {
              "name": "5 myths about perimenopause and weight",
              "url": "/blog/perimenopause-weight-myths/",
              "desc": "What's actually true about weight changes during perimenopause."
            }
          ]
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза",
      "title": "Призначень ЗГТ стало вдвічі більше з 2018 року — а пластирів уже бракує",
      "seoTitle": "Призначення ГЗТ подвоїлись — пластирі у дефіциті",
      "metaDesc": "Призначення естрогенової ГЗТ подвоїлись з 2018 року. Чому пластирі у дефіциті — і що це означає для жінок у перименопаузі.",
      "excerpt": "Нові дані зі США показують, що призначень естрогенової ЗГТ стало вдвічі більше з 2018 року, і тепер її отримує 1 з 20 жінок віком 45–54 роки — частково через скасування найсуворіших попереджень FDA.",
      "meta": "10 липня 2026 · 3 хв читання",
      "lead": "Гормональна терапія переживає сплеск популярності — і цифри вражають. Новий аналіз даних про призначення у США показує, що естрогенова ЗГТ за кілька років перетворилася з нішевої на масову.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідники Truveta проаналізували електронні медичні записи й виявили, що призначень естрогенової ЗГТ між січнем 2018-го та лютим 2026 року стало більш ніж удвічі більше — з 11,5 до 23,5 призначення на 1000 жінок. Серед жінок 45–54 років, які найглибше в перименопаузі, тепер приблизно 1 з 20 має активне призначення естрогену — це зростання на 184%."
        },
        {
          "t": "p",
          "text": "Частково це пов’язано з регулюванням. У листопаді 2025 року FDA прибрало давнє попередження в чорній рамці — свій найсуворіший застережний напис — з багатьох менопаузальних гормональних препаратів, після того як експертна панель дійшла висновку, що етикетка перебільшувала ризики для жінок, яким терапія допомагає найбільше. Відтоді призначень різко побільшало."
        },
        {
          "t": "p",
          "text": "Змінюється й тип ЗГТ. Використання шкірних пластирів за цей період зросло більш ніж утричі, а вагінальних кремів з естрогеном — більш ніж учетверо, тоді як старіших таблеток стало менше приблизно на 17%. Це відповідає тому, що підказують дані: естроген, який всмоктується через шкіру, несе нижчий ризик тромбів, ніж таблетки."
        },
        {
          "t": "p",
          "text": "Проблема — у постачанні. Попит зріс так швидко, що кількох пластирів з естрогеном тепер бракує. Якщо ви на пластирі й не можете його дістати, не припиняйте просто так — обговоріть із лікарем еквівалентну дозу, інший бренд або гель, який доставляє естроген через шкіру так само."
        },
        {
          "t": "p",
          "text": "Одне чесне зауваження: цей аналіз є попереднім і ще не пройшов рецензування, і він описує тенденції призначень, а не те, чи підходить ЗГТ конкретній людині. Рішення почати залежить від ваших симптомів, часу відносно менопаузи та особистих ризиків — це розмова, яку варто провести належно, а не рішення, що ухвалюють із заголовка."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Призначень естрогенової ЗГТ стало більш ніж удвічі більше з 2018 року.",
              "detail": "Аналіз електронних медичних записів у США, проведений Truveta Research, показав, що призначень естрогенової ЗГТ між січнем 2018-го та лютим 2026 року стало більше з 11,5 до 23,5 на 1000 жінок — приблизно на 105% загалом і на 184% серед жінок 45–54 років, з яких близько 1 з 20 тепер має активне призначення. Використання пластирів зросло більш ніж утричі, вагінальних кремів — більш ніж учетверо, а таблеток стало менше приблизно на 17%. Результати описано як попередні та не рецензовані.",
              "cite": "Truveta Research · Попередній аналіз, 2026",
              "url": "https://www.truveta.com/blog/research/estrogen-based-hormone-replacement-therapy/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чому ЗГТ стала настільки популярнішою?",
          "a": "Збіглися дві речі: хвиля кращої суспільної обізнаності про перименопаузу та регуляторні зміни. У листопаді 2025 року FDA прибрало свій найсуворіший напис у чорній рамці з багатьох менопаузальних гормональних препаратів, дійшовши висновку, що він перебільшував ризик для більшості жінок. Відтоді призначень різко побільшало, особливо шкірних пластирів і вагінального естрогену."
        },
        {
          "q": "Пластирів з естрогеном бракує — що робити?",
          "a": "Не припиняйте різко. Зверніться до лікаря чи фармацевта щодо еквівалентної за дозою альтернативи — іншого бренду пластиру або гелю чи спрею з естрогеном, які доставляють гормон через шкіру так само, як пластирі. Зміна форми зазвичай проста, коли її веде ваш лікар."
        }
      ]
    }
  },
  {
    "slug": "islet-transplant-insulin-independence",
    "date": "2026-07-10",
    "image": "/images/islet-transplant-insulin-independence.jpg",
    "cats": [
      "diabetes"
    ],
    "en": {
      "cat": "Diabetes",
      "title": "Every patient in a small type 1 diabetes trial became insulin-free",
      "excerpt": "In an early UChicago trial, all 12 people with long-standing type 1 diabetes reached insulin independence after donor islet transplants paired with a new anti-rejection antibody.",
      "meta": "10 July 2026 · 3 min read",
      "lead": "It's the kind of result that makes you read the sentence twice: in a small pilot study, every single participant with type 1 diabetes stopped needing insulin.",
      "blocks": [
        {
          "t": "p",
          "text": "At UChicago Medicine, 12 people with long-standing type 1 diabetes — a median of 33 years living with the condition — received transplants of insulin-producing islet cells from a donor pancreas. All 12 achieved insulin independence: they no longer needed injected or pumped insulin to manage their blood sugar."
        },
        {
          "t": "p",
          "text": "The results went beyond simply stopping insulin. Every participant reached an HbA1c below 6.5% (a mean of about 5.4%, in the non-diabetic range), and none had a severe low-blood-sugar episode after the transplant — a striking change for a group who had all suffered dangerous hypos before."
        },
        {
          "t": "p",
          "text": "Islet transplants aren't new; the obstacle has always been the powerful anti-rejection drugs needed to protect the graft, which can themselves harm the kidneys and the transplanted cells. This trial's twist was a new antibody called tegoprubart, which blocks an immune signal (CD40L) to prevent rejection without the usual toxic calcineurin inhibitors."
        },
        {
          "t": "p",
          "text": "The honest caveats matter here. This is a tiny, early, investigator-led study with follow-up so far measured in months, not years — a median of eight. Islet transplants still require donor tissue and lifelong immune-suppressing medication, so this isn't a cure you can ask for at a clinic. But as proof that better anti-rejection tools could make cell-replacement therapy realistic, it's genuinely exciting — and it points toward the stem-cell islet work moving through trials behind it."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "All 12 patients reached insulin independence after islet transplant with tegoprubart.",
              "detail": "In an investigator-initiated pilot study at UChicago Medicine, 12 people with type 1 diabetes (median duration 33 years) received donor islet cell transplants with the anti-CD40L antibody tegoprubart instead of standard calcineurin-inhibitor immunosuppression. All 12 achieved insulin independence and an HbA1c below 6.5% (mean about 5.4%), with no severe hypoglycaemic episodes after transplant, over a median follow-up of 8 months (maximum 22).",
              "cite": "Breakthrough T1D / Eledon Pharmaceuticals · Pilot study update, 2026",
              "url": "https://www.breakthrought1d.org/for-the-media/press-releases/eledon-announces-updated-data-from-investigator-initiated-islet-transplant-trial-of-tegoprubart-in-patients-with-type-1-diabetes-t1d-at-uchicago-medicine/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Does this mean type 1 diabetes is cured?",
          "a": "Not yet. This was a small, early study, and islet transplantation still needs donor tissue and lifelong medication to stop the immune system rejecting the new cells. What's promising is the new anti-rejection antibody, which may make cell-replacement therapy safer and more durable — an important step, not a finished cure."
        },
        {
          "q": "Who can get an islet transplant?",
          "a": "For now it's reserved for a small group — usually people with type 1 diabetes and severe, dangerous low-blood-sugar episodes that can't be controlled another way — and it's mostly done within clinical trials. The trade-off is swapping insulin for immune-suppressing drugs, which is why it isn't offered widely."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "Усі учасники невеликого дослідження діабету 1 типу відмовилися від інсуліну",
      "excerpt": "У ранньому дослідженні в Чиказькому університеті всі 12 людей із тривалим діабетом 1 типу відмовилися від інсуліну після трансплантації донорських острівцевих клітин у поєднанні з новим антитілом проти відторгнення.",
      "meta": "10 липня 2026 · 3 хв читання",
      "lead": "Це той результат, від якого перечитуєш речення двічі: у невеликому пілотному дослідженні кожен учасник із діабетом 1 типу перестав потребувати інсуліну.",
      "blocks": [
        {
          "t": "p",
          "text": "У медичному центрі Чиказького університету 12 людей із тривалим діабетом 1 типу — у середньому 33 роки з цим діагнозом — отримали трансплантацію інсулінопродукуючих острівцевих клітин із донорської підшлункової залози. Усі 12 досягли незалежності від інсуліну: їм більше не потрібні ін’єкції чи помпа, щоб керувати рівнем цукру."
        },
        {
          "t": "p",
          "text": "Результати вийшли за межі простого припинення інсуліну. Кожен учасник досяг HbA1c нижче 6,5% (у середньому близько 5,4%, у недіабетичному діапазоні), і ні в кого не було тяжкого епізоду низького цукру після трансплантації — разюча зміна для групи, яка раніше вся потерпала від небезпечних гіпоглікемій."
        },
        {
          "t": "p",
          "text": "Трансплантація острівцевих клітин не нова; перешкодою завжди були потужні препарати проти відторгнення, потрібні, щоб захистити трансплантат, і які самі можуть шкодити ниркам та пересадженим клітинам. Особливістю цього дослідження стало нове антитіло тегопрубарт, яке блокує імунний сигнал (CD40L), щоб запобігти відторгненню без звичних токсичних інгібіторів кальциневрину."
        },
        {
          "t": "p",
          "text": "Чесні застереження тут важливі. Це крихітне, раннє дослідження, ініційоване дослідниками, зі спостереженням поки що в місяцях, а не роках — у середньому вісім. Трансплантація острівцевих клітин усе ще потребує донорської тканини та довічних імуносупресивних ліків, тож це не ліки, які можна попросити в клініці. Але як доказ того, що кращі засоби проти відторгнення можуть зробити клітинну замісну терапію реальною, це справді захопливо — і вказує на роботу зі стовбуровими острівцевими клітинами, що рухається в дослідженнях слідом."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Усі 12 пацієнтів досягли незалежності від інсуліну після трансплантації острівцевих клітин із тегопрубартом.",
              "detail": "У пілотному дослідженні, ініційованому дослідниками, в медичному центрі Чиказького університету 12 людей із діабетом 1 типу (медіана тривалості 33 роки) отримали трансплантацію донорських острівцевих клітин з антитілом проти CD40L тегопрубартом замість стандартної імуносупресії інгібіторами кальциневрину. Усі 12 досягли незалежності від інсуліну та HbA1c нижче 6,5% (у середньому близько 5,4%), без тяжких епізодів гіпоглікемії після трансплантації, за медіани спостереження 8 місяців (максимум 22).",
              "cite": "Breakthrough T1D / Eledon Pharmaceuticals · Оновлення пілотного дослідження, 2026",
              "url": "https://www.breakthrought1d.org/for-the-media/press-releases/eledon-announces-updated-data-from-investigator-initiated-islet-transplant-trial-of-tegoprubart-in-patients-with-type-1-diabetes-t1d-at-uchicago-medicine/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Це означає, що діабет 1 типу вилікували?",
          "a": "Ще ні. Це було невелике, раннє дослідження, і трансплантація острівцевих клітин усе ще потребує донорської тканини та довічних ліків, щоб імунна система не відторгала нові клітини. Обнадійливим є нове антитіло проти відторгнення, яке може зробити клітинну замісну терапію безпечнішою та тривкішою — важливий крок, а не завершені ліки."
        },
        {
          "q": "Хто може отримати трансплантацію острівцевих клітин?",
          "a": "Наразі вона призначена для невеликої групи — зазвичай людей із діабетом 1 типу та тяжкими, небезпечними епізодами низького цукру, які неможливо контролювати інакше, — і переважно проводиться в межах клінічних досліджень. Компроміс — замінити інсулін на імуносупресивні ліки, тому її не пропонують широко."
        }
      ]
    }
  },
  {
    "slug": "carb-quality-healthy-aging",
    "date": "2026-07-10",
    "image": "/images/carb-quality-healthy-aging.jpg",
    "cats": [
      "nutrition"
    ],
    "en": {
      "cat": "Nutrition",
      "title": "The carbs you choose in midlife shape how you age, a 32-year study finds",
      "excerpt": "Harvard and Tufts researchers followed 47,000 women for 32 years: those eating more high-quality carbs in midlife were up to a third more likely to age healthily.",
      "meta": "10 July 2026 · 3 min read",
      "lead": "Not all carbohydrates age you the same way. A large, long-running study suggests the type you lean on in your 40s and 50s quietly shapes how well you will be in your 70s.",
      "blocks": [
        {
          "t": "p",
          "text": "Researchers at Harvard's T.H. Chan School and Tufts University drew on the Nurses' Health Study, following 47,513 women from midlife (average age 48) for 32 years. They asked a simple question: who reached older age in good shape?"
        },
        {
          "t": "p",
          "text": "'Healthy ageing' was defined strictly — reaching 70 free of 11 major chronic diseases, with no meaningful loss of memory or physical function, and good mental health. Only a minority managed it, which makes what separated them interesting."
        },
        {
          "t": "p",
          "text": "Women who ate more high-quality carbohydrates in midlife — from whole grains, fruits, vegetables and legumes — had up to about 31% higher odds of healthy ageing, and higher fibre intake helped too. Carbohydrates from refined grains, added sugar and potatoes went the other way, tied to lower odds."
        },
        {
          "t": "p",
          "text": "This is observational, so it shows a strong association rather than proof, and diet was self-reported. But it lines up with everything else we know, and the practical message is refreshingly ordinary: it isn't about cutting carbs, it's about upgrading them. Swap white bread for whole grains, reach for beans and lentils, and keep fruit and vegetables central — small midlife choices with a long tail."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Higher-quality carbs in midlife were linked to healthier ageing in women.",
              "detail": "A prospective cohort study of 47,513 women in the Nurses' Health Study, followed from 1984 to 2016, found that higher intake of high-quality (unrefined) carbohydrates and dietary fibre in midlife was associated with greater odds of 'healthy ageing' — defined as reaching age 70+ free of 11 chronic diseases, without cognitive or physical impairment, and with good mental health. High-quality carbohydrate intake was associated with roughly 31% higher odds (up to 37% across measures), while refined carbohydrates were associated with about 13% lower odds.",
              "cite": "JAMA Network Open · Cohort study, 16 May 2025",
              "url": "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2834202"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Does this mean carbs are good or bad for ageing?",
          "a": "It's the quality that matters, not carbs as a category. High-quality carbohydrates — whole grains, fruit, vegetables and legumes — were linked to healthier ageing, while refined grains, added sugar and potatoes were linked to the opposite. The takeaway isn't 'eat fewer carbs,' it's 'choose better ones.'"
        },
        {
          "q": "Does this apply to people with diabetes?",
          "a": "The study was in women without a focus on diabetes, so it doesn't set targets for blood-sugar management. But the direction — favour fibre-rich whole foods over refined starch and sugar — is exactly what helps glucose control too, so it fits well alongside diabetes-focused advice rather than replacing it."
        }
      ]
    },
    "ua": {
      "cat": "Харчування",
      "title": "Вуглеводи, які ви обираєте в середньому віці, впливають на старіння — 32-річне дослідження",
      "excerpt": "Дослідники з Гарварду й Тафтса спостерігали за 47 000 жінок упродовж 32 років: ті, хто в середньому віці їв більше якісних вуглеводів, мали до третини вищі шанси старіти здоровими.",
      "meta": "10 липня 2026 · 3 хв читання",
      "lead": "Не всі вуглеводи старять однаково. Велике, багаторічне дослідження свідчить, що тип, на який ви спираєтеся у свої 40–50, тихо формує те, наскільки добре вам буде у 70.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідники з Гарвардської школи ім. Т. Г. Чана та Університету Тафтса скористалися даними Nurses’ Health Study, спостерігаючи за 47 513 жінками від середнього віку (у середньому 48 років) упродовж 32 років. Вони поставили просте запитання: хто досяг старшого віку в доброму стані?"
        },
        {
          "t": "p",
          "text": "«Здорове старіння» визначили суворо — дожити до 70 без 11 основних хронічних хвороб, без відчутної втрати пам’яті чи фізичної функції та з добрим психічним здоров’ям. Це вдалося лише меншості, тому те, що їх відрізняло, і є цікавим."
        },
        {
          "t": "p",
          "text": "Жінки, які в середньому віці їли більше якісних вуглеводів — із цільних злаків, фруктів, овочів і бобових, — мали приблизно до 31% вищі шанси здорового старіння, і вища кількість клітковини теж допомагала. Вуглеводи з рафінованих злаків, доданого цукру та картоплі діяли навпаки — були пов’язані з нижчими шансами."
        },
        {
          "t": "p",
          "text": "Це спостережне дослідження, тож воно показує сильний зв’язок, а не доказ, і харчування оцінювали за самозвітами. Але воно збігається з усім, що ми знаємо, і практичний висновок приємно буденний: ідеться не про те, щоб урізати вуглеводи, а про те, щоб їх покращити. Замініть білий хліб на цільнозерновий, тягніться до квасолі та сочевиці й тримайте фрукти та овочі в центрі — маленькі рішення в середньому віці з довгим наслідком."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Якісніші вуглеводи в середньому віці пов’язані зі здоровішим старінням у жінок.",
              "detail": "Проспективне когортне дослідження 47 513 жінок у межах Nurses’ Health Study, за якими спостерігали з 1984 до 2016 року, показало, що вище споживання якісних (нерафінованих) вуглеводів і харчової клітковини в середньому віці пов’язане з вищими шансами «здорового старіння» — визначеного як дожити до 70+ без 11 хронічних хвороб, без когнітивних чи фізичних порушень і з добрим психічним здоров’ям. Споживання якісних вуглеводів було пов’язане приблизно з 31% вищими шансами (до 37% за різними показниками), тоді як рафіновані вуглеводи — приблизно з 13% нижчими.",
              "cite": "JAMA Network Open · Когортне дослідження, 16 травня 2025",
              "url": "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2834202"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "То вуглеводи корисні чи шкідливі для старіння?",
          "a": "Важлива якість, а не вуглеводи як категорія. Якісні вуглеводи — цільні злаки, фрукти, овочі та бобові — пов’язані зі здоровішим старінням, а рафіновані злаки, доданий цукор і картопля — з протилежним. Висновок не «їжте менше вуглеводів», а «обирайте кращі»."
        },
        {
          "q": "Чи стосується це людей із діабетом?",
          "a": "Дослідження проводили серед жінок без окремого фокусу на діабеті, тож воно не встановлює цілей для контролю цукру. Але напрям — надавати перевагу багатим на клітковину цільним продуктам замість рафінованого крохмалю та цукру — саме те, що допомагає й контролю глюкози, тож воно добре доповнює поради щодо діабету, а не замінює їх."
        }
      ]
    }
  },
  {
    "slug": "menopause-skin-oestrogen",
    "date": "2026-07-10",
    "image": "/images/menopause-skin-oestrogen.jpg",
    "cats": [
      "skin"
    ],
    "en": {
      "cat": "Skin & beauty",
      "title": "Why skin changes so fast at menopause — and what hormone therapy can and can't do",
      "excerpt": "Recent reviews confirm falling oestrogen drives much of menopausal skin ageing — thinner, drier, less elastic skin — and that HRT can partly reverse it, within limits.",
      "meta": "10 July 2026 · 3 min read",
      "lead": "If your skin seemed to change almost overnight around menopause, you weren't imagining it. Recent research lays out just how much of that shift is driven by falling oestrogen — and how much hormone therapy can undo.",
      "blocks": [
        {
          "t": "p",
          "text": "Oestrogen does a lot of quiet work in skin: it supports collagen, keeps skin thick and elastic, and helps it hold water. When oestrogen drops at menopause, all of that unwinds — and faster than ordinary ageing alone would explain."
        },
        {
          "t": "p",
          "text": "The numbers are sobering. Skin collagen falls by roughly 2% for every year after menopause, with much of the loss concentrated in the early years; skin also thins and loses elasticity at around 1–1.5% a year, and oil (sebum) production drops sharply. The result is the familiar cluster of thinner, drier, more crêpey, less bouncy skin."
        },
        {
          "t": "p",
          "text": "Here is the more hopeful part. Reviews of the trial evidence find that hormone therapy can partly reverse these changes. In studies, systemic HRT raised dermis thickness (one trial reported a 33% increase over a year), lifted skin collagen and improved elasticity and hydration — measurable, not just cosmetic-marketing, improvements."
        },
        {
          "t": "p",
          "text": "But the honest bottom line is the one the reviewers themselves reach: skin benefit alone is not a reason to take HRT. Guidelines don't endorse it purely for skin, the strongest gains show up when it's started early in menopause, and starting hormones late — more than 10 years after menopause or after 60 — carries real risks. If you're considering HRT for menopausal symptoms, better skin may be a welcome bonus, but the decision belongs in a broader conversation about your symptoms and risks. Meanwhile, the everyday basics still earn their place: daily sunscreen, a retinoid, and topical vitamin C do real, evidence-based work for menopausal skin."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Falling oestrogen accelerates skin ageing; HRT can partly reverse it.",
              "detail": "A 2025 narrative review synthesising the trial evidence reported that skin collagen declines by about 2.1% per postmenopausal year, with elasticity and thickness also falling, driven largely by oestrogen loss. It found that systemic hormone therapy can partially restore skin — one randomised trial showed a 33% increase in dermis thickness and an 11.5% increase in skin thickness over 12 months, with reported collagen gains of about 3–6.5% and improved elasticity and hydration. The authors stress HRT is not indicated for skin alone, and that starting it more than 10 years after menopause or after age 60 raises cardiovascular and other risks.",
              "cite": "Journal of Cosmetic Dermatology · Narrative review (Viscomi et al.), 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12374573/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Can HRT really improve ageing skin?",
          "a": "Yes, partly. Studies show hormone therapy can increase skin and dermis thickness, boost collagen and improve elasticity and hydration in menopausal women. But the effect is a bonus, not a licence — guidelines don't recommend HRT for skin alone, and it works best when started early in menopause."
        },
        {
          "q": "If I'm not on HRT, what helps menopausal skin most?",
          "a": "The evidence-based basics do real work: daily broad-spectrum sunscreen to prevent further collagen breakdown, a retinoid (retinol or tretinoin) to support collagen, and topical vitamin C as an antioxidant. Gentle cleansing and a good moisturiser help with the dryness that oestrogen loss brings."
        }
      ]
    },
    "ua": {
      "cat": "Краса та шкіра",
      "title": "Чому шкіра так швидко змінюється в менопаузі — і що може (і не може) гормональна терапія",
      "excerpt": "Сучасні огляди підтверджують: падіння естрогену спричиняє значну частину старіння шкіри в менопаузі — тоншу, сухішу, менш пружну шкіру — і що ЗГТ здатна частково це повернути, у певних межах.",
      "meta": "10 липня 2026 · 3 хв читання",
      "lead": "Якщо ваша шкіра ніби змінилася майже за одну ніч у менопаузі, це вам не здалося. Сучасні дослідження показують, наскільки ця зміна зумовлена падінням естрогену — і наскільки гормональна терапія здатна її повернути.",
      "blocks": [
        {
          "t": "p",
          "text": "Естроген виконує багато тихої роботи в шкірі: підтримує колаген, зберігає шкіру товстою та пружною й допомагає їй утримувати воду. Коли естроген падає в менопаузі, усе це розкручується назад — і швидше, ніж пояснило б саме лише звичайне старіння."
        },
        {
          "t": "p",
          "text": "Цифри протверезні. Колаген шкіри зменшується приблизно на 2% за кожен рік після менопаузи, і більша частина втрати припадає на перші роки; шкіра також тоншає та втрачає пружність приблизно на 1–1,5% на рік, а вироблення шкірного сала різко падає. Результат — знайомий набір: тонша, сухіша, більш зморшкувата, менш пружна шкіра."
        },
        {
          "t": "p",
          "text": "А ось обнадійливіша частина. Огляди даних клінічних досліджень показують, що гормональна терапія може частково повернути ці зміни. У дослідженнях системна ЗГТ збільшувала товщину дерми (в одному дослідженні повідомили про зростання на 33% за рік), підвищувала колаген шкіри та покращувала пружність і зволоженість — вимірювані покращення, а не лише косметичний маркетинг."
        },
        {
          "t": "p",
          "text": "Але чесний підсумок такий самий, до якого доходять і самі автори оглядів: сама лише користь для шкіри — не привід приймати ЗГТ. Настанови не схвалюють її суто заради шкіри, найбільший ефект з’являється, коли її починають рано в менопаузі, а пізній початок — понад 10 років після менопаузи або після 60 — несе реальні ризики. Якщо ви розглядаєте ЗГТ через симптоми менопаузи, краща шкіра може бути приємним бонусом, але рішення належить ширшій розмові про ваші симптоми та ризики. А тим часом щоденні базові речі не втрачають ваги: сонцезахист щодня, ретиноїд і місцевий вітамін C роблять реальну, доказову роботу для шкіри в менопаузі."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Падіння естрогену прискорює старіння шкіри; ЗГТ здатна частково це повернути.",
              "detail": "Наративний огляд 2025 року, що узагальнює дані клінічних досліджень, повідомив, що колаген шкіри зменшується приблизно на 2,1% за кожен постменопаузальний рік, а пружність і товщина також падають, значною мірою через втрату естрогену. Автори виявили, що системна гормональна терапія може частково відновити шкіру — одне рандомізоване дослідження показало зростання товщини дерми на 33% і товщини шкіри на 11,5% за 12 місяців, зі зростанням колагену приблизно на 3–6,5% та покращенням пружності й зволоженості. Автори наголошують, що ЗГТ не показана суто заради шкіри і що її початок понад 10 років після менопаузи або після 60 років підвищує серцево-судинні та інші ризики.",
              "cite": "Journal of Cosmetic Dermatology · Наративний огляд (Viscomi та ін.), 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12374573/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи справді ЗГТ може покращити старіння шкіри?",
          "a": "Так, частково. Дослідження показують, що гормональна терапія може збільшити товщину шкіри та дерми, підвищити колаген і покращити пружність та зволоженість у жінок у менопаузі. Але ефект — це бонус, а не дозвіл: настанови не рекомендують ЗГТ суто заради шкіри, і вона працює найкраще, коли її починають рано в менопаузі."
        },
        {
          "q": "Якщо я не на ЗГТ, що найбільше допомагає шкірі в менопаузі?",
          "a": "Доказові базові речі роблять реальну роботу: щоденний сонцезахист широкого спектра, щоб запобігти подальшому руйнуванню колагену, ретиноїд (ретинол або третиноїн) для підтримки колагену та місцевий вітамін C як антиоксидант. М’яке очищення й хороший зволожувач допомагають із сухістю, яку приносить втрата естрогену."
        }
      ]
    }
  },
  {
    "slug": "glp1-drugs-less-movement",
    "date": "2026-07-10",
    "image": "/images/glp1-drugs-less-movement.jpg",
    "cats": [
      "weight"
    ],
    "en": {
      "cat": "Weight loss",
      "title": "People on GLP-1 weight-loss drugs moved less, not more, a Fitbit study finds",
      "excerpt": "Tracking 753 adults' wearable data, researchers found daily steps and exercise fell after starting Ozempic-style drugs — a concern for muscle, especially in women over 40.",
      "meta": "10 July 2026 · 3 min read",
      "lead": "Weight-loss injections like Ozempic and Wegovy are reshaping bodies fast — but new data suggest they may also, quietly, be making people move less.",
      "blocks": [
        {
          "t": "p",
          "text": "Researchers used wearable-tracker data from 753 adults with obesity in the NIH's All of Us programme, comparing their activity before and after they started a GLP-1 medication (the class that includes semaglutide and tirzepatide — Ozempic, Wegovy and Mounjaro)."
        },
        {
          "t": "p",
          "text": "After starting the drug, average daily steps fell from about 5,047 to 4,487 — a drop of 560 steps a day. Time spent in moderate-to-vigorous exercise also fell, from roughly 28 to 22 minutes a day. The declines were steepest in men and in people with musculoskeletal pain."
        },
        {
          "t": "p",
          "text": "Why it matters: GLP-1 drugs cause weight loss that includes muscle as well as fat. If activity — especially the movement that protects muscle — falls at the same time, you can end up lighter but weaker. For women over 40, who are already losing muscle to age and the menopause transition, that's a combination worth taking seriously."
        },
        {
          "t": "p",
          "text": "None of this is a reason to avoid these medicines, which can be genuinely transformative for the right person. It's an argument for pairing them with deliberate movement — particularly resistance training two or three times a week and enough protein — so the weight you lose is fat, and the muscle stays. The drug lowers appetite; it doesn't build strength. That part is still on us."
        },
        {
          "t": "p",
          "text": "As ever, the caveats: this was a conference presentation, not yet peer-reviewed, and it shows what happened on average, not why for any one person. Some people feel more able to move as weight comes off. But the signal is a useful nudge to build activity in on purpose rather than assume it will follow."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Physical activity fell after starting a GLP-1 drug.",
              "detail": "A study presented at ENDO 2026 (the Endocrine Society’s annual meeting) analysed wearable-device data from 753 adults with obesity in the NIH All of Us Research Program. After starting a GLP-1 receptor agonist, mean daily steps fell from 5,047 to 4,487 (−560 steps/day) and moderate-to-vigorous activity fell from 27.9 to 22.2 minutes/day (−5.7 min/day); both changes were statistically significant. Declines were largest in men and those with musculoskeletal pain. The work was a conference presentation and not yet peer-reviewed.",
              "cite": "Endocrine Society (ENDO 2026) · Conference presentation",
              "url": "https://www.healio.com/news/endocrinology/20260613/exercise-declined-in-patients-with-obesity-after-starting-a-glp1"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Do GLP-1 drugs make you exercise less?",
          "a": "On average, in this study, yes — daily steps and exercise time both dropped modestly after people started. It's an association, not proof the drug directly reduces motivation, and individuals varied. But it's a reason to plan movement deliberately rather than assume it follows weight loss."
        },
        {
          "q": "How do I protect muscle on a weight-loss drug?",
          "a": "Two levers matter most: resistance (strength) training two to three times a week, and eating enough protein. Because GLP-1 drugs reduce appetite, hitting protein targets takes intention. This is especially important for women over 40, who are already losing muscle with age."
        }
      ]
    },
    "ua": {
      "cat": "Схуднення",
      "title": "Люди на препаратах GLP-1 для схуднення почали рухатися менше — дослідження з Fitbit",
      "excerpt": "Проаналізувавши дані трекерів 753 дорослих, дослідники виявили, що після початку препаратів на кшталт Ozempic кількість кроків і тренувань падала — це загроза для м’язів, особливо в жінок після 40.",
      "meta": "10 липня 2026 · 3 хв читання",
      "lead": "Ін’єкції для схуднення на кшталт Ozempic і Wegovy швидко змінюють тіла — але нові дані свідчать, що вони можуть також тихо змушувати людей рухатися менше.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідники скористалися даними носимих трекерів 753 дорослих з ожирінням у програмі All of Us Національних інститутів здоров’я США, порівнявши їхню активність до та після початку препарату GLP-1 (клас, що охоплює семаглутид і тирзепатид — Ozempic, Wegovy та Mounjaro)."
        },
        {
          "t": "p",
          "text": "Після початку препарату середня кількість кроків на день впала приблизно з 5047 до 4487 — на 560 кроків. Час помірних-до-інтенсивних тренувань також зменшився — приблизно з 28 до 22 хвилин на день. Найбільше падіння було в чоловіків і в людей із болем опорно-рухового апарату."
        },
        {
          "t": "p",
          "text": "Чому це важливо: препарати GLP-1 спричиняють схуднення, яке включає не лише жир, а й м’язи. Якщо активність — особливо рух, що захищає м’язи, — падає водночас, можна стати легшим, але слабшим. Для жінок після 40, які вже втрачають м’язи через вік і перехід до менопаузи, це поєднання варто сприймати серйозно."
        },
        {
          "t": "p",
          "text": "Ніщо з цього не є приводом уникати цих ліків, які для правильної людини можуть бути справді трансформаційними. Це аргумент на користь того, щоб поєднувати їх зі свідомим рухом — зокрема силовими тренуваннями двічі-тричі на тиждень і достатньою кількістю білка, — щоб вага, яку ви втрачаєте, була жиром, а м’язи лишалися. Препарат знижує апетит; він не будує силу. Ця частина досі на нас."
        },
        {
          "t": "p",
          "text": "Як завжди, застереження: це була доповідь на конференції, ще не рецензована, і вона показує, що сталося в середньому, а не чому в конкретної людини. Дехто почувається здатнішим рухатися, коли вага йде. Але цей сигнал — корисний поштовх свідомо вбудовувати активність, а не припускати, що вона з’явиться сама."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Фізична активність упала після початку препарату GLP-1.",
              "detail": "Дослідження, представлене на ENDO 2026 (щорічній зустрічі Ендокринного товариства), проаналізувало дані носимих пристроїв 753 дорослих з ожирінням у програмі NIH All of Us. Після початку агоніста рецепторів GLP-1 середня кількість кроків на день впала з 5047 до 4487 (−560 кроків/день), а помірна-до-інтенсивної активність — з 27,9 до 22,2 хвилини/день (−5,7 хв/день); обидві зміни були статистично значущими. Найбільше падіння спостерігали в чоловіків і людей із болем опорно-рухового апарату. Робота була доповіддю на конференції та ще не рецензована.",
              "cite": "Ендокринне товариство (ENDO 2026) · Доповідь на конференції",
              "url": "https://www.healio.com/news/endocrinology/20260613/exercise-declined-in-patients-with-obesity-after-starting-a-glp1"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи змушують препарати GLP-1 менше тренуватися?",
          "a": "У середньому в цьому дослідженні — так: і кількість кроків, і час тренувань після початку помірно впали. Це зв’язок, а не доказ того, що препарат безпосередньо знижує мотивацію, і люди різнилися. Але це привід планувати рух свідомо, а не припускати, що він іде слідом за схудненням."
        },
        {
          "q": "Як зберегти м’язи на препараті для схуднення?",
          "a": "Найбільше важать два важелі: силові тренування двічі-тричі на тиждень і достатньо білка. Оскільки препарати GLP-1 знижують апетит, досягати цілей за білком доводиться свідомо. Це особливо важливо для жінок після 40, які вже втрачають м’язи з віком."
        }
      ]
    }
  },
  {
    "slug": "natural-sweeteners",
    "date": "2026-07-09",
    "image": "/images/natural-sweeteners-stevia-monk-fruit-allulose.jpg",
    "cats": [
      "nutrition"
    ],
    "en": {
      "cat": "Nutrition",
      "title": "What to replace sugar with: the evidence on sweeteners",
      "excerpt": "Stevia, monk fruit, allulose, erythritol, xylitol, sucralose, aspartame, honey and agave — what current research actually shows about sweeteners for blood sugar and health.",
      "meta": "9 July 2026 · 7 min read",
      "lead": "When I first wrote about natural sweeteners, the story felt settled: stevia and the sugar alcohols were the \"safe\" choices, and the main thing to get right was taste. The research has moved on since then — in places, dramatically.",
      "blocks": [
        {
          "t": "p",
          "text": "A couple of the sweeteners I once recommended most warmly now come with genuine caution flags. The World Health Organization has weighed in. And a new generation of sweeteners has arrived. So this is a proper rewrite, not a touch-up."
        },
        {
          "t": "p",
          "text": "The headline hasn't changed: sugar is worth cutting back on, and no substitute tastes exactly like it. But which substitute, and how much, matters more than \"natural versus artificial.\" Some of the least helpful options are entirely natural — honey and agave among them — and \"natural\" was never the same thing as \"harmless.\" Let me walk through them the way I'd talk it through with a client."
        },
        {
          "t": "h",
          "text": "First, what \"safe\" actually means here"
        },
        {
          "t": "p",
          "text": "Almost all of these are safe in the narrow sense that regulators such as the FDA and EFSA permit them and they won't poison you. What we actually care about is subtler: does it spike your blood sugar, does it help or harm weight and metabolic health over years rather than days, and does it carry any newer signal we should respect? That last question is where the picture has changed most."
        },
        {
          "t": "p",
          "text": "One honest caveat before we start. Much of the human evidence is still short-term, and some of the worrying new findings are associations plus a plausible mechanism — not proof that the sweetener caused harm. I'll flag where that's the case rather than overstate it."
        },
        {
          "t": "h",
          "text": "Stevia — still my everyday recommendation"
        },
        {
          "t": "p",
          "text": "Stevia, from the leaves of Stevia rebaudiana, remains the one I reach for first. It's calorie-free and [doesn't raise blood glucose or insulin](https://pmc.ncbi.nlm.nih.gov/articles/PMC6770957/). Earlier worries that it disturbs the gut microbiome have not translated into clear harm in humans — [a review of the evidence on stevia and gut bacteria](https://pmc.ncbi.nlm.nih.gov/articles/PMC9028423/) found the human data reassuring rather than alarming, which matters given how much noise there was on this a few years ago."
        },
        {
          "t": "p",
          "text": "Its taste has two quirks worth knowing. First, the sweetness comes on slowly — it arrives a moment later than you'd expect — but then lingers pleasantly for a long time. Second, and separately, stevia turns bitter if you use too much: it's intensely sweet, so a heavy hand tips it into a liquorice-like, faintly metallic aftertaste, though used lightly that bitterness simply never appears. That slow-but-lasting sweetness is exactly why stevia pairs so well with erythritol, whose sweetness does the opposite (more on that below). The leaf brewed as tea is the gentlest form; powders, tablets and syrups vary a lot by brand. My practical tip is unchanged — use far less than you think you need, and blend it with something that rounds out the flavour, such as erythritol, monk fruit or a little allulose."
        },
        {
          "t": "h",
          "text": "Monk fruit — a genuinely good newer option"
        },
        {
          "t": "p",
          "text": "Monk fruit (luo han guo) extract wasn't on most people's radar when I first wrote this, and it deserves to be now. It's zero-calorie with a glycaemic index of essentially zero. [A 2025 systematic review of randomised trials](https://pmc.ncbi.nlm.nih.gov/articles/PMC12073669/) found that monk fruit extract doesn't raise blood glucose or insulin, and several trials showed reduced post-meal glucose responses. The evidence on the gut is limited but so far reassuring — no signal of harm. Long-term human data are still thin, so I hold it loosely, but for now it's one of the better choices, especially blended with stevia to soften each one's aftertaste."
        },
        {
          "t": "h",
          "text": "Allulose — the newcomer worth knowing"
        },
        {
          "t": "p",
          "text": "Allulose is the most interesting arrival since the original article. It's a \"rare sugar\" [found naturally in small amounts in figs, raisins and wheat](https://www.mcgill.ca/oss/article/health-and-nutrition/allure-allulose), and it tastes remarkably like sugar — because chemically it nearly is one. The trick is that the body absorbs it but barely metabolises it, so it contributes only [about 0.4 calories per gram, against 4 for sugar](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-declaration-allulose-and-calories-allulose-nutrition-and-supplement-facts-labels), with minimal effect on blood glucose."
        },
        {
          "t": "p",
          "text": "The evidence is encouraging. [A 2024 meta-analysis of randomised trials](https://pmc.ncbi.nlm.nih.gov/articles/PMC11585728/) found that allulose actually blunted post-meal glucose spikes in people with type 2 diabetes, with little effect on fasting glucose or HbA1c. It holds FDA \"generally recognised as safe\" status. The practical downsides are cost, patchy availability — allulose [is not yet authorised as a novel food in the EU](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2025.9468), and the UK's own approval is still pending — and, like all of these, digestive upset if you overdo it. But if you can get it, it's a strong candidate for baking, where stevia and monk fruit struggle."
        },
        {
          "t": "h",
          "text": "Erythritol — where I've changed my advice"
        },
        {
          "t": "p",
          "text": "I used to put erythritol alongside stevia as one of the safest choices. I'd now soften that considerably."
        },
        {
          "t": "p",
          "text": "In 2023, [a study in Nature Medicine](https://www.nature.com/articles/s41591-023-02223-9) linked higher blood levels of erythritol to a raised risk of heart attack, stroke and death, and showed a plausible mechanism: erythritol made platelets more prone to clotting. [A 2024 follow-up in healthy volunteers](https://www.ahajournals.org/doi/10.1161/ATVBAHA.124.321019) found that a single typical serving increased platelet reactivity even in young, healthy people. This is the same research group that then reported a very similar signal for xylitol."
        },
        {
          "t": "p",
          "text": "Two things keep me from panicking, and I'd want you to hold both. First, this is largely observational plus mechanistic; it isn't yet proof that eating erythritol causes heart attacks. Second, the body also [makes erythritol from glucose](https://www.pnas.org/doi/10.1073/pnas.1620079114), so high blood levels may partly reflect underlying metabolic problems rather than diet alone. But when a signal appears across multiple study types and points at clotting, the sensible response — especially if you already have diabetes or cardiovascular risk — is to stop treating erythritol as a \"use freely\" sweetener. Small, occasional use still seems reasonable to me; I no longer suggest it as a daily staple."
        },
        {
          "t": "p",
          "text": "On taste, erythritol is stevia's mirror image: its sweetness hits straight away but is \"truncated\" — it fades almost as fast as it arrives, leaving a slightly cooling, empty finish. That's exactly why the two are so often blended. Erythritol delivers the instant hit of sweetness that stevia lacks; stevia's slow, lingering sweetness carries on after the erythritol has dropped away; and each covers the other's weak spot, with the erythritol masking stevia's bitterness. If you do reach for erythritol, that pairing is where it earns its place."
        },
        {
          "t": "h",
          "text": "Xylitol and sorbitol — the same caution, plus the old caveats"
        },
        {
          "t": "p",
          "text": "Xylitol now carries a twin message. It does have a dental reputation — it's why it's in so much sugar-free gum — though the [trial evidence for preventing cavities is weaker than commonly assumed](https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD010743.pub2/full). But [a 2024 study in the European Heart Journal](https://academic.oup.com/eurheartj/article-abstract/45/27/2439/7683453) from the same Cleveland Clinic group tied higher blood xylitol to increased cardiovascular events, with the same clotting mechanism seen after ingestion. The caveats above apply here too, but the direction of travel is clear enough that I'd use it sparingly rather than as a table-sugar replacement."
        },
        {
          "t": "p",
          "text": "Sorbitol shares xylitol's family and its most reliable feature: in more than modest amounts, both are [strongly laxative](https://pmc.ncbi.nlm.nih.gov/articles/PMC5508768/). That \"sugar-free sweets gave me stomach cramps\" experience is usually one of these."
        },
        {
          "t": "p",
          "text": "One urgent, unrelated warning: [xylitol is severely toxic to dogs, even in tiny amounts](https://www.fda.gov/consumers/consumer-updates/paws-xylitol-its-dangerous-dogs). If you keep xylitol products at home and have a dog, store them well out of reach."
        },
        {
          "t": "h",
          "text": "Isomalt — mostly a confectioner's tool"
        },
        {
          "t": "p",
          "text": "Isomalt hasn't changed much in the story. It's prized for making clear, hard, decorative caramel that resists melting, so it's a pastry-kitchen material more than an everyday sweetener. Like its sugar-alcohol relatives, it ramps up gut motility and causes bloating and cramping in larger doses. Fine for the occasional showpiece; not something to sweeten your coffee with."
        },
        {
          "t": "h",
          "text": "Fructose and the \"natural syrups\" — natural, but not the win they seem"
        },
        {
          "t": "p",
          "text": "This is the section I'd underline hardest, because the marketing is so persuasive and the biology so unforgiving."
        },
        {
          "t": "p",
          "text": "Fructose isn't really a sugar substitute — it's a sugar. Its low glycaemic index made it fashionable, but the liver handles fructose in a way that, in excess, drives fat production, fatty liver, insulin resistance and raised triglycerides. [A 2024 review of the evidence on dietary fructose](https://pmc.ncbi.nlm.nih.gov/articles/PMC11663027/) has only firmed this up. A little fructose from whole fruit, wrapped in fibre and water, is not the problem; concentrated fructose is."
        },
        {
          "t": "p",
          "text": "And that's exactly what the \"natural syrups\" are. Agave nectar is often held up as a healthy choice, yet it's [around 85% fructose](https://pmc.ncbi.nlm.nih.gov/articles/PMC9222424/) — higher than table sugar — which makes it one of the worse options for metabolic health, not a better one. Honey, maple syrup, date syrup and coconut sugar are all essentially glucose and fructose in prettier packaging. They carry trace minerals and, in honey's case, some antioxidants, so they're not nutritionally identical to white sugar — but for blood-sugar and weight purposes your body treats them much the same. If you're managing diabetes or weight, they don't get a pass for being natural."
        },
        {
          "t": "h",
          "text": "The artificial sweeteners — sucralose, aspartame, acesulfame K and saccharin"
        },
        {
          "t": "p",
          "text": "These four are synthetic rather than plant-derived, and they're what most \"diet\" and \"zero\" products actually contain — so they belong in any honest answer to what you'd replace sugar with. The short version: regulators still consider them safe within normal intakes, but the evidence has grown more mixed, and none of them is a reason to relax about sweetness."
        },
        {
          "t": "p",
          "text": "Aspartame is the most scrutinised. In 2023 the WHO's cancer agency (IARC) [classified aspartame as \"possibly carcinogenic to humans\"](https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released) — its weakest hazard category, based on limited evidence — while the WHO's food-safety committee left the acceptable daily intake unchanged at 40 mg per kg of body weight. That gap matters: \"possibly carcinogenic\" describes how confident we are that something could cause cancer, not how much risk it poses at real doses. In practice a 70 kg adult would need to drink well over a dozen cans of diet soft drink a day to exceed the limit. People with the rare genetic condition [PKU must avoid aspartame](https://www.fda.gov/food/food-additives-petitions/aspartame-and-other-sweeteners-food); for everyone else, the honest summary is \"probably fine in moderation, but not something to drink by the litre.\" It also loses its sweetness when heated, so it's poor for baking."
        },
        {
          "t": "p",
          "text": "Sucralose was long treated as inert, but a 2023 study complicated that. Researchers found that [sucralose-6-acetate — an impurity in commercial sucralose, and a compound the gut also forms from it — damaged DNA in laboratory cells](https://www.tandfonline.com/doi/full/10.1080/10937404.2023.2213903), and that a single sucralose-sweetened drink could exceed the safety threshold for genotoxic substances. This is lab work, not proof of harm in people, and regulators haven't changed their stance — but it's a reason not to treat sucralose as consequence-free. [Heating sucralose can also generate potentially harmful compounds](https://www.bfr.bund.de/en/notification/sucralose-heating-above-120c-can-produce-substances-that-are-harmful-to-health/), so it's best kept out of the oven."
        },
        {
          "t": "p",
          "text": "Acesulfame K (often labelled Ace-K) almost always appears blended with aspartame or sucralose to round out the taste. It has been approved for decades and passes through the body largely unchanged. The main open question is the gut: [a 2022 trial in Cell found that some non-sugar sweeteners altered the gut microbiome and glucose responses](https://www.cell.com/cell/fulltext/S0092-8674(22)00919-9) in some people, with effects that varied from person to person. Acesulfame K itself is less studied here, which is its own argument for modest use rather than confidence."
        },
        {
          "t": "p",
          "text": "Saccharin is the oldest of the group. Its 1970s link to bladder cancer in rats was [later found not to apply to humans, and it was removed from cancer-warning lists](https://www.cancer.gov/about-cancer/causes-prevention/risk/diet/artificial-sweeteners-fact-sheet) — so on the classic cancer question it has largely been cleared. The newer question is again the microbiome, where saccharin was one of the sweeteners that shifted gut bacteria and glucose tolerance in the 2022 trial above. It's intensely sweet with a metallic edge, which is why it's usually blended rather than used alone."
        },
        {
          "t": "p",
          "text": "My overall take on this group is the same as for the sugar alcohols: not alarming, not a free pass. If you use them, use them as an occasional bridge away from sugar rather than a licence to keep everything sweet."
        },
        {
          "t": "h",
          "text": "Where you'll find each one"
        },
        {
          "t": "p",
          "text": "Sweeteners rarely announce themselves on the front of a pack — they hide in the ingredients list, often two or three blended together. Here's a quick guide to what's typically where, so you can read a label and know what you're looking at."
        },
        {
          "t": "table",
          "head": [
            "Sweetener",
            "Type",
            "Safety",
            "Commonly found in"
          ],
          "rows": [
            [
              "Stevia",
              "Natural (plant)",
              "High",
              "Tabletop packets and drops, \"naturally sweetened\" drinks and flavoured waters, some protein bars and yoghurts"
            ],
            [
              "Monk fruit",
              "Natural (plant)",
              "High",
              "Tabletop blends (usually with erythritol), keto and low-carb products, some sugar-free drinks"
            ],
            [
              "Allulose",
              "Natural (rare sugar)",
              "High",
              "Specialist low-carb baking sweeteners, some \"keto\" syrups and ice creams; still niche in the UK and EU"
            ],
            [
              "Erythritol",
              "Sugar alcohol",
              "Moderate",
              "The bulk of most \"stevia\" and \"monk fruit\" tabletop blends, keto baking sweeteners, sugar-free chocolate and sweets"
            ],
            [
              "Xylitol",
              "Sugar alcohol",
              "Moderate",
              "Sugar-free chewing gum and mints, toothpaste and mouthwash, \"tooth-friendly\" sweets (toxic to dogs)"
            ],
            [
              "Sorbitol",
              "Sugar alcohol",
              "Moderate",
              "Sugar-free gum and sweets, cough syrups and other liquid medicines, toothpaste"
            ],
            [
              "Isomalt",
              "Sugar alcohol",
              "Moderate",
              "Sugar-free hard-boiled sweets and lollipops, decorative cake and pastry work"
            ],
            [
              "Sucralose",
              "Artificial",
              "Moderate",
              "Diet and \"zero\" soft drinks, no-added-sugar squash, protein powders and bars, sugar-free desserts (brand: Splenda)"
            ],
            [
              "Aspartame",
              "Artificial",
              "Moderate",
              "Diet fizzy drinks, sugar-free gum, \"light\" and \"diet\" yoghurts and desserts, tabletop sweeteners (Canderel, NutraSweet)"
            ],
            [
              "Acesulfame K",
              "Artificial",
              "Moderate",
              "Diet drinks (almost always blended with aspartame or sucralose), protein bars, many sugar-free products"
            ],
            [
              "Saccharin",
              "Artificial",
              "Moderate",
              "Tabletop sweeteners (Sweet'N Low, Hermesetas), some diet drinks and medicines"
            ],
            [
              "Honey, agave, maple & syrups",
              "Sugars (natural)",
              "Low",
              "\"Refined-sugar-free\" and health-food snacks, granola and bars, drizzles and home baking — metabolically still sugar"
            ]
          ]
        },
        {
          "t": "h",
          "text": "What the big guidelines now say"
        },
        {
          "t": "p",
          "text": "Two shifts are worth knowing about. In 2023, [the WHO advised against using non-sugar sweeteners for weight control](https://www.who.int/news/item/15-05-2023-who-advises-not-to-use-non-sugar-sweeteners-for-weight-control-in-newly-released-guideline), having concluded they don't help with long-term body fat and may be associated with type 2 diabetes and cardiovascular disease over time. Crucially, that guidance explicitly excludes people who already have diabetes, and it's been debated among scientists — but the direction is a nudge away from treating sweeteners as a free lunch for weight loss."
        },
        {
          "t": "p",
          "text": "The [American Diabetes Association's 2025 Standards of Care](https://diabetesjournals.org/care/article/48/Supplement_1/S86/157563/) strike a more pragmatic note for people with diabetes: sweeteners can be a reasonable swap for sugar, in moderation and short term, to cut calories and carbs — as long as you don't compensate by eating more elsewhere. That \"don't compensate\" clause is the whole game."
        },
        {
          "t": "h",
          "text": "So how should you actually choose?"
        },
        {
          "t": "p",
          "text": "Distilled into practical advice:"
        },
        {
          "t": "p",
          "text": "Best everyday choices: stevia, monk fruit or allulose — ideally blended, since each covers the others' weak spots. Allulose is the standout for baking if you can find it."
        },
        {
          "t": "p",
          "text": "Use sparingly, not daily: erythritol and xylitol. The convenience is real; so is the new caution. Small and occasional, especially with cardiovascular risk or diabetes."
        },
        {
          "t": "p",
          "text": "Treat as sugar, because they are: honey, agave, maple, date and coconut syrups, and fructose. Natural, lovely, and metabolically about the same as sugar."
        },
        {
          "t": "p",
          "text": "The bigger lever: the goal isn't to sweeten everything with a \"safe\" powder — it's to become gradually less dependent on sweetness overall. Sweeteners work best as a bridge, not a destination."
        },
        {
          "t": "p",
          "text": "And the single most important line, unchanged since I first wrote this: pay attention to your own response. People differ genuinely in taste, tolerance and blood-sugar reaction. Try one thing at a time and let your own body — ideally with a glucose meter or CGM if you have diabetes — cast the deciding vote."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "WHO advises against non-sugar sweeteners for weight control.",
              "detail": "In 2023 the World Health Organization issued a guideline recommending against the use of non-sugar sweeteners to control body weight, after a systematic review found no long-term benefit for body fat and possible associations with type 2 diabetes, cardiovascular disease and mortality. The recommendation explicitly excludes people who already have diabetes.",
              "cite": "World Health Organization · Guideline, 2023",
              "url": "https://www.who.int/news/item/15-05-2023-who-advises-not-to-use-non-sugar-sweeteners-for-weight-control-in-newly-released-guideline"
            },
            {
              "claim": "Higher blood erythritol is linked to cardiovascular events.",
              "detail": "A 2023 study in Nature Medicine analysed over 4,000 patients and found those with the highest blood erythritol had roughly double the risk of major adverse cardiovascular events. Laboratory and animal work showed erythritol enhanced platelet clotting — a plausible mechanism, though an association is not proof of cause, and the body also produces erythritol endogenously.",
              "cite": "Nature Medicine · Cohort & mechanistic study, 2023",
              "url": "https://www.nature.com/articles/s41591-023-02223-9"
            },
            {
              "claim": "Erythritol raised platelet reactivity even in healthy volunteers.",
              "detail": "A 2024 interventional study gave 20 healthy adults a typical 30g serving of erythritol. It produced a more than 1,000-fold rise in blood erythritol and an acute increase in platelet aggregation in every participant — while an equivalent glucose serving did not. The authors concluded erythritol may enhance thrombosis potential and warrants safety re-evaluation.",
              "cite": "Arteriosclerosis, Thrombosis & Vascular Biology · Interventional study, 2024",
              "url": "https://www.ahajournals.org/doi/10.1161/ATVBAHA.124.321019"
            },
            {
              "claim": "Xylitol shows the same signal as erythritol.",
              "detail": "A 2024 study in the European Heart Journal from the same research group linked higher blood xylitol to increased three-year cardiovascular risk across more than 3,000 patients, and found every measure of clotting ability rose immediately after ingestion in a human intervention study. The same caveats — association plus endogenous production — apply.",
              "cite": "European Heart Journal · Cohort & interventional study, 2024",
              "url": "https://academic.oup.com/eurheartj/article-abstract/45/27/2439/7683453"
            },
            {
              "claim": "Allulose blunts post-meal glucose in type 2 diabetes.",
              "detail": "A 2024 meta-analysis of randomised controlled trials found that allulose significantly reduced post-meal glucose area-under-the-curve and time above range in people with type 2 diabetes, with minimal effect on fasting glucose or HbA1c — supporting its role as a low-calorie sweetener for glycaemic control.",
              "cite": "Meta-analysis of RCTs · 2024",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11585728/"
            },
            {
              "claim": "Monk fruit does not raise glucose or insulin.",
              "detail": "A 2025 PRISMA-guided systematic review of randomised controlled trials found monk fruit extract had no adverse effect on blood glucose or insulin, with several trials showing reduced post-meal glucose and insulin responses. Long-term human data remain limited, but the short-term safety and glycaemic profile are favourable.",
              "cite": "Nutrients · Systematic review of RCTs, 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12073669/"
            },
            {
              "claim": "Concentrated fructose drives metabolic harm.",
              "detail": "A 2024 literature review summarised evidence that dietary fructose, in excess, is a potent driver of hepatic fat production, fatty liver, insulin resistance and raised triglycerides — the reason concentrated fructose sources such as agave nectar and syrups are not a metabolic improvement over sugar, even though fructose from whole fruit is not a concern.",
              "cite": "Nutrients · Literature review, 2024",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11663027/"
            },
            {
              "claim": "Aspartame: \"possibly carcinogenic,\" but intake limits unchanged.",
              "detail": "In 2023 the WHO's cancer agency (IARC) classified aspartame as \"possibly carcinogenic to humans\" (Group 2B) on limited evidence, while its food-safety committee (JECFA) reaffirmed the acceptable daily intake of 40 mg/kg body weight. Group 2B is a low-confidence hazard flag, not a measure of real-world risk — an adult would need well over a dozen cans of diet drink a day to exceed the limit.",
              "cite": "World Health Organization · IARC & JECFA assessment, 2023",
              "url": "https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released"
            },
            {
              "claim": "A sucralose impurity damaged DNA in the lab.",
              "detail": "A 2023 study reported that sucralose-6-acetate — a manufacturing impurity in commercial sucralose, and a compound the gut also forms from it — was genotoxic (it broke DNA) in laboratory cell tests, and that a single sucralose-sweetened drink could exceed the safety threshold for genotoxic substances. This is in-vitro work rather than proof of harm in people, but it argues against treating sucralose as entirely inert.",
              "cite": "Journal of Toxicology and Environmental Health, Part B · In-vitro study, 2023",
              "url": "https://www.tandfonline.com/doi/full/10.1080/10937404.2023.2213903"
            },
            {
              "claim": "Some sweeteners alter the gut microbiome and glucose response.",
              "detail": "A 2022 randomised trial in Cell found that saccharin and sucralose measurably changed the gut microbiome and impaired glucose tolerance in some healthy adults, with aspartame and stevia showing microbiome shifts too. The effects were personalised — they varied markedly from person to person — which is part of why blanket claims about these sweeteners are hard to make.",
              "cite": "Cell · Randomised controlled trial, 2022",
              "url": "https://www.cell.com/cell/fulltext/S0092-8674(22)00919-9"
            },
            {
              "claim": "The ADA allows sweeteners as a short-term swap.",
              "detail": "The American Diabetes Association's 2025 Standards of Care state that non-nutritive sweeteners can be an acceptable substitute for sugar in moderation and short term to reduce calorie and carbohydrate intake — provided people do not compensate with additional calories elsewhere. Water is still preferred over sweetened drinks.",
              "cite": "American Diabetes Association · Standards of Care, 2025",
              "url": "https://diabetesjournals.org/care/article/48/Supplement_1/S86/157563/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Which natural sweetener is best for blood sugar?",
          "a": "Stevia, monk fruit and allulose are the strongest choices — none of them meaningfully raises blood glucose or insulin, and allulose may even blunt post-meal spikes. Stevia and monk fruit work well blended together to soften each one's aftertaste. Allulose is the closest to sugar in taste and behaves best in baking, though it is pricier and not yet approved for sale in the UK or EU."
        },
        {
          "q": "Is erythritol safe?",
          "a": "Erythritol does not raise blood sugar, but its safety picture has changed. Since 2023, studies have linked higher blood erythritol to increased blood-clotting activity and cardiovascular events, and a 2024 trial found platelet reactivity rose even in healthy volunteers after a single serving. This is an association plus a plausible mechanism, not proof of harm, and the body also makes erythritol itself. Small, occasional use is reasonable, but it is no longer a sweetener I suggest using freely every day — especially with existing diabetes or heart risk."
        },
        {
          "q": "Is honey or agave healthier than sugar?",
          "a": "Not in any way that matters for blood sugar or weight. Honey, maple syrup, date syrup and coconut sugar are essentially glucose and fructose with trace minerals. Agave is around 85% fructose — higher than table sugar — which makes it one of the worse options for metabolic and liver health, not a better one. If you are managing diabetes or weight, treat all of these like sugar."
        },
        {
          "q": "Does stevia raise blood sugar?",
          "a": "No. Stevia is calorie-free and does not raise blood glucose or insulin, which is why it remains a first-choice sweetener for people managing diabetes or weight. Earlier concerns that it disrupts the gut microbiome have not translated into clear harm in human research. Its main drawback is taste — it can turn bitter if you use too much, though not if you dose it lightly."
        },
        {
          "q": "Is all stevia bitter?",
          "a": "No — the bitterness comes from over-dosing, not from stevia itself. Because stevia is hundreds of times sweeter than sugar, a tiny amount is enough; the liquorice-like or metallic aftertaste only shows up when you use more than you need. Start with far less than feels natural — a pinch of powder, or a drop or two of liquid — and build up slowly until it is just sweet enough. Form and brand matter too: purified steviol-glycoside extracts (especially those standardised to rebaudioside A, often labelled \"Reb A\") are much less bitter than whole-leaf green powder, and blends with erythritol or monk fruit round out the taste further. If a product still tastes bitter at a low dose, switch brands rather than adding more — more stevia only makes bitterness worse."
        },
        {
          "q": "Are artificial sweeteners like aspartame and sucralose safe?",
          "a": "Within normal amounts, regulators still consider them safe — but the evidence has grown more mixed. Aspartame was classified as possibly carcinogenic by the WHO's cancer agency in 2023, though its intake limit was left unchanged and you'd need well over a dozen diet drinks a day to reach it (people with the condition PKU must avoid it). A 2023 lab study found a sucralose impurity can damage DNA, and some sweeteners — including saccharin and sucralose — shift the gut microbiome in certain people. None of this is proof of everyday harm, but it's reason to treat them as an occasional bridge away from sugar rather than a free pass. Aspartame and sucralose also break down when heated, so they're poor for baking."
        }
      ]
    },
    "ua": {
      "cat": "Харчування",
      "title": "Чим замінити цукор: що каже наука про підсолоджувачі",
      "excerpt": "Стевія, монк-фрут, алюлоза, еритрит, ксиліт, сукралоза, аспартам, мед і агава — що насправді показують сучасні дослідження про підсолоджувачі для рівня цукру та здоров'я.",
      "meta": "9 липня 2026 · 7 хв читання",
      "lead": "Коли я вперше писала про натуральні підсолоджувачі, картина здавалася усталеною: стевія та цукрові спирти вважалися «безпечним» вибором, і головним було вгадати зі смаком. Відтоді наука пішла далі — місцями суттєво.",
      "blocks": [
        {
          "t": "p",
          "text": "Кілька підсолоджувачів, які я колись рекомендувала найтепліше, тепер мають цілком реальні застереження. До теми долучилася Всесвітня організація охорони здоров'я. І з'явилося нове покоління замінників. Тож це повноцінне переписування, а не косметична правка."
        },
        {
          "t": "p",
          "text": "Головна теза не змінилася: цукор варто обмежувати, і жоден замінник не має точно такого ж смаку. Але який саме замінник і в якій кількості — важливіше, ніж «натуральне проти штучного». Деякі з найменш корисних варіантів цілком натуральні — серед них мед і агава, — а «натуральне» ніколи не означало «нешкідливе». Пройдімося по них так, як я б це обговорювала з клієнткою."
        },
        {
          "t": "h",
          "text": "Спершу — що тут означає «безпечно»"
        },
        {
          "t": "p",
          "text": "Майже все з цього переліку безпечне у вузькому сенсі: регулятори на кшталт FDA та EFSA це дозволяють, і ви не отруїтеся. Насправді ж нас цікавить тонше: чи підіймає це цукор у крові, допомагає чи шкодить вазі та метаболічному здоров'ю впродовж років, а не днів, і чи є новіші сигнали, які варто поважати. Саме в останньому пункті картина змінилася найбільше."
        },
        {
          "t": "p",
          "text": "Одне чесне застереження на старті. Значна частина даних щодо людей досі короткострокова, а деякі тривожні нові знахідки — це асоціації плюс правдоподібний механізм, а не доказ, що підсолоджувач спричинив шкоду. Я вказуватиму, де це саме так, а не перебільшуватиму."
        },
        {
          "t": "h",
          "text": "Стевія — досі мій вибір на щодень"
        },
        {
          "t": "p",
          "text": "Стевія, з листя Stevia rebaudiana, залишається тим, до чого я тягнуся першим. Вона без калорій і [не підіймає глюкозу чи інсулін](https://pmc.ncbi.nlm.nih.gov/articles/PMC6770957/). Ранні побоювання, що вона порушує мікробіом кишківника, не переросли в чітку шкоду в людей — [огляд даних про стевію та кишкові бактерії](https://pmc.ncbi.nlm.nih.gov/articles/PMC9028423/) визнав докази щодо людей радше заспокійливими, ніж тривожними, а це важливо, зважаючи на те, скільки галасу було навколо цього кілька років тому."
        },
        {
          "t": "p",
          "text": "У смаку стевії є дві особливості, про які варто знати. По-перше, солодкість наростає повільно — приходить трохи пізніше, ніж очікуєш, — зате потім приємно тримається довго. По-друге, окремо від цього, стевія гіркне від надлишку: вона дуже солодка, тож надмір робить смак лакричним, ледь металевим, хоча якщо класти потроху, гіркота просто не з'являється. Саме ця повільна, але тривала солодкість і робить стевію ідеальною в парі з еритритом, чия солодкість поводиться навпаки (докладніше нижче). Найм'якша форма — заварене листя як чай; порошки, таблетки та сиропи сильно різняться за брендами. Моя практична порада та сама — беріть значно менше, ніж здається потрібним, і поєднуйте з чимось, що заокруглює смак, наприклад із еритритом, монк-фрутом чи дрібкою алюлози."
        },
        {
          "t": "h",
          "text": "Монк-фрут — справді вдалий новіший варіант"
        },
        {
          "t": "p",
          "text": "Екстракт монк-фрута (луо хань ґуо) у 2017-му мало хто мав на радарі, а тепер він на це заслуговує. Він без калорій, глікемічний індекс практично нульовий. [Систематичний огляд рандомізованих досліджень 2025 року](https://pmc.ncbi.nlm.nih.gov/articles/PMC12073669/) виявив, що екстракт монк-фрута не підіймає глюкозу чи інсулін, а кілька досліджень показали зниження післяобідньої глюкозної відповіді. Дані щодо кишківника обмежені, але поки що заспокійливі: жодного сигналу про шкоду. Довгострокових даних щодо людей досі мало, тож я ставлюся до нього обережно, але наразі це один із кращих виборів, особливо в поєднанні зі стевією, щоб пом'якшити присмак кожного."
        },
        {
          "t": "h",
          "text": "Алюлоза — новачок, про якого варто знати"
        },
        {
          "t": "p",
          "text": "Алюлоза — найцікавіша поява після оригінальної статті. Це «рідкісний цукор», що [природно міститься в невеликих кількостях в інжирі, родзинках і пшениці](https://www.mcgill.ca/oss/article/health-and-nutrition/allure-allulose), і на смак вона напрочуд схожа на цукор — бо хімічно ним майже і є. Хитрість у тому, що організм її всмоктує, але майже не метаболізує, тож вона дає лише [близько 0,4 ккал на грам проти 4 у цукру](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-declaration-allulose-and-calories-allulose-nutrition-and-supplement-facts-labels), мінімально впливаючи на глюкозу."
        },
        {
          "t": "p",
          "text": "Дані обнадійливі. [Метааналіз рандомізованих досліджень 2024 року](https://pmc.ncbi.nlm.nih.gov/articles/PMC11585728/) показав, що алюлоза навіть згладжувала післяобідні стрибки глюкози в людей із діабетом 2 типу, майже не впливаючи на глюкозу натще чи HbA1c. Вона має статус FDA «загальновизнано безпечною» (GRAS). Практичні мінуси — ціна, нерівномірна доступність (алюлоза [ще не дозволена як новий харчовий продукт (novel food) у ЄС](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2025.9468), а власне британське схвалення досі на розгляді) і, як з усіма ними, розлад травлення, якщо перебрати. Але якщо її вдається дістати — це сильний кандидат для випічки, де стевія та монк-фрут пасують гірше."
        },
        {
          "t": "h",
          "text": "Еритрит — тут я змінила пораду"
        },
        {
          "t": "p",
          "text": "Я звикла ставити еритрит поруч зі стевією як один із найбезпечніших варіантів. Тепер я істотно це пом'якшу."
        },
        {
          "t": "p",
          "text": "У 2023 році [дослідження в Nature Medicine](https://www.nature.com/articles/s41591-023-02223-9) пов'язало вищий рівень еритриту в крові з підвищеним ризиком інфаркту, інсульту та смерті й показало правдоподібний механізм: еритрит робив тромбоцити схильнішими до утворення тромбів. [Подальше дослідження 2024 року на здорових добровольцях](https://www.ahajournals.org/doi/10.1161/ATVBAHA.124.321019) виявило, що одна звична порція підвищувала реактивність тромбоцитів навіть у молодих здорових людей. Це та сама наукова група, яка згодом повідомила про дуже схожий сигнал і щодо ксиліту."
        },
        {
          "t": "p",
          "text": "Дві речі втримують мене від паніки, і я б хотіла, щоб ви трималися обох. По-перше, це переважно спостережні плюс механістичні дані; це ще не доказ, що вживання еритриту спричиняє інфаркти. По-друге, організм [сам виробляє еритрит із глюкози](https://www.pnas.org/doi/10.1073/pnas.1620079114), тож високий рівень у крові може частково відображати наявні метаболічні проблеми, а не лише раціон. Але коли сигнал з'являється в дослідженнях різного типу й указує на тромбоутворення, розумна реакція — особливо якщо у вас уже є діабет чи серцево-судинний ризик — перестати сприймати еритрит як підсолоджувач «на всю котушку». Невелике, епізодичне вживання досі здається мені прийнятним; але я вже не раджу його як щоденну основу."
        },
        {
          "t": "p",
          "text": "А ось смак у еритриту — дзеркальне відображення стевії: солодкість з'являється одразу, але вона «обрізана» — згасає майже так само швидко, як і приходить, лишаючи трохи охолодний, «порожній» післясмак. Саме тому їх так часто змішують. Еритрит дає миттєвий сплеск солодкості, якого бракує стевії; повільна, тривала солодкість стевії триває далі, коли еритрит уже зник; і кожен прикриває слабке місце іншого — еритрит маскує гіркоту стевії. Якщо ви все ж берете еритрит, саме в цій парі він найкорисніший."
        },
        {
          "t": "h",
          "text": "Ксиліт і сорбіт — те саме застереження плюс давні нюанси"
        },
        {
          "t": "p",
          "text": "Ксиліт тепер несе подвійне повідомлення. Він справді має репутацію корисного для зубів — саме тому його багато в жувальній гумці без цукру, — хоча [докази з клінічних досліджень слабші, ніж припускає маркетинг](https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD010743.pub2/full). Але [дослідження 2024 року в European Heart Journal](https://academic.oup.com/eurheartj/article-abstract/45/27/2439/7683453) від тієї ж групи з Cleveland Clinic пов'язало вищий рівень ксиліту в крові зі збільшенням серцево-судинних подій, із тим самим механізмом тромбоутворення після вживання. Застереження вище стосуються і його, але напрямок достатньо чіткий, щоб я радила вживати його ощадливо, а не як заміну столового цукру."
        },
        {
          "t": "p",
          "text": "Сорбіт належить до тієї ж родини, що й ксиліт, і має найнадійнішу її рису: у більш ніж помірних кількостях обидва [сильно послаблюють](https://pmc.ncbi.nlm.nih.gov/articles/PMC5508768/). Те саме відчуття «від цукерок без цукру схопило живіт» — зазвичай саме через них."
        },
        {
          "t": "p",
          "text": "Одне термінове, не пов'язане з темою попередження: [ксиліт вкрай токсичний для собак навіть у крихітних дозах](https://www.fda.gov/consumers/consumer-updates/paws-xylitol-its-dangerous-dogs). Якщо вдома є продукти з ксилітом і собака, зберігайте їх подалі від тварини."
        },
        {
          "t": "h",
          "text": "Ізомальт — здебільшого інструмент кондитера"
        },
        {
          "t": "p",
          "text": "Щодо ізомальту в цій історії мало що змінилося. Його цінують за прозору, тверду декоративну карамель, стійку до плавлення, тож це радше матеріал кондитерського цеху, ніж щоденний підсолоджувач. Як і його родичі — цукрові спирти — він підсилює моторику кишківника й у більших дозах спричиняє здуття та спазми. Годиться для святкового декору; але не для того, щоб підсолодити каву."
        },
        {
          "t": "h",
          "text": "Фруктоза та «натуральні сиропи» — натуральні, але не така перемога, як здається"
        },
        {
          "t": "p",
          "text": "Цей розділ я б підкреслила найжирніше, бо маркетинг тут дуже переконливий, а біологія — невблаганна."
        },
        {
          "t": "p",
          "text": "Фруктоза — це насправді не замінник цукру, а цукор. Низький глікемічний індекс зробив її модною, але печінка переробляє фруктозу так, що в надлишку це запускає утворення жиру, жирову хворобу печінки, інсулінорезистентність і підвищені тригліцериди. [Огляд даних про харчову фруктозу 2024 року](https://pmc.ncbi.nlm.nih.gov/articles/PMC11663027/) лише зміцнив цей висновок. Трохи фруктози з цілого фрукта, «загорнутої» у клітковину й воду, — не проблема; концентрована фруктоза — проблема."
        },
        {
          "t": "p",
          "text": "А «натуральні сиропи» — це саме вона. Сироп агави часто подають як здоровий вибір, хоча він містить [близько 85% фруктози](https://pmc.ncbi.nlm.nih.gov/articles/PMC9222424/) — більше, ніж столовий цукор, — що робить його одним із гірших, а не кращих варіантів для метаболічного здоров'я. Мед, кленовий сироп, фініковий сироп і кокосовий цукор — усе це по суті глюкоза з фруктозою в гарнішій обгортці. Вони містять сліди мінералів, а мед — ще й певні антиоксиданти, тож із білим цукром вони не тотожні нутриційно, — але для рівня цукру в крові й ваги організм ставиться до них приблизно так само. Якщо ви контролюєте діабет або вагу, «натуральність» їм поблажки не дає."
        },
        {
          "t": "h",
          "text": "Штучні підсолоджувачі — сукралоза, аспартам, ацесульфам К і сахарин"
        },
        {
          "t": "p",
          "text": "Ці чотири — синтетичні, а не рослинного походження, і саме вони містяться в більшості продуктів «дієт» і «зеро» — тож вони належать до будь-якої чесної відповіді на питання, чим замінити цукор. Коротко: регулятори досі вважають їх безпечними в межах звичайного споживання, але докази стали неоднозначнішими, і жоден із них не є приводом розслабитися щодо солодкого."
        },
        {
          "t": "p",
          "text": "Аспартам — найбільш досліджуваний. У 2023 році агенція ВООЗ із раку (IARC) [класифікувала аспартам як «можливо канцерогенний для людини»](https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released) — це її найслабша категорія небезпеки, на основі обмежених доказів, — тоді як комітет ВООЗ із безпеки харчових продуктів залишив допустиме добове споживання незмінним: 40 мг на кг маси тіла. Ця різниця важлива: «можливо канцерогенний» описує, наскільки ми впевнені, що щось могло б спричиняти рак, а не який ризик воно несе за реальних доз. На практиці дорослому вагою 70 кг довелося б випивати значно більше десятка бляшанок дієтичного напою на день, щоб перевищити межу. Людям із рідкісним генетичним станом [ФКУ (фенілкетонурія) аспартаму слід уникати](https://www.fda.gov/food/food-additives-petitions/aspartame-and-other-sweeteners-food); для решти чесний підсумок такий: «мабуть, нормально в помірних кількостях, але не те, що варто пити літрами». Він також втрачає солодкість при нагріванні, тож для випічки не годиться."
        },
        {
          "t": "p",
          "text": "Сукралоза довго вважалася інертною, але дослідження 2023 року це ускладнило. Науковці виявили, що [сукралоза-6-ацетат — домішка в комерційній сукралозі, а також сполука, яку кишківник із неї утворює, — пошкоджувала ДНК у лабораторних клітинах](https://www.tandfonline.com/doi/full/10.1080/10937404.2023.2213903), і що один солодкий сукралозою напій може перевищити поріг безпеки для генотоксичних речовин. Це лабораторна робота, а не доказ шкоди в людей, і регулятори свою позицію не змінили — але це привід не вважати сукралозу цілком безпечною. [Нагрівання сукралози теж може утворювати потенційно шкідливі сполуки](https://www.bfr.bund.de/en/notification/sucralose-heating-above-120c-can-produce-substances-that-are-harmful-to-health/), тож її краще не класти в духовку."
        },
        {
          "t": "p",
          "text": "Ацесульфам К (часто позначений Ace-K) майже завжди йде в суміші з аспартамом чи сукралозою, щоб заокруглити смак. Він схвалений уже десятиліттями й проходить через організм здебільшого незмінним. Головне відкрите питання — кишківник: [дослідження 2022 року в Cell виявило, що деякі нецукрові підсолоджувачі змінювали мікробіом кишківника та глюкозну відповідь](https://www.cell.com/cell/fulltext/S0092-8674(22)00919-9) у частини людей, причому ефекти різнилися від людини до людини. Сам ацесульфам К тут вивчений менше, що є власним аргументом на користь помірного вживання, а не впевненості."
        },
        {
          "t": "p",
          "text": "Сахарин — найстаріший у групі. Його зв'язок із раком сечового міхура у щурів у 1970-х [пізніше визнали таким, що не стосується людей, і його прибрали зі списків із попередженнями про рак](https://www.cancer.gov/about-cancer/causes-prevention/risk/diet/artificial-sweeteners-fact-sheet) — тож щодо класичного питання про рак його здебільшого виправдали. Новіше питання — знову мікробіом, де сахарин був одним із підсолоджувачів, що зсували кишкові бактерії та толерантність до глюкози в дослідженні 2022 року вище. Він дуже солодкий із металевим відтінком, тому його зазвичай використовують у суміші, а не окремо."
        },
        {
          "t": "p",
          "text": "Моє загальне ставлення до цієї групи таке саме, як і до цукрових спиртів: не тривожно, але й не «повна свобода». Якщо вживаєте їх — нехай це буде епізодичний місток геть від цукру, а не дозвіл лишати все солодким."
        },
        {
          "t": "h",
          "text": "Де знайти кожен із них"
        },
        {
          "t": "p",
          "text": "Підсолоджувачі рідко заявляють про себе на лицьовому боці упаковки — вони ховаються у списку інгредієнтів, часто по два-три в суміші. Ось короткий довідник, що де зазвичай трапляється, щоб ви могли прочитати етикетку й розуміти, що перед вами."
        },
        {
          "t": "table",
          "head": [
            "Підсолоджувач",
            "Тип",
            "Безпека",
            "Де зазвичай трапляється"
          ],
          "rows": [
            [
              "Стевія",
              "Натуральний (рослина)",
              "Висока",
              "Таблетки, саше й краплі для чаю та кави, «натурально підсолоджені» напої та ароматизовані води, деякі протеїнові батончики й йогурти"
            ],
            [
              "Монк-фрут",
              "Натуральний (рослина)",
              "Висока",
              "Суміші в таблетках і саше (зазвичай з еритритом), кето- та низьковуглеводні продукти, деякі напої без цукру"
            ],
            [
              "Алюлоза",
              "Натуральний (рідкісний цукор)",
              "Висока",
              "Спеціальні низьковуглеводні підсолоджувачі для випічки, деякі «кето» сиропи та морозиво; у Великій Британії та ЄС досі нішева"
            ],
            [
              "Еритрит",
              "Цукровий спирт",
              "Помірна",
              "Основа більшості цукрозамінників у саше «стевія» та «монк-фрут», кето-підсолоджувачі для випічки, шоколад і цукерки без цукру"
            ],
            [
              "Ксиліт",
              "Цукровий спирт",
              "Помірна",
              "Жувальна гумка й льодяники без цукру, зубна паста й ополіскувачі, «безпечні для зубів» цукерки (токсичний для собак)"
            ],
            [
              "Сорбіт",
              "Цукровий спирт",
              "Помірна",
              "Гумка й цукерки без цукру, сиропи від кашлю та інші рідкі ліки, зубна паста"
            ],
            [
              "Ізомальт",
              "Цукровий спирт",
              "Помірна",
              "Тверді льодяники без цукру, декоративні роботи з тортами й випічкою"
            ],
            [
              "Сукралоза",
              "Штучний",
              "Помірна",
              "Дієтичні напої та «зеро», напої «без доданого цукру», протеїнові порошки й батончики, десерти без цукру (бренд: Splenda)"
            ],
            [
              "Аспартам",
              "Штучний",
              "Помірна",
              "Дієтичні газовані напої, гумка без цукру, «легкі» та «дієтичні» йогурти й десерти, цукрозамінники в таблетках (Canderel, NutraSweet)"
            ],
            [
              "Ацесульфам К",
              "Штучний",
              "Помірна",
              "Дієтичні напої (майже завжди в суміші з аспартамом чи сукралозою), протеїнові батончики, багато продуктів без цукру"
            ],
            [
              "Сахарин",
              "Штучний",
              "Помірна",
              "Цукрозамінники в таблетках (Sweet'N Low, Hermesetas), деякі дієтичні напої та ліки"
            ],
            [
              "Мед, агава, кленовий та сиропи",
              "Цукри (натуральні)",
              "Низька",
              "Снеки «без рафінованого цукру» та зі здорового харчування, гранола й батончики, поливки й домашня випічка — метаболічно це все одно цукор"
            ]
          ]
        },
        {
          "t": "h",
          "text": "Що тепер кажуть великі настанови"
        },
        {
          "t": "p",
          "text": "Варто знати про два зрушення. У 2023 році [ВООЗ порадила не використовувати нецукрові підсолоджувачі для контролю ваги](https://www.who.int/news/item/15-05-2023-who-advises-not-to-use-non-sugar-sweeteners-for-weight-control-in-newly-released-guideline), дійшовши висновку, що вони не допомагають зменшити жир у тілі в довгостроковій перспективі й можуть бути пов'язані з діабетом 2 типу та серцево-судинними хворобами з часом. Важливо: ця настанова прямо не поширюється на людей, які вже мають діабет, і серед науковців вона викликала дискусії — але загальний вектор відводить від думки, що підсолоджувачі — це «безкоштовний обід» для схуднення."
        },
        {
          "t": "p",
          "text": "[Стандарти допомоги Американської діабетичної асоціації 2025 року](https://diabetesjournals.org/care/article/48/Supplement_1/S86/157563/) звучать прагматичніше для людей із діабетом: підсолоджувачі можуть бути розумною заміною цукру, у помірних кількостях і на короткий строк, щоб скоротити калорії та вуглеводи — за умови, що ви не компенсуєте це, з'їдаючи більше деінде. Уся суть — саме в цьому «не компенсуйте»."
        },
        {
          "t": "h",
          "text": "То як же обирати на практиці?"
        },
        {
          "t": "p",
          "text": "Якщо стиснути все це до практичної поради:"
        },
        {
          "t": "p",
          "text": "Найкращий вибір на щодень: стевія, монк-фрут або алюлоза — найкраще в суміші, бо кожен перекриває слабкі місця інших. Алюлоза — фаворит для випічки, якщо вдасться її знайти."
        },
        {
          "t": "p",
          "text": "Ощадливо, не щодня: еритрит і ксиліт. Зручність реальна; але й нова обережність теж. Потроху й зрідка, особливо за серцево-судинного ризику чи діабету."
        },
        {
          "t": "p",
          "text": "Ставтеся як до цукру, бо це він і є: мед, агава, кленовий, фініковий і кокосовий сиропи, фруктоза. Натуральні, смачні й метаболічно — приблизно як цукор."
        },
        {
          "t": "p",
          "text": "Більший важіль: мета не в тому, щоб підсолоджувати все «безпечним» порошком, а в тому, щоб поступово менше залежати від солодкого загалом. Підсолоджувачі найкраще працюють як місток, а не як пункт призначення."
        },
        {
          "t": "p",
          "text": "І найважливіший рядок, незмінний відтоді, як я вперше це написала: звертайте увагу на власну реакцію. Люди справді різняться за смаком, переносимістю й відповіддю рівня цукру. Пробуйте щось одне за раз і дайте власному тілу — найкраще з глюкометром чи CGM, якщо у вас діабет — зробити вирішальний голос."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "ВООЗ радить не використовувати нецукрові підсолоджувачі для контролю ваги.",
              "detail": "У 2023 році Всесвітня організація охорони здоров'я випустила настанову проти використання нецукрових підсолоджувачів для контролю маси тіла, після того як систематичний огляд не виявив довгострокової користі для жиру в тілі й показав можливі асоціації з діабетом 2 типу, серцево-судинними хворобами та смертністю. Рекомендація прямо не поширюється на людей, які вже мають діабет.",
              "cite": "Всесвітня організація охорони здоров'я · Настанова, 2023",
              "url": "https://www.who.int/news/item/15-05-2023-who-advises-not-to-use-non-sugar-sweeteners-for-weight-control-in-newly-released-guideline"
            },
            {
              "claim": "Вищий рівень еритриту в крові пов'язаний із серцево-судинними подіями.",
              "detail": "Дослідження 2023 року в Nature Medicine проаналізувало понад 4000 пацієнтів і виявило, що ті, у кого рівень еритриту в крові був найвищим, мали приблизно вдвічі більший ризик серйозних серцево-судинних подій. Лабораторні досліди й досліди на тваринах показали, що еритрит посилює тромбоутворення — правдоподібний механізм, хоча асоціація не є доказом причини, а організм ще й виробляє еритрит сам.",
              "cite": "Nature Medicine · Когортне та механістичне дослідження, 2023",
              "url": "https://www.nature.com/articles/s41591-023-02223-9"
            },
            {
              "claim": "Еритрит підвищував реактивність тромбоцитів навіть у здорових добровольців.",
              "detail": "Інтервенційне дослідження 2024 року дало 20 здоровим дорослим звичну порцію 30 г еритриту. Вона спричинила понад тисячократне зростання рівня еритриту в крові та гостре посилення агрегації тромбоцитів у кожного учасника — тоді як еквівалентна порція глюкози цього не зробила. Автори дійшли висновку, що еритрит може посилювати потенціал тромбоутворення й потребує повторної оцінки безпеки.",
              "cite": "Arteriosclerosis, Thrombosis & Vascular Biology · Інтервенційне дослідження, 2024",
              "url": "https://www.ahajournals.org/doi/10.1161/ATVBAHA.124.321019"
            },
            {
              "claim": "Ксиліт показує той самий сигнал, що й еритрит.",
              "detail": "Дослідження 2024 року в European Heart Journal від тієї ж наукової групи пов'язало вищий рівень ксиліту в крові зі збільшенням трирічного серцево-судинного ризику серед понад 3000 пацієнтів і виявило, що кожен показник здатності до згортання зростав одразу після вживання в дослідженні на людях. Ті самі застереження — асоціація плюс власне вироблення організмом — стосуються і його.",
              "cite": "European Heart Journal · Когортне та інтервенційне дослідження, 2024",
              "url": "https://academic.oup.com/eurheartj/article-abstract/45/27/2439/7683453"
            },
            {
              "claim": "Алюлоза згладжує післяобідню глюкозу за діабету 2 типу.",
              "detail": "Метааналіз рандомізованих контрольованих досліджень 2024 року виявив, що алюлоза суттєво зменшувала площу під кривою глюкози після їжі та час у зоні підвищених значень у людей із діабетом 2 типу, майже не впливаючи на глюкозу натще чи HbA1c — що підтримує її роль як низькокалорійного підсолоджувача для контролю глікемії.",
              "cite": "Метааналіз РКД · 2024",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11585728/"
            },
            {
              "claim": "Монк-фрут не підіймає глюкозу чи інсулін.",
              "detail": "Систематичний огляд рандомізованих контрольованих досліджень 2025 року за методологією PRISMA виявив, що екстракт монк-фрута не мав несприятливого впливу на глюкозу чи інсулін, а кілька досліджень показали знижену післяобідню глюкозну та інсулінову відповідь. Довгострокових даних щодо людей досі мало, але короткостроковий профіль безпеки та глікемії сприятливий.",
              "cite": "Nutrients · Систематичний огляд РКД, 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12073669/"
            },
            {
              "claim": "Концентрована фруктоза шкодить метаболізму.",
              "detail": "Огляд літератури 2024 року узагальнив докази, що харчова фруктоза в надлишку є потужним двигуном утворення жиру в печінці, жирової хвороби печінки, інсулінорезистентності та підвищених тригліцеридів — саме тому концентровані джерела фруктози, як-от сироп агави та інші сиропи, не є метаболічним покращенням порівняно з цукром, хоча фруктоза з цілих фруктів не викликає занепокоєння.",
              "cite": "Nutrients · Огляд літератури, 2024",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11663027/"
            },
            {
              "claim": "Аспартам: «можливо канцерогенний», але межі споживання незмінні.",
              "detail": "У 2023 році агенція ВООЗ із раку (IARC) класифікувала аспартам як «можливо канцерогенний для людини» (група 2B) на основі обмежених доказів, тоді як комітет із безпеки харчових продуктів (JECFA) підтвердив допустиме добове споживання 40 мг/кг маси тіла. Група 2B — це слабкий за впевненістю сигнал небезпеки, а не міра реального ризику: дорослому довелося б випивати значно більше десятка бляшанок дієтичного напою на день, щоб перевищити межу.",
              "cite": "Всесвітня організація охорони здоров'я · Оцінка IARC і JECFA, 2023",
              "url": "https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released"
            },
            {
              "claim": "Домішка сукралози пошкоджувала ДНК у лабораторії.",
              "detail": "Дослідження 2023 року повідомило, що сукралоза-6-ацетат — виробнича домішка в комерційній сукралозі, а також сполука, яку кишківник із неї утворює, — була генотоксичною (руйнувала ДНК) у лабораторних клітинних тестах, і що один солодкий сукралозою напій може перевищити поріг безпеки для генотоксичних речовин. Це робота in vitro, а не доказ шкоди в людей, але вона свідчить проти уявлення про сукралозу як цілком інертну.",
              "cite": "Journal of Toxicology and Environmental Health, Part B · Дослідження in vitro, 2023",
              "url": "https://www.tandfonline.com/doi/full/10.1080/10937404.2023.2213903"
            },
            {
              "claim": "Деякі підсолоджувачі змінюють мікробіом і глюкозну відповідь.",
              "detail": "Рандомізоване дослідження 2022 року в Cell виявило, що сахарин і сукралоза відчутно змінювали мікробіом кишківника та погіршували толерантність до глюкози в частини здорових дорослих, а аспартам і стевія теж показали зсуви мікробіому. Ефекти були персоналізованими — суттєво різнилися від людини до людини, — і це почасти пояснює, чому загальні твердження про ці підсолоджувачі робити важко.",
              "cite": "Cell · Рандомізоване контрольоване дослідження, 2022",
              "url": "https://www.cell.com/cell/fulltext/S0092-8674(22)00919-9"
            },
            {
              "claim": "АДА дозволяє підсолоджувачі як короткострокову заміну.",
              "detail": "Стандарти допомоги Американської діабетичної асоціації 2025 року зазначають, що нехарчові підсолоджувачі можуть бути прийнятною заміною цукру в помірних кількостях і на короткий строк, щоб зменшити споживання калорій і вуглеводів — за умови, що люди не компенсують це додатковими калоріями деінде. Воду й далі надають перевагу над солодкими напоями.",
              "cite": "Американська діабетична асоціація · Стандарти допомоги, 2025",
              "url": "https://diabetesjournals.org/care/article/48/Supplement_1/S86/157563/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Який натуральний підсолоджувач найкращий для рівня цукру?",
          "a": "Стевія, монк-фрут і алюлоза — найкращі варіанти: жоден із них суттєво не підіймає глюкозу чи інсулін, а алюлоза навіть може згладжувати післяобідні стрибки. Стевія й монк-фрут добре працюють у суміші, пом'якшуючи присмак одне одного. Алюлоза найближча до цукру за смаком і найкраще поводиться у випічці, хоча вона дорожча й поки не дозволена для продажу у Великій Британії та ЄС."
        },
        {
          "q": "Чи безпечний еритрит?",
          "a": "Еритрит не підіймає рівень цукру, але картина його безпеки змінилася. Від 2023 року дослідження пов'язують вищий рівень еритриту в крові з посиленням тромбоутворення та серцево-судинними подіями, а дослідження 2024 року виявило зростання реактивності тромбоцитів навіть у здорових добровольців після однієї порції. Це асоціація плюс правдоподібний механізм, а не доказ шкоди, до того ж організм сам виробляє еритрит. Невелике, епізодичне вживання прийнятне, але це вже не той підсолоджувач, який я раджу вживати вільно щодня — особливо за наявного діабету чи серцевого ризику."
        },
        {
          "q": "Чи корисніші мед або агава за цукор?",
          "a": "Ні, у жодному сенсі, що важить для рівня цукру чи ваги. Мед, кленовий сироп, фініковий сироп і кокосовий цукор — це по суті глюкоза й фруктоза зі слідами мінералів. Агава містить близько 85% фруктози — більше, ніж столовий цукор, — що робить її одним із гірших, а не кращих варіантів для метаболічного здоров'я та печінки. Якщо ви контролюєте діабет або вагу, ставтеся до всіх них як до цукру."
        },
        {
          "q": "Чи підіймає стевія рівень цукру?",
          "a": "Ні. Стевія без калорій і не підіймає глюкозу чи інсулін, тому вона залишається підсолоджувачем першого вибору для людей, які контролюють діабет або вагу. Ранні побоювання, що вона порушує мікробіом кишківника, не переросли в чітку шкоду в дослідженнях на людях. Її головний мінус — смак: вона може гіркнути, якщо покласти забагато, але не тоді, коли дозувати потроху."
        },
        {
          "q": "Чи вся стевія гірка?",
          "a": "Ні — гіркота виникає від передозування, а не від самої стевії. Оскільки стевія у сотні разів солодша за цукор, достатньо крихітної кількості; лакричний чи металевий присмак з'являється лише тоді, коли ви кладете більше, ніж потрібно. Починайте зі значно меншого, ніж здається природним, — дрібка порошку або крапля-дві рідини — і поступово додавайте, доки не стане достатньо солодко. Форма й бренд теж важать: очищені екстракти стевіол-глікозидів (особливо стандартизовані за ребаудіозидом А, часто позначені «Reb A») набагато менш гіркі, ніж цільнолистовий зелений порошок, а суміші з еритритом чи монк-фрутом ще краще заокруглюють смак. Якщо продукт усе одно гіркий навіть у малій дозі, змініть бренд, а не додавайте більше — від надлишку стевії гіркота лише посилюється."
        },
        {
          "q": "Чи безпечні штучні підсолоджувачі, як-от аспартам і сукралоза?",
          "a": "У межах звичайних кількостей регулятори досі вважають їх безпечними — але докази стали неоднозначнішими. У 2023 році агенція ВООЗ із раку класифікувала аспартам як можливо канцерогенний, хоча межу споживання залишили незмінною, і щоб її досягти, треба випити значно більше десятка дієтичних напоїв на день (людям із ФКУ його слід уникати). Лабораторне дослідження 2023 року виявило, що домішка сукралози може пошкоджувати ДНК, а деякі підсолоджувачі — зокрема сахарин і сукралоза — зсувають мікробіом кишківника в частини людей. Ніщо з цього не є доказом щоденної шкоди, але це привід сприймати їх як епізодичний місток геть від цукру, а не як повну свободу. Аспартам і сукралоза також розкладаються при нагріванні, тож для випічки не годяться."
        }
      ]
    }
  },
  {
    "slug": "protein-for-women-over-40",
    "date": "2026-07-04",
    "image": "/images/protein-for-women-over-40.jpg",
    "cats": [
      "nutrition"
    ],
    "en": {
      "cat": "Nutrition",
      "title": "Protein for women over 40: how much do you actually need?",
      "excerpt": "Why the official 0.8g/kg guideline falls short after 40 — and the protein targets that actually protect muscle, energy and blood sugar.",
      "meta": "4 July 2026 · 8 min read",
      "lead": "Getting enough protein after 40 is one of the most consistent things I hear women struggle with — and one of the things that made the biggest difference to my own energy and blood sugar stability. Here's what the evidence says, and what works in practice.",
      "seoTitle": "Protein for Women Over 40: How Much Do You Actually Need?",
      "metaDesc": "How much protein do women over 40 really need? Evidence-based targets, why needs rise in perimenopause, and how to hit them if you're managing blood sugar.",
      "blocks": [
        {
          "t": "p",
          "text": "Please always consult your healthcare professional before changing your diet."
        },
        {
          "t": "p",
          "text": "A few years ago, I started noticing I was losing muscle and feeling tired more easily, even though I was still training consistently. My blood sugar had already become harder to manage as my hormones shifted — [that battle I've written about before](/blog/perimenopause-diabetes-blood-sugar/) — but I also started wondering whether I was simply not eating enough protein."
        },
        {
          "t": "p",
          "text": "The honest answer was: no, I wasn't. I'd look at my plate and think it looked balanced, but when I actually tracked my intake I was hitting maybe 60–70g on a good day. For a woman my size, in my 40s, that's not enough."
        },
        {
          "t": "p",
          "text": "The thing that helped me understand this wasn't another generic article about eating more chicken. It was realising that my body, at this stage of life, handles protein differently — and needs considerably more of it than the official guidelines suggest."
        },
        {
          "t": "p",
          "text": "As a busy mum, getting whole-food protein into every meal — especially breakfast — isn't always realistic. I used to travel regularly for work, and the choice of food on a work trip can be genuinely limited. I've learned to keep a good protein powder mixed with flaxseeds in my bag, and add a scoop to water or a smoothie when I need something quick that won't send my blood sugar in the wrong direction."
        },
        {
          "t": "p",
          "text": "One thing I figured out the hard way: I try not to mix protein powder with regular dairy milk — it raises my blood sugar faster than I'd like. I use unsweetened almond, coconut or soya milk instead, and the difference is noticeable. If you're managing blood sugar alongside your nutrition, this kind of detail matters."
        },
        {
          "t": "h",
          "text": "Why your protein needs change after 40"
        },
        {
          "t": "p",
          "text": "Something changes biologically in your 40s — particularly if you're in perimenopause — that affects how your muscles respond to the protein you eat."
        },
        {
          "t": "p",
          "text": "As oestrogen declines, your body becomes less efficient at using dietary protein to build and repair muscle. [A 2018 review in Current Opinion in Clinical Nutrition and Metabolic Care](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4997405/) described this as anabolic resistance: the blunted muscle protein synthesis response that older adults experience after eating protein. Older women may see up to a 40% smaller increase in muscle protein synthesis than younger women, even eating identical amounts of protein. I felt it directly — my muscles had become less responsive, even though I was eating and training the same."
        },
        {
          "t": "p",
          "text": "Alongside this, age-related muscle loss — known as sarcopenia — accelerates from around 40 onwards and compounds further at menopause. [A 2023 systematic review in BMC Women's Health](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/) confirmed that menopausal women are at significantly elevated risk of sarcopenia, and found that increased dietary protein combined with resistance exercise was among the most effective interventions for preventing it. Muscle isn't just about strength or aesthetics — it plays a direct role in how your body handles blood glucose, your metabolic rate and your bone density."
        },
        {
          "t": "p",
          "text": "The good news is that protein intake is one of the most powerful levers you have to slow this process — and it's something you can act on today."
        },
        {
          "t": "h",
          "text": "So how much protein do women over 40 actually need?"
        },
        {
          "t": "p",
          "text": "The UK and US official recommendation — 0.8g of protein per kg of body weight per day — was set to prevent deficiency in the general adult population. It was never designed as a target for women navigating perimenopause, maintaining muscle, or managing blood sugar."
        },
        {
          "t": "p",
          "text": "[A 2025 study in Frontiers in Nutrition](https://pmc.ncbi.nlm.nih.gov/articles/PMC12104658/) found that women in the highest quintile of protein intake lost approximately 40% less lean muscle mass over three years than those in the lowest. Taken alongside the broader evidence, most nutrition researchers now place the practical target for women over 40 at 1.2–1.6g per kg of body weight per day as a baseline, rising to 1.6–2.0g/kg if you're strength training regularly."
        },
        {
          "t": "p",
          "text": "[Dr Stacy Sims](https://www.drstacysims.com/newsletters/articles/posts/optimal-protein-intake-for-women) goes further, recommending 2.0–2.3g/kg for women in perimenopause and menopause, specifically to counteract anabolic resistance:"
        },
        {
          "t": "quote",
          "text": "As we age, our bodies become more resistant to the muscle-building effects of protein and exercise, requiring higher doses of both."
        },
        {
          "t": "p",
          "text": "In practice, that looks like this:"
        },
        {
          "t": "table",
          "head": [
            "Your weight",
            "Minimum (1.2g/kg)",
            "Active (1.6g/kg)",
            "Perimenopause (2.0g/kg)"
          ],
          "rows": [
            [
              "55 kg",
              "66 g/day",
              "88 g/day",
              "110 g/day"
            ],
            [
              "65 kg",
              "78 g/day",
              "104 g/day",
              "130 g/day"
            ],
            [
              "75 kg",
              "90 g/day",
              "120 g/day",
              "150 g/day"
            ],
            [
              "85 kg",
              "102 g/day",
              "136 g/day",
              "170 g/day"
            ]
          ]
        },
        {
          "t": "p",
          "text": "If these numbers feel daunting compared to what you currently eat, start with the minimum for your weight and build from there. Even a modest increase tends to make a noticeable difference to energy, appetite regulation and body composition over a few weeks. And do check with your doctor first — a sudden jump in protein isn't right for everyone."
        },
        {
          "t": "h",
          "text": "How to actually eat more protein"
        },
        {
          "t": "p",
          "text": "The most useful shift is to plan meals around protein first, then add everything else around it. Most of us were taught to think of a meal with protein as one component; reversing that habit makes a real difference."
        },
        {
          "t": "p",
          "text": "Distribution matters as much as the total. [A study on postmenopausal women](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4042233/) found that consistent protein intake across meals was the primary driver of muscle protein anabolism — more than precise timing around workouts. Research consistently shows the body stimulates muscle protein synthesis most effectively when each meal provides roughly 25–40g of protein. Eating 120g at dinner is far less effective than spreading it across three meals. Front-loading protein at breakfast, where most women eat the least, is one of the most practical changes you can make."
        },
        {
          "t": "p",
          "text": "Some simple swaps that help: Greek yoghurt instead of regular yoghurt (nearly double the protein), eggs or smoked salmon at breakfast instead of cereal, cottage cheese as a snack, lentils or edamame added to salads, tinned fish in a wrap at lunch. None of these require cooking from scratch or meal-prepping at the weekend."
        },
        {
          "t": "p",
          "text": "A day that hits roughly 130g might look like this:"
        },
        {
          "t": "table",
          "head": [
            "Meal",
            "Example",
            "Protein"
          ],
          "rows": [
            [
              "Breakfast",
              "2 scrambled eggs + 150g Greek yoghurt with berries + protein hot chocolate",
              "~30g"
            ],
            [
              "Lunch",
              "Chicken salad — 150g chicken breast, mixed leaves, avocado, olive oil",
              "~45g"
            ],
            [
              "Snack",
              "Protein shake (whey isolate) with unsweetened almond milk + chia seeds",
              "~25g"
            ],
            [
              "Dinner",
              "Baked salmon fillet (140g) with roasted veg and a small portion of quinoa",
              "~35g"
            ],
            [
              "Total",
              "",
              "~135g"
            ]
          ]
        },
        {
          "t": "h",
          "text": "A note on protein shakes"
        },
        {
          "t": "p",
          "text": "Whole food first, always. But protein powder is a practical tool, not a shortcut. When travel, time or limited food options make hitting your protein target through food alone unrealistic, a good-quality shake is a genuinely useful bridge."
        },
        {
          "t": "p",
          "text": "If you're managing blood sugar, the type of shake and what you mix it with matters. Research on leucine — the branched-chain amino acid most responsible for triggering muscle protein synthesis — shows it's the key variable in how effectively a protein source supports muscle."
        },
        {
          "t": "p",
          "text": "[A guide published by Healthline](https://www.healthline.com/nutrition/10-high-leucine-foods) lists whey isolate among the highest leucine sources available, at roughly 2.7g per scoop. It's also low in lactose and carbohydrate, which is relevant if you're watching your glucose response. For a dairy-free alternative, a pea and rice protein blend provides the most complete amino acid profile of the plant-based options."
        },
        {
          "t": "p",
          "text": "From my own experience: mixing protein powder with regular dairy milk causes a faster blood sugar rise than mixing with water or unsweetened plant milk (apart from oat and rice milk, of course). The lactose and carbohydrate add up. If your glucose goes higher than expected after a shake, that's a simple variable worth checking. Adding a tablespoon of nut butter, ground flaxseed or chia seeds also slows absorption and keeps you full considerably longer."
        },
        {
          "t": "p",
          "text": "One thing to watch: collagen is often marketed alongside protein powders, but — as [Diatribe's guide on protein for blood sugar management](https://diatribe.org/diet-and-nutrition/best-proteins-blood-sugar-management) and the broader sports-nutrition literature note — collagen is not a complete protein. It's missing tryptophan and low in leucine. It has other potential uses, but it can't replace a proper protein supplement for muscle support."
        },
        {
          "t": "h",
          "text": "Signs you may not be getting enough"
        },
        {
          "t": "p",
          "text": "Loss of muscle tone even with your weight unchanged. Slower recovery after exercise. Persistent fatigue that sleep doesn't fix. Stronger cravings for sugar or carbohydrates. Thinning hair or brittle nails. These can all be signs that protein intake is too low."
        },
        {
          "t": "p",
          "text": "Protein is also one of the most satiating macronutrients, as described in [the American Diabetes Association's guidance on protein](https://diabetesfoodhub.org/blog/lets-talk-about-protein-people-diabetes). If you find it hard to feel satisfied after meals, or you're reaching for sweet things an hour later, increasing protein is often more effective than trying to manage those cravings through willpower alone."
        },
        {
          "t": "h",
          "text": "Trusted resources worth knowing about"
        },
        {
          "t": "p",
          "text": "If you want to go deeper, these are the sources I'd recommend:"
        },
        {
          "t": "links",
          "title": "Evidence-based places to start",
          "items": [
            {
              "name": "British Nutrition Foundation — Nutrition and Menopause",
              "url": "https://www.nutrition.org.uk/nutrition-for/women/menopause/",
              "desc": "One of the most credible UK nutrition bodies. Their menopause page covers protein alongside other key nutrients — solid official backing for UK readers."
            },
            {
              "name": "British Dietetic Association — Addressing Sarcopenia",
              "url": "https://www.bda.uk.com/resource/addressing-sarcopenia.html",
              "desc": "The UK professional body for registered dietitians, on protein's role in preventing and managing age-related muscle loss."
            },
            {
              "name": "Dr Stacy Sims — Optimal Protein Intake for Women",
              "url": "https://www.drstacysims.com/newsletters/articles/posts/optimal-protein-intake-for-women",
              "desc": "The most thorough, female-specific breakdown of protein needs across the lifespan, from an exercise physiologist focused on female physiology."
            },
            {
              "name": "Stanford Lifestyle Medicine — Protein Needs for Adults 50+",
              "url": "https://lifestylemedicine.stanford.edu/protein-needs-for-adults-50/",
              "desc": "A concise, evidence-based overview of why protein needs increase with age — useful to share with a sceptical GP."
            },
            {
              "name": "Momentous — Protein After 40: How Much Women Really Need",
              "url": "https://www.livemomentous.com/blogs/all/protein-for-women-over-40",
              "desc": "A detailed, well-referenced guide by registered dietitian Tyler Roof, with practical meal examples."
            },
            {
              "name": "Diatribe — Best Proteins for Blood Sugar Management",
              "url": "https://diatribe.org/diet-and-nutrition/best-proteins-blood-sugar-management",
              "desc": "Focused on people managing blood sugar — which protein sources and combinations work best."
            },
            {
              "name": "American Diabetes Association — Let's Talk About Protein",
              "url": "https://diabetesfoodhub.org/blog/lets-talk-about-protein-people-diabetes",
              "desc": "How protein affects blood glucose for people with diabetes, including what to watch for."
            }
          ]
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Women in the highest quintile of protein intake lost 40% less lean muscle mass over three years.",
              "detail": "A 2025 study in Frontiers in Nutrition examined protein intake and muscle composition in older women with sarcopenia. Those eating the most protein retained significantly more lean mass than those eating the least — one of the clearest recent demonstrations of how much protein intake matters for muscle preservation.",
              "cite": "Frontiers in Nutrition · Prospective study, 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12104658/"
            },
            {
              "claim": "Older women can build up to 40% less muscle from the same protein dose — a phenomenon called anabolic resistance.",
              "detail": "A 2018 review in Current Opinion in Clinical Nutrition and Metabolic Care established this finding. It explains why eating the same amount of protein as you did in your 30s is no longer enough: your muscles have become less responsive, so a higher dose is needed to achieve the same protective effect — and the difference compounds with age.",
              "cite": "Current Opinion in Clinical Nutrition and Metabolic Care · Review, 2018",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4997405/"
            },
            {
              "claim": "Increased protein intake, combined with resistance exercise, is among the most effective ways to prevent sarcopenia in menopausal women.",
              "detail": "A systematic review and meta-analysis of randomised controlled trials in BMC Women's Health (2023) examined non-pharmacological approaches to preventing sarcopenia in menopausal women. Dietary protein interventions were consistently among the most effective — particularly when paired with strength training.",
              "cite": "BMC Women's Health · Systematic review and meta-analysis, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            },
            {
              "claim": "Adequate protein is associated with significantly better physical performance in post-menopausal women aged 60–90.",
              "detail": "An analysis of post-menopausal women found that those with adequate dietary protein intake had substantially better grip strength, walking speed and overall physical performance scores. The association held after adjusting for age, BMI and physical activity levels.",
              "cite": "PMC · Observational analysis",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4433492/"
            },
            {
              "claim": "Consistent daily protein across meals drives muscle anabolism more than precise timing around workouts.",
              "detail": "A randomised controlled trial in postmenopausal women on a weight-loss programme found that while some trends around post-exercise timing appeared, total daily protein distributed across meals was the most important variable for muscle protein synthesis rates.",
              "cite": "PMC · Randomised controlled trial",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4042233/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, women's health writer living with type 1 diabetes",
          "text": "Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women's health, perimenopause, nutrition and diabetes management at lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Can I get enough protein on a plant-based diet?",
          "a": "Yes — but it takes more intention. Plant proteins tend to be lower in leucine and some are incomplete. Eating a wide variety of legumes, grains, nuts and seeds across the day covers the gaps, and a pea and rice protein blend is the most complete plant-based supplement option."
        },
        {
          "q": "Does eating more protein make women bulky?",
          "a": "No. Building visible muscle requires very specific resistance training and usually a calorie surplus. Adequate protein helps you preserve the muscle you already have — which generally results in a leaner, more defined look over time, not bulk."
        },
        {
          "q": "Is a higher protein intake safe?",
          "a": "For healthy adults with normal kidney function, intakes up to 2–2.5g/kg/day are well tolerated and not associated with kidney damage. The concern applies specifically to people with pre-existing kidney disease — if that's you, speak with your doctor before significantly increasing your intake. Drinking plenty of water alongside a higher-protein diet is always sensible."
        },
        {
          "q": "Does protein affect blood sugar?",
          "a": "Protein has a much smaller effect on blood glucose than carbohydrates, and it helps slow digestion — which can actually improve blood sugar stability. For people with type 1 diabetes, large amounts of protein without fat can cause a gradual, delayed glucose rise, so monitoring your individual response is sensible."
        },
        {
          "q": "What should I look for in a protein powder?",
          "a": "Third-party testing (NSF Certified for Sport or Informed Sport are reliable markers), minimal added sugar (under 3g per serving), and whey isolate or a pea/rice blend as the primary ingredient. Avoid anything labelled primarily as collagen protein — it isn't a complete protein and won't support muscle synthesis the way a proper protein supplement does."
        }
      ]
    },
    "ua": {
      "cat": "Харчування",
      "title": "Білок для жінок після 40: скільки насправді потрібно?",
      "excerpt": "Чому офіційна норма 0,8 г/кг замала після 40 — і які орієнтири білка справді захищають м'язи, енергію та цукор у крові.",
      "meta": "4 липня 2026 · 8 хв читання",
      "lead": "Отримати достатньо білка після 40 — одне з найчастіших питань, з якими стикаються жінки, і одна з тих речей, що найбільше вплинули на мою енергію та стабільність цукру в крові. Ось що каже наука і що працює на практиці.",
      "seoTitle": "Білок для жінок після 40: скільки насправді потрібно?",
      "metaDesc": "Скільки білка потрібно жінкам після 40? Науково обґрунтовані орієнтири, чому потреба зростає в перименопаузі та як їх досягти, якщо ви контролюєте цукор.",
      "blocks": [
        {
          "t": "p",
          "text": "Будь ласка, завжди консультуйтеся зі своїм лікарем, перш ніж змінювати раціон."
        },
        {
          "t": "p",
          "text": "Кілька років тому я почала помічати, що втрачаю м'язи і швидше втомлююся, хоча тренувалася так само регулярно. Мій цукор у крові вже став важче контролювати через гормональні зміни — [про цю боротьбу я вже писала](/ua/blog/perimenopause-diabetes-blood-sugar/) — але я також почала замислюватися, чи не їм я просто замало білка."
        },
        {
          "t": "p",
          "text": "Чесна відповідь: так, замало. Я дивилася на свою тарілку й думала, що вона збалансована, але коли справді порахувала, виходило щонайбільше 60–70 г у вдалий день. Для жінки мого розміру, за сорок, цього недостатньо."
        },
        {
          "t": "p",
          "text": "Те, що допомогло мені це зрозуміти, — не чергова загальна стаття про «їжте більше курки». Це усвідомлення, що моє тіло на цьому етапі життя інакше поводиться з білком — і потребує його значно більше, ніж радять офіційні норми."
        },
        {
          "t": "p",
          "text": "Як зайнята мама, я не завжди можу покласти цільне джерело білка в кожен прийом їжі — особливо на сніданок. Раніше я регулярно їздила у робочі відрядження, а вибір їжі в дорозі буває справді обмеженим. Я навчилася тримати в сумці якісний протеїновий порошок, змішаний із насінням льону, і додаю ложку у воду чи смузі, коли треба щось швидке, що не підніме цукор."
        },
        {
          "t": "p",
          "text": "Одне, що я зрозуміла на власному досвіді: я намагаюся не змішувати протеїновий порошок зі звичайним коров'ячим молоком — воно піднімає мій цукор швидше, ніж хотілося б. Замість нього використовую несолодке мигдалеве, кокосове чи соєве молоко, і різниця помітна. Якщо ви контролюєте цукор разом із харчуванням, така деталь має значення."
        },
        {
          "t": "h",
          "text": "Чому потреба в білку змінюється після 40"
        },
        {
          "t": "p",
          "text": "Щось змінюється біологічно у ваші сорок — особливо під час перименопаузи — і це впливає на те, як м'язи реагують на з'їдений білок."
        },
        {
          "t": "p",
          "text": "Зі зниженням естрогену тіло гірше використовує харчовий білок для побудови та відновлення м'язів. [Огляд 2018 року в Current Opinion in Clinical Nutrition and Metabolic Care](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4997405/) назвав це анаболічною резистентністю: приглушеною реакцією синтезу м'язового білка, яку люди старшого віку мають після вживання білка. Жінки старшого віку можуть мати до 40% меншого приросту синтезу м'язового білка, ніж молодші, навіть з'їдаючи однакову кількість білка. Я відчула це напряму — мої м'язи стали менш чутливими, хоча я їла й тренувалася так само."
        },
        {
          "t": "p",
          "text": "Поряд із цим вікова втрата м'язів — саркопенія — прискорюється приблизно з 40 років і ще більше посилюється в менопаузі. [Систематичний огляд 2023 року в BMC Women's Health](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/) підтвердив, що жінки в менопаузі мають значно підвищений ризик саркопенії, і що збільшення білка в раціоні разом із силовими вправами — один із найефективніших способів її запобігти. М'язи — це не лише про силу чи естетику: вони напряму впливають на те, як тіло керує глюкозою, на метаболізм і щільність кісток."
        },
        {
          "t": "p",
          "text": "Хороша новина в тому, що споживання білка — один із найпотужніших важелів, щоб уповільнити цей процес. І діяти можна вже сьогодні."
        },
        {
          "t": "h",
          "text": "То скільки білка насправді потрібно жінкам після 40?"
        },
        {
          "t": "p",
          "text": "Офіційна норма у Великій Британії та США — 0,8 г білка на кг ваги на добу — була встановлена, щоб запобігти дефіциту в загальної дорослої популяції. Її ніколи не задумували як орієнтир для жінок у перименопаузі, для збереження м'язів чи контролю цукру."
        },
        {
          "t": "p",
          "text": "[Дослідження 2025 року в Frontiers in Nutrition](https://pmc.ncbi.nlm.nih.gov/articles/PMC12104658/) виявило, що жінки з найвищого квінтиля споживання білка втратили приблизно на 40% менше м'язової маси за три роки, ніж ті, хто їв найменше. З огляду на ширшу доказову базу більшість дослідників харчування нині ставлять практичний орієнтир для жінок після 40 на рівні 1,2–1,6 г на кг ваги на добу як базовий, зростаючи до 1,6–2,0 г/кг, якщо ви регулярно тренуєтеся силовими."
        },
        {
          "t": "p",
          "text": "[Д-р Стейсі Сімс](https://www.drstacysims.com/newsletters/articles/posts/optimal-protein-intake-for-women) йде далі, рекомендуючи 2,0–2,3 г/кг для жінок у перименопаузі та менопаузі, саме щоб протидіяти анаболічній резистентності:"
        },
        {
          "t": "quote",
          "text": "З віком наше тіло стає більш стійким до м'язобудівного ефекту білка й вправ, тож потрібні вищі дози обох."
        },
        {
          "t": "p",
          "text": "На практиці це виглядає так:"
        },
        {
          "t": "table",
          "head": [
            "Ваша вага",
            "Мінімум (1,2 г/кг)",
            "Активним (1,6 г/кг)",
            "Перименопауза (2,0 г/кг)"
          ],
          "rows": [
            [
              "55 кг",
              "66 г/день",
              "88 г/день",
              "110 г/день"
            ],
            [
              "65 кг",
              "78 г/день",
              "104 г/день",
              "130 г/день"
            ],
            [
              "75 кг",
              "90 г/день",
              "120 г/день",
              "150 г/день"
            ],
            [
              "85 кг",
              "102 г/день",
              "136 г/день",
              "170 г/день"
            ]
          ]
        },
        {
          "t": "p",
          "text": "Якщо ці цифри здаються лякаючими порівняно з тим, що ви їсте зараз, почніть із мінімуму для своєї ваги й нарощуйте поступово. Навіть помірне збільшення зазвичай дає помітну різницю в енергії, регуляції апетиту та композиції тіла за кілька тижнів. І спершу порадьтеся з лікарем — різке збільшення білка підходить не всім."
        },
        {
          "t": "h",
          "text": "Як насправді їсти більше білка"
        },
        {
          "t": "p",
          "text": "Найкорисніша зміна — планувати страви навколо білка, а вже потім додавати решту. Більшість із нас звикли думати про страву, де білок — лише один складник. Змінити цю звичку — справді помічно."
        },
        {
          "t": "p",
          "text": "Розподіл важливий не менше за загальну кількість. [Дослідження за участю жінок у постменопаузі](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4042233/) показало, що саме рівномірне споживання білка протягом дня було головним драйвером анаболізму м'язового білка — важливішим за точний час навколо тренувань. Дослідження стабільно показують, що тіло найкраще стимулює синтез м'язового білка, коли кожен прийом їжі дає приблизно 25–40 г білка. З'їсти 120 г за вечерею значно менш ефективно, ніж розподілити на три прийоми. Додати білок на сніданок, де жінки зазвичай їдять його найменше, — одна з найпрактичніших змін."
        },
        {
          "t": "p",
          "text": "Кілька простих замін, що допомагають: грецький йогурт замість звичайного (майже вдвічі більше білка), яйця чи слабосолений лосось на сніданок замість пластівців, кисломолочний сир (cottage cheese) як перекус, сочевиця чи едамаме в салати, консервована риба у рапі на обід. Жодне з цього не потребує готування з нуля чи заготовок на вихідних."
        },
        {
          "t": "p",
          "text": "День, що дає приблизно 130 г, може виглядати так:"
        },
        {
          "t": "table",
          "head": [
            "Прийом їжі",
            "Приклад",
            "Білок"
          ],
          "rows": [
            [
              "Сніданок",
              "2 яйця-бовтанки + 150 г грецького йогурту з ягодами + протеїновий гарячий шоколад",
              "~30 г"
            ],
            [
              "Обід",
              "Салат з куркою — 150 г курячої грудки, мікс салату, авокадо, оливкова олія",
              "~45 г"
            ],
            [
              "Перекус",
              "Протеїновий шейк (ізолят сироватки) на несолодкому мигдалевому молоці + чіа",
              "~25 г"
            ],
            [
              "Вечеря",
              "Запечене філе лосося (140 г) з печеними овочами та невеликою порцією кіноа",
              "~35 г"
            ],
            [
              "Разом",
              "",
              "~135 г"
            ]
          ]
        },
        {
          "t": "h",
          "text": "Кілька слів про протеїнові шейки"
        },
        {
          "t": "p",
          "text": "Цільна їжа — завжди на першому місці. Але протеїновий порошок — це практичний інструмент, а не скорочення шляху. Коли відрядження, брак часу чи обмежений вибір їжі роблять досягнення норми білка лише з їжі нереалістичним, якісний шейк — справді корисний місток."
        },
        {
          "t": "p",
          "text": "Якщо ви контролюєте цукор, тип шейка і те, з чим ви його змішуєте, має значення. Дослідження лейцину — амінокислоти з розгалуженим ланцюгом, що найбільше запускає синтез м'язового білка, — показують, що саме він є ключовою змінною в тому, наскільки ефективно джерело білка підтримує м'язи."
        },
        {
          "t": "p",
          "text": "[Гайд від Healthline](https://www.healthline.com/nutrition/10-high-leucine-foods) називає ізолят сироватки одним із найбагатших джерел лейцину — приблизно 2,7 г на порцію. Він також низький за лактозою й вуглеводами, що важливо, якщо ви стежите за глюкозною реакцією. Для безмолочної альтернативи суміш горохового й рисового білка дає найповніший амінокислотний профіль серед рослинних варіантів."
        },
        {
          "t": "p",
          "text": "З власного досвіду: змішування протеїнового порошку зі звичайним коров'ячим молоком дає швидший підйом цукру, ніж із водою чи несолодким рослинним молоком (крім вівсяного та рисового, звісно). Лактоза й вуглеводи додаються. Якщо ваша глюкоза після шейка вища за очікувану, це проста змінна, яку варто перевірити. Додавання ложки горіхової пасти, меленого льону чи чіа також уповільнює всмоктування й довше тримає ситість."
        },
        {
          "t": "p",
          "text": "На що звернути увагу: колаген часто продають поряд із протеїновими порошками, але — як зазначають [гайд Diatribe про білок для контролю цукру](https://diatribe.org/diet-and-nutrition/best-proteins-blood-sugar-management) і ширша спортивно-нутриціологічна література — колаген не є повноцінним білком. Йому бракує триптофану, і він низький за лейцином. Він має інше застосування, але не може замінити повноцінну білкову добавку для підтримки м'язів."
        },
        {
          "t": "h",
          "text": "Ознаки, що вам може бракувати білка"
        },
        {
          "t": "p",
          "text": "Втрата м'язового тонусу навіть за незмінної ваги. Повільніше відновлення після навантажень. Стійка втома, яку не знімає сон. Сильніша тяга до солодкого чи вуглеводів. Тонше волосся або ламкі нігті. Усе це може бути ознаками, що білка замало."
        },
        {
          "t": "p",
          "text": "Білок також один із найситніших макронутрієнтів, як описано в [настанові Американської діабетичної асоціації про білок](https://diabetesfoodhub.org/blog/lets-talk-about-protein-people-diabetes). Якщо вам важко почуватися ситою після їжі або ви тягнетеся до солодкого за годину, збільшення білка часто ефективніше, ніж боротьба з тягою лише силою волі."
        },
        {
          "t": "h",
          "text": "Надійні ресурси, які варто знати"
        },
        {
          "t": "p",
          "text": "Якщо хочете заглибитися, ось джерела, які я б порадила:"
        },
        {
          "t": "links",
          "title": "Науково обґрунтовані джерела, з яких варто почати",
          "items": [
            {
              "name": "British Nutrition Foundation — харчування та менопауза",
              "url": "https://www.nutrition.org.uk/nutrition-for/women/menopause/",
              "desc": "Один із найавторитетніших нутриціологічних органів Великої Британії. Сторінка про менопаузу охоплює білок поряд з іншими ключовими нутрієнтами — надійна офіційна опора для читачок із Великої Британії."
            },
            {
              "name": "British Dietetic Association — про саркопенію",
              "url": "https://www.bda.uk.com/resource/addressing-sarcopenia.html",
              "desc": "Британський професійний орган дієтологів — про роль білка в запобіганні та керуванні віковою втратою м'язів."
            },
            {
              "name": "Д-р Стейсі Сімс — Optimal Protein Intake for Women",
              "url": "https://www.drstacysims.com/newsletters/articles/posts/optimal-protein-intake-for-women",
              "desc": "Найдетальніший, специфічний для жінок розбір потреби в білку впродовж життя від фізіологині, яка присвятила кар'єру жіночій фізіології."
            },
            {
              "name": "Stanford Lifestyle Medicine — Protein Needs for Adults 50+",
              "url": "https://lifestylemedicine.stanford.edu/protein-needs-for-adults-50/",
              "desc": "Стислий, науково обґрунтований огляд, чому потреба в білку зростає з віком — зручно показати скептичному лікарю."
            },
            {
              "name": "Momentous — Protein After 40: How Much Women Really Need",
              "url": "https://www.livemomentous.com/blogs/all/protein-for-women-over-40",
              "desc": "Детальний гайд із посиланнями від дієтологині Тайлер Руф, із практичними прикладами страв."
            },
            {
              "name": "Diatribe — Best Proteins for Blood Sugar Management",
              "url": "https://diatribe.org/diet-and-nutrition/best-proteins-blood-sugar-management",
              "desc": "Орієнтований на тих, хто контролює цукор — які джерела білка й поєднання працюють найкраще."
            },
            {
              "name": "American Diabetes Association — Let's Talk About Protein",
              "url": "https://diabetesfoodhub.org/blog/lets-talk-about-protein-people-diabetes",
              "desc": "Як білок впливає на глюкозу в людей з діабетом і на що звертати увагу."
            }
          ]
        },
        {
          "t": "h",
          "text": "Що каже дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Жінки з найвищого квінтиля споживання білка втратили на 40% менше м'язової маси за три роки.",
              "detail": "Дослідження 2025 року в Frontiers in Nutrition вивчало споживання білка й композицію м'язів у жінок старшого віку із саркопенією. Ті, хто їв найбільше білка, зберегли значно більше м'язової маси, ніж ті, хто їв найменше, — одна з найяскравіших нещодавніх демонстрацій того, наскільки білок важливий для збереження м'язів.",
              "cite": "Frontiers in Nutrition · Проспективне дослідження, 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12104658/"
            },
            {
              "claim": "Жінки старшого віку можуть будувати до 40% менше м'язів із тієї ж дози білка — це явище називають анаболічною резистентністю.",
              "detail": "Огляд 2018 року в Current Opinion in Clinical Nutrition and Metabolic Care обґрунтував цей висновок. Він пояснює, чому їсти стільки ж білка, скільки у свої тридцять, уже недостатньо: м'язи стали менш чутливими, тож потрібна вища доза для того самого захисного ефекту — і різниця зростає з віком.",
              "cite": "Current Opinion in Clinical Nutrition and Metabolic Care · Огляд, 2018",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4997405/"
            },
            {
              "claim": "Збільшення білка в раціоні разом із силовими вправами — один із найефективніших способів запобігти саркопенії в жінок у менопаузі.",
              "detail": "Систематичний огляд і метааналіз рандомізованих контрольованих досліджень у BMC Women's Health (2023) розглянув нефармакологічні підходи до запобігання саркопенії в жінок у менопаузі. Білкові втручання стабільно були серед найефективніших — особливо в поєднанні із силовими тренуваннями.",
              "cite": "BMC Women's Health · Систематичний огляд і метааналіз, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            },
            {
              "claim": "Достатній білок пов'язаний зі значно кращою фізичною працездатністю в жінок у постменопаузі 60–90 років.",
              "detail": "Аналіз жінок у постменопаузі показав, що ті, хто споживав достатньо білка, мали суттєво кращу силу хвату, швидкість ходьби та загальні показники фізичної працездатності. Зв'язок зберігався після поправки на вік, ІМТ і рівень фізичної активності.",
              "cite": "PMC · Обсерваційний аналіз",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4433492/"
            },
            {
              "claim": "Стабільне щоденне споживання білка протягом дня керує анаболізмом м'язів більше, ніж точний час навколо тренувань.",
              "detail": "Рандомізоване контрольоване дослідження жінок у постменопаузі на програмі схуднення показало, що хоча деякі тенденції щодо часу після вправ і спостерігалися, саме загальний добовий білок, розподілений по прийомах їжі, був найважливішою змінною для швидкості синтезу м'язового білка.",
              "cite": "PMC · Рандомізоване контрольоване дослідження",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4042233/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, авторка про жіноче здоров'я, що живе з діабетом 1 типу",
          "text": "Lena Filatova живе з діабетом 1 типу вже 23 роки. Вона пише про жіноче здоров'я, перименопаузу, харчування та контроль діабету на lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Чи можна отримати достатньо білка на рослинній дієті?",
          "a": "Так — але це потребує більше уваги. Рослинні білки зазвичай нижчі за лейцином, а деякі неповноцінні. Різноманіття бобових, злаків, горіхів і насіння протягом дня закриває прогалини, а суміш горохового й рисового білка — найповніший рослинний варіант добавки."
        },
        {
          "q": "Чи роблять жінок «масивними» більше білка?",
          "a": "Ні. Побудова помітних м'язів потребує дуже специфічних силових тренувань і зазвичай надлишку калорій. Достатній білок допомагає зберегти вже наявні м'язи — що з часом дає радше стрункіший, підтягнутіший вигляд, а не масивність."
        },
        {
          "q": "Чи безпечно споживати більше білка?",
          "a": "Для здорових дорослих із нормальною функцією нирок споживання до 2–2,5 г/кг на добу добре переноситься й не пов'язане з ушкодженням нирок. Застереження стосується саме людей із наявними захворюваннями нирок — якщо це ваш випадок, порадьтеся з лікарем, перш ніж суттєво збільшувати білок. Пити достатньо води разом із високобілковим раціоном завжди розумно."
        },
        {
          "q": "Чи впливає білок на цукор у крові?",
          "a": "Білок значно менше впливає на глюкозу, ніж вуглеводи, і допомагає сповільнити травлення — що насправді може покращити стабільність цукру. У людей із діабетом 1 типу велика кількість білка без жиру може спричинити поступовий відтермінований підйом глюкози, тож відстежувати власну реакцію розумно."
        },
        {
          "q": "На що звертати увагу в протеїновому порошку?",
          "a": "Тестування третьою стороною (NSF Certified for Sport або Informed Sport — надійні маркери), мінімум доданого цукру (менше 3 г на порцію) та ізолят сироватки або суміш гороху/рису як основний інгредієнт. Уникайте всього, що позначене насамперед як колагеновий білок — це не повноцінний білок і він не підтримає синтез м'язів так, як належна білкова добавка."
        }
      ]
    }
  },
  {
    "slug": "type-2-diabetes-research",
    "date": "2026-06-26",
    "image": "/images/type-2-diabetes-research-meal-order.jpg",
    "cats": [
      "diabetes"
    ],
    "en": {
      "cat": "Diabetes",
      "title": "What new research says about type 2 diabetes",
      "excerpt": "Recent findings on remission, meal order, time-restricted eating and sleep — and what's actually worth trying.",
      "meta": "26 June 2026 · 8 min read",
      "lead": "The science of type 2 diabetes is moving faster than the headlines suggest — and some of the most important findings are ones you're unlikely to hear in a ten-minute GP appointment. Here's what recent research actually says, and what's genuinely worth trying.",
      "blocks": [
        {
          "t": "p",
          "text": "The story told about type 2 diabetes for the past few decades has been fairly consistent: it develops gradually, usually from lifestyle factors, it is progressive, and once you have it, you manage it forever. The conversation tends to centre on what you did to get there, and what medication you will need over time."
        },
        {
          "t": "p",
          "text": "That story is being substantially rewritten."
        },
        {
          "t": "p",
          "text": "Researchers are now questioning whether type 2 diabetes is even a single condition. Remission data from rigorous clinical trials is challenging the idea that it is permanent. And a growing body of evidence is pointing to tools — some surprisingly simple — that make a meaningful difference to blood glucose, independently of medication."
        },
        {
          "t": "p",
          "text": "None of this is a miracle narrative. But it is worth knowing."
        },
        {
          "t": "h",
          "text": "Remission is real — and it can last"
        },
        {
          "t": "p",
          "text": "[The DiRECT trial](https://www.thelancet.com/journals/landia/article/PIIS2213-8587%2823%2900385-6/fulltext), which ran in GP practices across the UK and Scotland, set out to test whether type 2 diabetes could go into remission through a structured dietary intervention. The results, now at five years, are striking."
        },
        {
          "t": "p",
          "text": "Almost half of participants — 46% — achieved remission within the first year. By year two, that figure was 36%. And critically, 26% of those who had reached remission at two years were still in remission at five years, with no diabetes medication."
        },
        {
          "t": "p",
          "text": "There was also a halving of serious medical events requiring hospitalisation in the diet intervention group compared to those receiving standard care."
        },
        {
          "t": "p",
          "text": "The intervention itself was demanding: an 830-calorie formula diet for twelve weeks to produce significant weight loss, followed by supported reintroduction of ordinary food and ongoing help with weight maintenance. For those who lost more than 10 kg, three-quarters achieved remission at both one and two years."
        },
        {
          "t": "p",
          "text": "This does not mean remission is achievable or appropriate for everyone. But it firmly dismantles the assumption that type 2 diabetes is irreversible — and that assumption has, for a long time, quietly removed hope from the conversation."
        },
        {
          "t": "h",
          "text": "It may not be one disease"
        },
        {
          "t": "p",
          "text": "One of the more significant shifts happening in diabetes research right now is the move away from treating type 2 diabetes as a single condition."
        },
        {
          "t": "p",
          "text": "[A 2025 paper in The Lancet Diabetes & Endocrinology](https://www.thelancet.com/journals/landia/article/PIIS2213-8587%2825%2900256-6/abstract) put it plainly: for decades, type 2 diabetes has been managed as a monolithic condition treated via uniform, stepwise algorithms — an approach that increasingly fails to account for its biological heterogeneity."
        },
        {
          "t": "p",
          "text": "Four broad subtypes have now been identified: mild age-related diabetes (more common in older adults, with relatively low complication risk); mild obesity-related diabetes (linked to excess weight, with a generally milder metabolic profile); severe insulin-resistant diabetes (a higher risk of kidney disease); and severe insulin-deficient diabetes (closer in some ways to type 1, with a higher risk of eye disease)."
        },
        {
          "t": "p",
          "text": "Why does this matter practically? Because it means what works well for one person with a type 2 diagnosis may do very little for another — and it makes the habit of attributing the condition to personal choices even less defensible than it already was."
        },
        {
          "t": "p",
          "text": "The direction of travel in research is towards precision medicine: matching treatment and lifestyle strategies to individual biology, rather than everyone following the same protocol."
        },
        {
          "t": "h",
          "text": "When you eat may matter as much as what you eat"
        },
        {
          "t": "p",
          "text": "Two findings here are worth knowing about."
        },
        {
          "t": "p",
          "text": "Meal order. Research from Weill Cornell Medical College and others has consistently found that eating vegetables and protein before carbohydrates significantly reduces the blood sugar spike after a meal. In people with type 2 diabetes, starting with vegetables and protein before carbohydrates reduced post-meal blood sugar peaks by around 54% compared with eating carbohydrates first. One researcher described the magnitude of effect as comparable to what you might expect from a blood glucose medication."
        },
        {
          "t": "p",
          "text": "[A longer-term retrospective study following patients for five years](https://pmc.ncbi.nlm.nih.gov/articles/PMC9322906/) found that those using a food-order approach — vegetables and protein first, carbohydrates last — saw their HbA1c improve from 8.5% to 7.6%, while the control group saw no meaningful change."
        },
        {
          "t": "p",
          "text": "This costs nothing, requires no prescription, and can be applied at any meal."
        },
        {
          "t": "p",
          "text": "Time-restricted eating. [A 2025 meta-analysis of eight randomised controlled trials](https://www.mdpi.com/1422-0067/26/15/7310) found that time-restricted eating — eating within a defined window each day, typically eight to ten hours — significantly reduced fasting glucose and HbA1c, and increased time in range for blood glucose. The improvements were modest but consistent across studies. A separate 2024 randomised controlled trial found HbA1c improved comparably in participants following time-restricted eating and those receiving individualised dietetic guidance."
        },
        {
          "t": "p",
          "text": "Neither approach is a replacement for medication, and anyone adjusting their eating pattern significantly should speak with their healthcare team first. But both have meaningful evidence behind them and are worth discussing."
        },
        {
          "t": "h",
          "text": "Sleep and blood sugar — especially for women"
        },
        {
          "t": "p",
          "text": "This is an area that receives far less attention than it deserves."
        },
        {
          "t": "p",
          "text": "[Research from the National Heart, Lung, and Blood Institute](https://www.nhlbi.nih.gov/news/2023/chronic-sleep-deficiency-increases-insulin-resistance-women-especially-postmenopausal) found that chronic insufficient sleep significantly increases insulin resistance in otherwise healthy women — with more pronounced effects in postmenopausal women. The effect was independent of body weight, meaning poor sleep acts on blood sugar through its own pathways, not simply by making people less active or more likely to eat poorly."
        },
        {
          "t": "p",
          "text": "Insulin resistance is central to type 2 diabetes risk. And yet sleep quality is rarely addressed in a standard diabetes review."
        },
        {
          "t": "p",
          "text": "For women in their forties and fifties — where [perimenopause is already disrupting sleep](/blog/perimenopause-diabetes-blood-sugar/), and oestrogen is affecting insulin sensitivity — this compounds quickly. It is one more reason to treat sleep as a non-negotiable pillar of metabolic health, not something to sort out later."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Remission from type 2 diabetes through diet and weight loss is achievable and can persist for years.",
              "detail": "The five-year DiRECT Extension Study, involving GP practices across the UK, found that 26% of participants who had achieved remission at two years were still in remission at five years without diabetes medication. The longer participants maintained weight loss, the lower their risk of diabetes-related complications.",
              "cite": "The Lancet Diabetes & Endocrinology · Extension study, 2024",
              "url": "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(23)00385-6/fulltext"
            },
            {
              "claim": "Type 2 diabetes is not a single disease, and treatment should reflect that.",
              "detail": "A 2025 analysis argued that the field needs to move away from treating type 2 diabetes as one uniform condition, identifying at least four distinct subtypes with different risk profiles, complications and likely responses to treatment.",
              "cite": "The Lancet Diabetes & Endocrinology · Analysis, 2025",
              "url": "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(25)00256-6/abstract"
            },
            {
              "claim": "Eating vegetables and protein before carbohydrates substantially reduces post-meal blood sugar.",
              "detail": "Multiple studies, including a five-year retrospective cohort study, have found that consistently starting meals with vegetables and protein rather than carbohydrates leads to significantly lower post-meal glucose peaks and meaningful improvements in HbA1c over time.",
              "cite": "PMC / NCBI · Retrospective cohort study, 2022",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9322906/"
            },
            {
              "claim": "Time-restricted eating improves glycaemic control in type 2 diabetes.",
              "detail": "A 2025 systematic review and meta-analysis of eight randomised controlled trials found that time-restricted eating significantly reduced fasting glucose and HbA1c and increased time in range — with consistent results across study populations.",
              "cite": "International Journal of Molecular Sciences (MDPI) · Meta-analysis, 2025",
              "url": "https://www.mdpi.com/1422-0067/26/15/7310"
            },
            {
              "claim": "Chronic sleep deficiency increases insulin resistance in women, particularly after menopause.",
              "detail": "An NHLBI-funded study found that insufficient sleep independently impairs insulin sensitivity in women, with stronger effects in postmenopausal women — separate from any changes in body weight.",
              "cite": "NHLBI / NIH · Clinical study",
              "url": "https://www.nhlbi.nih.gov/news/2023/chronic-sleep-deficiency-increases-insulin-resistance-women-especially-postmenopausal"
            }
          ]
        },
        {
          "t": "links",
          "title": "UK resources worth knowing about",
          "items": [
            {
              "name": "Diabetes UK — Type 2 diabetes",
              "url": "https://www.diabetes.org.uk/about-diabetes/type-2-diabetes",
              "desc": "Comprehensive, evidence-based information on type 2 diabetes management, remission and lifestyle approaches. They also run a helpline on 0345 123 2399."
            },
            {
              "name": "NHS — Type 2 diabetes",
              "url": "https://www.nhs.uk/conditions/type-2-diabetes/",
              "desc": "Covers diagnosis, treatment and the NHS Diabetes Prevention Programme, which offers free structured support for people at high risk."
            }
          ]
        },
        {
          "t": "h",
          "text": "What to take from this"
        },
        {
          "t": "p",
          "text": "Type 2 diabetes research in 2024 and 2025 points in a consistent direction: the condition is more varied, more responsive to change, and less fixed than we were led to believe."
        },
        {
          "t": "p",
          "text": "Remission is not guaranteed — but it is possible for some people, and that possibility is grounded in rigorous trial data, not wishful thinking. The biology is more complex than a single narrative about lifestyle, and the tools available — including some very simple ones like meal order — are broader than most people realise."
        },
        {
          "t": "p",
          "text": "If you have a type 2 diagnosis, or are managing elevated blood sugar, the research increasingly supports bringing sleep, meal timing and eating sequence into the conversation alongside medication and diet — not as replacements, but as pieces of the same picture."
        },
        {
          "t": "p",
          "text": "Every decision about your management should be made with your healthcare team. The goal here is to make sure you walk into those appointments knowing what to ask about."
        }
      ],
      "faq": [
        {
          "q": "Can type 2 diabetes go into remission?",
          "a": "Yes, for some people. The five-year DiRECT trial found 46% of participants reached remission in the first year, and 26% of those in remission at two years were still medication-free at five years. It's most likely with substantial, sustained weight loss — especially soon after diagnosis — and support from your diabetes team, though it isn't achievable or right for everyone."
        },
        {
          "q": "Does eating order really affect blood sugar?",
          "a": "Yes. Eating vegetables and protein before carbohydrates has been shown to cut the post-meal blood sugar spike by around 54% versus eating carbs first, and one five-year study saw HbA1c fall from 8.5% to 7.6% in people using this order. It costs nothing, needs no prescription, and works at any meal."
        },
        {
          "q": "Is time-restricted eating safe for people with type 2 diabetes?",
          "a": "For many people it can help — a 2025 meta-analysis of eight trials found that eating within a set daily window (typically 8–10 hours) modestly lowered fasting glucose and HbA1c and improved time in range. It isn't a replacement for medication, and if you take glucose-lowering drugs, speak to your healthcare team before big changes to when you eat, to avoid hypos."
        },
        {
          "q": "Why does sleep affect blood sugar?",
          "a": "Chronic poor sleep raises insulin resistance — the core driver of type 2 diabetes — through its own pathways, independent of body weight. NHLBI research found the effect is stronger in women, and stronger still after menopause, which is why sleep deserves to be treated as a real pillar of blood-sugar management, not an afterthought."
        },
        {
          "q": "What does it mean that type 2 diabetes has subtypes?",
          "a": "Researchers increasingly see type 2 diabetes as several conditions rather than one. At least four subtypes have been described — mild age-related, mild obesity-related, severe insulin-resistant and severe insulin-deficient — each with different risks and likely treatment responses. In practice, what works well for one person may do little for another, and care is moving toward matching strategies to individual biology."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "Що каже нове дослідження про діабет 2 типу",
      "excerpt": "Нові дані про ремісію, порядок їжі, обмежене в часі харчування та сон — і що справді варто спробувати.",
      "meta": "26 червня 2026 · 8 хв читання",
      "lead": "Наука про діабет 2 типу рухається швидше, ніж підказують заголовки — і деякі з найважливіших відкриттів навряд чи почуєш на десятихвилинному прийомі в лікаря. Ось що насправді каже сучасне дослідження і що справді варто спробувати.",
      "blocks": [
        {
          "t": "p",
          "text": "Історія, яку розповідали про діабет 2 типу останні кілька десятиліть, була досить сталою: він розвивається поступово, зазвичай через спосіб життя, він прогресує, і щойно він у вас з'явився — ви керуєте ним усе життя. Розмова зазвичай зводиться до того, що ви зробили, щоб до цього дійти, і які ліки вам знадобляться з часом."
        },
        {
          "t": "p",
          "text": "Цю історію суттєво переписують."
        },
        {
          "t": "p",
          "text": "Дослідники нині ставлять під сумнів, чи діабет 2 типу взагалі є єдиним захворюванням. Дані про ремісію з ретельних клінічних досліджень спростовують уявлення, що він незворотний. А дедалі більше доказів вказують на інструменти — деякі напрочуд прості — які суттєво впливають на рівень глюкози незалежно від ліків."
        },
        {
          "t": "p",
          "text": "Це не історія про диво. Але це варто знати."
        },
        {
          "t": "h",
          "text": "Ремісія реальна — і вона може тривати"
        },
        {
          "t": "p",
          "text": "[Дослідження DiRECT](https://www.thelancet.com/journals/landia/article/PIIS2213-8587%2823%2900385-6/fulltext), яке проводилося в сімейних практиках по всій Великій Британії та Шотландії, мало на меті перевірити, чи може діабет 2 типу увійти в ремісію завдяки структурованому дієтичному втручанню. Результати, тепер уже за п'ять років, вражають."
        },
        {
          "t": "p",
          "text": "Майже половина учасників — 46% — досягли ремісії протягом першого року. До другого року ця цифра становила 36%. І що критично важливо, 26% тих, хто досяг ремісії на другому році, усе ще були в ремісії через п'ять років без жодних ліків від діабету."
        },
        {
          "t": "p",
          "text": "Також удвічі зменшилася кількість серйозних медичних подій, що потребували госпіталізації, у групі дієтичного втручання порівняно з тими, хто отримував стандартну допомогу."
        },
        {
          "t": "p",
          "text": "Саме втручання було непростим: формульна дієта на 830 калорій протягом дванадцяти тижнів для суттєвого зниження ваги, після чого — поступове повернення до звичайної їжі під супроводом і подальша допомога в утриманні ваги. Серед тих, хто втратив понад 10 кг, три чверті досягли ремісії і на першому, і на другому році."
        },
        {
          "t": "p",
          "text": "Це не означає, що ремісія досяжна чи доречна для кожного. Але це остаточно руйнує припущення, що діабет 2 типу незворотний — а це припущення довгий час тихо забирало надію з розмови."
        },
        {
          "t": "h",
          "text": "Можливо, це не одна хвороба"
        },
        {
          "t": "p",
          "text": "Один із найпомітніших зрушень у дослідженнях діабету саме зараз — це відхід від ставлення до діабету 2 типу як до єдиного захворювання."
        },
        {
          "t": "p",
          "text": "[Стаття 2025 року в The Lancet Diabetes & Endocrinology](https://www.thelancet.com/journals/landia/article/PIIS2213-8587%2825%2900256-6/abstract) сформулювала це прямо: десятиліттями діабет 2 типу лікували як монолітне захворювання за єдиними покроковими алгоритмами — підхід, який дедалі гірше враховує його біологічну неоднорідність."
        },
        {
          "t": "p",
          "text": "Наразі виділено чотири широкі підтипи: м'який віковий діабет (частіший у старших людей, з відносно низьким ризиком ускладнень); м'який діабет, пов'язаний з ожирінням (пов'язаний із надмірною вагою, з загалом м'якшим метаболічним профілем); тяжкий інсулінорезистентний діабет (вищий ризик захворювання нирок); і тяжкий інсулінодефіцитний діабет (у дечому ближчий до 1 типу, з вищим ризиком захворювань очей)."
        },
        {
          "t": "p",
          "text": "Чому це важливо на практиці? Тому що це означає: те, що добре працює для однієї людини з діагнозом 2 типу, може майже нічого не дати іншій — і це робить звичку пояснювати хворобу особистим вибором ще менш виправданою, ніж вона вже була."
        },
        {
          "t": "p",
          "text": "Напрям розвитку досліджень — до персоналізованої медицини: узгодження лікування та способу життя з індивідуальною біологією, а не єдиний протокол для всіх."
        },
        {
          "t": "h",
          "text": "Коли ви їсте, може важити не менше, ніж що ви їсте"
        },
        {
          "t": "p",
          "text": "Тут варто знати про дві знахідки."
        },
        {
          "t": "p",
          "text": "Порядок їжі. Дослідження з Weill Cornell Medical College та інших послідовно виявляли, що вживання овочів і білка перед вуглеводами суттєво зменшує стрибок цукру після їжі. У людей із діабетом 2 типу початок їжі з овочів і білка перед вуглеводами знижував пікові значення цукру після їжі приблизно на 54% порівняно з вживанням вуглеводів першими. Один із дослідників описав величину ефекту як зіставну з тим, чого можна очікувати від ліків для зниження глюкози."
        },
        {
          "t": "p",
          "text": "[Довше ретроспективне дослідження, що спостерігало за пацієнтами протягом п'яти років](https://pmc.ncbi.nlm.nih.gov/articles/PMC9322906/), виявило: у тих, хто застосовував підхід із порядком їжі — спершу овочі та білок, вуглеводи наостанок — HbA1c покращився з 8,5% до 7,6%, тоді як у контрольній групі суттєвих змін не було."
        },
        {
          "t": "p",
          "text": "Це нічого не коштує, не потребує рецепта і працює за будь-якого прийому їжі."
        },
        {
          "t": "p",
          "text": "Обмежене в часі харчування. [Метааналіз 2025 року з восьми рандомізованих контрольованих досліджень](https://www.mdpi.com/1422-0067/26/15/7310) виявив, що обмежене в часі харчування — коли їдять у визначеному вікні щодня, зазвичай від восьми до десяти годин — суттєво знижувало глюкозу натще та HbA1c і збільшувало час у цільовому діапазоні глюкози. Покращення були помірними, але послідовними в усіх дослідженнях. Окреме рандомізоване контрольоване дослідження 2024 року виявило, що HbA1c покращувався зіставно в учасників, які дотримувалися обмеженого в часі харчування, і тих, хто отримував індивідуальні рекомендації дієтолога."
        },
        {
          "t": "p",
          "text": "Жоден із підходів не замінює ліки, і кожен, хто суттєво змінює режим харчування, спершу має порадитися зі своєю медичною командою. Але обидва мають вагомі докази й варті обговорення."
        },
        {
          "t": "h",
          "text": "Сон і цукор у крові — особливо для жінок"
        },
        {
          "t": "p",
          "text": "Це сфера, якій приділяють значно менше уваги, ніж вона заслуговує."
        },
        {
          "t": "p",
          "text": "[Дослідження Національного інституту серця, легень і крові (NHLBI)](https://www.nhlbi.nih.gov/news/2023/chronic-sleep-deficiency-increases-insulin-resistance-women-especially-postmenopausal) виявило, що хронічний брак сну суттєво підвищує інсулінорезистентність у загалом здорових жінок — з помітнішим ефектом у жінок у постменопаузі. Ефект не залежав від маси тіла, тобто поганий сон впливає на цукор власними шляхами, а не просто через меншу активність чи гірше харчування."
        },
        {
          "t": "p",
          "text": "Інсулінорезистентність є центральною для ризику діабету 2 типу. І все ж якість сну рідко розглядають на звичайному огляді з приводу діабету."
        },
        {
          "t": "p",
          "text": "Для жінок за сорок і п'ятдесят — коли [перименопауза вже порушує сон](/ua/blog/perimenopause-diabetes-blood-sugar/), а естроген впливає на чутливість до інсуліну — це швидко накопичується. Це ще одна причина ставитися до сну як до незамінної опори метаболічного здоров'я, а не чогось, що можна залагодити згодом."
        },
        {
          "t": "h",
          "text": "Що каже дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Ремісія діабету 2 типу через дієту та зниження ваги досяжна і може тривати роками.",
              "detail": "П'ятирічне продовження дослідження DiRECT за участю сімейних практик у Великій Британії виявило, що 26% учасників, які досягли ремісії на другому році, усе ще були в ремісії через п'ять років без ліків від діабету. Що довше учасники утримували знижену вагу, то нижчим був їхній ризик ускладнень, пов'язаних із діабетом.",
              "cite": "The Lancet Diabetes & Endocrinology · Продовження дослідження, 2024",
              "url": "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(23)00385-6/fulltext"
            },
            {
              "claim": "Діабет 2 типу — не єдина хвороба, і лікування має це враховувати.",
              "detail": "Аналіз 2025 року стверджує, що галузі потрібно відійти від ставлення до діабету 2 типу як до однієї однорідної хвороби, виділяючи щонайменше чотири окремі підтипи з різними профілями ризику, ускладненнями та ймовірними реакціями на лікування.",
              "cite": "The Lancet Diabetes & Endocrinology · Аналіз, 2025",
              "url": "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(25)00256-6/abstract"
            },
            {
              "claim": "Вживання овочів і білка перед вуглеводами суттєво знижує цукор після їжі.",
              "detail": "Кілька досліджень, зокрема п'ятирічне ретроспективне когортне, виявили, що послідовний початок їжі з овочів і білка замість вуглеводів веде до суттєво нижчих піків глюкози після їжі та відчутного покращення HbA1c з часом.",
              "cite": "PMC / NCBI · Ретроспективне когортне дослідження, 2022",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9322906/"
            },
            {
              "claim": "Обмежене в часі харчування покращує контроль глікемії при діабеті 2 типу.",
              "detail": "Систематичний огляд і метааналіз 2025 року з восьми рандомізованих контрольованих досліджень виявив, що обмежене в часі харчування суттєво знижувало глюкозу натще та HbA1c і збільшувало час у цільовому діапазоні — з послідовними результатами в різних групах.",
              "cite": "International Journal of Molecular Sciences (MDPI) · Метааналіз, 2025",
              "url": "https://www.mdpi.com/1422-0067/26/15/7310"
            },
            {
              "claim": "Хронічний брак сну підвищує інсулінорезистентність у жінок, особливо після менопаузи.",
              "detail": "Дослідження за підтримки NHLBI виявило, що недостатній сон самостійно погіршує чутливість до інсуліну в жінок, із сильнішим ефектом у жінок у постменопаузі — окремо від будь-яких змін маси тіла.",
              "cite": "NHLBI / NIH · Клінічне дослідження",
              "url": "https://www.nhlbi.nih.gov/news/2023/chronic-sleep-deficiency-increases-insulin-resistance-women-especially-postmenopausal"
            }
          ]
        },
        {
          "t": "links",
          "title": "Британські ресурси, які варто знати",
          "items": [
            {
              "name": "Diabetes UK — Діабет 2 типу",
              "url": "https://www.diabetes.org.uk/about-diabetes/type-2-diabetes",
              "desc": "Ґрунтовна, науково обґрунтована інформація про ведення діабету 2 типу, ремісію та підходи способу життя. Також працює гаряча лінія 0345 123 2399."
            },
            {
              "name": "NHS — Діабет 2 типу",
              "url": "https://www.nhs.uk/conditions/type-2-diabetes/",
              "desc": "Охоплює діагностику, лікування та Програму запобігання діабету NHS, яка пропонує безкоштовну структуровану підтримку людям із високим ризиком."
            }
          ]
        },
        {
          "t": "h",
          "text": "Що з цього взяти"
        },
        {
          "t": "p",
          "text": "Дослідження діабету 2 типу у 2024 та 2025 роках вказують у послідовному напрямі: ця хвороба різноманітніша, чутливіша до змін і менш незмінна, ніж нас переконували."
        },
        {
          "t": "p",
          "text": "Ремісія не гарантована — але вона можлива для деяких людей, і ця можливість спирається на суворі дані досліджень, а не на бажане. Біологія складніша за єдину розповідь про спосіб життя, а доступні інструменти — зокрема деякі дуже прості, як-от порядок їжі — ширші, ніж більшість людей уявляє."
        },
        {
          "t": "p",
          "text": "Якщо у вас діагноз 2 типу або ви керуєте підвищеним цукром, дослідження дедалі більше підтримують те, щоб включати сон, час прийому їжі та послідовність їжі в розмову поряд із ліками та дієтою — не як заміну, а як частини однієї картини."
        },
        {
          "t": "p",
          "text": "Кожне рішення щодо вашого ведення слід ухвалювати разом із вашою медичною командою. Мета тут — щоб ви заходили на ці прийоми, знаючи, про що запитати."
        }
      ],
      "faq": [
        {
          "q": "Чи може діабет 2 типу увійти в ремісію?",
          "a": "Так, для деяких людей. П'ятирічне дослідження DiRECT виявило, що 46% учасників досягли ремісії в перший рік, а 26% тих, хто був у ремісії на другому році, усе ще обходилися без ліків через п'ять років. Найімовірніше це за суттєвого стабільного зниження ваги — особливо невдовзі після діагнозу — і за підтримки вашої команди лікарів, хоча це досяжно й доречно не для кожного."
        },
        {
          "q": "Чи справді порядок їжі впливає на цукор у крові?",
          "a": "Так. Показано, що вживання овочів і білка перед вуглеводами зменшує стрибок цукру після їжі приблизно на 54% порівняно з вуглеводами першими, а в одному п'ятирічному дослідженні HbA1c знизився з 8,5% до 7,6% у тих, хто дотримувався такого порядку. Це нічого не коштує, не потребує рецепта й працює за будь-якого прийому їжі."
        },
        {
          "q": "Чи безпечне обмежене в часі харчування для людей із діабетом 2 типу?",
          "a": "Багатьом воно може допомогти — метааналіз 2025 року з восьми досліджень виявив, що харчування у визначеному щоденному вікні (зазвичай 8–10 годин) помірно знижувало глюкозу натще та HbA1c і покращувало час у діапазоні. Це не заміна лікам, і якщо ви приймаєте засоби для зниження глюкози, порадьтеся з медичною командою перед суттєвими змінами у часі харчування, щоб уникнути гіпоглікемії."
        },
        {
          "q": "Чому сон впливає на цукор у крові?",
          "a": "Хронічний поганий сон підвищує інсулінорезистентність — головний чинник діабету 2 типу — власними шляхами, незалежно від маси тіла. Дослідження NHLBI виявило, що ефект сильніший у жінок і ще сильніший після менопаузи, тому сон заслуговує ставлення як до справжньої опори контролю цукру, а не другорядної деталі."
        },
        {
          "q": "Що означає, що діабет 2 типу має підтипи?",
          "a": "Дослідники дедалі більше бачать діабет 2 типу як кілька станів, а не один. Описано щонайменше чотири підтипи — м'який віковий, м'який пов'язаний з ожирінням, тяжкий інсулінорезистентний і тяжкий інсулінодефіцитний — кожен із різними ризиками та ймовірними реакціями на лікування. На практиці те, що добре працює для однієї людини, може мало допомогти іншій, а допомога рухається до узгодження стратегій з індивідуальною біологією."
        }
      ]
    }
  },
  {
    "slug": "perimenopause-diabetes-blood-sugar",
    "date": "2026-06-20",
    "image": "/images/blood-sugar-perimenopause-metabolism.jpg",
    "cats": [
      "perimenopause",
      "diabetes"
    ],
    "en": {
      "cat": "Perimenopause & Type 1 Diabetes",
      "title": "Perimenopause & diabetes: what's really happening to your blood sugar",
      "excerpt": "Living with T1D for 23 years, I noticed everything changing in my early 40s — and no one warned me. Here's what perimenopause really does to your blood sugar, and what actually helped.",
      "meta": "20 June 2026 · 8 min read",
      "lead": "Blood sugar can get harder to manage in perimenopause — and almost no one warns you. Here's what's really happening, and what genuinely helped me.",
      "seoTitle": "Perimenopause and Type 1 Diabetes: What's Really Happening to Your Blood Sugar",
      "metaDesc": "Living with T1D for 23 years, I noticed everything changing in my early 40s — and no one warned me. Here's what perimenopause really does to your blood sugar, and what actually helped.",
      "blocks": [
        {
          "t": "p",
          "text": "I've been living with type 1 diabetes for 23 years. Around 39–40, I started noticing I was getting more insulin resistant — it was harder to manage my normal food. I usually make a cup of coffee in the morning with soya milk, about 4g of carbs per cup. My blood sugar started climbing to 18 mmol/l — ridiculously high for such a tiny amount of carbs."
        },
        {
          "t": "p",
          "text": "At the gym I noticed the same pattern: my sugar stayed high throughout training and climbed even more afterwards — partly explained by the nature of resistance training, which can raise blood glucose. But getting it back into range became a real challenge. My body simply wasn't reacting the way it used to."
        },
        {
          "t": "img",
          "src": "/images/strength-training-cgm-type-1-diabetes.jpg",
          "alt": "Lena Filatova doing a barbell squat with a continuous glucose monitor on her arm",
          "cap": "At the gym, CGM on — where I first noticed resistance training pushing my blood sugar in ways it never used to."
        },
        {
          "t": "p",
          "text": "I asked my diabetes team at St Barts in London what was happening. Of course I knew I was getting older, but nobody was talking about what that actually looks like in practice. They looked at my readings and said: all good, you're being too hard on yourself. But I knew exactly what it took to reach that “good” — so much more effort than before."
        },
        {
          "t": "h",
          "text": "The medical gap nobody talks about"
        },
        {
          "t": "p",
          "text": "On work trips I had to skip meals because I couldn't risk eating something that would push me into very high blood sugars in the middle of a conference. I was starving to stay in range — constantly exhausted and hungry. Any emotion, good or bad, would send my blood sugar shooting up to 17–18 mmol/l, and I'd struggle to bring it back down."
        },
        {
          "t": "p",
          "text": "At my next appointment I tried to raise this with my endocrinologist, but he said they don't have any training on women's health in this period of life. Because I still had regular periods, he told me I wasn't in perimenopause and didn't need anything fixing. When I brought up [gaining belly fat](/blog/perimenopause-weight-myths/), he said my weight was the same as last year — nothing to worry about."
        },
        {
          "t": "quote",
          "text": "I was left fighting alone."
        },
        {
          "t": "p",
          "text": "Getting HRT prescribed was its own battle. My GP wasn't convinced that hormones affect insulin sensitivity — something so fundamental I assumed any provider would know it, given that all hormones affect each other. I'm grateful for the specialists who listened and prescribed HRT even though I still had regular cycles and no hot flushes. It changed everything. I got back a few years in my management — things were still a little harder and less predictable than before, but nowhere near as hard."
        },
        {
          "t": "p",
          "text": "I have experience reading research papers and writing health and fitness news, so I decided to start an open conversation for women who are looking for answers, just like me."
        },
        {
          "t": "h",
          "text": "Why blood sugar gets harder to manage in perimenopause"
        },
        {
          "t": "p",
          "text": "I recently changed my diabetes team and felt understood immediately — but even they pointed to the lack of research and information on women's health over 40 for those living with diabetes."
        },
        {
          "t": "graph",
          "src": "/images/blood-sugar-graph-perimenopause.jpg",
          "alt": "Insulin pump screen showing blood sugar rising to 17.7 mmol/l overnight with 7.9 units of insulin on board",
          "cap": "A night from my own pump — blood sugar swinging up to 17.7 mmol/l with 7.9u of insulin still on board. The kind of overnight pattern that got much harder to control in perimenopause."
        },
        {
          "t": "p",
          "text": "As oestrogen fluctuates and falls, insulin sensitivity drops. The same meals that used to keep your blood sugar steady can push it much higher, and it tends to climb more easily overall. I also noticed a pattern within my own cycles — one month would feel relatively normal and predictable, and the next my body simply wasn't producing as many hormones and I'd be far less sensitive to insulin."
        },
        {
          "t": "quote",
          "text": "This isn't a failure of your management. It's biology that the medical world is only beginning to take seriously."
        },
        {
          "t": "h",
          "text": "What can actually help"
        },
        {
          "t": "p",
          "text": "HRT was the single biggest lever for me. If you're approaching 40 and finding your control inexplicably harder, it's worth having the conversation with a specialist who understands both hormonal health and diabetes — even if you still have regular periods and no hot flushes."
        },
        {
          "t": "p",
          "text": "Resistance training is one of the most reliable tools for blood glucose management: building muscle improves how your body handles glucose, protects your bones, and steadies energy far better than any single supplement. That said, with sleep disruption, joint pain and blood sugar swings, even training becomes harder during perimenopause. I noticed this too. It doesn't mean stop — it means adjust."
        },
        {
          "t": "p",
          "text": "Every decision about your management should be made together with your doctor. My goal here is to make sure you know what you might face, and what can help, so you walk into those appointments informed."
        },
        {
          "t": "h",
          "text": "UK resources worth knowing about"
        },
        {
          "t": "p",
          "text": "If you're looking for somewhere to start, these two UK organisations have the most relevant information specifically for women with diabetes going through perimenopause."
        },
        {
          "t": "links",
          "title": "Two trustworthy places to start",
          "items": [
            {
              "name": "Diabetes UK — Menopause and diabetes",
              "url": "https://www.diabetes.org.uk/",
              "desc": "How falling oestrogen affects insulin sensitivity, when to monitor more frequently, and how to approach the HRT conversation with your GP. They also run a helpline on 0345 123 2399."
            },
            {
              "name": "Breakthrough T1D UK — Menopause and type 1 diabetes",
              "url": "https://breakthrought1d.org.uk/",
              "desc": "Written specifically for women with T1D: how insulin-to-carb ratios may need to change, telling hot flushes from hypos, and using CGM to make sense of your glucose. Last reviewed June 2024."
            }
          ]
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "p",
          "text": "The medical gap is real — and only recently starting to be acknowledged in the literature. Here's where the evidence currently stands."
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "The menstrual cycle affects insulin sensitivity in T1D — and perimenopause amplifies it.",
              "detail": "A 2023 systematic review in Frontiers in Endocrinology examined how the menstrual cycle affects glycaemic outcomes and insulin sensitivity in women with type 1 diabetes. It confirmed that hormonal fluctuations across the cycle do affect blood glucose, while noting major gaps in the evidence — particularly around perimenopause.",
              "cite": "Frontiers in Endocrinology · Systematic review, 2023",
              "url": "https://pubmed.ncbi.nlm.nih.gov/?term=menstrual+cycle+glucose+control+insulin+sensitivity+type+1+diabetes+systematic+review"
            },
            {
              "claim": "There is almost no dedicated research on menopause management for women with T1D.",
              "detail": "A 2025 narrative review in Therapeutic Advances in Endocrinology and Metabolism examined the current evidence on menopause management in women with type 1 diabetes and concluded that the research gaps are substantial — calling for targeted studies to address them.",
              "cite": "Therapeutic Advances in Endocrinology and Metabolism · Narrative review, 2025",
              "url": "https://pubmed.ncbi.nlm.nih.gov/?term=menopause+management+type+1+diabetes+narrative+review"
            },
            {
              "claim": "HRT does reduce insulin resistance — and the evidence is growing.",
              "detail": "A 2024 meta-analysis of 17 randomised controlled trials covering more than 29,000 participants (1998–2024), presented at The Menopause Society Annual Meeting, found that hormone therapy significantly reduced insulin resistance in postmenopausal women.",
              "cite": "The Menopause Society Annual Meeting, 2024",
              "url": "https://menopause.org/"
            },
            {
              "claim": "The field is finally catching up.",
              "detail": "A clinical trial called TIMES (Trajectories in Insulin Sensitivity Across MEnstrual cycleS in Women With Type 1 Diabetes) began recruiting in late 2025. It aims to map exactly how insulin sensitivity changes across the cycle in women with T1D — which will help build the evidence base for perimenopause management too.",
              "cite": "ClinicalTrials.gov — TIMES study",
              "url": "https://clinicaltrials.gov/search?term=TIMES%20insulin%20sensitivity%20menstrual%20type%201%20diabetes"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, women's health writer living with type 1 diabetes",
          "text": "Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women's health, perimenopause and diabetes management at lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Does perimenopause affect blood sugar in type 1 diabetes?",
          "a": "Yes. As oestrogen levels fluctuate and decline during perimenopause, insulin sensitivity drops. The same meals and insulin doses that worked before may no longer produce the same results. Women with type 1 diabetes often experience higher blood sugar, more variability between cycles, and greater difficulty recovering from spikes — all without any obvious change in routine."
        },
        {
          "q": "Can you be in perimenopause if you still have regular periods?",
          "a": "Yes. Perimenopause can begin years before periods become irregular. Hormonal fluctuations — and their effect on insulin sensitivity — can start in your late 30s or early 40s while cycles remain perfectly regular. This is one of the most misunderstood points in women's health, and a main reason so many women with diabetes go unheard for years."
        },
        {
          "q": "Does HRT help with blood sugar control during perimenopause?",
          "a": "For many women with diabetes, HRT can improve insulin sensitivity as oestrogen levels stabilise, consistent with what we know about how hormones affect glucose metabolism. It isn't right for everyone, and the decision should be made with a provider who understands both your hormonal and metabolic health."
        },
        {
          "q": "Why do I gain belly fat in perimenopause even if my weight hasn't changed?",
          "a": "Shifting oestrogen levels change where the body stores fat, often redistributing it towards the abdomen. This can happen even when total weight stays the same — which is why “your weight hasn't changed” isn't a satisfying or complete answer."
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза та діабет 1 типу",
      "title": "Перименопауза та діабет: що насправді відбувається з вашим цукром у крові",
      "excerpt": "23 роки живу з діабетом 1 типу, і на початку своїх 40 я помітила, що все змінюється — а мене ніхто не попередив. Ось що перименопауза насправді робить із цукром у крові й що мені справді допомогло.",
      "meta": "20 червня 2026 · 8 хв читання",
      "lead": "Під час перименопаузи цукор у крові може стати важче контролювати — і майже ніхто про це не попереджає. Ось що відбувається насправді і що справді допомогло мені.",
      "seoTitle": "Перименопауза та діабет 1 типу: що насправді відбувається з вашим цукром у крові",
      "metaDesc": "23 роки живу з діабетом 1 типу, і на початку своїх 40 я помітила, що все змінюється — а мене ніхто не попередив. Ось що перименопауза насправді робить із цукром у крові й що мені справді допомогло.",
      "blocks": [
        {
          "t": "p",
          "text": "Я живу з діабетом 1 типу вже 23 роки. Приблизно у 39–40 я почала помічати, що стаю більш інсулінорезистентною — звичну їжу стало важче контролювати. Зазвичай зранку я роблю каву на соєвому молоці, це близько 4 г вуглеводів на чашку. Мій цукор почав підніматися до 18 ммоль/л — абсурдно високо для такої крихітної кількості вуглеводів."
        },
        {
          "t": "p",
          "text": "У залі я помічала той самий патерн: цукор тримався високо протягом тренування й піднімався ще більше після — частково це пояснюється природою силових тренувань, які можуть підвищувати глюкозу. Але повернути його в норму стало справжнім викликом. Моє тіло просто не реагувало так, як раніше."
        },
        {
          "t": "img",
          "src": "/images/strength-training-cgm-type-1-diabetes.jpg",
          "alt": "Lena Filatova виконує присідання зі штангою, на руці — сенсор безперервного моніторингу глюкози",
          "cap": "У залі, із CGM на руці — саме тут я вперше помітила, що силові тренування піднімають мій цукор так, як ніколи раніше."
        },
        {
          "t": "p",
          "text": "Я запитала свою діабетичну команду в St Barts у Лондоні, що відбувається. Звісно, я знала, що старішаю, але ніхто не говорив, як це виглядає на практиці. Вони подивилися на мої показники й сказали: усе добре, ви занадто суворі до себе. Але я точно знала, чого мені коштувало це «добре» — набагато більше зусиль, ніж раніше."
        },
        {
          "t": "h",
          "text": "Медична прогалина, про яку ніхто не говорить"
        },
        {
          "t": "p",
          "text": "У робочих поїздках я мусила пропускати прийоми їжі, бо не могла ризикнути з'їсти щось, що підняло б цукор дуже високо посеред конференції. Я голодувала, щоб триматися в межах — постійно виснажена й голодна. Будь-яка емоція, добра чи погана, підкидала мій цукор до 17–18 ммоль/л, і мені було важко його знизити."
        },
        {
          "t": "p",
          "text": "На наступному прийомі я спробувала підняти це питання з ендокринологом, але він сказав, що вони не мають підготовки з жіночого здоров'я у цей період життя. Оскільки в мене ще були регулярні цикли, він сказав, що я не в перименопаузі й нічого лікувати не треба. Коли я згадала про [набір жиру на животі](/ua/blog/perimenopause-weight-myths/), він відповів, що моя вага така сама, як торік — нема про що хвилюватися."
        },
        {
          "t": "quote",
          "text": "Я залишилася сам на сам зі своєю боротьбою."
        },
        {
          "t": "p",
          "text": "Отримати призначення ЗГТ було окремою битвою. Мій сімейний лікар не був переконаний, що гормони впливають на чутливість до інсуліну — щось настільки фундаментальне, що я вважала, це знає будь-який медик, адже всі гормони впливають одне на одного. Я вдячна спеціалістам, які прислухалися і призначили ЗГТ, попри регулярні цикли й відсутність приливів. Це змінило все. Я повернулась на кілька років назад — було все ще менш передбачувано, ніж раніше, але й близько не так важко."
        },
        {
          "t": "p",
          "text": "Я маю досвід читання наукових статей і написання новин про здоров'я та фітнес, тож вирішила почати відкриту розмову для жінок, які шукають відповіді, як і я."
        },
        {
          "t": "h",
          "text": "Чому цукор у крові стає важче контролювати під час перименопаузи"
        },
        {
          "t": "p",
          "text": "Нещодавно я змінила діабетичну команду й одразу відчула, що мене розуміють — але навіть вони вказали на брак досліджень та інформації про жіноче здоров'я після 40 для тих, хто живе з діабетом."
        },
        {
          "t": "graph",
          "src": "/images/blood-sugar-graph-perimenopause.jpg",
          "alt": "Екран інсулінової помпи показує, як цукор у крові піднімається до 17,7 ммоль/л уночі з 7,9 одиницями інсуліну в дії",
          "cap": "Ніч із моєї власної помпи — цукор злітає до 17,7 ммоль/л, коли ще діють 7,9 од. інсуліну. Саме такий нічний патерн став набагато важче контролювати під час перименопаузи."
        },
        {
          "t": "p",
          "text": "Коли естроген коливається та падає, чутливість до інсуліну знижується. Ті самі страви, що раніше тримали цукор стабільним, тепер можуть піднімати його значно вище, і він загалом росте легше. Я також помітила закономірність у власних менструальних циклах — один місяць був відносно нормальним і передбачуваним, а наступного моє тіло просто виробляло менше гормонів, і я була значно менш чутлива до інсуліну."
        },
        {
          "t": "quote",
          "text": "Це не провал вашої компенсації. Це біологія, яку медичний світ лише починає сприймати серйозно."
        },
        {
          "t": "h",
          "text": "Що справді може допомогти"
        },
        {
          "t": "p",
          "text": "ЗГТ була для мене найбільшим важелем. Якщо ви наближаєтесь до 40 і бачите, що контроль незрозуміло погіршується, варто поговорити зі спеціалістом, який розуміє і гормональне здоров'я, і діабет — навіть якщо у вас ще регулярні цикли й немає приливів."
        },
        {
          "t": "p",
          "text": "Силові тренування — один із найнадійніших інструментів для компенсації глюкози: м'язи покращують те, як тіло працює з глюкозою, захищають кістки та стабілізують енергію краще за будь-яку окрему добавку. Водночас із порушеннями сну, болем у суглобах і коливаннями цукру навіть тренуватися стає важче під час перименопаузи. Я теж це помітила. Це не означає «припинити» — це означає «підлаштуватися»."
        },
        {
          "t": "p",
          "text": "Кожне рішення щодо вашої компенсації слід приймати разом із лікарем. Моя мета тут — щоб ви знали, з чим можете зіткнутися і що може допомогти, аби ви приходили на прийом поінформованими."
        },
        {
          "t": "h",
          "text": "Британські ресурси, які варто знати"
        },
        {
          "t": "p",
          "text": "Якщо ви шукаєте, з чого почати, ці дві британські організації мають найрелевантнішу інформацію саме для жінок із діабетом, які проходять перименопаузу."
        },
        {
          "t": "links",
          "title": "Два надійні місця, з яких варто почати",
          "items": [
            {
              "name": "Diabetes UK — Менопауза та діабет",
              "url": "https://www.diabetes.org.uk/",
              "desc": "Як зниження естрогену впливає на чутливість до інсуліну, коли варто моніторити частіше і як розпочати розмову про ЗГТ із сімейним лікарем. Також працює гаряча лінія 0345 123 2399."
            },
            {
              "name": "Breakthrough T1D UK — Менопауза та діабет 1 типу",
              "url": "https://breakthrought1d.org.uk/",
              "desc": "Написано саме для жінок із T1D: як може змінюватися співвідношення інсуліну до вуглеводів, як відрізнити припливи від гіпо і як за допомогою CGM зрозуміти свою глюкозу. Востаннє переглянуто в червні 2024 року."
            }
          ]
        },
        {
          "t": "h",
          "text": "Що каже дослідження"
        },
        {
          "t": "p",
          "text": "Медична прогалина реальна — і лише нещодавно її почали визнавати в науковій літературі. Ось про що зараз кажуть докази."
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Менструальний цикл впливає на чутливість до інсуліну при T1D — а перименопауза це посилює.",
              "detail": "Систематичний огляд 2023 року у Frontiers in Endocrinology дослідив, як менструальний цикл впливає на глікемічні показники та чутливість до інсуліну в жінок із діабетом 1 типу. Він підтвердив, що гормональні коливання протягом циклу впливають на глюкозу, водночас відзначивши суттєві прогалини в доказах — особливо щодо перименопаузи.",
              "cite": "Frontiers in Endocrinology · Систематичний огляд, 2023",
              "url": "https://pubmed.ncbi.nlm.nih.gov/?term=menstrual+cycle+glucose+control+insulin+sensitivity+type+1+diabetes+systematic+review"
            },
            {
              "claim": "Практично немає окремих досліджень про ведення менопаузи в жінок із T1D.",
              "detail": "Наративний огляд 2025 року у Therapeutic Advances in Endocrinology and Metabolism розглянув наявні докази щодо ведення менопаузи в жінок із діабетом 1 типу й дійшов висновку, що прогалини в дослідженнях суттєві — закликаючи до цілеспрямованих досліджень.",
              "cite": "Therapeutic Advances in Endocrinology and Metabolism · Наративний огляд, 2025",
              "url": "https://pubmed.ncbi.nlm.nih.gov/?term=menopause+management+type+1+diabetes+narrative+review"
            },
            {
              "claim": "ЗГТ справді знижує інсулінорезистентність — і доказів більшає.",
              "detail": "Метааналіз 2024 року з 17 рандомізованих контрольованих досліджень за участю понад 29 000 осіб (1998–2024), представлений на щорічній зустрічі The Menopause Society, показав, що гормональна терапія суттєво знижує інсулінорезистентність у жінок у постменопаузі.",
              "cite": "Щорічна зустріч The Menopause Society, 2024",
              "url": "https://menopause.org/"
            },
            {
              "claim": "Галузь нарешті надолужує.",
              "detail": "Клінічне дослідження під назвою TIMES (Trajectories in Insulin Sensitivity Across MEnstrual cycleS in Women With Type 1 Diabetes) розпочало набір наприкінці 2025 року. Воно має на меті точно окреслити, як змінюється чутливість до інсуліну протягом циклу в жінок із T1D — що також допоможе побудувати доказову базу для ведення перименопаузи.",
              "cite": "ClinicalTrials.gov — дослідження TIMES",
              "url": "https://clinicaltrials.gov/search?term=TIMES%20insulin%20sensitivity%20menstrual%20type%201%20diabetes"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, авторка про жіноче здоров'я, що живе з діабетом 1 типу",
          "text": "Lena Filatova живе з діабетом 1 типу вже 23 роки. Вона пише про жіноче здоров'я, перименопаузу та ведення діабету на lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Чи впливає перименопауза на цукор у крові при діабеті 1 типу?",
          "a": "Так. Коли рівень естрогену коливається та знижується під час перименопаузи, чутливість до інсуліну падає. Ті самі страви й дози інсуліну, що працювали раніше, можуть більше не давати того самого результату. Жінки з діабетом 1 типу часто помічають вищий цукор, більшу мінливість між циклами й важче відновлення після стрибків — без жодної очевидної зміни в режимі."
        },
        {
          "q": "Чи можна бути в перименопаузі, якщо цикли ще регулярні?",
          "a": "Так. Перименопауза може початися за роки до того, як цикли стануть нерегулярними. Гормональні коливання — і їхній вплив на чутливість до інсуліну — можуть початися наприкінці 30-х чи на початку 40-х, поки цикли лишаються цілком регулярними. Це один із моментів жіночого здоров'я, які неправильно розуміють, і головна причина, чому багатьох жінок із діабетом роками не чують."
        },
        {
          "q": "Чи допомагає ЗГТ контролювати цукор під час перименопаузи?",
          "a": "Для багатьох жінок із діабетом ЗГТ може покращити чутливість до інсуліну, коли рівень естрогену стабілізується, що узгоджується з тим, що ми знаємо про вплив гормонів на метаболізм глюкози. Вона підходить не всім, і рішення варто приймати з лікарем, який розуміє і ваше гормональне, і метаболічне здоров'я."
        },
        {
          "q": "Чому я набираю жир на животі під час перименопаузи, навіть якщо вага не змінилася?",
          "a": "Зміни рівня естрогену змінюють те, де тіло зберігає жир, часто перерозподіляючи його до живота. Це може відбуватися навіть коли загальна вага лишається тією самою — тому «ваша вага не змінилася» не є вичерпною відповіддю."
        }
      ]
    }
  },
  {
    "slug": "collagen-and-skin",
    "date": "2026-06-14",
    "image": "/images/collagen-supplements-skin-women-over-40.jpg",
    "cats": [
      "skin"
    ],
    "en": {
      "cat": "Skin & beauty",
      "title": "Do collagen products actually improve your skin?",
      "seoTitle": "Collagen and Skin: What the Evidence Actually Shows",
      "metaDesc": "Does collagen actually improve skin? We look at the evidence on supplements, creams and the nutrients your body needs to make its own.",
      "excerpt": "What the evidence really shows about collagen supplements, creams and the nutrients that support your own.",
      "meta": "14 June 2026 · 5 min read",
      "lead": "Collagen is the scaffold that keeps skin firm and elastic — and from your mid-twenties you make a little less of it each year. Here's what the evidence actually supports, and what's mostly marketing.",
      "blocks": [
        {
          "t": "p",
          "text": "Collagen is the most abundant protein in the body. It forms the structural scaffold that gives skin its firmness, elasticity and plumpness. From the mid-twenties, the body produces roughly 1% less each year. In perimenopause and beyond, that decline accelerates — falling oestrogen removes one of collagen's key production signals, which is why skin often changes noticeably around that time."
        },
        {
          "t": "p",
          "text": "The skincare industry has built a large market around this biology. Whether any specific product can meaningfully slow or reverse that decline depends on how it works — and not all of them do."
        },
        {
          "t": "h",
          "text": "Why collagen creams can't rebuild skin"
        },
        {
          "t": "p",
          "text": "The collagen molecule is large — around 300,000 daltons. Research into skin permeability has established that [the skin's outer barrier only allows molecules smaller than 500 daltons](https://onlinelibrary.wiley.com/doi/epdf/10.1034/j.1600-0625.2000.009003165.x) to pass through. A collagen cream or serum cannot deliver collagen into the dermis; the physics don't allow it."
        },
        {
          "t": "p",
          "text": "What a collagen cream can do is function as a moisturiser. It reduces water loss from the skin's surface, which temporarily plumps fine lines and improves texture. That's useful — but it's the same mechanism as any good humectant or barrier cream. Nothing wrong with them; they are just not doing what the marketing often implies."
        },
        {
          "t": "p",
          "text": "If you want to support collagen synthesis in the dermis, the topical ingredients with the strongest evidence are retinoids (derivatives of vitamin A) and vitamin C. [A 2025 systematic review and meta-analysis of clinical trials on tretinoin](https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/) confirmed that retinoids measurably increase collagen production and improve photodamaged skin — they remain the most evidence-backed topical ingredient for skin ageing. Vitamin C supports the hydroxylase enzymes that form and stabilise collagen — it is a cofactor, not a source, but without enough of it the process stalls."
        },
        {
          "t": "h",
          "text": "What the evidence says about collagen supplements"
        },
        {
          "t": "p",
          "text": "Oral supplements are a more interesting — and more complicated — story. Hydrolysed collagen peptides, the form found in most powders and capsules, are broken into fragments small enough to be absorbed in the gut. There is reasonable evidence that some of those fragments reach the skin and stimulate fibroblasts, the cells responsible for producing collagen and elastin."
        },
        {
          "t": "p",
          "text": "[A 2024 meta-analysis covering 26 randomised controlled trials and 1,721 participants](https://pmc.ncbi.nlm.nih.gov/articles/PMC10773595/) found consistent improvements in skin hydration and elasticity with hydrolysed collagen supplementation. The original landmark trial by [Proksch et al.](https://karger.com/spp/article/27/1/47/295741/Oral-Supplementation-of-Specific-Collagen-Peptides) — 69 women, 8 weeks, 2.5–5g daily — showed statistically significant improvements in skin elasticity, and its findings have held up across subsequent research."
        },
        {
          "t": "p",
          "text": "There is, however, an important caveat. [A 2025 meta-analysis in the American Journal of Medicine](https://www.amjmed.com/article/S0002-9343%2825%2900283-9/abstract) examined 23 trials and found that when studies were separated by funding source, industry-funded trials consistently showed significant benefits — while independently-funded trials showed no effect. This doesn't mean the supplements don't work, but it does mean the evidence base deserves more scrutiny than the marketing suggests."
        },
        {
          "t": "p",
          "text": "The most honest summary: the effects are plausible, the supplements appear safe, and some trials show real improvements. But the evidence is not as solid as it is often presented, and the question of who funded the research matters more here than in most areas."
        },
        {
          "t": "h",
          "text": "The foundations that matter more"
        },
        {
          "t": "p",
          "text": "Before spending on supplements, it is worth checking whether the building blocks are in place. Collagen synthesis depends on specific nutrients, and a shortfall in any of them limits what the body can produce."
        },
        {
          "t": "p",
          "text": "[Vitamin C](https://www.mdpi.com/2072-6643/9/8/866) is the most critical. The enzymes that form and stabilise collagen cannot work without it — made vivid by the fact that scurvy causes skin breakdown and wound-healing failure. You don't need megadoses; the UK Reference Nutrient Intake is 40mg per day. Good sources include bell peppers, kiwi, citrus fruit and broccoli. [A 2024 randomised trial found that combining collagen with vitamin C](https://pmc.ncbi.nlm.nih.gov/articles/PMC11206740/) improved dermis density and skin texture more than placebo — suggesting the two work better together than either alone."
        },
        {
          "t": "p",
          "text": "Zinc supports collagen-producing enzymes and wound repair. Mild deficiency is common, particularly in women eating a predominantly plant-based diet. Rich sources include meat, pumpkin seeds, legumes and wholegrains."
        },
        {
          "t": "p",
          "text": "Copper is required for lysyl oxidase, the enzyme that cross-links collagen fibres to give skin its structural strength. Nuts, seeds, shellfish and liver are the richest sources."
        },
        {
          "t": "p",
          "text": "Protein is what collagen is made from. The body cannot build it without adequate amino acids — and women in midlife often eat less protein than they need, particularly when reducing overall calories."
        },
        {
          "t": "h",
          "text": "A note for perimenopause"
        },
        {
          "t": "p",
          "text": "Oestrogen plays a direct role in collagen production. [A 2025 narrative review in the Journal of Cosmetic Dermatology](https://onlinelibrary.wiley.com/doi/10.1111/jocd.70393) — drawing on five decades of research — confirmed that skin collagen content falls at roughly 1–2% per year in the early postmenopausal period, that skin thickness and barrier function decline alongside it, and that this is driven by falling oestrogen rather than age alone. The same review found evidence that HRT can partially restore collagen content, elasticity and hydration in postmenopausal women."
        },
        {
          "t": "p",
          "text": "The evidence for HRT's skin benefits is growing, but it remains secondary to the better-established benefits for vasomotor symptoms and bone protection. If you are in or approaching perimenopause and noticing significant changes in skin firmness or texture, it is worth raising the question of hormonal health with your GP or a menopause specialist alongside any conversation about skincare."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Collagen supplements improve skin measures — but funding source matters.",
              "detail": "A 2025 meta-analysis in the American Journal of Medicine reviewed 23 randomised controlled trials with 1,474 participants. Industry-funded studies consistently showed significant improvements in hydration, elasticity and wrinkles. When only independently-funded trials were analysed, no significant effect was found. The authors called for more independent research before firm conclusions can be drawn.",
              "cite": "American Journal of Medicine · Systematic review & meta-analysis, 2025",
              "url": "https://www.amjmed.com/article/S0002-9343(25)00283-9/abstract"
            },
            {
              "claim": "The breadth of evidence for oral collagen is growing.",
              "detail": "A 2024 meta-analysis covered 26 randomised controlled trials involving 1,721 participants and found that supplementation with hydrolysed collagen improved skin elasticity and hydration across studies. Effect sizes were modest and trial durations short — but the consistency of direction across such a large evidence base is meaningful.",
              "cite": "PMC · Systematic review & meta-analysis, 2024",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10773595/"
            },
            {
              "claim": "The original landmark RCT still holds.",
              "detail": "Proksch et al. (2014) randomised 69 women aged 35–55 to take 2.5g or 5g of collagen peptides daily for eight weeks. Both doses led to statistically significant improvements in skin elasticity compared to placebo. It remains one of the most frequently cited trials in the field, and its findings have been replicated.",
              "cite": "Skin Pharmacology and Physiology · Randomised controlled trial, 2014",
              "url": "https://karger.com/spp/article/27/1/47/295741/Oral-Supplementation-of-Specific-Collagen-Peptides"
            },
            {
              "claim": "Collagen molecules are too large to penetrate the skin barrier.",
              "detail": "The \"500 Dalton rule\", established in a foundational pharmacology paper, holds that molecules above approximately 500 daltons cannot pass through the skin's outer barrier. Collagen weighs around 300,000 daltons. This is why topical collagen cannot act as a structural repair agent for the dermis — whatever the packaging suggests.",
              "cite": "Experimental Dermatology · Review, 2000",
              "url": "https://onlinelibrary.wiley.com/doi/epdf/10.1034/j.1600-0625.2000.009003165.x"
            },
            {
              "claim": "Retinoids remain the most evidence-backed topical for skin ageing.",
              "detail": "A 2025 systematic review and meta-analysis of randomised controlled trials on tretinoin for photodamaged facial skin confirmed measurable improvements in collagen production, skin texture and fine lines. The mechanism — suppressing collagen-degrading enzymes while stimulating fibroblast activity — is well understood and has been replicated across decades of research.",
              "cite": "PMC · Systematic review & meta-analysis, 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/"
            },
            {
              "claim": "Vitamin C is not optional for collagen synthesis.",
              "detail": "A 2017 review in Nutrients described the established biochemistry: vitamin C acts as a cofactor for the hydroxylase enzymes that stabilise collagen's triple-helix structure, and its absence results in defective, unstable collagen. A 2024 RCT found that collagen combined with vitamin C produced greater improvements in dermis density and texture than collagen alone — reinforcing the importance of combining these nutrients.",
              "cite": "Nutrients · Review, 2017",
              "url": "https://www.mdpi.com/2072-6643/9/8/866"
            },
            {
              "claim": "Oestrogen loss accelerates skin collagen decline — and HRT can help.",
              "detail": "A 2025 narrative review in the Journal of Cosmetic Dermatology reviewed five decades of research on menopausal skin changes and HRT. It confirmed that collagen falls at 1–2% per year in the early postmenopausal period, that skin barrier function and elasticity decline alongside it, and that hormone replacement therapy can partially restore these measures in postmenopausal women.",
              "cite": "Journal of Cosmetic Dermatology · Narrative review, 2025",
              "url": "https://onlinelibrary.wiley.com/doi/10.1111/jocd.70393"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Do collagen supplements actually work?",
          "a": "Possibly — but less clearly than the marketing suggests. Multiple trials show improvements in skin hydration and elasticity, but a 2025 meta-analysis found that independently-funded studies showed no significant effect, while industry-funded ones did. If you want to try them, 2.5–10g of hydrolysed collagen daily is the dose used in most trials. Make sure vitamin C intake is adequate alongside them."
        },
        {
          "q": "Can a collagen cream rebuild skin?",
          "a": "No — collagen molecules are far too large to penetrate the skin barrier. Collagen creams work as moisturisers, which is useful, but that is where the mechanism ends. Retinoids and vitamin C serums are the topical ingredients with evidence for actually stimulating collagen production in the dermis."
        },
        {
          "q": "What is the most important nutrient for skin collagen?",
          "a": "Vitamin C. Without it, the enzymes that form and cross-link collagen cannot function. Getting enough through food — bell peppers, kiwi, citrus, broccoli — matters more than any supplement. Zinc, copper and adequate protein also play essential roles."
        },
        {
          "q": "Does menopause affect collagen?",
          "a": "Yes, significantly. Oestrogen supports collagen synthesis in the skin, and its decline during perimenopause and menopause accelerates collagen loss at roughly 1–2% per year — beyond what age alone would explain. HRT has evidence for partially restoring skin collagen and elasticity. Talk to your GP or a menopause specialist if this is a concern."
        }
      ,
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Why skin changes so fast at menopause — and what HRT can and can't do",
              "url": "/blog/menopause-skin-oestrogen/",
              "desc": "Oestrogen supports collagen production and skin hydration. Here's what the evidence says."
            },
            {
              "name": "Protein for women over 40: how much do you actually need?",
              "url": "/blog/protein-for-women-over-40/",
              "desc": "Collagen is a protein. Getting enough protein in midlife supports skin structure as well as muscle."
            },
            {
              "name": "HRT prescriptions have doubled — patches are now running short",
              "url": "/blog/hrt-prescriptions-doubling/",
              "desc": "Oestrogen affects skin and collagen. New data on the HRT surge and what patch shortages mean."
            }
          ]
        }]
    },
    "ua": {
      "cat": "Краса та шкіра",
      "title": "Чи справді колагенові засоби покращують шкіру?",
      "seoTitle": "Колаген і шкіра: що насправді показують дослідження",
      "metaDesc": "Чи справді колаген покращує шкіру? Розглядаємо докази щодо добавок, кремів і поживних речовин для підтримки власного колагену.",
      "excerpt": "Що насправді показують дослідження про колагенові добавки, креми та поживні речовини для вашого колагену.",
      "meta": "14 червня 2026 · 5 хв читання",
      "lead": "Колаген — це каркас, що робить шкіру пружною й еластичною, і з середини двадцятих років ви щороку виробляєте його трохи менше. Ось що насправді підтверджують докази, а що переважно маркетинг.",
      "blocks": [
        {
          "t": "p",
          "text": "Колаген — найпоширеніший білок в організмі. Він утворює структурний каркас, що надає шкірі пружності, еластичності та наповненості. Із середини двадцятих років тіло виробляє приблизно на 1% менше щороку. Під час перименопаузи й після неї цей спад пришвидшується — падіння естрогену прибирає один із ключових сигналів для вироблення колагену, тому шкіра часто помітно змінюється саме в цей період."
        },
        {
          "t": "p",
          "text": "Індустрія догляду за шкірою побудувала великий ринок навколо цієї біології. Чи може конкретний засіб суттєво сповільнити або повернути цей спад, залежить від того, як він працює — а працюють не всі."
        },
        {
          "t": "h",
          "text": "Чому колагенові креми не можуть відновити шкіру"
        },
        {
          "t": "p",
          "text": "Молекула колагену велика — близько 300 000 дальтонів. Дослідження проникності шкіри встановили, що [зовнішній бар'єр шкіри пропускає лише молекули менші за 500 дальтонів](https://onlinelibrary.wiley.com/doi/epdf/10.1034/j.1600-0625.2000.009003165.x). Колагеновий крем чи сироватка не можуть доставити колаген у дерму; фізика цього не дозволяє."
        },
        {
          "t": "p",
          "text": "Що колагеновий крем справді може — це працювати як зволожувач. Він зменшує втрату води з поверхні шкіри, що тимчасово розгладжує дрібні зморшки й покращує текстуру. Це корисно — але це той самий механізм, що й у будь-якого хорошого зволожувача чи бар'єрного крему. З ними все гаразд; вони просто не роблять того, що часто обіцяє маркетинг."
        },
        {
          "t": "p",
          "text": "Якщо ви хочете підтримати синтез колагену в дермі, топічні інгредієнти з найсильнішими доказами — це ретиноїди (похідні вітаміну A) та вітамін C. [Систематичний огляд і метааналіз клінічних досліджень третиноїну 2025 року](https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/) підтвердив, що ретиноїди вимірно збільшують вироблення колагену й покращують фотопошкоджену шкіру — вони залишаються найдоказовішим топічним інгредієнтом проти старіння шкіри. Вітамін C підтримує ферменти-гідроксилази, що формують і стабілізують колаген — це кофактор, а не джерело, але без достатньої його кількості процес зупиняється."
        },
        {
          "t": "h",
          "text": "Що кажуть докази про колагенові добавки"
        },
        {
          "t": "p",
          "text": "Пероральні добавки — цікавіша й складніша історія. Гідролізовані пептиди колагену, форма, що міститься в більшості порошків і капсул, розщеплюються на фрагменти, достатньо малі для всмоктування в кишечнику. Є розумні докази, що деякі з цих фрагментів досягають шкіри й стимулюють фібробласти — клітини, відповідальні за вироблення колагену та еластину."
        },
        {
          "t": "p",
          "text": "[Метааналіз 2024 року, що охопив 26 рандомізованих контрольованих досліджень і 1721 учасника](https://pmc.ncbi.nlm.nih.gov/articles/PMC10773595/), виявив послідовне покращення зволоження та еластичності шкіри від приймання гідролізованого колагену. Оригінальне знакове дослідження [Proksch та колег](https://karger.com/spp/article/27/1/47/295741/Oral-Supplementation-of-Specific-Collagen-Peptides) — 69 жінок, 8 тижнів, 2,5–5 г щодня — показало статистично значуще покращення еластичності шкіри, і його висновки підтвердилися в наступних дослідженнях."
        },
        {
          "t": "p",
          "text": "Проте є важливе застереження. [Метааналіз 2025 року в American Journal of Medicine](https://www.amjmed.com/article/S0002-9343%2825%2900283-9/abstract) вивчив 23 дослідження й виявив, що коли роботи розділили за джерелом фінансування, дослідження, профінансовані індустрією, послідовно показували значущу користь — тоді як незалежно профінансовані не показали ефекту. Це не означає, що добавки не працюють, але означає, що доказова база заслуговує більшої критичності, ніж підказує маркетинг."
        },
        {
          "t": "p",
          "text": "Найчесніший підсумок: ефекти правдоподібні, добавки видаються безпечними, і деякі дослідження показують справжнє покращення. Але докази не такі надійні, як їх часто подають, а питання про те, хто фінансував дослідження, тут важливіше, ніж у більшості сфер."
        },
        {
          "t": "h",
          "text": "Основи, що важать більше"
        },
        {
          "t": "p",
          "text": "Перш ніж витрачатися на добавки, варто перевірити, чи на місці будівельні блоки. Синтез колагену залежить від певних поживних речовин, і нестача будь-якої з них обмежує те, що тіло здатне виробити."
        },
        {
          "t": "p",
          "text": "[Вітамін C](https://www.mdpi.com/2072-6643/9/8/866) — найкритичніший. Ферменти, що формують і стабілізують колаген, не можуть працювати без нього — це яскраво ілюструє те, що цинга спричиняє руйнування шкіри та порушення загоєння ран. Мегадози не потрібні; британська референсна норма споживання — 40 мг на день. Хороші джерела — солодкий перець, ківі, цитрусові та броколі. [Рандомізоване дослідження 2024 року виявило, що поєднання колагену з вітаміном C](https://pmc.ncbi.nlm.nih.gov/articles/PMC11206740/) покращувало щільність дерми й текстуру шкіри краще за плацебо — тобто разом вони працюють краще, ніж кожен окремо."
        },
        {
          "t": "p",
          "text": "Цинк підтримує ферменти, що виробляють колаген, і загоєння ран. Легка нестача поширена, особливо в жінок із переважно рослинним харчуванням. Багаті джерела — м'ясо, гарбузове насіння, бобові та цільні злаки."
        },
        {
          "t": "p",
          "text": "Мідь потрібна для лізилоксидази — ферменту, що зшиває волокна колагену, надаючи шкірі структурної міцності. Найбагатші джерела — горіхи, насіння, молюски та печінка."
        },
        {
          "t": "p",
          "text": "Білок — це те, з чого зроблений колаген. Тіло не може будувати його без достатньої кількості амінокислот — а жінки в середньому віці часто їдять менше білка, ніж потребують, особливо коли скорочують загальну калорійність."
        },
        {
          "t": "h",
          "text": "Кілька слів про перименопаузу"
        },
        {
          "t": "p",
          "text": "Естроген відіграє пряму роль у виробленні колагену. [Оглядова стаття 2025 року в Journal of Cosmetic Dermatology](https://onlinelibrary.wiley.com/doi/10.1111/jocd.70393) — на основі п'яти десятиліть досліджень — підтвердила, що вміст колагену в шкірі падає приблизно на 1–2% на рік у ранній постменопаузі, що товщина шкіри та бар'єрна функція знижуються разом із ним, і що це спричинено падінням естрогену, а не лише віком. Той самий огляд знайшов докази, що ЗГТ може частково відновити вміст колагену, еластичність і зволоження в жінок у постменопаузі."
        },
        {
          "t": "p",
          "text": "Докази користі ЗГТ для шкіри зростають, але вона залишається вторинною щодо краще доведених переваг для вазомоторних симптомів і захисту кісток. Якщо ви в перименопаузі або наближаєтеся до неї й помічаєте суттєві зміни пружності чи текстури шкіри, варто підняти питання гормонального здоров'я з вашим лікарем або фахівцем із менопаузи паралельно з розмовою про догляд за шкірою."
        },
        {
          "t": "h",
          "text": "Що каже дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Колагенові добавки покращують показники шкіри — але джерело фінансування має значення.",
              "detail": "Метааналіз 2025 року в American Journal of Medicine розглянув 23 рандомізовані контрольовані дослідження з 1474 учасниками. Профінансовані індустрією роботи послідовно показували значуще покращення зволоження, еластичності та зморшок. Коли аналізували лише незалежно профінансовані дослідження, значущого ефекту не виявили. Автори закликали до більшої кількості незалежних досліджень, перш ніж робити тверді висновки.",
              "cite": "American Journal of Medicine · Систематичний огляд і метааналіз, 2025",
              "url": "https://www.amjmed.com/article/S0002-9343(25)00283-9/abstract"
            },
            {
              "claim": "Обсяг доказів для перорального колагену зростає.",
              "detail": "Метааналіз 2024 року охопив 26 рандомізованих контрольованих досліджень із 1721 учасником і виявив, що приймання гідролізованого колагену покращувало еластичність і зволоження шкіри. Розміри ефекту були помірними, а тривалість досліджень короткою — але послідовність напряму в такій великій доказовій базі має значення.",
              "cite": "PMC · Систематичний огляд і метааналіз, 2024",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10773595/"
            },
            {
              "claim": "Оригінальне знакове РКД усе ще актуальне.",
              "detail": "Proksch та колеги (2014) рандомізували 69 жінок віком 35–55 приймати 2,5 г або 5 г пептидів колагену щодня протягом восьми тижнів. Обидві дози привели до статистично значущого покращення еластичності шкіри порівняно з плацебо. Це одне з найчастіше цитованих досліджень у цій галузі, і його висновки відтворювали.",
              "cite": "Skin Pharmacology and Physiology · Рандомізоване контрольоване дослідження, 2014",
              "url": "https://karger.com/spp/article/27/1/47/295741/Oral-Supplementation-of-Specific-Collagen-Peptides"
            },
            {
              "claim": "Молекули колагену завеликі, щоб проникнути крізь бар'єр шкіри.",
              "detail": "«Правило 500 дальтонів», встановлене у фундаментальній фармакологічній праці, стверджує, що молекули понад приблизно 500 дальтонів не можуть пройти крізь зовнішній бар'єр шкіри. Колаген важить близько 300 000 дальтонів. Саме тому топічний колаген не може бути засобом структурного відновлення дерми — хоч би що обіцяла упаковка.",
              "cite": "Experimental Dermatology · Огляд, 2000",
              "url": "https://onlinelibrary.wiley.com/doi/epdf/10.1034/j.1600-0625.2000.009003165.x"
            },
            {
              "claim": "Ретиноїди залишаються найдоказовішим топічним засобом проти старіння шкіри.",
              "detail": "Систематичний огляд і метааналіз рандомізованих контрольованих досліджень третиноїну для фотопошкодженої шкіри обличчя 2025 року підтвердив вимірне покращення вироблення колагену, текстури шкіри та дрібних зморшок. Механізм — пригнічення ферментів, що руйнують колаген, і водночас стимуляція активності фібробластів — добре вивчений і відтворений протягом десятиліть досліджень.",
              "cite": "PMC · Систематичний огляд і метааналіз, 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/"
            },
            {
              "claim": "Вітамін C не є необов'язковим для синтезу колагену.",
              "detail": "Огляд 2017 року в Nutrients описав усталену біохімію: вітамін C діє як кофактор для ферментів-гідроксилаз, що стабілізують потрійну спіраль колагену, а його відсутність призводить до дефектного, нестабільного колагену. РКД 2024 року виявило, що колаген у поєднанні з вітаміном C давав більше покращення щільності дерми й текстури, ніж колаген окремо — що підкреслює важливість поєднання цих речовин.",
              "cite": "Nutrients · Огляд, 2017",
              "url": "https://www.mdpi.com/2072-6643/9/8/866"
            },
            {
              "claim": "Втрата естрогену пришвидшує спад колагену шкіри — і ЗГТ може допомогти.",
              "detail": "Оглядова стаття 2025 року в Journal of Cosmetic Dermatology розглянула п'ять десятиліть досліджень змін шкіри в менопаузі та ЗГТ. Вона підтвердила, що колаген падає на 1–2% на рік у ранній постменопаузі, що бар'єрна функція та еластичність шкіри знижуються разом із ним, і що замісна гормональна терапія може частково відновити ці показники в жінок у постменопаузі.",
              "cite": "Journal of Cosmetic Dermatology · Оглядова стаття, 2025",
              "url": "https://onlinelibrary.wiley.com/doi/10.1111/jocd.70393"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи справді працюють колагенові добавки?",
          "a": "Можливо — але менш однозначно, ніж підказує маркетинг. Багато досліджень показують покращення зволоження та еластичності шкіри, але метааналіз 2025 року виявив, що незалежно профінансовані дослідження не показали значущого ефекту, тоді як профінансовані індустрією — показали. Якщо хочете спробувати, 2,5–10 г гідролізованого колагену на день — це доза, що використовувалася в більшості досліджень. Подбайте про достатнє споживання вітаміну C разом із ними."
        },
        {
          "q": "Чи може колагеновий крем відновити шкіру?",
          "a": "Ні — молекули колагену надто великі, щоб проникнути крізь бар'єр шкіри. Колагенові креми працюють як зволожувачі, що корисно, але на цьому механізм закінчується. Ретиноїди та сироватки з вітаміном C — це топічні інгредієнти з доказами реальної стимуляції вироблення колагену в дермі."
        },
        {
          "q": "Яка поживна речовина найважливіша для колагену шкіри?",
          "a": "Вітамін C. Без нього ферменти, що формують і зшивають колаген, не можуть працювати. Отримувати його достатньо з їжею — солодкий перець, ківі, цитрусові, броколі — важливіше за будь-яку добавку. Цинк, мідь і достатній білок також відіграють важливу роль."
        },
        {
          "q": "Чи впливає менопауза на колаген?",
          "a": "Так, суттєво. Естроген підтримує синтез колагену в шкірі, а його зниження під час перименопаузи та менопаузи пришвидшує втрату колагену приблизно на 1–2% на рік — більше, ніж пояснив би лише вік. ЗГТ має докази часткового відновлення колагену й еластичності шкіри. Поговоріть із лікарем або фахівцем із менопаузи, якщо це вас турбує."
        }
      ]
    }
  },
  {
    "slug": "perimenopause-weight-myths",
    "date": "2026-06-12",
    "image": "/images/perimenopause-weight-gain-myths.jpg",
    "cats": [
      "perimenopause"
    ],
    "en": {
      "cat": "Perimenopause",
      "title": "5 myths about perimenopause and weight",
      "excerpt": "Why the scale isn't the whole story — and what actually helps.",
      "meta": "12 June 2026 · 8 min read",
      "lead": "The scale isn't the whole story. Here's what actually changes in perimenopause — and what genuinely helps.",
      "seoTitle": "5 Myths About Perimenopause and Weight — What Changes",
      "metaDesc": "The scale isn't the whole story in perimenopause. Five myths about weight — from visceral fat and cortisol to muscle loss — and what actually helps.",
      "blocks": [
        {
          "t": "p",
          "text": "When my endocrinologist told me my weight was the same as last year and it was perfectly fine, he meant it as reassurance, but I found it frustrating."
        },
        {
          "t": "p",
          "text": "My dresses still fit, just differently. The belly fat I had never carried in my life, even after childbirth, was suddenly there, and nothing I tried was shifting it: not the under-desk treadmill I bought so I could keep moving through the working day, not the regular strength training sessions, not the months of being stricter with myself than I had ever been. If anything, the fat kept growing. I was exhausted and hungry and my body was quietly doing its own thing regardless."
        },
        {
          "t": "p",
          "text": "Nobody connected this to perimenopause. My endocrinologist pointed to the scale. My GP didn't mention hormones. I was told I was fine, which left me to figure out on my own that the rules I had been following — eat less, move more, be disciplined enough — had stopped applying. Something more fundamental had shifted underneath them, and I was the last to know."
        },
        {
          "t": "p",
          "text": "Here are five myths I wish I'd seen through much earlier."
        },
        {
          "t": "h",
          "text": "Myth 1: “If my weight hasn't changed, I'm fine”"
        },
        {
          "t": "p",
          "text": "My endocrinologist was quite certain of this one, and he wasn't being careless so much as working from a framework that simply doesn't account for what actually happens to women's bodies during perimenopause."
        },
        {
          "t": "p",
          "text": "Total weight and body composition are not the same thing. During the menopause transition, fat redistributes, often significantly, without the overall number on the scale changing at all. The fat that oestrogen had been directing to the hips, thighs and buttocks for decades starts migrating inward instead, accumulating around the organs rather than under the skin. Visceral fat, the kind that wraps around the liver, pancreas and intestines, increases from around 5–8% of total body fat before the transition to 15–20% after it."
        },
        {
          "t": "p",
          "text": "This matters metabolically. Visceral fat isn't the same as the soft subcutaneous fat you can pinch; it's biologically active in ways that drive insulin resistance and low-grade inflammation, and none of that registers on a scale."
        },
        {
          "t": "p",
          "text": "If your clothes are fitting differently around the middle while your weight looks fine on paper, you are not imagining it and you are not being irrational about a number. Your body is redistributing, and the scale is simply the wrong tool for measuring it."
        },
        {
          "t": "h",
          "text": "Myth 2: “I just need to eat less”"
        },
        {
          "t": "p",
          "text": "I spent a long time believing this one, and it sent me in completely the wrong direction."
        },
        {
          "t": "p",
          "text": "Calories still matter, but reducing them doesn't address where your body chooses to store or release fat, and in perimenopause that's being directed increasingly by hormones rather than by what you ate for dinner. Oestrogen has a direct role in fat distribution through receptor signalling in adipose tissue, and while it's present in meaningful amounts it keeps fat in the subcutaneous compartment: hips, thighs, buttocks. As it declines, that signal weakens and fat begins accumulating abdominally instead, and reducing calories doesn't change that mechanism."
        },
        {
          "t": "p",
          "text": "Sleep makes all of this considerably harder. Progesterone, which falls alongside oestrogen during perimenopause, has natural calming effects and supports sleep. When it drops, sleep disruption becomes very common, and poor sleep shifts ghrelin and leptin (the hormones that regulate hunger and fullness) in exactly the wrong directions. You're hungrier than you used to be, you feel full less reliably, and you're trying to sustain restriction through all of it."
        },
        {
          "t": "p",
          "text": "There were many nights when I couldn't fall asleep because of intense hunger. I would fight myself until 4am because I didn't want to add blood sugar issues on top of [everything with my diabetes](/blog/perimenopause-diabetes-blood-sugar/), but eventually, to get at least a couple of hours of sleep, I had to go and eat something."
        },
        {
          "t": "p",
          "text": "This nighttime hunger softened significantly after I started HRT, which confirmed for me personally that it wasn't something I could simply control through willpower."
        },
        {
          "t": "h",
          "text": "Myth 3: “More exercise will fix it”"
        },
        {
          "t": "p",
          "text": "I have real personal investment in correcting this one, because I made exactly this mistake and it cost me months."
        },
        {
          "t": "p",
          "text": "My instinct when nothing was working was to add more: more walking, more time on the treadmill, more cardio and dancing in addition to my strength training. What I didn't understand then is that sustained exercise without adequate recovery raises cortisol, which in a body already managing perimenopausal hormonal shifts and disrupted sleep specifically promotes abdominal fat storage. Your body interprets chronic overexertion as a signal to hold on to energy reserves, and adding more exhausting exercise to an already stressed system doesn't compensate for the hormonal picture; it adds to it."
        },
        {
          "t": "p",
          "text": "The shift that made a real difference was moving away from more cardio and towards strength training. Building and preserving muscle improves glucose handling, raises resting metabolic rate and protects bone density, all of which matter considerably more as oestrogen declines. Moving differently and recovering properly makes far more difference than simply moving more."
        },
        {
          "t": "h",
          "text": "Myth 4: “It's just ageing — there's nothing to do about it”"
        },
        {
          "t": "p",
          "text": "Age is part of this picture, but it's not the whole picture, and the distinction matters because hormonal factors are addressable in ways that ageing in isolation isn't."
        },
        {
          "t": "p",
          "text": "The specific changes of perimenopause, including visceral fat accumulation, muscle loss and declining insulin sensitivity, are driven meaningfully by falling oestrogen and progesterone, not simply by the passing of years."
        },
        {
          "t": "p",
          "text": "That means there are levers, and it's worth knowing what they are. HRT is one of them: research shows [it can partially reverse visceral fat accumulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC9258798/) and improve metabolic markers, and if you're noticing fat redistribution or finding it increasingly difficult to manage your weight despite consistent habits, it's a conversation worth having with a specialist who understands hormonal health properly. This is a decision for you and your doctor, not a recommendation from me, but the option exists and is too often not raised until much later than it could be."
        },
        {
          "t": "h",
          "text": "Myth 5: “Being strict enough will eventually work”"
        },
        {
          "t": "p",
          "text": "This one cost me the most, because the more it didn't work, the harder I pushed, and the harder I pushed, the worse things got, and I had no framework to understand why."
        },
        {
          "t": "p",
          "text": "Chronic caloric restriction is a physiological stressor, and so is exhausting exercise without adequate recovery. Research shows both can raise cortisol, and cortisol in a body already navigating perimenopausal hormonal changes specifically promotes abdominal fat storage — visceral fat tissue has a higher density of cortisol receptors than subcutaneous fat, which is part of why chronic stress tends to settle precisely where you least want it. The harder you restrict, the more you train through exhaustion, the more your body interprets this as a threat and holds on to the very fat you're trying to lose. I was doing everything I could, things were getting worse, and at the time I genuinely didn't know that was possible."
        },
        {
          "t": "p",
          "text": "What actually moved things was getting enough sleep, managing stress rather than pushing through it, shifting from more cardio to strength training, and [eating enough protein](/blog/protein-for-women-over-40/) at every meal to protect what muscle I had. None of these felt like doing more (the sleep and stress work in particular felt like doing considerably less), but they addressed what was actually driving the changes in my body, rather than fighting against it while the real cause went unaddressed."
        },
        {
          "t": "p",
          "text": "Adequate protein, resistance training, sleep quality and stress reduction are all available regardless of HRT, and each targets specific mechanisms rather than functioning as general lifestyle advice. That said, it's worth working through any significant dietary changes with your doctor rather than adopting something restrictive on your own — strict ketogenic diets, for instance, are increasingly popular, but very low carbohydrate intake can affect thyroid function and amplify cortisol responses, both of which are already under pressure during perimenopause, and the evidence for [keto specifically outperforming a balanced, protein-forward diet](https://www.medicalnewstoday.com/articles/keto-and-menopause) in this context simply isn't there."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Visceral fat increases significantly during perimenopause — even when overall weight is unchanged.",
              "detail": "A 2026 study in the Journal of Clinical Medicine found that across all BMI categories, postmenopausal women had significantly higher visceral fat and lower skeletal muscle mass than premenopausal women — even where total body weight was similar. The shift toward central adiposity is consistent and measurable regardless of calorie intake.",
              "cite": "Journal of Clinical Medicine · Cross-sectional study, 2026",
              "url": "https://www.mdpi.com/2077-0383/15/2/740"
            },
            {
              "claim": "Oestrogen controls fat distribution through direct receptor signalling in adipose tissue.",
              "detail": "A review in Frontiers in Endocrinology (2022) mapped how oestrogen and its receptors in fat tissue regulate fat metabolism and storage — favouring subcutaneous over visceral fat. As oestrogen falls, the mechanism directing fat to hips and thighs is lost, and visceral accumulation increases. This is a direct biological mechanism, not a consequence of eating more.",
              "cite": "Frontiers in Endocrinology · Review, 2022",
              "url": "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.921504/full"
            },
            {
              "claim": "Muscle loss in perimenopause is real — and resistance training is the most evidence-supported response.",
              "detail": "A 2026 review in the Journal of Cachexia, Sarcopenia and Muscle documented reductions of around −2.5% in skeletal muscle mass in perimenopausal women and −5.7% in postmenopausal women versus premenopausal women, with the transition years marking the steepest decline. Resistance training and adequate protein intake are the two most evidence-supported interventions.",
              "cite": "Journal of Cachexia, Sarcopenia and Muscle · Review, 2026",
              "url": "https://onlinelibrary.wiley.com/doi/10.1002/jcsm.70232"
            },
            {
              "claim": "Low-calorie dieting is a physiological stressor that raises cortisol.",
              "detail": "A 2010 study in Psychosomatic Medicine found that low-calorie dieting increases cortisol output — a stress response that, sustained over time, works against the very fat loss it is meant to achieve.",
              "cite": "Psychosomatic Medicine · 2010",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20368473/"
            },
            {
              "claim": "Cortisol acts preferentially on visceral fat — which is why chronic stress settles at the middle.",
              "detail": "Reviews of glucocorticoid action show that cortisol acts preferentially on visceral adipose tissue, which carries a higher density of cortisol receptors than subcutaneous fat, driving central fat accumulation under chronic physiological stress.",
              "cite": "Glucocorticoids & visceral adiposity · Review",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11907100/"
            },
            {
              "claim": "Resistance training leads non-pharmacological approaches for preserving muscle in menopausal women.",
              "detail": "A 2023 systematic review and meta-analysis of 27 randomised controlled trials in BMC Women's Health found that exercise — and resistance training in particular — was the most effective non-pharmacological approach for preserving muscle mass and strength through the menopausal transition.",
              "cite": "BMC Women's Health · Systematic review & meta-analysis, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, women's health writer living with type 1 diabetes",
          "text": "Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women's health, perimenopause and long-term wellbeing at lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Why am I gaining weight in perimenopause?",
          "a": "For many women the bigger shift isn't weight gain but fat redistribution: fat moving from the hips and thighs toward the abdomen as oestrogen declines, with visceral fat increasing even when the scale hasn't moved. Sleep disruption, muscle loss and elevated cortisol from chronic stress or restriction all compound this. It's a hormonal picture more than a calorie one, and it's worth treating it as such."
        },
        {
          "q": "How do I lose weight during perimenopause?",
          "a": "Calories still matter, but they work better alongside the things that address the hormonal environment: enough protein to protect muscle, resistance training two to three times a week, better sleep and genuinely managing stress. For some women, HRT makes a meaningful difference to fat redistribution, which is worth discussing with a specialist who understands both hormonal health and your broader health picture."
        },
        {
          "q": "Does muscle really matter for perimenopause weight?",
          "a": "More than almost anything else. Muscle is metabolically active, raising resting metabolic rate and improving how your body handles glucose, and perimenopause accelerates its loss if you're not actively working against that with resistance training and enough protein. Building and preserving muscle is one of the most consequential things you can do for your body composition, energy and long-term metabolic health through this transition and beyond."
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза",
      "title": "5 міфів про перименопаузу та вагу",
      "excerpt": "Чому вага на терезах — не вся історія, і що справді допомагає.",
      "meta": "12 червня 2026 · 8 хв читання",
      "lead": "Вага на терезах — не вся історія. Ось що справді змінюється при перименопаузі і що дійсно допомагає.",
      "seoTitle": "5 міфів про перименопаузу та вагу — що насправді змінюється",
      "metaDesc": "Вага на терезах — не вся історія при перименопаузі. П'ять міфів про вагу — від вісцерального жиру до втрати м'язів — і що каже наука про те, що допомагає.",
      "blocks": [
        {
          "t": "p",
          "text": "Коли мій ендокринолог сказав, що моя вага така сама, як торік, і це цілком нормально, він мав на увазі заспокоєння, але мене це радше дратувало."
        },
        {
          "t": "p",
          "text": "Мої сукні все ще сідали, просто інакше. Жир на животі, якого я не мала ніколи в житті, навіть після пологів, раптом зʼявився, і ніщо з того, що я пробувала, його не зрушувало: ні бігова доріжка під столом, яку я купила, щоб рухатися протягом робочого дня, ні регулярні силові тренування, ні місяці, коли я була суворішою до себе, ніж будь-коли. Якщо вже на те, жир лише зростав. Я була виснажена й голодна, а моє тіло тихо робило своє, попри все."
        },
        {
          "t": "p",
          "text": "Ніхто не повʼязав це з перименопаузою. Мій ендокринолог указував на терези. Мій сімейний лікар не згадав про гормони. Мені казали, що я в нормі, і це залишило мене самій зʼясовувати, що правила, яких я дотримувалася — їж менше, рухайся більше, будь достатньо дисциплінованою — перестали працювати. Щось фундаментальніше змістилося під ними, а я дізналася про це остання."
        },
        {
          "t": "p",
          "text": "Ось пʼять міфів, які я хотіла б розвіяти набагато раніше."
        },
        {
          "t": "h",
          "text": "Міф 1: «Якщо моя вага не змінилася, я в нормі»"
        },
        {
          "t": "p",
          "text": "Мій ендокринолог був цілком певний цього, і він не був недбалим — просто працював у межах підходу, який просто не враховує того, що насправді відбувається з тілом жінки під час перименопаузи."
        },
        {
          "t": "p",
          "text": "Загальна вага та склад тіла — це не одне й те саме. Під час менопаузального переходу жир перерозподіляється, часто суттєво, при цьому загальна цифра на терезах може взагалі не змінитися. Жир, який естроген десятиліттями спрямовував на стегна, сідниці й задню поверхню ніг, починає мігрувати всередину, накопичуючись навколо органів, а не під шкірою. Вісцеральний жир, той, що огортає печінку, підшлункову й кишечник, зростає приблизно з 5–8% загального жиру тіла до переходу до 15–20% після нього."
        },
        {
          "t": "p",
          "text": "Це має метаболічне значення. Вісцеральний жир — не те саме, що мʼякий підшкірний жир, який можна вщипнути; він біологічно активний у спосіб, що спричиняє інсулінорезистентність і хронічне запалення низького ступеня, і нічого з цього терези не показують."
        },
        {
          "t": "p",
          "text": "Якщо ваш одяг інакше сідає в талії, тоді як вага на папері виглядає нормальною, ви цього не вигадуєте й не поводитеся ірраціонально через цифру. Ваше тіло перерозподіляється, а терези — просто хибний інструмент для його вимірювання."
        },
        {
          "t": "h",
          "text": "Міф 2: «Мені просто треба їсти менше»"
        },
        {
          "t": "p",
          "text": "Я довго вірила в це, і це повело мене зовсім у хибному напрямі."
        },
        {
          "t": "p",
          "text": "Калорії досі мають значення, але їх скорочення не впливає на те, де тіло вирішує зберігати чи вивільняти жир, а в перименопаузі це дедалі більше визначають гормони, а не те, що ви зʼїли на вечерю. Естроген має пряму роль у розподілі жиру через рецепторну сигналізацію в жировій тканині, і поки його достатньо, він утримує жир у підшкірному відділі: стегна, сідниці. Коли він знижується, цей сигнал слабшає, і жир починає накопичуватися в ділянці живота, а скорочення калорій цього механізму не змінює."
        },
        {
          "t": "p",
          "text": "Сон робить усе це значно важчим. Прогестерон, що падає разом з естрогеном під час перименопаузи, має природний заспокійливий ефект і підтримує сон. Коли він знижується, порушення сну стають дуже поширеними, а поганий сон зсуває грелін і лептин (гормони, що регулюють голод і насичення) саме в хибному напрямі. Ви голодніші, ніж раніше, насичення відчуваєте менш надійно, і водночас намагаєтеся утримувати обмеження."
        },
        {
          "t": "p",
          "text": "Було багато ночей, коли я не могла заснути через сильний голод. Я боролася із собою до 4-ї ранку, бо не хотіла додавати проблеми з цукром у крові до [всього, що вже було з моїм діабетом](/ua/blog/perimenopause-diabetes-blood-sugar/), але зрештою, щоб поспати бодай кілька годин, мусила встати й щось зʼїсти."
        },
        {
          "t": "p",
          "text": "Цей нічний голод значно послабшав після того, як я почала ЗГТ, і це особисто підтвердило мені, що це не те, що можна просто контролювати силою волі."
        },
        {
          "t": "h",
          "text": "Міф 3: «Більше вправ це виправить»"
        },
        {
          "t": "p",
          "text": "Я маю особисту причину виправити цей міф, бо зробила саме цю помилку, і вона коштувала мені місяців."
        },
        {
          "t": "p",
          "text": "Моїм інстинктом, коли ніщо не працювало, було додати більше: більше ходьби, більше часу на доріжці, більше кардіо й танців на додачу до силових. Чого я тоді не розуміла — це що тривалі навантаження без належного відновлення підвищують кортизол, який у тілі, що вже справляється з гормональними зрушеннями перименопаузи й порушеним сном, саме сприяє накопиченню жиру на животі. Тіло тлумачить хронічне перенапруження як сигнал утримувати запаси енергії, і додавання ще більше виснажливих вправ до й так перевантаженої системи не компенсує гормональної картини; воно її доповнює."
        },
        {
          "t": "p",
          "text": "Зміна, що дала справжню різницю, — це відхід від більшого кардіо до силових тренувань. Побудова й збереження мʼязів покращують оброблення глюкози, підвищують метаболізм спокою й захищають щільність кісток — усе це важить значно більше в міру зниження естрогену. Рухатися інакше й відновлюватися належно дає набагато більше, ніж просто рухатися більше."
        },
        {
          "t": "h",
          "text": "Міф 4: «Це просто вік — з цим нічого не вдієш»"
        },
        {
          "t": "p",
          "text": "Вік — частина цієї картини, але не вся картина, і ця відмінність важлива, бо гормональні чинники піддаються корекції в спосіб, у який вік сам по собі — ні."
        },
        {
          "t": "p",
          "text": "Специфічні зміни перименопаузи, зокрема накопичення вісцерального жиру, втрата мʼязів і зниження чутливості до інсуліну, суттєво зумовлені падінням естрогену й прогестерону, а не просто плином років."
        },
        {
          "t": "p",
          "text": "Це означає, що важелі є, і варто знати, які саме. ЗГТ — один із них: дослідження показують, що вона може [частково повернути назад накопичення вісцерального жиру](https://pmc.ncbi.nlm.nih.gov/articles/PMC9258798/) й покращити метаболічні показники, і якщо ви помічаєте перерозподіл жиру або дедалі важче керуєте вагою попри послідовні звички, це розмова, яку варто мати з фахівцем, що добре розуміється на гормональному здоровʼї. Це рішення для вас і вашого лікаря, а не порада від мене, але цей варіант існує й надто часто не порушується аж до значно пізнішого часу, ніж міг би."
        },
        {
          "t": "h",
          "text": "Міф 5: «Достатня суворість зрештою спрацює»"
        },
        {
          "t": "p",
          "text": "Цей міф коштував мені найдорожче, бо що більше це не працювало, то сильніше я тиснула, а що сильніше тиснула, то гіршало, і я не мала жодних рамок, щоб зрозуміти чому."
        },
        {
          "t": "p",
          "text": "Хронічне обмеження калорій — це фізіологічний стресор, як і виснажливі вправи без належного відновлення. Дослідження показують, що обидва можуть підвищувати кортизол, а кортизол у тілі, що вже проходить гормональні зміни перименопаузи, саме сприяє накопиченню жиру на животі — вісцеральна жирова тканина має вищу щільність кортизолових рецепторів, ніж підшкірна, і це частково пояснює, чому хронічний стрес осідає саме там, де ви найменше цього хочете. Що суворіше ви обмежуєте, що більше тренуєтеся через виснаження, то більше тіло сприймає це як загрозу й утримує саме той жир, який ви намагаєтеся втратити. Я робила все, що могла, ставало дедалі гірше, і тоді я справді не знала, що таке можливо."
        },
        {
          "t": "p",
          "text": "Що справді зрушило справу — це достатній сон, керування стресом замість продавлювання крізь нього, перехід від більшого кардіо до силових і [достатньо білка](/ua/blog/protein-for-women-over-40/) на кожен прийом їжі, щоб зберегти мʼязи, які я мала. Ніщо з цього не відчувалося як «робити більше» (сон і робота зі стресом, зокрема, відчувалися радше як робити значно менше), але воно впливало на те, що насправді керувало змінами в моєму тілі, а не боролося з ним, поки справжня причина лишалася непочутою."
        },
        {
          "t": "p",
          "text": "Достатній білок, силові тренування, якість сну й зниження стресу доступні незалежно від ЗГТ, і кожне з них націлене на конкретні механізми, а не є загальною порадою щодо способу життя. При цьому будь-які суттєві зміни в харчуванні варто проходити разом із лікарем, а не братися за щось обмежувальне самотужки — суворі кетогенні дієти, наприклад, дедалі популярніші, але дуже низьке споживання вуглеводів може впливати на функцію щитоподібної залози й посилювати кортизолову відповідь, а обидва й так під тиском під час перименопаузи, і доказів того, що саме [кето перевершує збалансоване харчування з достатнім білком](https://www.medicalnewstoday.com/articles/keto-and-menopause) у цьому контексті, просто немає."
        },
        {
          "t": "h",
          "text": "Що каже дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Вісцеральний жир суттєво зростає під час перименопаузи — навіть коли загальна вага не змінюється.",
              "detail": "Дослідження 2026 року в Journal of Clinical Medicine виявило, що в усіх категоріях ІМТ жінки в постменопаузі мали суттєво більше вісцерального жиру й менше скелетної мʼязової маси, ніж у пременопаузі — навіть за схожої загальної ваги. Зсув до центрального ожиріння послідовний і вимірний незалежно від споживання калорій.",
              "cite": "Journal of Clinical Medicine · Крос-секційне дослідження, 2026",
              "url": "https://www.mdpi.com/2077-0383/15/2/740"
            },
            {
              "claim": "Естроген контролює розподіл жиру через пряму рецепторну сигналізацію в жировій тканині.",
              "detail": "Огляд у Frontiers in Endocrinology (2022) описав, як естроген і його рецептори в жировій тканині регулюють метаболізм і зберігання жиру — на користь підшкірного, а не вісцерального. Коли естроген падає, механізм, що спрямовує жир на стегна, втрачається, і вісцеральне накопичення зростає. Це прямий біологічний механізм, а не наслідок того, що ви більше їсте.",
              "cite": "Frontiers in Endocrinology · Огляд, 2022",
              "url": "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.921504/full"
            },
            {
              "claim": "Втрата мʼязів у перименопаузі реальна — а силові тренування мають найбільше доказів.",
              "detail": "Огляд 2026 року в Journal of Cachexia, Sarcopenia and Muscle задокументував зниження скелетної мʼязової маси приблизно на −2,5% у жінок у перименопаузі та −5,7% у постменопаузі порівняно з пременопаузою, при цьому роки переходу — період найкрутішого спаду. Силові тренування й достатнє споживання білка — дві інтервенції з найбільшою доказовою базою.",
              "cite": "Journal of Cachexia, Sarcopenia and Muscle · Огляд, 2026",
              "url": "https://onlinelibrary.wiley.com/doi/10.1002/jcsm.70232"
            },
            {
              "claim": "Низькокалорійні дієти — це фізіологічний стресор, який підвищує кортизол.",
              "detail": "Дослідження 2010 року в Psychosomatic Medicine виявило, що низькокалорійні дієти підвищують вихід кортизолу — стресову відповідь, яка з часом працює проти тієї самої втрати жиру, заради якої її запускають.",
              "cite": "Psychosomatic Medicine · 2010",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20368473/"
            },
            {
              "claim": "Кортизол діє переважно на вісцеральний жир — тому хронічний стрес осідає саме на талії.",
              "detail": "Огляди дії глюкокортикоїдів показують, що кортизол діє переважно на вісцеральну жирову тканину, яка має вищу щільність кортизолових рецепторів, ніж підшкірна, сприяючи центральному накопиченню жиру за хронічного фізіологічного стресу.",
              "cite": "Глюкокортикоїди та вісцеральне ожиріння · Огляд",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11907100/"
            },
            {
              "claim": "Силові тренування очолюють нефармакологічні підходи до збереження мʼязів у жінок у менопаузі.",
              "detail": "Систематичний огляд і метааналіз 27 рандомізованих контрольованих досліджень 2023 року в BMC Women's Health виявив, що вправи — і силові зокрема — були найефективнішим нефармакологічним підходом до збереження мʼязової маси й сили під час менопаузального переходу.",
              "cite": "BMC Women's Health · Систематичний огляд і метааналіз, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, авторка про жіноче здоров'я, що живе з діабетом 1 типу",
          "text": "Lena Filatova живе з діабетом 1 типу вже 23 роки. Вона пише про жіноче здоров'я, перименопаузу та довгострокове благополуччя на lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Чому я набираю вагу під час перименопаузи?",
          "a": "Для багатьох жінок більший зсув — це не набір ваги, а перерозподіл жиру: жир переходить зі стегон до живота в міру зниження естрогену, і вісцеральний жир зростає, навіть коли терези не рухаються. Порушення сну, втрата мʼязів і підвищений кортизол через хронічний стрес чи обмеження — усе це посилює процес. Це радше гормональна картина, ніж калорійна, і варто ставитися до неї саме так."
        },
        {
          "q": "Як схуднути під час перименопаузи?",
          "a": "Калорії досі мають значення, але вони краще працюють поряд із тим, що впливає на гормональне середовище: достатньо білка, щоб зберегти мʼязи, силові тренування двічі-тричі на тиждень, кращий сон і справжнє керування стресом. Для деяких жінок ЗГТ помітно впливає на перерозподіл жиру, що варто обговорити з фахівцем, який розуміється і на гормональному здоровʼї, і на вашій ширшій картині здоровʼя."
        },
        {
          "q": "Чи справді мʼязи важливі для ваги при перименопаузі?",
          "a": "Більше, ніж майже будь-що інше. Мʼязи метаболічно активні: вони підвищують метаболізм спокою й покращують те, як тіло справляється з глюкозою, а перименопауза пришвидшує їх втрату, якщо ви активно не протидієте цьому силовими й достатнім білком. Побудова й збереження мʼязів — одна з найважливіших речей, які ви можете зробити для складу тіла, енергії та довгострокового метаболічного здоровʼя протягом цього переходу й після нього."
        }
      ]
    }
  },
  {
    "slug": "reading-glucose-patterns",
    "date": "2026-06-03",
    "image": "/images/how-to-read-glucose-patterns-diabetes.jpg",
    "cats": [
      "diabetes"
    ],
    "comingSoon": true,
    "en": {
      "cat": "Diabetes",
      "title": "How to read your glucose patterns",
      "excerpt": "A simple framework for making sense of your daily numbers.",
      "meta": "3 June 2026 · 5 min read",
      "lead": "A simple framework for making sense of your daily numbers — without obsessing over every reading.",
      "body": [
        "Your glucose responds to food, movement, sleep and stress. Looking at patterns over several days tells you far more than any single number.",
        "Notice how you react to specific meals. Pairing carbohydrates with protein, fat and fibre usually flattens the spike that follows.",
        "A short walk after eating is one of the most reliable ways to steady your levels. Start there before changing anything else in your routine."
      ],
      "faq": [
        {
          "q": "How do I read my glucose patterns?",
          "a": "Look at patterns over several days rather than any single reading. Your glucose responds to food, movement, sleep and stress, so trends tell you far more than one number ever could."
        },
        {
          "q": "How do I lower a glucose spike after meals?",
          "a": "Pair carbohydrates with protein, fat and fibre to flatten the spike, and take a short walk after eating — one of the most reliable ways to steady your levels."
        },
        {
          "q": "Should I change my routine over one high reading?",
          "a": "No. A single high number rarely means much on its own. Watch how you react to specific meals across several days before adjusting anything."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "Як читати свої рівні глюкози",
      "excerpt": "Проста система, щоб зрозуміти свої щоденні показники.",
      "meta": "3 червня 2026 · 5 хв читання",
      "lead": "Проста система, щоб зрозуміти свої щоденні показники — без одержимості кожним значенням.",
      "body": [
        "Глюкоза реагує на їжу, рух, сон і стрес. Патерни за кілька днів кажуть значно більше, ніж будь-яке окреме значення.",
        "Помічайте реакцію на конкретні страви. Поєднання вуглеводів із білком, жиром і клітковиною зазвичай згладжує стрибок.",
        "Коротка прогулянка після їжі — один із найнадійніших способів стабілізувати рівень. Почніть саме з цього."
      ],
      "faq": [
        {
          "q": "Як читати свої патерни глюкози?",
          "a": "Дивіться на патерни за кілька днів, а не на окреме значення. Глюкоза реагує на їжу, рух, сон і стрес, тож тенденції кажуть значно більше, ніж одне число."
        },
        {
          "q": "Як зменшити стрибок глюкози після їжі?",
          "a": "Поєднуйте вуглеводи з білком, жиром і клітковиною, щоб згладити стрибок, і йдіть на коротку прогулянку після їжі — один із найнадійніших способів стабілізувати рівень."
        },
        {
          "q": "Чи варто змінювати режим через одне високе значення?",
          "a": "Ні. Окреме високе число саме по собі рідко щось означає. Спостерігайте за реакцією на конкретні страви кілька днів, перш ніж щось змінювати."
        }
      ]
    }
  },
  {
    "slug": "cortisol-belly-perimenopause",
    "date": "2026-07-15",
    "featured": true,
    "image": "/images/cortisol-belly-perimenopause.jpg",
    "cats": [
      "perimenopause",
      "weight"
    ],
    "en": {
      "cat": "Perimenopause",
      "title": "Cortisol belly in perimenopause: what's actually true",
      "excerpt": "“Cortisol belly” is everywhere — and mostly misunderstood. What's really true about cortisol, stress and abdominal fat in perimenopause.",
      "meta": "15 July 2026 · 8 min read",
      "lead": "“Cortisol belly” is all over social media right now — blamed for the weight that won't shift, with a supplement or “cortisol cocktail” ready to fix it. Here's what's real, what isn't, and what actually changes in perimenopause.",
      "seoTitle": "Cortisol Belly in Perimenopause: What's Actually True",
      "metaDesc": "“Cortisol belly” is everywhere and mostly misunderstood. What's actually true about cortisol, stress and belly fat in perimenopause — and what genuinely helps.",
      "blocks": [
        {
          "t": "p",
          "text": "A few years into perimenopause, I had belly fat I had never carried before — not after childbirth, not at any point in my life — and nothing I did was shifting it. So when I first saw people online talking about “cortisol belly,” it landed. Finally, a name for it, and apparently a reason: stress hormones. The relief lasted right up until the next post tried to sell me a supplement to “flush” my cortisol."
        },
        {
          "t": "p",
          "text": "The truth sits somewhere in the middle, and I think it's worth being honest about both halves of it. Cortisol and where your body stores fat really are connected. But “cortisol belly” as it's usually sold — a single villain, fixable with a powder — isn't how any of this works, and in perimenopause the picture is more layered still."
        },
        {
          "t": "h",
          "text": "First, what “cortisol belly” is not"
        },
        {
          "t": "p",
          "text": "“Cortisol belly” is not a medical diagnosis. You won't find it in your GP's notes, because it isn't a condition — it's a popular label for abdominal fat that someone has decided to attribute to stress. Cortisol itself is not a toxin or a villain; it's an essential hormone that gets you out of bed in the morning, helps manage inflammation and helps regulate blood sugar. You are not meant to “flush” it, and you can't detox it with a drink."
        },
        {
          "t": "p",
          "text": "There is a real condition of genuinely, persistently high cortisol — Cushing's syndrome — and it does cause fat to build around the tummy, upper back and face. But it is rare, it's usually caused by long-term steroid medication or a small growth on a gland, and crucially it's diagnosed with an actual [cortisol test in blood, urine or saliva](https://www.nhs.uk/conditions/cushings-syndrome/), not by looking at your waistline. Everyday stress is not Cushing's, and feeling frazzled does not mean your cortisol is clinically high. If you genuinely suspect it, that's a GP conversation and a test, not a supplement."
        },
        {
          "t": "h",
          "text": "The part that is true: cortisol really does prefer your middle"
        },
        {
          "t": "p",
          "text": "Here's the half worth taking seriously. When cortisol does drive fat storage, it acts preferentially on the fat deep inside your abdomen — the visceral fat around your organs — rather than the softer fat under your skin. That's not a marketing claim; it's mechanism. Visceral fat carries [two to four times the density of cortisol receptors](https://pmc.ncbi.nlm.nih.gov/articles/PMC3959161/) that subcutaneous fat does, and it makes more of the enzyme (11β-HSD1) that reactivates cortisol locally inside the tissue. So when cortisol is elevated over long periods, the belly is exactly where it tends to settle."
        },
        {
          "t": "p",
          "text": "There's also a striking piece of research showing the relationship runs both ways. In a study of premenopausal women, those who [carried more fat around the middle secreted more cortisol under stress](https://pubmed.ncbi.nlm.nih.gov/11020091/) — and kept secreting it even once the stressful task became familiar, rather than adapting the way the other women did. Stress and central fat feed each other. So the instinct behind “cortisol belly” isn't mad. It's the powder-that-fixes-it part that is."
        },
        {
          "t": "h",
          "text": "Why perimenopause changes the picture"
        },
        {
          "t": "p",
          "text": "This is where it gets specific to us, and where the simple “stress hormone” story stops being enough. Two things are happening at once in perimenopause, and they compound."
        },
        {
          "t": "p",
          "text": "The first is oestrogen. For decades it directs fat towards your hips and thighs; as it declines, that signal weakens and fat migrates inward to the abdomen instead. The [British Menopause Society](https://thebms.org.uk/wp-content/uploads/2023/06/19-BMS-TfC-Menopause-Nutrition-and-Weight-Gain-JUNE2023-A.pdf) puts numbers on it: visceral fat rises from around 5–8% of body weight before the transition to 10–15% after it, and most of the weight women gain in these years — roughly 1.5kg a year on average — settles around the middle. That happens partly independently of stress. I wrote more about this in [five myths about perimenopause and weight](/blog/perimenopause-weight-myths/)."
        },
        {
          "t": "p",
          "text": "The second is that cortisol itself appears to rise across the menopause transition. In the Seattle Midlife Women's Health Study, [overnight cortisol climbed through the transition and peaked in its late stage](https://pmc.ncbi.nlm.nih.gov/articles/PMC2749064/) — and, interestingly, this was best predicted by the hormonal shifts of menopause rather than by how stressed the women reported feeling. In other words, some of the cortisol rise in these years is being driven by your changing hormones, not only by your to-do list."
        },
        {
          "t": "p",
          "text": "Sleep sits on top of both. Progesterone, which also falls in perimenopause, helps you sleep; when it drops, broken nights become common — and losing sleep [can nudge cortisol upward](https://pubmed.ncbi.nlm.nih.gov/38777757/), which is exactly the direction you don't want. It becomes a loop: poorer sleep, higher cortisol, more central fat, and a body that feels increasingly unlike the one you knew."
        },
        {
          "t": "h",
          "text": "The trap I fell into"
        },
        {
          "t": "p",
          "text": "Knowing all this, here's the mistake I made anyway, and the one I most want to warn other women off. When nothing was working, I did what I'd always been taught to do: ate less, and moved more. Much less, and much more."
        },
        {
          "t": "p",
          "text": "The problem is that both of those, taken to an extreme, are physiological stressors in their own right. Sustained under-eating [raises cortisol](https://pubmed.ncbi.nlm.nih.gov/20368473/) — one study found low-calorie dieting measurably increased it. Hard exercise without adequate recovery does the same. So there I was, adding two more sources of cortisol to a system where cortisol was already part of the problem, and wondering why the belly fat was getting worse rather than better. I wasn't failing at discipline. I was, without knowing it, pouring petrol on the exact fire I was trying to put out."
        },
        {
          "t": "h",
          "text": "What actually helps (and what to skip)"
        },
        {
          "t": "p",
          "text": "The genuinely useful news is that the things that help are unglamorous, mostly free, and not sold in a jar. None of them “target” cortisol the way the supplements promise — they lower the load on a stressed system so your body stops behaving as though it's under threat."
        },
        {
          "t": "p",
          "text": "Protect your sleep as if it were a medical intervention, because functionally it is. Manage stress rather than pushing through it — in one trial, the [women who most reduced their stress and cortisol also lost the most abdominal fat](https://pmc.ncbi.nlm.nih.gov/articles/PMC3184496/), even though the programme on its own wasn't a magic bullet. Move in a way that builds rather than drains: [resistance training is the single most evidence-backed](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/) thing you can do to hold on to muscle through menopause, and it doesn't spike cortisol the way relentless cardio can. Eat [enough protein](/blog/protein-for-women-over-40/) to protect that muscle. Both the [NHS](https://www.nhs.uk/conditions/menopause-and-perimenopause/things-you-can-do/) and the British Menopause Society land in the same place: strength work, protein, decent sleep, sensible drinking."
        },
        {
          "t": "p",
          "text": "And the supplements, the “cortisol cocktails,” the adrenal detoxes? Skip them. There's no good evidence they lower cortisol or shift abdominal fat, and some are little more than sugar and salt with good marketing. If your symptoms are significant, the conversation worth having is with a doctor who understands hormonal health — about whether HRT has a role for you, since restoring oestrogen can help with fat redistribution. That's a decision for you and your clinician, not a recommendation from me, and certainly not something to replace with a powder."
        },
        {
          "t": "p",
          "text": "“Cortisol belly” gets one thing right: your body in perimenopause is not misbehaving out of laziness, and the old rules genuinely have stopped applying. It gets one big thing wrong in suggesting you can buy your way out of it. The real levers are quieter than that — and, unlike the supplements, they actually work."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Genuinely high cortisol is a rare, measurable medical condition — not the same as everyday stress.",
              "detail": "Cushing's syndrome, the condition of persistently excess cortisol, does cause fat to build around the tummy, upper back and face — but it is rare, usually caused by long-term steroid medication or a small glandular growth, and diagnosed with a blood, urine or saliva cortisol test rather than by appearance. Feeling stressed does not mean cortisol is clinically high.",
              "cite": "NHS · Cushing's syndrome",
              "url": "https://www.nhs.uk/conditions/cushings-syndrome/"
            },
            {
              "claim": "When cortisol drives fat storage, it acts preferentially on visceral belly fat.",
              "detail": "Visceral (intra-abdominal) fat carries two-to-four times the density of glucocorticoid receptors found in subcutaneous fat, and shows greater local activity of 11β-HSD1, the enzyme that regenerates active cortisol within the tissue. This is the biological reason chronically elevated cortisol tends to accumulate centrally rather than under the skin.",
              "cite": "Molecular & Cellular Endocrinology · Review, 2014",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3959161/"
            },
            {
              "claim": "Stress and central fat reinforce each other.",
              "detail": "In a study of 59 premenopausal women, those with more fat around the middle secreted significantly more cortisol in response to stress — and, unlike the others, kept over-secreting it even once the challenge became familiar, showing less adaptation to repeated stress.",
              "cite": "Epel et al., Psychosomatic Medicine · 2000",
              "url": "https://pubmed.ncbi.nlm.nih.gov/11020091/"
            },
            {
              "claim": "Cortisol rises across the menopausal transition — driven largely by hormonal change.",
              "detail": "The Seattle Midlife Women's Health Study found overnight urinary cortisol increased across the menopausal transition and peaked in its late stage, and that this was best predicted by reproductive hormone changes (oestrogen, testosterone, FSH) rather than by perceived stress or social factors.",
              "cite": "Woods et al., Seattle Midlife Women's Health Study · 2009",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2749064/"
            },
            {
              "claim": "Falling oestrogen shifts fat to the abdomen in perimenopause.",
              "detail": "The British Menopause Society reports that as oestrogen declines, visceral fat rises from around 5–8% of body weight to 10–15%, with most menopausal weight gain — roughly 1.5kg a year on average — accumulating around the abdomen and upper body. It recommends resistance training, adequate protein and moderated alcohol.",
              "cite": "British Menopause Society · Menopause: Nutrition and Weight Gain, 2023",
              "url": "https://thebms.org.uk/wp-content/uploads/2023/06/19-BMS-TfC-Menopause-Nutrition-and-Weight-Gain-JUNE2023-A.pdf"
            },
            {
              "claim": "Losing sleep can push cortisol up — and perimenopause disrupts sleep.",
              "detail": "A 2024 systematic review and meta-analysis found acute sleep deprivation raised blood cortisol levels, though the overall effect across all measures was small and mixed. As progesterone falls in perimenopause, disrupted sleep becomes common, feeding into the same cortisol pathway.",
              "cite": "Systematic review & meta-analysis · 2024",
              "url": "https://pubmed.ncbi.nlm.nih.gov/38777757/"
            },
            {
              "claim": "Severe calorie restriction is itself a stressor that raises cortisol.",
              "detail": "A controlled study found that low-calorie dieting increased cortisol output — meaning that eating far too little, sustained over time, can work against the very fat loss it is meant to achieve.",
              "cite": "Tomiyama et al., Psychosomatic Medicine · 2010",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20368473/"
            },
            {
              "claim": "Resistance training is the most evidence-backed way to protect muscle through menopause.",
              "detail": "A 2023 systematic review and meta-analysis of 27 randomised controlled trials found exercise — resistance training in particular — was the most effective non-pharmacological approach for preserving muscle mass and strength across the menopausal transition, without the cortisol load of excessive cardio.",
              "cite": "BMC Women's Health · Systematic review & meta-analysis, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, women's health writer living with type 1 diabetes",
          "text": "Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women's health, perimenopause and long-term wellbeing at lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Is “cortisol belly” real?",
          "a": "Partly. “Cortisol belly” isn't a medical diagnosis, and everyday stress doesn't make your cortisol clinically high. But the underlying link is real: when cortisol is elevated over long periods it does tend to drive fat to the visceral store deep in the abdomen, because that fat carries far more cortisol receptors than fat under the skin. In perimenopause, falling oestrogen and rising cortisol push in the same direction, so the middle is exactly where fat tends to settle."
        },
        {
          "q": "How do I get rid of cortisol belly in perimenopause?",
          "a": "By lowering the load on a stressed system rather than attacking it. That means protecting sleep, genuinely managing stress instead of pushing through it, strength training two to three times a week, and enough protein to hold on to muscle. Paradoxically, crash dieting and relentless cardio can make it worse, because both raise cortisol themselves. For some women HRT helps with fat redistribution — a conversation worth having with a doctor who understands hormonal health."
        },
        {
          "q": "Do cortisol supplements or “cortisol cocktails” work?",
          "a": "There's no good evidence that cortisol supplements, “adrenal detoxes” or viral “cortisol cocktails” lower cortisol or shift abdominal fat — many are simply sugar and salt with clever marketing. Cortisol is an essential hormone, not a toxin to flush. If you genuinely suspect abnormally high cortisol, that's a matter for a GP and a proper test, not a supplement."
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза",
      "title": "Кортизоловий живіт при перименопаузі: що насправді правда",
      "excerpt": "«Кортизоловий живіт» — скрізь і переважно неправильно зрозумілий. Що справді правда про кортизол, стрес і жир на животі при перименопаузі.",
      "meta": "15 липня 2026 · 8 хв читання",
      "lead": "«Кортизоловий живіт» зараз скрізь у соцмережах — його звинувачують у вазі, яка не зрушується, і пропонують добавку чи «кортизоловий коктейль», щоб це виправити. Ось що справді правда, що ні, і що насправді змінюється при перименопаузі.",
      "seoTitle": "Кортизоловий живіт при перименопаузі: що правда",
      "metaDesc": "«Кортизоловий живіт» — скрізь і переважно неправильно зрозумілий. Що насправді правда про кортизол, стрес і жир на животі при перименопаузі — і що справді допомагає.",
      "blocks": [
        {
          "t": "p",
          "text": "Через кілька років перименопаузи в мене з’явився жир на животі, якого я ніколи не мала — ні після пологів, ні в будь-який інший момент життя — і ніщо з того, що я робила, його не зрушувало. Тож коли я вперше побачила, як люди в мережі говорять про «кортизоловий живіт», це влучило. Нарешті назва для цього і, схоже, причина: гормони стресу. Облегшення тривало рівно до того моменту, як наступний допис намагався продати мені добавку, щоб «вимити» мій кортизол."
        },
        {
          "t": "p",
          "text": "Правда лежить десь посередині, і варто бути чесними щодо обох її половин. Кортизол і те, де тіло зберігає жир, справді пов’язані. Але «кортизоловий живіт» у тому вигляді, як його зазвичай продають — єдиний лиходій, якого можна подолати порошком — це не те, як це працює, а при перименопаузі картина ще багатошаровіша."
        },
        {
          "t": "h",
          "text": "Спершу — чим «кортизоловий живіт» не є"
        },
        {
          "t": "p",
          "text": "«Кортизоловий живіт» — це не медичний діагноз. Ви не знайдете його в записах лікаря, бо це не стан — це популярна назва для жиру на животі, який хтось вирішив приписати стресу. Сам кортизол не є токсином чи лиходієм; це життєво важливий гормон, який підіймає вас з ліжка вранці, допомагає керувати запаленням і регулювати цукор у крові. Його не треба «вимивати», і ви не можете детоксувати його напоєм."
        },
        {
          "t": "p",
          "text": "Існує реальний стан справді стійко високого кортизолу — синдром Кушинга — і він справді спричиняє накопичення жиру навколо живота, верхньої частини спини та обличчя. Але він рідкісний, зазвичай спричинений тривалим прийомом стероїдів або невеликим утворенням на залозі, і — головне — діагностується [аналізом кортизолу в крові, сечі або слині](https://www.nhs.uk/conditions/cushings-syndrome/), а не поглядом на талію. Повсякденний стрес — це не синдром Кушинга, і відчуття виснаженості не означає, що ваш кортизол клінічно високий. Якщо ви справді підозрюєте це, це розмова з лікарем і аналіз, а не добавка."
        },
        {
          "t": "h",
          "text": "Що правда: кортизол справді надає перевагу вашій талії"
        },
        {
          "t": "p",
          "text": "Ось половина, яку варто сприймати серйозно. Коли кортизол справді стимулює накопичення жиру, він діє переважно на жир глибоко всередині живота — вісцеральний жир навколо органів — а не на м’який підшкірний жир. Це не маркетингове твердження, а механізм. Вісцеральний жир має [у два–чотири рази вищу щільність рецепторів кортизолу](https://pmc.ncbi.nlm.nih.gov/articles/PMC3959161/), ніж підшкірний, і виробляє більше ферменту (11β-HSD1), який реактивує кортизол місцево всередині тканини. Тож коли кортизол підвищений тривалий час, живіт — саме те місце, де він схильний осідати."
        },
        {
          "t": "p",
          "text": "Є й вражаюче дослідження, яке показує, що зв’язок працює в обидва боки. У дослідженні жінок у пременопаузі ті, хто [мав більше жиру навколо талії, виділяли більше кортизолу під час стресу](https://pubmed.ncbi.nlm.nih.gov/11020091/) — і продовжували виділяти його навіть коли завдання ставало знайомим, а не адаптувалися, як інші жінки. Стрес і центральний жир живлять одне одного. Тож інтуїція за «кортизоловим животом» не божевільна. Божевільна частина — це порошок, що начебто все виправляє."
        },
        {
          "t": "h",
          "text": "Чому перименопауза змінює картину"
        },
        {
          "t": "p",
          "text": "Ось де це стає специфічним саме для нас і де проста історія про «гормон стресу» перестає бути достатньою. У перименопаузі водночас відбуваються дві речі, і вони посилюють одна одну."
        },
        {
          "t": "p",
          "text": "Перше — це естроген. Десятиліттями він спрямовує жир до стегон і сідниць; коли він знижується, цей сигнал слабшає, і жир натомість мігрує всередину, до живота. [Британське товариство менопаузи](https://thebms.org.uk/wp-content/uploads/2023/06/19-BMS-TfC-Menopause-Nutrition-and-Weight-Gain-JUNE2023-A.pdf) наводить цифри: вісцеральний жир зростає з приблизно 5–8% ваги тіла до переходу до 10–15% після нього, а більша частина ваги, яку жінки набирають у ці роки — у середньому близько 1,5 кг на рік — осідає навколо талії. Це відбувається частково незалежно від стресу. Більше про це я писала в [п’ятьох міфах про перименопаузу та вагу](/ua/blog/perimenopause-weight-myths/)."
        },
        {
          "t": "p",
          "text": "Друге — це те, що сам кортизол, схоже, зростає протягом менопаузального переходу. У Seattle Midlife Women's Health Study [нічний кортизол зростав протягом переходу й досягав піку на його пізній стадії](https://pmc.ncbi.nlm.nih.gov/articles/PMC2749064/) — і, цікаво, це найкраще прогнозувалося гормональними зрушеннями менопаузи, а не тим, наскільки стресованими почувалися жінки. Інакше кажучи, частина зростання кортизолу в ці роки зумовлена вашими гормонами, що змінюються, а не лише списком ваших справ."
        },
        {
          "t": "p",
          "text": "Сон накладається на обидва. Прогестерон, який також падає в перименопаузі, допомагає спати; коли він знижується, перервані ночі стають звичними — а втрата сну [може підштовхувати кортизол угору](https://pubmed.ncbi.nlm.nih.gov/38777757/), а це саме той напрям, якого ви не хочете. Це стає циклом: гірший сон, вищий кортизол, більше центрального жиру і тіло, яке дедалі менше схоже на те, яке ви знали."
        },
        {
          "t": "h",
          "text": "Пастка, у яку я потрапила"
        },
        {
          "t": "p",
          "text": "Знаючи все це, ось помилка, яку я все одно зробила і від якої найбільше хочу застерегти інших жінок. Коли ніщо не працювало, я зробила те, чого мене завжди вчили: їла менше й рухалася більше. Набагато менше й набагато більше."
        },
        {
          "t": "p",
          "text": "Проблема в тому, що обидва ці підходи, доведені до крайнощів, самі по собі є фізіологічними стресорами. Тривале недоїдання [підвищує кортизол](https://pubmed.ncbi.nlm.nih.gov/20368473/) — одне дослідження виявило, що низькокалорійна дієта вимірно його підвищувала. Важкі вправи без належного відновлення роблять те саме. Тож от я, додаючи ще два джерела кортизолу до системи, де кортизол уже був частиною проблеми, дивувалася, чому жир на животі ставав гіршим, а не кращим. Я не зазнавала поразки в дисципліні. Я, сама того не знаючи, підливала бензин у той самий вогонь, який намагалася загасити."
        },
        {
          "t": "h",
          "text": "Що справді допомагає (і що пропустити)"
        },
        {
          "t": "p",
          "text": "Справді корисна новина в тому, що те, що допомагає, — неефектне, переважно безкоштовне й не продається в баночці. Ніщо з цього не «цілиться» у кортизол так, як обіцяють добавки — вони знижують навантаження на стресовану систему, щоб тіло перестало поводитися так, ніби йому щось загрожує."
        },
        {
          "t": "p",
          "text": "Захищайте свій сон так, ніби це медичне втручання, бо функціонально це так і є. Керуйте стресом, а не продавлюйтеся крізь нього — в одному дослідженні [жінки, які найбільше знизили стрес і кортизол, також найбільше втратили жиру на животі](https://pmc.ncbi.nlm.nih.gov/articles/PMC3184496/), хоча сама програма не була чарівною паличкою. Рухайтеся так, щоб це будувало, а не виснажувало: [силові тренування — найбільш обґрунтоване доказами](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/), що ви можете зробити, щоб зберегти м’язи під час менопаузи, і вони не підвищують кортизол так, як безкінечне кардіо. Їжте [достатньо білка](/ua/blog/protein-for-women-over-40/), щоб захистити ці м’язи. І [NHS](https://www.nhs.uk/conditions/menopause-and-perimenopause/things-you-can-do/), і Британське товариство менопаузи сходяться в одному: силові вправи, білок, гідний сон, помірність у алкоголі."
        },
        {
          "t": "p",
          "text": "А добавки, «кортизолові коктейлі», адреналові детокси? Пропустіть. Немає вагомих доказів, що вони знижують кортизол або зрушують жир на животі, а деякі — це лише цукор і сіль із гарним маркетингом. Якщо ваші симптоми суттєві, варто поговорити з лікарем, який розуміється на гормональному здоров’ї — про те, чи є для вас роль у ЗГТ, оскільки відновлення естрогену може допомогти з перерозподілом жиру. Це рішення для вас і вашого лікаря, а не порада від мене, і вже точно не те, що можна замінити порошком."
        },
        {
          "t": "p",
          "text": "«Кортизоловий живіт» має рацію в одному: ваше тіло в перименопаузі не поводиться погано через лінощі, і старі правила справді перестали діяти. Але воно глибоко помиляється, коли припускає, що ви можете купити собі вихід із цього. Справжні важелі тихіші — і, на відміну від добавок, вони справді працюють."
        },
        {
          "t": "h",
          "text": "Що каже дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Справді високий кортизол — це рідкісний, вимірний медичний стан, а не те саме, що повсякденний стрес.",
              "detail": "Синдром Кушинга, стан стійко надлишкового кортизолу, справді спричиняє накопичення жиру навколо живота, верхньої частини спини та обличчя — але він рідкісний, зазвичай спричинений тривалим прийомом стероїдів або невеликим утворенням на залозі, і діагностується аналізом кортизолу в крові, сечі або слині, а не за зовнішнім виглядом.",
              "cite": "NHS · Синдром Кушинга",
              "url": "https://www.nhs.uk/conditions/cushings-syndrome/"
            },
            {
              "claim": "Коли кортизол стимулює накопичення жиру, він діє переважно на вісцеральний жир живота.",
              "detail": "Вісцеральний (внутрішньочеревний) жир має у два–чотири рази вищу щільність глюкокортикоїдних рецепторів, ніж підшкірний, і вищу місцеву активність 11β-HSD1 — ферменту, який відновлює активний кортизол усередині тканини. Це біологічна причина, чому хронічно підвищений кортизол схильний накопичуватися центрально, а не під шкірою.",
              "cite": "Molecular & Cellular Endocrinology · Огляд, 2014",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3959161/"
            },
            {
              "claim": "Стрес і центральний жир посилюють одне одного.",
              "detail": "У дослідженні 59 жінок у пременопаузі ті, хто мав більше жиру навколо талії, виділяли суттєво більше кортизолу у відповідь на стрес — і, на відміну від інших, продовжували надмірно виділяти його навіть коли завдання ставало знайомим, показуючи меншу адаптацію до повторного стресу.",
              "cite": "Epel та ін., Psychosomatic Medicine · 2000",
              "url": "https://pubmed.ncbi.nlm.nih.gov/11020091/"
            },
            {
              "claim": "Кортизол зростає протягом менопаузального переходу — значною мірою через гормональні зміни.",
              "detail": "Seattle Midlife Women's Health Study виявило, що нічний кортизол у сечі зростав протягом менопаузального переходу й досягав піку на його пізній стадії, і що це найкраще прогнозувалося змінами репродуктивних гормонів (естроген, тестостерон, ФСГ), а не суб’єктивним стресом чи соціальними чинниками.",
              "cite": "Woods та ін., Seattle Midlife Women's Health Study · 2009",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2749064/"
            },
            {
              "claim": "Падіння естрогену зміщує жир до живота в перименопаузі.",
              "detail": "Британське товариство менопаузи повідомляє, що зі зниженням естрогену вісцеральний жир зростає з приблизно 5–8% ваги тіла до 10–15%, при цьому більша частина менопаузального набору ваги — у середньому близько 1,5 кг на рік — накопичується навколо живота та верхньої частини тіла. Воно рекомендує силові тренування, достатньо білка та помірність у алкоголі.",
              "cite": "British Menopause Society · Menopause: Nutrition and Weight Gain, 2023",
              "url": "https://thebms.org.uk/wp-content/uploads/2023/06/19-BMS-TfC-Menopause-Nutrition-and-Weight-Gain-JUNE2023-A.pdf"
            },
            {
              "claim": "Втрата сну може підвищувати кортизол — а перименопауза порушує сон.",
              "detail": "Систематичний огляд і метааналіз 2024 року виявив, що гостре недосипання підвищувало рівень кортизолу в крові, хоча загальний ефект за всіма показниками був невеликим і неоднозначним. Оскільки прогестерон падає в перименопаузі, порушення сну стає звичним, живлячи той самий кортизоловий шлях.",
              "cite": "Систематичний огляд і метааналіз · 2024",
              "url": "https://pubmed.ncbi.nlm.nih.gov/38777757/"
            },
            {
              "claim": "Жорстке обмеження калорій саме по собі є стресором, що підвищує кортизол.",
              "detail": "Контрольоване дослідження виявило, що низькокалорійна дієта підвищувала вихід кортизолу — тобто надто мале харчування, продовжене в часі, може працювати проти тієї самої втрати жиру, заради якої його запускають.",
              "cite": "Tomiyama та ін., Psychosomatic Medicine · 2010",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20368473/"
            },
            {
              "claim": "Силові тренування — найобґрунтованіший доказами спосіб зберегти м’язи під час менопаузи.",
              "detail": "Систематичний огляд і метааналіз 2023 року з 27 рандомізованих контрольованих досліджень виявив, що вправи — зокрема силові — були найефективнішим нефармакологічним підходом до збереження м’язової маси та сили під час менопаузального переходу, без кортизолового навантаження надмірного кардіо.",
              "cite": "BMC Women's Health · Систематичний огляд і метааналіз, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, авторка про жіноче здоров’я, яка живе з діабетом 1 типу",
          "text": "Lena Filatova живе з діабетом 1 типу вже 23 роки. Вона пише про жіноче здоров’я, перименопаузу та довготривале благополуччя на lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Чи реальний «кортизоловий живіт»?",
          "a": "Частково. «Кортизоловий живіт» — це не медичний діагноз, і повсякденний стрес не робить ваш кортизол клінічно високим. Але глибинний зв’язок реальний: коли кортизол підвищений тривалий час, він справді схильний спрямовувати жир до вісцерального депо глибоко в животі, бо цей жир має набагато більше рецепторів кортизолу, ніж підшкірний. У перименопаузі падіння естрогену й зростання кортизолу діють в одному напрямі, тож талія — саме те місце, де жир схильний осідати."
        },
        {
          "q": "Як позбутися кортизолового живота в перименопаузі?",
          "a": "Знижуючи навантаження на стресовану систему, а не атакуючи її. Це означає захищати сон, справді керувати стресом замість продавлювання крізь нього, силові тренування два–три рази на тиждень і достатньо білка, щоб зберегти м’язи. Парадоксально, голодні дієти й безкінечне кардіо можуть погіршити ситуацію, бо обидва самі підвищують кортизол. Деяким жінкам ЗГТ допомагає з перерозподілом жиру — це розмова, яку варто мати з лікарем, який розуміється на гормональному здоров’ї."
        },
        {
          "q": "Чи працюють кортизолові добавки чи «кортизолові коктейлі»?",
          "a": "Немає вагомих доказів, що кортизолові добавки, «адреналові детокси» або вірусні «кортизолові коктейлі» знижують кортизол або зрушують жир на животі — багато з них просто цукор і сіль із хитрим маркетингом. Кортизол — це життєво важливий гормон, а не токсин, який треба вимивати. Якщо ви справді підозрюєте аномально високий кортизол, це питання до лікаря й належного аналізу, а не добавки."
        }
      ]
    }
  },
  {
    "slug": "anxiety-brain-fog-top-menopause-symptom",
    "date": "2026-07-17",
    "image": "/images/anxiety-brain-fog-top-menopause-symptom.jpg",
    "cats": [
      "perimenopause"
    ],
    "en": {
      "cat": "Perimenopause",
      "title": "Anxiety and brain fog, not hot flashes, are now women's top menopause complaint",
      "excerpt": "Bonafide Health's sixth annual survey of over 2,000 women finds anxiety, brain fog and declining motivation have overtaken hot flashes as the leading menopause symptom — and nearly half say it's hit their income.",
      "meta": "17 July 2026 · 3 min read",
      "lead": "For years, menopause conversations have centred on hot flashes. New survey data suggests that's no longer the symptom women say is hardest to live with.",
      "blocks": [
        {
          "t": "p",
          "text": "Bonafide Health's sixth annual State of Menopause survey, covering more than 2,000 US women aged 40–64, found that anxiety, brain fog and declining motivation now top the list of menopause complaints — overtaking hot flashes for the first time since the survey began."
        },
        {
          "t": "p",
          "text": "The shift matters because it's rarely what women expect, or what they're told to expect. Hot flashes are visible and easy to name; feeling anxious, scattered or unmotivated is easier to write off as stress, burnout or \"just a bad patch\" — especially in your 40s, when work and family pressures are already high."
        },
        {
          "t": "p",
          "text": "The survey also points to a real financial cost. 56% of respondents said declining motivation was the symptom most affecting their work, and 48% said their symptoms had negatively impacted their income — with 23% reporting losses of $10,000 or more."
        },
        {
          "t": "p",
          "text": "None of this means every low mood or foggy week is menopausal. But if you're 40 or older and notice a cluster of anxiety, mental fatigue and flagging drive that doesn't match your usual patterns, it's worth raising perimenopause specifically with your doctor — rather than defaulting to a stress or mental-health diagnosis alone."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Anxiety, brain fog and declining motivation have overtaken hot flashes as the top menopause symptom.",
              "detail": "Bonafide Health's sixth annual State of Menopause survey of over 2,000 US women aged 40–64 found mental and cognitive symptoms now rank above hot flashes for the first time. 56% said declining motivation most affected their work performance; 48% said menopause symptoms had negatively impacted their income, and 23% reported losing $10,000 or more as a result.",
              "cite": "Bonafide Health · Sixth Annual State of Menopause Survey, 2026",
              "url": "https://www.globenewswire.com/news-release/2026/07/15/3327741/0/en/bonafide-health-releases-sixth-annual-state-of-menopause-results.html"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Is anxiety really a menopause symptom, or is it just stress?",
          "a": "Both can be true at once, which is what makes it hard to spot. Hormonal shifts in perimenopause directly affect mood-regulating brain chemistry, and a 2026 survey of over 2,000 women found anxiety and brain fog now rank as the top menopause complaint, ahead of hot flashes. If new anxiety or fog appears alongside other perimenopause signs — irregular cycles, sleep changes, mood swings — it's worth mentioning to your doctor as a possible hormonal factor, not only a stress issue."
        },
        {
          "q": "Why don't more women realise brain fog can be a menopause symptom?",
          "a": "Because public awareness and clinical guidance have historically centred on hot flashes as the defining symptom. Newer, larger surveys are showing that cognitive and mood symptoms are actually more common complaints for many women, but that message hasn't caught up with general expectations yet — which is part of why so many women attribute these changes to burnout instead."
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза",
      "title": "Тривожність і туман у голові, а не припливи — тепер головна скарга жінок у менопаузі",
      "excerpt": "Шосте щорічне опитування Bonafide Health, у якому взяли участь понад 2000 жінок, показало: тривожність, туман у голові та зниження мотивації обійшли припливи як головний симптом менопаузи — і майже половина жінок каже, що це вдарило по їхньому доходу.",
      "meta": "17 липня 2026 · 3 хв читання",
      "lead": "Роками розмови про менопаузу оберталися навколо припливів. Нові дані опитування свідчать, що це вже не той симптом, з яким жінкам найважче жити.",
      "blocks": [
        {
          "t": "p",
          "text": "Шосте щорічне опитування Bonafide Health про стан менопаузи, у якому взяли участь понад 2000 жінок у США віком 40–64 роки, показало: тривожність, туман у голові та зниження мотивації тепер очолюють список скарг на менопаузу — уперше обійшовши припливи відтоді, як опитування почали проводити."
        },
        {
          "t": "p",
          "text": "Ця зміна важлива, бо рідко відповідає тому, чого жінки очікують або що їм казали очікувати. Припливи помітні й легко назвати; тривожність, розсіяність чи брак мотивації легше списати на стрес, вигорання чи «просто складний період» — особливо у 40+, коли тиск роботи й родини й так високий."
        },
        {
          "t": "p",
          "text": "Опитування також вказує на реальну фінансову ціну. 56% респонденток заявили, що зниження мотивації найбільше впливало на їхню роботу, а 48% сказали, що симптоми негативно позначилися на їхньому доході — 23% повідомили про втрату 10 000 доларів або більше."
        },
        {
          "t": "p",
          "text": "Це не означає, що будь-який поганий настрій чи туманний тиждень — обов’язково менопаузальний. Але якщо вам 40 або більше і ви помічаєте поєднання тривожності, розумової втоми та падіння драйву, яке не схоже на ваш звичний стан, варто окремо обговорити з лікарем саме перименопаузу — а не одразу зупинятися лише на діагнозі стресу чи ментального здоров’я."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Тривожність, туман у голові та зниження мотивації обійшли припливи як головний симптом менопаузи.",
              "detail": "Шосте щорічне опитування Bonafide Health про стан менопаузи серед понад 2000 жінок у США віком 40–64 роки показало, що ментальні та когнітивні симптоми вперше випередили припливи. 56% сказали, що зниження мотивації найбільше впливало на їхню роботу; 48% заявили, що симптоми менопаузи негативно позначилися на доході, а 23% повідомили про втрату 10 000 доларів або більше.",
              "cite": "Bonafide Health · Шосте щорічне опитування про стан менопаузи, 2026",
              "url": "https://www.globenewswire.com/news-release/2026/07/15/3327741/0/en/bonafide-health-releases-sixth-annual-state-of-menopause-results.html"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи справді тривожність — це симптом менопаузи, чи це просто стрес?",
          "a": "Може бути правдою і те, і те одночасно — саме тому це важко розпізнати. Гормональні зміни в перименопаузі напряму впливають на мозкову хімію, що регулює настрій, і опитування 2026 року серед понад 2000 жінок показало, що тривожність і туман у голові тепер головна скарга на менопаузу, випереджаючи припливи. Якщо нова тривожність чи туман з’являються поряд з іншими ознаками перименопаузи — нерегулярний цикл, зміни сну, перепади настрою — варто згадати про це лікарю як про можливий гормональний чинник, а не лише проблему стресу."
        },
        {
          "q": "Чому не всі жінки знають, що туман у голові може бути симптомом менопаузи?",
          "a": "Тому що суспільна обізнаність і клінічні рекомендації історично зосереджувалися на припливах як визначальному симптомі. Нові, масштабніші опитування показують, що когнітивні симптоми та зміни настрою насправді є частішою скаргою для багатьох жінок, але ця інформація ще не наздогнала загальні очікування — саме тому багато жінок пояснюють ці зміни вигоранням."
        }
      ]
    }
  },
  {
    "slug": "type2-diabetes-women-under-40-sex-bias",
    "date": "2026-07-17",
    "image": "/images/type2-diabetes-women-under-40-sex-bias.jpg",
    "cats": [
      "diabetes"
    ],
    "en": {
      "cat": "Diabetes",
      "title": "Type 2 diabetes is rising twice as fast in women under 40 — and care hasn't caught up",
      "excerpt": "A major 2026 Medscape clinical review argues diabetes care still treats women as if hormones don't matter, even as type 2 diabetes rises twice as fast in women under 40 than in men.",
      "meta": "17 July 2026 · 3 min read",
      "lead": "Diabetes guidelines are largely written as if one protocol fits everyone. A major 2026 clinical review argues that's a problem — and that it's costing younger women in particular.",
      "blocks": [
        {
          "t": "p",
          "text": "A 2026 Medscape clinical review makes a case that's overdue: diabetes is not a gender-neutral disease, yet diabetes care is still largely built as if it were. The review highlights that type 2 diabetes is now rising twice as fast in women under 40 compared with men in the same age group."
        },
        {
          "t": "p",
          "text": "Part of the gap is biological. Hormonal shifts across a woman's life — the menstrual cycle, pregnancy, perimenopause and menopause — measurably change insulin sensitivity and glucose metabolism. The review notes insulin requirements can shift by as much as 15% across the luteal phase of the cycle alone, yet most diabetes management protocols make no allowance for it."
        },
        {
          "t": "p",
          "text": "Part of the gap is also structural. Women remain underrepresented in the clinical trials that shape treatment guidelines, so sex-specific patterns in how glucose control behaves are often invisible in the data used to write those guidelines in the first place."
        },
        {
          "t": "p",
          "text": "If your blood sugar feels harder to predict at certain points in your cycle or life stage than standard advice suggests it should be, that's not necessarily you doing something wrong. It's a reasonable prompt to track your own patterns across the month and bring that data to your diabetes team, rather than assuming a one-size protocol should already account for it."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Type 2 diabetes is rising twice as fast in women under 40 than in men, and diabetes care underaccounts for hormonal sex differences.",
              "detail": "A 2026 Medscape clinical review reports that hormonal changes across a woman's life — including the menstrual cycle, pregnancy, perimenopause and menopause — significantly affect glucose metabolism and insulin needs, with insulin requirements shifting by up to 15% across the luteal phase alone. The review notes women remain underrepresented in the clinical trials underpinning diabetes guidelines, and that type 2 diabetes is now increasing twice as fast in women under 40 compared with men.",
              "cite": "Medscape · Clinical Review, 13 July 2026",
              "url": "https://www.medscape.com/viewarticle/women-and-diabetes-care-keeping-pace-biology-2026a1000nip"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Why is type 2 diabetes rising faster in younger women?",
          "a": "A 2026 Medscape clinical review points to a combination of factors: hormonal changes across a woman's life that affect insulin sensitivity, and diabetes care protocols that were largely developed from trials where women were underrepresented. The result is that sex-specific patterns in glucose control are often not built into standard guidance, which may leave younger women's diabetes risk and management less well addressed."
        },
        {
          "q": "Can my insulin needs really change across my menstrual cycle?",
          "a": "Yes — the same 2026 review notes insulin requirements can shift by up to 15% during the luteal phase of the cycle. If you notice your glucose control varying in a pattern that tracks with your cycle, it's worth logging it and discussing with your diabetes team, since standard protocols don't automatically factor this in."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "Діабет 2 типу зростає вдвічі швидше серед жінок до 40 — а система догляду цього ще не наздогнала",
      "excerpt": "Великий клінічний огляд Medscape 2026 року стверджує: система догляду за діабетом досі влаштована так, ніби гормони не мають значення, попри те що діабет 2 типу зростає вдвічі швидше серед жінок до 40, ніж серед чоловіків.",
      "meta": "17 липня 2026 · 3 хв читання",
      "lead": "Рекомендації щодо діабету здебільшого написані так, ніби один протокол підходить усім. Великий клінічний огляд 2026 року стверджує, що це проблема — і що вона особливо дорого коштує молодшим жінкам.",
      "blocks": [
        {
          "t": "p",
          "text": "Клінічний огляд Medscape 2026 року порушує давно назрілу тему: діабет не є гендерно нейтральною хворобою, але система догляду за діабетом досі здебільшого влаштована так, ніби це так. Огляд підкреслює, що діабет 2 типу тепер зростає вдвічі швидше серед жінок до 40 років порівняно з чоловіками того ж віку."
        },
        {
          "t": "p",
          "text": "Частина розриву — біологічна. Гормональні зміни протягом життя жінки — менструальний цикл, вагітність, перименопауза та менопауза — вимірно змінюють чутливість до інсуліну та метаболізм глюкози. Огляд зазначає, що потреба в інсуліні може змінюватися до 15% лише протягом лютеїнової фази циклу, але більшість протоколів лікування діабету цього не враховують."
        },
        {
          "t": "p",
          "text": "Частина розриву — структурна. Жінки досі недостатньо представлені в клінічних дослідженнях, які формують рекомендації з лікування, тож специфічні для статі патерни контролю глюкози часто залишаються невидимими в даних, на основі яких ці рекомендації взагалі писалися."
        },
        {
          "t": "p",
          "text": "Якщо ваш рівень цукру в певні моменти циклу чи етапу життя важче передбачити, ніж це передбачає стандартна порада, це не обов’язково означає, що ви робите щось не так. Це достатня підстава відстежувати власні патерни протягом місяця й приносити ці дані своїй команді з діабету, а не припускати, що універсальний протокол уже це враховує."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Діабет 2 типу зростає вдвічі швидше серед жінок до 40, ніж серед чоловіків, а система догляду за діабетом недостатньо враховує гормональні відмінності між статями.",
              "detail": "Клінічний огляд Medscape 2026 року повідомляє, що гормональні зміни протягом життя жінки — зокрема менструальний цикл, вагітність, перименопауза та менопауза — суттєво впливають на метаболізм глюкози й потребу в інсуліні, причому потреба в інсуліні змінюється до 15% лише протягом лютеїнової фази. Огляд зазначає, що жінки досі недостатньо представлені в клінічних дослідженнях, на яких ґрунтуються рекомендації з діабету, і що діабет 2 типу тепер зростає вдвічі швидше серед жінок до 40 порівняно з чоловіками.",
              "cite": "Medscape · Клінічний огляд, 13 липня 2026",
              "url": "https://www.medscape.com/viewarticle/women-and-diabetes-care-keeping-pace-biology-2026a1000nip"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чому діабет 2 типу зростає швидше серед молодших жінок?",
          "a": "Клінічний огляд Medscape 2026 року вказує на поєднання чинників: гормональні зміни протягом життя жінки, що впливають на чутливість до інсуліну, і протоколи лікування діабету, здебільшого розроблені на основі досліджень, де жінки були недостатньо представлені. У результаті специфічні для статі патерни контролю глюкози часто не закладені у стандартні рекомендації, що може означати гірше врахування ризику діабету та його ведення в молодших жінок."
        },
        {
          "q": "Чи справді потреба в інсуліні може змінюватися протягом менструального циклу?",
          "a": "Так — той самий огляд 2026 року зазначає, що потреба в інсуліні може змінюватися до 15% протягом лютеїнової фази циклу. Якщо ви помічаєте, що контроль глюкози змінюється за патерном, пов’язаним із циклом, варто це фіксувати й обговорювати з командою з діабету, адже стандартні протоколи автоматично цього не враховують."
        }
      ]
    }
  },
  {
    "slug": "higher-protein-postmenopausal-bone-muscle",
    "date": "2026-07-17",
    "image": "/images/higher-protein-postmenopausal-bone-muscle.jpg",
    "cats": [
      "nutrition"
    ],
    "en": {
      "cat": "Nutrition",
      "title": "Eating more protein than the official guideline supports better muscle and bone after menopause",
      "excerpt": "A Women's Health Initiative analysis of 3,789 postmenopausal women finds those hitting higher protein targets than the standard RDA had better body composition and bone outcomes over 3 years.",
      "meta": "17 July 2026 · 3 min read",
      "lead": "The official protein guideline — 0.8g per kilogram of body weight a day — was set decades ago from studies that barely included older women. A new analysis suggests it may be too low for the postmenopausal years.",
      "blocks": [
        {
          "t": "p",
          "text": "Researchers used data from 3,789 postmenopausal women aged 50–79 in the Women's Health Initiative to model what would happen over 3 years at different protein intakes: the current RDA of 0.8g/kg/day, and higher targets of 1.0, 1.2 and 1.5g/kg/day. Body composition was tracked with DXA scans, the same imaging used to measure bone density and lean versus fat mass."
        },
        {
          "t": "p",
          "text": "Women who sustained protein intake above the RDA — particularly at or above 1.2g/kg/day — showed more favourable changes in lean mass and bone measures than those who stuck close to the minimum guideline. For a 65kg woman, that's roughly 78g of protein a day rather than 52g, spread across meals rather than loaded into one."
        },
        {
          "t": "p",
          "text": "This matters because postmenopausal women lose muscle and bone density faster once oestrogen drops, and both are strongly linked to frailty, fracture risk and metabolic health later in life. The RDA was never designed as a target for healthy ageing — it's the minimum to avoid deficiency, calculated mostly from younger adults."
        },
        {
          "t": "p",
          "text": "This was an observational emulated-trial analysis, not a randomised controlled trial, so it shows association rather than definitive proof of cause. But it adds to a growing body of evidence that higher protein — alongside resistance exercise — is one of the more actionable levers for preserving muscle and bone through the menopause transition."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Postmenopausal women sustaining protein intake above 1.2g/kg/day showed more favourable 3-year body composition and bone changes than those near the 0.8g/kg/day RDA.",
              "detail": "An emulated target-trial analysis of 3,789 postmenopausal women aged 50–79 in the Women's Health Initiative study used DXA-measured body composition to compare hypothetical adherence to four protein intake levels (≥0.8, ≥1.0, ≥1.2 and ≥1.5g/kg/day) over 3 years. Higher sustained intake was associated with more favourable lean mass and bone outcomes than intake at the current RDA.",
              "cite": "International Journal of Obesity (Nature) · Women's Health Initiative analysis, 2026",
              "url": "https://www.nature.com/articles/s41366-025-01978-0"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "How much protein should I actually eat after menopause?",
          "a": "The official RDA of 0.8g per kg of body weight a day is a minimum, not an optimum. A 2026 Women's Health Initiative analysis found postmenopausal women sustaining around 1.2g/kg/day or more had better bone and lean-mass outcomes over 3 years. For a 65kg woman, that's roughly 78g of protein daily, spread across meals."
        },
        {
          "q": "Is it too late to start eating more protein if I'm already postmenopausal?",
          "a": "No — the analysis followed women already postmenopausal, aged 50–79, and still found benefit from higher intake over just 3 years. Combining higher protein with resistance exercise is the combination most consistently linked to preserving muscle and bone at this life stage."
        }
      ,
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Why protein matters more after 40",
              "url": "/blog/protein-for-women-over-40/",
              "desc": "How protein needs shift with age and hormones, and practical ways to hit your target."
            },
            {
              "name": "Carb quality and healthy ageing",
              "url": "/blog/carb-quality-healthy-aging/",
              "desc": "Why the type of carbohydrate matters as much as the amount as you get older."
            }
          ]
        }
      ]
    },
    "ua": {
      "cat": "Харчування",
      "title": "Білка більше за офіційну норму — краще для м'язів і кісток після менопаузи",
      "excerpt": "Аналіз даних Women's Health Initiative серед 3789 жінок у постменопаузі показує: ті, хто вживав більше білка, ніж стандартна норма, мали кращий склад тіла та стан кісток протягом 3 років.",
      "meta": "17 липня 2026 · 3 хв читання",
      "lead": "Офіційна норма білка — 0,8 г на кілограм ваги на день — була встановлена десятиліття тому за дослідженнями, де майже не було літніх жінок. Новий аналіз свідчить, що для періоду після менопаузи вона може бути занизькою.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідники використали дані 3789 жінок у постменопаузі віком 50–79 років з Women's Health Initiative, щоб змоделювати, що станеться за 3 роки при різному споживанні білка: чинній нормі 0,8 г/кг/день і вищих цілях — 1,0, 1,2 та 1,5 г/кг/день. Склад тіла відстежували за допомогою DXA-сканування — того ж методу візуалізації, яким вимірюють щільність кісток та співвідношення м'язової і жирової маси."
        },
        {
          "t": "p",
          "text": "У жінок, які підтримували споживання білка вище норми — особливо на рівні 1,2 г/кг/день і вище — спостерігалися сприятливіші зміни м'язової маси та показників кісток, ніж у тих, хто тримався мінімальної норми. Для жінки вагою 65 кг це приблизно 78 г білка на день замість 52 г, розподілених по прийомах їжі, а не з’їдених за один раз."
        },
        {
          "t": "p",
          "text": "Це важливо, бо жінки в постменопаузі втрачають м'язи та щільність кісток швидше після зниження естрогену, а обидва показники тісно пов’язані з крихкістю, ризиком переломів та метаболічним здоров’ям у майбутньому. Норма RDA ніколи не була розрахована як ціль для здорового старіння — це лише мінімум для уникнення дефіциту, здебільшого визначений за дослідженнями молодших дорослих."
        },
        {
          "t": "p",
          "text": "Це був спостережний аналіз за методом емульованого дослідження, а не рандомізоване контрольоване дослідження, тож він показує зв’язок, а не остаточний доказ причини. Але він додається до дедалі більшої кількості доказів того, що вищий білок разом із силовими тренуваннями — один із найбільш практичних важелів для збереження м'язів і кісток під час переходу через менопаузу."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "У жінок у постменопаузі, які підтримували споживання білка понад 1,2 г/кг/день, спостерігалися сприятливіші зміни складу тіла та кісток за 3 роки, ніж у тих, хто тримався норми 0,8 г/кг/день.",
              "detail": "Аналіз за методом емульованого дослідження серед 3789 жінок у постменопаузі віком 50–79 років з Women's Health Initiative використав DXA-виміряний склад тіла, щоб порівняти гіпотетичне дотримання чотирьох рівнів споживання білка (≥0,8, ≥1,0, ≥1,2 та ≥1,5 г/кг/день) протягом 3 років. Вище стале споживання пов’язувалося зі сприятливішими показниками м'язової маси та кісток порівняно зі споживанням на рівні чинної норми.",
              "cite": "International Journal of Obesity (Nature) · Аналіз Women's Health Initiative, 2026",
              "url": "https://www.nature.com/articles/s41366-025-01978-0"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Скільки білка насправді варто їсти після менопаузи?",
          "a": "Офіційна норма 0,8 г на кг ваги на день — це мінімум, а не оптимум. Аналіз Women's Health Initiative 2026 року показав, що жінки в постменопаузі, які підтримували приблизно 1,2 г/кг/день або більше, мали кращі показники кісток і м'язової маси протягом 3 років. Для жінки вагою 65 кг це приблизно 78 г білка на день, розподілених по прийомах їжі."
        },
        {
          "q": "Чи пізно починати їсти більше білка, якщо я вже в постменопаузі?",
          "a": "Ні — дослідження стежило за жінками, які вже були в постменопаузі, віком 50–79 років, і все одно виявило користь від вищого споживання лише за 3 роки. Поєднання більшого білка із силовими тренуваннями — комбінація, яка найпослідовніше пов’язана зі збереженням м'язів і кісток на цьому етапі життя."
        }
      ]
    }
  },
  {
    "slug": "hrt-restores-skin-collagen-2026-review",
    "date": "2026-07-17",
    "image": "/images/hrt-restores-skin-collagen-2026-review.jpg",
    "cats": [
      "skin",
      "perimenopause"
    ],
    "en": {
      "cat": "Skin & beauty",
      "title": "2026 review confirms HRT restores skin collagen, elasticity and hydration",
      "excerpt": "A 2026 review in the journal Life pulls together the evidence on menopause, oestrogen and skin — confirming HRT measurably improves collagen content, elasticity and hydration.",
      "meta": "17 July 2026 · 3 min read",
      "lead": "Skin is often left out of the menopause conversation entirely. A 2026 review makes the case that it shouldn't be — and that hormone therapy has real, measurable effects on it.",
      "blocks": [
        {
          "t": "p",
          "text": "Published in the journal Life, the review draws together research on how falling oestrogen changes skin after menopause: collagen content declines by around 2% a year, elasticity drops, and moisture retention weakens — together producing thinner, drier, more wrinkle-prone skin."
        },
        {
          "t": "p",
          "text": "Oestrogen isn't cosmetic background noise here — it directly drives collagen production and the skin's ability to hold water. The review confirms hormone replacement therapy measurably improves collagen content, elasticity, thickness and hydration when started, partially reversing changes that accelerate once oestrogen drops."
        },
        {
          "t": "p",
          "text": "The effect isn't limited to systemic HRT. The review also notes topical oestrogen and non-hormonal alternatives show promise for people who want localised skin benefit without systemic hormone therapy — useful for those who can't or don't want to take HRT for other reasons."
        },
        {
          "t": "p",
          "text": "None of this makes HRT a skincare product, and the decision to start it should rest on your full symptom picture and personal risk profile, not skin alone. But if skin changes are part of what's bothering you at perimenopause or menopause, it's a legitimate factor to raise with your doctor — not a vanity concern to set aside."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "HRT measurably improves skin collagen content, elasticity and hydration after menopause.",
              "detail": "A 2026 review in the journal Life synthesises evidence that oestrogen decline after menopause reduces skin collagen by roughly 2% per year alongside losses in elasticity and hydration, and that hormone replacement therapy partially restores collagen content, elasticity, thickness and hydration. Topical oestrogen and non-hormonal agents were also noted as showing potential for targeted skin benefit.",
              "cite": "Life (MDPI) · Review, 2026",
              "url": "https://www.mdpi.com/2075-1729/16/3/401"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Can HRT actually reverse skin ageing from menopause?",
          "a": "It can partially reverse some of it. A 2026 review found HRT measurably improves skin collagen content, elasticity, thickness and hydration compared with untreated menopause, where collagen declines by around 2% a year. It's not a full reversal or a substitute for skincare, but the effect on skin structure is real and measurable."
        },
        {
          "q": "Should I start HRT just for my skin?",
          "a": "No — skin benefit is a real effect of HRT but not a standalone reason to start it. The decision should weigh your full symptom picture (hot flushes, sleep, mood, bone health) and personal risk factors with your doctor. If skin changes are contributing to how you feel, it's fine to mention them as part of that wider conversation."
        }
      ,
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Why skin changes so fast at menopause — and what hormone therapy can and can't do",
              "url": "/blog/menopause-skin-oestrogen/",
              "desc": "Oestrogen affects far more than hot flushes — the full picture on HRT and skin changes."
            },
            {
              "name": "Do collagen products actually improve your skin?",
              "url": "/blog/collagen-and-skin/",
              "desc": "Declining oestrogen accelerates collagen loss. What the evidence says about supplementing."
            }
          ]
        }
      ]
    },
    "ua": {
      "cat": "Краса та шкіра",
      "title": "Огляд 2026 року підтверджує: ЗГТ відновлює колаген, еластичність і зволоженість шкіри",
      "excerpt": "Огляд 2026 року в журналі Life зібрав докази про менопаузу, естроген і шкіру — підтверджуючи, що ЗГТ вимірно покращує вміст колагену, еластичність і зволоженість.",
      "meta": "17 липня 2026 · 3 хв читання",
      "lead": "Шкіру часто повністю випускають з розмови про менопаузу. Огляд 2026 року доводить, що це неправильно — і що гормональна терапія має реальний, вимірний вплив на неї.",
      "blocks": [
        {
          "t": "p",
          "text": "Опублікований у журналі Life огляд зібрав дослідження того, як зниження естрогену змінює шкіру після менопаузи: вміст колагену знижується приблизно на 2% на рік, еластичність падає, а здатність утримувати вологу слабшає — разом це дає тоншу, сухішу шкіру, схильнішу до зморшок."
        },
        {
          "t": "p",
          "text": "Естроген тут — не косметичний фон: він напряму керує виробленням колагену та здатністю шкіри утримувати воду. Огляд підтверджує, що замісна гормональна терапія вимірно покращує вміст колагену, еластичність, товщину та зволоженість шкіри після початку прийому, частково повертаючи зміни, які прискорюються після зниження естрогену."
        },
        {
          "t": "p",
          "text": "Ефект не обмежується системною ЗГТ. Огляд також зазначає, що місцевий естроген і негормональні альтернативи показують перспективність для тих, хто хоче локальну користь для шкіри без системної гормональної терапії — це корисно для тих, хто не може або не хоче приймати ЗГТ з інших причин."
        },
        {
          "t": "p",
          "text": "Це не робить ЗГТ засобом для догляду за шкірою, і рішення почати її має спиратися на повну картину симптомів і особистий профіль ризику, а не лише на шкіру. Але якщо зміни шкіри — частина того, що турбує вас у перименопаузі чи менопаузі, це законний привід обговорити з лікарем, а не питання марнославства, яке варто відкласти."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "ЗГТ вимірно покращує вміст колагену, еластичність і зволоженість шкіри після менопаузи.",
              "detail": "Огляд 2026 року в журналі Life узагальнює докази того, що зниження естрогену після менопаузи зменшує колаген шкіри приблизно на 2% на рік поряд із втратою еластичності та зволоженості, а замісна гормональна терапія частково відновлює вміст колагену, еластичність, товщину та зволоженість. Місцевий естроген і негормональні засоби також зазначені як перспективні для локальної користі для шкіри.",
              "cite": "Life (MDPI) · Огляд, 2026",
              "url": "https://www.mdpi.com/2075-1729/16/3/401"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи може ЗГТ справді повернути старіння шкіри через менопаузу?",
          "a": "Частково — так. Огляд 2026 року показав, що ЗГТ вимірно покращує вміст колагену, еластичність, товщину та зволоженість шкіри порівняно з нелікованою менопаузою, коли колаген знижується приблизно на 2% на рік. Це не повне повернення й не заміна догляду за шкірою, але вплив на структуру шкіри реальний і вимірний."
        },
        {
          "q": "Чи варто починати ЗГТ лише заради шкіри?",
          "a": "Ні — користь для шкіри реальна, але не є самостійною причиною починати ЗГТ. Рішення має враховувати повну картину симптомів (припливи, сон, настрій, здоров'я кісток) та особисті фактори ризику разом із лікарем. Якщо зміни шкіри впливають на ваше самопочуття, цілком доречно згадати про них у цій ширшій розмові."
        }
      ]
    }
  },
  {
    "slug": "glp1-weight-loss-drugs-fat-not-muscle",
    "date": "2026-07-17",
    "image": "/images/glp1-weight-loss-drugs-fat-not-muscle.jpg",
    "cats": [
      "weight",
      "nutrition"
    ],
    "en": {
      "cat": "Weight loss",
      "title": "GLP-1 weight-loss drugs mainly burn fat, not muscle — and women lose more than men",
      "excerpt": "A 2026 meta-analysis of GLP-1 trials finds the large majority of weight lost on Ozempic-style drugs is fat rather than muscle, and that women lose proportionally more than men.",
      "meta": "17 July 2026 · 3 min read",
      "lead": "The loudest worry about Ozempic-style weight-loss drugs has been that people lose muscle along with fat. A 2026 meta-analysis suggests that fear is largely overstated — most of what comes off is fat.",
      "blocks": [
        {
          "t": "p",
          "text": "Researchers pooled body-composition data from randomised trials of GLP-1 receptor agonists — the drug class that includes semaglutide (Ozempic, Wegovy) and tirzepatide. Crucially, they looked at the fat-versus-lean-mass breakdown, not just the number on the scale, which is what actually tells you whether weight loss is coming from fat or from muscle."
        },
        {
          "t": "p",
          "text": "Across the pooled trials, the large majority of the weight lost came from fat mass, with lean (muscle) tissue making up a smaller share than the alarming early headlines had implied. Some lean mass is still lost — that happens with almost any weight loss, including plain dieting — but the fat-to-muscle ratio was more favourable than the \"these drugs waste your muscle\" narrative suggested."
        },
        {
          "t": "p",
          "text": "One finding stands out for women: on the same drugs, women lost proportionally more weight than men. That fits what's known about sex differences in body composition and how these medicines act, and it's a useful reminder that trial averages — often weighted toward male physiology — don't always map onto a woman's experience."
        },
        {
          "t": "p",
          "text": "None of this means muscle looks after itself. Losing weight quickly at any age thins muscle and bone unless you actively defend them — which is exactly where enough protein and resistance training earn their place, and it matters even more through perimenopause and beyond, when muscle and bone are already under pressure. The drugs tilt the fat-to-muscle ratio in your favour; they don't remove the need to train and eat well while the weight comes off."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Most of the weight lost on GLP-1 drugs is fat, not muscle, and women lose proportionally more than men.",
              "detail": "A 2026 meta-analysis in the International Journal of Obesity (Nature) pooled body-composition data from randomised trials of GLP-1 receptor agonists and found that the large majority of weight lost was fat mass rather than lean (muscle) tissue, with women losing proportionally more weight than men. Some lean mass loss still occurs, as it does with most weight loss, underscoring the role of adequate protein and resistance exercise in preserving muscle.",
              "cite": "International Journal of Obesity (Nature) · Meta-analysis, 2026",
              "url": "https://www.nature.com/articles/s41366-026-02088-1"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Do GLP-1 weight-loss drugs make you lose muscle?",
          "a": "Some muscle loss happens with almost any weight loss, including on these drugs — but a 2026 meta-analysis found the large majority of the weight lost on GLP-1 drugs is fat, not muscle, and the muscle share is smaller than earlier single studies suggested. You can protect muscle further by eating enough protein and doing resistance exercise while you lose weight."
        },
        {
          "q": "Why do women lose more weight than men on these drugs?",
          "a": "The 2026 meta-analysis found women lost proportionally more weight than men on the same GLP-1 medicines. Differences in body composition, hormones and how the drugs act between the sexes all play a part. It's also a reminder that averages from mixed or male-skewed trials don't always reflect what an individual woman will experience."
        }
      ]
    },
    "ua": {
      "cat": "Схуднення",
      "title": "Препарати для схуднення GLP-1 спалюють переважно жир, а не м'язи — і жінки втрачають більше, ніж чоловіки",
      "excerpt": "Метааналіз 2026 року показує: більшість ваги, втраченої на препаратах на кшталт Ozempic, — це жир, а не м'язи, і жінки втрачають пропорційно більше, ніж чоловіки.",
      "meta": "17 липня 2026 · 3 хв читання",
      "lead": "Найгучніше побоювання щодо препаратів для схуднення на кшталт Ozempic — що разом із жиром люди втрачають м'язи. Метааналіз 2026 року свідчить, що цей страх здебільшого перебільшений: більшість втраченого — це жир.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідники об'єднали дані про склад тіла з рандомізованих досліджень агоністів рецепторів GLP-1 — класу препаратів, до якого належать семаглутид (Ozempic, Wegovy) і тирзепатид. Важливо, що вони дивилися на співвідношення жирової та м'язової маси, а не лише на цифру на вагах — саме це показує, звідки береться втрата ваги: з жиру чи з м'язів."
        },
        {
          "t": "p",
          "text": "У всіх об'єднаних дослідженнях переважна більшість втраченої ваги припадала на жирову масу, а на м'язову тканину — менша частка, ніж припускали тривожні ранні заголовки. Певна втрата м'язової маси все одно відбувається — це трапляється майже за будь-якого схуднення, зокрема й простого дотримання дієти, — але співвідношення жиру до м'язів було сприятливішим, ніж навіювала розповідь про те, що «ці препарати руйнують м'язи»."
        },
        {
          "t": "p",
          "text": "Один результат особливо важливий для жінок: на тих самих препаратах жінки втрачали пропорційно більше ваги, ніж чоловіки. Це узгоджується з відомими статевими відмінностями у складі тіла та в тому, як діють ці ліки, і нагадує, що середні показники досліджень — часто зміщені у бік чоловічої фізіології — не завжди відповідають досвіду жінки."
        },
        {
          "t": "p",
          "text": "Ніщо з цього не означає, що м'язи подбають про себе самі. Швидка втрата ваги в будь-якому віці витончує м'язи й кістки, якщо їх активно не захищати — і саме тут стають у пригоді достатній білок і силові тренування. Це особливо важливо під час перименопаузи та після неї, коли м'язи й кістки й так під тиском. Препарати схиляють співвідношення жиру до м'язів на вашу користь, але не скасовують потреби тренуватися й добре харчуватися, поки вага йде."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Більшість ваги, втраченої на препаратах GLP-1, — це жир, а не м'язи, і жінки втрачають пропорційно більше, ніж чоловіки.",
              "detail": "Метааналіз 2026 року в International Journal of Obesity (Nature) об'єднав дані про склад тіла з рандомізованих досліджень агоністів рецепторів GLP-1 і виявив, що переважна більшість втраченої ваги припадала на жирову масу, а не на м'язову тканину, при цьому жінки втрачали пропорційно більше ваги, ніж чоловіки. Певна втрата м'язової маси все одно відбувається, як і за більшості схуднення, що підкреслює роль достатнього білка й силових тренувань у збереженні м'язів.",
              "cite": "International Journal of Obesity (Nature) · Метааналіз, 2026",
              "url": "https://www.nature.com/articles/s41366-026-02088-1"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи призводять препарати GLP-1 для схуднення до втрати м'язів?",
          "a": "Певна втрата м'язів відбувається майже за будь-якого схуднення, зокрема й на цих препаратах, — але метааналіз 2026 року виявив, що переважна більшість ваги, втраченої на препаратах GLP-1, — це жир, а не м'язи, і частка м'язів менша, ніж припускали ранні окремі дослідження. Захистити м'язи ще більше можна, вживаючи достатньо білка й виконуючи силові вправи, поки ви худнете."
        },
        {
          "q": "Чому жінки втрачають більше ваги, ніж чоловіки, на цих препаратах?",
          "a": "Метааналіз 2026 року виявив, що жінки втрачали пропорційно більше ваги, ніж чоловіки, на тих самих препаратах GLP-1. Відмінності у складі тіла, гормонах і в тому, як діють ці ліки в чоловіків і жінок, — усе це має значення. Це також нагадування, що середні показники змішаних або зміщених до чоловіків досліджень не завжди відображають те, що відчує конкретна жінка."
        }
      ]
    }
  }
];
