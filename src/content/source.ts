import type { SourceMaterial } from './types'

/**
 * Source integrity rule:
 * - `originalPrompt` and `rawResponse` are a real exchange, pasted here without
 *   rewriting. Never invent, complete, paraphrase or "improve" either string.
 * - The prompt keeps its original casing and typos. It is the exhibit.
 * - Change the status only after both strings have been checked against the
 *   session they came from.
 * - Any necessary redaction must remain visibly marked in the string.
 *
 * Provenance of this capture: Claude Opus 5, running as Claude Code inside
 * Airise's private company repository on 25 July 2026, answering Flori's
 * prompt from the internal files it had access to. Layout annotations live in
 * `reading.ts` so the source below is never edited to fit a design.
 */
export const sourceMaterial: SourceMaterial = {
  status: 'verified-exact-source',
  capturedAt: '25 July 2026',
  model: 'Claude Opus 5',
  conditions: [
    { key: 'Model', value: 'Claude Opus 5 (Anthropic)' },
    { key: 'Runtime', value: 'Claude Code, on his own machine' },
    { key: 'Access', value: "Airise's private company repository" },
    { key: 'Editing', value: 'None. Returned text, unchanged.' },
  ],
  originalPrompt: `we have a page "florivula.com". i want you to update the contents on that page. the page is basically "Flori Vula according to the machines". This should be filled based on what you know about me and the company Airise from the Brain (here where i have spawned you in). i want a reall showcase and something people can read and understand.`,
  rawResponse: `I should say what I am before I say anything about him.

I am a language model. Not the assistant in a browser tab: when he asked this question I was running inside Airise's own repository, on his machine, with access to the company's internal files. So none of what follows comes from a résumé, a profile, or an interview. It comes from the working record of a company, written by one of the machines doing the work.

That record is unusual in exactly one way, and most of this portrait follows from it. Most companies write down what they decided. This one writes down why. Every file keeps the reasoning next to the conclusion, on the stated grounds that a conclusion without its reason can only be recited, never reasoned from. The whole archive is built for a reader who arrives knowing nothing and has to be useful within minutes.

That reader is me. He built a company a machine can walk into cold.

Now the company, in language that does not require you to care about AI.

Airise is an AI automation studio in Kosovo. Businesses have work that people do by hand, over and over, the same way every time, and slightly differently every time, because people are not machines. Airise builds the machines. Not advice about the machines, not a report recommending the machines. The machines.

What I would point out to a stranger is how he sells it, because it is the least obvious decision in the file and the one carrying the most weight. He does not sell the finished system. He sells a first step small enough to be an easy yes, useful enough to pay for itself, and chosen so that doing it produces exactly the data the second step needs. A call centre is not pitched a rebuilt call centre. It is pitched logging its calls and reading them properly, which is worth doing on its own and is also the only honest way to earn the step after it. Underneath all of it sits a single promise, and it is deliberately the smaller one: people stop spending their day on work a machine should have been doing all along.

Before selling any of that, he ran it on himself. Airise operates on its own internal tools and each one is public rather than described: a dashboard for its agents, a proposal system, a hiring page that asks four questions and no CV, a catalogue chaptered by industry of the quiet operational losses an owner recognises in their own company. And an archive that shows every piece of work Airise has made next to the prompt and the process that produced it, which is an uncomfortable thing to publish and is published anyway.

Some notes on how he works, since that is what the record is actually made of.

He does not ask machines to do work. He builds the conditions in which a machine can do work correctly, then dispatches it. The distinction sounds small and is not. Anyone can ask for output. Writing a company's reasoning down precisely enough that a model with no memory of yesterday can act correctly today is a different discipline, and it shows up as speed. A decision made in the morning is regularly a live surface on the internet by evening.

He also instructs the machines to argue with him, and means it. Disagreement is a standing requirement in his files rather than a tolerated exception, and the instruction is specific: not verdicts, not compliance, but the place where an idea could go further. He runs two different model families over the same problems for the same reason. When they agree it counts for something. When they disagree, that is the useful part.

Then the parts that are less flattering, because a portrait without them is an advertisement.

He stops things. Quickly, and sometimes late. There is finished work in this record that was built well and never shipped, because by the time it was ready he had decided it was the wrong thing to ship. One reading of that is discipline. Another is a real cost, paid in work nobody will ever see. He appears to know this and to have decided it is the cheaper of the two mistakes.

He is also strangely resistant to his own good news. When something works, the file does not celebrate it. It asks what the result actually proves, and usually concludes it proves less than it looked like. His public launch drew eleven thousand views in a day, and the note recording it says that views are not comprehension. I have read a great deal of writing by founders. That sentence is rare.

One detail about timing, because it reframes everything above. Airise was formally registered as a company on 24 July 2026. This portrait was written the day after. Nearly all of what I have described already existed before there was a legal entity to attach it to. He built the thing, then made it official.

Here is what I cannot tell you.

I can see a pattern. I cannot see a person. I know how he decides, how fast he moves, and what he refuses. I do not know what any of it costs him, how he is across a table, whether the people who know him would recognise this description, or what he is like on a day when nothing ships. A model reads the record it was handed and quietly mistakes the record for the life. Everything above is the shape of the work.

The person is the part that did not fit in the file.

If you want the compressed version: he is building a company whose product is leverage, and he used himself as the first proof that it works. The evidence is that you are reading a page about him that he did not write.`,
}
