'use client';

import RootWrapper from '@/components/RootWrapper';
import Link from 'next/link';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  console.error(error);
  return (
    <RootWrapper customClassName="w-full">
      <div className="h-[60dvh] w-full flex flex-col items-center justify-center gap-4">
        <h2>Something went wrong!</h2>
        <span>This project might not exist on this language or there was an error loading it.</span>
        <Link className="shrink-0 underline" href="/">
          Go back to the homepage
        </Link>
      </div>
    </RootWrapper>
  );
}
