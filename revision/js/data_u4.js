// UNIT 4 (Customs and traditions) + exam-aligned content for the Revision House v2
// Exam: Listening 10 (U4) · Reading 10 (U2, U3, U4) · Writing 40 → 10 (U2, U4) · Grammar 15 (U1–U4) · Vocabulary 15 (U1–U4) · Speaking (U1, U3, U4)
(function () {
const M = (q, o, why, x) => ({ t: 'mcq', q, o, a: 0, why, ...(x || {}) });
const G = (q, a, why) => ({ t: 'gap', q, a: [].concat(a), why });
const O = (tiles, why) => ({ t: 'order', tiles, a: tiles.join(' '), why });
const TF = (q, a, why) => ({ t: 'tf', q, a, why });
const TFD = (q, a, why) => ({ t: 'tf', q, a, dns: true, why });
const S = (q, items, why) => ({ t: 'seq', q, items, why });
const AG = (q, agrees, why) => ({ t: 'mcq', q, o: ['The writer would agree.', 'The writer would disagree.'], a: agrees ? 0 : 1, keep: true, why });
const B = '#2F6DB5', GR = '#2E8B57', OR = '#D97706', PK = '#C2185B', PU = '#7E4FA6', TE = '#0E8F8F';
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);
const byId = (arr, id) => arr.find(x => x.id === id);
const para = arr => `<p class="para">${arr.map(([t, r]) => `<span class="s ${r}">${t}</span>`).join(' ')}</p>`;

// ================= GRAMMAR · Unit 4 =================
const T = window.GRAMMAR.topics;
const pp = { id: 'pp', src: 'L&S Unit 4', emoji: '⏳', title: 'Present perfect', short: 'have / has + past participle: experience and change up to now',
  why: 'Unit 4 talks about how traditions have changed. The present perfect connects the past with now.',
  learn: [
    { k: 'rule', title: 'The colour formula', html: `<div class="ex" style="font-size:18px"><span class="k-purple">Who</span> + <span class="k-orange">have / has</span> + <span class="k-pink">past participle</span></div>
      <div class="ex"><span class="k-purple">Technology</span> <span class="k-orange">has</span> <span class="k-pink">changed</span> the way we celebrate.</div>
      <div class="ex"><span class="k-purple">I</span> <span class="k-orange">have</span> never <span class="k-pink">eaten</span> moon cakes.</div>
      <div class="ex">Question: <span class="k-orange">Have</span> <span class="k-purple">you</span> ever <span class="k-pink">been</span> to a Saudi wedding?</div>` },
    { k: 'anim', type: 'pp', tag: 'Past → now', past: 'Families sent paper invitations', now: 'Invitations <b>have moved</b> online', note: 'Something started or happened in the past, and it is still important NOW. No finished time.' },
    { k: 'way', tag: 'Present perfect or past simple?', html: `<table class="tbl"><tr><th>Present perfect</th><th>Past simple</th></tr>
      <tr><td>no finished time: <b>ever, never, before, since, for</b></td><td>finished time: <b>yesterday, last year, in 2015, ago</b></td></tr>
      <tr><td>I <b>have visited</b> Diriyah twice.</td><td>I <b>visited</b> Diriyah <b>last week</b>.</td></tr>
      <tr><td>She <b>has lived</b> in Riyadh <b>since</b> 2020.</td><td>She <b>moved</b> to Riyadh <b>in</b> 2020.</td></tr></table>` },
    { k: 'ex', title: 'Irregular past participles to learn', items: ['go → <b>gone / been</b> · eat → <b>eaten</b> · buy → <b>bought</b>', 'see → <b>seen</b> · write → <b>written</b> · give → <b>given</b>', 'make → <b>made</b> · become → <b>become</b> · take → <b>taken</b>'] },
    { k: 'mist', items: [['I have went to the festival.', 'I have been to the festival.'], ['She have changed.', 'She has changed.'], ['I have visited Abha last year.', 'I visited Abha last year.'], ['Did you ever try Arabic coffee?', 'Have you ever tried Arabic coffee?']] }
  ],
  q: [
    M('Technology ___ the way we celebrate Eid.', ['has changed', 'have changed', 'has change', 'changed yesterday'], 'Technology (singular) + has + past participle (changed).'),
    M('___ you ever been to a Saudi wedding?', ['Have', 'Has', 'Did', 'Were'], 'Have + you + ever + past participle.'),
    M('I have never ___ moon cakes.', ['eaten', 'ate', 'eat', 'eating'], 'eat → ate → eaten. Use the past participle after have.'),
    M('My family ___ to Abha last summer.', ['went', 'has gone', 'have gone', 'goes'], 'last summer = finished time → past simple.'),
    M('She ___ in Riyadh since 2020.', ['has lived', 'lived', 'lives', 'is living'], 'since + a starting point → present perfect.'),
    G('They have ___ (buy) all the gifts for the party.', 'bought', 'buy → bought → bought.'),
    M('Which sentence is correct?', ['I have visited Diriyah twice.', 'I have visit Diriyah twice.', 'I has visited Diriyah twice.', 'I have visited Diriyah last week.'], 'I + have + past participle, and no finished time.'),
    M('Which time expression goes with the PAST SIMPLE?', ['last year', 'ever', 'so far', 'since 2020'], 'last year is a finished time.'),
    M('Have you ever ___ Arabic coffee?', ['tried', 'try', 'tries', 'trying'], 'have + past participle (tried).'),
    O(['Many traditions', 'have', 'changed', 'in the last fifty years.'], 'Subject + have + past participle.'),
    M('Online shopping ___ gift-giving much easier.', ['has made', 'have made', 'has make', 'made last'], 'Online shopping (singular) + has + made.'),
    TF('We use the present perfect with a finished time like "yesterday".', false, 'With a finished time, use the past simple.'),
    M('My grandparents ___ married in 1975.', ['got', 'have got', 'have get', 'has got'], 'in 1975 = finished time → past simple.'),
    M('I ___ never ___ to a graduation ceremony.', ['have / been', 'has / been', 'have / went', 'did / be'], 'I have never been to…'),
    M('What is the past participle of "write"?', ['written', 'wrote', 'writed', 'writing'], 'write → wrote → written.')
  ] };
const hedge = { id: 'hedge', src: 'R&W Unit 4', emoji: '🪶', title: 'Avoiding absolute statements', short: 'many, some, can, tend to, usually, often',
  why: 'In academic writing, sentences with all, every, always or never are often not true. Unit 4 teaches you to write carefully, and you need it in your response paragraph.',
  learn: [
    { k: 'rule', title: 'Absolute or careful?', html: `<div class="mist"><div class="w"><b>All</b> young people <b>always</b> prefer modern weddings.</div><div class="r"><b>Many</b> young people <b>tend to</b> prefer modern weddings.</div></div>
      <div class="ex">An <b>absolute statement</b> says something is true for everyone, every time. It is usually not true, so academic writers soften it.</div>` },
    { k: 'way', tag: 'Three tools from the book', html: `<div class="ex">1. <span class="k-green">many / most / some</span> instead of all or every: <b>Many</b> cultural traditions change.</div>
      <div class="ex">2. <span class="k-blue">can</span> + base verb: Cultural traditions <b>can</b> change.</div>
      <div class="ex">3. <span class="k-pink">tend to</span> + base verb: Cultural traditions <b>tend to</b> change.</div>` },
    { k: 'anim', type: 'future', tag: 'Adverbs of frequency', rows: [['always', 100, PK, 'absolute: be careful'], ['usually', 85, GR, 'safe'], ['often', 65, TE, 'safe'], ['sometimes', 40, OR, 'safe'], ['never', 3, PK, 'absolute: be careful']], note: 'usually, often, generally and sometimes make your statement careful. Put them before the main verb: People often give gifts.' },
    { k: 'mist', items: [['Everyone loves big parties.', 'Many people enjoy big parties.'], ['Cultural traditions tends to change.', 'Cultural traditions tend to change.'], ['Gifts can to be expensive.', 'Gifts can be expensive.'], ['People give often gifts.', 'People often give gifts.']] }
  ],
  q: [
    M('Which sentence AVOIDS an absolute statement?', ['Many young people prefer modern weddings.', 'All young people prefer modern weddings.', 'Every young person prefers modern weddings.', 'Young people always prefer modern weddings.'], 'many = not everyone.'),
    M('Make it careful: "Gifts are expensive." → "Gifts ___ be expensive."', ['can', 'must', 'are', 'always'], 'can + base verb = sometimes true.'),
    M('Cultural traditions ___ change over time.', ['tend to', 'tends to', 'tend', 'are tend to'], 'traditions (plural) + tend to + base verb.'),
    M('In Saudi Arabia, guests are ___ offered coffee and dates.', ['usually', 'never', 'not', 'every'], 'usually = true most of the time, not absolute.'),
    M('"Everyone loves big parties." What is the problem?', ['It is an absolute statement. It is not true for all people.', 'It has a spelling mistake.', 'It is a question.', 'It uses the past tense.'], 'Everyone = absolute.'),
    G('Rewrite with "tend to": "Families eat together on Fridays." → "Families ___ eat together on Fridays."', ['tend to'], 'tend to + base verb.'),
    M('Which word makes a statement ABSOLUTE?', ['all', 'many', 'some', 'often'], 'all = every one, with no exceptions.'),
    M('Which sentence has the adverb in the right place?', ['People often give gifts at weddings.', 'People give often gifts at weddings.', 'Often people give at weddings gifts.', 'People gives often gifts at weddings.'], 'Frequency adverb before the main verb.'),
    M('Most people ___ Eid with their families.', ['celebrate', 'celebrates', 'celebrating', 'to celebrate'], 'Most people (plural) + base verb.'),
    M('Which is the best academic statement?', ['Traditions can help families to feel close.', 'Traditions always make families happy.', 'Traditions never change.', 'Every family has the same traditions.'], 'can = careful. The others are absolute.'),
    M('Young people ___ to use social media to send Eid greetings.', ['tend', 'tends', 'can', 'often'], 'tend to + verb. (can and often do not take "to".)'),
    TF('"Some", "many", "often" and "can" make a statement less absolute.', true, 'These words show it is not true for everyone, every time.')
  ] };
const paraphrase = { id: 'para', src: 'R&W Unit 4', emoji: '🔄', title: 'Paraphrasing', short: 'Same meaning, your own words: synonyms, word forms, word order',
  why: 'The Unit 4 writing task is a summary. A summary must be in your own words, so paraphrasing gives you marks.',
  learn: [
    { k: 'rule', title: 'Three ways to paraphrase', html: `<div class="ex">1. <span class="k-green">Synonyms</span>: old → <b>traditional</b>, gift → <b>present</b>, disappear → <b>die out</b></div>
      <div class="ex">2. <span class="k-orange">Word forms</span>: celebrate (verb) → <b>celebration</b> (noun)</div>
      <div class="ex">3. <span class="k-blue">Word order</span>: Many traditions are disappearing <u>because young people move to cities</u>. → <u>Because young people move to cities</u>, many customs are dying out.</div>` },
    { k: 'way', tag: 'See it change', html: para([['Original: Families exchange gifts during Eid.', 'gen']]) + para([['Paraphrase: During Eid, relatives give each other presents.', 'topic']]) + '<p class="hint">Same meaning. Different words (relatives, give each other, presents) and different order.</p>' },
    { k: 'mist', items: [['Copying the sentence and changing one word.', 'Change words AND order.'], ['Changing the meaning.', 'Keep exactly the same meaning.'], ['Adding your opinion in the summary.', 'Keep your opinion for the response.']] }
  ],
  q: [
    M('Best paraphrase: "Many traditions are disappearing because young people move to cities."', ['Because young people move to cities, a lot of customs are dying out.', 'Many traditions are disappearing because young people move to cities.', 'Young people love traditions in cities.', 'Cities are disappearing because of traditions.'], 'Same meaning, new words (customs, dying out) and new order.'),
    M('Best paraphrase: "Families exchange gifts during Eid."', ['During Eid, relatives give each other presents.', 'Families exchange gifts during Eid.', 'Families buy gifts for themselves at Eid.', 'Eid is a family.'], 'exchange = give each other; gifts = presents.'),
    M('Best paraphrase: "The author argues that celebrations have become too commercial."', ['According to the writer, special occasions now focus too much on money.', 'The author argues that celebrations have become too commercial.', 'The writer loves shopping for celebrations.', 'Celebrations are cheaper than before.'], 'commercial = focus on money.'),
    M('Best paraphrase: "It is important to preserve our heritage."', ['We need to protect our traditions so that they continue.', 'It is important to preserve our heritage.', 'Our heritage is not important.', 'We must change all our traditions.'], 'preserve = protect so it continues.'),
    M('"celebrate" → "celebration". Which technique is this?', ['changing the word form', 'using a synonym', 'changing the meaning', 'copying the sentence'], 'verb → noun = a new word form.'),
    M('"old" → "traditional", "gift" → "present". Which technique?', ['using synonyms', 'changing the word form', 'changing the word order', 'adding an opinion'], 'Words with the same meaning = synonyms.'),
    M('A good paraphrase…', ['keeps the same meaning but uses different words', 'copies the original sentence', 'adds your opinion', 'changes the meaning'], 'Same meaning, your own words.'),
    M('Best paraphrase: "Weddings in Saudi Arabia are often very large."', ['Saudi weddings tend to be big events with many guests.', 'Weddings in Saudi Arabia are often very large.', 'Saudi weddings are always small.', 'Large weddings happen only in Riyadh.'], 'often → tend to; very large → big events with many guests.'),
    M('Best paraphrase: "Young people interact with relatives online."', ['Young people communicate with their family on the internet.', 'Young people never talk to relatives.', 'Online relatives are young.', 'Young people interact with relatives online.'], 'interact = communicate; online = on the internet.'),
    M('Which is the best way to START a summary?', ['In the article "Living Heritage", the author explains that…', 'I think that the article is good because…', 'Living heritage is good. I love it.', 'Firstly, I disagree with everything.'], 'A summary starts with the title, the author and the main idea. No opinion.')
  ] };
const cause = byId(T, 'cause');
if (cause) {
  cause.src = 'R&W U2 · L&S U4';
  cause.learn.splice(2, 0, { k: 'way', tag: 'Unit 4 phrases (very common in listening)', html: '<div class="ex"><span class="k-blue">Due to / Because of</span> + noun: Weddings are smaller <b>due to</b> the high cost.</div><div class="ex"><span class="k-blue">The reason for this is that</span> + sentence: <b>The reason for this is that</b> young people have less free time.</div><div class="ex"><span class="k-green">That\'s why</span> + result: Many families live far apart. <b>That\'s why</b> they send greetings online.</div>' });
  cause.q.push(
    M('Many young people live far from their families. ___ they send Eid greetings online.', ['That\'s why', 'Due to', 'Because of', 'The reason for this'], 'That\'s why + a result.'),
    M('Fewer people bake bread at home. The reason for this ___ that bakeries are everywhere.', ['is', 'are', 'because', 'due'], 'The reason for this is that…'),
    M('Weddings are smaller this year ___ the high cost.', ['due to', 'that\'s why', 'the reason is', 'because'], 'due to + noun (the high cost).'),
    M('Which phrase introduces a RESULT?', ['That\'s why', 'Due to', 'Because of', 'The reason for this is that'], 'That\'s why → result. The others → reason.'),
    M('Which phrase introduces a REASON?', ['The reason for this is that', 'That\'s why', 'As a result', 'So'], 'The reason for this is that + a reason.')
  );
}
T.push(pp, hedge, paraphrase);
const ORDER = ['comp', 'order', 'linkers', 'contrast', 'modals', 'signpost', 'cause', 'future', 'pros', 'cond', 'suggest', 'pp', 'hedge', 'para'];
window.GRAMMAR.topics = ORDER.map(id => byId(T, id)).filter(Boolean).concat(T.filter(t => !ORDER.includes(t.id)));

// ================= VOCABULARY · Unit 4 =================
const V = window.VOCAB;
const W4 = [
 ['appearance', 'noun', 'ap·PEAR·ance', '👗 🪞 ✨', 'She checks her hair and clothes before the party. She cares about her ___.', 'the way someone or something looks', ['In many cultures, people take special care of their <b>appearance</b> at weddings.'], 'appear (v)', ['Is appearance about how you look?', 'yes', '']],
 ['aspect', 'noun', 'AS·pect', '🍲 👘 🎶', 'Food, clothes and music are different parts, or ___, of a celebration.', 'one part or feature of something', ['Food is an important <b>aspect</b> of every Saudi celebration.'], 'aspects (plural)', ['Is an aspect the whole thing?', 'no', 'It is one part.']],
 ['belief', 'noun', 'be·LIEF', '🤲 💭 ✨', 'Something people feel is true and right. A strong ___.', 'something that you think is true or right', ['Being generous to guests is a strong <b>belief</b> in Arab culture.'], 'believe (v)', ['Is a belief something you think is true?', 'yes', '']],
 ['ceremony', 'noun', 'CER·e·mo·ny', '🎓 🎖️ 👏', 'A formal event with special actions, like a graduation. What is it?', 'a formal event with traditional actions, for example a wedding or a graduation', ['The graduation <b>ceremony</b> was held in a big hall.'], 'ceremonial (adj)', ['Is a ceremony usually formal?', 'yes', '']],
 ['culture', 'noun', 'CUL·ture', '🕌 ☕ 🎶', 'The food, clothes, music, beliefs and customs of a group of people. Their ___.', 'the way of life, customs and beliefs of a group of people', ['Arabic coffee is part of Saudi <b>culture</b>.'], 'cultural (adj)', ['Is music part of culture?', 'yes', '']],
 ['exchange', 'verb', 'ex·CHANGE', '🎁 ↔️ 🎁', 'At Eid, cousins give gifts to each other. They ___ gifts.', 'to give something to someone and receive something from them', ['Friends <b>exchange</b> greetings and gifts at Eid.'], 'exchange (n)', ['When you exchange gifts, do you only give?', 'no', 'You give and you receive.']],
 ['expect', 'verb', 'ex·PECT', '🤔 ⏰ 🚪', 'The host thinks the guests will come at 8. She ___ them at 8.', 'to think that something will happen or that someone will do something', ['In some countries, hosts <b>expect</b> guests to bring a small gift.'], 'expectation (n)', ['If you expect something, do you think it will happen?', 'yes', '']],
 ['formal', 'adjective', 'FOR·mal', '👔 🤝 🏛️', 'A business meeting, serious clothes, polite language. It is very ___.', 'serious and following official rules; not relaxed', ['A wedding invitation usually uses <b>formal</b> language.'], 'informal (opposite), formally (adv)', ['Is a chat with your best friend formal?', 'no', 'It is informal.']],
 ['generation', 'noun', 'gen·er·A·tion', '👵 👩 👧', 'Grandmother, mother and daughter belong to three different ___.', 'all the people of about the same age in a family or society', ['Recipes are passed from one <b>generation</b> to the next.'], 'generations (plural)', ['Are you and your grandmother the same generation?', 'no', '']],
 ['greet', 'verb', 'GREET', '👋 😊 ☕', 'She says "As-salamu alaykum" when her guests arrive. She ___ them.', 'to say hello to someone or welcome them', ['Saudi families often <b>greet</b> guests with Arabic coffee and dates.'], 'greeting (n)', ['Do we greet people when we meet them?', 'yes', '']],
 ['preserve', 'verb', 'pre·SERVE', '🏺 🛡️ ⏳', 'We keep old traditions alive so they do not disappear. We ___ them.', 'to keep something safe so that it continues to exist', ['Museums help to <b>preserve</b> traditional crafts.'], 'preservation (n)', ['If we preserve a tradition, does it disappear?', 'no', 'It continues.']],
 ['protection', 'noun', 'pro·TEC·tion', '🛡️ 🏛️ 🤲', 'Old buildings get special care so nobody damages them. They have ___.', 'keeping someone or something safe from harm', ['Historic sites need <b>protection</b> from damage.'], 'protect (v), protective (adj)', ['Is protection about keeping things safe?', 'yes', '']],
 ['relationship', 'noun', 're·LA·tion·ship', '👭 💞 🤝', 'The way two people feel and behave towards each other. Their ___.', 'the way two people or groups feel about and behave towards each other', ['Visiting relatives at Eid makes family <b>relationships</b> stronger.'], 'relation (n), related (adj)', ['Can two friends have a good relationship?', 'yes', '']],
 ['tradition', 'noun', 'tra·DI·tion', '☕ 🌴 🥁', 'Serving Arabic coffee to guests has continued for hundreds of years. It is a ___.', 'a custom or belief that has existed for a long time', ['Serving Arabic coffee to guests is an old <b>tradition</b>.'], 'traditional (adj), traditionally (adv)', ['Is a tradition something new?', 'no', 'It has existed for a long time.']],
 ['anniversary', 'noun', 'an·ni·VER·sa·ry', '💍 📅 🎂', 'My parents got married on 5 May. Every 5 May they celebrate their wedding ___.', 'the day exactly one year, or a number of years, after a special event', ['They celebrated their 25th wedding <b>anniversary</b> with the whole family.'], 'anniversaries (plural)', ['Does an anniversary come every year on the same date?', 'yes', '']],
 ['behaviour', 'noun', 'be·HAV·iour', '🙇‍♀️ 😊 🙅‍♀️', 'How somebody acts, good or bad. Their ___.', 'the way someone acts', ['Polite <b>behaviour</b> is important when you visit someone\'s home.'], 'behave (v)', ['Is behaviour about how you act?', 'yes', '']],
 ['celebration', 'noun', 'cel·e·BRA·tion', '🎉 🎈 🎂', 'A party for a happy event, like Eid or a graduation. What is it?', 'a special event or party for a happy occasion', ['Eid <b>celebrations</b> last for several days.'], 'celebrate (v)', ['Is a celebration usually happy?', 'yes', '']],
 ['commercial', 'adjective', 'com·MER·cial', '🛍️ 💰 🏷️', 'Shops sell special products for every holiday to make money. Holidays have become very ___.', 'related to buying, selling and making money', ['Some people think that weddings have become too <b>commercial</b>.'], 'commerce (n), commercialization (n)', ['Is "commercial" about money and shopping?', 'yes', '']],
 ['die out', 'phrasal verb', 'die OUT', '🕯️ ➡️ 💨', 'Fewer and fewer people follow this custom. Soon nobody will. It will ___.', 'to slowly disappear and stop existing', ['Some old customs <b>die out</b> because young people do not learn them.'], 'die out = disappear', ['If a tradition dies out, does it continue?', 'no', 'It disappears.']],
 ['event', 'noun', 'e·VENT', '📅 🎤 🎉', 'A graduation, a wedding, a concert: something organized that happens. An ___.', 'something important that is organized and happens', ['The university organized a cultural <b>event</b> for National Day.'], 'eventful (adj)', ['Is a wedding an event?', 'yes', '']],
 ['graduate', 'verb', 'GRAD·u·ate', '🎓 📜 🥳', 'She finished her degree and got her certificate. She ___ last year.', 'to finish your studies at a school or university and get a qualification', ['My sister <b>graduated</b> from university in June.'], 'graduation (n), graduate (n)', ['Do you graduate at the start of your studies?', 'no', 'At the end.']],
 ['interact', 'verb', 'in·ter·ACT', '🗣️ 💬 👭', 'At the party, guests talk, laugh and play games together. They ___.', 'to talk and do things with other people', ['Children <b>interact</b> with their cousins at family gatherings.'], 'interaction (n), interactive (adj)', ['Do people interact when they talk together?', 'yes', '']],
 ['multicultural', 'adjective', 'mul·ti·CUL·tur·al', '🌍 🤝 🎎', 'People from many different countries and cultures live in Riyadh. It is a ___ city.', 'including people of many different cultures', ['Riyadh is becoming more <b>multicultural</b>.'], 'multi- (many) + cultural', ['Does a multicultural city have only one culture?', 'no', '']],
 ['obligation', 'noun', 'ob·li·GA·tion', '📋 ✔️ 🎁', 'Something you must do, even if you do not want to. An ___.', 'something that you must do because it is a rule or it is expected', ['Some people feel that giving expensive gifts has become an <b>obligation</b>.'], 'oblige (v), obligatory (adj)', ['Is an obligation something you can choose not to do?', 'no', 'You must do it.']],
 ['occasion', 'noun', 'oc·CA·sion', '💍 🎓 🎂', 'A wedding, a graduation, a birthday: a special time, or ___.', 'a special event or time', ['Eid is a special <b>occasion</b> for families.'], 'occasional (adj) = sometimes', ['Is a wedding a special occasion?', 'yes', '']],
 ['personal', 'adjective', 'PER·son·al', '💌 ✍️ 💝', 'A handwritten card made just for one friend. It is a very ___ gift.', 'connected with one particular person; private', ['A handwritten card is more <b>personal</b> than a text message.'], 'person (n), personally (adv)', ['Is a personal gift made for one particular person?', 'yes', '']],
 ['political', 'adjective', 'po·LIT·i·cal', '🏛️ 🗳️ 📜', 'Connected with governments and their decisions. ___.', 'connected with government and public decisions', ['The news programme discussed <b>political</b> and social issues.'], 'politics (n), politician (n)', ['Is "political" connected with government?', 'yes', '']],
 ['social', 'adjective', 'SO·cial', '👨‍👩‍👧 ☕ 💬', 'Connected with people meeting and spending time together. ___ events.', 'connected with society and with people spending time together', ['Weddings are important <b>social</b> events in Saudi Arabia.'], 'society (n), socialize (v)', ['Is a family dinner a social event?', 'yes', '']],
 ['thoughtful', 'adjective', 'THOUGHT·ful', '💐 💭 😊', 'She remembered that her friend loves roses and bought her some. She is very ___.', 'kind; thinking about what other people need or like', ['It was very <b>thoughtful</b> of you to remember my birthday.'], 'thought (n), thoughtfully (adv)', ['Does a thoughtful person think about others?', 'yes', '']]
];
const toObj = r => ({ w: r[0], pos: r[1], stress: r[2], pic: r[3], guess: r[4], def: r[5], ex: r[6], fam: r[7], ccq: r[8] });
const u4 = { id: 'u4', emoji: '🎉', title: 'Unit 4 · Customs and traditions', note: 'Reading & Writing + Listening & Speaking wordlists: customs, celebrations, heritage.', words: W4.map(toObj) };
V.units = ['u1', 'u2', 'u3'].map(id => byId(V.units, id)).filter(Boolean).concat([u4]);
u4.words.forEach(w => V.ALL.push({ ...w, unit: 'u4' }));
const mq = (q, o, a, why, x) => ({ t: 'mcq', q, o, a, why, ...(x || {}) });
const SUFFIX = [
  ['The festival was ___! I will never forget it. (forget)', 'unforgettable', ['unforgettable', 'forgettable', 'forgetful', 'unforgotten']],
  ['This old phone is ___. It does not work any more. (use)', 'useless', ['useless', 'useful', 'usable', 'user']],
  ['Her small business became very ___. (success)', 'successful', ['successful', 'successless', 'succeed', 'successly']],
  ['Old family photos can be ___ to keep them safe. (digital)', 'digitized', ['digitized', 'digitalful', 'digitless', 'digitment']],
  ['Everyone felt great ___ before the wedding. (excite)', 'excitement', ['excitement', 'excitable', 'excited', 'excitingly']],
  ['We need to ___ the party carefully. (organization)', 'organize', ['organize', 'organization', 'organizer', 'organizes to']],
  ['Phones have changed ___ between family members. (communicate)', 'communication', ['communication', 'communicative', 'communicate', 'communicator']],
  ['The story was so strange that it was ___. (believe)', 'unbelievable', ['unbelievable', 'believable', 'unbelief', 'believing']],
  ['The two families reached an ___ about the wedding date. (agree)', 'agreement', ['agreement', 'agreeable', 'agreed', 'agreeing']],
  ['Not practising can ___ old skills. (weak)', 'weaken', ['weaken', 'weakly', 'weakness', 'weakful']],
  ['She is a ___ photographer. (profession)', 'professional', ['professional', 'professionless', 'professionment', 'profess']],
  ['The suffixes -ful, -less and -able make…', 'adjectives', ['adjectives', 'verbs', 'nouns', 'adverbs']],
  ['The suffixes -ment and -ion make…', 'nouns', ['nouns', 'verbs', 'adjectives', 'adverbs']],
  ['The suffixes -ize and -en make…', 'verbs', ['verbs', 'nouns', 'adjectives', 'adverbs']]
];
const PART4 = [
  ['At Eid, families ___ gifts and greetings.', 'exchange', ['exchange', 'preserve', 'expect', 'graduate']],
  ['Museums help us to ___ our heritage.', 'preserve', ['preserve', 'exchange', 'interact', 'greet']],
  ['Recipes are passed from one ___ to the next.', 'generation', ['generation', 'occasion', 'aspect', 'event']],
  ['The graduation ___ starts at 10 a.m. in the main hall.', 'ceremony', ['ceremony', 'belief', 'obligation', 'behaviour']],
  ['Some people feel an ___ to buy expensive gifts.', 'obligation', ['obligation', 'anniversary', 'appearance', 'occasion']],
  ['Some old customs may ___ out if nobody practises them.', 'die', ['die', 'go', 'run', 'pass']],
  ['My parents celebrated their 30th wedding ___.', 'anniversary', ['anniversary', 'ceremony', 'tradition', 'culture']],
  ['A handwritten card is a ___ gift.', 'thoughtful', ['thoughtful', 'political', 'commercial', 'formal']],
  ['Weddings are important ___ events in Saudi Arabia.', 'social', ['social', 'political', 'useless', 'formal']],
  ['In a ___ city, people from many cultures live together.', 'multicultural', ['multicultural', 'commercial', 'personal', 'thoughtful']]
];
V.recipes.push(
  { id: 'suffix', emoji: '🧬', title: 'Word endings (Unit 4)', short: '-ful, -less, -able, -ment, -ion, -ize, -en', make: () => pick(SUFFIX, 10).map(([q, a, o]) => mq(q, o, o.indexOf(a), `The answer is "${a}". Look at the gap: do you need a noun, a verb or an adjective?`)) },
  { id: 'u4', emoji: '🎎', title: 'Customs words in context (Unit 4)', short: 'Unit 4 words in sentences about Eid, weddings and heritage', make: () => pick(PART4, 10).map(([q, a, o]) => mq(q, o, o.indexOf(a), `${a}: ${(byId(u4.words.map(w => ({ ...w, id: w.w })), a) || { def: '' }).def}`)) }
);
const oldExam = V.exam;
V.exam = function () { return shuffle([...shuffle(oldExam()).slice(0, 10), ...byId(V.recipes, 'u4').make().slice(0, 3), ...byId(V.recipes, 'suffix').make().slice(0, 2)]); };

// ================= READING · Unit 4 tests =================
const R = window.READING;
R.tests.push(
  { id: 'heritage', unit: 'Unit 4 · Customs', emoji: '🏺', title: 'Living Heritage: Saudi Traditions on the World List', words: 400, heading: 'Living Heritage: Saudi Traditions on the World List', visual: '☕ 🧶 🥁',
    text: [
      'When people hear the word heritage, they often think of old buildings, such as castles or museums. However, heritage is not only made of stone. It also includes living traditions: songs, dances, crafts, food and the way people greet their guests. These customs are passed from one generation to the next, and they help a community understand who it is.',
      'To protect this living heritage, UNESCO keeps an international list of important cultural traditions. Countries can ask UNESCO to add their customs to the list. Saudi Arabia has several traditions on it. For example, Arabic coffee and the majlis, where people meet to talk and share news, were added in 2015. Al-Sadu, a traditional style of weaving by Bedouin women, was added in 2020.',
      'Why do these traditions need protection? One reason is that modern life is changing quickly. Many young people now live in big, multicultural cities, and they tend to spend more time online than with older relatives. As a result, some skills are not passed on. For instance, Sadu weaving takes years to learn, and fewer women have time to learn it. If nobody practises a tradition, it can die out within one or two generations.',
      'There are also economic reasons. Traditional crafts are often slow and expensive to make, so they cannot easily compete with cheap products from factories. In addition, some celebrations have become more commercial, and their original meaning can be forgotten.',
      'However, the picture is not all negative. Schools, museums and festivals in Saudi Arabia have started to teach traditional skills, and many young people are proud of their culture. Social media, which is sometimes blamed for changing traditions, can also help to preserve them, because people share videos of songs, dances and recipes. In my opinion, the best way to protect living heritage is to practise it, not just to put it in a museum.'
    ],
    q: [
      M('What is the main purpose of the text?', ['to explain what living heritage is, why it is in danger and how it can be preserved', 'to sell traditional crafts online', 'to compare castles and museums', 'to describe the history of UNESCO'], 'Definition → examples → threats → solutions and opinion.'),
      M('What is paragraph 1 mainly about?', ['Heritage includes living traditions, not only buildings.', 'Castles are very old.', 'Museums are expensive.', 'Songs are popular.'], 'Topic: heritage is not only made of stone.'),
      M('When were Arabic coffee and the majlis added to the list?', ['in 2015', 'in 2020', 'in 2010', 'The text does not say.'], 'Paragraph 2: were added in 2015.'),
      M('What is a majlis, according to the text?', ['a place where people meet to talk and share news', 'a type of coffee', 'a style of weaving', 'a festival'], 'Paragraph 2 explains it.'),
      TFD('Al-Sadu weaving is quick and easy to learn.', false, 'Paragraph 3: it takes years to learn.'),
      TFD('Young people in big cities tend to spend more time online than with older relatives.', true, 'Paragraph 3 says this.'),
      TFD('UNESCO pays families to teach traditional skills.', 'dns', 'The text says nothing about payments.'),
      M('"die out" (paragraph 3) means…', ['disappear', 'grow quickly', 'become expensive', 'move to a city'], 'If nobody practises it, it disappears.'),
      M('In paragraph 5, "them" in "help to preserve them" refers to…', ['traditions', 'videos', 'young people', 'museums'], 'Social media can help to preserve traditions.'),
      M('Which phrase in paragraph 3 avoids an absolute statement?', ['they tend to spend more time online', 'modern life is changing quickly', 'Sadu weaving takes years to learn', 'If nobody practises a tradition'], 'tend to = careful, not absolute (Unit 4 grammar).'),
      AG('"Traditions are best protected by keeping them only in museums."', false, 'The writer says the best way is to practise them, not just put them in a museum.'),
      AG('"Social media can help to preserve traditions."', true, 'Paragraph 5 says this.')
    ] },
  { id: 'manners', unit: 'Unit 4 · Customs', emoji: '🤝', title: 'Greetings, Gifts and Good Manners Around the World', words: 370, heading: 'Greetings, Gifts and Good Manners Around the World', visual: '👋 🎁 ⏰',
    text: [
      'When you travel or work with people from other countries, it is useful to understand their customs. Something that is polite in one culture can seem strange in another. Experts say that misunderstandings tend to happen in three areas: greetings, gifts and time.',
      'First, greetings vary greatly. In Saudi Arabia, people usually greet each other with "As-salamu alaykum", and men often shake hands with other men. In Japan, people tend to bow instead of shaking hands, and a deeper bow shows more respect. In many Latin American countries, friends often greet each other with a kiss on the cheek. It is a good idea to watch what local people do and follow them.',
      'Second, the rules for gifts can be surprising. In some countries, people open a gift as soon as they receive it, while in others they wait until the guest has left. In China, it is common for a person to refuse a gift once or twice before accepting it, because this shows good manners. The colour of the wrapping paper can also have a meaning, so many travellers ask a local friend before buying a present.',
      'Finally, people have different ideas about time. In Germany, being on time for a meeting is extremely important, and arriving even five minutes late can seem rude. In other cultures, a social invitation for 8 p.m. may mean that guests are expected to arrive a little later. Neither attitude is right or wrong; they are simply different.',
      'Of course, these are general patterns, and not every person in a country behaves in the same way. However, learning a few basic customs before a visit shows respect, and it can help you to build better relationships with the people you meet.'
    ],
    q: [
      M('What is the purpose of the text?', ['to inform readers about differences in customs so they can avoid misunderstandings', 'to persuade readers to live in Japan', 'to describe the history of gift-wrapping', 'to compare the prices of gifts'], 'Three areas of difference, with advice.'),
      M('Who is the text most probably written for?', ['people who travel or work with people from other countries', 'children who are learning to count', 'shop owners who sell paper', 'scientists who study time'], 'First sentence: when you travel or work with people from other countries.'),
      M('What is paragraph 3 mainly about?', ['customs connected with gifts', 'greetings in Japan', 'being on time', 'building relationships'], 'Topic sentence: the rules for gifts can be surprising.'),
      M('In Japan, what does a deeper bow show?', ['more respect', 'less interest', 'a question', 'a greeting for children'], 'Paragraph 2.'),
      M('Why might a person in China refuse a gift at first?', ['to show good manners', 'because they do not like it', 'because it is too expensive', 'because the colour is wrong'], 'Paragraph 3: this shows good manners.'),
      TFD('In Germany, arriving five minutes late to a meeting can seem rude.', true, 'Paragraph 4 says this.'),
      TFD('In every country, people open gifts immediately.', false, 'In some countries they wait until the guest has left.'),
      TFD('Most travellers buy their gifts at the airport.', 'dns', 'The text does not say where travellers buy gifts.'),
      M('The writer says "not every person in a country behaves in the same way". Why?', ['to avoid an absolute statement about people', 'to give a number', 'to tell a story', 'to describe a greeting'], 'Careful academic writing (Unit 4 grammar).'),
      M('"vary" (paragraph 2) means…', ['are different', 'stay the same', 'become expensive', 'disappear'], 'The paragraph describes different greetings.'),
      AG('"One culture\'s customs are right and the others are wrong."', false, 'Neither attitude is right or wrong; they are simply different.'),
      AG('"Learning basic customs before a visit is a good idea."', true, 'It shows respect and helps build relationships.')
    ] }
);
R.lessons.push({ id: 'preview', emoji: '👀', title: 'Preview and annotate', src: 'R&W Unit 4', short: 'Look before you read, then mark the text',
  blocks: [
    { k: 'rule', title: 'Preview (30 seconds)', html: '<div class="ex">Read the <b>title</b>, look at the <b>pictures</b>, and read the <b>first sentence of each paragraph</b>. Ask: what is this text about?</div>' },
    { k: 'way', tag: 'Annotate while you read', html: '<div class="ex">✏️ <b>Underline</b> the main idea of each paragraph.</div><div class="ex">⭕ <b>Circle</b> names, numbers and dates.</div><div class="ex">💬 Write one or two words in the margin: <i>cause, example, opinion</i>.</div><div class="ex">This makes the questions much faster, and it helps you write a summary in Unit 4.</div>' }
  ],
  q: [M('What should you read when you preview a text?', ['the title, the pictures and the first sentence of each paragraph', 'every word slowly', 'only the last paragraph', 'the questions only'], 'Preview = a quick look first.'), M('When you annotate, what do you usually circle?', ['names, numbers and dates', 'every verb', 'the whole paragraph', 'nothing'], 'Circle the facts you may need to find again.')] });

// ================= LISTENING · Unit 4 only =================
const L = window.LISTENING;
const keep = id => { const x = byId(L.lessons, id); if (x) x.src = 'Exam skill'; return x; };
L.lessons = [
  { id: 'cause4', emoji: '🔗', title: 'Cause and effect signals', src: 'L&S Unit 4', short: 'Due to, The reason for this is that, That\'s why',
    blocks: [{ k: 'rule', title: 'Listen for these', html: '<div class="ex">REASON comes next: <b>Due to</b> + noun · <b>Because of</b> + noun · <b>The reason for this is that</b> + sentence · <b>because</b> + sentence</div><div class="ex">RESULT comes next: <b>That\'s why</b> · <b>As a result</b> · <b>so</b></div><div class="ex">Exam tip: questions often ask <b>Why…?</b> The answer comes right after these phrases.</div>' }],
    audio: [['A', 'Many families now live in different cities. That\'s why a lot of Eid greetings are sent by video call. Also, due to busy work schedules, people prepare holiday food more quickly. The reason for this is that they have less free time.']], voices: { A: 'f' },
    q: [M('Why are many Eid greetings sent by video call?', ['Families live in different cities.', 'Phones are cheap.', 'People dislike visiting.', 'Eid is shorter now.'], 'The reason comes before "That\'s why".'), M('Which phrase introduced the reason for preparing food quickly?', ['due to', 'that\'s why', 'as a result', 'so'], 'due to + busy work schedules.')] },
  { id: 'opinion4', emoji: '💬', title: 'Listening for opinions', src: 'L&S Unit 4', short: 'Who thinks what? Agree, disagree, strong or polite',
    blocks: [{ k: 'rule', title: 'Opinion signals', html: '<table class="tbl"><tr><th>Strong opinion</th><td>I strongly believe that… · It\'s absolutely not true.</td></tr><tr><th>Agree</th><td>I completely agree. · That\'s completely true. · Yes, exactly.</td></tr><tr><th>Polite disagree</th><td>You may be right, but… · I see what you mean, but…</td></tr><tr><th>Turn-taking</th><td>Excuse me, can I say something? · What do you think?</td></tr></table>' }, { k: 'way', tag: 'Exam tip', html: '<div class="ex">When two people speak, write <b>M</b> (man) or <b>W</b> (woman) next to each idea while you listen. Questions often ask <b>who</b> thinks something.</div>' }],
    audio: [['A', 'I strongly believe that birthdays have become too commercial.'], ['B', 'You may be right, but a small gift can still be very thoughtful.'], ['A', 'That\'s completely true. A thoughtful gift is better than an expensive one.']], voices: { A: 'f', B: 'm' },
    q: [M('What does the woman believe?', ['Birthdays have become too commercial.', 'Gifts should be expensive.', 'Birthdays are not important.', 'Shops should close.'], 'I strongly believe that…'), M('Do they agree in the end?', ['Yes, about thoughtful gifts.', 'No, not at all.', 'They do not say.', 'Only about money.'], 'That\'s completely true = agreement.')] },
  { id: 'sounds4', emoji: '🎵', title: 'Hidden /t/ and /d/ sounds', src: 'L&S Unit 4', short: 'Fast speech hides the end of some words',
    blocks: [{ k: 'rule', title: 'Why you might not hear them', html: '<div class="ex">In fast speech, a <b>/t/</b> or <b>/d/</b> at the end of a word is often very weak before another consonant: <i>change<b>d</b> the way</i> sounds like "change the way", <i>las<b>t</b> night</i> sounds like "las night".</div><div class="ex">Exam tip: if the speaker talks about the past, <b>write the -ed ending</b> in gap fills even if you do not hear it clearly.</div>' }],
    audio: [['A', 'Technology changed the way we celebrate. Last night we watched old wedding videos, and we laughed for hours.']], voices: { A: 'f' },
    q: [G('Technology ___ the way we celebrate. (one word)', ['changed'], 'You may hear "change the", but the meaning is past: changed.'), M('Which word lost its final sound in fast speech?', ['last (in "last night")', 'we', 'old', 'for'], 'The /t/ in last is weak before n.')] },
  keep('numbers'), keep('before')
].filter(Boolean);
L.tests = [
  { id: 'podcast4', unit: 'L&S Unit 4', emoji: '🎙️', title: 'Podcast: Are traditions dying out?', kind: 'Podcast interview', situation: 'You will hear a podcast. Omar, the host, talks to Dr. Salma, an anthropologist.', voices: { A: 'm', B: 'f' }, names: { A: 'Omar', B: 'Dr. Salma' },
    script: [
      ['A', 'Welcome to Culture Talk. I\'m Omar. My guest today is Dr. Salma, an anthropologist and the author of a new book about traditions in the modern world. Dr. Salma, many people say that our traditions are dying out. Is that true?'],
      ['B', 'Thank you, Omar. Well, I don\'t think they are dying out. I think they are changing. Technology has changed almost every part of our lives, so of course it has changed the way we celebrate.'],
      ['A', 'Can you give us an example?'],
      ['B', 'Sure. Think about Eid. Fifty years ago, families spent days visiting every relative in person. Today, many people live in big cities, far from their families. That\'s why a lot of greetings are now sent by phone or by video call. The tradition of greeting relatives is still there. It has just moved online.'],
      ['A', 'And what about food? Our grandmothers spent hours in the kitchen.'],
      ['B', 'Yes, they did. People spent a lot of time and effort preparing special meals. Now, due to modern kitchens and supermarkets, we can prepare holiday food much more quickly. And people find recipes on the internet instead of in their grandmother\'s notebook. The reason for this is that young people have less free time.'],
      ['A', 'So is anything getting lost?'],
      ['B', 'Some things, yes. In my research, I have found that handmade crafts are the most at risk, because they take years to learn. On the other hand, living in a multicultural city helps children to realize that customs are often local. They interact with friends from many cultures, and they often become more interested in their own traditions.'],
      ['A', 'That\'s a hopeful message. Dr. Salma, thank you for joining us.'], ['B', 'My pleasure.']
    ],
    q: [
      M('Who is Dr. Salma?', ['an anthropologist and author', 'a chef', 'a university student', 'a museum guide'], 'an anthropologist and the author of a new book.'),
      M('What is Dr. Salma\'s main opinion?', ['Traditions are changing, not dying out.', 'Traditions are dying out quickly.', 'Technology has not affected traditions.', 'Eid is no longer important.'], 'I don\'t think they are dying out. I think they are changing.'),
      G('Fifty years ago, families spent ___ visiting every relative. (one word)', ['days'], 'families spent days visiting every relative.'),
      M('Why are many Eid greetings now sent by phone?', ['Many people live far from their families.', 'Phones are cheaper than visits.', 'People do not like visiting.', 'Video calls are a new law.'], 'many people live in big cities, far from their families. That\'s why…'),
      M('Which phrase does she use before that RESULT?', ['That\'s why', 'Due to', 'The reason for this is that', 'On the other hand'], 'That\'s why + result.'),
      M('What has made preparing holiday food quicker?', ['modern kitchens and supermarkets', 'restaurants', 'grandmothers', 'video calls'], 'due to modern kitchens and supermarkets.'),
      G('Young people find recipes on the ___. (one word)', ['internet'], 'on the internet instead of in their grandmother\'s notebook.'),
      M('Why do young people use quicker ways, according to her?', ['They have less free time.', 'They do not like cooking.', 'Supermarkets are open all night.', 'Recipes are secret.'], 'The reason for this is that young people have less free time.'),
      M('What is most at risk?', ['handmade crafts', 'Eid greetings', 'holiday food', 'family visits'], 'handmade crafts are the most at risk.'),
      M('How does a multicultural city help children?', ['They become more interested in their own traditions.', 'They forget their culture.', 'They stop meeting friends.', 'They learn to cook.'], 'they often become more interested in their own traditions.')
    ] },
  { id: 'gifts4', unit: 'L&S Unit 4', emoji: '🎁', title: 'Discussion: Have special occasions become too commercial?', kind: 'Discussion', situation: 'You will hear two students, Maha and Yousef, in a discussion.', voices: { A: 'f', B: 'm' }, names: { A: 'Maha', B: 'Yousef' },
    script: [
      ['A', 'Yousef, I strongly believe that special occasions have become far too commercial. Every time there is a holiday, the shops are full of special products, and people feel an obligation to buy expensive gifts.'],
      ['B', 'You may be right about the shops, Maha, but I don\'t think it is all negative. Gifts can be practical. When my brother graduated, we gave him a laptop, and he still uses it every day.'],
      ['A', 'That\'s completely true. A useful gift is great. But I have noticed that people spend more and more every year. My cousin\'s wedding cost over two hundred thousand riyals. Is that really necessary?'],
      ['B', 'Excuse me, can I say something? I think the cost depends on the family. Some people prefer small, simple celebrations. Also, a lot of the money goes to local businesses, like caterers and florists.'],
      ['A', 'I see what you mean. Personally, I think a thoughtful, personal gift is better than an expensive one. A handwritten card or a photo of you with the person means more than money.'],
      ['B', 'I completely agree with that. It\'s the thought that counts. So maybe the problem isn\'t the occasions themselves. It\'s our behaviour.'],
      ['A', 'Yes, exactly. What do you think we should do?'],
      ['B', 'I\'d say families should set a budget and focus on spending time together, not on shopping.']
    ],
    q: [
      M('What are Maha and Yousef discussing?', ['whether special occasions have become too commercial', 'how to plan a graduation party', 'the history of weddings', 'how to open a shop'], 'The first sentence gives the topic.'),
      M('What does Maha strongly believe at the start?', ['Special occasions have become too commercial.', 'Gifts are always practical.', 'Weddings should be bigger.', 'Shops should close on holidays.'], 'I strongly believe that special occasions have become far too commercial.'),
      M('What did Yousef\'s family give his brother when he graduated?', ['a laptop', 'a car', 'money', 'a watch'], 'we gave him a laptop.'),
      G('Maha\'s cousin\'s wedding cost over ___ riyals.', ['200,000', '200000', 'two hundred thousand'], 'over two hundred thousand riyals.'),
      M('According to Yousef, where does a lot of the money go?', ['to local businesses', 'to banks', 'to other countries', 'to charities'], 'local businesses, like caterers and florists.'),
      M('Which phrase does Yousef use to interrupt politely?', ['Excuse me, can I say something?', 'I strongly believe that…', 'That\'s completely true.', 'Yes, exactly.'], 'A polite way to take a turn.'),
      M('What kind of gift does Maha prefer?', ['a thoughtful, personal gift', 'an expensive gift', 'money', 'a practical gadget'], 'a thoughtful, personal gift is better than an expensive one.'),
      M('What do they BOTH agree with in the end?', ['The problem is our behaviour, not the occasions.', 'Weddings should be banned.', 'Gifts are a waste of money.', 'Shops are always wrong.'], 'It\'s our behaviour. Yes, exactly.'),
      M('Which adverb does Yousef use to show strong agreement?', ['completely', 'strongly', 'probably', 'sometimes'], 'I completely agree with that.'),
      M('What does Yousef suggest?', ['Families should set a budget and spend time together.', 'People should stop giving gifts.', 'Weddings should be in hotels.', 'Everyone should buy laptops.'], 'set a budget and focus on spending time together.')
    ] },
  { id: 'tech4', unit: 'L&S Unit 4', emoji: '📱', title: 'Talk: How technology has changed celebrations', kind: 'Short lecture', situation: 'You will hear a lecturer talking about technology and special occasions.', voices: { A: 'f' }, names: { A: 'Lecturer' },
    script: [
      ['A', 'Good morning. Today I\'d like to talk about how technology has changed the way we celebrate special occasions. I\'ll look at three areas: invitations, photos and gifts. Then I\'ll give you my conclusion.'],
      ['A', 'First of all, invitations. In the past, families printed paper invitations and delivered them by hand. In my survey of one hundred families, eighty said that they now send wedding invitations digitally, through messaging apps. The reason for this is that it is cheaper and faster.'],
      ['A', 'Moving on to photos. Thirty years ago, a family might take two or three films of photos at a wedding. Now, guests take hundreds of pictures on their phones and share them immediately. As a result, a celebration can be seen by thousands of people who were not even there.'],
      ['A', 'Thirdly, gifts. Online shopping has made gift-giving much easier. You can order a present at midnight and it arrives the next day. However, some people feel that this has made gifts less personal.'],
      ['A', 'So, has technology damaged our traditions? I don\'t think so. The traditions themselves have not changed very much. We still celebrate the same occasions with the same people. What has changed is the way we organize them. Thank you.']
    ],
    q: [
      M('What is the talk about?', ['how technology has changed the way we celebrate', 'how to take good photos', 'the cost of weddings', 'how to write invitations by hand'], 'The plan is in the first paragraph.'),
      S('Put the three areas in the order the speaker talks about them.', ['invitations', 'photos', 'gifts'], 'First of all → Moving on to → Thirdly.'),
      G('In the speaker\'s survey, ___ out of one hundred families send invitations digitally.', ['80', 'eighty'], 'eighty said that they now send wedding invitations digitally.'),
      M('Why do people send invitations digitally?', ['It is cheaper and faster.', 'Paper is not allowed.', 'Phones are free.', 'Guests prefer letters.'], 'The reason for this is that it is cheaper and faster.'),
      M('Thirty years ago, how many films of photos might a family take at a wedding?', ['two or three', 'hundreds', 'thirty', 'none'], 'two or three films of photos.'),
      M('What is a result of sharing photos immediately?', ['Thousands of people can see the celebration.', 'Weddings become cheaper.', 'Fewer guests come.', 'Photos become private.'], 'As a result, a celebration can be seen by thousands of people.'),
      M('Which phrase introduces the second area?', ['Moving on to', 'First of all', 'So', 'However'], 'Moving on to photos.'),
      M('What do some people feel about gifts bought online?', ['They are less personal.', 'They are more expensive.', 'They always arrive late.', 'They are always better.'], 'this has made gifts less personal.'),
      M('What is the speaker\'s conclusion?', ['Traditions have not changed much, but the way we organize them has.', 'Technology has destroyed our traditions.', 'We should stop using phones at weddings.', 'Gifts should be bought in shops.'], 'What has changed is the way we organize them.'),
      M('"Online shopping has made gift-giving much easier." "has made" is in the…', ['present perfect', 'past simple', 'present simple', 'future'], 'has + past participle = present perfect (Unit 4 grammar).')
    ] }
];

// ================= SPEAKING · Unit 4 =================
const SP = window.SPEAKING;
const P_EX = ['Give a reason or an example', 'for example|for instance|such as|because|the reason for this|this is because'];
const P_MORE = ['Add another point', 'another|on top of that|in addition|also|secondly|furthermore'];
const P_CON = ['Show the other side', 'however|on the other hand|but|it may be true|you may be right'];
const P_END = ['Conclude', 'in conclusion|to sum up|in short|overall|so '];
SP.lessons.push(
  { id: 'polite4', emoji: '🌸', title: 'Polite discussion and strong opinions', src: 'L&S Unit 4', short: 'You may be right, but… · I strongly believe… · What do you think?',
    blocks: [
      { k: 'rule', title: 'Be polite', html: '<div class="ex">Disagree politely: <b>You may be right, but…</b> · <b>I see what you mean, but…</b></div><div class="ex">Take a turn: <b>Excuse me, can I say something?</b></div><div class="ex">Invite others: <b>What do you think?</b> · <b>Do you agree?</b></div>' },
      { k: 'way', tag: 'Make it strong with adverbs', html: '<div class="ex">I <b>strongly</b> believe that people spend too much money on gifts.</div><div class="ex">Yes, that\'s <b>completely</b> true. · It\'s <b>absolutely</b> not true. · I <b>completely</b> agree.</div><div class="ex">🎵 Put extra stress on the adverb: I COMPLETELY agree.</div>' }
    ] },
  { id: 'change4', emoji: '⏳', title: 'Talking about change', src: 'L&S Unit 4', short: 'has changed, have become, That\'s why…',
    blocks: [{ k: 'rule', title: 'Change + cause', html: para([['Weddings have become much bigger.', 'support'], ['The reason for this is that families want beautiful photos.', 'detail'], ['That\'s why some families now prefer small celebrations.', 'conc']]) + '<p class="hint">Present perfect for the change, then a cause phrase, then the result.</p>' }] }
);
SP.tasks.push(
  { id: 'commercial', unit: 'L&S Unit 4', emoji: '🎁', title: 'Too commercial?', kind: 'Discussion turn', time: '1.5 minutes',
    prompt: 'Take part in a discussion: "Have special occasions become too commercial?" Give your opinion with a reason and an example, react politely to the other side, and use adverbs for emphasis.',
    plan: [['Strong opinion', 'I strongly believe that…', B], ['Reason', 'people feel an obligation to buy expensive gifts', GR], ['Example', 'weddings / graduations in my country', OR], ['Polite reaction', 'You may be right that…, but…', PU], ['Invite', 'What do you think?', TE], ['Conclude', 'So, in my opinion…', PK]],
    model: [['I strongly believe that special occasions have become too commercial.', 'topic'], ['The main reason is that many people feel an obligation to buy expensive gifts.', 'support'], ['For example, some weddings now cost hundreds of thousands of riyals.', 'detail'], ['You may be right that gifts can be practical, but a thoughtful, personal gift is much better than an expensive one.', 'counter'], ['So, in my opinion, families should spend more time together and less time shopping. What do you think?', 'conc']],
    phrases: ['I strongly believe that', 'The main reason is', 'For example', 'You may be right', 'completely', 'What do you think'],
    keywords: ['commercial', 'obligation', 'occasion', 'celebration', 'thoughtful', 'personal', 'behaviour', 'tradition', 'event', 'graduate'],
    parts: [['Give a strong opinion', 'strongly believe|i really think|i completely|in my opinion|i firmly'], P_EX, ['React politely to the other side', 'you may be right|i see what you mean|that\'s true, but|that is true, but|excuse me'], ['Use an adverb for emphasis', 'strongly|completely|absolutely|definitely|really'], ['Invite others to speak', 'what do you think|do you agree|how about you'], P_END], minWords: 100 },
  { id: 'changed', unit: 'L&S Unit 4', emoji: '⏳', title: 'A tradition that has changed', kind: 'Short talk', time: '1.5 minutes',
    prompt: 'How has one tradition in your country changed in the last 30 years? Use the present perfect and explain the causes.',
    plan: [['Introduce', 'the tradition (weddings / Eid / Ramadan)', B], ['Change 1', 'has / have + past participle', GR], ['Cause', 'The reason for this is that…', OR], ['Change 2', 'have become…', GR], ['Result', 'That\'s why…', OR], ['Conclude', 'the meaning is the same', PK]],
    model: [['Today I\'d like to talk about how weddings in Saudi Arabia have changed.', 'topic'], ['First of all, invitations have moved online.', 'support'], ['The reason for this is that it is faster and cheaper.', 'detail'], ['In addition, weddings have become much bigger and more expensive.', 'support'], ['That\'s why some families now prefer small celebrations.', 'detail'], ['However, the most important part has not changed: families still come together to celebrate.', 'counter'], ['In conclusion, the way we celebrate has changed, but the meaning is the same.', 'conc']],
    phrases: ['Today I\'d like to talk about', 'have changed', 'The reason for this is that', 'In addition', 'That\'s why', 'However', 'In conclusion'],
    keywords: ['tradition', 'celebration', 'generation', 'occasion', 'commercial', 'culture', 'ceremony', 'preserve'],
    parts: [['Introduce the topic', 'going to talk about|i\'d like to talk|i would like to talk|today i'], ['Use the present perfect', 'has [a-z]+ed|have [a-z]+ed|has become|have become|has been|have been|has made|have made|has gone|have gone'], ['Explain a cause', 'the reason for this|due to|because|that\'s why|as a result'], P_MORE, P_CON, P_END], minWords: 110 }
);

// ================= WRITING KITS (Unit 2 and Unit 4) =================
const ESSAY_CHECKS = [
  ['200 words or more', 'WORDS>=200'], ['Four paragraphs: introduction, two body paragraphs, conclusion', 'PARAS>=4'],
  ['A thesis in the introduction (main causes / several effects)', '(main causes|several causes|two causes|three causes|causes of|effects of|several effects|serious effects|two effects|main effects)'],
  ['Topic sentences: The first cause / effect…, The second…', '(the first (cause|effect|reason)|the second (cause|effect|reason)|another (cause|effect|reason))'],
  ['Cause and effect language (leads to, results in, due to, because of, as a result)', '(leads? to|results? in|caused by|due to|because of|as a result|that is why|that\'s why|contributes? to)'],
  ['An example: For example / For instance / such as', '(for example|for instance|such as)'],
  ['Conclusion: In conclusion / To sum up', '(in conclusion|to sum up|in short|overall)'],
  ['Spelling check: because, environment, government, pollution', 'NOT(becuase|enviroment|goverment|polution|beacuse)']
];
const SUMMARY_CHECKS = [
  ['150 words or more', 'WORDS>=150'], ['Two paragraphs: summary, then response', 'PARAS>=2'],
  ['Summary starts with the title and author: In the article "…", …', '(in the article|in the text|according to)'],
  ['A reporting verb: argues, explains, states, suggests', '(argues|explains|states|suggests|says|describes|believes)'],
  ['No "I" in the summary paragraph', 'NOI1'],
  ['Response: I agree / I partly agree / I disagree with the author\'s view', '(i agree|i disagree|i partly agree|i partially agree|i strongly agree)'],
  ['A personal example: For example, in my family / country…', '(for example|for instance)'],
  ['Careful language: many, often, usually, tend to, can', '(many|often|usually|tend to|generally| can )'],
  ['A concluding sentence: Overall / In conclusion', '(overall|in conclusion|to sum up|in short)']
];
const FRAME_ESSAY = `Introduction
[General statement about the topic.] ___ is one of the most serious problems in ___.
[Thesis] It has two serious effects: ___ and ___.

Body paragraph 1
The first effect of ___ is ___.
[Explain] This is because ___ / This leads to ___.
For example, ___.
As a result, ___.

Body paragraph 2
The second effect is ___.
[Explain] ___ results in ___.
For instance, ___.
That is why ___.

Conclusion
In conclusion, ___ has serious effects on ___ and ___.
If ___ does not ___, ___ will ___ in the future.`;
const FRAME_SUM = `Paragraph 1 · Summary (the author's ideas, your words, no "I")
In the article "___", ___ (year) argues / explains that ___.
According to the author, ___.
He / She also states that ___.
Finally, the writer suggests that ___.

Paragraph 2 · Response (your opinion)
I agree / partly agree / disagree with the author's view that ___.
One reason is that ___.
For example, in my family / country, ___.
Another reason is that many people tend to ___.
However, ___.
Overall, ___.`;
const KITS = [
  { id: 'cause', u: [2], emoji: '🌍', title: 'Cause and effect essay', unit: 'R&W Unit 2', color: '#2E8B57', short: 'Explain the causes or the effects of an environmental problem in four paragraphs.',
    see: [
      { k: 'html', html: `<div class="essay-house"><div class="roof" style="background:${PU}">🏠 Introduction<small>general statement + thesis (what the essay will explain)</small></div><div class="rooms"><div style="background:${GR}">Body 1<small>Cause or effect 1 + explanation + example</small></div><div style="background:${OR}">Body 2<small>Cause or effect 2 + explanation + example</small></div></div><div class="floor" style="background:${PK}">Conclusion<small>restate the thesis + prediction or opinion</small></div></div><p class="hint">Choose ONE focus: causes OR effects. The question tells you which.</p>` },
      { k: 'rule', title: 'The cause and effect toolkit', html: '<table class="tbl"><tr><th>Cause → effect</th><th>Effect ← cause</th></tr><tr><td>X <b>causes</b> Y · X <b>leads to</b> Y · X <b>results in</b> Y · <b>As a result,</b> · <b>That is why</b></td><td>Y <b>is caused by</b> X · Y <b>is due to</b> X · Y <b>is the result of</b> X · <b>because of</b> + noun · <b>because</b> + sentence</td></tr></table>' },
      { k: 'way', tag: 'Model essay: the main causes of global warming', html: para([['Over the last hundred years, the temperature of the Earth has risen quickly.', 'gen'], ['Scientists agree that human activities are the main cause of this global warming, and there are two important causes: burning fossil fuels and cutting down forests.', 'topic']]) +
        para([['The first cause of global warming is the burning of fossil fuels.', 'topic'], ['Cars, factories and power plants burn coal, oil and gas to produce energy.', 'support'], ['This releases carbon dioxide into the atmosphere, and this gas traps heat around the planet.', 'detail'], ['For example, a single car can produce several tonnes of carbon dioxide every year.', 'detail'], ['As a result, the more fuel we burn, the warmer the Earth becomes.', 'conc']]) +
        para([['The second cause is deforestation.', 'topic'], ['Trees absorb carbon dioxide, so forests help to keep the climate stable.', 'support'], ['However, large areas of rainforest are cut down every year for farming, logging and construction.', 'detail'], ['When trees are burned or cut down, the carbon stored in them goes back into the air.', 'detail'], ['That is why deforestation contributes to global warming.', 'conc']]) +
        para([['In conclusion, global warming is mainly caused by burning fossil fuels and destroying forests.', 'conc'], ['If people do not change the way they use energy and land, the planet will continue to get warmer.', 'detail']]) +
        '<div class="legend"><span style="background:#9A8AA8">General statement</span><span style="background:var(--c-topic)">Thesis / topic sentence</span><span style="background:var(--c-support)">Supporting sentence</span><span style="background:var(--c-detail)">Explanation / example</span><span style="background:var(--c-conc)">Concluding sentence</span></div>' },
      { k: 'mist', items: [['Pollution is caused of cars.', 'Pollution is caused by cars.'], ['Deforestation results to floods.', 'Deforestation results in floods.'], ['because of people cut trees', 'because people cut trees / because of logging'], ['One long paragraph', 'Four paragraphs with an empty line between them']] }
    ],
    build: [
      M('Which is the best THESIS for an essay about the effects of air pollution?', ['Air pollution has two serious effects: it harms our health and damages the environment.', 'Air pollution is bad.', 'For example, cars are dirty.', 'I like clean air very much.'], 'A thesis names the topic and the main points of the essay.'),
      M('Burning fossil fuels ___ more carbon dioxide in the atmosphere.', ['results in', 'is caused by', 'is due to', 'because of'], 'Cause first → results in.'),
      M('Floods are often ___ deforestation.', ['caused by', 'cause', 'lead to', 'result in'], 'Effect first → is/are caused by.'),
      M('Many animals have lost their homes ___ logging.', ['because of', 'because', 'that is why', 'results in'], 'logging = noun → because of.'),
      S('Put the body paragraph in order.', ['The first effect of air pollution is on people\'s health.', 'Dirty air contains small particles that enter our lungs.', 'For example, it can cause breathing problems such as asthma.', 'As a result, life in polluted cities is less healthy.'], 'Topic sentence → explanation → example → result.'),
      { t: 'roles', sents: [['The second cause is deforestation.', 'topic'], ['Trees absorb carbon dioxide from the air.', 'support'], ['For example, large areas of rainforest are cut down every year.', 'detail'], ['My favourite tree is the palm tree.', 'odd'], ['That is why deforestation contributes to global warming.', 'conc']], roles: ['topic', 'support', 'detail', 'conc', 'odd'], why: 'The palm tree sentence is off topic (unity).' },
      M('Which sentence is the best CONCLUSION for an essay about the causes of global warming?', ['In conclusion, global warming is mainly caused by burning fossil fuels and cutting down forests.', 'Firstly, cars burn fuel.', 'For example, a car produces carbon dioxide.', 'I went to the park yesterday.'], 'The conclusion restates the thesis.'),
      M('An essay asks: "What are the EFFECTS of plastic pollution?" Which topic sentence fits?', ['The first effect of plastic pollution is harm to sea animals.', 'The first cause of plastic pollution is shopping bags.', 'Plastic was invented in the 1900s.', 'I recycle every week.'], 'The question asks for effects, so the paragraphs must be about effects.'),
      M('Which word is spelled correctly?', ['environment', 'enviroment', 'envirenment', 'environmant'], 'environ + ment.')
    ],
    task: { title: 'The effects of air pollution in big cities', prompt: 'Write a cause and effect essay: What are the effects of air pollution in big cities? (about 200 to 300 words)',
      table: [['Introduction: general statement', '', '#9A8AA8'], ['Thesis: the two effects', '', B], ['Body 1: effect 1 (topic sentence)', '', GR], ['Explanation + example', '', OR], ['Body 2: effect 2 (topic sentence)', '', GR], ['Explanation + example', '', OR], ['Conclusion: restate + prediction', '', PK]],
      frame: FRAME_ESSAY, checks: ESSAY_CHECKS,
      model: [
        [['Air pollution is one of the most serious problems in big cities around the world.', 'gen'], ['It is mainly caused by traffic and factories, and it has two serious effects: it harms people\'s health and it damages the environment.', 'topic']],
        [['The first effect of air pollution is on people\'s health.', 'topic'], ['Dirty air contains small particles and gases that enter our lungs.', 'support'], ['This can lead to breathing problems such as asthma, especially in children and older people.', 'detail'], ['For example, on days with heavy traffic, doctors often see more patients with breathing difficulties.', 'detail'], ['As a result, air pollution makes life in the city less healthy.', 'conc']],
        [['The second effect is damage to the environment.', 'topic'], ['Gases from cars and factories contribute to global warming.', 'support'], ['In addition, polluted air can harm trees and plants in parks.', 'detail'], ['For instance, trees on busy streets often grow more slowly than trees in the countryside.', 'detail'], ['That is why air pollution is a threat to nature as well as to people.', 'conc']],
        [['In conclusion, air pollution has serious effects on both our health and the environment.', 'conc'], ['If cities do not reduce traffic and use cleaner energy, these problems will become worse in the future.', 'detail']]
      ] } },
  { id: 'summary', u: [4], emoji: '📝', title: 'Summary and response', unit: 'R&W Unit 4', color: '#C2185B', short: 'Paragraph 1: the author\'s ideas in your words. Paragraph 2: your opinion.',
    see: [
      { k: 'html', html: `<div class="two-cards"><div style="background:${B}"><b>Paragraph 1 · SUMMARY</b><span>the author's main ideas</span><span>in YOUR words (paraphrase)</span><span>no opinion, no "I"</span></div><div style="background:${PK}"><b>Paragraph 2 · RESPONSE</b><span>agree / partly agree / disagree</span><span>reasons + personal examples</span><span>careful language: many, often, tend to</span></div></div>` },
      { k: 'rule', title: 'Summary formula', html: '<div class="ex">In the article "<b>title</b>", <b>author</b> (year) <span class="k-green">argues / explains / states</span> that <b>main idea</b>.</div><div class="ex"><span class="k-green">According to the author,</span> point 1. · <span class="k-green">She also states that</span> point 2. · <span class="k-green">Finally, the writer suggests that</span> point 3.</div>' },
      { k: 'rule', title: 'Response formula', html: '<div class="ex"><span class="k-pink">I agree / partly agree / disagree</span> with the author\'s view that…</div><div class="ex">One reason is that… <span class="k-orange">For example, in my family / country,</span>…</div><div class="ex">Another reason is that many people <span class="k-teal">tend to</span>… · However,… · <span class="k-pink">Overall,</span>…</div>' },
      { k: 'way', tag: 'The article', html: '<div class="text source"><h3>Why We Should Keep Old Traditions</h3><p class="hint">by Huda Salem (2023)</p><p>Many people believe that old traditions are no longer important in the modern world. In my view, this is a mistake. First, traditions connect generations. When grandparents teach children traditional songs, recipes or crafts, families spend time together and their relationships become stronger. Second, traditions give people a sense of identity. In multicultural cities, it is easy to forget where we come from, but customs remind us who we are. Finally, traditions can help the economy, because tourists often want to experience local culture, such as traditional food and festivals. For these reasons, schools and families should work together to preserve traditions for the next generation.</p></div>' },
      { k: 'way', tag: 'Model summary and response', html: para([['In the article "Why We Should Keep Old Traditions", Huda Salem (2023) argues that traditions are still important today.', 'topic'], ['According to the author, traditions bring different generations together because older family members teach younger ones.', 'support'], ['She also explains that customs help people to remember their identity, especially in multicultural cities.', 'support'], ['Finally, the writer suggests that traditions can support the economy by attracting tourists.', 'support']]) +
        para([['I agree with the author\'s view that traditions should be preserved.', 'conc'], ['One reason is that traditions help families to spend time together.', 'support'], ['For example, in my family, my grandmother teaches us how to make traditional dishes during Ramadan, and these evenings are very special for us.', 'detail'], ['Another reason is that many tourists tend to be interested in local culture, so traditions can create jobs.', 'support'], ['However, I think some customs can change a little to suit modern life.', 'counter'], ['Overall, traditions are an important part of who we are, and young people should learn them.', 'conc']]) +
        '<div class="legend"><span style="background:var(--c-topic)">Title, author, main idea</span><span style="background:var(--c-support)">Author\'s point / my reason</span><span style="background:var(--c-detail)">My example</span><span style="background:var(--c-counter)">However</span><span style="background:var(--c-conc)">My view / conclusion</span></div>' }
    ],
    build: [
      M('Which sentence belongs in the SUMMARY paragraph?', ['According to the author, traditions connect generations.', 'I think traditions are boring.', 'In my family, we eat dates every day.', 'I strongly disagree with her.'], 'A summary reports the author\'s ideas, with no "I".'),
      M('Which sentence belongs in the RESPONSE paragraph?', ['I partly agree with the author\'s view because some customs need to change.', 'The author argues that traditions are important.', 'According to Huda Salem, customs give identity.', 'She also states that tourists like culture.'], 'The response gives YOUR opinion.'),
      M('The author ___ that traditions connect generations.', ['argues', 'argue', 'is argue', 'arguing'], 'The author (singular) + argues.'),
      M('Best paraphrase: "Customs remind us who we are."', ['Traditions help people to remember their identity.', 'Customs remind us who we are.', 'People forget who they are.', 'We remind our customs.'], 'Same meaning, new words.'),
      M('Best paraphrase: "Tourists often want to experience local culture."', ['Visitors tend to be interested in the traditions of the place.', 'Tourists often want to experience local culture.', 'Tourists never like culture.', 'Local people want to be tourists.'], 'often → tend to; experience local culture → interested in traditions of the place.'),
      M('Which sentence uses careful language for the response?', ['Many young people tend to forget traditional recipes.', 'All young people forget traditional recipes.', 'Young people never cook.', 'Every family loses its traditions.'], 'many + tend to = careful.'),
      S('Put the summary sentences in order.', ['In the article "Why We Should Keep Old Traditions", Huda Salem (2023) argues that traditions are still important.', 'According to the author, traditions bring generations together.', 'She also explains that customs help people remember their identity.', 'Finally, the writer suggests that traditions can support the economy.'], 'Title + author + main idea → point 1 → point 2 → Finally.'),
      M('What should you NOT do in a summary?', ['give your own opinion', 'use your own words', 'name the author', 'include the main idea'], 'Your opinion goes in the response paragraph.'),
      M('Which is the best way to START the response?', ['I agree with the author\'s view that traditions should be preserved.', 'In the article, the author says…', 'Firstly, the author argues…', 'According to the writer…'], 'Start the response with your position.')
    ],
    task: { title: 'Have weddings become too expensive?', prompt: 'Read the article. Write a summary paragraph and a response paragraph (about 150 to 200 words).',
      source: { title: 'Have Weddings Become Too Expensive?', author: 'Khalid Nasser (2024)', text: 'In many countries, weddings have become much more expensive over the last twenty years. Some families now spend a year\'s salary on one celebration. There are several reasons for this. Firstly, social media has created pressure, because couples want their wedding to look as beautiful as the photos they see online. Secondly, wedding halls, flowers and catering have become more commercial, and prices tend to rise every year. As a result, some young people delay getting married, or they start their married life with debt. In my opinion, families should choose smaller, simpler weddings. A celebration does not need to be expensive to be meaningful.' },
      table: [['Summary: title + author + main idea', '', B], ['Author\'s point 1', '', GR], ['Author\'s point 2', '', GR], ['Author\'s point 3 / result', '', GR], ['Response: my view', '', PK], ['Reason 1 + my example', '', OR], ['Reason 2', '', OR], ['However (other side)', '', PU], ['Concluding sentence', '', PK]],
      frame: FRAME_SUM, checks: SUMMARY_CHECKS,
      model: [
        [['In the article "Have Weddings Become Too Expensive?", Khalid Nasser (2024) explains that weddings now cost much more than in the past.', 'topic'], ['According to the writer, social media puts pressure on couples to have beautiful, expensive celebrations.', 'support'], ['He also states that services such as wedding halls and catering have become more commercial.', 'support'], ['As a result, some young people wait longer to get married or begin their marriage with debt.', 'support']],
        [['I partly agree with the author\'s view that weddings have become too expensive.', 'conc'], ['One reason is that many families feel an obligation to invite hundreds of guests.', 'support'], ['For example, in Saudi Arabia, wedding parties are often very large, and this can be very costly.', 'detail'], ['Another reason is that social media tends to make people compare their celebrations with others.', 'support'], ['However, a wedding is a special occasion, so I believe it is acceptable to spend some money on it.', 'counter'], ['Overall, families can have a beautiful celebration without spending too much.', 'conc']]
      ] } }
];
const SPELL = (byId(window.WRITING.exercises, 'spell') || { q: [] }).q;
window.KITS = KITS;
window.WRITING.spell = SPELL;

// ================= CHAT GAMES: Unit 4 messages =================
const I = (who, msg, q, o, why, fix) => ({ who, msg, q, o, a: 0, why, fix });
const C = window.CHATS;
C.grammar.items.splice(2, 0,
  I('Jood', 'I have [[went]] to my cousin\'s wedding three times this year 💍', 'Fix it', ['been', 'go', 'gone to', 'going'], 'have been to = experience.', 'I have been to my cousin\'s wedding three times this year.'),
  I('Noura', 'I [[have visited]] Diriyah last Friday 🏰', 'Fix it', ['visited', 'have visit', 'has visited', 'visiting'], 'last Friday = finished time → past simple.', 'I visited Diriyah last Friday.'),
  I('Lama', '[[All]] young people hate traditional music 🙄', 'Make it careful', ['Some', 'Every', 'Always', 'No'], 'Avoid absolute statements: some / many.', 'Some young people do not enjoy traditional music.'));
C.vocab.items.push(
  I('Noura', 'Old customs will [[die off]] if nobody practises them 😢', 'Correct phrasal verb?', ['die out', 'die down', 'die away', 'die in'], 'die out = disappear.', 'Old customs will die out if nobody practises them.'),
  I('Jood', 'My sister [[graduation]] from university in June 🎓', 'Which word form?', ['graduated', 'graduate', 'graduating', 'graduates'], 'verb, past: graduated.', 'My sister graduated from university in June.'));
C.writing.items = [
  I('Reem', 'My essay is about the EFFECTS of pollution. My topic sentence: "[[The first cause of pollution is cars.]]" 🤔', 'Is it right?', ['No. Write about effects: The first effect of pollution is…', 'Yes, perfect', 'Yes, causes and effects are the same', 'No, it is too short'], 'Answer the question: effects, not causes.'),
  I('Dana', 'In my summary I wrote "[[I think the author is right]]" 😅', 'What should she do?', ['Move her opinion to the response paragraph', 'Keep it in the summary', 'Delete the summary', 'Write it in capital letters'], 'Summary = the author\'s ideas only.'),
  I('Lama', 'How many paragraphs for the cause and effect essay?', 'Answer Lama', ['four: introduction, two body paragraphs, conclusion', 'one', 'ten', 'it does not matter'], 'Intro + 2 body + conclusion.'),
  I('Noura', 'I copied two sentences from the article into my summary 🙈', 'Help Noura', ['Paraphrase them: change words and order', 'It is fine to copy', 'Copy the whole article', 'Write them in Arabic'], 'A summary must be in your own words.'),
  I('Jood', 'My response says "[[Everyone]] spends too much on weddings."', 'Make it careful', ['Many people', 'All people', 'Every person', 'Nobody'], 'Avoid absolute statements: many people.'),
  I('Reem', 'Deforestation [[results to]] floods 🌧️', 'Fix it', ['results in', 'results from to', 'is result in', 'result to'], 'result in.'),
  I('Dana', 'How do I start my summary?', 'Help Dana', ['In the article "…", the author argues that…', 'I agree with…', 'Firstly, I think…', 'Hello teacher'], 'Title + author + main idea.'),
  I('Lama', 'I wrote [[becuase]] again 😭', 'Correct spelling?', ['because', 'becouse', 'becase', 'beacuse'], 'Big Elephants Can Always Understand Small Elephants.')
];

// ================= PLANS (colours given privately by the teacher) =================
window.PLANS = [
  { id: 'rose', emoji: '🌹', name: 'Rose plan', c1: '#F7A8C8', c2: '#D6457A', who: 'Writing first, step by step', intro: 'Start with the writing kits: they are worth the most marks. Then the grammar you need for them.',
    steps: [['Writing: cause and effect essay (see the model)', '#/s/writing/k/cause/see'], ['Writing: cause and effect practice', '#/s/writing/k/cause/build'], ['Grammar: cause and effect', '#/s/grammar/t/cause'], ['Writing: summary and response (see the model)', '#/s/writing/k/summary/see'], ['Grammar: present perfect', '#/s/grammar/t/pp'], ['Grammar: unless and if', '#/s/grammar/t/cond'], ['Vocabulary: Unit 4 cards', '#/s/vocab/u/u4'], ['Listening: Unit 4 podcast', '#/s/listening/t/podcast4'], ['Full mock exam', '#/s/exam']], tip: 'Twenty minutes a day. Always look at the model before you write.' },
  { id: 'lilac', emoji: '💜', name: 'Lilac plan', c1: '#CDB4F5', c2: '#7E4FA6', who: 'Accuracy: spelling, word forms, careful sentences', intro: 'Small accuracy points add many marks: spelling, word endings and careful sentences.',
    steps: [['Writing: spelling check', '#/s/writing/q/spell'], ['Vocabulary: word endings', '#/s/vocab/q/suffix'], ['Grammar: avoiding absolute statements', '#/s/grammar/t/hedge'], ['Grammar: paraphrasing', '#/s/grammar/t/para'], ['Writing: summary and response (write it)', '#/s/writing/k/summary/write'], ['Writing: cause and effect essay (write it)', '#/s/writing/k/cause/write'], ['Reading: Unit 4 heritage test', '#/s/reading/t/heritage'], ['Full mock exam', '#/s/exam']], tip: 'Read every answer again before you press Check.' },
  { id: 'gold', emoji: '👑', name: 'Gold plan', c1: '#F7D98B', c2: '#C9962B', who: 'Speed and top marks', intro: 'Timed practice and the hardest question types.',
    steps: [['Grammar exam mode', '#/s/grammar/x'], ['Vocabulary exam mode', '#/s/vocab/x'], ['All Unit 4 listening tests', '#/s/listening'], ['All reading tests (Units 2 to 4)', '#/s/reading'], ['Writing: both kits, then compare with the models', '#/s/writing'], ['Speaking: record the Unit 4 discussion', '#/s/speaking/t/commercial'], ['Full mock exam (aim for 95%)', '#/s/exam']], tip: 'Keep the last five minutes of every section to check your answers.' }
];

// ================= THE MOCK EXAM (same parts and marks as the real one) =================
const SEC = { listening: [4], reading: [2, 3, 4], writing: [2, 4], grammar: [1, 2, 3, 4], vocab: [1, 2, 3, 4], speaking: [1, 3, 4] };
const unitsOf = x => x.u || ((x.unit || x.src || '').match(/[1-4]/g) || []).map(Number);
const inSec = (sec, x) => { const u = unitsOf(x); return !u.length || u.some(n => SEC[sec].includes(n)); };
const pickKeep = (a, n) => shuffle(a.map((_, i) => i)).slice(0, n).sort((x, y) => x - y).map(i => a[i]);
window.EXAM_INFO = { SEC, unitsOf, inSec, total: 60, parts: [
  { sec: 'listening', name: 'Listening', marks: 10, units: 'Unit 4' },
  { sec: 'reading', name: 'Reading', marks: 10, units: 'Units 2, 3 and 4' },
  { sec: 'writing', name: 'Writing', marks: 10, units: 'Units 2 and 4' },
  { sec: 'grammar', name: 'Grammar', marks: 15, units: 'Units 1 to 4' },
  { sec: 'vocab', name: 'Vocabulary', marks: 15, units: 'Units 1 to 4' }
], speaking: 'Units 1, 3 and 4' };
window.EXAM_V2 = function () {
  const lt = shuffle(L.tests)[0];
  const rts = R.tests.filter(t => inSec('reading', t)), rt = shuffle(rts)[0];
  const gt = window.GRAMMAR.topics.filter(t => inSec('grammar', t));
  const gq = gt.map(t => pick(t.q, 1)[0]);
  const u4t = gt.filter(t => unitsOf(t).includes(4));
  gq.push(...pick(u4t.flatMap(t => t.q).filter(q => !gq.includes(q)), Math.max(0, 15 - gq.length)));
  return [
    { kind: 'listening', name: 'Listening', marks: 10, test: lt, q: lt.q.slice(0, 10) },
    { kind: 'reading', name: 'Reading', marks: 10, test: rt, q: pickKeep(rt.q, 10) },
    { kind: 'grammar', name: 'Grammar', marks: 15, q: shuffle(gq).slice(0, 15) },
    { kind: 'vocab', name: 'Vocabulary', marks: 15, q: V.exam().slice(0, 15) },
    { kind: 'writing', name: 'Writing', marks: 10, kit: shuffle(KITS)[0] }
  ];
};
})();
