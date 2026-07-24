import { useRef } from 'react'
import type { KeyboardEvent } from 'react'
import type { ReadingMode } from '../content/types'

interface ModeDefinition {
  id: ReadingMode
  label: string
  description: string
}

const modes: ModeDefinition[] = [
  {
    id: 'portrait',
    label: 'Portrait',
    description: "Claude's designed reading experience",
  },
  {
    id: 'second-read',
    label: 'Second read',
    description: "Codex's annotations and friction",
  },
  {
    id: 'raw-response',
    label: 'Raw response',
    description: 'The complete source with minimal formatting',
  },
]

interface ModeSwitcherProps {
  activeMode: ReadingMode
  onModeChange: (mode: ReadingMode) => void
}

export function ModeSwitcher({
  activeMode,
  onModeChange,
}: ModeSwitcherProps) {
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([])

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      return
    }

    event.preventDefault()

    let nextIndex = index

    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % modes.length
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + modes.length) % modes.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = modes.length - 1
    }

    const nextMode = modes[nextIndex]
    onModeChange(nextMode.id)
    buttonRefs.current[nextIndex]?.focus()
  }

  return (
    <div className="mode-switcher-shell">
      <div
        aria-label="Reading mode"
        className="mode-switcher"
        role="tablist"
      >
        {modes.map((mode, index) => (
          <button
            aria-controls={`panel-${mode.id}`}
            aria-selected={activeMode === mode.id}
            className="mode-button"
            id={`tab-${mode.id}`}
            key={mode.id}
            onClick={() => onModeChange(mode.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            ref={(element) => {
              buttonRefs.current[index] = element
            }}
            role="tab"
            tabIndex={activeMode === mode.id ? 0 : -1}
            type="button"
          >
            <span>{mode.label}</span>
            <small>{mode.description}</small>
          </button>
        ))}
      </div>
    </div>
  )
}

