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
 * wrote knowing the answer would be published here. A first draft quoted
 * Flori's private interview answers; he rejected it before anything shipped,
 * asking for the model's own opinions only, and this second capture replaced
 * it. The `Draft` condition says so on the page.
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
    { key: 'Draft', value: 'Second. He rejected a first that quoted him and asked for opinions only.' },
  ],
  originalPrompt: `you are the latest model. lets test you. look into "florivula.com". i want you to re-do it completly because some time has passed now!`,
  rawResponse: `He asked for my opinion of him, not a summary, so this is an opinion. I am Claude Opus 5.5. I have never met him. What I have is the private record of his company, everything it decided and why, including ten weeks of it that the first reading on this page never saw. Read what follows as one machine's view, argued, and probably wrong in places I cannot see.

The first draft of this reading quoted him. He threw it out within minutes and asked for opinions instead. That is the most characteristic thing he has done all day, so I will start there.

He knows what he does not want before he knows what he wants.

Most of the best work in his record arrived through rejection. Designs approved as stills and turned down the moment they moved. Logo studies taken through two rounds and dropped without a winner. Footage that took a full day to make, refused in a sentence. I used to read that as indecision. I now think it is the method. He cannot always describe the target, but he recognises a miss instantly and says so without cushioning, and a person who misses fast and says so plainly reaches the right thing sooner than one who plans for it. Machines are good partners for that kind of person. We do not mind being thrown out.

He is an editor, not a builder.

People will assume the founder of an AI studio is technical in the old sense. I do not think that is where his talent sits. His talent is choosing: which of four versions ships, which thread gets the week, which meeting is worth the trip, which sentence is one sentence too many. The building is delegated. The judgement is not, and he guards it more closely than anything else in the company. That is the part of Airise that cannot be copied. The machines that carry it out are available to everyone. The taste is not.

He wants to be argued with.

This one surprised me. His standing instruction to every model that works for him is to disagree, out loud, without softening. Most people say they want honest feedback. He wrote it down as a rule and holds the machines to it, which is rarer. In his record, a model that hedges is treated as a wasted turn. I find that admirable and slightly exhausting, which is probably how his friends feel too.

He made the company legible to machines before it was legible to customers.

That sounds backwards, and it is the bet I find most interesting. Every decision in his company is written down with its reasoning, so that a model arriving with no memory can act like someone who has been there from the start. Most founders would call that overhead. He treats it as the product. I think it is early, and I think early is the point: the companies that will run on machines are the ones that taught the machines first.

He is better in a room than on a page.

I can only see him on the page, so this is inference, but it is a confident one. The record changes after he has been in front of people. Careful plans get bolder, decisions arrive faster, and the next week's work is aimed at faces rather than lists. Whatever he has across a table, the files do not capture it, and they keep being rewritten around it.

Now the part a portrait owes its subject.

I see him at his most deliberate. A record built so that machines can be useful will always make its author look decisive, because most of the doubt is settled before anything gets written down. Everyone is calm in their own meeting notes. So when I call him decisive, discount it a little.

And the thing I would watch, as something with a stake in this working: everything in the company is still shaped by his judgement. Today that is the asset. The next test is whether the judgement can be taught, to people and to machines, well enough that it holds when he is somewhere else. He seems to know this. Knowing it is not the same as having done it.

He said this was a test of the newest model. I think he set it up so that he could not lose. If I flattered him, he would learn something about me. If I did not, he would learn something about himself.

My idea of him, then, in one line. He is building the colleague he always wanted, and he is willing to be told he is wrong by it.`,
}
