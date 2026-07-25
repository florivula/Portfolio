export type SourceStatus = 'awaiting-exact-source' | 'verified-exact-source'

export type ReadingMode = 'portrait' | 'second-read' | 'raw-response'

export type EvidenceKind = 'observed' | 'inferred' | 'unknown'

export interface SourceMaterial {
  status: SourceStatus
  capturedAt: string
  originalPrompt: string
  rawResponse: string
}

export interface PortraitSection {
  id: string
  label: string
  title: string
  paragraphIndexes: number[]
  pullQuote?: string
}

export interface SecondReadNote {
  id: string
  sectionId: string
  kind: EvidenceKind
  claim: string
  note: string
}

