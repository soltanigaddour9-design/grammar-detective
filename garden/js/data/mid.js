// MID-TERM (Cambridge Unlock 3 Mid-level test format) · original practice papers and pools · Units 1 to 5
// L&S paper: Listening 1 (taking notes + listening for explanations), Listening 2 (cause and effect + opinion),
//            Language (vocabulary paragraph, correct the mistakes, prefixes and suffixes), Speaking (2-minute presentation).
// R&W paper: Reading 1 (predicting from visuals + detail), Reading 2 (main ideas in order + purpose and audience),
//            Language (vocabulary paragraph, collocations, rewrite with the word in brackets),
//            Writing (word order, match the halves, summary + personal response).
(function () {
const M = (q, o, why) => ({ t: 'mcq', q, o, a: 0, why });
const B = '#2F6DB5', GR = '#2E8B57', OR = '#D97706', PK = '#C2185B', PU = '#7E4FA6', TE = '#0E8F8F';

// ===================================================== L&S · LISTENING PAPERS
const LISTEN = [
{ id: 'p1', title: 'Paper A', units: 'Units 2 and 4',
  l1: { title: 'Ramadan lanterns in Egypt', kind: 'Presentation', situation: 'Listen to a student\'s presentation about a Ramadan tradition.', voices: { A: 'f' }, names: { A: 'Mariam' },
    script: [['A', `Good morning, everyone. Today I'm going to talk about a Ramadan tradition from my country, Egypt: the fanous, or Ramadan lantern. In Egypt, families hang lanterns outside their homes, and children carry small ones in the streets in the evening. The tradition is very old. Many people say it started in the year 969, when the people of Cairo welcomed their ruler at night. They put candles in wooden boxes so that the wind would not blow them out. That's why the first lanterns were made of wood. Today most lanterns are made of metal and coloured glass, and some are even made of plastic and play songs.`],
      ['A', `So why is the lantern so important? Well, the light represents hope and the joy of the holy month. Children walk from house to house with their lanterns and sing songs, and the neighbours give them sweets. In this way, the long Ramadan nights become nights for families and neighbours to meet.`],
      ['A', `Now, you might think this tradition is only Egyptian, but it isn't. I want to mention Jeddah here, because my cousin lives there, and she told me that lanterns are now very popular in Saudi Arabia, too. Shops start selling them two weeks before Ramadan. One last thing: in my family, we never throw old lanterns away. My grandmother says that if you throw away a lantern, you throw away the memories of that Ramadan. So we keep them in a big box and use them again every year.`]],
    notes: { title: 'The fanous (Ramadan lantern)', lines: ['The tradition started in the year (1) ______.', 'The first lanterns were made of (2) ______.', 'Today: metal and coloured (3) ______.', 'Children sing songs and neighbours give them (4) ______.', 'In Saudi Arabia, shops sell lanterns two (5) ______ before Ramadan.'], ans: [['969'], ['wood'], ['glass'], ['sweets', 'candy'], ['weeks']] },
    mcq: [
      M('Why did people put candles in wooden boxes?', ['so that the wind would not blow them out', 'to make them more beautiful', 'because metal was too expensive'], 'so that the wind would not blow them out.'),
      M('What does the light of the lantern represent?', ['hope and the joy of the holy month', 'money and good business', 'the moon and the stars'], 'the light represents hope and joy.'),
      M('Why does the speaker mention Jeddah?', ['to show that the tradition is also popular in Saudi Arabia', 'to describe her holiday in Jeddah', 'to compare the prices of lanterns'], 'lanterns are now very popular in Saudi Arabia, too.'),
      M('Why do children walk from house to house?', ['to sing songs and receive sweets', 'to sell lanterns', 'to invite people to a wedding'], 'They sing songs and neighbours give them sweets.'),
      M('Why does the speaker\'s family keep old lanterns?', ['because throwing them away means losing the memories', 'because new lanterns are expensive', 'because the shops are closed'], 'you throw away the memories of that Ramadan.')
    ] },
  l2: { title: 'The problem of plastic bags', kind: 'Talk', situation: 'Listen to a talk about the problem of plastic bags.', voices: { A: 'f' }, names: { A: 'Speaker' },
    script: [['A', `Good afternoon. Today I want to talk about plastic bags. Some politicians think that a small fee for each bag will stop people from using them. I'm not so sure. In some countries, the fee was so small that people simply paid it. Because the fee did not change people's habits, the number of bags stayed almost the same.`],
      ['A', `On the other hand, a complete ban on thin plastic bags results in a real change: people start bringing their own cloth bags. And when shops give a discount to customers who bring their own bags, more people remember to bring them. Personally, I think discounts are better than fees, because people like rewards more than punishments.`],
      ['A', `Some people say that plastic bags are not a big problem compared to cars and factories. I completely disagree. Plastic bags end up in the sea, and turtles eat them because they think they are jellyfish. Others believe that paper bags are the perfect answer. I don't agree with that either, because producing paper bags uses a lot of water and trees. The best bag is the one you use again and again. Finally, I believe that individuals can make a difference. If every student in this room refuses one plastic bag a day, that's thousands of bags a year.`]],
    cause: { starts: ['Some politicians think that a small fee', 'Because the fee did not change people\'s habits,', 'A complete ban on thin plastic bags results in', 'When shops give a discount to customers with their own bags,', 'Turtles eat plastic bags'], ends: ['will stop people from using plastic bags.', 'the number of bags stayed almost the same.', 'people bringing their own cloth bags.', 'more people remember to bring them.', 'because they think they are jellyfish.'] },
    opinion: [['A small fee is a good solution.', 'D'], ['Rewards work better than punishments.', 'A'], ['Plastic bags are a small problem compared to cars and factories.', 'D'], ['Paper bags are the perfect answer.', 'D'], ['The best bag is one you use many times.', 'A'], ['One person\'s actions can make a difference.', 'A']] } },
{ id: 'p2', title: 'Paper B', units: 'Units 3 and 4',
  l1: { title: 'The olive harvest in Palestine', kind: 'Presentation', situation: 'Listen to a student\'s presentation about a family tradition.', voices: { A: 'f' }, names: { A: 'Rania' },
    script: [['A', `Hello, everyone. My presentation is about the olive harvest in Palestine, a tradition that is very special to my family. The harvest usually starts in October, after the first rain. We wait for the rain because it washes the dust off the olives and makes them ready to pick. The harvest lasts about six weeks. Whole families go to the fields together: grandparents, parents and children. The men usually climb ladders and shake the branches, and the women and children collect the olives from big sheets on the ground. At lunchtime we eat under the trees, usually bread with olive oil and tomatoes.`],
      ['A', `Some olive trees in Palestine are more than two thousand years old. That's why people say the olive tree represents patience and a strong connection to the land: it can live for centuries and still give fruit. I'd like to mention Spain here, because Spain produces more olive oil than any other country in the world. But in Spain, most olives are picked by machines. In my village, we still pick by hand, because we believe the harvest is a time to be together, not only work.`],
      ['A', `Finally, after the harvest, families take the olives to the press, and the first oil of the year is shared with neighbours and relatives. My grandfather always says that oil you share tastes better than oil you sell.`]],
    notes: { title: 'The olive harvest', lines: ['The harvest starts in (1) ______, after the first rain.', 'It lasts about six (2) ______.', 'Women and children collect olives from big (3) ______ on the ground.', 'Lunch: bread with olive oil and (4) ______.', 'Some trees are more than two (5) ______ years old.'], ans: [['October'], ['weeks'], ['sheets'], ['tomatoes'], ['thousand']] },
    mcq: [
      M('Why does the harvest start after the first rain?', ['The rain cleans the olives and makes them ready.', 'The ground is too hot before the rain.', 'Schools are closed after the rain.'], 'it washes the dust off the olives and makes them ready.'),
      M('What does the olive tree represent?', ['patience and a connection to the land', 'money and success', 'a long and happy marriage'], 'patience and a strong connection to the land.'),
      M('Why does the speaker talk about Spain?', ['to compare picking by machine with picking by hand', 'to say that Spanish oil is better', 'to describe her favourite holiday'], 'In Spain machines; in her village by hand.'),
      M('Why does her village still pick olives by hand?', ['because the harvest is a time for families to be together', 'because machines are not allowed', 'because the trees are too small'], 'a time to be together, not only work.'),
      M('What does the grandfather\'s saying show?', ['that sharing is an important part of the tradition', 'that oil is very expensive', 'that he does not like selling'], 'oil you share tastes better.')
    ] },
  l2: { title: 'Should cities build more roads?', kind: 'Talk', situation: 'Listen to a talk about traffic in big cities.', voices: { A: 'm' }, names: { A: 'Speaker' },
    script: [['A', `Many people believe that the answer to traffic congestion is simple: build more roads. I disagree. When a city builds a new road, driving becomes easier for a short time. Because driving is easier, more people decide to drive instead of taking the bus. After a few years, this results in the new road being just as busy as the old ones. Experts call this induced demand.`],
      ['A', `In contrast, cities that invest in public transport, like the Riyadh Metro, give people a real choice. If a metro is fast, cheap and clean, many commuters leave their cars at home. Some people say that cycle lanes are useless in hot countries. I don't think that's true. In the cooler months, and early in the morning, cycling is very pleasant.`],
      ['A', `However, public transport alone isn't enough. Working from home a few days a week reduces the number of cars in rush hour. I also believe that higher parking fees in the city centre would encourage people to share cars. Some of my friends think this is unfair, and I understand them, but I still think it's necessary.`]],
    cause: { starts: ['When a city builds a new road,', 'Because driving is easier,', 'After a few years, induced demand results in', 'If a metro is fast, cheap and clean,', 'Working from home a few days a week'], ends: ['driving becomes easier for a short time.', 'more people decide to drive instead of taking the bus.', 'the new road being just as busy as the old ones.', 'many commuters leave their cars at home.', 'reduces the number of cars in rush hour.'] },
    opinion: [['Building more roads is the best solution to congestion.', 'D'], ['Cycle lanes are useless in hot countries.', 'D'], ['Public transport alone can solve the problem.', 'D'], ['Working from home can help to reduce traffic.', 'A'], ['Higher parking fees would encourage people to share cars.', 'A'], ['Parking fees are unfair, so cities should not have them.', 'D']] } },
{ id: 'p3', title: 'Paper C', units: 'Units 1 and 4',
  l1: { title: 'Mint tea in Morocco', kind: 'Presentation', situation: 'Listen to a presentation about a tradition from Morocco.', voices: { A: 'f' }, names: { A: 'Salma' },
    script: [['A', `Hi, everyone. Today I'm going to talk about a tradition from Morocco: mint tea. In Morocco, tea is served many times a day, and it is a sign of hospitality. Green tea arrived in Morocco in the 1850s. British traders could not sell their tea in Europe, so they brought it to Moroccan ports instead. I mention the British because many people are surprised that this famous Moroccan drink actually started with European trade. Moroccans added fresh mint and a lot of sugar, and it became the national drink.`],
      ['A', `The host usually makes the tea and pours it from very high above the glass. This isn't just for show. Pouring from high creates foam on top, and the foam shows that the tea is good quality. Guests are usually offered three glasses. There is a famous saying: the first glass is gentle like life, the second is strong like love, and the third is bitter like death. So the three glasses represent the stages of life.`],
      ['A', `It is not polite to refuse the first glass, because refusing tea is like refusing friendship. Today, many young Moroccans use tea bags at home, but on special days families still make tea the traditional way, with a silver teapot.`]],
    notes: { title: 'Moroccan mint tea', lines: ['Green tea arrived in Morocco in the (1) ______.', 'It was brought by British (2) ______.', 'Moroccans added fresh (3) ______ and sugar.', 'Guests are usually offered (4) ______ glasses.', 'On special days, families use a (5) ______ teapot.'], ans: [['1850s', '1850'], ['traders'], ['mint'], ['three', '3'], ['silver']] },
    mcq: [
      M('Why does the host pour the tea from very high?', ['to create foam that shows the tea is good quality', 'to cool the tea down quickly', 'to show that he is strong'], 'Pouring from high creates foam… good quality.'),
      M('What do the three glasses represent?', ['the stages of life', 'the three meals of the day', 'three kinds of tea'], 'the three glasses represent the stages of life.'),
      M('Why does the speaker talk about British traders?', ['to explain the surprising origin of the drink', 'to compare British and Moroccan food', 'to say that British tea is better'], 'the drink started with European trade.'),
      M('Why is it impolite to refuse the first glass?', ['because it is like refusing friendship', 'because the tea is expensive', 'because the host will be angry with the children'], 'refusing tea is like refusing friendship.'),
      M('What is tea a sign of in Morocco?', ['hospitality', 'wealth', 'a wedding'], 'it is a sign of hospitality.')
    ] },
  l2: { title: 'Are zoos good for endangered animals?', kind: 'Talk', situation: 'Listen to a talk about zoos and endangered species.', voices: { A: 'm' }, names: { A: 'Speaker' },
    script: [['A', `Today's question is: are zoos good or bad for endangered species? First, the biggest threat to wild animals is habitat loss. When forests are cut down, animals lose their homes and their food. Because there is less food, many young animals do not survive.`],
      ['A', `Zoos say that breeding programmes are the answer. Breeding programmes result in more babies being born safely, and some of them, like the Arabian oryx, can later return to the wild. I think this is the strongest argument for zoos. However, I don't agree that every zoo helps. Small zoos with tiny cages cause stress, and stressed animals often stop eating.`],
      ['A', `Some people say we should close all zoos. I think that's too extreme. The good zoos do important work. Others believe that a zoo visit teaches children more than a documentary. I'm not sure about that. A good documentary can teach just as much. In my view, the real solution is protecting habitats, so that animals don't need zoos at all.`]],
    cause: { starts: ['When forests are cut down,', 'Because there is less food,', 'Breeding programmes result in', 'Small zoos with tiny cages', 'Stressed animals'], ends: ['animals lose their homes and their food.', 'many young animals do not survive.', 'more babies being born safely.', 'cause stress.', 'often stop eating.'] },
    opinion: [['Breeding programmes are the strongest argument for zoos.', 'A'], ['Every zoo helps endangered animals.', 'D'], ['We should close all zoos.', 'D'], ['A zoo visit teaches children more than a documentary.', 'D'], ['Good zoos do important work.', 'A'], ['Protecting habitats is the real solution.', 'A']] } }
];

// ===================================================== L&S · LANGUAGE
const LS_VOCAB = [
  { id: 'lsv1', title: 'Saving the forest', box: ['habitat', 'species', 'protect', 'threat', 'survive', 'environmental', 'solution', 'die out', 'destroy', 'benefit'],
    text: 'Logging is a serious (1) ___ to the rainforest. When people cut down trees, they (2) ___ the (3) ___ of thousands of animals. Without their homes, many (4) ___ cannot (5) ___, and some may (6) ___ completely. This is an (7) ___ problem for the whole planet. What is the (8) ___? Governments must (9) ___ the forests, and we must all understand the (10) ___ of a healthy forest for our air and water.',
    ans: ['threat', 'destroy', 'habitat', 'species', 'survive', 'die out', 'environmental', 'solution', 'protect', 'benefit'] },
  { id: 'lsv2', title: 'A busy city', box: ['commuter', 'traffic congestion', 'public transport', 'reduce', 'avoid', 'convenient', 'impact', 'serious', 'figure out', 'trouble'],
    text: 'Every morning, I am a (1) ___ on the busy roads of Riyadh. (2) ___ is a (3) ___ problem in our city, and it has a big (4) ___ on people\'s stress. I used to have a lot of (5) ___ finding a parking space. Then I tried to (6) ___ a better way to travel. Now I use (7) ___. The metro is fast and (8) ___, and I can (9) ___ the rush hour. If more people did this, we could (10) ___ the number of cars on the road.',
    ans: ['commuter', 'Traffic congestion', 'serious', 'impact', 'trouble', 'figure out', 'public transport', 'convenient', 'avoid', 'reduce'] },
  { id: 'lsv3', title: 'A healthier life', box: ['habit', 'unhealthy', 'work out', 'in shape', 'stress', 'relax', 'concentration', 'participate', 'mental', 'treatment'],
    text: 'Last year, my lifestyle was very (1) ___. I had a (2) ___ of eating chocolate every night, and I felt a lot of (3) ___ before exams. Then I decided to (4) ___ three times a week. Now I am more (5) ___, and exercise has (6) ___ benefits, too: my (7) ___ in class is much better. I also (8) ___ in a yoga class on Fridays, which helps me (9) ___. My doctor says exercise is a better (10) ___ for stress than medicine.',
    ans: ['unhealthy', 'habit', 'stress', 'work out', 'in shape', 'mental', 'concentration', 'participate', 'relax', 'treatment'] }
];
// "Weed out the mistake": tap the wrong word, then choose the correction
const FIX = [
  { s: 'You must to wear a helmet when you cycle.', bad: 'to', fix: ['(delete it)', 'for', 'be', 'have'], good: '(delete it)', full: 'You must wear a helmet when you cycle.', why: 'must + base verb (no to).' },
  { s: 'Students don\'t must use phones in the exam.', bad: 'don\'t must', fix: ['mustn\'t', 'don\'t have', 'not must', 'doesn\'t must'], good: 'mustn\'t', full: 'Students mustn\'t use phones in the exam.', why: 'prohibition = mustn\'t.' },
  { s: 'You ought think more before you speak.', bad: 'ought', fix: ['ought to', 'ought for', 'ought be', 'ought not'], good: 'ought to', full: 'You ought to think more before you speak.', why: 'ought TO + verb.' },
  { s: 'Tomorrow is a holiday, so we mustn\'t come to class.', bad: 'mustn\'t', fix: ['don\'t have to', 'must', 'should', 'ought to'], good: 'don\'t have to', full: 'Tomorrow is a holiday, so we don\'t have to come to class.', why: 'not necessary = don\'t have to.' },
  { s: 'People in the town might to support the new wind farm.', bad: 'to', fix: ['(delete it)', 'be', 'for', 'have'], good: '(delete it)', full: 'People in the town might support the new wind farm.', why: 'might + base verb.' },
  { s: 'The new metro will may reduce traffic.', bad: 'will', fix: ['(delete it)', 'can', 'would', 'is'], good: '(delete it)', full: 'The new metro may reduce traffic.', why: 'Never two modals together.' },
  { s: 'Solar energy could becoming cheaper in the future.', bad: 'becoming', fix: ['become', 'becomes', 'became', 'to become'], good: 'become', full: 'Solar energy could become cheaper in the future.', why: 'could + base verb.' },
  { s: 'I think cycling is the most healthy way to commute.', bad: 'most healthy', fix: ['healthiest', 'more healthy', 'healthier', 'much healthy'], good: 'healthiest', full: 'I think cycling is the healthiest way to commute.', why: 'healthy → the healthiest.' },
  { s: 'Banking online is safest than going to a bank.', bad: 'safest', fix: ['safer', 'more safe', 'the safest', 'most safe'], good: 'safer', full: 'Banking online is safer than going to a bank.', why: 'comparative + than: safer than.' },
  { s: 'The metro is more faster than the bus.', bad: 'more faster', fix: ['much faster', 'more fast', 'fastest', 'most faster'], good: 'much faster', full: 'The metro is much faster than the bus.', why: 'Never more + -er.' },
  { s: 'Riyadh is the bigger city in Saudi Arabia.', bad: 'bigger', fix: ['biggest', 'more big', 'most big', 'big'], good: 'biggest', full: 'Riyadh is the biggest city in Saudi Arabia.', why: 'the + superlative.' },
  { s: 'Cars are more dangerous as bicycles.', bad: 'as', fix: ['than', 'that', 'like', 'then'], good: 'than', full: 'Cars are more dangerous than bicycles.', why: 'comparative + than.' },
  { s: 'Did you ever visited Egypt?', bad: 'Did', fix: ['Have', 'Do', 'Are', 'Has'], good: 'Have', full: 'Have you ever visited Egypt?', why: 'Experience with ever = present perfect: Have you ever + past participle.' },
  { s: 'I have visited Diriyah last Friday.', bad: 'have visited', fix: ['visited', 'has visited', 'visit', 'am visiting'], good: 'visited', full: 'I visited Diriyah last Friday.', why: 'Finished time (last Friday) = past simple.' },
  { s: 'The charity has helping to protect many species.', bad: 'helping', fix: ['helped', 'help', 'helps', 'to help'], good: 'helped', full: 'The charity has helped to protect many species.', why: 'has + past participle.' },
  { s: 'She has went to three weddings this year.', bad: 'went', fix: ['been', 'go', 'goes', 'going'], good: 'been', full: 'She has been to three weddings this year.', why: 'have been to = experience.' },
  { s: 'My family has lived in Riyadh since ten years.', bad: 'since', fix: ['for', 'from', 'during', 'ago'], good: 'for', full: 'My family has lived in Riyadh for ten years.', why: 'for + a period of time; since + a point in time.' },
  { s: 'The survive of the species depends on us.', bad: 'survive', fix: ['survival', 'surviving', 'survivor', 'survived'], good: 'survival', full: 'The survival of the species depends on us.', why: 'the + noun: survival.' },
  { s: 'The destroy of the forest is a disaster.', bad: 'destroy', fix: ['destruction', 'destroying', 'destroyed', 'destroyer'], good: 'destruction', full: 'The destruction of the forest is a disaster.', why: 'the + noun: destruction.' },
  { s: 'We need a reduce in sugar in school food.', bad: 'reduce', fix: ['reduction', 'reducing', 'reduced', 'reductive'], good: 'reduction', full: 'We need a reduction in sugar in school food.', why: 'a + noun: reduction.' },
  { s: 'If we changed to LED light bulbs, we can save money.', bad: 'can', fix: ['could', 'will', 'are', 'did'], good: 'could', full: 'If we changed to LED light bulbs, we could save money.', why: 'If + past → could / would.' },
  { s: 'If it will rain tomorrow, the match will be cancelled.', bad: 'will rain', fix: ['rains', 'rain', 'rained', 'raining'], good: 'rains', full: 'If it rains tomorrow, the match will be cancelled.', why: 'First conditional: If + present, will.' },
  { s: 'Unless we don\'t leave now, we will miss the bus.', bad: 'don\'t leave', fix: ['leave', 'left', 'won\'t leave', 'leaving'], good: 'leave', full: 'Unless we leave now, we will miss the bus.', why: 'unless = if not, so the verb is positive.' },
  { s: 'We must leave the windows open when it\'s raining, or the floors will get wet.', bad: 'open', fix: ['closed', 'opened', 'opening', 'broken'], good: 'closed', full: 'We must leave the windows closed when it\'s raining, or the floors will get wet.', why: 'Meaning: rain + open windows = wet floors.' },
  { s: 'I want to give up eat sugar.', bad: 'eat', fix: ['eating', 'to eat', 'ate', 'eats'], good: 'eating', full: 'I want to give up eating sugar.', why: 'give up + -ing.' },
  { s: 'I came down a bad cold last week.', bad: 'down', fix: ['down with', 'over', 'up', 'in'], good: 'down with', full: 'I came down with a bad cold last week.', why: 'come down WITH an illness.' },
  { s: 'It took me two weeks to get up the flu.', bad: 'up', fix: ['over', 'down', 'out', 'in'], good: 'over', full: 'It took me two weeks to get over the flu.', why: 'get over = recover.' },
  { s: 'Why don\'t you sign up a yoga class?', bad: 'up', fix: ['up for', 'in', 'on', 'out'], good: 'up for', full: 'Why don\'t you sign up for a yoga class?', why: 'sign up FOR something.' },
  { s: 'Pollution is caused of cars and factories.', bad: 'of', fix: ['by', 'from', 'with', 'to'], good: 'by', full: 'Pollution is caused by cars and factories.', why: 'be caused BY.' },
  { s: 'Deforestation results to floods.', bad: 'to', fix: ['in', 'from', 'by', 'of'], good: 'in', full: 'Deforestation results in floods.', why: 'cause + results IN + effect.' }
];
const AFFIX = [
  ['without help', 'help', 'less', 'end', 'helpless'], ['full of hope', 'hope', 'ful', 'end', 'hopeful'], ['the noun form of connect', 'connect', 'ion', 'end', 'connection'],
  ['not agree', 'agree', 'dis', 'start', 'disagree'], ['make something digital', 'digital', 'ize', 'end', 'digitalize'], ['not possible', 'possible', 'im', 'start', 'impossible'],
  ['can be used', 'use', 'able', 'end', 'usable'], ['without care', 'care', 'less', 'end', 'careless'], ['full of colour', 'colour', 'ful', 'end', 'colourful'],
  ['not happy', 'happy', 'un', 'start', 'unhappy'], ['not legal', 'legal', 'il', 'start', 'illegal'], ['not responsible', 'responsible', 'ir', 'start', 'irresponsible'],
  ['not like', 'like', 'dis', 'start', 'dislike'], ['the noun form of celebrate', 'celebrate', 'ion', 'end', 'celebration'], ['make something modern', 'modern', 'ize', 'end', 'modernize'],
  ['not polite', 'polite', 'im', 'start', 'impolite'], ['can be afforded', 'afford', 'able', 'end', 'affordable'], ['without end', 'end', 'less', 'end', 'endless'],
  ['full of thought for others', 'thought', 'ful', 'end', 'thoughtful'], ['not healthy', 'healthy', 'un', 'start', 'unhealthy'], ['the noun form of educate', 'educate', 'ion', 'end', 'education'],
  ['not honest', 'honest', 'dis', 'start', 'dishonest'], ['not expected', 'expected', 'un', 'start', 'unexpected'], ['full of stress (adjective)', 'stress', 'ful', 'end', 'stressful']
];
const AFFIX_BOX = ['able', 'dis', 'ful', 'im', 'ion', 'ize', 'less', 'un', 'il', 'ir'];

// ===================================================== L&S · SPEAKING (problem → solutions → predicted results)
const SPEAK = [
  { id: 'sp-exercise', topic: 'Students do not get enough exercise', icon: '🏃‍♀️', prompt: 'Give a presentation on the problem of university students not getting enough exercise. Suggest some solutions and the predicted results of each solution. Speak for at least two minutes.',
    plan: [['The problem', 'Many students sit for 7+ hours a day; stress, low energy', B], ['Solution 1', 'free sports clubs on campus', GR], ['→ predicted result', 'more students will join in; less stress', GR], ['Solution 2', 'walking paths with shade between buildings', OR], ['→ predicted result', 'students might walk between classes instead of driving', OR], ['Solution 3', 'a step challenge with prizes', PU], ['→ predicted result', 'it could make exercise fun and social', PU], ['Conclusion', 'the best solution + recommendation', PK]],
    model: [['Today I\'m going to talk about a serious problem at many universities: students don\'t get enough exercise.', 'topic'], ['Many students sit in lectures and libraries for more than seven hours a day, and this can lead to stress and low energy.', 'support'], ['I would like to suggest three solutions.', 'topic'], ['First of all, the university could offer free sports clubs on campus. If the clubs are free, more students will join in, and they will feel less stressed.', 'support'], ['Secondly, the university should build shaded walking paths between buildings. As a result, students might walk between classes instead of driving.', 'detail'], ['Finally, the student council could organize a step challenge with small prizes. This could make exercise fun and social.', 'counter'], ['In conclusion, I think free sports clubs are the best solution, because they will help the most students. I recommend that the university starts them next term.', 'conc']] },
  { id: 'sp-traffic', topic: 'Traffic around the university at rush hour', icon: '🚗', prompt: 'Give a presentation on the problem of traffic around the university at rush hour. Suggest some solutions and the predicted results of each solution. Speak for at least two minutes.',
    plan: [['The problem', 'long queues at 7:30 am; students late; pollution', B], ['Solution 1', 'a university bus from the metro station', GR], ['→ predicted result', 'fewer cars; students will arrive on time', GR], ['Solution 2', 'start some classes at 9 am', OR], ['→ predicted result', 'traffic may spread out over two hours', OR], ['Solution 3', 'car-share app for students', PU], ['→ predicted result', 'could cut the number of cars by half', PU], ['Conclusion', 'the best solution + recommendation', PK]],
    model: [['Good morning. My presentation is about traffic congestion around our university at rush hour.', 'topic'], ['Every morning at half past seven there are long queues at the gates, many students arrive late, and the air is polluted.', 'support'], ['I\'d like to propose three solutions.', 'topic'], ['To begin with, the university could run a free bus from the nearest metro station. If students take the bus, there will be fewer cars, and they will arrive on time.', 'support'], ['Another solution is to start some classes at nine o\'clock. This may spread the traffic out over two hours.', 'detail'], ['A third idea is a car-share app for students. It could reduce the number of cars by half.', 'counter'], ['To sum up, I believe the free bus is the most practical solution, so I recommend that the university considers it this year.', 'conc']] },
  { id: 'sp-plastic', topic: 'Too much plastic waste on campus', icon: '🥤', prompt: 'Give a presentation on the problem of plastic waste on campus. Suggest some solutions and the predicted results of each solution. Speak for at least two minutes.',
    plan: [['The problem', 'plastic bottles and cups everywhere; bins full', B], ['Solution 1', 'free water fountains', GR], ['→ predicted result', 'students will buy fewer bottles', GR], ['Solution 2', 'discount for your own cup at the café', OR], ['→ predicted result', 'more students might bring reusable cups', OR], ['Solution 3', 'recycling bins in every building', PU], ['→ predicted result', 'less plastic could go to landfill', PU], ['Conclusion', 'the best solution + recommendation', PK]],
    model: [['Today I want to talk about plastic waste on our campus.', 'topic'], ['Every day, students throw away hundreds of plastic bottles and cups, and the bins are always full.', 'support'], ['There are several possible solutions.', 'topic'], ['Firstly, the university could put free water fountains in every building. As a result, students will buy fewer plastic bottles.', 'support'], ['Secondly, the café could give a discount to students who bring their own cup. If the discount is big enough, more students might bring reusable cups.', 'detail'], ['Thirdly, we need recycling bins in every building, so less plastic could go to landfill.', 'counter'], ['In conclusion, I think the water fountains are the best solution because they are cheap and easy. I recommend that we start with them.', 'conc']] },
  { id: 'sp-crafts', topic: 'Young people are losing interest in traditional crafts', icon: '🧶', prompt: 'Give a presentation on the problem of young people losing interest in traditional crafts, such as Sadu weaving. Suggest some solutions and the predicted results of each solution. Speak for at least two minutes.',
    plan: [['The problem', 'few young people learn Sadu weaving or pottery; skills may die out', B], ['Solution 1', 'free weekend workshops with older artists', GR], ['→ predicted result', 'young people will learn the skills directly', GR], ['Solution 2', 'sell crafts online / social media', OR], ['→ predicted result', 'crafts might become a business for young people', OR], ['Solution 3', 'a craft festival at the university', PU], ['→ predicted result', 'could make crafts fashionable again', PU], ['Conclusion', 'the best solution + recommendation', PK]],
    model: [['My presentation is about a cultural problem: many young people are losing interest in traditional crafts, such as Sadu weaving.', 'topic'], ['If nobody learns these skills, they may die out completely.', 'support'], ['I would like to suggest three solutions.', 'topic'], ['First of all, the government could organize free weekend workshops with older artists. As a result, young people will learn the skills directly from experts.', 'support'], ['Secondly, artists could sell their crafts online. If the crafts sell well, they might become a business for young people.', 'detail'], ['Finally, the university could hold a craft festival every year, and this could make traditional crafts fashionable again.', 'counter'], ['In conclusion, I believe the workshops are the most important solution, because the skills must pass from one generation to the next.', 'conc']] }
];
const SPEAK_PHRASES = ['Today I\'m going to talk about', 'I would like to suggest', 'First of all', 'Secondly', 'Finally', 'If', 'will', 'might', 'could', 'As a result', 'In conclusion', 'I recommend'];
const SPEAK_PARTS = [['Introduce the problem', 'going to talk about|my presentation is about|today i|problem'], ['Give at least two solutions', 'first|second|another|third|finally|solution'], ['Predict results: will / may / might / could', ' will | might | may | could |result'], ['Use if (first conditional)', '\\bif\\b'], ['Conclude with the best solution', 'in conclusion|to sum up|i recommend|the best solution|overall']];

// ===================================================== R&W · READING PAPERS
const READ = [
{ id: 'r1', title: 'Paper A', units: 'Units 2 and 1',
  r1: { title: 'Gardens in the Sky', visuals: [['roofgarden', 'A garden on the roof of an office building in Riyadh'], ['beeflowers', 'Bees and butterflies visit rooftop flowers, even ten floors high']],
    paras: [
      'Cities are growing quickly, and land is expensive. In many city centres, there is no space for new parks. However, there is one place that is often empty: the roof. Around the world, architects are now turning flat roofs into green gardens.',
      'Rooftop gardens have many benefits. Plants absorb heat from the sun, so the building below stays cooler. In a hot city like Riyadh, this can reduce the use of air conditioning by up to 25%. Plants also absorb carbon dioxide and clean the air.',
      'Rooftop gardens are good for wildlife, too. Bees and butterflies need flowers, but they cannot find many in city centres. Scientists in London found 21 kinds of bees in a garden on top of a hospital. Some building owners even keep beehives on the roof and sell the honey.',
      'Of course, not every roof is strong enough to hold soil, trees and water. Engineers must check the building first, and the gardens need regular care. In dry countries, water is a serious problem, so designers choose desert plants that need very little water.',
      'Rooftop gardens will not replace large parks. However, they offer a new way to make cities greener, cooler and more pleasant places to live and work.'],
    predict: [['The article will discuss gardens on top of buildings.', true], ['The article will focus on farming in the countryside.', false], ['The article will mention insects.', true], ['The article will talk about the history of Riyadh.', false], ['The article will talk about making cities greener.', true]],
    detail: [
      M('According to the article, which is NOT a benefit of rooftop gardens?', ['They make buildings taller.', 'They keep buildings cooler.', 'They clean the air.'], 'The text never says they make buildings taller.'),
      M('By how much can rooftop gardens reduce the use of air conditioning?', ['up to 25%', 'up to 21%', 'up to 50%'], 'up to 25%.'),
      M('Where did scientists find 21 kinds of bees?', ['on top of a hospital in London', 'in a park in Riyadh', 'on a farm'], 'a garden on top of a hospital in London.'),
      M('Why do designers in dry countries choose desert plants?', ['They need very little water.', 'They are cheaper to buy.', 'Bees prefer them.'], 'water is a serious problem.'),
      M('Which statement would the writer most agree with?', ['Rooftop gardens are a useful addition to city parks.', 'Rooftop gardens will replace large parks.', 'Every roof can hold a garden.'], '"will not replace large parks… a new way to make cities greener".')] },
  r2: { title: 'How do you grow a coral reef?',
    paras: [
      'Coral reefs are home to a quarter of all ocean species, but they are in danger. Rising sea temperatures, pollution and careless fishing have damaged many reefs. In the Red Sea and around the world, scientists are now trying something new: they are growing coral, like a gardener grows plants.',
      'The first step is to collect small pieces of healthy coral. Divers look for pieces that have broken off naturally after storms, so they do not damage the reef.',
      'Next, the pieces must be given a safe place to grow. The divers tie them to metal frames, called coral trees, in an underwater nursery. Here, the coral is protected from strong waves and from fish that eat it.',
      'The divers visit the nursery every week. They clean the frames, because seaweed can grow over the coral and block the light. Within six to twelve months, a small piece can grow to the size of a football.',
      'Finally, the young coral is planted back on the damaged reef. The divers use a special glue to attach it to the rocks. Fish usually return to the area within a few months.',
      'Coral gardening is slow and expensive, and it cannot stop the sea from getting warmer. However, it gives damaged reefs a second chance, and it shows that people can repair some of the damage they have caused.'],
    ideas: ['Coral reefs are in danger.', 'Healthy pieces of coral are collected.', 'The coral needs a protected place to grow.', 'The coral must be cleaned regularly.', 'The coral is returned to the reef.', 'The method has limits, but it is valuable.'],
    purpose: [
      M('Who is the intended audience for this article?', ['general adult readers', 'professional divers only', 'young children'], 'Clear explanations of every step = general readers.'),
      M('What is the author\'s main purpose?', ['to inform readers about how coral can be grown and replanted', 'to persuade readers to become divers', 'to entertain readers with a story about fish'], 'It explains a process.')] } },
{ id: 'r2', title: 'Paper B', units: 'Units 3 and 4',
  r1: { title: 'A New Way to Move', visuals: [['metro', 'A driverless train on the new metro line'], ['station', 'Shaded stations help passengers stay cool in summer']],
    paras: [
      'For many years, the car was the only way to travel around Riyadh. Families often had three or four cars, and the roads were full at rush hour. In 2024, the city opened a new metro system, and travelling around the capital began to change.',
      'The metro has six lines and more than eighty stations. The trains are driverless, which means computers control them. This allows the trains to arrive every few minutes, even at busy times.',
      'The stations were designed for the hot climate. They have shade, cool waiting areas and special glass that reflects the sun. Some stations were designed by famous architects and have become landmarks in the city.',
      'The metro is not only about speed. Experts hope it will reduce traffic congestion and air pollution. If more commuters leave their cars at home, the city will be quieter and cleaner. Buses now connect many neighbourhoods to the stations.',
      'Some people still prefer to drive, especially in the summer. However, the metro gives residents a real choice for the first time, and many young people already use it every day.'],
    predict: [['The article will talk about public transport.', true], ['The article will focus on flying.', false], ['The article will mention the weather.', true], ['The article will discuss car factories.', false], ['The article will describe the design of stations.', true]],
    detail: [
      M('What does "driverless" mean in paragraph 2?', ['Computers control the trains.', 'Nobody uses the trains.', 'The trains have no seats.'], 'computers control them.'),
      M('How many lines does the metro have?', ['six', 'eighty', 'four'], 'six lines.'),
      M('Why do the stations have special glass?', ['to reflect the sun', 'to look beautiful at night', 'to stop the noise'], 'glass that reflects the sun.'),
      M('What do experts hope the metro will do?', ['reduce congestion and pollution', 'replace all buses', 'make cars cheaper'], 'reduce traffic congestion and air pollution.'),
      M('Which statement would the writer most agree with?', ['The metro gives people a new choice.', 'Everyone has stopped driving.', 'The metro is too slow.'], '"gives residents a real choice".')] },
  r2: { title: 'How do you keep a festival alive?',
    paras: [
      'In many towns, traditional festivals are disappearing. Young people move to big cities, and old customs are forgotten. The date festival in one small town in central Saudi Arabia faced the same problem, but the town found a way to bring it back to life.',
      'First, the organizers asked older farmers to share their knowledge. They recorded interviews about how dates were harvested, stored and sold in the past.',
      'Next, they invited young people to take part. University students designed posters, filmed short videos and ran the festival\'s social media pages.',
      'Then, the festival moved to a bigger space with shade and seating, so that families could stay longer. Children\'s activities, such as painting date baskets, were added.',
      'The organizers also invited farmers from other regions to sell their dates, which turned the festival into a large market.',
      'Within five years, the number of visitors grew from two thousand to more than forty thousand. The festival shows that a tradition can survive when old and young people work together.'],
    ideas: ['Traditional festivals are disappearing.', 'Older people\'s knowledge was recorded.', 'Young people became involved.', 'The festival space was improved for families.', 'The festival became a large market.', 'The festival grew because generations worked together.'],
    purpose: [
      M('Who is the intended audience?', ['general adult readers', 'only date farmers', 'university professors'], 'Simple steps and examples = general readers.'),
      M('What is the author\'s main purpose?', ['to inform readers how a tradition was saved', 'to persuade readers to buy dates', 'to entertain readers with a funny story'], 'It explains what the town did.')] } },
{ id: 'r3', title: 'Paper C', units: 'Units 1 and 5',
  r1: { title: 'The Turtles of the Red Sea', visuals: [['turtle', 'A green turtle returns to the beach where she was born'], ['volunteers', 'Volunteers use red torches at night so that the turtles are not frightened']],
    paras: [
      'Every summer, female green turtles swim thousands of kilometres back to the beach where they were born. On quiet islands in the Red Sea, they dig holes in the sand at night and lay around a hundred eggs.',
      'Sadly, green turtles are an endangered species. Plastic in the sea, fishing nets and the loss of quiet beaches are the main threats. Bright lights from hotels and roads also confuse the baby turtles, which follow the moonlight to find the sea.',
      'To protect them, volunteers now patrol some beaches at night. They use red torches, because turtles cannot see red light well. When they find a nest, they put a small fence around it so that people and animals do not step on the eggs.',
      'After about two months, the babies hatch and run to the sea. Only about one in a thousand will survive to become an adult, so every baby is important.',
      'Protecting turtles also helps people. Healthy turtle populations bring tourists, and tourists bring jobs to small coastal towns.'],
    predict: [['The article will discuss sea animals.', true], ['The article will focus on turtles that live in deserts.', false], ['The article will mention work that people do at night.', true], ['The article will talk about turtle pets at home.', false], ['The article will talk about protecting a species.', true]],
    detail: [
      M('Where do female green turtles lay their eggs?', ['on the beach where they were born', 'in the deep sea', 'in hotel gardens'], 'the beach where they were born.'),
      M('Why do bright lights confuse baby turtles?', ['They follow the moonlight to find the sea.', 'They are afraid of the dark.', 'They cannot see at all.'], 'follow the moonlight to find the sea.'),
      M('Why do volunteers use red torches?', ['Turtles cannot see red light well.', 'Red torches are cheaper.', 'Red is the colour of the team.'], 'turtles cannot see red light well.'),
      M('How many babies survive to become adults?', ['about one in a thousand', 'about one in ten', 'about a hundred'], 'one in a thousand.'),
      M('Which statement would the author most agree with?', ['Protecting turtles is good for both animals and people.', 'Tourists are the main threat to turtles.', 'Turtles do not need help.'], 'last paragraph.')] },
  r2: { title: 'How do you get a whole town walking?',
    paras: [
      'In many towns, people drive everywhere, even to the shop at the end of the street. Doctors in one small town noticed that more and more of their patients were overweight and suffering from heart disease. They decided to act.',
      'First, they needed to understand why people did not walk. They asked residents, and the answers were clear: there was no shade, the pavements were broken and it felt unsafe at night.',
      'Next, the town council planted trees along the main streets and repaired the pavements. Lights were added so that people could walk safely in the cool evening.',
      'Then, the doctors started a walking club. Every Thursday evening, a doctor led a free one-hour walk and answered health questions.',
      'Schools joined in, too. Children who walked to school collected stickers, and the class with the most stickers won a trip.',
      'After two years, the number of people who walked every day had doubled. The project shows that small changes, supported by the whole community, can improve public health.'],
    ideas: ['Doctors noticed a health problem in the town.', 'The reasons why people did not walk were found.', 'The streets were made more comfortable and safe.', 'A free walking club was started.', 'Children were encouraged to walk to school.', 'The project was a success.'],
    purpose: [
      M('Who is the intended audience?', ['general adult readers', 'only children', 'engineers'], 'General readers.'),
      M('What is the author\'s main purpose?', ['to inform readers about how a town improved public health', 'to persuade readers to become doctors', 'to entertain readers with a story about stickers'], 'It describes the steps and the result.')] } }
];

// ===================================================== R&W · LANGUAGE
const RW_VOCAB = [
  { id: 'rwv1', title: 'A day at the festival', box: ['tradition', 'generation', 'formal', 'greet', 'expect', 'ceremony', 'belief', 'culture', 'preserve', 'appearance', 'relationship', 'aspect'],
    text: 'I didn\'t (1) ___ the date festival to be so busy! Every (2) ___ was there, from grandparents to babies. At the opening (3) ___, the organizers wore (4) ___ clothes and (5) ___ every visitor at the gate. For me, the best (6) ___ of the festival is the food. It is an important part of our (7) ___. My grandfather has a strong (8) ___ that we must (9) ___ this (10) ___ for the future. The festival also improves the (11) ___ between young and old people, and the town has changed its (12) ___: it looks beautiful with all the lights.',
    ans: ['expect', 'generation', 'ceremony', 'formal', 'greeted', 'aspect', 'culture', 'belief', 'preserve', 'tradition', 'relationship', 'appearance'] },
  { id: 'rwv2', title: 'Our changing planet', box: ['climate', 'consequences', 'absorb', 'resource', 'predict', 'threaten', 'long-term', 'crisis', 'rainforest', 'contribute to', 'atmosphere', 'trend'],
    text: 'Scientists (1) ___ that the Earth will continue to get warmer. Greenhouse gases in the (2) ___ (3) ___ global warming, and the (4) ___ are serious: rising seas, floods and droughts. Trees can (5) ___ carbon dioxide, but the (6) ___ is getting smaller every year because of logging. Water is a limited (7) ___, and in some countries there is already a water (8) ___. A change in the (9) ___ could (10) ___ many species. We need (11) ___ solutions, not quick ones. Fortunately, there is a new (12) ___: more and more people are using renewable energy.',
    ans: ['predict', 'atmosphere', 'contribute to', 'consequences', 'absorb', 'rainforest', 'resource', 'crisis', 'climate', 'threaten', 'long-term', 'trend'] },
  { id: 'rwv3', title: 'Healthy campus', box: ['active', 'moderate', 'suffer', 'calories', 'serious', 'self-esteem', 'recognize', 'portion', 'obesity', 'nutritional', 'campaign', 'balanced diet'],
    text: 'Our university has started a health (1) ___. Many students (2) ___ from stress and do not (3) ___ the importance of sleep. Some also eat too many (4) ___ and do not follow a (5) ___. The café now shows (6) ___ information and serves a smaller (7) ___ of chips. Students are encouraged to be more (8) ___: a (9) ___ amount of exercise, like 30 minutes of walking a day, is enough. Doctors warn that (10) ___ can lead to (11) ___ illnesses. Team sports also help students feel confident and raise their (12) ___.',
    ans: ['campaign', 'suffer', 'recognize', 'calories', 'balanced diet', 'nutritional', 'portion', 'active', 'moderate', 'obesity', 'serious', 'self-esteem'] }
];
const COLLOC = [
  { id: 'c1', box: ['transport', 'congestion', 'hour', 'lane', 'share', 'duty', 'restrictions', 'emergency'],
    items: [['Many people use public ___ to get to work.', 'transport'], ['Traffic ___ is a big problem in the city centre.', 'congestion'], ['The roads are full during rush ___.', 'hour'], ['Please ride in the cycle ___, not on the pavement.', 'lane'], ['My colleagues and I car ___ to save money.', 'share'], ['The government increased fuel ___, so petrol is more expensive.', 'duty'], ['There are parking ___ near the hospital: you can only stay one hour.', 'restrictions']] },
  { id: 'c2', box: ['warming', 'gas', 'fuels', 'energy', 'change', 'level', 'resources', 'dioxide'],
    items: [['Global ___ is making summers hotter.', 'warming'], ['Methane is a greenhouse ___.', 'gas'], ['Coal and oil are fossil ___.', 'fuels'], ['Solar and wind power are kinds of renewable ___.', 'energy'], ['Climate ___ affects every country in the world.', 'change'], ['The sea ___ is rising because the ice is melting.', 'level'], ['Water and forests are precious natural ___.', 'resources']] },
  { id: 'c3', box: ['disease', 'expectancy', 'diet', 'food', 'exercise', 'activity', 'lifestyle', 'campaign'],
    items: [['Obesity can lead to heart ___.', 'disease'], ['Japan has a high life ___.', 'expectancy'], ['A balanced ___ includes fruit, vegetables and protein.', 'diet'], ['Crisps and burgers are junk ___.', 'food'], ['Regular ___ improves your mood and sleep.', 'exercise'], ['Adults need 150 minutes of physical ___ a week.', 'activity'], ['Sleeping well is part of a healthy ___.', 'lifestyle']] }
];
// Rewrite the sentence: replace ONE word with the word in brackets
const REWRITE = [
  ['I never eat breakfast during the week.', 'seldom', 'never', ['I seldom eat breakfast during the week.']],
  ['People always feel tired after a long flight.', 'tend to', 'always feel', ['People tend to feel tired after a long flight.']],
  ['All young people use social media.', 'many', 'All', ['Many young people use social media.']],
  ['The company is going to show its new electric car next week.', 'demonstrate', 'show', ['The company is going to demonstrate its new electric car next week.']],
  ['The metro can run for 20 hours a day.', 'operate', 'run', ['The metro can operate for 20 hours a day.']],
  ['The council is going to try to reduce traffic in the centre.', 'attempt', 'try', ['The council is going to attempt to reduce traffic in the centre.']],
  ['The new project will need a lot of money.', 'require', 'need', ['The new project will require a lot of money.']],
  ['We should think about other solutions.', 'consider', 'think about', ['We should consider other solutions.']],
  ['The city wants to make more cycle lanes.', 'create', 'make', ['The city wants to create more cycle lanes.']],
  ['Car sharing can cut the number of cars on the road.', 'reduce', 'cut', ['Car sharing can reduce the number of cars on the road.']],
  ['The answer to the problem is clear to me.', 'obvious', 'clear', ['The answer to the problem is obvious to me.']],
  ['There is not one big park, but there are different small gardens.', 'separate', 'different', ['There is not one big park, but there are separate small gardens.']],
  ['Saudi families usually eat dates with Arabic coffee.', 'often', 'usually', ['Saudi families often eat dates with Arabic coffee.']],
  ['Everybody gives expensive gifts at weddings.', 'some people', 'Everybody gives', ['Some people give expensive gifts at weddings.']],
  ['I hardly ever drink fizzy drinks.', 'rarely', 'hardly ever', ['I rarely drink fizzy drinks.']],
  ['Students always study late before exams.', 'tend to', 'always study', ['Students tend to study late before exams.']],
  ['Pollution is having an effect on all the animals in the sea.', 'many', 'all the', ['Pollution is having an effect on many animals in the sea.', 'Pollution is having an effect on many of the animals in the sea.']],
  ['Scientists think that the sea level will rise.', 'predict', 'think', ['Scientists predict that the sea level will rise.']],
  ['Global warming is a big problem for the planet.', 'issue', 'problem', ['Global warming is a big issue for the planet.']],
  ['Cars are one of the causes of air pollution.', 'contribute to', 'are one of the causes of', ['Cars contribute to air pollution.']]
];
const ORDER = [
  [['Some plant species', 'are dying out', 'because of', 'pesticides.'], 'because of + noun.'],
  [['The desert', 'is', 'an important habitat', 'for many species.'], 'subject + verb + object + place.'],
  [['Neither', 'the camel', 'nor', 'the oryx', 'is from', 'Europe.'], 'Neither … nor … + singular verb.'],
  [['Both', 'lions', 'and', 'tigers', 'are', 'endangered.'], 'Both … and … + plural verb.'],
  [['Camels', 'live in deserts,', 'whereas', 'polar bears', 'live in the Arctic.'], 'idea 1, whereas idea 2.'],
  [['Many glaciers', 'are melting', 'due to', 'rising temperatures.'], 'due to + noun phrase.'],
  [['Deforestation', 'results in', 'the loss', 'of habitats.'], 'cause + results in + effect.'],
  [['Floods', 'are caused by', 'heavy rain', 'and', 'deforestation.'], 'effect + is caused by + cause.'],
  [['If', 'the city', 'builds a metro,', 'traffic', 'will decrease.'], 'If + present, will.'],
  [['Unless', 'we', 'act now,', 'the species', 'will disappear.'], 'Unless + positive verb.'],
  [['The bus', 'is', 'cheaper', 'than', 'the taxi.'], 'comparative + than.'],
  [['She', 'didn\'t get', 'the job', 'because', 'her CV', 'wasn\'t clear enough.'], 'because + clause.'],
  [['That species', 'is not', 'endangered,', 'but', 'its population', 'is decreasing.'], 'idea 1, but idea 2.'],
  [['Although', 'gyms', 'are expensive,', 'running', 'is free.'], 'Although + idea 1, idea 2.'],
  [['Governments', 'should', 'tax', 'sugary drinks', 'in order to', 'reduce obesity.'], 'in order to + verb.'],
  [['Schools', 'should', 'teach cooking', 'so that', 'children', 'can eat well.'], 'so that + subject + can.'],
  [['Many people', 'tend to', 'eat', 'more', 'during', 'holidays.'], 'tend to + verb.'],
  [['Young people', 'seldom', 'write', 'letters', 'nowadays.'], 'frequency adverb before the main verb.']
];
const HALVES = [
  [['Fossil fuels will run out', 'unless we start using more renewable energy.'], ['Many rainforests are disappearing', 'due to logging and farming.'], ['The hard work of the volunteers', 'is leading to more turtles being saved.'], ['Camels can live in the desert,', 'whereas horses need more water.'], ['If the city plants more trees,', 'the streets will be cooler.']],
  [['Traffic will get worse', 'if the city does not improve public transport.'], ['The roads are full in the morning', 'because of the rush hour.'], ['Although the metro is new,', 'many people still drive.'], ['Car sharing results in', 'fewer cars on the road.'], ['Unless you leave early,', 'you will be late for class.']],
  [['Many traditions are changing', 'due to technology.'], ['In Japan people bow,', 'whereas in Saudi Arabia people often shake hands.'], ['Neither my sister nor my brother', 'likes traditional music.'], ['If young people learn old crafts,', 'the skills will not die out.'], ['Weddings have become more expensive', 'because of social media.']],
  [['Governments should tax junk food', 'in order to make it more expensive.'], ['Restaurants should show calories', 'so that people can choose healthy food.'], ['Some people blame individuals for obesity.', 'However, others blame governments.'], ['Although exercise is important,', 'many students do not have time for it.'], ['Regular exercise reduces', 'the risk of heart disease.']]
];
// Summary + personal response tasks built from the Reading 1 articles (exactly like the mid-term)
const SUMMARY = READ.map(p => ({ id: 'sum-' + p.id, title: p.r1.title, article: p.r1,
  prompt: `Write a summary paragraph about the article "${p.r1.title}". Then write a response paragraph giving your opinion on whether the ideas could be useful in your city or town. Connect the author's ideas to your city and give examples that agree and / or disagree with the author.` }));
SUMMARY[0].model = [
  [['In the article "Gardens in the Sky", the author explains that architects are turning empty city roofs into green gardens.', 'topic'], ['According to the writer, rooftop gardens keep buildings cooler, reduce the use of air conditioning and clean the air.', 'support'], ['The author also states that they help wildlife, such as bees and butterflies.', 'support'], ['However, the writer points out that not every roof is strong enough, and the gardens need care and water.', 'counter'], ['Finally, the author suggests that they will not replace parks, but they can make cities greener and cooler.', 'conc']],
  [['I agree with the author that rooftop gardens could be useful in Riyadh.', 'conc'], ['One reason is that our summers are extremely hot, so a cooler building would save a lot of electricity.', 'support'], ['For example, my university has many flat roofs that are empty and very hot.', 'detail'], ['However, water is limited in Saudi Arabia, so the gardens should use desert plants.', 'counter'], ['Overall, I believe that rooftop gardens are a smart idea for our city if they are planned carefully.', 'conc']]
];
SUMMARY[1].model = [
  [['In the article "A New Way to Move", the writer describes how the new metro is changing travel in Riyadh.', 'topic'], ['According to the author, the metro has six lines and driverless trains that arrive every few minutes.', 'support'], ['The writer also explains that the stations were designed for the hot climate.', 'support'], ['Experts hope that the metro will reduce traffic congestion and air pollution.', 'support'], ['Finally, the author suggests that, although some people still drive, the metro gives residents a real choice.', 'conc']],
  [['I partly agree with the writer that the metro will improve life in the city.', 'conc'], ['One reason is that many students, like my friends, now take the metro to university and avoid the rush hour.', 'detail'], ['In addition, fewer cars will mean cleaner air.', 'support'], ['However, many families tend to prefer their cars in summer, so buses must connect more neighbourhoods to the stations.', 'counter'], ['Overall, the metro is a good start, but the city needs more connections.', 'conc']]
];
SUMMARY[2].model = [
  [['In the article "The Turtles of the Red Sea", the author explains that green turtles are endangered and need protection.', 'topic'], ['According to the writer, plastic, fishing nets, the loss of quiet beaches and bright lights are the main threats.', 'support'], ['The author describes how volunteers patrol the beaches at night and protect the nests.', 'support'], ['The writer also states that very few babies survive to become adults.', 'support'], ['Finally, the author argues that protecting turtles also helps people, because it brings tourists and jobs.', 'conc']],
  [['I strongly agree with the author that turtles must be protected.', 'conc'], ['One reason is that the Red Sea is part of our natural heritage.', 'support'], ['For example, in Jeddah many people go to the beach, so the lights and plastic could affect turtles there, too.', 'detail'], ['However, tourism can also be a problem if too many visitors come to the beaches.', 'counter'], ['Overall, I believe that volunteer programmes like this should be started in more coastal towns.', 'conc']]
];
const SUMMARY_TABLE = [['Summary: title + author + main idea', '', B], ['Author\'s point 1', '', GR], ['Author\'s point 2', '', GR], ['Author\'s point 3', '', GR], ['Response: agree / partly agree / disagree', '', PK], ['Connect to my city + example', '', OR], ['Other side (However…)', '', PU], ['Concluding sentence', '', PK]];
const SUMMARY_FRAME = 'Paragraph 1 · Summary (the author\'s ideas, your words, no "I")\nIn the article "___", the author explains that ___.\nAccording to the writer, ___.\nThe author also states that ___.\nFinally, the writer suggests that ___.\n\nParagraph 2 · Response (your opinion)\nI agree / partly agree / disagree with the author that ___.\nOne reason is that ___.\nFor example, in my city, ___.\nHowever, ___.\nOverall, ___.';
const SUMMARY_CHECKS = [['150 words or more', 'WORDS>=150'], ['Two paragraphs: summary, then response', 'PARAS>=2'], ['Summary starts with the title: In the article "…", …', '(in the article|according to)'], ['A reporting verb: explains, states, suggests, argues, describes', '(explains|states|suggests|argues|describes|points out)'], ['No "I" in the summary paragraph', 'NOI1'], ['Response: I agree / I partly agree / I disagree', '(i agree|i disagree|i partly agree|i strongly agree|i partially agree)'], ['Connect to your city: in Riyadh / in my city / in my town', '(in riyadh|in my city|in my town|in jeddah|in saudi|in our city|my university|in dammam|in khobar)'], ['An example: For example / For instance', '(for example|for instance)'], ['The other side: However, …', '(however|on the other hand|although)'], ['A concluding sentence: Overall / In conclusion', '(overall|in conclusion|to sum up)']];

// ===================================================== EXAM MAP (what each paper contains)
const INFO = {
  ls: { name: 'Listening & Speaking paper', parts: [
    ['🎧 Listening 1', 'Taking notes (complete the notes) + Listening for explanations (circle a, b or c)'],
    ['🎧 Listening 2', 'Cause and effect (match the sentence halves) + Listening for opinion (A agree / D disagree)'],
    ['🌿 Language', 'Key vocabulary (complete a paragraph from a box) · Grammar (correct the mistakes) · Prefixes and suffixes'],
    ['🎤 Speaking', 'A presentation of at least 2 minutes: a problem, solutions and the predicted results of each solution']] },
  rw: { name: 'Reading & Writing paper', parts: [
    ['📖 Reading 1', 'Predicting content using visuals (T / F: will it be mentioned?) + Reading for detail (circle a, b or c)'],
    ['📖 Reading 2', 'Main ideas in academic texts (number them in order) + Identifying purpose and audience'],
    ['🌿 Language', 'Key vocabulary (complete a paragraph from a box) · Collocations (one word is not used) · Grammar (rewrite with the word in brackets)'],
    ['✍️ Writing', 'Grammar for writing (put the words in order + match the sentence halves) + Writing task: summary + personal response']] }
};

window.MID = { LISTEN, LS_VOCAB, FIX, AFFIX, AFFIX_BOX, SPEAK, SPEAK_PHRASES, SPEAK_PARTS, READ, RW_VOCAB, COLLOC, REWRITE, ORDER, HALVES, SUMMARY, SUMMARY_TABLE, SUMMARY_FRAME, SUMMARY_CHECKS, INFO };
})();
