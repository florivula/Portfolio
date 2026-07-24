import { collectContentFailures } from './content-gate.mjs'

const failures = await collectContentFailures()

if (failures.length > 0) {
  console.error('Content gate failed:')
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exitCode = 1
} else {
  console.log('Content gate passed.')
}
