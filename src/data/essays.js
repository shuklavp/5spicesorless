// Automatically import all story json files from src/content/stories
const storyModules = import.meta.glob('../content/stories/*.json', { eager: true });

export const essays = Object.values(storyModules).map((mod) => mod.default || mod);
export const ESSAYS_DATA = essays;

export const getStoryBySlug = (slug) => {
  return essays.find((story) => story.slug === slug);
};

export const getStoriesByDesk = (desk) => {
  return essays.filter((story) => story.desk?.toLowerCase() === desk?.toLowerCase());
};

export default essays;