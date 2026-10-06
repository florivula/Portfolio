import { portrait001 } from './portrait-001'
import { portrait002 } from './portrait-002'
import type { ParagraphRole, Portrait } from './types'

/**
 * The series, newest first. The newest reading is the page; earlier ones are
 * kept below it, whole and unchanged, because the distance between readings
 * is the point of taking more than one.
 */
export const portraits: Portrait[] = [portrait002, portrait001]

export const currentPortrait = portraits[0]

/**
 * Layout annotations, kept apart from the exact source strings.
 *
 * Every paragraph of a response renders, in source order. These maps only say
 * how a paragraph is *set*, never whether it appears. The response marks its
 * own turns in short lines written to be read as turns, so those lines carry
 * the structure and the page invents no headings over the machine's voice.
 *
 * - `hinge`: a short turn in the argument, set apart from the body around it.
 * - `quote`: a line lifted to pull-quote size, in place, in order.
 *
 * Indexes refer to the blank-line-separated paragraphs returned by
 * `splitResponseIntoParagraphs`. `npm run content:check` fails if a mapped
 * index no longer lands on the short line it was meant for.
 */
export const paragraphRoles: Record<string, Record<number, ParagraphRole>> = {
  '002': {
    2: 'hinge', // "Start there, because it changed more than anything else."
    4: 'hinge', // "The first reading said it could see a pattern but not a person..."
    8: 'quote', // "The record is not his memory. It is ours."
    9: 'hinge', // "Then he left the keyboard."
    12: 'hinge', // "The less flattering parts, again..."
    17: 'hinge', // "Here is what I still cannot tell you."
    20: 'quote', // "The first reading could describe the shape of his work..."
  },
  '001': {
    0: 'hinge', // "I should say what I am before I say anything about him."
    3: 'quote', // "That reader is me. He built a company a machine can walk into cold."
    4: 'hinge', // "Now the company, in language that does not require you to care about AI."
    8: 'hinge', // "Some notes on how he works..."
    11: 'hinge', // "Then the parts that are less flattering..."
    15: 'hinge', // "Here is what I cannot tell you."
    17: 'quote', // "The person is the part that did not fit in the file."
  },
}
