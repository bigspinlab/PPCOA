'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function GifIntro() {
  const [showAnimation, setShowAnimation] = useState(true); 

  setTimeout(() => {
    if (showAnimation) {
      setShowAnimation(false);
    }
  }, 6600);

  if (!showAnimation) {
    return null;
  }

  return (
    <section className='fixed top-0 right-0 left-0 h-dvh w-full z-50 flex items-center justify-center bg-white animate-[fadeOut_1.5s_6.5s]'>
      <article className='flex items-center justify-center'>
        <Image className="h-full w-full object-contain" alt="gif" src="/ppcoa-intro-medium.gif" fill sizes='100vw' unoptimized />
      </article>
    </section>
  );
}
