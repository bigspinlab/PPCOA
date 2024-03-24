'use server';

import RichTextContent from '@/components/RichTextContent';
import RootWrapper from '@/components/RootWrapper';
import { getHeadless } from '@/lib/getHeadless';
import Rectangle from '@/ui-elements/Rectangle';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

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
