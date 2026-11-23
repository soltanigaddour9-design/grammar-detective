// QUEST UNLOCKED · games and quests. Every move in every game is a real question with an explanation: learning first.
(function () {
const { $, $$, esc, shuffle, pick, strip, S, toast, burst, coinFly, updateCoins, confetti, sfx, celebrate, prep, render, grade, maxOf, correctText, given, qText, runQuiz, runPaper, reduced, swap, speak } = window.E;
const ART = () => window.ART;
const UN = n => QUEST.units[n];
const { M, G, O, SEQ } = window.H;
const rx = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// ---------------- question pools ----------------
function vocabQs(words, kind) {
  const out = [];
  words.forEach(w => {
    const [word, pos, mean, ex] = w; const others = words.filter(x => x !== w);
    const same = others.filter(x => x[1] === pos); const pool = same.length >= 3 ? same : others;
    const k = kind === 'mix' ? ['meaning', 'word', 'gap', 'gap'][Math.floor(Math.random() * 4)] : kind;
    if (k === 'meaning') out.push(M(`What does <b>${esc(word)}</b> mean?`, [mean, ...pick(others, 3).map(x => x[2])], `<b>${esc(word)}</b> = ${esc(mean)}. <i>${esc(ex)}</i>`));
    else if (k === 'word') out.push(M(`Which word means: <i>${esc(mean)}</i>?`, [word, ...pick(pool, 3).map(x => x[0])], `<i>${esc(ex)}</i>`));
    else if (k === 'spell') out.push(G(`Write the word: <i>${esc(mean)}</i><br><span class="hint">It starts with <b>${esc(word[0])}</b> and has ${word.replace(/\s/g, '').length} letters${/\s/.test(word) ? ' (two words)' : ''}.</span>`, [word], `<i>${esc(ex)}</i>`));
    else {
      const re = new RegExp('\\b' + rx(word) + '\\b', 'i'); const m = re.exec(ex);
      if (m) out.push(M(esc(ex.replace(re, '___')), [m[0], ...pick(pool.filter(x => !re.test(x[0])), 3).map(x => x[0])], `<b>${esc(word)}</b> = ${esc(mean)}.`));
      else out.push(M(`What does <b>${esc(word)}</b> mean?`, [mean, ...pick(others, 3).map(x => x[2])], `<i>${esc(ex)}</i>`));
    }
  });
  return out;
}
const gramOf = n => UN(n).grammar.flatMap(g => g.qs);
const allWords = () => [1, 2, 3, 4, 5].flatMap(n => UN(n).words);
const mixedGrammar = (n) => shuffle([1, 2, 3, 4, 5].flatMap(u => pick(gramOf(u), Math.ceil(n / 5)))).slice(0, n);

// ---------------- generic game runner: a stage that reacts to every answer ----------------
function play(host, cfg) {
  const st = { i: 0, got: 0, max: 0, ok: 0, no: 0, lives: cfg.lives || 0, over: false, log: [] };
  const queue = cfg.pool.map(prep);
  host.innerHTML = `<div class="game ${cfg.cls || ''}">${cfg.intro ? `<div class="intro">${cfg.intro}</div>` : ''}<div class="gstage"></div><div class="qbody"></div></div>`;
  const stage = $('.gstage', host), body = $('.qbody', host);
  const ctl = { end: (won, why) => finish(won, why), alive: () => document.body.contains(host) && !st.over, st };
  const api = (cfg.stage && cfg.stage(stage, st, ctl)) || {};
  const hearts = () => cfg.lives && !cfg.hideLives ? `<span class="lives">${Array.from({ length: cfg.lives }, (_, k) => `<i class="${k < st.lives ? 'on' : ''}">${cfg.lifeIcon || '❤'}</i>`).join('')}</span>` : '';
  const show = () => {
    if (st.over) return;
    if (st.i >= queue.length) return finish(cfg.goal ? st.ok >= cfg.goal : pct() >= (cfg.pass || 70));
    const q = queue[st.i];
    body.innerHTML = `<div class="qmeta"><span class="qno">${cfg.qLabel ? cfg.qLabel(st) : `${st.i + 1} / ${cfg.goal ? 'goal ' + cfg.goal : queue.length}`}</span>${hearts()}</div>${cfg.timer ? '<div class="tbar"><i></i></div>' : ''}
      <div class="card qcard"><div class="q">${qText(q)}</div><div class="ans"></div><div class="fb" hidden></div><div class="qact"><button class="btn chk" disabled>Check ✔</button></div></div>`;
    const card = $('.qcard', body), chk = $('.chk', card);
    const ui = render(q, $('.ans', card), () => { chk.disabled = ui.get() == null; });
    let tmr = null, answered = false;
    api.q && api.q(st, q);
    const check = timeout => {
      if (answered || st.over) return; const res = timeout ? null : ui.get();
      if (!timeout && res == null) return toast('Choose or write an answer first 🧭');
      answered = true; clearTimeout(tmr); const bar = $('.tbar i', body); if (bar) { const w = getComputedStyle(bar).width; bar.style.transition = 'none'; bar.style.width = w; }
      const g = timeout ? 0 : grade(q, res), m = maxOf(q), ok = g === m; st.got += g; st.max += m; st.log.push({ q, res, ok });
      ui.mark(ok); if (ok) st.ok++; else { st.no++; if (cfg.lives) st.lives--; }
      const fb = $('.fb', card); fb.hidden = false; fb.className = 'fb ' + (ok ? 'yes' : 'no');
      fb.innerHTML = ok ? `<b>${cfg.okWord ? cfg.okWord(st) : 'Yes!'}</b> ${q.why || ''}` : `<b>${timeout ? 'Time is up! ' : ''}Answer:</b> ${esc(correctText(q))}<br><span>${q.why || ''}</span>`;
      sfx(ok ? 'ok' : 'no'); if (ok) burst(chk); else card.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }], { duration: 300 });
      try { (ok ? api.ok : api.no) && (ok ? api.ok(st, q) : api.no(st, q)); } catch (e) {}
      const lv = $('.lives', body); if (lv) lv.outerHTML = hearts();
      st.i++;
      let verdict = cfg.isOver ? cfg.isOver(st) : null;
      if (verdict == null && cfg.lives && st.lives <= 0) verdict = false;
      if (verdict == null && cfg.goal && st.ok >= cfg.goal) verdict = true;
      if (verdict == null && st.i >= queue.length) verdict = cfg.goal ? st.ok >= cfg.goal : pct() >= (cfg.pass || 70);
      chk.disabled = false; chk.textContent = verdict == null ? 'Next ➜' : verdict ? 'Finish 🏁' : 'See what happened';
      chk.onclick = () => { if (st.over) return; if (verdict == null) swap(body, show); else finish(verdict); };
    };
    chk.onclick = () => check(false);
    if (cfg.timer) { const bar = $('.tbar i', body); bar.style.transition = `width ${cfg.timer}s linear`; requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = '0%'; })); tmr = setTimeout(() => { if (ctl.alive()) check(true); }, cfg.timer * 1000); }
  };
  const pct = () => st.max ? Math.round(st.got / st.max * 100) : 0;
  function finish(won, why) {
    if (st.over) return; st.over = true; try { api.end && api.end(won, st); } catch (e) {}
    const max = Math.max(st.max, 1); const sum = cfg.summary ? cfg.summary(st, won) : null;
    const rec = cfg.key ? S.result(cfg.key, won ? Math.max(st.got, Math.ceil(max * .7)) : Math.min(st.got, Math.floor(max * .6)), max) : { pct: Math.round(st.got / max * 100), gain: 0 };
    const wrong = st.log.filter(l => !l.ok); const real = Math.round(st.got / max * 100);
    body.innerHTML = `<div class="card result ${won ? 'w' : 'l'}"><span class="tag">${esc(cfg.title)}</span><div class="big">${sum && sum.big ? sum.big : `${st.ok} ✔ · ${st.no} ✘`}</div>
      <h3>${sum && sum.line ? sum.line : why || (won ? (cfg.winLine || 'You won!') : (cfg.loseLine || 'Not this time. Read the explanations, then try again.'))}</h3>
      <p><b>${real}%</b> correct${S.name ? ` · ${esc(S.name)}` : ''}${rec.gain ? ` · +${rec.gain} gold coins` : ''}${cfg.key && won && /^quest:/.test(cfg.key) ? ' · 🗝️ key earned!' : ''}</p>
      <div class="row center"><button class="btn again">Play again 🔁</button><a class="btn alt" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(`${S.name || 'Student'} · Quest Unlocked · ${cfg.title}: ${won ? 'WON 🏆' : 'tried 💪'} (${real}% correct)`)}">Send my score 💬</a></div>
      ${wrong.length ? `<div class="review"><h3>Learn from your mistakes</h3><ol>${wrong.map(l => `<li>${qText(l.q)}<br><span class="no">You: ${esc(given(l.q, l.res))}</span><br><span class="ok">Answer: ${esc(correctText(l.q))}</span><br><span class="hint">${l.q.why || ''}</span></li>`).join('')}</ol></div>` : '<p>No mistakes at all. Perfect! 💯</p>'}</div>`;
    const showWin = sum ? sum.won : won;
    if (showWin) celebrate({ pct: real, title: cfg.title, gain: rec.gain, from: $('.big', body), big: sum && sum.bigWin || cfg.bigWin, line: sum && sum.winLine || cfg.winLine, extra: cfg.winExtra && cfg.winExtra() });
    else { sfx('lose'); if (rec.gain) coinFly(rec.gain, $('.big', body)); else updateCoins(); }
    $('.again', body).onclick = () => cfg.again ? cfg.again() : play(host, cfg);
    body.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
    cfg.onDone && cfg.onDone(won);
  }
  show();
}

// ---------------- U1 · Lost City Ruins: Number Hunt (scanning, timed) ----------------
function numberHunt(host) {
  const T = UN(1).quest.tablet;
  const pool = shuffle(T.qs.map(([q, a, ds], k) => ({ ...M(q, [a, ...ds], `Line ${k + 1}: ${T.lines[k]}`), line: k })));
  play(host, { title: 'Number Hunt · The Stone of Zarak', key: 'quest:1', pool, timer: 25, lives: 3, pass: 70, cls: 'g-hunt',
    intro: '<b>Scan, do not read!</b> Read the question, decide what number you need, then let your eyes jump to the numbers on the stone. You have 25 seconds for each question.',
    stage: el => {
      el.innerHTML = `<div class="tablet"><div class="tab-h">🪨 ${esc(T.title)}</div>${T.lines.map((l, k) => `<p data-l="${k}">${esc(l)}</p>`).join('')}</div>`;
      const mark = (q, c) => { const p = $(`[data-l="${q.line}"]`, el); if (!p) return; p.classList.remove('hit', 'miss'); void p.offsetWidth; p.classList.add(c); };
      return { ok: (s, q) => mark(q, 'hit'), no: (s, q) => mark(q, 'miss') };
    },
    winLine: 'Great scanning! The ruins gave you the first key. 🗝️', again: () => numberHunt(host) });
}
// U1 · Supply Market (countable, uncountable, quantifiers)
function market(host) {
  const items = ['💧', '🔦', '🍎', '🪙', '🗺️', '🪢', '🧂', '🍞', '🧭', '🩹'];
  play(host, { title: 'Supply Market', key: 'game:market', pool: shuffle(UN(1).quest.market), pass: 70, cls: 'g-market',
    intro: 'Buy supplies for the trip into the ruins. Every correct answer puts something in your backpack.',
    stage: el => { el.innerHTML = '<div class="pack"><div class="bag">🎒</div><div class="items"></div></div>'; let n = 0;
      return { ok: () => { const i = document.createElement('span'); i.className = 'it'; i.textContent = items[n++ % items.length]; $('.items', el).appendChild(i); }, no: () => { const b = $('.bag', el); b.classList.remove('nope'); void b.offsetWidth; b.classList.add('nope'); } }; },
    winLine: 'Your backpack is full. Ready for the ruins!', again: () => market(host) });
}

// ---------------- U2 · Lantern Village: Light the Lanterns ----------------
function lanternSVG(n) {
  const cols = ['#FF6B6B', '#FCC419', '#51CF66', '#339AF0', '#CC5DE8', '#FF922B', '#F06595', '#20C997', '#748FFC', '#FFD43B'];
  return `<svg viewBox="0 0 600 150" class="lanterns"><path d="M0 20 Q300 70 600 20" stroke="#2B1A0E" stroke-width="2" fill="none"/>${Array.from({ length: n }, (_, k) => { const x = 30 + k * (540 / (n - 1)), y = 20 + Math.sin((k / (n - 1)) * Math.PI) * 24; return `<g class="lt" data-k="${k}" transform="translate(${x} ${y})"><circle class="halo" cy="42" r="30" fill="${cols[k % 10]}"/><line y1="0" y2="16" stroke="#2B1A0E" stroke-width="2"/><rect x="-11" y="16" width="22" height="6" rx="2" fill="#5C3A1E"/><path d="M-16 22 Q-20 42 -14 60 L14 60 Q20 42 16 22 Z" fill="${cols[k % 10]}"/><path d="M-6 22 V60 M6 22 V60" stroke="#000" stroke-opacity=".15" stroke-width="2"/><rect x="-11" y="60" width="22" height="6" rx="2" fill="#5C3A1E"/><circle class="flame" cy="42" r="5" fill="#FFF3BF"/></g>`; }).join('')}</svg>`;
}
function lanterns(host) {
  const U = UN(2); const pool = shuffle([...pick(gramOf(2), 7), ...pick(vocabQs(U.words, 'mix'), 5)]);
  play(host, { title: 'Light the Lanterns', key: 'quest:2', pool, pass: 70, cls: 'g-lantern',
    intro: 'The festival starts tonight, but the lanterns are dark. Every correct answer lights one lantern. Light at least 9 of 12 questions… or the festival will be dark!',
    stage: el => { el.innerHTML = lanternSVG(12) + '<div class="windtxt"></div>'; let n = 0;
      return { ok: () => { const l = $(`.lt[data-k="${n++}"]`, el); l && l.classList.add('on'); }, no: () => { el.classList.remove('gust'); void el.offsetWidth; el.classList.add('gust'); } }; },
    isOver: s => null, winLine: 'The village is glowing! The second key is yours. 🗝️', again: () => lanterns(host) });
}
function poster(host) {
  const U = UN(2); const pool = [...U.quest.poster, ...U.writing.build.filter(q => q.t === 'seq' || q.t === 'roles')];
  runQuiz(host, { title: 'Festival Poster', questions: pool, key: 'game:poster', track: 'village', intro: 'Build the posters and paragraphs for the festival. Topic sentence first, details in the middle, a strong ending last.' });
}

// ---------------- U3 · Radio Tower: Fix the Radio ----------------
function radio(host) {
  const U = UN(3); const pool = shuffle([...pick(gramOf(3), 9), ...pick(vocabQs(U.words, 'mix'), 6)]);
  play(host, { title: 'Fix the Radio', key: 'quest:3', pool, goal: 8, lives: 4, hideLives: true, cls: 'g-radio',
    intro: 'The radio tower is broken. Each correct answer connects one wire. Each mistake uses one bar of the battery. Connect 8 wires before the battery dies!',
    qLabel: s => `Wires ${s.ok} / 8`,
    stage: el => {
      const wires = Array.from({ length: 8 }, (_, k) => { const y = 18 + k * 21; return `<path class="wire" data-k="${k}" d="M60 ${y} C160 ${y + (k % 2 ? 18 : -18)} 220 ${y + (k % 2 ? -14 : 14)} 300 ${y} S440 ${y + (k % 2 ? 16 : -16)} 520 ${y}"/><circle class="led" data-k="${k}" cx="534" cy="${y}" r="7"/>`; }).join('');
      el.innerHTML = `<div class="radio"><svg viewBox="0 0 600 190"><rect x="20" y="6" width="34" height="176" rx="8" fill="#343A40"/>${Array.from({ length: 8 }, (_, k) => `<circle cx="54" cy="${18 + k * 21}" r="5" fill="#FAB005"/>`).join('')}${wires}<rect x="548" y="6" width="40" height="176" rx="8" fill="#212529"/><text x="568" y="100" class="rt" text-anchor="middle" transform="rotate(90 568 100)">RADIO</text></svg>
        <div class="battery"><b>Battery</b><span class="bars">${'<i class="on"></i>'.repeat(4)}</span></div></div>`;
      let n = 0;
      return { ok: () => { const k = n++; $(`.wire[data-k="${k}"]`, el).classList.add('on'); $(`.led[data-k="${k}"]`, el).classList.add('on'); sfx('step'); },
        no: s => { const b = $$('.bars i', el); b.forEach((x, k) => x.classList.toggle('on', k < s.lives)); el.classList.remove('zap'); void el.offsetWidth; el.classList.add('zap'); },
        end: won => { if (won) setTimeout(() => speak([[null, `Radio Tower calling ${S.name || 'explorer'}. Message received. The island is proud of you!`]], { rate: .9 }), 1400); } };
    },
    winLine: 'The radio is working again! Third key earned. 🗝️', loseLine: 'The battery died! Read the explanations, then fix the radio again.', again: () => radio(host) });
}

// ---------------- U4 · Frozen Peak: Blizzard Survival ----------------
function graphSVG(gr, small) {
  const W = 600, H = small ? 210 : 250, L = 40, B = H - 34, max = 40, bw = (W - L - 10) / 12;
  const y = v => B - v / max * (B - 18); const ry = v => B - v / 50 * (B - 18);
  return `<svg class="graph" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(gr.title)}"><text x="${W / 2}" y="14" text-anchor="middle" class="gt">${esc(gr.title)}</text>
    ${[0, 10, 20, 30, 40].map(v => `<line x1="${L}" x2="${W - 6}" y1="${y(v)}" y2="${y(v)}" stroke="#DEE2E6"/><text x="${L - 6}" y="${y(v) + 4}" text-anchor="end" class="gl">${v}°</text>`).join('')}
    ${gr.temp.map((v, k) => `<rect x="${L + k * bw + 5}" y="${y(v)}" width="${bw - 10}" height="${B - y(v)}" rx="4" fill="${v >= 34 ? '#E8590C' : v <= 16 ? '#4DABF7' : '#FAB005'}"/><text x="${L + k * bw + bw / 2}" y="${y(v) - 4}" text-anchor="middle" class="gv">${v}</text><text x="${L + k * bw + bw / 2}" y="${B + 16}" text-anchor="middle" class="gl">${gr.months[k]}</text>`).join('')}
    <polyline fill="none" stroke="#1864AB" stroke-width="3" stroke-dasharray="6 5" points="${gr.rain.map((v, k) => `${L + k * bw + bw / 2},${ry(v)}`).join(' ')}"/>${gr.rain.map((v, k) => `<circle cx="${L + k * bw + bw / 2}" cy="${ry(v)}" r="3.5" fill="#1864AB"/>`).join('')}
    <g transform="translate(${L + 8} ${H - 6})"><rect width="12" height="8" fill="#FAB005" y="-8"/><text x="16" class="gl">temperature (°C)</text><line x1="150" x2="174" y1="-4" y2="-4" stroke="#1864AB" stroke-width="3" stroke-dasharray="6 5"/><text x="180" class="gl">rainfall (mm)</text></g></svg>`;
}
function graphQs() {
  const gr = UN(4).writing.graph; const g = `<div class="qgraph">${graphSVG(gr, true)}</div>`;
  return [...UN(4).writing.build.slice(0, 5).map(q => ({ ...q, q: g + q.q })),
    { ...M(g + 'How much rain falls in December?', ['45 mm', '15 mm', '35 mm'], 'The blue line shows 45 mm in December.') },
    { ...M(g + 'Choose the correct sentence.', ['July is hotter than May.', 'May is hotter than July.', 'July is the coldest month.'], 'July 36°C, May 30°C.') }];
}
function blizzard(host) {
  const pool = shuffle([...pick(gramOf(4), 8), ...pick(graphQs(), 4), ...pick(vocabQs(UN(4).words, 'mix'), 4)]);
  const steps = 10;
  play(host, { title: 'Blizzard Survival', key: 'quest:4', pool, goal: steps, lives: 5, lifeIcon: '🔥', cls: 'g-blizzard',
    intro: 'Climb the Frozen Peak in a snowstorm. Each correct answer is one step up. Each mistake costs one fire 🔥. Reach the top before your fire goes out!',
    qLabel: s => `Step ${s.ok} / ${steps}`,
    stage: el => {
      const pts = Array.from({ length: steps + 1 }, (_, k) => [40 + k * 52, 196 - k * 17 + (k % 2 ? 6 : -6)]);
      el.innerHTML = `<div class="peak"><svg viewBox="0 0 600 220"><defs><linearGradient id="pk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DBE4FF"/><stop offset="1" stop-color="#748FFC"/></linearGradient></defs><rect width="600" height="220" fill="url(#pk)"/>
        <path d="M0 220 L120 140 L200 170 L330 70 L420 120 L560 14 L600 40 L600 220 Z" fill="#91A7FF"/><path d="M560 14 L590 52 L572 48 L558 64 L544 46 L528 54 Z M330 70 L356 100 L340 96 L326 110 L314 94 Z" fill="#fff"/>
        <polyline points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="3 9" stroke-linecap="round"/>${pts.map((p, k) => `<circle class="stp" data-k="${k}" cx="${p[0]}" cy="${p[1]}" r="5" fill="#fff" stroke="#4263EB" stroke-width="2"/>`).join('')}
        <text x="${pts[steps][0]}" y="${pts[steps][1] - 14}" text-anchor="middle" font-size="22">🚩</text></svg><div class="climber">🧗</div><div class="snowfall">${Array.from({ length: 24 }, (_, k) => `<i style="--x:${(k * 37) % 100}%;--d:${(k % 7) * .4}s;--s:${2 + (k % 5) * .5}s">❄</i>`).join('')}</div></div>`;
      const cl = $('.climber', el); const place = k => { cl.style.left = (pts[k][0] / 600 * 100) + '%'; cl.style.top = (pts[k][1] / 220 * 100) + '%'; };
      place(0);
      return { ok: s => { place(Math.min(steps, s.ok)); $(`.stp[data-k="${s.ok}"]`, el).classList.add('on'); }, no: () => { el.classList.remove('storm'); void el.offsetWidth; el.classList.add('storm'); } };
    },
    winLine: 'You reached the top of the Frozen Peak! Fourth key earned. 🗝️', loseLine: 'Your fire went out! Warm up with the explanations below, then climb again.', again: () => blizzard(host) });
}

// ---------------- U5 · Golden Dunes: Camel Race (solo) and Camel Duel (two players) ----------------
function racePool(n) { return shuffle([...pick(gramOf(5), 12), ...pick(vocabQs(UN(5).words, 'mix'), 8), ...mixedGrammar(10)]).slice(0, n); }
function camelRace(host) {
  host.innerHTML = `<div class="card center"><h2>🐪 The Golden Dunes Camel Race</h2><p>Your camel runs only when you answer correctly. Your rival runs all the time while you think. The rival stops while you read the explanation, so take your time to learn!</p><p><b>10 correct answers</b> = the finish line.</p>
    <h3>Choose your rival</h3><div class="rivals">${[['Breeze', 150, '🌬️', 'Easy'], ['Sandstorm', 110, '🌪️', 'Normal'], ['Lightning', 75, '⚡', 'Hard']].map(([n, t, e, l]) => `<button class="btn rival" data-t="${t}" data-n="${n}">${e} ${n}<small>${l}</small></button>`).join('')}</div>
    <p class="hint">Want to race a friend on the same phone? Try the Camel Duel.</p></div>`;
  $$('.rival', host).forEach(b => b.onclick = () => raceRun(host, +b.dataset.t, b.dataset.n));
}
function raceRun(host, secs, rivalName) {
  const goal = 10; let raf = 0, paused = true, used = 0, last = 0;
  play(host, { title: `Camel Race vs ${rivalName}`, key: 'quest:5', pool: racePool(22), goal, cls: 'g-race',
    qLabel: s => `🐪 ${s.ok} / ${goal}`,
    stage: (el, st, ctl) => {
      const me = ART().camel('#B07A3F', S.g === 'f' ? '#D6336C' : '#1971C2', S.g || 'm', 1), them = ART().camel('#8D6E63', '#495057', 'm', 2);
      el.innerHTML = `<div class="race2"><div class="sun"></div><div class="rlane me"><span class="who">${esc(S.name || 'You')}</span><div class="cm">${me}</div></div><div class="rlane foe"><span class="who">${esc(rivalName)}</span><div class="cm">${them}</div></div><div class="fin"></div></div>`;
      const set = (sel, p) => { const c = $(sel + ' .cm', el); c.style.left = `calc(${p * 100}% - ${p * 70}px)`; };
      const loop = now => { if (!ctl.alive()) return; if (!paused) { used += (now - last) / 1000; } last = now; const p = Math.min(1, used / secs); set('.foe', p); $('.foe', el).classList.toggle('run', !paused);
        if (p >= 1) { ctl.end(false, `${rivalName} crossed the finish line first! Answer a little faster next time.`); return; } raf = requestAnimationFrame(loop); };
      last = performance.now(); raf = requestAnimationFrame(loop);
      return { q: () => { paused = false; }, ok: s => { paused = true; set('.me', s.ok / goal); const m = $('.me', el); m.classList.remove('dash'); void m.offsetWidth; m.classList.add('dash'); sfx('step'); },
        no: () => { paused = true; const m = $('.me', el); m.classList.remove('trip'); void m.offsetWidth; m.classList.add('trip'); }, end: () => cancelAnimationFrame(raf) };
    },
    winLine: `You beat ${rivalName}! The fifth key is yours. 🗝️`, again: () => camelRace(host) });
}
function camelDuel(host) {
  host.innerHTML = `<div class="card center"><h2>🐪⚔️🐪 Camel Duel</h2><p>Two players, one phone. Take turns: each player answers one question. Correct = your camel moves one step. <b>First to 6 steps wins!</b></p>
    <div class="duelin"><label>Player 1 <input class="p1" maxlength="16" value="${esc(S.name || '')}" placeholder="Name"></label><label>Player 2 <input class="p2" maxlength="16" placeholder="Name"></label></div><button class="btn big go">Start the duel 🏁</button></div>`;
  $('.go', host).onclick = () => { const a = $('.p1', host).value.trim() || 'Player 1', b = $('.p2', host).value.trim() || 'Player 2'; duelRun(host, [a, b]); };
}
function duelRun(host, names) {
  const goal = 6, pts = [0, 0];
  play(host, { title: 'Camel Duel', pool: racePool(30), cls: 'g-race duel',
    qLabel: s => `<b class="turn t${s.i % 2}">${esc(names[s.i % 2])}'s turn</b>`,
    stage: (el, st) => {
      el.innerHTML = `<div class="race2"><div class="sun"></div>${names.map((n, k) => `<div class="rlane d${k}"><span class="who">${esc(n)} · <b class="pt">0</b></span><div class="cm">${ART().camel(k ? '#C9965A' : '#B07A3F', k ? '#2F9E44' : '#E8590C', 'm', k + 1)}</div></div>`).join('')}<div class="fin"></div></div>`;
      const mv = k => { const c = $(`.d${k} .cm`, el); const p = pts[k] / goal; c.style.left = `calc(${p * 100}% - ${p * 70}px)`; $(`.d${k} .pt`, el).textContent = pts[k]; };
      return { q: s => { $$('.rlane', el).forEach((l, k) => l.classList.toggle('now', k === s.i % 2)); }, ok: s => { const k = (s.i) % 2; pts[k]++; mv(k); sfx('step'); }, no: s => { const l = $(`.d${s.i % 2}`, el); l.classList.remove('trip'); void l.offsetWidth; l.classList.add('trip'); } };
    },
    isOver: () => pts[0] >= goal || pts[1] >= goal ? true : null,
    okWord: () => 'Correct! Your camel moves!',
    summary: () => { const w = pts[0] === pts[1] ? -1 : pts[0] > pts[1] ? 0 : 1; return { won: w >= 0, big: `${esc(names[0])} ${pts[0]} : ${pts[1]} ${esc(names[1])}`, line: w < 0 ? 'A draw! Play again to decide the champion.' : `${esc(names[w])} wins the duel! 🏆`, bigWin: `YOU WON, ${esc(names[w] || '').toUpperCase()}!`, winLine: `${names[w]} is the Golden Dunes champion!` }; },
    again: () => duelRun(host, names) });
}

// ---------------- Champions' Ring (boys): Grammar Boxing ----------------
function boxing(host) {
  const pool = mixedGrammar(15); let me = 100, op = 100;
  play(host, { title: 'Grammar Boxing', key: 'game:boxing', pool, cls: 'g-box',
    intro: 'Three rounds against Captain Error. Correct answer = your punch (−10 for him). Mistake = his punch (−20 for you). Knock him out!',
    qLabel: s => `Round ${Math.min(3, Math.floor(s.i / 5) + 1)} · punch ${(s.i % 5) + 1}`,
    stage: el => {
      el.innerHTML = `<div class="ring"><div class="hp me"><span>${esc(S.name || 'You')}</span><i style="--v:100%"></i></div><div class="hp op"><span>Captain Error</span><i style="--v:100%"></i></div>
        <div class="bx me">${ART().boxer(S.g === 'f' ? '#D6336C' : '#1971C2', 'm')}</div><div class="bx op">${ART().boxer('#343A40', 'm', true)}</div><div class="pow"></div><div class="rnd"></div></div>`;
      const pow = (t, side) => { const p = $('.pow', el); p.textContent = t; p.className = 'pow ' + side; void p.offsetWidth; p.classList.add('on'); };
      const bell = s => { if (s.i % 5 === 0 && s.i < 15) { const r = $('.rnd', el); r.textContent = `ROUND ${s.i / 5 + 1}`; r.classList.remove('on'); void r.offsetWidth; r.classList.add('on'); sfx('bell'); } };
      bell({ i: 0 });
      return { q: s => { if (s.i && s.i % 5 === 0) bell(s); },
        ok: () => { op = Math.max(0, op - 10); $('.hp.op i', el).style.setProperty('--v', op + '%'); const a = $('.bx.me', el), b = $('.bx.op', el); a.classList.remove('punch'); b.classList.remove('hit'); void a.offsetWidth; a.classList.add('punch'); b.classList.add('hit'); sfx('punch'); pow(op ? 'POW!' : 'K.O.!', 'r'); },
        no: () => { me = Math.max(0, me - 20); $('.hp.me i', el).style.setProperty('--v', me + '%'); const a = $('.bx.op', el), b = $('.bx.me', el); a.classList.remove('punch'); b.classList.remove('hit'); void a.offsetWidth; a.classList.add('punch'); b.classList.add('hit'); sfx('punch'); pow('OUCH!', 'l'); } };
    },
    isOver: s => op <= 0 ? true : me <= 0 ? false : s.i >= 15 ? me > op : null,
    winLine: 'Knockout! You are the Grammar Champion! 🥊', loseLine: 'Captain Error won this time. Study his punches below, then fight again!', bigWin: 'K.O.! YOU WON!', again: () => boxing(host) });
}

// ---------------- Style Studio (girls): modest outfits, colours and reading for detail ----------------
const COLS = [['black', '#212529'], ['white', '#FFFFFF'], ['beige', '#E9D8B4'], ['brown', '#7A4A22'], ['grey', '#9AA0A6'], ['navy blue', '#1D2B64'], ['sky blue', '#74C0FC'], ['emerald green', '#0B8457'], ['olive green', '#6B7A2E'], ['burgundy', '#7B1E3A'], ['rose pink', '#F48FB1'], ['lavender', '#B197FC'], ['mustard yellow', '#D4A017']];
const HEX = Object.fromEntries(COLS);
const STY = [['abaya', 'abaya'], ['dress', 'long dress'], ['set', 'skirt and top']];
const ORDERS = [
  { who: 'Reem', occ: 'Graduation ceremony 🎓', text: 'Hello! I need an outfit for my graduation ceremony. I would like a long abaya in black, because it is classic. My mother says a white scarf looks beautiful in photos, so I want a white scarf. My friends are wearing high heels, but I prefer comfortable beige shoes. Please add a small bag. It should be beige, like the shoes.', need: { style: 'abaya', main: 'black', scarf: 'white', shoes: 'beige', bag: 'beige' } },
  { who: 'Noura', occ: 'Cousin\'s wedding 💍', text: 'My cousin\'s wedding is on Thursday evening. Everybody is wearing bright colours, but I prefer a long dress in emerald green. For the scarf, beige is perfect. I don\'t want brown shoes. I want black ones, and a black bag too.', need: { style: 'dress', main: 'emerald green', scarf: 'beige', shoes: 'black', bag: 'black' } },
  { who: 'Lama', occ: 'First day at university 📚', text: 'I start university next week! I need a navy blue skirt and a sky blue top. My old scarf is grey, but I want a new one in lavender. For shoes, white trainers are the best for walking. I don\'t need a bag because I always carry my backpack.', need: { style: 'set', main: 'navy blue', top: 'sky blue', scarf: 'lavender', shoes: 'white', bag: 'none' } },
  { who: 'Hessa', occ: 'Eid visit 🌙', text: 'For Eid, my family visits my grandmother. This year I want an abaya in burgundy. My sister chose a pink scarf last year, and it was lovely, so I want a rose pink scarf too. Brown shoes, please. The bag must be the same colour as the abaya.', need: { style: 'abaya', main: 'burgundy', scarf: 'rose pink', shoes: 'brown', bag: 'burgundy' } },
  { who: 'Dana', occ: 'Job interview 💼', text: 'I have a job interview at a bank on Sunday. I need to look professional: a grey skirt with a white top. The scarf should be dark, so I chose navy blue. Black shoes, of course, and a black bag for my documents.', need: { style: 'set', main: 'grey', top: 'white', scarf: 'navy blue', shoes: 'black', bag: 'black' } },
  { who: 'Sara', occ: 'Family picnic 🧺', text: 'We are having a picnic in the countryside. I want something comfortable: a long dress in olive green. A bright scarf will be fun, maybe mustard yellow. Brown shoes are good for walking on grass. I don\'t need a bag today.', need: { style: 'dress', main: 'olive green', scarf: 'mustard yellow', shoes: 'brown', bag: 'none' } },
  { who: 'Maha', occ: 'Museum trip 🏛️', text: 'Our class is visiting the national museum. I usually wear black, but this time I want a grey abaya. The scarf should be lavender. My white shoes are very comfortable, so white shoes, please. And a grey bag, like the abaya.', need: { style: 'abaya', main: 'grey', scarf: 'lavender', shoes: 'white', bag: 'grey' } },
  { who: 'Joud', occ: 'National Day party 🇸🇦', text: 'National Day is coming! I want a long white dress with an emerald green scarf, because green is the colour of the flag. My shoes should be white, and the bag emerald green, like the scarf.', need: { style: 'dress', main: 'white', scarf: 'emerald green', shoes: 'white', bag: 'emerald green' } }
];
function outfitSentence(n) {
  if (n.style === 'set') return `She is wearing a ${n.main} skirt and a ${n.top} top with a ${n.scarf} scarf.`;
  return `She is wearing a ${n.style === 'abaya' ? 'long' : 'long'} ${n.main} ${n.style === 'abaya' ? 'abaya' : 'dress'} with a ${n.scarf} scarf.`;
}
function studio(host) {
  const orders = pick(ORDERS, 4); let oi = 0, got = 0, max = 0; const mistakes = [];
  const next = () => {
    if (oi >= orders.length) return done();
    const o = orders[oi]; const pickd = { style: 'abaya', main: 'grey', top: 'white', scarf: 'white', shoes: 'black', bag: 'none' };
    const fields = [['style', 'Style'], ['main', 'Main colour'], ['top', 'Top colour'], ['scarf', 'Scarf'], ['shoes', 'Shoes'], ['bag', 'Bag']];
    host.innerHTML = `<div class="studio"><div class="order card"><div class="ohead"><span class="pill">Order ${oi + 1} / ${orders.length}</span><b>${esc(o.who)}</b> · ${esc(o.occ)}</div><p class="otext">${esc(o.text)}</p><p class="hint">Read carefully: some sentences say what she does <b>not</b> want.</p></div>
      <div class="design"><div class="stagebox"><div class="mdl"></div></div><div class="opts2">${fields.map(([f, lab]) => `<div class="frow" data-f="${f}"><b>${lab}</b><div class="sw">${f === 'style' ? STY.map(([v, l]) => `<button class="chip st" data-v="${v}">${l}</button>`).join('') : (f === 'bag' ? '<button class="chip nob" data-v="none">no bag</button>' : '') + COLS.map(([n, h]) => `<button class="swb" data-v="${n}" style="--c:${h}" title="${n}"><i></i><span>${n}</span></button>`).join('')}</div></div>`).join('')}</div></div>
      <div class="qact"><button class="btn big chkO">Check the order ✔</button></div><div class="ofb"></div></div>`;
    const draw = () => {
      $('.mdl', host).innerHTML = ART().model({ style: pickd.style, dress: HEX[pickd.main], top: HEX[pickd.top], scarf: HEX[pickd.scarf], shoes: HEX[pickd.shoes], bag: pickd.bag === 'none' ? null : HEX[pickd.bag] });
      $$('.frow', host).forEach(r => { const f = r.dataset.f; r.hidden = f === 'top' && pickd.style !== 'set'; $$('[data-v]', r).forEach(b => b.classList.toggle('sel', b.dataset.v === pickd[f])); });
    };
    $$('.frow', host).forEach(r => $$('[data-v]', r).forEach(b => b.onclick = () => { pickd[r.dataset.f] = b.dataset.v; sfx('step'); draw(); }));
    draw();
    $('.chkO', host).onclick = e => {
      const keys = ['style', 'main', ...(o.need.style === 'set' ? ['top'] : []), 'scarf', 'shoes', 'bag']; let g = 0;
      const rows = keys.map(k => { const ok = pickd[k] === o.need[k] || (k === 'top' && pickd.style !== 'set' && false); if (ok) g++; else mistakes.push(`${o.who}: ${k} should be ${o.need[k]} (you chose ${pickd[k]})`); return `<div class="${ok ? 'yes' : 'no'}">${ok ? '✓' : '✗'} <b>${k === 'main' ? 'main colour' : k}</b>: ${esc(o.need[k] === 'none' ? 'no bag' : o.need[k])}${ok ? '' : ` <span class="hint">(you: ${esc(pickd[k])})</span>`}</div>`; }).join('');
      got += g; max += keys.length; e.currentTarget.hidden = true; $$('.frow button', host).forEach(b => b.disabled = true);
      const pc = g / keys.length; sfx(pc === 1 ? 'win' : pc >= .6 ? 'ok' : 'no'); if (pc === 1) confetti(40);
      const sent = outfitSentence(o.need);
      $('.ofb', host).innerHTML = `<div class="card"><h3>${pc === 1 ? `Perfect! ${esc(o.who)} loves it! 😍` : pc >= .6 ? `Nearly! ${esc(o.who)} is happy, but check the red items.` : `Oh no! Read the order again.`} (${g} / ${keys.length})</h3><div class="checklist">${rows}</div>
        <h3>Now describe the outfit</h3><div class="ordq"></div></div>`;
      const q = O(sent, 'She is wearing + a + colour + clothes. The colour (an adjective) comes before the noun.', 'Put the words in order to describe the outfit.');
      const qq = prep(q); const box = $('.ordq', host); box.innerHTML = `<div class="q">${qText(qq)}</div><div class="ans"></div><div class="fb" hidden></div><div class="qact"><button class="btn chk2" disabled>Check ✔</button></div>`;
      const ui = render(qq, $('.ans', box), () => { $('.chk2', box).disabled = ui.get() == null; });
      $('.chk2', box).onclick = ev => { const ok = grade(qq, ui.get()) === 1; ui.mark(ok); max++; if (ok) got++; else mistakes.push(`Sentence: ${sent}`); const fb = $('.fb', box); fb.hidden = false; fb.className = 'fb ' + (ok ? 'yes' : 'no'); fb.innerHTML = ok ? `<b>Lovely sentence!</b> ${esc(sent)}` : `<b>Answer:</b> ${esc(sent)}<br><span>${q.why}</span>`; sfx(ok ? 'ok' : 'no');
        ev.currentTarget.textContent = oi < orders.length - 1 ? 'Next customer ➜' : 'Finish 🏁'; ev.currentTarget.onclick = () => { oi++; next(); window.scrollTo({ top: host.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' }); }; };
    };
  };
  const done = () => {
    const { pct, gain } = S.result('game:studio', got, max); const won = pct >= 70;
    host.innerHTML = `<div class="card result ${won ? 'w' : 'l'}"><span class="tag">Modest Style Studio</span><div class="big">${got} / ${max}</div><h3>${won ? 'Your customers are delighted! You are a top designer. 👗' : 'Some customers were not happy. Read the orders more carefully next time.'}</h3>
      ${mistakes.length ? `<div class="review"><h3>Check these</h3><ol>${mistakes.map(m => `<li>${esc(m)}</li>`).join('')}</ol></div>` : ''}<div class="row center"><button class="btn again">New customers 🔁</button></div></div>`;
    if (won) celebrate({ pct, title: 'Modest Style Studio', gain, from: $('.big', host), line: `Beautiful work, ${S.name || 'designer'}!` }); else { sfx('lose'); updateCoins(); }
    $('.again', host).onclick = () => studio(host);
  };
  next();
}
function colourWords(host) {
  const pool = shuffle([
    M('Which colour is the same as the night sky and many school uniforms?', ['navy blue', 'sky blue', 'beige'], 'Navy blue is a very dark blue.'),
    M('Which colour is light purple?', ['lavender', 'burgundy', 'olive green'], 'Lavender is a light purple, like the flower.'),
    M('Which colour is dark red, like grapes?', ['burgundy', 'rose pink', 'mustard yellow'], 'Burgundy is a dark red.'),
    M('Which colour is like sand or coffee with a lot of milk?', ['beige', 'grey', 'emerald green'], 'Beige is a light brown.'),
    M('Which colour is a bright, strong green, like an emerald stone?', ['emerald green', 'olive green', 'sky blue'], 'Emerald green is bright and strong. Olive green is a dull, yellow-brown green.'),
    O('She is wearing a long black abaya.', 'Colour adjectives come before the noun.'),
    O('I prefer a navy blue skirt and a white top.', 'prefer + noun; colour before the noun.'),
    M('Choose the correct sentence.', ['She is wearing a beautiful green dress.', 'She is wearing a dress green beautiful.', 'She wearing a beautiful green dress.'], 'Opinion (beautiful) → colour (green) → noun (dress), and is + -ing.'),
    M('"I don\'t want brown shoes. I want black ones." Which shoes does she want?', ['black', 'brown', 'both'], 'Read the negative carefully: she does NOT want brown.'),
    M('"The bag must be the same colour as the abaya." The abaya is grey. The bag is…', ['grey', 'black', 'white'], 'The same colour as the abaya = grey.')
  ]);
  runQuiz(host, { title: 'Colour and Clothes Words', questions: pool, key: 'game:colours', track: 'village', intro: 'Warm up before you open the studio: colours, clothes and reading carefully.' });
}

// ---------------- Treasure Cave: the final challenge ----------------
function finalPool() {
  return shuffle([1, 2, 3, 4, 5].flatMap(n => [...pick(gramOf(n), 2), ...pick(vocabQs(UN(n).words, 'mix'), 1), ...pick(UN(n).writing.build.filter(q => q.t === 'mcq' && !/graph/i.test(q.q)), 1)]));
}
function treasure(host) {
  const k = S.keys();
  host.innerHTML = `<div class="card center tcave"><div class="chestbox">${ART().chest(false)}</div><h2>The Treasure Cave</h2><div class="keyrow">${[1, 2, 3, 4, 5].map(u => `<span class="kk ${S.key(u) ? 'on' : ''}" title="Unit ${u}">${ART().keyIcon(S.key(u))}<small>U${u}</small></span>`).join('')}</div>
    <p>${k === 5 ? '<b>You have all five keys!</b> Beat the final challenge to open the chest.' : `You have <b>${k} of 5</b> keys. You can practise the final challenge now, but the chest opens only with all five keys. Win the quests in the unit zones to collect them.`}</p>
    <p>20 questions from all five units. You have 5 lives.</p><button class="btn big go">Enter the cave 🏴‍☠️</button></div>`;
  $('.go', host).onclick = () => runQuiz(host, { title: 'The Final Treasure Challenge', questions: finalPool(), key: 'final', track: 'treasure', lives: 5, pass: 70, remake: finalPool,
    bigWin: S.keys() === 5 ? 'TREASURE FOUND!' : 'YOU WON!', winLine: S.keys() === 5 ? `The chest is open, ${S.name || 'explorer'}! You conquered the Isle of Five Keys!` : 'Great! Now collect all five keys to open the chest.',
    winExtra: () => S.keys() === 5 ? `<div class="won-chest">${ART().chest(true)}</div>` : '', onDone: pct => { if (pct >= 70 && S.keys() === 5) S.seen('treasure', 1); } });
}

// ---------------- The Lighthouse: Save the Arabian Leopard ----------------
function leopard(host) {
  const L = QUEST.pse2.save;
  play(host, { title: 'Save the Arabian Leopard', key: 'game:leopard', pool: shuffle(L.qs), goal: 10, lives: 5, cls: 'g-leopard',
    intro: esc(L.story),
    qLabel: s => `Help ${s.ok} / 10`,
    stage: el => {
      el.innerHTML = `<div class="leo"><div class="cub">🐆</div><div class="needs">${L.needs.map(([e, t], k) => `<span class="need" data-k="${k}"><b>${e}</b><small>${t}</small></span>`).join('')}</div></div>`; let n = 0;
      return { ok: () => { const x = $(`.need[data-k="${n++}"]`, el); x && x.classList.add('on'); const c = $('.cub', el); c.classList.remove('happy'); void c.offsetWidth; c.classList.add('happy'); }, no: () => { const c = $('.cub', el); c.classList.remove('sad'); void c.offsetWidth; c.classList.add('sad'); } };
    },
    winLine: 'The cub is safe and healthy! You saved the Arabian leopard. 🐆', loseLine: 'The cub is in danger! Learn from the explanations and try again.', bigWin: 'YOU SAVED IT!', again: () => leopard(host) });
}
function pse2Paper(host) {
  const P = QUEST.pse2.paper;
  runPaper(host, { title: 'PSE 2B Mini Paper', key: 'pse2:paper', banner: '<div class="ex">This is a short taste of the PSE 2B exam style: Listening, Reading, Language and Writing. Answer in any order, then check.</div>',
    sections: [
      { tag: 'Listening', title: P.listening.title, intro: P.listening.situation, pre: el => { const pl = window.E.player(el, { lines: P.listening.script, voices: P.listening.voices, names: P.listening.names, situation: P.listening.situation, scriptLocked: true }); host.addEventListener('paperdone', () => pl.unlock(), { once: true }); }, questions: P.listening.qs },
      { tag: 'Reading', title: P.reading.title, pre: `<div class="source">${P.reading.text.map(p => `<p>${esc(p)}</p>`).join('')}</div>`, questions: P.reading.qs },
      { tag: 'Language', title: P.language.title, questions: P.language.qs },
      { tag: 'Writing', title: P.writing.title, questions: P.writing.qs }
    ] });
}

window.GAMES = { vocabQs, gramOf, allWords, mixedGrammar, play, numberHunt, market, lanterns, poster, radio, blizzard, graphSVG, camelRace, camelDuel, boxing, studio, colourWords, treasure, leopard, pse2Paper };
})();
