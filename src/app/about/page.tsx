'use server';

import ImageText from '@/components/ImageText';
import { getHeadless } from '@/lib/getHeadless';
// import { removeBaseUrl } from '@/lib/utils';
// import { IHeadlessContentPage } from '@/types/home';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

// export async function generateMetadata() {
//   const url = `https://danielribamar-001-site1.itempurl.com/api/v1/pages/about`;
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

export default async function About() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['aboutContent'],
    queryFn: () => getHeadless({ route: 'about' })
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ImageText />
    </HydrationBoundary>
  );
}
