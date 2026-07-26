import { useState } from 'react'
import { paragraphRoles, secondReadNotes } from '../content/reading'
import { presentEditorialText, splitResponseIntoParagraphs } from '../content/parse'
import { availableModes } from '../content/modes'
import { sourceMaterial } from '../content/source'
import type { EvidenceKind, ReadingMode, SecondReadNote } from '../content/types'
import { SourceGate } from './SourceGate'

const kindLabels: Record<EvidenceKind, string> = {
  observed: 'Observed',
  inferred: 'Inferred',
  unknown: 'Unknown',
}

function Notes({ notes }: { notes: SecondReadNote[] }) {
  if (notes.length === 0) {
    return null
  }

  return (
    <aside aria-label="Codex annotations" className="annotation-stack">
      {notes.map((note) => (
        <article className={`annotation annotation--${note.kind}`} key={note.id}>
          <div className="annotation__topline">
            <span>{kindLabels[note.kind]}</span>
            <span>{note.id}</span>
          </div>
          <q>{note.claim}</q>
          <p>{note.note}</p>
        </article>
      ))}
    </aside>
  )
}

/**
 * The response, set as one continuous read.
 *
 * The loop runs over every paragraph the response has, in the order it has
 * them. `paragraphRoles` can change how a paragraph looks and nothing else, so
 * the designed reading is the complete text by construction rather than by
 * anyone remembering to keep a section map in sync.
 */
function ReadingFlow({ withNotes = false }: { withNotes?: boolean }) {
  const paragraphs = splitResponseIntoParagraphs(sourceMaterial.rawResponse)

  if (
    sourceMaterial.status !== 'verified-exact-source' ||
    paragraphs.length === 0
  ) {
    return <SourceGate />
  }

  const firstBodyIndex = paragraphs.findIndex(
    (_, index) => paragraphRoles[index] === undefined,
  )

  return (
    <div className={`reading-flow${withNotes ? ' has-notes' : ''}`}>
      {paragraphs.map((paragraph, index) => {
        const role = paragraphRoles[index]
        const text = presentEditorialText(paragraph)
        const notes = withNotes
          ? secondReadNotes.filter((note) => note.paragraphIndex === index)
          : []

        return (
          <div className="reading-unit" key={index}>
            {role === 'quote' ? (
              <blockquote className="reading-quote">{text}</blockquote>
            ) : role === 'hinge' ? (
              <p className="reading-hinge">{text}</p>
            ) : (
              <p
                className={
                  index === firstBodyIndex ? 'reading-body is-opening' : 'reading-body'
                }
              >
                {text}
              </p>
            )}
            <Notes notes={notes} />
          </div>
        )
      })}
    </div>
  )
}

function SecondReadIntro() {
  return (
    <header className="second-read-intro">
      <p className="eyebrow">Codex&rsquo;s second read</p>
      <h3>A reading of the claims, not a second biography.</h3>
      <p>
        The labels distinguish what is visible in public-safe working evidence
        from what the portrait infers, and from what neither model can know.
      </p>
      <div aria-label="Evidence key" className="evidence-key">
        {(Object.keys(kindLabels) as EvidenceKind[]).map((kind) => (
          <span className={`evidence-key__item evidence-key__item--${kind}`} key={kind}>
            {kindLabels[kind]}
          </span>
        ))}
      </div>
    </header>
  )
}

function RawResponse() {
  if (
    sourceMaterial.status !== 'verified-exact-source' ||
    !sourceMaterial.rawResponse.trim()
  ) {
    return <SourceGate />
  }

  return (
    <div className="raw-response">
      <div className="raw-response__meta">
        <span>{sourceMaterial.model} / unedited source</span>
        <span>{sourceMaterial.capturedAt}</span>
      </div>
      <pre>{sourceMaterial.rawResponse}</pre>
    </div>
  )
}

/**
 * The portrait is the page, so it is not one option among several any more.
 * What is left are alternates, folded away under the reading: the plain text
 * as a receipt, and Codex's annotations if a second model ever writes them.
 * The list still derives from `availableModes`, so the second reading appears
 * on its own the moment `secondReadNotes` stops being empty.
 */
function AlternateReadings() {
  const [openMode, setOpenMode] = useState<ReadingMode | null>(null)
  const alternates = availableModes.filter((mode) => mode.id !== 'portrait')

  if (alternates.length === 0) {
    return null
  }

  return (
    <section aria-label="Other ways to read it" className="alternates">
      <p className="alternates__note">
        Every paragraph of the response is above, in order and unedited. What
        follows is the same text, differently.
      </p>

      <div className="alternates__list">
        {alternates.map((mode) => {
          const isOpen = openMode === mode.id

          return (
            <div className="alternate" key={mode.id}>
              <h2>
                <button
                  aria-controls={`panel-${mode.id}`}
                  aria-expanded={isOpen}
                  className="alternate__toggle"
                  id={`toggle-${mode.id}`}
                  onClick={() => setOpenMode(isOpen ? null : mode.id)}
                  type="button"
                >
                  <span className="alternate__label">{mode.label}</span>
                  <span className="alternate__description">{mode.description}</span>
                  <span aria-hidden="true" className="alternate__sign">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
              </h2>

              {isOpen ? (
                <div
                  aria-labelledby={`toggle-${mode.id}`}
                  className="alternate__panel"
                  id={`panel-${mode.id}`}
                  role="region"
                >
                  {mode.id === 'raw-response' ? <RawResponse /> : null}
                  {mode.id === 'second-read' ? (
                    <>
                      <SecondReadIntro />
                      <ReadingFlow withNotes />
                    </>
                  ) : null}
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function PortraitReader() {
  return (
    <>
      <ReadingFlow />
      <AlternateReadings />
    </>
  )
}
