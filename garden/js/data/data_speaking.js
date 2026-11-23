// SPEAKING GARDEN TERRACE · how to build an answer in colour + recorded tasks with automatic feedback
(function () {
const B = '#2F6DB5', GR = '#2E8B57', OR = '#D97706', PK = '#C2185B', PU = '#7E4FA6';
const para = arr => `<p class="para">${arr.map(([t, r]) => `<span class="s ${r}">${t}</span>`).join(' ')}</p>`;
const P_INTRO = ['Introduce the topic', 'going to talk about|my presentation is about|today i|i\'d like to talk|i would like to talk'];
const P_FIRST = ['Give your first point', 'first of all|firstly|the main|the first|to begin with'];
const P_EX = ['Give a reason or an example', 'for example|for instance|such as|because|the reason for this|this is because'];
const P_MORE = ['Add another point', 'another|on top of that|in addition|also|secondly|furthermore'];
const P_CON = ['Use contrast or a counter-argument', 'however|on the contrary|but|on the other hand|it may be true|and yet'];
const P_END = ['Conclude', 'in conclusion|to sum up|in short|overall|to conclude'];

const lessons = [
  { id: 'build', emoji: '🏗️', title: 'Build your answer with colours', src: 'L&S Units 1 to 3', short: 'Introduce, point, reason or example, contrast, conclude',
    blocks: [
      { k: 'html', html: `<div class="burger"><div style="background:${B}">1 · Introduce: Today I'm going to talk about…</div><div style="background:${GR}">2 · Point 1: First of all, the main…</div><div style="background:${OR}">3 · Reason / example: This is because… For example…</div><div style="background:${GR}">4 · Point 2: On top of that, another…</div><div style="background:${PU}">5 · Contrast: It's often said that… On the contrary… / However…</div><div style="background:${PK}">6 · Conclude: In conclusion, we should…</div></div>` },
      { k: 'way', tag: 'Hear the colours in a real answer', html: para([['Today I\'m going to talk about the Arabian oryx, an animal that almost disappeared.', 'topic'], ['First of all, the main threat was hunting.', 'support'], ['For example, in the 1960s hunters used cars and guns, so the oryx had no chance to escape.', 'detail'], ['On top of that, the oryx lost much of its habitat.', 'support'], ['Some people say we cannot save a species once it disappears from the wild. On the contrary, breeding programmes brought the oryx back.', 'counter'], ['In conclusion, we should protect reserves so this success continues.', 'conc']]) },
      { k: 'rule', title: 'Golden rule', html: '<div class="ex">Every point needs a <b>reason or an example</b>. A point with no reason is only half an answer.</div>' }
    ] },
  { id: 'link', emoji: '🔗', title: 'Linking your ideas', src: 'L&S Units 1 and 2', short: 'Signposts that make you sound organized',
    blocks: [
      { k: 'rule', title: 'Your linking toolkit', html: '<table class="tbl"><tr><th>Job</th><th>Say</th></tr><tr><td>start</td><td>Today I\'m going to talk about… / First of all,…</td></tr><tr><td>add</td><td>On top of that,… / In addition,… / Another point is that…</td></tr><tr><td>reason</td><td>The reason for this is that… / This is because…</td></tr><tr><td>example</td><td>For example,… / such as…</td></tr><tr><td>personal</td><td>From my own experience,… / Personally,…</td></tr><tr><td>contrast</td><td>However,… / On the other hand,…</td></tr><tr><td>end</td><td>In conclusion,… / To sum up,… / Overall,…</td></tr></table>' },
      { k: 'way', tag: 'Pause at the signposts', html: '<div class="ex">Take a short breath <b>before</b> each signpost. It gives you time to think, and the listener hears your structure.</div>' }
    ] },
  { id: 'debate', emoji: '🗣️', title: 'Debating politely', src: 'L&S Units 1 and 2', short: 'Agree, disagree and answer the other side',
    blocks: [
      { k: 'rule', title: 'Counter-arguments', html: '<div class="ex"><b>It may be true that</b> wind farms are noisy, <b>but</b> modern turbines are much quieter.</div><div class="ex"><b>That\'s completely true, but</b> we also need to think about the long term.</div><div class="ex"><b>I see your point. However,</b> solar power does not work at night.</div>' },
      { k: 'ex', title: 'Agreeing and disagreeing', items: ['I completely agree with you.', 'That\'s a good point.', 'I\'m not sure I agree.', 'I see what you mean, but…', 'I\'m afraid I disagree because…'] },
      { k: 'mist', items: [['You are wrong!', 'I\'m afraid I disagree, because…'], ['No. Wind power is bad.', 'It may be true that wind power is clean, but it is not reliable.']] }
    ] },
  { id: 'recommend', emoji: '💡', title: 'Making recommendations', src: 'L&S Unit 3', short: 'I\'d suggest…, It would be better if…, The best thing would be…',
    blocks: [
      { k: 'rule', title: 'Recommendation phrases', html: '<div class="ex">I\'d suggest (that) the city <b>build</b> more cycle lanes.</div><div class="ex">I think it would be better if people <b>used</b> public transport.</div><div class="ex">The best thing would be <b>to</b> start a car-sharing app.</div><div class="ex">I\'d like <b>to see</b> more buses at rush hour.</div><div class="ex">In my opinion, the government <b>ought to</b> reduce fuel prices for buses.</div>' },
      { k: 'way', tag: 'Problem → solution → reason', html: para([['The biggest problem in my city is traffic congestion at rush hour.', 'topic'], ['I\'d suggest that companies let employees start work at different times.', 'support'], ['This is because the roads would not be full at the same time.', 'detail'], ['However, this would not work for every job.', 'counter'], ['So, overall, it would be better if we combined this with better buses.', 'conc']]) }
    ] },
  { id: 'voice', emoji: '🎵', title: 'Sounding confident', src: 'Delivery', short: 'Stress, speed, pauses and rhetorical questions',
    blocks: [
      { k: 'rule', title: 'Four tips', html: '<div class="ex">1. <b>Stress the key words</b>: The MAIN problem is TRAFFIC.</div><div class="ex">2. <b>Speed</b>: about 100 to 130 words a minute. The recorder tells you your speed.</div><div class="ex">3. <b>Pause</b> before signposts and after important numbers.</div><div class="ex">4. Use a <b>rhetorical question</b> to start a new point: "So, what can we do about it?"</div>' }
    ] }
];

const tasks = [
  { id: 'species', unit: 'L&S Unit 1', emoji: '🐆', title: 'An endangered animal', kind: 'Presentation', time: '2 minutes',
    prompt: 'Give a two-minute presentation about an endangered animal. Explain the human threats it faces and what people can do to help.',
    plan: [['Introduce', 'the animal + where it lives', B], ['Threat 1', 'loss of habitat (roads, farms, buildings)', GR], ['Reason / example', 'For example, …', OR], ['Threat 2', 'hunting / poachers / pollution', GR], ['Contrast', 'It\'s often said that… On the contrary,…', PU], ['Conclude', 'In conclusion, we should…', PK]],
    model: [['Today I\'m going to talk about the Arabian leopard, which lives in the mountains of Saudi Arabia, Yemen and Oman.', 'topic'], ['First of all, the main threat is the loss of its habitat.', 'support'], ['For example, new roads and farms are destroying the mountain areas where it hunts.', 'detail'], ['On top of that, some farmers kill leopards because they attack their goats.', 'support'], ['It\'s often said that one animal cannot make a difference. On the contrary, the leopard controls the number of other animals, so it is very important for the ecosystem.', 'counter'], ['In conclusion, we should protect its habitat and teach farmers to protect their animals without killing leopards.', 'conc']],
    phrases: ['Today I\'m going to talk about', 'First of all', 'The main threat is', 'For example', 'On top of that', 'It\'s often said that', 'On the contrary', 'In conclusion', 'we should'],
    keywords: ['endangered', 'habitat', 'species', 'protect', 'survive', 'threat', 'poacher', 'illegal', 'extinct', 'hunt'],
    parts: [P_INTRO, P_FIRST, P_EX, P_MORE, P_CON, P_END], minWords: 160 },
  { id: 'working', unit: 'L&S Unit 1', emoji: '🐪', title: 'Working animals', kind: 'Opinion', time: '1 minute',
    prompt: 'Do you think animals should still work for people today? Give your opinion, one reason with an example, and answer the other side.',
    plan: [['Introduce', 'my opinion: yes, if they are treated well', B], ['Point', 'some families depend on animals', GR], ['Example', 'a camel or donkey on mountain paths', OR], ['Counter-argument', 'It may be true that some owners are cruel, but…', PU], ['Conclude', 'welfare laws', PK]],
    model: [['In my opinion, animals can still work for people, but only if they are treated well.', 'topic'], ['The main reason is that many poor families depend on them to earn money.', 'support'], ['For example, a donkey can carry goods on narrow mountain paths where cars cannot go.', 'detail'], ['It may be true that some owners are cruel to their animals, but the answer is better welfare laws, not stopping animal work completely.', 'counter'], ['To sum up, working animals need enough food, water and rest.', 'conc']],
    phrases: ['In my opinion', 'The main reason is', 'For example', 'It may be true that', 'but', 'To sum up'],
    keywords: ['welfare', 'cruel', 'depend on', 'suffer', 'abuse', 'conditions', 'protect', 'support'],
    parts: [['Give your opinion', 'in my opinion|i think|i believe|personally'], P_EX, P_CON, P_END], minWords: 80 },
  { id: 'windfarm', unit: 'L&S Unit 2', emoji: '🌬️', title: 'A wind farm near your town', kind: 'Debate turn', time: '1.5 minutes',
    prompt: 'Your town plans to build a wind farm nearby. Are you for or against it? Give two reasons and answer one argument from the other side.',
    plan: [['Introduce', 'I am for / against the wind farm', B], ['Reason 1', 'clean, renewable, no greenhouse gases', GR], ['Example', 'electricity for thousands of homes', OR], ['Reason 2', 'jobs / long-term benefit', GR], ['Counter-argument', 'It may be true that turbines are noisy, but…', PU], ['Conclude', 'If we don\'t invest now, …', PK]],
    model: [['I\'d like to argue that our town should build the wind farm.', 'topic'], ['First of all, wind power is clean and renewable, so it does not produce greenhouse gases.', 'support'], ['For example, one large wind farm can provide electricity for thousands of homes.', 'detail'], ['On top of that, it will create jobs for local people.', 'support'], ['It may be true that some turbines are noisy, but modern turbines are much quieter, and they can be built far from houses.', 'counter'], ['In short, if we don\'t invest in renewable energy now, our children will pay the price.', 'conc']],
    phrases: ['I\'d like to argue that', 'First of all', 'For example', 'On top of that', 'It may be true that', 'In short', 'If we don\'t'],
    keywords: ['renewable', 'greenhouse gas', 'fossil fuel', 'environment', 'pollute', 'alternative', 'long-term', 'benefit', 'risk', 'solution'],
    parts: [['Say if you are for or against', 'argue|i am for|i\'m for|i am against|i\'m against|should build|should not build|shouldn\'t build'], P_FIRST, P_EX, P_MORE, P_CON, P_END], minWords: 120 },
  { id: 'transport', unit: 'L&S Unit 3', emoji: '🚦', title: 'A transport problem and solutions', kind: 'Presentation', time: '2 minutes',
    prompt: 'Give a presentation about a transport problem in your city. Explain the problem and recommend two solutions.',
    plan: [['Introduce', 'the problem: traffic congestion at rush hour', B], ['Reason for the problem', 'too many cars with one driver', OR], ['Solution 1', 'I\'d suggest that… (better buses / metro)', GR], ['Solution 2', 'It would be better if… (different start times)', GR], ['Personal experience', 'From my own experience,…', OR], ['Conclude', 'The best thing would be to…', PK]],
    model: [['Today I\'d like to talk about traffic congestion in Riyadh, especially at rush hour.', 'topic'], ['The reason for this is that most cars carry only one person.', 'detail'], ['First of all, I\'d suggest that the city add more buses that connect to the metro stations.', 'support'], ['Secondly, I think it would be better if universities and offices started at different times.', 'support'], ['From my own experience, the road to campus is empty at ten o\'clock, but it is full at eight.', 'detail'], ['However, these solutions need time and money.', 'counter'], ['In conclusion, the best thing would be to start with more buses, because it is quick and practical.', 'conc']],
    phrases: ['Today I\'d like to talk about', 'The reason for this is', 'I\'d suggest that', 'it would be better if', 'From my own experience', 'The best thing would be', 'In conclusion'],
    keywords: ['traffic congestion', 'public transport', 'commuter', 'rush hour', 'reduce', 'vehicle', 'practical', 'convenient', 'solve', 'prevent'],
    parts: [P_INTRO, ['Explain the reason for the problem', 'the reason for this|this is because|because'], ['Recommend a solution', 'i\'d suggest|i would suggest|it would be better if|the best thing would be|should|ought to'], P_MORE, ['Use personal experience', 'from my own experience|personally|in my experience'], P_END], minWords: 160 },
  { id: 'travel', unit: 'L&S Unit 3', emoji: '🚇', title: 'The best way to get to university', kind: 'Short answer', time: '1 minute',
    prompt: 'What is the best way to travel to university in your city? Give reasons and your own experience.',
    plan: [['Answer', 'In my opinion, the best way is…', B], ['Reason', 'The reason for this is that…', OR], ['Experience', 'From my own experience,…', OR], ['Contrast', 'However, …', PU], ['Conclude', 'Overall,…', PK]],
    model: [['In my opinion, the best way to travel to university is by metro.', 'topic'], ['The reason for this is that it is much faster than a car at rush hour.', 'detail'], ['From my own experience, the journey takes twenty minutes by metro but almost an hour by taxi.', 'detail'], ['However, the station is not very close to every home.', 'counter'], ['Overall, the metro is the most convenient choice for most students.', 'conc']],
    phrases: ['In my opinion', 'The reason for this is', 'From my own experience', 'However', 'Overall'],
    keywords: ['convenient', 'traffic', 'public transport', 'commuter', 'metro', 'faster', 'cheaper', 'safety'],
    parts: [['Give your answer', 'in my opinion|i think|the best way'], ['Give a reason', 'the reason for this|because|this is because'], ['Use personal experience', 'from my own experience|personally|in my experience'], P_CON, P_END], minWords: 80 }
];
window.SPEAKING = { lessons, tasks };
})();
