'use server';

import { getHeadless } from '@/api';
import RichTextContent from '@/components/RichTextContent';
import RootWrapper from '@/components/RootWrapper';
import { ROUTES } from '@/global/constants';
// import { removeBaseUrl } from '@/global/utils';
// import { IHeadlessContentPage } from '@/types';
import Rectangle from '@/ui-elements/Rectangle';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

// export async function generateMetadata() {
//   const url = `https://danielribamar-001-site1.itempurl.com/api/v1/pages/privacy-policy`;
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'x-content-culture': 'en-US'
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
