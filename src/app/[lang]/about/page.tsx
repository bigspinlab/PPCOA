'use server';

import { getHeadless } from '@/api';
import { getStaticMetadata } from '@/api/getStaticMetadata';
import ImageText from '@/components/ImageText';
import { ROUTES } from '@/global/constants';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const metadata = await getStaticMetadata({ params: { lang: params.lang }, route: ROUTES.about.path });
  return metadata;
}

// Generate segments for [lang]
export async function generateStaticParams({ params }: { params: { lang: string } }) {
  return [
    {
      lang: params.lang
    }
  ];
}

export default async function About({ params }: { params: { category: string; lang: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [ROUTES.about.queryKey],
    queryFn: () => getHeadless({ route: ROUTES.about.path, lang: params.lang })
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ImageText params={params} />
    </HydrationBoundary>
  );
}
