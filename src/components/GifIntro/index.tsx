'use client';

import useStorage from '@/hooks/useStorage';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function GifIntro() {
  const { getItem, setItem } = useStorage();
  const [hasAnimationShown, setHasAnimationShown] = useState(false);

  useEffect(() => {
    const token = getItem('ppcoaAnimation', 'session');
    const hasShown = token === 'true';

    if (!hasShown) {
      const timeout = setTimeout(() => {
        setHasAnimationShown(true);
        setItem('ppcoaAnimation', 'true', 'session');
      }, 6509);

      return () => clearTimeout(timeout);
    } else {
      setHasAnimationShown(true);
    }
  }, [getItem, setItem]);

  if (hasAnimationShown) {
    return null;
  }

  return (
    <section className="fixed top-0 right-0 left-0 h-dvh w-full z-50 flex items-center justify-center bg-white animate-[fadeOut_1.5s_6.5s]">
      <article className="flex items-center justify-center">
        <Image
          className="h-full w-full object-contain"
          alt="gif"
          src="/ppcoa-intro-medium.gif"
          fill
          sizes="100vw"
          unoptimized
          priority
        />
      </article>
    </section>
  );
}
