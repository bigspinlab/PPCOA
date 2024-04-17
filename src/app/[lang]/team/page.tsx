'use server';

import { getHeadless } from '@/api';
import { getStaticMetadata } from '@/api/getStaticMetadata';
import RootWrapper from '@/components/RootWrapper';
import TeamCardList from '@/components/TeamCardList';
import { ROUTES } from '@/global/constants';
import Rectangle from '@/ui-elements/Rectangle';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const metadata = await getStaticMetadata({ params: { lang: params.lang }, route: ROUTES.team.path });
  return metadata;
}

// Generate segments for [lang]
export async function generateStaticParams({ params }:  { params: { lang: string }}) {
  return [{
    lang: params.lang
  }]
}

export default async function Team({ params }: { params: { category: string; lang: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [ROUTES.team.queryKey],
    queryFn: () => getHeadless({ route: ROUTES.team.path, lang: params.lang })
  });

  return (
    <RootWrapper customClassName="w-full">
      <h2 className="sr-only">Team list</h2>
      <article className="pt-44">
        <Rectangle customStyles="bg-red-100 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <TeamCardList params={params} />
        </HydrationBoundary>
        <Rectangle customStyles="bg-red-100 w-2/4 mt-9 ml-auto sm:w-64 sm:mr-9 md:mt-20 md:mr-28 lg:mt-28 lg:mr-72" />
      </article>
    </RootWrapper>
  );
}
