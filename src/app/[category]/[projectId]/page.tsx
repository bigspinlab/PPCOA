'use server';

import { Filter } from '@/components/Filter';
import { getProjectDetail } from '@/lib/getProjectDetail';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import ProjectsGrid from '@/components/ProjectsGrid';
import FakeCarousel from '@/components/FakeCarousel';
// import type { Metadata, ResolvingMetadata }  'next'

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#usage
// type Props = {
//   params: { category: string; projectId: string }
// }

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.category

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }

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
