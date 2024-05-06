'use client';

import { useScreenSize } from '@/hooks/useScreenSize';
import { useSessionStorage } from '@uidotdev/usehooks';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// eslint-disable-next-line no-unused-vars
function Gif({ setRemoveAnimationBg }: { setRemoveAnimationBg: (value: React.SetStateAction<boolean>) => void }) {
  const [hasAnimationShown, setHasAnimationShown] = useSessionStorage('ppcoaAnimation', false);
  const { isMediumAndUp } = useScreenSize();

  useEffect(() => {
    if (!hasAnimationShown) {
      const timeout = setTimeout(() => {
        setHasAnimationShown(true);
      }, 7500);

      return () => clearTimeout(timeout);
    } else {
      setRemoveAnimationBg(true);
      setHasAnimationShown(true);
    }
  }, [hasAnimationShown, setHasAnimationShown, setRemoveAnimationBg]);

  useEffect(() => {
    if (hasAnimationShown) {
      setRemoveAnimationBg(true);
    }
  }, [hasAnimationShown, setRemoveAnimationBg]);

  return (
    <AnimatePresence>
      <motion.article
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex items-center justify-center relative h-full w-full"
      >
        <Image
          className="h-full w-full object-cover"
          alt="gif"
          src={isMediumAndUp ? '/ppcoa-intro-medium.gif' : '/ppcoa-intro-small.gif'}
          fill
          sizes="100vw"
          unoptimized
          priority
        />
      </motion.article>
    </AnimatePresence>
  );
}

export default Gif;
