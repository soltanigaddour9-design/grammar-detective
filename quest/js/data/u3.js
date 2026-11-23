// UNIT 3 · THE INTERNET AND TECHNOLOGY (Unlock 2, 3rd edition: R&W Unit 3 + L&S Unit 3) · original practice material
(function () {
const { M, TF, G, O, SEQ, MT, W, FILL, ROLES, T, P, D, C, X } = window.H;
QUEST.units[3] = {
  n: 3, title: 'The Internet and Technology', emoji: '💻', tag: 'Apps, robots, games and online life',
  books: { rw: 'Online adverts · video games essay · main ideas and inferences · giving opinions · connecting ideas · topic sentences', ls: 'Robots podcast · computers and memory · listen for reasons · can / be able to · report about a device' },
  words: [
    ['advert', 'noun', 'a picture, video or text that tries to sell something', 'I saw an advert for a new phone on social media.', 'RW'],
    ['security', 'noun', 'protection from danger or from people who steal', 'Use a strong password for better security.', 'RW'],
    ['record', 'verb', 'to keep information so you can see or hear it later', 'Websites record the pages you visit.', 'RW'],
    ['affect', 'verb', 'to change something or someone', 'Using a phone late at night can affect your sleep.', 'Both'],
    ['creative', 'adjective', 'good at making new and original things', 'Some video games help players become more creative.', 'RW'],
    ['download', 'verb', 'to copy a file or an app from the internet to your device', 'You can download the app for free.', 'RW'],
    ['online', 'adjective', 'connected to the internet, or on the internet', 'Many students take online classes.', 'RW'],
    ['improve', 'verb', 'to make something better', 'Puzzle games can improve your memory.', 'RW'],
    ['app', 'noun', 'a program you use on a phone or tablet', 'This app helps me learn new words.', 'LS'],
    ['battery', 'noun', 'the part of a device that stores electricity', 'My phone battery is at 5%.', 'LS'],
    ['charge', 'verb', 'to put electricity into a battery', 'I charge my phone every night.', 'LS'],
    ['charger', 'noun', 'the cable or machine you use to charge a device', 'Can I borrow your charger?', 'LS'],
    ['deliver', 'verb', 'to take things to a person or place', 'Robots deliver food on some university campuses.', 'LS'],
    ['develop', 'verb', 'to make something new, or to grow', 'Engineers develop robots that can help people.', 'LS'],
    ['disability', 'noun', 'an illness or injury that makes some everyday things difficult', 'Robots can help people with a disability at home.', 'LS'],
    ['file', 'noun', 'information stored on a computer with a name', 'Save the file before you close the laptop.', 'LS'],
    ['log in', 'phrasal verb', 'to type your name and password to start using a website', 'Log in with your student number.', 'LS'],
    ['password', 'noun', 'a secret word or number that you type to use an account', 'Never tell anyone your password.', 'LS'],
    ['laptop', 'noun', 'a small computer that you can carry', 'I take my laptop to every lecture.', 'LS'],
    ['memory', 'noun', 'the ability to remember things', 'Writing notes by hand is good for your memory.', 'LS'],
    ['shut down', 'phrasal verb', 'to turn a computer off completely', 'Shut down the computer before you leave the lab.', 'LS'],
    ['social media', 'noun', 'websites and apps where people share messages, photos and videos', 'Many teenagers spend three hours a day on social media.', 'LS'],
    ['wireless', 'adjective', 'without cables', 'These wireless headphones are very light.', 'LS'],
    ['research', 'noun', 'careful study to find new information', 'Research shows that robots will do many jobs in the future.', 'LS']
  ],
  grammar: [
    { id: 'opinion', book: 'R&W', emoji: '💬', title: 'Giving opinions', short: 'I think, I believe, In my opinion, I don\'t think',
      learn: [
        { k: 'rule', title: 'Opinion phrases', html: '<p><i><b>I think</b> (that) video games are useful.<br><b>I believe</b> (that) online classes are a good idea.<br><b>In my opinion,</b> social media is a waste of time.<br><b>Personally,</b> I prefer paper books.</i></p>' },
        { k: 'rule', title: 'The negative', html: '<p>We usually say <b>I don\'t think</b> + positive verb: <i>I don\'t think phones are good for children.</i><br>Not: <s>I think phones are not good</s> (this is possible but less natural).</p><p>Use <b>should</b> for advice: <i>Students <b>should</b> limit their screen time. Schools <b>shouldn\'t</b> ban phones.</i></p>' },
        { k: 'mist', items: [['In my opinion, I think games are good.', 'In my opinion, games are good.'], ['I am think it is useful.', 'I think it is useful.'], ['According to me…', 'In my opinion…']] }
      ],
      qs: [M('___, online games help students to relax.', ['In my opinion', 'In my opinion I think', 'According to me'], 'Use one opinion phrase only.'),
        M('I ___ that robots will take all our jobs.', ['don\'t think', 'not think', 'am not think'], 'Negative opinion: I don\'t think…'),
        M('Children ___ use phones for more than two hours a day.', ['shouldn\'t', 'don\'t should', 'should to'], 'should / shouldn\'t + base verb.'),
        O('I believe that technology makes life easier.', 'I believe (that) + sentence.'),
        O('Students should log in with a strong password.', 'should + base verb.'),
        W('I am think social media is useful for students.', 'am think', 'think', ['thinking', 'am thinking that'], 'We say I think, not I am think.'),
        W('In my opinion, I think video games are creative.', 'In my opinion, I think', 'In my opinion,', ['I think in my opinion', 'According to me,'], 'Do not use two opinion phrases together.'),
        M('Which sentence gives an opinion?', ['Personally, I prefer paper books to e-books.', 'The app costs ten riyals.', 'My laptop has a 15-inch screen.'], 'Personally, I prefer… is an opinion.')]
    },
    { id: 'connect', book: 'R&W', emoji: '🔗', title: 'Connecting ideas: and, also, but, however, because, so', short: 'Join and link your sentences',
      learn: [
        { k: 'rule', title: 'Add, contrast, give a reason, give a result', html: '<p><b>and / also</b> add an idea: <i>The app is free <b>and</b> easy to use. It <b>also</b> works offline.</i><br><b>but / however</b> show contrast: <i>The game is fun, <b>but</b> it is expensive. The game is fun. <b>However,</b> it is expensive.</i><br><b>because</b> gives a reason: <i>I use the app <b>because</b> it is fast.</i><br><b>so</b> gives a result: <i>My battery was dead, <b>so</b> I couldn\'t call you.</i></p>' },
        { k: 'rule', title: 'Punctuation', html: '<p><b>However</b> starts a new sentence and has a comma after it: <i>… expensive. However, …</i><br>Use a comma before <b>but</b> and <b>so</b> when they join two sentences.</p>' }
      ],
      qs: [M('The laptop is light ___ fast.', ['and', 'but', 'so'], 'Two positive ideas: and.'),
        M('Video games are fun. ___, some players spend too much time on them.', ['However', 'And', 'So'], 'Contrast at the start of a sentence: However,'),
        M('I deleted the app ___ it used too much battery.', ['because', 'so', 'but'], 'The reason: because.'),
        M('I forgot my password, ___ I couldn\'t log in.', ['so', 'because', 'and also'], 'The result: so.'),
        M('The phone is expensive, ___ the camera is excellent.', ['but', 'so', 'because'], 'Contrast: but.'),
        M('The app teaches vocabulary. It ___ has grammar games.', ['also', 'and', 'but'], 'Also goes before the main verb.'),
        W('Robots are useful, however they are expensive.', 'however', 'but', ['so', 'because'], 'Inside one sentence, use but. However starts a new sentence: Robots are useful. However, they are expensive.'),
        W('I charge my phone every night so I use it all day.', 'so', 'because', ['but', 'however'], 'Using the phone all day is the reason: because.')]
    },
    { id: 'can', book: 'L&S', emoji: '🤖', title: 'can / be able to', short: 'Ability now, in the past and in the future',
      learn: [
        { k: 'rule', title: 'Present and past', html: '<p><b>can / can\'t</b> + base verb (now): <i>This robot <b>can</b> clean the floor. It <b>can\'t</b> climb stairs.</i><br><b>could / couldn\'t</b> (past): <i>Ten years ago, phones <b>couldn\'t</b> translate languages.</i></p>' },
        { k: 'rule', title: 'be able to', html: '<p><b>be able to</b> means the same, and we need it with <b>will</b> and other forms: <i>In the future, robots <b>will be able to</b> drive buses.</i> (not <s>will can</s>)<br><i>She <b>is able to</b> use three apps at the same time.</i></p>' },
        { k: 'mist', items: [['The robot can to speak.', 'The robot can speak.'], ['Robots will can drive.', 'Robots will be able to drive.'], ['He cans swim.', 'He can swim.']] }
      ],
      qs: [M('This robot ___ carry 20 kilograms.', ['can', 'can to', 'cans'], 'can + base verb, no -s.'),
        M('In 2005, phones ___ take good photos.', ['couldn\'t', 'can\'t', 'won\'t be able to'], 'Past ability: couldn\'t.'),
        M('In the future, cars ___ drive themselves everywhere.', ['will be able to', 'will can', 'can will'], 'Future ability: will be able to.'),
        M('My grandmother ___ use video calls now. She learned last month!', ['is able to', 'are able to', 'able to'], 'She + is able to.'),
        G('Robot vacuums ___ (not) clean stairs. (can)', ['can\'t', 'cannot', 'can not'], 'can\'t + base verb.'),
        O('Will robots be able to teach in schools?', 'Question: Will + subject + be able to + verb?'),
        W('The new app can translates 50 languages.', 'translates', 'translate', ['translating', 'to translate'], 'After can, use the base verb.'),
        W('Soon we will can pay with our faces.', 'will can', 'will be able to', ['can will', 'will able to'], 'Use will be able to for the future.')]
    }
  ],
  reading: {
    skill: { title: 'Main ideas and inferences', blocks: [
      { k: 'rule', title: 'The main idea', html: '<p>The <b>main idea</b> of a paragraph is its most important point. It is often in the <b>first sentence</b> (the topic sentence). The other sentences support it.</p>' },
      { k: 'rule', title: 'Making inferences', html: '<p>Sometimes the writer does not say everything directly. You <b>infer</b>: you use the clues in the text and what you know to understand what the writer means.</p><p><i>"Ahmed checks his phone 100 times a day and sleeps only five hours."</i> → We can infer: Ahmed probably uses his phone too much.</p>' }
    ] },
    title: 'Video games: a waste of time or a useful tool?', sub: 'A student essay',
    paras: [
      'Many parents believe that video games are a waste of time. However, I think that games can be good for young people if they play them in the right way.',
      'First, many games help players to think quickly and solve problems. In strategy games, players must plan, make decisions and learn from their mistakes. These are important skills at university and at work.',
      'Second, some games make players more creative. In building games, players design houses, cities and even whole worlds. My cousin started by building towers in a game. Now he is studying architecture.',
      'Third, online games can be social. Players work in teams and talk to people from other countries, so they can also improve their English.',
      'Of course, there are problems. Some young people play for six or seven hours a day, and this can affect their sleep and their grades. For this reason, players should limit their time. In conclusion, games are not good or bad: the important thing is how we use them.'
    ],
    qs: [M('What is the main idea of paragraph 2?', ['Games help players to think and solve problems.', 'Games are expensive.', 'Strategy games are boring.'], 'Topic sentence: many games help players to think quickly and solve problems.'),
      M('What is the main idea of paragraph 3?', ['Some games make players more creative.', 'Architecture is a difficult subject.', 'Building games are only for children.'], 'Topic sentence of paragraph 3.'),
      M('What is the main idea of paragraph 4?', ['Online games can be social.', 'Players should not talk online.', 'English is hard.'], 'Topic sentence of paragraph 4.'),
      M('What can we infer about the cousin?', ['Building games helped him to find his future subject.', 'He doesn\'t like games now.', 'He failed at university.'], 'He built towers in a game; now he studies architecture.'),
      M('What can we infer about the writer\'s opinion?', ['Games are useful if players are careful with time.', 'Games should be banned.', 'Parents are always right.'], 'The last paragraph: the important thing is how we use them.'),
      TF('The writer says that all young people play for seven hours a day.', false, 'Paragraph 5: SOME young people play for six or seven hours.'),
      M('Which word in paragraph 5 means "change"?', ['affect', 'limit', 'play'], 'This can affect their sleep = change their sleep.'),
      M('Why can online games improve players\' English?', ['They talk to people from other countries.', 'The games are made in England.', 'They read grammar books in the game.'], 'Paragraph 4.')]
  },
  listening: {
    skill: { title: 'Listen for reasons', blocks: [
      { k: 'rule', title: 'Reason signals', html: '<p>Speakers often explain <b>why</b>. Listen for: <b>because, because of, so, that\'s why, the reason is, since, This means…</b></p><p><i>Robots are useful in hospitals <b>because</b> they never get tired.</i><br><i>The battery is small, <b>so</b> the robot is very light.</i></p>' }
    ] },
    title: 'Student podcast: robots that help us', situation: 'Two students make a podcast about robots. Listen for the reasons they give. Listen twice.',
    voices: { A: 'f', B: 'm' }, names: { A: 'Maha', B: 'Faisal' },
    script: [
      ['A', 'Hello and welcome to Tech Talk. I\'m Maha, and today Faisal and I are talking about robots that help people. Faisal, let\'s start with delivery robots.'],
      ['B', 'OK. Some universities now have small robots that deliver food to students. They are popular because they are fast and cheap. Students order on an app, and the robot finds them on the campus. The robots move slowly, so they are safe for people walking.'],
      ['A', 'I love that idea. My second example is robot assistants in hospitals. They carry medicine and clean rooms. Doctors like them because they never get tired, and nurses can spend more time with patients.'],
      ['B', 'And there are robots for people with a disability. For example, some robots can help a person eat or pick things up. That\'s why many families think they are very important.'],
      ['A', 'But are there any problems?'],
      ['B', 'Yes. The main problem is the cost. A good robot assistant can cost more than a car, so many families can\'t buy one. Also, the battery needs to be charged every few hours.'],
      ['A', 'So, in the future, engineers need to develop cheaper robots. Thanks for listening!']
    ],
    qs: [M('Why are delivery robots popular?', ['because they are fast and cheap', 'because they can fly', 'because students cannot walk'], 'They are popular because they are fast and cheap.'),
      M('Why are delivery robots safe for people walking?', ['They move slowly.', 'They are very small.', 'They have lights.'], 'The robots move slowly, so they are safe.'),
      M('Why do doctors like robot assistants?', ['They never get tired.', 'They are cheap.', 'They can do operations.'], 'Doctors like them because they never get tired.'),
      M('What can some robots do for people with a disability?', ['help them eat or pick things up', 'drive their cars', 'go to school for them'], 'Faisal\'s example.'),
      M('Why can\'t many families buy a robot assistant?', ['It can cost more than a car.', 'It is too big for a house.', 'It is not available.'], 'The main problem is the cost.'),
      M('What is another problem?', ['The battery needs charging every few hours.', 'Robots are too noisy.', 'They need the internet all the time.'], 'Also, the battery needs to be charged…'),
      M('What does Maha say engineers need to do?', ['develop cheaper robots', 'make bigger robots', 'stop making robots'], 'Engineers need to develop cheaper robots.')]
  },
  speaking: {
    skill: { title: 'Additional and contrasting information · a spoken report', blocks: [
      { k: 'rule', title: 'Add information', html: '<p><i>It\'s light. <b>Also</b>, it\'s waterproof. · It has a good camera <b>as well</b>. · <b>In addition</b>, the battery lasts two days.</i></p>' },
      { k: 'rule', title: 'Contrast', html: '<p><i>It\'s fast, <b>but</b> it\'s expensive. · <b>However</b>, the screen is small. · <b>On the other hand</b>, it doesn\'t need a charger every day.</i></p>' },
      { k: 'rule', title: 'Organize your report', html: '<ol><li>What is it?</li><li>What can it do? (can / be able to)</li><li>Advantages (also, in addition)</li><li>Disadvantages (but, however, on the other hand)</li><li>Your opinion</li></ol>' }
    ] },
    title: 'Report on a device', prompt: 'Give a 1-minute report about a device or technology you use (a smartwatch, a robot vacuum, a tablet, an app…). Say what it can do, two advantages, one disadvantage and your opinion.',
    time: '1 minute', minWords: 90,
    plan: [['What is it?', 'a smartwatch', '#2F6DB5'], ['What can it do?', 'count steps · show messages · check heart rate', '#2E8B57'], ['Advantages', 'light · in addition, waterproof', '#D97706'], ['Disadvantage', 'However, expensive · battery 1 day', '#7E4FA6'], ['Opinion', 'I think it is useful for…', '#C2185B']],
    model: [['I\'m going to report on my smartwatch.', T], ['It can count my steps, show my messages and check my heart rate.', P], ['It is very light, so I can wear it all day.', D], ['In addition, it is waterproof, so I can swim with it.', D], ['However, it is quite expensive, and the battery only lasts one day.', X], ['On the other hand, it charges in thirty minutes.', X], ['In my opinion, it is a very useful device for people who want to stay healthy.', C]],
    phrases: ['It can', 'Also', 'In addition', 'as well', 'However', 'but', 'On the other hand', 'In my opinion'],
    parts: [['Say what it is', 'report on|talk about|this is|my '], ['Say what it can do', '\\bcan\\b|able to'], ['Add information', 'also|in addition|as well|too'], ['Give a contrast', 'however|but|on the other hand'], ['Give your opinion', 'opinion|i think|i believe|personally']],
    keywords: ['battery', 'charge', 'app', 'screen', 'online', 'wireless', 'download', 'useful']
  },
  writing: {
    skill: { title: 'Write topic sentences · a one-sided opinion paragraph', blocks: [
      { k: 'rule', title: 'A good topic sentence', html: '<p>A topic sentence has a <b>topic</b> + a <b>controlling idea</b> (what you say about the topic).</p><p><i><u>Online classes</u> <b>are a good choice for busy students.</b></i><br>Topic = online classes. Controlling idea = a good choice for busy students.</p><p>It is <b>not too general</b> (<s>Technology is important.</s>) and <b>not too specific</b> (<s>My laptop has 16 GB of memory.</s>).</p>' },
      { k: 'rule', title: 'A one-sided opinion paragraph', html: '<p>1. Topic sentence with your opinion. 2. Reason 1 + example. 3. Reason 2 + example. 4. Concluding sentence. Use <b>First, Second, Also, because, for example</b>.</p>' }
    ] },
    build: [
      M('Which is the best topic sentence?', ['Smartphones can help students to learn English.', 'Smartphones exist.', 'My smartphone is black and it has a case.'], 'Topic (smartphones) + controlling idea (help students to learn English).'),
      M('Which topic sentence is too general?', ['Technology is everywhere.', 'Tablets are useful in primary schools.', 'Online banking saves time for busy people.'], 'Technology is everywhere says nothing specific.'),
      M('Which topic sentence is too specific?', ['My laptop weighs 1.3 kilograms.', 'Laptops are better than desktop computers for students.', 'Social media can be dangerous for children.'], 'A small fact cannot be the main idea of a paragraph.'),
      M('Find the controlling idea: "Video calls make it easier to stay in touch with family."', ['make it easier to stay in touch with family', 'Video calls', 'family'], 'The controlling idea is what the writer says about the topic.'),
      SEQ('Put the opinion paragraph in order.', ['I believe that schools should teach coding.', 'First, coding helps students to solve problems.', 'For example, they learn to break a big problem into small steps.', 'Second, many future jobs will need coding skills.', 'For these reasons, coding should be a school subject.'], 'Opinion → reason 1 → example → reason 2 → conclusion.'),
      W('Online shopping is popular because, it is fast.', 'because,', 'because', ['because.', 'so,'], 'No comma after because.')
    ],
    task: { title: 'One-sided opinion paragraph', prompt: 'Write a one-sided opinion paragraph (70 to 100 words): "Smartphones are useful for university students." Do you agree? Give two reasons with examples.',
      table: [['Topic sentence (opinion)', '', '#2F6DB5'], ['Reason 1 + example', '', '#2E8B57'], ['Reason 2 + example', '', '#D97706'], ['Concluding sentence', '', '#C2185B']],
      frame: 'In my opinion, smartphones are ___ for university students. First, students can ___. For example, ___. Second, ___. Also, ___. For these reasons, I believe that ___.',
      checks: [['70 words or more', 'WORDS>=70'], ['An opinion phrase', 'in my opinion|i think|i believe|personally'], ['First / Second', 'first.*second|firstly'], ['An example', 'for example|for instance|such as'], ['because / so / also', 'because|\\bso\\b|also'], ['A concluding sentence', 'for these reasons|in conclusion|to sum up|this is why']],
      model: [[['In my opinion, smartphones are very useful for university students.', T], ['First, students can find information quickly.', P], ['For example, they can check a word in a dictionary app during a lecture.', D], ['Second, smartphones help students to organize their time.', P], ['Also, they can use calendar apps to remember deadlines and exams.', D], ['For these reasons, I believe that every student should use their smartphone to study, not only to play.', C]]] }
  },
  quest: {
    // Radio Tower · eight wires to connect. Each correct answer connects one wire. Wrong answers drain the battery.
    wires: 8
  }
};
})();
