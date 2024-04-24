import ProjectCardSkeleton from '@/components/ProjectCardSkeleton';
import RootWrapper from '@/components/RootWrapper';

export default function Loading() {
  return (
    <RootWrapper customClassName="w-full">
      <div className="flex flex-col pt-14 md:pt-44">
        <ul className="w-full max-w-[550px] grid grid-rows-1 mx-auto gap-16 lg:gap-20">
          <li>
            <ProjectCardSkeleton />
          </li>
          <li>
            <ProjectCardSkeleton />
          </li>
        </ul>
      </div>
    </RootWrapper>
  );
}
