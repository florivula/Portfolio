import { useState } from 'react'
import { ModeSwitcher } from './components/ModeSwitcher'
import { PortraitReader } from './components/PortraitReader'
import { SourceGate } from './components/SourceGate'
import { sourceMaterial } from './content/source'
import type { ReadingMode } from './content/types'
import { useReveal } from './hooks/useReveal'

const externalLinks = [
  { label: 'Airise', href: 'https://ai-rise.ai' },
  { label: 'GitHub', href: 'https://github.com/florivula' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/florivula' },
  { label: 'Instagram', href: 'https://instagram.com/florivula' },
]

function MachineSeal() {
  return (
    <div aria-hidden="true" className="machine-seal">
      <span className="machine-seal__orbit machine-seal__orbit--outer" />
      <span className="machine-seal__orbit machine-seal__orbit--inner" />
      <span className="machine-seal__axis machine-seal__axis--horizontal" />
      <span className="machine-seal__axis machine-seal__axis--vertical" />
      <span className="machine-seal__core" />
      <span className="machine-seal__label">M / 001</span>
    </div>
  )
}

export default function App() {
  const [mode, setMode] = useState<ReadingMode>('portrait')
  useReveal()

  return (
    <main>
      <section aria-labelledby="page-title" className="cover">
        <div className="frame frame--top" />
        <div className="frame frame--right" />
        <div className="frame frame--bottom" />
        <div className="frame frame--left" />

        <header className="cover__registry">
          <span>Machine portrait 001</span>
          <span>Flori Vula</span>
          <span>Captured July 2026</span>
        </header>

        <div className="cover__body">
          <div className="cover__copy">
            <p className="cover__preface">
              <span>This is not my biography.</span>
              I asked the machines I work with to describe the person on the
              other side.
            </p>
            <h1 id="page-title">
              Flori Vula,
              <em>according to</em>
              the machines
            </h1>
          </div>
          <MachineSeal />
        </div>

        <footer className="cover__footer">
          <a className="enter-link" href="#source">
            <span>Enter the reading</span>
            <span aria-hidden="true">↓</span>
          </a>
          <p>
            A dated portrait assembled from the AI systems he works with.
          </p>
        </footer>
      </section>

      <section className="source-section" id="source">
        <div className="section-rail">
          <span>01</span>
          <span>Source</span>
        </div>
        <div className="source-section__content reveal">
          <header className="section-heading">
            <p className="eyebrow">The prompt</p>
            <h2>The question that produced the portrait.</h2>
          </header>

          {sourceMaterial.status === 'verified-exact-source' &&
          sourceMaterial.originalPrompt.trim() ? (
            <blockquote className="source-prompt">
              {sourceMaterial.originalPrompt}
            </blockquote>
          ) : (
            <SourceGate compact />
          )}
        </div>
      </section>

      <section className="reader-section" id="portrait-reader">
        <header className="reader-section__header">
          <div className="section-rail">
            <span>02</span>
            <span>Reading</span>
          </div>
          <div className="section-heading">
            <p className="eyebrow">Claude’s portrait / Codex’s second read</p>
            <h2>One source. Three ways to read it.</h2>
          </div>
        </header>

        <ModeSwitcher activeMode={mode} onModeChange={setMode} />
        <PortraitReader mode={mode} />
      </section>

      <section className="limit-section">
        <div className="section-rail">
          <span>03</span>
          <span>Limit</span>
        </div>
        <div className="limit-section__content reveal">
          <span aria-hidden="true" className="limit-mark">
            ∴
          </span>
          <div>
            <p className="eyebrow">Where the portrait ends</p>
            <h2>A pattern is not a person.</h2>
            <p>
              Models can recognize what repeats in the work and conversations
              available to them. They can describe that pattern with surprising
              precision. They still cannot know the life outside the record, or
              the person in full.
            </p>
          </div>
        </div>
      </section>

      <footer className="human-footnote">
        <div className="human-footnote__statement">
          <p className="eyebrow">Human footnote</p>
          <h2>
            I didn’t write the portrait.
            <em>I chose to publish it.</em>
          </h2>
        </div>

        <nav aria-label="External links" className="exit-links">
          {externalLinks.map((link, index) => (
            <a href={link.href} key={link.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{link.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <div className="human-footnote__meta">
          <span>Flori Vula / Prishtina</span>
          <span>Machine portrait 001 / July 2026</span>
        </div>
      </footer>
    </main>
  )
}
