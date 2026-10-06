export type SourceStatus = 'awaiting-exact-source' | 'verified-exact-source'

export interface SourceCondition {
  key: string
  value: string
}

/**
 * One reading in the series: a prompt Flori typed and the response a model
 * returned to it. Both strings are the exhibit and are never edited.
 */
export interface Portrait {
  id: string
  status: SourceStatus
  capturedAt: string
  /** ISO date of the capture, for ordering and for the record chart. */
  capturedOn: string
  model: string
  conditions: SourceCondition[]
  originalPrompt: string
  rawResponse: string
}

/**
 * How a single paragraph of a response is set.
 *
 * A role only changes the typography. It can never reorder, drop or shorten a
 * paragraph: the reading walks the response from the first paragraph to the
 * last and renders all of them, whatever the role map says. Anything unmapped
 * is body copy.
 */
export type ParagraphRole = 'hinge' | 'quote'
