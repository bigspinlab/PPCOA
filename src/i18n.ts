import { defaultLocale, locales } from '@/global/constants';

export const i18n = {
  defaultLocale,
  locales: locales.map((l) => l.locale)
} as const;

export type Locale = (typeof i18n)['locales'][number];
