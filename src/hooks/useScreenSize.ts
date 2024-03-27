import { breakpointDevice } from '@/global/constants';
import { useMediaQuery } from './useMediaQuery';

export const useScreenSize = () => {
  const xsmall = useMediaQuery(breakpointDevice.xsmall);
  const small = useMediaQuery(breakpointDevice.small);
  const medium = useMediaQuery(breakpointDevice.medium);
  const large = useMediaQuery(breakpointDevice.large);
  const xlarge = useMediaQuery(breakpointDevice.xlarge);
  const xxlarge = useMediaQuery(breakpointDevice.xxlarge);

  return {
    isXSmallAndUp: xsmall, // 375px and up
    isSmallAndUp: small, // 425px and up
    isMediumAndUp: medium, // 768px and up
    isLargeAndUp: large, // 1024px  and up
    isXLargeAndUp: xlarge, // 1440px and up
    isXXLargeAndUp: xxlarge // 1920px and up
  };
};
