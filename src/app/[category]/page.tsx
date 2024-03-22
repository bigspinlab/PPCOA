'use server';
import { Filter } from '@/components/Filter';
import ProjectsList from '@/components/ProjectsList';
import { getProjectsList } from '@/components/ProjectsList/actions';
import RootWrapper from '@/components/RootWrapper';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

export default async function Category({ params }: { params: { category: string } }) {
  const { category } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [`projectsList${category}`, { page: 1 }],
    queryFn: () => getProjectsList({ page: 1 })
  });

  return (
    <>
      <Filter />
      <RootWrapper customClassName="w-full">
        <h2 className="sr-only">Project list {category}</h2>
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
