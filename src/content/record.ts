/**
 * The shape of the record both readings were written from: Airise's private
 * company repository. Counts only. Nothing from inside it is published here.
 *
 * `changesPerDay` is the number of commits on each day from 4 July 2026 (the
 * first) to 6 October 2026 (the capture of 002), from `git log` on that
 * repository. Words and files count the Markdown documents at the commit
 * closest to each capture, excluding the machines' own settings folder and
 * one private folder.
 */
export const recordStart = '2026-07-04'

export const changesPerDay: number[] = [2, 1, 0, 2, 1, 2, 0, 0, 3, 4, 2, 1, 6, 6, 9, 2, 11, 9, 10, 6, 9, 6, 5, 6, 0, 8, 9, 8, 5, 0, 9, 4, 1, 10, 11, 7, 1, 13, 19, 10, 9, 8, 12, 0, 11, 10, 14, 11, 8, 8, 8, 7, 9, 5, 11, 10, 0, 3, 1, 9, 15, 5, 5, 4, 3, 10, 14, 8, 13, 3, 4, 1, 17, 11, 10, 6, 10, 7, 10, 3, 4, 0, 0, 1, 14, 0, 14, 5, 14, 13, 12, 3, 0, 0, 11]

export interface RecordSnapshot {
  portraitId: string
  date: string
  files: number
  words: number
  changes: number
  days: number
}

export const snapshots: RecordSnapshot[] = [
  { portraitId: '001', date: '2026-07-25', files: 33, words: 50529, changes: 92, days: 22 },
  { portraitId: '002', date: '2026-10-06', files: 71, words: 337919, changes: 622, days: 95 },
]

export const activeDays = 83
