'use server';

import { getHeadless } from '@/api';
import ImageText from '@/components/ImageText';
import { ROUTES } from '@/global/constants';
import { removeBaseUrl } from '@/global/utils';
import { IHeadlessContentPage } from '@/types';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export async function generateMetadata() {
  const url = `https://danielribamar-001-site1.itempurl.com/api/v1/pages/about`;
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

export default async function About({ params }: { params: { category: string, lang: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [ROUTES.about.queryKey],
    queryFn: () => getHeadless({ route: ROUTES.about.path, lang: params.lang})
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ImageText params={params}/>
    </HydrationBoundary>
  );
}
