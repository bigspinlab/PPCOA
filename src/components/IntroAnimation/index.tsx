'use client';

import { useIsClient } from '@uidotdev/usehooks';
import { Gif } from '../Gif';
import { useEffect, useState } from 'react';

function IntroAnimation() {
  const [removeAnimationBg, setRemoveAnimationBg] = useState(false)
  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) {
      return;
    }
  }, [isClient, removeAnimationBg]);


  if (removeAnimationBg) {
    return null;
  }

  return (
    <section className="fixed top-0 right-0 left-0 h-dvh w-full z-50 flex items-center justify-center bg-white animate-[fadeOut_1.5s_6.5s]">
      <article className="flex items-center justify-center">{isClient ? <Gif setRemoveAnimationBg={setRemoveAnimationBg} /> : null}</article>
    </section>
  );
}

export { IntroAnimation };
