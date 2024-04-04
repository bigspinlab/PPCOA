'use server';

import RootWrapper from '@/components/RootWrapper';
import TeamCardList from '@/components/TeamCardList';
import { getHeadless } from '@/lib/getHeadless';
import { removeBaseUrl } from '@/lib/utils';
import { IHeadlessContentPage } from '@/types/home';
import Rectangle from '@/ui-elements/Rectangle';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export async function generateMetadata() {
  const url = `https://danielribamar-001-site1.itempurl.com/api/v1/pages/team`;
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

export default async function Team() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['teamList'],
    queryFn: () => getHeadless({ route: 'team' })
  });

  return (
    <RootWrapper>
      <h2 className="sr-only">Team list</h2>
      <article className="pt-44">
        <Rectangle customStyles="bg-red-100 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <TeamCardList />
        </HydrationBoundary>
        <Rectangle customStyles="bg-red-100 w-2/4 mt-9 ml-auto sm:w-64 sm:mr-9 md:mt-20 md:mr-28 lg:mt-28 lg:mr-72" />
      </article>
    </RootWrapper>
  );
}
