import { useEffect, useState } from 'react';

function useMediaQuery(breakpointDevice: string): boolean {
  const getMatches = (screenSize: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(screenSize).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(breakpointDevice));

  function handleChange() {
    setMatches(getMatches(breakpointDevice));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(breakpointDevice);

    // Triggered at the first client-side load and if query changes
    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpointDevice]);

  return matches;
}

export { useMediaQuery };
