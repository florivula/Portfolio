import type { ParagraphRole, SecondReadNote } from './types'

/**
 * Layout annotations, kept apart from the exact source strings.
 *
 * The reading renders every paragraph of the response, in source order. This
 * map only says how a paragraph is *set*, never whether it appears — dropping
 * a paragraph from the designed view is no longer expressible here, which is
 * the point.
 *
 * Why it works this way. The first design invented eight section headings and
 * then had to skip two paragraphs, because the response's own transition lines
 * said the same thing as the headings above them. That was the wrong way round.
 * The response already marks its own turns, in short lines written to be read
 * as turns, so those lines carry the structure and the invented headings are
 * gone. Nothing on the page now speaks over the machine's own voice.
 *
 * - `hinge`: a short turn in the argument, set apart from the body around it.
 * - `quote`: a line lifted to pull-quote size, in place, in order.
 *
 * Paragraph indexes refer to the blank-line-separated paragraphs returned by
 * `splitResponseIntoParagraphs`.
 */
export const paragraphRoles: Record<number, ParagraphRole> = {
  0: 'hinge', // "I should say what I am before I say anything about him."
  3: 'quote', // "That reader is me. He built a company a machine can walk into cold."
  4: 'hinge', // "Now the company, in language that does not require you to care about AI."
  8: 'hinge', // "Some notes on how he works..."
  11: 'hinge', // "Then the parts that are less flattering..."
  15: 'hinge', // "Here is what I cannot tell you."
  17: 'quote', // "The person is the part that did not fit in the file."
}

/**
 * Deliberately empty. These annotations are a second model reading the first
 * model's claims, so writing them here as Claude would be a false authorship
 * claim. A Codex session on this repository fills this array; the second
 * reading appears on its own the moment it is not empty.
 *
 * `paragraphIndex` attaches a note to the paragraph it answers. The inline
 * presentation is provisional until real notes exist to design against.
 */
export const secondReadNotes: SecondReadNote[] = []
