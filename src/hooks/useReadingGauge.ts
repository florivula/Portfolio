import { useEffect, useState, type RefObject } from 'react'

export interface Gauge {
  /** 0 to 1: how far the reader is through the reading. */
  progress: number
  /** Index of the paragraph nearest the reading line. */
  active: number
}

/**
 * Tracks the reader's place in a reading: the paragraph that sits on a line
 * 40% down the viewport, and the overall progress through the block.
 */
export function useReadingGauge(ref: RefObject<HTMLElement | null>): Gauge {
  const [gauge, setGauge] = useState<Gauge>({ progress: 0, active: 0 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let frame = 0

    const measure = () => {
      frame = 0
      const line = window.innerHeight * 0.4
      const box = element.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, (line - box.top) / box.height))

      const units = element.querySelectorAll<HTMLElement>('[data-paragraph]')
      let active = 0
      units.forEach((unit, index) => {
        if (unit.getBoundingClientRect().top <= line) active = index
      })

      setGauge((previous) =>
        previous.active === active && Math.abs(previous.progress - progress) < 0.002
          ? previous
          : { progress, active },
      )
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [ref])

  return gauge
}
