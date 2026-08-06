import { readFile } from 'node:fs/promises'

async function readContentFiles() {
  const sourcePath = new URL('../src/content/source.ts', import.meta.url)
  const readingPath = new URL('../src/content/reading.ts', import.meta.url)

  return Promise.all([
    readFile(sourcePath, 'utf8'),
    readFile(readingPath, 'utf8'),
  ])
}

/**
 * The single definition of "the portrait has a real source".
 * Shared by the local content check and the production publish guard so the
 * rule cannot drift between them. Anything in here blocks a production build.
 */
export async function collectContentFailures() {
  const [sourceFile] = await readContentFiles()

  const failures = []

  if (!sourceFile.includes("status: 'verified-exact-source'")) {
    failures.push('source status is not verified-exact-source')
  }

  const originalPrompt = extractTemplateLiteral(sourceFile, 'originalPrompt')
  if (!originalPrompt?.trim()) {
    failures.push('the exact original prompt is empty')
  }

  const rawResponse = extractTemplateLiteral(sourceFile, 'rawResponse')
  if (!rawResponse?.trim()) {
    failures.push('the exact machine response is empty')
  }

  return failures
}

/**
 * Read one template-literal field from source.ts without executing that public
 * content module. Handles escaped backticks, unlike the old empty-string regex.
 */
export function extractTemplateLiteral(source, field) {
  const marker = `${field}:`
  const markerIndex = source.indexOf(marker)
  if (markerIndex < 0) return null

  const start = source.indexOf('`', markerIndex + marker.length)
  if (start < 0) return null

  for (let i = start + 1; i < source.length; i++) {
    if (source[i] !== '`') continue
    let slashes = 0
    for (let j = i - 1; j >= 0 && source[j] === '\\'; j--) slashes++
    if (slashes % 2 === 0) return source.slice(start + 1, i)
  }
  return null
}

/**
 * Not blocking. The second-read annotations are a different model's authorship,
 * so their absence is an incomplete page, not an empty one. The tab hides
 * itself until they exist.
 */
export async function collectOptionalGaps() {
  const [, readingFile] = await readContentFiles()

  const gaps = []

  if (/secondReadNotes:\s*SecondReadNote\[\]\s*=\s*\[\s*\]/s.test(readingFile)) {
    gaps.push(
      'Codex second-read notes are unwritten, so that reading mode is hidden',
    )
  }

  return gaps
}
