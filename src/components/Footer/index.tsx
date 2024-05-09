'use client';

import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';
import { useQuery } from '@tanstack/react-query';
import { IFooter, IHeadlessMaster } from '@/types';
import { getHeadlessMaster } from '@/api';
import SelectLanguage from '../SelectLanguage';

export default function Footer({ lang }: { lang: string }) {
  const { data: footerData } = useQuery<IHeadlessMaster>({
    queryKey: ['masterPage'],
    queryFn: () => getHeadlessMaster({ lang }),
    staleTime: Infinity
  });

  const footerContent = footerData?.widget[1] as IFooter;

  if (!footerData) {
    return null;
  }

  const showLanguagesSelect = footerContent?.content?.languages?.content?.items?.length > 1;

  return (
    <footer className="w-full mt-16 border-t border-solid border-Black py-16 px-4 lg:p-16 lg:mt-24">
      <div className="mx-auto grid gap-6 md:grid-cols-12">
        <Link href="/" className="shrink-0 md:col-start-1 md:col-end-2">
          <Image
            alt={`footer-${footerContent?.content?.image.alt}`}
            src={footerContent?.content?.image?.url}
            width={40}
            height={70}
            className="w-auto h-auto"
          />
        </Link>
        {
          <ul className="flex flex-col justify-between gap-5 md:w-full md:flex-row md:flex-wrap md:col-start-2 md:col-end-13">
            {footerContent?.content?.gridColumns?.map((column) => (
              <li key={column.id}>
                {parse(`${column.text}`)}

                {column.id === '4' && showLanguagesSelect ? (
                  <SelectLanguage languages={footerContent?.content?.languages} currentLanguage={lang} />
                ) : null}
              </li>
            ))}
          </ul>
        }
      </div>
    </footer>
  );
}
