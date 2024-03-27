'use server';

import { Filter } from '@/components/Filter';
import { getProjectDetail } from '@/lib/getProjectDetail';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import ProjectsGrid from '@/components/ProjectsGrid';
import FakeCarousel from '@/components/FakeCarousel';
import { IHeadlessContentPage } from '@/types/home';

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
      images: [seoData?.seo?.imageSrc?.url]
    }
  };
}

export default async function ProjectDetails({ params }: { params: { category: string; projectId: string } }) {
  const { category, projectId } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['projectDetail', projectId],
    queryFn: () => getProjectDetail({ projectName: projectId })
  });

  return (
    <>
      <Filter />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FakeCarousel params={{ category, projectId }} />
        <ProjectsGrid params={{ category, projectId }} />
      </HydrationBoundary>
    </>
  );
}

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const posts = await fetch('http://localhost:8000/projectDetail').then((res) => res.json())

//   return posts
// }
