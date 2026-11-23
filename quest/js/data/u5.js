// UNIT 5 · SPORTS AND COMPETITION (Unlock 2, 3rd edition: R&W Unit 5 + L&S Unit 5) · original practice material
(function () {
const { M, TF, G, O, SEQ, MT, W, FILL, ROLES, T, P, D, C, X } = window.H;
QUEST.units[5] = {
  n: 5, title: 'Sports and Competition', emoji: '🏆', tag: 'Races, champions and money in sport',
  books: { rw: 'Extreme races · camel racing · scan to predict · diagrams · prepositions of movement · subject-verb agreement · process paragraph', ls: 'Money in sport · listen for bias · zero and first conditional · adverbs of degree · emphasize · ask for clarification' },
  words: [
    ['participant', 'noun', 'a person who takes part in an event', 'There were 400 participants in the race.', 'RW'],
    ['course', 'noun', 'the way or path of a race', 'The course goes through the desert and over two hills.', 'RW'],
    ['accident', 'noun', 'something bad that happens by chance and hurts someone', 'He had an accident and hurt his leg.', 'Both'],
    ['obstacle', 'noun', 'something in your way that you must go over or around', 'The first obstacle is a wall of tyres.', 'RW'],
    ['finish line', 'noun', 'the line at the end of a race', 'She crossed the finish line in first place.', 'RW'],
    ['muddy', 'adjective', 'covered with wet earth', 'After the rain, the course was very muddy.', 'RW'],
    ['dangerous', 'adjective', 'that can hurt you', 'Climbing without a rope is dangerous.', 'RW'],
    ['challenge', 'noun', 'something difficult that tests you', 'The marathon is a big challenge for beginners.', 'RW'],
    ['compete', 'verb', 'to try to win against other people', 'Thirty countries compete in the championship.', 'LS'],
    ['competition', 'noun', 'an event where people try to win', 'She won a swimming competition last year.', 'LS'],
    ['champion', 'noun', 'the winner of a competition', 'He is the national boxing champion.', 'LS'],
    ['prize', 'noun', 'money or a cup that you get when you win', 'The prize is 10,000 riyals.', 'LS'],
    ['salary', 'noun', 'the money a person gets for a job every month or year', 'Some footballers have a very high salary.', 'LS'],
    ['fan', 'noun', 'a person who loves and supports a team or a player', 'Al Hilal fans sang for the whole match.', 'LS'],
    ['support', 'verb', 'to want a team to win and help it', 'I support the national team.', 'LS'],
    ['score', 'verb', 'to get a goal or a point', 'He scored two goals in the final.', 'LS'],
    ['kick', 'verb', 'to hit something with your foot', 'Kick the ball into the goal!', 'LS'],
    ['hit', 'verb', 'to touch something hard and fast', 'In tennis, you hit the ball with a racket.', 'LS'],
    ['cost', 'verb', 'to have a price', 'A ticket for the final costs 200 riyals.', 'LS'],
    ['strong', 'adjective', 'with a powerful body; not weak', 'Weightlifters are very strong.', 'LS'],
    ['intelligent', 'adjective', 'clever, quick to understand', 'A good coach is calm and intelligent.', 'LS'],
    ['train', 'verb', 'to practise a sport to get better', 'The team trains five days a week.', 'Both'],
    ['jockey', 'noun', 'a person (or robot) who rides a horse or camel in a race', 'Today, small robot jockeys ride the camels.', 'RW'],
    ['spectator', 'noun', 'a person who watches an event', 'Thousands of spectators watched the race.', 'RW']
  ],
  grammar: [
    { id: 'move', book: 'R&W', emoji: '🧗', title: 'Prepositions of movement', short: 'over, under, through, across, along, around, into, out of, up, down',
      learn: [
        { k: 'rule', title: 'How do you move?', html: '<p><b>over</b> a wall · <b>under</b> a net · <b>through</b> a tunnel / the water · <b>across</b> a river / a bridge · <b>along</b> a path / the beach · <b>around</b> a lake · <b>into</b> the water · <b>out of</b> the water · <b>up</b> a hill · <b>down</b> a hill · <b>past</b> a tree · <b>towards</b> the finish line</p>' },
        { k: 'anim', type: 'signs', items: [['🧱', 'over', 'go above it', '#E8590C'], ['🕸️', 'under', 'go below it', '#1C7ED6'], ['🚇', 'through', 'go inside, from one end to the other', '#2F9E44'], ['🌉', 'across', 'from one side to the other', '#7048E8'], ['⛰️', 'up / down', 'climb / go lower', '#C2255C'], ['🔄', 'around', 'in a circle', '#F08C00']] },
        { k: 'mist', items: [['Swim across the tunnel.', 'Crawl through the tunnel.'], ['Jump under the wall.', 'Jump over the wall.'], ['Get out the water.', 'Get out of the water.']] }
      ],
      qs: [M('Runners climb ___ the wall of tyres.', ['over', 'under', 'through'], 'You go above a wall: over.'),
        M('Then they crawl ___ a low net.', ['under', 'over', 'up'], 'A low net: you go below it.'),
        M('Next, they crawl ___ a dark tunnel.', ['through', 'across', 'around'], 'Inside a tunnel from one end to the other: through.'),
        M('They walk ___ a narrow bridge.', ['across', 'through', 'under'], 'From one side to the other: across.'),
        M('Then they jump ___ the cold lake.', ['into', 'out of', 'along'], 'Movement to the inside: into.'),
        M('The camels run ___ the track three times.', ['around', 'through', 'into'], 'In a circle: around.'),
        M('Finally, they run ___ the hill to the finish line.', ['down', 'under', 'through'], 'From high to low: down.'),
        W('After the swim, they climb out the water.', 'out', 'out of', ['into', 'off'], 'We say out of the water.')]
    },
    { id: 'sva', book: 'R&W', emoji: '🤝', title: 'Subject-verb agreement', short: 'The runner runs. The runners run. Everyone is…',
      learn: [
        { k: 'rule', title: 'Singular subject = verb + s', html: '<p><i>The race <b>starts</b> at 8. Each runner <b>wears</b> a number. Everyone <b>is</b> ready.</i><br>Plural subject = no -s: <i>The runners <b>start</b>. The camels <b>run</b>.</i></p>' },
        { k: 'rule', title: 'Traps', html: '<p>Find the <b>real</b> subject: <i>The <u>number</u> of participants <b>is</b> 400.</i> · <i>One <u>of</u> the runners <b>is</b> 96 years old.</i> · <i>The <u>players</u> in the team <b>are</b> tired.</i><br><b>Everyone, everybody, each, nobody</b> = singular.</p>' },
        { k: 'mist', items: [['The race start at 8 a.m.', 'The race starts at 8 a.m.'], ['Everyone are tired.', 'Everyone is tired.'], ['One of the camels are fast.', 'One of the camels is fast.']] }
      ],
      qs: [M('The race ___ at 7 a.m. every Friday.', ['starts', 'start', 'are starting'], 'The race = it: starts.'),
        M('The participants ___ through the mud.', ['crawl', 'crawls', 'is crawling'], 'Plural subject: crawl.'),
        M('Everyone ___ a medal at the end.', ['gets', 'get', 'are getting'], 'Everyone is singular: gets.'),
        M('One of the runners ___ 96 years old.', ['is', 'are', 'be'], 'The subject is one: is.'),
        M('The number of camels in the race ___ 30.', ['is', 'are', 'were'], 'The subject is the number: is.'),
        M('The players in my team ___ every evening.', ['train', 'trains', 'is training'], 'The subject is the players: train.'),
        W('Each runner wear a number on his shirt.', 'wear', 'wears', ['wearing', 'are wearing'], 'Each runner is singular: wears.'),
        W('The camels runs very fast.', 'runs', 'run', ['is running', 'running'], 'The camels is plural: run.')]
    },
    { id: 'cond', book: 'L&S', emoji: '🔀', title: 'Zero and first conditional', short: 'If you train, you get better. If you train, you will win.',
      learn: [
        { k: 'rule', title: 'Zero conditional: always true', html: '<p><b>If + present, present</b>: <i>If you <b>heat</b> ice, it <b>melts</b>. If you <b>don\'t drink</b> water, you <b>get</b> tired.</i></p>' },
        { k: 'rule', title: 'First conditional: a real future situation', html: '<p><b>If + present, will + verb</b>: <i>If we <b>win</b> today, we <b>will play</b> in the final.</i><br>Never <b>will</b> after <b>if</b>: <s>If we will win</s>.<br>Comma when <b>if</b> comes first: <i>If it rains, the match will stop. / The match will stop if it rains.</i></p>' },
        { k: 'anim', type: 'cond', left: 'If you train every day (present)', right: 'you will be stronger (future)', note: 'The present condition walks you to the future result.' }
      ],
      qs: [M('If you ___ water, it boils at 100°C.', ['heat', 'will heat', 'heated'], 'Zero conditional: present + present.'),
        M('If we win this match, we ___ the cup.', ['will get', 'get', 'got'], 'First conditional: will + verb in the result.'),
        M('If it ___ tomorrow, the race will be cancelled.', ['rains', 'will rain', 'rained'], 'No will after if: rains.'),
        M('If players don\'t sleep well, they ___ tired.', ['feel', 'will feeling', 'felt'], 'A general truth: zero conditional.'),
        M('You ___ the bus if you don\'t hurry.', ['will miss', 'miss', 'missed'], 'Result in the future: will miss.'),
        O('If you practise every day, you will improve.', 'If + present, will + verb.'),
        W('If he will score, the fans will be happy.', 'will score', 'scores', ['scored', 'score'], 'No will after if: If he scores…'),
        W('If you kick the ball hard it goes far.', 'hard', 'hard,', ['hard.', 'hardly'], 'Put a comma after the if-clause when it comes first.')]
    },
    { id: 'degree', book: 'L&S', emoji: '🎚️', title: 'Adverbs of degree', short: 'extremely, very, really, quite, a bit, too, enough',
      learn: [
        { k: 'anim', type: 'meter', rows: [['extremely', 100, '#C92A2A', 'the strongest'], ['very / really', 80, '#E8590C', 'strong'], ['quite / fairly', 55, '#1C7ED6', 'medium'], ['a bit / slightly', 25, '#2F9E44', 'small']], note: 'Make adjectives stronger or weaker.' },
        { k: 'rule', title: 'too and enough', html: '<p><b>too + adjective</b> = more than is good: <i>The tickets are <b>too</b> expensive. I can\'t buy one.</i><br><b>adjective + enough</b> = the right amount: <i>He is <b>fast enough</b> to win.</i> · <i>She isn\'t <b>strong enough</b>.</i></p>' }
      ],
      qs: [M('Footballers\' salaries are ___ high. Some earn millions every month!', ['extremely', 'a bit', 'slightly'], 'Millions every month: the strongest adverb.'),
        M('The race was ___ difficult, but I finished it.', ['quite', 'too', 'enough'], 'Medium difficulty, and I finished: quite.'),
        M('The tickets are ___ expensive. We can\'t buy them.', ['too', 'enough', 'quite'], 'More than is good: too.'),
        M('He isn\'t tall ___ to play basketball.', ['enough', 'too', 'very'], 'adjective + enough.'),
        O('The team is fast enough to win the cup.', 'adjective + enough + to + verb.'),
        M('The water was ___ cold, so I swam for an hour.', ['a bit', 'extremely', 'too'], 'Only a little cold, so it was OK.'),
        W('The match was enough exciting.', 'enough exciting', 'exciting enough', ['too exciting', 'very enough'], 'Enough goes after the adjective.'),
        W('The bag is very heavy to carry. I can\'t lift it.', 'very', 'too', ['enough', 'quite'], 'I can\'t lift it: too heavy.')]
    }
  ],
  reading: {
    skill: { title: 'Scan to predict · analyze a diagram', blocks: [
      { k: 'rule', title: 'Scan to predict', html: '<p>Before you read, <b>scan</b> for names, numbers and words in <b>bold</b> or in the pictures. Use them to <b>predict</b> what the text is about. <i>I see "robot", "65 km/h", "jockey": maybe the text is about a race with robots.</i></p>' },
      { k: 'rule', title: 'Diagrams', html: '<p>A diagram shows a <b>process</b> or a <b>place</b>. Follow the numbers and arrows. Read the labels. Connect the words in the text to the parts of the diagram.</p>' }
    ] },
    title: 'Robots on camels: an ancient sport goes modern',
    paras: [
      'Camel racing is one of the oldest sports in the Arabian Peninsula. For hundreds of years, people raced their camels at festivals and weddings. Today, it is a big professional sport with large prizes, and thousands of spectators watch the races.',
      'A racing camel can run at up to about 65 km/h for short distances, and it can keep a speed of around 40 km/h for a long time. Most races are between 4 and 10 kilometres long. The camels race around a long sandy track.',
      'In the past, the jockeys were often light young boys. This was dangerous, and there were many accidents. In the early 2000s, Gulf countries banned child jockeys, and engineers developed small robot jockeys. The robots weigh only a few kilograms and sit on the camel\'s back.',
      'So who controls the robot? The camel owner drives a car along a road next to the track. He uses a remote control to talk to the camel through a speaker and to move a small whip. Many owners drive and shout at the same time!',
      'Camel racing is now safer and more modern, but it still connects people to their history. In 2020, UNESCO added camel racing to its list of important world cultural heritage.'
    ],
    qs: [M('Scan the title and the first lines. What do you predict the text is about?', ['how camel racing changed with technology', 'how to buy a camel', 'a football match'], 'Robots + camels + modern: technology changed the sport.'),
      M('What is the top speed of a racing camel?', ['about 65 km/h', 'about 40 km/h', 'about 10 km/h'], 'Paragraph 2.'),
      M('How long are most races?', ['between 4 and 10 km', 'between 40 and 65 km', 'exactly 100 km'], 'Paragraph 2.'),
      M('Why did Gulf countries ban child jockeys?', ['It was dangerous for the children.', 'The children were too heavy.', 'The camels were too slow.'], 'Paragraph 3: This was dangerous, and there were many accidents.'),
      M('How does the owner control the robot?', ['with a remote control from a car', 'by riding behind the camel', 'with a phone app at home'], 'Paragraph 4.'),
      TF('The robot jockeys are very heavy.', false, 'They weigh only a few kilograms.'),
      M('What did UNESCO do in 2020?', ['It added camel racing to its cultural heritage list.', 'It banned camel racing.', 'It built a new track.'], 'Paragraph 5.'),
      M('In the diagram of a race, the owner\'s car is…', ['on a road next to the track', 'in the middle of the track', 'at the finish line only'], 'He drives along a road next to the track.')]
  },
  listening: {
    skill: { title: 'Listen for bias · supporting opinions', blocks: [
      { k: 'rule', title: 'What is bias?', html: '<p>A speaker is <b>biased</b> when they show only <b>one side</b> because of their own interest or feelings. Listen for: strong words (<i>ridiculous, crazy, totally</i>), only good or only bad points, and <b>who</b> the speaker is (a fan? a player? an owner?).</p>' },
      { k: 'rule', title: 'Supporting opinions', html: '<p>A good opinion has a <b>reason</b> and an <b>example</b>: <i>I think salaries are too high <b>because</b> teachers earn much less. <b>For example</b>, …</i></p>' }
    ] },
    title: 'Radio debate: are footballers paid too much?', situation: 'A radio host talks to a football club owner and a school teacher. Who is biased? Listen twice.',
    voices: { H: 'f', A: 'm', B: 'f' }, names: { H: 'Host', A: 'Mr Khalid (club owner)', B: 'Ms Huda (teacher)' },
    script: [
      ['H', 'Welcome to Sports Talk. Today\'s question: are top footballers paid too much? Mr Khalid, you own a football club. What do you think?'],
      ['A', 'Absolutely not! Players work extremely hard. They train every day, and their careers are short, maybe only ten or twelve years. Also, they bring fans, TV money and sponsors to the club. Our club earns millions because of our stars. So their salaries are totally fair.'],
      ['H', 'Ms Huda, you\'re a teacher. Do you agree?'],
      ['B', 'Not really. I enjoy football, but I think some salaries are too high. For example, one top player can earn more in a week than a nurse earns in ten years. Nurses and teachers work hard too, and they save lives and build the future.'],
      ['H', 'So what\'s your solution?'],
      ['B', 'If clubs give a small part of the money to local sports for children, everyone will win. That\'s my point: football should help the community.'],
      ['A', 'Sorry, can I just say something? Many players already help charities. You only hear about the money!'],
      ['H', 'Thank you both. It\'s a hot topic!']
    ],
    qs: [M('What is the topic of the debate?', ['whether top footballers are paid too much', 'how to become a football player', 'the best football club'], 'Today\'s question: are top footballers paid too much?'),
      M('Who is probably biased in favour of high salaries?', ['Mr Khalid, because he owns a club that earns money from stars', 'Ms Huda, because she is a teacher', 'the host'], 'His club earns millions because of the stars: he has an interest.'),
      M('Which words show Mr Khalid\'s strong feelings?', ['absolutely, extremely, totally', 'not really, I think', 'thank you both'], 'Strong words often show bias.'),
      M('What reason does Mr Khalid give?', ['Careers are short, only 10 or 12 years.', 'Players don\'t train much.', 'Fans don\'t pay for tickets.'], 'their careers are short.'),
      M('What example does Ms Huda give?', ['A player can earn more in a week than a nurse in ten years.', 'Teachers earn more than players.', 'Nurses watch football.'], 'Her example compares a week with ten years.'),
      M('What is Ms Huda\'s solution?', ['Clubs should give some money to local sports for children.', 'Ban football.', 'Pay teachers like footballers.'], 'If clubs give a small part of the money to local sports…'),
      M('"Sorry, can I just say something?" What is Mr Khalid doing?', ['politely interrupting', 'asking for clarification', 'agreeing'], 'He interrupts to add his point.')]
  },
  speaking: {
    skill: { title: 'Emphasize a point · ask for and give clarification', blocks: [
      { k: 'rule', title: 'Emphasize', html: '<p><i><b>That\'s my point.</b> · <b>The main thing is…</b> · <b>I really believe that…</b> · <b>What I\'m saying is…</b> · <b>It\'s extremely important that…</b></i></p>' },
      { k: 'rule', title: 'Clarification', html: '<p>Ask: <i>Sorry, what do you mean by…? · Could you explain that? · Do you mean that…?</i><br>Give: <i>What I mean is… · In other words… · Let me explain…</i></p>' }
    ] },
    title: 'Discussion: is money good or bad for sport?', prompt: 'Give your opinion in 1 minute: "Big money is good for sport." Give two reasons and one example, use a conditional, and emphasize your main point. Finish by answering: "What do you mean?"',
    time: '1 minute', minWords: 90,
    plan: [['Opinion', 'I partly agree', '#2F6DB5'], ['Reason 1 + example', 'money builds stadiums · e.g. new stadiums for the 2034 World Cup', '#2E8B57'], ['Reason 2', 'salaries are extremely high · tickets too expensive', '#D97706'], ['Condition', 'If clubs help children, sport will grow', '#7E4FA6'], ['Emphasize + clarify', 'That\'s my point · What I mean is…', '#C2185B']],
    model: [['I partly agree that big money is good for sport.', T], ['First, money builds stadiums and training centres.', P], ['For example, Saudi Arabia is building new stadiums for the 2034 World Cup.', D], ['However, some salaries are extremely high, and tickets are often too expensive for families.', X], ['If clubs use some money to help children play sport, sport will grow in every city.', P], ['That\'s my point: money is good only when it helps everyone.', C], ['What I mean is that fans and children must benefit too.', C]],
    phrases: ['I partly agree', 'For example', 'If', 'That\'s my point', 'The main thing is', 'What I mean is', 'In other words', 'extremely', 'too'],
    parts: [['Give an opinion', 'agree|i think|in my opinion|i believe'], ['Give an example', 'for example|for instance|such as'], ['Use a conditional (If…, …will)', 'if .{3,60}(will|\'ll)'], ['Emphasize a point', 'my point|main thing|really believe|what i\'m saying|extremely important'], ['Clarify', 'what i mean|in other words|let me explain']],
    keywords: ['salary', 'prize', 'fans', 'compete', 'champion', 'competition', 'support', 'cost']
  },
  writing: {
    skill: { title: 'A process paragraph · order events · remove unrelated information', blocks: [
      { k: 'rule', title: 'Order the steps', html: '<p>A process paragraph explains <b>how something happens, step by step</b>. Use sequencers: <b>First, … Then, … Next, … After that, … Finally, …</b> Each step can use a preposition of movement: <i>First, runners climb <b>over</b> a wall.</i></p>' },
      { k: 'rule', title: 'Stay on topic', html: '<p>Every sentence must be about the process. Remove sentences that are <b>unrelated</b>: <i>My cousin has a red car.</i> has nothing to do with the race.</p>' }
    ] },
    build: [
      SEQ('Put the race steps in order.', ['First, the runners swim across a cold lake.', 'Then, they climb up a steep hill.', 'Next, they crawl under a muddy net.', 'After that, they run through a dark tunnel.', 'Finally, they jump over a fire and cross the finish line.'], 'Follow the sequencers: First → Then → Next → After that → Finally.'),
      M('Which sentence does NOT belong in a paragraph about the Quest Island race?', ['My brother likes pizza with cheese.', 'The runners climb over a high wall.', 'At the end, every participant gets a medal.'], 'Pizza has nothing to do with the race process.'),
      M('Which sentence does NOT belong?', ['The camels were born in Oman.', 'First, the owners take the camels to the start line.', 'Then, the robot jockeys are switched on.'], 'The birthplace is not a step in the process.'),
      M('Choose the best sequencer: "___, the runners cross the finish line."', ['Finally', 'First', 'Then'], 'The last step: Finally.'),
      FILL('Complete the steps with prepositions of movement.', 'First, swim ___ the lake. Then crawl ___ the net. Next, run ___ the tunnel. Finally, climb ___ the wall.', ['across', 'under', 'through', 'over'], ['across', 'under', 'through', 'over'], 'across a lake, under a net, through a tunnel, over a wall.'),
      W('Then the runner climb up the hill.', 'climb', 'climbs', ['climbing', 'are climbing'], 'The runner is singular: climbs.')
    ],
    task: { title: 'Describe the Quest Island race', prompt: 'Write a process paragraph (70 to 100 words) describing a race on Quest Island. Use the course in the planner, sequencers and prepositions of movement. Do not add unrelated information.',
      table: [['Start', 'the beach', '#2F6DB5'], ['Steps', 'lake · hill · net · tunnel · broken bridge', '#2E8B57'], ['Finish', 'treasure cave · medal', '#C2185B']],
      frame: 'The Quest Island race is a difficult challenge. First, the participants start on ___. Then, they swim across ___. Next, they climb up ___. After that, they crawl under ___ and run through ___. Finally, they walk across ___ and cross the finish line at ___. If they finish, they will get ___.',
      checks: [['70 words or more', 'WORDS>=70'], ['First … Then … Finally', 'first.*then.*finally'], ['Three prepositions of movement', '(over|under|through|across|along|around|into|out of|up|down).*(over|under|through|across|along|around|into|out of|up|down).*(over|under|through|across|along|around|into|out of|up|down)'], ['Third person -s (climbs, runs…) or plural verbs', '(they|participants|runners) (swim|climb|crawl|run|walk|jump)|(climbs|runs|swims|crawls|jumps|walks)'], ['A Unit 5 word (participant, course, obstacle, challenge…)', 'participant|course|obstacle|challenge|finish line|medal|compete']],
      model: [[['The Quest Island race is one of the most difficult challenges in the world.', T], ['First, the participants start on the beach and swim across a cold lake.', P], ['Then, they climb up a steep hill.', D], ['Next, they crawl under a muddy net and run through a dark tunnel.', D], ['After that, they walk carefully across a broken bridge.', D], ['Finally, they cross the finish line at the treasure cave.', D], ['If they finish the course, they will get a gold medal.', C]]] }
  },
  quest: {
    // Golden Dunes · Camel Race. Each correct answer makes your camel run; the rival camel runs on its own timer.
    raceLen: 10
  }
};
})();
