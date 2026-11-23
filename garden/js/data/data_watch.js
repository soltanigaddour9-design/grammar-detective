// EXAM WATCH · the 7 grammar and 7 vocabulary questions the class missed most in Assessments 1, 2 and 3
(function () {
const M = (q, o, why) => ({ t: 'mcq', q, o, a: 0, why });
const G = (q, a, why) => ({ t: 'gap', q, a: [].concat(a), why });
const O = (tiles, why) => ({ t: 'order', tiles, a: tiles.join(' '), why });
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);

// ================= GRAMMAR · Exam watch =================
const watch = { id: 'watch', src: 'Assessments · Units 1, 2, 3', u: [1, 2, 3], emoji: '🎯', title: 'Exam watch: 7 grammar questions from your assessments',
  short: 'unless, if … not, word order, neither … nor, modals, word forms',
  why: 'These are the grammar questions you found hardest in Assessments 1, 2 and 3. Questions like these can come again in the final exam.',
  learn: [
    { k: 'rule', title: '1 · unless = if … not', html: `<div class="ex"><span class="k-blue">Unless</span> we are able to work from home, we won't be happy in our jobs.</div>
      <div class="ex">= <span class="k-blue">If</span> we are <b>not</b> able to work from home, we won't be happy.</div>
      <div class="ex">Put <b>unless</b> at the start of the condition, then a <b>comma</b>, then the result. Do not add "not" after unless.</div>` },
    { k: 'rule', title: '2 · If … not (first conditional)', html: `<div class="ex"><span class="k-blue">If</span> scientists <span class="k-pink">don't find</span> alternative fuels, we <span class="k-orange">won't be able</span> to solve traffic pollution.</div>
      <div class="ex">If + present simple (don't / doesn't + verb), will / won't + verb. One sentence, one comma, no full stop in the middle.</div>` },
    { k: 'rule', title: '3 · Word order', html: `<div class="ex"><span class="k-purple">Cycling to work</span> <span class="k-orange">is</span> <span class="k-pink">a good idea</span>.</div>
      <div class="ex">Subject (the whole idea: cycling to work) + verb + the rest. Keep "to work" next to "cycling".</div>` },
    { k: 'rule', title: '4 · Neither … nor', html: `<div class="ex"><span class="k-blue">Neither</span> the whale shark <span class="k-blue">nor</span> the tiger shark <b>eats</b> people.</div>
      <div class="ex">The verb is positive (eats, not doesn't eat) because neither already makes it negative. With two singular nouns, use the singular verb: eats.</div>` },
    { k: 'way', tag: '5 and 6 · What does the modal express?', html: `<table class="tbl"><tr><th>Modal</th><th>Meaning</th></tr>
      <tr><td>will</td><td>certainty</td></tr><tr><td>might, may, could</td><td>uncertainty (possible)</td></tr>
      <tr><td>have to, must</td><td>obligation</td></tr><tr><td>don't have to</td><td>no obligation</td></tr>
      <tr><td>mustn't</td><td>prohibition (not allowed)</td></tr><tr><td>should, ought to</td><td>advice</td></tr></table>` },
    { k: 'rule', title: '7 · Word forms: noun after "the"', html: `<div class="ex">We may see the <b>loss</b> of some species. (lose → loss)</div>
      <div class="ex">After <b>the … of</b> you need a noun. lose (verb) → loss (noun) · abandon (verb) → abandoned (adjective)</div>` },
    { k: 'mist', items: [['Unless we won\'t be happy…', 'Unless we are able to work from home, we won\'t be happy in our jobs.'], ['If scientists not find alternative fuels.', 'If scientists don\'t find alternative fuels, …'], ['Cycling is a good idea to work.', 'Cycling to work is a good idea.'], ['Neither the whale shark nor the tiger shark eat people.', 'Neither the whale shark nor the tiger shark eats people.'], ['We may see the lose of some species.', 'We may see the loss of some species.']] }
  ],
  q: [
    // the 7 assessment questions
    M('Join with unless: "We are able to work from home. We won\'t be happy in our jobs."', ['Unless we are able to work from home, we won\'t be happy in our jobs.', 'Unless we won\'t be happy in our jobs, we are able to work from home.', 'We are able to work from home unless we won\'t be happy in our jobs.', 'Unless we are not able to work from home, we won\'t be happy in our jobs.'], 'Unless + condition, + result. No "not" after unless.'),
    M('Join with if … not: "Scientists find alternative fuels. We won\'t be able to solve traffic pollution."', ['If scientists don\'t find alternative fuels, we won\'t be able to solve traffic pollution.', 'If scientists not find alternative fuels, we won\'t be able to solve traffic pollution.', 'If scientists find alternative fuels, we won\'t be able to solve traffic pollution.', 'If scientists don\'t find alternative fuels. We won\'t be able to solve traffic pollution.'], 'If + don\'t + verb, then a comma, one sentence.'),
    O(['Cycling', 'to work', 'is', 'a good idea.'], 'Cycling to work (subject) + is + a good idea.'),
    M('Join with neither … nor: "The whale shark doesn\'t eat people. The tiger shark doesn\'t eat people."', ['Neither the whale shark nor the tiger shark eats people.', 'Neither the whale shark nor the tiger shark doesn\'t eat people.', 'The whale shark doesn\'t eat people neither the tiger shark.', 'Neither the whale shark or the tiger shark eat people.'], 'Neither … nor + positive verb; two singular nouns → eats.'),
    M('What does the modal express? "There could be even more flooding this year."', ['uncertainty', 'certainty', 'obligation', 'prohibition'], 'could = possible, not sure → uncertainty.'),
    M('What does the modal express? "In my country, hunters mustn\'t go near any endangered animals."', ['prohibition', 'obligation', 'advice', 'no obligation'], 'mustn\'t = not allowed → prohibition.'),
    G('We may see the ___ of some critically endangered species within thirty years. (lose)', 'loss', 'After "the … of" you need a noun: lose → loss.'),
    // extra practice on the same points
    M('Which sentence means the same as "If you don\'t revise, you won\'t pass"?', ['Unless you revise, you won\'t pass.', 'Unless you don\'t revise, you won\'t pass.', 'Unless you revise, you will pass.', 'If you revise, you won\'t pass.'], 'unless = if … not.'),
    M('What does the modal express? "My town might build a geothermal power plant."', ['uncertainty', 'certainty', 'advice', 'obligation'], 'might = possible → uncertainty.'),
    M('What does the modal express? "The new wind turbines will take up a lot of space."', ['certainty', 'uncertainty', 'advice', 'prohibition'], 'will = sure → certainty.'),
    M('What does the modal express? "Humans have to protect animals in order for them to survive."', ['obligation', 'advice', 'prohibition', 'uncertainty'], 'have to = it is necessary → obligation.'),
    M('What does the modal express? "You ought to stop going to zoos if you don\'t agree with them."', ['advice', 'obligation', 'prohibition', 'certainty'], 'ought to = should → advice.'),
    O(['It\'s important', 'to reduce', 'traffic congestion', 'at rush hour.'], 'It\'s important + to + verb + the rest.'),
    G('I saw an ___ car at the side of the road. Somebody just left it there. (abandon)', 'abandoned', 'Before a noun (car) you need an adjective: abandoned.'),
    M('Neither Hala ___ Layan was late today.', ['nor', 'or', 'and', 'but'], 'neither … nor.')
  ] };
const T = window.GRAMMAR.topics;
T.unshift(watch);

// ================= VOCABULARY · Exam watch =================
const V = window.VOCAB;
const WATCH = [
  ['Other causes of air pollution, such as smoke from forest fires and volcanoes, are ___.', 'natural', ['natural', 'chemical', 'common', 'endangered'], 'Forest fires and volcanoes come from nature, not from people → natural.'],
  ['There will be a lecture on the ___ of rising temperatures on the world\'s sea ice.', 'effects', ['effects', 'consequences', 'challenges', 'causes'], 'the effects of X on Y. "on the sea ice" tells you: effects.'],
  ['The ___ of the illness aren\'t too bad, but you do get a bad cough.', 'symptoms', ['symptoms', 'effects', 'causes', 'benefits'], 'A cough is a symptom: a sign that you are ill.'],
  ['Akashi Kaikyo in Japan, one of the world\'s longest bridges, is an amazing piece of ___.', 'engineering', ['engineering', 'engineer', 'public transport', 'vehicles'], '"a piece of" + uncountable noun → engineering. An engineer is a person.'],
  ['When you take part in a debate, your ___ argue against you.', 'opponents', ['opponents', 'opponent', 'benefits', 'solutions'], 'The verb "argue" is plural, so you need the plural noun: opponents.'],
  ['It\'s important to keep the chemicals at a(n) ___ temperature.', 'constant', ['constant', 'global', 'natural', 'environmental'], 'constant = staying the same all the time.'],
  ['One of the biggest problems in my city is traffic ___.', 'congestion', ['congestion', 'hours', 'restrictions', 'vehicles'], 'traffic congestion = too many cars on the road.'],
  // same words in new sentences
  ['Hans was one of the biggest ___ to building a new wind farm in the area.', 'opponents', ['opponents', 'solutions', 'benefits', 'supporters of'], 'opponents to = people who are against something.'],
  ['Fever and a sore throat are common ___ of flu.', 'symptoms', ['symptoms', 'effects', 'opponents', 'restrictions'], 'symptoms = signs of an illness.'],
  ['Rising sea levels are one of the ___ of climate change.', 'effects', ['effects', 'symptoms', 'opponents', 'causes'], 'climate change → effects (results).'],
  ['Earthquakes and floods are ___ disasters.', 'natural', ['natural', 'chemical', 'constant', 'commercial'], 'They come from nature → natural disasters.'],
  ['She is studying civil ___ because she wants to design bridges.', 'engineering', ['engineering', 'engineer', 'engineered', 'engine'], 'The subject you study is engineering.'],
  ['Most hospitals keep the rooms at a ___ temperature of 22 degrees.', 'constant', ['constant', 'global', 'natural', 'affordable'], 'The same all the time → constant.'],
  ['Working from home can reduce traffic ___ at rush hour.', 'congestion', ['congestion', 'restrictions', 'engineering', 'symptoms'], 'traffic congestion.']
];
const mq = (q, o, a, why) => ({ t: 'mcq', q, o, a, why });
const make = () => pick(WATCH.slice(0, 7), 7).concat(pick(WATCH.slice(7), 3)).map(([q, a, o, why]) => { const s = shuffle(o); return mq(q, s, s.indexOf(a), why); });
V.recipes.unshift({ id: 'watch', emoji: '🎯', title: 'Exam watch: 7 words', short: 'The 7 vocabulary questions the class missed most in Assessments 1 to 3', make });
const oldExam = V.exam;
V.exam = function () { const w = make().slice(0, 3); return shuffle(w.concat(oldExam().slice(0, 12))); };
})();
