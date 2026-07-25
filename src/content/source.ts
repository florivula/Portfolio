import type { SourceMaterial } from './types'

/**
 * Source integrity rule:
 * - Paste the original prompt and Claude response here without rewriting.
 * - Change the status only after both strings have been checked against the
 *   source supplied by Flori.
 * - Any necessary redaction must remain visibly marked in the string.
 */
export const sourceMaterial: SourceMaterial = {
  status: 'awaiting-exact-source',
  capturedAt: 'July 2026',
  originalPrompt: '',
  rawResponse: '',
}

