'use client';

import { Button } from '@/ui-elements/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ButtonGoBack() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button
      aria-label="go-back"
      variant="ghost"
      className="hover:bg-transparent bg-transparent mb-5 z-[5] md:mb-0 md:pl-0 md:absolute md:left-16 xl:left-32"
      onClick={handleGoBack}
    >
      <Image
        className="h-8 w-8"
        alt="arrow-left-go-back-button"
        src="/arrow-left.svg"
        width={34}
        height={34}
        unoptimized
      />
    </Button>
  );
}
