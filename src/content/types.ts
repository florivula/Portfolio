export type SourceStatus = 'awaiting-exact-source' | 'verified-exact-source'

export type ReadingMode = 'portrait' | 'second-read' | 'raw-response'

export type EvidenceKind = 'observed' | 'inferred' | 'unknown'

export interface SourceCondition {
  key: string
  value: string
}

export interface SourceMaterial {
  status: SourceStatus
  capturedAt: string
  model: string
  conditions: SourceCondition[]
  originalPrompt: string
  rawResponse: string
}

/**
 * How a single paragraph of the response is set.
 *
 * A role only changes the typography. It can never reorder, drop or shorten a
 * paragraph: the reading walks the response from the first paragraph to the
 * last and renders all of them, whatever this map says. Anything unmapped is
 * body copy.
 */
export type ParagraphRole = 'hinge' | 'quote'

export interface SecondReadNote {
  id: string
  paragraphIndex: number
  kind: EvidenceKind
  claim: string
  note: string
}
