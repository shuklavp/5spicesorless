// src/data/essays.js
// Single source of truth for all published essays and stories.
// STRICT INVARIANT: Only active published stories belong here. All placeholder stories are removed.
// Strict British English mandate: -ise, -our, pre-authorisation, no em-dashes.

export const ESSAYS_DATA = [
  {
    id: 'tea',
    slug: 'tea',
    title: "Anything can happen over a hot cup of tea!",
    subtitle: "For some, tea is addiction. For a lot of others', it's an emotion.",
    category: 'Food',
    subCategory: "Recipes (Five Spices or Fewer)",
    tags: ["Tea", "Chai", "Lucknow", "Ritual"],
    readTime: '5 min read',
    date: 'October 2026',
    author: 'Vivek Shukla',
    leadQuote: "Feeling sad, have tea. Feeling happy, have tea. Feeling nothing, have tea. There's nothing which can't be fixed by a hot cup of tea.",
    illustration: '/illustrations/village-courtyard.png',
    illustrationDark: '/illustrations/village-courtyard-dark.png',
    illustrationCaption: '',
    secondaryImage: '/illustrations/chai-setup.png',
    secondaryImageDark: '/illustrations/chai-setup-dark.png',
    secondaryCaption: '',
    image1Position: 'top',
    image2Position: 'bottom',
    showTakeaways: false,
    takeawaysPosition: 'top',
    takeaways: [],
    markdownBody: `As children, we were allowed tea only when we visited our ancestral village during Dussehra or the winter holidays. My mother always warned us that drinking tea would darken our complexion. My grandmother, thankfully, subscribed to no such superstition.

On those crisp winter mornings, our large extended family would gather in the sunlit courtyard to have a simple breakfast of parathas and chai. Some of us sat on the woven charpai, while others huddled on low wooden stools around it. The parathas arrived from the kitchen in an endless relay, vanishing almost as quickly as they were served, while a generous kettle kept refilling our cups again and again. It was in stark contrast to the quiet discipline of our home in town, and I cannot recall a more satisfying breakfast in all my life. That was where my quiet love affair with tea began.

The crossing from university into adulthood was faithfully sustained by chai. In Hindi, there is an old idiom: “Ghat-ghat ka paani peena” (to drink water from many river banks), describing someone who has gathered deep worldly wisdom by travelling widely and dealing with all manner of folk and circumstance. For those of us who grew up in Lucknow, water was simply replaced by chai. You did not measure a man’s journey by the wells he had visited, but by the tea stalls where he had lingered.

My first genuine culinary heartbreak arrived when I moved south to Bangalore circa 2004. In those years, the city ran almost exclusively on filter coffee, and tea culture was virtually non-existent. For the better part of a year, finding a decent cup was an exercise in futility. Living in rented lodgings without a kitchen of my own only made matters worse, as brewing my own tea was out of the question.

### The Brew That Sealed an Investment

A decade later, in 2014, when we were laying the early foundations of SmarterHomes, I received an unexpected phone call from a British gentleman named Max. We spoke at length about our smart water meter and startups in general. Within two months, he flew to Bangalore to meet us in person.

We were sitting in our modest, bare-bones office when I casually asked if he would care for a cup of tea. He accepted. I made a fresh pot for all of us. After that first sip, the pot never quite left the burner.

A month later, Max invited us to London. We gathered at his home alongside a small circle of friends. Whilst we were finishing our discussion and getting ready for the next meeting, Max smiled and announced to the room: “Gents, Vivek makes wonderful tea.”

So I stepped into his kitchen and put the sauce pan on. Through that single ritual, we met our first overseas investor, a gentleman who proved just as devoted to the brew as he was to our business. That summer, while staying at a nearby flat in London, both of them would arrive at my door first thing in the morning, waiting patiently by the counter with an unhurried smile, ready for the day's first pot.

### The Recipe: A Two-Cup Morning Brew

Anyone can brew a decent cup of tea, and nearly everyone carries their own quiet dogma about how it ought to be prepared. My own preference leans towards depth, warmth, and restraint: a balanced marriage of strong leaf, whole milk, crushed root ginger, and just enough sweetness to soften the edges.

*Yield: 2 cups (approximately 180 ml each)*

1. The Water: Pour 2 cups of fresh water into a small, heavy saucepan and bring it to a rolling boil over a steady flame (a detail obvious to all, yet occasionally forgotten in haste).

2. The Root: Take an inch-cube of fresh ginger. Crush it firmly in a mortar and pestle rather than grating it. Grating bruises the fibres and turns the liquid harsh, while crushing releases the fragrant oils and juice cleanly without bitterness.

3. The Infusion: Add the crushed ginger into the simmering water. Allow it to bubble for a minute or two, long enough to impart its warmth, but not so long that the spice overpowers the liquor.

4. The Leaf: Lower the heat slightly and add 1 heaped teaspoon of robust CTC tea leaf (Tata Tea Gold or Brooke Bond Taj Mahal are my staples).

5. The Varanasi Secret (Sugar at the Boil): Add two small teaspoons of sugar while the liquor is actively boiling. Years ago, while sipping tea at dawn near the ghats in Varanasi, I had the good fortune of meeting a chemistry professor from Banaras Hindu University. Over steaming cups, he gave me a rigorous scientific breakdown of caramelisation and molecular extraction to explain why sugar must dissolve while the tea leaves are boiling, rather than stirred in at the end. I could not follow the chemical equations then, and I do not pretend to comprehend them now. But I trust the man implicitly, and the cup has never lied.

6. The Milk and The Colour: After a minute of simmering, pour in 1 cup of whole milk. Bring the pot back to a gentle, rising boil. Let the froth crest once or twice, lowering the heat just before it spills, until the surface settles into a warm, toasted golden hue that is neither milky pale nor astringently dark.

7. The Pour: Strain into two warm cups. Enjoy it piping hot in the company of someone whose presence you cherish. And if you are alone, let the second cup keep you company.`,
  },
  {
    id: 'teak-tables-above-mayfair',
    slug: 'teak-tables-above-mayfair',
    title: "The Teak Tables Above Mayfair",
    subtitle: "How a library in Hazratganj, a green BMW, and accepting help transformed a quiet boy from Lucknow.",
    category: 'Life',
    subCategory: "Perspective & Human Bonds",
    tags: ["Lucknow", "Books", "Ambition", "Hazratganj", "Gratitude"],
    readTime: '6 min read',
    date: 'October 2026',
    author: 'Vivek Shukla',
    leadQuote: "Accepting help to mend your deficiencies requires shedding your ego. It is often the single decision that alters the course of a life.",
    illustration: '/illustrations/british-library-lucknow.png',
    illustrationDark: '/illustrations/british-library-lucknow-dark.png',
    illustrationCaption: 'The reading room of the British Library above Mayfair Cinema, Hazratganj.',
    secondaryImage: '/illustrations/quiet-goal-notebook.png',
    secondaryImageDark: '/illustrations/quiet-goal-notebook-dark.png',
    secondaryCaption: 'A quiet goal written down in 1997.',
    image1Position: 'top',
    image2Position: 'bottom',
    showTakeaways: false,
    takeawaysPosition: 'top',
    takeaways: [],
    markdownBody: `Growing up in Lucknow, my horizon was remarkably simple. I did not spend my boyhood harbouring sweeping ambitions or grand designs for the future. Like most boys around me, life was understood simply as a sequence of prescribed gates: pass the tenth standard, clear the twelfth, enter university, and then secure whatever sensible livelihood presented itself. The horizon ended at the next examination.

My world changed entirely when I walked up the stairs to the British Library in Hazratganj, situated just above Mayfair Cinema.

To a boy accustomed to modest classrooms with peeling distemper, that room felt like another country. It had bright white lights, smooth teak tables, comfortable chairs, and neat rows of international periodicals and books. It was orderly, cool, and quiet in a way that commanded immediate respect.

It was there that my lifelong fascination with motorcars quietly took root. Leafing through a copy of Autocar, I stumbled upon a two-page spread featuring a BMW 850 in deep British green. I had never seen anything so striking. I stared at that page for what felt like hours, unaware until that afternoon that objects of such refined engineering even existed.

That single afternoon unlocked an insatiable curiosity. I began reading voraciously: philosophy, technology, enterprise, and social history. I read almost everything the library held, with the solitary exception of my official degree subjects: Zoology, Botany, and Chemistry. The prescribed syllabus felt dry, but the world waiting on those teak tables was alive. I held onto that membership faithfully until 2001, when the library finally closed its doors.

### Conversations Across the Table

The library was also, by a comfortable margin, the finest place in the city to meet my girlfriend.

I came from a Hindi-medium school. While my written English and formal grammar were solid, my conversational speech was halting and awkward. The vocabulary was locked in my head, yet forming spontaneous sentences aloud felt intimidating. She, on the other hand, had studied at one of the finest schools in Lucknow. Her English was natural, fluent, and unforced.

Instead of condescension, she offered patience. Across those library tables and on quiet walks through the Ganj, she listened to my clumsy phrasing and gently helped me find the right words. She created a safe space where I could speak without embarrassment.

With every passing month, the dual discipline of reading broad books and speaking without hesitation expanded my mind. I began to look outwards beyond the familiar contours of home, daring to imagine that I too could build something worthwhile.

### A Notebook in 1997

Around 1997, prompted by an observation in a book that every person ought to set a conscious direction for their life, I sat down with a piece of paper. I did not draft a complex scheme. I wrote a single, quiet sentence:

> I want to generate employment for 100 people in my life, and make a positive difference to them.

It took years of trial, missteps, and relentless effort, but that quiet sentence eventually became reality.

### The Wisdom of Subtraction: Asking for Help

Looking back across thirty years, three simple truths remain clear:

First, dreams are necessary, but leaving them as vague daydreams leads nowhere. You must have the courage to write them down as concrete, grounded goals.

Second, the people who sit across the table from you determine the trajectory of your journey. Having genuine partners who wish you well is an irreplaceable gift.

Third, and perhaps most vital: one must possess the humility to accept help.

Too many capable people recognise their own deficiencies yet refuse to speak up, suffering in silence. Others allow pride and ego to swat away honest assistance when it is extended. Both impulses are tragic mistakes. Acknowledging that you cannot do everything alone, and accepting a generous hand to bridge your gaps, is not weakness. It is the very foundation upon which a lasting life is built.`
  }
];
