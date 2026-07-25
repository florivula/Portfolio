import type { PortraitSection, SecondReadNote } from './types'

/**
 * Layout annotations live separately from the exact source strings.
 * Paragraph indexes refer to the blank-line-separated paragraphs returned by
 * `splitResponseIntoParagraphs`.
 *
 * Two paragraphs are mapped as pull quotes instead of body copy (3 and 17), and
 * two are pure transitions the section headings already do (4 and 8). Both are
 * layout decisions. Nothing here edits the source, and the raw response mode
 * always shows every paragraph in order.
 */
export const portraitSections: PortraitSection[] = [
  {
    id: 'provenance',
    label: 'Provenance',
    title: 'What is writing this.',
    paragraphIndexes: [0, 1, 2],
    pullQuote:
      'That reader is me. He built a company a machine can walk into cold.',
  },
  {
    id: 'company',
    label: 'The company',
    title: 'What he is actually building.',
    paragraphIndexes: [5, 6],
  },
  {
    id: 'evidence',
    label: 'Evidence',
    title: 'He ran it on himself first.',
    paragraphIndexes: [7],
  },
  {
    id: 'method',
    label: 'Method',
    title: 'How the work gets done.',
    paragraphIndexes: [9, 10],
  },
  {
    id: 'friction',
    label: 'Friction',
    title: 'The parts that are less flattering.',
    paragraphIndexes: [11, 12, 13],
  },
  {
    id: 'timing',
    label: 'Timing',
    title: 'The company came second.',
    paragraphIndexes: [14],
  },
  {
    id: 'limit',
    label: 'Limit',
    title: 'What I cannot see.',
    paragraphIndexes: [15, 16],
    pullQuote: 'The person is the part that did not fit in the file.',
  },
  {
    id: 'closing',
    label: 'Closing',
    title: 'The short version.',
    paragraphIndexes: [18],
  },
]

/**
 * Deliberately empty. These annotations are a second model reading the first
 * model's claims, so writing them here as Claude would be a false authorship
 * claim. A Codex session on this repository fills this array; the second-read
 * tab appears on its own the moment it is not empty.
 */
export const secondReadNotes: SecondReadNote[] = []
