import RootWrapper from '@/components/RootWrapper';
import { Skeleton } from '@/ui-elements/Skeleton';

export default function Loading() {
  return (
    <RootWrapper customClassName="w-full">
      <div className="flex flex-col pt-44">
        <Skeleton className="h-10 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
        <Skeleton className="w-full h-24 mb-24 sm:w-3/4" />
        <div className="w-full mb-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
        <div className="flex flex-col items-start grow">
          <Skeleton className="h-64 space-y-8 w-full md:w-4/5 lg:w-1/2"></Skeleton>
        </div>
      </div>
    </RootWrapper>
  );
}
