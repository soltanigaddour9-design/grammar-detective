// GRAMMAR GARAGE · ten toolboxes from Units 1 to 3 (Reading & Writing + Listening & Speaking)
(function () {
const M = (q, o, why) => ({ t: 'mcq', q, o, a: 0, why });
const G = (q, a, why, help) => ({ t: 'gap', q, a: [].concat(a), why, help });
const O = (tiles, why) => ({ t: 'order', tiles, a: tiles.join(' '), why });
const TF = (q, a, why) => ({ t: 'tf', q, a, why });
const B = '#2F6DB5', GR = '#2E8B57', OR = '#D97706', PK = '#C2185B', PU = '#7E4FA6', TE = '#0E8F8F';

const topics = [
{ id: 'comp', src: 'R&W U1 · L&S U3', emoji: '🏎️', title: 'Comparatives and superlatives', short: 'faster than, more dangerous than, by far the best, much cheaper',
  why: 'Comparison questions come in the grammar part of every PSE exam, and you need them in comparison paragraphs (Unit 1) and transport presentations (Unit 3).',
  learn: [
    { k: 'rule', title: 'The rule', html: `<table class="tbl"><tr><th>Adjective</th><th>Comparative</th><th>Superlative</th></tr>
      <tr><td>short: fast, cheap</td><td><span class="k-blue">fast<b>er</b> than</span></td><td><span class="k-pink">the fast<b>est</b></span></td></tr>
      <tr><td>one vowel + one consonant: big, hot</td><td><span class="k-blue">bi<b>gg</b>er</span></td><td><span class="k-pink">the bi<b>gg</b>est</span></td></tr>
      <tr><td>ends in -y: busy, easy</td><td><span class="k-blue">bus<b>ier</b></span></td><td><span class="k-pink">the bus<b>iest</b></span></td></tr>
      <tr><td>long: dangerous, expensive</td><td><span class="k-blue"><b>more / less</b> dangerous than</span></td><td><span class="k-pink">the <b>most / least</b> dangerous</span></td></tr>
      <tr><td>irregular: good, bad, far</td><td><span class="k-blue">better, worse, further</span></td><td><span class="k-pink">the best, the worst, the furthest</span></td></tr></table>` },
    { k: 'anim', type: 'race', tag: 'Watch the race', rows: [['🚲', 'fast'], ['🚌', 'faster than the bike'], ['🚇', 'the fastest of all']], note: 'One thing = fast. Two things = faster than. Three or more = the fastest.' },
    { k: 'way', tag: 'Make the difference big or small (Unit 3)', html: `<div class="ex"><span class="k-green">much / a lot / far / considerably</span> + comparative: The metro is <b>much faster</b> than the bus.</div>
      <div class="ex"><span class="k-orange">slightly / a little</span> + comparative: The bus is <b>slightly cheaper</b> than the metro.</div>
      <div class="ex"><span class="k-purple">by far / definitely</span> + the + superlative: Rush hour is <b>by far the worst</b> time to drive.</div>` },
    { k: 'mist', items: [['The metro is more faster than the bus.', 'The metro is much faster than the bus.'], ['Riyadh is bigger that Jeddah.', 'Riyadh is bigger than Jeddah.'], ['This road is very worse than that one.', 'This road is much worse than that one.'], ['It is the most cheapest ticket.', 'It is the cheapest ticket.']] }
  ],
  q: [
    M('At rush hour, the Riyadh Metro is ___ than a taxi.', ['much faster', 'more faster', 'much fast', 'the fastest'], 'fast is short, so fast → faster. Use much to make the difference bigger. Never say "more faster".'),
    M('The roads are ___ in the morning than at night.', ['busier', 'more busy', 'busyer', 'the busiest'], 'busy ends in -y: change y to i and add -er → busier.'),
    G('Grey squirrels are ___ (big) than red squirrels.', 'bigger', 'big = one vowel + one consonant, so double the g: bigger.'),
    M('Public transport is ___ expensive than owning a car.', ['less', 'fewer', 'least', 'lower'], 'less + long adjective + than. (fewer is for nouns: fewer cars.)'),
    M('Rush hour is ___ the worst time to drive in the city.', ['by far', 'very', 'much', 'more'], 'by far + the + superlative makes it very strong.'),
    M('The cheetah is ___ land animal in the world.', ['the fastest', 'the most fast', 'faster', 'the more fast'], 'More than two things (all land animals), so use the superlative: the fastest.'),
    G('Plastic bags are ___ (dangerous) for sea turtles than paper bags.', 'more dangerous', 'dangerous is a long adjective: more dangerous than.'),
    M('Air pollution in big cities is ___ worse than in small towns.', ['considerably', 'very', 'too', 'most'], 'considerably / much / a lot / far + comparative. We cannot say "very worse".'),
    M('Electric cars are ___ for the environment than petrol cars.', ['better', 'more good', 'gooder', 'best'], 'good is irregular: good → better → the best.'),
    O(['The metro', 'is', 'a lot', 'cheaper', 'than', 'a taxi.'], 'Subject + is + modifier (a lot) + comparative + than + the second thing.'),
    M('Which sentence is correct?', ['Camels are stronger than horses in the desert.', 'Camels are more stronger than horses in the desert.', 'Camels are strongest than horses in the desert.', 'Camels are stronger that horses in the desert.'], 'stronger + than. Never use more with -er, and never use "that" for comparison.'),
    G('Traffic is ___ (bad) on Thursday evening than on Friday morning.', 'worse', 'bad is irregular: bad → worse → the worst.'),
    M('Riyadh is ___ city in Saudi Arabia.', ['the largest', 'the most large', 'larger', 'the larger'], 'Comparing with all the cities, so use the + superlative: the largest.')
  ] },

{ id: 'order', src: 'R&W Unit 1', emoji: '🚂', title: 'Word order', short: 'Subject, verb, object, place, time; adjectives and frequency adverbs',
  why: 'Word order was one of the most common mistakes in the last assessment. Get it right and every sentence you write is clearer.',
  learn: [
    { k: 'anim', type: 'train', tag: 'The sentence train', items: [['Many tourists', 'Subject', B], ['visit', 'Verb', GR], ['the national park', 'Object', OR], ['in the north', 'Place', PU], ['every spring.', 'Time', PK]], note: 'The wagons always go in this order: WHO, DO, WHAT, WHERE, WHEN.' },
    { k: 'rule', title: 'Three golden rules', html: `<div class="ex">1. <span class="k-blue">Subject</span> + <span class="k-green">verb</span> + <span class="k-orange">object</span> + <span class="k-purple">place</span> + <span class="k-pink">time</span>. We never put the object after the place: ✗ <i>visit in the north the park</i>.</div>
      <div class="ex">2. <b>Adjective before the noun</b>: an <u>endangered</u> species, a <u>serious</u> problem. Opinion before colour or size: a <u>beautiful white</u> bird.</div>
      <div class="ex">3. <b>Frequency adverbs</b> (always, usually, often, never) go <u>before the main verb</u> but <u>after be</u>: She <u>always</u> takes the metro. / Camels are <u>usually</u> calm.</div>` },
    { k: 'way', tag: 'Questions', html: `<div class="ex"><span class="k-teal">Question word</span> + <span class="k-green">be / do / does</span> + <span class="k-blue">subject</span> + verb? → <b>Why are</b> tigers endangered? <b>Where do</b> oryx live?</div>` },
    { k: 'mist', items: [['She takes always the bus.', 'She always takes the bus.'], ['I go every day to university.', 'I go to university every day.'], ['It is a species endangered.', 'It is an endangered species.'], ['Why tigers are endangered?', 'Why are tigers endangered?']] }
  ],
  q: [
    O(['Many tourists', 'visit', 'the national park', 'every year.'], 'Subject + verb + object + time.'),
    O(['Poachers', 'kill', 'elephants', 'for their ivory.'], 'Subject + verb + object + reason.'),
    O(['Endangered animals', 'need', 'our protection', 'now.'], 'The adjective (endangered) goes before the noun (animals). Time goes at the end.'),
    O(['Grey squirrels', 'often', 'carry', 'a fatal disease.'], 'Frequency adverbs (often) go before the main verb.'),
    O(['Camels', 'are', 'usually', 'very calm', 'animals.'], 'With the verb be, the frequency adverb comes after it: are usually.'),
    O(['We', 'should', 'protect', 'native species', 'in Saudi Arabia.'], 'Subject + modal + verb + object + place.'),
    M('Which sentence has the correct word order?', ['She always takes the metro to university.', 'She takes always the metro to university.', 'Always she takes the metro university to.', 'She takes the metro always to university.'], 'always goes before the main verb (takes).'),
    M('Which sentence has the correct word order?', ['Scientists studied the squirrels carefully last year.', 'Scientists studied carefully the squirrels last year.', 'Last year scientists the squirrels studied carefully.', 'Scientists studied the squirrels last year carefully.'], 'Verb + object first (studied the squirrels), then how (carefully), then when (last year).'),
    M('Choose the correct phrase: "I saw ___ in the reserve."', ['a beautiful white bird', 'a white beautiful bird', 'a bird beautiful white', 'a beautiful bird white'], 'Adjectives go before the noun, and opinion (beautiful) comes before colour (white).'),
    O(['Why', 'are', 'tigers', 'endangered?'], 'Question word + be + subject + adjective.'),
    M('Choose the correct sentence.', ['I go to the gym three times a week.', 'I go three times a week to the gym.', 'Three times a week go I to the gym.', 'I go to three times a week the gym.'], 'Place (to the gym) comes before time (three times a week).'),
    O(['The government', 'introduced', 'a new law', 'last month.'], 'Subject + verb + object + time.'),
    O(['Elephants', 'do not', 'live', 'in Saudi Arabia.'], 'Subject + do not + verb + place.')
  ] },

{ id: 'linkers', src: 'R&W Unit 1', emoji: '🧩', title: 'and, but, or, whereas, both … and, neither … nor', short: 'Compare and contrast two things in one sentence',
  why: 'Unit 1 writing is a comparison and contrast essay. These words join your ideas and show if things are similar or different.',
  learn: [
    { k: 'anim', type: 'puzzle', tag: 'The pieces join', items: [['Red squirrels are native', 'whereas', 'grey squirrels are not.', PU], ['Both tigers', 'and', 'elephants are endangered.', GR], ['Neither the bus', 'nor', 'the train is cheap.', PK]], note: 'whereas = a difference. both … and = the same (plural verb). neither … nor = not A and not B (singular verb with two singular nouns).' },
    { k: 'rule', title: 'Similar or different?', html: `<table class="tbl"><tr><th>Word</th><th>Use</th><th>Example</th></tr>
      <tr><td><span class="k-green">and</span></td><td>add a similar idea</td><td>Lions and tigers are big cats.</td></tr>
      <tr><td><span class="k-green">both … and</span></td><td>A is true, B is true (plural verb)</td><td><b>Both</b> camels <b>and</b> horses <b>are</b> used for work.</td></tr>
      <tr><td><span class="k-pink">neither … nor</span></td><td>A is not true, B is not true (singular verb)</td><td><b>Neither</b> the bus <b>nor</b> the train <b>is</b> free.</td></tr>
      <tr><td><span class="k-orange">but</span></td><td>a contrast</td><td>Sharks look dangerous, <b>but</b> most do not attack people.</td></tr>
      <tr><td><span class="k-purple">whereas</span></td><td>compare two different facts</td><td>Elephants eat plants, <b>whereas</b> lions eat meat.</td></tr>
      <tr><td><span class="k-blue">or</span></td><td>a choice</td><td>We can take the bus <b>or</b> the metro.</td></tr></table>` },
    { k: 'mist', items: [['Neither the bus or the train is cheap.', 'Neither the bus nor the train is cheap.'], ['Both camels and horses is strong.', 'Both camels and horses are strong.'], ['Neither the tiger nor the lion are not native.', 'Neither the tiger nor the lion is native.']] }
  ],
  q: [
    M('Red squirrels are native to Britain, ___ grey squirrels come from North America.', ['whereas', 'and', 'or', 'both'], 'whereas shows a difference between two facts.'),
    M('___ tigers and elephants are endangered.', ['Both', 'Neither', 'Whereas', 'Or'], 'both … and = the two things are the same.'),
    M('Neither the red squirrel nor the grey squirrel ___ in Saudi Arabia.', ['lives', 'live', 'are living', 'do live'], 'neither … nor with two singular nouns → singular verb (lives).'),
    M('Both camels and horses ___ used for work.', ['are', 'is', 'was', 'be'], 'both … and → plural verb (are).'),
    M('Do you want to study in the library ___ at home?', ['or', 'and', 'but', 'whereas'], 'or = a choice.'),
    M('Sharks look dangerous, ___ most of them do not attack people.', ['but', 'or', 'and', 'both'], 'but = a contrast (the opposite of what you expect).'),
    G('___ the polar bear nor the penguin lives in the desert.', 'neither', 'nor goes with neither.'),
    M('The great white shark is huge, ___ the dwarf lanternshark is only about 20 cm long.', ['whereas', 'both', 'neither', 'or'], 'whereas compares two different facts.'),
    M('Which sentence is correct?', ['Neither the bus nor the train is cheap.', 'Neither the bus or the train is cheap.', 'Neither the bus nor the train is not cheap.', 'Both the bus nor the train are cheap.'], 'neither goes with nor, and neither is already negative, so no "not".'),
    O(['Both', 'the bus', 'and', 'the metro', 'are', 'cheap.'], 'Both + A + and + B + plural verb.'),
    M('Elephants eat plants, ___ lions eat meat.', ['whereas', 'both', 'neither', 'or'], 'Two different facts → whereas.'),
    M('My sister likes reading ___ writing. She enjoys both.', ['and', 'or', 'nor', 'whereas'], 'and adds a similar idea.')
  ] },

{ id: 'contrast', src: 'L&S Unit 1', emoji: '⚖️', title: 'However, yet, even though, on the contrary', short: 'Show contrast in debates and paragraphs, with the right punctuation',
  why: 'Contrast words help you give two sides of an argument, and punctuation with these words often appears in the exam.',
  learn: [
    { k: 'rule', title: 'Where do they go?', html: `<div class="ex"><span class="k-blue">However,</span> starts a <b>new sentence</b> + comma: Zoos protect animals. <b>However,</b> some animals suffer.</div>
      <div class="ex"><span class="k-green">yet / and yet</span> joins two parts of <b>one sentence</b>, like but: The law is strict, <b>yet</b> poachers still hunt.</div>
      <div class="ex"><span class="k-orange">Even though</span> + a full clause. No comma after even though: <b>Even though</b> camels are strong, they need rest.</div>
      <div class="ex"><span class="k-pink">On the contrary,</span> comes after a <b>negative</b> sentence and a full stop. It says the opposite is true: Elephants are not dangerous. <b>On the contrary,</b> they are gentle.</div>` },
    { k: 'anim', type: 'signs', tag: 'Four road signs', items: [['🛑', 'However,', 'new sentence + comma', B], ['🔗', 'yet', 'inside one sentence', GR], ['🌗', 'Even though', 'no comma after it', OR], ['🔄', 'On the contrary,', 'after a negative, the opposite is true', PK]] },
    { k: 'mist', items: [['Even though, it is illegal people hunt rhinos.', 'Even though it is illegal, people hunt rhinos.'], ['Zoos are useful, however, animals suffer.', 'Zoos are useful. However, animals suffer.'], ['Cats are friendly. On the contrary, dogs are friendly too.', 'Cats are friendly. Dogs are friendly too.']] }
  ],
  q: [
    M('Zoos protect some animals. ___, many animals suffer in small cages.', ['However', 'On the contrary', 'Even though', 'Because'], 'A new sentence with a contrast → However + comma.'),
    M('___ camels can survive without water for days, they still need care.', ['Even though', 'However', 'On the contrary', 'Yet'], 'Even though + clause, then a comma, then the main clause.'),
    M('Working animals are not always treated badly. ___, many owners take very good care of them.', ['On the contrary', 'Even though', 'Yet', 'Whereas'], 'After a negative sentence, On the contrary says the opposite is true.'),
    M('The law is strict, ___ poachers still hunt elephants.', ['yet', 'on the contrary', 'even though', 'however'], 'yet joins two contrasting parts inside one sentence, like but.'),
    M('Which sentence is correct?', ['Even though the area is protected, people still hunt there.', 'Even though, the area is protected people still hunt there.', 'Even though the area is protected people, still hunt there.', 'Even, though the area is protected, people still hunt there.'], 'No comma after even though. The comma comes at the end of the first clause.'),
    M('Which sentence is correct?', ['Elephants are not dangerous. On the contrary, they are gentle.', 'Elephants are not dangerous, on the contrary they are gentle.', 'Elephants are not dangerous on the contrary, they are gentle.', 'On the contrary elephants are not dangerous they are gentle.'], 'On the contrary comes after a full stop and is followed by a comma.'),
    G('Tigers are strong. ___ they are endangered. (one word + comma)', ['however,', 'however'], 'However + comma at the start of a new sentence.'),
    M('"Even though" has a similar meaning to…', ['although', 'because', 'so', 'for example'], 'even though = although (but stronger).'),
    M('Some people think animals cannot feel pain. ___, scientists have shown that they can.', ['On the contrary', 'Even though', 'Yet', 'Such as'], 'After a wrong or negative idea, On the contrary gives the opposite, true idea.'),
    M('Horses are used for work in many countries, ___ some people think this is cruel.', ['and yet', 'on the contrary', 'such as', 'however'], 'and yet joins the two contrasting parts of one sentence.'),
    O(['Even though', 'it is illegal,', 'people', 'still hunt', 'rhinos.'], 'Even though + clause + comma + main clause.'),
    M('Which word can join two parts of ONE sentence, like but?', ['yet', 'However', 'On the contrary', 'Furthermore'], 'yet works inside one sentence. However and On the contrary start a new sentence.')
  ] },

{ id: 'modals', src: 'L&S Unit 1', emoji: '🚦', title: 'must, have to, don\'t have to, mustn\'t, should', short: 'Obligation, no obligation, prohibition and advice',
  why: 'You use these in the animal welfare debate (Unit 1), and the exam checks if you know the difference between mustn\'t and don\'t have to.',
  learn: [
    { k: 'anim', type: 'signs', tag: 'Rules on the road', items: [['✅', 'must / have to', 'it is necessary', GR], ['🚫', 'mustn\'t', 'it is not allowed', PK], ['🤷‍♀️', 'don\'t have to / don\'t need to', 'it is not necessary (you can if you want)', B], ['💡', 'should / shouldn\'t', 'advice: a good or bad idea', OR]] },
    { k: 'rule', title: 'Form', html: `<div class="ex">must / mustn't / should + <b>base verb</b>: You <b>must wear</b> a seat belt. (✗ must to wear)</div>
      <div class="ex">have to / has to + <b>base verb</b>: She <b>has to show</b> her ID. (✗ she have to)</div>
      <div class="ex">don't / doesn't have to: He <b>doesn't have to pay</b>. The ticket is free.</div>` },
    { k: 'way', tag: 'The big trap', html: `<div class="ex"><span class="k-pink">You mustn't feed the animals.</span> = It is NOT ALLOWED. 🚫</div><div class="ex"><span class="k-blue">You don't have to feed the animals.</span> = It is NOT NECESSARY. The zookeeper does it. 🤷‍♀️</div>` },
    { k: 'mist', items: [['You must to wear a uniform.', 'You must wear a uniform.'], ['She have to study tonight.', 'She has to study tonight.'], ['You don\'t have to smoke here. It is illegal.', 'You mustn\'t smoke here. It is illegal.']] }
  ],
  q: [
    M('In the library, you ___ eat or drink. It is against the rules.', ['mustn\'t', 'don\'t have to', 'should', 'must'], 'Against the rules = not allowed → mustn\'t.'),
    M('Tomorrow is a holiday, so we ___ go to class.', ['don\'t have to', 'mustn\'t', 'must', 'have to'], 'Not necessary → don\'t have to.'),
    M('All students ___ show their ID card at the gate.', ['must', 'mustn\'t', 'don\'t need to', 'shouldn\'t'], 'It is necessary (a rule) → must.'),
    M('You look tired. You ___ go to bed early.', ['should', 'mustn\'t', 'don\'t have to', 'have'], 'Advice → should.'),
    M('"You don\'t have to bring a dictionary." This means…', ['You can bring one, but it is not necessary.', 'You are not allowed to bring one.', 'You must bring one.', 'It is a very good idea to bring one.'], 'don\'t have to = not necessary.'),
    M('"You mustn\'t feed the animals." This means…', ['It is not allowed.', 'It is not necessary.', 'It is a good idea.', 'It is possible.'], 'mustn\'t = prohibition (not allowed).'),
    G('Zoos ___ give animals enough space. (obligation: must or have to)', ['must', 'have to'], 'Obligation → must or have to + base verb.'),
    M('People ___ abandon their pets. It is cruel.', ['shouldn\'t', 'don\'t need to', 'don\'t have to', 'needn\'t to'], 'Advice not to do something bad → shouldn\'t.'),
    M('Which sentence is correct?', ['She has to wear a uniform.', 'She have to wear a uniform.', 'She has to wears a uniform.', 'She must to wear a uniform.'], 'she has to + base verb. must has no "to".'),
    M('Visitors ___ touch the turtle eggs. They are very fragile.', ['mustn\'t', 'don\'t have to', 'needn\'t', 'have to'], 'It is not allowed → mustn\'t.'),
    M('The tickets are free, so you ___ pay.', ['don\'t need to', 'mustn\'t', 'must', 'should'], 'Free = not necessary to pay → don\'t need to.'),
    M('Which sentence gives ADVICE?', ['You should visit the wildlife reserve.', 'You must show your passport.', 'You mustn\'t park here.', 'You don\'t have to come.'], 'should = advice.')
  ] },

{ id: 'cause', src: 'R&W Unit 2', emoji: '🁢', title: 'Cause and effect', short: 'cause, lead to, result in, be caused by, due to, because / because of',
  why: 'Unit 2 writing is a cause and effect essay, and the exam often asks you to match cause and effect halves.',
  learn: [
    { k: 'anim', type: 'domino', tag: 'One thing pushes the next', items: [['Cars burn fuel', B], ['more CO₂', GR], ['global warming', OR], ['ice melts', PK]], note: 'Each domino is a cause, and the next one is its effect.' },
    { k: 'rule', title: 'Which comes first?', html: `<div class="ex"><b>CAUSE first:</b> <span class="k-blue">Burning fossil fuels</span> <span class="k-green">causes / leads to / results in</span> <span class="k-orange">global warming</span>.</div>
      <div class="ex"><b>EFFECT first:</b> <span class="k-orange">Global warming</span> <span class="k-pink">is caused by / is due to / is the result of</span> <span class="k-blue">burning fossil fuels</span>.</div>` },
    { k: 'way', tag: 'because or because of?', html: `<div class="ex"><span class="k-blue">because</span> + subject + verb: Many animals are in danger <b>because people hunt them</b>.</div><div class="ex"><span class="k-purple">because of / due to</span> + noun: Many animals are in danger <b>because of hunting</b>.</div>` },
    { k: 'mist', items: [['Pollution is caused of cars.', 'Pollution is caused by cars.'], ['Logging results to erosion.', 'Logging results in erosion.'], ['Many animals died because of it was hot.', 'Many animals died because it was hot.'], ['The flood was due to it rained.', 'The flood was due to the heavy rain.']] }
  ],
  q: [
    M('Burning fossil fuels ___ global warming.', ['causes', 'is caused by', 'is due to', 'because of'], 'The cause comes first, so use causes.'),
    M('Global warming is ___ burning fossil fuels.', ['caused by', 'causes', 'leads to', 'results in'], 'The effect comes first, so use is caused by.'),
    M('Deforestation ___ the loss of many habitats.', ['leads to', 'is the result of', 'is caused by', 'due to'], 'Cause first (deforestation) → leads to.'),
    M('Many animals are in danger ___ hunting.', ['because of', 'because', 'cause', 'result in'], 'hunting is a noun → because of.'),
    M('Many animals are in danger ___ people hunt them.', ['because', 'because of', 'due to', 'the result of'], 'people hunt them = subject + verb → because.'),
    M('Floods are often ___ heavy rain.', ['the result of', 'result in', 'lead to', 'because'], 'Effect first (floods) → are the result of.'),
    G('The forest fire was caused ___ a cigarette.', 'by', 'be caused by.'),
    M('Logging results ___ soil erosion.', ['in', 'to', 'by', 'of'], 'result in + effect.'),
    M('Rising sea levels are ___ melting ice.', ['due to', 'lead to', 'cause', 'result in'], 'Effect first (rising sea levels) → are due to.'),
    { t: 'match', q: 'Match the two halves of each sentence.', pairs: [['Building a new metro line leads to', 'less traffic on the roads.'], ['Traffic congestion is caused by', 'too many cars on the road.'], ['The red squirrel is endangered due to', 'a disease carried by grey squirrels.'], ['Burning coal results in', 'more carbon dioxide in the atmosphere.']], why: 'Look at the verb: leads to / results in are followed by the effect; is caused by / due to are followed by the cause.' },
    M('Which sentence is correct?', ['The flood was due to the heavy rain.', 'The flood was due to it rained heavily.', 'The flood was because of it rained.', 'The flood was because the heavy rain.'], 'due to + noun (the heavy rain).'),
    M('Pollution in the river is the result ___ chemicals from factories.', ['of', 'in', 'to', 'by'], 'be the result of.')
  ] },

{ id: 'future', src: 'L&S Unit 2', emoji: '🔮', title: 'Future possibility: will, may, might, could', short: 'How sure are you? 100%, 50% or 0%',
  why: 'The environment debate in Unit 2 is about the future. The exam asks you to choose the modal that shows how certain the speaker is.',
  learn: [
    { k: 'anim', type: 'future', tag: 'The certainty meter', rows: [['will', 100, GR, 'I am sure'], ['will probably', 80, TE, 'I am almost sure'], ['may / might / could', 50, OR, 'it is possible'], ['probably won\'t', 20, PU, 'I don\'t think so'], ['won\'t', 3, PK, 'I am sure it will NOT happen']], note: 'All of them + base verb: will rise, might rise, could rise.' },
    { k: 'rule', title: 'Form', html: `<div class="ex">will / may / might / could + <b>base verb</b>: Sea levels <b>will rise</b>. Solar power <b>may become</b> cheaper.</div><div class="ex">Negative: <b>won't</b>, <b>may not</b>, <b>might not</b>.</div><div class="ex">Word order: will <b>probably</b> (positive) but <b>probably</b> won't (negative).</div>` },
    { k: 'mist', items: [['It might rains tomorrow.', 'It might rain tomorrow.'], ['Oil won\'t probably last forever.', 'Oil probably won\'t last forever.'], ['Wind power could to help.', 'Wind power could help.']] }
  ],
  q: [
    M('Scientists are sure. The sea level ___ rise.', ['will', 'might', 'could', 'may not'], 'Sure = 100% → will.'),
    M('I am not sure, but it ___ rain tomorrow.', ['might', 'will', 'won\'t', 'must'], 'Not sure = possible → might.'),
    M('Wind farms ___ be the answer to the energy crisis, but we are not sure yet.', ['could', 'will', 'won\'t', 'must'], 'Possible but not sure → could.'),
    M('"Solar power may become cheaper." This means…', ['It is possible.', 'It is certain.', 'It is impossible.', 'It is necessary.'], 'may = possible.'),
    M('Which sentence is correct?', ['Nuclear power might be dangerous.', 'Nuclear power might is dangerous.', 'Nuclear power might to be dangerous.', 'Nuclear power mights be dangerous.'], 'might + base verb (be). No -s, no to.'),
    M('Fossil fuels ___ last forever.', ['probably won\'t', 'won\'t probably', 'will not to', 'probably will not to'], 'Negative: probably comes before won\'t.'),
    M('I am certain: the ice ___ melt if temperatures keep rising.', ['will', 'might', 'may', 'could'], 'Certain → will.'),
    G('Write the negative of will (one word with an apostrophe or two words).', ['won\'t', 'will not'], 'will → won\'t / will not.'),
    M('There ___ be enough water in 2050. Experts are worried.', ['may not', 'will to', 'mights not', 'not may'], 'may not + base verb = it is possible that this will not happen.'),
    M('Which sentence shows the speaker is LEAST sure?', ['Hydroponic farms could feed the world.', 'Hydroponic farms will feed the world.', 'Hydroponic farms will definitely feed the world.', 'Hydroponic farms will certainly feed the world.'], 'could = possible. The others are certain.'),
    TF('"May", "might" and "could" have a similar meaning: it is possible, but not certain.', true, 'All three = about 50% sure.'),
    M('Renewable energy ___ more popular because it is getting cheaper.', ['will probably become', 'probably becomes will', 'will probably becomes', 'probably will to become'], 'will probably + base verb.')
  ] },

{ id: 'suggest', src: 'R&W U3 · L&S U3', emoji: '💡', title: 'Suggestions and recommendations', short: 'should, It is important to, Cycling is a good idea, I\'d suggest, it would be better if',
  why: 'Unit 3 is about solving transport problems. You need these to give solutions in writing and in your presentation.',
  learn: [
    { k: 'rule', title: 'Five ways to suggest a solution', html: `<div class="ex">1. <span class="k-blue">should / ought to</span> + base verb: The city <b>should build</b> more cycle lanes.</div>
      <div class="ex">2. <span class="k-green">It is important to</span> + base verb: <b>It is important to reduce</b> traffic.</div>
      <div class="ex">3. <span class="k-orange">-ing subject</span> + is a good idea: <b>Sharing cars is</b> a good idea.</div>
      <div class="ex">4. <span class="k-purple">I'd suggest (that)</span> + subject + base verb: <b>I'd suggest that people use</b> the metro.</div>
      <div class="ex">5. <span class="k-pink">I think it would be better if</span> + past simple: <b>It would be better if</b> more people <b>cycled</b>.</div>` },
    { k: 'way', tag: 'More phrases for your presentation', html: `<div class="ex">The best thing would be <b>to</b> create a car-sharing app.</div><div class="ex">I'd like <b>to see</b> more trees along the roads.</div><div class="ex">In my opinion, we <b>should</b> make buses free for students.</div>` },
    { k: 'anim', type: 'signs', tag: 'Pick your sign', items: [['🛣️', 'should + verb', 'The city should build…', B], ['⭐', 'It is important to + verb', 'It is important to plant…', GR], ['🚲', 'Cycling is a good idea', '-ing word as the subject', OR], ['🕰️', 'It would be better if + past', '…if people used buses', PK]] },
    { k: 'mist', items: [['It is important reduce traffic.', 'It is important to reduce traffic.'], ['Share cars is a good idea.', 'Sharing cars is a good idea.'], ['It would be better if people use buses.', 'It would be better if people used buses.'], ['The city should to build lanes.', 'The city should build lanes.']] }
  ],
  q: [
    M('I\'d suggest that people ___ the metro.', ['use', 'to use', 'using', 'used to'], 'I\'d suggest (that) + subject + base verb.'),
    M('I think it would be better if people ___ public transport.', ['used', 'use', 'will use', 'using'], 'It would be better if + past simple.'),
    M('___ to work is a good idea.', ['Cycling', 'Cycle', 'To cycling', 'Cycled'], '-ing word as the subject: Cycling … is a good idea.'),
    M('It is important ___ more trees in the city.', ['to plant', 'planting', 'plant', 'planted'], 'It is important to + base verb.'),
    M('The government ___ traffic in the city centre.', ['ought to reduce', 'ought reduce', 'ought to reducing', 'ought reducing'], 'ought to + base verb.'),
    M('The best thing would be ___ a car-sharing app.', ['to create', 'to creating', 'create to', 'for create'], 'The best thing would be to + base verb.'),
    M('Which sentence is a RECOMMENDATION?', ['In my opinion, we should build more bus lanes.', 'The bus is late every day.', 'Traffic is worse in the evening.', 'There are many cars in Riyadh.'], 'should + verb gives a recommendation. The others are facts or problems.'),
    G('Universities should ___ (offer) free bus tickets to students.', 'offer', 'should + base verb.'),
    M('I\'d like ___ more trees along the roads.', ['to see', 'see', 'seeing', 'saw'], 'I\'d like + to + base verb.'),
    M('Which sentence is correct?', ['Sharing cars is a good idea.', 'Share cars is a good idea.', 'To sharing cars is a good idea.', 'Shared cars are a good idea for.'], '-ing subject + is a good idea.'),
    M('Drivers ___ use their phones while driving.', ['shouldn\'t', 'should', 'ought', 'would better'], 'Advice not to do something → shouldn\'t.'),
    M('I think it would be better if the metro ___ later at night.', ['ran', 'runs', 'will run', 'running'], 'would be better if + past simple: run → ran.')
  ] },

{ id: 'cond', src: 'R&W Unit 3', emoji: '🚶‍♀️', title: 'First conditional, if … not and unless', short: 'If + present, will + verb. Unless = if not.',
  why: 'Conditionals and unless were the most common mistakes in the last assessment. You use them to explain what will happen if a solution is chosen.',
  learn: [
    { k: 'anim', type: 'cond', tag: 'Walk from now to the future', left: 'If the city <b>builds</b> a metro…', right: '…traffic <b>will decrease</b>.', note: 'The if-part is NOW (present simple). The result is the FUTURE (will + base verb). Never put will in the if-part.' },
    { k: 'rule', title: 'Form and comma', html: `<div class="ex"><span class="k-blue">If + present simple</span><b>,</b> <span class="k-green">will / won't + base verb</span>: If people <b>use</b> buses<b>,</b> there <b>will be</b> less pollution.</div>
      <div class="ex"><span class="k-green">will + verb</span> <span class="k-blue">if + present</span> (no comma): There <b>will be</b> less pollution <b>if</b> people <b>use</b> buses.</div>` },
    { k: 'anim', type: 'unless', tag: 'The unless switch', items: ['If we <b>don\'t</b> act now, the problem will get worse. = <b>Unless</b> we act now, the problem will get worse.', 'You won\'t pass <b>if</b> you <b>don\'t</b> study. = You won\'t pass <b>unless</b> you study.', 'unless + POSITIVE verb. ✗ Unless we don\'t act'] },
    { k: 'mist', items: [['If people will use buses, traffic will decrease.', 'If people use buses, traffic will decrease.'], ['Unless we don\'t act, it will get worse.', 'Unless we act, it will get worse.'], ['If it rains we will stay home.', 'If it rains, we will stay home.'], ['If the price goes up, people drives less.', 'If the price goes up, people will drive less.']] }
  ],
  q: [
    M('If the city builds a metro, traffic ___.', ['will decrease', 'decreases will', 'would decreased', 'decrease'], 'If + present, will + base verb.'),
    M('If people ___ public transport, there will be less pollution.', ['use', 'will use', 'used', 'using'], 'The if-part takes the present simple, never will.'),
    M('___ we protect the forests, many species will disappear.', ['Unless', 'If', 'Because', 'When'], 'Unless = if … not: If we don\'t protect the forests, species will disappear.'),
    M('Unless you leave now, you ___ late.', ['will be', 'won\'t be', 'are', 'be'], 'Unless you leave = if you don\'t leave → you will be late.'),
    M('"Unless it rains, we will walk." This means…', ['If it doesn\'t rain, we will walk.', 'If it rains, we will walk.', 'Because it rains, we will walk.', 'When it rains, we will walk.'], 'unless = if … not.'),
    M('Which sentence is correct?', ['If the price of fuel goes up, people will drive less.', 'If the price of fuel goes up people, will drive less.', 'If, the price of fuel goes up people will drive less.', 'If the price of fuel will go up, people will drive less.'], 'Comma after the if-clause when it comes first, and no will in the if-clause.'),
    M('Which sentence is correct?', ['Unless we act now, the problem will get worse.', 'Unless we don\'t act now, the problem will get worse.', 'Unless we will act now, the problem will get worse.', 'Unless we act now the problem gets worse will.'], 'unless + positive present verb, then a comma, then will.'),
    G('Rewrite: "If you don\'t study, you won\'t pass." → "___ you study, you won\'t pass."', 'unless', 'If … not = unless.'),
    M('People will drive less if the government ___ fuel duty.', ['increases', 'will increase', 'increase', 'increased'], 'if + present simple (the government increases).'),
    O(['If', 'we', 'reduce', 'traffic,', 'the air', 'will be', 'cleaner.'], 'If + present, comma, will + verb.'),
    M('The roads will be safer ___ drivers respect the speed limit.', ['if', 'unless', 'because of', 'due to'], 'The roads will be safer IF drivers respect the limit (positive condition).'),
    TF('When the if-clause comes first, we put a comma after it: "If it rains, I will stay home."', true, 'If-clause first → comma. Result first → no comma.'),
    M('If you ___ to class late again, you will lose marks.', ['come', 'will come', 'came', 'coming'], 'if + present simple.')
  ] },

{ id: 'signpost', src: 'L&S U1 · U2', emoji: '🪧', title: 'Signposts, examples and counter-arguments', short: 'First of all, In addition, On the other hand, such as, It is often said that…',
  why: 'Signposts organize your presentation and help you follow a lecture in the listening exam.',
  learn: [
    { k: 'anim', type: 'train', tag: 'The presentation train', items: [['First of all,', 'Start', B], ['In addition, / On top of that,', 'Add', GR], ['For example, / such as', 'Example', OR], ['On the other hand,', 'Contrast', PU], ['In short, / Overall,', 'End', PK]], note: 'Use one signpost for every new step. Listeners (and examiners) love it.' },
    { k: 'rule', title: 'Examples and general beliefs', html: `<div class="ex"><span class="k-orange">such as</span> + noun (inside the sentence): Many animals, <b>such as</b> tigers and elephants, are endangered.</div>
      <div class="ex"><span class="k-orange">For example,</span> + a full sentence: Some animals are clever. <b>For example,</b> dolphins can recognize themselves in a mirror.</div>
      <div class="ex"><span class="k-teal">It is often said that / It is believed that / It is widely known that</span> + sentence: <b>It is believed that</b> camels can live for 40 years.</div>` },
    { k: 'way', tag: 'Counter-arguments in a debate', html: `<div class="ex"><span class="k-purple">It may be true that</span> solar panels are expensive, <b>but</b> they save money in the long term.</div><div class="ex"><span class="k-purple">That's completely true, but</span> we also need to think about the cost.</div><div class="ex">Nuclear power is cheap. <span class="k-purple">And yet</span>, it can be very dangerous.</div>` },
    { k: 'mist', items: [['Many animals, for example tigers, … (with no full sentence)', 'Many animals, such as tigers, are endangered.'], ['It believes that camels live 40 years.', 'It is believed that camels live 40 years.'], ['In conclusion, I will talk about traffic. (at the start)', 'First of all, I will talk about traffic.']] }
  ],
  q: [
    M('At the start of a presentation: "___, I will talk about the causes of traffic."', ['First of all', 'In conclusion', 'On the other hand', 'Such as'], 'First of all starts the first point.'),
    M('Wind power is clean. ___, it is renewable.', ['In addition', 'On the other hand', 'In short', 'For example'], 'Adding another advantage → In addition.'),
    M('Nuclear power is cheap. ___, it can be very dangerous.', ['On the other hand', 'In addition', 'On top of that', 'First of all'], 'A contrast → On the other hand.'),
    M('___, renewable energy is the best choice for the future.', ['In short', 'For example', 'Such as', 'First of all'], 'A short summary at the end → In short.'),
    M('Many animals, ___ tigers and elephants, are endangered.', ['such as', 'in addition', 'in short', 'on the other hand'], 'such as + nouns inside the sentence.'),
    M('___ that camels can live for 40 years.', ['It is believed', 'It believes', 'It is believe', 'Believing'], 'It is believed that + sentence.'),
    M('It is widely ___ that exercise is good for your health.', ['known', 'know', 'knowing', 'knew'], 'It is widely known that.'),
    M('Some animals are very intelligent. ___, dolphins can recognize themselves in a mirror.', ['For example', 'Such as', 'In short', 'On the contrary'], 'For example + a full sentence.'),
    M('It may be true that solar panels are expensive, ___ they save money in the long term.', ['but', 'so', 'because', 'such as'], 'It may be true that … , but … = a counter-argument.'),
    M('Which phrase introduces a counter-argument?', ['That\'s completely true, but…', 'First of all,…', 'For example,…', 'In short,…'], 'You agree a little, then give the other side.'),
    O(['It is', 'often said', 'that', 'cats', 'are', 'independent.'], 'It is often said that + sentence.'),
    M('___, the main problem is the number of cars. Secondly, the roads are too narrow.', ['Firstly', 'Finally', 'Overall', 'In short'], 'Firstly … Secondly … for a list of points.')
  ] }
];
window.GRAMMAR = { topics };
})();
