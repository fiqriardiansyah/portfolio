import { TranslationKey } from 'lib/translations'

export type Stat = { target: number; suffix: string; labelKey: TranslationKey }

export const stats: Stat[] = [
  { target: 5, suffix: '+', labelKey: 'home_stat_years' },
  { target: 18, suffix: '+', labelKey: 'home_stat_projects' },
  { target: 500, suffix: '+', labelKey: 'home_stat_users' },
  { target: 20, suffix: '+', labelKey: 'home_stat_mentored' }
]
