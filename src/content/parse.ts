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

export function presentEditorialText(value: string): string {
  return value
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/^\s*[-*]\s+/gm, '• ')
}

