'use server';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import ProjectsGrid from '@/components/ProjectsGrid';
import FakeCarousel from '@/components/FakeCarousel';
import { IHeadlessContentPage } from '@/types';
import { removeBaseUrl } from '@/global/utils';
import { getProjectDetail } from '@/api';
import { ROUTES } from '@/global/constants';

export async function generateMetadata({ params }: { params: { category: string; projectId: string } }) {
  const url = `https://danielribamar-001-site1.itempurl.com/api/v1/projects?route=/projects/${params.category}/${params.projectId}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-content-culture': 'en-US'
    }
  });

  const seoData: IHeadlessContentPage = await response.json();

  return {
    title: `PPCOA :: ${seoData?.seo?.title}`,
    description: seoData?.seo?.description,
    metadataBase: new URL('https://danielribamar-001-site1.itempurl.com/'),
    openGraph: {
      images: [removeBaseUrl(seoData?.seo?.imageSrc?.url)]
    }
  };
}

// Generate segments for both [category] and [product]
export async function generateStaticParams() {
  const url = `http://danielribamar-001-site1.itempurl.com/api/v1/categories/todos`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-content-culture': 'en-US'
    }
  });

  const staticParams = await response.json();

  return staticParams?.widgets[0]?.content?.map((project: any) => ({
    category: project?.urlNameAlias?.split('/')[1],
    projectId: project?.urlNameAlias?.split('/')[2]
  }));
}

export default async function ProjectDetails({ params }: { params: { category: string; projectId: string; lang: string } }) {
  const { category, projectId } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [ROUTES.projectDetails.queryKey, projectId, params.lang],
    queryFn: () => getProjectDetail({ projectName: projectId, lang: params.lang})
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FakeCarousel params={{ category, projectId, lang: params.lang }} />
      <ProjectsGrid params={{ category, projectId, lang: params.lang }} />
    </HydrationBoundary>
  );
}