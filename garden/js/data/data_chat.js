// WhatsApp group-chat games for every room, study plans, and the full mock exam builder
(function () {
const I = (who, msg, q, o, why, fix) => ({ who, msg, q, o, a: 0, why, fix });
const FIX = 'Help your friend. What should it be?';
const CHATS = {
  grammar: { icon: '🔧', group: 'PSE 2A Grammar Squad 💖', members: 'Reem, Dana, Lama, Noura, Jood, You', intro: [['Reem', 'Girls, the exam is soon 😱'], ['Dana', 'Let\'s check each other\'s grammar here. Tell us if we make a mistake!']],
    items: [
      I('Reem', 'The metro is [[more faster]] than the bus 😅', FIX, ['much faster', 'more fast', 'most faster', 'fastest'], 'Never more + -er. Use much + comparative.', 'The metro is much faster than the bus.'),
      I('Dana', '[[Unless we don\'t leave]] now, we\'ll miss the bus!', FIX, ['Unless we leave', 'Unless we will leave', 'If we leave', 'Unless leave'], 'unless = if not, so it takes a POSITIVE verb.', 'Unless we leave now, we\'ll miss the bus!'),
      I('Lama', 'Pollution [[is caused of]] cars and factories 🏭', FIX, ['is caused by', 'causes by', 'is cause by', 'caused of'], 'be caused by.', 'Pollution is caused by cars and factories.'),
      I('Noura', 'Tomorrow is a holiday so we [[mustn\'t]] come to class 🎉', FIX, ['don\'t have to', 'mustn\'t to', 'must', 'should'], 'mustn\'t = not allowed. Not necessary = don\'t have to.', 'Tomorrow is a holiday, so we don\'t have to come to class.'),
      I('Jood', 'If it [[will rain]] tomorrow, I will stay home ☔', FIX, ['rains', 'rain', 'would rain', 'raining'], 'No will in the if-clause: If + present simple.', 'If it rains tomorrow, I will stay home.'),
      I('Reem', '[[Both]] the bus nor the train is cheap 🙄', FIX, ['Neither', 'Either', 'Both of', 'Not'], 'nor goes with neither.', 'Neither the bus nor the train is cheap.'),
      I('Dana', 'Many animals are endangered [[because]] hunting 🐘', FIX, ['because of', 'because that', 'due', 'cause'], 'hunting is a noun → because of.', 'Many animals are endangered because of hunting.'),
      I('Lama', 'I think it would be better if people [[use]] the metro 🚇', FIX, ['used', 'will use', 'using', 'to use'], 'It would be better if + past simple.', 'I think it would be better if people used the metro.'),
      I('Noura', 'My sister [[takes always]] the metro to uni', FIX, ['always takes', 'take always', 'always take', 'is always take'], 'Frequency adverb before the main verb.', 'My sister always takes the metro to uni.')
    ] },
  vocab: { icon: '🧁', group: 'Kitchen Girls 🧁 (Vocab)', members: 'Reem, Dana, Lama, Noura, Jood, You', intro: [['Jood', 'I keep using the wrong words 😭'], ['Lama', 'We\'ll help! Fix the red words.']],
    items: [
      I('Reem', 'The Arabian leopard is critically [[dangerous]] 😢', 'Which word does she mean?', ['endangered', 'danger', 'extinct', 'common'], 'endangered = at risk of disappearing. It still exists, so not extinct.', 'The Arabian leopard is critically endangered.'),
      I('Dana', 'Trees [[observe]] carbon dioxide 🌳', 'Which word does she mean?', ['absorb', 'absent', 'adopt', 'abandon'], 'absorb = take in.', 'Trees absorb carbon dioxide.'),
      I('Lama', 'We need a [[solve]] for the traffic problem', 'Which word does she need?', ['solution', 'solving', 'solved', 'solver'], 'a + noun: solution.', 'We need a solution for the traffic problem.'),
      I('Noura', 'Too many cars = traffic [[congress]] 🚗🚗', 'Which word does she mean?', ['congestion', 'connection', 'construction', 'consequence'], 'traffic congestion.', 'Too many cars = traffic congestion.'),
      I('Jood', 'Sunshine is [[illimited]] ☀️', 'Correct prefix?', ['unlimited', 'inlimited', 'dislimited', 'imlimited'], 'un + limited.', 'Sunshine is unlimited.'),
      I('Reem', 'The [[goverment]] is building new metro lines', 'Correct spelling?', ['government', 'govenment', 'governmant', 'govurnment'], 'govern + ment.', 'The government is building new metro lines.'),
      I('Dana', 'I live on the [[outside]] of the city, far from the centre 🏘️', 'Which word does she mean?', ['outskirts', 'outdoors', 'outlines', 'outlets'], 'the outskirts = the parts far from the centre.', 'I live on the outskirts of the city.'),
      I('Lama', 'Poachers kill elephants. It\'s [[ilegal]]!', 'Correct spelling?', ['illegal', 'unlegal', 'inlegal', 'dislegal'], 'il + legal = illegal (double l).', 'It\'s illegal!')
    ] },
  reading: { icon: '🛋️', group: 'Book Club on the Sofa 📚', members: 'Reem, Dana, Lama, Noura, Jood, You', intro: [['Noura', 'Doing the reading mock test now…'], ['Jood', 'Ask us if you\'re stuck!']],
    items: [
      I('Jood', 'The question says "endangered" but I can\'t find that word in the text 😩', 'What should she look for?', ['a synonym like "in danger" or "at risk"', 'the exact word only', 'the title', 'the longest word'], 'Exam questions often paraphrase the text.'),
      I('Reem', 'Where is the main idea usually?', 'Answer Reem', ['in the first and last sentences of the paragraph', 'in the middle', 'in the numbers', 'in the pictures'], 'Topic sentence first, concluding sentence last.'),
      I('Dana', 'The text says nothing about the price. So the answer is False?', 'Answer Dana', ['No, it is "Does not say"', 'Yes, it is False', 'Yes, it is True', 'Just guess'], 'False = the text says the opposite. No information = Does not say.'),
      I('Lama', 'How do I find the writer\'s opinion?', 'Answer Lama', ['Look for In my opinion, should, I believe, usually in the last paragraph', 'Read only the title', 'Count the numbers', 'Look at the pictures'], 'Opinion signals are usually at the end.'),
      I('Noura', '"They" in this sentence… what does it refer to?', 'Answer Noura', ['a plural noun before it', 'the next sentence', 'the writer', 'a singular noun after it'], 'they → a plural noun that comes before it.'),
      I('Jood', 'A text in the city newspaper says "residents of our city". Who is the audience?', 'Answer Jood', ['people who live in the city', 'scientists', 'children', 'tourists'], 'residents = people who live there.'),
      I('Reem', 'Should I read the whole text slowly, word by word, first?', 'Answer Reem', ['No: read the questions first, then skim and scan', 'Yes, word by word', 'Only read the last paragraph', 'Read it backwards'], 'Questions first saves time.'),
      I('Dana', 'The text gives a problem, solutions, advantages and disadvantages. What is the purpose?', 'Answer Dana', ['to describe a problem and evaluate solutions', 'to tell a funny story', 'to give instructions', 'to describe a person'], 'Problem + solutions + evaluation.')
    ] },
  listening: { icon: '🎧', group: 'Headphones On 🎧', members: 'Reem, Dana, Lama, Noura, Jood, You', intro: [['Lama', 'Listening practice tonight!'], ['Dana', 'I have so many questions 😅']],
    items: [
      I('Lama', 'Did she say fifty or fifteen?? 😵', 'How can she tell?', ['fifTEEN has the stress at the end, FIFty at the start', 'They sound exactly the same', 'Fifteen is always faster', 'Always write fifty'], 'Listen for the stress.'),
      I('Noura', 'She said "It may be true that wind power is clean, BUT…" What does she really think?', 'Answer Noura', ['the idea after but', 'the idea before but', 'she agrees completely', 'she has no opinion'], 'The real opinion comes after but.'),
      I('Jood', 'Why does the lecturer ask questions and then answer them herself?', 'Answer Jood', ['They are rhetorical questions that introduce the next point', 'She forgot the answer', 'She wants us to shout', 'It is a mistake'], 'Rhetorical questions = a new point is coming.'),
      I('Reem', 'When should I read the questions?', 'Answer Reem', ['before the recording starts', 'after it finishes', 'never', 'only on the second listening'], 'Reading first tells you what to listen for.'),
      I('Dana', '"Moving on to the effects…" What does that mean?', 'Answer Dana', ['a new part of the talk is starting', 'the talk is finishing', 'an example is coming', 'a joke is coming'], 'Moving on to = a new section.'),
      I('Lama', 'The gap says "up to ___ percent less water". What do I write?', 'Answer Lama', ['a number like 90', 'a verb', 'a name', 'a colour'], 'percent → a number.'),
      I('Noura', 'I wrote [[enviroment]] in the gap 😬', 'Correct spelling?', ['environment', 'envirement', 'enviromant', 'environmant'], 'environ + ment. Spelling counts in gap fills!', 'environment'),
      I('Jood', '"From my own experience…" What comes next?', 'Answer Jood', ['a personal example', 'a statistic from a book', 'the conclusion', 'a question'], 'personal experience = a personal example.')
    ] },
  writing: { icon: '✍️', group: 'Paragraph Princesses ✍️', members: 'Reem, Dana, Lama, Noura, Jood, You', intro: [['Dana', 'Sharing my paragraph sentences here 🙈'], ['Reem', 'Be honest, girls!']],
    items: [
      I('Reem', 'My topic sentence: "[[One bus can carry 50 people.]]" 🤔', 'Is it a good topic sentence?', ['No, it is a detail. Try: Buses have several advantages for commuters.', 'Yes, it is perfect', 'Yes, because it has a number', 'No, it is too long'], 'A number is a detail, not the main idea.'),
      I('Dana', 'I ended my paragraph with "[[Firstly, cycling is good.]]"', 'What should she do?', ['Use a concluding phrase: In short / To sum up / Overall', 'It is fine', 'Start it with For example', 'Add another point'], 'Firstly starts a point. It cannot end a paragraph.'),
      I('Lama', 'How many paragraphs do we write in the exam?', 'Answer Lama', ['two: one for each solution', 'one long paragraph', 'five', 'it does not matter'], 'Two body paragraphs, one per solution.'),
      I('Noura', 'Where do I put the disadvantage?', 'Answer Noura', ['after the advantages, starting with However,', 'in the topic sentence', 'in a new paragraph alone', 'nowhere'], 'Advantages → However, a disadvantage → conclusion.'),
      I('Jood', 'My traffic paragraph has a sentence about my cat 🐱 in the middle…', 'What should she do?', ['Delete it: every sentence must support the main idea', 'Keep it, it is cute', 'Move it to the start', 'Make it longer'], 'Unity: one paragraph, one main idea.'),
      I('Reem', 'I wrote [[becuase]] again 😭', 'Correct spelling?', ['because', 'becouse', 'becase', 'beacuse'], 'Big Elephants Can Always Understand Small Elephants.', 'because'),
      I('Dana', 'How many words do we need?', 'Answer Dana', ['200 to 300', '50', '500 or more', 'exactly 100'], '200 to 300 words in total.'),
      I('Lama', 'One advantage [[are]] that it is cheap', FIX, ['is', 'be', 'were', 'being'], 'One advantage (singular) is…', 'One advantage is that it is cheap.')
    ] },
  speaking: { icon: '🎤', group: 'Garden Talkers 🌷', members: 'Reem, Dana, Lama, Noura, Jood, You', intro: [['Noura', 'Presentations are tomorrow 😬'], ['Jood', 'Let\'s practise together!']],
    items: [
      I('Noura', 'How do I start my presentation?', 'Help Noura', ['Today I\'m going to talk about…', 'In conclusion,…', 'However,…', 'For example,…'], 'Introduce your topic first.'),
      I('Jood', 'I said "In conclusion" at the very start 😅', 'What should she do?', ['Use it at the end only', 'Use it twice', 'It is fine', 'Use it in the middle'], 'In conclusion = the end.'),
      I('Reem', 'How do I disagree politely in the debate?', 'Help Reem', ['That\'s a good point, but…', 'You are wrong!', 'No.', 'Whatever.'], 'Accept a little, then give your view.'),
      I('Dana', 'I want to give a recommendation for Unit 3', 'Which sentence is best?', ['I\'d suggest that the city build more cycle lanes.', 'The city builds lanes yesterday.', 'Cycle lanes is many.', 'Build lane city.'], 'I\'d suggest (that) + subject + base verb.'),
      I('Lama', 'My answer was only 30 words for 2 minutes 😬', 'Help Lama', ['Add a reason and an example for each point', 'Speak faster', 'Repeat the same sentence', 'Stop early'], 'Point + reason + example makes your answer longer and better.'),
      I('Noura', 'How do I introduce a counter-argument?', 'Help Noura', ['It may be true that…, but…', 'First of all…', 'Thank you for listening.', 'My name is…'], 'The classic counter-argument frame.'),
      I('Jood', 'It would be better if people [[use]] buses', FIX, ['used', 'will use', 'using', 'uses'], 'would be better if + past simple.', 'It would be better if people used buses.'),
      I('Reem', 'How do I give an example?', 'Help Reem', ['For example, … / such as …', 'In conclusion, …', 'However, …', 'Firstly, …'], 'Examples make your points stronger.')
    ] }
};

const PLANS = [
  { id: 'rose', emoji: '🌹', name: 'Rose plan', c1: '#F28DBD', c2: '#C2185B', who: 'Paragraph building and grammar foundations',
    intro: 'Your plan starts with the paragraph, because writing gives the most marks. Then you fix the grammar points that cost marks last time.',
    steps: [['The paragraph burger (lesson)', '#/room/writing/learn/burger'], ['Colour the sentences (aim for 100%)', '#/room/writing/exercises/roles'], ['Scattered sentences', '#/room/writing/exercises/scatter'], ['From table to paragraph (lesson)', '#/room/writing/learn/advdis'], ['Writing step 1: study the model', '#/room/writing/write/model'], ['Writing step 2: write from the table', '#/room/writing/write/guided'], ['Grammar: first conditional and unless', '#/room/grammar/learn/cond'], ['Grammar: word order', '#/room/grammar/learn/order'], ['Practise unless until you get 90%', '#/room/grammar/practise/cond'], ['Practise word order until you get 90%', '#/room/grammar/practise/order'], ['Spelling check', '#/room/writing/exercises/spell'], ['Reading: main idea or detail', '#/room/reading/learn/main'], ['Vocabulary: Unit 3 ingredients', '#/room/vocab/learn'], ['The full mock exam', '#/room/exam']],
    tip: '20 to 30 minutes every day. Finish one step before you move to the next. If you score under 90%, read the explanations and try again.' },
  { id: 'lilac', emoji: '💜', name: 'Lilac plan', c1: '#C3A3EE', c2: '#7E4FA6', who: 'Spelling, word partners and the exam paragraph',
    intro: 'Your plan focuses on accurate spelling, word partners (collocations) and the full exam paragraph with advantages and disadvantages.',
    steps: [['Spelling check', '#/room/writing/exercises/spell'], ['Vocabulary: spell it right', '#/room/vocab/practise/spell'], ['Vocabulary: word partners', '#/room/vocab/practise/partners'], ['The exam writing task (lesson)', '#/room/writing/learn/exam'], ['Advantage and disadvantage language', '#/room/writing/exercises/link'], ['Writing step 2: write from the table', '#/room/writing/write/guided'], ['Writing step 3: plan and write', '#/room/writing/write/own'], ['Grammar: unless and punctuation', '#/room/grammar/practise/cond'], ['Grammar: word order', '#/room/grammar/practise/order'], ['Reading: mock tests', '#/room/reading/tests'], ['Listening: numbers and spelling', '#/room/listening/learn/numbers'], ['The full mock exam', '#/room/exam']],
    tip: 'Before you send any writing, check every word in the checklist. Spelling and word partners can add many marks.' },
  { id: 'gold', emoji: '👑', name: 'Gold plan', c1: '#F5D27A', c2: '#C9962B', who: 'Accuracy and challenge for top marks',
    intro: 'You already have strong skills. Your plan is about accuracy under time pressure and the harder question types.',
    steps: [['Grammar exam mode (timed)', '#/room/grammar/exam'], ['Grammar: random 10 (do it three times)', '#/room/grammar/random'], ['Unless and conditionals: aim for 100%', '#/room/grammar/practise/cond'], ['Vocabulary: word families', '#/room/vocab/practise/forms'], ['Vocabulary: negative prefixes', '#/room/vocab/practise/prefix'], ['Vocabulary exam mode', '#/room/vocab/exam'], ['Writing: air pollution (extra task)', '#/room/writing/write/own2'], ['Writing: endangered animals (extra task)', '#/room/writing/write/own3'], ['All reading mock tests', '#/room/reading/tests'], ['All listening mock tests', '#/room/listening/tests'], ['Speaking: record a presentation', '#/room/speaking/practise'], ['The full mock exam (aim for 95%)', '#/room/exam']],
    tip: 'Time yourself. In the exam, keep five minutes at the end to check articles, plurals and spelling.' }
];

const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pickKeep = (a, n) => shuffle(a.map((_, i) => i)).slice(0, n).sort((x, y) => x - y).map(i => a[i]);
function EXAM_BUILD() {
  const R = window.READING.tests, L = window.LISTENING.tests, T = window.GRAMMAR.topics;
  const rt = R[Math.floor(Math.random() * R.length)], lt = L[Math.floor(Math.random() * L.length)];
  return [
    { kind: 'reading', test: rt, q: pickKeep(rt.q, 8), title: `Part 1 · Reading: ${rt.title}` },
    { kind: 'grammar', title: 'Part 2 · Grammar', intro: 'One question from each grammar toolbox.', q: T.map(t => t.q[Math.floor(Math.random() * t.q.length)]) },
    { kind: 'vocab', title: 'Part 3 · Vocabulary', intro: 'Gap fills, meanings, word partners, word forms and prefixes.', q: shuffle(window.VOCAB.exam()).slice(0, 10) },
    { kind: 'listening', test: lt, q: pickKeep(lt.q, 8) },
    { kind: 'writing', task: window.WRITING.tasks.find(t => t.id === 'own') }
  ];
}
window.CHATS = CHATS; window.PLANS = PLANS; window.EXAM_BUILD = EXAM_BUILD;
})();
