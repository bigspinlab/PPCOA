'use client';

import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui-elements/Select';
import { IFooter, IFooterLanguagesContent } from '@/types';
import { useRouter } from 'next/navigation';
import { defaultLocale } from '@/global/constants';
import React from 'react';
import { usePathname } from 'next/navigation';

type SelectLanguageProps = Pick<IFooter['content'], 'languages'> & { currentLanguage: string };

export default function SelectLanguage({ languages, currentLanguage }: SelectLanguageProps) {
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale: string) => {

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLanguage !== defaultLocale) {
      router.push(currentPathname.replace(`/${currentLanguage}`, `/${newLocale}`));
    }

    router.refresh();
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger aria-label="change-language" className="justify-start gap-0.5 text-base font-bold mt-5">
        <Image className="h-5 w-5 mr-1" alt="language" src="/language.svg" width={34} height={34} unoptimized />
        <SelectValue placeholder="PT" />
      </SelectTrigger>
      <SelectContent className="max-w-40">
        {languages?.content?.items.map((language: IFooterLanguagesContent) => (
          <SelectItem key={language.id} value={language.value}>
            {language.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
