'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '../Nav';
import Drawer from '../../ui-elements/Drawer';
import React from 'react';
import { useState } from 'react';
import { Button } from '@/ui-elements/Button';
import { useQuery } from '@tanstack/react-query';
import { getHeadlessMaster } from '@/api';
import { IHeader, IHeadlessMaster } from '@/types';

export default function Header({ lang }: { lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { data: headerLogo } = useQuery<IHeadlessMaster>({
    queryKey: ['masterPage'],
    queryFn: () => getHeadlessMaster({ lang }),
    staleTime: Infinity
  });

  const logo = headerLogo?.widget[0] as IHeader;

  if (!headerLogo?.widget?.length) {
    return null;
  }

  const handleToggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`w-full flex items-end fixed bg-white z-10 h-17 lg:h-21 ${isOpen ? 'z-20' : ''}`}>
      <div className="w-full h-full mx-auto flex justify-between items-center gap-5 px-4 lg:pl-0 lg:pr-0">
        <Link className="z-20 shrink-0 lg:pl-8" href="/" onClick={() => setIsOpen(false)}>
          <Image
            alt={`header-brand-${logo.content?.brandLogo?.content?.alt}`}
            src={logo.content?.brandLogo?.content?.url}
            width={94}
            height={58}
            priority
            className="w-24 h-auto"
          />
        </Link>
        <Button
          aria-label="toggle-menu"
          className={
            'shrink-0 z-20 relative w-9 h-9 bg-white hover:bg-white p-0 lg:mr-8 ease-in-out lg:min-w-32' +
            (isOpen ? 'delay-500 rotate-45 transition-all lg:mr-8' : 'delay-500 rotate-0 transition-all')
          }
          variant="ghost"
          type="button"
          onClick={handleToggleMobileMenu}
        >
          <span className="block absolute h-px w-full text-black bg-current"></span>
          <span className="block absolute h-px w-full text-black bg-current rotate-90"></span>
        </Button>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Nav onRouteClick={handleToggleMobileMenu} lang={lang} />
        </Drawer>
      </div>
    </header>
  );
}
