// UNIT 4 · WEATHER AND CLIMATE (Unlock 2, 3rd edition: R&W Unit 4 + L&S Unit 4) · original practice material
(function () {
const { M, TF, G, O, SEQ, MT, W, FILL, ROLES, T, P, D, C, X } = window.H;
QUEST.units[4] = {
  n: 4, title: 'Weather and Climate', emoji: '⛈️', tag: 'Extreme places, graphs and climate change',
  books: { rw: 'Extreme weather · read for detail · predict · graphs · comparatives and superlatives · describe a graph', ls: 'Weather and mood · climate change · predict from research · gerunds and infinitives · future forms · cause and effect' },
  words: [
    ['temperature', 'noun', 'how hot or cold something is', 'The temperature in Riyadh can reach 48°C in July.', 'RW'],
    ['rise', 'verb', 'to go up', 'Temperatures rise quickly in May.', 'RW'],
    ['fall', 'verb', 'to go down', 'At night, the temperature falls to 10°C in the desert.', 'RW'],
    ['shock', 'noun', 'a big surprise, usually bad', 'The snow in the desert was a shock for everyone.', 'RW'],
    ['decide', 'verb', 'to choose what to do after thinking', 'We decided to stay at home because of the storm.', 'RW'],
    ['rainfall', 'noun', 'the amount of rain in a place', 'Rainfall is very low in the Empty Quarter.', 'RW'],
    ['storm', 'noun', 'very bad weather with strong wind and rain', 'The storm closed the roads for two days.', 'RW'],
    ['flood', 'noun', 'a lot of water that covers land that is usually dry', 'After the heavy rain, there was a flood in the valley.', 'RW'],
    ['dry', 'adjective', 'with no water or rain', 'The Atacama Desert is very dry.', 'RW'],
    ['wet', 'adjective', 'with a lot of water or rain', 'The wettest month in Abha is August.', 'RW'],
    ['humid', 'adjective', 'hot and wet air that makes you feel sticky', 'Jeddah is very humid in summer.', 'LS'],
    ['cool', 'adjective', 'a little cold, in a nice way', 'The mountains are cool in the evening.', 'LS'],
    ['global warming', 'noun', 'the rise in the temperature of the Earth', 'Global warming makes summers hotter.', 'LS'],
    ['cause', 'verb', 'to make something happen', 'Smoke from factories causes pollution.', 'LS'],
    ['prevent', 'verb', 'to stop something before it happens', 'Planting trees can help prevent floods.', 'LS'],
    ['save', 'verb', 'to stop someone or something from danger; to keep and not waste', 'Turn off the lights to save energy.', 'LS'],
    ['energy', 'noun', 'power from the sun, oil, wind or electricity', 'Solar panels make clean energy from the sun.', 'LS'],
    ['cut down', 'phrasal verb', 'to make a tree fall by cutting it', 'People cut down millions of trees every year.', 'LS'],
    ['forest fire', 'noun', 'a big fire in a forest', 'Hot, dry weather can start a forest fire.', 'LS'],
    ['wildlife', 'noun', 'animals and plants that live free in nature', 'Climate change is dangerous for wildlife.', 'LS'],
    ['disappear', 'verb', 'to go away so you cannot see it', 'Some glaciers may disappear by 2100.', 'LS'],
    ['unusual', 'adjective', 'not normal, different', 'It was unusual to see snow in Tabuk.', 'LS'],
    ['upset', 'adjective', 'sad or worried', 'He was upset because the rain stopped the match.', 'LS'],
    ['prefer', 'verb', 'to like one thing more than another', 'I prefer cool weather to hot weather.', 'LS']
  ],
  grammar: [
    { id: 'comp', book: 'R&W', emoji: '📏', title: 'Comparatives and superlatives', short: 'hotter than, the hottest, more humid, the most humid',
      learn: [
        { k: 'rule', title: 'Short adjectives (one syllable)', html: '<p><b>+ -er than</b> / <b>the + -est</b>: <i>cold → colder than → the coldest</i><br>Double the last letter after short vowel + consonant: <i>hot → hotter → the hottest, wet → wetter → the wettest</i><br>-y → -ier / -iest: <i>dry → drier → the driest, sunny → sunnier → the sunniest</i></p>' },
        { k: 'rule', title: 'Long adjectives (two or more syllables)', html: '<p><b>more … than</b> / <b>the most …</b>: <i>humid → more humid than → the most humid; dangerous → the most dangerous</i></p><p>Irregular: <b>good → better → the best · bad → worse → the worst · far → further → the furthest</b></p>' },
        { k: 'anim', type: 'race', rows: [['🥉', 'Abha: hot'], ['🥈', 'Jeddah: hotter than Abha'], ['🥇', 'Riyadh: the hottest of the three']], note: 'Compare two things with -er / more. Compare three or more with the -est / the most.' },
        { k: 'mist', items: [['more hot', 'hotter'], ['the most cold', 'the coldest'], ['Jeddah is humider than Riyadh.', 'Jeddah is more humid than Riyadh.'], ['It is more better.', 'It is better.']] }
      ],
      qs: [M('Riyadh is ___ than London in summer.', ['hotter', 'more hot', 'hottest'], 'Short adjective: hot → hotter (double t).'),
        M('Antarctica is ___ continent on Earth.', ['the coldest', 'the most cold', 'colder'], 'Superlative of cold: the coldest.'),
        M('Jeddah is ___ than Riyadh.', ['more humid', 'humider', 'the most humid'], 'Humid is a long adjective: more humid.'),
        M('The Atacama is one of ___ places in the world.', ['the driest', 'the dryest', 'the most dry'], 'dry → the driest (y → i).'),
        M('This storm is ___ than the last one.', ['worse', 'badder', 'more bad'], 'bad → worse (irregular).'),
        M('Spring is ___ season to visit Abha.', ['the best', 'the better', 'the goodest'], 'good → the best.'),
        G('July is ___ (wet) month in Mawsynram.', ['the wettest'], 'wet → the wettest.'),
        W('Winter in Tabuk is more cold than winter in Jeddah.', 'more cold', 'colder', ['coldest', 'the coldest'], 'Short adjective: colder than.')]
    },
    { id: 'gerinf', book: 'L&S', emoji: '🎭', title: 'Gerunds and infinitives', short: 'enjoy walking, decide to stay, prefer…',
      learn: [
        { k: 'rule', title: 'Verb + -ing (gerund)', html: '<p>After <b>enjoy, like, love, hate, finish, avoid, stop, mind</b> use <b>-ing</b>: <i>I <b>enjoy walking</b> in the rain. We should <b>avoid driving</b> in a storm.</i><br>After prepositions too: <i>I\'m interested <b>in learning</b> about climate.</i><br>As a subject: <i><b>Planting</b> trees helps the environment.</i></p>' },
        { k: 'rule', title: 'Verb + to + base (infinitive)', html: '<p>After <b>want, decide, plan, need, hope, try, learn, agree</b> use <b>to + verb</b>: <i>We <b>decided to stay</b> inside. I <b>want to see</b> snow.</i></p><p><b>like, love, hate, prefer, start</b> can take both: <i>I prefer staying / to stay at home.</i></p>' },
        { k: 'mist', items: [['I enjoy to swim.', 'I enjoy swimming.'], ['We decided staying home.', 'We decided to stay home.'], ['Plant trees is important.', 'Planting trees is important.']] }
      ],
      qs: [M('I enjoy ___ in the cool evening air.', ['walking', 'to walk', 'walk'], 'enjoy + -ing.'),
        M('We decided ___ at home because of the sandstorm.', ['to stay', 'staying', 'stay'], 'decide + to + verb.'),
        M('You should avoid ___ when there is a flood.', ['driving', 'to drive', 'drive'], 'avoid + -ing.'),
        M('Scientists want ___ the ice in Antarctica.', ['to study', 'studying', 'study'], 'want + to + verb.'),
        M('___ energy is good for the planet.', ['Saving', 'Save', 'To saving'], 'A gerund can be the subject.'),
        M('Many people are interested in ___ about the weather.', ['learning', 'to learn', 'learn'], 'After a preposition (in), use -ing.'),
        W('I hope visiting Antarctica one day.', 'visiting', 'to visit', ['visit', 'visited'], 'hope + to + verb.'),
        W('My father finished to clean the car before the rain.', 'to clean', 'cleaning', ['clean', 'cleaned'], 'finish + -ing.')]
    },
    { id: 'future', book: 'L&S', emoji: '🔮', title: 'Future forms: will, be going to, present continuous', short: 'predictions and plans',
      learn: [
        { k: 'rule', title: 'will', html: '<p>Predictions from opinion and quick decisions: <i>I think it <b>will</b> rain tomorrow. Temperatures <b>will</b> rise. Wait, I\'<b>ll</b> get an umbrella.</i></p>' },
        { k: 'rule', title: 'be going to', html: '<p>Plans (decided before) and predictions from what we <b>see now</b>: <i>I\'m <b>going to</b> study climate science. Look at the black clouds! It\'s <b>going to</b> rain.</i></p>' },
        { k: 'rule', title: 'Present continuous for arrangements', html: '<p>Fixed plans with a time and place: <i>We <b>are flying</b> to Abha on Thursday.</i></p>' },
        { k: 'anim', type: 'future', rows: [['will', 60, '#1C7ED6', 'opinion, prediction'], ['be going to', 80, '#2F9E44', 'plan, or evidence now'], ['present continuous', 95, '#E8590C', 'fixed arrangement']], note: 'How sure and how planned is it?' }
      ],
      qs: [M('Look at those dark clouds! It ___ rain.', ['is going to', 'will', 'is raining'], 'Evidence now: be going to.'),
        M('I think summers ___ hotter in the future.', ['will be', 'are being', 'are going be'], 'Opinion prediction (I think): will.'),
        M('We ___ to Tabuk next Thursday. We have the tickets.', ['are flying', 'will fly', 'fly'], 'Fixed arrangement: present continuous.'),
        M('My brother ___ study environmental science next year. He decided last month.', ['is going to', 'will', 'goes to'], 'A plan decided before: be going to.'),
        M('"It\'s cold." "I ___ close the window."', ['\'ll', '\'m going to', 'am closing'], 'A quick decision now: will.'),
        O('Sea levels will rise by 2100.', 'will + base verb.'),
        W('It will to snow in the mountains tonight.', 'will to', 'will', ['is going', 'going to'], 'will + base verb, no to.'),
        W('Look! The river going to flood the road.', 'going to', 'is going to', ['will', 'goes to'], 'Do not forget be: is going to.')]
    },
    { id: 'cause', book: 'L&S', emoji: '➡️', title: 'Cause and effect', short: 'because, so, because of, as a result, cause',
      learn: [
        { k: 'rule', title: 'Linkers', html: '<p><b>because</b> + reason (sentence): <i>The roads closed <b>because</b> it snowed.</i><br><b>because of</b> + noun: <i>The roads closed <b>because of</b> the snow.</i><br><b>so</b> + result: <i>It snowed, <b>so</b> the roads closed.</i><br><b>As a result,</b> + result (new sentence): <i>It snowed heavily. <b>As a result,</b> the roads closed.</i><br><b>cause</b> (verb): <i>Heavy rain <b>causes</b> floods.</i></p>' },
        { k: 'anim', type: 'domino', items: [['People cut down trees', '#2F9E44'], ['so less rain stays in the soil', '#1C7ED6'], ['as a result, floods happen', '#E8590C'], ['because of floods, animals lose homes', '#C2255C']], note: 'One cause knocks down the next effect, like dominoes.' }
      ],
      qs: [M('The match stopped ___ the storm.', ['because of', 'because', 'so'], 'because of + noun (the storm).'),
        M('It was very hot, ___ we stayed inside.', ['so', 'because', 'because of'], 'so + result.'),
        M('The ice is melting ___ the Earth is getting warmer.', ['because', 'because of', 'so'], 'because + reason sentence.'),
        M('There was no rain for a year. ___, the lake disappeared.', ['As a result', 'Because', 'Because of'], 'As a result, + result at the start of a sentence.'),
        M('Smoke from cars ___ air pollution.', ['causes', 'because', 'results'], 'cause (verb) + effect.'),
        SEQ('Put the cause and effect chain in order.', ['The temperature of the Earth rises.', 'Ice in the Arctic melts.', 'Sea levels go up.', 'Some islands disappear under the water.'], 'Each sentence is the result of the one before it.'),
        W('The flight was late because the fog.', 'because', 'because of', ['so', 'as a result'], 'Before a noun (the fog), use because of.'),
        W('It rained all day, because the streets were wet.', 'because', 'so', ['because of', 'as a result of'], 'The wet streets are the result: so.')]
    }
  ],
  reading: {
    skill: { title: 'Read for detail · predict with what you know', blocks: [
      { k: 'rule', title: 'Predict first', html: '<p>Before you read, use what you <b>already know</b>. Look at the title and ask: <i>Which places are the hottest, the coldest, the wettest? What do I know about them?</i> Write two guesses, then read to check.</p>' },
      { k: 'rule', title: 'Reading for detail', html: '<p>Now read <b>slowly and carefully</b>. Underline key words in the question, find the same idea in the text (often with different words), then read the whole sentence. Be careful with words like <b>only, never, all, most</b>.</p>' }
    ] },
    title: 'The four extremes', sub: 'Where is the hottest, coldest, wettest and driest place on Earth?',
    paras: [
      'Most of us complain about the weather when it is a little too hot or a little too wet. But some people live in places with the most extreme weather on our planet.',
      'The hottest temperature ever recorded on Earth was 56.7°C, in Death Valley in the USA, in July 1913. Today, about 300 people live in the valley, and more than a million tourists visit every year. Most of them come in spring, because summer is too dangerous.',
      'The coldest temperature ever recorded was −89.2°C, at the Russian Vostok Station in Antarctica, in 1983. Nobody lives there all the time. A small group of scientists stays there to study the ice. In winter, they cannot go outside for more than a few minutes.',
      'Mawsynram, a village in north-east India, is one of the wettest places in the world. It gets almost 12,000 millimetres of rain a year. For comparison, Riyadh gets about 100 millimetres. Local people make special umbrellas that cover their whole body, called "knups", so they can work in the fields.',
      'Finally, the Atacama Desert in Chile is one of the driest places on Earth. Some weather stations there have never recorded rain. Scientists use the Atacama to test machines for Mars, because the ground is very similar.'
    ],
    qs: [M('Where was the hottest temperature recorded?', ['Death Valley, USA', 'the Atacama Desert', 'Riyadh'], 'Paragraph 2.'),
      M('Why do most tourists visit Death Valley in spring?', ['Summer is too dangerous.', 'Hotels are cheaper.', 'It rains in summer.'], 'Paragraph 2: because summer is too dangerous.'),
      TF('Many families live at Vostok Station all year.', false, 'Paragraph 3: Nobody lives there all the time.'),
      M('Why do scientists stay at Vostok?', ['to study the ice', 'to test machines for Mars', 'to visit tourists'], 'Paragraph 3.'),
      M('How much rain does Mawsynram get a year?', ['almost 12,000 mm', 'about 100 mm', 'about 1,200 mm'], 'Paragraph 4.'),
      M('What is a "knup"?', ['an umbrella that covers the whole body', 'a kind of field', 'a weather station'], 'Paragraph 4.'),
      M('Why do scientists test Mars machines in the Atacama?', ['The ground is similar to Mars.', 'It is the coldest place.', 'It is near Russia.'], 'Paragraph 5.'),
      M('Which sentence is true?', ['Riyadh gets much less rain than Mawsynram.', 'The coldest temperature was in 1913.', 'The Atacama has rain every week.'], 'About 100 mm compared with almost 12,000 mm.')]
  },
  listening: {
    skill: { title: 'Predict ideas from research', blocks: [
      { k: 'rule', title: 'Before a lecture', html: '<p>Read the title and think about what you know or found in research. Write 3 ideas you expect to hear. While you listen, tick the ideas you hear and add new ones. This keeps your brain active.</p>' },
      { k: 'ex', title: 'Example: a talk on "Weather and our mood"', items: ['I expect: sunny weather makes people happy.', 'I expect: rain makes some people sad.', 'Maybe: heat makes people angry?'] }
    ] },
    title: 'Mini-lecture: can the weather change how we feel?', situation: 'A short university talk. Before you listen, guess: does the weather change our mood? Listen twice.',
    voices: { A: 'f' }, names: { A: 'Dr Nadia (lecturer)' },
    script: [
      ['A', 'Good morning, everyone. Today\'s topic is weather and mood. Many people believe that the weather changes how we feel, and research shows that this is partly true.'],
      ['A', 'First, sunshine. When we are in the sun, our body makes more vitamin D, and our brain makes more serotonin, a chemical that helps us feel happy. As a result, many people feel more positive on sunny days.'],
      ['A', 'Second, short, dark days. In countries like Norway, the sun shines for only a few hours in winter. Because of this, some people feel tired and sad for the whole season. Doctors call this "winter depression".'],
      ['A', 'Third, heat. Some research suggests that in very hot weather, above about 32 degrees, people get angry more easily, especially in traffic. So heat affects our patience, too.'],
      ['A', 'However, the effect is different for each person. Some people prefer rainy days because they feel calm. My advice? Spend time outside every morning, even for twenty minutes. It is one of the easiest ways to feel better.']
    ],
    qs: [M('What is the main topic of the talk?', ['how the weather affects our mood', 'how to predict rain', 'why Norway is cold'], 'Today\'s topic is weather and mood.'),
      M('What does the brain make more of in the sun?', ['serotonin', 'vitamin C', 'energy drinks'], 'our brain makes more serotonin.'),
      M('What happens in Norway in winter?', ['The sun shines for only a few hours.', 'It is very humid.', 'There are many forest fires.'], 'the sun shines for only a few hours in winter.'),
      M('Above which temperature do people get angry more easily?', ['about 32 degrees', 'about 23 degrees', 'about 42 degrees'], 'above about 32 degrees.'),
      M('Where are hot people especially likely to get angry?', ['in traffic', 'at the beach', 'at home'], 'especially in traffic.'),
      TF('Everybody feels sad on rainy days.', false, 'Some people prefer rainy days because they feel calm.'),
      M('What is the lecturer\'s advice?', ['Spend twenty minutes outside every morning.', 'Stay inside when it is sunny.', 'Move to Norway.'], 'Her advice: spend time outside every morning, even for twenty minutes.')]
  },
  speaking: {
    skill: { title: 'Cause and effect in a presentation', blocks: [
      { k: 'rule', title: 'Organize: problem → causes → effects → solutions', html: '<p>Use <b>because of, causes, so, as a result, This means that…</b> to link your ideas. Finish with what people <b>should</b> do.</p>' }
    ] },
    title: 'Presentation: climate change in my region', prompt: 'Give a 1-minute presentation about one effect of climate change (hotter summers, less rain, floods, sandstorms…). Give one cause, two effects and one solution.',
    time: '1 minute', minWords: 90,
    plan: [['Introduce', 'hotter summers in Saudi Arabia', '#2F6DB5'], ['Cause', 'global warming · gases from cars and factories', '#2E8B57'], ['Effects', 'more electricity for AC · less water · health problems', '#D97706'], ['Solution', 'plant trees · solar energy · save water', '#C2185B']],
    model: [['Today I\'m going to talk about hotter summers in Saudi Arabia.', T], ['The main cause is global warming, because cars and factories produce a lot of gases.', P], ['As a result, people use more electricity for air conditioning.', D], ['Also, hot weather causes health problems, especially for old people.', D], ['To prevent this, we should plant more trees and use solar energy.', C], ['If everyone saves a little energy, it will make a big difference.', C]],
    phrases: ['Today I\'m going to talk about', 'The main cause is', 'because of', 'As a result', 'causes', 'This means that', 'We should'],
    parts: [['Introduce the topic', 'talk about|going to|today'], ['Give a cause', 'because|cause|due to'], ['Give an effect', 'as a result|so |this means|causes|leads to'], ['Suggest a solution', 'should|we can|need to|must'], ['Use a future form', '\\bwill\\b|going to']],
    keywords: ['global warming', 'temperature', 'energy', 'prevent', 'save', 'rise', 'humid', 'flood']
  },
  writing: {
    skill: { title: 'Describe a graph · topic and supporting sentences', blocks: [
      { k: 'rule', title: 'Graph language', html: '<p><b>rise / go up / increase</b> ↗ · <b>fall / go down / decrease</b> ↘ · <b>stay the same</b> → · <b>reach a peak</b> ⛰<br>Use months: <i><b>in</b> July</i>, and <b>from … to …</b>: <i>The temperature rises <b>from</b> 20°C in January <b>to</b> 44°C in July.</i></p>' },
      { k: 'rule', title: 'Give examples', html: '<p><b>for example, such as, like</b>: <i>Some months are very dry, <b>for example</b> June. Hot months <b>such as</b> July and August have no rain.</i></p>' },
      { k: 'rule', title: 'The paragraph', html: '<p>1. <b>Topic sentence</b>: what the graph shows. 2. <b>Supporting sentences</b>: the highest, the lowest, the changes, with numbers. 3. <b>Concluding sentence</b>: the main trend.</p>' },
      { k: 'html', html: '<div class="mini-graph" data-graph="quest"></div>' }
    ] },
    graph: { title: 'Quest Island: average temperature (°C)', months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], temp: [14, 16, 20, 25, 30, 34, 36, 35, 31, 26, 20, 15], rain: [40, 35, 30, 15, 5, 0, 0, 0, 5, 20, 35, 45] },
    build: [
      M('Look at the graph. Which month is the hottest on Quest Island?', ['July', 'June', 'August'], 'July has the highest bar: 36°C.'),
      M('Which month is the coldest?', ['January', 'December', 'February'], 'January: 14°C.'),
      M('Complete: The temperature ___ from 14°C in January to 36°C in July.', ['rises', 'falls', 'stays the same'], 'From 14 to 36 = it goes up.'),
      M('Complete: From August to December, the temperature ___ .', ['falls', 'rises', 'reaches a peak'], '35 → 15: it goes down.'),
      M('Which months have no rain at all?', ['June, July and August', 'January and February', 'May and September'], 'Rainfall is 0 mm in June, July and August.'),
      M('Which is the best topic sentence?', ['The graph shows the average temperature on Quest Island in each month of the year.', 'July is hot.', 'I like the weather on Quest Island.'], 'The topic sentence says what the graph shows.'),
      M('Choose the sentence with a correct example.', ['Some months are very wet, for example December.', 'Some months are very wet, such as for example December.', 'For example are December wet months.'], 'for example + one example.')
    ],
    task: { title: 'Describe the graph', prompt: 'Write a paragraph (70 to 100 words) describing the Quest Island temperature graph. Give a topic sentence, the hottest and coldest months, the changes, and a concluding sentence.',
      table: [['Topic sentence', 'what the graph shows', '#2F6DB5'], ['Highest', 'July 36°C', '#E03131'], ['Lowest', 'January 14°C', '#1C7ED6'], ['Changes', 'rises Jan→Jul · falls Aug→Dec', '#D97706'], ['Conclusion', 'hot summer, cool winter', '#C2185B']],
      frame: 'The graph shows ___. The hottest month is ___, with an average of ___. The coldest month is ___. The temperature rises from ___ to ___. After August, it falls to ___ in December. Some months are very warm, for example ___. Overall, Quest Island has ___.',
      checks: [['70 words or more', 'WORDS>=70'], ['A superlative (the hottest, the coldest…)', 'the (hottest|coldest|warmest|wettest|driest|highest|lowest|most)'], ['rise / fall language', 'rise|rises|fall|falls|increase|decrease|go up|goes up|go down|goes down'], ['from … to …', 'from .{2,30} to '], ['An example (for example, such as, like)', 'for example|such as|like '], ['A conclusion (Overall, In conclusion)', 'overall|in conclusion|to sum up']],
      model: [[['The graph shows the average temperature on Quest Island in each month of the year.', T], ['The hottest month is July, with an average of 36°C, and the coldest month is January, with 14°C.', P], ['The temperature rises from 14°C in January to 36°C in July.', D], ['After August, it falls quickly to 15°C in December.', D], ['Some months are very warm but pleasant, for example April and October.', D], ['Overall, Quest Island has very hot summers and cool winters.', C]]] }
  },
  quest: {
    // Frozen Peak · Blizzard Survival. Warmth meter drops on each mistake; correct answers add firewood.
    warmth: 5
  }
};
})();
