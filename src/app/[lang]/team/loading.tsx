import RootWrapper from '@/components/RootWrapper';
import { Skeleton } from '@/ui-elements/Skeleton';

export default function Loading() {
  return (
    <RootWrapper customClassName="w-full">
      <div className="flex flex-col pt-44">
        <Skeleton className="h-10 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
        <div className="w-full">
          <ul className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-y-36 lg:gap-x-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index}>
                <div className="flex flex-col gap-4 md:gap-8 xl:grid xl:grid-cols-2">
                  <div className="relative aspect-square">
                    <Skeleton className="h-64" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-64" />
                    <Skeleton className="h-80" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start grow">
          <Skeleton className="w-2/4 mt-9 ml-auto sm:w-64 sm:mr-9 md:mt-20 md:mr-28 lg:mt-28 lg:mr-72"></Skeleton>
        </div>
      </div>
    </RootWrapper>
  );
}
