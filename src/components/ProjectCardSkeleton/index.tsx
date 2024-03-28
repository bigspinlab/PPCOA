import { Skeleton } from '@/ui-elements/Skeleton';
import React from 'react';

export default function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col gap-1.5">
      <Skeleton className="min-h-[343px] sm:min-h-[550px] max-w-[550px]" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-7 w-full" />
        <Skeleton className="h-6 w-full " />
      </div>
    </div>
  );
}
