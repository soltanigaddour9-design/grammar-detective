// Original SVG artwork for the Revision House (house, girl character, room icons). Prepared by Mr. Abdelkader Soltani.
const ART = {};

// A friendly girl character. opts: {scarf, dress, walk, wave, w}
ART.girl = (o = {}) => {
  const scarf = o.scarf || '#C9A3E8', dress = o.dress || '#F28DBD', shoe = '#7A4F8F', skin = '#F2CBAE';
  const legA = o.walk ? 'leg' : '', legB = o.walk ? 'leg b' : '';
  return `<svg viewBox="0 0 100 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" ${o.w ? `width="${o.w}"` : ''}>
  <g class="${o.bob ? 'bob' : ''}">
    <g class="${legA}" style="transform-box:fill-box"><rect x="40" y="128" width="8" height="30" rx="4" fill="${skin}"/><ellipse cx="44" cy="160" rx="9" ry="5" fill="${shoe}"/></g>
    <g class="${legB}" style="transform-box:fill-box"><rect x="53" y="128" width="8" height="30" rx="4" fill="${skin}"/><ellipse cx="57" cy="160" rx="9" ry="5" fill="${shoe}"/></g>
    <path d="M30 78 Q50 66 70 78 L82 136 Q50 146 18 136 Z" fill="${dress}"/>
    <path d="M24 120 Q50 130 76 120" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/>
    <circle cx="36" cy="106" r="2.4" fill="#fff" opacity=".8"/><circle cx="62" cy="96" r="2.4" fill="#fff" opacity=".8"/><circle cx="54" cy="118" r="2.4" fill="#fff" opacity=".8"/>
    <g class="${o.wave ? 'wave' : ''}" style="transform-box:fill-box"><path d="M70 82 Q86 70 88 52" stroke="${dress}" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="88" cy="50" r="6" fill="${skin}"/></g>
    <path d="M31 84 Q20 104 24 118" stroke="${dress}" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="24" cy="120" r="6" fill="${skin}"/>
    <path d="M22 48 Q22 12 50 12 Q78 12 78 48 Q78 78 50 82 Q22 78 22 48 Z" fill="${scarf}"/>
    <ellipse cx="50" cy="47" rx="19" ry="22" fill="${skin}"/>
    <path d="M30 40 Q34 22 50 22 Q66 22 70 40 Q60 28 50 29 Q40 28 30 40 Z" fill="${scarf}"/>
    <ellipse cx="42" cy="47" rx="2.6" ry="3.4" fill="#3A2440"/><ellipse cx="58" cy="47" rx="2.6" ry="3.4" fill="#3A2440"/>
    <circle cx="43" cy="46" r=".9" fill="#fff"/><circle cx="59" cy="46" r=".9" fill="#fff"/>
    <ellipse cx="37" cy="56" rx="4" ry="2.4" fill="#F59BB5" opacity=".7"/><ellipse cx="63" cy="56" rx="4" ry="2.4" fill="#F59BB5" opacity=".7"/>
    <path d="M44 58 Q50 63 56 58" stroke="#B1416C" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M70 26 l6 -4 l1 7 z" fill="#F28DBD"/><circle cx="73" cy="27" r="2" fill="#fff"/>
  </g></svg>`;
};

// The house from outside, with clickable parts (data-go = route)
ART.house = () => `
<svg viewBox="0 0 640 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The Revision House">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE3F1"/><stop offset="1" stop-color="#E9E0FF"/></linearGradient>
    <linearGradient id="roof" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7A8C9"/><stop offset="1" stop-color="#E77FAE"/></linearGradient>
    <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C7B2F0"/><stop offset="1" stop-color="#B49BE6"/></linearGradient>
    <linearGradient id="win" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF7D6"/><stop offset="1" stop-color="#FFE29A"/></linearGradient>
    <pattern id="scales" width="18" height="12" patternUnits="userSpaceOnUse"><path d="M0 12 Q9 0 18 12" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="2"/></pattern>
  </defs>
  <rect width="640" height="520" rx="28" fill="url(#sky)"/>
  <circle cx="560" cy="70" r="34" fill="#FFF3B8"/><circle cx="560" cy="70" r="48" fill="#FFF3B8" opacity=".35"/>
  <g fill="#fff" opacity=".9"><ellipse cx="110" cy="70" rx="46" ry="16"/><ellipse cx="140" cy="58" rx="30" ry="16"/><ellipse cx="420" cy="48" rx="38" ry="12"/><ellipse cx="444" cy="40" rx="24" ry="12"/></g>
  <rect y="430" width="640" height="90" fill="#BDE6B4"/><path d="M0 432 Q160 410 320 432 T640 432 V520 H0 Z" fill="#A9DCA0"/>
  <!-- chimney -->
  <rect x="440" y="96" width="34" height="70" rx="6" fill="#E9D7FF" stroke="#fff" stroke-width="3"/><path d="M448 92 h18" stroke="#F49AC1" stroke-width="8" stroke-linecap="round"/>
  <!-- main house -->
  <rect x="150" y="200" width="330" height="232" rx="10" fill="url(#wall)"/>
  <path d="M128 214 L315 78 L502 214 Z" fill="url(#roof)"/><path d="M128 214 L315 78 L502 214 Z" fill="url(#scales)"/>
  <path d="M128 214 L315 78 L502 214" fill="none" stroke="#fff" stroke-width="7" stroke-linejoin="round"/>
  <!-- attic heart window = My bedroom plan -->
  <g class="hot" data-go="#/plan" tabindex="0" role="link" aria-label="My bedroom: my study plan">
    <path d="M315 186 C292 166 268 150 282 130 C292 116 310 122 315 134 C320 122 338 116 348 130 C362 150 338 166 315 186 Z" fill="#F06EA4" stroke="#fff" stroke-width="5"/>
    <text x="315" y="208" text-anchor="middle" class="hotlabel">My Plan 🛏️</text>
  </g>
  <!-- garage (left) = grammar -->
  <g class="hot" data-go="#/room/grammar" tabindex="0" role="link" aria-label="Grammar Garage">
    <rect x="22" y="292" width="150" height="140" rx="8" fill="#F3C5CF"/>
    <path d="M12 300 L97 238 L182 300 Z" fill="#C8643E"/><path d="M12 300 L97 238 L182 300" fill="none" stroke="#fff" stroke-width="5"/>
    <rect x="40" y="318" width="114" height="114" rx="6" fill="#B4532A"/>
    <g stroke="#E8A07A" stroke-width="4"><path d="M44 340 H150"/><path d="M44 362 H150"/><path d="M44 384 H150"/><path d="M44 406 H150"/></g>
    <text x="97" y="272" text-anchor="middle" font-size="22">🔧</text>
    <text x="97" y="334" text-anchor="middle" class="hotlabel">Grammar Garage</text>
  </g>
  <!-- conservatory (right) = speaking terrace -->
  <g class="hot" data-go="#/room/speaking" tabindex="0" role="link" aria-label="Speaking Garden Terrace">
    <rect x="474" y="302" width="150" height="130" rx="10" fill="#E3F4E2" stroke="#fff" stroke-width="5"/>
    <path d="M474 302 Q549 252 624 302" fill="#F7C2DA" stroke="#fff" stroke-width="5"/>
    <g stroke="#9ACB98" stroke-width="3"><path d="M512 306 V430"/><path d="M549 300 V430"/><path d="M586 306 V430"/></g>
    <text x="549" y="372" text-anchor="middle" font-size="30">🎤🌷</text>
    <text x="549" y="410" text-anchor="middle" class="hotlabel">Speaking Terrace</text>
  </g>
  <!-- upstairs windows -->
  <g class="hot" data-go="#/room/writing" tabindex="0" role="link" aria-label="Writing Study">
    <rect x="176" y="222" width="96" height="74" rx="12" fill="url(#win)" stroke="#fff" stroke-width="6"/>
    <path d="M224 222 V296 M176 259 H272" stroke="#fff" stroke-width="4"/>
    <path d="M168 300 h112" stroke="#F49AC1" stroke-width="8" stroke-linecap="round"/>
    <text x="224" y="252" text-anchor="middle" font-size="22">✍️</text>
    <text x="224" y="318" text-anchor="middle" class="hotlabel">Writing Study</text>
  </g>
  <g class="hot" data-go="#/room/listening" tabindex="0" role="link" aria-label="Listening Guest Room">
    <rect x="358" y="222" width="96" height="74" rx="12" fill="url(#win)" stroke="#fff" stroke-width="6"/>
    <path d="M406 222 V296 M358 259 H454" stroke="#fff" stroke-width="4"/>
    <path d="M350 300 h112" stroke="#F49AC1" stroke-width="8" stroke-linecap="round"/>
    <text x="406" y="252" text-anchor="middle" font-size="22">🎧</text>
    <text x="406" y="318" text-anchor="middle" class="hotlabel">Listening Room</text>
  </g>
  <!-- downstairs windows -->
  <g class="hot" data-go="#/room/reading" tabindex="0" role="link" aria-label="Reading Living Room">
    <rect x="176" y="338" width="88" height="66" rx="10" fill="url(#win)" stroke="#fff" stroke-width="6"/>
    <path d="M220 338 V404" stroke="#fff" stroke-width="4"/>
    <text x="220" y="378" text-anchor="middle" font-size="22">🛋️</text>
    <text x="220" y="424" text-anchor="middle" class="hotlabel">Living Room</text>
  </g>
  <g class="hot" data-go="#/room/vocab" tabindex="0" role="link" aria-label="Vocabulary Kitchen">
    <rect x="366" y="338" width="88" height="66" rx="10" fill="url(#win)" stroke="#fff" stroke-width="6"/>
    <path d="M410 338 V404" stroke="#fff" stroke-width="4"/>
    <text x="410" y="378" text-anchor="middle" font-size="22">🧁</text>
    <text x="410" y="424" text-anchor="middle" class="hotlabel">Kitchen</text>
  </g>
  <!-- front door = hall -->
  <g class="hot" data-go="#/hall" tabindex="0" role="link" aria-label="Open the door to the hall">
    <path d="M282 432 V356 Q315 322 348 356 V432 Z" fill="#E86A9E" stroke="#fff" stroke-width="6"/>
    <circle cx="336" cy="396" r="4" fill="#FFE6A8"/>
    <path d="M300 368 Q315 352 330 368" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>
    <text x="315" y="346" text-anchor="middle" class="hotlabel">Enter</text>
  </g>
  <!-- flowers and path -->
  <path d="M290 432 Q300 470 260 520 H372 Q332 470 342 432 Z" fill="#F6E3D2"/>
  <g font-size="20"><text x="150" y="452">🌷</text><text x="190" y="456">🌸</text><text x="236" y="452">🌷</text><text x="380" y="452">🌸</text><text x="424" y="456">🌷</text><text x="462" y="450">🌸</text><text x="40" y="460">🌼</text><text x="590" y="460">🌼</text></g>
</svg>`;

// Small room illustrations (used in the room header)
ART.room = (id) => {
  const map = {
    grammar: ['#F9D3DC', '#B4532A', '🔧', '🧰'], vocab: ['#D3EFEC', '#EE6F75', '🧁', '🫙'], reading: ['#EBDDF6', '#8E58AA', '🛋️', '📖'],
    listening: ['#FBEEDF', '#D2733A', '🎧', '🪴'], writing: ['#FCE3EA', '#D6457A', '✍️', '🕯️'], speaking: ['#E4F5E6', '#6E4CA8', '🎤', '🌷'],
    exam: ['#3C2F66', '#E9B949', '👑', '✨'], plan: ['#FAD4E7', '#E06AA6', '🛏️', '🦄'], hall: ['#FDEBF7', '#B67BE8', '🏡', '🪞'] };
  const [bg, ac, a, b] = map[id] || map.hall;
  return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="6" y="6" width="108" height="108" rx="30" fill="${bg}" stroke="${ac}" stroke-width="4"/>
    <path d="M18 92 H102" stroke="${ac}" stroke-width="4" stroke-linecap="round" opacity=".5"/>
    <text x="60" y="72" text-anchor="middle" font-size="46">${a}</text><text x="96" y="40" text-anchor="middle" font-size="24">${b}</text></svg>`;
};
