// UNIT 2 · FESTIVALS AND CELEBRATIONS (Unlock 2, 3rd edition: R&W Unit 2 + L&S Unit 2) · original practice material
(function () {
const { M, TF, G, O, SEQ, MT, W, FILL, ROLES, T, P, D, C, X } = window.H;
QUEST.units[2] = {
  n: 2, title: 'Festivals and Celebrations', emoji: '🎉', tag: 'Special days, traditions and fun',
  books: { rw: 'Festival articles · preview a text · in / on / at · adverbs of frequency · organize a paragraph', ls: 'Three festivals · a holiday discussion · take notes · questions · present continuous · suggestions' },
  words: [
    ['celebrate', 'verb', 'to do something special and fun because it is an important day', 'We celebrate Eid with all the family.', 'RW'],
    ['culture', 'noun', 'the traditions, food, music and art of a group of people', 'Food is an important part of Saudi culture.', 'RW'],
    ['traditional', 'adjective', 'done in the same way for a very long time', 'My grandmother wears a traditional dress at weddings.', 'Both'],
    ['fireworks', 'noun', 'small objects that explode in the sky with bright colours', 'At midnight there were amazing fireworks over the sea.', 'RW'],
    ['gift', 'noun', 'something you give to a person, a present', 'Children get a gift of money at Eid.', 'Both'],
    ['lucky', 'adjective', 'having good things happen by chance', 'In China, red is a lucky colour.', 'RW'],
    ['history', 'noun', 'all the things that happened in the past', 'The festival has a long history: it started 300 years ago.', 'RW'],
    ['visitors', 'noun', 'people who go to see a place or an event', 'Thousands of visitors come to the festival every year.', 'RW'],
    ['activities', 'noun', 'things you do for fun or interest', 'There are activities for children, like painting and games.', 'Both'],
    ['take part', 'phrase', 'to join an activity with other people', 'Thirty teams take part in the race.', 'Both'],
    ['highlight', 'noun', 'the best or most exciting part of something', 'The highlight of the night was the fireworks show.', 'RW'],
    ['take place', 'phrase', 'to happen (an event)', 'The festival takes place every January.', 'LS'],
    ['amazing', 'adjective', 'very, very surprising and good', 'The ice sculptures were amazing.', 'LS'],
    ['attract', 'verb', 'to make people want to come to a place', 'The festival attracts visitors from all over the world.', 'LS'],
    ['costume', 'noun', 'special clothes that make you look like someone or something else', 'The children wore animal costumes in the parade.', 'LS'],
    ['decorate', 'verb', 'to make something look pretty by adding lights, colours or pictures', 'We decorate the house with lights before Eid.', 'LS'],
    ['dish', 'noun', 'one kind of food in a meal', 'Kabsa is a famous dish in Saudi Arabia.', 'LS'],
    ['entertainment', 'noun', 'shows, music, games and other things that are fun to watch or do', 'There is free entertainment in the park every evening.', 'LS'],
    ['festival', 'noun', 'a special day or time with events, food and music', 'The festival lasts for three days.', 'LS'],
    ['frozen', 'adjective', 'turned into ice because it is very cold', 'In Harbin, the river is frozen in winter.', 'LS'],
    ['parade', 'noun', 'a line of people, music and cars that moves through the streets for a celebration', 'The parade went along the main street.', 'LS'],
    ['enjoy', 'verb', 'to like doing something and feel happy', 'Children enjoy the games at the festival.', 'LS'],
    ['have fun', 'phrase', 'to enjoy yourself', 'We always have fun at my cousin\'s wedding.', 'LS'],
    ['lecture', 'noun', 'a formal talk about a subject, often at a university', 'There is a lecture about the history of the festival.', 'LS']
  ],
  grammar: [
    { id: 'prep', book: 'R&W', emoji: '📅', title: 'Prepositions of time and place: in, on, at', short: 'in March, on Friday, at 8 p.m., at the park, in the city',
      learn: [
        { k: 'rule', title: 'Time', html: '<p><b>in</b> + months, years, seasons, long periods: <i>in March, in 2026, in winter, in the morning</i><br><b>on</b> + days and dates: <i>on Friday, on 23 September, on Eid day</i><br><b>at</b> + clock times and short moments: <i>at 8 p.m., at midnight, at night, at the weekend</i></p>' },
        { k: 'rule', title: 'Place', html: '<p><b>in</b> + inside a big area or space: <i>in Riyadh, in the park, in the street</i><br><b>on</b> + a surface or a line: <i>on the beach, on the river, on the wall</i><br><b>at</b> + a point or an event: <i>at the festival, at the stadium, at home</i></p>' },
        { k: 'anim', type: 'train', items: [['in', 'big: month, year, city', '#1C7ED6'], ['on', 'middle: day, date, surface', '#2F9E44'], ['at', 'small: time, point, event', '#E8590C']], note: 'From big to small: in → on → at.' }
      ],
      qs: [M('The festival starts ___ January.', ['in', 'on', 'at'], 'Months take in.'),
        M('We have a big family lunch ___ Friday.', ['on', 'in', 'at'], 'Days take on.'),
        M('The fireworks start ___ 9 p.m.', ['at', 'in', 'on'], 'Clock times take at.'),
        M('Saudi National Day is ___ 23 September.', ['on', 'in', 'at'], 'Dates take on.'),
        M('My cousins live ___ Jeddah.', ['in', 'on', 'at'], 'Cities take in.'),
        M('We met our friends ___ the festival.', ['at', 'on', 'in'], 'An event: at the festival.'),
        W('The parade takes place in Saturday morning.', 'in', 'on', ['at', 'by'], 'Days take on: on Saturday morning.'),
        W('The lanterns are beautiful in night.', 'in', 'at', ['on', 'by'], 'We say at night.')]
    },
    { id: 'freq', book: 'R&W', emoji: '🔁', title: 'Adverbs of frequency', short: 'always, usually, often, sometimes, rarely, never',
      learn: [
        { k: 'anim', type: 'meter', rows: [['always', 100, '#2F9E44', 'every time'], ['usually', 80, '#66A80F', 'most times'], ['often', 60, '#1C7ED6', 'many times'], ['sometimes', 40, '#F08C00', 'some times'], ['rarely', 10, '#E8590C', 'almost never'], ['never', 0, '#E03131', 'zero times']], note: 'How often? From 100% to 0%.' },
        { k: 'rule', title: 'Where do they go?', html: '<p><b>Before</b> the main verb: <i>We <b>always</b> visit my grandmother at Eid.</i><br><b>After</b> the verb be: <i>The streets <b>are often</b> crowded.</i><br>Questions: <i>How often do you go to festivals?</i></p>' },
        { k: 'mist', items: [['We visit always our cousins.', 'We always visit our cousins.'], ['The festival never is boring.', 'The festival is never boring.']] }
      ],
      qs: [M('Children ___ get new clothes for Eid. It happens every year.', ['always', 'never', 'rarely'], 'Every year = always.'),
        M('It ___ snows in Riyadh. Maybe once in fifty years!', ['rarely', 'usually', 'often'], 'Almost never = rarely.'),
        O('We usually eat dates and coffee at Eid.', 'The adverb goes before the main verb: usually eat.'),
        O('The festival is always very crowded.', 'The adverb goes after be: is always.'),
        O('I never miss the fireworks show.', 'never + main verb.'),
        M('How ___ do you go to the beach in summer?', ['often', 'always', 'much'], 'Ask about frequency with How often…?'),
        W('My family goes sometimes to Abha in summer.', 'goes sometimes', 'sometimes goes', ['goes sometime', 'sometimes go'], 'The adverb goes before the main verb: sometimes goes.'),
        W('The parade never is late.', 'never is', 'is never', ['never be', 'is not never'], 'With be, the adverb comes after: is never.')]
    },
    { id: 'qform', book: 'L&S', emoji: '❓', title: 'Present simple questions', short: 'Do you…? Does it…? When does it take place?',
      learn: [
        { k: 'rule', title: 'Yes / No questions', html: '<p><b>Do</b> + I / you / we / they + base verb: <i>Do you celebrate National Day?</i><br><b>Does</b> + he / she / it + base verb: <i>Does the festival take place in winter?</i> (not <s>Does it takes</s>)</p>' },
        { k: 'rule', title: 'Wh- questions', html: '<p>Question word + do / does + subject + verb: <i><b>Where</b> does the parade start? <b>When</b> do people decorate their houses? <b>What</b> do they eat?</i><br>With be: <i>Where <b>is</b> the festival? Why <b>are</b> people happy?</i></p>' }
      ],
      qs: [M('___ you enjoy festivals?', ['Do', 'Does', 'Are'], 'You + do.'),
        M('___ the festival attract many visitors?', ['Does', 'Do', 'Is'], 'The festival = it: Does.'),
        M('When ___ the parade start?', ['does', 'do', 'is'], 'The parade = it: does.'),
        M('What ___ people eat at the festival?', ['do', 'does', 'are'], 'People is plural: do.'),
        O('Where does the festival take place?', 'Question word + does + subject + base verb.'),
        O('Do you decorate your house for Eid?', 'Do + you + base verb.'),
        W('Does the festival takes place in January?', 'takes', 'take', ['taking', 'took'], 'After does, use the base verb: take.'),
        W('Where do the parade start?', 'do', 'does', ['is', 'are'], 'The parade is singular: Where does the parade start?')]
    },
    { id: 'pcont', book: 'L&S', emoji: '🎬', title: 'Present continuous', short: 'am / is / are + -ing: happening now',
      learn: [
        { k: 'rule', title: 'Form and use', html: '<p><b>am / is / are + verb-ing</b> for actions happening <b>now</b> or around now: <i>Look! The children <b>are dancing</b>. I<b>\'m watching</b> the parade.</i></p><p>Spelling: <i>dance → dancing, sit → sitting, decorate → decorating, take → taking</i>.</p>' },
        { k: 'rule', title: 'Present simple or present continuous?', html: '<p>Present simple = habits and facts: <i>The festival <b>takes place</b> every year.</i><br>Present continuous = now: <i>Right now, people <b>are watching</b> the fireworks.</i><br>Signal words: <b>now, right now, at the moment, look!, listen!</b></p>' },
        { k: 'mist', items: [['She is wear a costume.', 'She is wearing a costume.'], ['They dancing now.', 'They are dancing now.'], ['We are celebrate Eid every year.', 'We celebrate Eid every year.']] }
      ],
      qs: [M('Look! The children ___ in the parade.', ['are dancing', 'dance', 'is dancing'], 'Look! = now: are dancing.'),
        M('Listen! My brother ___ a traditional song.', ['is singing', 'sings', 'are singing'], 'Listen! = now. He = is.'),
        M('We ___ Eid with the family every year.', ['celebrate', 'are celebrating', 'is celebrating'], 'Every year = a habit: present simple.'),
        M('At the moment, my mother ___ the house with lights.', ['is decorating', 'decorates', 'decorating'], 'At the moment = now: is decorating.'),
        G('Right now, I ___ (watch) the fireworks on TV.', ['am watching', '\'m watching', 'm watching'], 'I + am + watching.'),
        G('They ___ (sit) near the stage now.', ['are sitting', '\'re sitting'], 'sit → sitting (double t).'),
        W('She is wear a beautiful costume today.', 'wear', 'wearing', ['wears', 'wore'], 'is + verb-ing: is wearing.'),
        W('The festival is taking place every winter.', 'is taking', 'takes', ['take', 'taking'], 'Every winter = a fact: present simple, takes.')]
    }
  ],
  reading: {
    skill: { title: 'Preview a text', blocks: [
      { k: 'rule', title: 'Look before you read', html: '<p><b>Previewing</b> means looking at a text quickly <b>before</b> you read it carefully. In 30 seconds, look at:</p><ol><li>the <b>title</b> and the <b>subtitle</b></li><li>the <b>pictures</b> and their captions</li><li>the <b>first sentence</b> of each paragraph</li></ol><p>Then ask: <i>What is this text about? Who wrote it? Who is it for?</i></p>' },
      { k: 'ex', title: 'Why preview?', items: ['You understand faster because you know the topic.', 'You know where to find information.', 'You can guess the purpose: to inform, to persuade, to entertain?'] }
    ] },
    title: 'Eid al-Fitr in Saudi Arabia', sub: 'A guide for international students: three days of family, food and fun',
    paras: [
      'Eid al-Fitr is one of the two biggest celebrations in Saudi Arabia. It takes place at the end of Ramadan, the month of fasting, and it usually lasts for three days. Families, friends and neighbours all take part.',
      'The day starts early. People wake up before sunrise, put on new or traditional clothes, and go to the Eid prayer. After the prayer, everyone says "Eid Mubarak" to friends and neighbours.',
      'Next, families visit their relatives, usually starting with the grandparents. There is always a lot of food: dates, Arabic coffee, sweets and big dishes such as kabsa. Children love this day because adults give them a gift of money called "eidiya".',
      'In the evening, cities are full of entertainment. Many cities decorate the streets with lights, and there are fireworks shows, concerts and activities for children. For many young people, the fireworks are the highlight of Eid.',
      'If you are an international student in Saudi Arabia, do not stay at home! Accept invitations, try the traditional food and enjoy the celebrations. It is the best way to learn about the culture.'
    ],
    qs: [M('Look at the title and the subtitle. Who is the text for?', ['international students', 'Saudi grandparents', 'shop owners'], 'The subtitle says: A guide for international students.'),
      M('What is the main purpose of the text?', ['to inform readers about Eid and give advice', 'to sell Eid clothes', 'to tell a funny story'], 'It explains Eid and ends with advice.'),
      M('When does Eid al-Fitr take place?', ['at the end of Ramadan', 'at the start of the year', 'in the middle of Ramadan'], 'Paragraph 1.'),
      M('How long does it usually last?', ['three days', 'one week', 'one day'], 'Paragraph 1: it usually lasts for three days.'),
      M('Who do families usually visit first?', ['the grandparents', 'the neighbours', 'their teachers'], 'Paragraph 3: usually starting with the grandparents.'),
      M('What is "eidiya"?', ['a gift of money for children', 'a traditional dish', 'a kind of prayer'], 'Paragraph 3.'),
      TF('There are no activities for children in the evening.', false, 'Paragraph 4: there are activities for children.'),
      M('Which paragraph gives advice?', ['paragraph 5', 'paragraph 2', 'paragraph 3'], 'Paragraph 5: do not stay at home! Accept invitations…')]
  },
  listening: {
    skill: { title: 'Take notes and listen for main ideas', blocks: [
      { k: 'rule', title: 'Good notes are short', html: '<p>Do not write every word. Write <b>key words</b>: names, places, numbers, dates. Use symbols: <b>&amp;</b> (and), <b>→</b> (goes to / causes), <b>+</b> (more), <b>e.g.</b> (for example).</p>' },
      { k: 'rule', title: 'Use a table', html: '<p>Prepare a table <b>before</b> you listen: <i>Festival · Where? · When? · What happens?</i> Then fill each box while you listen.</p>' }
    ] },
    title: 'Radio: three festivals, three countries', situation: 'A radio reporter talks to three visitors at festivals. Take notes in a table: where, when, what happens. Listen twice.',
    voices: { R: 'f', A: 'm', B: 'f', C: 'm' }, names: { R: 'Reporter', A: 'Li', B: 'Lucia', C: 'Rafael' },
    script: [
      ['R', 'Good morning! Today we are talking to people at three very different festivals. First, I am in Harbin, in the north of China. Li, tell us about this festival.'],
      ['A', 'This is the Harbin Ice and Snow Festival. It takes place in January, when it is very cold, sometimes minus 25 degrees. Artists make huge buildings and sculptures from frozen river ice. At night, coloured lights shine inside the ice. It\'s amazing!'],
      ['R', 'Next, we are in Buñol, a small town in Spain. Lucia, why are you covered in red?'],
      ['B', 'Because this is La Tomatina! It takes place on the last Wednesday of August. For one hour, thousands of people throw tomatoes at each other in the street. It\'s messy, but it\'s great fun. Afterwards, everybody washes in the river and the streets are cleaned.'],
      ['R', 'And finally, Brazil. Rafael, what\'s happening behind you?'],
      ['C', 'This is the carnival in Rio de Janeiro. It takes place in February or March, and it lasts for five days. Samba schools practise all year for the big parade. The dancers wear colourful costumes, and millions of visitors come to watch.']
    ],
    qs: [M('What is the main idea of the programme?', ['three people describe three different festivals', 'how to make ice sculptures', 'why tomatoes are healthy'], 'The reporter visits three festivals.'),
      M('Where is the Harbin festival?', ['in the north of China', 'in the south of China', 'in Japan'], 'Harbin, in the north of China.'),
      M('What do artists use in Harbin?', ['frozen river ice', 'snow from the mountains only', 'glass and lights'], 'sculptures from frozen river ice.'),
      M('When does La Tomatina take place?', ['on the last Wednesday of August', 'on the first Monday of August', 'every weekend in summer'], 'Lucia: the last Wednesday of August.'),
      M('How long does the tomato fight last?', ['one hour', 'one day', 'five days'], 'For one hour…'),
      M('How long does the Rio carnival last?', ['five days', 'one hour', 'one month'], 'It lasts for five days.'),
      M('Who practise all year for the parade?', ['samba schools', 'artists in Harbin', 'tomato farmers'], 'Samba schools practise all year.'),
      M('Which note is correct for Rio?', ['Feb/Mar · 5 days · parade + costumes', 'Jan · −25° · ice', 'Aug · 1 hour · tomatoes'], 'Rio: February or March, five days, parade and costumes.')]
  },
  speaking: {
    skill: { title: 'Make suggestions · agree and disagree', blocks: [
      { k: 'rule', title: 'Make a suggestion', html: '<p><i><b>Why don\'t we</b> go to the parade?<br><b>Let\'s</b> watch the fireworks.<br><b>How about</b> going to the food market?<br><b>We could</b> visit the museum.</i></p>' },
      { k: 'rule', title: 'Agree and disagree politely', html: '<p>Agree: <i>That\'s a good idea! · I agree. · Sounds great!</i><br>Disagree: <i>I\'m not sure about that. · I don\'t agree because… · That\'s true, but…</i></p>' }
    ] },
    title: 'Persuade your group', prompt: 'You are at a festival with friends. Choose ONE event (a parade, a fireworks show, a food market or a traditional dance) and persuade your group to go. Make a suggestion, give two reasons, and answer one friend who disagrees.',
    time: '1 minute', minWords: 80,
    plan: [['Suggestion', 'Why don\'t we go to the fireworks show?', '#2F6DB5'], ['Reason 1', 'it is the highlight of the festival · free', '#2E8B57'], ['Reason 2', 'amazing colours · good photos', '#D97706'], ['Answer a friend', 'That\'s true, but…', '#7E4FA6'], ['Finish', 'So let\'s go! It starts at 9.', '#C2185B']],
    model: [['Why don\'t we go to the fireworks show tonight?', T], ['First, it is the highlight of the festival and it is free.', P], ['Also, the colours are amazing and we can take great photos for our families.', D], ['I know you want to go to the food market.', X], ['That\'s true, but the market is open all week and the fireworks are only tonight.', X], ['So let\'s go to the fireworks first, and then we can eat at the market. It starts at 9 p.m.', C]],
    phrases: ['Why don\'t we', 'Let\'s', 'How about', 'We could', 'That\'s a good idea', 'I\'m not sure', 'That\'s true, but'],
    parts: [['Make a suggestion', 'why don\'t we|let\'s|lets|how about|we could'], ['Give a reason', 'because|first|also|it is'], ['Use a time or place (in / on / at)', '\\b(at|on|in) (\\d|the|night|friday|saturday|sunday|monday|tuesday|wednesday|thursday)'], ['Answer someone who disagrees', 'true, but|not sure|i know|but'], ['Finish clearly', 'so let\'s|so lets|let\'s go|so ']],
    keywords: ['festival', 'parade', 'fireworks', 'highlight', 'amazing', 'traditional', 'entertainment', 'enjoy']
  },
  writing: {
    skill: { title: 'Organize sentences into a paragraph', blocks: [
      { k: 'rule', title: 'Three kinds of sentences', html: '<p>A paragraph is about <b>one main idea</b>.</p><ol><li>The <b style="color:var(--c-topic)">topic sentence</b> comes first. It gives the main idea.</li><li><b style="color:var(--c-support)">Supporting sentences</b> give details, facts and examples.</li><li>The <b style="color:var(--c-conc)">concluding sentence</b> finishes the paragraph. It often gives an opinion.</li></ol>' },
      { k: 'html', html: '<p class="para"><span class="s topic">National Day is a very special celebration in Saudi Arabia.</span> <span class="s support">It takes place on 23 September every year.</span> <span class="s detail">People decorate their cars and houses with green flags, and there are fireworks in every big city.</span> <span class="s conc">I think it is the best day of the year because everyone is happy and proud.</span></p>' }
    ] },
    build: [
      SEQ('Put the paragraph in order.', ['My favourite celebration is my cousin\'s wedding.', 'It usually takes place in a big hall in the evening.', 'All the family wears traditional clothes, and there is a lot of food.', 'I always have fun because I see all my cousins.'], 'Topic sentence → details → concluding sentence.'),
      SEQ('Put the paragraph in order.', ['The Harbin Ice Festival is one of the coldest festivals in the world.', 'It takes place in January in the north of China.', 'Artists make amazing buildings from frozen river ice.', 'In my opinion, everyone should see it once.'], 'Main idea first, opinion last.'),
      ROLES('What is the job of each sentence?', [['Graduation day is a big celebration in my family.', 'topic'], ['It takes place in June.', 'support'], ['We have a big dinner and my parents give me a gift.', 'detail'], ['I think it is the most important day of the year.', 'conc']], 'Topic · supporting · example/detail · concluding.'),
      M('Which is the best topic sentence for a paragraph about a festival?', ['The Janadriyah festival celebrates Saudi heritage and culture.', 'There were a lot of people.', 'I ate some dates.'], 'A topic sentence gives the main idea of the whole paragraph.'),
      M('Which sentence does NOT belong in a paragraph about Eid?', ['My brother bought a new laptop last month.', 'Children get eidiya from their relatives.', 'Families visit their grandparents.'], 'The laptop sentence is not about Eid.'),
      M('Which is the best concluding sentence?', ['For me, Eid is the happiest time of the year.', 'Eid takes place after Ramadan.', 'There are fireworks.'], 'A concluding sentence finishes the paragraph, often with an opinion.')
    ],
    task: { title: 'Describe a celebration', prompt: 'Write a descriptive paragraph (60 to 90 words) about a festival or celebration in your country. Start with a topic sentence, give 3 or 4 supporting details, and finish with a concluding sentence.',
      table: [['Topic sentence', '', '#2F6DB5'], ['When + where', '', '#2E8B57'], ['What people do / eat / wear', '', '#D97706'], ['Concluding sentence', '', '#C2185B']],
      frame: '___ is a very special celebration in ___. It takes place in / on ___. People usually ___. There is always ___. Children ___. In my opinion, ___ because ___.',
      checks: [['60 words or more', 'WORDS>=60'], ['in / on / at for time', '\\b(in|on|at) (january|february|march|april|may|june|july|august|september|october|november|december|\\d|the evening|the morning|night|friday|saturday)'], ['An adverb of frequency', 'always|usually|often|sometimes|rarely|never'], ['A Unit 2 word (celebrate, traditional, decorate…)', 'celebrat|tradition|decorat|firework|gift|culture|highlight|take part|parade|costume'], ['A concluding sentence with an opinion', 'i think|in my opinion|for me|i believe']],
      model: [[['Saudi National Day is a very special celebration in my country.', T], ['It takes place on 23 September every year.', P], ['People usually decorate their houses and cars with green flags and lights.', D], ['In the evening, there are always fireworks shows and concerts in the big cities.', D], ['Children often wear green clothes and paint flags on their faces.', D], ['In my opinion, it is the best day of the year because everyone celebrates together.', C]]] }
  },
  quest: {
    // Lantern Village · light ten lanterns, then build the festival poster
    lanterns: 10,
    poster: [
      SEQ('Build the festival poster: put the paragraph in order.', ['Welcome to the Lantern Village Festival!', 'It takes place every year on the first Friday of December.', 'Visitors decorate paper lanterns and watch traditional dances.', 'At 9 p.m., hundreds of lanterns rise into the sky.', 'Come and celebrate with us: it is the highlight of the year!'], 'Welcome → when → activities → highlight → concluding invitation.')
    ]
  }
};
})();
