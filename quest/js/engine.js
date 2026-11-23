// QUEST UNLOCKED · engine: storage, effects, question types, quiz runner with obstacle tracks, celebration, audio, speaking, writing
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);
const strip = h => { const d = document.createElement('div'); d.innerHTML = h; return d.textContent; };
const wait = ms => new Promise(r => setTimeout(r, ms));
const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------------- memory (this phone only) ----------------
const KEY = 'questunlocked_v1';
let mem = { name: '', g: '', best: {}, drafts: {}, sound: 1, seen: {} };
try { const raw = localStorage.getItem(KEY); if (raw) mem = Object.assign(mem, JSON.parse(raw)); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) {} };
const S = {
  get name() { return mem.name || ''; }, set name(v) { mem.name = String(v || '').trim().slice(0, 24); save(); },
  get g() { return mem.g || ''; }, set g(v) { mem.g = v === 'f' ? 'f' : v === 'm' ? 'm' : ''; save(); },
  get sound() { return mem.sound !== 0; }, set sound(v) { mem.sound = v ? 1 : 0; save(); },
  best: k => mem.best[k] || null,
  result(k, got, max) { const pct = max ? Math.round(got / max * 100) : 0; const old = mem.best[k]; const gain = Math.max(0, got - (old ? old.got : 0)); if (!old || got > old.got) mem.best[k] = { got, max, pct, t: Date.now() }; save(); return { pct, gain }; },
  coins() { return Object.values(mem.best).reduce((s, b) => s + (b.got || 0), 0); },
  zone(z) { const ks = Object.keys(mem.best).filter(k => k.startsWith(z + ':')); return { done: ks.filter(k => mem.best[k].pct >= 70).length, tried: ks.length }; },
  key(u) { const b = mem.best['quest:' + u]; return !!(b && b.pct >= 70); },
  keys() { return [1, 2, 3, 4, 5].filter(u => S.key(u)).length; },
  draft(k, v) { if (v === undefined) return mem.drafts[k] || ''; mem.drafts[k] = v; save(); },
  seen(k, v) { if (v === undefined) return !!mem.seen[k]; mem.seen[k] = 1; save(); },
  reset() { mem = { name: mem.name, g: mem.g, best: {}, drafts: {}, sound: mem.sound, seen: {} }; save(); }
};

// ---------------- toast + effects ----------------
function toast(msg) { const t = $('#toast'); if (!t) return; t.innerHTML = msg; t.classList.add('on'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('on'), 2600); }
const cols = () => { const cs = getComputedStyle(document.body); return ['--z', '--a1', '--a2', '--a3', '--gold'].map(v => cs.getPropertyValue(v).trim() || '#FFC83D'); };
function burst(el, colors) {
  if (!el || reduced()) return; colors = colors || cols(); const r = el.getBoundingClientRect(); const box = document.createElement('div'); box.className = 'burst'; box.style.left = (r.left + r.width / 2) + 'px'; box.style.top = (r.top + r.height / 2) + 'px';
  for (let i = 0; i < 12; i++) { const p = document.createElement('i'); const a = i / 12 * Math.PI * 2; p.style.setProperty('--dx', Math.cos(a) * (40 + Math.random() * 30) + 'px'); p.style.setProperty('--dy', Math.sin(a) * (40 + Math.random() * 30) + 'px'); p.style.background = colors[i % colors.length]; box.appendChild(p); }
  document.body.appendChild(box); setTimeout(() => box.remove(), 900);
}
function coinFly(n, fromEl) {
  const jar = $('#chest'); if (!jar || !n || reduced()) return updateCoins();
  const j = jar.getBoundingClientRect(); const f = fromEl ? fromEl.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 2, width: 0, height: 0 };
  for (let i = 0; i < Math.min(n, 8); i++) {
    const d = document.createElement('div'); d.className = 'drop'; d.innerHTML = '<span class="coin"></span>'; document.body.appendChild(d);
    const x0 = f.left + f.width / 2, y0 = f.top + f.height / 2, x1 = j.left + j.width / 2, y1 = j.top + j.height / 2;
    const mx = (x0 + x1) / 2 + (Math.random() - .5) * 160, my = Math.min(y0, y1) - 80 - Math.random() * 60;
    const frames = []; for (let k = 0; k <= 12; k++) { const t = k / 12; const x = (1 - t) ** 2 * x0 + 2 * (1 - t) * t * mx + t * t * x1, y = (1 - t) ** 2 * y0 + 2 * (1 - t) * t * my + t * t * y1; frames.push({ transform: `translate(${x - 12}px,${y - 12}px) rotateY(${t * 720}deg) scale(${1 - t * .3})`, opacity: k === 12 ? 0 : 1 }); }
    d.animate(frames, { duration: 900 + i * 90, easing: 'cubic-bezier(.3,.7,.4,1)', delay: i * 70 }).onfinish = () => { d.remove(); if (i === Math.min(n, 8) - 1) { updateCoins(); sfx('coin'); jar.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.3) rotate(-8deg)' }, { transform: 'scale(1)' }], { duration: 420 }); } };
  }
}
function updateCoins() { const el = $('#coinN'); if (el) el.textContent = S.coins(); const k = $('#keyN'); if (k) k.textContent = S.keys(); }
function confetti(n = 70) {
  if (reduced()) return; const c = document.createElement('div'); c.className = 'confetti'; const cl = cols().concat(['#FFFFFF', '#FFD23F']);
  for (let k = 0; k < n; k++) { const i = document.createElement('i'); i.style.left = Math.random() * 100 + 'vw'; i.style.background = cl[k % cl.length]; i.style.animationDelay = Math.random() * .9 + 's'; i.style.animationDuration = 2.2 + Math.random() * 1.8 + 's'; i.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg'); i.style.width = (6 + Math.random() * 8) + 'px'; c.appendChild(i); }
  document.body.appendChild(c); setTimeout(() => c.remove(), 4600);
}

// ---------------- sound effects (made by the phone, no files) ----------------
let AC = null;
function ac() { if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} } if (AC && AC.state === 'suspended') AC.resume(); return AC; }
function tone(f, d, type = 'sine', vol = .12, t0 = 0, slide) { const a = ac(); if (!a) return; const o = a.createOscillator(), g = a.createGain(); o.type = type; o.frequency.setValueAtTime(f, a.currentTime + t0); if (slide) o.frequency.exponentialRampToValueAtTime(slide, a.currentTime + t0 + d); g.gain.setValueAtTime(vol, a.currentTime + t0); g.gain.exponentialRampToValueAtTime(.0001, a.currentTime + t0 + d); o.connect(g).connect(a.destination); o.start(a.currentTime + t0); o.stop(a.currentTime + t0 + d + .02); }
function noise(d, vol = .3, t0 = 0, hp = 1200) { const a = ac(); if (!a) return; const n = a.createBuffer(1, a.sampleRate * d, a.sampleRate); const ch = n.getChannelData(0); for (let i = 0; i < ch.length; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / ch.length, 3); const s = a.createBufferSource(); s.buffer = n; const f = a.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = hp; const g = a.createGain(); g.gain.value = vol; s.connect(f).connect(g).connect(a.destination); s.start(a.currentTime + t0); }
function sfx(k) {
  if (!S.sound) return;
  try {
    if (k === 'ok') { tone(660, .12, 'triangle', .1); tone(990, .18, 'triangle', .1, .09); }
    else if (k === 'no') { tone(220, .22, 'sawtooth', .06, 0, 140); }
    else if (k === 'coin') { tone(1320, .08, 'square', .05); tone(1760, .14, 'square', .05, .07); }
    else if (k === 'step') { tone(300, .06, 'triangle', .07); }
    else if (k === 'punch') { noise(.12, .5, 0, 300); tone(90, .15, 'sine', .25, 0, 50); }
    else if (k === 'win') { [523, 659, 784, 1047].forEach((f, i) => tone(f, .28, 'triangle', .1, i * .12)); tone(1047, .6, 'triangle', .09, .5); }
    else if (k === 'lose') { [392, 330, 262].forEach((f, i) => tone(f, .3, 'sine', .09, i * .18)); }
    else if (k === 'clap') { for (let i = 0; i < 26; i++) noise(.05, .25 + Math.random() * .25, i * .09 + Math.random() * .05, 900 + Math.random() * 800); }
    else if (k === 'bell') { tone(880, .5, 'sine', .1); tone(1320, .4, 'sine', .05, .02); }
  } catch (e) {}
}

// ---------------- question engine ----------------
const normEnd = s => String(s || '').toLowerCase().replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').replace(/[\s.!?,;:]+$/, '').replace(/^[\s"]+|[\s"]+$/g, '').trim();
const normSent = s => String(s || '').toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();
function shuffleDiff(a) { if (a.length < 2) return a.slice(); let s, n = 0; do { s = shuffle(a); n++; } while (s.join('|') === a.join('|') && n < 12); return s; }
function prep(q) {
  q = { ...q };
  if (q.t === 'mcq') { if (q.keep) { q._o = q.o; q._a = q.a; } else { const idx = shuffle(q.o.map((_, k) => k)); q._o = idx.map(k => q.o[k]); q._a = idx.indexOf(q.a); } }
  if (q.t === 'tf') { q._o = q.labels || (q.dns ? ['True', 'False', 'Does not say'] : ['True', 'False']); q._a = q.a === true ? 0 : q.a === false ? 1 : 2; }
  if (q.t === 'order') q._tiles = shuffleDiff(q.tiles);
  if (q.t === 'seq') q._items = shuffleDiff(q.items);
  if (q.t === 'match') q._rights = shuffle(q.pairs.map(p => p[1]));
  if (q.t === 'weed') q._fix = shuffle(q.fix);
  return q;
}
const qText = q => { let s = q.q || ''; if (q.t === 'order' && !s) s = 'Put the words in the correct order.'; if (q.t === 'seq' && !s) s = 'Put them in the correct order.'; return s.replace(/___/g, '<span class="gapline">&nbsp;</span>'); };
function maxOf(q) { if (q.t === 'fill') return q.ans.length; if (q.t === 'seq' && q.partial) return q.items.length; return 1; }
function grade(q, res) {
  if (res == null) return 0;
  switch (q.t) {
    case 'mcq': case 'tf': return res === q._a ? 1 : 0;
    case 'gap': return [].concat(q.a).map(normEnd).includes(normEnd(res)) ? 1 : 0;
    case 'order': return [].concat(q.a, q.alt || []).map(normEnd).includes(normEnd(res)) ? 1 : 0;
    case 'seq': return q.partial ? res.filter((s, k) => s === q.items[k]).length : (res.join('|') === q.items.join('|') ? 1 : 0);
    case 'match': return res.every((v, k) => v === q.pairs[k][1]) ? 1 : 0;
    case 'roles': return res.every((v, k) => v === q.sents[k][1]) ? 1 : 0;
    case 'fill': return res.filter((v, k) => v && [].concat(q.ans[k]).map(normEnd).includes(normEnd(v))).length;
    case 'weed': return res.tok === q.bad && res.choice === q.good ? 1 : 0;
    case 'edit': return [].concat(q.a).map(normSent).includes(normSent(res)) ? 1 : 0;
  }
  return 0;
}
function correctText(q) {
  switch (q.t) {
    case 'mcq': case 'tf': return strip(q._o[q._a]);
    case 'gap': return [].concat(q.a)[0];
    case 'order': return q.a;
    case 'seq': return q.items.map((s, k) => `${k + 1}. ${strip(s)}`).join('  ');
    case 'match': return q.pairs.map(p => `${strip(p[0])} → ${p[1]}`).join(' · ');
    case 'roles': return q.sents.map(s => s[1]).join(', ');
    case 'fill': return q.ans.map((a, k) => `${k + 1} ${[].concat(a)[0]}`).join(' · ');
    case 'weed': return q.full;
    case 'edit': return [].concat(q.a)[0];
  }
  return '';
}
const ROLE = { topic: ['Topic / introduce', '#2F6DB5'], support: ['Supporting', '#2E8B57'], detail: ['Example / detail', '#D97706'], conc: ['Concluding / opinion', '#C2185B'], counter: ['Contrast', '#7E4FA6'], odd: ["Doesn't belong", '#7A6888'] };
function render(q, el, onPick) {
  const pickNotify = () => onPick && onPick();
  if (q.t === 'mcq' || q.t === 'tf') {
    el.innerHTML = `<div class="opts ${q._o.length === 2 ? 'two' : ''}">${q._o.map((o, k) => `<button class="opt" data-k="${k}"><span class="ok-dot"></span><span>${o}</span></button>`).join('')}</div>`;
    let sel = null;
    $$('.opt', el).forEach(b => b.onclick = () => { $$('.opt', el).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); sel = +b.dataset.k; pickNotify(); });
    return { get: () => sel, mark() { $$('.opt', el).forEach(b => { b.disabled = true; const k = +b.dataset.k; if (k === q._a) b.classList.add('right'); else if (k === sel) b.classList.add('wrong'); }); } };
  }
  if (q.t === 'gap') {
    el.innerHTML = `<input class="gapin" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type your answer">${q.help ? `<div class="hint">${q.help}</div>` : ''}`;
    const inp = $('input', el); inp.addEventListener('input', pickNotify);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { const b = el.closest('.qcard') && $('.chk', el.closest('.qcard')); b && b.click(); } });
    return { get: () => inp.value.trim() ? inp.value : null, mark(ok) { inp.disabled = true; inp.classList.add(ok ? 'right' : 'wrong'); } };
  }
  if (q.t === 'edit') {
    el.innerHTML = `<div class="hint">Change the sentence: replace the word or words with <b>${esc(q.word)}</b>. Edit the text below.</div><textarea class="editin" rows="2" spellcheck="false">${esc(q.start)}</textarea>`;
    const ta = $('textarea', el); ta.addEventListener('input', pickNotify);
    return { get: () => normSent(ta.value) === normSent(q.start) ? null : ta.value, mark(ok) { ta.disabled = true; ta.classList.add(ok ? 'right' : 'wrong'); } };
  }
  if (q.t === 'order') {
    el.innerHTML = `<div class="hint">Tap the words in order to build the sentence. Tap a word in your answer to send it back.</div><div class="tiles answer" data-ph="Build your sentence here 🧭"></div><div class="tiles pool">${q._tiles.map((w, k) => `<button class="tile" data-k="${k}">${esc(w)}</button>`).join('')}</div>`;
    const ta = $('.answer', el), tp = $('.pool', el); let picked = [];
    tp.onclick = e => { const b = e.target.closest('.tile'); if (!b || b.disabled) return; picked.push(+b.dataset.k); b.classList.add('used'); b.disabled = true; draw(); pickNotify(); };
    ta.onclick = e => { const b = e.target.closest('.tile'); if (!b || b.disabled) return; const k = +b.dataset.k; picked = picked.filter(x => x !== k); const src = $(`.pool .tile[data-k="${k}"]`, el); src.classList.remove('used'); src.disabled = false; draw(); };
    const draw = () => { ta.innerHTML = picked.map(k => `<button class="tile in" data-k="${k}">${esc(q._tiles[k])}</button>`).join(''); };
    return { get: () => picked.length === q._tiles.length ? picked.map(k => q._tiles[k]).join(' ') : null, mark(ok) { ta.classList.add(ok ? 'right' : 'wrong'); $$('.tile', el).forEach(t => t.disabled = true); } };
  }
  if (q.t === 'seq') {
    el.innerHTML = `<div class="hint">Tap in the correct order: 1, 2, 3… Tap again to undo.</div><div class="seq-list">${q._items.map((s, k) => `<button class="seq-item" data-k="${k}"><span class="n"></span><span>${s}</span></button>`).join('')}</div>`;
    let order = [];
    $$('.seq-item', el).forEach(b => b.onclick = () => { const k = +b.dataset.k; if (order.includes(k)) order = order.slice(0, order.indexOf(k)); else order.push(k); draw(); pickNotify(); });
    const draw = () => $$('.seq-item', el).forEach(b => { const k = +b.dataset.k, p = order.indexOf(k); b.classList.toggle('on', p >= 0); $('.n', b).textContent = p >= 0 ? p + 1 : ''; });
    return { get: () => order.length === q._items.length ? order.map(k => q._items[k]) : null, mark() { $$('.seq-item', el).forEach(b => { b.disabled = true; const k = +b.dataset.k; const right = q.items.indexOf(q._items[k]); b.classList.add(order.indexOf(k) === right ? 'right' : 'wrong'); if (order.indexOf(k) !== right) b.insertAdjacentHTML('beforeend', `<em class="should">→ ${right + 1}</em>`); }); } };
  }
  if (q.t === 'match') {
    el.innerHTML = `<div class="seq-list">${q.pairs.map((p, k) => `<label class="mrow"><b>${p[0]}</b><select data-k="${k}"><option value="">Choose…</option>${q._rights.map(r => `<option>${esc(r)}</option>`).join('')}</select></label>`).join('')}</div>`;
    $$('select', el).forEach(s => s.onchange = pickNotify);
    return { get: () => { const v = $$('select', el).map(s => s.value); return v.some(x => !x) ? null : v; }, mark() { $$('select', el).forEach(s => { s.disabled = true; s.classList.add(s.value === q.pairs[+s.dataset.k][1] ? 'right' : 'wrong'); }); } };
  }
  if (q.t === 'roles') {
    const roles = q.roles || ['topic', 'support', 'detail', 'conc'];
    el.innerHTML = `<div class="hint">Give each sentence its job. Tap a colour.</div><div class="seq-list">${q.sents.map((s, k) => `<div class="rrow" data-k="${k}"><span>${s[0]}</span><div class="roles">${roles.map(r => `<button class="role-btn" data-r="${r}" style="--rc:${ROLE[r][1]}">${ROLE[r][0]}</button>`).join('')}</div></div>`).join('')}</div>`;
    const val = q.sents.map(() => null);
    $$('.rrow', el).forEach(row => $$('.role-btn', row).forEach(b => b.onclick = () => { $$('.role-btn', row).forEach(x => x.classList.remove('on')); b.classList.add('on'); val[+row.dataset.k] = b.dataset.r; pickNotify(); }));
    return { get: () => val.some(v => !v) ? null : val, mark() { $$('.rrow', el).forEach(row => { const k = +row.dataset.k; row.classList.add(val[k] === q.sents[k][1] ? 'right' : 'wrong'); }); } };
  }
  if (q.t === 'fill') {
    let n = 0;
    const body = q.text.replace(/\(\d+\)\s*/g, '').replace(/___/g, () => { const k = n++; return `<button class="slot" data-k="${k}"><span class="sn">${k + 1}</span><span class="sv"></span></button>`; });
    el.innerHTML = `<div class="hint">${q.hint || 'Tap a gap, then tap a word from the box.'}</div><div class="fillbox ${q.list ? 'list' : ''}">${body}</div><div class="chips sticky">${q.box.map(w => `<button class="chip" data-w="${esc(w)}">${esc(w)}</button>`).join('')}</div>`;
    const vals = q.ans.map(() => null); let act = 0;
    const draw = () => $$('.slot', el).forEach(s => { const k = +s.dataset.k; $('.sv', s).textContent = vals[k] || ''; s.classList.toggle('filled', !!vals[k]); s.classList.toggle('act', k === act); });
    $$('.slot', el).forEach(s => s.onclick = () => { const k = +s.dataset.k; if (act === k && vals[k]) vals[k] = null; act = k; draw(); });
    $$('.chip', el).forEach(c => c.onclick = () => { if (act == null) return; vals[act] = c.dataset.w; const nx = vals.findIndex((v, k) => !v && k > act); act = nx >= 0 ? nx : vals.findIndex(v => !v); if (act < 0) act = null; draw(); burst(c); pickNotify(); });
    draw();
    return { get: () => vals.some(v => !v) ? (vals.some(v => v) ? vals : null) : vals, mark() { $$('.slot', el).forEach(s => { s.disabled = true; const k = +s.dataset.k; const ok = vals[k] && [].concat(q.ans[k]).map(normEnd).includes(normEnd(vals[k])); s.classList.add(ok ? 'right' : 'wrong'); if (!ok) $('.sv', s).innerHTML = `${vals[k] ? `<s>${esc(vals[k])}</s> ` : ''}<b>${esc([].concat(q.ans[k])[0])}</b>`; }); $$('.chip', el).forEach(c => c.disabled = true); } };
  }
  if (q.t === 'weed') {
    const mre = new RegExp('(^|\\s)' + q.bad.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?=[\\s.,!?]|$)').exec(q.s); const i = mre ? mre.index + mre[1].length : q.s.indexOf(q.bad); const before = q.s.slice(0, i).trim(), after = q.s.slice(i + q.bad.length).trim();
    const toks = [...(before ? before.split(/\s+/) : []), q.bad, ...(after ? after.split(/\s+/) : [])];
    el.innerHTML = `<div class="hint">1 · Tap the mistake. 2 · Choose the correction.</div><div class="weeds">${toks.map((t, k) => `<button class="wtok" data-t="${esc(t)}">${esc(t)}</button>`).join(' ')}</div><div class="wfix" hidden><div class="hint">Replace it with…</div><div class="opts">${q._fix.map(f => `<button class="opt" data-f="${esc(f)}">${esc(f)}</button>`).join('')}</div></div>`;
    let tok = null, choice = null;
    $$('.wtok', el).forEach(b => b.onclick = () => { $$('.wtok', el).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); tok = b.dataset.t; $('.wfix', el).hidden = false; pickNotify(); });
    $$('.wfix .opt', el).forEach(b => b.onclick = () => { $$('.wfix .opt', el).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); choice = b.dataset.f; pickNotify(); });
    return { get: () => tok && choice ? { tok, choice } : null, mark() { $$('.wtok', el).forEach(b => { b.disabled = true; if (b.dataset.t === q.bad) b.classList.add('weed'); else if (b.classList.contains('sel')) b.classList.add('wrong'); }); $$('.wfix .opt', el).forEach(b => { b.disabled = true; if (b.dataset.f === q.good) b.classList.add('right'); else if (b.classList.contains('sel')) b.classList.add('wrong'); }); } };
  }
  el.textContent = 'Unknown question type'; return { get: () => null, mark() {} };
}
function given(q, res) {
  if (res == null) return '(no answer)';
  if (q.t === 'mcq' || q.t === 'tf') return strip(q._o[res]);
  if (q.t === 'seq') return res.map((s, k) => `${k + 1}. ${strip(s)}`).join('  ');
  if (q.t === 'weed') return `${res.tok} → ${res.choice}`;
  if (q.t === 'fill') return res.map((v, k) => `${k + 1} ${v || '—'}`).join(' · ');
  if (Array.isArray(res)) return res.join(', ');
  return res;
}


// ---------------- quiz runner: one question at a time, on an obstacle track ----------------
const PRAISE = ['Yes! Keep going! ⚡', 'Brilliant! 🏆', 'Perfect! ⭐', 'Great move! 🧭', 'Strong answer! 💪', 'Excellent! 🔥'];
function trackHTML(kind, n) {
  const A = window.ART;
  return `<div class="track tk-${kind}" style="--n:${n}">${A && A.track ? A.track(kind) : ''}<div class="hero-run">${A ? A.runner(S.g) : '🧭'}</div><div class="danger">${A && A.danger ? A.danger(kind) : ''}</div><div class="flag">${A ? A.flag() : '🏁'}</div></div>`;
}
function runQuiz(host, opts) {
  const { title, questions, key, onDone, intro, track, lives: L0 } = opts;
  const qs = questions.map(prep); let i = 0, got = 0, max = 0, lives = L0 || 0; const log = [];
  if (!qs.length) { host.innerHTML = '<div class="card">No questions here yet.</div>'; return; }
  host.innerHTML = `<div class="quiz">${track ? trackHTML(track, qs.length) : ''}<div class="qbody"></div></div>`;
  const tk = $('.track', host), body = $('.qbody', host);
  const moveHero = (ok) => { if (!tk) return; tk.style.setProperty('--p', (i + (ok == null ? 0 : 1)) / qs.length); tk.style.setProperty('--d', Math.max(0, (L0 || 3) - lives) / (L0 || 3)); tk.classList.remove('hit', 'go'); void tk.offsetWidth; tk.classList.add(ok === false ? 'hit' : 'go'); };
  const hearts = () => L0 ? `<span class="lives">${Array.from({ length: L0 }, (_, k) => `<i class="${k < lives ? 'on' : ''}">❤</i>`).join('')}</span>` : '';
  const show = () => {
    const q = qs[i];
    body.innerHTML = `${i === 0 && intro ? `<div class="intro">${intro}</div>` : ''}
      <div class="qmeta"><span class="qno">${i + 1} / ${qs.length}</span>${hearts()}${q.src ? `<span class="pill">${q.src}</span>` : ''}</div>
      <div class="card qcard"><div class="q">${qText(q)}</div><div class="ans"></div><div class="fb" hidden></div>
      <div class="qact"><button class="btn chk" disabled>Check ✔</button></div></div>`;
    const card = $('.qcard', body); const ui = render(q, $('.ans', card), () => { chk.disabled = ui.get() == null; });
    const chk = $('.chk', card);
    chk.onclick = () => {
      const res = ui.get(); if (res == null) return toast('Choose or write an answer first 🧭');
      const g = grade(q, res), m = maxOf(q), ok = g === m; got += g; max += m; log.push({ q, res, ok, g, m }); ui.mark(ok);
      if (!ok && L0) lives--;
      const fb = $('.fb', card); fb.hidden = false; fb.className = 'fb ' + (ok ? 'yes' : 'no');
      fb.innerHTML = ok ? `<b>${PRAISE[Math.floor(Math.random() * PRAISE.length)]}</b> ${q.why || ''}` : `<b>${m > 1 ? `${g} / ${m}. ` : 'Not quite. '}Answer:</b> ${esc(correctText(q))}<br><span>${q.why || ''}</span>`;
      sfx(ok ? 'ok' : 'no'); moveHero(ok); const lv = $('.lives', body); if (lv) lv.outerHTML = hearts();
      if (ok) burst(chk); else card.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }], { duration: 300 });
      const dead = L0 && lives <= 0;
      chk.textContent = dead ? 'Oh no! See what happened' : i < qs.length - 1 ? 'Next ➜' : 'Finish 🏁'; chk.disabled = false;
      chk.onclick = () => { i++; if (dead) return finish(true); if (i < qs.length) { swap(body, show); } else finish(false); };
    };
  };
  const finish = (dead) => {
    const { pct, gain } = key && !dead ? S.result(key, got, max) : { pct: Math.round(got / max * 100), gain: 0 };
    const wrong = log.filter(l => !l.ok); const won = !dead && pct >= (opts.pass || 60);
    const stars = pct >= 90 ? '⭐⭐⭐' : pct >= 70 ? '⭐⭐' : pct >= 50 ? '⭐' : '☆';
    if (tk) { tk.style.setProperty('--p', dead ? i / qs.length : 1); tk.classList.toggle('won', won); tk.classList.toggle('lost', !!dead); }
    body.innerHTML = `<div class="card result ${won ? 'w' : 'l'}"><span class="tag">${esc(title || 'Challenge')}</span><div class="big">${got} / ${max}</div><div class="stars">${dead ? '💔' : stars}</div>
      <h3>${dead ? (opts.loseLine || 'You ran out of lives! Read the explanations below, then try again.') : pct >= 90 ? 'Champion! You beat this challenge.' : pct >= 70 ? 'You made it! Fix the mistakes below, then go for 90%.' : pct >= 60 ? 'You crossed the line! Try again for more stars.' : 'Not this time. Read the explanations, then try again.'}</h3>
      <p><b>${pct}%</b>${S.name ? ` · ${esc(S.name)}` : ''}${gain ? ` · +${gain} gold coins` : ''}</p>
      <div class="row center"><button class="btn again">Try again 🔁</button><a class="btn alt" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(`${S.name || 'Student'} · Quest Unlocked · ${strip(title || '')}: ${got}/${max} (${pct}%) ${stars}`)}">Send my score 💬</a></div>
      ${wrong.length ? `<div class="review"><h3>Learn from your mistakes</h3><ol>${wrong.map(l => `<li>${qText(l.q)}<br><span class="no">You: ${esc(given(l.q, l.res))}</span><br><span class="ok">Answer: ${esc(correctText(l.q))}</span><br><span class="hint">${l.q.why || ''}</span></li>`).join('')}</ol></div>` : '<p>No mistakes at all. Perfect! 💯</p>'}</div>`;
    if (won) celebrate({ pct, title: title, gain, from: $('.big', body), big: opts.bigWin, line: opts.winLine, extra: typeof opts.winExtra === 'function' ? opts.winExtra(pct) : opts.winExtra }); else { sfx('lose'); if (gain) coinFly(gain, $('.big', body)); else updateCoins(); }
    $('.again', body).onclick = () => runQuiz(host, { ...opts, questions: opts.remake ? opts.remake() : questions });
    onDone && onDone(dead ? 0 : pct);
  };
  moveHero(null); show();
}
function swap(host, fn) { if (reduced() || !host.animate) return fn(); const a = host.animate([{ opacity: 1, transform: 'translateX(0)' }, { opacity: 0, transform: 'translateX(-24px)' }], { duration: 160, easing: 'ease-in' }); a.onfinish = () => { fn(); host.animate([{ opacity: 0, transform: 'translateX(24px)' }, { opacity: 1, transform: 'translateX(0)' }], { duration: 220, easing: 'cubic-bezier(.2,.8,.2,1)' }); }; }
function resultMap(pct) { const n = Math.max(1, Math.round(pct / 20)); return `<div class="rg">${Array.from({ length: 5 }, (_, k) => `<span class="rgf ${k < n ? 'on' : ''}" style="--d:${k * 90}ms">${k < n ? '⭐' : '☆'}</span>`).join('')}</div>`; }

// ---------------- YOU WON: full-screen celebration with a clapping friend ----------------
function celebrate({ pct, title, gain, from, line, big, extra }) {
  const A = window.ART; const ov = document.createElement('div'); ov.className = 'won-ov';
  ov.innerHTML = `<div class="won-rays"></div><div class="won-card"><div class="won-big">${big || 'YOU WON!'}</div>
    ${extra || ''}<div class="won-clap">${A ? A.clapper(S.g) : '👏'}</div>
    <div class="won-sub">${esc(line || (S.name ? `Well done, ${S.name}!` : 'Well done!'))}</div>${title ? `<div class="won-t">${esc(strip(String(title)))}${pct != null ? ` · <b>${pct}%</b>` : ''}</div>` : ''}
    ${gain ? `<div class="won-coins">+${gain} <span class="coin"></span></div>` : ''}<button class="btn big won-ok">Continue ➜</button></div>`;
  document.body.appendChild(ov); sfx('win'); setTimeout(() => sfx('clap'), 380); confetti(90);
  const close = () => { ov.classList.add('out'); setTimeout(() => ov.remove(), 320); if (gain) coinFly(gain, from || $('.big')); else updateCoins(); };
  $('.won-ok', ov).onclick = close; ov.addEventListener('click', e => { if (e.target === ov) close(); });
}
// ---------------- paper runner: all questions on one page (mid-term style) ----------------
function runPaper(host, opts) {
  const { title, sections, key, onDone, banner } = opts; const all = [];
  host.innerHTML = `<div class="paper">${banner || ''}${sections.map((sec, si) => `<section class="psec" data-s="${si}"><div class="psh"><span class="pnum">${sec.tag || 'Part ' + (si + 1)}</span><h3>${sec.title}</h3></div>${sec.intro ? `<p class="pintro">${sec.intro}</p>` : ''}<div class="ppre"></div><div class="pqs"></div></section>`).join('')}
    <div class="pfoot"><button class="btn big finish">Check my answers 🏴‍☠️</button><p class="hint">You can answer in any order. Nothing is marked until you tap Check.</p></div><div class="pres"></div></div>`;
  sections.forEach((sec, si) => {
    const box = $(`.psec[data-s="${si}"]`, host);
    if (sec.pre) { const p = $('.ppre', box); if (typeof sec.pre === 'function') sec.pre(p); else p.innerHTML = sec.pre; }
    const qbox = $('.pqs', box);
    sec.questions.forEach((raw, k) => { const q = prep(raw); const d = document.createElement('div'); d.className = 'pq'; d.innerHTML = `${qText(q) ? `<div class="q"><span class="qn">${k + 1}</span>${qText(q)}</div>` : ''}<div class="ans"></div><div class="fb" hidden></div>`; qbox.appendChild(d); const ui = render(q, $('.ans', d)); all.push({ q, ui, d, sec: si }); });
  });
  $('.finish', host).onclick = e => {
    const empty = all.filter(a => a.ui.get() == null).length;
    if (empty && !e.currentTarget.dataset.sure) { e.currentTarget.dataset.sure = 1; e.currentTarget.textContent = `${empty} unanswered. Tap again to check anyway`; return; }
    let got = 0, max = 0; const per = sections.map(() => [0, 0]);
    all.forEach(a => { const res = a.ui.get(); const g = grade(a.q, res), m = maxOf(a.q); got += g; max += m; per[a.sec][0] += g; per[a.sec][1] += m; a.ui.mark(g === m); const fb = $('.fb', a.d); fb.hidden = false; fb.className = 'fb ' + (g === m ? 'yes' : 'no'); fb.innerHTML = g === m ? `✓ ${a.q.why || ''}` : `<b>Answer:</b> ${esc(correctText(a.q))}${a.q.why ? `<br><span>${a.q.why}</span>` : ''}`; });
    e.currentTarget.hidden = true;
    const { pct, gain } = key ? S.result(key, got, max) : { pct: Math.round(got / max * 100), gain: 0 };
    const pres = $('.pres', host);
    pres.innerHTML = `<div class="card result"><div class="res-garden">${resultMap(pct)}</div><span class="tag">${esc(title)}</span><div class="big">${got} / ${max}</div>
      <div class="partbars">${sections.map((s, k) => `<div><span>${s.tag || 'Part ' + (k + 1)} · ${strip(s.title)}</span><div class="bar"><i style="width:${per[k][1] ? per[k][0] / per[k][1] * 100 : 0}%"></i></div><b>${per[k][0]}/${per[k][1]}</b></div>`).join('')}</div>
      <h3>${pct >= 90 ? 'Excellent! You are ready for this paper.' : pct >= 70 ? 'Good! Read the red answers above, then try again.' : 'Keep going. Scroll up: every answer has an explanation.'}</h3>
      <div class="row center"><button class="btn again">Try again 🔁</button><a class="btn alt" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(`${S.name || 'Student'} · Quest Unlocked · ${strip(title)}: ${got}/${max} (${pct}%)`)}">Send my score 💬</a></div></div>`;
    pres.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
    if (pct >= 70) celebrate({ pct, title: strip(title) }); if (gain) coinFly(gain, $('.big', pres)); else updateCoins();
    $('.again', pres).onclick = () => { if (opts.remake) runPaper(host, opts.remake()); else runPaper(host, opts); window.scrollTo(0, 0); };
    host.dispatchEvent(new CustomEvent('paperdone'));
    onDone && onDone(pct);
  };
}

// ---------------- learn blocks ----------------
const ANIM = {
  cond: b => `<div class="stage"><div class="say s1">${b.left}</div><div class="say s2">${b.right}</div><div class="walker">🧭</div><div class="timeline"></div><span class="mark" style="left:14%">NOW (present)</span><span class="mark" style="left:82%">FUTURE (will)</span></div><p class="hint">${b.note || ''}</p>`,
  future: b => `<div class="meter">${b.rows.map(([w, p, c, s]) => `<div><b>${w}</b> <span class="hint">${s}</span><div class="bar"><div class="fill" style="width:${p}%;background:${c}">${p}%</div></div></div>`).join('')}</div><p class="hint">${b.note || ''}</p>`,
  race: b => `<div class="race">${b.rows.map(([car, lbl], k) => `<div class="lane l${k + 1}"><span class="car">${car}</span><span class="lbl">${lbl}</span></div>`).join('')}</div><p class="hint">${b.note || ''}</p>`,
  domino: b => `<div class="dominoes">${b.items.map(([t, c]) => `<div class="domino" style="background:${c}">${t}</div>`).join('')}</div><p class="hint">${b.note || ''}</p>`,
  train: b => `<div class="trainline">${b.items.map(([t, l, c]) => `<div class="wagon" style="background:${c}"><small>${l}</small>${t}</div>`).join('')}</div><p class="hint">${b.note || ''}</p>`,
  signs: b => `<div class="signs">${b.items.map(([ic, w, m, c]) => `<div class="sign" style="background:${c}"><span class="bigi">${ic}</span>${w}<br><small>${m}</small></div>`).join('')}</div>`,
  puzzle: b => b.items.map(([l, m, r, c]) => `<div class="puzzle"><span class="pz" style="background:${c}">${l}</span><span class="pz mid" style="color:${c}">${m}</span><span class="pz r" style="background:${c}">${r}</span></div>`).join('') + `<p class="hint">${b.note || ''}</p>`,
  unless: b => `<div class="switch"><span class="pill big">if … not</span><span class="eq">=</span><span class="pill big flip">unless</span></div>${b.items.map(x => `<div class="ex">${x}</div>`).join('')}`,
  pp: b => `<div class="ppline"><div class="tl"></div><div class="dot"></div><div class="arc"></div><span class="now">NOW</span><span class="lab l1">PAST: ${b.past}</span><span class="lab l2">${b.now}</span></div><p class="hint">${b.note || ''}</p>`
};
ANIM.meter = ANIM.future;
function blocks(list) {
  return (list || []).map((b, k) => {
    const st = `style="--i:${k}"`;
    if (b.k === 'rule') return `<div class="rule rv" ${st}>${b.title ? `<span class="tag">${b.title}</span>` : ''}${b.html}</div>`;
    if (b.k === 'way') return `<div class="way rv" ${st}><span class="tag">${b.tag || 'Another way to see it'}</span>${b.title ? `<h3>${b.title}</h3>` : ''}${b.html}</div>`;
    if (b.k === 'ex') return `<div class="way rv" ${st}><span class="tag">${b.title || 'Examples'}</span>${b.items.map(x => `<div class="ex">${x}</div>`).join('')}</div>`;
    if (b.k === 'mist') return `<div class="way rv" ${st}><span class="tag">Traps to avoid (common mistakes)</span><div class="mist">${b.items.map(([w, r]) => `<div class="w">✗ ${w}</div><div class="r">✓ ${r}</div>`).join('')}</div></div>`;
    if (b.k === 'anim') return `<div class="way rv" ${st}><span class="tag">${b.tag || 'See it move'}</span>${ANIM[b.type] ? ANIM[b.type](b) : ''}</div>`;
    if (b.k === 'html') return `<div class="rv" ${st}>${b.html}</div>`;
    return '';
  }).join('');
}

// ---------------- audio (the phone reads the scripts aloud) ----------------
let SPK = { on: false, q: [], i: 0 };
function voicesReady() { return new Promise(res => { const v = speechSynthesis.getVoices(); if (v.length) return res(v); speechSynthesis.onvoiceschanged = () => res(speechSynthesis.getVoices()); setTimeout(() => res(speechSynthesis.getVoices()), 1200); }); }
async function speak(lines, opt = {}) {
  if (!('speechSynthesis' in window)) { toast('Your browser cannot read aloud. Open the script instead.'); opt.onend && opt.onend(); return; }
  stopSpeech();
  const vs = (await voicesReady()).filter(v => /^en(-|_)/i.test(v.lang));
  const fem = vs.find(v => /female|samantha|karen|serena|moira|tessa|zira|libby|sonia|hazel|google uk english female|victoria|fiona|aria|jenny/i.test(v.name)) || vs.find(v => /en-GB/i.test(v.lang)) || vs[0];
  const mal = vs.find(v => /\bmale|daniel|alex|arthur|oliver|ryan|george|google uk english male|fred|tom|rishi|guy/i.test(v.name) && !/female/i.test(v.name)) || vs.find(v => v !== fem) || fem;
  const parts = []; lines.forEach(([who, text], li) => String(text).split(/(?<=[.!?])\s+/).forEach(s => s.trim() && parts.push([who, s, li])));
  SPK = { on: true, q: parts, i: 0 };
  const next = () => {
    if (!SPK.on || SPK.i >= SPK.q.length) { SPK.on = false; opt.onend && opt.onend(); return; }
    const [who, s, li] = SPK.q[SPK.i++]; const u = new SpeechSynthesisUtterance(s); const m = opt.voices && opt.voices[who] === 'm';
    const v = m ? mal : fem; if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-GB';
    u.rate = opt.rate || .92; u.pitch = m ? .9 : 1.05; opt.online && opt.online(who, li);
    u.onend = () => setTimeout(next, opt.gap || 240); u.onerror = () => setTimeout(next, 60);
    speechSynthesis.speak(u);
  };
  next();
}
function stopSpeech() { SPK.on = false; try { speechSynthesis.cancel(); } catch (e) {} }
// a lantern-style audio player with play count, speed and a hidden script
function player(host, { lines, voices, names, situation, scriptLocked }) {
  let plays = 0, rate = .92, playing = false;
  host.innerHTML = `<div class="player"><div class="pl-top"><div class="pl-lantern">🔥</div><div><b>Listen</b><small>${situation || 'Listen twice, like in the exam.'}</small></div></div>
    <div class="wave" aria-hidden="true">${Array.from({ length: 24 }, (_, k) => `<i style="--k:${k}"></i>`).join('')}</div>
    <div class="pl-who" aria-live="polite"></div>
    <div class="pl-row"><button class="btn play">▶ Play (1st time)</button><button class="btn ghost stop" hidden>■ Stop</button><button class="btn ghost speed">Speed: normal</button></div>
    <details class="script" ${scriptLocked ? 'data-lock="1"' : ''}><summary>📜 Script ${scriptLocked ? '(opens after you check your answers)' : ''}</summary><div class="sc">${lines.map(([w, t], k) => `<p data-l="${k}"><b>${esc((names && names[w]) || '')}${names && names[w] ? ': ' : ''}</b>${esc(t)}</p>`).join('')}</div></details></div>`;
  const pl = $('.player', host), btn = $('.play', host), stop = $('.stop', host), who = $('.pl-who', host);
  const label = () => { btn.textContent = plays === 0 ? '▶ Play (1st time)' : plays === 1 ? '▶ Play again (2nd time)' : '▶ Play again'; };
  btn.onclick = () => { if (playing) return; playing = true; pl.classList.add('on'); stop.hidden = false; btn.disabled = true;
    speak(lines, { voices, rate, online: (w, li) => { who.textContent = names && names[w] ? `🎙️ ${names[w]}` : ''; $$('.sc p', host).forEach(p => p.classList.toggle('now', +p.dataset.l === li)); }, onend: () => { playing = false; plays++; pl.classList.remove('on'); stop.hidden = true; btn.disabled = false; who.textContent = ''; label(); } }); };
  stop.onclick = () => { stopSpeech(); playing = false; pl.classList.remove('on'); stop.hidden = true; btn.disabled = false; who.textContent = ''; };
  $('.speed', host).onclick = e => { rate = rate === .92 ? .78 : rate === .78 ? 1.02 : .92; e.target.textContent = 'Speed: ' + (rate === .92 ? 'normal' : rate === .78 ? 'slow' : 'fast'); };
  const det = $('details', host); if (scriptLocked) det.addEventListener('toggle', () => { if (det.open && det.dataset.lock) { det.open = false; toast('Answer the questions first. The script opens after you check. 🔥'); } });
  return { unlock() { delete det.dataset.lock; $('summary', det).textContent = '📜 Script'; } };
}

// ---------------- speaking task with recording ----------------
function planTable(rows, filled) {
  return `<table class="planner">${rows.map(([lab, val, col], k) => `<tr><th style="background:${col}">${lab}</th><td>${filled || val ? `<div class="pv">${val}</div>` : `<textarea data-p="${k}" rows="2" placeholder="Key words"></textarea>`}</td></tr>`).join('')}</table>`;
}
function para(arr) { return `<p class="para">${arr.map(([t, r]) => `<span class="s ${r}">${esc(t)}</span>`).join(' ')}</p>`; }
const LEGEND = '<div class="legend"><span style="background:var(--c-topic)">Introduce / topic</span><span style="background:var(--c-support)">Point</span><span style="background:var(--c-detail)">Example / detail</span><span style="background:var(--c-counter)">Contrast</span><span style="background:var(--c-conc)">Conclusion / opinion</span></div>';
function speakTask(host, T, key) {
  host.innerHTML = `<div class="card"><div class="ex"><b>Task:</b> ${T.prompt}</div>
    <h3>1 · Plan with colours</h3>${planTable(T.plan, true)}
    <details class="way"><summary><b>⭐ See a model answer (colour-coded)</b></summary>${LEGEND}${para(T.model)}<button class="btn sm ghost hear">🔊 Hear the model</button></details>
    <h3>2 · Useful phrases (they turn green when you use them)</h3><div class="phr">${T.phrases.map(p => `<span class="phrase">${esc(p)}</span>`).join('')}</div>
    <h3>3 · Record yourself (aim for ${T.time || '2 minutes'})</h3>
    <div class="rec"><button class="recbtn" aria-label="Start recording">🎙️</button><b class="rt">0:00</b><span class="hint rs">Tap the microphone and start speaking.</span><audio controls hidden></audio></div>
    <details class="way typed"><summary><b>No microphone? Type what you would say</b></summary><textarea class="pad" rows="6" placeholder="Type your answer here, then tap Get feedback."></textarea><button class="btn sm fbt">Get feedback</button></details>
    <div class="fbk"></div></div>`;
  $('.hear', host).onclick = () => speak([[null, T.model.map(m => m[0]).join(' ')]], { rate: .92 });
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null, chunks = [], stream = null, recog = null, transcript = '', t0 = 0, tick = null, on = false;
  const btn = $('.recbtn', host);
  btn.onclick = async () => {
    if (on) return stopAll();
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (e) { toast('Microphone not allowed. You can type your answer instead.'); $('.typed', host).open = true; return; }
    chunks = []; transcript = ''; on = true; btn.classList.add('on'); btn.textContent = '■'; $('.rs', host).textContent = 'Recording… tap again to stop.';
    try { rec = new MediaRecorder(stream); rec.ondataavailable = e => e.data.size && chunks.push(e.data); rec.onstop = () => { const au = $('audio', host); au.src = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || 'audio/webm' })); au.hidden = false; }; rec.start(); } catch (e) { rec = null; }
    if (SR) { try { recog = new SR(); recog.lang = 'en-GB'; recog.continuous = true; recog.interimResults = false; recog.onresult = ev => { for (let k = ev.resultIndex; k < ev.results.length; k++) if (ev.results[k].isFinal) transcript += ' ' + ev.results[k][0].transcript; }; recog.onend = () => { if (on) { try { recog.start(); } catch (e) {} } }; recog.start(); } catch (e) { recog = null; } }
    t0 = Date.now(); tick = setInterval(() => { const s = Math.floor((Date.now() - t0) / 1000); $('.rt', host).textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }, 300);
  };
  function stopAll() {
    on = false; btn.classList.remove('on'); btn.textContent = '🎙️'; clearInterval(tick); const secs = Math.round((Date.now() - t0) / 1000);
    try { rec && rec.state !== 'inactive' && rec.stop(); } catch (e) {} try { recog && recog.stop(); } catch (e) {} stream && stream.getTracks().forEach(t => t.stop());
    $('.rs', host).textContent = 'Listen to yourself below.'; setTimeout(() => feedback(transcript.trim(), secs, !!SR), 900);
  }
  $('.fbt', host).onclick = () => feedback($('.typed textarea', host).value.trim(), null, true);
  function feedback(text, secs, hadSR) {
    const box = $('.fbk', host);
    if (!text) { box.innerHTML = `<div class="fb no">${hadSR ? 'I could not hear clear words. Speak a little louder and closer to the phone, or type your answer above.' : 'Your browser cannot turn speech into text. Listen to your recording and use the checklist, or type your answer above.'}</div><div class="checklist">${T.parts.map(([l]) => `<div>${l}</div>`).join('')}</div>`; return; }
    const low = ' ' + text.toLowerCase() + ' '; const words = (low.match(/[a-z']+/g) || []).length;
    const used = T.phrases.filter(p => low.includes(p.toLowerCase().replace(/[.…!]+/g, '').trim().split(' ').slice(0, 3).join(' ')));
    $$('.phrase', host).forEach(el => el.classList.toggle('used', used.includes(el.textContent)));
    const keys = (T.keywords || []).filter(k => low.includes(k.toLowerCase()));
    const parts = T.parts.map(([lab, re]) => [lab, new RegExp(re, 'i').test(low)]);
    const wpm = secs ? Math.round(words / secs * 60) : null;
    let pts = Math.min(4, parts.filter(p => p[1]).length * (4 / T.parts.length)) + Math.min(3, used.length) + Math.min(3, words / ((T.minWords || 150) / 3));
    const score = Math.round(Math.min(10, pts)); if (key) { const r = S.result(key, score, 10); r.gain && coinFly(r.gain, box); }
    box.innerHTML = `<div class="way"><span class="tag">Automatic feedback</span><h3>${score} / 10 ${score >= 9 ? '🏆' : score >= 7 ? '⭐' : '💪'}</h3>
      <p><b>${words} words</b>${secs ? ` in ${secs} seconds (${wpm} words a minute)` : ''}. ${words < (T.minWords || 150) ? `Try to say more: aim for about ${T.minWords || 150} words.` : 'Good length!'}</p>
      <div class="checklist">${parts.map(([l, ok]) => `<div class="${ok ? 'yes' : ''}">${l}</div>`).join('')}</div>
      <p><b>Useful phrases you used:</b> ${used.length ? used.map(esc).join(' · ') : 'none yet. Try two or three from the list.'}</p>
      ${T.keywords ? `<p><b>Topic words you used:</b> ${keys.length ? keys.join(', ') : 'none yet.'}</p>` : ''}
      <details><summary>What the phone heard</summary><p class="hint">${esc(text)}</p></details><p class="hint">The phone checks your structure and key language. Listen to your recording for pronunciation.</p></div>`;
  }
}

// ---------------- writing task: plan, frame, write, live checklist, model ----------------
function writeTask(host, T, key) {
  const dk = 'w:' + key; const draft = S.draft(dk); if (T.frame && !(T.checks || []).some(c => c[1] === 'NOGAPS')) T = { ...T, checks: [['Every ___ gap in the frame is filled', 'NOGAPS'], ...(T.checks || [])] };
  const src = T.source ? `<div class="source"><h3>${esc(T.source.title)}</h3><p class="hint">${esc(T.source.author || '')}</p><p>${esc(T.source.text)}</p></div>` : T.article ? `<div class="source"><h3>${esc(T.article.title)}</h3>${T.article.paras.map(p => `<p>${esc(p)}</p>`).join('')}</div>` : '';
  host.innerHTML = `<div class="card"><h2>✍️ ${esc(T.title)}</h2><div class="ex"><b>Task:</b> ${T.prompt}</div>${src ? `<details class="way" open><summary><b>📖 The article</b></summary>${src}</details>` : ''}
    ${T.table ? `<h3>1 · Plan (key words only)</h3>${planTable(T.table, false)}` : ''}
    <h3>${T.table ? 2 : 1} · Write</h3>${T.frame ? `<button class="btn sm ghost useframe">🧱 Start with the sentence frame</button>` : ''}
    <textarea class="pad essay" rows="14" placeholder="Write here. Leave an empty line between paragraphs.">${esc(draft)}</textarea>
    <div class="wc"><b class="wcn">0</b> words · <b class="pcn">0</b> paragraphs <span class="saved hint"></span></div>
    <h3>Checklist (it ticks itself while you write)</h3><div class="checklist live">${(T.checks || []).map(([l]) => `<div>${l}</div>`).join('')}</div>
    ${T.model ? `<details class="way"><summary><b>⭐ Compare with a model answer</b></summary>${LEGEND}${T.model.map(p => para(p)).join('')}</details>` : ''}
    <div class="row"><button class="btn sm ghost copy">📋 Copy my writing</button><a class="btn sm alt wa" target="_blank" rel="noopener">💬 Send to my teacher</a></div></div>`;
  const ta = $('.essay', host);
  const upd = () => {
    const v = ta.value; const words = (v.match(/[A-Za-z']+/g) || []).length; const paras = v.split(/\n\s*\n/).filter(p => p.trim().length > 20);
    $('.wcn', host).textContent = words; $('.pcn', host).textContent = paras.length;
    const low = v.toLowerCase();
    $$('.checklist.live div', host).forEach((d, k) => { const rule = T.checks[k][1]; let ok = false;
      if (rule === 'NOGAPS') ok = words > 20 && !/_{3,}/.test(v); else if (/^WORDS>=/.test(rule)) ok = words >= +rule.split('>=')[1]; else if (/^PARAS>=/.test(rule)) ok = paras.length >= +rule.split('>=')[1]; else if (rule === 'NOI1') ok = paras.length > 0 && !/\b(i|my|me)\b/i.test(paras[0]); else ok = new RegExp(rule, 'i').test(' ' + low + ' ');
      d.classList.toggle('yes', ok); });
    $('.wa', host).href = `https://wa.me/?text=${encodeURIComponent(`${S.name || 'Student'} · ${T.title}\n\n${v}`)}`;
  };
  let tsave; ta.addEventListener('input', () => { upd(); clearTimeout(tsave); tsave = setTimeout(() => { S.draft(dk, ta.value); $('.saved', host).textContent = ' · saved ✔'; }, 500); });
  const uf = $('.useframe', host); if (uf) uf.onclick = () => { if (ta.value.trim() && !confirm2(uf)) return; ta.value = T.frame; upd(); ta.focus(); };
  $('.copy', host).onclick = async () => { try { await navigator.clipboard.writeText(ta.value); toast('Copied 📋'); } catch (e) { ta.select(); toast('Select and copy the text.'); } };
  upd();
}
function confirm2(btn) { if (btn.dataset.sure) return true; btn.dataset.sure = 1; btn.textContent = 'This replaces your text. Tap again'; return false; }


window.E = { $, $$, esc, shuffle, pick, strip, wait, S, toast, burst, coinFly, updateCoins, confetti, sfx, celebrate, prep, render, grade, maxOf, correctText, given, qText, runQuiz, runPaper, blocks, speak, stopSpeech, player, speakTask, writeTask, planTable, para, LEGEND, reduced, normEnd, trackHTML, swap };
