// BLOOM & BUZZ · original SVG garden art (inspired by the teacher's mood board, drawn from scratch)
(function () {
let uid = 0;
const id = p => `${p}${++uid}`;
// seeded random so scenes look the same every time
function R(seed) { let s = seed % 2147483647; if (s <= 0) s += 2147483646; return () => (s = s * 16807 % 2147483647) / 2147483647; }

// ---------------- small parts ----------------
function blossom(x, y, r, c, center = '#FFE07A', petals = 5, rot = 0) {
  let s = `<g transform="translate(${x},${y}) rotate(${rot})">`;
  for (let i = 0; i < petals; i++) s += `<ellipse cx="0" cy="${-r * .58}" rx="${r * .42}" ry="${r * .6}" fill="${c}" transform="rotate(${i * 360 / petals})"/>`;
  return s + `<circle r="${r * .28}" fill="${center}"/></g>`;
}
function tulip(x, y, h, c) {
  return `<g class="sway" style="transform-origin:${x}px ${y}px"><path d="M${x} ${y} C${x - 2} ${y - h * .5} ${x + 2} ${y - h * .7} ${x} ${y - h}" stroke="#4E9A5B" stroke-width="2.2" fill="none"/>
  <path d="M${x} ${y - h * .35} q${-9} ${-6} ${-12} ${-16} q8 2 12 12z" fill="#5FAF6A"/>
  <path d="M${x - 7} ${y - h} q0 -12 7 -15 q7 3 7 15 q-7 5 -14 0z" fill="${c}"/><path d="M${x - 3} ${y - h - 2} q3 -12 3 -13 q0 1 3 13z" fill="#fff" opacity=".25"/></g>`;
}
function rose(x, y, r, c, c2) {
  return `<g transform="translate(${x},${y})"><circle r="${r}" fill="${c}"/><path d="M${-r * .6} 0 a${r * .6} ${r * .6} 0 1 1 ${r * 1.2} 0" stroke="${c2}" stroke-width="${r * .18}" fill="none"/><path d="M${-r * .3} ${r * .1} a${r * .32} ${r * .32} 0 1 1 ${r * .6} 0" stroke="${c2}" stroke-width="${r * .16}" fill="none"/><circle r="${r * .14}" fill="${c2}"/></g>`;
}
function daisy(x, y, r, c = '#fff', ctr = '#F6C445') { return blossom(x, y, r, c, ctr, 8); }
function lavenderSprig(x, y, h, c = '#8E6BD6') {
  let s = `<path d="M${x} ${y} q2 ${-h / 2} 0 ${-h}" stroke="#6E9B6A" stroke-width="1.6" fill="none"/>`;
  for (let i = 0; i < 6; i++) { const yy = y - h * .45 - i * h * .1; s += `<ellipse cx="${x - 2}" cy="${yy}" rx="2.4" ry="3.4" fill="${c}"/><ellipse cx="${x + 2}" cy="${yy - 2}" rx="2.4" ry="3.4" fill="${c}" opacity=".85"/>`; }
  return `<g class="sway" style="transform-origin:${x}px ${y}px">${s}</g>`;
}
function bush(x, y, w, cols, seed) {
  const r = R(seed); let s = `<ellipse cx="${x}" cy="${y}" rx="${w}" ry="${w * .45}" fill="#3F8A4F"/><ellipse cx="${x - w * .3}" cy="${y - w * .2}" rx="${w * .6}" ry="${w * .4}" fill="#4FA05E"/>`;
  for (let i = 0; i < Math.round(w / 3); i++) { const a = r() * Math.PI, d = r() * w * .85; s += blossom(x + Math.cos(a) * d * (r() > .5 ? 1 : -1), y - Math.sin(a) * d * .45, 3 + r() * 3, cols[i % cols.length], '#FFE9A8', 5, r() * 60); }
  return s;
}
function tree(x, y, h, canopy, fruit, seed) {
  const r = R(seed); let s = `<path d="M${x - 4} ${y} q4 ${-h * .3} 2 ${-h * .55} l4 0 q-2 ${h * .25} 4 ${h * .55}z" fill="#8A5A3B"/>`;
  for (let i = 0; i < 7; i++) s += `<circle cx="${x + (r() - .5) * h * .7}" cy="${y - h * .62 + (r() - .5) * h * .35}" r="${h * (.18 + r() * .12)}" fill="${canopy[i % canopy.length]}"/>`;
  if (fruit) for (let i = 0; i < 9; i++) s += `<circle cx="${x + (r() - .5) * h * .75}" cy="${y - h * .6 + (r() - .5) * h * .4}" r="${2.2 + r() * 1.4}" fill="${fruit}"/>`;
  return s;
}
function lantern(x, y, r, c = '#FFD98A') {
  const g = id('lg');
  return `<defs><radialGradient id="${g}"><stop offset="0" stop-color="#FFF6D8"/><stop offset=".6" stop-color="${c}"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient></defs>
  <circle cx="${x}" cy="${y}" r="${r * 2.4}" fill="url(#${g})" class="glow" opacity=".55"/><ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * .9}" fill="#FFE6A6"/><path d="M${x - r} ${y} h${r * 2}" stroke="#E9B95C" stroke-width=".8"/><rect x="${x - r * .35}" y="${y - r * 1.05}" width="${r * .7}" height="${r * .25}" fill="#7A4E2B"/>`;
}
function stringLights(x1, y1, x2, y2, sag, n) {
  let s = `<path d="M${x1} ${y1} Q${(x1 + x2) / 2} ${(y1 + y2) / 2 + sag} ${x2} ${y2}" stroke="#4A3A3A" stroke-width=".8" fill="none" opacity=".6"/>`;
  for (let i = 1; i < n; i++) { const t = i / n, x = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * (x1 + x2) / 2 + t * t * x2, y = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * ((y1 + y2) / 2 + sag) + t * t * y2; s += `<circle cx="${x}" cy="${y + 3}" r="2.2" fill="#FFE3A3" class="twinkle" style="animation-delay:${(i % 5) * .3}s"/><circle cx="${x}" cy="${y + 3}" r="5" fill="#FFE3A3" opacity=".25"/>`; }
  return s;
}
function fence(x, y, w, h, n) { let s = `<rect x="${x}" y="${y - h * .65}" width="${w}" height="3" fill="#fff"/><rect x="${x}" y="${y - h * .3}" width="${w}" height="3" fill="#fff"/>`; for (let i = 0; i < n; i++) { const px = x + i * w / n; s += `<path d="M${px} ${y} v${-h} l${w / n * .3} -5 l${w / n * .3} 5 v${h}z" fill="#FFFDF8" stroke="#E6DCD2" stroke-width=".6"/>`; } return s; }
function cloud(x, y, s) { return `<g class="drift" transform="translate(${x},${y}) scale(${s})" opacity=".95"><ellipse cx="0" cy="0" rx="26" ry="11" fill="#fff"/><ellipse cx="-12" cy="-6" rx="13" ry="10" fill="#fff"/><ellipse cx="10" cy="-9" rx="15" ry="12" fill="#fff"/></g>`; }
function sparkles(n, w, h, seed, c = '#fff') { const r = R(seed); let s = ''; for (let i = 0; i < n; i++) s += `<circle cx="${r() * w}" cy="${r() * h}" r="${.6 + r() * 1.4}" fill="${c}" class="twinkle" style="animation-delay:${(r() * 3).toFixed(2)}s"/>`; return s; }
function petalsFalling(n, w, h, seed, c = '#F7B7CF') { const r = R(seed); let s = ''; for (let i = 0; i < n; i++) s += `<ellipse cx="${r() * w}" cy="${r() * h * .6}" rx="2.6" ry="1.6" fill="${c}" class="fall" style="animation-delay:${(r() * 6).toFixed(2)}s;animation-duration:${(5 + r() * 4).toFixed(1)}s"/>`; return s; }

// ---------------- butterflies and bees ----------------
function butterfly(c1 = '#C77DFF', c2 = '#FF8FC7', size = 40, cls = '') {
  const g = id('bf');
  return `<svg class="bfly ${cls}" viewBox="-30 -26 60 52" width="${size}" height="${size * .87}" aria-hidden="true"><defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
  <g class="wing wl"><path d="M-2 -2 C-12 -26 -32 -20 -26 -4 C-22 4 -10 4 -2 0z" fill="url(#${g})"/><path d="M-2 2 C-18 4 -24 20 -12 20 C-6 20 -3 12 -2 4z" fill="url(#${g})" opacity=".9"/><circle cx="-18" cy="-10" r="3" fill="#fff" opacity=".7"/></g>
  <g class="wing wr"><path d="M2 -2 C12 -26 32 -20 26 -4 C22 4 10 4 2 0z" fill="url(#${g})"/><path d="M2 2 C18 4 24 20 12 20 C6 20 3 12 2 4z" fill="url(#${g})" opacity=".9"/><circle cx="18" cy="-10" r="3" fill="#fff" opacity=".7"/></g>
  <ellipse cx="0" cy="2" rx="2.2" ry="11" fill="#3B2440"/><path d="M-1 -8 q-5 -10 -9 -12 M1 -8 q5 -10 9 -12" stroke="#3B2440" stroke-width="1.1" fill="none"/></svg>`;
}
function bee(size = 34, cls = '') {
  return `<svg class="bee ${cls}" viewBox="-26 -22 52 44" width="${size}" height="${size * .85}" aria-hidden="true">
  <g class="bwing"><ellipse cx="-5" cy="-12" rx="8" ry="11" fill="#E8F6FF" opacity=".85" transform="rotate(-25 -5 -12)"/><ellipse cx="6" cy="-12" rx="8" ry="11" fill="#E8F6FF" opacity=".85" transform="rotate(25 6 -12)"/></g>
  <ellipse cx="0" cy="2" rx="16" ry="12" fill="#FFC93C"/><path d="M-6 -9 q-3 11 0 22 M3 -10 q-3 12 0 24" stroke="#3B2A1E" stroke-width="4" fill="none"/>
  <circle cx="13" cy="0" r="7" fill="#3B2A1E"/><circle cx="15" cy="-2" r="1.6" fill="#fff"/><path d="M-16 2 l-6 0" stroke="#3B2A1E" stroke-width="2"/><path d="M12 -6 q2 -8 6 -10 M15 -5 q4 -6 8 -6" stroke="#3B2A1E" stroke-width="1.2" fill="none"/>
  <path d="M9 4 q3 3 6 0" stroke="#fff" stroke-width="1.2" fill="none"/></svg>`;
}

// ---------------- zone icons (64 x 64) ----------------
const ICON = {
  listening: c => `<svg viewBox="0 0 64 64">${lavenderSprig(22, 58, 46, c)}${lavenderSprig(32, 60, 52, '#A68BEA')}${lavenderSprig(42, 58, 44, c)}<path d="M18 58 h28" stroke="#6E9B6A" stroke-width="3" stroke-linecap="round"/></svg>`,
  speaking: c => `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="${c}" opacity=".12"/>${blossom(32, 48, 10, '#FFB3D1', '#FFE07A')}<g transform="translate(32,24) scale(.9)"><path d="M-2 -2 C-12 -26 -32 -20 -26 -4 C-22 4 -10 4 -2 0z" fill="${c}"/><path d="M-2 2 C-18 4 -24 20 -12 20 C-6 20 -3 12 -2 4z" fill="#7FC4F5"/><path d="M2 -2 C12 -26 32 -20 26 -4 C22 4 10 4 2 0z" fill="${c}"/><path d="M2 2 C18 4 24 20 12 20 C6 20 3 12 2 4z" fill="#7FC4F5"/><ellipse cx="0" cy="2" rx="2.4" ry="11" fill="#2E2140"/></g></svg>`,
  reading: c => `<svg viewBox="0 0 64 64"><path d="M32 60 q-2 -16 0 -26" stroke="#4E9A5B" stroke-width="3" fill="none"/><path d="M32 48 q-12 -2 -16 -10 q10 -2 16 8z" fill="#5FAF6A"/><path d="M32 44 q12 -4 15 -12 q-10 0 -15 10z" fill="#4E9A5B"/>${rose(32, 24, 16, c, '#9E1B4C')}</svg>`,
  writing: c => `<svg viewBox="0 0 64 64"><path d="M8 50 q20 -18 48 -30" stroke="#7B4A3A" stroke-width="4" fill="none" stroke-linecap="round"/>${blossom(22, 36, 13, '#F8C6E0', c)}${blossom(42, 22, 11, '#F3A9D0', c)}${blossom(48, 40, 8, '#FAD7EA', c)}</svg>`,
  grammar: c => `<svg viewBox="0 0 64 64"><path d="M14 56 h36 M16 56 v-30 a16 16 0 0 1 32 0 v30" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="3"/><path d="M32 54 v-14" stroke="#4E9A5B" stroke-width="2.4"/>${blossom(32, 34, 10, '#E879C6', '#FFF3B0', 5)}<path d="M20 24 q4 -8 10 -10" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".8"/></svg>`,
  vocab: c => `<svg viewBox="0 0 64 64"><path d="M32 18 q-4 -10 2 -14" stroke="#6B4226" stroke-width="3" fill="none"/><path d="M34 14 q10 -10 18 -4 q-8 8 -18 4z" fill="#5FAF6A"/><path d="M32 18 c-16 -8 -28 6 -24 22 c3 12 12 20 24 16 c12 4 21 -4 24 -16 c4 -16 -8 -30 -24 -22z" fill="${c}"/><ellipse cx="20" cy="30" rx="4" ry="7" fill="#fff" opacity=".35" transform="rotate(20 20 30)"/></svg>`,
  honey: c => `<svg viewBox="0 0 64 64">${[[22, 22], [42, 22], [12, 39], [32, 39], [52, 39], [22, 56]].map(([x, y], i) => `<path d="M${x} ${y - 11} l9.5 5.5 v11 l-9.5 5.5 l-9.5 -5.5 v-11z" fill="${i % 2 ? '#FFD36B' : c}" stroke="#B87700" stroke-width="1.5"/>`).join('')}<path d="M32 50 q0 8 -2 10" stroke="${c}" stroke-width="4" stroke-linecap="round"/></svg>`,
  exam: c => `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="${c}"/><path d="M40 14 a16 16 0 1 0 10 26 a13 13 0 1 1 -10 -26z" fill="#F5C94A"/>${[[18, 20], [14, 40], [26, 50], [46, 48]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="2.2" fill="#FFF3A6" class="twinkle" style="animation-delay:${i * .4}s"/>`).join('')}</svg>`,
  me: c => `<svg viewBox="0 0 64 64"><path d="M18 40 h28 l-4 20 h-20z" fill="#D9825B"/><rect x="16" y="36" width="32" height="7" rx="2" fill="#E89A6F"/><path d="M32 36 v-14" stroke="#4E9A5B" stroke-width="3"/><path d="M32 26 q-12 -2 -14 -12 q12 0 14 12z" fill="${c}"/><path d="M32 22 q10 -4 12 -14 q-12 2 -12 14z" fill="#7BCB8B"/></svg>`,
  home: c => `<svg viewBox="0 0 64 64"><path d="M14 58 v-26 a18 18 0 0 1 36 0 v26" fill="none" stroke="${c}" stroke-width="4"/><path d="M20 58 v-24 a12 12 0 0 1 24 0 v24" fill="${c}" fill-opacity=".15"/>${blossom(16, 30, 6, '#FF9EC4')}${blossom(48, 30, 6, '#C9A7FF')}${blossom(32, 14, 6, '#FFC38A')}</svg>`
};

// ---------------- scenes (400 x 240) ----------------
const sky = (a, b, c) => { const g = id('sk'); return `<defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset=".6" stop-color="${b}"/><stop offset="1" stop-color="${c || b}"/></linearGradient></defs><rect width="400" height="240" fill="url(#${g})"/>`; };
const grass = (c1 = '#7CC46F', c2 = '#5DAE5A', y = 190) => `<path d="M0 ${y} Q100 ${y - 14} 200 ${y - 4} T400 ${y - 6} V240 H0z" fill="${c1}"/><path d="M0 ${y + 18} Q120 ${y + 6} 240 ${y + 16} T400 ${y + 12} V240 H0z" fill="${c2}"/>`;
const path = (c = '#E9D9C4', l = '#D4BFA3') => `<path d="M170 240 L188 150 L212 150 L230 240z" fill="${c}"/><path d="M178 210 h44 M182 188 h36 M185 170 h30" stroke="${l}" stroke-width="1.5"/>`;
const SCENE = {
  home: () => `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">${sky('#BFE3FF', '#FFE3EC', '#FFD9C2')}
    <path d="M0 150 L60 108 L120 140 L190 96 L260 138 L330 100 L400 142 V240 H0z" fill="#C9B8E8" opacity=".7"/>${cloud(70, 40, 1)}${cloud(320, 30, .8)}
    ${grass('#9BD38A', '#79C06E', 176)}${path()}
    <g><rect x="140" y="92" width="10" height="90" fill="#F4EFE8" stroke="#D8CCBE"/><rect x="250" y="92" width="10" height="90" fill="#F4EFE8" stroke="#D8CCBE"/><path d="M145 96 Q200 30 255 96" stroke="#6E6075" stroke-width="5" fill="none"/><path d="M152 100 Q200 46 248 100" stroke="#6E6075" stroke-width="2" fill="none"/>
    ${[160, 172, 184, 196, 208, 220, 232, 244].map(x => `<path d="M${x} ${100 - Math.sin((x - 150) / 100 * Math.PI) * 44} v${30 + Math.sin((x - 150) / 100 * Math.PI) * 10}" stroke="#6E6075" stroke-width="1.4"/>`).join('')}
    ${lantern(145, 84, 6)}${lantern(255, 84, 6)}</g>
    ${bush(110, 190, 46, ['#FF7BAC', '#FFB0CC', '#FF5E8E', '#FFD1E0'], 3)}${bush(292, 190, 48, ['#C59CFF', '#FF9EC4', '#FFC38A', '#FFFFFF'], 7)}${bush(40, 214, 40, ['#FFB0CC', '#FFE08A', '#FF7BAC'], 11)}${bush(360, 214, 42, ['#FFC38A', '#FF7BAC', '#C59CFF'], 13)}
    ${tulip(140, 232, 34, '#FF5E8E')}${tulip(150, 236, 28, '#FF9EC4')}${tulip(258, 232, 32, '#C59CFF')}${tulip(268, 236, 26, '#FFC38A')}
    ${stringLights(0, 30, 400, 22, 40, 14)}</svg>`,
  listening: () => `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">${sky('#4B3A8F', '#8C6CCB', '#E7A9C9')}${sparkles(40, 400, 140, 4)}
    ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => { const x = i * 44 - 10; return `<path d="M${x} 0 q8 ${30 + (i % 3) * 14} -2 ${60 + (i % 4) * 16}" stroke="#7E5DB8" stroke-width="10" stroke-linecap="round" opacity=".75"/><path d="M${x + 6} 0 q8 ${24 + (i % 2) * 12} 2 ${48 + (i % 3) * 14}" stroke="#B79BEA" stroke-width="7" stroke-linecap="round" opacity=".7"/>`; }).join('')}
    <path d="M150 240 L186 130 L214 130 L250 240z" fill="#C7A99A" opacity=".85"/><path d="M160 214 h80 M170 186 h60 M178 164 h44 M184 146 h32" stroke="#A88778" stroke-width="1.2"/>
    ${[[110, 70, 9], [126, 104, 7], [290, 72, 9], [272, 108, 7], [150, 132, 5], [250, 134, 5]].map(([x, y, r]) => `<rect x="${x - 1}" y="${y}" width="2" height="${240 - y}" fill="#3E2F4F" opacity=".6"/>${lantern(x, y, r)}`).join('')}
    ${grass('#6C4FA8', '#4E3787', 196)}${[30, 50, 70, 330, 350, 372, 92, 312].map((x, i) => lavenderSprig(x, 236, 40 + (i % 3) * 8, i % 2 ? '#B79BEA' : '#9F7FE0')).join('')}
    ${bush(18, 220, 36, ['#F7B7D9', '#D9B8FF', '#FFFFFF'], 21)}${bush(392, 222, 36, ['#F7B7D9', '#D9B8FF', '#FFE6A6'], 22)}</svg>`,
  speaking: () => `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">${sky('#3F8FE0', '#8CC8F5', '#D8EEFF')}${cloud(80, 60, 1.4)}${cloud(300, 90, 1.1)}${cloud(200, 30, .8)}
    ${grass('#8CCB6E', '#6AB45A', 200)}
    ${(() => { const r = R(31); let s = ''; for (let i = 0; i < 46; i++) { const x = r() * 400, h = 30 + r() * 70, c = ['#FF8FB8', '#FFB86B', '#FFFFFF', '#C59CFF', '#FF6F6F', '#FFE07A'][i % 6]; s += `<path d="M${x} 240 q${(r() - .5) * 10} ${-h / 2} ${(r() - .5) * 8} ${-h}" stroke="#4E9A5B" stroke-width="1.4" fill="none"/>` + (i % 3 ? blossom(x, 240 - h, 4 + r() * 5, c, '#FFE07A', i % 2 ? 5 : 8, r() * 90) : daisy(x, 240 - h, 5 + r() * 4)); } return s; })()}</svg>`,
  reading: () => `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">${sky('#F7C3D4', '#FFE2D2', '#FFF1E3')}
    <path d="M260 120 h70 v-26 l-35 -22 l-35 22z" fill="#FFF7EE" stroke="#E7D3C1"/><rect x="282" y="98" width="26" height="22" fill="#FFE9A8" opacity=".9"/><path d="M295 98 v22 M282 109 h26" stroke="#E7D3C1"/>
    ${tree(60, 150, 90, ['#4D8C5A', '#5FA36B', '#3F7C4D'], null, 41)}${tree(372, 140, 80, ['#4D8C5A', '#6AB178', '#3F7C4D'], null, 42)}
    ${stringLights(0, 40, 400, 46, 34, 16)}${grass('#87C47A', '#6BB15E', 186)}
    ${fence(90, 200, 220, 46, 18)}
    ${bush(60, 214, 50, ['#FF4F86', '#FF8FB0', '#FFD1DF', '#FFFFFF'], 51)}${bush(340, 212, 54, ['#FF4F86', '#FFB0C8', '#FF7A45', '#FFE08A'], 52)}
    ${[[130, 214], [170, 224], [214, 218], [250, 226], [292, 216]].map(([x, y], i) => rose(x, y, 8 + (i % 2) * 2, ['#E0457B', '#FF7FA8', '#F04C6A', '#FFA3C2', '#D63F7E'][i], '#9E1B4C')).join('')}
    ${[[18, 236], [380, 236]].map(([x, y]) => daisy(x, y, 10, '#FFE07A', '#C27A00')).join('')}</svg>`,
  writing: () => `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">${sky('#B9A3F0', '#F7C1D9', '#FFD9B8')}<circle cx="200" cy="120" r="46" fill="#FFF0C8" opacity=".8"/>
    <path d="M0 150 L80 110 L150 140 L250 100 L330 136 L400 116 V240 H0z" fill="#C7A8E6" opacity=".6"/>
    <path d="M170 150 v-40 a30 30 0 0 1 60 0 v40" fill="none" stroke="#F4ECF4" stroke-width="6"/>
    ${tree(70, 170, 120, ['#F7B7D2', '#F9C9DE', '#EFA0C3', '#FFD9E8'], null, 61)}${tree(330, 170, 120, ['#F7B7D2', '#F9C9DE', '#EFA0C3', '#FFD9E8'], null, 62)}
    <path d="M120 240 L180 170 L220 170 L280 240z" fill="#EAD9E6"/><path d="M140 222 h120 M158 200 h84 M172 184 h56" stroke="#D8C2D4" stroke-width="1.2"/>
    <g><ellipse cx="200" cy="178" rx="40" ry="8" fill="#DCCBE4"/><rect x="194" y="150" width="12" height="28" fill="#EFE6F2"/><ellipse cx="200" cy="150" rx="24" ry="5" fill="#DCCBE4"/><rect x="197" y="132" width="6" height="18" fill="#EFE6F2"/><ellipse cx="200" cy="132" rx="12" ry="3" fill="#DCCBE4"/>
    <path d="M200 124 q-10 10 -22 26 M200 124 q10 10 22 26" stroke="#BFE3FF" stroke-width="2" fill="none" class="glow"/></g>
    ${bush(20, 226, 40, ['#FFB3D1', '#F5A3C7', '#FFFFFF'], 63)}${bush(380, 226, 40, ['#FFB3D1', '#F5A3C7', '#FFE0A8'], 64)}${petalsFalling(30, 400, 240, 65)}</svg>`,
  grammar: () => `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">${sky('#BFEFE4', '#E7FAF5', '#FFF1F5')}
    <g><path d="M70 220 V110 L200 40 L330 110 V220z" fill="#DFF6F0" fill-opacity=".85" stroke="#12A08A" stroke-width="3"/><path d="M70 110 H330 M135 75 V220 M200 40 V220 M265 75 V220 M70 165 H330" stroke="#12A08A" stroke-width="1.6" opacity=".7"/>
    <path d="M90 100 l40 -22 M100 150 l28 -14 M280 92 l30 -16" stroke="#fff" stroke-width="3" opacity=".8"/></g>
    ${[95, 160, 230, 300].map((x, i) => `<rect x="${x - 10}" y="196" width="20" height="18" rx="3" fill="#E58FB8"/><path d="M${x} 196 v-26" stroke="#4E9A5B" stroke-width="2"/>${blossom(x - 6, 172, 7, ['#E879C6', '#C59CFF', '#FF9EC4', '#F7B7D9'][i], '#FFF3B0')}${blossom(x + 7, 180, 6, ['#F7B7D9', '#E879C6', '#C59CFF', '#FFB3D1'][i], '#FFF3B0')}`).join('')}
    ${grass('#8FD3B4', '#6CBF9A', 214)}${sparkles(20, 400, 120, 71, '#FFFFFF')}</svg>`,
  vocab: () => `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">${sky('#9ED7FF', '#FFF2D9', '#FFE6C9')}<circle cx="330" cy="50" r="26" fill="#FFE07A" opacity=".9" class="glow"/>
    ${[[50, 170, 100], [130, 160, 86], [270, 162, 90], [352, 172, 100]].map(([x, y, h], i) => tree(x, y, h, ['#4FA05E', '#5DB46B', '#3F8A4F'], '#F2394B', 80 + i)).join('')}
    ${grass('#A6D879', '#86C661', 190)}<path d="M176 240 Q196 200 200 176 Q204 200 224 240z" fill="#E8C9A0"/>
    ${[[70, 222], [326, 222], [150, 232]].map(([x, y]) => `<path d="M${x - 18} ${y - 10} h36 l-4 18 h-28z" fill="#B07443"/><path d="M${x - 18} ${y - 4} h36" stroke="#8A5A3B" stroke-width="2"/>${[0, 1, 2, 3].map(k => `<circle cx="${x - 11 + k * 7}" cy="${y - 12}" r="5" fill="${k % 2 ? '#F2394B' : '#FF6B5B'}"/>`).join('')}`).join('')}
    ${[[232, 228], [118, 214], [262, 214]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#F2394B"/>`).join('')}</svg>`,
  honey: () => `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">${sky('#FFE7A8', '#FFF4D6', '#E9F6D8')}
    <path d="M0 0 H400 V18 Q380 40 360 18 Q330 50 300 18 Q270 34 240 18 Q200 56 160 18 Q120 36 90 18 Q50 44 20 18 L0 26z" fill="#F2A900"/>
    ${[[360, 18, 48], [240, 18, 44], [160, 18, 58], [90, 18, 40]].map(([x, y, h], i) => `<path d="M${x - 3} ${y} q3 ${h} 0 ${h} q-3 0 0 -${h}" fill="#F2A900"/><circle cx="${x}" cy="${y + h + 3}" r="4" fill="#F2A900" class="drip" style="animation-delay:${i * .7}s"/>`).join('')}
    ${grass('#A8D68A', '#88C46E', 196)}
    ${(() => { let s = ''; const rows = [[200, 190, 5], [200, 162, 4], [200, 134, 3], [200, 106, 2]]; rows.forEach(([cx, y, n], ri) => { for (let k = 0; k < n; k++) { const x = cx + (k - (n - 1) / 2) * 30; s += `<path d="M${x} ${y - 17} l15 8.5 v17 l-15 8.5 l-15 -8.5 v-17z" fill="${(k + ri) % 2 ? '#FFD36B' : '#F7B92B'}" stroke="#B87700" stroke-width="1.6"/><path d="M${x} ${y - 10} l9 5 v10 l-9 5 l-9 -5 v-10z" fill="#E59A00" opacity=".35"/>`; } }); return s; })()}
    ${[30, 50, 360, 380, 70].map((x, i) => `<path d="M${x} 240 v-30" stroke="#4E9A5B" stroke-width="2"/>${blossom(x, 208, 9, ['#7F6BD8', '#9C85E8', '#7F6BD8', '#9C85E8', '#FFFFFF'][i], '#FFE07A', 3, i * 20)}`).join('')}</svg>`,
  exam: () => `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">${sky('#1E1B4B', '#4B3A8F', '#F29E7A')}<circle cx="300" cy="70" r="22" fill="#FFF3C7"/><circle cx="292" cy="64" r="22" fill="#2E2A6B" opacity=".25"/>${sparkles(50, 400, 120, 91)}
    <path d="M0 170 Q60 140 120 160 T240 150 T400 158 V240 H0z" fill="#2C2357"/>${tree(40, 176, 110, ['#1D1840', '#231D4D'], null, 92)}${tree(370, 176, 120, ['#1D1840', '#231D4D'], null, 93)}
    <path d="M0 196 Q140 176 260 192 T400 186 V240 H0z" fill="#233A5C"/>
    ${(() => { const r = R(94); let s = ''; for (let i = 0; i < 40; i++) s += blossom(r() * 400, 200 + r() * 40, 2.5 + r() * 2.5, i % 3 ? '#4C7DD8' : '#7FA8F0', '#E8F0FF'); for (let i = 0; i < 26; i++) s += `<circle cx="${r() * 400}" cy="${120 + r() * 110}" r="${1.6 + r() * 1.8}" fill="#FFE98A" class="firefly" style="animation-delay:${(r() * 4).toFixed(2)}s"/>`; return s; })()}</svg>`,
  me: () => `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">${sky('#CDEFC8', '#F2FBE9', '#FFF3E3')}${tree(60, 160, 120, ['#4D8C5A', '#5FA36B', '#3F7C4D'], null, 101)}${tree(350, 160, 120, ['#4D8C5A', '#6AB178', '#3F7C4D'], null, 102)}
    ${grass('#8CCB6E', '#6AB45A', 176)}
    <g transform="translate(250,150)"><path d="M0 50 l6 -40 h40 l6 40" fill="none" stroke="#5B8DEF" stroke-width="5"/>${[0, 1, 2, 3, 4].map(k => `<rect x="${8 + k * 8}" y="-14" width="6" height="40" rx="2" fill="#6FA0F5"/>`).join('')}<rect x="0" y="24" width="52" height="6" rx="2" fill="#5B8DEF"/></g>
    <path d="M120 240 L170 176 L230 176 L280 240z" fill="#D8C6AE"/>${bush(30, 222, 40, ['#FF9EC4', '#FFE08A', '#C59CFF'], 103)}${bush(380, 226, 40, ['#FFB3D1', '#FF7BAC', '#FFC38A'], 104)}</svg>`
};

// ---------------- "photos" for reading visuals ----------------
const PHOTO = {
  roofgarden: () => `<svg viewBox="0 0 300 180">${sky('#9ED7FF', '#E4F4FF').replace('400', '300').replace('240', '180')}<rect x="40" y="70" width="220" height="110" fill="#D9D2C8"/>${[0, 1, 2, 3, 4, 5].map(c => [0, 1, 2].map(r => `<rect x="${52 + c * 34}" y="${92 + r * 28}" width="22" height="16" fill="#8FB8DE"/>`).join('')).join('')}<rect x="36" y="64" width="228" height="8" fill="#BFB4A6"/>${bush(90, 62, 28, ['#FF7BAC', '#FFE08A', '#FFFFFF'], 111)}${bush(210, 62, 30, ['#C59CFF', '#FF9EC4', '#FFC38A'], 112)}${tree(150, 64, 40, ['#4FA05E', '#5DB46B'], null, 113)}<rect x="0" y="176" width="300" height="4" fill="#9A9A9A"/></svg>`,
  beeflowers: () => `<svg viewBox="0 0 300 180"><rect width="300" height="180" fill="#E9F6D8"/>${blossom(80, 110, 40, '#FFB0CC', '#F6C445', 8)}${blossom(210, 90, 34, '#C59CFF', '#F6C445', 6)}${blossom(250, 150, 22, '#FFE08A', '#E59A00', 8)}<g transform="translate(120,60)">${bee(70).replace('<svg', '<svg x="-35" y="-30"')}</g><g transform="translate(220,40)">${butterfly('#FF9EC4', '#C77DFF', 60).replace('<svg', '<svg x="-30" y="-26"')}</g></svg>`,
  metro: () => `<svg viewBox="0 0 300 180">${sky('#FFD9A8', '#FFF1DD').replace('400', '300').replace('240', '180')}<path d="M0 120 h300" stroke="#B9A48E" stroke-width="10"/>${[30, 110, 190, 270].map(x => `<rect x="${x - 6}" y="120" width="12" height="60" fill="#C9B6A0"/>`).join('')}<rect x="20" y="84" width="230" height="36" rx="16" fill="#F4F4F7" stroke="#9AA3B5" stroke-width="2"/><path d="M240 84 q30 4 34 36 h-34z" fill="#E0457B"/>${[0, 1, 2, 3, 4, 5].map(k => `<rect x="${34 + k * 34}" y="92" width="24" height="14" rx="3" fill="#7FB3E0"/>`).join('')}<rect x="20" y="108" width="230" height="4" fill="#E0457B"/></svg>`,
  station: () => `<svg viewBox="0 0 300 180"><rect width="300" height="180" fill="#FFF3E3"/><path d="M10 70 Q150 10 290 70 v8 H10z" fill="#E7C9A8"/>${[30, 80, 130, 180, 230, 270].map(x => `<rect x="${x}" y="76" width="6" height="80" fill="#C9A27C"/>`).join('')}<rect x="0" y="156" width="300" height="24" fill="#DCCBB6"/>${[60, 110, 170, 210].map((x, i) => `<circle cx="${x}" cy="118" r="7" fill="#7A5A4A"/><rect x="${x - 8}" y="126" width="16" height="30" rx="6" fill="${['#E0457B', '#7C5CD6', '#2E8FD8', '#12A08A'][i]}"/>`).join('')}</svg>`,
  turtle: () => `<svg viewBox="0 0 300 180">${sky('#8FD3F0', '#CFEFFF').replace('400', '300').replace('240', '180')}<path d="M0 90 Q150 80 300 92 V120 H0z" fill="#3FA7D6"/><path d="M0 110 Q150 104 300 112 V180 H0z" fill="#F2DFB4"/><g transform="translate(150,138)"><ellipse rx="44" ry="24" fill="#5E8A4E"/><path d="M-30 -6 h60 M-20 -18 v30 M0 -22 v40 M20 -18 v30" stroke="#456B39" stroke-width="2"/><ellipse cx="52" cy="-2" rx="14" ry="10" fill="#7FA36A"/><circle cx="58" cy="-5" r="2" fill="#1E1E1E"/><ellipse cx="-30" cy="20" rx="14" ry="6" fill="#7FA36A" transform="rotate(20 -30 20)"/><ellipse cx="30" cy="22" rx="14" ry="6" fill="#7FA36A" transform="rotate(-20 30 22)"/></g></svg>`,
  volunteers: () => `<svg viewBox="0 0 300 180"><rect width="300" height="180" fill="#1E2450"/>${sparkles(30, 300, 80, 121)}<circle cx="240" cy="36" r="14" fill="#FFF3C7"/><path d="M0 100 Q150 92 300 104 V180 H0z" fill="#2B3E6E"/><path d="M0 128 Q150 120 300 130 V180 H0z" fill="#B9A783"/>${[80, 150, 220].map((x, i) => `<circle cx="${x}" cy="114" r="7" fill="#3A2A2A"/><rect x="${x - 8}" y="121" width="16" height="30" rx="6" fill="#4A4A6A"/><path d="M${x + 8} 130 l26 ${10 + i * 2}" stroke="#FF5A5A" stroke-width="10" opacity=".35"/><circle cx="${x + 9}" cy="130" r="3" fill="#FF4D4D"/>`).join('')}</svg>`
};

window.ART = { blossom, tulip, rose, daisy, butterfly, bee, ICON, SCENE, PHOTO, lantern, R };
})();
