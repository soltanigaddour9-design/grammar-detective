// Revision House v2 · app engine (router with morph transitions, rooms, lessons, quizzes, flashcards, writing kits, mock exam)
// Prepared by Mr. Abdelkader Soltani. All content is original practice material for Unlock 3, Units 1 to 4.
(function () {
'use strict';
const D = document, R = D.documentElement;
const $ = (s, el = D) => el.querySelector(s);
const $$ = (s, el = D) => [...el.querySelectorAll(s)];
const view = $('#view'), bnav = $('#bnav');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const store = {
  get(k, d) { try { const v = localStorage.getItem('rh_' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('rh_' + k, JSON.stringify(v)); } catch (e) {} }
};
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);
const norm = s => String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').replace(/\s+([,.!?;:])/g, '$1').trim();
const normEnd = s => norm(s).replace(/[.!?]+$/, '').trim();
const toast = t => { const el = $('#toast'); el.textContent = t; el.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove('show'), 2200); };
const me = () => store.get('name', '');
const reduced = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
const getScores = () => store.get('scores2', {});
function saveScore(room, key, pct) {
  if (!room || !key) return; const s = getScores(); s[room] = s[room] || {}; const prev = s[room][key];
  if (prev == null || pct > prev) s[room][key] = pct; store.set('scores2', s);
}
const best = (room, key) => { const s = getScores()[room]; return s && s[key] != null ? s[key] : null; };
function secPct(room) { const s = getScores()[room]; if (!s) return 0; const v = Object.values(s); return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : 0; }

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

let _clearArm = 0;
function confirmSoft(msg) { if (Date.now() - _clearArm < 3000) return true; _clearArm = Date.now(); toast(msg + ' Tap again to confirm.'); return false; }
function planTable(rows, filled, saved = {}) {
  return `<table class="planner">${rows.map(([lab, val, col], k) => `<tr><th style="background:${col}">${lab}</th><td>${filled ? `<div style="padding:6px 8px;font-weight:600">${val}</div>` : (val ? `<div style="padding:6px 8px;font-weight:600">${val}</div>` : `<textarea data-p="${k}" rows="2" placeholder="Write notes (key words)">${esc(saved[k] || '')}</textarea>`)}</td></tr>`).join('')}</table>`;
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


// ================= v2 · SECTIONS =================
ANIM.pp = b => `<div class="ppline"><div class="tl"></div><div class="dot"></div><div class="arc"></div><span class="now">NOW</span><span class="lab l1">PAST: ${b.past}</span><span class="lab l2">${b.now}</span></div><p class="hint">${b.note || ''}</p>`;
const X = window.EXAM_INFO;
const SECS = {
  home: { na: ['#D9468A', '#8E6BD6'] },
  listening: { name: 'Listening', room: 'The Guest Room', na: ['#7356D6', '#F08A68'] },
  reading: { name: 'Reading', room: 'The Living Room', na: ['#D9644A', '#E9A93A'] },
  writing: { name: 'Writing', room: 'The Study', na: ['#CF2E66', '#C29A2A'] },
  grammar: { name: 'Grammar', room: 'The Workshop', na: ['#0E9C84', '#F0679A'] },
  vocab: { name: 'Vocabulary', room: 'The Kitchen', na: ['#E94C6E', '#E8A21E'] },
  speaking: { name: 'Speaking', room: 'The Garden Terrace', na: ['#2F9460', '#E2609F'] },
  exam: { name: 'Mock Exam', room: 'The Ballroom', na: ['#F5C46A', '#FF8FB8'] },
  me: { name: 'My Progress', room: 'My Bedroom', na: ['#B054D6', '#F28DBD'] }
};
const NAV = [['home', 'Home'], ['listening', 'Listen'], ['reading', 'Read'], ['writing', 'Write'], ['grammar', 'Grammar'], ['vocab', 'Words'], ['speaking', 'Speak']];
const inSec = (sec, x) => X.inSec(sec, x);
const unitsOf = x => X.unitsOf(x);
const uBadge = x => { const u = [...new Set(unitsOf(x))].sort(); return u.length ? `<span class="u">UNIT ${u.join(' + ')}</span>` : ''; };
const foot = () => `<div class="foot2">Prepared by<b>Mr. Abdelkader Soltani</b></div>`;

// ================= ROUTER + MORPH TRANSITIONS =================
const parse = h => { const p = (h || '').replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  if (!p.length) return { sec: 'home', depth: 0 };
  if (p[0] === 'me') return { sec: 'me', depth: 1 };
  if (p[0] === 's' && SECS[p[1]]) return { sec: p[1], mode: p[2] || '', id: p[3] || '', step: p[4] || '', depth: p[2] && p[2] !== 'u' ? 2 : 1 };
  return { sec: 'home', depth: 0 }; };
let prevHash = null, lastPtr = 0, src = null, srcT = 0;
D.addEventListener('pointerdown', e => { lastPtr = Date.now(); R.style.setProperty('--vx', e.clientX + 'px'); R.style.setProperty('--vy', e.clientY + 'px'); ripple(e); }, true);
D.addEventListener('click', e => { const el = e.target.closest && e.target.closest('.pcard, .scard, .kit, .xrow, .cta, .game'); src = el; srcT = Date.now(); }, true);
function ripple(e) {
  const el = e.target && e.target.closest && e.target.closest('.btn, .pcard, .xrow, .scard, .cta, .game, .kit, .opt, .quick a, .chips a');
  if (!el || reduced || el.disabled) return; const r = el.getBoundingClientRect(), s = Math.max(r.width, r.height);
  const k = D.createElement('span'); k.className = 'ripple'; k.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
  if (getComputedStyle(el).position === 'static') el.style.position = 'relative'; el.style.overflow = 'hidden'; el.appendChild(k); setTimeout(() => k.remove(), 700);
}
function kindOf(a, b) {
  if (!a) return 'init';
  if (a.sec !== b.sec) return b.sec === 'home' ? 'back' : 'enter';
  if (b.depth > a.depth) return 'deep'; if (b.depth < a.depth) return 'up';
  return 'tab';
}
window.addEventListener('hashchange', route);
function route() {
  const next = location.hash, a = prevHash == null ? null : parse(prevHash), b = parse(next); prevHash = next;
  const kind = kindOf(a, b);
  const go = () => { render(b); window.scrollTo(0, 0); };
  if (kind === 'init' || reduced || typeof D.startViewTransition !== 'function') { go(); if (kind !== 'init' && !reduced) { view.classList.remove('pg'); void view.offsetWidth; view.classList.add('pg'); } return; }
  if (Date.now() - lastPtr > 1500) { R.style.setProperty('--vx', '50%'); R.style.setProperty('--vy', '60%'); }
  R.dataset.vt = kind; R.dataset.dir = 'f';
  if (kind === 'tab' && a && b.mode === 'u' && a.mode === 'u') R.dataset.dir = +b.id < +a.id ? 'b' : 'f';
  const named = [];
  const fresh = src && Date.now() - srcT < 2000 && D.contains(src) ? src : null;
  if (kind === 'deep' && fresh && fresh.matches('.pcard, .scard, .kit, .game')) { const h = $('.rhero'); if (h && h.getBoundingClientRect().bottom < 0) { h.style.viewTransitionName = 'none'; named.push(h); } fresh.style.viewTransitionName = 'card'; named.push(fresh); }
  if (kind === 'deep' || kind === 'up' || kind === 'tab') $$('.rhero').forEach(h => { if (h.getBoundingClientRect().bottom < 0) { h.style.viewTransitionName = 'none'; named.push(h); } });
  let t; try { t = D.startViewTransition(() => { go(); if (kind === 'deep') { const p = $('.page > .story, .page > .card, .page > .deck, .page > div'); if (p) { p.style.viewTransitionName = 'card'; p.dataset.vtn = '1'; } } }); } catch (e) { go(); return; }
  const clean = () => { delete R.dataset.vt; named.forEach(x => x.style.viewTransitionName = ''); $$('[data-vtn]').forEach(x => { x.style.viewTransitionName = ''; delete x.dataset.vtn; }); src = null; };
  if (t.ready) t.ready.catch(() => {}); if (t.updateCallbackDone) t.updateCallbackDone.catch(() => {});
  t.finished.then(clean, clean);
}
function render(r) {
  stopSpeech();
  const theme = r.sec; D.body.className = 'v2 r-' + theme;
  const S = SECS[theme] || SECS.home; bnav.style.setProperty('--na1', S.na[0]); bnav.style.setProperty('--na2', S.na[1]);
  bnav.innerHTML = NAV.map(([id, lab]) => `<a href="${id === 'home' ? '#/' : '#/s/' + id}" class="${id === r.sec ? 'on' : ''}" aria-label="${lab}">${ICON(id)}<span>${lab}</span></a>`).join('');
  const P = { home, me: meRoom, listening: listeningRoom, reading: readingRoom, writing: writingRoom, grammar: grammarRoom, vocab: vocabRoom, speaking: speakingRoom, exam: examRoom }[r.sec] || home;
  P(r);
  $$('.stagger').forEach(g => [...g.children].forEach((c, i) => c.style.setProperty('--i', i)));
}

// ================= SHARED PIECES =================
function roomHero(sec, pills) {
  const S = SECS[sec], pct = secPct(sec), C = 2 * Math.PI * 25;
  return `<section class="rhero">${SCENE[sec] ? SCENE[sec]() : ''}<div class="ring"><svg viewBox="0 0 58 58"><circle class="bg" cx="29" cy="29" r="25" fill="none" stroke-width="6"/><circle class="fg" cx="29" cy="29" r="25" fill="none" stroke-width="6" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C}" data-off="${C * (1 - pct / 100)}"/></svg><b>${pct}%</b></div>
    <div class="ov"><div class="room">${S.room}</div><h1>${S.name}</h1><div class="pills">${pills.map(([t, hot]) => `<span class="pill2 ${hot ? 'hot' : ''}">${t}</span>`).join('')}</div></div></section>`;
}
function ringIn() { requestAnimationFrame(() => setTimeout(() => $$('.ring .fg').forEach(c => c.style.strokeDashoffset = c.dataset.off), 120)); }
const bar2 = (back, small, title) => `<div class="bar2"><a class="bk" href="${back}" aria-label="Back">${ICON('back')}</a><div class="t"><small>${small}</small><b>${title}</b></div></div>`;
function pcard({ href, emoji, title, sub, badge = '', stat = '', n }) {
  return `<a class="pcard" href="${href}"><span class="st">${emoji}${n ? `<span class="n">${n}</span>` : ''}</span><span>${badge}<b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</span><span class="stat">${stat || `<span class="go">${ICON('next')}</span>`}</span></a>`;
}
const statOf = (sec, key) => { const b = best(sec, key); return b == null ? '' : b >= 90 ? `<span class="ok">${ICON('check')}</span>` : `${b}%`; };
const gameCard = sec => `<a class="game" href="#/s/${sec}/c"><span class="av">${window.CHATS[sec].icon}</span><span><b>WhatsApp game: ${window.CHATS[sec].group}</b><small>Fix your friends' messages${best(sec, 'chat') != null ? ` · best ${best(sec, 'chat')}%` : ''}</small></span></a>`;
const cta = (href, title, sub, ic = 'bolt') => `<a class="cta" href="${href}">${ICON(ic)}<span><b>${title}</b><small>${sub}</small></span></a>`;
function unitChips(sec, base, cur, units) { return `<div class="chips">${['all', ...units].map(u => `<a href="${u === 'all' ? base : base + '/u/' + u}" class="${String(cur) === String(u) ? 'on' : ''}">${u === 'all' ? 'All units' : 'Unit ' + u}</a>`).join('')}</div>`; }
function mount(html) { view.innerHTML = html + foot(); ringIn(); }

// story (one idea per screen) ------------------------------------------------
function story(host, { screens, endLabel = 'Your turn', onEnd }) {
  let i = 0, dir = 1;
  const draw = () => {
    const s = screens[i];
    host.innerHTML = `<div class="story ${dir < 0 ? 'back' : ''}"><div class="dots">${screens.map((_, k) => `<i class="${k <= i ? 'on' : ''}"></i>`).join('')}</div><div class="sstage"><div>${s.html}</div></div>
      <div class="snav">${i > 0 ? `<button class="btn ghost" data-a="p">${ICON('back')} Back</button>` : ''}<button class="btn" data-a="n">${i < screens.length - 1 ? 'Next' : endLabel} ${ICON('next')}</button></div></div>`;
    $('[data-a="n"]', host).onclick = () => { if (i < screens.length - 1) { i++; dir = 1; draw(); top(); } else onEnd && onEnd(); };
    const pb = $('[data-a="p"]', host); if (pb) pb.onclick = () => { i--; dir = -1; draw(); top(); };
    if (s.mount) s.mount($('.sstage', host));
    let x0 = null; const st = $('.sstage', host);
    st.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    st.addEventListener('touchend', e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (dx < -60 && i < screens.length - 1) { i++; dir = 1; draw(); } else if (dx > 60 && i > 0) { i--; dir = -1; draw(); } x0 = null; });
  };
  const top = () => { const y = host.getBoundingClientRect().top + scrollY - 80; if (scrollY > y) window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' }); };
  draw();
}
const blockScreens = (blocks, first) => blocks.map((b, k) => ({ html: (k === 0 && first ? first : '') + renderBlocks([b]) }));
function yourTurn(host, { title, questions, key, room, after }) {
  host.innerHTML = `<div class="story"><div class="yourturn"><div class="big">✏️</div><h2>Your turn</h2><p class="muted">${questions.length} questions. You get help after every answer.</p></div><div id="yq"></div></div>`;
  runQuiz($('#yq', host), { title, questions, key, room, onDone: pct => setTimeout(() => { const r = $('.result', host); if (r && after) r.insertAdjacentHTML('beforeend', after(pct)); }, 30) });
}

// ================= HOME =================
function home() {
  const parts = X.parts;
  mount(`<section class="home-hero">${SCENE.home()}<div class="ttl"><span class="eyebrow">PSE 2A · Final exam revision</span><h1>The Revision <em>House</em></h1><div class="by">Prepared by Mr. Abdelkader Soltani</div></div><div class="girl">${ART.girl({ wave: true, bob: true })}</div></section>
    <div class="card xmap"><div class="head"><h2>Your exam</h2><div class="total">${X.total} <small>marks</small></div></div>
      <div class="mbar">${parts.map(p => `<i style="flex:${p.marks};background:linear-gradient(90deg,${SECS[p.sec].na[0]},${SECS[p.sec].na[1]})"></i>`).join('')}</div>
      <div class="stagger">${parts.map(p => `<a class="xrow" href="#/s/${p.sec}"><span class="chip" style="background:linear-gradient(150deg,${SECS[p.sec].na[0]},${SECS[p.sec].na[1]})">${ICON(p.sec)}</span><span><b>${p.name}</b><small>${p.units}${p.raw ? ` · marked out of ${p.raw}, then scaled to ${p.marks}` : ''}</small></span><span class="mk">${p.marks}<small>marks</small></span>${ICON('next', 'go')}</a>`).join('')}
      <a class="xrow spk" href="#/s/speaking"><span class="chip" style="background:linear-gradient(150deg,${SECS.speaking.na[0]},${SECS.speaking.na[1]})">${ICON('speaking')}</span><span><b>Speaking</b><small>${X.speaking}</small></span><span class="mk"><small>speaking</small></span>${ICON('next', 'go')}</a></div>
    </div>
    <div class="how"><div><span>1</span>Learn<br><small class="muted">short lessons</small></div><div><span>2</span>Try<br><small class="muted">help after every answer</small></div><div><span>3</span>Test<br><small class="muted">exam mode with marks</small></div></div>
    <div class="quick"><a class="qx" href="#/s/exam">${ICON('exam')}<b>Full mock exam</b><small>5 parts · 60 marks</small></a><a class="qm" href="#/me">${ICON('me')}<b>My progress</b><small>${me() ? esc(me()) + ' · ' : ''}plan and scores</small></a></div>`);
}

// ================= LISTENING =================
function listeningRoom(r) {
  const L = window.LISTENING;
  if (r.mode === 'c') return chatPage('listening');
  if (r.mode === 'l') { const S = L.lessons.find(x => x.id === r.id); if (!S) return go('#/s/listening');
    mount(bar2('#/s/listening', 'Listening skill', S.title) + '<div class="page"><div id="st"></div></div>');
    const screens = blockScreens(S.blocks);
    if (S.audio) screens.push({ html: `<div class="tag2">Listen</div><h3>Hear an example</h3><div class="player" id="pl"><div class="disc">🎧</div><button class="btn sm" id="play">${ICON('play')} Play</button><button class="btn sm ghost" id="stop">Stop</button></div><p class="hint">Turn up the volume. Silent mode must be off.</p>`, mount: el => { $('#play', el).onclick = () => { $('#pl', el).classList.add('playing'); speakLines(S.audio, { voices: S.voices, onend: () => $('#pl') && $('#pl').classList.remove('playing') }); }; $('#stop', el).onclick = () => { stopSpeech(); $('#pl', el).classList.remove('playing'); }; } });
    return story($('#st'), { screens, endLabel: S.q ? 'Your turn' : 'Done', onEnd: () => S.q ? yourTurn($('#st'), { title: S.title, questions: S.q, key: 'l_' + S.id, room: 'listening', after: () => `<p><a class="btn" href="#/s/listening">Back to the Guest Room</a></p>` }) : go('#/s/listening') });
  }
  if (r.mode === 't') { const T = L.tests.find(x => x.id === r.id); if (!T) return go('#/s/listening');
    mount(bar2('#/s/listening', `Mock test · ${T.kind}`, T.title) + '<div class="page"><div id="lt"></div></div>');
    return listenTest($('#lt'), T, { key: 't_' + T.id, room: 'listening' });
  }
  const tests = L.tests.filter(t => inSec('listening', t));
  mount(roomHero('listening', [['10 marks', 1], ['Unit 4'], ['you hear it twice']]) +
    `<p class="intro">Learn what to listen for, then take a mock test. Your phone reads the recording aloud, and you can play it twice, like the exam.</p>
    <div class="lbl">Learn the skills</div><div class="hs stagger">${L.lessons.map(S => `<a class="scard ${best('listening', 'l_' + S.id) != null ? 'done' : ''}" href="#/s/listening/l/${S.id}"><span class="e">${S.emoji}</span><b>${S.title}</b><small>${S.short}</small></a>`).join('')}</div>
    <div class="lbl">Mock tests · 10 questions = 10 marks</div><div class="path stagger">${tests.map((T, i) => pcard({ href: `#/s/listening/t/${T.id}`, emoji: T.emoji, n: i + 1, badge: uBadge(T), title: T.title, sub: `${T.kind} · ${T.q.length} questions`, stat: statOf('listening', 't_' + T.id) })).join('')}</div>
    ${gameCard('listening')}`);
}
function listenTest(host, T, { key, room, onDone, intro } = {}) {
  let plays = 0;
  host.innerHTML = `<div class="card"><p>${T.situation}</p><div class="player" id="pl"><div class="disc">🎧</div><div><b>Plays: <span id="pc">0</span> / 2</b><br><span class="hint">Read the questions first.</span></div>
    <button class="btn sm" id="play">${ICON('play')} Play</button><button class="btn sm ghost" id="stop">Stop</button><select id="rate"><option value=".85">Slower</option><option value=".95" selected>Normal</option><option value="1.05">Faster</option></select></div></div><div id="qz"></div><div id="tr"></div>`;
  const pl = $('#pl', host);
  $('#play', host).onclick = () => { if (plays >= 2) { toast('You have listened twice, like in the exam.'); return; } plays++; $('#pc', host).textContent = plays; pl.classList.add('playing'); speakLines(T.script, { voices: T.voices, rate: +$('#rate', host).value, onend: () => pl.classList.remove('playing') }); };
  $('#stop', host).onclick = () => { stopSpeech(); pl.classList.remove('playing'); };
  runQuiz($('#qz', host), { title: `Questions: ${T.title}`, questions: T.q, mode: 'exam', key, room, intro: intro || 'Exam mode: answer while you listen. Your mark appears when you submit.',
    onDone: pct => { stopSpeech(); $('#tr', host).innerHTML = `<details class="card"><summary><b>📄 Transcript</b></summary><div class="transcript">${T.script.map(([w, t]) => `<p>${w ? `<b>${T.names ? T.names[w] : w}:</b> ` : ''}${esc(t)}</p>`).join('')}</div></details>`; onDone && onDone(pct); } });
}

// ================= READING =================
function readingRoom(r) {
  const RD = window.READING;
  if (r.mode === 'c') return chatPage('reading');
  if (r.mode === 'l') { const L = RD.lessons.find(x => x.id === r.id); if (!L) return go('#/s/reading');
    mount(bar2('#/s/reading', 'Reading move', L.title) + '<div class="page"><div id="st"></div></div>');
    return story($('#st'), { screens: blockScreens(L.blocks), endLabel: L.q ? 'Your turn' : 'Done', onEnd: () => L.q ? yourTurn($('#st'), { title: L.title, questions: L.q, key: 'l_' + L.id, room: 'reading', after: () => `<p><a class="btn" href="#/s/reading">Back to the Living Room</a></p>` }) : go('#/s/reading') });
  }
  if (r.mode === 't') { const T = RD.tests.find(x => x.id === r.id); if (!T) return go('#/s/reading');
    mount(bar2('#/s/reading', `Mock test · ${T.unit}`, T.title) + '<div class="page"><div id="rt"></div></div>');
    return readTest($('#rt'), T, { key: 't_' + T.id, room: 'reading' });
  }
  const cur = r.mode === 'u' ? r.id : 'all';
  const tests = RD.tests.filter(t => inSec('reading', t) && (cur === 'all' || unitsOf(t).includes(+cur)));
  mount(roomHero('reading', [['10 marks', 1], ['Units 2, 3 and 4'], ['main idea · detail · T/F · opinion']]) +
    `<p class="intro">Learn the five reading moves, then practise with texts like the exam. Read the questions first, then the text.</p>
    <div class="lbl">Reading moves</div><div class="hs stagger">${RD.lessons.map(L => `<a class="scard ${best('reading', 'l_' + L.id) != null ? 'done' : ''}" href="#/s/reading/l/${L.id}"><span class="e">${L.emoji}</span><b>${L.title}</b><small>${L.short}</small></a>`).join('')}</div>
    <div class="lbl">Mock tests</div>${unitChips('reading', '#/s/reading', cur, X.SEC.reading)}
    <div class="path stagger">${tests.map((T, i) => pcard({ href: `#/s/reading/t/${T.id}`, emoji: T.emoji, n: i + 1, badge: uBadge(T), title: T.title, sub: `${T.q.length} questions · about ${T.words} words`, stat: statOf('reading', 't_' + T.id) })).join('')}</div>
    ${gameCard('reading')}`);
}
function readTest(host, T, { key, room, onDone, sliceQ } = {}) {
  host.innerHTML = `<div class="card">${T.visual ? `<div class="ex" style="font-size:30px;text-align:center">${T.visual}</div>` : ''}<div class="row" style="justify-content:space-between"><span class="hint">Tip: read the questions first, then find the key words.</span><button class="btn sm ghost" id="tg">Hide text</button></div>
    <div class="text" id="txt"><h3>${T.heading}</h3>${T.text.map((p, k) => `<p><span class="pn">${k + 1}</span>${p}</p>`).join('')}</div></div><div id="qz"></div>`;
  $('#tg', host).onclick = e => { const t = $('#txt', host); t.hidden = !t.hidden; e.target.textContent = t.hidden ? 'Show text' : 'Hide text'; };
  const qs = sliceQ || T.q;
  runQuiz($('#qz', host), { title: `Questions: ${T.title}`, questions: qs, mode: 'exam', key, room, intro: 'Exam mode: no feedback until you submit. Scroll up to the text at any time.', onDone: pct => { const r = $('.result', host); if (r && !onDone) r.insertAdjacentHTML('beforeend', `<p class="hint">In the real exam, this would be about <b>${Math.round(pct / 10)} / 10</b>.</p>`); onDone && onDone(pct); } });
}

// ================= WRITING =================
const KITSTEPS = [['see', 'See it'], ['build', 'Build it'], ['write', 'Write it'], ['check', 'Check it']];
function kitDone(k) { const d = store.get('kitdone', {}); return d[k] || {}; }
function markKit(k, step) { const d = store.get('kitdone', {}); d[k] = d[k] || {}; d[k][step] = 1; store.set('kitdone', d); }
function writingRoom(r) {
  const W = window.WRITING, KITS = window.KITS;
  if (r.mode === 'c') return chatPage('writing');
  if (r.mode === 'q') { const map = { spell: ['🔤', 'Spelling check', W.spell], scatter: ['🧩', 'Scattered sentences', (W.exercises.find(e => e.id === 'scatter') || {}).q], roles: ['🎨', 'Colour the sentences', (W.exercises.find(e => e.id === 'roles') || {}).q], unity: ['🚫', 'The odd one out', (W.exercises.find(e => e.id === 'unity') || {}).q] }; const m = map[r.id]; if (!m || !m[2]) return go('#/s/writing');
    mount(bar2('#/s/writing', 'Quick practice', m[1]) + '<div class="page"><div id="qz"></div></div>');
    return runQuiz($('#qz'), { title: `${m[0]} ${m[1]}`, questions: shuffle(m[2]).slice(0, 10), key: 'q_' + r.id, room: 'writing', reshuffle: () => shuffle(m[2]).slice(0, 10) });
  }
  if (r.mode === 'k') { const K = KITS.find(k => k.id === r.id); if (!K) return go('#/s/writing'); return kitPage(K, r.step || 'see'); }
  mount(roomHero('writing', [['10 marks', 1], ['Units 2 and 4'], ['the biggest part']]) +
    `<p class="intro">Your exam essay will be one of these two types. Each kit takes you in four steps: <b>see</b> a model, <b>build</b> the parts, <b>write</b> your own, <b>check</b> it with a model and a self-check out of 10.</p>
    <div class="kits stagger">${KITS.map(K => { const d = kitDone(K.id); return `<a class="kit" href="#/s/writing/k/${K.id}/${['see', 'build', 'write', 'check'].find(s => !d[s]) || 'check'}" style="background:linear-gradient(150deg,${K.color},color-mix(in srgb, ${K.color} 55%, #2A1236))"><span class="u">${K.unit.toUpperCase()}</span><span class="e">${K.emoji}</span><b>${K.title}</b><small>${K.short}</small><span class="steps4">${KITSTEPS.map(([s]) => `<i class="${d[s] ? 'on' : ''}"></i>`).join('')}</span></a>`; }).join('')}</div>
    <div class="lbl">Quick practice</div><div class="path stagger">
      ${pcard({ href: '#/s/writing/q/scatter', emoji: '🧩', title: 'Scattered sentences', sub: 'Put a paragraph in the right order', stat: statOf('writing', 'q_scatter') })}
      ${pcard({ href: '#/s/writing/q/roles', emoji: '🎨', title: 'Colour the sentences', sub: 'Topic, supporting, detail, concluding', stat: statOf('writing', 'q_roles') })}
      ${pcard({ href: '#/s/writing/q/spell', emoji: '🔤', title: 'Spelling check', sub: 'The words that lose the most marks', stat: statOf('writing', 'q_spell') })}</div>
    ${gameCard('writing')}`);
}
function kitPage(K, step) {
  const d = kitDone(K.id);
  const steps = `<div class="ksteps">${KITSTEPS.map(([s, t], i) => `<a href="#/s/writing/k/${K.id}/${s}" class="${s === step ? 'on' : ''} ${d[s] ? 'done' : ''}"><span>${d[s] ? '✓' : i + 1}</span>${t}</a>`).join('')}</div>`;
  mount(bar2('#/s/writing', `${K.unit} · writing kit`, `${K.emoji} ${K.title}`) + steps + '<div class="page"><div id="kb"></div></div>');
  const host = $('#kb'), nextStep = s => `#/s/writing/k/${K.id}/${s}`;
  if (step === 'see') return story(host, { screens: blockScreens(K.see), endLabel: 'Build it', onEnd: () => { markKit(K.id, 'see'); go(nextStep('build')); } });
  if (step === 'build') { host.innerHTML = '<div id="qz"></div>'; return runQuiz($('#qz', host), { title: `Build it: ${K.title}`, questions: K.build, key: 'kb_' + K.id, room: 'writing', intro: 'Practise each part of the essay. You get help after every answer.', onDone: () => { markKit(K.id, 'build'); setTimeout(() => { const r = $('.result', host); r && r.insertAdjacentHTML('beforeend', `<p><a class="btn" href="${nextStep('write')}">Now write it ${ICON('next')}</a></p>`); }, 30); } }); }
  if (step === 'write') return writePad(host, K, () => { markKit(K.id, 'write'); go(nextStep('check')); });
  if (step === 'check') return checkPage(host, K);
}
function evalChecks(T, text) {
  const words = (text.match(/[A-Za-z']+/g) || []).length, paras = text.split(/\n\s*\n/).filter(p => p.trim());
  const low = ' ' + text.toLowerCase().replace(/\s+/g, ' ') + ' ';
  return T.checks.map(([label, rule]) => {
    let ok;
    if (/^WORDS>=/.test(rule)) ok = words >= +rule.split('>=')[1];
    else if (/^PARAS>=/.test(rule)) ok = paras.length >= +rule.split('>=')[1];
    else if (/^NOT\(/.test(rule)) ok = text.trim().length > 20 && !new RegExp(rule.slice(4, -1), 'i').test(low);
    else if (rule === 'NOI1') ok = paras.length >= 1 && !/\b(i|my|me)\b/i.test(paras[0]);
    else ok = new RegExp(rule, 'i').test(low);
    return [label, ok];
  });
}
function writePad(host, K, onFinish) {
  const T = K.task, key = 'w2_' + K.id, saved = store.get(key, { plan: {}, text: '' });
  host.innerHTML = `<div class="card"><div class="tag2" style="color:var(--accent);font-weight:800;font-size:11px;letter-spacing:.16em">YOUR TASK</div><h3 style="margin-top:4px">${T.title}</h3><div class="ex">${T.prompt}</div>
    ${T.source ? `<div class="text source" style="margin-top:10px"><h3>${T.source.title}</h3><p class="hint">by ${T.source.author}</p><p>${T.source.text}</p></div>` : ''}</div>
    <div class="card"><h3>1 · Plan with key words</h3>${planTable(T.table, false, saved.plan)}</div>
    <div class="card"><h3>2 · Write <span class="wc" id="wc">0 words</span></h3><details class="way"><summary><b>Need help? Open the sentence frame</b></summary><div class="ex" style="white-space:pre-line">${T.frame}</div></details>
      <textarea class="pad" id="pad" placeholder="Write here. Leave an empty line between paragraphs. Your work is saved on this phone.">${esc(saved.text || '')}</textarea>
      <h3>3 · Live checklist</h3><div class="checklist" id="cl"></div>
      <div class="row" style="margin-top:12px"><button class="btn" id="fin">I've finished · check it ${ICON('next')}</button><a class="btn alt sm" id="wa" target="_blank" rel="noopener">Send to my teacher</a></div></div>`;
  $$('textarea[data-p]', host).forEach(ta => ta.oninput = () => { const s = store.get(key, { plan: {}, text: '' }); s.plan[ta.dataset.p] = ta.value; store.set(key, s); });
  const pad = $('#pad', host);
  const upd = () => { const text = pad.value; const s = store.get(key, { plan: {}, text: '' }); s.text = text; store.set(key, s);
    $('#wc', host).textContent = `${(text.match(/[A-Za-z']+/g) || []).length} words`;
    $('#cl', host).innerHTML = evalChecks(T, text).map(([l, ok]) => `<div class="${ok ? 'yes' : ''}">${l}</div>`).join('');
    $('#wa', host).href = `https://wa.me/?text=${encodeURIComponent(`${me() || 'Student'} · ${K.title}\n\n${text}`)}`; };
  pad.oninput = upd; upd();
  $('#fin', host).onclick = onFinish;
}
const RUBRIC = [['Task', 'I answered the question fully and stayed on the topic.'], ['Organization', 'Clear paragraphs, topic sentences and linkers.'], ['Vocabulary', 'Unit words, word partners and correct spelling.'], ['Grammar', 'Correct sentences, tenses and punctuation.']];
function rubricHTML(id) { const v = store.get('rubB_' + id, [1.5, 1.5, 1.5, 1.5]); const t = v.reduce((a, b) => a + b, 0); return `<div class="rubric">${RUBRIC.map(([n, d], i) => `<div class="rr"><b>${n} <span id="rv${i}">${v[i]} / 2.5</span></b><small>${d}</small><input type="range" min="0" max="2.5" step="0.5" value="${v[i]}" data-i="${i}"></div>`).join('')}</div><div class="score40" style="margin-top:12px"><div>My estimate</div><div class="big"><span id="r10">${t}</span> / 10</div></div>`; }
function bindRubric(host, id, cb) { $$('input[type=range]', host).forEach(inp => inp.oninput = () => { const v = $$('input[type=range]', host).map(x => +x.value); store.set('rubB_' + id, v); $('#rv' + inp.dataset.i, host).textContent = `${inp.value} / 2.5`; const t = v.reduce((a, b) => a + b, 0); $('#r10', host).textContent = t; cb && cb(t); }); }
function checkPage(host, K) {
  const T = K.task, saved = store.get('w2_' + K.id, { text: '' });
  host.innerHTML = `<div class="card"><h3>Compare with the model</h3><p class="hint">Look at the colours: does your writing have every part?</p>${T.model.map(p => `<p class="para">${p.map(([t, r]) => `<span class="s ${r}">${t}</span>`).join(' ')}</p>`).join('')}</div>
    ${saved.text ? `<details class="card"><summary><b>My writing</b></summary><div class="checklist" style="margin:8px 0">${evalChecks(T, saved.text).map(([l, ok]) => `<div class="${ok ? 'yes' : ''}">${l}</div>`).join('')}</div><p style="white-space:pre-line">${esc(saved.text)}</p></details>` : ''}
    <div class="card"><h3>Self-check out of 10</h3><p class="hint">Be honest. This is an estimate to help you improve; your teacher gives the real mark.</p>${rubricHTML(K.id)}</div>
    <div class="row"><a class="btn" href="#/s/writing/k/${K.id}/write">Improve my writing</a><a class="btn ghost" href="#/s/writing">Back to the Study</a></div>`;
  markKit(K.id, 'check');
  bindRubric(host, K.id, t => saveScore('writing', 'kit_' + K.id, Math.round(t / 10 * 100)));
}

// ================= GRAMMAR =================
function grammarRoom(r) {
  const G = window.GRAMMAR, topics = G.topics.filter(t => inSec('grammar', t));
  if (r.mode === 'c') return chatPage('grammar');
  if (r.mode === 't') { const t = topics.find(x => x.id === r.id); if (!t) return go('#/s/grammar'); const k = topics.indexOf(t), nx = topics[(k + 1) % topics.length];
    mount(bar2('#/s/grammar', `${t.src} · lesson ${k + 1} of ${topics.length}`, `${t.emoji} ${t.title}`) + '<div class="page"><div id="st"></div></div>');
    const first = t.why ? `<div class="ex"><b>Why it matters:</b> ${t.why}</div>` : '';
    return story($('#st'), { screens: blockScreens(t.learn, first), endLabel: 'Your turn', onEnd: () => yourTurn($('#st'), { title: t.title, questions: pick(t.q, 6), key: 'l_' + t.id, room: 'grammar', after: () => `<div class="row" style="justify-content:center;margin-top:10px"><a class="btn ghost" href="#/s/grammar/p/${t.id}">10 more questions</a><a class="btn" href="#/s/grammar/t/${nx.id}">Next lesson ${ICON('next')}</a></div>` }) });
  }
  if (r.mode === 'p') { const t = topics.find(x => x.id === r.id); if (!t) return go('#/s/grammar');
    mount(bar2(`#/s/grammar/t/${t.id}`, 'Practice', `${t.emoji} ${t.title}`) + '<div class="page"><div id="qz"></div></div>');
    return runQuiz($('#qz'), { title: `${t.emoji} ${t.title}`, questions: pick(t.q, 10), key: 'p_' + t.id, room: 'grammar', reshuffle: () => pick(t.q, 10) });
  }
  if (r.mode === 'r') { const mk = () => pick(topics.flatMap(t => t.q.map(q => ({ ...q, pre: `🔧 ${t.title}` }))), 10);
    mount(bar2('#/s/grammar', 'Mixed practice', '🎲 Random 10') + '<div class="page"><div id="qz"></div></div>');
    return runQuiz($('#qz'), { title: '🎲 Random 10 · Units 1 to 4', questions: mk(), key: 'random', room: 'grammar', reshuffle: mk });
  }
  if (r.mode === 'x') { const mk = () => { const a = topics.map(t => ({ ...pick(t.q, 1)[0], pre: `🔧 ${t.title}` })); return shuffle(a.concat(pick(topics.filter(t => unitsOf(t).includes(4)).flatMap(t => t.q), 15 - a.length))).slice(0, 15); };
    mount(bar2('#/s/grammar', 'Exam mode', '📝 Grammar test · 15 marks') + '<div class="page"><div id="qz"></div></div>');
    return runQuiz($('#qz'), { title: 'Grammar test · Units 1 to 4', questions: mk(), mode: 'exam', key: 'exam', room: 'grammar', timer: 15, intro: '15 questions, one mark each, like the grammar section of the exam.', reshuffle: mk });
  }
  const cur = r.mode === 'u' ? r.id : 'all';
  const list = topics.filter(t => cur === 'all' || unitsOf(t).includes(+cur));
  mount(roomHero('grammar', [['15 marks', 1], ['Units 1 to 4'], [`${topics.length} lessons`]]) +
    `<p class="intro">Every lesson shows the rule with colours and moving pictures, step by step. Then you try 6 questions with help after each answer.</p>
    ${unitChips('grammar', '#/s/grammar', cur, X.SEC.grammar)}
    <div class="path stagger">${list.map((t, i) => pcard({ href: `#/s/grammar/t/${t.id}`, emoji: t.emoji, n: i + 1, badge: uBadge(t), title: t.title, sub: t.short, stat: statOf('grammar', 'l_' + t.id) })).join('')}</div>
    ${cta('#/s/grammar/x', 'Grammar test · 15 questions', 'Exam mode with a timer and your mark out of 15', 'bolt')}
    <div class="row"><a class="btn ghost sm" href="#/s/grammar/r">🎲 Random 10 practice</a></div>
    ${gameCard('grammar')}`);
}

// ================= VOCABULARY =================
function vocabRoom(r) {
  const V = window.VOCAB;
  if (r.mode === 'c') return chatPage('vocab');
  if (r.mode === 'd') { const u = V.units.find(x => x.id === r.id); if (!u) return go('#/s/vocab');
    mount(bar2(`#/s/vocab/u/${u.id.slice(1)}`, 'Flashcards', `${u.emoji} ${u.title}`) + '<div class="page"><div id="dk"></div></div>');
    return deck($('#dk'), u);
  }
  if (r.mode === 'q') { const rc = V.recipes.find(x => x.id === r.id); if (!rc) return go('#/s/vocab');
    mount(bar2('#/s/vocab', 'Word game', `${rc.emoji} ${rc.title}`) + '<div class="page"><div id="qz"></div></div>');
    return runQuiz($('#qz'), { title: `${rc.emoji} ${rc.title}`, questions: rc.make(), key: 'q_' + rc.id, room: 'vocab', reshuffle: () => rc.make() });
  }
  if (r.mode === 'x') { const mk = () => V.exam().slice(0, 15);
    mount(bar2('#/s/vocab', 'Exam mode', '📝 Vocabulary test · 15 marks') + '<div class="page"><div id="qz"></div></div>');
    return runQuiz($('#qz'), { title: 'Vocabulary test · Units 1 to 4', questions: mk(), mode: 'exam', key: 'exam', room: 'vocab', timer: 12, intro: '15 questions, one mark each: words in sentences, meanings, word partners and word forms.', reshuffle: mk });
  }
  const cur = r.mode === 'u' ? r.id : '4';
  const u = V.units.find(x => x.id === 'u' + cur) || V.units[V.units.length - 1];
  const known = store.get('known', {}), kn = u.words.filter(w => known[w.w]).length;
  const games = ['watch', 'u4', 'suffix', 'pic', 'meaning', 'gap', 'partners', 'forms', 'prefix', 'spell', 'syn', 'stress'].map(id => V.recipes.find(x => x.id === id)).filter(Boolean);
  mount(roomHero('vocab', [['15 marks', 1], ['Units 1 to 4'], [`${V.units.reduce((a, x) => a + x.words.length, 0)} words`]]) +
    `<p class="intro">Choose a unit. Flip the cards: guess the word from the picture, then check the meaning. Then play the word games.</p>
    <div class="chips">${V.units.map(x => `<a href="#/s/vocab/u/${x.id.slice(1)}" class="${x.id === u.id ? 'on' : ''}">Unit ${x.id.slice(1)}</a>`).join('')}</div>
    <div class="path stagger">${pcard({ href: `#/s/vocab/d/${u.id}`, emoji: '🃏', title: `${u.title.split('·')[1] || u.title} flashcards`, sub: `${u.words.length} words · you know ${kn}`, stat: kn === u.words.length ? `<span class="ok">${ICON('check')}</span>` : `${Math.round(kn / u.words.length * 100)}%` })}</div>
    <div class="lbl">Word games · all units</div><div class="hs stagger">${games.map(g => `<a class="scard ${best('vocab', 'q_' + g.id) != null ? 'done' : ''}" href="#/s/vocab/q/${g.id}"><span class="e">${g.emoji}</span><b>${g.title}</b><small>${g.short}</small></a>`).join('')}</div>
    ${cta('#/s/vocab/x', 'Vocabulary test · 15 questions', 'Exam mode with your mark out of 15')}
    ${gameCard('vocab')}`);
}
function deck(host, u) {
  const known = store.get('known', {});
  let order = shuffle(u.words.filter(w => !known[w.w])); if (!order.length) order = shuffle(u.words);
  let i = 0; const total = order.length;
  const draw = (anim = 'in') => {
    if (i >= order.length) return finish();
    const w = order[i];
    host.innerHTML = `<div class="deckprog"><span>${Math.min(i + 1, total)} / ${total}</span><span class="pb"><i style="width:${i / total * 100}%"></i></span></div>
      <div class="deck"><div class="fc ${anim}" id="fc"><div class="side front"><div class="pic">${w.pic}</div><div class="guess">🤔 ${w.guess}</div><div class="tap">Tap to flip</div></div>
      <div class="side back"><div class="word">${esc(w.w)}</div><div class="stress">${w.stress} · <i>${w.pos}</i></div><div class="def">${w.def}</div><div class="exx">${w.ex[0]}</div>${w.fam ? `<div class="fam">family: ${w.fam}</div>` : ''}<button class="btn sm ghost" id="say" style="margin-top:10px">🔊 Hear it</button></div></div></div>
      <div class="deckbar"><button class="btn ghost" id="again">↺ Again</button><button class="btn" id="got">${ICON('check')} I know it</button></div>`;
    const fc = $('#fc', host);
    fc.onclick = e => { if (e.target.closest('#say') || fc.classList.contains('half')) return; fc.classList.remove('in'); fc.classList.add('half'); setTimeout(() => { fc.classList.toggle('flip'); fc.classList.remove('half'); }, 200); };
    $('#say', host).onclick = () => speakLines([[null, w.w + '. ' + strip(w.ex[0])]], { rate: .85 });
    $('#again', host).onclick = () => { fc.classList.add('out-l'); setTimeout(() => { order.push(order.splice(i, 1)[0]); draw(); }, 300); };
    $('#got', host).onclick = () => { const k = store.get('known', {}); k[w.w] = 1; store.set('known', k); fc.classList.add('out-r'); setTimeout(() => { i++; draw(); }, 300); };
  };
  const finish = () => {
    const words = u.words, qs = pick(words, Math.min(6, words.length)).map(w => ({ t: 'mcq', q: `Which word means: <b>${w.def}</b>?`, o: [w.w, ...pick(words.filter(x => x.w !== w.w), 3).map(x => x.w)], a: 0, why: `${w.w}: ${strip(w.ex[0])}` }));
    host.innerHTML = `<div class="story"><div class="yourturn"><div class="big">🎉</div><h2>Deck finished!</h2><p class="muted">Now a quick check: ${qs.length} questions.</p></div><div id="vq"></div></div>`;
    runQuiz($('#vq', host), { title: `Quick check · ${u.title}`, questions: qs, key: 'deck_' + u.id, room: 'vocab', onDone: () => setTimeout(() => { const r = $('.result', host); r && r.insertAdjacentHTML('beforeend', `<p><a class="btn" href="#/s/vocab/u/${u.id.slice(1)}">Back to the Kitchen</a></p>`); }, 30) });
  };
  draw();
}

// ================= SPEAKING =================
function speakingRoom(r) {
  const S = window.SPEAKING;
  if (r.mode === 'c') return chatPage('speaking');
  if (r.mode === 'l') { const L = S.lessons.find(x => x.id === r.id); if (!L) return go('#/s/speaking');
    mount(bar2('#/s/speaking', 'Speaking tip', L.title) + '<div class="page"><div id="st"></div></div>');
    return story($('#st'), { screens: blockScreens(L.blocks), endLabel: 'Record yourself', onEnd: () => { saveScore('speaking', 'l_' + L.id, 100); go('#/s/speaking'); } });
  }
  if (r.mode === 't') { const T = S.tasks.find(x => x.id === r.id); if (!T) return go('#/s/speaking');
    mount(bar2('#/s/speaking', `${T.unit} · ${T.kind} · ${T.time}`, `${T.emoji} ${T.title}`) + '<div class="page"><div id="sp"></div></div>');
    return speakTask($('#sp'), T);
  }
  const tasks = S.tasks.filter(t => inSec('speaking', t)), tips = S.lessons.filter(l => inSec('speaking', l));
  mount(roomHero('speaking', [['Units 1, 3 and 4', 1], ['record · listen · improve']]) +
    `<p class="intro">See how a good answer is built with colours. Then record yourself: the phone checks your structure and useful phrases.</p>
    <div class="lbl">Tips</div><div class="hs stagger">${tips.map(L => `<a class="scard ${best('speaking', 'l_' + L.id) != null ? 'done' : ''}" href="#/s/speaking/l/${L.id}"><span class="e">${L.emoji}</span><b>${L.title}</b><small>${L.short}</small></a>`).join('')}</div>
    <div class="lbl">Practise a speaking task</div><div class="path stagger">${tasks.map((T, i) => pcard({ href: `#/s/speaking/t/${T.id}`, emoji: T.emoji, n: i + 1, badge: uBadge(T), title: T.title, sub: `${T.kind} · ${T.time}` })).join('')}</div>
    ${gameCard('speaking')}`);
}

// ================= CHAT GAME PAGE =================
function chatPage(sec) {
  mount(bar2('#/s/' + sec, 'WhatsApp game', window.CHATS[sec].group) + '<div class="page"><div id="cg"></div></div>');
  chatGame($('#cg'), window.CHATS[sec], sec);
}

// ================= MOCK EXAM =================
function examRoom(r) {
  if (r.mode === 'go') return examRun();
  const hist = store.get('examHist2', []);
  mount(roomHero('exam', [['60 marks', 1], ['5 parts'], ['about 90 minutes']]) +
    `<div class="card"><h2>👑 The full mock exam</h2><p>The same parts and marks as the real exam. Each time you start, you get new questions.</p>
      <table class="xtable">${X.parts.map(p => `<tr><td>${p.name}<br><small class="muted">${p.units}</small></td><td>${p.marks}${p.raw ? `<small class="muted"> (from ${p.raw})</small>` : ''}</td></tr>`).join('')}<tr class="tot"><td>Total</td><td>${X.total}</td></tr></table>
      <p class="hint">Use headphones for listening. For writing, you write in the box and give yourself a self-check mark out of 10.</p></div>
    ${cta('#/s/exam/go', 'Start the mock exam', 'Listening → Reading → Grammar → Vocabulary → Writing', 'exam')}
    <div class="card"><h3>My mock exams</h3>${hist.slice(-6).reverse().map(h => `<div class="ex">${h.d} · <b>${h.s} / 60</b> (${Math.round(h.s / 60 * 100)}%)</div>`).join('') || '<p class="hint">No mock exam yet.</p>'}</div>`);
}
function examRun() {
  const parts = window.EXAM_V2(); let k = 0; const marks = [];
  mount(bar2('#/s/exam', 'Mock exam', 'The Ballroom') + '<div class="page"><div id="ex"></div></div>');
  const host = $('#ex');
  const head = P => `<div class="card" style="display:flex;justify-content:space-between;align-items:center"><div><small class="muted" style="font-weight:800;letter-spacing:.12em">PART ${k + 1} OF ${parts.length}</small><h2 style="margin:2px 0 0">${P.name}</h2></div><span class="pill2 hot">${P.marks} marks</span></div>`;
  const nextBtn = (box, last) => setTimeout(() => { box.insertAdjacentHTML('beforeend', `<div class="row" style="justify-content:center;margin:10px 0"><button class="btn" id="nx">${last ? 'See my results' : 'Next part'} ${ICON('next')}</button></div>`); $('#nx', box).onclick = () => { k++; step(); window.scrollTo(0, 0); }; }, 40);
  const step = () => {
    if (k >= parts.length) return results();
    const P = parts[k], scale = pct => Math.round(pct / 100 * P.marks * 2) / 2;
    if (P.kind === 'listening') { host.innerHTML = head(P) + '<div id="pp"></div>'; return listenTest($('#pp', host), { ...P.test, q: P.q }, { onDone: pct => { marks[k] = [P.name, scale(pct), P.marks]; nextBtn($('#pp', host)); } }); }
    if (P.kind === 'reading') { host.innerHTML = head(P) + '<div id="pp"></div>'; return readTest($('#pp', host), P.test, { sliceQ: P.q, onDone: pct => { marks[k] = [P.name, scale(pct), P.marks]; nextBtn($('#pp', host)); } }); }
    if (P.kind === 'grammar' || P.kind === 'vocab') { host.innerHTML = head(P) + '<div id="pp"></div>'; return runQuiz($('#pp', host), { title: P.name, questions: P.q, mode: 'exam', intro: `${P.q.length} questions, one mark each.`, onDone: pct => { marks[k] = [P.name, Math.round(pct / 100 * P.q.length), P.marks]; nextBtn($('#pp', host)); } }); }
    if (P.kind === 'writing') { const K = P.kit; host.innerHTML = head(P) + '<div id="pp"></div><div class="card"><h3>Self-check out of 10</h3><p class="hint">Read your writing again, then give yourself an honest mark. Your teacher gives the real mark.</p><div id="rb"></div></div><div class="row" style="justify-content:center"><button class="btn" id="done">See my results ' + ICON('next') + '</button></div>';
      writePad($('#pp', host), K, () => { $('#rb', host).scrollIntoView({ behavior: 'smooth' }); });
      $('#fin', host).innerHTML = 'Go to the self-check'; $('#rb', host).innerHTML = rubricHTML('exam_' + K.id); bindRubric($('#rb', host), 'exam_' + K.id);
      $('#done', host).onclick = () => { const v = store.get('rubB_exam_' + K.id, [1.5, 1.5, 1.5, 1.5]); marks[k] = [P.name + ' (self-check)', v.reduce((a, b) => a + b, 0), 10]; k++; step(); window.scrollTo(0, 0); }; }
  };
  const results = () => {
    const tot = marks.reduce((a, m) => a + (m ? m[1] : 0), 0), pct = Math.round(tot / 60 * 100);
    const h = store.get('examHist2', []); h.push({ d: new Date().toLocaleDateString(), s: tot }); store.set('examHist2', h); saveScore('exam', 'mock', pct);
    host.innerHTML = `<div class="card result"><span class="tag">Full mock exam</span><div class="big">${tot} / 60</div><div class="stars">${pct >= 90 ? '👑⭐⭐⭐' : pct >= 75 ? '⭐⭐' : '💪'}</div><h3>${pct}%</h3>
      <table class="xtable">${marks.map(m => m ? `<tr><td>${m[0]}</td><td>${m[1]} / ${m[2]}</td></tr>` : '').join('')}<tr class="tot"><td>Total</td><td>${tot} / 60</td></tr></table>
      <p>${pct >= 90 ? 'Excellent! You are ready.' : 'Go back to the rooms where you lost marks, then try again. Every mock exam has new questions.'}</p>
      <div class="row" style="justify-content:center"><a class="btn" href="#/s/exam">Back to the Ballroom</a><a class="btn alt" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(`${me() || 'Student'} · Revision House mock exam: ${tot}/60 (${pct}%)`)}">Send on WhatsApp</a></div></div>`;
    if (pct >= 90) confetti();
  };
  step();
}

// ================= MY PROGRESS (bedroom) =================
function meRoom() {
  const P = window.PLANS, cur = store.get('plan', '');
  const secs = ['listening', 'reading', 'writing', 'grammar', 'vocab', 'speaking', 'exam'];
  mount(roomHero('me', [['my plan and scores', 1]]) +
    `<div class="card"><h3>My name</h3><div class="namebox"><input id="nm" maxlength="20" placeholder="Your first name" value="${esc(me())}" autocomplete="off"><button class="btn sm" id="sv">Save</button></div><p class="hint">Your name appears on the scores you send on WhatsApp.</p></div>
    <div class="card"><h3>My progress</h3>${secs.map(s => `<div style="margin-top:10px"><b>${SECS[s].name}</b> <span class="hint">${secPct(s)}%</span><div class="pbar"><i style="width:${secPct(s)}%"></i></div></div>`).join('')}</div>
    <div class="card"><h3>My plan colour</h3><p class="hint">Your teacher will tell you your colour.</p><div class="plans">${P.map(p => `<button class="plan" data-p="${p.id}" style="background:linear-gradient(150deg, ${p.c1}, ${p.c2})"><b>${p.emoji} ${p.name}</b>${p.who}</button>`).join('')}</div></div><div id="pl"></div>`);
  $('#sv').onclick = () => { store.set('name', $('#nm').value.trim()); toast('Saved 💖'); };
  $$('.plan').forEach(b => b.onclick = () => { store.set('plan', b.dataset.p); show(b.dataset.p); $('#pl').scrollIntoView({ behavior: 'smooth' }); });
  const show = id => { const p = P.find(x => x.id === id); if (!p) return; $('#pl').innerHTML = `<div class="card"><h3>${p.emoji} ${p.name}</h3><p>${p.intro}</p><div class="steps">${p.steps.map(([t, h]) => `<a class="step" href="${h}">${t}</a>`).join('')}</div><p class="hint" style="margin-top:10px">${p.tip}</p></div>`; };
  if (cur) show(cur);
}

function go(h) { if (location.hash === h) route(); else location.hash = h; }

// ================= SPLASH =================
(function splash() {
  try { if (reduced || sessionStorage.getItem('rh_splash2')) return; sessionStorage.setItem('rh_splash2', '1'); } catch (e) { return; }
  let i = 0; const word = (w, em) => `<span class="wd">${em ? '<em>' : ''}${[...w].map(c => `<span style="--i:${i++}">${c}</span>`).join('')}${em ? '</em>' : ''}</span>`;
  const s = D.createElement('div'); s.id = 'splash'; s.setAttribute('aria-hidden', 'true');
  s.innerHTML = `<div><div class="sl"><img src="img/logo-ep.png" alt=""><img src="img/logo-almaarefa.png" alt=""><img src="img/logo-gedu.png" alt=""></div><h1>${word('The')} ${word('Revision')} ${word('House', true)}</h1><p>PSE 2A · Final exam</p><div class="barx"><i></i></div><small>Prepared by Mr. Abdelkader Soltani</small></div>`;
  D.body.appendChild(s); const out = () => { s.classList.add('out'); setTimeout(() => s.remove(), 1100); }; const tm = setTimeout(out, 1800); s.onclick = () => { clearTimeout(tm); out(); };
})();

window.__RH = { isRight, prepQ, check() {
  const errs = []; const chk = (q, w) => { if (!q || !q.t) { errs.push(w + ' missing'); return; } if (q.t === 'mcq' && (q.a == null || q.a >= q.o.length || new Set(q.o).size !== q.o.length)) errs.push(w + ' bad mcq'); if (!q.why) errs.push(w + ' no why'); };
  GRAMMAR.topics.forEach(t => t.q.forEach((q, k) => chk(q, 'g/' + t.id + k))); VOCAB.recipes.forEach(r => r.make().forEach((q, k) => chk(q, 'v/' + r.id + k)));
  READING.tests.forEach(t => t.q.forEach((q, k) => chk(q, 'r/' + t.id + k))); LISTENING.tests.forEach(t => t.q.forEach((q, k) => chk(q, 'l/' + t.id + k)));
  KITS.forEach(K => K.build.forEach((q, k) => chk(q, 'k/' + K.id + k))); return errs; } };
route();
})();
