/* ============================================================
   Low-GI Recipes — shared runtime (Astro build)
   • Cross-recipe shopping list (localStorage lf_shopping_list / lf_shopping_checked)
   • Slide-in shopping-list drawer (injected once per page, inside .rx)
   • Recipe-page share panel + "Add to shopping list"
   Language is fixed per page (server-rendered) and read from window.LF_LANG —
   there is no client-side language toggle here (the header EN/UA links navigate
   between /recipes/… and /ua/recipes/…). No framework — plain JS.
   ============================================================ */
(function () {
  var LS_LIST = 'lf_shopping_list', LS_CHK = 'lf_shopping_checked';
  var lang = (window.LF_LANG === 'ua') ? 'ua' : 'en';

  var STR = {
    en: {
      recipes: function (n) { return n + ' ' + (n === 1 ? 'recipe' : 'recipes'); },
      items:   function (n) { return n + ' ' + (n === 1 ? 'item' : 'items'); },
      dot: ' · ',
      title: 'Shopping list',
      empty: 'Your shopping list is empty. Browse recipes and add them to build one combined list.',
      serves: function (n) { return 'Serves ' + n; },
      remove: 'Remove', clearAll: 'Clear list', email: 'Email', save: 'Save', print: 'Print',
      clearConfirm: 'Clear the whole list?', clearYes: 'Clear', clearCancel: 'Cancel',
      sendList: 'Send list', yourEmail: 'Your email address',
      optIn: 'Send me more recipes and information',
      listSent: 'List sent — check your inbox', subject: 'Shopping list',
      copied: 'Copied!', copy: 'Copy link', shareRecipe: 'Recipe sent — check your inbox',
      combined: 'Combined', byRecipe: 'By recipe',
      cats: { produce_veg:'Vegetables', produce_fruit:'Fruit', meat_fish:'Meat & fish', dairy_egg:'Dairy & eggs',
        bakery:'Baking & grains', nuts_seeds:'Nuts & seeds', sweet:'Sweeteners', pantry:'Oils, sauces & pantry',
        spice:'Herbs & spices', drinks:'Drinks', other:'Other' }
    },
    ua: {
      recipes: function (n) {
        var a = n % 10, b = n % 100;
        var w = (a === 1 && b !== 11) ? 'рецепт' : (a >= 2 && a <= 4 && (b < 12 || b > 14)) ? 'рецепти' : 'рецептів';
        return n + ' ' + w;
      },
      items: function (n) {
        var a = n % 10, b = n % 100;
        var w = (a === 1 && b !== 11) ? 'інгредієнт' : (a >= 2 && a <= 4 && (b < 12 || b > 14)) ? 'інгредієнти' : 'інгредієнтів';
        return n + ' ' + w;
      },
      dot: ' · ',
      title: 'Список покупок',
      empty: 'Ваш список покупок порожній. Переглядайте рецепти й додавайте їх, щоб зібрати спільний список.',
      serves: function (n) { return 'На ' + n + ' порц.'; },
      remove: 'Прибрати', clearAll: 'Очистити список', email: 'Ел. пошта', save: 'Зберегти', print: 'Друк',
      clearConfirm: 'Очистити весь список?', clearYes: 'Очистити', clearCancel: 'Скасувати',
      sendList: 'Надіслати список', yourEmail: 'Ваша електронна адреса',
      optIn: 'Надсилати мені більше рецептів та інформації',
      listSent: 'Список надіслано — перевірте пошту', subject: 'Список покупок',
      copied: 'Скопійовано!', copy: 'Копіювати посилання', shareRecipe: 'Рецепт надіслано — перевірте пошту',
      combined: 'Разом', byRecipe: 'За рецептами',
      cats: { produce_veg:'Овочі', produce_fruit:'Фрукти', meat_fish:'М’ясо і риба', dairy_egg:'Молочне і яйця',
        bakery:'Випічка і крупи', nuts_seeds:'Горіхи й насіння', sweet:'Підсолоджувачі', pantry:'Олії, соуси, бакалія',
        spice:'Спеції і трави', drinks:'Напої', other:'Інше' }
    }
  };
  var CAT_ORDER = ['produce_veg','produce_fruit','meat_fish','dairy_egg','bakery','nuts_seeds','sweet','pantry','spice','drinks','other'];
  function S() { return STR[lang]; }

  function load(key) { try { return JSON.parse(localStorage.getItem(key)) || {}; } catch (e) { return {}; } }
  function persist(key, o) { localStorage.setItem(key, JSON.stringify(o)); }
  var list = load(LS_LIST), chk = load(LS_CHK);

  function count() { return Object.keys(list).length; }
  function itemCount() { var n = 0; for (var id in list) n += list[id].items_en.length; return n; }
  function title(rec) { return lang === 'ua' ? rec.title_ua : rec.title_en; }
  function items(rec) { return lang === 'ua' ? rec.items_ua : rec.items_en; }

  /* ---- shopping list model ---- */
  function inList(id) { return !!list[id]; }
  function addRecipe(rec) {
    list[rec.id] = { title_en: rec.title_en, title_ua: rec.title_ua,
                     serves_en: rec.serves_en, serves_ua: rec.serves_ua,
                     items_en: rec.items_en.slice(), items_ua: rec.items_ua.slice() };
    persist(LS_LIST, list); afterChange();
  }
  function servesOf(rec) { return lang === 'ua' ? rec.serves_ua : rec.serves_en; }
  function removeRecipe(id) {
    delete list[id];
    Object.keys(chk).forEach(function (k) { if (k.indexOf(id + '::') === 0) delete chk[k]; });
    persist(LS_CHK, chk); persist(LS_LIST, list); afterChange();
  }
  function clearAll() { list = {}; chk = {}; persist(LS_LIST, list); persist(LS_CHK, chk); afterChange(); }
  function afterChange() { renderBadge(); renderDrawer(); syncAddBtn(); }

  /* ---- consolidated shopping list: parse, sum, categorise ---- */
  var LS_VIEW = 'lf_shopping_view';
  var view = (localStorage.getItem(LS_VIEW) === 'byrecipe') ? 'byrecipe' : 'combined';
  var FRC = '½¼¾⅓⅔⅛⅜⅝⅞⅕⅖⅗⅘';
  var FR = { '½':.5,'¼':.25,'¾':.75,'⅓':1/3,'⅔':2/3,'⅛':.125,'⅜':.375,'⅝':.625,'⅞':.875,'⅕':.2,'⅖':.4,'⅗':.6,'⅘':.8 };
  var UNITS = ['g','kg','mg','ml','l','cup','cups','tbsp','tbs','tsp','teaspoon','teaspoons','tablespoon','tablespoons','pinch','pinches','handful','handfuls','clove','cloves','slice','slices','can','cans','sprig','sprigs','bunch','stick','sticks','drop','drops','piece','pieces','packet','ball','balls','head','г','кг','мг','мл','л','склянка','склянки','ст','ч','щіпка','пучок','зубчик','зубчики','жменя','шматок','банка','крапля'];
  var CATS = [
    ['meat_fish',['beef','steak','mince','veal','chicken','turkey','duck','pork','bacon','ham','rabbit','lamb','meatball','fish','salmon','tuna','cod','trout','shrimp','prawn','seafood','яловичин','курк','куряч','індичк','свинин','кролик','риба','лосос','тунец','креветк','фарш','м’яс','м\'яс','телятин']],
    ['nuts_seeds',['almond flour','coconut flour','peanut butter','almond butter','cashew butter','walnut','pecan','peanut','cashew','hazelnut','pistachio','macadamia','almond','chia','flax','linseed','poppy','sesame','sunflower seed','pumpkin seed','coconut flake','ground nut','nuts','мигдал','волоськ','пекан','арахіс','кешю','фундук','чіа','льон','мак','кунжут','горіх','насіння']],
    ['dairy_egg',['egg','milk','cheese','cheddar','feta','philadelphia','mascarpone','ricotta','mozzarella','parmesan','quark','cottage','curd','yogurt','yoghurt','sour cream','cream','kefir','butter','яйц','яйця','молоко','сир','фета','філадельфі','кварк','йогурт','сметан','вершк','кефір','масло вершк']],
    ['produce_fruit',['lemon','lime','orange','apple','banana','strawberr','blueberr','raspberr','blackberr','cherry','cranberr','grapefruit','mandarin','tangerine','plum','prune','rhubarb','fig','pineapple','mango','peach','apricot','pear','grape','date','raisin','kiwi','currant','pomegranate','berry','berries','dried fruit','лимон','лайм','апельсин','яблук','банан','полуниц','чорниц','малин','ожин','вишн','журавлин','грейпфрут','мандарин','слив','ревен','інжир','ананас','манго','персик','абрикос','груш','виноград','фінік','родзинк','ягод','сухофрукт']],
    ['produce_veg',['onion','garlic','tomato','pepper','capsicum','carrot','spinach','kale','courgette','zucchini','cucumber','potato','broccoli','cauliflower','beetroot','beet','mushroom','cabbage','celery','pumpkin','squash','avocado','lettuce','leek','aubergine','eggplant','asparagus','chilli','chili','mixed vegetable','цибул','часник','помідор','томат','перц','моркв','шпинат','кабач','огірок','картопл','брокол','буряк','гриб','капуст','селер','гарбуз','авокадо','спарж']],
    ['bakery',['flour','oats','oat','breadcrumb','bread','baking powder','baking soda','bicarbonate','yeast','starch','cornmeal','semolina','cocoa','cacao','chocolate','carob','gelatin','gelatine','agar','xanthan','wholegrain','wholemeal','pectin','starter','buckwheat','millet','barley','quinoa','rice','granola','muesli','борошн','вівсян','овес','хліб','розпушувач','сода','дріжджі','крохмал','какао','шоколад','кероб','желатин','закваск','гречк','пшон','перлов','кіноа','рис','гранол']],
    ['sweet',['sugar','erythritol','stevia','truvia','honey','maple','agave','sweetener','xylitol','monk fruit','isomalt','цукор','еритритол','стеві','мед','сироп клен','підсолоджувач','ксиліт']],
    ['spice',['salt','pepper','cinnamon','nutmeg','ginger','vanilla','thyme','rosemary','basil','parsley','coriander','cilantro','cumin','clove','cardamom','turmeric','mint','lavender','oregano','paprika','allspice','bay leaf','dill','saffron','anise','curry','spice','herb','seasoning','сіль','перец','кориц','мускат','імбир','ваніл','чебрец','розмарин','базилік','петрушк','коріандр','кмин','гвоздик','кардамон','куркум','м’ят','лаванд','кріп','аніс','каррі','спеці','приправ']],
    ['drinks',['matcha','coffee','espresso','tea','yerba','chicory','cocoa powder','матча','кава','еспресо','чай','цикорій']],
    ['pantry',['oil','vinegar','balsamic','mustard','tahini','soy sauce','tomato paste','tomato puree','stock','broth','wine','water','coconut milk','coconut cream','coconut water','coconut oil','jam','syrup','mayonnaise','ketchup','extract','олі','оцет','бальзам','гірчиц','тахін','соєв','паст','бульйон','вино','вода','кокосов молок','джем','варенн','майонез']]
  ];
  function catOf(name) {
    var n = String(name).toLowerCase();
    for (var i = 0; i < CATS.length; i++) { var kw = CATS[i][1];
      for (var j = 0; j < kw.length; j++) { if (n.indexOf(kw[j]) >= 0) return CATS[i][0]; } }
    return 'other';
  }
  function fmtQty(v) {
    if (v == null) return '';
    var whole = Math.floor(v + 1e-9), frac = v - whole;
    var opts = [[0,''],[.25,'¼'],[1/3,'⅓'],[.5,'½'],[2/3,'⅔'],[.75,'¾'],[1,'']], best = opts[0], bd = 2;
    for (var i = 0; i < opts.length; i++) { var d = Math.abs(frac - opts[i][0]); if (d < bd) { bd = d; best = opts[i]; } }
    if (bd > 0.08) return String(Math.round(v * 100) / 100);
    if (best[0] === 1) { whole += 1; best = opts[0]; }
    if (whole === 0) return best[1] || '0';
    return whole + (best[1] || '');
  }
  function parseIng(raw) {
    var s = String(raw).replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
    s = s.split(',')[0].trim();
    var qty = null, rest = s, m;
    if ((m = rest.match(new RegExp('^(\\d+)\\s*([' + FRC + '])')))) { qty = parseInt(m[1], 10) + FR[m[2]]; rest = rest.slice(m[0].length); }
    else if ((m = rest.match(new RegExp('^([' + FRC + '])')))) { qty = FR[m[1]]; rest = rest.slice(m[0].length); }
    else if ((m = rest.match(/^(\d+[.,]\d+)/))) { qty = parseFloat(m[1].replace(',', '.')); rest = rest.slice(m[0].length); }
    else if ((m = rest.match(/^(\d+)/))) { qty = parseInt(m[1], 10); rest = rest.slice(m[0].length); }
    else if ((m = rest.match(/^(a few|a|an)\s/i))) { qty = 1; rest = rest.slice(m[0].length); }
    rest = rest.trim();
    var unit = '', um = rest.match(/^([a-zA-Zа-яіїєґ.]+)/i);
    if (um) { var u = um[1].toLowerCase().replace(/\.$/, ''); if (UNITS.indexOf(u) >= 0) { unit = u.replace(/s$/, ''); rest = rest.slice(um[0].length).trim(); } }
    rest = rest.replace(/^(of|of the)\s+/i, '').trim();
    if (qty == null && /pinch|handful|щіпка|жменя/.test(unit + ' ' + s)) qty = 1;
    return { qty: qty, unit: unit, name: rest || s };
  }
  function normName(n) {
    return String(n).toLowerCase()
      .replace(/^(fresh|dried|ground|liquid|large|small|ripe|very ripe|natural|whole|raw|cold|hot|warm|unsweetened|свіж\S*|сушен\S*|мелен\S*|велик\S*|невелик\S*|стигл\S*)\s+/, '')
      .replace(/s$/, '').trim();
  }
  function consolidate() {
    var groups = {};
    Object.keys(list).forEach(function (id) {
      var rec = list[id], en = rec.items_en, disp = items(rec);
      for (var i = 0; i < disp.length; i++) {
        var enStr = en[i] || disp[i];
        if (/^—/.test(enStr) || /^—/.test(disp[i])) continue;
        var pe = parseIng(enStr), pd = parseIng(disp[i]);
        var cat = catOf(pe.name), gkey = cat + '|' + normName(pe.name) + '|' + pe.unit;
        if (!groups[gkey]) groups[gkey] = { cat: cat, name: pd.name, unit: pd.unit, qty: 0, hasQty: true, key: 'c::' + gkey };
        if (pe.qty == null) groups[gkey].hasQty = false; else groups[gkey].qty += pe.qty;
      }
    });
    var byCat = {};
    Object.keys(groups).forEach(function (k) { var g = groups[k]; (byCat[g.cat] = byCat[g.cat] || []).push(g); });
    return byCat;
  }
  function itemLabel(g) {
    var q = g.hasQty ? fmtQty(g.qty) : '';
    return ((q ? q + ' ' : '') + (g.unit ? g.unit + ' ' : '') + g.name).replace(/\s+/g, ' ').trim();
  }

  /* ---- header badge ---- */
  function renderBadge() {
    var b = document.getElementById('listBadge');
    if (!b) return;
    var n = count(); b.textContent = n; b.classList.toggle('show', n > 0);
  }

  /* ---- recipe-page "Add to list" button ---- */
  function syncAddBtn() {
    var btn = document.getElementById('addListBtn');
    if (!btn || !window.LF_RECIPE) return;
    var on = inList(window.LF_RECIPE.id);
    btn.classList.toggle('green', on);
    btn.classList.toggle('primary', !on);
    var lbl = btn.querySelector('.lbl');
    if (lbl) lbl.textContent = on ? btn.getAttribute(lang === 'ua' ? 'data-added-ua' : 'data-added-en')
                                  : btn.getAttribute(lang === 'ua' ? 'data-add-ua' : 'data-add-en');
    btn.querySelector('.i-plus') && (btn.querySelector('.i-plus').style.display = on ? 'none' : '');
    btn.querySelector('.i-check') && (btn.querySelector('.i-check').style.display = on ? '' : 'none');
  }

  /* ---- drawer (injected once, inside .rx so scoped recipe CSS applies) ---- */
  var scrim, drawer, body, summary, foot;
  function injectDrawer() {
    var host = document.querySelector('.rx') || document.body;
    scrim = document.createElement('div'); scrim.className = 'scrim'; scrim.id = 'lfScrim';
    drawer = document.createElement('aside'); drawer.className = 'drawer no-print'; drawer.id = 'lfDrawer';
    drawer.innerHTML =
      '<div class="drawer-head"><div><div class="title" id="lfDrawerTitle"></div><div class="summary" id="lfSummary"></div></div>' +
      '<button class="x-btn" id="lfClose" aria-label="Close">&times;</button></div>' +
      '<div class="drawer-body" id="lfBody"></div>' +
      '<div class="drawer-foot" id="lfFoot"></div>';
    host.appendChild(scrim); host.appendChild(drawer);
    body = drawer.querySelector('#lfBody'); summary = drawer.querySelector('#lfSummary'); foot = drawer.querySelector('#lfFoot');
    scrim.addEventListener('click', closeDrawer);
    drawer.querySelector('#lfClose').addEventListener('click', closeDrawer);
  }
  function openDrawer() { renderDrawer(); scrim.classList.add('open'); drawer.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeDrawer() { scrim.classList.remove('open'); drawer.classList.remove('open'); document.body.style.overflow = ''; }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' })[c]; }); }

  function renderDrawer() {
    if (!drawer) return;
    drawer.querySelector('#lfDrawerTitle').textContent = S().title;
    var ids = Object.keys(list);
    summary.textContent = ids.length ? (S().recipes(ids.length) + S().dot + S().items(itemCount())) : '';

    if (!ids.length) {
      body.innerHTML =
        '<div class="cart-empty"><div class="disc">' + CLIP_SVG + '</div><p>' + esc(S().empty) + '</p></div>';
      foot.innerHTML = ''; return;
    }
    var html = '<div class="cart-view">' +
      '<button class="cv-btn' + (view === 'combined' ? ' on' : '') + '" data-view="combined">' + esc(S().combined) + '</button>' +
      '<button class="cv-btn' + (view === 'byrecipe' ? ' on' : '') + '" data-view="byrecipe">' + esc(S().byRecipe) + '</button></div>';

    if (view === 'combined') {
      var byCat = consolidate();
      CAT_ORDER.forEach(function (cat) {
        var arr = byCat[cat]; if (!arr || !arr.length) return;
        arr.sort(function (a, b) { return itemLabel(a).localeCompare(itemLabel(b)); });
        html += '<div class="cart-group"><div class="g-head"><span class="g-title">' + esc(S().cats[cat]) + '</span></div><div class="cart-list">';
        arr.forEach(function (g) {
          var on = !!chk[g.key];
          html += '<label class="cart-item"><input type="checkbox" data-chk="' + esc(g.key) + '"' + (on ? ' checked' : '') +
                  '><span class="box"></span><span>' + esc(itemLabel(g)) + '</span></label>';
        });
        html += '</div></div>';
      });
    } else {
      ids.forEach(function (id) {
        var rec = list[id];
        html += '<div class="cart-group"><div class="g-head"><div><span class="g-title">' + esc(title(rec)) +
                '</span> <span class="g-serves">' + esc(servesOf(rec)) + '</span></div>' +
                '<button class="remove" data-rm="' + esc(id) + '">' + esc(S().remove) + '</button></div>' +
                '<div class="cart-list">';
        items(rec).forEach(function (it, idx) {
          var key = id + '::' + idx, on = !!chk[key];
          html += '<label class="cart-item"><input type="checkbox" data-chk="' + esc(key) + '"' + (on ? ' checked' : '') +
                  '><span class="box"></span><span>' + esc(it) + '</span></label>';
        });
        html += '</div></div>';
      });
    }
    body.innerHTML = html;
    body.querySelectorAll('[data-view]').forEach(function (b) {
      b.addEventListener('click', function () { view = b.getAttribute('data-view'); try { localStorage.setItem(LS_VIEW, view); } catch (e) {} renderDrawer(); });
    });

    foot.innerHTML =
      '<div class="cart-email" id="lfEmailBox"><input type="email" id="lfEmailAddr" placeholder="' + esc(S().yourEmail) + '">' +
      '<label class="opt" style="display:flex;gap:9px;align-items:flex-start;margin:10px 0;font-size:13px;color:var(--ink-2);">' +
      '<input type="checkbox" id="lfEmailOpt" checked><span>' + esc(S().optIn) + '</span></label>' +
      '<button class="btn primary full" id="lfSendList">' + esc(S().sendList) + '</button>' +
      '<div class="confirm" id="lfListSent">' + CHECK_SVG + '<span>' + esc(S().listSent) + '</span></div></div>' +
      '<div class="cart-actions">' +
      '<button class="btn" id="lfEmailBtn">' + MAIL_SVG + '<span>' + esc(S().email) + '</span></button>' +
      '<button class="btn" id="lfSaveBtn">' + SAVE_SVG + '<span>' + esc(S().save) + '</span></button>' +
      '<button class="btn" id="lfPrintBtn">' + PRINT_SVG + '<span>' + esc(S().print) + '</span></button></div>' +
      '<button class="clear-all" id="lfClearAll">' + esc(S().clearAll) + '</button>';

    body.querySelectorAll('[data-rm]').forEach(function (b) { b.addEventListener('click', function () { removeRecipe(b.getAttribute('data-rm')); }); });
    body.querySelectorAll('[data-chk]').forEach(function (c) {
      c.addEventListener('change', function () { chk[c.getAttribute('data-chk')] = c.checked; persist(LS_CHK, chk); });
    });
    foot.querySelector('#lfClearAll').addEventListener('click', function () {
      var btn = foot.querySelector('#lfClearAll');
      var box = document.createElement('div');
      box.className = 'clear-confirm';
      box.innerHTML = '<span class="clear-q">' + esc(S().clearConfirm) + '</span>' +
        '<div class="clear-btns">' +
        '<button type="button" class="clear-no" id="lfClearNo">' + esc(S().clearCancel) + '</button>' +
        '<button type="button" class="clear-yes" id="lfClearYes">' + esc(S().clearYes) + '</button></div>';
      btn.replaceWith(box);
      box.querySelector('#lfClearNo').addEventListener('click', renderDrawer);
      box.querySelector('#lfClearYes').addEventListener('click', clearAll);
    });
    foot.querySelector('#lfEmailBtn').addEventListener('click', function () { foot.querySelector('#lfEmailBox').classList.toggle('open'); });
    foot.querySelector('#lfSendList').addEventListener('click', emailList);
    foot.querySelector('#lfSaveBtn').addEventListener('click', saveListAction);
    foot.querySelector('#lfPrintBtn').addEventListener('click', printList);
  }

  function listText() {
    var out = [];
    if (view === 'combined') {
      var byCat = consolidate();
      CAT_ORDER.forEach(function (cat) {
        var arr = byCat[cat]; if (!arr || !arr.length) return;
        arr.sort(function (a, b) { return itemLabel(a).localeCompare(itemLabel(b)); });
        out.push(S().cats[cat] + ':');
        arr.forEach(function (g) { out.push('  - ' + itemLabel(g)); });
        out.push('');
      });
    } else {
      Object.keys(list).forEach(function (id) {
        var rec = list[id];
        out.push(title(rec) + ' (' + servesOf(rec) + ')');
        items(rec).forEach(function (it) { out.push('  - ' + it); });
        out.push('');
      });
    }
    return out.join('\n').trim();
  }
  function emailList() {
    var addr = (foot.querySelector('#lfEmailAddr').value || '').trim();
    var opt = foot.querySelector('#lfEmailOpt').checked;
    var body2 = listText() + (opt ? '\n\n(' + S().optIn + ')' : '');
    window.location.href = 'mailto:' + encodeURIComponent(addr) + '?subject=' + encodeURIComponent(S().subject) + '&body=' + encodeURIComponent(body2);
    foot.querySelector('#lfListSent').classList.add('show');
  }
  function saveListAction() {
    if (navigator.share) { navigator.share({ title: S().title, text: listText() }).catch(function () {}); return; }
    var blob = new Blob([listText()], { type: 'text/plain' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'shopping-list.txt'; a.click();
  }
  function printList() {
    var w = window.open('', '_blank'); if (!w) return;
    var h = '<h1 style="font-family:Georgia,serif">' + esc(S().title) + '</h1>';
    if (view === 'combined') {
      var byCat = consolidate();
      CAT_ORDER.forEach(function (cat) {
        var arr = byCat[cat]; if (!arr || !arr.length) return;
        arr.sort(function (a, b) { return itemLabel(a).localeCompare(itemLabel(b)); });
        h += '<h2 style="font-family:Georgia,serif;margin:18px 0 4px">' + esc(S().cats[cat]) + '</h2><ul>';
        arr.forEach(function (g) { h += '<li>' + esc(itemLabel(g)) + '</li>'; });
        h += '</ul>';
      });
    } else {
      Object.keys(list).forEach(function (id) {
        var rec = list[id];
        h += '<h2 style="font-family:Georgia,serif;margin:18px 0 4px">' + esc(title(rec)) + ' <small>(' + esc(servesOf(rec)) + ')</small></h2><ul>';
        items(rec).forEach(function (it) { h += '<li>' + esc(it) + '</li>'; });
        h += '</ul>';
      });
    }
    w.document.write('<html><head><title>' + esc(S().title) + '</title><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;color:#331B33;max-width:640px;margin:24px auto;padding:0 20px;line-height:1.6}li{margin:2px 0}</style></head><body>' + h + '</body></html>');
    w.document.close(); w.focus(); setTimeout(function () { w.print(); }, 200);
  }

  /* ---- recipe-page share panel ---- */
  function wireShare() {
    var toggle = document.getElementById('shareToggle');
    var panel = document.getElementById('sharePanel');
    if (toggle && panel) {
      toggle.addEventListener('click', function () { var o = panel.classList.toggle('open'); toggle.classList.toggle('primary', o); });
    }
    var nativeBtn = document.getElementById('shNative');
    if (nativeBtn) nativeBtn.addEventListener('click', function () {
      var t = window.LF_RECIPE ? title(window.LF_RECIPE) : document.title;
      if (navigator.share) navigator.share({ title: t, url: location.href }).catch(function () {});
      else copyLink();
    });
    var copyBtn = document.getElementById('shCopy');
    if (copyBtn) copyBtn.addEventListener('click', copyLink);
    var form = document.getElementById('shareForm');
    if (form) form.addEventListener('submit', function (e) {
      e.preventDefault();
      var addr = (document.getElementById('shareEmail').value || '').trim();
      var opt = document.getElementById('shareOpt').checked;
      var rec = window.LF_RECIPE || {};
      var subj = title(rec) || document.title;
      var lead = (lang === 'ua' ? rec.lead_ua : rec.lead_en) || '';
      var b = subj + '\n\n' + lead + '\n\n' + location.href + (opt ? '\n\n(' + S().optIn + ')' : '');
      window.location.href = 'mailto:' + encodeURIComponent(addr) + '?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(b);
      document.getElementById('shareSent').classList.add('show');
    });
  }
  function copyLink() {
    var btn = document.getElementById('shCopy'); var lbl = btn && btn.querySelector('.lbl');
    function done() { if (lbl) { lbl.textContent = S().copied; setTimeout(function () { lbl.textContent = S().copy; }, 2000); } }
    if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(done, done);
    else { var t = document.createElement('textarea'); t.value = location.href; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (e) {} document.body.removeChild(t); done(); }
  }

  /* ---- init ---- */
  function init() {
    lang = (window.LF_LANG === 'ua') ? 'ua' : 'en';
    injectDrawer();
    var lb = document.getElementById('listBtn'); if (lb) lb.addEventListener('click', openDrawer);
    var add = document.getElementById('addListBtn');
    if (add && window.LF_RECIPE) add.addEventListener('click', function () {
      if (inList(window.LF_RECIPE.id)) removeRecipe(window.LF_RECIPE.id);
      else addRecipe(window.LF_RECIPE.snapshot());
    });
    wireShare();
    renderBadge(); renderDrawer(); syncAddBtn();
  }

  window.LF = { get lang() { return lang; },
                addRecipe: addRecipe, removeRecipe: removeRecipe, inList: inList,
                openDrawer: function () { openDrawer(); }, closeDrawer: function () { closeDrawer(); } };

  /* ---- inline icons (Feather/Lucide style) ---- */
  var CLIP_SVG  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 13l2 2 4-4"/></svg>';
  var CHECK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
  var MAIL_SVG  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>';
  var SAVE_SVG  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>';
  var PRINT_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>';

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
