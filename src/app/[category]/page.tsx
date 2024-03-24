'use server';
import { Filter } from '@/components/Filter';
import ProjectsList from '@/components/ProjectsList';
import RootWrapper from '@/components/RootWrapper';
import { getProjectList } from '@/lib/getProjectList';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

export default async function Category({ params }: { params: { category: string } }) {
  const { category } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['projectsList'],
    queryFn: () => getProjectList({ category, perPage: 7, pageNumber: 1 }),
    initialPageParam: 1,
    getNextPageParam: (nextPage: any) => nextPage[0].settings.next_page ?? undefined
  });

  return (
    <>
      <Filter />
      <RootWrapper customClassName="w-full">
        <h2 className="sr-only">Project list {category}</h2>
        <article className="pt-14 md:pt-44">
          <ul className="w-full max-w-[550px] grid grid-rows-1 m-auto gap-16 lg:gap-20">
            <HydrationBoundary state={dehydrate(queryClient)}>
              <ProjectsList projectCategory={category} />
            </HydrationBoundary>
          </ul>
        </article>
      </RootWrapper>
    </>
  );
}
