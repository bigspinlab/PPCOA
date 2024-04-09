'use server';
import { getProjectList } from '@/api';
import ProjectsList from '@/components/ProjectsList';
import RootWrapper from '@/components/RootWrapper';
import { ROUTES } from '@/global/constants';
import { IProjectList } from '@/types';
// import { removeBaseUrl } from '@/global/utils';
// import { IHeadlessContentPage } from '@/types';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

// export async function generateMetadata({ params }: { params: { category: string; lang: string } }) {
//   const url = `https://danielribamar-001-site1.itempurl.com/api/v1/categories/${params.category}`;
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'x-content-culture': params.lang
//     }
//   });

//   const seoData: IHeadlessContentPage = await response.json();
//   return {
//     title: `PPCOA :: ${seoData?.seo?.title}`,
//     description: seoData?.seo?.description,
//     metadataBase: new URL('https://danielribamar-001-site1.itempurl.com/'),
//     openGraph: {
//       images: [removeBaseUrl(seoData?.seo?.imageSrc?.url)]
//     }
//   };
// }

// Generate segments for both [category] and [product]
// export async function generateStaticParams() {
//   const url = `https://danielribamar-001-site1.itempurl.com/api/v1/content/master`;
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'x-content-culture': 'en-US'
//     }
//   });

//   const staticParams = await response.json();

//   return staticParams?.widget[0]?.content?.navigation?.content?.categories?.map((categoryItem: any) => ({
//     category: categoryItem.url
//   }));
// }

export default async function Category({ params }: { params: { category: string; lang: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [ROUTES.projects.queryKey, params.category, params.lang],
    queryFn: ({ pageParam }) => getProjectList<IProjectList>({ category: params.category, perPage: 4, pageNumber: pageParam, lang: params.lang }),
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
