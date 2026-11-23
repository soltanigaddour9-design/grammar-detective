// HONEY LAB · data for the garden games (detective cases, juice bar, perfume atelier)
(function () {
// ---------- GARDEN DETECTIVE: who messed up the garden? ----------
// Each clue is a witness message with a mistake. Fix it to unlock the fact, which rules out suspects.
const C = (witness, icon, said, o, why, fact, out) => ({ witness, icon, said, o, a: 0, why, fact, out });
const CASES = [
{ id: 'honey', emoji: '🍯', title: 'The Mystery of the Missing Honey', skill: 'Grammar: verb agreement, comparatives, past simple, modals',
  intro: 'This morning the Queen Bee opened the golden honey jar… and it was EMPTY! Five garden friends were near the hive last night. Fix each witness message to find the clues. Every clue sends one suspect home.',
  suspects: [['bella', 'Bella the Bee', '🐝', 'Tiny, lives in the hive'], ['luna', 'Luna the Ladybird', '🐞', 'Tiny, red with black spots'], ['rosie', 'Rosie the Rabbit', '🐰', 'Loves carrots, no wings'], ['hazel', 'Hazel the Hedgehog', '🦔', 'Spiky, no wings'], ['coco', 'Coco the Crow', '🐦‍⬛', 'Black feathers, loves shiny things']],
  clues: [
    C('Queen Bee', '👑', 'Everybody in my hive [[have]] a perfect alibi. We were all asleep.', ['has', 'have', 'are having', 'haves'], 'Everybody is singular: everybody has.', 'The thief is not a bee from the hive.', ['bella']),
    C('Daisy the Duck', '🦆', 'I saw a shadow. The thief was much [[more big]] than a ladybird.', ['bigger', 'more big', 'biggest', 'more bigger'], 'big → bigger (never more + -er).', 'The thief is much bigger than a ladybird.', ['luna']),
    C('Gardener Grace', '👩‍🌾', 'The thief [[didn\'t left]] any carrot pieces near the jar.', ['didn\'t leave', 'didn\'t left', 'not left', 'doesn\'t left'], 'didn\'t + base verb.', 'No carrots! The thief is not a carrot lover.', ['rosie']),
    C('Omar the Owl', '🦉', 'I saw the thief fly over the fence at midnight. It [[must to]] have wings!', ['must', 'must to', 'musts', 'must be to'], 'must + base verb (no to).', 'The thief can fly.', ['hazel']),
    C('Gardener Grace', '👩‍🌾', 'Next to the jar I found a shiny spoon and a black feather. The thief really [[love]] shiny things.', ['loves', 'love', 'loving', 'are love'], 'The thief (he / she / it) loves.', 'The thief has black feathers and loves shiny things!', [])],
  culprit: 'coco', ending: 'Coco the Crow confessed! She took the honey jar because it was so shiny. She gave the honey back, and now she helps the bees guard the hive. 🍯🐝' },
{ id: 'tulips', emoji: '🌷', title: 'Who Trampled the Tulips?', skill: 'Vocabulary: word forms, phrasal verbs, comparatives, tend to',
  intro: 'The prize tulips were perfect yesterday. This morning they are flat and half of them are eaten! Five animals were in the garden. Fix the witness messages to find out who did it.',
  suspects: [['tara', 'Tara the Tortoise', '🐢', 'Very slow, sleeps until 9 am'], ['pip', 'Pip the Puppy', '🐶', 'Four paws, was ill this week'], ['polly', 'Polly the Peacock', '🦚', 'Two light feet, beautiful tail'], ['fifi', 'Fifi the Fox', '🦊', 'Paws, active at night'], ['gigi', 'Gigi the Goat', '🐐', 'Hooves, always hungry']],
  clues: [
    C('Rose the Robin', '🐦', 'The [[destroy]] of the tulips happened very fast, in two minutes!', ['destruction', 'destroy', 'destroying', 'destroyed'], 'the + noun: destruction.', 'The thief is fast.', ['tara']),
    C('Nurse Nora', '👩‍⚕️', 'Pip couldn\'t do it. He [[came down]] a cold and stayed in bed all day.', ['came down with', 'came down', 'came over', 'came up'], 'come down WITH an illness.', 'Pip was in bed.', ['pip']),
    C('Gardener Grace', '👩‍🌾', 'The footprints are much [[deepest]] than a bird\'s footprints.', ['deeper', 'deepest', 'more deep', 'deep'], 'comparative + than: deeper.', 'The thief is a heavy animal, not a bird.', ['polly']),
    C('Omar the Owl', '🦉', 'It happened at 7 in the morning. Foxes [[tends]] to sleep in the morning.', ['tend', 'tends', 'tending', 'are tend'], 'Foxes (plural) tend to.', 'Fifi was asleep.', ['fifi']),
    C('Gardener Grace', '👩‍🌾', 'The thief ate the tulips [[in order]] stop feeling hungry, and left hoof marks.', ['in order to', 'in order', 'so that', 'for'], 'in order to + verb.', 'The thief eats flowers and has hooves!', [])],
  culprit: 'gigi', ending: 'Gigi the Goat said sorry. She helped Gardener Grace plant new tulips, and now she eats grass in her own field. 🌷🐐' },
{ id: 'juice', emoji: '🧃', title: 'The Juice Bar Mix-up', skill: 'Linking words: although, however, but, so that + verb agreement',
  intro: 'Someone changed the labels at the Juice Bar! Customers asked for strawberry juice and got lemon. The labels are on the HIGH shelf. Fix the witness messages to find the joker.',
  suspects: [['dina', 'Dina the Deer', '🦌', 'Shy, cannot climb'], ['bea', 'Bea the Bear', '🐻', 'Sleepy after lunch'], ['ollie', 'Ollie the Owl', '🦉', 'Works at night'], ['sami', 'Sami the Squirrel', '🐿️', 'Allergic to lemons'], ['mango', 'Mango the Monkey', '🐒', 'Loves jokes and bananas']],
  clues: [
    C('Barista Bee', '🐝', 'Dina [[can\'t to]] reach the high shelf. She is too short.', ['can\'t', 'can\'t to', 'doesn\'t can', 'not can'], 'can\'t + base verb.', 'Dina cannot reach the labels.', ['dina']),
    C('Lily the Lamb', '🐑', 'Although Bea was at the bar, [[but]] she was asleep the whole time.', ['Although Bea was at the bar, she was asleep the whole time.', 'Although Bea was at the bar, but she was asleep the whole time.', 'Bea was at the bar although, she was asleep.', 'Although, Bea was at the bar but asleep.'], 'Never although + but together.', 'Bea was asleep.', ['bea']),
    C('Barista Bee', '🐝', 'Ollie works at night[[, however]] the labels were changed at lunchtime.', ['Ollie works at night. However, the labels were changed at lunchtime.', 'Ollie works at night, however the labels were changed at lunchtime.', 'Ollie works at night however, the labels were changed at lunchtime.', 'Ollie works at night. However the labels, were changed at lunchtime.'], 'Full stop + However + comma.', 'Ollie was asleep at lunchtime.', ['ollie']),
    C('Doctor Dove', '🕊️', 'Sami [[have]] an allergy to lemons, so he never touches them.', ['has', 'have', 'having', 'is have'], 'he / she / it has.', 'Sami never touches lemons.', ['sami']),
    C('Lily the Lamb', '🐑', 'I found banana peel on the high shelf. Monkeys [[is]] very good at climbing!', ['are', 'is', 'be', 'am'], 'Monkeys (plural) are.', 'The joker climbs well and eats bananas!', [])],
  culprit: 'mango', ending: 'Mango the Monkey laughed: "It was a joke!" He fixed every label and made free banana smoothies for everyone. 🍌🧃' }
];

// ---------- JUICE BAR: blend two fruits (words) to make the collocation for the order ----------
const JUICE = [
  ['the time of day when roads are full', 'rush', 'hour', 3], ['buses, trains and metros for everyone', 'public', 'transport', 3], ['too many cars, so the traffic does not move', 'traffic', 'congestion', 3],
  ['a road space only for bikes', 'cycle', 'lane', 3], ['travel to work together in one car', 'car', 'share', 3], ['rules about where and when you can park', 'parking', 'restrictions', 3],
  ['the Earth is getting hotter', 'global', 'warming', 2], ['a gas like methane that traps heat', 'greenhouse', 'gas', 2], ['coal, oil and natural gas', 'fossil', 'fuel', 2],
  ['energy from the sun and the wind', 'renewable', 'energy', 2], ['water, forests and minerals from nature', 'natural', 'resources', 2], ['the height of the sea', 'sea', 'level', 2],
  ['the gas that trees take in', 'carbon', 'dioxide', 2], ['long-term changes in the weather of the planet', 'climate', 'change', 2],
  ['an animal or plant that may disappear', 'endangered', 'species', 1], ['the natural home of an animal', 'natural', 'habitat', 1], ['how well animals are treated', 'animal', 'welfare', 1],
  ['an illness of the heart', 'heart', 'disease', 5], ['how long a person can expect to live', 'life', 'expectancy', 5], ['a healthy mix of different foods', 'balanced', 'diet', 5],
  ['quick, tasty but unhealthy food', 'junk', 'food', 5], ['sport you do at the same times every week', 'regular', 'exercise', 5], ['moving your body and doing things', 'physical', 'activity', 5],
  ['a way of living that protects your health', 'healthy', 'lifestyle', 5], ['a very bad medical problem', 'serious', 'illness', 5], ['adverts to make people buy or change', 'advertising', 'campaign', 5],
  ['a day for celebrating, like a wedding', 'special', 'occasion', 4], ['customs passed from parents to children', 'family', 'tradition', 4]
];
const FRUITS = ['🍓', '🍊', '🍋', '🍇', '🍍', '🥭', '🍑', '🍒', '🍉', '🫐', '🥝', '🍎'];

window.PLAY = { CASES, JUICE, FRUITS };
})();
