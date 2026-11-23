// UNIT 2 AND 3 FOCUS PACK · extra practice for Units 2 and 3, Unit 1 kept as quick review
(function () {
const M = (q, o, why) => ({ t: 'mcq', q, o, a: 0, why });
const G = (q, a, why) => ({ t: 'gap', q, a: [].concat(a), why });
const O = (tiles, why) => ({ t: 'order', tiles, a: tiles.join(' '), why });
const TF = (q, a, why) => ({ t: 'tf', q, a, dns: true, why });
const AG = (q, agrees, why) => ({ t: 'mcq', q, o: ['The writer would agree.', 'The writer would disagree.'], a: agrees ? 0 : 1, keep: true, why });
const B = '#2F6DB5', GR = '#2E8B57', OR = '#D97706', PK = '#C2185B', PU = '#7E4FA6';
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);
const byId = (arr, id) => arr.find(x => x.id === id);

// ---------- GRAMMAR: more Unit 2 and 3 questions ----------
const T = window.GRAMMAR.topics;
byId(T, 'cause').q.push(
  M('___ rising temperatures, many glaciers are melting.', ['Due to', 'Because', 'Result in', 'Lead to'], 'Due to + noun phrase (rising temperatures).'),
  M('Cutting down trees ___ more carbon dioxide in the atmosphere.', ['results in', 'results from', 'is caused by', 'is due to'], 'Cause first (cutting down trees) → results in + effect.'),
  O(['Global warming', 'is caused by', 'greenhouse gases.'], 'Effect + is caused by + cause.'),
  M('Which sentence puts the EFFECT first?', ['Floods are the result of heavy rain.', 'Heavy rain leads to floods.', 'Heavy rain causes floods.', 'Heavy rain results in floods.'], 'Floods (the effect) come first, then "are the result of" + cause.'),
  G('Human activity contributes ___ climate change.', 'to', 'contribute to = be one of the causes of.'),
  M('Many farmers left their land ___ the drought.', ['because of', 'because', 'so', 'result in'], 'the drought is a noun → because of.')
);
byId(T, 'future').q.push(
  M('Experts predict that global temperatures ___ rise by 2050.', ['will', 'will to', 'are rise', 'might to'], 'will + base verb.'),
  M('I\'m not sure, but hydroponic farms ___ become common in Saudi Arabia.', ['could', 'will definitely', 'won\'t', 'must'], 'Not sure = possible → could.'),
  O(['Sea levels', 'will', 'probably', 'rise.'], 'Positive: will probably + verb.'),
  M('Which sentence is correct?', ['Oil prices may go up next year.', 'Oil prices may goes up next year.', 'Oil prices may to go up next year.', 'Oil prices mays go up next year.'], 'may + base verb.'),
  M('I am 100% sure. The sun ___ stop shining tomorrow.', ['won\'t', 'might', 'may', 'could'], '0% chance → won\'t.'),
  G('Complete the negative: "Fossil fuels probably ___ last forever." (one word)', ['won\'t'], 'probably won\'t: probably comes before won\'t.')
);
byId(T, 'suggest').q.push(
  M('The government ___ to build more bus lanes.', ['ought', 'should', 'must', 'would'], 'ought TO + verb. (should and must have no "to".)'),
  M('I\'d suggest that students ___ cars to university.', ['share', 'sharing', 'to share', 'shared'], 'I\'d suggest (that) + subject + base verb.'),
  M('___ a bus lane on this road is a good idea.', ['Creating', 'Create', 'To creating', 'Created'], '-ing subject + is a good idea.'),
  M('It would be better if the government ___ fuel duty.', ['increased', 'increases', 'will increase', 'increasing'], 'It would be better if + past simple.'),
  O(['It is', 'important', 'to reduce', 'traffic', 'in the city.'], 'It is important + to + base verb.')
);
byId(T, 'cond').q.push(
  M('If the government ___ more cycle lanes, more people will cycle.', ['builds', 'will build', 'build', 'built'], 'If + present simple (the government builds).'),
  M('Unless the city ___ public transport, traffic will get worse.', ['improves', 'doesn\'t improve', 'will improve', 'improve'], 'unless + positive present verb.'),
  M('If people share cars, there ___ fewer cars on the road.', ['will be', 'are being', 'would', 'will'], 'Result: will + base verb (be).'),
  M('"We won\'t reduce pollution unless we use renewable energy." This means…', ['If we don\'t use renewable energy, we won\'t reduce pollution.', 'If we use renewable energy, we won\'t reduce pollution.', 'We will reduce pollution without renewable energy.', 'We use renewable energy because of pollution.'], 'unless = if … not.'),
  O(['Unless', 'we', 'act now,', 'the problem', 'will', 'get worse.'], 'Unless + positive verb, comma, will + verb.'),
  M('Which sentence needs a comma?', ['If it rains we will stay at home.', 'We will stay at home if it rains.', 'We will cycle unless it rains.', 'I will call you if I am late.'], 'The if-clause comes first, so it needs a comma: If it rains, we will…')
);
byId(T, 'comp').q.push(
  M('Cycling is ___ the healthiest way to travel.', ['by far', 'much', 'a lot', 'far more'], 'by far + the + superlative.'),
  M('The bus is ___ cheaper than the metro, only one riyal less.', ['slightly', 'very', 'too', 'most'], 'A small difference → slightly + comparative.'),
  M('Traffic in the city is considerably ___ than ten years ago.', ['heavier', 'more heavy', 'heaviest', 'heavyer'], 'heavy → heavier (y → ier).'),
  M('The new road is ___ safer than the old one.', ['definitely', 'definite', 'very', 'most'], 'definitely / much + comparative. Not "very safer".')
);
byId(T, 'signpost').q.push(
  M('Solar power is clean. ___, it creates jobs.', ['On top of that', 'On the other hand', 'In short', 'However'], 'Adding a point → On top of that.'),
  M('___, renewable energy is the future. (a summary at the end)', ['Overall', 'Firstly', 'Also', 'For instance'], 'Overall = in summary.'),
  M('Nuclear power is efficient. ___, many people are afraid of accidents.', ['And yet', 'In addition', 'Also', 'For example'], 'A contrast → And yet.')
);
const pros = { id: 'pros', src: 'L&S Unit 2', emoji: '👍', title: 'Advantages and disadvantages language', short: 'The good thing about…, The main drawback is…, pros and cons, On the one hand',
  why: 'You need this language in the Unit 2 debate, and it is exactly what the writing exam asks for: the advantages and disadvantages of two solutions.',
  learn: [
    { k: 'rule', title: 'The phrases', html: `<table class="tbl"><tr><th>Advantage 👍</th><th>Disadvantage 👎</th></tr>
      <tr><td><span class="k-green">The good thing about</span> solar power is that…</td><td><span class="k-pink">The bad thing about</span> it is that…</td></tr>
      <tr><td><span class="k-green">The main benefit / advantage of</span> X is that…</td><td><span class="k-pink">The main drawback / disadvantage of</span> X is that…</td></tr>
      <tr><td><span class="k-green">One advantage is that</span>…</td><td><span class="k-pink">One disadvantage is that</span>…</td></tr></table>
      <div class="ex">Both sides: <b>There are many pros and cons of</b> nuclear power. / X <b>has both advantages and disadvantages</b>.</div>
      <div class="ex"><b>On the one hand,</b> it is cheap. <b>On the other hand,</b> it is risky.</div>` },
    { k: 'way', tag: 'Grammar inside the phrases', html: '<div class="ex">about / of + <b>noun or -ing</b>: The good thing about <b>cycling</b>… / One benefit of <b>using</b> buses…</div><div class="ex">is that + <b>a full sentence</b>: The main drawback is that <b>it is expensive</b>.</div><div class="ex">One advantage <b>is</b> (singular). Two advantages <b>are</b>…</div>' },
    { k: 'anim', type: 'puzzle', tag: 'Build the sentence', items: [['The good thing about wind power', 'is that', 'the wind is free.', GR], ['The main drawback of nuclear power', 'is that', 'accidents are dangerous.', PK], ['On the one hand, solar is clean.', 'On the other hand,', 'it does not work at night.', PU]], note: 'Phrase + is that + a full sentence.' },
    { k: 'mist', items: [['The good thing of cycling is healthy.', 'The good thing about cycling is that it is healthy.'], ['One advantage are that it is cheap.', 'One advantage is that it is cheap.'], ['One benefit of use buses is…', 'One benefit of using buses is…']] }
  ],
  q: [
    M('The good thing ___ solar power is that it is clean.', ['about', 'of', 'for', 'with'], 'The good thing about…'),
    M('The main ___ of wind power is that the wind is free.', ['benefit', 'drawback', 'risk', 'problem'], 'free = a good point = a benefit.'),
    M('One advantage of electric cars ___ that they are quiet.', ['is', 'are', 'be', 'being'], 'One advantage (singular) is…'),
    M('___ the one hand, nuclear power is cheap. On the other hand, it is risky.', ['On', 'In', 'At', 'By'], 'On the one hand … On the other hand…'),
    M('There are many ___ and cons of hydroponic farming.', ['pros', 'pro', 'profits', 'positives'], 'pros and cons = advantages and disadvantages.'),
    M('One benefit of ___ public transport is that it reduces traffic.', ['using', 'use', 'to use', 'used'], 'of + -ing.'),
    M('Solar power has both advantages ___ disadvantages.', ['and', 'or', 'nor', 'but'], 'both … and.'),
    M('Which sentence describes a DISADVANTAGE?', ['The main drawback is the high cost.', 'The main benefit is the low cost.', 'The good thing about it is the price.', 'One advantage is that it is cheap.'], 'drawback = disadvantage.'),
    O(['The main', 'drawback', 'of wind power', 'is', 'the noise.'], 'The main drawback of X is…'),
    G('One disadvantage is ___ solar panels need regular cleaning.', 'that', 'is that + a full sentence.'),
    M('The good thing about ___ is that it is healthy.', ['cycling', 'cycle', 'to cycle', 'cycled'], 'about + -ing.'),
    M('Which phrase introduces the other side?', ['On the other hand,', 'In addition,', 'On top of that,', 'For example,'], 'On the other hand = the opposite side.')
  ] };
// focus toolboxes first (Unit 3 then Unit 2), Unit 1 review after
const ORDER = ['cond', 'suggest', 'comp', 'cause', 'future', 'pros', 'signpost', 'order', 'linkers', 'contrast', 'modals'];
const all = [...T, pros];
window.GRAMMAR.topics = ORDER.map(id => byId(all, id)).filter(Boolean);

// ---------- VOCABULARY: Units 2 and 3 shelves first ----------
const V = window.VOCAB; V.units = ['u2', 'u3', 'u1'].map(id => byId(V.units, id));

// ---------- WRITING: unit tags ----------
const W = window.WRITING;
[['model', [3]], ['guided', [3]], ['own', [3]], ['own2', [2]], ['own3', [1]]].forEach(([id, u]) => { const t = byId(W.tasks, id); if (t) t.u = u; });

// ---------- READING: two new Unit 2 and 3 tests ----------
const R = window.READING;
R.tests.push(
  { id: 'glacier', unit: 'Unit 2 · Environment', emoji: '🏔️', title: 'Melting Glaciers: Causes and Consequences', words: 400, heading: 'Melting Glaciers: Causes and Consequences', visual: '🏔️ 🌡️ 🌊',
    text: [
      'Glaciers are huge rivers of ice that move very slowly down mountains. They form over hundreds of years when snow falls and does not melt. Together with the ice sheets of Antarctica and Greenland, glaciers hold about two thirds of all the fresh water on Earth. However, in almost every part of the world, glaciers are now getting smaller.',
      'The main cause of this is global warming. When people burn fossil fuels such as coal, oil and gas, greenhouse gases like carbon dioxide go into the atmosphere. These gases trap heat, so the temperature of the planet rises. As a result, glaciers lose more ice in summer than they gain in winter.',
      'There is also a second, less well-known cause. Smoke and dust from factories, cars and forest fires can land on the ice. Dark surfaces absorb more heat than white surfaces, so the dirty ice melts faster. This is why scientists say that air pollution contributes to the problem, even far away from cities.',
      'The consequences are serious. First, the water from melting glaciers flows into the oceans and leads to rising sea levels. This threatens coastal cities and islands. Second, millions of people in countries such as India and Peru depend on glaciers for drinking water and farming. In the short term, melting glaciers give them more water, but in the long term, when the glaciers disappear, the rivers may become much smaller.',
      'Experts predict that many small glaciers will disappear completely by the end of this century. However, they believe that if countries reduce greenhouse gases quickly, we can still save a large part of the world\'s ice. In my view, this is one of the most important challenges of our time, and every country should play its part.'
    ],
    q: [
      M('What is the main purpose of the text?', ['to explain the causes and effects of melting glaciers', 'to describe a holiday in the mountains', 'to compare glaciers in India and Peru', 'to teach people how to climb glaciers'], 'Causes (paragraphs 2 and 3), consequences (paragraph 4).'),
      M('What is paragraph 3 mainly about?', ['how smoke and dust make ice melt faster', 'why glaciers move slowly', 'how glaciers form', 'the effects on sea levels'], 'Topic sentence: a second, less well-known cause.'),
      M('What do greenhouse gases do?', ['They trap heat.', 'They make ice white.', 'They form glaciers.', 'They clean the air.'], 'Paragraph 2: these gases trap heat.'),
      M('Why does dirty ice melt faster?', ['Dark surfaces absorb more heat.', 'Dirt contains salt.', 'Dirty ice is thinner.', 'Factories heat the ice directly.'], 'Paragraph 3: dark surfaces absorb more heat than white surfaces.'),
      TF('Glaciers form very quickly, in a few years.', false, 'Paragraph 1: they form over hundreds of years.'),
      TF('Melting glaciers contribute to rising sea levels.', true, 'Paragraph 4: water flows into the oceans and leads to rising sea levels.'),
      TF('Peru has more glaciers than India.', 'dns', 'The text does not compare the number of glaciers.'),
      M('"consequences" (paragraph 4) means…', ['results', 'causes', 'solutions', 'questions'], 'consequences = results, usually bad ones.'),
      M('In paragraph 2, "These gases" refers to…', ['greenhouse gases such as carbon dioxide', 'smoke and dust', 'fossil fuels', 'glaciers'], 'The sentence before names greenhouse gases like carbon dioxide.'),
      AG('"It is too late to do anything about melting glaciers."', false, 'Experts believe we can still save a large part of the world\'s ice.'),
      AG('"Every country should help to reduce greenhouse gases."', true, 'The writer says every country should play its part.')
    ] },
  { id: 'brt', unit: 'Unit 3 · Transport', emoji: '🚌', title: 'Curitiba\'s Smart Buses: A Lesson for Busy Cities', words: 410, heading: 'Curitiba\'s Smart Buses: A Lesson for Busy Cities', visual: '🚌 🛣️ 🏙️',
    text: [
      'In the 1960s, the Brazilian city of Curitiba had a serious problem. The population was growing fast, and the streets were becoming full of cars. The city did not have enough money to build a metro, which can cost billions. Instead, its planners attempted something new: they decided to make buses work like a metro.',
      'In 1974, Curitiba opened one of the first Bus Rapid Transit systems, often called BRT. The buses travel in their own special lanes, so they are never stuck in traffic congestion. Later, the city added glass stations shaped like tubes, where passengers pay before they get on. As a result, people can get on and off very quickly, just like on a train.',
      'The system has many advantages. First, it is much cheaper and faster to build than a metro, because it uses roads that already exist. Second, it is reliable; buses arrive every few minutes at busy times. Moreover, because so many residents use the buses, Curitiba has less traffic and cleaner air than many other cities of its size.',
      'However, BRT is not a perfect solution. The special lanes take space away from cars, and some drivers complain. At rush hour, the buses can become very crowded. In addition, a bus carries fewer passengers than a metro train, so very large cities may need both.',
      'Today, more than a hundred and fifty cities around the world have built BRT systems, including Bogotá in Colombia and Istanbul in Turkey. Curitiba\'s story demonstrates that a practical idea can sometimes be better than an expensive one. Cities that want to reduce traffic should consider BRT before they spend billions on new roads.'
    ],
    q: [
      M('What is the purpose of the text?', ['to describe a transport solution and evaluate it', 'to tell the history of Brazil', 'to persuade people to buy cars', 'to explain how to drive a bus'], 'It explains BRT, gives advantages and disadvantages, and gives a recommendation.'),
      M('Who is the text most probably written for?', ['general readers and city planners interested in transport', 'bus drivers in Curitiba only', 'young children', 'tourists looking for beaches'], 'It ends with advice for cities that want to reduce traffic.'),
      M('What is paragraph 2 mainly about?', ['how the BRT system works', 'why Curitiba had problems', 'the disadvantages of BRT', 'cities that copied BRT'], 'Special lanes, tube stations, paying before boarding.'),
      M('Why can passengers get on and off quickly?', ['They pay before they get on.', 'The buses are very small.', 'There are no stations.', 'The buses do not stop.'], 'Paragraph 2: passengers pay before they get on.'),
      M('Why is BRT cheaper to build than a metro?', ['It uses roads that already exist.', 'Buses are free.', 'Drivers are paid less.', 'It has no stations.'], 'Paragraph 3: it uses roads that already exist.'),
      TF('Curitiba built a metro in the 1960s.', false, 'The city did not have enough money to build a metro.'),
      TF('The buses can be very crowded at rush hour.', true, 'Paragraph 4 says this.'),
      TF('A bus ticket in Curitiba costs one dollar.', 'dns', 'The text gives no ticket price.'),
      M('"attempted" (paragraph 1) means…', ['tried', 'refused', 'forgot', 'finished'], 'attempt = try (a Unit 3 academic verb).'),
      M('"reliable" (paragraph 3) means…', ['you can trust it to work well', 'very expensive', 'very old', 'dangerous'], 'Buses arrive every few minutes → you can trust them.'),
      AG('"BRT is a perfect solution with no problems."', false, 'Paragraph 4: BRT is not a perfect solution.'),
      AG('"Cities should consider BRT before building new roads."', true, 'The last sentence says exactly this.')
    ] }
);

// ---------- SPEAKING: one more Unit 2 and one more Unit 3 task ----------
const SP = window.SPEAKING;
const P_FIRST = ['Give your first point', 'first of all|firstly|the main|the first|to begin with'];
const P_EX = ['Give a reason or an example', 'for example|for instance|such as|because|the reason for this|this is because'];
const P_MORE = ['Add another point', 'another|on top of that|in addition|also|secondly|furthermore'];
const P_CON = ['Use contrast or a counter-argument', 'however|on the contrary|but|on the other hand|it may be true|and yet'];
const P_END = ['Conclude', 'in conclusion|to sum up|in short|overall|to conclude'];
SP.tasks.push(
  { id: 'energy', unit: 'L&S Unit 2', emoji: '☀️', title: 'Solar or nuclear power?', kind: 'Debate turn', time: '1.5 minutes',
    prompt: 'Which is a better energy source for Saudi Arabia: solar power or nuclear power? Give your opinion with reasons, and answer one argument from the other side.',
    plan: [['Introduce', 'my choice: solar power', B], ['Reason 1', 'sunshine almost every day; renewable', GR], ['Example / detail', 'large solar farms in the desert', OR], ['Reason 2', 'safer: no accidents, no dangerous waste', GR], ['Counter-argument', 'It may be true that nuclear works at night, but…', PU], ['Conclude', 'In short, the best long-term solution', PK]],
    model: [['In my opinion, solar power is a better choice for Saudi Arabia than nuclear power.', 'topic'], ['First of all, we have strong sunshine almost every day, and the sun is a renewable resource.', 'support'], ['For example, large solar farms can be built in the desert, far away from cities.', 'detail'], ['On top of that, solar power is much safer, because there is no risk of a nuclear accident and no dangerous waste.', 'support'], ['It may be true that nuclear power works at night, but batteries are becoming cheaper, so solar energy can be stored.', 'counter'], ['In short, solar power is the safest and most practical long-term solution for our country.', 'conc']],
    phrases: ['In my opinion', 'First of all', 'For example', 'On top of that', 'It may be true that', 'In short'],
    keywords: ['renewable', 'resource', 'fossil fuel', 'greenhouse gas', 'risk', 'long-term', 'alternative', 'affordable', 'crisis', 'environment'],
    parts: [['Give your opinion', 'in my opinion|i think|i believe|personally'], P_FIRST, P_EX, P_MORE, P_CON, P_END], minWords: 120 },
  { id: 'carfree', unit: 'L&S Unit 3', emoji: '🚶‍♀️', title: 'Car-free city centres', kind: 'Opinion and recommendation', time: '1.5 minutes',
    prompt: 'Some people say that cars should be banned from city centres. Do you agree? Give a reason, an example, the other side, and a recommendation.',
    plan: [['Introduce', 'I partly agree', B], ['Reason', 'less traffic congestion and pollution', GR], ['Example (If…, … will…)', 'If cars are banned, people will walk or take the metro', OR], ['Other side', 'However, older people and deliveries need access', PU], ['Recommendation', 'I\'d suggest that the city start with one car-free street', GR], ['Conclude', 'Overall, a good idea if it is introduced slowly', PK]],
    model: [['Today I\'d like to talk about car-free city centres. Personally, I partly agree with this idea.', 'topic'], ['The main reason is that fewer cars would reduce traffic congestion and air pollution.', 'support'], ['For example, if cars are banned from the busiest streets, people will walk or take the metro instead.', 'detail'], ['However, older people, ambulances and delivery vehicles still need access to the centre.', 'counter'], ['So I\'d suggest that the city start with one car-free street at the weekend and see how residents feel.', 'support'], ['Overall, a car-free centre is a good idea, but it should be introduced slowly.', 'conc']],
    phrases: ['Today I\'d like to talk about', 'Personally', 'The main reason is', 'For example', 'However', 'I\'d suggest that', 'Overall'],
    keywords: ['traffic congestion', 'pollution', 'public transport', 'resident', 'access', 'vehicle', 'reduce', 'emergency', 'convenient', 'practical'],
    parts: [['Introduce the topic', 'going to talk about|i\'d like to talk|i would like to talk|today i'], ['Give your opinion', 'personally|i agree|i disagree|partly agree|in my opinion'], P_EX, ['Use a first conditional (If …, … will …)', 'if .{3,80} will'], P_CON, ['Recommend', 'i\'d suggest|i would suggest|it would be better if|the best thing would be|should'], P_END], minWords: 120 }
);

// ---------- PLANS: add Unit 2 and 3 grammar steps ----------
const PL = window.PLANS;
const addAfter = (planId, afterHref, steps) => { const p = byId(PL, planId); if (!p) return; const i = p.steps.findIndex(s => s[1] === afterHref); p.steps.splice(i >= 0 ? i + 1 : p.steps.length - 1, 0, ...steps); };
addAfter('rose', '#/room/grammar/practise/order', [['Grammar: cause and effect (Unit 2)', '#/room/grammar/learn/cause'], ['Grammar: advantages and disadvantages language (Unit 2)', '#/room/grammar/learn/pros'], ['Reading: Unit 2 and 3 mock tests', '#/room/reading/tests']]);
addAfter('lilac', '#/room/grammar/practise/order', [['Grammar: cause and effect (Unit 2)', '#/room/grammar/practise/cause'], ['Grammar: suggestions and recommendations (Unit 3)', '#/room/grammar/practise/suggest']]);
addAfter('gold', '#/room/grammar/practise/cond', [['Advantages and disadvantages language (Unit 2)', '#/room/grammar/practise/pros']]);

// ---------- MOCK EXAM: mostly Units 2 and 3 ----------
const unitsOf = x => x.u || ((x.unit || x.src || '').match(/[123]/g) || []).map(Number);
const isFocus = x => { const u = unitsOf(x); return !u.length || u.some(n => n > 1); };
const pickKeep = (a, n) => shuffle(a.map((_, i) => i)).slice(0, n).sort((x, y) => x - y).map(i => a[i]);
window.UNIT_FOCUS = { unitsOf, isFocus };
window.EXAM_BUILD = function () {
  const rts = R.tests.filter(isFocus), lts = window.LISTENING.tests.filter(isFocus);
  const rt = rts[Math.floor(Math.random() * rts.length)], lt = lts[Math.floor(Math.random() * lts.length)];
  const F = window.GRAMMAR.topics.filter(isFocus), RV = window.GRAMMAR.topics.filter(t => !isFocus(t));
  const fq = pick(F, 8).map(t => pick(t.q, 1)[0]);
  fq.push(...pick(F.flatMap(t => t.q).filter(q => !fq.includes(q)), 8 - fq.length));
  const gq = [...fq, ...pick(RV, 2).map(t => pick(t.q, 1)[0])];
  return [
    { kind: 'reading', test: rt, q: pickKeep(rt.q, 8), title: `Part 1 · Reading: ${rt.title}` },
    { kind: 'grammar', title: 'Part 2 · Grammar', intro: 'Mostly Units 2 and 3, with two Unit 1 review questions.', q: gq },
    { kind: 'vocab', title: 'Part 3 · Vocabulary', intro: 'Mostly Unit 2 and 3 words: gap fills, meanings, word partners, word forms and prefixes.', q: shuffle(V.exam()).slice(0, 10) },
    { kind: 'listening', test: lt, q: pickKeep(lt.q, 8) },
    { kind: 'writing', task: byId(W.tasks, 'own') }
  ];
};
})();
