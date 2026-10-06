import { spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

/**
 * Renders scripts/og.html to public/og-image.png (1200 × 630) with headless
 * Chrome, so the share card uses the page's fonts and the same record data.
 * Set CHROME_PATH if Chrome is not at the default Windows location.
 */
const chrome =
  process.env.CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe'

if (!existsSync(chrome)) {
  console.error(`Chrome not found at ${chrome}. Set CHROME_PATH.`)
  process.exit(1)
}

const here = (path) => fileURLToPath(new URL(path, import.meta.url))
const record = readFileSync(here('../src/content/record.ts'), 'utf8')
const days = record.match(/changesPerDay: number\[\] = (\[[^\]]*\])/)?.[1]
if (!days) {
  console.error('Could not read changesPerDay from src/content/record.ts.')
  process.exit(1)
}

const work = mkdtempSync(join(tmpdir(), 'florivula-og-'))
const page = join(work, 'og.html')
writeFileSync(page, readFileSync(here('./og.html'), 'utf8').replace('__CHANGES_PER_DAY__', days))

const output = here('../public/og-image.png')
const result = spawnSync(
  chrome,
  [
    '--headless=new',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    `--user-data-dir=${join(work, 'profile')}`,
    '--window-size=1200,630',
    '--virtual-time-budget=6000',
    `--screenshot=${output}`,
    pathToFileURL(page).href,
  ],
  { timeout: 60_000 },
)

rmSync(work, { recursive: true, force: true })

if (result.status !== 0) {
  console.error('OG render failed.', result.error ?? result.stderr?.toString())
  process.exit(1)
}

console.log('Generated public/og-image.png (1200 × 630).')
