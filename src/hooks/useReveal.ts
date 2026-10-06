import { useEffect } from 'react'

/**
 * Fades `.reveal` elements in as they enter the viewport. Runs after every
 * render so content that mounts later (an opened archive) is picked up too;
 * anything already shown is skipped.
 */
export function useReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'),
    )

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  })
}
