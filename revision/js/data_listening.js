// LISTENING GUEST ROOM · listening skills + mock tests read aloud by the phone (original scripts)
(function () {
const M = (q, o, why) => ({ t: 'mcq', q, o, a: 0, why });
const G = (q, a, why) => ({ t: 'gap', q, a: [].concat(a), why });
const S = (q, items, why) => ({ t: 'seq', q, items, why });

const lessons = [
  { id: 'signpost', emoji: '🪧', title: 'Signposts in a lecture', src: 'L&S Units 1 and 2', short: 'Words that tell you what comes next',
    blocks: [
      { k: 'rule', title: 'Listen for these', html: '<table class="tbl"><tr><th>The speaker is…</th><th>Listen for</th></tr><tr><td>giving the plan</td><td>Today I\'m going to talk about… First, … Then, … Finally, …</td></tr><tr><td>starting a new part</td><td>Moving on to… / Let\'s start with… / Now, let\'s look at…</td></tr><tr><td>adding a point</td><td>Another… / On top of that, / In addition,</td></tr><tr><td>finishing</td><td>To sum up, / In short, / Overall, / In conclusion,</td></tr></table>' },
      { k: 'way', tag: 'Exam tip', html: '<div class="ex">The plan at the start helps you answer <b>ordering</b> questions. Write 1, 2, 3 next to the parts while you listen.</div>' }
    ],
    audio: [['L', 'Today I\'m going to talk about deforestation. First of all, I\'ll look at the causes. Then, I\'ll move on to the effects. Finally, I\'ll suggest some solutions. So, let\'s start with the causes. The first cause is farming. Another important cause is logging, which means cutting down trees for wood.']], voices: { L: 'f' },
    q: [S('Put the parts of the lecture in order.', ['the causes', 'the effects', 'some solutions'], 'First of all → Then → Finally.'), M('What does "logging" mean, according to the speaker?', ['cutting down trees for wood', 'a type of farming', 'planting new trees', 'writing in a diary'], 'The speaker explains: which means cutting down trees for wood.')] },
  { id: 'counter', emoji: '⚖️', title: 'Contrast and counter-arguments', src: 'L&S Units 1 and 2', short: 'What is the speaker arguing against?',
    blocks: [
      { k: 'rule', title: 'Listen for these', html: '<div class="ex"><b>It may be true that</b> X, <b>but</b> Y → the speaker accepts X a little, but argues for Y.</div><div class="ex"><b>That\'s completely true, but…</b> / <b>And yet…</b> / <b>However,…</b> / <b>On the other hand,…</b></div><div class="ex">The words <b>after but</b> are the speaker\'s real opinion.</div>' },
      { k: 'way', tag: '"What is the speaker arguing against?"', html: '<div class="ex">Find the idea the speaker <b>disagrees with</b>. It usually comes after <b>It may be true that…</b> or <b>Some people say that…</b></div>' }
    ],
    audio: [['A', 'Nuclear power is cheap, and it does not produce greenhouse gases.'], ['B', 'It may be true that nuclear power produces less carbon dioxide, but an accident could affect people for many years. On top of that, nuclear waste stays dangerous for thousands of years.']], voices: { A: 'f', B: 'm' },
    q: [M('What is speaker B arguing against?', ['using nuclear power', 'reducing greenhouse gases', 'saving money on energy', 'building wind farms'], 'B accepts one point ("It may be true…"), then gives two dangers of nuclear power.'), M('Which phrase introduces B\'s second point?', ['On top of that', 'It may be true that', 'but', 'for many years'], 'On top of that = in addition.')] },
  { id: 'explain', emoji: '💡', title: 'Reasons and personal experience', src: 'L&S Unit 3', short: 'The reason for this is… / This is because… / From my own experience…',
    blocks: [{ k: 'rule', title: 'Listen for these', html: '<div class="ex"><b>The reason for this is that…</b> / <b>This is because…</b> → a reason is coming.</div><div class="ex"><b>From my own experience,…</b> / <b>Personally,…</b> → a personal example is coming.</div>' }],
    audio: [['A', 'I think the city should make buses free for students. The reason for this is that many students cannot afford taxis. From my own experience, I spend about three hundred riyals a month on transport.']], voices: { A: 'f' },
    q: [M('Why should buses be free for students?', ['Many students cannot afford taxis.', 'Buses are always empty.', 'Students do not like the metro.', 'The city has too many buses.'], 'After "The reason for this is that…"'), G('The speaker spends about ___ riyals a month on transport.', ['300', 'three hundred'], 'From my own experience, I spend about three hundred riyals…')] },
  { id: 'rhet', emoji: '❓', title: 'Rhetorical questions', src: 'L&S Unit 3', short: 'The speaker asks a question and answers it herself',
    blocks: [{ k: 'rule', title: 'Why do speakers use them?', html: '<div class="ex">A <b>rhetorical question</b> does not need an answer from the audience. The speaker uses it to <b>introduce the next point</b> and make listeners think.</div><div class="ex">"So, why do people drive when there is a metro? The answer is simple: …"</div><div class="ex">Exam tip: the <b>answer comes right after the question</b>. Listen carefully there.</div>' }],
    audio: [['A', 'So, why do people still drive when there is a metro? The answer is simple. The metro station is too far from their homes.']], voices: { A: 'f' },
    q: [M('Why does the speaker ask "Why do people still drive when there is a metro?"', ['to introduce her answer', 'because she wants the audience to reply', 'because she does not know', 'to change the topic'], 'She answers it immediately: a rhetorical question.'), M('Why do people still drive, according to the speaker?', ['The station is too far from their homes.', 'The metro is expensive.', 'The metro is slow.', 'They like their cars.'], 'The answer comes right after the question.')] },
  { id: 'numbers', emoji: '🔢', title: 'Numbers and spelling for gap fills', src: 'Exam question type', short: '15 or 50? Percent, thousand, million',
    blocks: [{ k: 'rule', title: 'Hear the difference', html: '<div class="ex">fif<b>TEEN</b> (15) → stress at the end. <b>FIF</b>ty (50) → stress at the start. Same for 13/30, 14/40, 16/60, 17/70, 18/80, 19/90.</div><div class="ex">percent = %. thousand = 1,000. million = 1,000,000. two point five = 2.5</div><div class="ex">You can write numbers as <b>digits</b> (20) or <b>words</b> (twenty). Spelling of words must be correct.</div>' }],
    audio: [['A', 'The new bridge is fifteen kilometres long. It cost two point five billion riyals, and fifty thousand cars use it every day. Around thirty percent of drivers say their journey is now shorter.']], voices: { A: 'm' },
    q: [G('The bridge is ___ kilometres long.', ['15', 'fifteen'], 'fifTEEN: stress at the end = 15.'), M('How many cars use the bridge every day?', ['50,000', '15,000', '5,000', '500,000'], 'fifty thousand = 50,000.'), G('About ___ percent of drivers say the journey is shorter.', ['30', 'thirty', '30%'], 'THIRty = 30.')] },
  { id: 'before', emoji: '🗝️', title: 'Before you press play', src: 'Exam strategy', short: 'Read, underline, predict',
    blocks: [{ k: 'rule', title: 'Three steps', html: '<div class="ex">1. <b>Read</b> all the questions before the recording starts.</div><div class="ex">2. <b>Underline</b> the key words (names, numbers, places).</div><div class="ex">3. <b>Predict</b> the type of answer: a number? a noun? a verb? a reason?</div><div class="ex">On the first listening, answer what you can. On the second listening, check and fill the gaps.</div>' }],
    q: [M('Question: "Hydroponic farms use up to ___ less water." What kind of answer do you expect?', ['a number or a percentage', 'a verb', 'a person\'s name', 'a colour'], '"up to … less" is followed by an amount.'), M('When should you read the questions?', ['before the recording starts', 'after the second listening', 'only if you have time', 'never'], 'Reading first tells you what to listen for.')] }
];

const tests = [
  { id: 'hydro', unit: 'L&S Unit 2', emoji: '🌱', title: 'Lecture: Farming without soil', kind: 'Lecture', situation: 'You will hear a lecturer talking about hydroponics. Read the questions first.', voices: { L: 'f' }, names: { L: 'Lecturer' },
    script: [
      ['L', 'Good morning, everyone. Today I\'m going to talk about hydroponics, which is a way of growing plants without soil. First of all, I\'ll explain what hydroponics is. Then I\'ll talk about its advantages, and finally I\'ll look at some of the problems.'],
      ['L', 'So, what is hydroponics? In a hydroponic farm, plants grow in water that contains all the nutrients they need. The roots sit in the water, or in a light material such as small stones, and the plants usually grow inside a building under special lights.'],
      ['L', 'Moving on to the advantages. The biggest benefit is water. Hydroponic farms use up to ninety percent less water than traditional farms, because the water is used again and again. This is extremely important in dry countries like ours. Another advantage is that farmers can grow food all year round, in any weather. On top of that, because the plants grow indoors, farmers do not need to use chemicals to kill insects.'],
      ['L', 'However, hydroponics is not perfect. The main drawback is cost. Building a hydroponic farm and paying for the electricity for the lights is expensive. Also, farmers need special training to control the water and the nutrients. If something goes wrong, for example if the electricity stops, the plants can die very quickly.'],
      ['L', 'To sum up, hydroponics uses much less water and allows farmers to grow food all year. It may not replace traditional farming completely, but in my opinion, it could be an important part of the solution to the food and water crisis. Thank you.']
    ],
    q: [
      M('What is the lecture mainly about?', ['a way of growing plants without soil', 'how to save electricity at home', 'problems of traditional farming in Europe', 'how insects damage plants'], 'Today I\'m going to talk about hydroponics, which is a way of growing plants without soil.'),
      S('Put the parts of the lecture in order.', ['what hydroponics is', 'the advantages', 'the problems', 'a summary and the speaker\'s opinion'], 'First of all → Then → finally → To sum up.'),
      G('Hydroponic farms use up to ___ percent less water than traditional farms.', ['90', 'ninety', '90%'], 'up to ninety percent less water.'),
      M('Why do hydroponic farms use less water?', ['The water is used again and again.', 'The plants are smaller.', 'They only grow plants in winter.', 'They use chemicals instead of water.'], '…because the water is used again and again.'),
      M('Which advantage is NOT mentioned?', ['The food tastes better.', 'Farmers can grow food all year.', 'Less water is needed.', 'No chemicals are needed to kill insects.'], 'The speaker never talks about taste.'),
      G('The main drawback is ___.', ['cost', 'the cost'], 'The main drawback is cost.'),
      M('What can happen if the electricity stops?', ['The plants can die very quickly.', 'The water becomes dirty.', 'The farm closes for a year.', 'Insects attack the plants.'], 'If the electricity stops, the plants can die very quickly.'),
      M('What is the speaker\'s opinion?', ['Hydroponics could be an important part of the solution.', 'Hydroponics will completely replace traditional farming.', 'Hydroponics is too expensive to be useful.', 'Hydroponics is dangerous for people.'], '…it could be an important part of the solution to the food and water crisis.')
    ] },
  { id: 'wind', unit: 'L&S Unit 2', emoji: '🌬️', title: 'Debate: A wind farm near our town', kind: 'Debate', situation: 'You will hear two people, Lina and Faisal, in a debate about building a wind farm near their town.', voices: { A: 'f', B: 'm' }, names: { A: 'Lina', B: 'Faisal' },
    script: [
      ['A', 'Good evening. I\'m Lina, and tonight I\'m going to argue that our town should build the new wind farm. The main benefit is clear. Wind power is clean and renewable. It does not produce greenhouse gases, and the wind is free.'],
      ['B', 'Thank you, Lina. I\'m Faisal. It may be true that wind power is clean, but I don\'t think a wind farm near our town is a good idea. First of all, wind turbines are noisy. The nearest turbine would be only two kilometres from the new school. Secondly, the turbines will damage the view of the mountains, and that could reduce the number of tourists.'],
      ['A', 'That\'s completely true, Faisal. Some turbines can be noisy. However, modern turbines are much quieter than old ones. And what about the long-term benefits? The wind farm would provide electricity for about twenty thousand homes and create around two hundred jobs.'],
      ['B', 'And yet the wind does not blow all the time. On calm days, we will still need power from fossil fuels. In my opinion, solar power is a better alternative for our region. We have sunshine almost every day, and solar panels are silent.'],
      ['A', 'Solar power is a great option too, but it does not work at night. I believe that we need both. So, my final point is this. If we don\'t invest in renewable energy now, our children will pay the price.']
    ],
    q: [
      M('What is the debate about?', ['whether to build a wind farm near the town', 'whether to build a new school', 'how to attract more tourists', 'how to reduce noise in the town'], 'Lina argues that the town should build the new wind farm.'),
      M('What is Faisal arguing against?', ['building the wind farm near the town', 'using solar power', 'renewable energy in general', 'creating new jobs'], '"I don\'t think a wind farm near our town is a good idea."'),
      G('The nearest turbine would be ___ kilometres from the new school.', ['2', 'two'], 'only two kilometres from the new school.'),
      M('How does Lina answer the point about noise?', ['Modern turbines are much quieter.', 'Noise is not important.', 'The school will move.', 'Turbines are silent at night.'], 'However, modern turbines are much quieter than old ones.'),
      G('The wind farm would provide electricity for about ___ homes.', ['20,000', '20000', 'twenty thousand'], 'about twenty thousand homes.'),
      M('How many jobs would the wind farm create?', ['about 200', 'about 2,000', 'about 20', 'about 20,000'], 'around two hundred jobs.'),
      M('Which alternative does Faisal suggest?', ['solar power', 'nuclear power', 'coal', 'hydroponics'], 'solar power is a better alternative for our region.'),
      M('Which problem with solar power does Lina mention?', ['It does not work at night.', 'It is noisy.', 'It is very expensive.', 'It damages the view.'], 'Solar power… does not work at night.'),
      M('Which phrase does Faisal use to start his counter-argument?', ['It may be true that…, but…', 'First of all…', 'To sum up…', 'For example…'], 'It may be true that wind power is clean, but…')
    ] },
  { id: 'radio', unit: 'L&S Unit 3', emoji: '📻', title: 'Radio programme: Why is traffic getting worse?', kind: 'Radio interview', situation: 'You will hear a radio presenter, Noor, talking to Dr. Hassan, a traffic engineer.', voices: { A: 'f', B: 'm' }, names: { A: 'Noor', B: 'Dr. Hassan' },
    script: [
      ['A', 'Good morning and welcome to City Talk. I\'m Noor. Every day, thousands of us sit in traffic on the way to work or university. But why is the traffic getting worse, and what can we do about it? With me in the studio is Dr. Hassan, a traffic engineer. Dr. Hassan, why is traffic so bad?'],
      ['B', 'Good morning, Noor. Well, the main reason is simple. The number of cars has grown much faster than the number of roads. In our city, there are now about forty percent more cars than ten years ago. Another reason is that most cars carry only one person. In fact, our studies show that eight out of ten cars at rush hour have just the driver inside.'],
      ['A', 'That\'s amazing. So is building more roads the answer?'],
      ['B', 'Actually, no. It sounds like a good idea, doesn\'t it? But new roads usually fill up with new cars in a few years. So what is the answer? I\'d suggest that we focus on getting more people into fewer vehicles.'],
      ['A', 'How can we do that?'],
      ['B', 'There are a few ways. First, we need better public transport, with buses that come every ten minutes. Second, companies could reward employees who share a car to work. And third, I think it would be better if schools and offices started at different times, so that not everyone is on the road at eight o\'clock.'],
      ['A', 'What about safety? Many listeners have written to us about accidents.'],
      ['B', 'Yes, that\'s a serious issue. Speeding is the primary cause of serious crashes in the city. Cameras help, but drivers also need to respect the speed limit. A fine of a few hundred riyals is not enough to change some people\'s behaviour.'],
      ['A', 'Dr. Hassan, thank you very much.']
    ],
    q: [
      M('What type of programme is this?', ['a radio interview with an expert', 'a university lecture', 'a debate between two students', 'a news report about one accident'], 'A presenter asks a traffic engineer questions.'),
      G('There are about ___ percent more cars than ten years ago.', ['40', 'forty', '40%'], 'about forty percent more cars.'),
      M('How many cars at rush hour carry only the driver?', ['eight out of ten', 'four out of ten', 'two out of ten', 'all of them'], 'eight out of ten cars at rush hour have just the driver inside.'),
      M('Why is building more roads not the answer?', ['New roads fill up with new cars in a few years.', 'Roads are too expensive.', 'There is no space for new roads.', 'People prefer the metro.'], 'new roads usually fill up with new cars in a few years.'),
      M('"It sounds like a good idea, doesn\'t it?" Why does Dr. Hassan ask this?', ['to introduce his own answer, not to get a reply', 'because he does not know the answer', 'to ask Noor for her opinion', 'to change the topic to safety'], 'A rhetorical question: he answers it himself straight away.'),
      S('Put Dr. Hassan\'s three suggestions in the order he gives them.', ['better public transport', 'rewards for sharing a car', 'different start times for schools and offices'], 'First → Second → And third.'),
      G('Buses should come every ___ minutes.', ['10', 'ten'], 'buses that come every ten minutes.'),
      M('What is the primary cause of serious crashes?', ['speeding', 'using phones', 'bad roads', 'old cars'], 'Speeding is the primary cause of serious crashes.'),
      M('What does Dr. Hassan think about fines?', ['A small fine is not enough for some drivers.', 'Fines should be stopped.', 'Fines are too expensive.', 'Fines solve the problem completely.'], 'A fine of a few hundred riyals is not enough to change some people\'s behaviour.')
    ] },
  { id: 'cycle', unit: 'L&S Unit 3', emoji: '🚲', title: 'Presentation: Cycling to campus', kind: 'Student presentation', situation: 'You will hear a student giving a presentation with recommendations.', voices: { A: 'f' }, names: { A: 'Student' },
    script: [
      ['A', 'Hello everyone. Today I\'d like to talk about how we could make cycling to campus easier. Is cycling really possible in a hot city? I think it is, for at least six months of the year.'],
      ['A', 'First of all, the problem. At the moment, only about two percent of students cycle to university. The reason for this is that there are no safe cycle lanes, and there is nowhere to leave a bicycle.'],
      ['A', 'So, here are my recommendations. To begin with, I\'d suggest that the university build covered parking areas for bicycles near every building. Secondly, I think it would be better if the city connected the cycle lanes to the main metro stations. This is because most students live too far away to cycle the whole journey, but they could cycle to the station and then take the metro.'],
      ['A', 'From my own experience, the biggest problem is the heat. Last spring I cycled to class every morning, and it was fine before nine a.m. But after eleven, it was too hot. So the university ought to provide showers and changing rooms for cyclists.'],
      ['A', 'In short, the best thing would be to start small. Build parking, connect the lanes to the metro, and see how many students join. Thank you for listening.']
    ],
    q: [
      M('What is the main topic?', ['recommendations to make cycling to campus easier', 'the history of the bicycle', 'why the metro is better than cycling', 'how to stay cool in summer'], 'Today I\'d like to talk about how we could make cycling to campus easier.'),
      G('Only about ___ percent of students cycle to university now.', ['2', 'two', '2%'], 'only about two percent of students.'),
      M('Why do so few students cycle?', ['There are no safe lanes and nowhere to leave bikes.', 'Bicycles are too expensive.', 'The university does not allow bikes.', 'Students do not like sport.'], 'The reason for this is that there are no safe cycle lanes, and there is nowhere to leave a bicycle.'),
      S('Put the recommendations in the order she gives them.', ['covered bicycle parking near every building', 'cycle lanes connected to metro stations', 'showers and changing rooms for cyclists'], 'To begin with → Secondly → So the university ought to…'),
      M('Why should cycle lanes connect to metro stations?', ['Most students live too far away to cycle the whole journey.', 'Metro stations are cooler.', 'The metro is free for cyclists.', 'The city wants more cars.'], 'This is because most students live too far away…'),
      M('What does she say about her own experience?', ['Cycling was fine before 9 a.m., but too hot after 11.', 'She never cycles.', 'She had an accident.', 'Cycling was easy all day.'], 'fine before nine a.m. But after eleven, it was too hot.'),
      M('Which phrase introduces her personal experience?', ['From my own experience,…', 'The reason for this is…', 'In short,…', 'To begin with,…'], 'From my own experience = a personal example.'),
      M('"Is cycling really possible in a hot city?" This is…', ['a rhetorical question: she answers it herself', 'a question for the audience to answer at the end', 'a mistake', 'a question from a teacher'], 'She answers it immediately: I think it is…')
    ] },
  { id: 'leopard', unit: 'L&S Unit 1', emoji: '🐆', title: 'Presentation: The Arabian leopard', kind: 'Presentation', situation: 'You will hear a presentation about an endangered animal.', voices: { A: 'm' }, names: { A: 'Speaker' },
    script: [
      ['A', 'Good afternoon. My presentation is about the Arabian leopard, one of the most critically endangered animals in the world. I\'m going to talk about where it lives, the threats it faces, and what we can do to help.'],
      ['A', 'The Arabian leopard is the smallest leopard in the world. It lives in the mountains of Saudi Arabia, Yemen and Oman. Scientists believe that there are fewer than two hundred of them left in the wild.'],
      ['A', 'So why is it in danger? The main threat is the loss of its habitat. New roads, farms and buildings are destroying the mountain areas where it lives. Another threat is that farmers sometimes kill leopards because they attack goats and sheep. On top of that, the animals that leopards hunt, such as the ibex, are also disappearing.'],
      ['A', 'It\'s often said that one species cannot make a difference. On the contrary, the leopard is very important for the ecosystem, because it controls the number of other animals.'],
      ['A', 'What can we do? Saudi Arabia has started a breeding programme, and there are plans to return leopards to the wild. In my opinion, we should also teach farmers how to protect their animals without killing leopards. In conclusion, the Arabian leopard can survive, but only if we protect its habitat now. Thank you.']
    ],
    q: [
      M('What is the presentation about?', ['the Arabian leopard and the threats it faces', 'leopards in Africa', 'farming in the mountains', 'how to hunt ibex'], 'My presentation is about the Arabian leopard…'),
      G('There are fewer than ___ Arabian leopards left in the wild.', ['200', 'two hundred'], 'fewer than two hundred of them left in the wild.'),
      M('Where does the Arabian leopard live?', ['in the mountains', 'in the sand desert', 'near the sea', 'in rainforests'], 'It lives in the mountains of Saudi Arabia, Yemen and Oman.'),
      M('What is the main threat?', ['the loss of its habitat', 'farmers', 'disease', 'climate change'], 'The main threat is the loss of its habitat.'),
      S('Put the threats in the order the speaker mentions them.', ['loss of habitat', 'farmers killing leopards', 'the animals they hunt are disappearing'], 'The main threat → Another threat → On top of that.'),
      M('Why do farmers sometimes kill leopards?', ['The leopards attack goats and sheep.', 'They sell the skins.', 'Leopards destroy crops.', 'The government pays them.'], '…because they attack goats and sheep.'),
      M('What is the speaker arguing against?', ['the idea that one species cannot make a difference', 'breeding programmes', 'building roads', 'teaching farmers'], '"It\'s often said that… On the contrary…" The speaker disagrees with that idea.'),
      M('What does the speaker recommend?', ['teaching farmers to protect their animals without killing leopards', 'moving all leopards to zoos', 'stopping all farming', 'hunting more ibex'], 'In my opinion, we should also teach farmers…')
    ] }
];
window.LISTENING = { lessons, tests };
})();
