'use server';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import ProjectsGrid from '@/components/ProjectsGrid';
import FakeCarousel from '@/components/FakeCarousel';
import { getProjectDetail } from '@/api';
import { ROUTES } from '@/global/constants';
import { getProjectIdMetadata } from '@/api/getProjectIdMetadata';
// import { IProject, IProjectList } from '@/types';

export async function generateMetadata({ params }:  { params: { category: string; projectId: string; lang: string }}) {
  const metadata = await getProjectIdMetadata({ params });
  return metadata;
}

// Generate segments for both [category] and [projectId]
// export async function generateStaticParams({ params }:  { params: { category: string; lang: string }}) {
//   console.log('projectId', params)
//   const staticParams = await getProjectList<IProjectList>({ category: params.category, perPage: 4, pageNumber: 1, lang: params.lang })

//   return staticParams?.content?.map((project: IProject) => ({
//     projectId: project?.urlNameAlias?.split('/')[2]
//   }));
// }

export default async function ProjectDetails({
  params
}: {
  params: { category: string; projectId: string; lang: string };
}) {
  const { category, projectId } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [ROUTES.projectDetails.queryKey, projectId, params.lang],
    queryFn: () => getProjectDetail({ projectName: projectId, lang: params.lang })
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FakeCarousel params={{ category, projectId, lang: params.lang }} />
      <ProjectsGrid params={{ category, projectId, lang: params.lang }} />
    </HydrationBoundary>
  );
}
