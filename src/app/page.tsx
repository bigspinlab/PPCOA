'use server';

import RootWrapper from '@/components/RootWrapper';
import ProjectsList from '@/components/ProjectsList';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Filter } from '@/components/Filter';
import { getHeadless } from '@/lib/getHeadless';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['projectsList'],
    queryFn: () => getHeadless({route: 'home', numberOfItems: 7, page: 1}),
    initialPageParam: 1,
    getNextPageParam: (nextPage: any) => nextPage.nextId ?? undefined,
    maxPages: 3
  });

  return (
    <>
      <Filter />
      <RootWrapper customClassName="w-full">
        <h2 className="sr-only">Project list</h2>
        <article className="pt-14 md:pt-44">
          <ul className="w-full max-w-[550px] grid grid-rows-1 m-auto gap-16 lg:gap-20">
            <HydrationBoundary state={dehydrate(queryClient)}>
              <ProjectsList />
            </HydrationBoundary>
          </ul>
        </article>
      </RootWrapper>
    </>
  );
}
