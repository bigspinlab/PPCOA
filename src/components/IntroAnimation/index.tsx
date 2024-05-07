'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const Gif = dynamic(() => import('../Gif'), {
  ssr: false
});

function IntroAnimation() {
  const [removeAnimationBg, setRemoveAnimationBg] = useState(false);

  return (
    <AnimatePresence>
      {!removeAnimationBg ? (
        <motion.section
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 right-0 left-0 h-dvh w-full z-50 flex items-center justify-center bg-white"
        >
          <Gif setRemoveAnimationBg={setRemoveAnimationBg} />
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}

export { IntroAnimation };
