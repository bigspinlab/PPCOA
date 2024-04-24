'use client';

import { useSessionStorage } from '@uidotdev/usehooks';
import Image from 'next/image';
import { useEffect } from 'react';

function Gif() {
  const [hasAnimationShown, setHasAnimationShown] = useSessionStorage('ppcoaAnimation', false);

  useEffect(() => {
    if (!hasAnimationShown) {
      const timeout = setTimeout(() => {
        setHasAnimationShown(true);
      }, 6550);

      return () => clearTimeout(timeout);
    } else {
      setHasAnimationShown(true);
    }
  }, [hasAnimationShown, setHasAnimationShown]);

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

export { Gif };
