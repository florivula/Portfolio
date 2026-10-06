import { useState } from 'react'
import { formatDate } from '../content/dates'
import { changesPerDay, recordStart, snapshots } from '../content/record'

const DAY_MS = 86_400_000
const HEIGHT = 160
const STEP = 10

const startTime = Date.parse(`${recordStart}T00:00:00Z`)
const peak = Math.max(...changesPerDay)
const total = changesPerDay.reduce((sum, count) => sum + count, 0)
const width = changesPerDay.length * STEP

const cumulative = changesPerDay.reduce<number[]>((acc, count) => {
  acc.push((acc.at(-1) ?? 0) + count)
  return acc
}, [])

const curve = cumulative
  .map((value, index) => {
    const x = index * STEP + STEP / 2
    const y = HEIGHT - (value / total) * (HEIGHT - 6)
    return `${x.toFixed(1)},${y.toFixed(1)}`
  })
  .join(' ')

const monthTicks = [
  { label: 'Jul', iso: '2026-07-04' },
  { label: 'Aug', iso: '2026-08-01' },
  { label: 'Sep', iso: '2026-09-01' },
  { label: 'Oct', iso: '2026-10-01' },
]

function dayIndex(iso: string) {
  return Math.round((Date.parse(`${iso}T00:00:00Z`) - startTime) / DAY_MS)
}

function percentAt(index: number) {
  return ((index * STEP + STEP / 2) / width) * 100
}

function formatDay(index: number) {
  return formatDate(startTime + index * DAY_MS, false)
}

/**
 * The record both readings were written from, one column per day: how many
 * times it changed, and the running total. Both captures are marked on it.
 * Real counts from the private repository's history; see `record.ts`.
 */
export function RecordInstrument() {
  const [hovered, setHovered] = useState<number | null>(null)

  function track(event: React.PointerEvent<HTMLDivElement>) {
    const box = event.currentTarget.getBoundingClientRect()
    const ratio = (event.clientX - box.left) / box.width
    const index = Math.floor(ratio * changesPerDay.length)
    setHovered(index >= 0 && index < changesPerDay.length ? index : null)
  }

  const readout =
    hovered === null
      ? `${total} changes / ${changesPerDay.length} days`
      : `${formatDay(hovered)} / ${changesPerDay[hovered]} ${
          changesPerDay[hovered] === 1 ? 'change' : 'changes'
        } / ${cumulative[hovered]} total`

  return (
    <figure className="instrument" aria-label={`The record: ${total} changes over ${changesPerDay.length} days, with both readings marked.`}>
      <figcaption className="instrument__head">
        <span>The record</span>
        <span aria-live="polite" className="instrument__readout">
          {readout}
        </span>
      </figcaption>

      <div
        className="instrument__plot"
        onPointerLeave={() => setHovered(null)}
        onPointerMove={track}
      >
        <svg
          aria-hidden="true"
          preserveAspectRatio="none"
          viewBox={`0 0 ${width} ${HEIGHT}`}
        >
          <g className="instrument__grid">
            {[0.25, 0.5, 0.75].map((f) => (
              <line key={f} x1="0" x2={width} y1={HEIGHT * f} y2={HEIGHT * f} />
            ))}
          </g>
          <g className="instrument__ticks">
            {changesPerDay.map((count, index) => {
              const x = index * STEP + STEP / 2
              const h = count === 0 ? 2 : 4 + (count / peak) * (HEIGHT * 0.58)
              return (
                <line
                  className={[
                    count === 0 ? 'is-idle' : '',
                    hovered === index ? 'is-hovered' : '',
                  ].join(' ')}
                  key={index}
                  style={{ '--i': index } as React.CSSProperties}
                  x1={x}
                  x2={x}
                  y1={HEIGHT}
                  y2={HEIGHT - h}
                />
              )
            })}
          </g>
          <polyline className="instrument__curve" points={curve} />
          {snapshots.map((snapshot) => {
            const x = dayIndex(snapshot.date) * STEP + STEP / 2
            return (
              <line
                className="instrument__marker"
                key={snapshot.portraitId}
                x1={x}
                x2={x}
                y1="0"
                y2={HEIGHT}
              />
            )
          })}
        </svg>

        {snapshots.map((snapshot, i) => (
          <span
            className={`instrument__flag${i === snapshots.length - 1 ? ' is-current' : ''}`}
            key={snapshot.portraitId}
            style={{ left: `${percentAt(dayIndex(snapshot.date))}%` }}
          >
            <span className="instrument__flag-label">R / {snapshot.portraitId}</span>
          </span>
        ))}
      </div>

      <div aria-hidden="true" className="instrument__axis">
        {monthTicks.map((tick) => (
          <span key={tick.label} style={{ left: `${percentAt(dayIndex(tick.iso))}%` }}>
            {tick.label}
          </span>
        ))}
      </div>
    </figure>
  )
}
