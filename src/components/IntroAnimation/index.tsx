'use client';

import { useIsClient } from '@uidotdev/usehooks';
import { Gif } from '../Gif';

function IntroAnimation() {
  const isClient = useIsClient();

  if (isClient) {
    return <Gif />;
  }
}

export { IntroAnimation };
