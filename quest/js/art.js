// QUEST UNLOCKED · original SVG art: the treasure island map, zone scenes, avatars, track backgrounds and game sprites
(function () {
let UID = 0; const uid = p => p + (++UID);
const R = (a, b) => a + Math.random() * (b - a);
// deterministic random so the map looks the same every time
let seed = 7; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };

// ---------- small nature pieces ----------
const palm = (x, y, s = 1, c = '#2F9E44') => `<g transform="translate(${x} ${y}) scale(${s})" class="sway"><path d="M0 0 C-3 -18 2 -34 -2 -50" stroke="#8A5A2B" stroke-width="5" fill="none" stroke-linecap="round"/>
  ${[[-30, -52], [28, -56], [-22, -66], [24, -40], [-34, -38]].map(([dx, dy]) => `<path d="M-2 -50 Q${dx / 2} ${-62} ${dx} ${dy}" stroke="${c}" stroke-width="7" fill="none" stroke-linecap="round"/>`).join('')}<circle cx="-2" cy="-50" r="4" fill="#6B3F1D"/></g>`;
const tree = (x, y, s = 1, c = '#2B8A3E', c2 = '#40C057') => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-3" y="-8" width="6" height="12" rx="2" fill="#7A4A22"/><circle cx="0" cy="-20" r="15" fill="${c}"/><circle cx="-8" cy="-14" r="10" fill="${c}"/><circle cx="8" cy="-15" r="10" fill="${c}"/><circle cx="-4" cy="-25" r="7" fill="${c2}" opacity=".7"/></g>`;
const pine = (x, y, s = 1, snow) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-2.5" y="-6" width="5" height="9" fill="#6B4226"/><path d="M0 -44 L14 -18 L8 -18 L18 -4 L-18 -4 L-8 -18 L-14 -18 Z" fill="#1E6B4A"/>${snow ? '<path d="M0 -44 L7 -31 L-7 -31 Z M-9 -18 L9 -18 L5 -13 L-5 -13 Z" fill="#fff"/>' : ''}</g>`;
const rock = (x, y, s = 1, c = '#8D8579') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-14 4 Q-16 -8 -6 -12 Q4 -18 12 -8 Q18 0 12 5 Z" fill="${c}"/><path d="M-6 -12 Q4 -18 12 -8 Q4 -10 -2 -6 Z" fill="#fff" opacity=".25"/></g>`;
const bush = (x, y, s = 1, c = '#37B24D') => `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="-7" cy="0" r="7" fill="${c}"/><circle cx="3" cy="-3" r="9" fill="${c}"/><circle cx="11" cy="1" r="6" fill="${c}"/></g>`;
const flowerDot = (x, y, c) => `<circle cx="${x}" cy="${y}" r="2.2" fill="${c}"/>`;
const wave = (x, y, s = 1) => `<path class="wv" d="M${x} ${y} q${6 * s} ${-6 * s} ${12 * s} 0 t${12 * s} 0" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".75"/>`;
const tent = (x, y, c = '#E8590C', s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-20 0 L0 -28 L20 0 Z" fill="${c}"/><path d="M0 -28 L6 0 L-6 0 Z" fill="#2B1A0E" opacity=".75"/><path d="M0 -28 L20 0" stroke="#fff" stroke-width="1" opacity=".4"/></g>`;
const fire = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" class="fire"><path d="M-10 4 L10 -2 M-10 -2 L10 4" stroke="#6B3F1D" stroke-width="4" stroke-linecap="round"/><path class="fl1" d="M0 -26 C8 -16 10 -8 6 0 L-6 0 C-10 -8 -6 -16 0 -26 Z" fill="#FF922B"/><path class="fl2" d="M0 -16 C4 -10 5 -5 3 0 L-3 0 C-5 -5 -3 -10 0 -16 Z" fill="#FFE066"/><circle r="24" cy="-8" fill="#FFB347" opacity=".18" class="glow"/></g>`;
const house = (x, y, c = '#F4A261', roof = '#C0392B', s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-12" y="-14" width="24" height="16" fill="${c}"/><path d="M-15 -14 L0 -27 L15 -14 Z" fill="${roof}"/><rect x="-3" y="-8" width="6" height="10" fill="#5C3A1E"/></g>`;
const lantern = (x, y, c = '#FF6B6B') => `<g transform="translate(${x} ${y})" class="lan"><line x1="0" y1="-10" x2="0" y2="-4" stroke="#333" stroke-width="1"/><rect x="-4" y="-4" width="8" height="10" rx="3" fill="${c}"/><circle cy="1" r="9" fill="${c}" opacity=".25"/></g>`;
const column = (x, y, h = 30, broken) => `<g transform="translate(${x} ${y})"><rect x="-6" y="${-h}" width="12" height="${h}" fill="#E9DCC0"/><path d="M-6 ${-h} h12" stroke="#BFAE8A"/>${[-3, 0, 3].map(d => `<line x1="${d}" y1="${-h + 2}" x2="${d}" y2="-2" stroke="#CDBB95" stroke-width="1"/>`).join('')}${broken ? `<path d="M-6 ${-h} L-2 ${-h - 6} L3 ${-h - 2} L6 ${-h - 7} L6 ${-h}" fill="#E9DCC0"/>` : `<rect x="-9" y="${-h - 4}" width="18" height="5" fill="#D8C7A2"/>`}<rect x="-9" y="-2" width="18" height="4" fill="#D8C7A2"/></g>`;
const cloud = (x, y, s = 1, cls = 'cl1') => `<g class="${cls}" transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="0" rx="28" ry="12" fill="#fff" opacity=".92"/><ellipse cx="-14" cy="-6" rx="14" ry="10" fill="#fff" opacity=".92"/><ellipse cx="12" cy="-8" rx="16" ry="12" fill="#fff" opacity=".92"/></g>`;
const bird = (x, y, s = 1) => `<path class="bird" transform="translate(${x} ${y}) scale(${s})" d="M-8 0 Q-4 -5 0 0 Q4 -5 8 0" stroke="#33415C" stroke-width="1.8" fill="none"/>`;
const star = (x, y, r = 1.6) => `<circle class="tw" cx="${x}" cy="${y}" r="${r}" fill="#FFF7D6" style="animation-delay:${(rnd() * 3).toFixed(2)}s"/>`;
const flake = (x, y, r = 2) => `<circle class="flk" cx="${x}" cy="${y}" r="${r}" fill="#fff" style="animation-delay:${(rnd() * 4).toFixed(2)}s"/>`;
const camelSil = (x, y, s = 1, c = '#8B5A2B') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-22 0 L-20 -14 Q-22 -22 -14 -24 Q-8 -34 0 -24 Q6 -32 12 -24 L18 -26 Q24 -30 26 -24 L24 -20 L20 -18 L18 -12 L18 0 M-14 -2 L-14 -12 M12 -2 L12 -12" stroke="${c}" stroke-width="3" fill="${c}" stroke-linejoin="round" stroke-linecap="round"/></g>`;

// ---------- characters ----------
const SKIN = '#C98B5B', SKIN2 = '#B57749';
function person(g, o = {}) {
  // a friendly figure, 100 x 160 box, origin at feet centre
  const top = o.top || (g === 'f' ? '#D6336C' : '#1971C2'), bottom = o.bottom || (g === 'f' ? '#862E9C' : '#343A40'), scarf = o.scarf || '#F783AC';
  const armL = o.armL || '', armR = o.armR || '';
  const face = `<circle cx="-6" cy="-122" r="2.6" fill="#2B1A12"/><circle cx="6" cy="-122" r="2.6" fill="#2B1A12"/><path d="M-6 -113 Q0 -107 6 -113" stroke="#7A2E1D" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="-11" cy="-115" r="3" fill="#FF8787" opacity=".45"/><circle cx="11" cy="-115" r="3" fill="#FF8787" opacity=".45"/>`;
  if (g === 'f') return `<g class="person f">
    <path d="M-26 -2 L-22 -78 Q0 -90 22 -78 L26 -2 Z" fill="${bottom}"/>
    <path d="M-24 -76 Q0 -92 24 -76 L22 -48 L-22 -48 Z" fill="${top}"/>
    <rect x="-14" y="-4" width="11" height="6" rx="3" fill="#495057"/><rect x="3" y="-4" width="11" height="6" rx="3" fill="#495057"/>
    <g class="armL" style="transform-origin:-20px -72px">${armL || `<path d="M-20 -72 Q-30 -56 -26 -40" stroke="${top}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="-26" cy="-38" r="5.5" fill="${SKIN}"/>`}</g>
    <g class="armR" style="transform-origin:20px -72px">${armR || `<path d="M20 -72 Q30 -56 26 -40" stroke="${top}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="26" cy="-38" r="5.5" fill="${SKIN}"/>`}</g>
    <path d="M-24 -100 Q-26 -146 0 -148 Q26 -146 24 -100 Q24 -80 30 -74 L-30 -74 Q-24 -80 -24 -100 Z" fill="${scarf}"/>
    <ellipse cx="0" cy="-118" rx="15" ry="17" fill="${SKIN}"/>
    <path d="M-17 -124 Q0 -146 17 -124 Q14 -136 0 -138 Q-14 -136 -17 -124 Z" fill="${scarf}"/>${face}</g>`;
  return `<g class="person m">
    <rect x="-17" y="-48" width="15" height="46" rx="5" fill="${bottom}"/><rect x="2" y="-48" width="15" height="46" rx="5" fill="${bottom}"/>
    <rect x="-18" y="-4" width="16" height="7" rx="3" fill="#212529"/><rect x="2" y="-4" width="16" height="7" rx="3" fill="#212529"/>
    <path d="M-22 -96 Q0 -104 22 -96 L20 -46 L-20 -46 Z" fill="${top}"/>
    <g class="armL" style="transform-origin:-19px -92px">${armL || `<path d="M-19 -92 Q-30 -74 -26 -56" stroke="${top}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="-26" cy="-54" r="5.5" fill="${SKIN}"/>`}</g>
    <g class="armR" style="transform-origin:19px -92px">${armR || `<path d="M19 -92 Q30 -74 26 -56" stroke="${top}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="26" cy="-54" r="5.5" fill="${SKIN}"/>`}</g>
    <rect x="-5" y="-104" width="10" height="8" fill="${SKIN2}"/>
    <ellipse cx="0" cy="-120" rx="16" ry="18" fill="${SKIN}"/>
    <path d="M-17 -124 Q-18 -142 0 -142 Q18 -142 17 -124 Q12 -134 0 -133 Q-10 -134 -17 -124 Z" fill="#2B1A12"/>
    <path d="M-19 -130 Q0 -150 19 -130 L24 -128 L-14 -128 Z" fill="${o.cap || '#F59F00'}"/>${face}</g>`;
}
function runner(g) {
  const c = g === 'f' ? '#D6336C' : '#1971C2';
  return `<svg viewBox="-40 -160 80 170" class="runner" aria-hidden="true">${person(g, { top: c, armL: `<path d="M-20 -72 Q-34 -66 -36 -52" stroke="${c}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="-36" cy="-50" r="5.5" fill="${SKIN}"/>`, armR: `<path d="M20 -72 Q34 -80 38 -92" stroke="${c}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="38" cy="-94" r="5.5" fill="${SKIN}"/>` }).replace(/armL" style="transform-origin:-?\d+px -?\d+px"/, 'armL"').replace(/armR" style="transform-origin:-?\d+px -?\d+px"/, 'armR"')}</svg>`;
}
function clapper(g) {
  const c = g === 'f' ? '#D6336C' : '#1971C2';
  const handL = g === 'f' ? `<path d="M-20 -72 Q-26 -60 -8 -58" stroke="${c}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="-6" cy="-58" r="6.5" fill="${SKIN}"/>` : `<path d="M-19 -92 Q-26 -76 -8 -74" stroke="${c}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="-6" cy="-74" r="6.5" fill="${SKIN}"/>`;
  const handR = g === 'f' ? `<path d="M20 -72 Q26 -60 8 -58" stroke="${c}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="6" cy="-58" r="6.5" fill="${SKIN}"/>` : `<path d="M19 -92 Q26 -76 8 -74" stroke="${c}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="6" cy="-74" r="6.5" fill="${SKIN}"/>`;
  return `<svg viewBox="-90 -190 180 200" class="clapper ${g === 'f' ? 'f' : 'm'}" role="img" aria-label="A friend clapping for you">
    <g class="sparks">${[[-70, -150], [70, -160], [-80, -60], [78, -70], [0, -182]].map(([x, y], k) => `<path d="M${x} ${y - 8} L${x + 3} ${y - 2} L${x + 9} ${y} L${x + 3} ${y + 2} L${x} ${y + 8} L${x - 3} ${y + 2} L${x - 9} ${y} L${x - 3} ${y - 2} Z" fill="#FFD43B" style="animation-delay:${k * .15}s"/>`).join('')}</g>
    <g class="bounce">${person(g, { top: c, armL: handL, armR: handR })}</g>
    <g class="clapfx"><path d="M-16 ${g === 'f' ? -78 : -94} l-8 -8 M0 ${g === 'f' ? -82 : -98} v-10 M16 ${g === 'f' ? -78 : -94} l8 -8" stroke="#FAB005" stroke-width="3" stroke-linecap="round"/></g></svg>`;
}

// ---------- the island map ----------
// trail stops (x, y) in a 900 x 1200 map
const STOPS = [
  ['camp', 170, 1062], ['vocab', 300, 958], ['u1', 505, 1030], ['reading', 690, 930], ['u2', 575, 812], ['listening', 330, 790], ['u3', 168, 672],
  ['speaking', 400, 652], ['grammar', 642, 598], ['writing', 520, 488], ['u4', 752, 385], ['u5', 262, 418], ['arena', 175, 292], ['tower', 762, 214], ['treasure', 456, 236]
];
function smooth(pts) {
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`;
  }
  return d;
}
const ISLAND = 'M140 1080 C60 990 62 870 104 770 C66 660 58 528 116 428 C146 336 116 252 186 190 C266 120 378 150 452 118 C542 80 652 108 732 158 C822 208 856 300 834 382 C874 470 866 562 824 642 C862 742 852 862 792 952 C742 1042 642 1090 542 1102 C442 1122 330 1150 240 1132 C190 1122 160 1102 140 1080 Z';
const RIVER = 'M838 432 C760 452 700 430 630 456 C560 482 512 498 452 510 C386 524 336 540 280 548 C220 556 170 590 98 598';
function map(g, labels) {
  seed = 7; const id = uid('m');
  const night = `<g class="nightzone"><circle cx="330" cy="772" r="88" fill="url(#${id}night)"/>${Array.from({ length: 16 }, () => star(270 + rnd() * 120, 704 + rnd() * 70, .8 + rnd() * 1.3)).join('')}
    <path d="M372 716 a12 12 0 1 0 8 18 a10 10 0 1 1 -8 -18 Z" fill="#FFF3BF"/>${tent(292, 806, '#5C7CFA', .9)}${tent(360, 812, '#F76707', .8)}${fire(330, 826, .9)}${pine(258, 770, .7)}${pine(398, 770, .7)}</g>`;
  const jungle = `<g>${[[232, 1010], [262, 948], [352, 1000], [210, 960], [380, 952], [300, 1018], [244, 902], [340, 920]].map(([x, y], k) => k % 2 ? palm(x, y, .9) : tree(x, y, 1.15, '#1F7A3A', '#2F9E44')).join('')}
    <g class="eyes"><circle cx="276" cy="985" r="2.4" fill="#FFD43B"/><circle cx="284" cy="985" r="2.4" fill="#FFD43B"/></g>
    <path class="snake" d="M330 1048 q10 -8 20 0 t20 0 t20 0" stroke="#2B8A3E" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="392" cy="1048" r="4" fill="#2B8A3E"/></g>`;
  const lake = `<g><ellipse cx="690" cy="928" rx="118" ry="66" fill="#2E86DE"/><ellipse cx="690" cy="924" rx="104" ry="56" fill="#4DABF7"/>
    <path class="shim" d="M630 912 h40 M690 940 h44 M650 958 h26" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".6"/>
    <g class="boat"><path d="M716 902 h34 l-6 10 h-22 Z" fill="#8B5A2B"/><path d="M732 902 v-18 l12 14 Z" fill="#fff"/></g>${tree(588, 900, .8)}${tree(800, 940, .9)}${rock(620, 990, .8)}</g>`;
  const ruins = `<g>${column(480, 1050, 36, true)}${column(505, 1046, 28)}${column(530, 1052, 40, true)}<rect x="470" y="1052" width="74" height="6" fill="#D8C7A2"/>${rock(560, 1060, .8, '#BFAE8A')}${bush(458, 1060, .8)}</g>`;
  const village = `<g>${house(545, 830, '#FFD8A8', '#E8590C', .95)}${house(600, 836, '#FFE3E3', '#C2255C', .95)}${house(574, 800, '#E7F5FF', '#1971C2', .85)}
    <path d="M520 790 Q575 770 630 790" stroke="#5C3A1E" stroke-width="1.2" fill="none"/>${[530, 548, 566, 584, 602, 620].map((x, k) => lantern(x, 786 - Math.sin(k / 5 * Math.PI) * 12, ['#FF6B6B', '#FCC419', '#51CF66', '#339AF0', '#CC5DE8', '#FF922B'][k])).join('')}</g>`;
  const tower = `<g><path d="M120 700 Q168 640 216 700 Z" fill="#7BAA55"/><path d="M158 694 L168 600 L178 694 M160 670 L176 670 M162 645 L174 645 M163 622 L173 622 M160 670 L174 645 M176 670 L162 645" stroke="#495057" stroke-width="3" fill="none"/>
    <circle cx="168" cy="598" r="5" fill="#FA5252" class="blink"/><g class="sig"><path d="M184 590 a20 20 0 0 1 0 18" stroke="#15AABF" stroke-width="3" fill="none"/><path d="M190 584 a30 30 0 0 1 0 30" stroke="#15AABF" stroke-width="3" fill="none"/><path d="M152 590 a20 20 0 0 0 0 18" stroke="#15AABF" stroke-width="3" fill="none"/></g></g>`;
  const cave = `<g><path d="M342 680 Q352 610 400 606 Q452 604 462 682 Z" fill="#868E96"/><path d="M356 682 Q360 636 400 632 Q440 634 448 682 Z" fill="#495057"/><path d="M376 682 Q382 652 402 650 Q424 652 428 682 Z" fill="#1E1E24"/>
    <g class="bats"><path d="M392 640 q4 -4 8 0 q4 -4 8 0" stroke="#212529" stroke-width="2" fill="none"/><path d="M412 628 q3 -3 6 0 q3 -3 6 0" stroke="#212529" stroke-width="2" fill="none"/></g>${rock(338, 690, 1)}${rock(466, 688, .9)}</g>`;
  const volcano = `<g><path d="M548 640 L612 548 Q642 528 672 548 L740 640 Z" fill="#6B4E3D"/><path d="M612 548 Q642 528 672 548 L660 566 Q642 556 624 566 Z" fill="#3B2A20"/>
    <path class="lava" d="M624 560 Q632 590 620 612 Q614 628 626 640 L640 640 Q634 620 642 600 Q650 584 644 560 Z" fill="#FF6B00"/><path class="lava" d="M652 562 Q662 592 676 640 L688 640 Q676 600 664 560 Z" fill="#FF8C1A"/>
    <ellipse cx="642" cy="550" rx="22" ry="6" fill="#FF922B" class="glowc"/><g class="smoke"><circle cx="636" cy="526" r="12" fill="#ADB5BD"/><circle cx="650" cy="506" r="15" fill="#CED4DA"/><circle cx="640" cy="482" r="18" fill="#E9ECEF"/></g></g>`;
  const snow = `<g><path d="M650 470 L720 352 L760 400 L800 330 L870 470 Z" fill="#748FFC" opacity=".25"/><path d="M640 470 L716 344 L758 398 L802 322 L872 470 Z" fill="#91A7FF"/>
    <path d="M716 344 L736 378 L724 374 L714 390 L704 370 L692 384 Z M802 322 L826 364 L812 360 L800 376 L790 358 L778 368 Z" fill="#fff"/>
    <ellipse cx="758" cy="452" rx="98" ry="22" fill="#F1F3F5"/>${pine(700, 456, .7, 1)}${pine(814, 452, .75, 1)}${Array.from({ length: 14 }, () => flake(660 + rnd() * 200, 320 + rnd() * 140, 1.2 + rnd() * 1.4)).join('')}</g>`;
  const dunes = `<g><path d="M150 470 Q190 380 270 370 Q350 362 390 430 Q370 480 280 478 Q200 486 150 470 Z" fill="#F2C572"/><path d="M180 440 Q230 400 290 420 Q340 436 372 424" stroke="#E0A84A" stroke-width="4" fill="none"/><path d="M196 462 Q250 438 310 452" stroke="#E0A84A" stroke-width="3" fill="none"/>
    <g class="camelwalk">${camelSil(250, 452, .9, '#8B5A2B')}</g>${palm(360, 400, .7)}<circle cx="300" cy="388" r="7" fill="#FFD43B" opacity=".0"/></g>`;
  const arena = g === 'f'
    ? `<g><path d="M138 318 Q175 250 212 318 Z" fill="#F783AC"/><path d="M175 254 L175 318" stroke="#fff" stroke-width="2"/><path d="M150 318 Q175 290 200 318" fill="#FCC2D7"/><path d="M175 248 l0 -14 l12 5 l-12 5" fill="#D6336C"/>
       <g transform="translate(206 318)"><rect x="-3" y="-30" width="6" height="30" fill="#ADB5BD"/><circle cy="-34" r="6" fill="#ADB5BD"/></g></g>`
    : `<g><rect x="132" y="270" width="88" height="48" fill="#C92A2A"/><rect x="136" y="274" width="80" height="40" fill="#E9ECEF"/>${[0, 1, 2].map(k => `<line x1="132" y1="${280 + k * 12}" x2="220" y2="${280 + k * 12}" stroke="#FA5252" stroke-width="2"/>`).join('')}
       ${[[132, 270], [220, 270], [132, 318], [220, 318]].map(([x, y]) => `<rect x="${x - 3}" y="${y - 10}" width="6" height="14" fill="#343A40"/>`).join('')}<circle cx="164" cy="300" r="5" fill="#E03131"/><circle cx="190" cy="296" r="5" fill="#1C7ED6"/></g>`;
  const lighthouse = `<g><path d="M720 252 Q760 216 806 254 Z" fill="#868E96"/><path d="M750 250 L756 186 L768 186 L774 250 Z" fill="#fff"/><path d="M752 230 L772 230 L773 240 L751 240 Z M754 206 L770 206 L771 216 L753 216 Z" fill="#E03131"/>
    <rect x="752" y="176" width="20" height="12" fill="#FFE066"/><path d="M748 176 L762 164 L776 176 Z" fill="#C92A2A"/><g class="beam"><path d="M762 182 L900 150 L900 214 Z" fill="#FFF3BF" opacity=".55"/></g></g>`;
  const treasure = `<g><path d="M392 268 Q402 196 456 190 Q512 194 522 268 Z" fill="#6C757D"/><path d="M416 268 Q420 230 456 226 Q494 230 498 268 Z" fill="#1E1E24"/>
    <circle cx="436" cy="214" r="7" fill="#343A40"/><circle cx="476" cy="214" r="7" fill="#343A40"/><g class="chestmap" transform="translate(456 262)"><rect x="-16" y="-14" width="32" height="16" rx="2" fill="#A0522D"/><path d="M-16 -14 Q0 -28 16 -14 Z" fill="#8B4513"/><rect x="-16" y="-10" width="32" height="3" fill="#FFD43B"/><rect x="-3" y="-12" width="6" height="7" fill="#FFD43B"/><circle r="26" cy="-8" fill="#FFD43B" opacity=".18" class="glow"/></g>
    <path d="M428 300 l18 18 M446 300 l-18 18" stroke="#C92A2A" stroke-width="5" stroke-linecap="round"/></g>`;
  const wreck = `<g><g transform="rotate(-14 140 1100)"><path d="M84 1094 L196 1094 L180 1116 L100 1116 Z" fill="#7A4A22"/><path d="M136 1094 L136 1046" stroke="#5C3A1E" stroke-width="4"/><path d="M136 1050 L166 1064 L136 1076 Z" fill="#F1F3F5" opacity=".9"/></g>${palm(204, 1060, .8)}</g>`;
  const sea = `<g class="seawaves">${Array.from({ length: 34 }, () => { const x = rnd() * 900, y = rnd() * 1200; return wave(x, y, .8 + rnd() * .6); }).join('')}</g>`;
  const pts = STOPS.map(s => [s[1], s[2]]);
  return `<svg class="islandmap" viewBox="0 0 900 1200" role="img" aria-label="Treasure island map with 15 stops">
  <defs><radialGradient id="${id}sea" cx="50%" cy="50%" r="70%"><stop offset="0" stop-color="#4FC3F7"/><stop offset=".6" stop-color="#1E88E5"/><stop offset="1" stop-color="#0D47A1"/></radialGradient>
    <radialGradient id="${id}night" cx="50%" cy="50%"><stop offset="0" stop-color="#1B2A6B"/><stop offset=".75" stop-color="#14205A"/><stop offset="1" stop-color="#14205A" stop-opacity="0"/></radialGradient>
    <linearGradient id="${id}grass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8BC34A"/><stop offset="1" stop-color="#5DAE3B"/></linearGradient>
    <filter id="${id}sh"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#0D2A4F" flood-opacity=".35"/></filter>
    <pattern id="${id}dots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#fff" opacity=".12"/></pattern></defs>
  <rect width="900" height="1200" fill="url(#${id}sea)"/><rect width="900" height="1200" fill="url(#${id}dots)"/>${sea}
  <path d="M836 150 C870 120 880 90 860 70" stroke="#fff" stroke-width="3" stroke-dasharray="2 10" fill="none" stroke-linecap="round" opacity=".9"/>
  <g class="ship" transform="translate(846 66)"><path d="M-26 0 L26 0 L18 12 L-18 12 Z" fill="#5C3A1E"/><path d="M0 0 L0 -36" stroke="#3B2A20" stroke-width="3"/><path d="M2 -34 L24 -10 L2 -10 Z" fill="#fff"/><path d="M-2 -30 L-20 -10 L-2 -10 Z" fill="#F1F3F5"/><path d="M0 -36 L12 -32 L0 -28" fill="#E03131"/></g>
  <text x="846" y="108" text-anchor="middle" class="shiptxt">To PSE 2 ⛵</text>
  <g filter="url(#${id}sh)"><path d="${ISLAND}" fill="#F3D9A4"/><path d="${ISLAND}" fill="url(#${id}grass)" transform="translate(450 640) scale(.935) translate(-450 -640)"/></g>
  <path d="${RIVER}" stroke="#3A8DDE" stroke-width="26" fill="none" stroke-linecap="round"/><path d="${RIVER}" stroke="#74C0FC" stroke-width="12" fill="none" stroke-linecap="round" class="flow" stroke-dasharray="18 22"/>
  <g class="bridgemap"><path d="M496 460 L506 520" stroke="#7A4A22" stroke-width="5"/><path d="M536 456 L544 516" stroke="#7A4A22" stroke-width="5"/>${[0, 1, 2, 4, 5].map(k => `<rect x="${497 + k * 1.2}" y="${466 + k * 9}" width="${40 - k * .4}" height="5" fill="#A0703C" transform="rotate(${k === 4 ? 18 : k === 5 ? -10 : 0} ${515} ${468 + k * 9})"/>`).join('')}<path d="M500 462 Q520 470 540 458" stroke="#C9A36B" stroke-width="2" fill="none"/></g>
  ${Array.from({ length: 28 }, () => { const x = 160 + rnd() * 600, y = 560 + rnd() * 460; return bush(x, y, .5 + rnd() * .4, rnd() > .5 ? '#4CAF50' : '#66BB6A'); }).join('')}
  ${Array.from({ length: 40 }, () => flowerDot(180 + rnd() * 560, 600 + rnd() * 440, ['#FFD43B', '#FF8787', '#FFFFFF', '#DA77F2'][Math.floor(rnd() * 4)])).join('')}
  ${dunes}${snow}${volcano}${night}${jungle}${lake}${ruins}${village}${tower}${cave}${arena}${lighthouse}${treasure}${wreck}
  ${cloud(160, 150, 1.1, 'cl1')}${cloud(620, 60, .9, 'cl2')}${cloud(760, 700, .8, 'cl3')}${bird(330, 120)}${bird(352, 112, .8)}${bird(560, 330, .7)}
  <g class="compass" transform="translate(86 120)"><circle r="40" fill="#FFF8E7" stroke="#8B5A2B" stroke-width="3"/><path d="M0 -34 L8 0 L0 34 L-8 0 Z" fill="#C92A2A"/><path d="M-34 0 L0 -8 L34 0 L0 8 Z" fill="#495057"/><circle r="5" fill="#FFD43B"/><text y="-44" text-anchor="middle" class="ctxt">N</text></g>
  <path id="trail" d="${smooth(pts)}" fill="none" stroke="#FFF8E7" stroke-width="9" stroke-linecap="round" opacity=".55"/>
  <path d="${smooth(pts)}" fill="none" stroke="#8B3A1A" stroke-width="3.4" stroke-dasharray="2 11" stroke-linecap="round" class="ants"/>
  ${labels || ''}</svg>`;
}

// ---------- zone banner scenes (800 x 240) ----------
function sky(id, a, b) { return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="800" height="240" fill="url(#${id})"/>`; }
const SCENE = {
  vocab: () => { const i = uid('s'); seed = 11; return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#B2F2BB', '#2B8A3E')}${Array.from({ length: 22 }, (_, k) => k % 2 ? palm(rnd() * 800, 200 + rnd() * 50, 1 + rnd() * .8) : tree(rnd() * 800, 210 + rnd() * 40, 1.6 + rnd(), '#1E6B33', '#2F9E44')).join('')}<g class="eyes"><circle cx="520" cy="176" r="4" fill="#FFD43B"/><circle cx="534" cy="176" r="4" fill="#FFD43B"/></g><path class="snake" d="M90 228 q14 -10 28 0 t28 0 t28 0" stroke="#5C940D" stroke-width="7" fill="none" stroke-linecap="round"/></svg>`; },
  reading: () => { const i = uid('s'); return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#E7F5FF', '#74C0FC')}<path d="M0 150 Q200 120 400 150 T800 150 V240 H0 Z" fill="#339AF0"/><path d="M0 170 Q200 150 400 172 T800 168 V240 H0 Z" fill="#1C7ED6"/>${[100, 260, 420, 600, 720].map(x => wave(x, 190, 1.4)).join('')}<g class="boat"><path d="M360 150 h80 l-12 18 h-56 Z" fill="#8B5A2B"/><path d="M398 150 v-50 l30 40 Z" fill="#fff"/></g>${tree(60, 150, 2)}${tree(740, 150, 2.2)}${cloud(180, 50)}${cloud(600, 40, 1.2, 'cl2')}</svg>`; },
  grammar: () => { const i = uid('s'); return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#FFD8A8', '#E8590C')}<path d="M240 240 L360 80 Q400 54 440 80 L560 240 Z" fill="#5C3A2E"/><path class="lava" d="M380 90 Q392 150 370 200 L384 240 L404 240 Q396 190 412 140 Q420 110 410 88 Z" fill="#FF6B00"/><ellipse cx="400" cy="82" rx="36" ry="9" fill="#FFA94D" class="glowc"/><g class="smoke"><circle cx="392" cy="52" r="18" fill="#868E96"/><circle cx="412" cy="26" r="22" fill="#ADB5BD"/></g>${[60, 140, 640, 720].map(x => `<ellipse cx="${x}" cy="226" rx="34" ry="10" fill="#3B2A20"/>`).join('')}</svg>`; },
  listening: () => { const i = uid('s'); seed = 21; return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#0B1340', '#2B3A8F')}${Array.from({ length: 50 }, () => star(rnd() * 800, rnd() * 150, .8 + rnd() * 1.6)).join('')}<path d="M660 40 a26 26 0 1 0 16 40 a22 22 0 1 1 -16 -40 Z" fill="#FFF3BF"/><rect y="200" width="800" height="40" fill="#15224F"/>${pine(80, 210, 2)}${pine(150, 214, 1.6)}${pine(700, 212, 2.1)}${tent(300, 214, '#5C7CFA', 2.2)}${tent(520, 216, '#F76707', 1.9)}${fire(410, 222, 2.2)}</svg>`; },
  speaking: () => { const i = uid('s'); return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#E5DBFF', '#6741D9')}<path d="M120 240 Q170 40 400 36 Q630 40 680 240 Z" fill="#5F3DC4"/><path d="M210 240 Q240 96 400 92 Q560 96 590 240 Z" fill="#2B1F5C"/><path d="M300 240 Q320 150 400 146 Q480 150 500 240 Z" fill="#120C2B"/><g class="echo">${[1, 2, 3].map(k => `<circle cx="400" cy="190" r="${k * 26}" fill="none" stroke="#B197FC" stroke-width="3" style="animation-delay:${k * .4}s"/>`).join('')}</g><g class="bats"><path d="M260 70 q8 -8 16 0 q8 -8 16 0" stroke="#212529" stroke-width="3" fill="none"/><path d="M520 60 q6 -6 12 0 q6 -6 12 0" stroke="#212529" stroke-width="3" fill="none"/></g></svg>`; },
  writing: () => { const i = uid('s'); return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#FFF4E6', '#FFA94D')}<path d="M0 120 L250 120 L250 240 L0 240 Z M550 120 L800 120 L800 240 L550 240 Z" fill="#7A4A22"/><path d="M0 120 L250 120 M550 120 L800 120" stroke="#5DAE3B" stroke-width="10"/><path d="M250 120 L550 120 L550 240 L250 240 Z" fill="#5A3518"/><path d="M250 120 Q300 160 260 200 L540 200 Q500 160 550 120 Z" fill="#3E2410"/><path d="M250 190 Q400 170 550 196 V240 H250 Z" fill="#1C7ED6"/><path class="flow" d="M250 210 Q400 196 550 214" stroke="#74C0FC" stroke-width="6" fill="none" stroke-dasharray="20 18"/>
      ${[0, 1, 2, 3, 6, 7, 8, 9].map(k => `<rect x="${250 + k * 30}" y="${k < 4 ? 112 : 112}" width="26" height="10" fill="#A0703C" ${k === 3 ? 'transform="rotate(24 355 117)"' : k === 6 ? 'transform="rotate(-22 445 117)"' : ''}/>`).join('')}<path d="M250 108 Q300 116 352 108 M448 108 Q500 116 550 108" stroke="#C9A36B" stroke-width="3" fill="none"/><path d="M362 128 l6 40 M440 128 l-4 44" stroke="#A0703C" stroke-width="7" class="fall"/></svg>`; },
  u1: () => { const i = uid('s'); return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#FFF9DB', '#E9C46A')}<rect y="200" width="800" height="40" fill="#C9A36B"/>${[160, 230, 300, 500, 570, 640].map((x, k) => column(x, 214, 90 + (k % 3) * 20, k % 2)).join('')}<path d="M140 120 h200 v-14 h-200 Z" fill="#E9DCC0"/>${rock(420, 220, 2.4, '#BFAE8A')}${palm(60, 220, 1.6)}${palm(740, 222, 1.8)}</svg>`; },
  u2: () => { const i = uid('s'); return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#3B1F5C', '#C2255C')}${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(k => lantern(60 + k * 76, 60 + Math.sin(k) * 20, ['#FF6B6B', '#FCC419', '#51CF66', '#339AF0', '#CC5DE8'][k % 5])).join('')}<path d="M0 50 Q400 120 800 50" stroke="#2B1A0E" stroke-width="2" fill="none"/>${house(160, 230, '#FFD8A8', '#E8590C', 3)}${house(400, 236, '#FFE3E3', '#C2255C', 3.4)}${house(640, 232, '#E7F5FF', '#1971C2', 3)}<g class="fw"><circle cx="560" cy="60" r="3" fill="#FFD43B"/>${Array.from({ length: 12 }, (_, k) => `<line x1="560" y1="60" x2="${560 + Math.cos(k / 12 * 6.28) * 30}" y2="${60 + Math.sin(k / 12 * 6.28) * 30}" stroke="#FFD43B" stroke-width="2"/>`).join('')}</g></svg>`; },
  u3: () => { const i = uid('s'); return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#E3FAFC', '#15AABF')}<path d="M0 240 Q400 150 800 240 Z" fill="#7BAA55"/><path d="M380 200 L400 30 L420 200 M384 170 L416 170 M388 130 L412 130 M392 90 L408 90 M384 170 L412 130 M416 170 L388 130 M388 130 L408 90 M412 130 L392 90" stroke="#343A40" stroke-width="5" fill="none"/><circle cx="400" cy="26" r="8" fill="#FA5252" class="blink"/><g class="sig">${[1, 2, 3].map(k => `<path d="M${420 + k * 4} ${26 - k * 14} a${k * 22} ${k * 22} 0 0 1 0 ${k * 28}" stroke="#0B7285" stroke-width="4" fill="none"/><path d="M${380 - k * 4} ${26 - k * 14} a${k * 22} ${k * 22} 0 0 0 0 ${k * 28}" stroke="#0B7285" stroke-width="4" fill="none"/>`).join('')}</g></svg>`; },
  u4: () => { const i = uid('s'); seed = 31; return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#DBE4FF', '#748FFC')}<path d="M0 240 L180 60 L290 160 L420 20 L560 170 L650 90 L800 240 Z" fill="#91A7FF"/><path d="M180 60 L215 100 L195 96 L178 116 L160 96 Z M420 20 L470 76 L446 72 L420 100 L400 74 L376 84 Z M650 90 L680 122 L660 118 L646 132 L632 116 Z" fill="#fff"/><rect y="210" width="800" height="30" fill="#F8F9FA"/>${pine(90, 220, 1.6, 1)}${pine(720, 220, 1.8, 1)}${Array.from({ length: 40 }, () => flake(rnd() * 800, rnd() * 220, 1.4 + rnd() * 2)).join('')}</svg>`; },
  u5: () => { const i = uid('s'); return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#FFF3BF', '#F59F00')}<circle cx="660" cy="60" r="34" fill="#FFE066"/><path d="M0 170 Q200 120 400 170 T800 160 V240 H0 Z" fill="#F2C572"/><path d="M0 196 Q240 160 480 200 T800 190 V240 H0 Z" fill="#E0A84A"/><g class="camelwalk">${camel('#B07A3F', '#C92A2A', 'm').replace('<svg ', '<svg x="150" y="104" width="170" height="128" ')}</g><g class="camelwalk2">${camel('#C9965A', '#D6336C', 'f').replace('<svg ', '<svg x="400" y="118" width="150" height="112" ')}</g>${palm(60, 186, 1.5)}${palm(740, 184, 1.6)}</svg>`; },
  arena: () => { const i = uid('s'); return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#2B0A1A', '#8B0E0E')}<g class="spot"><path d="M200 0 L320 240 L80 240 Z M600 0 L720 240 L480 240 Z" fill="#FFF3BF" opacity=".12"/></g><rect x="120" y="150" width="560" height="90" fill="#E9ECEF"/>${[0, 1, 2].map(k => `<line x1="100" y1="${120 + k * 22}" x2="700" y2="${120 + k * 22}" stroke="#E03131" stroke-width="5"/>`).join('')}<rect x="92" y="100" width="16" height="140" fill="#212529"/><rect x="692" y="100" width="16" height="140" fill="#212529"/></svg>`; },
  studio: () => { const i = uid('s'); return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#FFDEEB', '#E64980')}<path d="M0 0 Q100 80 0 160 Z M800 0 Q700 80 800 160 Z" fill="#C2255C"/><path d="M60 40 Q400 100 740 40" stroke="#fff" stroke-width="2" fill="none"/>${[0, 1, 2, 3, 4, 5, 6].map(k => `<circle cx="${110 + k * 96}" cy="${52 + Math.sin(k / 6 * 3.14) * 22}" r="7" fill="${['#FFD43B', '#fff', '#FCC2D7'][k % 3]}" class="tw"/>`).join('')}<rect y="214" width="800" height="26" fill="#F8F0FC"/>${[220, 400, 580].map((x, k) => `<g transform="translate(${x} 214)"><path d="M0 -120 L0 0" stroke="#ADB5BD" stroke-width="3"/><path d="M-26 -110 Q0 -122 26 -110 L32 -10 L-32 -10 Z" fill="${['#5C7CFA', '#F783AC', '#B197FC'][k]}"/></g>`).join('')}</svg>`; },
  tower: () => { const i = uid('s'); return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#1D2C78', '#4C6EF5')}<path d="M0 200 Q400 170 800 200 V240 H0 Z" fill="#1864AB"/><path d="M500 240 Q560 170 640 240 Z" fill="#868E96"/><path d="M548 220 L560 70 L590 70 L602 220 Z" fill="#fff"/><path d="M552 170 L598 170 L600 190 L550 190 Z M556 110 L594 110 L596 130 L554 130 Z" fill="#E03131"/><rect x="556" y="48" width="38" height="24" fill="#FFE066"/><path d="M548 48 L575 26 L602 48 Z" fill="#C92A2A"/><g class="beam2"><path d="M575 60 L0 0 L0 120 Z" fill="#FFF3BF" opacity=".35"/></g><g class="ship" transform="translate(200 196)"><path d="M-40 0 L40 0 L28 18 L-28 18 Z" fill="#5C3A1E"/><path d="M0 0 L0 -60" stroke="#3B2A20" stroke-width="4"/><path d="M3 -56 L36 -16 L3 -16 Z" fill="#fff"/></g></svg>`; },
  treasure: () => { const i = uid('s'); seed = 41; return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">${sky(i, '#2B2B2B', '#5C3A1E')}${Array.from({ length: 30 }, () => `<circle cx="${rnd() * 800}" cy="${150 + rnd() * 90}" r="${4 + rnd() * 6}" fill="#FFD43B" opacity="${.5 + rnd() * .5}"/>`).join('')}<g transform="translate(400 200) scale(3)" class="chestbig"><rect x="-16" y="-14" width="32" height="16" rx="2" fill="#A0522D"/><path d="M-16 -14 Q0 -28 16 -14 Z" fill="#8B4513"/><rect x="-16" y="-10" width="32" height="3" fill="#FFD43B"/><rect x="-3" y="-12" width="6" height="7" fill="#FFD43B"/><circle r="30" cy="-8" fill="#FFD43B" opacity=".2" class="glow"/></g></svg>`; },
  camp: () => SCENE.reading(), exam: () => SCENE.treasure()
};

// ---------- track backgrounds for obstacle quizzes (600 x 110) ----------
const TRK = {
  jungle: ['#D3F9D8', '#2B8A3E', () => [40, 160, 290, 420, 540].map((x, k) => k % 2 ? palm(x, 104, .9) : tree(x, 104, 1.2, '#1E6B33', '#2F9E44')).join('')],
  lake: ['#E7F5FF', '#1C7ED6', () => `<path d="M0 70 Q150 60 300 72 T600 68 V110 H0 Z" fill="#4DABF7"/>${[60, 220, 380, 520].map(x => wave(x, 90, 1)).join('')}`],
  volcano: ['#FFE8CC', '#C92A2A', () => `<rect y="88" width="600" height="22" fill="#FF6B00" class="lavafloor"/>${[50, 130, 210, 290, 370, 450, 530].map(x => `<ellipse cx="${x}" cy="90" rx="26" ry="8" fill="#3B2A20"/>`).join('')}<path d="M480 88 L520 20 L560 88 Z" fill="#5C3A2E"/>`],
  camp: ['#1B2A6B', '#0B1340', () => { seed = 3; return Array.from({ length: 24 }, () => star(rnd() * 600, rnd() * 60, 1 + rnd())).join('') + [80, 250, 470].map(x => pine(x, 104, 1, 0)).join('') + fire(360, 104, .9); }],
  cave: ['#5F3DC4', '#1E1035', () => `<path d="M0 0 Q60 30 120 0 Q180 34 240 0 Q300 30 360 0 Q420 34 480 0 Q540 30 600 0 Z" fill="#2B1F5C"/>${[100, 330, 520].map(x => `<path d="M${x} 0 l6 18 l6 -18" fill="#7950F2"/>`).join('')}`],
  bridge: ['#FFF4E6', '#E8590C', () => `<rect y="86" width="600" height="24" fill="#1C7ED6"/>${Array.from({ length: 18 }, (_, k) => `<rect class="plank" x="${k * 33 + 4}" y="80" width="28" height="8" fill="#A0703C" style="--k:${k}"/>`).join('')}<path d="M0 74 Q300 92 600 74" stroke="#C9A36B" stroke-width="2" fill="none"/>`],
  ruins: ['#FFF9DB', '#C9A36B', () => [60, 200, 350, 480].map((x, k) => column(x, 104, 50 + k % 2 * 14, k % 2)).join('')],
  village: ['#3B1F5C', '#C2255C', () => [40, 110, 180, 250, 320, 390, 460, 530].map((x, k) => lantern(x, 26 + Math.sin(k) * 8, ['#FF6B6B', '#FCC419', '#51CF66', '#339AF0', '#CC5DE8'][k % 5])).join('') + `<path d="M0 18 Q300 44 600 18" stroke="#2B1A0E" fill="none"/>`],
  tower: ['#E3FAFC', '#0B7285', () => `${Array.from({ length: 10 }, (_, k) => `<path d="M${k * 60} 40 h30 v30 h30" stroke="#22B8CF" stroke-width="2" fill="none" opacity=".5"/><circle cx="${k * 60 + 30}" cy="40" r="3" fill="#22B8CF"/>`).join('')}`],
  snow: ['#EDF2FF', '#748FFC', () => { seed = 9; return `<path d="M0 110 L120 30 L200 80 L300 10 L420 90 L500 40 L600 110 Z" fill="#BAC8FF"/><rect y="94" width="600" height="16" fill="#fff"/>` + Array.from({ length: 30 }, () => flake(rnd() * 600, rnd() * 100, 1 + rnd() * 1.6)).join(''); }],
  dunes: ['#FFF3BF', '#F08C00', () => `<path d="M0 80 Q150 50 300 84 T600 76 V110 H0 Z" fill="#F2C572"/>${palm(520, 96, .7)}`],
  treasure: ['#3B2A20', '#1E1E24', () => { seed = 5; return Array.from({ length: 20 }, () => `<circle cx="${rnd() * 600}" cy="${90 + rnd() * 20}" r="${3 + rnd() * 4}" fill="#FFD43B"/>`).join(''); }],
  sea: ['#D0EBFF', '#1864AB', () => `<path d="M0 70 Q150 56 300 72 T600 64 V110 H0 Z" fill="#339AF0"/>${[40, 200, 360, 520].map(x => wave(x, 88, 1)).join('')}`]
};
function track(kind) {
  const t = TRK[kind] || TRK.jungle; const i = uid('t');
  return `<svg class="tbg" viewBox="0 0 600 110" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t[0]}"/><stop offset="1" stop-color="${t[1]}"/></linearGradient></defs><rect width="600" height="110" fill="url(#${i})"/>${t[2]()}</svg>`;
}
const DANGER = {
  jungle: '🐅', lake: '🐊', volcano: '🌋', camp: '🐺', cave: '🦇', bridge: '🌊', ruins: '🪨', village: '⛈️', tower: '🦠', snow: '❄️', dunes: '🌪️', treasure: '🏴‍☠️', sea: '🦈'
};
const danger = k => `<span class="dz">${DANGER[k] || '⚡'}</span>`;
const flag = () => `<svg viewBox="0 0 40 50" aria-hidden="true"><path d="M8 48 V4" stroke="#5C3A1E" stroke-width="3"/><path d="M10 6 L36 12 L10 20 Z" fill="#E03131"/><circle cx="8" cy="4" r="3" fill="#FFD43B"/></svg>`;

// ---------- game sprites ----------
function camel(c = '#C08A4B', rider = '#1971C2', g = 'm', num) {
  return `<svg viewBox="-60 -80 120 90" class="camel"><g class="legs"><path class="lg1" d="M-24 -6 L-28 8 M-14 -6 L-12 8" stroke="#7A4A22" stroke-width="5" stroke-linecap="round"/><path class="lg2" d="M16 -6 L12 8 M26 -6 L30 8" stroke="#7A4A22" stroke-width="5" stroke-linecap="round"/></g>
    <path d="M-34 -8 Q-38 -28 -22 -32 Q-14 -50 -2 -34 Q8 -50 20 -34 Q30 -30 32 -12 L34 -8 Z" fill="${c}"/><path d="M30 -16 Q40 -30 42 -46 Q44 -56 54 -54 Q60 -52 58 -46 L50 -44 Q48 -28 38 -10 Z" fill="${c}"/><circle cx="53" cy="-50" r="1.8" fill="#212529"/>
    <rect x="-14" y="-40" width="18" height="8" rx="3" fill="${rider}"/>${num != null ? `<text x="-5" y="-14" text-anchor="middle" font-size="12" font-weight="900" fill="#fff">${num}</text>` : ''}
    <g transform="translate(-5 -34) scale(.25)">${person(g, { top: rider })}</g></svg>`;
}
function boxer(c = '#1971C2', g = 'm', flip) {
  return `<svg viewBox="-60 -170 120 175" class="boxer ${flip ? 'flip' : ''}"><g ${flip ? 'transform="scale(-1 1)"' : ''}>${person('m', { top: c, bottom: '#212529', cap: c,
    armL: `<g class="gl"><path d="M-19 -92 Q-12 -80 6 -84" stroke="${SKIN}" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="10" cy="-86" r="10" fill="#E03131"/></g>`,
    armR: `<g class="gr"><path d="M19 -92 Q30 -86 34 -100" stroke="${SKIN}" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="36" cy="-104" r="10" fill="#E03131"/></g>` })}</g></svg>`;
}
// modest outfit model for the Style Studio (girls)
function model(o = {}) {
  const dress = o.dress || '#ADB5BD', scarf = o.scarf || '#DEE2E6', shoes = o.shoes || '#495057', bag = o.bag, style = o.style || 'abaya';
  const body = style === 'abaya' ? `<path d="M-30 -2 L-22 -96 Q0 -106 22 -96 L30 -2 Z" fill="${dress}" stroke="#495057" stroke-opacity=".35" stroke-width="1.4"/><path d="M-4 -96 L-2 -2 M4 -96 L2 -2" stroke="#000" stroke-opacity=".12" stroke-width="2"/>`
    : style === 'dress' ? `<path d="M-34 -2 L-18 -60 L-20 -96 Q0 -104 20 -96 L18 -60 L34 -2 Z" fill="${dress}" stroke="#495057" stroke-opacity=".35" stroke-width="1.4"/><path d="M-19 -62 H19" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>`
    : `<path d="M-22 -96 Q0 -104 22 -96 L24 -54 L-24 -54 Z" fill="${o.top || dress}"/><path d="M-28 -2 L-22 -56 L22 -56 L28 -2 Z" fill="${dress}"/>`;
  const sleeves = `<path d="M-21 -92 Q-32 -70 -28 -46" stroke="${style === 'set' ? (o.top || dress) : dress}" stroke-width="11" fill="none" stroke-linecap="round"/><path d="M21 -92 Q32 -70 28 -46" stroke="${style === 'set' ? (o.top || dress) : dress}" stroke-width="11" fill="none" stroke-linecap="round"/><circle cx="-28" cy="-43" r="5" fill="${SKIN}"/><circle cx="28" cy="-43" r="5" fill="${SKIN}"/>`;
  return `<svg viewBox="-70 -175 140 185" class="model"><ellipse cx="0" cy="4" rx="40" ry="6" fill="#000" opacity=".1"/>${body}${sleeves}
    <rect x="-16" y="-4" width="13" height="7" rx="3" fill="${shoes}"/><rect x="3" y="-4" width="13" height="7" rx="3" fill="${shoes}"/>
    ${bag ? `<g transform="translate(34 -40)"><path d="M-8 -10 Q0 -20 8 -10" stroke="${bag}" stroke-width="2.5" fill="none"/><rect x="-10" y="-10" width="20" height="16" rx="4" fill="${bag}"/></g>` : ''}
    <path d="M-26 -118 Q-28 -166 0 -168 Q28 -166 26 -118 Q26 -100 32 -92 L-32 -92 Q-26 -100 -26 -118 Z" fill="${scarf}" stroke="#495057" stroke-opacity=".45" stroke-width="1.6"/>
    <ellipse cx="0" cy="-136" rx="15" ry="17" fill="${SKIN}"/><path d="M-17 -142 Q0 -164 17 -142 Q14 -154 0 -156 Q-14 -154 -17 -142 Z" fill="${scarf}" stroke="#495057" stroke-opacity=".35" stroke-width="1"/>
    <circle cx="-6" cy="-138" r="2.4" fill="#2B1A12"/><circle cx="6" cy="-138" r="2.4" fill="#2B1A12"/><path d="M-5 -129 Q0 -125 5 -129" stroke="#7A2E1D" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
}
function chest(open) {
  return `<svg viewBox="-60 -70 120 80" class="chest ${open ? 'open' : ''}"><g class="glowc"><circle cy="-20" r="46" fill="#FFD43B" opacity="${open ? .35 : .1}"/></g>
    <rect x="-44" y="-30" width="88" height="36" rx="4" fill="#A0522D"/><rect x="-44" y="-24" width="88" height="6" fill="#FFD43B"/><rect x="-6" y="-28" width="12" height="16" rx="2" fill="#FFD43B"/>
    ${open ? `<g class="gold">${Array.from({ length: 9 }, (_, k) => `<circle cx="${-34 + k * 8.5}" cy="${-34 - (k % 3) * 4}" r="6" fill="#FFD43B" stroke="#E67700"/>`).join('')}</g>` : ''}
    <g class="lid" style="transform-origin:0 -30px"><path d="M-44 -30 Q0 -64 44 -30 Z" fill="#8B4513"/><path d="M-44 -30 Q0 -58 44 -30" stroke="#FFD43B" stroke-width="4" fill="none"/></g></svg>`;
}
function keyIcon(on) { return `<svg viewBox="0 0 40 20" class="keyi ${on ? 'on' : ''}"><circle cx="9" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="4"/><path d="M16 10 H37 M30 10 V16 M35 10 V15" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`; }

window.ART = { map, STOPS, SCENE, track, danger, flag, runner, clapper, person, camel, boxer, model, chest, keyIcon, palm, tree, fire, lantern };
})();
