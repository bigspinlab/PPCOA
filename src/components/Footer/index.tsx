import Image from 'next/image';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui-elements/Select';

export default function Footer() {
  return (
    <footer className="w-full mt-16 border-t border-solid border-Black py-16 px-4 lg:p-16 lg:mt-24">
      <div className="m-auto flex flex-col gap-6 md:flex-row justify-between">
        <Link href="/" className="shrink-0">
          <Image alt="mark-ppcoa" src="mark-ppcoa.svg" width={40} height={70} unoptimized />
        </Link>

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
        </div>
      </div>
    </footer>
  );
}
