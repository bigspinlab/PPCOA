'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const Gif = dynamic(() => import('../Gif'), {
  ssr: false
});

function IntroAnimation() {
  const [serverBackground, setServerBackground] = useState(true);

  return (
    <>
      {serverBackground ? (
        <div
          key={1}
          className="fixed top-0 right-0 left-0 h-dvh w-full z-50 flex items-center justify-center bg-white"
        ></div>
      ) : null}
      <Gif key={2} setServerBackground={setServerBackground} />
    </>
  );
}

export { IntroAnimation };
