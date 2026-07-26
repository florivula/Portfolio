import { secondReadNotes } from './reading'
import type { ReadingMode } from './types'

export interface ModeDefinition {
  id: ReadingMode
  label: string
  description: string
}

const allModes: ModeDefinition[] = [
  {
    id: 'portrait',
    label: 'Portrait',
    description: 'The response, set as a reading',
  },
  {
    id: 'second-read',
    label: 'Second read',
    description: "Codex's annotations and friction",
  },
  {
    id: 'raw-response',
    label: 'Raw response',
    description: 'The same text, unformatted',
  },
]

/**
 * The second reading is a second model's authorship. It stays out of the page
 * until those annotations actually exist, rather than offering an empty one.
 */
export const availableModes: ModeDefinition[] = allModes.filter(
  (mode) => mode.id !== 'second-read' || secondReadNotes.length > 0,
)
