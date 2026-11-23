// QUEST UNLOCKED · tiny helpers for writing questions (the first option is always the right one; options are shuffled on screen)
window.QUEST = { units: {} };
const reWord = bad => new RegExp('(^|\\s)' + bad.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?=[\\s.,!?]|$)');
window.H = {
  M: (q, o, why) => ({ t: 'mcq', q, o, a: 0, why }),
  TF: (q, a, why) => ({ t: 'tf', q, a, why }),
  G: (q, a, why, help) => ({ t: 'gap', q, a, why, help }),
  O: (a, why, q) => ({ t: 'order', q, tiles: a.replace(/[.?!]$/, '').split(' '), a, why }),
  SEQ: (q, items, why) => ({ t: 'seq', q, items, why }),
  MT: (q, pairs, why) => ({ t: 'match', q, pairs, why }),
  W: (s, bad, good, alts, why) => ({ t: 'weed', q: 'Find the mistake and fix it.', s, bad, good, fix: [good, ...alts], full: s.replace(reWord(bad), (m, p) => p + good), why }),
  FILL: (q, text, box, ans, why) => ({ t: 'fill', q, text, box, ans, why }),
  ROLES: (q, sents, why) => ({ t: 'roles', q, sents, why }),
  // colour-coded paragraph roles used by speaking and writing models
  T: 'topic', P: 'support', D: 'detail', C: 'conc', X: 'counter'
};
