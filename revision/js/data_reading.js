// READING LIVING ROOM · reading moves + mock reading tests (original texts, exam question types)
(function () {
const M = (q, o, why) => ({ t: 'mcq', q, o, a: 0, why });
const TF = (q, a, why) => ({ t: 'tf', q, a, dns: true, why });
const AG = (q, agrees, why) => ({ t: 'mcq', q, o: ['The writer would agree.', 'The writer would disagree.'], a: agrees ? 0 : 1, keep: true, why });
const mk = s => `<span class="mark-key">${s}</span>`;

const lessons = [
  { id: 'main', emoji: '🎯', title: 'Main idea or detail?', src: 'R&W Unit 1', short: 'Read the first and last sentences to find the main idea fast',
    blocks: [
      { k: 'rule', title: 'The main idea', html: '<div class="ex">The <b>main idea</b> is what the WHOLE paragraph is about. It is usually in the <b>first sentence</b> (the topic sentence) and again in the <b>last sentence</b>.</div><div class="ex">A <b>detail</b> is one small fact: a number, a name, a place, an example.</div>' },
      { k: 'way', tag: 'Test the answer', html: '<div class="ex">Ask: does this answer cover <b>every sentence</b> in the paragraph? If it only covers one sentence, it is a detail, not the main idea.</div>' },
      { k: 'html', html: '<div class="text"><p><span class="pn">✦</span>Many cities are trying to reduce the number of cars in their centres. Some cities charge drivers money to enter busy areas. Others have built cycle lanes and improved their buses. In Paris, for example, some roads by the river are now only for walkers and cyclists.</p></div>' }
    ],
    q: [M('What is the main idea of the paragraph?', ['Cities are using different ways to reduce cars in their centres.', 'Paris has roads by the river.', 'Buses are better than cars.', 'Cycling is healthy.'], 'It covers every sentence. Paris is only one example (a detail).'),
        M('"In Paris, some roads by the river are now only for walkers and cyclists." This sentence is…', ['a detail (an example)', 'the main idea', 'the conclusion', 'the writer\'s opinion'], 'It starts with for example, so it is a detail.')] },
  { id: 'scan', emoji: '🔍', title: 'Scanning for details', src: 'R&W Unit 3', short: 'Key words, numbers, names, and paraphrase',
    blocks: [
      { k: 'rule', title: 'How to scan', html: '<div class="ex">1. Read the question and <b>underline the key word</b> (a name, a number, a place).</div><div class="ex">2. Move your eyes quickly over the text and stop when you see the key word.</div><div class="ex">3. Read the sentence before and after it carefully.</div>' },
      { k: 'way', tag: 'The exam trick: paraphrase', html: '<p>The question often uses <b>different words</b> with the same meaning:</p><table class="tbl"><tr><th>Question says</th><th>Text says</th></tr><tr><td>in danger</td><td>endangered / threatened / at risk</td></tr><tr><td>cheap</td><td>affordable / does not cost much</td></tr><tr><td>problem</td><td>issue / challenge</td></tr><tr><td>results</td><td>consequences / effects</td></tr><tr><td>try</td><td>attempt</td></tr></table>' },
      { k: 'html', html: `<div class="text"><p><span class="pn">✦</span>The new metro in our city has ${mk('six lines')} and ${mk('85 stations')}. Trains arrive every ${mk('four minutes')} at rush hour, and a single journey costs ${mk('four riyals')}. Students with a university card pay ${mk('half price')}.</p></div>` }
    ],
    q: [M('How often do trains come at rush hour?', ['every four minutes', 'every six minutes', 'every 85 minutes', 'every hour'], 'Scan for "rush hour" and read that sentence.'),
        M('How much does a single journey cost for a university student?', ['two riyals', 'four riyals', 'six riyals', 'it is free'], 'Students pay half of four riyals = two riyals. Sometimes you need to calculate.')] },
  { id: 'purpose', emoji: '🧭', title: 'Purpose and audience', src: 'Exam question type', short: 'Why was it written, and who for?',
    blocks: [
      { k: 'rule', title: 'Purpose (why?)', html: '<table class="tbl"><tr><th>Purpose</th><th>Clues</th></tr><tr><td>to inform / explain</td><td>facts, numbers, history, how something works</td></tr><tr><td>to persuade</td><td>should, must, you, I believe, the best</td></tr><tr><td>to compare and contrast</td><td>whereas, both, however, bigger than</td></tr><tr><td>to explain causes and effects</td><td>because of, leads to, as a result</td></tr><tr><td>to describe a problem and suggest solutions</td><td>one solution, the advantage, the drawback</td></tr></table>' },
      { k: 'way', tag: 'Audience (who for?)', html: '<div class="ex">Simple words and general facts → <b>general readers</b> (a magazine, a website, a newspaper).</div><div class="ex">"Our city", "residents", "the council" → <b>people who live in that city</b>.</div><div class="ex">Technical words, data, references → <b>experts or scientists</b>.</div><div class="ex">Very short sentences and pictures → <b>children</b>.</div>' }
    ],
    q: [M('A text gives the advantages and disadvantages of three ways to reduce traffic and ends with the writer\'s recommendation. Its purpose is…', ['to describe a problem and evaluate solutions', 'to tell a story', 'to give instructions', 'to describe a holiday'], 'Advantages, disadvantages and a recommendation = evaluate solutions.'),
        M('A text in a local newspaper says: "Residents of our city are tired of waiting in traffic." Who is the audience?', ['people who live in the city', 'scientists in another country', 'young children', 'car factory workers'], '"Residents of our city" in a local newspaper.')] },
  { id: 'tfdns', emoji: '✅', title: 'True, False or Does not say', src: 'Exam question type', short: 'Three answers, three different meanings',
    blocks: [
      { k: 'rule', title: 'The difference', html: '<div class="ex"><span class="k-green">TRUE</span>: the text says the same thing (maybe with different words).</div><div class="ex"><span class="k-red">FALSE</span>: the text says the <b>opposite</b>.</div><div class="ex"><span class="k-purple">DOES NOT SAY</span>: the text gives <b>no information</b> about it. Do not use your own knowledge!</div>' },
      { k: 'html', html: '<div class="text"><p><span class="pn">✦</span>Red squirrels are native to Britain, but their numbers have fallen sharply. Grey squirrels, which were introduced from North America, are bigger and carry a disease that is fatal to red squirrels.</p></div>' }
    ],
    q: [TF('Grey squirrels came from North America.', true, 'introduced from North America = came from North America.'),
        TF('Red squirrels are bigger than grey squirrels.', false, 'The text says grey squirrels are bigger: the opposite.'),
        TF('Red squirrels eat more nuts than grey squirrels.', 'dns', 'The text says nothing about nuts.')] },
  { id: 'opinion', emoji: '💬', title: 'Fact, opinion and "Would the writer agree?"', src: 'Exam question type', short: 'Find the writer\'s view in the last paragraph',
    blocks: [
      { k: 'rule', title: 'Opinion signals', html: '<div class="ex">In my opinion · In my view · I believe · should · must · unfortunately · fortunately · the best · the worst</div><div class="ex">A <b>fact</b> can be checked: "The metro has six lines." An <b>opinion</b> is what someone thinks: "The metro is the best way to travel."</div>' },
      { k: 'way', tag: 'How to answer "Would the writer agree?"', html: '<div class="ex">1. Find the paragraph with the writer\'s opinion (usually the <b>last</b> one).</div><div class="ex">2. Compare the statement with what the writer says. Same idea → <b>agree</b>. Opposite idea → <b>disagree</b>.</div><div class="ex">⚠️ Be careful with words like <b>always, never, only, completely, alone</b>. They often make a statement too strong.</div>' }
    ],
    q: [M('Which sentence is an OPINION?', ['Public transport is the best solution for our city.', 'The city has one bus line.', 'The metro has 85 stations.', 'Traffic is heavier at 8 a.m. than at 11 a.m.'], '"the best" shows what the writer thinks.'),
        AG('The writer says: "Neither solution alone will be enough." Statement: "One solution alone will solve the problem."', false, 'The statement says the opposite of the writer.')] },
  { id: 'words', emoji: '🧠', title: 'Unknown words and reference words', src: 'R&W Unit 2', short: 'Guess meaning from context. What do it, this and they refer to?',
    blocks: [
      { k: 'rule', title: 'Guess from context', html: '<div class="ex">Look at the words around it. Is it a noun, verb or adjective? Is there an example or an opposite near it?</div><div class="ex">"The bridge ' + mk('connects') + ' the two parts of the city, so people can cross easily." → connects = joins.</div>' },
      { k: 'way', tag: 'Reference words', html: '<div class="ex"><b>it / this / that</b> → a singular noun or an idea BEFORE it. <b>they / these / them</b> → a plural noun before it.</div><div class="ex">Trees absorb carbon dioxide. <b>This</b> helps to slow global warming. → <b>This</b> = trees absorbing carbon dioxide.</div>' }
    ],
    q: [M('"Grey squirrels carry a disease. It is fatal to red squirrels." What does "It" refer to?', ['the disease', 'the grey squirrel', 'the red squirrel', 'the forest'], 'It = the singular noun before it: the disease.'),
        M('"The road was so congested that it took us two hours to drive five kilometres." "congested" means…', ['full of traffic', 'empty', 'beautiful', 'new'], 'Two hours for five kilometres → the road was full of traffic.')] }
];

const tests = [
  { id: 'oryx', unit: 'Unit 1 · Animals', emoji: '🦌', title: 'Back from the Edge: the Arabian Oryx', words: 390, heading: 'Back from the Edge: the Arabian Oryx', visual: '🦌 🏜️ 🔭',
    text: [
      'The Arabian oryx is a beautiful white antelope with long, straight horns. It is native to the deserts of the Arabian Peninsula, and it is perfectly adapted to life there. Its white coat reflects the strong sunlight and keeps it cool. It can also survive for weeks without drinking, because it gets water from plants and from the morning dew. Some people believe that the oryx can even sense rain from far away and walk towards it.',
      'Sadly, these amazing adaptations could not protect the oryx from people. In the twentieth century, hunters began to use cars and modern guns, so it became very easy to chase and kill the animals. The number of oryx fell quickly. In 1972, the last wild Arabian oryx were killed, and the species became extinct in the wild. The only oryx left in the world lived in zoos and private collections.',
      'Fortunately, a group of scientists had already started a breeding programme in the 1960s. They took a small number of oryx to a zoo in the United States, where the animals were safe and could have young. Slowly, the herd grew. Other countries joined the programme, and in 1982 the first oryx were returned to the wild in Oman. Saudi Arabia started its own programme and released oryx into a protected reserve in 1990.',
      'Today, there are more than a thousand Arabian oryx living in the wild, and thousands more in zoos and reserves. In 2011, the oryx became the first animal that was once extinct in the wild to improve to "vulnerable" on the international list of threatened species. This means it is still at risk, but it is no longer in immediate danger.',
      'The story of the oryx shows that people can save a species if they cooperate. However, the work is not finished. Illegal hunting and the loss of habitat remain serious threats. In my opinion, governments should continue to protect the reserves, because one success is not enough to guarantee the future of this special animal.'
    ],
    q: [
      M('What is the main purpose of the text?', ['to explain how the Arabian oryx was saved and why it still needs protection', 'to persuade readers to visit a zoo in the United States', 'to compare the oryx with other antelopes', 'to teach readers how to hunt in the desert'], 'The text tells the story of the rescue and ends by saying protection must continue.'),
      M('Who is the text most probably written for?', ['general readers who are interested in nature', 'scientists who already study the oryx', 'young children who are learning to read', 'hunters who want to buy guns'], 'Simple language and general facts → general readers, for example in a magazine.'),
      M('What is paragraph 2 mainly about?', ['how hunting made the oryx extinct in the wild', 'how the oryx keeps cool', 'where the breeding programme started', 'the oryx in reserves today'], 'Every sentence in paragraph 2 is about hunting and extinction.'),
      M('How does the oryx get water when it does not drink?', ['from plants and the morning dew', 'from rivers in the desert', 'from people in zoos', 'only from rain'], 'Paragraph 1: it gets water from plants and from the morning dew.'),
      M('Where were the first oryx returned to the wild?', ['Oman', 'Saudi Arabia', 'the United States', 'Jordan'], 'Paragraph 3: in 1982 the first oryx were returned to the wild in Oman.'),
      TF('The oryx\'s white coat helps it to stay cool.', true, 'Paragraph 1: its white coat reflects the sunlight and keeps it cool.'),
      TF('Saudi Arabia released oryx into a reserve before Oman did.', false, 'Oman: 1982. Saudi Arabia: 1990. So Oman was first.'),
      TF('The breeding programme in the United States cost millions of dollars.', 'dns', 'The text says nothing about the cost.'),
      M('In paragraph 4, "immediate danger" means danger that is…', ['happening now', 'very small', 'in the past', 'far away'], 'immediate = now. The oryx is still at risk, but not in danger right now.'),
      AG('"The oryx is now completely safe, so we can stop protecting it."', false, 'Paragraph 5: "the work is not finished" and governments should continue to protect the reserves.')
    ] },
  { id: 'mangrove', unit: 'Unit 2 · Environment', emoji: '🌿', title: 'Green Walls of the Sea: Mangrove Forests', words: 340, heading: 'Green Walls of the Sea: Mangrove Forests', visual: '🌊 🌳 🦀 🐦',
    text: [
      'Along parts of the Red Sea and Arabian Gulf coasts of Saudi Arabia, you can find small forests that grow in salty water. These are mangroves. Mangrove trees have special roots that stand above the water and help them breathe. They can live in conditions where most other trees would die, such as hot air, salty water and soft mud.',
      'Mangroves are extremely important for the environment. First, they provide a habitat for many species. Young fish, crabs and shrimps hide between the roots, and many birds build their nests in the branches. Second, mangroves protect the coast. Their thick roots slow down waves, so storms cause less damage to beaches and buildings.',
      'Mangroves also help in the fight against climate change. Like all trees, they absorb carbon dioxide from the atmosphere. However, scientists have found that mangrove forests store much more carbon in their mud than many forests on land. If mangroves are destroyed, this carbon goes back into the air as a greenhouse gas.',
      'Unfortunately, mangroves around the world are under threat. The main cause is construction. Companies cut down mangroves to build hotels, ports and fish farms on the coast. Pollution from plastic and oil is another problem, and rising sea levels may also affect the trees in the future.',
      'The good news is that some countries are working to protect them. In Saudi Arabia, millions of new mangrove trees have been planted along the coasts as part of national green projects. Planting mangroves is also quite cheap compared with building walls to protect the coast. Experts say that if we protect the mangroves we already have and plant new ones, coastal areas will be healthier for both people and wildlife.'
    ],
    q: [
      M('What is the main purpose of the text?', ['to inform readers about mangroves, why they matter and how they are threatened', 'to sell holidays on the Red Sea', 'to compare mangroves with deserts', 'to explain how to build a fish farm'], 'The text explains what mangroves are, their benefits, the threats and the solutions.'),
      M('What is paragraph 3 mainly about?', ['how mangroves help to reduce climate change', 'how mangroves breathe', 'where mangroves grow', 'which animals live in mangroves'], 'Topic sentence: "Mangroves also help in the fight against climate change."'),
      M('What is the MAIN cause of the threat to mangroves?', ['construction on the coast', 'plastic pollution', 'rising sea levels', 'hot air'], 'Paragraph 4: "The main cause is construction."'),
      M('How do mangroves protect the coast?', ['Their roots slow down waves.', 'They stop pollution.', 'They absorb salt from the sea.', 'They grow very tall.'], 'Paragraph 2: their thick roots slow down waves.'),
      TF('Mangroves can grow in salty water.', true, 'Paragraph 1: forests that grow in salty water.'),
      TF('Mangroves store less carbon than forests on land.', false, 'Paragraph 3: they store much MORE carbon than many forests on land.'),
      TF('Saudi Arabia plans to stop all building on the coast.', 'dns', 'The text talks about planting, not about stopping all building.'),
      M('"under threat" (paragraph 4) means…', ['in danger', 'under the water', 'growing fast', 'protected by law'], 'The paragraph lists dangers: construction and pollution.'),
      M('In paragraph 3, "this carbon" refers to…', ['the carbon stored in the mud of mangrove forests', 'carbon from cars', 'carbon in the sea water', 'carbon from factories'], 'The sentence before talks about carbon stored in their mud.'),
      AG('"Planting new mangroves is a waste of money."', false, 'The writer says planting is quite cheap and makes coastal areas healthier.')
    ] },
  { id: 'sandhaven', unit: 'Unit 3 · Transport', emoji: '🚦', title: 'Sandhaven\'s Traffic Problem: Three Possible Solutions', words: 380, heading: 'Sandhaven\'s Traffic Problem: Three Possible Solutions', visual: '🚗🚗🚗 🚇 🅿️ ⏰',
    text: [
      'Sandhaven is a fast-growing city of two million people. Twenty years ago, the roads were quiet. Today, commuters often spend more than an hour in their cars every morning. Traffic congestion is now the biggest complaint of residents, and it has serious consequences: it wastes time and fuel, it pollutes the air, and it can stop ambulances from reaching emergencies quickly.',
      'There are three main causes of the problem. Firstly, most families now own two or three cars. Secondly, public transport is limited; there is only one bus line, and the buses are old and slow. Finally, many people live on the outskirts and work in the centre, so everyone drives in the same direction at the same time.',
      'The city council has considered three solutions. The first is to build a metro line from the outskirts to the centre. A metro is fast and can carry thousands of passengers an hour. However, it would require a huge amount of money, and construction would take at least six years.',
      'The second solution is park-and-ride. Drivers would park their cars in large car parks at the edge of the city and then take a free bus to the centre. This is much cheaper than a metro and could start within a year. The disadvantage is that many people do not like changing from one vehicle to another.',
      'The third solution is flexible working hours. If companies allowed some employees to start work at 7 a.m. and others at 10 a.m., the roads would not be full at the same time. This solution costs almost nothing, but the council cannot force private companies to change their hours.',
      'In my view, the council should start with park-and-ride because it is practical and quick. At the same time, it should plan the metro as a long-term solution. Neither solution alone will be enough, but together they could make Sandhaven\'s roads much less congested.'
    ],
    q: [
      M('What is the purpose of the text?', ['to describe a problem and evaluate possible solutions', 'to advertise new cars', 'to tell the history of Sandhaven', 'to explain how a metro works'], 'Problem → causes → three solutions with advantages and disadvantages → recommendation.'),
      M('Who is the text most probably written for?', ['people who live in Sandhaven', 'tourists planning a holiday', 'engineers building metros in other countries', 'children at primary school'], 'It talks about residents\' complaints and what the city council should do.'),
      M('What is paragraph 2 mainly about?', ['the causes of the traffic problem', 'the consequences of traffic', 'the first solution', 'the writer\'s opinion'], 'Topic sentence: "There are three main causes of the problem."'),
      M('How many bus lines does Sandhaven have?', ['one', 'two', 'three', 'none'], 'Paragraph 2: there is only one bus line.'),
      M('Which solution is the most expensive?', ['the metro line', 'park-and-ride', 'flexible working hours', 'a new bus line'], 'The metro would require a huge amount of money.'),
      M('What is the disadvantage of park-and-ride?', ['People do not like changing from one vehicle to another.', 'It is very expensive.', 'It takes six years to build.', 'Companies must change their hours.'], 'Paragraph 4, last sentence.'),
      TF('Twenty years ago, Sandhaven had serious traffic problems.', false, 'Paragraph 1: twenty years ago the roads were quiet.'),
      TF('The council can make private companies change their working hours.', false, 'Paragraph 5: the council cannot force private companies.'),
      TF('A foreign company would build the metro.', 'dns', 'The text does not say who would build it.'),
      M('"outskirts" (paragraph 2) are…', ['the parts of a city far from the centre', 'the busiest streets', 'the city centre', 'car parks'], 'People live on the outskirts and work in the centre: the opposite of the centre.'),
      AG('"A metro line alone will solve the traffic problem."', false, 'The writer says neither solution alone will be enough.'),
      AG('"Park-and-ride is a practical solution."', true, 'The writer says the council should start with park-and-ride because it is practical and quick.')
    ] },
  { id: 'work', unit: 'Unit 1 · Animals', emoji: '🐪', title: 'Should Animals Still Work?', words: 340, heading: 'Should Animals Still Work?', visual: '🐪 🐴 🦮 🐕‍🦺',
    text: [
      'For thousands of years, people have depended on animals for work. Camels carried goods across the Arabian desert, horses pulled carts, and dogs guarded sheep. Even today, millions of animals work around the world. But in modern times, when we have cars, tractors and machines, is it still right to make animals work?',
      'Some people argue that using animals for work is always cruel. They point out that many working animals suffer. They carry loads that are too heavy, they work in extreme heat without enough water, and some owners abuse them when they are tired. These people believe that animals should be free, and that machines should do the work instead.',
      'However, the situation is not that simple. In many poor rural areas, a donkey or a camel is the only way a family can earn money. Machines are expensive, they need fuel, and they cannot travel on narrow mountain paths. For these families, a healthy working animal is a member of the team. Furthermore, some animals do jobs that no machine can do. Guide dogs, for example, help blind people move around safely, and rescue dogs can find people who are trapped after an earthquake.',
      'In my opinion, the real issue is not whether animals work, but how they are treated. Working animals should have enough food, water and rest, and the loads they carry should not be too heavy. Governments should introduce clear welfare laws, and charities can teach owners how to look after their animals. If we do this, people and animals can continue to work together in a way that is fair to both.'
    ],
    q: [
      M('What is the purpose of the text?', ['to discuss both sides of an issue and give the writer\'s opinion', 'to explain how to train a guide dog', 'to describe the history of camels', 'to sell tractors'], 'Paragraph 2 gives one side, paragraph 3 the other side, and paragraph 4 the writer\'s opinion.'),
      M('Who is the text most probably written for?', ['general readers, for example on a newspaper opinion page', 'animal doctors only', 'farmers who want to buy camels', 'primary school children'], 'An opinion article for general readers.'),
      M('What is paragraph 2 mainly about?', ['the argument that animal work is cruel', 'the history of working animals', 'the benefits of working animals for poor families', 'welfare laws'], 'Topic sentence: some people argue that using animals for work is always cruel.'),
      M('According to paragraph 3, why do some families still use animals?', ['Machines are expensive and cannot travel on narrow paths.', 'Animals are faster than cars.', 'Machines are illegal in rural areas.', 'Animals do not need food.'], 'Paragraph 3: machines are expensive, need fuel and cannot use narrow mountain paths.'),
      M('Which example does the writer give of a job that no machine can do?', ['guiding blind people', 'pulling carts', 'carrying goods', 'guarding sheep'], 'Guide dogs help blind people move around safely.'),
      TF('Some owners abuse their working animals.', true, 'Paragraph 2: some owners abuse them when they are tired.'),
      TF('The writer thinks all working animals should be set free.', false, 'The writer thinks the real issue is how they are treated, not whether they work.'),
      TF('A camel can carry 300 kilograms.', 'dns', 'There are no numbers about loads in the text.'),
      M('"rural" areas (paragraph 3) are…', ['in the countryside, not in cities', 'in the city centre', 'near the sea', 'in rich countries'], 'Narrow mountain paths, donkeys, camels → the countryside.'),
      AG('"Working animals need enough food, water and rest."', true, 'Paragraph 4 says exactly this.'),
      AG('"Using animals for work is always cruel."', false, 'This is the opinion of "some people" in paragraph 2. The writer says the situation is not that simple.')
    ] }
];
window.READING = { lessons, tests };
})();
