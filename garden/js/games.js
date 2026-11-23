// BLOOM & BUZZ · Honey Lab games
(function () {
const { $, $$, esc, shuffle, pick, S, toast, burst, honeyFly, updateJar, petalsRain, wait, reduced } = window.E;
const A = window.ART;
const done = (host, key, got, max, title, again) => {
  const r = S.result(key, got, max); const pct = r.pct;
  const box = document.createElement('div'); box.className = 'card result gameend';
  box.innerHTML = `<div class="big">${got} / ${max}</div><div class="stars">${pct >= 90 ? '🌸🌸🌸' : pct >= 70 ? '🌸🌸' : pct >= 50 ? '🌸' : '🌱'}</div><h3>${pct >= 90 ? 'Queen bee level! 👑' : pct >= 70 ? 'Sweet work! 🍯' : 'Keep buzzing! Try again 🐝'}</h3>${r.gain ? `<p>+${r.gain} 🍯 honey</p>` : ''}<div class="row center"><button class="btn again">Play again 🔁</button><a class="btn alt" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(`${S.name || 'Student'} · Bloom & Buzz · ${title}: ${got}/${max}`)}">Share 💬</a></div>`;
  host.appendChild(box); box.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'center' });
  if (pct >= 90) petalsRain(); if (r.gain) honeyFly(r.gain, $('.big', box)); else updateJar();
  $('.again', box).onclick = again;
};
const units = () => window.VOCAB.units;
const wordsOf = u => (u === 'all' ? window.VOCAB.ALL : (window.VOCAB.units.find(x => x.id === u) || { words: [] }).words);

// ======================= FLASHCARDS =======================
function flashcards(host, unitId) {
  const U = window.VOCAB.units.find(u => u.id === unitId) || window.VOCAB.units[0];
  let deck = shuffle(U.words), i = 0, known = 0, again = [];
  const key = `vocab:cards:${U.id}`;
  const draw = () => {
    if (i >= deck.length) {
      if (again.length) { deck = again; again = []; i = 0; toast(`Round 2: ${deck.length} words to water again 🌱`); return draw(); }
      host.innerHTML = ''; return done(host, key, known, U.words.length, `${U.title} flashcards`, () => flashcards(host, unitId));
    }
    const w = deck[i];
    host.innerHTML = `<div class="fc-wrap"><div class="fc-top"><span>${U.emoji} ${esc(U.title)}</span><span>${i + 1} / ${deck.length}</span></div>
      <div class="fc" tabindex="0" aria-label="Flashcard. Tap to flip."><div class="fc-in">
        <div class="fc-face fc-front"><div class="fc-pic">${w.pic}</div><div class="fc-w">${esc(w.w)}</div><div class="fc-pos">${esc(w.pos)}</div><div class="fc-stress">${esc(w.stress)}</div><div class="fc-guess">${w.guess}</div><div class="hint">Tap to flip 🔄</div></div>
        <div class="fc-face fc-back"><div class="fc-w sm">${esc(w.w)}</div><div class="fc-def">${esc(w.def)}</div>${w.ex.map(x => `<div class="ex">${x}</div>`).join('')}<div class="fc-fam">🌿 ${esc(w.fam)}</div>
          ${w.ccq ? `<div class="ccq"><b>Check:</b> ${esc(w.ccq[0])}<div class="row"><button class="btn sm ghost yn" data-v="yes">Yes</button><button class="btn sm ghost yn" data-v="no">No</button></div><div class="ccqr hint"></div></div>` : ''}</div>
      </div></div>
      <div class="row center fc-btns"><button class="btn ghost hear">🔊</button><button class="btn alt again">Again 🌱</button><button class="btn know">I know it 🌸</button></div></div>`;
    const fc = $('.fc', host); const flip = e => { if (e.target.closest('.yn')) return; fc.classList.toggle('flip'); };
    fc.onclick = flip; fc.onkeydown = e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); fc.classList.toggle('flip'); } };
    $$('.yn', host).forEach(b => b.onclick = () => { const ok = b.dataset.v === w.ccq[1]; $('.ccqr', host).innerHTML = (ok ? '✓ ' : '✗ ') + esc(w.ccq[2] || (ok ? 'Right!' : 'Think again.')); b.classList.add(ok ? 'right' : 'wrong'); });
    $('.hear', host).onclick = () => window.E.speak([[null, w.w + '. ' + w.ex[0].replace(/<[^>]+>/g, '')]]);
    const go = (k) => { if (k) { known++; burst($('.know', host)); } else again.push(w); fc.classList.add(k ? 'fly-r' : 'fly-l'); setTimeout(() => { i++; draw(); }, reduced() ? 0 : 320); };
    $('.know', host).onclick = () => go(true); $('.again', host).onclick = () => go(false);
    let sx = null; fc.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true }); fc.addEventListener('touchend', e => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 70) go(dx > 0); sx = null; });
  };
  draw();
}

// ======================= JUICE BAR (collocations) =======================
function juiceBar(host) {
  const J = window.PLAY.JUICE; const orders = pick(J, 6); let n = 0, score = 0; const key = 'honey:juice';
  const colors = ['#FF6B8B', '#FFA14A', '#FFD84A', '#9B6BFF', '#FF7A59', '#7ED957', '#FF9EC4', '#4FC3F7'];
  const round = () => {
    if (n >= orders.length) { host.innerHTML = `<div class="jb-done">🧃🧃🧃</div>`; return done(host, key, score, orders.length, 'Juice Bar', () => juiceBar(host)); }
    const [def, w1, w2] = orders[n];
    const others = shuffle(J.filter(o => o !== orders[n]).flatMap(o => [o[1], o[2]])).filter(w => w !== w1 && w !== w2);
    const words = shuffle([w1, w2, ...[...new Set(others)].slice(0, 6)]);
    host.innerHTML = `<div class="juice"><div class="jb-top"><span>Order ${n + 1} / ${orders.length}</span><span>🍯 ${score}</span></div>
      <div class="order-card"><div class="cust">${A.bee(44)}</div><div><small>Customer order</small><b>"I'd like a juice that means: ${esc(def)}"</b></div></div>
      <div class="blender"><div class="jar-g"><div class="liq"></div><div class="slots"><span class="js s1">?</span><span class="js s2">?</span></div></div><div class="base"></div></div>
      <div class="fruits">${words.map((w, k) => `<button class="fruit" data-w="${esc(w)}"><span class="fe">${window.PLAY.FRUITS[k % window.PLAY.FRUITS.length]}</span><span>${esc(w)}</span></button>`).join('')}</div>
      <div class="row center"><button class="btn ghost sm clear">Empty the blender</button></div><div class="jfb"></div></div>`;
    let sel = [];
    const upd = () => { $('.s1', host).textContent = sel[0] || '?'; $('.s2', host).textContent = sel[1] || '?'; };
    $('.clear', host).onclick = () => { sel = []; $$('.fruit', host).forEach(b => b.disabled = false); upd(); };
    $$('.fruit', host).forEach(b => b.onclick = async () => {
      if (sel.length >= 2) return; sel.push(b.dataset.w); b.disabled = true; upd();
      if (b.animate && !reduced()) { const jr = $('.jar-g', host).getBoundingClientRect(), br = b.getBoundingClientRect(); const f = $('.fe', b).cloneNode(true); f.className = 'flyfruit'; document.body.appendChild(f); f.animate([{ transform: `translate(${br.left}px,${br.top}px)` }, { transform: `translate(${(br.left + jr.left) / 2}px,${Math.min(br.top, jr.top) - 60}px) rotate(180deg)` }, { transform: `translate(${jr.left + jr.width / 2 - 14}px,${jr.top + 20}px) rotate(360deg) scale(.6)` }], { duration: 600, easing: 'ease-in-out' }).onfinish = () => f.remove(); }
      if (sel.length === 2) {
        await wait(650); const ok = sel[0] === w1 && sel[1] === w2; const okRev = sel[0] === w2 && sel[1] === w1;
        const bl = $('.blender', host); bl.classList.add('spin'); await wait(reduced() ? 0 : 900); bl.classList.remove('spin');
        const liq = $('.liq', host); liq.style.background = ok ? `linear-gradient(${colors[n % colors.length]}, ${colors[(n + 3) % colors.length]})` : 'linear-gradient(#C9D86B,#9AA84A)'; liq.classList.add('fill');
        const fb = $('.jfb', host);
        if (ok) { score++; fb.innerHTML = `<div class="fb yes">😋 Delicious! <b>${esc(w1)} ${esc(w2)}</b> = ${esc(def)}</div>`; burst($('.jar-g', host)); }
        else fb.innerHTML = `<div class="fb no">${okRev ? '🙃 Right fruits, wrong order!' : '🍋 Sour!'} The juice is <b>${esc(w1)} ${esc(w2)}</b>.</div>`;
        fb.insertAdjacentHTML('beforeend', `<div class="row center"><button class="btn nx">Next order 🧃</button></div>`); $('.nx', fb).onclick = () => { n++; round(); };
      }
    });
  };
  round();
}

// ======================= PERFUME ATELIER (prefixes and suffixes) =======================
function perfume(host) {
  const items = pick(window.MID.AFFIX, 8); let n = 0, score = 0; const key = 'honey:perfume';
  const hues = ['#FF9EC4', '#C59CFF', '#9FD8F7', '#FFD36B', '#B5F0C8', '#FFB38A', '#F7B7D9', '#A7C7FF'];
  const round = () => {
    if (n >= items.length) { host.innerHTML = `<div class="jb-done">🌸🧴✨</div>`; return done(host, key, score, items.length, 'Perfume Atelier', () => perfume(host)); }
    const [clue, base, aff, pos, result] = items[n];
    const opts = shuffle([aff, ...shuffle(window.MID.AFFIX_BOX.filter(x => x !== aff && (pos === 'start' ? ['un', 'dis', 'im', 'il', 'ir'] : ['less', 'ful', 'able', 'ion', 'ize']).includes(x))).slice(0, 3)]);
    host.innerHTML = `<div class="perfume"><div class="jb-top"><span>Bottle ${n + 1} / ${items.length}</span><span>🍯 ${score}</span></div>
      <div class="order-card"><div class="cust">${A.butterfly('#C77DFF', '#FF8FC7', 46)}</div><div><small>Make a perfume called…</small><b>"${esc(clue)}"</b></div></div>
      <div class="bottle-stage"><div class="bottle" style="--h:${hues[n % hues.length]}"><div class="neck"></div><div class="body"><div class="mist"></div><span class="label">${pos === 'start' ? '<span class="ph">?</span>' : ''}${esc(base)}${pos === 'end' ? '<span class="ph">?</span>' : ''}</span></div></div></div>
      <p class="hint center">Choose an essence (${pos === 'start' ? 'a prefix: it goes at the START' : 'a suffix: it goes at the END'}).</p>
      <div class="vials">${opts.map((o, k) => `<button class="vial" data-a="${o}" style="--v:${hues[(n + k + 2) % hues.length]}"><span class="vtop"></span><span class="vbody">${pos === 'start' ? o + '-' : '-' + o}</span></button>`).join('')}</div><div class="jfb"></div></div>`;
    $$('.vial', host).forEach(b => b.onclick = async () => {
      $$('.vial', host).forEach(x => x.disabled = true); b.classList.add('pour'); await wait(reduced() ? 0 : 700);
      const ok = b.dataset.a === aff; const bt = $('.bottle', host); bt.classList.add(ok ? 'glow' : 'murky');
      $('.label', host).innerHTML = ok ? `<b>${esc(result)}</b>` : `<s>${esc(pos === 'start' ? b.dataset.a + base : base + b.dataset.a)}</s>`;
      const fb = $('.jfb', host);
      if (ok) { score++; burst(bt, ['#FFFFFF', '#FFD36B', '#FF9EC4', '#C59CFF']); fb.innerHTML = `<div class="fb yes">✨ What a beautiful smell! <b>${esc(result)}</b> = ${esc(clue)}</div>`; }
      else fb.innerHTML = `<div class="fb no">🤢 Oh no, that smells strange! The word is <b>${esc(result)}</b> (${pos === 'start' ? aff + '- + ' + base : base + ' + -' + aff}).</div>`;
      fb.insertAdjacentHTML('beforeend', `<div class="row center"><button class="btn nx">Next bottle 🧴</button></div>`); $('.nx', fb).onclick = () => { n++; round(); };
    });
  };
  round();
}

// ======================= GARDEN DETECTIVE =======================
function detective(host, caseId) {
  const K = window.PLAY.CASES.find(c => c.id === caseId) || window.PLAY.CASES[0]; const key = `honey:det:${K.id}`;
  let ci = 0, first = 0, tries = 0; const out = new Set();
  const mark = s => esc(s).replace(/\[\[(.+?)\]\]/g, '<span class="wrong">$1</span>');
  host.innerHTML = `<div class="det"><div class="det-head"><span class="det-ic">${K.emoji}</span><div><h2>${esc(K.title)}</h2><small>${esc(K.skill)}</small></div></div>
    <div class="det-intro">🔍 ${esc(K.intro)}</div>
    <div class="suspects">${K.suspects.map(([id, name, em, desc]) => `<div class="sus" data-id="${id}"><div class="se">${em}</div><b>${esc(name)}</b><small>${esc(desc)}</small><span class="stamp">ALIBI ✓</span></div>`).join('')}</div>
    <div class="case-board"><h3>🗂️ Clues</h3><ol class="facts"></ol></div><div class="clue"></div></div>`;
  const clueBox = $('.clue', host), facts = $('.facts', host);
  const nextClue = () => {
    if (ci >= K.clues.length) return accuse();
    const c = K.clues[ci]; tries = 0;
    const q = window.E.prep({ t: 'mcq', q: '', o: c.o, a: 0 });
    clueBox.innerHTML = `<div class="witness"><div class="wi">${c.icon}</div><div class="bub"><b>${esc(c.witness)}</b><p>${mark(c.said)}</p></div></div><p class="hint">🔍 The message has a mistake. Fix it to unlock the clue.</p><div class="wans"></div>`;
    const ui = window.E.render(q, $('.wans', clueBox));
    $$('.opt', clueBox).forEach(b => b.addEventListener('click', async () => {
      await wait(120); const res = ui.get(); tries++;
      if (res === q._a) {
        if (tries === 1) first++; ui.mark(true); burst(b);
        await wait(400); facts.insertAdjacentHTML('beforeend', `<li class="newfact">🔎 ${esc(c.fact)} <small>(${esc(c.why)})</small></li>`);
        c.out.forEach(id => { out.add(id); const el = $(`.sus[data-id="${id}"]`, host); el.classList.add('out'); });
        await wait(reduced() ? 0 : 900); ci++; nextClue();
      } else { b.classList.add('wrong'); b.disabled = true; toast('Not that one, detective. Look again 🔍'); }
    }));
  };
  const accuse = () => {
    clueBox.innerHTML = `<div class="accuse"><h3>🚨 Who messed up the garden? Tap the suspect.</h3><div class="suspects mini">${K.suspects.map(([id, name, em]) => `<button class="sus-b ${out.has(id) ? 'gone' : ''}" data-id="${id}" ${out.has(id) ? 'disabled' : ''}>${em}<small>${esc(name.split(' ')[0])}</small></button>`).join('')}</div></div>`;
    $$('.sus-b', clueBox).forEach(b => b.onclick = async () => {
      if (b.dataset.id !== K.culprit) { b.classList.add('wrong'); toast('No! Check the clues again 🔍'); return; }
      const card = $(`.sus[data-id="${K.culprit}"]`, host); card.classList.add('caught');
      clueBox.innerHTML = `<div class="reveal"><div class="spot">${K.suspects.find(s => s[0] === K.culprit)[2]}</div><h3>Case solved! 🎉</h3><p>${esc(K.ending)}</p></div>`;
      petalsRain(); done(clueBox, key, first, K.clues.length, K.title, () => detective(host, caseId));
    });
  };
  nextClue();
}

// ======================= SPELLING HIVE =======================
function hive(host, unitId) {
  const pool = wordsOf(unitId).filter(w => /^[a-z]{4,12}$/i.test(w.w)); const items = pick(pool, 8); let n = 0, score = 0; const key = `honey:hive:${unitId}`;
  const round = () => {
    if (n >= items.length) { host.innerHTML = `<div class="jb-done">🐝🍯🐝</div>`; return done(host, key, score, items.length, 'Spelling Hive', () => hive(host, unitId)); }
    const w = items[n]; const word = w.w.toLowerCase(); const decoys = shuffle('abcdefghilmnoprstuy'.split('').filter(c => !word.includes(c))).slice(0, 3);
    const letters = shuffle([...word.split(''), ...decoys]);
    host.innerHTML = `<div class="hivegame"><div class="jb-top"><span>Word ${n + 1} / ${items.length}</span><span>🍯 ${score}</span></div>
      <div class="order-card"><div class="cust">${A.bee(42)}</div><div><small>${w.pic} · ${esc(w.pos)}</small><b>${esc(w.def)}</b></div></div>
      <div class="spell">${word.split('').map(() => '<span class="sl"></span>').join('')}</div>
      <div class="combs">${letters.map((c, k) => `<button class="comb" data-k="${k}" style="--d:${k * 40}ms">${c}</button>`).join('')}</div>
      <div class="row center"><button class="btn ghost sm bksp">⌫ Delete</button><button class="btn ghost sm hint1">💡 First letter</button></div><div class="jfb"></div></div>`;
    let typed = [];
    const draw = () => $$('.sl', host).forEach((s, k) => { s.textContent = typed[k] ? letters[typed[k]] : ''; s.classList.toggle('f', !!typed[k] || typed[k] === 0); });
    $('.bksp', host).onclick = () => { const k = typed.pop(); if (k != null) $(`.comb[data-k="${k}"]`, host).disabled = false; draw(); };
    $('.hint1', host).onclick = () => toast(`It starts with "${word[0]}" · stress: ${esc(w.stress)}`);
    $$('.comb', host).forEach(b => b.onclick = async () => {
      if (typed.length >= word.length) return; typed.push(+b.dataset.k); b.disabled = true; draw();
      if (typed.length === word.length) {
        const guess = typed.map(k => letters[k]).join(''); const ok = guess === word; const fb = $('.jfb', host);
        $('.spell', host).classList.add(ok ? 'ok' : 'bad');
        if (ok) { score++; burst($('.spell', host), ['#FFD36B', '#F7B92B', '#FFFFFF']); fb.innerHTML = `<div class="fb yes">🍯 Sweet! <b>${esc(w.w)}</b></div>`; }
        else fb.innerHTML = `<div class="fb no">🐝 Bzzz! It is <b>${esc(w.w)}</b>. You wrote "${esc(guess)}".</div>`;
        fb.insertAdjacentHTML('beforeend', `<div class="row center"><button class="btn nx">Next word 🐝</button></div>`); $('.nx', fb).onclick = () => { n++; round(); };
      }
    });
  };
  round();
}

// ======================= BUTTERFLY HOP =======================
function hop(host, unitFilter) {
  const topics = window.GRAMMAR.topics.filter(t => !unitFilter || (t.u || []).includes(unitFilter) || String(t.src).includes('Unit ' + unitFilter) || String(t.src).includes('U' + unitFilter));
  const pool = topics.flatMap(t => t.q.filter(q => q.t === 'mcq' || q.t === 'tf').map(q => ({ ...q, src: t.title })));
  const qs = pick(pool, 10).map(window.E.prep); let n = 0, score = 0; const key = `honey:hop:${unitFilter || 'all'}`;
  const cols = ['#FF8FB8', '#C59CFF', '#FFD36B', '#7FD6B8', '#FFB38A', '#9FD8F7', '#F7B7D9', '#B5F0C8', '#FFA3A3', '#D7B5FF'];
  host.innerHTML = `<div class="hop"><div class="meadow">${qs.map((_, k) => `<div class="hf" style="--x:${8 + (k % 5) * 21}%;--y:${k < 5 ? 26 : 72}%;--c:${cols[k]}"><span class="bud">🌱</span><span class="bloom">${A.blossom(0, 0, 18, cols[k], '#FFE07A').replace('<g', '<svg viewBox="-20 -20 40 40" width="40" height="40"><g') + '</svg>'}</span></div>`).join('')}<div class="hopper">${A.butterfly('#C77DFF', '#FF8FC7', 44)}</div></div><div class="hopq"></div></div>`;
  const hopper = $('.hopper', host), flowers = $$('.hf', host);
  const moveTo = (k) => { const m = $('.meadow', host).getBoundingClientRect(), f = flowers[k].getBoundingClientRect(); const x = f.left - m.left + f.width / 2 - 22, y = f.top - m.top - 30; if (reduced() || !hopper.animate) { hopper.style.transform = `translate(${x}px,${y}px)`; return; } const cur = hopper._p || { x: 0, y: m.height / 2 }; hopper.animate([{ transform: `translate(${cur.x}px,${cur.y}px)` }, { transform: `translate(${(cur.x + x) / 2}px,${Math.min(cur.y, y) - 50}px) rotate(-10deg)` }, { transform: `translate(${x}px,${y}px)` }], { duration: 700, easing: 'ease-in-out', fill: 'forwards' }); hopper._p = { x, y }; };
  const ask = () => {
    if (n >= qs.length) { $('.hopq', host).innerHTML = ''; return done($('.hopq', host), key, score, qs.length, 'Butterfly Hop', () => hop(host, unitFilter)); }
    moveTo(n); const q = qs[n];
    $('.hopq', host).innerHTML = `<div class="card qcard"><div class="qmeta"><span>Flower ${n + 1} / ${qs.length}</span><span class="pill">${esc(q.src)}</span></div><div class="q">${q.q.replace(/___/g, '<span class="gapline">&nbsp;</span>')}</div><div class="ans"></div><div class="fb" hidden></div></div>`;
    const ui = window.E.render(q, $('.ans', host));
    $$('.hopq .opt', host).forEach(b => b.addEventListener('click', async () => {
      await wait(100); const ok = ui.get() === q._a; ui.mark(ok); const fb = $('.hopq .fb', host); fb.hidden = false; fb.className = 'fb ' + (ok ? 'yes' : 'no'); fb.innerHTML = (ok ? '🦋 ' : `Answer: <b>${esc(window.E.correctText(q))}</b> · `) + (q.why || '');
      if (ok) { score++; flowers[n].classList.add('open'); burst(flowers[n], [cols[n], '#FFFFFF', '#FFE07A']); } else flowers[n].classList.add('wilt');
      await wait(ok ? 900 : 2200); n++; ask();
    }, { once: true }));
  };
  requestAnimationFrame(ask);
}

// ======================= FRUIT SORT (parts of speech) =======================
function fruitSort(host, unitId) {
  const pool = wordsOf(unitId).filter(w => /^(noun|verb|adjective|phrasal)/.test(w.pos)); const items = pick(pool, 12); let n = 0, score = 0; const key = `honey:sort:${unitId}`;
  const kind = w => w.pos.startsWith('noun') ? 'noun' : w.pos.startsWith('adjective') ? 'adjective' : 'verb';
  host.innerHTML = `<div class="sort"><div class="jb-top"><span class="cnt"></span><span class="sc">🍯 0</span></div><div class="tree-top"><div class="fallz"></div></div>
    <div class="baskets">${[['noun', '🧺', 'Noun', 'a thing, person, idea'], ['verb', '🧺', 'Verb', 'an action (+ phrasal verbs)'], ['adjective', '🧺', 'Adjective', 'describes a noun']].map(([k, e, l, d]) => `<button class="basket" data-k="${k}"><span class="be">${e}</span><b>${l}</b><small>${d}</small><span class="bn">0</span></button>`).join('')}</div><div class="jfb"></div></div>`;
  const counts = { noun: 0, verb: 0, adjective: 0 };
  const next = () => {
    if (n >= items.length) { $('.fallz', host).innerHTML = ''; return done(host, key, score, items.length, 'Fruit Sort', () => fruitSort(host, unitId)); }
    const w = items[n]; $('.cnt', host).textContent = `Fruit ${n + 1} / ${items.length}`;
    $('.fallz', host).innerHTML = `<div class="apple" style="--f:${window.PLAY.FRUITS[n % 12]}"><span>${window.PLAY.FRUITS[n % 12]}</span><b>${esc(w.w)}</b></div>`;
  };
  $$('.basket', host).forEach(b => b.onclick = async () => {
    if (n >= items.length) return; const w = items[n]; const right = kind(w); const ok = b.dataset.k === right; const ap = $('.apple', host);
    if (ok) { score++; counts[right]++; $('.bn', b).textContent = counts[right]; ap.classList.add('drop'); burst(b); $('.jfb', host).innerHTML = `<div class="fb yes">🍎 <b>${esc(w.w)}</b> is a ${esc(w.pos)}.</div>`; }
    else { ap.classList.add('bounce'); $('.jfb', host).innerHTML = `<div class="fb no"><b>${esc(w.w)}</b> is a ${esc(w.pos)}: ${esc(w.ex[0].replace(/<[^>]+>/g, ''))}</div>`; }
    $('.sc', host).textContent = '🍯 ' + score; $$('.basket', host).forEach(x => x.disabled = true);
    await wait(ok ? 700 : 1900); $$('.basket', host).forEach(x => x.disabled = false); n++; next();
  });
  next();
}

window.GAMES = { flashcards, juiceBar, perfume, detective, hive, hop, fruitSort };
})();
