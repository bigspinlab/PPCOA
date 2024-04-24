'use client';

import { useSessionStorage } from '@uidotdev/usehooks';
import Image from 'next/image';
import React, { useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
function Gif({setRemoveAnimationBg}: {setRemoveAnimationBg: (value: React.SetStateAction<boolean>) => void}) {
  const [hasAnimationShown, setHasAnimationShown] = useSessionStorage('ppcoaAnimation', false);

  useEffect(() => {
    if (!hasAnimationShown) {
      const timeout = setTimeout(() => {
        setHasAnimationShown(true);
      }, 6550);

      return () => clearTimeout(timeout);
    } else {
      setRemoveAnimationBg(true)
      setHasAnimationShown(true);
    }
  }, [hasAnimationShown, setHasAnimationShown, setRemoveAnimationBg]);

  if (hasAnimationShown) {
    () => setRemoveAnimationBg(true);
    return null;
  }

  return (
    <Image
      className="h-full w-full object-contain"
      alt="gif"
      src="/ppcoa-intro-medium.gif"
      fill
      sizes="100vw"
      unoptimized
      priority
    />
  );
}

export { Gif };
