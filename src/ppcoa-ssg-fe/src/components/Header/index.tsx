'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '../Nav';
import Drawer from '../../ui-elements/Drawer';
import React from 'react';
import { useState } from 'react';
import { Filter } from '../Filter/Filter';
import { useMediaQuery } from 'usehooks-ts';
import { Button } from '@/ui-elements/Button';

export default function Header() {
  const isMediumAndUp = useMediaQuery('(min-width: 768px)');
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full fixed bg-white z-10">
      <div className="m-auto flex justify-between items-center gap-5 px-4 py-1.5 lg:py-3 lg:px-8">
        <Link className="z-20" href="/" onClick={() => setIsOpen(false)}>
          <Image alt="logo-ppcoa" src="logo-ppcoa.svg" width={94} height={58} unoptimized />
        </Link>
        {isMediumAndUp ? <Filter /> : null}
        <Button className="z-20 relative" variant="ghost" type="button" onClick={handleToggleMobileMenu}>
          <span className="block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out"></span>
          <span className="block absolute  h-0.5 w-7 text-white bg-current transform  transition duration-500 ease-in-out"></span>
        </Button>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Nav onRouteClick={handleToggleMobileMenu} />
        </Drawer>
      </div>
    </header>
  );
}
