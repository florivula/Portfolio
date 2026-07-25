import { collectContentFailures } from './content-gate.mjs'

/**
 * Production publishes are blocked while the exact Claude source is missing.
 * Preview deployments still build, so the shell can be reviewed before the
 * source exists. The only way past this guard is to supply the source.
 */
if (process.env.VERCEL_ENV !== 'production') {
  process.exit(0)
}

const failures = await collectContentFailures()

if (failures.length === 0) {
  process.exit(0)
}

console.error('Production build stopped: the machine portrait has no source material yet.')
failures.forEach((failure) => console.error(`- ${failure}`))
console.error('')
console.error('florivula.com has been left on its current deployment on purpose.')
console.error('Publishing now would show "the machine’s answer has not been supplied yet"')
console.error('where the portrait should be.')
console.error('')
console.error('To publish: paste the exact prompt and response into src/content/source.ts,')
console.error("set status to 'verified-exact-source', map the sections in")
console.error('src/content/reading.ts, then push again.')
process.exit(1)
