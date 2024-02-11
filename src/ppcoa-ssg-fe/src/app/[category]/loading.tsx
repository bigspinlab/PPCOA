import RootWrapper from '@/components/RootWrapper';
import { Skeleton } from '@/ui-elements/Skeleton';

export default function Loading() {
  return (
    <RootWrapper customClassName="w-full">
      <div className="flex flex-col pt-44">
        <Skeleton className="h-10 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
        <Skeleton className="w-full h-24 mb-24 sm:w-3/4" />
      </div>
    </RootWrapper>
  );
}
