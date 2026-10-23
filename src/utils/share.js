/**
 * Triggers a share popup on X with the story's dedicated URL and teaser summary.
 */
export function shareStoryToX(story) {
  if (!story) return;

  const baseUrl = "https://5spicesorless.com";
  const slug = story.slug || story.id;
  const storyUrl = `${baseUrl}/stories/${slug}`;
  
  const summary = story.shortSummary || story.summary || story.excerpt || story.tagline || '';
  const text = `${story.title} — ${summary}`.trim();

  const intentUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(storyUrl)}`;

  window.open(intentUrl, "_blank", "noopener,noreferrer,width=600,height=420");
}
