'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui-elements/Select';
import { useGetHeadlessMaster } from '@/hooks/useGetHeadlessMaster';
import parse from 'html-react-parser';

export default function Footer() {
  const { data: footerData } = useGetHeadlessMaster();

  if (!footerData) {
    return null;
  }

  const showLanguagesSelect = footerData[1].content.languages.content.items.length > 1;

  return (
    <footer className="w-full mt-16 border-t border-solid border-Black py-16 px-4 lg:p-16 lg:mt-24">
      <div className="m-auto grid gap-6 md:grid-cols-12">
        <Link href="/" className="shrink-0 md:col-start-1 md:col-end-2">
          <Image
            alt={footerData[1].content.image.alt}
            src={footerData[1].content.image.url}
            width={40}
            height={70}
            unoptimized
          />
        </Link>
        {
          <ul className="flex flex-col justify-between gap-5 md:w-full md:flex-row md:flex-wrap md:col-start-2 md:col-end-13">
            {footerData[1].content.gridColumns.map((column) => (
              <li key={column.id}>
                {parse(`${column.text}`)}
                
                { column.id === '4' && !showLanguagesSelect ? (
                  <Select>
                  <SelectTrigger aria-label="change-language" className="justify-start gap-0.5 text-base font-bold mt-5">
                    <Image className="h-5 w-5 mr-1" alt="language" src="/language.svg" width={34} height={34} unoptimized />
                    <SelectValue placeholder="PT" />
                  </SelectTrigger>
                  <SelectContent className="max-w-40">
                    {footerData[1].content.languages.content.items.map((language) => (
                      <SelectItem key={language.id} value={language.value}>
                        {language.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                ): null }
              </li>
            ))}
          </ul>
        }

        {/* 
        <div className="flex flex-col">
          <p>Pedro Pinto Correia</p>
          <p>Oficina de Arquitetura</p>
        </div>

        <div className="flex flex-col">
          <p>Rua Kwame Krumah, 256</p>
          <p>Luanda, Angola</p>
        </div>

        <div className="flex flex-col">
          <a className="mb-5" target="_blank" href="mailto:geral@pedropintocorreia.com">
            geral@pedropintocorreia.com
          </a>
          <p>
            [PT]{' '}
            <a target="_blank" href="tel:+351962452491">
              +351 962 452 491
            </a>
          </p>
          <p>
            [AO]{' '}
            <a target="_blank" href="tel:+244934460434">
              +244 934 460 434
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-6 md:flex-col md:gap-0">
            <a target="_blank" href="">
              Linkedin
            </a>
            <a target="_blank" href="">
              Instagram
            </a>
          </div>
          <Link href="/privacy-policy">Política de Privacidade</Link>
          <Select>
            <SelectTrigger aria-label="change-language" className="justify-start gap-0.5 text-base font-bold">
              <Image className="h-5 w-5 mr-1" alt="language" src="/language.svg" width={34} height={34} unoptimized />
              <SelectValue placeholder="PT" />
            </SelectTrigger>
            <SelectContent className="max-w-40">
              <SelectItem value="pt">PT</SelectItem>
              <SelectItem value="en">EN</SelectItem>
            </SelectContent>
          </Select> 
        </div> */}
      </div>
    </footer>
  );
}
