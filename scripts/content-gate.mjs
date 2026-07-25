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
  const [sourceFile, readingFile] = await readContentFiles()

  const failures = []

  if (!sourceFile.includes("status: 'verified-exact-source'")) {
    failures.push('source status is not verified-exact-source')
  }

  if (/originalPrompt:\s*(''|``)/.test(sourceFile)) {
    failures.push('the exact original prompt is empty')
  }

  if (/rawResponse:\s*(''|``)/.test(sourceFile)) {
    failures.push('the exact machine response is empty')
  }

  if (/portraitSections:\s*PortraitSection\[\]\s*=\s*\[\s*\]/s.test(readingFile)) {
    failures.push('portrait sections have not been mapped')
  }

  return failures
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
