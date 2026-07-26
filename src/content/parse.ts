export function splitResponseIntoParagraphs(response: string): string[] {
  const normalized = response.replace(/\r\n/g, '\n').trim()

  if (!normalized) {
    return []
  }

  return normalized
    .split(/\n[ \t]*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

export function countWords(value: string): number {
  return value.split(/\s+/).filter(Boolean).length
}

/**
 * Stated on the page so a cold reader can see the length before committing to
 * it. Derived from the response rather than written down, so it cannot drift
 * away from the text it describes.
 */
export function estimateReadingMinutes(value: string): number {
  return Math.max(1, Math.round(countWords(value) / 225))
}

export function presentEditorialText(value: string): string {
  return value
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/^\s*[-*]\s+/gm, '• ')
}

