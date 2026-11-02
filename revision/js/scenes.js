// Revision House v2 · original flat illustrations (house, rooms) and line icons. Prepared by Mr. Abdelkader Soltani.
(function () {
const ICONS = {
  home: '<path d="M3 11 12 4l9 7"/><path d="M5 9.8V20h14V9.8"/><path d="M10 20v-5.5h4V20"/>',
  listening: '<path d="M4 15.5V12a8 8 0 0 1 16 0v3.5"/><rect x="3" y="14" width="4.6" height="7" rx="1.6"/><rect x="16.4" y="14" width="4.6" height="7" rx="1.6"/>',
  reading: '<path d="M12 6.6C10 5 7 4.5 3 5v13.6c4-.5 7 0 9 1.5 2-1.5 5-2 9-1.5V5c-4-.5-7 0-9 1.6Z"/><path d="M12 6.6v13.5"/>',
  writing: '<path d="M16.4 3.6a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/><path d="m14.4 5.6 3 3"/>',
  grammar: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  vocab: '<path d="M3 12.5a9 8.5 0 0 0 18 0Z"/><path d="M12.5 12.5 15.8 3"/><path d="M16 12.5 21 5"/>',
  speaking: '<rect x="9" y="3" width="6" height="11.5" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0"/><path d="M12 18v3"/><path d="M8.5 21h7"/>',
  exam: '<path d="M3.5 8.5 7.6 12 12 5l4.4 7 4.1-3.5L19 18H5Z"/><path d="M5 21h14"/>',
  me: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z"/>',
  back: '<path d="M15 5l-7 7 7 7"/>', next: '<path d="M9 5l7 7-7 7"/>', check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>', play: '<path d="M8 5.5v13l10.5-6.5Z"/>',
  chat: '<path d="M4 5.5h16v10H9l-5 4Z"/>', star: '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8Z"/>',
  bolt: '<path d="M13 3 5 13.5h6L10 21l8-10.5h-6Z"/>', cards: '<rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/>', sparkle: '<path d="M12 3v5M12 16v5M3 12h5M16 12h5"/><path d="m6 6 2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>'
};
window.ICON = (id, cls = '') => `<svg class="icn ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[id] || ICONS.home}</svg>`;

const heart = (x, y, s, c) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 3C0-1 5-2 6 2 7-2 12-1 12 3 12 7 6 10 6 11 6 10 0 7 0 3Z" fill="${c}"/>`;
const cloud = (x, y, s, cls) => `<g class="${cls}" transform="translate(${x} ${y}) scale(${s})"><ellipse cx="20" cy="14" rx="20" ry="10" fill="#fff"/><circle cx="14" cy="9" r="9" fill="#fff"/><circle cx="27" cy="7" r="11" fill="#fff"/></g>`;
const leaf = (x, y, c, d) => `<path class="leaf-fall" style="animation-delay:${d}s" transform="translate(${x} ${y})" d="M0 0c4-3 9-1 9 4-5 2-9 0-9-4Z" fill="${c}"/>`;
const tree = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-4" y="0" width="8" height="46" rx="3" fill="#8B5A3C"/><path d="M0 18 L-14 4 M0 26 L12 12" stroke="#8B5A3C" stroke-width="3"/><circle cx="-14" cy="-6" r="20" fill="#F2994A"/><circle cx="12" cy="-12" r="22" fill="#F7B267"/><circle cx="0" cy="-26" r="20" fill="#E9783F"/><circle cx="20" cy="4" r="14" fill="#F2994A"/><circle cx="-22" cy="10" r="12" fill="#F7B267"/></g>`;

const SCENE = {};
SCENE.home = () => `<svg class="scene" viewBox="0 -80 400 380" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<defs>
 <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9FD4FF"/><stop offset=".65" stop-color="#FCE3F1"/><stop offset="1" stop-color="#FFE9D6"/></linearGradient>
 <pattern id="scal" width="14" height="10" patternUnits="userSpaceOnUse"><rect width="14" height="10" fill="#F4A6C9"/><path d="M0 10a7 7 0 0 1 14 0" fill="#EE8DB9"/><path d="M-7 5a7 7 0 0 1 14 0M7 5a7 7 0 0 1 14 0" fill="#F7B5D3"/></pattern>
 <pattern id="stone" width="12" height="10" patternUnits="userSpaceOnUse"><rect width="12" height="10" fill="#CFC6DA"/><ellipse cx="4" cy="3" rx="4" ry="2.6" fill="#B9AEC8"/><ellipse cx="10" cy="8" rx="4" ry="2.6" fill="#DCD4E5"/></pattern>
</defs>
<rect y="-80" width="400" height="380" fill="url(#sky)"/>
<circle cx="335" cy="58" r="34" fill="#FFF3C4" opacity=".55" class="pulse"/><circle cx="335" cy="58" r="22" fill="#FFE08A"/>
${cloud(30, 40, 1.2, 'drift d1')}${cloud(220, 22, .9, 'drift d2')}${cloud(130, 70, .7, 'drift d3')}
<path class="bird" d="M90 50q6-6 12 0q6-6 12 0" stroke="#7A6888" stroke-width="2" fill="none"/><path class="bird b2" d="M262 80q4-4 8 0q4-4 8 0" stroke="#7A6888" stroke-width="1.8" fill="none"/>
<path d="M0 205 Q80 170 170 200 T400 190 V300 H0Z" fill="#CBE8B5"/>
${tree(40, 175, 1.15)}${tree(366, 170, 1.05)}
<g class="house">
 <rect x="248" y="96" width="22" height="58" fill="url(#stone)" rx="2"/><rect x="244" y="92" width="30" height="8" rx="2" fill="#F7B5D3"/>
 <circle class="smoke" cx="259" cy="84" r="5" fill="#fff" opacity=".7"/><circle class="smoke s2" cx="263" cy="74" r="7" fill="#fff" opacity=".5"/>
 <rect x="112" y="150" width="176" height="106" rx="4" fill="#FFF6FA" stroke="#E9B8D3" stroke-width="2"/>
 <path d="M96 156 L200 84 L304 156 Z" fill="url(#scal)" stroke="#B48CF0" stroke-width="6" stroke-linejoin="round"/>
 <circle cx="200" cy="128" r="17" fill="#fff" stroke="#B48CF0" stroke-width="4"/>${heart(191, 120, 1.5, '#E8578E')}
 ${heart(193, 76, .9, '#E8578E')}<line x1="200" y1="84" x2="200" y2="70" stroke="#B48CF0" stroke-width="2"/>
 <g class="win"><rect x="128" y="172" width="40" height="36" rx="5" fill="#BEE3FF" stroke="#fff" stroke-width="5"/><path d="M148 172v36M128 190h40" stroke="#fff" stroke-width="3"/><rect x="124" y="208" width="48" height="8" rx="3" fill="#E8578E"/><circle cx="131" cy="207" r="4" fill="#FF9EC3"/><circle cx="141" cy="205" r="4" fill="#C3A4F5"/><circle cx="151" cy="207" r="4" fill="#FF9EC3"/><circle cx="161" cy="205" r="4" fill="#FFD27A"/></g>
 <g class="win w2"><rect x="232" y="172" width="40" height="36" rx="5" fill="#BEE3FF" stroke="#fff" stroke-width="5"/><path d="M252 172v36M232 190h40" stroke="#fff" stroke-width="3"/><rect x="228" y="208" width="48" height="8" rx="3" fill="#E8578E"/><circle cx="235" cy="207" r="4" fill="#C3A4F5"/><circle cx="245" cy="205" r="4" fill="#FF9EC3"/><circle cx="255" cy="207" r="4" fill="#FFD27A"/><circle cx="265" cy="205" r="4" fill="#C3A4F5"/></g>
 <path d="M184 256v-40a16 16 0 0 1 32 0v40Z" fill="#B48CF0"/>${heart(194, 222, 1, '#FFD1E4')}<circle cx="210" cy="238" r="2.4" fill="#FFE08A"/>
 <rect x="112" y="240" width="62" height="16" fill="none" stroke="#F4A6C9" stroke-width="3"/>${heart(118, 243, .7, '#F4A6C9')}${heart(134, 243, .7, '#F4A6C9')}${heart(150, 243, .7, '#F4A6C9')}
 <rect x="226" y="240" width="62" height="16" fill="none" stroke="#F4A6C9" stroke-width="3"/>${heart(232, 243, .7, '#F4A6C9')}${heart(248, 243, .7, '#F4A6C9')}${heart(264, 243, .7, '#F4A6C9')}
</g>
<path d="M184 256 L216 256 L250 300 L150 300 Z" fill="#F7D9C2"/>
<rect x="0" y="252" width="400" height="48" fill="#A8D98A"/><path d="M184 256 L216 256 L246 300 L154 300 Z" fill="#F7D9C2"/>
${[...Array(14)].map((_, i) => `<rect x="${6 + i * 11}" y="236" width="4" height="22" rx="2" fill="#fff" opacity=".85"/>`).join('')}<rect x="0" y="242" width="160" height="3" fill="#fff" opacity=".85"/>
${[...Array(14)].map((_, i) => `<rect x="${244 + i * 11}" y="236" width="4" height="22" rx="2" fill="#fff" opacity=".85"/>`).join('')}<rect x="244" y="242" width="160" height="3" fill="#fff" opacity=".85"/>
<g><circle cx="110" cy="270" r="4" fill="#FF8FB8"/><circle cx="122" cy="276" r="3.5" fill="#C3A4F5"/><circle cx="288" cy="272" r="4" fill="#FFD27A"/><circle cx="300" cy="278" r="3.5" fill="#FF8FB8"/><circle cx="60" cy="282" r="4" fill="#C3A4F5"/><circle cx="350" cy="284" r="4" fill="#FF8FB8"/></g>
${leaf(60, 120, '#F2994A', 0)}${leaf(340, 110, '#E9783F', 1.4)}${leaf(20, 150, '#F7B267', 2.6)}${leaf(380, 140, '#F2994A', 3.5)}${leaf(90, 100, '#E9783F', 4.6)}
</svg>`;

const wall = (c1, c2) => `<defs><linearGradient id="wall-${c1.slice(1)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="360" height="170" fill="url(#wall-${c1.slice(1)})"/>`;
const svg = inner => `<svg class="scene" viewBox="0 0 360 170" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`;
SCENE.listening = () => svg(`${wall('#E9DEFF', '#F7E9F7')}
 <rect y="140" width="360" height="30" fill="#C9B3F2"/><circle cx="70" cy="62" r="40" fill="#3B2E7E"/><circle cx="70" cy="62" r="40" fill="none" stroke="#fff" stroke-width="6"/><path d="M70 22v80M30 62h80" stroke="#fff" stroke-width="3"/>
 <circle cx="84" cy="50" r="12" fill="#FFF1B8"/><circle cx="90" cy="46" r="10" fill="#3B2E7E"/><circle class="twinkle" cx="52" cy="44" r="2" fill="#fff"/><circle class="twinkle t2" cx="60" cy="80" r="1.6" fill="#fff"/><circle class="twinkle t3" cx="92" cy="80" r="1.8" fill="#fff"/>
 <rect x="180" y="100" width="120" height="40" rx="8" fill="#F49C7A"/><rect x="186" y="84" width="108" height="18" rx="5" fill="#7C5CD6"/>
 <g class="spin" style="transform-origin:224px 93px"><ellipse cx="224" cy="93" rx="26" ry="7" fill="#2E2148"/><ellipse cx="224" cy="93" rx="8" ry="2.4" fill="#FF8FB8"/></g><path d="M270 86 l-20 10" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
 <path d="M300 30v20" stroke="#B9A3E8" stroke-width="2"/><path d="M286 64a14 14 0 0 1 28 0" fill="none" stroke="#7C5CD6" stroke-width="5"/><rect x="282" y="62" width="8" height="14" rx="3" fill="#F49C7A"/><rect x="310" y="62" width="8" height="14" rx="3" fill="#F49C7A"/>
 <g class="note"><path d="M140 70v-18l10-3v18" stroke="#7C5CD6" stroke-width="2.5" fill="none"/><circle cx="137" cy="70" r="4" fill="#7C5CD6"/><circle cx="147" cy="67" r="4" fill="#7C5CD6"/></g>
 <g class="note n2"><path d="M330 110v-14" stroke="#F49C7A" stroke-width="2.5"/><circle cx="327" cy="110" r="4" fill="#F49C7A"/></g>
 <rect x="20" y="118" width="18" height="22" rx="3" fill="#F49C7A"/><path d="M29 118c-10-12-6-24 0-28 6 4 10 16 0 28Z" fill="#7FB98E"/>`);
SCENE.reading = () => svg(`${wall('#FFE6D5', '#FFF3EA')}
 <rect y="138" width="360" height="32" fill="#E0A27A"/><path d="M0 146h360M0 156h360" stroke="#D08E66" stroke-width="1.5"/>
 <rect x="22" y="26" width="70" height="112" rx="4" fill="#C98A5E"/>${[0, 1, 2].map(r => `<rect x="26" y="${30 + r * 36}" width="62" height="32" fill="#F6E1CF"/>${[0, 1, 2, 3, 4].map(k => `<rect x="${29 + k * 11}" y="${36 + r * 36}" width="8" height="26" rx="1.5" fill="${['#E07A5F', '#F2B84B', '#81B29A', '#F4A6C9', '#9C89D9'][(k + r) % 5]}"/>`).join('')}`).join('')}
 <rect x="140" y="30" width="60" height="44" rx="4" fill="#fff" stroke="#E0A27A" stroke-width="4"/><path d="M146 68l16-18 12 12 8-8 12 14Z" fill="#81B29A"/><circle cx="186" cy="44" r="6" fill="#F2B84B"/>
 <rect x="120" y="96" width="140" height="34" rx="16" fill="#E07A5F"/><rect x="112" y="84" width="22" height="50" rx="10" fill="#C9634A"/><rect x="246" y="84" width="22" height="50" rx="10" fill="#C9634A"/><rect x="130" y="80" width="120" height="26" rx="12" fill="#EE9277"/>
 <rect x="146" y="88" width="26" height="18" rx="6" fill="#F2B84B" transform="rotate(-8 159 97)"/><rect x="206" y="88" width="26" height="18" rx="6" fill="#FFD9C7" transform="rotate(6 219 97)"/>
 <path d="M300 138V64" stroke="#7A5440" stroke-width="3"/><path d="M286 64h28l-6-22h-16Z" fill="#F2B84B"/><ellipse class="glow" cx="300" cy="74" rx="26" ry="14" fill="#FFE7A3" opacity=".5"/>
 <g class="bookfloat"><rect x="318" y="104" width="26" height="18" rx="2" fill="#9C89D9"/><path d="M331 104v18" stroke="#fff" stroke-width="1.5"/></g>`);
SCENE.writing = () => svg(`${wall('#FFE3EE', '#FFF6F9')}
 <rect x="30" y="20" width="96" height="62" rx="6" fill="#F5D7A1" stroke="#D9B36A" stroke-width="3"/>
 <rect x="40" y="28" width="22" height="18" fill="#FF9EC3" transform="rotate(-6 51 37)"/><rect x="70" y="30" width="22" height="18" fill="#BEE3FF" transform="rotate(5 81 39)"/><rect x="96" y="28" width="22" height="18" fill="#FFE08A"/><rect x="52" y="54" width="22" height="18" fill="#C3A4F5" transform="rotate(4 63 63)"/><rect x="84" y="54" width="22" height="18" fill="#A8E0C4"/>
 <rect y="120" width="360" height="12" fill="#C9A227"/><rect x="40" y="132" width="10" height="38" fill="#B08A1E"/><rect x="310" y="132" width="10" height="38" fill="#B08A1E"/>
 <rect x="140" y="96" width="90" height="24" rx="2" fill="#fff" transform="rotate(-4 185 108)"/><path d="M150 104h60M150 110h52M150 116h44" stroke="#D6336C" stroke-width="1.5" transform="rotate(-4 185 108)"/>
 <g class="pen"><path d="M232 74 L256 112 L250 116 L226 78Z" fill="#D6336C"/><path d="M250 116l3 6 3-10Z" fill="#2E2148"/></g>
 <path d="M300 120V62" stroke="#C9A227" stroke-width="4"/><path d="M300 62 L276 40" stroke="#C9A227" stroke-width="4"/><path d="M262 34h30l-6 16h-18Z" fill="#D6336C"/><ellipse class="glow" cx="277" cy="66" rx="34" ry="22" fill="#FFF0B3" opacity=".5"/>
 <rect x="84" y="98" width="20" height="22" rx="4" fill="#fff" stroke="#F4A6C9" stroke-width="3"/><path class="steam" d="M90 92c-4-6 4-8 0-14M98 92c-4-6 4-8 0-14" stroke="#E9B8D3" stroke-width="2" fill="none"/>`);
SCENE.grammar = () => svg(`${wall('#DDF7F0', '#F4FFFB')}
 <rect x="24" y="16" width="200" height="96" rx="6" fill="#BFEBDD"/>${[...Array(8)].map((_, c) => [...Array(4)].map((_, r) => `<circle cx="${40 + c * 24}" cy="${30 + r * 22}" r="2" fill="#8FD3BF"/>`).join('')).join('')}
 <g transform="translate(46 28) rotate(-30)"><rect width="10" height="60" rx="4" fill="#FF7AA2"/><circle cx="5" cy="0" r="10" fill="none" stroke="#FF7AA2" stroke-width="6"/></g>
 <g transform="translate(104 30)"><rect x="-3" y="10" width="6" height="56" rx="3" fill="#7A5440"/><rect x="-14" y="0" width="28" height="14" rx="3" fill="#12A38A"/></g>
 <g transform="translate(150 28)"><rect x="-4" y="0" width="8" height="34" rx="3" fill="#FFB547"/><rect x="-1.5" y="34" width="3" height="30" fill="#9AA5B1"/></g>
 <g class="gear" style="transform-origin:196px 78px"><circle cx="196" cy="78" r="18" fill="none" stroke="#12A38A" stroke-width="7" stroke-dasharray="6 5"/><circle cx="196" cy="78" r="9" fill="#12A38A"/></g>
 <g class="gear rev" style="transform-origin:300px 50px"><circle cx="300" cy="50" r="26" fill="none" stroke="#FF7AA2" stroke-width="9" stroke-dasharray="8 6"/><circle cx="300" cy="50" r="12" fill="#FF7AA2"/></g>
 <rect y="124" width="360" height="12" rx="2" fill="#8B5A3C"/><rect x="0" y="136" width="360" height="34" fill="#E9F2EF"/>
 <rect x="236" y="96" width="60" height="28" rx="5" fill="#FF7AA2"/><rect x="254" y="88" width="24" height="10" rx="4" fill="none" stroke="#C44A72" stroke-width="3"/><path d="M236 108h60" stroke="#C44A72" stroke-width="2"/>
 <rect x="60" y="104" width="40" height="20" rx="3" fill="#12A38A"/><rect x="66" y="96" width="28" height="10" rx="3" fill="#0D7E6B"/>`);
SCENE.vocab = () => svg(`${wall('#FFF6D6', '#FFFBEA')}
 ${[...Array(18)].map((_, c) => [...Array(2)].map((_, r) => `<rect x="${c * 20}" y="${130 + r * 20}" width="20" height="20" fill="${(c + r) % 2 ? '#F7B32B' : '#FFF1C9'}"/>`).join('')).join('')}
 <rect x="34" y="20" width="130" height="8" rx="3" fill="#C98A5E"/>${['#F25C7A', '#F7B32B', '#7FC8A9', '#C3A4F5', '#F25C7A'].map((c, i) => `<g class="jarbob" style="animation-delay:${i * .3}s"><rect x="${40 + i * 25}" y="0" width="18" height="20" rx="4" fill="#fff" stroke="${c}" stroke-width="2.5"/><rect x="${42 + i * 25}" y="8" width="14" height="10" rx="2" fill="${c}" opacity=".6"/><rect x="${39 + i * 25}" y="-3" width="20" height="5" rx="2" fill="${c}"/></g>`).join('')}
 <rect x="210" y="16" width="90" height="62" rx="6" fill="#BEE3FF" stroke="#fff" stroke-width="5"/><path d="M210 16q24 30 0 62M300 16q-24 30 0 62" fill="#FFB3C7"/>
 <rect y="96" width="360" height="34" fill="#FFE1E8"/><rect y="92" width="360" height="6" fill="#F25C7A"/>
 <g transform="translate(70 56)"><path d="M0 40h40l-4-28H4Z" fill="#F25C7A"/><path d="M4 12c0-14 32-14 32 0Z" fill="#FFE1E8"/><circle cx="20" cy="0" r="5" fill="#F7B32B"/></g>
 <g transform="translate(250 60)"><rect x="0" y="12" width="44" height="24" rx="6" fill="#F25C7A"/><path d="M8 12V0h28v12" fill="none" stroke="#F25C7A" stroke-width="5"/><path class="steam" d="M14 -4c-4-6 4-8 0-14M28 -4c-4-6 4-8 0-14" stroke="#E9B8D3" stroke-width="2" fill="none"/></g>
 <circle cx="170" cy="78" r="13" fill="#F7B32B"/><path d="M162 70 l16 16 M178 70 l-16 16" stroke="#fff" stroke-width="2" opacity=".7"/>`);
SCENE.speaking = () => svg(`${wall('#E3F6E3', '#FDEFF6')}
 <path d="M60 170V70a60 60 0 0 1 120 0v100" fill="none" stroke="#3FA26B" stroke-width="10"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => { const a = Math.PI * (1 - i / 7); return `<circle cx="${120 + 60 * Math.cos(a)}" cy="${70 - 60 * Math.sin(a)}" r="7" fill="${i % 2 ? '#EC6FA9' : '#FFD27A'}"/>`; }).join('')}
 <path d="M0 40 Q90 60 180 40 T360 40" fill="none" stroke="#B9A3E8" stroke-width="1.5"/>${[...Array(9)].map((_, i) => `<circle class="twinkle t${i % 3 + 1}" cx="${20 + i * 40}" cy="${46 + (i % 2) * 6}" r="4" fill="#FFE08A"/>`).join('')}
 <rect y="140" width="360" height="30" fill="#9ED36A"/>
 <g transform="translate(262 60)"><rect x="-3" y="20" width="6" height="62" fill="#5B4A6B"/><rect x="-14" y="82" width="28" height="5" rx="2" fill="#5B4A6B"/><rect x="-8" y="-4" width="16" height="28" rx="8" fill="#EC6FA9"/><path d="M-8 6h16M-8 12h16" stroke="#fff" stroke-width="1.5" opacity=".7"/></g>
 <g class="sway"><path d="M320 140c-10-30 0-50 10-60 6 20 4 40-10 60Z" fill="#3FA26B"/><circle cx="330" cy="78" r="8" fill="#EC6FA9"/></g>
 <g class="sway s2"><path d="M30 140c-6-24 2-40 12-48 4 18 0 32-12 48Z" fill="#3FA26B"/><circle cx="42" cy="90" r="7" fill="#FFD27A"/></g>`);
SCENE.exam = () => svg(`${wall('#241E45', '#3A2350')}
 ${[...Array(16)].map((_, i) => `<circle class="twinkle t${i % 3 + 1}" cx="${(i * 47) % 360}" cy="${(i * 29) % 90 + 8}" r="${1 + (i % 3) * .6}" fill="#F7C873"/>`).join('')}
 <path d="M0 0h50q-10 90 10 170H0Z" fill="#7B2D5B"/><path d="M360 0h-50q10 90-10 170h60Z" fill="#7B2D5B"/>
 <g class="chand"><path d="M180 0v26" stroke="#F7C873" stroke-width="2"/><path d="M146 40q34 24 68 0" fill="none" stroke="#F7C873" stroke-width="4"/>${[146, 163, 180, 197, 214].map(x => `<path d="M${x} ${x === 180 ? 52 : 40}v-10" stroke="#F7C873" stroke-width="2"/><circle cx="${x}" cy="${x === 180 ? 30 : 28}" r="4" fill="#FFE7A3"/>`).join('')}</g>
 <ellipse class="glow" cx="180" cy="44" rx="70" ry="30" fill="#FFE7A3" opacity=".15"/>
 <rect y="132" width="360" height="38" fill="#2D2550"/>${[...Array(9)].map((_, i) => `<rect x="${i * 40}" y="132" width="20" height="38" fill="#352C5E"/>`).join('')}
 <path d="M150 128l10-34 20 20 20-20 10 34Z" fill="#F7C873"/><circle cx="160" cy="92" r="4" fill="#FF8FB8"/><circle cx="200" cy="92" r="4" fill="#FF8FB8"/><circle cx="180" cy="110" r="4" fill="#FF8FB8"/>`);
SCENE.me = () => svg(`${wall('#FDE6F1', '#EEE7FF')}
 <rect x="40" y="22" width="80" height="60" rx="8" fill="#BEE3FF" stroke="#fff" stroke-width="5"/><path d="M40 22q20 32 0 60M120 22q-20 32 0 60" fill="#F7B5D3"/>
 <rect x="150" y="80" width="170" height="44" rx="10" fill="#C3A4F5"/><rect x="150" y="66" width="22" height="58" rx="8" fill="#9C7FE0"/><rect x="176" y="72" width="60" height="22" rx="10" fill="#fff"/>
 <rect x="236" y="76" width="84" height="30" rx="8" fill="#FF9EC3"/>${heart(196, 76, 1.2, '#FF8FB8')}
 <rect y="124" width="360" height="46" fill="#F3D7E6"/><ellipse cx="90" cy="150" rx="60" ry="10" fill="#FFC2DA" opacity=".7"/>
 <path d="M330 124V70" stroke="#9C7FE0" stroke-width="3"/><path d="M318 70h24l-5-18h-14Z" fill="#FFD27A"/><ellipse class="glow" cx="330" cy="80" rx="22" ry="12" fill="#FFF0B3" opacity=".5"/>
 ${[0, 1, 2].map(i => `<g class="twinkle t${i + 1}"><path d="M${210 + i * 30} ${24 + i * 8}l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" fill="#FFD27A"/></g>`).join('')}`);
window.SCENE = SCENE;
})();
