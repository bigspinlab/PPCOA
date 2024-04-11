import { defaultLocale, locales } from '@/global/constants';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales.map((l) => l.locale),

  // Used when no locale matches
  defaultLocale: defaultLocale
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en)/:path*']
};
