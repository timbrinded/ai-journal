/**
 * Calculate reading time for a given text
 * Uses 200 words per minute as average reading speed
 */
export function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  
  if (minutes === 1) {
    return "1 min read";
  }
  return `${minutes} min read`;
}
