import { readFile } from 'node:fs/promises'

/**
 * The single definition of "the exact source has been supplied".
 * Shared by the local content check and the production publish guard so the
 * rule cannot drift between them.
 */
export async function collectContentFailures() {
  const sourcePath = new URL('../src/content/source.ts', import.meta.url)
  const readingPath = new URL('../src/content/reading.ts', import.meta.url)

  const [sourceFile, readingFile] = await Promise.all([
    readFile(sourcePath, 'utf8'),
    readFile(readingPath, 'utf8'),
  ])

  const failures = []

  if (!sourceFile.includes("status: 'verified-exact-source'")) {
    failures.push('source status is not verified-exact-source')
  }

  if (/originalPrompt:\s*''/.test(sourceFile)) {
    failures.push('the exact original prompt is empty')
  }

  if (/rawResponse:\s*''/.test(sourceFile)) {
    failures.push('the exact Claude response is empty')
  }

  if (/portraitSections:\s*PortraitSection\[\]\s*=\s*\[\s*\]/s.test(readingFile)) {
    failures.push('portrait sections have not been mapped')
  }

  if (/secondReadNotes:\s*SecondReadNote\[\]\s*=\s*\[\s*\]/s.test(readingFile)) {
    failures.push('Codex second-read notes have not been written')
  }

  return failures
}
