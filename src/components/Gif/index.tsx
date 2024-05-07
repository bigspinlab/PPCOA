'use client';

import { useScreenSize } from '@/hooks/useScreenSize';
import { useSessionStorage } from '@uidotdev/usehooks';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// eslint-disable-next-line no-unused-vars
function Gif({ setServerBackground }: { setServerBackground: (value: React.SetStateAction<boolean>) => void }) {
  const [hasAnimationShown, setHasAnimationShown] = useSessionStorage('ppcoaAnimation', false);
  const { isMediumAndUp } = useScreenSize();

  useEffect(() => {
    if (!hasAnimationShown) {
      const timeout = setTimeout(() => {
        setHasAnimationShown(true);
      }, 7400);

      return () => clearTimeout(timeout);
    } else {
      setServerBackground(false);
      setHasAnimationShown(true);
    }
  }, [hasAnimationShown, setHasAnimationShown, setServerBackground]);

  return (
    <AnimatePresence>
      {!hasAnimationShown ? (
        <motion.article
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed top-0 right-0 left-0 h-dvh w-full z-50 flex items-center justify-center bg-white"
        >
          <div className="flex items-center justify-center relative h-full w-full">
            <Image
              className="h-full w-full object-cover"
              alt="gif"
              src={isMediumAndUp ? '/ppcoa-intro-medium.gif' : '/ppcoa-intro-small.gif'}
              fill
              sizes="100vw"
              unoptimized
              priority
            />
          </div>
        </motion.article>
      ) : null}
    </AnimatePresence>
  );
}

export default Gif;
