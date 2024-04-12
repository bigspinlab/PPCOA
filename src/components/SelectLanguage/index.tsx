'use client';

import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui-elements/Select';
import { IFooter, IFooterLanguagesContent } from '@/types';
import React from 'react';
import { useSelectLanguage } from '@/hooks/useSelectLanguage';

type SelectLanguageProps = Pick<IFooter['content'], 'languages'> & { currentLanguage: string };

export default function SelectLanguage({ languages, currentLanguage }: SelectLanguageProps) {
  const { handleChangeLanguage } = useSelectLanguage(currentLanguage);
  
  return (
    <Select onValueChange={handleChangeLanguage}>
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
