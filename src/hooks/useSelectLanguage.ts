'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export const useSelectLanguage = (currentLanguage: string) => {
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChangeLanguage = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLanguage !== newLocale) {
      router.replace(currentPathname.replace(`/${currentLanguage}`, `/${newLocale}`));
    }
  };

  return {
    handleChangeLanguage
  };
};
