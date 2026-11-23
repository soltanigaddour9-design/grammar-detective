// WRITING STUDY · paragraph structure with colours, scattered sentences, plan tables, three-step writing
(function () {
const B = '#2F6DB5', GR = '#2E8B57', OR = '#D97706', PK = '#C2185B', PU = '#7E4FA6';
const M = (q, o, why) => ({ t: 'mcq', q, o, a: 0, why });
const S = (items, why) => ({ t: 'seq', items, why });
const RL = (sents, why, roles) => ({ t: 'roles', sents, why, ...(roles ? { roles } : {}) });
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);
const para = arr => `<p class="para">${arr.map(([t, r]) => `<span class="s ${r}">${t}</span>`).join(' ')}</p>`;
const table = rows => `<table class="planner">${rows.map(([l, v, c]) => `<tr><th style="background:${c}">${l}</th><td><div style="padding:6px 8px;font-weight:600">${v}</div></td></tr>`).join('')}</table>`;

const BURGER = `<div class="burger"><div style="background:${B}">🍞 Topic sentence: the main idea of the whole paragraph</div><div style="background:${GR}">🥬 Supporting sentence: point 1 (a reason or an advantage)</div><div style="background:${OR}">🧀 Detail / example: For example, … / such as …</div><div style="background:${GR}">🥬 Supporting sentence: point 2</div><div style="background:${PU}">🍅 However, … (a disadvantage, when you write about solutions)</div><div style="background:${PK}">🍞 Concluding sentence: the main idea again, in new words</div></div>`;

const lessons = [
  { id: 'burger', emoji: '🍔', title: 'The paragraph burger', src: 'R&W U1 to U3', short: 'The five parts of every academic paragraph, in colour',
    blocks: [
      { k: 'html', html: BURGER },
      { k: 'way', tag: 'See it in a real paragraph', html: para([['Camels are perfect animals for life in the desert.', 'topic'], ['First, they can survive for several days without water.', 'support'], ['For example, they store fat in their humps and lose very little water in hot weather.', 'detail'], ['In addition, their wide feet help them walk on soft sand.', 'support'], ['In short, camels are well suited to the hot, dry desert.', 'conc']]) + '<p class="hint">Blue = topic sentence · green = supporting sentence · orange = detail or example · pink = concluding sentence.</p>' },
      { k: 'rule', title: 'Remember', html: '<div class="ex">One paragraph = <b>one main idea</b>. Every sentence must talk about the idea in the topic sentence. This is called <b>unity</b>.</div><div class="ex">Leave an <b>empty line</b> between paragraphs.</div>' }
    ] },
  { id: 'topic', emoji: '🔵', title: 'A strong topic sentence', src: 'R&W Unit 1', short: 'Topic + controlling idea. Not too general, not too specific.',
    blocks: [
      { k: 'rule', title: 'Formula', html: '<div class="ex"><span class="k-blue">TOPIC</span> + <span class="k-pink">CONTROLLING IDEA</span> (what you will say about it)</div><div class="ex"><span class="k-blue">One solution to traffic congestion</span> <span class="k-pink">is to improve public transport</span>.</div><div class="ex"><span class="k-blue">Deforestation</span> <span class="k-pink">has serious effects on the environment</span>.</div>' },
      { k: 'way', tag: 'Goldilocks test', html: '<div class="ex">❌ Too general: <i>There are many problems in the world.</i></div><div class="ex">❌ Too specific (this is a detail): <i>One bus can carry 50 people.</i></div><div class="ex">✅ Just right: <i>Buses have both advantages and disadvantages for commuters.</i></div>' },
      { k: 'ex', title: 'Starters for solution paragraphs', items: ['One solution to [problem] is to …', 'Another solution is to …', 'The first way to reduce [problem] is …', 'A second option is …'] }
    ] },
  { id: 'support', emoji: '🟢', title: 'Supporting sentences and details', src: 'R&W Unit 2', short: 'Points, examples and explanations that prove your topic sentence',
    blocks: [
      { k: 'rule', title: 'Point → detail', html: para([['One advantage is that fewer people will need to drive.', 'support'], ['For example, one metro train can carry hundreds of passengers.', 'detail']]) + '<div class="ex">A <span class="k-green">supporting sentence</span> gives a point. A <span class="k-orange">detail</span> explains it or gives an example, a number or a fact.</div>' },
      { k: 'ex', title: 'Detail starters', items: ['For example, … / For instance, …', '… such as buses and the metro.', 'This means that …', 'As a result, …', 'If …, …. (a short conditional example)'] },
      { k: 'way', tag: 'Linkers for points', html: '<div class="ex">Point 1: <b>First, / Firstly, / The main advantage is that …</b></div><div class="ex">Point 2: <b>In addition, / Also, / Another benefit is that … / Moreover,</b></div>' }
    ] },
  { id: 'conc', emoji: '🩷', title: 'The concluding sentence', src: 'R&W Unit 3', short: 'Three jobs: restate, summarize, or add an opinion or prediction',
    blocks: [
      { k: 'rule', title: 'Three jobs', html: '<div class="ex">1. <b>Restate</b> the main idea in <u>different words</u>: In short, better public transport is an excellent long-term solution.</div><div class="ex">2. <b>Summarize</b> the main points: To sum up, the metro is fast and cheap, but expensive to build.</div><div class="ex">3. Add an <b>opinion or a prediction</b>: Overall, if the city builds more lines, traffic will decrease.</div>' },
      { k: 'ex', title: 'Starters', items: ['In short, …', 'To sum up, …', 'Overall, …', 'In conclusion, …'] },
      { k: 'mist', items: [['Copying the topic sentence word for word.', 'Say the same idea with new words.'], ['Adding a brand new point at the end.', 'Only restate, summarize or give an opinion.']] }
    ] },
  { id: 'advdis', emoji: '⚖️', title: 'From table to paragraph: advantages and disadvantages', src: 'R&W Unit 3 · exam task', short: 'Watch a plan table turn into a colour-coded paragraph',
    blocks: [
      { k: 'way', tag: 'Step 1 · The table (plan in key words)', html: table([['Topic sentence', 'Solution 1: improve public transport', B], ['Advantage 1', 'fewer people drive', GR], ['Detail', 'one train = hundreds of passengers', OR], ['Advantage 2', 'cheaper than a car', GR], ['Disadvantage', 'very expensive to build, takes years', PU], ['Concluding sentence', 'good long-term solution, but costly', PK]]) },
      { k: 'way', tag: 'Step 2 · The paragraph (each row becomes a sentence)', html: para([['One solution to traffic congestion in Riyadh is to improve public transport.', 'topic'], ['The main advantage is that fewer people will need to drive to work.', 'support'], ['For example, one metro train can carry hundreds of passengers, so there will be fewer cars on the roads at rush hour.', 'detail'], ['In addition, buses and the metro are cheaper than owning a car.', 'support'], ['However, one disadvantage is that new metro lines are very expensive to build, and they take many years to finish.', 'counter'], ['In short, better public transport is an excellent long-term solution, even though it requires a lot of money.', 'conc']]) },
      { k: 'ex', title: 'Advantage and disadvantage language', items: ['One advantage / benefit of … is that …', 'The main advantage is that … / The good thing about … is that …', 'Another benefit is that …', 'However, one disadvantage is that …', 'On the other hand, the main drawback is that …'] }
    ] },
  { id: 'exam', emoji: '📝', title: 'The exam writing task', src: 'Summative exam', short: 'Two solutions, advantages and disadvantages, 200 to 300 words',
    blocks: [
      { k: 'rule', title: 'What the examiner wants', html: '<div class="ex">📌 <b>Two paragraphs</b>: Paragraph 1 = solution 1. Paragraph 2 = solution 2.</div><div class="ex">📌 Each paragraph: <b>topic sentence → advantages with examples → However, a disadvantage → concluding sentence</b>.</div><div class="ex">📌 <b>200 to 300 words</b> in total (about 100 to 150 in each paragraph).</div><div class="ex">📌 Use Unit 3 vocabulary: traffic congestion, public transport, commuters, reduce, practical, require, consider.</div>' },
      { k: 'way', tag: 'Plan your 40 minutes', html: '<div class="ex">⏱ 5 minutes: fill the table with key words.</div><div class="ex">⏱ 30 minutes: write paragraph 1, then paragraph 2.</div><div class="ex">⏱ 5 minutes: check capital letters, full stops, spelling, and that each paragraph has a However sentence.</div>' },
      { k: 'mist', items: [['becuase, enviroment, goverment', 'because, environment, government'], ['more better, more cheaper', 'better, cheaper'], ['People uses the metro.', 'People use the metro.'], ['one long paragraph with no topic sentence', 'two paragraphs, each with a topic sentence']] }
    ] }
];

const ROLES_Q = [
  RL([['Camels are perfect animals for life in the desert.', 'topic'], ['First, they can survive for several days without water.', 'support'], ['For example, they lose very little water even in very hot weather.', 'detail'], ['In addition, their wide feet help them walk on soft sand.', 'support'], ['In short, camels are well suited to the hot, dry desert.', 'conc']], 'Topic → point → example → point → conclusion.'),
  RL([['Deforestation has serious effects on the environment.', 'topic'], ['One effect is that many animals lose their habitat.', 'support'], ['For instance, orangutans are endangered because their forests are cut down.', 'detail'], ['Another effect is that fewer trees absorb carbon dioxide.', 'support'], ['Overall, cutting down forests harms both animals and the climate.', 'conc']], 'Each effect (green) is followed by an example (orange).'),
  RL([['Car sharing is a practical way to reduce traffic.', 'topic'], ['One advantage is that there are fewer cars on the road.', 'support'], ['For example, if four students share one car, three cars stay at home.', 'detail'], ['My favourite car colour is white.', 'odd'], ['To sum up, car sharing helps everyone save time and money.', 'conc']], 'The sentence about car colour has nothing to do with reducing traffic, so it does not belong.', ['topic', 'support', 'detail', 'conc', 'odd']),
  RL([['There are several reasons why the Arabian leopard is critically endangered.', 'topic'], ['The main reason is the loss of its mountain habitat.', 'support'], ['For example, new roads and buildings divide the areas where it lives.', 'detail'], ['Leopards in Africa can climb trees with their food.', 'odd'], ['In conclusion, we must protect its habitat to save this beautiful animal.', 'conc']], 'The paragraph is about the Arabian leopard and why it is endangered. African leopards climbing trees is off topic.', ['topic', 'support', 'detail', 'conc', 'odd'])
];
const SEQ_Q = [
  S(['A new metro line is a good solution to traffic congestion.', 'First, it can carry thousands of passengers every hour.', 'This means that many people will leave their cars at home.', 'However, building a metro is very expensive.', 'In short, a metro is costly, but it is a good long-term solution.'], 'Topic sentence → First → This means (detail) → However (disadvantage) → In short (conclusion).'),
  S(['Solar power has many advantages for Saudi Arabia.', 'The first advantage is that the country has sunshine almost every day.', 'In addition, solar energy does not produce greenhouse gases.', 'On the other hand, solar panels need regular cleaning because of the dust.', 'Overall, solar power is a clean and practical choice for the future.'], 'Topic → first advantage → In addition → On the other hand → Overall.'),
  S(['Wildlife reserves are important for endangered animals.', 'Firstly, they give animals a safe natural habitat.', 'For example, the Arabian oryx survived thanks to breeding programmes and protected reserves.', 'Secondly, hunting is illegal inside the reserves.', 'To sum up, reserves help endangered species survive.'], 'Firstly → its example → Secondly → To sum up.'),
  S(['Another solution is to build more cycle lanes.', 'One benefit is that cycling does not pollute the air.', 'Cycling is also cheap and healthy.', 'However, the main drawback is the hot weather in summer.', 'Overall, cycle lanes are useful for short journeys in the cooler months.'], 'Another solution (topic) → benefit → also → However → Overall.'),
  S(['Human activities are the main cause of climate change.', 'Firstly, burning fossil fuels releases carbon dioxide into the atmosphere.', 'This gas traps heat and makes the planet warmer.', 'Secondly, logging destroys forests that absorb carbon dioxide.', 'In conclusion, people must change the way they use energy and land.'], 'Firstly → explanation → Secondly → In conclusion.')
];
const UNITY_Q = [
  M('A paragraph about the advantages of the metro. Which sentence does NOT belong?', ['My brother bought a new phone last week.', 'It is faster than driving at rush hour.', 'Tickets are cheaper than petrol.', 'You can read or study during the journey.'], 'Unity: the phone is not about the metro.'),
  M('A paragraph about why grey squirrels replaced red squirrels. Which sentence does NOT belong?', ['Squirrels are popular in cartoons.', 'Grey squirrels are bigger and stronger.', 'They carry a disease that kills red squirrels.', 'They find and eat more food than red squirrels.'], 'Cartoons are not a reason for the replacement.'),
  M('A paragraph about the effects of deforestation. Which sentence does NOT belong?', ['Wood is used to make beautiful furniture.', 'Many animals lose their homes.', 'Soil is washed away by heavy rain.', 'Less carbon dioxide is absorbed.'], 'Furniture is not an effect of deforestation on the environment.'),
  M('A paragraph about the disadvantages of cars in cities. Which sentence does NOT belong?', ['Cars come in many different colours.', 'They cause air pollution.', 'They create traffic jams.', 'Parking is difficult and expensive.'], 'Colours are not a disadvantage.'),
  M('A paragraph about ways to protect endangered animals. Which sentence does NOT belong?', ['The weather was lovely on our trip.', 'Governments can create national parks.', 'Hunting can be made illegal.', 'People can support wildlife charities.'], 'The weather is off topic.'),
  M('A paragraph about the advantages of solar power. Which sentence does NOT belong?', ['Oil was discovered in Saudi Arabia in 1938.', 'It is a renewable source of energy.', 'It does not pollute the air.', 'Sunshine is free.'], 'A true fact, but it is about oil, not the advantages of solar power.')
];
const TOPIC_Q = [
  M('Choose the best topic sentence: "___ First, they are cheap to use. In addition, they reduce traffic because one bus carries many people. However, they are sometimes late."', ['Buses have both advantages and disadvantages for commuters.', 'Buses are big.', 'One bus can carry 50 people.', 'Many people like cars.'], 'The paragraph gives advantages and a disadvantage of buses.'),
  M('Choose the best topic sentence: "___ For example, plastic bags kill turtles and birds. Also, chemicals from factories poison fish."', ['Pollution is a serious threat to wildlife.', 'Turtles live in the sea.', 'Factories make many products.', 'I love animals.'], 'All the details are about pollution harming animals.'),
  M('Choose the best topic sentence: "___ One effect is rising sea levels. Another effect is more extreme weather, such as floods and heatwaves."', ['Global warming has several serious effects.', 'The sea is blue.', 'Floods happened last year.', 'There are many problems in the world.'], 'Topic (global warming) + controlling idea (several serious effects).'),
  M('Choose the best topic sentence: "___ Firstly, it is fast. Secondly, it is not affected by traffic jams. Finally, it is comfortable and clean."', ['The metro is the best way to travel in Riyadh.', 'Riyadh has many roads.', 'Traffic jams are bad.', 'The metro has trains.'], 'The reasons all support the metro being the best way to travel.'),
  M('Choose the best topic sentence: "___ The red squirrel is native, whereas the grey squirrel was introduced. The grey squirrel is also bigger."', ['There are several differences between red and grey squirrels.', 'Squirrels eat nuts.', 'The grey squirrel is big.', 'Britain has many forests.'], 'The paragraph contrasts the two squirrels.'),
  M('Choose the best topic sentence: "___ For instance, they can carry heavy loads and work in places where cars cannot go."', ['Working animals are still very useful today.', 'Donkeys are grey.', 'Cars are expensive.', 'Some animals are wild.'], 'The detail shows why working animals are useful.')
];
const CONC_Q = [
  M('Topic sentence: "Car sharing is a practical way to reduce traffic." Choose the best concluding sentence.', ['In short, sharing cars is a simple way to cut traffic and save money.', 'For example, my cousin shares a car.', 'Cars are expensive.', 'Firstly, car sharing is easy.'], 'It restates the main idea with different words and starts with In short.'),
  M('Topic sentence: "Deforestation has serious effects on the environment." Choose the best concluding sentence.', ['To sum up, cutting down forests has serious consequences for animals and the climate.', 'Forests are green.', 'In addition, trees are tall.', 'However, wood is useful.'], 'It summarizes with new words: consequences = effects.'),
  M('Topic sentence: "Camels are perfect animals for life in the desert." Choose the best concluding sentence.', ['Overall, camels are perfectly suited to desert life.', 'Camels are big animals.', 'For instance, camels eat plants.', 'Secondly, camels have long legs.'], 'Overall + the same idea in new words.'),
  M('Which concluding sentence adds a PREDICTION?', ['In conclusion, if we do not act now, many more species will disappear.', 'In conclusion, many species are endangered.', 'In conclusion, there are several threats to wildlife.', 'In conclusion, hunting is a threat.'], 'A prediction talks about the future: will disappear.'),
  M('Which concluding sentence adds an OPINION?', ['To sum up, I believe public transport is the best solution.', 'To sum up, there are two solutions.', 'To sum up, buses carry people.', 'To sum up, traffic is a problem.'], 'I believe … = an opinion.'),
  M('Which phrase should NOT start a concluding sentence?', ['Firstly,', 'In short,', 'To sum up,', 'Overall,'], 'Firstly starts the first point, not the conclusion.')
];
const LINK_Q = [
  M('___ advantage of solar power is that it is clean.', ['One', 'Firstly', 'However', 'Also'], 'One advantage of … is that …'),
  M('The main ___ of nuclear power is the risk of accidents.', ['drawback', 'benefit', 'advantage', 'solution'], 'Risk of accidents = a disadvantage = a drawback.'),
  M('Wind power is renewable. ___, it is free once the turbines are built.', ['In addition', 'However', 'In short', 'For example'], 'Adding a second advantage → In addition.'),
  M('Electric cars are clean. ___, they are expensive to buy.', ['However', 'In addition', 'Also', 'For instance'], 'A disadvantage after an advantage → However.'),
  M('___ benefit of the metro is that it is never stuck in traffic.', ['Another', 'Other', 'Others', 'An other'], 'Another + singular noun (benefit).'),
  M('The good thing ___ cycling is that it is healthy.', ['about', 'of to', 'for', 'with'], 'The good thing about … is that …'),
  M('There are many ___ and cons of living in a big city.', ['pros', 'pro', 'profits', 'plus'], 'pros and cons = advantages and disadvantages.'),
  { t: 'gap', q: 'One disadvantage is ___ buses are often late.', a: ['that'], why: 'One disadvantage is that + sentence.' }
];
const SPELL_Q = [
  M('Which word is spelled correctly?', ['because', 'becuase', 'pecause', 'becouse'], 'b-e-c-a-u-s-e. Tip: Big Elephants Can Always Understand Small Elephants.'),
  M('Which word is spelled correctly?', ['environment', 'enviroment', 'environement', 'envirenment'], 'environ + ment: do not forget the n before ment.'),
  M('Which word is spelled correctly?', ['government', 'goverment', 'governmant', 'govermment'], 'govern + ment.'),
  M('Which word is spelled correctly?', ['disadvantage', 'disadventage', 'desadvantage', 'disadvantge'], 'dis + advantage.'),
  M('Which word is spelled correctly?', ['unlimited', 'illimited', 'inlimited', 'unlimitted'], 'The negative prefix for limited is un-.'),
  M('Which word is spelled correctly?', ['pollution', 'polution', 'pollusion', 'pullution'], 'Double l: pollution.'),
  M('Which word is spelled correctly?', ['transport', 'transprot', 'tranport', 'trasport'], 'trans + port.'),
  M('Which word is spelled correctly?', ['necessary', 'neccessary', 'necesary', 'nessesary'], 'One c, double s: necessary.'),
  M('Which word is spelled correctly?', ['believe', 'beleive', 'belive', 'beleave'], 'i before e: believe.'),
  M('Which word is spelled correctly?', ['vehicle', 'vehical', 'vehicel', 'veicle'], 'v-e-h-i-c-l-e.')
];

const exercises = [
  { id: 'roles', emoji: '🎨', title: 'Colour the sentences', short: 'Give every sentence its job: topic, supporting, detail, concluding, or does not belong', intro: 'Tap a colour under each sentence.', q: ROLES_Q },
  { id: 'scatter', emoji: '🧩', title: 'Scattered sentences', short: 'Put the sentences in order to build the paragraph', intro: 'Look for the topic sentence first, then the linkers: First, In addition, However, In short.', q: SEQ_Q },
  { id: 'unity', emoji: '🚫', title: 'The odd one out (unity)', short: 'Find the sentence that does not belong', intro: 'Every sentence must talk about the main idea.', q: UNITY_Q },
  { id: 'topic', emoji: '🔵', title: 'Choose the topic sentence', short: 'Not too general, not too specific', intro: 'Read the paragraph, then choose the sentence that covers ALL the ideas.', q: TOPIC_Q },
  { id: 'conc', emoji: '🩷', title: 'Choose the concluding sentence', short: 'Restate, summarize, opinion or prediction', intro: 'The best concluding sentence says the main idea again with new words.', q: CONC_Q },
  { id: 'link', emoji: '🔗', title: 'Advantage and disadvantage language', short: 'One advantage, Another benefit, However, the main drawback', intro: 'The language of the exam paragraph.', q: LINK_Q },
  { id: 'spell', emoji: '🔤', title: 'Spelling check', short: 'The words that lose the most marks', intro: 'Choose the correct spelling.', q: SPELL_Q }
];

const FRAME = `Paragraph 1
One solution to ___ is to ___.
The main advantage is that ___.
For example, ___.
In addition, ___.
However, one disadvantage is that ___.
In short, ___.

Paragraph 2
Another solution is to ___.
One benefit of this is that ___.
For instance, ___.
Also, ___.
On the other hand, the main drawback is that ___.
Overall, ___.`;
const blankTable = (s1, s2) => [
  [`Topic sentence: solution 1 (${s1})`, '', B], ['Advantage 1', '', GR], ['Example / detail', '', OR], ['Advantage 2', '', GR], ['Disadvantage (However, …)', '', PU], ['Concluding sentence', '', PK],
  [`Topic sentence: solution 2 (${s2})`, '', B], ['Advantage 1', '', GR], ['Example / detail', '', OR], ['Advantage 2', '', GR], ['Disadvantage (On the other hand, …)', '', PU], ['Concluding sentence', '', PK]
];

const tasks = [
  { id: 'model', step: 'Step 1 · Study', emoji: '👀', title: 'Model: traffic congestion in Riyadh', short: 'See the full table and how it becomes two colour-coded paragraphs',
    task: 'Traffic congestion is a serious problem in many big cities. Write two paragraphs about two solutions. Give the advantages and disadvantages of each solution. (200 to 300 words)',
    how: 'Read the table row by row, then find the same row in the paragraph. Each row becomes one sentence.',
    table: [['Topic sentence: solution 1', 'improve public transport', B], ['Advantage 1', 'fewer people drive to work', GR], ['Example / detail', 'one metro train = hundreds of passengers', OR], ['Advantage 2', 'cheaper than owning a car', GR], ['Disadvantage', 'very expensive to build; takes years', PU], ['Concluding sentence', 'excellent long-term solution, but costly', PK],
      ['Topic sentence: solution 2', 'create safe cycle lanes', B], ['Advantage 1', 'no pollution', GR], ['Example / detail', 'a student cycles to university → less traffic, saves fuel money', OR], ['Advantage 2', 'good for health', GR], ['Disadvantage', 'extreme heat in summer', PU], ['Concluding sentence', 'practical for short journeys, not enough alone', PK]],
    model: [
      [['One solution to traffic congestion in Riyadh is to improve public transport.', 'topic'], ['The main advantage is that fewer people will need to drive to work.', 'support'], ['For example, one metro train can carry hundreds of passengers, so there will be fewer cars on the roads at rush hour.', 'detail'], ['In addition, buses and the metro are cheaper than owning a car, which helps students and families.', 'support'], ['However, one disadvantage is that new metro lines and bus lanes are very expensive to build, and they take many years to finish.', 'counter'], ['In short, better public transport is an excellent long-term solution, even though it requires a lot of money.', 'conc']],
      [['Another solution is to create safe cycle lanes across the city.', 'topic'], ['One benefit of cycling is that it does not pollute the air.', 'support'], ['For instance, if a student cycles to university instead of driving, she reduces traffic and saves money on fuel.', 'detail'], ['Cycling is also good for people\'s health.', 'support'], ['On the other hand, the main drawback is the extreme heat in summer, when it is too hot to cycle for most of the day.', 'counter'], ['Overall, cycle lanes are a practical solution for short journeys, but they will not solve the problem on their own.', 'conc']]
    ], wordsNote: 'About 200 words: 100 in each paragraph. Notice: every paragraph has the same six colours in the same order.' },
  { id: 'guided', step: 'Step 2 · Write from a table', emoji: '✍️', title: 'Students arrive late because of traffic', short: 'The table is ready. Turn each row into a sentence.',
    task: 'Many students arrive late at university because of traffic. Write two paragraphs about two solutions: a free university bus service, and online classes one day a week. Give the advantages and disadvantages of each. (200 to 300 words)',
    how: 'Every row of the table becomes one sentence. Use the sentence frame if you need help. Your work is saved on this phone.',
    table: [['Topic sentence: solution 1', 'a free university bus service', B], ['Advantage 1', 'students do not need to drive or pay for taxis', GR], ['Example / detail', 'one bus carries about 50 students → fewer cars near campus', OR], ['Advantage 2', 'students arrive together and on time', GR], ['Disadvantage', 'expensive for the university: drivers and fuel', PU], ['Concluding sentence', 'useful solution if the university can pay for it', PK],
      ['Topic sentence: solution 2', 'online classes one day a week', B], ['Advantage 1', 'no journey on that day → less traffic', GR], ['Example / detail', 'students save time and money on fuel', OR], ['Advantage 2', 'students can study from home comfortably', GR], ['Disadvantage', 'some students learn better in class; internet problems', PU], ['Concluding sentence', 'helpful, but only for one day a week', PK]],
    frame: FRAME, minWords: 200,
    answer: [
      [['One solution to this problem is a free university bus service.', 'topic'], ['The main advantage is that students do not need to drive or pay for taxis.', 'support'], ['For example, one bus can carry about fifty students, so there will be fewer cars near the campus in the morning.', 'detail'], ['In addition, students will arrive together and on time for their first class.', 'support'], ['However, one disadvantage is that a bus service is expensive for the university because it has to pay for drivers and fuel.', 'counter'], ['In short, a free bus service is a useful solution if the university can afford it.', 'conc']],
      [['Another solution is to have online classes one day a week.', 'topic'], ['One benefit of this is that students do not travel at all on that day, so there is less traffic.', 'support'], ['For instance, students can save time and money on fuel.', 'detail'], ['Also, they can study comfortably from home.', 'support'], ['On the other hand, the main drawback is that some students learn better in the classroom, and the internet sometimes does not work well.', 'counter'], ['Overall, online classes can help, but only for one day a week.', 'conc']]
    ] },
  { id: 'own', step: 'Step 3 · Plan and write', emoji: '🌟', title: 'Traffic in the city centre: car sharing and parking restrictions', short: 'Fill the table yourself, then write. Exam style.',
    task: 'Traffic congestion in the city centre is getting worse. Write two paragraphs about two solutions: car sharing, and parking restrictions in the city centre. Give the advantages and disadvantages of each solution. (200 to 300 words)',
    how: 'First fill the table with key words (not full sentences). Then write. Check the live checklist. Open the model only after you finish.',
    table: blankTable('car sharing', 'parking restrictions'), frame: FRAME, minWords: 200,
    answer: [
      [['One solution to traffic congestion in the city centre is car sharing.', 'topic'], ['The main advantage is that there will be fewer cars on the roads.', 'support'], ['For example, if four colleagues share one car, three cars stay at home every day.', 'detail'], ['In addition, people who share a car also share the cost of fuel and parking.', 'support'], ['However, one disadvantage is that it is not always convenient, because people must leave and return at the same time.', 'counter'], ['In short, car sharing is a cheap and practical way to reduce traffic, although it requires good planning.', 'conc']],
      [['Another solution is to introduce parking restrictions in the city centre.', 'topic'], ['One benefit of this is that fewer people will drive into the centre.', 'support'], ['For instance, if parking is limited and expensive, many commuters will consider using the metro or the bus instead.', 'detail'], ['Also, the streets will be safer and less crowded for pedestrians.', 'support'], ['On the other hand, the main drawback is that shops in the centre may lose customers who prefer to drive.', 'counter'], ['Overall, parking restrictions can reduce traffic, but they work best when there is good public transport.', 'conc']]
    ] },
  { id: 'own2', step: 'Step 3 · Extra practice', emoji: '🌿', title: 'Air pollution: more trees and solar power (Unit 2)', short: 'A new topic from Unit 2. Fill the table and write.',
    task: 'Air pollution is a serious environmental problem in big cities. Write two paragraphs about two solutions: planting more trees, and using renewable energy such as solar power. Give the advantages and disadvantages of each. (200 to 300 words)',
    how: 'Use Unit 2 words: absorb, carbon dioxide, greenhouse gases, fossil fuels, renewable energy, long-term, affordable.',
    table: blankTable('plant more trees', 'solar power'), frame: FRAME, minWords: 200,
    answer: [
      [['One solution to air pollution is to plant more trees in the city.', 'topic'], ['The main advantage is that trees absorb carbon dioxide from the atmosphere.', 'support'], ['For example, trees along busy roads can make the air cleaner for people who walk there.', 'detail'], ['In addition, trees give shade, so streets are cooler in summer.', 'support'], ['However, one disadvantage is that trees need a lot of water, and water is a limited resource in Saudi Arabia.', 'counter'], ['In short, planting trees is a natural solution, but the city must choose trees that need little water.', 'conc']],
      [['Another solution is to use renewable energy such as solar power.', 'topic'], ['One benefit of solar power is that it does not produce greenhouse gases.', 'support'], ['For instance, if power plants use the sun instead of fossil fuels, the air will be much cleaner.', 'detail'], ['Also, sunshine is free and unlimited in our country.', 'support'], ['On the other hand, the main drawback is that solar panels are expensive to install and need regular cleaning because of the dust.', 'counter'], ['Overall, solar power is an excellent long-term solution, even though it requires a large investment at the start.', 'conc']]
    ] },
  { id: 'own3', step: 'Step 3 · Extra practice', emoji: '🐾', title: 'Endangered animals: reserves and stricter laws (Unit 1)', short: 'A new topic from Unit 1. Fill the table and write.',
    task: 'Many animal species are endangered. Write two paragraphs about two solutions: creating protected wildlife reserves, and making stricter laws against hunting. Give the advantages and disadvantages of each. (200 to 300 words)',
    how: 'Use Unit 1 words: endangered, habitat, protect, survive, poacher, illegal, species, threat.',
    table: blankTable('wildlife reserves', 'stricter laws'), frame: FRAME, minWords: 200,
    answer: [
      [['One solution to protect endangered species is to create wildlife reserves.', 'topic'], ['The main advantage is that animals have a safe natural habitat.', 'support'], ['For example, the Arabian oryx survived thanks to breeding programmes and protected reserves.', 'detail'], ['In addition, scientists can study the animals and treat their diseases.', 'support'], ['However, one disadvantage is that reserves need a lot of land and money.', 'counter'], ['In short, wildlife reserves are one of the best ways to help endangered animals survive.', 'conc']],
      [['Another solution is to make stricter laws against hunting.', 'topic'], ['One benefit of this is that poachers will be afraid of large fines or prison.', 'support'], ['For instance, if selling ivory is illegal everywhere, fewer elephants will be killed.', 'detail'], ['Also, strict laws show people that wildlife is important.', 'support'], ['On the other hand, the main drawback is that laws do not work unless the police can control large areas.', 'counter'], ['Overall, stricter laws are necessary, but they must be combined with good protection on the ground.', 'conc']]
    ] }
];

function exam() {
  return [...pick(SEQ_Q, 2), ...pick(ROLES_Q, 1), ...pick(UNITY_Q, 2), ...pick(TOPIC_Q, 2), ...pick(CONC_Q, 2), ...pick(LINK_Q, 3), ...pick(SPELL_Q, 3)];
}
window.WRITING = { lessons, exercises, tasks, exam };
})();
