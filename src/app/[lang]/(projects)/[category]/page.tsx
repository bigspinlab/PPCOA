'use server';
import { getProjectList } from '@/api';
import { getCategoryMetadata } from '@/api/getCategoryMetadata';
import ProjectsList from '@/components/ProjectsList';
import RootWrapper from '@/components/RootWrapper';
import { ROUTES } from '@/global/constants';
// import { IHeader, IHeaderNavigationCategories, IHeadlessMaster, IProjectList } from '@/types';
//import { IHeader, IHeaderNavigationCategories, IHeadlessMaster, IProjectList } from '@/types';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

export async function generateMetadata({ params }:  { params: { category: string; lang: string }}) {
  const metadata = await getCategoryMetadata({ params });
  return metadata;
}


// Generate segments for [category]
// export async function generateStaticParams({ params }:  { params: { lang: string }}) {
//   const staticParams = await getHeadlessMaster<IHeadlessMaster>({ lang: params.lang });
//   const headerNavigation = staticParams?.widget[0] as IHeader;

//   console.log('headerNavigation', headerNavigation)
  
//   return headerNavigation?.content?.navigation?.content?.categories?.map((categoryItem: IHeaderNavigationCategories) => ({
//     lang: params.lang,
//     category: categoryItem.url
//   }));
// }

export default async function Category({ params }: { params: { category: string; lang: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [ROUTES.projects.queryKey, params.category, params.lang],
    queryFn: ({ pageParam }) =>
      getProjectList({ category: params.category, perPage: 4, pageNumber: pageParam, lang: params.lang }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) => {
      const hasNextPage = lastPage.widgets[0].settings.next_page > lastPage.widgets[0].settings.current_page;
      const isLastPage = lastPage.widgets[0].settings.current_page === lastPage.widgets[0].settings.total_pages;

      if (hasNextPage && !isLastPage) {
        return lastPage.widgets[0].settings.next_page;
      } else {
        return undefined;
      }
    }
  });

  return (
    <RootWrapper customClassName="w-full">
      <h2 className="sr-only">Project list {params.category}</h2>
      <article className="pt-14 md:pt-44">
        <ul className="w-full max-w-[550px] flex flex-col m-auto gap-16 lg:gap-20">
          <HydrationBoundary state={dehydrate(queryClient)}>
            <ProjectsList params={params} />
          </HydrationBoundary>
        </ul>
      </article>
    </RootWrapper>
  );
}
