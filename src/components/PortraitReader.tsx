import { portraitSections, secondReadNotes } from '../content/reading'
import { presentEditorialText, splitResponseIntoParagraphs } from '../content/parse'
import { sourceMaterial } from '../content/source'
import type { EvidenceKind, ReadingMode, SecondReadNote } from '../content/types'
import { SourceGate } from './SourceGate'

interface PortraitReaderProps {
  mode: ReadingMode
}

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

function DesignedPortrait({ withNotes }: { withNotes: boolean }) {
  const paragraphs = splitResponseIntoParagraphs(sourceMaterial.rawResponse)

  if (
    sourceMaterial.status !== 'verified-exact-source' ||
    paragraphs.length === 0 ||
    portraitSections.length === 0
  ) {
    return <SourceGate />
  }

  return (
    <div className={`designed-portrait${withNotes ? ' has-notes' : ''}`}>
      {withNotes ? (
        <header className="second-read-intro">
          <p className="eyebrow">Codex’s second read</p>
          <h3>A reading of the claims, not a second biography.</h3>
          <p>
            The labels distinguish what is visible in public-safe working
            evidence from what the portrait infers, and from what neither model
            can know.
          </p>
          <div aria-label="Evidence key" className="evidence-key">
            {(Object.keys(kindLabels) as EvidenceKind[]).map((kind) => (
              <span className={`evidence-key__item evidence-key__item--${kind}`} key={kind}>
                {kindLabels[kind]}
              </span>
            ))}
          </div>
        </header>
      ) : null}

      {portraitSections.map((section, index) => {
        const notes = secondReadNotes.filter(
          (note) => note.sectionId === section.id,
        )

        return (
          <article
            className="portrait-section reveal"
            id={`portrait-${section.id}`}
            key={section.id}
          >
            <header className="portrait-section__header">
              <div className="portrait-section__index">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{section.label}</span>
              </div>
              <h3>{section.title}</h3>
            </header>

            <div className="portrait-section__grid">
              <div className="portrait-copy">
                {section.paragraphIndexes.map((paragraphIndex) => {
                  const paragraph = paragraphs[paragraphIndex]
                  if (!paragraph) {
                    return null
                  }

                  return (
                    <p key={`${section.id}-${paragraphIndex}`}>
                      {presentEditorialText(paragraph)}
                    </p>
                  )
                })}

                {section.pullQuote ? (
                  <blockquote>{section.pullQuote}</blockquote>
                ) : null}
              </div>
              {withNotes ? <Notes notes={notes} /> : null}
            </div>
          </article>
        )
      })}
    </div>
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
        <span>Claude / unedited source</span>
        <span>{sourceMaterial.capturedAt}</span>
      </div>
      <pre>{sourceMaterial.rawResponse}</pre>
    </div>
  )
}

export function PortraitReader({ mode }: PortraitReaderProps) {
  return (
    <div
      aria-labelledby={`tab-${mode}`}
      className="reader-panel"
      id={`panel-${mode}`}
      role="tabpanel"
      tabIndex={0}
    >
      {mode === 'portrait' ? <DesignedPortrait withNotes={false} /> : null}
      {mode === 'second-read' ? <DesignedPortrait withNotes /> : null}
      {mode === 'raw-response' ? <RawResponse /> : null}
    </div>
  )
}

