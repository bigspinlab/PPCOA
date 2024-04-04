'use serve';

import { getHeadless } from '@/api';
import ColumnsContent from '@/components/ColumnsContent';
import FormContact from '@/components/FormContact';
import RootWrapper from '@/components/RootWrapper';
import { ROUTES } from '@/global/constants';
import { removeBaseUrl } from '@/global/utils';
import { IHeadlessContentPage } from '@/types';
import Rectangle from '@/ui-elements/Rectangle';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export async function generateMetadata() {
  const url = `https://danielribamar-001-site1.itempurl.com/api/v1/pages/contact`;
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

export default async function Contact({ params }: { params: { category: string, lang: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [ROUTES.contact.queryKey],
    queryFn: () => getHeadless({ route: ROUTES.contact.path, lang: params.lang})
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RootWrapper customClassName="w-full">
        <h2 className="sr-only">Contact</h2>
        <article className="pt-44 flex flex-col">
          <Rectangle customStyles="bg-red-100 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
          <ColumnsContent params={params}/>
        </article>
      </RootWrapper>
      <FormContact params={params}/>
    </HydrationBoundary>
  );
}
