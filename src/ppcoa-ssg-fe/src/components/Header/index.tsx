'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '../Nav';
import Drawer from '../../ui-elements/Drawer';
import React from 'react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full fixed bg-white z-10">
      <div className="m-auto flex justify-between items-center gap-5 px-4 py-1.5 lg:py-3 lg:px-8">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image alt="logo-ppcoa" src="logo-ppcoa.svg" width={94} height={58} unoptimized />
        </Link>
        <button type="button" onClick={handleToggleMobileMenu}>
          btn
        </button>
      </div>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Nav onRouteClick={handleToggleMobileMenu} />
      </Drawer>
    </header>
  );
}
