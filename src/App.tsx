import { useId, useRef, useState } from 'react'
import { PlainText, ReadingFlow } from './components/PortraitReader'
import { RecordInstrument } from './components/RecordInstrument'
import { countWords, estimateReadingMinutes, splitResponseIntoParagraphs } from './content/parse'
import { currentPortrait, portraits } from './content/reading'
import { formatDate, isoToTime } from './content/dates'
import { activeDays, snapshots } from './content/record'
import type { Portrait } from './content/types'
import { useReadingGauge } from './hooks/useReadingGauge'
import { useReveal } from './hooks/useReveal'

const externalLinks = [
  { label: 'Airise', href: 'https://ai-rise.ai' },
  { label: 'GitHub', href: 'https://github.com/florivula' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/florivula' },
  { label: 'Instagram', href: 'https://instagram.com/florivula' },
]

const earlier = portraits.slice(1)
const numberFormat = new Intl.NumberFormat('en-GB')

function shortDate(iso: string) {
  return formatDate(isoToTime(iso))
}

function SectionRail({ number, label }: { number: string; label: string }) {
  return (
    <div className="rail">
      <span className="rail__number">{number}</span>
      <span className="rail__label">{label}</span>
    </div>
  )
}

function SourceBlock({ portrait }: { portrait: Portrait }) {
  return (
    <div className="source">
      <p className="label">The prompt, as typed</p>
      <blockquote className="source__prompt">{portrait.originalPrompt}</blockquote>
      <dl className="strip">
        {portrait.conditions.map((condition) => (
          <div key={condition.key}>
            <dt>{condition.key}</dt>
            <dd>{condition.value}</dd>
          </div>
        ))}
      </dl>
      <p className="source__note">Typos included. The prompt is part of the exhibit.</p>
    </div>
  )
}

function Cover() {
  return (
    <section aria-labelledby="page-title" className="cover">
      <header className="cover__registry">
        <span>Machine portrait {currentPortrait.id}</span>
        <span className="cover__registry-name">Flori Vula</span>
        <span>Captured {shortDate(currentPortrait.capturedOn)}</span>
      </header>

      <div className="cover__body">
        <div className="cover__copy">
          <p className="cover__preface">
            <span>This is not his biography.</span> It is what the machines he
            works with think of him, in their own words. Taken once in July,
            retaken in October.
          </p>
          <h1 id="page-title">
            <span>Flori Vula,</span>
            <em>according to</em>
            <span>the machines</span>
          </h1>
        </div>

        <ol aria-label="Readings" className="index">
          {portraits.map((portrait, i) => (
            <li className={i === 0 ? 'is-current' : ''} key={portrait.id}>
              <a href={i === 0 ? '#reading' : `#reading-${portrait.id}`}>
                <span className="index__id">{portrait.id}</span>
                <span className="index__model">{portrait.model}</span>
                <span className="index__date">{shortDate(portrait.capturedOn)}</span>
                <span className="index__state">
                  {i === 0 ? 'Current reading' : 'Kept below, unchanged'}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <RecordInstrument />

      <footer className="cover__footer">
        <a className="enter" href="#source">
          <span>Enter the reading</span>
          <span aria-hidden="true">↓</span>
        </a>
        <p>A dated portrait, retaken when there is more to read.</p>
      </footer>
    </section>
  )
}

function CurrentReading() {
  const flowRef = useRef<HTMLDivElement>(null)
  const { progress, active } = useReadingGauge(flowRef)
  const total = splitResponseIntoParagraphs(currentPortrait.rawResponse).length
  const words = countWords(currentPortrait.rawResponse)
  const minutes = estimateReadingMinutes(currentPortrait.rawResponse)

  return (
    <section aria-label={`Reading ${currentPortrait.id}`} className="section section--reading" id="reading">
      <aside className="gauge">
        <SectionRail label="Reading" number="02" />
        <p className="gauge__meta">
          <span>{currentPortrait.model}, unedited</span>
          <span>{numberFormat.format(words)} words</span>
          <span>About {minutes} minutes</span>
        </p>
        <div aria-hidden="true" className="gauge__dial">
          <span className="gauge__count">
            ¶ {String(active + 1).padStart(2, '0')}
            <span> / {String(total).padStart(2, '0')}</span>
          </span>
          <span className="gauge__track">
            <span className="gauge__fill" style={{ transform: `scaleY(${progress})` }} />
          </span>
        </div>
      </aside>

      <div className="section__content" ref={flowRef}>
        <ReadingFlow portrait={currentPortrait} />
        <PlainText portrait={currentPortrait} />
      </div>
    </section>
  )
}

function Between() {
  const [then, now] = snapshots
  const rows = [
    { key: 'Files', a: then.files, b: now.files },
    { key: 'Words', a: then.words, b: now.words },
    { key: 'Changes', a: then.changes, b: now.changes },
    { key: 'Days kept', a: then.days, b: now.days },
  ]

  return (
    <section className="section section--between">
      <SectionRail label="Between the readings" number="03" />
      <div className="section__content">
        <h2 className="between__title reveal">The record, measured at each capture.</h2>
        <div className="readouts reveal">
          <div className="readouts__head" aria-hidden="true">
            <span />
            <span>R / {then.portraitId}</span>
            <span>R / {now.portraitId}</span>
            <span>Change</span>
          </div>
          {rows.map((row) => (
            <div className="readouts__row" key={row.key}>
              <span className="readouts__key">{row.key}</span>
              <span className="readouts__value readouts__value--then">
                {numberFormat.format(row.a)}
              </span>
              <span className="readouts__value">{numberFormat.format(row.b)}</span>
              <span className="readouts__ratio">×{(row.b / row.a).toFixed(1)}</span>
            </div>
          ))}
        </div>
        <p className="between__note reveal">
          Counted from the history of Airise&rsquo;s private company repository
          at the moment of each capture: Markdown files, their words, and every
          recorded change. Counts only. Nothing from inside it is published
          here. Of its {now.days} days, the record changed on {activeDays}.
        </p>
      </div>
    </section>
  )
}

function ArchivedReading({ portrait }: { portrait: Portrait }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const words = countWords(portrait.rawResponse)

  return (
    <section className="section section--archive" id={`reading-${portrait.id}`}>
      <SectionRail label={`Reading ${portrait.id}`} number="04" />
      <div className="section__content">
        <div className="archive__head reveal">
          <p className="strip strip--inline">
            <span>{portrait.id}</span>
            <span>{portrait.model}</span>
            <span>{portrait.capturedAt}</span>
            <span>{numberFormat.format(words)} words</span>
          </p>
          <h2>The first reading, kept whole.</h2>
          <p>
            Written from a record about a seventh of today&rsquo;s size, the
            day after Airise was registered. Left exactly as it was published.
          </p>
          <button
            aria-controls={panelId}
            aria-expanded={open}
            className="archive__toggle"
            onClick={() => setOpen(!open)}
            type="button"
          >
            <span>{open ? 'Close' : 'Open'} reading {portrait.id}</span>
            <span aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
        </div>

        {open ? (
          <div className="archive__panel" id={panelId}>
            <SourceBlock portrait={portrait} />
            <ReadingFlow portrait={portrait} />
            <div className="archive__note">
              <p className="label">Published with reading 001</p>
              <h3>Nothing was softened.</h3>
              <p>
                It would have been easy to cut the paragraph about work that
                gets built well and then stopped, or the one about a launch
                drawing eleven thousand views and being filed under a note that
                views are not comprehension. They are the reason the rest is
                worth reading.
              </p>
            </div>
            <PlainText portrait={portrait} />
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default function App() {
  useReveal()

  return (
    <main>
      <Cover />

      <section className="section section--source" id="source">
        <SectionRail label="Source" number="01" />
        <div className="section__content reveal">
          <SourceBlock portrait={currentPortrait} />
        </div>
      </section>

      <CurrentReading />
      <Between />
      {earlier.map((portrait) => (
        <ArchivedReading key={portrait.id} portrait={portrait} />
      ))}

      <footer className="footnote">
        <div className="footnote__statement">
          <p className="label">Footnote</p>
          <h2>
            He didn&rsquo;t write either portrait.
            <span>He chose to publish both.</span>
          </h2>
        </div>

        <nav aria-label="External links" className="exits">
          {externalLinks.map((link, index) => (
            <a href={link.href} key={link.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{link.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <div className="footnote__meta">
          <span>Flori Vula / Prishtina</span>
          <span>
            Machine portrait {currentPortrait.id} / {currentPortrait.capturedAt} / an open series
          </span>
        </div>
      </footer>
    </main>
  )
}
