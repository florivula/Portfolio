import { useId, useState } from 'react'
import { paragraphRoles } from '../content/reading'
import { presentEditorialText, splitResponseIntoParagraphs } from '../content/parse'
import type { Portrait } from '../content/types'

/**
 * A response, set as one continuous read.
 *
 * The loop runs over every paragraph the response has, in the order it has
 * them. The role map can change how a paragraph looks and nothing else, so the
 * designed reading is the complete text by construction.
 */
export function ReadingFlow({ portrait }: { portrait: Portrait }) {
  const paragraphs = splitResponseIntoParagraphs(portrait.rawResponse)
  const roles = paragraphRoles[portrait.id] ?? {}
  const width = String(paragraphs.length).length

  return (
    <div className="reading-flow" data-portrait={portrait.id}>
      {paragraphs.map((paragraph, index) => {
        const role = roles[index]
        const text = presentEditorialText(paragraph)
        const number = String(index + 1).padStart(Math.max(2, width), '0')

        return (
          <div
            className={`reading-unit reading-unit--${role ?? 'body'}`}
            data-paragraph={index}
            key={index}
          >
            <span aria-hidden="true" className="reading-unit__number">
              {number}
            </span>
            {role === 'quote' ? (
              <blockquote className="reading-quote">{text}</blockquote>
            ) : role === 'hinge' ? (
              <p className="reading-hinge">{text}</p>
            ) : (
              <p className="reading-body">{text}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}

/** The same text with no typography at all: the receipt. */
export function PlainText({ portrait }: { portrait: Portrait }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="receipt">
      <button
        aria-controls={panelId}
        aria-expanded={open}
        className="receipt__toggle"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span>Plain text</span>
        <span className="receipt__hint">
          Every paragraph above is the response, in order. This is the same text, unset.
        </span>
        <span aria-hidden="true" className="receipt__sign">
          {open ? '−' : '+'}
        </span>
      </button>
      {open ? (
        <div className="receipt__panel" id={panelId}>
          <div className="receipt__meta">
            <span>{portrait.model} / unedited source</span>
            <span>{portrait.capturedAt}</span>
          </div>
          <pre>{portrait.rawResponse}</pre>
        </div>
      ) : null}
    </div>
  )
}
