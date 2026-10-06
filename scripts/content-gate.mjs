import { readFile, readdir } from 'node:fs/promises'

const contentDir = new URL('../src/content/', import.meta.url)

async function readPortraitFiles() {
  const names = (await readdir(contentDir))
    .filter((name) => /^portrait-\d{3}\.ts$/.test(name))
    .sort()

  return Promise.all(
    names.map(async (name) => ({
      name,
      source: await readFile(new URL(name, contentDir), 'utf8'),
    })),
  )
}

/**
 * The single definition of "every portrait in the series has a real source".
 * Shared by the local content check and the production publish guard so the
 * rule cannot drift between them. Anything in here blocks a production build.
 */
export async function collectContentFailures() {
  const files = await readPortraitFiles()
  const failures = []

  if (files.length === 0) {
    failures.push('no src/content/portrait-NNN.ts files were found')
  }

  for (const { name, source } of files) {
    if (!source.includes("status: 'verified-exact-source'")) {
      failures.push(`${name}: status is not verified-exact-source`)
    }
    if (!extractTemplateLiteral(source, 'originalPrompt')?.trim()) {
      failures.push(`${name}: the exact original prompt is empty`)
    }
    if (!extractTemplateLiteral(source, 'rawResponse')?.trim()) {
      failures.push(`${name}: the exact machine response is empty`)
    }
  }

  failures.push(...(await collectRoleFailures(files)))

  return failures
}

/**
 * A hinge or a quote is a short line by definition. If an index in
 * `reading.ts` lands on a long paragraph, the response and the role map have
 * drifted apart and the page would set body copy as a heading.
 */
async function collectRoleFailures(files) {
  const reading = await readFile(new URL('reading.ts', contentDir), 'utf8')
  const failures = []

  for (const { name, source } of files) {
    const id = name.match(/\d{3}/)[0]
    const block = reading.match(new RegExp(`'${id}':\\s*\\{([^}]*)\\}`))
    if (!block) continue

    const paragraphs = splitParagraphs(extractTemplateLiteral(source, 'rawResponse') ?? '')
    for (const [, index, role] of block[1].matchAll(/(\d+):\s*'(hinge|quote)'/g)) {
      const paragraph = paragraphs[Number(index)]
      if (!paragraph) {
        failures.push(`reading.ts: ${id} ${role} at ${index} is past the last paragraph`)
      } else if (paragraph.length > 160) {
        failures.push(`reading.ts: ${id} ${role} at ${index} lands on a long paragraph`)
      }
    }
  }

  return failures
}

export function splitParagraphs(text) {
  return text
    .replace(/\r\n/g, '\n')
    .trim()
    .split(/\n[ \t]*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

/**
 * Read one template-literal field from a content file without executing that
 * public module. Handles escaped backticks.
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
