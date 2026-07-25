interface SourceGateProps {
  compact?: boolean
}

export function SourceGate({ compact = false }: SourceGateProps) {
  return (
    <div className={`source-gate${compact ? ' source-gate--compact' : ''}`}>
      <span aria-hidden="true" className="source-gate__marker">
        !
      </span>
      <div>
        <p className="eyebrow">Source material pending</p>
        <h3>The machine’s answer has not been supplied yet.</h3>
        <p>
          This frame is intentionally empty. The original Claude prompt and
          response will appear here exactly as provided, without a substitute
          written for the layout.
        </p>
      </div>
    </div>
  )
}

