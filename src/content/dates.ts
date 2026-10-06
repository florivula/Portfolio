const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/**
 * `06 OCT 2026`-style dates for mono labels. Fixed month names, because
 * locale formatting is not stable across browsers (en-GB gives "Sept").
 */
export function formatDate(time: number, withYear = true): string {
  const date = new Date(time)
  const day = String(date.getUTCDate()).padStart(2, '0')
  const month = MONTHS[date.getUTCMonth()].toUpperCase()
  return withYear ? `${day} ${month} ${date.getUTCFullYear()}` : `${day} ${month}`
}

export function isoToTime(iso: string): number {
  return Date.parse(`${iso}T00:00:00Z`)
}
