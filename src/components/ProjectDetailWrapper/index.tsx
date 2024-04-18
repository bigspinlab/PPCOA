'use client';

import { getProjectDetail } from '@/api';
import { ROUTES } from '@/global/constants';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/ui-elements/Skeleton';
import RootWrapper from '../RootWrapper';
import FakeCarousel from '../FakeCarousel';
import ProjectsGrid from '../ProjectsGrid';
import { IHeadlessContentPage } from '@/types';

export default function ProjectDetailWrapper({
  params
}: {
  params: { category: string; projectId: string; lang: string };
}) {
  const { category, projectId } = params;

  const { data: projectDetailData, isLoading } = useQuery<IHeadlessContentPage>({
    queryKey: [ROUTES.projectDetails.queryKey, projectId],
    queryFn: () => getProjectDetail({ projectName: projectId, lang: params.lang })
  });

  if (isLoading) {
    return (
      <>
        <Skeleton className="h-96 pt-44 mb-17 w-full mt-60 md:ml-16 md:mb-36 lg:h-[700px] xl:ml-32" />;
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

  if (!projectDetailData) {
    return null;
  }

  return (
    <>
      <FakeCarousel projectDetailData={projectDetailData} params={{ category, projectId, lang: params.lang }} />
      <ProjectsGrid projectGridData={projectDetailData} />
    </>
  );
}
