// UNIT 1 · PLACES (Unlock 2, 3rd edition: Reading & Writing Unit 1 + Listening & Speaking Unit 1) · original practice material
(function () {
const { M, TF, G, O, SEQ, MT, W, FILL, ROLES, T, P, D, C, X } = window.H;
QUEST.units[1] = {
  n: 1, title: 'Places', emoji: '🏙️', tag: 'Cities, homes and amazing places',
  books: { rw: 'Megacities · homestays · scan for numbers · there is / there are · capital letters', ls: 'Unusual homes · a famous park · fact or opinion · past simple · present a place' },
  words: [
    ['population', 'noun', 'the number of people who live in a place', 'The population of Riyadh is more than seven million.', 'RW'],
    ['traffic', 'noun', 'all the cars, buses and trucks on the roads', 'There is a lot of traffic in the city centre at 8 a.m.', 'RW'],
    ['pollution', 'noun', 'dirty air, water or land that is bad for people', 'Cars cause a lot of air pollution in big cities.', 'RW'],
    ['countryside', 'noun', 'land outside towns and cities, with farms and fields', 'My grandparents live in the countryside near Taif.', 'RW'],
    ['opportunity', 'noun', 'a chance to do something good', 'A big city gives young people the opportunity to find a good job.', 'RW'],
    ['expert', 'noun', 'a person who knows a lot about a subject', 'An expert on cities says that megacities will grow.', 'RW'],
    ['area', 'noun', 'a part of a city, a country or a place', 'This area of the city has many new restaurants.', 'Both'],
    ['local', 'adjective', 'from or in the place where you live', 'We bought dates from a local farmer.', 'RW'],
    ['city centre', 'noun', 'the main part of a city, with shops and offices', 'The museum is in the city centre, near the big mall.', 'RW'],
    ['quiet', 'adjective', 'with very little noise', 'The village is very quiet at night.', 'RW'],
    ['noisy', 'adjective', 'with a lot of loud noise', 'Our street is noisy because of the cars.', 'RW'],
    ['cheap', 'adjective', 'not expensive; it costs little money', 'The bus is cheap: a ticket costs only four riyals.', 'Both'],
    ['expensive', 'adjective', 'it costs a lot of money', 'Hotels in the city centre are very expensive.', 'Both'],
    ['polluted', 'adjective', 'dirty because of smoke, rubbish or chemicals', 'The river is polluted, so nobody swims in it.', 'RW'],
    ['crowded', 'adjective', 'very full of people', 'The mall is very crowded on Friday evening.', 'LS'],
    ['ancient', 'adjective', 'very, very old; from a long time ago', 'AlUla has ancient tombs cut into the rocks.', 'LS'],
    ['modern', 'adjective', 'new, from the present time', 'The new metro is clean and modern.', 'LS'],
    ['apartment', 'noun', 'a home with a few rooms on one floor of a building', 'We live in an apartment on the fifth floor.', 'LS'],
    ['capital', 'noun', 'the most important city of a country, where the government is', 'Riyadh is the capital of Saudi Arabia.', 'LS'],
    ['be located', 'verb', 'to be in a particular place', 'The park is located next to the university.', 'LS'],
    ['bridge', 'noun', 'something built over a river or road so people can cross it', 'We walked across the bridge to the other side of the river.', 'LS'],
    ['cave', 'noun', 'a big hole in the side of a mountain or under the ground', 'Some people in Tunisia live in homes inside a cave.', 'LS'],
    ['rural', 'adjective', 'about the countryside, not the city', 'Life in rural areas is slower and quieter.', 'LS'],
    ['urban', 'adjective', 'about cities and towns', 'Urban areas have more traffic than villages.', 'LS'],
    ['popular', 'adjective', 'liked by many people', 'The waterfront is a popular place for families.', 'LS'],
    ['recognize', 'verb', 'to know something or someone because you saw them before', 'I recognize this tower: it is in the city centre.', 'LS']
  ],
  grammar: [
    { id: 'count', book: 'R&W', emoji: '🧺', title: 'Countable and uncountable nouns · a / an', short: 'a building, two buildings, water, information',
      learn: [
        { k: 'rule', title: 'Two kinds of nouns', html: '<p><b>Countable</b> nouns: you can count them. They have a singular and a plural: <i>a city, two cities, a car, three cars</i>.</p><p><b>Uncountable</b> nouns: you cannot count them. No plural, no <b>a / an</b>: <i>water, traffic, pollution, information, money, furniture, advice</i>.</p>' },
        { k: 'rule', title: 'a, an or nothing?', html: '<p><b>a</b> + consonant sound: <i>a park, a university</i> (you-niversity).<br><b>an</b> + vowel sound: <i>an area, an apartment, an hour</i> (our).<br>Plural and uncountable nouns: <b>no article</b> when you speak in general: <i>Cities are noisy. Traffic is a big problem.</i></p>' },
        { k: 'mist', items: [['a traffic', 'traffic / a lot of traffic'], ['informations', 'information'], ['an university', 'a university'], ['a apartment', 'an apartment']] }
      ],
      qs: [M('Which noun is uncountable?', ['traffic', 'bridge', 'apartment', 'park'], 'Traffic has no plural. We say a lot of traffic.'),
        M('Which noun is countable?', ['building', 'pollution', 'water', 'information'], 'One building, two buildings.'),
        M('We live in ___ apartment near the lake.', ['an', 'a', '(no article)'], 'Apartment starts with a vowel sound, so we use an.'),
        M('She studies at ___ university in Riyadh.', ['a', 'an', '(no article)'], 'University starts with the sound /j/ (you), so we use a.'),
        M('Can you give me some ___ about the hotel?', ['information', 'informations', 'an information'], 'Information is uncountable: no -s, no an.'),
        M('___ is a big problem in megacities.', ['Pollution', 'A pollution', 'Pollutions'], 'Pollution is uncountable.'),
        W('There are many beautiful park in my city.', 'park', 'parks', ['park.', 'a park'], 'After many we use a plural countable noun: parks.'),
        W('My brother gave me a good advice about the city.', 'a', 'some', ['an', 'many'], 'Advice is uncountable: some advice, not an advice.')]
    },
    { id: 'quant', book: 'R&W', emoji: '⚖️', title: 'Quantifiers: some, any, a lot of, many, much', short: 'How much? How many?',
      learn: [
        { k: 'rule', title: 'How many? or How much?', html: '<p><b>many</b> + plural countable nouns: <i>many buildings, many people</i>.<br><b>much</b> + uncountable nouns (mostly in questions and negatives): <i>How much traffic is there? There isn\'t much pollution.</i><br><b>a lot of</b> + both: <i>a lot of cars, a lot of traffic</i>.</p>' },
        { k: 'rule', title: 'some or any?', html: '<p><b>some</b> in positive sentences: <i>There are some cafés near the lake.</i><br><b>any</b> in negatives and questions: <i>Are there any parks? There aren\'t any hotels.</i><br><b>a few</b> (countable) and <b>a little</b> (uncountable) = a small number / amount.</p>' },
        { k: 'anim', type: 'meter', rows: [['a lot of / many / much', 90, '#2F9E44', 'a big number or amount'], ['some', 55, '#1C7ED6', 'a number we do not say'], ['a few / a little', 25, '#F08C00', 'a small number or amount'], ['not any', 0, '#E03131', 'zero']], note: 'Think of a scale from zero to a lot.' }
      ],
      qs: [M('There are ___ tall buildings in Dubai.', ['a lot of', 'much', 'any'], 'A lot of works with plural nouns in positive sentences.'),
        M('How ___ people live in your city?', ['many', 'much', 'any'], 'People is plural countable: How many.'),
        M('There isn\'t ___ traffic on Friday morning.', ['much', 'many', 'a few'], 'Traffic is uncountable and the sentence is negative: not much.'),
        M('Are there ___ good restaurants near the hotel?', ['any', 'some', 'much'], 'Questions usually take any.'),
        M('We need ___ water for the trip.', ['some', 'many', 'a few'], 'Water is uncountable. Positive sentence: some.'),
        M('There are only ___ houses in the village. It is very small.', ['a few', 'a little', 'much'], 'Houses are countable: a few.'),
        W('There isn\'t many pollution in my town.', 'many', 'much', ['a few', 'some'], 'Pollution is uncountable: not much.'),
        W('Are there some cheap hotels in the city centre?', 'some', 'any', ['much', 'a little'], 'In questions we usually use any.')]
    },
    { id: 'there', book: 'R&W', emoji: '📍', title: 'There is / There are', short: 'Describe what a place has',
      learn: [
        { k: 'rule', title: 'Form', html: '<p><b>There is</b> + singular or uncountable noun: <i>There is a big park. There is a lot of traffic.</i><br><b>There are</b> + plural noun: <i>There are three museums.</i><br>Negative: <i>There isn\'t a beach. There aren\'t any malls.</i><br>Question: <i>Is there a metro? Are there any parks?</i></p>' },
        { k: 'ex', title: 'Describe a place', items: ['There is a beautiful lake in the middle of the park.', 'There are many cafés and shops in the city centre.', 'There isn\'t much pollution in the countryside.'] },
        { k: 'mist', items: [['There is many cars.', 'There are many cars.'], ['There are a lot of traffic.', 'There is a lot of traffic.'], ['It has a park in my street.', 'There is a park in my street.']] }
      ],
      qs: [M('___ a famous tower in the city centre.', ['There is', 'There are', 'It is'], 'One tower: There is.'),
        M('___ many old houses in the ancient village.', ['There are', 'There is', 'They are'], 'Houses is plural: There are.'),
        M('___ a lot of pollution near the factory.', ['There is', 'There are', 'It has'], 'Pollution is uncountable, so it takes There is.'),
        M('___ any good beaches near the city?', ['Are there', 'Is there', 'There are'], 'Question + plural: Are there any…?'),
        O('There are two bridges over the river.', 'There are + plural noun + place.'),
        O('Is there a metro station near your house?', 'Question: Is there + a + singular noun?'),
        W('There is three parks near my apartment.', 'is', 'are', ['be', 'has'], 'Three parks is plural: There are.'),
        W('It has a big mall in my city.', 'It has', 'There is', ['They are', 'There are'], 'To say what exists in a place, use There is / There are.')]
    },
    { id: 'past', book: 'L&S', emoji: '⏪', title: 'Past simple (review)', short: 'visited, went, saw, didn\'t, Did you…?',
      learn: [
        { k: 'rule', title: 'Positive', html: '<p>Regular verbs: + <b>-ed</b>: <i>visit → visited, live → lived, stop → stopped, study → studied</i>.<br>Irregular verbs: <i>go → went, see → saw, take → took, build → built, make → made, have → had</i>.</p>' },
        { k: 'rule', title: 'Negative and questions', html: '<p>Negative: <b>didn\'t</b> + base verb: <i>We didn\'t visit the cave.</i> (not <s>didn\'t visited</s>)<br>Question: <b>Did</b> + subject + base verb: <i>Did you see the bridge? Where did they go?</i><br>was / were: <i>The city was quiet. The roads were busy.</i></p>' },
        { k: 'mist', items: [['I goed to Jeddah last year.', 'I went to Jeddah last year.'], ['They didn\'t visited the museum.', 'They didn\'t visit the museum.'], ['Did you saw the lake?', 'Did you see the lake?']] }
      ],
      qs: [M('Last summer we ___ the old town in Jeddah.', ['visited', 'visit', 'visiting'], 'Last summer = finished past time: visited.'),
        M('The workers ___ the new bridge in two years.', ['built', 'builded', 'build'], 'Build is irregular: built.'),
        M('We ___ the cave because it was closed.', ['didn\'t see', 'didn\'t saw', 'not saw'], 'didn\'t + base verb: didn\'t see.'),
        M('___ you take any photos of the lake?', ['Did', 'Do', 'Were'], 'Past question: Did + subject + base verb.'),
        M('The streets ___ very crowded yesterday.', ['were', 'was', 'did'], 'Streets is plural: were.'),
        G('My family ___ (go) to AlUla in March.', ['went'], 'Go is irregular: went.'),
        G('People ___ (live) in caves a long time ago.', ['lived'], 'Regular verb: live → lived.'),
        W('Where did you went last weekend?', 'went', 'go', ['goes', 'gone'], 'After did, use the base verb: Where did you go?')]
    }
  ],
  reading: {
    skill: { title: 'Scan for numbers', blocks: [
      { k: 'rule', title: 'What is scanning?', html: '<p>When you <b>scan</b>, you do not read every word. Your eyes move quickly over the text to find <b>one piece of information</b>: a number, a date, a name.</p><p><b>How:</b> 1. Read the question. 2. Decide what you need (a year? a percentage? a number of people?). 3. Move your eyes quickly and stop only at numbers. 4. Read the sentence around the number to check.</p>' },
      { k: 'ex', title: 'Numbers come in many forms', items: ['7,000,000 = seven million', '1.5 = one point five', '45% = forty-five per cent', '2024 = twenty twenty-four (a year)', '302 m = three hundred and two metres'] }
    ] },
    title: 'Riyadh: a capital that never stops growing',
    paras: [
      'Riyadh is the capital of Saudi Arabia and its biggest city. Today, more than 7 million people live there. That makes Riyadh one of the largest cities in the Middle East, and its population is still growing every year.',
      'Why do so many people move to Riyadh? The main reason is opportunity. There are thousands of companies, government offices and universities in the city. Young people from rural areas come to study and work, and many of them never go back to the countryside.',
      'A big population brings problems, too. Traffic is the biggest one. In the morning, the main roads are very crowded and a short trip can take 45 minutes. To help, the city opened the Riyadh Metro in 2024. It has six lines, and the trains are clean, modern and cheap.',
      'Riyadh is also a city of tall buildings. The Kingdom Centre is 302 metres tall, and visitors can walk across the sky bridge at the top. However, the city is not only modern. In the historic area of Diriyah, people can still see ancient mud houses.',
      'Life in Riyadh is not always easy. In summer, the temperature can reach 45°C, and apartments in the city centre are expensive. But for millions of people, Riyadh is home, and they love its energy.'
    ],
    qs: [M('How many people live in Riyadh today?', ['more than 7 million', 'about 45 million', '302,000'], 'Paragraph 1: more than 7 million people live there.'),
      M('When did the Riyadh Metro open?', ['in 2024', 'in 2004', 'in 2014'], 'Paragraph 3: the city opened the Riyadh Metro in 2024.'),
      M('How many lines does the metro have?', ['six', 'sixteen', 'forty-five'], 'Paragraph 3: It has six lines.'),
      M('How tall is the Kingdom Centre?', ['302 metres', '45 metres', '203 metres'], 'Paragraph 4: 302 metres tall.'),
      M('How long can a short trip take in the morning?', ['45 minutes', '4 minutes', '45 hours'], 'Paragraph 3: a short trip can take 45 minutes.'),
      TF('The writer thinks traffic is the biggest problem in Riyadh.', true, 'Paragraph 3: Traffic is the biggest one.'),
      TF('Apartments in the city centre are cheap.', false, 'Paragraph 5: apartments in the city centre are expensive.'),
      M('What does "opportunity" mean in paragraph 2?', ['a chance to do something good', 'a problem in the city', 'a kind of building'], 'Young people come to study and work: they have a chance.')]
  },
  listening: {
    skill: { title: 'Fact or opinion?', blocks: [
      { k: 'rule', title: 'Two kinds of information', html: '<p>A <b>fact</b> is true and we can check it: <i>The houses are under the ground. The city has 2,500 houseboats.</i></p><p>An <b>opinion</b> is what a person thinks or feels: <i>I think it\'s the most beautiful place. It\'s amazing!</i></p><p><b>Listen for opinion signals:</b> I think, I believe, In my opinion, Personally, I feel, amazing, beautiful, the best, boring, strange.</p>' },
      { k: 'rule', title: 'Use the pictures first', html: '<p>Before you listen, look at the pictures and the title. Ask: <i>Where is this? What will the speakers talk about?</i> Predicting helps you understand faster.</p>' }
    ] },
    title: 'Podcast: unusual homes around the world', situation: 'A geography podcast. Look at the pictures: a home under the ground and a home on the water. Listen twice.',
    voices: { A: 'f', B: 'm' }, names: { A: 'Sara (host)', B: 'Karim (guest)' },
    script: [
      ['A', 'Welcome to Planet Homes. Today my guest Karim is talking about two unusual places to live. Karim, where did you go first?'],
      ['B', 'First, I went to Matmata, a small town in the south of Tunisia. The houses there are under the ground. People dug big holes in the soft rock, and the rooms are around the hole, like a cave.'],
      ['A', 'Why did people build homes under the ground?'],
      ['B', 'Because the desert is very hot in summer and cold in winter. Under the ground, the temperature stays comfortable all year. I stayed in one for two nights. In my opinion, it\'s the most interesting place in North Africa. It was so quiet!'],
      ['A', 'And your second place was very different.'],
      ['B', 'Yes. I went to Amsterdam in the Netherlands. There are about 2,500 houseboats on the canals. People live on the water all year. Some houseboats are very old, but others are modern, with big windows.'],
      ['A', 'Would you like to live on a houseboat?'],
      ['B', 'Personally, I think it\'s a bit strange. I like walking on solid ground! But my friend lives on one, and she loves it. Her houseboat is located near the city centre, so she can walk to work.']
    ],
    qs: [M('Where are the underground houses?', ['in Matmata, in the south of Tunisia', 'in the north of the Netherlands', 'in a city centre in Egypt'], 'Karim: Matmata, a small town in the south of Tunisia.'),
      M('Why did people build homes under the ground?', ['to stay comfortable in the hot and cold weather', 'because the land was expensive', 'because there were no trees'], 'The temperature stays comfortable all year.'),
      M('How long did Karim stay in an underground house?', ['two nights', 'two weeks', 'one night'], 'I stayed in one for two nights.'),
      M('How many houseboats are there in Amsterdam?', ['about 2,500', 'about 250', 'about 25,000'], 'There are about 2,500 houseboats on the canals.'),
      M('"The houses there are under the ground." Is this a fact or an opinion?', ['fact', 'opinion'], 'We can check it. It is a fact.'),
      M('"In my opinion, it\'s the most interesting place in North Africa." Fact or opinion?', ['opinion', 'fact'], 'In my opinion = an opinion.'),
      M('"Personally, I think it\'s a bit strange." Fact or opinion?', ['opinion', 'fact'], 'Personally, I think = an opinion.'),
      M('Why can Karim\'s friend walk to work?', ['Her houseboat is near the city centre.', 'She works on the canal.', 'She has no car.'], 'It is located near the city centre.')]
  },
  speaking: {
    skill: { title: 'Signpost your opinion and organize a presentation', blocks: [
      { k: 'rule', title: 'A clear presentation has four parts', html: '<ol><li><b>Introduce</b> the place: <i>Today I\'m going to talk about…</i></li><li><b>Location and facts</b>: <i>It is located in… There are…</i></li><li><b>Why it is interesting</b>, with examples.</li><li><b>Your opinion and conclusion</b>: <i>In my opinion… To sum up…</i></li></ol>' },
      { k: 'ex', title: 'Signpost an opinion', items: ['In my opinion, it\'s the best place for families.', 'Personally, I think the old town is more interesting than the malls.', 'I believe everyone should visit it once.'] }
    ] },
    title: 'Present an interesting place', prompt: 'Give a 1-minute presentation about an interesting place in your country. Say where it is, what there is to see, and give your opinion.',
    time: '1 minute', minWords: 90,
    plan: [['Introduce', 'Today I\'m going to talk about Hegra in AlUla.', '#2F6DB5'], ['Location + facts', 'located in the north-west · ancient tombs in the rocks · first UNESCO site in Saudi Arabia', '#2E8B57'], ['Why interesting', 'very old · beautiful rocks · you can visit at night', '#D97706'], ['Opinion + end', 'In my opinion… · To sum up…', '#C2185B']],
    model: [['Today I\'m going to talk about Hegra, an ancient city in AlUla.', T], ['It is located in the north-west of Saudi Arabia.', P], ['There are more than one hundred tombs cut into the big rocks, and it was the first UNESCO World Heritage Site in the country.', D], ['The place is interesting because it is very old and the rocks are a beautiful orange colour.', P], ['You can also visit at night, when the stars are amazing.', D], ['In my opinion, it is the most beautiful place in Saudi Arabia.', C], ['To sum up, everyone should visit Hegra at least once.', C]],
    phrases: ['Today I\'m going to talk about', 'It is located in', 'There are', 'In my opinion', 'Personally, I think', 'I believe', 'To sum up'],
    parts: [['Introduce the place', 'talk about|going to|this is'], ['Say where it is', 'located|in the (north|south|east|west)|near'], ['Give facts with There is / There are', 'there (is|are)'], ['Give your opinion', 'opinion|i think|i believe|personally'], ['Finish clearly', 'to sum up|finally|in conclusion|so ']],
    keywords: ['ancient', 'modern', 'popular', 'crowded', 'quiet', 'located', 'beautiful', 'capital']
  },
  writing: {
    skill: { title: 'Capital letters and punctuation', blocks: [
      { k: 'rule', title: 'Use a CAPITAL letter for…', html: '<ul><li>the first word of a sentence: <i><b>T</b>he city is big.</i></li><li>the word <b>I</b>: <i>I live in Riyadh.</i></li><li>names of people, cities, countries and nationalities: <i><b>S</b>ara, <b>J</b>eddah, <b>S</b>audi <b>A</b>rabia, <b>T</b>unisian</i></li><li>days and months: <i><b>F</b>riday, <b>M</b>arch</i></li><li>languages and important buildings: <i><b>E</b>nglish, the <b>K</b>ingdom <b>C</b>entre</i></li></ul>' },
      { k: 'rule', title: 'Punctuation', html: '<p>A <b>full stop (.)</b> ends a sentence. A <b>question mark (?)</b> ends a question. A <b>comma (,)</b> separates items in a list: <i>There are parks, malls and museums.</i></p>' },
      { k: 'rule', title: 'A simple sentence', html: '<p>Every sentence needs a <b>subject + verb</b>: <i>The city <u>is</u> big.</i> Adjectives go <b>before</b> the noun: <i>a <b>noisy</b> street</i>, or after <b>be</b>: <i>The street <b>is</b> noisy.</i></p>' }
    ] },
    build: [
      M('Choose the correct sentence.', ['My family lives in Jeddah, near the Red Sea.', 'my family lives in jeddah, near the red sea.', 'My family lives in Jeddah near the red Sea'], 'Capital letters for My, Jeddah, Red Sea; full stop at the end.'),
      M('Choose the correct sentence.', ['I visited Cairo in July with my brother.', 'i visited Cairo in july with my brother.', 'I visited cairo in July with my Brother.'], 'I, Cairo and July need capital letters. Brother does not.'),
      M('Choose the correct sentence.', ['Is there a museum in your city?', 'Is there a museum in your city.', 'is there a museum in your city?'], 'A question needs a capital letter and a question mark.'),
      M('Choose the correct sentence.', ['There are parks, malls and cafés in the city centre.', 'There are parks malls and cafés in the city centre.', 'There are, parks, malls and cafés in the city centre.'], 'Use a comma between items in a list.'),
      O('Riyadh is a big modern city.', 'Adjectives go before the noun: a big modern city.'),
      O('There are many old houses in Diriyah.', 'There are + many + adjective + noun + place.'),
      O('The streets are very crowded at night.', 'Subject + be + very + adjective.'),
      W('The city has a lot of noisy streets and it is very crowded', 'crowded', 'crowded.', ['crowded,', 'crowded?'], 'A sentence ends with a full stop.')
    ],
    task: { title: 'Describe your city', prompt: 'Write 6 to 8 descriptive sentences about your city or town. Use there is / there are, adjectives and quantifiers. Check your capital letters and full stops.',
      table: [['Name + location', '', '#2F6DB5'], ['Good things (+)', '', '#2E8B57'], ['Bad things (–)', '', '#E03131'], ['Places to visit', '', '#D97706']],
      frame: 'I live in ___. It is a ___ city in the ___ of ___. There are a lot of ___. There is a beautiful ___. There isn\'t much ___. The streets are ___ in the evening. I think the best place to visit is ___ because ___.',
      checks: [['At least 6 sentences', 'WORDS>=50'], ['There is / There are', 'there (is|are)'], ['A quantifier (a lot of, many, much, some, any)', 'a lot of|many|much|some|any|a few|a little'], ['Two adjectives (noisy, quiet, modern…)', '(noisy|quiet|modern|ancient|crowded|cheap|expensive|beautiful|clean|polluted|busy|big|small).*(noisy|quiet|modern|ancient|crowded|cheap|expensive|beautiful|clean|polluted|busy|big|small)'], ['Your opinion (I think…)', 'i think|in my opinion|personally']],
      model: [[['I live in Abha. It is a small city in the south-west of Saudi Arabia.', T], ['There are many green mountains and there is a lot of rain in summer.', P], ['The weather is cool, so there are a lot of tourists in July and August.', D], ['There isn\'t much pollution, and the air is clean.', P], ['However, the streets are crowded in the summer evenings.', X], ['I think the best place to visit is the old village of Rijal Almaa because the houses are ancient and colourful.', C]]] }
  },
  quest: {
    // Lost City Ruins · scan the stone tablets for numbers, then buy supplies at the market
    tablet: { title: 'The Stone of Zarak', lines: ['The ancient city of Zarak is 2,300 years old.', 'About 40,000 people lived inside its walls.', 'The walls are 12 metres high and 9 kilometres long.', 'There are 7 gates, 3 temples and 1 big market.', 'Explorers found the city in 1932.', 'Today, 250,000 tourists visit the ruins every year.', 'The tallest tower is 64 metres high.', 'In summer, the temperature reaches 41°C.'],
      qs: [['How old is the city?', '2,300 years', ['230 years', '23,000 years']], ['How many people lived in Zarak?', 'about 40,000', ['about 4,000', 'about 400,000']], ['How long are the walls?', '9 kilometres', ['12 kilometres', '7 kilometres']], ['How many gates are there?', '7', ['3', '12']], ['When did explorers find the city?', 'in 1932', ['in 1923', 'in 2003']], ['How many tourists visit every year?', '250,000', ['25,000', '2,500,000']], ['How tall is the tallest tower?', '64 metres', ['46 metres', '12 metres']], ['How hot is it in summer?', '41°C', ['14°C', '45°C']]] },
    market: [
      M('You need ___ water for the trip into the ruins.', ['some', 'many', 'a few'], 'Water is uncountable: some water.'),
      M('Buy ___ torch. The tunnels are dark.', ['a', 'an', 'some'], 'Torch is countable and starts with a consonant: a torch.'),
      M('Take ___ apples. They are light and healthy.', ['a few', 'a little', 'much'], 'Apples are countable: a few apples.'),
      M('We don\'t have ___ money left.', ['much', 'many', 'a few'], 'Money is uncountable and the sentence is negative: much.'),
      M('How ___ maps do we need?', ['many', 'much', 'any'], 'Maps are countable: How many.'),
      M('Is there ___ rope in your bag?', ['any', 'many', 'a'], 'Question + uncountable rope: any.'),
      M('There ___ two old maps in the shop.', ['are', 'is', 'has'], 'Two maps = plural: There are.'),
      M('Put ___ salt on the food. Not too much!', ['a little', 'a few', 'many'], 'Salt is uncountable: a little.')
    ]
  }
};
})();
