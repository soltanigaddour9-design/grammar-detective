// Revision House · motion layer: morph page transitions (View Transitions API), reveals, ripples, splash, icons
// Prepared by Mr. Abdelkader Soltani
(function () {
'use strict';
const D = document, R = D.documentElement;
const reduced = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
const $$ = (s, el = D) => [...el.querySelectorAll(s)];

// ---------- line icons (drawn for this site) ----------
const P = {
  house: '<path d="M3 11 12 4l9 7"/><path d="M5 9.8V20h14V9.8"/><path d="M10 20v-5.5h4V20"/>',
  hall: '<path d="M6 21V4.6A1.6 1.6 0 0 1 7.6 3h8.8A1.6 1.6 0 0 1 18 4.6V21"/><path d="M3 21h18"/><circle cx="14.6" cy="12.4" r=".9" fill="currentColor" stroke="none"/>',
  grammar: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  vocab: '<path d="M3 12.5a9 8.5 0 0 0 18 0Z"/><path d="M12.5 12.5 15.8 3"/><path d="M16 12.5 21 5"/>',
  reading: '<path d="M12 6.6C10 5 7 4.5 3 5v13.6c4-.5 7 0 9 1.5 2-1.5 5-2 9-1.5V5c-4-.5-7 0-9 1.6Z"/><path d="M12 6.6v13.5"/>',
  listening: '<path d="M4 15.5V12a8 8 0 0 1 16 0v3.5"/><rect x="3" y="14" width="4.6" height="7" rx="1.6"/><rect x="16.4" y="14" width="4.6" height="7" rx="1.6"/>',
  writing: '<path d="M16.4 3.6a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/><path d="m14.4 5.6 3 3"/>',
  speaking: '<rect x="9" y="3" width="6" height="11.5" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0"/><path d="M12 18v3"/><path d="M8.5 21h7"/>',
  exam: '<path d="M3.5 8.5 7.6 12 12 5l4.4 7 4.1-3.5L19 18H5Z"/><path d="M5 21h14"/>',
  plan: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z"/>'
};
const ICON = (id, cls = '') => `<svg class="icn ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[id] || P.house}</svg>`;

// ---------- where am I going? ----------
function parse(h) {
  const p = (h || '').replace(/^#\/?/, '').split('/');
  if (!p[0]) return { page: 'outside', depth: 0 };
  if (p[0] === 'hall') return { page: 'hall', depth: 1 };
  if (p[0] === 'plan') return { page: 'plan', depth: 2 };
  if (p[0] === 'room') return { page: p[1] || '', sub: p[2] || '', arg: p[3] ? decodeURIComponent(p[3]) : '', depth: p[3] ? 3 : 2 };
  return { page: 'outside', depth: 0 };
}
function kindOf(a, b) {
  if (!a) return 'init';
  if (a.page !== b.page) return b.depth >= a.depth ? 'enter' : 'back';
  if ((a.sub || 'learn') !== (b.sub || 'learn')) return 'tab';
  if (!a.arg && b.arg) return 'deep';
  if (a.arg && !b.arg) return 'up';
  if (a.arg !== b.arg) return 'next';
  return 'tab';
}

// ---------- remember the finger ----------
let lastPtr = 0, src = null, srcT = 0, lastLink = null;
D.addEventListener('pointerdown', e => { lastPtr = Date.now(); R.style.setProperty('--vx', e.clientX + 'px'); R.style.setProperty('--vy', e.clientY + 'px'); ripple(e); }, true);
D.addEventListener('click', e => {
  const t = e.target && e.target.closest ? e.target : null; if (!t) return;
  const el = t.closest('.topic, .jar, .door, .bell, .step');
  src = el && !(el instanceof SVGElement) ? el : null; srcT = Date.now();
  lastLink = t.closest('a, button');
}, true);

const inView = el => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight && r.width > 0; };

// ---------- the transition ----------
function nav(prev, next, render) {
  const a = prev == null ? null : parse(prev), b = parse(next), kind = kindOf(a, b);
  const ctx = { a, b, kind };
  if (kind === 'init' || reduced || typeof D.startViewTransition !== 'function') {
    render(); after(ctx, false); if (kind !== 'init' && !reduced) fallback(kind); return;
  }
  if (Date.now() - lastPtr > 1500) { R.style.setProperty('--vx', '50%'); R.style.setProperty('--vy', '45%'); }
  R.dataset.dir = direction(ctx);
  const named = [];
  const nm = (el, n) => { if (el) { el.style.viewTransitionName = n; named.push(el); } };
  const fresh = src && Date.now() - srcT < 2000 && D.contains(src) ? src : null;
  // pinned parts that are scrolled out of view should not fly in from above
  if (kind !== 'enter' && kind !== 'back') $$('.room-head, .tabs, .tab.on').forEach(x => { if (!inView(x)) nm(x, 'none'); });
  if (kind === 'enter' && fresh && fresh.matches('.door, .bell, .step')) { $$('.room-head').forEach(x => nm(x, 'none')); nm(fresh, 'room-head'); }
  if (kind === 'deep' && fresh && fresh.matches('.topic, .jar')) nm(fresh, 'card-morph');
  if (kind === 'up') { const c = D.querySelector('#rb > .card'); if (c && inView(c)) nm(c, 'card-morph'); }
  R.dataset.vt = kind;
  let t;
  try { t = D.startViewTransition(() => { render(); after(ctx, true); }); }
  catch (e) { named.forEach(x => x.style.viewTransitionName = ''); render(); after(ctx, false); return; }
  const clean = () => { delete R.dataset.vt; named.forEach(x => x.style.viewTransitionName = ''); $$('[data-vtn]').forEach(x => { x.style.viewTransitionName = ''; x.removeAttribute('data-vtn'); }); src = null; };
  if (t.ready) t.ready.catch(() => {});
  if (t.updateCallbackDone) t.updateCallbackDone.catch(() => {});
  t.finished.then(clean, clean);
}
function direction({ a, b, kind }) {
  if (kind === 'next') return lastLink && /^\s*‹/.test(lastLink.textContent) ? 'b' : 'f';
  if (kind === 'tab') {
    const hrefs = $$('.tabs .tab').map(x => x.getAttribute('href') || '');
    const ix = s => hrefs.findIndex(h => h.split('/')[3] === (s || hrefs[0] && hrefs[0].split('/')[3]));
    return ix(b.sub) < ix(a.sub) ? 'b' : 'f';
  }
  return 'f';
}
function after(ctx, inVT) {
  const { a, kind } = ctx;
  const nm = (el, n) => { if (el) { el.style.viewTransitionName = n; el.setAttribute('data-vtn', ''); } };
  if (inVT) {
    if (kind === 'deep') nm(D.querySelector('#rb > .card'), 'card-morph');
    if (kind === 'up' && a && a.arg) {
      const el = $$('#rb [data-t], #rb [data-l], #rb [data-e], #rb [data-r], #rb [data-w]').find(x => Object.values(x.dataset).includes(a.arg));
      if (el && inView(el)) nm(el, 'card-morph');
    }
    if (kind === 'back' && a) {
      const go = a.page === 'plan' ? '#/plan' : '#/room/' + a.page;
      const el = $$(`[data-room="${a.page}"], .bell[data-go="${go}"]`).find(inView);
      if (el) { $$('.room-head').forEach(x => nm(x, 'none')); nm(el, 'room-head'); }
    }
  }
  split(); reveal();
}
function fallback(kind) {
  const v = D.getElementById('view'); if (!v) return;
  const c = { enter: 'pg-enter', back: 'pg-back', deep: 'pg-deep', up: 'pg-deep' }[kind] || 'pg-tab';
  v.classList.remove('pg-enter', 'pg-back', 'pg-tab', 'pg-deep'); void v.offsetWidth; v.classList.add(c);
  setTimeout(() => v.classList.remove(c), 800);
}

// ---------- headings rise word by word ----------
function split() {
  $$('.room-head h1, .outside-hero h1').forEach(h => {
    if (h.dataset.split) return; h.dataset.split = '1';
    let i = 0; const out = D.createDocumentFragment();
    const wrap = node => { const w = D.createElement('span'); w.className = 'w'; const s = D.createElement('span'); s.style.setProperty('--i', i++); s.append(node); w.append(s); return w; };
    [...h.childNodes].forEach(n => {
      if (n.nodeType === 3) n.textContent.split(/(\s+)/).forEach(tok => { if (!tok) return; out.append(/^\s+$/.test(tok) ? D.createTextNode(' ') : wrap(D.createTextNode(tok))); });
      else out.append(wrap(n));
    });
    h.textContent = ''; h.append(out);
  });
}

// ---------- reveal on scroll ----------
const io = 'IntersectionObserver' in window && !reduced ? new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; const t = e.target; t.classList.add('in'); io.unobserve(t);
  setTimeout(() => t.classList.remove('rv', 'in'), 1300);
}), { rootMargin: '0px 0px -6% 0px' }) : null;
function reveal() {
  if (!io) return; let n = 0; const H = innerHeight;
  $$('#view .card, #view .topic, #view .door, #view .bell, #view .jar, #view .step, #view .plan, #view .way').forEach(el => {
    if (el.dataset.rv || el.style.viewTransitionName) return; el.dataset.rv = '1';
    if (el.parentElement && el.parentElement.closest('.rv')) return;
    if (el.getBoundingClientRect().top < H * .94) return;
    el.classList.add('rv'); el.style.setProperty('--d', n++ % 6); io.observe(el);
  });
}

// ---------- ripple ----------
function ripple(e) {
  const el = e.target && e.target.closest && e.target.closest('.btn, .opt, .bell, .topic, .tab, .step, .plan');
  if (!el || reduced || el.disabled) return;
  const r = el.getBoundingClientRect(), s = Math.max(r.width, r.height);
  const k = D.createElement('span'); k.className = 'ripple';
  k.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
  el.appendChild(k); setTimeout(() => k.remove(), 700);
}

// ---------- results count up, later content reveals ----------
function countUp(el) {
  const m = el.textContent.match(/^(\d+)\s*\/\s*(\d+)$/); if (!m || el.dataset.cu) return; el.dataset.cu = '1';
  const to = +m[1], tot = m[2], t0 = performance.now(), dur = 900;
  const step = now => { const p = Math.min(1, (now - t0) / dur), v = Math.round(to * (1 - Math.pow(1 - p, 3))); el.textContent = `${v} / ${tot}`; if (p < 1) requestAnimationFrame(step); };
  if (!reduced) requestAnimationFrame(step);
}
let mq = 0;
const mo = new MutationObserver(() => { if (mq) return; mq = requestAnimationFrame(() => { mq = 0; $$('.result .big').forEach(countUp); reveal(); }); });
const startMO = () => { const v = D.getElementById('view'); if (v) mo.observe(v, { childList: true, subtree: true }); };

// ---------- opening splash (once per visit) ----------
function splash() {
  try { if (reduced || sessionStorage.getItem('rh_splash')) return; sessionStorage.setItem('rh_splash', '1'); } catch (e) { return; }
  let i = 0;
  const word = (w, em) => `<span class="wd">${em ? '<em>' : ''}${[...w].map(c => `<span style="--i:${i++}">${c}</span>`).join('')}${em ? '</em>' : ''}</span>`;
  const s = D.createElement('div'); s.id = 'splash'; s.setAttribute('aria-hidden', 'true');
  s.innerHTML = `<div><div class="sl"><img src="img/logo-ep.png" alt=""><img src="img/logo-almaarefa.png" alt=""><img src="img/logo-gedu.png" alt=""></div>
    <h1>${word('The')} ${word('Revision')} ${word('House', true)}</h1><p>PSE 2A · Units 1 to 3</p><div class="bar"><i></i></div><small>Prepared by Mr. Abdelkader Soltani</small></div>`;
  D.body.appendChild(s);
  const out = () => { s.classList.add('out'); setTimeout(() => s.remove(), 1100); };
  const tm = setTimeout(out, 1900); s.addEventListener('click', () => { clearTimeout(tm); out(); });
}

window.ICON = ICON;
window.MOTION = { nav, reveal, split };
splash();
if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', startMO); else startMO();
})();
