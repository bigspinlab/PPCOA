'use server';

import { getHeadless } from '@/api';
import { getStaticMetadata } from '@/api/getStaticMetadata';
import RichTextContent from '@/components/RichTextContent';
import RootWrapper from '@/components/RootWrapper';
import { ROUTES } from '@/global/constants';
import Rectangle from '@/ui-elements/Rectangle';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const metadata = await getStaticMetadata({ params: { lang: params.lang }, route: ROUTES.privacyPolicy.path });
  return metadata;
}

// Generate segments for [lang]
export async function generateStaticParams({ params }:  { params: { lang: string }}) {
  return [{
    lang: params.lang
  }]
}

export default async function PrivacyPolicy({ params }: { params: { lang: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [ROUTES.privacyPolicy.queryKey],
    queryFn: () => getHeadless({ route: ROUTES.privacyPolicy.path, lang: params.lang })
  });

  return (
    <RootWrapper>
      <h2 className="sr-only">Privacy Policy</h2>
      <article className="pt-44">
        <Rectangle customStyles="bg-blue-100 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <RichTextContent params={params} />
        </HydrationBoundary>
      </article>
    </RootWrapper>
  );
}
