'use server';

import RichTextContent from '@/components/RichTextContent';
import RootWrapper from '@/components/RootWrapper';
import { getHeadless } from '@/lib/getHeadless';
// import { removeBaseUrl } from '@/lib/utils';
// import { IHeadlessContentPage } from '@/types/home';
import Rectangle from '@/ui-elements/Rectangle';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

// export async function generateMetadata() {
//   const url = `https://danielribamar-001-site1.itempurl.com/api/v1/pages/privacy-policy`;
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'x-content-culture': 'pt'
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

export default async function PrivacyPolicy() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['privacyPolicyContent'],
    queryFn: () => getHeadless({ route: 'privacy-policy' })
  });

  return (
    <RootWrapper>
      <h2 className="sr-only">Privacy Policy</h2>
      <article className="pt-44">
        <Rectangle customStyles="bg-blue-100 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <RichTextContent />
        </HydrationBoundary>
      </article>
    </RootWrapper>
  );
}
