// PSE 2A Revision House · engine (routing, rooms, quizzes, games, writing pad, listening player, speaking recorder)
// Prepared by Mr. Abdelkader Soltani. All content is original practice material for Unlock 3, Units 1 to 3.
(function () {
'use strict';
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const view = $('#view'), crumbs = $('#crumbs');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const store = {
  get(k, d) { try { const v = localStorage.getItem('rh_' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('rh_' + k, JSON.stringify(v)); } catch (e) {} }
};
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);
const norm = s => String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').replace(/\s+([,.!?;:])/g, '$1').trim();
const normEnd = s => norm(s).replace(/[.!?]+$/, '').trim();
const toast = (t) => { const el = $('#toast'); el.textContent = t; el.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove('show'), 2200); };
const me = () => store.get('name', '');

// ---------- rooms ----------
const ROOMS = {
  grammar:   { name: 'Grammar Garage', sub: 'The workshop', ic: '🔧', col: '#B4532A', skill: 'Grammar', intro: 'Every grammar point from Units 1 to 3 is a tool in this workshop. Learn it in different ways, watch it move, then fix sentences until you get 10 out of 10.' },
  vocab:     { name: 'Vocabulary Kitchen', sub: 'The ingredients', ic: '🧁', col: '#EE6F75', skill: 'Vocabulary', intro: 'Every word from the Unit 1 to 3 wordlists is an ingredient. Guess it from the picture, learn it, then cook it into sentences.' },
  reading:   { name: 'Reading Living Room', sub: 'The sofa and the books', ic: '🛋️', col: '#8E58AA', skill: 'Reading', intro: 'Learn the reading moves from the book (main idea, detail, purpose and audience, prediction), then take mock reading tests like the real exam.' },
  listening: { name: 'Listening Guest Room', sub: 'Headphones on', ic: '🎧', col: '#D2733A', skill: 'Listening', intro: 'Learn what to listen for (signposts, contrasts, explanations, counter-arguments, rhetorical questions), then take mock listening tests read aloud by your phone.' },
  writing:   { name: 'Writing Study', sub: 'The pink and gold desk', ic: '✍️', col: '#D6457A', skill: 'Writing', intro: 'Your most important room. Build a perfect paragraph with colours, put scattered sentences in order, plan with a table, then write your own paragraphs.' },
  speaking:  { name: 'Speaking Garden Terrace', sub: 'Talk among the flowers', ic: '🎤', col: '#6E4CA8', skill: 'Speaking', intro: 'See how a good answer is built, colour by colour. Then record yourself and get instant feedback on your structure and language.' },
  exam:      { name: 'Exam Ballroom', sub: 'The full mock exam', ic: '👑', col: '#E9B949', skill: 'Mock exam', intro: 'A full mock exam like the summative test: reading, grammar, vocabulary, listening and writing. Your mark appears as soon as you submit.' },
  plan:      { name: 'My Bedroom', sub: 'My study plan', ic: '🛏️', col: '#E06AA6', skill: 'Plan', intro: 'Choose your plan colour (your teacher will tell you which one), follow the steps and watch your progress grow.' }
};
const ROOM_ORDER = ['writing', 'grammar', 'vocab', 'reading', 'listening', 'speaking', 'exam', 'plan'];
// ---------- unit focus: Units 2 and 3 first, Unit 1 as quick review ----------
const unitsOf = x => x.u || ((x.unit || x.src || '').match(/[123]/g) || []).map(Number);
const isFocus = x => { const u = unitsOf(x); return !u.length || u.some(n => n > 1); };
function focusGrid(items, render) {
  const f = items.filter(isFocus), r = items.filter(x => !isFocus(x));
  return `<div class="sec"><span class="sec-tag">★ Focus</span><b>Units 2 and 3</b><small>Most of the exam comes from here</small></div><div class="topic-grid">${f.map(render).join('')}</div>` +
    (r.length ? `<div class="sec rev"><span class="sec-tag">Quick review</span><b>Unit 1</b><small>Short revision only</small></div><div class="topic-grid review">${r.map(render).join('')}</div>` : '');
}

// ---------- scores ----------
const getScores = () => store.get('scores', {});
function saveScore(room, key, pct) {
  const s = getScores(); s[room] = s[room] || {}; const prev = s[room][key];
  if (prev == null || pct > prev) s[room][key] = pct; s[room]._last = pct; store.set('scores', s);
}
function roomBest(room) { const s = getScores()[room]; if (!s) return null; const v = Object.entries(s).filter(([k]) => k !== '_last').map(([, v]) => v); return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null; }

// ---------- routing ----------
function setTheme(t) { document.body.className = 't-' + t; }
function setCrumbs(parts) {
  crumbs.innerHTML = [`<a href="#/">${ICON('house')} Outside</a>`].concat(parts.map(p => p.href ? `<a href="${p.href}">${p.t}</a>` : `<span>${p.t}</span>`)).join('');
}
function go(h) { if (location.hash === h) route(); else location.hash = h; }
window.addEventListener('hashchange', route);
let _prevHash = null;
function route() {
  const next = location.hash, prev = _prevHash; _prevHash = next;
  if (window.MOTION) window.MOTION.nav(prev, next, render); else render();
}
function render() {
  stopSpeech();
  const h = location.hash.replace(/^#\/?/, '').split('/');
  window.scrollTo(0, 0);
  if (!h[0]) return outside();
  if (h[0] === 'hall') return hall();
  if (h[0] === 'plan') return planRoom();
  if (h[0] === 'room' && ROOMS[h[1]]) return room(h[1], h[2], h[3]);
  outside();
}

// ---------- OUTSIDE ----------
function outside() {
  setTheme('outside'); setCrumbs([]);
  const name = me();
  view.innerHTML = `
  <section class="outside-hero">
    <span class="tag">PSE 2A · Summative revision · Focus on Units 2 and 3</span>
    <h1>The Revision <em>House</em></h1>
    <div class="by">Prepared by Mr. Abdelkader Soltani</div>
  </section>
  <div class="house-wrap">${ART.house()}</div>
  <div class="card name-card">
    <h3>${name ? `Welcome back, ${esc(name)}! 💖` : 'Ring the doorbell 🔔'}</h3>
    <p class="hint">Type your first name, then tap the door or a room below. Every room has lessons, practice, a timed exam mode with automatic marks, and a WhatsApp group-chat game.</p>
    <input id="nm" maxlength="20" placeholder="Your first name" value="${esc(name)}" autocomplete="off">
    <div class="doorbell">${ROOM_ORDER.map(id => { const r = ROOMS[id]; const b = id === 'plan' ? null : roomBest(id);
      return `<button class="bell" style="background:${r.col}" data-go="${id === 'plan' ? '#/plan' : '#/room/' + id}"><span class="ic">${ICON(id)}</span><span>${r.name}${b != null ? ` · ${b}%` : ''}<small>${r.skill}</small></span></button>`; }).join('')}</div>
    <p style="margin-top:14px"><button class="btn" data-go="#/hall">Open the front door 🚪</button></p>
  </div>`;
  const nm = $('#nm', view);
  nm.addEventListener('input', () => store.set('name', nm.value.trim()));
  bindGo(view);
}
function bindGo(root) {
  $$('[data-go]', root).forEach(el => {
    const f = () => { if (!me() && $('#nm')) { $('#nm').focus(); toast('Please type your first name first 💕'); return; } go(el.dataset.go); };
    el.addEventListener('click', f); el.addEventListener('keydown', e => { if (e.key === 'Enter') f(); });
  });
}

// ---------- HALL ----------
function hall() {
  setTheme('hall'); setCrumbs([{ t: `${ICON('hall')} Hall` }]);
  const name = me() || 'friend';
  view.innerHTML = `
  <div class="room-head"><div class="art">${ART.room('hall')}</div><div><h1>The Hall</h1><p>Choose a room. Each room has its own colours, lessons and games.</p></div></div>
  <div class="card"><div class="hall-intro"><div class="guide">${ART.girl({ wave: true, bob: true })}</div>
    <div class="bubble">Hi ${esc(name)}! Start with the <b>Writing Study</b> and the <b>Grammar Garage</b>: they give the most marks. Focus on <b>Units 2 and 3</b>: most of the exam comes from them. Unit 1 is quick review. Finish every room with <b>Exam mode</b> and aim for 90% or more. 🌟</div></div></div>
  <div class="doors">${ROOM_ORDER.map(id => { const r = ROOMS[id]; const b = id === 'plan' ? null : roomBest(id);
    return `<button class="door" data-room="${id}"><div class="frame"><div class="leaf" style="background:linear-gradient(160deg, ${r.col}, ${shade(r.col)})">
      <span class="ic">${ICON(id)}</span><span class="nm">${r.name}</span><span class="sk">${r.skill}</span></div></div>${b != null ? `<span class="score">${b}%</span>` : ''}</button>`; }).join('')}</div>`;
  $$('.door', view).forEach(d => d.addEventListener('click', () => { d.classList.add('open'); setTimeout(() => go(d.dataset.room === 'plan' ? '#/plan' : '#/room/' + d.dataset.room), 420); }));
}
function shade(hex) { const n = parseInt(hex.slice(1), 16); const f = c => Math.max(0, Math.min(255, Math.round(c * .72))); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; }

// ---------- ROOM shell ----------
function roomHead(id) {
  const r = ROOMS[id];
  return `<div class="room-head"><div class="art">${ART.room(id)}</div><div><span class="tag">${ICON(id)} ${r.sub}</span><h1>${r.name}</h1><p>${r.intro}</p></div></div>`;
}
function tabs(id, list, cur) {
  return `<div class="tabs">${list.map(([k, t]) => `<a class="tab ${k === cur ? 'on' : ''}" href="#/room/${id}/${k}">${t}</a>`).join('')}</div>`;
}
function room(id, sub, arg) {
  setTheme(id); const r = ROOMS[id];
  setCrumbs([{ t: `${ICON('hall')} Hall`, href: '#/hall' }, { t: `${ICON(id)} ${r.name}` }]);
  const R = { grammar: grammarRoom, vocab: vocabRoom, reading: readingRoom, listening: listeningRoom, writing: writingRoom, speaking: speakingRoom, exam: examRoom }[id];
  R(sub, arg);
}

// ================= QUIZ ENGINE =================
// q types: mcq {q,o,a}, tf {q,a:bool}, gap {q,a:[..]}, order {tiles,a}, seq {items}, match {pairs}, roles {sents:[[t,role]],roles}
function runQuiz(host, opts) {
  const { title, questions, mode = 'practice', key, room: roomId, onDone, intro, timer } = opts;
  const qs = questions.map(prepQ);
  let i = 0, score = 0; const answers = [];
  let t0 = Date.now(), tick = null;
  host.innerHTML = `<div class="card"><div class="quiz-top"><b>${esc(title)}</b><span class="pill">${mode === 'exam' ? 'Exam mode · marks at the end' : 'Practice · instant feedback'}</span></div>
    ${intro ? `<p class="hint">${intro}</p>` : ''}
    <div class="row" style="margin:8px 0"><div class="prog"><i style="width:0%"></i></div><span class="pill" id="qn"></span>${timer ? '<span class="timer" id="tm"></span>' : ''}</div>
    <div id="qbox"></div></div>`;
  const qbox = $('#qbox', host), bar = $('.prog i', host), qn = $('#qn', host);
  if (timer) { const tm = $('#tm', host); tick = setInterval(() => { const left = Math.max(0, timer * 60 - Math.floor((Date.now() - t0) / 1000)); tm.textContent = `⏱ ${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`; if (!left) { clearInterval(tick); toast('Time is up! Submitting…'); finish(); } }, 500); }
  show();
  function show() {
    if (i >= qs.length) return finish();
    bar.style.width = (i / qs.length * 100) + '%'; qn.textContent = `${i + 1} / ${qs.length}`;
    const q = qs[i];
    qbox.innerHTML = `${q.pre ? `<div class="hint" style="margin-bottom:6px">${q.pre}</div>` : ''}${q.ctx ? `<div class="ex" style="margin-bottom:8px">${q.ctx}</div>` : ''}<div class="q">${fmtQ(q)}</div><div id="ans"></div><div id="fbx"></div>
      <div class="row" style="margin-top:12px"><button class="btn" id="chk">${mode === 'exam' ? (i === qs.length - 1 ? 'Submit my exam' : 'Next ›') : 'Check ✓'}</button></div>`;
    const ui = renderAnswer(q, $('#ans', qbox));
    const chk = $('#chk', qbox);
    chk.onclick = () => {
      const res = ui.get();
      if (res == null) { toast('Choose or write an answer first'); return; }
      const ok = isRight(q, res);
      answers.push({ q, res, ok }); if (ok) score++;
      if (mode === 'exam') { i++; show(); return; }
      ui.mark(ok);
      $('#fbx', qbox).innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}">${ok ? pickPraise() : '✗ Not quite.'} ${ok ? '' : `Correct answer: <b>${esc(correctText(q))}</b>`}<span class="why">${q.why || ''}</span></div>`;
      chk.textContent = i === qs.length - 1 ? 'See my result' : 'Next ›';
      chk.onclick = () => { i++; show(); };
    };
  }
  function finish() {
    if (tick) clearInterval(tick);
    const total = qs.length, pct = Math.round(score / total * 100);
    if (key && roomId) saveScore(roomId, key, pct);
    const stars = pct >= 90 ? '⭐⭐⭐' : pct >= 70 ? '⭐⭐' : pct >= 50 ? '⭐' : '💪';
    const wrong = answers.filter(a => !a.ok);
    host.innerHTML = `<div class="card result"><span class="tag">${esc(title)}</span><div class="big">${score} / ${total}</div><div class="stars">${stars}</div>
      <h3>${pct >= 90 ? 'Exam ready! Excellent work.' : pct >= 70 ? 'Very good. Review the mistakes below, then try again for 90%.' : 'Keep going! Read the explanations, review the lesson, then try again.'}</h3>
      <p><b>${pct}%</b>${me() ? ` · ${esc(me())}` : ''}</p>
      <div class="row" style="justify-content:center"><button class="btn" id="again">Try again 🔁</button>
      <a class="btn alt" href="https://wa.me/?text=${encodeURIComponent(`${me() || 'Student'} · Revision House · ${title}: ${score}/${total} (${pct}%) ${stars}`)}" target="_blank" rel="noopener">Send my score on WhatsApp</a></div>
      ${wrong.length ? `<div class="review"><h3>Review your mistakes</h3><ol>${wrong.map(a => `<li>${fmtQ(a.q, true)}<br><span class="no">You: ${esc(givenText(a.q, a.res))}</span> · <span class="ok">Answer: ${esc(correctText(a.q))}</span><br><span class="hint">${a.q.why || ''}</span></li>`).join('')}</ol></div>` : '<p>No mistakes. Perfect! 💯</p>'}</div>`;
    if (pct >= 90) confetti();
    $('#again', host).onclick = () => runQuiz(host, { ...opts, questions: opts.reshuffle ? opts.reshuffle() : questions });
    if (onDone) onDone(pct);
  }
}
const PRAISE = ['✓ Correct! 🌟', '✓ Brilliant! 💖', '✓ Yes! Well done.', '✓ Perfect! ✨', '✓ Great job! 🎀'];
const pickPraise = () => PRAISE[Math.floor(Math.random() * PRAISE.length)];
function prepQ(q) {
  q = { ...q };
  if (q.t === 'mcq' && !q.keep) { const idx = shuffle(q.o.map((_, k) => k)); q._o = idx.map(k => q.o[k]); q._a = idx.indexOf(q.a); }
  else if (q.t === 'mcq') { q._o = q.o; q._a = q.a; }
  if (q.t === 'tf') { q._o = q.dns ? ['True', 'False', 'Does not say'] : ['True', 'False']; q._a = q.a === true ? 0 : q.a === false ? 1 : 2; }
  if (q.t === 'order') q._tiles = shuffleUntilDifferent(q.tiles);
  if (q.t === 'seq') q._items = shuffleUntilDifferent(q.items);
  if (q.t === 'match') q._rights = shuffle(q.pairs.map(p => p[1]));
  return q;
}
function shuffleUntilDifferent(a) { if (a.length < 2) return a.slice(); let s; let n = 0; do { s = shuffle(a); n++; } while (s.join('|') === a.join('|') && n < 10); return s; }
function fmtQ(q, short) {
  let s = q.q || '';
  if (q.t === 'order' && !s) s = 'Put the words in the correct order.';
  if (q.t === 'seq' && !s) s = 'Put the sentences in the correct order to make a paragraph.';
  return s.replace(/___/g, '<span class="gapline">&nbsp;</span>');
}
function renderAnswer(q, el) {
  if (q.t === 'mcq' || q.t === 'tf') {
    el.innerHTML = `<div class="opts">${q._o.map((o, k) => `<button class="opt" data-k="${k}">${o}</button>`).join('')}</div>`;
    let sel = null;
    $$('.opt', el).forEach(b => b.onclick = () => { $$('.opt', el).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); sel = +b.dataset.k; });
    return { get: () => sel, mark: ok => { $$('.opt', el).forEach(b => { b.disabled = true; const k = +b.dataset.k; if (k === q._a) b.classList.add('right'); else if (k === sel) b.classList.add('wrong'); }); } };
  }
  if (q.t === 'gap') {
    el.innerHTML = `<input class="gapin" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type your answer">${q.help ? `<div class="hint">${q.help}</div>` : ''}`;
    const inp = $('input', el);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') $('#chk') && $('#chk').click(); });
    return { get: () => inp.value.trim() ? inp.value : null, mark: ok => { inp.disabled = true; inp.classList.add(ok ? 'right' : 'wrong'); } };
  }
  if (q.t === 'order') {
    el.innerHTML = `<div class="hint">Tap the words in order. Tap a word in the answer to remove it.</div><div class="tiles answer" id="ta"></div><div class="tiles" id="tp">${q._tiles.map((w, k) => `<button class="tile" data-k="${k}">${esc(w)}</button>`).join('')}</div>`;
    const ta = $('#ta', el), tp = $('#tp', el); let picked = [];
    tp.onclick = e => { const b = e.target.closest('.tile'); if (!b) return; picked.push(+b.dataset.k); b.remove(); draw(); };
    ta.onclick = e => { const b = e.target.closest('.tile'); if (!b) return; const k = +b.dataset.k; picked = picked.filter(x => x !== k); tp.insertAdjacentHTML('beforeend', `<button class="tile" data-k="${k}">${esc(q._tiles[k])}</button>`); draw(); };
    function draw() { ta.innerHTML = picked.map(k => `<button class="tile" data-k="${k}">${esc(q._tiles[k])}</button>`).join(''); }
    return { get: () => picked.length === q._tiles.length ? picked.map(k => q._tiles[k]).join(' ') : null, mark: ok => { ta.style.borderColor = ok ? 'var(--ok)' : 'var(--bad)'; $$('.tile', el).forEach(t => t.disabled = true); } };
  }
  if (q.t === 'seq') {
    el.innerHTML = `<div class="hint">Tap the sentences in the correct order (1, 2, 3 …). Tap again to undo.</div><div class="seq-list">${q._items.map((s, k) => `<button class="seq-item" data-k="${k}"><span class="n"></span><span>${s}</span></button>`).join('')}</div>`;
    let order = [];
    $$('.seq-item', el).forEach(b => b.onclick = () => { const k = +b.dataset.k; if (order.includes(k)) order = order.slice(0, order.indexOf(k)); else order.push(k); draw(); });
    function draw() { $$('.seq-item', el).forEach(b => { const k = +b.dataset.k, p = order.indexOf(k); b.classList.toggle('on', p >= 0); $('.n', b).textContent = p >= 0 ? p + 1 : ''; }); }
    return { get: () => order.length === q._items.length ? order.map(k => q._items[k]) : null, mark: ok => { $$('.seq-item', el).forEach(b => { b.disabled = true; const k = +b.dataset.k; b.classList.add(order.indexOf(k) === q.items.indexOf(q._items[k]) ? 'right' : 'wrong'); }); } };
  }
  if (q.t === 'match') {
    el.innerHTML = `<div class="seq-list">${q.pairs.map((p, k) => `<label class="seq-item" style="display:block"><b>${p[0]}</b><br><select data-k="${k}" style="width:100%;margin-top:6px;font-size:15px;padding:8px;border-radius:10px;border:2px solid #EADCF2;font-family:inherit"><option value="">Choose…</option>${q._rights.map(r => `<option>${esc(r)}</option>`).join('')}</select></label>`).join('')}</div>`;
    return { get: () => { const v = $$('select', el).map(s => s.value); return v.some(x => !x) ? null : v; }, mark: ok => { $$('select', el).forEach(s => { s.disabled = true; s.style.borderColor = s.value === q.pairs[+s.dataset.k][1] ? 'var(--ok)' : 'var(--bad)'; }); } };
  }
  if (q.t === 'roles') {
    const R = { topic: ['Topic sentence', '#2F6DB5'], support: ['Supporting', '#2E8B57'], detail: ['Example / detail', '#D97706'], conc: ['Concluding', '#C2185B'], odd: ["Doesn't belong", '#7A6888'] };
    const roles = q.roles || ['topic', 'support', 'detail', 'conc'];
    el.innerHTML = `<div class="hint">Give each sentence its job. Tap a colour under each sentence.</div><div class="seq-list">${q.sents.map((s, k) => `<div class="seq-item" style="display:block" data-k="${k}"><span>${s[0]}</span><div class="roles">${roles.map(r => `<button class="role-btn" data-r="${r}" style="background:${R[r][1]};color:${R[r][1]}"><span style="color:#fff">${R[r][0]}</span></button>`).join('')}</div></div>`).join('')}</div>`;
    const val = q.sents.map(() => null);
    $$('.seq-item', el).forEach(row => $$('.role-btn', row).forEach(b => b.onclick = () => { $$('.role-btn', row).forEach(x => x.classList.remove('on')); b.classList.add('on'); val[+row.dataset.k] = b.dataset.r; }));
    return { get: () => val.some(v => !v) ? null : val, mark: ok => { $$('.seq-item', el).forEach(row => { const k = +row.dataset.k; row.classList.add(val[k] === q.sents[k][1] ? 'right' : 'wrong'); }); } };
  }
  el.textContent = 'Unknown question type'; return { get: () => null, mark() {} };
}
function isRight(q, res) {
  if (q.t === 'mcq' || q.t === 'tf') return res === q._a;
  if (q.t === 'gap') { const acc = [].concat(q.a).map(normEnd); return acc.includes(normEnd(res)); }
  if (q.t === 'order') { const acc = [].concat(q.a, q.alt || []).map(normEnd); return acc.includes(normEnd(res)); }
  if (q.t === 'seq') return res.join('|') === q.items.join('|');
  if (q.t === 'match') return res.every((v, k) => v === q.pairs[k][1]);
  if (q.t === 'roles') return res.every((v, k) => v === q.sents[k][1]);
  return false;
}
function strip(h) { const d = document.createElement('div'); d.innerHTML = h; return d.textContent; }
function correctText(q) {
  if (q.t === 'mcq' || q.t === 'tf') return strip(q._o[q._a]);
  if (q.t === 'gap') return [].concat(q.a)[0];
  if (q.t === 'order') return q.a;
  if (q.t === 'seq') return q.items.map((s, k) => `${k + 1}. ${strip(s)}`).join(' ');
  if (q.t === 'match') return q.pairs.map(p => `${strip(p[0])} → ${p[1]}`).join(' · ');
  if (q.t === 'roles') return q.sents.map(s => `${s[1]}`).join(', ');
  return '';
}
function givenText(q, res) {
  if (q.t === 'mcq' || q.t === 'tf') return strip(q._o[res]);
  if (q.t === 'seq') return res.map((s, k) => `${k + 1}. ${strip(s)}`).join(' ');
  if (Array.isArray(res)) return res.join(', ');
  return res;
}
function confetti() {
  const c = document.createElement('div'); c.className = 'confetti'; const cols = ['#F28DBD', '#B67BE8', '#FFD166', '#7FC7B5', '#EE6F75'];
  for (let k = 0; k < 70; k++) { const i = document.createElement('i'); i.style.left = Math.random() * 100 + 'vw'; i.style.background = cols[k % cols.length]; i.style.animationDelay = Math.random() * .8 + 's'; c.appendChild(i); }
  document.body.appendChild(c); setTimeout(() => c.remove(), 3500);
}

// ---------- LEARN blocks ----------
function renderBlocks(blocks) {
  return blocks.map(b => {
    if (b.k === 'rule') return `<div class="rule">${b.title ? `<span class="tag">${b.title}</span>` : ''}${b.html}</div>`;
    if (b.k === 'way') return `<div class="way"><span class="tag">${b.tag || 'Another way to see it'}</span>${b.title ? `<h3>${b.title}</h3>` : ''}${b.html}</div>`;
    if (b.k === 'ex') return `<div class="way"><span class="tag">${b.title || 'Examples'}</span>${b.items.map(x => `<div class="ex">${x}</div>`).join('')}</div>`;
    if (b.k === 'mist') return `<div class="way"><span class="tag">Common mistakes</span><div class="mist">${b.items.map(([w, r]) => `<div class="w">✗ ${w}</div><div class="r">✓ ${r}</div>`).join('')}</div></div>`;
    if (b.k === 'anim') return `<div class="way"><span class="tag">${b.tag || 'Watch it move'}</span>${ANIM[b.type](b)}</div>`;
    if (b.k === 'html') return b.html;
    return '';
  }).join('');
}
const ANIM = {
  cond: b => `<div class="stage"><div class="say s1">${b.left}</div><div class="say s2">${b.right}</div><div class="walker">${ART.girl({ walk: true })}</div><div class="timeline"></div>
    <span class="mark" style="left:14%">NOW (present)</span><span class="mark" style="left:82%">FUTURE (will)</span></div><p class="hint">${b.note || ''}</p>`,
  future: b => `<div class="meter">${b.rows.map(([w, p, c, s]) => `<div><b>${w}</b> <span class="hint">${s}</span><div class="bar"><div class="fill" style="width:${p}%;background:${c}">${p}%</div></div></div>`).join('')}</div><p class="hint">${b.note || ''}</p>`,
  race: b => `<div class="race">${b.rows.map(([car, lbl], k) => `<div class="lane l${k + 1}" style="top:${k * 48}px"><span class="car">${car}</span><span class="lbl">${lbl}</span></div>`).join('')}</div><p class="hint">${b.note || ''}</p>`,
  domino: b => `<div class="dominoes">${b.items.map(([t, c]) => `<div class="domino" style="background:${c}">${t}</div>`).join('')}</div><p class="hint">${b.note || ''}</p>`,
  train: b => `<div class="trainline">${b.items.map(([t, l, c]) => `<div class="wagon" style="background:${c}"><small>${l}</small>${t}</div>`).join('')}</div><p class="hint">${b.note || ''}</p>`,
  signs: b => `<div class="signs">${b.items.map(([ic, w, m, c]) => `<div class="sign" style="background:${c}"><span class="big">${ic}</span>${w}<br><small>${m}</small></div>`).join('')}</div>`,
  puzzle: b => b.items.map(([l, m, r, c]) => `<div class="puzzle"><span class="pz" style="background:${c}">${l}</span><span class="pz mid" style="color:${c}">${m}</span><span class="pz r" style="background:${c}">${r}</span></div>`).join('') + `<p class="hint">${b.note || ''}</p>`,
  unless: b => `<div class="switch"><span class="pill" style="font-size:16px">if … not</span><span class="eq">=</span><span class="pill flip" style="font-size:16px;background:#2E8B57;color:#fff">unless</span></div>${b.items.map(x => `<div class="ex">${x}</div>`).join('')}`
};

// ================= GRAMMAR GARAGE =================
function grammarRoom(sub, arg) {
  const G = window.GRAMMAR;
  const qsOf = ts => ts.flatMap(t => t.q.map(q => ({ ...q, pre: `🔧 ${t.title}` })));
  const all = () => shuffle([...pick(qsOf(G.topics.filter(isFocus)), 8), ...pick(qsOf(G.topics.filter(t => !isFocus(t))), 2)]);
  view.innerHTML = roomHead('grammar') + tabs('grammar', [['learn', '📚 Toolboxes'], ['practise', '✏️ Practise a topic'], ['random', '🎲 Random 10'], ['exam', '📝 Exam mode'], ['chat', '💬 Group chat']], sub || 'learn') + '<div id="rb"></div>';
  const rb = $('#rb');
  if (!sub || sub === 'learn') {
    if (arg) { const t = G.topics.find(x => x.id === arg); return grammarLesson(rb, t); }
    rb.innerHTML = `<div class="card"><h2>Choose a toolbox</h2><p class="hint">Each toolbox explains one grammar point from Units 1 to 3 in three ways: the rule with colours, a moving picture, and examples with common mistakes. Then practise it.</p></div>
      ${focusGrid(G.topics, t => `<button class="topic" data-t="${t.id}"><span class="ribbon src">${t.src}</span><b><i class="emo">${t.emoji}</i>${t.title}</b><small>${t.short}</small></button>`)}`;
    $$('.topic', rb).forEach(b => b.onclick = () => go(`#/room/grammar/learn/${b.dataset.t}`));
  } else if (sub === 'practise') {
    if (arg) { const t = G.topics.find(x => x.id === arg); return runQuiz(rb, { title: `${t.emoji} ${t.title}`, questions: pick(t.q, 10), key: 'p_' + t.id, room: 'grammar', reshuffle: () => pick(t.q, 10) }); }
    rb.innerHTML = `<div class="card"><h2>Practise one topic</h2><p class="hint">10 questions with instant feedback and an explanation for every answer.</p></div>${focusGrid(G.topics, t => `<button class="topic" data-t="${t.id}"><b><i class="emo">${t.emoji}</i>${t.title}</b><small>${t.q.length} questions in the bank${bestTxt('grammar', 'p_' + t.id)}</small></button>`)}`;
    $$('.topic', rb).forEach(b => b.onclick = () => go(`#/room/grammar/practise/${b.dataset.t}`));
  } else if (sub === 'random') {
    runQuiz(rb, { title: '🎲 Random 10: all grammar', questions: all(), key: 'random', room: 'grammar', intro: '8 questions from Units 2 and 3, 2 from Unit 1.', reshuffle: all });
  } else if (sub === 'exam') {
    const mk = () => { const F = G.topics.filter(isFocus), RV = G.topics.filter(t => !isFocus(t)); const a = F.flatMap(t => pick(t.q, 2)); const used = new Set(a); const extra = pick(F.flatMap(t => t.q).filter(q => !used.has(q)), Math.max(0, 16 - a.length)); return [...a, ...extra, ...pick(RV.flatMap(t => t.q), 4)].slice(0, 20); };
    runQuiz(rb, { title: '📝 Grammar exam (Units 1 to 3)', questions: mk(), mode: 'exam', key: 'exam', room: 'grammar', timer: 20, intro: '16 questions from Units 2 and 3 and 4 from Unit 1. No feedback until you submit, just like the real exam.', reshuffle: mk });
  } else if (sub === 'chat') chatGame(rb, window.CHATS.grammar, 'grammar');
}
function bestTxt(room, key) { const s = getScores()[room]; return s && s[key] != null ? ` · best ${s[key]}%` : ''; }
function grammarLesson(rb, t) {
  rb.innerHTML = `<div class="card learn"><span class="ribbon">${t.src}</span><h2><i class="emo">${t.emoji}</i>${t.title}</h2>${t.why ? `<p><b>Why it matters:</b> ${t.why}</p>` : ''}${renderBlocks(t.learn)}
    <div class="row" style="margin-top:12px"><a class="btn" href="#/room/grammar/practise/${t.id}">Practise this now ✏️</a><a class="btn ghost" href="#/room/grammar/learn">All toolboxes</a></div></div>`;
}

// ================= VOCABULARY KITCHEN =================
function vocabRoom(sub, arg) {
  const V = window.VOCAB;
  view.innerHTML = roomHead('vocab') + tabs('vocab', [['learn', '🫙 Ingredients'], ['practise', '🍰 Recipes'], ['random', '🎲 Random 10'], ['exam', '📝 Exam mode'], ['chat', '💬 Group chat']], sub || 'learn') + '<div id="rb"></div>';
  const rb = $('#rb');
  const seen = store.get('seen', {});
  if (!sub || sub === 'learn') {
    if (arg) return wordCard(rb, arg);
    rb.innerHTML = V.units.map(u => `<div class="card ${u.id === 'u1' ? 'review-card' : ''}"><span class="sec-tag">${u.id === 'u1' ? 'Quick review' : '★ Focus'}</span><h2><i class="emo">${u.emoji}</i>${u.title}</h2><p class="hint">${u.note}</p><div class="shelf">${u.words.map(w => `<button class="jar ${seen[w.w] ? 'done' : ''}" data-w="${esc(w.w)}"><span class="e">${w.pic.split(' ')[0]}</span>${esc(w.w)}</button>`).join('')}</div></div>`).join('');
    $$('.jar', rb).forEach(b => b.onclick = () => go(`#/room/vocab/learn/${encodeURIComponent(b.dataset.w)}`));
  } else if (sub === 'practise') {
    if (arg) { const r = V.recipes.find(x => x.id === arg); const mk = () => r.make(); return runQuiz(rb, { title: `${r.emoji} ${r.title}`, questions: mk(), key: 'p_' + r.id, room: 'vocab', reshuffle: mk }); }
    rb.innerHTML = `<div class="card"><h2>Recipes</h2><p class="hint">Each recipe cooks the words in a different way, just like the exam.</p></div><div class="topic-grid">${V.recipes.map(r => `<button class="topic" data-r="${r.id}"><b><i class="emo">${r.emoji}</i>${r.title}</b><small>${r.short}${bestTxt('vocab', 'p_' + r.id)}</small></button>`).join('')}</div>`;
    $$('.topic', rb).forEach(b => b.onclick = () => go(`#/room/vocab/practise/${b.dataset.r}`));
  } else if (sub === 'random') {
    const mk = () => pick(V.recipes.flatMap(r => r.make()), 10);
    runQuiz(rb, { title: '🎲 Random 10: all vocabulary', questions: mk(), key: 'random', room: 'vocab', reshuffle: mk });
  } else if (sub === 'exam') {
    const mk = () => V.exam();
    runQuiz(rb, { title: '📝 Vocabulary exam (Units 1 to 3)', questions: mk(), mode: 'exam', key: 'exam', room: 'vocab', timer: 15, intro: '20 questions like the real exam: gap fills, meanings, word partners, word forms and prefixes.', reshuffle: mk });
  } else if (sub === 'chat') chatGame(rb, window.CHATS.vocab, 'vocab');
}
function wordCard(rb, wname) {
  const V = window.VOCAB; const flat = V.units.flatMap(u => u.words.map(w => ({ ...w, unit: u })));
  const k = flat.findIndex(w => w.w === decodeURIComponent(wname)); const w = flat[k]; if (!w) return go('#/room/vocab');
  const seen = store.get('seen', {}); seen[w.w] = 1; store.set('seen', seen);
  const prev = flat[(k - 1 + flat.length) % flat.length], next = flat[(k + 1) % flat.length];
  rb.innerHTML = `<div class="card wcard"><span class="pill">${w.unit.title}</span>
    <div class="pic">${w.pic}</div><div class="guess">🤔 ${w.guess}</div>
    <div id="rev"><p><button class="btn" id="show">Show the word 🫙</button></p></div></div>`;
  $('#show', rb).onclick = () => {
    $('#rev', rb).innerHTML = `<div class="word">${esc(w.w)}</div><div class="stress">${w.stress}</div>
      <div class="meta"><span class="pill">${w.pos}</span>${w.fam ? `<span class="pill">family: ${w.fam}</span>` : ''}</div>
      <p class="def">${w.def}</p><div class="exs">${w.ex.map(x => `<div class="ex">${x}</div>`).join('')}</div>
      ${w.ccq ? `<div class="ccq"><b>Check yourself:</b> ${w.ccq[0]} <button class="btn sm ghost" data-a="yes">Yes</button><button class="btn sm ghost" data-a="no">No</button><div id="cc" class="hint"></div></div>` : ''}
      <div class="row" style="justify-content:center;margin-top:12px"><button class="btn sm ghost" id="say">🔊 Hear it</button></div>`;
    $$('.ccq button', rb).forEach(b => b.onclick = () => { $('#cc', rb).innerHTML = b.dataset.a === w.ccq[1] ? `✓ Right! ${w.ccq[2] || ''}` : `✗ Think again. ${w.ccq[2] || ''}`; });
    $('#say', rb).onclick = () => speakLines([[null, w.w + '. ' + strip(w.ex[0])]], { rate: .85 });
  };
  rb.insertAdjacentHTML('beforeend', `<div class="row" style="justify-content:space-between"><a class="btn sm ghost" href="#/room/vocab/learn/${encodeURIComponent(prev.w)}">‹ ${esc(prev.w)}</a><a class="btn sm ghost" href="#/room/vocab/learn">All ingredients</a><a class="btn sm" href="#/room/vocab/learn/${encodeURIComponent(next.w)}">${esc(next.w)} ›</a></div>`);
}

// ================= WRITING STUDY =================
function writingRoom(sub, arg) {
  const W = window.WRITING;
  view.innerHTML = roomHead('writing') + tabs('writing', [['learn', '🎨 Learn with colours'], ['exercises', '🧩 Exercises'], ['write', '📝 Plan and write'], ['exam', '📝 Exam mode'], ['chat', '💬 Group chat']], sub || 'learn') + '<div id="rb"></div>';
  const rb = $('#rb');
  if (!sub || sub === 'learn') {
    if (arg) { const L = W.lessons.find(x => x.id === arg); rb.innerHTML = `<div class="card learn"><h2><i class="emo">${L.emoji}</i>${L.title}</h2>${renderBlocks(L.blocks)}<div class="row" style="margin-top:10px"><a class="btn" href="#/room/writing/exercises">Try the exercises 🧩</a><a class="btn ghost" href="#/room/writing/learn">All lessons</a></div></div>`; return; }
    rb.innerHTML = `<div class="card"><h2>The colour code</h2><p>In every room of this house a paragraph has the same colours:</p><div class="legend"><span style="background:var(--c-topic)">Topic sentence</span><span style="background:var(--c-support)">Supporting sentence</span><span style="background:var(--c-detail)">Example / detail</span><span style="background:var(--c-conc)">Concluding sentence</span></div></div>
      <div class="topic-grid">${W.lessons.map(L => `<button class="topic" data-l="${L.id}"><span class="ribbon src">${L.src}</span><b><i class="emo">${L.emoji}</i>${L.title}</b><small>${L.short}</small></button>`).join('')}</div>`;
    $$('.topic', rb).forEach(b => b.onclick = () => go(`#/room/writing/learn/${b.dataset.l}`));
  } else if (sub === 'exercises') {
    if (arg) { const E = W.exercises.find(x => x.id === arg); const mk = () => E.q.slice(); return runQuiz(rb, { title: `${E.emoji} ${E.title}`, questions: mk(), key: 'x_' + E.id, room: 'writing', intro: E.intro, reshuffle: mk }); }
    rb.innerHTML = `<div class="card"><h2>Exercises</h2><p class="hint">Do them in order. Each one trains one part of a strong paragraph.</p></div><div class="topic-grid">${W.exercises.map(E => `<button class="topic" data-e="${E.id}"><b><i class="emo">${E.emoji}</i>${E.title}</b><small>${E.short}${bestTxt('writing', 'x_' + E.id)}</small></button>`).join('')}</div>`;
    $$('.topic', rb).forEach(b => b.onclick = () => go(`#/room/writing/exercises/${b.dataset.e}`));
  } else if (sub === 'write') {
    if (arg) return writingTask(rb, W.tasks.find(x => x.id === arg));
    rb.innerHTML = `<div class="card"><h2>Plan and write</h2><p>Follow the three steps: <b>1</b> study the model and its table, <b>2</b> write from a table that is ready for you, <b>3</b> fill the table yourself and write.</p></div>
      ${focusGrid(W.tasks, T => `<button class="topic" data-t="${T.id}"><span class="ribbon src">${T.step}</span><b><i class="emo">${T.emoji}</i>${T.title}</b><small>${T.short}</small></button>`)}`;
    $$('.topic', rb).forEach(b => b.onclick = () => go(`#/room/writing/write/${b.dataset.t}`));
  } else if (sub === 'exam') {
    const mk = () => W.exam();
    runQuiz(rb, { title: '📝 Writing skills exam', questions: mk(), mode: 'exam', key: 'exam', room: 'writing', timer: 15, intro: 'Topic sentences, supporting details, unity, concluding sentences, linkers and paragraph order. Then do a full paragraph in Plan and write.', reshuffle: mk });
  } else if (sub === 'chat') chatGame(rb, window.CHATS.writing, 'writing');
}
function writingTask(rb, T) {
  const key = 'draft_' + T.id; const saved = store.get(key, { plan: {}, text: '' });
  const colours = { topic: 'var(--c-topic)', support: 'var(--c-support)', detail: 'var(--c-detail)', conc: 'var(--c-conc)', counter: 'var(--c-counter)' };
  let html = `<div class="card"><span class="ribbon">${T.step}</span><h2><i class="emo">${T.emoji}</i>${T.title}</h2><div class="ex"><b>Task:</b> ${T.task}</div>${T.how ? `<p class="hint">${T.how}</p>` : ''}`;
  if (T.model) {
    html += `<h3>The table (plan)</h3>${planTable(T.table, true)}<h3>The model paragraphs</h3><div class="legend"><span style="background:var(--c-topic)">Topic sentence</span><span style="background:var(--c-support)">Advantage / point</span><span style="background:var(--c-detail)">Example / detail</span><span style="background:var(--c-counter)">However (disadvantage)</span><span style="background:var(--c-conc)">Concluding sentence</span></div>
      ${T.model.map(p => `<p class="para">${p.map(([t, r]) => `<span class="s ${r}">${t}</span>`).join(' ')}</p>`).join('')}
      <p class="hint">${T.wordsNote || ''}</p></div>`;
  } else {
    html += `<h3>Your plan</h3>${planTable(T.table, false, saved.plan)}
      <h3>Write your paragraphs <span class="wc" id="wc">0 words</span></h3>
      ${T.frame ? `<details class="way"><summary><b>Need help? Open the sentence frame</b></summary><div class="ex" style="white-space:pre-line">${T.frame}</div></details>` : ''}
      <textarea class="pad" id="pad" placeholder="Write here. Your work is saved on this phone.">${esc(saved.text || '')}</textarea>
      <h3>Live checklist</h3><div class="checklist" id="cl"></div>
      <div class="row" style="margin-top:12px"><button class="btn" id="mdl">Show a model answer</button><a class="btn alt" id="wa" target="_blank" rel="noopener">Send to my teacher on WhatsApp</a><button class="btn ghost" id="clr">Clear</button></div>
      <div id="mbox"></div></div>`;
  }
  rb.innerHTML = html;
  if (T.model) return;
  const pad = $('#pad', rb), cl = $('#cl', rb), wc = $('#wc', rb);
  $$('textarea[data-p]', rb).forEach(ta => ta.oninput = () => { const s = store.get(key, { plan: {}, text: '' }); s.plan[ta.dataset.p] = ta.value; store.set(key, s); });
  const upd = () => {
    const text = pad.value; const s = store.get(key, { plan: {}, text: '' }); s.text = text; store.set(key, s);
    const words = (text.match(/[A-Za-z']+/g) || []).length; wc.textContent = `${words} words`;
    const low = ' ' + text.toLowerCase().replace(/\s+/g, ' ') + ' ';
    const has = re => re.test(low);
    const paras = text.split(/\n\s*\n/).filter(p => p.trim()).length;
    const checks = [
      [`${T.minWords || 200} words or more (${words} now)`, words >= (T.minWords || 200)],
      ['Two paragraphs (leave an empty line between them)', paras >= 2],
      ['Topic sentence starters (One solution …, The first …, Another …)', has(/(one (solution|advantage|reason|way)|the (first|second|main)|another (solution|way|advantage))/)],
      ['Linkers for points: First, In addition, Also, Moreover', has(/(first,|firstly|in addition|also|moreover|furthermore)/)],
      ['An example: For example / For instance / such as', has(/(for example|for instance|such as)/)],
      ['A disadvantage with However / On the other hand', has(/(however|on the other hand|although|but )/)],
      ['Concluding sentence: In short / To sum up / In conclusion', has(/(in short|to sum up|in conclusion|overall|to conclude)/)],
      ['No "more better", "more easier" or "more cheaper"', !has(/more (better|easier|cheaper|faster|bigger|worse)/)]
    ];
    cl.innerHTML = checks.map(([t, ok]) => `<div class="${ok ? 'yes' : ''}">${t}</div>`).join('');
    $('#wa', rb).href = `https://wa.me/?text=${encodeURIComponent(`${me() || 'Student'} · Writing: ${T.title}\n\n${text}`)}`;
  };
  pad.oninput = upd; upd();
  $('#clr', rb).onclick = () => { if (confirmSoft('Clear your paragraphs?')) { pad.value = ''; upd(); } };
  $('#mdl', rb).onclick = () => { $('#mbox', rb).innerHTML = `<div class="way"><span class="tag">Model answer (compare, do not copy)</span><div class="legend"><span style="background:var(--c-topic)">Topic</span><span style="background:var(--c-support)">Point</span><span style="background:var(--c-detail)">Example</span><span style="background:var(--c-counter)">However</span><span style="background:var(--c-conc)">Concluding</span></div>${T.answer.map(p => `<p class="para">${p.map(([t, r]) => `<span class="s ${r}">${t}</span>`).join(' ')}</p>`).join('')}</div>`; };
}
let _clearArm = 0;
function confirmSoft(msg) { if (Date.now() - _clearArm < 3000) return true; _clearArm = Date.now(); toast(msg + ' Tap again to confirm.'); return false; }
function planTable(rows, filled, saved = {}) {
  return `<table class="planner">${rows.map(([lab, val, col], k) => `<tr><th style="background:${col}">${lab}</th><td>${filled ? `<div style="padding:6px 8px;font-weight:600">${val}</div>` : (val ? `<div style="padding:6px 8px;font-weight:600">${val}</div>` : `<textarea data-p="${k}" rows="2" placeholder="Write notes (key words)">${esc(saved[k] || '')}</textarea>`)}</td></tr>`).join('')}</table>`;
}

// ================= READING LIVING ROOM =================
function readingRoom(sub, arg) {
  const RD = window.READING;
  view.innerHTML = roomHead('reading') + tabs('reading', [['learn', '📚 Reading moves'], ['tests', '📝 Mock reading tests'], ['chat', '💬 Group chat']], sub || 'learn') + '<div id="rb"></div>';
  const rb = $('#rb');
  if (!sub || sub === 'learn') {
    if (arg) { const L = RD.lessons.find(x => x.id === arg); rb.innerHTML = `<div class="card learn"><span class="ribbon">${L.src}</span><h2><i class="emo">${L.emoji}</i>${L.title}</h2>${renderBlocks(L.blocks)}${L.q ? '<div id="lq"></div>' : ''}<div class="row" style="margin-top:12px"><a class="btn ghost" href="#/room/reading/learn">All reading moves</a><a class="btn" href="#/room/reading/tests">Mock tests 📝</a></div></div>`; if (L.q) runQuiz($('#lq', rb), { title: 'Try it', questions: L.q, key: 'l_' + L.id, room: 'reading' }); return; }
    rb.innerHTML = `<div class="topic-grid">${RD.lessons.map(L => `<button class="topic" data-l="${L.id}"><span class="ribbon src">${L.src}</span><b><i class="emo">${L.emoji}</i>${L.title}</b><small>${L.short}</small></button>`).join('')}</div>`;
    $$('.topic', rb).forEach(b => b.onclick = () => go(`#/room/reading/learn/${b.dataset.l}`));
  } else if (sub === 'tests') {
    if (arg) return readingTest(rb, RD.tests.find(x => x.id === arg));
    rb.innerHTML = `<div class="card"><h2>Mock reading tests</h2><p class="hint">Texts like the ones in your books, with exam questions. Read the questions first, then the text. Your mark appears when you submit.</p></div>${focusGrid(RD.tests, T => `<button class="topic" data-t="${T.id}"><span class="ribbon src">${T.unit}</span><b><i class="emo">${T.emoji}</i>${T.title}</b><small>${T.q.length} questions · about ${T.words} words${bestTxt('reading', 't_' + T.id)}</small></button>`)}`;
    $$('.topic', rb).forEach(b => b.onclick = () => go(`#/room/reading/tests/${b.dataset.t}`));
  } else if (sub === 'chat') chatGame(rb, window.CHATS.reading, 'reading');
}
function readingTest(rb, T) {
  rb.innerHTML = `<div class="card"><span class="ribbon">${T.unit}</span><h2><i class="emo">${T.emoji}</i>${T.title}</h2>${T.visual ? `<div class="ex" style="font-size:34px;text-align:center">${T.visual}</div>` : ''}
    <div class="row"><button class="btn sm ghost" id="tg">Hide the text</button><span class="hint">Tip: read the questions first, then find the key words in the text.</span></div>
    <div class="text" id="txt"><h3>${T.heading}</h3>${T.text.map((p, k) => `<p><span class="pn">${k + 1}</span>${p}</p>`).join('')}</div></div><div id="qz"></div>`;
  $('#tg', rb).onclick = e => { const t = $('#txt', rb); t.hidden = !t.hidden; e.target.textContent = t.hidden ? 'Show the text' : 'Hide the text'; };
  runQuiz($('#qz', rb), { title: `Questions: ${T.title}`, questions: T.q, mode: 'exam', key: 't_' + T.id, room: 'reading', intro: 'Exam mode: no feedback until you submit. You can scroll up to the text at any time.' });
}

// ================= LISTENING GUEST ROOM =================
let SPK = { on: false, q: [], i: 0 };
function voicesReady() { return new Promise(res => { const v = speechSynthesis.getVoices(); if (v.length) return res(v); speechSynthesis.onvoiceschanged = () => res(speechSynthesis.getVoices()); setTimeout(() => res(speechSynthesis.getVoices()), 1200); }); }
async function speakLines(lines, opt = {}) {
  if (!('speechSynthesis' in window)) { toast('Your browser cannot read aloud. Open the transcript instead.'); return; }
  stopSpeech();
  const vs = (await voicesReady()).filter(v => /^en(-|_)/i.test(v.lang));
  const fem = vs.find(v => /female|samantha|karen|serena|moira|tessa|zira|libby|sonia|hazel|google uk english female|victoria|fiona/i.test(v.name)) || vs.find(v => /en-GB/i.test(v.lang)) || vs[0];
  const mal = vs.find(v => /male|daniel|alex|arthur|oliver|ryan|george|google uk english male|fred|tom|rishi/i.test(v.name) && !/female/i.test(v.name)) || vs.find(v => v !== fem) || fem;
  const parts = [];
  lines.forEach(([who, text]) => text.split(/(?<=[.!?])\s+/).forEach(s => s.trim() && parts.push([who, s])));
  SPK = { on: true, q: parts, i: 0 };
  const next = () => {
    if (!SPK.on || SPK.i >= SPK.q.length) { SPK.on = false; opt.onend && opt.onend(); return; }
    const [who, s] = SPK.q[SPK.i++]; const u = new SpeechSynthesisUtterance(s);
    const v = who && opt.voices && opt.voices[who] === 'm' ? mal : fem; if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-GB';
    u.rate = opt.rate || .92; u.pitch = who && opt.voices && opt.voices[who] === 'm' ? .9 : 1.05;
    u.onend = () => setTimeout(next, opt.gap || 220); u.onerror = () => setTimeout(next, 50);
    speechSynthesis.speak(u);
  };
  next();
}
function stopSpeech() { SPK.on = false; try { speechSynthesis.cancel(); } catch (e) {} }
function listeningRoom(sub, arg) {
  const L = window.LISTENING;
  view.innerHTML = roomHead('listening') + tabs('listening', [['learn', '📚 What to listen for'], ['tests', '📝 Mock listening tests'], ['chat', '💬 Group chat']], sub || 'learn') + '<div id="rb"></div>';
  const rb = $('#rb');
  if (!sub || sub === 'learn') {
    if (arg) { const S = L.lessons.find(x => x.id === arg); rb.innerHTML = `<div class="card learn"><span class="ribbon">${S.src}</span><h2><i class="emo">${S.emoji}</i>${S.title}</h2>${renderBlocks(S.blocks)}${S.audio ? `<div class="player" id="pl"><div class="disc">🎧</div><button class="btn sm" id="play">▶ Listen to the example</button><button class="btn sm ghost" id="stop">■ Stop</button></div>` : ''}${S.q ? '<div id="lq"></div>' : ''}<div class="row" style="margin-top:12px"><a class="btn ghost" href="#/room/listening/learn">All lessons</a></div></div>`;
      if (S.audio) { $('#play', rb).onclick = () => { $('#pl', rb).classList.add('playing'); speakLines(S.audio, { voices: S.voices, onend: () => $('#pl', rb) && $('#pl', rb).classList.remove('playing') }); }; $('#stop', rb).onclick = () => { stopSpeech(); $('#pl', rb).classList.remove('playing'); }; }
      if (S.q) runQuiz($('#lq', rb), { title: 'Try it', questions: S.q, key: 'l_' + S.id, room: 'listening' }); return; }
    rb.innerHTML = `<div class="card"><p>🔈 Turn up your volume. Your phone reads the recordings aloud. If you hear no sound, check that silent mode is off.</p></div><div class="topic-grid">${L.lessons.map(S => `<button class="topic" data-l="${S.id}"><span class="ribbon src">${S.src}</span><b><i class="emo">${S.emoji}</i>${S.title}</b><small>${S.short}</small></button>`).join('')}</div>`;
    $$('.topic', rb).forEach(b => b.onclick = () => go(`#/room/listening/learn/${b.dataset.l}`));
  } else if (sub === 'tests') {
    if (arg) return listeningTest(rb, L.tests.find(x => x.id === arg));
    rb.innerHTML = `<div class="card"><h2>Mock listening tests</h2><p class="hint">Like the exam: read the questions, listen twice, answer. The transcript opens after you submit.</p></div>${focusGrid(L.tests, T => `<button class="topic" data-t="${T.id}"><span class="ribbon src">${T.unit}</span><b><i class="emo">${T.emoji}</i>${T.title}</b><small>${T.kind} · ${T.q.length} questions${bestTxt('listening', 't_' + T.id)}</small></button>`)}`;
    $$('.topic', rb).forEach(b => b.onclick = () => go(`#/room/listening/tests/${b.dataset.t}`));
  } else if (sub === 'chat') chatGame(rb, window.CHATS.listening, 'listening');
}
function listeningTest(rb, T, inExam) {
  let plays = 0;
  rb.innerHTML = `<div class="card"><span class="ribbon">${T.unit}</span><h2><i class="emo">${T.emoji}</i>${T.title}</h2><p>${T.situation}</p>
    <div class="player" id="pl"><div class="disc">🎧</div><div><b>Plays: <span id="pc">0</span> / 2</b><br><span class="hint">Read the questions below first.</span></div>
    <button class="btn sm" id="play">▶ Play</button><button class="btn sm ghost" id="stop">■ Stop</button>
    <select id="rate"><option value=".85">Slower</option><option value=".95" selected>Normal</option><option value="1.05">Faster</option></select></div></div><div id="qz"></div><div id="tr"></div>`;
  const pl = $('#pl', rb);
  $('#play', rb).onclick = () => { if (plays >= 2) { toast('You have listened twice, like in the exam.'); return; } plays++; $('#pc', rb).textContent = plays; pl.classList.add('playing'); speakLines(T.script, { voices: T.voices, rate: +$('#rate', rb).value, onend: () => pl.classList.remove('playing') }); };
  $('#stop', rb).onclick = () => { stopSpeech(); pl.classList.remove('playing'); };
  runQuiz($('#qz', rb), { title: `Questions: ${T.title}`, questions: T.q, mode: 'exam', key: 't_' + T.id, room: 'listening', intro: 'You can answer while you listen.',
    onDone: () => { $('#tr', rb).innerHTML = `<details class="card" open><summary><b>📄 Transcript</b></summary><div class="transcript">${T.script.map(([w, t]) => `<p>${w ? `<b>${T.names ? T.names[w] : w}:</b> ` : ''}${esc(t)}</p>`).join('')}</div></details>`; } });
}

// ================= SPEAKING TERRACE =================
function speakingRoom(sub, arg) {
  const S = window.SPEAKING;
  view.innerHTML = roomHead('speaking') + tabs('speaking', [['learn', '🌷 How to build an answer'], ['practise', '🎙️ Record and get feedback'], ['chat', '💬 Group chat']], sub || 'learn') + '<div id="rb"></div>';
  const rb = $('#rb');
  if (!sub || sub === 'learn') {
    if (arg) { const L = S.lessons.find(x => x.id === arg); rb.innerHTML = `<div class="card learn"><span class="ribbon">${L.src}</span><h2><i class="emo">${L.emoji}</i>${L.title}</h2>${renderBlocks(L.blocks)}<div class="row" style="margin-top:12px"><a class="btn" href="#/room/speaking/practise">Record yourself 🎙️</a><a class="btn ghost" href="#/room/speaking/learn">All lessons</a></div></div>`; return; }
    rb.innerHTML = `<div class="card"><h2>The speaking colour code</h2><div class="legend"><span style="background:var(--c-topic)">Introduce / signpost</span><span style="background:var(--c-support)">Main point</span><span style="background:var(--c-detail)">Reason / example</span><span style="background:var(--c-counter)">Contrast / counter-argument</span><span style="background:var(--c-conc)">Conclusion</span></div></div><div class="topic-grid">${S.lessons.map(L => `<button class="topic" data-l="${L.id}"><span class="ribbon src">${L.src}</span><b><i class="emo">${L.emoji}</i>${L.title}</b><small>${L.short}</small></button>`).join('')}</div>`;
    $$('.topic', rb).forEach(b => b.onclick = () => go(`#/room/speaking/learn/${b.dataset.l}`));
  } else if (sub === 'practise') {
    if (arg) return speakTask(rb, S.tasks.find(x => x.id === arg));
    rb.innerHTML = `<div class="card"><h2>Speaking practice</h2><p class="hint">Choose a question, plan with the colours, record yourself, listen back and get automatic feedback on your structure and language. Your recording stays on your phone.</p></div>${focusGrid(S.tasks, T => `<button class="topic" data-t="${T.id}"><span class="ribbon src">${T.unit}</span><b><i class="emo">${T.emoji}</i>${T.title}</b><small>${T.kind} · ${T.time}</small></button>`)}`;
    $$('.topic', rb).forEach(b => b.onclick = () => go(`#/room/speaking/practise/${b.dataset.t}`));
  } else if (sub === 'chat') chatGame(rb, window.CHATS.speaking, 'speaking');
}
function speakTask(rb, T) {
  rb.innerHTML = `<div class="card"><span class="ribbon">${T.unit}</span><h2><i class="emo">${T.emoji}</i>${T.title}</h2><div class="ex"><b>Question:</b> ${T.prompt}</div>
    <h3>1 · Plan with the colours</h3>${planTable(T.plan, true)}
    <details class="way"><summary><b>See a model answer (colour-coded)</b></summary><div class="legend"><span style="background:var(--c-topic)">Introduce</span><span style="background:var(--c-support)">Point</span><span style="background:var(--c-detail)">Reason / example</span><span style="background:var(--c-counter)">Contrast</span><span style="background:var(--c-conc)">Conclusion</span></div><p class="para">${T.model.map(([t, r]) => `<span class="s ${r}">${t}</span>`).join(' ')}</p><button class="btn sm ghost" id="hear">🔊 Hear the model</button></details>
    <h3>2 · Useful phrases (they turn green when you use them)</h3><div id="ph">${T.phrases.map(p => `<span class="phrase">${p}</span>`).join('')}</div>
    <h3>3 · Record yourself (aim for ${T.time})</h3>
    <div class="rec"><button class="recbtn" id="rec" aria-label="Start recording">🎙️</button><b id="rt">0:00</b><span class="hint" id="rs">Tap the microphone and start speaking.</span><audio id="au" controls hidden></audio></div>
    <details class="way" id="typed"><summary><b>No microphone? Type what you would say</b></summary><textarea class="pad" id="tx" style="min-height:120px" placeholder="Type your answer here, then tap Get feedback."></textarea><button class="btn sm" id="fbt">Get feedback</button></details>
    <div id="fbk"></div></div>`;
  $('#hear', rb).onclick = () => speakLines([[null, T.model.map(m => m[0]).join(' ')]], { rate: .92 });
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null, chunks = [], stream = null, recog = null, transcript = '', t0 = 0, tick = null, on = false;
  const btn = $('#rec', rb);
  btn.onclick = async () => {
    if (on) return stopAll();
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (e) { toast('Microphone not allowed. You can type your answer instead.'); $('#typed', rb).open = true; return; }
    chunks = []; transcript = ''; on = true; btn.classList.add('on'); btn.textContent = '■'; $('#rs', rb).textContent = 'Recording… tap again to stop.';
    try { rec = new MediaRecorder(stream); rec.ondataavailable = e => e.data.size && chunks.push(e.data); rec.onstop = () => { const au = $('#au', rb); au.src = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || 'audio/webm' })); au.hidden = false; }; rec.start(); } catch (e) { rec = null; }
    if (SR) { try { recog = new SR(); recog.lang = 'en-GB'; recog.continuous = true; recog.interimResults = false; recog.onresult = ev => { for (let k = ev.resultIndex; k < ev.results.length; k++) if (ev.results[k].isFinal) transcript += ' ' + ev.results[k][0].transcript; }; recog.onend = () => { if (on) { try { recog.start(); } catch (e) {} } }; recog.start(); } catch (e) { recog = null; } }
    t0 = Date.now(); tick = setInterval(() => { const s = Math.floor((Date.now() - t0) / 1000); $('#rt', rb).textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }, 300);
  };
  function stopAll() {
    on = false; btn.classList.remove('on'); btn.textContent = '🎙️'; clearInterval(tick);
    const secs = Math.round((Date.now() - t0) / 1000);
    try { rec && rec.state !== 'inactive' && rec.stop(); } catch (e) {}
    try { recog && recog.stop(); } catch (e) {}
    stream && stream.getTracks().forEach(t => t.stop());
    $('#rs', rb).textContent = 'Listen to yourself below.';
    setTimeout(() => feedback(transcript.trim(), secs, !!SR), 900);
  }
  $('#fbt', rb).onclick = () => feedback($('#tx', rb).value.trim(), null, true);
  function feedback(text, secs, hadSR) {
    const box = $('#fbk', rb);
    if (!text) { box.innerHTML = `<div class="fb no">${hadSR ? 'I could not hear clear words. Speak a little louder and closer to the phone, or type your answer above.' : 'Your browser cannot turn speech into text. Listen to your recording and use the checklist, or type your answer above to get feedback.'}</div>${checklistHTML(T)}`; return; }
    const low = text.toLowerCase(); const words = (low.match(/[a-z']+/g) || []).length;
    const used = T.phrases.filter(p => low.includes(p.toLowerCase().replace(/[.…]+/g, '').replace(/\s+/g, ' ').trim().split(' ').slice(0, 3).join(' ')));
    $$('.phrase', rb).forEach(el => el.classList.toggle('used', used.includes(el.textContent)));
    const keys = T.keywords.filter(k => low.includes(k.toLowerCase()));
    const parts = T.parts.map(([lab, re]) => [lab, new RegExp(re, 'i').test(low)]);
    const wpm = secs ? Math.round(words / secs * 60) : null;
    let pts = 0; pts += Math.min(4, parts.filter(p => p[1]).length * (4 / T.parts.length)); pts += Math.min(3, used.length); pts += Math.min(3, words / (T.minWords / 3));
    const score = Math.round(Math.min(10, pts));
    box.innerHTML = `<div class="way"><span class="tag">Automatic feedback</span><h3>${score} / 10 ${score >= 9 ? '🌟' : score >= 7 ? '💖' : '💪'}</h3>
      <p><b>${words} words</b>${secs ? ` in ${secs} seconds (${wpm} words a minute)` : ''}. ${words < T.minWords ? `Try to say more: aim for about ${T.minWords} words.` : 'Good length!'}</p>
      <div class="checklist">${parts.map(([l, ok]) => `<div class="${ok ? 'yes' : ''}">${l}</div>`).join('')}</div>
      <p><b>Useful phrases you used:</b> ${used.length ? used.join(' · ') : 'none yet. Try two or three from the list.'}</p>
      <p><b>Topic words you used:</b> ${keys.length ? keys.join(', ') : 'none yet.'} ${keys.length < 3 ? `Try: ${T.keywords.filter(k => !keys.includes(k)).slice(0, 4).join(', ')}.` : ''}</p>
      <details><summary>What the phone heard</summary><p class="hint">${esc(text)}</p></details>
      <p class="hint">The phone checks your structure and key language. It cannot judge pronunciation perfectly, so also listen to your recording.</p></div>`;
  }
}
function checklistHTML(T) { return `<div class="checklist">${T.parts.map(([l]) => `<div>${l}</div>`).join('')}</div>`; }

// ================= EXAM BALLROOM =================
function examRoom(sub) {
  const E = window.EXAM_BUILD;
  view.innerHTML = roomHead('exam') + '<div id="rb"></div>';
  const rb = $('#rb');
  if (!sub) {
    rb.innerHTML = `<div class="card"><h2>👑 The full mock exam</h2><p>Like the summative test, with one difference: your mark appears straight away.</p>
      <table class="tbl"><tr><th>Part</th><th>Questions</th></tr><tr><td>1 · Reading (a new text)</td><td>8</td></tr><tr><td>2 · Grammar</td><td>10</td></tr><tr><td>3 · Vocabulary</td><td>10</td></tr><tr><td>4 · Listening (phone reads aloud, 2 plays)</td><td>8</td></tr><tr><td>5 · Writing (two paragraphs, checklist and model)</td><td>self-check</td></tr></table>
      <p class="hint">Time: about 60 minutes. Find a quiet place, use headphones for Part 4.</p>
      <div class="row"><a class="btn" href="#/room/exam/go">Start the mock exam ✨</a></div></div>
      <div class="card"><h3>Your exam history</h3>${(store.get('examHist', [])).slice(-6).reverse().map(h => `<div class="ex">${h.d} · <b>${h.s}/${h.t}</b> (${h.p}%)</div>`).join('') || '<p class="hint">No exam yet.</p>'}</div>`;
    return;
  }
  const parts = E();
  let k = 0, tot = 0, got = 0;
  const next = () => {
    if (k >= parts.length) return done();
    const P = parts[k];
    if (P.kind === 'reading') {
      rb.innerHTML = `<div class="card"><span class="tag">Part ${k + 1} of ${parts.length}</span><h2>Reading</h2><div class="text"><h3>${P.test.heading}</h3>${P.test.text.map((p, n) => `<p><span class="pn">${n + 1}</span>${p}</p>`).join('')}</div></div><div id="qz"></div>`;
    } else if (P.kind === 'listening') {
      rb.innerHTML = `<div id="lt"></div>`; listeningTestExam($('#lt', rb), P.test, P.q); return;
    } else if (P.kind === 'writing') {
      rb.innerHTML = `<div class="card"><span class="tag">Part ${k + 1} of ${parts.length}</span><h2>Writing</h2><p>Write this task in the Writing Study. It saves your work, checks it with a live checklist and shows a model answer.</p><div class="ex">${P.task.task}</div><div class="row"><a class="btn" href="#/room/writing/write/${P.task.id}" target="_blank" rel="noopener">Open the writing task ✍️</a><button class="btn alt" id="fin">Finish and see my mark</button></div></div>`;
      $('#fin', rb).onclick = () => { k++; next(); }; return;
    } else rb.innerHTML = `<div class="card"><span class="tag">Part ${k + 1} of ${parts.length}</span><h2>${P.title}</h2></div><div id="qz"></div>`;
    runQuiz($('#qz', rb), { title: P.title, questions: P.q, mode: 'exam', intro: P.intro, onDone: pct => { const n = P.q.length; tot += n; got += Math.round(pct * n / 100); setTimeout(() => { $('#qz', rb).insertAdjacentHTML('beforeend', `<div class="row" style="justify-content:center"><button class="btn" id="nx">Next part ›</button></div>`); $('#nx', rb).onclick = () => { k++; next(); }; }, 50); } });
  };
  function listeningTestExam(host, T, qs) {
    let plays = 0;
    host.innerHTML = `<div class="card"><span class="tag">Part ${k + 1} of ${parts.length}</span><h2>Listening: ${T.title}</h2><p>${T.situation}</p><div class="player" id="pl"><div class="disc">🎧</div><b>Plays: <span id="pc">0</span> / 2</b><button class="btn sm" id="play">▶ Play</button><button class="btn sm ghost" id="stop">■ Stop</button></div></div><div id="qz"></div>`;
    $('#play', host).onclick = () => { if (plays >= 2) return toast('Two plays only, like the exam.'); plays++; $('#pc', host).textContent = plays; $('#pl', host).classList.add('playing'); speakLines(T.script, { voices: T.voices, rate: .95, onend: () => $('#pl', host) && $('#pl', host).classList.remove('playing') }); };
    $('#stop', host).onclick = () => { stopSpeech(); $('#pl', host).classList.remove('playing'); };
    runQuiz($('#qz', host), { title: 'Listening questions', questions: qs, mode: 'exam', onDone: pct => { const n = qs.length; tot += n; got += Math.round(pct * n / 100); stopSpeech(); setTimeout(() => { $('#qz', host).insertAdjacentHTML('beforeend', `<div class="row" style="justify-content:center"><button class="btn" id="nx">Next part ›</button></div>`); $('#nx', host).onclick = () => { k++; next(); }; }, 50); } });
  }
  function done() {
    const pct = tot ? Math.round(got / tot * 100) : 0; saveScore('exam', 'mock', pct);
    const h = store.get('examHist', []); h.push({ d: new Date().toLocaleDateString(), s: got, t: tot, p: pct }); store.set('examHist', h);
    rb.innerHTML = `<div class="card result"><span class="tag">Full mock exam</span><div class="big">${got} / ${tot}</div><div class="stars">${pct >= 90 ? '👑⭐⭐⭐' : pct >= 70 ? '⭐⭐' : '💪'}</div><h3>${pct}% in Parts 1 to 4</h3><p>${pct >= 90 ? 'You are ready for the summative test!' : 'Go back to the rooms where you lost marks, then take the exam again. Each new exam has different questions.'}</p>
      <div class="row" style="justify-content:center"><a class="btn" href="#/room/exam">Back to the Ballroom</a><a class="btn alt" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(`${me() || 'Student'} · Revision House · Full mock exam: ${got}/${tot} (${pct}%)`)}">Send on WhatsApp</a></div></div>`;
    if (pct >= 90) confetti();
  }
  next();
}

// ================= MY BEDROOM (plan) =================
function planRoom() {
  setTheme('plan'); setCrumbs([{ t: `${ICON('hall')} Hall`, href: '#/hall' }, { t: `${ICON('plan')} My Bedroom` }]);
  const P = window.PLANS, cur = store.get('plan', '');
  const prog = ['writing', 'grammar', 'vocab', 'reading', 'listening', 'exam'].map(id => [id, roomBest(id)]);
  const ready = Math.round(prog.reduce((a, [, v]) => a + (v || 0), 0) / prog.length);
  view.innerHTML = roomHead('plan') + `
    <div class="card"><h2>My progress ${me() ? '· ' + esc(me()) : ''}</h2><p>Exam readiness: <b>${ready}%</b> (average of your best marks). Target: <b>90%</b>.</p><div class="pbar"><i style="width:${ready}%"></i></div>
      ${prog.map(([id, v]) => `<div style="margin-top:10px"><b>${ROOMS[id].ic} ${ROOMS[id].name}</b> <span class="hint">${v != null ? v + '%' : 'not started'}</span><div class="pbar"><i style="width:${v || 0}%"></i></div></div>`).join('')}</div>
    <div class="card"><h2>Choose my plan colour</h2><p class="hint">Your teacher will tell you your colour. Each plan puts the rooms in the best order for you.</p>
      <div class="plans">${P.map(p => `<button class="plan" data-p="${p.id}" style="background:linear-gradient(150deg, ${p.c1}, ${p.c2})"><b><i class="emo">${p.emoji}</i>${p.name}</b>${p.who}</button>`).join('')}</div></div>
    <div id="pl"></div>`;
  $$('.plan', view).forEach(b => b.onclick = () => { store.set('plan', b.dataset.p); showPlan(b.dataset.p); $('#pl').scrollIntoView({ behavior: 'smooth' }); });
  if (cur) showPlan(cur);
  function showPlan(id) {
    const p = P.find(x => x.id === id); if (!p) return;
    $('#pl').innerHTML = `<div class="card"><h2><i class="emo">${p.emoji}</i>${p.name}: my steps</h2><p>${p.intro}</p><div class="steps">${p.steps.map(([t, h]) => `<a class="step" href="${h}">${t}</a>`).join('')}</div><p class="hint" style="margin-top:12px">${p.tip}</p></div>`;
  }
}

// ================= WHATSAPP GROUP CHAT GAME =================
const FRIENDS = { Reem: '#B0306A', Dana: '#3F5F94', Lama: '#4F7A5C', Noura: '#B5586E', Jood: '#7E4FA6' };
const wait = ms => new Promise(r => setTimeout(r, ms));
function chatGame(host, G, roomId) {
  let score = 0;
  host.innerHTML = `<div class="wa"><div class="wa-top"><div class="av">${G.icon}</div><div><b>${G.group}</b><small>${G.members}</small></div></div><div class="wa-body" id="wb"></div><div class="wa-task" id="wt"></div></div>`;
  const wb = $('#wb', host), wt = $('#wt', host);
  const mark = s => esc(s).replace(/\[\[(.+?)\]\]/g, '<span class="wrong">$1</span>');
  const say = async (who, html, cls = '') => { await wait(450); wb.insertAdjacentHTML('beforeend', `<div class="msg ${cls}">${who ? `<span class="who" style="color:${FRIENDS[who] || '#075E54'}">${who}</span>` : ''}${html}</div>`); wb.lastElementChild.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); };
  (async () => {
    await say(null, `${esc(me() || 'You')} joined the group`, 'sys');
    for (const [w, t] of G.intro) await say(w, esc(t));
    for (let n = 0; n < G.items.length; n++) {
      const it = G.items[n]; await say(it.who, mark(it.msg));
      const q = prepQ({ t: 'mcq', q: it.q, o: it.o, a: it.a, why: it.why });
      wt.innerHTML = `<div class="q" style="font-size:16px">${n + 1}/${G.items.length} · ${it.q}</div><div id="wa"></div>`;
      const ui = renderAnswer(q, $('#wa', wt));
      const res = await new Promise(r => $$('.opt', wt).forEach(b => b.addEventListener('click', () => setTimeout(() => r(ui.get()), 120))));
      const ok = res === q._a; if (ok) score++; ui.mark(ok);
      await say(null, ok ? `✅ ${esc(it.fix || strip(q._o[q._a]))}` : `❌ Correct: <b>${esc(strip(q._o[q._a]))}</b>`, 'me');
      await say(null, esc(it.why), 'sys'); await wait(400);
    }
    const pct = Math.round(score / G.items.length * 100); saveScore(roomId, 'chat', pct);
    wt.innerHTML = `<div class="result"><div class="big">${score} / ${G.items.length}</div><p>${pct >= 90 ? 'You saved the group chat! 💖' : 'Good try! Play again to get them all.'}</p><button class="btn" id="re">Play again</button></div>`;
    $('#re', wt).onclick = () => chatGame(host, G, roomId);
    if (pct >= 90) confetti();
  })();
}

// ---------- data integrity check (used in testing) ----------
window.__RH = { ROOMS, isRight, prepQ, norm, check() {
  const errs = []; const chkQ = (q, where) => {
    if (q.t === 'mcq') { if (!Array.isArray(q.o) || q.a == null || q.a >= q.o.length) errs.push(where + ' bad mcq'); if (new Set(q.o).size !== q.o.length) errs.push(where + ' duplicate options'); }
    else if (q.t === 'tf') { if (q.a !== true && q.a !== false && q.a !== 'dns') errs.push(where + ' bad tf'); }
    else if (q.t === 'gap') { if (!q.a || (Array.isArray(q.a) && !q.a.length)) errs.push(where + ' bad gap'); }
    else if (q.t === 'order') { if (normEnd(q.tiles.join(' ')) === undefined) errs.push(where); const t = q.tiles.slice().sort().join('|'); const a = normEnd(q.a); const tilesJoined = q.tiles.map(normEnd).sort().join('|'); const parts = []; let ok = true; const toks = q.tiles.map(x => normEnd(x)); if (normEnd(q.tiles.join(' ')).length !== normEnd(q.a).length) errs.push(where + ' order tiles do not make the answer: ' + q.a); }
    else if (q.t === 'seq') { if (!q.items || q.items.length < 3) errs.push(where + ' bad seq'); }
    else if (q.t === 'match') { if (!q.pairs || q.pairs.length < 2) errs.push(where + ' bad match'); }
    else if (q.t === 'roles') { if (!q.sents) errs.push(where + ' bad roles'); }
    else errs.push(where + ' unknown type ' + q.t);
    if (!q.why) errs.push(where + ' missing why');
  };
  GRAMMAR.topics.forEach(t => t.q.forEach((q, k) => chkQ(q, `grammar/${t.id}/${k}`)));
  VOCAB.recipes.forEach(r => r.make().forEach((q, k) => chkQ(q, `vocab/${r.id}/${k}`)));
  WRITING.exercises.forEach(e => e.q.forEach((q, k) => chkQ(q, `writing/${e.id}/${k}`)));
  READING.tests.forEach(t => t.q.forEach((q, k) => chkQ(q, `reading/${t.id}/${k}`)));
  LISTENING.tests.forEach(t => t.q.forEach((q, k) => chkQ(q, `listening/${t.id}/${k}`)));
  Object.entries(CHATS).forEach(([k, g]) => g.items.forEach((it, n) => { if (it.a >= it.o.length) errs.push(`chat/${k}/${n}`); }));
  return errs;
} };

route();
})();
