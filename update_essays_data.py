with open('src/data/essays.js', 'r') as f:
    content = f.read()

# 1. waking-up-declared-dead
old1 = """    category: 'Life',
    tags: ['Perspective', 'Survival', 'Habits', 'Lucknow'],"""
new1 = """    category: 'Life',
    subCategory: 'Health & Recovery',
    tags: ['Perspective', 'Survival', 'Habits', 'Lucknow'],
    illustration: '/footer-journal-chai.png',
    illustrationCaption: 'Architectural sketch: Vintage fountain pen and Lakhnawi cutting chai',"""

# 2. category-creation-water-exit
old2 = """    category: 'Work',
    tags: ['Category Creation', 'IoT', 'Governance', 'Operations'],"""
new2 = """    category: 'Work',
    subCategory: 'Startups & Category Creation',
    tags: ['Category Creation', 'IoT', 'Governance', 'Operations'],
    illustration: '/footer-drafting-tools.png',
    illustrationCaption: 'Architectural sketch: Precision drafting instruments over blueprints',"""

# 3. the-deal-that-failed-max-kelly
old3 = """    category: 'Work',
    tags: ['Mentorship', 'Venture Capital', 'Governance', 'Resilience'],"""
new3 = """    category: 'Work',
    subCategory: 'Fundraising & Investors',
    tags: ['Mentorship', 'Venture Capital', 'Governance', 'Resilience'],
    illustration: '/footer-chess-compass.png',
    illustrationCaption: 'Architectural sketch: Hand-carved chess pieces and brass pocket compass',"""

# 4. food-and-the-five-spices
old4 = """    category: 'Food',
    tags: ['Five Spices', 'Awadhi Cooking', 'Technique', 'Kitchen Physics'],"""
new4 = """    category: 'Food',
    subCategory: 'Technique & Heat Control',
    tags: ['Five Spices', 'Awadhi Cooking', 'Technique', 'Kitchen Physics'],
    illustration: '/footer-kadai-spices.png',
    illustrationCaption: 'Architectural sketch: Cast-iron kadai, wooden spoon, and whole spices',"""

# 5. the-blue-skoda-story
old5 = """    category: 'Fiction',
    tags: ['Short Story', 'Road Trip', 'Perspective', 'Grand Trunk Road'],"""
new5 = """    category: 'Fiction',
    subCategory: 'Road Chronicles',
    tags: ['Short Story', 'Road Trip', 'Perspective', 'Grand Trunk Road'],
    illustration: '/footer-typewriter.png',
    illustrationCaption: 'Architectural sketch: Vintage manual typewriter and fresh parchment',"""

# 6. hiring-without-hype
old6 = """    category: 'Work',
    tags: ['Hiring', 'Startups', 'Operational Discipline', 'Culture'],"""
new6 = """    category: 'Work',
    subCategory: 'Hiring & People',
    tags: ['Hiring', 'Startups', 'Operational Discipline', 'Culture'],
    illustration: '/footer-cairn-stones.png',
    illustrationCaption: 'Architectural sketch: Balanced river stones representing patient foundation',"""

for old, new in [(old1, new1), (old2, new2), (old3, new3), (old4, new4), (old5, new5), (old6, new6)]:
    assert old in content, f'Failed to find {old[:30]}'
    content = content.replace(old, new)

with open('src/data/essays.js', 'w') as f:
    f.write(content)

print('essays.js enriched with subCategory and illustrations!')
