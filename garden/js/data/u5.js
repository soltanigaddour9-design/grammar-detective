// UNIT 5 · HEALTH AND FITNESS (Unlock 3, 3rd edition) · both books
// R&W: exercise article, obesity essay, making inferences, verb and noun forms, health collocations,
//      stating opinions, stating a purpose, linking contrasting sentences, balanced opinion essay.
// L&S: long life podcast, four health programme presentations, listening for attitude, common knowledge,
//      phrasal verbs, adjectives for well-being, ideas map, problem-solution organization, presenting persuasively.
(function () {
const M = (q, o, why, x) => ({ t: 'mcq', q, o, a: 0, why, ...(x || {}) });
const G = (q, a, why, help) => ({ t: 'gap', q, a: [].concat(a), why, ...(help ? { help } : {}) });
const O = (tiles, why, alt) => ({ t: 'order', tiles, a: tiles.join(' '), why, ...(alt ? { alt } : {}) });
const TF = (q, a, why) => ({ t: 'tf', q, a, why });
const TFD = (q, a, why) => ({ t: 'tf', q, a, dns: true, why });
const S = (q, items, why) => ({ t: 'seq', q, items, why });
const AG = (q, agrees, why) => ({ t: 'mcq', q, o: ['The writer would agree.', 'The writer would disagree.'], a: agrees ? 0 : 1, keep: true, why });
const B = '#2F6DB5', GR = '#2E8B57', OR = '#D97706', PK = '#C2185B', PU = '#7E4FA6', TE = '#0E8F8F';
const byId = (arr, id) => arr.find(x => x.id === id);

// ================= VOCABULARY · Unit 5 (both wordlists) =================
const U5 = [
 ['active', 'adjective', 'AC·tive', '👵🏻 🎾 🚶‍♀️', 'My grandmother is 88, but she walks every day and plays tennis. She is very ___.', 'doing things which involve moving and using energy', ['My grandmother is 88, but she is still very <b>active</b>.'], 'activity (n), actively (adv), inactive (opposite)', ['Does an active person sit on the sofa all day?', 'no', 'An active person moves a lot.']],
 ['suffer', 'verb', 'SUF·fer', '🤕 💊 😣', 'A person has a lot of pain from an illness. They ___ from it.', 'to experience physical or mental pain', ['Many people <b>suffer</b> from back pain because they sit all day.'], 'suffering (n), sufferer (n). suffer FROM something', ['Is suffering a nice feeling?', 'no', 'It means pain.']],
 ['serious', 'adjective', 'SE·ri·ous', '🚑 ⚠️ ❤️‍🩹', 'Heart disease can kill people. It is a very ___ condition.', 'bad or dangerous', ['Heart disease is an extremely <b>serious</b> condition.'], 'seriously (adv), seriousness (n)', ['Is a serious illness a small problem?', 'no', 'It is a big, dangerous problem.']],
 ['self-esteem', 'noun', 'self·es·TEEM', '🪞 😊 💪', 'Team sports help teenagers feel confident and good about themselves. They raise their ___.', 'being confident and believing in yourself', ['Playing team sports can raise the <b>self-esteem</b> of teenagers.'], 'high / low self-esteem', ['Does a person with low self-esteem feel confident?', 'no', 'They do not believe in themselves.']],
 ['calories', 'noun (plural)', 'CAL·o·ries', '🍩 🔥 🔢', 'A doughnut has a lot of energy in it. We measure this energy in ___.', 'the measurement of the amount of energy found in food', ['To lose weight, you should exercise and count <b>calories</b>.'], 'calorie (singular), low-calorie (adj), high-calorie (adj)', ['Do vegetables usually have fewer calories than cake?', 'yes', '']],
 ['recognize', 'verb', 'REC·og·nize', '💡 🧠 ✅', 'Many young people do not understand that sleep is important. They don\'t ___ its importance.', 'to understand; to accept that something is true', ['Many young people do not <b>recognize</b> the importance of sleep.'], 'recognition (n)', ['If you recognize a problem, do you accept that it is true?', 'yes', '']],
 ['moderate', 'adjective', 'MOD·er·ate', '⚖️ 🚶‍♀️ ⏱️', 'Not too much and not too little exercise: two and a half hours a week. A ___ amount.', 'not too much and not too little', ['Do a <b>moderate</b> amount of exercise each week, like fast walking.'], 'moderately (adv), moderation (n)', ['Is running a marathon every day a moderate amount of exercise?', 'no', 'It is too much.']],
 ['obesity', 'noun', 'o·BE·si·ty', '⚖️ 🍔 📈', 'When a person is extremely overweight, this is a health problem called ___.', 'the condition of being extremely overweight, in a way that is dangerous for health', ['<b>Obesity</b> can cause heart disease and diabetes.'], 'obese (adj)', ['Is obesity good for your heart?', 'no', 'It can cause heart disease.']],
 ['portion', 'noun', 'POR·tion', '🍽️ 🥗 ✋', 'Eat a small plate of rice, not a mountain! Control the size of your ___.', 'the amount of food served to one person', ['We can control the size of the <b>portions</b> we eat.'], 'portion size (collocation)', ['Is a portion an amount of food for one person?', 'yes', '']],
 ['nutritional', 'adjective', 'nu·TRI·tion·al', '🏷️ 🥫 🔍', 'Read the label on the packet: sugar, fat, calories. This is ___ information.', 'relating to the healthy things in food that your body needs', ['Read the <b>nutritional</b> information on food packaging.'], 'nutrition (n), nutritious (adj), nutrient (n)', ['Does nutritional information tell you about the food?', 'yes', '']],
 ['campaign', 'noun', 'cam·PAIGN', '📢 🪧 📺', 'The government made posters and TV adverts to tell people to eat more fruit. It was a health ___.', 'a planned group of activities to achieve something, for example to change people\'s behaviour', ['The ministry started a <b>campaign</b> to encourage healthy eating.'], 'advertising campaign, educational campaign', ['Is a campaign only one poster?', 'no', 'It is a plan with many activities.']],
 ['heart disease', 'noun', 'HEART dis·ease', '❤️ 🩺 ⚠️', 'An illness of the heart. Obesity can lead to ___.', 'an illness of the heart', ['Regular exercise lowers the risk of <b>heart disease</b>.'], 'collocation: heart + disease (not "heart illness")', ['Do we say "heart illness"?', 'no', 'We say heart disease.']],
 ['life expectancy', 'noun', 'LIFE ex·pec·tan·cy', '👶 ➡️ 👵 📊', 'In Japan people live for about 84 years on average. Their ___ is long.', 'how long a person can expect to live', ['Regular exercise increases <b>life expectancy</b>.'], 'collocation: life + expectancy', ['Is life expectancy about how long people live?', 'yes', '']],
 ['healthy lifestyle', 'noun', 'HEAL·thy LIFE·style', '🥗 🏃‍♀️ 😴', 'She eats well, sleeps eight hours and walks every day. She has a ___.', 'a way of living that protects your health', ['A <b>healthy lifestyle</b> includes good food, sleep and exercise.'], 'lifestyle (n)', ['Is eating junk food every day part of a healthy lifestyle?', 'no', '']],
 ['balanced diet', 'noun', 'BAL·anced DI·et', '🥦 🍞 🐟 🥛', 'Fruit, vegetables, bread, fish and milk: a healthy mixture of food. A ___.', 'a healthy mixture of different types of food', ['A <b>balanced diet</b> has fruit, vegetables, protein and carbohydrates.'], 'balance (n, v)', ['Is a balanced diet only one kind of food?', 'no', 'It is a mixture.']],
 ['junk food', 'noun', 'JUNK food', '🍟 🍔 🥤', 'Crisps, burgers and fizzy drinks are quick and tasty but unhealthy. They are ___.', 'food that is unhealthy but is quick and easy to eat', ['Some schools have banned <b>junk food</b>.'], 'collocation: junk + food', ['Is junk food healthy?', 'no', '']],
 ['regular exercise', 'noun', 'REG·u·lar EX·er·cise', '📅 🏃‍♀️ 🔁', 'She walks for 30 minutes every morning. She does ___.', 'sport or movement that people do at the same time each day, week, month, etc.', ['<b>Regular exercise</b> improves your mood and sleep.'], 'regularly (adv)', ['If you exercise once a year, is it regular exercise?', 'no', 'Regular = again and again at the same times.']],
 ['physical activity', 'noun', 'PHYS·i·cal ac·TIV·i·ty', '🚴‍♀️ 🧹 🏊‍♀️', 'Cycling, swimming and even cleaning the house: moving your body. This is ___.', 'moving around and doing things', ['Adults need at least 150 minutes of <b>physical activity</b> a week.'], 'physically (adv)', ['Is gardening a physical activity?', 'yes', 'You move your body.']],
 ['serious illness', 'noun', 'SE·ri·ous ILL·ness', '🏥 🚑 ⚠️', 'A very bad medical problem, like cancer or a stroke, is a ___.', 'a very bad medical problem', ['Exercise can reduce the risk of <b>serious illness</b> by 50%.'], 'collocation: serious + illness', ['Is a small cold a serious illness?', 'no', '']],
 ['educational programme', 'noun', 'ed·u·CA·tion·al PRO·gramme', '🏫 📚 🥗', 'Classes at school that teach children about healthy food are an ___.', 'classes or material to teach people about a particular topic', ['The school runs an <b>educational programme</b> about nutrition.'], 'education (n), educate (v)', ['Does an educational programme teach people?', 'yes', '']],
 ['advertising campaign', 'noun', 'AD·ver·tis·ing cam·PAIGN', '📺 🪧 🛍️', 'TV adverts, posters and online videos to sell a new drink: an ___.', 'media projects to convince people to buy a product or change their behaviour', ['The company spent millions on an <b>advertising campaign</b>.'], 'advertise (v), advertisement (n)', ['Does an advertising campaign try to change what people do?', 'yes', '']],
 ['habit', 'noun', 'HAB·it', '🍫 🌙 🔁', 'I eat chocolate every night after dinner. It is a bad ___.', 'something you do often and regularly, sometimes without knowing', ['I have a <b>habit</b> of eating chocolate after dinner.'], 'habitual (adj). Do not confuse with habitat (Unit 1)!', ['Is a habit something you do only once?', 'no', 'You do it again and again.']],
 ['illness', 'noun', 'ILL·ness', '🤒 🛌 🌡️', 'She has never been ill. She has never had a serious ___.', 'a disease of the body or mind', ['My grandmother has never had a serious <b>illness</b>.'], 'ill (adj)', ['Is an illness a kind of disease?', 'yes', '']],
 ['in shape', 'adjective', 'in SHAPE', '💪 🏋️‍♀️ 🙂', 'She works out three times a week and feels fit. She is ___.', 'healthy and fit', ['The best way to stay <b>in shape</b> is to eat well and exercise.'], 'out of shape (opposite)', ['If you are in shape, are you fit?', 'yes', '']],
 ['overweight', 'adjective', 'o·ver·WEIGHT', '⚖️ ⬆️ 🍕', 'I\'m a few kilos heavier than I should be. I\'m a little ___.', 'heavier than is healthy', ['I\'m a few kilos <b>overweight</b>, so I should eat less fast food.'], 'weight (n), obese (very overweight)', ['Is overweight lighter than normal?', 'no', 'It is heavier.']],
 ['prove', 'verb', 'PROVE', '🔬 📊 ✅', 'Research shows that exercise improves health. Research ___ it.', 'to show that something is true', ['Research <b>proves</b> that exercising can improve your health.'], 'proof (n)', ['If scientists prove something, do they show it is true?', 'yes', '']],
 ['ridiculous', 'adjective', 'ri·DIC·u·lous', '🙄 🤦‍♀️ 😂', 'It\'s silly and unreasonable that the government lets companies advertise fast food to children! It\'s ___.', 'very silly or unreasonable', ['It\'s <b>ridiculous</b> to get too worried about healthy eating!'], 'ridiculously (adv)', ['Is a ridiculous idea a sensible idea?', 'no', 'It is very silly.']],
 ['unhealthy', 'adjective', 'un·HEAL·thy', '🛋️ 🍟 📱', 'He never exercises and hardly eats fruit. He has an ___ lifestyle.', 'not good for your health', ['He has an <b>unhealthy</b> lifestyle.'], 'healthy (opposite), health (n)', ['Is junk food unhealthy?', 'yes', '']],
 ['work out', 'phrasal verb', 'work OUT', '🏋️‍♀️ 💦 🕖', 'I go to the gym three mornings a week to do exercise. I ___ at the gym.', 'to do exercise to make your body stronger', ['I <b>work out</b> at the gym three mornings a week.'], 'workout (n)', ['Do you work out at the gym?', 'yes', 'It means do exercise there.']],
 ['come down with', 'phrasal verb', 'come DOWN with', '🤧 🌡️ 🛌', 'Last winter I got four colds! I ___ four colds.', 'to get an illness, especially one which is not serious', ['Last winter, I <b>came down with</b> four colds.'], 'three-word phrasal verb: the object comes after with', ['Is "come down with" about getting ill?', 'yes', '']],
 ['cut down on', 'phrasal verb', 'cut DOWN on', '🍰 ✂️ ⬇️', 'You want to lose weight, so eat less fatty food. ___ fatty foods.', 'to eat or drink less of something; to do less of something', ['If you want to lose weight, you should <b>cut down on</b> fatty foods.'], 'three-word phrasal verb', ['Does cut down on mean stop completely?', 'no', 'It means do it less. Stop completely = give up.']],
 ['give up', 'phrasal verb', 'give UP', '🥤 🚫 💪', 'He drank fizzy drinks every day, but now he never drinks them. He ___ fizzy drinks.', 'to stop a habit, often because it is unhealthy', ['These children must <b>give up</b> crisps and sugary drinks.'], 'give it up / give up sugar', ['If you give up sugar, do you still eat a little?', 'no', 'You stop completely.']],
 ['take up', 'phrasal verb', 'take UP', '🎾 🆕 😊', 'I want to try something new. Maybe I\'ll start playing tennis. I\'ll ___ tennis.', 'to start doing a particular job or activity', ['I want to try something new. Maybe I\'ll <b>take up</b> tennis.'], 'take up a hobby / a sport', ['Is take up about starting something?', 'yes', '']],
 ['try out for', 'phrasal verb', 'try OUT for', '⚽ 📋 🤞', 'Tim wants to be in the football team. He will play in a test match. He will ___ the team.', 'to compete for a position on a sports team or a part in a play', ['Tim is going to <b>try out for</b> the football team.'], 'tryout (n)', ['If you try out for a team, are you already in the team?', 'no', 'You are trying to get a place.']],
 ['sign up for', 'phrasal verb', 'sign UP for', '📝 🧘‍♀️ ✅', 'Write your name on the list to join the yoga class. ___ the class!', 'to agree to become involved in an organized activity', ['Why don\'t you <b>sign up for</b> a yoga class?'], 'sign up (no object): Sign up now!', ['Do you sign up for a class before it starts?', 'yes', '']],
 ['join in', 'phrasal verb', 'join IN', '🤾‍♀️ 👋 🧑‍🤝‍🧑', 'We are playing a game. Would you like to play with us? ___ the game!', 'to become involved in an activity with other people', ['Would you like to <b>join in</b> the game?'], 'join in (an activity)', ['Do you do it alone when you join in?', 'no', 'You do it with other people.']],
 ['get over', 'phrasal verb', 'get O·ver', '🤒 ➡️ 😊', 'I was ill with the flu for two weeks. Now I am healthy again. I ___ the flu.', 'to become healthy again after having an illness', ['It took me a long time to <b>get over</b> the flu.'], 'get over an illness / a problem', ['After you get over a cold, are you still ill?', 'no', '']],
 ['concentration', 'noun', 'con·cen·TRA·tion', '🧠 🎯 📖', 'Writing needs all your attention. It needs a lot of ___.', 'the ability to give your whole attention to one thing', ['Writing requires a lot of <b>concentration</b>.'], 'concentrate (v)', ['Is it easy to concentrate in a noisy room?', 'no', '']],
 ['performance', 'noun', 'per·FOR·mance', '🏅 📈 🏃‍♀️', 'Healthy food makes your muscles stronger, so you run faster. It improves your athletic ___.', 'how well a person does an activity', ['Eating healthy food can improve your athletic <b>performance</b>.'], 'perform (v), performer (n)', ['Is performance about how well you do something?', 'yes', '']],
 ['treatment', 'noun', 'TREAT·ment', '💧 💊 🩺', 'Drinking lots of water can help a stomachache. It is a good ___.', 'a way to cure an illness or injury', ['Acupuncture is a traditional Chinese <b>treatment</b>.'], 'treat (v)', ['Is a treatment a way to make someone better?', 'yes', '']],
 ['stress', 'noun', 'STRESS', '😫 💼 🤯', 'Marcus has too much work. He feels worried all the time and has headaches. He feels a lot of ___.', 'worry caused by a difficult situation', ['Marcus is feeling a lot of <b>stress</b> at work.'], 'stressful (adj), stressed (adj)', ['Does exercise usually reduce stress?', 'yes', '']],
 ['relax', 'verb', 're·LAX', '🛋️ 🎬 😌', 'I don\'t want to go to the gym. I just want to stay at home and feel calm. I want to ___.', 'to become less tense or worried', ['I just want to stay at home, <b>relax</b> and watch a film.'], 'relaxation (n), relaxing (adj), relaxed (adj)', ['When you relax, do you feel more worried?', 'no', 'You feel calmer.']],
 ['reduce', 'verb', 're·DUCE', '📉 🍬 ⬇️', 'If you eat fewer calories, you will lose weight. ___ the number of calories!', 'to make something less in size, amount, etc.', ['If you <b>reduce</b> the number of calories you eat, you will lose weight.'], 'reduction (n)', ['Does reduce mean make bigger?', 'no', 'It means make smaller or less.']],
 ['participate', 'verb', 'par·TIC·i·pate', '🙋‍♀️ ⚽ 🎉', 'Anybody can play. You don\'t need experience. Anyone can ___ in the game.', 'to be involved in an activity', ['Anybody can <b>participate</b> in the game.'], 'participation (n), participant (n). participate IN', ['Do you participate in a class if you only watch from the door?', 'no', 'You must take part.']],
 ['mental', 'adjective', 'MEN·tal', '🧠 🧩 😊', 'Exercise is good for the mind, too. It has ___ benefits, like a better memory.', 'relating to the mind', ['Exercise has a number of <b>mental</b> benefits, like improving memory.'], 'mentally (adv), mental health', ['Is memory a mental skill?', 'yes', '']],
 ['physical', 'adjective', 'PHYS·i·cal', '💪 🏃‍♀️ 🫀', 'Which activity keeps your BODY strong? It is about ___ health.', 'relating to the body', ['Swimming is a great <b>physical</b> activity.'], 'physically (adv)', ['Is physical health about the body?', 'yes', '']],
 ['emotional', 'adjective', 'e·MO·tion·al', '💗 😢 😄', 'Can exercise make you happier and calmer? Does it have ___ benefits?', 'relating to feelings', ['Does exercising have <b>emotional</b> benefits?'], 'emotion (n), emotionally (adv)', ['Is happiness an emotion?', 'yes', '']],
 ['social', 'adjective', 'SO·cial', '👭 ☕ 🎉', 'What\'s the best way to find new friends to go out with? To improve your ___ life?', 'relating to activities in which you meet and spend time with other people', ['Team sports can improve your <b>social</b> life.'], 'society (n), socialize (v)', ['Is a social life about time with other people?', 'yes', '']],
 ['intellectual', 'adjective', 'in·tel·LEC·tu·al', '📚 🤔 ♟️', 'She loves talking about books and philosophy. She is very ___.', 'relating to your ability to think and understand things, especially complicated ideas', ['Chess is an <b>intellectual</b> game.'], 'intellect (n), intelligence (n)', ['Is an intellectual activity about thinking?', 'yes', '']],
 ['cultural', 'adjective', 'CUL·tur·al', '🕌 🎎 🌍', 'When you move to a new country, the food and traditions are different. These are ___ differences.', 'relating to the habits, traditions and beliefs of a society', ['It takes time to get used to the <b>cultural</b> differences.'], 'culture (n)', ['Are traditions part of culture?', 'yes', '']],
 ['educational', 'adjective', 'ed·u·CA·tion·al', '🏫 🧠 🌍', 'Travelling teaches you a lot. It has ___ benefits.', 'relating to learning', ['People often think that travelling has <b>educational</b> benefits.'], 'education (n), educate (v)', ['Is an educational trip about learning?', 'yes', '']],
 ['personal', 'adjective', 'PER·son·al', '🙋‍♀️ 🔐 🎯', 'Hiring a tutor who teaches only you is a ___ way to learn.', 'relating to a single person rather than to a group', ['A <b>personal</b> trainer works with one person at a time.'], 'person (n), personally (adv)', ['Is a personal trainer for a big group?', 'no', 'For one person.']]
];
const toObj = r => ({ w: r[0], pos: r[1], stress: r[2], pic: r[3], guess: r[4], def: r[5], ex: r[6], fam: r[7], ccq: r[8] });
const V = window.VOCAB;
const have = new Set(V.ALL.map(w => w.w.toLowerCase()));
const u5words = U5.map(toObj);
V.units.push({ id: 'u5', emoji: '💪', title: 'Unit 5 · Health and fitness', note: 'Exercise, healthy food, phrasal verbs and well-being: the words from both books.', words: u5words });
u5words.forEach(w => { if (!have.has(w.w.toLowerCase())) V.ALL.push({ ...w, unit: 'u5' }); });

// Unit 5 collocations, phrasal verbs and word forms for the word games
const PARTNERS5 = [
  ['heart ___', 'disease', ['disease', 'illness', 'sickness', 'pain']], ['life ___', 'expectancy', ['expectancy', 'expectation', 'length', 'time']],
  ['balanced ___', 'diet', ['diet', 'food', 'eating', 'meal']], ['junk ___', 'food', ['food', 'meal', 'diet', 'snack']],
  ['healthy ___', 'lifestyle', ['lifestyle', 'living', 'life style', 'habitual']], ['regular ___', 'exercise', ['exercise', 'sport', 'training', 'gym']],
  ['physical ___', 'activity', ['activity', 'active', 'action', 'acting']], ['advertising ___', 'campaign', ['campaign', 'programme', 'lesson', 'class']],
  ['educational ___', 'programme', ['programme', 'campaign', 'lifestyle', 'disease']], ['serious ___', 'illness', ['illness', 'health', 'diet', 'shape']],
  ['count ___', 'calories', ['calories', 'portions', 'diets', 'stress']], ['stay in ___', 'shape', ['shape', 'form', 'fit', 'health']]
];
const PHRASAL = [
  ['If you want to lose weight, you should cut ___ on fatty foods.', 'down', ['down', 'up', 'off', 'out']],
  ['Last winter, I came ___ with four colds.', 'down', ['down', 'up', 'over', 'in']],
  ['I want to try something new. Maybe I\'ll take ___ tennis.', 'up', ['up', 'down', 'in', 'over']],
  ['Tim is going to try ___ for the football team.', 'out', ['out', 'up', 'in', 'on']],
  ['These children must give ___ crisps and sugary drinks.', 'up', ['up', 'out', 'down', 'over']],
  ['Why don\'t you sign ___ for a yoga class?', 'up', ['up', 'in', 'on', 'out']],
  ['Would you like to join ___ the game?', 'in', ['in', 'up', 'out', 'over']],
  ['It took me two weeks to get ___ the flu.', 'over', ['over', 'up', 'down', 'out']],
  ['I work ___ at the gym three mornings a week.', 'out', ['out', 'up', 'in', 'over']]
];
const FORMS5 = [
  ['The government should impose a ___ on junk food adverts. (ban)', 'ban'], ['We need to find a ___ to the problem of obesity. (solve)', 'solution'],
  ['With the ___ of teachers, more students will do sport. (encourage)', 'encouragement'], ['Students\' ___ in sport will increase. (participate)', 'participation'],
  ['The ___ of junk food in schools should stop. (sell)', 'sale'], ['We will see a ___ in the rate of obesity. (reduce)', 'reduction'],
  ['The first step is the ___ that this is a real problem. (recognize)', 'recognition'], ['Many ___ for sweets are aimed at children. (advertise)', 'advertisements'],
  ['We need to support the ___ of healthy eating. (promote)', 'promotion'], ['Gym membership should ___ less. (cost, verb)', 'cost']
];
V.recipes.push(
  { id: 'u5', emoji: '💪', title: 'Health words in context (Unit 5)', short: 'Collocations, phrasal verbs and word forms from Unit 5.', u: [5],
    make: () => [
      ...shuffle(PARTNERS5).slice(0, 4).map(([q, a, o]) => M(`Word partner: <b>${q}</b>`, [a, ...o.filter(x => x !== a)], `${q.replace('___', a)} is the natural collocation.`)),
      ...shuffle(PHRASAL).slice(0, 3).map(([q, a, o]) => M(q, [a, ...o.filter(x => x !== a)], `The phrasal verb needs "${a}".`)),
      ...shuffle(FORMS5).slice(0, 3).map(([q, a]) => G(q, a, `The noun / verb form is "${a}".`))
    ] },
  { id: 'phrasal', emoji: '🧗‍♀️', title: 'Phrasal verbs (Unit 5)', short: 'cut down on, give up, take up, sign up for, get over…', u: [5],
    make: () => shuffle(PHRASAL).map(([q, a, o]) => M(q, [a, ...o.filter(x => x !== a)], `The phrasal verb needs "${a}".`)) }
);
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
window.U5_PARTNERS = PARTNERS5; window.U5_PHRASAL = PHRASAL; window.U5_FORMS = FORMS5;

// ================= GRAMMAR · Unit 5 =================
const T = window.GRAMMAR.topics;
T.push(
{ id: 'phrasal', src: 'L&S Unit 5', u: [5], emoji: '🧗‍♀️', title: 'Phrasal verbs', short: 'cut down on, give up, take up, sign up for, join in, get over',
  why: 'Phrasal verbs are the grammar point of L&S Unit 5. You need them for the health presentation, and they come in vocabulary and grammar questions.',
  learn: [
    { k: 'rule', title: 'What is a phrasal verb?', html: `<div class="ex">verb + particle (up, out, down, in, over…) = a <b>new meaning</b></div>
      <table class="tbl"><tr><th>Phrasal verb</th><th>Meaning</th></tr>
      <tr><td><span class="k-blue">cut down on</span></td><td>eat or drink less of something</td></tr>
      <tr><td><span class="k-blue">give up</span></td><td>stop a habit completely</td></tr>
      <tr><td><span class="k-green">take up</span></td><td>start a new activity</td></tr>
      <tr><td><span class="k-green">sign up for</span></td><td>agree to join an organized activity</td></tr>
      <tr><td><span class="k-green">join in</span></td><td>do an activity with other people</td></tr>
      <tr><td><span class="k-orange">try out for</span></td><td>compete for a place on a team</td></tr>
      <tr><td><span class="k-pink">come down with</span></td><td>get an illness (not serious)</td></tr>
      <tr><td><span class="k-pink">get over</span></td><td>become healthy again after an illness</td></tr>
      <tr><td><span class="k-purple">work out</span></td><td>do exercise</td></tr></table>` },
    { k: 'anim', type: 'puzzle', tag: 'Verb + particle = new meaning', items: [['give', '+ up =', 'stop', PK], ['take', '+ up =', 'start', GR], ['get', '+ over =', 'recover', B]], note: 'The same verb can mean very different things: give up ≠ give, take up ≠ take.' },
    { k: 'way', tag: 'Where does the object go?', html: `<div class="ex">Two-word verbs: the object can go in the middle: Can you <b>write</b> the recipe <b>down</b>? / I <b>gave</b> it <b>up</b>.</div>
      <div class="ex">Three-word verbs: the object ALWAYS goes after: I'm <b>looking forward to</b> the class. / <b>cut down on</b> sugar (✗ cut sugar down on)</div>
      <div class="ex">With a pronoun (it, them) in two-word verbs, the pronoun goes in the middle: <b>give it up</b> (✗ give up it)</div>` },
    { k: 'mist', items: [['I want to give up eat sweets.', 'I want to give up <b>eating</b> sweets. (give up + -ing)'], ['I came down a cold.', 'I came down <b>with</b> a cold.'], ['Sign up the yoga class!', 'Sign up <b>for</b> the yoga class!'], ['I cut down sugar on.', 'I cut down on sugar.']] }
  ],
  q: [
    M('If you want to lose weight, you should ___ fatty foods.', ['cut down on', 'cut on down', 'come down with', 'sign up for'], 'cut down on = eat less of.'),
    M('I ___ the flu last week, so I stayed in bed.', ['came down with', 'got over', 'took up', 'joined in'], 'come down with = get an illness.'),
    M('It took me two weeks to ___ my cold.', ['get over', 'give up', 'take up', 'try out for'], 'get over = become healthy again.'),
    M('My doctor told me to ___ fizzy drinks completely.', ['give up', 'cut down on', 'join in', 'work out'], 'Completely = give up. (cut down on = less, not zero)'),
    M('Last year my sister ___ swimming. Now she swims twice a week.', ['took up', 'gave up', 'got over', 'came down with'], 'take up = start a new activity.'),
    M('Are you going to ___ the university basketball team?', ['try out for', 'get over', 'cut down on', 'give up'], 'try out for = compete for a place on a team.'),
    M('We are playing volleyball. Come and ___!', ['join in', 'give up', 'come down with', 'cut down'], 'join in = do it with other people.'),
    M('I go to the gym and ___ three times a week.', ['work out', 'work up', 'work in', 'work over'], 'work out = do exercise.'),
    M('Which sentence is correct?', ['I gave it up last year.', 'I gave up it last year.', 'I gave it last year up.', 'I up gave it last year.'], 'Pronoun in the middle: gave it up.'),
    M('Which sentence is correct?', ['She is trying to cut down on sugar.', 'She is trying to cut sugar down on.', 'She is trying to cut down sugar on.', 'She is trying to cut on down sugar.'], 'Three-word phrasal verb: object after.'),
    G('Why don\'t you sign ___ for a yoga class? (one word)', 'up', 'sign up for.'),
    G('I want to give up ___ (eat) junk food.', 'eating', 'give up + -ing.'),
    O(['She', 'has', 'signed up', 'for', 'a', 'taekwondo', 'class.'], 'sign up for + activity.'),
    O(['You', 'should', 'cut down on', 'sugary', 'drinks.'], 'should + cut down on + noun.'),
    M('"I ran into my old friend at the gym. I was surprised to see him." What does <i>run into</i> mean?', ['meet someone you know when you don\'t expect it', 'hit someone while running', 'run inside a building', 'go to the gym with a friend'], 'Use the context: surprised + see him.')
  ] },
{ id: 'vnform', src: 'R&W Unit 5', u: [5], emoji: '🔁', title: 'Verb and noun forms', short: 'reduce → reduction, encourage → encouragement, sell → sale',
  why: 'Word forms come in grammar, vocabulary and writing questions. Using the right form makes your essay academic.',
  learn: [
    { k: 'rule', title: 'Same family, different job', html: `<div class="ex">We need to <span class="k-blue">solve</span> the problem. (verb) → We need a <span class="k-pink">solution</span> to the problem. (noun)</div>
      <table class="tbl"><tr><th>Verb</th><th>Noun</th><th>Ending</th></tr>
      <tr><td>reduce</td><td>reduc<b>tion</b></td><td rowspan="3">-tion / -sion</td></tr><tr><td>promote</td><td>promo<b>tion</b></td></tr><tr><td>participate</td><td>participa<b>tion</b></td></tr>
      <tr><td>recognize</td><td>recogni<b>tion</b></td><td>-ition</td></tr>
      <tr><td>encourage</td><td>encourage<b>ment</b></td><td rowspan="2">-ment</td></tr><tr><td>advertise</td><td>advertise<b>ment</b></td></tr>
      <tr><td>sell</td><td><b>sale</b></td><td>new word!</td></tr>
      <tr><td>ban</td><td><b>ban</b></td><td rowspan="2">same form</td></tr><tr><td>cost</td><td><b>cost</b></td></tr></table>` },
    { k: 'way', tag: 'How to choose', html: `<div class="ex">After <b>a / an / the / his / their / adjective</b> → a NOUN: the <span class="k-pink">recognition</span>, a big <span class="k-pink">reduction</span></div>
      <div class="ex">After <b>to / can / should / will / we / they</b> → a VERB: we can <span class="k-blue">reduce</span>, to <span class="k-blue">promote</span></div>` },
    { k: 'mist', items: [['There was a reduce in obesity.', 'There was a <b>reduction</b> in obesity.'], ['The sell of junk food in schools…', 'The <b>sale</b> of junk food in schools…'], ['Governments should encouragement exercise.', 'Governments should <b>encourage</b> exercise.']] }
  ],
  q: [
    G('We will soon see a ___ in the rate of obesity. (reduce)', 'reduction', 'a + noun: reduction.'),
    G('The government should ___ healthy eating. (promotion)', 'promote', 'should + verb.'),
    G('Students\' ___ in sport will increase. (participate)', 'participation', 'possessive + noun.'),
    G('Schools should stop the ___ of junk food. (sell)', 'sale', 'the + noun: sale.'),
    G('With the ___ of parents, children eat more vegetables. (encourage)', 'encouragement', 'the + noun.'),
    G('The first step is the ___ that obesity is a real problem. (recognize)', 'recognition', 'the + noun.'),
    G('There are too many ___ for sweets on TV. (advertise)', 'advertisements', 'many + plural noun.', 'Plural!'),
    M('Which word has the SAME verb and noun form?', ['ban', 'sell', 'reduce', 'promote'], 'a ban (n) / to ban (v).'),
    M('We need to find a ___ to the problem.', ['solution', 'solve', 'solving', 'solved'], 'a + noun.'),
    M('Many countries have a ___ on smoking in public places.', ['ban', 'banning', 'banned', 'bans'], 'a + noun: a ban.'),
    M('Choose the VERB: Governments can ___ obesity with education.', ['reduce', 'reduction', 'reductive', 'reducing'], 'can + base verb.'),
    M('The biggest thing that stops people going to the gym is the ___.', ['cost', 'costing', 'costly', 'costs it'], 'the + noun: cost (same as the verb).'),
    TF('"Participation" is the noun form of "participate".', true, 'participate → participation.'),
    TF('"Encouragement" is a verb.', false, 'It is a noun. The verb is encourage.')
  ] },
{ id: 'opinion', src: 'R&W Unit 5', u: [5], emoji: '🗣️', title: 'Stating opinions', short: 'In my opinion, I believe, should, ought to, need to; others claim, argue, insist',
  why: 'A balanced opinion essay needs your opinion and other people\'s views. This grammar gives you the sentences.',
  learn: [
    { k: 'rule', title: 'Your opinion', html: `<div class="ex"><span class="k-blue">In my opinion,</span> both parties have a role to play.</div>
      <div class="ex"><span class="k-blue">I believe / I think (that)</span> governments should act.</div>
      <div class="ex">Modals: <span class="k-pink">should / shouldn't</span>, <span class="k-pink">ought to</span>, <span class="k-pink">need to / don't need to</span>, <span class="k-pink">must / don't have to</span> + base verb</div>
      <div class="ex">Individuals <span class="k-pink">ought to</span> make better food choices. (ought <b>to</b> + verb)</div>` },
    { k: 'rule', title: 'Other people\'s opinions (avoid repeating "think")', html: `<div class="ex">Many people <span class="k-green">argue / claim / believe / insist / suggest / feel</span> that individuals should be responsible for their own health.</div>
      <div class="ex">Some people <span class="k-green">insist</span> that… Others <span class="k-green">claim</span> that…</div>` },
    { k: 'mist', items: [['Individuals ought make better choices.', 'Individuals ought <b>to</b> make better choices.'], ['Governments should to tax sugar.', 'Governments should tax sugar.'], ['Many people argues that…', 'Many people <b>argue</b> that…'], ['In my opinion that schools…', 'In my opinion, schools…']] }
  ],
  q: [
    M('Individuals ___ make better food choices.', ['ought to', 'ought', 'should to', 'must to'], 'ought to + verb.'),
    M('Governments ___ allow junk food adverts during children\'s programmes.', ['shouldn\'t', 'shouldn\'t to', 'don\'t ought', 'mustn\'t to'], 'shouldn\'t + verb.'),
    M('___, both parties have a role to play.', ['In my opinion', 'In my opinion that', 'I am opinion', 'For my opinion'], 'In my opinion, + sentence.'),
    M('Many people ___ that individuals are responsible for their own weight.', ['argue', 'argues', 'arguing', 'to argue'], 'Many people (plural) argue.'),
    M('Some people ___ that governments should take the lead.', ['insist', 'insists', 'insisting', 'are insist'], 'plural subject + insist.'),
    M('Which word does NOT report an opinion?', ['reduce', 'claim', 'argue', 'suggest'], 'reduce is not a reporting verb.'),
    M('Students ___ take PE classes if they are already very active. (it is not necessary)', ['don\'t have to', 'mustn\'t', 'shouldn\'t to', 'ought not'], 'not necessary = don\'t have to.'),
    M('You ___ eat a balanced diet. (strong advice)', ['should', 'should to', 'ought', 'don\'t need'], 'should + verb.'),
    G('Children ___ to learn about nutrition in primary school. (ought)', 'ought', 'ought to + verb.'),
    G('I ___ that running is the best exercise. (believe, present)', 'believe', 'I believe that…'),
    O(['In my opinion,', 'universities', 'should', 'offer', 'free', 'gym', 'classes.'], 'In my opinion, + subject + should + verb.'),
    O(['Many', 'people', 'claim', 'that', 'junk food', 'should', 'be', 'taxed.'], 'reporting verb + that + clause.')
  ] },
{ id: 'purpose', src: 'R&W Unit 5', u: [5], emoji: '🎯', title: 'Stating a purpose', short: 'to / in order to + verb; so / so that + can / will',
  why: 'Purpose sentences make your arguments stronger: you say WHY. They come in grammar and writing questions.',
  learn: [
    { k: 'rule', title: 'Two patterns', html: `<div class="ex">Governments should promote healthy eating <span class="k-blue">to</span> increase life expectancy.</div>
      <div class="ex">Governments should promote healthy eating <span class="k-blue">in order to</span> increase life expectancy.</div>
      <div class="ex"><b>to / in order to</b> + base verb</div><hr>
      <div class="ex">Governments should build more leisure centres <span class="k-green">so</span> people can play more sport.</div>
      <div class="ex">Governments should build more leisure centres <span class="k-green">so that</span> people can play more sport.</div>
      <div class="ex"><b>so / so that</b> + subject + can / will / could</div>` },
    { k: 'anim', type: 'train', tag: 'Action → purpose', items: [['Tax junk food', 'action', B], ['in order to', 'link', PK], ['make it more expensive', 'purpose', GR]], note: 'Ask: WHY? The purpose answers the question why.' },
    { k: 'mist', items: [['…to making it expensive.', '…to <b>make</b> it expensive.'], ['…so that people see the calories.', '…so that people <b>can</b> see the calories.'], ['…for reduce obesity.', '…<b>to</b> reduce obesity.'], ['…in order people can play.', '…<b>so that</b> people can play. / in order <b>to</b> play']] }
  ],
  q: [
    M('Governments need to increase the tax on junk food ___ make it more expensive.', ['to', 'so that', 'for', 'so'], 'to + verb.'),
    M('Nutrition labels should be added ___ people can see if their food is healthy.', ['so that', 'to', 'in order to', 'for'], 'so that + subject + can.'),
    M('We need parks ___ promote physical activity.', ['in order to', 'so that', 'so', 'for'], 'in order to + verb.'),
    M('Restaurants should post calorie information ___ people will know what they are eating.', ['so', 'to', 'in order to', 'for to'], 'so + subject + will.'),
    M('Which sentence is correct?', ['I walk to work to save money.', 'I walk to work for save money.', 'I walk to work to saving money.', 'I walk to work so that save money.'], 'to + base verb.'),
    M('Which sentence is correct?', ['She cooks at home so that she can eat healthily.', 'She cooks at home so that eat healthily.', 'She cooks at home in order she can eat healthily.', 'She cooks at home to she can eat healthily.'], 'so that + subject + can.'),
    G('My family stopped eating fast food in order ___ lose weight.', 'to', 'in order to + verb.'),
    G('Universities should build gyms so ___ students can exercise. (one word)', 'that', 'so that + clause.'),
    G('I sleep eight hours in ___ to feel fresh in class. (one word)', 'order', 'in order to + verb.'),
    O(['Schools', 'should', 'teach', 'nutrition', 'so that', 'children', 'can', 'choose', 'healthy', 'food.'], 'so that + subject + can.'),
    O(['People', 'should', 'cut down on', 'sugar', 'in order to', 'reduce', 'the risk', 'of', 'diabetes.'], 'in order to + verb.'),
    TF('"to" and "in order to" are followed by a clause with can.', false, 'They are followed by a base verb. so / so that + clause.')
  ] },
{ id: 'contrast5', src: 'R&W Unit 5', u: [5], emoji: '⚖️', title: 'Linking contrasting sentences', short: 'but (comma), However, On the other hand, (full stop), Although … ,',
  why: 'A balanced opinion essay needs contrast. Punctuation with these linkers is tested often.',
  learn: [
    { k: 'rule', title: 'Linker + punctuation', html: `<table class="tbl"><tr><th>Linker</th><th>Punctuation</th><th>Example</th></tr>
      <tr><td><span class="k-blue">but</span></td><td>comma before</td><td>Fish is healthy<b>,</b> but it is expensive.</td></tr>
      <tr><td><span class="k-pink">However,</span></td><td>full stop before, comma after</td><td>Fish is healthy<b>. However,</b> it is expensive.</td></tr>
      <tr><td><span class="k-purple">On the other hand,</span></td><td>full stop before, comma after</td><td>Fish is healthy<b>. On the other hand,</b> it is expensive.</td></tr>
      <tr><td><span class="k-green">Although</span></td><td>before the FIRST idea, comma between</td><td><b>Although</b> fish is healthy<b>,</b> it is expensive.</td></tr></table>` },
    { k: 'way', tag: 'Rewrite with although', html: `<div class="ex">Running costs very little. <b>However,</b> skiing requires expensive equipment.</div><div class="ex">→ <span class="k-green">Although</span> running costs very little<b>,</b> skiing requires expensive equipment.</div><div class="ex">Never use <b>but</b> with <b>although</b> in the same sentence.</div>` },
    { k: 'mist', items: [['Although fish is healthy, but it is expensive.', 'Although fish is healthy, it is expensive.'], ['Fish is healthy, however it is expensive.', 'Fish is healthy. However, it is expensive.'], ['Fish is healthy but, it is expensive.', 'Fish is healthy, but it is expensive.']] }
  ],
  q: [
    M('Some people want a sugar tax. ___ others say it is unfair.', ['However,', 'Although', 'but', 'Because'], 'Full stop + However, + comma.'),
    M('___ junk food is cheap, it is bad for your health.', ['Although', 'However', 'But', 'On the other hand'], 'Although + first idea, + second idea.'),
    M('Exercise is good for you, ___ many people don\'t have time.', ['but', 'however', 'although,', 'on the other hand'], 'comma + but.'),
    M('Which sentence is correct?', ['Although meat is healthy, it is expensive.', 'Although meat is healthy, but it is expensive.', 'Although, meat is healthy it is expensive.', 'Meat is healthy, although, it is expensive.'], 'Although … , … (no but).'),
    M('Which sentence is correct?', ['Running is cheap. On the other hand, skiing is expensive.', 'Running is cheap, on the other hand skiing is expensive.', 'Running is cheap on the other hand, skiing is expensive.', 'Running is cheap. On the other hand skiing, is expensive.'], 'Full stop + On the other hand + comma.'),
    M('What punctuation comes BEFORE "however" between two ideas?', ['a full stop', 'a comma', 'nothing', 'a question mark'], 'Start a new sentence with However.'),
    G('Some people think governments are responsible. ___ the other hand, others blame individuals.', 'On', 'On the other hand.'),
    G('___ advertising is exciting for children, it can be harmful. (one word)', 'Although', 'Although + first idea.'),
    O(['Although', 'gyms', 'are', 'expensive,', 'running', 'is', 'free.'], 'Although + idea 1, + idea 2.'),
    O(['Sport', 'is', 'fun,', 'but', 'it', 'takes', 'time.'], 'comma + but.'),
    TF('You can use "although" and "but" in the same sentence.', false, 'Use only one of them.'),
    TF('"However" usually starts a new sentence and is followed by a comma.', true, 'However, …')
  ] }
);

// ================= READING · Unit 5 =================
const R = window.READING;
R.lessons.push(
  { id: 'infer', emoji: '🔮', title: 'Making inferences', src: 'R&W Unit 5', u: [5], short: 'Use clues in the text and your knowledge to find what is not said directly',
    blocks: [
      { k: 'rule', title: 'What is an inference?', html: '<div class="ex">An <b>inference</b> is something the text does not say directly, but which is <b>probably true</b> from the clues.</div><div class="ex">Text: <i>Running burns more calories per minute than swimming.</i><br>Q: Which sport is better for busy people? → <b>Running</b> (busy people have little time, and running gets you fit faster).</div>' },
      { k: 'way', tag: 'Three steps', html: '<div class="ex">1. Find the <span class="mark-key">key words</span> in the question.</div><div class="ex">2. Find the clues in the text (they are not the same words!).</div><div class="ex">3. Ask: what MUST be true if these clues are true? Choose the answer that the text supports, not the one that you like.</div>' },
      { k: 'html', html: '<div class="text"><p><span class="pn">✦</span>Team sports, such as football or basketball, can be cheap because all the players share the cost of the field. Joining a sports league is usually an inexpensive way of getting exercise and can be very social, too.</p></div>' },
      { k: 'way', tag: 'Example', html: '<div class="ex">Q: How do team sports help self-esteem? The text does not say. Clues: <span class="mark-key">social</span>, <span class="mark-key">players share</span> → you belong to a group and make friends, so you feel good about yourself.</div>' }
    ],
    q: [
      M('Text: "Many of us spend seven hours or more just sitting in a chair each day." What can you infer?', ['Many people have jobs that are not physical.', 'Chairs are bad for your health.', 'People sleep seven hours a day.', 'Everybody works in an office.'], 'Sitting all day = desk jobs (not stated directly).'),
      M('Text: "If you take the bus, try getting off one stop early and walking." What does the writer think?', ['Small changes in daily life can help you keep fit.', 'Buses are dangerous.', 'Walking is better than running.', 'People should not take the bus.'], 'The advice shows small daily changes count.'),
      M('Text: "Local leisure centres offer badminton at low rates at off-peak times." Who is this advice for?', ['People who want to save money', 'Professional players', 'People who hate sport', 'Children only'], 'low rates = cheap → saving money.'),
      M('Text: "Supporters of this law think restaurant chains should also list calorie counts." What can you infer?', ['Some restaurants do not show calories now.', 'All restaurants show calories.', 'Calories are not important.', 'The law is already in every country.'], '"also" and "should" show that they do not do it now.'),
      M('Text: "Such campaigns would be similar to the anti-smoking campaigns that have helped reduce the number of smokers." The writer thinks that…', ['health campaigns can change behaviour', 'smoking is not a problem now', 'campaigns are too expensive', 'nobody smokes any more'], 'The anti-smoking campaigns worked, so food campaigns can work.'),
      M('Text: "Gardening or doing housework are great ways to keep fit, and you get a tidy house, too!" The tone of the writer is…', ['positive and encouraging', 'angry', 'worried', 'sad'], 'The exclamation mark and "great ways" show a positive tone.')
    ] },
  { id: 'visuals', emoji: '🖼️', title: 'Predicting content using visuals', src: 'R&W Units 2, 3 and 5', u: [2, 3, 5], short: 'Look at photos, captions and titles BEFORE you read (mid-term Reading 1)',
    blocks: [
      { k: 'rule', title: 'Why look first?', html: '<div class="ex">Photos, captions, titles and headings tell you the <b>topic</b> and the <b>focus</b> of a text. Your brain gets ready, so you read faster.</div><div class="ex">In the mid-term test: <b>"Look at the photos. Write T (true) or F (false): the article WILL or WILL NOT mention…"</b></div>' },
      { k: 'way', tag: 'How to answer', html: '<div class="ex">1. Read the title and every caption.</div><div class="ex">2. Name what you see in each photo: a park in a big city? a forest? a small town?</div><div class="ex">3. For each statement ask: is this in a photo, a caption or the title? Yes → T. It is about something different (e.g. small towns when the photos show a big city) → F.</div><div class="ex">4. Watch for <b>focus words</b>: "will <b>focus</b> on" is strong. The whole text must be about it.</div>' },
      { k: 'html', html: '<div class="visual-set"><figure class="vis v-roof"><div class="vis-art">🏙️🌿🌻</div><figcaption>A garden on the roof of an office building in Riyadh</figcaption></figure><figure class="vis v-bee"><div class="vis-art">🐝🌼🍯</div><figcaption>Bees help the plants in city gardens</figcaption></figure></div><p class="hint">Title: <b>Gardens in the Sky</b></p>' }
    ],
    q: [
      TF('The article will talk about gardens in cities.', true, 'Title + both captions show city gardens.'),
      TF('The article will focus on farms in the countryside.', false, 'The photos show a city roof, not the countryside.'),
      TF('The article will mention insects that help plants.', true, 'Caption 2: bees help the plants.'),
      TF('The article will discuss the history of the Riyadh Metro.', false, 'Nothing in the title or photos is about the metro.'),
      TF('The article will talk about using the tops of buildings.', true, '"on the roof of an office building".')
    ] },
  { id: 'mainorder', emoji: '🔢', title: 'Main ideas in academic texts', src: 'R&W Unit 1', u: [1], short: 'Number the main ideas in the order they appear (mid-term Reading 2)',
    blocks: [
      { k: 'rule', title: 'One paragraph, one main idea', html: '<div class="ex">Academic texts usually have <b>one main idea in each paragraph</b>. It is often in the first sentence (the topic sentence).</div><div class="ex">Some paragraphs have two steps: e.g. "find the animals", then "catch them". The test can ask about both.</div>' },
      { k: 'way', tag: 'How to answer an ordering question', html: '<div class="ex">1. Read the list of main ideas (a–g) first. Underline one key word in each.</div><div class="ex">2. Read paragraph 1. Which idea matches? Write 1.</div><div class="ex">3. Continue. The ideas follow the order of the text.</div><div class="ex">4. The last paragraph often has the writer\'s <b>opinion</b> or <b>conclusion</b> (e.g. "This work is valuable").</div>' }
    ],
    q: [
      S('Put the main ideas in the order you would find them in an article called "Saving the Sea Turtles of the Red Sea".', ['Sea turtles face many dangers.', 'Volunteers find the nests on the beach.', 'The eggs are moved to a safe place.', 'The baby turtles are released into the sea.', 'The project has saved thousands of turtles.'], 'Problem → steps in time order → result / opinion.'),
      M('Which main idea is MOST likely in the LAST paragraph of an academic article?', ['The writer\'s conclusion or opinion about the work', 'The first step of the process', 'A definition of the topic', 'The title of the article'], 'Conclusions come at the end.')
    ] }
);
R.tests.push(
  { id: 'campus5', unit: 'Unit 5 · Health', u: [5], emoji: '🏃‍♀️', title: 'Small Steps to a Healthier Campus', words: 360, heading: 'Small Steps to a Healthier Campus', visual: '🏫 🚶‍♀️ 🥗',
    text: [
      'University life can be exciting, but it is not always healthy. Many students sit in lectures for six hours a day and then study late at night. They often eat fast food between classes because it is quick and cheap. As a result, some students gain weight in their first year and feel tired all the time.',
      'Experts say that adults need about 150 minutes of moderate physical activity a week. This sounds like a lot, but it is only about twenty minutes a day. Students do not have to join a gym to reach this target. Walking fast between buildings, taking the stairs instead of the lift, or stretching for five minutes in the library all count.',
      'Food is the second part of the story. A balanced diet includes fruit, vegetables, protein and carbohydrates. However, many campus cafés sell mostly sweets, crisps and fizzy drinks. Some universities have started to change this. At one university in Jeddah, the café now shows the number of calories next to every item, and fruit is cheaper than chocolate. In the first term, fruit sales doubled.',
      'Sleep is often forgotten. Students who sleep less than six hours a night find it harder to concentrate, and they tend to eat more sugary snacks to stay awake. A regular bedtime can improve both concentration and mood.',
      'Small steps are easier to keep than big changes. A student who decides to run ten kilometres every morning will probably give up after a week. A student who walks to class and swaps one fizzy drink for water every day may keep the habit for years. Universities can help by building safe walking paths, offering free sports clubs and selling healthy food at fair prices. In the end, a healthy campus is a better place to learn.'
    ],
    q: [
      M('What is the main idea of the article?', ['Small, regular changes can make students healthier.', 'Students should join a gym in their first year.', 'University cafés are too expensive.', 'Sleep is more important than food.'], 'The title and the last paragraph: small steps.'),
      M('According to paragraph 2, how much activity do adults need each week?', ['about 150 minutes', 'about 20 minutes', 'six hours', 'ten kilometres'], '150 minutes of moderate activity a week.'),
      TFD('Students must join a gym to reach the activity target.', false, '"Students do not have to join a gym."'),
      M('What happened at the university in Jeddah?', ['Fruit sales doubled in the first term.', 'The café stopped selling chocolate.', 'Students had to run every morning.', 'The café closed.'], 'Fruit sales doubled.'),
      M('Why do tired students eat more sugary snacks?', ['to stay awake', 'to lose weight', 'because they are cheap', 'to improve their mood'], '"they tend to eat more sugary snacks to stay awake".'),
      TFD('Most students in Jeddah exercise every day.', null, 'The text does not give this information.'),
      M('What can you INFER about the student who runs ten kilometres every morning?', ['The change is too big to keep.', 'He is the fittest student.', 'He sleeps more than others.', 'He eats only fruit.'], 'He "will probably give up after a week": too big a change.'),
      AG('Universities have a role in helping students stay healthy.', true, 'The writer lists what universities can do.'),
      AG('Taking the stairs is too small to make a difference.', false, 'The writer says small steps count.'),
      M('Who is the intended audience?', ['university students and staff', 'professional athletes', 'young children', 'doctors only'], 'Campus, lectures, library: written for university readers.'),
      M('What does "swaps" mean in paragraph 5?', ['changes one thing for another', 'drinks quickly', 'buys', 'refuses'], 'swap a fizzy drink for water = change it.')
    ] },
  { id: 'sugartax5', unit: 'Unit 5 · Health', u: [5], emoji: '🥤', title: 'Fighting Obesity: Whose Job Is It?', words: 380, heading: 'Fighting Obesity: Whose Job Is It?', visual: '⚖️ 🏛️ 🧍‍♀️',
    text: [
      'Obesity has become one of the biggest health challenges of our time. It increases the risk of heart disease, diabetes and other serious illnesses. Most people agree that something must be done. However, they disagree about who should do it: individuals or governments.',
      'On the one hand, many people insist that each person is responsible for their own health. They argue that we decide what we eat and how much we move. Nobody forces us to buy a large burger or to spend the evening on the sofa. Supporters of this view believe that people should learn to read food labels, control their portions and exercise regularly. They also claim that government rules can be annoying and expensive.',
      'On the other hand, others believe that governments must take the lead. They point out that junk food is often cheaper than healthy food and that advertising campaigns target children. A child cannot be responsible for the food that adults sell. Some governments have already acted. For example, in 2018 the United Kingdom introduced a tax on sugary drinks, and many companies reduced the sugar in their drinks in order to avoid it. Saudi Arabia introduced a similar tax in 2017.',
      'In my opinion, both sides are partly right. Individuals ought to make sensible choices, but those choices are easier when healthy food is cheap and information is clear. Governments should tax unhealthy products, support educational programmes in schools and build safe places to walk. At the same time, families need to cook more at home so that children learn good habits early. If we really want to see an end to the obesity crisis, everyone must play a part.'
    ],
    q: [
      M('What is the purpose of the first paragraph?', ['to introduce the problem and the two positions', 'to give the writer\'s final opinion', 'to describe the UK sugar tax', 'to explain how to read food labels'], 'Problem + two sides = introduction.'),
      M('According to paragraph 2, what do supporters of individual responsibility say about government rules?', ['They can be annoying and expensive.', 'They are always successful.', 'They help children most.', 'They are too cheap.'], '"government rules can be annoying and expensive".'),
      M('Why do some people say governments must act?', ['Junk food is cheap and adverts target children.', 'People exercise too much.', 'Food labels are too long.', 'Governments sell junk food.'], 'Paragraph 3.'),
      M('What happened after the UK introduced the sugar tax?', ['Many companies reduced the sugar in their drinks.', 'People stopped buying drinks.', 'The tax was cancelled.', 'Prices of fruit went down.'], 'Companies reduced the sugar to avoid the tax.'),
      TFD('Saudi Arabia introduced its drinks tax before the United Kingdom.', true, 'Saudi Arabia 2017, UK 2018.'),
      TFD('The writer thinks individuals have no responsibility.', false, '"Individuals ought to make sensible choices."'),
      AG('A child cannot be fully responsible for what food is sold.', true, 'Paragraph 3 says this directly.'),
      AG('Only governments can solve obesity.', false, '"both sides are partly right" and "everyone must play a part".'),
      M('What type of essay is this?', ['a balanced opinion essay', 'a cause and effect essay', 'a narrative story', 'a description of a graph'], 'Both sides + the writer\'s opinion.'),
      M('Find the purpose phrase in paragraph 4: "families need to cook more at home ___ children learn good habits early".', ['so that', 'in order to', 'although', 'however'], 'so that + clause.'),
      M('What does "target" mean in paragraph 3?', ['aim at a particular group', 'protect', 'ignore', 'sell cheaply'], 'Adverts are aimed at children.'),
      M('Which sentence is the thesis of the writer\'s own view?', ['Both sides are partly right.', 'Obesity increases the risk of heart disease.', 'Nobody forces us to buy a burger.', 'Saudi Arabia introduced a similar tax.'], 'Paragraph 4 opens with the writer\'s position.')
    ] }
);

// ================= LISTENING · Unit 5 =================
const L = window.LISTENING;
L.lessons.push(
  { id: 'attitude5', emoji: '🎭', title: 'Listening for attitude', src: 'L&S Unit 5', u: [5], short: 'Voice up = excited, voice down = upset, flat = no strong feeling; sarcasm and rhetorical questions',
    blocks: [
      { k: 'rule', title: 'Hear the feeling', html: '<table class="tbl"><tr><th>The voice…</th><th>The speaker feels…</th></tr><tr><td>goes UP ↗</td><td>excited, happy</td></tr><tr><td>goes DOWN ↘</td><td>upset, angry, disappointed</td></tr><tr><td>stays flat →</td><td>no strong feelings</td></tr></table>' },
      { k: 'way', tag: 'Two tricks speakers use', html: '<div class="ex"><b>Sarcasm:</b> a positive adjective with a negative meaning. "I lost your gym card." "Well, <b>that\'s just great!</b>" (She is NOT happy.)</div><div class="ex"><b>Rhetorical questions:</b> questions with no answer. "So now we should all eat fast food and stop exercising?" (He thinks the idea is silly.)</div>' }
    ],
    audio: [['A', 'I\'m really happy about this new research! It shows that walking every day helps your memory.'], ['B', 'Oh, that\'s just great. They closed the gym on our campus. Now where are we supposed to exercise?'], ['A', 'So now we should all eat fast food and stop exercising? I don\'t think so.'], ['B', 'The class starts at nine. It finishes at ten.']], voices: { A: 'f', B: 'm' },
    q: [
      M('Speaker 1: "I\'m really happy about this new research!" How does she feel?', ['excited', 'upset', 'no strong feelings'], 'Positive words + voice up.', { keep: true }),
      M('Speaker 2: "Oh, that\'s just great. They closed the gym." How does he feel?', ['upset (sarcastic)', 'excited', 'no strong feelings'], 'Great + bad news = sarcasm.', { keep: true }),
      M('Speaker 3: "So now we should all eat fast food and stop exercising?" What is her attitude to the idea?', ['negative: she thinks it is silly', 'positive: she agrees', 'she does not know'], 'Rhetorical question = negative attitude here.', { keep: true }),
      M('Speaker 4: "The class starts at nine. It finishes at ten." How does he feel?', ['no strong feelings', 'excited', 'upset'], 'Facts, flat voice.', { keep: true })
    ] },
  { id: 'common5', emoji: '🌍', title: 'References to common knowledge', src: 'L&S Unit 5', u: [5], short: 'It\'s common knowledge that… Everybody knows that… There\'s no doubt that…',
    blocks: [
      { k: 'rule', title: 'Phrases', html: '<div class="ex">It\'s common knowledge that… · Everybody knows that… · There is no doubt that… · There is no question that… · Most people think that… · As we all know,…</div><div class="ex">Speakers use them to make an argument sound <b>stronger</b> and to persuade you.</div>' },
      { k: 'way', tag: 'Be a careful listener', html: '<div class="ex">Sometimes the idea after the phrase is <b>not completely true</b>! "Everybody knows that coffee is bad for you" is not proved (Unit 5 video: recent research shows coffee can protect us).</div><div class="ex">In a test, the phrase tells you the speaker <b>agrees strongly</b> with the idea.</div>' }
    ],
    audio: [['A', 'Everybody knows that exercise makes us happier. And there is no doubt that bad habits, like smoking, increase the chances of getting a serious illness. Most people think that if they eat healthy food, they will have a long life. But that is not the whole story, because genes are important, too.']], voices: { A: 'f' },
    q: [
      M('Which phrase shows common knowledge?', ['There is no doubt that…', 'In my opinion…', 'For example…', 'First of all…'], 'There is no doubt that = common knowledge.'),
      M('Why do speakers use these phrases?', ['to make their argument stronger and persuade the listener', 'to ask a question', 'to change the topic', 'to give a number'], 'Persuasion.'),
      M('"Most people think that healthy food means a long life. But that is not the whole story." What does the speaker think?', ['Healthy food is not the only thing that matters.', 'Healthy food is not important.', 'Everybody lives a long life.', 'Genes do not matter.'], '"not the whole story": there is more (genes).'),
      M('Which statement is a weak, careful idea (NOT common knowledge language)?', ['Some research suggests that coffee may protect the heart.', 'Everybody knows that coffee is good for you.', 'There is no question that coffee is healthy.', 'It\'s common knowledge that coffee helps.'], 'some / may / suggests = careful.')
    ] },
  { id: 'notes1', emoji: '📝', title: 'Taking notes', src: 'L&S Unit 1', u: [1], short: 'Key words only: numbers, names, places, and the reason after "because" (mid-term Listening 1)',
    blocks: [
      { k: 'rule', title: 'Notes are not sentences', html: '<div class="ex">Write <b>key words</b>: nouns, numbers, names. Skip small words (the, is, very).</div><div class="ex">Use symbols: = (means), → (leads to), + (and), ↑ (increase), ↓ (decrease), b/c (because), e.g. (for example).</div>' },
      { k: 'way', tag: 'In the mid-term', html: '<div class="ex">You complete notes with <b>one or two words</b> or a number. Read the notes BEFORE the recording and guess the type of word: a number? a place? an adjective?</div><div class="ex">Example: "In (2) ______, they eat 12 (3) ______" → (2) is a place (a country), (3) is a plural noun.</div>' }
    ],
    audio: [['A', 'Today I want to tell you about henna nights in Saudi Arabia. A henna night usually takes place two or three days before a wedding. The bride\'s female relatives and friends come together, and an artist draws beautiful patterns on the bride\'s hands and feet. The patterns can take up to four hours. Green and gold are popular colours for the decorations, and the guests often wear traditional dresses. People believe that the henna brings happiness and good luck to the new marriage.']], voices: { A: 'f' },
    q: [
      G('Henna night: two or three ___ before the wedding. (one word)', 'days', 'two or three days before.'),
      G('Patterns on the bride\'s hands and ___. (one word)', 'feet', 'hands and feet.'),
      G('Time for the patterns: up to ___ hours. (number)', ['four', '4'], 'up to four hours.'),
      G('Popular colours: green and ___. (one word)', 'gold', 'green and gold.'),
      G('Henna brings happiness and good ___. (one word)', 'luck', 'happiness and good luck.')
    ] },
  { id: 'explain2', emoji: '💡', title: 'Listening for explanations', src: 'L&S Unit 2', u: [2], short: 'This means… because… that\'s why… so… (mid-term Listening 1, part 2)',
    blocks: [
      { k: 'rule', title: 'Explanation signals', html: '<div class="ex">this means (that)… · in other words… · that is to say… · because… · the reason is… · that\'s why… · so… · it represents / it symbolizes…</div><div class="ex">Questions in the test: <b>Why…?</b> <b>What does X represent?</b> <b>Why does the speaker talk about Y?</b></div>' },
      { k: 'way', tag: 'Why does the speaker mention…?', html: '<div class="ex">When a speaker suddenly talks about another country, a person or a story, ask: is it to <b>compare</b>? to give an <b>example</b>? to <b>explain</b> where something comes from?</div>' }
    ],
    audio: [['A', 'In many homes in Saudi Arabia, guests are welcomed with Arabic coffee and dates. The coffee is served in small cups, and the host fills each cup only a little. This means the host can keep pouring and keep the guest company for longer. Guests shake the cup gently when they have had enough. That\'s why you will see visitors move their cup from side to side. In Turkey, coffee is also important, but it is made very differently: it is thick and sweet. I mention Turkey because many people think all Arabic and Turkish coffee is the same, and it is not.']], voices: { A: 'f' },
    q: [
      M('Why does the host fill each cup only a little?', ['so he can keep pouring and spend more time with the guest', 'because coffee is very expensive', 'because guests do not like coffee', 'because the cups are broken'], '"This means the host can keep pouring and keep the guest company."'),
      M('Why do guests shake the cup?', ['to show they have had enough', 'to make the coffee cool', 'to ask for dates', 'to say goodbye'], '"when they have had enough… That\'s why…"'),
      M('Why does the speaker talk about Turkey?', ['to show that two coffee traditions are different', 'to say Turkish coffee is better', 'to give the history of coffee', 'to describe her holiday'], '"many people think… they are the same, and it is not."')
    ] }
);
L.tests.push(
  { id: 'longlife5', unit: 'L&S Unit 5', u: [5], emoji: '🧓', title: 'Podcast: What helps people live longer?', kind: 'Podcast with four speakers', situation: 'You will hear a podcast. The host asks four listeners for their opinions about living a long life.',
    voices: { H: 'm', A: 'f', B: 'm', C: 'f', D: 'm' }, names: { H: 'Host', A: 'Speaker A', B: 'Speaker B', C: 'Speaker C', D: 'Speaker D' },
    script: [
      ['H', 'Welcome to Healthy Minds. Today\'s question: what is the secret of a long life? Is it healthy food and exercise, or something else? Let\'s hear from our listeners.'],
      ['A', 'Most people think that eating healthy food and exercising will give them a long life. But stress can make your life shorter, too. I think being happy is better than always being in the gym. If you enjoy your life and spend time with friends, you will live longer.'],
      ['B', 'Honestly, I think it\'s ridiculous to worry so much about healthy eating! My grandfather lived to ninety-eight, and he never ate vegetables. He certainly never went to a gym. Genes are more important than lifestyle. Exercise is good, but it shouldn\'t be the main focus of your life.'],
      ['C', 'I don\'t agree. You only know if you have good genes when you\'re old, so why take the risk? There is no doubt that bad health habits increase the chances of getting a serious illness. Unhealthy people catch colds and the flu more easily, too. I prefer a good diet and regular exercise.'],
      ['D', 'I worry about children. Many children are overweight because they eat too much junk food. Yes, some people live a long time despite their unhealthy habits, but they are lucky. I prefer to work out and take care of myself.'],
      ['H', 'Thank you all. So, genes or lifestyle? Send us your messages.']
    ],
    q: [
      M('What is the main question of the podcast?', ['What is the secret of a long life?', 'How do you lose weight quickly?', 'Which gym is the best?', 'Why do children eat junk food?'], 'The host asks it at the start.'),
      M('Speaker A thinks that ___ is better than always being in the gym.', ['being happy', 'eating vegetables', 'having good genes', 'sleeping more'], '"being happy is better than always being in the gym".'),
      M('What can make your life shorter, according to Speaker A?', ['stress', 'coffee', 'sport', 'friends'], '"stress can make your life shorter".'),
      G('Speaker B\'s grandfather lived to ___ . (number)', ['ninety-eight', '98', 'ninety eight'], 'He lived to ninety-eight.'),
      M('What is Speaker B\'s attitude to healthy eating?', ['negative: he thinks worrying about it is ridiculous', 'very positive', 'no strong feelings', 'he is worried about it'], '"It\'s ridiculous to worry so much…"'),
      M('Speaker B believes that ___ are more important than lifestyle.', ['genes', 'gyms', 'vegetables', 'doctors'], '"Genes are more important than lifestyle."'),
      M('Why does Speaker C say "why take the risk"?', ['because you only find out about your genes when you are old', 'because exercise is dangerous', 'because the flu is serious', 'because she is old'], 'You don\'t know your genes until you are old.'),
      M('Which phrase does Speaker C use to show common knowledge?', ['There is no doubt that…', 'I prefer…', 'Honestly…', 'I worry about…'], 'There is no doubt that = common knowledge.'),
      M('Why are many children overweight, according to Speaker D?', ['They eat too much junk food.', 'They have bad genes.', 'They sleep too much.', 'They play too many sports.'], 'because they eat too much junk food.'),
      M('Which TWO speakers prefer a healthy lifestyle?', ['C and D', 'A and B', 'B and C', 'A and D'], 'C: good diet and exercise. D: work out and take care of myself.', { keep: true })
    ] },
  { id: 'programmes5', unit: 'L&S Unit 5', u: [5], emoji: '🥋', title: 'Presentations: Three health programmes', kind: 'Three short presentations', situation: 'You will hear three students present an idea for a health programme.',
    voices: { A: 'f', B: 'm', C: 'f' }, names: { A: 'Presenter 1', B: 'Presenter 2', C: 'Presenter 3' },
    script: [
      ['A', 'Do you feel tired after long lectures? Do you find it hard to concentrate? Then it\'s time to take up Desert Walkers! Desert Walkers is a walking club that meets every Saturday at sunrise, before it gets hot. Walking reduces stress and improves concentration, and as we all know, fresh air is good for the brain. We walk five kilometres together, and there is breakfast at the end. Sign up at the student centre. It\'s free!'],
      ['B', 'Would you like to make new friends and get in shape at the same time? Join Campus Volleyball! Team sports are fantastic for your social life and your self-esteem. You don\'t need to be an experienced player. Anybody can join in. We play on Monday and Wednesday evenings in the sports hall, and the membership costs fifty riyals a term. Check out our page and try out for the university team in March!'],
      ['C', 'Are you eating too much junk food? Is cooking a mystery to you? Our programme, Healthy Kitchen, teaches you to cook simple, balanced meals in twenty minutes. Everybody knows that home-cooked food is healthier than fast food, and it is cheaper, too. Classes take place on Tuesday afternoons, and you take your meal home. Cut down on takeaways and discover a delicious new habit!']
    ],
    q: [
      M('Presentation 1 is about…', ['a walking club', 'a cooking class', 'a volleyball team', 'a yoga class'], 'Desert Walkers is a walking club.'),
      M('When does Desert Walkers meet?', ['every Saturday at sunrise', 'every Monday evening', 'Tuesday afternoons', 'every day at noon'], 'Saturday at sunrise.'),
      G('Desert Walkers walk ___ kilometres together. (number)', ['five', '5'], 'five kilometres.'),
      M('Which benefits of walking does Presenter 1 give?', ['It reduces stress and improves concentration.', 'It builds big muscles.', 'It helps you sleep in the day.', 'It is good for your social media.'], 'reduces stress, improves concentration.'),
      M('Why does Presenter 2 say team sports are good?', ['for your social life and self-esteem', 'because they are free', 'because they are quiet', 'for your intellectual skills'], 'social life + self-esteem.'),
      G('Campus Volleyball membership costs ___ riyals a term. (number)', ['fifty', '50'], 'fifty riyals a term.'),
      M('What do the three presentations all start with?', ['rhetorical questions', 'a price', 'a joke', 'a story about a grandfather'], 'Do you…? Would you…? Are you…? = rhetorical questions.'),
      M('Which sentence is an IMPERATIVE used to persuade?', ['Sign up at the student centre.', 'It\'s free.', 'We play on Monday.', 'Classes take place on Tuesday.'], 'Imperative = base verb at the start.'),
      M('Healthy Kitchen teaches you to cook meals in…', ['twenty minutes', 'two hours', 'five minutes', 'one day'], 'in twenty minutes.'),
      M('Which phrase in Presentation 3 refers to common knowledge?', ['Everybody knows that…', 'Our programme…', 'Classes take place…', 'Is cooking a mystery?'], 'Everybody knows that = common knowledge.')
    ] }
);

// ================= SPEAKING · Unit 5 =================
const SP = window.SPEAKING;
SP.lessons.push(
  { id: 'persuade5', emoji: '📣', title: 'Problem → solution → persuade', src: 'L&S Unit 5', u: [5], short: 'Rhetorical questions, the solution, background, details, imperatives and positive adjectives',
    blocks: [
      { k: 'html', html: `<div class="burger"><div style="background:${B}">1 · Rhetorical questions about the problem: Do you feel stressed? Are you tired?</div><div style="background:${GR}">2 · The solution: It's time to take up taekwondo!</div><div style="background:${OR}">3 · Background + benefits: As we all know, exercise improves your health.</div><div style="background:${PU}">4 · Details: place, time, cost</div><div style="background:${PK}">5 · Imperative: Sign up now!</div></div>` },
      { k: 'rule', title: 'Persuasive tools', html: '<div class="ex"><b>Imperatives:</b> Join us! Sign up now! Check out our website. Come along!</div><div class="ex"><b>Positive adjectives:</b> amazing, terrific, fascinating, exciting, fantastic, delicious, friendly</div><div class="ex"><b>Common knowledge:</b> As we all know… Everybody knows that… There is no doubt that…</div><div class="ex"><b>Phrasal verbs:</b> take up, sign up for, join in, cut down on</div>' },
      { k: 'way', tag: 'Make it more persuasive', html: '<div class="ex">✗ If you want, you can come to our shop and buy our product.</div><div class="ex">✓ <b>Come along and buy</b> our <b>amazing</b> new product!</div><div class="ex">✗ You should hurry and buy a ticket. ✓ <b>Hurry! Buy</b> your ticket <b>now</b>!</div>' }
    ] }
);
SP.tasks.push(
  { id: 'health5', unit: 'L&S Unit 5', u: [5], emoji: '🥋', title: 'Present a health programme', kind: 'Presentation', time: '2 minutes',
    prompt: 'Give a presentation to a group of students about an idea for a health product or programme. Use problem-solution organization, rhetorical questions, imperatives, positive adjectives and phrasal verbs.',
    plan: [['Rhetorical questions (problem)', 'Do you feel stressed before exams? Do you sit all day?', B], ['Solution', 'It\'s time to take up Campus Yoga!', GR], ['Background + benefits', 'As we all know, exercise reduces stress. Yoga also improves concentration.', OR], ['Details', 'Sundays and Wednesdays, 4 pm, sports hall, free for students', PU], ['Imperative + adjective', 'Sign up now for an amazing, relaxing class!', PK]],
    model: [['Do you feel stressed before exams? Do you sit at your desk all day?', 'topic'], ['If so, it\'s time to take up Campus Yoga!', 'support'], ['As we all know, exercise reduces stress, and yoga also has mental benefits: it improves your concentration and helps you sleep.', 'detail'], ['It is fantastic for your physical and emotional well-being, and anybody can join in.', 'support'], ['Classes take place on Sundays and Wednesdays at four o\'clock in the sports hall, and they are free for students.', 'counter'], ['So be kind to your body and your mind. Sign up now for an amazing, relaxing class!', 'conc']],
    phrases: ['Do you', 'it\'s time to', 'As we all know', 'take up', 'sign up', 'join in', 'amazing', 'fantastic'],
    keywords: ['stress', 'concentration', 'physical', 'mental', 'emotional', 'social', 'benefits', 'healthy', 'exercise', 'relax'],
    parts: [['Start with rhetorical questions', 'do you|are you|would you|have you'], ['Introduce the solution', 'it\'s time to|it is time to|our programme|join|take up|introducing'], ['Give benefits (common knowledge)', 'as we all know|everybody knows|there is no doubt|benefit|improve'], ['Give details: place, time, cost', 'monday|tuesday|wednesday|thursday|sunday|saturday|friday|o\'clock|pm|am|free|riyal|hall|centre|center'], ['Finish with an imperative', 'sign up|join us|come along|try it|check out|register']],
    minWords: 120 }
);

// ================= WRITING · Unit 5 kit: balanced opinion essay =================
const KITS = window.KITS;
KITS.push({ id: 'opinion', u: [5], emoji: '⚖️', title: 'Balanced opinion essay', unit: 'R&W Unit 5', color: '#C2185B', short: 'Introduction (thesis), body 1 (for), body 2 (against), conclusion (your opinion)',
  see: [
    { k: 'html', html: `<div class="essay-house"><div class="roof" style="background:${B}">Introductory paragraph<small>background information + thesis statement (the two positions)</small></div><div class="rooms"><div style="background:${GR}">Body paragraph 1<small>position 1 (FOR) + arguments + details</small></div><div style="background:${OR}">Body paragraph 2<small>position 2 (AGAINST) + arguments + details</small></div></div><div class="floor" style="background:${PK}">Concluding paragraph<small>summary of both sides + YOUR opinion + prediction or recommendation</small></div></div>` },
    { k: 'rule', title: 'Thesis statement for a balanced essay', html: '<div class="ex">While some people believe that…, others argue that… This essay will discuss both sides.</div><div class="ex">There are strong arguments both for and against…</div>' },
    { k: 'rule', title: 'Language for each part', html: '<div class="ex"><span class="k-green">Body 1:</span> On the one hand, many people argue that… One reason is… For example,…</div><div class="ex"><span class="k-orange">Body 2:</span> On the other hand, others claim that… Furthermore,… Although…, …</div><div class="ex"><span class="k-pink">Conclusion:</span> In conclusion, there are strong arguments on both sides. In my opinion,… Universities should… so that…</div>' },
    { k: 'way', tag: 'Support every argument', html: '<div class="ex">Each argument needs a detail: a <b>fact</b> (F), an <b>example</b> (E) or a <b>reason</b> (R). Exercise decreases stress <b>because</b>… For example, at my university…</div>' }
  ],
  build: [
    M('Where does the thesis statement go?', ['at the end of the introductory paragraph', 'at the start of body paragraph 2', 'in the conclusion only', 'in the title'], 'Background first, thesis last.'),
    M('Which is the best thesis statement for "Should universities require PE classes?"', ['While some people believe PE classes improve students\' health, others argue that they take time away from studying.', 'I love sport.', 'PE classes are classes.', 'In this essay I will talk about many things.'], 'It shows the two positions.'),
    M('What goes in the concluding paragraph of a balanced opinion essay?', ['a summary of both sides, your opinion and a recommendation or prediction', 'a new argument with three examples', 'only the title again', 'a list of numbers'], 'Summary + opinion + recommendation.'),
    M('Which sentence is a good topic sentence for body paragraph 2 (AGAINST)?', ['On the other hand, others claim that compulsory PE classes are not a good idea.', 'Exercise decreases stress.', 'For example, I play football.', 'In conclusion, PE is good.'], 'On the other hand + position 2.'),
    M('"Students who exercise sleep better, according to a study at Riyadh University." What kind of detail is this?', ['a fact', 'an example from my life', 'a question', 'a thesis'], 'A study = a fact.'),
    S('Put the introductory paragraph in order.', ['Many university students spend most of the day sitting in lectures and libraries.', 'As a result, some universities now ask every student to take physical education classes.', 'While some people believe that these classes improve students\' health, others argue that they take valuable time away from studying.'], 'Background → background → thesis.'),
    M('Which linker is correct? "PE classes reduce stress. ___, they take time from studying."', ['However', 'Although', 'Because', 'So that'], 'Full stop + However,.'),
    M('Which is a good recommendation for the conclusion?', ['Universities should offer PE classes but let students choose the times so that they can balance sport and study.', 'PE is about sport.', 'Many people like football.', 'This essay discussed PE.'], 'Recommendation with should + purpose.')
  ],
  task: { title: 'Should universities require students to take physical education classes?', prompt: 'Discuss both sides and give your opinion. Write a balanced opinion essay (250 to 300 words): an introductory paragraph, two body paragraphs and a concluding paragraph.',
    table: [['Introduction: background', '', B], ['Thesis: the two positions', '', B], ['Body 1: FOR + argument 1 + detail', '', GR], ['Body 1: argument 2 + detail', '', GR], ['Body 2: AGAINST + argument 1 + detail', '', OR], ['Body 2: argument 2 + detail', '', OR], ['Conclusion: both sides + my opinion', '', PK], ['Recommendation / prediction', '', PK]],
    frame: 'Introduction\nMany university students ___. As a result, ___. While some people believe that ___, others argue that ___.\n\nBody paragraph 1\nOn the one hand, many people argue that ___. One reason is that ___. For example, ___. In addition, ___.\n\nBody paragraph 2\nOn the other hand, others claim that ___. They point out that ___. Although ___, ___.\n\nConclusion\nIn conclusion, there are strong arguments on both sides. In my opinion, ___ because ___. Universities should ___ so that ___.',
    checks: [['250 words or more', 'WORDS>=250'], ['Four paragraphs: introduction, two body paragraphs, conclusion', 'PARAS>=4'], ['A thesis with two positions: While some… others…', '(while|although|some people|others)'], ['Body 1: On the one hand / Many people argue', '(on the one hand|many people|some people argue|supporters)'], ['Body 2: On the other hand / However', '(on the other hand|however|others claim|others argue)'], ['An opinion phrase or modal: In my opinion, I believe, should, ought to', '(in my opinion|i believe|i think|should|ought to)'], ['A purpose: to / in order to / so that', '(in order to|so that| to )'], ['A health collocation: regular exercise, healthy lifestyle, physical activity…', '(regular exercise|healthy lifestyle|physical activity|balanced diet|heart disease|life expectancy|serious illness)'], ['A conclusion: In conclusion / To sum up', '(in conclusion|to sum up|overall)']],
    model: [
      [['Many university students spend most of the day sitting in lectures, libraries and cafés.', 'topic'], ['As a result, some universities now require every student to take physical education classes.', 'support'], ['While some people believe that these classes improve students\' health, others argue that they take valuable time away from studying.', 'conc']],
      [['On the one hand, many people argue that PE classes are good for students.', 'topic'], ['One reason is that regular exercise reduces stress, which is very common before exams.', 'support'], ['For example, a study at a university in Riyadh found that students who exercised twice a week slept better and felt calmer.', 'detail'], ['In addition, team sports in PE classes help students make friends and improve their self-esteem.', 'support']],
      [['On the other hand, others claim that compulsory PE classes are not a good idea.', 'topic'], ['They point out that students already have a heavy timetable and need time to study.', 'support'], ['Furthermore, some students already have a healthy lifestyle and do physical activity outside university.', 'support'], ['Although exercise is important, these students do not need to be forced to do more.', 'counter']],
      [['In conclusion, there are strong arguments on both sides.', 'topic'], ['In my opinion, universities should offer PE classes, but students ought to choose the type of sport and the time.', 'conc'], ['Universities should also build safe walking paths and free gyms so that everyone can stay active.', 'support'], ['If they do this, students will be healthier and they will learn better.', 'detail']]
    ] } });

// ================= CHAT GAMES · Unit 5 messages =================
const I = (who, msg, q, o, why, fix) => ({ who, msg, q, o, a: 0, why, fix });
const C = window.CHATS;
C.grammar.items.push(
  I('Lama', 'I want to give up [[eat]] sweets before Ramadan 🍬', 'Fix it', ['eating', 'eat', 'to eat', 'ate'], 'give up + -ing.', 'I want to give up eating sweets before Ramadan.'),
  I('Noura', 'I go to the gym [[for lose]] weight 🏋️‍♀️', 'Fix it', ['to lose', 'for losing to', 'so that lose', 'in order lose'], 'Purpose: to + verb.', 'I go to the gym to lose weight.'),
  I('Reem', '[[Although]] the gym is expensive, [[but]] I love it 😅', 'Fix it', ['Although the gym is expensive, I love it.', 'Although the gym is expensive, but I love it.', 'The gym is expensive, although but I love it.', 'Although, the gym is expensive but I love it.'], 'Never although + but together.', 'Although the gym is expensive, I love it.'),
  I('Dana', 'We need a [[reduce]] in junk food at the café 🍟', 'Which form?', ['reduction', 'reduce', 'reducing', 'reduced'], 'a + noun: reduction.', 'We need a reduction in junk food at the café.')
);
C.vocab.items.push(
  I('Jood', 'I [[came up with]] the flu yesterday 🤒 no class for me', 'Correct phrasal verb?', ['came down with', 'came up with', 'came over', 'came in'], 'come down with = get an illness.', 'I came down with the flu yesterday.'),
  I('Lama', 'Eating fruit every day is part of a balanced [[food]] 🍎', 'Correct collocation?', ['diet', 'food', 'eating', 'menu'], 'balanced diet.', 'Eating fruit every day is part of a balanced diet.'),
  I('Reem', 'My grandmother has a long life [[expectation]] 👵', 'Correct collocation?', ['expectancy', 'expectation', 'expecting', 'expected'], 'life expectancy.', 'My grandmother has a long life expectancy.')
);
C.speaking.items.push(
  I('Dana', 'My presentation starts: "[[I will talk about yoga.]]" Boring? 😴', 'Make it persuasive', ['Do you feel stressed? It\'s time to take up yoga!', 'Yoga.', 'I will talk about yoga now.', 'Hello, my name is Dana.'], 'Start with rhetorical questions, then the solution.'),
  I('Jood', 'How do I end my health presentation?', 'Help Jood', ['With an imperative: Sign up now!', 'Thank you, bye.', 'With a new problem.', 'With a long number.'], 'End with a persuasive imperative.')
);
C.listening.items.push(
  I('Noura', 'The speaker said "Oh, that\'s just [[great]]" after she lost her card. Is she happy? 🤔', 'Answer Noura', ['No, it is sarcastic: she is upset.', 'Yes, she is very happy.', 'She has no feelings.', 'She is excited about the card.'], 'Positive word + bad news = sarcasm.')
);
C.writing.items.push(
  I('Lama', 'Where do I put my thesis statement? 📝', 'Answer Lama', ['At the end of the introduction', 'At the start of the conclusion', 'In the title', 'Nowhere'], 'Thesis = last sentence of the introduction.'),
  I('Reem', 'My balanced essay only gives reasons FOR PE classes 😬', 'Help Reem', ['Add a body paragraph with the arguments AGAINST', 'It is fine', 'Write a longer title', 'Add more examples for the same side'], 'Balanced = both sides.')
);
C.reading.items.push(
  I('Jood', 'The text says "many of us sit seven hours a day". Can I infer that many people have desk jobs? 🤔', 'Answer Jood', ['Yes, that is a good inference', 'No, inferences are not allowed', 'Only if the text says "desk job"', 'No, it means they sleep'], 'An inference uses clues: sitting all day → desk jobs.')
);
})();
// garden names for the WhatsApp groups
(function () {
  const C = window.CHATS, N = { grammar: ['🌺', 'Orchid Grammar Girls 🌺'], vocab: ['🍎', 'Orchard Word Girls 🍎'], reading: ['🌹', 'Rose Readers 🌹'], listening: ['🏮', 'Lavender Listeners 🏮'], writing: ['🌸', 'Blossom Writers 🌸'], speaking: ['🦋', 'Butterfly Speakers 🦋'] };
  Object.keys(N).forEach(k => { if (C[k]) { C[k].icon = N[k][0]; C[k].group = N[k][1]; } });
})();
// wording for the PSE 2B mid-term (the old items came from the PSE 2A tests)
(function () {
  const w = window.GRAMMAR.topics.find(t => t.id === 'watch'); if (w) { w.title = 'Your tricky 7 (from the PSE 2A tests)'; w.why = 'These are the grammar points the class found hardest in the PSE 2A tests. They are still very useful for the mid-term.'; }
  const p = window.VOCAB.recipes.find(r => r.id === 'partners'); if (p) p.short = 'Which word goes with which?';
  const v = window.VOCAB.recipes.find(r => r.id === 'watch'); if (v) { v.title = 'Your tricky 7 words (PSE 2A tests)'; v.short = 'The words the class found hardest in the PSE 2A tests.'; }
})();
