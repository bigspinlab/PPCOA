import RootWrapper from '@/components/RootWrapper';
import { Skeleton } from '@/ui-elements/Skeleton';

export default function Loading() {
  return (
    <RootWrapper customClassName="w-full">
      <div className="flex flex-col pt-14 md:pt-44">
        <ul className="w-full max-w-[550px] grid grid-rows-1 m-auto gap-16 lg:gap-20">
          <li>
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-[550px] w-[550px]" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-7 w-full" />
                <Skeleton className="h-6 w-full " />
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-[550px] w-[550px]" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-7 w-full" />
                <Skeleton className="h-6 w-full " />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </RootWrapper>
  );
}
