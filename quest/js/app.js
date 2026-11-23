// QUEST UNLOCKED · The Isle of Five Keys · app shell, map, zones and router
(function () {
const E = window.E; const { $, $$, esc, S, toast, sfx, updateCoins, blocks, runQuiz, player, speakTask, writeTask, stopSpeech, speak, reduced, shuffle, pick } = E;
const G = window.GAMES, A = window.ART, Q = window.QUEST; const UN = n => Q.units[n];
const app = $('#app');
const UNITS = [1, 2, 3, 4, 5];

// ---------------- zones ----------------
const Z = {
  camp: { name: 'Base Camp', skill: 'Progress', sub: 'Shipwreck Beach · your keys, coins and settings', e: '⛺' },
  vocab: { name: 'Whispering Jungle', skill: 'Words', sub: 'Vocabulary · tigers and snakes hide behind every new word', e: '🌴' },
  u1: { name: 'Lost City Ruins', skill: 'Unit 1', sub: 'Unit 1 · Places', e: '🏛️', u: 1 },
  reading: { name: 'Crystal Lake', skill: 'Reading', sub: 'Reading · row across the lake, one text at a time', e: '📖' },
  u2: { name: 'Lantern Village', skill: 'Unit 2', sub: 'Unit 2 · Festivals and Celebrations', e: '🏮', u: 2 },
  listening: { name: 'Starlight Camp', skill: 'Listening', sub: 'Listening · stories around the fire at midnight', e: '🔥' },
  u3: { name: 'Radio Tower', skill: 'Unit 3', sub: 'Unit 3 · The Internet and Technology', e: '📡', u: 3 },
  speaking: { name: 'Echo Cave', skill: 'Speaking', sub: 'Speaking · your voice comes back to you', e: '🦇' },
  grammar: { name: 'Fire Mountain', skill: 'Grammar', sub: 'Grammar · cross the lava with the right rule', e: '🌋' },
  writing: { name: 'Broken Bridge', skill: 'Writing', sub: 'Writing · build your paragraph plank by plank', e: '🌉' },
  u4: { name: 'Frozen Peak', skill: 'Unit 4', sub: 'Unit 4 · Weather and Climate', e: '🏔️', u: 4 },
  u5: { name: 'Golden Dunes', skill: 'Unit 5', sub: 'Unit 5 · Sports and Competition', e: '🐪', u: 5 },
  arena: { name: "Champions' Ring", skill: 'Boxing', sub: 'Grammar Boxing · three rounds against Captain Error', e: '🥊' },
  tower: { name: 'The Lighthouse', skill: 'PSE 2B', sub: 'PSE 2B preparation · the ship to PSE 2 and university', e: '⛵' },
  treasure: { name: 'Treasure Cave', skill: 'Treasure', sub: 'The final challenge · five keys open the chest', e: '💰' }
};
const zMeta = k => k === 'arena' && S.g === 'f' ? { ...Z.arena, name: 'Style Studio', skill: 'Style', sub: 'Modest fashion · colours, clothes and reading for detail', e: '👗' } : Z[k];
const SCN = k => k === 'arena' && S.g === 'f' ? A.SCENE.studio() : (A.SCENE[k] || A.SCENE.camp)();
const DOCK = [['', '🗺️', 'Map'], ['vocab', '🌴', 'Words'], ['grammar', '🌋', 'Grammar'], ['reading', '📖', 'Read'], ['listening', '🔥', 'Listen'], ['speaking', '🦇', 'Speak'], ['writing', '🌉', 'Write']];
const FOOT = '<footer class="foot"><b>Quest Unlocked</b> · The Isle of Five Keys<br><span>Created by Aqeela</span></footer>';

// progress helpers
const stars = p => p == null ? '' : p >= 90 ? '⭐⭐⭐' : p >= 70 ? '⭐⭐' : p >= 50 ? '⭐' : '☆';
const best = k => { const b = S.best(k); return b ? b.pct : null; };
const badge = k => { const p = best(k); return p == null ? '<span class="bd new">new</span>' : `<span class="bd ${p >= 70 ? 'ok' : ''}">${p}% ${p >= 70 ? '✓' : ''}</span>`; };
const zoneDone = z => S.zone(z).done;

// ---------------- shell ----------------
function shell() {
  $('#top').innerHTML = `<a class="brand" href="#/"><span class="logo">${logo()}</span><span><b>Quest Unlocked</b><small>The Isle of Five Keys</small></span></a>
    <div class="topr"><a class="keypill" href="#/treasure" aria-label="Keys">${A.keyIcon(true)}<b id="keyN">${S.keys()}</b>/5</a><a class="coinpill" id="chest" href="#/camp" aria-label="Gold coins"><span class="coin"></span><b id="coinN">${S.coins()}</b></a>
    <button class="tbtn snd" aria-label="Sound on or off">${S.sound ? '🔊' : '🔇'}</button></div>`;
  $('.snd').onclick = e => { S.sound = !S.sound; e.currentTarget.textContent = S.sound ? '🔊' : '🔇'; if (S.sound) sfx('coin'); };
  $('#dock').innerHTML = DOCK.map(([k, e, l]) => `<a href="#/${k}" data-k="${k}"><span class="dpill"></span><span class="di">${e}</span><span class="dl">${l}</span></a>`).join('');
}
const logo = () => `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="19" fill="var(--a1)"/><path d="M8 26 Q20 6 32 26 Z" fill="var(--a2)"/><path d="M20 10 V26" stroke="#fff" stroke-width="2"/><path d="M21 11 L29 17 L21 19 Z" fill="#fff"/><path d="M6 28 Q20 34 34 28" stroke="#fff" stroke-width="2.4" fill="none"/></svg>`;
function setDock(z) { $$('#dock a').forEach(a => a.classList.toggle('on', a.dataset.k === (z || ''))); }
function theme(z) { document.body.className = `g-${S.g || 'm'} z-${z || 'home'}`; const m = document.querySelector('meta[name=theme-color]'); if (m) setTimeout(() => m.content = getComputedStyle(document.body).getPropertyValue('--z').trim() || '#1D3FA8', 30); }

// ---------------- router with morph transitions ----------------
const parse = () => { const [z, u, it] = location.hash.replace(/^#\/?/, '').split('/'); return { z: z || '', u: u || '', it: it || '' }; };
let lastZ = null;
function nav() {
  stopSpeech(); const r = parse();
  const draw = () => {
    if (!S.name || !S.g) { theme('home'); onboarding(); return; }
    if (!r.z || !Z[r.z]) { theme('home'); setDock(''); home(); }
    else { theme(r.z); setDock(r.z); zone(r); }
    updateCoins(); reveal();
  };
  const same = lastZ === r.z && r.z; lastZ = r.z;
  if (document.startViewTransition && !reduced()) { const t = document.startViewTransition(() => { draw(); if (!same) window.scrollTo(0, 0); }); t.ready.catch(() => {}); t.updateCallbackDone.catch(() => {}); t.finished.catch(() => {}).finally(() => $$('[data-vt]').forEach(x => { x.style.viewTransitionName = ''; })); }
  else { draw(); if (!same) window.scrollTo(0, 0); }
  if (same) { const a = $('.act'); if (a && (r.it || (r.u && (Z[r.z].u || r.z === 'arena')))) setTimeout(() => a.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' }), 60); }
}
window.addEventListener('hashchange', nav);
function reveal() { const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .08 }) : null; $$('.rv').forEach((el, i) => { el.style.setProperty('--i', i % 6); io ? io.observe(el) : el.classList.add('in'); }); }

// ---------------- onboarding: name + boy / girl ----------------
function onboarding() {
  let g = S.g || '';
  app.innerHTML = `<section class="welcome"><div class="wmap">${A.map(g || 'm')}</div><div class="wcard"><span class="kick">Welcome, explorer!</span><h1>Quest Unlocked</h1><p class="wsub">The Isle of Five Keys</p>
    <p>An island full of obstacles: a volcano, a frozen peak, a broken bridge, a jungle with wild animals… Beat them with English, win <b>five keys</b> and open the <b>treasure chest</b>.</p>
    <label class="nm">What is your name?<input id="nmi" maxlength="20" autocomplete="given-name" placeholder="Your first name" value="${esc(S.name)}"></label>
    <p class="nm">Choose your explorer</p><div class="gpick"><button class="gp ${g === 'm' ? 'on' : ''}" data-g="m"><svg viewBox="-40 -155 80 160">${A.person('m')}</svg><b>Boy</b></button><button class="gp ${g === 'f' ? 'on' : ''}" data-g="f"><svg viewBox="-40 -155 80 160">${A.person('f')}</svg><b>Girl</b></button></div>
    <button class="btn big start">Start the adventure ⛵</button></div></section>${FOOT}`;
  $$('.gp').forEach(b => b.onclick = () => { g = b.dataset.g; $$('.gp').forEach(x => x.classList.toggle('on', x === b)); document.body.className = `g-${g} z-home`; $('.wmap').innerHTML = A.map(g); sfx('step'); });
  $('.start').onclick = () => { const n = $('#nmi').value.trim(); if (!n) { toast('Write your name first ✏️'); $('#nmi').focus(); return; } if (!g) { toast('Choose boy or girl 🧭'); return; } S.name = n; S.g = g; sfx('win'); shell(); if (location.hash && location.hash !== '#/') location.hash = '#/'; else nav(); };
}

// ---------------- home: the island map ----------------
function pinHTML([k, x, y]) {
  const m = zMeta(k); const u = m.u; const done = u ? S.key(u) : k === 'treasure' ? S.best('final') && S.best('final').pct >= 70 : zoneDone(k) > 0;
  const extra = u ? `<span class="pk ${S.key(u) ? 'on' : ''}">${A.keyIcon(S.key(u))}</span>` : (zoneDone(k) ? `<span class="pc">⭐${zoneDone(k)}</span>` : '');
  return `<a class="pin p-${k} ${done ? 'done' : ''}" href="#/${k}" data-k="${k}" style="left:${x / 9}%;top:${y / 12}%"><span class="pe">${m.e}</span><span class="pl"><b>${m.skill}</b><small>${m.name}</small></span>${extra}</a>`;
}
function home() {
  const ks = S.keys(); const here = S.draft('here') || 'camp';
  app.innerHTML = `<section class="mhero rv"><div><span class="kick">Hello, ${esc(S.name)}! ${S.g === 'f' ? '🧕' : '🧢'}</span><h1>The Isle of Five Keys</h1><p>Tap a place on the map. Learn, then beat the obstacle. Win the five unit quests to collect the keys and open the treasure.</p></div>
    <div class="keybar">${UNITS.map(u => `<a href="#/u${u}" class="kk ${S.key(u) ? 'on' : ''}">${A.keyIcon(S.key(u))}<small>U${u}</small></a>`).join('')}<span class="kmsg">${ks === 5 ? 'All keys! Go to the Treasure Cave 💰' : `${ks} / 5 keys`}</span></div></section>
    <div class="mapwrap rv"><div class="mapbox">${A.map(S.g)}<div class="pins">${A.STOPS.map(pinHTML).join('')}</div><div class="avatar"><svg viewBox="-40 -158 80 162">${A.person(S.g)}</svg></div></div></div>
    <section class="howto rv"><h2>How to play</h2><div class="steps3"><div><span>1</span><b>Learn</b><small>Words, grammar, reading, listening, speaking and writing for every unit.</small></div><div><span>2</span><b>Challenge</b><small>Every game is a real English test. Read the explanation after each answer.</small></div><div><span>3</span><b>Win the keys</b><small>Beat the five unit quests with 70% or more. Then open the treasure!</small></div></div></section>
    <section class="zlist rv"><h2>All places</h2><div class="ztiles">${A.STOPS.map(([k]) => { const m = zMeta(k); return `<a class="ztile zt-${k}" href="#/${k}"><span class="te">${m.e}</span><span><b>${m.name}</b><small>${m.sub}</small></span></a>`; }).join('')}</div></section>${FOOT}`;
  placeAvatar(here);
  $$('.pin').forEach(p => p.onclick = e => { e.preventDefault(); walkTo(p.dataset.k, () => { p.querySelector('.pe').style.viewTransitionName = 'zicon'; p.querySelector('.pe').dataset.vt = 1; location.hash = '#/' + p.dataset.k; }); });
}
// walking avatar along the dotted trail
let trailCache = null;
function trailInfo() {
  const path = $('#trail'); if (!path) return null; const L = path.getTotalLength(); const N = 500; const pts = [];
  for (let i = 0; i <= N; i++) { const p = path.getPointAtLength(L * i / N); pts.push([p.x, p.y]); }
  const at = {}; A.STOPS.forEach(([k, x, y]) => { let bi = 0, bd = 1e9; pts.forEach(([px, py], i) => { const d = (px - x) ** 2 + (py - y) ** 2; if (d < bd) { bd = d; bi = i; } }); at[k] = L * bi / N; });
  return (trailCache = { path, L, at });
}
function placeAvatar(k) { const t = trailInfo(); const av = $('.avatar'); if (!t || !av) return; const p = t.path.getPointAtLength(t.at[k] || 0); av.style.left = p.x / 9 + '%'; av.style.top = p.y / 12 + '%'; }
function walkTo(k, done) {
  const t = trailCache || trailInfo(); const av = $('.avatar'); const from = S.draft('here') || 'camp'; S.draft('here', k);
  if (!t || !av || reduced() || from === k) return done();
  const a = t.at[from] || 0, b = t.at[k] || 0; const dur = Math.min(1300, 380 + Math.abs(b - a) * .55); const t0 = performance.now(); av.classList.add('walk'); sfx('step');
  const step = now => { const f = Math.min(1, (now - t0) / dur); const e = f < .5 ? 2 * f * f : 1 - (-2 * f + 2) ** 2 / 2; const p = t.path.getPointAtLength(a + (b - a) * e); av.style.left = p.x / 9 + '%'; av.style.top = p.y / 12 + '%'; av.classList.toggle('flip', b < a);
    if (f < 1) requestAnimationFrame(step); else { av.classList.remove('walk'); setTimeout(done, 120); } };
  requestAnimationFrame(step);
}

// ---------------- zone pages ----------------
function zhead(k, extra) {
  const m = zMeta(k);
  return `<header class="zhead">${SCN(k)}<div class="zshade"></div><a class="back" href="#/" aria-label="Back to the map">‹</a><div class="zt"><span class="zi" style="view-transition-name:zicon">${m.e}</span><div><span class="kick">${m.skill}</span><h1>${m.name}</h1><p>${m.sub}</p></div></div>${extra || ''}</header>`;
}
function uchips(k, u) { return `<div class="uchips">${UNITS.map(n => `<a class="uc ${n === u ? 'on' : ''}" href="#/${k}/${n}">U${n} · ${UN(n).title.split(' ')[0]}</a>`).join('')}</div>`; }
function tile(href, e, t, s, key, cls = '') { return `<a class="tile-z ${cls}" href="${href}"><span class="te">${e}</span><span class="tt"><b>${t}</b><small>${s}</small></span>${key ? badge(key) : ''}</a>`; }
function zone(r) {
  const k = r.z, m = Z[k];
  if (k === 'camp') return camp();
  if (m.u) return unitZone(k, m.u, r.u);
  if (k === 'arena') return arena(r.u);
  if (k === 'tower') return lighthouse(r.u, r.it);
  if (k === 'treasure') { app.innerHTML = zhead(k) + '<div class="zbody"><div class="act"></div></div>' + FOOT; G.treasure($('.act')); return; }
  const u = Math.min(5, Math.max(1, +r.u || +(S.draft('u:' + k)) || 1)); S.draft('u:' + k, String(u));
  app.innerHTML = `${zhead(k)}<div class="zbody">${uchips(k, u)}<div class="uhead rv"><span class="ue">${UN(u).emoji}</span><div><b>Unit ${u} · ${UN(u).title}</b><small>${UN(u).tag}</small></div></div><div class="zc"></div></div>${FOOT}`;
  const host = $('.zc');
  ({ vocab: vocabZone, grammar: grammarZone, reading: readingZone, listening: listeningZone, speaking: speakingZone, writing: writingZone })[k](host, u, r.it);
}
const backTo = (k, u) => `<a class="btn sm ghost backz" href="#/${k}/${u}">‹ Back</a>`;

// --- Whispering Jungle: vocabulary
function vocabZone(host, u, it) {
  const U = UN(u), W = U.words;
  if (!it) {
    host.innerHTML = `<div class="tiles-z rv">${tile(`#/vocab/${u}/cards`, '🃏', 'Flashcards', `${W.length} words · tap to flip, listen, learn`, null)}${tile(`#/vocab/${u}/meaning`, '🐅', 'Tiger Trail · meanings', 'Choose the right meaning before the tiger catches you', `vocab:${u}:meaning`)}${tile(`#/vocab/${u}/gap`, '🐍', 'Snake Swamp · sentences', 'Put the right word in the sentence', `vocab:${u}:gap`)}${tile(`#/vocab/${u}/word`, '🦜', 'Parrot Talk · find the word', 'Read the meaning, find the word', `vocab:${u}:word`)}${tile(`#/vocab/${u}/spell`, '🐊', 'Crocodile River · spelling', 'Type the word. Every letter counts!', `vocab:${u}:spell`)}</div>
      <div class="card rv"><h3>Word list · Unit ${u}</h3><p class="hint">RW = Reading &amp; Writing book · LS = Listening &amp; Speaking book</p><div class="wlist">${W.map(w => `<div><b>${esc(w[0])}</b> <span class="pos">${w[1]}</span> <span class="bk ${w[4]}">${w[4]}</span><br><small>${esc(w[2])}</small></div>`).join('')}</div></div>`;
    return;
  }
  host.innerHTML = `${backTo('vocab', u)}<div class="act"></div>`; const a = $('.act', host);
  if (it === 'cards') return cards(a, W, u);
  const names = { meaning: 'Tiger Trail', gap: 'Snake Swamp', word: 'Parrot Talk', spell: 'Crocodile River' };
  const make = () => shuffle(G.vocabQs(W, it)).slice(0, 12);
  runQuiz(a, { title: `${names[it]} · Unit ${u}`, questions: make(), remake: make, key: `vocab:${u}:${it}`, track: it === 'spell' ? 'lake' : 'jungle', lives: 4, intro: 'Every word comes with its meaning and an example after you answer. Four lives!' });
}
function cards(host, W, u) {
  let i = 0, list = W.slice();
  const draw = () => { const w = list[i];
    host.innerHTML = `<div class="fc-wrap"><div class="fcount">${i + 1} / ${list.length}</div><button class="fcard" aria-label="Flip the card"><div class="fcin"><div class="ff front"><span class="bk ${w[4]}">${w[4]}</span><b>${esc(w[0])}</b><small>${w[1]}</small><span class="hint">Tap to flip</span></div><div class="ff back"><b>${esc(w[0])}</b><p>${esc(w[2])}</p><p class="exs">“${esc(w[3])}”</p></div></div></button>
      <div class="row center"><button class="btn ghost prev">‹ Back</button><button class="btn ghost hear">🔊 Listen</button><button class="btn next">Next ›</button></div><div class="row center"><button class="btn sm ghost shf">🔀 Shuffle</button><a class="btn sm" href="#/vocab/${u}/meaning">Test me 🐅</a></div></div>`;
    $('.fcard', host).onclick = e => { e.currentTarget.classList.toggle('flip'); sfx('step'); };
    $('.prev', host).onclick = () => { i = (i - 1 + list.length) % list.length; draw(); }; $('.next', host).onclick = () => { i = (i + 1) % list.length; draw(); };
    $('.hear', host).onclick = () => speak([[null, w[0] + '. ' + w[3]]], { rate: .85 }); $('.shf', host).onclick = () => { list = shuffle(list); i = 0; draw(); };
  };
  draw();
}
// --- Fire Mountain: grammar
function grammarZone(host, u, it) {
  const U = UN(u);
  if (!it) { host.innerHTML = `<div class="tiles-z rv">${U.grammar.map(g => tile(`#/grammar/${u}/${g.id}`, g.emoji, g.title, `${g.book} · ${g.short}`, `grammar:${u}:${g.id}`)).join('')}${tile(`#/grammar/${u}/mix`, '🌋', 'Volcano Run · all Unit ' + u + ' grammar', '12 mixed questions, 3 lives', `grammar:${u}:mix`, 'hot')}</div>`; return; }
  host.innerHTML = `${backTo('grammar', u)}<div class="act"></div>`; const a = $('.act', host);
  if (it === 'mix') { const make = () => pick(G.gramOf(u), 12); return runQuiz(a, { title: `Volcano Run · Unit ${u}`, questions: make(), remake: make, key: `grammar:${u}:mix`, track: 'volcano', lives: 3, intro: 'Jump from rock to rock over the lava. Three lives!' }); }
  const g = U.grammar.find(x => x.id === it); if (!g) return;
  a.innerHTML = `<div class="learn"><h2>${g.emoji} ${g.title}</h2><p class="hint">${g.book} book · ${g.short}</p>${blocks(g.learn)}<div class="center"><button class="btn big go">I'm ready: cross the lava 🌋</button></div></div><div class="qhost"></div>`;
  reveal();
  $('.go', a).onclick = () => { $('.go', a).hidden = true; const qh = $('.qhost', a); runQuiz(qh, { title: g.title, questions: g.qs, key: `grammar:${u}:${g.id}`, track: 'volcano', lives: 3 }); qh.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' }); };
}
// --- Crystal Lake: reading
function readingZone(host, u) {
  const R = UN(u).reading;
  host.innerHTML = `<details class="way skill rv" ${best(`reading:${u}`) == null ? 'open' : ''}><summary><b>🧭 Skill: ${R.skill.title}</b></summary>${blocks(R.skill.blocks)}</details>
    <article class="text rv"><h3>${esc(R.title)}</h3>${R.sub ? `<p class="hint"><i>${esc(R.sub)}</i></p>` : ''}${R.paras.map((p, k) => `<p><span class="pn">${k + 1}</span>${esc(p)}</p>`).join('')}</article>
    <div class="center"><button class="btn big go">Row across the lake: answer the questions 🚣</button></div><div class="act"></div>`;
  $('.go', host).onclick = e => { e.currentTarget.hidden = true; runQuiz($('.act', host), { title: R.title, questions: R.qs, key: `reading:${u}`, track: 'lake', intro: 'Scroll up to the text whenever you need it. The paragraph numbers help you.' }); };
}
// --- Starlight Camp: listening
function listeningZone(host, u) {
  const L = UN(u).listening;
  host.innerHTML = `<details class="way skill rv" ${best(`listening:${u}`) == null ? 'open' : ''}><summary><b>🧭 Skill: ${L.skill.title}</b></summary>${blocks(L.skill.blocks)}</details><h3>🎧 ${esc(L.title)}</h3><div class="ph"></div><div class="act"></div>`;
  const pl = player($('.ph', host), { lines: L.script, voices: L.voices, names: L.names, situation: L.situation, scriptLocked: true });
  runQuiz($('.act', host), { title: L.title, questions: L.qs, key: `listening:${u}`, track: 'camp', intro: 'Listen first (two times), then answer. The script opens when you finish.', onDone: () => pl.unlock() });
}
// --- Echo Cave: speaking
function speakingZone(host, u) {
  const T = UN(u).speaking;
  host.innerHTML = `<details class="way skill rv" open><summary><b>🧭 Skill: ${T.skill.title}</b></summary>${blocks(T.skill.blocks)}</details><h3>🗣️ ${esc(T.title)}</h3><div class="act"></div>`;
  speakTask($('.act', host), T, `speaking:${u}`);
}
// --- Broken Bridge: writing
function writingZone(host, u, it) {
  const Wr = UN(u).writing; const t = it || 'learn';
  host.innerHTML = `<div class="tabs3">${[['learn', '1 · Learn'], ['build', '2 · Build'], ['write', '3 · Write']].map(([k, l]) => `<a class="t3 ${t === k ? 'on' : ''}" href="#/writing/${u}/${k}">${l}${k === 'build' ? ' ' + badge(`writing:${u}:build`) : k === 'write' ? ' ' + badge(`writing:${u}`) : ''}</a>`).join('')}</div><div class="act"></div>`;
  const a = $('.act', host);
  if (t === 'learn') { a.innerHTML = `<div class="learn"><h2>✍️ ${Wr.skill.title}</h2>${blocks(Wr.skill.blocks)}<div class="center"><a class="btn big" href="#/writing/${u}/build">Build the bridge 🌉</a></div></div>`; $$('[data-graph]', a).forEach(el => el.innerHTML = G.graphSVG(Wr.graph)); reveal(); }
  else if (t === 'build') { runQuiz(a, { title: `Bridge builder · Unit ${u}`, questions: u === 4 ? Wr.build.map((q, k) => k < 5 ? { ...q, q: `<div class="qgraph">${G.graphSVG(Wr.graph, true)}</div>` + q.q } : q) : Wr.build, key: `writing:${u}:build`, track: 'bridge', intro: 'Every correct answer puts a plank on the bridge.' }); }
  else { if (u === 4) a.insertAdjacentHTML('beforebegin', `<div class="card">${G.graphSVG(Wr.graph)}</div>`); writeTask(a, Wr.task, `writing:${u}`); const pad = $('.essay', a); if (pad) pad.addEventListener('input', () => { const w = (pad.value.match(/[A-Za-z']+/g) || []).length; if (w >= 50 && !S.best(`writing:${u}`)) { S.result(`writing:${u}`, 7, 10); updateCoins(); toast('Great writing! +7 gold coins ✍️'); } }); }
}

// --- unit zones: the five keys
const UNIT_GAMES = {
  1: [['hunt', '🪨', 'Number Hunt · THE KEY QUEST', 'Scan the stone tablet for numbers. 25 seconds per question!', 'quest:1', G.numberHunt], ['market', '🎒', 'Supply Market', 'a / an, some, any, much, many, a few, a little', 'game:market', G.market]],
  2: [['lanterns', '🏮', 'Light the Lanterns · THE KEY QUEST', 'Light 9 of 12 lanterns before the festival starts', 'quest:2', G.lanterns], ['poster', '🎨', 'Festival Poster', 'Put the paragraph in order: topic, details, conclusion', 'game:poster', G.poster]],
  3: [['radio', '📻', 'Fix the Radio · THE KEY QUEST', 'Connect 8 wires before the battery dies', 'quest:3', G.radio], ['password', '🔐', 'Crack the Password', 'Spell the Unit 3 technology words', 'game:password', h => runQuiz(h, { title: 'Crack the Password', questions: shuffle(G.vocabQs(UN(3).words, 'spell')).slice(0, 10), key: 'game:password', track: 'tower', lives: 4, intro: 'The tower computer needs passwords. Each password is a Unit 3 word!' })]],
  4: [['blizzard', '❄️', 'Blizzard Survival · THE KEY QUEST', 'Climb to the top before your fire goes out', 'quest:4', G.blizzard], ['graph', '📊', 'Graph Lab', 'Read the Quest Island weather graph', 'game:graph', h => runQuiz(h, { title: 'Graph Lab', questions: UN(4).writing.build.slice(0, 5).map(q => ({ ...q, q: `<div class="qgraph">${G.graphSVG(UN(4).writing.graph, true)}</div>` + q.q })), key: 'game:graph', track: 'snow' })]],
  5: [['race', '🐪', 'Camel Race · THE KEY QUEST', 'Beat the rival camel to the finish line', 'quest:5', G.camelRace], ['duel', '⚔️', 'Camel Duel · 2 players', 'Race a friend on the same phone. First to 6 wins!', null, G.camelDuel]]
};
function unitZone(k, u, it) {
  const U = UN(u); const games = UNIT_GAMES[u];
  if (it) { const g = games.find(x => x[0] === it); app.innerHTML = `${zhead(k)}<div class="zbody"><a class="btn sm ghost backz" href="#/${k}">‹ Back</a><div class="act"></div></div>${FOOT}`; if (g) g[5]($('.act')); return; }
  const skills = [['vocab', '🌴', 'Words', `${U.words.length} words`], ['grammar', '🌋', 'Grammar', `${U.grammar.length} topics`], ['reading', '📖', 'Reading', U.reading.title], ['listening', '🔥', 'Listening', U.listening.title], ['speaking', '🦇', 'Speaking', U.speaking.title], ['writing', '🌉', 'Writing', U.writing.task.title]];
  app.innerHTML = `${zhead(k)}<div class="zbody">
    <div class="keycard rv ${S.key(u) ? 'on' : ''}"><div class="kbig">${A.keyIcon(S.key(u))}</div><div><b>${S.key(u) ? `You have the Unit ${u} key! 🗝️` : `The Unit ${u} key is waiting`}</b><small>${S.key(u) ? 'Play again for more coins, or help a friend.' : 'Win the key quest with 70% or more.'}</small></div></div>
    <div class="tiles-z rv">${games.map(([id, e, t, s, key], i) => tile(`#/${k}/${id}`, e, t, s, key, i === 0 ? 'quest' : '')).join('')}</div>
    <div class="grp rv"><div class="gh"><span>📚</span><div><h2>Study Unit ${u}: ${U.title}</h2><p>Learn here before the quest. Both books are inside.</p></div></div>
    <div class="books"><div><span class="bk RW">RW</span> ${esc(U.books.rw)}</div><div><span class="bk LS">LS</span> ${esc(U.books.ls)}</div></div>
    <div class="sk6">${skills.map(([z, e, t, s]) => `<a class="sk" href="#/${z}/${u}"><span>${e}</span><b>${t}</b><small>${esc(s)}</small></a>`).join('')}</div></div></div>${FOOT}`;
}
// --- arena: boxing for boys, style studio for girls
function arena(it) {
  const f = S.g === 'f'; const list = f ? [['colours', '🎨', 'Colour and Clothes Words', 'Warm up: colours, clothes, reading carefully', 'game:colours', G.colourWords], ['studio', '👗', 'Modest Style Studio', 'Read each customer order and design the outfit', 'game:studio', G.studio]]
    : [['boxing', '🥊', 'Grammar Boxing', 'Three rounds against Captain Error. Knock him out with correct grammar!', 'game:boxing', G.boxing], ['training', '🏋️', 'Training Camp', '10 mixed grammar questions from all units', 'game:training', h => { const mk = () => G.mixedGrammar(10); runQuiz(h, { title: 'Training Camp', questions: mk(), remake: mk, key: 'game:training', track: 'volcano', lives: 3 }); }]];
  if (it && !list.find(x => x[0] === it)) it = '';
  if (it) { const g = list.find(x => x[0] === it); app.innerHTML = `${zhead('arena')}<div class="zbody"><a class="btn sm ghost backz" href="#/arena">‹ Back</a><div class="act"></div></div>${FOOT}`; if (g) g[5]($('.act')); return; }
  app.innerHTML = `${zhead('arena')}<div class="zbody"><div class="tiles-z rv">${list.map(([id, e, t, s, key], i) => tile(`#/arena/${id}`, e, t, s, key, i === (f ? 1 : 0) ? 'quest' : '')).join('')}</div>
    <div class="card rv"><h3>${f ? 'Why fashion?' : 'Why boxing?'}</h3><p>${f ? 'Designers read orders very carefully. Customers say what they want and what they do <b>not</b> want. This is reading for detail, plus colours, clothes and describing what people are wearing (present continuous, adjectives before nouns).' : 'Every punch is a grammar question from Units 1 to 5. A correct answer is your punch. A mistake gives Captain Error a free punch. Read every explanation between rounds: that is how champions train.'}</p></div></div>${FOOT}`;
}
// --- the Lighthouse: PSE 2B
function lighthouse(u, it) {
  const P = Q.pse2; const sel = +u || 0;
  app.innerHTML = `${zhead('tower')}<div class="zbody"><div class="intro rv">⛵ ${esc(P.intro)}</div><div class="act"></div></div>${FOOT}`; const a = $('.act');
  if (it === 'leopard') return G.leopard(a);
  if (it === 'paper') return G.pse2Paper(a);
  if (sel) {
    const L = P.lessons[sel - 1];
    a.innerHTML = `<a class="btn sm ghost backz" href="#/tower">‹ Back</a><div class="learn"><h2>${L.emoji} Unlock 3 · Unit ${L.n}: ${L.title}</h2><div class="wlist">${L.words.map(([w, m]) => `<div><b>${esc(w)}</b><br><small>${esc(m)}</small></div>`).join('')}</div><div class="rule"><span class="tag">${L.grammar.title}</span>${L.grammar.html}</div></div><div class="qh"></div>`;
    runQuiz($('.qh', a), { title: `PSE 2B · ${L.title}`, questions: L.qs, key: `pse2:${L.n}`, track: 'sea' }); return;
  }
  a.innerHTML = `<div class="tiles-z rv">${P.lessons.map(L => tile(`#/tower/${L.n}`, L.emoji, `Unlock 3 · Unit ${L.n}: ${L.title}`, `6 words · ${L.grammar.title}`, `pse2:${L.n}`)).join('')}
    ${tile('#/tower/0/leopard', '🐆', 'Save the Arabian Leopard', 'An endangered animal needs you. Use Unit 1 to 5 language to save the cub', 'game:leopard', 'quest')}${tile('#/tower/0/paper', '📝', 'PSE 2B Mini Paper', 'Listening · Reading · Language · Writing, exam style', 'pse2:paper', 'hot')}</div>`;
}
// --- Base Camp: progress and settings
function camp() {
  const rows = [['vocab', 'Words'], ['grammar', 'Grammar'], ['reading', 'Reading'], ['listening', 'Listening'], ['speaking', 'Speaking'], ['writing', 'Writing'], ['quest', 'Key quests'], ['game', 'Games'], ['pse2', 'PSE 2B']];
  const total = { vocab: 20, grammar: 23, reading: 5, listening: 5, speaking: 5, writing: 10, quest: 5, game: 10, pse2: 6 };
  app.innerHTML = `${zhead('camp')}<div class="zbody"><div class="profile card rv"><div class="pav"><svg viewBox="-40 -158 80 162">${A.person(S.g)}</svg></div><div><h2>${esc(S.name)}</h2><p><span class="coin"></span> <b>${S.coins()}</b> gold coins · 🗝️ <b>${S.keys()}</b> / 5 keys</p></div></div>
    <div class="card rv"><h3>My progress</h3><div class="prog">${rows.map(([k, l]) => { const d = S.zone(k).done; return `<div><span>${l}</span><div class="bar"><i style="width:${Math.min(100, d / total[k] * 100)}%"></i></div><b>${d}</b></div>`; }).join('')}</div><p class="hint">A bar grows when you score 70% or more in an activity.</p></div>
    <div class="card rv"><h3>Settings</h3><label class="nm">My name <input id="nmi" maxlength="20" value="${esc(S.name)}"></label><div class="row"><button class="btn sm savenm">Save name</button></div>
      <p class="nm">My explorer</p><div class="gpick sm"><button class="gp ${S.g === 'm' ? 'on' : ''}" data-g="m"><svg viewBox="-40 -155 80 160">${A.person('m')}</svg><b>Boy</b></button><button class="gp ${S.g === 'f' ? 'on' : ''}" data-g="f"><svg viewBox="-40 -155 80 160">${A.person('f')}</svg><b>Girl</b></button></div>
      <div class="row"><button class="btn sm ghost reset">Start again (delete my progress)</button></div></div></div>${FOOT}`;
  $('.savenm').onclick = () => { const n = $('#nmi').value.trim(); if (!n) return toast('Write a name ✏️'); S.name = n; toast('Saved ✔'); };
  $$('.gp').forEach(b => b.onclick = () => { S.g = b.dataset.g; shell(); nav(); toast(S.g === 'f' ? 'Girl colours on 🌸' : 'Boy colours on ⚡'); });
  $('.reset').onclick = e => { if (!e.currentTarget.dataset.sure) { e.currentTarget.dataset.sure = 1; e.currentTarget.textContent = 'Are you sure? Tap again'; return; } S.reset(); toast('Progress deleted'); shell(); nav(); };
}

// ---------------- start ----------------
shell(); nav();
})();
