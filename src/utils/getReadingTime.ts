/**
 * Calculate reading time for a given text
 * Uses 200 words per minute as average reading speed
 */
export function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  
  const minStr = minutes === 1 ? "1 min read" : `${minutes} min read`;
  return `${minStr} · ${words.toLocaleString()} words`;
}
