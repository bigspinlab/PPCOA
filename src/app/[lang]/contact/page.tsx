'use serve';

import { getHeadless } from '@/api';
import { getStaticMetadata } from '@/api/getStaticMetadata';
import ColumnsContent from '@/components/ColumnsContent';
import FormContact from '@/components/FormContact';
import RootWrapper from '@/components/RootWrapper';
import { ROUTES } from '@/global/constants';
import Rectangle from '@/ui-elements/Rectangle';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const metadata = await getStaticMetadata({ params: { lang: params.lang }, route: ROUTES.contact.path });
  return metadata;
}

// Generate segments for [lang]
// export async function generateStaticParams({ params }: { params: { lang: string } }) {
//   return [
//     {
//       lang: params.lang
//     }
//   ];
// }

export default async function Contact({ params }: { params: { category: string; lang: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [ROUTES.contact.queryKey],
    queryFn: () => getHeadless({ route: ROUTES.contact.path, lang: params.lang })
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RootWrapper customClassName="w-full">
        <h2 className="sr-only">Contact</h2>
        <article className="pt-44 flex flex-col">
          <Rectangle customStyles="bg-red-100 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
          <ColumnsContent params={params} />
        </article>
      </RootWrapper>
      <FormContact params={params} />
    </HydrationBoundary>
  );
}
