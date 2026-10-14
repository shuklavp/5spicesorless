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
    illustrationCaption: '',
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

1. Concrete Goals: Dreams are necessary, but leaving them as vague daydreams leads nowhere. You must have the courage to write them down as concrete, grounded goals.

2. The Right Partners: The people who sit across the table from you determine the trajectory of your journey. Having genuine partners who wish you well is an irreplaceable gift.

3. The Humility to Accept Help: Perhaps most vital of all, one must possess the humility to accept help.

Too many capable people recognise their own deficiencies yet refuse to speak up, suffering in silence. Others allow pride and ego to swat away honest assistance when it is extended. Both impulses are tragic mistakes. Acknowledging that you cannot do everything alone, and accepting a generous hand to bridge your gaps, is not weakness. It is the very foundation upon which a lasting life is built.`
  },
{
    id: 'the-art-of-the-blank-page',
    slug: 'the-art-of-the-blank-page',
    title: "The Art of the Blank Page",
    subtitle: "Why entering unfamiliar rooms without preconceived notions changes how you build, and how listening to ground reality beats corporate dogma.",
    category: 'Work',
    subCategory: "Operating & Perspective",
    tags: ["Startups", "EarlyCareer", "ConsumerPsychology", "Simplification", "Listening"],
    readTime: '5 min read',
    date: 'October 2026',
    author: 'Vivek Shukla',
    leadQuote: "The moment you enter a discussion convinced of what the other person is going to say, you stop listening to them. You are only listening to your own echo.",
    illustration: '/illustrations/art-of-the-blank-page.png',
    illustrationDark: '/illustrations/art-of-the-blank-page-dark.png',
    illustrationCaption: '',
    image1Position: 'top',
    showTakeaways: false,
    takeawaysPosition: 'top',
    takeaways: [],
    markdownBody: `My late father had a favourite saying that he would share whenever he saw me preparing for an event, an exam, or a discussion. I must have been preparing for something at home when he first shared it, though I do not recall the exact occasion. 

He looked at me and said quietly: 

> "Never go into any meeting or discussion with preconceived notions. Leave your assumptions outside the door. If your mind is already full before you sit down, you will hear only what you expect to hear, not what is actually being said."

At the time, it sounded like a simple piece of paternal wisdom. It was only years later, navigating the fast-moving corporate corridors of the internet sector, that I realised how profound that counsel truly was.

### Bringing the Shop Floor to the Screen

When I joined TimesJobs in early 2006, the digital world was modern, dynamic, and free-flowing. 

It was completely new terrain for me, and I had an enormous amount to absorb. Yet, I was not arriving with an empty head. Since 1995, while still at university, I had run a retail PC business. That experience was my true foundation. Behind a retail counter, you do not deal in abstract theories. You deal with living, breathing consumer psychology. You see the hesitation in a customer’s eyes, the awkwardness of asking about price, and how easily even the smallest bit of friction can cause someone to turn around and walk out the door.

Many in the corporate world arrived with preconceived notions of how an online portal should behave. They treated digital recruitment like an elite software exercise, assuming users would sit at desktop computers with high-speed connections and patiently navigate complicated forms.

Remembering my father’s advice, I tried to look at the room without those assumptions.

In India at that time, millions of jobseekers did not own personal computers, but they carried basic mobile handsets in their pockets. Instead of trying to force them onto web pages they could not access, we launched TimesJobs on Mobile using 8888 SMS short codes. By meeting people where they actually were, rather than where the corporate plan wished them to be, we unlocked an entirely new audience.

### Stripping Away the Toppings

In September 2006, when I took over at JobStreet India, the portal was registering a modest trickle of forty to fifty resume sign-ups a day.

The conventional corporate diagnosis for low traffic is almost always to add more: add more features, add more banners, run expensive marketing campaigns, or add more mandatory fields to capture candidate data. In cooking, when a sauce lacks depth, an amateur keeps tossing in extra toppings and spices to mask the dish. 

We took the opposite approach. We anchored everything in simplification.

We sat down and looked at the candidate’s journey with a completely blank page, asking elementary questions rooted in basic psychology: Why are we asking someone for ten pages of career history before we have shown them a single relevant job? Why are we creating barriers when our only goal is to welcome them in?

We stripped away the clutter. We removed the unnecessary toppings, simplified the sign-up flow to its bare essentials, and focused entirely on candidate trust and speed. 

Within months, that quiet portal went from forty or fifty daily registrations to over 15,000 resume sign-ups every single day. We did not achieve that by being the loudest voice in the market. We achieved it by removing friction and listening to how ordinary people actually behaved.

### The Power of the Empty Notebook

Most professional mistakes do not happen because people lack intelligence. They happen because people walk into rooms determined to prove what they already know.

We enter discussions with scripts rehearsed to the syllable. We enter new markets burdened by the habits of our previous jobs. We assume we understand our customers without ever watching them try to complete a simple task on a screen.

My father’s principle was an exercise in mental discipline. It meant having the quiet confidence to arrive with a blank page:

1. It changes your posture: You stop waiting for your turn to speak and start observing the unspoken hesitations that reveal what people really want.

2. It keeps you humble: When you admit that you do not have all the answers, you become curious enough to notice the ground truths that everyone else takes for granted.

3. It makes room for clarity: You realise that growth rarely comes from piling on more complexity. It comes from having the nerve to strip away the noise until only what is vital remains.

Connected Note: Before learning to read consumer psychology across digital screens, the habit of quiet observation first began over magazines and library tables. Read [The Teak Tables Above Mayfair](/stories/teak-tables-above-mayfair), on how books, patience, and shedding ego shaped those early years in Lucknow.`
  }
];
