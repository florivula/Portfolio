import test from 'node:test'
import assert from 'node:assert/strict'
import { extractTemplateLiteral } from './content-gate.mjs'

test('extracts a populated template-literal field', () => {
  const source = 'originalPrompt: `a real prompt`,\nrawResponse: `answer`,'
  assert.equal(extractTemplateLiteral(source, 'originalPrompt'), 'a real prompt')
})

test('does not end at an escaped backtick', () => {
  const source = "rawResponse: `the \\`quoted\\` word`,"
  assert.equal(extractTemplateLiteral(source, 'rawResponse'), 'the \\`quoted\\` word')
})

test('returns null for a missing or unterminated field', () => {
  assert.equal(extractTemplateLiteral('rawResponse: `unfinished', 'rawResponse'), null)
  assert.equal(extractTemplateLiteral('other: `value`', 'rawResponse'), null)
})
