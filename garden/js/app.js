// BLOOM & BUZZ · app shell, router, garden zones and mid-term papers
(function () {
const { $, $$, esc, shuffle, pick, S, toast, burst, updateJar, runQuiz, runPaper, blocks, player, speakTask, writeTask, chatGame, reduced } = window.E;
const A = window.ART, G = window.GAMES, MID = window.MID;
const GR = window.GRAMMAR, VO = window.VOCAB, RE = window.READING, LI = window.LISTENING, SP = window.SPEAKING, WR = window.WRITING, KITS = window.KITS, CH = window.CHATS, PLAY = window.PLAY;

// ---------------- zones ----------------
const Z = {
  listening: { name: 'Listening', place: 'Lavender Lantern Path', book: 'L&S book', c: '#7C5CD6', d: '#4B2E9E', s: '#F1EBFF', line: 'Follow the lanterns: learn a skill, then listen twice, just like the exam.' },
  speaking: { name: 'Speaking', place: 'Butterfly Meadow', book: 'L&S book', c: '#2E8FD8', d: '#155C99', s: '#E6F3FE', line: 'Fly from idea to idea: plan with colours, record yourself, get feedback.' },
  reading: { name: 'Reading', place: 'Rose Fence Garden', book: 'R&W book', c: '#E0457B', d: '#9E1B4C', s: '#FFE9F1', line: 'Smell every rose: skills first, then texts with exam questions.' },
  writing: { name: 'Writing', place: 'Cherry Blossom Fountain', book: 'R&W book', c: '#B046B8', d: '#73207A', s: '#F9E9FA', line: 'Plan, write and check under the blossom: summary, response and essays.' },
  grammar: { name: 'Grammar', place: 'Orchid Glasshouse', book: 'Both books', c: '#12A08A', d: '#0B6B5C', s: '#E2F7F2', line: 'Every orchid is one grammar point: learn it, practise it, test it.' },
  vocab: { name: 'Vocabulary', place: 'Fruit Orchard', book: 'Both books', c: '#F2694B', d: '#B03A1F', s: '#FFEDE7', line: 'Pick the words like fruit: flashcards, games and exam-style gaps.' },
  honey: { name: 'Honey Lab', place: 'Honeycomb Tower', book: 'Games', c: '#E89B0C', d: '#9A5E00', s: '#FFF4D9', line: 'Make juice, mix perfume, solve garden mysteries and fill your honey jar.' },
  exam: { name: 'Mock Exam', place: 'Firefly Night Meadow', book: 'Mid-term', c: '#3B3A8F', d: '#1E1B4B', s: '#ECEBFA', line: 'Under the fireflies: full practice papers in the real mid-term format.' },
  me: { name: 'My Garden', place: 'My Flower Bed', book: 'Progress', c: '#3FA45E', d: '#24713D', s: '#E8F6EC', line: 'Watch your flowers grow as your scores grow.' }
};
const ORDERZ = ['listening', 'speaking', 'reading', 'writing', 'grammar', 'vocab', 'honey', 'exam', 'me'];
const DOCK = [['home', 'Home'], ['listening', 'Listen'], ['speaking', 'Speak'], ['reading', 'Read'], ['writing', 'Write'], ['vocab', 'Words'], ['grammar', 'Grammar']];
const icon = (z, cls = '') => `<span class="zi ${cls}">${A.ICON[z === 'home' ? 'home' : z]((Z[z] || { c: '#E0457B' }).c)}</span>`;
const unitsOf = x => x.u || ((String(x.unit || '') + ' ' + String(x.src || '')).match(/(?:U|Unit|Units?)\s*([1-5](?:\s*(?:,|and|to|\+|·)\s*[1-5])*)/gi) || []).join(' ').match(/[1-5]/g)?.map(Number) || [];
const uTag = x => { const u = [...new Set(unitsOf(x))].sort(); return u.length ? `<span class="ut">U${u.join(' · U')}</span>` : ''; };
const bestBadge = k => { const b = S.best(k); return b ? `<span class="bb ${b.pct >= 90 ? 'g' : b.pct >= 70 ? 'o' : 'r'}">${b.pct >= 90 ? '🌸' : b.pct >= 70 ? '🌼' : '🌱'} ${b.pct}%</span>` : ''; };

// ---------------- shell ----------------
const view = $('#view');
function shell() {
  $('#top').innerHTML = `<a class="brand" href="#/" data-nav aria-label="Bloom and Buzz home">${A.bee(30, 'idle')}<span><b>Bloom &amp; Buzz</b><small>PSE 2B revision garden</small></span></a>
    <div class="topr"><a class="tbtn" href="#/z/exam" data-nav aria-label="Mock exam">🌙</a><a class="tbtn" href="#/z/honey" data-nav aria-label="Honey Lab games">🐝</a>
    <a class="jarbtn" id="jar" href="#/z/me" data-nav aria-label="My honey and progress"><span class="jar"><span class="jarfill" id="jarFill"></span><span class="jarlid"></span></span><b id="jarN">0</b></a></div>`;
  $('#dock').innerHTML = DOCK.map(([z, l]) => `<a href="${z === 'home' ? '#/' : '#/z/' + z}" data-nav data-z="${z}" style="--dz:${(Z[z] || { c: '#E0457B' }).c}"><span class="dpill"></span>${icon(z)}<span class="dl">${l}</span></a>`).join('');
  updateJar();
}

// ---------------- router with morph transitions ----------------
let morphFrom = null;
function go(hash, from) {
  if (location.hash === hash) return render();
  morphFrom = from || null; location.hash = hash;
}
function routeParts() { return (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean).map(decodeURIComponent); }
function transition(fn) {
  window.E.stopSpeech();
  if (document.startViewTransition && !reduced()) {
    const src = morphFrom; morphFrom = null;
    if (src) { const old = $('.zhead .zi, .ahead .zi'); if (old && old !== src) old.style.viewTransitionName = ''; src.style.viewTransitionName = 'hero'; }
    const t = document.startViewTransition(() => { fn(); window.scrollTo(0, 0); });
    t.finished.finally(() => { if (src) src.style.viewTransitionName = ''; });
  } else { fn(); window.scrollTo(0, 0); view.classList.remove('enter'); void view.offsetWidth; view.classList.add('enter'); }
}
addEventListener('hashchange', () => transition(render));
document.addEventListener('click', e => {
  const a = e.target.closest('a[data-nav]'); if (!a) return;
  const h = a.getAttribute('href'); if (!h || !h.startsWith('#')) return;
  e.preventDefault();
  const fl = a.querySelector('.zi'); const isStop = a.classList.contains('stop');
  if (isStop && !reduced()) return flyGuide(fl, () => go(h, fl));
  go(h, fl && a.closest('.tiles-z, .stop, .bed') ? fl : null);
});

function setTheme(z) {
  const t = Z[z] || { c: '#E0457B', d: '#9E1B4C', s: '#FFF3F6' };
  const r = document.documentElement.style; r.setProperty('--z', t.c); r.setProperty('--zd', t.d); r.setProperty('--zs', t.s);
  document.body.dataset.z = z || 'home';
  $$('#dock a').forEach(a => a.classList.toggle('on', a.dataset.z === (z || 'home') || (z && !DOCK.some(d => d[0] === z) && false)));
  const meta = $('meta[name="theme-color"]'); if (meta) meta.content = t.c;
}
function render() {
  const p = routeParts(); updateJar();
  if (!p.length) { setTheme('home'); return home(); }
  guide.style.opacity = 0;
  if (p[0] === 'z') { setTheme(p[1]); zone(p[1]); return requestAnimationFrame(() => placeGuide($('.zhead .zi'))); }
  if (p[0] === 'a') { setTheme(p[1]); return activity(p[1], p[2], p.slice(3)); }
  setTheme('home'); home();
}

// ---------------- the guide butterfly ----------------
const guide = $('#guide');
function placeGuide(el) { if (!el) { guide.style.opacity = 0; return; } const r = el.getBoundingClientRect(); guide.style.opacity = 1; guide._p = { x: r.left + r.width * .62, y: r.top - 18 + scrollY }; guide.style.transform = `translate(${guide._p.x}px,${guide._p.y}px)`; }
function flyGuide(to, cb) {
  if (!to) return cb(); const r = to.getBoundingClientRect(); const x1 = r.left + r.width / 2 - 20, y1 = r.top + scrollY - 10;
  const p = guide._p || { x: innerWidth / 2, y: scrollY + 80 }; guide.style.opacity = 1;
  const mx = (p.x + x1) / 2 + (x1 > p.x ? -60 : 60), my = Math.min(p.y, y1) - 90; const fr = [];
  for (let k = 0; k <= 16; k++) { const t = k / 16; const x = (1 - t) ** 2 * p.x + 2 * (1 - t) * t * mx + t * t * x1, y = (1 - t) ** 2 * p.y + 2 * (1 - t) * t * my + t * t * y1; fr.push({ transform: `translate(${x}px,${y}px) rotate(${Math.sin(t * 6) * 12}deg)` }); }
  guide.classList.add('flying'); const an = guide.animate(fr, { duration: 640, easing: 'cubic-bezier(.45,.05,.35,1)', fill: 'forwards' });
  an.onfinish = () => { guide._p = { x: x1, y: y1 }; guide.classList.remove('flying'); burst(to); cb(); };
}

// ---------------- HOME ----------------
function home() {
  const info = MID.INFO;
  view.innerHTML = `<section class="hero">${A.SCENE.home()}<div class="hero-bees" aria-hidden="true">${A.bee(28, 'b1')}${A.bee(22, 'b2')}${A.butterfly('#FF9EC4', '#C77DFF', 30, 'f1')}${A.butterfly('#7FC4F5', '#C9A7FF', 26, 'f2')}</div>
    <div class="hero-t"><span class="kick">PSE 2B · Unlock 3 · Units 1 to 5</span><h1>Bloom <i>&amp;</i> Buzz</h1><p>Your revision garden for the mid-term. Fly from flower to flower, collect honey, and bloom on exam day.</p></div></section>
    ${S.name ? `<div class="hello">Welcome back, <b>${esc(S.name)}</b> 🌸 You have <b>${S.honey()}</b> drops of honey.</div>` : `<form class="card namecard" id="nm"><b>🌷 What's your name?</b><p class="hint">It appears on your scores when you send them to your teacher.</p><div class="row"><input id="nmi" maxlength="24" placeholder="Your first name" autocomplete="given-name"><button class="btn">Enter the garden</button></div></form>`}
    <h2 class="sec-t">🗺️ Your mid-term: two papers</h2>
    <div class="papers">${[['ls', '🎧🎤', 'listening', 'speaking'], ['rw', '📖✍️', 'reading', 'writing']].map(([k, e, z1, z2]) => `<div class="paperc ${k}"><div class="ph"><span>${e}</span><div><b>${info[k].name}</b><small>${k === 'ls' ? 'Listening, Speaking & Critical Thinking book' : 'Reading, Writing & Critical Thinking book'}</small></div></div>
      <ol>${info[k].parts.map(([a, b]) => `<li><b>${a}</b><span>${b}</span></li>`).join('')}</ol>
      <div class="row"><a class="btn sm" data-nav href="#/a/exam/${k}">Practise the full paper</a><a class="btn sm ghost" data-nav href="#/z/${z1}">${Z[z1].name}</a><a class="btn sm ghost" data-nav href="#/z/${z2}">${Z[z2].name}</a></div></div>`).join('')}</div>
    <h2 class="sec-t">🌼 The garden path</h2><p class="sec-s">Tap a flower. The butterfly will take you there.</p>
    <div class="path-map"><svg class="trail" viewBox="0 0 100 900" preserveAspectRatio="none" aria-hidden="true"><path d="M50 0 C90 60 10 110 50 170 S90 280 50 340 S10 450 50 510 S90 620 50 680 S10 790 50 900" fill="none" stroke="#E9D9C4" stroke-width="9" stroke-linecap="round"/><path d="M50 0 C90 60 10 110 50 170 S90 280 50 340 S10 450 50 510 S90 620 50 680 S10 790 50 900" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="1 9" stroke-linecap="round"/></svg>
      ${ORDERZ.map((z, k) => { const pr = S.zone(z); return `<a class="stop ${k % 2 ? 'r' : 'l'}" data-nav href="#/z/${z}" style="--zc:${Z[z].c};--zs:${Z[z].s};--k:${k}"><span class="bedring">${icon(z)}</span><span class="st"><b>${Z[z].name}</b><small>${Z[z].place}</small><em>${Z[z].book}${pr.done ? ` · ${pr.done} 🌸` : ''}</em></span></a>`; }).join('')}</div>
    <div class="card mixcard"><div><b>🌈 Quick bloom</b><p class="hint">12 mixed questions from all five units. Perfect for 10 minutes on the bus.</p></div><a class="btn" data-nav href="#/a/exam/quick">Start</a></div>
    <p class="install hint">📱 Tip: open the browser menu and choose <b>Add to Home Screen</b>. Bloom &amp; Buzz then opens like an app.</p>
    <div class="foot">Made with 💖 for PSE 2B by<b>Mr. Abdelkader Soltani</b><small>EP Riyadh · AlMaarefa University</small></div>`;
  const f = $('#nm'); if (f) f.onsubmit = e => { e.preventDefault(); const v = $('#nmi').value.trim(); if (!v) return toast('Write your name 🌷'); S.name = v; burst($('#nmi')); home(); };
  requestAnimationFrame(() => placeGuide($('.stop .zi')));
  reveal();
}

// ---------------- ZONE PAGES ----------------
function head(z, sub) {
  const t = Z[z]; const nm = morphFrom ? '' : '';
  return `<header class="zhead">${A.SCENE[z] ? A.SCENE[z]() : ''}<div class="zshade"></div><a class="back" data-nav href="#/" aria-label="Back to the garden">‹</a>
    <div class="zt">${icon(z)}<div><span class="kick">${t.book} · ${t.place}</span><h1>${t.name}</h1><p>${sub || t.line}</p></div></div></header>`;
}
const tile = (z, href, emoji, title, sub, key, u) => `<a class="tile-z" data-nav href="${href}" data-u="${(u || []).join(' ')}"><span class="te">${emoji}</span><span class="tt"><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</span>${key ? bestBadge(key) : ''}</a>`;
const group = (title, desc, html, icon2 = '🌸') => `<section class="grp rv"><div class="gh"><span>${icon2}</span><div><h2>${title}</h2>${desc ? `<p>${desc}</p>` : ''}</div></div><div class="tiles-z">${html}</div></section>`;
const unitChips = () => `<div class="uchips" role="group" aria-label="Filter by unit">${['all', 1, 2, 3, 4, 5].map(u => `<button class="uc ${u === 'all' ? 'on' : ''}" data-u="${u}">${u === 'all' ? 'All units' : 'Unit ' + u}</button>`).join('')}</div>`;
function wireChips() { $$('.uc').forEach(b => b.onclick = () => { $$('.uc').forEach(x => x.classList.toggle('on', x === b)); const u = b.dataset.u; $$('.tile-z').forEach(t => { const us = t.dataset.u; t.hidden = !(u === 'all' || !us || us.split(' ').includes(u)); }); $$('.grp').forEach(g => g.hidden = !$$('.tile-z', g).some(t => !t.hidden)); }); }
const UN = { 1: 'Animals', 2: 'The environment', 3: 'Transport', 4: 'Customs and traditions', 5: 'Health and fitness' };
const chatTile = (z, grp) => tile(z, `#/a/${z}/chat/${grp}`, '💬', 'WhatsApp: Garden Girls chat', 'Help your friends fix their messages', `${z}:chat:${grp}`);

function zone(z) {
  if (!Z[z]) return home();
  let body = '';
  if (z === 'listening') {
    body = unitChips()
      + group('Mid-term papers', 'Listening 1 (notes + explanations) and Listening 2 (cause and effect + opinion), exactly like the test.', MID.LISTEN.map(p => tile(z, `#/a/listening/mid/${p.id}`, '🌙', `${p.title}: ${p.l1.title} + ${p.l2.title}`, p.units, `listening:mid:${p.id}`, unitsOf({ src: p.units }))).join(''), '🌙')
      + group('Skill lanterns', 'One listening skill at a time, with a short recording.', LI.lessons.map(l => tile(z, `#/a/listening/lesson/${l.id}`, l.emoji, l.title, l.src, `listening:lesson:${l.id}`, unitsOf(l))).join(''), '🏮')
      + group('Unit recordings', 'Longer recordings with exam questions.', LI.tests.map(t => tile(z, `#/a/listening/test/${t.id}`, t.emoji, t.title, t.unit, `listening:test:${t.id}`, unitsOf(t))).join(''), '🎧')
      + group('Fun', '', chatTile(z, 'listening'), '💬');
  }
  if (z === 'speaking') {
    body = unitChips()
      + group('Mid-term presentations', 'A problem, solutions and the predicted results. Speak for at least 2 minutes.', MID.SPEAK.map(t => tile(z, `#/a/speaking/mid/${t.id}`, t.icon, t.topic, 'Problem → solutions → results', `speaking:mid:${t.id}`)).join(''), '🌙')
      + group('Unit speaking tasks', 'Record yourself and get automatic feedback.', SP.tasks.map(t => tile(z, `#/a/speaking/task/${t.id}`, t.emoji, t.title, t.unit, `speaking:task:${t.id}`, unitsOf(t))).join(''), '🎤')
      + group('Speaking skills', '', SP.lessons.map(l => tile(z, `#/a/speaking/lesson/${l.id}`, l.emoji, l.title, l.src, null, unitsOf(l))).join(''), '🦋')
      + group('Fun', '', chatTile(z, 'speaking'), '💬');
  }
  if (z === 'reading') {
    body = unitChips()
      + group('Mid-term papers', 'Reading 1 (predict from photos + detail) and Reading 2 (main ideas in order + purpose and audience).', MID.READ.map(p => tile(z, `#/a/reading/mid/${p.id}`, '🌙', `${p.title}: ${p.r1.title} + ${p.r2.title}`, p.units, `reading:mid:${p.id}`, unitsOf({ src: p.units }))).join(''), '🌙')
      + group('Reading skills', '', RE.lessons.map(l => tile(z, `#/a/reading/lesson/${l.id}`, l.emoji, l.title, l.src, `reading:lesson:${l.id}`, unitsOf(l))).join(''), '🌹')
      + group('Practice texts by unit', 'Real exam question types: main idea, detail, True / False / Does not say, the writer\'s opinion, words in context.', RE.tests.map(t => tile(z, `#/a/reading/test/${t.id}`, t.emoji, t.title, t.unit, `reading:test:${t.id}`, unitsOf(t))).join(''), '📖')
      + group('Fun', '', chatTile(z, 'reading'), '💬');
  }
  if (z === 'writing') {
    body = unitChips()
      + group('Mid-term writing task: summary + response', 'Summarize an article, then give your opinion and connect it to your city.', MID.SUMMARY.map(t => tile(z, `#/a/writing/summary/${t.id}`, '🌙', t.title, 'Summary paragraph + response paragraph', `writing:summary:${t.id}`, [4])).join('') + tile(z, '#/a/writing/kit/summary', '🧺', 'Summary and response kit', 'See it · Build it · Write it', 'writing:kit:summary', [4]), '🌙')
      + group('Grammar for writing (mid-term Part A)', 'Put the words in order and match the sentence halves.', [1, 2, 3].map(k => tile(z, `#/a/writing/gfw/${k}`, '💐', `Grammar for writing · Set ${k}`, '5 word-order + 5 match the halves', `writing:gfw:${k}`, [1, 2, 3, 5])).join(''), '💐')
      + group('Essay kits', 'Step by step, with colour-coded models.', KITS.filter(k => k.id !== 'summary').map(k => tile(z, `#/a/writing/kit/${k.id}`, k.emoji, k.title, k.unit, `writing:kit:${k.id}`, k.u)).join(''), '🌸')
      + group('Paragraph skills', '', WR.lessons.filter(l => !/summative/i.test(l.src)).map(l => tile(z, `#/a/writing/lesson/${l.id}`, l.emoji, l.title, l.src, null, unitsOf(l))).join('') + WR.exercises.map(x => tile(z, `#/a/writing/ex/${x.id}`, x.emoji, x.title, x.short, `writing:ex:${x.id}`)).join(''), '🪴')
      + group('Paragraph writing tasks', 'Advantages and disadvantages paragraphs from a table.', WR.tasks.map(t => tile(z, `#/a/writing/task/${t.id}`, t.emoji, t.title, t.step, null, t.u)).join(''), '📝')
      + group('Fun', '', chatTile(z, 'writing'), '💬');
  }
  if (z === 'grammar') {
    const byU = u => GR.topics.filter(t => unitsOf(t).includes(u) && t.id !== 'watch');
    body = unitChips()
      + group('Mid-term grammar', 'The two grammar formats of the tests.', [tile(z, '#/a/grammar/weed/1', '🌿', 'Weed the mistakes', 'L&S test: correct the mistake in each sentence', 'grammar:weed:1', [1, 2, 3, 4, 5]), tile(z, '#/a/grammar/rewrite/1', '✂️', 'Rewrite with the word in brackets', 'R&W test: replace one word', 'grammar:rewrite:1', [3, 4]), tile(z, '#/a/grammar/exam/1', '🌸', 'Grammar exam mode', '15 mixed questions from Units 1 to 5', 'grammar:exam:1', [1, 2, 3, 4, 5])].join(''), '🌙')
      + [1, 2, 3, 4, 5].map(u => group(`Unit ${u} · ${UN[u]}`, '', byU(u).map(t => tile(z, `#/a/grammar/topic/${t.id}`, t.emoji, t.title, t.src, `grammar:topic:${t.id}`, unitsOf(t))).join('') + tile(z, `#/a/grammar/unit/${u}`, '🎯', `Unit ${u} mixed test`, '12 questions', `grammar:unit:${u}`, [u]), '🌺')).join('')
      + group('From your PSE 2A tests', 'The 7 grammar points the class found hardest before.', tile(z, '#/a/grammar/topic/watch', '🎯', 'Your tricky 7', 'unless, if not, word order, neither nor, modals, word forms', 'grammar:topic:watch', [1, 2, 3]), '🔁')
      + group('Fun', '', chatTile(z, 'grammar'), '💬');
  }
  if (z === 'vocab') {
    body = unitChips()
      + group('Flashcards', 'Flip, listen, check. Swipe right if you know it, left to see it again.', VO.units.map(u => tile(z, `#/a/vocab/cards/${u.id}`, u.emoji, u.title, `${u.words.length} words`, `vocab:cards:${u.id}`, [+u.id.slice(1)])).join(''), '🃏')
      + group('Mid-term vocabulary', 'Complete a paragraph from a box · collocations (one word is not used) · prefixes and suffixes.', MID.LS_VOCAB.map(v => tile(z, `#/a/vocab/para/${v.id}`, '🎧', `L&S: ${v.title}`, '10 gaps from a box', `vocab:para:${v.id}`, [1, 2, 3, 5])).join('') + MID.RW_VOCAB.map(v => tile(z, `#/a/vocab/para/${v.id}`, '📖', `R&W: ${v.title}`, '12 gaps from a box', `vocab:para:${v.id}`, [2, 4, 5])).join('') + MID.COLLOC.map((c, k) => tile(z, `#/a/vocab/colloc/${c.id}`, '🤝', `Collocations · Set ${k + 1}`, ['Transport', 'Environment', 'Health'][k], `vocab:colloc:${c.id}`, [[3], [2], [5]][k])).join('') + [1, 2, 3].map(k => tile(z, `#/a/vocab/affix/${k}`, '🧪', `Prefixes and suffixes · Set ${k}`, '-ful, -less, -able, -ion, -ize, un-, dis-, im-', `vocab:affix:${k}`, [4])).join(''), '🌙')
      + group('Word games', '', VO.recipes.map(r => tile(z, `#/a/vocab/game/${r.id}`, r.emoji, r.id === 'watch' ? 'Your tricky 7 words (PSE 2A tests)' : r.title, r.short, `vocab:game:${r.id}`, r.u)).join('') + tile(z, '#/a/vocab/exam/1', '🌸', 'Vocabulary exam mode', '15 mixed questions', 'vocab:exam:1'), '🍎')
      + group('Fun', '', chatTile(z, 'vocab'), '💬');
  }
  if (z === 'honey') {
    const U5 = VO.units.map(u => u.id);
    body = group('Garden Detective 🔍', 'Who messed up the garden? Fix the witness messages to find the clues.', PLAY.CASES.map(c => tile(z, `#/a/honey/det/${c.id}`, c.emoji, c.title, c.skill, `honey:det:${c.id}`)).join(''), '🕵️‍♀️')
      + group('The Juice Bar & Perfume Atelier', '', tile(z, '#/a/honey/juice', '🧃', 'Juice Bar', 'Blend two fruits to make the collocation the customer orders', 'honey:juice') + tile(z, '#/a/honey/perfume', '🧴', 'Perfume Atelier', 'Add the right essence: prefixes and suffixes', 'honey:perfume') + tile(z, '#/a/honey/bouquet', '💐', 'Bouquet Builder', 'Arrange the word-flowers into perfect sentences', 'honey:bouquet'), '🍹')
      + group('Spelling Hive 🐝', 'Spell the word from its meaning, letter by letter.', U5.map(u => tile(z, `#/a/honey/hive/${u}`, '🍯', `Hive · ${VO.units.find(x => x.id === u).title}`, '8 words', `honey:hive:${u}`)).join(''), '🐝')
      + group('Butterfly Hop 🦋', 'Answer to hop from flower to flower. Every right answer makes a flower bloom.', [0, 1, 2, 3, 4, 5].map(u => tile(z, `#/a/honey/hop/${u}`, '🦋', u ? `Hop · Unit ${u} grammar` : 'Hop · all units', '10 flowers', `honey:hop:${u || 'all'}`)).join(''), '🦋')
      + group('Fruit Sort 🧺', 'Noun, verb or adjective? Drop the fruit in the right basket.', U5.map(u => tile(z, `#/a/honey/sort/${u}`, '🍎', `Sort · ${VO.units.find(x => x.id === u).title}`, '12 fruits', `honey:sort:${u}`)).join(''), '🧺')
      + group('WhatsApp: PSE 2B Garden Girls 💬', 'Your friends make mistakes. Save the group chat!', Object.keys(CH).map(k => tile(z, `#/a/honey/chat/${k}`, CH[k].icon, `${k[0].toUpperCase() + k.slice(1)} chat`, `${CH[k].items.length} messages`, `honey:chat:${k}`)).join(''), '💬');
  }
  if (z === 'exam') {
    body = `<div class="card nightcard"><h3>🌙 How the mid-term works</h3>${['ls', 'rw'].map(k => `<div class="emap"><b>${MID.INFO[k].name}</b><ol>${MID.INFO[k].parts.map(([a, b]) => `<li><b>${a}</b> ${b}</li>`).join('')}</ol></div>`).join('')}<p class="hint">These practice papers copy the format of the Unlock 3 mid-level tests. The texts and recordings are new, so you practise the skills, not the answers.</p></div>`
      + group('Full practice papers', 'A new mix every time you start.', tile(z, '#/a/exam/ls', '🎧', 'Listening & Speaking paper', 'Listening 1 + 2, Language, then the Speaking task', 'exam:ls') + tile(z, '#/a/exam/rw', '📖', 'Reading & Writing paper', 'Reading 1 + 2, Language, Grammar for writing, then the Writing task', 'exam:rw') + tile(z, '#/a/exam/quick', '🌈', 'Quick bloom', '12 mixed questions, all units', 'exam:quick'), '🌟');
  }
  if (z === 'me') return me();
  view.innerHTML = head(z) + `<div class="zbody">${body}</div>`;
  const hi = $('.zhead .zi'); if (hi && document.startViewTransition) hi.style.viewTransitionName = 'hero';
  wireChips(); reveal(); parallax();
}

// ---------------- ACTIVITY PAGES ----------------
function actHead(z, title, sub, backTo) {
  return `<header class="ahead"><a class="back" data-nav href="${backTo || '#/z/' + z}" aria-label="Back">‹</a>${icon(z)}<div><span class="kick">${Z[z].name} · ${Z[z].place}</span><h1>${title}</h1>${sub ? `<p>${sub}</p>` : ''}</div></header>`;
}
function mount(z, title, sub, back) { view.innerHTML = actHead(z, title, sub, back) + '<div class="abody"><div id="act"></div></div>'; const hi = $('.ahead .zi'); if (hi && document.startViewTransition) hi.style.viewTransitionName = 'hero'; return $('#act'); }
const nf = z => { view.innerHTML = actHead(z, 'Not found', 'This flower has not grown yet.') + '<div class="abody"><a class="btn" data-nav href="#/">Back to the garden</a></div>'; };
const byId = (a, id) => a.find(x => x.id === id);
const tabs = (host, list, start = 0) => {
  host.innerHTML = `<div class="tabs" role="tablist">${list.map((t, k) => `<button role="tab" class="tab ${k === start ? 'on' : ''}" data-k="${k}">${t[0]}</button>`).join('')}<span class="tabpill"></span></div><div class="tabbody"></div>`;
  const pill = $('.tabpill', host), body = $('.tabbody', host);
  const show = k => { $$('.tab', host).forEach((b, i) => b.classList.toggle('on', i === k)); const b = $$('.tab', host)[k]; pill.style.width = b.offsetWidth + 'px'; pill.style.transform = `translateX(${b.offsetLeft}px)`; const f = () => { list[k][1](body); reveal(); }; if (document.startViewTransition && !reduced()) document.startViewTransition(f); else f(); };
  $$('.tab', host).forEach(b => b.onclick = () => show(+b.dataset.k)); requestAnimationFrame(() => show(start));
};

// mid-term builders --------------------------------------------------
const opinionQ = ([s, a]) => ({ t: 'mcq', q: `Does the speaker agree or disagree? <b>${s}</b>`, o: ['A · Agree', 'D · Disagree'], a: a === 'A' ? 0 : 1, keep: true, why: a === 'A' ? 'The speaker agrees.' : 'The speaker disagrees.' });
const causeQs = c => c.starts.map((s, k) => ({ t: 'mcq', q: `${s} …`, o: [c.ends[k], ...c.ends.filter((_, j) => j !== k)], a: 0, why: `${s} ${c.ends[k]}` }));
const notesQs = n => n.lines.map((l, k) => ({ t: 'gap', q: l.replace(/\(\d\)\s*_+/, '___'), a: n.ans[k], why: `Answer: ${n.ans[k][0]}` }));
function listenSections(p) {
  const P = []; const mk = (part, tag) => el => { P.push(player(el, { lines: part.script, voices: part.voices, names: part.names, situation: part.situation, scriptLocked: true })); };
  return { P, sections: [
    { tag: 'Listening 1', title: `Taking notes · ${p.l1.title}`, intro: `${p.l1.situation} Complete the notes with ONE word or a number.`, pre: el => { mk(p.l1)(el); el.insertAdjacentHTML('beforeend', `<div class="notes-card"><b>📝 ${p.l1.notes.title}</b></div>`); }, questions: notesQs(p.l1.notes) },
    { tag: 'Listening 1', title: 'Listening for explanations', intro: 'Listen again. Circle the correct answers.', questions: p.l1.mcq },
    { tag: 'Listening 2', title: `Identifying cause and effect · ${p.l2.title}`, intro: `${p.l2.situation} Match the sentence halves.`, pre: el => mk(p.l2)(el), questions: causeQs(p.l2.cause) },
    { tag: 'Listening 2', title: 'Listening for opinion', intro: 'Listen again. Does the speaker agree (A) or disagree (D) with each statement?', questions: p.l2.opinion.map(opinionQ) }] };
}
const visualsHTML = r1 => `<div class="visual-set">${r1.visuals.map(([k, cap]) => `<figure class="photo">${A.PHOTO[k] ? A.PHOTO[k]() : ''}<figcaption>${esc(cap)}</figcaption></figure>`).join('')}</div><p class="ptitle">Title: <b>${esc(r1.title)}</b></p>`;
const articleHTML = (title, paras) => `<article class="text"><h3>${esc(title)}</h3>${paras.map((t, k) => `<p><span class="pn">${k + 1}</span>${esc(t)}</p>`).join('')}</article>`;
function readSections(p) {
  return [
    { tag: 'Reading 1', title: 'Predicting content using visuals', intro: 'Look at the photos and the title. Will the article talk about these things? T = it will be mentioned, F = it will not.', pre: visualsHTML(p.r1), questions: p.r1.predict.map(([s, a]) => ({ t: 'tf', q: s, a, labels: ['T · will be mentioned', 'F · will not'], why: a ? 'You can see this in the photos, captions or title, and the article talks about it.' : 'The photos and title are about something different.' })) },
    { tag: 'Reading 1', title: 'Reading for detail', intro: 'Now read the article. Circle the correct answers.', pre: `<details class="artbox" open><summary>📖 The article</summary>${articleHTML(p.r1.title, p.r1.paras)}</details>`, questions: p.r1.detail },
    { tag: 'Reading 2', title: 'Main ideas in academic texts', intro: 'Read the article. Put the main ideas in the order they appear (tap 1, 2, 3…).', pre: `<details class="artbox" open><summary>📖 The article</summary>${articleHTML(p.r2.title, p.r2.paras)}</details>`, questions: [{ t: 'seq', partial: true, q: 'Number the main ideas in order.', items: p.r2.ideas, why: 'One main idea for each paragraph, in the same order as the text.' }] },
    { tag: 'Reading 2', title: 'Identifying purpose and audience', intro: 'Read the article again. Circle the correct answers.', questions: p.r2.purpose }];
}
const fillPara = v => ({ t: 'fill', text: v.text, box: v.box, ans: v.ans, hint: 'Tap a gap, then a word from the box. Change the form if necessary.' });
const fillColloc = c => ({ t: 'fill', list: true, text: c.items.map(([s], k) => `<span class="ln">${k + 1}</span> ${esc(s)}`).join('<br>'), box: c.box, ans: c.items.map(i => i[1]), hint: 'Tap a gap, then a word. One word in the box is not used.' });
function affixQ(set) { const items = set || pick(MID.AFFIX, 6); const box = shuffle([...new Set([...items.map(i => i[2]), ...shuffle(MID.AFFIX_BOX.filter(b => !items.some(i => i[2] === b))).slice(0, 2)])]); return { t: 'fill', list: true, text: items.map(([clue, base, aff, pos], k) => `<span class="ln">${k + 1}</span> ${esc(clue)}: ${pos === 'start' ? `___${esc(base)}` : `${esc(base)}___`}`).join('<br>'), box, ans: items.map(i => i[2]), hint: 'Complete each word with a prefix or suffix from the box. Two of them are not used.', why: items.map(i => i[4]).join(', ') }; }
const weedQs = n => pick(MID.FIX, n).map(f => ({ t: 'weed', ...f, q: 'Find the mistake and correct it.' }));
const rewriteQs = n => pick(MID.REWRITE, n).map(([s, w, bad, a]) => ({ t: 'edit', q: `Rewrite the sentence using <b>${esc(w)}</b>. Replace <i>${esc(bad)}</i>.`, start: s, word: w, a, why: `Model: ${a[0]}` }));
const orderQs = n => pick(MID.ORDER, n).map(([tiles, why]) => ({ t: 'order', tiles, why }));
const halvesQs = set => { const H = set || pick(MID.HALVES, 1)[0]; const ends = H.map(h => h[1]); return H.map(([s, e]) => ({ t: 'mcq', q: `${s} …`, o: [e, ...ends.filter(x => x !== e)], a: 0, why: `${s} ${e}` })); };
const speakMid = t => ({ id: t.id, unit: 'Mid-term speaking', emoji: t.icon, title: t.topic, time: '2 minutes', prompt: t.prompt, plan: t.plan, model: t.model, phrases: MID.SPEAK_PHRASES, parts: MID.SPEAK_PARTS, minWords: 200, keywords: ['problem', 'solution', 'result', 'will', 'might', 'could', 'if', 'recommend'] });
const summaryTask = t => ({ title: t.title, prompt: t.prompt, article: t.article, table: MID.SUMMARY_TABLE, frame: MID.SUMMARY_FRAME, checks: MID.SUMMARY_CHECKS, model: t.model });
function mixed(n) { const g = GR.topics.flatMap(t => t.q.filter(q => ['mcq', 'tf', 'gap'].includes(q.t)).map(q => ({ ...q, src: t.title }))); return shuffle([...pick(g, Math.ceil(n * .6)), ...shuffle(VO.recipes.filter(r => r.id !== 'stress').flatMap(r => { try { return r.make().slice(0, 2); } catch (e) { return []; } })).slice(0, Math.floor(n * .4))]).slice(0, n); }

function activity(z, kind, rest) {
  const id = rest[0];
  // ---------- LISTENING ----------
  if (z === 'listening') {
    if (kind === 'lesson') { const L = byId(LI.lessons, id); if (!L) return nf(z); const h = mount(z, `${L.emoji} ${L.title}`, L.src);
      h.innerHTML = `<div class="learn">${blocks(L.blocks)}</div>${L.audio ? '<div class="pl-slot"></div>' : ''}<div class="qslot"></div>`; if (L.audio) player($('.pl-slot', h), { lines: L.audio, voices: L.voices || {}, situation: 'Listen, then answer the questions.' });
      if (L.q && L.q.length) runQuiz($('.qslot', h), { title: L.title, questions: L.q, key: `listening:lesson:${L.id}` }); reveal(); return; }
    if (kind === 'test') { const T = byId(LI.tests, id); if (!T) return nf(z); const h = mount(z, `${T.emoji} ${T.title}`, `${T.unit} · ${T.kind}`); let P;
      runPaper(h, { title: T.title, key: `listening:test:${T.id}`, sections: [{ tag: 'Listen twice', title: T.kind, intro: T.situation, pre: el => { P = player(el, { lines: T.script, voices: T.voices, names: T.names, situation: T.situation, scriptLocked: true }); }, questions: T.q }] }); h.addEventListener('paperdone', () => P && P.unlock()); return; }
    if (kind === 'mid') { const p = byId(MID.LISTEN, id); if (!p) return nf(z); const h = mount(z, `🌙 Listening · ${p.title}`, 'Mid-term format: Listening 1 and Listening 2'); const { P, sections } = listenSections(p);
      runPaper(h, { title: `Listening ${p.title}`, key: `listening:mid:${p.id}`, sections, banner: `<div class="pbanner">🎧 Play each recording twice. Answer while you listen. The scripts open after you check.</div>` }); h.addEventListener('paperdone', () => P.forEach(x => x.unlock())); return; }
    if (kind === 'chat') return chat(z, 'listening');
  }
  // ---------- SPEAKING ----------
  if (z === 'speaking') {
    if (kind === 'lesson') { const L = byId(SP.lessons, id); if (!L) return nf(z); const h = mount(z, `${L.emoji} ${L.title}`, L.src); h.innerHTML = `<div class="learn">${blocks(L.blocks)}</div><a class="btn" data-nav href="#/z/speaking">Back to the tasks 🎤</a>`; reveal(); return; }
    if (kind === 'task') { const T = byId(SP.tasks, id); if (!T) return nf(z); speakTask(mount(z, `${T.emoji} ${T.title}`, T.unit), T, `speaking:task:${T.id}`); return; }
    if (kind === 'mid') { const T = byId(MID.SPEAK, id); if (!T) return nf(z); speakTask(mount(z, `${T.icon} ${T.topic}`, 'Mid-term speaking: problem → solutions → predicted results'), speakMid(T), `speaking:mid:${T.id}`); return; }
    if (kind === 'chat') return chat(z, 'speaking');
  }
  // ---------- READING ----------
  if (z === 'reading') {
    if (kind === 'lesson') { const L = byId(RE.lessons, id); if (!L) return nf(z); const h = mount(z, `${L.emoji} ${L.title}`, L.src); h.innerHTML = `<div class="learn">${blocks(L.blocks)}</div><div class="qslot"></div>`; if (L.q && L.q.length) runQuiz($('.qslot', h), { title: L.title, questions: L.q, key: `reading:lesson:${L.id}` }); reveal(); return; }
    if (kind === 'test') { const T = byId(RE.tests, id); if (!T) return nf(z); const h = mount(z, `${T.emoji} ${T.title}`, `${T.unit} · about ${T.words} words`);
      runPaper(h, { title: T.title, key: `reading:test:${T.id}`, sections: [{ tag: 'Read', title: T.heading, intro: 'Read the text, then answer. You can scroll back to the text at any time.', pre: `<div class="text-wrap"><div class="visual">${T.visual}</div>${articleHTML(T.heading, T.text)}</div>`, questions: T.q }] }); return; }
    if (kind === 'mid') { const p = byId(MID.READ, id); if (!p) return nf(z); const h = mount(z, `🌙 Reading · ${p.title}`, 'Mid-term format: Reading 1 and Reading 2'); runPaper(h, { title: `Reading ${p.title}`, key: `reading:mid:${p.id}`, sections: readSections(p) }); return; }
    if (kind === 'chat') return chat(z, 'reading');
  }
  // ---------- WRITING ----------
  if (z === 'writing') {
    if (kind === 'lesson') { const L = byId(WR.lessons, id); if (!L) return nf(z); const h = mount(z, `${L.emoji} ${L.title}`, L.src); h.innerHTML = `<div class="learn">${blocks(L.blocks)}</div>`; reveal(); return; }
    if (kind === 'ex') { const X = byId(WR.exercises, id); if (!X) return nf(z); runQuiz(mount(z, `${X.emoji} ${X.title}`, X.short), { title: X.title, questions: X.q, key: `writing:ex:${X.id}`, intro: X.intro }); return; }
    if (kind === 'task') { const T = byId(WR.tasks, id); if (!T) return nf(z); const h = mount(z, `${T.emoji} ${T.title}`, T.step);
      if (T.model) { h.innerHTML = `<div class="card"><div class="ex"><b>Task:</b> ${esc(T.task)}</div><p class="hint">${esc(T.how || '')}</p>${window.E.planTable(T.table, true)}<h3>The paragraphs</h3>${window.E.LEGEND}${T.model.map(p => window.E.para(p)).join('')}<p class="hint">${esc(T.wordsNote || '')}</p></div>`; return; }
      writeTask(h, { title: T.title, prompt: T.task, table: T.table, checks: [['200 words or more', 'WORDS>=200'], ['Two paragraphs', 'PARAS>=2'], ['An advantage: The main advantage is…', '(advantage|benefit)'], ['A disadvantage: However, …', '(however|disadvantage|drawback)'], ['An example: For example…', '(for example|for instance|such as)']] }, `writing:task:${T.id}`); return; }
    if (kind === 'kit') { const K = byId(KITS, id); if (!K) return nf(z); const h = mount(z, `${K.emoji} ${K.title}`, K.unit);
      tabs(h, [['👀 See it', b => { b.innerHTML = `<div class="learn">${blocks(K.see)}</div>`; }], ['🧱 Build it', b => runQuiz(b, { title: `${K.title}: build it`, questions: K.build, key: `writing:kit:${K.id}` })], ['✍️ Write it', b => writeTask(b, K.task, `writing:kitw:${K.id}`)]]); return; }
    if (kind === 'summary') { const T = byId(MID.SUMMARY, id); if (!T) return nf(z); writeTask(mount(z, `🌙 ${T.title}`, 'Mid-term writing task: summary + personal response'), summaryTask(T), `writing:summary:${T.id}`); return; }
    if (kind === 'gfw') { const k = +id || 1; const h = mount(z, `💐 Grammar for writing · Set ${k}`, 'Mid-term writing test, Part A');
      const make = () => ({ title: `Grammar for writing ${k}`, key: `writing:gfw:${k}`, remake: make, sections: [{ tag: 'Part A · 1', title: 'Put the words in the correct order to make sentences.', questions: orderQs(5) }, { tag: 'Part A · 2', title: 'Match the sentence halves.', questions: halvesQs(MID.HALVES[(k - 1) % MID.HALVES.length]) }] });
      runPaper(h, make()); return; }
    if (kind === 'chat') return chat(z, 'writing');
  }
  // ---------- GRAMMAR ----------
  if (z === 'grammar') {
    if (kind === 'topic') { const T = byId(GR.topics, id); if (!T) return nf(z); const h = mount(z, `${T.emoji} ${T.title}`, T.src);
      tabs(h, [['🌱 Learn', b => { b.innerHTML = `${T.why ? `<div class="why">💡 ${T.why}</div>` : ''}<div class="learn">${blocks(T.learn)}</div><div class="row center"><button class="btn nextt">Practise now 🌼</button></div>`; $('.nextt', b).onclick = () => $$('.tab', h)[1].click(); }],
        ['🌼 Practise', b => runQuiz(b, { title: `${T.title}: practice`, questions: pick(T.q, Math.min(6, T.q.length)), remake: () => pick(T.q, Math.min(6, T.q.length)) })],
        ['🌸 Test', b => runQuiz(b, { title: T.title, questions: shuffle(T.q), key: `grammar:topic:${T.id}` })]]); return; }
    if (kind === 'unit') { const u = +id; const qs = () => pick(GR.topics.filter(t => unitsOf(t).includes(u) && t.id !== 'watch').flatMap(t => t.q.map(q => ({ ...q, src: t.title }))), 12); runQuiz(mount(z, `🎯 Unit ${u} mixed test`, UN[u]), { title: `Grammar Unit ${u}`, questions: qs(), remake: qs, key: `grammar:unit:${u}` }); return; }
    if (kind === 'exam') { const qs = () => pick(GR.topics.filter(t => t.id !== 'watch').flatMap(t => t.q.map(q => ({ ...q, src: t.title }))), 15); runQuiz(mount(z, '🌸 Grammar exam mode', 'Units 1 to 5'), { title: 'Grammar exam', questions: qs(), remake: qs, key: 'grammar:exam:1' }); return; }
    if (kind === 'weed') { const h = mount(z, '🌿 Weed the mistakes', 'L&S language test: correct the mistakes in the sentences'); const make = () => ({ title: 'Weed the mistakes', key: 'grammar:weed:1', remake: make, sections: [{ tag: 'Grammar', title: 'Correct the mistakes in the sentences.', intro: 'Each sentence has ONE mistake (a weed). Tap it, then choose the correction.', questions: weedQs(9) }] }); runPaper(h, make()); return; }
    if (kind === 'rewrite') { const h = mount(z, '✂️ Rewrite with the word in brackets', 'R&W language test: replace one word in each statement'); const make = () => ({ title: 'Rewrite the sentences', key: 'grammar:rewrite:1', remake: make, sections: [{ tag: 'Grammar', title: 'Rewrite each sentence using the words in brackets.', intro: 'Edit the sentence in the box. Change only the word or words in <i>italics</i>.', questions: rewriteQs(8) }] }); runPaper(h, make()); return; }
    if (kind === 'chat') return chat(z, 'grammar');
  }
  // ---------- VOCABULARY ----------
  if (z === 'vocab') {
    if (kind === 'cards') { const U = byId(VO.units, id); if (!U) return nf(z); G.flashcards(mount(z, `${U.emoji} ${U.title}`, 'Flashcards'), id); return; }
    if (kind === 'game') { const R = byId(VO.recipes, id); if (!R) return nf(z); runQuiz(mount(z, `${R.emoji} ${R.title}`, R.short), { title: R.title, questions: R.make(), remake: R.make, key: `vocab:game:${R.id}` }); return; }
    if (kind === 'para') { const v = byId([...MID.LS_VOCAB, ...MID.RW_VOCAB], id); if (!v) return nf(z); const ls = id.startsWith('ls'); runPaper(mount(z, `${ls ? '🎧' : '📖'} ${v.title}`, `${ls ? 'L&S' : 'R&W'} test, Part A: Key vocabulary`), { title: v.title, key: `vocab:para:${v.id}`, sections: [{ tag: 'Part A', title: 'Complete the paragraph with the words in the box.', questions: [fillPara(v)] }] }); return; }
    if (kind === 'colloc') { const c = byId(MID.COLLOC, id); if (!c) return nf(z); runPaper(mount(z, '🤝 Collocations', 'R&W language test, Part B'), { title: 'Collocations', key: `vocab:colloc:${c.id}`, sections: [{ tag: 'Part B', title: 'Complete the collocations using the words in the box. One word is not used.', questions: [fillColloc(c)] }] }); return; }
    if (kind === 'affix') { const k = +id || 1; const set = MID.AFFIX.slice((k - 1) * 8, (k - 1) * 8 + 8); const h = mount(z, `🧪 Prefixes and suffixes · Set ${k}`, 'L&S language test'); const make = () => ({ title: `Prefixes and suffixes ${k}`, key: `vocab:affix:${k}`, remake: make, sections: [{ tag: 'Vocabulary', title: 'Complete the words with the correct prefix or suffix in the box.', questions: [affixQ(pick(set, 6))] }] }); runPaper(h, make()); return; }
    if (kind === 'exam') { runQuiz(mount(z, '🌸 Vocabulary exam mode', 'Units 1 to 5'), { title: 'Vocabulary exam', questions: [...VO.exam().slice(0, 12), ...byId(VO.recipes, 'u5').make().slice(0, 3)], remake: () => [...VO.exam().slice(0, 12), ...byId(VO.recipes, 'u5').make().slice(0, 3)], key: 'vocab:exam:1' }); return; }
    if (kind === 'chat') return chat(z, 'vocab');
  }
  // ---------- HONEY LAB ----------
  if (z === 'honey') {
    if (kind === 'det') { const C = byId(PLAY.CASES, id); if (!C) return nf(z); G.detective(mount(z, `🔍 ${C.title}`, 'Garden Detective'), id); return; }
    if (kind === 'juice') return G.juiceBar(mount(z, '🧃 The Juice Bar', 'Blend two word-fruits to make the collocation'));
    if (kind === 'perfume') return G.perfume(mount(z, '🧴 The Perfume Atelier', 'Prefixes and suffixes'));
    if (kind === 'hive') { const U = byId(VO.units, id); if (!U) return nf(z); return G.hive(mount(z, '🐝 Spelling Hive', U.title), id); }
    if (kind === 'hop') { const u = +id || 0; return G.hop(mount(z, '🦋 Butterfly Hop', u ? `Unit ${u} grammar` : 'All units'), u); }
    if (kind === 'sort') { const U = byId(VO.units, id); if (!U) return nf(z); return G.fruitSort(mount(z, '🧺 Fruit Sort', U.title), id); }
    if (kind === 'bouquet') { const qs = () => [...orderQs(6), ...pick(GR.topics.flatMap(t => t.q.filter(q => q.t === 'order')), 4)]; const h = mount(z, '💐 Bouquet Builder', 'Word order'); h.classList.add('bouquet'); runQuiz(h, { title: 'Bouquet Builder', questions: qs(), remake: qs, key: 'honey:bouquet', intro: '💐 Tap the word-flowers in the right order to make a perfect sentence bouquet.' }); return; }
    if (kind === 'chat') return chat(z, id);
  }
  // ---------- MOCK EXAM ----------
  if (z === 'exam') {
    if (kind === 'ls') { const h = mount(z, '🎧 Listening & Speaking paper', 'Mid-term practice · a new mix every time');
      const make = () => { const p = pick(MID.LISTEN, 1)[0]; const L = listenSections(p); h._P = L.P; return { title: 'L&S paper', key: 'exam:ls', remake: make, banner: `<div class="pbanner">🌙 ${p.title}: play each recording twice. Then do the Language part. The Speaking task is at the end.</div>`,
        sections: [...L.sections, { tag: 'Language A', title: 'Key vocabulary', questions: [fillPara(pick(MID.LS_VOCAB, 1)[0])] }, { tag: 'Language B', title: 'Grammar: correct the mistakes', questions: weedQs(6) }, { tag: 'Language B', title: 'Vocabulary: prefixes and suffixes', questions: [affixQ()] }] }; };
      runPaper(h, make()); h.addEventListener('paperdone', () => (h._P || []).forEach(x => x.unlock()));
      h.parentElement.insertAdjacentHTML('beforeend', `<div class="card speakcard"><h3>🎤 Speaking</h3><p>Prepare a table of solutions and predicted results, then speak for at least two minutes.</p><div class="row">${MID.SPEAK.map(t => `<a class="btn sm ghost" data-nav href="#/a/speaking/mid/${t.id}">${t.icon} ${esc(t.topic)}</a>`).join('')}</div></div>`); return; }
    if (kind === 'rw') { const h = mount(z, '📖 Reading & Writing paper', 'Mid-term practice · a new mix every time'); let p;
      const make = () => { p = pick(MID.READ, 1)[0]; const sl = $('#sumlink'); if (sl) { const sm = byId(MID.SUMMARY, 'sum-' + p.id); sl.href = '#/a/writing/summary/' + sm.id; sl.textContent = `Write about "${sm.title}"`; } const cset = pick(MID.COLLOC, 1)[0]; return { title: 'R&W paper', key: 'exam:rw', remake: make, banner: `<div class="pbanner">🌙 ${p.title}. Reading, Language and Grammar for writing. The writing task (summary + response) is at the end.</div>`,
        sections: [...readSections(p), { tag: 'Language A', title: 'Key vocabulary', questions: [fillPara(pick(MID.RW_VOCAB, 1)[0])] }, { tag: 'Language B', title: 'Vocabulary: collocations', questions: [fillColloc(cset)] }, { tag: 'Language B', title: 'Grammar: rewrite with the words in brackets', questions: rewriteQs(6) }, { tag: 'Writing A', title: 'Put the words in order', questions: orderQs(5) }, { tag: 'Writing A', title: 'Match the sentence halves', questions: halvesQs() }] }; };
      runPaper(h, make()); const sum = byId(MID.SUMMARY, 'sum-' + p.id);
      h.parentElement.insertAdjacentHTML('beforeend', `<div class="card speakcard"><h3>✍️ Writing task</h3><p>Write a summary paragraph about the article in Reading 1, then a response paragraph.</p><a class="btn" id="sumlink" data-nav href="#/a/writing/summary/${sum.id}">Write about "${esc(sum.title)}"</a></div>`); return; }
    if (kind === 'quick') { runQuiz(mount(z, '🌈 Quick bloom', '12 mixed questions'), { title: 'Quick bloom', questions: mixed(12), remake: () => mixed(12), key: 'exam:quick' }); return; }
  }
  nf(z);
}
function chat(z, grp) { const C = CH[grp]; if (!C) return nf(z); chatGame(mount(z, '💬 Garden Girls chat', `${grp[0].toUpperCase() + grp.slice(1)}: fix your friends' messages`), C, `${z}:chat:${grp}`); }

// ---------------- MY GARDEN (progress) ----------------
function me() {
  const rows = ORDERZ.filter(z => z !== 'me').map(z => ({ z, ...S.zone(z) }));
  view.innerHTML = head('me', S.name ? `${esc(S.name)}'s flower bed` : 'Your flower bed') + `<div class="zbody">
    <div class="card honeycard"><div class="bigjar"><div class="bj"><div class="bjf" style="transform:scaleY(${Math.min(1, .08 + S.honey() / 1500)})"></div></div></div><div><b>${S.honey()}</b> drops of honey 🍯<p class="hint">You get one drop for every mark, and your best score counts. Beat your best to collect more.</p></div></div>
    <div class="bed">${rows.map(r => { const h = Math.min(100, 18 + r.done * 14); return `<a class="plant" data-nav href="#/z/${r.z}" style="--zc:${Z[r.z].c};--h:${h}%">${icon(r.z)}<span class="stem"></span><b>${Z[r.z].name}</b><small>${r.done} bloomed · ${r.tried} tried</small></a>`; }).join('')}</div>
    <div class="card"><h3>🌸 My best scores</h3>${Object.keys(localBest()).length ? `<table class="tbl">${Object.entries(localBest()).sort((a, b) => b[1].t - a[1].t).slice(0, 40).map(([k, b]) => `<tr><td>${esc(prettyKey(k))}</td><td><b>${b.got}/${b.max}</b></td><td>${b.pct}%</td></tr>`).join('')}</table>` : '<p class="hint">Nothing yet. Fly to a flower and start! 🦋</p>'}</div>
    <div class="card"><h3>🌷 My name</h3><div class="row"><input id="nmi" value="${esc(S.name)}" maxlength="24" placeholder="Your first name"><button class="btn sm" id="nms">Save</button></div><p class="hint">Your scores are saved only on this phone or computer.</p><button class="btn sm ghost" id="rst">Start a new garden (delete my scores)</button></div></div>`;
  $('#nms').onclick = () => { S.name = $('#nmi').value; toast('Saved 🌷'); };
  $('#rst').onclick = e => { if (!e.target.dataset.sure) { e.target.dataset.sure = 1; e.target.textContent = 'Are you sure? Tap again to delete'; return; } S.reset(); updateJar(); me(); toast('A fresh garden 🌱'); };
  reveal(); parallax();
}
function localBest() { const o = {}; try { const raw = JSON.parse(localStorage.getItem('bloombuzz_v1') || '{}'); return raw.best || o; } catch (e) { return o; } }
function prettyKey(k) { const [z, kind, id] = k.split(':'); return `${(Z[z] || { name: z }).name} · ${kind} · ${id}`; }

// ---------------- motion helpers ----------------
let io;
function reveal() {
  if (!('IntersectionObserver' in window) || reduced()) { $$('.rv').forEach(e => e.classList.add('in')); return; }
  io && io.disconnect(); io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px' });
  $$('.rv:not(.in)').forEach(e => io.observe(e));
}
let pxOn = false;
function parallax() { if (pxOn || reduced()) return; pxOn = true; let tk = false; addEventListener('scroll', () => { if (tk) return; tk = true; requestAnimationFrame(() => { const s = $('.zhead svg, .hero > svg'); if (s) s.style.transform = `translateY(${Math.min(120, scrollY * .35)}px) scale(${1 + Math.min(.15, scrollY / 2000)})`; tk = false; }); }, { passive: true }); }

shell(); render(); parallax();
})();
