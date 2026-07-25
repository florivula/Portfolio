import { collectContentFailures, collectOptionalGaps } from './content-gate.mjs'

const [failures, gaps] = await Promise.all([
  collectContentFailures(),
  collectOptionalGaps(),
])

if (failures.length > 0) {
  console.error('Content gate failed:')
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exitCode = 1
} else {
  console.log('Content gate passed.')
}

gaps.forEach((gap) => console.log(`note: ${gap}`))
