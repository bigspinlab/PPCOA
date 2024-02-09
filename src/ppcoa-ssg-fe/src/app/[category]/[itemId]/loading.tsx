import RootWrapper from '@/components/RootWrapper';
import { Skeleton } from '@/ui-elements/Skeleton';

export default function Loading() {
  return (
    <>
      <div className="w-full h-96 pt-44 mb-17 md:mb-36"></div>
      <RootWrapper customClassName="w-full">
        <div className="flex flex-col gap-10">
          <Skeleton className="h-10 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
          <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-3">
            <Skeleton className="h-64" />
            <Skeleton className="h-64" />
            <Skeleton className="h-64" />
            <Skeleton className="h-64" />
            <Skeleton className="h-64" />
            <Skeleton className="h-64" />
          </div>
        </div>
      </RootWrapper>
    </>
  );
}
