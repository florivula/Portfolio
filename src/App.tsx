import { PortraitReader } from './components/PortraitReader'
import { SourceGate } from './components/SourceGate'
import { countWords, estimateReadingMinutes } from './content/parse'
import { sourceMaterial } from './content/source'
import { useReveal } from './hooks/useReveal'

const externalLinks = [
  { label: 'Airise', href: 'https://ai-rise.ai' },
  { label: 'GitHub', href: 'https://github.com/florivula' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/florivula' },
  { label: 'Instagram', href: 'https://instagram.com/florivula' },
]

const hasSource =
  sourceMaterial.status === 'verified-exact-source' &&
  sourceMaterial.originalPrompt.trim().length > 0

const responseWords = countWords(sourceMaterial.rawResponse)
const responseMinutes = estimateReadingMinutes(sourceMaterial.rawResponse)

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
          <span>Captured {sourceMaterial.capturedAt}</span>
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

      <section className="source-band" id="source">
        <div className="section-rail">
          <span>01</span>
          <span>Source</span>
        </div>
        <div className="source-band__content reveal">
          {hasSource ? (
            <>
              <blockquote className="source-prompt">
                {sourceMaterial.originalPrompt}
              </blockquote>
              <dl className="source-conditions">
                {sourceMaterial.conditions.map((condition) => (
                  <div key={condition.key}>
                    <dt>{condition.key}</dt>
                    <dd>{condition.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="source-note">
                Typos included. The prompt is part of the exhibit.
              </p>
            </>
          ) : (
            <SourceGate compact />
          )}
        </div>
      </section>

      <section className="reading-section" id="portrait-reader">
        <header className="reading-lede">
          <div className="section-rail">
            <span>02</span>
            <span>Reading</span>
          </div>
          <p className="reading-lede__meta">
            <span>{sourceMaterial.model}, unedited</span>
            <span>{responseWords} words</span>
            <span>About {responseMinutes} minutes</span>
          </p>
        </header>

        <div className="reading-panel">
          <PortraitReader />
        </div>
      </section>

      <section className="limit-section">
        <div className="section-rail">
          <span>03</span>
          <span>Note</span>
        </div>
        <div className="limit-section__content reveal">
          <span aria-hidden="true" className="limit-mark">
            ∴
          </span>
          <div>
            <p className="eyebrow">Why it reads like that</p>
            <h2>Nothing was softened.</h2>
            <p>
              It would have been easy to cut the paragraph about work that gets
              built well and then stopped, or the one about a launch drawing
              eleven thousand views and being filed under a note that views are
              not comprehension. They are the reason the rest is worth reading.
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
          <span>Machine portrait 001 / {sourceMaterial.capturedAt}</span>
        </div>
      </footer>
    </main>
  )
}
