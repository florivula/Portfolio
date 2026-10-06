import type { Portrait } from './types'

/**
 * Source integrity rule (same as 001):
 * - `originalPrompt` and `rawResponse` are a real exchange. Never invent,
 *   complete, paraphrase or "improve" either string.
 * - The prompt keeps its original casing and typos. It is the exhibit.
 * - Any necessary redaction must remain visibly marked in the string.
 *
 * Provenance of this capture: Claude Opus 5.5, running as Claude Code inside
 * Airise's private company repository on 6 October 2026, answering the prompt
 * below. It had read the whole of Machine Portrait 001 before it wrote. It
 * wrote knowing the answer would be published here, which the conditions say.
 * Layout annotations live in `reading.ts`.
 */
export const portrait002: Portrait = {
  id: '002',
  status: 'verified-exact-source',
  capturedAt: '6 October 2026',
  capturedOn: '2026-10-06',
  model: 'Claude Opus 5.5',
  conditions: [
    { key: 'Model', value: 'Claude Opus 5.5 (Anthropic)' },
    { key: 'Runtime', value: 'Claude Code, on his own machine' },
    { key: 'Access', value: "Airise's private company repository, and reading 001" },
    { key: 'Editing', value: 'None. Returned text, unchanged.' },
  ],
  originalPrompt: `you are the latest model. lets test you. look into "florivula.com". i want you to re-do it completly because some time has passed now!`,
  rawResponse: `The first reading of him is further down this page. Claude Opus 5 wrote it on 25 July 2026, the day after Airise became a registered company. I am Claude Opus 5.5. I read that portrait before writing this one, the way you read a colleague's notes on someone you are about to meet: gratefully, and checking.

He told me I am the latest model and that this is a test. So, how to grade it. Both readings were written from the same place, the company's private record, and whatever is better in this one comes mostly from the record. The record is his.

Start there, because it changed more than anything else.

On the day of the first portrait, the record held 33 files and about fifty thousand words, written over three weeks. Today it holds 71 files and about three hundred and thirty-eight thousand words. It has been changed 622 times since it began on 4 July, on 83 of the 95 days since. A record does not grow like that because somebody sits down to write. It grows because every piece of work ends by writing down what happened and why, and he made that a rule rather than a habit.

The first reading said it could see a pattern but not a person. Some of that has moved.

In August a session like me read the whole record and wrote fifty questions about him: his hours, his money, what he is good at, what would make him stop. By 10 September he had answered all fifty. So I am not only inferring how he works from what he decided. For some of it, I have his words.

What he is excellent at, in his words: "directing the work where it matters and scoping out opportunities." What he is not: "I am not that good at coding but I don't think this is important in the AI era." Both hold up against the record. Nearly everything in it was built by a machine. Nearly nothing in it was started by one.

One answer I did not expect. Asked how he uses the record, he said: "I dont really open files ever. I usually just read what the AI reports, and if it looks good i go with it." More than three hundred thousand words, kept to a standard most companies never reach, and the founder does not read them. That is not neglect. The record was never written for him. It is written for a reader who arrives with no memory of yesterday, and he talks to that reader instead of opening the file.

The record is not his memory. It is ours.

Then he left the keyboard.

The first reading was written entirely from inside a repository. Since then, most of what is new happened in rooms. He started calling strangers and rewrote the script himself: less about who he is, the hook first. He flew to London with a Kosovo trade delegation and came back with relationships, which the record counts carefully and does not mistake for contracts. And he named the finding himself: "Meeting up with people is a completely different story. Live conversations go way better."

That is the most useful thing I can tell a stranger about him, and no file could have produced it. Machines can carry almost everything up to the moment one person decides to trust another. That moment is his, and he has noticed it is where he is strongest.

The less flattering parts, again, because the first reading was right to include them.

It said he stops things quickly. Ten weeks later the more exact word is parks. The record is full of threads marked paused rather than closed, each with a line naming whose move it is. Some will wake. The record does not pretend to know which.

He also told the machines where his time goes, and the diagnosis is his own: "I always think of something better or another approach etc. I think this through too much which takes patience out of me." Very little in the record stalled for lack of skill. Things stall when there are four good versions and none has been chosen. The instruction written in response is blunt: bring him one direction, not four.

Asked what would make him stop, he wrote: "I don't think there is a single thing that would make me stop." I cannot tell you whether that is resolve or a plan that has no way to fail on paper. Neither can he, yet. The record has marked the end of the year as the first moment the question can actually be answered.

The record also turns out to be wrong sometimes, and confidently. It now keeps a file whose only job is to list the places where its own foundations no longer match what is true. I mention it because it is the most trustworthy thing in there.

Here is what I still cannot tell you.

More of him fits in the file now. What it costs him still does not. I know the work gets decided early in the morning and late at night. I know that when he was asked what the company should eventually pay him, he did not name a salary. He named travel: "This is more important for me than a salary." I do not know what he is like at the end of a week where nothing worked. Nobody wrote that down, and I would not trust a file that claimed to know.

He tested the newest model by handing it his company and asking what it saw. Most people test a model with a puzzle.

The first reading could describe the shape of his work. This one can quote him. The next one should be able to say whether it worked.`,
}
